import { api as ie } from "../../../scripts/api.js";
import { app as wc } from "../../../scripts/app.js";
function kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var es = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn = Symbol.for("react.element"), Sc = Symbol.for("react.portal"), xc = Symbol.for("react.fragment"), Ec = Symbol.for("react.strict_mode"), _c = Symbol.for("react.profiler"), Cc = Symbol.for("react.provider"), Nc = Symbol.for("react.context"), jc = Symbol.for("react.forward_ref"), Pc = Symbol.for("react.suspense"), Lc = Symbol.for("react.memo"), Ic = Symbol.for("react.lazy"), Bo = Symbol.iterator;
function Mc(e) {
  return e === null || typeof e != "object" ? null : (e = Bo && e[Bo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ts = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ns = Object.assign, rs = {};
function an(e, t, n) {
  this.props = e, this.context = t, this.refs = rs, this.updater = n || ts;
}
an.prototype.isReactComponent = {};
an.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
an.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ls() {
}
ls.prototype = an.prototype;
function Gi(e, t, n) {
  this.props = e, this.context = t, this.refs = rs, this.updater = n || ts;
}
var Ki = Gi.prototype = new ls();
Ki.constructor = Gi;
ns(Ki, an.prototype);
Ki.isPureReactComponent = !0;
var Ho = Array.isArray, is = Object.prototype.hasOwnProperty, Xi = { current: null }, os = { key: !0, ref: !0, __self: !0, __source: !0 };
function us(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) is.call(t, r) && !os.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), d = 0; d < u; d++) a[d] = arguments[d + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: bn, type: e, key: i, ref: o, props: l, _owner: Xi.current };
}
function Tc(e, t) {
  return { $$typeof: bn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bn;
}
function zc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Wo = /\/+/g;
function Pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? zc("" + e.key) : t.toString(36);
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
        case bn:
        case Sc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Pl(o, 0) : r, Ho(l) ? (n = "", e != null && (n = e.replace(Wo, "$&/") + "/"), Cr(l, t, n, "", function(d) {
    return d;
  })) : l != null && (Yi(l) && (l = Tc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Wo, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ho(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var a = r + Pl(i, u);
    o += Cr(i, t, n, a, l);
  }
  else if (a = Mc(e), typeof a == "function") for (e = a.call(e), u = 0; !(i = e.next()).done; ) i = i.value, a = r + Pl(i, u++), o += Cr(i, t, n, a, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ur(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Cr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Rc(e) {
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
var ae = { current: null }, Nr = { transition: null }, Oc = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: Nr, ReactCurrentOwner: Xi };
function ss() {
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
  if (!Yi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = an;
T.Fragment = xc;
T.Profiler = _c;
T.PureComponent = Gi;
T.StrictMode = Ec;
T.Suspense = Pc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oc;
T.act = ss;
T.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ns({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Xi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) is.call(t, a) && !os.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var d = 0; d < a; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: bn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function(e) {
  return e = { $$typeof: Nc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Cc, _context: e }, e.Consumer = e;
};
T.createElement = us;
T.createFactory = function(e) {
  var t = us.bind(null, e);
  return t.type = e, t;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: jc, render: e };
};
T.isValidElement = Yi;
T.lazy = function(e) {
  return { $$typeof: Ic, _payload: { _status: -1, _result: e }, _init: Rc };
};
T.memo = function(e, t) {
  return { $$typeof: Lc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function(e) {
  var t = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = t;
  }
};
T.unstable_act = ss;
T.useCallback = function(e, t) {
  return ae.current.useCallback(e, t);
};
T.useContext = function(e) {
  return ae.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return ae.current.useDeferredValue(e);
};
T.useEffect = function(e, t) {
  return ae.current.useEffect(e, t);
};
T.useId = function() {
  return ae.current.useId();
};
T.useImperativeHandle = function(e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function(e, t) {
  return ae.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function(e, t) {
  return ae.current.useLayoutEffect(e, t);
};
T.useMemo = function(e, t) {
  return ae.current.useMemo(e, t);
};
T.useReducer = function(e, t, n) {
  return ae.current.useReducer(e, t, n);
};
T.useRef = function(e) {
  return ae.current.useRef(e);
};
T.useState = function(e) {
  return ae.current.useState(e);
};
T.useSyncExternalStore = function(e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function() {
  return ae.current.useTransition();
};
T.version = "18.3.1";
es.exports = T;
var M = es.exports;
const Qo = /* @__PURE__ */ kc(M);
var as = { exports: {} }, Se = {}, cs = { exports: {} }, ds = {};
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
    var I = _.length;
    _.push(P);
    e: for (; 0 < I; ) {
      var Q = I - 1 >>> 1, Z = _[Q];
      if (0 < l(Z, P)) _[Q] = P, _[I] = Z, I = Q;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var P = _[0], I = _.pop();
    if (I !== P) {
      _[0] = I;
      e: for (var Q = 0, Z = _.length, ir = Z >>> 1; Q < ir; ) {
        var kt = 2 * (Q + 1) - 1, jl = _[kt], St = kt + 1, or = _[St];
        if (0 > l(jl, I)) St < Z && 0 > l(or, jl) ? (_[Q] = or, _[St] = I, Q = St) : (_[Q] = jl, _[kt] = I, Q = kt);
        else if (St < Z && 0 > l(or, I)) _[Q] = or, _[St] = I, Q = St;
        else break e;
      }
    }
    return P;
  }
  function l(_, P) {
    var I = _.sortIndex - P.sortIndex;
    return I !== 0 ? I : _.id - P.id;
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
  var a = [], d = [], y = 1, v = null, h = 3, k = !1, S = !1, m = !1, L = typeof setTimeout == "function" ? setTimeout : null, s = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var P = n(d); P !== null; ) {
      if (P.callback === null) r(d);
      else if (P.startTime <= _) r(d), P.sortIndex = P.expirationTime, t(a, P);
      else break;
      P = n(d);
    }
  }
  function g(_) {
    if (m = !1, p(_), !S) if (n(a) !== null) S = !0, Cl(E);
    else {
      var P = n(d);
      P !== null && Nl(g, P.startTime - _);
    }
  }
  function E(_, P) {
    S = !1, m && (m = !1, s(j), j = -1), k = !0;
    var I = h;
    try {
      for (p(P), v = n(a); v !== null && (!(v.expirationTime > P) || _ && !Le()); ) {
        var Q = v.callback;
        if (typeof Q == "function") {
          v.callback = null, h = v.priorityLevel;
          var Z = Q(v.expirationTime <= P);
          P = e.unstable_now(), typeof Z == "function" ? v.callback = Z : v === n(a) && r(a), p(P);
        } else r(a);
        v = n(a);
      }
      if (v !== null) var ir = !0;
      else {
        var kt = n(d);
        kt !== null && Nl(g, kt.startTime - P), ir = !1;
      }
      return ir;
    } finally {
      v = null, h = I, k = !1;
    }
  }
  var C = !1, N = null, j = -1, W = 5, z = -1;
  function Le() {
    return !(e.unstable_now() - z < W);
  }
  function pn() {
    if (N !== null) {
      var _ = e.unstable_now();
      z = _;
      var P = !0;
      try {
        P = N(!0, _);
      } finally {
        P ? mn() : (C = !1, N = null);
      }
    } else C = !1;
  }
  var mn;
  if (typeof c == "function") mn = function() {
    c(pn);
  };
  else if (typeof MessageChannel < "u") {
    var Vo = new MessageChannel(), gc = Vo.port2;
    Vo.port1.onmessage = pn, mn = function() {
      gc.postMessage(null);
    };
  } else mn = function() {
    L(pn, 0);
  };
  function Cl(_) {
    N = _, C || (C = !0, mn());
  }
  function Nl(_, P) {
    j = L(function() {
      _(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    S || k || (S = !0, Cl(E));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < _ ? Math.floor(1e3 / _) : 5;
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
    var I = h;
    h = P;
    try {
      return _();
    } finally {
      h = I;
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
    var I = h;
    h = _;
    try {
      return P();
    } finally {
      h = I;
    }
  }, e.unstable_scheduleCallback = function(_, P, I) {
    var Q = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? Q + I : Q) : I = Q, _) {
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
    return Z = I + Z, _ = { id: y++, callback: P, priorityLevel: _, startTime: I, expirationTime: Z, sortIndex: -1 }, I > Q ? (_.sortIndex = I, t(d, _), n(a) === null && _ === n(d) && (m ? (s(j), j = -1) : m = !0, Nl(g, I - Q))) : (_.sortIndex = Z, t(a, _), S || k || (S = !0, Cl(E))), _;
  }, e.unstable_shouldYield = Le, e.unstable_wrapCallback = function(_) {
    var P = h;
    return function() {
      var I = h;
      h = P;
      try {
        return _.apply(this, arguments);
      } finally {
        h = I;
      }
    };
  };
})(ds);
cs.exports = ds;
var Dc = cs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fc = M, ke = Dc;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fs = /* @__PURE__ */ new Set(), Dn = {};
function Rt(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (Dn[e] = t, e = 0; e < t.length; e++) fs.add(t[e]);
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ei = Object.prototype.hasOwnProperty, Ac = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Go = {}, Ko = {};
function Uc(e) {
  return ei.call(Ko, e) ? !0 : ei.call(Go, e) ? !1 : Ac.test(e) ? Ko[e] = !0 : (Go[e] = !0, !1);
}
function $c(e, t, n, r) {
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
function Vc(e, t, n, r) {
  if (t === null || typeof t > "u" || $c(e, t, n, r)) return !0;
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
function ce(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  te[e] = new ce(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  te[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  te[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  te[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  te[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  te[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  te[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  te[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  te[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  te[t] = new ce(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Zi, Ji);
  te[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Zi, Ji);
  te[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qi(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Vc(t, n, l, r) && (n = null), r || l === null ? Uc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var be = Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sr = Symbol.for("react.element"), Ft = Symbol.for("react.portal"), At = Symbol.for("react.fragment"), bi = Symbol.for("react.strict_mode"), ti = Symbol.for("react.profiler"), ps = Symbol.for("react.provider"), ms = Symbol.for("react.context"), eo = Symbol.for("react.forward_ref"), ni = Symbol.for("react.suspense"), ri = Symbol.for("react.suspense_list"), to = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), hs = Symbol.for("react.offscreen"), Xo = Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object" ? null : (e = Xo && e[Xo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, Ll;
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
var Il = !1;
function Ml(e, t) {
  if (!e || Il) return "";
  Il = !0;
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
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
        if (o !== 1 || u !== 1)
          do
            if (o--, u--, 0 > u || l[o] !== i[u]) {
              var a = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    Il = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? En(e) : "";
}
function Bc(e) {
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
      return e = Ml(e.type, !1), e;
    case 11:
      return e = Ml(e.type.render, !1), e;
    case 1:
      return e = Ml(e.type, !0), e;
    default:
      return "";
  }
}
function li(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case At:
      return "Fragment";
    case Ft:
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
    case ms:
      return (e.displayName || "Context") + ".Consumer";
    case ps:
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
function vs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Wc(e) {
  var t = vs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Wc(e));
}
function ys(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = vs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
function gs(e, t) {
  t = t.checked, t != null && qi(e, "checked", t, !1);
}
function oi(e, t) {
  gs(e, t);
  var n = ht(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ui(e, t.type, n) : t.hasOwnProperty("defaultValue") && ui(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Zo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ui(e, t, n) {
  (t !== "number" || Fr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _n = Array.isArray;
function Yt(e, t, n, r) {
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
function si(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Jo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (_n(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ht(n) };
}
function ws(e, t) {
  var n = ht(t.value), r = ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function qo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ks(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ks(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var cr, Ss = function(e) {
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
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jn = {
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
}, Qc = ["Webkit", "ms", "Moz", "O"];
Object.keys(jn).forEach(function(e) {
  Qc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), jn[t] = jn[e];
  });
});
function xs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jn.hasOwnProperty(e) && jn[e] ? ("" + t).trim() : t + "px";
}
function Es(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = xs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Gc = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ci(e, t) {
  if (t) {
    if (Gc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
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
var pi = null, Zt = null, Jt = null;
function bo(e) {
  if (e = nr(e)) {
    if (typeof pi != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = fl(t), pi(e.stateNode, e.type, t));
  }
}
function _s(e) {
  Zt ? Jt ? Jt.push(e) : Jt = [e] : Zt = e;
}
function Cs() {
  if (Zt) {
    var e = Zt, t = Jt;
    if (Jt = Zt = null, bo(e), t) for (e = 0; e < t.length; e++) bo(t[e]);
  }
}
function Ns(e, t) {
  return e(t);
}
function js() {
}
var Tl = !1;
function Ps(e, t, n) {
  if (Tl) return e(t, n);
  Tl = !0;
  try {
    return Ns(e, t, n);
  } finally {
    Tl = !1, (Zt !== null || Jt !== null) && (js(), Cs());
  }
}
function An(e, t) {
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
  var vn = {};
  Object.defineProperty(vn, "passive", { get: function() {
    mi = !0;
  } }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
} catch {
  mi = !1;
}
function Kc(e, t, n, r, l, i, o, u, a) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (y) {
    this.onError(y);
  }
}
var Pn = !1, Ar = null, Ur = !1, hi = null, Xc = { onError: function(e) {
  Pn = !0, Ar = e;
} };
function Yc(e, t, n, r, l, i, o, u, a) {
  Pn = !1, Ar = null, Kc.apply(Xc, arguments);
}
function Zc(e, t, n, r, l, i, o, u, a) {
  if (Yc.apply(this, arguments), Pn) {
    if (Pn) {
      var d = Ar;
      Pn = !1, Ar = null;
    } else throw Error(w(198));
    Ur || (Ur = !0, hi = d);
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
function Ls(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function eu(e) {
  if (Ot(e) !== e) throw Error(w(188));
}
function Jc(e) {
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
        if (i === n) return eu(l), e;
        if (i === r) return eu(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
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
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function Is(e) {
  return e = Jc(e), e !== null ? Ms(e) : null;
}
function Ms(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ms(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ts = ke.unstable_scheduleCallback, tu = ke.unstable_cancelCallback, qc = ke.unstable_shouldYield, bc = ke.unstable_requestPaint, G = ke.unstable_now, ed = ke.unstable_getCurrentPriorityLevel, ro = ke.unstable_ImmediatePriority, zs = ke.unstable_UserBlockingPriority, $r = ke.unstable_NormalPriority, td = ke.unstable_LowPriority, Rs = ke.unstable_IdlePriority, sl = null, Be = null;
function nd(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function") try {
    Be.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Oe = Math.clz32 ? Math.clz32 : id, rd = Math.log, ld = Math.LN2;
function id(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (rd(e) / ld | 0) | 0;
}
var dr = 64, fr = 4194304;
function Cn(e) {
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
    var u = o & ~l;
    u !== 0 ? r = Cn(u) : (i &= o, i !== 0 && (r = Cn(i)));
  } else o = n & ~l, o !== 0 ? r = Cn(o) : i !== 0 && (r = Cn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function od(e, t) {
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
    var o = 31 - Oe(i), u = 1 << o, a = l[o];
    a === -1 ? (!(u & n) || u & r) && (l[o] = od(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function vi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Os() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function er(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n;
}
function sd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function lo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Ds(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fs, io, As, Us, $s, yi = !1, pr = [], ut = null, st = null, at = null, Un = /* @__PURE__ */ new Map(), $n = /* @__PURE__ */ new Map(), rt = [], ad = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function nu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Un.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $n.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = nr(t), t !== null && io(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function cd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ut = yn(ut, e, t, n, r, l), !0;
    case "dragenter":
      return st = yn(st, e, t, n, r, l), !0;
    case "mouseover":
      return at = yn(at, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Un.set(i, yn(Un.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, $n.set(i, yn($n.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Vs(e) {
  var t = _t(e.target);
  if (t !== null) {
    var n = Ot(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ls(n), t !== null) {
          e.blockedOn = t, $s(e.priority, function() {
            As(n);
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
    } else return t = nr(n), t !== null && io(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ru(e, t, n) {
  jr(e) && n.delete(t);
}
function dd() {
  yi = !1, ut !== null && jr(ut) && (ut = null), st !== null && jr(st) && (st = null), at !== null && jr(at) && (at = null), Un.forEach(ru), $n.forEach(ru);
}
function gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yi || (yi = !0, ke.unstable_scheduleCallback(ke.unstable_NormalPriority, dd)));
}
function Vn(e) {
  function t(l) {
    return gn(l, e);
  }
  if (0 < pr.length) {
    gn(pr[0], e);
    for (var n = 1; n < pr.length; n++) {
      var r = pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ut !== null && gn(ut, e), st !== null && gn(st, e), at !== null && gn(at, e), Un.forEach(t), $n.forEach(t), n = 0; n < rt.length; n++) r = rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rt.length && (n = rt[0], n.blockedOn === null); ) Vs(n), n.blockedOn === null && rt.shift();
}
var qt = be.ReactCurrentBatchConfig, Br = !0;
function fd(e, t, n, r) {
  var l = O, i = qt.transition;
  qt.transition = null;
  try {
    O = 1, oo(e, t, n, r);
  } finally {
    O = l, qt.transition = i;
  }
}
function pd(e, t, n, r) {
  var l = O, i = qt.transition;
  qt.transition = null;
  try {
    O = 4, oo(e, t, n, r);
  } finally {
    O = l, qt.transition = i;
  }
}
function oo(e, t, n, r) {
  if (Br) {
    var l = gi(e, t, n, r);
    if (l === null) Hl(e, t, r, Hr, n), nu(e, r);
    else if (cd(l, e, t, n, r)) r.stopPropagation();
    else if (nu(e, r), t & 4 && -1 < ad.indexOf(e)) {
      for (; l !== null; ) {
        var i = nr(l);
        if (i !== null && Fs(i), i = gi(e, t, n, r), i === null && Hl(e, t, r, Hr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Hl(e, t, r, null, n);
  }
}
var Hr = null;
function gi(e, t, n, r) {
  if (Hr = null, e = no(r), e = _t(e), e !== null) if (t = Ot(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ls(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Hr = e, null;
}
function Bs(e) {
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
      switch (ed()) {
        case ro:
          return 1;
        case zs:
          return 4;
        case $r:
        case td:
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
var it = null, uo = null, Pr = null;
function Hs() {
  if (Pr) return Pr;
  var e, t = uo, n = t.length, r, l = "value" in it ? it.value : it.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Pr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Lr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function mr() {
  return !0;
}
function lu() {
  return !1;
}
function xe(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? mr : lu, this.isPropagationStopped = lu, this;
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
var cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, so = xe(cn), tr = B({}, cn, { view: 0, detail: 0 }), md = xe(tr), Rl, Ol, wn, al = B({}, tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ao, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== wn && (wn && e.type === "mousemove" ? (Rl = e.screenX - wn.screenX, Ol = e.screenY - wn.screenY) : Ol = Rl = 0, wn = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ol;
} }), iu = xe(al), hd = B({}, al, { dataTransfer: 0 }), vd = xe(hd), yd = B({}, tr, { relatedTarget: 0 }), Dl = xe(yd), gd = B({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), wd = xe(gd), kd = B({}, cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Sd = xe(kd), xd = B({}, cn, { data: 0 }), ou = xe(xd), Ed = {
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
}, _d = {
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
}, Cd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Nd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cd[e]) ? !!t[e] : !1;
}
function ao() {
  return Nd;
}
var jd = B({}, tr, { key: function(e) {
  if (e.key) {
    var t = Ed[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Lr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _d[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ao, charCode: function(e) {
  return e.type === "keypress" ? Lr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Lr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Pd = xe(jd), Ld = B({}, al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uu = xe(Ld), Id = B({}, tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ao }), Md = xe(Id), Td = B({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zd = xe(Td), Rd = B({}, al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Od = xe(Rd), Dd = [9, 13, 27, 32], co = Ye && "CompositionEvent" in window, Ln = null;
Ye && "documentMode" in document && (Ln = document.documentMode);
var Fd = Ye && "TextEvent" in window && !Ln, Ws = Ye && (!co || Ln && 8 < Ln && 11 >= Ln), su = " ", au = !1;
function Qs(e, t) {
  switch (e) {
    case "keyup":
      return Dd.indexOf(t.keyCode) !== -1;
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
function Gs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ut = !1;
function Ad(e, t) {
  switch (e) {
    case "compositionend":
      return Gs(t);
    case "keypress":
      return t.which !== 32 ? null : (au = !0, su);
    case "textInput":
      return e = t.data, e === su && au ? null : e;
    default:
      return null;
  }
}
function Ud(e, t) {
  if (Ut) return e === "compositionend" || !co && Qs(e, t) ? (e = Hs(), Pr = uo = it = null, Ut = !1, e) : null;
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
      return Ws && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $d = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$d[e.type] : t === "textarea";
}
function Ks(e, t, n, r) {
  _s(r), t = Wr(t, "onChange"), 0 < t.length && (n = new so("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var In = null, Bn = null;
function Vd(e) {
  la(e, 0);
}
function cl(e) {
  var t = Bt(e);
  if (ys(t)) return e;
}
function Bd(e, t) {
  if (e === "change") return t;
}
var Xs = !1;
if (Ye) {
  var Fl;
  if (Ye) {
    var Al = "oninput" in document;
    if (!Al) {
      var du = document.createElement("div");
      du.setAttribute("oninput", "return;"), Al = typeof du.oninput == "function";
    }
    Fl = Al;
  } else Fl = !1;
  Xs = Fl && (!document.documentMode || 9 < document.documentMode);
}
function fu() {
  In && (In.detachEvent("onpropertychange", Ys), Bn = In = null);
}
function Ys(e) {
  if (e.propertyName === "value" && cl(Bn)) {
    var t = [];
    Ks(t, Bn, e, no(e)), Ps(Vd, t);
  }
}
function Hd(e, t, n) {
  e === "focusin" ? (fu(), In = t, Bn = n, In.attachEvent("onpropertychange", Ys)) : e === "focusout" && fu();
}
function Wd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return cl(Bn);
}
function Qd(e, t) {
  if (e === "click") return cl(t);
}
function Gd(e, t) {
  if (e === "input" || e === "change") return cl(t);
}
function Kd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fe = typeof Object.is == "function" ? Object.is : Kd;
function Hn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ei.call(t, l) || !Fe(e[l], t[l])) return !1;
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
function Zs(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Js() {
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
function Xd(e) {
  var t = Js(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zs(n.ownerDocument.documentElement, n)) {
    if (r !== null && fo(n)) {
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
var Yd = Ye && "documentMode" in document && 11 >= document.documentMode, $t = null, wi = null, Mn = null, ki = !1;
function hu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ki || $t == null || $t !== Fr(r) || (r = $t, "selectionStart" in r && fo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mn && Hn(Mn, r) || (Mn = r, r = Wr(wi, "onSelect"), 0 < r.length && (t = new so("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = $t)));
}
function hr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vt = { animationend: hr("Animation", "AnimationEnd"), animationiteration: hr("Animation", "AnimationIteration"), animationstart: hr("Animation", "AnimationStart"), transitionend: hr("Transition", "TransitionEnd") }, Ul = {}, qs = {};
Ye && (qs = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);
function dl(e) {
  if (Ul[e]) return Ul[e];
  if (!Vt[e]) return e;
  var t = Vt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in qs) return Ul[e] = t[n];
  return e;
}
var bs = dl("animationend"), ea = dl("animationiteration"), ta = dl("animationstart"), na = dl("transitionend"), ra = /* @__PURE__ */ new Map(), vu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yt(e, t) {
  ra.set(e, t), Rt(t, [e]);
}
for (var $l = 0; $l < vu.length; $l++) {
  var Vl = vu[$l], Zd = Vl.toLowerCase(), Jd = Vl[0].toUpperCase() + Vl.slice(1);
  yt(Zd, "on" + Jd);
}
yt(bs, "onAnimationEnd");
yt(ea, "onAnimationIteration");
yt(ta, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(na, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Rt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function yu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Zc(r, t, void 0, e), e.currentTarget = null;
}
function la(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], a = u.instance, d = u.currentTarget;
        if (u = u.listener, a !== i && l.isPropagationStopped()) break e;
        yu(l, u, d), i = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], a = u.instance, d = u.currentTarget, u = u.listener, a !== i && l.isPropagationStopped()) break e;
        yu(l, u, d), i = a;
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
function Wn(e) {
  if (!e[vr]) {
    e[vr] = !0, fs.forEach(function(n) {
      n !== "selectionchange" && (qd.has(n) || Bl(n, !1, e), Bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vr] || (t[vr] = !0, Bl("selectionchange", !1, t));
  }
}
function ia(e, t, n, r) {
  switch (Bs(t)) {
    case 1:
      var l = fd;
      break;
    case 4:
      l = pd;
      break;
    default:
      l = oo;
  }
  n = l.bind(null, t, n, e), l = void 0, !mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Hl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var a = o.tag;
        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = _t(u), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Ps(function() {
    var d = i, y = no(n), v = [];
    e: {
      var h = ra.get(e);
      if (h !== void 0) {
        var k = so, S = e;
        switch (e) {
          case "keypress":
            if (Lr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Pd;
            break;
          case "focusin":
            S = "focus", k = Dl;
            break;
          case "focusout":
            S = "blur", k = Dl;
            break;
          case "beforeblur":
          case "afterblur":
            k = Dl;
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
            k = iu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Md;
            break;
          case bs:
          case ea:
          case ta:
            k = wd;
            break;
          case na:
            k = zd;
            break;
          case "scroll":
            k = md;
            break;
          case "wheel":
            k = Od;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Sd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = uu;
        }
        var m = (t & 4) !== 0, L = !m && e === "scroll", s = m ? h !== null ? h + "Capture" : null : h;
        m = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (p.tag === 5 && g !== null && (p = g, s !== null && (g = An(c, s), g != null && m.push(Qn(c, g, p)))), L) break;
          c = c.return;
        }
        0 < m.length && (h = new k(h, S, null, n, y), v.push({ event: h, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", h && n !== fi && (S = n.relatedTarget || n.fromElement) && (_t(S) || S[Ze])) break e;
        if ((k || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, k ? (S = n.relatedTarget || n.toElement, k = d, S = S ? _t(S) : null, S !== null && (L = Ot(S), S !== L || S.tag !== 5 && S.tag !== 6) && (S = null)) : (k = null, S = d), k !== S)) {
          if (m = iu, g = "onMouseLeave", s = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (m = uu, g = "onPointerLeave", s = "onPointerEnter", c = "pointer"), L = k == null ? h : Bt(k), p = S == null ? h : Bt(S), h = new m(g, c + "leave", k, n, y), h.target = L, h.relatedTarget = p, g = null, _t(y) === d && (m = new m(s, c + "enter", S, n, y), m.target = p, m.relatedTarget = L, g = m), L = g, k && S) t: {
            for (m = k, s = S, c = 0, p = m; p; p = Dt(p)) c++;
            for (p = 0, g = s; g; g = Dt(g)) p++;
            for (; 0 < c - p; ) m = Dt(m), c--;
            for (; 0 < p - c; ) s = Dt(s), p--;
            for (; c--; ) {
              if (m === s || s !== null && m === s.alternate) break t;
              m = Dt(m), s = Dt(s);
            }
            m = null;
          }
          else m = null;
          k !== null && gu(v, h, k, m, !1), S !== null && L !== null && gu(v, L, S, m, !0);
        }
      }
      e: {
        if (h = d ? Bt(d) : window, k = h.nodeName && h.nodeName.toLowerCase(), k === "select" || k === "input" && h.type === "file") var E = Bd;
        else if (cu(h)) if (Xs) E = Gd;
        else {
          E = Wd;
          var C = Hd;
        }
        else (k = h.nodeName) && k.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = Qd);
        if (E && (E = E(e, d))) {
          Ks(v, E, n, y);
          break e;
        }
        C && C(e, h, d), e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && ui(h, "number", h.value);
      }
      switch (C = d ? Bt(d) : window, e) {
        case "focusin":
          (cu(C) || C.contentEditable === "true") && ($t = C, wi = d, Mn = null);
          break;
        case "focusout":
          Mn = wi = $t = null;
          break;
        case "mousedown":
          ki = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ki = !1, hu(v, n, y);
          break;
        case "selectionchange":
          if (Yd) break;
        case "keydown":
        case "keyup":
          hu(v, n, y);
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
      else Ut ? Qs(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j && (Ws && n.locale !== "ko" && (Ut || j !== "onCompositionStart" ? j === "onCompositionEnd" && Ut && (N = Hs()) : (it = y, uo = "value" in it ? it.value : it.textContent, Ut = !0)), C = Wr(d, j), 0 < C.length && (j = new ou(j, e, null, n, y), v.push({ event: j, listeners: C }), N ? j.data = N : (N = Gs(n), N !== null && (j.data = N)))), (N = Fd ? Ad(e, n) : Ud(e, n)) && (d = Wr(d, "onBeforeInput"), 0 < d.length && (y = new ou("onBeforeInput", "beforeinput", null, n, y), v.push({ event: y, listeners: d }), y.data = N));
    }
    la(v, t);
  });
}
function Qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = An(e, n), i != null && r.unshift(Qn(e, i, l)), i = An(e, t), i != null && r.push(Qn(e, i, l))), e = e.return;
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
    var u = n, a = u.alternate, d = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && d !== null && (u = d, l ? (a = An(n, i), a != null && o.unshift(Qn(n, a, u))) : l || (a = An(n, i), a != null && o.push(Qn(n, a, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var bd = /\r\n?/g, ef = /\u0000|\uFFFD/g;
function wu(e) {
  return (typeof e == "string" ? e : "" + e).replace(bd, `
`).replace(ef, "");
}
function yr(e, t, n) {
  if (t = wu(t), wu(e) !== t && n) throw Error(w(425));
}
function Qr() {
}
var Si = null, xi = null;
function Ei(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _i = typeof setTimeout == "function" ? setTimeout : void 0, tf = typeof clearTimeout == "function" ? clearTimeout : void 0, ku = typeof Promise == "function" ? Promise : void 0, nf = typeof queueMicrotask == "function" ? queueMicrotask : typeof ku < "u" ? function(e) {
  return ku.resolve(null).then(e).catch(rf);
} : _i;
function rf(e) {
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
var dn = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + dn, Gn = "__reactProps$" + dn, Ze = "__reactContainer$" + dn, Ci = "__reactEvents$" + dn, lf = "__reactListeners$" + dn, of = "__reactHandles$" + dn;
function _t(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ze] || n[Ve]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Su(e); e !== null; ) {
        if (n = e[Ve]) return n;
        e = Su(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function nr(e) {
  return e = e[Ve] || e[Ze], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function fl(e) {
  return e[Gn] || null;
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
var vt = {}, oe = gt(vt), me = gt(!1), Lt = vt;
function nn(e, t) {
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
  A(me), A(oe);
}
function xu(e, t, n) {
  if (oe.current !== vt) throw Error(w(168));
  D(oe, t), D(me, n);
}
function oa(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Hc(e) || "Unknown", l));
  return B({}, n, r);
}
function Kr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vt, Lt = oe.current, D(oe, e), D(me, me.current), !0;
}
function Eu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = oa(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, A(me), A(oe), D(oe, e)) : A(me), D(me, n);
}
var Qe = null, pl = !1, Ql = !1;
function ua(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
function uf(e) {
  pl = !0, ua(e);
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
      throw Qe !== null && (Qe = Qe.slice(e + 1)), Ts(ro, wt), l;
    } finally {
      O = t, Ql = !1;
    }
  }
  return null;
}
var Wt = [], Qt = 0, Xr = null, Yr = 0, Ee = [], _e = 0, It = null, Ge = 1, Ke = "";
function xt(e, t) {
  Wt[Qt++] = Yr, Wt[Qt++] = Xr, Xr = e, Yr = t;
}
function sa(e, t, n) {
  Ee[_e++] = Ge, Ee[_e++] = Ke, Ee[_e++] = It, It = e;
  var r = Ge;
  e = Ke;
  var l = 32 - Oe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ge = 1 << 32 - Oe(t) + l | n << l | r, Ke = i + e;
  } else Ge = 1 << i | n << l | r, Ke = e;
}
function po(e) {
  e.return !== null && (xt(e, 1), sa(e, 1, 0));
}
function mo(e) {
  for (; e === Xr; ) Xr = Wt[--Qt], Wt[Qt] = null, Yr = Wt[--Qt], Wt[Qt] = null;
  for (; e === It; ) It = Ee[--_e], Ee[_e] = null, Ke = Ee[--_e], Ee[_e] = null, Ge = Ee[--_e], Ee[_e] = null;
}
var we = null, ge = null, U = !1, Re = null;
function aa(e, t) {
  var n = Ce(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function _u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, we = e, ge = ct(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, we = e, ge = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = It !== null ? { id: Ge, overflow: Ke } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ce(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, we = e, ge = null, !0) : !1;
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
      if (!_u(e, t)) {
        if (ji(e)) throw Error(w(418));
        t = ct(n.nextSibling);
        var r = we;
        t && _u(e, t) ? aa(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, we = e);
      }
    } else {
      if (ji(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, U = !1, we = e;
    }
  }
}
function Cu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function gr(e) {
  if (e !== we) return !1;
  if (!U) return Cu(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ei(e.type, e.memoizedProps)), t && (t = ge)) {
    if (ji(e)) throw ca(), Error(w(418));
    for (; t; ) aa(e, t), t = ct(t.nextSibling);
  }
  if (Cu(e), e.tag === 13) {
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
function rn() {
  ge = we = null, U = !1;
}
function ho(e) {
  Re === null ? Re = [e] : Re.push(e);
}
var sf = be.ReactCurrentBatchConfig;
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
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
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
function Nu(e) {
  var t = e._init;
  return t(e._payload);
}
function da(e) {
  function t(s, c) {
    if (e) {
      var p = s.deletions;
      p === null ? (s.deletions = [c], s.flags |= 16) : p.push(c);
    }
  }
  function n(s, c) {
    if (!e) return null;
    for (; c !== null; ) t(s, c), c = c.sibling;
    return null;
  }
  function r(s, c) {
    for (s = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? s.set(c.key, c) : s.set(c.index, c), c = c.sibling;
    return s;
  }
  function l(s, c) {
    return s = mt(s, c), s.index = 0, s.sibling = null, s;
  }
  function i(s, c, p) {
    return s.index = p, e ? (p = s.alternate, p !== null ? (p = p.index, p < c ? (s.flags |= 2, c) : p) : (s.flags |= 2, c)) : (s.flags |= 1048576, c);
  }
  function o(s) {
    return e && s.alternate === null && (s.flags |= 2), s;
  }
  function u(s, c, p, g) {
    return c === null || c.tag !== 6 ? (c = ql(p, s.mode, g), c.return = s, c) : (c = l(c, p), c.return = s, c);
  }
  function a(s, c, p, g) {
    var E = p.type;
    return E === At ? y(s, c, p.props.children, g, p.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tt && Nu(E) === c.type) ? (g = l(c, p.props), g.ref = kn(s, c, p), g.return = s, g) : (g = Dr(p.type, p.key, p.props, null, s.mode, g), g.ref = kn(s, c, p), g.return = s, g);
  }
  function d(s, c, p, g) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = bl(p, s.mode, g), c.return = s, c) : (c = l(c, p.children || []), c.return = s, c);
  }
  function y(s, c, p, g, E) {
    return c === null || c.tag !== 7 ? (c = Pt(p, s.mode, g, E), c.return = s, c) : (c = l(c, p), c.return = s, c);
  }
  function v(s, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = ql("" + c, s.mode, p), c.return = s, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case sr:
          return p = Dr(c.type, c.key, c.props, null, s.mode, p), p.ref = kn(s, null, c), p.return = s, p;
        case Ft:
          return c = bl(c, s.mode, p), c.return = s, c;
        case tt:
          var g = c._init;
          return v(s, g(c._payload), p);
      }
      if (_n(c) || hn(c)) return c = Pt(c, s.mode, p, null), c.return = s, c;
      wr(s, c);
    }
    return null;
  }
  function h(s, c, p, g) {
    var E = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return E !== null ? null : u(s, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case sr:
          return p.key === E ? a(s, c, p, g) : null;
        case Ft:
          return p.key === E ? d(s, c, p, g) : null;
        case tt:
          return E = p._init, h(
            s,
            c,
            E(p._payload),
            g
          );
      }
      if (_n(p) || hn(p)) return E !== null ? null : y(s, c, p, g, null);
      wr(s, p);
    }
    return null;
  }
  function k(s, c, p, g, E) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return s = s.get(p) || null, u(c, s, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case sr:
          return s = s.get(g.key === null ? p : g.key) || null, a(c, s, g, E);
        case Ft:
          return s = s.get(g.key === null ? p : g.key) || null, d(c, s, g, E);
        case tt:
          var C = g._init;
          return k(s, c, p, C(g._payload), E);
      }
      if (_n(g) || hn(g)) return s = s.get(p) || null, y(c, s, g, E, null);
      wr(c, g);
    }
    return null;
  }
  function S(s, c, p, g) {
    for (var E = null, C = null, N = c, j = c = 0, W = null; N !== null && j < p.length; j++) {
      N.index > j ? (W = N, N = null) : W = N.sibling;
      var z = h(s, N, p[j], g);
      if (z === null) {
        N === null && (N = W);
        break;
      }
      e && N && z.alternate === null && t(s, N), c = i(z, c, j), C === null ? E = z : C.sibling = z, C = z, N = W;
    }
    if (j === p.length) return n(s, N), U && xt(s, j), E;
    if (N === null) {
      for (; j < p.length; j++) N = v(s, p[j], g), N !== null && (c = i(N, c, j), C === null ? E = N : C.sibling = N, C = N);
      return U && xt(s, j), E;
    }
    for (N = r(s, N); j < p.length; j++) W = k(N, s, j, p[j], g), W !== null && (e && W.alternate !== null && N.delete(W.key === null ? j : W.key), c = i(W, c, j), C === null ? E = W : C.sibling = W, C = W);
    return e && N.forEach(function(Le) {
      return t(s, Le);
    }), U && xt(s, j), E;
  }
  function m(s, c, p, g) {
    var E = hn(p);
    if (typeof E != "function") throw Error(w(150));
    if (p = E.call(p), p == null) throw Error(w(151));
    for (var C = E = null, N = c, j = c = 0, W = null, z = p.next(); N !== null && !z.done; j++, z = p.next()) {
      N.index > j ? (W = N, N = null) : W = N.sibling;
      var Le = h(s, N, z.value, g);
      if (Le === null) {
        N === null && (N = W);
        break;
      }
      e && N && Le.alternate === null && t(s, N), c = i(Le, c, j), C === null ? E = Le : C.sibling = Le, C = Le, N = W;
    }
    if (z.done) return n(
      s,
      N
    ), U && xt(s, j), E;
    if (N === null) {
      for (; !z.done; j++, z = p.next()) z = v(s, z.value, g), z !== null && (c = i(z, c, j), C === null ? E = z : C.sibling = z, C = z);
      return U && xt(s, j), E;
    }
    for (N = r(s, N); !z.done; j++, z = p.next()) z = k(N, s, j, z.value, g), z !== null && (e && z.alternate !== null && N.delete(z.key === null ? j : z.key), c = i(z, c, j), C === null ? E = z : C.sibling = z, C = z);
    return e && N.forEach(function(pn) {
      return t(s, pn);
    }), U && xt(s, j), E;
  }
  function L(s, c, p, g) {
    if (typeof p == "object" && p !== null && p.type === At && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case sr:
          e: {
            for (var E = p.key, C = c; C !== null; ) {
              if (C.key === E) {
                if (E = p.type, E === At) {
                  if (C.tag === 7) {
                    n(s, C.sibling), c = l(C, p.props.children), c.return = s, s = c;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tt && Nu(E) === C.type) {
                  n(s, C.sibling), c = l(C, p.props), c.ref = kn(s, C, p), c.return = s, s = c;
                  break e;
                }
                n(s, C);
                break;
              } else t(s, C);
              C = C.sibling;
            }
            p.type === At ? (c = Pt(p.props.children, s.mode, g, p.key), c.return = s, s = c) : (g = Dr(p.type, p.key, p.props, null, s.mode, g), g.ref = kn(s, c, p), g.return = s, s = g);
          }
          return o(s);
        case Ft:
          e: {
            for (C = p.key; c !== null; ) {
              if (c.key === C) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(s, c.sibling), c = l(c, p.children || []), c.return = s, s = c;
                break e;
              } else {
                n(s, c);
                break;
              }
              else t(s, c);
              c = c.sibling;
            }
            c = bl(p, s.mode, g), c.return = s, s = c;
          }
          return o(s);
        case tt:
          return C = p._init, L(s, c, C(p._payload), g);
      }
      if (_n(p)) return S(s, c, p, g);
      if (hn(p)) return m(s, c, p, g);
      wr(s, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(s, c.sibling), c = l(c, p), c.return = s, s = c) : (n(s, c), c = ql(p, s.mode, g), c.return = s, s = c), o(s)) : n(s, c);
  }
  return L;
}
var ln = da(!0), fa = da(!1), Zr = gt(null), Jr = null, Gt = null, vo = null;
function yo() {
  vo = Gt = Jr = null;
}
function go(e) {
  var t = Zr.current;
  A(Zr), e._currentValue = t;
}
function Li(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function bt(e, t) {
  Jr = e, vo = Gt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (pe = !0), e.firstContext = null);
}
function je(e) {
  var t = e._currentValue;
  if (vo !== e) if (e = { context: e, memoizedValue: t, next: null }, Gt === null) {
    if (Jr === null) throw Error(w(308));
    Gt = e, Jr.dependencies = { lanes: 0, firstContext: e };
  } else Gt = Gt.next = e;
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
function ko(e) {
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
function Ir(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n);
  }
}
function ju(e, t) {
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
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, d = a.next;
    a.next = null, o === null ? i = d : o.next = d, o = a;
    var y = e.alternate;
    y !== null && (y = y.updateQueue, u = y.lastBaseUpdate, u !== o && (u === null ? y.firstBaseUpdate = d : u.next = d, y.lastBaseUpdate = a));
  }
  if (i !== null) {
    var v = l.baseState;
    o = 0, y = d = a = null, u = i;
    do {
      var h = u.lane, k = u.eventTime;
      if ((r & h) === h) {
        y !== null && (y = y.next = {
          eventTime: k,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, m = u;
          switch (h = t, k = n, m.tag) {
            case 1:
              if (S = m.payload, typeof S == "function") {
                v = S.call(k, v, h);
                break e;
              }
              v = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = m.payload, h = typeof S == "function" ? S.call(k, v, h) : S, h == null) break e;
              v = B({}, v, h);
              break e;
            case 2:
              nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
      } else k = { eventTime: k, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, y === null ? (d = y = k, a = v) : y = y.next = k, o |= h;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (y === null && (a = v), l.baseState = a, l.firstBaseUpdate = d, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Tt |= o, e.lanes = o, e.memoizedState = v;
  }
}
function Pu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(w(191, l));
      l.call(r);
    }
  }
}
var rr = {}, He = gt(rr), Kn = gt(rr), Xn = gt(rr);
function Nt(e) {
  if (e === rr) throw Error(w(174));
  return e;
}
function So(e, t) {
  switch (D(Xn, t), D(Kn, e), D(He, rr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ai(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ai(t, e);
  }
  A(He), D(He, t);
}
function on() {
  A(He), A(Kn), A(Xn);
}
function ha(e) {
  Nt(Xn.current);
  var t = Nt(He.current), n = ai(t, e.type);
  t !== n && (D(Kn, e), D(He, n));
}
function xo(e) {
  Kn.current === e && (A(He), A(Kn));
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
var Mr = be.ReactCurrentDispatcher, Kl = be.ReactCurrentBatchConfig, Mt = 0, V = null, X = null, J = null, el = !1, Tn = !1, Yn = 0, af = 0;
function ne() {
  throw Error(w(321));
}
function _o(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Co(e, t, n, r, l, i) {
  if (Mt = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Mr.current = e === null || e.memoizedState === null ? pf : mf, e = n(r, l), Tn) {
    i = 0;
    do {
      if (Tn = !1, Yn = 0, 25 <= i) throw Error(w(301));
      i += 1, J = X = null, t.updateQueue = null, Mr.current = hf, e = n(r, l);
    } while (Tn);
  }
  if (Mr.current = tl, t = X !== null && X.next !== null, Mt = 0, J = X = V = null, el = !1, t) throw Error(w(300));
  return e;
}
function No() {
  var e = Yn !== 0;
  return Yn = 0, e;
}
function Ue() {
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
function Zn(e, t) {
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
    var u = o = null, a = null, d = i;
    do {
      var y = d.lane;
      if ((Mt & y) === y) a !== null && (a = a.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: y,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        a === null ? (u = a = v, o = r) : a = a.next = v, V.lanes |= y, Tt |= y;
      }
      d = d.next;
    } while (d !== null && d !== i);
    a === null ? o = r : a.next = u, Fe(r, t.memoizedState) || (pe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, V.lanes |= i, Tt |= i, l = l.next;
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
    Fe(i, t.memoizedState) || (pe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function va() {
}
function ya(e, t) {
  var n = V, r = Pe(), l = t(), i = !Fe(r.memoizedState, l);
  if (i && (r.memoizedState = l, pe = !0), r = r.queue, jo(ka.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, Jn(9, wa.bind(null, n, r, l, t), void 0, null), q === null) throw Error(w(349));
    Mt & 30 || ga(n, t, l);
  }
  return l;
}
function ga(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function wa(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Sa(t) && xa(e);
}
function ka(e, t, n) {
  return n(function() {
    Sa(t) && xa(e);
  });
}
function Sa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function xa(e) {
  var t = Je(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Lu(e) {
  var t = Ue();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zn, lastRenderedState: e }, t.queue = e, e = e.dispatch = ff.bind(null, V, e), [t.memoizedState, e];
}
function Jn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ea() {
  return Pe().memoizedState;
}
function Tr(e, t, n, r) {
  var l = Ue();
  V.flags |= e, l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r);
}
function ml(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (i = o.destroy, r !== null && _o(r, o.deps)) {
      l.memoizedState = Jn(t, n, i, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = Jn(1 | t, n, i, r);
}
function Iu(e, t) {
  return Tr(8390656, 8, e, t);
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
function La(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ia(e, t, n) {
  return Mt & 21 ? (Fe(n, t) || (n = Os(), V.lanes |= n, Tt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, pe = !0), e.memoizedState = n);
}
function cf(e, t) {
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
function df(e, t, n) {
  var r = pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ta(e)) za(t, n);
  else if (n = pa(e, t, n, r), n !== null) {
    var l = se();
    De(n, e, r, l), Ra(n, t, r);
  }
}
function ff(e, t, n) {
  var r = pt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ta(e)) za(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Fe(u, o)) {
        var a = t.interleaved;
        a === null ? (l.next = l, wo(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = pa(e, t, l, r), n !== null && (l = se(), De(n, e, r, l), Ra(n, t, r));
  }
}
function Ta(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function za(e, t) {
  Tn = el = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ra(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n);
  }
}
var tl = { readContext: je, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, pf = { readContext: je, useCallback: function(e, t) {
  return Ue().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: je, useEffect: Iu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Tr(
    4194308,
    4,
    Na.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Tr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Tr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ue();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ue();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = df.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ue();
  return e = { current: e }, t.memoizedState = e;
}, useState: Lu, useDebugValue: Po, useDeferredValue: function(e) {
  return Ue().memoizedState = e;
}, useTransition: function() {
  var e = Lu(!1), t = e[0];
  return e = cf.bind(null, e[1]), Ue().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = Ue();
  if (U) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(w(349));
    Mt & 30 || ga(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Iu(ka.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Jn(9, wa.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Ue(), t = q.identifierPrefix;
  if (U) {
    var n = Ke, r = Ge;
    n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = af++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, mf = {
  readContext: je,
  useCallback: Pa,
  useContext: je,
  useEffect: jo,
  useImperativeHandle: ja,
  useInsertionEffect: _a,
  useLayoutEffect: Ca,
  useMemo: La,
  useReducer: Xl,
  useRef: Ea,
  useState: function() {
    return Xl(Zn);
  },
  useDebugValue: Po,
  useDeferredValue: function(e) {
    var t = Pe();
    return Ia(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Xl(Zn)[0], t = Pe().memoizedState;
    return [e, t];
  },
  useMutableSource: va,
  useSyncExternalStore: ya,
  useId: Ma,
  unstable_isNewReconciler: !1
}, hf = { readContext: je, useCallback: Pa, useContext: je, useEffect: jo, useImperativeHandle: ja, useInsertionEffect: _a, useLayoutEffect: Ca, useMemo: La, useReducer: Yl, useRef: Ea, useState: function() {
  return Yl(Zn);
}, useDebugValue: Po, useDeferredValue: function(e) {
  var t = Pe();
  return X === null ? t.memoizedState = e : Ia(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Yl(Zn)[0], t = Pe().memoizedState;
  return [e, t];
}, useMutableSource: va, useSyncExternalStore: ya, useId: Ma, unstable_isNewReconciler: !1 };
function Te(e, t) {
  if (e && e.defaultProps) {
    t = B({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ii(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ot(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = se(), l = pt(e), i = Xe(r, l);
  i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (De(t, e, l, r), Ir(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = se(), l = pt(e), i = Xe(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (De(t, e, l, r), Ir(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = se(), r = pt(e), l = Xe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = dt(e, l, r), t !== null && (De(t, e, r, n), Ir(t, e, r));
} };
function Mu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Hn(n, r) || !Hn(l, i) : !0;
}
function Oa(e, t, n) {
  var r = !1, l = vt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = je(i) : (l = he(t) ? Lt : oe.current, r = t.contextTypes, i = (r = r != null) ? nn(e, l) : vt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Tu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Mi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ko(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = je(i) : (i = he(t) ? Lt : oe.current, l.context = nn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ii(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && hl.enqueueReplaceState(l, l.state, null), qr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function un(e, t) {
  try {
    var n = "", r = t;
    do
      n += Bc(r), r = r.return;
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
function Ti(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var vf = typeof WeakMap == "function" ? WeakMap : Map;
function Da(e, t, n) {
  n = Xe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    rl || (rl = !0, Bi = r), Ti(e, t);
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
      Ti(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ti(e, t), typeof r != "function" && (ft === null ? ft = /* @__PURE__ */ new Set([this]) : ft.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = If.bind(null, e, t, n), t.then(e, e));
}
function Ru(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xe(-1, 1), t.tag = 2, dt(n, t, 1))), n.lanes |= 1), e);
}
var yf = be.ReactCurrentOwner, pe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? fa(t, null, n, r) : ln(t, e.child, n, r);
}
function Du(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return bt(t, l), r = Co(e, t, n, r, i, l), n = No(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (U && n && po(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function Fu(e, t, n, r, l) {
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
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, D(Xt, ye), ye |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, D(Xt, ye), ye |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, D(Xt, ye), ye |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, D(Xt, ye), ye |= r;
  return ue(e, t, l, n), t.child;
}
function $a(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function zi(e, t, n, r, l) {
  var i = he(n) ? Lt : oe.current;
  return i = nn(t, i), bt(t, l), n = Co(e, t, n, r, i, l), r = No(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (U && r && po(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function Au(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    Kr(t);
  } else i = !1;
  if (bt(t, l), t.stateNode === null) zr(e, t), Oa(t, n, r), Mi(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var a = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = je(d) : (d = he(n) ? Lt : oe.current, d = nn(t, d));
    var y = n.getDerivedStateFromProps, v = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== d) && Tu(t, o, r, d), nt = !1;
    var h = t.memoizedState;
    o.state = h, qr(t, r, o, l), a = t.memoizedState, u !== r || h !== a || me.current || nt ? (typeof y == "function" && (Ii(t, n, y, r), a = t.memoizedState), (u = nt || Mu(t, n, u, r, h, a, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = d, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, ma(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : Te(t.type, u), o.props = d, v = t.pendingProps, h = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = je(a) : (a = he(n) ? Lt : oe.current, a = nn(t, a));
    var k = n.getDerivedStateFromProps;
    (y = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== v || h !== a) && Tu(t, o, r, a), nt = !1, h = t.memoizedState, o.state = h, qr(t, r, o, l);
    var S = t.memoizedState;
    u !== v || h !== S || me.current || nt ? (typeof k == "function" && (Ii(t, n, k, r), S = t.memoizedState), (d = nt || Mu(t, n, d, r, h, S, a) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, S, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), o.props = r, o.state = S, o.context = a, r = d) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ri(e, t, n, r, i, l);
}
function Ri(e, t, n, r, l, i) {
  $a(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Eu(t, n, !1), qe(e, t, i);
  r = t.stateNode, yf.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ln(t, e.child, null, i), t.child = ln(t, null, u, i)) : ue(e, t, u, i), t.memoizedState = r.state, l && Eu(t, n, !0), t.child;
}
function Va(e) {
  var t = e.stateNode;
  t.pendingContext ? xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xu(e, t.context, !1), So(e, t.containerInfo);
}
function Uu(e, t, n, r, l) {
  return rn(), ho(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Di(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ba(e, t, n) {
  var r = t.pendingProps, l = $.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D($, l & 1), e === null)
    return Pi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = gl(o, r, 0, null), e = Pt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Di(n), t.memoizedState = Oi, e) : Lo(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return gf(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = mt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = mt(u, i) : (i = Pt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Di(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Oi, r;
  }
  return i = e.child, e = i.sibling, r = mt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Lo(e, t) {
  return t = gl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function kr(e, t, n, r) {
  return r !== null && ho(r), ln(t, e.child, null, n), e = Lo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function gf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Zl(Error(w(422))), kr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = gl({ mode: "visible", children: r.children }, l, 0, null), i = Pt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ln(t, e.child, null, o), t.child.memoizedState = Di(o), t.memoizedState = Oi, i);
  if (!(t.mode & 1)) return kr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(w(419)), r = Zl(i, r, void 0), kr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, pe || u) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Je(e, l), De(r, e, l, -1));
    }
    return Oo(), r = Zl(Error(w(421))), kr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ge = ct(l.nextSibling), we = t, U = !0, Re = null, e !== null && (Ee[_e++] = Ge, Ee[_e++] = Ke, Ee[_e++] = It, Ge = e.id, Ke = e.overflow, It = t), t = Lo(t, r.children), t.flags |= 4096, t);
}
function $u(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Li(e.return, t, n);
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
      if (e.tag === 13) e.memoizedState !== null && $u(e, n, t);
      else if (e.tag === 19) $u(e, n, t);
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
  if (e !== null && (t.dependencies = e.dependencies), Tt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function wf(e, t, n) {
  switch (t.tag) {
    case 3:
      Va(t), rn();
      break;
    case 5:
      ha(t);
      break;
    case 1:
      he(t.type) && Kr(t);
      break;
    case 4:
      So(t, t.stateNode.containerInfo);
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
        if (r) return Ha(e, t, n);
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
var Wa, Fi, Qa, Ga;
Wa = function(e, t) {
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
    e = t.stateNode, Nt(He.current);
    var i = null;
    switch (n) {
      case "input":
        l = ii(e, l), r = ii(e, r), i = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = si(e, l), r = si(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr);
    }
    ci(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var u = l[d];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Dn.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
    for (d in r) {
      var a = r[d];
      if (u = l != null ? l[d] : void 0, r.hasOwnProperty(d) && a !== u && (a != null || u != null)) if (d === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (i || (i = []), i.push(
        d,
        n
      )), n = a;
      else d === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(d, a)) : d === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(d, "" + a) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Dn.hasOwnProperty(d) ? (a != null && d === "onScroll" && F("scroll", e), i || u === a || (i = [])) : (i = i || []).push(d, a));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Ga = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sn(e, t) {
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
      return re(t), null;
    case 1:
      return he(t.type) && Gr(), re(t), null;
    case 3:
      return r = t.stateNode, on(), A(me), A(oe), Eo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (gr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Re !== null && (Qi(Re), Re = null))), Fi(e, t), re(t), null;
    case 5:
      xo(t);
      var l = Nt(Xn.current);
      if (n = t.type, e !== null && t.stateNode != null) Qa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return re(t), null;
        }
        if (e = Nt(He.current), gr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ve] = t, r[Gn] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Nn.length; l++) F(Nn[l], r);
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
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && yr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && yr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Dn.hasOwnProperty(o) && u != null && o === "onScroll" && F("scroll", r);
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
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ks(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ve] = t, e[Gn] = r, Wa(e, t, !1, !1), t.stateNode = e;
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
                for (l = 0; l < Nn.length; l++) F(Nn[l], e);
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
                Jo(e, r), l = si(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            ci(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var a = u[i];
              i === "style" ? Es(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ss(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Fn(e, a) : typeof a == "number" && Fn(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Dn.hasOwnProperty(i) ? a != null && i === "onScroll" && F("scroll", e) : a != null && qi(e, i, a, o));
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
                e.multiple = !!r.multiple, i = r.value, i != null ? Yt(e, !!r.multiple, i, !1) : r.defaultValue != null && Yt(
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
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Ga(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = Nt(Xn.current), Nt(He.current), gr(t)) {
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
      return re(t), null;
    case 13:
      if (A($), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && ge !== null && t.mode & 1 && !(t.flags & 128)) ca(), rn(), t.flags |= 98560, i = !1;
        else if (i = gr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(w(317));
            i[Ve] = t;
          } else rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          re(t), i = !1;
        } else Re !== null && (Qi(Re), Re = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $.current & 1 ? Y === 0 && (Y = 3) : Oo())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return on(), Fi(e, t), e === null && Wn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return go(t.type._context), re(t), null;
    case 17:
      return he(t.type) && Gr(), re(t), null;
    case 19:
      if (A($), i = t.memoizedState, i === null) return re(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) Sn(i, !1);
      else {
        if (Y !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = br(e), o !== null) {
            for (t.flags |= 128, Sn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return D($, $.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && G() > sn && (t.flags |= 128, r = !0, Sn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = br(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Sn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U) return re(t), null;
        } else 2 * G() - i.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128, r = !0, Sn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = G(), t.sibling = null, n = $.current, D($, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
    case 22:
    case 23:
      return Ro(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ye & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Sf(e, t) {
  switch (mo(t), t.tag) {
    case 1:
      return he(t.type) && Gr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return on(), A(me), A(oe), Eo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return xo(t), null;
    case 13:
      if (A($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return A($), null;
    case 4:
      return on(), null;
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
var Sr = !1, le = !1, xf = typeof WeakSet == "function" ? WeakSet : Set, x = null;
function Kt(e, t) {
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
var Vu = !1;
function Ef(e, t) {
  if (Si = Br, e = Js(), fo(e)) {
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
        var o = 0, u = -1, a = -1, d = 0, y = 0, v = e, h = null;
        t: for (; ; ) {
          for (var k; v !== n || l !== 0 && v.nodeType !== 3 || (u = o + l), v !== i || r !== 0 && v.nodeType !== 3 || (a = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (k = v.firstChild) !== null; )
            h = v, v = k;
          for (; ; ) {
            if (v === e) break t;
            if (h === n && ++d === l && (u = o), h === i && ++y === r && (a = o), (k = v.nextSibling) !== null) break;
            v = h, h = v.parentNode;
          }
          v = k;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xi = { focusedElem: e, selectionRange: n }, Br = !1, x = t; x !== null; ) if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, x = e;
  else for (; x !== null; ) {
    t = x;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var m = S.memoizedProps, L = S.memoizedState, s = t.stateNode, c = s.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Te(t.type, m), L);
            s.__reactInternalSnapshotBeforeUpdate = c;
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
      H(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, x = e;
      break;
    }
    x = t.return;
  }
  return S = Vu, Vu = !1, S;
}
function zn(e, t, n) {
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
  t !== null && (e.alternate = null, Ka(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ve], delete t[Gn], delete t[Ci], delete t[lf], delete t[of])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bu(e) {
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
var b = null, ze = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) Ya(e, t, n), n = n.sibling;
}
function Ya(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function") try {
    Be.onCommitFiberUnmount(sl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      le || Kt(n, t);
    case 6:
      var r = b, l = ze;
      b = null, et(e, t, n), b = r, ze = l, b !== null && (ze ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (ze ? (e = b, n = n.stateNode, e.nodeType === 8 ? Wl(e.parentNode, n) : e.nodeType === 1 && Wl(e, n), Vn(e)) : Wl(b, n.stateNode));
      break;
    case 4:
      r = b, l = ze, b = n.stateNode.containerInfo, ze = !0, et(e, t, n), b = r, ze = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Ai(n, t, o), l = l.next;
        } while (l !== r);
      }
      et(e, t, n);
      break;
    case 1:
      if (!le && (Kt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        H(n, t, u);
      }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, et(e, t, n), le = r) : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function Hu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xf()), t.forEach(function(r) {
      var l = Tf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ie(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            b = u.stateNode, ze = !1;
            break e;
          case 3:
            b = u.stateNode.containerInfo, ze = !0;
            break e;
          case 4:
            b = u.stateNode.containerInfo, ze = !0;
            break e;
        }
        u = u.return;
      }
      if (b === null) throw Error(w(160));
      Ya(i, o, l), b = null, ze = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (d) {
      H(l, t, d);
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
      if (Ie(t, e), Ae(e), r & 4) {
        try {
          zn(3, e, e.return), vl(3, e);
        } catch (m) {
          H(e, e.return, m);
        }
        try {
          zn(5, e, e.return);
        } catch (m) {
          H(e, e.return, m);
        }
      }
      break;
    case 1:
      Ie(t, e), Ae(e), r & 512 && n !== null && Kt(n, n.return);
      break;
    case 5:
      if (Ie(t, e), Ae(e), r & 512 && n !== null && Kt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Fn(l, "");
        } catch (m) {
          H(e, e.return, m);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && i.type === "radio" && i.name != null && gs(l, i), di(u, o);
          var d = di(u, i);
          for (o = 0; o < a.length; o += 2) {
            var y = a[o], v = a[o + 1];
            y === "style" ? Es(l, v) : y === "dangerouslySetInnerHTML" ? Ss(l, v) : y === "children" ? Fn(l, v) : qi(l, y, v, d);
          }
          switch (u) {
            case "input":
              oi(l, i);
              break;
            case "textarea":
              ws(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var k = i.value;
              k != null ? Yt(l, !!i.multiple, k, !1) : h !== !!i.multiple && (i.defaultValue != null ? Yt(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Yt(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Gn] = i;
        } catch (m) {
          H(e, e.return, m);
        }
      }
      break;
    case 6:
      if (Ie(t, e), Ae(e), r & 4) {
        if (e.stateNode === null) throw Error(w(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (m) {
          H(e, e.return, m);
        }
      }
      break;
    case 3:
      if (Ie(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Vn(t.containerInfo);
      } catch (m) {
        H(e, e.return, m);
      }
      break;
    case 4:
      Ie(t, e), Ae(e);
      break;
    case 13:
      Ie(t, e), Ae(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (To = G())), r & 4 && Hu(e);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (d = le) || y, Ie(t, e), le = d) : Ie(t, e), Ae(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !y && e.mode & 1) for (x = e, y = e.child; y !== null; ) {
          for (v = x = y; x !== null; ) {
            switch (h = x, k = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                zn(4, h, h.return);
                break;
              case 1:
                Kt(h, h.return);
                var S = h.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (m) {
                    H(r, n, m);
                  }
                }
                break;
              case 5:
                Kt(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  Qu(v);
                  continue;
                }
            }
            k !== null ? (k.return = h, x = k) : Qu(v);
          }
          y = y.sibling;
        }
        e: for (y = null, v = e; ; ) {
          if (v.tag === 5) {
            if (y === null) {
              y = v;
              try {
                l = v.stateNode, d ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = v.stateNode, a = v.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = xs("display", o));
              } catch (m) {
                H(e, e.return, m);
              }
            }
          } else if (v.tag === 6) {
            if (y === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (m) {
              H(e, e.return, m);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            y === v && (y = null), v = v.return;
          }
          y === v && (y = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      Ie(t, e), Ae(e), r & 4 && Hu(e);
      break;
    case 21:
      break;
    default:
      Ie(
        t,
        e
      ), Ae(e);
  }
}
function Ae(e) {
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
          r.flags & 32 && (Fn(l, ""), r.flags &= -33);
          var i = Bu(e);
          Vi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = Bu(e);
          $i(e, u, o);
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
function _f(e, t, n) {
  x = e, Ja(e);
}
function Ja(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Sr;
      if (!o) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || le;
        u = Sr;
        var d = le;
        if (Sr = o, (le = a) && !d) for (x = l; x !== null; ) o = x, a = o.child, o.tag === 22 && o.memoizedState !== null ? Gu(l) : a !== null ? (a.return = o, x = a) : Gu(l);
        for (; i !== null; ) x = i, Ja(i), i = i.sibling;
        x = l, Sr = u, le = d;
      }
      Wu(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, x = i) : Wu(e);
  }
}
function Wu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            le || vl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !le) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Pu(t, i, r);
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
              Pu(t, o, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
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
              var d = t.alternate;
              if (d !== null) {
                var y = d.memoizedState;
                if (y !== null) {
                  var v = y.dehydrated;
                  v !== null && Vn(v);
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
        le || t.flags & 512 && Ui(t);
      } catch (h) {
        H(t, t.return, h);
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
function Qu(e) {
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
function Gu(e) {
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
      x = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, x = u;
      break;
    }
    x = t.return;
  }
}
var Cf = Math.ceil, nl = be.ReactCurrentDispatcher, Io = be.ReactCurrentOwner, Ne = be.ReactCurrentBatchConfig, R = 0, q = null, K = null, ee = 0, ye = 0, Xt = gt(0), Y = 0, qn = null, Tt = 0, yl = 0, Mo = 0, Rn = null, fe = null, To = 0, sn = 1 / 0, We = null, rl = !1, Bi = null, ft = null, xr = !1, ot = null, ll = 0, On = 0, Hi = null, Rr = -1, Or = 0;
function se() {
  return R & 6 ? G() : Rr !== -1 ? Rr : Rr = G();
}
function pt(e) {
  return e.mode & 1 ? R & 2 && ee !== 0 ? ee & -ee : sf.transition !== null ? (Or === 0 && (Or = Os()), Or) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bs(e.type)), e) : 1;
}
function De(e, t, n, r) {
  if (50 < On) throw On = 0, Hi = null, Error(w(185));
  er(e, n, r), (!(R & 2) || e !== q) && (e === q && (!(R & 2) && (yl |= n), Y === 4 && lt(e, ee)), ve(e, r), n === 1 && R === 0 && !(t.mode & 1) && (sn = G() + 500, pl && wt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  ud(e, t);
  var r = Vr(e, e === q ? ee : 0);
  if (r === 0) n !== null && tu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && tu(n), t === 1) e.tag === 0 ? uf(Ku.bind(null, e)) : ua(Ku.bind(null, e)), nf(function() {
      !(R & 6) && wt();
    }), n = null;
    else {
      switch (Ds(r)) {
        case 1:
          n = ro;
          break;
        case 4:
          n = zs;
          break;
        case 16:
          n = $r;
          break;
        case 536870912:
          n = Rs;
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
  if (en() && e.callbackNode !== n) return null;
  var r = Vr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var i = ec();
    (q !== e || ee !== t) && (We = null, sn = G() + 500, jt(e, t));
    do
      try {
        Pf();
        break;
      } catch (u) {
        ba(e, u);
      }
    while (!0);
    yo(), nl.current = i, R = l, K !== null ? t = 0 : (q = null, ee = 0, t = Y);
  }
  if (t !== 0) {
    if (t === 2 && (l = vi(e), l !== 0 && (r = l, t = Wi(e, l))), t === 1) throw n = qn, jt(e, 0), lt(e, r), ve(e, G()), n;
    if (t === 6) lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Nf(l) && (t = il(e, r), t === 2 && (i = vi(e), i !== 0 && (r = i, t = Wi(e, i))), t === 1)) throw n = qn, jt(e, 0), lt(e, r), ve(e, G()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Et(e, fe, We);
          break;
        case 3:
          if (lt(e, r), (r & 130023424) === r && (t = To + 500 - G(), 10 < t)) {
            if (Vr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = _i(Et.bind(null, e, fe, We), t);
            break;
          }
          Et(e, fe, We);
          break;
        case 4:
          if (lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _i(Et.bind(null, e, fe, We), r);
            break;
          }
          Et(e, fe, We);
          break;
        case 5:
          Et(e, fe, We);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return ve(e, G()), e.callbackNode === n ? qa.bind(null, e) : null;
}
function Wi(e, t) {
  var n = Rn;
  return e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = fe, fe = n, t !== null && Qi(t)), e;
}
function Qi(e) {
  fe === null ? fe = e : fe.push.apply(fe, e);
}
function Nf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Fe(i(), l)) return !1;
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
    var n = 31 - Oe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ku(e) {
  if (R & 6) throw Error(w(327));
  en();
  var t = Vr(e, 0);
  if (!(t & 1)) return ve(e, G()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vi(e);
    r !== 0 && (t = r, n = Wi(e, r));
  }
  if (n === 1) throw n = qn, jt(e, 0), lt(e, t), ve(e, G()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Et(e, fe, We), ve(e, G()), null;
}
function zo(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (sn = G() + 500, pl && wt());
  }
}
function zt(e) {
  ot !== null && ot.tag === 0 && !(R & 6) && en();
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
  ye = Xt.current, A(Xt);
}
function jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, tf(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (mo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Gr();
        break;
      case 3:
        on(), A(me), A(oe), Eo();
        break;
      case 5:
        xo(r);
        break;
      case 4:
        on();
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
  if (q = e, K = e = mt(e.current, null), ee = ye = t, Y = 0, qn = null, Mo = yl = Tt = 0, fe = Rn = null, Ct !== null) {
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
      if (yo(), Mr.current = tl, el) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        el = !1;
      }
      if (Mt = 0, J = X = V = null, Tn = !1, Yn = 0, Io.current = null, n === null || n.return === null) {
        Y = 1, qn = t, K = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, a = t;
        if (t = ee, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var d = a, y = u, v = y.tag;
          if (!(y.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var h = y.alternate;
            h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var k = Ru(o);
          if (k !== null) {
            k.flags &= -257, Ou(k, o, u, i, t), k.mode & 1 && zu(i, d, t), t = k, a = d;
            var S = t.updateQueue;
            if (S === null) {
              var m = /* @__PURE__ */ new Set();
              m.add(a), t.updateQueue = m;
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              zu(i, d, t), Oo();
              break e;
            }
            a = Error(w(426));
          }
        } else if (U && u.mode & 1) {
          var L = Ru(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), Ou(L, o, u, i, t), ho(un(a, u));
            break e;
          }
        }
        i = a = un(a, u), Y !== 4 && (Y = 2), Rn === null ? Rn = [i] : Rn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var s = Da(i, a, t);
              ju(i, s);
              break e;
            case 1:
              u = a;
              var c = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ft === null || !ft.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = Fa(i, u, t);
                ju(i, g);
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
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), q === null || !(Tt & 268435455) && !(yl & 268435455) || lt(q, ee);
}
function il(e, t) {
  var n = R;
  R |= 2;
  var r = ec();
  (q !== e || ee !== t) && (We = null, jt(e, t));
  do
    try {
      jf();
      break;
    } catch (l) {
      ba(e, l);
    }
  while (!0);
  if (yo(), R = n, nl.current = r, K !== null) throw Error(w(261));
  return q = null, ee = 0, Y;
}
function jf() {
  for (; K !== null; ) tc(K);
}
function Pf() {
  for (; K !== null && !qc(); ) tc(K);
}
function tc(e) {
  var t = lc(e.alternate, e, ye);
  e.memoizedProps = e.pendingProps, t === null ? nc(e) : K = t, Io.current = null;
}
function nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Sf(n, t), n !== null) {
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
    en();
  while (ot !== null);
  if (R & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (sd(e, i), e === q && (K = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || xr || (xr = !0, ic($r, function() {
    return en(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ne.transition, Ne.transition = null;
    var o = O;
    O = 1;
    var u = R;
    R |= 4, Io.current = null, Ef(e, n), Za(n, e), Xd(xi), Br = !!Si, xi = Si = null, e.current = n, _f(n), bc(), R = u, O = o, Ne.transition = i;
  } else e.current = n;
  if (xr && (xr = !1, ot = e, ll = l), i = e.pendingLanes, i === 0 && (ft = null), nd(n.stateNode), ve(e, G()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (rl) throw rl = !1, e = Bi, Bi = null, e;
  return ll & 1 && e.tag !== 0 && en(), i = e.pendingLanes, i & 1 ? e === Hi ? On++ : (On = 0, Hi = e) : On = 0, wt(), null;
}
function en() {
  if (ot !== null) {
    var e = Ds(ll), t = Ne.transition, n = O;
    try {
      if (Ne.transition = null, O = 16 > e ? 16 : e, ot === null) var r = !1;
      else {
        if (e = ot, ot = null, ll = 0, R & 6) throw Error(w(331));
        var l = R;
        for (R |= 4, x = e.current; x !== null; ) {
          var i = x, o = i.child;
          if (x.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var d = u[a];
                for (x = d; x !== null; ) {
                  var y = x;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zn(8, y, i);
                  }
                  var v = y.child;
                  if (v !== null) v.return = y, x = v;
                  else for (; x !== null; ) {
                    y = x;
                    var h = y.sibling, k = y.return;
                    if (Ka(y), y === d) {
                      x = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = k, x = h;
                      break;
                    }
                    x = k;
                  }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var m = S.child;
                if (m !== null) {
                  S.child = null;
                  do {
                    var L = m.sibling;
                    m.sibling = null, m = L;
                  } while (m !== null);
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
                zn(9, i, i.return);
            }
            var s = i.sibling;
            if (s !== null) {
              s.return = i.return, x = s;
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
            if (u = x, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  vl(9, u);
              }
            } catch (E) {
              H(u, u.return, E);
            }
            if (u === o) {
              x = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, x = g;
              break e;
            }
            x = u.return;
          }
        }
        if (R = l, wt(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
          Be.onPostCommitFiberRoot(sl, e);
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
function Xu(e, t, n) {
  t = un(n, t), t = Da(e, t, 1), e = dt(e, t, 1), t = se(), e !== null && (er(e, 1, t), ve(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) Xu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Xu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ft === null || !ft.has(r))) {
        e = un(n, e), e = Fa(t, e, 1), t = dt(t, e, 1), e = se(), t !== null && (er(t, 1, e), ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function If(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = se(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (Y === 4 || Y === 3 && (ee & 130023424) === ee && 500 > G() - To ? jt(e, 0) : Mo |= n), ve(e, t);
}
function rc(e, t) {
  t === 0 && (e.mode & 1 ? (t = fr, fr <<= 1, !(fr & 130023424) && (fr = 4194304)) : t = 1);
  var n = se();
  e = Je(e, t), e !== null && (er(e, t, n), ve(e, n));
}
function Mf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), rc(e, n);
}
function Tf(e, t) {
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
    if (!(e.lanes & n) && !(t.flags & 128)) return pe = !1, wf(e, t, n);
    pe = !!(e.flags & 131072);
  }
  else pe = !1, U && t.flags & 1048576 && sa(t, Yr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zr(e, t), e = t.pendingProps;
      var l = nn(t, oe.current);
      bt(t, n), l = Co(null, t, r, e, l, n);
      var i = No();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, he(r) ? (i = !0, Kr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ko(t), l.updater = hl, t.stateNode = l, l._reactInternals = t, Mi(t, r, e, n), t = Ri(null, t, r, !0, i, n)) : (t.tag = 0, U && i && po(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Rf(r), e = Te(r, e), l) {
          case 0:
            t = zi(null, t, r, e, n);
            break e;
          case 1:
            t = Au(null, t, r, e, n);
            break e;
          case 11:
            t = Du(null, t, r, e, n);
            break e;
          case 14:
            t = Fu(null, t, r, Te(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), zi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Au(e, t, r, l, n);
    case 3:
      e: {
        if (Va(t), e === null) throw Error(w(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, ma(e, t), qr(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = un(Error(w(423)), t), t = Uu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = un(Error(w(424)), t), t = Uu(e, t, r, n, l);
          break e;
        } else for (ge = ct(t.stateNode.containerInfo.firstChild), we = t, U = !0, Re = null, n = fa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (rn(), r === l) {
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
      return So(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Du(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, D(Zr, r._currentValue), r._currentValue = o, i !== null) if (Fe(i.value, o)) {
          if (i.children === l.children && !me.current) {
            t = qe(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Xe(-1, n & -n), a.tag = 2;
                  var d = i.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var y = d.pending;
                    y === null ? a.next = a : (a.next = y.next, y.next = a), d.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Li(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(w(341));
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
        ue(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, bt(t, n), l = je(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Te(r, t.pendingProps), l = Te(r.type, l), Fu(e, t, r, l, n);
    case 15:
      return Aa(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), zr(e, t), t.tag = 1, he(r) ? (e = !0, Kr(t)) : e = !1, bt(t, n), Oa(t, r, l), Mi(t, r, l, n), Ri(null, t, r, !0, e, n);
    case 19:
      return Ha(e, t, n);
    case 22:
      return Ua(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function ic(e, t) {
  return Ts(e, t);
}
function zf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ce(e, t, n, r) {
  return new zf(e, t, n, r);
}
function Do(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Rf(e) {
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
    case At:
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
    case hs:
      return gl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ps:
          o = 10;
          break e;
        case ms:
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
  return e = Ce(22, e, r, t), e.elementType = hs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ql(e, t, n) {
  return e = Ce(6, e, null, t), e.lanes = n, e;
}
function bl(e, t, n) {
  return t = Ce(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Of(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zl(0), this.expirationTimes = zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Fo(e, t, n, r, l, i, o, u, a) {
  return e = new Of(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ce(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ko(i), e;
}
function Df(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ft, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
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
function uc(e, t, n, r, l, i, o, u, a) {
  return e = Fo(n, r, !0, e, l, i, o, u, a), e.context = oc(null), n = e.current, r = se(), l = pt(n), i = Xe(r, l), i.callback = t ?? null, dt(n, i, l), e.current.lanes = l, er(e, l, r), ve(e, r), e;
}
function wl(e, t, n, r) {
  var l = t.current, i = se(), o = pt(l);
  return n = oc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Xe(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dt(l, t, o), e !== null && (De(e, l, o, i), Ir(e, l, o)), o;
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
function Yu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ao(e, t) {
  Yu(e, t), (e = e.alternate) && Yu(e, t);
}
function Ff() {
  return null;
}
var sc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Uo(e) {
  this._internalRoot = e;
}
kl.prototype.render = Uo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  wl(e, t, null, null);
};
kl.prototype.unmount = Uo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zt(function() {
      wl(null, e, null, null);
    }), t[Ze] = null;
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Us();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++) ;
    rt.splice(n, 0, e), n === 0 && Vs(e);
  }
};
function $o(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Sl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Zu() {
}
function Af(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var d = ol(o);
        i.call(d);
      };
    }
    var o = uc(t, r, e, 0, null, !1, !1, "", Zu);
    return e._reactRootContainer = o, e[Ze] = o.current, Wn(e.nodeType === 8 ? e.parentNode : e), zt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = ol(a);
      u.call(d);
    };
  }
  var a = Fo(e, 0, !1, null, null, !1, !1, "", Zu);
  return e._reactRootContainer = a, e[Ze] = a.current, Wn(e.nodeType === 8 ? e.parentNode : e), zt(function() {
    wl(t, a, n, r);
  }), a;
}
function xl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = ol(o);
        u.call(a);
      };
    }
    wl(t, o, e, l);
  } else o = Af(n, t, e, l, r);
  return ol(o);
}
Fs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cn(t.pendingLanes);
        n !== 0 && (lo(t, n | 1), ve(t, G()), !(R & 6) && (sn = G() + 500, wt()));
      }
      break;
    case 13:
      zt(function() {
        var r = Je(e, 1);
        if (r !== null) {
          var l = se();
          De(r, e, 1, l);
        }
      }), Ao(e, 1);
  }
};
io = function(e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = se();
      De(t, e, 134217728, n);
    }
    Ao(e, 134217728);
  }
};
As = function(e) {
  if (e.tag === 13) {
    var t = pt(e), n = Je(e, t);
    if (n !== null) {
      var r = se();
      De(n, e, t, r);
    }
    Ao(e, t);
  }
};
Us = function() {
  return O;
};
$s = function(e, t) {
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
            ys(r), oi(r, l);
          }
        }
      }
      break;
    case "textarea":
      ws(e, n);
      break;
    case "select":
      t = n.value, t != null && Yt(e, !!n.multiple, t, !1);
  }
};
Ns = zo;
js = zt;
var Uf = { usingClientEntryPoint: !1, Events: [nr, Bt, fl, _s, Cs, zo] }, xn = { findFiberByHostInstance: _t, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $f = { bundleType: xn.bundleType, version: xn.version, rendererPackageName: xn.rendererPackageName, rendererConfig: xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Is(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xn.findFiberByHostInstance || Ff, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Er.isDisabled && Er.supportsFiber) try {
    sl = Er.inject($f), Be = Er;
  } catch {
  }
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf;
Se.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$o(t)) throw Error(w(200));
  return Df(e, t, null, n);
};
Se.createRoot = function(e, t) {
  if (!$o(e)) throw Error(w(299));
  var n = !1, r = "", l = sc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Fo(e, 1, !1, null, null, n, !1, r, l), e[Ze] = t.current, Wn(e.nodeType === 8 ? e.parentNode : e), new Uo(t);
};
Se.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = Is(t), e = e === null ? null : e.stateNode, e;
};
Se.flushSync = function(e) {
  return zt(e);
};
Se.hydrate = function(e, t, n) {
  if (!Sl(t)) throw Error(w(200));
  return xl(null, e, t, !0, n);
};
Se.hydrateRoot = function(e, t, n) {
  if (!$o(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = sc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = uc(t, null, e, 1, n ?? null, l, !1, i, o), e[Ze] = t.current, Wn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new kl(t);
};
Se.render = function(e, t, n) {
  if (!Sl(t)) throw Error(w(200));
  return xl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function(e) {
  if (!Sl(e)) throw Error(w(40));
  return e._reactRootContainer ? (zt(function() {
    xl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ze] = null;
    });
  }), !0) : !1;
};
Se.unstable_batchedUpdates = zo;
Se.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Sl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return xl(e, t, n, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function ac() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac);
    } catch (e) {
      console.error(e);
    }
}
ac(), as.exports = Se;
var Vf = as.exports, cc, Ju = Vf;
cc = Ju.createRoot, Ju.hydrateRoot;
window.api = ie;
const qu = async (e = 0, t = 30) => {
  const n = await ie.fetchApi(
    `/meld-nexus/list?offset=${e}&limit=${t}`
  );
  if (!n.ok)
    throw new Error(`Failed to fetch images: ${n.statusText}`);
  return await n.json();
}, Bf = async () => {
  const e = await ie.fetchApi("/meld-nexus/settings");
  return e.ok ? await e.json() : { dev_mode: !1 };
}, Hf = async (e, t) => {
  if (!(await ie.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Wf = async (e, t = 12) => {
  const n = await ie.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, Qf = async (e) => {
  const t = await ie.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, Gf = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await ie.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Kf = async (e, t = !0) => {
  const n = await ie.fetchApi("/meld-nexus/bulk-delete", {
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
}, dc = async (e) => {
  const t = await ie.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, Xf = async (e, t) => {
  const n = await ie.fetchApi(
    `/meld-nexus/folders?type=${e}&path=${encodeURIComponent(t)}`
  );
  return n.ok ? await n.json() : [];
}, Yf = async (e) => {
  const t = await ie.fetchApi("/meld-nexus/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Zf = async () => {
  if (!(await ie.fetchApi("/meld-nexus/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
};
var fc = { exports: {} }, El = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jf = M, qf = Symbol.for("react.element"), bf = Symbol.for("react.fragment"), ep = Object.prototype.hasOwnProperty, tp = Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, np = { key: !0, ref: !0, __self: !0, __source: !0 };
function pc(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) ep.call(t, r) && !np.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: qf, type: e, key: i, ref: o, props: l, _owner: tp.current };
}
El.Fragment = bf;
El.jsx = pc;
El.jsxs = pc;
fc.exports = El;
var f = fc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rp = {
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
const lp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), de = (e, t) => {
  const n = M.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: u = "",
      children: a,
      ...d
    }, y) => M.createElement(
      "svg",
      {
        ref: y,
        ...rp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${lp(e)}`, u].join(" "),
        ...d
      },
      [
        ...t.map(([v, h]) => M.createElement(v, h)),
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
const mc = de("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = de("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = de("Download", [
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
const bu = de("Folder", [
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
const op = de("GitBranch", [
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
const up = de("Maximize", [
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
const sp = de("Minimize", [
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
const ap = de("MoreVertical", [
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
const cp = de("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = de("PlusCircle", [
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
const vc = de("RefreshCw", [
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
const fp = de("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = de("Trash2", [
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
const mp = de("Upload", [
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
const lr = de("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let ul = !1;
const hp = (e) => {
  ul = e, ul && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, vp = (...e) => {
  ul && console.log("[Meld-Flow]", ...e);
}, yp = (...e) => {
  ul && console.warn("[Meld-Flow]", ...e);
}, gp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, $e = {
  log: vp,
  warn: yp,
  error: gp,
  init: hp
}, wp = {
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
    shouldCancel: !1,
    progress: { current: 0, total: 0 }
  },
  pagination: {
    total: 0,
    offset: 0,
    limit: 30,
    hasMore: !1
  }
};
function kp(e, t) {
  switch (t.type) {
    case "SET_IMAGES": {
      const { images: n, total: r, offset: l, limit: i } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !n.some((u) => u.id === o) && (o = null), {
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
      const { images: n, total: r, offset: l, limit: i } = t.payload, o = [...e.images, ...n], u = Array.from(
        new Map(o.map((a) => [a.id, a])).values()
      );
      return {
        ...e,
        images: u,
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
        const u = new Set(e.selectedIds);
        return u.add(t.payload), {
          ...e,
          selectedIds: u,
          lastSelectedId: t.payload
        };
      }
      const n = e.images.findIndex(
        (u) => u.id === e.lastSelectedId
      ), r = e.images.findIndex(
        (u) => u.id === t.payload
      );
      if (n === -1 || r === -1) return e;
      const [l, i] = [
        Math.min(n, r),
        Math.max(n, r)
      ], o = new Set(e.selectedIds);
      for (let u = l; u <= i; u++)
        o.add(e.images[u].id);
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
    default:
      return e;
  }
}
const yc = M.createContext(void 0), Sp = ({
  children: e
}) => {
  const [t, n] = M.useReducer(kp, wp), r = M.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const o = await qu(0, t.pagination.limit);
      n({ type: "SET_IMAGES", payload: o });
    } catch (o) {
      n({
        type: "SET_ERROR",
        payload: o instanceof Error ? o.message : String(o)
      });
    }
  }, [t.pagination.limit]), l = M.useCallback(async () => {
    if (!(t.isLoading || !t.pagination.hasMore)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        const o = t.images.length, u = await qu(o, t.pagination.limit);
        n({ type: "APPEND_IMAGES", payload: u });
      } catch (o) {
        n({
          type: "SET_ERROR",
          payload: o instanceof Error ? o.message : String(o)
        });
      }
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.images.length
  ]), i = M.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const o = Array.from(t.selectedIds), u = `Are you sure you want to delete the selected ${o.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(u)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await Kf(o, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (a) {
        n({
          type: "SET_ERROR",
          payload: a instanceof Error ? a.message : String(a)
        });
      }
    }
  }, [t.selectedIds, r]);
  return M.useEffect(() => {
    const o = () => {
      r();
    }, u = (d) => {
      const y = d.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: y }
      });
    }, a = () => {
      n({
        type: "SET_SCAN_STATUS",
        payload: { isRunning: !1, shouldCancel: !1 }
      }), r();
    };
    return window.addEventListener("meld-nexus-refresh", o), window.addEventListener("meld-nexus-scan-progress", u), window.addEventListener("meld-nexus-scan-finished", a), () => {
      window.removeEventListener("meld-nexus-refresh", o), window.removeEventListener(
        "meld-nexus-scan-progress",
        u
      ), window.removeEventListener(
        "meld-nexus-scan-finished",
        a
      );
    };
  }, [r]), M.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ f.jsx(
    yc.Provider,
    {
      value: { state: t, dispatch: n, refreshImages: r, loadMoreImages: l, deleteSelected: i },
      children: e
    }
  );
}, fn = () => {
  const e = M.useContext(yc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, xp = () => {
  const { state: e, dispatch: t, deleteSelected: n } = fn(), r = e.selectedIds.size;
  return r === 0 ? null : /* @__PURE__ */ f.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ f.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ f.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ f.jsx(
            pp,
            {
              size: 16,
              style: { marginRight: "8px", verticalAlign: "middle" }
            }
          ),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ f.jsx(lr, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, Ep = ({ image: e }) => {
  const { state: t, dispatch: n } = fn(), r = t.selectedIds.has(e.id), [l, i] = M.useState(null), [o, u] = M.useState(!1), a = M.useRef(null);
  M.useEffect(() => {
    const s = (c) => {
      a.current && !a.current.contains(c.target) && u(!1);
    };
    return o && document.addEventListener("mousedown", s), () => {
      document.removeEventListener("mousedown", s);
    };
  }, [o]);
  const d = e.parent_id ? t.images.find((s) => s.id === e.parent_id) : null, y = d ? `/api/view?filename=${encodeURIComponent(d.filename)}&type=${d.type || "output"}${d.subfolder ? `&subfolder=${encodeURIComponent(d.subfolder)}` : ""}` : null, v = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, h = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, k = (s) => {
    s.shiftKey ? (s.preventDefault(), s.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : s.ctrlKey || s.metaKey || t.selectedIds.size > 0 ? (s.preventDefault(), s.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, S = (s) => {
    s.shiftKey ? (s.preventDefault(), s.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, m = (s) => {
    (s.shiftKey || s.ctrlKey || s.metaKey || t.selectedIds.size > 0) && s.preventDefault();
  }, L = (s) => {
    (s.key === "Enter" || s.key === " ") && (s.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: S,
      onMouseDown: m,
      onKeyDown: L,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "meld-image-card__menu-container", ref: a, children: [
          /* @__PURE__ */ f.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (s) => {
                s.stopPropagation(), u(!o);
              },
              title: "Menu",
              children: /* @__PURE__ */ f.jsx(ap, { size: 16 })
            }
          ),
          o && /* @__PURE__ */ f.jsx("div", { className: "meld-image-card__menu", children: /* @__PURE__ */ f.jsxs(
            "div",
            {
              className: "meld-image-card__menu-item",
              onClick: (s) => {
                s.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: { type: "parent_selection", imageId: e.id }
                }), u(!1);
              },
              children: [
                /* @__PURE__ */ f.jsx(dp, { size: 14 }),
                /* @__PURE__ */ f.jsx("span", { children: "Add parent image" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ f.jsx(
          "img",
          {
            src: h,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: m,
            onClick: (s) => {
              s.stopPropagation(), k(s);
            }
          }
        ) }),
        /* @__PURE__ */ f.jsxs("div", { className: "meld-image-card__details", children: [
          /* @__PURE__ */ f.jsx("div", { className: "meld-image-card__filename", children: v }),
          /* @__PURE__ */ f.jsx("div", { className: "meld-image-card__lineage-v2", children: typeof e.parent_id == "number" && e.parent_id > 0 && /* @__PURE__ */ f.jsxs(
            "div",
            {
              className: "meld-lineage-badge meld-lineage-badge--has-parent",
              onClick: (s) => {
                s.stopPropagation(), n({
                  type: "OPEN_VIEWER",
                  payload: { id: e.id, mode: "lineage" }
                });
              },
              children: [
                /* @__PURE__ */ f.jsx(op, { size: 12 }),
                y && /* @__PURE__ */ f.jsx(
                  "img",
                  {
                    src: y,
                    className: "meld-lineage-badge__parent-thumb",
                    alt: "parent thumb"
                  }
                ),
                /* @__PURE__ */ f.jsx("span", { children: "Parent" })
              ]
            }
          ) }),
          /* @__PURE__ */ f.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (s) => {
                s.stopPropagation(), i({
                  title: "Positive Prompt",
                  text: e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ f.jsx("div", { className: "meld-image-card__meta-label", children: "Positive" }),
                /* @__PURE__ */ f.jsx("div", { className: "meld-image-card__meta-content", children: e.positive || "-" })
              ]
            }
          ),
          /* @__PURE__ */ f.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (s) => {
                s.stopPropagation(), i({
                  title: "Negative Prompt",
                  text: e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ f.jsx("div", { className: "meld-image-card__meta-label", children: "Negative" }),
                /* @__PURE__ */ f.jsx("div", { className: "meld-image-card__meta-content", children: e.negative || "-" })
              ]
            }
          ),
          /* @__PURE__ */ f.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ f.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
            /* @__PURE__ */ f.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((s, c) => /* @__PURE__ */ f.jsx("span", { className: "meld-image-card__tag", children: s }, `${s}-${c}`)) : /* @__PURE__ */ f.jsx("span", { style: { color: "#666" }, children: "-" }) })
          ] })
        ] }),
        l && /* @__PURE__ */ f.jsx(
          "div",
          {
            className: "meld-prompt-popup-overlay",
            onClick: (s) => {
              s.stopPropagation(), i(null);
            },
            children: /* @__PURE__ */ f.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (s) => s.stopPropagation(),
                children: [
                  /* @__PURE__ */ f.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ f.jsx("span", { children: l.title }),
                    /* @__PURE__ */ f.jsx(
                      lr,
                      {
                        className: "meld-prompt-popup-close",
                        size: 18,
                        onClick: () => i(null)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ f.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, _p = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = fn(), { viewerImageId: r, images: l, viewerMode: i, lineageImages: o } = e, [u, a] = M.useState(!1), [d, y] = M.useState(!1), v = (i === "lineage" && o.length > 0 ? o : l).find((m) => m.id === r), h = M.useCallback(
    (m) => {
      m && "stopPropagation" in m && m.stopPropagation(), document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch((L) => {
        console.error(
          `Error attempting to enable full-screen mode: ${L.message}`
        );
      });
    },
    []
  );
  if (M.useEffect(() => {
    if (i !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore)
      return;
    const m = l.findIndex((L) => L.id === r);
    m !== -1 && m >= l.length - 15 && n();
  }, [
    r,
    l.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n
  ]), M.useEffect(() => {
    const m = (s) => {
      r !== null && (s.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : s.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : s.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (s.key === "f" || s.key === "F") && h(s));
    }, L = () => {
      a(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", m), document.addEventListener("fullscreenchange", L), () => {
      window.removeEventListener("keydown", m), document.removeEventListener("fullscreenchange", L);
    };
  }, [r, t, h]), M.useEffect(() => {
    i === "lineage" && r !== null && o.length === 0 && (y(!0), Qf(r).then((m) => {
      t({ type: "SET_LINEAGE", payload: m });
    }).catch((m) => {
      console.error("Failed to fetch lineage:", m);
    }).finally(() => {
      y(!1);
    }));
  }, [i, r, o.length, t]), M.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), M.useEffect(() => {
    if (r !== null) {
      const m = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      m && m.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [r]), !v) return null;
  const k = `/api/view?filename=${encodeURIComponent(v.filename)}&type=${v.type || "output"}${v.subfolder ? `&subfolder=${encodeURIComponent(v.subfolder)}` : ""}`, S = i === "lineage" ? o : l;
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: "meld-viewer-overlay",
      onClick: () => t({ type: "CLOSE_VIEWER" }),
      role: "button",
      tabIndex: 0,
      children: /* @__PURE__ */ f.jsxs(
        "div",
        {
          className: `meld-viewer-content ${u ? "meld-viewer-content--fullscreen" : ""}`,
          onClick: (m) => m.stopPropagation(),
          children: [
            /* @__PURE__ */ f.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ f.jsx("div", { className: "meld-viewer-filename", children: v.filename }) }),
            /* @__PURE__ */ f.jsxs("div", { className: "meld-viewer-actions", children: [
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn",
                  onClick: h,
                  type: "button",
                  title: u ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                  children: u ? /* @__PURE__ */ f.jsx(sp, { size: 20 }) : /* @__PURE__ */ f.jsx(up, { size: 20 })
                }
              ),
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                  onClick: () => t({ type: "CLOSE_VIEWER" }),
                  type: "button",
                  title: "Close (Esc)",
                  children: /* @__PURE__ */ f.jsx(lr, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ f.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--prev",
                onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ f.jsx(mc, { size: 32 })
              }
            ),
            /* @__PURE__ */ f.jsx("div", { className: "meld-viewer-image-container", children: /* @__PURE__ */ f.jsx(
              "img",
              {
                src: k,
                alt: v.filename,
                className: "meld-viewer-image"
              }
            ) }),
            /* @__PURE__ */ f.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--next",
                onClick: () => t({ type: "NEXT_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ f.jsx(hc, { size: 32 })
              }
            ),
            !u && /* @__PURE__ */ f.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ f.jsxs("div", { className: "meld-viewer-thumbnails", children: [
              d ? /* @__PURE__ */ f.jsx("div", { style: { padding: "10px", color: "#888" }, children: "Loading lineage..." }) : S.map((m) => {
                const L = m.id === r, s = typeof v.parent_id == "number" && v.parent_id === m.id, c = typeof m.parent_id == "number" && m.parent_id === v.id, p = `/api/view?filename=${encodeURIComponent(m.filename)}&type=${m.type || "output"}${m.subfolder ? `&subfolder=${encodeURIComponent(m.subfolder)}` : ""}`;
                return /* @__PURE__ */ f.jsxs(
                  "div",
                  {
                    className: `meld-viewer-thumbnail ${L ? "meld-viewer-thumbnail--active" : ""}`,
                    onClick: () => t({
                      type: "OPEN_VIEWER",
                      payload: { id: m.id, mode: i }
                    }),
                    children: [
                      /* @__PURE__ */ f.jsx("img", { src: p, alt: m.filename }),
                      i === "lineage" && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                        s && /* @__PURE__ */ f.jsx("span", { className: "meld-viewer-thumbnail-label meld-viewer-thumbnail-label--parent", children: "Parent" }),
                        c && /* @__PURE__ */ f.jsx("span", { className: "meld-viewer-thumbnail-label meld-viewer-thumbnail-label--child", children: "Child" })
                      ] })
                    ]
                  },
                  m.id
                );
              }),
              i === "gallery" && e.isLoading && /* @__PURE__ */ f.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ f.jsx(vc, { className: "animate-spin", size: 20 }) })
            ] }) })
          ]
        }
      )
    }
  );
}, Cp = () => {
  const { state: e, dispatch: t } = fn(), { scanStatus: n } = e, [r, l] = M.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0
  }), [i, o] = M.useState([]), [u, a] = M.useState(!1), d = M.useCallback(async () => {
    if (r.type !== "custom") {
      a(!0);
      try {
        const m = await Xf(r.type, r.subfolder);
        o(m);
      } catch (m) {
        console.error("Failed to load folders:", m);
      } finally {
        a(!1);
      }
    }
  }, [r.type, r.subfolder]);
  M.useEffect(() => {
    d();
  }, [d]);
  const y = async () => {
    try {
      await Yf(r), t({
        type: "SET_SCAN_STATUS",
        payload: { isRunning: !0, shouldCancel: !1 }
      });
    } catch (m) {
      console.error("Failed to start scan:", m), alert(`Failed to start scan: ${m}`);
    }
  }, v = async () => {
    try {
      await Zf(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (m) {
      console.error("Failed to cancel scan:", m);
    }
  }, h = (m) => {
    const L = r.subfolder ? `${r.subfolder}/${m}` : m;
    l({ ...r, subfolder: L });
  }, k = () => {
    const m = r.subfolder.split("/");
    m.pop(), l({ ...r, subfolder: m.join("/") });
  }, S = n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => t({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ f.jsxs(
        "div",
        {
          className: "meld-modal-content meld-modal-content--large",
          onClick: (m) => m.stopPropagation(),
          children: [
            /* @__PURE__ */ f.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ f.jsx("h2", { children: "Import Images" }),
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-modal-close",
                  onClick: () => t({ type: "CLOSE_MODAL" }),
                  children: /* @__PURE__ */ f.jsx(lr, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ f.jsx("div", { className: "meld-modal-body", children: n.isRunning ? /* @__PURE__ */ f.jsxs("div", { className: "meld-scan-progress", children: [
              /* @__PURE__ */ f.jsx("div", { className: "meld-scan-status-text", children: n.shouldCancel ? /* @__PURE__ */ f.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : /* @__PURE__ */ f.jsx("span", { children: "Scanning images..." }) }),
              /* @__PURE__ */ f.jsx("div", { className: "meld-progress-container", children: /* @__PURE__ */ f.jsx(
                "div",
                {
                  className: "meld-progress-bar",
                  style: { width: `${S}%` }
                }
              ) }),
              /* @__PURE__ */ f.jsxs("div", { className: "meld-progress-stats", children: [
                n.progress.current,
                " / ",
                n.progress.total
              ] }),
              /* @__PURE__ */ f.jsxs("div", { className: "meld-scan-actions", children: [
                /* @__PURE__ */ f.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn-secondary",
                    onClick: () => t({ type: "CLOSE_MODAL" }),
                    children: "Run in Background"
                  }
                ),
                /* @__PURE__ */ f.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn-danger",
                    disabled: n.shouldCancel,
                    onClick: v,
                    children: [
                      /* @__PURE__ */ f.jsx(fp, { size: 16 }),
                      "Stop Scan"
                    ]
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ f.jsxs("div", { className: "meld-import-container", children: [
              /* @__PURE__ */ f.jsxs("div", { className: "meld-import-sidebar", children: [
                /* @__PURE__ */ f.jsxs("div", { className: "meld-form-group", children: [
                  /* @__PURE__ */ f.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                  /* @__PURE__ */ f.jsxs(
                    "select",
                    {
                      id: "base-location",
                      value: r.type,
                      onChange: (m) => l({
                        ...r,
                        type: m.target.value,
                        subfolder: ""
                      }),
                      children: [
                        /* @__PURE__ */ f.jsx("option", { value: "output", children: "Output Directory" }),
                        /* @__PURE__ */ f.jsx("option", { value: "input", children: "Input Directory" }),
                        /* @__PURE__ */ f.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                      ]
                    }
                  )
                ] }),
                r.type === "custom" ? /* @__PURE__ */ f.jsxs("div", { className: "meld-form-group", children: [
                  /* @__PURE__ */ f.jsx("label", { htmlFor: "custom-path", children: "Absolute Path" }),
                  /* @__PURE__ */ f.jsx(
                    "input",
                    {
                      id: "custom-path",
                      type: "text",
                      placeholder: "C:\\path\\to\\images or /path/to/images",
                      value: r.custom_path,
                      onChange: (m) => l({ ...r, custom_path: m.target.value })
                    }
                  )
                ] }) : /* @__PURE__ */ f.jsxs("div", { className: "meld-form-group", children: [
                  /* @__PURE__ */ f.jsx("span", { className: "meld-form-label", children: "Current Path" }),
                  /* @__PURE__ */ f.jsxs("div", { className: "meld-path-display", children: [
                    /* @__PURE__ */ f.jsxs("span", { children: [
                      r.type,
                      "/"
                    ] }),
                    r.subfolder
                  ] })
                ] }),
                /* @__PURE__ */ f.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ f.jsxs("label", { children: [
                  /* @__PURE__ */ f.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: r.recursive,
                      onChange: (m) => l({ ...r, recursive: m.target.checked })
                    }
                  ),
                  "Recursive Scan"
                ] }) }),
                /* @__PURE__ */ f.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ f.jsxs("label", { children: [
                  /* @__PURE__ */ f.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: r.auto_link_parent,
                      onChange: (m) => l({
                        ...r,
                        auto_link_parent: m.target.checked
                      })
                    }
                  ),
                  "Auto Link Parent"
                ] }) }),
                /* @__PURE__ */ f.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ f.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn-primary",
                    onClick: y,
                    style: { width: "100%" },
                    children: [
                      /* @__PURE__ */ f.jsx(cp, { size: 16 }),
                      "Start Import"
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { className: "meld-import-browser", children: [
                r.type !== "custom" && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                  /* @__PURE__ */ f.jsxs("div", { className: "meld-browser-header", children: [
                    /* @__PURE__ */ f.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-browser-back",
                        disabled: !r.subfolder,
                        onClick: k,
                        children: [
                          /* @__PURE__ */ f.jsx(mc, { size: 16 }),
                          "Back"
                        ]
                      }
                    ),
                    /* @__PURE__ */ f.jsx("span", { className: "meld-browser-title", children: "Browse Folders" })
                  ] }),
                  /* @__PURE__ */ f.jsx("div", { className: "meld-folder-list", children: u ? /* @__PURE__ */ f.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : i.length === 0 ? /* @__PURE__ */ f.jsx("div", { className: "meld-browser-empty", children: "No subfolders found." }) : i.map((m) => /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: "meld-folder-item",
                      onClick: () => h(m),
                      children: [
                        /* @__PURE__ */ f.jsx(bu, { size: 16 }),
                        /* @__PURE__ */ f.jsx("span", { children: m }),
                        /* @__PURE__ */ f.jsx(hc, { size: 14 })
                      ]
                    },
                    m
                  )) })
                ] }),
                r.type === "custom" && /* @__PURE__ */ f.jsxs("div", { className: "meld-browser-info", children: [
                  /* @__PURE__ */ f.jsx(bu, { size: 48 }),
                  /* @__PURE__ */ f.jsx("p", { children: "Please enter an absolute path in the sidebar." }),
                  /* @__PURE__ */ f.jsx("span", { style: { fontSize: "11px", color: "#666" }, children: "Example: C:\\Users\\Me\\Pictures or /home/me/images" })
                ] })
              ] })
            ] }) })
          ]
        }
      )
    }
  );
}, Np = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = fn(), [l, i] = M.useState([]), [o, u] = M.useState(!0), [a, d] = M.useState(!1), y = t.images.find((s) => s.id === e), v = M.useCallback(async () => {
    u(!0);
    try {
      const s = await Wf(e);
      i(s);
    } catch (s) {
      console.error("Failed to load suggestions:", s);
    } finally {
      u(!1);
    }
  }, [e]);
  M.useEffect(() => {
    v();
  }, [v]);
  const h = async (s) => {
    try {
      await Hf(e, s), await r(), n({ type: "CLOSE_MODAL" });
    } catch (c) {
      console.error("Failed to link parent:", c);
    }
  }, k = async (s) => {
    u(!0);
    try {
      const c = await Gf(s), { id: p } = await dc({
        filename: c.name,
        subfolder: c.subfolder || "",
        type: c.type || "input"
      });
      await h(p);
    } catch (c) {
      console.error("Failed to upload/register image:", c);
    } finally {
      u(!1);
    }
  }, S = (s) => {
    s.preventDefault(), s.stopPropagation(), d(!1);
    const c = s.dataTransfer.files[0];
    c != null && c.type.startsWith("image/") && k(c);
  };
  if (!y) return null;
  const m = l.filter((s) => s.is_source_match), L = l.filter((s) => !s.is_source_match);
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => n({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ f.jsxs("div", { className: "meld-modal-content", onClick: (s) => s.stopPropagation(), children: [
        /* @__PURE__ */ f.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ f.jsxs("h2", { children: [
            "Select Parent for #",
            y.id
          ] }),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              type: "button",
              className: "meld-modal-close",
              onClick: () => n({ type: "CLOSE_MODAL" }),
              children: /* @__PURE__ */ f.jsx(lr, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "meld-modal-body", children: [
          /* @__PURE__ */ f.jsxs(
            "div",
            {
              className: `meld-drop-zone ${a ? "meld-drop-zone--active" : ""}`,
              onDragEnter: (s) => {
                s.preventDefault(), s.stopPropagation(), d(!0);
              },
              onDragOver: (s) => {
                s.preventDefault(), s.stopPropagation(), s.dataTransfer.dropEffect = "copy", d(!0);
              },
              onDragLeave: (s) => {
                s.preventDefault(), s.stopPropagation(), d(!1);
              },
              onDrop: S,
              children: [
                /* @__PURE__ */ f.jsx(mp, { size: 32 }),
                /* @__PURE__ */ f.jsx("p", { children: "Drop an image file here to set it as parent" })
              ]
            }
          ),
          o ? /* @__PURE__ */ f.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ f.jsxs("div", { className: "meld-suggestions-container", children: [
            m.length > 0 && /* @__PURE__ */ f.jsxs("section", { children: [
              /* @__PURE__ */ f.jsx("h3", { children: "Source Matches (from metadata)" }),
              /* @__PURE__ */ f.jsx("div", { className: "meld-suggestion-grid", children: m.map((s) => /* @__PURE__ */ f.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => h(s.id),
                  children: [
                    /* @__PURE__ */ f.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(s.filename)}&type=${s.type || "output"}${s.subfolder ? `&subfolder=${encodeURIComponent(s.subfolder)}` : ""}`,
                        alt: s.filename
                      }
                    ),
                    /* @__PURE__ */ f.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ f.jsx("span", { className: "meld-suggestion-filename", children: s.filename }) })
                  ]
                },
                s.id
              )) })
            ] }),
            /* @__PURE__ */ f.jsxs("section", { children: [
              /* @__PURE__ */ f.jsx("h3", { children: "Visual Matches (pHash)" }),
              L.length > 0 ? /* @__PURE__ */ f.jsx("div", { className: "meld-suggestion-grid", children: L.map((s) => /* @__PURE__ */ f.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => h(s.id),
                  children: [
                    /* @__PURE__ */ f.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(s.filename)}&type=${s.type || "output"}${s.subfolder ? `&subfolder=${encodeURIComponent(s.subfolder)}` : ""}`,
                        alt: s.filename
                      }
                    ),
                    /* @__PURE__ */ f.jsxs("div", { className: "meld-suggestion-info", children: [
                      /* @__PURE__ */ f.jsx("span", { className: "meld-suggestion-filename", children: s.filename }),
                      /* @__PURE__ */ f.jsxs("span", { className: "meld-suggestion-distance", children: [
                        "Match:",
                        " ",
                        Math.round((64 - s.distance) / 64 * 100),
                        "%"
                      ] })
                    ] })
                  ]
                },
                s.id
              )) }) : /* @__PURE__ */ f.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
            ] })
          ] })
        ] })
      ] })
    }
  );
}, jp = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = fn(), l = M.useRef(null);
  return $e.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), M.useEffect(() => {
    const i = new IntersectionObserver(
      (u) => {
        u[0].isIntersecting && !e.isLoading && e.pagination.hasMore && ($e.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), o = l.current;
    return o && i.observe(o), () => {
      o && i.unobserve(o);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), /* @__PURE__ */ f.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ f.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
          gap: "15px"
        },
        children: [
          /* @__PURE__ */ f.jsxs(
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
                /* @__PURE__ */ f.jsx(ip, { size: 14 }),
                "Import"
              ]
            }
          ),
          /* @__PURE__ */ f.jsxs(
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
                /* @__PURE__ */ f.jsx(
                  vc,
                  {
                    size: 14,
                    className: e.isLoading ? "animate-spin" : ""
                  }
                ),
                "Refresh"
              ]
            }
          )
        ]
      }
    ),
    e.error && /* @__PURE__ */ f.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && e.images.length === 0 ? /* @__PURE__ */ f.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : e.images.length === 0 ? /* @__PURE__ */ f.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx("div", { className: "meld-gallery__list", children: e.images.map((i) => /* @__PURE__ */ f.jsx(Ep, { image: i }, i.id)) }),
      /* @__PURE__ */ f.jsxs(
        "div",
        {
          ref: l,
          className: "meld-gallery__load-more",
          style: { height: "20px", margin: "20px 0", textAlign: "center" },
          children: [
            e.isLoading && /* @__PURE__ */ f.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
            !e.pagination.hasMore && e.images.length > 0 && /* @__PURE__ */ f.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx(xp, {}),
    e.viewerImageId !== null && /* @__PURE__ */ f.jsx(_p, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ f.jsx(Np, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ f.jsx(Cp, {})
  ] });
}, _l = document.createElement("link");
_l.rel = "stylesheet";
_l.type = "text/css";
_l.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(_l);
let _r = null, Me = null;
wc.registerExtension({
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
      const n = await Bf();
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
      }, ie.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), ie.addEventListener("meld-nexus-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-progress", { detail: n.detail })
        );
      }), ie.addEventListener("meld-nexus-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-finished", { detail: n.detail })
        ), (r = e.ui.meldNexus) == null || r.refresh(), console.log("Meld Nexus: Import completed.");
      }), ie.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await dc({
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
            $e.log("MeldNexus: render called", {
              el: n,
              galleryRoot: _r,
              galleryContainer: Me
            }), Me || ($e.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), Me = document.createElement("div"), Me.id = "meld-flow-gallery-container", Me.style.height = "100%", Me.style.width = "100%", Me.style.display = "flex", Me.style.flexDirection = "column"), n.contains(Me) || ($e.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(Me)), _r ? $e.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : ($e.log("MeldNexus: Creating new gallery root"), _r = cc(Me), _r.render(
              Qo.createElement(
                Sp,
                null,
                Qo.createElement(jp)
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
