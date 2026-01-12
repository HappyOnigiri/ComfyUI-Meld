import { api as Z } from "../../../scripts/api.js";
import { app as Sc } from "../../../scripts/app.js";
function kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ta = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er = Symbol.for("react.element"), _c = Symbol.for("react.portal"), Ec = Symbol.for("react.fragment"), Cc = Symbol.for("react.strict_mode"), Nc = Symbol.for("react.profiler"), jc = Symbol.for("react.provider"), Ic = Symbol.for("react.context"), Pc = Symbol.for("react.forward_ref"), Lc = Symbol.for("react.suspense"), Tc = Symbol.for("react.memo"), Mc = Symbol.for("react.lazy"), Wo = Symbol.iterator;
function zc(e) {
  return e === null || typeof e != "object" ? null : (e = Wo && e[Wo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var na = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ra = Object.assign, la = {};
function dn(e, t, n) {
  this.props = e, this.context = t, this.refs = la, this.updater = n || na;
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ia() {
}
ia.prototype = dn.prototype;
function Ki(e, t, n) {
  this.props = e, this.context = t, this.refs = la, this.updater = n || na;
}
var Yi = Ki.prototype = new ia();
Yi.constructor = Ki;
ra(Yi, dn.prototype);
Yi.isPureReactComponent = !0;
var Bo = Array.isArray, oa = Object.prototype.hasOwnProperty, Xi = { current: null }, sa = { key: !0, ref: !0, __self: !0, __source: !0 };
function aa(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) oa.call(t, r) && !sa.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), f = 0; f < s; f++) u[f] = arguments[f + 2];
    l.children = u;
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
function Dc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ho = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Dc("" + e.key) : t.toString(36);
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
        case _c:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Il(o, 0) : r, Bo(l) ? (n = "", e != null && (n = e.replace(Ho, "$&/") + "/"), Cr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (Zi(l) && (l = Rc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ho, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Bo(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var u = r + Il(i, s);
    o += Cr(i, t, n, u, l);
  }
  else if (u = zc(e), typeof u == "function") for (e = u.call(e), s = 0; !(i = e.next()).done; ) i = i.value, u = r + Il(i, s++), o += Cr(i, t, n, u, l);
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
var ce = { current: null }, Nr = { transition: null }, Fc = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Nr, ReactCurrentOwner: Xi };
function ua() {
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
z.Fragment = Ec;
z.Profiler = Nc;
z.PureComponent = Ki;
z.StrictMode = Cc;
z.Suspense = Lc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fc;
z.act = ua;
z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ra({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Xi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (u in t) oa.call(t, u) && !sa.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var f = 0; f < u; f++) s[f] = arguments[f + 2];
    r.children = s;
  }
  return { $$typeof: er, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function(e) {
  return e = { $$typeof: Ic, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: jc, _context: e }, e.Consumer = e;
};
z.createElement = aa;
z.createFactory = function(e) {
  var t = aa.bind(null, e);
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
  return { $$typeof: Mc, _payload: { _status: -1, _result: e }, _init: Oc };
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
z.unstable_act = ua;
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
ta.exports = z;
var I = ta.exports;
const Go = /* @__PURE__ */ kc(I);
var ca = { exports: {} }, ke = {}, da = { exports: {} }, fa = {};
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
  function t(N, L) {
    var M = N.length;
    N.push(L);
    e: for (; 0 < M; ) {
      var G = M - 1 >>> 1, q = N[G];
      if (0 < l(q, L)) N[G] = L, N[M] = q, M = G;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var L = N[0], M = N.pop();
    if (M !== L) {
      N[0] = M;
      e: for (var G = 0, q = N.length, ir = q >>> 1; G < ir; ) {
        var St = 2 * (G + 1) - 1, jl = N[St], kt = St + 1, or = N[kt];
        if (0 > l(jl, M)) kt < q && 0 > l(or, jl) ? (N[G] = or, N[kt] = M, G = kt) : (N[G] = jl, N[St] = M, G = St);
        else if (kt < q && 0 > l(or, M)) N[G] = or, N[kt] = M, G = kt;
        else break e;
      }
    }
    return L;
  }
  function l(N, L) {
    var M = N.sortIndex - L.sortIndex;
    return M !== 0 ? M : N.id - L.id;
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
  var u = [], f = [], g = 1, h = null, m = 3, _ = !1, k = !1, y = !1, P = typeof setTimeout == "function" ? setTimeout : null, a = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var L = n(f); L !== null; ) {
      if (L.callback === null) r(f);
      else if (L.startTime <= N) r(f), L.sortIndex = L.expirationTime, t(u, L);
      else break;
      L = n(f);
    }
  }
  function w(N) {
    if (y = !1, p(N), !k) if (n(u) !== null) k = !0, Cl(v);
    else {
      var L = n(f);
      L !== null && Nl(w, L.startTime - N);
    }
  }
  function v(N, L) {
    k = !1, y && (y = !1, a(j), j = -1), _ = !0;
    var M = m;
    try {
      for (p(L), h = n(u); h !== null && (!(h.expirationTime > L) || N && !fe()); ) {
        var G = h.callback;
        if (typeof G == "function") {
          h.callback = null, m = h.priorityLevel;
          var q = G(h.expirationTime <= L);
          L = e.unstable_now(), typeof q == "function" ? h.callback = q : h === n(u) && r(u), p(L);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var ir = !0;
      else {
        var St = n(f);
        St !== null && Nl(w, St.startTime - L), ir = !1;
      }
      return ir;
    } finally {
      h = null, m = M, _ = !1;
    }
  }
  var S = !1, E = null, j = -1, D = 5, T = -1;
  function fe() {
    return !(e.unstable_now() - T < D);
  }
  function mn() {
    if (E !== null) {
      var N = e.unstable_now();
      T = N;
      var L = !0;
      try {
        L = E(!0, N);
      } finally {
        L ? hn() : (S = !1, E = null);
      }
    } else S = !1;
  }
  var hn;
  if (typeof d == "function") hn = function() {
    d(mn);
  };
  else if (typeof MessageChannel < "u") {
    var Qo = new MessageChannel(), xc = Qo.port2;
    Qo.port1.onmessage = mn, hn = function() {
      xc.postMessage(null);
    };
  } else hn = function() {
    P(mn, 0);
  };
  function Cl(N) {
    E = N, S || (S = !0, hn());
  }
  function Nl(N, L) {
    j = P(function() {
      N(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    k || _ || (k = !0, Cl(v));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(N) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = m;
    }
    var M = m;
    m = L;
    try {
      return N();
    } finally {
      m = M;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, L) {
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
    var M = m;
    m = N;
    try {
      return L();
    } finally {
      m = M;
    }
  }, e.unstable_scheduleCallback = function(N, L, M) {
    var G = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? G + M : G) : M = G, N) {
      case 1:
        var q = -1;
        break;
      case 2:
        q = 250;
        break;
      case 5:
        q = 1073741823;
        break;
      case 4:
        q = 1e4;
        break;
      default:
        q = 5e3;
    }
    return q = M + q, N = { id: g++, callback: L, priorityLevel: N, startTime: M, expirationTime: q, sortIndex: -1 }, M > G ? (N.sortIndex = M, t(f, N), n(u) === null && N === n(f) && (y ? (a(j), j = -1) : y = !0, Nl(w, M - G))) : (N.sortIndex = q, t(u, N), k || _ || (k = !0, Cl(v))), N;
  }, e.unstable_shouldYield = fe, e.unstable_wrapCallback = function(N) {
    var L = m;
    return function() {
      var M = m;
      m = L;
      try {
        return N.apply(this, arguments);
      } finally {
        m = M;
      }
    };
  };
})(fa);
da.exports = fa;
var Ac = da.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc = I, Se = Ac;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var pa = /* @__PURE__ */ new Set(), Fn = {};
function Dt(e, t) {
  rn(e, t), rn(e + "Capture", t);
}
function rn(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) pa.add(t[e]);
}
var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ei = Object.prototype.hasOwnProperty, $c = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ko = {}, Yo = {};
function Vc(e) {
  return ei.call(Yo, e) ? !0 : ei.call(Ko, e) ? !1 : $c.test(e) ? Yo[e] = !0 : (Ko[e] = !0, !1);
}
function Qc(e, t, n, r) {
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
  if (t === null || typeof t > "u" || Qc(e, t, n, r)) return !0;
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
var be = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ar = Symbol.for("react.element"), Ut = Symbol.for("react.portal"), $t = Symbol.for("react.fragment"), eo = Symbol.for("react.strict_mode"), ti = Symbol.for("react.profiler"), ma = Symbol.for("react.provider"), ha = Symbol.for("react.context"), to = Symbol.for("react.forward_ref"), ni = Symbol.for("react.suspense"), ri = Symbol.for("react.suspense_list"), no = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), ga = Symbol.for("react.offscreen"), Xo = Symbol.iterator;
function gn(e) {
  return e === null || typeof e != "object" ? null : (e = Xo && e[Xo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W = Object.assign, Pl;
function En(e) {
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
              var u = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    Ll = !1, Error.prepareStackTrace = n;
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
    case ha:
      return (e.displayName || "Context") + ".Consumer";
    case ma:
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
function ya(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Gc(e) {
  var t = ya(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Gc(e));
}
function va(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ya(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
  return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Zo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function wa(e, t) {
  t = t.checked, t != null && bi(e, "checked", t, !1);
}
function oi(e, t) {
  wa(e, t);
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
function ai(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function qo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(x(92));
      if (Cn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ht(n) };
}
function xa(e, t) {
  var n = ht(t.value), r = ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function bo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ui(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Sa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var cr, ka = function(e) {
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
function _a(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px";
}
function Ea(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = _a(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Yc = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ci(e, t) {
  if (t) {
    if (Yc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
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
    if (typeof pi != "function") throw Error(x(280));
    var t = e.stateNode;
    t && (t = fl(t), pi(e.stateNode, e.type, t));
  }
}
function Ca(e) {
  qt ? bt ? bt.push(e) : bt = [e] : qt = e;
}
function Na() {
  if (qt) {
    var e = qt, t = bt;
    if (bt = qt = null, es(e), t) for (e = 0; e < t.length; e++) es(t[e]);
  }
}
function ja(e, t) {
  return e(t);
}
function Ia() {
}
var Ml = !1;
function Pa(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return ja(e, t, n);
  } finally {
    Ml = !1, (qt !== null || bt !== null) && (Ia(), Na());
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
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
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
function Xc(e, t, n, r, l, i, o, s, u) {
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
function Jc(e, t, n, r, l, i, o, s, u) {
  Pn = !1, Ar = null, Xc.apply(Zc, arguments);
}
function qc(e, t, n, r, l, i, o, s, u) {
  if (Jc.apply(this, arguments), Pn) {
    if (Pn) {
      var f = Ar;
      Pn = !1, Ar = null;
    } else throw Error(x(198));
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
function La(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ts(e) {
  if (Ot(e) !== e) throw Error(x(188));
}
function bc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ot(e), t === null) throw Error(x(188));
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
      throw Error(x(188));
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
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Ta(e) {
  return e = bc(e), e !== null ? Ma(e) : null;
}
function Ma(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ma(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var za = Se.unstable_scheduleCallback, ns = Se.unstable_cancelCallback, ed = Se.unstable_shouldYield, td = Se.unstable_requestPaint, K = Se.unstable_now, nd = Se.unstable_getCurrentPriorityLevel, lo = Se.unstable_ImmediatePriority, Ra = Se.unstable_UserBlockingPriority, $r = Se.unstable_NormalPriority, rd = Se.unstable_LowPriority, Da = Se.unstable_IdlePriority, al = null, Qe = null;
function ld(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function") try {
    Qe.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Oe = Math.clz32 ? Math.clz32 : sd, id = Math.log, od = Math.LN2;
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
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function ad(e, t) {
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
    var o = 31 - Oe(i), s = 1 << o, u = l[o];
    u === -1 ? (!(s & n) || s & r) && (l[o] = ad(s, t)) : u <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function gi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Oa() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n;
}
function cd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function io(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Fa(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Aa, oo, Ua, $a, Va, yi = !1, pr = [], st = null, at = null, ut = null, $n = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map(), rt = [], dd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      at = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
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
      return at = vn(at, e, t, n, r, l), !0;
    case "mouseover":
      return ut = vn(ut, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return $n.set(i, vn($n.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Vn.set(i, vn(Vn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Qa(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = Ot(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = La(n), t !== null) {
          e.blockedOn = t, Va(e.priority, function() {
            Ua(n);
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
  yi = !1, st !== null && jr(st) && (st = null), at !== null && jr(at) && (at = null), ut !== null && jr(ut) && (ut = null), $n.forEach(ls), Vn.forEach(ls);
}
function wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yi || (yi = !0, Se.unstable_scheduleCallback(Se.unstable_NormalPriority, pd)));
}
function Qn(e) {
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
  for (st !== null && wn(st, e), at !== null && wn(at, e), ut !== null && wn(ut, e), $n.forEach(t), Vn.forEach(t), n = 0; n < rt.length; n++) r = rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rt.length && (n = rt[0], n.blockedOn === null); ) Qa(n), n.blockedOn === null && rt.shift();
}
var en = be.ReactCurrentBatchConfig, Qr = !0;
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
  if (Qr) {
    var l = vi(e, t, n, r);
    if (l === null) Wl(e, t, r, Wr, n), rs(e, r);
    else if (fd(l, e, t, n, r)) r.stopPropagation();
    else if (rs(e, r), t & 4 && -1 < dd.indexOf(e)) {
      for (; l !== null; ) {
        var i = rr(l);
        if (i !== null && Aa(i), i = vi(e, t, n, r), i === null && Wl(e, t, r, Wr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Wl(e, t, r, null, n);
  }
}
var Wr = null;
function vi(e, t, n, r) {
  if (Wr = null, e = ro(r), e = Ct(e), e !== null) if (t = Ot(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = La(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Wr = e, null;
}
function Wa(e) {
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
        case Ra:
          return 4;
        case $r:
        case rd:
          return 16;
        case Da:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null, ao = null, Ir = null;
function Ba() {
  if (Ir) return Ir;
  var e, t = ao, n = t.length, r, l = "value" in it ? it.value : it.textContent, i = l.length;
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
function _e(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? mr : is, this.isPropagationStopped = is, this;
  }
  return W(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, uo = _e(fn), nr = W({}, fn, { view: 0, detail: 0 }), gd = _e(nr), Rl, Dl, xn, ul = W({}, nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: co, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xn && (xn && e.type === "mousemove" ? (Rl = e.screenX - xn.screenX, Dl = e.screenY - xn.screenY) : Dl = Rl = 0, xn = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Dl;
} }), os = _e(ul), yd = W({}, ul, { dataTransfer: 0 }), vd = _e(yd), wd = W({}, nr, { relatedTarget: 0 }), Ol = _e(wd), xd = W({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sd = _e(xd), kd = W({}, fn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), _d = _e(kd), Ed = W({}, fn, { data: 0 }), ss = _e(Ed), Cd = {
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
var Pd = W({}, nr, { key: function(e) {
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
} }), Ld = _e(Pd), Td = W({}, ul, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), as = _e(Td), Md = W({}, nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: co }), zd = _e(Md), Rd = W({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Dd = _e(Rd), Od = W({}, ul, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Fd = _e(Od), Ad = [9, 13, 27, 32], fo = Xe && "CompositionEvent" in window, Ln = null;
Xe && "documentMode" in document && (Ln = document.documentMode);
var Ud = Xe && "TextEvent" in window && !Ln, Ha = Xe && (!fo || Ln && 8 < Ln && 11 >= Ln), us = " ", cs = !1;
function Ga(e, t) {
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
function Ka(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Vt = !1;
function $d(e, t) {
  switch (e) {
    case "compositionend":
      return Ka(t);
    case "keypress":
      return t.which !== 32 ? null : (cs = !0, us);
    case "textInput":
      return e = t.data, e === us && cs ? null : e;
    default:
      return null;
  }
}
function Vd(e, t) {
  if (Vt) return e === "compositionend" || !fo && Ga(e, t) ? (e = Ba(), Ir = ao = it = null, Vt = !1, e) : null;
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
      return Ha && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qd[e.type] : t === "textarea";
}
function Ya(e, t, n, r) {
  Ca(r), t = Br(t, "onChange"), 0 < t.length && (n = new uo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Tn = null, Wn = null;
function Wd(e) {
  iu(e, 0);
}
function cl(e) {
  var t = Bt(e);
  if (va(t)) return e;
}
function Bd(e, t) {
  if (e === "change") return t;
}
var Xa = !1;
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
  Xa = Fl && (!document.documentMode || 9 < document.documentMode);
}
function ps() {
  Tn && (Tn.detachEvent("onpropertychange", Za), Wn = Tn = null);
}
function Za(e) {
  if (e.propertyName === "value" && cl(Wn)) {
    var t = [];
    Ya(t, Wn, e, ro(e)), Pa(Wd, t);
  }
}
function Hd(e, t, n) {
  e === "focusin" ? (ps(), Tn = t, Wn = n, Tn.attachEvent("onpropertychange", Za)) : e === "focusout" && ps();
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
function Bn(e, t) {
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
function Ja(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ja(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qa() {
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
  var t = qa(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ja(n.ownerDocument.documentElement, n)) {
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
var Jd = Xe && "documentMode" in document && 11 >= document.documentMode, Qt = null, wi = null, Mn = null, xi = !1;
function gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xi || Qt == null || Qt !== Fr(r) || (r = Qt, "selectionStart" in r && po(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mn && Bn(Mn, r) || (Mn = r, r = Br(wi, "onSelect"), 0 < r.length && (t = new uo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qt)));
}
function hr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Wt = { animationend: hr("Animation", "AnimationEnd"), animationiteration: hr("Animation", "AnimationIteration"), animationstart: hr("Animation", "AnimationStart"), transitionend: hr("Transition", "TransitionEnd") }, Ul = {}, ba = {};
Xe && (ba = document.createElement("div").style, "AnimationEvent" in window || (delete Wt.animationend.animation, delete Wt.animationiteration.animation, delete Wt.animationstart.animation), "TransitionEvent" in window || delete Wt.transitionend.transition);
function dl(e) {
  if (Ul[e]) return Ul[e];
  if (!Wt[e]) return e;
  var t = Wt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ba) return Ul[e] = t[n];
  return e;
}
var eu = dl("animationend"), tu = dl("animationiteration"), nu = dl("animationstart"), ru = dl("transitionend"), lu = /* @__PURE__ */ new Map(), ys = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yt(e, t) {
  lu.set(e, t), Dt(t, [e]);
}
for (var $l = 0; $l < ys.length; $l++) {
  var Vl = ys[$l], qd = Vl.toLowerCase(), bd = Vl[0].toUpperCase() + Vl.slice(1);
  yt(qd, "on" + bd);
}
yt(eu, "onAnimationEnd");
yt(tu, "onAnimationIteration");
yt(nu, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(ru, "onTransitionEnd");
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
function iu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], u = s.instance, f = s.currentTarget;
        if (s = s.listener, u !== i && l.isPropagationStopped()) break e;
        vs(l, s, f), i = u;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], u = s.instance, f = s.currentTarget, s = s.listener, u !== i && l.isPropagationStopped()) break e;
        vs(l, s, f), i = u;
      }
    }
  }
  if (Ur) throw e = hi, Ur = !1, hi = null, e;
}
function A(e, t) {
  var n = t[Ci];
  n === void 0 && (n = t[Ci] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ou(t, e, 2, !1), n.add(r));
}
function Ql(e, t, n) {
  var r = 0;
  t && (r |= 4), ou(n, e, r, t);
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Hn(e) {
  if (!e[gr]) {
    e[gr] = !0, pa.forEach(function(n) {
      n !== "selectionchange" && (ef.has(n) || Ql(n, !1, e), Ql(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gr] || (t[gr] = !0, Ql("selectionchange", !1, t));
  }
}
function ou(e, t, n, r) {
  switch (Wa(t)) {
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
        var u = o.tag;
        if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        o = o.return;
      }
      for (; s !== null; ) {
        if (o = Ct(s), o === null) return;
        if (u = o.tag, u === 5 || u === 6) {
          r = i = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Pa(function() {
    var f = i, g = ro(n), h = [];
    e: {
      var m = lu.get(e);
      if (m !== void 0) {
        var _ = uo, k = e;
        switch (e) {
          case "keypress":
            if (Pr(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = Ld;
            break;
          case "focusin":
            k = "focus", _ = Ol;
            break;
          case "focusout":
            k = "blur", _ = Ol;
            break;
          case "beforeblur":
          case "afterblur":
            _ = Ol;
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
            _ = os;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = zd;
            break;
          case eu:
          case tu:
          case nu:
            _ = Sd;
            break;
          case ru:
            _ = Dd;
            break;
          case "scroll":
            _ = gd;
            break;
          case "wheel":
            _ = Fd;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = _d;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = as;
        }
        var y = (t & 4) !== 0, P = !y && e === "scroll", a = y ? m !== null ? m + "Capture" : null : m;
        y = [];
        for (var d = f, p; d !== null; ) {
          p = d;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, a !== null && (w = Un(d, a), w != null && y.push(Gn(d, w, p)))), P) break;
          d = d.return;
        }
        0 < y.length && (m = new _(m, k, null, n, g), h.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", m && n !== fi && (k = n.relatedTarget || n.fromElement) && (Ct(k) || k[Ze])) break e;
        if ((_ || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window, _ ? (k = n.relatedTarget || n.toElement, _ = f, k = k ? Ct(k) : null, k !== null && (P = Ot(k), k !== P || k.tag !== 5 && k.tag !== 6) && (k = null)) : (_ = null, k = f), _ !== k)) {
          if (y = os, w = "onMouseLeave", a = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (y = as, w = "onPointerLeave", a = "onPointerEnter", d = "pointer"), P = _ == null ? m : Bt(_), p = k == null ? m : Bt(k), m = new y(w, d + "leave", _, n, g), m.target = P, m.relatedTarget = p, w = null, Ct(g) === f && (y = new y(a, d + "enter", k, n, g), y.target = p, y.relatedTarget = P, w = y), P = w, _ && k) t: {
            for (y = _, a = k, d = 0, p = y; p; p = At(p)) d++;
            for (p = 0, w = a; w; w = At(w)) p++;
            for (; 0 < d - p; ) y = At(y), d--;
            for (; 0 < p - d; ) a = At(a), p--;
            for (; d--; ) {
              if (y === a || a !== null && y === a.alternate) break t;
              y = At(y), a = At(a);
            }
            y = null;
          }
          else y = null;
          _ !== null && ws(h, m, _, y, !1), k !== null && P !== null && ws(h, P, k, y, !0);
        }
      }
      e: {
        if (m = f ? Bt(f) : window, _ = m.nodeName && m.nodeName.toLowerCase(), _ === "select" || _ === "input" && m.type === "file") var v = Bd;
        else if (ds(m)) if (Xa) v = Yd;
        else {
          v = Gd;
          var S = Hd;
        }
        else (_ = m.nodeName) && _.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (v = Kd);
        if (v && (v = v(e, f))) {
          Ya(h, v, n, g);
          break e;
        }
        S && S(e, m, f), e === "focusout" && (S = m._wrapperState) && S.controlled && m.type === "number" && si(m, "number", m.value);
      }
      switch (S = f ? Bt(f) : window, e) {
        case "focusin":
          (ds(S) || S.contentEditable === "true") && (Qt = S, wi = f, Mn = null);
          break;
        case "focusout":
          Mn = wi = Qt = null;
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
      var E;
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
      else Vt ? Ga(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j && (Ha && n.locale !== "ko" && (Vt || j !== "onCompositionStart" ? j === "onCompositionEnd" && Vt && (E = Ba()) : (it = g, ao = "value" in it ? it.value : it.textContent, Vt = !0)), S = Br(f, j), 0 < S.length && (j = new ss(j, e, null, n, g), h.push({ event: j, listeners: S }), E ? j.data = E : (E = Ka(n), E !== null && (j.data = E)))), (E = Ud ? $d(e, n) : Vd(e, n)) && (f = Br(f, "onBeforeInput"), 0 < f.length && (g = new ss("onBeforeInput", "beforeinput", null, n, g), h.push({ event: g, listeners: f }), g.data = E));
    }
    iu(h, t);
  });
}
function Gn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Br(e, t) {
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
    var s = n, u = s.alternate, f = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 && f !== null && (s = f, l ? (u = Un(n, i), u != null && o.unshift(Gn(n, u, s))) : l || (u = Un(n, i), u != null && o.push(Gn(n, u, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var tf = /\r\n?/g, nf = /\u0000|\uFFFD/g;
function xs(e) {
  return (typeof e == "string" ? e : "" + e).replace(tf, `
`).replace(nf, "");
}
function yr(e, t, n) {
  if (t = xs(t), xs(e) !== t && n) throw Error(x(425));
}
function Hr() {
}
var Si = null, ki = null;
function _i(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ei = typeof setTimeout == "function" ? setTimeout : void 0, rf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ss = typeof Promise == "function" ? Promise : void 0, lf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ss < "u" ? function(e) {
  return Ss.resolve(null).then(e).catch(of);
} : Ei;
function of(e) {
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
        e.removeChild(l), Qn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Qn(t);
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
var pn = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + pn, Kn = "__reactProps$" + pn, Ze = "__reactContainer$" + pn, Ci = "__reactEvents$" + pn, sf = "__reactListeners$" + pn, af = "__reactHandles$" + pn;
function Ct(e) {
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
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function fl(e) {
  return e[Kn] || null;
}
var Ni = [], Ht = -1;
function vt(e) {
  return { current: e };
}
function U(e) {
  0 > Ht || (e.current = Ni[Ht], Ni[Ht] = null, Ht--);
}
function F(e, t) {
  Ht++, Ni[Ht] = e.current, e.current = t;
}
var gt = {}, se = vt(gt), he = vt(!1), Lt = gt;
function ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ge(e) {
  return e = e.childContextTypes, e != null;
}
function Gr() {
  U(he), U(se);
}
function _s(e, t, n) {
  if (se.current !== gt) throw Error(x(168));
  F(se, t), F(he, n);
}
function su(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Hc(e) || "Unknown", l));
  return W({}, n, r);
}
function Kr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gt, Lt = se.current, F(se, e), F(he, he.current), !0;
}
function Es(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n ? (e = su(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, U(he), U(se), F(se, e)) : U(he), F(he, n);
}
var He = null, pl = !1, Hl = !1;
function au(e) {
  He === null ? He = [e] : He.push(e);
}
function uf(e) {
  pl = !0, au(e);
}
function wt() {
  if (!Hl && He !== null) {
    Hl = !0;
    var e = 0, t = O;
    try {
      var n = He;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      He = null, pl = !1;
    } catch (l) {
      throw He !== null && (He = He.slice(e + 1)), za(lo, wt), l;
    } finally {
      O = t, Hl = !1;
    }
  }
  return null;
}
var Gt = [], Kt = 0, Yr = null, Xr = 0, Ce = [], Ne = 0, Tt = null, Ge = 1, Ke = "";
function _t(e, t) {
  Gt[Kt++] = Xr, Gt[Kt++] = Yr, Yr = e, Xr = t;
}
function uu(e, t, n) {
  Ce[Ne++] = Ge, Ce[Ne++] = Ke, Ce[Ne++] = Tt, Tt = e;
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
function mo(e) {
  e.return !== null && (_t(e, 1), uu(e, 1, 0));
}
function ho(e) {
  for (; e === Yr; ) Yr = Gt[--Kt], Gt[Kt] = null, Xr = Gt[--Kt], Gt[Kt] = null;
  for (; e === Tt; ) Tt = Ce[--Ne], Ce[Ne] = null, Ke = Ce[--Ne], Ce[Ne] = null, Ge = Ce[--Ne], Ce[Ne] = null;
}
var xe = null, we = null, $ = !1, De = null;
function cu(e, t) {
  var n = je(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Cs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xe = e, we = ct(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xe = e, we = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tt !== null ? { id: Ge, overflow: Ke } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xe = e, we = null, !0) : !1;
    default:
      return !1;
  }
}
function ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ii(e) {
  if ($) {
    var t = we;
    if (t) {
      var n = t;
      if (!Cs(e, t)) {
        if (ji(e)) throw Error(x(418));
        t = ct(n.nextSibling);
        var r = xe;
        t && Cs(e, t) ? cu(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, xe = e);
      }
    } else {
      if (ji(e)) throw Error(x(418));
      e.flags = e.flags & -4097 | 2, $ = !1, xe = e;
    }
  }
}
function Ns(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  xe = e;
}
function vr(e) {
  if (e !== xe) return !1;
  if (!$) return Ns(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_i(e.type, e.memoizedProps)), t && (t = we)) {
    if (ji(e)) throw du(), Error(x(418));
    for (; t; ) cu(e, t), t = ct(t.nextSibling);
  }
  if (Ns(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ct(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = xe ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function du() {
  for (var e = we; e; ) e = ct(e.nextSibling);
}
function on() {
  we = xe = null, $ = !1;
}
function go(e) {
  De === null ? De = [e] : De.push(e);
}
var cf = be.ReactCurrentBatchConfig;
function Sn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var s = l.refs;
        o === null ? delete s[i] : s[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function wr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function js(e) {
  var t = e._init;
  return t(e._payload);
}
function fu(e) {
  function t(a, d) {
    if (e) {
      var p = a.deletions;
      p === null ? (a.deletions = [d], a.flags |= 16) : p.push(d);
    }
  }
  function n(a, d) {
    if (!e) return null;
    for (; d !== null; ) t(a, d), d = d.sibling;
    return null;
  }
  function r(a, d) {
    for (a = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? a.set(d.key, d) : a.set(d.index, d), d = d.sibling;
    return a;
  }
  function l(a, d) {
    return a = mt(a, d), a.index = 0, a.sibling = null, a;
  }
  function i(a, d, p) {
    return a.index = p, e ? (p = a.alternate, p !== null ? (p = p.index, p < d ? (a.flags |= 2, d) : p) : (a.flags |= 2, d)) : (a.flags |= 1048576, d);
  }
  function o(a) {
    return e && a.alternate === null && (a.flags |= 2), a;
  }
  function s(a, d, p, w) {
    return d === null || d.tag !== 6 ? (d = ql(p, a.mode, w), d.return = a, d) : (d = l(d, p), d.return = a, d);
  }
  function u(a, d, p, w) {
    var v = p.type;
    return v === $t ? g(a, d, p.props.children, w, p.key) : d !== null && (d.elementType === v || typeof v == "object" && v !== null && v.$$typeof === tt && js(v) === d.type) ? (w = l(d, p.props), w.ref = Sn(a, d, p), w.return = a, w) : (w = Or(p.type, p.key, p.props, null, a.mode, w), w.ref = Sn(a, d, p), w.return = a, w);
  }
  function f(a, d, p, w) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = bl(p, a.mode, w), d.return = a, d) : (d = l(d, p.children || []), d.return = a, d);
  }
  function g(a, d, p, w, v) {
    return d === null || d.tag !== 7 ? (d = Pt(p, a.mode, w, v), d.return = a, d) : (d = l(d, p), d.return = a, d);
  }
  function h(a, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = ql("" + d, a.mode, p), d.return = a, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return p = Or(d.type, d.key, d.props, null, a.mode, p), p.ref = Sn(a, null, d), p.return = a, p;
        case Ut:
          return d = bl(d, a.mode, p), d.return = a, d;
        case tt:
          var w = d._init;
          return h(a, w(d._payload), p);
      }
      if (Cn(d) || gn(d)) return d = Pt(d, a.mode, p, null), d.return = a, d;
      wr(a, d);
    }
    return null;
  }
  function m(a, d, p, w) {
    var v = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return v !== null ? null : s(a, d, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ar:
          return p.key === v ? u(a, d, p, w) : null;
        case Ut:
          return p.key === v ? f(a, d, p, w) : null;
        case tt:
          return v = p._init, m(
            a,
            d,
            v(p._payload),
            w
          );
      }
      if (Cn(p) || gn(p)) return v !== null ? null : g(a, d, p, w, null);
      wr(a, p);
    }
    return null;
  }
  function _(a, d, p, w, v) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return a = a.get(p) || null, s(d, a, "" + w, v);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ar:
          return a = a.get(w.key === null ? p : w.key) || null, u(d, a, w, v);
        case Ut:
          return a = a.get(w.key === null ? p : w.key) || null, f(d, a, w, v);
        case tt:
          var S = w._init;
          return _(a, d, p, S(w._payload), v);
      }
      if (Cn(w) || gn(w)) return a = a.get(p) || null, g(d, a, w, v, null);
      wr(d, w);
    }
    return null;
  }
  function k(a, d, p, w) {
    for (var v = null, S = null, E = d, j = d = 0, D = null; E !== null && j < p.length; j++) {
      E.index > j ? (D = E, E = null) : D = E.sibling;
      var T = m(a, E, p[j], w);
      if (T === null) {
        E === null && (E = D);
        break;
      }
      e && E && T.alternate === null && t(a, E), d = i(T, d, j), S === null ? v = T : S.sibling = T, S = T, E = D;
    }
    if (j === p.length) return n(a, E), $ && _t(a, j), v;
    if (E === null) {
      for (; j < p.length; j++) E = h(a, p[j], w), E !== null && (d = i(E, d, j), S === null ? v = E : S.sibling = E, S = E);
      return $ && _t(a, j), v;
    }
    for (E = r(a, E); j < p.length; j++) D = _(E, a, j, p[j], w), D !== null && (e && D.alternate !== null && E.delete(D.key === null ? j : D.key), d = i(D, d, j), S === null ? v = D : S.sibling = D, S = D);
    return e && E.forEach(function(fe) {
      return t(a, fe);
    }), $ && _t(a, j), v;
  }
  function y(a, d, p, w) {
    var v = gn(p);
    if (typeof v != "function") throw Error(x(150));
    if (p = v.call(p), p == null) throw Error(x(151));
    for (var S = v = null, E = d, j = d = 0, D = null, T = p.next(); E !== null && !T.done; j++, T = p.next()) {
      E.index > j ? (D = E, E = null) : D = E.sibling;
      var fe = m(a, E, T.value, w);
      if (fe === null) {
        E === null && (E = D);
        break;
      }
      e && E && fe.alternate === null && t(a, E), d = i(fe, d, j), S === null ? v = fe : S.sibling = fe, S = fe, E = D;
    }
    if (T.done) return n(
      a,
      E
    ), $ && _t(a, j), v;
    if (E === null) {
      for (; !T.done; j++, T = p.next()) T = h(a, T.value, w), T !== null && (d = i(T, d, j), S === null ? v = T : S.sibling = T, S = T);
      return $ && _t(a, j), v;
    }
    for (E = r(a, E); !T.done; j++, T = p.next()) T = _(E, a, j, T.value, w), T !== null && (e && T.alternate !== null && E.delete(T.key === null ? j : T.key), d = i(T, d, j), S === null ? v = T : S.sibling = T, S = T);
    return e && E.forEach(function(mn) {
      return t(a, mn);
    }), $ && _t(a, j), v;
  }
  function P(a, d, p, w) {
    if (typeof p == "object" && p !== null && p.type === $t && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ar:
          e: {
            for (var v = p.key, S = d; S !== null; ) {
              if (S.key === v) {
                if (v = p.type, v === $t) {
                  if (S.tag === 7) {
                    n(a, S.sibling), d = l(S, p.props.children), d.return = a, a = d;
                    break e;
                  }
                } else if (S.elementType === v || typeof v == "object" && v !== null && v.$$typeof === tt && js(v) === S.type) {
                  n(a, S.sibling), d = l(S, p.props), d.ref = Sn(a, S, p), d.return = a, a = d;
                  break e;
                }
                n(a, S);
                break;
              } else t(a, S);
              S = S.sibling;
            }
            p.type === $t ? (d = Pt(p.props.children, a.mode, w, p.key), d.return = a, a = d) : (w = Or(p.type, p.key, p.props, null, a.mode, w), w.ref = Sn(a, d, p), w.return = a, a = w);
          }
          return o(a);
        case Ut:
          e: {
            for (S = p.key; d !== null; ) {
              if (d.key === S) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(a, d.sibling), d = l(d, p.children || []), d.return = a, a = d;
                break e;
              } else {
                n(a, d);
                break;
              }
              else t(a, d);
              d = d.sibling;
            }
            d = bl(p, a.mode, w), d.return = a, a = d;
          }
          return o(a);
        case tt:
          return S = p._init, P(a, d, S(p._payload), w);
      }
      if (Cn(p)) return k(a, d, p, w);
      if (gn(p)) return y(a, d, p, w);
      wr(a, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(a, d.sibling), d = l(d, p), d.return = a, a = d) : (n(a, d), d = ql(p, a.mode, w), d.return = a, a = d), o(a)) : n(a, d);
  }
  return P;
}
var sn = fu(!0), pu = fu(!1), Zr = vt(null), Jr = null, Yt = null, yo = null;
function vo() {
  yo = Yt = Jr = null;
}
function wo(e) {
  var t = Zr.current;
  U(Zr), e._currentValue = t;
}
function Pi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function tn(e, t) {
  Jr = e, yo = Yt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (me = !0), e.firstContext = null);
}
function Pe(e) {
  var t = e._currentValue;
  if (yo !== e) if (e = { context: e, memoizedValue: t, next: null }, Yt === null) {
    if (Jr === null) throw Error(x(308));
    Yt = e, Jr.dependencies = { lanes: 0, firstContext: e };
  } else Yt = Yt.next = e;
  return t;
}
var Nt = null;
function xo(e) {
  Nt === null ? Nt = [e] : Nt.push(e);
}
function mu(e, t, n, r) {
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
function hu(e, t) {
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
    var u = s, f = u.next;
    u.next = null, o === null ? i = f : o.next = f, o = u;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, s = g.lastBaseUpdate, s !== o && (s === null ? g.firstBaseUpdate = f : s.next = f, g.lastBaseUpdate = u));
  }
  if (i !== null) {
    var h = l.baseState;
    o = 0, g = f = u = null, s = i;
    do {
      var m = s.lane, _ = s.eventTime;
      if ((r & m) === m) {
        g !== null && (g = g.next = {
          eventTime: _,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var k = e, y = s;
          switch (m = t, _ = n, y.tag) {
            case 1:
              if (k = y.payload, typeof k == "function") {
                h = k.call(_, h, m);
                break e;
              }
              h = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = y.payload, m = typeof k == "function" ? k.call(_, h, m) : k, m == null) break e;
              h = W({}, h, m);
              break e;
            case 2:
              nt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [s] : m.push(s));
      } else _ = { eventTime: _, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, g === null ? (f = g = _, u = h) : g = g.next = _, o |= m;
      if (s = s.next, s === null) {
        if (s = l.shared.pending, s === null) break;
        m = s, s = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (u = h), l.baseState = u, l.firstBaseUpdate = f, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    zt |= o, e.lanes = o, e.memoizedState = h;
  }
}
function Ps(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(x(191, l));
      l.call(r);
    }
  }
}
var lr = {}, We = vt(lr), Yn = vt(lr), Xn = vt(lr);
function jt(e) {
  if (e === lr) throw Error(x(174));
  return e;
}
function ko(e, t) {
  switch (F(Xn, t), F(Yn, e), F(We, lr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ui(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ui(t, e);
  }
  U(We), F(We, t);
}
function an() {
  U(We), U(Yn), U(Xn);
}
function gu(e) {
  jt(Xn.current);
  var t = jt(We.current), n = ui(t, e.type);
  t !== n && (F(Yn, e), F(We, n));
}
function _o(e) {
  Yn.current === e && (U(We), U(Yn));
}
var V = vt(0);
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
var Tr = be.ReactCurrentDispatcher, Kl = be.ReactCurrentBatchConfig, Mt = 0, Q = null, X = null, b = null, el = !1, zn = !1, Zn = 0, df = 0;
function le() {
  throw Error(x(321));
}
function Co(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function No(e, t, n, r, l, i) {
  if (Mt = i, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Tr.current = e === null || e.memoizedState === null ? hf : gf, e = n(r, l), zn) {
    i = 0;
    do {
      if (zn = !1, Zn = 0, 25 <= i) throw Error(x(301));
      i += 1, b = X = null, t.updateQueue = null, Tr.current = yf, e = n(r, l);
    } while (zn);
  }
  if (Tr.current = tl, t = X !== null && X.next !== null, Mt = 0, b = X = Q = null, el = !1, t) throw Error(x(300));
  return e;
}
function jo() {
  var e = Zn !== 0;
  return Zn = 0, e;
}
function $e() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return b === null ? Q.memoizedState = b = e : b = b.next = e, b;
}
function Le() {
  if (X === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = b === null ? Q.memoizedState : b.next;
  if (t !== null) b = t, X = e;
  else {
    if (e === null) throw Error(x(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, b === null ? Q.memoizedState = b = e : b = b.next = e;
  }
  return b;
}
function Jn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yl(e) {
  var t = Le(), n = t.queue;
  if (n === null) throw Error(x(311));
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
    var s = o = null, u = null, f = i;
    do {
      var g = f.lane;
      if ((Mt & g) === g) u !== null && (u = u.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var h = {
          lane: g,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        u === null ? (s = u = h, o = r) : u = u.next = h, Q.lanes |= g, zt |= g;
      }
      f = f.next;
    } while (f !== null && f !== i);
    u === null ? o = r : u.next = s, Ae(r, t.memoizedState) || (me = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, Q.lanes |= i, zt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xl(e) {
  var t = Le(), n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Ae(i, t.memoizedState) || (me = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function yu() {
}
function vu(e, t) {
  var n = Q, r = Le(), l = t(), i = !Ae(r.memoizedState, l);
  if (i && (r.memoizedState = l, me = !0), r = r.queue, Io(Su.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || b !== null && b.memoizedState.tag & 1) {
    if (n.flags |= 2048, qn(9, xu.bind(null, n, r, l, t), void 0, null), ee === null) throw Error(x(349));
    Mt & 30 || wu(n, t, l);
  }
  return l;
}
function wu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function xu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ku(t) && _u(e);
}
function Su(e, t, n) {
  return n(function() {
    ku(t) && _u(e);
  });
}
function ku(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function _u(e) {
  var t = Je(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Ls(e) {
  var t = $e();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = mf.bind(null, Q, e), [t.memoizedState, e];
}
function qn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Eu() {
  return Le().memoizedState;
}
function Mr(e, t, n, r) {
  var l = $e();
  Q.flags |= e, l.memoizedState = qn(1 | t, n, void 0, r === void 0 ? null : r);
}
function ml(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (i = o.destroy, r !== null && Co(r, o.deps)) {
      l.memoizedState = qn(t, n, i, r);
      return;
    }
  }
  Q.flags |= e, l.memoizedState = qn(1 | t, n, i, r);
}
function Ts(e, t) {
  return Mr(8390656, 8, e, t);
}
function Io(e, t) {
  return ml(2048, 8, e, t);
}
function Cu(e, t) {
  return ml(4, 2, e, t);
}
function Nu(e, t) {
  return ml(4, 4, e, t);
}
function ju(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Iu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ml(4, 4, ju.bind(null, t, e), n);
}
function Po() {
}
function Pu(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Co(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Lu(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Co(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Tu(e, t, n) {
  return Mt & 21 ? (Ae(n, t) || (n = Oa(), Q.lanes |= n, zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = n);
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
function Mu() {
  return Le().memoizedState;
}
function pf(e, t, n) {
  var r = pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zu(e)) Ru(t, n);
  else if (n = mu(e, t, n, r), n !== null) {
    var l = ue();
    Fe(n, e, r, l), Du(n, t, r);
  }
}
function mf(e, t, n) {
  var r = pt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zu(e)) Ru(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, s = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = s, Ae(s, o)) {
        var u = t.interleaved;
        u === null ? (l.next = l, xo(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = mu(e, t, l, r), n !== null && (l = ue(), Fe(n, e, r, l), Du(n, t, r));
  }
}
function zu(e) {
  var t = e.alternate;
  return e === Q || t !== null && t === Q;
}
function Ru(e, t) {
  zn = el = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Du(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n);
  }
}
var tl = { readContext: Pe, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, hf = { readContext: Pe, useCallback: function(e, t) {
  return $e().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Pe, useEffect: Ts, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Mr(
    4194308,
    4,
    ju.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = pf.bind(null, Q, e), [r.memoizedState, e];
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
  var r = Q, l = $e();
  if ($) {
    if (n === void 0) throw Error(x(407));
    n = n();
  } else {
    if (n = t(), ee === null) throw Error(x(349));
    Mt & 30 || wu(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Ts(Su.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, qn(9, xu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = $e(), t = ee.identifierPrefix;
  if ($) {
    var n = Ke, r = Ge;
    n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = df++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, gf = {
  readContext: Pe,
  useCallback: Pu,
  useContext: Pe,
  useEffect: Io,
  useImperativeHandle: Iu,
  useInsertionEffect: Cu,
  useLayoutEffect: Nu,
  useMemo: Lu,
  useReducer: Yl,
  useRef: Eu,
  useState: function() {
    return Yl(Jn);
  },
  useDebugValue: Po,
  useDeferredValue: function(e) {
    var t = Le();
    return Tu(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Yl(Jn)[0], t = Le().memoizedState;
    return [e, t];
  },
  useMutableSource: yu,
  useSyncExternalStore: vu,
  useId: Mu,
  unstable_isNewReconciler: !1
}, yf = { readContext: Pe, useCallback: Pu, useContext: Pe, useEffect: Io, useImperativeHandle: Iu, useInsertionEffect: Cu, useLayoutEffect: Nu, useMemo: Lu, useReducer: Xl, useRef: Eu, useState: function() {
  return Xl(Jn);
}, useDebugValue: Po, useDeferredValue: function(e) {
  var t = Le();
  return X === null ? t.memoizedState = e : Tu(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Xl(Jn)[0], t = Le().memoizedState;
  return [e, t];
}, useMutableSource: yu, useSyncExternalStore: vu, useId: Mu, unstable_isNewReconciler: !1 };
function ze(e, t) {
  if (e && e.defaultProps) {
    t = W({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Li(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ot(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = pt(e), i = Ye(r, l);
  i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (Fe(t, e, l, r), Lr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = pt(e), i = Ye(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (Fe(t, e, l, r), Lr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ue(), r = pt(e), l = Ye(n, r);
  l.tag = 2, t != null && (l.callback = t), t = dt(e, l, r), t !== null && (Fe(t, e, r, n), Lr(t, e, r));
} };
function Ms(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Bn(n, r) || !Bn(l, i) : !0;
}
function Ou(e, t, n) {
  var r = !1, l = gt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Pe(i) : (l = ge(t) ? Lt : se.current, r = t.contextTypes, i = (r = r != null) ? ln(e, l) : gt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function zs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Ti(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, So(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Pe(i) : (i = ge(t) ? Lt : se.current, l.context = ln(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Li(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && hl.enqueueReplaceState(l, l.state, null), qr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
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
function Fu(e, t, n) {
  n = Ye(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    rl || (rl = !0, Qi = r), Mi(e, t);
  }, n;
}
function Au(e, t, n) {
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
function Ds(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Os(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ye(-1, 1), t.tag = 2, dt(n, t, 1))), n.lanes |= 1), e);
}
var wf = be.ReactCurrentOwner, me = !1;
function ae(e, t, n, r) {
  t.child = e === null ? pu(t, null, n, r) : sn(t, e.child, n, r);
}
function Fs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return tn(t, l), r = No(e, t, n, r, i, l), n = jo(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : ($ && n && mo(t), t.flags |= 1, ae(e, t, r, l), t.child);
}
function As(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Fo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Uu(e, t, i, r, l)) : (e = Or(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Bn, n(o, r) && e.ref === t.ref) return qe(e, t, l);
  }
  return t.flags |= 1, e = mt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Uu(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bn(i, r) && e.ref === t.ref) if (me = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (me = !0);
    else return t.lanes = e.lanes, qe(e, t, l);
  }
  return zi(e, t, n, r, l);
}
function $u(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(Zt, ve), ve |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, F(Zt, ve), ve |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, F(Zt, ve), ve |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, F(Zt, ve), ve |= r;
  return ae(e, t, l, n), t.child;
}
function Vu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function zi(e, t, n, r, l) {
  var i = ge(n) ? Lt : se.current;
  return i = ln(t, i), tn(t, l), n = No(e, t, n, r, i, l), r = jo(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : ($ && r && mo(t), t.flags |= 1, ae(e, t, n, l), t.child);
}
function Us(e, t, n, r, l) {
  if (ge(n)) {
    var i = !0;
    Kr(t);
  } else i = !1;
  if (tn(t, l), t.stateNode === null) zr(e, t), Ou(t, n, r), Ti(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var u = o.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Pe(f) : (f = ge(n) ? Lt : se.current, f = ln(t, f));
    var g = n.getDerivedStateFromProps, h = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || u !== f) && zs(t, o, r, f), nt = !1;
    var m = t.memoizedState;
    o.state = m, qr(t, r, o, l), u = t.memoizedState, s !== r || m !== u || he.current || nt ? (typeof g == "function" && (Li(t, n, g, r), u = t.memoizedState), (s = nt || Ms(t, n, s, r, m, u, f)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = f, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, hu(e, t), s = t.memoizedProps, f = t.type === t.elementType ? s : ze(t.type, s), o.props = f, h = t.pendingProps, m = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = Pe(u) : (u = ge(n) ? Lt : se.current, u = ln(t, u));
    var _ = n.getDerivedStateFromProps;
    (g = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== h || m !== u) && zs(t, o, r, u), nt = !1, m = t.memoizedState, o.state = m, qr(t, r, o, l);
    var k = t.memoizedState;
    s !== h || m !== k || he.current || nt ? (typeof _ == "function" && (Li(t, n, _, r), k = t.memoizedState), (f = nt || Ms(t, n, f, r, m, k, u) || !1) ? (g || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), o.props = r, o.state = k, o.context = u, r = f) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ri(e, t, n, r, i, l);
}
function Ri(e, t, n, r, l, i) {
  Vu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Es(t, n, !1), qe(e, t, i);
  r = t.stateNode, wf.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = sn(t, e.child, null, i), t.child = sn(t, null, s, i)) : ae(e, t, s, i), t.memoizedState = r.state, l && Es(t, n, !0), t.child;
}
function Qu(e) {
  var t = e.stateNode;
  t.pendingContext ? _s(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _s(e, t.context, !1), ko(e, t.containerInfo);
}
function $s(e, t, n, r, l) {
  return on(), go(l), t.flags |= 256, ae(e, t, n, r), t.child;
}
var Di = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wu(e, t, n) {
  var r = t.pendingProps, l = V.current, i = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F(V, l & 1), e === null)
    return Ii(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = vl(o, r, 0, null), e = Pt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Oi(n), t.memoizedState = Di, e) : Lo(t, o));
  if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return xf(e, t, o, r, s, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = mt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = mt(s, i) : (i = Pt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Oi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Di, r;
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
    return t.flags & 256 ? (t.flags &= -257, r = Zl(Error(x(422))), xr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = vl({ mode: "visible", children: r.children }, l, 0, null), i = Pt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && sn(t, e.child, null, o), t.child.memoizedState = Oi(o), t.memoizedState = Di, i);
  if (!(t.mode & 1)) return xr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(x(419)), r = Zl(i, r, void 0), xr(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, me || s) {
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
    return Oo(), r = Zl(Error(x(421))), xr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, we = ct(l.nextSibling), xe = t, $ = !0, De = null, e !== null && (Ce[Ne++] = Ge, Ce[Ne++] = Ke, Ce[Ne++] = Tt, Ge = e.id, Ke = e.overflow, Tt = t), t = Lo(t, r.children), t.flags |= 4096, t);
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
function Bu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ae(e, t, r.children, n), r = V.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (F(V, r), !(t.mode & 1)) t.memoizedState = null;
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
  if (e !== null && (t.dependencies = e.dependencies), zt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Sf(e, t, n) {
  switch (t.tag) {
    case 3:
      Qu(t), on();
      break;
    case 5:
      gu(t);
      break;
    case 1:
      ge(t.type) && Kr(t);
      break;
    case 4:
      ko(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      F(Zr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (F(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wu(e, t, n) : (F(V, V.current & 1), e = qe(e, t, n), e !== null ? e.sibling : null);
      F(V, V.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Bu(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F(V, V.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, $u(e, t, n);
  }
  return qe(e, t, n);
}
var Hu, Fi, Gu, Ku;
Hu = function(e, t) {
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
Gu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, jt(We.current);
    var i = null;
    switch (n) {
      case "input":
        l = ii(e, l), r = ii(e, r), i = [];
        break;
      case "select":
        l = W({}, l, { value: void 0 }), r = W({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = ai(e, l), r = ai(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
    }
    ci(n, r);
    var o;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var s = l[f];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Fn.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (s = l != null ? l[f] : void 0, r.hasOwnProperty(f) && u !== s && (u != null || s != null)) if (f === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in u) u.hasOwnProperty(o) && s[o] !== u[o] && (n || (n = {}), n[o] = u[o]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = u;
      else f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (i = i || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Fn.hasOwnProperty(f) ? (u != null && f === "onScroll" && A("scroll", e), i || s === u || (i = [])) : (i = i || []).push(f, u));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Ku = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kn(e, t) {
  if (!$) switch (e.tailMode) {
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
      return ge(t.type) && Gr(), ie(t), null;
    case 3:
      return r = t.stateNode, an(), U(he), U(se), Eo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, De !== null && (Hi(De), De = null))), Fi(e, t), ie(t), null;
    case 5:
      _o(t);
      var l = jt(Xn.current);
      if (n = t.type, e !== null && t.stateNode != null) Gu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return ie(t), null;
        }
        if (e = jt(We.current), vr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ve] = t, r[Kn] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              A("cancel", r), A("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              A("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jn.length; l++) A(jn[l], r);
              break;
            case "source":
              A("error", r);
              break;
            case "img":
            case "image":
            case "link":
              A(
                "error",
                r
              ), A("load", r);
              break;
            case "details":
              A("toggle", r);
              break;
            case "input":
              Zo(r, i), A("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, A("invalid", r);
              break;
            case "textarea":
              qo(r, i), A("invalid", r);
          }
          ci(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var s = i[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && yr(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && yr(
              r.textContent,
              s,
              e
            ), l = ["children", "" + s]) : Fn.hasOwnProperty(o) && s != null && o === "onScroll" && A("scroll", r);
          }
          switch (n) {
            case "input":
              ur(r), Jo(r, i, !0);
              break;
            case "textarea":
              ur(r), bo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Hr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ve] = t, e[Kn] = r, Hu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = di(n, r), n) {
              case "dialog":
                A("cancel", e), A("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                A("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < jn.length; l++) A(jn[l], e);
                l = r;
                break;
              case "source":
                A("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                A(
                  "error",
                  e
                ), A("load", e), l = r;
                break;
              case "details":
                A("toggle", e), l = r;
                break;
              case "input":
                Zo(e, r), l = ii(e, r), A("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = W({}, r, { value: void 0 }), A("invalid", e);
                break;
              case "textarea":
                qo(e, r), l = ai(e, r), A("invalid", e);
                break;
              default:
                l = r;
            }
            ci(n, l), s = l;
            for (i in s) if (s.hasOwnProperty(i)) {
              var u = s[i];
              i === "style" ? Ea(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && ka(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && An(e, u) : typeof u == "number" && An(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Fn.hasOwnProperty(i) ? u != null && i === "onScroll" && A("scroll", e) : u != null && bi(e, i, u, o));
            }
            switch (n) {
              case "input":
                ur(e), Jo(e, r, !1);
                break;
              case "textarea":
                ur(e), bo(e);
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
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) Ku(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (n = jt(Xn.current), jt(We.current), vr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ve] = t, (i = r.nodeValue !== n) && (e = xe, e !== null)) switch (e.tag) {
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
      if (U(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && we !== null && t.mode & 1 && !(t.flags & 128)) du(), on(), t.flags |= 98560, i = !1;
        else if (i = vr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(x(317));
            i[Ve] = t;
          } else on(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ie(t), i = !1;
        } else De !== null && (Hi(De), De = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? J === 0 && (J = 3) : Oo())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
    case 4:
      return an(), Fi(e, t), e === null && Hn(t.stateNode.containerInfo), ie(t), null;
    case 10:
      return wo(t.type._context), ie(t), null;
    case 17:
      return ge(t.type) && Gr(), ie(t), null;
    case 19:
      if (U(V), i = t.memoizedState, i === null) return ie(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) kn(i, !1);
      else {
        if (J !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = br(e), o !== null) {
            for (t.flags |= 128, kn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return F(V, V.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && K() > cn && (t.flags |= 128, r = !0, kn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = br(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !$) return ie(t), null;
        } else 2 * K() - i.renderingStartTime > cn && n !== 1073741824 && (t.flags |= 128, r = !0, kn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = K(), t.sibling = null, n = V.current, F(V, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
    case 22:
    case 23:
      return Do(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ve & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function _f(e, t) {
  switch (ho(t), t.tag) {
    case 1:
      return ge(t.type) && Gr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return an(), U(he), U(se), Eo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return _o(t), null;
    case 13:
      if (U(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(x(340));
        on();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return U(V), null;
    case 4:
      return an(), null;
    case 10:
      return wo(t.type._context), null;
    case 22:
    case 23:
      return Do(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sr = !1, oe = !1, Ef = typeof WeakSet == "function" ? WeakSet : Set, C = null;
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
var Qs = !1;
function Cf(e, t) {
  if (Si = Qr, e = qa(), po(e)) {
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
        var o = 0, s = -1, u = -1, f = 0, g = 0, h = e, m = null;
        t: for (; ; ) {
          for (var _; h !== n || l !== 0 && h.nodeType !== 3 || (s = o + l), h !== i || r !== 0 && h.nodeType !== 3 || (u = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (_ = h.firstChild) !== null; )
            m = h, h = _;
          for (; ; ) {
            if (h === e) break t;
            if (m === n && ++f === l && (s = o), m === i && ++g === r && (u = o), (_ = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = _;
        }
        n = s === -1 || u === -1 ? null : { start: s, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ki = { focusedElem: e, selectionRange: n }, Qr = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
  else for (; C !== null; ) {
    t = C;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var y = k.memoizedProps, P = k.memoizedState, a = t.stateNode, d = a.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ze(t.type, y), P);
            a.__reactInternalSnapshotBeforeUpdate = d;
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
          throw Error(x(163));
      }
    } catch (w) {
      H(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, C = e;
      break;
    }
    C = t.return;
  }
  return k = Qs, Qs = !1, k;
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
function Yu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Yu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ve], delete t[Kn], delete t[Ci], delete t[sf], delete t[af])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ws(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xu(e.return)) return null;
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hr));
  else if (r !== 4 && (e = e.child, e !== null)) for ($i(e, t, n), e = e.sibling; e !== null; ) $i(e, t, n), e = e.sibling;
}
function Vi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Vi(e, t, n), e = e.sibling; e !== null; ) Vi(e, t, n), e = e.sibling;
}
var te = null, Re = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) Zu(e, t, n), n = n.sibling;
}
function Zu(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function") try {
    Qe.onCommitFiberUnmount(al, n);
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
      te !== null && (Re ? (e = te, n = n.stateNode, e.nodeType === 8 ? Bl(e.parentNode, n) : e.nodeType === 1 && Bl(e, n), Qn(e)) : Bl(te, n.stateNode));
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
function Bs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ef()), t.forEach(function(r) {
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
      if (te === null) throw Error(x(160));
      Zu(i, o, l), te = null, Re = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (f) {
      H(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ju(t, e), t = t.sibling;
}
function Ju(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Te(t, e), Ue(e), r & 4) {
        try {
          Rn(3, e, e.return), gl(3, e);
        } catch (y) {
          H(e, e.return, y);
        }
        try {
          Rn(5, e, e.return);
        } catch (y) {
          H(e, e.return, y);
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
        } catch (y) {
          H(e, e.return, y);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          s === "input" && i.type === "radio" && i.name != null && wa(l, i), di(s, o);
          var f = di(s, i);
          for (o = 0; o < u.length; o += 2) {
            var g = u[o], h = u[o + 1];
            g === "style" ? Ea(l, h) : g === "dangerouslySetInnerHTML" ? ka(l, h) : g === "children" ? An(l, h) : bi(l, g, h, f);
          }
          switch (s) {
            case "input":
              oi(l, i);
              break;
            case "textarea":
              xa(l, i);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var _ = i.value;
              _ != null ? Jt(l, !!i.multiple, _, !1) : m !== !!i.multiple && (i.defaultValue != null ? Jt(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Jt(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Kn] = i;
        } catch (y) {
          H(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Te(t, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(x(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (y) {
          H(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Te(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Qn(t.containerInfo);
      } catch (y) {
        H(e, e.return, y);
      }
      break;
    case 4:
      Te(t, e), Ue(e);
      break;
    case 13:
      Te(t, e), Ue(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (zo = K())), r & 4 && Bs(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (f = oe) || g, Te(t, e), oe = f) : Te(t, e), Ue(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !g && e.mode & 1) for (C = e, g = e.child; g !== null; ) {
          for (h = C = g; C !== null; ) {
            switch (m = C, _ = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rn(4, m, m.return);
                break;
              case 1:
                Xt(m, m.return);
                var k = m.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (y) {
                    H(r, n, y);
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
            _ !== null ? (_.return = m, C = _) : Gs(h);
          }
          g = g.sibling;
        }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                l = h.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = h.stateNode, u = h.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = _a("display", o));
              } catch (y) {
                H(e, e.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (g === null) try {
              h.stateNode.nodeValue = f ? "" : h.memoizedProps;
            } catch (y) {
              H(e, e.return, y);
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
      Te(t, e), Ue(e), r & 4 && Bs(e);
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
          if (Xu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
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
          throw Error(x(161));
      }
    } catch (u) {
      H(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Nf(e, t, n) {
  C = e, qu(e);
}
function qu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Sr;
      if (!o) {
        var s = l.alternate, u = s !== null && s.memoizedState !== null || oe;
        s = Sr;
        var f = oe;
        if (Sr = o, (oe = u) && !f) for (C = l; C !== null; ) o = C, u = o.child, o.tag === 22 && o.memoizedState !== null ? Ks(l) : u !== null ? (u.return = o, C = u) : Ks(l);
        for (; i !== null; ) C = i, qu(i), i = i.sibling;
        C = l, Sr = s, oe = f;
      }
      Hs(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, C = i) : Hs(e);
  }
}
function Hs(e) {
  for (; C !== null; ) {
    var t = C;
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
                var g = f.memoizedState;
                if (g !== null) {
                  var h = g.dehydrated;
                  h !== null && Qn(h);
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
            throw Error(x(163));
        }
        oe || t.flags & 512 && Ui(t);
      } catch (m) {
        H(t, t.return, m);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function Gs(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function Ks(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gl(4, t);
          } catch (u) {
            H(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              H(t, l, u);
            }
          }
          var i = t.return;
          try {
            Ui(t);
          } catch (u) {
            H(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ui(t);
          } catch (u) {
            H(t, o, u);
          }
      }
    } catch (u) {
      H(t, t.return, u);
    }
    if (t === e) {
      C = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, C = s;
      break;
    }
    C = t.return;
  }
}
var jf = Math.ceil, nl = be.ReactCurrentDispatcher, To = be.ReactCurrentOwner, Ie = be.ReactCurrentBatchConfig, R = 0, ee = null, Y = null, ne = 0, ve = 0, Zt = vt(0), J = 0, bn = null, zt = 0, yl = 0, Mo = 0, Dn = null, pe = null, zo = 0, cn = 1 / 0, Be = null, rl = !1, Qi = null, ft = null, kr = !1, ot = null, ll = 0, On = 0, Wi = null, Rr = -1, Dr = 0;
function ue() {
  return R & 6 ? K() : Rr !== -1 ? Rr : Rr = K();
}
function pt(e) {
  return e.mode & 1 ? R & 2 && ne !== 0 ? ne & -ne : cf.transition !== null ? (Dr === 0 && (Dr = Oa()), Dr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wa(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < On) throw On = 0, Wi = null, Error(x(185));
  tr(e, n, r), (!(R & 2) || e !== ee) && (e === ee && (!(R & 2) && (yl |= n), J === 4 && lt(e, ne)), ye(e, r), n === 1 && R === 0 && !(t.mode & 1) && (cn = K() + 500, pl && wt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  ud(e, t);
  var r = Vr(e, e === ee ? ne : 0);
  if (r === 0) n !== null && ns(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ns(n), t === 1) e.tag === 0 ? uf(Ys.bind(null, e)) : au(Ys.bind(null, e)), lf(function() {
      !(R & 6) && wt();
    }), n = null;
    else {
      switch (Fa(r)) {
        case 1:
          n = lo;
          break;
        case 4:
          n = Ra;
          break;
        case 16:
          n = $r;
          break;
        case 536870912:
          n = Da;
          break;
        default:
          n = $r;
      }
      n = oc(n, bu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function bu(e, t) {
  if (Rr = -1, Dr = 0, R & 6) throw Error(x(327));
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
    (ee !== e || ne !== t) && (Be = null, cn = K() + 500, It(e, t));
    do
      try {
        Lf();
        break;
      } catch (s) {
        ec(e, s);
      }
    while (!0);
    vo(), nl.current = i, R = l, Y !== null ? t = 0 : (ee = null, ne = 0, t = J);
  }
  if (t !== 0) {
    if (t === 2 && (l = gi(e), l !== 0 && (r = l, t = Bi(e, l))), t === 1) throw n = bn, It(e, 0), lt(e, r), ye(e, K()), n;
    if (t === 6) lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !If(l) && (t = il(e, r), t === 2 && (i = gi(e), i !== 0 && (r = i, t = Bi(e, i))), t === 1)) throw n = bn, It(e, 0), lt(e, r), ye(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Et(e, pe, Be);
          break;
        case 3:
          if (lt(e, r), (r & 130023424) === r && (t = zo + 500 - K(), 10 < t)) {
            if (Vr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ei(Et.bind(null, e, pe, Be), t);
            break;
          }
          Et(e, pe, Be);
          break;
        case 4:
          if (lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * jf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ei(Et.bind(null, e, pe, Be), r);
            break;
          }
          Et(e, pe, Be);
          break;
        case 5:
          Et(e, pe, Be);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ye(e, K()), e.callbackNode === n ? bu.bind(null, e) : null;
}
function Bi(e, t) {
  var n = Dn;
  return e.current.memoizedState.isDehydrated && (It(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = pe, pe = n, t !== null && Hi(t)), e;
}
function Hi(e) {
  pe === null ? pe = e : pe.push.apply(pe, e);
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
    var n = 31 - Oe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ys(e) {
  if (R & 6) throw Error(x(327));
  nn();
  var t = Vr(e, 0);
  if (!(t & 1)) return ye(e, K()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gi(e);
    r !== 0 && (t = r, n = Bi(e, r));
  }
  if (n === 1) throw n = bn, It(e, 0), lt(e, t), ye(e, K()), n;
  if (n === 6) throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Et(e, pe, Be), ye(e, K()), null;
}
function Ro(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (cn = K() + 500, pl && wt());
  }
}
function Rt(e) {
  ot !== null && ot.tag === 0 && !(R & 6) && nn();
  var t = R;
  R |= 1;
  var n = Ie.transition, r = O;
  try {
    if (Ie.transition = null, O = 1, e) return e();
  } finally {
    O = r, Ie.transition = n, R = t, !(R & 6) && wt();
  }
}
function Do() {
  ve = Zt.current, U(Zt);
}
function It(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, rf(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (ho(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Gr();
        break;
      case 3:
        an(), U(he), U(se), Eo();
        break;
      case 5:
        _o(r);
        break;
      case 4:
        an();
        break;
      case 13:
        U(V);
        break;
      case 19:
        U(V);
        break;
      case 10:
        wo(r.type._context);
        break;
      case 22:
      case 23:
        Do();
    }
    n = n.return;
  }
  if (ee = e, Y = e = mt(e.current, null), ne = ve = t, J = 0, bn = null, Mo = yl = zt = 0, pe = Dn = null, Nt !== null) {
    for (t = 0; t < Nt.length; t++) if (n = Nt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    Nt = null;
  }
  return e;
}
function ec(e, t) {
  do {
    var n = Y;
    try {
      if (vo(), Tr.current = tl, el) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        el = !1;
      }
      if (Mt = 0, b = X = Q = null, zn = !1, Zn = 0, To.current = null, n === null || n.return === null) {
        J = 1, bn = t, Y = null;
        break;
      }
      e: {
        var i = e, o = n.return, s = n, u = t;
        if (t = ne, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var f = u, g = s, h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = g.alternate;
            m ? (g.updateQueue = m.updateQueue, g.memoizedState = m.memoizedState, g.lanes = m.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var _ = Ds(o);
          if (_ !== null) {
            _.flags &= -257, Os(_, o, s, i, t), _.mode & 1 && Rs(i, f, t), t = _, u = f;
            var k = t.updateQueue;
            if (k === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(u), t.updateQueue = y;
            } else k.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Rs(i, f, t), Oo();
              break e;
            }
            u = Error(x(426));
          }
        } else if ($ && s.mode & 1) {
          var P = Ds(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), Os(P, o, s, i, t), go(un(u, s));
            break e;
          }
        }
        i = u = un(u, s), J !== 4 && (J = 2), Dn === null ? Dn = [i] : Dn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var a = Fu(i, u, t);
              Is(i, a);
              break e;
            case 1:
              s = u;
              var d = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ft === null || !ft.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Au(i, s, t);
                Is(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      rc(n);
    } catch (v) {
      t = v, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function tc() {
  var e = nl.current;
  return nl.current = tl, e === null ? tl : e;
}
function Oo() {
  (J === 0 || J === 3 || J === 2) && (J = 4), ee === null || !(zt & 268435455) && !(yl & 268435455) || lt(ee, ne);
}
function il(e, t) {
  var n = R;
  R |= 2;
  var r = tc();
  (ee !== e || ne !== t) && (Be = null, It(e, t));
  do
    try {
      Pf();
      break;
    } catch (l) {
      ec(e, l);
    }
  while (!0);
  if (vo(), R = n, nl.current = r, Y !== null) throw Error(x(261));
  return ee = null, ne = 0, J;
}
function Pf() {
  for (; Y !== null; ) nc(Y);
}
function Lf() {
  for (; Y !== null && !ed(); ) nc(Y);
}
function nc(e) {
  var t = ic(e.alternate, e, ve);
  e.memoizedProps = e.pendingProps, t === null ? rc(e) : Y = t, To.current = null;
}
function rc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = _f(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        J = 6, Y = null;
        return;
      }
    } else if (n = kf(n, t, ve), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Et(e, t, n) {
  var r = O, l = Ie.transition;
  try {
    Ie.transition = null, O = 1, Tf(e, t, n, r);
  } finally {
    Ie.transition = l, O = r;
  }
  return null;
}
function Tf(e, t, n, r) {
  do
    nn();
  while (ot !== null);
  if (R & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (cd(e, i), e === ee && (Y = ee = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0, oc($r, function() {
    return nn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ie.transition, Ie.transition = null;
    var o = O;
    O = 1;
    var s = R;
    R |= 4, To.current = null, Cf(e, n), Ju(n, e), Zd(ki), Qr = !!Si, ki = Si = null, e.current = n, Nf(n), td(), R = s, O = o, Ie.transition = i;
  } else e.current = n;
  if (kr && (kr = !1, ot = e, ll = l), i = e.pendingLanes, i === 0 && (ft = null), ld(n.stateNode), ye(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (rl) throw rl = !1, e = Qi, Qi = null, e;
  return ll & 1 && e.tag !== 0 && nn(), i = e.pendingLanes, i & 1 ? e === Wi ? On++ : (On = 0, Wi = e) : On = 0, wt(), null;
}
function nn() {
  if (ot !== null) {
    var e = Fa(ll), t = Ie.transition, n = O;
    try {
      if (Ie.transition = null, O = 16 > e ? 16 : e, ot === null) var r = !1;
      else {
        if (e = ot, ot = null, ll = 0, R & 6) throw Error(x(331));
        var l = R;
        for (R |= 4, C = e.current; C !== null; ) {
          var i = C, o = i.child;
          if (C.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var f = s[u];
                for (C = f; C !== null; ) {
                  var g = C;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, g, i);
                  }
                  var h = g.child;
                  if (h !== null) h.return = g, C = h;
                  else for (; C !== null; ) {
                    g = C;
                    var m = g.sibling, _ = g.return;
                    if (Yu(g), g === f) {
                      C = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = _, C = m;
                      break;
                    }
                    C = _;
                  }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var y = k.child;
                if (y !== null) {
                  k.child = null;
                  do {
                    var P = y.sibling;
                    y.sibling = null, y = P;
                  } while (y !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, C = o;
          else e: for (; C !== null; ) {
            if (i = C, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Rn(9, i, i.return);
            }
            var a = i.sibling;
            if (a !== null) {
              a.return = i.return, C = a;
              break e;
            }
            C = i.return;
          }
        }
        var d = e.current;
        for (C = d; C !== null; ) {
          o = C;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, C = p;
          else e: for (o = d; C !== null; ) {
            if (s = C, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  gl(9, s);
              }
            } catch (v) {
              H(s, s.return, v);
            }
            if (s === o) {
              C = null;
              break e;
            }
            var w = s.sibling;
            if (w !== null) {
              w.return = s.return, C = w;
              break e;
            }
            C = s.return;
          }
        }
        if (R = l, wt(), Qe && typeof Qe.onPostCommitFiberRoot == "function") try {
          Qe.onPostCommitFiberRoot(al, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, Ie.transition = t;
    }
  }
  return !1;
}
function Xs(e, t, n) {
  t = un(n, t), t = Fu(e, t, 1), e = dt(e, t, 1), t = ue(), e !== null && (tr(e, 1, t), ye(e, t));
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
        e = un(n, e), e = Au(t, e, 1), t = dt(t, e, 1), e = ue(), t !== null && (tr(t, 1, e), ye(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Mf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, ee === e && (ne & n) === n && (J === 4 || J === 3 && (ne & 130023424) === ne && 500 > K() - zo ? It(e, 0) : Mo |= n), ye(e, t);
}
function lc(e, t) {
  t === 0 && (e.mode & 1 ? (t = fr, fr <<= 1, !(fr & 130023424) && (fr = 4194304)) : t = 1);
  var n = ue();
  e = Je(e, t), e !== null && (tr(e, t, n), ye(e, n));
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
      throw Error(x(314));
  }
  r !== null && r.delete(t), lc(e, n);
}
var ic;
ic = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return me = !1, Sf(e, t, n);
    me = !!(e.flags & 131072);
  }
  else me = !1, $ && t.flags & 1048576 && uu(t, Xr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zr(e, t), e = t.pendingProps;
      var l = ln(t, se.current);
      tn(t, n), l = No(null, t, r, e, l, n);
      var i = jo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ge(r) ? (i = !0, Kr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, So(t), l.updater = hl, t.stateNode = l, l._reactInternals = t, Ti(t, r, e, n), t = Ri(null, t, r, !0, i, n)) : (t.tag = 0, $ && i && mo(t), ae(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Of(r), e = ze(r, e), l) {
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
        throw Error(x(
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
        if (Qu(t), e === null) throw Error(x(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, hu(e, t), qr(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = un(Error(x(423)), t), t = $s(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = un(Error(x(424)), t), t = $s(e, t, r, n, l);
          break e;
        } else for (we = ct(t.stateNode.containerInfo.firstChild), xe = t, $ = !0, De = null, n = pu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (on(), r === l) {
            t = qe(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return gu(t), e === null && Ii(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, _i(r, l) ? o = null : i !== null && _i(r, i) && (t.flags |= 32), Vu(e, t), ae(e, t, o, n), t.child;
    case 6:
      return e === null && Ii(t), null;
    case 13:
      return Wu(e, t, n);
    case 4:
      return ko(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sn(t, null, r, n) : ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Fs(e, t, r, l, n);
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, F(Zr, r._currentValue), r._currentValue = o, i !== null) if (Ae(i.value, o)) {
          if (i.children === l.children && !he.current) {
            t = qe(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            o = i.child;
            for (var u = s.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = Ye(-1, n & -n), u.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var g = f.pending;
                    g === null ? u.next = u : (u.next = g.next, g.next = u), f.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Pi(
                  i.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(x(341));
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
        ae(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, tn(t, n), l = Pe(l), r = r(l), t.flags |= 1, ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = ze(r, t.pendingProps), l = ze(r.type, l), As(e, t, r, l, n);
    case 15:
      return Uu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), zr(e, t), t.tag = 1, ge(r) ? (e = !0, Kr(t)) : e = !1, tn(t, n), Ou(t, r, l), Ti(t, r, l, n), Ri(null, t, r, !0, e, n);
    case 19:
      return Bu(e, t, n);
    case 22:
      return $u(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function oc(e, t) {
  return za(e, t);
}
function Df(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function je(e, t, n, r) {
  return new Df(e, t, n, r);
}
function Fo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Of(e) {
  if (typeof e == "function") return Fo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === to) return 11;
    if (e === no) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Or(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Fo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case $t:
      return Pt(n.children, l, i, t);
    case eo:
      o = 8, l |= 8;
      break;
    case ti:
      return e = je(12, n, t, l | 2), e.elementType = ti, e.lanes = i, e;
    case ni:
      return e = je(13, n, t, l), e.elementType = ni, e.lanes = i, e;
    case ri:
      return e = je(19, n, t, l), e.elementType = ri, e.lanes = i, e;
    case ga:
      return vl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ma:
          o = 10;
          break e;
        case ha:
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
      throw Error(x(130, e == null ? e : typeof e, ""));
  }
  return t = je(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Pt(e, t, n, r) {
  return e = je(7, e, r, t), e.lanes = n, e;
}
function vl(e, t, n, r) {
  return e = je(22, e, r, t), e.elementType = ga, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ql(e, t, n) {
  return e = je(6, e, null, t), e.lanes = n, e;
}
function bl(e, t, n) {
  return t = je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ff(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zl(0), this.expirationTimes = zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ao(e, t, n, r, l, i, o, s, u) {
  return e = new Ff(e, t, n, s, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = je(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, So(i), e;
}
function Af(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ut, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function sc(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (Ot(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return su(e, n, t);
  }
  return t;
}
function ac(e, t, n, r, l, i, o, s, u) {
  return e = Ao(n, r, !0, e, l, i, o, s, u), e.context = sc(null), n = e.current, r = ue(), l = pt(n), i = Ye(r, l), i.callback = t ?? null, dt(n, i, l), e.current.lanes = l, tr(e, l, r), ye(e, r), e;
}
function wl(e, t, n, r) {
  var l = t.current, i = ue(), o = pt(l);
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
var uc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function $o(e) {
  this._internalRoot = e;
}
xl.prototype.render = $o.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  wl(e, t, null, null);
};
xl.prototype.unmount = $o.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rt(function() {
      wl(null, e, null, null);
    }), t[Ze] = null;
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = $a();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++) ;
    rt.splice(n, 0, e), n === 0 && Qa(e);
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
    var o = ac(t, r, e, 0, null, !1, !1, "", Js);
    return e._reactRootContainer = o, e[Ze] = o.current, Hn(e.nodeType === 8 ? e.parentNode : e), Rt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var f = ol(u);
      s.call(f);
    };
  }
  var u = Ao(e, 0, !1, null, null, !1, !1, "", Js);
  return e._reactRootContainer = u, e[Ze] = u.current, Hn(e.nodeType === 8 ? e.parentNode : e), Rt(function() {
    wl(t, u, n, r);
  }), u;
}
function kl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function() {
        var u = ol(o);
        s.call(u);
      };
    }
    wl(t, o, e, l);
  } else o = $f(n, t, e, l, r);
  return ol(o);
}
Aa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 && (io(t, n | 1), ye(t, K()), !(R & 6) && (cn = K() + 500, wt()));
      }
      break;
    case 13:
      Rt(function() {
        var r = Je(e, 1);
        if (r !== null) {
          var l = ue();
          Fe(r, e, 1, l);
        }
      }), Uo(e, 1);
  }
};
oo = function(e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = ue();
      Fe(t, e, 134217728, n);
    }
    Uo(e, 134217728);
  }
};
Ua = function(e) {
  if (e.tag === 13) {
    var t = pt(e), n = Je(e, t);
    if (n !== null) {
      var r = ue();
      Fe(n, e, t, r);
    }
    Uo(e, t);
  }
};
$a = function() {
  return O;
};
Va = function(e, t) {
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
            if (!l) throw Error(x(90));
            va(r), oi(r, l);
          }
        }
      }
      break;
    case "textarea":
      xa(e, n);
      break;
    case "select":
      t = n.value, t != null && Jt(e, !!n.multiple, t, !1);
  }
};
ja = Ro;
Ia = Rt;
var Vf = { usingClientEntryPoint: !1, Events: [rr, Bt, fl, Ca, Na, Ro] }, _n = { findFiberByHostInstance: Ct, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qf = { bundleType: _n.bundleType, version: _n.version, rendererPackageName: _n.rendererPackageName, rendererConfig: _n.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ta(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: _n.findFiberByHostInstance || Uf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_r.isDisabled && _r.supportsFiber) try {
    al = _r.inject(Qf), Qe = _r;
  } catch {
  }
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf;
ke.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vo(t)) throw Error(x(200));
  return Af(e, t, null, n);
};
ke.createRoot = function(e, t) {
  if (!Vo(e)) throw Error(x(299));
  var n = !1, r = "", l = uc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ao(e, 1, !1, null, null, n, !1, r, l), e[Ze] = t.current, Hn(e.nodeType === 8 ? e.parentNode : e), new $o(t);
};
ke.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = Ta(t), e = e === null ? null : e.stateNode, e;
};
ke.flushSync = function(e) {
  return Rt(e);
};
ke.hydrate = function(e, t, n) {
  if (!Sl(t)) throw Error(x(200));
  return kl(null, e, t, !0, n);
};
ke.hydrateRoot = function(e, t, n) {
  if (!Vo(e)) throw Error(x(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = uc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ac(t, null, e, 1, n ?? null, l, !1, i, o), e[Ze] = t.current, Hn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new xl(t);
};
ke.render = function(e, t, n) {
  if (!Sl(t)) throw Error(x(200));
  return kl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function(e) {
  if (!Sl(e)) throw Error(x(40));
  return e._reactRootContainer ? (Rt(function() {
    kl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ze] = null;
    });
  }), !0) : !1;
};
ke.unstable_batchedUpdates = Ro;
ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Sl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return kl(e, t, n, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function cc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cc);
    } catch (e) {
      console.error(e);
    }
}
cc(), ca.exports = ke;
var Wf = ca.exports, dc, qs = Wf;
dc = qs.createRoot, qs.hydrateRoot;
window.api = Z;
const bs = async (e = 0, t = 30, n = "") => {
  const r = await Z.fetchApi(
    `/meld-nexus/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}`
  );
  if (!r.ok)
    throw new Error(`Failed to fetch images: ${r.statusText}`);
  return await r.json();
}, Bf = async (e, t) => {
  const n = `/meld-nexus/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await Z.fetchApi(n);
  return r.ok ? await r.json() : [];
}, Hf = async () => {
  const e = await Z.fetchApi("/meld-nexus/search-suggestions");
  return e.ok ? await e.json() : [];
}, fc = async () => {
  const e = await Z.fetchApi("/meld-nexus/settings");
  return e.ok ? await e.json() : {
    dev_mode: !1,
    "gallery.show_parent_image": !0,
    "gallery.hide_parent_images": !0,
    "sidebar.show_filename": !0,
    "sidebar.show_model_name": !0,
    "sidebar.show_positive_prompt": !0,
    "sidebar.show_negative_prompt": !1,
    "sidebar.show_tags": !0,
    "search.quick_suggestions": !0,
    "search.input_suggest": !0,
    "search.realtime_search": !0
  };
}, Gf = async (e, t) => {
  if (!(await Z.fetchApi("/meld-nexus/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Kf = async (e, t) => {
  if (!(await Z.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Yf = async (e, t = 12) => {
  const n = await Z.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, Xf = async (e) => {
  const t = await Z.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, Zf = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await Z.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Jf = async (e, t = !0) => {
  const n = await Z.fetchApi("/meld-nexus/bulk-delete", {
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
  const t = await Z.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, qf = async (e, t) => {
  const n = await Z.fetchApi(
    `/meld-nexus/folders?type=${e}&path=${encodeURIComponent(t)}`
  );
  return n.ok ? await n.json() : [];
}, bf = async (e) => {
  const t = await Z.fetchApi("/meld-nexus/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, ep = async () => {
  if (!(await Z.fetchApi("/meld-nexus/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
};
var mc = { exports: {} }, _l = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tp = I, np = Symbol.for("react.element"), rp = Symbol.for("react.fragment"), lp = Object.prototype.hasOwnProperty, ip = tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, op = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) lp.call(t, r) && !op.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: np, type: e, key: i, ref: o, props: l, _owner: ip.current };
}
_l.Fragment = rp;
_l.jsx = hc;
_l.jsxs = hc;
mc.exports = _l;
var c = mc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sp = {
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
const ap = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), B = (e, t) => {
  const n = I.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: s = "",
      children: u,
      ...f
    }, g) => I.createElement(
      "svg",
      {
        ref: g,
        ...sp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${ap(e)}`, s].join(" "),
        ...f
      },
      [
        ...t.map(([h, m]) => I.createElement(h, m)),
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
const up = B("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = B("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = B("Box", [
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
const fp = B("Calendar", [
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
const pp = B("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = B("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = B("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = B("Download", [
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
const ea = B("Folder", [
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
const hp = B("Maximize", [
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
const gp = B("Minimize", [
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
const yp = B("MoreVertical", [
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
const vp = B("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wp = B("PlusCircle", [
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
const yc = B("RefreshCw", [
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
const vc = B("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = B("Settings", [
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
const Sp = B("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = B("Tag", [
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
const _p = B("Trash2", [
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
const Ep = B("Type", [
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
const Cp = B("Upload", [
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
const Ft = B("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let sl = !1;
const Np = (e) => {
  sl = e, sl && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, jp = (...e) => {
  sl && console.log("[Meld-Flow]", ...e);
}, Ip = (...e) => {
  sl && console.warn("[Meld-Flow]", ...e);
}, Pp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, Ee = {
  log: jp,
  warn: Ip,
  error: Pp,
  init: Np
}, Lp = {
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
    "gallery.hide_parent_images": !0,
    "sidebar.show_filename": !0,
    "sidebar.show_model_name": !0,
    "sidebar.show_positive_prompt": !0,
    "sidebar.show_negative_prompt": !1,
    "sidebar.show_tags": !0,
    "search.quick_suggestions": !0,
    "search.input_suggest": !0,
    "search.realtime_search": !0
  },
  pagination: {
    total: 0,
    offset: 0,
    limit: 30,
    hasMore: !1
  },
  searchQuery: ""
};
function Tp(e, t) {
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
        new Map(o.map((u) => [u.id, u])).values()
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
const wc = I.createContext(void 0), Mp = ({
  children: e
}) => {
  const [t, n] = I.useReducer(Tp, Lp), r = I.useCallback(async () => {
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
        const s = t.images.length, u = await bs(
          s,
          t.pagination.limit,
          t.searchQuery
        );
        n({ type: "APPEND_IMAGES", payload: u });
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
    const s = Array.from(t.selectedIds), u = `Are you sure you want to delete the selected ${s.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(u)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await Jf(s, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (f) {
        n({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    }
  }, [t.selectedIds, r]), o = I.useCallback(
    async (s, u) => {
      try {
        await Gf(s, u), n({ type: "SET_SETTINGS", payload: { [s]: u } });
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
        const u = await fc();
        n({ type: "SET_SETTINGS", payload: u });
      } catch (u) {
        Ee.error("Failed to load settings", u);
      }
    })();
  }, []), I.useEffect(() => {
    const s = () => {
      r();
    }, u = (g) => {
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
    return window.addEventListener("meld-nexus-refresh", s), window.addEventListener("meld-nexus-scan-progress", u), window.addEventListener("meld-nexus-scan-finished", f), () => {
      window.removeEventListener("meld-nexus-refresh", s), window.removeEventListener(
        "meld-nexus-scan-progress",
        u
      ), window.removeEventListener(
        "meld-nexus-scan-finished",
        f
      );
    };
  }, [r, t.scanStatus.progress.total]), I.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ c.jsx(
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
}, xt = () => {
  const e = I.useContext(wc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, zp = () => {
  const { state: e, dispatch: t, deleteSelected: n } = xt(), r = e.selectedIds.size;
  return r === 0 ? null : /* @__PURE__ */ c.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ c.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ c.jsx(
            _p,
            {
              size: 16,
              style: { marginRight: "8px", verticalAlign: "middle" }
            }
          ),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ c.jsx(Ft, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, Rp = ({ image: e }) => {
  const { state: t, dispatch: n } = xt(), r = t.selectedIds.has(e.id), [l, i] = I.useState(null), [o, s] = I.useState(!1), u = I.useRef(null);
  I.useEffect(() => {
    const a = (d) => {
      u.current && !u.current.contains(d.target) && s(!1);
    };
    return o && document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, [o]);
  const f = (a, d = 0) => {
    if (d >= 5) return [];
    const p = a.parent_id;
    if (!p && !a.parent_filename) return [];
    const w = p ? t.images.find((E) => E.id === p) : null;
    let v = null;
    if (w ? v = `/api/view?filename=${encodeURIComponent(w.filename)}&type=${w.type || "output"}${w.subfolder ? `&subfolder=${encodeURIComponent(w.subfolder)}` : ""}` : p && a.parent_filename && (v = `/api/view?filename=${encodeURIComponent(a.parent_filename)}&type=${a.parent_type || "output"}${a.parent_subfolder ? `&subfolder=${encodeURIComponent(a.parent_subfolder)}` : ""}`), !v && !w) return [];
    const S = {
      id: p || null,
      imgSrc: v
    };
    return w ? [S, ...f(w, d + 1)] : [S];
  }, g = f(e), h = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, m = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, _ = (a) => {
    a.shiftKey ? (a.preventDefault(), a.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : a.ctrlKey || a.metaKey || t.selectedIds.size > 0 ? (a.preventDefault(), a.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, k = (a) => {
    a.shiftKey ? (a.preventDefault(), a.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, y = (a) => {
    (a.shiftKey || a.ctrlKey || a.metaKey || t.selectedIds.size > 0) && a.preventDefault();
  }, P = (a) => {
    (a.key === "Enter" || a.key === " ") && (a.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: k,
      onMouseDown: y,
      onKeyDown: P,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "meld-image-card__menu-container", ref: u, children: [
          /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (a) => {
                a.stopPropagation(), s(!o);
              },
              title: "Menu",
              children: /* @__PURE__ */ c.jsx(yp, { size: 16 })
            }
          ),
          o && /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__menu", children: /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: "meld-image-card__menu-item",
              onClick: (a) => {
                a.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: { type: "parent_selection", imageId: e.id }
                }), s(!1);
              },
              children: [
                /* @__PURE__ */ c.jsx(wp, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Add source image" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ c.jsx(
          "img",
          {
            src: m,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: y,
            onClick: (a) => {
              a.stopPropagation(), _(a);
            }
          }
        ) }),
        /* @__PURE__ */ c.jsxs("div", { className: "meld-image-card__details", children: [
          t.settings["sidebar.show_filename"] && /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__filename", children: h }),
          t.settings["gallery.show_parent_image"] && g.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ c.jsx("div", { className: "meld-lineage-thumbs", children: g.map(
              (a, d) => a.imgSrc && /* @__PURE__ */ c.jsx(
                "img",
                {
                  src: a.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  onClick: (p) => {
                    p.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: { id: a.id || e.id, mode: "lineage" }
                    });
                  },
                  title: d === 0 ? "Source" : d === 1 ? "Grand-Source" : `Ancestor (S${d + 1})`,
                  alt: "source thumb"
                },
                a.id || d
              )
            ) })
          ] }),
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (a) => {
                a.stopPropagation(), i({
                  title: "Model",
                  text: e.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__meta-label", children: "Model" }),
                /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (a) => {
                a.stopPropagation(), i({
                  title: "Positive Prompt",
                  text: e.positive_prompt || e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__meta-label", children: "Positive" }),
                /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (a) => {
                a.stopPropagation(), i({
                  title: "Negative Prompt",
                  text: e.negative_prompt || e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__meta-label", children: "Negative" }),
                /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_tags"] && /* @__PURE__ */ c.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
            /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((a, d) => /* @__PURE__ */ c.jsx("span", { className: "meld-image-card__tag", children: a }, `${a}-${d}`)) : /* @__PURE__ */ c.jsx("span", { style: { color: "#666" }, children: "-" }) })
          ] })
        ] }),
        l && /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "meld-prompt-popup-overlay",
            onClick: (a) => {
              a.stopPropagation(), i(null);
            },
            children: /* @__PURE__ */ c.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (a) => a.stopPropagation(),
                children: [
                  /* @__PURE__ */ c.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ c.jsx("span", { children: l.title }),
                    /* @__PURE__ */ c.jsx(
                      Ft,
                      {
                        className: "meld-prompt-popup-close",
                        size: 18,
                        onClick: () => i(null)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ c.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, Dp = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = xt(), { viewerImageId: r, images: l, viewerMode: i, lineageImages: o } = e, [s, u] = I.useState(!1), [f, g] = I.useState(!1), h = i === "lineage" ? o : l.filter(
    (y) => y.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && y.has_children)
  ), m = (i === "lineage" && o.length > 0 ? o : l).find((y) => y.id === r), _ = I.useCallback(
    (y) => {
      y && "stopPropagation" in y && y.stopPropagation(), document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch((P) => {
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
    const y = h.findIndex(
      (P) => P.id === r
    );
    y !== -1 && y >= h.length - 15 && n();
  }, [
    r,
    h.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    h
  ]), I.useEffect(() => {
    const y = (a) => {
      r !== null && (a.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : a.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : a.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (a.key === "f" || a.key === "F") && _(a));
    }, P = () => {
      u(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", y), document.addEventListener("fullscreenchange", P), () => {
      window.removeEventListener("keydown", y), document.removeEventListener("fullscreenchange", P);
    };
  }, [r, t, _]), I.useEffect(() => {
    i === "lineage" && r !== null && o.length === 0 && (g(!0), Xf(r).then((y) => {
      t({ type: "SET_LINEAGE", payload: y });
    }).catch((y) => {
      console.error("Failed to fetch lineage:", y);
    }).finally(() => {
      g(!1);
    }));
  }, [i, r, o.length, t]), I.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), I.useEffect(() => {
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
  const k = `/api/view?filename=${encodeURIComponent(m.filename)}&type=${m.type || "output"}${m.subfolder ? `&subfolder=${encodeURIComponent(m.subfolder)}` : ""}`;
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "meld-viewer-overlay",
      onClick: () => t({ type: "CLOSE_VIEWER" }),
      role: "button",
      tabIndex: 0,
      children: /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: `meld-viewer-content ${s ? "meld-viewer-content--fullscreen" : ""}`,
          onClick: (y) => y.stopPropagation(),
          children: [
            /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-filename", children: m.filename }) }),
            /* @__PURE__ */ c.jsxs("div", { className: "meld-viewer-actions", children: [
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn",
                  onClick: _,
                  type: "button",
                  title: s ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                  children: s ? /* @__PURE__ */ c.jsx(gp, { size: 20 }) : /* @__PURE__ */ c.jsx(hp, { size: 20 })
                }
              ),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                  onClick: () => t({ type: "CLOSE_VIEWER" }),
                  type: "button",
                  title: "Close (Esc)",
                  children: /* @__PURE__ */ c.jsx(Ft, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--prev",
                onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ c.jsx(Gi, { size: 32 })
              }
            ),
            /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-image-container", children: /* @__PURE__ */ c.jsx(
              "img",
              {
                src: k,
                alt: m.filename,
                className: "meld-viewer-image"
              }
            ) }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--next",
                onClick: () => t({ type: "NEXT_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ c.jsx(gc, { size: 32 })
              }
            ),
            !s && /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ c.jsxs("div", { className: "meld-viewer-thumbnails", children: [
              f ? /* @__PURE__ */ c.jsx("div", { style: { padding: "10px", color: "#888" }, children: "Loading lineage..." }) : h.map((y, P) => {
                const a = y.id === r, d = typeof m.parent_id == "number" && m.parent_id === y.id, p = typeof y.parent_id == "number" && y.parent_id === m.id, w = `/api/view?filename=${encodeURIComponent(y.filename)}&type=${y.type || "output"}${y.subfolder ? `&subfolder=${encodeURIComponent(y.subfolder)}` : ""}`;
                return /* @__PURE__ */ c.jsxs(
                  "div",
                  {
                    className: "meld-viewer-thumbnail-wrapper",
                    children: [
                      i === "lineage" && P > 0 && /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-lineage-connector", children: /* @__PURE__ */ c.jsx(Gi, { size: 16 }) }),
                      /* @__PURE__ */ c.jsxs(
                        "div",
                        {
                          className: `meld-viewer-thumbnail ${a ? "meld-viewer-thumbnail--active" : ""} ${d ? "meld-viewer-thumbnail--parent" : ""} ${p ? "meld-viewer-thumbnail--child" : ""}`,
                          onClick: () => t({
                            type: "OPEN_VIEWER",
                            payload: { id: y.id, mode: i }
                          }),
                          children: [
                            /* @__PURE__ */ c.jsx("img", { src: w, alt: y.filename }),
                            (d || p) && /* @__PURE__ */ c.jsx(
                              "div",
                              {
                                className: `meld-viewer-thumbnail-relation-icon ${d ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
                                children: d ? /* @__PURE__ */ c.jsx(cp, { size: 12 }) : /* @__PURE__ */ c.jsx(up, { size: 12 })
                              }
                            ),
                            /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-thumbnail-label-v2", children: a ? "Current" : d ? "Source" : p ? "Derivative" : "" })
                          ]
                        }
                      )
                    ]
                  },
                  y.id
                );
              }),
              i === "gallery" && e.isLoading && /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ c.jsx(yc, { className: "animate-spin", size: 20 }) })
            ] }) })
          ]
        }
      )
    }
  );
}, Op = () => {
  const { state: e, dispatch: t } = xt(), { scanStatus: n } = e, [r, l] = I.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0
  }), [i, o] = I.useState([]), [s, u] = I.useState(!1), f = I.useCallback(async () => {
    if (r.type !== "custom") {
      u(!0);
      try {
        const a = await qf(r.type, r.subfolder);
        o(a);
      } catch (a) {
        console.error("Failed to load folders:", a);
      } finally {
        u(!1);
      }
    }
  }, [r.type, r.subfolder]);
  I.useEffect(() => {
    f();
  }, [f]);
  const g = async () => {
    try {
      await bf(r), t({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      });
    } catch (a) {
      console.error("Failed to start scan:", a), alert(`Failed to start scan: ${a}`);
    }
  }, h = async () => {
    try {
      await ep(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (a) {
      console.error("Failed to cancel scan:", a);
    }
  }, m = (a) => {
    const d = r.subfolder ? `${r.subfolder}/${a}` : a;
    l({ ...r, subfolder: d });
  }, _ = () => {
    const a = r.subfolder.split("/");
    a.pop(), l({ ...r, subfolder: a.join("/") });
  }, k = () => {
    n.isFinished && t({ type: "SET_SCAN_STATUS", payload: { isFinished: !1 } }), t({ type: "CLOSE_MODAL" });
  }, y = n.progress.phase === "linking", P = y ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ c.jsx("div", { className: "meld-modal-overlay", onClick: k, children: /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "meld-modal-content meld-modal-content--large",
      onClick: (a) => a.stopPropagation(),
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ c.jsx("h2", { children: "Import Images" }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              className: "meld-modal-close",
              onClick: k,
              children: /* @__PURE__ */ c.jsx(Ft, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsx("div", { className: "meld-modal-body", children: n.isRunning ? /* @__PURE__ */ c.jsxs("div", { className: "meld-scan-progress", children: [
          /* @__PURE__ */ c.jsx("div", { className: "meld-scan-status-text", children: n.shouldCancel ? /* @__PURE__ */ c.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : y ? /* @__PURE__ */ c.jsx("span", { children: "Linking parent images..." }) : /* @__PURE__ */ c.jsx("span", { children: "Scanning images..." }) }),
          /* @__PURE__ */ c.jsx("div", { className: "meld-progress-container", children: /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "meld-progress-bar",
              style: { width: `${P}%` }
            }
          ) }),
          /* @__PURE__ */ c.jsx("div", { className: "meld-progress-stats", children: y ? /* @__PURE__ */ c.jsxs("span", { children: [
            "Processing relations: ",
            n.progress.current,
            " /",
            " ",
            n.progress.total
          ] }) : /* @__PURE__ */ c.jsxs("span", { children: [
            n.progress.current,
            " / ",
            n.progress.total
          ] }) }),
          /* @__PURE__ */ c.jsxs("div", { className: "meld-scan-actions", children: [
            /* @__PURE__ */ c.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: k,
                children: "Run in Background"
              }
            ),
            /* @__PURE__ */ c.jsxs(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-danger",
                disabled: n.shouldCancel,
                onClick: h,
                children: [
                  /* @__PURE__ */ c.jsx(Sp, { size: 16 }),
                  "Stop Scan"
                ]
              }
            )
          ] })
        ] }) : n.isFinished ? /* @__PURE__ */ c.jsxs("div", { className: "meld-scan-finished", children: [
          /* @__PURE__ */ c.jsx("div", { className: "meld-finished-icon", children: /* @__PURE__ */ c.jsx(pp, { size: 64, color: "var(--meld-success)" }) }),
          /* @__PURE__ */ c.jsx("h3", { children: "Import Completed" }),
          /* @__PURE__ */ c.jsxs("p", { children: [
            "Successfully scanned ",
            /* @__PURE__ */ c.jsx("strong", { children: n.totalCount }),
            " ",
            "images.",
            /* @__PURE__ */ c.jsx("br", {}),
            "(",
            /* @__PURE__ */ c.jsx("strong", { children: n.newCount }),
            " new images were added to database)"
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              className: "meld-btn meld-btn-primary",
              onClick: k,
              style: { minWidth: "120px" },
              children: "Close"
            }
          ) })
        ] }) : /* @__PURE__ */ c.jsxs("div", { className: "meld-import-container", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "meld-import-sidebar", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "meld-form-group", children: [
              /* @__PURE__ */ c.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
              /* @__PURE__ */ c.jsxs(
                "select",
                {
                  id: "base-location",
                  value: r.type,
                  onChange: (a) => l({
                    ...r,
                    type: a.target.value,
                    subfolder: ""
                  }),
                  children: [
                    /* @__PURE__ */ c.jsx("option", { value: "output", children: "Output Directory" }),
                    /* @__PURE__ */ c.jsx("option", { value: "input", children: "Input Directory" }),
                    /* @__PURE__ */ c.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                  ]
                }
              )
            ] }),
            r.type === "custom" ? /* @__PURE__ */ c.jsxs("div", { className: "meld-form-group", children: [
              /* @__PURE__ */ c.jsx("label", { htmlFor: "custom-path", children: "Absolute Path" }),
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  id: "custom-path",
                  type: "text",
                  placeholder: "C:\\path\\to\\images or /path/to/images",
                  value: r.custom_path,
                  onChange: (a) => l({ ...r, custom_path: a.target.value })
                }
              )
            ] }) : /* @__PURE__ */ c.jsxs("div", { className: "meld-form-group", children: [
              /* @__PURE__ */ c.jsx("span", { className: "meld-form-label", children: "Current Path" }),
              /* @__PURE__ */ c.jsxs("div", { className: "meld-path-display", children: [
                /* @__PURE__ */ c.jsxs("span", { children: [
                  r.type,
                  "/"
                ] }),
                r.subfolder
              ] })
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ c.jsxs("label", { children: [
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.recursive,
                  onChange: (a) => l({ ...r, recursive: a.target.checked })
                }
              ),
              "Recursive Scan"
            ] }) }),
            /* @__PURE__ */ c.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ c.jsxs("label", { children: [
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.auto_link_parent,
                  onChange: (a) => l({
                    ...r,
                    auto_link_parent: a.target.checked
                  })
                }
              ),
              "Auto Link Parent"
            ] }) }),
            /* @__PURE__ */ c.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ c.jsxs(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: g,
                style: { width: "100%" },
                children: [
                  /* @__PURE__ */ c.jsx(vp, { size: 16 }),
                  "Start Import"
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "meld-import-browser", children: [
            r.type !== "custom" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsxs("div", { className: "meld-browser-header", children: [
                /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-browser-back",
                    disabled: !r.subfolder,
                    onClick: _,
                    children: [
                      /* @__PURE__ */ c.jsx(Gi, { size: 16 }),
                      "Back"
                    ]
                  }
                ),
                /* @__PURE__ */ c.jsx("span", { className: "meld-browser-title", children: "Browse Folders" })
              ] }),
              /* @__PURE__ */ c.jsx("div", { className: "meld-folder-list", children: s ? /* @__PURE__ */ c.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : i.length === 0 ? /* @__PURE__ */ c.jsx("div", { className: "meld-browser-empty", children: "No subfolders found." }) : i.map((a) => /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: "meld-folder-item",
                  onClick: () => m(a),
                  children: [
                    /* @__PURE__ */ c.jsx(ea, { size: 16 }),
                    /* @__PURE__ */ c.jsx("span", { children: a }),
                    /* @__PURE__ */ c.jsx(gc, { size: 14 })
                  ]
                },
                a
              )) })
            ] }),
            r.type === "custom" && /* @__PURE__ */ c.jsxs("div", { className: "meld-browser-info", children: [
              /* @__PURE__ */ c.jsx(ea, { size: 48 }),
              /* @__PURE__ */ c.jsx("p", { children: "Please enter an absolute path in the sidebar." }),
              /* @__PURE__ */ c.jsx("span", { style: { fontSize: "11px", color: "#666" }, children: "Example: C:\\Users\\Me\\Pictures or /home/me/images" })
            ] })
          ] })
        ] }) })
      ]
    }
  ) });
}, Fp = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = xt(), [l, i] = I.useState([]), [o, s] = I.useState(!0), [u, f] = I.useState(!1), g = t.images.find((a) => a.id === e), h = I.useCallback(async () => {
    s(!0);
    try {
      const a = await Yf(e);
      i(a);
    } catch (a) {
      console.error("Failed to load suggestions:", a);
    } finally {
      s(!1);
    }
  }, [e]);
  I.useEffect(() => {
    h();
  }, [h]);
  const m = async (a) => {
    try {
      await Kf(e, a), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, _ = async (a) => {
    s(!0);
    try {
      const d = await Zf(a), { id: p } = await pc({
        filename: d.name,
        subfolder: d.subfolder || "",
        type: d.type || "input"
      });
      await m(p);
    } catch (d) {
      console.error("Failed to upload/register image:", d);
    } finally {
      s(!1);
    }
  }, k = (a) => {
    a.preventDefault(), a.stopPropagation(), f(!1);
    const d = a.dataTransfer.files[0];
    d != null && d.type.startsWith("image/") && _(d);
  };
  if (!g) return null;
  const y = l.filter((a) => a.is_source_match), P = l.filter((a) => !a.is_source_match);
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => n({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ c.jsxs("div", { className: "meld-modal-content", onClick: (a) => a.stopPropagation(), children: [
        /* @__PURE__ */ c.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ c.jsxs("h2", { children: [
            "Select Source for #",
            g.id
          ] }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              className: "meld-modal-close",
              onClick: () => n({ type: "CLOSE_MODAL" }),
              children: /* @__PURE__ */ c.jsx(Ft, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "meld-modal-body", children: [
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
              onDragEnter: (a) => {
                a.preventDefault(), a.stopPropagation(), f(!0);
              },
              onDragOver: (a) => {
                a.preventDefault(), a.stopPropagation(), a.dataTransfer.dropEffect = "copy", f(!0);
              },
              onDragLeave: (a) => {
                a.preventDefault(), a.stopPropagation(), f(!1);
              },
              onDrop: k,
              children: [
                /* @__PURE__ */ c.jsx(Cp, { size: 32 }),
                /* @__PURE__ */ c.jsx("p", { children: "Drop an image file here to set it as source" })
              ]
            }
          ),
          o ? /* @__PURE__ */ c.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ c.jsxs("div", { className: "meld-suggestions-container", children: [
            y.length > 0 && /* @__PURE__ */ c.jsxs("section", { children: [
              /* @__PURE__ */ c.jsx("h3", { children: "Source Matches (from metadata)" }),
              /* @__PURE__ */ c.jsx("div", { className: "meld-suggestion-grid", children: y.map((a) => /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => m(a.id),
                  children: [
                    /* @__PURE__ */ c.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(a.filename)}&type=${a.type || "output"}${a.subfolder ? `&subfolder=${encodeURIComponent(a.subfolder)}` : ""}`,
                        alt: a.filename
                      }
                    ),
                    /* @__PURE__ */ c.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ c.jsx("span", { className: "meld-suggestion-filename", children: a.filename }) })
                  ]
                },
                a.id
              )) })
            ] }),
            /* @__PURE__ */ c.jsxs("section", { children: [
              /* @__PURE__ */ c.jsx("h3", { children: "Visual Matches (pHash)" }),
              P.length > 0 ? /* @__PURE__ */ c.jsx("div", { className: "meld-suggestion-grid", children: P.map((a) => /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => m(a.id),
                  children: [
                    /* @__PURE__ */ c.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(a.filename)}&type=${a.type || "output"}${a.subfolder ? `&subfolder=${encodeURIComponent(a.subfolder)}` : ""}`,
                        alt: a.filename
                      }
                    ),
                    /* @__PURE__ */ c.jsxs("div", { className: "meld-suggestion-info", children: [
                      /* @__PURE__ */ c.jsx("span", { className: "meld-suggestion-filename", children: a.filename }),
                      /* @__PURE__ */ c.jsxs("span", { className: "meld-suggestion-distance", children: [
                        "Match:",
                        " ",
                        Math.round((64 - a.distance) / 64 * 100),
                        "%"
                      ] })
                    ] })
                  ]
                },
                a.id
              )) }) : /* @__PURE__ */ c.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
            ] })
          ] })
        ] })
      ] })
    }
  );
}, Ap = () => {
  const { state: e, dispatch: t } = xt(), [n, r] = I.useState(e.searchQuery), [l, i] = I.useState([]), [o, s] = I.useState(!1), [u, f] = I.useState([]), [g, h] = I.useState(-1), m = I.useRef(null), _ = I.useRef(null), k = I.useRef(e.searchQuery);
  I.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      f([]);
      return;
    }
    !n && !e.searchQuery ? Hf().then((v) => {
      f(v);
    }) : f([]);
  }, [
    n,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), I.useEffect(() => {
    r(e.searchQuery), k.current = e.searchQuery;
  }, [e.searchQuery]), I.useEffect(() => {
    var v;
    (v = m.current) == null || v.focus();
  }, []);
  const y = I.useCallback(
    (v, S = !0) => {
      k.current !== v && (t({ type: "SET_SEARCH_QUERY", payload: v }), S && s(!1), k.current = v);
    },
    [t]
  );
  I.useEffect(() => {
    const v = setTimeout(async () => {
      if (n === k.current)
        return;
      if (e.settings["search.realtime_search"] && y(n, !1), !e.settings["search.input_suggest"]) {
        i([]), s(!1);
        return;
      }
      const S = n.split(/\s+/), E = S[S.length - 1];
      if (E) {
        const j = E.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (j) {
          const D = j[1].toLowerCase(), T = j[2], fe = await Bf(T, D);
          i(fe), s(fe.length > 0), h(-1);
        } else
          i([]), s(!1);
      } else
        i([]), s(!1);
    }, 300);
    return () => clearTimeout(v);
  }, [
    n,
    e.settings["search.realtime_search"],
    e.settings["search.input_suggest"],
    y
  ]);
  const P = (v) => {
    v.key === "Enter" ? y(n) : v.key === "Tab" ? o && g >= 0 && (a(l[g]), v.preventDefault()) : v.key === "ArrowDown" ? o && (h((S) => Math.min(S + 1, l.length - 1)), v.preventDefault()) : v.key === "ArrowUp" ? o && (h((S) => Math.max(S - 1, -1)), v.preventDefault()) : v.key === "Escape" && s(!1);
  }, a = (v) => {
    var T;
    const S = n.split(/\s+/);
    S.pop();
    const j = ["date", "after", "before"].includes(v.type) ? v.value : `"${v.value}"`, D = `${[...S, `${v.type}:${j}`].join(" ").trim()} `;
    r(D), y(D), i([]), s(!1), (T = m.current) == null || T.focus();
  }, d = () => {
    r(""), y("");
  }, p = (v, S) => {
    const j = ["date", "after", "before"].includes(v) ? S : `"${S}"`, D = `${v}:${j}`;
    r(D), y(D);
  }, w = (v) => {
    switch (v) {
      case "tag":
        return /* @__PURE__ */ c.jsx(kp, { size: 12 });
      case "model":
        return /* @__PURE__ */ c.jsx(dp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ c.jsx(Ep, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ c.jsx(fp, { size: 12 });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              /* @__PURE__ */ c.jsxs(
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
                    /* @__PURE__ */ c.jsx(
                      vc,
                      {
                        size: 18,
                        color: "#666",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: m,
                        type: "text",
                        value: n,
                        onChange: (v) => r(v.target.value),
                        onKeyDown: P,
                        onBlur: () => setTimeout(() => s(!1), 200),
                        onFocus: () => {
                          if (n === k.current) return;
                          const v = n.split(/\s+/), S = v[v.length - 1];
                          S != null && S.match(/^(pos|neg|model|date|after|before):/i) && s(!0);
                        },
                        placeholder: "Search anything: prompts, tags, models, dates, or free keywords...",
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
                    n && /* @__PURE__ */ c.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: d,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ c.jsx(Ft, { size: 16, color: "#666" })
                      }
                    )
                  ]
                }
              ),
              o && l.length > 0 && /* @__PURE__ */ c.jsx(
                "div",
                {
                  ref: _,
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
                  children: l.map((v, S) => /* @__PURE__ */ c.jsx(
                    "div",
                    {
                      onMouseDown: (E) => {
                        E.preventDefault(), a(v);
                      },
                      onMouseEnter: () => h(S),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: S === g ? "#333" : "transparent",
                        borderBottom: "1px solid #2a2a2a"
                      },
                      children: /* @__PURE__ */ c.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ c.jsx("span", { style: { color: "#888", display: "flex" }, children: w(v.type) }),
                            /* @__PURE__ */ c.jsx(
                              "span",
                              {
                                style: {
                                  color: "#3b82f6",
                                  fontSize: "11px",
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  width: "45px"
                                },
                                children: v.type
                              }
                            ),
                            /* @__PURE__ */ c.jsx("span", { style: { color: "#eee", fontSize: "14px" }, children: v.value })
                          ]
                        }
                      )
                    },
                    `${v.type}:${v.value}`
                  ))
                }
              )
            ]
          }
        ),
        !n && !e.searchQuery && u.length > 0 && /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "meld-search-quick-suggestions",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: u.map((v) => /* @__PURE__ */ c.jsxs(
              "button",
              {
                type: "button",
                onClick: () => p(v.type, v.value),
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #333",
                  borderRadius: "16px",
                  padding: "4px 12px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  color: "#ccc",
                  fontSize: "12px"
                },
                onMouseEnter: (S) => {
                  S.currentTarget.style.backgroundColor = "#333", S.currentTarget.style.borderColor = "#444", S.currentTarget.style.color = "#fff";
                },
                onMouseLeave: (S) => {
                  S.currentTarget.style.backgroundColor = "#2a2a2a", S.currentTarget.style.borderColor = "#333", S.currentTarget.style.color = "#ccc";
                },
                children: [
                  /* @__PURE__ */ c.jsx("span", { style: { display: "flex", color: "#888" }, children: w(v.type) }),
                  /* @__PURE__ */ c.jsx(
                    "span",
                    {
                      style: {
                        color: "#3b82f6",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontSize: "10px"
                      },
                      children: v.type
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
                    "span",
                    {
                      style: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: v.value
                    }
                  )
                ]
              },
              `${v.type}:${v.value}`
            ))
          }
        )
      ]
    }
  );
}, Up = () => {
  const { state: e, dispatch: t, updateSetting: n } = xt(), [r, l] = I.useState("General"), i = [
    {
      key: "gallery.hide_parent_images",
      label: "Hide Source Images",
      description: "Hide images that have been used as a basis for other images (sources).",
      type: "boolean",
      category: "General"
    },
    {
      key: "sidebar.show_filename",
      label: "Show Filename",
      description: "Display the filename on the card.",
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
    }
  ], o = (u, f) => {
    n(u, !f);
  }, s = i.filter(
    (u) => u.category === r
  );
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => t({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: "meld-modal-content meld-settings-modal",
          onClick: (u) => u.stopPropagation(),
          children: [
            /* @__PURE__ */ c.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ c.jsx("h2", { children: "Settings" }),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-modal-close",
                  onClick: () => t({ type: "CLOSE_MODAL" }),
                  children: /* @__PURE__ */ c.jsx(Ft, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "meld-tabs", children: [
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "General" ? "active" : ""}`,
                  onClick: () => l("General"),
                  children: "General"
                }
              ),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Sidebar" ? "active" : ""}`,
                  onClick: () => l("Sidebar"),
                  children: "Sidebar"
                }
              ),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Search" ? "active" : ""}`,
                  onClick: () => l("Search"),
                  children: "Search"
                }
              )
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ c.jsx("div", { className: "meld-settings-list", children: s.map((u) => /* @__PURE__ */ c.jsxs("div", { className: "meld-settings-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "meld-settings-item__info", children: [
                /* @__PURE__ */ c.jsx("div", { className: "meld-settings-item__label", children: u.label }),
                /* @__PURE__ */ c.jsx("div", { className: "meld-settings-item__description", children: u.description })
              ] }),
              /* @__PURE__ */ c.jsx("div", { className: "meld-settings-item__control", children: u.type === "boolean" && /* @__PURE__ */ c.jsxs("label", { className: "meld-switch", children: [
                /* @__PURE__ */ c.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!e.settings[u.key],
                    onChange: () => o(u.key, !!e.settings[u.key])
                  }
                ),
                /* @__PURE__ */ c.jsx("span", { className: "meld-switch__slider" })
              ] }) })
            ] }, u.key)) }) })
          ]
        }
      )
    }
  );
}, $p = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = xt(), [l, i] = I.useState(!1), o = e.searchQuery.trim() !== "", s = I.useRef(null), u = e.images.filter(
    (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
  );
  return I.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && u.length === 0 && (Ee.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    u.length,
    r
  ]), Ee.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: u.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), I.useEffect(() => {
    const f = new IntersectionObserver(
      (h) => {
        h[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (Ee.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), g = s.current;
    return g && f.observe(g), () => {
      g && f.unobserve(g);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), /* @__PURE__ */ c.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ c.jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          marginBottom: "15px",
          gap: "10px"
        },
        children: [
          /* @__PURE__ */ c.jsxs(
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
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => i(!l),
                    style: {
                      background: "none",
                      border: "none",
                      color: o ? "var(--meld-success-color)" : l ? "#fff" : "#888",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: o ? "bold" : "normal"
                    },
                    title: "Search",
                    children: /* @__PURE__ */ c.jsx(vc, { size: 14 })
                  }
                ),
                /* @__PURE__ */ c.jsx(
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
                      alignItems: "center"
                    },
                    title: "Import",
                    children: /* @__PURE__ */ c.jsx(mp, { size: 14 })
                  }
                ),
                /* @__PURE__ */ c.jsx(
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
                      alignItems: "center"
                    },
                    disabled: e.isLoading,
                    title: "Refresh",
                    children: /* @__PURE__ */ c.jsx(
                      yc,
                      {
                        size: 14,
                        className: e.isLoading ? "animate-spin" : ""
                      }
                    )
                  }
                ),
                /* @__PURE__ */ c.jsx(
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
                      alignItems: "center"
                    },
                    title: "Settings",
                    children: /* @__PURE__ */ c.jsx(xp, { size: 14 })
                  }
                )
              ]
            }
          ),
          l && /* @__PURE__ */ c.jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ c.jsx(Ap, {}) })
        ]
      }
    ),
    e.error && /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && u.length === 0 ? /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : u.length === 0 ? /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__list", children: u.map((f) => /* @__PURE__ */ c.jsx(Rp, { image: f }, f.id)) }),
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          ref: s,
          className: "meld-gallery__load-more",
          style: { height: "20px", margin: "20px 0", textAlign: "center" },
          children: [
            e.isLoading && /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
            !e.pagination.hasMore && u.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(zp, {}),
    e.viewerImageId !== null && /* @__PURE__ */ c.jsx(Dp, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ c.jsx(Fp, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ c.jsx(Op, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ c.jsx(Up, {})
  ] });
}, El = document.createElement("link");
El.rel = "stylesheet";
El.type = "text/css";
El.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(El);
let Er = null, Me = null;
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
      }, Z.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), Z.addEventListener("meld-nexus-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-progress", { detail: n.detail })
        );
      }), Z.addEventListener("meld-nexus-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-finished", { detail: n.detail })
        ), (r = e.ui.meldNexus) == null || r.refresh(), console.log("Meld Nexus: Import completed.");
      }), Z.addEventListener(
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
              galleryRoot: Er,
              galleryContainer: Me
            }), Me || (Ee.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), Me = document.createElement("div"), Me.id = "meld-flow-gallery-container", Me.style.height = "100%", Me.style.width = "100%", Me.style.display = "flex", Me.style.flexDirection = "column"), n.contains(Me) || (Ee.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(Me)), Er ? Ee.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (Ee.log("MeldNexus: Creating new gallery root"), Er = dc(Me), Er.render(
              Go.createElement(
                Mp,
                null,
                Go.createElement($p)
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
