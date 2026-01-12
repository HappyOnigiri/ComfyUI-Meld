import { api as B } from "../../../scripts/api.js";
import { app as Ec } from "../../../scripts/app.js";
function Cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oa = { exports: {} }, F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr = Symbol.for("react.element"), Nc = Symbol.for("react.portal"), jc = Symbol.for("react.fragment"), Pc = Symbol.for("react.strict_mode"), Ic = Symbol.for("react.profiler"), Tc = Symbol.for("react.provider"), Lc = Symbol.for("react.context"), Mc = Symbol.for("react.forward_ref"), zc = Symbol.for("react.suspense"), Rc = Symbol.for("react.memo"), Oc = Symbol.for("react.lazy"), Hi = Symbol.iterator;
function Fc(e) {
  return e === null || typeof e != "object" ? null : (e = Hi && e[Hi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ia = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, sa = Object.assign, aa = {};
function gn(e, t, n) {
  this.props = e, this.context = t, this.refs = aa, this.updater = n || ia;
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ua() {
}
ua.prototype = gn.prototype;
function Zo(e, t, n) {
  this.props = e, this.context = t, this.refs = aa, this.updater = n || ia;
}
var Jo = Zo.prototype = new ua();
Jo.constructor = Zo;
sa(Jo, gn.prototype);
Jo.isPureReactComponent = !0;
var Gi = Array.isArray, ca = Object.prototype.hasOwnProperty, qo = { current: null }, da = { key: !0, ref: !0, __self: !0, __source: !0 };
function fa(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ca.call(t, r) && !da.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), f = 0; f < a; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: lr, type: e, key: o, ref: i, props: l, _owner: qo.current };
}
function Dc(e, t) {
  return { $$typeof: lr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function bo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function Ac(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ki = /\/+/g;
function Tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ac("" + e.key) : t.toString(36);
}
function Ir(e, t, n, r, l) {
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
        case lr:
        case Nc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Tl(i, 0) : r, Gi(l) ? (n = "", e != null && (n = e.replace(Ki, "$&/") + "/"), Ir(l, t, n, "", function(f) {
    return f;
  })) : l != null && (bo(l) && (l = Dc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ki, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Gi(e)) for (var a = 0; a < e.length; a++) {
    o = e[a];
    var s = r + Tl(o, a);
    i += Ir(o, t, n, s, l);
  }
  else if (s = Fc(e), typeof s == "function") for (e = s.call(e), a = 0; !(o = e.next()).done; ) o = o.value, s = r + Tl(o, a++), i += Ir(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function dr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Ir(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function $c(e) {
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
var ye = { current: null }, Tr = { transition: null }, Uc = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: Tr, ReactCurrentOwner: qo };
function pa() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = { map: dr, forEach: function(e, t, n) {
  dr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return dr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return dr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!bo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
F.Component = gn;
F.Fragment = jc;
F.Profiler = Ic;
F.PureComponent = Zo;
F.StrictMode = Pc;
F.Suspense = zc;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uc;
F.act = pa;
F.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = sa({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = qo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (s in t) ca.call(t, s) && !da.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var f = 0; f < s; f++) a[f] = arguments[f + 2];
    r.children = a;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
F.createContext = function(e) {
  return e = { $$typeof: Lc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Tc, _context: e }, e.Consumer = e;
};
F.createElement = fa;
F.createFactory = function(e) {
  var t = fa.bind(null, e);
  return t.type = e, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e) {
  return { $$typeof: Mc, render: e };
};
F.isValidElement = bo;
F.lazy = function(e) {
  return { $$typeof: Oc, _payload: { _status: -1, _result: e }, _init: $c };
};
F.memo = function(e, t) {
  return { $$typeof: Rc, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function(e) {
  var t = Tr.transition;
  Tr.transition = {};
  try {
    e();
  } finally {
    Tr.transition = t;
  }
};
F.unstable_act = pa;
F.useCallback = function(e, t) {
  return ye.current.useCallback(e, t);
};
F.useContext = function(e) {
  return ye.current.useContext(e);
};
F.useDebugValue = function() {
};
F.useDeferredValue = function(e) {
  return ye.current.useDeferredValue(e);
};
F.useEffect = function(e, t) {
  return ye.current.useEffect(e, t);
};
F.useId = function() {
  return ye.current.useId();
};
F.useImperativeHandle = function(e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function(e, t) {
  return ye.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function(e, t) {
  return ye.current.useLayoutEffect(e, t);
};
F.useMemo = function(e, t) {
  return ye.current.useMemo(e, t);
};
F.useReducer = function(e, t, n) {
  return ye.current.useReducer(e, t, n);
};
F.useRef = function(e) {
  return ye.current.useRef(e);
};
F.useState = function(e) {
  return ye.current.useState(e);
};
F.useSyncExternalStore = function(e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function() {
  return ye.current.useTransition();
};
F.version = "18.3.1";
oa.exports = F;
var T = oa.exports;
const Yi = /* @__PURE__ */ Cc(T);
var ma = { exports: {} }, je = {}, ha = { exports: {} }, ya = {};
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
  function t(N, M) {
    var O = N.length;
    N.push(M);
    e: for (; 0 < O; ) {
      var K = O - 1 >>> 1, ne = N[K];
      if (0 < l(ne, M)) N[K] = M, N[O] = ne, O = K;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var M = N[0], O = N.pop();
    if (O !== M) {
      N[0] = O;
      e: for (var K = 0, ne = N.length, ur = ne >>> 1; K < ur; ) {
        var jt = 2 * (K + 1) - 1, Il = N[jt], Pt = jt + 1, cr = N[Pt];
        if (0 > l(Il, O)) Pt < ne && 0 > l(cr, Il) ? (N[K] = cr, N[Pt] = O, K = Pt) : (N[K] = Il, N[jt] = O, K = jt);
        else if (Pt < ne && 0 > l(cr, O)) N[K] = cr, N[Pt] = O, K = Pt;
        else break e;
      }
    }
    return M;
  }
  function l(N, M) {
    var O = N.sortIndex - M.sortIndex;
    return O !== 0 ? O : N.id - M.id;
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
  var s = [], f = [], h = 1, y = null, m = 3, k = !1, _ = !1, v = !1, z = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var M = n(f); M !== null; ) {
      if (M.callback === null) r(f);
      else if (M.startTime <= N) r(f), M.sortIndex = M.expirationTime, t(s, M);
      else break;
      M = n(f);
    }
  }
  function w(N) {
    if (v = !1, p(N), !_) if (n(s) !== null) _ = !0, Oe(C);
    else {
      var M = n(f);
      M !== null && Be(w, M.startTime - N);
    }
  }
  function C(N, M) {
    _ = !1, v && (v = !1, c(g), g = -1), k = !0;
    var O = m;
    try {
      for (p(M), y = n(s); y !== null && (!(y.expirationTime > M) || N && !x()); ) {
        var K = y.callback;
        if (typeof K == "function") {
          y.callback = null, m = y.priorityLevel;
          var ne = K(y.expirationTime <= M);
          M = e.unstable_now(), typeof ne == "function" ? y.callback = ne : y === n(s) && r(s), p(M);
        } else r(s);
        y = n(s);
      }
      if (y !== null) var ur = !0;
      else {
        var jt = n(f);
        jt !== null && Be(w, jt.startTime - M), ur = !1;
      }
      return ur;
    } finally {
      y = null, m = O, k = !1;
    }
  }
  var P = !1, I = null, g = -1, R = 5, L = -1;
  function x() {
    return !(e.unstable_now() - L < R);
  }
  function E() {
    if (I !== null) {
      var N = e.unstable_now();
      L = N;
      var M = !0;
      try {
        M = I(!0, N);
      } finally {
        M ? A() : (P = !1, I = null);
      }
    } else P = !1;
  }
  var A;
  if (typeof d == "function") A = function() {
    d(E);
  };
  else if (typeof MessageChannel < "u") {
    var Q = new MessageChannel(), ae = Q.port2;
    Q.port1.onmessage = E, A = function() {
      ae.postMessage(null);
    };
  } else A = function() {
    z(E, 0);
  };
  function Oe(N) {
    I = N, P || (P = !0, A());
  }
  function Be(N, M) {
    g = z(function() {
      N(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    _ || k || (_ = !0, Oe(C));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(N) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = m;
    }
    var O = m;
    m = M;
    try {
      return N();
    } finally {
      m = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, M) {
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
    var O = m;
    m = N;
    try {
      return M();
    } finally {
      m = O;
    }
  }, e.unstable_scheduleCallback = function(N, M, O) {
    var K = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? K + O : K) : O = K, N) {
      case 1:
        var ne = -1;
        break;
      case 2:
        ne = 250;
        break;
      case 5:
        ne = 1073741823;
        break;
      case 4:
        ne = 1e4;
        break;
      default:
        ne = 5e3;
    }
    return ne = O + ne, N = { id: h++, callback: M, priorityLevel: N, startTime: O, expirationTime: ne, sortIndex: -1 }, O > K ? (N.sortIndex = O, t(f, N), n(s) === null && N === n(f) && (v ? (c(g), g = -1) : v = !0, Be(w, O - K))) : (N.sortIndex = ne, t(s, N), _ || k || (_ = !0, Oe(C))), N;
  }, e.unstable_shouldYield = x, e.unstable_wrapCallback = function(N) {
    var M = m;
    return function() {
      var O = m;
      m = M;
      try {
        return N.apply(this, arguments);
      } finally {
        m = O;
      }
    };
  };
})(ya);
ha.exports = ya;
var Vc = ha.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc = T, Ne = Vc;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ga = /* @__PURE__ */ new Set(), Vn = {};
function Vt(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Vn[e] = t, e = 0; e < t.length; e++) ga.add(t[e]);
}
var tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), no = Object.prototype.hasOwnProperty, Wc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xi = {}, Zi = {};
function Bc(e) {
  return no.call(Zi, e) ? !0 : no.call(Xi, e) ? !1 : Wc.test(e) ? Zi[e] = !0 : (Xi[e] = !0, !1);
}
function Hc(e, t, n, r) {
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
function Gc(e, t, n, r) {
  if (t === null || typeof t > "u" || Hc(e, t, n, r)) return !0;
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
function ge(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  se[e] = new ge(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  se[t] = new ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  se[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  se[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  se[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  se[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  se[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  se[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  se[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ei = /[\-:]([a-z])/g;
function ti(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ei,
    ti
  );
  se[t] = new ge(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ei, ti);
  se[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ei, ti);
  se[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  se[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  se[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ni(e, t, n, r) {
  var l = se.hasOwnProperty(t) ? se[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gc(t, n, l, r) && (n = null), r || l === null ? Bc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fr = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), ri = Symbol.for("react.strict_mode"), ro = Symbol.for("react.profiler"), va = Symbol.for("react.provider"), wa = Symbol.for("react.context"), li = Symbol.for("react.forward_ref"), lo = Symbol.for("react.suspense"), oo = Symbol.for("react.suspense_list"), oi = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), xa = Symbol.for("react.offscreen"), Ji = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object" ? null : (e = Ji && e[Ji] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Z = Object.assign, Ll;
function Pn(e) {
  if (Ll === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ll = t && t[1] || "";
  }
  return `
` + Ll + e;
}
var Ml = !1;
function zl(e, t) {
  if (!e || Ml) return "";
  Ml = !0;
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
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= a);
        break;
      }
    }
  } finally {
    Ml = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Pn(e) : "";
}
function Kc(e) {
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
      return e = zl(e.type, !1), e;
    case 11:
      return e = zl(e.type.render, !1), e;
    case 1:
      return e = zl(e.type, !0), e;
    default:
      return "";
  }
}
function io(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gt:
      return "Fragment";
    case Ht:
      return "Portal";
    case ro:
      return "Profiler";
    case ri:
      return "StrictMode";
    case lo:
      return "Suspense";
    case oo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case wa:
      return (e.displayName || "Context") + ".Consumer";
    case va:
      return (e._context.displayName || "Context") + ".Provider";
    case li:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case oi:
      return t = e.displayName || null, t !== null ? t : io(e.type) || "Memo";
    case st:
      t = e._payload, e = e._init;
      try {
        return io(e(t));
      } catch {
      }
  }
  return null;
}
function Yc(e) {
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
      return io(t);
    case 8:
      return t === ri ? "StrictMode" : "Mode";
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
function kt(e) {
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
function ka(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Xc(e) {
  var t = ka(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function pr(e) {
  e._valueTracker || (e._valueTracker = Xc(e));
}
function Sa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ka(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Vr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function so(e, t) {
  var n = t.checked;
  return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function qi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = kt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function _a(e, t) {
  t = t.checked, t != null && ni(e, "checked", t, !1);
}
function ao(e, t) {
  _a(e, t);
  var n = kt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? uo(e, t.type, n) : t.hasOwnProperty("defaultValue") && uo(e, t.type, kt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function bi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function uo(e, t, n) {
  (t !== "number" || Vr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var In = Array.isArray;
function rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function es(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (In(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: kt(n) };
}
function Ea(e, t) {
  var n = kt(t.value), r = kt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ts(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ca(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ca(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var mr, Na = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (mr = mr || document.createElement("div"), mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mn = {
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
}, Zc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mn).forEach(function(e) {
  Zc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Mn[t] = Mn[e];
  });
});
function ja(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mn.hasOwnProperty(e) && Mn[e] ? ("" + t).trim() : t + "px";
}
function Pa(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = ja(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Jc = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function po(e, t) {
  if (t) {
    if (Jc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function mo(e, t) {
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
var ho = null;
function ii(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var yo = null, ln = null, on = null;
function ns(e) {
  if (e = sr(e)) {
    if (typeof yo != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = yl(t), yo(e.stateNode, e.type, t));
  }
}
function Ia(e) {
  ln ? on ? on.push(e) : on = [e] : ln = e;
}
function Ta() {
  if (ln) {
    var e = ln, t = on;
    if (on = ln = null, ns(e), t) for (e = 0; e < t.length; e++) ns(t[e]);
  }
}
function La(e, t) {
  return e(t);
}
function Ma() {
}
var Rl = !1;
function za(e, t, n) {
  if (Rl) return e(t, n);
  Rl = !0;
  try {
    return La(e, t, n);
  } finally {
    Rl = !1, (ln !== null || on !== null) && (Ma(), Ta());
  }
}
function Wn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var go = !1;
if (tt) try {
  var kn = {};
  Object.defineProperty(kn, "passive", { get: function() {
    go = !0;
  } }), window.addEventListener("test", kn, kn), window.removeEventListener("test", kn, kn);
} catch {
  go = !1;
}
function qc(e, t, n, r, l, o, i, a, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var zn = !1, Qr = null, Wr = !1, vo = null, bc = { onError: function(e) {
  zn = !0, Qr = e;
} };
function ed(e, t, n, r, l, o, i, a, s) {
  zn = !1, Qr = null, qc.apply(bc, arguments);
}
function td(e, t, n, r, l, o, i, a, s) {
  if (ed.apply(this, arguments), zn) {
    if (zn) {
      var f = Qr;
      zn = !1, Qr = null;
    } else throw Error(S(198));
    Wr || (Wr = !0, vo = f);
  }
}
function Qt(e) {
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
function Ra(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function rs(e) {
  if (Qt(e) !== e) throw Error(S(188));
}
function nd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Qt(e), t === null) throw Error(S(188));
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
        if (o === n) return rs(l), e;
        if (o === r) return rs(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
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
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Oa(e) {
  return e = nd(e), e !== null ? Fa(e) : null;
}
function Fa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Da = Ne.unstable_scheduleCallback, ls = Ne.unstable_cancelCallback, rd = Ne.unstable_shouldYield, ld = Ne.unstable_requestPaint, q = Ne.unstable_now, od = Ne.unstable_getCurrentPriorityLevel, si = Ne.unstable_ImmediatePriority, Aa = Ne.unstable_UserBlockingPriority, Br = Ne.unstable_NormalPriority, id = Ne.unstable_LowPriority, $a = Ne.unstable_IdlePriority, fl = null, Ye = null;
function sd(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
    Ye.onCommitFiberRoot(fl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ve = Math.clz32 ? Math.clz32 : cd, ad = Math.log, ud = Math.LN2;
function cd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ad(e) / ud | 0) | 0;
}
var hr = 64, yr = 4194304;
function Tn(e) {
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
function Hr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? r = Tn(a) : (o &= i, o !== 0 && (r = Tn(o)));
  } else i = n & ~l, i !== 0 ? r = Tn(i) : o !== 0 && (r = Tn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ve(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function dd(e, t) {
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
function fd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Ve(o), a = 1 << i, s = l[i];
    s === -1 ? (!(a & n) || a & r) && (l[i] = dd(a, t)) : s <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function wo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ua() {
  var e = hr;
  return hr <<= 1, !(hr & 4194240) && (hr = 64), e;
}
function Ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function or(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ve(t), e[t] = n;
}
function pd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ve(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function ai(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ve(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var $ = 0;
function Va(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Qa, ui, Wa, Ba, Ha, xo = !1, gr = [], pt = null, mt = null, ht = null, Bn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), ut = [], md = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function os(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pt = null;
      break;
    case "dragenter":
    case "dragleave":
      mt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hn.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = sr(t), t !== null && ui(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function hd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return pt = Sn(pt, e, t, n, r, l), !0;
    case "dragenter":
      return mt = Sn(mt, e, t, n, r, l), !0;
    case "mouseover":
      return ht = Sn(ht, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Bn.set(o, Sn(Bn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Hn.set(o, Sn(Hn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Ga(e) {
  var t = Lt(e.target);
  if (t !== null) {
    var n = Qt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ra(n), t !== null) {
          e.blockedOn = t, Ha(e.priority, function() {
            Wa(n);
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
function Lr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ho = r, n.target.dispatchEvent(r), ho = null;
    } else return t = sr(n), t !== null && ui(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function is(e, t, n) {
  Lr(e) && n.delete(t);
}
function yd() {
  xo = !1, pt !== null && Lr(pt) && (pt = null), mt !== null && Lr(mt) && (mt = null), ht !== null && Lr(ht) && (ht = null), Bn.forEach(is), Hn.forEach(is);
}
function _n(e, t) {
  e.blockedOn === t && (e.blockedOn = null, xo || (xo = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, yd)));
}
function Gn(e) {
  function t(l) {
    return _n(l, e);
  }
  if (0 < gr.length) {
    _n(gr[0], e);
    for (var n = 1; n < gr.length; n++) {
      var r = gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (pt !== null && _n(pt, e), mt !== null && _n(mt, e), ht !== null && _n(ht, e), Bn.forEach(t), Hn.forEach(t), n = 0; n < ut.length; n++) r = ut[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && (n = ut[0], n.blockedOn === null); ) Ga(n), n.blockedOn === null && ut.shift();
}
var sn = ot.ReactCurrentBatchConfig, Gr = !0;
function gd(e, t, n, r) {
  var l = $, o = sn.transition;
  sn.transition = null;
  try {
    $ = 1, ci(e, t, n, r);
  } finally {
    $ = l, sn.transition = o;
  }
}
function vd(e, t, n, r) {
  var l = $, o = sn.transition;
  sn.transition = null;
  try {
    $ = 4, ci(e, t, n, r);
  } finally {
    $ = l, sn.transition = o;
  }
}
function ci(e, t, n, r) {
  if (Gr) {
    var l = ko(e, t, n, r);
    if (l === null) Hl(e, t, r, Kr, n), os(e, r);
    else if (hd(l, e, t, n, r)) r.stopPropagation();
    else if (os(e, r), t & 4 && -1 < md.indexOf(e)) {
      for (; l !== null; ) {
        var o = sr(l);
        if (o !== null && Qa(o), o = ko(e, t, n, r), o === null && Hl(e, t, r, Kr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Hl(e, t, r, null, n);
  }
}
var Kr = null;
function ko(e, t, n, r) {
  if (Kr = null, e = ii(r), e = Lt(e), e !== null) if (t = Qt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ra(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Kr = e, null;
}
function Ka(e) {
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
      switch (od()) {
        case si:
          return 1;
        case Aa:
          return 4;
        case Br:
        case id:
          return 16;
        case $a:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null, di = null, Mr = null;
function Ya() {
  if (Mr) return Mr;
  var e, t = di, n = t.length, r, l = "value" in dt ? dt.value : dt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Mr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function zr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vr() {
  return !0;
}
function ss() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vr : ss, this.isPropagationStopped = ss, this;
  }
  return Z(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vr);
  }, persist: function() {
  }, isPersistent: vr }), t;
}
var vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, fi = Pe(vn), ir = Z({}, vn, { view: 0, detail: 0 }), wd = Pe(ir), Fl, Dl, En, pl = Z({}, ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? (Fl = e.screenX - En.screenX, Dl = e.screenY - En.screenY) : Dl = Fl = 0, En = e), Fl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Dl;
} }), as = Pe(pl), xd = Z({}, pl, { dataTransfer: 0 }), kd = Pe(xd), Sd = Z({}, ir, { relatedTarget: 0 }), Al = Pe(Sd), _d = Z({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ed = Pe(_d), Cd = Z({}, vn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Nd = Pe(Cd), jd = Z({}, vn, { data: 0 }), us = Pe(jd), Pd = {
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
}, Id = {
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
}, Td = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ld(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Td[e]) ? !!t[e] : !1;
}
function pi() {
  return Ld;
}
var Md = Z({}, ir, { key: function(e) {
  if (e.key) {
    var t = Pd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Id[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pi, charCode: function(e) {
  return e.type === "keypress" ? zr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), zd = Pe(Md), Rd = Z({}, pl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cs = Pe(Rd), Od = Z({}, ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pi }), Fd = Pe(Od), Dd = Z({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ad = Pe(Dd), $d = Z({}, pl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ud = Pe($d), Vd = [9, 13, 27, 32], mi = tt && "CompositionEvent" in window, Rn = null;
tt && "documentMode" in document && (Rn = document.documentMode);
var Qd = tt && "TextEvent" in window && !Rn, Xa = tt && (!mi || Rn && 8 < Rn && 11 >= Rn), ds = " ", fs = !1;
function Za(e, t) {
  switch (e) {
    case "keyup":
      return Vd.indexOf(t.keyCode) !== -1;
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
function Ja(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function Wd(e, t) {
  switch (e) {
    case "compositionend":
      return Ja(t);
    case "keypress":
      return t.which !== 32 ? null : (fs = !0, ds);
    case "textInput":
      return e = t.data, e === ds && fs ? null : e;
    default:
      return null;
  }
}
function Bd(e, t) {
  if (Kt) return e === "compositionend" || !mi && Za(e, t) ? (e = Ya(), Mr = di = dt = null, Kt = !1, e) : null;
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
      return Xa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Hd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ps(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Hd[e.type] : t === "textarea";
}
function qa(e, t, n, r) {
  Ia(r), t = Yr(t, "onChange"), 0 < t.length && (n = new fi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var On = null, Kn = null;
function Gd(e) {
  uu(e, 0);
}
function ml(e) {
  var t = Zt(e);
  if (Sa(t)) return e;
}
function Kd(e, t) {
  if (e === "change") return t;
}
var ba = !1;
if (tt) {
  var $l;
  if (tt) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var ms = document.createElement("div");
      ms.setAttribute("oninput", "return;"), Ul = typeof ms.oninput == "function";
    }
    $l = Ul;
  } else $l = !1;
  ba = $l && (!document.documentMode || 9 < document.documentMode);
}
function hs() {
  On && (On.detachEvent("onpropertychange", eu), Kn = On = null);
}
function eu(e) {
  if (e.propertyName === "value" && ml(Kn)) {
    var t = [];
    qa(t, Kn, e, ii(e)), za(Gd, t);
  }
}
function Yd(e, t, n) {
  e === "focusin" ? (hs(), On = t, Kn = n, On.attachEvent("onpropertychange", eu)) : e === "focusout" && hs();
}
function Xd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ml(Kn);
}
function Zd(e, t) {
  if (e === "click") return ml(t);
}
function Jd(e, t) {
  if (e === "input" || e === "change") return ml(t);
}
function qd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var We = typeof Object.is == "function" ? Object.is : qd;
function Yn(e, t) {
  if (We(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!no.call(t, l) || !We(e[l], t[l])) return !1;
  }
  return !0;
}
function ys(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gs(e, t) {
  var n = ys(e);
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
    n = ys(n);
  }
}
function tu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? tu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function nu() {
  for (var e = window, t = Vr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vr(e.document);
  }
  return t;
}
function hi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function bd(e) {
  var t = nu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && tu(n.ownerDocument.documentElement, n)) {
    if (r !== null && hi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = gs(n, o);
        var i = gs(
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
var ef = tt && "documentMode" in document && 11 >= document.documentMode, Yt = null, So = null, Fn = null, _o = !1;
function vs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _o || Yt == null || Yt !== Vr(r) || (r = Yt, "selectionStart" in r && hi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fn && Yn(Fn, r) || (Fn = r, r = Yr(So, "onSelect"), 0 < r.length && (t = new fi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yt)));
}
function wr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xt = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") }, Vl = {}, ru = {};
tt && (ru = document.createElement("div").style, "AnimationEvent" in window || (delete Xt.animationend.animation, delete Xt.animationiteration.animation, delete Xt.animationstart.animation), "TransitionEvent" in window || delete Xt.transitionend.transition);
function hl(e) {
  if (Vl[e]) return Vl[e];
  if (!Xt[e]) return e;
  var t = Xt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ru) return Vl[e] = t[n];
  return e;
}
var lu = hl("animationend"), ou = hl("animationiteration"), iu = hl("animationstart"), su = hl("transitionend"), au = /* @__PURE__ */ new Map(), ws = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function _t(e, t) {
  au.set(e, t), Vt(t, [e]);
}
for (var Ql = 0; Ql < ws.length; Ql++) {
  var Wl = ws[Ql], tf = Wl.toLowerCase(), nf = Wl[0].toUpperCase() + Wl.slice(1);
  _t(tf, "on" + nf);
}
_t(lu, "onAnimationEnd");
_t(ou, "onAnimationIteration");
_t(iu, "onAnimationStart");
_t("dblclick", "onDoubleClick");
_t("focusin", "onFocus");
_t("focusout", "onBlur");
_t(su, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function xs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, td(r, t, void 0, e), e.currentTarget = null;
}
function uu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], s = a.instance, f = a.currentTarget;
        if (a = a.listener, s !== o && l.isPropagationStopped()) break e;
        xs(l, a, f), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], s = a.instance, f = a.currentTarget, a = a.listener, s !== o && l.isPropagationStopped()) break e;
        xs(l, a, f), o = s;
      }
    }
  }
  if (Wr) throw e = vo, Wr = !1, vo = null, e;
}
function W(e, t) {
  var n = t[Po];
  n === void 0 && (n = t[Po] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (cu(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), cu(n, e, r, t);
}
var xr = "_reactListening" + Math.random().toString(36).slice(2);
function Xn(e) {
  if (!e[xr]) {
    e[xr] = !0, ga.forEach(function(n) {
      n !== "selectionchange" && (rf.has(n) || Bl(n, !1, e), Bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xr] || (t[xr] = !0, Bl("selectionchange", !1, t));
  }
}
function cu(e, t, n, r) {
  switch (Ka(t)) {
    case 1:
      var l = gd;
      break;
    case 4:
      l = vd;
      break;
    default:
      l = ci;
  }
  n = l.bind(null, t, n, e), l = void 0, !go || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Hl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var a = r.stateNode.containerInfo;
      if (a === l || a.nodeType === 8 && a.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; a !== null; ) {
        if (i = Lt(a), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  za(function() {
    var f = o, h = ii(n), y = [];
    e: {
      var m = au.get(e);
      if (m !== void 0) {
        var k = fi, _ = e;
        switch (e) {
          case "keypress":
            if (zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = zd;
            break;
          case "focusin":
            _ = "focus", k = Al;
            break;
          case "focusout":
            _ = "blur", k = Al;
            break;
          case "beforeblur":
          case "afterblur":
            k = Al;
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
            k = as;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = kd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Fd;
            break;
          case lu:
          case ou:
          case iu:
            k = Ed;
            break;
          case su:
            k = Ad;
            break;
          case "scroll":
            k = wd;
            break;
          case "wheel":
            k = Ud;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Nd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = cs;
        }
        var v = (t & 4) !== 0, z = !v && e === "scroll", c = v ? m !== null ? m + "Capture" : null : m;
        v = [];
        for (var d = f, p; d !== null; ) {
          p = d;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, c !== null && (w = Wn(d, c), w != null && v.push(Zn(d, w, p)))), z) break;
          d = d.return;
        }
        0 < v.length && (m = new k(m, _, null, n, h), y.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", m && n !== ho && (_ = n.relatedTarget || n.fromElement) && (Lt(_) || _[nt])) break e;
        if ((k || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, k ? (_ = n.relatedTarget || n.toElement, k = f, _ = _ ? Lt(_) : null, _ !== null && (z = Qt(_), _ !== z || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (k = null, _ = f), k !== _)) {
          if (v = as, w = "onMouseLeave", c = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (v = cs, w = "onPointerLeave", c = "onPointerEnter", d = "pointer"), z = k == null ? m : Zt(k), p = _ == null ? m : Zt(_), m = new v(w, d + "leave", k, n, h), m.target = z, m.relatedTarget = p, w = null, Lt(h) === f && (v = new v(c, d + "enter", _, n, h), v.target = p, v.relatedTarget = z, w = v), z = w, k && _) t: {
            for (v = k, c = _, d = 0, p = v; p; p = Bt(p)) d++;
            for (p = 0, w = c; w; w = Bt(w)) p++;
            for (; 0 < d - p; ) v = Bt(v), d--;
            for (; 0 < p - d; ) c = Bt(c), p--;
            for (; d--; ) {
              if (v === c || c !== null && v === c.alternate) break t;
              v = Bt(v), c = Bt(c);
            }
            v = null;
          }
          else v = null;
          k !== null && ks(y, m, k, v, !1), _ !== null && z !== null && ks(y, z, _, v, !0);
        }
      }
      e: {
        if (m = f ? Zt(f) : window, k = m.nodeName && m.nodeName.toLowerCase(), k === "select" || k === "input" && m.type === "file") var C = Kd;
        else if (ps(m)) if (ba) C = Jd;
        else {
          C = Xd;
          var P = Yd;
        }
        else (k = m.nodeName) && k.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = Zd);
        if (C && (C = C(e, f))) {
          qa(y, C, n, h);
          break e;
        }
        P && P(e, m, f), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && uo(m, "number", m.value);
      }
      switch (P = f ? Zt(f) : window, e) {
        case "focusin":
          (ps(P) || P.contentEditable === "true") && (Yt = P, So = f, Fn = null);
          break;
        case "focusout":
          Fn = So = Yt = null;
          break;
        case "mousedown":
          _o = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          _o = !1, vs(y, n, h);
          break;
        case "selectionchange":
          if (ef) break;
        case "keydown":
        case "keyup":
          vs(y, n, h);
      }
      var I;
      if (mi) e: {
        switch (e) {
          case "compositionstart":
            var g = "onCompositionStart";
            break e;
          case "compositionend":
            g = "onCompositionEnd";
            break e;
          case "compositionupdate":
            g = "onCompositionUpdate";
            break e;
        }
        g = void 0;
      }
      else Kt ? Za(e, n) && (g = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (g = "onCompositionStart");
      g && (Xa && n.locale !== "ko" && (Kt || g !== "onCompositionStart" ? g === "onCompositionEnd" && Kt && (I = Ya()) : (dt = h, di = "value" in dt ? dt.value : dt.textContent, Kt = !0)), P = Yr(f, g), 0 < P.length && (g = new us(g, e, null, n, h), y.push({ event: g, listeners: P }), I ? g.data = I : (I = Ja(n), I !== null && (g.data = I)))), (I = Qd ? Wd(e, n) : Bd(e, n)) && (f = Yr(f, "onBeforeInput"), 0 < f.length && (h = new us("onBeforeInput", "beforeinput", null, n, h), y.push({ event: h, listeners: f }), h.data = I));
    }
    uu(y, t);
  });
}
function Zn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Wn(e, n), o != null && r.unshift(Zn(e, o, l)), o = Wn(e, t), o != null && r.push(Zn(e, o, l))), e = e.return;
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
function ks(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, s = a.alternate, f = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 && f !== null && (a = f, l ? (s = Wn(n, o), s != null && i.unshift(Zn(n, s, a))) : l || (s = Wn(n, o), s != null && i.push(Zn(n, s, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var lf = /\r\n?/g, of = /\u0000|\uFFFD/g;
function Ss(e) {
  return (typeof e == "string" ? e : "" + e).replace(lf, `
`).replace(of, "");
}
function kr(e, t, n) {
  if (t = Ss(t), Ss(e) !== t && n) throw Error(S(425));
}
function Xr() {
}
var Eo = null, Co = null;
function No(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var jo = typeof setTimeout == "function" ? setTimeout : void 0, sf = typeof clearTimeout == "function" ? clearTimeout : void 0, _s = typeof Promise == "function" ? Promise : void 0, af = typeof queueMicrotask == "function" ? queueMicrotask : typeof _s < "u" ? function(e) {
  return _s.resolve(null).then(e).catch(uf);
} : jo;
function uf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Gl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Gn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Gn(t);
}
function yt(e) {
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
function Es(e) {
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
var wn = Math.random().toString(36).slice(2), Ke = "__reactFiber$" + wn, Jn = "__reactProps$" + wn, nt = "__reactContainer$" + wn, Po = "__reactEvents$" + wn, cf = "__reactListeners$" + wn, df = "__reactHandles$" + wn;
function Lt(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[nt] || n[Ke]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Es(e); e !== null; ) {
        if (n = e[Ke]) return n;
        e = Es(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function sr(e) {
  return e = e[Ke] || e[nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function yl(e) {
  return e[Jn] || null;
}
var Io = [], Jt = -1;
function Et(e) {
  return { current: e };
}
function H(e) {
  0 > Jt || (e.current = Io[Jt], Io[Jt] = null, Jt--);
}
function V(e, t) {
  Jt++, Io[Jt] = e.current, e.current = t;
}
var St = {}, fe = Et(St), xe = Et(!1), Ft = St;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ke(e) {
  return e = e.childContextTypes, e != null;
}
function Zr() {
  H(xe), H(fe);
}
function Cs(e, t, n) {
  if (fe.current !== St) throw Error(S(168));
  V(fe, t), V(xe, n);
}
function du(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Yc(e) || "Unknown", l));
  return Z({}, n, r);
}
function Jr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || St, Ft = fe.current, V(fe, e), V(xe, xe.current), !0;
}
function Ns(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = du(e, t, Ft), r.__reactInternalMemoizedMergedChildContext = e, H(xe), H(fe), V(fe, e)) : H(xe), V(xe, n);
}
var Je = null, gl = !1, Kl = !1;
function fu(e) {
  Je === null ? Je = [e] : Je.push(e);
}
function ff(e) {
  gl = !0, fu(e);
}
function Ct() {
  if (!Kl && Je !== null) {
    Kl = !0;
    var e = 0, t = $;
    try {
      var n = Je;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Je = null, gl = !1;
    } catch (l) {
      throw Je !== null && (Je = Je.slice(e + 1)), Da(si, Ct), l;
    } finally {
      $ = t, Kl = !1;
    }
  }
  return null;
}
var qt = [], bt = 0, qr = null, br = 0, Ie = [], Te = 0, Dt = null, qe = 1, be = "";
function It(e, t) {
  qt[bt++] = br, qt[bt++] = qr, qr = e, br = t;
}
function pu(e, t, n) {
  Ie[Te++] = qe, Ie[Te++] = be, Ie[Te++] = Dt, Dt = e;
  var r = qe;
  e = be;
  var l = 32 - Ve(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Ve(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, qe = 1 << 32 - Ve(t) + l | n << l | r, be = o + e;
  } else qe = 1 << o | n << l | r, be = e;
}
function yi(e) {
  e.return !== null && (It(e, 1), pu(e, 1, 0));
}
function gi(e) {
  for (; e === qr; ) qr = qt[--bt], qt[bt] = null, br = qt[--bt], qt[bt] = null;
  for (; e === Dt; ) Dt = Ie[--Te], Ie[Te] = null, be = Ie[--Te], Ie[Te] = null, qe = Ie[--Te], Ie[Te] = null;
}
var Ce = null, Ee = null, G = !1, Ue = null;
function mu(e, t) {
  var n = Le(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function js(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ce = e, Ee = yt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ce = e, Ee = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dt !== null ? { id: qe, overflow: be } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Le(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ce = e, Ee = null, !0) : !1;
    default:
      return !1;
  }
}
function To(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Lo(e) {
  if (G) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!js(e, t)) {
        if (To(e)) throw Error(S(418));
        t = yt(n.nextSibling);
        var r = Ce;
        t && js(e, t) ? mu(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, Ce = e);
      }
    } else {
      if (To(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, G = !1, Ce = e;
    }
  }
}
function Ps(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ce = e;
}
function Sr(e) {
  if (e !== Ce) return !1;
  if (!G) return Ps(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !No(e.type, e.memoizedProps)), t && (t = Ee)) {
    if (To(e)) throw hu(), Error(S(418));
    for (; t; ) mu(e, t), t = yt(t.nextSibling);
  }
  if (Ps(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = yt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ce ? yt(e.stateNode.nextSibling) : null;
  return !0;
}
function hu() {
  for (var e = Ee; e; ) e = yt(e.nextSibling);
}
function fn() {
  Ee = Ce = null, G = !1;
}
function vi(e) {
  Ue === null ? Ue = [e] : Ue.push(e);
}
var pf = ot.ReactCurrentBatchConfig;
function Cn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var a = l.refs;
        i === null ? delete a[o] : a[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function _r(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Is(e) {
  var t = e._init;
  return t(e._payload);
}
function yu(e) {
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
    return c = xt(c, d), c.index = 0, c.sibling = null, c;
  }
  function o(c, d, p) {
    return c.index = p, e ? (p = c.alternate, p !== null ? (p = p.index, p < d ? (c.flags |= 2, d) : p) : (c.flags |= 2, d)) : (c.flags |= 1048576, d);
  }
  function i(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function a(c, d, p, w) {
    return d === null || d.tag !== 6 ? (d = eo(p, c.mode, w), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function s(c, d, p, w) {
    var C = p.type;
    return C === Gt ? h(c, d, p.props.children, w, p.key) : d !== null && (d.elementType === C || typeof C == "object" && C !== null && C.$$typeof === st && Is(C) === d.type) ? (w = l(d, p.props), w.ref = Cn(c, d, p), w.return = c, w) : (w = Ur(p.type, p.key, p.props, null, c.mode, w), w.ref = Cn(c, d, p), w.return = c, w);
  }
  function f(c, d, p, w) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = to(p, c.mode, w), d.return = c, d) : (d = l(d, p.children || []), d.return = c, d);
  }
  function h(c, d, p, w, C) {
    return d === null || d.tag !== 7 ? (d = Ot(p, c.mode, w, C), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function y(c, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = eo("" + d, c.mode, p), d.return = c, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fr:
          return p = Ur(d.type, d.key, d.props, null, c.mode, p), p.ref = Cn(c, null, d), p.return = c, p;
        case Ht:
          return d = to(d, c.mode, p), d.return = c, d;
        case st:
          var w = d._init;
          return y(c, w(d._payload), p);
      }
      if (In(d) || xn(d)) return d = Ot(d, c.mode, p, null), d.return = c, d;
      _r(c, d);
    }
    return null;
  }
  function m(c, d, p, w) {
    var C = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return C !== null ? null : a(c, d, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fr:
          return p.key === C ? s(c, d, p, w) : null;
        case Ht:
          return p.key === C ? f(c, d, p, w) : null;
        case st:
          return C = p._init, m(
            c,
            d,
            C(p._payload),
            w
          );
      }
      if (In(p) || xn(p)) return C !== null ? null : h(c, d, p, w, null);
      _r(c, p);
    }
    return null;
  }
  function k(c, d, p, w, C) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return c = c.get(p) || null, a(d, c, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case fr:
          return c = c.get(w.key === null ? p : w.key) || null, s(d, c, w, C);
        case Ht:
          return c = c.get(w.key === null ? p : w.key) || null, f(d, c, w, C);
        case st:
          var P = w._init;
          return k(c, d, p, P(w._payload), C);
      }
      if (In(w) || xn(w)) return c = c.get(p) || null, h(d, c, w, C, null);
      _r(d, w);
    }
    return null;
  }
  function _(c, d, p, w) {
    for (var C = null, P = null, I = d, g = d = 0, R = null; I !== null && g < p.length; g++) {
      I.index > g ? (R = I, I = null) : R = I.sibling;
      var L = m(c, I, p[g], w);
      if (L === null) {
        I === null && (I = R);
        break;
      }
      e && I && L.alternate === null && t(c, I), d = o(L, d, g), P === null ? C = L : P.sibling = L, P = L, I = R;
    }
    if (g === p.length) return n(c, I), G && It(c, g), C;
    if (I === null) {
      for (; g < p.length; g++) I = y(c, p[g], w), I !== null && (d = o(I, d, g), P === null ? C = I : P.sibling = I, P = I);
      return G && It(c, g), C;
    }
    for (I = r(c, I); g < p.length; g++) R = k(I, c, g, p[g], w), R !== null && (e && R.alternate !== null && I.delete(R.key === null ? g : R.key), d = o(R, d, g), P === null ? C = R : P.sibling = R, P = R);
    return e && I.forEach(function(x) {
      return t(c, x);
    }), G && It(c, g), C;
  }
  function v(c, d, p, w) {
    var C = xn(p);
    if (typeof C != "function") throw Error(S(150));
    if (p = C.call(p), p == null) throw Error(S(151));
    for (var P = C = null, I = d, g = d = 0, R = null, L = p.next(); I !== null && !L.done; g++, L = p.next()) {
      I.index > g ? (R = I, I = null) : R = I.sibling;
      var x = m(c, I, L.value, w);
      if (x === null) {
        I === null && (I = R);
        break;
      }
      e && I && x.alternate === null && t(c, I), d = o(x, d, g), P === null ? C = x : P.sibling = x, P = x, I = R;
    }
    if (L.done) return n(
      c,
      I
    ), G && It(c, g), C;
    if (I === null) {
      for (; !L.done; g++, L = p.next()) L = y(c, L.value, w), L !== null && (d = o(L, d, g), P === null ? C = L : P.sibling = L, P = L);
      return G && It(c, g), C;
    }
    for (I = r(c, I); !L.done; g++, L = p.next()) L = k(I, c, g, L.value, w), L !== null && (e && L.alternate !== null && I.delete(L.key === null ? g : L.key), d = o(L, d, g), P === null ? C = L : P.sibling = L, P = L);
    return e && I.forEach(function(E) {
      return t(c, E);
    }), G && It(c, g), C;
  }
  function z(c, d, p, w) {
    if (typeof p == "object" && p !== null && p.type === Gt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fr:
          e: {
            for (var C = p.key, P = d; P !== null; ) {
              if (P.key === C) {
                if (C = p.type, C === Gt) {
                  if (P.tag === 7) {
                    n(c, P.sibling), d = l(P, p.props.children), d.return = c, c = d;
                    break e;
                  }
                } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === st && Is(C) === P.type) {
                  n(c, P.sibling), d = l(P, p.props), d.ref = Cn(c, P, p), d.return = c, c = d;
                  break e;
                }
                n(c, P);
                break;
              } else t(c, P);
              P = P.sibling;
            }
            p.type === Gt ? (d = Ot(p.props.children, c.mode, w, p.key), d.return = c, c = d) : (w = Ur(p.type, p.key, p.props, null, c.mode, w), w.ref = Cn(c, d, p), w.return = c, c = w);
          }
          return i(c);
        case Ht:
          e: {
            for (P = p.key; d !== null; ) {
              if (d.key === P) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(c, d.sibling), d = l(d, p.children || []), d.return = c, c = d;
                break e;
              } else {
                n(c, d);
                break;
              }
              else t(c, d);
              d = d.sibling;
            }
            d = to(p, c.mode, w), d.return = c, c = d;
          }
          return i(c);
        case st:
          return P = p._init, z(c, d, P(p._payload), w);
      }
      if (In(p)) return _(c, d, p, w);
      if (xn(p)) return v(c, d, p, w);
      _r(c, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(c, d.sibling), d = l(d, p), d.return = c, c = d) : (n(c, d), d = eo(p, c.mode, w), d.return = c, c = d), i(c)) : n(c, d);
  }
  return z;
}
var pn = yu(!0), gu = yu(!1), el = Et(null), tl = null, en = null, wi = null;
function xi() {
  wi = en = tl = null;
}
function ki(e) {
  var t = el.current;
  H(el), e._currentValue = t;
}
function Mo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function an(e, t) {
  tl = e, wi = en = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (we = !0), e.firstContext = null);
}
function ze(e) {
  var t = e._currentValue;
  if (wi !== e) if (e = { context: e, memoizedValue: t, next: null }, en === null) {
    if (tl === null) throw Error(S(308));
    en = e, tl.dependencies = { lanes: 0, firstContext: e };
  } else en = en.next = e;
  return t;
}
var Mt = null;
function Si(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function vu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Si(t)) : (n.next = l.next, l.next = n), t.interleaved = n, rt(e, r);
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function _i(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function wu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function et(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, D & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, rt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Si(r)) : (t.next = l.next, l.next = t), r.interleaved = t, rt(e, n);
}
function Rr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ai(e, n);
  }
}
function Ts(e, t) {
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
function nl(e, t, n, r) {
  var l = e.updateQueue;
  at = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a, f = s.next;
    s.next = null, i === null ? o = f : i.next = f, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, a = h.lastBaseUpdate, a !== i && (a === null ? h.firstBaseUpdate = f : a.next = f, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var y = l.baseState;
    i = 0, h = f = s = null, a = o;
    do {
      var m = a.lane, k = a.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: k,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var _ = e, v = a;
          switch (m = t, k = n, v.tag) {
            case 1:
              if (_ = v.payload, typeof _ == "function") {
                y = _.call(k, y, m);
                break e;
              }
              y = _;
              break e;
            case 3:
              _.flags = _.flags & -65537 | 128;
            case 0:
              if (_ = v.payload, m = typeof _ == "function" ? _.call(k, y, m) : _, m == null) break e;
              y = Z({}, y, m);
              break e;
            case 2:
              at = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [a] : m.push(a));
      } else k = { eventTime: k, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, h === null ? (f = h = k, s = y) : h = h.next = k, i |= m;
      if (a = a.next, a === null) {
        if (a = l.shared.pending, a === null) break;
        m = a, a = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = y), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    $t |= i, e.lanes = i, e.memoizedState = y;
  }
}
function Ls(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var ar = {}, Xe = Et(ar), qn = Et(ar), bn = Et(ar);
function zt(e) {
  if (e === ar) throw Error(S(174));
  return e;
}
function Ei(e, t) {
  switch (V(bn, t), V(qn, e), V(Xe, ar), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = fo(t, e);
  }
  H(Xe), V(Xe, t);
}
function mn() {
  H(Xe), H(qn), H(bn);
}
function xu(e) {
  zt(bn.current);
  var t = zt(Xe.current), n = fo(t, e.type);
  t !== n && (V(qn, e), V(Xe, n));
}
function Ci(e) {
  qn.current === e && (H(Xe), H(qn));
}
var Y = Et(0);
function rl(e) {
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
var Yl = [];
function Ni() {
  for (var e = 0; e < Yl.length; e++) Yl[e]._workInProgressVersionPrimary = null;
  Yl.length = 0;
}
var Or = ot.ReactCurrentDispatcher, Xl = ot.ReactCurrentBatchConfig, At = 0, X = null, ee = null, re = null, ll = !1, Dn = !1, er = 0, mf = 0;
function ue() {
  throw Error(S(321));
}
function ji(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!We(e[n], t[n])) return !1;
  return !0;
}
function Pi(e, t, n, r, l, o) {
  if (At = o, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Or.current = e === null || e.memoizedState === null ? vf : wf, e = n(r, l), Dn) {
    o = 0;
    do {
      if (Dn = !1, er = 0, 25 <= o) throw Error(S(301));
      o += 1, re = ee = null, t.updateQueue = null, Or.current = xf, e = n(r, l);
    } while (Dn);
  }
  if (Or.current = ol, t = ee !== null && ee.next !== null, At = 0, re = ee = X = null, ll = !1, t) throw Error(S(300));
  return e;
}
function Ii() {
  var e = er !== 0;
  return er = 0, e;
}
function Ge() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return re === null ? X.memoizedState = re = e : re = re.next = e, re;
}
function Re() {
  if (ee === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = re === null ? X.memoizedState : re.next;
  if (t !== null) re = t, ee = e;
  else {
    if (e === null) throw Error(S(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, re === null ? X.memoizedState = re = e : re = re.next = e;
  }
  return re;
}
function tr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zl(e) {
  var t = Re(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ee, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var a = i = null, s = null, f = o;
    do {
      var h = f.lane;
      if ((At & h) === h) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var y = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (a = s = y, i = r) : s = s.next = y, X.lanes |= h, $t |= h;
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? i = r : s.next = a, We(r, t.memoizedState) || (we = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, X.lanes |= o, $t |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Jl(e) {
  var t = Re(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    We(o, t.memoizedState) || (we = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function ku() {
}
function Su(e, t) {
  var n = X, r = Re(), l = t(), o = !We(r.memoizedState, l);
  if (o && (r.memoizedState = l, we = !0), r = r.queue, Ti(Cu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || re !== null && re.memoizedState.tag & 1) {
    if (n.flags |= 2048, nr(9, Eu.bind(null, n, r, l, t), void 0, null), le === null) throw Error(S(349));
    At & 30 || _u(n, t, l);
  }
  return l;
}
function _u(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Eu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Nu(t) && ju(e);
}
function Cu(e, t, n) {
  return n(function() {
    Nu(t) && ju(e);
  });
}
function Nu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !We(e, n);
  } catch {
    return !0;
  }
}
function ju(e) {
  var t = rt(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function Ms(e) {
  var t = Ge();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: tr, lastRenderedState: e }, t.queue = e, e = e.dispatch = gf.bind(null, X, e), [t.memoizedState, e];
}
function nr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Pu() {
  return Re().memoizedState;
}
function Fr(e, t, n, r) {
  var l = Ge();
  X.flags |= e, l.memoizedState = nr(1 | t, n, void 0, r === void 0 ? null : r);
}
function vl(e, t, n, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var i = ee.memoizedState;
    if (o = i.destroy, r !== null && ji(r, i.deps)) {
      l.memoizedState = nr(t, n, o, r);
      return;
    }
  }
  X.flags |= e, l.memoizedState = nr(1 | t, n, o, r);
}
function zs(e, t) {
  return Fr(8390656, 8, e, t);
}
function Ti(e, t) {
  return vl(2048, 8, e, t);
}
function Iu(e, t) {
  return vl(4, 2, e, t);
}
function Tu(e, t) {
  return vl(4, 4, e, t);
}
function Lu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Mu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vl(4, 4, Lu.bind(null, t, e), n);
}
function Li() {
}
function zu(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ji(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ru(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ji(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ou(e, t, n) {
  return At & 21 ? (We(n, t) || (n = Ua(), X.lanes |= n, $t |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, we = !0), e.memoizedState = n);
}
function hf(e, t) {
  var n = $;
  $ = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Xl.transition;
  Xl.transition = {};
  try {
    e(!1), t();
  } finally {
    $ = n, Xl.transition = r;
  }
}
function Fu() {
  return Re().memoizedState;
}
function yf(e, t, n) {
  var r = wt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Du(e)) Au(t, n);
  else if (n = vu(e, t, n, r), n !== null) {
    var l = he();
    Qe(n, e, r, l), $u(n, t, r);
  }
}
function gf(e, t, n) {
  var r = wt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Du(e)) Au(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, a = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = a, We(a, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, Si(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = vu(e, t, l, r), n !== null && (l = he(), Qe(n, e, r, l), $u(n, t, r));
  }
}
function Du(e) {
  var t = e.alternate;
  return e === X || t !== null && t === X;
}
function Au(e, t) {
  Dn = ll = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function $u(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ai(e, n);
  }
}
var ol = { readContext: ze, useCallback: ue, useContext: ue, useEffect: ue, useImperativeHandle: ue, useInsertionEffect: ue, useLayoutEffect: ue, useMemo: ue, useReducer: ue, useRef: ue, useState: ue, useDebugValue: ue, useDeferredValue: ue, useTransition: ue, useMutableSource: ue, useSyncExternalStore: ue, useId: ue, unstable_isNewReconciler: !1 }, vf = { readContext: ze, useCallback: function(e, t) {
  return Ge().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ze, useEffect: zs, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fr(
    4194308,
    4,
    Lu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ge();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ge();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = yf.bind(null, X, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ge();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ms, useDebugValue: Li, useDeferredValue: function(e) {
  return Ge().memoizedState = e;
}, useTransition: function() {
  var e = Ms(!1), t = e[0];
  return e = hf.bind(null, e[1]), Ge().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = X, l = Ge();
  if (G) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), le === null) throw Error(S(349));
    At & 30 || _u(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, zs(Cu.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, nr(9, Eu.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ge(), t = le.identifierPrefix;
  if (G) {
    var n = be, r = qe;
    n = (r & ~(1 << 32 - Ve(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = er++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = mf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wf = {
  readContext: ze,
  useCallback: zu,
  useContext: ze,
  useEffect: Ti,
  useImperativeHandle: Mu,
  useInsertionEffect: Iu,
  useLayoutEffect: Tu,
  useMemo: Ru,
  useReducer: Zl,
  useRef: Pu,
  useState: function() {
    return Zl(tr);
  },
  useDebugValue: Li,
  useDeferredValue: function(e) {
    var t = Re();
    return Ou(t, ee.memoizedState, e);
  },
  useTransition: function() {
    var e = Zl(tr)[0], t = Re().memoizedState;
    return [e, t];
  },
  useMutableSource: ku,
  useSyncExternalStore: Su,
  useId: Fu,
  unstable_isNewReconciler: !1
}, xf = { readContext: ze, useCallback: zu, useContext: ze, useEffect: Ti, useImperativeHandle: Mu, useInsertionEffect: Iu, useLayoutEffect: Tu, useMemo: Ru, useReducer: Jl, useRef: Pu, useState: function() {
  return Jl(tr);
}, useDebugValue: Li, useDeferredValue: function(e) {
  var t = Re();
  return ee === null ? t.memoizedState = e : Ou(t, ee.memoizedState, e);
}, useTransition: function() {
  var e = Jl(tr)[0], t = Re().memoizedState;
  return [e, t];
}, useMutableSource: ku, useSyncExternalStore: Su, useId: Fu, unstable_isNewReconciler: !1 };
function Ae(e, t) {
  if (e && e.defaultProps) {
    t = Z({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Qt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = he(), l = wt(e), o = et(r, l);
  o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (Qe(t, e, l, r), Rr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = he(), l = wt(e), o = et(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (Qe(t, e, l, r), Rr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = he(), r = wt(e), l = et(n, r);
  l.tag = 2, t != null && (l.callback = t), t = gt(e, l, r), t !== null && (Qe(t, e, r, n), Rr(t, e, r));
} };
function Rs(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Yn(n, r) || !Yn(l, o) : !0;
}
function Uu(e, t, n) {
  var r = !1, l = St, o = t.contextType;
  return typeof o == "object" && o !== null ? o = ze(o) : (l = ke(t) ? Ft : fe.current, r = t.contextTypes, o = (r = r != null) ? dn(e, l) : St), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = wl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Os(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && wl.enqueueReplaceState(t, t.state, null);
}
function Ro(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, _i(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = ze(o) : (o = ke(t) ? Ft : fe.current, l.context = dn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (zo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && wl.enqueueReplaceState(l, l.state, null), nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Kc(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Oo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var kf = typeof WeakMap == "function" ? WeakMap : Map;
function Vu(e, t, n) {
  n = et(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    sl || (sl = !0, Ho = r), Oo(e, t);
  }, n;
}
function Qu(e, t, n) {
  n = et(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Oo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Oo(e, t), typeof r != "function" && (vt === null ? vt = /* @__PURE__ */ new Set([this]) : vt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Fs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new kf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Of.bind(null, e, t, n), t.then(e, e));
}
function Ds(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function As(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = et(-1, 1), t.tag = 2, gt(n, t, 1))), n.lanes |= 1), e);
}
var Sf = ot.ReactCurrentOwner, we = !1;
function pe(e, t, n, r) {
  t.child = e === null ? gu(t, null, n, r) : pn(t, e.child, n, r);
}
function $s(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return an(t, l), r = Pi(e, t, n, r, o, l), n = Ii(), e !== null && !we ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, lt(e, t, l)) : (G && n && yi(t), t.flags |= 1, pe(e, t, r, l), t.child);
}
function Us(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !$i(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Wu(e, t, o, r, l)) : (e = Ur(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Yn, n(i, r) && e.ref === t.ref) return lt(e, t, l);
  }
  return t.flags |= 1, e = xt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wu(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yn(o, r) && e.ref === t.ref) if (we = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (we = !0);
    else return t.lanes = e.lanes, lt(e, t, l);
  }
  return Fo(e, t, n, r, l);
}
function Bu(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, V(nn, _e), _e |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, V(nn, _e), _e |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, V(nn, _e), _e |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, V(nn, _e), _e |= r;
  return pe(e, t, l, n), t.child;
}
function Hu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Fo(e, t, n, r, l) {
  var o = ke(n) ? Ft : fe.current;
  return o = dn(t, o), an(t, l), n = Pi(e, t, n, r, o, l), r = Ii(), e !== null && !we ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, lt(e, t, l)) : (G && r && yi(t), t.flags |= 1, pe(e, t, n, l), t.child);
}
function Vs(e, t, n, r, l) {
  if (ke(n)) {
    var o = !0;
    Jr(t);
  } else o = !1;
  if (an(t, l), t.stateNode === null) Dr(e, t), Uu(t, n, r), Ro(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var s = i.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = ze(f) : (f = ke(n) ? Ft : fe.current, f = dn(t, f));
    var h = n.getDerivedStateFromProps, y = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || s !== f) && Os(t, i, r, f), at = !1;
    var m = t.memoizedState;
    i.state = m, nl(t, r, i, l), s = t.memoizedState, a !== r || m !== s || xe.current || at ? (typeof h == "function" && (zo(t, n, h, r), s = t.memoizedState), (a = at || Rs(t, n, a, r, m, s, f)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = f, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, wu(e, t), a = t.memoizedProps, f = t.type === t.elementType ? a : Ae(t.type, a), i.props = f, y = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = ze(s) : (s = ke(n) ? Ft : fe.current, s = dn(t, s));
    var k = n.getDerivedStateFromProps;
    (h = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== y || m !== s) && Os(t, i, r, s), at = !1, m = t.memoizedState, i.state = m, nl(t, r, i, l);
    var _ = t.memoizedState;
    a !== y || m !== _ || xe.current || at ? (typeof k == "function" && (zo(t, n, k, r), _ = t.memoizedState), (f = at || Rs(t, n, f, r, m, _, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, _, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, _, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = _), i.props = r, i.state = _, i.context = s, r = f) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Do(e, t, n, r, o, l);
}
function Do(e, t, n, r, l, o) {
  Hu(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ns(t, n, !1), lt(e, t, o);
  r = t.stateNode, Sf.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = pn(t, e.child, null, o), t.child = pn(t, null, a, o)) : pe(e, t, a, o), t.memoizedState = r.state, l && Ns(t, n, !0), t.child;
}
function Gu(e) {
  var t = e.stateNode;
  t.pendingContext ? Cs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Cs(e, t.context, !1), Ei(e, t.containerInfo);
}
function Qs(e, t, n, r, l) {
  return fn(), vi(l), t.flags |= 256, pe(e, t, n, r), t.child;
}
var Ao = { dehydrated: null, treeContext: null, retryLane: 0 };
function $o(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ku(e, t, n) {
  var r = t.pendingProps, l = Y.current, o = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), V(Y, l & 1), e === null)
    return Lo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Sl(i, r, 0, null), e = Ot(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = $o(n), t.memoizedState = Ao, e) : Mi(t, i));
  if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return _f(e, t, i, r, a, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, a = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = xt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? o = xt(a, o) : (o = Ot(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? $o(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ao, r;
  }
  return o = e.child, e = o.sibling, r = xt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Mi(e, t) {
  return t = Sl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Er(e, t, n, r) {
  return r !== null && vi(r), pn(t, e.child, null, n), e = Mi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function _f(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ql(Error(S(422))), Er(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Sl({ mode: "visible", children: r.children }, l, 0, null), o = Ot(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && pn(t, e.child, null, i), t.child.memoizedState = $o(i), t.memoizedState = Ao, o);
  if (!(t.mode & 1)) return Er(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(S(419)), r = ql(o, r, void 0), Er(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, we || a) {
    if (r = le, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, rt(e, l), Qe(r, e, l, -1));
    }
    return Ai(), r = ql(Error(S(421))), Er(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ff.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ee = yt(l.nextSibling), Ce = t, G = !0, Ue = null, e !== null && (Ie[Te++] = qe, Ie[Te++] = be, Ie[Te++] = Dt, qe = e.id, be = e.overflow, Dt = t), t = Mi(t, r.children), t.flags |= 4096, t);
}
function Ws(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mo(e.return, t, n);
}
function bl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Yu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (pe(e, t, r.children, n), r = Y.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ws(e, n, t);
      else if (e.tag === 19) Ws(e, n, t);
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
  if (V(Y, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && rl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), bl(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && rl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      bl(t, !0, n, null, o);
      break;
    case "together":
      bl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Dr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function lt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), $t |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = xt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ef(e, t, n) {
  switch (t.tag) {
    case 3:
      Gu(t), fn();
      break;
    case 5:
      xu(t);
      break;
    case 1:
      ke(t.type) && Jr(t);
      break;
    case 4:
      Ei(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      V(el, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (V(Y, Y.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ku(e, t, n) : (V(Y, Y.current & 1), e = lt(e, t, n), e !== null ? e.sibling : null);
      V(Y, Y.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Yu(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), V(Y, Y.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Bu(e, t, n);
  }
  return lt(e, t, n);
}
var Xu, Uo, Zu, Ju;
Xu = function(e, t) {
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
Uo = function() {
};
Zu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, zt(Xe.current);
    var o = null;
    switch (n) {
      case "input":
        l = so(e, l), r = so(e, r), o = [];
        break;
      case "select":
        l = Z({}, l, { value: void 0 }), r = Z({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = co(e, l), r = co(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xr);
    }
    po(n, r);
    var i;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var a = l[f];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Vn.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (a = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== a && (s != null || a != null)) if (f === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && a[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (o = o || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Vn.hasOwnProperty(f) ? (s != null && f === "onScroll" && W("scroll", e), o || a === s || (o = [])) : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Ju = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nn(e, t) {
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
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Cf(e, t, n) {
  var r = t.pendingProps;
  switch (gi(t), t.tag) {
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
      return ce(t), null;
    case 1:
      return ke(t.type) && Zr(), ce(t), null;
    case 3:
      return r = t.stateNode, mn(), H(xe), H(fe), Ni(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ue !== null && (Yo(Ue), Ue = null))), Uo(e, t), ce(t), null;
    case 5:
      Ci(t);
      var l = zt(bn.current);
      if (n = t.type, e !== null && t.stateNode != null) Zu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ce(t), null;
        }
        if (e = zt(Xe.current), Sr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ke] = t, r[Jn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) W(Ln[l], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W(
                "error",
                r
              ), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              qi(r, o), W("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, W("invalid", r);
              break;
            case "textarea":
              es(r, o), W("invalid", r);
          }
          po(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var a = o[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && kr(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && kr(
              r.textContent,
              a,
              e
            ), l = ["children", "" + a]) : Vn.hasOwnProperty(i) && a != null && i === "onScroll" && W("scroll", r);
          }
          switch (n) {
            case "input":
              pr(r), bi(r, o, !0);
              break;
            case "textarea":
              pr(r), ts(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Xr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ca(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ke] = t, e[Jn] = r, Xu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = mo(n, r), n) {
              case "dialog":
                W("cancel", e), W("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) W(Ln[l], e);
                l = r;
                break;
              case "source":
                W("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                W(
                  "error",
                  e
                ), W("load", e), l = r;
                break;
              case "details":
                W("toggle", e), l = r;
                break;
              case "input":
                qi(e, r), l = so(e, r), W("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Z({}, r, { value: void 0 }), W("invalid", e);
                break;
              case "textarea":
                es(e, r), l = co(e, r), W("invalid", e);
                break;
              default:
                l = r;
            }
            po(n, l), a = l;
            for (o in a) if (a.hasOwnProperty(o)) {
              var s = a[o];
              o === "style" ? Pa(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Na(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Qn(e, s) : typeof s == "number" && Qn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Vn.hasOwnProperty(o) ? s != null && o === "onScroll" && W("scroll", e) : s != null && ni(e, o, s, i));
            }
            switch (n) {
              case "input":
                pr(e), bi(e, r, !1);
                break;
              case "textarea":
                pr(e), ts(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
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
                typeof l.onClick == "function" && (e.onclick = Xr);
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
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) Ju(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = zt(bn.current), zt(Xe.current), Sr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ke] = t, (o = r.nodeValue !== n) && (e = Ce, e !== null)) switch (e.tag) {
            case 3:
              kr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && kr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ke] = t, t.stateNode = r;
      }
      return ce(t), null;
    case 13:
      if (H(Y), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && Ee !== null && t.mode & 1 && !(t.flags & 128)) hu(), fn(), t.flags |= 98560, o = !1;
        else if (o = Sr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[Ke] = t;
          } else fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ce(t), o = !1;
        } else Ue !== null && (Yo(Ue), Ue = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Y.current & 1 ? te === 0 && (te = 3) : Ai())), t.updateQueue !== null && (t.flags |= 4), ce(t), null);
    case 4:
      return mn(), Uo(e, t), e === null && Xn(t.stateNode.containerInfo), ce(t), null;
    case 10:
      return ki(t.type._context), ce(t), null;
    case 17:
      return ke(t.type) && Zr(), ce(t), null;
    case 19:
      if (H(Y), o = t.memoizedState, o === null) return ce(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Nn(o, !1);
      else {
        if (te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = rl(e), i !== null) {
            for (t.flags |= 128, Nn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return V(Y, Y.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && q() > yn && (t.flags |= 128, r = !0, Nn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = rl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Nn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !G) return ce(t), null;
        } else 2 * q() - o.renderingStartTime > yn && n !== 1073741824 && (t.flags |= 128, r = !0, Nn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = q(), t.sibling = null, n = Y.current, V(Y, r ? n & 1 | 2 : n & 1), t) : (ce(t), null);
    case 22:
    case 23:
      return Di(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? _e & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Nf(e, t) {
  switch (gi(t), t.tag) {
    case 1:
      return ke(t.type) && Zr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mn(), H(xe), H(fe), Ni(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ci(t), null;
    case 13:
      if (H(Y), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(Y), null;
    case 4:
      return mn(), null;
    case 10:
      return ki(t.type._context), null;
    case 22:
    case 23:
      return Di(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cr = !1, de = !1, jf = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    J(e, t, r);
  }
  else n.current = null;
}
function Vo(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Bs = !1;
function Pf(e, t) {
  if (Eo = Gr, e = nu(), hi(e)) {
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
        var i = 0, a = -1, s = -1, f = 0, h = 0, y = e, m = null;
        t: for (; ; ) {
          for (var k; y !== n || l !== 0 && y.nodeType !== 3 || (a = i + l), y !== o || r !== 0 && y.nodeType !== 3 || (s = i + r), y.nodeType === 3 && (i += y.nodeValue.length), (k = y.firstChild) !== null; )
            m = y, y = k;
          for (; ; ) {
            if (y === e) break t;
            if (m === n && ++f === l && (a = i), m === o && ++h === r && (s = i), (k = y.nextSibling) !== null) break;
            y = m, m = y.parentNode;
          }
          y = k;
        }
        n = a === -1 || s === -1 ? null : { start: a, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Co = { focusedElem: e, selectionRange: n }, Gr = !1, j = t; j !== null; ) if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
  else for (; j !== null; ) {
    t = j;
    try {
      var _ = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (_ !== null) {
            var v = _.memoizedProps, z = _.memoizedState, c = t.stateNode, d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ae(t.type, v), z);
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
          throw Error(S(163));
      }
    } catch (w) {
      J(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, j = e;
      break;
    }
    j = t.return;
  }
  return _ = Bs, Bs = !1, _;
}
function An(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Vo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function xl(e, t) {
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
function Qo(e) {
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
function qu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, qu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ke], delete t[Jn], delete t[Po], delete t[cf], delete t[df])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function bu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || bu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Wo(e, t, n), e = e.sibling; e !== null; ) Wo(e, t, n), e = e.sibling;
}
function Bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Bo(e, t, n), e = e.sibling; e !== null; ) Bo(e, t, n), e = e.sibling;
}
var oe = null, $e = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) ec(e, t, n), n = n.sibling;
}
function ec(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
    Ye.onCommitFiberUnmount(fl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      de || tn(n, t);
    case 6:
      var r = oe, l = $e;
      oe = null, it(e, t, n), oe = r, $e = l, oe !== null && ($e ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null && ($e ? (e = oe, n = n.stateNode, e.nodeType === 8 ? Gl(e.parentNode, n) : e.nodeType === 1 && Gl(e, n), Gn(e)) : Gl(oe, n.stateNode));
      break;
    case 4:
      r = oe, l = $e, oe = n.stateNode.containerInfo, $e = !0, it(e, t, n), oe = r, $e = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!de && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Vo(n, t, i), l = l.next;
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (!de && (tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        J(n, t, a);
      }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (de = (r = de) || n.memoizedState !== null, it(e, t, n), de = r) : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function Gs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jf()), t.forEach(function(r) {
      var l = Df.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Fe(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            oe = a.stateNode, $e = !1;
            break e;
          case 3:
            oe = a.stateNode.containerInfo, $e = !0;
            break e;
          case 4:
            oe = a.stateNode.containerInfo, $e = !0;
            break e;
        }
        a = a.return;
      }
      if (oe === null) throw Error(S(160));
      ec(o, i, l), oe = null, $e = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (f) {
      J(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) tc(t, e), t = t.sibling;
}
function tc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Fe(t, e), He(e), r & 4) {
        try {
          An(3, e, e.return), xl(3, e);
        } catch (v) {
          J(e, e.return, v);
        }
        try {
          An(5, e, e.return);
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 1:
      Fe(t, e), He(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (Fe(t, e), He(e), r & 512 && n !== null && tn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (v) {
          J(e, e.return, v);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, a = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          a === "input" && o.type === "radio" && o.name != null && _a(l, o), mo(a, i);
          var f = mo(a, o);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], y = s[i + 1];
            h === "style" ? Pa(l, y) : h === "dangerouslySetInnerHTML" ? Na(l, y) : h === "children" ? Qn(l, y) : ni(l, h, y, f);
          }
          switch (a) {
            case "input":
              ao(l, o);
              break;
            case "textarea":
              Ea(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var k = o.value;
              k != null ? rn(l, !!o.multiple, k, !1) : m !== !!o.multiple && (o.defaultValue != null ? rn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Jn] = o;
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 6:
      if (Fe(t, e), He(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Fe(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Gn(t.containerInfo);
      } catch (v) {
        J(e, e.return, v);
      }
      break;
    case 4:
      Fe(t, e), He(e);
      break;
    case 13:
      Fe(t, e), He(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Oi = q())), r & 4 && Gs(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (de = (f = de) || h, Fe(t, e), de = f) : Fe(t, e), He(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && e.mode & 1) for (j = e, h = e.child; h !== null; ) {
          for (y = j = h; j !== null; ) {
            switch (m = j, k = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                An(4, m, m.return);
                break;
              case 1:
                tn(m, m.return);
                var _ = m.stateNode;
                if (typeof _.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, _.props = t.memoizedProps, _.state = t.memoizedState, _.componentWillUnmount();
                  } catch (v) {
                    J(r, n, v);
                  }
                }
                break;
              case 5:
                tn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Ys(y);
                  continue;
                }
            }
            k !== null ? (k.return = m, j = k) : Ys(y);
          }
          h = h.sibling;
        }
        e: for (h = null, y = e; ; ) {
          if (y.tag === 5) {
            if (h === null) {
              h = y;
              try {
                l = y.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = y.stateNode, s = y.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = ja("display", i));
              } catch (v) {
                J(e, e.return, v);
              }
            }
          } else if (y.tag === 6) {
            if (h === null) try {
              y.stateNode.nodeValue = f ? "" : y.memoizedProps;
            } catch (v) {
              J(e, e.return, v);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            h === y && (h = null), y = y.return;
          }
          h === y && (h = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      Fe(t, e), He(e), r & 4 && Gs(e);
      break;
    case 21:
      break;
    default:
      Fe(
        t,
        e
      ), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qn(l, ""), r.flags &= -33);
          var o = Hs(e);
          Bo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = Hs(e);
          Wo(e, a, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      J(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function If(e, t, n) {
  j = e, nc(e);
}
function nc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Cr;
      if (!i) {
        var a = l.alternate, s = a !== null && a.memoizedState !== null || de;
        a = Cr;
        var f = de;
        if (Cr = i, (de = s) && !f) for (j = l; j !== null; ) i = j, s = i.child, i.tag === 22 && i.memoizedState !== null ? Xs(l) : s !== null ? (s.return = i, j = s) : Xs(l);
        for (; o !== null; ) j = o, nc(o), o = o.sibling;
        j = l, Cr = a, de = f;
      }
      Ks(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, j = o) : Ks(e);
  }
}
function Ks(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            de || xl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !de) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ae(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Ls(t, o, r);
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
              Ls(t, i, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
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
              var f = t.alternate;
              if (f !== null) {
                var h = f.memoizedState;
                if (h !== null) {
                  var y = h.dehydrated;
                  y !== null && Gn(y);
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
            throw Error(S(163));
        }
        de || t.flags & 512 && Qo(t);
      } catch (m) {
        J(t, t.return, m);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function Ys(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function Xs(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xl(4, t);
          } catch (s) {
            J(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              J(t, l, s);
            }
          }
          var o = t.return;
          try {
            Qo(t);
          } catch (s) {
            J(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Qo(t);
          } catch (s) {
            J(t, i, s);
          }
      }
    } catch (s) {
      J(t, t.return, s);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, j = a;
      break;
    }
    j = t.return;
  }
}
var Tf = Math.ceil, il = ot.ReactCurrentDispatcher, zi = ot.ReactCurrentOwner, Me = ot.ReactCurrentBatchConfig, D = 0, le = null, b = null, ie = 0, _e = 0, nn = Et(0), te = 0, rr = null, $t = 0, kl = 0, Ri = 0, $n = null, ve = null, Oi = 0, yn = 1 / 0, Ze = null, sl = !1, Ho = null, vt = null, Nr = !1, ft = null, al = 0, Un = 0, Go = null, Ar = -1, $r = 0;
function he() {
  return D & 6 ? q() : Ar !== -1 ? Ar : Ar = q();
}
function wt(e) {
  return e.mode & 1 ? D & 2 && ie !== 0 ? ie & -ie : pf.transition !== null ? ($r === 0 && ($r = Ua()), $r) : (e = $, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ka(e.type)), e) : 1;
}
function Qe(e, t, n, r) {
  if (50 < Un) throw Un = 0, Go = null, Error(S(185));
  or(e, n, r), (!(D & 2) || e !== le) && (e === le && (!(D & 2) && (kl |= n), te === 4 && ct(e, ie)), Se(e, r), n === 1 && D === 0 && !(t.mode & 1) && (yn = q() + 500, gl && Ct()));
}
function Se(e, t) {
  var n = e.callbackNode;
  fd(e, t);
  var r = Hr(e, e === le ? ie : 0);
  if (r === 0) n !== null && ls(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ls(n), t === 1) e.tag === 0 ? ff(Zs.bind(null, e)) : fu(Zs.bind(null, e)), af(function() {
      !(D & 6) && Ct();
    }), n = null;
    else {
      switch (Va(r)) {
        case 1:
          n = si;
          break;
        case 4:
          n = Aa;
          break;
        case 16:
          n = Br;
          break;
        case 536870912:
          n = $a;
          break;
        default:
          n = Br;
      }
      n = cc(n, rc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function rc(e, t) {
  if (Ar = -1, $r = 0, D & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = Hr(e, e === le ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ul(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = oc();
    (le !== e || ie !== t) && (Ze = null, yn = q() + 500, Rt(e, t));
    do
      try {
        zf();
        break;
      } catch (a) {
        lc(e, a);
      }
    while (!0);
    xi(), il.current = o, D = l, b !== null ? t = 0 : (le = null, ie = 0, t = te);
  }
  if (t !== 0) {
    if (t === 2 && (l = wo(e), l !== 0 && (r = l, t = Ko(e, l))), t === 1) throw n = rr, Rt(e, 0), ct(e, r), Se(e, q()), n;
    if (t === 6) ct(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Lf(l) && (t = ul(e, r), t === 2 && (o = wo(e), o !== 0 && (r = o, t = Ko(e, o))), t === 1)) throw n = rr, Rt(e, 0), ct(e, r), Se(e, q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Tt(e, ve, Ze);
          break;
        case 3:
          if (ct(e, r), (r & 130023424) === r && (t = Oi + 500 - q(), 10 < t)) {
            if (Hr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              he(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = jo(Tt.bind(null, e, ve, Ze), t);
            break;
          }
          Tt(e, ve, Ze);
          break;
        case 4:
          if (ct(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ve(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Tf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = jo(Tt.bind(null, e, ve, Ze), r);
            break;
          }
          Tt(e, ve, Ze);
          break;
        case 5:
          Tt(e, ve, Ze);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Se(e, q()), e.callbackNode === n ? rc.bind(null, e) : null;
}
function Ko(e, t) {
  var n = $n;
  return e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256), e = ul(e, t), e !== 2 && (t = ve, ve = n, t !== null && Yo(t)), e;
}
function Yo(e) {
  ve === null ? ve = e : ve.push.apply(ve, e);
}
function Lf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!We(o(), l)) return !1;
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
function ct(e, t) {
  for (t &= ~Ri, t &= ~kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ve(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Zs(e) {
  if (D & 6) throw Error(S(327));
  un();
  var t = Hr(e, 0);
  if (!(t & 1)) return Se(e, q()), null;
  var n = ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wo(e);
    r !== 0 && (t = r, n = Ko(e, r));
  }
  if (n === 1) throw n = rr, Rt(e, 0), ct(e, t), Se(e, q()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tt(e, ve, Ze), Se(e, q()), null;
}
function Fi(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (yn = q() + 500, gl && Ct());
  }
}
function Ut(e) {
  ft !== null && ft.tag === 0 && !(D & 6) && un();
  var t = D;
  D |= 1;
  var n = Me.transition, r = $;
  try {
    if (Me.transition = null, $ = 1, e) return e();
  } finally {
    $ = r, Me.transition = n, D = t, !(D & 6) && Ct();
  }
}
function Di() {
  _e = nn.current, H(nn);
}
function Rt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, sf(n)), b !== null) for (n = b.return; n !== null; ) {
    var r = n;
    switch (gi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Zr();
        break;
      case 3:
        mn(), H(xe), H(fe), Ni();
        break;
      case 5:
        Ci(r);
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
        ki(r.type._context);
        break;
      case 22:
      case 23:
        Di();
    }
    n = n.return;
  }
  if (le = e, b = e = xt(e.current, null), ie = _e = t, te = 0, rr = null, Ri = kl = $t = 0, ve = $n = null, Mt !== null) {
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
function lc(e, t) {
  do {
    var n = b;
    try {
      if (xi(), Or.current = ol, ll) {
        for (var r = X.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ll = !1;
      }
      if (At = 0, re = ee = X = null, Dn = !1, er = 0, zi.current = null, n === null || n.return === null) {
        te = 1, rr = t, b = null;
        break;
      }
      e: {
        var o = e, i = n.return, a = n, s = t;
        if (t = ie, a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, h = a, y = h.tag;
          if (!(h.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var k = Ds(i);
          if (k !== null) {
            k.flags &= -257, As(k, i, a, o, t), k.mode & 1 && Fs(o, f, t), t = k, s = f;
            var _ = t.updateQueue;
            if (_ === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(s), t.updateQueue = v;
            } else _.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Fs(o, f, t), Ai();
              break e;
            }
            s = Error(S(426));
          }
        } else if (G && a.mode & 1) {
          var z = Ds(i);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256), As(z, i, a, o, t), vi(hn(s, a));
            break e;
          }
        }
        o = s = hn(s, a), te !== 4 && (te = 2), $n === null ? $n = [o] : $n.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var c = Vu(o, s, t);
              Ts(o, c);
              break e;
            case 1:
              a = s;
              var d = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (vt === null || !vt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = Qu(o, a, t);
                Ts(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      sc(n);
    } catch (C) {
      t = C, b === n && n !== null && (b = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function oc() {
  var e = il.current;
  return il.current = ol, e === null ? ol : e;
}
function Ai() {
  (te === 0 || te === 3 || te === 2) && (te = 4), le === null || !($t & 268435455) && !(kl & 268435455) || ct(le, ie);
}
function ul(e, t) {
  var n = D;
  D |= 2;
  var r = oc();
  (le !== e || ie !== t) && (Ze = null, Rt(e, t));
  do
    try {
      Mf();
      break;
    } catch (l) {
      lc(e, l);
    }
  while (!0);
  if (xi(), D = n, il.current = r, b !== null) throw Error(S(261));
  return le = null, ie = 0, te;
}
function Mf() {
  for (; b !== null; ) ic(b);
}
function zf() {
  for (; b !== null && !rd(); ) ic(b);
}
function ic(e) {
  var t = uc(e.alternate, e, _e);
  e.memoizedProps = e.pendingProps, t === null ? sc(e) : b = t, zi.current = null;
}
function sc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Nf(n, t), n !== null) {
        n.flags &= 32767, b = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        te = 6, b = null;
        return;
      }
    } else if (n = Cf(n, t, _e), n !== null) {
      b = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      b = t;
      return;
    }
    b = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function Tt(e, t, n) {
  var r = $, l = Me.transition;
  try {
    Me.transition = null, $ = 1, Rf(e, t, n, r);
  } finally {
    Me.transition = l, $ = r;
  }
  return null;
}
function Rf(e, t, n, r) {
  do
    un();
  while (ft !== null);
  if (D & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (pd(e, o), e === le && (b = le = null, ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Nr || (Nr = !0, cc(Br, function() {
    return un(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Me.transition, Me.transition = null;
    var i = $;
    $ = 1;
    var a = D;
    D |= 4, zi.current = null, Pf(e, n), tc(n, e), bd(Co), Gr = !!Eo, Co = Eo = null, e.current = n, If(n), ld(), D = a, $ = i, Me.transition = o;
  } else e.current = n;
  if (Nr && (Nr = !1, ft = e, al = l), o = e.pendingLanes, o === 0 && (vt = null), sd(n.stateNode), Se(e, q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (sl) throw sl = !1, e = Ho, Ho = null, e;
  return al & 1 && e.tag !== 0 && un(), o = e.pendingLanes, o & 1 ? e === Go ? Un++ : (Un = 0, Go = e) : Un = 0, Ct(), null;
}
function un() {
  if (ft !== null) {
    var e = Va(al), t = Me.transition, n = $;
    try {
      if (Me.transition = null, $ = 16 > e ? 16 : e, ft === null) var r = !1;
      else {
        if (e = ft, ft = null, al = 0, D & 6) throw Error(S(331));
        var l = D;
        for (D |= 4, j = e.current; j !== null; ) {
          var o = j, i = o.child;
          if (j.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var f = a[s];
                for (j = f; j !== null; ) {
                  var h = j;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      An(8, h, o);
                  }
                  var y = h.child;
                  if (y !== null) y.return = h, j = y;
                  else for (; j !== null; ) {
                    h = j;
                    var m = h.sibling, k = h.return;
                    if (qu(h), h === f) {
                      j = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = k, j = m;
                      break;
                    }
                    j = k;
                  }
                }
              }
              var _ = o.alternate;
              if (_ !== null) {
                var v = _.child;
                if (v !== null) {
                  _.child = null;
                  do {
                    var z = v.sibling;
                    v.sibling = null, v = z;
                  } while (v !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, j = i;
          else e: for (; j !== null; ) {
            if (o = j, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                An(9, o, o.return);
            }
            var c = o.sibling;
            if (c !== null) {
              c.return = o.return, j = c;
              break e;
            }
            j = o.return;
          }
        }
        var d = e.current;
        for (j = d; j !== null; ) {
          i = j;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, j = p;
          else e: for (i = d; j !== null; ) {
            if (a = j, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  xl(9, a);
              }
            } catch (C) {
              J(a, a.return, C);
            }
            if (a === i) {
              j = null;
              break e;
            }
            var w = a.sibling;
            if (w !== null) {
              w.return = a.return, j = w;
              break e;
            }
            j = a.return;
          }
        }
        if (D = l, Ct(), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
          Ye.onPostCommitFiberRoot(fl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      $ = n, Me.transition = t;
    }
  }
  return !1;
}
function Js(e, t, n) {
  t = hn(n, t), t = Vu(e, t, 1), e = gt(e, t, 1), t = he(), e !== null && (or(e, 1, t), Se(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) Js(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Js(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vt === null || !vt.has(r))) {
        e = hn(n, e), e = Qu(t, e, 1), t = gt(t, e, 1), e = he(), t !== null && (or(t, 1, e), Se(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Of(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = he(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ie & n) === n && (te === 4 || te === 3 && (ie & 130023424) === ie && 500 > q() - Oi ? Rt(e, 0) : Ri |= n), Se(e, t);
}
function ac(e, t) {
  t === 0 && (e.mode & 1 ? (t = yr, yr <<= 1, !(yr & 130023424) && (yr = 4194304)) : t = 1);
  var n = he();
  e = rt(e, t), e !== null && (or(e, t, n), Se(e, n));
}
function Ff(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ac(e, n);
}
function Df(e, t) {
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
      throw Error(S(314));
  }
  r !== null && r.delete(t), ac(e, n);
}
var uc;
uc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || xe.current) we = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return we = !1, Ef(e, t, n);
    we = !!(e.flags & 131072);
  }
  else we = !1, G && t.flags & 1048576 && pu(t, br, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Dr(e, t), e = t.pendingProps;
      var l = dn(t, fe.current);
      an(t, n), l = Pi(null, t, r, e, l, n);
      var o = Ii();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (o = !0, Jr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, _i(t), l.updater = wl, t.stateNode = l, l._reactInternals = t, Ro(t, r, e, n), t = Do(null, t, r, !0, o, n)) : (t.tag = 0, G && o && yi(t), pe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Dr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = $f(r), e = Ae(r, e), l) {
          case 0:
            t = Fo(null, t, r, e, n);
            break e;
          case 1:
            t = Vs(null, t, r, e, n);
            break e;
          case 11:
            t = $s(null, t, r, e, n);
            break e;
          case 14:
            t = Us(null, t, r, Ae(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ae(r, l), Fo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ae(r, l), Vs(e, t, r, l, n);
    case 3:
      e: {
        if (Gu(t), e === null) throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, wu(e, t), nl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = hn(Error(S(423)), t), t = Qs(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = hn(Error(S(424)), t), t = Qs(e, t, r, n, l);
          break e;
        } else for (Ee = yt(t.stateNode.containerInfo.firstChild), Ce = t, G = !0, Ue = null, n = gu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fn(), r === l) {
            t = lt(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return xu(t), e === null && Lo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, No(r, l) ? i = null : o !== null && No(r, o) && (t.flags |= 32), Hu(e, t), pe(e, t, i, n), t.child;
    case 6:
      return e === null && Lo(t), null;
    case 13:
      return Ku(e, t, n);
    case 4:
      return Ei(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pn(t, null, r, n) : pe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ae(r, l), $s(e, t, r, l, n);
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, V(el, r._currentValue), r._currentValue = i, o !== null) if (We(o.value, i)) {
          if (o.children === l.children && !xe.current) {
            t = lt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var a = o.dependencies;
          if (a !== null) {
            i = o.child;
            for (var s = a.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = et(-1, n & -n), s.tag = 2;
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var h = f.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), f.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Mo(
                  o.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(S(341));
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Mo(i, n, t), i = o.sibling;
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
        pe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, an(t, n), l = ze(l), r = r(l), t.flags |= 1, pe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ae(r, t.pendingProps), l = Ae(r.type, l), Us(e, t, r, l, n);
    case 15:
      return Wu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ae(r, l), Dr(e, t), t.tag = 1, ke(r) ? (e = !0, Jr(t)) : e = !1, an(t, n), Uu(t, r, l), Ro(t, r, l, n), Do(null, t, r, !0, e, n);
    case 19:
      return Yu(e, t, n);
    case 22:
      return Bu(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function cc(e, t) {
  return Da(e, t);
}
function Af(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Le(e, t, n, r) {
  return new Af(e, t, n, r);
}
function $i(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function $f(e) {
  if (typeof e == "function") return $i(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === li) return 11;
    if (e === oi) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Le(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ur(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") $i(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Gt:
      return Ot(n.children, l, o, t);
    case ri:
      i = 8, l |= 8;
      break;
    case ro:
      return e = Le(12, n, t, l | 2), e.elementType = ro, e.lanes = o, e;
    case lo:
      return e = Le(13, n, t, l), e.elementType = lo, e.lanes = o, e;
    case oo:
      return e = Le(19, n, t, l), e.elementType = oo, e.lanes = o, e;
    case xa:
      return Sl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case va:
          i = 10;
          break e;
        case wa:
          i = 9;
          break e;
        case li:
          i = 11;
          break e;
        case oi:
          i = 14;
          break e;
        case st:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = Le(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Ot(e, t, n, r) {
  return e = Le(7, e, r, t), e.lanes = n, e;
}
function Sl(e, t, n, r) {
  return e = Le(22, e, r, t), e.elementType = xa, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function eo(e, t, n) {
  return e = Le(6, e, null, t), e.lanes = n, e;
}
function to(e, t, n) {
  return t = Le(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Uf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ol(0), this.expirationTimes = Ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ol(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ui(e, t, n, r, l, o, i, a, s) {
  return e = new Uf(e, t, n, a, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Le(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _i(o), e;
}
function Vf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function dc(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Qt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return du(e, n, t);
  }
  return t;
}
function fc(e, t, n, r, l, o, i, a, s) {
  return e = Ui(n, r, !0, e, l, o, i, a, s), e.context = dc(null), n = e.current, r = he(), l = wt(n), o = et(r, l), o.callback = t ?? null, gt(n, o, l), e.current.lanes = l, or(e, l, r), Se(e, r), e;
}
function _l(e, t, n, r) {
  var l = t.current, o = he(), i = wt(l);
  return n = dc(n), t.context === null ? t.context = n : t.pendingContext = n, t = et(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gt(l, t, i), e !== null && (Qe(e, l, i, o), Rr(e, l, i)), i;
}
function cl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vi(e, t) {
  qs(e, t), (e = e.alternate) && qs(e, t);
}
function Qf() {
  return null;
}
var pc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Qi(e) {
  this._internalRoot = e;
}
El.prototype.render = Qi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  _l(e, t, null, null);
};
El.prototype.unmount = Qi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function() {
      _l(null, e, null, null);
    }), t[nt] = null;
  }
};
function El(e) {
  this._internalRoot = e;
}
El.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ba();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++) ;
    ut.splice(n, 0, e), n === 0 && Ga(e);
  }
};
function Wi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Cl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function bs() {
}
function Wf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = cl(i);
        o.call(f);
      };
    }
    var i = fc(t, r, e, 0, null, !1, !1, "", bs);
    return e._reactRootContainer = i, e[nt] = i.current, Xn(e.nodeType === 8 ? e.parentNode : e), Ut(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var f = cl(s);
      a.call(f);
    };
  }
  var s = Ui(e, 0, !1, null, null, !1, !1, "", bs);
  return e._reactRootContainer = s, e[nt] = s.current, Xn(e.nodeType === 8 ? e.parentNode : e), Ut(function() {
    _l(t, s, n, r);
  }), s;
}
function Nl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function() {
        var s = cl(i);
        a.call(s);
      };
    }
    _l(t, i, e, l);
  } else i = Wf(n, t, e, l, r);
  return cl(i);
}
Qa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tn(t.pendingLanes);
        n !== 0 && (ai(t, n | 1), Se(t, q()), !(D & 6) && (yn = q() + 500, Ct()));
      }
      break;
    case 13:
      Ut(function() {
        var r = rt(e, 1);
        if (r !== null) {
          var l = he();
          Qe(r, e, 1, l);
        }
      }), Vi(e, 1);
  }
};
ui = function(e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = he();
      Qe(t, e, 134217728, n);
    }
    Vi(e, 134217728);
  }
};
Wa = function(e) {
  if (e.tag === 13) {
    var t = wt(e), n = rt(e, t);
    if (n !== null) {
      var r = he();
      Qe(n, e, t, r);
    }
    Vi(e, t);
  }
};
Ba = function() {
  return $;
};
Ha = function(e, t) {
  var n = $;
  try {
    return $ = e, t();
  } finally {
    $ = n;
  }
};
yo = function(e, t, n) {
  switch (t) {
    case "input":
      if (ao(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(S(90));
            Sa(r), ao(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ea(e, n);
      break;
    case "select":
      t = n.value, t != null && rn(e, !!n.multiple, t, !1);
  }
};
La = Fi;
Ma = Ut;
var Bf = { usingClientEntryPoint: !1, Events: [sr, Zt, yl, Ia, Ta, Fi] }, jn = { findFiberByHostInstance: Lt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hf = { bundleType: jn.bundleType, version: jn.version, rendererPackageName: jn.rendererPackageName, rendererConfig: jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Oa(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jn.findFiberByHostInstance || Qf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber) try {
    fl = jr.inject(Hf), Ye = jr;
  } catch {
  }
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bf;
je.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wi(t)) throw Error(S(200));
  return Vf(e, t, null, n);
};
je.createRoot = function(e, t) {
  if (!Wi(e)) throw Error(S(299));
  var n = !1, r = "", l = pc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ui(e, 1, !1, null, null, n, !1, r, l), e[nt] = t.current, Xn(e.nodeType === 8 ? e.parentNode : e), new Qi(t);
};
je.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Oa(t), e = e === null ? null : e.stateNode, e;
};
je.flushSync = function(e) {
  return Ut(e);
};
je.hydrate = function(e, t, n) {
  if (!Cl(t)) throw Error(S(200));
  return Nl(null, e, t, !0, n);
};
je.hydrateRoot = function(e, t, n) {
  if (!Wi(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = pc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = fc(t, null, e, 1, n ?? null, l, !1, o, i), e[nt] = t.current, Xn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new El(t);
};
je.render = function(e, t, n) {
  if (!Cl(t)) throw Error(S(200));
  return Nl(null, e, t, !1, n);
};
je.unmountComponentAtNode = function(e) {
  if (!Cl(e)) throw Error(S(40));
  return e._reactRootContainer ? (Ut(function() {
    Nl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[nt] = null;
    });
  }), !0) : !1;
};
je.unstable_batchedUpdates = Fi;
je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Cl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Nl(e, t, n, !1, r);
};
je.version = "18.3.1-next-f1338f8080-20240426";
function mc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mc);
    } catch (e) {
      console.error(e);
    }
}
mc(), ma.exports = je;
var Gf = ma.exports, hc, ea = Gf;
hc = ea.createRoot, ea.hydrateRoot;
window.api = B;
const ta = async (e = 0, t = 30, n = "") => {
  const r = await B.fetchApi(
    `/meld-nexus/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}`
  );
  if (!r.ok)
    throw new Error(`Failed to fetch images: ${r.statusText}`);
  return await r.json();
}, Kf = async (e, t) => {
  const n = `/meld-nexus/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await B.fetchApi(n);
  return r.ok ? await r.json() : [];
}, Yf = async () => {
  const e = await B.fetchApi("/meld-nexus/search-suggestions");
  return e.ok ? await e.json() : [];
}, yc = async () => {
  const e = await B.fetchApi("/meld-nexus/settings");
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
}, Xf = async (e, t) => {
  if (!(await B.fetchApi("/meld-nexus/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Zf = async (e, t) => {
  if (!(await B.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Jf = async (e, t = 12) => {
  const n = await B.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, qf = async (e) => {
  const t = await B.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, bf = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await B.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, ep = async (e, t = !0) => {
  const n = await B.fetchApi("/meld-nexus/bulk-delete", {
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
}, gc = async (e) => {
  const t = await B.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, tp = async (e, t) => {
  const n = await B.fetchApi(
    `/meld-nexus/folders?type=${e}&path=${encodeURIComponent(t)}`
  );
  return n.ok ? await n.json() : [];
}, np = async (e) => {
  const t = await B.fetchApi("/meld-nexus/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, rp = async () => {
  if (!(await B.fetchApi("/meld-nexus/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, lp = async () => {
  const e = await B.fetchApi("/meld-nexus/favorites");
  return e.ok ? await e.json() : [];
}, op = async (e, t) => {
  if (!(await B.fetchApi("/meld-nexus/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, na = async (e) => {
  if (!(await B.fetchApi("/meld-nexus/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, ip = async (e, t) => {
  if (!(await B.fetchApi("/meld-nexus/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, sp = async (e) => {
  const t = await B.fetchApi(`/meld-nexus/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, ap = async (e) => {
  const t = await B.fetchApi(`/meld-nexus/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var vc = { exports: {} }, jl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var up = T, cp = Symbol.for("react.element"), dp = Symbol.for("react.fragment"), fp = Object.prototype.hasOwnProperty, pp = up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, mp = { key: !0, ref: !0, __self: !0, __source: !0 };
function wc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) fp.call(t, r) && !mp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: cp, type: e, key: o, ref: i, props: l, _owner: pp.current };
}
jl.Fragment = dp;
jl.jsx = wc;
jl.jsxs = wc;
vc.exports = jl;
var u = vc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hp = {
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
const yp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), U = (e, t) => {
  const n = T.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: a = "",
      children: s,
      ...f
    }, h) => T.createElement(
      "svg",
      {
        ref: h,
        ...hp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(o) * 24 / Number(l) : o,
        className: ["lucide", `lucide-${yp(e)}`, a].join(" "),
        ...f
      },
      [
        ...t.map(([y, m]) => T.createElement(y, m)),
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
const gp = U("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = U("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wp = U("Box", [
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
const xp = U("Calendar", [
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
const kp = U("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sp = U("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = U("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = U("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = U("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ep = U("Download", [
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
const ra = U("Folder", [
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
const Cp = U("Maximize", [
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
const Np = U("Minimize", [
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
const jp = U("MoreVertical", [
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
const Pp = U("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = U("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tp = U("PlusCircle", [
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
const Lp = U("PlusSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bi = U("RefreshCw", [
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
const kc = U("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = U("Settings", [
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
const zp = U("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const la = U("Star", [
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
const Rp = U("Tag", [
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
const Sc = U("Trash2", [
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
const Op = U("Type", [
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
const Fp = U("Upload", [
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
const Wt = U("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let dl = !1;
const Dp = (e) => {
  dl = e, dl && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, Ap = (...e) => {
  dl && console.log("[Meld-Flow]", ...e);
}, $p = (...e) => {
  dl && console.warn("[Meld-Flow]", ...e);
}, Up = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, me = {
  log: Ap,
  warn: $p,
  error: Up,
  init: Dp
}, Vp = {
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
  searchQuery: "",
  favorites: []
};
function Qp(e, t) {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "SET_IMAGES": {
      const { images: n, total: r, offset: l, limit: o } = t.payload;
      let i = e.viewerImageId;
      return e.viewerMode === "gallery" && i !== null && !n.some((a) => a.id === i) && (i = null), {
        ...e,
        images: n,
        isLoading: !1,
        error: null,
        viewerImageId: i,
        pagination: {
          total: r,
          offset: l,
          limit: o,
          hasMore: l + n.length < r
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: n, total: r, offset: l, limit: o } = t.payload, i = [...e.images, ...n], a = Array.from(
        new Map(i.map((s) => [s.id, s])).values()
      );
      return {
        ...e,
        images: a,
        isLoading: !1,
        error: null,
        pagination: {
          total: r,
          offset: l,
          limit: o,
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
const _c = T.createContext(void 0), Wp = ({
  children: e
}) => {
  const [t, n] = T.useReducer(Qp, Vp), r = T.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const s = await ta(
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
  }, [t.pagination.limit, t.searchQuery]), l = T.useCallback(async () => {
    if (!(t.isLoading || !t.pagination.hasMore)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        const s = t.images.length, f = await ta(
          s,
          t.pagination.limit,
          t.searchQuery
        );
        n({ type: "APPEND_IMAGES", payload: f });
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
  ]), o = T.useCallback(async () => {
    try {
      const s = await lp();
      n({ type: "SET_FAVORITES", payload: s });
    } catch (s) {
      me.error("Failed to load favorites", s);
    }
  }, []), i = T.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const s = Array.from(t.selectedIds), f = `Are you sure you want to delete the selected ${s.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(f)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await ep(s, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (h) {
        n({
          type: "SET_ERROR",
          payload: h instanceof Error ? h.message : String(h)
        });
      }
    }
  }, [t.selectedIds, r]), a = T.useCallback(
    async (s, f) => {
      try {
        await Xf(s, f), n({ type: "SET_SETTINGS", payload: { [s]: f } });
      } catch (h) {
        n({
          type: "SET_ERROR",
          payload: h instanceof Error ? h.message : String(h)
        });
      }
    },
    []
  );
  return T.useEffect(() => {
    (async () => {
      try {
        const f = await yc();
        n({ type: "SET_SETTINGS", payload: f });
      } catch (f) {
        me.error("Failed to load settings", f);
      }
    })();
  }, []), T.useEffect(() => {
    o();
  }, [o]), T.useEffect(() => {
    const s = () => {
      r();
    }, f = (y) => {
      const m = y.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: m }
      });
    }, h = (y) => {
      const m = y.detail;
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
    return window.addEventListener("meld-nexus-refresh", s), window.addEventListener("meld-nexus-scan-progress", f), window.addEventListener("meld-nexus-scan-finished", h), () => {
      window.removeEventListener("meld-nexus-refresh", s), window.removeEventListener(
        "meld-nexus-scan-progress",
        f
      ), window.removeEventListener(
        "meld-nexus-scan-finished",
        h
      );
    };
  }, [r, t.scanStatus.progress.total]), T.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ u.jsx(
    _c.Provider,
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
}, Nt = () => {
  const e = T.useContext(_c);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Bp = () => {
  const { state: e, dispatch: t, deleteSelected: n } = Nt(), r = e.selectedIds.size;
  return r === 0 ? null : /* @__PURE__ */ u.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ u.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ u.jsx(
            Sc,
            {
              size: 16,
              style: { marginRight: "8px", verticalAlign: "middle" }
            }
          ),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ u.jsx(Wt, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, Hp = ({ image: e }) => {
  const { state: t, dispatch: n } = Nt(), r = t.selectedIds.has(e.id), [l, o] = T.useState(null), [i, a] = T.useState(!1), [s, f] = T.useState(null), [h, y] = T.useState(!1), m = T.useRef(null), k = async (g, R, L = !1) => {
    try {
      await navigator.clipboard.writeText(g), L ? (y(!0), setTimeout(() => y(!1), 2e3)) : (f(R), setTimeout(() => f(null), 2e3));
    } catch (x) {
      console.error("Failed to copy text: ", x);
    }
  };
  T.useEffect(() => {
    const g = (R) => {
      m.current && !m.current.contains(R.target) && a(!1);
    };
    return i && document.addEventListener("mousedown", g), () => {
      document.removeEventListener("mousedown", g);
    };
  }, [i]);
  const _ = (g, R = 0) => {
    if (R >= 5) return [];
    const L = g.parent_id;
    if (!L && !g.parent_filename) return [];
    const x = L ? t.images.find((Q) => Q.id === L) : null;
    let E = null;
    if (x ? E = `/api/view?filename=${encodeURIComponent(x.filename)}&type=${x.type || "output"}${x.subfolder ? `&subfolder=${encodeURIComponent(x.subfolder)}` : ""}` : L && g.parent_filename && (E = `/api/view?filename=${encodeURIComponent(g.parent_filename)}&type=${g.parent_type || "output"}${g.parent_subfolder ? `&subfolder=${encodeURIComponent(g.parent_subfolder)}` : ""}`), !E && !x) return [];
    const A = {
      id: L || null,
      imgSrc: E
    };
    return x ? [A, ..._(x, R + 1)] : [A];
  }, v = _(e), z = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, c = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, d = (g) => {
    g.shiftKey ? (g.preventDefault(), g.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : g.ctrlKey || g.metaKey || t.selectedIds.size > 0 ? (g.preventDefault(), g.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, p = (g) => {
    g.shiftKey ? (g.preventDefault(), g.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, w = (g) => {
    (g.shiftKey || g.ctrlKey || g.metaKey || t.selectedIds.size > 0) && g.preventDefault();
  }, C = (g) => {
    (g.key === "Enter" || g.key === " ") && (g.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, P = async () => {
    try {
      const g = await sp(e.id);
      if (!g.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        g.workflow
      ), console.log("Workflow restored successfully from Meld Nexus");
    } catch (g) {
      console.error("Error restoring workflow:", g), alert("Failed to restore workflow.");
    }
  }, I = async () => {
    try {
      const g = await ap(e.id), R = "MeldUnifiedLoader", L = window.app, E = window.LiteGraph.createNode(R);
      if (!E) {
        console.error(`Node type ${R} not found.`), alert(
          `Node type ${R} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const A = {
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
      if (E.widgets) {
        for (const [Be, N] of Object.entries(A)) {
          const M = g[Be];
          if (M != null) {
            const O = E.widgets.find(
              (K) => K.name === N
            );
            O && (O.value = M);
          }
        }
        const Oe = E.widgets.find(
          (Be) => Be.name === "control_after_generate"
        );
        Oe && (Oe.value = "fixed");
      }
      const Q = L.canvas.ds.offset, ae = L.canvas.ds.scale;
      E.pos = [(-Q[0] + 400) / ae, (-Q[1] + 300) / ae], L.graph.add(E), L.canvas.selectNode(E), L.canvas.centerOnNode(E);
    } catch (g) {
      console.error("Error adding Unified Loader:", g), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: p,
      onMouseDown: w,
      onKeyDown: C,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "meld-image-card__menu-container", ref: m, children: [
          /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (g) => {
                g.stopPropagation(), a(!i);
              },
              title: "Menu",
              children: /* @__PURE__ */ u.jsx(jp, { size: 16 })
            }
          ),
          i && /* @__PURE__ */ u.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ u.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), I(), a(!1);
                },
                children: [
                  /* @__PURE__ */ u.jsx(Lp, { size: 14 }),
                  /* @__PURE__ */ u.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ u.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), P(), a(!1);
                },
                children: [
                  /* @__PURE__ */ u.jsx(Bi, { size: 14 }),
                  /* @__PURE__ */ u.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ u.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), a(!1);
                },
                children: [
                  /* @__PURE__ */ u.jsx(Tp, { size: 14 }),
                  /* @__PURE__ */ u.jsx("span", { children: "Add source image" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ u.jsx(
          "img",
          {
            src: c,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: w,
            onClick: (g) => {
              g.stopPropagation(), d(g);
            }
          }
        ) }),
        /* @__PURE__ */ u.jsxs("div", { className: "meld-image-card__details", children: [
          t.settings["sidebar.show_filename"] && /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__filename", children: z }),
          t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ u.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
              (g, R) => g.imgSrc && /* @__PURE__ */ u.jsx(
                "img",
                {
                  src: g.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  onClick: (L) => {
                    L.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: { id: g.id || e.id, mode: "lineage" }
                    });
                  },
                  title: R === 0 ? "Source" : R === 1 ? "Grand-Source" : `Ancestor (S${R + 1})`,
                  alt: "source thumb"
                },
                g.id || R
              )
            ) })
          ] }),
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (g) => {
                g.stopPropagation(), o({
                  title: "Model",
                  text: e.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ u.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${s === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (g) => {
                      g.stopPropagation(), k(e.model_name || "-", "Model");
                    },
                    children: s === "Model" ? "Copied!" : "Model"
                  }
                ),
                /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (g) => {
                g.stopPropagation(), o({
                  title: "Positive Prompt",
                  text: e.positive_prompt || e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ u.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${s === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (g) => {
                      g.stopPropagation(), k(
                        e.positive_prompt || e.positive || "-",
                        "Positive"
                      );
                    },
                    children: s === "Positive" ? "Copied!" : "Positive"
                  }
                ),
                /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (g) => {
                g.stopPropagation(), o({
                  title: "Negative Prompt",
                  text: e.negative_prompt || e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ u.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${s === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (g) => {
                      g.stopPropagation(), k(
                        e.negative_prompt || e.negative || "-",
                        "Negative"
                      );
                    },
                    children: s === "Negative" ? "Copied!" : "Negative"
                  }
                ),
                /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_tags"] && /* @__PURE__ */ u.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
            /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((g, R) => /* @__PURE__ */ u.jsx("span", { className: "meld-image-card__tag", children: g }, `${g}-${R}`)) : /* @__PURE__ */ u.jsx("span", { style: { color: "#666" }, children: "-" }) })
          ] })
        ] }),
        l && /* @__PURE__ */ u.jsx(
          "div",
          {
            className: "meld-prompt-popup-overlay",
            onClick: (g) => {
              g.stopPropagation(), o(null);
            },
            children: /* @__PURE__ */ u.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (g) => g.stopPropagation(),
                children: [
                  /* @__PURE__ */ u.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ u.jsx("span", { children: l.title }),
                    /* @__PURE__ */ u.jsxs(
                      "div",
                      {
                        style: { display: "flex", alignItems: "center", gap: "10px" },
                        children: [
                          h ? /* @__PURE__ */ u.jsx(
                            Sp,
                            {
                              size: 18,
                              style: { color: "var(--meld-success-color)" }
                            }
                          ) : /* @__PURE__ */ u.jsx(
                            _p,
                            {
                              className: "meld-prompt-popup-copy",
                              size: 18,
                              onClick: () => k(l.text, "", !0)
                            }
                          ),
                          /* @__PURE__ */ u.jsx(
                            Wt,
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
                  /* @__PURE__ */ u.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, Gp = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = Nt(), { viewerImageId: r, images: l, viewerMode: o, lineageImages: i } = e, [a, s] = T.useState(!1), [f, h] = T.useState(!1), y = o === "lineage" ? i : l.filter(
    (v) => v.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && v.has_children)
  ), m = (o === "lineage" && i.length > 0 ? i : l).find((v) => v.id === r), k = T.useCallback(
    (v) => {
      v && "stopPropagation" in v && v.stopPropagation(), document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch((z) => {
        console.error(
          `Error attempting to enable full-screen mode: ${z.message}`
        );
      });
    },
    []
  );
  if (T.useEffect(() => {
    if (o !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore)
      return;
    const v = y.findIndex(
      (z) => z.id === r
    );
    v !== -1 && v >= y.length - 15 && n();
  }, [
    r,
    y.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    y
  ]), T.useEffect(() => {
    const v = (c) => {
      r !== null && (c.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : c.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : c.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (c.key === "f" || c.key === "F") && k(c));
    }, z = () => {
      s(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", v), document.addEventListener("fullscreenchange", z), () => {
      window.removeEventListener("keydown", v), document.removeEventListener("fullscreenchange", z);
    };
  }, [r, t, k]), T.useEffect(() => {
    o === "lineage" && r !== null && i.length === 0 && (h(!0), qf(r).then((v) => {
      t({ type: "SET_LINEAGE", payload: v });
    }).catch((v) => {
      console.error("Failed to fetch lineage:", v);
    }).finally(() => {
      h(!1);
    }));
  }, [o, r, i.length, t]), T.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), T.useEffect(() => {
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
  const _ = `/api/view?filename=${encodeURIComponent(m.filename)}&type=${m.type || "output"}${m.subfolder ? `&subfolder=${encodeURIComponent(m.subfolder)}` : ""}`;
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "meld-viewer-overlay",
      onClick: () => t({ type: "CLOSE_VIEWER" }),
      role: "button",
      tabIndex: 0,
      children: /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: `meld-viewer-content ${a ? "meld-viewer-content--fullscreen" : ""}`,
          onClick: (v) => v.stopPropagation(),
          children: [
            /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-filename", children: m.filename }) }),
            /* @__PURE__ */ u.jsxs("div", { className: "meld-viewer-actions", children: [
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn",
                  onClick: k,
                  type: "button",
                  title: a ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                  children: a ? /* @__PURE__ */ u.jsx(Np, { size: 20 }) : /* @__PURE__ */ u.jsx(Cp, { size: 20 })
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                  onClick: () => t({ type: "CLOSE_VIEWER" }),
                  type: "button",
                  title: "Close (Esc)",
                  children: /* @__PURE__ */ u.jsx(Wt, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--prev",
                onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ u.jsx(Xo, { size: 32 })
              }
            ),
            /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-image-container", children: /* @__PURE__ */ u.jsx(
              "img",
              {
                src: _,
                alt: m.filename,
                className: "meld-viewer-image"
              }
            ) }),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--next",
                onClick: () => t({ type: "NEXT_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ u.jsx(xc, { size: 32 })
              }
            ),
            !a && /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ u.jsxs("div", { className: "meld-viewer-thumbnails", children: [
              f ? /* @__PURE__ */ u.jsx("div", { style: { padding: "10px", color: "#888" }, children: "Loading lineage..." }) : y.map((v, z) => {
                const c = v.id === r, d = typeof m.parent_id == "number" && m.parent_id === v.id, p = typeof v.parent_id == "number" && v.parent_id === m.id, w = `/api/view?filename=${encodeURIComponent(v.filename)}&type=${v.type || "output"}${v.subfolder ? `&subfolder=${encodeURIComponent(v.subfolder)}` : ""}`;
                return /* @__PURE__ */ u.jsxs(
                  "div",
                  {
                    className: "meld-viewer-thumbnail-wrapper",
                    children: [
                      o === "lineage" && z > 0 && /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-lineage-connector", children: /* @__PURE__ */ u.jsx(Xo, { size: 16 }) }),
                      /* @__PURE__ */ u.jsxs(
                        "div",
                        {
                          className: `meld-viewer-thumbnail ${c ? "meld-viewer-thumbnail--active" : ""} ${d ? "meld-viewer-thumbnail--parent" : ""} ${p ? "meld-viewer-thumbnail--child" : ""}`,
                          onClick: () => t({
                            type: "OPEN_VIEWER",
                            payload: { id: v.id, mode: o }
                          }),
                          children: [
                            /* @__PURE__ */ u.jsx("img", { src: w, alt: v.filename }),
                            (d || p) && /* @__PURE__ */ u.jsx(
                              "div",
                              {
                                className: `meld-viewer-thumbnail-relation-icon ${d ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
                                children: d ? /* @__PURE__ */ u.jsx(vp, { size: 12 }) : /* @__PURE__ */ u.jsx(gp, { size: 12 })
                              }
                            ),
                            /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-thumbnail-label-v2", children: c ? "Current" : d ? "Source" : p ? "Derivative" : "" })
                          ]
                        }
                      )
                    ]
                  },
                  v.id
                );
              }),
              o === "gallery" && e.isLoading && /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ u.jsx(Bi, { className: "animate-spin", size: 20 }) })
            ] }) })
          ]
        }
      )
    }
  );
}, Kp = () => {
  const { state: e, dispatch: t } = Nt(), { scanStatus: n } = e, [r, l] = T.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0
  }), [o, i] = T.useState([]), [a, s] = T.useState(!1), f = T.useCallback(async () => {
    if (r.type !== "custom") {
      s(!0);
      try {
        const c = await tp(r.type, r.subfolder);
        i(c);
      } catch (c) {
        console.error("Failed to load folders:", c);
      } finally {
        s(!1);
      }
    }
  }, [r.type, r.subfolder]);
  T.useEffect(() => {
    f();
  }, [f]);
  const h = async () => {
    try {
      await np(r), t({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      });
    } catch (c) {
      console.error("Failed to start scan:", c), alert(`Failed to start scan: ${c}`);
    }
  }, y = async () => {
    try {
      await rp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (c) {
      console.error("Failed to cancel scan:", c);
    }
  }, m = (c) => {
    const d = r.subfolder ? `${r.subfolder}/${c}` : c;
    l({ ...r, subfolder: d });
  }, k = () => {
    const c = r.subfolder.split("/");
    c.pop(), l({ ...r, subfolder: c.join("/") });
  }, _ = () => {
    n.isFinished && t({ type: "SET_SCAN_STATUS", payload: { isFinished: !1 } }), t({ type: "CLOSE_MODAL" });
  }, v = n.progress.phase === "linking", z = v ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ u.jsx("div", { className: "meld-modal-overlay", onClick: _, children: /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: "meld-modal-content meld-modal-content--large",
      onClick: (c) => c.stopPropagation(),
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ u.jsx("h2", { children: "Import Images" }),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              className: "meld-modal-close",
              onClick: _,
              children: /* @__PURE__ */ u.jsx(Wt, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "meld-modal-body", children: n.isRunning ? /* @__PURE__ */ u.jsxs("div", { className: "meld-scan-progress", children: [
          /* @__PURE__ */ u.jsx("div", { className: "meld-scan-status-text", children: n.shouldCancel ? /* @__PURE__ */ u.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : v ? /* @__PURE__ */ u.jsx("span", { children: "Linking parent images..." }) : /* @__PURE__ */ u.jsx("span", { children: "Scanning images..." }) }),
          /* @__PURE__ */ u.jsx("div", { className: "meld-progress-container", children: /* @__PURE__ */ u.jsx(
            "div",
            {
              className: "meld-progress-bar",
              style: { width: `${z}%` }
            }
          ) }),
          /* @__PURE__ */ u.jsx("div", { className: "meld-progress-stats", children: v ? /* @__PURE__ */ u.jsxs("span", { children: [
            "Processing relations: ",
            n.progress.current,
            " /",
            " ",
            n.progress.total
          ] }) : /* @__PURE__ */ u.jsxs("span", { children: [
            n.progress.current,
            " / ",
            n.progress.total
          ] }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "meld-scan-actions", children: [
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: _,
                children: "Run in Background"
              }
            ),
            /* @__PURE__ */ u.jsxs(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-danger",
                disabled: n.shouldCancel,
                onClick: y,
                children: [
                  /* @__PURE__ */ u.jsx(zp, { size: 16 }),
                  "Stop Scan"
                ]
              }
            )
          ] })
        ] }) : n.isFinished ? /* @__PURE__ */ u.jsxs("div", { className: "meld-scan-finished", children: [
          /* @__PURE__ */ u.jsx("div", { className: "meld-finished-icon", children: /* @__PURE__ */ u.jsx(kp, { size: 64, color: "var(--meld-success)" }) }),
          /* @__PURE__ */ u.jsx("h3", { children: "Import Completed" }),
          /* @__PURE__ */ u.jsxs("p", { children: [
            "Successfully scanned ",
            /* @__PURE__ */ u.jsx("strong", { children: n.totalCount }),
            " ",
            "images.",
            /* @__PURE__ */ u.jsx("br", {}),
            "(",
            /* @__PURE__ */ u.jsx("strong", { children: n.newCount }),
            " new images were added to database)"
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              className: "meld-btn meld-btn-primary",
              onClick: _,
              style: { minWidth: "120px" },
              children: "Close"
            }
          ) })
        ] }) : /* @__PURE__ */ u.jsxs("div", { className: "meld-import-container", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "meld-import-sidebar", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "meld-form-group", children: [
              /* @__PURE__ */ u.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
              /* @__PURE__ */ u.jsxs(
                "select",
                {
                  id: "base-location",
                  value: r.type,
                  onChange: (c) => l({
                    ...r,
                    type: c.target.value,
                    subfolder: ""
                  }),
                  children: [
                    /* @__PURE__ */ u.jsx("option", { value: "output", children: "Output Directory" }),
                    /* @__PURE__ */ u.jsx("option", { value: "input", children: "Input Directory" }),
                    /* @__PURE__ */ u.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                  ]
                }
              )
            ] }),
            r.type === "custom" ? /* @__PURE__ */ u.jsxs("div", { className: "meld-form-group", children: [
              /* @__PURE__ */ u.jsx("label", { htmlFor: "custom-path", children: "Absolute Path" }),
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  id: "custom-path",
                  type: "text",
                  placeholder: "C:\\path\\to\\images or /path/to/images",
                  value: r.custom_path,
                  onChange: (c) => l({ ...r, custom_path: c.target.value })
                }
              )
            ] }) : /* @__PURE__ */ u.jsxs("div", { className: "meld-form-group", children: [
              /* @__PURE__ */ u.jsx("span", { className: "meld-form-label", children: "Current Path" }),
              /* @__PURE__ */ u.jsxs("div", { className: "meld-path-display", children: [
                /* @__PURE__ */ u.jsxs("span", { children: [
                  r.type,
                  "/"
                ] }),
                r.subfolder
              ] })
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ u.jsxs("label", { children: [
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.recursive,
                  onChange: (c) => l({ ...r, recursive: c.target.checked })
                }
              ),
              "Recursive Scan"
            ] }) }),
            /* @__PURE__ */ u.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ u.jsxs("label", { children: [
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.auto_link_parent,
                  onChange: (c) => l({
                    ...r,
                    auto_link_parent: c.target.checked
                  })
                }
              ),
              "Auto Link Parent"
            ] }) }),
            /* @__PURE__ */ u.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ u.jsxs(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: h,
                style: { width: "100%" },
                children: [
                  /* @__PURE__ */ u.jsx(Ip, { size: 16 }),
                  "Start Import"
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "meld-import-browser", children: [
            r.type !== "custom" && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsxs("div", { className: "meld-browser-header", children: [
                /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-browser-back",
                    disabled: !r.subfolder,
                    onClick: k,
                    children: [
                      /* @__PURE__ */ u.jsx(Xo, { size: 16 }),
                      "Back"
                    ]
                  }
                ),
                /* @__PURE__ */ u.jsx("span", { className: "meld-browser-title", children: "Browse Folders" })
              ] }),
              /* @__PURE__ */ u.jsx("div", { className: "meld-folder-list", children: a ? /* @__PURE__ */ u.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : o.length === 0 ? /* @__PURE__ */ u.jsx("div", { className: "meld-browser-empty", children: "No subfolders found." }) : o.map((c) => /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: "meld-folder-item",
                  onClick: () => m(c),
                  children: [
                    /* @__PURE__ */ u.jsx(ra, { size: 16 }),
                    /* @__PURE__ */ u.jsx("span", { children: c }),
                    /* @__PURE__ */ u.jsx(xc, { size: 14 })
                  ]
                },
                c
              )) })
            ] }),
            r.type === "custom" && /* @__PURE__ */ u.jsxs("div", { className: "meld-browser-info", children: [
              /* @__PURE__ */ u.jsx(ra, { size: 48 }),
              /* @__PURE__ */ u.jsx("p", { children: "Please enter an absolute path in the sidebar." }),
              /* @__PURE__ */ u.jsx("span", { style: { fontSize: "11px", color: "#666" }, children: "Example: C:\\Users\\Me\\Pictures or /home/me/images" })
            ] })
          ] })
        ] }) })
      ]
    }
  ) });
}, Yp = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Nt(), [l, o] = T.useState([]), [i, a] = T.useState(!0), [s, f] = T.useState(!1), h = t.images.find((c) => c.id === e), y = T.useCallback(async () => {
    a(!0);
    try {
      const c = await Jf(e);
      o(c);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      a(!1);
    }
  }, [e]);
  T.useEffect(() => {
    y();
  }, [y]);
  const m = async (c) => {
    try {
      await Zf(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, k = async (c) => {
    a(!0);
    try {
      const d = await bf(c), { id: p } = await gc({
        filename: d.name,
        subfolder: d.subfolder || "",
        type: d.type || "input"
      });
      await m(p);
    } catch (d) {
      console.error("Failed to upload/register image:", d);
    } finally {
      a(!1);
    }
  }, _ = (c) => {
    c.preventDefault(), c.stopPropagation(), f(!1);
    const d = c.dataTransfer.files[0];
    d != null && d.type.startsWith("image/") && k(d);
  };
  if (!h) return null;
  const v = l.filter((c) => c.is_source_match), z = l.filter((c) => !c.is_source_match);
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => n({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ u.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
        /* @__PURE__ */ u.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ u.jsxs("h2", { children: [
            "Select Source for #",
            h.id
          ] }),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              className: "meld-modal-close",
              onClick: () => n({ type: "CLOSE_MODAL" }),
              children: /* @__PURE__ */ u.jsx(Wt, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "meld-modal-body", children: [
          /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: `meld-drop-zone ${s ? "meld-drop-zone--active" : ""}`,
              onDragEnter: (c) => {
                c.preventDefault(), c.stopPropagation(), f(!0);
              },
              onDragOver: (c) => {
                c.preventDefault(), c.stopPropagation(), c.dataTransfer.dropEffect = "copy", f(!0);
              },
              onDragLeave: (c) => {
                c.preventDefault(), c.stopPropagation(), f(!1);
              },
              onDrop: _,
              children: [
                /* @__PURE__ */ u.jsx(Fp, { size: 32 }),
                /* @__PURE__ */ u.jsx("p", { children: "Drop an image file here to set it as source" })
              ]
            }
          ),
          i ? /* @__PURE__ */ u.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ u.jsxs("div", { className: "meld-suggestions-container", children: [
            v.length > 0 && /* @__PURE__ */ u.jsxs("section", { children: [
              /* @__PURE__ */ u.jsx("h3", { children: "Source Matches (from metadata)" }),
              /* @__PURE__ */ u.jsx("div", { className: "meld-suggestion-grid", children: v.map((c) => /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => m(c.id),
                  children: [
                    /* @__PURE__ */ u.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(c.filename)}&type=${c.type || "output"}${c.subfolder ? `&subfolder=${encodeURIComponent(c.subfolder)}` : ""}`,
                        alt: c.filename
                      }
                    ),
                    /* @__PURE__ */ u.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ u.jsx("span", { className: "meld-suggestion-filename", children: c.filename }) })
                  ]
                },
                c.id
              )) })
            ] }),
            /* @__PURE__ */ u.jsxs("section", { children: [
              /* @__PURE__ */ u.jsx("h3", { children: "Visual Matches (pHash)" }),
              z.length > 0 ? /* @__PURE__ */ u.jsx("div", { className: "meld-suggestion-grid", children: z.map((c) => /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => m(c.id),
                  children: [
                    /* @__PURE__ */ u.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(c.filename)}&type=${c.type || "output"}${c.subfolder ? `&subfolder=${encodeURIComponent(c.subfolder)}` : ""}`,
                        alt: c.filename
                      }
                    ),
                    /* @__PURE__ */ u.jsxs("div", { className: "meld-suggestion-info", children: [
                      /* @__PURE__ */ u.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
                      /* @__PURE__ */ u.jsxs("span", { className: "meld-suggestion-distance", children: [
                        "Match:",
                        " ",
                        Math.round((64 - c.distance) / 64 * 100),
                        "%"
                      ] })
                    ] })
                  ]
                },
                c.id
              )) }) : /* @__PURE__ */ u.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
            ] })
          ] })
        ] })
      ] })
    }
  );
}, Xp = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = Nt(), [r, l] = T.useState(e.searchQuery), [o, i] = T.useState([]), [a, s] = T.useState(!1), [f, h] = T.useState([]), [y, m] = T.useState(-1), [k, _] = T.useState(!1), v = T.useRef(null), z = T.useRef(null), c = T.useRef(e.searchQuery);
  T.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    !r && !e.searchQuery ? Yf().then((x) => {
      h(x);
    }) : h([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), T.useEffect(() => {
    l(e.searchQuery), c.current = e.searchQuery;
  }, [e.searchQuery]), T.useEffect(() => {
    var x;
    (x = v.current) == null || x.focus();
  }, []);
  const d = T.useCallback(
    (x, E = !0) => {
      c.current !== x && (t({ type: "SET_SEARCH_QUERY", payload: x }), E && s(!1), c.current = x);
    },
    [t]
  );
  T.useEffect(() => {
    const x = setTimeout(async () => {
      if (r === c.current)
        return;
      if (e.settings["search.realtime_search"] && d(r, !1), !e.settings["search.input_suggest"]) {
        i([]), s(!1);
        return;
      }
      const E = r.split(/\s+/), A = E[E.length - 1];
      if (A) {
        const Q = A.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (Q) {
          const ae = Q[1].toLowerCase(), Oe = Q[2], Be = await Kf(Oe, ae);
          i(Be), s(Be.length > 0), m(-1);
        } else
          i([]), s(!1);
      } else
        i([]), s(!1);
    }, 300);
    return () => clearTimeout(x);
  }, [
    r,
    e.settings["search.realtime_search"],
    e.settings["search.input_suggest"],
    d
  ]);
  const p = (x) => {
    x.key === "Enter" ? d(r) : x.key === "Tab" ? a && y >= 0 && (w(o[y]), x.preventDefault()) : x.key === "ArrowDown" ? a && (m((E) => Math.min(E + 1, o.length - 1)), x.preventDefault()) : x.key === "ArrowUp" ? a && (m((E) => Math.max(E - 1, -1)), x.preventDefault()) : x.key === "Escape" && s(!1);
  }, w = (x) => {
    var Oe;
    const E = r.split(/\s+/);
    E.pop();
    const Q = ["date", "after", "before"].includes(x.type) ? x.value : `"${x.value}"`, ae = `${[...E, `${x.type}:${Q}`].join(" ").trim()} `;
    l(ae), d(ae), i([]), s(!1), (Oe = v.current) == null || Oe.focus();
  }, C = () => {
    l(""), d("");
  }, P = async (x, E, A) => {
    x.stopPropagation();
    const Q = `Are you sure you want to delete the favorite "${A}"?`;
    if (window.confirm(Q))
      try {
        await na(E), await n();
      } catch (ae) {
        me.error("Failed to delete favorite", ae);
      }
  }, I = async (x, E, A) => {
    x.stopPropagation();
    const Q = window.prompt(
      "Enter a new name for this favorite:",
      A
    );
    if (!(Q === null || Q === A))
      try {
        await ip(E, Q || A), await n();
      } catch (ae) {
        me.error("Failed to rename favorite", ae);
      }
  }, g = (x, E) => {
    const Q = ["date", "after", "before"].includes(x) ? E : `"${E}"`, ae = `${x}:${Q}`;
    l(ae), d(ae);
  }, R = async () => {
    if (!e.searchQuery || k) return;
    if (e.favorites.some(
      (A) => A.query === e.searchQuery
    )) {
      const A = e.favorites.find((Q) => Q.query === e.searchQuery);
      if (A) {
        _(!0);
        try {
          await na(A.id), await n();
        } catch (Q) {
          console.error("Failed to delete favorite:", Q);
        } finally {
          _(!1);
        }
      }
      return;
    }
    const E = window.prompt(
      "Enter a name for this favorite:",
      e.searchQuery
    );
    if (E !== null) {
      _(!0);
      try {
        await op(E || e.searchQuery, e.searchQuery), await n();
      } catch (A) {
        console.error("Failed to save favorite:", A);
      } finally {
        _(!1);
      }
    }
  }, L = (x) => {
    switch (x) {
      case "tag":
        return /* @__PURE__ */ u.jsx(Rp, { size: 12 });
      case "model":
        return /* @__PURE__ */ u.jsx(wp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ u.jsx(Op, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ u.jsx(xp, { size: 12 });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              /* @__PURE__ */ u.jsxs(
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
                    /* @__PURE__ */ u.jsx(
                      kc,
                      {
                        size: 18,
                        color: "#666",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      "input",
                      {
                        ref: v,
                        type: "text",
                        value: r,
                        onChange: (x) => l(x.target.value),
                        onKeyDown: p,
                        onBlur: () => setTimeout(() => s(!1), 200),
                        onFocus: () => {
                          if (r === c.current) return;
                          const x = r.split(/\s+/), E = x[x.length - 1];
                          E != null && E.match(/^(pos|neg|model|date|after|before):/i) && s(!0);
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
                    e.searchQuery && /* @__PURE__ */ u.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: R,
                        disabled: k,
                        title: e.favorites.some((x) => x.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          marginRight: "4px",
                          opacity: k ? 0.5 : 1
                        },
                        children: /* @__PURE__ */ u.jsx(
                          la,
                          {
                            size: 16,
                            color: k ? "#aaa" : e.favorites.some((x) => x.query === e.searchQuery) ? "#ffd700" : "#666",
                            fill: e.favorites.some((x) => x.query === e.searchQuery) ? "#ffd700" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ u.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: C,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ u.jsx(Wt, { size: 16, color: "#666" })
                      }
                    )
                  ]
                }
              ),
              a && o.length > 0 && /* @__PURE__ */ u.jsx(
                "div",
                {
                  ref: z,
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
                  children: o.map((x, E) => /* @__PURE__ */ u.jsx(
                    "div",
                    {
                      onMouseDown: (A) => {
                        A.preventDefault(), w(x);
                      },
                      onMouseEnter: () => m(E),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: E === y ? "#333" : "transparent",
                        borderBottom: "1px solid #2a2a2a"
                      },
                      children: /* @__PURE__ */ u.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ u.jsx("span", { style: { color: "#888", display: "flex" }, children: L(x.type) }),
                            /* @__PURE__ */ u.jsx(
                              "span",
                              {
                                style: {
                                  color: "#3b82f6",
                                  fontSize: "11px",
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  width: "45px"
                                },
                                children: x.type
                              }
                            ),
                            /* @__PURE__ */ u.jsx("span", { style: { color: "#eee", fontSize: "14px" }, children: x.value })
                          ]
                        }
                      )
                    },
                    `${x.type}:${x.value}`
                  ))
                }
              )
            ]
          }
        ),
        !r && !e.searchQuery && f.length > 0 && /* @__PURE__ */ u.jsx(
          "div",
          {
            className: "meld-search-quick-suggestions",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: f.map((x) => /* @__PURE__ */ u.jsxs(
              "button",
              {
                type: "button",
                onClick: () => g(x.type, x.value),
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
                onMouseEnter: (E) => {
                  E.currentTarget.style.backgroundColor = "#333", E.currentTarget.style.borderColor = "#444", E.currentTarget.style.color = "#fff";
                },
                onMouseLeave: (E) => {
                  E.currentTarget.style.backgroundColor = "#2a2a2a", E.currentTarget.style.borderColor = "#333", E.currentTarget.style.color = "#ccc";
                },
                children: [
                  /* @__PURE__ */ u.jsx("span", { style: { display: "flex", color: "#888" }, children: L(x.type) }),
                  /* @__PURE__ */ u.jsx(
                    "span",
                    {
                      style: {
                        color: "#3b82f6",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontSize: "10px"
                      },
                      children: x.type
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    "span",
                    {
                      style: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: x.value
                    }
                  )
                ]
              },
              `${x.type}:${x.value}`
            ))
          }
        ),
        !r && e.favorites.length > 0 && /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: "meld-search-favorites",
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "4px",
              marginTop: "4px",
              borderTop: "1px solid #333",
              paddingTop: "12px"
            },
            children: [
              /* @__PURE__ */ u.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#888",
                    fontSize: "11px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    paddingLeft: "4px",
                    marginBottom: "4px"
                  },
                  children: [
                    /* @__PURE__ */ u.jsx(la, { size: 12, fill: "#888" }),
                    "Favorites"
                  ]
                }
              ),
              /* @__PURE__ */ u.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  },
                  children: e.favorites.map((x) => /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#2a2a2a",
                        border: "1px solid #333",
                        borderRadius: "6px",
                        padding: "8px 12px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        color: "#ccc",
                        fontSize: "13px",
                        gap: "10px"
                      },
                      onClick: () => {
                        l(x.query), d(x.query);
                      },
                      onMouseEnter: (E) => {
                        E.currentTarget.style.backgroundColor = "#333", E.currentTarget.style.borderColor = "var(--meld-accent-color)", E.currentTarget.style.color = "#fff";
                      },
                      onMouseLeave: (E) => {
                        E.currentTarget.style.backgroundColor = "#2a2a2a", E.currentTarget.style.borderColor = "#333", E.currentTarget.style.color = "#ccc";
                      },
                      children: [
                        /* @__PURE__ */ u.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              minWidth: 0,
                              flex: 1
                            },
                            children: [
                              /* @__PURE__ */ u.jsx(
                                "span",
                                {
                                  style: {
                                    fontWeight: "bold",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                  },
                                  children: x.name
                                }
                              ),
                              x.name !== x.query && /* @__PURE__ */ u.jsx(
                                "span",
                                {
                                  style: {
                                    fontSize: "10px",
                                    color: "#666",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    fontFamily: "monospace"
                                  },
                                  children: x.query
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ u.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              flexShrink: 0
                            },
                            children: [
                              /* @__PURE__ */ u.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (E) => {
                                    E.stopPropagation(), I(E, x.id, x.name);
                                  },
                                  style: {
                                    background: "none",
                                    border: "none",
                                    color: "#666",
                                    padding: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                    transition: "all 0.2s"
                                  },
                                  onMouseEnter: (E) => {
                                    E.currentTarget.style.color = "var(--meld-accent-color)", E.currentTarget.style.backgroundColor = "rgba(68, 136, 255, 0.1)";
                                  },
                                  onMouseLeave: (E) => {
                                    E.currentTarget.style.color = "#666", E.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ u.jsx(Pp, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ u.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (E) => {
                                    E.stopPropagation(), P(E, x.id, x.name);
                                  },
                                  style: {
                                    background: "none",
                                    border: "none",
                                    color: "#666",
                                    padding: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                    transition: "all 0.2s"
                                  },
                                  onMouseEnter: (E) => {
                                    E.currentTarget.style.color = "var(--meld-danger-color)", E.currentTarget.style.backgroundColor = "rgba(255,0,0,0.1)";
                                  },
                                  onMouseLeave: (E) => {
                                    E.currentTarget.style.color = "#666", E.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ u.jsx(Sc, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    x.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Zp = () => {
  const { state: e, dispatch: t, updateSetting: n } = Nt(), [r, l] = T.useState("General"), o = [
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
  ], i = (s, f) => {
    n(s, !f);
  }, a = o.filter(
    (s) => s.category === r
  );
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => t({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: "meld-modal-content meld-settings-modal",
          onClick: (s) => s.stopPropagation(),
          children: [
            /* @__PURE__ */ u.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ u.jsx("h2", { children: "Settings" }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-modal-close",
                  onClick: () => t({ type: "CLOSE_MODAL" }),
                  children: /* @__PURE__ */ u.jsx(Wt, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "meld-tabs", children: [
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "General" ? "active" : ""}`,
                  onClick: () => l("General"),
                  children: "General"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Sidebar" ? "active" : ""}`,
                  onClick: () => l("Sidebar"),
                  children: "Sidebar"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Search" ? "active" : ""}`,
                  onClick: () => l("Search"),
                  children: "Search"
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ u.jsx("div", { className: "meld-settings-list", children: a.map((s) => /* @__PURE__ */ u.jsxs("div", { className: "meld-settings-item", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "meld-settings-item__info", children: [
                /* @__PURE__ */ u.jsx("div", { className: "meld-settings-item__label", children: s.label }),
                /* @__PURE__ */ u.jsx("div", { className: "meld-settings-item__description", children: s.description })
              ] }),
              /* @__PURE__ */ u.jsx("div", { className: "meld-settings-item__control", children: s.type === "boolean" && /* @__PURE__ */ u.jsxs("label", { className: "meld-switch", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!e.settings[s.key],
                    onChange: () => i(s.key, !!e.settings[s.key])
                  }
                ),
                /* @__PURE__ */ u.jsx("span", { className: "meld-switch__slider" })
              ] }) })
            ] }, s.key)) }) })
          ]
        }
      )
    }
  );
}, Jp = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = Nt(), [l, o] = T.useState(!1), i = e.searchQuery.trim() !== "", a = T.useRef(null), s = e.images.filter(
    (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
  );
  return T.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && s.length === 0 && (me.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    s.length,
    r
  ]), me.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: s.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), T.useEffect(() => {
    const f = new IntersectionObserver(
      (y) => {
        y[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (me.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), h = a.current;
    return h && f.observe(h), () => {
      h && f.unobserve(h);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), /* @__PURE__ */ u.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ u.jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          marginBottom: "15px",
          gap: "10px"
        },
        children: [
          /* @__PURE__ */ u.jsxs(
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
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => o(!l),
                    style: {
                      background: "none",
                      border: "none",
                      color: i ? "var(--meld-success-color)" : l ? "#fff" : "#888",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: i ? "bold" : "normal"
                    },
                    title: "Search",
                    children: /* @__PURE__ */ u.jsx(kc, { size: 14 })
                  }
                ),
                /* @__PURE__ */ u.jsx(
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
                    children: /* @__PURE__ */ u.jsx(Ep, { size: 14 })
                  }
                ),
                /* @__PURE__ */ u.jsx(
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
                    children: /* @__PURE__ */ u.jsx(
                      Bi,
                      {
                        size: 14,
                        className: e.isLoading ? "animate-spin" : ""
                      }
                    )
                  }
                ),
                /* @__PURE__ */ u.jsx(
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
                    children: /* @__PURE__ */ u.jsx(Mp, { size: 14 })
                  }
                )
              ]
            }
          ),
          l && /* @__PURE__ */ u.jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ u.jsx(Xp, {}) })
        ]
      }
    ),
    e.error && /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && s.length === 0 ? /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : s.length === 0 ? /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__list", children: s.map((f) => /* @__PURE__ */ u.jsx(Hp, { image: f }, f.id)) }),
      /* @__PURE__ */ u.jsxs(
        "div",
        {
          ref: a,
          className: "meld-gallery__load-more",
          style: { height: "20px", margin: "20px 0", textAlign: "center" },
          children: [
            e.isLoading && /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
            !e.pagination.hasMore && s.length > 0 && /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ u.jsx(Bp, {}),
    e.viewerImageId !== null && /* @__PURE__ */ u.jsx(Gp, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ u.jsx(Yp, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ u.jsx(Kp, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ u.jsx(Zp, {})
  ] });
}, Pl = document.createElement("link");
Pl.rel = "stylesheet";
Pl.type = "text/css";
Pl.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(Pl);
let Pr = null, De = null;
Ec.registerExtension({
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
      const n = await yc();
      me.init(n.dev_mode), me.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld-Flow] Failed to fetch settings", n), me.init(!1);
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
      }, B.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), B.addEventListener("meld-nexus-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-progress", { detail: n.detail })
        );
      }), B.addEventListener("meld-nexus-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-finished", { detail: n.detail })
        ), (r = e.ui.meldNexus) == null || r.refresh(), console.log("Meld Nexus: Import completed.");
      }), B.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await gc({
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
            me.log("MeldNexus: render called", {
              el: n,
              galleryRoot: Pr,
              galleryContainer: De
            }), De || (me.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), De = document.createElement("div"), De.id = "meld-flow-gallery-container", De.style.height = "100%", De.style.width = "100%", De.style.display = "flex", De.style.flexDirection = "column"), n.contains(De) || (me.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(De)), Pr ? me.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (me.log("MeldNexus: Creating new gallery root"), Pr = hc(De), Pr.render(
              Yi.createElement(
                Wp,
                null,
                Yi.createElement(Jp)
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
