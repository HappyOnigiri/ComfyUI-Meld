import { api as Pt } from "../../../scripts/api.js";
import { app as pc } from "../../../scripts/app.js";
function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jo = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn = Symbol.for("react.element"), hc = Symbol.for("react.portal"), vc = Symbol.for("react.fragment"), yc = Symbol.for("react.strict_mode"), gc = Symbol.for("react.profiler"), wc = Symbol.for("react.provider"), kc = Symbol.for("react.context"), Sc = Symbol.for("react.forward_ref"), Ec = Symbol.for("react.suspense"), xc = Symbol.for("react.memo"), _c = Symbol.for("react.lazy"), Vi = Symbol.iterator;
function Cc(e) {
  return e === null || typeof e != "object" ? null : (e = Vi && e[Vi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, bo = Object.assign, es = {};
function an(e, t, n) {
  this.props = e, this.context = t, this.refs = es, this.updater = n || qo;
}
an.prototype.isReactComponent = {};
an.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
an.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ts() {
}
ts.prototype = an.prototype;
function Qu(e, t, n) {
  this.props = e, this.context = t, this.refs = es, this.updater = n || qo;
}
var Gu = Qu.prototype = new ts();
Gu.constructor = Qu;
bo(Gu, an.prototype);
Gu.isPureReactComponent = !0;
var $i = Array.isArray, ns = Object.prototype.hasOwnProperty, Ku = { current: null }, rs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, t, n) {
  var r, l = {}, u = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (u = "" + t.key), t) ns.call(t, r) && !rs.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: qn, type: e, key: u, ref: i, props: l, _owner: Ku.current };
}
function Nc(e, t) {
  return { $$typeof: qn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Xu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qn;
}
function Pc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Bi = /\/+/g;
function Pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Pc("" + e.key) : t.toString(36);
}
function xr(e, t, n, r, l) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (u) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case qn:
        case hc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Pl(i, 0) : r, $i(l) ? (n = "", e != null && (n = e.replace(Bi, "$&/") + "/"), xr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Xu(l) && (l = Nc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Bi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", $i(e)) for (var o = 0; o < e.length; o++) {
    u = e[o];
    var s = r + Pl(u, o);
    i += xr(u, t, n, s, l);
  }
  else if (s = Cc(e), typeof s == "function") for (e = s.call(e), o = 0; !(u = e.next()).done; ) u = u.value, s = r + Pl(u, o++), i += xr(u, t, n, s, l);
  else if (u === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function ur(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return xr(e, r, "", "", function(u) {
    return t.call(n, u, l++);
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
var oe = { current: null }, _r = { transition: null }, zc = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: _r, ReactCurrentOwner: Ku };
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
  if (!Xu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = an;
T.Fragment = vc;
T.Profiler = gc;
T.PureComponent = Qu;
T.StrictMode = yc;
T.Suspense = Ec;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc;
T.act = us;
T.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = bo({}, e.props), l = e.key, u = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (u = t.ref, i = Ku.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (s in t) ns.call(t, s) && !rs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && o !== void 0 ? o[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    o = Array(s);
    for (var c = 0; c < s; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: qn, type: e.type, key: l, ref: u, props: r, _owner: i };
};
T.createContext = function(e) {
  return e = { $$typeof: kc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: wc, _context: e }, e.Consumer = e;
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
  return { $$typeof: Sc, render: e };
};
T.isValidElement = Xu;
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
T.unstable_act = us;
T.useCallback = function(e, t) {
  return oe.current.useCallback(e, t);
};
T.useContext = function(e) {
  return oe.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return oe.current.useDeferredValue(e);
};
T.useEffect = function(e, t) {
  return oe.current.useEffect(e, t);
};
T.useId = function() {
  return oe.current.useId();
};
T.useImperativeHandle = function(e, t, n) {
  return oe.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function(e, t) {
  return oe.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function(e, t) {
  return oe.current.useLayoutEffect(e, t);
};
T.useMemo = function(e, t) {
  return oe.current.useMemo(e, t);
};
T.useReducer = function(e, t, n) {
  return oe.current.useReducer(e, t, n);
};
T.useRef = function(e) {
  return oe.current.useRef(e);
};
T.useState = function(e) {
  return oe.current.useState(e);
};
T.useSyncExternalStore = function(e, t, n) {
  return oe.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function() {
  return oe.current.useTransition();
};
T.version = "18.3.1";
Jo.exports = T;
var ce = Jo.exports;
const Wi = /* @__PURE__ */ mc(ce);
var is = { exports: {} }, we = {}, os = { exports: {} }, ss = {};
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
      var H = z - 1 >>> 1, Y = x[H];
      if (0 < l(Y, L)) x[H] = L, x[z] = Y, z = H;
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
      e: for (var H = 0, Y = x.length, rr = Y >>> 1; H < rr; ) {
        var gt = 2 * (H + 1) - 1, Nl = x[gt], wt = gt + 1, lr = x[wt];
        if (0 > l(Nl, z)) wt < Y && 0 > l(lr, Nl) ? (x[H] = lr, x[wt] = z, H = wt) : (x[H] = Nl, x[gt] = z, H = gt);
        else if (wt < Y && 0 > l(lr, z)) x[H] = lr, x[wt] = z, H = wt;
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
    var u = performance;
    e.unstable_now = function() {
      return u.now();
    };
  } else {
    var i = Date, o = i.now();
    e.unstable_now = function() {
      return i.now() - o;
    };
  }
  var s = [], c = [], h = 1, m = null, p = 3, g = !1, w = !1, k = !1, F = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
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
    w = !1, k && (k = !1, f(N), N = -1), g = !0;
    var z = p;
    try {
      for (d(L), m = n(s); m !== null && (!(m.expirationTime > L) || x && !Pe()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, p = m.priorityLevel;
          var Y = H(m.expirationTime <= L);
          L = e.unstable_now(), typeof Y == "function" ? m.callback = Y : m === n(s) && r(s), d(L);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var rr = !0;
      else {
        var gt = n(c);
        gt !== null && Cl(v, gt.startTime - L), rr = !1;
      }
      return rr;
    } finally {
      m = null, p = z, g = !1;
    }
  }
  var _ = !1, C = null, N = -1, W = 5, I = -1;
  function Pe() {
    return !(e.unstable_now() - I < W);
  }
  function dn() {
    if (C !== null) {
      var x = e.unstable_now();
      I = x;
      var L = !0;
      try {
        L = C(!0, x);
      } finally {
        L ? pn() : (_ = !1, C = null);
      }
    } else _ = !1;
  }
  var pn;
  if (typeof a == "function") pn = function() {
    a(dn);
  };
  else if (typeof MessageChannel < "u") {
    var Ai = new MessageChannel(), dc = Ai.port2;
    Ai.port1.onmessage = dn, pn = function() {
      dc.postMessage(null);
    };
  } else pn = function() {
    F(dn, 0);
  };
  function _l(x) {
    C = x, _ || (_ = !0, pn());
  }
  function Cl(x, L) {
    N = F(function() {
      x(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, _l(E));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < x ? Math.floor(1e3 / x) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(x) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = p;
    }
    var z = p;
    p = L;
    try {
      return x();
    } finally {
      p = z;
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
    var z = p;
    p = x;
    try {
      return L();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(x, L, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, x) {
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
    return Y = z + Y, x = { id: h++, callback: L, priorityLevel: x, startTime: z, expirationTime: Y, sortIndex: -1 }, z > H ? (x.sortIndex = z, t(c, x), n(s) === null && x === n(c) && (k ? (f(N), N = -1) : k = !0, Cl(v, z - H))) : (x.sortIndex = Y, t(s, x), w || g || (w = !0, _l(E))), x;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(x) {
    var L = p;
    return function() {
      var z = p;
      p = L;
      try {
        return x.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(ss);
os.exports = ss;
var Tc = os.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ic = ce, ge = Tc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var as = /* @__PURE__ */ new Set(), On = {};
function Mt(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) as.add(t[e]);
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), bl = Object.prototype.hasOwnProperty, Rc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Hi = {}, Qi = {};
function Mc(e) {
  return bl.call(Qi, e) ? !0 : bl.call(Hi, e) ? !1 : Rc.test(e) ? Qi[e] = !0 : (Hi[e] = !0, !1);
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
function se(e, t, n, r, l, u, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = i;
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
var Yu = /[\-:]([a-z])/g;
function Zu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Yu,
    Zu
  );
  ee[t] = new se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Yu, Zu);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Yu, Zu);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ju(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Oc(t, n, l, r) && (n = null), r || l === null ? Mc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ir = Symbol.for("react.element"), Ft = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), qu = Symbol.for("react.strict_mode"), eu = Symbol.for("react.profiler"), cs = Symbol.for("react.provider"), fs = Symbol.for("react.context"), bu = Symbol.for("react.forward_ref"), tu = Symbol.for("react.suspense"), nu = Symbol.for("react.suspense_list"), ei = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), ds = Symbol.for("react.offscreen"), Gi = Symbol.iterator;
function mn(e) {
  return e === null || typeof e != "object" ? null : (e = Gi && e[Gi] || e["@@iterator"], typeof e == "function" ? e : null);
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
`), u = r.stack.split(`
`), i = l.length - 1, o = u.length - 1; 1 <= i && 0 <= o && l[i] !== u[o]; ) o--;
      for (; 1 <= i && 0 <= o; i--, o--) if (l[i] !== u[o]) {
        if (i !== 1 || o !== 1)
          do
            if (i--, o--, 0 > o || l[i] !== u[o]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= o);
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
function ru(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Ft:
      return "Portal";
    case eu:
      return "Profiler";
    case qu:
      return "StrictMode";
    case tu:
      return "Suspense";
    case nu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case fs:
      return (e.displayName || "Context") + ".Consumer";
    case cs:
      return (e._context.displayName || "Context") + ".Provider";
    case bu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ei:
      return t = e.displayName || null, t !== null ? t : ru(e.type) || "Memo";
    case be:
      t = e._payload, e = e._init;
      try {
        return ru(e(t));
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
      return ru(t);
    case 8:
      return t === qu ? "StrictMode" : "Mode";
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
function Uc(e) {
  var t = ps(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, u = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, u.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = Uc(e));
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
function lu(e, t) {
  var n = t.checked;
  return $({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ki(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = pt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function hs(e, t) {
  t = t.checked, t != null && Ju(e, "checked", t, !1);
}
function uu(e, t) {
  hs(e, t);
  var n = pt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? iu(e, t.type, n) : t.hasOwnProperty("defaultValue") && iu(e, t.type, pt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Xi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function iu(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xn = Array.isArray;
function Yt(e, t, n, r) {
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
  return $({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Yi(e, t) {
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
  e._wrapperState = { initialValue: pt(n) };
}
function vs(e, t) {
  var n = pt(t.value), r = pt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Zi(e) {
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
function su(e, t) {
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
function ws(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px";
}
function ks(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = ws(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Vc = $({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function au(e, t) {
  if (t) {
    if (Vc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function cu(e, t) {
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
var fu = null;
function ti(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var du = null, Zt = null, Jt = null;
function Ji(e) {
  if (e = tr(e)) {
    if (typeof du != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = cl(t), du(e.stateNode, e.type, t));
  }
}
function Ss(e) {
  Zt ? Jt ? Jt.push(e) : Jt = [e] : Zt = e;
}
function Es() {
  if (Zt) {
    var e = Zt, t = Jt;
    if (Jt = Zt = null, Ji(e), t) for (e = 0; e < t.length; e++) Ji(t[e]);
  }
}
function xs(e, t) {
  return e(t);
}
function _s() {
}
var Il = !1;
function Cs(e, t, n) {
  if (Il) return e(t, n);
  Il = !0;
  try {
    return xs(e, t, n);
  } finally {
    Il = !1, (Zt !== null || Jt !== null) && (_s(), Es());
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
var pu = !1;
if (Ke) try {
  var hn = {};
  Object.defineProperty(hn, "passive", { get: function() {
    pu = !0;
  } }), window.addEventListener("test", hn, hn), window.removeEventListener("test", hn, hn);
} catch {
  pu = !1;
}
function $c(e, t, n, r, l, u, i, o, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Pn = !1, Dr = null, Fr = !1, mu = null, Bc = { onError: function(e) {
  Pn = !0, Dr = e;
} };
function Wc(e, t, n, r, l, u, i, o, s) {
  Pn = !1, Dr = null, $c.apply(Bc, arguments);
}
function Hc(e, t, n, r, l, u, i, o, s) {
  if (Wc.apply(this, arguments), Pn) {
    if (Pn) {
      var c = Dr;
      Pn = !1, Dr = null;
    } else throw Error(y(198));
    Fr || (Fr = !0, mu = c);
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
function qi(e) {
  if (jt(e) !== e) throw Error(y(188));
}
function Qc(e) {
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
        if (u === n) return qi(l), e;
        if (u === r) return qi(l), t;
        u = u.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) n = l, r = u;
    else {
      for (var i = !1, o = l.child; o; ) {
        if (o === n) {
          i = !0, n = l, r = u;
          break;
        }
        if (o === r) {
          i = !0, r = l, n = u;
          break;
        }
        o = o.sibling;
      }
      if (!i) {
        for (o = u.child; o; ) {
          if (o === n) {
            i = !0, n = u, r = l;
            break;
          }
          if (o === r) {
            i = !0, r = u, n = l;
            break;
          }
          o = o.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ps(e) {
  return e = Qc(e), e !== null ? Ls(e) : null;
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
var zs = ge.unstable_scheduleCallback, bi = ge.unstable_cancelCallback, Gc = ge.unstable_shouldYield, Kc = ge.unstable_requestPaint, Q = ge.unstable_now, Xc = ge.unstable_getCurrentPriorityLevel, ni = ge.unstable_ImmediatePriority, Ts = ge.unstable_UserBlockingPriority, Ur = ge.unstable_NormalPriority, Yc = ge.unstable_LowPriority, Is = ge.unstable_IdlePriority, il = null, Ae = null;
function Zc(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function") try {
    Ae.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
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
  var r = 0, l = e.suspendedLanes, u = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? r = _n(o) : (u &= i, u !== 0 && (r = _n(u)));
  } else i = n & ~l, i !== 0 ? r = _n(i) : u !== 0 && (r = _n(u));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
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
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
    var i = 31 - Me(u), o = 1 << i, s = l[i];
    s === -1 ? (!(o & n) || o & r) && (l[i] = ef(o, t)) : s <= t && (e.expiredLanes |= o), u &= ~o;
  }
}
function hu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Rs() {
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
    var l = 31 - Me(n), u = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
  }
}
function ri(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var M = 0;
function Ms(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var js, li, Os, Ds, Fs, vu = !1, fr = [], ut = null, it = null, ot = null, Un = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), tt = [], rf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function eo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
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
function vn(e, t, n, r, l, u) {
  return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = tr(t), t !== null && li(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function lf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ut = vn(ut, e, t, n, r, l), !0;
    case "dragenter":
      return it = vn(it, e, t, n, r, l), !0;
    case "mouseover":
      return ot = vn(ot, e, t, n, r, l), !0;
    case "pointerover":
      var u = l.pointerId;
      return Un.set(u, vn(Un.get(u) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return u = l.pointerId, An.set(u, vn(An.get(u) || null, e, t, n, r, l)), !0;
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
    var n = yu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fu = r, n.target.dispatchEvent(r), fu = null;
    } else return t = tr(n), t !== null && li(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function to(e, t, n) {
  Cr(e) && n.delete(t);
}
function uf() {
  vu = !1, ut !== null && Cr(ut) && (ut = null), it !== null && Cr(it) && (it = null), ot !== null && Cr(ot) && (ot = null), Un.forEach(to), An.forEach(to);
}
function yn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vu || (vu = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, uf)));
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
  for (ut !== null && yn(ut, e), it !== null && yn(it, e), ot !== null && yn(ot, e), Un.forEach(t), An.forEach(t), n = 0; n < tt.length; n++) r = tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && (n = tt[0], n.blockedOn === null); ) Us(n), n.blockedOn === null && tt.shift();
}
var qt = Je.ReactCurrentBatchConfig, Vr = !0;
function of(e, t, n, r) {
  var l = M, u = qt.transition;
  qt.transition = null;
  try {
    M = 1, ui(e, t, n, r);
  } finally {
    M = l, qt.transition = u;
  }
}
function sf(e, t, n, r) {
  var l = M, u = qt.transition;
  qt.transition = null;
  try {
    M = 4, ui(e, t, n, r);
  } finally {
    M = l, qt.transition = u;
  }
}
function ui(e, t, n, r) {
  if (Vr) {
    var l = yu(e, t, n, r);
    if (l === null) Bl(e, t, r, $r, n), eo(e, r);
    else if (lf(l, e, t, n, r)) r.stopPropagation();
    else if (eo(e, r), t & 4 && -1 < rf.indexOf(e)) {
      for (; l !== null; ) {
        var u = tr(l);
        if (u !== null && js(u), u = yu(e, t, n, r), u === null && Bl(e, t, r, $r, n), u === l) break;
        l = u;
      }
      l !== null && r.stopPropagation();
    } else Bl(e, t, r, null, n);
  }
}
var $r = null;
function yu(e, t, n, r) {
  if ($r = null, e = ti(r), e = Et(e), e !== null) if (t = jt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ns(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return $r = e, null;
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
      switch (Xc()) {
        case ni:
          return 1;
        case Ts:
          return 4;
        case Ur:
        case Yc:
          return 16;
        case Is:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null, ii = null, Nr = null;
function Vs() {
  if (Nr) return Nr;
  var e, t = ii, n = t.length, r, l = "value" in rt ? rt.value : rt.textContent, u = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[u - r]; r++) ;
  return Nr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Pr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function dr() {
  return !0;
}
function no() {
  return !1;
}
function ke(e) {
  function t(n, r, l, u, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = i, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(u) : u[o]);
    return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? dr : no, this.isPropagationStopped = no, this;
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
}, defaultPrevented: 0, isTrusted: 0 }, oi = ke(cn), er = $({}, cn, { view: 0, detail: 0 }), af = ke(er), Ml, jl, gn, ol = $({}, er, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: si, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (Ml = e.screenX - gn.screenX, jl = e.screenY - gn.screenY) : jl = Ml = 0, gn = e), Ml);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : jl;
} }), ro = ke(ol), cf = $({}, ol, { dataTransfer: 0 }), ff = ke(cf), df = $({}, er, { relatedTarget: 0 }), Ol = ke(df), pf = $({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mf = ke(pf), hf = $({}, cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), vf = ke(hf), yf = $({}, cn, { data: 0 }), lo = ke(yf), gf = {
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
function si() {
  return Sf;
}
var Ef = $({}, er, { key: function(e) {
  if (e.key) {
    var t = gf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Pr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: si, charCode: function(e) {
  return e.type === "keypress" ? Pr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), xf = ke(Ef), _f = $({}, ol, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uo = ke(_f), Cf = $({}, er, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: si }), Nf = ke(Cf), Pf = $({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lf = ke(Pf), zf = $({}, ol, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Tf = ke(zf), If = [9, 13, 27, 32], ai = Ke && "CompositionEvent" in window, Ln = null;
Ke && "documentMode" in document && (Ln = document.documentMode);
var Rf = Ke && "TextEvent" in window && !Ln, $s = Ke && (!ai || Ln && 8 < Ln && 11 >= Ln), io = " ", oo = !1;
function Bs(e, t) {
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
      return t.which !== 32 ? null : (oo = !0, io);
    case "textInput":
      return e = t.data, e === io && oo ? null : e;
    default:
      return null;
  }
}
function jf(e, t) {
  if (At) return e === "compositionend" || !ai && Bs(e, t) ? (e = Vs(), Nr = ii = rt = null, At = !1, e) : null;
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
      return $s && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Of = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function so(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Of[e.type] : t === "textarea";
}
function Hs(e, t, n, r) {
  Ss(r), t = Br(t, "onChange"), 0 < t.length && (n = new oi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var zn = null, $n = null;
function Df(e) {
  ta(e, 0);
}
function sl(e) {
  var t = Bt(e);
  if (ms(t)) return e;
}
function Ff(e, t) {
  if (e === "change") return t;
}
var Qs = !1;
if (Ke) {
  var Dl;
  if (Ke) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var ao = document.createElement("div");
      ao.setAttribute("oninput", "return;"), Fl = typeof ao.oninput == "function";
    }
    Dl = Fl;
  } else Dl = !1;
  Qs = Dl && (!document.documentMode || 9 < document.documentMode);
}
function co() {
  zn && (zn.detachEvent("onpropertychange", Gs), $n = zn = null);
}
function Gs(e) {
  if (e.propertyName === "value" && sl($n)) {
    var t = [];
    Hs(t, $n, e, ti(e)), Cs(Df, t);
  }
}
function Uf(e, t, n) {
  e === "focusin" ? (co(), zn = t, $n = n, zn.attachEvent("onpropertychange", Gs)) : e === "focusout" && co();
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
function fo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function po(e, t) {
  var n = fo(e);
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
    n = fo(n);
  }
}
function Ks(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ks(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
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
function ci(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Wf(e) {
  var t = Xs(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ks(n.ownerDocument.documentElement, n)) {
    if (r !== null && ci(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, u = Math.min(r.start, l);
        r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = po(n, u);
        var i = po(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Hf = Ke && "documentMode" in document && 11 >= document.documentMode, Vt = null, gu = null, Tn = null, wu = !1;
function mo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wu || Vt == null || Vt !== Or(r) || (r = Vt, "selectionStart" in r && ci(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Tn && Bn(Tn, r) || (Tn = r, r = Br(gu, "onSelect"), 0 < r.length && (t = new oi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Vt)));
}
function pr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var $t = { animationend: pr("Animation", "AnimationEnd"), animationiteration: pr("Animation", "AnimationIteration"), animationstart: pr("Animation", "AnimationStart"), transitionend: pr("Transition", "TransitionEnd") }, Ul = {}, Ys = {};
Ke && (Ys = document.createElement("div").style, "AnimationEvent" in window || (delete $t.animationend.animation, delete $t.animationiteration.animation, delete $t.animationstart.animation), "TransitionEvent" in window || delete $t.transitionend.transition);
function al(e) {
  if (Ul[e]) return Ul[e];
  if (!$t[e]) return e;
  var t = $t[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ys) return Ul[e] = t[n];
  return e;
}
var Zs = al("animationend"), Js = al("animationiteration"), qs = al("animationstart"), bs = al("transitionend"), ea = /* @__PURE__ */ new Map(), ho = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ht(e, t) {
  ea.set(e, t), Mt(t, [e]);
}
for (var Al = 0; Al < ho.length; Al++) {
  var Vl = ho[Al], Qf = Vl.toLowerCase(), Gf = Vl[0].toUpperCase() + Vl.slice(1);
  ht(Qf, "on" + Gf);
}
ht(Zs, "onAnimationEnd");
ht(Js, "onAnimationIteration");
ht(qs, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(bs, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));
function vo(e, t, n) {
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
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var o = r[i], s = o.instance, c = o.currentTarget;
        if (o = o.listener, s !== u && l.isPropagationStopped()) break e;
        vo(l, o, c), u = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (o = r[i], s = o.instance, c = o.currentTarget, o = o.listener, s !== u && l.isPropagationStopped()) break e;
        vo(l, o, c), u = s;
      }
    }
  }
  if (Fr) throw e = mu, Fr = !1, mu = null, e;
}
function O(e, t) {
  var n = t[_u];
  n === void 0 && (n = t[_u] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (na(t, e, 2, !1), n.add(r));
}
function $l(e, t, n) {
  var r = 0;
  t && (r |= 4), na(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
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
      var l = of;
      break;
    case 4:
      l = sf;
      break;
    default:
      l = ui;
  }
  n = l.bind(null, t, n, e), l = void 0, !pu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Bl(e, t, n, r, l) {
  var u = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var o = r.stateNode.containerInfo;
      if (o === l || o.nodeType === 8 && o.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; o !== null; ) {
        if (i = Et(o), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = u = i;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Cs(function() {
    var c = u, h = ti(n), m = [];
    e: {
      var p = ea.get(e);
      if (p !== void 0) {
        var g = oi, w = e;
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
            g = ro;
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
          case Zs:
          case Js:
          case qs:
            g = mf;
            break;
          case bs:
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
            g = uo;
        }
        var k = (t & 4) !== 0, F = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Fn(a, f), v != null && k.push(Hn(a, v, d)))), F) break;
          a = a.return;
        }
        0 < k.length && (p = new g(p, w, null, n, h), m.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== fu && (w = n.relatedTarget || n.fromElement) && (Et(w) || w[Xe])) break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? Et(w) : null, w !== null && (F = jt(w), w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (k = ro, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = uo, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), F = g == null ? p : Bt(g), d = w == null ? p : Bt(w), p = new k(v, a + "leave", g, n, h), p.target = F, p.relatedTarget = d, v = null, Et(h) === c && (k = new k(f, a + "enter", w, n, h), k.target = d, k.relatedTarget = F, v = k), F = v, g && w) t: {
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
          g !== null && yo(m, p, g, k, !1), w !== null && F !== null && yo(m, F, w, k, !0);
        }
      }
      e: {
        if (p = c ? Bt(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var E = Ff;
        else if (so(p)) if (Qs) E = $f;
        else {
          E = Af;
          var _ = Uf;
        }
        else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Vf);
        if (E && (E = E(e, c))) {
          Hs(m, E, n, h);
          break e;
        }
        _ && _(e, p, c), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && iu(p, "number", p.value);
      }
      switch (_ = c ? Bt(c) : window, e) {
        case "focusin":
          (so(_) || _.contentEditable === "true") && (Vt = _, gu = c, Tn = null);
          break;
        case "focusout":
          Tn = gu = Vt = null;
          break;
        case "mousedown":
          wu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wu = !1, mo(m, n, h);
          break;
        case "selectionchange":
          if (Hf) break;
        case "keydown":
        case "keyup":
          mo(m, n, h);
      }
      var C;
      if (ai) e: {
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
      else At ? Bs(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && ($s && n.locale !== "ko" && (At || N !== "onCompositionStart" ? N === "onCompositionEnd" && At && (C = Vs()) : (rt = h, ii = "value" in rt ? rt.value : rt.textContent, At = !0)), _ = Br(c, N), 0 < _.length && (N = new lo(N, e, null, n, h), m.push({ event: N, listeners: _ }), C ? N.data = C : (C = Ws(n), C !== null && (N.data = C)))), (C = Rf ? Mf(e, n) : jf(e, n)) && (c = Br(c, "onBeforeInput"), 0 < c.length && (h = new lo("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: c }), h.data = C));
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
    l.tag === 5 && u !== null && (l = u, u = Fn(e, n), u != null && r.unshift(Hn(e, u, l)), u = Fn(e, t), u != null && r.push(Hn(e, u, l))), e = e.return;
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
function yo(e, t, n, r, l) {
  for (var u = t._reactName, i = []; n !== null && n !== r; ) {
    var o = n, s = o.alternate, c = o.stateNode;
    if (s !== null && s === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (s = Fn(n, u), s != null && i.unshift(Hn(n, s, o))) : l || (s = Fn(n, u), s != null && i.push(Hn(n, s, o)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Xf = /\r\n?/g, Yf = /\u0000|\uFFFD/g;
function go(e) {
  return (typeof e == "string" ? e : "" + e).replace(Xf, `
`).replace(Yf, "");
}
function hr(e, t, n) {
  if (t = go(t), go(e) !== t && n) throw Error(y(425));
}
function Wr() {
}
var ku = null, Su = null;
function Eu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xu = typeof setTimeout == "function" ? setTimeout : void 0, Zf = typeof clearTimeout == "function" ? clearTimeout : void 0, wo = typeof Promise == "function" ? Promise : void 0, Jf = typeof queueMicrotask == "function" ? queueMicrotask : typeof wo < "u" ? function(e) {
  return wo.resolve(null).then(e).catch(qf);
} : xu;
function qf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Wl(e, t) {
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
function ko(e) {
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
var fn = Math.random().toString(36).slice(2), Ue = "__reactFiber$" + fn, Qn = "__reactProps$" + fn, Xe = "__reactContainer$" + fn, _u = "__reactEvents$" + fn, bf = "__reactListeners$" + fn, ed = "__reactHandles$" + fn;
function Et(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Xe] || n[Ue]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ko(e); e !== null; ) {
        if (n = e[Ue]) return n;
        e = ko(e);
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
var Cu = [], Wt = -1;
function vt(e) {
  return { current: e };
}
function D(e) {
  0 > Wt || (e.current = Cu[Wt], Cu[Wt] = null, Wt--);
}
function j(e, t) {
  Wt++, Cu[Wt] = e.current, e.current = t;
}
var mt = {}, le = vt(mt), de = vt(!1), Lt = mt;
function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, u;
  for (u in n) l[u] = t[u];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function pe(e) {
  return e = e.childContextTypes, e != null;
}
function Hr() {
  D(de), D(le);
}
function So(e, t, n) {
  if (le.current !== mt) throw Error(y(168));
  j(le, t), j(de, n);
}
function ra(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Fc(e) || "Unknown", l));
  return $({}, n, r);
}
function Qr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mt, Lt = le.current, j(le, e), j(de, de.current), !0;
}
function Eo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = ra(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, D(de), D(le), j(le, e)) : D(de), j(de, n);
}
var We = null, fl = !1, Hl = !1;
function la(e) {
  We === null ? We = [e] : We.push(e);
}
function td(e) {
  fl = !0, la(e);
}
function yt() {
  if (!Hl && We !== null) {
    Hl = !0;
    var e = 0, t = M;
    try {
      var n = We;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      We = null, fl = !1;
    } catch (l) {
      throw We !== null && (We = We.slice(e + 1)), zs(ni, yt), l;
    } finally {
      M = t, Hl = !1;
    }
  }
  return null;
}
var Ht = [], Qt = 0, Gr = null, Kr = 0, Se = [], Ee = 0, zt = null, He = 1, Qe = "";
function kt(e, t) {
  Ht[Qt++] = Kr, Ht[Qt++] = Gr, Gr = e, Kr = t;
}
function ua(e, t, n) {
  Se[Ee++] = He, Se[Ee++] = Qe, Se[Ee++] = zt, zt = e;
  var r = He;
  e = Qe;
  var l = 32 - Me(r) - 1;
  r &= ~(1 << l), n += 1;
  var u = 32 - Me(t) + l;
  if (30 < u) {
    var i = l - l % 5;
    u = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, He = 1 << 32 - Me(t) + l | n << l | r, Qe = u + e;
  } else He = 1 << u | n << l | r, Qe = e;
}
function fi(e) {
  e.return !== null && (kt(e, 1), ua(e, 1, 0));
}
function di(e) {
  for (; e === Gr; ) Gr = Ht[--Qt], Ht[Qt] = null, Kr = Ht[--Qt], Ht[Qt] = null;
  for (; e === zt; ) zt = Se[--Ee], Se[Ee] = null, Qe = Se[--Ee], Se[Ee] = null, He = Se[--Ee], Se[Ee] = null;
}
var ye = null, ve = null, U = !1, Re = null;
function ia(e, t) {
  var n = xe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function xo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = st(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? { id: He, overflow: Qe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function Nu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pu(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!xo(e, t)) {
        if (Nu(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = ye;
        t && xo(e, t) ? ia(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, ye = e);
      }
    } else {
      if (Nu(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, U = !1, ye = e;
    }
  }
}
function _o(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ye = e;
}
function vr(e) {
  if (e !== ye) return !1;
  if (!U) return _o(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Eu(e.type, e.memoizedProps)), t && (t = ve)) {
    if (Nu(e)) throw oa(), Error(y(418));
    for (; t; ) ia(e, t), t = st(t.nextSibling);
  }
  if (_o(e), e.tag === 13) {
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
function oa() {
  for (var e = ve; e; ) e = st(e.nextSibling);
}
function rn() {
  ve = ye = null, U = !1;
}
function pi(e) {
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
      var l = r, u = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(i) {
        var o = l.refs;
        i === null ? delete o[u] : o[u] = i;
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
function Co(e) {
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
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Jl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Ut ? h(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === be && Co(E) === a.type) ? (v = l(a, d.props), v.ref = wn(f, a, d), v.return = f, v) : (v = jr(d.type, d.key, d.props, null, f.mode, v), v.ref = wn(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = ql(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = Nt(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Jl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ir:
          return d = jr(a.type, a.key, a.props, null, f.mode, d), d.ref = wn(f, null, a), d.return = f, d;
        case Ft:
          return a = ql(a, f.mode, d), a.return = f, a;
        case be:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (xn(a) || mn(a)) return a = Nt(a, f.mode, d, null), a.return = f, a;
      yr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : o(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ir:
          return d.key === E ? s(f, a, d, v) : null;
        case Ft:
          return d.key === E ? c(f, a, d, v) : null;
        case be:
          return E = d._init, p(
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
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, o(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ir:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case Ft:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case be:
          var _ = v._init;
          return g(f, a, d, _(v._payload), E);
      }
      if (xn(v) || mn(v)) return f = f.get(d) || null, h(a, f, v, E, null);
      yr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, _ = null, C = a, N = a = 0, W = null; C !== null && N < d.length; N++) {
      C.index > N ? (W = C, C = null) : W = C.sibling;
      var I = p(f, C, d[N], v);
      if (I === null) {
        C === null && (C = W);
        break;
      }
      e && C && I.alternate === null && t(f, C), a = u(I, a, N), _ === null ? E = I : _.sibling = I, _ = I, C = W;
    }
    if (N === d.length) return n(f, C), U && kt(f, N), E;
    if (C === null) {
      for (; N < d.length; N++) C = m(f, d[N], v), C !== null && (a = u(C, a, N), _ === null ? E = C : _.sibling = C, _ = C);
      return U && kt(f, N), E;
    }
    for (C = r(f, C); N < d.length; N++) W = g(C, f, N, d[N], v), W !== null && (e && W.alternate !== null && C.delete(W.key === null ? N : W.key), a = u(W, a, N), _ === null ? E = W : _.sibling = W, _ = W);
    return e && C.forEach(function(Pe) {
      return t(f, Pe);
    }), U && kt(f, N), E;
  }
  function k(f, a, d, v) {
    var E = mn(d);
    if (typeof E != "function") throw Error(y(150));
    if (d = E.call(d), d == null) throw Error(y(151));
    for (var _ = E = null, C = a, N = a = 0, W = null, I = d.next(); C !== null && !I.done; N++, I = d.next()) {
      C.index > N ? (W = C, C = null) : W = C.sibling;
      var Pe = p(f, C, I.value, v);
      if (Pe === null) {
        C === null && (C = W);
        break;
      }
      e && C && Pe.alternate === null && t(f, C), a = u(Pe, a, N), _ === null ? E = Pe : _.sibling = Pe, _ = Pe, C = W;
    }
    if (I.done) return n(
      f,
      C
    ), U && kt(f, N), E;
    if (C === null) {
      for (; !I.done; N++, I = d.next()) I = m(f, I.value, v), I !== null && (a = u(I, a, N), _ === null ? E = I : _.sibling = I, _ = I);
      return U && kt(f, N), E;
    }
    for (C = r(f, C); !I.done; N++, I = d.next()) I = g(C, f, N, I.value, v), I !== null && (e && I.alternate !== null && C.delete(I.key === null ? N : I.key), a = u(I, a, N), _ === null ? E = I : _.sibling = I, _ = I);
    return e && C.forEach(function(dn) {
      return t(f, dn);
    }), U && kt(f, N), E;
  }
  function F(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Ut && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ir:
          e: {
            for (var E = d.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (E = d.type, E === Ut) {
                  if (_.tag === 7) {
                    n(f, _.sibling), a = l(_, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === be && Co(E) === _.type) {
                  n(f, _.sibling), a = l(_, d.props), a.ref = wn(f, _, d), a.return = f, f = a;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === Ut ? (a = Nt(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = jr(d.type, d.key, d.props, null, f.mode, v), v.ref = wn(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case Ft:
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
            a = ql(d, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case be:
          return _ = d._init, F(f, a, _(d._payload), v);
      }
      if (xn(d)) return w(f, a, d, v);
      if (mn(d)) return k(f, a, d, v);
      yr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Jl(d, f.mode, v), a.return = f, f = a), i(f)) : n(f, a);
  }
  return F;
}
var ln = sa(!0), aa = sa(!1), Xr = vt(null), Yr = null, Gt = null, mi = null;
function hi() {
  mi = Gt = Yr = null;
}
function vi(e) {
  var t = Xr.current;
  D(Xr), e._currentValue = t;
}
function Lu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function bt(e, t) {
  Yr = e, mi = Gt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null);
}
function Ce(e) {
  var t = e._currentValue;
  if (mi !== e) if (e = { context: e, memoizedValue: t, next: null }, Gt === null) {
    if (Yr === null) throw Error(y(308));
    Gt = e, Yr.dependencies = { lanes: 0, firstContext: e };
  } else Gt = Gt.next = e;
  return t;
}
var xt = null;
function yi(e) {
  xt === null ? xt = [e] : xt.push(e);
}
function ca(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, yi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ye(e, r);
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function gi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fa(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ge(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ye(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, yi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ye(e, n);
}
function Lr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ri(e, n);
  }
}
function No(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, u = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        u === null ? l = u = i : u = u.next = i, n = n.next;
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
  var u = l.firstBaseUpdate, i = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var s = o, c = s.next;
    s.next = null, i === null ? u = c : i.next = c, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, o = h.lastBaseUpdate, o !== i && (o === null ? h.firstBaseUpdate = c : o.next = c, h.lastBaseUpdate = s));
  }
  if (u !== null) {
    var m = l.baseState;
    i = 0, h = c = s = null, o = u;
    do {
      var p = o.lane, g = o.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var w = e, k = o;
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
              m = $({}, m, p);
              break e;
            case 2:
              et = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [o] : p.push(o));
      } else g = { eventTime: g, lane: p, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, h === null ? (c = h = g, s = m) : h = h.next = g, i |= p;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        p = o, o = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else u === null && (l.shared.lanes = 0);
    It |= i, e.lanes = i, e.memoizedState = m;
  }
}
function Po(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var nr = {}, Ve = vt(nr), Gn = vt(nr), Kn = vt(nr);
function _t(e) {
  if (e === nr) throw Error(y(174));
  return e;
}
function wi(e, t) {
  switch (j(Kn, t), j(Gn, e), j(Ve, nr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : su(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = su(t, e);
  }
  D(Ve), j(Ve, t);
}
function un() {
  D(Ve), D(Gn), D(Kn);
}
function da(e) {
  _t(Kn.current);
  var t = _t(Ve.current), n = su(t, e.type);
  t !== n && (j(Gn, e), j(Ve, n));
}
function ki(e) {
  Gn.current === e && (D(Ve), D(Gn));
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
var Ql = [];
function Si() {
  for (var e = 0; e < Ql.length; e++) Ql[e]._workInProgressVersionPrimary = null;
  Ql.length = 0;
}
var zr = Je.ReactCurrentDispatcher, Gl = Je.ReactCurrentBatchConfig, Tt = 0, V = null, K = null, Z = null, qr = !1, In = !1, Xn = 0, rd = 0;
function te() {
  throw Error(y(321));
}
function Ei(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Oe(e[n], t[n])) return !1;
  return !0;
}
function xi(e, t, n, r, l, u) {
  if (Tt = u, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zr.current = e === null || e.memoizedState === null ? od : sd, e = n(r, l), In) {
    u = 0;
    do {
      if (In = !1, Xn = 0, 25 <= u) throw Error(y(301));
      u += 1, Z = K = null, t.updateQueue = null, zr.current = ad, e = n(r, l);
    } while (In);
  }
  if (zr.current = br, t = K !== null && K.next !== null, Tt = 0, Z = K = V = null, qr = !1, t) throw Error(y(300));
  return e;
}
function _i() {
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
  var r = K, l = r.baseQueue, u = n.pending;
  if (u !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = u.next, u.next = i;
    }
    r.baseQueue = l = u, n.pending = null;
  }
  if (l !== null) {
    u = l.next, r = r.baseState;
    var o = i = null, s = null, c = u;
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
        s === null ? (o = s = m, i = r) : s = s.next = m, V.lanes |= h, It |= h;
      }
      c = c.next;
    } while (c !== null && c !== u);
    s === null ? i = r : s.next = o, Oe(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      u = l.lane, V.lanes |= u, It |= u, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xl(e) {
  var t = Ne(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, u = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      u = e(u, i.action), i = i.next;
    while (i !== l);
    Oe(u, t.memoizedState) || (fe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
  }
  return [u, r];
}
function pa() {
}
function ma(e, t) {
  var n = V, r = Ne(), l = t(), u = !Oe(r.memoizedState, l);
  if (u && (r.memoizedState = l, fe = !0), r = r.queue, Ci(ya.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || Z !== null && Z.memoizedState.tag & 1) {
    if (n.flags |= 2048, Zn(9, va.bind(null, n, r, l, t), void 0, null), J === null) throw Error(y(349));
    Tt & 30 || ha(n, t, l);
  }
  return l;
}
function ha(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
function Lo(e) {
  var t = Fe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yn, lastRenderedState: e }, t.queue = e, e = e.dispatch = id.bind(null, V, e), [t.memoizedState, e];
}
function Zn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ka() {
  return Ne().memoizedState;
}
function Tr(e, t, n, r) {
  var l = Fe();
  V.flags |= e, l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r);
}
function dl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (K !== null) {
    var i = K.memoizedState;
    if (u = i.destroy, r !== null && Ei(r, i.deps)) {
      l.memoizedState = Zn(t, n, u, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = Zn(1 | t, n, u, r);
}
function zo(e, t) {
  return Tr(8390656, 8, e, t);
}
function Ci(e, t) {
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
function Ni() {
}
function Ca(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ei(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Na(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ei(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Pa(e, t, n) {
  return Tt & 21 ? (Oe(n, t) || (n = Rs(), V.lanes |= n, It |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n);
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
function La() {
  return Ne().memoizedState;
}
function ud(e, t, n) {
  var r = ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, za(e)) Ta(t, n);
  else if (n = ca(e, t, n, r), n !== null) {
    var l = ie();
    je(n, e, r, l), Ia(n, t, r);
  }
}
function id(e, t, n) {
  var r = ft(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (za(e)) Ta(t, l);
  else {
    var u = e.alternate;
    if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
      var i = t.lastRenderedState, o = u(i, n);
      if (l.hasEagerState = !0, l.eagerState = o, Oe(o, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, yi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = ca(e, t, l, r), n !== null && (l = ie(), je(n, e, r, l), Ia(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function Ta(e, t) {
  In = qr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ia(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ri(e, n);
  }
}
var br = { readContext: Ce, useCallback: te, useContext: te, useEffect: te, useImperativeHandle: te, useInsertionEffect: te, useLayoutEffect: te, useMemo: te, useReducer: te, useRef: te, useState: te, useDebugValue: te, useDeferredValue: te, useTransition: te, useMutableSource: te, useSyncExternalStore: te, useId: te, unstable_isNewReconciler: !1 }, od = { readContext: Ce, useCallback: function(e, t) {
  return Fe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ce, useEffect: zo, useImperativeHandle: function(e, t, n) {
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ud.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Fe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Lo, useDebugValue: Ni, useDeferredValue: function(e) {
  return Fe().memoizedState = e;
}, useTransition: function() {
  var e = Lo(!1), t = e[0];
  return e = ld.bind(null, e[1]), Fe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = Fe();
  if (U) {
    if (n === void 0) throw Error(y(407));
    n = n();
  } else {
    if (n = t(), J === null) throw Error(y(349));
    Tt & 30 || ha(r, t, n);
  }
  l.memoizedState = n;
  var u = { value: n, getSnapshot: t };
  return l.queue = u, zo(ya.bind(
    null,
    r,
    u,
    e
  ), [e]), r.flags |= 2048, Zn(9, va.bind(null, r, u, n, t), void 0, null), n;
}, useId: function() {
  var e = Fe(), t = J.identifierPrefix;
  if (U) {
    var n = Qe, r = He;
    n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = rd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, sd = {
  readContext: Ce,
  useCallback: Ca,
  useContext: Ce,
  useEffect: Ci,
  useImperativeHandle: _a,
  useInsertionEffect: Sa,
  useLayoutEffect: Ea,
  useMemo: Na,
  useReducer: Kl,
  useRef: ka,
  useState: function() {
    return Kl(Yn);
  },
  useDebugValue: Ni,
  useDeferredValue: function(e) {
    var t = Ne();
    return Pa(t, K.memoizedState, e);
  },
  useTransition: function() {
    var e = Kl(Yn)[0], t = Ne().memoizedState;
    return [e, t];
  },
  useMutableSource: pa,
  useSyncExternalStore: ma,
  useId: La,
  unstable_isNewReconciler: !1
}, ad = { readContext: Ce, useCallback: Ca, useContext: Ce, useEffect: Ci, useImperativeHandle: _a, useInsertionEffect: Sa, useLayoutEffect: Ea, useMemo: Na, useReducer: Xl, useRef: ka, useState: function() {
  return Xl(Yn);
}, useDebugValue: Ni, useDeferredValue: function(e) {
  var t = Ne();
  return K === null ? t.memoizedState = e : Pa(t, K.memoizedState, e);
}, useTransition: function() {
  var e = Xl(Yn)[0], t = Ne().memoizedState;
  return [e, t];
}, useMutableSource: pa, useSyncExternalStore: ma, useId: La, unstable_isNewReconciler: !1 };
function Te(e, t) {
  if (e && e.defaultProps) {
    t = $({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : $({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = { isMounted: function(e) {
  return (e = e._reactInternals) ? jt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = ft(e), u = Ge(r, l);
  u.payload = t, n != null && (u.callback = n), t = at(e, u, l), t !== null && (je(t, e, l, r), Lr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = ft(e), u = Ge(r, l);
  u.tag = 1, u.payload = t, n != null && (u.callback = n), t = at(e, u, l), t !== null && (je(t, e, l, r), Lr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ie(), r = ft(e), l = Ge(n, r);
  l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (je(t, e, r, n), Lr(t, e, r));
} };
function To(e, t, n, r, l, u, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, i) : t.prototype && t.prototype.isPureReactComponent ? !Bn(n, r) || !Bn(l, u) : !0;
}
function Ra(e, t, n) {
  var r = !1, l = mt, u = t.contextType;
  return typeof u == "object" && u !== null ? u = Ce(u) : (l = pe(t) ? Lt : le.current, r = t.contextTypes, u = (r = r != null) ? nn(e, l) : mt), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
}
function Io(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function Tu(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, gi(e);
  var u = t.contextType;
  typeof u == "object" && u !== null ? l.context = Ce(u) : (u = pe(t) ? Lt : le.current, l.context = nn(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (zu(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && pl.enqueueReplaceState(l, l.state, null), Zr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function on(e, t) {
  try {
    var n = "", r = t;
    do
      n += Dc(r), r = r.return;
    while (r);
    var l = n;
  } catch (u) {
    l = `
Error generating stack: ` + u.message + `
` + u.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Yl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Iu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cd = typeof WeakMap == "function" ? WeakMap : Map;
function Ma(e, t, n) {
  n = Ge(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    tl || (tl = !0, $u = r), Iu(e, t);
  }, n;
}
function ja(e, t, n) {
  n = Ge(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Iu(e, t);
    };
  }
  var u = e.stateNode;
  return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
    Iu(e, t), typeof r != "function" && (ct === null ? ct = /* @__PURE__ */ new Set([this]) : ct.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Ro(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = _d.bind(null, e, t, n), t.then(e, e));
}
function Mo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function jo(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ge(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e);
}
var fd = Je.ReactCurrentOwner, fe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? aa(t, null, n, r) : ln(t, e.child, n, r);
}
function Oo(e, t, n, r, l) {
  n = n.render;
  var u = t.ref;
  return bt(t, l), r = xi(e, t, n, r, u, l), n = _i(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (U && n && fi(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function Do(e, t, n, r, l) {
  if (e === null) {
    var u = n.type;
    return typeof u == "function" && !ji(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Oa(e, t, u, r, l)) : (e = jr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (u = e.child, !(e.lanes & l)) {
    var i = u.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Bn, n(i, r) && e.ref === t.ref) return Ze(e, t, l);
  }
  return t.flags |= 1, e = dt(u, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Oa(e, t, n, r, l) {
  if (e !== null) {
    var u = e.memoizedProps;
    if (Bn(u, r) && e.ref === t.ref) if (fe = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
    else return t.lanes = e.lanes, Ze(e, t, l);
  }
  return Ru(e, t, n, r, l);
}
function Da(e, t, n) {
  var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, j(Xt, he), he |= n;
  else {
    if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, j(Xt, he), he |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, j(Xt, he), he |= r;
  }
  else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, j(Xt, he), he |= r;
  return ue(e, t, l, n), t.child;
}
function Fa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ru(e, t, n, r, l) {
  var u = pe(n) ? Lt : le.current;
  return u = nn(t, u), bt(t, l), n = xi(e, t, n, r, u, l), r = _i(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (U && r && fi(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function Fo(e, t, n, r, l) {
  if (pe(n)) {
    var u = !0;
    Qr(t);
  } else u = !1;
  if (bt(t, l), t.stateNode === null) Ir(e, t), Ra(t, n, r), Tu(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, o = t.memoizedProps;
    i.props = o;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ce(c) : (c = pe(n) ? Lt : le.current, c = nn(t, c));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || s !== c) && Io(t, i, r, c), et = !1;
    var p = t.memoizedState;
    i.state = p, Zr(t, r, i, l), s = t.memoizedState, o !== r || p !== s || de.current || et ? (typeof h == "function" && (zu(t, n, h, r), s = t.memoizedState), (o = et || To(t, n, o, r, p, s, c)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = o) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, fa(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : Te(t.type, o), i.props = c, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ce(s) : (s = pe(n) ? Lt : le.current, s = nn(t, s));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== m || p !== s) && Io(t, i, r, s), et = !1, p = t.memoizedState, i.state = p, Zr(t, r, i, l);
    var w = t.memoizedState;
    o !== m || p !== w || de.current || et ? (typeof g == "function" && (zu(t, n, g, r), w = t.memoizedState), (c = et || To(t, n, c, r, p, w, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Mu(e, t, n, r, u, l);
}
function Mu(e, t, n, r, l, u) {
  Fa(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Eo(t, n, !1), Ze(e, t, u);
  r = t.stateNode, fd.current = t;
  var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = ln(t, e.child, null, u), t.child = ln(t, null, o, u)) : ue(e, t, o, u), t.memoizedState = r.state, l && Eo(t, n, !0), t.child;
}
function Ua(e) {
  var t = e.stateNode;
  t.pendingContext ? So(e, t.pendingContext, t.pendingContext !== t.context) : t.context && So(e, t.context, !1), wi(e, t.containerInfo);
}
function Uo(e, t, n, r, l) {
  return rn(), pi(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var ju = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ou(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Aa(e, t, n) {
  var r = t.pendingProps, l = A.current, u = !1, i = (t.flags & 128) !== 0, o;
  if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), j(A, l & 1), e === null)
    return Pu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, i = { mode: "hidden", children: i }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = i) : u = vl(i, r, 0, null), e = Nt(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Ou(n), t.memoizedState = ju, e) : Pi(t, i));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return dd(e, t, i, r, o, l, n);
  if (u) {
    u = r.fallback, i = t.mode, l = e.child, o = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = dt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? u = dt(o, u) : (u = Nt(u, i, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, i = e.child.memoizedState, i = i === null ? Ou(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, u.memoizedState = i, u.childLanes = e.childLanes & ~n, t.memoizedState = ju, r;
  }
  return u = e.child, e = u.sibling, r = dt(u, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Pi(e, t) {
  return t = vl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function gr(e, t, n, r) {
  return r !== null && pi(r), ln(t, e.child, null, n), e = Pi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dd(e, t, n, r, l, u, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Yl(Error(y(422))), gr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = vl({ mode: "visible", children: r.children }, l, 0, null), u = Nt(u, l, i, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, t.mode & 1 && ln(t, e.child, null, i), t.child.memoizedState = Ou(i), t.memoizedState = ju, u);
  if (!(t.mode & 1)) return gr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, u = Error(y(419)), r = Yl(u, r, void 0), gr(e, t, i, r);
  }
  if (o = (i & e.childLanes) !== 0, fe || o) {
    if (r = J, r !== null) {
      switch (i & -i) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Ye(e, l), je(r, e, l, -1));
    }
    return Mi(), r = Yl(Error(y(421))), gr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Cd.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, ve = st(l.nextSibling), ye = t, U = !0, Re = null, e !== null && (Se[Ee++] = He, Se[Ee++] = Qe, Se[Ee++] = zt, He = e.id, Qe = e.overflow, zt = t), t = Pi(t, r.children), t.flags |= 4096, t);
}
function Ao(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Lu(e.return, t, n);
}
function Zl(e, t, n, r, l) {
  var u = e.memoizedState;
  u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
}
function Va(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, u = r.tail;
  if (ue(e, t, r.children, n), r = A.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ao(e, n, t);
      else if (e.tag === 19) Ao(e, n, t);
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
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Zl(t, !1, l, n, u);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Jr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Zl(t, !0, n, null, u);
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
  if (e !== null && (t.dependencies = e.dependencies), It |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function pd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ua(t), rn();
      break;
    case 5:
      da(t);
      break;
    case 1:
      pe(t.type) && Qr(t);
      break;
    case 4:
      wi(t, t.stateNode.containerInfo);
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
        if (r) return Va(e, t, n);
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
var $a, Du, Ba, Wa;
$a = function(e, t) {
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
Du = function() {
};
Ba = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, _t(Ve.current);
    var u = null;
    switch (n) {
      case "input":
        l = lu(e, l), r = lu(e, r), u = [];
        break;
      case "select":
        l = $({}, l, { value: void 0 }), r = $({}, r, { value: void 0 }), u = [];
        break;
      case "textarea":
        l = ou(e, l), r = ou(e, r), u = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
    }
    au(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (i in o) o.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (On.hasOwnProperty(c) ? u || (u = []) : (u = u || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== o && (s != null || o != null)) if (c === "style") if (o) {
        for (i in o) !o.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && o[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (u || (u = []), u.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, o = o ? o.__html : void 0, s != null && o !== s && (u = u || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (On.hasOwnProperty(c) ? (s != null && c === "onScroll" && O("scroll", e), u || o === s || (u = [])) : (u = u || []).push(c, s));
    }
    n && (u = u || []).push("style", n);
    var c = u;
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
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function md(e, t, n) {
  var r = t.pendingProps;
  switch (di(t), t.tag) {
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
      return pe(t.type) && Hr(), ne(t), null;
    case 3:
      return r = t.stateNode, un(), D(de), D(le), Si(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Re !== null && (Hu(Re), Re = null))), Du(e, t), ne(t), null;
    case 5:
      ki(t);
      var l = _t(Kn.current);
      if (n = t.type, e !== null && t.stateNode != null) Ba(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (e = _t(Ve.current), vr(t)) {
          r = t.stateNode, n = t.type;
          var u = t.memoizedProps;
          switch (r[Ue] = t, r[Qn] = u, e = (t.mode & 1) !== 0, n) {
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
              Ki(r, u), O("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!u.multiple }, O("invalid", r);
              break;
            case "textarea":
              Yi(r, u), O("invalid", r);
          }
          au(n, u), l = null;
          for (var i in u) if (u.hasOwnProperty(i)) {
            var o = u[i];
            i === "children" ? typeof o == "string" ? r.textContent !== o && (u.suppressHydrationWarning !== !0 && hr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (u.suppressHydrationWarning !== !0 && hr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : On.hasOwnProperty(i) && o != null && i === "onScroll" && O("scroll", r);
          }
          switch (n) {
            case "input":
              or(r), Xi(r, u, !0);
              break;
            case "textarea":
              or(r), Zi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick == "function" && (r.onclick = Wr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ys(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ue] = t, e[Qn] = r, $a(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = cu(n, r), n) {
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
                Ki(e, r), l = lu(e, r), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = $({}, r, { value: void 0 }), O("invalid", e);
                break;
              case "textarea":
                Yi(e, r), l = ou(e, r), O("invalid", e);
                break;
              default:
                l = r;
            }
            au(n, l), o = l;
            for (u in o) if (o.hasOwnProperty(u)) {
              var s = o[u];
              u === "style" ? ks(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && gs(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Dn(e, s) : typeof s == "number" && Dn(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (On.hasOwnProperty(u) ? s != null && u === "onScroll" && O("scroll", e) : s != null && Ju(e, u, s, i));
            }
            switch (n) {
              case "input":
                or(e), Xi(e, r, !1);
                break;
              case "textarea":
                or(e), Zi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, u = r.value, u != null ? Yt(e, !!r.multiple, u, !1) : r.defaultValue != null && Yt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Wr);
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
      if (e && t.stateNode != null) Wa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (n = _t(Kn.current), _t(Ve.current), vr(t)) {
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
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128)) oa(), rn(), t.flags |= 98560, u = !1;
        else if (u = vr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!u) throw Error(y(318));
            if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(y(317));
            u[Ue] = t;
          } else rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ne(t), u = !1;
        } else Re !== null && (Hu(Re), Re = null), u = !0;
        if (!u) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || A.current & 1 ? X === 0 && (X = 3) : Mi())), t.updateQueue !== null && (t.flags |= 4), ne(t), null);
    case 4:
      return un(), Du(e, t), e === null && Wn(t.stateNode.containerInfo), ne(t), null;
    case 10:
      return vi(t.type._context), ne(t), null;
    case 17:
      return pe(t.type) && Hr(), ne(t), null;
    case 19:
      if (D(A), u = t.memoizedState, u === null) return ne(t), null;
      if (r = (t.flags & 128) !== 0, i = u.rendering, i === null) if (r) kn(u, !1);
      else {
        if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Jr(e), i !== null) {
            for (t.flags |= 128, kn(u, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, i = u.alternate, i === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, u.type = i.type, e = i.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return j(A, A.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        u.tail !== null && Q() > sn && (t.flags |= 128, r = !0, kn(u, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Jr(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kn(u, !0), u.tail === null && u.tailMode === "hidden" && !i.alternate && !U) return ne(t), null;
        } else 2 * Q() - u.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128, r = !0, kn(u, !1), t.lanes = 4194304);
        u.isBackwards ? (i.sibling = t.child, t.child = i) : (n = u.last, n !== null ? n.sibling = i : t.child = i, u.last = i);
      }
      return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Q(), t.sibling = null, n = A.current, j(A, r ? n & 1 | 2 : n & 1), t) : (ne(t), null);
    case 22:
    case 23:
      return Ri(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ne(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function hd(e, t) {
  switch (di(t), t.tag) {
    case 1:
      return pe(t.type) && Hr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return un(), D(de), D(le), Si(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ki(t), null;
    case 13:
      if (D(A), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(y(340));
        rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return D(A), null;
    case 4:
      return un(), null;
    case 10:
      return vi(t.type._context), null;
    case 22:
    case 23:
      return Ri(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1, re = !1, vd = typeof WeakSet == "function" ? WeakSet : Set, S = null;
function Kt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    B(e, t, r);
  }
  else n.current = null;
}
function Fu(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var Vo = !1;
function yd(e, t) {
  if (ku = Vr, e = Xs(), ci(e)) {
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
        var i = 0, o = -1, s = -1, c = 0, h = 0, m = e, p = null;
        t: for (; ; ) {
          for (var g; m !== n || l !== 0 && m.nodeType !== 3 || (o = i + l), m !== u || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (g = m.firstChild) !== null; )
            p = m, m = g;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++c === l && (o = i), p === u && ++h === r && (s = i), (g = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = g;
        }
        n = o === -1 || s === -1 ? null : { start: o, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Su = { focusedElem: e, selectionRange: n }, Vr = !1, S = t; S !== null; ) if (t = S, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, S = e;
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
  return w = Vo, Vo = !1, w;
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var u = l.destroy;
        l.destroy = void 0, u !== void 0 && Fu(t, n, u);
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
function Uu(e) {
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
function Ha(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ha(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Qn], delete t[_u], delete t[bf], delete t[ed])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $o(e) {
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
function Au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Au(e, t, n), e = e.sibling; e !== null; ) Au(e, t, n), e = e.sibling;
}
function Vu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Vu(e, t, n), e = e.sibling; e !== null; ) Vu(e, t, n), e = e.sibling;
}
var q = null, Ie = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Ga(e, t, n), n = n.sibling;
}
function Ga(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function") try {
    Ae.onCommitFiberUnmount(il, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      re || Kt(n, t);
    case 6:
      var r = q, l = Ie;
      q = null, qe(e, t, n), q = r, Ie = l, q !== null && (Ie ? (e = q, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null && (Ie ? (e = q, n = n.stateNode, e.nodeType === 8 ? Wl(e.parentNode, n) : e.nodeType === 1 && Wl(e, n), Vn(e)) : Wl(q, n.stateNode));
      break;
    case 4:
      r = q, l = Ie, q = n.stateNode.containerInfo, Ie = !0, qe(e, t, n), q = r, Ie = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var u = l, i = u.destroy;
          u = u.tag, i !== void 0 && (u & 2 || u & 4) && Fu(n, t, i), l = l.next;
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (!re && (Kt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        B(n, t, o);
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
function Bo(e) {
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
      var u = e, i = t, o = i;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            q = o.stateNode, Ie = !1;
            break e;
          case 3:
            q = o.stateNode.containerInfo, Ie = !0;
            break e;
          case 4:
            q = o.stateNode.containerInfo, Ie = !0;
            break e;
        }
        o = o.return;
      }
      if (q === null) throw Error(y(160));
      Ga(u, i, l), q = null, Ie = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      B(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ka(t, e), t = t.sibling;
}
function Ka(e, t) {
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
        var u = e.memoizedProps, i = n !== null ? n.memoizedProps : u, o = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          o === "input" && u.type === "radio" && u.name != null && hs(l, u), cu(o, i);
          var c = cu(o, u);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], m = s[i + 1];
            h === "style" ? ks(l, m) : h === "dangerouslySetInnerHTML" ? gs(l, m) : h === "children" ? Dn(l, m) : Ju(l, h, m, c);
          }
          switch (o) {
            case "input":
              uu(l, u);
              break;
            case "textarea":
              vs(l, u);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!u.multiple;
              var g = u.value;
              g != null ? Yt(l, !!u.multiple, g, !1) : p !== !!u.multiple && (u.defaultValue != null ? Yt(
                l,
                !!u.multiple,
                u.defaultValue,
                !0
              ) : Yt(l, !!u.multiple, u.multiple ? [] : "", !1));
          }
          l[Qn] = u;
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
        Vn(t.containerInfo);
      } catch (k) {
        B(e, e.return, k);
      }
      break;
    case 4:
      Le(t, e), De(e);
      break;
    case 13:
      Le(t, e), De(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Ti = Q())), r & 4 && Bo(e);
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
                  Ho(m);
                  continue;
                }
            }
            g !== null ? (g.return = p, S = g) : Ho(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, c ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (o = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, o.style.display = ws("display", i));
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
      Le(t, e), De(e), r & 4 && Bo(e);
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
          r.flags & 32 && (Dn(l, ""), r.flags &= -33);
          var u = $o(e);
          Vu(e, u, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, o = $o(e);
          Au(e, o, i);
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
  S = e, Xa(e);
}
function Xa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S, u = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || wr;
      if (!i) {
        var o = l.alternate, s = o !== null && o.memoizedState !== null || re;
        o = wr;
        var c = re;
        if (wr = i, (re = s) && !c) for (S = l; S !== null; ) i = S, s = i.child, i.tag === 22 && i.memoizedState !== null ? Qo(l) : s !== null ? (s.return = i, S = s) : Qo(l);
        for (; u !== null; ) S = u, Xa(u), u = u.sibling;
        S = l, wr = o, re = c;
      }
      Wo(e);
    } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, S = u) : Wo(e);
  }
}
function Wo(e) {
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
            u !== null && Po(t, u, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Po(t, i, n);
            }
            break;
          case 5:
            var o = t.stateNode;
            if (n === null && t.flags & 4) {
              n = o;
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
                  m !== null && Vn(m);
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
        re || t.flags & 512 && Uu(t);
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
function Ho(e) {
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
function Qo(e) {
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
            Uu(t);
          } catch (s) {
            B(t, u, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Uu(t);
          } catch (s) {
            B(t, i, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, S = o;
      break;
    }
    S = t.return;
  }
}
var wd = Math.ceil, el = Je.ReactCurrentDispatcher, Li = Je.ReactCurrentOwner, _e = Je.ReactCurrentBatchConfig, R = 0, J = null, G = null, b = 0, he = 0, Xt = vt(0), X = 0, Jn = null, It = 0, hl = 0, zi = 0, Mn = null, ae = null, Ti = 0, sn = 1 / 0, Be = null, tl = !1, $u = null, ct = null, kr = !1, lt = null, nl = 0, jn = 0, Bu = null, Rr = -1, Mr = 0;
function ie() {
  return R & 6 ? Q() : Rr !== -1 ? Rr : Rr = Q();
}
function ft(e) {
  return e.mode & 1 ? R & 2 && b !== 0 ? b & -b : nd.transition !== null ? (Mr === 0 && (Mr = Rs()), Mr) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : As(e.type)), e) : 1;
}
function je(e, t, n, r) {
  if (50 < jn) throw jn = 0, Bu = null, Error(y(185));
  bn(e, n, r), (!(R & 2) || e !== J) && (e === J && (!(R & 2) && (hl |= n), X === 4 && nt(e, b)), me(e, r), n === 1 && R === 0 && !(t.mode & 1) && (sn = Q() + 500, fl && yt()));
}
function me(e, t) {
  var n = e.callbackNode;
  tf(e, t);
  var r = Ar(e, e === J ? b : 0);
  if (r === 0) n !== null && bi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && bi(n), t === 1) e.tag === 0 ? td(Go.bind(null, e)) : la(Go.bind(null, e)), Jf(function() {
      !(R & 6) && yt();
    }), n = null;
    else {
      switch (Ms(r)) {
        case 1:
          n = ni;
          break;
        case 4:
          n = Ts;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = Is;
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
  if (Rr = -1, Mr = 0, R & 6) throw Error(y(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Ar(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var u = Ja();
    (J !== e || b !== t) && (Be = null, sn = Q() + 500, Ct(e, t));
    do
      try {
        Ed();
        break;
      } catch (o) {
        Za(e, o);
      }
    while (!0);
    hi(), el.current = u, R = l, G !== null ? t = 0 : (J = null, b = 0, t = X);
  }
  if (t !== 0) {
    if (t === 2 && (l = hu(e), l !== 0 && (r = l, t = Wu(e, l))), t === 1) throw n = Jn, Ct(e, 0), nt(e, r), me(e, Q()), n;
    if (t === 6) nt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !kd(l) && (t = rl(e, r), t === 2 && (u = hu(e), u !== 0 && (r = u, t = Wu(e, u))), t === 1)) throw n = Jn, Ct(e, 0), nt(e, r), me(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          St(e, ae, Be);
          break;
        case 3:
          if (nt(e, r), (r & 130023424) === r && (t = Ti + 500 - Q(), 10 < t)) {
            if (Ar(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ie(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = xu(St.bind(null, e, ae, Be), t);
            break;
          }
          St(e, ae, Be);
          break;
        case 4:
          if (nt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Me(r);
            u = 1 << i, i = t[i], i > l && (l = i), r &= ~u;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = xu(St.bind(null, e, ae, Be), r);
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
  return me(e, Q()), e.callbackNode === n ? Ya.bind(null, e) : null;
}
function Wu(e, t) {
  var n = Mn;
  return e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256), e = rl(e, t), e !== 2 && (t = ae, ae = n, t !== null && Hu(t)), e;
}
function Hu(e) {
  ae === null ? ae = e : ae.push.apply(ae, e);
}
function kd(e) {
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
  for (t &= ~zi, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Me(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Go(e) {
  if (R & 6) throw Error(y(327));
  en();
  var t = Ar(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hu(e);
    r !== 0 && (t = r, n = Wu(e, r));
  }
  if (n === 1) throw n = Jn, Ct(e, 0), nt(e, t), me(e, Q()), n;
  if (n === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, St(e, ae, Be), me(e, Q()), null;
}
function Ii(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (sn = Q() + 500, fl && yt());
  }
}
function Rt(e) {
  lt !== null && lt.tag === 0 && !(R & 6) && en();
  var t = R;
  R |= 1;
  var n = _e.transition, r = M;
  try {
    if (_e.transition = null, M = 1, e) return e();
  } finally {
    M = r, _e.transition = n, R = t, !(R & 6) && yt();
  }
}
function Ri() {
  he = Xt.current, D(Xt);
}
function Ct(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Zf(n)), G !== null) for (n = G.return; n !== null; ) {
    var r = n;
    switch (di(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Hr();
        break;
      case 3:
        un(), D(de), D(le), Si();
        break;
      case 5:
        ki(r);
        break;
      case 4:
        un();
        break;
      case 13:
        D(A);
        break;
      case 19:
        D(A);
        break;
      case 10:
        vi(r.type._context);
        break;
      case 22:
      case 23:
        Ri();
    }
    n = n.return;
  }
  if (J = e, G = e = dt(e.current, null), b = he = t, X = 0, Jn = null, zi = hl = It = 0, ae = Mn = null, xt !== null) {
    for (t = 0; t < xt.length; t++) if (n = xt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, u = n.pending;
      if (u !== null) {
        var i = u.next;
        u.next = l, r.next = i;
      }
      n.pending = r;
    }
    xt = null;
  }
  return e;
}
function Za(e, t) {
  do {
    var n = G;
    try {
      if (hi(), zr.current = br, qr) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        qr = !1;
      }
      if (Tt = 0, Z = K = V = null, In = !1, Xn = 0, Li.current = null, n === null || n.return === null) {
        X = 1, Jn = t, G = null;
        break;
      }
      e: {
        var u = e, i = n.return, o = n, s = t;
        if (t = b, o.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = o, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = Mo(i);
          if (g !== null) {
            g.flags &= -257, jo(g, i, o, u, t), g.mode & 1 && Ro(u, c, t), t = g, s = c;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ro(u, c, t), Mi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && o.mode & 1) {
          var F = Mo(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), jo(F, i, o, u, t), pi(on(s, o));
            break e;
          }
        }
        u = s = on(s, o), X !== 4 && (X = 2), Mn === null ? Mn = [u] : Mn.push(u), u = i;
        do {
          switch (u.tag) {
            case 3:
              u.flags |= 65536, t &= -t, u.lanes |= t;
              var f = Ma(u, s, t);
              No(u, f);
              break e;
            case 1:
              o = s;
              var a = u.type, d = u.stateNode;
              if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ct === null || !ct.has(d)))) {
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var v = ja(u, o, t);
                No(u, v);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      ba(n);
    } catch (E) {
      t = E, G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ja() {
  var e = el.current;
  return el.current = br, e === null ? br : e;
}
function Mi() {
  (X === 0 || X === 3 || X === 2) && (X = 4), J === null || !(It & 268435455) && !(hl & 268435455) || nt(J, b);
}
function rl(e, t) {
  var n = R;
  R |= 2;
  var r = Ja();
  (J !== e || b !== t) && (Be = null, Ct(e, t));
  do
    try {
      Sd();
      break;
    } catch (l) {
      Za(e, l);
    }
  while (!0);
  if (hi(), R = n, el.current = r, G !== null) throw Error(y(261));
  return J = null, b = 0, X;
}
function Sd() {
  for (; G !== null; ) qa(G);
}
function Ed() {
  for (; G !== null && !Gc(); ) qa(G);
}
function qa(e) {
  var t = tc(e.alternate, e, he);
  e.memoizedProps = e.pendingProps, t === null ? ba(e) : G = t, Li.current = null;
}
function ba(e) {
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
function St(e, t, n) {
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
  while (lt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var u = n.lanes | n.childLanes;
  if (nf(e, u), e === J && (G = J = null, b = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0, nc(Ur, function() {
    return en(), null;
  })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
    u = _e.transition, _e.transition = null;
    var i = M;
    M = 1;
    var o = R;
    R |= 4, Li.current = null, yd(e, n), Ka(n, e), Wf(Su), Vr = !!ku, Su = ku = null, e.current = n, gd(n), Kc(), R = o, M = i, _e.transition = u;
  } else e.current = n;
  if (kr && (kr = !1, lt = e, nl = l), u = e.pendingLanes, u === 0 && (ct = null), Zc(n.stateNode), me(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl) throw tl = !1, e = $u, $u = null, e;
  return nl & 1 && e.tag !== 0 && en(), u = e.pendingLanes, u & 1 ? e === Bu ? jn++ : (jn = 0, Bu = e) : jn = 0, yt(), null;
}
function en() {
  if (lt !== null) {
    var e = Ms(nl), t = _e.transition, n = M;
    try {
      if (_e.transition = null, M = 16 > e ? 16 : e, lt === null) var r = !1;
      else {
        if (e = lt, lt = null, nl = 0, R & 6) throw Error(y(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var u = S, i = u.child;
          if (S.flags & 16) {
            var o = u.deletions;
            if (o !== null) {
              for (var s = 0; s < o.length; s++) {
                var c = o[s];
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
                    if (Ha(h), h === c) {
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
          if (u.subtreeFlags & 2064 && i !== null) i.return = u, S = i;
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
          i = S;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, S = d;
          else e: for (i = a; S !== null; ) {
            if (o = S, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  ml(9, o);
              }
            } catch (E) {
              B(o, o.return, E);
            }
            if (o === i) {
              S = null;
              break e;
            }
            var v = o.sibling;
            if (v !== null) {
              v.return = o.return, S = v;
              break e;
            }
            S = o.return;
          }
        }
        if (R = l, yt(), Ae && typeof Ae.onPostCommitFiberRoot == "function") try {
          Ae.onPostCommitFiberRoot(il, e);
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
function Ko(e, t, n) {
  t = on(n, t), t = Ma(e, t, 1), e = at(e, t, 1), t = ie(), e !== null && (bn(e, 1, t), me(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Ko(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ko(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ct === null || !ct.has(r))) {
        e = on(n, e), e = ja(t, e, 1), t = at(t, e, 1), e = ie(), t !== null && (bn(t, 1, e), me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function _d(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ie(), e.pingedLanes |= e.suspendedLanes & n, J === e && (b & n) === n && (X === 4 || X === 3 && (b & 130023424) === b && 500 > Q() - Ti ? Ct(e, 0) : zi |= n), me(e, t);
}
function ec(e, t) {
  t === 0 && (e.mode & 1 ? (t = cr, cr <<= 1, !(cr & 130023424) && (cr = 4194304)) : t = 1);
  var n = ie();
  e = Ye(e, t), e !== null && (bn(e, t, n), me(e, n));
}
function Cd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ec(e, n);
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
  r !== null && r.delete(t), ec(e, n);
}
var tc;
tc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, pd(e, t, n);
    fe = !!(e.flags & 131072);
  }
  else fe = !1, U && t.flags & 1048576 && ua(t, Kr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ir(e, t), e = t.pendingProps;
      var l = nn(t, le.current);
      bt(t, n), l = xi(null, t, r, e, l, n);
      var u = _i();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (u = !0, Qr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, gi(t), l.updater = pl, t.stateNode = l, l._reactInternals = t, Tu(t, r, e, n), t = Mu(null, t, r, !0, u, n)) : (t.tag = 0, U && u && fi(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ir(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ld(r), e = Te(r, e), l) {
          case 0:
            t = Ru(null, t, r, e, n);
            break e;
          case 1:
            t = Fo(null, t, r, e, n);
            break e;
          case 11:
            t = Oo(null, t, r, e, n);
            break e;
          case 14:
            t = Do(null, t, r, Te(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Fo(e, t, r, l, n);
    case 3:
      e: {
        if (Ua(t), e === null) throw Error(y(387));
        r = t.pendingProps, u = t.memoizedState, l = u.element, fa(e, t), Zr(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
          l = on(Error(y(423)), t), t = Uo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = on(Error(y(424)), t), t = Uo(e, t, r, n, l);
          break e;
        } else for (ve = st(t.stateNode.containerInfo.firstChild), ye = t, U = !0, Re = null, n = aa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (rn(), r === l) {
            t = Ze(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return da(t), e === null && Pu(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, i = l.children, Eu(r, l) ? i = null : u !== null && Eu(r, u) && (t.flags |= 32), Fa(e, t), ue(e, t, i, n), t.child;
    case 6:
      return e === null && Pu(t), null;
    case 13:
      return Aa(e, t, n);
    case 4:
      return wi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Oo(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, i = l.value, j(Xr, r._currentValue), r._currentValue = i, u !== null) if (Oe(u.value, i)) {
          if (u.children === l.children && !de.current) {
            t = Ze(e, t, n);
            break e;
          }
        } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
          var o = u.dependencies;
          if (o !== null) {
            i = u.child;
            for (var s = o.firstContext; s !== null; ) {
              if (s.context === r) {
                if (u.tag === 1) {
                  s = Ge(-1, n & -n), s.tag = 2;
                  var c = u.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                  }
                }
                u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), Lu(
                  u.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (u.tag === 10) i = u.type === t.type ? null : u.child;
          else if (u.tag === 18) {
            if (i = u.return, i === null) throw Error(y(341));
            i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), Lu(i, n, t), i = u.sibling;
          } else i = u.child;
          if (i !== null) i.return = u;
          else for (i = u; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (u = i.sibling, u !== null) {
              u.return = i.return, i = u;
              break;
            }
            i = i.return;
          }
          u = i;
        }
        ue(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, bt(t, n), l = Ce(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Te(r, t.pendingProps), l = Te(r.type, l), Do(e, t, r, l, n);
    case 15:
      return Oa(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Ir(e, t), t.tag = 1, pe(r) ? (e = !0, Qr(t)) : e = !1, bt(t, n), Ra(t, r, l), Tu(t, r, l, n), Mu(null, t, r, !0, e, n);
    case 19:
      return Va(e, t, n);
    case 22:
      return Da(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function nc(e, t) {
  return zs(e, t);
}
function Pd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xe(e, t, n, r) {
  return new Pd(e, t, n, r);
}
function ji(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ld(e) {
  if (typeof e == "function") return ji(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === bu) return 11;
    if (e === ei) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function jr(e, t, n, r, l, u) {
  var i = 2;
  if (r = e, typeof e == "function") ji(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Ut:
      return Nt(n.children, l, u, t);
    case qu:
      i = 8, l |= 8;
      break;
    case eu:
      return e = xe(12, n, t, l | 2), e.elementType = eu, e.lanes = u, e;
    case tu:
      return e = xe(13, n, t, l), e.elementType = tu, e.lanes = u, e;
    case nu:
      return e = xe(19, n, t, l), e.elementType = nu, e.lanes = u, e;
    case ds:
      return vl(n, l, u, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case cs:
          i = 10;
          break e;
        case fs:
          i = 9;
          break e;
        case bu:
          i = 11;
          break e;
        case ei:
          i = 14;
          break e;
        case be:
          i = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return t = xe(i, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
}
function Nt(e, t, n, r) {
  return e = xe(7, e, r, t), e.lanes = n, e;
}
function vl(e, t, n, r) {
  return e = xe(22, e, r, t), e.elementType = ds, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
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
function Oi(e, t, n, r, l, u, i, o, s) {
  return e = new zd(e, t, n, o, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = xe(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gi(u), e;
}
function Td(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ft, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
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
    if (pe(n)) return ra(e, n, t);
  }
  return t;
}
function lc(e, t, n, r, l, u, i, o, s) {
  return e = Oi(n, r, !0, e, l, u, i, o, s), e.context = rc(null), n = e.current, r = ie(), l = ft(n), u = Ge(r, l), u.callback = t ?? null, at(n, u, l), e.current.lanes = l, bn(e, l, r), me(e, r), e;
}
function yl(e, t, n, r) {
  var l = t.current, u = ie(), i = ft(l);
  return n = rc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ge(u, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, i), e !== null && (je(e, l, i, u), Lr(e, l, i)), i;
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
function Xo(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Di(e, t) {
  Xo(e, t), (e = e.alternate) && Xo(e, t);
}
function Id() {
  return null;
}
var uc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Fi(e) {
  this._internalRoot = e;
}
gl.prototype.render = Fi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  yl(e, t, null, null);
};
gl.prototype.unmount = Fi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rt(function() {
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
function Ui(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function wl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Yo() {
}
function Rd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var c = ll(i);
        u.call(c);
      };
    }
    var i = lc(t, r, e, 0, null, !1, !1, "", Yo);
    return e._reactRootContainer = i, e[Xe] = i.current, Wn(e.nodeType === 8 ? e.parentNode : e), Rt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = ll(s);
      o.call(c);
    };
  }
  var s = Oi(e, 0, !1, null, null, !1, !1, "", Yo);
  return e._reactRootContainer = s, e[Xe] = s.current, Wn(e.nodeType === 8 ? e.parentNode : e), Rt(function() {
    yl(t, s, n, r);
  }), s;
}
function kl(e, t, n, r, l) {
  var u = n._reactRootContainer;
  if (u) {
    var i = u;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var s = ll(i);
        o.call(s);
      };
    }
    yl(t, i, e, l);
  } else i = Rd(n, t, e, l, r);
  return ll(i);
}
js = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _n(t.pendingLanes);
        n !== 0 && (ri(t, n | 1), me(t, Q()), !(R & 6) && (sn = Q() + 500, yt()));
      }
      break;
    case 13:
      Rt(function() {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ie();
          je(r, e, 1, l);
        }
      }), Di(e, 1);
  }
};
li = function(e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = ie();
      je(t, e, 134217728, n);
    }
    Di(e, 134217728);
  }
};
Os = function(e) {
  if (e.tag === 13) {
    var t = ft(e), n = Ye(e, t);
    if (n !== null) {
      var r = ie();
      je(n, e, t, r);
    }
    Di(e, t);
  }
};
Ds = function() {
  return M;
};
Fs = function(e, t) {
  var n = M;
  try {
    return M = e, t();
  } finally {
    M = n;
  }
};
du = function(e, t, n) {
  switch (t) {
    case "input":
      if (uu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = cl(r);
            if (!l) throw Error(y(90));
            ms(r), uu(r, l);
          }
        }
      }
      break;
    case "textarea":
      vs(e, n);
      break;
    case "select":
      t = n.value, t != null && Yt(e, !!n.multiple, t, !1);
  }
};
xs = Ii;
_s = Rt;
var Md = { usingClientEntryPoint: !1, Events: [tr, Bt, cl, Ss, Es, Ii] }, Sn = { findFiberByHostInstance: Et, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, jd = { bundleType: Sn.bundleType, version: Sn.version, rendererPackageName: Sn.rendererPackageName, rendererConfig: Sn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Je.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ps(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Sn.findFiberByHostInstance || Id, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber) try {
    il = Sr.inject(jd), Ae = Sr;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ui(t)) throw Error(y(200));
  return Td(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Ui(e)) throw Error(y(299));
  var n = !1, r = "", l = uc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Oi(e, 1, !1, null, null, n, !1, r, l), e[Xe] = t.current, Wn(e.nodeType === 8 ? e.parentNode : e), new Fi(t);
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
  return Rt(e);
};
we.hydrate = function(e, t, n) {
  if (!wl(t)) throw Error(y(200));
  return kl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Ui(e)) throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, u = "", i = uc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = lc(t, null, e, 1, n ?? null, l, !1, u, i), e[Xe] = t.current, Wn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
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
  return e._reactRootContainer ? (Rt(function() {
    kl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Xe] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Ii;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!wl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return kl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function ic() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic);
    } catch (e) {
      console.error(e);
    }
}
ic(), is.exports = we;
var Od = is.exports, oc, Zo = Od;
oc = Zo.createRoot, Zo.hydrateRoot;
window.api = Pt;
const Dd = async () => {
  const e = await Pt.fetchApi("/meld-nexus/list");
  if (!e.ok)
    throw new Error(`Failed to fetch images: ${e.statusText}`);
  return await e.json();
}, Fd = async () => {
  const e = await Pt.fetchApi("/meld-nexus/settings");
  return e.ok ? await e.json() : { dev_mode: !1 };
}, Ud = async (e, t = !0) => {
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
}, Ad = async (e) => {
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
var Vd = ce, $d = Symbol.for("react.element"), Bd = Symbol.for("react.fragment"), Wd = Object.prototype.hasOwnProperty, Hd = Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r, l = {}, u = null, i = null;
  n !== void 0 && (u = "" + n), t.key !== void 0 && (u = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Wd.call(t, r) && !Qd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: $d, type: e, key: u, ref: i, props: l, _owner: Hd.current };
}
Sl.Fragment = Bd;
Sl.jsx = ac;
Sl.jsxs = ac;
sc.exports = Sl;
var P = sc.exports;
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
const Kd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Ot = (e, t) => {
  const n = ce.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: i,
      className: o = "",
      children: s,
      ...c
    }, h) => ce.createElement(
      "svg",
      {
        ref: h,
        ...Gd,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(u) * 24 / Number(l) : u,
        className: ["lucide", `lucide-${Kd(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([m, p]) => ce.createElement(m, p)),
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
const Xd = Ot("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = Ot("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = Ot("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = Ot("RefreshCw", [
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
const qd = Ot("Trash2", [
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
const bd = Ot("XSquare", [
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
const cc = Ot("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let ul = !1;
const ep = (e) => {
  ul = e, ul && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, tp = (...e) => {
  ul && console.log("[Meld-Flow]", ...e);
}, np = (...e) => {
  ul && console.warn("[Meld-Flow]", ...e);
}, rp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, $e = {
  log: tp,
  warn: np,
  error: rp,
  init: ep
}, lp = {
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
const fc = ce.createContext(void 0), ip = ({ children: e }) => {
  const [t, n] = ce.useReducer(up, lp), r = ce.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const u = await Dd();
      n({ type: "SET_IMAGES", payload: u });
    } catch (u) {
      n({
        type: "SET_ERROR",
        payload: u instanceof Error ? u.message : String(u)
      });
    }
  }, []), l = ce.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const u = Array.from(t.selectedIds), i = `Are you sure you want to delete the selected ${u.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(i)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await Ud(u, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (o) {
        n({
          type: "SET_ERROR",
          payload: o instanceof Error ? o.message : String(o)
        });
      }
    }
  }, [t.selectedIds, r]);
  return ce.useEffect(() => {
    const u = () => {
      r();
    };
    return window.addEventListener("meld-nexus-refresh", u), () => {
      window.removeEventListener("meld-nexus-refresh", u);
    };
  }, [r]), ce.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ P.jsx(fc.Provider, { value: { state: t, dispatch: n, refreshImages: r, deleteSelected: l }, children: e });
}, El = () => {
  const e = ce.useContext(fc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, op = () => {
  const { state: e, dispatch: t, deleteSelected: n } = El(), r = e.selectedIds.size;
  return r === 0 ? null : /* @__PURE__ */ P.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ P.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ P.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ P.jsx(qd, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ P.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ P.jsx(cc, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, sp = ({ image: e }) => {
  const { state: t, dispatch: n } = El(), r = t.selectedIds.has(e.id), l = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, u = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, i = (c) => {
    c.ctrlKey || c.metaKey || t.selectedIds.size > 0 ? (c.preventDefault(), c.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, o = (c) => {
    n({ type: "TOGGLE_SELECT", payload: e.id });
  }, s = (c) => {
    (c.key === "Enter" || c.key === " ") && (c.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  };
  return (
    // biome-ignore lint/a11y/useSemanticElements: Image card is a complex interactive element
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
        onClick: o,
        onKeyDown: s,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ P.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ P.jsx(
            "img",
            {
              src: u,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              onClick: (c) => {
                c.stopPropagation(), i(c);
              },
              onKeyDown: (c) => {
                (c.key === "Enter" || c.key === " ") && (c.stopPropagation(), c.preventDefault(), i(c));
              }
            }
          ) }),
          /* @__PURE__ */ P.jsxs("div", { className: "meld-image-card__details", children: [
            /* @__PURE__ */ P.jsx("div", { className: "meld-image-card__filename", children: l }),
            /* @__PURE__ */ P.jsx("div", { className: "meld-image-card__meta-label", children: "Positive" }),
            /* @__PURE__ */ P.jsx("div", { className: "meld-image-card__meta-content", children: e.positive || "-" }),
            /* @__PURE__ */ P.jsx("div", { className: "meld-image-card__meta-label", children: "Negative" }),
            /* @__PURE__ */ P.jsx("div", { className: "meld-image-card__meta-content", style: { maxHeight: "40px" }, children: e.negative || "-" }),
            /* @__PURE__ */ P.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
            /* @__PURE__ */ P.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((c, h) => /* @__PURE__ */ P.jsx(
              "span",
              {
                className: "meld-image-card__tag",
                children: c
              },
              `${c}-${h}`
            )) : /* @__PURE__ */ P.jsx("span", { style: { color: "#666" }, children: "-" }) })
          ] })
        ]
      }
    )
  );
}, ap = () => {
  const { state: e, dispatch: t } = El(), { viewerImageId: n, images: r } = e, l = r.find((i) => i.id === n);
  if (ce.useEffect(() => {
    const i = (o) => {
      n !== null && (o.key === "Escape" ? t({ type: "CLOSE_VIEWER" }) : o.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : o.key === "ArrowLeft" && t({ type: "PREVIOUS_IMAGE" }));
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [n, t]), !l) return null;
  const u = `/api/view?filename=${encodeURIComponent(l.filename)}&type=${l.type || "output"}${l.subfolder ? `&subfolder=${encodeURIComponent(l.subfolder)}` : ""}`;
  return (
    // biome-ignore lint/a11y/useSemanticElements: Overlay backdrop
    // biome-ignore lint/a11y/useKeyWithClickEvents: Backdrop click to close
    /* @__PURE__ */ P.jsx(
      "div",
      {
        className: "meld-viewer-overlay",
        onClick: () => t({ type: "CLOSE_VIEWER" }),
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ P.jsxs("div", { className: "meld-viewer-content", onClick: (i) => i.stopPropagation(), children: [
          /* @__PURE__ */ P.jsx(
            "button",
            {
              className: "meld-viewer-close",
              onClick: () => t({ type: "CLOSE_VIEWER" }),
              type: "button",
              children: /* @__PURE__ */ P.jsx(cc, { size: 24 })
            }
          ),
          /* @__PURE__ */ P.jsx(
            "button",
            {
              className: "meld-viewer-nav meld-viewer-nav--prev",
              onClick: () => t({ type: "PREVIOUS_IMAGE" }),
              type: "button",
              children: /* @__PURE__ */ P.jsx(Yd, { size: 32 })
            }
          ),
          /* @__PURE__ */ P.jsxs("div", { className: "meld-viewer-image-container", children: [
            /* @__PURE__ */ P.jsx("img", { src: u, alt: l.filename, className: "meld-viewer-image" }),
            /* @__PURE__ */ P.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ P.jsx("div", { className: "meld-viewer-filename", children: l.filename }) })
          ] }),
          /* @__PURE__ */ P.jsx(
            "button",
            {
              className: "meld-viewer-nav meld-viewer-nav--next",
              onClick: () => t({ type: "NEXT_IMAGE" }),
              type: "button",
              children: /* @__PURE__ */ P.jsx(Zd, { size: 32 })
            }
          )
        ] })
      }
    )
  );
}, cp = () => {
  const { state: e, dispatch: t, refreshImages: n } = El();
  $e.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    isLoading: e.isLoading
  });
  const r = () => {
    e.selectedIds.size > 0 ? t({ type: "CLEAR_SELECTION" }) : t({ type: "SELECT_ALL" });
  };
  return /* @__PURE__ */ P.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
          gap: "15px"
        },
        children: [
          /* @__PURE__ */ P.jsx(
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
              children: e.selectedIds.size > 0 ? /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
                /* @__PURE__ */ P.jsx(bd, { size: 14 }),
                "Deselect"
              ] }) : /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
                /* @__PURE__ */ P.jsx(Xd, { size: 14 }),
                "Select All"
              ] })
            }
          ),
          /* @__PURE__ */ P.jsxs(
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
                /* @__PURE__ */ P.jsx(Jd, { size: 14, className: e.isLoading ? "animate-spin" : "" }),
                "Refresh"
              ]
            }
          )
        ]
      }
    ),
    e.error && /* @__PURE__ */ P.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && e.images.length === 0 ? /* @__PURE__ */ P.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : e.images.length === 0 ? /* @__PURE__ */ P.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ P.jsx("div", { className: "meld-gallery__list", children: e.images.map((l) => /* @__PURE__ */ P.jsx(sp, { image: l }, l.id)) }),
    /* @__PURE__ */ P.jsx(op, {}),
    e.viewerImageId !== null && /* @__PURE__ */ P.jsx(ap, {})
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
        const u = n.ui.meldNexus;
        u != null && u.isVisible() && u.refresh();
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
      }, Pt.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), Pt.addEventListener(
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
                } catch (u) {
                  console.error("Failed to auto-register image:", u);
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
            ) : ($e.log("MeldNexus: Creating new gallery root"), Er = oc(ze), Er.render(
              Wi.createElement(
                ip,
                null,
                Wi.createElement(cp)
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
