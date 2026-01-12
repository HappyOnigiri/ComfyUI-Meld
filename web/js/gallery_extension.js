import { api as b } from "../../../scripts/api.js";
import { app as Sc } from "../../../scripts/app.js";
function kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tu = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er = Symbol.for("react.element"), Ec = Symbol.for("react.portal"), _c = Symbol.for("react.fragment"), Cc = Symbol.for("react.strict_mode"), Nc = Symbol.for("react.profiler"), jc = Symbol.for("react.provider"), Ic = Symbol.for("react.context"), Pc = Symbol.for("react.forward_ref"), Lc = Symbol.for("react.suspense"), Tc = Symbol.for("react.memo"), Mc = Symbol.for("react.lazy"), Wo = Symbol.iterator;
function zc(e) {
  return e === null || typeof e != "object" ? null : (e = Wo && e[Wo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var nu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ru = Object.assign, lu = {};
function dn(e, t, n) {
  this.props = e, this.context = t, this.refs = lu, this.updater = n || nu;
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function iu() {
}
iu.prototype = dn.prototype;
function Ki(e, t, n) {
  this.props = e, this.context = t, this.refs = lu, this.updater = n || nu;
}
var Yi = Ki.prototype = new iu();
Yi.constructor = Ki;
ru(Yi, dn.prototype);
Yi.isPureReactComponent = !0;
var Ho = Array.isArray, ou = Object.prototype.hasOwnProperty, Xi = { current: null }, su = { key: !0, ref: !0, __self: !0, __source: !0 };
function uu(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) ou.call(t, r) && !su.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), f = 0; f < s; f++) a[f] = arguments[f + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
  return { $$typeof: er, type: e, key: i, ref: o, props: l, _owner: Xi.current };
}
function Rc(e, t) {
  return { $$typeof: er, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === er;
}
function Oc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Qo = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Oc("" + e.key) : t.toString(36);
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
        case Ec:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Il(o, 0) : r, Ho(l) ? (n = "", e != null && (n = e.replace(Qo, "$&/") + "/"), Cr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (Zi(l) && (l = Rc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Qo, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ho(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var a = r + Il(i, s);
    o += Cr(i, t, n, a, l);
  }
  else if (a = zc(e), typeof a == "function") for (e = a.call(e), s = 0; !(i = e.next()).done; ) i = i.value, a = r + Il(i, s++), o += Cr(i, t, n, a, l);
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
function Dc(e) {
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
var ce = { current: null }, Nr = { transition: null }, Fc = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Nr, ReactCurrentOwner: Xi };
function au() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = { map: sr, forEach: function(e, t, n) {
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
  if (!Zi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = dn;
z.Fragment = _c;
z.Profiler = Nc;
z.PureComponent = Ki;
z.StrictMode = Cc;
z.Suspense = Lc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fc;
z.act = au;
z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ru({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Xi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) ou.call(t, a) && !su.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
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
z.createContext = function(e) {
  return e = { $$typeof: Ic, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: jc, _context: e }, e.Consumer = e;
};
z.createElement = uu;
z.createFactory = function(e) {
  var t = uu.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: Pc, render: e };
};
z.isValidElement = Zi;
z.lazy = function(e) {
  return { $$typeof: Mc, _payload: { _status: -1, _result: e }, _init: Dc };
};
z.memo = function(e, t) {
  return { $$typeof: Tc, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = t;
  }
};
z.unstable_act = au;
z.useCallback = function(e, t) {
  return ce.current.useCallback(e, t);
};
z.useContext = function(e) {
  return ce.current.useContext(e);
};
z.useDebugValue = function() {
};
z.useDeferredValue = function(e) {
  return ce.current.useDeferredValue(e);
};
z.useEffect = function(e, t) {
  return ce.current.useEffect(e, t);
};
z.useId = function() {
  return ce.current.useId();
};
z.useImperativeHandle = function(e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function(e, t) {
  return ce.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function(e, t) {
  return ce.current.useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return ce.current.useMemo(e, t);
};
z.useReducer = function(e, t, n) {
  return ce.current.useReducer(e, t, n);
};
z.useRef = function(e) {
  return ce.current.useRef(e);
};
z.useState = function(e) {
  return ce.current.useState(e);
};
z.useSyncExternalStore = function(e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function() {
  return ce.current.useTransition();
};
z.version = "18.3.1";
tu.exports = z;
var I = tu.exports;
const Go = /* @__PURE__ */ kc(I);
var cu = { exports: {} }, Se = {}, du = { exports: {} }, fu = {};
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
  function t(_, L) {
    var T = _.length;
    _.push(L);
    e: for (; 0 < T; ) {
      var G = T - 1 >>> 1, J = _[G];
      if (0 < l(J, L)) _[G] = L, _[T] = J, T = G;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var L = _[0], T = _.pop();
    if (T !== L) {
      _[0] = T;
      e: for (var G = 0, J = _.length, ir = J >>> 1; G < ir; ) {
        var kt = 2 * (G + 1) - 1, jl = _[kt], Et = kt + 1, or = _[Et];
        if (0 > l(jl, T)) Et < J && 0 > l(or, jl) ? (_[G] = or, _[Et] = T, G = Et) : (_[G] = jl, _[kt] = T, G = kt);
        else if (Et < J && 0 > l(or, T)) _[G] = or, _[Et] = T, G = Et;
        else break e;
      }
    }
    return L;
  }
  function l(_, L) {
    var T = _.sortIndex - L.sortIndex;
    return T !== 0 ? T : _.id - L.id;
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
  var a = [], f = [], g = 1, h = null, m = 3, x = !1, S = !1, v = !1, P = typeof setTimeout == "function" ? setTimeout : null, u = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var L = n(f); L !== null; ) {
      if (L.callback === null) r(f);
      else if (L.startTime <= _) r(f), L.sortIndex = L.expirationTime, t(a, L);
      else break;
      L = n(f);
    }
  }
  function y(_) {
    if (v = !1, p(_), !S) if (n(a) !== null) S = !0, Cl(k);
    else {
      var L = n(f);
      L !== null && Nl(y, L.startTime - _);
    }
  }
  function k(_, L) {
    S = !1, v && (v = !1, u(j), j = -1), x = !0;
    var T = m;
    try {
      for (p(L), h = n(a); h !== null && (!(h.expirationTime > L) || _ && !Le()); ) {
        var G = h.callback;
        if (typeof G == "function") {
          h.callback = null, m = h.priorityLevel;
          var J = G(h.expirationTime <= L);
          L = e.unstable_now(), typeof J == "function" ? h.callback = J : h === n(a) && r(a), p(L);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var ir = !0;
      else {
        var kt = n(f);
        kt !== null && Nl(y, kt.startTime - L), ir = !1;
      }
      return ir;
    } finally {
      h = null, m = T, x = !1;
    }
  }
  var C = !1, N = null, j = -1, W = 5, M = -1;
  function Le() {
    return !(e.unstable_now() - M < W);
  }
  function mn() {
    if (N !== null) {
      var _ = e.unstable_now();
      M = _;
      var L = !0;
      try {
        L = N(!0, _);
      } finally {
        L ? hn() : (C = !1, N = null);
      }
    } else C = !1;
  }
  var hn;
  if (typeof c == "function") hn = function() {
    c(mn);
  };
  else if (typeof MessageChannel < "u") {
    var Bo = new MessageChannel(), xc = Bo.port2;
    Bo.port1.onmessage = mn, hn = function() {
      xc.postMessage(null);
    };
  } else hn = function() {
    P(mn, 0);
  };
  function Cl(_) {
    N = _, C || (C = !0, hn());
  }
  function Nl(_, L) {
    j = P(function() {
      _(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    S || x || (S = !0, Cl(k));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(_) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = m;
    }
    var T = m;
    m = L;
    try {
      return _();
    } finally {
      m = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, L) {
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
    var T = m;
    m = _;
    try {
      return L();
    } finally {
      m = T;
    }
  }, e.unstable_scheduleCallback = function(_, L, T) {
    var G = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? G + T : G) : T = G, _) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = T + J, _ = { id: g++, callback: L, priorityLevel: _, startTime: T, expirationTime: J, sortIndex: -1 }, T > G ? (_.sortIndex = T, t(f, _), n(a) === null && _ === n(f) && (v ? (u(j), j = -1) : v = !0, Nl(y, T - G))) : (_.sortIndex = J, t(a, _), S || x || (S = !0, Cl(k))), _;
  }, e.unstable_shouldYield = Le, e.unstable_wrapCallback = function(_) {
    var L = m;
    return function() {
      var T = m;
      m = L;
      try {
        return _.apply(this, arguments);
      } finally {
        m = T;
      }
    };
  };
})(fu);
du.exports = fu;
var Ac = du.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc = I, xe = Ac;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var pu = /* @__PURE__ */ new Set(), Fn = {};
function Dt(e, t) {
  rn(e, t), rn(e + "Capture", t);
}
function rn(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) pu.add(t[e]);
}
var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ei = Object.prototype.hasOwnProperty, $c = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ko = {}, Yo = {};
function Vc(e) {
  return ei.call(Yo, e) ? !0 : ei.call(Ko, e) ? !1 : $c.test(e) ? Yo[e] = !0 : (Ko[e] = !0, !1);
}
function Bc(e, t, n, r) {
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
function Wc(e, t, n, r) {
  if (t === null || typeof t > "u" || Bc(e, t, n, r)) return !0;
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
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  re[e] = new de(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  re[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  re[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  re[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  re[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  re[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  re[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  re[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  re[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ji = /[\-:]([a-z])/g;
function qi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ji,
    qi
  );
  re[t] = new de(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ji, qi);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ji, qi);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bi(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Wc(t, n, l, r) && (n = null), r || l === null ? Vc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var be = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ur = Symbol.for("react.element"), Ut = Symbol.for("react.portal"), $t = Symbol.for("react.fragment"), eo = Symbol.for("react.strict_mode"), ti = Symbol.for("react.profiler"), mu = Symbol.for("react.provider"), hu = Symbol.for("react.context"), to = Symbol.for("react.forward_ref"), ni = Symbol.for("react.suspense"), ri = Symbol.for("react.suspense_list"), no = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), gu = Symbol.for("react.offscreen"), Xo = Symbol.iterator;
function gn(e) {
  return e === null || typeof e != "object" ? null : (e = Xo && e[Xo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, Pl;
function _n(e) {
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
function Hc(e) {
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
    case $t:
      return "Fragment";
    case Ut:
      return "Portal";
    case ti:
      return "Profiler";
    case eo:
      return "StrictMode";
    case ni:
      return "Suspense";
    case ri:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case hu:
      return (e.displayName || "Context") + ".Consumer";
    case mu:
      return (e._context.displayName || "Context") + ".Provider";
    case to:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case no:
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
function Qc(e) {
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
      return t === eo ? "StrictMode" : "Mode";
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
function yu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Gc(e) {
  var t = yu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Gc(e));
}
function vu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = yu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
function Zo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function wu(e, t) {
  t = t.checked, t != null && bi(e, "checked", t, !1);
}
function oi(e, t) {
  wu(e, t);
  var n = ht(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? si(e, t.type, n) : t.hasOwnProperty("defaultValue") && si(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Jo(e, t, n) {
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
function Jt(e, t, n, r) {
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
function qo(e, t) {
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
function xu(e, t) {
  var n = ht(t.value), r = ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function bo(e) {
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
var In = {
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
}, Kc = ["Webkit", "ms", "Moz", "O"];
Object.keys(In).forEach(function(e) {
  Kc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), In[t] = In[e];
  });
});
function Eu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px";
}
function _u(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Eu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Yc = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ci(e, t) {
  if (t) {
    if (Yc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
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
function ro(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var pi = null, qt = null, bt = null;
function es(e) {
  if (e = rr(e)) {
    if (typeof pi != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = fl(t), pi(e.stateNode, e.type, t));
  }
}
function Cu(e) {
  qt ? bt ? bt.push(e) : bt = [e] : qt = e;
}
function Nu() {
  if (qt) {
    var e = qt, t = bt;
    if (bt = qt = null, es(e), t) for (e = 0; e < t.length; e++) es(t[e]);
  }
}
function ju(e, t) {
  return e(t);
}
function Iu() {
}
var Ml = !1;
function Pu(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return ju(e, t, n);
  } finally {
    Ml = !1, (qt !== null || bt !== null) && (Iu(), Nu());
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
if (Xe) try {
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
  } catch (g) {
    this.onError(g);
  }
}
var Pn = !1, Ar = null, Ur = !1, hi = null, Zc = { onError: function(e) {
  Pn = !0, Ar = e;
} };
function Jc(e, t, n, r, l, i, o, s, a) {
  Pn = !1, Ar = null, Xc.apply(Zc, arguments);
}
function qc(e, t, n, r, l, i, o, s, a) {
  if (Jc.apply(this, arguments), Pn) {
    if (Pn) {
      var f = Ar;
      Pn = !1, Ar = null;
    } else throw Error(w(198));
    Ur || (Ur = !0, hi = f);
  }
}
function Ft(e) {
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
function Lu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ts(e) {
  if (Ft(e) !== e) throw Error(w(188));
}
function bc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ft(e), t === null) throw Error(w(188));
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
        if (i === n) return ts(l), e;
        if (i === r) return ts(l), t;
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
function Tu(e) {
  return e = bc(e), e !== null ? Mu(e) : null;
}
function Mu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zu = xe.unstable_scheduleCallback, ns = xe.unstable_cancelCallback, ed = xe.unstable_shouldYield, td = xe.unstable_requestPaint, K = xe.unstable_now, nd = xe.unstable_getCurrentPriorityLevel, lo = xe.unstable_ImmediatePriority, Ru = xe.unstable_UserBlockingPriority, $r = xe.unstable_NormalPriority, rd = xe.unstable_LowPriority, Ou = xe.unstable_IdlePriority, ul = null, Be = null;
function ld(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function") try {
    Be.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var De = Math.clz32 ? Math.clz32 : sd, id = Math.log, od = Math.LN2;
function sd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (id(e) / od | 0) | 0;
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
function ud(e, t) {
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
function ad(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - De(i), s = 1 << o, a = l[o];
    a === -1 ? (!(s & n) || s & r) && (l[o] = ud(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function gi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Du() {
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
function cd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - De(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function io(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Fu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Au, oo, Uu, $u, Vu, yi = !1, pr = [], st = null, ut = null, at = null, $n = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map(), rt = [], dd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rs(e, t) {
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
function vn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = rr(t), t !== null && oo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function fd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return st = vn(st, e, t, n, r, l), !0;
    case "dragenter":
      return ut = vn(ut, e, t, n, r, l), !0;
    case "mouseover":
      return at = vn(at, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return $n.set(i, vn($n.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Vn.set(i, vn(Vn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Bu(e) {
  var t = Nt(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Lu(n), t !== null) {
          e.blockedOn = t, Vu(e.priority, function() {
            Uu(n);
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
    var n = vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fi = r, n.target.dispatchEvent(r), fi = null;
    } else return t = rr(n), t !== null && oo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ls(e, t, n) {
  jr(e) && n.delete(t);
}
function pd() {
  yi = !1, st !== null && jr(st) && (st = null), ut !== null && jr(ut) && (ut = null), at !== null && jr(at) && (at = null), $n.forEach(ls), Vn.forEach(ls);
}
function wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yi || (yi = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, pd)));
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
  for (; 0 < rt.length && (n = rt[0], n.blockedOn === null); ) Bu(n), n.blockedOn === null && rt.shift();
}
var en = be.ReactCurrentBatchConfig, Br = !0;
function md(e, t, n, r) {
  var l = O, i = en.transition;
  en.transition = null;
  try {
    O = 1, so(e, t, n, r);
  } finally {
    O = l, en.transition = i;
  }
}
function hd(e, t, n, r) {
  var l = O, i = en.transition;
  en.transition = null;
  try {
    O = 4, so(e, t, n, r);
  } finally {
    O = l, en.transition = i;
  }
}
function so(e, t, n, r) {
  if (Br) {
    var l = vi(e, t, n, r);
    if (l === null) Wl(e, t, r, Wr, n), rs(e, r);
    else if (fd(l, e, t, n, r)) r.stopPropagation();
    else if (rs(e, r), t & 4 && -1 < dd.indexOf(e)) {
      for (; l !== null; ) {
        var i = rr(l);
        if (i !== null && Au(i), i = vi(e, t, n, r), i === null && Wl(e, t, r, Wr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Wl(e, t, r, null, n);
  }
}
var Wr = null;
function vi(e, t, n, r) {
  if (Wr = null, e = ro(r), e = Nt(e), e !== null) if (t = Ft(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Lu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Wr = e, null;
}
function Wu(e) {
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
      switch (nd()) {
        case lo:
          return 1;
        case Ru:
          return 4;
        case $r:
        case rd:
          return 16;
        case Ou:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null, uo = null, Ir = null;
function Hu() {
  if (Ir) return Ir;
  var e, t = uo, n = t.length, r, l = "value" in it ? it.value : it.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Ir = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Pr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function mr() {
  return !0;
}
function is() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? mr : is, this.isPropagationStopped = is, this;
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
var fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ao = ke(fn), nr = B({}, fn, { view: 0, detail: 0 }), gd = ke(nr), Rl, Ol, xn, al = B({}, nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: co, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xn && (xn && e.type === "mousemove" ? (Rl = e.screenX - xn.screenX, Ol = e.screenY - xn.screenY) : Ol = Rl = 0, xn = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ol;
} }), os = ke(al), yd = B({}, al, { dataTransfer: 0 }), vd = ke(yd), wd = B({}, nr, { relatedTarget: 0 }), Dl = ke(wd), xd = B({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sd = ke(xd), kd = B({}, fn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ed = ke(kd), _d = B({}, fn, { data: 0 }), ss = ke(_d), Cd = {
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
}, Nd = {
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
}, jd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Id(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jd[e]) ? !!t[e] : !1;
}
function co() {
  return Id;
}
var Pd = B({}, nr, { key: function(e) {
  if (e.key) {
    var t = Cd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Pr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: co, charCode: function(e) {
  return e.type === "keypress" ? Pr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ld = ke(Pd), Td = B({}, al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), us = ke(Td), Md = B({}, nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: co }), zd = ke(Md), Rd = B({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Od = ke(Rd), Dd = B({}, al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Fd = ke(Dd), Ad = [9, 13, 27, 32], fo = Xe && "CompositionEvent" in window, Ln = null;
Xe && "documentMode" in document && (Ln = document.documentMode);
var Ud = Xe && "TextEvent" in window && !Ln, Qu = Xe && (!fo || Ln && 8 < Ln && 11 >= Ln), as = " ", cs = !1;
function Gu(e, t) {
  switch (e) {
    case "keyup":
      return Ad.indexOf(t.keyCode) !== -1;
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
function Ku(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Vt = !1;
function $d(e, t) {
  switch (e) {
    case "compositionend":
      return Ku(t);
    case "keypress":
      return t.which !== 32 ? null : (cs = !0, as);
    case "textInput":
      return e = t.data, e === as && cs ? null : e;
    default:
      return null;
  }
}
function Vd(e, t) {
  if (Vt) return e === "compositionend" || !fo && Gu(e, t) ? (e = Hu(), Ir = uo = it = null, Vt = !1, e) : null;
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
      return Qu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bd[e.type] : t === "textarea";
}
function Yu(e, t, n, r) {
  Cu(r), t = Hr(t, "onChange"), 0 < t.length && (n = new ao("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Tn = null, Wn = null;
function Wd(e) {
  ia(e, 0);
}
function cl(e) {
  var t = Ht(e);
  if (vu(t)) return e;
}
function Hd(e, t) {
  if (e === "change") return t;
}
var Xu = !1;
if (Xe) {
  var Fl;
  if (Xe) {
    var Al = "oninput" in document;
    if (!Al) {
      var fs = document.createElement("div");
      fs.setAttribute("oninput", "return;"), Al = typeof fs.oninput == "function";
    }
    Fl = Al;
  } else Fl = !1;
  Xu = Fl && (!document.documentMode || 9 < document.documentMode);
}
function ps() {
  Tn && (Tn.detachEvent("onpropertychange", Zu), Wn = Tn = null);
}
function Zu(e) {
  if (e.propertyName === "value" && cl(Wn)) {
    var t = [];
    Yu(t, Wn, e, ro(e)), Pu(Wd, t);
  }
}
function Qd(e, t, n) {
  e === "focusin" ? (ps(), Tn = t, Wn = n, Tn.attachEvent("onpropertychange", Zu)) : e === "focusout" && ps();
}
function Gd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return cl(Wn);
}
function Kd(e, t) {
  if (e === "click") return cl(t);
}
function Yd(e, t) {
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
function ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hs(e, t) {
  var n = ms(e);
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
    n = ms(n);
  }
}
function Ju(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ju(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qu() {
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
function po(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Zd(e) {
  var t = qu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ju(n.ownerDocument.documentElement, n)) {
    if (r !== null && po(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = hs(n, i);
        var o = hs(
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
var Jd = Xe && "documentMode" in document && 11 >= document.documentMode, Bt = null, wi = null, Mn = null, xi = !1;
function gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xi || Bt == null || Bt !== Fr(r) || (r = Bt, "selectionStart" in r && po(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mn && Hn(Mn, r) || (Mn = r, r = Hr(wi, "onSelect"), 0 < r.length && (t = new ao("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Bt)));
}
function hr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Wt = { animationend: hr("Animation", "AnimationEnd"), animationiteration: hr("Animation", "AnimationIteration"), animationstart: hr("Animation", "AnimationStart"), transitionend: hr("Transition", "TransitionEnd") }, Ul = {}, bu = {};
Xe && (bu = document.createElement("div").style, "AnimationEvent" in window || (delete Wt.animationend.animation, delete Wt.animationiteration.animation, delete Wt.animationstart.animation), "TransitionEvent" in window || delete Wt.transitionend.transition);
function dl(e) {
  if (Ul[e]) return Ul[e];
  if (!Wt[e]) return e;
  var t = Wt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in bu) return Ul[e] = t[n];
  return e;
}
var ea = dl("animationend"), ta = dl("animationiteration"), na = dl("animationstart"), ra = dl("transitionend"), la = /* @__PURE__ */ new Map(), ys = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function vt(e, t) {
  la.set(e, t), Dt(t, [e]);
}
for (var $l = 0; $l < ys.length; $l++) {
  var Vl = ys[$l], qd = Vl.toLowerCase(), bd = Vl[0].toUpperCase() + Vl.slice(1);
  vt(qd, "on" + bd);
}
vt(ea, "onAnimationEnd");
vt(ta, "onAnimationIteration");
vt(na, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(ra, "onTransitionEnd");
rn("onMouseEnter", ["mouseout", "mouseover"]);
rn("onMouseLeave", ["mouseout", "mouseover"]);
rn("onPointerEnter", ["pointerout", "pointerover"]);
rn("onPointerLeave", ["pointerout", "pointerover"]);
Dt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ef = new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));
function vs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, qc(r, t, void 0, e), e.currentTarget = null;
}
function ia(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], a = s.instance, f = s.currentTarget;
        if (s = s.listener, a !== i && l.isPropagationStopped()) break e;
        vs(l, s, f), i = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], a = s.instance, f = s.currentTarget, s = s.listener, a !== i && l.isPropagationStopped()) break e;
        vs(l, s, f), i = a;
      }
    }
  }
  if (Ur) throw e = hi, Ur = !1, hi = null, e;
}
function F(e, t) {
  var n = t[Ci];
  n === void 0 && (n = t[Ci] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (oa(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), oa(n, e, r, t);
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Qn(e) {
  if (!e[gr]) {
    e[gr] = !0, pu.forEach(function(n) {
      n !== "selectionchange" && (ef.has(n) || Bl(n, !1, e), Bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gr] || (t[gr] = !0, Bl("selectionchange", !1, t));
  }
}
function oa(e, t, n, r) {
  switch (Wu(t)) {
    case 1:
      var l = md;
      break;
    case 4:
      l = hd;
      break;
    default:
      l = so;
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
        if (o = Nt(s), o === null) return;
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
    var f = i, g = ro(n), h = [];
    e: {
      var m = la.get(e);
      if (m !== void 0) {
        var x = ao, S = e;
        switch (e) {
          case "keypress":
            if (Pr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Ld;
            break;
          case "focusin":
            S = "focus", x = Dl;
            break;
          case "focusout":
            S = "blur", x = Dl;
            break;
          case "beforeblur":
          case "afterblur":
            x = Dl;
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
            x = os;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = zd;
            break;
          case ea:
          case ta:
          case na:
            x = Sd;
            break;
          case ra:
            x = Od;
            break;
          case "scroll":
            x = gd;
            break;
          case "wheel":
            x = Fd;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Ed;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = us;
        }
        var v = (t & 4) !== 0, P = !v && e === "scroll", u = v ? m !== null ? m + "Capture" : null : m;
        v = [];
        for (var c = f, p; c !== null; ) {
          p = c;
          var y = p.stateNode;
          if (p.tag === 5 && y !== null && (p = y, u !== null && (y = Un(c, u), y != null && v.push(Gn(c, y, p)))), P) break;
          c = c.return;
        }
        0 < v.length && (m = new x(m, S, null, n, g), h.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", m && n !== fi && (S = n.relatedTarget || n.fromElement) && (Nt(S) || S[Ze])) break e;
        if ((x || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window, x ? (S = n.relatedTarget || n.toElement, x = f, S = S ? Nt(S) : null, S !== null && (P = Ft(S), S !== P || S.tag !== 5 && S.tag !== 6) && (S = null)) : (x = null, S = f), x !== S)) {
          if (v = os, y = "onMouseLeave", u = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (v = us, y = "onPointerLeave", u = "onPointerEnter", c = "pointer"), P = x == null ? m : Ht(x), p = S == null ? m : Ht(S), m = new v(y, c + "leave", x, n, g), m.target = P, m.relatedTarget = p, y = null, Nt(g) === f && (v = new v(u, c + "enter", S, n, g), v.target = p, v.relatedTarget = P, y = v), P = y, x && S) t: {
            for (v = x, u = S, c = 0, p = v; p; p = At(p)) c++;
            for (p = 0, y = u; y; y = At(y)) p++;
            for (; 0 < c - p; ) v = At(v), c--;
            for (; 0 < p - c; ) u = At(u), p--;
            for (; c--; ) {
              if (v === u || u !== null && v === u.alternate) break t;
              v = At(v), u = At(u);
            }
            v = null;
          }
          else v = null;
          x !== null && ws(h, m, x, v, !1), S !== null && P !== null && ws(h, P, S, v, !0);
        }
      }
      e: {
        if (m = f ? Ht(f) : window, x = m.nodeName && m.nodeName.toLowerCase(), x === "select" || x === "input" && m.type === "file") var k = Hd;
        else if (ds(m)) if (Xu) k = Yd;
        else {
          k = Gd;
          var C = Qd;
        }
        else (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (k = Kd);
        if (k && (k = k(e, f))) {
          Yu(h, k, n, g);
          break e;
        }
        C && C(e, m, f), e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && si(m, "number", m.value);
      }
      switch (C = f ? Ht(f) : window, e) {
        case "focusin":
          (ds(C) || C.contentEditable === "true") && (Bt = C, wi = f, Mn = null);
          break;
        case "focusout":
          Mn = wi = Bt = null;
          break;
        case "mousedown":
          xi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xi = !1, gs(h, n, g);
          break;
        case "selectionchange":
          if (Jd) break;
        case "keydown":
        case "keyup":
          gs(h, n, g);
      }
      var N;
      if (fo) e: {
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
      else Vt ? Gu(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j && (Qu && n.locale !== "ko" && (Vt || j !== "onCompositionStart" ? j === "onCompositionEnd" && Vt && (N = Hu()) : (it = g, uo = "value" in it ? it.value : it.textContent, Vt = !0)), C = Hr(f, j), 0 < C.length && (j = new ss(j, e, null, n, g), h.push({ event: j, listeners: C }), N ? j.data = N : (N = Ku(n), N !== null && (j.data = N)))), (N = Ud ? $d(e, n) : Vd(e, n)) && (f = Hr(f, "onBeforeInput"), 0 < f.length && (g = new ss("onBeforeInput", "beforeinput", null, n, g), h.push({ event: g, listeners: f }), g.data = N));
    }
    ia(h, t);
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
function At(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ws(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, f = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && f !== null && (s = f, l ? (a = Un(n, i), a != null && o.unshift(Gn(n, a, s))) : l || (a = Un(n, i), a != null && o.push(Gn(n, a, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var tf = /\r\n?/g, nf = /\u0000|\uFFFD/g;
function xs(e) {
  return (typeof e == "string" ? e : "" + e).replace(tf, `
`).replace(nf, "");
}
function yr(e, t, n) {
  if (t = xs(t), xs(e) !== t && n) throw Error(w(425));
}
function Qr() {
}
var Si = null, ki = null;
function Ei(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _i = typeof setTimeout == "function" ? setTimeout : void 0, rf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ss = typeof Promise == "function" ? Promise : void 0, lf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ss < "u" ? function(e) {
  return Ss.resolve(null).then(e).catch(of);
} : _i;
function of(e) {
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
var pn = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + pn, Kn = "__reactProps$" + pn, Ze = "__reactContainer$" + pn, Ci = "__reactEvents$" + pn, sf = "__reactListeners$" + pn, uf = "__reactHandles$" + pn;
function Nt(e) {
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
function Ht(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function fl(e) {
  return e[Kn] || null;
}
var Ni = [], Qt = -1;
function wt(e) {
  return { current: e };
}
function A(e) {
  0 > Qt || (e.current = Ni[Qt], Ni[Qt] = null, Qt--);
}
function D(e, t) {
  Qt++, Ni[Qt] = e.current, e.current = t;
}
var gt = {}, se = wt(gt), me = wt(!1), Tt = gt;
function ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
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
function Es(e, t, n) {
  if (se.current !== gt) throw Error(w(168));
  D(se, t), D(me, n);
}
function sa(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Qc(e) || "Unknown", l));
  return B({}, n, r);
}
function Kr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gt, Tt = se.current, D(se, e), D(me, me.current), !0;
}
function _s(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = sa(e, t, Tt), r.__reactInternalMemoizedMergedChildContext = e, A(me), A(se), D(se, e)) : A(me), D(me, n);
}
var Qe = null, pl = !1, Ql = !1;
function ua(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
function af(e) {
  pl = !0, ua(e);
}
function xt() {
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
      throw Qe !== null && (Qe = Qe.slice(e + 1)), zu(lo, xt), l;
    } finally {
      O = t, Ql = !1;
    }
  }
  return null;
}
var Gt = [], Kt = 0, Yr = null, Xr = 0, _e = [], Ce = 0, Mt = null, Ge = 1, Ke = "";
function _t(e, t) {
  Gt[Kt++] = Xr, Gt[Kt++] = Yr, Yr = e, Xr = t;
}
function aa(e, t, n) {
  _e[Ce++] = Ge, _e[Ce++] = Ke, _e[Ce++] = Mt, Mt = e;
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
function mo(e) {
  e.return !== null && (_t(e, 1), aa(e, 1, 0));
}
function ho(e) {
  for (; e === Yr; ) Yr = Gt[--Kt], Gt[Kt] = null, Xr = Gt[--Kt], Gt[Kt] = null;
  for (; e === Mt; ) Mt = _e[--Ce], _e[Ce] = null, Ke = _e[--Ce], _e[Ce] = null, Ge = _e[--Ce], _e[Ce] = null;
}
var we = null, ve = null, U = !1, Oe = null;
function ca(e, t) {
  var n = Ne(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Cs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, we = e, ve = ct(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, we = e, ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mt !== null ? { id: Ge, overflow: Ke } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ne(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, we = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ii(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!Cs(e, t)) {
        if (ji(e)) throw Error(w(418));
        t = ct(n.nextSibling);
        var r = we;
        t && Cs(e, t) ? ca(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, we = e);
      }
    } else {
      if (ji(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, U = !1, we = e;
    }
  }
}
function Ns(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function vr(e) {
  if (e !== we) return !1;
  if (!U) return Ns(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ei(e.type, e.memoizedProps)), t && (t = ve)) {
    if (ji(e)) throw da(), Error(w(418));
    for (; t; ) ca(e, t), t = ct(t.nextSibling);
  }
  if (Ns(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ct(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = we ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function da() {
  for (var e = ve; e; ) e = ct(e.nextSibling);
}
function on() {
  ve = we = null, U = !1;
}
function go(e) {
  Oe === null ? Oe = [e] : Oe.push(e);
}
var cf = be.ReactCurrentBatchConfig;
function Sn(e, t, n) {
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
function js(e) {
  var t = e._init;
  return t(e._payload);
}
function fa(e) {
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
  function s(u, c, p, y) {
    return c === null || c.tag !== 6 ? (c = ql(p, u.mode, y), c.return = u, c) : (c = l(c, p), c.return = u, c);
  }
  function a(u, c, p, y) {
    var k = p.type;
    return k === $t ? g(u, c, p.props.children, y, p.key) : c !== null && (c.elementType === k || typeof k == "object" && k !== null && k.$$typeof === tt && js(k) === c.type) ? (y = l(c, p.props), y.ref = Sn(u, c, p), y.return = u, y) : (y = Dr(p.type, p.key, p.props, null, u.mode, y), y.ref = Sn(u, c, p), y.return = u, y);
  }
  function f(u, c, p, y) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = bl(p, u.mode, y), c.return = u, c) : (c = l(c, p.children || []), c.return = u, c);
  }
  function g(u, c, p, y, k) {
    return c === null || c.tag !== 7 ? (c = Lt(p, u.mode, y, k), c.return = u, c) : (c = l(c, p), c.return = u, c);
  }
  function h(u, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = ql("" + c, u.mode, p), c.return = u, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ur:
          return p = Dr(c.type, c.key, c.props, null, u.mode, p), p.ref = Sn(u, null, c), p.return = u, p;
        case Ut:
          return c = bl(c, u.mode, p), c.return = u, c;
        case tt:
          var y = c._init;
          return h(u, y(c._payload), p);
      }
      if (Cn(c) || gn(c)) return c = Lt(c, u.mode, p, null), c.return = u, c;
      wr(u, c);
    }
    return null;
  }
  function m(u, c, p, y) {
    var k = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return k !== null ? null : s(u, c, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ur:
          return p.key === k ? a(u, c, p, y) : null;
        case Ut:
          return p.key === k ? f(u, c, p, y) : null;
        case tt:
          return k = p._init, m(
            u,
            c,
            k(p._payload),
            y
          );
      }
      if (Cn(p) || gn(p)) return k !== null ? null : g(u, c, p, y, null);
      wr(u, p);
    }
    return null;
  }
  function x(u, c, p, y, k) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return u = u.get(p) || null, s(c, u, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ur:
          return u = u.get(y.key === null ? p : y.key) || null, a(c, u, y, k);
        case Ut:
          return u = u.get(y.key === null ? p : y.key) || null, f(c, u, y, k);
        case tt:
          var C = y._init;
          return x(u, c, p, C(y._payload), k);
      }
      if (Cn(y) || gn(y)) return u = u.get(p) || null, g(c, u, y, k, null);
      wr(c, y);
    }
    return null;
  }
  function S(u, c, p, y) {
    for (var k = null, C = null, N = c, j = c = 0, W = null; N !== null && j < p.length; j++) {
      N.index > j ? (W = N, N = null) : W = N.sibling;
      var M = m(u, N, p[j], y);
      if (M === null) {
        N === null && (N = W);
        break;
      }
      e && N && M.alternate === null && t(u, N), c = i(M, c, j), C === null ? k = M : C.sibling = M, C = M, N = W;
    }
    if (j === p.length) return n(u, N), U && _t(u, j), k;
    if (N === null) {
      for (; j < p.length; j++) N = h(u, p[j], y), N !== null && (c = i(N, c, j), C === null ? k = N : C.sibling = N, C = N);
      return U && _t(u, j), k;
    }
    for (N = r(u, N); j < p.length; j++) W = x(N, u, j, p[j], y), W !== null && (e && W.alternate !== null && N.delete(W.key === null ? j : W.key), c = i(W, c, j), C === null ? k = W : C.sibling = W, C = W);
    return e && N.forEach(function(Le) {
      return t(u, Le);
    }), U && _t(u, j), k;
  }
  function v(u, c, p, y) {
    var k = gn(p);
    if (typeof k != "function") throw Error(w(150));
    if (p = k.call(p), p == null) throw Error(w(151));
    for (var C = k = null, N = c, j = c = 0, W = null, M = p.next(); N !== null && !M.done; j++, M = p.next()) {
      N.index > j ? (W = N, N = null) : W = N.sibling;
      var Le = m(u, N, M.value, y);
      if (Le === null) {
        N === null && (N = W);
        break;
      }
      e && N && Le.alternate === null && t(u, N), c = i(Le, c, j), C === null ? k = Le : C.sibling = Le, C = Le, N = W;
    }
    if (M.done) return n(
      u,
      N
    ), U && _t(u, j), k;
    if (N === null) {
      for (; !M.done; j++, M = p.next()) M = h(u, M.value, y), M !== null && (c = i(M, c, j), C === null ? k = M : C.sibling = M, C = M);
      return U && _t(u, j), k;
    }
    for (N = r(u, N); !M.done; j++, M = p.next()) M = x(N, u, j, M.value, y), M !== null && (e && M.alternate !== null && N.delete(M.key === null ? j : M.key), c = i(M, c, j), C === null ? k = M : C.sibling = M, C = M);
    return e && N.forEach(function(mn) {
      return t(u, mn);
    }), U && _t(u, j), k;
  }
  function P(u, c, p, y) {
    if (typeof p == "object" && p !== null && p.type === $t && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ur:
          e: {
            for (var k = p.key, C = c; C !== null; ) {
              if (C.key === k) {
                if (k = p.type, k === $t) {
                  if (C.tag === 7) {
                    n(u, C.sibling), c = l(C, p.props.children), c.return = u, u = c;
                    break e;
                  }
                } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === tt && js(k) === C.type) {
                  n(u, C.sibling), c = l(C, p.props), c.ref = Sn(u, C, p), c.return = u, u = c;
                  break e;
                }
                n(u, C);
                break;
              } else t(u, C);
              C = C.sibling;
            }
            p.type === $t ? (c = Lt(p.props.children, u.mode, y, p.key), c.return = u, u = c) : (y = Dr(p.type, p.key, p.props, null, u.mode, y), y.ref = Sn(u, c, p), y.return = u, u = y);
          }
          return o(u);
        case Ut:
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
            c = bl(p, u.mode, y), c.return = u, u = c;
          }
          return o(u);
        case tt:
          return C = p._init, P(u, c, C(p._payload), y);
      }
      if (Cn(p)) return S(u, c, p, y);
      if (gn(p)) return v(u, c, p, y);
      wr(u, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(u, c.sibling), c = l(c, p), c.return = u, u = c) : (n(u, c), c = ql(p, u.mode, y), c.return = u, u = c), o(u)) : n(u, c);
  }
  return P;
}
var sn = fa(!0), pa = fa(!1), Zr = wt(null), Jr = null, Yt = null, yo = null;
function vo() {
  yo = Yt = Jr = null;
}
function wo(e) {
  var t = Zr.current;
  A(Zr), e._currentValue = t;
}
function Pi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function tn(e, t) {
  Jr = e, yo = Yt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (pe = !0), e.firstContext = null);
}
function Ie(e) {
  var t = e._currentValue;
  if (yo !== e) if (e = { context: e, memoizedValue: t, next: null }, Yt === null) {
    if (Jr === null) throw Error(w(308));
    Yt = e, Jr.dependencies = { lanes: 0, firstContext: e };
  } else Yt = Yt.next = e;
  return t;
}
var jt = null;
function xo(e) {
  jt === null ? jt = [e] : jt.push(e);
}
function ma(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, xo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Je(e, r);
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
function ha(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ye(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Je(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, xo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Je(e, n);
}
function Lr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n);
  }
}
function Is(e, t) {
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
    var g = e.alternate;
    g !== null && (g = g.updateQueue, s = g.lastBaseUpdate, s !== o && (s === null ? g.firstBaseUpdate = f : s.next = f, g.lastBaseUpdate = a));
  }
  if (i !== null) {
    var h = l.baseState;
    o = 0, g = f = a = null, s = i;
    do {
      var m = s.lane, x = s.eventTime;
      if ((r & m) === m) {
        g !== null && (g = g.next = {
          eventTime: x,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var S = e, v = s;
          switch (m = t, x = n, v.tag) {
            case 1:
              if (S = v.payload, typeof S == "function") {
                h = S.call(x, h, m);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = v.payload, m = typeof S == "function" ? S.call(x, h, m) : S, m == null) break e;
              h = B({}, h, m);
              break e;
            case 2:
              nt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [s] : m.push(s));
      } else x = { eventTime: x, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, g === null ? (f = g = x, a = h) : g = g.next = x, o |= m;
      if (s = s.next, s === null) {
        if (s = l.shared.pending, s === null) break;
        m = s, s = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (a = h), l.baseState = a, l.firstBaseUpdate = f, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Rt |= o, e.lanes = o, e.memoizedState = h;
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
var lr = {}, We = wt(lr), Yn = wt(lr), Xn = wt(lr);
function It(e) {
  if (e === lr) throw Error(w(174));
  return e;
}
function ko(e, t) {
  switch (D(Xn, t), D(Yn, e), D(We, lr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ai(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ai(t, e);
  }
  A(We), D(We, t);
}
function un() {
  A(We), A(Yn), A(Xn);
}
function ga(e) {
  It(Xn.current);
  var t = It(We.current), n = ai(t, e.type);
  t !== n && (D(Yn, e), D(We, n));
}
function Eo(e) {
  Yn.current === e && (A(We), A(Yn));
}
var $ = wt(0);
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
function _o() {
  for (var e = 0; e < Gl.length; e++) Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var Tr = be.ReactCurrentDispatcher, Kl = be.ReactCurrentBatchConfig, zt = 0, V = null, X = null, q = null, el = !1, zn = !1, Zn = 0, df = 0;
function le() {
  throw Error(w(321));
}
function Co(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function No(e, t, n, r, l, i) {
  if (zt = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Tr.current = e === null || e.memoizedState === null ? hf : gf, e = n(r, l), zn) {
    i = 0;
    do {
      if (zn = !1, Zn = 0, 25 <= i) throw Error(w(301));
      i += 1, q = X = null, t.updateQueue = null, Tr.current = yf, e = n(r, l);
    } while (zn);
  }
  if (Tr.current = tl, t = X !== null && X.next !== null, zt = 0, q = X = V = null, el = !1, t) throw Error(w(300));
  return e;
}
function jo() {
  var e = Zn !== 0;
  return Zn = 0, e;
}
function $e() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? V.memoizedState = q = e : q = q.next = e, q;
}
function Pe() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = q === null ? V.memoizedState : q.next;
  if (t !== null) q = t, X = e;
  else {
    if (e === null) throw Error(w(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, q === null ? V.memoizedState = q = e : q = q.next = e;
  }
  return q;
}
function Jn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yl(e) {
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
      var g = f.lane;
      if ((zt & g) === g) a !== null && (a = a.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var h = {
          lane: g,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        a === null ? (s = a = h, o = r) : a = a.next = h, V.lanes |= g, Rt |= g;
      }
      f = f.next;
    } while (f !== null && f !== i);
    a === null ? o = r : a.next = s, Ae(r, t.memoizedState) || (pe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
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
function ya() {
}
function va(e, t) {
  var n = V, r = Pe(), l = t(), i = !Ae(r.memoizedState, l);
  if (i && (r.memoizedState = l, pe = !0), r = r.queue, Io(Sa.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || q !== null && q.memoizedState.tag & 1) {
    if (n.flags |= 2048, qn(9, xa.bind(null, n, r, l, t), void 0, null), ee === null) throw Error(w(349));
    zt & 30 || wa(n, t, l);
  }
  return l;
}
function wa(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function xa(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ka(t) && Ea(e);
}
function Sa(e, t, n) {
  return n(function() {
    ka(t) && Ea(e);
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
function Ea(e) {
  var t = Je(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Ls(e) {
  var t = $e();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = mf.bind(null, V, e), [t.memoizedState, e];
}
function qn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function _a() {
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
    if (i = o.destroy, r !== null && Co(r, o.deps)) {
      l.memoizedState = qn(t, n, i, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = qn(1 | t, n, i, r);
}
function Ts(e, t) {
  return Mr(8390656, 8, e, t);
}
function Io(e, t) {
  return ml(2048, 8, e, t);
}
function Ca(e, t) {
  return ml(4, 2, e, t);
}
function Na(e, t) {
  return ml(4, 4, e, t);
}
function ja(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ia(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ml(4, 4, ja.bind(null, t, e), n);
}
function Po() {
}
function Pa(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Co(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function La(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Co(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ta(e, t, n) {
  return zt & 21 ? (Ae(n, t) || (n = Du(), V.lanes |= n, Rt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, pe = !0), e.memoizedState = n);
}
function ff(e, t) {
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
function Ma() {
  return Pe().memoizedState;
}
function pf(e, t, n) {
  var r = pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, za(e)) Ra(t, n);
  else if (n = ma(e, t, n, r), n !== null) {
    var l = ae();
    Fe(n, e, r, l), Oa(n, t, r);
  }
}
function mf(e, t, n) {
  var r = pt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (za(e)) Ra(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, s = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = s, Ae(s, o)) {
        var a = t.interleaved;
        a === null ? (l.next = l, xo(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = ma(e, t, l, r), n !== null && (l = ae(), Fe(n, e, r, l), Oa(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function Ra(e, t) {
  zn = el = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Oa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n);
  }
}
var tl = { readContext: Ie, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, hf = { readContext: Ie, useCallback: function(e, t) {
  return $e().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ie, useEffect: Ts, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Mr(
    4194308,
    4,
    ja.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = pf.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = $e();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ls, useDebugValue: Po, useDeferredValue: function(e) {
  return $e().memoizedState = e;
}, useTransition: function() {
  var e = Ls(!1), t = e[0];
  return e = ff.bind(null, e[1]), $e().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = $e();
  if (U) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), ee === null) throw Error(w(349));
    zt & 30 || wa(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Ts(Sa.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, qn(9, xa.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = $e(), t = ee.identifierPrefix;
  if (U) {
    var n = Ke, r = Ge;
    n = (r & ~(1 << 32 - De(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = df++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, gf = {
  readContext: Ie,
  useCallback: Pa,
  useContext: Ie,
  useEffect: Io,
  useImperativeHandle: Ia,
  useInsertionEffect: Ca,
  useLayoutEffect: Na,
  useMemo: La,
  useReducer: Yl,
  useRef: _a,
  useState: function() {
    return Yl(Jn);
  },
  useDebugValue: Po,
  useDeferredValue: function(e) {
    var t = Pe();
    return Ta(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Yl(Jn)[0], t = Pe().memoizedState;
    return [e, t];
  },
  useMutableSource: ya,
  useSyncExternalStore: va,
  useId: Ma,
  unstable_isNewReconciler: !1
}, yf = { readContext: Ie, useCallback: Pa, useContext: Ie, useEffect: Io, useImperativeHandle: Ia, useInsertionEffect: Ca, useLayoutEffect: Na, useMemo: La, useReducer: Xl, useRef: _a, useState: function() {
  return Xl(Jn);
}, useDebugValue: Po, useDeferredValue: function(e) {
  var t = Pe();
  return X === null ? t.memoizedState = e : Ta(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Xl(Jn)[0], t = Pe().memoizedState;
  return [e, t];
}, useMutableSource: ya, useSyncExternalStore: va, useId: Ma, unstable_isNewReconciler: !1 };
function ze(e, t) {
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
  return (e = e._reactInternals) ? Ft(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = pt(e), i = Ye(r, l);
  i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (Fe(t, e, l, r), Lr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = pt(e), i = Ye(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (Fe(t, e, l, r), Lr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ae(), r = pt(e), l = Ye(n, r);
  l.tag = 2, t != null && (l.callback = t), t = dt(e, l, r), t !== null && (Fe(t, e, r, n), Lr(t, e, r));
} };
function Ms(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Hn(n, r) || !Hn(l, i) : !0;
}
function Da(e, t, n) {
  var r = !1, l = gt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ie(i) : (l = he(t) ? Tt : se.current, r = t.contextTypes, i = (r = r != null) ? ln(e, l) : gt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function zs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Ti(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, So(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ie(i) : (i = he(t) ? Tt : se.current, l.context = ln(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Li(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && hl.enqueueReplaceState(l, l.state, null), qr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function an(e, t) {
  try {
    var n = "", r = t;
    do
      n += Hc(r), r = r.return;
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
var vf = typeof WeakMap == "function" ? WeakMap : Map;
function Fa(e, t, n) {
  n = Ye(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    rl || (rl = !0, Bi = r), Mi(e, t);
  }, n;
}
function Aa(e, t, n) {
  n = Ye(-1, n), n.tag = 3;
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
function Rs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Mf.bind(null, e, t, n), t.then(e, e));
}
function Os(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ds(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ye(-1, 1), t.tag = 2, dt(n, t, 1))), n.lanes |= 1), e);
}
var wf = be.ReactCurrentOwner, pe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? pa(t, null, n, r) : sn(t, e.child, n, r);
}
function Fs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return tn(t, l), r = No(e, t, n, r, i, l), n = jo(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (U && n && mo(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function As(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Fo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ua(e, t, i, r, l)) : (e = Dr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Hn, n(o, r) && e.ref === t.ref) return qe(e, t, l);
  }
  return t.flags |= 1, e = mt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ua(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Hn(i, r) && e.ref === t.ref) if (pe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (pe = !0);
    else return t.lanes = e.lanes, qe(e, t, l);
  }
  return zi(e, t, n, r, l);
}
function $a(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, D(Zt, ye), ye |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, D(Zt, ye), ye |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, D(Zt, ye), ye |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, D(Zt, ye), ye |= r;
  return ue(e, t, l, n), t.child;
}
function Va(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function zi(e, t, n, r, l) {
  var i = he(n) ? Tt : se.current;
  return i = ln(t, i), tn(t, l), n = No(e, t, n, r, i, l), r = jo(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (U && r && mo(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function Us(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    Kr(t);
  } else i = !1;
  if (tn(t, l), t.stateNode === null) zr(e, t), Da(t, n, r), Ti(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var a = o.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Ie(f) : (f = he(n) ? Tt : se.current, f = ln(t, f));
    var g = n.getDerivedStateFromProps, h = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || a !== f) && zs(t, o, r, f), nt = !1;
    var m = t.memoizedState;
    o.state = m, qr(t, r, o, l), a = t.memoizedState, s !== r || m !== a || me.current || nt ? (typeof g == "function" && (Li(t, n, g, r), a = t.memoizedState), (s = nt || Ms(t, n, s, r, m, a, f)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = f, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, ha(e, t), s = t.memoizedProps, f = t.type === t.elementType ? s : ze(t.type, s), o.props = f, h = t.pendingProps, m = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ie(a) : (a = he(n) ? Tt : se.current, a = ln(t, a));
    var x = n.getDerivedStateFromProps;
    (g = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== h || m !== a) && zs(t, o, r, a), nt = !1, m = t.memoizedState, o.state = m, qr(t, r, o, l);
    var S = t.memoizedState;
    s !== h || m !== S || me.current || nt ? (typeof x == "function" && (Li(t, n, x, r), S = t.memoizedState), (f = nt || Ms(t, n, f, r, m, S, a) || !1) ? (g || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, S, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), o.props = r, o.state = S, o.context = a, r = f) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ri(e, t, n, r, i, l);
}
function Ri(e, t, n, r, l, i) {
  Va(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && _s(t, n, !1), qe(e, t, i);
  r = t.stateNode, wf.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = sn(t, e.child, null, i), t.child = sn(t, null, s, i)) : ue(e, t, s, i), t.memoizedState = r.state, l && _s(t, n, !0), t.child;
}
function Ba(e) {
  var t = e.stateNode;
  t.pendingContext ? Es(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Es(e, t.context, !1), ko(e, t.containerInfo);
}
function $s(e, t, n, r, l) {
  return on(), go(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Di(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wa(e, t, n) {
  var r = t.pendingProps, l = $.current, i = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D($, l & 1), e === null)
    return Ii(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = vl(o, r, 0, null), e = Lt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Di(n), t.memoizedState = Oi, e) : Lo(t, o));
  if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return xf(e, t, o, r, s, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = mt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = mt(s, i) : (i = Lt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Di(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Oi, r;
  }
  return i = e.child, e = i.sibling, r = mt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Lo(e, t) {
  return t = vl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function xr(e, t, n, r) {
  return r !== null && go(r), sn(t, e.child, null, n), e = Lo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function xf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Zl(Error(w(422))), xr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = vl({ mode: "visible", children: r.children }, l, 0, null), i = Lt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && sn(t, e.child, null, o), t.child.memoizedState = Di(o), t.memoizedState = Oi, i);
  if (!(t.mode & 1)) return xr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(w(419)), r = Zl(i, r, void 0), xr(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, pe || s) {
    if (r = ee, r !== null) {
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
    return Do(), r = Zl(Error(w(421))), xr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ve = ct(l.nextSibling), we = t, U = !0, Oe = null, e !== null && (_e[Ce++] = Ge, _e[Ce++] = Ke, _e[Ce++] = Mt, Ge = e.id, Ke = e.overflow, Mt = t), t = Lo(t, r.children), t.flags |= 4096, t);
}
function Vs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pi(e.return, t, n);
}
function Jl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Ha(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ue(e, t, r.children, n), r = $.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Vs(e, n, t);
      else if (e.tag === 19) Vs(e, n, t);
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
  if (e !== null && (t.dependencies = e.dependencies), Rt |= t.lanes, !(n & t.childLanes)) return null;
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
      Ba(t), on();
      break;
    case 5:
      ga(t);
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
        return r.dehydrated !== null ? (D($, $.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wa(e, t, n) : (D($, $.current & 1), e = qe(e, t, n), e !== null ? e.sibling : null);
      D($, $.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ha(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D($, $.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, $a(e, t, n);
  }
  return qe(e, t, n);
}
var Qa, Fi, Ga, Ka;
Qa = function(e, t) {
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
Ga = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, It(We.current);
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
Ka = function(e, t, n, r) {
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
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function kf(e, t, n) {
  var r = t.pendingProps;
  switch (ho(t), t.tag) {
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
      return r = t.stateNode, un(), A(me), A(se), _o(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Oe !== null && (Qi(Oe), Oe = null))), Fi(e, t), ie(t), null;
    case 5:
      Eo(t);
      var l = It(Xn.current);
      if (n = t.type, e !== null && t.stateNode != null) Ga(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return ie(t), null;
        }
        if (e = It(We.current), vr(t)) {
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
              Zo(r, i), F("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, F("invalid", r);
              break;
            case "textarea":
              qo(r, i), F("invalid", r);
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
              ar(r), Jo(r, i, !0);
              break;
            case "textarea":
              ar(r), bo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Qr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Su(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ve] = t, e[Kn] = r, Qa(e, t, !1, !1), t.stateNode = e;
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
                Zo(e, r), l = ii(e, r), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), F("invalid", e);
                break;
              case "textarea":
                qo(e, r), l = ui(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            ci(n, l), s = l;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? _u(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ku(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && An(e, a) : typeof a == "number" && An(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Fn.hasOwnProperty(i) ? a != null && i === "onScroll" && F("scroll", e) : a != null && bi(e, i, a, o));
            }
            switch (n) {
              case "input":
                ar(e), Jo(e, r, !1);
                break;
              case "textarea":
                ar(e), bo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Jt(e, !!r.multiple, i, !1) : r.defaultValue != null && Jt(
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
      if (e && t.stateNode != null) Ka(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = It(Xn.current), It(We.current), vr(t)) {
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
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128)) da(), on(), t.flags |= 98560, i = !1;
        else if (i = vr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(w(317));
            i[Ve] = t;
          } else on(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ie(t), i = !1;
        } else Oe !== null && (Qi(Oe), Oe = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $.current & 1 ? Z === 0 && (Z = 3) : Do())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
    case 4:
      return un(), Fi(e, t), e === null && Qn(t.stateNode.containerInfo), ie(t), null;
    case 10:
      return wo(t.type._context), ie(t), null;
    case 17:
      return he(t.type) && Gr(), ie(t), null;
    case 19:
      if (A($), i = t.memoizedState, i === null) return ie(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) kn(i, !1);
      else {
        if (Z !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = br(e), o !== null) {
            for (t.flags |= 128, kn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return D($, $.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && K() > cn && (t.flags |= 128, r = !0, kn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = br(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U) return ie(t), null;
        } else 2 * K() - i.renderingStartTime > cn && n !== 1073741824 && (t.flags |= 128, r = !0, kn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = K(), t.sibling = null, n = $.current, D($, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
    case 22:
    case 23:
      return Oo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ye & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Ef(e, t) {
  switch (ho(t), t.tag) {
    case 1:
      return he(t.type) && Gr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return un(), A(me), A(se), _o(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Eo(t), null;
    case 13:
      if (A($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        on();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return A($), null;
    case 4:
      return un(), null;
    case 10:
      return wo(t.type._context), null;
    case 22:
    case 23:
      return Oo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sr = !1, oe = !1, _f = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function Xt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    H(e, t, r);
  }
  else n.current = null;
}
function Ai(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Bs = !1;
function Cf(e, t) {
  if (Si = Br, e = qu(), po(e)) {
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
        var o = 0, s = -1, a = -1, f = 0, g = 0, h = e, m = null;
        t: for (; ; ) {
          for (var x; h !== n || l !== 0 && h.nodeType !== 3 || (s = o + l), h !== i || r !== 0 && h.nodeType !== 3 || (a = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (x = h.firstChild) !== null; )
            m = h, h = x;
          for (; ; ) {
            if (h === e) break t;
            if (m === n && ++f === l && (s = o), m === i && ++g === r && (a = o), (x = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = x;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ki = { focusedElem: e, selectionRange: n }, Br = !1, E = t; E !== null; ) if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
  else for (; E !== null; ) {
    t = E;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var v = S.memoizedProps, P = S.memoizedState, u = t.stateNode, c = u.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ze(t.type, v), P);
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
    } catch (y) {
      H(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, E = e;
      break;
    }
    E = t.return;
  }
  return S = Bs, Bs = !1, S;
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
function gl(e, t) {
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
function Ya(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ya(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ve], delete t[Kn], delete t[Ci], delete t[sf], delete t[uf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ws(e) {
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
var te = null, Re = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) Za(e, t, n), n = n.sibling;
}
function Za(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function") try {
    Be.onCommitFiberUnmount(ul, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      oe || Xt(n, t);
    case 6:
      var r = te, l = Re;
      te = null, et(e, t, n), te = r, Re = l, te !== null && (Re ? (e = te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null && (Re ? (e = te, n = n.stateNode, e.nodeType === 8 ? Hl(e.parentNode, n) : e.nodeType === 1 && Hl(e, n), Bn(e)) : Hl(te, n.stateNode));
      break;
    case 4:
      r = te, l = Re, te = n.stateNode.containerInfo, Re = !0, et(e, t, n), te = r, Re = l;
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
        H(n, t, s);
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
function Hs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new _f()), t.forEach(function(r) {
      var l = Rf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            te = s.stateNode, Re = !1;
            break e;
          case 3:
            te = s.stateNode.containerInfo, Re = !0;
            break e;
          case 4:
            te = s.stateNode.containerInfo, Re = !0;
            break e;
        }
        s = s.return;
      }
      if (te === null) throw Error(w(160));
      Za(i, o, l), te = null, Re = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (f) {
      H(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ja(t, e), t = t.sibling;
}
function Ja(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Te(t, e), Ue(e), r & 4) {
        try {
          Rn(3, e, e.return), gl(3, e);
        } catch (v) {
          H(e, e.return, v);
        }
        try {
          Rn(5, e, e.return);
        } catch (v) {
          H(e, e.return, v);
        }
      }
      break;
    case 1:
      Te(t, e), Ue(e), r & 512 && n !== null && Xt(n, n.return);
      break;
    case 5:
      if (Te(t, e), Ue(e), r & 512 && n !== null && Xt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          An(l, "");
        } catch (v) {
          H(e, e.return, v);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && wu(l, i), di(s, o);
          var f = di(s, i);
          for (o = 0; o < a.length; o += 2) {
            var g = a[o], h = a[o + 1];
            g === "style" ? _u(l, h) : g === "dangerouslySetInnerHTML" ? ku(l, h) : g === "children" ? An(l, h) : bi(l, g, h, f);
          }
          switch (s) {
            case "input":
              oi(l, i);
              break;
            case "textarea":
              xu(l, i);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var x = i.value;
              x != null ? Jt(l, !!i.multiple, x, !1) : m !== !!i.multiple && (i.defaultValue != null ? Jt(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Jt(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Kn] = i;
        } catch (v) {
          H(e, e.return, v);
        }
      }
      break;
    case 6:
      if (Te(t, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(w(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (v) {
          H(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Te(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Bn(t.containerInfo);
      } catch (v) {
        H(e, e.return, v);
      }
      break;
    case 4:
      Te(t, e), Ue(e);
      break;
    case 13:
      Te(t, e), Ue(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (zo = K())), r & 4 && Hs(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (f = oe) || g, Te(t, e), oe = f) : Te(t, e), Ue(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !g && e.mode & 1) for (E = e, g = e.child; g !== null; ) {
          for (h = E = g; E !== null; ) {
            switch (m = E, x = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rn(4, m, m.return);
                break;
              case 1:
                Xt(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (v) {
                    H(r, n, v);
                  }
                }
                break;
              case 5:
                Xt(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Gs(h);
                  continue;
                }
            }
            x !== null ? (x.return = m, E = x) : Gs(h);
          }
          g = g.sibling;
        }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                l = h.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = h.stateNode, a = h.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Eu("display", o));
              } catch (v) {
                H(e, e.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (g === null) try {
              h.stateNode.nodeValue = f ? "" : h.memoizedProps;
            } catch (v) {
              H(e, e.return, v);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            g === h && (g = null), h = h.return;
          }
          g === h && (g = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Te(t, e), Ue(e), r & 4 && Hs(e);
      break;
    case 21:
      break;
    default:
      Te(
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
          var i = Ws(e);
          Vi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = Ws(e);
          $i(e, s, o);
          break;
        default:
          throw Error(w(161));
      }
    } catch (a) {
      H(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Nf(e, t, n) {
  E = e, qa(e);
}
function qa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Sr;
      if (!o) {
        var s = l.alternate, a = s !== null && s.memoizedState !== null || oe;
        s = Sr;
        var f = oe;
        if (Sr = o, (oe = a) && !f) for (E = l; E !== null; ) o = E, a = o.child, o.tag === 22 && o.memoizedState !== null ? Ks(l) : a !== null ? (a.return = o, E = a) : Ks(l);
        for (; i !== null; ) E = i, qa(i), i = i.sibling;
        E = l, Sr = s, oe = f;
      }
      Qs(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, E = i) : Qs(e);
  }
}
function Qs(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            oe || gl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !oe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
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
                var g = f.memoizedState;
                if (g !== null) {
                  var h = g.dehydrated;
                  h !== null && Bn(h);
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
      } catch (m) {
        H(t, t.return, m);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function Gs(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function Ks(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gl(4, t);
          } catch (a) {
            H(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              H(t, l, a);
            }
          }
          var i = t.return;
          try {
            Ui(t);
          } catch (a) {
            H(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ui(t);
          } catch (a) {
            H(t, o, a);
          }
      }
    } catch (a) {
      H(t, t.return, a);
    }
    if (t === e) {
      E = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, E = s;
      break;
    }
    E = t.return;
  }
}
var jf = Math.ceil, nl = be.ReactCurrentDispatcher, To = be.ReactCurrentOwner, je = be.ReactCurrentBatchConfig, R = 0, ee = null, Y = null, ne = 0, ye = 0, Zt = wt(0), Z = 0, bn = null, Rt = 0, yl = 0, Mo = 0, On = null, fe = null, zo = 0, cn = 1 / 0, He = null, rl = !1, Bi = null, ft = null, kr = !1, ot = null, ll = 0, Dn = 0, Wi = null, Rr = -1, Or = 0;
function ae() {
  return R & 6 ? K() : Rr !== -1 ? Rr : Rr = K();
}
function pt(e) {
  return e.mode & 1 ? R & 2 && ne !== 0 ? ne & -ne : cf.transition !== null ? (Or === 0 && (Or = Du()), Or) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wu(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < Dn) throw Dn = 0, Wi = null, Error(w(185));
  tr(e, n, r), (!(R & 2) || e !== ee) && (e === ee && (!(R & 2) && (yl |= n), Z === 4 && lt(e, ne)), ge(e, r), n === 1 && R === 0 && !(t.mode & 1) && (cn = K() + 500, pl && xt()));
}
function ge(e, t) {
  var n = e.callbackNode;
  ad(e, t);
  var r = Vr(e, e === ee ? ne : 0);
  if (r === 0) n !== null && ns(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ns(n), t === 1) e.tag === 0 ? af(Ys.bind(null, e)) : ua(Ys.bind(null, e)), lf(function() {
      !(R & 6) && xt();
    }), n = null;
    else {
      switch (Fu(r)) {
        case 1:
          n = lo;
          break;
        case 4:
          n = Ru;
          break;
        case 16:
          n = $r;
          break;
        case 536870912:
          n = Ou;
          break;
        default:
          n = $r;
      }
      n = oc(n, ba.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ba(e, t) {
  if (Rr = -1, Or = 0, R & 6) throw Error(w(327));
  var n = e.callbackNode;
  if (nn() && e.callbackNode !== n) return null;
  var r = Vr(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var i = tc();
    (ee !== e || ne !== t) && (He = null, cn = K() + 500, Pt(e, t));
    do
      try {
        Lf();
        break;
      } catch (s) {
        ec(e, s);
      }
    while (!0);
    vo(), nl.current = i, R = l, Y !== null ? t = 0 : (ee = null, ne = 0, t = Z);
  }
  if (t !== 0) {
    if (t === 2 && (l = gi(e), l !== 0 && (r = l, t = Hi(e, l))), t === 1) throw n = bn, Pt(e, 0), lt(e, r), ge(e, K()), n;
    if (t === 6) lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !If(l) && (t = il(e, r), t === 2 && (i = gi(e), i !== 0 && (r = i, t = Hi(e, i))), t === 1)) throw n = bn, Pt(e, 0), lt(e, r), ge(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Ct(e, fe, He);
          break;
        case 3:
          if (lt(e, r), (r & 130023424) === r && (t = zo + 500 - K(), 10 < t)) {
            if (Vr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ae(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = _i(Ct.bind(null, e, fe, He), t);
            break;
          }
          Ct(e, fe, He);
          break;
        case 4:
          if (lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - De(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * jf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _i(Ct.bind(null, e, fe, He), r);
            break;
          }
          Ct(e, fe, He);
          break;
        case 5:
          Ct(e, fe, He);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return ge(e, K()), e.callbackNode === n ? ba.bind(null, e) : null;
}
function Hi(e, t) {
  var n = On;
  return e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = fe, fe = n, t !== null && Qi(t)), e;
}
function Qi(e) {
  fe === null ? fe = e : fe.push.apply(fe, e);
}
function If(e) {
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
  for (t &= ~Mo, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - De(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ys(e) {
  if (R & 6) throw Error(w(327));
  nn();
  var t = Vr(e, 0);
  if (!(t & 1)) return ge(e, K()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gi(e);
    r !== 0 && (t = r, n = Hi(e, r));
  }
  if (n === 1) throw n = bn, Pt(e, 0), lt(e, t), ge(e, K()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ct(e, fe, He), ge(e, K()), null;
}
function Ro(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (cn = K() + 500, pl && xt());
  }
}
function Ot(e) {
  ot !== null && ot.tag === 0 && !(R & 6) && nn();
  var t = R;
  R |= 1;
  var n = je.transition, r = O;
  try {
    if (je.transition = null, O = 1, e) return e();
  } finally {
    O = r, je.transition = n, R = t, !(R & 6) && xt();
  }
}
function Oo() {
  ye = Zt.current, A(Zt);
}
function Pt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, rf(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (ho(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Gr();
        break;
      case 3:
        un(), A(me), A(se), _o();
        break;
      case 5:
        Eo(r);
        break;
      case 4:
        un();
        break;
      case 13:
        A($);
        break;
      case 19:
        A($);
        break;
      case 10:
        wo(r.type._context);
        break;
      case 22:
      case 23:
        Oo();
    }
    n = n.return;
  }
  if (ee = e, Y = e = mt(e.current, null), ne = ye = t, Z = 0, bn = null, Mo = yl = Rt = 0, fe = On = null, jt !== null) {
    for (t = 0; t < jt.length; t++) if (n = jt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    jt = null;
  }
  return e;
}
function ec(e, t) {
  do {
    var n = Y;
    try {
      if (vo(), Tr.current = tl, el) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        el = !1;
      }
      if (zt = 0, q = X = V = null, zn = !1, Zn = 0, To.current = null, n === null || n.return === null) {
        Z = 1, bn = t, Y = null;
        break;
      }
      e: {
        var i = e, o = n.return, s = n, a = t;
        if (t = ne, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var f = a, g = s, h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = g.alternate;
            m ? (g.updateQueue = m.updateQueue, g.memoizedState = m.memoizedState, g.lanes = m.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var x = Os(o);
          if (x !== null) {
            x.flags &= -257, Ds(x, o, s, i, t), x.mode & 1 && Rs(i, f, t), t = x, a = f;
            var S = t.updateQueue;
            if (S === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Rs(i, f, t), Do();
              break e;
            }
            a = Error(w(426));
          }
        } else if (U && s.mode & 1) {
          var P = Os(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), Ds(P, o, s, i, t), go(an(a, s));
            break e;
          }
        }
        i = a = an(a, s), Z !== 4 && (Z = 2), On === null ? On = [i] : On.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var u = Fa(i, a, t);
              Is(i, u);
              break e;
            case 1:
              s = a;
              var c = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ft === null || !ft.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = Aa(i, s, t);
                Is(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      rc(n);
    } catch (k) {
      t = k, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function tc() {
  var e = nl.current;
  return nl.current = tl, e === null ? tl : e;
}
function Do() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), ee === null || !(Rt & 268435455) && !(yl & 268435455) || lt(ee, ne);
}
function il(e, t) {
  var n = R;
  R |= 2;
  var r = tc();
  (ee !== e || ne !== t) && (He = null, Pt(e, t));
  do
    try {
      Pf();
      break;
    } catch (l) {
      ec(e, l);
    }
  while (!0);
  if (vo(), R = n, nl.current = r, Y !== null) throw Error(w(261));
  return ee = null, ne = 0, Z;
}
function Pf() {
  for (; Y !== null; ) nc(Y);
}
function Lf() {
  for (; Y !== null && !ed(); ) nc(Y);
}
function nc(e) {
  var t = ic(e.alternate, e, ye);
  e.memoizedProps = e.pendingProps, t === null ? rc(e) : Y = t, To.current = null;
}
function rc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ef(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Z = 6, Y = null;
        return;
      }
    } else if (n = kf(n, t, ye), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Ct(e, t, n) {
  var r = O, l = je.transition;
  try {
    je.transition = null, O = 1, Tf(e, t, n, r);
  } finally {
    je.transition = l, O = r;
  }
  return null;
}
function Tf(e, t, n, r) {
  do
    nn();
  while (ot !== null);
  if (R & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (cd(e, i), e === ee && (Y = ee = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0, oc($r, function() {
    return nn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = je.transition, je.transition = null;
    var o = O;
    O = 1;
    var s = R;
    R |= 4, To.current = null, Cf(e, n), Ja(n, e), Zd(ki), Br = !!Si, ki = Si = null, e.current = n, Nf(n), td(), R = s, O = o, je.transition = i;
  } else e.current = n;
  if (kr && (kr = !1, ot = e, ll = l), i = e.pendingLanes, i === 0 && (ft = null), ld(n.stateNode), ge(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (rl) throw rl = !1, e = Bi, Bi = null, e;
  return ll & 1 && e.tag !== 0 && nn(), i = e.pendingLanes, i & 1 ? e === Wi ? Dn++ : (Dn = 0, Wi = e) : Dn = 0, xt(), null;
}
function nn() {
  if (ot !== null) {
    var e = Fu(ll), t = je.transition, n = O;
    try {
      if (je.transition = null, O = 16 > e ? 16 : e, ot === null) var r = !1;
      else {
        if (e = ot, ot = null, ll = 0, R & 6) throw Error(w(331));
        var l = R;
        for (R |= 4, E = e.current; E !== null; ) {
          var i = E, o = i.child;
          if (E.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var f = s[a];
                for (E = f; E !== null; ) {
                  var g = E;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, g, i);
                  }
                  var h = g.child;
                  if (h !== null) h.return = g, E = h;
                  else for (; E !== null; ) {
                    g = E;
                    var m = g.sibling, x = g.return;
                    if (Ya(g), g === f) {
                      E = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = x, E = m;
                      break;
                    }
                    E = x;
                  }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var v = S.child;
                if (v !== null) {
                  S.child = null;
                  do {
                    var P = v.sibling;
                    v.sibling = null, v = P;
                  } while (v !== null);
                }
              }
              E = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, E = o;
          else e: for (; E !== null; ) {
            if (i = E, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Rn(9, i, i.return);
            }
            var u = i.sibling;
            if (u !== null) {
              u.return = i.return, E = u;
              break e;
            }
            E = i.return;
          }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          o = E;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, E = p;
          else e: for (o = c; E !== null; ) {
            if (s = E, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  gl(9, s);
              }
            } catch (k) {
              H(s, s.return, k);
            }
            if (s === o) {
              E = null;
              break e;
            }
            var y = s.sibling;
            if (y !== null) {
              y.return = s.return, E = y;
              break e;
            }
            E = s.return;
          }
        }
        if (R = l, xt(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
          Be.onPostCommitFiberRoot(ul, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, je.transition = t;
    }
  }
  return !1;
}
function Xs(e, t, n) {
  t = an(n, t), t = Fa(e, t, 1), e = dt(e, t, 1), t = ae(), e !== null && (tr(e, 1, t), ge(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) Xs(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Xs(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ft === null || !ft.has(r))) {
        e = an(n, e), e = Aa(t, e, 1), t = dt(t, e, 1), e = ae(), t !== null && (tr(t, 1, e), ge(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Mf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ae(), e.pingedLanes |= e.suspendedLanes & n, ee === e && (ne & n) === n && (Z === 4 || Z === 3 && (ne & 130023424) === ne && 500 > K() - zo ? Pt(e, 0) : Mo |= n), ge(e, t);
}
function lc(e, t) {
  t === 0 && (e.mode & 1 ? (t = fr, fr <<= 1, !(fr & 130023424) && (fr = 4194304)) : t = 1);
  var n = ae();
  e = Je(e, t), e !== null && (tr(e, t, n), ge(e, n));
}
function zf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), lc(e, n);
}
function Rf(e, t) {
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
  r !== null && r.delete(t), lc(e, n);
}
var ic;
ic = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || me.current) pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return pe = !1, Sf(e, t, n);
    pe = !!(e.flags & 131072);
  }
  else pe = !1, U && t.flags & 1048576 && aa(t, Xr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zr(e, t), e = t.pendingProps;
      var l = ln(t, se.current);
      tn(t, n), l = No(null, t, r, e, l, n);
      var i = jo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, he(r) ? (i = !0, Kr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, So(t), l.updater = hl, t.stateNode = l, l._reactInternals = t, Ti(t, r, e, n), t = Ri(null, t, r, !0, i, n)) : (t.tag = 0, U && i && mo(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Df(r), e = ze(r, e), l) {
          case 0:
            t = zi(null, t, r, e, n);
            break e;
          case 1:
            t = Us(null, t, r, e, n);
            break e;
          case 11:
            t = Fs(null, t, r, e, n);
            break e;
          case 14:
            t = As(null, t, r, ze(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), zi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Us(e, t, r, l, n);
    case 3:
      e: {
        if (Ba(t), e === null) throw Error(w(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, ha(e, t), qr(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = an(Error(w(423)), t), t = $s(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = an(Error(w(424)), t), t = $s(e, t, r, n, l);
          break e;
        } else for (ve = ct(t.stateNode.containerInfo.firstChild), we = t, U = !0, Oe = null, n = pa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (on(), r === l) {
            t = qe(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ga(t), e === null && Ii(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Ei(r, l) ? o = null : i !== null && Ei(r, i) && (t.flags |= 32), Va(e, t), ue(e, t, o, n), t.child;
    case 6:
      return e === null && Ii(t), null;
    case 13:
      return Wa(e, t, n);
    case 4:
      return ko(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sn(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Fs(e, t, r, l, n);
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
                  a = Ye(-1, n & -n), a.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var g = f.pending;
                    g === null ? a.next = a : (a.next = g.next, g.next = a), f.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Pi(
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
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Pi(o, n, t), o = i.sibling;
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
      return l = t.type, r = t.pendingProps.children, tn(t, n), l = Ie(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = ze(r, t.pendingProps), l = ze(r.type, l), As(e, t, r, l, n);
    case 15:
      return Ua(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), zr(e, t), t.tag = 1, he(r) ? (e = !0, Kr(t)) : e = !1, tn(t, n), Da(t, r, l), Ti(t, r, l, n), Ri(null, t, r, !0, e, n);
    case 19:
      return Ha(e, t, n);
    case 22:
      return $a(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function oc(e, t) {
  return zu(e, t);
}
function Of(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ne(e, t, n, r) {
  return new Of(e, t, n, r);
}
function Fo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Df(e) {
  if (typeof e == "function") return Fo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === to) return 11;
    if (e === no) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ne(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Dr(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Fo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case $t:
      return Lt(n.children, l, i, t);
    case eo:
      o = 8, l |= 8;
      break;
    case ti:
      return e = Ne(12, n, t, l | 2), e.elementType = ti, e.lanes = i, e;
    case ni:
      return e = Ne(13, n, t, l), e.elementType = ni, e.lanes = i, e;
    case ri:
      return e = Ne(19, n, t, l), e.elementType = ri, e.lanes = i, e;
    case gu:
      return vl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case mu:
          o = 10;
          break e;
        case hu:
          o = 9;
          break e;
        case to:
          o = 11;
          break e;
        case no:
          o = 14;
          break e;
        case tt:
          o = 16, r = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = Ne(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Lt(e, t, n, r) {
  return e = Ne(7, e, r, t), e.lanes = n, e;
}
function vl(e, t, n, r) {
  return e = Ne(22, e, r, t), e.elementType = gu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ql(e, t, n) {
  return e = Ne(6, e, null, t), e.lanes = n, e;
}
function bl(e, t, n) {
  return t = Ne(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ff(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zl(0), this.expirationTimes = zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ao(e, t, n, r, l, i, o, s, a) {
  return e = new Ff(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ne(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, So(i), e;
}
function Af(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ut, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function sc(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(w(170));
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
    if (he(n)) return sa(e, n, t);
  }
  return t;
}
function uc(e, t, n, r, l, i, o, s, a) {
  return e = Ao(n, r, !0, e, l, i, o, s, a), e.context = sc(null), n = e.current, r = ae(), l = pt(n), i = Ye(r, l), i.callback = t ?? null, dt(n, i, l), e.current.lanes = l, tr(e, l, r), ge(e, r), e;
}
function wl(e, t, n, r) {
  var l = t.current, i = ae(), o = pt(l);
  return n = sc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ye(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dt(l, t, o), e !== null && (Fe(e, l, o, i), Lr(e, l, o)), o;
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
function Zs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Uo(e, t) {
  Zs(e, t), (e = e.alternate) && Zs(e, t);
}
function Uf() {
  return null;
}
var ac = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function $o(e) {
  this._internalRoot = e;
}
xl.prototype.render = $o.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  wl(e, t, null, null);
};
xl.prototype.unmount = $o.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function() {
      wl(null, e, null, null);
    }), t[Ze] = null;
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = $u();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++) ;
    rt.splice(n, 0, e), n === 0 && Bu(e);
  }
};
function Vo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Sl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Js() {
}
function $f(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = ol(o);
        i.call(f);
      };
    }
    var o = uc(t, r, e, 0, null, !1, !1, "", Js);
    return e._reactRootContainer = o, e[Ze] = o.current, Qn(e.nodeType === 8 ? e.parentNode : e), Ot(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var f = ol(a);
      s.call(f);
    };
  }
  var a = Ao(e, 0, !1, null, null, !1, !1, "", Js);
  return e._reactRootContainer = a, e[Ze] = a.current, Qn(e.nodeType === 8 ? e.parentNode : e), Ot(function() {
    wl(t, a, n, r);
  }), a;
}
function kl(e, t, n, r, l) {
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
  } else o = $f(n, t, e, l, r);
  return ol(o);
}
Au = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 && (io(t, n | 1), ge(t, K()), !(R & 6) && (cn = K() + 500, xt()));
      }
      break;
    case 13:
      Ot(function() {
        var r = Je(e, 1);
        if (r !== null) {
          var l = ae();
          Fe(r, e, 1, l);
        }
      }), Uo(e, 1);
  }
};
oo = function(e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = ae();
      Fe(t, e, 134217728, n);
    }
    Uo(e, 134217728);
  }
};
Uu = function(e) {
  if (e.tag === 13) {
    var t = pt(e), n = Je(e, t);
    if (n !== null) {
      var r = ae();
      Fe(n, e, t, r);
    }
    Uo(e, t);
  }
};
$u = function() {
  return O;
};
Vu = function(e, t) {
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
            vu(r), oi(r, l);
          }
        }
      }
      break;
    case "textarea":
      xu(e, n);
      break;
    case "select":
      t = n.value, t != null && Jt(e, !!n.multiple, t, !1);
  }
};
ju = Ro;
Iu = Ot;
var Vf = { usingClientEntryPoint: !1, Events: [rr, Ht, fl, Cu, Nu, Ro] }, En = { findFiberByHostInstance: Nt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Bf = { bundleType: En.bundleType, version: En.version, rendererPackageName: En.rendererPackageName, rendererConfig: En.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Tu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: En.findFiberByHostInstance || Uf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Er.isDisabled && Er.supportsFiber) try {
    ul = Er.inject(Bf), Be = Er;
  } catch {
  }
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf;
Se.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vo(t)) throw Error(w(200));
  return Af(e, t, null, n);
};
Se.createRoot = function(e, t) {
  if (!Vo(e)) throw Error(w(299));
  var n = !1, r = "", l = ac;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ao(e, 1, !1, null, null, n, !1, r, l), e[Ze] = t.current, Qn(e.nodeType === 8 ? e.parentNode : e), new $o(t);
};
Se.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = Tu(t), e = e === null ? null : e.stateNode, e;
};
Se.flushSync = function(e) {
  return Ot(e);
};
Se.hydrate = function(e, t, n) {
  if (!Sl(t)) throw Error(w(200));
  return kl(null, e, t, !0, n);
};
Se.hydrateRoot = function(e, t, n) {
  if (!Vo(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = ac;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = uc(t, null, e, 1, n ?? null, l, !1, i, o), e[Ze] = t.current, Qn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new xl(t);
};
Se.render = function(e, t, n) {
  if (!Sl(t)) throw Error(w(200));
  return kl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function(e) {
  if (!Sl(e)) throw Error(w(40));
  return e._reactRootContainer ? (Ot(function() {
    kl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ze] = null;
    });
  }), !0) : !1;
};
Se.unstable_batchedUpdates = Ro;
Se.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Sl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return kl(e, t, n, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function cc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cc);
    } catch (e) {
      console.error(e);
    }
}
cc(), cu.exports = Se;
var Wf = cu.exports, dc, qs = Wf;
dc = qs.createRoot, qs.hydrateRoot;
window.api = b;
const bs = async (e = 0, t = 30, n = "") => {
  const r = await b.fetchApi(
    `/meld-nexus/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}`
  );
  if (!r.ok)
    throw new Error(`Failed to fetch images: ${r.statusText}`);
  return await r.json();
}, Hf = async (e) => {
  const t = await b.fetchApi(
    `/meld-nexus/suggest?query=${encodeURIComponent(e)}`
  );
  return t.ok ? await t.json() : [];
}, fc = async () => {
  const e = await b.fetchApi("/meld-nexus/settings");
  return e.ok ? await e.json() : {
    dev_mode: !1,
    "gallery.show_parent_image": !0,
    "gallery.hide_parent_images": !0
  };
}, Qf = async (e, t) => {
  if (!(await b.fetchApi("/meld-nexus/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Gf = async (e, t) => {
  if (!(await b.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Kf = async (e, t = 12) => {
  const n = await b.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, Yf = async (e) => {
  const t = await b.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, Xf = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await b.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Zf = async (e, t = !0) => {
  const n = await b.fetchApi("/meld-nexus/bulk-delete", {
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
}, pc = async (e) => {
  const t = await b.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, Jf = async (e, t) => {
  const n = await b.fetchApi(
    `/meld-nexus/folders?type=${e}&path=${encodeURIComponent(t)}`
  );
  return n.ok ? await n.json() : [];
}, qf = async (e) => {
  const t = await b.fetchApi("/meld-nexus/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, bf = async () => {
  if (!(await b.fetchApi("/meld-nexus/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
};
var mc = { exports: {} }, El = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ep = I, tp = Symbol.for("react.element"), np = Symbol.for("react.fragment"), rp = Object.prototype.hasOwnProperty, lp = ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) rp.call(t, r) && !ip.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: tp, type: e, key: i, ref: o, props: l, _owner: lp.current };
}
El.Fragment = np;
El.jsx = hc;
El.jsxs = hc;
mc.exports = El;
var d = mc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var op = {
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
const sp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Q = (e, t) => {
  const n = I.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: s = "",
      children: a,
      ...f
    }, g) => I.createElement(
      "svg",
      {
        ref: g,
        ...op,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${sp(e)}`, s].join(" "),
        ...f
      },
      [
        ...t.map(([h, m]) => I.createElement(h, m)),
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
const up = Q("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = Q("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = Q("Box", [
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
const dp = Q("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = Q("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = Q("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = Q("Download", [
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
const eu = Q("Folder", [
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
const pp = Q("Maximize", [
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
const mp = Q("Minimize", [
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
const hp = Q("MoreVertical", [
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
const gp = Q("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yp = Q("PlusCircle", [
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
const yc = Q("RefreshCw", [
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
const vc = Q("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = Q("Settings", [
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
const wp = Q("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = Q("Tag", [
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
const Sp = Q("Trash2", [
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
const kp = Q("Type", [
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
const Ep = Q("Upload", [
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
const yt = Q("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let sl = !1;
const _p = (e) => {
  sl = e, sl && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, Cp = (...e) => {
  sl && console.log("[Meld-Flow]", ...e);
}, Np = (...e) => {
  sl && console.warn("[Meld-Flow]", ...e);
}, jp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, Ee = {
  log: Cp,
  warn: Np,
  error: jp,
  init: _p
}, Ip = {
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
    "gallery.show_parent_image": !0,
    "gallery.hide_parent_images": !0
  },
  pagination: {
    total: 0,
    offset: 0,
    limit: 30,
    hasMore: !1
  },
  searchQuery: ""
};
function Pp(e, t) {
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
      const n = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (i) => i.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && i.has_children)
      );
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
      const n = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (i) => i.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && i.has_children)
      );
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
    case "SET_SEARCH_QUERY":
      return {
        ...e,
        searchQuery: t.payload
      };
    default:
      return e;
  }
}
const wc = I.createContext(void 0), Lp = ({
  children: e
}) => {
  const [t, n] = I.useReducer(Pp, Ip), r = I.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const s = await bs(
        0,
        t.pagination.limit,
        t.searchQuery
      );
      n({ type: "SET_IMAGES", payload: s });
    } catch (s) {
      n({
        type: "SET_ERROR",
        payload: s instanceof Error ? s.message : String(s)
      });
    }
  }, [t.pagination.limit, t.searchQuery]), l = I.useCallback(async () => {
    if (!(t.isLoading || !t.pagination.hasMore)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        const s = t.images.length, a = await bs(
          s,
          t.pagination.limit,
          t.searchQuery
        );
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
    t.images.length,
    t.searchQuery
  ]), i = I.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const s = Array.from(t.selectedIds), a = `Are you sure you want to delete the selected ${s.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(a)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await Zf(s, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (f) {
        n({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    }
  }, [t.selectedIds, r]), o = I.useCallback(
    async (s, a) => {
      try {
        await Qf(s, a), n({ type: "SET_SETTINGS", payload: { [s]: a } });
      } catch (f) {
        n({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    },
    []
  );
  return I.useEffect(() => {
    (async () => {
      try {
        const a = await fc();
        n({ type: "SET_SETTINGS", payload: a });
      } catch (a) {
        Ee.error("Failed to load settings", a);
      }
    })();
  }, []), I.useEffect(() => {
    const s = () => {
      r();
    }, a = (g) => {
      const h = g.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: h }
      });
    }, f = (g) => {
      const h = g.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: h.new_count || 0,
          totalCount: h.total_count || 0,
          progress: {
            current: h.total_count || t.scanStatus.progress.total,
            total: h.total_count || t.scanStatus.progress.total,
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
  }, [r, t.scanStatus.progress.total]), I.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ d.jsx(
    wc.Provider,
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
}, St = () => {
  const e = I.useContext(wc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Tp = () => {
  const { state: e, dispatch: t, deleteSelected: n } = St(), r = e.selectedIds.size;
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
            Sp,
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
          /* @__PURE__ */ d.jsx(yt, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, Mp = ({ image: e }) => {
  const { state: t, dispatch: n } = St(), r = t.selectedIds.has(e.id), [l, i] = I.useState(null), [o, s] = I.useState(!1), a = I.useRef(null);
  I.useEffect(() => {
    const u = (c) => {
      a.current && !a.current.contains(c.target) && s(!1);
    };
    return o && document.addEventListener("mousedown", u), () => {
      document.removeEventListener("mousedown", u);
    };
  }, [o]);
  const f = (u, c = 0) => {
    if (c >= 5) return [];
    const p = u.parent_id;
    if (!p && !u.parent_filename) return [];
    const y = p ? t.images.find((N) => N.id === p) : null;
    let k = null;
    if (y ? k = `/api/view?filename=${encodeURIComponent(y.filename)}&type=${y.type || "output"}${y.subfolder ? `&subfolder=${encodeURIComponent(y.subfolder)}` : ""}` : p && u.parent_filename && (k = `/api/view?filename=${encodeURIComponent(u.parent_filename)}&type=${u.parent_type || "output"}${u.parent_subfolder ? `&subfolder=${encodeURIComponent(u.parent_subfolder)}` : ""}`), !k && !y) return [];
    const C = {
      id: p || null,
      imgSrc: k
    };
    return y ? [C, ...f(y, c + 1)] : [C];
  }, g = f(e), h = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, m = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, x = (u) => {
    u.shiftKey ? (u.preventDefault(), u.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : u.ctrlKey || u.metaKey || t.selectedIds.size > 0 ? (u.preventDefault(), u.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, S = (u) => {
    u.shiftKey ? (u.preventDefault(), u.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, v = (u) => {
    (u.shiftKey || u.ctrlKey || u.metaKey || t.selectedIds.size > 0) && u.preventDefault();
  }, P = (u) => {
    (u.key === "Enter" || u.key === " ") && (u.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: S,
      onMouseDown: v,
      onKeyDown: P,
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
              children: /* @__PURE__ */ d.jsx(hp, { size: 16 })
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
                /* @__PURE__ */ d.jsx(yp, { size: 14 }),
                /* @__PURE__ */ d.jsx("span", { children: "Add source image" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ d.jsx(
          "img",
          {
            src: m,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: v,
            onClick: (u) => {
              u.stopPropagation(), x(u);
            }
          }
        ) }),
        /* @__PURE__ */ d.jsxs("div", { className: "meld-image-card__details", children: [
          /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__filename", children: h }),
          t.settings["gallery.show_parent_image"] && g.length > 0 && /* @__PURE__ */ d.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ d.jsx("div", { className: "meld-lineage-thumbs", children: g.map(
              (u, c) => u.imgSrc && /* @__PURE__ */ d.jsx(
                "img",
                {
                  src: u.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  onClick: (p) => {
                    p.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: { id: u.id || e.id, mode: "lineage" }
                    });
                  },
                  title: c === 0 ? "Source" : c === 1 ? "Grand-Source" : `Ancestor (S${c + 1})`,
                  alt: "source thumb"
                },
                u.id || c
              )
            ) })
          ] }),
          /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (u) => {
                u.stopPropagation(), i({
                  title: "Model",
                  text: e.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-label", children: "Model" }),
                /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
              ]
            }
          ),
          /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (u) => {
                u.stopPropagation(), i({
                  title: "Positive Prompt",
                  text: e.positive_prompt || e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-label", children: "Positive" }),
                /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
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
                  text: e.negative_prompt || e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-label", children: "Negative" }),
                /* @__PURE__ */ d.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
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
                      yt,
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
}, zp = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = St(), { viewerImageId: r, images: l, viewerMode: i, lineageImages: o } = e, [s, a] = I.useState(!1), [f, g] = I.useState(!1), h = i === "lineage" ? o : l.filter(
    (v) => v.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && v.has_children)
  ), m = (i === "lineage" && o.length > 0 ? o : l).find((v) => v.id === r), x = I.useCallback(
    (v) => {
      v && "stopPropagation" in v && v.stopPropagation(), document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch((P) => {
        console.error(
          `Error attempting to enable full-screen mode: ${P.message}`
        );
      });
    },
    []
  );
  if (I.useEffect(() => {
    if (i !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore)
      return;
    const v = h.findIndex(
      (P) => P.id === r
    );
    v !== -1 && v >= h.length - 15 && n();
  }, [
    r,
    h.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    h
  ]), I.useEffect(() => {
    const v = (u) => {
      r !== null && (u.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : u.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : u.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (u.key === "f" || u.key === "F") && x(u));
    }, P = () => {
      a(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", v), document.addEventListener("fullscreenchange", P), () => {
      window.removeEventListener("keydown", v), document.removeEventListener("fullscreenchange", P);
    };
  }, [r, t, x]), I.useEffect(() => {
    i === "lineage" && r !== null && o.length === 0 && (g(!0), Yf(r).then((v) => {
      t({ type: "SET_LINEAGE", payload: v });
    }).catch((v) => {
      console.error("Failed to fetch lineage:", v);
    }).finally(() => {
      g(!1);
    }));
  }, [i, r, o.length, t]), I.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), I.useEffect(() => {
    if (r !== null) {
      const v = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      v && v.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center"
      });
    }
  }, [r]), !m) return null;
  const S = `/api/view?filename=${encodeURIComponent(m.filename)}&type=${m.type || "output"}${m.subfolder ? `&subfolder=${encodeURIComponent(m.subfolder)}` : ""}`;
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
          onClick: (v) => v.stopPropagation(),
          children: [
            /* @__PURE__ */ d.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ d.jsx("div", { className: "meld-viewer-filename", children: m.filename }) }),
            /* @__PURE__ */ d.jsxs("div", { className: "meld-viewer-actions", children: [
              /* @__PURE__ */ d.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn",
                  onClick: x,
                  type: "button",
                  title: s ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                  children: s ? /* @__PURE__ */ d.jsx(mp, { size: 20 }) : /* @__PURE__ */ d.jsx(pp, { size: 20 })
                }
              ),
              /* @__PURE__ */ d.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                  onClick: () => t({ type: "CLOSE_VIEWER" }),
                  type: "button",
                  title: "Close (Esc)",
                  children: /* @__PURE__ */ d.jsx(yt, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ d.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--prev",
                onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ d.jsx(Gi, { size: 32 })
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
                children: /* @__PURE__ */ d.jsx(gc, { size: 32 })
              }
            ),
            !s && /* @__PURE__ */ d.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ d.jsxs("div", { className: "meld-viewer-thumbnails", children: [
              f ? /* @__PURE__ */ d.jsx("div", { style: { padding: "10px", color: "#888" }, children: "Loading lineage..." }) : h.map((v, P) => {
                const u = v.id === r, c = typeof m.parent_id == "number" && m.parent_id === v.id, p = typeof v.parent_id == "number" && v.parent_id === m.id, y = `/api/view?filename=${encodeURIComponent(v.filename)}&type=${v.type || "output"}${v.subfolder ? `&subfolder=${encodeURIComponent(v.subfolder)}` : ""}`;
                return /* @__PURE__ */ d.jsxs(
                  "div",
                  {
                    className: "meld-viewer-thumbnail-wrapper",
                    children: [
                      i === "lineage" && P > 0 && /* @__PURE__ */ d.jsx("div", { className: "meld-viewer-lineage-connector", children: /* @__PURE__ */ d.jsx(Gi, { size: 16 }) }),
                      /* @__PURE__ */ d.jsxs(
                        "div",
                        {
                          className: `meld-viewer-thumbnail ${u ? "meld-viewer-thumbnail--active" : ""} ${c ? "meld-viewer-thumbnail--parent" : ""} ${p ? "meld-viewer-thumbnail--child" : ""}`,
                          onClick: () => t({
                            type: "OPEN_VIEWER",
                            payload: { id: v.id, mode: i }
                          }),
                          children: [
                            /* @__PURE__ */ d.jsx("img", { src: y, alt: v.filename }),
                            (c || p) && /* @__PURE__ */ d.jsx(
                              "div",
                              {
                                className: `meld-viewer-thumbnail-relation-icon ${c ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
                                children: c ? /* @__PURE__ */ d.jsx(ap, { size: 12 }) : /* @__PURE__ */ d.jsx(up, { size: 12 })
                              }
                            ),
                            /* @__PURE__ */ d.jsx("div", { className: "meld-viewer-thumbnail-label-v2", children: u ? "Current" : c ? "Source" : p ? "Derivative" : "" })
                          ]
                        }
                      )
                    ]
                  },
                  v.id
                );
              }),
              i === "gallery" && e.isLoading && /* @__PURE__ */ d.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ d.jsx(yc, { className: "animate-spin", size: 20 }) })
            ] }) })
          ]
        }
      )
    }
  );
}, Rp = () => {
  const { state: e, dispatch: t } = St(), { scanStatus: n } = e, [r, l] = I.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0
  }), [i, o] = I.useState([]), [s, a] = I.useState(!1), f = I.useCallback(async () => {
    if (r.type !== "custom") {
      a(!0);
      try {
        const u = await Jf(r.type, r.subfolder);
        o(u);
      } catch (u) {
        console.error("Failed to load folders:", u);
      } finally {
        a(!1);
      }
    }
  }, [r.type, r.subfolder]);
  I.useEffect(() => {
    f();
  }, [f]);
  const g = async () => {
    try {
      await qf(r), t({
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
  }, h = async () => {
    try {
      await bf(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (u) {
      console.error("Failed to cancel scan:", u);
    }
  }, m = (u) => {
    const c = r.subfolder ? `${r.subfolder}/${u}` : u;
    l({ ...r, subfolder: c });
  }, x = () => {
    const u = r.subfolder.split("/");
    u.pop(), l({ ...r, subfolder: u.join("/") });
  }, S = () => {
    n.isFinished && t({ type: "SET_SCAN_STATUS", payload: { isFinished: !1 } }), t({ type: "CLOSE_MODAL" });
  }, v = n.progress.phase === "linking", P = v ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ d.jsx("div", { className: "meld-modal-overlay", onClick: S, children: /* @__PURE__ */ d.jsxs(
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
              onClick: S,
              children: /* @__PURE__ */ d.jsx(yt, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "meld-modal-body", children: n.isRunning ? /* @__PURE__ */ d.jsxs("div", { className: "meld-scan-progress", children: [
          /* @__PURE__ */ d.jsx("div", { className: "meld-scan-status-text", children: n.shouldCancel ? /* @__PURE__ */ d.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : v ? /* @__PURE__ */ d.jsx("span", { children: "Linking parent images..." }) : /* @__PURE__ */ d.jsx("span", { children: "Scanning images..." }) }),
          /* @__PURE__ */ d.jsx("div", { className: "meld-progress-container", children: /* @__PURE__ */ d.jsx(
            "div",
            {
              className: "meld-progress-bar",
              style: { width: `${P}%` }
            }
          ) }),
          /* @__PURE__ */ d.jsx("div", { className: "meld-progress-stats", children: v ? /* @__PURE__ */ d.jsxs("span", { children: [
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
                onClick: S,
                children: "Run in Background"
              }
            ),
            /* @__PURE__ */ d.jsxs(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-danger",
                disabled: n.shouldCancel,
                onClick: h,
                children: [
                  /* @__PURE__ */ d.jsx(wp, { size: 16 }),
                  "Stop Scan"
                ]
              }
            )
          ] })
        ] }) : n.isFinished ? /* @__PURE__ */ d.jsxs("div", { className: "meld-scan-finished", children: [
          /* @__PURE__ */ d.jsx("div", { className: "meld-finished-icon", children: /* @__PURE__ */ d.jsx(dp, { size: 64, color: "var(--meld-success)" }) }),
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
              onClick: S,
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
                onClick: g,
                style: { width: "100%" },
                children: [
                  /* @__PURE__ */ d.jsx(gp, { size: 16 }),
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
                    onClick: x,
                    children: [
                      /* @__PURE__ */ d.jsx(Gi, { size: 16 }),
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
                  onClick: () => m(u),
                  children: [
                    /* @__PURE__ */ d.jsx(eu, { size: 16 }),
                    /* @__PURE__ */ d.jsx("span", { children: u }),
                    /* @__PURE__ */ d.jsx(gc, { size: 14 })
                  ]
                },
                u
              )) })
            ] }),
            r.type === "custom" && /* @__PURE__ */ d.jsxs("div", { className: "meld-browser-info", children: [
              /* @__PURE__ */ d.jsx(eu, { size: 48 }),
              /* @__PURE__ */ d.jsx("p", { children: "Please enter an absolute path in the sidebar." }),
              /* @__PURE__ */ d.jsx("span", { style: { fontSize: "11px", color: "#666" }, children: "Example: C:\\Users\\Me\\Pictures or /home/me/images" })
            ] })
          ] })
        ] }) })
      ]
    }
  ) });
}, Op = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = St(), [l, i] = I.useState([]), [o, s] = I.useState(!0), [a, f] = I.useState(!1), g = t.images.find((u) => u.id === e), h = I.useCallback(async () => {
    s(!0);
    try {
      const u = await Kf(e);
      i(u);
    } catch (u) {
      console.error("Failed to load suggestions:", u);
    } finally {
      s(!1);
    }
  }, [e]);
  I.useEffect(() => {
    h();
  }, [h]);
  const m = async (u) => {
    try {
      await Gf(e, u), await r(), n({ type: "CLOSE_MODAL" });
    } catch (c) {
      console.error("Failed to link parent:", c);
    }
  }, x = async (u) => {
    s(!0);
    try {
      const c = await Xf(u), { id: p } = await pc({
        filename: c.name,
        subfolder: c.subfolder || "",
        type: c.type || "input"
      });
      await m(p);
    } catch (c) {
      console.error("Failed to upload/register image:", c);
    } finally {
      s(!1);
    }
  }, S = (u) => {
    u.preventDefault(), u.stopPropagation(), f(!1);
    const c = u.dataTransfer.files[0];
    c != null && c.type.startsWith("image/") && x(c);
  };
  if (!g) return null;
  const v = l.filter((u) => u.is_source_match), P = l.filter((u) => !u.is_source_match);
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => n({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ d.jsxs("div", { className: "meld-modal-content", onClick: (u) => u.stopPropagation(), children: [
        /* @__PURE__ */ d.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ d.jsxs("h2", { children: [
            "Select Source for #",
            g.id
          ] }),
          /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              className: "meld-modal-close",
              onClick: () => n({ type: "CLOSE_MODAL" }),
              children: /* @__PURE__ */ d.jsx(yt, { size: 20 })
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
              onDrop: S,
              children: [
                /* @__PURE__ */ d.jsx(Ep, { size: 32 }),
                /* @__PURE__ */ d.jsx("p", { children: "Drop an image file here to set it as source" })
              ]
            }
          ),
          o ? /* @__PURE__ */ d.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ d.jsxs("div", { className: "meld-suggestions-container", children: [
            v.length > 0 && /* @__PURE__ */ d.jsxs("section", { children: [
              /* @__PURE__ */ d.jsx("h3", { children: "Source Matches (from metadata)" }),
              /* @__PURE__ */ d.jsx("div", { className: "meld-suggestion-grid", children: v.map((u) => /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => m(u.id),
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
              P.length > 0 ? /* @__PURE__ */ d.jsx("div", { className: "meld-suggestion-grid", children: P.map((u) => /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => m(u.id),
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
}, Dp = () => {
  const { state: e, dispatch: t } = St(), [n, r] = I.useState(e.searchQuery), [l, i] = I.useState([]), [o, s] = I.useState(!1), [a, f] = I.useState(-1), g = I.useRef(null), h = I.useRef(null);
  I.useEffect(() => {
    r(e.searchQuery);
  }, [e.searchQuery]), I.useEffect(() => {
    var c;
    (c = g.current) == null || c.focus();
  }, []);
  const m = I.useCallback(
    (c) => {
      t({ type: "SET_SEARCH_QUERY", payload: c }), s(!1);
    },
    [t]
  );
  I.useEffect(() => {
    const c = setTimeout(async () => {
      if (n.trim().length >= 1) {
        const p = n.split(/\s+/), y = p[p.length - 1];
        if (y && !y.includes(":") && !y.startsWith('"')) {
          const k = await Hf(y);
          i(k), s(!0), f(-1);
        } else
          i([]), s(!1);
      } else
        i([]), s(!1);
    }, 300);
    return () => clearTimeout(c);
  }, [n]);
  const x = (c) => {
    c.key === "Enter" ? m(n) : c.key === "Tab" ? o && a >= 0 && (S(l[a]), c.preventDefault()) : c.key === "ArrowDown" ? o && (f((p) => Math.min(p + 1, l.length - 1)), c.preventDefault()) : c.key === "ArrowUp" ? o && (f((p) => Math.max(p - 1, -1)), c.preventDefault()) : c.key === "Escape" && s(!1);
  }, S = (c) => {
    var k;
    const p = n.split(/\s+/);
    p.pop();
    const y = `${[...p, `${c.type}:"${c.value}"`].join(" ").trim()} `;
    r(y), m(y), i([]), s(!1), (k = g.current) == null || k.focus();
  }, v = () => {
    r(""), m("");
  }, P = (c) => {
    switch (c) {
      case "tag":
        return /* @__PURE__ */ d.jsx(xp, { size: 12 });
      case "model":
        return /* @__PURE__ */ d.jsx(cp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ d.jsx(kp, { size: 12 });
      default:
        return null;
    }
  }, u = n.split(/\s+/).filter((c) => c.length > 0);
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: "meld-search-bar",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#1a1a1a",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    border: "1px solid #333",
                    transition: "border-color 0.2s",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)"
                  },
                  children: [
                    /* @__PURE__ */ d.jsx(
                      vc,
                      {
                        size: 18,
                        color: "#666",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "input",
                      {
                        ref: g,
                        type: "text",
                        value: n,
                        onChange: (c) => r(c.target.value),
                        onKeyDown: x,
                        onBlur: () => setTimeout(() => s(!1), 200),
                        onFocus: () => n.trim().length > 0 && s(!0),
                        placeholder: "Search by tag:value, model:name, or keywords...",
                        style: {
                          flex: 1,
                          background: "none",
                          border: "none",
                          color: "#fff",
                          outline: "none",
                          fontSize: "14px",
                          padding: "4px 0"
                        }
                      }
                    ),
                    n && /* @__PURE__ */ d.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: v,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ d.jsx(yt, { size: 16, color: "#666" })
                      }
                    )
                  ]
                }
              ),
              o && l.length > 0 && /* @__PURE__ */ d.jsx(
                "div",
                {
                  ref: h,
                  className: "meld-search-suggestions",
                  style: {
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    backgroundColor: "#222",
                    border: "1px solid #444",
                    borderRadius: "0 0 6px 6px",
                    zIndex: 1e3,
                    marginTop: "2px",
                    maxHeight: "400px",
                    overflowY: "auto",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.6)"
                  },
                  children: l.map((c, p) => /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      onMouseDown: (y) => {
                        y.preventDefault(), S(c);
                      },
                      onMouseEnter: () => f(p),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: p === a ? "#333" : "transparent",
                        borderBottom: "1px solid #2a2a2a"
                      },
                      children: [
                        /* @__PURE__ */ d.jsxs(
                          "div",
                          {
                            style: { display: "flex", alignItems: "center", gap: "10px" },
                            children: [
                              /* @__PURE__ */ d.jsx("span", { style: { color: "#888", display: "flex" }, children: P(c.type) }),
                              /* @__PURE__ */ d.jsx(
                                "span",
                                {
                                  style: {
                                    color: "#3b82f6",
                                    fontSize: "11px",
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    width: "45px"
                                  },
                                  children: c.type
                                }
                              ),
                              /* @__PURE__ */ d.jsx("span", { style: { color: "#eee", fontSize: "14px" }, children: c.value })
                            ]
                          }
                        ),
                        /* @__PURE__ */ d.jsxs("span", { style: { color: "#666", fontSize: "12px" }, children: [
                          c.count,
                          " images"
                        ] })
                      ]
                    },
                    `${c.type}:${c.value}`
                  ))
                }
              )
            ]
          }
        ),
        u.length > 0 && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "meld-search-chips",
            style: { display: "flex", flexWrap: "wrap", gap: "6px" },
            children: u.map((c, p) => {
              const y = c.includes(":"), k = c.startsWith('"') && c.endsWith('"');
              if (y || k) {
                const [C] = c.split(":");
                return /* @__PURE__ */ d.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      backgroundColor: "#1e3a5f",
                      border: "1px solid #3b82f6",
                      borderRadius: "4px",
                      padding: "2px 8px",
                      fontSize: "12px",
                      color: "#dbeafe"
                    },
                    children: [
                      y && /* @__PURE__ */ d.jsx("span", { style: { opacity: 0.7 }, children: P(C) }),
                      /* @__PURE__ */ d.jsx("span", { children: c }),
                      /* @__PURE__ */ d.jsx(
                        yt,
                        {
                          size: 12,
                          style: { cursor: "pointer", marginLeft: "4px" },
                          onClick: () => {
                            const j = u.filter((W, M) => M !== p).join(" ");
                            r(j), m(j);
                          }
                        }
                      )
                    ]
                  },
                  p
                );
              }
              return null;
            })
          }
        )
      ]
    }
  );
}, Fp = () => {
  const { state: e, dispatch: t, updateSetting: n } = St(), r = [
    {
      key: "gallery.show_parent_image",
      label: "Show Source Info",
      description: "Display source image information and lineage link on image cards.",
      type: "boolean"
    },
    {
      key: "gallery.hide_parent_images",
      label: "Hide Source Images",
      description: "Hide images that have been used as a basis for other images (sources).",
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
                  children: /* @__PURE__ */ d.jsx(yt, { size: 20 })
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
}, Ap = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = St(), [l, i] = I.useState(!1), o = I.useRef(null), s = e.images.filter(
    (a) => a.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && a.has_children)
  );
  return I.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && s.length === 0 && (Ee.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    s.length,
    r
  ]), Ee.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: s.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), I.useEffect(() => {
    const a = new IntersectionObserver(
      (g) => {
        g[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (Ee.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = o.current;
    return f && a.observe(f), () => {
      f && a.unobserve(f);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), /* @__PURE__ */ d.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          marginBottom: "15px",
          gap: "10px"
        },
        children: [
          /* @__PURE__ */ d.jsxs(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "flex-end",
                gap: "15px",
                flexShrink: 0,
                paddingTop: "4px"
              },
              children: [
                /* @__PURE__ */ d.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => i(!l),
                    style: {
                      background: "none",
                      border: "none",
                      color: l ? "#fff" : "#888",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px"
                    },
                    children: [
                      /* @__PURE__ */ d.jsx(vc, { size: 14 }),
                      "Search"
                    ]
                  }
                ),
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
                      /* @__PURE__ */ d.jsx(fp, { size: 14 }),
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
                      /* @__PURE__ */ d.jsx(vp, { size: 14 }),
                      "Settings"
                    ]
                  }
                )
              ]
            }
          ),
          l && /* @__PURE__ */ d.jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ d.jsx(Dp, {}) })
        ]
      }
    ),
    e.error && /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && s.length === 0 ? /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : s.length === 0 ? /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__list", children: s.map((a) => /* @__PURE__ */ d.jsx(Mp, { image: a }, a.id)) }),
      /* @__PURE__ */ d.jsxs(
        "div",
        {
          ref: o,
          className: "meld-gallery__load-more",
          style: { height: "20px", margin: "20px 0", textAlign: "center" },
          children: [
            e.isLoading && /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
            !e.pagination.hasMore && s.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(Tp, {}),
    e.viewerImageId !== null && /* @__PURE__ */ d.jsx(zp, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ d.jsx(Op, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ d.jsx(Rp, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ d.jsx(Fp, {})
  ] });
}, _l = document.createElement("link");
_l.rel = "stylesheet";
_l.type = "text/css";
_l.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(_l);
let _r = null, Me = null;
Sc.registerExtension({
  name: "ComfyUI.MeldNexus",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldNexusSaveImage") {
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
      const n = await fc();
      Ee.init(n.dev_mode), Ee.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld-Flow] Failed to fetch settings", n), Ee.init(!1);
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
      }, b.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), b.addEventListener("meld-nexus-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-progress", { detail: n.detail })
        );
      }), b.addEventListener("meld-nexus-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-finished", { detail: n.detail })
        ), (r = e.ui.meldNexus) == null || r.refresh(), console.log("Meld Nexus: Import completed.");
      }), b.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await pc({
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
            Ee.log("MeldNexus: render called", {
              el: n,
              galleryRoot: _r,
              galleryContainer: Me
            }), Me || (Ee.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), Me = document.createElement("div"), Me.id = "meld-flow-gallery-container", Me.style.height = "100%", Me.style.width = "100%", Me.style.display = "flex", Me.style.flexDirection = "column"), n.contains(Me) || (Ee.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(Me)), _r ? Ee.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (Ee.log("MeldNexus: Creating new gallery root"), _r = dc(Me), _r.render(
              Go.createElement(
                Lp,
                null,
                Go.createElement(Ap)
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
