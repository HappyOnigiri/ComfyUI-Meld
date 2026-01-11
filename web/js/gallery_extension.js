import { api as Pt } from "../../../scripts/api.js";
import { app as dc } from "../../../scripts/app.js";
function pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ji = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn = Symbol.for("react.element"), mc = Symbol.for("react.portal"), hc = Symbol.for("react.fragment"), vc = Symbol.for("react.strict_mode"), yc = Symbol.for("react.profiler"), gc = Symbol.for("react.provider"), wc = Symbol.for("react.context"), kc = Symbol.for("react.forward_ref"), Sc = Symbol.for("react.suspense"), Ec = Symbol.for("react.memo"), xc = Symbol.for("react.lazy"), Vo = Symbol.iterator;
function _c(e) {
  return e === null || typeof e != "object" ? null : (e = Vo && e[Vo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qi = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, bi = Object.assign, es = {};
function sn(e, t, n) {
  this.props = e, this.context = t, this.refs = es, this.updater = n || qi;
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
sn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ts() {
}
ts.prototype = sn.prototype;
function Wu(e, t, n) {
  this.props = e, this.context = t, this.refs = es, this.updater = n || qi;
}
var Qu = Wu.prototype = new ts();
Qu.constructor = Wu;
bi(Qu, sn.prototype);
Qu.isPureReactComponent = !0;
var Bo = Array.isArray, ns = Object.prototype.hasOwnProperty, Ku = { current: null }, rs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, t, n) {
  var r, l = {}, u = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (u = "" + t.key), t) ns.call(t, r) && !rs.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: Jn, type: e, key: u, ref: o, props: l, _owner: Ku.current };
}
function Cc(e, t) {
  return { $$typeof: Jn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Gu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jn;
}
function Nc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ho = /\/+/g;
function Nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Nc("" + e.key) : t.toString(36);
}
function xr(e, t, n, r, l) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (u) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Jn:
        case mc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Nl(o, 0) : r, Bo(l) ? (n = "", e != null && (n = e.replace(Ho, "$&/") + "/"), xr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Gu(l) && (l = Cc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ho, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Bo(e)) for (var i = 0; i < e.length; i++) {
    u = e[i];
    var s = r + Nl(u, i);
    o += xr(u, t, n, s, l);
  }
  else if (s = _c(e), typeof s == "function") for (e = s.call(e), i = 0; !(u = e.next()).done; ) u = u.value, s = r + Nl(u, i++), o += xr(u, t, n, s, l);
  else if (u === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ur(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return xr(e, r, "", "", function(u) {
    return t.call(n, u, l++);
  }), r;
}
function Pc(e) {
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
var ie = { current: null }, _r = { transition: null }, Lc = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: _r, ReactCurrentOwner: Ku };
function us() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = { map: ur, forEach: function(e, t, n) {
  ur(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ur(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ur(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Gu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = sn;
T.Fragment = hc;
T.Profiler = yc;
T.PureComponent = Wu;
T.StrictMode = vc;
T.Suspense = Sc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lc;
T.act = us;
T.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = bi({}, e.props), l = e.key, u = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (u = t.ref, o = Ku.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (s in t) ns.call(t, s) && !rs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: Jn, type: e.type, key: l, ref: u, props: r, _owner: o };
};
T.createContext = function(e) {
  return e = { $$typeof: wc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: gc, _context: e }, e.Consumer = e;
};
T.createElement = ls;
T.createFactory = function(e) {
  var t = ls.bind(null, e);
  return t.type = e, t;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: kc, render: e };
};
T.isValidElement = Gu;
T.lazy = function(e) {
  return { $$typeof: xc, _payload: { _status: -1, _result: e }, _init: Pc };
};
T.memo = function(e, t) {
  return { $$typeof: Ec, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function(e) {
  var t = _r.transition;
  _r.transition = {};
  try {
    e();
  } finally {
    _r.transition = t;
  }
};
T.unstable_act = us;
T.useCallback = function(e, t) {
  return ie.current.useCallback(e, t);
};
T.useContext = function(e) {
  return ie.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return ie.current.useDeferredValue(e);
};
T.useEffect = function(e, t) {
  return ie.current.useEffect(e, t);
};
T.useId = function() {
  return ie.current.useId();
};
T.useImperativeHandle = function(e, t, n) {
  return ie.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function(e, t) {
  return ie.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function(e, t) {
  return ie.current.useLayoutEffect(e, t);
};
T.useMemo = function(e, t) {
  return ie.current.useMemo(e, t);
};
T.useReducer = function(e, t, n) {
  return ie.current.useReducer(e, t, n);
};
T.useRef = function(e) {
  return ie.current.useRef(e);
};
T.useState = function(e) {
  return ie.current.useState(e);
};
T.useSyncExternalStore = function(e, t, n) {
  return ie.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function() {
  return ie.current.useTransition();
};
T.version = "18.3.1";
Ji.exports = T;
var he = Ji.exports;
const Wo = /* @__PURE__ */ pc(he);
var os = { exports: {} }, we = {}, is = { exports: {} }, ss = {};
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
  function t(x, P) {
    var L = x.length;
    x.push(P);
    e: for (; 0 < L; ) {
      var W = L - 1 >>> 1, Y = x[W];
      if (0 < l(Y, P)) x[W] = P, x[L] = Y, L = W;
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var P = x[0], L = x.pop();
    if (L !== P) {
      x[0] = L;
      e: for (var W = 0, Y = x.length, rr = Y >>> 1; W < rr; ) {
        var gt = 2 * (W + 1) - 1, Cl = x[gt], wt = gt + 1, lr = x[wt];
        if (0 > l(Cl, L)) wt < Y && 0 > l(lr, Cl) ? (x[W] = lr, x[wt] = L, W = wt) : (x[W] = Cl, x[gt] = L, W = gt);
        else if (wt < Y && 0 > l(lr, L)) x[W] = lr, x[wt] = L, W = wt;
        else break e;
      }
    }
    return P;
  }
  function l(x, P) {
    var L = x.sortIndex - P.sortIndex;
    return L !== 0 ? L : x.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var u = performance;
    e.unstable_now = function() {
      return u.now();
    };
  } else {
    var o = Date, i = o.now();
    e.unstable_now = function() {
      return o.now() - i;
    };
  }
  var s = [], c = [], h = 1, m = null, p = 3, g = !1, w = !1, k = !1, F = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= x) r(c), P.sortIndex = P.expirationTime, t(s, P);
      else break;
      P = n(c);
    }
  }
  function v(x) {
    if (k = !1, d(x), !w) if (n(s) !== null) w = !0, xl(E);
    else {
      var P = n(c);
      P !== null && _l(v, P.startTime - x);
    }
  }
  function E(x, P) {
    w = !1, k && (k = !1, f(N), N = -1), g = !0;
    var L = p;
    try {
      for (d(P), m = n(s); m !== null && (!(m.expirationTime > P) || x && !Pe()); ) {
        var W = m.callback;
        if (typeof W == "function") {
          m.callback = null, p = m.priorityLevel;
          var Y = W(m.expirationTime <= P);
          P = e.unstable_now(), typeof Y == "function" ? m.callback = Y : m === n(s) && r(s), d(P);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var rr = !0;
      else {
        var gt = n(c);
        gt !== null && _l(v, gt.startTime - P), rr = !1;
      }
      return rr;
    } finally {
      m = null, p = L, g = !1;
    }
  }
  var _ = !1, C = null, N = -1, H = 5, R = -1;
  function Pe() {
    return !(e.unstable_now() - R < H);
  }
  function fn() {
    if (C !== null) {
      var x = e.unstable_now();
      R = x;
      var P = !0;
      try {
        P = C(!0, x);
      } finally {
        P ? dn() : (_ = !1, C = null);
      }
    } else _ = !1;
  }
  var dn;
  if (typeof a == "function") dn = function() {
    a(fn);
  };
  else if (typeof MessageChannel < "u") {
    var $o = new MessageChannel(), fc = $o.port2;
    $o.port1.onmessage = fn, dn = function() {
      fc.postMessage(null);
    };
  } else dn = function() {
    F(fn, 0);
  };
  function xl(x) {
    C = x, _ || (_ = !0, dn());
  }
  function _l(x, P) {
    N = F(function() {
      x(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, xl(E));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < x ? Math.floor(1e3 / x) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(x) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = p;
    }
    var L = p;
    p = P;
    try {
      return x();
    } finally {
      p = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(x, P) {
    switch (x) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        x = 3;
    }
    var L = p;
    p = x;
    try {
      return P();
    } finally {
      p = L;
    }
  }, e.unstable_scheduleCallback = function(x, P, L) {
    var W = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? W + L : W) : L = W, x) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = L + Y, x = { id: h++, callback: P, priorityLevel: x, startTime: L, expirationTime: Y, sortIndex: -1 }, L > W ? (x.sortIndex = L, t(c, x), n(s) === null && x === n(c) && (k ? (f(N), N = -1) : k = !0, _l(v, L - W))) : (x.sortIndex = Y, t(s, x), w || g || (w = !0, xl(E))), x;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(x) {
    var P = p;
    return function() {
      var L = p;
      p = P;
      try {
        return x.apply(this, arguments);
      } finally {
        p = L;
      }
    };
  };
})(ss);
is.exports = ss;
var zc = is.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc = he, ge = zc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var as = /* @__PURE__ */ new Set(), jn = {};
function It(e, t) {
  en(e, t), en(e + "Capture", t);
}
function en(e, t) {
  for (jn[e] = t, e = 0; e < t.length; e++) as.add(t[e]);
}
var Ge = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ql = Object.prototype.hasOwnProperty, Rc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Qo = {}, Ko = {};
function Mc(e) {
  return ql.call(Ko, e) ? !0 : ql.call(Qo, e) ? !1 : Rc.test(e) ? Ko[e] = !0 : (Qo[e] = !0, !1);
}
function Ic(e, t, n, r) {
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
function jc(e, t, n, r) {
  if (t === null || typeof t > "u" || Ic(e, t, n, r)) return !0;
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
function se(e, t, n, r, l, u, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = o;
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ee[e] = new se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xu = /[\-:]([a-z])/g;
function Yu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Xu,
    Yu
  );
  ee[t] = new se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Xu, Yu);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Xu, Yu);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zu(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jc(t, n, l, r) && (n = null), r || l === null ? Mc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, or = Symbol.for("react.element"), Dt = Symbol.for("react.portal"), Ft = Symbol.for("react.fragment"), Ju = Symbol.for("react.strict_mode"), bl = Symbol.for("react.profiler"), cs = Symbol.for("react.provider"), fs = Symbol.for("react.context"), qu = Symbol.for("react.forward_ref"), eu = Symbol.for("react.suspense"), tu = Symbol.for("react.suspense_list"), bu = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), ds = Symbol.for("react.offscreen"), Go = Symbol.iterator;
function pn(e) {
  return e === null || typeof e != "object" ? null : (e = Go && e[Go] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, Pl;
function Sn(e) {
  if (Pl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Pl = t && t[1] || "";
  }
  return `
` + Pl + e;
}
var Ll = !1;
function zl(e, t) {
  if (!e || Ll) return "";
  Ll = !0;
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
`), u = r.stack.split(`
`), o = l.length - 1, i = u.length - 1; 1 <= o && 0 <= i && l[o] !== u[i]; ) i--;
      for (; 1 <= o && 0 <= i; o--, i--) if (l[o] !== u[i]) {
        if (o !== 1 || i !== 1)
          do
            if (o--, i--, 0 > i || l[o] !== u[i]) {
              var s = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= o && 0 <= i);
        break;
      }
    }
  } finally {
    Ll = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Sn(e) : "";
}
function Oc(e) {
  switch (e.tag) {
    case 5:
      return Sn(e.type);
    case 16:
      return Sn("Lazy");
    case 13:
      return Sn("Suspense");
    case 19:
      return Sn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = zl(e.type, !1), e;
    case 11:
      return e = zl(e.type.render, !1), e;
    case 1:
      return e = zl(e.type, !0), e;
    default:
      return "";
  }
}
function nu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ft:
      return "Fragment";
    case Dt:
      return "Portal";
    case bl:
      return "Profiler";
    case Ju:
      return "StrictMode";
    case eu:
      return "Suspense";
    case tu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case fs:
      return (e.displayName || "Context") + ".Consumer";
    case cs:
      return (e._context.displayName || "Context") + ".Provider";
    case qu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case bu:
      return t = e.displayName || null, t !== null ? t : nu(e.type) || "Memo";
    case be:
      t = e._payload, e = e._init;
      try {
        return nu(e(t));
      } catch {
      }
  }
  return null;
}
function Dc(e) {
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
      return nu(t);
    case 8:
      return t === Ju ? "StrictMode" : "Mode";
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
function pt(e) {
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
function ps(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Fc(e) {
  var t = ps(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, u = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, u.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = Fc(e));
}
function ms(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ps(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Or(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ru(e, t) {
  var n = t.checked;
  return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Xo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = pt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function hs(e, t) {
  t = t.checked, t != null && Zu(e, "checked", t, !1);
}
function lu(e, t) {
  hs(e, t);
  var n = pt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? uu(e, t.type, n) : t.hasOwnProperty("defaultValue") && uu(e, t.type, pt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Yo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function uu(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var En = Array.isArray;
function Xt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ou(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Zo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(y(92));
      if (En(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: pt(n) };
}
function vs(e, t) {
  var n = pt(t.value), r = pt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Jo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ys(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function iu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ys(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var sr, gs = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (sr = sr || document.createElement("div"), sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function On(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cn = {
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
}, Uc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cn).forEach(function(e) {
  Uc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Cn[t] = Cn[e];
  });
});
function ws(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Cn.hasOwnProperty(e) && Cn[e] ? ("" + t).trim() : t + "px";
}
function ks(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = ws(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Ac = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function su(e, t) {
  if (t) {
    if (Ac[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function au(e, t) {
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
var cu = null;
function eo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fu = null, Yt = null, Zt = null;
function qo(e) {
  if (e = er(e)) {
    if (typeof fu != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = cl(t), fu(e.stateNode, e.type, t));
  }
}
function Ss(e) {
  Yt ? Zt ? Zt.push(e) : Zt = [e] : Yt = e;
}
function Es() {
  if (Yt) {
    var e = Yt, t = Zt;
    if (Zt = Yt = null, qo(e), t) for (e = 0; e < t.length; e++) qo(t[e]);
  }
}
function xs(e, t) {
  return e(t);
}
function _s() {
}
var Tl = !1;
function Cs(e, t, n) {
  if (Tl) return e(t, n);
  Tl = !0;
  try {
    return xs(e, t, n);
  } finally {
    Tl = !1, (Yt !== null || Zt !== null) && (_s(), Es());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cl(n);
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
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var du = !1;
if (Ge) try {
  var mn = {};
  Object.defineProperty(mn, "passive", { get: function() {
    du = !0;
  } }), window.addEventListener("test", mn, mn), window.removeEventListener("test", mn, mn);
} catch {
  du = !1;
}
function $c(e, t, n, r, l, u, o, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Nn = !1, Dr = null, Fr = !1, pu = null, Vc = { onError: function(e) {
  Nn = !0, Dr = e;
} };
function Bc(e, t, n, r, l, u, o, i, s) {
  Nn = !1, Dr = null, $c.apply(Vc, arguments);
}
function Hc(e, t, n, r, l, u, o, i, s) {
  if (Bc.apply(this, arguments), Nn) {
    if (Nn) {
      var c = Dr;
      Nn = !1, Dr = null;
    } else throw Error(y(198));
    Fr || (Fr = !0, pu = c);
  }
}
function jt(e) {
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
function Ns(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function bo(e) {
  if (jt(e) !== e) throw Error(y(188));
}
function Wc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = jt(e), t === null) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var u = l.alternate;
    if (u === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === u.child) {
      for (u = l.child; u; ) {
        if (u === n) return bo(l), e;
        if (u === r) return bo(l), t;
        u = u.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) n = l, r = u;
    else {
      for (var o = !1, i = l.child; i; ) {
        if (i === n) {
          o = !0, n = l, r = u;
          break;
        }
        if (i === r) {
          o = !0, r = l, n = u;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = u.child; i; ) {
          if (i === n) {
            o = !0, n = u, r = l;
            break;
          }
          if (i === r) {
            o = !0, r = u, n = l;
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ps(e) {
  return e = Wc(e), e !== null ? Ls(e) : null;
}
function Ls(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ls(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zs = ge.unstable_scheduleCallback, ei = ge.unstable_cancelCallback, Qc = ge.unstable_shouldYield, Kc = ge.unstable_requestPaint, Q = ge.unstable_now, Gc = ge.unstable_getCurrentPriorityLevel, to = ge.unstable_ImmediatePriority, Ts = ge.unstable_UserBlockingPriority, Ur = ge.unstable_NormalPriority, Xc = ge.unstable_LowPriority, Rs = ge.unstable_IdlePriority, ol = null, Ae = null;
function Yc(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function") try {
    Ae.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ie = Math.clz32 ? Math.clz32 : qc, Zc = Math.log, Jc = Math.LN2;
function qc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Zc(e) / Jc | 0) | 0;
}
var ar = 64, cr = 4194304;
function xn(e) {
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
function Ar(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = xn(i) : (u &= o, u !== 0 && (r = xn(u)));
  } else o = n & ~l, o !== 0 ? r = xn(o) : u !== 0 && (r = xn(u));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ie(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function bc(e, t) {
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
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
    var o = 31 - Ie(u), i = 1 << o, s = l[o];
    s === -1 ? (!(i & n) || i & r) && (l[o] = bc(i, t)) : s <= t && (e.expiredLanes |= i), u &= ~i;
  }
}
function mu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ms() {
  var e = ar;
  return ar <<= 1, !(ar & 4194240) && (ar = 64), e;
}
function Rl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qn(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ie(t), e[t] = n;
}
function tf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n), u = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
  }
}
function no(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var I = 0;
function Is(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var js, ro, Os, Ds, Fs, hu = !1, fr = [], ut = null, ot = null, it = null, Fn = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map(), tt = [], nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ti(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      Fn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Un.delete(t.pointerId);
  }
}
function hn(e, t, n, r, l, u) {
  return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = er(t), t !== null && ro(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function rf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ut = hn(ut, e, t, n, r, l), !0;
    case "dragenter":
      return ot = hn(ot, e, t, n, r, l), !0;
    case "mouseover":
      return it = hn(it, e, t, n, r, l), !0;
    case "pointerover":
      var u = l.pointerId;
      return Fn.set(u, hn(Fn.get(u) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return u = l.pointerId, Un.set(u, hn(Un.get(u) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Us(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = jt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ns(n), t !== null) {
          e.blockedOn = t, Fs(e.priority, function() {
            Os(n);
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
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      cu = r, n.target.dispatchEvent(r), cu = null;
    } else return t = er(n), t !== null && ro(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ni(e, t, n) {
  Cr(e) && n.delete(t);
}
function lf() {
  hu = !1, ut !== null && Cr(ut) && (ut = null), ot !== null && Cr(ot) && (ot = null), it !== null && Cr(it) && (it = null), Fn.forEach(ni), Un.forEach(ni);
}
function vn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, hu || (hu = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, lf)));
}
function An(e) {
  function t(l) {
    return vn(l, e);
  }
  if (0 < fr.length) {
    vn(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var r = fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ut !== null && vn(ut, e), ot !== null && vn(ot, e), it !== null && vn(it, e), Fn.forEach(t), Un.forEach(t), n = 0; n < tt.length; n++) r = tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && (n = tt[0], n.blockedOn === null); ) Us(n), n.blockedOn === null && tt.shift();
}
var Jt = Je.ReactCurrentBatchConfig, $r = !0;
function uf(e, t, n, r) {
  var l = I, u = Jt.transition;
  Jt.transition = null;
  try {
    I = 1, lo(e, t, n, r);
  } finally {
    I = l, Jt.transition = u;
  }
}
function of(e, t, n, r) {
  var l = I, u = Jt.transition;
  Jt.transition = null;
  try {
    I = 4, lo(e, t, n, r);
  } finally {
    I = l, Jt.transition = u;
  }
}
function lo(e, t, n, r) {
  if ($r) {
    var l = vu(e, t, n, r);
    if (l === null) Vl(e, t, r, Vr, n), ti(e, r);
    else if (rf(l, e, t, n, r)) r.stopPropagation();
    else if (ti(e, r), t & 4 && -1 < nf.indexOf(e)) {
      for (; l !== null; ) {
        var u = er(l);
        if (u !== null && js(u), u = vu(e, t, n, r), u === null && Vl(e, t, r, Vr, n), u === l) break;
        l = u;
      }
      l !== null && r.stopPropagation();
    } else Vl(e, t, r, null, n);
  }
}
var Vr = null;
function vu(e, t, n, r) {
  if (Vr = null, e = eo(r), e = Et(e), e !== null) if (t = jt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ns(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Vr = e, null;
}
function As(e) {
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
      switch (Gc()) {
        case to:
          return 1;
        case Ts:
          return 4;
        case Ur:
        case Xc:
          return 16;
        case Rs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null, uo = null, Nr = null;
function $s() {
  if (Nr) return Nr;
  var e, t = uo, n = t.length, r, l = "value" in rt ? rt.value : rt.textContent, u = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[u - r]; r++) ;
  return Nr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Pr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function dr() {
  return !0;
}
function ri() {
  return !1;
}
function ke(e) {
  function t(n, r, l, u, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(u) : u[i]);
    return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? dr : ri, this.isPropagationStopped = ri, this;
  }
  return V(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = dr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = dr);
  }, persist: function() {
  }, isPersistent: dr }), t;
}
var an = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, oo = ke(an), bn = V({}, an, { view: 0, detail: 0 }), sf = ke(bn), Ml, Il, yn, il = V({}, bn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: io, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== yn && (yn && e.type === "mousemove" ? (Ml = e.screenX - yn.screenX, Il = e.screenY - yn.screenY) : Il = Ml = 0, yn = e), Ml);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Il;
} }), li = ke(il), af = V({}, il, { dataTransfer: 0 }), cf = ke(af), ff = V({}, bn, { relatedTarget: 0 }), jl = ke(ff), df = V({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pf = ke(df), mf = V({}, an, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), hf = ke(mf), vf = V({}, an, { data: 0 }), ui = ke(vf), yf = {
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
}, gf = {
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
function kf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wf[e]) ? !!t[e] : !1;
}
function io() {
  return kf;
}
var Sf = V({}, bn, { key: function(e) {
  if (e.key) {
    var t = yf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Pr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: io, charCode: function(e) {
  return e.type === "keypress" ? Pr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ef = ke(Sf), xf = V({}, il, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), oi = ke(xf), _f = V({}, bn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: io }), Cf = ke(_f), Nf = V({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pf = ke(Nf), Lf = V({}, il, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), zf = ke(Lf), Tf = [9, 13, 27, 32], so = Ge && "CompositionEvent" in window, Pn = null;
Ge && "documentMode" in document && (Pn = document.documentMode);
var Rf = Ge && "TextEvent" in window && !Pn, Vs = Ge && (!so || Pn && 8 < Pn && 11 >= Pn), ii = " ", si = !1;
function Bs(e, t) {
  switch (e) {
    case "keyup":
      return Tf.indexOf(t.keyCode) !== -1;
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
function Hs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ut = !1;
function Mf(e, t) {
  switch (e) {
    case "compositionend":
      return Hs(t);
    case "keypress":
      return t.which !== 32 ? null : (si = !0, ii);
    case "textInput":
      return e = t.data, e === ii && si ? null : e;
    default:
      return null;
  }
}
function If(e, t) {
  if (Ut) return e === "compositionend" || !so && Bs(e, t) ? (e = $s(), Nr = uo = rt = null, Ut = !1, e) : null;
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
      return Vs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ai(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jf[e.type] : t === "textarea";
}
function Ws(e, t, n, r) {
  Ss(r), t = Br(t, "onChange"), 0 < t.length && (n = new oo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ln = null, $n = null;
function Of(e) {
  ta(e, 0);
}
function sl(e) {
  var t = Vt(e);
  if (ms(t)) return e;
}
function Df(e, t) {
  if (e === "change") return t;
}
var Qs = !1;
if (Ge) {
  var Ol;
  if (Ge) {
    var Dl = "oninput" in document;
    if (!Dl) {
      var ci = document.createElement("div");
      ci.setAttribute("oninput", "return;"), Dl = typeof ci.oninput == "function";
    }
    Ol = Dl;
  } else Ol = !1;
  Qs = Ol && (!document.documentMode || 9 < document.documentMode);
}
function fi() {
  Ln && (Ln.detachEvent("onpropertychange", Ks), $n = Ln = null);
}
function Ks(e) {
  if (e.propertyName === "value" && sl($n)) {
    var t = [];
    Ws(t, $n, e, eo(e)), Cs(Of, t);
  }
}
function Ff(e, t, n) {
  e === "focusin" ? (fi(), Ln = t, $n = n, Ln.attachEvent("onpropertychange", Ks)) : e === "focusout" && fi();
}
function Uf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return sl($n);
}
function Af(e, t) {
  if (e === "click") return sl(t);
}
function $f(e, t) {
  if (e === "input" || e === "change") return sl(t);
}
function Vf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Oe = typeof Object.is == "function" ? Object.is : Vf;
function Vn(e, t) {
  if (Oe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ql.call(t, l) || !Oe(e[l], t[l])) return !1;
  }
  return !0;
}
function di(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pi(e, t) {
  var n = di(e);
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
    n = di(n);
  }
}
function Gs(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Xs() {
  for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Or(e.document);
  }
  return t;
}
function ao(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Bf(e) {
  var t = Xs(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Gs(n.ownerDocument.documentElement, n)) {
    if (r !== null && ao(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, u = Math.min(r.start, l);
        r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = pi(n, u);
        var o = pi(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Hf = Ge && "documentMode" in document && 11 >= document.documentMode, At = null, yu = null, zn = null, gu = !1;
function mi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  gu || At == null || At !== Or(r) || (r = At, "selectionStart" in r && ao(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), zn && Vn(zn, r) || (zn = r, r = Br(yu, "onSelect"), 0 < r.length && (t = new oo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = At)));
}
function pr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var $t = { animationend: pr("Animation", "AnimationEnd"), animationiteration: pr("Animation", "AnimationIteration"), animationstart: pr("Animation", "AnimationStart"), transitionend: pr("Transition", "TransitionEnd") }, Fl = {}, Ys = {};
Ge && (Ys = document.createElement("div").style, "AnimationEvent" in window || (delete $t.animationend.animation, delete $t.animationiteration.animation, delete $t.animationstart.animation), "TransitionEvent" in window || delete $t.transitionend.transition);
function al(e) {
  if (Fl[e]) return Fl[e];
  if (!$t[e]) return e;
  var t = $t[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ys) return Fl[e] = t[n];
  return e;
}
var Zs = al("animationend"), Js = al("animationiteration"), qs = al("animationstart"), bs = al("transitionend"), ea = /* @__PURE__ */ new Map(), hi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ht(e, t) {
  ea.set(e, t), It(t, [e]);
}
for (var Ul = 0; Ul < hi.length; Ul++) {
  var Al = hi[Ul], Wf = Al.toLowerCase(), Qf = Al[0].toUpperCase() + Al.slice(1);
  ht(Wf, "on" + Qf);
}
ht(Zs, "onAnimationEnd");
ht(Js, "onAnimationIteration");
ht(qs, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(bs, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
It("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
It("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var _n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kf = new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));
function vi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Hc(r, t, void 0, e), e.currentTarget = null;
}
function ta(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var u = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], s = i.instance, c = i.currentTarget;
        if (i = i.listener, s !== u && l.isPropagationStopped()) break e;
        vi(l, i, c), u = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], s = i.instance, c = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped()) break e;
        vi(l, i, c), u = s;
      }
    }
  }
  if (Fr) throw e = pu, Fr = !1, pu = null, e;
}
function O(e, t) {
  var n = t[xu];
  n === void 0 && (n = t[xu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (na(t, e, 2, !1), n.add(r));
}
function $l(e, t, n) {
  var r = 0;
  t && (r |= 4), na(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Bn(e) {
  if (!e[mr]) {
    e[mr] = !0, as.forEach(function(n) {
      n !== "selectionchange" && (Kf.has(n) || $l(n, !1, e), $l(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || (t[mr] = !0, $l("selectionchange", !1, t));
  }
}
function na(e, t, n, r) {
  switch (As(t)) {
    case 1:
      var l = uf;
      break;
    case 4:
      l = of;
      break;
    default:
      l = lo;
  }
  n = l.bind(null, t, n, e), l = void 0, !du || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Vl(e, t, n, r, l) {
  var u = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var i = r.stateNode.containerInfo;
      if (i === l || i.nodeType === 8 && i.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        o = o.return;
      }
      for (; i !== null; ) {
        if (o = Et(i), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = u = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Cs(function() {
    var c = u, h = eo(n), m = [];
    e: {
      var p = ea.get(e);
      if (p !== void 0) {
        var g = oo, w = e;
        switch (e) {
          case "keypress":
            if (Pr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Ef;
            break;
          case "focusin":
            w = "focus", g = jl;
            break;
          case "focusout":
            w = "blur", g = jl;
            break;
          case "beforeblur":
          case "afterblur":
            g = jl;
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
            g = li;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = cf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Cf;
            break;
          case Zs:
          case Js:
          case qs:
            g = pf;
            break;
          case bs:
            g = Pf;
            break;
          case "scroll":
            g = sf;
            break;
          case "wheel":
            g = zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = hf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = oi;
        }
        var k = (t & 4) !== 0, F = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Dn(a, f), v != null && k.push(Hn(a, v, d)))), F) break;
          a = a.return;
        }
        0 < k.length && (p = new g(p, w, null, n, h), m.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== cu && (w = n.relatedTarget || n.fromElement) && (Et(w) || w[Xe])) break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? Et(w) : null, w !== null && (F = jt(w), w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (k = li, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = oi, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), F = g == null ? p : Vt(g), d = w == null ? p : Vt(w), p = new k(v, a + "leave", g, n, h), p.target = F, p.relatedTarget = d, v = null, Et(h) === c && (k = new k(f, a + "enter", w, n, h), k.target = d, k.relatedTarget = F, v = k), F = v, g && w) t: {
            for (k = g, f = w, a = 0, d = k; d; d = Ot(d)) a++;
            for (d = 0, v = f; v; v = Ot(v)) d++;
            for (; 0 < a - d; ) k = Ot(k), a--;
            for (; 0 < d - a; ) f = Ot(f), d--;
            for (; a--; ) {
              if (k === f || f !== null && k === f.alternate) break t;
              k = Ot(k), f = Ot(f);
            }
            k = null;
          }
          else k = null;
          g !== null && yi(m, p, g, k, !1), w !== null && F !== null && yi(m, F, w, k, !0);
        }
      }
      e: {
        if (p = c ? Vt(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var E = Df;
        else if (ai(p)) if (Qs) E = $f;
        else {
          E = Uf;
          var _ = Ff;
        }
        else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Af);
        if (E && (E = E(e, c))) {
          Ws(m, E, n, h);
          break e;
        }
        _ && _(e, p, c), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && uu(p, "number", p.value);
      }
      switch (_ = c ? Vt(c) : window, e) {
        case "focusin":
          (ai(_) || _.contentEditable === "true") && (At = _, yu = c, zn = null);
          break;
        case "focusout":
          zn = yu = At = null;
          break;
        case "mousedown":
          gu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gu = !1, mi(m, n, h);
          break;
        case "selectionchange":
          if (Hf) break;
        case "keydown":
        case "keyup":
          mi(m, n, h);
      }
      var C;
      if (so) e: {
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
      else Ut ? Bs(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Vs && n.locale !== "ko" && (Ut || N !== "onCompositionStart" ? N === "onCompositionEnd" && Ut && (C = $s()) : (rt = h, uo = "value" in rt ? rt.value : rt.textContent, Ut = !0)), _ = Br(c, N), 0 < _.length && (N = new ui(N, e, null, n, h), m.push({ event: N, listeners: _ }), C ? N.data = C : (C = Hs(n), C !== null && (N.data = C)))), (C = Rf ? Mf(e, n) : If(e, n)) && (c = Br(c, "onBeforeInput"), 0 < c.length && (h = new ui("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: c }), h.data = C));
    }
    ta(m, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, u = l.stateNode;
    l.tag === 5 && u !== null && (l = u, u = Dn(e, n), u != null && r.unshift(Hn(e, u, l)), u = Dn(e, t), u != null && r.push(Hn(e, u, l))), e = e.return;
  }
  return r;
}
function Ot(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yi(e, t, n, r, l) {
  for (var u = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, s = i.alternate, c = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 && c !== null && (i = c, l ? (s = Dn(n, u), s != null && o.unshift(Hn(n, s, i))) : l || (s = Dn(n, u), s != null && o.push(Hn(n, s, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Gf = /\r\n?/g, Xf = /\u0000|\uFFFD/g;
function gi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Gf, `
`).replace(Xf, "");
}
function hr(e, t, n) {
  if (t = gi(t), gi(e) !== t && n) throw Error(y(425));
}
function Hr() {
}
var wu = null, ku = null;
function Su(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Eu = typeof setTimeout == "function" ? setTimeout : void 0, Yf = typeof clearTimeout == "function" ? clearTimeout : void 0, wi = typeof Promise == "function" ? Promise : void 0, Zf = typeof queueMicrotask == "function" ? queueMicrotask : typeof wi < "u" ? function(e) {
  return wi.resolve(null).then(e).catch(Jf);
} : Eu;
function Jf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Bl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), An(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  An(t);
}
function st(e) {
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
function ki(e) {
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
var cn = Math.random().toString(36).slice(2), Ue = "__reactFiber$" + cn, Wn = "__reactProps$" + cn, Xe = "__reactContainer$" + cn, xu = "__reactEvents$" + cn, qf = "__reactListeners$" + cn, bf = "__reactHandles$" + cn;
function Et(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Xe] || n[Ue]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ki(e); e !== null; ) {
        if (n = e[Ue]) return n;
        e = ki(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function er(e) {
  return e = e[Ue] || e[Xe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Vt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function cl(e) {
  return e[Wn] || null;
}
var _u = [], Bt = -1;
function vt(e) {
  return { current: e };
}
function D(e) {
  0 > Bt || (e.current = _u[Bt], _u[Bt] = null, Bt--);
}
function j(e, t) {
  Bt++, _u[Bt] = e.current, e.current = t;
}
var mt = {}, le = vt(mt), fe = vt(!1), Lt = mt;
function tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, u;
  for (u in n) l[u] = t[u];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function de(e) {
  return e = e.childContextTypes, e != null;
}
function Wr() {
  D(fe), D(le);
}
function Si(e, t, n) {
  if (le.current !== mt) throw Error(y(168));
  j(le, t), j(fe, n);
}
function ra(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Dc(e) || "Unknown", l));
  return V({}, n, r);
}
function Qr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mt, Lt = le.current, j(le, e), j(fe, fe.current), !0;
}
function Ei(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = ra(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, D(fe), D(le), j(le, e)) : D(fe), j(fe, n);
}
var He = null, fl = !1, Hl = !1;
function la(e) {
  He === null ? He = [e] : He.push(e);
}
function ed(e) {
  fl = !0, la(e);
}
function yt() {
  if (!Hl && He !== null) {
    Hl = !0;
    var e = 0, t = I;
    try {
      var n = He;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      He = null, fl = !1;
    } catch (l) {
      throw He !== null && (He = He.slice(e + 1)), zs(to, yt), l;
    } finally {
      I = t, Hl = !1;
    }
  }
  return null;
}
var Ht = [], Wt = 0, Kr = null, Gr = 0, Se = [], Ee = 0, zt = null, We = 1, Qe = "";
function kt(e, t) {
  Ht[Wt++] = Gr, Ht[Wt++] = Kr, Kr = e, Gr = t;
}
function ua(e, t, n) {
  Se[Ee++] = We, Se[Ee++] = Qe, Se[Ee++] = zt, zt = e;
  var r = We;
  e = Qe;
  var l = 32 - Ie(r) - 1;
  r &= ~(1 << l), n += 1;
  var u = 32 - Ie(t) + l;
  if (30 < u) {
    var o = l - l % 5;
    u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, We = 1 << 32 - Ie(t) + l | n << l | r, Qe = u + e;
  } else We = 1 << u | n << l | r, Qe = e;
}
function co(e) {
  e.return !== null && (kt(e, 1), ua(e, 1, 0));
}
function fo(e) {
  for (; e === Kr; ) Kr = Ht[--Wt], Ht[Wt] = null, Gr = Ht[--Wt], Ht[Wt] = null;
  for (; e === zt; ) zt = Se[--Ee], Se[Ee] = null, Qe = Se[--Ee], Se[Ee] = null, We = Se[--Ee], Se[Ee] = null;
}
var ye = null, ve = null, U = !1, Me = null;
function oa(e, t) {
  var n = xe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function xi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = st(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? { id: We, overflow: Qe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function Cu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Nu(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!xi(e, t)) {
        if (Cu(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = ye;
        t && xi(e, t) ? oa(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, ye = e);
      }
    } else {
      if (Cu(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, U = !1, ye = e;
    }
  }
}
function _i(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ye = e;
}
function vr(e) {
  if (e !== ye) return !1;
  if (!U) return _i(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Su(e.type, e.memoizedProps)), t && (t = ve)) {
    if (Cu(e)) throw ia(), Error(y(418));
    for (; t; ) oa(e, t), t = st(t.nextSibling);
  }
  if (_i(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = st(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function ia() {
  for (var e = ve; e; ) e = st(e.nextSibling);
}
function nn() {
  ve = ye = null, U = !1;
}
function po(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var td = Je.ReactCurrentBatchConfig;
function gn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r, u = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[u] : i[u] = o;
      }, t._stringRef = u, t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function yr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ci(e) {
  var t = e._init;
  return t(e._payload);
}
function sa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = dt(f, a), f.index = 0, f.sibling = null, f;
  }
  function u(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Zl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Ft ? h(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === be && Ci(E) === a.type) ? (v = l(a, d.props), v.ref = gn(f, a, d), v.return = f, v) : (v = jr(d.type, d.key, d.props, null, f.mode, v), v.ref = gn(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Jl(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = Nt(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Zl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case or:
          return d = jr(a.type, a.key, a.props, null, f.mode, d), d.ref = gn(f, null, a), d.return = f, d;
        case Dt:
          return a = Jl(a, f.mode, d), a.return = f, a;
        case be:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (En(a) || pn(a)) return a = Nt(a, f.mode, d, null), a.return = f, a;
      yr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : i(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case or:
          return d.key === E ? s(f, a, d, v) : null;
        case Dt:
          return d.key === E ? c(f, a, d, v) : null;
        case be:
          return E = d._init, p(
            f,
            a,
            E(d._payload),
            v
          );
      }
      if (En(d) || pn(d)) return E !== null ? null : h(f, a, d, v, null);
      yr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, i(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case or:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case Dt:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case be:
          var _ = v._init;
          return g(f, a, d, _(v._payload), E);
      }
      if (En(v) || pn(v)) return f = f.get(d) || null, h(a, f, v, E, null);
      yr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, _ = null, C = a, N = a = 0, H = null; C !== null && N < d.length; N++) {
      C.index > N ? (H = C, C = null) : H = C.sibling;
      var R = p(f, C, d[N], v);
      if (R === null) {
        C === null && (C = H);
        break;
      }
      e && C && R.alternate === null && t(f, C), a = u(R, a, N), _ === null ? E = R : _.sibling = R, _ = R, C = H;
    }
    if (N === d.length) return n(f, C), U && kt(f, N), E;
    if (C === null) {
      for (; N < d.length; N++) C = m(f, d[N], v), C !== null && (a = u(C, a, N), _ === null ? E = C : _.sibling = C, _ = C);
      return U && kt(f, N), E;
    }
    for (C = r(f, C); N < d.length; N++) H = g(C, f, N, d[N], v), H !== null && (e && H.alternate !== null && C.delete(H.key === null ? N : H.key), a = u(H, a, N), _ === null ? E = H : _.sibling = H, _ = H);
    return e && C.forEach(function(Pe) {
      return t(f, Pe);
    }), U && kt(f, N), E;
  }
  function k(f, a, d, v) {
    var E = pn(d);
    if (typeof E != "function") throw Error(y(150));
    if (d = E.call(d), d == null) throw Error(y(151));
    for (var _ = E = null, C = a, N = a = 0, H = null, R = d.next(); C !== null && !R.done; N++, R = d.next()) {
      C.index > N ? (H = C, C = null) : H = C.sibling;
      var Pe = p(f, C, R.value, v);
      if (Pe === null) {
        C === null && (C = H);
        break;
      }
      e && C && Pe.alternate === null && t(f, C), a = u(Pe, a, N), _ === null ? E = Pe : _.sibling = Pe, _ = Pe, C = H;
    }
    if (R.done) return n(
      f,
      C
    ), U && kt(f, N), E;
    if (C === null) {
      for (; !R.done; N++, R = d.next()) R = m(f, R.value, v), R !== null && (a = u(R, a, N), _ === null ? E = R : _.sibling = R, _ = R);
      return U && kt(f, N), E;
    }
    for (C = r(f, C); !R.done; N++, R = d.next()) R = g(C, f, N, R.value, v), R !== null && (e && R.alternate !== null && C.delete(R.key === null ? N : R.key), a = u(R, a, N), _ === null ? E = R : _.sibling = R, _ = R);
    return e && C.forEach(function(fn) {
      return t(f, fn);
    }), U && kt(f, N), E;
  }
  function F(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Ft && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case or:
          e: {
            for (var E = d.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (E = d.type, E === Ft) {
                  if (_.tag === 7) {
                    n(f, _.sibling), a = l(_, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === be && Ci(E) === _.type) {
                  n(f, _.sibling), a = l(_, d.props), a.ref = gn(f, _, d), a.return = f, f = a;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === Ft ? (a = Nt(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = jr(d.type, d.key, d.props, null, f.mode, v), v.ref = gn(f, a, d), v.return = f, f = v);
          }
          return o(f);
        case Dt:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = Jl(d, f.mode, v), a.return = f, f = a;
          }
          return o(f);
        case be:
          return _ = d._init, F(f, a, _(d._payload), v);
      }
      if (En(d)) return w(f, a, d, v);
      if (pn(d)) return k(f, a, d, v);
      yr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Zl(d, f.mode, v), a.return = f, f = a), o(f)) : n(f, a);
  }
  return F;
}
var rn = sa(!0), aa = sa(!1), Xr = vt(null), Yr = null, Qt = null, mo = null;
function ho() {
  mo = Qt = Yr = null;
}
function vo(e) {
  var t = Xr.current;
  D(Xr), e._currentValue = t;
}
function Pu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function qt(e, t) {
  Yr = e, mo = Qt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ce = !0), e.firstContext = null);
}
function Ce(e) {
  var t = e._currentValue;
  if (mo !== e) if (e = { context: e, memoizedValue: t, next: null }, Qt === null) {
    if (Yr === null) throw Error(y(308));
    Qt = e, Yr.dependencies = { lanes: 0, firstContext: e };
  } else Qt = Qt.next = e;
  return t;
}
var xt = null;
function yo(e) {
  xt === null ? xt = [e] : xt.push(e);
}
function ca(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, yo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ye(e, r);
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function go(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fa(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ke(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, M & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ye(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, yo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ye(e, n);
}
function Lr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, no(e, n);
  }
}
function Ni(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, u = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        u === null ? l = u = o : u = u.next = o, n = n.next;
      } while (n !== null);
      u === null ? l = u = t : u = u.next = t;
    } else l = u = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i, c = s.next;
    s.next = null, o === null ? u = c : o.next = c, o = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = c : i.next = c, h.lastBaseUpdate = s));
  }
  if (u !== null) {
    var m = l.baseState;
    o = 0, h = c = s = null, i = u;
    do {
      var p = i.lane, g = i.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, k = i;
          switch (p = t, g = n, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, p = typeof w == "function" ? w.call(g, m, p) : w, p == null) break e;
              m = V({}, m, p);
              break e;
            case 2:
              et = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i));
      } else g = { eventTime: g, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (c = h = g, s = m) : h = h.next = g, o |= p;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        p = i, i = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else u === null && (l.shared.lanes = 0);
    Rt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Pi(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var tr = {}, $e = vt(tr), Qn = vt(tr), Kn = vt(tr);
function _t(e) {
  if (e === tr) throw Error(y(174));
  return e;
}
function wo(e, t) {
  switch (j(Kn, t), j(Qn, e), j($e, tr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : iu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = iu(t, e);
  }
  D($e), j($e, t);
}
function ln() {
  D($e), D(Qn), D(Kn);
}
function da(e) {
  _t(Kn.current);
  var t = _t($e.current), n = iu(t, e.type);
  t !== n && (j(Qn, e), j($e, n));
}
function ko(e) {
  Qn.current === e && (D($e), D(Qn));
}
var A = vt(0);
function Jr(e) {
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
var Wl = [];
function So() {
  for (var e = 0; e < Wl.length; e++) Wl[e]._workInProgressVersionPrimary = null;
  Wl.length = 0;
}
var zr = Je.ReactCurrentDispatcher, Ql = Je.ReactCurrentBatchConfig, Tt = 0, $ = null, G = null, Z = null, qr = !1, Tn = !1, Gn = 0, nd = 0;
function te() {
  throw Error(y(321));
}
function Eo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Oe(e[n], t[n])) return !1;
  return !0;
}
function xo(e, t, n, r, l, u) {
  if (Tt = u, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zr.current = e === null || e.memoizedState === null ? od : id, e = n(r, l), Tn) {
    u = 0;
    do {
      if (Tn = !1, Gn = 0, 25 <= u) throw Error(y(301));
      u += 1, Z = G = null, t.updateQueue = null, zr.current = sd, e = n(r, l);
    } while (Tn);
  }
  if (zr.current = br, t = G !== null && G.next !== null, Tt = 0, Z = G = $ = null, qr = !1, t) throw Error(y(300));
  return e;
}
function _o() {
  var e = Gn !== 0;
  return Gn = 0, e;
}
function Fe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? $.memoizedState = Z = e : Z = Z.next = e, Z;
}
function Ne() {
  if (G === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = Z === null ? $.memoizedState : Z.next;
  if (t !== null) Z = t, G = e;
  else {
    if (e === null) throw Error(y(310));
    G = e, e = { memoizedState: G.memoizedState, baseState: G.baseState, baseQueue: G.baseQueue, queue: G.queue, next: null }, Z === null ? $.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function Xn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Kl(e) {
  var t = Ne(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = G, l = r.baseQueue, u = n.pending;
  if (u !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = u.next, u.next = o;
    }
    r.baseQueue = l = u, n.pending = null;
  }
  if (l !== null) {
    u = l.next, r = r.baseState;
    var i = o = null, s = null, c = u;
    do {
      var h = c.lane;
      if ((Tt & h) === h) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (i = s = m, o = r) : s = s.next = m, $.lanes |= h, Rt |= h;
      }
      c = c.next;
    } while (c !== null && c !== u);
    s === null ? o = r : s.next = i, Oe(r, t.memoizedState) || (ce = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      u = l.lane, $.lanes |= u, Rt |= u, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Gl(e) {
  var t = Ne(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, u = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      u = e(u, o.action), o = o.next;
    while (o !== l);
    Oe(u, t.memoizedState) || (ce = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
  }
  return [u, r];
}
function pa() {
}
function ma(e, t) {
  var n = $, r = Ne(), l = t(), u = !Oe(r.memoizedState, l);
  if (u && (r.memoizedState = l, ce = !0), r = r.queue, Co(ya.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || Z !== null && Z.memoizedState.tag & 1) {
    if (n.flags |= 2048, Yn(9, va.bind(null, n, r, l, t), void 0, null), J === null) throw Error(y(349));
    Tt & 30 || ha(n, t, l);
  }
  return l;
}
function ha(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function va(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ga(t) && wa(e);
}
function ya(e, t, n) {
  return n(function() {
    ga(t) && wa(e);
  });
}
function ga(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Oe(e, n);
  } catch {
    return !0;
  }
}
function wa(e) {
  var t = Ye(e, 1);
  t !== null && je(t, e, 1, -1);
}
function Li(e) {
  var t = Fe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xn, lastRenderedState: e }, t.queue = e, e = e.dispatch = ud.bind(null, $, e), [t.memoizedState, e];
}
function Yn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ka() {
  return Ne().memoizedState;
}
function Tr(e, t, n, r) {
  var l = Fe();
  $.flags |= e, l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r);
}
function dl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (u = o.destroy, r !== null && Eo(r, o.deps)) {
      l.memoizedState = Yn(t, n, u, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = Yn(1 | t, n, u, r);
}
function zi(e, t) {
  return Tr(8390656, 8, e, t);
}
function Co(e, t) {
  return dl(2048, 8, e, t);
}
function Sa(e, t) {
  return dl(4, 2, e, t);
}
function Ea(e, t) {
  return dl(4, 4, e, t);
}
function xa(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function _a(e, t, n) {
  return n = n != null ? n.concat([e]) : null, dl(4, 4, xa.bind(null, t, e), n);
}
function No() {
}
function Ca(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Eo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Na(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Eo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Pa(e, t, n) {
  return Tt & 21 ? (Oe(n, t) || (n = Ms(), $.lanes |= n, Rt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ce = !0), e.memoizedState = n);
}
function rd(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ql.transition;
  Ql.transition = {};
  try {
    e(!1), t();
  } finally {
    I = n, Ql.transition = r;
  }
}
function La() {
  return Ne().memoizedState;
}
function ld(e, t, n) {
  var r = ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, za(e)) Ta(t, n);
  else if (n = ca(e, t, n, r), n !== null) {
    var l = oe();
    je(n, e, r, l), Ra(n, t, r);
  }
}
function ud(e, t, n) {
  var r = ft(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (za(e)) Ta(t, l);
  else {
    var u = e.alternate;
    if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
      var o = t.lastRenderedState, i = u(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, Oe(i, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, yo(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = ca(e, t, l, r), n !== null && (l = oe(), je(n, e, r, l), Ra(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === $ || t !== null && t === $;
}
function Ta(e, t) {
  Tn = qr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ra(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, no(e, n);
  }
}
var br = { readContext: Ce, useCallback: te, useContext: te, useEffect: te, useImperativeHandle: te, useInsertionEffect: te, useLayoutEffect: te, useMemo: te, useReducer: te, useRef: te, useState: te, useDebugValue: te, useDeferredValue: te, useTransition: te, useMutableSource: te, useSyncExternalStore: te, useId: te, unstable_isNewReconciler: !1 }, od = { readContext: Ce, useCallback: function(e, t) {
  return Fe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ce, useEffect: zi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Tr(
    4194308,
    4,
    xa.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Tr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Tr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Fe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Fe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ld.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Fe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Li, useDebugValue: No, useDeferredValue: function(e) {
  return Fe().memoizedState = e;
}, useTransition: function() {
  var e = Li(!1), t = e[0];
  return e = rd.bind(null, e[1]), Fe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = $, l = Fe();
  if (U) {
    if (n === void 0) throw Error(y(407));
    n = n();
  } else {
    if (n = t(), J === null) throw Error(y(349));
    Tt & 30 || ha(r, t, n);
  }
  l.memoizedState = n;
  var u = { value: n, getSnapshot: t };
  return l.queue = u, zi(ya.bind(
    null,
    r,
    u,
    e
  ), [e]), r.flags |= 2048, Yn(9, va.bind(null, r, u, n, t), void 0, null), n;
}, useId: function() {
  var e = Fe(), t = J.identifierPrefix;
  if (U) {
    var n = Qe, r = We;
    n = (r & ~(1 << 32 - Ie(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = nd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, id = {
  readContext: Ce,
  useCallback: Ca,
  useContext: Ce,
  useEffect: Co,
  useImperativeHandle: _a,
  useInsertionEffect: Sa,
  useLayoutEffect: Ea,
  useMemo: Na,
  useReducer: Kl,
  useRef: ka,
  useState: function() {
    return Kl(Xn);
  },
  useDebugValue: No,
  useDeferredValue: function(e) {
    var t = Ne();
    return Pa(t, G.memoizedState, e);
  },
  useTransition: function() {
    var e = Kl(Xn)[0], t = Ne().memoizedState;
    return [e, t];
  },
  useMutableSource: pa,
  useSyncExternalStore: ma,
  useId: La,
  unstable_isNewReconciler: !1
}, sd = { readContext: Ce, useCallback: Ca, useContext: Ce, useEffect: Co, useImperativeHandle: _a, useInsertionEffect: Sa, useLayoutEffect: Ea, useMemo: Na, useReducer: Gl, useRef: ka, useState: function() {
  return Gl(Xn);
}, useDebugValue: No, useDeferredValue: function(e) {
  var t = Ne();
  return G === null ? t.memoizedState = e : Pa(t, G.memoizedState, e);
}, useTransition: function() {
  var e = Gl(Xn)[0], t = Ne().memoizedState;
  return [e, t];
}, useMutableSource: pa, useSyncExternalStore: ma, useId: La, unstable_isNewReconciler: !1 };
function Te(e, t) {
  if (e && e.defaultProps) {
    t = V({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Lu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = { isMounted: function(e) {
  return (e = e._reactInternals) ? jt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = oe(), l = ft(e), u = Ke(r, l);
  u.payload = t, n != null && (u.callback = n), t = at(e, u, l), t !== null && (je(t, e, l, r), Lr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = oe(), l = ft(e), u = Ke(r, l);
  u.tag = 1, u.payload = t, n != null && (u.callback = n), t = at(e, u, l), t !== null && (je(t, e, l, r), Lr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = oe(), r = ft(e), l = Ke(n, r);
  l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (je(t, e, r, n), Lr(t, e, r));
} };
function Ti(e, t, n, r, l, u, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : t.prototype && t.prototype.isPureReactComponent ? !Vn(n, r) || !Vn(l, u) : !0;
}
function Ma(e, t, n) {
  var r = !1, l = mt, u = t.contextType;
  return typeof u == "object" && u !== null ? u = Ce(u) : (l = de(t) ? Lt : le.current, r = t.contextTypes, u = (r = r != null) ? tn(e, l) : mt), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
}
function Ri(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function zu(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, go(e);
  var u = t.contextType;
  typeof u == "object" && u !== null ? l.context = Ce(u) : (u = de(t) ? Lt : le.current, l.context = tn(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Lu(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && pl.enqueueReplaceState(l, l.state, null), Zr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function un(e, t) {
  try {
    var n = "", r = t;
    do
      n += Oc(r), r = r.return;
    while (r);
    var l = n;
  } catch (u) {
    l = `
Error generating stack: ` + u.message + `
` + u.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Tu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ad = typeof WeakMap == "function" ? WeakMap : Map;
function Ia(e, t, n) {
  n = Ke(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    tl || (tl = !0, $u = r), Tu(e, t);
  }, n;
}
function ja(e, t, n) {
  n = Ke(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Tu(e, t);
    };
  }
  var u = e.stateNode;
  return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
    Tu(e, t), typeof r != "function" && (ct === null ? ct = /* @__PURE__ */ new Set([this]) : ct.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Mi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ad();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = xd.bind(null, e, t, n), t.then(e, e));
}
function Ii(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ji(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ke(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e);
}
var cd = Je.ReactCurrentOwner, ce = !1;
function ue(e, t, n, r) {
  t.child = e === null ? aa(t, null, n, r) : rn(t, e.child, n, r);
}
function Oi(e, t, n, r, l) {
  n = n.render;
  var u = t.ref;
  return qt(t, l), r = xo(e, t, n, r, u, l), n = _o(), e !== null && !ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (U && n && co(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function Di(e, t, n, r, l) {
  if (e === null) {
    var u = n.type;
    return typeof u == "function" && !jo(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Oa(e, t, u, r, l)) : (e = jr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (u = e.child, !(e.lanes & l)) {
    var o = u.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Vn, n(o, r) && e.ref === t.ref) return Ze(e, t, l);
  }
  return t.flags |= 1, e = dt(u, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Oa(e, t, n, r, l) {
  if (e !== null) {
    var u = e.memoizedProps;
    if (Vn(u, r) && e.ref === t.ref) if (ce = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (ce = !0);
    else return t.lanes = e.lanes, Ze(e, t, l);
  }
  return Ru(e, t, n, r, l);
}
function Da(e, t, n) {
  var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, j(Gt, me), me |= n;
  else {
    if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, j(Gt, me), me |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, j(Gt, me), me |= r;
  }
  else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, j(Gt, me), me |= r;
  return ue(e, t, l, n), t.child;
}
function Fa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ru(e, t, n, r, l) {
  var u = de(n) ? Lt : le.current;
  return u = tn(t, u), qt(t, l), n = xo(e, t, n, r, u, l), r = _o(), e !== null && !ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (U && r && co(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function Fi(e, t, n, r, l) {
  if (de(n)) {
    var u = !0;
    Qr(t);
  } else u = !1;
  if (qt(t, l), t.stateNode === null) Rr(e, t), Ma(t, n, r), zu(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var s = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ce(c) : (c = de(n) ? Lt : le.current, c = tn(t, c));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== c) && Ri(t, o, r, c), et = !1;
    var p = t.memoizedState;
    o.state = p, Zr(t, r, o, l), s = t.memoizedState, i !== r || p !== s || fe.current || et ? (typeof h == "function" && (Lu(t, n, h, r), s = t.memoizedState), (i = et || Ti(t, n, i, r, p, s, c)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = c, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, fa(e, t), i = t.memoizedProps, c = t.type === t.elementType ? i : Te(t.type, i), o.props = c, m = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ce(s) : (s = de(n) ? Lt : le.current, s = tn(t, s));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== m || p !== s) && Ri(t, o, r, s), et = !1, p = t.memoizedState, o.state = p, Zr(t, r, o, l);
    var w = t.memoizedState;
    i !== m || p !== w || fe.current || et ? (typeof g == "function" && (Lu(t, n, g, r), w = t.memoizedState), (c = et || Ti(t, n, c, r, p, w, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Mu(e, t, n, r, u, l);
}
function Mu(e, t, n, r, l, u) {
  Fa(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Ei(t, n, !1), Ze(e, t, u);
  r = t.stateNode, cd.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = rn(t, e.child, null, u), t.child = rn(t, null, i, u)) : ue(e, t, i, u), t.memoizedState = r.state, l && Ei(t, n, !0), t.child;
}
function Ua(e) {
  var t = e.stateNode;
  t.pendingContext ? Si(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Si(e, t.context, !1), wo(e, t.containerInfo);
}
function Ui(e, t, n, r, l) {
  return nn(), po(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var Iu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ju(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Aa(e, t, n) {
  var r = t.pendingProps, l = A.current, u = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), j(A, l & 1), e === null)
    return Nu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, o = { mode: "hidden", children: o }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = vl(o, r, 0, null), e = Nt(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = ju(n), t.memoizedState = Iu, e) : Po(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return fd(e, t, o, r, i, l, n);
  if (u) {
    u = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = dt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = dt(i, u) : (u = Nt(u, o, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, o = e.child.memoizedState, o = o === null ? ju(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~n, t.memoizedState = Iu, r;
  }
  return u = e.child, e = u.sibling, r = dt(u, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Po(e, t) {
  return t = vl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function gr(e, t, n, r) {
  return r !== null && po(r), rn(t, e.child, null, n), e = Po(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function fd(e, t, n, r, l, u, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Xl(Error(y(422))), gr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = vl({ mode: "visible", children: r.children }, l, 0, null), u = Nt(u, l, o, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, t.mode & 1 && rn(t, e.child, null, o), t.child.memoizedState = ju(o), t.memoizedState = Iu, u);
  if (!(t.mode & 1)) return gr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, u = Error(y(419)), r = Xl(u, r, void 0), gr(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, ce || i) {
    if (r = J, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Ye(e, l), je(r, e, l, -1));
    }
    return Io(), r = Xl(Error(y(421))), gr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = _d.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, ve = st(l.nextSibling), ye = t, U = !0, Me = null, e !== null && (Se[Ee++] = We, Se[Ee++] = Qe, Se[Ee++] = zt, We = e.id, Qe = e.overflow, zt = t), t = Po(t, r.children), t.flags |= 4096, t);
}
function Ai(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pu(e.return, t, n);
}
function Yl(e, t, n, r, l) {
  var u = e.memoizedState;
  u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
}
function $a(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, u = r.tail;
  if (ue(e, t, r.children, n), r = A.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ai(e, n, t);
      else if (e.tag === 19) Ai(e, n, t);
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
  if (j(A, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Jr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Yl(t, !1, l, n, u);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Jr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Yl(t, !0, n, null, u);
      break;
    case "together":
      Yl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Rr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ze(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Rt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function dd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ua(t), nn();
      break;
    case 5:
      da(t);
      break;
    case 1:
      de(t.type) && Qr(t);
      break;
    case 4:
      wo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      j(Xr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (j(A, A.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Aa(e, t, n) : (j(A, A.current & 1), e = Ze(e, t, n), e !== null ? e.sibling : null);
      j(A, A.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return $a(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), j(A, A.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Da(e, t, n);
  }
  return Ze(e, t, n);
}
var Va, Ou, Ba, Ha;
Va = function(e, t) {
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
Ou = function() {
};
Ba = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, _t($e.current);
    var u = null;
    switch (n) {
      case "input":
        l = ru(e, l), r = ru(e, r), u = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), u = [];
        break;
      case "textarea":
        l = ou(e, l), r = ou(e, r), u = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
    }
    su(n, r);
    var o;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var i = l[c];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (jn.hasOwnProperty(c) ? u || (u = []) : (u = u || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (i = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== i && (s != null || i != null)) if (c === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (u || (u = []), u.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (jn.hasOwnProperty(c) ? (s != null && c === "onScroll" && O("scroll", e), u || i === s || (u = [])) : (u = u || []).push(c, s));
    }
    n && (u = u || []).push("style", n);
    var c = u;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ha = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wn(e, t) {
  if (!U) switch (e.tailMode) {
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
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function pd(e, t, n) {
  var r = t.pendingProps;
  switch (fo(t), t.tag) {
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
      return ne(t), null;
    case 1:
      return de(t.type) && Wr(), ne(t), null;
    case 3:
      return r = t.stateNode, ln(), D(fe), D(le), So(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (Hu(Me), Me = null))), Ou(e, t), ne(t), null;
    case 5:
      ko(t);
      var l = _t(Kn.current);
      if (n = t.type, e !== null && t.stateNode != null) Ba(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (e = _t($e.current), vr(t)) {
          r = t.stateNode, n = t.type;
          var u = t.memoizedProps;
          switch (r[Ue] = t, r[Wn] = u, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < _n.length; l++) O(_n[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O(
                "error",
                r
              ), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              Xo(r, u), O("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!u.multiple }, O("invalid", r);
              break;
            case "textarea":
              Zo(r, u), O("invalid", r);
          }
          su(n, u), l = null;
          for (var o in u) if (u.hasOwnProperty(o)) {
            var i = u[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && hr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && hr(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : jn.hasOwnProperty(o) && i != null && o === "onScroll" && O("scroll", r);
          }
          switch (n) {
            case "input":
              ir(r), Yo(r, u, !0);
              break;
            case "textarea":
              ir(r), Jo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick == "function" && (r.onclick = Hr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ys(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ue] = t, e[Wn] = r, Va(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = au(n, r), n) {
              case "dialog":
                O("cancel", e), O("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < _n.length; l++) O(_n[l], e);
                l = r;
                break;
              case "source":
                O("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                O(
                  "error",
                  e
                ), O("load", e), l = r;
                break;
              case "details":
                O("toggle", e), l = r;
                break;
              case "input":
                Xo(e, r), l = ru(e, r), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), O("invalid", e);
                break;
              case "textarea":
                Zo(e, r), l = ou(e, r), O("invalid", e);
                break;
              default:
                l = r;
            }
            su(n, l), i = l;
            for (u in i) if (i.hasOwnProperty(u)) {
              var s = i[u];
              u === "style" ? ks(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && gs(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && On(e, s) : typeof s == "number" && On(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (jn.hasOwnProperty(u) ? s != null && u === "onScroll" && O("scroll", e) : s != null && Zu(e, u, s, o));
            }
            switch (n) {
              case "input":
                ir(e), Yo(e, r, !1);
                break;
              case "textarea":
                ir(e), Jo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, u = r.value, u != null ? Xt(e, !!r.multiple, u, !1) : r.defaultValue != null && Xt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Hr);
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
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Ha(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (n = _t(Kn.current), _t($e.current), vr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ue] = t, (u = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
            case 3:
              hr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && hr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          u && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ue] = t, t.stateNode = r;
      }
      return ne(t), null;
    case 13:
      if (D(A), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128)) ia(), nn(), t.flags |= 98560, u = !1;
        else if (u = vr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!u) throw Error(y(318));
            if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(y(317));
            u[Ue] = t;
          } else nn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ne(t), u = !1;
        } else Me !== null && (Hu(Me), Me = null), u = !0;
        if (!u) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || A.current & 1 ? X === 0 && (X = 3) : Io())), t.updateQueue !== null && (t.flags |= 4), ne(t), null);
    case 4:
      return ln(), Ou(e, t), e === null && Bn(t.stateNode.containerInfo), ne(t), null;
    case 10:
      return vo(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && Wr(), ne(t), null;
    case 19:
      if (D(A), u = t.memoizedState, u === null) return ne(t), null;
      if (r = (t.flags & 128) !== 0, o = u.rendering, o === null) if (r) wn(u, !1);
      else {
        if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Jr(e), o !== null) {
            for (t.flags |= 128, wn(u, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return j(A, A.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        u.tail !== null && Q() > on && (t.flags |= 128, r = !0, wn(u, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Jr(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wn(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !U) return ne(t), null;
        } else 2 * Q() - u.renderingStartTime > on && n !== 1073741824 && (t.flags |= 128, r = !0, wn(u, !1), t.lanes = 4194304);
        u.isBackwards ? (o.sibling = t.child, t.child = o) : (n = u.last, n !== null ? n.sibling = o : t.child = o, u.last = o);
      }
      return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Q(), t.sibling = null, n = A.current, j(A, r ? n & 1 | 2 : n & 1), t) : (ne(t), null);
    case 22:
    case 23:
      return Mo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ne(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function md(e, t) {
  switch (fo(t), t.tag) {
    case 1:
      return de(t.type) && Wr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ln(), D(fe), D(le), So(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ko(t), null;
    case 13:
      if (D(A), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(y(340));
        nn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return D(A), null;
    case 4:
      return ln(), null;
    case 10:
      return vo(t.type._context), null;
    case 22:
    case 23:
      return Mo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1, re = !1, hd = typeof WeakSet == "function" ? WeakSet : Set, S = null;
function Kt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    B(e, t, r);
  }
  else n.current = null;
}
function Du(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var $i = !1;
function vd(e, t) {
  if (wu = $r, e = Xs(), ao(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, u = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, u.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, i = -1, s = -1, c = 0, h = 0, m = e, p = null;
        t: for (; ; ) {
          for (var g; m !== n || l !== 0 && m.nodeType !== 3 || (i = o + l), m !== u || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (g = m.firstChild) !== null; )
            p = m, m = g;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++c === l && (i = o), p === u && ++h === r && (s = o), (g = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = g;
        }
        n = i === -1 || s === -1 ? null : { start: i, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ku = { focusedElem: e, selectionRange: n }, $r = !1, S = t; S !== null; ) if (t = S, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, S = e;
  else for (; S !== null; ) {
    t = S;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var k = w.memoizedProps, F = w.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Te(t.type, k), F);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(y(163));
      }
    } catch (v) {
      B(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, S = e;
      break;
    }
    S = t.return;
  }
  return w = $i, $i = !1, w;
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var u = l.destroy;
        l.destroy = void 0, u !== void 0 && Du(t, n, u);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ml(e, t) {
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
function Fu(e) {
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
function Wa(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Wa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Wn], delete t[xu], delete t[qf], delete t[bf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qa(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Uu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Uu(e, t, n), e = e.sibling; e !== null; ) Uu(e, t, n), e = e.sibling;
}
function Au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Au(e, t, n), e = e.sibling; e !== null; ) Au(e, t, n), e = e.sibling;
}
var q = null, Re = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Ka(e, t, n), n = n.sibling;
}
function Ka(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function") try {
    Ae.onCommitFiberUnmount(ol, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      re || Kt(n, t);
    case 6:
      var r = q, l = Re;
      q = null, qe(e, t, n), q = r, Re = l, q !== null && (Re ? (e = q, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null && (Re ? (e = q, n = n.stateNode, e.nodeType === 8 ? Bl(e.parentNode, n) : e.nodeType === 1 && Bl(e, n), An(e)) : Bl(q, n.stateNode));
      break;
    case 4:
      r = q, l = Re, q = n.stateNode.containerInfo, Re = !0, qe(e, t, n), q = r, Re = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var u = l, o = u.destroy;
          u = u.tag, o !== void 0 && (u & 2 || u & 4) && Du(n, t, o), l = l.next;
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (!re && (Kt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        B(n, t, i);
      }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (re = (r = re) || n.memoizedState !== null, qe(e, t, n), re = r) : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function Bi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hd()), t.forEach(function(r) {
      var l = Cd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var u = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            q = i.stateNode, Re = !1;
            break e;
          case 3:
            q = i.stateNode.containerInfo, Re = !0;
            break e;
          case 4:
            q = i.stateNode.containerInfo, Re = !0;
            break e;
        }
        i = i.return;
      }
      if (q === null) throw Error(y(160));
      Ka(u, o, l), q = null, Re = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      B(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ga(t, e), t = t.sibling;
}
function Ga(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(t, e), De(e), r & 4) {
        try {
          Rn(3, e, e.return), ml(3, e);
        } catch (k) {
          B(e, e.return, k);
        }
        try {
          Rn(5, e, e.return);
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 1:
      Le(t, e), De(e), r & 512 && n !== null && Kt(n, n.return);
      break;
    case 5:
      if (Le(t, e), De(e), r & 512 && n !== null && Kt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          On(l, "");
        } catch (k) {
          B(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var u = e.memoizedProps, o = n !== null ? n.memoizedProps : u, i = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          i === "input" && u.type === "radio" && u.name != null && hs(l, u), au(i, o);
          var c = au(i, u);
          for (o = 0; o < s.length; o += 2) {
            var h = s[o], m = s[o + 1];
            h === "style" ? ks(l, m) : h === "dangerouslySetInnerHTML" ? gs(l, m) : h === "children" ? On(l, m) : Zu(l, h, m, c);
          }
          switch (i) {
            case "input":
              lu(l, u);
              break;
            case "textarea":
              vs(l, u);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!u.multiple;
              var g = u.value;
              g != null ? Xt(l, !!u.multiple, g, !1) : p !== !!u.multiple && (u.defaultValue != null ? Xt(
                l,
                !!u.multiple,
                u.defaultValue,
                !0
              ) : Xt(l, !!u.multiple, u.multiple ? [] : "", !1));
          }
          l[Wn] = u;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Le(t, e), De(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, u = e.memoizedProps;
        try {
          l.nodeValue = u;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Le(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        An(t.containerInfo);
      } catch (k) {
        B(e, e.return, k);
      }
      break;
    case 4:
      Le(t, e), De(e);
      break;
    case 13:
      Le(t, e), De(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (To = Q())), r & 4 && Bi(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (re = (c = re) || h, Le(t, e), re = c) : Le(t, e), De(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (S = e, h = e.child; h !== null; ) {
          for (m = S = h; S !== null; ) {
            switch (p = S, g = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rn(4, p, p.return);
                break;
              case 1:
                Kt(p, p.return);
                var w = p.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (k) {
                    B(r, n, k);
                  }
                }
                break;
              case 5:
                Kt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Wi(m);
                  continue;
                }
            }
            g !== null ? (g.return = p, S = g) : Wi(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, c ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = ws("display", o));
              } catch (k) {
                B(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (k) {
              B(e, e.return, k);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), m = m.return;
          }
          h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Le(t, e), De(e), r & 4 && Bi(e);
      break;
    case 21:
      break;
    default:
      Le(
        t,
        e
      ), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (On(l, ""), r.flags &= -33);
          var u = Vi(e);
          Au(e, u, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Vi(e);
          Uu(e, i, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yd(e, t, n) {
  S = e, Xa(e);
}
function Xa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S, u = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || wr;
      if (!o) {
        var i = l.alternate, s = i !== null && i.memoizedState !== null || re;
        i = wr;
        var c = re;
        if (wr = o, (re = s) && !c) for (S = l; S !== null; ) o = S, s = o.child, o.tag === 22 && o.memoizedState !== null ? Qi(l) : s !== null ? (s.return = o, S = s) : Qi(l);
        for (; u !== null; ) S = u, Xa(u), u = u.sibling;
        S = l, wr = i, re = c;
      }
      Hi(e);
    } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, S = u) : Hi(e);
  }
}
function Hi(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            re || ml(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !re) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var u = t.updateQueue;
            u !== null && Pi(t, u, r);
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
              Pi(t, o, n);
            }
            break;
          case 5:
            var i = t.stateNode;
            if (n === null && t.flags & 4) {
              n = i;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
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
                  var m = h.dehydrated;
                  m !== null && An(m);
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
            throw Error(y(163));
        }
        re || t.flags & 512 && Fu(t);
      } catch (p) {
        B(t, t.return, p);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, S = n;
      break;
    }
    S = t.return;
  }
}
function Wi(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, S = n;
      break;
    }
    S = t.return;
  }
}
function Qi(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ml(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var u = t.return;
          try {
            Fu(t);
          } catch (s) {
            B(t, u, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Fu(t);
          } catch (s) {
            B(t, o, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, S = i;
      break;
    }
    S = t.return;
  }
}
var gd = Math.ceil, el = Je.ReactCurrentDispatcher, Lo = Je.ReactCurrentOwner, _e = Je.ReactCurrentBatchConfig, M = 0, J = null, K = null, b = 0, me = 0, Gt = vt(0), X = 0, Zn = null, Rt = 0, hl = 0, zo = 0, Mn = null, ae = null, To = 0, on = 1 / 0, Be = null, tl = !1, $u = null, ct = null, kr = !1, lt = null, nl = 0, In = 0, Vu = null, Mr = -1, Ir = 0;
function oe() {
  return M & 6 ? Q() : Mr !== -1 ? Mr : Mr = Q();
}
function ft(e) {
  return e.mode & 1 ? M & 2 && b !== 0 ? b & -b : td.transition !== null ? (Ir === 0 && (Ir = Ms()), Ir) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : As(e.type)), e) : 1;
}
function je(e, t, n, r) {
  if (50 < In) throw In = 0, Vu = null, Error(y(185));
  qn(e, n, r), (!(M & 2) || e !== J) && (e === J && (!(M & 2) && (hl |= n), X === 4 && nt(e, b)), pe(e, r), n === 1 && M === 0 && !(t.mode & 1) && (on = Q() + 500, fl && yt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  ef(e, t);
  var r = Ar(e, e === J ? b : 0);
  if (r === 0) n !== null && ei(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ei(n), t === 1) e.tag === 0 ? ed(Ki.bind(null, e)) : la(Ki.bind(null, e)), Zf(function() {
      !(M & 6) && yt();
    }), n = null;
    else {
      switch (Is(r)) {
        case 1:
          n = to;
          break;
        case 4:
          n = Ts;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = Rs;
          break;
        default:
          n = Ur;
      }
      n = nc(n, Ya.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ya(e, t) {
  if (Mr = -1, Ir = 0, M & 6) throw Error(y(327));
  var n = e.callbackNode;
  if (bt() && e.callbackNode !== n) return null;
  var r = Ar(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var u = Ja();
    (J !== e || b !== t) && (Be = null, on = Q() + 500, Ct(e, t));
    do
      try {
        Sd();
        break;
      } catch (i) {
        Za(e, i);
      }
    while (!0);
    ho(), el.current = u, M = l, K !== null ? t = 0 : (J = null, b = 0, t = X);
  }
  if (t !== 0) {
    if (t === 2 && (l = mu(e), l !== 0 && (r = l, t = Bu(e, l))), t === 1) throw n = Zn, Ct(e, 0), nt(e, r), pe(e, Q()), n;
    if (t === 6) nt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !wd(l) && (t = rl(e, r), t === 2 && (u = mu(e), u !== 0 && (r = u, t = Bu(e, u))), t === 1)) throw n = Zn, Ct(e, 0), nt(e, r), pe(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          St(e, ae, Be);
          break;
        case 3:
          if (nt(e, r), (r & 130023424) === r && (t = To + 500 - Q(), 10 < t)) {
            if (Ar(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              oe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Eu(St.bind(null, e, ae, Be), t);
            break;
          }
          St(e, ae, Be);
          break;
        case 4:
          if (nt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ie(r);
            u = 1 << o, o = t[o], o > l && (l = o), r &= ~u;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Eu(St.bind(null, e, ae, Be), r);
            break;
          }
          St(e, ae, Be);
          break;
        case 5:
          St(e, ae, Be);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Ya.bind(null, e) : null;
}
function Bu(e, t) {
  var n = Mn;
  return e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256), e = rl(e, t), e !== 2 && (t = ae, ae = n, t !== null && Hu(t)), e;
}
function Hu(e) {
  ae === null ? ae = e : ae.push.apply(ae, e);
}
function wd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], u = l.getSnapshot;
        l = l.value;
        try {
          if (!Oe(u(), l)) return !1;
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
function nt(e, t) {
  for (t &= ~zo, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ie(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ki(e) {
  if (M & 6) throw Error(y(327));
  bt();
  var t = Ar(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = mu(e);
    r !== 0 && (t = r, n = Bu(e, r));
  }
  if (n === 1) throw n = Zn, Ct(e, 0), nt(e, t), pe(e, Q()), n;
  if (n === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, St(e, ae, Be), pe(e, Q()), null;
}
function Ro(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (on = Q() + 500, fl && yt());
  }
}
function Mt(e) {
  lt !== null && lt.tag === 0 && !(M & 6) && bt();
  var t = M;
  M |= 1;
  var n = _e.transition, r = I;
  try {
    if (_e.transition = null, I = 1, e) return e();
  } finally {
    I = r, _e.transition = n, M = t, !(M & 6) && yt();
  }
}
function Mo() {
  me = Gt.current, D(Gt);
}
function Ct(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Yf(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (fo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Wr();
        break;
      case 3:
        ln(), D(fe), D(le), So();
        break;
      case 5:
        ko(r);
        break;
      case 4:
        ln();
        break;
      case 13:
        D(A);
        break;
      case 19:
        D(A);
        break;
      case 10:
        vo(r.type._context);
        break;
      case 22:
      case 23:
        Mo();
    }
    n = n.return;
  }
  if (J = e, K = e = dt(e.current, null), b = me = t, X = 0, Zn = null, zo = hl = Rt = 0, ae = Mn = null, xt !== null) {
    for (t = 0; t < xt.length; t++) if (n = xt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, u = n.pending;
      if (u !== null) {
        var o = u.next;
        u.next = l, r.next = o;
      }
      n.pending = r;
    }
    xt = null;
  }
  return e;
}
function Za(e, t) {
  do {
    var n = K;
    try {
      if (ho(), zr.current = br, qr) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        qr = !1;
      }
      if (Tt = 0, Z = G = $ = null, Tn = !1, Gn = 0, Lo.current = null, n === null || n.return === null) {
        X = 1, Zn = t, K = null;
        break;
      }
      e: {
        var u = e, o = n.return, i = n, s = t;
        if (t = b, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = i, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = Ii(o);
          if (g !== null) {
            g.flags &= -257, ji(g, o, i, u, t), g.mode & 1 && Mi(u, c, t), t = g, s = c;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Mi(u, c, t), Io();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && i.mode & 1) {
          var F = Ii(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), ji(F, o, i, u, t), po(un(s, i));
            break e;
          }
        }
        u = s = un(s, i), X !== 4 && (X = 2), Mn === null ? Mn = [u] : Mn.push(u), u = o;
        do {
          switch (u.tag) {
            case 3:
              u.flags |= 65536, t &= -t, u.lanes |= t;
              var f = Ia(u, s, t);
              Ni(u, f);
              break e;
            case 1:
              i = s;
              var a = u.type, d = u.stateNode;
              if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ct === null || !ct.has(d)))) {
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var v = ja(u, i, t);
                Ni(u, v);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      ba(n);
    } catch (E) {
      t = E, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ja() {
  var e = el.current;
  return el.current = br, e === null ? br : e;
}
function Io() {
  (X === 0 || X === 3 || X === 2) && (X = 4), J === null || !(Rt & 268435455) && !(hl & 268435455) || nt(J, b);
}
function rl(e, t) {
  var n = M;
  M |= 2;
  var r = Ja();
  (J !== e || b !== t) && (Be = null, Ct(e, t));
  do
    try {
      kd();
      break;
    } catch (l) {
      Za(e, l);
    }
  while (!0);
  if (ho(), M = n, el.current = r, K !== null) throw Error(y(261));
  return J = null, b = 0, X;
}
function kd() {
  for (; K !== null; ) qa(K);
}
function Sd() {
  for (; K !== null && !Qc(); ) qa(K);
}
function qa(e) {
  var t = tc(e.alternate, e, me);
  e.memoizedProps = e.pendingProps, t === null ? ba(e) : K = t, Lo.current = null;
}
function ba(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = md(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        X = 6, K = null;
        return;
      }
    } else if (n = pd(n, t, me), n !== null) {
      K = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function St(e, t, n) {
  var r = I, l = _e.transition;
  try {
    _e.transition = null, I = 1, Ed(e, t, n, r);
  } finally {
    _e.transition = l, I = r;
  }
  return null;
}
function Ed(e, t, n, r) {
  do
    bt();
  while (lt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var u = n.lanes | n.childLanes;
  if (tf(e, u), e === J && (K = J = null, b = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0, nc(Ur, function() {
    return bt(), null;
  })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
    u = _e.transition, _e.transition = null;
    var o = I;
    I = 1;
    var i = M;
    M |= 4, Lo.current = null, vd(e, n), Ga(n, e), Bf(ku), $r = !!wu, ku = wu = null, e.current = n, yd(n), Kc(), M = i, I = o, _e.transition = u;
  } else e.current = n;
  if (kr && (kr = !1, lt = e, nl = l), u = e.pendingLanes, u === 0 && (ct = null), Yc(n.stateNode), pe(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl) throw tl = !1, e = $u, $u = null, e;
  return nl & 1 && e.tag !== 0 && bt(), u = e.pendingLanes, u & 1 ? e === Vu ? In++ : (In = 0, Vu = e) : In = 0, yt(), null;
}
function bt() {
  if (lt !== null) {
    var e = Is(nl), t = _e.transition, n = I;
    try {
      if (_e.transition = null, I = 16 > e ? 16 : e, lt === null) var r = !1;
      else {
        if (e = lt, lt = null, nl = 0, M & 6) throw Error(y(331));
        var l = M;
        for (M |= 4, S = e.current; S !== null; ) {
          var u = S, o = u.child;
          if (S.flags & 16) {
            var i = u.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (S = c; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, h, u);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, S = m;
                  else for (; S !== null; ) {
                    h = S;
                    var p = h.sibling, g = h.return;
                    if (Wa(h), h === c) {
                      S = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = g, S = p;
                      break;
                    }
                    S = g;
                  }
                }
              }
              var w = u.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var F = k.sibling;
                    k.sibling = null, k = F;
                  } while (k !== null);
                }
              }
              S = u;
            }
          }
          if (u.subtreeFlags & 2064 && o !== null) o.return = u, S = o;
          else e: for (; S !== null; ) {
            if (u = S, u.flags & 2048) switch (u.tag) {
              case 0:
              case 11:
              case 15:
                Rn(9, u, u.return);
            }
            var f = u.sibling;
            if (f !== null) {
              f.return = u.return, S = f;
              break e;
            }
            S = u.return;
          }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, S = d;
          else e: for (o = a; S !== null; ) {
            if (i = S, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  ml(9, i);
              }
            } catch (E) {
              B(i, i.return, E);
            }
            if (i === o) {
              S = null;
              break e;
            }
            var v = i.sibling;
            if (v !== null) {
              v.return = i.return, S = v;
              break e;
            }
            S = i.return;
          }
        }
        if (M = l, yt(), Ae && typeof Ae.onPostCommitFiberRoot == "function") try {
          Ae.onPostCommitFiberRoot(ol, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      I = n, _e.transition = t;
    }
  }
  return !1;
}
function Gi(e, t, n) {
  t = un(n, t), t = Ia(e, t, 1), e = at(e, t, 1), t = oe(), e !== null && (qn(e, 1, t), pe(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Gi(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Gi(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ct === null || !ct.has(r))) {
        e = un(n, e), e = ja(t, e, 1), t = at(t, e, 1), e = oe(), t !== null && (qn(t, 1, e), pe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function xd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = oe(), e.pingedLanes |= e.suspendedLanes & n, J === e && (b & n) === n && (X === 4 || X === 3 && (b & 130023424) === b && 500 > Q() - To ? Ct(e, 0) : zo |= n), pe(e, t);
}
function ec(e, t) {
  t === 0 && (e.mode & 1 ? (t = cr, cr <<= 1, !(cr & 130023424) && (cr = 4194304)) : t = 1);
  var n = oe();
  e = Ye(e, t), e !== null && (qn(e, t, n), pe(e, n));
}
function _d(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ec(e, n);
}
function Cd(e, t) {
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
      throw Error(y(314));
  }
  r !== null && r.delete(t), ec(e, n);
}
var tc;
tc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ce = !1, dd(e, t, n);
    ce = !!(e.flags & 131072);
  }
  else ce = !1, U && t.flags & 1048576 && ua(t, Gr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Rr(e, t), e = t.pendingProps;
      var l = tn(t, le.current);
      qt(t, n), l = xo(null, t, r, e, l, n);
      var u = _o();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, de(r) ? (u = !0, Qr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, go(t), l.updater = pl, t.stateNode = l, l._reactInternals = t, zu(t, r, e, n), t = Mu(null, t, r, !0, u, n)) : (t.tag = 0, U && u && co(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Rr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Pd(r), e = Te(r, e), l) {
          case 0:
            t = Ru(null, t, r, e, n);
            break e;
          case 1:
            t = Fi(null, t, r, e, n);
            break e;
          case 11:
            t = Oi(null, t, r, e, n);
            break e;
          case 14:
            t = Di(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Ru(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Fi(e, t, r, l, n);
    case 3:
      e: {
        if (Ua(t), e === null) throw Error(y(387));
        r = t.pendingProps, u = t.memoizedState, l = u.element, fa(e, t), Zr(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
          l = un(Error(y(423)), t), t = Ui(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = un(Error(y(424)), t), t = Ui(e, t, r, n, l);
          break e;
        } else for (ve = st(t.stateNode.containerInfo.firstChild), ye = t, U = !0, Me = null, n = aa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (nn(), r === l) {
            t = Ze(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return da(t), e === null && Nu(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, Su(r, l) ? o = null : u !== null && Su(r, u) && (t.flags |= 32), Fa(e, t), ue(e, t, o, n), t.child;
    case 6:
      return e === null && Nu(t), null;
    case 13:
      return Aa(e, t, n);
    case 4:
      return wo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = rn(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Oi(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, o = l.value, j(Xr, r._currentValue), r._currentValue = o, u !== null) if (Oe(u.value, o)) {
          if (u.children === l.children && !fe.current) {
            t = Ze(e, t, n);
            break e;
          }
        } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
          var i = u.dependencies;
          if (i !== null) {
            o = u.child;
            for (var s = i.firstContext; s !== null; ) {
              if (s.context === r) {
                if (u.tag === 1) {
                  s = Ke(-1, n & -n), s.tag = 2;
                  var c = u.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                  }
                }
                u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), Pu(
                  u.return,
                  n,
                  t
                ), i.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (u.tag === 10) o = u.type === t.type ? null : u.child;
          else if (u.tag === 18) {
            if (o = u.return, o === null) throw Error(y(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Pu(o, n, t), o = u.sibling;
          } else o = u.child;
          if (o !== null) o.return = u;
          else for (o = u; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (u = o.sibling, u !== null) {
              u.return = o.return, o = u;
              break;
            }
            o = o.return;
          }
          u = o;
        }
        ue(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, qt(t, n), l = Ce(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Te(r, t.pendingProps), l = Te(r.type, l), Di(e, t, r, l, n);
    case 15:
      return Oa(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Rr(e, t), t.tag = 1, de(r) ? (e = !0, Qr(t)) : e = !1, qt(t, n), Ma(t, r, l), zu(t, r, l, n), Mu(null, t, r, !0, e, n);
    case 19:
      return $a(e, t, n);
    case 22:
      return Da(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function nc(e, t) {
  return zs(e, t);
}
function Nd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xe(e, t, n, r) {
  return new Nd(e, t, n, r);
}
function jo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Pd(e) {
  if (typeof e == "function") return jo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === qu) return 11;
    if (e === bu) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function jr(e, t, n, r, l, u) {
  var o = 2;
  if (r = e, typeof e == "function") jo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Ft:
      return Nt(n.children, l, u, t);
    case Ju:
      o = 8, l |= 8;
      break;
    case bl:
      return e = xe(12, n, t, l | 2), e.elementType = bl, e.lanes = u, e;
    case eu:
      return e = xe(13, n, t, l), e.elementType = eu, e.lanes = u, e;
    case tu:
      return e = xe(19, n, t, l), e.elementType = tu, e.lanes = u, e;
    case ds:
      return vl(n, l, u, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case cs:
          o = 10;
          break e;
        case fs:
          o = 9;
          break e;
        case qu:
          o = 11;
          break e;
        case bu:
          o = 14;
          break e;
        case be:
          o = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return t = xe(o, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
}
function Nt(e, t, n, r) {
  return e = xe(7, e, r, t), e.lanes = n, e;
}
function vl(e, t, n, r) {
  return e = xe(22, e, r, t), e.elementType = ds, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Zl(e, t, n) {
  return e = xe(6, e, null, t), e.lanes = n, e;
}
function Jl(e, t, n) {
  return t = xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ld(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Rl(0), this.expirationTimes = Rl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Rl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Oo(e, t, n, r, l, u, o, i, s) {
  return e = new Ld(e, t, n, i, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = xe(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, go(u), e;
}
function zd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Dt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function rc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (jt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return ra(e, n, t);
  }
  return t;
}
function lc(e, t, n, r, l, u, o, i, s) {
  return e = Oo(n, r, !0, e, l, u, o, i, s), e.context = rc(null), n = e.current, r = oe(), l = ft(n), u = Ke(r, l), u.callback = t ?? null, at(n, u, l), e.current.lanes = l, qn(e, l, r), pe(e, r), e;
}
function yl(e, t, n, r) {
  var l = t.current, u = oe(), o = ft(l);
  return n = rc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ke(u, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, o), e !== null && (je(e, l, o, u), Lr(e, l, o)), o;
}
function ll(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xi(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Do(e, t) {
  Xi(e, t), (e = e.alternate) && Xi(e, t);
}
function Td() {
  return null;
}
var uc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Fo(e) {
  this._internalRoot = e;
}
gl.prototype.render = Fo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  yl(e, t, null, null);
};
gl.prototype.unmount = Fo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function() {
      yl(null, e, null, null);
    }), t[Xe] = null;
  }
};
function gl(e) {
  this._internalRoot = e;
}
gl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ds();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++) ;
    tt.splice(n, 0, e), n === 0 && Us(e);
  }
};
function Uo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function wl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Yi() {
}
function Rd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var c = ll(o);
        u.call(c);
      };
    }
    var o = lc(t, r, e, 0, null, !1, !1, "", Yi);
    return e._reactRootContainer = o, e[Xe] = o.current, Bn(e.nodeType === 8 ? e.parentNode : e), Mt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var c = ll(s);
      i.call(c);
    };
  }
  var s = Oo(e, 0, !1, null, null, !1, !1, "", Yi);
  return e._reactRootContainer = s, e[Xe] = s.current, Bn(e.nodeType === 8 ? e.parentNode : e), Mt(function() {
    yl(t, s, n, r);
  }), s;
}
function kl(e, t, n, r, l) {
  var u = n._reactRootContainer;
  if (u) {
    var o = u;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var s = ll(o);
        i.call(s);
      };
    }
    yl(t, o, e, l);
  } else o = Rd(n, t, e, l, r);
  return ll(o);
}
js = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 && (no(t, n | 1), pe(t, Q()), !(M & 6) && (on = Q() + 500, yt()));
      }
      break;
    case 13:
      Mt(function() {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = oe();
          je(r, e, 1, l);
        }
      }), Do(e, 1);
  }
};
ro = function(e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = oe();
      je(t, e, 134217728, n);
    }
    Do(e, 134217728);
  }
};
Os = function(e) {
  if (e.tag === 13) {
    var t = ft(e), n = Ye(e, t);
    if (n !== null) {
      var r = oe();
      je(n, e, t, r);
    }
    Do(e, t);
  }
};
Ds = function() {
  return I;
};
Fs = function(e, t) {
  var n = I;
  try {
    return I = e, t();
  } finally {
    I = n;
  }
};
fu = function(e, t, n) {
  switch (t) {
    case "input":
      if (lu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = cl(r);
            if (!l) throw Error(y(90));
            ms(r), lu(r, l);
          }
        }
      }
      break;
    case "textarea":
      vs(e, n);
      break;
    case "select":
      t = n.value, t != null && Xt(e, !!n.multiple, t, !1);
  }
};
xs = Ro;
_s = Mt;
var Md = { usingClientEntryPoint: !1, Events: [er, Vt, cl, Ss, Es, Ro] }, kn = { findFiberByHostInstance: Et, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Id = { bundleType: kn.bundleType, version: kn.version, rendererPackageName: kn.rendererPackageName, rendererConfig: kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Je.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ps(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: kn.findFiberByHostInstance || Td, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber) try {
    ol = Sr.inject(Id), Ae = Sr;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uo(t)) throw Error(y(200));
  return zd(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Uo(e)) throw Error(y(299));
  var n = !1, r = "", l = uc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Oo(e, 1, !1, null, null, n, !1, r, l), e[Xe] = t.current, Bn(e.nodeType === 8 ? e.parentNode : e), new Fo(t);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Ps(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Mt(e);
};
we.hydrate = function(e, t, n) {
  if (!wl(t)) throw Error(y(200));
  return kl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Uo(e)) throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, u = "", o = uc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = lc(t, null, e, 1, n ?? null, l, !1, u, o), e[Xe] = t.current, Bn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new gl(t);
};
we.render = function(e, t, n) {
  if (!wl(t)) throw Error(y(200));
  return kl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!wl(e)) throw Error(y(40));
  return e._reactRootContainer ? (Mt(function() {
    kl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Xe] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Ro;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!wl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return kl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function oc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc);
    } catch (e) {
      console.error(e);
    }
}
oc(), os.exports = we;
var jd = os.exports, ic, Zi = jd;
ic = Zi.createRoot, Zi.hydrateRoot;
window.api = Pt;
const Od = async () => {
  const e = await Pt.fetchApi("/meld-nexus/list");
  if (!e.ok)
    throw new Error(`Failed to fetch images: ${e.statusText}`);
  return await e.json();
}, Dd = async () => {
  const e = await Pt.fetchApi("/meld-nexus/settings");
  return e.ok ? await e.json() : { dev_mode: !1 };
}, Fd = async (e, t = !0) => {
  const n = await Pt.fetchApi("/meld-nexus/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      delete_files: t
    })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to delete images");
  }
}, Ud = async (e) => {
  if (!(await Pt.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  })).ok)
    throw new Error("Failed to register image");
};
var sc = { exports: {} }, Sl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad = he, $d = Symbol.for("react.element"), Vd = Symbol.for("react.fragment"), Bd = Object.prototype.hasOwnProperty, Hd = Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Wd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r, l = {}, u = null, o = null;
  n !== void 0 && (u = "" + n), t.key !== void 0 && (u = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Bd.call(t, r) && !Wd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: $d, type: e, key: u, ref: o, props: l, _owner: Hd.current };
}
Sl.Fragment = Vd;
Sl.jsx = ac;
Sl.jsxs = ac;
sc.exports = Sl;
var z = sc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qd = {
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
const Kd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), nr = (e, t) => {
  const n = he.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: s,
      ...c
    }, h) => he.createElement(
      "svg",
      {
        ref: h,
        ...Qd,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(u) * 24 / Number(l) : u,
        className: ["lucide", `lucide-${Kd(e)}`, i].join(" "),
        ...c
      },
      [
        ...t.map(([m, p]) => he.createElement(m, p)),
        ...Array.isArray(s) ? s : [s]
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
const Gd = nr("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xd = nr("RefreshCw", [
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
const Yd = nr("Trash2", [
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
const Zd = nr("XSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = nr("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let ul = !1;
const qd = (e) => {
  ul = e, ul && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, bd = (...e) => {
  ul && console.log("[Meld-Flow]", ...e);
}, ep = (...e) => {
  ul && console.warn("[Meld-Flow]", ...e);
}, tp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, Ve = {
  log: bd,
  warn: ep,
  error: tp,
  init: qd
}, np = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  lastUpdated: Date.now(),
  viewMode: "list"
};
function rp(e, t) {
  switch (t.type) {
    case "SET_IMAGES":
      return {
        ...e,
        images: t.payload,
        isLoading: !1,
        error: null
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
      const n = new Set(e.selectedIds);
      return n.has(t.payload) ? n.delete(t.payload) : n.add(t.payload), {
        ...e,
        selectedIds: n
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(e.images.map((n) => n.id))
      };
    case "CLEAR_SELECTION":
      return {
        ...e,
        selectedIds: /* @__PURE__ */ new Set()
      };
    case "SET_VIEW_MODE":
      return {
        ...e,
        viewMode: t.payload
      };
    case "REFRESH":
      return {
        ...e,
        lastUpdated: Date.now()
      };
    default:
      return e;
  }
}
const cc = he.createContext(void 0), lp = ({ children: e }) => {
  const [t, n] = he.useReducer(rp, np), r = he.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const u = await Od();
      n({ type: "SET_IMAGES", payload: u });
    } catch (u) {
      n({
        type: "SET_ERROR",
        payload: u instanceof Error ? u.message : String(u)
      });
    }
  }, []), l = he.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const u = Array.from(t.selectedIds), o = `Are you sure you want to delete the selected ${u.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(o)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await Fd(u, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (i) {
        n({
          type: "SET_ERROR",
          payload: i instanceof Error ? i.message : String(i)
        });
      }
    }
  }, [t.selectedIds, r]);
  return he.useEffect(() => {
    const u = () => {
      r();
    };
    return window.addEventListener("meld-nexus-refresh", u), () => {
      window.removeEventListener("meld-nexus-refresh", u);
    };
  }, [r]), he.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ z.jsx(cc.Provider, { value: { state: t, dispatch: n, refreshImages: r, deleteSelected: l }, children: e });
}, Ao = () => {
  const e = he.useContext(cc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, up = () => {
  const { state: e, dispatch: t, deleteSelected: n } = Ao(), r = e.selectedIds.size;
  return r === 0 ? null : /* @__PURE__ */ z.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ z.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ z.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ z.jsx(Yd, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ z.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ z.jsx(Jd, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, op = ({ image: e }) => {
  const { state: t, dispatch: n } = Ao(), r = t.selectedIds.has(e.id), l = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, u = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, o = (c) => {
    c.ctrlKey || c.metaKey || t.selectedIds.size > 0 ? (c.preventDefault(), c.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : window.open(u, "_blank");
  }, i = (c) => {
    n({ type: "TOGGLE_SELECT", payload: e.id });
  }, s = (c) => {
    (c.key === "Enter" || c.key === " ") && (c.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  };
  return (
    // biome-ignore lint/a11y/useSemanticElements: Image card is a complex interactive element
    /* @__PURE__ */ z.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
        onClick: i,
        onKeyDown: s,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ z.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ z.jsx(
            "img",
            {
              src: u,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              onClick: (c) => {
                c.stopPropagation(), o(c);
              },
              onKeyDown: (c) => {
                (c.key === "Enter" || c.key === " ") && (c.stopPropagation(), c.preventDefault(), o(c));
              }
            }
          ) }),
          /* @__PURE__ */ z.jsxs("div", { className: "meld-image-card__details", children: [
            /* @__PURE__ */ z.jsx("div", { className: "meld-image-card__filename", children: l }),
            /* @__PURE__ */ z.jsx("div", { className: "meld-image-card__meta-label", children: "Positive" }),
            /* @__PURE__ */ z.jsx("div", { className: "meld-image-card__meta-content", children: e.positive || "-" }),
            /* @__PURE__ */ z.jsx("div", { className: "meld-image-card__meta-label", children: "Negative" }),
            /* @__PURE__ */ z.jsx("div", { className: "meld-image-card__meta-content", style: { maxHeight: "40px" }, children: e.negative || "-" }),
            /* @__PURE__ */ z.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
            /* @__PURE__ */ z.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((c, h) => /* @__PURE__ */ z.jsx(
              "span",
              {
                className: "meld-image-card__tag",
                children: c
              },
              `${c}-${h}`
            )) : /* @__PURE__ */ z.jsx("span", { style: { color: "#666" }, children: "-" }) })
          ] })
        ]
      }
    )
  );
}, ip = () => {
  const { state: e, dispatch: t, refreshImages: n } = Ao();
  Ve.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    isLoading: e.isLoading
  });
  const r = () => {
    e.selectedIds.size > 0 ? t({ type: "CLEAR_SELECTION" }) : t({ type: "SELECT_ALL" });
  };
  return /* @__PURE__ */ z.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ z.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
          gap: "15px"
        },
        children: [
          /* @__PURE__ */ z.jsx(
            "button",
            {
              type: "button",
              onClick: r,
              style: {
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              },
              disabled: e.images.length === 0,
              children: e.selectedIds.size > 0 ? /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
                /* @__PURE__ */ z.jsx(Zd, { size: 14 }),
                "Deselect"
              ] }) : /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
                /* @__PURE__ */ z.jsx(Gd, { size: 14 }),
                "Select All"
              ] })
            }
          ),
          /* @__PURE__ */ z.jsxs(
            "button",
            {
              type: "button",
              onClick: () => n(),
              style: {
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              },
              disabled: e.isLoading,
              children: [
                /* @__PURE__ */ z.jsx(Xd, { size: 14, className: e.isLoading ? "animate-spin" : "" }),
                "Refresh"
              ]
            }
          )
        ]
      }
    ),
    e.error && /* @__PURE__ */ z.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && e.images.length === 0 ? /* @__PURE__ */ z.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : e.images.length === 0 ? /* @__PURE__ */ z.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ z.jsx("div", { className: "meld-gallery__list", children: e.images.map((l) => /* @__PURE__ */ z.jsx(op, { image: l }, l.id)) }),
    /* @__PURE__ */ z.jsx(up, {})
  ] });
}, El = document.createElement("link");
El.rel = "stylesheet";
El.type = "text/css";
El.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(El);
let Er = null, ze = null;
dc.registerExtension({
  name: "ComfyUI.MeldNexus",
  // biome-ignore lint/suspicious/noExplicitAny: ComfyUI interop
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldNexus") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        var u;
        r == null || r.apply(this, l), (u = n.ui.meldNexus) != null && u.isVisible() && n.ui.meldNexus.refresh();
      };
    }
  },
  // biome-ignore lint/suspicious/noExplicitAny: ComfyUI interop
  async setup(e) {
    var t;
    try {
      const n = await Dd();
      Ve.init(n.dev_mode), Ve.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld-Flow] Failed to fetch settings", n), Ve.init(!1);
    }
    if ((t = e.extensionManager) != null && t.registerSidebarTab) {
      e.ui.meldNexus = {
        refresh: () => {
          window.dispatchEvent(new CustomEvent("meld-nexus-refresh"));
        },
        isVisible: () => {
          const n = document.getElementById("meld-flow-gallery-container");
          return n && n.offsetParent !== null;
        },
        toggle: () => {
          try {
            e.extensionManager.setSidebarTabActive("meld-flow-gallery");
          } catch (n) {
            console.error("Error toggling sidebar:", n);
          }
        }
      }, Pt.addEventListener("meld-nexus-image-saved", () => {
        e.ui.meldNexus.refresh();
      }), Pt.addEventListener("executed", async ({ detail: n }) => {
        var r;
        if ((r = n == null ? void 0 : n.output) != null && r.images) {
          for (const l of n.output.images)
            if (l.type === "output")
              try {
                await Ud({
                  filename: l.filename,
                  subfolder: l.subfolder,
                  type: l.type
                });
              } catch (u) {
                console.error("Failed to auto-register image:", u);
              }
        }
      });
      try {
        e.extensionManager.registerSidebarTab({
          id: "meld-flow-gallery",
          icon: "pi pi-images",
          title: "Gallery",
          tooltip: "Meld Flow: View generated images",
          type: "custom",
          render: (n) => {
            Ve.log("MeldNexus: render called", { el: n, galleryRoot: Er, galleryContainer: ze }), ze || (Ve.log("MeldNexus: galleryContainer not found, creating new one"), ze = document.createElement("div"), ze.id = "meld-flow-gallery-container", ze.style.height = "100%", ze.style.width = "100%", ze.style.display = "flex", ze.style.flexDirection = "column"), n.contains(ze) || (Ve.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(ze)), Er ? Ve.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (Ve.log("MeldNexus: Creating new gallery root"), Er = ic(ze), Er.render(
              Wo.createElement(
                lp,
                null,
                Wo.createElement(ip)
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
