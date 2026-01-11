import { api as Lt } from "../../../scripts/api.js";
import { app as pc } from "../../../scripts/app.js";
function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qu = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn = Symbol.for("react.element"), hc = Symbol.for("react.portal"), vc = Symbol.for("react.fragment"), yc = Symbol.for("react.strict_mode"), gc = Symbol.for("react.profiler"), wc = Symbol.for("react.provider"), kc = Symbol.for("react.context"), Sc = Symbol.for("react.forward_ref"), Ec = Symbol.for("react.suspense"), xc = Symbol.for("react.memo"), _c = Symbol.for("react.lazy"), Bo = Symbol.iterator;
function Cc(e) {
  return e === null || typeof e != "object" ? null : (e = Bo && e[Bo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var bu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, es = Object.assign, ts = {};
function an(e, t, n) {
  this.props = e, this.context = t, this.refs = ts, this.updater = n || bu;
}
an.prototype.isReactComponent = {};
an.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
an.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ns() {
}
ns.prototype = an.prototype;
function Qi(e, t, n) {
  this.props = e, this.context = t, this.refs = ts, this.updater = n || bu;
}
var Gi = Qi.prototype = new ns();
Gi.constructor = Qi;
es(Gi, an.prototype);
Gi.isPureReactComponent = !0;
var Ho = Array.isArray, rs = Object.prototype.hasOwnProperty, Ki = { current: null }, ls = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) rs.call(t, r) && !ls.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: qn, type: e, key: i, ref: o, props: l, _owner: Ki.current };
}
function Nc(e, t) {
  return { $$typeof: qn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Xi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qn;
}
function Pc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Wo = /\/+/g;
function Pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Pc("" + e.key) : t.toString(36);
}
function xr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (i) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case qn:
        case hc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Pl(o, 0) : r, Ho(l) ? (n = "", e != null && (n = e.replace(Wo, "$&/") + "/"), xr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Xi(l) && (l = Nc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Wo, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ho(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Pl(i, u);
    o += xr(i, t, n, s, l);
  }
  else if (s = Cc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Pl(i, u++), o += xr(i, t, n, s, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ir(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return xr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Lc(e) {
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
var se = { current: null }, _r = { transition: null }, zc = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: _r, ReactCurrentOwner: Ki };
function os() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = { map: ir, forEach: function(e, t, n) {
  ir(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ir(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ir(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Xi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = an;
T.Fragment = vc;
T.Profiler = gc;
T.PureComponent = Qi;
T.StrictMode = yc;
T.Suspense = Ec;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc;
T.act = os;
T.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = es({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Ki.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) rs.call(t, s) && !ls.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: qn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function(e) {
  return e = { $$typeof: kc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: wc, _context: e }, e.Consumer = e;
};
T.createElement = is;
T.createFactory = function(e) {
  var t = is.bind(null, e);
  return t.type = e, t;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: Sc, render: e };
};
T.isValidElement = Xi;
T.lazy = function(e) {
  return { $$typeof: _c, _payload: { _status: -1, _result: e }, _init: Lc };
};
T.memo = function(e, t) {
  return { $$typeof: xc, type: e, compare: t === void 0 ? null : t };
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
T.unstable_act = os;
T.useCallback = function(e, t) {
  return se.current.useCallback(e, t);
};
T.useContext = function(e) {
  return se.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function(e, t) {
  return se.current.useEffect(e, t);
};
T.useId = function() {
  return se.current.useId();
};
T.useImperativeHandle = function(e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function(e, t) {
  return se.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function(e, t) {
  return se.current.useLayoutEffect(e, t);
};
T.useMemo = function(e, t) {
  return se.current.useMemo(e, t);
};
T.useReducer = function(e, t, n) {
  return se.current.useReducer(e, t, n);
};
T.useRef = function(e) {
  return se.current.useRef(e);
};
T.useState = function(e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function(e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function() {
  return se.current.useTransition();
};
T.version = "18.3.1";
qu.exports = T;
var J = qu.exports;
const Qo = /* @__PURE__ */ mc(J);
var us = { exports: {} }, we = {}, ss = { exports: {} }, as = {};
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
  function t(x, L) {
    var z = x.length;
    x.push(L);
    e: for (; 0 < z; ) {
      var W = z - 1 >>> 1, Y = x[W];
      if (0 < l(Y, L)) x[W] = L, x[z] = Y, z = W;
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var L = x[0], z = x.pop();
    if (z !== L) {
      x[0] = z;
      e: for (var W = 0, Y = x.length, rr = Y >>> 1; W < rr; ) {
        var wt = 2 * (W + 1) - 1, Nl = x[wt], kt = wt + 1, lr = x[kt];
        if (0 > l(Nl, z)) kt < Y && 0 > l(lr, Nl) ? (x[W] = lr, x[kt] = z, W = kt) : (x[W] = Nl, x[wt] = z, W = wt);
        else if (kt < Y && 0 > l(lr, z)) x[W] = lr, x[kt] = z, W = kt;
        else break e;
      }
    }
    return L;
  }
  function l(x, L) {
    var z = x.sortIndex - L.sortIndex;
    return z !== 0 ? z : x.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var s = [], c = [], h = 1, p = null, m = 3, g = !1, w = !1, k = !1, F = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= x) r(c), L.sortIndex = L.expirationTime, t(s, L);
      else break;
      L = n(c);
    }
  }
  function v(x) {
    if (k = !1, d(x), !w) if (n(s) !== null) w = !0, _l(E);
    else {
      var L = n(c);
      L !== null && Cl(v, L.startTime - x);
    }
  }
  function E(x, L) {
    w = !1, k && (k = !1, f(P), P = -1), g = !0;
    var z = m;
    try {
      for (d(L), p = n(s); p !== null && (!(p.expirationTime > L) || x && !Pe()); ) {
        var W = p.callback;
        if (typeof W == "function") {
          p.callback = null, m = p.priorityLevel;
          var Y = W(p.expirationTime <= L);
          L = e.unstable_now(), typeof Y == "function" ? p.callback = Y : p === n(s) && r(s), d(L);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var rr = !0;
      else {
        var wt = n(c);
        wt !== null && Cl(v, wt.startTime - L), rr = !1;
      }
      return rr;
    } finally {
      p = null, m = z, g = !1;
    }
  }
  var C = !1, N = null, P = -1, H = 5, I = -1;
  function Pe() {
    return !(e.unstable_now() - I < H);
  }
  function dn() {
    if (N !== null) {
      var x = e.unstable_now();
      I = x;
      var L = !0;
      try {
        L = N(!0, x);
      } finally {
        L ? pn() : (C = !1, N = null);
      }
    } else C = !1;
  }
  var pn;
  if (typeof a == "function") pn = function() {
    a(dn);
  };
  else if (typeof MessageChannel < "u") {
    var $o = new MessageChannel(), dc = $o.port2;
    $o.port1.onmessage = dn, pn = function() {
      dc.postMessage(null);
    };
  } else pn = function() {
    F(dn, 0);
  };
  function _l(x) {
    N = x, C || (C = !0, pn());
  }
  function Cl(x, L) {
    P = F(function() {
      x(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, _l(E));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < x ? Math.floor(1e3 / x) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(x) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = m;
    }
    var z = m;
    m = L;
    try {
      return x();
    } finally {
      m = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(x, L) {
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
    var z = m;
    m = x;
    try {
      return L();
    } finally {
      m = z;
    }
  }, e.unstable_scheduleCallback = function(x, L, z) {
    var W = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? W + z : W) : z = W, x) {
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
    return Y = z + Y, x = { id: h++, callback: L, priorityLevel: x, startTime: z, expirationTime: Y, sortIndex: -1 }, z > W ? (x.sortIndex = z, t(c, x), n(s) === null && x === n(c) && (k ? (f(P), P = -1) : k = !0, Cl(v, z - W))) : (x.sortIndex = Y, t(s, x), w || g || (w = !0, _l(E))), x;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(x) {
    var L = m;
    return function() {
      var z = m;
      m = L;
      try {
        return x.apply(this, arguments);
      } finally {
        m = z;
      }
    };
  };
})(as);
ss.exports = as;
var Tc = ss.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ic = J, ge = Tc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cs = /* @__PURE__ */ new Set(), On = {};
function jt(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) cs.add(t[e]);
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), bl = Object.prototype.hasOwnProperty, Rc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Go = {}, Ko = {};
function Mc(e) {
  return bl.call(Ko, e) ? !0 : bl.call(Go, e) ? !1 : Rc.test(e) ? Ko[e] = !0 : (Go[e] = !0, !1);
}
function jc(e, t, n, r) {
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
function Oc(e, t, n, r) {
  if (t === null || typeof t > "u" || jc(e, t, n, r)) return !0;
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
function ae(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  te[e] = new ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yi = /[\-:]([a-z])/g;
function Zi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Yi,
    Zi
  );
  te[t] = new ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Yi, Zi);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Yi, Zi);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ji(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Oc(t, n, l, r) && (n = null), r || l === null ? Mc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, or = Symbol.for("react.element"), Ft = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), qi = Symbol.for("react.strict_mode"), ei = Symbol.for("react.profiler"), fs = Symbol.for("react.provider"), ds = Symbol.for("react.context"), bi = Symbol.for("react.forward_ref"), ti = Symbol.for("react.suspense"), ni = Symbol.for("react.suspense_list"), eo = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), ps = Symbol.for("react.offscreen"), Xo = Symbol.iterator;
function mn(e) {
  return e === null || typeof e != "object" ? null : (e = Xo && e[Xo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var $ = Object.assign, Ll;
function En(e) {
  if (Ll === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ll = t && t[1] || "";
  }
  return `
` + Ll + e;
}
var zl = !1;
function Tl(e, t) {
  if (!e || zl) return "";
  zl = !0;
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
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
        if (o !== 1 || u !== 1)
          do
            if (o--, u--, 0 > u || l[o] !== i[u]) {
              var s = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    zl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? En(e) : "";
}
function Dc(e) {
  switch (e.tag) {
    case 5:
      return En(e.type);
    case 16:
      return En("Lazy");
    case 13:
      return En("Suspense");
    case 19:
      return En("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Tl(e.type, !1), e;
    case 11:
      return e = Tl(e.type.render, !1), e;
    case 1:
      return e = Tl(e.type, !0), e;
    default:
      return "";
  }
}
function ri(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Ft:
      return "Portal";
    case ei:
      return "Profiler";
    case qi:
      return "StrictMode";
    case ti:
      return "Suspense";
    case ni:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ds:
      return (e.displayName || "Context") + ".Consumer";
    case fs:
      return (e._context.displayName || "Context") + ".Provider";
    case bi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case eo:
      return t = e.displayName || null, t !== null ? t : ri(e.type) || "Memo";
    case et:
      t = e._payload, e = e._init;
      try {
        return ri(e(t));
      } catch {
      }
  }
  return null;
}
function Fc(e) {
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
      return ri(t);
    case 8:
      return t === qi ? "StrictMode" : "Mode";
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
function mt(e) {
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
function ms(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Uc(e) {
  var t = ms(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ur(e) {
  e._valueTracker || (e._valueTracker = Uc(e));
}
function hs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ms(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Or(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function li(e, t) {
  var n = t.checked;
  return $({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Yo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = mt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vs(e, t) {
  t = t.checked, t != null && Ji(e, "checked", t, !1);
}
function ii(e, t) {
  vs(e, t);
  var n = mt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? oi(e, t.type, n) : t.hasOwnProperty("defaultValue") && oi(e, t.type, mt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Zo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function oi(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xn = Array.isArray;
function Yt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ui(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return $({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Jo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(y(92));
      if (xn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: mt(n) };
}
function ys(e, t) {
  var n = mt(t.value), r = mt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function qo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function si(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? gs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var sr, ws = function(e) {
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
function Dn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nn = {
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
}, Ac = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function(e) {
  Ac.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Nn[t] = Nn[e];
  });
});
function ks(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px";
}
function Ss(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = ks(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Vc = $({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ai(e, t) {
  if (t) {
    if (Vc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ci(e, t) {
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
var fi = null;
function to(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var di = null, Zt = null, Jt = null;
function bo(e) {
  if (e = tr(e)) {
    if (typeof di != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = cl(t), di(e.stateNode, e.type, t));
  }
}
function Es(e) {
  Zt ? Jt ? Jt.push(e) : Jt = [e] : Zt = e;
}
function xs() {
  if (Zt) {
    var e = Zt, t = Jt;
    if (Jt = Zt = null, bo(e), t) for (e = 0; e < t.length; e++) bo(t[e]);
  }
}
function _s(e, t) {
  return e(t);
}
function Cs() {
}
var Il = !1;
function Ns(e, t, n) {
  if (Il) return e(t, n);
  Il = !0;
  try {
    return _s(e, t, n);
  } finally {
    Il = !1, (Zt !== null || Jt !== null) && (Cs(), xs());
  }
}
function Fn(e, t) {
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
var pi = !1;
if (Ke) try {
  var hn = {};
  Object.defineProperty(hn, "passive", { get: function() {
    pi = !0;
  } }), window.addEventListener("test", hn, hn), window.removeEventListener("test", hn, hn);
} catch {
  pi = !1;
}
function $c(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Pn = !1, Dr = null, Fr = !1, mi = null, Bc = { onError: function(e) {
  Pn = !0, Dr = e;
} };
function Hc(e, t, n, r, l, i, o, u, s) {
  Pn = !1, Dr = null, $c.apply(Bc, arguments);
}
function Wc(e, t, n, r, l, i, o, u, s) {
  if (Hc.apply(this, arguments), Pn) {
    if (Pn) {
      var c = Dr;
      Pn = !1, Dr = null;
    } else throw Error(y(198));
    Fr || (Fr = !0, mi = c);
  }
}
function Ot(e) {
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
function Ps(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function eu(e) {
  if (Ot(e) !== e) throw Error(y(188));
}
function Qc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ot(e), t === null) throw Error(y(188));
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
        if (i === n) return eu(l), e;
        if (i === r) return eu(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          o = !0, n = l, r = i;
          break;
        }
        if (u === r) {
          o = !0, r = l, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            o = !0, n = i, r = l;
            break;
          }
          if (u === r) {
            o = !0, r = i, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ls(e) {
  return e = Qc(e), e !== null ? zs(e) : null;
}
function zs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ts = ge.unstable_scheduleCallback, tu = ge.unstable_cancelCallback, Gc = ge.unstable_shouldYield, Kc = ge.unstable_requestPaint, Q = ge.unstable_now, Xc = ge.unstable_getCurrentPriorityLevel, no = ge.unstable_ImmediatePriority, Is = ge.unstable_UserBlockingPriority, Ur = ge.unstable_NormalPriority, Yc = ge.unstable_LowPriority, Rs = ge.unstable_IdlePriority, ol = null, Ae = null;
function Zc(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function") try {
    Ae.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Me = Math.clz32 ? Math.clz32 : bc, Jc = Math.log, qc = Math.LN2;
function bc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Jc(e) / qc | 0) | 0;
}
var ar = 64, cr = 4194304;
function _n(e) {
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
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = _n(u) : (i &= o, i !== 0 && (r = _n(i)));
  } else o = n & ~l, o !== 0 ? r = _n(o) : i !== 0 && (r = _n(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Me(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function ef(e, t) {
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
function tf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Me(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = ef(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function hi(e) {
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
function bn(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Me(t), e[t] = n;
}
function nf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function ro(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var M = 0;
function js(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Os, lo, Ds, Fs, Us, vi = !1, fr = [], ot = null, ut = null, st = null, Un = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), nt = [], rf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function nu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      ut = null;
      break;
    case "mouseover":
    case "mouseout":
      st = null;
      break;
    case "pointerover":
    case "pointerout":
      Un.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      An.delete(t.pointerId);
  }
}
function vn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = tr(t), t !== null && lo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function lf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ot = vn(ot, e, t, n, r, l), !0;
    case "dragenter":
      return ut = vn(ut, e, t, n, r, l), !0;
    case "mouseover":
      return st = vn(st, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Un.set(i, vn(Un.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, An.set(i, vn(An.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function As(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Ot(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ps(n), t !== null) {
          e.blockedOn = t, Us(e.priority, function() {
            Ds(n);
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
    var n = yi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fi = r, n.target.dispatchEvent(r), fi = null;
    } else return t = tr(n), t !== null && lo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ru(e, t, n) {
  Cr(e) && n.delete(t);
}
function of() {
  vi = !1, ot !== null && Cr(ot) && (ot = null), ut !== null && Cr(ut) && (ut = null), st !== null && Cr(st) && (st = null), Un.forEach(ru), An.forEach(ru);
}
function yn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vi || (vi = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, of)));
}
function Vn(e) {
  function t(l) {
    return yn(l, e);
  }
  if (0 < fr.length) {
    yn(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var r = fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ot !== null && yn(ot, e), ut !== null && yn(ut, e), st !== null && yn(st, e), Un.forEach(t), An.forEach(t), n = 0; n < nt.length; n++) r = nt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && (n = nt[0], n.blockedOn === null); ) As(n), n.blockedOn === null && nt.shift();
}
var qt = Je.ReactCurrentBatchConfig, Vr = !0;
function uf(e, t, n, r) {
  var l = M, i = qt.transition;
  qt.transition = null;
  try {
    M = 1, io(e, t, n, r);
  } finally {
    M = l, qt.transition = i;
  }
}
function sf(e, t, n, r) {
  var l = M, i = qt.transition;
  qt.transition = null;
  try {
    M = 4, io(e, t, n, r);
  } finally {
    M = l, qt.transition = i;
  }
}
function io(e, t, n, r) {
  if (Vr) {
    var l = yi(e, t, n, r);
    if (l === null) Bl(e, t, r, $r, n), nu(e, r);
    else if (lf(l, e, t, n, r)) r.stopPropagation();
    else if (nu(e, r), t & 4 && -1 < rf.indexOf(e)) {
      for (; l !== null; ) {
        var i = tr(l);
        if (i !== null && Os(i), i = yi(e, t, n, r), i === null && Bl(e, t, r, $r, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Bl(e, t, r, null, n);
  }
}
var $r = null;
function yi(e, t, n, r) {
  if ($r = null, e = to(r), e = xt(e), e !== null) if (t = Ot(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ps(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return $r = e, null;
}
function Vs(e) {
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
      switch (Xc()) {
        case no:
          return 1;
        case Is:
          return 4;
        case Ur:
        case Yc:
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
var lt = null, oo = null, Nr = null;
function $s() {
  if (Nr) return Nr;
  var e, t = oo, n = t.length, r, l = "value" in lt ? lt.value : lt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Nr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Pr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function dr() {
  return !0;
}
function lu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? dr : lu, this.isPropagationStopped = lu, this;
  }
  return $(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = dr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = dr);
  }, persist: function() {
  }, isPersistent: dr }), t;
}
var cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, uo = ke(cn), er = $({}, cn, { view: 0, detail: 0 }), af = ke(er), Ml, jl, gn, ul = $({}, er, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: so, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (Ml = e.screenX - gn.screenX, jl = e.screenY - gn.screenY) : jl = Ml = 0, gn = e), Ml);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : jl;
} }), iu = ke(ul), cf = $({}, ul, { dataTransfer: 0 }), ff = ke(cf), df = $({}, er, { relatedTarget: 0 }), Ol = ke(df), pf = $({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mf = ke(pf), hf = $({}, cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), vf = ke(hf), yf = $({}, cn, { data: 0 }), ou = ke(yf), gf = {
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
}, wf = {
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
}, kf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Sf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kf[e]) ? !!t[e] : !1;
}
function so() {
  return Sf;
}
var Ef = $({}, er, { key: function(e) {
  if (e.key) {
    var t = gf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Pr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: so, charCode: function(e) {
  return e.type === "keypress" ? Pr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), xf = ke(Ef), _f = $({}, ul, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uu = ke(_f), Cf = $({}, er, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: so }), Nf = ke(Cf), Pf = $({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lf = ke(Pf), zf = $({}, ul, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Tf = ke(zf), If = [9, 13, 27, 32], ao = Ke && "CompositionEvent" in window, Ln = null;
Ke && "documentMode" in document && (Ln = document.documentMode);
var Rf = Ke && "TextEvent" in window && !Ln, Bs = Ke && (!ao || Ln && 8 < Ln && 11 >= Ln), su = " ", au = !1;
function Hs(e, t) {
  switch (e) {
    case "keyup":
      return If.indexOf(t.keyCode) !== -1;
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
function Ws(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function Mf(e, t) {
  switch (e) {
    case "compositionend":
      return Ws(t);
    case "keypress":
      return t.which !== 32 ? null : (au = !0, su);
    case "textInput":
      return e = t.data, e === su && au ? null : e;
    default:
      return null;
  }
}
function jf(e, t) {
  if (At) return e === "compositionend" || !ao && Hs(e, t) ? (e = $s(), Nr = oo = lt = null, At = !1, e) : null;
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
      return Bs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Of = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Of[e.type] : t === "textarea";
}
function Qs(e, t, n, r) {
  Es(r), t = Br(t, "onChange"), 0 < t.length && (n = new uo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var zn = null, $n = null;
function Df(e) {
  na(e, 0);
}
function sl(e) {
  var t = Bt(e);
  if (hs(t)) return e;
}
function Ff(e, t) {
  if (e === "change") return t;
}
var Gs = !1;
if (Ke) {
  var Dl;
  if (Ke) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var fu = document.createElement("div");
      fu.setAttribute("oninput", "return;"), Fl = typeof fu.oninput == "function";
    }
    Dl = Fl;
  } else Dl = !1;
  Gs = Dl && (!document.documentMode || 9 < document.documentMode);
}
function du() {
  zn && (zn.detachEvent("onpropertychange", Ks), $n = zn = null);
}
function Ks(e) {
  if (e.propertyName === "value" && sl($n)) {
    var t = [];
    Qs(t, $n, e, to(e)), Ns(Df, t);
  }
}
function Uf(e, t, n) {
  e === "focusin" ? (du(), zn = t, $n = n, zn.attachEvent("onpropertychange", Ks)) : e === "focusout" && du();
}
function Af(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return sl($n);
}
function Vf(e, t) {
  if (e === "click") return sl(t);
}
function $f(e, t) {
  if (e === "input" || e === "change") return sl(t);
}
function Bf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Oe = typeof Object.is == "function" ? Object.is : Bf;
function Bn(e, t) {
  if (Oe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!bl.call(t, l) || !Oe(e[l], t[l])) return !1;
  }
  return !0;
}
function pu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function mu(e, t) {
  var n = pu(e);
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
    n = pu(n);
  }
}
function Xs(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ys() {
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
function co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Hf(e) {
  var t = Ys(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Xs(n.ownerDocument.documentElement, n)) {
    if (r !== null && co(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = mu(n, i);
        var o = mu(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Wf = Ke && "documentMode" in document && 11 >= document.documentMode, Vt = null, gi = null, Tn = null, wi = !1;
function hu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wi || Vt == null || Vt !== Or(r) || (r = Vt, "selectionStart" in r && co(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Tn && Bn(Tn, r) || (Tn = r, r = Br(gi, "onSelect"), 0 < r.length && (t = new uo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Vt)));
}
function pr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var $t = { animationend: pr("Animation", "AnimationEnd"), animationiteration: pr("Animation", "AnimationIteration"), animationstart: pr("Animation", "AnimationStart"), transitionend: pr("Transition", "TransitionEnd") }, Ul = {}, Zs = {};
Ke && (Zs = document.createElement("div").style, "AnimationEvent" in window || (delete $t.animationend.animation, delete $t.animationiteration.animation, delete $t.animationstart.animation), "TransitionEvent" in window || delete $t.transitionend.transition);
function al(e) {
  if (Ul[e]) return Ul[e];
  if (!$t[e]) return e;
  var t = $t[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zs) return Ul[e] = t[n];
  return e;
}
var Js = al("animationend"), qs = al("animationiteration"), bs = al("animationstart"), ea = al("transitionend"), ta = /* @__PURE__ */ new Map(), vu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function vt(e, t) {
  ta.set(e, t), jt(t, [e]);
}
for (var Al = 0; Al < vu.length; Al++) {
  var Vl = vu[Al], Qf = Vl.toLowerCase(), Gf = Vl[0].toUpperCase() + Vl.slice(1);
  vt(Qf, "on" + Gf);
}
vt(Js, "onAnimationEnd");
vt(qs, "onAnimationIteration");
vt(bs, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(ea, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
jt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));
function yu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Wc(r, t, void 0, e), e.currentTarget = null;
}
function na(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        yu(l, u, c), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, c = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        yu(l, u, c), i = s;
      }
    }
  }
  if (Fr) throw e = mi, Fr = !1, mi = null, e;
}
function O(e, t) {
  var n = t[_i];
  n === void 0 && (n = t[_i] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ra(t, e, 2, !1), n.add(r));
}
function $l(e, t, n) {
  var r = 0;
  t && (r |= 4), ra(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Hn(e) {
  if (!e[mr]) {
    e[mr] = !0, cs.forEach(function(n) {
      n !== "selectionchange" && (Kf.has(n) || $l(n, !1, e), $l(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || (t[mr] = !0, $l("selectionchange", !1, t));
  }
}
function ra(e, t, n, r) {
  switch (Vs(t)) {
    case 1:
      var l = uf;
      break;
    case 4:
      l = sf;
      break;
    default:
      l = io;
  }
  n = l.bind(null, t, n, e), l = void 0, !pi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Bl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = xt(u), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Ns(function() {
    var c = i, h = to(n), p = [];
    e: {
      var m = ta.get(e);
      if (m !== void 0) {
        var g = uo, w = e;
        switch (e) {
          case "keypress":
            if (Pr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = xf;
            break;
          case "focusin":
            w = "focus", g = Ol;
            break;
          case "focusout":
            w = "blur", g = Ol;
            break;
          case "beforeblur":
          case "afterblur":
            g = Ol;
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
            g = iu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = ff;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Nf;
            break;
          case Js:
          case qs:
          case bs:
            g = mf;
            break;
          case ea:
            g = Lf;
            break;
          case "scroll":
            g = af;
            break;
          case "wheel":
            g = Tf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = uu;
        }
        var k = (t & 4) !== 0, F = !k && e === "scroll", f = k ? m !== null ? m + "Capture" : null : m;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Fn(a, f), v != null && k.push(Wn(a, v, d)))), F) break;
          a = a.return;
        }
        0 < k.length && (m = new g(m, w, null, n, h), p.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && n !== fi && (w = n.relatedTarget || n.fromElement) && (xt(w) || w[Xe])) break e;
        if ((g || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? xt(w) : null, w !== null && (F = Ot(w), w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (k = iu, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = uu, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), F = g == null ? m : Bt(g), d = w == null ? m : Bt(w), m = new k(v, a + "leave", g, n, h), m.target = F, m.relatedTarget = d, v = null, xt(h) === c && (k = new k(f, a + "enter", w, n, h), k.target = d, k.relatedTarget = F, v = k), F = v, g && w) t: {
            for (k = g, f = w, a = 0, d = k; d; d = Dt(d)) a++;
            for (d = 0, v = f; v; v = Dt(v)) d++;
            for (; 0 < a - d; ) k = Dt(k), a--;
            for (; 0 < d - a; ) f = Dt(f), d--;
            for (; a--; ) {
              if (k === f || f !== null && k === f.alternate) break t;
              k = Dt(k), f = Dt(f);
            }
            k = null;
          }
          else k = null;
          g !== null && gu(p, m, g, k, !1), w !== null && F !== null && gu(p, F, w, k, !0);
        }
      }
      e: {
        if (m = c ? Bt(c) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var E = Ff;
        else if (cu(m)) if (Gs) E = $f;
        else {
          E = Af;
          var C = Uf;
        }
        else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = Vf);
        if (E && (E = E(e, c))) {
          Qs(p, E, n, h);
          break e;
        }
        C && C(e, m, c), e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && oi(m, "number", m.value);
      }
      switch (C = c ? Bt(c) : window, e) {
        case "focusin":
          (cu(C) || C.contentEditable === "true") && (Vt = C, gi = c, Tn = null);
          break;
        case "focusout":
          Tn = gi = Vt = null;
          break;
        case "mousedown":
          wi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wi = !1, hu(p, n, h);
          break;
        case "selectionchange":
          if (Wf) break;
        case "keydown":
        case "keyup":
          hu(p, n, h);
      }
      var N;
      if (ao) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else At ? Hs(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Bs && n.locale !== "ko" && (At || P !== "onCompositionStart" ? P === "onCompositionEnd" && At && (N = $s()) : (lt = h, oo = "value" in lt ? lt.value : lt.textContent, At = !0)), C = Br(c, P), 0 < C.length && (P = new ou(P, e, null, n, h), p.push({ event: P, listeners: C }), N ? P.data = N : (N = Ws(n), N !== null && (P.data = N)))), (N = Rf ? Mf(e, n) : jf(e, n)) && (c = Br(c, "onBeforeInput"), 0 < c.length && (h = new ou("onBeforeInput", "beforeinput", null, n, h), p.push({ event: h, listeners: c }), h.data = N));
    }
    na(p, t);
  });
}
function Wn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Fn(e, n), i != null && r.unshift(Wn(e, i, l)), i = Fn(e, t), i != null && r.push(Wn(e, i, l))), e = e.return;
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function gu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Fn(n, i), s != null && o.unshift(Wn(n, s, u))) : l || (s = Fn(n, i), s != null && o.push(Wn(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Xf = /\r\n?/g, Yf = /\u0000|\uFFFD/g;
function wu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Xf, `
`).replace(Yf, "");
}
function hr(e, t, n) {
  if (t = wu(t), wu(e) !== t && n) throw Error(y(425));
}
function Hr() {
}
var ki = null, Si = null;
function Ei(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xi = typeof setTimeout == "function" ? setTimeout : void 0, Zf = typeof clearTimeout == "function" ? clearTimeout : void 0, ku = typeof Promise == "function" ? Promise : void 0, Jf = typeof queueMicrotask == "function" ? queueMicrotask : typeof ku < "u" ? function(e) {
  return ku.resolve(null).then(e).catch(qf);
} : xi;
function qf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Hl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Vn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Vn(t);
}
function at(e) {
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
function Su(e) {
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
var fn = Math.random().toString(36).slice(2), Ue = "__reactFiber$" + fn, Qn = "__reactProps$" + fn, Xe = "__reactContainer$" + fn, _i = "__reactEvents$" + fn, bf = "__reactListeners$" + fn, ed = "__reactHandles$" + fn;
function xt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Xe] || n[Ue]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Su(e); e !== null; ) {
        if (n = e[Ue]) return n;
        e = Su(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function tr(e) {
  return e = e[Ue] || e[Xe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function cl(e) {
  return e[Qn] || null;
}
var Ci = [], Ht = -1;
function yt(e) {
  return { current: e };
}
function D(e) {
  0 > Ht || (e.current = Ci[Ht], Ci[Ht] = null, Ht--);
}
function j(e, t) {
  Ht++, Ci[Ht] = e.current, e.current = t;
}
var ht = {}, ie = yt(ht), de = yt(!1), zt = ht;
function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function pe(e) {
  return e = e.childContextTypes, e != null;
}
function Wr() {
  D(de), D(ie);
}
function Eu(e, t, n) {
  if (ie.current !== ht) throw Error(y(168));
  j(ie, t), j(de, n);
}
function la(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Fc(e) || "Unknown", l));
  return $({}, n, r);
}
function Qr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ht, zt = ie.current, j(ie, e), j(de, de.current), !0;
}
function xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = la(e, t, zt), r.__reactInternalMemoizedMergedChildContext = e, D(de), D(ie), j(ie, e)) : D(de), j(de, n);
}
var He = null, fl = !1, Wl = !1;
function ia(e) {
  He === null ? He = [e] : He.push(e);
}
function td(e) {
  fl = !0, ia(e);
}
function gt() {
  if (!Wl && He !== null) {
    Wl = !0;
    var e = 0, t = M;
    try {
      var n = He;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      He = null, fl = !1;
    } catch (l) {
      throw He !== null && (He = He.slice(e + 1)), Ts(no, gt), l;
    } finally {
      M = t, Wl = !1;
    }
  }
  return null;
}
var Wt = [], Qt = 0, Gr = null, Kr = 0, Se = [], Ee = 0, Tt = null, We = 1, Qe = "";
function St(e, t) {
  Wt[Qt++] = Kr, Wt[Qt++] = Gr, Gr = e, Kr = t;
}
function oa(e, t, n) {
  Se[Ee++] = We, Se[Ee++] = Qe, Se[Ee++] = Tt, Tt = e;
  var r = We;
  e = Qe;
  var l = 32 - Me(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Me(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, We = 1 << 32 - Me(t) + l | n << l | r, Qe = i + e;
  } else We = 1 << i | n << l | r, Qe = e;
}
function fo(e) {
  e.return !== null && (St(e, 1), oa(e, 1, 0));
}
function po(e) {
  for (; e === Gr; ) Gr = Wt[--Qt], Wt[Qt] = null, Kr = Wt[--Qt], Wt[Qt] = null;
  for (; e === Tt; ) Tt = Se[--Ee], Se[Ee] = null, Qe = Se[--Ee], Se[Ee] = null, We = Se[--Ee], Se[Ee] = null;
}
var ye = null, ve = null, U = !1, Re = null;
function ua(e, t) {
  var n = xe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function _u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = at(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tt !== null ? { id: We, overflow: Qe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function Ni(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pi(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!_u(e, t)) {
        if (Ni(e)) throw Error(y(418));
        t = at(n.nextSibling);
        var r = ye;
        t && _u(e, t) ? ua(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, ye = e);
      }
    } else {
      if (Ni(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, U = !1, ye = e;
    }
  }
}
function Cu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ye = e;
}
function vr(e) {
  if (e !== ye) return !1;
  if (!U) return Cu(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ei(e.type, e.memoizedProps)), t && (t = ve)) {
    if (Ni(e)) throw sa(), Error(y(418));
    for (; t; ) ua(e, t), t = at(t.nextSibling);
  }
  if (Cu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = at(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? at(e.stateNode.nextSibling) : null;
  return !0;
}
function sa() {
  for (var e = ve; e; ) e = at(e.nextSibling);
}
function rn() {
  ve = ye = null, U = !1;
}
function mo(e) {
  Re === null ? Re = [e] : Re.push(e);
}
var nd = Je.ReactCurrentBatchConfig;
function wn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function yr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Nu(e) {
  var t = e._init;
  return t(e._payload);
}
function aa(e) {
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
    return f = pt(f, a), f.index = 0, f.sibling = null, f;
  }
  function i(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Jl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Ut ? h(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === et && Nu(E) === a.type) ? (v = l(a, d.props), v.ref = wn(f, a, d), v.return = f, v) : (v = jr(d.type, d.key, d.props, null, f.mode, v), v.ref = wn(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = ql(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = Pt(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function p(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Jl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case or:
          return d = jr(a.type, a.key, a.props, null, f.mode, d), d.ref = wn(f, null, a), d.return = f, d;
        case Ft:
          return a = ql(a, f.mode, d), a.return = f, a;
        case et:
          var v = a._init;
          return p(f, v(a._payload), d);
      }
      if (xn(a) || mn(a)) return a = Pt(a, f.mode, d, null), a.return = f, a;
      yr(f, a);
    }
    return null;
  }
  function m(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case or:
          return d.key === E ? s(f, a, d, v) : null;
        case Ft:
          return d.key === E ? c(f, a, d, v) : null;
        case et:
          return E = d._init, m(
            f,
            a,
            E(d._payload),
            v
          );
      }
      if (xn(d) || mn(d)) return E !== null ? null : h(f, a, d, v, null);
      yr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case or:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case Ft:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case et:
          var C = v._init;
          return g(f, a, d, C(v._payload), E);
      }
      if (xn(v) || mn(v)) return f = f.get(d) || null, h(a, f, v, E, null);
      yr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, C = null, N = a, P = a = 0, H = null; N !== null && P < d.length; P++) {
      N.index > P ? (H = N, N = null) : H = N.sibling;
      var I = m(f, N, d[P], v);
      if (I === null) {
        N === null && (N = H);
        break;
      }
      e && N && I.alternate === null && t(f, N), a = i(I, a, P), C === null ? E = I : C.sibling = I, C = I, N = H;
    }
    if (P === d.length) return n(f, N), U && St(f, P), E;
    if (N === null) {
      for (; P < d.length; P++) N = p(f, d[P], v), N !== null && (a = i(N, a, P), C === null ? E = N : C.sibling = N, C = N);
      return U && St(f, P), E;
    }
    for (N = r(f, N); P < d.length; P++) H = g(N, f, P, d[P], v), H !== null && (e && H.alternate !== null && N.delete(H.key === null ? P : H.key), a = i(H, a, P), C === null ? E = H : C.sibling = H, C = H);
    return e && N.forEach(function(Pe) {
      return t(f, Pe);
    }), U && St(f, P), E;
  }
  function k(f, a, d, v) {
    var E = mn(d);
    if (typeof E != "function") throw Error(y(150));
    if (d = E.call(d), d == null) throw Error(y(151));
    for (var C = E = null, N = a, P = a = 0, H = null, I = d.next(); N !== null && !I.done; P++, I = d.next()) {
      N.index > P ? (H = N, N = null) : H = N.sibling;
      var Pe = m(f, N, I.value, v);
      if (Pe === null) {
        N === null && (N = H);
        break;
      }
      e && N && Pe.alternate === null && t(f, N), a = i(Pe, a, P), C === null ? E = Pe : C.sibling = Pe, C = Pe, N = H;
    }
    if (I.done) return n(
      f,
      N
    ), U && St(f, P), E;
    if (N === null) {
      for (; !I.done; P++, I = d.next()) I = p(f, I.value, v), I !== null && (a = i(I, a, P), C === null ? E = I : C.sibling = I, C = I);
      return U && St(f, P), E;
    }
    for (N = r(f, N); !I.done; P++, I = d.next()) I = g(N, f, P, I.value, v), I !== null && (e && I.alternate !== null && N.delete(I.key === null ? P : I.key), a = i(I, a, P), C === null ? E = I : C.sibling = I, C = I);
    return e && N.forEach(function(dn) {
      return t(f, dn);
    }), U && St(f, P), E;
  }
  function F(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Ut && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case or:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (E = d.type, E === Ut) {
                  if (C.tag === 7) {
                    n(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === et && Nu(E) === C.type) {
                  n(f, C.sibling), a = l(C, d.props), a.ref = wn(f, C, d), a.return = f, f = a;
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Ut ? (a = Pt(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = jr(d.type, d.key, d.props, null, f.mode, v), v.ref = wn(f, a, d), v.return = f, f = v);
          }
          return o(f);
        case Ft:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = ql(d, f.mode, v), a.return = f, f = a;
          }
          return o(f);
        case et:
          return C = d._init, F(f, a, C(d._payload), v);
      }
      if (xn(d)) return w(f, a, d, v);
      if (mn(d)) return k(f, a, d, v);
      yr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Jl(d, f.mode, v), a.return = f, f = a), o(f)) : n(f, a);
  }
  return F;
}
var ln = aa(!0), ca = aa(!1), Xr = yt(null), Yr = null, Gt = null, ho = null;
function vo() {
  ho = Gt = Yr = null;
}
function yo(e) {
  var t = Xr.current;
  D(Xr), e._currentValue = t;
}
function Li(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function bt(e, t) {
  Yr = e, ho = Gt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null);
}
function Ce(e) {
  var t = e._currentValue;
  if (ho !== e) if (e = { context: e, memoizedValue: t, next: null }, Gt === null) {
    if (Yr === null) throw Error(y(308));
    Gt = e, Yr.dependencies = { lanes: 0, firstContext: e };
  } else Gt = Gt.next = e;
  return t;
}
var _t = null;
function go(e) {
  _t === null ? _t = [e] : _t.push(e);
}
function fa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, go(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ye(e, r);
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function wo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function da(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ge(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ye(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, go(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ye(e, n);
}
function Lr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ro(e, n);
  }
}
function Pu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  tt = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, o === null ? i = c : o.next = c, o = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== o && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = s));
  }
  if (i !== null) {
    var p = l.baseState;
    o = 0, h = c = s = null, u = i;
    do {
      var m = u.lane, g = u.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, k = u;
          switch (m = t, g = n, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                p = w.call(g, p, m);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, m = typeof w == "function" ? w.call(g, p, m) : w, m == null) break e;
              p = $({}, p, m);
              break e;
            case 2:
              tt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else g = { eventTime: g, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = g, s = p) : h = h.next = g, o |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = p), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Rt |= o, e.lanes = o, e.memoizedState = p;
  }
}
function Lu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var nr = {}, Ve = yt(nr), Gn = yt(nr), Kn = yt(nr);
function Ct(e) {
  if (e === nr) throw Error(y(174));
  return e;
}
function ko(e, t) {
  switch (j(Kn, t), j(Gn, e), j(Ve, nr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : si(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = si(t, e);
  }
  D(Ve), j(Ve, t);
}
function on() {
  D(Ve), D(Gn), D(Kn);
}
function pa(e) {
  Ct(Kn.current);
  var t = Ct(Ve.current), n = si(t, e.type);
  t !== n && (j(Gn, e), j(Ve, n));
}
function So(e) {
  Gn.current === e && (D(Ve), D(Gn));
}
var A = yt(0);
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
var Ql = [];
function Eo() {
  for (var e = 0; e < Ql.length; e++) Ql[e]._workInProgressVersionPrimary = null;
  Ql.length = 0;
}
var zr = Je.ReactCurrentDispatcher, Gl = Je.ReactCurrentBatchConfig, It = 0, V = null, K = null, Z = null, qr = !1, In = !1, Xn = 0, rd = 0;
function ne() {
  throw Error(y(321));
}
function xo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Oe(e[n], t[n])) return !1;
  return !0;
}
function _o(e, t, n, r, l, i) {
  if (It = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zr.current = e === null || e.memoizedState === null ? ud : sd, e = n(r, l), In) {
    i = 0;
    do {
      if (In = !1, Xn = 0, 25 <= i) throw Error(y(301));
      i += 1, Z = K = null, t.updateQueue = null, zr.current = ad, e = n(r, l);
    } while (In);
  }
  if (zr.current = br, t = K !== null && K.next !== null, It = 0, Z = K = V = null, qr = !1, t) throw Error(y(300));
  return e;
}
function Co() {
  var e = Xn !== 0;
  return Xn = 0, e;
}
function Fe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? V.memoizedState = Z = e : Z = Z.next = e, Z;
}
function Ne() {
  if (K === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = Z === null ? V.memoizedState : Z.next;
  if (t !== null) Z = t, K = e;
  else {
    if (e === null) throw Error(y(310));
    K = e, e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, Z === null ? V.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Kl(e) {
  var t = Ne(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = K, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var u = o = null, s = null, c = i;
    do {
      var h = c.lane;
      if ((It & h) === h) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var p = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = p, o = r) : s = s.next = p, V.lanes |= h, Rt |= h;
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? o = r : s.next = u, Oe(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, V.lanes |= i, Rt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xl(e) {
  var t = Ne(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Oe(i, t.memoizedState) || (fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ma() {
}
function ha(e, t) {
  var n = V, r = Ne(), l = t(), i = !Oe(r.memoizedState, l);
  if (i && (r.memoizedState = l, fe = !0), r = r.queue, No(ga.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Z !== null && Z.memoizedState.tag & 1) {
    if (n.flags |= 2048, Zn(9, ya.bind(null, n, r, l, t), void 0, null), q === null) throw Error(y(349));
    It & 30 || va(n, t, l);
  }
  return l;
}
function va(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ya(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wa(t) && ka(e);
}
function ga(e, t, n) {
  return n(function() {
    wa(t) && ka(e);
  });
}
function wa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Oe(e, n);
  } catch {
    return !0;
  }
}
function ka(e) {
  var t = Ye(e, 1);
  t !== null && je(t, e, 1, -1);
}
function zu(e) {
  var t = Fe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yn, lastRenderedState: e }, t.queue = e, e = e.dispatch = od.bind(null, V, e), [t.memoizedState, e];
}
function Zn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Sa() {
  return Ne().memoizedState;
}
function Tr(e, t, n, r) {
  var l = Fe();
  V.flags |= e, l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r);
}
function dl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (K !== null) {
    var o = K.memoizedState;
    if (i = o.destroy, r !== null && xo(r, o.deps)) {
      l.memoizedState = Zn(t, n, i, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = Zn(1 | t, n, i, r);
}
function Tu(e, t) {
  return Tr(8390656, 8, e, t);
}
function No(e, t) {
  return dl(2048, 8, e, t);
}
function Ea(e, t) {
  return dl(4, 2, e, t);
}
function xa(e, t) {
  return dl(4, 4, e, t);
}
function _a(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ca(e, t, n) {
  return n = n != null ? n.concat([e]) : null, dl(4, 4, _a.bind(null, t, e), n);
}
function Po() {
}
function Na(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function La(e, t, n) {
  return It & 21 ? (Oe(n, t) || (n = Ms(), V.lanes |= n, Rt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n);
}
function ld(e, t) {
  var n = M;
  M = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Gl.transition;
  Gl.transition = {};
  try {
    e(!1), t();
  } finally {
    M = n, Gl.transition = r;
  }
}
function za() {
  return Ne().memoizedState;
}
function id(e, t, n) {
  var r = dt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ta(e)) Ia(t, n);
  else if (n = fa(e, t, n, r), n !== null) {
    var l = ue();
    je(n, e, r, l), Ra(n, t, r);
  }
}
function od(e, t, n) {
  var r = dt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ta(e)) Ia(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Oe(u, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, go(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = fa(e, t, l, r), n !== null && (l = ue(), je(n, e, r, l), Ra(n, t, r));
  }
}
function Ta(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function Ia(e, t) {
  In = qr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ra(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ro(e, n);
  }
}
var br = { readContext: Ce, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, ud = { readContext: Ce, useCallback: function(e, t) {
  return Fe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ce, useEffect: Tu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Tr(
    4194308,
    4,
    _a.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = id.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Fe();
  return e = { current: e }, t.memoizedState = e;
}, useState: zu, useDebugValue: Po, useDeferredValue: function(e) {
  return Fe().memoizedState = e;
}, useTransition: function() {
  var e = zu(!1), t = e[0];
  return e = ld.bind(null, e[1]), Fe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = Fe();
  if (U) {
    if (n === void 0) throw Error(y(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(y(349));
    It & 30 || va(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Tu(ga.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Zn(9, ya.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Fe(), t = q.identifierPrefix;
  if (U) {
    var n = Qe, r = We;
    n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = rd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, sd = {
  readContext: Ce,
  useCallback: Na,
  useContext: Ce,
  useEffect: No,
  useImperativeHandle: Ca,
  useInsertionEffect: Ea,
  useLayoutEffect: xa,
  useMemo: Pa,
  useReducer: Kl,
  useRef: Sa,
  useState: function() {
    return Kl(Yn);
  },
  useDebugValue: Po,
  useDeferredValue: function(e) {
    var t = Ne();
    return La(t, K.memoizedState, e);
  },
  useTransition: function() {
    var e = Kl(Yn)[0], t = Ne().memoizedState;
    return [e, t];
  },
  useMutableSource: ma,
  useSyncExternalStore: ha,
  useId: za,
  unstable_isNewReconciler: !1
}, ad = { readContext: Ce, useCallback: Na, useContext: Ce, useEffect: No, useImperativeHandle: Ca, useInsertionEffect: Ea, useLayoutEffect: xa, useMemo: Pa, useReducer: Xl, useRef: Sa, useState: function() {
  return Xl(Yn);
}, useDebugValue: Po, useDeferredValue: function(e) {
  var t = Ne();
  return K === null ? t.memoizedState = e : La(t, K.memoizedState, e);
}, useTransition: function() {
  var e = Xl(Yn)[0], t = Ne().memoizedState;
  return [e, t];
}, useMutableSource: ma, useSyncExternalStore: ha, useId: za, unstable_isNewReconciler: !1 };
function Te(e, t) {
  if (e && e.defaultProps) {
    t = $({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : $({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ot(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = dt(e), i = Ge(r, l);
  i.payload = t, n != null && (i.callback = n), t = ct(e, i, l), t !== null && (je(t, e, l, r), Lr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = dt(e), i = Ge(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ct(e, i, l), t !== null && (je(t, e, l, r), Lr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ue(), r = dt(e), l = Ge(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ct(e, l, r), t !== null && (je(t, e, r, n), Lr(t, e, r));
} };
function Iu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Bn(n, r) || !Bn(l, i) : !0;
}
function Ma(e, t, n) {
  var r = !1, l = ht, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ce(i) : (l = pe(t) ? zt : ie.current, r = t.contextTypes, i = (r = r != null) ? nn(e, l) : ht), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ru(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function Ti(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, wo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ce(i) : (i = pe(t) ? zt : ie.current, l.context = nn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (zi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && pl.enqueueReplaceState(l, l.state, null), Zr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function un(e, t) {
  try {
    var n = "", r = t;
    do
      n += Dc(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Yl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ii(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cd = typeof WeakMap == "function" ? WeakMap : Map;
function ja(e, t, n) {
  n = Ge(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    tl || (tl = !0, $i = r), Ii(e, t);
  }, n;
}
function Oa(e, t, n) {
  n = Ge(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ii(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ii(e, t), typeof r != "function" && (ft === null ? ft = /* @__PURE__ */ new Set([this]) : ft.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = _d.bind(null, e, t, n), t.then(e, e));
}
function ju(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ge(-1, 1), t.tag = 2, ct(n, t, 1))), n.lanes |= 1), e);
}
var fd = Je.ReactCurrentOwner, fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? ca(t, null, n, r) : ln(t, e.child, n, r);
}
function Du(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return bt(t, l), r = _o(e, t, n, r, i, l), n = Co(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (U && n && fo(t), t.flags |= 1, oe(e, t, r, l), t.child);
}
function Fu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Oo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Da(e, t, i, r, l)) : (e = jr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Bn, n(o, r) && e.ref === t.ref) return Ze(e, t, l);
  }
  return t.flags |= 1, e = pt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Da(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bn(i, r) && e.ref === t.ref) if (fe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
    else return t.lanes = e.lanes, Ze(e, t, l);
  }
  return Ri(e, t, n, r, l);
}
function Fa(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, j(Xt, he), he |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, j(Xt, he), he |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, j(Xt, he), he |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, j(Xt, he), he |= r;
  return oe(e, t, l, n), t.child;
}
function Ua(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ri(e, t, n, r, l) {
  var i = pe(n) ? zt : ie.current;
  return i = nn(t, i), bt(t, l), n = _o(e, t, n, r, i, l), r = Co(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (U && r && fo(t), t.flags |= 1, oe(e, t, n, l), t.child);
}
function Uu(e, t, n, r, l) {
  if (pe(n)) {
    var i = !0;
    Qr(t);
  } else i = !1;
  if (bt(t, l), t.stateNode === null) Ir(e, t), Ma(t, n, r), Ti(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ce(c) : (c = pe(n) ? zt : ie.current, c = nn(t, c));
    var h = n.getDerivedStateFromProps, p = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && Ru(t, o, r, c), tt = !1;
    var m = t.memoizedState;
    o.state = m, Zr(t, r, o, l), s = t.memoizedState, u !== r || m !== s || de.current || tt ? (typeof h == "function" && (zi(t, n, h, r), s = t.memoizedState), (u = tt || Iu(t, n, u, r, m, s, c)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = c, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, da(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Te(t.type, u), o.props = c, p = t.pendingProps, m = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ce(s) : (s = pe(n) ? zt : ie.current, s = nn(t, s));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== p || m !== s) && Ru(t, o, r, s), tt = !1, m = t.memoizedState, o.state = m, Zr(t, r, o, l);
    var w = t.memoizedState;
    u !== p || m !== w || de.current || tt ? (typeof g == "function" && (zi(t, n, g, r), w = t.memoizedState), (c = tt || Iu(t, n, c, r, m, w, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Mi(e, t, n, r, i, l);
}
function Mi(e, t, n, r, l, i) {
  Ua(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && xu(t, n, !1), Ze(e, t, i);
  r = t.stateNode, fd.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ln(t, e.child, null, i), t.child = ln(t, null, u, i)) : oe(e, t, u, i), t.memoizedState = r.state, l && xu(t, n, !0), t.child;
}
function Aa(e) {
  var t = e.stateNode;
  t.pendingContext ? Eu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Eu(e, t.context, !1), ko(e, t.containerInfo);
}
function Au(e, t, n, r, l) {
  return rn(), mo(l), t.flags |= 256, oe(e, t, n, r), t.child;
}
var ji = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Va(e, t, n) {
  var r = t.pendingProps, l = A.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), j(A, l & 1), e === null)
    return Pi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = vl(o, r, 0, null), e = Pt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Oi(n), t.memoizedState = ji, e) : Lo(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return dd(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = pt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = pt(u, i) : (i = Pt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Oi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = ji, r;
  }
  return i = e.child, e = i.sibling, r = pt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Lo(e, t) {
  return t = vl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function gr(e, t, n, r) {
  return r !== null && mo(r), ln(t, e.child, null, n), e = Lo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Yl(Error(y(422))), gr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = vl({ mode: "visible", children: r.children }, l, 0, null), i = Pt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ln(t, e.child, null, o), t.child.memoizedState = Oi(o), t.memoizedState = ji, i);
  if (!(t.mode & 1)) return gr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(y(419)), r = Yl(i, r, void 0), gr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, fe || u) {
    if (r = q, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ye(e, l), je(r, e, l, -1));
    }
    return jo(), r = Yl(Error(y(421))), gr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Cd.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ve = at(l.nextSibling), ye = t, U = !0, Re = null, e !== null && (Se[Ee++] = We, Se[Ee++] = Qe, Se[Ee++] = Tt, We = e.id, Qe = e.overflow, Tt = t), t = Lo(t, r.children), t.flags |= 4096, t);
}
function Vu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Li(e.return, t, n);
}
function Zl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function $a(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (oe(e, t, r.children, n), r = A.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Vu(e, n, t);
      else if (e.tag === 19) Vu(e, n, t);
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
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Zl(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Jr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Zl(t, !0, n, null, i);
      break;
    case "together":
      Zl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ir(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ze(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Rt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = pt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function pd(e, t, n) {
  switch (t.tag) {
    case 3:
      Aa(t), rn();
      break;
    case 5:
      pa(t);
      break;
    case 1:
      pe(t.type) && Qr(t);
      break;
    case 4:
      ko(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      j(Xr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (j(A, A.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Va(e, t, n) : (j(A, A.current & 1), e = Ze(e, t, n), e !== null ? e.sibling : null);
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
      return t.lanes = 0, Fa(e, t, n);
  }
  return Ze(e, t, n);
}
var Ba, Di, Ha, Wa;
Ba = function(e, t) {
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
Di = function() {
};
Ha = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Ct(Ve.current);
    var i = null;
    switch (n) {
      case "input":
        l = li(e, l), r = li(e, r), i = [];
        break;
      case "select":
        l = $({}, l, { value: void 0 }), r = $({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = ui(e, l), r = ui(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
    }
    ai(n, r);
    var o;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (On.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (On.hasOwnProperty(c) ? (s != null && c === "onScroll" && O("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Wa = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kn(e, t) {
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
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function md(e, t, n) {
  var r = t.pendingProps;
  switch (po(t), t.tag) {
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
      return re(t), null;
    case 1:
      return pe(t.type) && Wr(), re(t), null;
    case 3:
      return r = t.stateNode, on(), D(de), D(ie), Eo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Re !== null && (Wi(Re), Re = null))), Di(e, t), re(t), null;
    case 5:
      So(t);
      var l = Ct(Kn.current);
      if (n = t.type, e !== null && t.stateNode != null) Ha(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (e = Ct(Ve.current), vr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ue] = t, r[Qn] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Cn.length; l++) O(Cn[l], r);
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
              Yo(r, i), O("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, O("invalid", r);
              break;
            case "textarea":
              Jo(r, i), O("invalid", r);
          }
          ai(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && hr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && hr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : On.hasOwnProperty(o) && u != null && o === "onScroll" && O("scroll", r);
          }
          switch (n) {
            case "input":
              ur(r), Zo(r, i, !0);
              break;
            case "textarea":
              ur(r), qo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Hr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ue] = t, e[Qn] = r, Ba(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = ci(n, r), n) {
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
                for (l = 0; l < Cn.length; l++) O(Cn[l], e);
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
                Yo(e, r), l = li(e, r), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = $({}, r, { value: void 0 }), O("invalid", e);
                break;
              case "textarea":
                Jo(e, r), l = ui(e, r), O("invalid", e);
                break;
              default:
                l = r;
            }
            ai(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Ss(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ws(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Dn(e, s) : typeof s == "number" && Dn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (On.hasOwnProperty(i) ? s != null && i === "onScroll" && O("scroll", e) : s != null && Ji(e, i, s, o));
            }
            switch (n) {
              case "input":
                ur(e), Zo(e, r, !1);
                break;
              case "textarea":
                ur(e), qo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Yt(e, !!r.multiple, i, !1) : r.defaultValue != null && Yt(
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
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Wa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (n = Ct(Kn.current), Ct(Ve.current), vr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ue] = t, (i = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
            case 3:
              hr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && hr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ue] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (D(A), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128)) sa(), rn(), t.flags |= 98560, i = !1;
        else if (i = vr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(y(317));
            i[Ue] = t;
          } else rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          re(t), i = !1;
        } else Re !== null && (Wi(Re), Re = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || A.current & 1 ? X === 0 && (X = 3) : jo())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return on(), Di(e, t), e === null && Hn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return yo(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Wr(), re(t), null;
    case 19:
      if (D(A), i = t.memoizedState, i === null) return re(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) kn(i, !1);
      else {
        if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Jr(e), o !== null) {
            for (t.flags |= 128, kn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return j(A, A.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Q() > sn && (t.flags |= 128, r = !0, kn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Jr(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U) return re(t), null;
        } else 2 * Q() - i.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128, r = !0, kn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Q(), t.sibling = null, n = A.current, j(A, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
    case 22:
    case 23:
      return Mo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function hd(e, t) {
  switch (po(t), t.tag) {
    case 1:
      return pe(t.type) && Wr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return on(), D(de), D(ie), Eo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return So(t), null;
    case 13:
      if (D(A), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(y(340));
        rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return D(A), null;
    case 4:
      return on(), null;
    case 10:
      return yo(t.type._context), null;
    case 22:
    case 23:
      return Mo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1, le = !1, vd = typeof WeakSet == "function" ? WeakSet : Set, S = null;
function Kt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    B(e, t, r);
  }
  else n.current = null;
}
function Fi(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var $u = !1;
function yd(e, t) {
  if (ki = Vr, e = Ys(), co(e)) {
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
        var o = 0, u = -1, s = -1, c = 0, h = 0, p = e, m = null;
        t: for (; ; ) {
          for (var g; p !== n || l !== 0 && p.nodeType !== 3 || (u = o + l), p !== i || r !== 0 && p.nodeType !== 3 || (s = o + r), p.nodeType === 3 && (o += p.nodeValue.length), (g = p.firstChild) !== null; )
            m = p, p = g;
          for (; ; ) {
            if (p === e) break t;
            if (m === n && ++c === l && (u = o), m === i && ++h === r && (s = o), (g = p.nextSibling) !== null) break;
            p = m, m = p.parentNode;
          }
          p = g;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Si = { focusedElem: e, selectionRange: n }, Vr = !1, S = t; S !== null; ) if (t = S, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, S = e;
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
  return w = $u, $u = !1, w;
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Fi(t, n, i);
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
function Ui(e) {
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
function Qa(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Qa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Qn], delete t[_i], delete t[bf], delete t[ed])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ga(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ga(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ai(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ai(e, t, n), e = e.sibling; e !== null; ) Ai(e, t, n), e = e.sibling;
}
function Vi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Vi(e, t, n), e = e.sibling; e !== null; ) Vi(e, t, n), e = e.sibling;
}
var b = null, Ie = !1;
function be(e, t, n) {
  for (n = n.child; n !== null; ) Ka(e, t, n), n = n.sibling;
}
function Ka(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function") try {
    Ae.onCommitFiberUnmount(ol, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      le || Kt(n, t);
    case 6:
      var r = b, l = Ie;
      b = null, be(e, t, n), b = r, Ie = l, b !== null && (Ie ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (Ie ? (e = b, n = n.stateNode, e.nodeType === 8 ? Hl(e.parentNode, n) : e.nodeType === 1 && Hl(e, n), Vn(e)) : Hl(b, n.stateNode));
      break;
    case 4:
      r = b, l = Ie, b = n.stateNode.containerInfo, Ie = !0, be(e, t, n), b = r, Ie = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Fi(n, t, o), l = l.next;
        } while (l !== r);
      }
      be(e, t, n);
      break;
    case 1:
      if (!le && (Kt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        B(n, t, u);
      }
      be(e, t, n);
      break;
    case 21:
      be(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, be(e, t, n), le = r) : be(e, t, n);
      break;
    default:
      be(e, t, n);
  }
}
function Hu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vd()), t.forEach(function(r) {
      var l = Nd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            b = u.stateNode, Ie = !1;
            break e;
          case 3:
            b = u.stateNode.containerInfo, Ie = !0;
            break e;
          case 4:
            b = u.stateNode.containerInfo, Ie = !0;
            break e;
        }
        u = u.return;
      }
      if (b === null) throw Error(y(160));
      Ka(i, o, l), b = null, Ie = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      B(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xa(t, e), t = t.sibling;
}
function Xa(e, t) {
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
          Dn(l, "");
        } catch (k) {
          B(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && vs(l, i), ci(u, o);
          var c = ci(u, i);
          for (o = 0; o < s.length; o += 2) {
            var h = s[o], p = s[o + 1];
            h === "style" ? Ss(l, p) : h === "dangerouslySetInnerHTML" ? ws(l, p) : h === "children" ? Dn(l, p) : Ji(l, h, p, c);
          }
          switch (u) {
            case "input":
              ii(l, i);
              break;
            case "textarea":
              ys(l, i);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var g = i.value;
              g != null ? Yt(l, !!i.multiple, g, !1) : m !== !!i.multiple && (i.defaultValue != null ? Yt(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Yt(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Qn] = i;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Le(t, e), De(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Le(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Vn(t.containerInfo);
      } catch (k) {
        B(e, e.return, k);
      }
      break;
    case 4:
      Le(t, e), De(e);
      break;
    case 13:
      Le(t, e), De(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Io = Q())), r & 4 && Hu(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (c = le) || h, Le(t, e), le = c) : Le(t, e), De(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (S = e, h = e.child; h !== null; ) {
          for (p = S = h; S !== null; ) {
            switch (m = S, g = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rn(4, m, m.return);
                break;
              case 1:
                Kt(m, m.return);
                var w = m.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (k) {
                    B(r, n, k);
                  }
                }
                break;
              case 5:
                Kt(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Qu(p);
                  continue;
                }
            }
            g !== null ? (g.return = m, S = g) : Qu(p);
          }
          h = h.sibling;
        }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                l = p.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = p.stateNode, s = p.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ks("display", o));
              } catch (k) {
                B(e, e.return, k);
              }
            }
          } else if (p.tag === 6) {
            if (h === null) try {
              p.stateNode.nodeValue = c ? "" : p.memoizedProps;
            } catch (k) {
              B(e, e.return, k);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), p = p.return;
          }
          h === p && (h = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Le(t, e), De(e), r & 4 && Hu(e);
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
          if (Ga(n)) {
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
          r.flags & 32 && (Dn(l, ""), r.flags &= -33);
          var i = Bu(e);
          Vi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = Bu(e);
          Ai(e, u, o);
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
function gd(e, t, n) {
  S = e, Ya(e);
}
function Ya(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || wr;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || le;
        u = wr;
        var c = le;
        if (wr = o, (le = s) && !c) for (S = l; S !== null; ) o = S, s = o.child, o.tag === 22 && o.memoizedState !== null ? Gu(l) : s !== null ? (s.return = o, S = s) : Gu(l);
        for (; i !== null; ) S = i, Ya(i), i = i.sibling;
        S = l, wr = u, le = c;
      }
      Wu(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, S = i) : Wu(e);
  }
}
function Wu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            le || ml(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !le) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Lu(t, i, r);
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
              Lu(t, o, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
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
                  var p = h.dehydrated;
                  p !== null && Vn(p);
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
        le || t.flags & 512 && Ui(t);
      } catch (m) {
        B(t, t.return, m);
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
function Qu(e) {
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
function Gu(e) {
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
          var i = t.return;
          try {
            Ui(t);
          } catch (s) {
            B(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ui(t);
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
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, S = u;
      break;
    }
    S = t.return;
  }
}
var wd = Math.ceil, el = Je.ReactCurrentDispatcher, zo = Je.ReactCurrentOwner, _e = Je.ReactCurrentBatchConfig, R = 0, q = null, G = null, ee = 0, he = 0, Xt = yt(0), X = 0, Jn = null, Rt = 0, hl = 0, To = 0, Mn = null, ce = null, Io = 0, sn = 1 / 0, Be = null, tl = !1, $i = null, ft = null, kr = !1, it = null, nl = 0, jn = 0, Bi = null, Rr = -1, Mr = 0;
function ue() {
  return R & 6 ? Q() : Rr !== -1 ? Rr : Rr = Q();
}
function dt(e) {
  return e.mode & 1 ? R & 2 && ee !== 0 ? ee & -ee : nd.transition !== null ? (Mr === 0 && (Mr = Ms()), Mr) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vs(e.type)), e) : 1;
}
function je(e, t, n, r) {
  if (50 < jn) throw jn = 0, Bi = null, Error(y(185));
  bn(e, n, r), (!(R & 2) || e !== q) && (e === q && (!(R & 2) && (hl |= n), X === 4 && rt(e, ee)), me(e, r), n === 1 && R === 0 && !(t.mode & 1) && (sn = Q() + 500, fl && gt()));
}
function me(e, t) {
  var n = e.callbackNode;
  tf(e, t);
  var r = Ar(e, e === q ? ee : 0);
  if (r === 0) n !== null && tu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && tu(n), t === 1) e.tag === 0 ? td(Ku.bind(null, e)) : ia(Ku.bind(null, e)), Jf(function() {
      !(R & 6) && gt();
    }), n = null;
    else {
      switch (js(r)) {
        case 1:
          n = no;
          break;
        case 4:
          n = Is;
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
      n = rc(n, Za.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Za(e, t) {
  if (Rr = -1, Mr = 0, R & 6) throw Error(y(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Ar(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var i = qa();
    (q !== e || ee !== t) && (Be = null, sn = Q() + 500, Nt(e, t));
    do
      try {
        Ed();
        break;
      } catch (u) {
        Ja(e, u);
      }
    while (!0);
    vo(), el.current = i, R = l, G !== null ? t = 0 : (q = null, ee = 0, t = X);
  }
  if (t !== 0) {
    if (t === 2 && (l = hi(e), l !== 0 && (r = l, t = Hi(e, l))), t === 1) throw n = Jn, Nt(e, 0), rt(e, r), me(e, Q()), n;
    if (t === 6) rt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !kd(l) && (t = rl(e, r), t === 2 && (i = hi(e), i !== 0 && (r = i, t = Hi(e, i))), t === 1)) throw n = Jn, Nt(e, 0), rt(e, r), me(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Et(e, ce, Be);
          break;
        case 3:
          if (rt(e, r), (r & 130023424) === r && (t = Io + 500 - Q(), 10 < t)) {
            if (Ar(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = xi(Et.bind(null, e, ce, Be), t);
            break;
          }
          Et(e, ce, Be);
          break;
        case 4:
          if (rt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Me(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = xi(Et.bind(null, e, ce, Be), r);
            break;
          }
          Et(e, ce, Be);
          break;
        case 5:
          Et(e, ce, Be);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === n ? Za.bind(null, e) : null;
}
function Hi(e, t) {
  var n = Mn;
  return e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256), e = rl(e, t), e !== 2 && (t = ce, ce = n, t !== null && Wi(t)), e;
}
function Wi(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
}
function kd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Oe(i(), l)) return !1;
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
function rt(e, t) {
  for (t &= ~To, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Me(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ku(e) {
  if (R & 6) throw Error(y(327));
  en();
  var t = Ar(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hi(e);
    r !== 0 && (t = r, n = Hi(e, r));
  }
  if (n === 1) throw n = Jn, Nt(e, 0), rt(e, t), me(e, Q()), n;
  if (n === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Et(e, ce, Be), me(e, Q()), null;
}
function Ro(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (sn = Q() + 500, fl && gt());
  }
}
function Mt(e) {
  it !== null && it.tag === 0 && !(R & 6) && en();
  var t = R;
  R |= 1;
  var n = _e.transition, r = M;
  try {
    if (_e.transition = null, M = 1, e) return e();
  } finally {
    M = r, _e.transition = n, R = t, !(R & 6) && gt();
  }
}
function Mo() {
  he = Xt.current, D(Xt);
}
function Nt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Zf(n)), G !== null) for (n = G.return; n !== null; ) {
    var r = n;
    switch (po(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Wr();
        break;
      case 3:
        on(), D(de), D(ie), Eo();
        break;
      case 5:
        So(r);
        break;
      case 4:
        on();
        break;
      case 13:
        D(A);
        break;
      case 19:
        D(A);
        break;
      case 10:
        yo(r.type._context);
        break;
      case 22:
      case 23:
        Mo();
    }
    n = n.return;
  }
  if (q = e, G = e = pt(e.current, null), ee = he = t, X = 0, Jn = null, To = hl = Rt = 0, ce = Mn = null, _t !== null) {
    for (t = 0; t < _t.length; t++) if (n = _t[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    _t = null;
  }
  return e;
}
function Ja(e, t) {
  do {
    var n = G;
    try {
      if (vo(), zr.current = br, qr) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        qr = !1;
      }
      if (It = 0, Z = K = V = null, In = !1, Xn = 0, zo.current = null, n === null || n.return === null) {
        X = 1, Jn = t, G = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, s = t;
        if (t = ee, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = u, p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = ju(o);
          if (g !== null) {
            g.flags &= -257, Ou(g, o, u, i, t), g.mode & 1 && Mu(i, c, t), t = g, s = c;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Mu(i, c, t), jo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var F = ju(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Ou(F, o, u, i, t), mo(un(s, u));
            break e;
          }
        }
        i = s = un(s, u), X !== 4 && (X = 2), Mn === null ? Mn = [i] : Mn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = ja(i, s, t);
              Pu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ft === null || !ft.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = Oa(i, u, t);
                Pu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ec(n);
    } catch (E) {
      t = E, G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qa() {
  var e = el.current;
  return el.current = br, e === null ? br : e;
}
function jo() {
  (X === 0 || X === 3 || X === 2) && (X = 4), q === null || !(Rt & 268435455) && !(hl & 268435455) || rt(q, ee);
}
function rl(e, t) {
  var n = R;
  R |= 2;
  var r = qa();
  (q !== e || ee !== t) && (Be = null, Nt(e, t));
  do
    try {
      Sd();
      break;
    } catch (l) {
      Ja(e, l);
    }
  while (!0);
  if (vo(), R = n, el.current = r, G !== null) throw Error(y(261));
  return q = null, ee = 0, X;
}
function Sd() {
  for (; G !== null; ) ba(G);
}
function Ed() {
  for (; G !== null && !Gc(); ) ba(G);
}
function ba(e) {
  var t = nc(e.alternate, e, he);
  e.memoizedProps = e.pendingProps, t === null ? ec(e) : G = t, zo.current = null;
}
function ec(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = hd(n, t), n !== null) {
        n.flags &= 32767, G = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        X = 6, G = null;
        return;
      }
    } else if (n = md(n, t, he), n !== null) {
      G = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function Et(e, t, n) {
  var r = M, l = _e.transition;
  try {
    _e.transition = null, M = 1, xd(e, t, n, r);
  } finally {
    _e.transition = l, M = r;
  }
  return null;
}
function xd(e, t, n, r) {
  do
    en();
  while (it !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (nf(e, i), e === q && (G = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0, rc(Ur, function() {
    return en(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = _e.transition, _e.transition = null;
    var o = M;
    M = 1;
    var u = R;
    R |= 4, zo.current = null, yd(e, n), Xa(n, e), Hf(Si), Vr = !!ki, Si = ki = null, e.current = n, gd(n), Kc(), R = u, M = o, _e.transition = i;
  } else e.current = n;
  if (kr && (kr = !1, it = e, nl = l), i = e.pendingLanes, i === 0 && (ft = null), Zc(n.stateNode), me(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl) throw tl = !1, e = $i, $i = null, e;
  return nl & 1 && e.tag !== 0 && en(), i = e.pendingLanes, i & 1 ? e === Bi ? jn++ : (jn = 0, Bi = e) : jn = 0, gt(), null;
}
function en() {
  if (it !== null) {
    var e = js(nl), t = _e.transition, n = M;
    try {
      if (_e.transition = null, M = 16 > e ? 16 : e, it === null) var r = !1;
      else {
        if (e = it, it = null, nl = 0, R & 6) throw Error(y(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var i = S, o = i.child;
          if (S.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, h, i);
                  }
                  var p = h.child;
                  if (p !== null) p.return = h, S = p;
                  else for (; S !== null; ) {
                    h = S;
                    var m = h.sibling, g = h.return;
                    if (Qa(h), h === c) {
                      S = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = g, S = m;
                      break;
                    }
                    S = g;
                  }
                }
              }
              var w = i.alternate;
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
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, S = o;
          else e: for (; S !== null; ) {
            if (i = S, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Rn(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, S = f;
              break e;
            }
            S = i.return;
          }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, S = d;
          else e: for (o = a; S !== null; ) {
            if (u = S, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  ml(9, u);
              }
            } catch (E) {
              B(u, u.return, E);
            }
            if (u === o) {
              S = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, S = v;
              break e;
            }
            S = u.return;
          }
        }
        if (R = l, gt(), Ae && typeof Ae.onPostCommitFiberRoot == "function") try {
          Ae.onPostCommitFiberRoot(ol, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      M = n, _e.transition = t;
    }
  }
  return !1;
}
function Xu(e, t, n) {
  t = un(n, t), t = ja(e, t, 1), e = ct(e, t, 1), t = ue(), e !== null && (bn(e, 1, t), me(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Xu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Xu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ft === null || !ft.has(r))) {
        e = un(n, e), e = Oa(t, e, 1), t = ct(t, e, 1), e = ue(), t !== null && (bn(t, 1, e), me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function _d(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (X === 4 || X === 3 && (ee & 130023424) === ee && 500 > Q() - Io ? Nt(e, 0) : To |= n), me(e, t);
}
function tc(e, t) {
  t === 0 && (e.mode & 1 ? (t = cr, cr <<= 1, !(cr & 130023424) && (cr = 4194304)) : t = 1);
  var n = ue();
  e = Ye(e, t), e !== null && (bn(e, t, n), me(e, n));
}
function Cd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), tc(e, n);
}
function Nd(e, t) {
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
  r !== null && r.delete(t), tc(e, n);
}
var nc;
nc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, pd(e, t, n);
    fe = !!(e.flags & 131072);
  }
  else fe = !1, U && t.flags & 1048576 && oa(t, Kr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ir(e, t), e = t.pendingProps;
      var l = nn(t, ie.current);
      bt(t, n), l = _o(null, t, r, e, l, n);
      var i = Co();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (i = !0, Qr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, wo(t), l.updater = pl, t.stateNode = l, l._reactInternals = t, Ti(t, r, e, n), t = Mi(null, t, r, !0, i, n)) : (t.tag = 0, U && i && fo(t), oe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ir(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ld(r), e = Te(r, e), l) {
          case 0:
            t = Ri(null, t, r, e, n);
            break e;
          case 1:
            t = Uu(null, t, r, e, n);
            break e;
          case 11:
            t = Du(null, t, r, e, n);
            break e;
          case 14:
            t = Fu(null, t, r, Te(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Ri(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Uu(e, t, r, l, n);
    case 3:
      e: {
        if (Aa(t), e === null) throw Error(y(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, da(e, t), Zr(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = un(Error(y(423)), t), t = Au(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = un(Error(y(424)), t), t = Au(e, t, r, n, l);
          break e;
        } else for (ve = at(t.stateNode.containerInfo.firstChild), ye = t, U = !0, Re = null, n = ca(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (rn(), r === l) {
            t = Ze(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pa(t), e === null && Pi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Ei(r, l) ? o = null : i !== null && Ei(r, i) && (t.flags |= 32), Ua(e, t), oe(e, t, o, n), t.child;
    case 6:
      return e === null && Pi(t), null;
    case 13:
      return Va(e, t, n);
    case 4:
      return ko(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Du(e, t, r, l, n);
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, j(Xr, r._currentValue), r._currentValue = o, i !== null) if (Oe(i.value, o)) {
          if (i.children === l.children && !de.current) {
            t = Ze(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = Ge(-1, n & -n), s.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Li(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(y(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Li(o, n, t), o = i.sibling;
          } else o = i.child;
          if (o !== null) o.return = i;
          else for (o = i; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (i = o.sibling, i !== null) {
              i.return = o.return, o = i;
              break;
            }
            o = o.return;
          }
          i = o;
        }
        oe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, bt(t, n), l = Ce(l), r = r(l), t.flags |= 1, oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Te(r, t.pendingProps), l = Te(r.type, l), Fu(e, t, r, l, n);
    case 15:
      return Da(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Ir(e, t), t.tag = 1, pe(r) ? (e = !0, Qr(t)) : e = !1, bt(t, n), Ma(t, r, l), Ti(t, r, l, n), Mi(null, t, r, !0, e, n);
    case 19:
      return $a(e, t, n);
    case 22:
      return Fa(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function rc(e, t) {
  return Ts(e, t);
}
function Pd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xe(e, t, n, r) {
  return new Pd(e, t, n, r);
}
function Oo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ld(e) {
  if (typeof e == "function") return Oo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === bi) return 11;
    if (e === eo) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return n === null ? (n = xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function jr(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Oo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Ut:
      return Pt(n.children, l, i, t);
    case qi:
      o = 8, l |= 8;
      break;
    case ei:
      return e = xe(12, n, t, l | 2), e.elementType = ei, e.lanes = i, e;
    case ti:
      return e = xe(13, n, t, l), e.elementType = ti, e.lanes = i, e;
    case ni:
      return e = xe(19, n, t, l), e.elementType = ni, e.lanes = i, e;
    case ps:
      return vl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case fs:
          o = 10;
          break e;
        case ds:
          o = 9;
          break e;
        case bi:
          o = 11;
          break e;
        case eo:
          o = 14;
          break e;
        case et:
          o = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return t = xe(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Pt(e, t, n, r) {
  return e = xe(7, e, r, t), e.lanes = n, e;
}
function vl(e, t, n, r) {
  return e = xe(22, e, r, t), e.elementType = ps, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Jl(e, t, n) {
  return e = xe(6, e, null, t), e.lanes = n, e;
}
function ql(e, t, n) {
  return t = xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function zd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Rl(0), this.expirationTimes = Rl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Rl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Do(e, t, n, r, l, i, o, u, s) {
  return e = new zd(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = xe(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wo(i), e;
}
function Td(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ft, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function lc(e) {
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (Ot(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
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
    if (pe(n)) return la(e, n, t);
  }
  return t;
}
function ic(e, t, n, r, l, i, o, u, s) {
  return e = Do(n, r, !0, e, l, i, o, u, s), e.context = lc(null), n = e.current, r = ue(), l = dt(n), i = Ge(r, l), i.callback = t ?? null, ct(n, i, l), e.current.lanes = l, bn(e, l, r), me(e, r), e;
}
function yl(e, t, n, r) {
  var l = t.current, i = ue(), o = dt(l);
  return n = lc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ge(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ct(l, t, o), e !== null && (je(e, l, o, i), Lr(e, l, o)), o;
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
function Yu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fo(e, t) {
  Yu(e, t), (e = e.alternate) && Yu(e, t);
}
function Id() {
  return null;
}
var oc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Uo(e) {
  this._internalRoot = e;
}
gl.prototype.render = Uo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  yl(e, t, null, null);
};
gl.prototype.unmount = Uo.prototype.unmount = function() {
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
    var t = Fs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++) ;
    nt.splice(n, 0, e), n === 0 && As(e);
  }
};
function Ao(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function wl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Zu() {
}
function Rd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = ll(o);
        i.call(c);
      };
    }
    var o = ic(t, r, e, 0, null, !1, !1, "", Zu);
    return e._reactRootContainer = o, e[Xe] = o.current, Hn(e.nodeType === 8 ? e.parentNode : e), Mt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = ll(s);
      u.call(c);
    };
  }
  var s = Do(e, 0, !1, null, null, !1, !1, "", Zu);
  return e._reactRootContainer = s, e[Xe] = s.current, Hn(e.nodeType === 8 ? e.parentNode : e), Mt(function() {
    yl(t, s, n, r);
  }), s;
}
function kl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = ll(o);
        u.call(s);
      };
    }
    yl(t, o, e, l);
  } else o = Rd(n, t, e, l, r);
  return ll(o);
}
Os = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _n(t.pendingLanes);
        n !== 0 && (ro(t, n | 1), me(t, Q()), !(R & 6) && (sn = Q() + 500, gt()));
      }
      break;
    case 13:
      Mt(function() {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ue();
          je(r, e, 1, l);
        }
      }), Fo(e, 1);
  }
};
lo = function(e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = ue();
      je(t, e, 134217728, n);
    }
    Fo(e, 134217728);
  }
};
Ds = function(e) {
  if (e.tag === 13) {
    var t = dt(e), n = Ye(e, t);
    if (n !== null) {
      var r = ue();
      je(n, e, t, r);
    }
    Fo(e, t);
  }
};
Fs = function() {
  return M;
};
Us = function(e, t) {
  var n = M;
  try {
    return M = e, t();
  } finally {
    M = n;
  }
};
di = function(e, t, n) {
  switch (t) {
    case "input":
      if (ii(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = cl(r);
            if (!l) throw Error(y(90));
            hs(r), ii(r, l);
          }
        }
      }
      break;
    case "textarea":
      ys(e, n);
      break;
    case "select":
      t = n.value, t != null && Yt(e, !!n.multiple, t, !1);
  }
};
_s = Ro;
Cs = Mt;
var Md = { usingClientEntryPoint: !1, Events: [tr, Bt, cl, Es, xs, Ro] }, Sn = { findFiberByHostInstance: xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, jd = { bundleType: Sn.bundleType, version: Sn.version, rendererPackageName: Sn.rendererPackageName, rendererConfig: Sn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Je.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ls(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Sn.findFiberByHostInstance || Id, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber) try {
    ol = Sr.inject(jd), Ae = Sr;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ao(t)) throw Error(y(200));
  return Td(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Ao(e)) throw Error(y(299));
  var n = !1, r = "", l = oc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Do(e, 1, !1, null, null, n, !1, r, l), e[Xe] = t.current, Hn(e.nodeType === 8 ? e.parentNode : e), new Uo(t);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Ls(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Mt(e);
};
we.hydrate = function(e, t, n) {
  if (!wl(t)) throw Error(y(200));
  return kl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Ao(e)) throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = oc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ic(t, null, e, 1, n ?? null, l, !1, i, o), e[Xe] = t.current, Hn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
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
function uc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc);
    } catch (e) {
      console.error(e);
    }
}
uc(), us.exports = we;
var Od = us.exports, sc, Ju = Od;
sc = Ju.createRoot, Ju.hydrateRoot;
window.api = Lt;
const Dd = async () => {
  const e = await Lt.fetchApi("/meld-nexus/list");
  if (!e.ok)
    throw new Error(`Failed to fetch images: ${e.statusText}`);
  return await e.json();
}, Fd = async () => {
  const e = await Lt.fetchApi("/meld-nexus/settings");
  return e.ok ? await e.json() : { dev_mode: !1 };
}, Ud = async (e, t = !0) => {
  const n = await Lt.fetchApi("/meld-nexus/bulk-delete", {
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
}, Ad = async (e) => {
  if (!(await Lt.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  })).ok)
    throw new Error("Failed to register image");
};
var ac = { exports: {} }, Sl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vd = J, $d = Symbol.for("react.element"), Bd = Symbol.for("react.fragment"), Hd = Object.prototype.hasOwnProperty, Wd = Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qd = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Hd.call(t, r) && !Qd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: $d, type: e, key: i, ref: o, props: l, _owner: Wd.current };
}
Sl.Fragment = Bd;
Sl.jsx = cc;
Sl.jsxs = cc;
ac.exports = Sl;
var _ = ac.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Gd = {
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
const Kd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), qe = (e, t) => {
  const n = J.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: u = "",
      children: s,
      ...c
    }, h) => J.createElement(
      "svg",
      {
        ref: h,
        ...Gd,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Kd(e)}`, u].join(" "),
        ...c
      },
      [
        ...t.map(([p, m]) => J.createElement(p, m)),
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
const Xd = qe("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = qe("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = qe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = qe("Maximize", [
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
const qd = qe("Minimize", [
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
const bd = qe("RefreshCw", [
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
const ep = qe("Trash2", [
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
const tp = qe("XSquare", [
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
const Vo = qe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let il = !1;
const np = (e) => {
  il = e, il && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, rp = (...e) => {
  il && console.log("[Meld-Flow]", ...e);
}, lp = (...e) => {
  il && console.warn("[Meld-Flow]", ...e);
}, ip = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, $e = {
  log: rp,
  warn: lp,
  error: ip,
  init: np
}, op = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  lastUpdated: Date.now(),
  viewMode: "list",
  viewerImageId: null
};
function up(e, t) {
  switch (t.type) {
    case "SET_IMAGES": {
      let n = e.viewerImageId;
      return n !== null && !t.payload.some((r) => r.id === n) && (n = null), {
        ...e,
        images: t.payload,
        isLoading: !1,
        error: null,
        viewerImageId: n
      };
    }
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
    case "OPEN_VIEWER":
      return {
        ...e,
        viewerImageId: t.payload
      };
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null
      };
    case "NEXT_IMAGE": {
      if (e.viewerImageId === null || e.images.length === 0) return e;
      const r = (e.images.findIndex((l) => l.id === e.viewerImageId) + 1) % e.images.length;
      return {
        ...e,
        viewerImageId: e.images[r].id
      };
    }
    case "PREVIOUS_IMAGE": {
      if (e.viewerImageId === null || e.images.length === 0) return e;
      const r = (e.images.findIndex((l) => l.id === e.viewerImageId) - 1 + e.images.length) % e.images.length;
      return {
        ...e,
        viewerImageId: e.images[r].id
      };
    }
    default:
      return e;
  }
}
const fc = J.createContext(void 0), sp = ({ children: e }) => {
  const [t, n] = J.useReducer(up, op), r = J.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const i = await Dd();
      n({ type: "SET_IMAGES", payload: i });
    } catch (i) {
      n({
        type: "SET_ERROR",
        payload: i instanceof Error ? i.message : String(i)
      });
    }
  }, []), l = J.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const i = Array.from(t.selectedIds), o = `Are you sure you want to delete the selected ${i.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(o)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await Ud(i, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (u) {
        n({
          type: "SET_ERROR",
          payload: u instanceof Error ? u.message : String(u)
        });
      }
    }
  }, [t.selectedIds, r]);
  return J.useEffect(() => {
    const i = () => {
      r();
    };
    return window.addEventListener("meld-nexus-refresh", i), () => {
      window.removeEventListener("meld-nexus-refresh", i);
    };
  }, [r]), J.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ _.jsx(fc.Provider, { value: { state: t, dispatch: n, refreshImages: r, deleteSelected: l }, children: e });
}, El = () => {
  const e = J.useContext(fc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, ap = () => {
  const { state: e, dispatch: t, deleteSelected: n } = El(), r = e.selectedIds.size;
  return r === 0 ? null : /* @__PURE__ */ _.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ _.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ _.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ _.jsx(ep, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ _.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ _.jsx(Vo, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, cp = ({ image: e }) => {
  const { state: t, dispatch: n } = El(), r = t.selectedIds.has(e.id), [l, i] = J.useState(null), o = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, u = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, s = (p) => {
    p.ctrlKey || p.metaKey || t.selectedIds.size > 0 ? (p.preventDefault(), p.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, c = (p) => {
    n({ type: "TOGGLE_SELECT", payload: e.id });
  }, h = (p) => {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  };
  return (
    // biome-ignore lint/a11y/useSemanticElements: Image card is a complex interactive element
    /* @__PURE__ */ _.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
        onClick: c,
        onKeyDown: h,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ _.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ _.jsx(
            "img",
            {
              src: u,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              onClick: (p) => {
                p.stopPropagation(), s(p);
              },
              onKeyDown: (p) => {
                (p.key === "Enter" || p.key === " ") && (p.stopPropagation(), p.preventDefault(), s(p));
              }
            }
          ) }),
          /* @__PURE__ */ _.jsxs("div", { className: "meld-image-card__details", children: [
            /* @__PURE__ */ _.jsx("div", { className: "meld-image-card__filename", children: o }),
            /* @__PURE__ */ _.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: (p) => {
                  p.stopPropagation(), i({ title: "Positive Prompt", text: e.positive || "-" });
                },
                children: [
                  /* @__PURE__ */ _.jsx("div", { className: "meld-image-card__meta-label", children: "Positive" }),
                  /* @__PURE__ */ _.jsx("div", { className: "meld-image-card__meta-content", children: e.positive || "-" })
                ]
              }
            ),
            /* @__PURE__ */ _.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: (p) => {
                  p.stopPropagation(), i({ title: "Negative Prompt", text: e.negative || "-" });
                },
                children: [
                  /* @__PURE__ */ _.jsx("div", { className: "meld-image-card__meta-label", children: "Negative" }),
                  /* @__PURE__ */ _.jsx("div", { className: "meld-image-card__meta-content", children: e.negative || "-" })
                ]
              }
            ),
            /* @__PURE__ */ _.jsxs("div", { className: "meld-image-card__meta-item", children: [
              /* @__PURE__ */ _.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
              /* @__PURE__ */ _.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((p, m) => /* @__PURE__ */ _.jsx(
                "span",
                {
                  className: "meld-image-card__tag",
                  children: p
                },
                `${p}-${m}`
              )) : /* @__PURE__ */ _.jsx("span", { style: { color: "#666" }, children: "-" }) })
            ] })
          ] }),
          l && // biome-ignore lint/a11y/useKeyWithClickEvents: Overlay backdrop
          // biome-ignore lint/a11y/noStaticElementInteractions: Overlay backdrop
          /* @__PURE__ */ _.jsx(
            "div",
            {
              className: "meld-prompt-popup-overlay",
              onClick: (p) => {
                p.stopPropagation(), i(null);
              },
              children: /* @__PURE__ */ _.jsxs("div", { className: "meld-prompt-popup-content", onClick: (p) => p.stopPropagation(), children: [
                /* @__PURE__ */ _.jsxs("div", { className: "meld-prompt-popup-header", children: [
                  /* @__PURE__ */ _.jsx("span", { children: l.title }),
                  /* @__PURE__ */ _.jsx(
                    Vo,
                    {
                      className: "meld-prompt-popup-close",
                      size: 18,
                      onClick: () => i(null)
                    }
                  )
                ] }),
                /* @__PURE__ */ _.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
              ] })
            }
          )
        ]
      }
    )
  );
}, fp = () => {
  const { state: e, dispatch: t } = El(), { viewerImageId: n, images: r } = e, [l, i] = J.useState(!1), o = r.find((c) => c.id === n), u = J.useCallback((c) => {
    c && "stopPropagation" in c && c.stopPropagation(), document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch((h) => {
      console.error(`Error attempting to enable full-screen mode: ${h.message}`);
    });
  }, []);
  if (J.useEffect(() => {
    const c = (p) => {
      n !== null && (p.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : p.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : p.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (p.key === "f" || p.key === "F") && u(p));
    }, h = () => {
      i(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", c), document.addEventListener("fullscreenchange", h), () => {
      window.removeEventListener("keydown", c), document.removeEventListener("fullscreenchange", h);
    };
  }, [n, t, u]), J.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), !o) return null;
  const s = `/api/view?filename=${encodeURIComponent(o.filename)}&type=${o.type || "output"}${o.subfolder ? `&subfolder=${encodeURIComponent(o.subfolder)}` : ""}`;
  return (
    // biome-ignore lint/a11y/useSemanticElements: Overlay backdrop
    // biome-ignore lint/a11y/useKeyWithClickEvents: Backdrop click to close
    /* @__PURE__ */ _.jsx(
      "div",
      {
        className: "meld-viewer-overlay",
        onClick: () => t({ type: "CLOSE_VIEWER" }),
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""}`,
            onClick: (c) => c.stopPropagation(),
            children: [
              /* @__PURE__ */ _.jsxs("div", { className: "meld-viewer-actions", children: [
                /* @__PURE__ */ _.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn",
                    onClick: u,
                    type: "button",
                    title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                    children: l ? /* @__PURE__ */ _.jsx(qd, { size: 20 }) : /* @__PURE__ */ _.jsx(Jd, { size: 20 })
                  }
                ),
                /* @__PURE__ */ _.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                    onClick: () => t({ type: "CLOSE_VIEWER" }),
                    type: "button",
                    title: "Close (Esc)",
                    children: /* @__PURE__ */ _.jsx(Vo, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ _.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--prev",
                  onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                  type: "button",
                  children: /* @__PURE__ */ _.jsx(Yd, { size: 32 })
                }
              ),
              /* @__PURE__ */ _.jsxs("div", { className: "meld-viewer-image-container", children: [
                /* @__PURE__ */ _.jsx("img", { src: s, alt: o.filename, className: "meld-viewer-image" }),
                /* @__PURE__ */ _.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ _.jsx("div", { className: "meld-viewer-filename", children: o.filename }) })
              ] }),
              /* @__PURE__ */ _.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--next",
                  onClick: () => t({ type: "NEXT_IMAGE" }),
                  type: "button",
                  children: /* @__PURE__ */ _.jsx(Zd, { size: 32 })
                }
              )
            ]
          }
        )
      }
    )
  );
}, dp = () => {
  const { state: e, dispatch: t, refreshImages: n } = El();
  $e.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    isLoading: e.isLoading
  });
  const r = () => {
    e.selectedIds.size > 0 ? t({ type: "CLEAR_SELECTION" }) : t({ type: "SELECT_ALL" });
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ _.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
          gap: "15px"
        },
        children: [
          /* @__PURE__ */ _.jsx(
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
              children: e.selectedIds.size > 0 ? /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                /* @__PURE__ */ _.jsx(tp, { size: 14 }),
                "Deselect"
              ] }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                /* @__PURE__ */ _.jsx(Xd, { size: 14 }),
                "Select All"
              ] })
            }
          ),
          /* @__PURE__ */ _.jsxs(
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
                /* @__PURE__ */ _.jsx(bd, { size: 14, className: e.isLoading ? "animate-spin" : "" }),
                "Refresh"
              ]
            }
          )
        ]
      }
    ),
    e.error && /* @__PURE__ */ _.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && e.images.length === 0 ? /* @__PURE__ */ _.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : e.images.length === 0 ? /* @__PURE__ */ _.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ _.jsx("div", { className: "meld-gallery__list", children: e.images.map((l) => /* @__PURE__ */ _.jsx(cp, { image: l }, l.id)) }),
    /* @__PURE__ */ _.jsx(ap, {}),
    e.viewerImageId !== null && /* @__PURE__ */ _.jsx(fp, {})
  ] });
}, xl = document.createElement("link");
xl.rel = "stylesheet";
xl.type = "text/css";
xl.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(xl);
let Er = null, ze = null;
pc.registerExtension({
  name: "ComfyUI.MeldNexus",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldNexus") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const i = n.ui.meldNexus;
        i != null && i.isVisible() && i.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await Fd();
      $e.init(n.dev_mode), $e.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld-Flow] Failed to fetch settings", n), $e.init(!1);
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
          var n;
          try {
            (n = e.extensionManager) == null || n.setSidebarTabActive("meld-flow-gallery");
          } catch (r) {
            console.error("Error toggling sidebar:", r);
          }
        }
      }, Lt.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), Lt.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Ad({
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
          id: "meld-flow-gallery",
          icon: "pi pi-images",
          title: "Gallery",
          tooltip: "Meld Flow: View generated images",
          type: "custom",
          render: (n) => {
            $e.log("MeldNexus: render called", { el: n, galleryRoot: Er, galleryContainer: ze }), ze || ($e.log("MeldNexus: galleryContainer not found, creating new one"), ze = document.createElement("div"), ze.id = "meld-flow-gallery-container", ze.style.height = "100%", ze.style.width = "100%", ze.style.display = "flex", ze.style.flexDirection = "column"), n.contains(ze) || ($e.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(ze)), Er ? $e.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : ($e.log("MeldNexus: Creating new gallery root"), Er = sc(ze), Er.render(
              Qo.createElement(
                sp,
                null,
                Qo.createElement(dp)
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
