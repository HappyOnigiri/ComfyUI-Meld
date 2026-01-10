import { app as ac } from "../../../scripts/app.js";
import { api as Jt } from "../../../scripts/api.js";
function cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xo = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn = Symbol.for("react.element"), fc = Symbol.for("react.portal"), dc = Symbol.for("react.fragment"), pc = Symbol.for("react.strict_mode"), mc = Symbol.for("react.profiler"), hc = Symbol.for("react.provider"), vc = Symbol.for("react.context"), yc = Symbol.for("react.forward_ref"), gc = Symbol.for("react.suspense"), wc = Symbol.for("react.memo"), kc = Symbol.for("react.lazy"), Fi = Symbol.iterator;
function Sc(e) {
  return e === null || typeof e != "object" ? null : (e = Fi && e[Fi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Yo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zo = Object.assign, Jo = {};
function un(e, t, n) {
  this.props = e, this.context = t, this.refs = Jo, this.updater = n || Yo;
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qo() {
}
qo.prototype = un.prototype;
function $u(e, t, n) {
  this.props = e, this.context = t, this.refs = Jo, this.updater = n || Yo;
}
var Bu = $u.prototype = new qo();
Bu.constructor = $u;
Zo(Bu, un.prototype);
Bu.isPureReactComponent = !0;
var Ui = Array.isArray, bo = Object.prototype.hasOwnProperty, Hu = { current: null }, es = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, t, n) {
  var r, l = {}, u = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (u = "" + t.key), t) bo.call(t, r) && !es.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: Yn, type: e, key: u, ref: i, props: l, _owner: Hu.current };
}
function Ec(e, t) {
  return { $$typeof: Yn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Wu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yn;
}
function xc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ai = /\/+/g;
function El(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? xc("" + e.key) : t.toString(36);
}
function kr(e, t, n, r, l) {
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
        case Yn:
        case fc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + El(i, 0) : r, Ui(l) ? (n = "", e != null && (n = e.replace(Ai, "$&/") + "/"), kr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Wu(l) && (l = Ec(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ai, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ui(e)) for (var o = 0; o < e.length; o++) {
    u = e[o];
    var s = r + El(u, o);
    i += kr(u, t, n, s, l);
  }
  else if (s = Sc(e), typeof s == "function") for (e = s.call(e), o = 0; !(u = e.next()).done; ) u = u.value, s = r + El(u, o++), i += kr(u, t, n, s, l);
  else if (u === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function rr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return kr(e, r, "", "", function(u) {
    return t.call(n, u, l++);
  }), r;
}
function _c(e) {
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
var oe = { current: null }, Sr = { transition: null }, Cc = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: Sr, ReactCurrentOwner: Hu };
function ns() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = { map: rr, forEach: function(e, t, n) {
  rr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return rr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return rr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Wu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = un;
T.Fragment = dc;
T.Profiler = mc;
T.PureComponent = $u;
T.StrictMode = pc;
T.Suspense = gc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cc;
T.act = ns;
T.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zo({}, e.props), l = e.key, u = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (u = t.ref, i = Hu.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (s in t) bo.call(t, s) && !es.hasOwnProperty(s) && (r[s] = t[s] === void 0 && o !== void 0 ? o[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    o = Array(s);
    for (var c = 0; c < s; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: Yn, type: e.type, key: l, ref: u, props: r, _owner: i };
};
T.createContext = function(e) {
  return e = { $$typeof: vc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hc, _context: e }, e.Consumer = e;
};
T.createElement = ts;
T.createFactory = function(e) {
  var t = ts.bind(null, e);
  return t.type = e, t;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: yc, render: e };
};
T.isValidElement = Wu;
T.lazy = function(e) {
  return { $$typeof: kc, _payload: { _status: -1, _result: e }, _init: _c };
};
T.memo = function(e, t) {
  return { $$typeof: wc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function(e) {
  var t = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = t;
  }
};
T.unstable_act = ns;
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
Xo.exports = T;
var he = Xo.exports;
const Vi = /* @__PURE__ */ cc(he);
var rs = { exports: {} }, we = {}, ls = { exports: {} }, us = {};
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
    var z = x.length;
    x.push(P);
    e: for (; 0 < z; ) {
      var W = z - 1 >>> 1, Y = x[W];
      if (0 < l(Y, P)) x[W] = P, x[z] = Y, z = W;
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var P = x[0], z = x.pop();
    if (z !== P) {
      x[0] = z;
      e: for (var W = 0, Y = x.length, tr = Y >>> 1; W < tr; ) {
        var vt = 2 * (W + 1) - 1, Sl = x[vt], yt = vt + 1, nr = x[yt];
        if (0 > l(Sl, z)) yt < Y && 0 > l(nr, Sl) ? (x[W] = nr, x[yt] = z, W = yt) : (x[W] = Sl, x[vt] = z, W = vt);
        else if (yt < Y && 0 > l(nr, z)) x[W] = nr, x[yt] = z, W = yt;
        else break e;
      }
    }
    return P;
  }
  function l(x, P) {
    var z = x.sortIndex - P.sortIndex;
    return z !== 0 ? z : x.id - P.id;
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
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= x) r(c), P.sortIndex = P.expirationTime, t(s, P);
      else break;
      P = n(c);
    }
  }
  function v(x) {
    if (k = !1, d(x), !w) if (n(s) !== null) w = !0, wl(E);
    else {
      var P = n(c);
      P !== null && kl(v, P.startTime - x);
    }
  }
  function E(x, P) {
    w = !1, k && (k = !1, f(N), N = -1), g = !0;
    var z = p;
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
      if (m !== null) var tr = !0;
      else {
        var vt = n(c);
        vt !== null && kl(v, vt.startTime - P), tr = !1;
      }
      return tr;
    } finally {
      m = null, p = z, g = !1;
    }
  }
  var _ = !1, C = null, N = -1, H = 5, R = -1;
  function Pe() {
    return !(e.unstable_now() - R < H);
  }
  function an() {
    if (C !== null) {
      var x = e.unstable_now();
      R = x;
      var P = !0;
      try {
        P = C(!0, x);
      } finally {
        P ? cn() : (_ = !1, C = null);
      }
    } else _ = !1;
  }
  var cn;
  if (typeof a == "function") cn = function() {
    a(an);
  };
  else if (typeof MessageChannel < "u") {
    var Di = new MessageChannel(), sc = Di.port2;
    Di.port1.onmessage = an, cn = function() {
      sc.postMessage(null);
    };
  } else cn = function() {
    F(an, 0);
  };
  function wl(x) {
    C = x, _ || (_ = !0, cn());
  }
  function kl(x, P) {
    N = F(function() {
      x(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, wl(E));
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
    var z = p;
    p = P;
    try {
      return x();
    } finally {
      p = z;
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
    var z = p;
    p = x;
    try {
      return P();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(x, P, z) {
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
    return Y = z + Y, x = { id: h++, callback: P, priorityLevel: x, startTime: z, expirationTime: Y, sortIndex: -1 }, z > W ? (x.sortIndex = z, t(c, x), n(s) === null && x === n(c) && (k ? (f(N), N = -1) : k = !0, kl(v, z - W))) : (x.sortIndex = Y, t(s, x), w || g || (w = !0, wl(E))), x;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(x) {
    var P = p;
    return function() {
      var z = p;
      p = P;
      try {
        return x.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(us);
ls.exports = us;
var Nc = ls.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pc = he, ge = Nc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var is = /* @__PURE__ */ new Set(), In = {};
function Tt(e, t) {
  qt(e, t), qt(e + "Capture", t);
}
function qt(e, t) {
  for (In[e] = t, e = 0; e < t.length; e++) is.add(t[e]);
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yl = Object.prototype.hasOwnProperty, zc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $i = {}, Bi = {};
function Lc(e) {
  return Yl.call(Bi, e) ? !0 : Yl.call($i, e) ? !1 : zc.test(e) ? Bi[e] = !0 : ($i[e] = !0, !1);
}
function Tc(e, t, n, r) {
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
function Rc(e, t, n, r) {
  if (t === null || typeof t > "u" || Tc(e, t, n, r)) return !0;
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
var Qu = /[\-:]([a-z])/g;
function Ku(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Qu,
    Ku
  );
  ee[t] = new se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Qu, Ku);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Qu, Ku);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gu(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Rc(t, n, l, r) && (n = null), r || l === null ? Lc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ye = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, lr = Symbol.for("react.element"), jt = Symbol.for("react.portal"), Mt = Symbol.for("react.fragment"), Xu = Symbol.for("react.strict_mode"), Zl = Symbol.for("react.profiler"), os = Symbol.for("react.provider"), ss = Symbol.for("react.context"), Yu = Symbol.for("react.forward_ref"), Jl = Symbol.for("react.suspense"), ql = Symbol.for("react.suspense_list"), Zu = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), as = Symbol.for("react.offscreen"), Hi = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object" ? null : (e = Hi && e[Hi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var $ = Object.assign, xl;
function wn(e) {
  if (xl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    xl = t && t[1] || "";
  }
  return `
` + xl + e;
}
var _l = !1;
function Cl(e, t) {
  if (!e || _l) return "";
  _l = !0;
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
    _l = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? wn(e) : "";
}
function Ic(e) {
  switch (e.tag) {
    case 5:
      return wn(e.type);
    case 16:
      return wn("Lazy");
    case 13:
      return wn("Suspense");
    case 19:
      return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Cl(e.type, !1), e;
    case 11:
      return e = Cl(e.type.render, !1), e;
    case 1:
      return e = Cl(e.type, !0), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mt:
      return "Fragment";
    case jt:
      return "Portal";
    case Zl:
      return "Profiler";
    case Xu:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ss:
      return (e.displayName || "Context") + ".Consumer";
    case os:
      return (e._context.displayName || "Context") + ".Provider";
    case Yu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Zu:
      return t = e.displayName || null, t !== null ? t : bl(e.type) || "Memo";
    case Je:
      t = e._payload, e = e._init;
      try {
        return bl(e(t));
      } catch {
      }
  }
  return null;
}
function jc(e) {
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
      return bl(t);
    case 8:
      return t === Xu ? "StrictMode" : "Mode";
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
function ft(e) {
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
function cs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Mc(e) {
  var t = cs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ur(e) {
  e._valueTracker || (e._valueTracker = Mc(e));
}
function fs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = cs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ir(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eu(e, t) {
  var n = t.checked;
  return $({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Wi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ft(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ds(e, t) {
  t = t.checked, t != null && Gu(e, "checked", t, !1);
}
function tu(e, t) {
  ds(e, t);
  var n = ft(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? nu(e, t.type, n) : t.hasOwnProperty("defaultValue") && nu(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Qi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function nu(e, t, n) {
  (t !== "number" || Ir(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kn = Array.isArray;
function Qt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ru(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return $({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ki(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(y(92));
      if (kn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ft(n) };
}
function ps(e, t) {
  var n = ft(t.value), r = ft(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Gi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ms(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ms(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ir, hs = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ir = ir || document.createElement("div"), ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ir.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xn = {
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
}, Oc = ["Webkit", "ms", "Moz", "O"];
Object.keys(xn).forEach(function(e) {
  Oc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), xn[t] = xn[e];
  });
});
function vs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xn.hasOwnProperty(e) && xn[e] ? ("" + t).trim() : t + "px";
}
function ys(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = vs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Dc = $({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function uu(e, t) {
  if (t) {
    if (Dc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function iu(e, t) {
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
var ou = null;
function Ju(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var su = null, Kt = null, Gt = null;
function Xi(e) {
  if (e = qn(e)) {
    if (typeof su != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = il(t), su(e.stateNode, e.type, t));
  }
}
function gs(e) {
  Kt ? Gt ? Gt.push(e) : Gt = [e] : Kt = e;
}
function ws() {
  if (Kt) {
    var e = Kt, t = Gt;
    if (Gt = Kt = null, Xi(e), t) for (e = 0; e < t.length; e++) Xi(t[e]);
  }
}
function ks(e, t) {
  return e(t);
}
function Ss() {
}
var Nl = !1;
function Es(e, t, n) {
  if (Nl) return e(t, n);
  Nl = !0;
  try {
    return ks(e, t, n);
  } finally {
    Nl = !1, (Kt !== null || Gt !== null) && (Ss(), ws());
  }
}
function Mn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = il(n);
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
var au = !1;
if (Qe) try {
  var dn = {};
  Object.defineProperty(dn, "passive", { get: function() {
    au = !0;
  } }), window.addEventListener("test", dn, dn), window.removeEventListener("test", dn, dn);
} catch {
  au = !1;
}
function Fc(e, t, n, r, l, u, i, o, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var _n = !1, jr = null, Mr = !1, cu = null, Uc = { onError: function(e) {
  _n = !0, jr = e;
} };
function Ac(e, t, n, r, l, u, i, o, s) {
  _n = !1, jr = null, Fc.apply(Uc, arguments);
}
function Vc(e, t, n, r, l, u, i, o, s) {
  if (Ac.apply(this, arguments), _n) {
    if (_n) {
      var c = jr;
      _n = !1, jr = null;
    } else throw Error(y(198));
    Mr || (Mr = !0, cu = c);
  }
}
function Rt(e) {
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
function xs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Yi(e) {
  if (Rt(e) !== e) throw Error(y(188));
}
function $c(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Rt(e), t === null) throw Error(y(188));
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
        if (u === n) return Yi(l), e;
        if (u === r) return Yi(l), t;
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
function _s(e) {
  return e = $c(e), e !== null ? Cs(e) : null;
}
function Cs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ns = ge.unstable_scheduleCallback, Zi = ge.unstable_cancelCallback, Bc = ge.unstable_shouldYield, Hc = ge.unstable_requestPaint, Q = ge.unstable_now, Wc = ge.unstable_getCurrentPriorityLevel, qu = ge.unstable_ImmediatePriority, Ps = ge.unstable_UserBlockingPriority, Or = ge.unstable_NormalPriority, Qc = ge.unstable_LowPriority, zs = ge.unstable_IdlePriority, nl = null, Ue = null;
function Kc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function") try {
    Ue.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ie = Math.clz32 ? Math.clz32 : Yc, Gc = Math.log, Xc = Math.LN2;
function Yc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Gc(e) / Xc | 0) | 0;
}
var or = 64, sr = 4194304;
function Sn(e) {
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
function Dr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, u = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? r = Sn(o) : (u &= i, u !== 0 && (r = Sn(u)));
  } else i = n & ~l, i !== 0 ? r = Sn(i) : u !== 0 && (r = Sn(u));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ie(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Zc(e, t) {
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
function Jc(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
    var i = 31 - Ie(u), o = 1 << i, s = l[i];
    s === -1 ? (!(o & n) || o & r) && (l[i] = Zc(o, t)) : s <= t && (e.expiredLanes |= o), u &= ~o;
  }
}
function fu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ls() {
  var e = or;
  return or <<= 1, !(or & 4194240) && (or = 64), e;
}
function Pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zn(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ie(t), e[t] = n;
}
function qc(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n), u = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
  }
}
function bu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var j = 0;
function Ts(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Rs, ei, Is, js, Ms, du = !1, ar = [], rt = null, lt = null, ut = null, On = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), be = [], bc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ji(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      On.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dn.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, u) {
  return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = qn(t), t !== null && ei(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function ef(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return rt = pn(rt, e, t, n, r, l), !0;
    case "dragenter":
      return lt = pn(lt, e, t, n, r, l), !0;
    case "mouseover":
      return ut = pn(ut, e, t, n, r, l), !0;
    case "pointerover":
      var u = l.pointerId;
      return On.set(u, pn(On.get(u) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return u = l.pointerId, Dn.set(u, pn(Dn.get(u) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Os(e) {
  var t = kt(e.target);
  if (t !== null) {
    var n = Rt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = xs(n), t !== null) {
          e.blockedOn = t, Ms(e.priority, function() {
            Is(n);
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
function Er(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ou = r, n.target.dispatchEvent(r), ou = null;
    } else return t = qn(n), t !== null && ei(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function qi(e, t, n) {
  Er(e) && n.delete(t);
}
function tf() {
  du = !1, rt !== null && Er(rt) && (rt = null), lt !== null && Er(lt) && (lt = null), ut !== null && Er(ut) && (ut = null), On.forEach(qi), Dn.forEach(qi);
}
function mn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, du || (du = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, tf)));
}
function Fn(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < ar.length) {
    mn(ar[0], e);
    for (var n = 1; n < ar.length; n++) {
      var r = ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rt !== null && mn(rt, e), lt !== null && mn(lt, e), ut !== null && mn(ut, e), On.forEach(t), Dn.forEach(t), n = 0; n < be.length; n++) r = be[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && (n = be[0], n.blockedOn === null); ) Os(n), n.blockedOn === null && be.shift();
}
var Xt = Ye.ReactCurrentBatchConfig, Fr = !0;
function nf(e, t, n, r) {
  var l = j, u = Xt.transition;
  Xt.transition = null;
  try {
    j = 1, ti(e, t, n, r);
  } finally {
    j = l, Xt.transition = u;
  }
}
function rf(e, t, n, r) {
  var l = j, u = Xt.transition;
  Xt.transition = null;
  try {
    j = 4, ti(e, t, n, r);
  } finally {
    j = l, Xt.transition = u;
  }
}
function ti(e, t, n, r) {
  if (Fr) {
    var l = pu(e, t, n, r);
    if (l === null) Fl(e, t, r, Ur, n), Ji(e, r);
    else if (ef(l, e, t, n, r)) r.stopPropagation();
    else if (Ji(e, r), t & 4 && -1 < bc.indexOf(e)) {
      for (; l !== null; ) {
        var u = qn(l);
        if (u !== null && Rs(u), u = pu(e, t, n, r), u === null && Fl(e, t, r, Ur, n), u === l) break;
        l = u;
      }
      l !== null && r.stopPropagation();
    } else Fl(e, t, r, null, n);
  }
}
var Ur = null;
function pu(e, t, n, r) {
  if (Ur = null, e = Ju(r), e = kt(e), e !== null) if (t = Rt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = xs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ur = e, null;
}
function Ds(e) {
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
      switch (Wc()) {
        case qu:
          return 1;
        case Ps:
          return 4;
        case Or:
        case Qc:
          return 16;
        case zs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null, ni = null, xr = null;
function Fs() {
  if (xr) return xr;
  var e, t = ni, n = t.length, r, l = "value" in tt ? tt.value : tt.textContent, u = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[u - r]; r++) ;
  return xr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function _r(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function cr() {
  return !0;
}
function bi() {
  return !1;
}
function ke(e) {
  function t(n, r, l, u, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = i, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(u) : u[o]);
    return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? cr : bi, this.isPropagationStopped = bi, this;
  }
  return $(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = cr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = cr);
  }, persist: function() {
  }, isPersistent: cr }), t;
}
var on = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ri = ke(on), Jn = $({}, on, { view: 0, detail: 0 }), lf = ke(Jn), zl, Ll, hn, rl = $({}, Jn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: li, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== hn && (hn && e.type === "mousemove" ? (zl = e.screenX - hn.screenX, Ll = e.screenY - hn.screenY) : Ll = zl = 0, hn = e), zl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ll;
} }), eo = ke(rl), uf = $({}, rl, { dataTransfer: 0 }), of = ke(uf), sf = $({}, Jn, { relatedTarget: 0 }), Tl = ke(sf), af = $({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cf = ke(af), ff = $({}, on, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), df = ke(ff), pf = $({}, on, { data: 0 }), to = ke(pf), mf = {
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
}, hf = {
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
}, vf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function yf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vf[e]) ? !!t[e] : !1;
}
function li() {
  return yf;
}
var gf = $({}, Jn, { key: function(e) {
  if (e.key) {
    var t = mf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: li, charCode: function(e) {
  return e.type === "keypress" ? _r(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), wf = ke(gf), kf = $({}, rl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), no = ke(kf), Sf = $({}, Jn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: li }), Ef = ke(Sf), xf = $({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _f = ke(xf), Cf = $({}, rl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Nf = ke(Cf), Pf = [9, 13, 27, 32], ui = Qe && "CompositionEvent" in window, Cn = null;
Qe && "documentMode" in document && (Cn = document.documentMode);
var zf = Qe && "TextEvent" in window && !Cn, Us = Qe && (!ui || Cn && 8 < Cn && 11 >= Cn), ro = " ", lo = !1;
function As(e, t) {
  switch (e) {
    case "keyup":
      return Pf.indexOf(t.keyCode) !== -1;
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
function Vs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ot = !1;
function Lf(e, t) {
  switch (e) {
    case "compositionend":
      return Vs(t);
    case "keypress":
      return t.which !== 32 ? null : (lo = !0, ro);
    case "textInput":
      return e = t.data, e === ro && lo ? null : e;
    default:
      return null;
  }
}
function Tf(e, t) {
  if (Ot) return e === "compositionend" || !ui && As(e, t) ? (e = Fs(), xr = ni = tt = null, Ot = !1, e) : null;
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
      return Us && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function uo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rf[e.type] : t === "textarea";
}
function $s(e, t, n, r) {
  gs(r), t = Ar(t, "onChange"), 0 < t.length && (n = new ri("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Nn = null, Un = null;
function If(e) {
  qs(e, 0);
}
function ll(e) {
  var t = Ut(e);
  if (fs(t)) return e;
}
function jf(e, t) {
  if (e === "change") return t;
}
var Bs = !1;
if (Qe) {
  var Rl;
  if (Qe) {
    var Il = "oninput" in document;
    if (!Il) {
      var io = document.createElement("div");
      io.setAttribute("oninput", "return;"), Il = typeof io.oninput == "function";
    }
    Rl = Il;
  } else Rl = !1;
  Bs = Rl && (!document.documentMode || 9 < document.documentMode);
}
function oo() {
  Nn && (Nn.detachEvent("onpropertychange", Hs), Un = Nn = null);
}
function Hs(e) {
  if (e.propertyName === "value" && ll(Un)) {
    var t = [];
    $s(t, Un, e, Ju(e)), Es(If, t);
  }
}
function Mf(e, t, n) {
  e === "focusin" ? (oo(), Nn = t, Un = n, Nn.attachEvent("onpropertychange", Hs)) : e === "focusout" && oo();
}
function Of(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ll(Un);
}
function Df(e, t) {
  if (e === "click") return ll(t);
}
function Ff(e, t) {
  if (e === "input" || e === "change") return ll(t);
}
function Uf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Me = typeof Object.is == "function" ? Object.is : Uf;
function An(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Yl.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function so(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ao(e, t) {
  var n = so(e);
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
    n = so(n);
  }
}
function Ws(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ws(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Qs() {
  for (var e = window, t = Ir(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ir(e.document);
  }
  return t;
}
function ii(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Af(e) {
  var t = Qs(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ws(n.ownerDocument.documentElement, n)) {
    if (r !== null && ii(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, u = Math.min(r.start, l);
        r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = ao(n, u);
        var i = ao(
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
var Vf = Qe && "documentMode" in document && 11 >= document.documentMode, Dt = null, mu = null, Pn = null, hu = !1;
function co(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hu || Dt == null || Dt !== Ir(r) || (r = Dt, "selectionStart" in r && ii(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Pn && An(Pn, r) || (Pn = r, r = Ar(mu, "onSelect"), 0 < r.length && (t = new ri("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Dt)));
}
function fr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ft = { animationend: fr("Animation", "AnimationEnd"), animationiteration: fr("Animation", "AnimationIteration"), animationstart: fr("Animation", "AnimationStart"), transitionend: fr("Transition", "TransitionEnd") }, jl = {}, Ks = {};
Qe && (Ks = document.createElement("div").style, "AnimationEvent" in window || (delete Ft.animationend.animation, delete Ft.animationiteration.animation, delete Ft.animationstart.animation), "TransitionEvent" in window || delete Ft.transitionend.transition);
function ul(e) {
  if (jl[e]) return jl[e];
  if (!Ft[e]) return e;
  var t = Ft[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ks) return jl[e] = t[n];
  return e;
}
var Gs = ul("animationend"), Xs = ul("animationiteration"), Ys = ul("animationstart"), Zs = ul("transitionend"), Js = /* @__PURE__ */ new Map(), fo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pt(e, t) {
  Js.set(e, t), Tt(t, [e]);
}
for (var Ml = 0; Ml < fo.length; Ml++) {
  var Ol = fo[Ml], $f = Ol.toLowerCase(), Bf = Ol[0].toUpperCase() + Ol.slice(1);
  pt($f, "on" + Bf);
}
pt(Gs, "onAnimationEnd");
pt(Xs, "onAnimationIteration");
pt(Ys, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(Zs, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hf = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
function po(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Vc(r, t, void 0, e), e.currentTarget = null;
}
function qs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var u = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var o = r[i], s = o.instance, c = o.currentTarget;
        if (o = o.listener, s !== u && l.isPropagationStopped()) break e;
        po(l, o, c), u = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (o = r[i], s = o.instance, c = o.currentTarget, o = o.listener, s !== u && l.isPropagationStopped()) break e;
        po(l, o, c), u = s;
      }
    }
  }
  if (Mr) throw e = cu, Mr = !1, cu = null, e;
}
function O(e, t) {
  var n = t[ku];
  n === void 0 && (n = t[ku] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (bs(t, e, 2, !1), n.add(r));
}
function Dl(e, t, n) {
  var r = 0;
  t && (r |= 4), bs(n, e, r, t);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Vn(e) {
  if (!e[dr]) {
    e[dr] = !0, is.forEach(function(n) {
      n !== "selectionchange" && (Hf.has(n) || Dl(n, !1, e), Dl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dr] || (t[dr] = !0, Dl("selectionchange", !1, t));
  }
}
function bs(e, t, n, r) {
  switch (Ds(t)) {
    case 1:
      var l = nf;
      break;
    case 4:
      l = rf;
      break;
    default:
      l = ti;
  }
  n = l.bind(null, t, n, e), l = void 0, !au || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Fl(e, t, n, r, l) {
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
        if (i = kt(o), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = u = i;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Es(function() {
    var c = u, h = Ju(n), m = [];
    e: {
      var p = Js.get(e);
      if (p !== void 0) {
        var g = ri, w = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = wf;
            break;
          case "focusin":
            w = "focus", g = Tl;
            break;
          case "focusout":
            w = "blur", g = Tl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Tl;
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
            g = eo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = of;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ef;
            break;
          case Gs:
          case Xs:
          case Ys:
            g = cf;
            break;
          case Zs:
            g = _f;
            break;
          case "scroll":
            g = lf;
            break;
          case "wheel":
            g = Nf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = df;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = no;
        }
        var k = (t & 4) !== 0, F = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Mn(a, f), v != null && k.push($n(a, v, d)))), F) break;
          a = a.return;
        }
        0 < k.length && (p = new g(p, w, null, n, h), m.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== ou && (w = n.relatedTarget || n.fromElement) && (kt(w) || w[Ke])) break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? kt(w) : null, w !== null && (F = Rt(w), w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (k = eo, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = no, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), F = g == null ? p : Ut(g), d = w == null ? p : Ut(w), p = new k(v, a + "leave", g, n, h), p.target = F, p.relatedTarget = d, v = null, kt(h) === c && (k = new k(f, a + "enter", w, n, h), k.target = d, k.relatedTarget = F, v = k), F = v, g && w) t: {
            for (k = g, f = w, a = 0, d = k; d; d = It(d)) a++;
            for (d = 0, v = f; v; v = It(v)) d++;
            for (; 0 < a - d; ) k = It(k), a--;
            for (; 0 < d - a; ) f = It(f), d--;
            for (; a--; ) {
              if (k === f || f !== null && k === f.alternate) break t;
              k = It(k), f = It(f);
            }
            k = null;
          }
          else k = null;
          g !== null && mo(m, p, g, k, !1), w !== null && F !== null && mo(m, F, w, k, !0);
        }
      }
      e: {
        if (p = c ? Ut(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var E = jf;
        else if (uo(p)) if (Bs) E = Ff;
        else {
          E = Of;
          var _ = Mf;
        }
        else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Df);
        if (E && (E = E(e, c))) {
          $s(m, E, n, h);
          break e;
        }
        _ && _(e, p, c), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && nu(p, "number", p.value);
      }
      switch (_ = c ? Ut(c) : window, e) {
        case "focusin":
          (uo(_) || _.contentEditable === "true") && (Dt = _, mu = c, Pn = null);
          break;
        case "focusout":
          Pn = mu = Dt = null;
          break;
        case "mousedown":
          hu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          hu = !1, co(m, n, h);
          break;
        case "selectionchange":
          if (Vf) break;
        case "keydown":
        case "keyup":
          co(m, n, h);
      }
      var C;
      if (ui) e: {
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
      else Ot ? As(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Us && n.locale !== "ko" && (Ot || N !== "onCompositionStart" ? N === "onCompositionEnd" && Ot && (C = Fs()) : (tt = h, ni = "value" in tt ? tt.value : tt.textContent, Ot = !0)), _ = Ar(c, N), 0 < _.length && (N = new to(N, e, null, n, h), m.push({ event: N, listeners: _ }), C ? N.data = C : (C = Vs(n), C !== null && (N.data = C)))), (C = zf ? Lf(e, n) : Tf(e, n)) && (c = Ar(c, "onBeforeInput"), 0 < c.length && (h = new to("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: c }), h.data = C));
    }
    qs(m, t);
  });
}
function $n(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ar(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, u = l.stateNode;
    l.tag === 5 && u !== null && (l = u, u = Mn(e, n), u != null && r.unshift($n(e, u, l)), u = Mn(e, t), u != null && r.push($n(e, u, l))), e = e.return;
  }
  return r;
}
function It(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mo(e, t, n, r, l) {
  for (var u = t._reactName, i = []; n !== null && n !== r; ) {
    var o = n, s = o.alternate, c = o.stateNode;
    if (s !== null && s === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (s = Mn(n, u), s != null && i.unshift($n(n, s, o))) : l || (s = Mn(n, u), s != null && i.push($n(n, s, o)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Wf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
function ho(e) {
  return (typeof e == "string" ? e : "" + e).replace(Wf, `
`).replace(Qf, "");
}
function pr(e, t, n) {
  if (t = ho(t), ho(e) !== t && n) throw Error(y(425));
}
function Vr() {
}
var vu = null, yu = null;
function gu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var wu = typeof setTimeout == "function" ? setTimeout : void 0, Kf = typeof clearTimeout == "function" ? clearTimeout : void 0, vo = typeof Promise == "function" ? Promise : void 0, Gf = typeof queueMicrotask == "function" ? queueMicrotask : typeof vo < "u" ? function(e) {
  return vo.resolve(null).then(e).catch(Xf);
} : wu;
function Xf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ul(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Fn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Fn(t);
}
function it(e) {
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
function yo(e) {
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
var sn = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + sn, Bn = "__reactProps$" + sn, Ke = "__reactContainer$" + sn, ku = "__reactEvents$" + sn, Yf = "__reactListeners$" + sn, Zf = "__reactHandles$" + sn;
function kt(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ke] || n[Fe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = yo(e); e !== null; ) {
        if (n = e[Fe]) return n;
        e = yo(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function qn(e) {
  return e = e[Fe] || e[Ke], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function il(e) {
  return e[Bn] || null;
}
var Su = [], At = -1;
function mt(e) {
  return { current: e };
}
function D(e) {
  0 > At || (e.current = Su[At], Su[At] = null, At--);
}
function M(e, t) {
  At++, Su[At] = e.current, e.current = t;
}
var dt = {}, le = mt(dt), fe = mt(!1), Ct = dt;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, u;
  for (u in n) l[u] = t[u];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function de(e) {
  return e = e.childContextTypes, e != null;
}
function $r() {
  D(fe), D(le);
}
function go(e, t, n) {
  if (le.current !== dt) throw Error(y(168));
  M(le, t), M(fe, n);
}
function ea(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, jc(e) || "Unknown", l));
  return $({}, n, r);
}
function Br(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dt, Ct = le.current, M(le, e), M(fe, fe.current), !0;
}
function wo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = ea(e, t, Ct), r.__reactInternalMemoizedMergedChildContext = e, D(fe), D(le), M(le, e)) : D(fe), M(fe, n);
}
var $e = null, ol = !1, Al = !1;
function ta(e) {
  $e === null ? $e = [e] : $e.push(e);
}
function Jf(e) {
  ol = !0, ta(e);
}
function ht() {
  if (!Al && $e !== null) {
    Al = !0;
    var e = 0, t = j;
    try {
      var n = $e;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      $e = null, ol = !1;
    } catch (l) {
      throw $e !== null && ($e = $e.slice(e + 1)), Ns(qu, ht), l;
    } finally {
      j = t, Al = !1;
    }
  }
  return null;
}
var Vt = [], $t = 0, Hr = null, Wr = 0, Se = [], Ee = 0, Nt = null, Be = 1, He = "";
function gt(e, t) {
  Vt[$t++] = Wr, Vt[$t++] = Hr, Hr = e, Wr = t;
}
function na(e, t, n) {
  Se[Ee++] = Be, Se[Ee++] = He, Se[Ee++] = Nt, Nt = e;
  var r = Be;
  e = He;
  var l = 32 - Ie(r) - 1;
  r &= ~(1 << l), n += 1;
  var u = 32 - Ie(t) + l;
  if (30 < u) {
    var i = l - l % 5;
    u = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Be = 1 << 32 - Ie(t) + l | n << l | r, He = u + e;
  } else Be = 1 << u | n << l | r, He = e;
}
function oi(e) {
  e.return !== null && (gt(e, 1), na(e, 1, 0));
}
function si(e) {
  for (; e === Hr; ) Hr = Vt[--$t], Vt[$t] = null, Wr = Vt[--$t], Vt[$t] = null;
  for (; e === Nt; ) Nt = Se[--Ee], Se[Ee] = null, He = Se[--Ee], Se[Ee] = null, Be = Se[--Ee], Se[Ee] = null;
}
var ye = null, ve = null, U = !1, Re = null;
function ra(e, t) {
  var n = xe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ko(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = it(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Nt !== null ? { id: Be, overflow: He } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function Eu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xu(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!ko(e, t)) {
        if (Eu(e)) throw Error(y(418));
        t = it(n.nextSibling);
        var r = ye;
        t && ko(e, t) ? ra(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, ye = e);
      }
    } else {
      if (Eu(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, U = !1, ye = e;
    }
  }
}
function So(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ye = e;
}
function mr(e) {
  if (e !== ye) return !1;
  if (!U) return So(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gu(e.type, e.memoizedProps)), t && (t = ve)) {
    if (Eu(e)) throw la(), Error(y(418));
    for (; t; ) ra(e, t), t = it(t.nextSibling);
  }
  if (So(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = it(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function la() {
  for (var e = ve; e; ) e = it(e.nextSibling);
}
function en() {
  ve = ye = null, U = !1;
}
function ai(e) {
  Re === null ? Re = [e] : Re.push(e);
}
var qf = Ye.ReactCurrentBatchConfig;
function vn(e, t, n) {
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
function hr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Eo(e) {
  var t = e._init;
  return t(e._payload);
}
function ua(e) {
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
    return f = ct(f, a), f.index = 0, f.sibling = null, f;
  }
  function u(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Kl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Mt ? h(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && Eo(E) === a.type) ? (v = l(a, d.props), v.ref = vn(f, a, d), v.return = f, v) : (v = Rr(d.type, d.key, d.props, null, f.mode, v), v.ref = vn(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Gl(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = _t(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Kl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return d = Rr(a.type, a.key, a.props, null, f.mode, d), d.ref = vn(f, null, a), d.return = f, d;
        case jt:
          return a = Gl(a, f.mode, d), a.return = f, a;
        case Je:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (kn(a) || fn(a)) return a = _t(a, f.mode, d, null), a.return = f, a;
      hr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : o(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === E ? s(f, a, d, v) : null;
        case jt:
          return d.key === E ? c(f, a, d, v) : null;
        case Je:
          return E = d._init, p(
            f,
            a,
            E(d._payload),
            v
          );
      }
      if (kn(d) || fn(d)) return E !== null ? null : h(f, a, d, v, null);
      hr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, o(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case lr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case jt:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case Je:
          var _ = v._init;
          return g(f, a, d, _(v._payload), E);
      }
      if (kn(v) || fn(v)) return f = f.get(d) || null, h(a, f, v, E, null);
      hr(a, v);
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
    if (N === d.length) return n(f, C), U && gt(f, N), E;
    if (C === null) {
      for (; N < d.length; N++) C = m(f, d[N], v), C !== null && (a = u(C, a, N), _ === null ? E = C : _.sibling = C, _ = C);
      return U && gt(f, N), E;
    }
    for (C = r(f, C); N < d.length; N++) H = g(C, f, N, d[N], v), H !== null && (e && H.alternate !== null && C.delete(H.key === null ? N : H.key), a = u(H, a, N), _ === null ? E = H : _.sibling = H, _ = H);
    return e && C.forEach(function(Pe) {
      return t(f, Pe);
    }), U && gt(f, N), E;
  }
  function k(f, a, d, v) {
    var E = fn(d);
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
    ), U && gt(f, N), E;
    if (C === null) {
      for (; !R.done; N++, R = d.next()) R = m(f, R.value, v), R !== null && (a = u(R, a, N), _ === null ? E = R : _.sibling = R, _ = R);
      return U && gt(f, N), E;
    }
    for (C = r(f, C); !R.done; N++, R = d.next()) R = g(C, f, N, R.value, v), R !== null && (e && R.alternate !== null && C.delete(R.key === null ? N : R.key), a = u(R, a, N), _ === null ? E = R : _.sibling = R, _ = R);
    return e && C.forEach(function(an) {
      return t(f, an);
    }), U && gt(f, N), E;
  }
  function F(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Mt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var E = d.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (E = d.type, E === Mt) {
                  if (_.tag === 7) {
                    n(f, _.sibling), a = l(_, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && Eo(E) === _.type) {
                  n(f, _.sibling), a = l(_, d.props), a.ref = vn(f, _, d), a.return = f, f = a;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === Mt ? (a = _t(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Rr(d.type, d.key, d.props, null, f.mode, v), v.ref = vn(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case jt:
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
            a = Gl(d, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case Je:
          return _ = d._init, F(f, a, _(d._payload), v);
      }
      if (kn(d)) return w(f, a, d, v);
      if (fn(d)) return k(f, a, d, v);
      hr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Kl(d, f.mode, v), a.return = f, f = a), i(f)) : n(f, a);
  }
  return F;
}
var tn = ua(!0), ia = ua(!1), Qr = mt(null), Kr = null, Bt = null, ci = null;
function fi() {
  ci = Bt = Kr = null;
}
function di(e) {
  var t = Qr.current;
  D(Qr), e._currentValue = t;
}
function _u(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Yt(e, t) {
  Kr = e, ci = Bt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ce = !0), e.firstContext = null);
}
function Ce(e) {
  var t = e._currentValue;
  if (ci !== e) if (e = { context: e, memoizedValue: t, next: null }, Bt === null) {
    if (Kr === null) throw Error(y(308));
    Bt = e, Kr.dependencies = { lanes: 0, firstContext: e };
  } else Bt = Bt.next = e;
  return t;
}
var St = null;
function pi(e) {
  St === null ? St = [e] : St.push(e);
}
function oa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, pi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ge(e, r);
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function mi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function sa(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function We(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, I & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ge(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, pi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ge(e, n);
}
function Cr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bu(e, n);
  }
}
function xo(e, t) {
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
function Gr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
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
              qe = !0;
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
    zt |= i, e.lanes = i, e.memoizedState = m;
  }
}
function _o(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var bn = {}, Ae = mt(bn), Hn = mt(bn), Wn = mt(bn);
function Et(e) {
  if (e === bn) throw Error(y(174));
  return e;
}
function hi(e, t) {
  switch (M(Wn, t), M(Hn, e), M(Ae, bn), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : lu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = lu(t, e);
  }
  D(Ae), M(Ae, t);
}
function nn() {
  D(Ae), D(Hn), D(Wn);
}
function aa(e) {
  Et(Wn.current);
  var t = Et(Ae.current), n = lu(t, e.type);
  t !== n && (M(Hn, e), M(Ae, n));
}
function vi(e) {
  Hn.current === e && (D(Ae), D(Hn));
}
var A = mt(0);
function Xr(e) {
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
var Vl = [];
function yi() {
  for (var e = 0; e < Vl.length; e++) Vl[e]._workInProgressVersionPrimary = null;
  Vl.length = 0;
}
var Nr = Ye.ReactCurrentDispatcher, $l = Ye.ReactCurrentBatchConfig, Pt = 0, V = null, G = null, Z = null, Yr = !1, zn = !1, Qn = 0, bf = 0;
function te() {
  throw Error(y(321));
}
function gi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Me(e[n], t[n])) return !1;
  return !0;
}
function wi(e, t, n, r, l, u) {
  if (Pt = u, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Nr.current = e === null || e.memoizedState === null ? rd : ld, e = n(r, l), zn) {
    u = 0;
    do {
      if (zn = !1, Qn = 0, 25 <= u) throw Error(y(301));
      u += 1, Z = G = null, t.updateQueue = null, Nr.current = ud, e = n(r, l);
    } while (zn);
  }
  if (Nr.current = Zr, t = G !== null && G.next !== null, Pt = 0, Z = G = V = null, Yr = !1, t) throw Error(y(300));
  return e;
}
function ki() {
  var e = Qn !== 0;
  return Qn = 0, e;
}
function De() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? V.memoizedState = Z = e : Z = Z.next = e, Z;
}
function Ne() {
  if (G === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = Z === null ? V.memoizedState : Z.next;
  if (t !== null) Z = t, G = e;
  else {
    if (e === null) throw Error(y(310));
    G = e, e = { memoizedState: G.memoizedState, baseState: G.baseState, baseQueue: G.baseQueue, queue: G.queue, next: null }, Z === null ? V.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function Kn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bl(e) {
  var t = Ne(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = G, l = r.baseQueue, u = n.pending;
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
      if ((Pt & h) === h) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (o = s = m, i = r) : s = s.next = m, V.lanes |= h, zt |= h;
      }
      c = c.next;
    } while (c !== null && c !== u);
    s === null ? i = r : s.next = o, Me(r, t.memoizedState) || (ce = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      u = l.lane, V.lanes |= u, zt |= u, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
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
    Me(u, t.memoizedState) || (ce = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
  }
  return [u, r];
}
function ca() {
}
function fa(e, t) {
  var n = V, r = Ne(), l = t(), u = !Me(r.memoizedState, l);
  if (u && (r.memoizedState = l, ce = !0), r = r.queue, Si(ma.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || Z !== null && Z.memoizedState.tag & 1) {
    if (n.flags |= 2048, Gn(9, pa.bind(null, n, r, l, t), void 0, null), J === null) throw Error(y(349));
    Pt & 30 || da(n, t, l);
  }
  return l;
}
function da(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function pa(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ha(t) && va(e);
}
function ma(e, t, n) {
  return n(function() {
    ha(t) && va(e);
  });
}
function ha(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function va(e) {
  var t = Ge(e, 1);
  t !== null && je(t, e, 1, -1);
}
function Co(e) {
  var t = De();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kn, lastRenderedState: e }, t.queue = e, e = e.dispatch = nd.bind(null, V, e), [t.memoizedState, e];
}
function Gn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ya() {
  return Ne().memoizedState;
}
function Pr(e, t, n, r) {
  var l = De();
  V.flags |= e, l.memoizedState = Gn(1 | t, n, void 0, r === void 0 ? null : r);
}
function sl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (u = i.destroy, r !== null && gi(r, i.deps)) {
      l.memoizedState = Gn(t, n, u, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = Gn(1 | t, n, u, r);
}
function No(e, t) {
  return Pr(8390656, 8, e, t);
}
function Si(e, t) {
  return sl(2048, 8, e, t);
}
function ga(e, t) {
  return sl(4, 2, e, t);
}
function wa(e, t) {
  return sl(4, 4, e, t);
}
function ka(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Sa(e, t, n) {
  return n = n != null ? n.concat([e]) : null, sl(4, 4, ka.bind(null, t, e), n);
}
function Ei() {
}
function Ea(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function xa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function _a(e, t, n) {
  return Pt & 21 ? (Me(n, t) || (n = Ls(), V.lanes |= n, zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ce = !0), e.memoizedState = n);
}
function ed(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), t();
  } finally {
    j = n, $l.transition = r;
  }
}
function Ca() {
  return Ne().memoizedState;
}
function td(e, t, n) {
  var r = at(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Na(e)) Pa(t, n);
  else if (n = oa(e, t, n, r), n !== null) {
    var l = ie();
    je(n, e, r, l), za(n, t, r);
  }
}
function nd(e, t, n) {
  var r = at(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Na(e)) Pa(t, l);
  else {
    var u = e.alternate;
    if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
      var i = t.lastRenderedState, o = u(i, n);
      if (l.hasEagerState = !0, l.eagerState = o, Me(o, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, pi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = oa(e, t, l, r), n !== null && (l = ie(), je(n, e, r, l), za(n, t, r));
  }
}
function Na(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function Pa(e, t) {
  zn = Yr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function za(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bu(e, n);
  }
}
var Zr = { readContext: Ce, useCallback: te, useContext: te, useEffect: te, useImperativeHandle: te, useInsertionEffect: te, useLayoutEffect: te, useMemo: te, useReducer: te, useRef: te, useState: te, useDebugValue: te, useDeferredValue: te, useTransition: te, useMutableSource: te, useSyncExternalStore: te, useId: te, unstable_isNewReconciler: !1 }, rd = { readContext: Ce, useCallback: function(e, t) {
  return De().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ce, useEffect: No, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pr(
    4194308,
    4,
    ka.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Pr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Pr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = De();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = De();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = td.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = De();
  return e = { current: e }, t.memoizedState = e;
}, useState: Co, useDebugValue: Ei, useDeferredValue: function(e) {
  return De().memoizedState = e;
}, useTransition: function() {
  var e = Co(!1), t = e[0];
  return e = ed.bind(null, e[1]), De().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = De();
  if (U) {
    if (n === void 0) throw Error(y(407));
    n = n();
  } else {
    if (n = t(), J === null) throw Error(y(349));
    Pt & 30 || da(r, t, n);
  }
  l.memoizedState = n;
  var u = { value: n, getSnapshot: t };
  return l.queue = u, No(ma.bind(
    null,
    r,
    u,
    e
  ), [e]), r.flags |= 2048, Gn(9, pa.bind(null, r, u, n, t), void 0, null), n;
}, useId: function() {
  var e = De(), t = J.identifierPrefix;
  if (U) {
    var n = He, r = Be;
    n = (r & ~(1 << 32 - Ie(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = bf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ld = {
  readContext: Ce,
  useCallback: Ea,
  useContext: Ce,
  useEffect: Si,
  useImperativeHandle: Sa,
  useInsertionEffect: ga,
  useLayoutEffect: wa,
  useMemo: xa,
  useReducer: Bl,
  useRef: ya,
  useState: function() {
    return Bl(Kn);
  },
  useDebugValue: Ei,
  useDeferredValue: function(e) {
    var t = Ne();
    return _a(t, G.memoizedState, e);
  },
  useTransition: function() {
    var e = Bl(Kn)[0], t = Ne().memoizedState;
    return [e, t];
  },
  useMutableSource: ca,
  useSyncExternalStore: fa,
  useId: Ca,
  unstable_isNewReconciler: !1
}, ud = { readContext: Ce, useCallback: Ea, useContext: Ce, useEffect: Si, useImperativeHandle: Sa, useInsertionEffect: ga, useLayoutEffect: wa, useMemo: xa, useReducer: Hl, useRef: ya, useState: function() {
  return Hl(Kn);
}, useDebugValue: Ei, useDeferredValue: function(e) {
  var t = Ne();
  return G === null ? t.memoizedState = e : _a(t, G.memoizedState, e);
}, useTransition: function() {
  var e = Hl(Kn)[0], t = Ne().memoizedState;
  return [e, t];
}, useMutableSource: ca, useSyncExternalStore: fa, useId: Ca, unstable_isNewReconciler: !1 };
function Le(e, t) {
  if (e && e.defaultProps) {
    t = $({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Cu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : $({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = { isMounted: function(e) {
  return (e = e._reactInternals) ? Rt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = at(e), u = We(r, l);
  u.payload = t, n != null && (u.callback = n), t = ot(e, u, l), t !== null && (je(t, e, l, r), Cr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = at(e), u = We(r, l);
  u.tag = 1, u.payload = t, n != null && (u.callback = n), t = ot(e, u, l), t !== null && (je(t, e, l, r), Cr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ie(), r = at(e), l = We(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ot(e, l, r), t !== null && (je(t, e, r, n), Cr(t, e, r));
} };
function Po(e, t, n, r, l, u, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, i) : t.prototype && t.prototype.isPureReactComponent ? !An(n, r) || !An(l, u) : !0;
}
function La(e, t, n) {
  var r = !1, l = dt, u = t.contextType;
  return typeof u == "object" && u !== null ? u = Ce(u) : (l = de(t) ? Ct : le.current, r = t.contextTypes, u = (r = r != null) ? bt(e, l) : dt), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
}
function zo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function Nu(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, mi(e);
  var u = t.contextType;
  typeof u == "object" && u !== null ? l.context = Ce(u) : (u = de(t) ? Ct : le.current, l.context = bt(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Cu(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && al.enqueueReplaceState(l, l.state, null), Gr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ic(r), r = r.return;
    while (r);
    var l = n;
  } catch (u) {
    l = `
Error generating stack: ` + u.message + `
` + u.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var id = typeof WeakMap == "function" ? WeakMap : Map;
function Ta(e, t, n) {
  n = We(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    qr || (qr = !0, Fu = r), Pu(e, t);
  }, n;
}
function Ra(e, t, n) {
  n = We(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Pu(e, t);
    };
  }
  var u = e.stateNode;
  return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
    Pu(e, t), typeof r != "function" && (st === null ? st = /* @__PURE__ */ new Set([this]) : st.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Lo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new id();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = kd.bind(null, e, t, n), t.then(e, e));
}
function To(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ro(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = We(-1, 1), t.tag = 2, ot(n, t, 1))), n.lanes |= 1), e);
}
var od = Ye.ReactCurrentOwner, ce = !1;
function ue(e, t, n, r) {
  t.child = e === null ? ia(t, null, n, r) : tn(t, e.child, n, r);
}
function Io(e, t, n, r, l) {
  n = n.render;
  var u = t.ref;
  return Yt(t, l), r = wi(e, t, n, r, u, l), n = ki(), e !== null && !ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Xe(e, t, l)) : (U && n && oi(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function jo(e, t, n, r, l) {
  if (e === null) {
    var u = n.type;
    return typeof u == "function" && !Ti(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Ia(e, t, u, r, l)) : (e = Rr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (u = e.child, !(e.lanes & l)) {
    var i = u.memoizedProps;
    if (n = n.compare, n = n !== null ? n : An, n(i, r) && e.ref === t.ref) return Xe(e, t, l);
  }
  return t.flags |= 1, e = ct(u, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ia(e, t, n, r, l) {
  if (e !== null) {
    var u = e.memoizedProps;
    if (An(u, r) && e.ref === t.ref) if (ce = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (ce = !0);
    else return t.lanes = e.lanes, Xe(e, t, l);
  }
  return zu(e, t, n, r, l);
}
function ja(e, t, n) {
  var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(Wt, me), me |= n;
  else {
    if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, M(Wt, me), me |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, M(Wt, me), me |= r;
  }
  else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, M(Wt, me), me |= r;
  return ue(e, t, l, n), t.child;
}
function Ma(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function zu(e, t, n, r, l) {
  var u = de(n) ? Ct : le.current;
  return u = bt(t, u), Yt(t, l), n = wi(e, t, n, r, u, l), r = ki(), e !== null && !ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Xe(e, t, l)) : (U && r && oi(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function Mo(e, t, n, r, l) {
  if (de(n)) {
    var u = !0;
    Br(t);
  } else u = !1;
  if (Yt(t, l), t.stateNode === null) zr(e, t), La(t, n, r), Nu(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, o = t.memoizedProps;
    i.props = o;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ce(c) : (c = de(n) ? Ct : le.current, c = bt(t, c));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || s !== c) && zo(t, i, r, c), qe = !1;
    var p = t.memoizedState;
    i.state = p, Gr(t, r, i, l), s = t.memoizedState, o !== r || p !== s || fe.current || qe ? (typeof h == "function" && (Cu(t, n, h, r), s = t.memoizedState), (o = qe || Po(t, n, o, r, p, s, c)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = o) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, sa(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : Le(t.type, o), i.props = c, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ce(s) : (s = de(n) ? Ct : le.current, s = bt(t, s));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== m || p !== s) && zo(t, i, r, s), qe = !1, p = t.memoizedState, i.state = p, Gr(t, r, i, l);
    var w = t.memoizedState;
    o !== m || p !== w || fe.current || qe ? (typeof g == "function" && (Cu(t, n, g, r), w = t.memoizedState), (c = qe || Po(t, n, c, r, p, w, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Lu(e, t, n, r, u, l);
}
function Lu(e, t, n, r, l, u) {
  Ma(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && wo(t, n, !1), Xe(e, t, u);
  r = t.stateNode, od.current = t;
  var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = tn(t, e.child, null, u), t.child = tn(t, null, o, u)) : ue(e, t, o, u), t.memoizedState = r.state, l && wo(t, n, !0), t.child;
}
function Oa(e) {
  var t = e.stateNode;
  t.pendingContext ? go(e, t.pendingContext, t.pendingContext !== t.context) : t.context && go(e, t.context, !1), hi(e, t.containerInfo);
}
function Oo(e, t, n, r, l) {
  return en(), ai(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var Tu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ru(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Da(e, t, n) {
  var r = t.pendingProps, l = A.current, u = !1, i = (t.flags & 128) !== 0, o;
  if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M(A, l & 1), e === null)
    return xu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, i = { mode: "hidden", children: i }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = i) : u = dl(i, r, 0, null), e = _t(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Ru(n), t.memoizedState = Tu, e) : xi(t, i));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return sd(e, t, i, r, o, l, n);
  if (u) {
    u = r.fallback, i = t.mode, l = e.child, o = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = ct(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? u = ct(o, u) : (u = _t(u, i, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, i = e.child.memoizedState, i = i === null ? Ru(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, u.memoizedState = i, u.childLanes = e.childLanes & ~n, t.memoizedState = Tu, r;
  }
  return u = e.child, e = u.sibling, r = ct(u, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function xi(e, t) {
  return t = dl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function vr(e, t, n, r) {
  return r !== null && ai(r), tn(t, e.child, null, n), e = xi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function sd(e, t, n, r, l, u, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Wl(Error(y(422))), vr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = dl({ mode: "visible", children: r.children }, l, 0, null), u = _t(u, l, i, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, t.mode & 1 && tn(t, e.child, null, i), t.child.memoizedState = Ru(i), t.memoizedState = Tu, u);
  if (!(t.mode & 1)) return vr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, u = Error(y(419)), r = Wl(u, r, void 0), vr(e, t, i, r);
  }
  if (o = (i & e.childLanes) !== 0, ce || o) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Ge(e, l), je(r, e, l, -1));
    }
    return Li(), r = Wl(Error(y(421))), vr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Sd.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, ve = it(l.nextSibling), ye = t, U = !0, Re = null, e !== null && (Se[Ee++] = Be, Se[Ee++] = He, Se[Ee++] = Nt, Be = e.id, He = e.overflow, Nt = t), t = xi(t, r.children), t.flags |= 4096, t);
}
function Do(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _u(e.return, t, n);
}
function Ql(e, t, n, r, l) {
  var u = e.memoizedState;
  u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
}
function Fa(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, u = r.tail;
  if (ue(e, t, r.children, n), r = A.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Do(e, n, t);
      else if (e.tag === 19) Do(e, n, t);
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
  if (M(A, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Xr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ql(t, !1, l, n, u);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Xr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Ql(t, !0, n, null, u);
      break;
    case "together":
      Ql(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function zr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Xe(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), zt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ct(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ad(e, t, n) {
  switch (t.tag) {
    case 3:
      Oa(t), en();
      break;
    case 5:
      aa(t);
      break;
    case 1:
      de(t.type) && Br(t);
      break;
    case 4:
      hi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      M(Qr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (M(A, A.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Da(e, t, n) : (M(A, A.current & 1), e = Xe(e, t, n), e !== null ? e.sibling : null);
      M(A, A.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Fa(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), M(A, A.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ja(e, t, n);
  }
  return Xe(e, t, n);
}
var Ua, Iu, Aa, Va;
Ua = function(e, t) {
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
Iu = function() {
};
Aa = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Et(Ae.current);
    var u = null;
    switch (n) {
      case "input":
        l = eu(e, l), r = eu(e, r), u = [];
        break;
      case "select":
        l = $({}, l, { value: void 0 }), r = $({}, r, { value: void 0 }), u = [];
        break;
      case "textarea":
        l = ru(e, l), r = ru(e, r), u = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vr);
    }
    uu(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (i in o) o.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (In.hasOwnProperty(c) ? u || (u = []) : (u = u || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== o && (s != null || o != null)) if (c === "style") if (o) {
        for (i in o) !o.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && o[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (u || (u = []), u.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, o = o ? o.__html : void 0, s != null && o !== s && (u = u || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (In.hasOwnProperty(c) ? (s != null && c === "onScroll" && O("scroll", e), u || o === s || (u = [])) : (u = u || []).push(c, s));
    }
    n && (u = u || []).push("style", n);
    var c = u;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Va = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
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
function cd(e, t, n) {
  var r = t.pendingProps;
  switch (si(t), t.tag) {
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
      return de(t.type) && $r(), ne(t), null;
    case 3:
      return r = t.stateNode, nn(), D(fe), D(le), yi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (mr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Re !== null && (Vu(Re), Re = null))), Iu(e, t), ne(t), null;
    case 5:
      vi(t);
      var l = Et(Wn.current);
      if (n = t.type, e !== null && t.stateNode != null) Aa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (e = Et(Ae.current), mr(t)) {
          r = t.stateNode, n = t.type;
          var u = t.memoizedProps;
          switch (r[Fe] = t, r[Bn] = u, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < En.length; l++) O(En[l], r);
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
              Wi(r, u), O("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!u.multiple }, O("invalid", r);
              break;
            case "textarea":
              Ki(r, u), O("invalid", r);
          }
          uu(n, u), l = null;
          for (var i in u) if (u.hasOwnProperty(i)) {
            var o = u[i];
            i === "children" ? typeof o == "string" ? r.textContent !== o && (u.suppressHydrationWarning !== !0 && pr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (u.suppressHydrationWarning !== !0 && pr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : In.hasOwnProperty(i) && o != null && i === "onScroll" && O("scroll", r);
          }
          switch (n) {
            case "input":
              ur(r), Qi(r, u, !0);
              break;
            case "textarea":
              ur(r), Gi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick == "function" && (r.onclick = Vr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ms(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Fe] = t, e[Bn] = r, Ua(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = iu(n, r), n) {
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
                for (l = 0; l < En.length; l++) O(En[l], e);
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
                Wi(e, r), l = eu(e, r), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = $({}, r, { value: void 0 }), O("invalid", e);
                break;
              case "textarea":
                Ki(e, r), l = ru(e, r), O("invalid", e);
                break;
              default:
                l = r;
            }
            uu(n, l), o = l;
            for (u in o) if (o.hasOwnProperty(u)) {
              var s = o[u];
              u === "style" ? ys(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && hs(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && jn(e, s) : typeof s == "number" && jn(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (In.hasOwnProperty(u) ? s != null && u === "onScroll" && O("scroll", e) : s != null && Gu(e, u, s, i));
            }
            switch (n) {
              case "input":
                ur(e), Qi(e, r, !1);
                break;
              case "textarea":
                ur(e), Gi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, u = r.value, u != null ? Qt(e, !!r.multiple, u, !1) : r.defaultValue != null && Qt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
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
      if (e && t.stateNode != null) Va(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (n = Et(Wn.current), Et(Ae.current), mr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Fe] = t, (u = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
            case 3:
              pr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && pr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          u && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Fe] = t, t.stateNode = r;
      }
      return ne(t), null;
    case 13:
      if (D(A), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128)) la(), en(), t.flags |= 98560, u = !1;
        else if (u = mr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!u) throw Error(y(318));
            if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(y(317));
            u[Fe] = t;
          } else en(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ne(t), u = !1;
        } else Re !== null && (Vu(Re), Re = null), u = !0;
        if (!u) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || A.current & 1 ? X === 0 && (X = 3) : Li())), t.updateQueue !== null && (t.flags |= 4), ne(t), null);
    case 4:
      return nn(), Iu(e, t), e === null && Vn(t.stateNode.containerInfo), ne(t), null;
    case 10:
      return di(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && $r(), ne(t), null;
    case 19:
      if (D(A), u = t.memoizedState, u === null) return ne(t), null;
      if (r = (t.flags & 128) !== 0, i = u.rendering, i === null) if (r) yn(u, !1);
      else {
        if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Xr(e), i !== null) {
            for (t.flags |= 128, yn(u, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, i = u.alternate, i === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, u.type = i.type, e = i.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return M(A, A.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        u.tail !== null && Q() > ln && (t.flags |= 128, r = !0, yn(u, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Xr(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yn(u, !0), u.tail === null && u.tailMode === "hidden" && !i.alternate && !U) return ne(t), null;
        } else 2 * Q() - u.renderingStartTime > ln && n !== 1073741824 && (t.flags |= 128, r = !0, yn(u, !1), t.lanes = 4194304);
        u.isBackwards ? (i.sibling = t.child, t.child = i) : (n = u.last, n !== null ? n.sibling = i : t.child = i, u.last = i);
      }
      return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Q(), t.sibling = null, n = A.current, M(A, r ? n & 1 | 2 : n & 1), t) : (ne(t), null);
    case 22:
    case 23:
      return zi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ne(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function fd(e, t) {
  switch (si(t), t.tag) {
    case 1:
      return de(t.type) && $r(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return nn(), D(fe), D(le), yi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return vi(t), null;
    case 13:
      if (D(A), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(y(340));
        en();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return D(A), null;
    case 4:
      return nn(), null;
    case 10:
      return di(t.type._context), null;
    case 22:
    case 23:
      return zi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1, re = !1, dd = typeof WeakSet == "function" ? WeakSet : Set, S = null;
function Ht(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    B(e, t, r);
  }
  else n.current = null;
}
function ju(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var Fo = !1;
function pd(e, t) {
  if (vu = Fr, e = Qs(), ii(e)) {
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
  for (yu = { focusedElem: e, selectionRange: n }, Fr = !1, S = t; S !== null; ) if (t = S, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, S = e;
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
            var k = w.memoizedProps, F = w.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Le(t.type, k), F);
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
  return w = Fo, Fo = !1, w;
}
function Ln(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var u = l.destroy;
        l.destroy = void 0, u !== void 0 && ju(t, n, u);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, t) {
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
function Mu(e) {
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
function $a(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, $a(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Fe], delete t[Bn], delete t[ku], delete t[Yf], delete t[Zf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ba(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uo(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ba(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ou(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Vr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ou(e, t, n), e = e.sibling; e !== null; ) Ou(e, t, n), e = e.sibling;
}
function Du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Du(e, t, n), e = e.sibling; e !== null; ) Du(e, t, n), e = e.sibling;
}
var q = null, Te = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Ha(e, t, n), n = n.sibling;
}
function Ha(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function") try {
    Ue.onCommitFiberUnmount(nl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      re || Ht(n, t);
    case 6:
      var r = q, l = Te;
      q = null, Ze(e, t, n), q = r, Te = l, q !== null && (Te ? (e = q, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null && (Te ? (e = q, n = n.stateNode, e.nodeType === 8 ? Ul(e.parentNode, n) : e.nodeType === 1 && Ul(e, n), Fn(e)) : Ul(q, n.stateNode));
      break;
    case 4:
      r = q, l = Te, q = n.stateNode.containerInfo, Te = !0, Ze(e, t, n), q = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var u = l, i = u.destroy;
          u = u.tag, i !== void 0 && (u & 2 || u & 4) && ju(n, t, i), l = l.next;
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (!re && (Ht(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        B(n, t, o);
      }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (re = (r = re) || n.memoizedState !== null, Ze(e, t, n), re = r) : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Ao(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dd()), t.forEach(function(r) {
      var l = Ed.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var u = e, i = t, o = i;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            q = o.stateNode, Te = !1;
            break e;
          case 3:
            q = o.stateNode.containerInfo, Te = !0;
            break e;
          case 4:
            q = o.stateNode.containerInfo, Te = !0;
            break e;
        }
        o = o.return;
      }
      if (q === null) throw Error(y(160));
      Ha(u, i, l), q = null, Te = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      B(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wa(t, e), t = t.sibling;
}
function Wa(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), Oe(e), r & 4) {
        try {
          Ln(3, e, e.return), cl(3, e);
        } catch (k) {
          B(e, e.return, k);
        }
        try {
          Ln(5, e, e.return);
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 1:
      ze(t, e), Oe(e), r & 512 && n !== null && Ht(n, n.return);
      break;
    case 5:
      if (ze(t, e), Oe(e), r & 512 && n !== null && Ht(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          jn(l, "");
        } catch (k) {
          B(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var u = e.memoizedProps, i = n !== null ? n.memoizedProps : u, o = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          o === "input" && u.type === "radio" && u.name != null && ds(l, u), iu(o, i);
          var c = iu(o, u);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], m = s[i + 1];
            h === "style" ? ys(l, m) : h === "dangerouslySetInnerHTML" ? hs(l, m) : h === "children" ? jn(l, m) : Gu(l, h, m, c);
          }
          switch (o) {
            case "input":
              tu(l, u);
              break;
            case "textarea":
              ps(l, u);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!u.multiple;
              var g = u.value;
              g != null ? Qt(l, !!u.multiple, g, !1) : p !== !!u.multiple && (u.defaultValue != null ? Qt(
                l,
                !!u.multiple,
                u.defaultValue,
                !0
              ) : Qt(l, !!u.multiple, u.multiple ? [] : "", !1));
          }
          l[Bn] = u;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 6:
      if (ze(t, e), Oe(e), r & 4) {
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
      if (ze(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Fn(t.containerInfo);
      } catch (k) {
        B(e, e.return, k);
      }
      break;
    case 4:
      ze(t, e), Oe(e);
      break;
    case 13:
      ze(t, e), Oe(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Ni = Q())), r & 4 && Ao(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (re = (c = re) || h, ze(t, e), re = c) : ze(t, e), Oe(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (S = e, h = e.child; h !== null; ) {
          for (m = S = h; S !== null; ) {
            switch (p = S, g = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ln(4, p, p.return);
                break;
              case 1:
                Ht(p, p.return);
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
                Ht(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  $o(m);
                  continue;
                }
            }
            g !== null ? (g.return = p, S = g) : $o(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, c ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (o = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, o.style.display = vs("display", i));
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
      ze(t, e), Oe(e), r & 4 && Ao(e);
      break;
    case 21:
      break;
    default:
      ze(
        t,
        e
      ), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ba(n)) {
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
          r.flags & 32 && (jn(l, ""), r.flags &= -33);
          var u = Uo(e);
          Du(e, u, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, o = Uo(e);
          Ou(e, o, i);
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
function md(e, t, n) {
  S = e, Qa(e);
}
function Qa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S, u = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || yr;
      if (!i) {
        var o = l.alternate, s = o !== null && o.memoizedState !== null || re;
        o = yr;
        var c = re;
        if (yr = i, (re = s) && !c) for (S = l; S !== null; ) i = S, s = i.child, i.tag === 22 && i.memoizedState !== null ? Bo(l) : s !== null ? (s.return = i, S = s) : Bo(l);
        for (; u !== null; ) S = u, Qa(u), u = u.sibling;
        S = l, yr = o, re = c;
      }
      Vo(e);
    } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, S = u) : Vo(e);
  }
}
function Vo(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            re || cl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !re) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var u = t.updateQueue;
            u !== null && _o(t, u, r);
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
              _o(t, i, n);
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
                  m !== null && Fn(m);
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
        re || t.flags & 512 && Mu(t);
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
function $o(e) {
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
function Bo(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            cl(4, t);
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
            Mu(t);
          } catch (s) {
            B(t, u, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Mu(t);
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
var hd = Math.ceil, Jr = Ye.ReactCurrentDispatcher, _i = Ye.ReactCurrentOwner, _e = Ye.ReactCurrentBatchConfig, I = 0, J = null, K = null, b = 0, me = 0, Wt = mt(0), X = 0, Xn = null, zt = 0, fl = 0, Ci = 0, Tn = null, ae = null, Ni = 0, ln = 1 / 0, Ve = null, qr = !1, Fu = null, st = null, gr = !1, nt = null, br = 0, Rn = 0, Uu = null, Lr = -1, Tr = 0;
function ie() {
  return I & 6 ? Q() : Lr !== -1 ? Lr : Lr = Q();
}
function at(e) {
  return e.mode & 1 ? I & 2 && b !== 0 ? b & -b : qf.transition !== null ? (Tr === 0 && (Tr = Ls()), Tr) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ds(e.type)), e) : 1;
}
function je(e, t, n, r) {
  if (50 < Rn) throw Rn = 0, Uu = null, Error(y(185));
  Zn(e, n, r), (!(I & 2) || e !== J) && (e === J && (!(I & 2) && (fl |= n), X === 4 && et(e, b)), pe(e, r), n === 1 && I === 0 && !(t.mode & 1) && (ln = Q() + 500, ol && ht()));
}
function pe(e, t) {
  var n = e.callbackNode;
  Jc(e, t);
  var r = Dr(e, e === J ? b : 0);
  if (r === 0) n !== null && Zi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Zi(n), t === 1) e.tag === 0 ? Jf(Ho.bind(null, e)) : ta(Ho.bind(null, e)), Gf(function() {
      !(I & 6) && ht();
    }), n = null;
    else {
      switch (Ts(r)) {
        case 1:
          n = qu;
          break;
        case 4:
          n = Ps;
          break;
        case 16:
          n = Or;
          break;
        case 536870912:
          n = zs;
          break;
        default:
          n = Or;
      }
      n = ba(n, Ka.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ka(e, t) {
  if (Lr = -1, Tr = 0, I & 6) throw Error(y(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n) return null;
  var r = Dr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = el(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var u = Xa();
    (J !== e || b !== t) && (Ve = null, ln = Q() + 500, xt(e, t));
    do
      try {
        gd();
        break;
      } catch (o) {
        Ga(e, o);
      }
    while (!0);
    fi(), Jr.current = u, I = l, K !== null ? t = 0 : (J = null, b = 0, t = X);
  }
  if (t !== 0) {
    if (t === 2 && (l = fu(e), l !== 0 && (r = l, t = Au(e, l))), t === 1) throw n = Xn, xt(e, 0), et(e, r), pe(e, Q()), n;
    if (t === 6) et(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !vd(l) && (t = el(e, r), t === 2 && (u = fu(e), u !== 0 && (r = u, t = Au(e, u))), t === 1)) throw n = Xn, xt(e, 0), et(e, r), pe(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wt(e, ae, Ve);
          break;
        case 3:
          if (et(e, r), (r & 130023424) === r && (t = Ni + 500 - Q(), 10 < t)) {
            if (Dr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ie(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = wu(wt.bind(null, e, ae, Ve), t);
            break;
          }
          wt(e, ae, Ve);
          break;
        case 4:
          if (et(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            u = 1 << i, i = t[i], i > l && (l = i), r &= ~u;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * hd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = wu(wt.bind(null, e, ae, Ve), r);
            break;
          }
          wt(e, ae, Ve);
          break;
        case 5:
          wt(e, ae, Ve);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Ka.bind(null, e) : null;
}
function Au(e, t) {
  var n = Tn;
  return e.current.memoizedState.isDehydrated && (xt(e, t).flags |= 256), e = el(e, t), e !== 2 && (t = ae, ae = n, t !== null && Vu(t)), e;
}
function Vu(e) {
  ae === null ? ae = e : ae.push.apply(ae, e);
}
function vd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], u = l.getSnapshot;
        l = l.value;
        try {
          if (!Me(u(), l)) return !1;
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
function et(e, t) {
  for (t &= ~Ci, t &= ~fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ie(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ho(e) {
  if (I & 6) throw Error(y(327));
  Zt();
  var t = Dr(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = el(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fu(e);
    r !== 0 && (t = r, n = Au(e, r));
  }
  if (n === 1) throw n = Xn, xt(e, 0), et(e, t), pe(e, Q()), n;
  if (n === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, wt(e, ae, Ve), pe(e, Q()), null;
}
function Pi(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (ln = Q() + 500, ol && ht());
  }
}
function Lt(e) {
  nt !== null && nt.tag === 0 && !(I & 6) && Zt();
  var t = I;
  I |= 1;
  var n = _e.transition, r = j;
  try {
    if (_e.transition = null, j = 1, e) return e();
  } finally {
    j = r, _e.transition = n, I = t, !(I & 6) && ht();
  }
}
function zi() {
  me = Wt.current, D(Wt);
}
function xt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Kf(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (si(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && $r();
        break;
      case 3:
        nn(), D(fe), D(le), yi();
        break;
      case 5:
        vi(r);
        break;
      case 4:
        nn();
        break;
      case 13:
        D(A);
        break;
      case 19:
        D(A);
        break;
      case 10:
        di(r.type._context);
        break;
      case 22:
      case 23:
        zi();
    }
    n = n.return;
  }
  if (J = e, K = e = ct(e.current, null), b = me = t, X = 0, Xn = null, Ci = fl = zt = 0, ae = Tn = null, St !== null) {
    for (t = 0; t < St.length; t++) if (n = St[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, u = n.pending;
      if (u !== null) {
        var i = u.next;
        u.next = l, r.next = i;
      }
      n.pending = r;
    }
    St = null;
  }
  return e;
}
function Ga(e, t) {
  do {
    var n = K;
    try {
      if (fi(), Nr.current = Zr, Yr) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Yr = !1;
      }
      if (Pt = 0, Z = G = V = null, zn = !1, Qn = 0, _i.current = null, n === null || n.return === null) {
        X = 1, Xn = t, K = null;
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
          var g = To(i);
          if (g !== null) {
            g.flags &= -257, Ro(g, i, o, u, t), g.mode & 1 && Lo(u, c, t), t = g, s = c;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Lo(u, c, t), Li();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && o.mode & 1) {
          var F = To(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Ro(F, i, o, u, t), ai(rn(s, o));
            break e;
          }
        }
        u = s = rn(s, o), X !== 4 && (X = 2), Tn === null ? Tn = [u] : Tn.push(u), u = i;
        do {
          switch (u.tag) {
            case 3:
              u.flags |= 65536, t &= -t, u.lanes |= t;
              var f = Ta(u, s, t);
              xo(u, f);
              break e;
            case 1:
              o = s;
              var a = u.type, d = u.stateNode;
              if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (st === null || !st.has(d)))) {
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var v = Ra(u, o, t);
                xo(u, v);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      Za(n);
    } catch (E) {
      t = E, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xa() {
  var e = Jr.current;
  return Jr.current = Zr, e === null ? Zr : e;
}
function Li() {
  (X === 0 || X === 3 || X === 2) && (X = 4), J === null || !(zt & 268435455) && !(fl & 268435455) || et(J, b);
}
function el(e, t) {
  var n = I;
  I |= 2;
  var r = Xa();
  (J !== e || b !== t) && (Ve = null, xt(e, t));
  do
    try {
      yd();
      break;
    } catch (l) {
      Ga(e, l);
    }
  while (!0);
  if (fi(), I = n, Jr.current = r, K !== null) throw Error(y(261));
  return J = null, b = 0, X;
}
function yd() {
  for (; K !== null; ) Ya(K);
}
function gd() {
  for (; K !== null && !Bc(); ) Ya(K);
}
function Ya(e) {
  var t = qa(e.alternate, e, me);
  e.memoizedProps = e.pendingProps, t === null ? Za(e) : K = t, _i.current = null;
}
function Za(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = fd(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        X = 6, K = null;
        return;
      }
    } else if (n = cd(n, t, me), n !== null) {
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
function wt(e, t, n) {
  var r = j, l = _e.transition;
  try {
    _e.transition = null, j = 1, wd(e, t, n, r);
  } finally {
    _e.transition = l, j = r;
  }
  return null;
}
function wd(e, t, n, r) {
  do
    Zt();
  while (nt !== null);
  if (I & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var u = n.lanes | n.childLanes;
  if (qc(e, u), e === J && (K = J = null, b = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || gr || (gr = !0, ba(Or, function() {
    return Zt(), null;
  })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
    u = _e.transition, _e.transition = null;
    var i = j;
    j = 1;
    var o = I;
    I |= 4, _i.current = null, pd(e, n), Wa(n, e), Af(yu), Fr = !!vu, yu = vu = null, e.current = n, md(n), Hc(), I = o, j = i, _e.transition = u;
  } else e.current = n;
  if (gr && (gr = !1, nt = e, br = l), u = e.pendingLanes, u === 0 && (st = null), Kc(n.stateNode), pe(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qr) throw qr = !1, e = Fu, Fu = null, e;
  return br & 1 && e.tag !== 0 && Zt(), u = e.pendingLanes, u & 1 ? e === Uu ? Rn++ : (Rn = 0, Uu = e) : Rn = 0, ht(), null;
}
function Zt() {
  if (nt !== null) {
    var e = Ts(br), t = _e.transition, n = j;
    try {
      if (_e.transition = null, j = 16 > e ? 16 : e, nt === null) var r = !1;
      else {
        if (e = nt, nt = null, br = 0, I & 6) throw Error(y(331));
        var l = I;
        for (I |= 4, S = e.current; S !== null; ) {
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
                      Ln(8, h, u);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, S = m;
                  else for (; S !== null; ) {
                    h = S;
                    var p = h.sibling, g = h.return;
                    if ($a(h), h === c) {
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
                Ln(9, u, u.return);
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
                  cl(9, o);
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
        if (I = l, ht(), Ue && typeof Ue.onPostCommitFiberRoot == "function") try {
          Ue.onPostCommitFiberRoot(nl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      j = n, _e.transition = t;
    }
  }
  return !1;
}
function Wo(e, t, n) {
  t = rn(n, t), t = Ta(e, t, 1), e = ot(e, t, 1), t = ie(), e !== null && (Zn(e, 1, t), pe(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Wo(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Wo(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (st === null || !st.has(r))) {
        e = rn(n, e), e = Ra(t, e, 1), t = ot(t, e, 1), e = ie(), t !== null && (Zn(t, 1, e), pe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function kd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ie(), e.pingedLanes |= e.suspendedLanes & n, J === e && (b & n) === n && (X === 4 || X === 3 && (b & 130023424) === b && 500 > Q() - Ni ? xt(e, 0) : Ci |= n), pe(e, t);
}
function Ja(e, t) {
  t === 0 && (e.mode & 1 ? (t = sr, sr <<= 1, !(sr & 130023424) && (sr = 4194304)) : t = 1);
  var n = ie();
  e = Ge(e, t), e !== null && (Zn(e, t, n), pe(e, n));
}
function Sd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ja(e, n);
}
function Ed(e, t) {
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
  r !== null && r.delete(t), Ja(e, n);
}
var qa;
qa = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ce = !1, ad(e, t, n);
    ce = !!(e.flags & 131072);
  }
  else ce = !1, U && t.flags & 1048576 && na(t, Wr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zr(e, t), e = t.pendingProps;
      var l = bt(t, le.current);
      Yt(t, n), l = wi(null, t, r, e, l, n);
      var u = ki();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, de(r) ? (u = !0, Br(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, mi(t), l.updater = al, t.stateNode = l, l._reactInternals = t, Nu(t, r, e, n), t = Lu(null, t, r, !0, u, n)) : (t.tag = 0, U && u && oi(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = _d(r), e = Le(r, e), l) {
          case 0:
            t = zu(null, t, r, e, n);
            break e;
          case 1:
            t = Mo(null, t, r, e, n);
            break e;
          case 11:
            t = Io(null, t, r, e, n);
            break e;
          case 14:
            t = jo(null, t, r, Le(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), zu(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Mo(e, t, r, l, n);
    case 3:
      e: {
        if (Oa(t), e === null) throw Error(y(387));
        r = t.pendingProps, u = t.memoizedState, l = u.element, sa(e, t), Gr(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
          l = rn(Error(y(423)), t), t = Oo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = rn(Error(y(424)), t), t = Oo(e, t, r, n, l);
          break e;
        } else for (ve = it(t.stateNode.containerInfo.firstChild), ye = t, U = !0, Re = null, n = ia(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (en(), r === l) {
            t = Xe(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return aa(t), e === null && xu(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, i = l.children, gu(r, l) ? i = null : u !== null && gu(r, u) && (t.flags |= 32), Ma(e, t), ue(e, t, i, n), t.child;
    case 6:
      return e === null && xu(t), null;
    case 13:
      return Da(e, t, n);
    case 4:
      return hi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tn(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Io(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, i = l.value, M(Qr, r._currentValue), r._currentValue = i, u !== null) if (Me(u.value, i)) {
          if (u.children === l.children && !fe.current) {
            t = Xe(e, t, n);
            break e;
          }
        } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
          var o = u.dependencies;
          if (o !== null) {
            i = u.child;
            for (var s = o.firstContext; s !== null; ) {
              if (s.context === r) {
                if (u.tag === 1) {
                  s = We(-1, n & -n), s.tag = 2;
                  var c = u.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                  }
                }
                u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), _u(
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
            i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), _u(i, n, t), i = u.sibling;
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
      return l = t.type, r = t.pendingProps.children, Yt(t, n), l = Ce(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), jo(e, t, r, l, n);
    case 15:
      return Ia(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), zr(e, t), t.tag = 1, de(r) ? (e = !0, Br(t)) : e = !1, Yt(t, n), La(t, r, l), Nu(t, r, l, n), Lu(null, t, r, !0, e, n);
    case 19:
      return Fa(e, t, n);
    case 22:
      return ja(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ba(e, t) {
  return Ns(e, t);
}
function xd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xe(e, t, n, r) {
  return new xd(e, t, n, r);
}
function Ti(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function _d(e) {
  if (typeof e == "function") return Ti(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Yu) return 11;
    if (e === Zu) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return n === null ? (n = xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Rr(e, t, n, r, l, u) {
  var i = 2;
  if (r = e, typeof e == "function") Ti(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Mt:
      return _t(n.children, l, u, t);
    case Xu:
      i = 8, l |= 8;
      break;
    case Zl:
      return e = xe(12, n, t, l | 2), e.elementType = Zl, e.lanes = u, e;
    case Jl:
      return e = xe(13, n, t, l), e.elementType = Jl, e.lanes = u, e;
    case ql:
      return e = xe(19, n, t, l), e.elementType = ql, e.lanes = u, e;
    case as:
      return dl(n, l, u, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case os:
          i = 10;
          break e;
        case ss:
          i = 9;
          break e;
        case Yu:
          i = 11;
          break e;
        case Zu:
          i = 14;
          break e;
        case Je:
          i = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return t = xe(i, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
}
function _t(e, t, n, r) {
  return e = xe(7, e, r, t), e.lanes = n, e;
}
function dl(e, t, n, r) {
  return e = xe(22, e, r, t), e.elementType = as, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Kl(e, t, n) {
  return e = xe(6, e, null, t), e.lanes = n, e;
}
function Gl(e, t, n) {
  return t = xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Cd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ri(e, t, n, r, l, u, i, o, s) {
  return e = new Cd(e, t, n, o, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = xe(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, mi(u), e;
}
function Nd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ec(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (Rt(e) !== e || e.tag !== 1) throw Error(y(170));
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
    if (de(n)) return ea(e, n, t);
  }
  return t;
}
function tc(e, t, n, r, l, u, i, o, s) {
  return e = Ri(n, r, !0, e, l, u, i, o, s), e.context = ec(null), n = e.current, r = ie(), l = at(n), u = We(r, l), u.callback = t ?? null, ot(n, u, l), e.current.lanes = l, Zn(e, l, r), pe(e, r), e;
}
function pl(e, t, n, r) {
  var l = t.current, u = ie(), i = at(l);
  return n = ec(n), t.context === null ? t.context = n : t.pendingContext = n, t = We(u, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ot(l, t, i), e !== null && (je(e, l, i, u), Cr(e, l, i)), i;
}
function tl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qo(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ii(e, t) {
  Qo(e, t), (e = e.alternate) && Qo(e, t);
}
function Pd() {
  return null;
}
var nc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ji(e) {
  this._internalRoot = e;
}
ml.prototype.render = ji.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  pl(e, t, null, null);
};
ml.prototype.unmount = ji.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lt(function() {
      pl(null, e, null, null);
    }), t[Ke] = null;
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = js();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++) ;
    be.splice(n, 0, e), n === 0 && Os(e);
  }
};
function Mi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function hl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ko() {
}
function zd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var c = tl(i);
        u.call(c);
      };
    }
    var i = tc(t, r, e, 0, null, !1, !1, "", Ko);
    return e._reactRootContainer = i, e[Ke] = i.current, Vn(e.nodeType === 8 ? e.parentNode : e), Lt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = tl(s);
      o.call(c);
    };
  }
  var s = Ri(e, 0, !1, null, null, !1, !1, "", Ko);
  return e._reactRootContainer = s, e[Ke] = s.current, Vn(e.nodeType === 8 ? e.parentNode : e), Lt(function() {
    pl(t, s, n, r);
  }), s;
}
function vl(e, t, n, r, l) {
  var u = n._reactRootContainer;
  if (u) {
    var i = u;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var s = tl(i);
        o.call(s);
      };
    }
    pl(t, i, e, l);
  } else i = zd(n, t, e, l, r);
  return tl(i);
}
Rs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes);
        n !== 0 && (bu(t, n | 1), pe(t, Q()), !(I & 6) && (ln = Q() + 500, ht()));
      }
      break;
    case 13:
      Lt(function() {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ie();
          je(r, e, 1, l);
        }
      }), Ii(e, 1);
  }
};
ei = function(e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = ie();
      je(t, e, 134217728, n);
    }
    Ii(e, 134217728);
  }
};
Is = function(e) {
  if (e.tag === 13) {
    var t = at(e), n = Ge(e, t);
    if (n !== null) {
      var r = ie();
      je(n, e, t, r);
    }
    Ii(e, t);
  }
};
js = function() {
  return j;
};
Ms = function(e, t) {
  var n = j;
  try {
    return j = e, t();
  } finally {
    j = n;
  }
};
su = function(e, t, n) {
  switch (t) {
    case "input":
      if (tu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(y(90));
            fs(r), tu(r, l);
          }
        }
      }
      break;
    case "textarea":
      ps(e, n);
      break;
    case "select":
      t = n.value, t != null && Qt(e, !!n.multiple, t, !1);
  }
};
ks = Pi;
Ss = Lt;
var Ld = { usingClientEntryPoint: !1, Events: [qn, Ut, il, gs, ws, Pi] }, gn = { findFiberByHostInstance: kt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Td = { bundleType: gn.bundleType, version: gn.version, rendererPackageName: gn.rendererPackageName, rendererConfig: gn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = _s(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: gn.findFiberByHostInstance || Pd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber) try {
    nl = wr.inject(Td), Ue = wr;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mi(t)) throw Error(y(200));
  return Nd(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Mi(e)) throw Error(y(299));
  var n = !1, r = "", l = nc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ri(e, 1, !1, null, null, n, !1, r, l), e[Ke] = t.current, Vn(e.nodeType === 8 ? e.parentNode : e), new ji(t);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = _s(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Lt(e);
};
we.hydrate = function(e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return vl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Mi(e)) throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, u = "", i = nc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = tc(t, null, e, 1, n ?? null, l, !1, u, i), e[Ke] = t.current, Vn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new ml(t);
};
we.render = function(e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return vl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!hl(e)) throw Error(y(40));
  return e._reactRootContainer ? (Lt(function() {
    vl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ke] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Pi;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!hl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return vl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function rc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc);
    } catch (e) {
      console.error(e);
    }
}
rc(), rs.exports = we;
var Rd = rs.exports, lc, Go = Rd;
lc = Go.createRoot, Go.hydrateRoot;
var uc = { exports: {} }, yl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Id = he, jd = Symbol.for("react.element"), Md = Symbol.for("react.fragment"), Od = Object.prototype.hasOwnProperty, Dd = Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r, l = {}, u = null, i = null;
  n !== void 0 && (u = "" + n), t.key !== void 0 && (u = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Od.call(t, r) && !Fd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: jd, type: e, key: u, ref: i, props: l, _owner: Dd.current };
}
yl.Fragment = Md;
yl.jsx = ic;
yl.jsxs = ic;
uc.exports = yl;
var L = uc.exports;
const Ud = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  lastUpdated: Date.now(),
  viewMode: "list"
};
function Ad(e, t) {
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
window.api = Jt;
const Vd = async () => {
  const e = await Jt.fetchApi("/meld-nexus/list");
  if (!e.ok)
    throw new Error(`Failed to fetch images: ${e.statusText}`);
  return await e.json();
}, $d = async (e, t = !0) => {
  const n = await Jt.fetchApi("/meld-nexus/bulk-delete", {
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
}, Bd = async (e) => {
  if (!(await Jt.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  })).ok)
    throw new Error("Failed to register image");
}, oc = he.createContext(void 0), Hd = ({ children: e }) => {
  const [t, n] = he.useReducer(Ad, Ud), r = he.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const u = await Vd();
      n({ type: "SET_IMAGES", payload: u });
    } catch (u) {
      n({ type: "SET_ERROR", payload: u.message });
    }
  }, []), l = he.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const u = Array.from(t.selectedIds), i = `Are you sure you want to delete the selected ${u.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(i)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await $d(u, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (o) {
        n({ type: "SET_ERROR", payload: o.message });
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
  }, [r]), /* @__PURE__ */ L.jsx(oc.Provider, { value: { state: t, dispatch: n, refreshImages: r, deleteSelected: l }, children: e });
}, Oi = () => {
  const e = he.useContext(oc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Wd = ({ image: e }) => {
  const { state: t, dispatch: n } = Oi(), r = t.selectedIds.has(e.id), l = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, u = `/view?filename=${encodeURIComponent(l)}&type=${e.type || "output"}`, i = (s) => {
    s.ctrlKey || s.metaKey || t.selectedIds.size > 0 ? (s.preventDefault(), s.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : window.open(u, "_blank");
  }, o = (s) => {
    n({ type: "TOGGLE_SELECT", payload: e.id });
  };
  return /* @__PURE__ */ L.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: o,
      children: [
        /* @__PURE__ */ L.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ L.jsx(
          "img",
          {
            src: u,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onClick: (s) => {
              s.stopPropagation(), i(s);
            }
          }
        ) }),
        /* @__PURE__ */ L.jsxs("div", { className: "meld-image-card__details", children: [
          /* @__PURE__ */ L.jsx("div", { className: "meld-image-card__filename", children: l }),
          /* @__PURE__ */ L.jsx("div", { className: "meld-image-card__meta-label", children: "Positive" }),
          /* @__PURE__ */ L.jsx("div", { className: "meld-image-card__meta-content", children: e.positive || "-" }),
          /* @__PURE__ */ L.jsx("div", { className: "meld-image-card__meta-label", children: "Negative" }),
          /* @__PURE__ */ L.jsx("div", { className: "meld-image-card__meta-content", style: { maxHeight: "40px" }, children: e.negative || "-" }),
          /* @__PURE__ */ L.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
          /* @__PURE__ */ L.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((s, c) => /* @__PURE__ */ L.jsx("span", { className: "meld-image-card__tag", children: s }, c)) : /* @__PURE__ */ L.jsx("span", { style: { color: "#666" }, children: "-" }) })
        ] })
      ]
    }
  );
};
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
const Kd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), er = (e, t) => {
  const n = he.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: i,
      className: o = "",
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
        strokeWidth: i ? Number(u) * 24 / Number(l) : u,
        className: ["lucide", `lucide-${Kd(e)}`, o].join(" "),
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
const Gd = er("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xd = er("RefreshCw", [
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
const Yd = er("Trash2", [
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
const Zd = er("XSquare", [
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
const Jd = er("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), qd = () => {
  const { state: e, dispatch: t, deleteSelected: n } = Oi(), r = e.selectedIds.size;
  return r === 0 ? null : /* @__PURE__ */ L.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ L.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ L.jsxs(
      "button",
      {
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ L.jsx(Yd, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ L.jsxs(
      "button",
      {
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ L.jsx(Jd, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, bd = () => {
  const { state: e, dispatch: t, refreshImages: n } = Oi(), r = () => {
    e.selectedIds.size > 0 ? t({ type: "CLEAR_SELECTION" }) : t({ type: "SELECT_ALL" });
  };
  return /* @__PURE__ */ L.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ L.jsxs("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "10px", gap: "15px" }, children: [
      /* @__PURE__ */ L.jsx(
        "button",
        {
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
          children: e.selectedIds.size > 0 ? /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
            /* @__PURE__ */ L.jsx(Zd, { size: 14 }),
            "Deselect"
          ] }) : /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
            /* @__PURE__ */ L.jsx(Gd, { size: 14 }),
            "Select All"
          ] })
        }
      ),
      /* @__PURE__ */ L.jsxs(
        "button",
        {
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
            /* @__PURE__ */ L.jsx(Xd, { size: 14, className: e.isLoading ? "animate-spin" : "" }),
            "Refresh"
          ]
        }
      )
    ] }),
    e.error && /* @__PURE__ */ L.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && e.images.length === 0 ? /* @__PURE__ */ L.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : e.images.length === 0 ? /* @__PURE__ */ L.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ L.jsx("div", { className: "meld-gallery__list", children: e.images.map((l) => /* @__PURE__ */ L.jsx(Wd, { image: l }, l.id)) }),
    /* @__PURE__ */ L.jsx(qd, {})
  ] });
}, gl = document.createElement("link");
gl.rel = "stylesheet";
gl.type = "text/css";
gl.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(gl);
let Xl = null;
ac.registerExtension({
  name: "ComfyUI.MeldNexus",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldNexus") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(l) {
        var u;
        r == null || r.apply(this, arguments), (u = n.ui.meldNexus) != null && u.isVisible() && n.ui.meldNexus.refresh();
      };
    }
  },
  async setup(e) {
    var t;
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
      }, Jt.addEventListener("meld-nexus-image-saved", () => {
        e.ui.meldNexus.refresh();
      }), Jt.addEventListener("executed", async ({ detail: n }) => {
        var r;
        if ((r = n == null ? void 0 : n.output) != null && r.images) {
          for (const l of n.output.images)
            if (l.type === "output")
              try {
                await Bd({
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
            if (!Xl) {
              const r = document.createElement("div");
              r.id = "meld-flow-gallery-container", r.style.height = "100%", r.style.width = "100%", r.style.display = "flex", r.style.flexDirection = "column", n.appendChild(r), Xl = lc(r), Xl.render(
                Vi.createElement(
                  Hd,
                  null,
                  Vi.createElement(bd)
                )
              );
            }
          }
        });
      } catch (n) {
        console.error("Error during sidebar registration:", n);
      }
    }
  }
});
