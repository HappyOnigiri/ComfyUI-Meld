import { api as Y } from "../../../scripts/api.js";
import { app as Po } from "../../../scripts/app.js";
function od(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Do = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr = Symbol.for("react.element"), ud = Symbol.for("react.portal"), cd = Symbol.for("react.fragment"), dd = Symbol.for("react.strict_mode"), fd = Symbol.for("react.profiler"), pd = Symbol.for("react.provider"), md = Symbol.for("react.context"), hd = Symbol.for("react.forward_ref"), gd = Symbol.for("react.suspense"), yd = Symbol.for("react.memo"), vd = Symbol.for("react.lazy"), va = Symbol.iterator;
function wd(e) {
  return e === null || typeof e != "object" ? null : (e = va && e[va] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ro = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, bo = Object.assign, zo = {};
function On(e, t, n) {
  this.props = e, this.context = t, this.refs = zo, this.updater = n || Ro;
}
On.prototype.isReactComponent = {};
On.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
On.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Oo() {
}
Oo.prototype = On.prototype;
function _s(e, t, n) {
  this.props = e, this.context = t, this.refs = zo, this.updater = n || Ro;
}
var Ss = _s.prototype = new Oo();
Ss.constructor = _s;
bo(Ss, On.prototype);
Ss.isPureReactComponent = !0;
var wa = Array.isArray, Fo = Object.prototype.hasOwnProperty, ks = { current: null }, Ao = { key: !0, ref: !0, __self: !0, __source: !0 };
function $o(e, t, n) {
  var r, l = {}, i = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) Fo.call(t, r) && !Ao.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), f = 0; f < o; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: Cr, type: e, key: i, ref: a, props: l, _owner: ks.current };
}
function xd(e, t) {
  return { $$typeof: Cr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Es(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cr;
}
function _d(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var xa = /\/+/g;
function ql(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? _d("" + e.key) : t.toString(36);
}
function Xr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (i) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Cr:
        case ud:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + ql(a, 0) : r, wa(l) ? (n = "", e != null && (n = e.replace(xa, "$&/") + "/"), Xr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (Es(l) && (l = xd(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(xa, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", wa(e)) for (var o = 0; o < e.length; o++) {
    i = e[o];
    var u = r + ql(i, o);
    a += Xr(i, t, n, u, l);
  }
  else if (u = wd(e), typeof u == "function") for (e = u.call(e), o = 0; !(i = e.next()).done; ) i = i.value, u = r + ql(i, o++), a += Xr(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Pr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Xr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Sd(e) {
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
var Pe = { current: null }, Zr = { transition: null }, kd = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: Zr, ReactCurrentOwner: ks };
function Vo() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = { map: Pr, forEach: function(e, t, n) {
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
  if (!Es(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
K.Component = On;
K.Fragment = cd;
K.Profiler = fd;
K.PureComponent = _s;
K.StrictMode = dd;
K.Suspense = gd;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kd;
K.act = Vo;
K.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = bo({}, e.props), l = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = ks.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Fo.call(t, u) && !Ao.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var f = 0; f < u; f++) o[f] = arguments[f + 2];
    r.children = o;
  }
  return { $$typeof: Cr, type: e.type, key: l, ref: i, props: r, _owner: a };
};
K.createContext = function(e) {
  return e = { $$typeof: md, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: pd, _context: e }, e.Consumer = e;
};
K.createElement = $o;
K.createFactory = function(e) {
  var t = $o.bind(null, e);
  return t.type = e, t;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(e) {
  return { $$typeof: hd, render: e };
};
K.isValidElement = Es;
K.lazy = function(e) {
  return { $$typeof: vd, _payload: { _status: -1, _result: e }, _init: Sd };
};
K.memo = function(e, t) {
  return { $$typeof: yd, type: e, compare: t === void 0 ? null : t };
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
K.unstable_act = Vo;
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
Do.exports = K;
var v = Do.exports;
const _a = /* @__PURE__ */ od(v);
var Uo = { exports: {} }, We = {}, Qo = { exports: {} }, Wo = {};
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
  function t(N, A) {
    var F = N.length;
    N.push(A);
    e: for (; 0 < F; ) {
      var j = F - 1 >>> 1, Q = N[j];
      if (0 < l(Q, A)) N[j] = A, N[F] = Q, F = j;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var A = N[0], F = N.pop();
    if (F !== A) {
      N[0] = F;
      e: for (var j = 0, Q = N.length, G = Q >>> 1; j < G; ) {
        var se = 2 * (j + 1) - 1, He = N[se], ke = se + 1, Et = N[ke];
        if (0 > l(He, F)) ke < Q && 0 > l(Et, He) ? (N[j] = Et, N[ke] = F, j = ke) : (N[j] = He, N[se] = F, j = se);
        else if (ke < Q && 0 > l(Et, F)) N[j] = Et, N[ke] = F, j = ke;
        else break e;
      }
    }
    return A;
  }
  function l(N, A) {
    var F = N.sortIndex - A.sortIndex;
    return F !== 0 ? F : N.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var a = Date, o = a.now();
    e.unstable_now = function() {
      return a.now() - o;
    };
  }
  var u = [], f = [], x = 1, _ = null, h = 3, w = !1, y = !1, S = !1, T = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var A = n(f); A !== null; ) {
      if (A.callback === null) r(f);
      else if (A.startTime <= N) r(f), A.sortIndex = A.expirationTime, t(u, A);
      else break;
      A = n(f);
    }
  }
  function E(N) {
    if (S = !1, p(N), !y) if (n(u) !== null) y = !0, U(L);
    else {
      var A = n(f);
      A !== null && ee(E, A.startTime - N);
    }
  }
  function L(N, A) {
    y = !1, S && (S = !1, c(R), R = -1), w = !0;
    var F = h;
    try {
      for (p(A), _ = n(u); _ !== null && (!(_.expirationTime > A) || N && !k()); ) {
        var j = _.callback;
        if (typeof j == "function") {
          _.callback = null, h = _.priorityLevel;
          var Q = j(_.expirationTime <= A);
          A = e.unstable_now(), typeof Q == "function" ? _.callback = Q : _ === n(u) && r(u), p(A);
        } else r(u);
        _ = n(u);
      }
      if (_ !== null) var G = !0;
      else {
        var se = n(f);
        se !== null && ee(E, se.startTime - A), G = !1;
      }
      return G;
    } finally {
      _ = null, h = F, w = !1;
    }
  }
  var z = !1, C = null, R = -1, B = 5, $ = -1;
  function k() {
    return !(e.unstable_now() - $ < B);
  }
  function g() {
    if (C !== null) {
      var N = e.unstable_now();
      $ = N;
      var A = !0;
      try {
        A = C(!0, N);
      } finally {
        A ? P() : (z = !1, C = null);
      }
    } else z = !1;
  }
  var P;
  if (typeof d == "function") P = function() {
    d(g);
  };
  else if (typeof MessageChannel < "u") {
    var m = new MessageChannel(), D = m.port2;
    m.port1.onmessage = g, P = function() {
      D.postMessage(null);
    };
  } else P = function() {
    T(g, 0);
  };
  function U(N) {
    C = N, z || (z = !0, P());
  }
  function ee(N, A) {
    R = T(function() {
      N(e.unstable_now());
    }, A);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    y || w || (y = !0, U(L));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(N) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var A = 3;
        break;
      default:
        A = h;
    }
    var F = h;
    h = A;
    try {
      return N();
    } finally {
      h = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, A) {
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
    var F = h;
    h = N;
    try {
      return A();
    } finally {
      h = F;
    }
  }, e.unstable_scheduleCallback = function(N, A, F) {
    var j = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? j + F : j) : F = j, N) {
      case 1:
        var Q = -1;
        break;
      case 2:
        Q = 250;
        break;
      case 5:
        Q = 1073741823;
        break;
      case 4:
        Q = 1e4;
        break;
      default:
        Q = 5e3;
    }
    return Q = F + Q, N = { id: x++, callback: A, priorityLevel: N, startTime: F, expirationTime: Q, sortIndex: -1 }, F > j ? (N.sortIndex = F, t(f, N), n(u) === null && N === n(f) && (S ? (c(R), R = -1) : S = !0, ee(E, F - j))) : (N.sortIndex = Q, t(u, N), y || w || (y = !0, U(L))), N;
  }, e.unstable_shouldYield = k, e.unstable_wrapCallback = function(N) {
    var A = h;
    return function() {
      var F = h;
      h = A;
      try {
        return N.apply(this, arguments);
      } finally {
        h = F;
      }
    };
  };
})(Wo);
Qo.exports = Wo;
var Ed = Qo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd = v, Qe = Ed;
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Go = /* @__PURE__ */ new Set(), or = {};
function ln(e, t) {
  In(e, t), In(e + "Capture", t);
}
function In(e, t) {
  for (or[e] = t, e = 0; e < t.length; e++) Go.add(t[e]);
}
var wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ci = Object.prototype.hasOwnProperty, jd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Sa = {}, ka = {};
function Nd(e) {
  return Ci.call(ka, e) ? !0 : Ci.call(Sa, e) ? !1 : jd.test(e) ? ka[e] = !0 : (Sa[e] = !0, !1);
}
function Id(e, t, n, r) {
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
function Td(e, t, n, r) {
  if (t === null || typeof t > "u" || Id(e, t, n, r)) return !0;
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
function De(e, t, n, r, l, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Se[e] = new De(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Se[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Se[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Se[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Se[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Se[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Se[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Se[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Se[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cs = /[\-:]([a-z])/g;
function js(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Cs,
    js
  );
  Se[t] = new De(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Cs, js);
  Se[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Cs, js);
  Se[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Se[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Se[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ns(e, t, n, r) {
  var l = Se.hasOwnProperty(t) ? Se[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Td(t, n, l, r) && (n = null), r || l === null ? Nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Dr = Symbol.for("react.element"), cn = Symbol.for("react.portal"), dn = Symbol.for("react.fragment"), Is = Symbol.for("react.strict_mode"), ji = Symbol.for("react.profiler"), Ho = Symbol.for("react.provider"), Bo = Symbol.for("react.context"), Ts = Symbol.for("react.forward_ref"), Ni = Symbol.for("react.suspense"), Ii = Symbol.for("react.suspense_list"), Ms = Symbol.for("react.memo"), jt = Symbol.for("react.lazy"), Ko = Symbol.for("react.offscreen"), Ea = Symbol.iterator;
function $n(e) {
  return e === null || typeof e != "object" ? null : (e = Ea && e[Ea] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ue = Object.assign, ei;
function Kn(e) {
  if (ei === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ei = t && t[1] || "";
  }
  return `
` + ei + e;
}
var ti = !1;
function ni(e, t) {
  if (!e || ti) return "";
  ti = !0;
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
      } catch (f) {
        var r = f;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (f) {
        r = f;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var l = f.stack.split(`
`), i = r.stack.split(`
`), a = l.length - 1, o = i.length - 1; 1 <= a && 0 <= o && l[a] !== i[o]; ) o--;
      for (; 1 <= a && 0 <= o; a--, o--) if (l[a] !== i[o]) {
        if (a !== 1 || o !== 1)
          do
            if (a--, o--, 0 > o || l[a] !== i[o]) {
              var u = `
` + l[a].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= a && 0 <= o);
        break;
      }
    }
  } finally {
    ti = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Kn(e) : "";
}
function Md(e) {
  switch (e.tag) {
    case 5:
      return Kn(e.type);
    case 16:
      return Kn("Lazy");
    case 13:
      return Kn("Suspense");
    case 19:
      return Kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ni(e.type, !1), e;
    case 11:
      return e = ni(e.type.render, !1), e;
    case 1:
      return e = ni(e.type, !0), e;
    default:
      return "";
  }
}
function Ti(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case dn:
      return "Fragment";
    case cn:
      return "Portal";
    case ji:
      return "Profiler";
    case Is:
      return "StrictMode";
    case Ni:
      return "Suspense";
    case Ii:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Bo:
      return (e.displayName || "Context") + ".Consumer";
    case Ho:
      return (e._context.displayName || "Context") + ".Provider";
    case Ts:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ms:
      return t = e.displayName || null, t !== null ? t : Ti(e.type) || "Memo";
    case jt:
      t = e._payload, e = e._init;
      try {
        return Ti(e(t));
      } catch {
      }
  }
  return null;
}
function Ld(e) {
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
      return Ti(t);
    case 8:
      return t === Is ? "StrictMode" : "Mode";
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
function $t(e) {
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
function Yo(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Pd(e) {
  var t = Yo(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(a) {
      r = "" + a, i.call(this, a);
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
  e._valueTracker || (e._valueTracker = Pd(e));
}
function Xo(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Yo(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ul(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Mi(e, t) {
  var n = t.checked;
  return ue({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ca(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Zo(e, t) {
  t = t.checked, t != null && Ns(e, "checked", t, !1);
}
function Li(e, t) {
  Zo(e, t);
  var n = $t(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Pi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Pi(e, t.type, $t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ja(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Pi(e, t, n) {
  (t !== "number" || ul(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yn = Array.isArray;
function Sn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Di(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return ue({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Na(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(M(92));
      if (Yn(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: $t(n) };
}
function Jo(e, t) {
  var n = $t(t.value), r = $t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ia(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qo(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ri(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? qo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var br, eu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (br = br || document.createElement("div"), br.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = br.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
var Jn = {
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
}, Dd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function(e) {
  Dd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Jn[t] = Jn[e];
  });
});
function tu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jn.hasOwnProperty(e) && Jn[e] ? ("" + t).trim() : t + "px";
}
function nu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = tu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Rd = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function bi(e, t) {
  if (t) {
    if (Rd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function zi(e, t) {
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
var Oi = null;
function Ls(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Fi = null, kn = null, En = null;
function Ta(e) {
  if (e = Ir(e)) {
    if (typeof Fi != "function") throw Error(M(280));
    var t = e.stateNode;
    t && (t = Fl(t), Fi(e.stateNode, e.type, t));
  }
}
function ru(e) {
  kn ? En ? En.push(e) : En = [e] : kn = e;
}
function lu() {
  if (kn) {
    var e = kn, t = En;
    if (En = kn = null, Ta(e), t) for (e = 0; e < t.length; e++) Ta(t[e]);
  }
}
function iu(e, t) {
  return e(t);
}
function su() {
}
var ri = !1;
function au(e, t, n) {
  if (ri) return e(t, n);
  ri = !0;
  try {
    return iu(e, t, n);
  } finally {
    ri = !1, (kn !== null || En !== null) && (su(), lu());
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
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Ai = !1;
if (wt) try {
  var Vn = {};
  Object.defineProperty(Vn, "passive", { get: function() {
    Ai = !0;
  } }), window.addEventListener("test", Vn, Vn), window.removeEventListener("test", Vn, Vn);
} catch {
  Ai = !1;
}
function bd(e, t, n, r, l, i, a, o, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (x) {
    this.onError(x);
  }
}
var qn = !1, cl = null, dl = !1, $i = null, zd = { onError: function(e) {
  qn = !0, cl = e;
} };
function Od(e, t, n, r, l, i, a, o, u) {
  qn = !1, cl = null, bd.apply(zd, arguments);
}
function Fd(e, t, n, r, l, i, a, o, u) {
  if (Od.apply(this, arguments), qn) {
    if (qn) {
      var f = cl;
      qn = !1, cl = null;
    } else throw Error(M(198));
    dl || (dl = !0, $i = f);
  }
}
function sn(e) {
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
function ou(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ma(e) {
  if (sn(e) !== e) throw Error(M(188));
}
function Ad(e) {
  var t = e.alternate;
  if (!t) {
    if (t = sn(e), t === null) throw Error(M(188));
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
        if (i === n) return Ma(l), e;
        if (i === r) return Ma(l), t;
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var a = !1, o = l.child; o; ) {
        if (o === n) {
          a = !0, n = l, r = i;
          break;
        }
        if (o === r) {
          a = !0, r = l, n = i;
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = i.child; o; ) {
          if (o === n) {
            a = !0, n = i, r = l;
            break;
          }
          if (o === r) {
            a = !0, r = i, n = l;
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function uu(e) {
  return e = Ad(e), e !== null ? cu(e) : null;
}
function cu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var du = Qe.unstable_scheduleCallback, La = Qe.unstable_cancelCallback, $d = Qe.unstable_shouldYield, Vd = Qe.unstable_requestPaint, fe = Qe.unstable_now, Ud = Qe.unstable_getCurrentPriorityLevel, Ps = Qe.unstable_ImmediatePriority, fu = Qe.unstable_UserBlockingPriority, fl = Qe.unstable_NormalPriority, Qd = Qe.unstable_LowPriority, pu = Qe.unstable_IdlePriority, Rl = null, ft = null;
function Wd(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function") try {
    ft.onCommitFiberRoot(Rl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var st = Math.clz32 ? Math.clz32 : Bd, Gd = Math.log, Hd = Math.LN2;
function Bd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Gd(e) / Hd | 0) | 0;
}
var zr = 64, Or = 4194304;
function Xn(e) {
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
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? r = Xn(o) : (i &= a, i !== 0 && (r = Xn(i)));
  } else a = n & ~l, a !== 0 ? r = Xn(a) : i !== 0 && (r = Xn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - st(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Kd(e, t) {
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
function Yd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - st(i), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = Kd(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o;
  }
}
function Vi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function mu() {
  var e = zr;
  return zr <<= 1, !(zr & 4194240) && (zr = 64), e;
}
function li(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function jr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - st(t), e[t] = n;
}
function Xd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - st(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function Ds(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - st(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var te = 0;
function hu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var gu, Rs, yu, vu, wu, Ui = !1, Fr = [], Pt = null, Dt = null, Rt = null, dr = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map(), It = [], Zd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Pa(e, t) {
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
function Un(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Ir(t), t !== null && Rs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Jd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Pt = Un(Pt, e, t, n, r, l), !0;
    case "dragenter":
      return Dt = Un(Dt, e, t, n, r, l), !0;
    case "mouseover":
      return Rt = Un(Rt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return dr.set(i, Un(dr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, fr.set(i, Un(fr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function xu(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = sn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ou(n), t !== null) {
          e.blockedOn = t, wu(e.priority, function() {
            yu(n);
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
    var n = Qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Oi = r, n.target.dispatchEvent(r), Oi = null;
    } else return t = Ir(n), t !== null && Rs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Da(e, t, n) {
  Jr(e) && n.delete(t);
}
function qd() {
  Ui = !1, Pt !== null && Jr(Pt) && (Pt = null), Dt !== null && Jr(Dt) && (Dt = null), Rt !== null && Jr(Rt) && (Rt = null), dr.forEach(Da), fr.forEach(Da);
}
function Qn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ui || (Ui = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, qd)));
}
function pr(e) {
  function t(l) {
    return Qn(l, e);
  }
  if (0 < Fr.length) {
    Qn(Fr[0], e);
    for (var n = 1; n < Fr.length; n++) {
      var r = Fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Pt !== null && Qn(Pt, e), Dt !== null && Qn(Dt, e), Rt !== null && Qn(Rt, e), dr.forEach(t), fr.forEach(t), n = 0; n < It.length; n++) r = It[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < It.length && (n = It[0], n.blockedOn === null); ) xu(n), n.blockedOn === null && It.shift();
}
var Cn = kt.ReactCurrentBatchConfig, ml = !0;
function ef(e, t, n, r) {
  var l = te, i = Cn.transition;
  Cn.transition = null;
  try {
    te = 1, bs(e, t, n, r);
  } finally {
    te = l, Cn.transition = i;
  }
}
function tf(e, t, n, r) {
  var l = te, i = Cn.transition;
  Cn.transition = null;
  try {
    te = 4, bs(e, t, n, r);
  } finally {
    te = l, Cn.transition = i;
  }
}
function bs(e, t, n, r) {
  if (ml) {
    var l = Qi(e, t, n, r);
    if (l === null) mi(e, t, r, hl, n), Pa(e, r);
    else if (Jd(l, e, t, n, r)) r.stopPropagation();
    else if (Pa(e, r), t & 4 && -1 < Zd.indexOf(e)) {
      for (; l !== null; ) {
        var i = Ir(l);
        if (i !== null && gu(i), i = Qi(e, t, n, r), i === null && mi(e, t, r, hl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else mi(e, t, r, null, n);
  }
}
var hl = null;
function Qi(e, t, n, r) {
  if (hl = null, e = Ls(r), e = Kt(e), e !== null) if (t = sn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ou(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return hl = e, null;
}
function _u(e) {
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
      switch (Ud()) {
        case Ps:
          return 1;
        case fu:
          return 4;
        case fl:
        case Qd:
          return 16;
        case pu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null, zs = null, qr = null;
function Su() {
  if (qr) return qr;
  var e, t = zs, n = t.length, r, l = "value" in Mt ? Mt.value : Mt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[i - r]; r++) ;
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
  function t(n, r, l, i, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ar : Ra, this.isPropagationStopped = Ra, this;
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
var Fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Os = Ge(Fn), Nr = ue({}, Fn, { view: 0, detail: 0 }), nf = Ge(Nr), ii, si, Wn, bl = ue({}, Nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Wn && (Wn && e.type === "mousemove" ? (ii = e.screenX - Wn.screenX, si = e.screenY - Wn.screenY) : si = ii = 0, Wn = e), ii);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : si;
} }), ba = Ge(bl), rf = ue({}, bl, { dataTransfer: 0 }), lf = Ge(rf), sf = ue({}, Nr, { relatedTarget: 0 }), ai = Ge(sf), af = ue({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), of = Ge(af), uf = ue({}, Fn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), cf = Ge(uf), df = ue({}, Fn, { data: 0 }), za = Ge(df), ff = {
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
}, pf = {
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
}, mf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function hf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mf[e]) ? !!t[e] : !1;
}
function Fs() {
  return hf;
}
var gf = ue({}, Nr, { key: function(e) {
  if (e.key) {
    var t = ff[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = el(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fs, charCode: function(e) {
  return e.type === "keypress" ? el(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? el(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), yf = Ge(gf), vf = ue({}, bl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oa = Ge(vf), wf = ue({}, Nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fs }), xf = Ge(wf), _f = ue({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sf = Ge(_f), kf = ue({}, bl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ef = Ge(kf), Cf = [9, 13, 27, 32], As = wt && "CompositionEvent" in window, er = null;
wt && "documentMode" in document && (er = document.documentMode);
var jf = wt && "TextEvent" in window && !er, ku = wt && (!As || er && 8 < er && 11 >= er), Fa = " ", Aa = !1;
function Eu(e, t) {
  switch (e) {
    case "keyup":
      return Cf.indexOf(t.keyCode) !== -1;
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
function Cu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function Nf(e, t) {
  switch (e) {
    case "compositionend":
      return Cu(t);
    case "keypress":
      return t.which !== 32 ? null : (Aa = !0, Fa);
    case "textInput":
      return e = t.data, e === Fa && Aa ? null : e;
    default:
      return null;
  }
}
function If(e, t) {
  if (fn) return e === "compositionend" || !As && Eu(e, t) ? (e = Su(), qr = zs = Mt = null, fn = !1, e) : null;
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
      return ku && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Tf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function $a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Tf[e.type] : t === "textarea";
}
function ju(e, t, n, r) {
  ru(r), t = gl(t, "onChange"), 0 < t.length && (n = new Os("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var tr = null, mr = null;
function Mf(e) {
  Ou(e, 0);
}
function zl(e) {
  var t = hn(e);
  if (Xo(t)) return e;
}
function Lf(e, t) {
  if (e === "change") return t;
}
var Nu = !1;
if (wt) {
  var oi;
  if (wt) {
    var ui = "oninput" in document;
    if (!ui) {
      var Va = document.createElement("div");
      Va.setAttribute("oninput", "return;"), ui = typeof Va.oninput == "function";
    }
    oi = ui;
  } else oi = !1;
  Nu = oi && (!document.documentMode || 9 < document.documentMode);
}
function Ua() {
  tr && (tr.detachEvent("onpropertychange", Iu), mr = tr = null);
}
function Iu(e) {
  if (e.propertyName === "value" && zl(mr)) {
    var t = [];
    ju(t, mr, e, Ls(e)), au(Mf, t);
  }
}
function Pf(e, t, n) {
  e === "focusin" ? (Ua(), tr = t, mr = n, tr.attachEvent("onpropertychange", Iu)) : e === "focusout" && Ua();
}
function Df(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return zl(mr);
}
function Rf(e, t) {
  if (e === "click") return zl(t);
}
function bf(e, t) {
  if (e === "input" || e === "change") return zl(t);
}
function zf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ot = typeof Object.is == "function" ? Object.is : zf;
function hr(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ci.call(t, l) || !ot(e[l], t[l])) return !1;
  }
  return !0;
}
function Qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wa(e, t) {
  var n = Qa(e);
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
    n = Qa(n);
  }
}
function Tu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Tu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Mu() {
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
function $s(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Of(e) {
  var t = Mu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Tu(n.ownerDocument.documentElement, n)) {
    if (r !== null && $s(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Wa(n, i);
        var a = Wa(
          n,
          r
        );
        l && a && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Ff = wt && "documentMode" in document && 11 >= document.documentMode, pn = null, Wi = null, nr = null, Gi = !1;
function Ga(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gi || pn == null || pn !== ul(r) || (r = pn, "selectionStart" in r && $s(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), nr && hr(nr, r) || (nr = r, r = gl(Wi, "onSelect"), 0 < r.length && (t = new Os("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = pn)));
}
function $r(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var mn = { animationend: $r("Animation", "AnimationEnd"), animationiteration: $r("Animation", "AnimationIteration"), animationstart: $r("Animation", "AnimationStart"), transitionend: $r("Transition", "TransitionEnd") }, ci = {}, Lu = {};
wt && (Lu = document.createElement("div").style, "AnimationEvent" in window || (delete mn.animationend.animation, delete mn.animationiteration.animation, delete mn.animationstart.animation), "TransitionEvent" in window || delete mn.transitionend.transition);
function Ol(e) {
  if (ci[e]) return ci[e];
  if (!mn[e]) return e;
  var t = mn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Lu) return ci[e] = t[n];
  return e;
}
var Pu = Ol("animationend"), Du = Ol("animationiteration"), Ru = Ol("animationstart"), bu = Ol("transitionend"), zu = /* @__PURE__ */ new Map(), Ha = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ut(e, t) {
  zu.set(e, t), ln(t, [e]);
}
for (var di = 0; di < Ha.length; di++) {
  var fi = Ha[di], Af = fi.toLowerCase(), $f = fi[0].toUpperCase() + fi.slice(1);
  Ut(Af, "on" + $f);
}
Ut(Pu, "onAnimationEnd");
Ut(Du, "onAnimationIteration");
Ut(Ru, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut(bu, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function Ba(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Fd(r, t, void 0, e), e.currentTarget = null;
}
function Ou(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, f = o.currentTarget;
        if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
        Ba(l, o, f), i = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, f = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
        Ba(l, o, f), i = u;
      }
    }
  }
  if (dl) throw e = $i, dl = !1, $i = null, e;
}
function re(e, t) {
  var n = t[Xi];
  n === void 0 && (n = t[Xi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Fu(t, e, 2, !1), n.add(r));
}
function pi(e, t, n) {
  var r = 0;
  t && (r |= 4), Fu(n, e, r, t);
}
var Vr = "_reactListening" + Math.random().toString(36).slice(2);
function gr(e) {
  if (!e[Vr]) {
    e[Vr] = !0, Go.forEach(function(n) {
      n !== "selectionchange" && (Vf.has(n) || pi(n, !1, e), pi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vr] || (t[Vr] = !0, pi("selectionchange", !1, t));
  }
}
function Fu(e, t, n, r) {
  switch (_u(t)) {
    case 1:
      var l = ef;
      break;
    case 4:
      l = tf;
      break;
    default:
      l = bs;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ai || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function mi(e, t, n, r, l) {
  var i = r;
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
        if (a = Kt(o), a === null) return;
        if (u = a.tag, u === 5 || u === 6) {
          r = i = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  au(function() {
    var f = i, x = Ls(n), _ = [];
    e: {
      var h = zu.get(e);
      if (h !== void 0) {
        var w = Os, y = e;
        switch (e) {
          case "keypress":
            if (el(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = yf;
            break;
          case "focusin":
            y = "focus", w = ai;
            break;
          case "focusout":
            y = "blur", w = ai;
            break;
          case "beforeblur":
          case "afterblur":
            w = ai;
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
            w = ba;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = lf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = xf;
            break;
          case Pu:
          case Du:
          case Ru:
            w = of;
            break;
          case bu:
            w = Sf;
            break;
          case "scroll":
            w = nf;
            break;
          case "wheel":
            w = Ef;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Oa;
        }
        var S = (t & 4) !== 0, T = !S && e === "scroll", c = S ? h !== null ? h + "Capture" : null : h;
        S = [];
        for (var d = f, p; d !== null; ) {
          p = d;
          var E = p.stateNode;
          if (p.tag === 5 && E !== null && (p = E, c !== null && (E = cr(d, c), E != null && S.push(yr(d, E, p)))), T) break;
          d = d.return;
        }
        0 < S.length && (h = new w(h, y, null, n, x), _.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", h && n !== Oi && (y = n.relatedTarget || n.fromElement) && (Kt(y) || y[xt])) break e;
        if ((w || h) && (h = x.window === x ? x : (h = x.ownerDocument) ? h.defaultView || h.parentWindow : window, w ? (y = n.relatedTarget || n.toElement, w = f, y = y ? Kt(y) : null, y !== null && (T = sn(y), y !== T || y.tag !== 5 && y.tag !== 6) && (y = null)) : (w = null, y = f), w !== y)) {
          if (S = ba, E = "onMouseLeave", c = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (S = Oa, E = "onPointerLeave", c = "onPointerEnter", d = "pointer"), T = w == null ? h : hn(w), p = y == null ? h : hn(y), h = new S(E, d + "leave", w, n, x), h.target = T, h.relatedTarget = p, E = null, Kt(x) === f && (S = new S(c, d + "enter", y, n, x), S.target = p, S.relatedTarget = T, E = S), T = E, w && y) t: {
            for (S = w, c = y, d = 0, p = S; p; p = un(p)) d++;
            for (p = 0, E = c; E; E = un(E)) p++;
            for (; 0 < d - p; ) S = un(S), d--;
            for (; 0 < p - d; ) c = un(c), p--;
            for (; d--; ) {
              if (S === c || c !== null && S === c.alternate) break t;
              S = un(S), c = un(c);
            }
            S = null;
          }
          else S = null;
          w !== null && Ka(_, h, w, S, !1), y !== null && T !== null && Ka(_, T, y, S, !0);
        }
      }
      e: {
        if (h = f ? hn(f) : window, w = h.nodeName && h.nodeName.toLowerCase(), w === "select" || w === "input" && h.type === "file") var L = Lf;
        else if ($a(h)) if (Nu) L = bf;
        else {
          L = Df;
          var z = Pf;
        }
        else (w = h.nodeName) && w.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (L = Rf);
        if (L && (L = L(e, f))) {
          ju(_, L, n, x);
          break e;
        }
        z && z(e, h, f), e === "focusout" && (z = h._wrapperState) && z.controlled && h.type === "number" && Pi(h, "number", h.value);
      }
      switch (z = f ? hn(f) : window, e) {
        case "focusin":
          ($a(z) || z.contentEditable === "true") && (pn = z, Wi = f, nr = null);
          break;
        case "focusout":
          nr = Wi = pn = null;
          break;
        case "mousedown":
          Gi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gi = !1, Ga(_, n, x);
          break;
        case "selectionchange":
          if (Ff) break;
        case "keydown":
        case "keyup":
          Ga(_, n, x);
      }
      var C;
      if (As) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else fn ? Eu(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (ku && n.locale !== "ko" && (fn || R !== "onCompositionStart" ? R === "onCompositionEnd" && fn && (C = Su()) : (Mt = x, zs = "value" in Mt ? Mt.value : Mt.textContent, fn = !0)), z = gl(f, R), 0 < z.length && (R = new za(R, e, null, n, x), _.push({ event: R, listeners: z }), C ? R.data = C : (C = Cu(n), C !== null && (R.data = C)))), (C = jf ? Nf(e, n) : If(e, n)) && (f = gl(f, "onBeforeInput"), 0 < f.length && (x = new za("onBeforeInput", "beforeinput", null, n, x), _.push({ event: x, listeners: f }), x.data = C));
    }
    Ou(_, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = cr(e, n), i != null && r.unshift(yr(e, i, l)), i = cr(e, t), i != null && r.push(yr(e, i, l))), e = e.return;
  }
  return r;
}
function un(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ka(e, t, n, r, l) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, f = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && f !== null && (o = f, l ? (u = cr(n, i), u != null && a.unshift(yr(n, u, o))) : l || (u = cr(n, i), u != null && a.push(yr(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Uf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
function Ya(e) {
  return (typeof e == "string" ? e : "" + e).replace(Uf, `
`).replace(Qf, "");
}
function Ur(e, t, n) {
  if (t = Ya(t), Ya(e) !== t && n) throw Error(M(425));
}
function yl() {
}
var Hi = null, Bi = null;
function Ki(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Yi = typeof setTimeout == "function" ? setTimeout : void 0, Wf = typeof clearTimeout == "function" ? clearTimeout : void 0, Xa = typeof Promise == "function" ? Promise : void 0, Gf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xa < "u" ? function(e) {
  return Xa.resolve(null).then(e).catch(Hf);
} : Yi;
function Hf(e) {
  setTimeout(function() {
    throw e;
  });
}
function hi(e, t) {
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
function bt(e) {
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
function Za(e) {
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
var An = Math.random().toString(36).slice(2), dt = "__reactFiber$" + An, vr = "__reactProps$" + An, xt = "__reactContainer$" + An, Xi = "__reactEvents$" + An, Bf = "__reactListeners$" + An, Kf = "__reactHandles$" + An;
function Kt(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[xt] || n[dt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Za(e); e !== null; ) {
        if (n = e[dt]) return n;
        e = Za(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ir(e) {
  return e = e[dt] || e[xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Fl(e) {
  return e[vr] || null;
}
var Zi = [], gn = -1;
function Qt(e) {
  return { current: e };
}
function le(e) {
  0 > gn || (e.current = Zi[gn], Zi[gn] = null, gn--);
}
function ne(e, t) {
  gn++, Zi[gn] = e.current, e.current = t;
}
var Vt = {}, Ne = Qt(Vt), ze = Qt(!1), qt = Vt;
function Tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Oe(e) {
  return e = e.childContextTypes, e != null;
}
function vl() {
  le(ze), le(Ne);
}
function Ja(e, t, n) {
  if (Ne.current !== Vt) throw Error(M(168));
  ne(Ne, t), ne(ze, n);
}
function Au(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(M(108, Ld(e) || "Unknown", l));
  return ue({}, n, r);
}
function wl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, qt = Ne.current, ne(Ne, e), ne(ze, ze.current), !0;
}
function qa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n ? (e = Au(e, t, qt), r.__reactInternalMemoizedMergedChildContext = e, le(ze), le(Ne), ne(Ne, e)) : le(ze), ne(ze, n);
}
var ht = null, Al = !1, gi = !1;
function $u(e) {
  ht === null ? ht = [e] : ht.push(e);
}
function Yf(e) {
  Al = !0, $u(e);
}
function Wt() {
  if (!gi && ht !== null) {
    gi = !0;
    var e = 0, t = te;
    try {
      var n = ht;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ht = null, Al = !1;
    } catch (l) {
      throw ht !== null && (ht = ht.slice(e + 1)), du(Ps, Wt), l;
    } finally {
      te = t, gi = !1;
    }
  }
  return null;
}
var yn = [], vn = 0, xl = null, _l = 0, Be = [], Ke = 0, en = null, gt = 1, yt = "";
function Ht(e, t) {
  yn[vn++] = _l, yn[vn++] = xl, xl = e, _l = t;
}
function Vu(e, t, n) {
  Be[Ke++] = gt, Be[Ke++] = yt, Be[Ke++] = en, en = e;
  var r = gt;
  e = yt;
  var l = 32 - st(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - st(t) + l;
  if (30 < i) {
    var a = l - l % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, gt = 1 << 32 - st(t) + l | n << l | r, yt = i + e;
  } else gt = 1 << i | n << l | r, yt = e;
}
function Vs(e) {
  e.return !== null && (Ht(e, 1), Vu(e, 1, 0));
}
function Us(e) {
  for (; e === xl; ) xl = yn[--vn], yn[vn] = null, _l = yn[--vn], yn[vn] = null;
  for (; e === en; ) en = Be[--Ke], Be[Ke] = null, yt = Be[--Ke], Be[Ke] = null, gt = Be[--Ke], Be[Ke] = null;
}
var Ue = null, Ve = null, ie = !1, lt = null;
function Uu(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function eo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ue = e, Ve = bt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ue = e, Ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = en !== null ? { id: gt, overflow: yt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ue = e, Ve = null, !0) : !1;
    default:
      return !1;
  }
}
function Ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qi(e) {
  if (ie) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!eo(e, t)) {
        if (Ji(e)) throw Error(M(418));
        t = bt(n.nextSibling);
        var r = Ue;
        t && eo(e, t) ? Uu(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, Ue = e);
      }
    } else {
      if (Ji(e)) throw Error(M(418));
      e.flags = e.flags & -4097 | 2, ie = !1, Ue = e;
    }
  }
}
function to(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ue = e;
}
function Qr(e) {
  if (e !== Ue) return !1;
  if (!ie) return to(e), ie = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ki(e.type, e.memoizedProps)), t && (t = Ve)) {
    if (Ji(e)) throw Qu(), Error(M(418));
    for (; t; ) Uu(e, t), t = bt(t.nextSibling);
  }
  if (to(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = bt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = Ue ? bt(e.stateNode.nextSibling) : null;
  return !0;
}
function Qu() {
  for (var e = Ve; e; ) e = bt(e.nextSibling);
}
function Mn() {
  Ve = Ue = null, ie = !1;
}
function Qs(e) {
  lt === null ? lt = [e] : lt.push(e);
}
var Xf = kt.ReactCurrentBatchConfig;
function Gn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var o = l.refs;
        a === null ? delete o[i] : o[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Wr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function no(e) {
  var t = e._init;
  return t(e._payload);
}
function Wu(e) {
  function t(c, d) {
    if (e) {
      var p = c.deletions;
      p === null ? (c.deletions = [d], c.flags |= 16) : p.push(d);
    }
  }
  function n(c, d) {
    if (!e) return null;
    for (; d !== null; ) t(c, d), d = d.sibling;
    return null;
  }
  function r(c, d) {
    for (c = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? c.set(d.key, d) : c.set(d.index, d), d = d.sibling;
    return c;
  }
  function l(c, d) {
    return c = At(c, d), c.index = 0, c.sibling = null, c;
  }
  function i(c, d, p) {
    return c.index = p, e ? (p = c.alternate, p !== null ? (p = p.index, p < d ? (c.flags |= 2, d) : p) : (c.flags |= 2, d)) : (c.flags |= 1048576, d);
  }
  function a(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function o(c, d, p, E) {
    return d === null || d.tag !== 6 ? (d = ki(p, c.mode, E), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function u(c, d, p, E) {
    var L = p.type;
    return L === dn ? x(c, d, p.props.children, E, p.key) : d !== null && (d.elementType === L || typeof L == "object" && L !== null && L.$$typeof === jt && no(L) === d.type) ? (E = l(d, p.props), E.ref = Gn(c, d, p), E.return = c, E) : (E = al(p.type, p.key, p.props, null, c.mode, E), E.ref = Gn(c, d, p), E.return = c, E);
  }
  function f(c, d, p, E) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = Ei(p, c.mode, E), d.return = c, d) : (d = l(d, p.children || []), d.return = c, d);
  }
  function x(c, d, p, E, L) {
    return d === null || d.tag !== 7 ? (d = Jt(p, c.mode, E, L), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function _(c, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = ki("" + d, c.mode, p), d.return = c, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Dr:
          return p = al(d.type, d.key, d.props, null, c.mode, p), p.ref = Gn(c, null, d), p.return = c, p;
        case cn:
          return d = Ei(d, c.mode, p), d.return = c, d;
        case jt:
          var E = d._init;
          return _(c, E(d._payload), p);
      }
      if (Yn(d) || $n(d)) return d = Jt(d, c.mode, p, null), d.return = c, d;
      Wr(c, d);
    }
    return null;
  }
  function h(c, d, p, E) {
    var L = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return L !== null ? null : o(c, d, "" + p, E);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Dr:
          return p.key === L ? u(c, d, p, E) : null;
        case cn:
          return p.key === L ? f(c, d, p, E) : null;
        case jt:
          return L = p._init, h(
            c,
            d,
            L(p._payload),
            E
          );
      }
      if (Yn(p) || $n(p)) return L !== null ? null : x(c, d, p, E, null);
      Wr(c, p);
    }
    return null;
  }
  function w(c, d, p, E, L) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return c = c.get(p) || null, o(d, c, "" + E, L);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Dr:
          return c = c.get(E.key === null ? p : E.key) || null, u(d, c, E, L);
        case cn:
          return c = c.get(E.key === null ? p : E.key) || null, f(d, c, E, L);
        case jt:
          var z = E._init;
          return w(c, d, p, z(E._payload), L);
      }
      if (Yn(E) || $n(E)) return c = c.get(p) || null, x(d, c, E, L, null);
      Wr(d, E);
    }
    return null;
  }
  function y(c, d, p, E) {
    for (var L = null, z = null, C = d, R = d = 0, B = null; C !== null && R < p.length; R++) {
      C.index > R ? (B = C, C = null) : B = C.sibling;
      var $ = h(c, C, p[R], E);
      if ($ === null) {
        C === null && (C = B);
        break;
      }
      e && C && $.alternate === null && t(c, C), d = i($, d, R), z === null ? L = $ : z.sibling = $, z = $, C = B;
    }
    if (R === p.length) return n(c, C), ie && Ht(c, R), L;
    if (C === null) {
      for (; R < p.length; R++) C = _(c, p[R], E), C !== null && (d = i(C, d, R), z === null ? L = C : z.sibling = C, z = C);
      return ie && Ht(c, R), L;
    }
    for (C = r(c, C); R < p.length; R++) B = w(C, c, R, p[R], E), B !== null && (e && B.alternate !== null && C.delete(B.key === null ? R : B.key), d = i(B, d, R), z === null ? L = B : z.sibling = B, z = B);
    return e && C.forEach(function(k) {
      return t(c, k);
    }), ie && Ht(c, R), L;
  }
  function S(c, d, p, E) {
    var L = $n(p);
    if (typeof L != "function") throw Error(M(150));
    if (p = L.call(p), p == null) throw Error(M(151));
    for (var z = L = null, C = d, R = d = 0, B = null, $ = p.next(); C !== null && !$.done; R++, $ = p.next()) {
      C.index > R ? (B = C, C = null) : B = C.sibling;
      var k = h(c, C, $.value, E);
      if (k === null) {
        C === null && (C = B);
        break;
      }
      e && C && k.alternate === null && t(c, C), d = i(k, d, R), z === null ? L = k : z.sibling = k, z = k, C = B;
    }
    if ($.done) return n(
      c,
      C
    ), ie && Ht(c, R), L;
    if (C === null) {
      for (; !$.done; R++, $ = p.next()) $ = _(c, $.value, E), $ !== null && (d = i($, d, R), z === null ? L = $ : z.sibling = $, z = $);
      return ie && Ht(c, R), L;
    }
    for (C = r(c, C); !$.done; R++, $ = p.next()) $ = w(C, c, R, $.value, E), $ !== null && (e && $.alternate !== null && C.delete($.key === null ? R : $.key), d = i($, d, R), z === null ? L = $ : z.sibling = $, z = $);
    return e && C.forEach(function(g) {
      return t(c, g);
    }), ie && Ht(c, R), L;
  }
  function T(c, d, p, E) {
    if (typeof p == "object" && p !== null && p.type === dn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Dr:
          e: {
            for (var L = p.key, z = d; z !== null; ) {
              if (z.key === L) {
                if (L = p.type, L === dn) {
                  if (z.tag === 7) {
                    n(c, z.sibling), d = l(z, p.props.children), d.return = c, c = d;
                    break e;
                  }
                } else if (z.elementType === L || typeof L == "object" && L !== null && L.$$typeof === jt && no(L) === z.type) {
                  n(c, z.sibling), d = l(z, p.props), d.ref = Gn(c, z, p), d.return = c, c = d;
                  break e;
                }
                n(c, z);
                break;
              } else t(c, z);
              z = z.sibling;
            }
            p.type === dn ? (d = Jt(p.props.children, c.mode, E, p.key), d.return = c, c = d) : (E = al(p.type, p.key, p.props, null, c.mode, E), E.ref = Gn(c, d, p), E.return = c, c = E);
          }
          return a(c);
        case cn:
          e: {
            for (z = p.key; d !== null; ) {
              if (d.key === z) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(c, d.sibling), d = l(d, p.children || []), d.return = c, c = d;
                break e;
              } else {
                n(c, d);
                break;
              }
              else t(c, d);
              d = d.sibling;
            }
            d = Ei(p, c.mode, E), d.return = c, c = d;
          }
          return a(c);
        case jt:
          return z = p._init, T(c, d, z(p._payload), E);
      }
      if (Yn(p)) return y(c, d, p, E);
      if ($n(p)) return S(c, d, p, E);
      Wr(c, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(c, d.sibling), d = l(d, p), d.return = c, c = d) : (n(c, d), d = ki(p, c.mode, E), d.return = c, c = d), a(c)) : n(c, d);
  }
  return T;
}
var Ln = Wu(!0), Gu = Wu(!1), Sl = Qt(null), kl = null, wn = null, Ws = null;
function Gs() {
  Ws = wn = kl = null;
}
function Hs(e) {
  var t = Sl.current;
  le(Sl), e._currentValue = t;
}
function es(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function jn(e, t) {
  kl = e, Ws = wn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (be = !0), e.firstContext = null);
}
function Ze(e) {
  var t = e._currentValue;
  if (Ws !== e) if (e = { context: e, memoizedValue: t, next: null }, wn === null) {
    if (kl === null) throw Error(M(308));
    wn = e, kl.dependencies = { lanes: 0, firstContext: e };
  } else wn = wn.next = e;
  return t;
}
var Yt = null;
function Bs(e) {
  Yt === null ? Yt = [e] : Yt.push(e);
}
function Hu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Bs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, _t(e, r);
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nt = !1;
function Ks(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Bu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function vt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, q & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, _t(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Bs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, _t(e, n);
}
function tl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ds(e, n);
  }
}
function ro(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = a : i = i.next = a, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function El(e, t, n, r) {
  var l = e.updateQueue;
  Nt = !1;
  var i = l.firstBaseUpdate, a = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, f = u.next;
    u.next = null, a === null ? i = f : a.next = f, a = u;
    var x = e.alternate;
    x !== null && (x = x.updateQueue, o = x.lastBaseUpdate, o !== a && (o === null ? x.firstBaseUpdate = f : o.next = f, x.lastBaseUpdate = u));
  }
  if (i !== null) {
    var _ = l.baseState;
    a = 0, x = f = u = null, o = i;
    do {
      var h = o.lane, w = o.eventTime;
      if ((r & h) === h) {
        x !== null && (x = x.next = {
          eventTime: w,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var y = e, S = o;
          switch (h = t, w = n, S.tag) {
            case 1:
              if (y = S.payload, typeof y == "function") {
                _ = y.call(w, _, h);
                break e;
              }
              _ = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = S.payload, h = typeof y == "function" ? y.call(w, _, h) : y, h == null) break e;
              _ = ue({}, _, h);
              break e;
            case 2:
              Nt = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [o] : h.push(o));
      } else w = { eventTime: w, lane: h, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, x === null ? (f = x = w, u = _) : x = x.next = w, a |= h;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        h = o, o = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (x === null && (u = _), l.baseState = u, l.firstBaseUpdate = f, l.lastBaseUpdate = x, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    nn |= a, e.lanes = a, e.memoizedState = _;
  }
}
function lo(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(M(191, l));
      l.call(r);
    }
  }
}
var Tr = {}, pt = Qt(Tr), wr = Qt(Tr), xr = Qt(Tr);
function Xt(e) {
  if (e === Tr) throw Error(M(174));
  return e;
}
function Ys(e, t) {
  switch (ne(xr, t), ne(wr, e), ne(pt, Tr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ri(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ri(t, e);
  }
  le(pt), ne(pt, t);
}
function Pn() {
  le(pt), le(wr), le(xr);
}
function Ku(e) {
  Xt(xr.current);
  var t = Xt(pt.current), n = Ri(t, e.type);
  t !== n && (ne(wr, e), ne(pt, n));
}
function Xs(e) {
  wr.current === e && (le(pt), le(wr));
}
var ae = Qt(0);
function Cl(e) {
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
var yi = [];
function Zs() {
  for (var e = 0; e < yi.length; e++) yi[e]._workInProgressVersionPrimary = null;
  yi.length = 0;
}
var nl = kt.ReactCurrentDispatcher, vi = kt.ReactCurrentBatchConfig, tn = 0, oe = null, me = null, ve = null, jl = !1, rr = !1, _r = 0, Zf = 0;
function Ee() {
  throw Error(M(321));
}
function Js(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ot(e[n], t[n])) return !1;
  return !0;
}
function qs(e, t, n, r, l, i) {
  if (tn = i, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, nl.current = e === null || e.memoizedState === null ? tp : np, e = n(r, l), rr) {
    i = 0;
    do {
      if (rr = !1, _r = 0, 25 <= i) throw Error(M(301));
      i += 1, ve = me = null, t.updateQueue = null, nl.current = rp, e = n(r, l);
    } while (rr);
  }
  if (nl.current = Nl, t = me !== null && me.next !== null, tn = 0, ve = me = oe = null, jl = !1, t) throw Error(M(300));
  return e;
}
function ea() {
  var e = _r !== 0;
  return _r = 0, e;
}
function ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ve === null ? oe.memoizedState = ve = e : ve = ve.next = e, ve;
}
function Je() {
  if (me === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ve === null ? oe.memoizedState : ve.next;
  if (t !== null) ve = t, me = e;
  else {
    if (e === null) throw Error(M(310));
    me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, ve === null ? oe.memoizedState = ve = e : ve = ve.next = e;
  }
  return ve;
}
function Sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wi(e) {
  var t = Je(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = me, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var a = l.next;
      l.next = i.next, i.next = a;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var o = a = null, u = null, f = i;
    do {
      var x = f.lane;
      if ((tn & x) === x) u !== null && (u = u.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var _ = {
          lane: x,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        u === null ? (o = u = _, a = r) : u = u.next = _, oe.lanes |= x, nn |= x;
      }
      f = f.next;
    } while (f !== null && f !== i);
    u === null ? a = r : u.next = o, ot(r, t.memoizedState) || (be = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, oe.lanes |= i, nn |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xi(e) {
  var t = Je(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = l = l.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== l);
    ot(i, t.memoizedState) || (be = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Yu() {
}
function Xu(e, t) {
  var n = oe, r = Je(), l = t(), i = !ot(r.memoizedState, l);
  if (i && (r.memoizedState = l, be = !0), r = r.queue, ta(qu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ve !== null && ve.memoizedState.tag & 1) {
    if (n.flags |= 2048, kr(9, Ju.bind(null, n, r, l, t), void 0, null), we === null) throw Error(M(349));
    tn & 30 || Zu(n, t, l);
  }
  return l;
}
function Zu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ju(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ec(t) && tc(e);
}
function qu(e, t, n) {
  return n(function() {
    ec(t) && tc(e);
  });
}
function ec(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function tc(e) {
  var t = _t(e, 1);
  t !== null && at(t, e, 1, -1);
}
function io(e) {
  var t = ct();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = ep.bind(null, oe, e), [t.memoizedState, e];
}
function kr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function nc() {
  return Je().memoizedState;
}
function rl(e, t, n, r) {
  var l = ct();
  oe.flags |= e, l.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r);
}
function $l(e, t, n, r) {
  var l = Je();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (me !== null) {
    var a = me.memoizedState;
    if (i = a.destroy, r !== null && Js(r, a.deps)) {
      l.memoizedState = kr(t, n, i, r);
      return;
    }
  }
  oe.flags |= e, l.memoizedState = kr(1 | t, n, i, r);
}
function so(e, t) {
  return rl(8390656, 8, e, t);
}
function ta(e, t) {
  return $l(2048, 8, e, t);
}
function rc(e, t) {
  return $l(4, 2, e, t);
}
function lc(e, t) {
  return $l(4, 4, e, t);
}
function ic(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function sc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, $l(4, 4, ic.bind(null, t, e), n);
}
function na() {
}
function ac(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function oc(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function uc(e, t, n) {
  return tn & 21 ? (ot(n, t) || (n = mu(), oe.lanes |= n, nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, be = !0), e.memoizedState = n);
}
function Jf(e, t) {
  var n = te;
  te = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = vi.transition;
  vi.transition = {};
  try {
    e(!1), t();
  } finally {
    te = n, vi.transition = r;
  }
}
function cc() {
  return Je().memoizedState;
}
function qf(e, t, n) {
  var r = Ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, dc(e)) fc(t, n);
  else if (n = Hu(e, t, n, r), n !== null) {
    var l = Me();
    at(n, e, r, l), pc(n, t, r);
  }
}
function ep(e, t, n) {
  var r = Ft(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dc(e)) fc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var a = t.lastRenderedState, o = i(a, n);
      if (l.hasEagerState = !0, l.eagerState = o, ot(o, a)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Bs(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Hu(e, t, l, r), n !== null && (l = Me(), at(n, e, r, l), pc(n, t, r));
  }
}
function dc(e) {
  var t = e.alternate;
  return e === oe || t !== null && t === oe;
}
function fc(e, t) {
  rr = jl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function pc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ds(e, n);
  }
}
var Nl = { readContext: Ze, useCallback: Ee, useContext: Ee, useEffect: Ee, useImperativeHandle: Ee, useInsertionEffect: Ee, useLayoutEffect: Ee, useMemo: Ee, useReducer: Ee, useRef: Ee, useState: Ee, useDebugValue: Ee, useDeferredValue: Ee, useTransition: Ee, useMutableSource: Ee, useSyncExternalStore: Ee, useId: Ee, unstable_isNewReconciler: !1 }, tp = { readContext: Ze, useCallback: function(e, t) {
  return ct().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ze, useEffect: so, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, rl(
    4194308,
    4,
    ic.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return rl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return rl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ct();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ct();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = qf.bind(null, oe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ct();
  return e = { current: e }, t.memoizedState = e;
}, useState: io, useDebugValue: na, useDeferredValue: function(e) {
  return ct().memoizedState = e;
}, useTransition: function() {
  var e = io(!1), t = e[0];
  return e = Jf.bind(null, e[1]), ct().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = oe, l = ct();
  if (ie) {
    if (n === void 0) throw Error(M(407));
    n = n();
  } else {
    if (n = t(), we === null) throw Error(M(349));
    tn & 30 || Zu(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, so(qu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, kr(9, Ju.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = ct(), t = we.identifierPrefix;
  if (ie) {
    var n = yt, r = gt;
    n = (r & ~(1 << 32 - st(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Zf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, np = {
  readContext: Ze,
  useCallback: ac,
  useContext: Ze,
  useEffect: ta,
  useImperativeHandle: sc,
  useInsertionEffect: rc,
  useLayoutEffect: lc,
  useMemo: oc,
  useReducer: wi,
  useRef: nc,
  useState: function() {
    return wi(Sr);
  },
  useDebugValue: na,
  useDeferredValue: function(e) {
    var t = Je();
    return uc(t, me.memoizedState, e);
  },
  useTransition: function() {
    var e = wi(Sr)[0], t = Je().memoizedState;
    return [e, t];
  },
  useMutableSource: Yu,
  useSyncExternalStore: Xu,
  useId: cc,
  unstable_isNewReconciler: !1
}, rp = { readContext: Ze, useCallback: ac, useContext: Ze, useEffect: ta, useImperativeHandle: sc, useInsertionEffect: rc, useLayoutEffect: lc, useMemo: oc, useReducer: xi, useRef: nc, useState: function() {
  return xi(Sr);
}, useDebugValue: na, useDeferredValue: function(e) {
  var t = Je();
  return me === null ? t.memoizedState = e : uc(t, me.memoizedState, e);
}, useTransition: function() {
  var e = xi(Sr)[0], t = Je().memoizedState;
  return [e, t];
}, useMutableSource: Yu, useSyncExternalStore: Xu, useId: cc, unstable_isNewReconciler: !1 };
function nt(e, t) {
  if (e && e.defaultProps) {
    t = ue({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ts(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vl = { isMounted: function(e) {
  return (e = e._reactInternals) ? sn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), l = Ft(e), i = vt(r, l);
  i.payload = t, n != null && (i.callback = n), t = zt(e, i, l), t !== null && (at(t, e, l, r), tl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), l = Ft(e), i = vt(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = zt(e, i, l), t !== null && (at(t, e, l, r), tl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Me(), r = Ft(e), l = vt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = zt(e, l, r), t !== null && (at(t, e, r, n), tl(t, e, r));
} };
function ao(e, t, n, r, l, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !hr(n, r) || !hr(l, i) : !0;
}
function mc(e, t, n) {
  var r = !1, l = Vt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ze(i) : (l = Oe(t) ? qt : Ne.current, r = t.contextTypes, i = (r = r != null) ? Tn(e, l) : Vt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function oo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Vl.enqueueReplaceState(t, t.state, null);
}
function ns(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ks(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ze(i) : (i = Oe(t) ? qt : Ne.current, l.context = Tn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ts(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Vl.enqueueReplaceState(l, l.state, null), El(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Md(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function _i(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function rs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var lp = typeof WeakMap == "function" ? WeakMap : Map;
function hc(e, t, n) {
  n = vt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Tl || (Tl = !0, ps = r), rs(e, t);
  }, n;
}
function gc(e, t, n) {
  n = vt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      rs(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    rs(e, t), typeof r != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function uo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = vp.bind(null, e, t, n), t.then(e, e));
}
function co(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fo(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1), t.tag = 2, zt(n, t, 1))), n.lanes |= 1), e);
}
var ip = kt.ReactCurrentOwner, be = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? Gu(t, null, n, r) : Ln(t, e.child, n, r);
}
function po(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return jn(t, l), r = qs(e, t, n, r, i, l), n = ea(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, St(e, t, l)) : (ie && n && Vs(t), t.flags |= 1, Ie(e, t, r, l), t.child);
}
function mo(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ca(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, yc(e, t, i, r, l)) : (e = al(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : hr, n(a, r) && e.ref === t.ref) return St(e, t, l);
  }
  return t.flags |= 1, e = At(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function yc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (hr(i, r) && e.ref === t.ref) if (be = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (be = !0);
    else return t.lanes = e.lanes, St(e, t, l);
  }
  return ls(e, t, n, r, l);
}
function vc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ne(_n, Ae), Ae |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ne(_n, Ae), Ae |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ne(_n, Ae), Ae |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ne(_n, Ae), Ae |= r;
  return Ie(e, t, l, n), t.child;
}
function wc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ls(e, t, n, r, l) {
  var i = Oe(n) ? qt : Ne.current;
  return i = Tn(t, i), jn(t, l), n = qs(e, t, n, r, i, l), r = ea(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, St(e, t, l)) : (ie && r && Vs(t), t.flags |= 1, Ie(e, t, n, l), t.child);
}
function ho(e, t, n, r, l) {
  if (Oe(n)) {
    var i = !0;
    wl(t);
  } else i = !1;
  if (jn(t, l), t.stateNode === null) ll(e, t), mc(t, n, r), ns(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Ze(f) : (f = Oe(n) ? qt : Ne.current, f = Tn(t, f));
    var x = n.getDerivedStateFromProps, _ = typeof x == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    _ || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== f) && oo(t, a, r, f), Nt = !1;
    var h = t.memoizedState;
    a.state = h, El(t, r, a, l), u = t.memoizedState, o !== r || h !== u || ze.current || Nt ? (typeof x == "function" && (ts(t, n, x, r), u = t.memoizedState), (o = Nt || ao(t, n, o, r, h, u, f)) ? (_ || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = f, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Bu(e, t), o = t.memoizedProps, f = t.type === t.elementType ? o : nt(t.type, o), a.props = f, _ = t.pendingProps, h = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ze(u) : (u = Oe(n) ? qt : Ne.current, u = Tn(t, u));
    var w = n.getDerivedStateFromProps;
    (x = typeof w == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== _ || h !== u) && oo(t, a, r, u), Nt = !1, h = t.memoizedState, a.state = h, El(t, r, a, l);
    var y = t.memoizedState;
    o !== _ || h !== y || ze.current || Nt ? (typeof w == "function" && (ts(t, n, w, r), y = t.memoizedState), (f = Nt || ao(t, n, f, r, h, y, u) || !1) ? (x || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, y, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, y, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), a.props = r, a.state = y, a.context = u, r = f) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return is(e, t, n, r, i, l);
}
function is(e, t, n, r, l, i) {
  wc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && qa(t, n, !1), St(e, t, i);
  r = t.stateNode, ip.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Ln(t, e.child, null, i), t.child = Ln(t, null, o, i)) : Ie(e, t, o, i), t.memoizedState = r.state, l && qa(t, n, !0), t.child;
}
function xc(e) {
  var t = e.stateNode;
  t.pendingContext ? Ja(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ja(e, t.context, !1), Ys(e, t.containerInfo);
}
function go(e, t, n, r, l) {
  return Mn(), Qs(l), t.flags |= 256, Ie(e, t, n, r), t.child;
}
var ss = { dehydrated: null, treeContext: null, retryLane: 0 };
function as(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _c(e, t, n) {
  var r = t.pendingProps, l = ae.current, i = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ne(ae, l & 1), e === null)
    return qi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Wl(a, r, 0, null), e = Jt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = as(n), t.memoizedState = ss, e) : ra(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return sp(e, t, a, r, o, l, n);
  if (i) {
    i = r.fallback, a = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = At(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = At(o, i) : (i = Jt(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? as(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = ss, r;
  }
  return i = e.child, e = i.sibling, r = At(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ra(e, t) {
  return t = Wl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Gr(e, t, n, r) {
  return r !== null && Qs(r), Ln(t, e.child, null, n), e = ra(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function sp(e, t, n, r, l, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = _i(Error(M(422))), Gr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Wl({ mode: "visible", children: r.children }, l, 0, null), i = Jt(i, l, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ln(t, e.child, null, a), t.child.memoizedState = as(a), t.memoizedState = ss, i);
  if (!(t.mode & 1)) return Gr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, i = Error(M(419)), r = _i(i, r, void 0), Gr(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, be || o) {
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, _t(e, l), at(r, e, l, -1));
    }
    return ua(), r = _i(Error(M(421))), Gr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = wp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ve = bt(l.nextSibling), Ue = t, ie = !0, lt = null, e !== null && (Be[Ke++] = gt, Be[Ke++] = yt, Be[Ke++] = en, gt = e.id, yt = e.overflow, en = t), t = ra(t, r.children), t.flags |= 4096, t);
}
function yo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), es(e.return, t, n);
}
function Si(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Sc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (Ie(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && yo(e, n, t);
      else if (e.tag === 19) yo(e, n, t);
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
  if (ne(ae, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Cl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Si(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Cl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Si(t, !0, n, null, i);
      break;
    case "together":
      Si(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ll(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function St(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), nn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = At(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ap(e, t, n) {
  switch (t.tag) {
    case 3:
      xc(t), Mn();
      break;
    case 5:
      Ku(t);
      break;
    case 1:
      Oe(t.type) && wl(t);
      break;
    case 4:
      Ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ne(Sl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ne(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? _c(e, t, n) : (ne(ae, ae.current & 1), e = St(e, t, n), e !== null ? e.sibling : null);
      ne(ae, ae.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Sc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ne(ae, ae.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, vc(e, t, n);
  }
  return St(e, t, n);
}
var kc, os, Ec, Cc;
kc = function(e, t) {
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
os = function() {
};
Ec = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Xt(pt.current);
    var i = null;
    switch (n) {
      case "input":
        l = Mi(e, l), r = Mi(e, r), i = [];
        break;
      case "select":
        l = ue({}, l, { value: void 0 }), r = ue({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Di(e, l), r = Di(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yl);
    }
    bi(n, r);
    var a;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var o = l[f];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (or.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (o = l != null ? l[f] : void 0, r.hasOwnProperty(f) && u !== o && (u != null || o != null)) if (f === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in u) u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = u;
      else f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (i = i || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (or.hasOwnProperty(f) ? (u != null && f === "onScroll" && re("scroll", e), i || o === u || (i = [])) : (i = i || []).push(f, u));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Cc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hn(e, t) {
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
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function op(e, t, n) {
  var r = t.pendingProps;
  switch (Us(t), t.tag) {
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
      return Oe(t.type) && vl(), Ce(t), null;
    case 3:
      return r = t.stateNode, Pn(), le(ze), le(Ne), Zs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Qr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, lt !== null && (gs(lt), lt = null))), os(e, t), Ce(t), null;
    case 5:
      Xs(t);
      var l = Xt(xr.current);
      if (n = t.type, e !== null && t.stateNode != null) Ec(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Ce(t), null;
        }
        if (e = Xt(pt.current), Qr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[dt] = t, r[vr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Zn.length; l++) re(Zn[l], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re(
                "error",
                r
              ), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              Ca(r, i), re("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, re("invalid", r);
              break;
            case "textarea":
              Na(r, i), re("invalid", r);
          }
          bi(n, i), l = null;
          for (var a in i) if (i.hasOwnProperty(a)) {
            var o = i[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && Ur(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && Ur(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : or.hasOwnProperty(a) && o != null && a === "onScroll" && re("scroll", r);
          }
          switch (n) {
            case "input":
              Rr(r), ja(r, i, !0);
              break;
            case "textarea":
              Rr(r), Ia(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = yl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = qo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[dt] = t, e[vr] = r, kc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = zi(n, r), n) {
              case "dialog":
                re("cancel", e), re("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Zn.length; l++) re(Zn[l], e);
                l = r;
                break;
              case "source":
                re("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                re(
                  "error",
                  e
                ), re("load", e), l = r;
                break;
              case "details":
                re("toggle", e), l = r;
                break;
              case "input":
                Ca(e, r), l = Mi(e, r), re("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ue({}, r, { value: void 0 }), re("invalid", e);
                break;
              case "textarea":
                Na(e, r), l = Di(e, r), re("invalid", e);
                break;
              default:
                l = r;
            }
            bi(n, l), o = l;
            for (i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "style" ? nu(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && eu(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ur(e, u) : typeof u == "number" && ur(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (or.hasOwnProperty(i) ? u != null && i === "onScroll" && re("scroll", e) : u != null && Ns(e, i, u, a));
            }
            switch (n) {
              case "input":
                Rr(e), ja(e, r, !1);
                break;
              case "textarea":
                Rr(e), Ia(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Sn(e, !!r.multiple, i, !1) : r.defaultValue != null && Sn(
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
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) Cc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (n = Xt(xr.current), Xt(pt.current), Qr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[dt] = t, (i = r.nodeValue !== n) && (e = Ue, e !== null)) switch (e.tag) {
            case 3:
              Ur(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ur(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[dt] = t, t.stateNode = r;
      }
      return Ce(t), null;
    case 13:
      if (le(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ie && Ve !== null && t.mode & 1 && !(t.flags & 128)) Qu(), Mn(), t.flags |= 98560, i = !1;
        else if (i = Qr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(M(317));
            i[dt] = t;
          } else Mn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ce(t), i = !1;
        } else lt !== null && (gs(lt), lt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? he === 0 && (he = 3) : ua())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
    case 4:
      return Pn(), os(e, t), e === null && gr(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return Hs(t.type._context), Ce(t), null;
    case 17:
      return Oe(t.type) && vl(), Ce(t), null;
    case 19:
      if (le(ae), i = t.memoizedState, i === null) return Ce(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null) if (r) Hn(i, !1);
      else {
        if (he !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = Cl(e), a !== null) {
            for (t.flags |= 128, Hn(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ne(ae, ae.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && fe() > Rn && (t.flags |= 128, r = !0, Hn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Cl(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hn(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !ie) return Ce(t), null;
        } else 2 * fe() - i.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, Hn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = fe(), t.sibling = null, n = ae.current, ne(ae, r ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
    case 22:
    case 23:
      return oa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function up(e, t) {
  switch (Us(t), t.tag) {
    case 1:
      return Oe(t.type) && vl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Pn(), le(ze), le(Ne), Zs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Xs(t), null;
    case 13:
      if (le(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(M(340));
        Mn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return le(ae), null;
    case 4:
      return Pn(), null;
    case 10:
      return Hs(t.type._context), null;
    case 22:
    case 23:
      return oa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hr = !1, je = !1, cp = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function xn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ce(e, t, r);
  }
  else n.current = null;
}
function us(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var vo = !1;
function dp(e, t) {
  if (Hi = ml, e = Mu(), $s(e)) {
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
        var a = 0, o = -1, u = -1, f = 0, x = 0, _ = e, h = null;
        t: for (; ; ) {
          for (var w; _ !== n || l !== 0 && _.nodeType !== 3 || (o = a + l), _ !== i || r !== 0 && _.nodeType !== 3 || (u = a + r), _.nodeType === 3 && (a += _.nodeValue.length), (w = _.firstChild) !== null; )
            h = _, _ = w;
          for (; ; ) {
            if (_ === e) break t;
            if (h === n && ++f === l && (o = a), h === i && ++x === r && (u = a), (w = _.nextSibling) !== null) break;
            _ = h, h = _.parentNode;
          }
          _ = w;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bi = { focusedElem: e, selectionRange: n }, ml = !1, O = t; O !== null; ) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
  else for (; O !== null; ) {
    t = O;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var S = y.memoizedProps, T = y.memoizedState, c = t.stateNode, d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? S : nt(t.type, S), T);
            c.__reactInternalSnapshotBeforeUpdate = d;
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
          throw Error(M(163));
      }
    } catch (E) {
      ce(t, t.return, E);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, O = e;
      break;
    }
    O = t.return;
  }
  return y = vo, vo = !1, y;
}
function lr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && us(t, n, i);
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
function cs(e) {
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
function jc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, jc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dt], delete t[vr], delete t[Xi], delete t[Bf], delete t[Kf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Nc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wo(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ds(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yl));
  else if (r !== 4 && (e = e.child, e !== null)) for (ds(e, t, n), e = e.sibling; e !== null; ) ds(e, t, n), e = e.sibling;
}
function fs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (fs(e, t, n), e = e.sibling; e !== null; ) fs(e, t, n), e = e.sibling;
}
var xe = null, rt = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) Ic(e, t, n), n = n.sibling;
}
function Ic(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function") try {
    ft.onCommitFiberUnmount(Rl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      je || xn(n, t);
    case 6:
      var r = xe, l = rt;
      xe = null, Ct(e, t, n), xe = r, rt = l, xe !== null && (rt ? (e = xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xe.removeChild(n.stateNode));
      break;
    case 18:
      xe !== null && (rt ? (e = xe, n = n.stateNode, e.nodeType === 8 ? hi(e.parentNode, n) : e.nodeType === 1 && hi(e, n), pr(e)) : hi(xe, n.stateNode));
      break;
    case 4:
      r = xe, l = rt, xe = n.stateNode.containerInfo, rt = !0, Ct(e, t, n), xe = r, rt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && us(n, t, a), l = l.next;
        } while (l !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (!je && (xn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? (je = (r = je) || n.memoizedState !== null, Ct(e, t, n), je = r) : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function xo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new cp()), t.forEach(function(r) {
      var l = xp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            xe = o.stateNode, rt = !1;
            break e;
          case 3:
            xe = o.stateNode.containerInfo, rt = !0;
            break e;
          case 4:
            xe = o.stateNode.containerInfo, rt = !0;
            break e;
        }
        o = o.return;
      }
      if (xe === null) throw Error(M(160));
      Ic(i, a, l), xe = null, rt = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (f) {
      ce(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Tc(t, e), t = t.sibling;
}
function Tc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (et(t, e), ut(e), r & 4) {
        try {
          lr(3, e, e.return), Ul(3, e);
        } catch (S) {
          ce(e, e.return, S);
        }
        try {
          lr(5, e, e.return);
        } catch (S) {
          ce(e, e.return, S);
        }
      }
      break;
    case 1:
      et(t, e), ut(e), r & 512 && n !== null && xn(n, n.return);
      break;
    case 5:
      if (et(t, e), ut(e), r & 512 && n !== null && xn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          ur(l, "");
        } catch (S) {
          ce(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && i.type === "radio" && i.name != null && Zo(l, i), zi(o, a);
          var f = zi(o, i);
          for (a = 0; a < u.length; a += 2) {
            var x = u[a], _ = u[a + 1];
            x === "style" ? nu(l, _) : x === "dangerouslySetInnerHTML" ? eu(l, _) : x === "children" ? ur(l, _) : Ns(l, x, _, f);
          }
          switch (o) {
            case "input":
              Li(l, i);
              break;
            case "textarea":
              Jo(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var w = i.value;
              w != null ? Sn(l, !!i.multiple, w, !1) : h !== !!i.multiple && (i.defaultValue != null ? Sn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Sn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[vr] = i;
        } catch (S) {
          ce(e, e.return, S);
        }
      }
      break;
    case 6:
      if (et(t, e), ut(e), r & 4) {
        if (e.stateNode === null) throw Error(M(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (S) {
          ce(e, e.return, S);
        }
      }
      break;
    case 3:
      if (et(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        pr(t.containerInfo);
      } catch (S) {
        ce(e, e.return, S);
      }
      break;
    case 4:
      et(t, e), ut(e);
      break;
    case 13:
      et(t, e), ut(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (sa = fe())), r & 4 && xo(e);
      break;
    case 22:
      if (x = n !== null && n.memoizedState !== null, e.mode & 1 ? (je = (f = je) || x, et(t, e), je = f) : et(t, e), ut(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !x && e.mode & 1) for (O = e, x = e.child; x !== null; ) {
          for (_ = O = x; O !== null; ) {
            switch (h = O, w = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                lr(4, h, h.return);
                break;
              case 1:
                xn(h, h.return);
                var y = h.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (S) {
                    ce(r, n, S);
                  }
                }
                break;
              case 5:
                xn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  So(_);
                  continue;
                }
            }
            w !== null ? (w.return = h, O = w) : So(_);
          }
          x = x.sibling;
        }
        e: for (x = null, _ = e; ; ) {
          if (_.tag === 5) {
            if (x === null) {
              x = _;
              try {
                l = _.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = _.stateNode, u = _.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = tu("display", a));
              } catch (S) {
                ce(e, e.return, S);
              }
            }
          } else if (_.tag === 6) {
            if (x === null) try {
              _.stateNode.nodeValue = f ? "" : _.memoizedProps;
            } catch (S) {
              ce(e, e.return, S);
            }
          } else if ((_.tag !== 22 && _.tag !== 23 || _.memoizedState === null || _ === e) && _.child !== null) {
            _.child.return = _, _ = _.child;
            continue;
          }
          if (_ === e) break e;
          for (; _.sibling === null; ) {
            if (_.return === null || _.return === e) break e;
            x === _ && (x = null), _ = _.return;
          }
          x === _ && (x = null), _.sibling.return = _.return, _ = _.sibling;
        }
      }
      break;
    case 19:
      et(t, e), ut(e), r & 4 && xo(e);
      break;
    case 21:
      break;
    default:
      et(
        t,
        e
      ), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Nc(n)) {
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
          r.flags & 32 && (ur(l, ""), r.flags &= -33);
          var i = wo(e);
          fs(e, i, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = wo(e);
          ds(e, o, a);
          break;
        default:
          throw Error(M(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fp(e, t, n) {
  O = e, Mc(e);
}
function Mc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O, i = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Hr;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || je;
        o = Hr;
        var f = je;
        if (Hr = a, (je = u) && !f) for (O = l; O !== null; ) a = O, u = a.child, a.tag === 22 && a.memoizedState !== null ? ko(l) : u !== null ? (u.return = a, O = u) : ko(l);
        for (; i !== null; ) O = i, Mc(i), i = i.sibling;
        O = l, Hr = o, je = f;
      }
      _o(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, O = i) : _o(e);
  }
}
function _o(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            je || Ul(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !je) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : nt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && lo(t, i, r);
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
              lo(t, a, n);
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
              var f = t.alternate;
              if (f !== null) {
                var x = f.memoizedState;
                if (x !== null) {
                  var _ = x.dehydrated;
                  _ !== null && pr(_);
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
        je || t.flags & 512 && cs(t);
      } catch (h) {
        ce(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function So(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function ko(e) {
  for (; O !== null; ) {
    var t = O;
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
          var i = t.return;
          try {
            cs(t);
          } catch (u) {
            ce(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            cs(t);
          } catch (u) {
            ce(t, a, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      O = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, O = o;
      break;
    }
    O = t.return;
  }
}
var pp = Math.ceil, Il = kt.ReactCurrentDispatcher, la = kt.ReactCurrentOwner, Xe = kt.ReactCurrentBatchConfig, q = 0, we = null, pe = null, _e = 0, Ae = 0, _n = Qt(0), he = 0, Er = null, nn = 0, Ql = 0, ia = 0, ir = null, Re = null, sa = 0, Rn = 1 / 0, mt = null, Tl = !1, ps = null, Ot = null, Br = !1, Lt = null, Ml = 0, sr = 0, ms = null, il = -1, sl = 0;
function Me() {
  return q & 6 ? fe() : il !== -1 ? il : il = fe();
}
function Ft(e) {
  return e.mode & 1 ? q & 2 && _e !== 0 ? _e & -_e : Xf.transition !== null ? (sl === 0 && (sl = mu()), sl) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : _u(e.type)), e) : 1;
}
function at(e, t, n, r) {
  if (50 < sr) throw sr = 0, ms = null, Error(M(185));
  jr(e, n, r), (!(q & 2) || e !== we) && (e === we && (!(q & 2) && (Ql |= n), he === 4 && Tt(e, _e)), Fe(e, r), n === 1 && q === 0 && !(t.mode & 1) && (Rn = fe() + 500, Al && Wt()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  Yd(e, t);
  var r = pl(e, e === we ? _e : 0);
  if (r === 0) n !== null && La(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && La(n), t === 1) e.tag === 0 ? Yf(Eo.bind(null, e)) : $u(Eo.bind(null, e)), Gf(function() {
      !(q & 6) && Wt();
    }), n = null;
    else {
      switch (hu(r)) {
        case 1:
          n = Ps;
          break;
        case 4:
          n = fu;
          break;
        case 16:
          n = fl;
          break;
        case 536870912:
          n = pu;
          break;
        default:
          n = fl;
      }
      n = Fc(n, Lc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Lc(e, t) {
  if (il = -1, sl = 0, q & 6) throw Error(M(327));
  var n = e.callbackNode;
  if (Nn() && e.callbackNode !== n) return null;
  var r = pl(e, e === we ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ll(e, r);
  else {
    t = r;
    var l = q;
    q |= 2;
    var i = Dc();
    (we !== e || _e !== t) && (mt = null, Rn = fe() + 500, Zt(e, t));
    do
      try {
        gp();
        break;
      } catch (o) {
        Pc(e, o);
      }
    while (!0);
    Gs(), Il.current = i, q = l, pe !== null ? t = 0 : (we = null, _e = 0, t = he);
  }
  if (t !== 0) {
    if (t === 2 && (l = Vi(e), l !== 0 && (r = l, t = hs(e, l))), t === 1) throw n = Er, Zt(e, 0), Tt(e, r), Fe(e, fe()), n;
    if (t === 6) Tt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !mp(l) && (t = Ll(e, r), t === 2 && (i = Vi(e), i !== 0 && (r = i, t = hs(e, i))), t === 1)) throw n = Er, Zt(e, 0), Tt(e, r), Fe(e, fe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          Bt(e, Re, mt);
          break;
        case 3:
          if (Tt(e, r), (r & 130023424) === r && (t = sa + 500 - fe(), 10 < t)) {
            if (pl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Me(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Yi(Bt.bind(null, e, Re, mt), t);
            break;
          }
          Bt(e, Re, mt);
          break;
        case 4:
          if (Tt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - st(r);
            i = 1 << a, a = t[a], a > l && (l = a), r &= ~i;
          }
          if (r = l, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * pp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Yi(Bt.bind(null, e, Re, mt), r);
            break;
          }
          Bt(e, Re, mt);
          break;
        case 5:
          Bt(e, Re, mt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Fe(e, fe()), e.callbackNode === n ? Lc.bind(null, e) : null;
}
function hs(e, t) {
  var n = ir;
  return e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256), e = Ll(e, t), e !== 2 && (t = Re, Re = n, t !== null && gs(t)), e;
}
function gs(e) {
  Re === null ? Re = e : Re.push.apply(Re, e);
}
function mp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!ot(i(), l)) return !1;
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
function Tt(e, t) {
  for (t &= ~ia, t &= ~Ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - st(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Eo(e) {
  if (q & 6) throw Error(M(327));
  Nn();
  var t = pl(e, 0);
  if (!(t & 1)) return Fe(e, fe()), null;
  var n = Ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vi(e);
    r !== 0 && (t = r, n = hs(e, r));
  }
  if (n === 1) throw n = Er, Zt(e, 0), Tt(e, t), Fe(e, fe()), n;
  if (n === 6) throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bt(e, Re, mt), Fe(e, fe()), null;
}
function aa(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    q = n, q === 0 && (Rn = fe() + 500, Al && Wt());
  }
}
function rn(e) {
  Lt !== null && Lt.tag === 0 && !(q & 6) && Nn();
  var t = q;
  q |= 1;
  var n = Xe.transition, r = te;
  try {
    if (Xe.transition = null, te = 1, e) return e();
  } finally {
    te = r, Xe.transition = n, q = t, !(q & 6) && Wt();
  }
}
function oa() {
  Ae = _n.current, le(_n);
}
function Zt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Wf(n)), pe !== null) for (n = pe.return; n !== null; ) {
    var r = n;
    switch (Us(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && vl();
        break;
      case 3:
        Pn(), le(ze), le(Ne), Zs();
        break;
      case 5:
        Xs(r);
        break;
      case 4:
        Pn();
        break;
      case 13:
        le(ae);
        break;
      case 19:
        le(ae);
        break;
      case 10:
        Hs(r.type._context);
        break;
      case 22:
      case 23:
        oa();
    }
    n = n.return;
  }
  if (we = e, pe = e = At(e.current, null), _e = Ae = t, he = 0, Er = null, ia = Ql = nn = 0, Re = ir = null, Yt !== null) {
    for (t = 0; t < Yt.length; t++) if (n = Yt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var a = i.next;
        i.next = l, r.next = a;
      }
      n.pending = r;
    }
    Yt = null;
  }
  return e;
}
function Pc(e, t) {
  do {
    var n = pe;
    try {
      if (Gs(), nl.current = Nl, jl) {
        for (var r = oe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        jl = !1;
      }
      if (tn = 0, ve = me = oe = null, rr = !1, _r = 0, la.current = null, n === null || n.return === null) {
        he = 1, Er = t, pe = null;
        break;
      }
      e: {
        var i = e, a = n.return, o = n, u = t;
        if (t = _e, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var f = u, x = o, _ = x.tag;
          if (!(x.mode & 1) && (_ === 0 || _ === 11 || _ === 15)) {
            var h = x.alternate;
            h ? (x.updateQueue = h.updateQueue, x.memoizedState = h.memoizedState, x.lanes = h.lanes) : (x.updateQueue = null, x.memoizedState = null);
          }
          var w = co(a);
          if (w !== null) {
            w.flags &= -257, fo(w, a, o, i, t), w.mode & 1 && uo(i, f, t), t = w, u = f;
            var y = t.updateQueue;
            if (y === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(u), t.updateQueue = S;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              uo(i, f, t), ua();
              break e;
            }
            u = Error(M(426));
          }
        } else if (ie && o.mode & 1) {
          var T = co(a);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), fo(T, a, o, i, t), Qs(Dn(u, o));
            break e;
          }
        }
        i = u = Dn(u, o), he !== 4 && (he = 2), ir === null ? ir = [i] : ir.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var c = hc(i, u, t);
              ro(i, c);
              break e;
            case 1:
              o = u;
              var d = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ot === null || !Ot.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = gc(i, o, t);
                ro(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      bc(n);
    } catch (L) {
      t = L, pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Dc() {
  var e = Il.current;
  return Il.current = Nl, e === null ? Nl : e;
}
function ua() {
  (he === 0 || he === 3 || he === 2) && (he = 4), we === null || !(nn & 268435455) && !(Ql & 268435455) || Tt(we, _e);
}
function Ll(e, t) {
  var n = q;
  q |= 2;
  var r = Dc();
  (we !== e || _e !== t) && (mt = null, Zt(e, t));
  do
    try {
      hp();
      break;
    } catch (l) {
      Pc(e, l);
    }
  while (!0);
  if (Gs(), q = n, Il.current = r, pe !== null) throw Error(M(261));
  return we = null, _e = 0, he;
}
function hp() {
  for (; pe !== null; ) Rc(pe);
}
function gp() {
  for (; pe !== null && !$d(); ) Rc(pe);
}
function Rc(e) {
  var t = Oc(e.alternate, e, Ae);
  e.memoizedProps = e.pendingProps, t === null ? bc(e) : pe = t, la.current = null;
}
function bc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = up(n, t), n !== null) {
        n.flags &= 32767, pe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        he = 6, pe = null;
        return;
      }
    } else if (n = op(n, t, Ae), n !== null) {
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
function Bt(e, t, n) {
  var r = te, l = Xe.transition;
  try {
    Xe.transition = null, te = 1, yp(e, t, n, r);
  } finally {
    Xe.transition = l, te = r;
  }
  return null;
}
function yp(e, t, n, r) {
  do
    Nn();
  while (Lt !== null);
  if (q & 6) throw Error(M(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Xd(e, i), e === we && (pe = we = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Br || (Br = !0, Fc(fl, function() {
    return Nn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Xe.transition, Xe.transition = null;
    var a = te;
    te = 1;
    var o = q;
    q |= 4, la.current = null, dp(e, n), Tc(n, e), Of(Bi), ml = !!Hi, Bi = Hi = null, e.current = n, fp(n), Vd(), q = o, te = a, Xe.transition = i;
  } else e.current = n;
  if (Br && (Br = !1, Lt = e, Ml = l), i = e.pendingLanes, i === 0 && (Ot = null), Wd(n.stateNode), Fe(e, fe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Tl) throw Tl = !1, e = ps, ps = null, e;
  return Ml & 1 && e.tag !== 0 && Nn(), i = e.pendingLanes, i & 1 ? e === ms ? sr++ : (sr = 0, ms = e) : sr = 0, Wt(), null;
}
function Nn() {
  if (Lt !== null) {
    var e = hu(Ml), t = Xe.transition, n = te;
    try {
      if (Xe.transition = null, te = 16 > e ? 16 : e, Lt === null) var r = !1;
      else {
        if (e = Lt, Lt = null, Ml = 0, q & 6) throw Error(M(331));
        var l = q;
        for (q |= 4, O = e.current; O !== null; ) {
          var i = O, a = i.child;
          if (O.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var f = o[u];
                for (O = f; O !== null; ) {
                  var x = O;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(8, x, i);
                  }
                  var _ = x.child;
                  if (_ !== null) _.return = x, O = _;
                  else for (; O !== null; ) {
                    x = O;
                    var h = x.sibling, w = x.return;
                    if (jc(x), x === f) {
                      O = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = w, O = h;
                      break;
                    }
                    O = w;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var S = y.child;
                if (S !== null) {
                  y.child = null;
                  do {
                    var T = S.sibling;
                    S.sibling = null, S = T;
                  } while (S !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) a.return = i, O = a;
          else e: for (; O !== null; ) {
            if (i = O, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                lr(9, i, i.return);
            }
            var c = i.sibling;
            if (c !== null) {
              c.return = i.return, O = c;
              break e;
            }
            O = i.return;
          }
        }
        var d = e.current;
        for (O = d; O !== null; ) {
          a = O;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, O = p;
          else e: for (a = d; O !== null; ) {
            if (o = O, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Ul(9, o);
              }
            } catch (L) {
              ce(o, o.return, L);
            }
            if (o === a) {
              O = null;
              break e;
            }
            var E = o.sibling;
            if (E !== null) {
              E.return = o.return, O = E;
              break e;
            }
            O = o.return;
          }
        }
        if (q = l, Wt(), ft && typeof ft.onPostCommitFiberRoot == "function") try {
          ft.onPostCommitFiberRoot(Rl, e);
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
function Co(e, t, n) {
  t = Dn(n, t), t = hc(e, t, 1), e = zt(e, t, 1), t = Me(), e !== null && (jr(e, 1, t), Fe(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Co(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Co(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ot === null || !Ot.has(r))) {
        e = Dn(n, e), e = gc(t, e, 1), t = zt(t, e, 1), e = Me(), t !== null && (jr(t, 1, e), Fe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function vp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, we === e && (_e & n) === n && (he === 4 || he === 3 && (_e & 130023424) === _e && 500 > fe() - sa ? Zt(e, 0) : ia |= n), Fe(e, t);
}
function zc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Or, Or <<= 1, !(Or & 130023424) && (Or = 4194304)) : t = 1);
  var n = Me();
  e = _t(e, t), e !== null && (jr(e, t, n), Fe(e, n));
}
function wp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), zc(e, n);
}
function xp(e, t) {
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
  r !== null && r.delete(t), zc(e, n);
}
var Oc;
Oc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ze.current) be = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return be = !1, ap(e, t, n);
    be = !!(e.flags & 131072);
  }
  else be = !1, ie && t.flags & 1048576 && Vu(t, _l, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ll(e, t), e = t.pendingProps;
      var l = Tn(t, Ne.current);
      jn(t, n), l = qs(null, t, r, e, l, n);
      var i = ea();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (i = !0, wl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ks(t), l.updater = Vl, t.stateNode = l, l._reactInternals = t, ns(t, r, e, n), t = is(null, t, r, !0, i, n)) : (t.tag = 0, ie && i && Vs(t), Ie(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ll(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Sp(r), e = nt(r, e), l) {
          case 0:
            t = ls(null, t, r, e, n);
            break e;
          case 1:
            t = ho(null, t, r, e, n);
            break e;
          case 11:
            t = po(null, t, r, e, n);
            break e;
          case 14:
            t = mo(null, t, r, nt(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : nt(r, l), ls(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : nt(r, l), ho(e, t, r, l, n);
    case 3:
      e: {
        if (xc(t), e === null) throw Error(M(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Bu(e, t), El(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = Dn(Error(M(423)), t), t = go(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Dn(Error(M(424)), t), t = go(e, t, r, n, l);
          break e;
        } else for (Ve = bt(t.stateNode.containerInfo.firstChild), Ue = t, ie = !0, lt = null, n = Gu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Mn(), r === l) {
            t = St(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ku(t), e === null && qi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = l.children, Ki(r, l) ? a = null : i !== null && Ki(r, i) && (t.flags |= 32), wc(e, t), Ie(e, t, a, n), t.child;
    case 6:
      return e === null && qi(t), null;
    case 13:
      return _c(e, t, n);
    case 4:
      return Ys(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ln(t, null, r, n) : Ie(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : nt(r, l), po(e, t, r, l, n);
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, a = l.value, ne(Sl, r._currentValue), r._currentValue = a, i !== null) if (ot(i.value, a)) {
          if (i.children === l.children && !ze.current) {
            t = St(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var o = i.dependencies;
          if (o !== null) {
            a = i.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = vt(-1, n & -n), u.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var x = f.pending;
                    x === null ? u.next = u : (u.next = x.next, x.next = u), f.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), es(
                  i.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (a = i.return, a === null) throw Error(M(341));
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), es(a, n, t), a = i.sibling;
          } else a = i.child;
          if (a !== null) a.return = i;
          else for (a = i; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (i = a.sibling, i !== null) {
              i.return = a.return, a = i;
              break;
            }
            a = a.return;
          }
          i = a;
        }
        Ie(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, jn(t, n), l = Ze(l), r = r(l), t.flags |= 1, Ie(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = nt(r, t.pendingProps), l = nt(r.type, l), mo(e, t, r, l, n);
    case 15:
      return yc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : nt(r, l), ll(e, t), t.tag = 1, Oe(r) ? (e = !0, wl(t)) : e = !1, jn(t, n), mc(t, r, l), ns(t, r, l, n), is(null, t, r, !0, e, n);
    case 19:
      return Sc(e, t, n);
    case 22:
      return vc(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Fc(e, t) {
  return du(e, t);
}
function _p(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new _p(e, t, n, r);
}
function ca(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Sp(e) {
  if (typeof e == "function") return ca(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ts) return 11;
    if (e === Ms) return 14;
  }
  return 2;
}
function At(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function al(e, t, n, r, l, i) {
  var a = 2;
  if (r = e, typeof e == "function") ca(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case dn:
      return Jt(n.children, l, i, t);
    case Is:
      a = 8, l |= 8;
      break;
    case ji:
      return e = Ye(12, n, t, l | 2), e.elementType = ji, e.lanes = i, e;
    case Ni:
      return e = Ye(13, n, t, l), e.elementType = Ni, e.lanes = i, e;
    case Ii:
      return e = Ye(19, n, t, l), e.elementType = Ii, e.lanes = i, e;
    case Ko:
      return Wl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ho:
          a = 10;
          break e;
        case Bo:
          a = 9;
          break e;
        case Ts:
          a = 11;
          break e;
        case Ms:
          a = 14;
          break e;
        case jt:
          a = 16, r = null;
          break e;
      }
      throw Error(M(130, e == null ? e : typeof e, ""));
  }
  return t = Ye(a, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Jt(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function Wl(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = Ko, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ki(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function Ei(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function kp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = li(0), this.expirationTimes = li(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = li(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function da(e, t, n, r, l, i, a, o, u) {
  return e = new kp(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ye(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ks(i), e;
}
function Ep(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: cn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ac(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (sn(e) !== e || e.tag !== 1) throw Error(M(170));
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
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return Au(e, n, t);
  }
  return t;
}
function $c(e, t, n, r, l, i, a, o, u) {
  return e = da(n, r, !0, e, l, i, a, o, u), e.context = Ac(null), n = e.current, r = Me(), l = Ft(n), i = vt(r, l), i.callback = t ?? null, zt(n, i, l), e.current.lanes = l, jr(e, l, r), Fe(e, r), e;
}
function Gl(e, t, n, r) {
  var l = t.current, i = Me(), a = Ft(l);
  return n = Ac(n), t.context === null ? t.context = n : t.pendingContext = n, t = vt(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = zt(l, t, a), e !== null && (at(e, l, a, i), tl(e, l, a)), a;
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
function jo(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fa(e, t) {
  jo(e, t), (e = e.alternate) && jo(e, t);
}
function Cp() {
  return null;
}
var Vc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function pa(e) {
  this._internalRoot = e;
}
Hl.prototype.render = pa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Gl(e, t, null, null);
};
Hl.prototype.unmount = pa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    rn(function() {
      Gl(null, e, null, null);
    }), t[xt] = null;
  }
};
function Hl(e) {
  this._internalRoot = e;
}
Hl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = vu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++) ;
    It.splice(n, 0, e), n === 0 && xu(e);
  }
};
function ma(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Bl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function No() {
}
function jp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = Pl(a);
        i.call(f);
      };
    }
    var a = $c(t, r, e, 0, null, !1, !1, "", No);
    return e._reactRootContainer = a, e[xt] = a.current, gr(e.nodeType === 8 ? e.parentNode : e), rn(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var f = Pl(u);
      o.call(f);
    };
  }
  var u = da(e, 0, !1, null, null, !1, !1, "", No);
  return e._reactRootContainer = u, e[xt] = u.current, gr(e.nodeType === 8 ? e.parentNode : e), rn(function() {
    Gl(t, u, n, r);
  }), u;
}
function Kl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = Pl(a);
        o.call(u);
      };
    }
    Gl(t, a, e, l);
  } else a = jp(n, t, e, l, r);
  return Pl(a);
}
gu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 && (Ds(t, n | 1), Fe(t, fe()), !(q & 6) && (Rn = fe() + 500, Wt()));
      }
      break;
    case 13:
      rn(function() {
        var r = _t(e, 1);
        if (r !== null) {
          var l = Me();
          at(r, e, 1, l);
        }
      }), fa(e, 1);
  }
};
Rs = function(e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Me();
      at(t, e, 134217728, n);
    }
    fa(e, 134217728);
  }
};
yu = function(e) {
  if (e.tag === 13) {
    var t = Ft(e), n = _t(e, t);
    if (n !== null) {
      var r = Me();
      at(n, e, t, r);
    }
    fa(e, t);
  }
};
vu = function() {
  return te;
};
wu = function(e, t) {
  var n = te;
  try {
    return te = e, t();
  } finally {
    te = n;
  }
};
Fi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Li(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Fl(r);
            if (!l) throw Error(M(90));
            Xo(r), Li(r, l);
          }
        }
      }
      break;
    case "textarea":
      Jo(e, n);
      break;
    case "select":
      t = n.value, t != null && Sn(e, !!n.multiple, t, !1);
  }
};
iu = aa;
su = rn;
var Np = { usingClientEntryPoint: !1, Events: [Ir, hn, Fl, ru, lu, aa] }, Bn = { findFiberByHostInstance: Kt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ip = { bundleType: Bn.bundleType, version: Bn.version, rendererPackageName: Bn.rendererPackageName, rendererConfig: Bn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: kt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = uu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Bn.findFiberByHostInstance || Cp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kr.isDisabled && Kr.supportsFiber) try {
    Rl = Kr.inject(Ip), ft = Kr;
  } catch {
  }
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Np;
We.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ma(t)) throw Error(M(200));
  return Ep(e, t, null, n);
};
We.createRoot = function(e, t) {
  if (!ma(e)) throw Error(M(299));
  var n = !1, r = "", l = Vc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = da(e, 1, !1, null, null, n, !1, r, l), e[xt] = t.current, gr(e.nodeType === 8 ? e.parentNode : e), new pa(t);
};
We.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = uu(t), e = e === null ? null : e.stateNode, e;
};
We.flushSync = function(e) {
  return rn(e);
};
We.hydrate = function(e, t, n) {
  if (!Bl(t)) throw Error(M(200));
  return Kl(null, e, t, !0, n);
};
We.hydrateRoot = function(e, t, n) {
  if (!ma(e)) throw Error(M(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", a = Vc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = $c(t, null, e, 1, n ?? null, l, !1, i, a), e[xt] = t.current, gr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Hl(t);
};
We.render = function(e, t, n) {
  if (!Bl(t)) throw Error(M(200));
  return Kl(null, e, t, !1, n);
};
We.unmountComponentAtNode = function(e) {
  if (!Bl(e)) throw Error(M(40));
  return e._reactRootContainer ? (rn(function() {
    Kl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[xt] = null;
    });
  }), !0) : !1;
};
We.unstable_batchedUpdates = aa;
We.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Bl(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Kl(e, t, n, !1, r);
};
We.version = "18.3.1-next-f1338f8080-20240426";
function Uc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc);
    } catch (e) {
      console.error(e);
    }
}
Uc(), Uo.exports = We;
var $e = Uo.exports, Qc, Io = $e;
Qc = Io.createRoot, Io.hydrateRoot;
window.api = Y;
const Tp = async () => {
  const e = await Y.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
}, ol = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const i = await Y.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  if (!i.ok)
    throw new Error(`Failed to fetch images: ${i.statusText}`);
  return await i.json();
}, Mp = async (e) => {
  const t = await Y.fetchApi(`/meld/image/${e}/details`);
  if (!t.ok)
    throw new Error(`Failed to fetch image details: ${t.statusText}`);
  return await t.json();
}, Lp = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await Y.fetchApi(n);
  return r.ok ? await r.json() : [];
}, Pp = async () => {
  const e = await Y.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Wc = async () => {
  const e = await Y.fetchApi("/meld/settings");
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
      "gallery.related_phash_threshold": 8,
      "gallery.suggest_phash_threshold": 12,
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
}, Dp = async (e, t) => {
  if (!(await Y.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Rp = async (e, t) => {
  if (!(await Y.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, bp = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await Y.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  return r.ok ? await r.json() : [];
}, ys = async (e) => {
  const t = await Y.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, zp = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await Y.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, vs = async (e, t = !1) => {
  const n = await Y.fetchApi("/meld/bulk-delete", {
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
}, ws = async (e) => {
  const t = await Y.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to restore images");
  }
}, Gc = async (e) => {
  const t = await Y.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, Op = async (e, t, n = !1, r) => {
  const l = await Y.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, Fp = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await Y.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, Ap = async (e, t, n) => {
  const r = await Y.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, $p = async (e) => {
  const t = await Y.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Vp = async () => {
  if (!(await Y.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, Up = async () => {
  const e = await Y.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, Qp = async (e, t) => {
  if (!(await Y.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, To = async (e) => {
  if (!(await Y.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, Wp = async (e, t) => {
  if (!(await Y.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, ha = async () => {
  const e = await Y.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, Gp = async (e) => {
  const t = await Y.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, Hp = async (e) => {
  if (!(await Y.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, Bp = async (e, t) => {
  const n = await Y.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, Kp = async (e, t) => {
  if (!(await Y.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, xs = async (e, t, n) => {
  if (!(await Y.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, Yp = async (e) => {
  const t = await Y.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, Xp = async (e) => {
  const t = await Y.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Hc = { exports: {} }, Yl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zp = v, Jp = Symbol.for("react.element"), qp = Symbol.for("react.fragment"), em = Object.prototype.hasOwnProperty, tm = Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bc(e, t, n) {
  var r, l = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) em.call(t, r) && !nm.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Jp, type: e, key: i, ref: a, props: l, _owner: tm.current };
}
Yl.Fragment = qp;
Yl.jsx = Bc;
Yl.jsxs = Bc;
Hc.exports = Yl;
var s = Hc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rm = {
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
const lm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Z = (e, t) => {
  const n = v.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: u,
      ...f
    }, x) => v.createElement(
      "svg",
      {
        ref: x,
        ...rm,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${lm(e)}`, o].join(" "),
        ...f
      },
      [
        ...t.map(([_, h]) => v.createElement(_, h)),
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
const im = Z("AlertTriangle", [
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
const sm = Z("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kc = Z("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = Z("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = Z("ArrowUpDown", [
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
const Yc = Z("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = Z("Box", [
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
const um = Z("Calendar", [
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
const cm = Z("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xc = Z("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zc = Z("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jc = Z("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = Z("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = Z("Download", [
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
const pm = Z("Folder", [
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
const mm = Z("Info", [
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
const qc = Z("LayoutGrid", [
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
const hm = Z("LayoutList", [
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
const gm = Z("Maximize", [
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
const ym = Z("Minimize", [
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
const vm = Z("MoreVertical", [
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
const ed = Z("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wm = Z("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xm = Z("PlusCircle", [
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
const ga = Z("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = Z("RefreshCw", [
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
const bn = Z("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _m = Z("Settings", [
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
const Sm = Z("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = Z("Star", [
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
const an = Z("Tag", [
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
const zn = Z("Trash2", [
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
const km = Z("Type", [
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
const Em = Z("Upload", [
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
const Le = Z("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let Dl = !1;
const Cm = (e) => {
  Dl = e, Dl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, jm = (...e) => {
  Dl && console.log("[Meld]", ...e);
}, Nm = (...e) => {
  Dl && console.warn("[Meld]", ...e);
}, Im = (...e) => {
  console.error("[Meld]", ...e);
}, V = {
  log: jm,
  warn: Nm,
  error: Im,
  init: Cm
}, Tm = {
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
    "gallery.related_phash_threshold": 8,
    "gallery.suggest_phash_threshold": 12,
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
function Mm(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const l = new Set(t.payload), i = e.images.filter((o) => !l.has(o.id)), a = new Set(e.selectedIds);
      for (const o of t.payload)
        a.delete(o);
      return {
        ...e,
        images: i,
        selectedIds: a,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const l = t.payload, i = [...e.images, ...l], a = Array.from(
        new Map(i.map((o) => [o.id, o])).values()
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
      const l = t.payload, i = e.images.map(
        (o) => o.id === l.id ? l : o
      ), a = e.lineageImages.map(
        (o) => o.id === l.id ? l : o
      );
      return {
        ...e,
        images: i,
        lineageImages: a
      };
    }
    case "SET_IMAGES": {
      const { images: l, total: i, offset: a } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !l.some((u) => u.id === o) && (o = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: o,
        pagination: {
          total: i,
          offset: a,
          limit: e.pagination.limit,
          hasMore: a + l.length < i
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: i, offset: a } = t.payload, o = [...e.images, ...l], u = Array.from(
        new Map(o.map((f) => [f.id, f])).values()
      );
      return {
        ...e,
        images: u,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: i,
          offset: a,
          hasMore: a + l.length < i
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
        const f = new Set(e.selectedIds);
        return f.add(t.payload), {
          ...e,
          selectedIds: f,
          lastSelectedId: t.payload
        };
      }
      const l = e.images.findIndex(
        (f) => f.id === e.lastSelectedId
      ), i = e.images.findIndex(
        (f) => f.id === t.payload
      );
      if (l === -1 || i === -1) return e;
      const [a, o] = [
        Math.min(l, i),
        Math.max(l, i)
      ], u = new Set(e.selectedIds);
      for (let f = a; f <= o; f++)
        u.add(e.images[f].id);
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
      const l = t.payload, i = typeof l == "number" ? l : l.id, a = typeof l == "number" ? "gallery" : l.mode, o = e.viewerMode === "lineage" && a === "lineage" && e.lineageImages.some((u) => u.id === i);
      return {
        ...e,
        viewerImageId: i,
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
      const i = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (f) => f.id === e.viewerImageId
      );
      if (o === -1 || o === a.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || o === a.length - 1 && !i)
        return e;
      const u = (o + 1) % a.length;
      return {
        ...e,
        viewerImageId: a[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const i = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (f) => f.id === e.viewerImageId
      );
      if (o === -1 || o === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || o === 0 && !i)
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
      }, i = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (i.limit = t.payload["gallery.initial_load_count"]), {
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
const td = v.createContext(void 0), Lm = ({
  children: e
}) => {
  const [t, n] = v.useReducer(Mm, Tm), r = v.useRef(t.images.length), l = v.useRef(0);
  v.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const i = v.useCallback(
    async (w, y, S) => {
      const T = t.settings["gallery.max_load_count"], c = 200;
      let d = w;
      for (; d < Math.min(y, T) && S === l.current; )
        try {
          const p = Math.min(c, T - d);
          V.log("Background fetch: starting chunk", {
            offset: d,
            limit: p
          });
          const E = await ol(
            d,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== l.current || (n({ type: "APPEND_IMAGES", payload: E }), d += E.images.length, E.images.length === 0 || d >= E.total))
            break;
          await new Promise((L) => setTimeout(L, 300));
        } catch (p) {
          V.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = v.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now(), y = ++l.current;
    try {
      const S = t.searchQuery.trim() !== "", T = t.settings["gallery.initial_load_count"];
      V.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: T,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const c = await ol(
        0,
        T,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), d = performance.now() - w;
      V.log("refreshImages: initial fetch complete", {
        count: c.images.length,
        total: c.total,
        offset: c.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: c }), c.total > T && i(T, c.total, y);
    } catch (S) {
      V.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    i
  ]), o = v.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now();
    try {
      const y = r.current, S = t.searchQuery.trim() !== "", T = t.pagination.limit;
      V.log("loadMoreImages: starting fetch", {
        nextOffset: y,
        fetchLimit: T,
        isSearch: S
      });
      const c = await ol(
        y,
        T,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), d = performance.now() - w;
      V.log("loadMoreImages: fetch complete", {
        count: c.images.length,
        total: c.total,
        offset: c.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: c });
    } catch (y) {
      V.error("loadMoreImages: fetch failed", y), n({
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
  ]), u = v.useCallback(async () => {
    try {
      const w = await Up();
      n({ type: "SET_FAVORITES", payload: w });
    } catch (w) {
      V.error("Failed to load favorites", w);
    }
  }, []), f = v.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds), S = t.images.filter(
      (T) => t.selectedIds.has(T.id)
    ).some(
      (T) => T.parent_id || T.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: w,
        hasLineage: S,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), x = v.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 }), await ws(w), t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: w }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (y) {
      n({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    }
  }, [t.selectedIds, t.viewScope]), _ = v.useCallback(
    async (w, y) => {
      try {
        await Dp(w, y), n({ type: "SET_SETTINGS", payload: { [w]: y } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), h = v.useCallback(
    async (w) => {
      const y = t.images.find((S) => S.id === w);
      if (y && !y.is_minimal)
        return y;
      try {
        V.log("fetchFullImageDetails: fetching full data", { id: w });
        const S = await Mp(w);
        return n({ type: "UPDATE_IMAGE", payload: S }), S;
      } catch (S) {
        throw V.error("Failed to fetch image details", S), S;
      }
    },
    [t.images]
  );
  return v.useEffect(() => {
    (async () => {
      try {
        const y = await Wc();
        n({ type: "SET_SETTINGS", payload: y });
      } catch (y) {
        V.error("Failed to load settings", y);
      }
    })();
  }, []), v.useEffect(() => {
    u();
  }, [u]), v.useEffect(() => {
    const w = () => {
      a();
    }, y = (T) => {
      const c = T.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: c }
      });
    }, S = (T) => {
      const c = T.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: c.new_count || 0,
          updatedCount: c.updated_count || 0,
          totalCount: c.total_count || 0,
          progress: {
            current: c.total_count || t.scanStatus.progress.total,
            total: c.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), a();
    };
    return window.addEventListener("meld-refresh", w), window.addEventListener("meld-scan-progress", y), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", w), window.removeEventListener("meld-scan-progress", y), window.removeEventListener("meld-scan-finished", S);
    };
  }, [a, t.scanStatus.progress.total]), v.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ s.jsx(
    td.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: f,
        restoreSelected: x,
        updateSetting: _,
        fetchFullImageDetails: h
      },
      children: e
    }
  );
}, qe = () => {
  const e = v.useContext(td);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Pm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = qe(), [i, a] = v.useState("gallery"), [o, u] = v.useState(""), [f, x] = v.useState(e.pagination.limit);
  v.useEffect(() => {
    x(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const _ = e.searchQuery.trim() !== "", h = v.useRef(null), w = v.useRef(null), y = v.useMemo(
    () => e.images.filter((T) => e.viewScope === "trash" ? T.exists !== !1 || e.settings["gallery.trash.show_missing"] : T.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && T.has_children)),
    [e.images, e.settings, e.viewScope]
  ), S = v.useMemo(
    () => y.slice(0, f),
    [y, f]
  );
  return v.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && y.length === 0 && (V.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    y.length,
    r
  ]), v.useEffect(() => {
    const T = (c) => {
      c.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), c.preventDefault(), c.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), c.preventDefault(), c.stopPropagation()));
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [e.activeModal.type, e.selectedIds.size, t]), v.useEffect(() => {
    const T = new IntersectionObserver(
      (d) => {
        if (d[0].isIntersecting) {
          if (e.isLoading) {
            V.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          f < y.length ? (V.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: f,
              newLimit: Math.min(
                f + e.pagination.limit,
                y.length
              ),
              totalAvailableLocally: y.length
            }
          ), x((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (V.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : V.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: y.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), c = h.current;
    return c && T.observe(c), () => {
      c && T.unobserve(c);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    f,
    y.length,
    e.pagination.limit,
    e.images.length
  ]), v.useEffect(() => {
    const T = e.viewerImageId ?? w.current;
    if (T !== null && y.some((d) => d.id === T)) {
      const d = y.findIndex((E) => E.id === T);
      if (d >= f) {
        x(
          Math.ceil((d + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${T}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (w.current = null));
    }
    e.viewerImageId !== null && (w.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    y,
    f,
    e.pagination.limit
  ]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: l,
    viewMode: i,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: u,
    localLimit: f,
    displayedImages: y,
    visibleImages: S,
    isSearchActive: _,
    loadMoreRef: h
  };
}, Dm = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = v.useState(!1), i = v.useRef(null);
  return v.useEffect(() => {
    const a = new IntersectionObserver(
      ([u]) => {
        l(u.isIntersecting);
      },
      { rootMargin: n }
    ), o = i.current;
    return o && a.observe(o), () => {
      o && a.unobserve(o);
    };
  }, [n]), /* @__PURE__ */ s.jsx(
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
}, Rm = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = qe(), l = e.selectedIds.size;
  if (l === 0) return null;
  const i = e.viewScope === "trash", a = () => {
    const o = e.images.filter(
      (f) => e.selectedIds.has(f.id)
    ), u = /* @__PURE__ */ new Set();
    for (const f of o)
      if (f.tags)
        for (const x of f.tags)
          u.add(x);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(u)
      }
    });
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${i ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
          l,
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
                  ar,
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
                  zn,
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
              onClick: a,
              children: [
                /* @__PURE__ */ s.jsx(
                  an,
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
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ s.jsx(
                  zn,
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
              /* @__PURE__ */ s.jsx(Le, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, nd = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: i } = qe(), a = v.useRef(!0);
  v.useEffect(() => () => {
    a.current = !1;
  }, []);
  const o = v.useRef(l.viewerImageId);
  v.useEffect(() => {
    o.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const u = v.useCallback(() => {
    i({ type: "CLOSE_MODAL" });
  }, [i]), f = v.useCallback(
    (h) => {
      if (!a.current) return;
      const w = o.current;
      if (w === null || !h.has(w))
        return;
      const y = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (c) => c.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && c.has_children)
      ), S = y.findIndex(
        (c) => c.id === w
      );
      if (S === -1) return;
      let T = !1;
      for (let c = S + 1; c < y.length; c++)
        if (!h.has(y[c].id)) {
          i({
            type: "OPEN_VIEWER",
            payload: { id: y[c].id, mode: l.viewerMode }
          }), T = !0;
          break;
        }
      if (!T) {
        for (let c = S - 1; c >= 0; c--)
          if (!h.has(y[c].id)) {
            i({
              type: "OPEN_VIEWER",
              payload: { id: y[c].id, mode: l.viewerMode }
            }), T = !0;
            break;
          }
      }
      T || i({ type: "CLOSE_VIEWER" });
    },
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      i
    ]
  );
  v.useEffect(() => {
    const h = (w) => {
      w.key === "Escape" && u();
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [u]);
  const x = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (S) => S.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && S.has_children)
      ), w = new Set(e), y = h.filter(
        (S) => w.has(S.id)
      );
      if (f(w), await vs(e, n), !a.current) return;
      !n && r && r(y), i({ type: "REMOVE_IMAGES", payload: e }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  }, _ = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (S) => S.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && S.has_children)
      ), w = new Set(e);
      for (const S of e) {
        const T = await ys(S);
        if (!a.current) return;
        for (const c of T)
          w.add(c.id);
      }
      const y = h.filter(
        (S) => w.has(S.id)
      );
      if (f(w), await vs(Array.from(w), n), !a.current) return;
      !n && r && r(y), i({
        type: "REMOVE_IMAGES",
        payload: Array.from(w)
      }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  };
  return $e.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: u, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (h) => h.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ s.jsx(zn, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: u,
                children: /* @__PURE__ */ s.jsx(Le, { size: 20 })
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
                        im,
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
                      " or descendants. You can choose to delete just the selected items or all related items in their lineage."
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
                onClick: u,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  onClick: x,
                  children: n ? "Delete Permanently" : "Move to Trash"
                }
              ),
              t && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                  onClick: _,
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
}, Te = (e) => {
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
}, rd = () => {
  const { dispatch: e } = qe(), [t, n] = v.useState(() => {
    const k = localStorage.getItem("meld-import-config"), g = {
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
        const P = JSON.parse(k);
        return { ...g, ...P, tags: [] };
      } catch {
        return g;
      }
    return g;
  });
  v.useEffect(() => {
    const { tags: k, ...g } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(g));
  }, [t]);
  const [r, l] = v.useState([]), [i, a] = v.useState([]), [o, u] = v.useState(0), [f, x] = v.useState(!1), [_, h] = v.useState([]), [w, y] = v.useState(""), [S, T] = v.useState(!1), [c, d] = v.useState(null);
  v.useEffect(() => {
    (async () => {
      try {
        const g = await Tp();
        n((P) => P.custom_path ? P : { ...P, custom_path: g });
      } catch (g) {
        V.error("Failed to fetch home directory:", g);
      }
    })();
  }, []), v.useEffect(() => {
    const k = new AbortController();
    return (async () => {
      const P = t.type === "custom" ? t.custom_path : t.subfolder;
      if (V.log(
        `loadFolders started. Path: "${P}", Type: "${t.type}"`
      ), t.type === "custom" && !P) {
        V.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      x(!0);
      const m = P, D = t.type;
      try {
        V.log("Step 1: Fast load starting...");
        const U = await Op(
          t.type,
          P,
          !0,
          k.signal
        );
        if (k.signal.aborted) {
          V.log("Step 1: Aborted.");
          return;
        }
        V.log(
          `Step 1 complete. Found ${U.folders.length} folders, ${U.images.length} images.`
        ), l(U.folders), a(U.images), u(null);
        const ee = U.folders.map((N) => N.name);
        ee.length > 0 && (V.log(
          `Step 2: Metadata fetch starting for ${ee.length} folders...`
        ), Fp(
          D,
          m,
          ee,
          k.signal
        ).then((N) => {
          if (k.signal.aborted) {
            V.log("Step 2: Aborted.");
            return;
          }
          V.log("Step 2: Metadata fetch complete."), l(
            (A) => A.map((F) => {
              const j = N[F.name];
              return j ? { ...F, count: j.count, preview: j.preview } : F;
            })
          );
        }).catch((N) => {
          N.name !== "AbortError" && V.error("Step 2: Metadata fetch failed:", N);
        })), V.log("Step 3: Path image count starting..."), Ap(D, m, k.signal).then((N) => {
          if (k.signal.aborted) {
            V.log("Step 3: Aborted.");
            return;
          }
          V.log(`Step 3: Path image count complete: ${N}`), u(N);
        }).catch((N) => {
          N.name !== "AbortError" && V.error("Step 3: Path image count failed:", N);
        });
      } catch (U) {
        if (U.name === "AbortError") {
          V.log("Request aborted.");
          return;
        }
        V.error("Failed to load folders:", U), l([]), a([]), u(0);
      } finally {
        k.signal.aborted || x(!1);
      }
    })(), () => {
      k.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = v.useCallback(async () => {
    T(!0);
    try {
      const k = await ha();
      h(k);
    } catch (k) {
      V.error("Failed to fetch tags:", k);
    } finally {
      T(!1);
    }
  }, []);
  v.useEffect(() => {
    p();
  }, [p]), v.useEffect(() => {
    const k = (g) => {
      g.key === "Escape" && (g.preventDefault(), g.stopImmediatePropagation(), c ? d(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", k, { capture: !0 }), () => window.removeEventListener("keydown", k, { capture: !0 });
  }, [c, e]);
  const E = v.useMemo(() => _.filter(
    (k) => k.name.toLowerCase().includes(w.toLowerCase()) && !t.tags.includes(k.name)
  ), [_, w, t.tags]), L = (k) => {
    const g = k.trim();
    g && !t.tags.includes(g) && (n({ ...t, tags: [...t.tags, g] }), y(""));
  }, z = (k) => {
    n({ ...t, tags: t.tags.filter((g) => g !== k) });
  }, C = (k) => {
    k.key === "Enter" && w.trim() && (k.preventDefault(), L(w.trim()));
  }, R = async () => {
    try {
      await $p(t), e({
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
  }, B = (k) => {
    if (t.type === "custom") {
      const g = t.custom_path.includes("\\") ? "\\" : "/", P = t.custom_path.endsWith(g) ? `${t.custom_path}${k}` : `${t.custom_path}${g}${k}`;
      n({ ...t, custom_path: P });
    } else {
      const g = t.subfolder ? `${t.subfolder}/${k}` : k;
      n({ ...t, subfolder: g });
    }
  }, $ = () => {
    if (t.type === "custom") {
      const k = t.custom_path.includes("\\") ? "\\" : "/", g = t.custom_path.split(k);
      if (g.length > 1) {
        g.pop();
        let P = g.join(k);
        P === "" && k === "/" && (P = "/"), n({ ...t, custom_path: P });
      }
    } else {
      const k = t.subfolder.split("/");
      k.pop(), n({ ...t, subfolder: k.join("/") });
    }
  };
  return $e.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => e({ type: "CLOSE_MODAL" }),
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (k) => k.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(Le, { size: 20 })
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
                          onChange: (k) => n({
                            ...t,
                            type: k.target.value,
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
                          onChange: (k) => n({ ...t, recursive: k.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "link-strategy", children: "Parent Linking" }),
                      /* @__PURE__ */ s.jsxs(
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
                            /* @__PURE__ */ s.jsx("option", { value: "none", children: "Do not link" }),
                            /* @__PURE__ */ s.jsx("option", { value: "new_only", children: "Only for new images" }),
                            /* @__PURE__ */ s.jsx("option", { value: "all", children: "Reset for all images" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((k) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        k,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => z(k),
                            children: /* @__PURE__ */ s.jsx(Le, { size: 12 })
                          }
                        )
                      ] }, k)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(bn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: w,
                            onChange: (k) => y(k.target.value),
                            onKeyDown: C
                          }
                        ),
                        w.trim() && !t.tags.includes(w.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => L(w),
                            children: /* @__PURE__ */ s.jsx(ga, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: S ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : E.length === 0 ? w && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        w
                      ] }) : E.map((k) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => L(k.name),
                          children: k.name
                        },
                        k.id
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
                          /* @__PURE__ */ s.jsx(wm, { size: 16 }),
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
                          onClick: $,
                          children: [
                            /* @__PURE__ */ s.jsx(Zc, { size: 16 }),
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
                          onChange: (k) => n({ ...t, custom_path: k.target.value }),
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: f ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && i.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      r.map((k) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => B(k.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: k.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Te(k.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(pm, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: k.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${k.count === null ? "meld-folder-count--loading" : ""}`,
                                children: k.count !== null ? `${k.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(Jc, { size: 14 })
                          ]
                        },
                        k.name
                      )),
                      i.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: i.map((k) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => d(k),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: Te(k),
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
          c && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (k) => {
                k.stopPropagation(), d(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (k) => k.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => d(null),
                          children: /* @__PURE__ */ s.jsx(Le, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: Te(c),
                          alt: c.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: c.filename })
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
}, ld = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = qe(), [l, i] = v.useState([]), [a, o] = v.useState(!0), [u, f] = v.useState(!1), x = t.images.find((c) => c.id === e), _ = v.useCallback(async () => {
    o(!0);
    try {
      const c = t.settings["gallery.suggest_phash_threshold"], d = await bp(e, c);
      i(d);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  v.useEffect(() => {
    _();
  }, [_]);
  const h = async (c) => {
    try {
      await Rp(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, w = async (c) => {
    o(!0);
    try {
      const d = await zp(c), { id: p } = await Gc({
        filename: d.name,
        subfolder: d.subfolder || "",
        type: d.type || "input"
      });
      await h(p);
    } catch (d) {
      console.error("Failed to upload/register image:", d);
    } finally {
      o(!1);
    }
  }, y = (c) => {
    c.preventDefault(), c.stopPropagation(), f(!1);
    const d = c.dataTransfer.files[0];
    d != null && d.type.startsWith("image/") && w(d);
  };
  if (!x) return null;
  const S = l.filter((c) => c.is_source_match), T = l.filter((c) => !c.is_source_match);
  return $e.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              x.id
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ s.jsx(Le, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (c) => {
                  c.preventDefault(), c.stopPropagation(), f(!0);
                },
                onDragOver: (c) => {
                  c.preventDefault(), c.stopPropagation(), c.dataTransfer.dropEffect = "copy", f(!0);
                },
                onDragLeave: (c) => {
                  c.preventDefault(), c.stopPropagation(), f(!1);
                },
                onDrop: y,
                children: [
                  /* @__PURE__ */ s.jsx(Em, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              S.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: S.map((c) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ s.jsx("img", { src: Te(c), alt: c.filename }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: c.filename }) })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                T.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: T.map((c) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ s.jsx("img", { src: Te(c), alt: c.filename }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                        /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
                        /* @__PURE__ */ s.jsxs("span", { className: "meld-suggestion-distance", children: [
                          "Match:",
                          " ",
                          Math.round((64 - c.distance) / 64 * 100),
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  c.id
                )) }) : /* @__PURE__ */ s.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, id = () => {
  const { state: e, dispatch: t, updateSetting: n } = qe(), [r, l] = v.useState("General"), [i, a] = v.useState({
    ...e.settings
  }), [o, u] = v.useState(
    {}
  ), [f, x] = v.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [_, h] = v.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [w, y] = v.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [S, T] = v.useState(e.settings["viewer.thumbnail_window_size"].toString()), [c, d] = v.useState(e.settings["gallery.trash_retention_days"].toString()), [p, E] = v.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [L, z] = v.useState(
    e.settings["gallery.related_phash_threshold"].toString()
  ), [C, R] = v.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [B, $] = v.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    k,
    g
  ] = v.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    P,
    m
  ] = v.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), D = [
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
      key: "gallery.initial_load_count",
      label: "Initial Load Count",
      description: "Number of images to load and display immediately (10-1000).",
      type: "number",
      category: "General",
      min: 10,
      max: 1e3
    },
    {
      key: "gallery.max_load_count",
      label: "Maximum Load Count",
      description: "Maximum number of images to load in the background (10-1000000).",
      type: "number",
      category: "General",
      min: 10,
      max: 1e6
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
      key: "gallery.suggest_phash_threshold",
      label: "Parent Suggestion Threshold",
      description: "Maximum pHash distance for automatic parent linking (0-64). Default: 12. Recommended: 8-16. Smaller is stricter.",
      type: "number",
      category: "General",
      min: 0,
      max: 64
    },
    {
      key: "gallery.related_phash_threshold",
      label: "Related Images Threshold",
      description: "Maximum pHash distance for 'Similar Images' view (0-64). Default: 8. Recommended: 4-12. Smaller is stricter.",
      type: "number",
      category: "General",
      min: 0,
      max: 64
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
      key: "viewer.details.show_source",
      label: "Show Source",
      description: "Display source image information in the details panel.",
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
      key: "fullscreen.details.show_source",
      label: "Show Source",
      description: "Display source image information in fullscreen details.",
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
    },
    {
      key: "viewer.shortcut.1",
      label: "Shortcut 1 (Key: 1)",
      description: "Command to execute when pressing '1' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.2",
      label: "Shortcut 2 (Key: 2)",
      description: "Command to execute when pressing '2' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.3",
      label: "Shortcut 3 (Key: 3)",
      description: "Command to execute when pressing '3' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.4",
      label: "Shortcut 4 (Key: 4)",
      description: "Command to execute when pressing '4' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.5",
      label: "Shortcut 5 (Key: 5)",
      description: "Command to execute when pressing '5' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.6",
      label: "Shortcut 6 (Key: 6)",
      description: "Command to execute when pressing '6' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.7",
      label: "Shortcut 7 (Key: 7)",
      description: "Command to execute when pressing '7' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.8",
      label: "Shortcut 8 (Key: 8)",
      description: "Command to execute when pressing '8' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.9",
      label: "Shortcut 9 (Key: 9)",
      description: "Command to execute when pressing '9' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.0",
      label: "Shortcut 0 (Key: 0)",
      description: "Command to execute when pressing '0' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.show_cheat_sheet",
      label: "Show Cheat Sheet",
      description: "Display shortcut key guide in View/Full Screen mode.",
      type: "boolean",
      category: "Shortcuts"
    }
  ], U = async () => {
    const j = Object.keys(i).filter(
      (Q) => i[Q] !== e.settings[Q] && !o[Q]
    );
    if (j.length > 0)
      for (const Q of j)
        await n(Q, i[Q]);
    t({ type: "CLOSE_MODAL" });
  }, ee = (j, Q) => {
    a((G) => ({
      ...G,
      [j]: !Q
    }));
  }, N = (j) => j.trim() ? j.trim().split(/\s+/).every((G) => !!(G === "next" || G === "prev" || G === "delete" || G.startsWith("tag:") && G.length > 4 || G.startsWith("-tag:") && G.length > 5 || G.startsWith("tag-toggle:") && G.length > 11)) : !0, A = (j, Q, G, se) => {
    j === "gallery.initial_load_count" ? x(Q) : j === "gallery.max_load_count" ? h(Q) : j === "gallery.lineage_max_depth" ? y(Q) : j === "viewer.thumbnail_window_size" ? T(Q) : j === "gallery.trash_retention_days" ? d(Q) : j === "gallery.suggest_phash_threshold" ? E(Q) : j === "gallery.related_phash_threshold" ? z(Q) : j === "viewer.details.max_positive_prompt_lines" ? R(Q) : j === "viewer.details.max_negative_prompt_lines" ? $(Q) : j === "fullscreen.details.max_positive_prompt_lines" ? g(Q) : j === "fullscreen.details.max_negative_prompt_lines" && m(Q);
    const He = Number.parseInt(Q, 10);
    if (!Number.isNaN(He)) {
      let ke = He;
      G !== void 0 && ke < G && (ke = G), se !== void 0 && ke > se && (ke = se), a((Et) => ({
        ...Et,
        [j]: ke
      }));
    }
  }, F = D.filter(
    (j) => j.category === r
  );
  return $e.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: U, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (j) => j.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: U,
                children: /* @__PURE__ */ s.jsx(Le, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-tabs", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "General" ? "active" : ""}`,
                  onClick: () => l("General"),
                  children: "General"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Sidebar" ? "active" : ""}`,
                  onClick: () => l("Sidebar"),
                  children: "Sidebar"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Search" ? "active" : ""}`,
                  onClick: () => l("Search"),
                  children: "Search"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View" ? "active" : ""}`,
                  onClick: () => l("View"),
                  children: "View"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View Details" ? "active" : ""}`,
                  onClick: () => l("View Details"),
                  children: "View Details"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen" ? "active" : ""}`,
                  onClick: () => l("Full Screen"),
                  children: "Full Screen"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen Detail" ? "active" : ""}`,
                  onClick: () => l("Full Screen Detail"),
                  children: "Full Screen Detail"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Shortcuts" ? "active" : ""}`,
                  onClick: () => l("Shortcuts"),
                  children: "Shortcuts"
                }
              )
            ] }) }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              r === "Shortcuts" && /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-help", children: [
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-settings-list", children: F.map((j) => {
                var Q;
                return /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
                    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: j.label }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: j.description })
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__control", children: [
                    j.type === "boolean" && /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: !!i[j.key],
                          onChange: () => ee(
                            j.key,
                            !!i[j.key]
                          )
                        }
                      ),
                      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
                    ] }),
                    j.type === "number" && /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        type: "number",
                        className: "meld-number-input",
                        value: j.key === "gallery.initial_load_count" ? f : j.key === "gallery.max_load_count" ? _ : j.key === "gallery.lineage_max_depth" ? w : j.key === "viewer.thumbnail_window_size" ? S : j.key === "viewer.details.max_positive_prompt_lines" ? C : j.key === "viewer.details.max_negative_prompt_lines" ? B : j.key === "fullscreen.details.max_positive_prompt_lines" ? k : j.key === "fullscreen.details.max_negative_prompt_lines" ? P : j.key === "gallery.trash_retention_days" ? c : j.key === "gallery.suggest_phash_threshold" ? p : j.key === "gallery.related_phash_threshold" ? L : i[j.key],
                        min: j.min,
                        max: j.max,
                        onChange: (G) => A(
                          j.key,
                          G.target.value,
                          j.min,
                          j.max
                        ),
                        onBlur: () => {
                          j.key === "gallery.initial_load_count" ? x(
                            i["gallery.initial_load_count"].toString()
                          ) : j.key === "gallery.max_load_count" ? h(
                            i["gallery.max_load_count"].toString()
                          ) : j.key === "gallery.lineage_max_depth" ? y(
                            i["gallery.lineage_max_depth"].toString()
                          ) : j.key === "viewer.thumbnail_window_size" ? T(
                            i["viewer.thumbnail_window_size"].toString()
                          ) : j.key === "gallery.trash_retention_days" ? d(
                            i["gallery.trash_retention_days"].toString()
                          ) : j.key === "gallery.suggest_phash_threshold" ? E(
                            i["gallery.suggest_phash_threshold"].toString()
                          ) : j.key === "gallery.related_phash_threshold" ? z(
                            i["gallery.related_phash_threshold"].toString()
                          ) : j.key === "viewer.details.max_positive_prompt_lines" ? R(
                            i["viewer.details.max_positive_prompt_lines"].toString()
                          ) : j.key === "viewer.details.max_negative_prompt_lines" ? $(
                            i["viewer.details.max_negative_prompt_lines"].toString()
                          ) : j.key === "fullscreen.details.max_positive_prompt_lines" ? g(
                            i["fullscreen.details.max_positive_prompt_lines"].toString()
                          ) : j.key === "fullscreen.details.max_negative_prompt_lines" && m(
                            i["fullscreen.details.max_negative_prompt_lines"].toString()
                          );
                        }
                      }
                    ),
                    j.type === "select" && /* @__PURE__ */ s.jsx(
                      "select",
                      {
                        className: "meld-select",
                        value: i[j.key],
                        onChange: (G) => a((se) => ({
                          ...se,
                          [j.key]: G.target.value
                        })),
                        children: (Q = j.options) == null ? void 0 : Q.map((G) => /* @__PURE__ */ s.jsx("option", { value: G.value, children: G.label }, G.value))
                      }
                    ),
                    j.type === "text" && /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        type: "text",
                        className: `meld-text-input ${o[j.key] ? "meld-text-input--error" : ""}`,
                        value: i[j.key] || "",
                        onChange: (G) => {
                          a((se) => ({
                            ...se,
                            [j.key]: G.target.value
                          }));
                        },
                        onBlur: () => {
                          if (j.key.startsWith("viewer.shortcut.")) {
                            const G = N(
                              i[j.key] || ""
                            );
                            u((se) => ({
                              ...se,
                              [j.key]: !G
                            }));
                          }
                        }
                      }
                    )
                  ] })
                ] }, j.key);
              }) }),
              r === "General" && /* @__PURE__ */ s.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Trash Management" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "View and manage items currently in the trash bin." })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: /* @__PURE__ */ s.jsx(
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
              ] }) }),
              r === "Shortcuts" && /* @__PURE__ */ s.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Reset Shortcuts" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "Restore all shortcuts to their default values." })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-button meld-button--secondary",
                    onClick: () => {
                      a((j) => ({
                        ...j,
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
                    children: "Reset to Defaults"
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
}, it = "none", sd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = qe(), [i, a] = v.useState([]), [o, u] = v.useState(t), [f, x] = v.useState(""), [_, h] = v.useState(!0), [w, y] = v.useState(!1), S = v.useRef(null), T = e.length > 1, c = v.useCallback(async () => {
    h(!0);
    try {
      const C = await ha();
      a(C);
    } catch (C) {
      console.error("Failed to fetch tags:", C);
    } finally {
      h(!1);
    }
  }, []);
  v.useEffect(() => {
    c();
  }, [c]), v.useEffect(() => {
    S.current && S.current.focus();
    const C = (R) => {
      R.key === "Escape" && (R.preventDefault(), R.stopPropagation(), R.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", C, { capture: !0 }), () => window.removeEventListener("keydown", C, {
      capture: !0
    });
  }, [n]);
  const d = v.useMemo(() => i.filter(
    (C) => C.name.toLowerCase().includes(f.toLowerCase()) && !o.includes(C.name)
  ), [i, f, o]), p = (C) => {
    const R = C.trim();
    if (R.toLowerCase() === it) {
      alert(
        `Tag name '${it}' is reserved for search and cannot be used.`
      );
      return;
    }
    R && !o.includes(R) && (u([...o, R]), x(""));
  }, E = (C) => {
    u(o.filter((R) => R !== C));
  }, L = async () => {
    y(!0);
    try {
      if (T) {
        const C = o.filter((B) => !t.includes(B)), R = t.filter(
          (B) => !o.includes(B)
        );
        await xs(e, C, R);
      } else
        await Kp(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (C) {
      console.error("Failed to update tags:", C), alert("Failed to update tags.");
    } finally {
      y(!1);
    }
  }, z = (C) => {
    C.key === "Enter" && f.trim() ? (C.preventDefault(), C.stopPropagation(), p(f.trim())) : C.key === "Escape" && (C.preventDefault(), C.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return $e.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: (C) => {
          C.stopPropagation(), n();
        },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (C) => C.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(an, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: T ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(Le, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            T && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: T ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((C) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                C,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => E(C),
                    children: /* @__PURE__ */ s.jsx(Le, { size: 12 })
                  }
                )
              ] }, C)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(bn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: f,
                    onChange: (C) => x(C.target.value),
                    onKeyDown: z
                  }
                ),
                f.trim() && !o.includes(f.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => p(f),
                    children: [
                      /* @__PURE__ */ s.jsx(ga, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? f ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : d.map((C) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => p(C.name),
                  children: C.name
                },
                C.id
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
}, bm = () => {
  const { state: e, dispatch: t } = qe();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "parent_selection" && $e.createPortal(
      /* @__PURE__ */ s.jsx(ld, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && $e.createPortal(/* @__PURE__ */ s.jsx(rd, {}), document.body),
    e.activeModal.type === "settings" && $e.createPortal(/* @__PURE__ */ s.jsx(id, {}), document.body),
    e.activeModal.type === "tag_edit" && $e.createPortal(
      /* @__PURE__ */ s.jsx(
        sd,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && $e.createPortal(
      /* @__PURE__ */ s.jsx(
        nd,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    )
  ] });
}, zm = ({ image: e }) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = qe(), l = t.selectedIds.has(e.id), a = (t.settings["gallery.view_mode"] || "grid_details") === "grid_only", [o, u] = v.useState(null), [f, x] = v.useState(!1), [_, h] = v.useState(null), [w, y] = v.useState(!1), S = v.useRef(null), T = async (g, P, m = !1) => {
    try {
      await navigator.clipboard.writeText(g), m ? (y(!0), setTimeout(() => y(!1), 2e3)) : (h(P), setTimeout(() => h(null), 2e3));
    } catch (D) {
      console.error("Failed to copy text: ", D);
    }
  };
  v.useEffect(() => {
    const g = (m) => {
      m.key === "Escape" && (o ? u(null) : x(!1));
    }, P = (m) => {
      S.current && !S.current.contains(m.target) && x(!1);
    };
    return window.addEventListener("keydown", g), f && document.addEventListener("mousedown", P), () => {
      window.removeEventListener("keydown", g), document.removeEventListener("mousedown", P);
    };
  }, [f, o]);
  const c = (g) => {
    const P = t.settings["gallery.lineage_max_depth"];
    if (P === 0) return [];
    if (g.ancestors && g.ancestors.length > 0)
      return g.ancestors.slice(0, P).map((N) => ({
        id: N.id,
        imgSrc: Te(N)
      }));
    const m = g.parent_id;
    if (!m || !g.parent_filename) return [];
    const D = t.images.find((N) => N.id === m);
    let U = null;
    if (D ? U = Te(D) : U = Te({
      filename: g.parent_filename,
      subfolder: g.parent_subfolder || "",
      type: g.parent_type
    }), !U) return [];
    const ee = {
      id: m || null,
      imgSrc: U
    };
    if (D && P > 1) {
      const N = c(D);
      return [ee, ...N].slice(0, P);
    }
    return [ee];
  }, d = c(e), E = t.settings["sidebar.show_filename"] === "filepath" ? `${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, L = Te(e), z = (g) => {
    g.shiftKey ? (g.preventDefault(), g.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : g.ctrlKey || g.metaKey || t.selectedIds.size > 0 ? (g.preventDefault(), g.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, C = (g) => {
    g.shiftKey ? (g.preventDefault(), g.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : g.ctrlKey || g.metaKey || t.selectedIds.size > 0 ? (g.preventDefault(), g.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, R = (g) => {
    (g.shiftKey || g.ctrlKey || g.metaKey || t.selectedIds.size > 0) && g.preventDefault();
  }, B = (g) => {
    (g.key === "Enter" || g.key === " ") && (g.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, $ = async () => {
    try {
      const g = await Yp(e.id);
      if (!g.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        g.workflow
      ), V.log("Workflow restored successfully from Meld");
    } catch (g) {
      V.error("Error restoring workflow:", g), alert("Failed to restore workflow.");
    }
  }, k = async () => {
    try {
      const g = await Xp(e.id), P = "MeldUnifiedLoader", m = window.app, U = window.LiteGraph.createNode(P);
      if (!U) {
        console.error(`Node type ${P} not found.`), alert(
          `Node type ${P} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const ee = {
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
      if (U.widgets) {
        for (const [j, Q] of Object.entries(ee)) {
          const G = g[j];
          if (G != null) {
            const se = U.widgets.find(
              (He) => He.name === Q
            );
            se && (se.value = G);
          }
        }
        const F = U.widgets.find(
          (j) => j.name === "control_after_generate"
        );
        F && (F.value = "fixed");
      }
      const N = m.canvas.ds.offset, A = m.canvas.ds.scale;
      U.pos = [(-N[0] + 400) / A, (-N[1] + 300) / A], m.graph.add(U), m.canvas.selectNode(U), m.canvas.centerOnNode(U);
    } catch (g) {
      console.error("Error adding Unified Loader:", g), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-image-card ${l ? "meld-image-card--selected" : ""} ${a ? "meld-image-card--grid-only" : ""}`,
      onClick: C,
      onMouseDown: R,
      onKeyDown: B,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
          "img",
          {
            src: L,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: R,
            onClick: (g) => {
              g.stopPropagation(), z(g);
            }
          }
        ) }),
        !a && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && E,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && d.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: d.map(
              (g, P) => g.imgSrc && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: g.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (m) => {
                    m.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: g.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: P === 0 ? "Source" : P === 1 ? "Grand-Source" : `Ancestor (S${P + 1})`,
                  alt: "source thumb"
                },
                g.id || P
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
              onClick: async (g) => {
                g.stopPropagation();
                const P = await r(e.id);
                u({
                  title: "Model",
                  text: P.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${_ === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (g) => {
                      g.stopPropagation();
                      const P = await r(e.id);
                      T(P.model_name || "-", "Model");
                    },
                    children: _ === "Model" ? "Copied!" : "Model"
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
              onClick: async (g) => {
                g.stopPropagation();
                const P = await r(e.id);
                u({
                  title: "Positive Prompt",
                  text: P.positive_prompt || P.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${_ === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (g) => {
                      g.stopPropagation();
                      const P = await r(e.id);
                      T(
                        P.positive_prompt || P.positive || "-",
                        "Positive"
                      );
                    },
                    children: _ === "Positive" ? "Copied!" : "Positive"
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
              onClick: async (g) => {
                g.stopPropagation();
                const P = await r(e.id);
                u({
                  title: "Negative Prompt",
                  text: P.negative_prompt || P.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${_ === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (g) => {
                      g.stopPropagation();
                      const P = await r(e.id);
                      T(
                        P.negative_prompt || P.negative || "-",
                        "Negative"
                      );
                    },
                    children: _ === "Negative" ? "Copied!" : "Negative"
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
              onClick: (g) => {
                g.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: {
                    type: "tag_edit",
                    imageIds: [e.id],
                    tags: e.tags || []
                  }
                });
              },
              children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((g, P) => /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    className: "meld-image-card__tag",
                    children: g
                  },
                  `${g}-${P}`
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
          )
        ] }),
        !a && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu-container", ref: S, children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (g) => {
                g.stopPropagation(), x(!f);
              },
              title: "Menu",
              children: /* @__PURE__ */ s.jsx(vm, { size: 16 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (g) => {
                g.stopPropagation(), k();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ s.jsx(Mo, { size: 16 })
            }
          ),
          f && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), k(), x(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(Mo, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), $(), x(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(sm, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), x(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(xm, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), x(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(an, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        o && $e.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-prompt-popup-overlay",
              onClick: (g) => {
                g.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-prompt-popup-content",
                  onClick: (g) => g.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-header", children: [
                      /* @__PURE__ */ s.jsx("span", { children: o.title }),
                      /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            w ? /* @__PURE__ */ s.jsx(
                              Xc,
                              {
                                size: 18,
                                style: { color: "var(--meld-success-color)" }
                              }
                            ) : /* @__PURE__ */ s.jsx(
                              dm,
                              {
                                className: "meld-prompt-popup-copy",
                                size: 18,
                                onClick: () => T(o.text, "", !0)
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              Le,
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup-text", children: o.text })
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
}, ad = v.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, o = Te(e);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${i ? "meld-viewer-thumbnail--parent" : ""} ${a ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
          // Default to gallery mode when clicking a thumbnail
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: o, alt: e.filename }),
          (i || a) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              children: i ? /* @__PURE__ */ s.jsx(Yc, { size: 12 }) : /* @__PURE__ */ s.jsx(Kc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
ad.displayName = "ThumbnailItem";
const Om = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = qe(), { viewerImageId: l, images: i, viewerMode: a, lineageImages: o } = e, [u, f] = v.useState(!1), [x, _] = v.useState(
    e.settings["viewer.show_details_by_default"]
  ), [h, w] = v.useState(null), y = h ?? e.settings["viewer.show_thumbnails"], [S, T] = v.useState(!1), [c, d] = v.useState(!1), [p, E] = v.useState(null), [L, z] = v.useState(null), [C, R] = v.useState(
    null
  ), B = v.useRef(null), $ = v.useRef(!0);
  v.useEffect(() => () => {
    $.current = !1;
  }, []);
  const k = v.useRef(l);
  v.useEffect(() => {
    k.current = l;
  }, [l]);
  const g = v.useMemo(() => a === "lineage" ? o : i.filter(
    (b) => b.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && b.has_children)
  ), [a, o, i, e.settings]), P = v.useMemo(() => l === null ? -1 : g.findIndex((b) => b.id === l), [g, l]), m = v.useMemo(() => (a === "lineage" && o.length > 0 ? o : i).find((b) => b.id === l), [a, o, i, l]), D = v.useMemo(() => {
    if (!y || P === -1) return [];
    const b = e.settings["viewer.thumbnail_window_size"], H = Math.floor(b / 2);
    let I = Math.max(0, P - H);
    const J = Math.min(g.length, I + b);
    return J === g.length && (I = Math.max(0, J - b)), g.slice(I, J).map((W, X) => ({
      img: W,
      absIndex: I + X
    }));
  }, [
    g,
    P,
    e.settings["viewer.thumbnail_window_size"],
    y
  ]), U = v.useCallback(
    async (b = !1) => {
      if (!m) return;
      const H = u ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
      if (!b && H === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [m.id],
            hasLineage: !!(m.parent_id || m.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const I = e.viewScope === "trash", J = /* @__PURE__ */ new Set([m.id]);
        if (H === "lineage") {
          const W = await ys(m.id);
          for (const X of W)
            J.add(X.id);
        }
        if (!$.current || k.current === null) return;
        if (g.length > J.size) {
          let W = !1;
          for (let X = P + 1; X < g.length; X++)
            if (!J.has(g[X].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: g[X].id, mode: a }
              }), W = !0;
              break;
            }
          if (!W) {
            for (let X = P - 1; X >= 0; X--)
              if (!J.has(g[X].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: g[X].id, mode: a }
                }), W = !0;
                break;
              }
          }
          W || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await vs(Array.from(J), I), !I) {
          const W = g.filter(
            (X) => J.has(X.id)
          );
          E(W), z(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(J) });
      } catch (I) {
        t({
          type: "SET_ERROR",
          payload: I instanceof Error ? I.message : String(I)
        });
      }
    },
    [
      m,
      u,
      e.settings,
      e.viewScope,
      g,
      P,
      a,
      t
    ]
  ), ee = v.useCallback(() => {
    m && t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: [m.id],
        tags: m.tags || []
      }
    });
  }, [m, t]), N = v.useCallback(async () => {
    const b = u ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (P === 0 && a === "gallery" && e.pagination.hasMore && !c && b) {
      d(!0);
      try {
        const H = e.pagination.limit, I = e.pagination.total, J = Math.max(0, I - H), W = await ol(
          J,
          H,
          e.searchQuery
        );
        if (!$.current || (t({ type: "APPEND_IMAGES", payload: W }), k.current === null)) return;
        if (W.images.length > 0) {
          const X = W.images[W.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: X.id, mode: "gallery" }
          });
        }
      } catch (H) {
        console.error("Failed to jump to end:", H);
      } finally {
        d(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: u } });
  }, [
    P,
    a,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    c,
    u
  ]), A = v.useCallback(
    (b) => {
      b && "stopPropagation" in b && b.stopPropagation();
      const H = B.current;
      H && (document.fullscreenElement ? document.exitFullscreen() : H.requestFullscreen().catch((I) => {
        console.error(
          `Error attempting to enable full-screen mode: ${I.message}`
        );
      }));
    },
    []
  ), F = v.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: u } });
  }, [t, u]), j = v.useCallback(async () => {
    if (m)
      try {
        const b = m.id;
        g.length > 1 ? F() : t({ type: "CLOSE_VIEWER" }), await ws([b]), t({ type: "REMOVE_IMAGES", payload: [b] });
      } catch (b) {
        t({
          type: "SET_ERROR",
          payload: b instanceof Error ? b.message : String(b)
        });
      }
  }, [m, g.length, F, t]), Q = v.useCallback(async () => {
    if (!p || p.length === 0) return;
    const b = p.map((I) => I.id), H = b[0];
    try {
      if (await ws(b), !$.current || (t({ type: "ADD_IMAGES", payload: p }), E(null), !$.current)) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: H, mode: a }
      });
    } catch (I) {
      t({
        type: "SET_ERROR",
        payload: I instanceof Error ? I.message : String(I)
      });
    }
  }, [p, t, a]), G = v.useCallback(async () => {
    if (p && p.length > 0)
      await Q();
    else if (L && L.type === "tags") {
      const { imageId: b, addTags: H, removeTags: I } = L;
      try {
        await xs([b], H, I);
        const J = (a === "lineage" ? o : i).find((W) => W.id === b);
        if (J) {
          const W = [...J.tags];
          for (const ge of H)
            W.includes(ge) || W.push(ge);
          const X = W.filter((ge) => !I.includes(ge));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...J, tags: X }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: b, mode: a }
          });
        }
        z(null);
      } catch (J) {
        t({
          type: "SET_ERROR",
          payload: J instanceof Error ? J.message : String(J)
        });
      }
    }
  }, [
    p,
    L,
    Q,
    i,
    o,
    a,
    t
  ]), se = v.useCallback(
    async (b) => {
      if (!b || !m) return;
      const H = m.id, I = [...m.tags], J = b.split(/\s+/), W = [], X = [];
      let ge = !1, on = !1, Lr = !1;
      for (const ye of J)
        if (ye.startsWith("tag:")) {
          const de = ye.substring(4);
          de && !I.includes(de) && !W.includes(de) && W.push(de);
        } else if (ye.startsWith("-tag:")) {
          const de = ye.substring(5);
          de && I.includes(de) && !X.includes(de) && X.push(de);
        } else if (ye.startsWith("tag-toggle:")) {
          const de = ye.substring(11);
          de && (I.includes(de) ? X.includes(de) || X.push(de) : W.includes(de) || W.push(de));
        } else ye === "next" ? ge = !0 : ye === "prev" ? on = !0 : ye === "delete" && (Lr = !0);
      if (W.length > 0 || X.length > 0)
        try {
          await xs([H], W, X);
          const ye = [...I];
          for (const Gt of W)
            ye.includes(Gt) || ye.push(Gt);
          const de = ye.filter((Gt) => !X.includes(Gt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...m, id: H, tags: de }
          }), z({
            type: "tags",
            imageId: H,
            addTags: [...X],
            removeTags: [...W]
          }), E(null);
        } catch (ye) {
          console.error("Failed to update tags via shortcut:", ye);
        }
      Lr ? U(!0) : ge ? F() : on && N();
    },
    [m, t, F, N, U]
  );
  v.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || P !== -1 && P >= g.length - 15 && n();
  }, [
    l,
    g.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    P
  ]), v.useEffect(() => {
    const b = (I) => {
      var de, Gt, ya;
      if (l === null) return;
      const J = ((de = document.activeElement) == null ? void 0 : de.tagName) === "INPUT" || ((Gt = document.activeElement) == null ? void 0 : Gt.tagName) === "TEXTAREA" || ((ya = document.activeElement) == null ? void 0 : ya.isContentEditable), W = I.key === "Delete" || I.key === "Backspace", X = I.key === "ArrowRight" || I.key === "ArrowLeft", ge = I.key === "f" || I.key === "F" || I.key === "i" || I.key === "I" || I.key === "t" || I.key === "T" || I.key === "r" || I.key === "R", on = I.key === "Escape", Lr = (I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z" || I.code === "KeyZ"), ye = /^[0-9]$/.test(I.key) && !I.ctrlKey && !I.metaKey && !I.altKey && I.code !== "KeyZ";
      if (W || X || ge || on || Lr || ye)
        if (J)
          if (on) {
            if (e.activeModal.type !== "none") {
              I.preventDefault(), I.stopPropagation();
              return;
            }
            I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation();
          } else
            return;
        else {
          if (on && e.activeModal.type !== "none") {
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
        F();
      else if (I.key === "ArrowLeft")
        N();
      else if (I.key === "f" || I.key === "F")
        A(I);
      else if (I.key === "i" || I.key === "I")
        _((Zl) => !Zl);
      else if (I.key === "t" || I.key === "T")
        ee();
      else if ((I.key === "r" || I.key === "R") && e.viewScope === "trash")
        j();
      else if (I.key === "Delete")
        U();
      else if ((I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z"))
        G();
      else if (ye && !J) {
        const Zl = `viewer.shortcut.${I.key}`, Jl = e.settings[Zl];
        typeof Jl == "string" && Jl && (R(I.key), setTimeout(() => R(null), 500), se(Jl));
      }
    };
    window.addEventListener("keydown", b, { capture: !0 });
    const H = () => {
      const I = !!document.fullscreenElement;
      f(I), _(I ? e.settings["fullscreen.show_details_by_default"] : e.settings["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", H), () => {
      window.removeEventListener("keydown", b, { capture: !0 }), document.removeEventListener("fullscreenchange", H);
    };
  }, [
    l,
    t,
    A,
    F,
    N,
    e.settings,
    U,
    e.activeModal.type,
    G,
    ee,
    j,
    e.viewScope,
    se
  ]), v.useEffect(() => {
    l !== null && r(l).catch((b) => {
      console.error("Failed to fetch full image details for viewer:", b);
    });
  }, [l, r]), v.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (T(!0), ys(l).then((b) => {
      t({ type: "SET_LINEAGE", payload: b });
    }).catch((b) => {
      console.error("Failed to fetch lineage:", b);
    }).finally(() => {
      T(!1);
    }));
  }, [a, l, o.length, t]), v.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), v.useEffect(() => {
    var b, H;
    if (l !== null) {
      if (y) {
        const I = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        I && I.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((b = document.activeElement) == null ? void 0 : b.tagName) === "CANVAS" && document.activeElement.blur(), (H = B.current) == null || H.focus();
    }
  }, [l, y]), v.useEffect(() => {
    if (l === null || g.length === 0) return;
    const b = g.findIndex(
      (W) => W.id === l
    );
    if (b === -1) return;
    const H = (W) => Te(W), I = [
      b + 1,
      b + 2,
      b - 1
    ], J = setTimeout(() => {
      for (const W of I)
        if (W >= 0 && W < g.length) {
          const X = g[W], ge = new Image();
          ge.src = H(X);
        }
    }, 150);
    return () => clearTimeout(J);
  }, [l, g]);
  const He = v.useCallback(
    (b) => {
      const H = e.settings["gallery.lineage_max_depth"];
      if (H === 0) return [];
      if (b.ancestors && b.ancestors.length > 0)
        return b.ancestors.slice(0, H).map((ge) => ({
          id: ge.id,
          imgSrc: Te(ge)
        }));
      const I = b.parent_id;
      if (!I || !b.parent_filename) return [];
      const J = i.find((ge) => ge.id === I);
      let W = null;
      if (J ? W = Te(J) : W = Te({
        filename: b.parent_filename,
        subfolder: b.parent_subfolder || "",
        type: b.parent_type
      }), !W) return [];
      const X = {
        id: I || null,
        imgSrc: W
      };
      if (J && H > 1) {
        const ge = He(J);
        return [X, ...ge].slice(0, H);
      }
      return [X];
    },
    [e.settings, i]
  ), ke = v.useMemo(() => m ? He(m) : [], [m, He]);
  if (!m) return null;
  const Et = Te(m), Mr = u ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return $e.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: B,
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
              className: `meld-viewer-content ${u ? "meld-viewer-content--fullscreen" : ""} ${y ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (b) => b.stopPropagation(),
              children: [
                Mr && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: j,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(ar, { size: 20 })
                    }
                  ),
                  !u && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => w(!y),
                      type: "button",
                      title: y ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(qc, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: ee,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ s.jsx(an, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => _(!x),
                      type: "button",
                      title: x ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(mm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: A,
                      type: "button",
                      title: u ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: u ? /* @__PURE__ */ s.jsx(ym, { size: 20 }) : /* @__PURE__ */ s.jsx(gm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(Le, { size: 20 })
                    }
                  )
                ] }),
                Mr && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: N,
                    type: "button",
                    disabled: c,
                    children: /* @__PURE__ */ s.jsx(Zc, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  c && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(ar, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      src: Et,
                      alt: m.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[u ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${c ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                Mr && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: F,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(Jc, { size: 32 })
                  }
                ),
                x && /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-viewer-details-overlay ${u ? "meld-viewer-details-overlay--fullscreen" : ""} ${Mr ? "" : "meld-viewer-details-overlay--no-icons"}`,
                    children: [
                      (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? `${m.subfolder ? `${m.subfolder}/` : ""}${m.filename}` : m.filename })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_dimensions"] : e.settings["viewer.details.show_dimensions"]) && m.width && m.height && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-value", children: [
                          m.width,
                          " x ",
                          m.height,
                          " px"
                        ] })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_created_at"] : e.settings["viewer.details.show_created_at"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(m.created_at * 1e3).toLocaleString() })
                      ] }),
                      m.deleted_at && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(m.deleted_at * 1e3).toLocaleString() })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_model_name"] : e.settings["viewer.details.show_model_name"]) && m.model_name && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: m.model_name })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_source"] : e.settings["viewer.details.show_source"]) && ke.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: ke.map(
                          (b, H) => b.imgSrc && /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: b.imgSrc,
                              className: "meld-lineage-badge__parent-thumb",
                              style: { cursor: "pointer" },
                              loading: "lazy",
                              onClick: (I) => {
                                I.stopPropagation(), t({
                                  type: "OPEN_VIEWER",
                                  payload: {
                                    id: b.id || m.id,
                                    mode: "lineage"
                                  }
                                });
                              },
                              title: H === 0 ? "Source" : H === 1 ? "Grand-Source" : `Ancestor (S${H + 1})`,
                              alt: "source thumb"
                            },
                            b.id || H
                          )
                        ) }) })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_positive_prompt"] : e.settings["viewer.details.show_positive_prompt"]) && (m.positive_prompt || m.positive) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
                        /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_positive_prompt_lines"] : e.settings["viewer.details.max_positive_prompt_lines"]
                            },
                            children: m.positive_prompt || m.positive
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_negative_prompt"] : e.settings["viewer.details.show_negative_prompt"]) && (m.negative_prompt || m.negative) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
                        /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_negative_prompt_lines"] : e.settings["viewer.details.max_negative_prompt_lines"]
                            },
                            children: m.negative_prompt || m.negative
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_tags"] : e.settings["viewer.details.show_tags"]) && m.tags && m.tags.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: m.tags.map((b) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: b }, b)) })
                      ] })
                    ]
                  }
                ),
                !u && y && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                  S ? /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      style: {
                        padding: "10px",
                        color: "var(--meld-text-secondary)"
                      },
                      children: "Loading lineage..."
                    }
                  ) : D.map(({ img: b }) => /* @__PURE__ */ s.jsx(
                    ad,
                    {
                      thumb: b,
                      viewerImageId: l,
                      currentImage: m,
                      dispatch: t
                    },
                    b.id
                  )),
                  a === "gallery" && e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(ar, { className: "animate-spin", size: 20 }) })
                ] }) }),
                e.settings["viewer.shortcut.show_cheat_sheet"] && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-cheat-sheet", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((b) => {
                  const H = String(b), I = e.settings[`viewer.shortcut.${H}`];
                  return typeof I == "string" && I ? /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-viewer-cheat-sheet__item ${C === H ? "meld-viewer-cheat-sheet__item--active" : ""}`,
                      children: [
                        /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-cheat-sheet__key", children: b }),
                        /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-cheat-sheet__cmd", children: I.replace("tag-toggle:", "+/- ") })
                      ]
                    },
                    b
                  ) : null;
                }) })
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            nd,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: E
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(ld, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(rd, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(id, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            sd,
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
}, Fm = () => {
  const { state: e, dispatch: t } = qe(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Vp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (o) {
      console.error("Failed to cancel scan:", o);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, i = n.progress.phase === "linking", a = i ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ s.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ s.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : i ? /* @__PURE__ */ s.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ s.jsx("span", { children: "Scanning..." }) }),
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
        style: { width: `${a}%` }
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
        children: /* @__PURE__ */ s.jsx(Sm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(cm, { size: 14, className: "meld-success-icon" }),
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
}, Am = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = qe(), [r, l] = v.useState(e.searchQuery), [i, a] = v.useState([]), [o, u] = v.useState(!1), [f, x] = v.useState([]), [_, h] = v.useState(-1), [w, y] = v.useState(!1), [S, T] = v.useState(null), c = v.useRef(null);
  v.useEffect(() => {
    if (S) {
      const m = setTimeout(() => T(null), 3e3);
      return () => clearTimeout(m);
    }
  }, [S]);
  const d = v.useRef(null), p = v.useRef(e.searchQuery), E = r !== p.current;
  v.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      x([]);
      return;
    }
    !r && !e.searchQuery ? Pp().then((m) => {
      x(m);
    }) : x([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), v.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), v.useEffect(() => {
    var m;
    (m = c.current) == null || m.focus();
  }, []);
  const L = v.useCallback(
    (m, D = !0) => {
      p.current !== m && (V.log("SearchBar: triggering search", { query: m }), t({ type: "SET_SEARCH_QUERY", payload: m }), D && u(!1), p.current = m);
    },
    [t]
  );
  v.useEffect(() => {
    const m = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"]) {
        a([]), u(!1);
        return;
      }
      const D = r.split(/\s+/), U = D[D.length - 1];
      if (U) {
        const ee = U.match(
          /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i
        );
        if (ee) {
          const N = ee[1].toLowerCase(), A = ee[2], F = await Lp(A, N);
          a(F), u(F.length > 0), h(-1);
        } else
          a([]), u(!1);
      } else
        a([]), u(!1);
    }, 300);
    return () => clearTimeout(m);
  }, [r, e.settings["search.input_suggest"]]);
  const z = (m) => {
    m.key === "Enter" ? L(r) : m.key === "Tab" ? o && _ >= 0 && (C(i[_]), m.preventDefault()) : m.key === "ArrowDown" ? o && (h((D) => Math.min(D + 1, i.length - 1)), m.preventDefault()) : m.key === "ArrowUp" ? o && (h((D) => Math.max(D - 1, -1)), m.preventDefault()) : m.key === "Escape" && u(!1);
  }, C = (m) => {
    var G;
    const D = r.split(/\s+/), ee = (D.pop() || "").match(/^([-!])/), N = ee ? ee[1] : "", j = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(m.type) ? m.value : `"${m.value}"`, Q = `${[
      ...D,
      `${N}${m.type}:${j}`
    ].join(" ").trim()} `;
    l(Q), a([]), u(!1), (G = c.current) == null || G.focus();
  }, R = () => {
    l(""), L("");
  }, B = async (m, D, U) => {
    m.stopPropagation();
    const ee = `Are you sure you want to delete the favorite "${U}"?`;
    if (window.confirm(ee))
      try {
        await To(D), await n();
      } catch (N) {
        V.error("Failed to delete favorite", N);
      }
  }, $ = async (m, D, U) => {
    m.stopPropagation();
    const ee = window.prompt(
      "Enter a new name for this favorite:",
      U
    );
    if (!(ee === null || ee === U))
      try {
        await Wp(D, ee || U), await n();
      } catch (N) {
        V.error("Failed to rename favorite", N);
      }
  }, k = (m, D) => {
    const N = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(m) ? D : `"${D}"`, A = `${m}:${N}`;
    l(A), L(A);
  }, g = async () => {
    if (!e.searchQuery || w) return;
    if (e.favorites.some(
      (D) => D.query === e.searchQuery
    )) {
      const D = e.favorites.find((U) => U.query === e.searchQuery);
      if (D) {
        y(!0);
        try {
          await To(D.id), await n(), T("Favorite removed.");
        } catch (U) {
          V.error("Failed to delete favorite:", U);
        } finally {
          y(!1);
        }
      }
      return;
    }
    y(!0);
    try {
      await Qp(e.searchQuery, e.searchQuery), await n(), T(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (D) {
      V.error("Failed to save favorite:", D);
    } finally {
      y(!1);
    }
  }, P = (m) => {
    switch (m) {
      case "tag":
        return /* @__PURE__ */ s.jsx(an, { size: 12 });
      case "model":
        return /* @__PURE__ */ s.jsx(om, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ s.jsx(km, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ s.jsx(um, { size: 12 });
      case "has_source":
        return /* @__PURE__ */ s.jsx(Yc, { size: 12 });
      case "has_derivatives":
        return /* @__PURE__ */ s.jsx(Kc, { size: 12 });
      case "sort":
        return /* @__PURE__ */ s.jsx(am, { size: 12 });
      default:
        return null;
    }
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
                    border: "1px solid var(--comfy-menu-border, #444)",
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
                        onClick: () => L(r),
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
                        onMouseEnter: (m) => {
                          m.currentTarget.style.transform = "translateY(-1px)", E ? (m.currentTarget.style.filter = "brightness(1.15)", m.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : m.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (m) => {
                          m.currentTarget.style.transform = "none", E ? (m.currentTarget.style.filter = "none", m.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : m.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (m) => {
                          m.currentTarget.style.transform = "translateY(1px)", m.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (m) => {
                          m.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            bn,
                            {
                              size: 16,
                              color: E ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: E ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          E && /* @__PURE__ */ s.jsx(
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
                        ref: c,
                        type: "text",
                        value: r,
                        onChange: (m) => {
                          const D = m.target.value;
                          l(D), D || L("");
                        },
                        onKeyDown: z,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const m = r.split(/\s+/), D = m[m.length - 1];
                          D != null && D.match(
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
                    e.searchQuery && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: g,
                        disabled: w,
                        title: e.favorites.some((m) => m.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          Lo,
                          {
                            size: 16,
                            color: e.favorites.some((m) => m.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((m) => m.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: R,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ s.jsx(Le, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              o && i.length > 0 && /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: d,
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
                  children: i.map((m, D) => /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      onMouseDown: (U) => {
                        U.preventDefault(), C(m);
                      },
                      onMouseEnter: () => h(D),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: D === _ ? "var(--comfy-menu-bg, #333)" : "transparent",
                        borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
                      },
                      children: /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-secondary)",
                                  display: "flex"
                                },
                                children: P(m.type)
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--comfy-input-text-active, #3b82f6)",
                                  fontSize: "11px",
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  width: "45px"
                                },
                                children: m.type
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                style: {
                                  color: m.value === it ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                                  fontSize: "14px",
                                  fontWeight: m.value === it ? "bold" : "normal"
                                },
                                children: m.value === it ? m.type === "tag" ? `Untagged (${it})` : `No ${m.type} (${it})` : m.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${m.type}:${m.value}`
                  ))
                }
              )
            ]
          }
        ),
        !r && !e.searchQuery && f.length > 0 && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "meld-search-quick-suggestions",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: f.map((m) => /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                onClick: () => k(m.type, m.value),
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
                onMouseEnter: (D) => {
                  D.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", D.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", D.currentTarget.style.color = "var(--meld-text-color)";
                },
                onMouseLeave: (D) => {
                  D.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", D.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", D.currentTarget.style.color = "var(--meld-text-color)";
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: P(m.type)
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
                      children: m.type
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      style: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: m.value
                    }
                  )
                ]
              },
              `${m.type}:${m.value}`
            ))
          }
        ),
        !r && e.favorites.length > 0 && /* @__PURE__ */ s.jsxs(
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
                    /* @__PURE__ */ s.jsx(Lo, { size: 12, fill: "var(--meld-text-secondary)" }),
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
                  children: e.favorites.map((m) => /* @__PURE__ */ s.jsxs(
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
                        l(m.query), L(m.query);
                      },
                      onMouseEnter: (D) => {
                        D.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", D.currentTarget.style.borderColor = "var(--meld-accent-color)", D.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (D) => {
                        D.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", D.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", D.currentTarget.style.color = "var(--meld-text-color)";
                      },
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
                                  children: m.name
                                }
                              ),
                              m.name !== m.query && /* @__PURE__ */ s.jsx(
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
                                  children: m.query
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
                                  onClick: (D) => {
                                    D.stopPropagation(), $(D, m.id, m.name);
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
                                  onMouseEnter: (D) => {
                                    D.currentTarget.style.color = "var(--meld-accent-color)", D.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (D) => {
                                    D.currentTarget.style.color = "var(--meld-text-secondary)", D.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ s.jsx(ed, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ s.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (D) => {
                                    D.stopPropagation(), B(D, m.id, m.name);
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
                                  onMouseEnter: (D) => {
                                    D.currentTarget.style.color = "var(--meld-danger-color)", D.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (D) => {
                                    D.currentTarget.style.color = "var(--meld-text-secondary)", D.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ s.jsx(zn, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    m.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, $m = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = v.useState([]), [l, i] = v.useState(!0), [a, o] = v.useState(""), [u, f] = v.useState(""), [x, _] = v.useState(!1), [h, w] = v.useState(null), [y, S] = v.useState(""), [T, c] = v.useState(!1), d = v.useRef(null), p = v.useCallback(async () => {
    i(!0);
    try {
      const k = await ha();
      r(k);
    } catch (k) {
      console.error("Failed to fetch tags:", k);
    } finally {
      i(!1);
    }
  }, []);
  v.useEffect(() => {
    p();
  }, [p]), v.useEffect(() => {
    h !== null && d.current && (d.current.focus(), d.current.select());
  }, [h]);
  const E = async (k) => {
    k.preventDefault();
    const g = u.trim();
    if (!(!g || x)) {
      if (g.toLowerCase() === it) {
        alert(
          `Tag name '${it}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((P) => P.name.toLowerCase() === g.toLowerCase())) {
        alert(`Tag "${g}" already exists.`);
        return;
      }
      _(!0);
      try {
        await Gp(g), f(""), await p();
      } catch (P) {
        console.error("Failed to add tag:", P);
      } finally {
        _(!1);
      }
    }
  }, L = async (k, g) => {
    if (confirm(`Are you sure you want to delete tag "${g}"?`))
      try {
        await Hp(k), await p();
      } catch (P) {
        console.error("Failed to delete tag:", P);
      }
  }, z = (k) => {
    w(k.id), S(k.name);
  }, C = () => {
    w(null), S("");
  }, R = async (k) => {
    k.preventDefault();
    const g = y.trim();
    if (!g || h === null || T) return;
    if (g.toLowerCase() === it) {
      alert(
        `Tag name '${it}' is reserved for search and cannot be used.`
      );
      return;
    }
    const P = n.find((m) => m.id === h);
    if (P && P.name === g) {
      C();
      return;
    }
    if (n.some(
      (m) => m.id !== h && m.name.toLowerCase() === g.toLowerCase()
    )) {
      alert(`Tag "${g}" already exists.`);
      return;
    }
    c(!0);
    try {
      await Bp(h, g), C(), await p();
    } catch (m) {
      console.error("Failed to rename tag:", m), alert(m instanceof Error ? m.message : "Failed to rename tag");
    } finally {
      c(!1);
    }
  }, B = (k) => {
    t(`tag:${k}`);
  }, $ = v.useMemo(() => n.filter(
    (k) => k.name.toLowerCase().includes(a.toLowerCase())
  ), [n, a]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(an, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(Le, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: E, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (k) => f(k.target.value),
            disabled: x
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || x,
            children: [
              /* @__PURE__ */ s.jsx(ga, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(bn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
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
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: $.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : $.map((k) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: h === k.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: R,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: d,
                className: "meld-tag-rename-input",
                value: y,
                onChange: (g) => S(g.target.value),
                onKeyDown: (g) => g.key === "Escape" && C()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: T || !y.trim(),
                children: /* @__PURE__ */ s.jsx(Xc, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: C,
                disabled: T,
                children: /* @__PURE__ */ s.jsx(Le, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: k.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => B(k.name),
              children: /* @__PURE__ */ s.jsx(bn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => z(k),
              children: /* @__PURE__ */ s.jsx(ed, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => L(k.id, k.name),
              children: /* @__PURE__ */ s.jsx(zn, { size: 14 })
            }
          )
        ] })
      ] }) }, k.id)) })
    ] })
  ] });
}, Vm = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: i,
    lastSearchQuery: a,
    setLastSearchQuery: o,
    localLimit: u,
    displayedImages: f,
    visibleImages: x,
    isSearchActive: _,
    loadMoreRef: h
  } = Pm();
  return V.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: f.length,
    visibleCount: x.length,
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
              /* @__PURE__ */ s.jsx(zn, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (w) => r("gallery.trash.show_missing", w.target.checked)
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
                  /* @__PURE__ */ s.jsx(Le, { size: 14 }),
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
                  l === "search" ? (o(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), i("gallery")) : (!e.searchQuery && a && t({
                    type: "SET_SEARCH_QUERY",
                    payload: a
                  }), i("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: _ ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: _ ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(bn, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const y = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", y);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(hm, { size: 14 }) : /* @__PURE__ */ s.jsx(qc, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
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
                children: /* @__PURE__ */ s.jsx(an, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(fm, { size: 14 })
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
                  ar,
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
                children: /* @__PURE__ */ s.jsx(_m, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(Am, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(Fm, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ s.jsx(
          $m,
          {
            onClose: () => i("gallery"),
            onSearch: (w) => {
              t({ type: "SET_SEARCH_QUERY", payload: w }), i("search");
            }
          }
        ) : e.isLoading && f.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : x.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              children: x.map((w) => /* @__PURE__ */ s.jsx("div", { "data-image-id": w.id, children: /* @__PURE__ */ s.jsx(Dm, { height: 150, children: /* @__PURE__ */ s.jsx(zm, { image: w }) }) }, w.id))
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: h,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                u >= f.length && !e.pagination.hasMore && x.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(Rm, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(Om, {}),
        /* @__PURE__ */ s.jsx(bm, {})
      ]
    }
  );
};
Po.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, i;
      const n = (l = e.widgets) == null ? void 0 : l.find((a) => a.name === "positive"), r = (i = e.widgets) == null ? void 0 : i.find((a) => a.name === "negative");
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
let Yr = null, tt = null;
Po.registerExtension({
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
      const n = await Wc();
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
      }, Y.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), Y.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), Y.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), V.log("Import completed.");
      }), Y.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Gc({
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
              galleryRoot: Yr,
              galleryContainer: tt
            }), tt || (V.log("galleryContainer not found, creating new one"), tt = document.createElement("div"), tt.id = "meld-gallery-container", tt.style.height = "100%", tt.style.width = "100%", tt.style.display = "flex", tt.style.flexDirection = "column"), n.contains(tt) || (V.log("Appending galleryContainer to el"), n.appendChild(tt)), Yr ? V.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (V.log("Creating new gallery root"), Yr = Qc(tt), Yr.render(
              _a.createElement(
                Lm,
                null,
                _a.createElement(Vm)
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
