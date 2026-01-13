import { api as $ } from "../../../scripts/api.js";
import { app as da } from "../../../scripts/app.js";
function Lc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fa = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir = Symbol.for("react.element"), zc = Symbol.for("react.portal"), Mc = Symbol.for("react.fragment"), Rc = Symbol.for("react.strict_mode"), Fc = Symbol.for("react.profiler"), Oc = Symbol.for("react.provider"), Dc = Symbol.for("react.context"), Ac = Symbol.for("react.forward_ref"), $c = Symbol.for("react.suspense"), Uc = Symbol.for("react.memo"), Vc = Symbol.for("react.lazy"), Zi = Symbol.iterator;
function Qc(e) {
  return e === null || typeof e != "object" ? null : (e = Zi && e[Zi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pa = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ma = Object.assign, ha = {};
function vn(e, t, n) {
  this.props = e, this.context = t, this.refs = ha, this.updater = n || pa;
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ga() {
}
ga.prototype = vn.prototype;
function Jo(e, t, n) {
  this.props = e, this.context = t, this.refs = ha, this.updater = n || pa;
}
var qo = Jo.prototype = new ga();
qo.constructor = Jo;
ma(qo, vn.prototype);
qo.isPureReactComponent = !0;
var bi = Array.isArray, ya = Object.prototype.hasOwnProperty, ei = { current: null }, va = { key: !0, ref: !0, __self: !0, __source: !0 };
function wa(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ya.call(t, r) && !va.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), f = 0; f < a; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: ir, type: e, key: o, ref: i, props: l, _owner: ei.current };
}
function Wc(e, t) {
  return { $$typeof: ir, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ti(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ir;
}
function Bc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ji = /\/+/g;
function Ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Bc("" + e.key) : t.toString(36);
}
function zr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ir:
        case zc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Ml(i, 0) : r, bi(l) ? (n = "", e != null && (n = e.replace(Ji, "$&/") + "/"), zr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (ti(l) && (l = Wc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ji, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", bi(e)) for (var a = 0; a < e.length; a++) {
    o = e[a];
    var u = r + Ml(o, a);
    i += zr(o, t, n, u, l);
  }
  else if (u = Qc(e), typeof u == "function") for (e = u.call(e), a = 0; !(o = e.next()).done; ) o = o.value, u = r + Ml(o, a++), i += zr(o, t, n, u, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function mr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return zr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Hc(e) {
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
var ve = { current: null }, Mr = { transition: null }, Gc = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: Mr, ReactCurrentOwner: ei };
function xa() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = { map: mr, forEach: function(e, t, n) {
  mr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return mr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return mr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ti(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
D.Component = vn;
D.Fragment = Mc;
D.Profiler = Fc;
D.PureComponent = Jo;
D.StrictMode = Rc;
D.Suspense = $c;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gc;
D.act = xa;
D.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ma({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ei.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (u in t) ya.call(t, u) && !va.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var f = 0; f < u; f++) a[f] = arguments[f + 2];
    r.children = a;
  }
  return { $$typeof: ir, type: e.type, key: l, ref: o, props: r, _owner: i };
};
D.createContext = function(e) {
  return e = { $$typeof: Dc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Oc, _context: e }, e.Consumer = e;
};
D.createElement = wa;
D.createFactory = function(e) {
  var t = wa.bind(null, e);
  return t.type = e, t;
};
D.createRef = function() {
  return { current: null };
};
D.forwardRef = function(e) {
  return { $$typeof: Ac, render: e };
};
D.isValidElement = ti;
D.lazy = function(e) {
  return { $$typeof: Vc, _payload: { _status: -1, _result: e }, _init: Hc };
};
D.memo = function(e, t) {
  return { $$typeof: Uc, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function(e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = t;
  }
};
D.unstable_act = xa;
D.useCallback = function(e, t) {
  return ve.current.useCallback(e, t);
};
D.useContext = function(e) {
  return ve.current.useContext(e);
};
D.useDebugValue = function() {
};
D.useDeferredValue = function(e) {
  return ve.current.useDeferredValue(e);
};
D.useEffect = function(e, t) {
  return ve.current.useEffect(e, t);
};
D.useId = function() {
  return ve.current.useId();
};
D.useImperativeHandle = function(e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function(e, t) {
  return ve.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function(e, t) {
  return ve.current.useLayoutEffect(e, t);
};
D.useMemo = function(e, t) {
  return ve.current.useMemo(e, t);
};
D.useReducer = function(e, t, n) {
  return ve.current.useReducer(e, t, n);
};
D.useRef = function(e) {
  return ve.current.useRef(e);
};
D.useState = function(e) {
  return ve.current.useState(e);
};
D.useSyncExternalStore = function(e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function() {
  return ve.current.useTransition();
};
D.version = "18.3.1";
fa.exports = D;
var k = fa.exports;
const qi = /* @__PURE__ */ Lc(k);
var Sa = { exports: {} }, Ie = {}, ka = { exports: {} }, _a = {};
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
  function t(L, R) {
    var O = L.length;
    L.push(R);
    e: for (; 0 < O; ) {
      var K = O - 1 >>> 1, oe = L[K];
      if (0 < l(oe, R)) L[K] = R, L[O] = oe, O = K;
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var R = L[0], O = L.pop();
    if (O !== R) {
      L[0] = O;
      e: for (var K = 0, oe = L.length, fr = oe >>> 1; K < fr; ) {
        var Tt = 2 * (K + 1) - 1, zl = L[Tt], It = Tt + 1, pr = L[It];
        if (0 > l(zl, O)) It < oe && 0 > l(pr, zl) ? (L[K] = pr, L[It] = O, K = It) : (L[K] = zl, L[Tt] = O, K = Tt);
        else if (It < oe && 0 > l(pr, O)) L[K] = pr, L[It] = O, K = It;
        else break e;
      }
    }
    return R;
  }
  function l(L, R) {
    var O = L.sortIndex - R.sortIndex;
    return O !== 0 ? O : L.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, a = i.now();
    e.unstable_now = function() {
      return i.now() - a;
    };
  }
  var u = [], f = [], g = 1, h = null, m = 3, x = !1, _ = !1, S = !1, j = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(L) {
    for (var R = n(f); R !== null; ) {
      if (R.callback === null) r(f);
      else if (R.startTime <= L) r(f), R.sortIndex = R.expirationTime, t(u, R);
      else break;
      R = n(f);
    }
  }
  function v(L) {
    if (S = !1, p(L), !_) if (n(u) !== null) _ = !0, ee(N);
    else {
      var R = n(f);
      R !== null && ne(v, R.startTime - L);
    }
  }
  function N(L, R) {
    _ = !1, S && (S = !1, d(y), y = -1), x = !0;
    var O = m;
    try {
      for (p(R), h = n(u); h !== null && (!(h.expirationTime > R) || L && !Q()); ) {
        var K = h.callback;
        if (typeof K == "function") {
          h.callback = null, m = h.priorityLevel;
          var oe = K(h.expirationTime <= R);
          R = e.unstable_now(), typeof oe == "function" ? h.callback = oe : h === n(u) && r(u), p(R);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var fr = !0;
      else {
        var Tt = n(f);
        Tt !== null && ne(v, Tt.startTime - R), fr = !1;
      }
      return fr;
    } finally {
      h = null, m = O, x = !1;
    }
  }
  var w = !1, T = null, y = -1, F = 5, M = -1;
  function Q() {
    return !(e.unstable_now() - M < F);
  }
  function I() {
    if (T !== null) {
      var L = e.unstable_now();
      M = L;
      var R = !0;
      try {
        R = T(!0, L);
      } finally {
        R ? E() : (w = !1, T = null);
      }
    } else w = !1;
  }
  var E;
  if (typeof c == "function") E = function() {
    c(I);
  };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(), J = P.port2;
    P.port1.onmessage = I, E = function() {
      J.postMessage(null);
    };
  } else E = function() {
    j(I, 0);
  };
  function ee(L) {
    T = L, w || (w = !0, E());
  }
  function ne(L, R) {
    y = j(function() {
      L(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) {
    L.callback = null;
  }, e.unstable_continueExecution = function() {
    _ || x || (_ = !0, ee(N));
  }, e.unstable_forceFrameRate = function(L) {
    0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < L ? Math.floor(1e3 / L) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(L) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = m;
    }
    var O = m;
    m = R;
    try {
      return L();
    } finally {
      m = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(L, R) {
    switch (L) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        L = 3;
    }
    var O = m;
    m = L;
    try {
      return R();
    } finally {
      m = O;
    }
  }, e.unstable_scheduleCallback = function(L, R, O) {
    var K = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? K + O : K) : O = K, L) {
      case 1:
        var oe = -1;
        break;
      case 2:
        oe = 250;
        break;
      case 5:
        oe = 1073741823;
        break;
      case 4:
        oe = 1e4;
        break;
      default:
        oe = 5e3;
    }
    return oe = O + oe, L = { id: g++, callback: R, priorityLevel: L, startTime: O, expirationTime: oe, sortIndex: -1 }, O > K ? (L.sortIndex = O, t(f, L), n(u) === null && L === n(f) && (S ? (d(y), y = -1) : S = !0, ne(v, O - K))) : (L.sortIndex = oe, t(u, L), _ || x || (_ = !0, ee(N))), L;
  }, e.unstable_shouldYield = Q, e.unstable_wrapCallback = function(L) {
    var R = m;
    return function() {
      var O = m;
      m = R;
      try {
        return L.apply(this, arguments);
      } finally {
        m = O;
      }
    };
  };
})(_a);
ka.exports = _a;
var Kc = ka.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc = k, Te = Kc;
function C(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ea = /* @__PURE__ */ new Set(), Wn = {};
function Qt(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Wn[e] = t, e = 0; e < t.length; e++) Ea.add(t[e]);
}
var nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oo = Object.prototype.hasOwnProperty, Xc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, es = {}, ts = {};
function Zc(e) {
  return oo.call(ts, e) ? !0 : oo.call(es, e) ? !1 : Xc.test(e) ? ts[e] = !0 : (es[e] = !0, !1);
}
function bc(e, t, n, r) {
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
function Jc(e, t, n, r) {
  if (t === null || typeof t > "u" || bc(e, t, n, r)) return !0;
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
function we(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ce[e] = new we(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ce[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ce[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ce[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ce[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ce[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ce[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ce[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ce[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ni = /[\-:]([a-z])/g;
function ri(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ni,
    ri
  );
  ce[t] = new we(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ni, ri);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ni, ri);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function li(e, t, n, r) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Jc(t, n, l, r) && (n = null), r || l === null ? Zc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var it = Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, hr = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), oi = Symbol.for("react.strict_mode"), io = Symbol.for("react.profiler"), Ca = Symbol.for("react.provider"), Na = Symbol.for("react.context"), ii = Symbol.for("react.forward_ref"), so = Symbol.for("react.suspense"), ao = Symbol.for("react.suspense_list"), si = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), ja = Symbol.for("react.offscreen"), ns = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object" ? null : (e = ns && e[ns] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Z = Object.assign, Rl;
function Pn(e) {
  if (Rl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Rl = t && t[1] || "";
  }
  return `
` + Rl + e;
}
var Fl = !1;
function Ol(e, t) {
  if (!e || Fl) return "";
  Fl = !0;
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
`), o = r.stack.split(`
`), i = l.length - 1, a = o.length - 1; 1 <= i && 0 <= a && l[i] !== o[a]; ) a--;
      for (; 1 <= i && 0 <= a; i--, a--) if (l[i] !== o[a]) {
        if (i !== 1 || a !== 1)
          do
            if (i--, a--, 0 > a || l[i] !== o[a]) {
              var u = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= i && 0 <= a);
        break;
      }
    }
  } finally {
    Fl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Pn(e) : "";
}
function qc(e) {
  switch (e.tag) {
    case 5:
      return Pn(e.type);
    case 16:
      return Pn("Lazy");
    case 13:
      return Pn("Suspense");
    case 19:
      return Pn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ol(e.type, !1), e;
    case 11:
      return e = Ol(e.type.render, !1), e;
    case 1:
      return e = Ol(e.type, !0), e;
    default:
      return "";
  }
}
function uo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gt:
      return "Fragment";
    case Ht:
      return "Portal";
    case io:
      return "Profiler";
    case oi:
      return "StrictMode";
    case so:
      return "Suspense";
    case ao:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Na:
      return (e.displayName || "Context") + ".Consumer";
    case Ca:
      return (e._context.displayName || "Context") + ".Provider";
    case ii:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case si:
      return t = e.displayName || null, t !== null ? t : uo(e.type) || "Memo";
    case ut:
      t = e._payload, e = e._init;
      try {
        return uo(e(t));
      } catch {
      }
  }
  return null;
}
function ed(e) {
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
      return uo(t);
    case 8:
      return t === oi ? "StrictMode" : "Mode";
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
function _t(e) {
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
function Ta(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function td(e) {
  var t = Ta(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function gr(e) {
  e._valueTracker || (e._valueTracker = td(e));
}
function Ia(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ta(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Br(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function co(e, t) {
  var n = t.checked;
  return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function rs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = _t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Pa(e, t) {
  t = t.checked, t != null && li(e, "checked", t, !1);
}
function fo(e, t) {
  Pa(e, t);
  var n = _t(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? po(e, t.type, n) : t.hasOwnProperty("defaultValue") && po(e, t.type, _t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ls(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function po(e, t, n) {
  (t !== "number" || Br(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ln = Array.isArray;
function rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _t(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function mo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return Z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function os(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(C(92));
      if (Ln(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: _t(n) };
}
function La(e, t) {
  var n = _t(t.value), r = _t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function is(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function za(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ho(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? za(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var yr, Ma = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (yr = yr || document.createElement("div"), yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = yr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
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
}, nd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function(e) {
  nd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Rn[t] = Rn[e];
  });
});
function Ra(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Rn.hasOwnProperty(e) && Rn[e] ? ("" + t).trim() : t + "px";
}
function Fa(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ra(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var rd = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function go(e, t) {
  if (t) {
    if (rd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function yo(e, t) {
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
var vo = null;
function ai(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var wo = null, ln = null, on = null;
function ss(e) {
  if (e = ur(e)) {
    if (typeof wo != "function") throw Error(C(280));
    var t = e.stateNode;
    t && (t = wl(t), wo(e.stateNode, e.type, t));
  }
}
function Oa(e) {
  ln ? on ? on.push(e) : on = [e] : ln = e;
}
function Da() {
  if (ln) {
    var e = ln, t = on;
    if (on = ln = null, ss(e), t) for (e = 0; e < t.length; e++) ss(t[e]);
  }
}
function Aa(e, t) {
  return e(t);
}
function $a() {
}
var Dl = !1;
function Ua(e, t, n) {
  if (Dl) return e(t, n);
  Dl = !0;
  try {
    return Aa(e, t, n);
  } finally {
    Dl = !1, (ln !== null || on !== null) && ($a(), Da());
  }
}
function Hn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wl(n);
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
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var xo = !1;
if (nt) try {
  var _n = {};
  Object.defineProperty(_n, "passive", { get: function() {
    xo = !0;
  } }), window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n);
} catch {
  xo = !1;
}
function ld(e, t, n, r, l, o, i, a, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (g) {
    this.onError(g);
  }
}
var Fn = !1, Hr = null, Gr = !1, So = null, od = { onError: function(e) {
  Fn = !0, Hr = e;
} };
function id(e, t, n, r, l, o, i, a, u) {
  Fn = !1, Hr = null, ld.apply(od, arguments);
}
function sd(e, t, n, r, l, o, i, a, u) {
  if (id.apply(this, arguments), Fn) {
    if (Fn) {
      var f = Hr;
      Fn = !1, Hr = null;
    } else throw Error(C(198));
    Gr || (Gr = !0, So = f);
  }
}
function Wt(e) {
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
function Va(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function as(e) {
  if (Wt(e) !== e) throw Error(C(188));
}
function ad(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wt(e), t === null) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return as(l), e;
        if (o === r) return as(l), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (a === r) {
          i = !0, r = l, n = o;
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (a === r) {
            i = !0, r = o, n = l;
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Qa(e) {
  return e = ad(e), e !== null ? Wa(e) : null;
}
function Wa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ba = Te.unstable_scheduleCallback, us = Te.unstable_cancelCallback, ud = Te.unstable_shouldYield, cd = Te.unstable_requestPaint, q = Te.unstable_now, dd = Te.unstable_getCurrentPriorityLevel, ui = Te.unstable_ImmediatePriority, Ha = Te.unstable_UserBlockingPriority, Kr = Te.unstable_NormalPriority, fd = Te.unstable_LowPriority, Ga = Te.unstable_IdlePriority, hl = null, Xe = null;
function pd(e) {
  if (Xe && typeof Xe.onCommitFiberRoot == "function") try {
    Xe.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Qe = Math.clz32 ? Math.clz32 : gd, md = Math.log, hd = Math.LN2;
function gd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (md(e) / hd | 0) | 0;
}
var vr = 64, wr = 4194304;
function zn(e) {
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
function Yr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? r = zn(a) : (o &= i, o !== 0 && (r = zn(o)));
  } else i = n & ~l, i !== 0 ? r = zn(i) : o !== 0 && (r = zn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Qe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function yd(e, t) {
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
function vd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Qe(o), a = 1 << i, u = l[i];
    u === -1 ? (!(a & n) || a & r) && (l[i] = yd(a, t)) : u <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function ko(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ka() {
  var e = vr;
  return vr <<= 1, !(vr & 4194240) && (vr = 64), e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qe(t), e[t] = n;
}
function wd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Qe(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function ci(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var U = 0;
function Ya(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Xa, di, Za, ba, Ja, _o = !1, xr = [], ht = null, gt = null, yt = null, Gn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), dt = [], xd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ht = null;
      break;
    case "dragenter":
    case "dragleave":
      gt = null;
      break;
    case "mouseover":
    case "mouseout":
      yt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kn.delete(t.pointerId);
  }
}
function En(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = ur(t), t !== null && di(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Sd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ht = En(ht, e, t, n, r, l), !0;
    case "dragenter":
      return gt = En(gt, e, t, n, r, l), !0;
    case "mouseover":
      return yt = En(yt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Gn.set(o, En(Gn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Kn.set(o, En(Kn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function qa(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Va(n), t !== null) {
          e.blockedOn = t, Ja(e.priority, function() {
            Za(n);
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
function Rr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      vo = r, n.target.dispatchEvent(r), vo = null;
    } else return t = ur(n), t !== null && di(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ds(e, t, n) {
  Rr(e) && n.delete(t);
}
function kd() {
  _o = !1, ht !== null && Rr(ht) && (ht = null), gt !== null && Rr(gt) && (gt = null), yt !== null && Rr(yt) && (yt = null), Gn.forEach(ds), Kn.forEach(ds);
}
function Cn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, _o || (_o = !0, Te.unstable_scheduleCallback(Te.unstable_NormalPriority, kd)));
}
function Yn(e) {
  function t(l) {
    return Cn(l, e);
  }
  if (0 < xr.length) {
    Cn(xr[0], e);
    for (var n = 1; n < xr.length; n++) {
      var r = xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ht !== null && Cn(ht, e), gt !== null && Cn(gt, e), yt !== null && Cn(yt, e), Gn.forEach(t), Kn.forEach(t), n = 0; n < dt.length; n++) r = dt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dt.length && (n = dt[0], n.blockedOn === null); ) qa(n), n.blockedOn === null && dt.shift();
}
var sn = it.ReactCurrentBatchConfig, Xr = !0;
function _d(e, t, n, r) {
  var l = U, o = sn.transition;
  sn.transition = null;
  try {
    U = 1, fi(e, t, n, r);
  } finally {
    U = l, sn.transition = o;
  }
}
function Ed(e, t, n, r) {
  var l = U, o = sn.transition;
  sn.transition = null;
  try {
    U = 4, fi(e, t, n, r);
  } finally {
    U = l, sn.transition = o;
  }
}
function fi(e, t, n, r) {
  if (Xr) {
    var l = Eo(e, t, n, r);
    if (l === null) Yl(e, t, r, Zr, n), cs(e, r);
    else if (Sd(l, e, t, n, r)) r.stopPropagation();
    else if (cs(e, r), t & 4 && -1 < xd.indexOf(e)) {
      for (; l !== null; ) {
        var o = ur(l);
        if (o !== null && Xa(o), o = Eo(e, t, n, r), o === null && Yl(e, t, r, Zr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Yl(e, t, r, null, n);
  }
}
var Zr = null;
function Eo(e, t, n, r) {
  if (Zr = null, e = ai(r), e = zt(e), e !== null) if (t = Wt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Va(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Zr = e, null;
}
function eu(e) {
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
      switch (dd()) {
        case ui:
          return 1;
        case Ha:
          return 4;
        case Kr:
        case fd:
          return 16;
        case Ga:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pt = null, pi = null, Fr = null;
function tu() {
  if (Fr) return Fr;
  var e, t = pi, n = t.length, r, l = "value" in pt ? pt.value : pt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Fr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Or(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Sr() {
  return !0;
}
function fs() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Sr : fs, this.isPropagationStopped = fs, this;
  }
  return Z(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Sr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Sr);
  }, persist: function() {
  }, isPersistent: Sr }), t;
}
var wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, mi = Pe(wn), ar = Z({}, wn, { view: 0, detail: 0 }), Cd = Pe(ar), $l, Ul, Nn, gl = Z({}, ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Nn && (Nn && e.type === "mousemove" ? ($l = e.screenX - Nn.screenX, Ul = e.screenY - Nn.screenY) : Ul = $l = 0, Nn = e), $l);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ul;
} }), ps = Pe(gl), Nd = Z({}, gl, { dataTransfer: 0 }), jd = Pe(Nd), Td = Z({}, ar, { relatedTarget: 0 }), Vl = Pe(Td), Id = Z({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pd = Pe(Id), Ld = Z({}, wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), zd = Pe(Ld), Md = Z({}, wn, { data: 0 }), ms = Pe(Md), Rd = {
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
}, Fd = {
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
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Dd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Od[e]) ? !!t[e] : !1;
}
function hi() {
  return Dd;
}
var Ad = Z({}, ar, { key: function(e) {
  if (e.key) {
    var t = Rd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hi, charCode: function(e) {
  return e.type === "keypress" ? Or(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), $d = Pe(Ad), Ud = Z({}, gl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hs = Pe(Ud), Vd = Z({}, ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hi }), Qd = Pe(Vd), Wd = Z({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bd = Pe(Wd), Hd = Z({}, gl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Gd = Pe(Hd), Kd = [9, 13, 27, 32], gi = nt && "CompositionEvent" in window, On = null;
nt && "documentMode" in document && (On = document.documentMode);
var Yd = nt && "TextEvent" in window && !On, nu = nt && (!gi || On && 8 < On && 11 >= On), gs = " ", ys = !1;
function ru(e, t) {
  switch (e) {
    case "keyup":
      return Kd.indexOf(t.keyCode) !== -1;
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
function lu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function Xd(e, t) {
  switch (e) {
    case "compositionend":
      return lu(t);
    case "keypress":
      return t.which !== 32 ? null : (ys = !0, gs);
    case "textInput":
      return e = t.data, e === gs && ys ? null : e;
    default:
      return null;
  }
}
function Zd(e, t) {
  if (Kt) return e === "compositionend" || !gi && ru(e, t) ? (e = tu(), Fr = pi = pt = null, Kt = !1, e) : null;
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
      return nu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function vs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bd[e.type] : t === "textarea";
}
function ou(e, t, n, r) {
  Oa(r), t = br(t, "onChange"), 0 < t.length && (n = new mi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Dn = null, Xn = null;
function Jd(e) {
  gu(e, 0);
}
function yl(e) {
  var t = Zt(e);
  if (Ia(t)) return e;
}
function qd(e, t) {
  if (e === "change") return t;
}
var iu = !1;
if (nt) {
  var Ql;
  if (nt) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var ws = document.createElement("div");
      ws.setAttribute("oninput", "return;"), Wl = typeof ws.oninput == "function";
    }
    Ql = Wl;
  } else Ql = !1;
  iu = Ql && (!document.documentMode || 9 < document.documentMode);
}
function xs() {
  Dn && (Dn.detachEvent("onpropertychange", su), Xn = Dn = null);
}
function su(e) {
  if (e.propertyName === "value" && yl(Xn)) {
    var t = [];
    ou(t, Xn, e, ai(e)), Ua(Jd, t);
  }
}
function ef(e, t, n) {
  e === "focusin" ? (xs(), Dn = t, Xn = n, Dn.attachEvent("onpropertychange", su)) : e === "focusout" && xs();
}
function tf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return yl(Xn);
}
function nf(e, t) {
  if (e === "click") return yl(t);
}
function rf(e, t) {
  if (e === "input" || e === "change") return yl(t);
}
function lf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Be = typeof Object.is == "function" ? Object.is : lf;
function Zn(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!oo.call(t, l) || !Be(e[l], t[l])) return !1;
  }
  return !0;
}
function Ss(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ks(e, t) {
  var n = Ss(e);
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
    n = Ss(n);
  }
}
function au(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? au(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function uu() {
  for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Br(e.document);
  }
  return t;
}
function yi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function of(e) {
  var t = uu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && au(n.ownerDocument.documentElement, n)) {
    if (r !== null && yi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = ks(n, o);
        var i = ks(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var sf = nt && "documentMode" in document && 11 >= document.documentMode, Yt = null, Co = null, An = null, No = !1;
function _s(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  No || Yt == null || Yt !== Br(r) || (r = Yt, "selectionStart" in r && yi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), An && Zn(An, r) || (An = r, r = br(Co, "onSelect"), 0 < r.length && (t = new mi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yt)));
}
function kr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xt = { animationend: kr("Animation", "AnimationEnd"), animationiteration: kr("Animation", "AnimationIteration"), animationstart: kr("Animation", "AnimationStart"), transitionend: kr("Transition", "TransitionEnd") }, Bl = {}, cu = {};
nt && (cu = document.createElement("div").style, "AnimationEvent" in window || (delete Xt.animationend.animation, delete Xt.animationiteration.animation, delete Xt.animationstart.animation), "TransitionEvent" in window || delete Xt.transitionend.transition);
function vl(e) {
  if (Bl[e]) return Bl[e];
  if (!Xt[e]) return e;
  var t = Xt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in cu) return Bl[e] = t[n];
  return e;
}
var du = vl("animationend"), fu = vl("animationiteration"), pu = vl("animationstart"), mu = vl("transitionend"), hu = /* @__PURE__ */ new Map(), Es = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ct(e, t) {
  hu.set(e, t), Qt(t, [e]);
}
for (var Hl = 0; Hl < Es.length; Hl++) {
  var Gl = Es[Hl], af = Gl.toLowerCase(), uf = Gl[0].toUpperCase() + Gl.slice(1);
  Ct(af, "on" + uf);
}
Ct(du, "onAnimationEnd");
Ct(fu, "onAnimationIteration");
Ct(pu, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(mu, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Qt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Qt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Qt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Qt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), cf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function Cs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, sd(r, t, void 0, e), e.currentTarget = null;
}
function gu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], u = a.instance, f = a.currentTarget;
        if (a = a.listener, u !== o && l.isPropagationStopped()) break e;
        Cs(l, a, f), o = u;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], u = a.instance, f = a.currentTarget, a = a.listener, u !== o && l.isPropagationStopped()) break e;
        Cs(l, a, f), o = u;
      }
    }
  }
  if (Gr) throw e = So, Gr = !1, So = null, e;
}
function B(e, t) {
  var n = t[Lo];
  n === void 0 && (n = t[Lo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (yu(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
  var r = 0;
  t && (r |= 4), yu(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function bn(e) {
  if (!e[_r]) {
    e[_r] = !0, Ea.forEach(function(n) {
      n !== "selectionchange" && (cf.has(n) || Kl(n, !1, e), Kl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || (t[_r] = !0, Kl("selectionchange", !1, t));
  }
}
function yu(e, t, n, r) {
  switch (eu(t)) {
    case 1:
      var l = _d;
      break;
    case 4:
      l = Ed;
      break;
    default:
      l = fi;
  }
  n = l.bind(null, t, n, e), l = void 0, !xo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Yl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var a = r.stateNode.containerInfo;
      if (a === l || a.nodeType === 8 && a.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var u = i.tag;
        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        i = i.return;
      }
      for (; a !== null; ) {
        if (i = zt(a), i === null) return;
        if (u = i.tag, u === 5 || u === 6) {
          r = o = i;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Ua(function() {
    var f = o, g = ai(n), h = [];
    e: {
      var m = hu.get(e);
      if (m !== void 0) {
        var x = mi, _ = e;
        switch (e) {
          case "keypress":
            if (Or(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = $d;
            break;
          case "focusin":
            _ = "focus", x = Vl;
            break;
          case "focusout":
            _ = "blur", x = Vl;
            break;
          case "beforeblur":
          case "afterblur":
            x = Vl;
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
            x = ps;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = jd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Qd;
            break;
          case du:
          case fu:
          case pu:
            x = Pd;
            break;
          case mu:
            x = Bd;
            break;
          case "scroll":
            x = Cd;
            break;
          case "wheel":
            x = Gd;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = zd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = hs;
        }
        var S = (t & 4) !== 0, j = !S && e === "scroll", d = S ? m !== null ? m + "Capture" : null : m;
        S = [];
        for (var c = f, p; c !== null; ) {
          p = c;
          var v = p.stateNode;
          if (p.tag === 5 && v !== null && (p = v, d !== null && (v = Hn(c, d), v != null && S.push(Jn(c, v, p)))), j) break;
          c = c.return;
        }
        0 < S.length && (m = new x(m, _, null, n, g), h.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", m && n !== vo && (_ = n.relatedTarget || n.fromElement) && (zt(_) || _[rt])) break e;
        if ((x || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window, x ? (_ = n.relatedTarget || n.toElement, x = f, _ = _ ? zt(_) : null, _ !== null && (j = Wt(_), _ !== j || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (x = null, _ = f), x !== _)) {
          if (S = ps, v = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (S = hs, v = "onPointerLeave", d = "onPointerEnter", c = "pointer"), j = x == null ? m : Zt(x), p = _ == null ? m : Zt(_), m = new S(v, c + "leave", x, n, g), m.target = j, m.relatedTarget = p, v = null, zt(g) === f && (S = new S(d, c + "enter", _, n, g), S.target = p, S.relatedTarget = j, v = S), j = v, x && _) t: {
            for (S = x, d = _, c = 0, p = S; p; p = Bt(p)) c++;
            for (p = 0, v = d; v; v = Bt(v)) p++;
            for (; 0 < c - p; ) S = Bt(S), c--;
            for (; 0 < p - c; ) d = Bt(d), p--;
            for (; c--; ) {
              if (S === d || d !== null && S === d.alternate) break t;
              S = Bt(S), d = Bt(d);
            }
            S = null;
          }
          else S = null;
          x !== null && Ns(h, m, x, S, !1), _ !== null && j !== null && Ns(h, j, _, S, !0);
        }
      }
      e: {
        if (m = f ? Zt(f) : window, x = m.nodeName && m.nodeName.toLowerCase(), x === "select" || x === "input" && m.type === "file") var N = qd;
        else if (vs(m)) if (iu) N = rf;
        else {
          N = tf;
          var w = ef;
        }
        else (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = nf);
        if (N && (N = N(e, f))) {
          ou(h, N, n, g);
          break e;
        }
        w && w(e, m, f), e === "focusout" && (w = m._wrapperState) && w.controlled && m.type === "number" && po(m, "number", m.value);
      }
      switch (w = f ? Zt(f) : window, e) {
        case "focusin":
          (vs(w) || w.contentEditable === "true") && (Yt = w, Co = f, An = null);
          break;
        case "focusout":
          An = Co = Yt = null;
          break;
        case "mousedown":
          No = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          No = !1, _s(h, n, g);
          break;
        case "selectionchange":
          if (sf) break;
        case "keydown":
        case "keyup":
          _s(h, n, g);
      }
      var T;
      if (gi) e: {
        switch (e) {
          case "compositionstart":
            var y = "onCompositionStart";
            break e;
          case "compositionend":
            y = "onCompositionEnd";
            break e;
          case "compositionupdate":
            y = "onCompositionUpdate";
            break e;
        }
        y = void 0;
      }
      else Kt ? ru(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
      y && (nu && n.locale !== "ko" && (Kt || y !== "onCompositionStart" ? y === "onCompositionEnd" && Kt && (T = tu()) : (pt = g, pi = "value" in pt ? pt.value : pt.textContent, Kt = !0)), w = br(f, y), 0 < w.length && (y = new ms(y, e, null, n, g), h.push({ event: y, listeners: w }), T ? y.data = T : (T = lu(n), T !== null && (y.data = T)))), (T = Yd ? Xd(e, n) : Zd(e, n)) && (f = br(f, "onBeforeInput"), 0 < f.length && (g = new ms("onBeforeInput", "beforeinput", null, n, g), h.push({ event: g, listeners: f }), g.data = T));
    }
    gu(h, t);
  });
}
function Jn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Hn(e, n), o != null && r.unshift(Jn(e, o, l)), o = Hn(e, t), o != null && r.push(Jn(e, o, l))), e = e.return;
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ns(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, u = a.alternate, f = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 && f !== null && (a = f, l ? (u = Hn(n, o), u != null && i.unshift(Jn(n, u, a))) : l || (u = Hn(n, o), u != null && i.push(Jn(n, u, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var df = /\r\n?/g, ff = /\u0000|\uFFFD/g;
function js(e) {
  return (typeof e == "string" ? e : "" + e).replace(df, `
`).replace(ff, "");
}
function Er(e, t, n) {
  if (t = js(t), js(e) !== t && n) throw Error(C(425));
}
function Jr() {
}
var jo = null, To = null;
function Io(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Po = typeof setTimeout == "function" ? setTimeout : void 0, pf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ts = typeof Promise == "function" ? Promise : void 0, mf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ts < "u" ? function(e) {
  return Ts.resolve(null).then(e).catch(hf);
} : Po;
function hf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Xl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Yn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Yn(t);
}
function vt(e) {
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
function Is(e) {
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
var xn = Math.random().toString(36).slice(2), Ye = "__reactFiber$" + xn, qn = "__reactProps$" + xn, rt = "__reactContainer$" + xn, Lo = "__reactEvents$" + xn, gf = "__reactListeners$" + xn, yf = "__reactHandles$" + xn;
function zt(e) {
  var t = e[Ye];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[rt] || n[Ye]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Is(e); e !== null; ) {
        if (n = e[Ye]) return n;
        e = Is(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ur(e) {
  return e = e[Ye] || e[rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function wl(e) {
  return e[qn] || null;
}
var zo = [], bt = -1;
function Nt(e) {
  return { current: e };
}
function H(e) {
  0 > bt || (e.current = zo[bt], zo[bt] = null, bt--);
}
function W(e, t) {
  bt++, zo[bt] = e.current, e.current = t;
}
var Et = {}, me = Nt(Et), ke = Nt(!1), Dt = Et;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Et;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function _e(e) {
  return e = e.childContextTypes, e != null;
}
function qr() {
  H(ke), H(me);
}
function Ps(e, t, n) {
  if (me.current !== Et) throw Error(C(168));
  W(me, t), W(ke, n);
}
function vu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, ed(e) || "Unknown", l));
  return Z({}, n, r);
}
function el(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Et, Dt = me.current, W(me, e), W(ke, ke.current), !0;
}
function Ls(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n ? (e = vu(e, t, Dt), r.__reactInternalMemoizedMergedChildContext = e, H(ke), H(me), W(me, e)) : H(ke), W(ke, n);
}
var Je = null, xl = !1, Zl = !1;
function wu(e) {
  Je === null ? Je = [e] : Je.push(e);
}
function vf(e) {
  xl = !0, wu(e);
}
function jt() {
  if (!Zl && Je !== null) {
    Zl = !0;
    var e = 0, t = U;
    try {
      var n = Je;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Je = null, xl = !1;
    } catch (l) {
      throw Je !== null && (Je = Je.slice(e + 1)), Ba(ui, jt), l;
    } finally {
      U = t, Zl = !1;
    }
  }
  return null;
}
var Jt = [], qt = 0, tl = null, nl = 0, Le = [], ze = 0, At = null, qe = 1, et = "";
function Pt(e, t) {
  Jt[qt++] = nl, Jt[qt++] = tl, tl = e, nl = t;
}
function xu(e, t, n) {
  Le[ze++] = qe, Le[ze++] = et, Le[ze++] = At, At = e;
  var r = qe;
  e = et;
  var l = 32 - Qe(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Qe(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, qe = 1 << 32 - Qe(t) + l | n << l | r, et = o + e;
  } else qe = 1 << o | n << l | r, et = e;
}
function vi(e) {
  e.return !== null && (Pt(e, 1), xu(e, 1, 0));
}
function wi(e) {
  for (; e === tl; ) tl = Jt[--qt], Jt[qt] = null, nl = Jt[--qt], Jt[qt] = null;
  for (; e === At; ) At = Le[--ze], Le[ze] = null, et = Le[--ze], Le[ze] = null, qe = Le[--ze], Le[ze] = null;
}
var je = null, Ne = null, G = !1, Ve = null;
function Su(e, t) {
  var n = Me(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function zs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = vt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = At !== null ? { id: qe, overflow: et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Me(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, je = e, Ne = null, !0) : !1;
    default:
      return !1;
  }
}
function Mo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ro(e) {
  if (G) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!zs(e, t)) {
        if (Mo(e)) throw Error(C(418));
        t = vt(n.nextSibling);
        var r = je;
        t && zs(e, t) ? Su(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, je = e);
      }
    } else {
      if (Mo(e)) throw Error(C(418));
      e.flags = e.flags & -4097 | 2, G = !1, je = e;
    }
  }
}
function Ms(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  je = e;
}
function Cr(e) {
  if (e !== je) return !1;
  if (!G) return Ms(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Io(e.type, e.memoizedProps)), t && (t = Ne)) {
    if (Mo(e)) throw ku(), Error(C(418));
    for (; t; ) Su(e, t), t = vt(t.nextSibling);
  }
  if (Ms(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = vt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = je ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function ku() {
  for (var e = Ne; e; ) e = vt(e.nextSibling);
}
function fn() {
  Ne = je = null, G = !1;
}
function xi(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
var wf = it.ReactCurrentBatchConfig;
function jn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var a = l.refs;
        i === null ? delete a[o] : a[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Nr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Rs(e) {
  var t = e._init;
  return t(e._payload);
}
function _u(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [c], d.flags |= 16) : p.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function l(d, c) {
    return d = kt(d, c), d.index = 0, d.sibling = null, d;
  }
  function o(d, c, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < c ? (d.flags |= 2, c) : p) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, c, p, v) {
    return c === null || c.tag !== 6 ? (c = ro(p, d.mode, v), c.return = d, c) : (c = l(c, p), c.return = d, c);
  }
  function u(d, c, p, v) {
    var N = p.type;
    return N === Gt ? g(d, c, p.props.children, v, p.key) : c !== null && (c.elementType === N || typeof N == "object" && N !== null && N.$$typeof === ut && Rs(N) === c.type) ? (v = l(c, p.props), v.ref = jn(d, c, p), v.return = d, v) : (v = Wr(p.type, p.key, p.props, null, d.mode, v), v.ref = jn(d, c, p), v.return = d, v);
  }
  function f(d, c, p, v) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = lo(p, d.mode, v), c.return = d, c) : (c = l(c, p.children || []), c.return = d, c);
  }
  function g(d, c, p, v, N) {
    return c === null || c.tag !== 7 ? (c = Ot(p, d.mode, v, N), c.return = d, c) : (c = l(c, p), c.return = d, c);
  }
  function h(d, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = ro("" + c, d.mode, p), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case hr:
          return p = Wr(c.type, c.key, c.props, null, d.mode, p), p.ref = jn(d, null, c), p.return = d, p;
        case Ht:
          return c = lo(c, d.mode, p), c.return = d, c;
        case ut:
          var v = c._init;
          return h(d, v(c._payload), p);
      }
      if (Ln(c) || kn(c)) return c = Ot(c, d.mode, p, null), c.return = d, c;
      Nr(d, c);
    }
    return null;
  }
  function m(d, c, p, v) {
    var N = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : a(d, c, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hr:
          return p.key === N ? u(d, c, p, v) : null;
        case Ht:
          return p.key === N ? f(d, c, p, v) : null;
        case ut:
          return N = p._init, m(
            d,
            c,
            N(p._payload),
            v
          );
      }
      if (Ln(p) || kn(p)) return N !== null ? null : g(d, c, p, v, null);
      Nr(d, p);
    }
    return null;
  }
  function x(d, c, p, v, N) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return d = d.get(p) || null, a(c, d, "" + v, N);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case hr:
          return d = d.get(v.key === null ? p : v.key) || null, u(c, d, v, N);
        case Ht:
          return d = d.get(v.key === null ? p : v.key) || null, f(c, d, v, N);
        case ut:
          var w = v._init;
          return x(d, c, p, w(v._payload), N);
      }
      if (Ln(v) || kn(v)) return d = d.get(p) || null, g(c, d, v, N, null);
      Nr(c, v);
    }
    return null;
  }
  function _(d, c, p, v) {
    for (var N = null, w = null, T = c, y = c = 0, F = null; T !== null && y < p.length; y++) {
      T.index > y ? (F = T, T = null) : F = T.sibling;
      var M = m(d, T, p[y], v);
      if (M === null) {
        T === null && (T = F);
        break;
      }
      e && T && M.alternate === null && t(d, T), c = o(M, c, y), w === null ? N = M : w.sibling = M, w = M, T = F;
    }
    if (y === p.length) return n(d, T), G && Pt(d, y), N;
    if (T === null) {
      for (; y < p.length; y++) T = h(d, p[y], v), T !== null && (c = o(T, c, y), w === null ? N = T : w.sibling = T, w = T);
      return G && Pt(d, y), N;
    }
    for (T = r(d, T); y < p.length; y++) F = x(T, d, y, p[y], v), F !== null && (e && F.alternate !== null && T.delete(F.key === null ? y : F.key), c = o(F, c, y), w === null ? N = F : w.sibling = F, w = F);
    return e && T.forEach(function(Q) {
      return t(d, Q);
    }), G && Pt(d, y), N;
  }
  function S(d, c, p, v) {
    var N = kn(p);
    if (typeof N != "function") throw Error(C(150));
    if (p = N.call(p), p == null) throw Error(C(151));
    for (var w = N = null, T = c, y = c = 0, F = null, M = p.next(); T !== null && !M.done; y++, M = p.next()) {
      T.index > y ? (F = T, T = null) : F = T.sibling;
      var Q = m(d, T, M.value, v);
      if (Q === null) {
        T === null && (T = F);
        break;
      }
      e && T && Q.alternate === null && t(d, T), c = o(Q, c, y), w === null ? N = Q : w.sibling = Q, w = Q, T = F;
    }
    if (M.done) return n(
      d,
      T
    ), G && Pt(d, y), N;
    if (T === null) {
      for (; !M.done; y++, M = p.next()) M = h(d, M.value, v), M !== null && (c = o(M, c, y), w === null ? N = M : w.sibling = M, w = M);
      return G && Pt(d, y), N;
    }
    for (T = r(d, T); !M.done; y++, M = p.next()) M = x(T, d, y, M.value, v), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? y : M.key), c = o(M, c, y), w === null ? N = M : w.sibling = M, w = M);
    return e && T.forEach(function(I) {
      return t(d, I);
    }), G && Pt(d, y), N;
  }
  function j(d, c, p, v) {
    if (typeof p == "object" && p !== null && p.type === Gt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hr:
          e: {
            for (var N = p.key, w = c; w !== null; ) {
              if (w.key === N) {
                if (N = p.type, N === Gt) {
                  if (w.tag === 7) {
                    n(d, w.sibling), c = l(w, p.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (w.elementType === N || typeof N == "object" && N !== null && N.$$typeof === ut && Rs(N) === w.type) {
                  n(d, w.sibling), c = l(w, p.props), c.ref = jn(d, w, p), c.return = d, d = c;
                  break e;
                }
                n(d, w);
                break;
              } else t(d, w);
              w = w.sibling;
            }
            p.type === Gt ? (c = Ot(p.props.children, d.mode, v, p.key), c.return = d, d = c) : (v = Wr(p.type, p.key, p.props, null, d.mode, v), v.ref = jn(d, c, p), v.return = d, d = v);
          }
          return i(d);
        case Ht:
          e: {
            for (w = p.key; c !== null; ) {
              if (c.key === w) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(d, c.sibling), c = l(c, p.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = lo(p, d.mode, v), c.return = d, d = c;
          }
          return i(d);
        case ut:
          return w = p._init, j(d, c, w(p._payload), v);
      }
      if (Ln(p)) return _(d, c, p, v);
      if (kn(p)) return S(d, c, p, v);
      Nr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, p), c.return = d, d = c) : (n(d, c), c = ro(p, d.mode, v), c.return = d, d = c), i(d)) : n(d, c);
  }
  return j;
}
var pn = _u(!0), Eu = _u(!1), rl = Nt(null), ll = null, en = null, Si = null;
function ki() {
  Si = en = ll = null;
}
function _i(e) {
  var t = rl.current;
  H(rl), e._currentValue = t;
}
function Fo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function an(e, t) {
  ll = e, Si = en = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Fe(e) {
  var t = e._currentValue;
  if (Si !== e) if (e = { context: e, memoizedValue: t, next: null }, en === null) {
    if (ll === null) throw Error(C(308));
    en = e, ll.dependencies = { lanes: 0, firstContext: e };
  } else en = en.next = e;
  return t;
}
var Mt = null;
function Ei(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function Cu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ei(t)) : (n.next = l.next, l.next = n), t.interleaved = n, lt(e, r);
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ct = !1;
function Ci(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Nu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, A & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, lt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ei(r)) : (t.next = l.next, l.next = t), r.interleaved = t, lt(e, n);
}
function Dr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ci(e, n);
  }
}
function Fs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ol(e, t, n, r) {
  var l = e.updateQueue;
  ct = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a, f = u.next;
    u.next = null, i === null ? o = f : i.next = f, i = u;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, a = g.lastBaseUpdate, a !== i && (a === null ? g.firstBaseUpdate = f : a.next = f, g.lastBaseUpdate = u));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, g = f = u = null, a = o;
    do {
      var m = a.lane, x = a.eventTime;
      if ((r & m) === m) {
        g !== null && (g = g.next = {
          eventTime: x,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var _ = e, S = a;
          switch (m = t, x = n, S.tag) {
            case 1:
              if (_ = S.payload, typeof _ == "function") {
                h = _.call(x, h, m);
                break e;
              }
              h = _;
              break e;
            case 3:
              _.flags = _.flags & -65537 | 128;
            case 0:
              if (_ = S.payload, m = typeof _ == "function" ? _.call(x, h, m) : _, m == null) break e;
              h = Z({}, h, m);
              break e;
            case 2:
              ct = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [a] : m.push(a));
      } else x = { eventTime: x, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, g === null ? (f = g = x, u = h) : g = g.next = x, i |= m;
      if (a = a.next, a === null) {
        if (a = l.shared.pending, a === null) break;
        m = a, a = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (u = h), l.baseState = u, l.firstBaseUpdate = f, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Ut |= i, e.lanes = i, e.memoizedState = h;
  }
}
function Os(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(C(191, l));
      l.call(r);
    }
  }
}
var cr = {}, Ze = Nt(cr), er = Nt(cr), tr = Nt(cr);
function Rt(e) {
  if (e === cr) throw Error(C(174));
  return e;
}
function Ni(e, t) {
  switch (W(tr, t), W(er, e), W(Ze, cr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ho(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ho(t, e);
  }
  H(Ze), W(Ze, t);
}
function mn() {
  H(Ze), H(er), H(tr);
}
function ju(e) {
  Rt(tr.current);
  var t = Rt(Ze.current), n = ho(t, e.type);
  t !== n && (W(er, e), W(Ze, n));
}
function ji(e) {
  er.current === e && (H(Ze), H(er));
}
var Y = Nt(0);
function il(e) {
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
var bl = [];
function Ti() {
  for (var e = 0; e < bl.length; e++) bl[e]._workInProgressVersionPrimary = null;
  bl.length = 0;
}
var Ar = it.ReactCurrentDispatcher, Jl = it.ReactCurrentBatchConfig, $t = 0, X = null, re = null, ie = null, sl = !1, $n = !1, nr = 0, xf = 0;
function de() {
  throw Error(C(321));
}
function Ii(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Pi(e, t, n, r, l, o) {
  if ($t = o, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ar.current = e === null || e.memoizedState === null ? Ef : Cf, e = n(r, l), $n) {
    o = 0;
    do {
      if ($n = !1, nr = 0, 25 <= o) throw Error(C(301));
      o += 1, ie = re = null, t.updateQueue = null, Ar.current = Nf, e = n(r, l);
    } while ($n);
  }
  if (Ar.current = al, t = re !== null && re.next !== null, $t = 0, ie = re = X = null, sl = !1, t) throw Error(C(300));
  return e;
}
function Li() {
  var e = nr !== 0;
  return nr = 0, e;
}
function Ke() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? X.memoizedState = ie = e : ie = ie.next = e, ie;
}
function Oe() {
  if (re === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = ie === null ? X.memoizedState : ie.next;
  if (t !== null) ie = t, re = e;
  else {
    if (e === null) throw Error(C(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, ie === null ? X.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ql(e) {
  var t = Oe(), n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = re, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var a = i = null, u = null, f = o;
    do {
      var g = f.lane;
      if (($t & g) === g) u !== null && (u = u.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var h = {
          lane: g,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        u === null ? (a = u = h, i = r) : u = u.next = h, X.lanes |= g, Ut |= g;
      }
      f = f.next;
    } while (f !== null && f !== o);
    u === null ? i = r : u.next = a, Be(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, X.lanes |= o, Ut |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function eo(e) {
  var t = Oe(), n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Be(o, t.memoizedState) || (Se = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Tu() {
}
function Iu(e, t) {
  var n = X, r = Oe(), l = t(), o = !Be(r.memoizedState, l);
  if (o && (r.memoizedState = l, Se = !0), r = r.queue, zi(zu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, lr(9, Lu.bind(null, n, r, l, t), void 0, null), se === null) throw Error(C(349));
    $t & 30 || Pu(n, t, l);
  }
  return l;
}
function Pu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Lu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Mu(t) && Ru(e);
}
function zu(e, t, n) {
  return n(function() {
    Mu(t) && Ru(e);
  });
}
function Mu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Ru(e) {
  var t = lt(e, 1);
  t !== null && We(t, e, 1, -1);
}
function Ds(e) {
  var t = Ke();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: rr, lastRenderedState: e }, t.queue = e, e = e.dispatch = _f.bind(null, X, e), [t.memoizedState, e];
}
function lr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Fu() {
  return Oe().memoizedState;
}
function $r(e, t, n, r) {
  var l = Ke();
  X.flags |= e, l.memoizedState = lr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Sl(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var i = re.memoizedState;
    if (o = i.destroy, r !== null && Ii(r, i.deps)) {
      l.memoizedState = lr(t, n, o, r);
      return;
    }
  }
  X.flags |= e, l.memoizedState = lr(1 | t, n, o, r);
}
function As(e, t) {
  return $r(8390656, 8, e, t);
}
function zi(e, t) {
  return Sl(2048, 8, e, t);
}
function Ou(e, t) {
  return Sl(4, 2, e, t);
}
function Du(e, t) {
  return Sl(4, 4, e, t);
}
function Au(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function $u(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Sl(4, 4, Au.bind(null, t, e), n);
}
function Mi() {
}
function Uu(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ii(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Vu(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ii(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Qu(e, t, n) {
  return $t & 21 ? (Be(n, t) || (n = Ka(), X.lanes |= n, Ut |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function Sf(e, t) {
  var n = U;
  U = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Jl.transition;
  Jl.transition = {};
  try {
    e(!1), t();
  } finally {
    U = n, Jl.transition = r;
  }
}
function Wu() {
  return Oe().memoizedState;
}
function kf(e, t, n) {
  var r = St(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Bu(e)) Hu(t, n);
  else if (n = Cu(e, t, n, r), n !== null) {
    var l = ye();
    We(n, e, r, l), Gu(n, t, r);
  }
}
function _f(e, t, n) {
  var r = St(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bu(e)) Hu(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, a = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = a, Be(a, i)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Ei(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Cu(e, t, l, r), n !== null && (l = ye(), We(n, e, r, l), Gu(n, t, r));
  }
}
function Bu(e) {
  var t = e.alternate;
  return e === X || t !== null && t === X;
}
function Hu(e, t) {
  $n = sl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Gu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ci(e, n);
  }
}
var al = { readContext: Fe, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, Ef = { readContext: Fe, useCallback: function(e, t) {
  return Ke().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fe, useEffect: As, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, $r(
    4194308,
    4,
    Au.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return $r(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return $r(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ke();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ke();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = kf.bind(null, X, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ke();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ds, useDebugValue: Mi, useDeferredValue: function(e) {
  return Ke().memoizedState = e;
}, useTransition: function() {
  var e = Ds(!1), t = e[0];
  return e = Sf.bind(null, e[1]), Ke().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = X, l = Ke();
  if (G) {
    if (n === void 0) throw Error(C(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(C(349));
    $t & 30 || Pu(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, As(zu.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, lr(9, Lu.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ke(), t = se.identifierPrefix;
  if (G) {
    var n = et, r = qe;
    n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = nr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = xf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Cf = {
  readContext: Fe,
  useCallback: Uu,
  useContext: Fe,
  useEffect: zi,
  useImperativeHandle: $u,
  useInsertionEffect: Ou,
  useLayoutEffect: Du,
  useMemo: Vu,
  useReducer: ql,
  useRef: Fu,
  useState: function() {
    return ql(rr);
  },
  useDebugValue: Mi,
  useDeferredValue: function(e) {
    var t = Oe();
    return Qu(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = ql(rr)[0], t = Oe().memoizedState;
    return [e, t];
  },
  useMutableSource: Tu,
  useSyncExternalStore: Iu,
  useId: Wu,
  unstable_isNewReconciler: !1
}, Nf = { readContext: Fe, useCallback: Uu, useContext: Fe, useEffect: zi, useImperativeHandle: $u, useInsertionEffect: Ou, useLayoutEffect: Du, useMemo: Vu, useReducer: eo, useRef: Fu, useState: function() {
  return eo(rr);
}, useDebugValue: Mi, useDeferredValue: function(e) {
  var t = Oe();
  return re === null ? t.memoizedState = e : Qu(t, re.memoizedState, e);
}, useTransition: function() {
  var e = eo(rr)[0], t = Oe().memoizedState;
  return [e, t];
}, useMutableSource: Tu, useSyncExternalStore: Iu, useId: Wu, unstable_isNewReconciler: !1 };
function $e(e, t) {
  if (e && e.defaultProps) {
    t = Z({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Oo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = St(e), o = tt(r, l);
  o.payload = t, n != null && (o.callback = n), t = wt(e, o, l), t !== null && (We(t, e, l, r), Dr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = St(e), o = tt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = wt(e, o, l), t !== null && (We(t, e, l, r), Dr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = St(e), l = tt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = wt(e, l, r), t !== null && (We(t, e, r, n), Dr(t, e, r));
} };
function $s(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Zn(n, r) || !Zn(l, o) : !0;
}
function Ku(e, t, n) {
  var r = !1, l = Et, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Fe(o) : (l = _e(t) ? Dt : me.current, r = t.contextTypes, o = (r = r != null) ? dn(e, l) : Et), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = kl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Us(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function Do(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ci(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Fe(o) : (o = _e(t) ? Dt : me.current, l.context = dn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Oo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && kl.enqueueReplaceState(l, l.state, null), ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += qc(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function to(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var jf = typeof WeakMap == "function" ? WeakMap : Map;
function Yu(e, t, n) {
  n = tt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    cl || (cl = !0, Yo = r), Ao(e, t);
  }, n;
}
function Xu(e, t, n) {
  n = tt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ao(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ao(e, t), typeof r != "function" && (xt === null ? xt = /* @__PURE__ */ new Set([this]) : xt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Vs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Vf.bind(null, e, t, n), t.then(e, e));
}
function Qs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ws(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = tt(-1, 1), t.tag = 2, wt(n, t, 1))), n.lanes |= 1), e);
}
var Tf = it.ReactCurrentOwner, Se = !1;
function he(e, t, n, r) {
  t.child = e === null ? Eu(t, null, n, r) : pn(t, e.child, n, r);
}
function Bs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return an(t, l), r = Pi(e, t, n, r, o, l), n = Li(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (G && n && vi(t), t.flags |= 1, he(e, t, r, l), t.child);
}
function Hs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Vi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Zu(e, t, o, r, l)) : (e = Wr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Zn, n(i, r) && e.ref === t.ref) return ot(e, t, l);
  }
  return t.flags |= 1, e = kt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Zu(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Zn(o, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, ot(e, t, l);
  }
  return $o(e, t, n, r, l);
}
function bu(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(nn, Ce), Ce |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, W(nn, Ce), Ce |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, W(nn, Ce), Ce |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, W(nn, Ce), Ce |= r;
  return he(e, t, l, n), t.child;
}
function Ju(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function $o(e, t, n, r, l) {
  var o = _e(n) ? Dt : me.current;
  return o = dn(t, o), an(t, l), n = Pi(e, t, n, r, o, l), r = Li(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (G && r && vi(t), t.flags |= 1, he(e, t, n, l), t.child);
}
function Gs(e, t, n, r, l) {
  if (_e(n)) {
    var o = !0;
    el(t);
  } else o = !1;
  if (an(t, l), t.stateNode === null) Ur(e, t), Ku(t, n, r), Do(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var u = i.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Fe(f) : (f = _e(n) ? Dt : me.current, f = dn(t, f));
    var g = n.getDerivedStateFromProps, h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || u !== f) && Us(t, i, r, f), ct = !1;
    var m = t.memoizedState;
    i.state = m, ol(t, r, i, l), u = t.memoizedState, a !== r || m !== u || ke.current || ct ? (typeof g == "function" && (Oo(t, n, g, r), u = t.memoizedState), (a = ct || $s(t, n, a, r, m, u, f)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = f, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Nu(e, t), a = t.memoizedProps, f = t.type === t.elementType ? a : $e(t.type, a), i.props = f, h = t.pendingProps, m = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Fe(u) : (u = _e(n) ? Dt : me.current, u = dn(t, u));
    var x = n.getDerivedStateFromProps;
    (g = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== h || m !== u) && Us(t, i, r, u), ct = !1, m = t.memoizedState, i.state = m, ol(t, r, i, l);
    var _ = t.memoizedState;
    a !== h || m !== _ || ke.current || ct ? (typeof x == "function" && (Oo(t, n, x, r), _ = t.memoizedState), (f = ct || $s(t, n, f, r, m, _, u) || !1) ? (g || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, _, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, _, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = _), i.props = r, i.state = _, i.context = u, r = f) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Uo(e, t, n, r, o, l);
}
function Uo(e, t, n, r, l, o) {
  Ju(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ls(t, n, !1), ot(e, t, o);
  r = t.stateNode, Tf.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = pn(t, e.child, null, o), t.child = pn(t, null, a, o)) : he(e, t, a, o), t.memoizedState = r.state, l && Ls(t, n, !0), t.child;
}
function qu(e) {
  var t = e.stateNode;
  t.pendingContext ? Ps(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ps(e, t.context, !1), Ni(e, t.containerInfo);
}
function Ks(e, t, n, r, l) {
  return fn(), xi(l), t.flags |= 256, he(e, t, n, r), t.child;
}
var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ec(e, t, n) {
  var r = t.pendingProps, l = Y.current, o = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), W(Y, l & 1), e === null)
    return Ro(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Cl(i, r, 0, null), e = Ot(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Qo(n), t.memoizedState = Vo, e) : Ri(t, i));
  if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return If(e, t, i, r, a, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, a = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = kt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? o = kt(a, o) : (o = Ot(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Qo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Vo, r;
  }
  return o = e.child, e = o.sibling, r = kt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ri(e, t) {
  return t = Cl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function jr(e, t, n, r) {
  return r !== null && xi(r), pn(t, e.child, null, n), e = Ri(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function If(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = to(Error(C(422))), jr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Cl({ mode: "visible", children: r.children }, l, 0, null), o = Ot(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && pn(t, e.child, null, i), t.child.memoizedState = Qo(i), t.memoizedState = Vo, o);
  if (!(t.mode & 1)) return jr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(C(419)), r = to(o, r, void 0), jr(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, Se || a) {
    if (r = se, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, lt(e, l), We(r, e, l, -1));
    }
    return Ui(), r = to(Error(C(421))), jr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ne = vt(l.nextSibling), je = t, G = !0, Ve = null, e !== null && (Le[ze++] = qe, Le[ze++] = et, Le[ze++] = At, qe = e.id, et = e.overflow, At = t), t = Ri(t, r.children), t.flags |= 4096, t);
}
function Ys(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fo(e.return, t, n);
}
function no(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function tc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (he(e, t, r.children, n), r = Y.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ys(e, n, t);
      else if (e.tag === 19) Ys(e, n, t);
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
  if (W(Y, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && il(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), no(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && il(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      no(t, !0, n, null, o);
      break;
    case "together":
      no(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ur(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ot(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ut |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = kt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Pf(e, t, n) {
  switch (t.tag) {
    case 3:
      qu(t), fn();
      break;
    case 5:
      ju(t);
      break;
    case 1:
      _e(t.type) && el(t);
      break;
    case 4:
      Ni(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      W(rl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (W(Y, Y.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ec(e, t, n) : (W(Y, Y.current & 1), e = ot(e, t, n), e !== null ? e.sibling : null);
      W(Y, Y.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return tc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), W(Y, Y.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, bu(e, t, n);
  }
  return ot(e, t, n);
}
var nc, Wo, rc, lc;
nc = function(e, t) {
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
Wo = function() {
};
rc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Rt(Ze.current);
    var o = null;
    switch (n) {
      case "input":
        l = co(e, l), r = co(e, r), o = [];
        break;
      case "select":
        l = Z({}, l, { value: void 0 }), r = Z({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = mo(e, l), r = mo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jr);
    }
    go(n, r);
    var i;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var a = l[f];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Wn.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (a = l != null ? l[f] : void 0, r.hasOwnProperty(f) && u !== a && (u != null || a != null)) if (f === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
      } else n || (o || (o = []), o.push(
        f,
        n
      )), n = u;
      else f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (o = o || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Wn.hasOwnProperty(f) ? (u != null && f === "onScroll" && B("scroll", e), o || a === u || (o = [])) : (o = o || []).push(f, u));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
lc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!G) switch (e.tailMode) {
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
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Lf(e, t, n) {
  var r = t.pendingProps;
  switch (wi(t), t.tag) {
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
      return fe(t), null;
    case 1:
      return _e(t.type) && qr(), fe(t), null;
    case 3:
      return r = t.stateNode, mn(), H(ke), H(me), Ti(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Cr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ve !== null && (bo(Ve), Ve = null))), Wo(e, t), fe(t), null;
    case 5:
      ji(t);
      var l = Rt(tr.current);
      if (n = t.type, e !== null && t.stateNode != null) rc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return fe(t), null;
        }
        if (e = Rt(Ze.current), Cr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ye] = t, r[qn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Mn.length; l++) B(Mn[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              rs(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              os(r, o), B("invalid", r);
          }
          go(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var a = o[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Er(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Er(
              r.textContent,
              a,
              e
            ), l = ["children", "" + a]) : Wn.hasOwnProperty(i) && a != null && i === "onScroll" && B("scroll", r);
          }
          switch (n) {
            case "input":
              gr(r), ls(r, o, !0);
              break;
            case "textarea":
              gr(r), is(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Jr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = za(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ye] = t, e[qn] = r, nc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = yo(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Mn.length; l++) B(Mn[l], e);
                l = r;
                break;
              case "source":
                B("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), l = r;
                break;
              case "details":
                B("toggle", e), l = r;
                break;
              case "input":
                rs(e, r), l = co(e, r), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Z({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                os(e, r), l = mo(e, r), B("invalid", e);
                break;
              default:
                l = r;
            }
            go(n, l), a = l;
            for (o in a) if (a.hasOwnProperty(o)) {
              var u = a[o];
              o === "style" ? Fa(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ma(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Bn(e, u) : typeof u == "number" && Bn(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Wn.hasOwnProperty(o) ? u != null && o === "onScroll" && B("scroll", e) : u != null && li(e, o, u, i));
            }
            switch (n) {
              case "input":
                gr(e), ls(e, r, !1);
                break;
              case "textarea":
                gr(e), is(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? rn(e, !!r.multiple, o, !1) : r.defaultValue != null && rn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jr);
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
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) lc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (n = Rt(tr.current), Rt(Ze.current), Cr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ye] = t, (o = r.nodeValue !== n) && (e = je, e !== null)) switch (e.tag) {
            case 3:
              Er(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Er(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ye] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (H(Y), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && Ne !== null && t.mode & 1 && !(t.flags & 128)) ku(), fn(), t.flags |= 98560, o = !1;
        else if (o = Cr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(C(317));
            o[Ye] = t;
          } else fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), o = !1;
        } else Ve !== null && (bo(Ve), Ve = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Y.current & 1 ? le === 0 && (le = 3) : Ui())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return mn(), Wo(e, t), e === null && bn(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return _i(t.type._context), fe(t), null;
    case 17:
      return _e(t.type) && qr(), fe(t), null;
    case 19:
      if (H(Y), o = t.memoizedState, o === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Tn(o, !1);
      else {
        if (le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = il(e), i !== null) {
            for (t.flags |= 128, Tn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return W(Y, Y.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && q() > gn && (t.flags |= 128, r = !0, Tn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = il(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Tn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !G) return fe(t), null;
        } else 2 * q() - o.renderingStartTime > gn && n !== 1073741824 && (t.flags |= 128, r = !0, Tn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = q(), t.sibling = null, n = Y.current, W(Y, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return $i(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ce & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function zf(e, t) {
  switch (wi(t), t.tag) {
    case 1:
      return _e(t.type) && qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mn(), H(ke), H(me), Ti(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ji(t), null;
    case 13:
      if (H(Y), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(C(340));
        fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(Y), null;
    case 4:
      return mn(), null;
    case 10:
      return _i(t.type._context), null;
    case 22:
    case 23:
      return $i(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Tr = !1, pe = !1, Mf = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    b(e, t, r);
  }
  else n.current = null;
}
function Bo(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var Xs = !1;
function Rf(e, t) {
  if (jo = Xr, e = uu(), yi(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, a = -1, u = -1, f = 0, g = 0, h = e, m = null;
        t: for (; ; ) {
          for (var x; h !== n || l !== 0 && h.nodeType !== 3 || (a = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (u = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (x = h.firstChild) !== null; )
            m = h, h = x;
          for (; ; ) {
            if (h === e) break t;
            if (m === n && ++f === l && (a = i), m === o && ++g === r && (u = i), (x = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = x;
        }
        n = a === -1 || u === -1 ? null : { start: a, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (To = { focusedElem: e, selectionRange: n }, Xr = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var _ = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (_ !== null) {
            var S = _.memoizedProps, j = _.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? S : $e(t.type, S), j);
            d.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(C(163));
      }
    } catch (v) {
      b(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return _ = Xs, Xs = !1, _;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Bo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _l(e, t) {
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
function Ho(e) {
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
function oc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, oc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ye], delete t[qn], delete t[Lo], delete t[gf], delete t[yf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ic(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ic(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), e = e.sibling;
}
function Ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ko(e, t, n), e = e.sibling; e !== null; ) Ko(e, t, n), e = e.sibling;
}
var ae = null, Ue = !1;
function at(e, t, n) {
  for (n = n.child; n !== null; ) sc(e, t, n), n = n.sibling;
}
function sc(e, t, n) {
  if (Xe && typeof Xe.onCommitFiberUnmount == "function") try {
    Xe.onCommitFiberUnmount(hl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || tn(n, t);
    case 6:
      var r = ae, l = Ue;
      ae = null, at(e, t, n), ae = r, Ue = l, ae !== null && (Ue ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Ue ? (e = ae, n = n.stateNode, e.nodeType === 8 ? Xl(e.parentNode, n) : e.nodeType === 1 && Xl(e, n), Yn(e)) : Xl(ae, n.stateNode));
      break;
    case 4:
      r = ae, l = Ue, ae = n.stateNode.containerInfo, Ue = !0, at(e, t, n), ae = r, Ue = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Bo(n, t, i), l = l.next;
        } while (l !== r);
      }
      at(e, t, n);
      break;
    case 1:
      if (!pe && (tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        b(n, t, a);
      }
      at(e, t, n);
      break;
    case 21:
      at(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, at(e, t, n), pe = r) : at(e, t, n);
      break;
    default:
      at(e, t, n);
  }
}
function bs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Mf()), t.forEach(function(r) {
      var l = Wf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            ae = a.stateNode, Ue = !1;
            break e;
          case 3:
            ae = a.stateNode.containerInfo, Ue = !0;
            break e;
          case 4:
            ae = a.stateNode.containerInfo, Ue = !0;
            break e;
        }
        a = a.return;
      }
      if (ae === null) throw Error(C(160));
      sc(o, i, l), ae = null, Ue = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (f) {
      b(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ac(t, e), t = t.sibling;
}
function ac(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (De(t, e), Ge(e), r & 4) {
        try {
          Un(3, e, e.return), _l(3, e);
        } catch (S) {
          b(e, e.return, S);
        }
        try {
          Un(5, e, e.return);
        } catch (S) {
          b(e, e.return, S);
        }
      }
      break;
    case 1:
      De(t, e), Ge(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (De(t, e), Ge(e), r & 512 && n !== null && tn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Bn(l, "");
        } catch (S) {
          b(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, a = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          a === "input" && o.type === "radio" && o.name != null && Pa(l, o), yo(a, i);
          var f = yo(a, o);
          for (i = 0; i < u.length; i += 2) {
            var g = u[i], h = u[i + 1];
            g === "style" ? Fa(l, h) : g === "dangerouslySetInnerHTML" ? Ma(l, h) : g === "children" ? Bn(l, h) : li(l, g, h, f);
          }
          switch (a) {
            case "input":
              fo(l, o);
              break;
            case "textarea":
              La(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var x = o.value;
              x != null ? rn(l, !!o.multiple, x, !1) : m !== !!o.multiple && (o.defaultValue != null ? rn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[qn] = o;
        } catch (S) {
          b(e, e.return, S);
        }
      }
      break;
    case 6:
      if (De(t, e), Ge(e), r & 4) {
        if (e.stateNode === null) throw Error(C(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (S) {
          b(e, e.return, S);
        }
      }
      break;
    case 3:
      if (De(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Yn(t.containerInfo);
      } catch (S) {
        b(e, e.return, S);
      }
      break;
    case 4:
      De(t, e), Ge(e);
      break;
    case 13:
      De(t, e), Ge(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Di = q())), r & 4 && bs(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (f = pe) || g, De(t, e), pe = f) : De(t, e), Ge(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !g && e.mode & 1) for (z = e, g = e.child; g !== null; ) {
          for (h = z = g; z !== null; ) {
            switch (m = z, x = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Un(4, m, m.return);
                break;
              case 1:
                tn(m, m.return);
                var _ = m.stateNode;
                if (typeof _.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, _.props = t.memoizedProps, _.state = t.memoizedState, _.componentWillUnmount();
                  } catch (S) {
                    b(r, n, S);
                  }
                }
                break;
              case 5:
                tn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  qs(h);
                  continue;
                }
            }
            x !== null ? (x.return = m, z = x) : qs(h);
          }
          g = g.sibling;
        }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                l = h.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode, u = h.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Ra("display", i));
              } catch (S) {
                b(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (g === null) try {
              h.stateNode.nodeValue = f ? "" : h.memoizedProps;
            } catch (S) {
              b(e, e.return, S);
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
      De(t, e), Ge(e), r & 4 && bs(e);
      break;
    case 21:
      break;
    default:
      De(
        t,
        e
      ), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ic(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Bn(l, ""), r.flags &= -33);
          var o = Zs(e);
          Ko(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = Zs(e);
          Go(e, a, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      b(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ff(e, t, n) {
  z = e, uc(e);
}
function uc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Tr;
      if (!i) {
        var a = l.alternate, u = a !== null && a.memoizedState !== null || pe;
        a = Tr;
        var f = pe;
        if (Tr = i, (pe = u) && !f) for (z = l; z !== null; ) i = z, u = i.child, i.tag === 22 && i.memoizedState !== null ? ea(l) : u !== null ? (u.return = i, z = u) : ea(l);
        for (; o !== null; ) z = o, uc(o), o = o.sibling;
        z = l, Tr = a, pe = f;
      }
      Js(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, z = o) : Js(e);
  }
}
function Js(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || _l(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : $e(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Os(t, o, r);
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
              Os(t, i, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
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
                  h !== null && Yn(h);
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
            throw Error(C(163));
        }
        pe || t.flags & 512 && Ho(t);
      } catch (m) {
        b(t, t.return, m);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function qs(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function ea(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _l(4, t);
          } catch (u) {
            b(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              b(t, l, u);
            }
          }
          var o = t.return;
          try {
            Ho(t);
          } catch (u) {
            b(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ho(t);
          } catch (u) {
            b(t, i, u);
          }
      }
    } catch (u) {
      b(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, z = a;
      break;
    }
    z = t.return;
  }
}
var Of = Math.ceil, ul = it.ReactCurrentDispatcher, Fi = it.ReactCurrentOwner, Re = it.ReactCurrentBatchConfig, A = 0, se = null, te = null, ue = 0, Ce = 0, nn = Nt(0), le = 0, or = null, Ut = 0, El = 0, Oi = 0, Vn = null, xe = null, Di = 0, gn = 1 / 0, be = null, cl = !1, Yo = null, xt = null, Ir = !1, mt = null, dl = 0, Qn = 0, Xo = null, Vr = -1, Qr = 0;
function ye() {
  return A & 6 ? q() : Vr !== -1 ? Vr : Vr = q();
}
function St(e) {
  return e.mode & 1 ? A & 2 && ue !== 0 ? ue & -ue : wf.transition !== null ? (Qr === 0 && (Qr = Ka()), Qr) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : eu(e.type)), e) : 1;
}
function We(e, t, n, r) {
  if (50 < Qn) throw Qn = 0, Xo = null, Error(C(185));
  sr(e, n, r), (!(A & 2) || e !== se) && (e === se && (!(A & 2) && (El |= n), le === 4 && ft(e, ue)), Ee(e, r), n === 1 && A === 0 && !(t.mode & 1) && (gn = q() + 500, xl && jt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  vd(e, t);
  var r = Yr(e, e === se ? ue : 0);
  if (r === 0) n !== null && us(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && us(n), t === 1) e.tag === 0 ? vf(ta.bind(null, e)) : wu(ta.bind(null, e)), mf(function() {
      !(A & 6) && jt();
    }), n = null;
    else {
      switch (Ya(r)) {
        case 1:
          n = ui;
          break;
        case 4:
          n = Ha;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = Ga;
          break;
        default:
          n = Kr;
      }
      n = yc(n, cc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function cc(e, t) {
  if (Vr = -1, Qr = 0, A & 6) throw Error(C(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = Yr(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = A;
    A |= 2;
    var o = fc();
    (se !== e || ue !== t) && (be = null, gn = q() + 500, Ft(e, t));
    do
      try {
        $f();
        break;
      } catch (a) {
        dc(e, a);
      }
    while (!0);
    ki(), ul.current = o, A = l, te !== null ? t = 0 : (se = null, ue = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (l = ko(e), l !== 0 && (r = l, t = Zo(e, l))), t === 1) throw n = or, Ft(e, 0), ft(e, r), Ee(e, q()), n;
    if (t === 6) ft(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Df(l) && (t = fl(e, r), t === 2 && (o = ko(e), o !== 0 && (r = o, t = Zo(e, o))), t === 1)) throw n = or, Ft(e, 0), ft(e, r), Ee(e, q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Lt(e, xe, be);
          break;
        case 3:
          if (ft(e, r), (r & 130023424) === r && (t = Di + 500 - q(), 10 < t)) {
            if (Yr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Po(Lt.bind(null, e, xe, be), t);
            break;
          }
          Lt(e, xe, be);
          break;
        case 4:
          if (ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Qe(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Of(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Po(Lt.bind(null, e, xe, be), r);
            break;
          }
          Lt(e, xe, be);
          break;
        case 5:
          Lt(e, xe, be);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ee(e, q()), e.callbackNode === n ? cc.bind(null, e) : null;
}
function Zo(e, t) {
  var n = Vn;
  return e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256), e = fl(e, t), e !== 2 && (t = xe, xe = n, t !== null && bo(t)), e;
}
function bo(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function Df(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Be(o(), l)) return !1;
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
function ft(e, t) {
  for (t &= ~Oi, t &= ~El, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ta(e) {
  if (A & 6) throw Error(C(327));
  un();
  var t = Yr(e, 0);
  if (!(t & 1)) return Ee(e, q()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ko(e);
    r !== 0 && (t = r, n = Zo(e, r));
  }
  if (n === 1) throw n = or, Ft(e, 0), ft(e, t), Ee(e, q()), n;
  if (n === 6) throw Error(C(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Lt(e, xe, be), Ee(e, q()), null;
}
function Ai(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    A = n, A === 0 && (gn = q() + 500, xl && jt());
  }
}
function Vt(e) {
  mt !== null && mt.tag === 0 && !(A & 6) && un();
  var t = A;
  A |= 1;
  var n = Re.transition, r = U;
  try {
    if (Re.transition = null, U = 1, e) return e();
  } finally {
    U = r, Re.transition = n, A = t, !(A & 6) && jt();
  }
}
function $i() {
  Ce = nn.current, H(nn);
}
function Ft(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, pf(n)), te !== null) for (n = te.return; n !== null; ) {
    var r = n;
    switch (wi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && qr();
        break;
      case 3:
        mn(), H(ke), H(me), Ti();
        break;
      case 5:
        ji(r);
        break;
      case 4:
        mn();
        break;
      case 13:
        H(Y);
        break;
      case 19:
        H(Y);
        break;
      case 10:
        _i(r.type._context);
        break;
      case 22:
      case 23:
        $i();
    }
    n = n.return;
  }
  if (se = e, te = e = kt(e.current, null), ue = Ce = t, le = 0, or = null, Oi = El = Ut = 0, xe = Vn = null, Mt !== null) {
    for (t = 0; t < Mt.length; t++) if (n = Mt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Mt = null;
  }
  return e;
}
function dc(e, t) {
  do {
    var n = te;
    try {
      if (ki(), Ar.current = al, sl) {
        for (var r = X.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        sl = !1;
      }
      if ($t = 0, ie = re = X = null, $n = !1, nr = 0, Fi.current = null, n === null || n.return === null) {
        le = 1, or = t, te = null;
        break;
      }
      e: {
        var o = e, i = n.return, a = n, u = t;
        if (t = ue, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var f = u, g = a, h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = g.alternate;
            m ? (g.updateQueue = m.updateQueue, g.memoizedState = m.memoizedState, g.lanes = m.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var x = Qs(i);
          if (x !== null) {
            x.flags &= -257, Ws(x, i, a, o, t), x.mode & 1 && Vs(o, f, t), t = x, u = f;
            var _ = t.updateQueue;
            if (_ === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(u), t.updateQueue = S;
            } else _.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Vs(o, f, t), Ui();
              break e;
            }
            u = Error(C(426));
          }
        } else if (G && a.mode & 1) {
          var j = Qs(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), Ws(j, i, a, o, t), xi(hn(u, a));
            break e;
          }
        }
        o = u = hn(u, a), le !== 4 && (le = 2), Vn === null ? Vn = [o] : Vn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = Yu(o, u, t);
              Fs(o, d);
              break e;
            case 1:
              a = u;
              var c = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (xt === null || !xt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Xu(o, a, t);
                Fs(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      mc(n);
    } catch (N) {
      t = N, te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function fc() {
  var e = ul.current;
  return ul.current = al, e === null ? al : e;
}
function Ui() {
  (le === 0 || le === 3 || le === 2) && (le = 4), se === null || !(Ut & 268435455) && !(El & 268435455) || ft(se, ue);
}
function fl(e, t) {
  var n = A;
  A |= 2;
  var r = fc();
  (se !== e || ue !== t) && (be = null, Ft(e, t));
  do
    try {
      Af();
      break;
    } catch (l) {
      dc(e, l);
    }
  while (!0);
  if (ki(), A = n, ul.current = r, te !== null) throw Error(C(261));
  return se = null, ue = 0, le;
}
function Af() {
  for (; te !== null; ) pc(te);
}
function $f() {
  for (; te !== null && !ud(); ) pc(te);
}
function pc(e) {
  var t = gc(e.alternate, e, Ce);
  e.memoizedProps = e.pendingProps, t === null ? mc(e) : te = t, Fi.current = null;
}
function mc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = zf(n, t), n !== null) {
        n.flags &= 32767, te = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, te = null;
        return;
      }
    } else if (n = Lf(n, t, Ce), n !== null) {
      te = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Lt(e, t, n) {
  var r = U, l = Re.transition;
  try {
    Re.transition = null, U = 1, Uf(e, t, n, r);
  } finally {
    Re.transition = l, U = r;
  }
  return null;
}
function Uf(e, t, n, r) {
  do
    un();
  while (mt !== null);
  if (A & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (wd(e, o), e === se && (te = se = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ir || (Ir = !0, yc(Kr, function() {
    return un(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Re.transition, Re.transition = null;
    var i = U;
    U = 1;
    var a = A;
    A |= 4, Fi.current = null, Rf(e, n), ac(n, e), of(To), Xr = !!jo, To = jo = null, e.current = n, Ff(n), cd(), A = a, U = i, Re.transition = o;
  } else e.current = n;
  if (Ir && (Ir = !1, mt = e, dl = l), o = e.pendingLanes, o === 0 && (xt = null), pd(n.stateNode), Ee(e, q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (cl) throw cl = !1, e = Yo, Yo = null, e;
  return dl & 1 && e.tag !== 0 && un(), o = e.pendingLanes, o & 1 ? e === Xo ? Qn++ : (Qn = 0, Xo = e) : Qn = 0, jt(), null;
}
function un() {
  if (mt !== null) {
    var e = Ya(dl), t = Re.transition, n = U;
    try {
      if (Re.transition = null, U = 16 > e ? 16 : e, mt === null) var r = !1;
      else {
        if (e = mt, mt = null, dl = 0, A & 6) throw Error(C(331));
        var l = A;
        for (A |= 4, z = e.current; z !== null; ) {
          var o = z, i = o.child;
          if (z.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var f = a[u];
                for (z = f; z !== null; ) {
                  var g = z;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, g, o);
                  }
                  var h = g.child;
                  if (h !== null) h.return = g, z = h;
                  else for (; z !== null; ) {
                    g = z;
                    var m = g.sibling, x = g.return;
                    if (oc(g), g === f) {
                      z = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = x, z = m;
                      break;
                    }
                    z = x;
                  }
                }
              }
              var _ = o.alternate;
              if (_ !== null) {
                var S = _.child;
                if (S !== null) {
                  _.child = null;
                  do {
                    var j = S.sibling;
                    S.sibling = null, S = j;
                  } while (S !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, z = i;
          else e: for (; z !== null; ) {
            if (o = z, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Un(9, o, o.return);
            }
            var d = o.sibling;
            if (d !== null) {
              d.return = o.return, z = d;
              break e;
            }
            z = o.return;
          }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          i = z;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, z = p;
          else e: for (i = c; z !== null; ) {
            if (a = z, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  _l(9, a);
              }
            } catch (N) {
              b(a, a.return, N);
            }
            if (a === i) {
              z = null;
              break e;
            }
            var v = a.sibling;
            if (v !== null) {
              v.return = a.return, z = v;
              break e;
            }
            z = a.return;
          }
        }
        if (A = l, jt(), Xe && typeof Xe.onPostCommitFiberRoot == "function") try {
          Xe.onPostCommitFiberRoot(hl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      U = n, Re.transition = t;
    }
  }
  return !1;
}
function na(e, t, n) {
  t = hn(n, t), t = Yu(e, t, 1), e = wt(e, t, 1), t = ye(), e !== null && (sr(e, 1, t), Ee(e, t));
}
function b(e, t, n) {
  if (e.tag === 3) na(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      na(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xt === null || !xt.has(r))) {
        e = hn(n, e), e = Xu(t, e, 1), t = wt(t, e, 1), e = ye(), t !== null && (sr(t, 1, e), Ee(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Vf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ue & n) === n && (le === 4 || le === 3 && (ue & 130023424) === ue && 500 > q() - Di ? Ft(e, 0) : Oi |= n), Ee(e, t);
}
function hc(e, t) {
  t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
  var n = ye();
  e = lt(e, t), e !== null && (sr(e, t, n), Ee(e, n));
}
function Qf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), hc(e, n);
}
function Wf(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), hc(e, n);
}
var gc;
gc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, Pf(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, G && t.flags & 1048576 && xu(t, nl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ur(e, t), e = t.pendingProps;
      var l = dn(t, me.current);
      an(t, n), l = Pi(null, t, r, e, l, n);
      var o = Li();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (o = !0, el(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ci(t), l.updater = kl, t.stateNode = l, l._reactInternals = t, Do(t, r, e, n), t = Uo(null, t, r, !0, o, n)) : (t.tag = 0, G && o && vi(t), he(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ur(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Hf(r), e = $e(r, e), l) {
          case 0:
            t = $o(null, t, r, e, n);
            break e;
          case 1:
            t = Gs(null, t, r, e, n);
            break e;
          case 11:
            t = Bs(null, t, r, e, n);
            break e;
          case 14:
            t = Hs(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(C(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), $o(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Gs(e, t, r, l, n);
    case 3:
      e: {
        if (qu(t), e === null) throw Error(C(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Nu(e, t), ol(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = hn(Error(C(423)), t), t = Ks(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = hn(Error(C(424)), t), t = Ks(e, t, r, n, l);
          break e;
        } else for (Ne = vt(t.stateNode.containerInfo.firstChild), je = t, G = !0, Ve = null, n = Eu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fn(), r === l) {
            t = ot(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ju(t), e === null && Ro(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Io(r, l) ? i = null : o !== null && Io(r, o) && (t.flags |= 32), Ju(e, t), he(e, t, i, n), t.child;
    case 6:
      return e === null && Ro(t), null;
    case 13:
      return ec(e, t, n);
    case 4:
      return Ni(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pn(t, null, r, n) : he(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Bs(e, t, r, l, n);
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, W(rl, r._currentValue), r._currentValue = i, o !== null) if (Be(o.value, i)) {
          if (o.children === l.children && !ke.current) {
            t = ot(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var a = o.dependencies;
          if (a !== null) {
            i = o.child;
            for (var u = a.firstContext; u !== null; ) {
              if (u.context === r) {
                if (o.tag === 1) {
                  u = tt(-1, n & -n), u.tag = 2;
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var g = f.pending;
                    g === null ? u.next = u : (u.next = g.next, g.next = u), f.pending = u;
                  }
                }
                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Fo(
                  o.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(C(341));
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Fo(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        he(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, an(t, n), l = Fe(l), r = r(l), t.flags |= 1, he(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = $e(r, t.pendingProps), l = $e(r.type, l), Hs(e, t, r, l, n);
    case 15:
      return Zu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Ur(e, t), t.tag = 1, _e(r) ? (e = !0, el(t)) : e = !1, an(t, n), Ku(t, r, l), Do(t, r, l, n), Uo(null, t, r, !0, e, n);
    case 19:
      return tc(e, t, n);
    case 22:
      return bu(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function yc(e, t) {
  return Ba(e, t);
}
function Bf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Me(e, t, n, r) {
  return new Bf(e, t, n, r);
}
function Vi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Hf(e) {
  if (typeof e == "function") return Vi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ii) return 11;
    if (e === si) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Me(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Wr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Vi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Gt:
      return Ot(n.children, l, o, t);
    case oi:
      i = 8, l |= 8;
      break;
    case io:
      return e = Me(12, n, t, l | 2), e.elementType = io, e.lanes = o, e;
    case so:
      return e = Me(13, n, t, l), e.elementType = so, e.lanes = o, e;
    case ao:
      return e = Me(19, n, t, l), e.elementType = ao, e.lanes = o, e;
    case ja:
      return Cl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ca:
          i = 10;
          break e;
        case Na:
          i = 9;
          break e;
        case ii:
          i = 11;
          break e;
        case si:
          i = 14;
          break e;
        case ut:
          i = 16, r = null;
          break e;
      }
      throw Error(C(130, e == null ? e : typeof e, ""));
  }
  return t = Me(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Ot(e, t, n, r) {
  return e = Me(7, e, r, t), e.lanes = n, e;
}
function Cl(e, t, n, r) {
  return e = Me(22, e, r, t), e.elementType = ja, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ro(e, t, n) {
  return e = Me(6, e, null, t), e.lanes = n, e;
}
function lo(e, t, n) {
  return t = Me(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Gf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Al(0), this.expirationTimes = Al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Al(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Qi(e, t, n, r, l, o, i, a, u) {
  return e = new Gf(e, t, n, a, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Me(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ci(o), e;
}
function Kf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function vc(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return vu(e, n, t);
  }
  return t;
}
function wc(e, t, n, r, l, o, i, a, u) {
  return e = Qi(n, r, !0, e, l, o, i, a, u), e.context = vc(null), n = e.current, r = ye(), l = St(n), o = tt(r, l), o.callback = t ?? null, wt(n, o, l), e.current.lanes = l, sr(e, l, r), Ee(e, r), e;
}
function Nl(e, t, n, r) {
  var l = t.current, o = ye(), i = St(l);
  return n = vc(n), t.context === null ? t.context = n : t.pendingContext = n, t = tt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = wt(l, t, i), e !== null && (We(e, l, i, o), Dr(e, l, i)), i;
}
function pl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ra(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wi(e, t) {
  ra(e, t), (e = e.alternate) && ra(e, t);
}
function Yf() {
  return null;
}
var xc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Bi(e) {
  this._internalRoot = e;
}
jl.prototype.render = Bi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Nl(e, t, null, null);
};
jl.prototype.unmount = Bi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vt(function() {
      Nl(null, e, null, null);
    }), t[rt] = null;
  }
};
function jl(e) {
  this._internalRoot = e;
}
jl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ba();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dt.length && t !== 0 && t < dt[n].priority; n++) ;
    dt.splice(n, 0, e), n === 0 && qa(e);
  }
};
function Hi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Tl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function la() {
}
function Xf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = pl(i);
        o.call(f);
      };
    }
    var i = wc(t, r, e, 0, null, !1, !1, "", la);
    return e._reactRootContainer = i, e[rt] = i.current, bn(e.nodeType === 8 ? e.parentNode : e), Vt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var f = pl(u);
      a.call(f);
    };
  }
  var u = Qi(e, 0, !1, null, null, !1, !1, "", la);
  return e._reactRootContainer = u, e[rt] = u.current, bn(e.nodeType === 8 ? e.parentNode : e), Vt(function() {
    Nl(t, u, n, r);
  }), u;
}
function Il(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function() {
        var u = pl(i);
        a.call(u);
      };
    }
    Nl(t, i, e, l);
  } else i = Xf(n, t, e, l, r);
  return pl(i);
}
Xa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zn(t.pendingLanes);
        n !== 0 && (ci(t, n | 1), Ee(t, q()), !(A & 6) && (gn = q() + 500, jt()));
      }
      break;
    case 13:
      Vt(function() {
        var r = lt(e, 1);
        if (r !== null) {
          var l = ye();
          We(r, e, 1, l);
        }
      }), Wi(e, 1);
  }
};
di = function(e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = ye();
      We(t, e, 134217728, n);
    }
    Wi(e, 134217728);
  }
};
Za = function(e) {
  if (e.tag === 13) {
    var t = St(e), n = lt(e, t);
    if (n !== null) {
      var r = ye();
      We(n, e, t, r);
    }
    Wi(e, t);
  }
};
ba = function() {
  return U;
};
Ja = function(e, t) {
  var n = U;
  try {
    return U = e, t();
  } finally {
    U = n;
  }
};
wo = function(e, t, n) {
  switch (t) {
    case "input":
      if (fo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = wl(r);
            if (!l) throw Error(C(90));
            Ia(r), fo(r, l);
          }
        }
      }
      break;
    case "textarea":
      La(e, n);
      break;
    case "select":
      t = n.value, t != null && rn(e, !!n.multiple, t, !1);
  }
};
Aa = Ai;
$a = Vt;
var Zf = { usingClientEntryPoint: !1, Events: [ur, Zt, wl, Oa, Da, Ai] }, In = { findFiberByHostInstance: zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, bf = { bundleType: In.bundleType, version: In.version, rendererPackageName: In.rendererPackageName, rendererConfig: In.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: it.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qa(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: In.findFiberByHostInstance || Yf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pr.isDisabled && Pr.supportsFiber) try {
    hl = Pr.inject(bf), Xe = Pr;
  } catch {
  }
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zf;
Ie.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hi(t)) throw Error(C(200));
  return Kf(e, t, null, n);
};
Ie.createRoot = function(e, t) {
  if (!Hi(e)) throw Error(C(299));
  var n = !1, r = "", l = xc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Qi(e, 1, !1, null, null, n, !1, r, l), e[rt] = t.current, bn(e.nodeType === 8 ? e.parentNode : e), new Bi(t);
};
Ie.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  return e = Qa(t), e = e === null ? null : e.stateNode, e;
};
Ie.flushSync = function(e) {
  return Vt(e);
};
Ie.hydrate = function(e, t, n) {
  if (!Tl(t)) throw Error(C(200));
  return Il(null, e, t, !0, n);
};
Ie.hydrateRoot = function(e, t, n) {
  if (!Hi(e)) throw Error(C(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = xc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = wc(t, null, e, 1, n ?? null, l, !1, o, i), e[rt] = t.current, bn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new jl(t);
};
Ie.render = function(e, t, n) {
  if (!Tl(t)) throw Error(C(200));
  return Il(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function(e) {
  if (!Tl(e)) throw Error(C(40));
  return e._reactRootContainer ? (Vt(function() {
    Il(null, null, e, !1, function() {
      e._reactRootContainer = null, e[rt] = null;
    });
  }), !0) : !1;
};
Ie.unstable_batchedUpdates = Ai;
Ie.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Tl(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Il(e, t, n, !1, r);
};
Ie.version = "18.3.1-next-f1338f8080-20240426";
function Sc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc);
    } catch (e) {
      console.error(e);
    }
}
Sc(), Sa.exports = Ie;
var dr = Sa.exports, kc, oa = dr;
kc = oa.createRoot, oa.hydrateRoot;
window.api = $;
const ia = async (e = 0, t = 30, n = "") => {
  const r = await $.fetchApi(
    `/meld-nexus/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}`
  );
  if (!r.ok)
    throw new Error(`Failed to fetch images: ${r.statusText}`);
  return await r.json();
}, Jf = async (e, t) => {
  const n = `/meld-nexus/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await $.fetchApi(n);
  return r.ok ? await r.json() : [];
}, qf = async () => {
  const e = await $.fetchApi("/meld-nexus/search-suggestions");
  return e.ok ? await e.json() : [];
}, _c = async () => {
  const e = await $.fetchApi("/meld-nexus/settings");
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
    "search.realtime_search": !0,
    "viewer.show_filename": !0,
    "fullscreen.show_filename": !0,
    "gallery.page_size": 30,
    "viewer.thumbnail_window_size": 15
  };
}, ep = async (e, t) => {
  if (!(await $.fetchApi("/meld-nexus/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, tp = async (e, t) => {
  if (!(await $.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, np = async (e, t = 12) => {
  const n = await $.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, rp = async (e) => {
  const t = await $.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, lp = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await $.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, op = async (e, t = !0) => {
  const n = await $.fetchApi("/meld-nexus/bulk-delete", {
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
}, Ec = async (e) => {
  const t = await $.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, ip = async (e, t) => {
  const n = await $.fetchApi(
    `/meld-nexus/folders?type=${e}&path=${encodeURIComponent(t)}`
  );
  return n.ok ? await n.json() : [];
}, sp = async (e) => {
  const t = await $.fetchApi("/meld-nexus/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, ap = async () => {
  if (!(await $.fetchApi("/meld-nexus/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, up = async () => {
  const e = await $.fetchApi("/meld-nexus/favorites");
  return e.ok ? await e.json() : [];
}, cp = async (e, t) => {
  if (!(await $.fetchApi("/meld-nexus/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, sa = async (e) => {
  if (!(await $.fetchApi("/meld-nexus/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, dp = async (e, t) => {
  if (!(await $.fetchApi("/meld-nexus/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, Gi = async () => {
  const e = await $.fetchApi("/meld-nexus/tags");
  return e.ok ? await e.json() : [];
}, fp = async (e) => {
  const t = await $.fetchApi("/meld-nexus/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, pp = async (e) => {
  if (!(await $.fetchApi(`/meld-nexus/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, mp = async (e, t) => {
  if (!(await $.fetchApi("/meld-nexus/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, hp = async (e, t, n) => {
  if (!(await $.fetchApi("/meld-nexus/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, gp = async (e) => {
  const t = await $.fetchApi(`/meld-nexus/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, yp = async (e) => {
  const t = await $.fetchApi(`/meld-nexus/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Cc = { exports: {} }, Pl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp = k, wp = Symbol.for("react.element"), xp = Symbol.for("react.fragment"), Sp = Object.prototype.hasOwnProperty, kp = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _p = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Sp.call(t, r) && !_p.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: wp, type: e, key: o, ref: i, props: l, _owner: kp.current };
}
Pl.Fragment = xp;
Pl.jsx = Nc;
Pl.jsxs = Nc;
Cc.exports = Pl;
var s = Cc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ep = {
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
const Cp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), V = (e, t) => {
  const n = k.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: a = "",
      children: u,
      ...f
    }, g) => k.createElement(
      "svg",
      {
        ref: g,
        ...Ep,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(o) * 24 / Number(l) : o,
        className: ["lucide", `lucide-${Cp(e)}`, a].join(" "),
        ...f
      },
      [
        ...t.map(([h, m]) => k.createElement(h, m)),
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
const Np = V("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aa = V("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = V("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tp = V("Box", [
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
const Ip = V("Calendar", [
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
const Pp = V("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lp = V("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jc = V("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = V("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = V("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = V("Download", [
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
const ua = V("Folder", [
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
const Rp = V("Maximize", [
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
const Fp = V("Minimize", [
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
const Op = V("MoreVertical", [
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
const Dp = V("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = V("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = V("PlusCircle", [
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
const Ki = V("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = V("RefreshCw", [
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
const yn = V("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = V("Settings", [
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
const Vp = V("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = V("Star", [
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
const Sn = V("Tag", [
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
const Xi = V("Trash2", [
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
const Qp = V("Type", [
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
const Wp = V("Upload", [
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
const He = V("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let ml = !1;
const Bp = (e) => {
  ml = e, ml && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, Hp = (...e) => {
  ml && console.log("[Meld-Flow]", ...e);
}, Gp = (...e) => {
  ml && console.warn("[Meld-Flow]", ...e);
}, Kp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, ge = {
  log: Hp,
  warn: Gp,
  error: Kp,
  init: Bp
}, Yp = {
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
    "search.realtime_search": !0,
    "viewer.show_filename": !0,
    "fullscreen.show_filename": !0,
    "gallery.page_size": 30,
    "viewer.thumbnail_window_size": 15
  },
  pagination: {
    total: 0,
    offset: 0,
    limit: 30,
    hasMore: !1
  },
  searchQuery: "",
  favorites: []
};
function Xp(e, t) {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "SET_IMAGES": {
      const { images: n, total: r, offset: l } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !n.some((i) => i.id === o) && (o = null), {
        ...e,
        images: n,
        isLoading: !1,
        error: null,
        viewerImageId: o,
        pagination: {
          total: r,
          offset: l,
          limit: e.pagination.limit,
          hasMore: l + n.length < r
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: n, total: r, offset: l } = t.payload, o = [...e.images, ...n], i = Array.from(
        new Map(o.map((a) => [a.id, a])).values()
      );
      return {
        ...e,
        images: i,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: r,
          offset: l,
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
        const a = new Set(e.selectedIds);
        return a.add(t.payload), {
          ...e,
          selectedIds: a,
          lastSelectedId: t.payload
        };
      }
      const n = e.images.findIndex(
        (a) => a.id === e.lastSelectedId
      ), r = e.images.findIndex(
        (a) => a.id === t.payload
      );
      if (n === -1 || r === -1) return e;
      const [l, o] = [
        Math.min(n, r),
        Math.max(n, r)
      ], i = new Set(e.selectedIds);
      for (let a = l; a <= o; a++)
        i.add(e.images[a].id);
      return {
        ...e,
        selectedIds: i,
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
      const n = t.payload, r = typeof n == "number" ? n : n.id, l = typeof n == "number" ? "gallery" : n.mode, o = e.viewerMode === "lineage" && l === "lineage" && e.lineageImages.some((i) => i.id === r);
      return {
        ...e,
        viewerImageId: r,
        viewerMode: l,
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
      const n = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (o) => o.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && o.has_children)
      );
      if (e.viewerImageId === null || n.length === 0)
        return e;
      const r = n.findIndex(
        (o) => o.id === e.viewerImageId
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
        (o) => o.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && o.has_children)
      );
      if (e.viewerImageId === null || n.length === 0)
        return e;
      const r = n.findIndex(
        (o) => o.id === e.viewerImageId
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
    case "SET_SETTINGS": {
      const n = {
        ...e.settings,
        ...t.payload
      }, r = { ...e.pagination };
      return t.payload["gallery.page_size"] !== void 0 && (r.limit = t.payload["gallery.page_size"]), {
        ...e,
        settings: n,
        pagination: r
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
const Ic = k.createContext(void 0), Zp = ({
  children: e
}) => {
  const [t, n] = k.useReducer(Xp, Yp), r = k.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const u = await ia(
        0,
        t.pagination.limit,
        t.searchQuery
      );
      n({ type: "SET_IMAGES", payload: u });
    } catch (u) {
      n({
        type: "SET_ERROR",
        payload: u instanceof Error ? u.message : String(u)
      });
    }
  }, [t.pagination.limit, t.searchQuery]), l = k.useCallback(async () => {
    if (!(t.isLoading || !t.pagination.hasMore)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        const u = t.images.length, f = await ia(
          u,
          t.pagination.limit,
          t.searchQuery
        );
        n({ type: "APPEND_IMAGES", payload: f });
      } catch (u) {
        n({
          type: "SET_ERROR",
          payload: u instanceof Error ? u.message : String(u)
        });
      }
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.images.length,
    t.searchQuery
  ]), o = k.useCallback(async () => {
    try {
      const u = await up();
      n({ type: "SET_FAVORITES", payload: u });
    } catch (u) {
      ge.error("Failed to load favorites", u);
    }
  }, []), i = k.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const u = Array.from(t.selectedIds), f = `Are you sure you want to delete the selected ${u.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(f)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await op(u, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (g) {
        n({
          type: "SET_ERROR",
          payload: g instanceof Error ? g.message : String(g)
        });
      }
    }
  }, [t.selectedIds, r]), a = k.useCallback(
    async (u, f) => {
      try {
        await ep(u, f), n({ type: "SET_SETTINGS", payload: { [u]: f } });
      } catch (g) {
        n({
          type: "SET_ERROR",
          payload: g instanceof Error ? g.message : String(g)
        });
      }
    },
    []
  );
  return k.useEffect(() => {
    (async () => {
      try {
        const f = await _c();
        n({ type: "SET_SETTINGS", payload: f });
      } catch (f) {
        ge.error("Failed to load settings", f);
      }
    })();
  }, []), k.useEffect(() => {
    o();
  }, [o]), k.useEffect(() => {
    const u = () => {
      r();
    }, f = (h) => {
      const m = h.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: m }
      });
    }, g = (h) => {
      const m = h.detail;
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
    return window.addEventListener("meld-nexus-refresh", u), window.addEventListener("meld-nexus-scan-progress", f), window.addEventListener("meld-nexus-scan-finished", g), () => {
      window.removeEventListener("meld-nexus-refresh", u), window.removeEventListener(
        "meld-nexus-scan-progress",
        f
      ), window.removeEventListener(
        "meld-nexus-scan-finished",
        g
      );
    };
  }, [r, t.scanStatus.progress.total]), k.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ s.jsx(
    Ic.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: r,
        loadMoreImages: l,
        refreshFavorites: o,
        deleteSelected: i,
        updateSetting: a
      },
      children: e
    }
  );
}, st = () => {
  const e = k.useContext(Ic);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, bp = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = k.useState(!1), o = k.useRef(null);
  return k.useEffect(() => {
    const i = new IntersectionObserver(
      ([u]) => {
        l(u.isIntersecting);
      },
      { rootMargin: n }
    ), a = o.current;
    return a && i.observe(a), () => {
      a && i.unobserve(a);
    };
  }, [n]), /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: o,
      style: {
        minHeight: r ? "auto" : `${t}px`,
        width: "100%",
        containIntrinsicSize: `auto ${t}px`,
        contentVisibility: "auto"
      },
      children: r ? e : null
    }
  );
}, Jp = () => {
  const { state: e, dispatch: t, deleteSelected: n } = st(), r = e.selectedIds.size;
  if (r === 0) return null;
  const l = () => {
    const o = e.images.filter(
      (a) => e.selectedIds.has(a.id)
    ), i = /* @__PURE__ */ new Set();
    for (const a of o)
      if (a.tags)
        for (const u of a.tags)
          i.add(u);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(i)
      }
    });
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
        onClick: l,
        children: [
          /* @__PURE__ */ s.jsx(
            Sn,
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
            Xi,
            {
              size: 16,
              style: { marginRight: "8px", verticalAlign: "middle" }
            }
          ),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ s.jsx(He, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, qp = ({ image: e }) => {
  const { state: t, dispatch: n } = st(), r = t.selectedIds.has(e.id), [l, o] = k.useState(null), [i, a] = k.useState(!1), [u, f] = k.useState(null), [g, h] = k.useState(!1), m = k.useRef(null), x = async (y, F, M = !1) => {
    try {
      await navigator.clipboard.writeText(y), M ? (h(!0), setTimeout(() => h(!1), 2e3)) : (f(F), setTimeout(() => f(null), 2e3));
    } catch (Q) {
      console.error("Failed to copy text: ", Q);
    }
  };
  k.useEffect(() => {
    const y = (F) => {
      m.current && !m.current.contains(F.target) && a(!1);
    };
    return i && document.addEventListener("mousedown", y), () => {
      document.removeEventListener("mousedown", y);
    };
  }, [i]);
  const _ = (y, F = 0) => {
    if (F >= 5) return [];
    const M = y.parent_id;
    if (!M && !y.parent_filename) return [];
    const Q = M ? t.images.find((P) => P.id === M) : null;
    let I = null;
    if (Q ? I = `/api/view?filename=${encodeURIComponent(Q.filename)}&type=${Q.type || "output"}${Q.subfolder ? `&subfolder=${encodeURIComponent(Q.subfolder)}` : ""}` : M && y.parent_filename && (I = `/api/view?filename=${encodeURIComponent(y.parent_filename)}&type=${y.parent_type || "output"}${y.parent_subfolder ? `&subfolder=${encodeURIComponent(y.parent_subfolder)}` : ""}`), !I && !Q) return [];
    const E = {
      id: M || null,
      imgSrc: I
    };
    return Q ? [E, ..._(Q, F + 1)] : [E];
  }, S = _(e), j = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, d = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, c = (y) => {
    y.shiftKey ? (y.preventDefault(), y.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : y.ctrlKey || y.metaKey || t.selectedIds.size > 0 ? (y.preventDefault(), y.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, p = (y) => {
    y.shiftKey ? (y.preventDefault(), y.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, v = (y) => {
    (y.shiftKey || y.ctrlKey || y.metaKey || t.selectedIds.size > 0) && y.preventDefault();
  }, N = (y) => {
    (y.key === "Enter" || y.key === " ") && (y.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, w = async () => {
    try {
      const y = await gp(e.id);
      if (!y.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        y.workflow
      ), console.log("Workflow restored successfully from Meld Nexus");
    } catch (y) {
      console.error("Error restoring workflow:", y), alert("Failed to restore workflow.");
    }
  }, T = async () => {
    try {
      const y = await yp(e.id), F = "MeldUnifiedLoader", M = window.app, I = window.LiteGraph.createNode(F);
      if (!I) {
        console.error(`Node type ${F} not found.`), alert(
          `Node type ${F} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const E = {
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
      if (I.widgets) {
        for (const [ne, L] of Object.entries(E)) {
          const R = y[ne];
          if (R != null) {
            const O = I.widgets.find(
              (K) => K.name === L
            );
            O && (O.value = R);
          }
        }
        const ee = I.widgets.find(
          (ne) => ne.name === "control_after_generate"
        );
        ee && (ee.value = "fixed");
      }
      const P = M.canvas.ds.offset, J = M.canvas.ds.scale;
      I.pos = [(-P[0] + 400) / J, (-P[1] + 300) / J], M.graph.add(I), M.canvas.selectNode(I), M.canvas.centerOnNode(I);
    } catch (y) {
      console.error("Error adding Unified Loader:", y), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: p,
      onMouseDown: v,
      onKeyDown: N,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
          "img",
          {
            src: d,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            decoding: "async",
            onMouseDown: v,
            onClick: (y) => {
              y.stopPropagation(), c(y);
            }
          }
        ) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
          t.settings["sidebar.show_filename"] && /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__filename", children: j }),
          t.settings["gallery.show_parent_image"] && S.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: S.map(
              (y, F) => y.imgSrc && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: y.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  decoding: "async",
                  onClick: (M) => {
                    M.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: { id: y.id || e.id, mode: "lineage" }
                    });
                  },
                  title: F === 0 ? "Source" : F === 1 ? "Grand-Source" : `Ancestor (S${F + 1})`,
                  alt: "source thumb"
                },
                y.id || F
              )
            ) })
          ] }),
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (y) => {
                y.stopPropagation(), o({
                  title: "Model",
                  text: e.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (y) => {
                      y.stopPropagation(), x(e.model_name || "-", "Model");
                    },
                    children: u === "Model" ? "Copied!" : "Model"
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
              onClick: (y) => {
                y.stopPropagation(), o({
                  title: "Positive Prompt",
                  text: e.positive_prompt || e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (y) => {
                      y.stopPropagation(), x(
                        e.positive_prompt || e.positive || "-",
                        "Positive"
                      );
                    },
                    children: u === "Positive" ? "Copied!" : "Positive"
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
              onClick: (y) => {
                y.stopPropagation(), o({
                  title: "Negative Prompt",
                  text: e.negative_prompt || e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (y) => {
                      y.stopPropagation(), x(
                        e.negative_prompt || e.negative || "-",
                        "Negative"
                      );
                    },
                    children: u === "Negative" ? "Copied!" : "Negative"
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
              onClick: (y) => {
                y.stopPropagation(), n({
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
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((y, F) => /* @__PURE__ */ s.jsx("span", { className: "meld-image-card__tag", children: y }, `${y}-${F}`)) : /* @__PURE__ */ s.jsx(
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
        /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu-container", ref: m, children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (y) => {
                y.stopPropagation(), a(!i);
              },
              title: "Menu",
              children: /* @__PURE__ */ s.jsx(Op, { size: 16 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (y) => {
                y.stopPropagation(), T();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ s.jsx(aa, { size: 16 })
            }
          ),
          i && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (y) => {
                  y.stopPropagation(), T(), a(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(aa, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (y) => {
                  y.stopPropagation(), w(), a(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(Yi, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (y) => {
                  y.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), a(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx($p, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (y) => {
                  y.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), a(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(Sn, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "meld-prompt-popup-overlay",
            onClick: (y) => {
              y.stopPropagation(), o(null);
            },
            children: /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (y) => y.stopPropagation(),
                children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ s.jsx("span", { children: l.title }),
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        style: { display: "flex", alignItems: "center", gap: "10px" },
                        children: [
                          g ? /* @__PURE__ */ s.jsx(
                            Lp,
                            {
                              size: 18,
                              style: { color: "var(--meld-success-color)" }
                            }
                          ) : /* @__PURE__ */ s.jsx(
                            zp,
                            {
                              className: "meld-prompt-popup-copy",
                              size: 18,
                              onClick: () => x(l.text, "", !0)
                            }
                          ),
                          /* @__PURE__ */ s.jsx(
                            He,
                            {
                              className: "meld-prompt-popup-close",
                              size: 18,
                              onClick: () => o(null)
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, Pc = k.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, o = typeof n.parent_id == "number" && n.parent_id === e.id, i = typeof e.parent_id == "number" && e.parent_id === n.id, a = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`;
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${o ? "meld-viewer-thumbnail--parent" : ""} ${i ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
          // Default to gallery mode when clicking a thumbnail
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx(
            "img",
            {
              src: a,
              alt: e.filename,
              loading: "lazy",
              decoding: "async"
            }
          ),
          (o || i) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${o ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              children: o ? /* @__PURE__ */ s.jsx(jp, { size: 12 }) : /* @__PURE__ */ s.jsx(Np, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Pc.displayName = "ThumbnailItem";
const em = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = st(), { viewerImageId: r, images: l, viewerMode: o, lineageImages: i } = e, [a, u] = k.useState(!1), [f, g] = k.useState(!1), h = k.useRef(null), m = k.useMemo(() => o === "lineage" ? i : l.filter(
    (c) => c.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && c.has_children)
  ), [o, i, l, e.settings]), x = k.useMemo(() => r === null ? -1 : m.findIndex((c) => c.id === r), [m, r]), _ = k.useMemo(() => {
    if (x === -1) return [];
    const c = e.settings["viewer.thumbnail_window_size"], p = Math.floor(c / 2);
    let v = Math.max(0, x - p);
    const N = Math.min(m.length, v + c);
    return N === m.length && (v = Math.max(0, N - c)), m.slice(v, N).map((w, T) => ({
      img: w,
      absIndex: v + T
    }));
  }, [
    m,
    x,
    e.settings["viewer.thumbnail_window_size"]
  ]), S = (o === "lineage" && i.length > 0 ? i : l).find((c) => c.id === r), j = k.useCallback(
    (c) => {
      c && "stopPropagation" in c && c.stopPropagation();
      const p = h.current;
      p && (document.fullscreenElement ? document.exitFullscreen() : p.requestFullscreen().catch((v) => {
        console.error(
          `Error attempting to enable full-screen mode: ${v.message}`
        );
      }));
    },
    []
  );
  if (k.useEffect(() => {
    if (o !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore)
      return;
    const c = m.findIndex(
      (p) => p.id === r
    );
    c !== -1 && c >= m.length - 15 && n();
  }, [
    r,
    m.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    m
  ]), k.useEffect(() => {
    const c = (v) => {
      r !== null && (v.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : v.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : v.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (v.key === "f" || v.key === "F") && j(v));
    }, p = () => {
      u(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", c), document.addEventListener("fullscreenchange", p), () => {
      window.removeEventListener("keydown", c), document.removeEventListener("fullscreenchange", p);
    };
  }, [r, t, j]), k.useEffect(() => {
    o === "lineage" && r !== null && i.length === 0 && (g(!0), rp(r).then((c) => {
      t({ type: "SET_LINEAGE", payload: c });
    }).catch((c) => {
      console.error("Failed to fetch lineage:", c);
    }).finally(() => {
      g(!1);
    }));
  }, [o, r, i.length, t]), k.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), k.useEffect(() => {
    if (r !== null) {
      const c = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      c && c.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center"
      });
    }
  }, [r]), k.useEffect(() => {
    if (r === null || m.length === 0) return;
    const c = m.findIndex(
      (w) => w.id === r
    );
    if (c === -1) return;
    const p = (w) => `/api/view?filename=${encodeURIComponent(w.filename)}&type=${w.type || "output"}${w.subfolder ? `&subfolder=${encodeURIComponent(w.subfolder)}` : ""}`, v = [
      c + 1,
      c + 2,
      c - 1
    ], N = setTimeout(() => {
      for (const w of v)
        if (w >= 0 && w < m.length) {
          const T = m[w], y = new Image();
          y.src = p(T);
        }
    }, 150);
    return () => clearTimeout(N);
  }, [r, m]), !S) return null;
  const d = `/api/view?filename=${encodeURIComponent(S.filename)}&type=${S.type || "output"}${S.subfolder ? `&subfolder=${encodeURIComponent(S.subfolder)}` : ""}`;
  return dr.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: h,
        className: "meld-viewer-overlay",
        style: { background: "rgba(0, 0, 0, 0.85)" },
        onClick: () => t({ type: "CLOSE_VIEWER" }),
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-viewer-content ${a ? "meld-viewer-content--fullscreen" : ""}`,
            onClick: (c) => c.stopPropagation(),
            children: [
              (!a && e.settings["viewer.show_filename"] || a && e.settings["fullscreen.show_filename"]) && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-filename", children: S.filename }) }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn",
                    onClick: j,
                    type: "button",
                    title: a ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                    children: a ? /* @__PURE__ */ s.jsx(Fp, { size: 20 }) : /* @__PURE__ */ s.jsx(Rp, { size: 20 })
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                    onClick: () => t({ type: "CLOSE_VIEWER" }),
                    type: "button",
                    title: "Close (Esc)",
                    children: /* @__PURE__ */ s.jsx(He, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--prev",
                  onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                  type: "button",
                  children: /* @__PURE__ */ s.jsx(jc, { size: 32 })
                }
              ),
              /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-image-container", children: /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: d,
                  alt: S.filename,
                  className: "meld-viewer-image",
                  fetchpriority: "high"
                }
              ) }),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--next",
                  onClick: () => t({ type: "NEXT_IMAGE" }),
                  type: "button",
                  children: /* @__PURE__ */ s.jsx(Tc, { size: 32 })
                }
              ),
              !a && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                f ? /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    style: {
                      padding: "10px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "Loading lineage..."
                  }
                ) : _.map(({ img: c }) => /* @__PURE__ */ s.jsx(
                  Pc,
                  {
                    thumb: c,
                    viewerImageId: r,
                    currentImage: S,
                    dispatch: t
                  },
                  c.id
                )),
                o === "gallery" && e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(Yi, { className: "animate-spin", size: 20 }) })
              ] }) })
            ]
          }
        )
      }
    ),
    document.body
  );
}, tm = () => {
  const { state: e, dispatch: t } = st(), { scanStatus: n } = e, [r, l] = k.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0,
    tags: []
  }), [o, i] = k.useState([]), [a, u] = k.useState(!1), [f, g] = k.useState([]), [h, m] = k.useState(""), [x, _] = k.useState(!1), S = k.useCallback(async () => {
    if (r.type !== "custom") {
      u(!0);
      try {
        const I = await ip(r.type, r.subfolder);
        i(I);
      } catch (I) {
        console.error("Failed to load folders:", I);
      } finally {
        u(!1);
      }
    }
  }, [r.type, r.subfolder]);
  k.useEffect(() => {
    S();
  }, [S]);
  const j = k.useCallback(async () => {
    _(!0);
    try {
      const I = await Gi();
      g(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      _(!1);
    }
  }, []);
  k.useEffect(() => {
    j();
  }, [j]);
  const d = k.useMemo(() => f.filter(
    (I) => I.name.toLowerCase().includes(h.toLowerCase()) && !r.tags.includes(I.name)
  ), [f, h, r.tags]), c = (I) => {
    const E = I.trim();
    E && !r.tags.includes(E) && (l({ ...r, tags: [...r.tags, E] }), m(""));
  }, p = (I) => {
    l({ ...r, tags: r.tags.filter((E) => E !== I) });
  }, v = (I) => {
    I.key === "Enter" && h.trim() && (I.preventDefault(), c(h.trim()));
  }, N = async () => {
    try {
      await sp(r), t({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      });
    } catch (I) {
      console.error("Failed to start scan:", I), alert(`Failed to start scan: ${I}`);
    }
  }, w = async () => {
    try {
      await ap(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (I) {
      console.error("Failed to cancel scan:", I);
    }
  }, T = (I) => {
    const E = r.subfolder ? `${r.subfolder}/${I}` : I;
    l({ ...r, subfolder: E });
  }, y = () => {
    const I = r.subfolder.split("/");
    I.pop(), l({ ...r, subfolder: I.join("/") });
  }, F = () => {
    n.isFinished && t({ type: "SET_SCAN_STATUS", payload: { isFinished: !1 } }), t({ type: "CLOSE_MODAL" });
  }, M = n.progress.phase === "linking", Q = M ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return dr.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: F, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--large",
        onClick: (I) => I.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: F,
                children: /* @__PURE__ */ s.jsx(He, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: n.isRunning ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-progress", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-scan-status-text", children: n.shouldCancel ? /* @__PURE__ */ s.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : M ? /* @__PURE__ */ s.jsx("span", { children: "Linking parent images..." }) : /* @__PURE__ */ s.jsx("span", { children: "Scanning images..." }) }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-progress-container", children: /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "meld-progress-bar",
                style: { width: `${Q}%` }
              }
            ) }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-progress-stats", children: M ? /* @__PURE__ */ s.jsxs("span", { children: [
              "Processing relations: ",
              n.progress.current,
              " /",
              " ",
              n.progress.total
            ] }) : /* @__PURE__ */ s.jsxs("span", { children: [
              n.progress.current,
              " / ",
              n.progress.total
            ] }) }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-actions", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: F,
                  children: "Run in Background"
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  disabled: n.shouldCancel,
                  onClick: w,
                  children: [
                    /* @__PURE__ */ s.jsx(Vp, { size: 16 }),
                    "Stop Scan"
                  ]
                }
              )
            ] })
          ] }) : n.isFinished ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-finished-icon", children: /* @__PURE__ */ s.jsx(Pp, { size: 64, color: "var(--meld-success)" }) }),
            /* @__PURE__ */ s.jsx("h3", { children: "Import Completed" }),
            /* @__PURE__ */ s.jsxs("p", { children: [
              "Successfully scanned ",
              /* @__PURE__ */ s.jsx("strong", { children: n.totalCount }),
              " ",
              "images.",
              /* @__PURE__ */ s.jsx("br", {}),
              "(",
              /* @__PURE__ */ s.jsx("strong", { children: n.newCount }),
              " new images were added to database)"
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: F,
                style: { minWidth: "120px" },
                children: "Close"
              }
            ) })
          ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-import-container", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-import-sidebar", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                /* @__PURE__ */ s.jsxs(
                  "select",
                  {
                    id: "base-location",
                    value: r.type,
                    onChange: (I) => l({
                      ...r,
                      type: I.target.value,
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
              r.type === "custom" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: "custom-path", children: "Absolute Path" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: "custom-path",
                    type: "text",
                    placeholder: "C:\\path\\to\\images or /path/to/images",
                    value: r.custom_path,
                    onChange: (I) => l({ ...r, custom_path: I.target.value })
                  }
                )
              ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ s.jsx("span", { className: "meld-form-label", children: "Current Path" }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-path-display", children: [
                  /* @__PURE__ */ s.jsxs("span", { children: [
                    r.type,
                    "/"
                  ] }),
                  r.subfolder
                ] })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.recursive,
                    onChange: (I) => l({ ...r, recursive: I.target.checked })
                  }
                ),
                "Recursive Scan"
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.auto_link_parent,
                    onChange: (I) => l({
                      ...r,
                      auto_link_parent: I.target.checked
                    })
                  }
                ),
                "Auto Link Parent"
              ] }) }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: r.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : r.tags.map((I) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                  I,
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-edit-remove",
                      onClick: () => p(I),
                      children: /* @__PURE__ */ s.jsx(He, { size: 12 })
                    }
                  )
                ] }, I)) }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                  /* @__PURE__ */ s.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      id: "import-tags",
                      type: "text",
                      className: "meld-tag-search-input",
                      placeholder: "Search or create tag...",
                      value: h,
                      onChange: (I) => m(I.target.value),
                      onKeyDown: v
                    }
                  ),
                  h.trim() && !r.tags.includes(h.trim()) && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-add-btn",
                      onClick: () => c(h),
                      children: /* @__PURE__ */ s.jsx(Ki, { size: 14 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? h && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                  "New tag: ",
                  h
                ] }) : d.map((I) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-suggestion-item",
                    onClick: () => c(I.name),
                    children: I.name
                  },
                  I.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-primary",
                  onClick: N,
                  style: { width: "100%" },
                  children: [
                    /* @__PURE__ */ s.jsx(Ap, { size: 16 }),
                    "Start Import"
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-import-browser", children: [
              r.type !== "custom" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-browser-header", children: [
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "meld-browser-back",
                      disabled: !r.subfolder,
                      onClick: y,
                      children: [
                        /* @__PURE__ */ s.jsx(jc, { size: 16 }),
                        "Back"
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsx("span", { className: "meld-browser-title", children: "Browse Folders" })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: a ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : o.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No subfolders found." }) : o.map((I) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-folder-item",
                    onClick: () => T(I),
                    children: [
                      /* @__PURE__ */ s.jsx(ua, { size: 16 }),
                      /* @__PURE__ */ s.jsx("span", { children: I }),
                      /* @__PURE__ */ s.jsx(Tc, { size: 14 })
                    ]
                  },
                  I
                )) })
              ] }),
              r.type === "custom" && /* @__PURE__ */ s.jsxs("div", { className: "meld-browser-info", children: [
                /* @__PURE__ */ s.jsx(ua, { size: 48 }),
                /* @__PURE__ */ s.jsx("p", { children: "Please enter an absolute path in the sidebar." }),
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      fontSize: "11px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "Example: C:\\Users\\Me\\Pictures or /home/me/images"
                  }
                )
              ] })
            ] })
          ] }) })
        ]
      }
    ) }),
    document.body
  );
}, nm = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = st(), [l, o] = k.useState([]), [i, a] = k.useState(!0), [u, f] = k.useState(!1), g = t.images.find((d) => d.id === e), h = k.useCallback(async () => {
    a(!0);
    try {
      const d = await np(e);
      o(d);
    } catch (d) {
      console.error("Failed to load suggestions:", d);
    } finally {
      a(!1);
    }
  }, [e]);
  k.useEffect(() => {
    h();
  }, [h]);
  const m = async (d) => {
    try {
      await tp(e, d), await r(), n({ type: "CLOSE_MODAL" });
    } catch (c) {
      console.error("Failed to link parent:", c);
    }
  }, x = async (d) => {
    a(!0);
    try {
      const c = await lp(d), { id: p } = await Ec({
        filename: c.name,
        subfolder: c.subfolder || "",
        type: c.type || "input"
      });
      await m(p);
    } catch (c) {
      console.error("Failed to upload/register image:", c);
    } finally {
      a(!1);
    }
  }, _ = (d) => {
    d.preventDefault(), d.stopPropagation(), f(!1);
    const c = d.dataTransfer.files[0];
    c != null && c.type.startsWith("image/") && x(c);
  };
  if (!g) return null;
  const S = l.filter((d) => d.is_source_match), j = l.filter((d) => !d.is_source_match);
  return dr.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (d) => d.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              g.id
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ s.jsx(He, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (d) => {
                  d.preventDefault(), d.stopPropagation(), f(!0);
                },
                onDragOver: (d) => {
                  d.preventDefault(), d.stopPropagation(), d.dataTransfer.dropEffect = "copy", f(!0);
                },
                onDragLeave: (d) => {
                  d.preventDefault(), d.stopPropagation(), f(!1);
                },
                onDrop: _,
                children: [
                  /* @__PURE__ */ s.jsx(Wp, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            i ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              S.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: S.map((d) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(d.id),
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: `/api/view?filename=${encodeURIComponent(d.filename)}&type=${d.type || "output"}${d.subfolder ? `&subfolder=${encodeURIComponent(d.subfolder)}` : ""}`,
                          alt: d.filename
                        }
                      ),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: d.filename }) })
                    ]
                  },
                  d.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                j.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: j.map((d) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(d.id),
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: `/api/view?filename=${encodeURIComponent(d.filename)}&type=${d.type || "output"}${d.subfolder ? `&subfolder=${encodeURIComponent(d.subfolder)}` : ""}`,
                          alt: d.filename
                        }
                      ),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                        /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: d.filename }),
                        /* @__PURE__ */ s.jsxs("span", { className: "meld-suggestion-distance", children: [
                          "Match:",
                          " ",
                          Math.round((64 - d.distance) / 64 * 100),
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  d.id
                )) }) : /* @__PURE__ */ s.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.body
  );
}, rm = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = st(), [r, l] = k.useState(e.searchQuery), [o, i] = k.useState([]), [a, u] = k.useState(!1), [f, g] = k.useState([]), [h, m] = k.useState(-1), [x, _] = k.useState(!1), [S, j] = k.useState(null), d = k.useRef(null);
  k.useEffect(() => {
    if (S) {
      const E = setTimeout(() => j(null), 3e3);
      return () => clearTimeout(E);
    }
  }, [S]);
  const c = k.useRef(null), p = k.useRef(e.searchQuery);
  k.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      g([]);
      return;
    }
    !r && !e.searchQuery ? qf().then((E) => {
      g(E);
    }) : g([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), k.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), k.useEffect(() => {
    var E;
    (E = d.current) == null || E.focus();
  }, []);
  const v = k.useCallback(
    (E, P = !0) => {
      p.current !== E && (t({ type: "SET_SEARCH_QUERY", payload: E }), P && u(!1), p.current = E);
    },
    [t]
  );
  k.useEffect(() => {
    const E = setTimeout(async () => {
      if (r === p.current)
        return;
      if (e.settings["search.realtime_search"] && v(r, !1), !e.settings["search.input_suggest"]) {
        i([]), u(!1);
        return;
      }
      const P = r.split(/\s+/), J = P[P.length - 1];
      if (J) {
        const ee = J.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (ee) {
          const ne = ee[1].toLowerCase(), L = ee[2], R = await Jf(L, ne);
          i(R), u(R.length > 0), m(-1);
        } else
          i([]), u(!1);
      } else
        i([]), u(!1);
    }, 300);
    return () => clearTimeout(E);
  }, [
    r,
    e.settings["search.realtime_search"],
    e.settings["search.input_suggest"],
    v
  ]);
  const N = (E) => {
    E.key === "Enter" ? v(r) : E.key === "Tab" ? a && h >= 0 && (w(o[h]), E.preventDefault()) : E.key === "ArrowDown" ? a && (m((P) => Math.min(P + 1, o.length - 1)), E.preventDefault()) : E.key === "ArrowUp" ? a && (m((P) => Math.max(P - 1, -1)), E.preventDefault()) : E.key === "Escape" && u(!1);
  }, w = (E) => {
    var L;
    const P = r.split(/\s+/);
    P.pop();
    const ee = ["date", "after", "before"].includes(E.type) ? E.value : `"${E.value}"`, ne = `${[...P, `${E.type}:${ee}`].join(" ").trim()} `;
    l(ne), v(ne), i([]), u(!1), (L = d.current) == null || L.focus();
  }, T = () => {
    l(""), v("");
  }, y = async (E, P, J) => {
    E.stopPropagation();
    const ee = `Are you sure you want to delete the favorite "${J}"?`;
    if (window.confirm(ee))
      try {
        await sa(P), await n();
      } catch (ne) {
        ge.error("Failed to delete favorite", ne);
      }
  }, F = async (E, P, J) => {
    E.stopPropagation();
    const ee = window.prompt(
      "Enter a new name for this favorite:",
      J
    );
    if (!(ee === null || ee === J))
      try {
        await dp(P, ee || J), await n();
      } catch (ne) {
        ge.error("Failed to rename favorite", ne);
      }
  }, M = (E, P) => {
    const ee = ["date", "after", "before"].includes(E) ? P : `"${P}"`, ne = `${E}:${ee}`;
    l(ne), v(ne);
  }, Q = async () => {
    if (!e.searchQuery || x) return;
    if (e.favorites.some(
      (P) => P.query === e.searchQuery
    )) {
      const P = e.favorites.find((J) => J.query === e.searchQuery);
      if (P) {
        _(!0);
        try {
          await sa(P.id), await n(), j("Favorite removed.");
        } catch (J) {
          console.error("Failed to delete favorite:", J);
        } finally {
          _(!1);
        }
      }
      return;
    }
    _(!0);
    try {
      await cp(e.searchQuery, e.searchQuery), await n(), j(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (P) {
      console.error("Failed to save favorite:", P);
    } finally {
      _(!1);
    }
  }, I = (E) => {
    switch (E) {
      case "tag":
        return /* @__PURE__ */ s.jsx(Sn, { size: 12 });
      case "model":
        return /* @__PURE__ */ s.jsx(Tp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ s.jsx(Qp, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ s.jsx(Ip, { size: 12 });
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
                    /* @__PURE__ */ s.jsx(
                      yn,
                      {
                        size: 18,
                        color: "var(--meld-text-secondary)",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        ref: d,
                        type: "text",
                        value: r,
                        onChange: (E) => l(E.target.value),
                        onKeyDown: N,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const E = r.split(/\s+/), P = E[E.length - 1];
                          P != null && P.match(/^(pos|neg|model|date|after|before):/i) && u(!0);
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
                        onClick: Q,
                        disabled: x,
                        title: e.favorites.some((E) => E.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          ca,
                          {
                            size: 16,
                            color: e.favorites.some((E) => E.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((E) => E.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: T,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ s.jsx(He, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              a && o.length > 0 && /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: c,
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
                  children: o.map((E, P) => /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      onMouseDown: (J) => {
                        J.preventDefault(), w(E);
                      },
                      onMouseEnter: () => m(P),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: P === h ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                                children: I(E.type)
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
                                children: E.type
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-color)",
                                  fontSize: "14px"
                                },
                                children: E.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${E.type}:${E.value}`
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
            children: f.map((E) => /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                onClick: () => M(E.type, E.value),
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
                onMouseEnter: (P) => {
                  P.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", P.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", P.currentTarget.style.color = "var(--meld-text-color)";
                },
                onMouseLeave: (P) => {
                  P.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", P.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", P.currentTarget.style.color = "var(--meld-text-color)";
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: I(E.type)
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
                      children: E.type
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
                      children: E.value
                    }
                  )
                ]
              },
              `${E.type}:${E.value}`
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
                    /* @__PURE__ */ s.jsx(ca, { size: 12, fill: "var(--meld-text-secondary)" }),
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
                  children: e.favorites.map((E) => /* @__PURE__ */ s.jsxs(
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
                        l(E.query), v(E.query);
                      },
                      onMouseEnter: (P) => {
                        P.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", P.currentTarget.style.borderColor = "var(--meld-accent-color)", P.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (P) => {
                        P.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", P.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", P.currentTarget.style.color = "var(--meld-text-color)";
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
                                  children: E.name
                                }
                              ),
                              E.name !== E.query && /* @__PURE__ */ s.jsx(
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
                                  children: E.query
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
                                  onClick: (P) => {
                                    P.stopPropagation(), F(P, E.id, E.name);
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
                                  onMouseEnter: (P) => {
                                    P.currentTarget.style.color = "var(--meld-accent-color)", P.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (P) => {
                                    P.currentTarget.style.color = "var(--meld-text-secondary)", P.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ s.jsx(Dp, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ s.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (P) => {
                                    P.stopPropagation(), y(P, E.id, E.name);
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
                                  onMouseEnter: (P) => {
                                    P.currentTarget.style.color = "var(--meld-danger-color)", P.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (P) => {
                                    P.currentTarget.style.color = "var(--meld-text-secondary)", P.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ s.jsx(Xi, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    E.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, lm = () => {
  const { state: e, dispatch: t, updateSetting: n } = st(), [r, l] = k.useState("General"), [o, i] = k.useState({
    ...e.settings
  }), [a, u] = k.useState(
    e.settings["gallery.page_size"].toString()
  ), [f, g] = k.useState(e.settings["viewer.thumbnail_window_size"].toString()), h = [
    {
      key: "gallery.page_size",
      label: "Page Size",
      description: "Number of images to display per page (10-10000).",
      type: "number",
      category: "General",
      min: 10,
      max: 1e4
    },
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
    },
    {
      key: "viewer.show_filename",
      label: "Show Filename",
      description: "Display the filename in the image viewer.",
      type: "boolean",
      category: "View"
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
      key: "fullscreen.show_filename",
      label: "Show Filename",
      description: "Display the filename in fullscreen mode.",
      type: "boolean",
      category: "Full Screen"
    }
  ], m = async () => {
    const j = Object.keys(o).filter((d) => o[d] !== e.settings[d]);
    if (j.length > 0)
      for (const d of j)
        await n(d, o[d]);
    t({ type: "CLOSE_MODAL" });
  }, x = (j, d) => {
    i((c) => ({
      ...c,
      [j]: !d
    }));
  }, _ = (j, d, c, p) => {
    j === "gallery.page_size" ? u(d) : j === "viewer.thumbnail_window_size" && g(d);
    const v = Number.parseInt(d, 10);
    if (!Number.isNaN(v)) {
      let N = v;
      c !== void 0 && N < c && (N = c), p !== void 0 && N > p && (N = p), i((w) => ({
        ...w,
        [j]: N
      }));
    }
  }, S = h.filter(
    (j) => j.category === r
  );
  return dr.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: m, children: /* @__PURE__ */ s.jsxs(
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
                onClick: m,
                children: /* @__PURE__ */ s.jsx(He, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-tabs", children: [
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
                className: `meld-tab ${r === "Full Screen" ? "active" : ""}`,
                onClick: () => l("Full Screen"),
                children: "Full Screen"
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsx("div", { className: "meld-settings-list", children: S.map((j) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
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
                    checked: !!o[j.key],
                    onChange: () => x(j.key, !!o[j.key])
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
              ] }),
              j.type === "number" && /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "number",
                  className: "meld-number-input",
                  value: j.key === "gallery.page_size" ? a : j.key === "viewer.thumbnail_window_size" ? f : o[j.key],
                  min: j.min,
                  max: j.max,
                  onChange: (d) => _(
                    j.key,
                    d.target.value,
                    j.min,
                    j.max
                  ),
                  onBlur: () => {
                    j.key === "gallery.page_size" ? u(
                      o["gallery.page_size"].toString()
                    ) : j.key === "viewer.thumbnail_window_size" && g(
                      o["viewer.thumbnail_window_size"].toString()
                    );
                  }
                }
              )
            ] })
          ] }, j.key)) }) })
        ]
      }
    ) }),
    document.body
  );
}, om = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { refreshImages: r } = st(), [l, o] = k.useState([]), [i, a] = k.useState(t), [u, f] = k.useState(""), [g, h] = k.useState(!0), [m, x] = k.useState(!1), _ = k.useRef(null), S = e.length > 1, j = k.useCallback(async () => {
    h(!0);
    try {
      const w = await Gi();
      o(w);
    } catch (w) {
      console.error("Failed to fetch tags:", w);
    } finally {
      h(!1);
    }
  }, []);
  k.useEffect(() => {
    j();
  }, [j]), k.useEffect(() => {
    _.current && _.current.focus();
  }, []);
  const d = k.useMemo(() => l.filter(
    (w) => w.name.toLowerCase().includes(u.toLowerCase()) && !i.includes(w.name)
  ), [l, u, i]), c = (w) => {
    const T = w.trim();
    T && !i.includes(T) && (a([...i, T]), f(""));
  }, p = (w) => {
    a(i.filter((T) => T !== w));
  }, v = async () => {
    x(!0);
    try {
      if (S) {
        const w = i.filter((y) => !t.includes(y)), T = t.filter(
          (y) => !i.includes(y)
        );
        await hp(e, w, T);
      } else
        await mp(e[0], i);
      await r(), n();
    } catch (w) {
      console.error("Failed to update tags:", w), alert("Failed to update tags.");
    } finally {
      x(!1);
    }
  }, N = (w) => {
    w.key === "Enter" && u.trim() ? (w.preventDefault(), c(u.trim())) : w.key === "Escape" && n();
  };
  return /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (w) => w.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Sn, { size: 18 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: S ? `Edit Tags (${e.length} images)` : "Edit Tags" })
      ] }),
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(He, { size: 20 }) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
      S && /* @__PURE__ */ s.jsx(
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
        /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: S ? "Collective Tags" : "Selected Tags" }),
        /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: i.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : i.map((w) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
          w,
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-edit-remove",
              onClick: () => p(w),
              children: /* @__PURE__ */ s.jsx(He, { size: 12 })
            }
          )
        ] }, w)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
          /* @__PURE__ */ s.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              ref: _,
              type: "text",
              className: "meld-tag-search-input",
              placeholder: "Search or create new tag...",
              value: u,
              onChange: (w) => f(w.target.value),
              onKeyDown: N
            }
          ),
          u.trim() && !i.includes(u.trim()) && /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-tag-add-btn",
              onClick: () => c(u),
              children: [
                /* @__PURE__ */ s.jsx(Ki, { size: 14 }),
                "Create"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? u ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : d.map((w) => /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-suggestion-item",
            onClick: () => c(w.name),
            children: w.name
          },
          w.id
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
          onClick: v,
          disabled: m,
          children: m ? "Saving..." : "Save Changes"
        }
      )
    ] })
  ] }) });
}, im = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = k.useState([]), [l, o] = k.useState(!0), [i, a] = k.useState(""), [u, f] = k.useState(""), [g, h] = k.useState(!1), m = k.useCallback(async () => {
    o(!0);
    try {
      const d = await Gi();
      r(d);
    } catch (d) {
      console.error("Failed to fetch tags:", d);
    } finally {
      o(!1);
    }
  }, []);
  k.useEffect(() => {
    m();
  }, [m]);
  const x = async (d) => {
    if (d.preventDefault(), !(!u.trim() || g)) {
      h(!0);
      try {
        await fp(u.trim()), f(""), await m();
      } catch (c) {
        console.error("Failed to add tag:", c);
      } finally {
        h(!1);
      }
    }
  }, _ = async (d, c) => {
    if (confirm(`Are you sure you want to delete tag "${c}"?`))
      try {
        await pp(d), await m();
      } catch (p) {
        console.error("Failed to delete tag:", p);
      }
  }, S = (d) => {
    t(`tag:${d}`);
  }, j = k.useMemo(() => n.filter(
    (d) => d.name.toLowerCase().includes(i.toLowerCase())
  ), [n, i]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Sn, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(He, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: x, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (d) => f(d.target.value),
            disabled: g
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || g,
            children: [
              /* @__PURE__ */ s.jsx(Ki, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: i,
            onChange: (d) => a(d.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: j.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : j.map((d) => /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item", children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: d.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => S(d.name),
              children: /* @__PURE__ */ s.jsx(yn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => _(d.id, d.name),
              children: /* @__PURE__ */ s.jsx(Xi, { size: 14 })
            }
          )
        ] })
      ] }, d.id)) })
    ] })
  ] });
}, sm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = st(), [l, o] = k.useState("gallery"), [i, a] = k.useState(""), u = e.searchQuery.trim() !== "", f = k.useRef(null), g = e.images.filter(
    (h) => h.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && h.has_children)
  );
  return k.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && g.length === 0 && (ge.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    g.length,
    r
  ]), ge.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: g.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), k.useEffect(() => {
    const h = new IntersectionObserver(
      (x) => {
        x[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (ge.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), m = f.current;
    return m && h.observe(m), () => {
      m && h.unobserve(m);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          marginBottom: "15px",
          gap: "10px"
        },
        children: [
          /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      l === "search" ? (e.searchQuery && (a(e.searchQuery), t({ type: "SET_SEARCH_QUERY", payload: "" })), o("gallery")) : (!e.searchQuery && i && t({
                        type: "SET_SEARCH_QUERY",
                        payload: i
                      }), o("search"));
                    },
                    style: {
                      background: "none",
                      border: "none",
                      color: u ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: u ? "bold" : "normal"
                    },
                    title: "Search",
                    children: /* @__PURE__ */ s.jsx(yn, { size: 14 })
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => o(l === "tags" ? "gallery" : "tags"),
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
                    children: /* @__PURE__ */ s.jsx(Sn, { size: 14 })
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
                    children: /* @__PURE__ */ s.jsx(Mp, { size: 14 })
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
                      Yi,
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
                    children: /* @__PURE__ */ s.jsx(Up, { size: 14 })
                  }
                )
              ]
            }
          ),
          l === "search" && /* @__PURE__ */ s.jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ s.jsx(rm, {}) })
        ]
      }
    ),
    e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
    l === "tags" ? /* @__PURE__ */ s.jsx(
      im,
      {
        onClose: () => o("gallery"),
        onSearch: (h) => {
          t({ type: "SET_SEARCH_QUERY", payload: h }), o("search");
        }
      }
    ) : e.isLoading && g.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : g.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__list", children: g.map((h) => /* @__PURE__ */ s.jsx(bp, { height: 150, children: /* @__PURE__ */ s.jsx(qp, { image: h }) }, h.id)) }),
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: f,
          className: "meld-gallery__load-more",
          style: { height: "20px", margin: "20px 0", textAlign: "center" },
          children: [
            e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
            !e.pagination.hasMore && g.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx(Jp, {}),
    e.viewerImageId !== null && /* @__PURE__ */ s.jsx(em, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(nm, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(tm, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(lm, {}),
    e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
      om,
      {
        imageIds: e.activeModal.imageIds,
        initialTags: e.activeModal.tags,
        onClose: () => t({ type: "CLOSE_MODAL" })
      }
    )
  ] });
};
da.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, o;
      const n = (l = e.widgets) == null ? void 0 : l.find((i) => i.name === "positive"), r = (o = e.widgets) == null ? void 0 : o.find((i) => i.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const Ll = document.createElement("link");
Ll.rel = "stylesheet";
Ll.type = "text/css";
Ll.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(Ll);
let Lr = null, Ae = null;
da.registerExtension({
  name: "ComfyUI.MeldNexus",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldNexusSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const o = n.ui.meldNexus;
        o != null && o.isVisible() && o.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await _c();
      ge.init(n.dev_mode), ge.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld-Flow] Failed to fetch settings", n), ge.init(!1);
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
      }, $.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), $.addEventListener("meld-nexus-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-progress", { detail: n.detail })
        );
      }), $.addEventListener("meld-nexus-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-finished", { detail: n.detail })
        ), (r = e.ui.meldNexus) == null || r.refresh(), console.log("Meld Nexus: Import completed.");
      }), $.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Ec({
                    filename: l.filename,
                    subfolder: l.subfolder,
                    type: l.type
                  });
                } catch (o) {
                  console.error("Failed to auto-register image:", o);
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
            ge.log("MeldNexus: render called", {
              el: n,
              galleryRoot: Lr,
              galleryContainer: Ae
            }), Ae || (ge.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), Ae = document.createElement("div"), Ae.id = "meld-flow-gallery-container", Ae.style.height = "100%", Ae.style.width = "100%", Ae.style.display = "flex", Ae.style.flexDirection = "column"), n.contains(Ae) || (ge.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(Ae)), Lr ? ge.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (ge.log("MeldNexus: Creating new gallery root"), Lr = kc(Ae), Lr.render(
              qi.createElement(
                Zp,
                null,
                qi.createElement(sm)
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
