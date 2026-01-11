import { api as ee } from "../../../scripts/api.js";
import { app as Sc } from "../../../scripts/app.js";
function kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var eu = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er = Symbol.for("react.element"), xc = Symbol.for("react.portal"), Ec = Symbol.for("react.fragment"), _c = Symbol.for("react.strict_mode"), Cc = Symbol.for("react.profiler"), Nc = Symbol.for("react.provider"), jc = Symbol.for("react.context"), Pc = Symbol.for("react.forward_ref"), Ic = Symbol.for("react.suspense"), Lc = Symbol.for("react.memo"), Tc = Symbol.for("react.lazy"), Bo = Symbol.iterator;
function Mc(e) {
  return e === null || typeof e != "object" ? null : (e = Bo && e[Bo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var tu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, nu = Object.assign, ru = {};
function cn(e, t, n) {
  this.props = e, this.context = t, this.refs = ru, this.updater = n || tu;
}
cn.prototype.isReactComponent = {};
cn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
cn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lu() {
}
lu.prototype = cn.prototype;
function Gi(e, t, n) {
  this.props = e, this.context = t, this.refs = ru, this.updater = n || tu;
}
var Ki = Gi.prototype = new lu();
Ki.constructor = Gi;
nu(Ki, cn.prototype);
Ki.isPureReactComponent = !0;
var Wo = Array.isArray, iu = Object.prototype.hasOwnProperty, Xi = { current: null }, ou = { key: !0, ref: !0, __self: !0, __source: !0 };
function su(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) iu.call(t, r) && !ou.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), f = 0; f < s; f++) a[f] = arguments[f + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
  return { $$typeof: er, type: e, key: i, ref: o, props: l, _owner: Xi.current };
}
function zc(e, t) {
  return { $$typeof: er, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === er;
}
function Rc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ho = /\/+/g;
function Pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Rc("" + e.key) : t.toString(36);
}
function Cr(e, t, n, r, l) {
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
        case er:
        case xc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Pl(o, 0) : r, Wo(l) ? (n = "", e != null && (n = e.replace(Ho, "$&/") + "/"), Cr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (Yi(l) && (l = zc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ho, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Wo(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var a = r + Pl(i, s);
    o += Cr(i, t, n, a, l);
  }
  else if (a = Mc(e), typeof a == "function") for (e = a.call(e), s = 0; !(i = e.next()).done; ) i = i.value, a = r + Pl(i, s++), o += Cr(i, t, n, a, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function sr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Cr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Oc(e) {
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
var ce = { current: null }, Nr = { transition: null }, Dc = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Nr, ReactCurrentOwner: Xi };
function uu() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: sr, forEach: function(e, t, n) {
  sr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return sr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return sr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Yi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = cn;
M.Fragment = Ec;
M.Profiler = Cc;
M.PureComponent = Gi;
M.StrictMode = _c;
M.Suspense = Ic;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dc;
M.act = uu;
M.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = nu({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Xi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) iu.call(t, a) && !ou.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var f = 0; f < a; f++) s[f] = arguments[f + 2];
    r.children = s;
  }
  return { $$typeof: er, type: e.type, key: l, ref: i, props: r, _owner: o };
};
M.createContext = function(e) {
  return e = { $$typeof: jc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Nc, _context: e }, e.Consumer = e;
};
M.createElement = su;
M.createFactory = function(e) {
  var t = su.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: Pc, render: e };
};
M.isValidElement = Yi;
M.lazy = function(e) {
  return { $$typeof: Tc, _payload: { _status: -1, _result: e }, _init: Oc };
};
M.memo = function(e, t) {
  return { $$typeof: Lc, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = t;
  }
};
M.unstable_act = uu;
M.useCallback = function(e, t) {
  return ce.current.useCallback(e, t);
};
M.useContext = function(e) {
  return ce.current.useContext(e);
};
M.useDebugValue = function() {
};
M.useDeferredValue = function(e) {
  return ce.current.useDeferredValue(e);
};
M.useEffect = function(e, t) {
  return ce.current.useEffect(e, t);
};
M.useId = function() {
  return ce.current.useId();
};
M.useImperativeHandle = function(e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function(e, t) {
  return ce.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function(e, t) {
  return ce.current.useLayoutEffect(e, t);
};
M.useMemo = function(e, t) {
  return ce.current.useMemo(e, t);
};
M.useReducer = function(e, t, n) {
  return ce.current.useReducer(e, t, n);
};
M.useRef = function(e) {
  return ce.current.useRef(e);
};
M.useState = function(e) {
  return ce.current.useState(e);
};
M.useSyncExternalStore = function(e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function() {
  return ce.current.useTransition();
};
M.version = "18.3.1";
eu.exports = M;
var L = eu.exports;
const Qo = /* @__PURE__ */ kc(L);
var au = { exports: {} }, ke = {}, cu = { exports: {} }, du = {};
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
  function t(_, P) {
    var T = _.length;
    _.push(P);
    e: for (; 0 < T; ) {
      var Q = T - 1 >>> 1, Z = _[Q];
      if (0 < l(Z, P)) _[Q] = P, _[T] = Z, T = Q;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var P = _[0], T = _.pop();
    if (T !== P) {
      _[0] = T;
      e: for (var Q = 0, Z = _.length, ir = Z >>> 1; Q < ir; ) {
        var St = 2 * (Q + 1) - 1, jl = _[St], kt = St + 1, or = _[kt];
        if (0 > l(jl, T)) kt < Z && 0 > l(or, jl) ? (_[Q] = or, _[kt] = T, Q = kt) : (_[Q] = jl, _[St] = T, Q = St);
        else if (kt < Z && 0 > l(or, T)) _[Q] = or, _[kt] = T, Q = kt;
        else break e;
      }
    }
    return P;
  }
  function l(_, P) {
    var T = _.sortIndex - P.sortIndex;
    return T !== 0 ? T : _.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, s = o.now();
    e.unstable_now = function() {
      return o.now() - s;
    };
  }
  var a = [], f = [], v = 1, m = null, h = 3, S = !1, k = !1, y = !1, I = typeof setTimeout == "function" ? setTimeout : null, u = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var P = n(f); P !== null; ) {
      if (P.callback === null) r(f);
      else if (P.startTime <= _) r(f), P.sortIndex = P.expirationTime, t(a, P);
      else break;
      P = n(f);
    }
  }
  function g(_) {
    if (y = !1, p(_), !k) if (n(a) !== null) k = !0, Cl(E);
    else {
      var P = n(f);
      P !== null && Nl(g, P.startTime - _);
    }
  }
  function E(_, P) {
    k = !1, y && (y = !1, u(j), j = -1), S = !0;
    var T = h;
    try {
      for (p(P), m = n(a); m !== null && (!(m.expirationTime > P) || _ && !Ie()); ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          m.callback = null, h = m.priorityLevel;
          var Z = Q(m.expirationTime <= P);
          P = e.unstable_now(), typeof Z == "function" ? m.callback = Z : m === n(a) && r(a), p(P);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var ir = !0;
      else {
        var St = n(f);
        St !== null && Nl(g, St.startTime - P), ir = !1;
      }
      return ir;
    } finally {
      m = null, h = T, S = !1;
    }
  }
  var C = !1, N = null, j = -1, H = 5, z = -1;
  function Ie() {
    return !(e.unstable_now() - z < H);
  }
  function mn() {
    if (N !== null) {
      var _ = e.unstable_now();
      z = _;
      var P = !0;
      try {
        P = N(!0, _);
      } finally {
        P ? hn() : (C = !1, N = null);
      }
    } else C = !1;
  }
  var hn;
  if (typeof c == "function") hn = function() {
    c(mn);
  };
  else if (typeof MessageChannel < "u") {
    var Vo = new MessageChannel(), wc = Vo.port2;
    Vo.port1.onmessage = mn, hn = function() {
      wc.postMessage(null);
    };
  } else hn = function() {
    I(mn, 0);
  };
  function Cl(_) {
    N = _, C || (C = !0, hn());
  }
  function Nl(_, P) {
    j = I(function() {
      _(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    k || S || (k = !0, Cl(E));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(_) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = h;
    }
    var T = h;
    h = P;
    try {
      return _();
    } finally {
      h = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, P) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var T = h;
    h = _;
    try {
      return P();
    } finally {
      h = T;
    }
  }, e.unstable_scheduleCallback = function(_, P, T) {
    var Q = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? Q + T : Q) : T = Q, _) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = T + Z, _ = { id: v++, callback: P, priorityLevel: _, startTime: T, expirationTime: Z, sortIndex: -1 }, T > Q ? (_.sortIndex = T, t(f, _), n(a) === null && _ === n(f) && (y ? (u(j), j = -1) : y = !0, Nl(g, T - Q))) : (_.sortIndex = Z, t(a, _), k || S || (k = !0, Cl(E))), _;
  }, e.unstable_shouldYield = Ie, e.unstable_wrapCallback = function(_) {
    var P = h;
    return function() {
      var T = h;
      h = P;
      try {
        return _.apply(this, arguments);
      } finally {
        h = T;
      }
    };
  };
})(du);
cu.exports = du;
var Fc = cu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ac = L, Se = Fc;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fu = /* @__PURE__ */ new Set(), Fn = {};
function Rt(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) fu.add(t[e]);
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ei = Object.prototype.hasOwnProperty, Uc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Go = {}, Ko = {};
function $c(e) {
  return ei.call(Ko, e) ? !0 : ei.call(Go, e) ? !1 : Uc.test(e) ? Ko[e] = !0 : (Go[e] = !0, !1);
}
function Vc(e, t, n, r) {
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
function Bc(e, t, n, r) {
  if (t === null || typeof t > "u" || Vc(e, t, n, r)) return !0;
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
function de(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ne[e] = new de(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ne[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ne[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ne[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ne[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ne[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ne[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ne[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ne[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zi = /[\-:]([a-z])/g;
function Ji(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Zi,
    Ji
  );
  ne[t] = new de(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Zi, Ji);
  ne[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Zi, Ji);
  ne[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qi(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bc(t, n, l, r) && (n = null), r || l === null ? $c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var be = Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ur = Symbol.for("react.element"), At = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), bi = Symbol.for("react.strict_mode"), ti = Symbol.for("react.profiler"), pu = Symbol.for("react.provider"), mu = Symbol.for("react.context"), eo = Symbol.for("react.forward_ref"), ni = Symbol.for("react.suspense"), ri = Symbol.for("react.suspense_list"), to = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), hu = Symbol.for("react.offscreen"), Xo = Symbol.iterator;
function vn(e) {
  return e === null || typeof e != "object" ? null : (e = Xo && e[Xo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, Il;
function _n(e) {
  if (Il === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Il = t && t[1] || "";
  }
  return `
` + Il + e;
}
var Ll = !1;
function Tl(e, t) {
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
`), o = l.length - 1, s = i.length - 1; 1 <= o && 0 <= s && l[o] !== i[s]; ) s--;
      for (; 1 <= o && 0 <= s; o--, s--) if (l[o] !== i[s]) {
        if (o !== 1 || s !== 1)
          do
            if (o--, s--, 0 > s || l[o] !== i[s]) {
              var a = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    Ll = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? _n(e) : "";
}
function Wc(e) {
  switch (e.tag) {
    case 5:
      return _n(e.type);
    case 16:
      return _n("Lazy");
    case 13:
      return _n("Suspense");
    case 19:
      return _n("SuspenseList");
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
function li(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case At:
      return "Portal";
    case ti:
      return "Profiler";
    case bi:
      return "StrictMode";
    case ni:
      return "Suspense";
    case ri:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case mu:
      return (e.displayName || "Context") + ".Consumer";
    case pu:
      return (e._context.displayName || "Context") + ".Provider";
    case eo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case to:
      return t = e.displayName || null, t !== null ? t : li(e.type) || "Memo";
    case tt:
      t = e._payload, e = e._init;
      try {
        return li(e(t));
      } catch {
      }
  }
  return null;
}
function Hc(e) {
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
      return li(t);
    case 8:
      return t === bi ? "StrictMode" : "Mode";
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
function ht(e) {
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
function vu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Qc(e) {
  var t = vu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ar(e) {
  e._valueTracker || (e._valueTracker = Qc(e));
}
function yu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = vu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ii(e, t) {
  var n = t.checked;
  return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Yo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function gu(e, t) {
  t = t.checked, t != null && qi(e, "checked", t, !1);
}
function oi(e, t) {
  gu(e, t);
  var n = ht(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? si(e, t.type, n) : t.hasOwnProperty("defaultValue") && si(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Zo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function si(e, t, n) {
  (t !== "number" || Fr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Cn = Array.isArray;
function Zt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Jo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (Cn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ht(n) };
}
function wu(e, t) {
  var n = ht(t.value), r = ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function qo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Su(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ai(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Su(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var cr, ku = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (cr = cr || document.createElement("div"), cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = cr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function An(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pn = {
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
}, Gc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pn).forEach(function(e) {
  Gc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Pn[t] = Pn[e];
  });
});
function xu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pn.hasOwnProperty(e) && Pn[e] ? ("" + t).trim() : t + "px";
}
function Eu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = xu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Kc = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ci(e, t) {
  if (t) {
    if (Kc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function di(e, t) {
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
function no(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var pi = null, Jt = null, qt = null;
function bo(e) {
  if (e = rr(e)) {
    if (typeof pi != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = fl(t), pi(e.stateNode, e.type, t));
  }
}
function _u(e) {
  Jt ? qt ? qt.push(e) : qt = [e] : Jt = e;
}
function Cu() {
  if (Jt) {
    var e = Jt, t = qt;
    if (qt = Jt = null, bo(e), t) for (e = 0; e < t.length; e++) bo(t[e]);
  }
}
function Nu(e, t) {
  return e(t);
}
function ju() {
}
var Ml = !1;
function Pu(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return Nu(e, t, n);
  } finally {
    Ml = !1, (Jt !== null || qt !== null) && (ju(), Cu());
  }
}
function Un(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fl(n);
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
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var mi = !1;
if (Ye) try {
  var yn = {};
  Object.defineProperty(yn, "passive", { get: function() {
    mi = !0;
  } }), window.addEventListener("test", yn, yn), window.removeEventListener("test", yn, yn);
} catch {
  mi = !1;
}
function Xc(e, t, n, r, l, i, o, s, a) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (v) {
    this.onError(v);
  }
}
var In = !1, Ar = null, Ur = !1, hi = null, Yc = { onError: function(e) {
  In = !0, Ar = e;
} };
function Zc(e, t, n, r, l, i, o, s, a) {
  In = !1, Ar = null, Xc.apply(Yc, arguments);
}
function Jc(e, t, n, r, l, i, o, s, a) {
  if (Zc.apply(this, arguments), In) {
    if (In) {
      var f = Ar;
      In = !1, Ar = null;
    } else throw Error(w(198));
    Ur || (Ur = !0, hi = f);
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
function Iu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function es(e) {
  if (Ot(e) !== e) throw Error(w(188));
}
function qc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ot(e), t === null) throw Error(w(188));
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
        if (i === n) return es(l), e;
        if (i === r) return es(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          o = !0, n = l, r = i;
          break;
        }
        if (s === r) {
          o = !0, r = l, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            o = !0, n = i, r = l;
            break;
          }
          if (s === r) {
            o = !0, r = i, n = l;
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function Lu(e) {
  return e = qc(e), e !== null ? Tu(e) : null;
}
function Tu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Tu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mu = Se.unstable_scheduleCallback, ts = Se.unstable_cancelCallback, bc = Se.unstable_shouldYield, ed = Se.unstable_requestPaint, G = Se.unstable_now, td = Se.unstable_getCurrentPriorityLevel, ro = Se.unstable_ImmediatePriority, zu = Se.unstable_UserBlockingPriority, $r = Se.unstable_NormalPriority, nd = Se.unstable_LowPriority, Ru = Se.unstable_IdlePriority, ul = null, Be = null;
function rd(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function") try {
    Be.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var De = Math.clz32 ? Math.clz32 : od, ld = Math.log, id = Math.LN2;
function od(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ld(e) / id | 0) | 0;
}
var dr = 64, fr = 4194304;
function Nn(e) {
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
function Vr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? r = Nn(s) : (i &= o, i !== 0 && (r = Nn(i)));
  } else o = n & ~l, o !== 0 ? r = Nn(o) : i !== 0 && (r = Nn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - De(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function sd(e, t) {
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
function ud(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - De(i), s = 1 << o, a = l[o];
    a === -1 ? (!(s & n) || s & r) && (l[o] = sd(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function vi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ou() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - De(t), e[t] = n;
}
function ad(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - De(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function lo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Du(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fu, io, Au, Uu, $u, yi = !1, pr = [], st = null, ut = null, at = null, $n = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map(), rt = [], cd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ns(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      ut = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      $n.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vn.delete(t.pointerId);
  }
}
function gn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = rr(t), t !== null && io(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function dd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return st = gn(st, e, t, n, r, l), !0;
    case "dragenter":
      return ut = gn(ut, e, t, n, r, l), !0;
    case "mouseover":
      return at = gn(at, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return $n.set(i, gn($n.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Vn.set(i, gn(Vn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Vu(e) {
  var t = _t(e.target);
  if (t !== null) {
    var n = Ot(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Iu(n), t !== null) {
          e.blockedOn = t, $u(e.priority, function() {
            Au(n);
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
function jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fi = r, n.target.dispatchEvent(r), fi = null;
    } else return t = rr(n), t !== null && io(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function rs(e, t, n) {
  jr(e) && n.delete(t);
}
function fd() {
  yi = !1, st !== null && jr(st) && (st = null), ut !== null && jr(ut) && (ut = null), at !== null && jr(at) && (at = null), $n.forEach(rs), Vn.forEach(rs);
}
function wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yi || (yi = !0, Se.unstable_scheduleCallback(Se.unstable_NormalPriority, fd)));
}
function Bn(e) {
  function t(l) {
    return wn(l, e);
  }
  if (0 < pr.length) {
    wn(pr[0], e);
    for (var n = 1; n < pr.length; n++) {
      var r = pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (st !== null && wn(st, e), ut !== null && wn(ut, e), at !== null && wn(at, e), $n.forEach(t), Vn.forEach(t), n = 0; n < rt.length; n++) r = rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rt.length && (n = rt[0], n.blockedOn === null); ) Vu(n), n.blockedOn === null && rt.shift();
}
var bt = be.ReactCurrentBatchConfig, Br = !0;
function pd(e, t, n, r) {
  var l = O, i = bt.transition;
  bt.transition = null;
  try {
    O = 1, oo(e, t, n, r);
  } finally {
    O = l, bt.transition = i;
  }
}
function md(e, t, n, r) {
  var l = O, i = bt.transition;
  bt.transition = null;
  try {
    O = 4, oo(e, t, n, r);
  } finally {
    O = l, bt.transition = i;
  }
}
function oo(e, t, n, r) {
  if (Br) {
    var l = gi(e, t, n, r);
    if (l === null) Wl(e, t, r, Wr, n), ns(e, r);
    else if (dd(l, e, t, n, r)) r.stopPropagation();
    else if (ns(e, r), t & 4 && -1 < cd.indexOf(e)) {
      for (; l !== null; ) {
        var i = rr(l);
        if (i !== null && Fu(i), i = gi(e, t, n, r), i === null && Wl(e, t, r, Wr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Wl(e, t, r, null, n);
  }
}
var Wr = null;
function gi(e, t, n, r) {
  if (Wr = null, e = no(r), e = _t(e), e !== null) if (t = Ot(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Iu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Wr = e, null;
}
function Bu(e) {
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
      switch (td()) {
        case ro:
          return 1;
        case zu:
          return 4;
        case $r:
        case nd:
          return 16;
        case Ru:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null, so = null, Pr = null;
function Wu() {
  if (Pr) return Pr;
  var e, t = so, n = t.length, r, l = "value" in it ? it.value : it.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Pr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ir(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function mr() {
  return !0;
}
function ls() {
  return !1;
}
function xe(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? mr : ls, this.isPropagationStopped = ls, this;
  }
  return B(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = mr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = mr);
  }, persist: function() {
  }, isPersistent: mr }), t;
}
var dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, uo = xe(dn), nr = B({}, dn, { view: 0, detail: 0 }), hd = xe(nr), Rl, Ol, Sn, al = B({}, nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ao, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Sn && (Sn && e.type === "mousemove" ? (Rl = e.screenX - Sn.screenX, Ol = e.screenY - Sn.screenY) : Ol = Rl = 0, Sn = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ol;
} }), is = xe(al), vd = B({}, al, { dataTransfer: 0 }), yd = xe(vd), gd = B({}, nr, { relatedTarget: 0 }), Dl = xe(gd), wd = B({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sd = xe(wd), kd = B({}, dn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), xd = xe(kd), Ed = B({}, dn, { data: 0 }), os = xe(Ed), _d = {
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
}, Cd = {
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
}, Nd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function jd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Nd[e]) ? !!t[e] : !1;
}
function ao() {
  return jd;
}
var Pd = B({}, nr, { key: function(e) {
  if (e.key) {
    var t = _d[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Cd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ao, charCode: function(e) {
  return e.type === "keypress" ? Ir(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ir(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Id = xe(Pd), Ld = B({}, al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ss = xe(Ld), Td = B({}, nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ao }), Md = xe(Td), zd = B({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rd = xe(zd), Od = B({}, al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Dd = xe(Od), Fd = [9, 13, 27, 32], co = Ye && "CompositionEvent" in window, Ln = null;
Ye && "documentMode" in document && (Ln = document.documentMode);
var Ad = Ye && "TextEvent" in window && !Ln, Hu = Ye && (!co || Ln && 8 < Ln && 11 >= Ln), us = " ", as = !1;
function Qu(e, t) {
  switch (e) {
    case "keyup":
      return Fd.indexOf(t.keyCode) !== -1;
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
function Gu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var $t = !1;
function Ud(e, t) {
  switch (e) {
    case "compositionend":
      return Gu(t);
    case "keypress":
      return t.which !== 32 ? null : (as = !0, us);
    case "textInput":
      return e = t.data, e === us && as ? null : e;
    default:
      return null;
  }
}
function $d(e, t) {
  if ($t) return e === "compositionend" || !co && Qu(e, t) ? (e = Wu(), Pr = so = it = null, $t = !1, e) : null;
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
      return Hu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function cs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vd[e.type] : t === "textarea";
}
function Ku(e, t, n, r) {
  _u(r), t = Hr(t, "onChange"), 0 < t.length && (n = new uo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Tn = null, Wn = null;
function Bd(e) {
  la(e, 0);
}
function cl(e) {
  var t = Wt(e);
  if (yu(t)) return e;
}
function Wd(e, t) {
  if (e === "change") return t;
}
var Xu = !1;
if (Ye) {
  var Fl;
  if (Ye) {
    var Al = "oninput" in document;
    if (!Al) {
      var ds = document.createElement("div");
      ds.setAttribute("oninput", "return;"), Al = typeof ds.oninput == "function";
    }
    Fl = Al;
  } else Fl = !1;
  Xu = Fl && (!document.documentMode || 9 < document.documentMode);
}
function fs() {
  Tn && (Tn.detachEvent("onpropertychange", Yu), Wn = Tn = null);
}
function Yu(e) {
  if (e.propertyName === "value" && cl(Wn)) {
    var t = [];
    Ku(t, Wn, e, no(e)), Pu(Bd, t);
  }
}
function Hd(e, t, n) {
  e === "focusin" ? (fs(), Tn = t, Wn = n, Tn.attachEvent("onpropertychange", Yu)) : e === "focusout" && fs();
}
function Qd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return cl(Wn);
}
function Gd(e, t) {
  if (e === "click") return cl(t);
}
function Kd(e, t) {
  if (e === "input" || e === "change") return cl(t);
}
function Xd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ae = typeof Object.is == "function" ? Object.is : Xd;
function Hn(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ei.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function ps(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ms(e, t) {
  var n = ps(e);
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
    n = ps(n);
  }
}
function Zu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ju() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fr(e.document);
  }
  return t;
}
function fo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Yd(e) {
  var t = Ju(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zu(n.ownerDocument.documentElement, n)) {
    if (r !== null && fo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = ms(n, i);
        var o = ms(
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
var Zd = Ye && "documentMode" in document && 11 >= document.documentMode, Vt = null, wi = null, Mn = null, Si = !1;
function hs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Si || Vt == null || Vt !== Fr(r) || (r = Vt, "selectionStart" in r && fo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mn && Hn(Mn, r) || (Mn = r, r = Hr(wi, "onSelect"), 0 < r.length && (t = new uo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Vt)));
}
function hr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Bt = { animationend: hr("Animation", "AnimationEnd"), animationiteration: hr("Animation", "AnimationIteration"), animationstart: hr("Animation", "AnimationStart"), transitionend: hr("Transition", "TransitionEnd") }, Ul = {}, qu = {};
Ye && (qu = document.createElement("div").style, "AnimationEvent" in window || (delete Bt.animationend.animation, delete Bt.animationiteration.animation, delete Bt.animationstart.animation), "TransitionEvent" in window || delete Bt.transitionend.transition);
function dl(e) {
  if (Ul[e]) return Ul[e];
  if (!Bt[e]) return e;
  var t = Bt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in qu) return Ul[e] = t[n];
  return e;
}
var bu = dl("animationend"), ea = dl("animationiteration"), ta = dl("animationstart"), na = dl("transitionend"), ra = /* @__PURE__ */ new Map(), vs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yt(e, t) {
  ra.set(e, t), Rt(t, [e]);
}
for (var $l = 0; $l < vs.length; $l++) {
  var Vl = vs[$l], Jd = Vl.toLowerCase(), qd = Vl[0].toUpperCase() + Vl.slice(1);
  yt(Jd, "on" + qd);
}
yt(bu, "onAnimationEnd");
yt(ea, "onAnimationIteration");
yt(ta, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(na, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
Rt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bd = new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));
function ys(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Jc(r, t, void 0, e), e.currentTarget = null;
}
function la(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], a = s.instance, f = s.currentTarget;
        if (s = s.listener, a !== i && l.isPropagationStopped()) break e;
        ys(l, s, f), i = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], a = s.instance, f = s.currentTarget, s = s.listener, a !== i && l.isPropagationStopped()) break e;
        ys(l, s, f), i = a;
      }
    }
  }
  if (Ur) throw e = hi, Ur = !1, hi = null, e;
}
function F(e, t) {
  var n = t[Ci];
  n === void 0 && (n = t[Ci] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ia(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), ia(n, e, r, t);
}
var vr = "_reactListening" + Math.random().toString(36).slice(2);
function Qn(e) {
  if (!e[vr]) {
    e[vr] = !0, fu.forEach(function(n) {
      n !== "selectionchange" && (bd.has(n) || Bl(n, !1, e), Bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vr] || (t[vr] = !0, Bl("selectionchange", !1, t));
  }
}
function ia(e, t, n, r) {
  switch (Bu(t)) {
    case 1:
      var l = pd;
      break;
    case 4:
      l = md;
      break;
    default:
      l = oo;
  }
  n = l.bind(null, t, n, e), l = void 0, !mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Wl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var s = r.stateNode.containerInfo;
      if (s === l || s.nodeType === 8 && s.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var a = o.tag;
        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
        o = o.return;
      }
      for (; s !== null; ) {
        if (o = _t(s), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = i = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Pu(function() {
    var f = i, v = no(n), m = [];
    e: {
      var h = ra.get(e);
      if (h !== void 0) {
        var S = uo, k = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Id;
            break;
          case "focusin":
            k = "focus", S = Dl;
            break;
          case "focusout":
            k = "blur", S = Dl;
            break;
          case "beforeblur":
          case "afterblur":
            S = Dl;
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
            S = is;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = yd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Md;
            break;
          case bu:
          case ea:
          case ta:
            S = Sd;
            break;
          case na:
            S = Rd;
            break;
          case "scroll":
            S = hd;
            break;
          case "wheel":
            S = Dd;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = xd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = ss;
        }
        var y = (t & 4) !== 0, I = !y && e === "scroll", u = y ? h !== null ? h + "Capture" : null : h;
        y = [];
        for (var c = f, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (p.tag === 5 && g !== null && (p = g, u !== null && (g = Un(c, u), g != null && y.push(Gn(c, g, p)))), I) break;
          c = c.return;
        }
        0 < y.length && (h = new S(h, k, null, n, v), m.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", h && n !== fi && (k = n.relatedTarget || n.fromElement) && (_t(k) || k[Ze])) break e;
        if ((S || h) && (h = v.window === v ? v : (h = v.ownerDocument) ? h.defaultView || h.parentWindow : window, S ? (k = n.relatedTarget || n.toElement, S = f, k = k ? _t(k) : null, k !== null && (I = Ot(k), k !== I || k.tag !== 5 && k.tag !== 6) && (k = null)) : (S = null, k = f), S !== k)) {
          if (y = is, g = "onMouseLeave", u = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = ss, g = "onPointerLeave", u = "onPointerEnter", c = "pointer"), I = S == null ? h : Wt(S), p = k == null ? h : Wt(k), h = new y(g, c + "leave", S, n, v), h.target = I, h.relatedTarget = p, g = null, _t(v) === f && (y = new y(u, c + "enter", k, n, v), y.target = p, y.relatedTarget = I, g = y), I = g, S && k) t: {
            for (y = S, u = k, c = 0, p = y; p; p = Ft(p)) c++;
            for (p = 0, g = u; g; g = Ft(g)) p++;
            for (; 0 < c - p; ) y = Ft(y), c--;
            for (; 0 < p - c; ) u = Ft(u), p--;
            for (; c--; ) {
              if (y === u || u !== null && y === u.alternate) break t;
              y = Ft(y), u = Ft(u);
            }
            y = null;
          }
          else y = null;
          S !== null && gs(m, h, S, y, !1), k !== null && I !== null && gs(m, I, k, y, !0);
        }
      }
      e: {
        if (h = f ? Wt(f) : window, S = h.nodeName && h.nodeName.toLowerCase(), S === "select" || S === "input" && h.type === "file") var E = Wd;
        else if (cs(h)) if (Xu) E = Kd;
        else {
          E = Qd;
          var C = Hd;
        }
        else (S = h.nodeName) && S.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = Gd);
        if (E && (E = E(e, f))) {
          Ku(m, E, n, v);
          break e;
        }
        C && C(e, h, f), e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && si(h, "number", h.value);
      }
      switch (C = f ? Wt(f) : window, e) {
        case "focusin":
          (cs(C) || C.contentEditable === "true") && (Vt = C, wi = f, Mn = null);
          break;
        case "focusout":
          Mn = wi = Vt = null;
          break;
        case "mousedown":
          Si = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Si = !1, hs(m, n, v);
          break;
        case "selectionchange":
          if (Zd) break;
        case "keydown":
        case "keyup":
          hs(m, n, v);
      }
      var N;
      if (co) e: {
        switch (e) {
          case "compositionstart":
            var j = "onCompositionStart";
            break e;
          case "compositionend":
            j = "onCompositionEnd";
            break e;
          case "compositionupdate":
            j = "onCompositionUpdate";
            break e;
        }
        j = void 0;
      }
      else $t ? Qu(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j && (Hu && n.locale !== "ko" && ($t || j !== "onCompositionStart" ? j === "onCompositionEnd" && $t && (N = Wu()) : (it = v, so = "value" in it ? it.value : it.textContent, $t = !0)), C = Hr(f, j), 0 < C.length && (j = new os(j, e, null, n, v), m.push({ event: j, listeners: C }), N ? j.data = N : (N = Gu(n), N !== null && (j.data = N)))), (N = Ad ? Ud(e, n) : $d(e, n)) && (f = Hr(f, "onBeforeInput"), 0 < f.length && (v = new os("onBeforeInput", "beforeinput", null, n, v), m.push({ event: v, listeners: f }), v.data = N));
    }
    la(m, t);
  });
}
function Gn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Un(e, n), i != null && r.unshift(Gn(e, i, l)), i = Un(e, t), i != null && r.push(Gn(e, i, l))), e = e.return;
  }
  return r;
}
function Ft(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function gs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, f = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && f !== null && (s = f, l ? (a = Un(n, i), a != null && o.unshift(Gn(n, a, s))) : l || (a = Un(n, i), a != null && o.push(Gn(n, a, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var ef = /\r\n?/g, tf = /\u0000|\uFFFD/g;
function ws(e) {
  return (typeof e == "string" ? e : "" + e).replace(ef, `
`).replace(tf, "");
}
function yr(e, t, n) {
  if (t = ws(t), ws(e) !== t && n) throw Error(w(425));
}
function Qr() {
}
var ki = null, xi = null;
function Ei(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _i = typeof setTimeout == "function" ? setTimeout : void 0, nf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ss = typeof Promise == "function" ? Promise : void 0, rf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ss < "u" ? function(e) {
  return Ss.resolve(null).then(e).catch(lf);
} : _i;
function lf(e) {
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
        e.removeChild(l), Bn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Bn(t);
}
function ct(e) {
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
function ks(e) {
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
var fn = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + fn, Kn = "__reactProps$" + fn, Ze = "__reactContainer$" + fn, Ci = "__reactEvents$" + fn, of = "__reactListeners$" + fn, sf = "__reactHandles$" + fn;
function _t(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ze] || n[Ve]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ks(e); e !== null; ) {
        if (n = e[Ve]) return n;
        e = ks(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function rr(e) {
  return e = e[Ve] || e[Ze], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Wt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function fl(e) {
  return e[Kn] || null;
}
var Ni = [], Ht = -1;
function gt(e) {
  return { current: e };
}
function A(e) {
  0 > Ht || (e.current = Ni[Ht], Ni[Ht] = null, Ht--);
}
function D(e, t) {
  Ht++, Ni[Ht] = e.current, e.current = t;
}
var vt = {}, se = gt(vt), me = gt(!1), It = vt;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function he(e) {
  return e = e.childContextTypes, e != null;
}
function Gr() {
  A(me), A(se);
}
function xs(e, t, n) {
  if (se.current !== vt) throw Error(w(168));
  D(se, t), D(me, n);
}
function oa(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Hc(e) || "Unknown", l));
  return B({}, n, r);
}
function Kr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vt, It = se.current, D(se, e), D(me, me.current), !0;
}
function Es(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = oa(e, t, It), r.__reactInternalMemoizedMergedChildContext = e, A(me), A(se), D(se, e)) : A(me), D(me, n);
}
var Qe = null, pl = !1, Ql = !1;
function sa(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
function uf(e) {
  pl = !0, sa(e);
}
function wt() {
  if (!Ql && Qe !== null) {
    Ql = !0;
    var e = 0, t = O;
    try {
      var n = Qe;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Qe = null, pl = !1;
    } catch (l) {
      throw Qe !== null && (Qe = Qe.slice(e + 1)), Mu(ro, wt), l;
    } finally {
      O = t, Ql = !1;
    }
  }
  return null;
}
var Qt = [], Gt = 0, Xr = null, Yr = 0, Ee = [], _e = 0, Lt = null, Ge = 1, Ke = "";
function xt(e, t) {
  Qt[Gt++] = Yr, Qt[Gt++] = Xr, Xr = e, Yr = t;
}
function ua(e, t, n) {
  Ee[_e++] = Ge, Ee[_e++] = Ke, Ee[_e++] = Lt, Lt = e;
  var r = Ge;
  e = Ke;
  var l = 32 - De(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - De(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ge = 1 << 32 - De(t) + l | n << l | r, Ke = i + e;
  } else Ge = 1 << i | n << l | r, Ke = e;
}
function po(e) {
  e.return !== null && (xt(e, 1), ua(e, 1, 0));
}
function mo(e) {
  for (; e === Xr; ) Xr = Qt[--Gt], Qt[Gt] = null, Yr = Qt[--Gt], Qt[Gt] = null;
  for (; e === Lt; ) Lt = Ee[--_e], Ee[_e] = null, Ke = Ee[--_e], Ee[_e] = null, Ge = Ee[--_e], Ee[_e] = null;
}
var we = null, ge = null, U = !1, Oe = null;
function aa(e, t) {
  var n = Ce(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function _s(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, we = e, ge = ct(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, we = e, ge = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Lt !== null ? { id: Ge, overflow: Ke } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ce(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, we = e, ge = null, !0) : !1;
    default:
      return !1;
  }
}
function ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pi(e) {
  if (U) {
    var t = ge;
    if (t) {
      var n = t;
      if (!_s(e, t)) {
        if (ji(e)) throw Error(w(418));
        t = ct(n.nextSibling);
        var r = we;
        t && _s(e, t) ? aa(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, we = e);
      }
    } else {
      if (ji(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, U = !1, we = e;
    }
  }
}
function Cs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function gr(e) {
  if (e !== we) return !1;
  if (!U) return Cs(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ei(e.type, e.memoizedProps)), t && (t = ge)) {
    if (ji(e)) throw ca(), Error(w(418));
    for (; t; ) aa(e, t), t = ct(t.nextSibling);
  }
  if (Cs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = ct(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = we ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function ca() {
  for (var e = ge; e; ) e = ct(e.nextSibling);
}
function ln() {
  ge = we = null, U = !1;
}
function ho(e) {
  Oe === null ? Oe = [e] : Oe.push(e);
}
var af = be.ReactCurrentBatchConfig;
function kn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var s = l.refs;
        o === null ? delete s[i] : s[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function wr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ns(e) {
  var t = e._init;
  return t(e._payload);
}
function da(e) {
  function t(u, c) {
    if (e) {
      var p = u.deletions;
      p === null ? (u.deletions = [c], u.flags |= 16) : p.push(c);
    }
  }
  function n(u, c) {
    if (!e) return null;
    for (; c !== null; ) t(u, c), c = c.sibling;
    return null;
  }
  function r(u, c) {
    for (u = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? u.set(c.key, c) : u.set(c.index, c), c = c.sibling;
    return u;
  }
  function l(u, c) {
    return u = mt(u, c), u.index = 0, u.sibling = null, u;
  }
  function i(u, c, p) {
    return u.index = p, e ? (p = u.alternate, p !== null ? (p = p.index, p < c ? (u.flags |= 2, c) : p) : (u.flags |= 2, c)) : (u.flags |= 1048576, c);
  }
  function o(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function s(u, c, p, g) {
    return c === null || c.tag !== 6 ? (c = ql(p, u.mode, g), c.return = u, c) : (c = l(c, p), c.return = u, c);
  }
  function a(u, c, p, g) {
    var E = p.type;
    return E === Ut ? v(u, c, p.props.children, g, p.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tt && Ns(E) === c.type) ? (g = l(c, p.props), g.ref = kn(u, c, p), g.return = u, g) : (g = Dr(p.type, p.key, p.props, null, u.mode, g), g.ref = kn(u, c, p), g.return = u, g);
  }
  function f(u, c, p, g) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = bl(p, u.mode, g), c.return = u, c) : (c = l(c, p.children || []), c.return = u, c);
  }
  function v(u, c, p, g, E) {
    return c === null || c.tag !== 7 ? (c = Pt(p, u.mode, g, E), c.return = u, c) : (c = l(c, p), c.return = u, c);
  }
  function m(u, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = ql("" + c, u.mode, p), c.return = u, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ur:
          return p = Dr(c.type, c.key, c.props, null, u.mode, p), p.ref = kn(u, null, c), p.return = u, p;
        case At:
          return c = bl(c, u.mode, p), c.return = u, c;
        case tt:
          var g = c._init;
          return m(u, g(c._payload), p);
      }
      if (Cn(c) || vn(c)) return c = Pt(c, u.mode, p, null), c.return = u, c;
      wr(u, c);
    }
    return null;
  }
  function h(u, c, p, g) {
    var E = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return E !== null ? null : s(u, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ur:
          return p.key === E ? a(u, c, p, g) : null;
        case At:
          return p.key === E ? f(u, c, p, g) : null;
        case tt:
          return E = p._init, h(
            u,
            c,
            E(p._payload),
            g
          );
      }
      if (Cn(p) || vn(p)) return E !== null ? null : v(u, c, p, g, null);
      wr(u, p);
    }
    return null;
  }
  function S(u, c, p, g, E) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return u = u.get(p) || null, s(c, u, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ur:
          return u = u.get(g.key === null ? p : g.key) || null, a(c, u, g, E);
        case At:
          return u = u.get(g.key === null ? p : g.key) || null, f(c, u, g, E);
        case tt:
          var C = g._init;
          return S(u, c, p, C(g._payload), E);
      }
      if (Cn(g) || vn(g)) return u = u.get(p) || null, v(c, u, g, E, null);
      wr(c, g);
    }
    return null;
  }
  function k(u, c, p, g) {
    for (var E = null, C = null, N = c, j = c = 0, H = null; N !== null && j < p.length; j++) {
      N.index > j ? (H = N, N = null) : H = N.sibling;
      var z = h(u, N, p[j], g);
      if (z === null) {
        N === null && (N = H);
        break;
      }
      e && N && z.alternate === null && t(u, N), c = i(z, c, j), C === null ? E = z : C.sibling = z, C = z, N = H;
    }
    if (j === p.length) return n(u, N), U && xt(u, j), E;
    if (N === null) {
      for (; j < p.length; j++) N = m(u, p[j], g), N !== null && (c = i(N, c, j), C === null ? E = N : C.sibling = N, C = N);
      return U && xt(u, j), E;
    }
    for (N = r(u, N); j < p.length; j++) H = S(N, u, j, p[j], g), H !== null && (e && H.alternate !== null && N.delete(H.key === null ? j : H.key), c = i(H, c, j), C === null ? E = H : C.sibling = H, C = H);
    return e && N.forEach(function(Ie) {
      return t(u, Ie);
    }), U && xt(u, j), E;
  }
  function y(u, c, p, g) {
    var E = vn(p);
    if (typeof E != "function") throw Error(w(150));
    if (p = E.call(p), p == null) throw Error(w(151));
    for (var C = E = null, N = c, j = c = 0, H = null, z = p.next(); N !== null && !z.done; j++, z = p.next()) {
      N.index > j ? (H = N, N = null) : H = N.sibling;
      var Ie = h(u, N, z.value, g);
      if (Ie === null) {
        N === null && (N = H);
        break;
      }
      e && N && Ie.alternate === null && t(u, N), c = i(Ie, c, j), C === null ? E = Ie : C.sibling = Ie, C = Ie, N = H;
    }
    if (z.done) return n(
      u,
      N
    ), U && xt(u, j), E;
    if (N === null) {
      for (; !z.done; j++, z = p.next()) z = m(u, z.value, g), z !== null && (c = i(z, c, j), C === null ? E = z : C.sibling = z, C = z);
      return U && xt(u, j), E;
    }
    for (N = r(u, N); !z.done; j++, z = p.next()) z = S(N, u, j, z.value, g), z !== null && (e && z.alternate !== null && N.delete(z.key === null ? j : z.key), c = i(z, c, j), C === null ? E = z : C.sibling = z, C = z);
    return e && N.forEach(function(mn) {
      return t(u, mn);
    }), U && xt(u, j), E;
  }
  function I(u, c, p, g) {
    if (typeof p == "object" && p !== null && p.type === Ut && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ur:
          e: {
            for (var E = p.key, C = c; C !== null; ) {
              if (C.key === E) {
                if (E = p.type, E === Ut) {
                  if (C.tag === 7) {
                    n(u, C.sibling), c = l(C, p.props.children), c.return = u, u = c;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tt && Ns(E) === C.type) {
                  n(u, C.sibling), c = l(C, p.props), c.ref = kn(u, C, p), c.return = u, u = c;
                  break e;
                }
                n(u, C);
                break;
              } else t(u, C);
              C = C.sibling;
            }
            p.type === Ut ? (c = Pt(p.props.children, u.mode, g, p.key), c.return = u, u = c) : (g = Dr(p.type, p.key, p.props, null, u.mode, g), g.ref = kn(u, c, p), g.return = u, u = g);
          }
          return o(u);
        case At:
          e: {
            for (C = p.key; c !== null; ) {
              if (c.key === C) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(u, c.sibling), c = l(c, p.children || []), c.return = u, u = c;
                break e;
              } else {
                n(u, c);
                break;
              }
              else t(u, c);
              c = c.sibling;
            }
            c = bl(p, u.mode, g), c.return = u, u = c;
          }
          return o(u);
        case tt:
          return C = p._init, I(u, c, C(p._payload), g);
      }
      if (Cn(p)) return k(u, c, p, g);
      if (vn(p)) return y(u, c, p, g);
      wr(u, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(u, c.sibling), c = l(c, p), c.return = u, u = c) : (n(u, c), c = ql(p, u.mode, g), c.return = u, u = c), o(u)) : n(u, c);
  }
  return I;
}
var on = da(!0), fa = da(!1), Zr = gt(null), Jr = null, Kt = null, vo = null;
function yo() {
  vo = Kt = Jr = null;
}
function go(e) {
  var t = Zr.current;
  A(Zr), e._currentValue = t;
}
function Ii(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function en(e, t) {
  Jr = e, vo = Kt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (pe = !0), e.firstContext = null);
}
function je(e) {
  var t = e._currentValue;
  if (vo !== e) if (e = { context: e, memoizedValue: t, next: null }, Kt === null) {
    if (Jr === null) throw Error(w(308));
    Kt = e, Jr.dependencies = { lanes: 0, firstContext: e };
  } else Kt = Kt.next = e;
  return t;
}
var Ct = null;
function wo(e) {
  Ct === null ? Ct = [e] : Ct.push(e);
}
function pa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, wo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Je(e, r);
}
function Je(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function So(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ma(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Xe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Je(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, wo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Je(e, n);
}
function Lr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n);
  }
}
function js(e, t) {
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
function qr(e, t, n, r) {
  var l = e.updateQueue;
  nt = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s, f = a.next;
    a.next = null, o === null ? i = f : o.next = f, o = a;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, s = v.lastBaseUpdate, s !== o && (s === null ? v.firstBaseUpdate = f : s.next = f, v.lastBaseUpdate = a));
  }
  if (i !== null) {
    var m = l.baseState;
    o = 0, v = f = a = null, s = i;
    do {
      var h = s.lane, S = s.eventTime;
      if ((r & h) === h) {
        v !== null && (v = v.next = {
          eventTime: S,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var k = e, y = s;
          switch (h = t, S = n, y.tag) {
            case 1:
              if (k = y.payload, typeof k == "function") {
                m = k.call(S, m, h);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = y.payload, h = typeof k == "function" ? k.call(S, m, h) : k, h == null) break e;
              m = B({}, m, h);
              break e;
            case 2:
              nt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [s] : h.push(s));
      } else S = { eventTime: S, lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, v === null ? (f = v = S, a = m) : v = v.next = S, o |= h;
      if (s = s.next, s === null) {
        if (s = l.shared.pending, s === null) break;
        h = s, s = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (v === null && (a = m), l.baseState = a, l.firstBaseUpdate = f, l.lastBaseUpdate = v, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Mt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Ps(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(w(191, l));
      l.call(r);
    }
  }
}
var lr = {}, We = gt(lr), Xn = gt(lr), Yn = gt(lr);
function Nt(e) {
  if (e === lr) throw Error(w(174));
  return e;
}
function ko(e, t) {
  switch (D(Yn, t), D(Xn, e), D(We, lr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ai(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ai(t, e);
  }
  A(We), D(We, t);
}
function sn() {
  A(We), A(Xn), A(Yn);
}
function ha(e) {
  Nt(Yn.current);
  var t = Nt(We.current), n = ai(t, e.type);
  t !== n && (D(Xn, e), D(We, n));
}
function xo(e) {
  Xn.current === e && (A(We), A(Xn));
}
var $ = gt(0);
function br(e) {
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
var Gl = [];
function Eo() {
  for (var e = 0; e < Gl.length; e++) Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var Tr = be.ReactCurrentDispatcher, Kl = be.ReactCurrentBatchConfig, Tt = 0, V = null, X = null, J = null, el = !1, zn = !1, Zn = 0, cf = 0;
function le() {
  throw Error(w(321));
}
function _o(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function Co(e, t, n, r, l, i) {
  if (Tt = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Tr.current = e === null || e.memoizedState === null ? mf : hf, e = n(r, l), zn) {
    i = 0;
    do {
      if (zn = !1, Zn = 0, 25 <= i) throw Error(w(301));
      i += 1, J = X = null, t.updateQueue = null, Tr.current = vf, e = n(r, l);
    } while (zn);
  }
  if (Tr.current = tl, t = X !== null && X.next !== null, Tt = 0, J = X = V = null, el = !1, t) throw Error(w(300));
  return e;
}
function No() {
  var e = Zn !== 0;
  return Zn = 0, e;
}
function $e() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? V.memoizedState = J = e : J = J.next = e, J;
}
function Pe() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? V.memoizedState : J.next;
  if (t !== null) J = t, X = e;
  else {
    if (e === null) throw Error(w(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, J === null ? V.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function Jn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xl(e) {
  var t = Pe(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = X, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var s = o = null, a = null, f = i;
    do {
      var v = f.lane;
      if ((Tt & v) === v) a !== null && (a = a.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var m = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        a === null ? (s = a = m, o = r) : a = a.next = m, V.lanes |= v, Mt |= v;
      }
      f = f.next;
    } while (f !== null && f !== i);
    a === null ? o = r : a.next = s, Ae(r, t.memoizedState) || (pe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, V.lanes |= i, Mt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yl(e) {
  var t = Pe(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Ae(i, t.memoizedState) || (pe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function va() {
}
function ya(e, t) {
  var n = V, r = Pe(), l = t(), i = !Ae(r.memoizedState, l);
  if (i && (r.memoizedState = l, pe = !0), r = r.queue, jo(Sa.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, qn(9, wa.bind(null, n, r, l, t), void 0, null), q === null) throw Error(w(349));
    Tt & 30 || ga(n, t, l);
  }
  return l;
}
function ga(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function wa(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ka(t) && xa(e);
}
function Sa(e, t, n) {
  return n(function() {
    ka(t) && xa(e);
  });
}
function ka(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function xa(e) {
  var t = Je(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Is(e) {
  var t = $e();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = pf.bind(null, V, e), [t.memoizedState, e];
}
function qn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ea() {
  return Pe().memoizedState;
}
function Mr(e, t, n, r) {
  var l = $e();
  V.flags |= e, l.memoizedState = qn(1 | t, n, void 0, r === void 0 ? null : r);
}
function ml(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (i = o.destroy, r !== null && _o(r, o.deps)) {
      l.memoizedState = qn(t, n, i, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = qn(1 | t, n, i, r);
}
function Ls(e, t) {
  return Mr(8390656, 8, e, t);
}
function jo(e, t) {
  return ml(2048, 8, e, t);
}
function _a(e, t) {
  return ml(4, 2, e, t);
}
function Ca(e, t) {
  return ml(4, 4, e, t);
}
function Na(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ja(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ml(4, 4, Na.bind(null, t, e), n);
}
function Po() {
}
function Pa(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ia(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function La(e, t, n) {
  return Tt & 21 ? (Ae(n, t) || (n = Ou(), V.lanes |= n, Mt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, pe = !0), e.memoizedState = n);
}
function df(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Kl.transition;
  Kl.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, Kl.transition = r;
  }
}
function Ta() {
  return Pe().memoizedState;
}
function ff(e, t, n) {
  var r = pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ma(e)) za(t, n);
  else if (n = pa(e, t, n, r), n !== null) {
    var l = ae();
    Fe(n, e, r, l), Ra(n, t, r);
  }
}
function pf(e, t, n) {
  var r = pt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ma(e)) za(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, s = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = s, Ae(s, o)) {
        var a = t.interleaved;
        a === null ? (l.next = l, wo(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = pa(e, t, l, r), n !== null && (l = ae(), Fe(n, e, r, l), Ra(n, t, r));
  }
}
function Ma(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function za(e, t) {
  zn = el = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ra(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n);
  }
}
var tl = { readContext: je, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, mf = { readContext: je, useCallback: function(e, t) {
  return $e().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: je, useEffect: Ls, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Mr(
    4194308,
    4,
    Na.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Mr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Mr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = $e();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = $e();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ff.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = $e();
  return e = { current: e }, t.memoizedState = e;
}, useState: Is, useDebugValue: Po, useDeferredValue: function(e) {
  return $e().memoizedState = e;
}, useTransition: function() {
  var e = Is(!1), t = e[0];
  return e = df.bind(null, e[1]), $e().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = $e();
  if (U) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(w(349));
    Tt & 30 || ga(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Ls(Sa.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, qn(9, wa.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = $e(), t = q.identifierPrefix;
  if (U) {
    var n = Ke, r = Ge;
    n = (r & ~(1 << 32 - De(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = cf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, hf = {
  readContext: je,
  useCallback: Pa,
  useContext: je,
  useEffect: jo,
  useImperativeHandle: ja,
  useInsertionEffect: _a,
  useLayoutEffect: Ca,
  useMemo: Ia,
  useReducer: Xl,
  useRef: Ea,
  useState: function() {
    return Xl(Jn);
  },
  useDebugValue: Po,
  useDeferredValue: function(e) {
    var t = Pe();
    return La(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Xl(Jn)[0], t = Pe().memoizedState;
    return [e, t];
  },
  useMutableSource: va,
  useSyncExternalStore: ya,
  useId: Ta,
  unstable_isNewReconciler: !1
}, vf = { readContext: je, useCallback: Pa, useContext: je, useEffect: jo, useImperativeHandle: ja, useInsertionEffect: _a, useLayoutEffect: Ca, useMemo: Ia, useReducer: Yl, useRef: Ea, useState: function() {
  return Yl(Jn);
}, useDebugValue: Po, useDeferredValue: function(e) {
  var t = Pe();
  return X === null ? t.memoizedState = e : La(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Yl(Jn)[0], t = Pe().memoizedState;
  return [e, t];
}, useMutableSource: va, useSyncExternalStore: ya, useId: Ta, unstable_isNewReconciler: !1 };
function Me(e, t) {
  if (e && e.defaultProps) {
    t = B({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Li(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ot(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = pt(e), i = Xe(r, l);
  i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (Fe(t, e, l, r), Lr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = pt(e), i = Xe(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (Fe(t, e, l, r), Lr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ae(), r = pt(e), l = Xe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = dt(e, l, r), t !== null && (Fe(t, e, r, n), Lr(t, e, r));
} };
function Ts(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Hn(n, r) || !Hn(l, i) : !0;
}
function Oa(e, t, n) {
  var r = !1, l = vt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = je(i) : (l = he(t) ? It : se.current, r = t.contextTypes, i = (r = r != null) ? rn(e, l) : vt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ms(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Ti(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, So(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = je(i) : (i = he(t) ? It : se.current, l.context = rn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Li(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && hl.enqueueReplaceState(l, l.state, null), qr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function un(e, t) {
  try {
    var n = "", r = t;
    do
      n += Wc(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Zl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Mi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var yf = typeof WeakMap == "function" ? WeakMap : Map;
function Da(e, t, n) {
  n = Xe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    rl || (rl = !0, Bi = r), Mi(e, t);
  }, n;
}
function Fa(e, t, n) {
  n = Xe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Mi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Mi(e, t), typeof r != "function" && (ft === null ? ft = /* @__PURE__ */ new Set([this]) : ft.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function zs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Tf.bind(null, e, t, n), t.then(e, e));
}
function Rs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Os(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xe(-1, 1), t.tag = 2, dt(n, t, 1))), n.lanes |= 1), e);
}
var gf = be.ReactCurrentOwner, pe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? fa(t, null, n, r) : on(t, e.child, n, r);
}
function Ds(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return en(t, l), r = Co(e, t, n, r, i, l), n = No(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (U && n && po(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function Fs(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Do(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Aa(e, t, i, r, l)) : (e = Dr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Hn, n(o, r) && e.ref === t.ref) return qe(e, t, l);
  }
  return t.flags |= 1, e = mt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Aa(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Hn(i, r) && e.ref === t.ref) if (pe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (pe = !0);
    else return t.lanes = e.lanes, qe(e, t, l);
  }
  return zi(e, t, n, r, l);
}
function Ua(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, D(Yt, ye), ye |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, D(Yt, ye), ye |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, D(Yt, ye), ye |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, D(Yt, ye), ye |= r;
  return ue(e, t, l, n), t.child;
}
function $a(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function zi(e, t, n, r, l) {
  var i = he(n) ? It : se.current;
  return i = rn(t, i), en(t, l), n = Co(e, t, n, r, i, l), r = No(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (U && r && po(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function As(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    Kr(t);
  } else i = !1;
  if (en(t, l), t.stateNode === null) zr(e, t), Oa(t, n, r), Ti(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var a = o.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = je(f) : (f = he(n) ? It : se.current, f = rn(t, f));
    var v = n.getDerivedStateFromProps, m = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || a !== f) && Ms(t, o, r, f), nt = !1;
    var h = t.memoizedState;
    o.state = h, qr(t, r, o, l), a = t.memoizedState, s !== r || h !== a || me.current || nt ? (typeof v == "function" && (Li(t, n, v, r), a = t.memoizedState), (s = nt || Ts(t, n, s, r, h, a, f)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = f, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, ma(e, t), s = t.memoizedProps, f = t.type === t.elementType ? s : Me(t.type, s), o.props = f, m = t.pendingProps, h = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = je(a) : (a = he(n) ? It : se.current, a = rn(t, a));
    var S = n.getDerivedStateFromProps;
    (v = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== m || h !== a) && Ms(t, o, r, a), nt = !1, h = t.memoizedState, o.state = h, qr(t, r, o, l);
    var k = t.memoizedState;
    s !== m || h !== k || me.current || nt ? (typeof S == "function" && (Li(t, n, S, r), k = t.memoizedState), (f = nt || Ts(t, n, f, r, h, k, a) || !1) ? (v || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), o.props = r, o.state = k, o.context = a, r = f) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ri(e, t, n, r, i, l);
}
function Ri(e, t, n, r, l, i) {
  $a(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Es(t, n, !1), qe(e, t, i);
  r = t.stateNode, gf.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = on(t, e.child, null, i), t.child = on(t, null, s, i)) : ue(e, t, s, i), t.memoizedState = r.state, l && Es(t, n, !0), t.child;
}
function Va(e) {
  var t = e.stateNode;
  t.pendingContext ? xs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xs(e, t.context, !1), ko(e, t.containerInfo);
}
function Us(e, t, n, r, l) {
  return ln(), ho(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Di(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ba(e, t, n) {
  var r = t.pendingProps, l = $.current, i = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D($, l & 1), e === null)
    return Pi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = gl(o, r, 0, null), e = Pt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Di(n), t.memoizedState = Oi, e) : Io(t, o));
  if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return wf(e, t, o, r, s, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = mt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = mt(s, i) : (i = Pt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Di(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Oi, r;
  }
  return i = e.child, e = i.sibling, r = mt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Io(e, t) {
  return t = gl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Sr(e, t, n, r) {
  return r !== null && ho(r), on(t, e.child, null, n), e = Io(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function wf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Zl(Error(w(422))), Sr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = gl({ mode: "visible", children: r.children }, l, 0, null), i = Pt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && on(t, e.child, null, o), t.child.memoizedState = Di(o), t.memoizedState = Oi, i);
  if (!(t.mode & 1)) return Sr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(w(419)), r = Zl(i, r, void 0), Sr(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, pe || s) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Je(e, l), Fe(r, e, l, -1));
    }
    return Oo(), r = Zl(Error(w(421))), Sr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ge = ct(l.nextSibling), we = t, U = !0, Oe = null, e !== null && (Ee[_e++] = Ge, Ee[_e++] = Ke, Ee[_e++] = Lt, Ge = e.id, Ke = e.overflow, Lt = t), t = Io(t, r.children), t.flags |= 4096, t);
}
function $s(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ii(e.return, t, n);
}
function Jl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Wa(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ue(e, t, r.children, n), r = $.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && $s(e, n, t);
      else if (e.tag === 19) $s(e, n, t);
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
  if (D($, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && br(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Jl(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && br(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Jl(t, !0, n, null, i);
      break;
    case "together":
      Jl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function zr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function qe(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Mt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Sf(e, t, n) {
  switch (t.tag) {
    case 3:
      Va(t), ln();
      break;
    case 5:
      ha(t);
      break;
    case 1:
      he(t.type) && Kr(t);
      break;
    case 4:
      ko(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      D(Zr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (D($, $.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ba(e, t, n) : (D($, $.current & 1), e = qe(e, t, n), e !== null ? e.sibling : null);
      D($, $.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Wa(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D($, $.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ua(e, t, n);
  }
  return qe(e, t, n);
}
var Ha, Fi, Qa, Ga;
Ha = function(e, t) {
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
Fi = function() {
};
Qa = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Nt(We.current);
    var i = null;
    switch (n) {
      case "input":
        l = ii(e, l), r = ii(e, r), i = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = ui(e, l), r = ui(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr);
    }
    ci(n, r);
    var o;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var s = l[f];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Fn.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var a = r[f];
      if (s = l != null ? l[f] : void 0, r.hasOwnProperty(f) && a !== s && (a != null || s != null)) if (f === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && s[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = a;
      else f === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(f, a)) : f === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(f, "" + a) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Fn.hasOwnProperty(f) ? (a != null && f === "onScroll" && F("scroll", e), i || s === a || (i = [])) : (i = i || []).push(f, a));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Ga = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xn(e, t) {
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
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function kf(e, t, n) {
  var r = t.pendingProps;
  switch (mo(t), t.tag) {
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
      return ie(t), null;
    case 1:
      return he(t.type) && Gr(), ie(t), null;
    case 3:
      return r = t.stateNode, sn(), A(me), A(se), Eo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (gr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Oe !== null && (Qi(Oe), Oe = null))), Fi(e, t), ie(t), null;
    case 5:
      xo(t);
      var l = Nt(Yn.current);
      if (n = t.type, e !== null && t.stateNode != null) Qa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return ie(t), null;
        }
        if (e = Nt(We.current), gr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ve] = t, r[Kn] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jn.length; l++) F(jn[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F(
                "error",
                r
              ), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Yo(r, i), F("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, F("invalid", r);
              break;
            case "textarea":
              Jo(r, i), F("invalid", r);
          }
          ci(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var s = i[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && yr(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && yr(
              r.textContent,
              s,
              e
            ), l = ["children", "" + s]) : Fn.hasOwnProperty(o) && s != null && o === "onScroll" && F("scroll", r);
          }
          switch (n) {
            case "input":
              ar(r), Zo(r, i, !0);
              break;
            case "textarea":
              ar(r), qo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Qr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Su(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ve] = t, e[Kn] = r, Ha(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = di(n, r), n) {
              case "dialog":
                F("cancel", e), F("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < jn.length; l++) F(jn[l], e);
                l = r;
                break;
              case "source":
                F("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                F(
                  "error",
                  e
                ), F("load", e), l = r;
                break;
              case "details":
                F("toggle", e), l = r;
                break;
              case "input":
                Yo(e, r), l = ii(e, r), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), F("invalid", e);
                break;
              case "textarea":
                Jo(e, r), l = ui(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            ci(n, l), s = l;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? Eu(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ku(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && An(e, a) : typeof a == "number" && An(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Fn.hasOwnProperty(i) ? a != null && i === "onScroll" && F("scroll", e) : a != null && qi(e, i, a, o));
            }
            switch (n) {
              case "input":
                ar(e), Zo(e, r, !1);
                break;
              case "textarea":
                ar(e), qo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Zt(e, !!r.multiple, i, !1) : r.defaultValue != null && Zt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Qr);
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
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) Ga(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = Nt(Yn.current), Nt(We.current), gr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ve] = t, (i = r.nodeValue !== n) && (e = we, e !== null)) switch (e.tag) {
            case 3:
              yr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && yr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ve] = t, t.stateNode = r;
      }
      return ie(t), null;
    case 13:
      if (A($), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && ge !== null && t.mode & 1 && !(t.flags & 128)) ca(), ln(), t.flags |= 98560, i = !1;
        else if (i = gr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(w(317));
            i[Ve] = t;
          } else ln(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ie(t), i = !1;
        } else Oe !== null && (Qi(Oe), Oe = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $.current & 1 ? Y === 0 && (Y = 3) : Oo())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
    case 4:
      return sn(), Fi(e, t), e === null && Qn(t.stateNode.containerInfo), ie(t), null;
    case 10:
      return go(t.type._context), ie(t), null;
    case 17:
      return he(t.type) && Gr(), ie(t), null;
    case 19:
      if (A($), i = t.memoizedState, i === null) return ie(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) xn(i, !1);
      else {
        if (Y !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = br(e), o !== null) {
            for (t.flags |= 128, xn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return D($, $.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && G() > an && (t.flags |= 128, r = !0, xn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = br(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U) return ie(t), null;
        } else 2 * G() - i.renderingStartTime > an && n !== 1073741824 && (t.flags |= 128, r = !0, xn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = G(), t.sibling = null, n = $.current, D($, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
    case 22:
    case 23:
      return Ro(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ye & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function xf(e, t) {
  switch (mo(t), t.tag) {
    case 1:
      return he(t.type) && Gr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return sn(), A(me), A(se), Eo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return xo(t), null;
    case 13:
      if (A($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        ln();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return A($), null;
    case 4:
      return sn(), null;
    case 10:
      return go(t.type._context), null;
    case 22:
    case 23:
      return Ro(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var kr = !1, oe = !1, Ef = typeof WeakSet == "function" ? WeakSet : Set, x = null;
function Xt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    W(e, t, r);
  }
  else n.current = null;
}
function Ai(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Vs = !1;
function _f(e, t) {
  if (ki = Br, e = Ju(), fo(e)) {
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
        var o = 0, s = -1, a = -1, f = 0, v = 0, m = e, h = null;
        t: for (; ; ) {
          for (var S; m !== n || l !== 0 && m.nodeType !== 3 || (s = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (a = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (S = m.firstChild) !== null; )
            h = m, m = S;
          for (; ; ) {
            if (m === e) break t;
            if (h === n && ++f === l && (s = o), h === i && ++v === r && (a = o), (S = m.nextSibling) !== null) break;
            m = h, h = m.parentNode;
          }
          m = S;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xi = { focusedElem: e, selectionRange: n }, Br = !1, x = t; x !== null; ) if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, x = e;
  else for (; x !== null; ) {
    t = x;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var y = k.memoizedProps, I = k.memoizedState, u = t.stateNode, c = u.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Me(t.type, y), I);
            u.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(w(163));
      }
    } catch (g) {
      W(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, x = e;
      break;
    }
    x = t.return;
  }
  return k = Vs, Vs = !1, k;
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Ai(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function vl(e, t) {
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
function Ka(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ka(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ve], delete t[Kn], delete t[Ci], delete t[of], delete t[sf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xa(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $i(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Qr));
  else if (r !== 4 && (e = e.child, e !== null)) for ($i(e, t, n), e = e.sibling; e !== null; ) $i(e, t, n), e = e.sibling;
}
function Vi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Vi(e, t, n), e = e.sibling; e !== null; ) Vi(e, t, n), e = e.sibling;
}
var b = null, Re = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) Ya(e, t, n), n = n.sibling;
}
function Ya(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function") try {
    Be.onCommitFiberUnmount(ul, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      oe || Xt(n, t);
    case 6:
      var r = b, l = Re;
      b = null, et(e, t, n), b = r, Re = l, b !== null && (Re ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (Re ? (e = b, n = n.stateNode, e.nodeType === 8 ? Hl(e.parentNode, n) : e.nodeType === 1 && Hl(e, n), Bn(e)) : Hl(b, n.stateNode));
      break;
    case 4:
      r = b, l = Re, b = n.stateNode.containerInfo, Re = !0, et(e, t, n), b = r, Re = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Ai(n, t, o), l = l.next;
        } while (l !== r);
      }
      et(e, t, n);
      break;
    case 1:
      if (!oe && (Xt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        W(n, t, s);
      }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (oe = (r = oe) || n.memoizedState !== null, et(e, t, n), oe = r) : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function Ws(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ef()), t.forEach(function(r) {
      var l = zf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            b = s.stateNode, Re = !1;
            break e;
          case 3:
            b = s.stateNode.containerInfo, Re = !0;
            break e;
          case 4:
            b = s.stateNode.containerInfo, Re = !0;
            break e;
        }
        s = s.return;
      }
      if (b === null) throw Error(w(160));
      Ya(i, o, l), b = null, Re = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (f) {
      W(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Za(t, e), t = t.sibling;
}
function Za(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(t, e), Ue(e), r & 4) {
        try {
          Rn(3, e, e.return), vl(3, e);
        } catch (y) {
          W(e, e.return, y);
        }
        try {
          Rn(5, e, e.return);
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 1:
      Le(t, e), Ue(e), r & 512 && n !== null && Xt(n, n.return);
      break;
    case 5:
      if (Le(t, e), Ue(e), r & 512 && n !== null && Xt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          An(l, "");
        } catch (y) {
          W(e, e.return, y);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && gu(l, i), di(s, o);
          var f = di(s, i);
          for (o = 0; o < a.length; o += 2) {
            var v = a[o], m = a[o + 1];
            v === "style" ? Eu(l, m) : v === "dangerouslySetInnerHTML" ? ku(l, m) : v === "children" ? An(l, m) : qi(l, v, m, f);
          }
          switch (s) {
            case "input":
              oi(l, i);
              break;
            case "textarea":
              wu(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var S = i.value;
              S != null ? Zt(l, !!i.multiple, S, !1) : h !== !!i.multiple && (i.defaultValue != null ? Zt(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Zt(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Kn] = i;
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Le(t, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(w(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Le(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Bn(t.containerInfo);
      } catch (y) {
        W(e, e.return, y);
      }
      break;
    case 4:
      Le(t, e), Ue(e);
      break;
    case 13:
      Le(t, e), Ue(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Mo = G())), r & 4 && Ws(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (f = oe) || v, Le(t, e), oe = f) : Le(t, e), Ue(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !v && e.mode & 1) for (x = e, v = e.child; v !== null; ) {
          for (m = x = v; x !== null; ) {
            switch (h = x, S = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rn(4, h, h.return);
                break;
              case 1:
                Xt(h, h.return);
                var k = h.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (y) {
                    W(r, n, y);
                  }
                }
                break;
              case 5:
                Xt(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  Qs(m);
                  continue;
                }
            }
            S !== null ? (S.return = h, x = S) : Qs(m);
          }
          v = v.sibling;
        }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                l = m.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = m.stateNode, a = m.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = xu("display", o));
              } catch (y) {
                W(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (v === null) try {
              m.stateNode.nodeValue = f ? "" : m.memoizedProps;
            } catch (y) {
              W(e, e.return, y);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), m = m.return;
          }
          v === m && (v = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Le(t, e), Ue(e), r & 4 && Ws(e);
      break;
    case 21:
      break;
    default:
      Le(
        t,
        e
      ), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (An(l, ""), r.flags &= -33);
          var i = Bs(e);
          Vi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = Bs(e);
          $i(e, s, o);
          break;
        default:
          throw Error(w(161));
      }
    } catch (a) {
      W(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cf(e, t, n) {
  x = e, Ja(e);
}
function Ja(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || kr;
      if (!o) {
        var s = l.alternate, a = s !== null && s.memoizedState !== null || oe;
        s = kr;
        var f = oe;
        if (kr = o, (oe = a) && !f) for (x = l; x !== null; ) o = x, a = o.child, o.tag === 22 && o.memoizedState !== null ? Gs(l) : a !== null ? (a.return = o, x = a) : Gs(l);
        for (; i !== null; ) x = i, Ja(i), i = i.sibling;
        x = l, kr = s, oe = f;
      }
      Hs(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, x = i) : Hs(e);
  }
}
function Hs(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            oe || vl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !oe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Me(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Ps(t, i, r);
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
              Ps(t, o, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
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
                var v = f.memoizedState;
                if (v !== null) {
                  var m = v.dehydrated;
                  m !== null && Bn(m);
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
            throw Error(w(163));
        }
        oe || t.flags & 512 && Ui(t);
      } catch (h) {
        W(t, t.return, h);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function Qs(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function Gs(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vl(4, t);
          } catch (a) {
            W(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              W(t, l, a);
            }
          }
          var i = t.return;
          try {
            Ui(t);
          } catch (a) {
            W(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ui(t);
          } catch (a) {
            W(t, o, a);
          }
      }
    } catch (a) {
      W(t, t.return, a);
    }
    if (t === e) {
      x = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, x = s;
      break;
    }
    x = t.return;
  }
}
var Nf = Math.ceil, nl = be.ReactCurrentDispatcher, Lo = be.ReactCurrentOwner, Ne = be.ReactCurrentBatchConfig, R = 0, q = null, K = null, te = 0, ye = 0, Yt = gt(0), Y = 0, bn = null, Mt = 0, yl = 0, To = 0, On = null, fe = null, Mo = 0, an = 1 / 0, He = null, rl = !1, Bi = null, ft = null, xr = !1, ot = null, ll = 0, Dn = 0, Wi = null, Rr = -1, Or = 0;
function ae() {
  return R & 6 ? G() : Rr !== -1 ? Rr : Rr = G();
}
function pt(e) {
  return e.mode & 1 ? R & 2 && te !== 0 ? te & -te : af.transition !== null ? (Or === 0 && (Or = Ou()), Or) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bu(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < Dn) throw Dn = 0, Wi = null, Error(w(185));
  tr(e, n, r), (!(R & 2) || e !== q) && (e === q && (!(R & 2) && (yl |= n), Y === 4 && lt(e, te)), ve(e, r), n === 1 && R === 0 && !(t.mode & 1) && (an = G() + 500, pl && wt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  ud(e, t);
  var r = Vr(e, e === q ? te : 0);
  if (r === 0) n !== null && ts(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ts(n), t === 1) e.tag === 0 ? uf(Ks.bind(null, e)) : sa(Ks.bind(null, e)), rf(function() {
      !(R & 6) && wt();
    }), n = null;
    else {
      switch (Du(r)) {
        case 1:
          n = ro;
          break;
        case 4:
          n = zu;
          break;
        case 16:
          n = $r;
          break;
        case 536870912:
          n = Ru;
          break;
        default:
          n = $r;
      }
      n = ic(n, qa.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function qa(e, t) {
  if (Rr = -1, Or = 0, R & 6) throw Error(w(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var r = Vr(e, e === q ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var i = ec();
    (q !== e || te !== t) && (He = null, an = G() + 500, jt(e, t));
    do
      try {
        If();
        break;
      } catch (s) {
        ba(e, s);
      }
    while (!0);
    yo(), nl.current = i, R = l, K !== null ? t = 0 : (q = null, te = 0, t = Y);
  }
  if (t !== 0) {
    if (t === 2 && (l = vi(e), l !== 0 && (r = l, t = Hi(e, l))), t === 1) throw n = bn, jt(e, 0), lt(e, r), ve(e, G()), n;
    if (t === 6) lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !jf(l) && (t = il(e, r), t === 2 && (i = vi(e), i !== 0 && (r = i, t = Hi(e, i))), t === 1)) throw n = bn, jt(e, 0), lt(e, r), ve(e, G()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Et(e, fe, He);
          break;
        case 3:
          if (lt(e, r), (r & 130023424) === r && (t = Mo + 500 - G(), 10 < t)) {
            if (Vr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ae(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = _i(Et.bind(null, e, fe, He), t);
            break;
          }
          Et(e, fe, He);
          break;
        case 4:
          if (lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - De(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Nf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _i(Et.bind(null, e, fe, He), r);
            break;
          }
          Et(e, fe, He);
          break;
        case 5:
          Et(e, fe, He);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return ve(e, G()), e.callbackNode === n ? qa.bind(null, e) : null;
}
function Hi(e, t) {
  var n = On;
  return e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = fe, fe = n, t !== null && Qi(t)), e;
}
function Qi(e) {
  fe === null ? fe = e : fe.push.apply(fe, e);
}
function jf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Ae(i(), l)) return !1;
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
function lt(e, t) {
  for (t &= ~To, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - De(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ks(e) {
  if (R & 6) throw Error(w(327));
  tn();
  var t = Vr(e, 0);
  if (!(t & 1)) return ve(e, G()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vi(e);
    r !== 0 && (t = r, n = Hi(e, r));
  }
  if (n === 1) throw n = bn, jt(e, 0), lt(e, t), ve(e, G()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Et(e, fe, He), ve(e, G()), null;
}
function zo(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (an = G() + 500, pl && wt());
  }
}
function zt(e) {
  ot !== null && ot.tag === 0 && !(R & 6) && tn();
  var t = R;
  R |= 1;
  var n = Ne.transition, r = O;
  try {
    if (Ne.transition = null, O = 1, e) return e();
  } finally {
    O = r, Ne.transition = n, R = t, !(R & 6) && wt();
  }
}
function Ro() {
  ye = Yt.current, A(Yt);
}
function jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, nf(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (mo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Gr();
        break;
      case 3:
        sn(), A(me), A(se), Eo();
        break;
      case 5:
        xo(r);
        break;
      case 4:
        sn();
        break;
      case 13:
        A($);
        break;
      case 19:
        A($);
        break;
      case 10:
        go(r.type._context);
        break;
      case 22:
      case 23:
        Ro();
    }
    n = n.return;
  }
  if (q = e, K = e = mt(e.current, null), te = ye = t, Y = 0, bn = null, To = yl = Mt = 0, fe = On = null, Ct !== null) {
    for (t = 0; t < Ct.length; t++) if (n = Ct[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    Ct = null;
  }
  return e;
}
function ba(e, t) {
  do {
    var n = K;
    try {
      if (yo(), Tr.current = tl, el) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        el = !1;
      }
      if (Tt = 0, J = X = V = null, zn = !1, Zn = 0, Lo.current = null, n === null || n.return === null) {
        Y = 1, bn = t, K = null;
        break;
      }
      e: {
        var i = e, o = n.return, s = n, a = t;
        if (t = te, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var f = a, v = s, m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = v.alternate;
            h ? (v.updateQueue = h.updateQueue, v.memoizedState = h.memoizedState, v.lanes = h.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var S = Rs(o);
          if (S !== null) {
            S.flags &= -257, Os(S, o, s, i, t), S.mode & 1 && zs(i, f, t), t = S, a = f;
            var k = t.updateQueue;
            if (k === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(a), t.updateQueue = y;
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              zs(i, f, t), Oo();
              break e;
            }
            a = Error(w(426));
          }
        } else if (U && s.mode & 1) {
          var I = Rs(o);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), Os(I, o, s, i, t), ho(un(a, s));
            break e;
          }
        }
        i = a = un(a, s), Y !== 4 && (Y = 2), On === null ? On = [i] : On.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var u = Da(i, a, t);
              js(i, u);
              break e;
            case 1:
              s = a;
              var c = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ft === null || !ft.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = Fa(i, s, t);
                js(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      nc(n);
    } catch (E) {
      t = E, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ec() {
  var e = nl.current;
  return nl.current = tl, e === null ? tl : e;
}
function Oo() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), q === null || !(Mt & 268435455) && !(yl & 268435455) || lt(q, te);
}
function il(e, t) {
  var n = R;
  R |= 2;
  var r = ec();
  (q !== e || te !== t) && (He = null, jt(e, t));
  do
    try {
      Pf();
      break;
    } catch (l) {
      ba(e, l);
    }
  while (!0);
  if (yo(), R = n, nl.current = r, K !== null) throw Error(w(261));
  return q = null, te = 0, Y;
}
function Pf() {
  for (; K !== null; ) tc(K);
}
function If() {
  for (; K !== null && !bc(); ) tc(K);
}
function tc(e) {
  var t = lc(e.alternate, e, ye);
  e.memoizedProps = e.pendingProps, t === null ? nc(e) : K = t, Lo.current = null;
}
function nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = xf(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Y = 6, K = null;
        return;
      }
    } else if (n = kf(n, t, ye), n !== null) {
      K = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function Et(e, t, n) {
  var r = O, l = Ne.transition;
  try {
    Ne.transition = null, O = 1, Lf(e, t, n, r);
  } finally {
    Ne.transition = l, O = r;
  }
  return null;
}
function Lf(e, t, n, r) {
  do
    tn();
  while (ot !== null);
  if (R & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (ad(e, i), e === q && (K = q = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || xr || (xr = !0, ic($r, function() {
    return tn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ne.transition, Ne.transition = null;
    var o = O;
    O = 1;
    var s = R;
    R |= 4, Lo.current = null, _f(e, n), Za(n, e), Yd(xi), Br = !!ki, xi = ki = null, e.current = n, Cf(n), ed(), R = s, O = o, Ne.transition = i;
  } else e.current = n;
  if (xr && (xr = !1, ot = e, ll = l), i = e.pendingLanes, i === 0 && (ft = null), rd(n.stateNode), ve(e, G()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (rl) throw rl = !1, e = Bi, Bi = null, e;
  return ll & 1 && e.tag !== 0 && tn(), i = e.pendingLanes, i & 1 ? e === Wi ? Dn++ : (Dn = 0, Wi = e) : Dn = 0, wt(), null;
}
function tn() {
  if (ot !== null) {
    var e = Du(ll), t = Ne.transition, n = O;
    try {
      if (Ne.transition = null, O = 16 > e ? 16 : e, ot === null) var r = !1;
      else {
        if (e = ot, ot = null, ll = 0, R & 6) throw Error(w(331));
        var l = R;
        for (R |= 4, x = e.current; x !== null; ) {
          var i = x, o = i.child;
          if (x.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var f = s[a];
                for (x = f; x !== null; ) {
                  var v = x;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, v, i);
                  }
                  var m = v.child;
                  if (m !== null) m.return = v, x = m;
                  else for (; x !== null; ) {
                    v = x;
                    var h = v.sibling, S = v.return;
                    if (Ka(v), v === f) {
                      x = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = S, x = h;
                      break;
                    }
                    x = S;
                  }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var y = k.child;
                if (y !== null) {
                  k.child = null;
                  do {
                    var I = y.sibling;
                    y.sibling = null, y = I;
                  } while (y !== null);
                }
              }
              x = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, x = o;
          else e: for (; x !== null; ) {
            if (i = x, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Rn(9, i, i.return);
            }
            var u = i.sibling;
            if (u !== null) {
              u.return = i.return, x = u;
              break e;
            }
            x = i.return;
          }
        }
        var c = e.current;
        for (x = c; x !== null; ) {
          o = x;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, x = p;
          else e: for (o = c; x !== null; ) {
            if (s = x, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  vl(9, s);
              }
            } catch (E) {
              W(s, s.return, E);
            }
            if (s === o) {
              x = null;
              break e;
            }
            var g = s.sibling;
            if (g !== null) {
              g.return = s.return, x = g;
              break e;
            }
            x = s.return;
          }
        }
        if (R = l, wt(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
          Be.onPostCommitFiberRoot(ul, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, Ne.transition = t;
    }
  }
  return !1;
}
function Xs(e, t, n) {
  t = un(n, t), t = Da(e, t, 1), e = dt(e, t, 1), t = ae(), e !== null && (tr(e, 1, t), ve(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) Xs(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Xs(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ft === null || !ft.has(r))) {
        e = un(n, e), e = Fa(t, e, 1), t = dt(t, e, 1), e = ae(), t !== null && (tr(t, 1, e), ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Tf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ae(), e.pingedLanes |= e.suspendedLanes & n, q === e && (te & n) === n && (Y === 4 || Y === 3 && (te & 130023424) === te && 500 > G() - Mo ? jt(e, 0) : To |= n), ve(e, t);
}
function rc(e, t) {
  t === 0 && (e.mode & 1 ? (t = fr, fr <<= 1, !(fr & 130023424) && (fr = 4194304)) : t = 1);
  var n = ae();
  e = Je(e, t), e !== null && (tr(e, t, n), ve(e, n));
}
function Mf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), rc(e, n);
}
function zf(e, t) {
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
      throw Error(w(314));
  }
  r !== null && r.delete(t), rc(e, n);
}
var lc;
lc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || me.current) pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return pe = !1, Sf(e, t, n);
    pe = !!(e.flags & 131072);
  }
  else pe = !1, U && t.flags & 1048576 && ua(t, Yr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zr(e, t), e = t.pendingProps;
      var l = rn(t, se.current);
      en(t, n), l = Co(null, t, r, e, l, n);
      var i = No();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, he(r) ? (i = !0, Kr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, So(t), l.updater = hl, t.stateNode = l, l._reactInternals = t, Ti(t, r, e, n), t = Ri(null, t, r, !0, i, n)) : (t.tag = 0, U && i && po(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Of(r), e = Me(r, e), l) {
          case 0:
            t = zi(null, t, r, e, n);
            break e;
          case 1:
            t = As(null, t, r, e, n);
            break e;
          case 11:
            t = Ds(null, t, r, e, n);
            break e;
          case 14:
            t = Fs(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(w(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), zi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), As(e, t, r, l, n);
    case 3:
      e: {
        if (Va(t), e === null) throw Error(w(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, ma(e, t), qr(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = un(Error(w(423)), t), t = Us(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = un(Error(w(424)), t), t = Us(e, t, r, n, l);
          break e;
        } else for (ge = ct(t.stateNode.containerInfo.firstChild), we = t, U = !0, Oe = null, n = fa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ln(), r === l) {
            t = qe(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ha(t), e === null && Pi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Ei(r, l) ? o = null : i !== null && Ei(r, i) && (t.flags |= 32), $a(e, t), ue(e, t, o, n), t.child;
    case 6:
      return e === null && Pi(t), null;
    case 13:
      return Ba(e, t, n);
    case 4:
      return ko(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = on(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Ds(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, D(Zr, r._currentValue), r._currentValue = o, i !== null) if (Ae(i.value, o)) {
          if (i.children === l.children && !me.current) {
            t = qe(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            o = i.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Xe(-1, n & -n), a.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var v = f.pending;
                    v === null ? a.next = a : (a.next = v.next, v.next = a), f.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ii(
                  i.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(w(341));
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ii(o, n, t), o = i.sibling;
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
        ue(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, en(t, n), l = je(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Me(r, t.pendingProps), l = Me(r.type, l), Fs(e, t, r, l, n);
    case 15:
      return Aa(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), zr(e, t), t.tag = 1, he(r) ? (e = !0, Kr(t)) : e = !1, en(t, n), Oa(t, r, l), Ti(t, r, l, n), Ri(null, t, r, !0, e, n);
    case 19:
      return Wa(e, t, n);
    case 22:
      return Ua(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function ic(e, t) {
  return Mu(e, t);
}
function Rf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ce(e, t, n, r) {
  return new Rf(e, t, n, r);
}
function Do(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Of(e) {
  if (typeof e == "function") return Do(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === eo) return 11;
    if (e === to) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ce(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Dr(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Do(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Ut:
      return Pt(n.children, l, i, t);
    case bi:
      o = 8, l |= 8;
      break;
    case ti:
      return e = Ce(12, n, t, l | 2), e.elementType = ti, e.lanes = i, e;
    case ni:
      return e = Ce(13, n, t, l), e.elementType = ni, e.lanes = i, e;
    case ri:
      return e = Ce(19, n, t, l), e.elementType = ri, e.lanes = i, e;
    case hu:
      return gl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case pu:
          o = 10;
          break e;
        case mu:
          o = 9;
          break e;
        case eo:
          o = 11;
          break e;
        case to:
          o = 14;
          break e;
        case tt:
          o = 16, r = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = Ce(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Pt(e, t, n, r) {
  return e = Ce(7, e, r, t), e.lanes = n, e;
}
function gl(e, t, n, r) {
  return e = Ce(22, e, r, t), e.elementType = hu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ql(e, t, n) {
  return e = Ce(6, e, null, t), e.lanes = n, e;
}
function bl(e, t, n) {
  return t = Ce(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Df(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zl(0), this.expirationTimes = zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Fo(e, t, n, r, l, i, o, s, a) {
  return e = new Df(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ce(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, So(i), e;
}
function Ff(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: At, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function oc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (Ot(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return oa(e, n, t);
  }
  return t;
}
function sc(e, t, n, r, l, i, o, s, a) {
  return e = Fo(n, r, !0, e, l, i, o, s, a), e.context = oc(null), n = e.current, r = ae(), l = pt(n), i = Xe(r, l), i.callback = t ?? null, dt(n, i, l), e.current.lanes = l, tr(e, l, r), ve(e, r), e;
}
function wl(e, t, n, r) {
  var l = t.current, i = ae(), o = pt(l);
  return n = oc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Xe(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dt(l, t, o), e !== null && (Fe(e, l, o, i), Lr(e, l, o)), o;
}
function ol(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ys(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ao(e, t) {
  Ys(e, t), (e = e.alternate) && Ys(e, t);
}
function Af() {
  return null;
}
var uc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Uo(e) {
  this._internalRoot = e;
}
Sl.prototype.render = Uo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  wl(e, t, null, null);
};
Sl.prototype.unmount = Uo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zt(function() {
      wl(null, e, null, null);
    }), t[Ze] = null;
  }
};
function Sl(e) {
  this._internalRoot = e;
}
Sl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Uu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++) ;
    rt.splice(n, 0, e), n === 0 && Vu(e);
  }
};
function $o(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function kl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Zs() {
}
function Uf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = ol(o);
        i.call(f);
      };
    }
    var o = sc(t, r, e, 0, null, !1, !1, "", Zs);
    return e._reactRootContainer = o, e[Ze] = o.current, Qn(e.nodeType === 8 ? e.parentNode : e), zt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var f = ol(a);
      s.call(f);
    };
  }
  var a = Fo(e, 0, !1, null, null, !1, !1, "", Zs);
  return e._reactRootContainer = a, e[Ze] = a.current, Qn(e.nodeType === 8 ? e.parentNode : e), zt(function() {
    wl(t, a, n, r);
  }), a;
}
function xl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function() {
        var a = ol(o);
        s.call(a);
      };
    }
    wl(t, o, e, l);
  } else o = Uf(n, t, e, l, r);
  return ol(o);
}
Fu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 && (lo(t, n | 1), ve(t, G()), !(R & 6) && (an = G() + 500, wt()));
      }
      break;
    case 13:
      zt(function() {
        var r = Je(e, 1);
        if (r !== null) {
          var l = ae();
          Fe(r, e, 1, l);
        }
      }), Ao(e, 1);
  }
};
io = function(e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = ae();
      Fe(t, e, 134217728, n);
    }
    Ao(e, 134217728);
  }
};
Au = function(e) {
  if (e.tag === 13) {
    var t = pt(e), n = Je(e, t);
    if (n !== null) {
      var r = ae();
      Fe(n, e, t, r);
    }
    Ao(e, t);
  }
};
Uu = function() {
  return O;
};
$u = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
pi = function(e, t, n) {
  switch (t) {
    case "input":
      if (oi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = fl(r);
            if (!l) throw Error(w(90));
            yu(r), oi(r, l);
          }
        }
      }
      break;
    case "textarea":
      wu(e, n);
      break;
    case "select":
      t = n.value, t != null && Zt(e, !!n.multiple, t, !1);
  }
};
Nu = zo;
ju = zt;
var $f = { usingClientEntryPoint: !1, Events: [rr, Wt, fl, _u, Cu, zo] }, En = { findFiberByHostInstance: _t, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vf = { bundleType: En.bundleType, version: En.version, rendererPackageName: En.rendererPackageName, rendererConfig: En.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Lu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: En.findFiberByHostInstance || Af, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Er.isDisabled && Er.supportsFiber) try {
    ul = Er.inject(Vf), Be = Er;
  } catch {
  }
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f;
ke.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$o(t)) throw Error(w(200));
  return Ff(e, t, null, n);
};
ke.createRoot = function(e, t) {
  if (!$o(e)) throw Error(w(299));
  var n = !1, r = "", l = uc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Fo(e, 1, !1, null, null, n, !1, r, l), e[Ze] = t.current, Qn(e.nodeType === 8 ? e.parentNode : e), new Uo(t);
};
ke.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = Lu(t), e = e === null ? null : e.stateNode, e;
};
ke.flushSync = function(e) {
  return zt(e);
};
ke.hydrate = function(e, t, n) {
  if (!kl(t)) throw Error(w(200));
  return xl(null, e, t, !0, n);
};
ke.hydrateRoot = function(e, t, n) {
  if (!$o(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = uc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = sc(t, null, e, 1, n ?? null, l, !1, i, o), e[Ze] = t.current, Qn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Sl(t);
};
ke.render = function(e, t, n) {
  if (!kl(t)) throw Error(w(200));
  return xl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function(e) {
  if (!kl(e)) throw Error(w(40));
  return e._reactRootContainer ? (zt(function() {
    xl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ze] = null;
    });
  }), !0) : !1;
};
ke.unstable_batchedUpdates = zo;
ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!kl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return xl(e, t, n, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function ac() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac);
    } catch (e) {
      console.error(e);
    }
}
ac(), au.exports = ke;
var Bf = au.exports, cc, Js = Bf;
cc = Js.createRoot, Js.hydrateRoot;
window.api = ee;
const qs = async (e = 0, t = 30) => {
  const n = await ee.fetchApi(
    `/meld-nexus/list?offset=${e}&limit=${t}`
  );
  if (!n.ok)
    throw new Error(`Failed to fetch images: ${n.statusText}`);
  return await n.json();
}, dc = async () => {
  const e = await ee.fetchApi("/meld-nexus/settings");
  return e.ok ? await e.json() : { dev_mode: !1, "gallery.show_parent_image": !0 };
}, Wf = async (e, t) => {
  if (!(await ee.fetchApi("/meld-nexus/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Hf = async (e, t) => {
  if (!(await ee.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Qf = async (e, t = 12) => {
  const n = await ee.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, Gf = async (e) => {
  const t = await ee.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, Kf = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await ee.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Xf = async (e, t = !0) => {
  const n = await ee.fetchApi("/meld-nexus/bulk-delete", {
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
}, fc = async (e) => {
  const t = await ee.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, Yf = async (e, t) => {
  const n = await ee.fetchApi(
    `/meld-nexus/folders?type=${e}&path=${encodeURIComponent(t)}`
  );
  return n.ok ? await n.json() : [];
}, Zf = async (e) => {
  const t = await ee.fetchApi("/meld-nexus/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Jf = async () => {
  if (!(await ee.fetchApi("/meld-nexus/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
};
var pc = { exports: {} }, El = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qf = L, bf = Symbol.for("react.element"), ep = Symbol.for("react.fragment"), tp = Object.prototype.hasOwnProperty, np = qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, rp = { key: !0, ref: !0, __self: !0, __source: !0 };
function mc(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) tp.call(t, r) && !rp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: bf, type: e, key: i, ref: o, props: l, _owner: np.current };
}
El.Fragment = ep;
El.jsx = mc;
El.jsxs = mc;
pc.exports = El;
var d = pc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var lp = {
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
const ip = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), re = (e, t) => {
  const n = L.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: s = "",
      children: a,
      ...f
    }, v) => L.createElement(
      "svg",
      {
        ref: v,
        ...lp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${ip(e)}`, s].join(" "),
        ...f
      },
      [
        ...t.map(([m, h]) => L.createElement(m, h)),
        ...Array.isArray(a) ? a : [a]
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
const op = re("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = re("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = re("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = re("Download", [
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
const bs = re("Folder", [
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
const up = re("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = re("Maximize", [
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
const cp = re("Minimize", [
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
const dp = re("MoreVertical", [
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
const fp = re("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = re("PlusCircle", [
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
const yc = re("RefreshCw", [
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
const mp = re("Settings", [
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
const hp = re("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = re("Trash2", [
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
const yp = re("Upload", [
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
const pn = re("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let sl = !1;
const gp = (e) => {
  sl = e, sl && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, wp = (...e) => {
  sl && console.log("[Meld-Flow]", ...e);
}, Sp = (...e) => {
  sl && console.warn("[Meld-Flow]", ...e);
}, kp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, ze = {
  log: wp,
  warn: Sp,
  error: kp,
  init: gp
}, xp = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  lastUpdated: Date.now(),
  viewMode: "list",
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
    "gallery.show_parent_image": !0
  },
  pagination: {
    total: 0,
    offset: 0,
    limit: 30,
    hasMore: !1
  }
};
function Ep(e, t) {
  switch (t.type) {
    case "SET_IMAGES": {
      const { images: n, total: r, offset: l, limit: i } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !n.some((s) => s.id === o) && (o = null), {
        ...e,
        images: n,
        isLoading: !1,
        error: null,
        viewerImageId: o,
        pagination: {
          total: r,
          offset: l,
          limit: i,
          hasMore: l + n.length < r
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: n, total: r, offset: l, limit: i } = t.payload, o = [...e.images, ...n], s = Array.from(
        new Map(o.map((a) => [a.id, a])).values()
      );
      return {
        ...e,
        images: s,
        isLoading: !1,
        error: null,
        pagination: {
          total: r,
          offset: l,
          limit: i,
          hasMore: l + n.length < r
        }
      };
    }
    case "SET_LINEAGE":
      return {
        ...e,
        lineageImages: t.payload
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
      let r = e.lastSelectedId;
      return n.has(t.payload) ? (n.delete(t.payload), r === t.payload && (r = null)) : (n.add(t.payload), r = t.payload), {
        ...e,
        selectedIds: n,
        lastSelectedId: r
      };
    }
    case "SELECT_RANGE": {
      if (e.lastSelectedId === null) {
        const s = new Set(e.selectedIds);
        return s.add(t.payload), {
          ...e,
          selectedIds: s,
          lastSelectedId: t.payload
        };
      }
      const n = e.images.findIndex(
        (s) => s.id === e.lastSelectedId
      ), r = e.images.findIndex(
        (s) => s.id === t.payload
      );
      if (n === -1 || r === -1) return e;
      const [l, i] = [
        Math.min(n, r),
        Math.max(n, r)
      ], o = new Set(e.selectedIds);
      for (let s = l; s <= i; s++)
        o.add(e.images[s].id);
      return {
        ...e,
        selectedIds: o,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(
          e.images.map((n) => n.id)
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
    case "REFRESH":
      return {
        ...e,
        lastUpdated: Date.now()
      };
    case "OPEN_VIEWER": {
      const n = t.payload, r = typeof n == "number" ? n : n.id, l = typeof n == "number" ? "gallery" : n.mode, i = e.viewerMode === "lineage" && l === "lineage" && e.lineageImages.some((o) => o.id === r);
      return {
        ...e,
        viewerImageId: r,
        viewerMode: l,
        lineageImages: i ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const n = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images;
      if (e.viewerImageId === null || n.length === 0)
        return e;
      const r = n.findIndex(
        (i) => i.id === e.viewerImageId
      );
      if (r === -1 || r === n.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore)
        return e;
      const l = (r + 1) % n.length;
      return {
        ...e,
        viewerImageId: n[l].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const n = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images;
      if (e.viewerImageId === null || n.length === 0)
        return e;
      const r = n.findIndex(
        (i) => i.id === e.viewerImageId
      );
      if (r === -1) return e;
      const l = (r - 1 + n.length) % n.length;
      return {
        ...e,
        viewerImageId: n[l].id
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
    case "SET_SETTINGS":
      return {
        ...e,
        settings: {
          ...e.settings,
          ...t.payload
        }
      };
    default:
      return e;
  }
}
const gc = L.createContext(void 0), _p = ({
  children: e
}) => {
  const [t, n] = L.useReducer(Ep, xp), r = L.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const s = await qs(0, t.pagination.limit);
      n({ type: "SET_IMAGES", payload: s });
    } catch (s) {
      n({
        type: "SET_ERROR",
        payload: s instanceof Error ? s.message : String(s)
      });
    }
  }, [t.pagination.limit]), l = L.useCallback(async () => {
    if (!(t.isLoading || !t.pagination.hasMore)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        const s = t.images.length, a = await qs(s, t.pagination.limit);
        n({ type: "APPEND_IMAGES", payload: a });
      } catch (s) {
        n({
          type: "SET_ERROR",
          payload: s instanceof Error ? s.message : String(s)
        });
      }
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.images.length
  ]), i = L.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const s = Array.from(t.selectedIds), a = `Are you sure you want to delete the selected ${s.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(a)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await Xf(s, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (f) {
        n({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    }
  }, [t.selectedIds, r]), o = L.useCallback(
    async (s, a) => {
      try {
        await Wf(s, a), n({ type: "SET_SETTINGS", payload: { [s]: a } });
      } catch (f) {
        n({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    },
    []
  );
  return L.useEffect(() => {
    (async () => {
      try {
        const a = await dc();
        n({ type: "SET_SETTINGS", payload: a });
      } catch (a) {
        ze.error("Failed to load settings", a);
      }
    })();
  }, []), L.useEffect(() => {
    const s = () => {
      r();
    }, a = (v) => {
      const m = v.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: m }
      });
    }, f = (v) => {
      const m = v.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: m.new_count || 0,
          totalCount: m.total_count || 0,
          progress: {
            current: m.total_count || t.scanStatus.progress.total,
            total: m.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), r();
    };
    return window.addEventListener("meld-nexus-refresh", s), window.addEventListener("meld-nexus-scan-progress", a), window.addEventListener("meld-nexus-scan-finished", f), () => {
      window.removeEventListener("meld-nexus-refresh", s), window.removeEventListener(
        "meld-nexus-scan-progress",
        a
      ), window.removeEventListener(
        "meld-nexus-scan-finished",
        f
      );
    };
  }, [r, t.scanStatus.progress.total]), L.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ d.jsx(
    gc.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: r,
        loadMoreImages: l,
        deleteSelected: i,
        updateSetting: o
      },
      children: e
    }
  );
}, Dt = () => {
  const e = L.useContext(gc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Cp = () => {
  const { state: e, dispatch: t, deleteSelected: n } = Dt(), r = e.selectedIds.size;
  return r === 0 ? null : /* @__PURE__ */ d.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ d.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ d.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ d.jsx(
            vp,
            {
              size: 16,
              style: { marginRight: "8px", verticalAlign: "middle" }
            }
          ),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ d.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ d.jsx(pn, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, Np = ({ image: e }) => {
  const { state: t, dispatch: n } = Dt(), r = t.selectedIds.has(e.id), [l, i] = L.useState(null), [o, s] = L.useState(!1), a = L.useRef(null);
  L.useEffect(() => {
    const u = (c) => {
      a.current && !a.current.contains(c.target) && s(!1);
    };
    return o && document.addEventListener("mousedown", u), () => {
      document.removeEventListener("mousedown", u);
    };
  }, [o]);
  const f = e.parent_id ? t.images.find((u) => u.id === e.parent_id) : null;
  let v = null;
  f ? v = `/api/view?filename=${encodeURIComponent(f.filename)}&type=${f.type || "output"}${f.subfolder ? `&subfolder=${encodeURIComponent(f.subfolder)}` : ""}` : e.parent_id && e.parent_filename && (v = `/api/view?filename=${encodeURIComponent(e.parent_filename)}&type=${e.parent_type || "output"}${e.parent_subfolder ? `&subfolder=${encodeURIComponent(e.parent_subfolder)}` : ""}`);
  const m = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, h = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, S = (u) => {
    u.shiftKey ? (u.preventDefault(), u.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : u.ctrlKey || u.metaKey || t.selectedIds.size > 0 ? (u.preventDefault(), u.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, k = (u) => {
    u.shiftKey ? (u.preventDefault(), u.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, y = (u) => {
    (u.shiftKey || u.ctrlKey || u.metaKey || t.selectedIds.size > 0) && u.preventDefault();
  }, I = (u) => {
    (u.key === "Enter" || u.key === " ") && (u.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: k,
      onMouseDown: y,
      onKeyDown: I,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ d.jsxs("div", { className: "meld-image-card__menu-container", ref: a, children: [
          /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (u) => {
                u.stopPropagation(), s(!o);
              },
              title: "Menu",
              children: /* @__PURE__ */ d.jsx(dp, { size: 16 })
            }
          ),
          o && /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__menu", children: /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: "meld-image-card__menu-item",
              onClick: (u) => {
                u.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: { type: "parent_selection", imageId: e.id }
                }), s(!1);
              },
              children: [
                /* @__PURE__ */ d.jsx(pp, { size: 14 }),
                /* @__PURE__ */ d.jsx("span", { children: "Add parent image" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ d.jsx(
          "img",
          {
            src: h,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: y,
            onClick: (u) => {
              u.stopPropagation(), S(u);
            }
          }
        ) }),
        /* @__PURE__ */ d.jsxs("div", { className: "meld-image-card__details", children: [
          /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__filename", children: m }),
          t.settings["gallery.show_parent_image"] && /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__lineage-v2", children: typeof e.parent_id == "number" && e.parent_id > 0 && /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: "meld-lineage-badge meld-lineage-badge--has-parent",
              onClick: (u) => {
                u.stopPropagation(), n({
                  type: "OPEN_VIEWER",
                  payload: { id: e.id, mode: "lineage" }
                });
              },
              children: [
                /* @__PURE__ */ d.jsx(up, { size: 12 }),
                v && /* @__PURE__ */ d.jsx(
                  "img",
                  {
                    src: v,
                    className: "meld-lineage-badge__parent-thumb",
                    alt: "parent thumb"
                  }
                ),
                /* @__PURE__ */ d.jsx("span", { children: "Parent" })
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (u) => {
                u.stopPropagation(), i({
                  title: "Positive Prompt",
                  text: e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-label", children: "Positive" }),
                /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-content", children: e.positive || "-" })
              ]
            }
          ),
          /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (u) => {
                u.stopPropagation(), i({
                  title: "Negative Prompt",
                  text: e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-label", children: "Negative" }),
                /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-content", children: e.negative || "-" })
              ]
            }
          ),
          /* @__PURE__ */ d.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
            /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((u, c) => /* @__PURE__ */ d.jsx("span", { className: "meld-image-card__tag", children: u }, `${u}-${c}`)) : /* @__PURE__ */ d.jsx("span", { style: { color: "#666" }, children: "-" }) })
          ] })
        ] }),
        l && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "meld-prompt-popup-overlay",
            onClick: (u) => {
              u.stopPropagation(), i(null);
            },
            children: /* @__PURE__ */ d.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (u) => u.stopPropagation(),
                children: [
                  /* @__PURE__ */ d.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ d.jsx("span", { children: l.title }),
                    /* @__PURE__ */ d.jsx(
                      pn,
                      {
                        className: "meld-prompt-popup-close",
                        size: 18,
                        onClick: () => i(null)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ d.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, jp = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = Dt(), { viewerImageId: r, images: l, viewerMode: i, lineageImages: o } = e, [s, a] = L.useState(!1), [f, v] = L.useState(!1), m = (i === "lineage" && o.length > 0 ? o : l).find((y) => y.id === r), h = L.useCallback(
    (y) => {
      y && "stopPropagation" in y && y.stopPropagation(), document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch((I) => {
        console.error(
          `Error attempting to enable full-screen mode: ${I.message}`
        );
      });
    },
    []
  );
  if (L.useEffect(() => {
    if (i !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore)
      return;
    const y = l.findIndex((I) => I.id === r);
    y !== -1 && y >= l.length - 15 && n();
  }, [
    r,
    l.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    l
  ]), L.useEffect(() => {
    const y = (u) => {
      r !== null && (u.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : u.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : u.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (u.key === "f" || u.key === "F") && h(u));
    }, I = () => {
      a(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", y), document.addEventListener("fullscreenchange", I), () => {
      window.removeEventListener("keydown", y), document.removeEventListener("fullscreenchange", I);
    };
  }, [r, t, h]), L.useEffect(() => {
    i === "lineage" && r !== null && o.length === 0 && (v(!0), Gf(r).then((y) => {
      t({ type: "SET_LINEAGE", payload: y });
    }).catch((y) => {
      console.error("Failed to fetch lineage:", y);
    }).finally(() => {
      v(!1);
    }));
  }, [i, r, o.length, t]), L.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), L.useEffect(() => {
    if (r !== null) {
      const y = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      y && y.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center"
      });
    }
  }, [r]), !m) return null;
  const S = `/api/view?filename=${encodeURIComponent(m.filename)}&type=${m.type || "output"}${m.subfolder ? `&subfolder=${encodeURIComponent(m.subfolder)}` : ""}`, k = i === "lineage" ? o : l;
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: "meld-viewer-overlay",
      onClick: () => t({ type: "CLOSE_VIEWER" }),
      role: "button",
      tabIndex: 0,
      children: /* @__PURE__ */ d.jsxs(
        "div",
        {
          className: `meld-viewer-content ${s ? "meld-viewer-content--fullscreen" : ""}`,
          onClick: (y) => y.stopPropagation(),
          children: [
            /* @__PURE__ */ d.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ d.jsx("div", { className: "meld-viewer-filename", children: m.filename }) }),
            /* @__PURE__ */ d.jsxs("div", { className: "meld-viewer-actions", children: [
              /* @__PURE__ */ d.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn",
                  onClick: h,
                  type: "button",
                  title: s ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                  children: s ? /* @__PURE__ */ d.jsx(cp, { size: 20 }) : /* @__PURE__ */ d.jsx(ap, { size: 20 })
                }
              ),
              /* @__PURE__ */ d.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                  onClick: () => t({ type: "CLOSE_VIEWER" }),
                  type: "button",
                  title: "Close (Esc)",
                  children: /* @__PURE__ */ d.jsx(pn, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ d.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--prev",
                onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ d.jsx(hc, { size: 32 })
              }
            ),
            /* @__PURE__ */ d.jsx("div", { className: "meld-viewer-image-container", children: /* @__PURE__ */ d.jsx(
              "img",
              {
                src: S,
                alt: m.filename,
                className: "meld-viewer-image"
              }
            ) }),
            /* @__PURE__ */ d.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--next",
                onClick: () => t({ type: "NEXT_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ d.jsx(vc, { size: 32 })
              }
            ),
            !s && /* @__PURE__ */ d.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ d.jsxs("div", { className: "meld-viewer-thumbnails", children: [
              f ? /* @__PURE__ */ d.jsx("div", { style: { padding: "10px", color: "#888" }, children: "Loading lineage..." }) : k.map((y) => {
                const I = y.id === r, u = typeof m.parent_id == "number" && m.parent_id === y.id, c = typeof y.parent_id == "number" && y.parent_id === m.id, p = `/api/view?filename=${encodeURIComponent(y.filename)}&type=${y.type || "output"}${y.subfolder ? `&subfolder=${encodeURIComponent(y.subfolder)}` : ""}`;
                return /* @__PURE__ */ d.jsxs(
                  "div",
                  {
                    className: `meld-viewer-thumbnail ${I ? "meld-viewer-thumbnail--active" : ""}`,
                    onClick: () => t({
                      type: "OPEN_VIEWER",
                      payload: { id: y.id, mode: i }
                    }),
                    children: [
                      /* @__PURE__ */ d.jsx("img", { src: p, alt: y.filename }),
                      i === "lineage" && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                        u && /* @__PURE__ */ d.jsx("span", { className: "meld-viewer-thumbnail-label meld-viewer-thumbnail-label--parent", children: "Parent" }),
                        c && /* @__PURE__ */ d.jsx("span", { className: "meld-viewer-thumbnail-label meld-viewer-thumbnail-label--child", children: "Child" })
                      ] })
                    ]
                  },
                  y.id
                );
              }),
              i === "gallery" && e.isLoading && /* @__PURE__ */ d.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ d.jsx(yc, { className: "animate-spin", size: 20 }) })
            ] }) })
          ]
        }
      )
    }
  );
}, Pp = () => {
  const { state: e, dispatch: t } = Dt(), { scanStatus: n } = e, [r, l] = L.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0
  }), [i, o] = L.useState([]), [s, a] = L.useState(!1), f = L.useCallback(async () => {
    if (r.type !== "custom") {
      a(!0);
      try {
        const u = await Yf(r.type, r.subfolder);
        o(u);
      } catch (u) {
        console.error("Failed to load folders:", u);
      } finally {
        a(!1);
      }
    }
  }, [r.type, r.subfolder]);
  L.useEffect(() => {
    f();
  }, [f]);
  const v = async () => {
    try {
      await Zf(r), t({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      });
    } catch (u) {
      console.error("Failed to start scan:", u), alert(`Failed to start scan: ${u}`);
    }
  }, m = async () => {
    try {
      await Jf(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (u) {
      console.error("Failed to cancel scan:", u);
    }
  }, h = (u) => {
    const c = r.subfolder ? `${r.subfolder}/${u}` : u;
    l({ ...r, subfolder: c });
  }, S = () => {
    const u = r.subfolder.split("/");
    u.pop(), l({ ...r, subfolder: u.join("/") });
  }, k = () => {
    n.isFinished && t({ type: "SET_SCAN_STATUS", payload: { isFinished: !1 } }), t({ type: "CLOSE_MODAL" });
  }, y = n.progress.phase === "linking", I = y ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ d.jsx("div", { className: "meld-modal-overlay", onClick: k, children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: "meld-modal-content meld-modal-content--large",
      onClick: (u) => u.stopPropagation(),
      children: [
        /* @__PURE__ */ d.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ d.jsx("h2", { children: "Import Images" }),
          /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              className: "meld-modal-close",
              onClick: k,
              children: /* @__PURE__ */ d.jsx(pn, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "meld-modal-body", children: n.isRunning ? /* @__PURE__ */ d.jsxs("div", { className: "meld-scan-progress", children: [
          /* @__PURE__ */ d.jsx("div", { className: "meld-scan-status-text", children: n.shouldCancel ? /* @__PURE__ */ d.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : y ? /* @__PURE__ */ d.jsx("span", { children: "Linking parent images..." }) : /* @__PURE__ */ d.jsx("span", { children: "Scanning images..." }) }),
          /* @__PURE__ */ d.jsx("div", { className: "meld-progress-container", children: /* @__PURE__ */ d.jsx(
            "div",
            {
              className: "meld-progress-bar",
              style: { width: `${I}%` }
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "meld-progress-stats", children: y ? /* @__PURE__ */ d.jsxs("span", { children: [
            "Processing relations: ",
            n.progress.current,
            " /",
            " ",
            n.progress.total
          ] }) : /* @__PURE__ */ d.jsxs("span", { children: [
            n.progress.current,
            " / ",
            n.progress.total
          ] }) }),
          /* @__PURE__ */ d.jsxs("div", { className: "meld-scan-actions", children: [
            /* @__PURE__ */ d.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: k,
                children: "Run in Background"
              }
            ),
            /* @__PURE__ */ d.jsxs(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-danger",
                disabled: n.shouldCancel,
                onClick: m,
                children: [
                  /* @__PURE__ */ d.jsx(hp, { size: 16 }),
                  "Stop Scan"
                ]
              }
            )
          ] })
        ] }) : n.isFinished ? /* @__PURE__ */ d.jsxs("div", { className: "meld-scan-finished", children: [
          /* @__PURE__ */ d.jsx("div", { className: "meld-finished-icon", children: /* @__PURE__ */ d.jsx(op, { size: 64, color: "var(--meld-success)" }) }),
          /* @__PURE__ */ d.jsx("h3", { children: "Import Completed" }),
          /* @__PURE__ */ d.jsxs("p", { children: [
            "Successfully scanned ",
            /* @__PURE__ */ d.jsx("strong", { children: n.totalCount }),
            " ",
            "images.",
            /* @__PURE__ */ d.jsx("br", {}),
            "(",
            /* @__PURE__ */ d.jsx("strong", { children: n.newCount }),
            " new images were added to database)"
          ] }),
          /* @__PURE__ */ d.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              className: "meld-btn meld-btn-primary",
              onClick: k,
              style: { minWidth: "120px" },
              children: "Close"
            }
          ) })
        ] }) : /* @__PURE__ */ d.jsxs("div", { className: "meld-import-container", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "meld-import-sidebar", children: [
            /* @__PURE__ */ d.jsxs("div", { className: "meld-form-group", children: [
              /* @__PURE__ */ d.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
              /* @__PURE__ */ d.jsxs(
                "select",
                {
                  id: "base-location",
                  value: r.type,
                  onChange: (u) => l({
                    ...r,
                    type: u.target.value,
                    subfolder: ""
                  }),
                  children: [
                    /* @__PURE__ */ d.jsx("option", { value: "output", children: "Output Directory" }),
                    /* @__PURE__ */ d.jsx("option", { value: "input", children: "Input Directory" }),
                    /* @__PURE__ */ d.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                  ]
                }
              )
            ] }),
            r.type === "custom" ? /* @__PURE__ */ d.jsxs("div", { className: "meld-form-group", children: [
              /* @__PURE__ */ d.jsx("label", { htmlFor: "custom-path", children: "Absolute Path" }),
              /* @__PURE__ */ d.jsx(
                "input",
                {
                  id: "custom-path",
                  type: "text",
                  placeholder: "C:\\path\\to\\images or /path/to/images",
                  value: r.custom_path,
                  onChange: (u) => l({ ...r, custom_path: u.target.value })
                }
              )
            ] }) : /* @__PURE__ */ d.jsxs("div", { className: "meld-form-group", children: [
              /* @__PURE__ */ d.jsx("span", { className: "meld-form-label", children: "Current Path" }),
              /* @__PURE__ */ d.jsxs("div", { className: "meld-path-display", children: [
                /* @__PURE__ */ d.jsxs("span", { children: [
                  r.type,
                  "/"
                ] }),
                r.subfolder
              ] })
            ] }),
            /* @__PURE__ */ d.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ d.jsxs("label", { children: [
              /* @__PURE__ */ d.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.recursive,
                  onChange: (u) => l({ ...r, recursive: u.target.checked })
                }
              ),
              "Recursive Scan"
            ] }) }),
            /* @__PURE__ */ d.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ d.jsxs("label", { children: [
              /* @__PURE__ */ d.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.auto_link_parent,
                  onChange: (u) => l({
                    ...r,
                    auto_link_parent: u.target.checked
                  })
                }
              ),
              "Auto Link Parent"
            ] }) }),
            /* @__PURE__ */ d.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ d.jsxs(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: v,
                style: { width: "100%" },
                children: [
                  /* @__PURE__ */ d.jsx(fp, { size: 16 }),
                  "Start Import"
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { className: "meld-import-browser", children: [
            r.type !== "custom" && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              /* @__PURE__ */ d.jsxs("div", { className: "meld-browser-header", children: [
                /* @__PURE__ */ d.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-browser-back",
                    disabled: !r.subfolder,
                    onClick: S,
                    children: [
                      /* @__PURE__ */ d.jsx(hc, { size: 16 }),
                      "Back"
                    ]
                  }
                ),
                /* @__PURE__ */ d.jsx("span", { className: "meld-browser-title", children: "Browse Folders" })
              ] }),
              /* @__PURE__ */ d.jsx("div", { className: "meld-folder-list", children: s ? /* @__PURE__ */ d.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : i.length === 0 ? /* @__PURE__ */ d.jsx("div", { className: "meld-browser-empty", children: "No subfolders found." }) : i.map((u) => /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: "meld-folder-item",
                  onClick: () => h(u),
                  children: [
                    /* @__PURE__ */ d.jsx(bs, { size: 16 }),
                    /* @__PURE__ */ d.jsx("span", { children: u }),
                    /* @__PURE__ */ d.jsx(vc, { size: 14 })
                  ]
                },
                u
              )) })
            ] }),
            r.type === "custom" && /* @__PURE__ */ d.jsxs("div", { className: "meld-browser-info", children: [
              /* @__PURE__ */ d.jsx(bs, { size: 48 }),
              /* @__PURE__ */ d.jsx("p", { children: "Please enter an absolute path in the sidebar." }),
              /* @__PURE__ */ d.jsx("span", { style: { fontSize: "11px", color: "#666" }, children: "Example: C:\\Users\\Me\\Pictures or /home/me/images" })
            ] })
          ] })
        ] }) })
      ]
    }
  ) });
}, Ip = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Dt(), [l, i] = L.useState([]), [o, s] = L.useState(!0), [a, f] = L.useState(!1), v = t.images.find((u) => u.id === e), m = L.useCallback(async () => {
    s(!0);
    try {
      const u = await Qf(e);
      i(u);
    } catch (u) {
      console.error("Failed to load suggestions:", u);
    } finally {
      s(!1);
    }
  }, [e]);
  L.useEffect(() => {
    m();
  }, [m]);
  const h = async (u) => {
    try {
      await Hf(e, u), await r(), n({ type: "CLOSE_MODAL" });
    } catch (c) {
      console.error("Failed to link parent:", c);
    }
  }, S = async (u) => {
    s(!0);
    try {
      const c = await Kf(u), { id: p } = await fc({
        filename: c.name,
        subfolder: c.subfolder || "",
        type: c.type || "input"
      });
      await h(p);
    } catch (c) {
      console.error("Failed to upload/register image:", c);
    } finally {
      s(!1);
    }
  }, k = (u) => {
    u.preventDefault(), u.stopPropagation(), f(!1);
    const c = u.dataTransfer.files[0];
    c != null && c.type.startsWith("image/") && S(c);
  };
  if (!v) return null;
  const y = l.filter((u) => u.is_source_match), I = l.filter((u) => !u.is_source_match);
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => n({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ d.jsxs("div", { className: "meld-modal-content", onClick: (u) => u.stopPropagation(), children: [
        /* @__PURE__ */ d.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ d.jsxs("h2", { children: [
            "Select Parent for #",
            v.id
          ] }),
          /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              className: "meld-modal-close",
              onClick: () => n({ type: "CLOSE_MODAL" }),
              children: /* @__PURE__ */ d.jsx(pn, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "meld-modal-body", children: [
          /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: `meld-drop-zone ${a ? "meld-drop-zone--active" : ""}`,
              onDragEnter: (u) => {
                u.preventDefault(), u.stopPropagation(), f(!0);
              },
              onDragOver: (u) => {
                u.preventDefault(), u.stopPropagation(), u.dataTransfer.dropEffect = "copy", f(!0);
              },
              onDragLeave: (u) => {
                u.preventDefault(), u.stopPropagation(), f(!1);
              },
              onDrop: k,
              children: [
                /* @__PURE__ */ d.jsx(yp, { size: 32 }),
                /* @__PURE__ */ d.jsx("p", { children: "Drop an image file here to set it as parent" })
              ]
            }
          ),
          o ? /* @__PURE__ */ d.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ d.jsxs("div", { className: "meld-suggestions-container", children: [
            y.length > 0 && /* @__PURE__ */ d.jsxs("section", { children: [
              /* @__PURE__ */ d.jsx("h3", { children: "Source Matches (from metadata)" }),
              /* @__PURE__ */ d.jsx("div", { className: "meld-suggestion-grid", children: y.map((u) => /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => h(u.id),
                  children: [
                    /* @__PURE__ */ d.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(u.filename)}&type=${u.type || "output"}${u.subfolder ? `&subfolder=${encodeURIComponent(u.subfolder)}` : ""}`,
                        alt: u.filename
                      }
                    ),
                    /* @__PURE__ */ d.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ d.jsx("span", { className: "meld-suggestion-filename", children: u.filename }) })
                  ]
                },
                u.id
              )) })
            ] }),
            /* @__PURE__ */ d.jsxs("section", { children: [
              /* @__PURE__ */ d.jsx("h3", { children: "Visual Matches (pHash)" }),
              I.length > 0 ? /* @__PURE__ */ d.jsx("div", { className: "meld-suggestion-grid", children: I.map((u) => /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => h(u.id),
                  children: [
                    /* @__PURE__ */ d.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(u.filename)}&type=${u.type || "output"}${u.subfolder ? `&subfolder=${encodeURIComponent(u.subfolder)}` : ""}`,
                        alt: u.filename
                      }
                    ),
                    /* @__PURE__ */ d.jsxs("div", { className: "meld-suggestion-info", children: [
                      /* @__PURE__ */ d.jsx("span", { className: "meld-suggestion-filename", children: u.filename }),
                      /* @__PURE__ */ d.jsxs("span", { className: "meld-suggestion-distance", children: [
                        "Match:",
                        " ",
                        Math.round((64 - u.distance) / 64 * 100),
                        "%"
                      ] })
                    ] })
                  ]
                },
                u.id
              )) }) : /* @__PURE__ */ d.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
            ] })
          ] })
        ] })
      ] })
    }
  );
}, Lp = () => {
  const { state: e, dispatch: t, updateSetting: n } = Dt(), r = [
    {
      key: "gallery.show_parent_image",
      label: "Show Parent Info",
      description: "Display parent image information and lineage link on image cards.",
      type: "boolean"
    }
  ], l = (i, o) => {
    n(i, !o);
  };
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => t({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ d.jsxs(
        "div",
        {
          className: "meld-modal-content meld-settings-modal",
          onClick: (i) => i.stopPropagation(),
          children: [
            /* @__PURE__ */ d.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ d.jsx("h2", { children: "Settings" }),
              /* @__PURE__ */ d.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-modal-close",
                  onClick: () => t({ type: "CLOSE_MODAL" }),
                  children: /* @__PURE__ */ d.jsx(pn, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ d.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ d.jsx("div", { className: "meld-settings-list", children: r.map((i) => /* @__PURE__ */ d.jsxs("div", { className: "meld-settings-item", children: [
              /* @__PURE__ */ d.jsxs("div", { className: "meld-settings-item__info", children: [
                /* @__PURE__ */ d.jsx("div", { className: "meld-settings-item__label", children: i.label }),
                /* @__PURE__ */ d.jsx("div", { className: "meld-settings-item__description", children: i.description })
              ] }),
              /* @__PURE__ */ d.jsx("div", { className: "meld-settings-item__control", children: i.type === "boolean" && /* @__PURE__ */ d.jsxs("label", { className: "meld-switch", children: [
                /* @__PURE__ */ d.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!e.settings[i.key],
                    onChange: () => l(i.key, !!e.settings[i.key])
                  }
                ),
                /* @__PURE__ */ d.jsx("span", { className: "meld-switch__slider" })
              ] }) })
            ] }, i.key)) }) })
          ]
        }
      )
    }
  );
}, Tp = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = Dt(), l = L.useRef(null);
  return ze.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), L.useEffect(() => {
    const i = new IntersectionObserver(
      (s) => {
        s[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (ze.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), o = l.current;
    return o && i.observe(o), () => {
      o && i.unobserve(o);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), /* @__PURE__ */ d.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
          gap: "15px"
        },
        children: [
          /* @__PURE__ */ d.jsxs(
            "button",
            {
              type: "button",
              onClick: () => t({ type: "OPEN_MODAL", payload: { type: "import" } }),
              style: {
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              },
              children: [
                /* @__PURE__ */ d.jsx(sp, { size: 14 }),
                "Import"
              ]
            }
          ),
          /* @__PURE__ */ d.jsxs(
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
                /* @__PURE__ */ d.jsx(
                  yc,
                  {
                    size: 14,
                    className: e.isLoading ? "animate-spin" : ""
                  }
                ),
                "Refresh"
              ]
            }
          ),
          /* @__PURE__ */ d.jsxs(
            "button",
            {
              type: "button",
              onClick: () => t({ type: "OPEN_MODAL", payload: { type: "settings" } }),
              style: {
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              },
              title: "Settings",
              children: [
                /* @__PURE__ */ d.jsx(mp, { size: 14 }),
                "Settings"
              ]
            }
          )
        ]
      }
    ),
    e.error && /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && e.images.length === 0 ? /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : e.images.length === 0 ? /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__list", children: e.images.map((i) => /* @__PURE__ */ d.jsx(Np, { image: i }, i.id)) }),
      /* @__PURE__ */ d.jsxs(
        "div",
        {
          ref: l,
          className: "meld-gallery__load-more",
          style: { height: "20px", margin: "20px 0", textAlign: "center" },
          children: [
            e.isLoading && /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
            !e.pagination.hasMore && e.images.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(Cp, {}),
    e.viewerImageId !== null && /* @__PURE__ */ d.jsx(jp, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ d.jsx(Ip, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ d.jsx(Pp, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ d.jsx(Lp, {})
  ] });
}, _l = document.createElement("link");
_l.rel = "stylesheet";
_l.type = "text/css";
_l.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(_l);
let _r = null, Te = null;
Sc.registerExtension({
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
      const n = await dc();
      ze.init(n.dev_mode), ze.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld-Flow] Failed to fetch settings", n), ze.init(!1);
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
      }, ee.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), ee.addEventListener("meld-nexus-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-progress", { detail: n.detail })
        );
      }), ee.addEventListener("meld-nexus-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-finished", { detail: n.detail })
        ), (r = e.ui.meldNexus) == null || r.refresh(), console.log("Meld Nexus: Import completed.");
      }), ee.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await fc({
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
          icon: "meld-nexus-icon",
          title: "Nexus",
          tooltip: "Meld Flow: Nexus",
          type: "custom",
          render: (n) => {
            ze.log("MeldNexus: render called", {
              el: n,
              galleryRoot: _r,
              galleryContainer: Te
            }), Te || (ze.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), Te = document.createElement("div"), Te.id = "meld-flow-gallery-container", Te.style.height = "100%", Te.style.width = "100%", Te.style.display = "flex", Te.style.flexDirection = "column"), n.contains(Te) || (ze.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(Te)), _r ? ze.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (ze.log("MeldNexus: Creating new gallery root"), _r = cc(Te), _r.render(
              Qo.createElement(
                _p,
                null,
                Qo.createElement(Tp)
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
