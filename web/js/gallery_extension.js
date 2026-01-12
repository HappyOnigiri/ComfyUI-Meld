import { api as G } from "../../../scripts/api.js";
import { app as _c } from "../../../scripts/app.js";
function Cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var la = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr = Symbol.for("react.element"), Nc = Symbol.for("react.portal"), jc = Symbol.for("react.fragment"), Ic = Symbol.for("react.strict_mode"), Tc = Symbol.for("react.profiler"), Pc = Symbol.for("react.provider"), Lc = Symbol.for("react.context"), Mc = Symbol.for("react.forward_ref"), zc = Symbol.for("react.suspense"), Rc = Symbol.for("react.memo"), Oc = Symbol.for("react.lazy"), Bi = Symbol.iterator;
function Dc(e) {
  return e === null || typeof e != "object" ? null : (e = Bi && e[Bi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oa = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ia = Object.assign, sa = {};
function gn(e, t, n) {
  this.props = e, this.context = t, this.refs = sa, this.updater = n || oa;
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function aa() {
}
aa.prototype = gn.prototype;
function Zo(e, t, n) {
  this.props = e, this.context = t, this.refs = sa, this.updater = n || oa;
}
var Jo = Zo.prototype = new aa();
Jo.constructor = Zo;
ia(Jo, gn.prototype);
Jo.isPureReactComponent = !0;
var Hi = Array.isArray, ua = Object.prototype.hasOwnProperty, qo = { current: null }, ca = { key: !0, ref: !0, __self: !0, __source: !0 };
function da(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ua.call(t, r) && !ca.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: lr, type: e, key: o, ref: i, props: l, _owner: qo.current };
}
function Fc(e, t) {
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
var Gi = /\/+/g;
function Pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ac("" + e.key) : t.toString(36);
}
function Tr(e, t, n, r, l) {
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
  if (i) return i = e, l = l(i), e = r === "" ? "." + Pl(i, 0) : r, Hi(l) ? (n = "", e != null && (n = e.replace(Gi, "$&/") + "/"), Tr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (bo(l) && (l = Fc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Gi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Hi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + Pl(o, u);
    i += Tr(o, t, n, s, l);
  }
  else if (s = Dc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Pl(o, u++), i += Tr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function dr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Tr(e, r, "", "", function(o) {
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
var he = { current: null }, Pr = { transition: null }, Uc = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: Pr, ReactCurrentOwner: qo };
function fa() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = { map: dr, forEach: function(e, t, n) {
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
O.Component = gn;
O.Fragment = jc;
O.Profiler = Tc;
O.PureComponent = Zo;
O.StrictMode = Ic;
O.Suspense = zc;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uc;
O.act = fa;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ia({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = qo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ua.call(t, s) && !ca.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function(e) {
  return e = { $$typeof: Lc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Pc, _context: e }, e.Consumer = e;
};
O.createElement = da;
O.createFactory = function(e) {
  var t = da.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: Mc, render: e };
};
O.isValidElement = bo;
O.lazy = function(e) {
  return { $$typeof: Oc, _payload: { _status: -1, _result: e }, _init: $c };
};
O.memo = function(e, t) {
  return { $$typeof: Rc, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = Pr.transition;
  Pr.transition = {};
  try {
    e();
  } finally {
    Pr.transition = t;
  }
};
O.unstable_act = fa;
O.useCallback = function(e, t) {
  return he.current.useCallback(e, t);
};
O.useContext = function(e) {
  return he.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return he.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return he.current.useEffect(e, t);
};
O.useId = function() {
  return he.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return he.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return he.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return he.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return he.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return he.current.useRef(e);
};
O.useState = function(e) {
  return he.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return he.current.useTransition();
};
O.version = "18.3.1";
la.exports = O;
var T = la.exports;
const Ki = /* @__PURE__ */ Cc(T);
var pa = { exports: {} }, je = {}, ma = { exports: {} }, ha = {};
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
    var R = N.length;
    N.push(M);
    e: for (; 0 < R; ) {
      var Z = R - 1 >>> 1, ne = N[Z];
      if (0 < l(ne, M)) N[Z] = M, N[R] = ne, R = Z;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var M = N[0], R = N.pop();
    if (R !== M) {
      N[0] = R;
      e: for (var Z = 0, ne = N.length, ur = ne >>> 1; Z < ur; ) {
        var Nt = 2 * (Z + 1) - 1, Tl = N[Nt], jt = Nt + 1, cr = N[jt];
        if (0 > l(Tl, R)) jt < ne && 0 > l(cr, Tl) ? (N[Z] = cr, N[jt] = R, Z = jt) : (N[Z] = Tl, N[Nt] = R, Z = Nt);
        else if (jt < ne && 0 > l(cr, R)) N[Z] = cr, N[jt] = R, Z = jt;
        else break e;
      }
    }
    return M;
  }
  function l(N, M) {
    var R = N.sortIndex - M.sortIndex;
    return R !== 0 ? R : N.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], f = [], h = 1, y = null, m = 3, x = !1, S = !1, g = !1, L = typeof setTimeout == "function" ? setTimeout : null, a = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var M = n(f); M !== null; ) {
      if (M.callback === null) r(f);
      else if (M.startTime <= N) r(f), M.sortIndex = M.expirationTime, t(s, M);
      else break;
      M = n(f);
    }
  }
  function v(N) {
    if (g = !1, p(N), !S) if (n(s) !== null) S = !0, lt(E);
    else {
      var M = n(f);
      M !== null && Wt(v, M.startTime - N);
    }
  }
  function E(N, M) {
    S = !1, g && (g = !1, a(P), P = -1), x = !0;
    var R = m;
    try {
      for (p(M), y = n(s); y !== null && (!(y.expirationTime > M) || N && !k()); ) {
        var Z = y.callback;
        if (typeof Z == "function") {
          y.callback = null, m = y.priorityLevel;
          var ne = Z(y.expirationTime <= M);
          M = e.unstable_now(), typeof ne == "function" ? y.callback = ne : y === n(s) && r(s), p(M);
        } else r(s);
        y = n(s);
      }
      if (y !== null) var ur = !0;
      else {
        var Nt = n(f);
        Nt !== null && Wt(v, Nt.startTime - M), ur = !1;
      }
      return ur;
    } finally {
      y = null, m = R, x = !1;
    }
  }
  var j = !1, I = null, P = -1, B = 5, z = -1;
  function k() {
    return !(e.unstable_now() - z < B);
  }
  function _() {
    if (I !== null) {
      var N = e.unstable_now();
      z = N;
      var M = !0;
      try {
        M = I(!0, N);
      } finally {
        M ? $() : (j = !1, I = null);
      }
    } else j = !1;
  }
  var $;
  if (typeof d == "function") $ = function() {
    d(_);
  };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(), ke = q.port2;
    q.port1.onmessage = _, $ = function() {
      ke.postMessage(null);
    };
  } else $ = function() {
    L(_, 0);
  };
  function lt(N) {
    I = N, j || (j = !0, $());
  }
  function Wt(N, M) {
    P = L(function() {
      N(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    S || x || (S = !0, lt(E));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < N ? Math.floor(1e3 / N) : 5;
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
    var R = m;
    m = M;
    try {
      return N();
    } finally {
      m = R;
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
    var R = m;
    m = N;
    try {
      return M();
    } finally {
      m = R;
    }
  }, e.unstable_scheduleCallback = function(N, M, R) {
    var Z = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? Z + R : Z) : R = Z, N) {
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
    return ne = R + ne, N = { id: h++, callback: M, priorityLevel: N, startTime: R, expirationTime: ne, sortIndex: -1 }, R > Z ? (N.sortIndex = R, t(f, N), n(s) === null && N === n(f) && (g ? (a(P), P = -1) : g = !0, Wt(v, R - Z))) : (N.sortIndex = ne, t(s, N), S || x || (S = !0, lt(E))), N;
  }, e.unstable_shouldYield = k, e.unstable_wrapCallback = function(N) {
    var M = m;
    return function() {
      var R = m;
      m = M;
      try {
        return N.apply(this, arguments);
      } finally {
        m = R;
      }
    };
  };
})(ha);
ma.exports = ha;
var Vc = ma.exports;
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
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ya = /* @__PURE__ */ new Set(), Vn = {};
function Ut(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Vn[e] = t, e = 0; e < t.length; e++) ya.add(t[e]);
}
var be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), no = Object.prototype.hasOwnProperty, Wc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Yi = {}, Xi = {};
function Bc(e) {
  return no.call(Xi, e) ? !0 : no.call(Yi, e) ? !1 : Wc.test(e) ? Xi[e] = !0 : (Yi[e] = !0, !1);
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
function ye(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  se[e] = new ye(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  se[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  se[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  se[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  se[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  se[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  se[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  se[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  se[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  se[t] = new ye(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ei, ti);
  se[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ei, ti);
  se[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  se[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  se[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ni(e, t, n, r) {
  var l = se.hasOwnProperty(t) ? se[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gc(t, n, l, r) && (n = null), r || l === null ? Bc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fr = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), ri = Symbol.for("react.strict_mode"), ro = Symbol.for("react.profiler"), ga = Symbol.for("react.provider"), va = Symbol.for("react.context"), li = Symbol.for("react.forward_ref"), lo = Symbol.for("react.suspense"), oo = Symbol.for("react.suspense_list"), oi = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), wa = Symbol.for("react.offscreen"), Zi = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object" ? null : (e = Zi && e[Zi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, Ll;
function In(e) {
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
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    Ml = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? In(e) : "";
}
function Kc(e) {
  switch (e.tag) {
    case 5:
      return In(e.type);
    case 16:
      return In("Lazy");
    case 13:
      return In("Suspense");
    case 19:
      return In("SuspenseList");
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
    case va:
      return (e.displayName || "Context") + ".Consumer";
    case ga:
      return (e._context.displayName || "Context") + ".Provider";
    case li:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case oi:
      return t = e.displayName || null, t !== null ? t : io(e.type) || "Memo";
    case it:
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
function xt(e) {
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
function xa(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Xc(e) {
  var t = xa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  return e && (r = xa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ji(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = xt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ka(e, t) {
  t = t.checked, t != null && ni(e, "checked", t, !1);
}
function ao(e, t) {
  ka(e, t);
  var n = xt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? uo(e, t.type, n) : t.hasOwnProperty("defaultValue") && uo(e, t.type, xt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function qi(e, t, n) {
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
var Tn = Array.isArray;
function rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function bi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (Tn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: xt(n) };
}
function Ea(e, t) {
  var n = xt(t.value), r = xt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function es(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _a(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? _a(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var mr, Ca = function(e) {
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
function Na(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mn.hasOwnProperty(e) && Mn[e] ? ("" + t).trim() : t + "px";
}
function ja(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Na(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Jc = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function po(e, t) {
  if (t) {
    if (Jc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
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
function ts(e) {
  if (e = sr(e)) {
    if (typeof yo != "function") throw Error(w(280));
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
    if (on = ln = null, ts(e), t) for (e = 0; e < t.length; e++) ts(t[e]);
  }
}
function Pa(e, t) {
  return e(t);
}
function La() {
}
var Rl = !1;
function Ma(e, t, n) {
  if (Rl) return e(t, n);
  Rl = !0;
  try {
    return Pa(e, t, n);
  } finally {
    Rl = !1, (ln !== null || on !== null) && (La(), Ta());
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
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var go = !1;
if (be) try {
  var Sn = {};
  Object.defineProperty(Sn, "passive", { get: function() {
    go = !0;
  } }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
} catch {
  go = !1;
}
function qc(e, t, n, r, l, o, i, u, s) {
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
function ed(e, t, n, r, l, o, i, u, s) {
  zn = !1, Qr = null, qc.apply(bc, arguments);
}
function td(e, t, n, r, l, o, i, u, s) {
  if (ed.apply(this, arguments), zn) {
    if (zn) {
      var f = Qr;
      zn = !1, Qr = null;
    } else throw Error(w(198));
    Wr || (Wr = !0, vo = f);
  }
}
function Vt(e) {
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
function za(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ns(e) {
  if (Vt(e) !== e) throw Error(w(188));
}
function nd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Vt(e), t === null) throw Error(w(188));
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
        if (o === n) return ns(l), e;
        if (o === r) return ns(l), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function Ra(e) {
  return e = nd(e), e !== null ? Oa(e) : null;
}
function Oa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Oa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Da = Ne.unstable_scheduleCallback, rs = Ne.unstable_cancelCallback, rd = Ne.unstable_shouldYield, ld = Ne.unstable_requestPaint, J = Ne.unstable_now, od = Ne.unstable_getCurrentPriorityLevel, si = Ne.unstable_ImmediatePriority, Fa = Ne.unstable_UserBlockingPriority, Br = Ne.unstable_NormalPriority, id = Ne.unstable_LowPriority, Aa = Ne.unstable_IdlePriority, fl = null, Ge = null;
function sd(e) {
  if (Ge && typeof Ge.onCommitFiberRoot == "function") try {
    Ge.onCommitFiberRoot(fl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ue = Math.clz32 ? Math.clz32 : cd, ad = Math.log, ud = Math.LN2;
function cd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ad(e) / ud | 0) | 0;
}
var hr = 64, yr = 4194304;
function Pn(e) {
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
    var u = i & ~l;
    u !== 0 ? r = Pn(u) : (o &= i, o !== 0 && (r = Pn(o)));
  } else i = n & ~l, i !== 0 ? r = Pn(i) : o !== 0 && (r = Pn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ue(t), l = 1 << n, r |= e[n], t &= ~l;
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
    var i = 31 - Ue(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = dd(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function wo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function $a() {
  var e = hr;
  return hr <<= 1, !(hr & 4194240) && (hr = 64), e;
}
function Ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function or(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ue(t), e[t] = n;
}
function pd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ue(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function ai(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var F = 0;
function Ua(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Va, ui, Qa, Wa, Ba, xo = !1, gr = [], ft = null, pt = null, mt = null, Bn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), at = [], md = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ls(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
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
function kn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = sr(t), t !== null && ui(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function hd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ft = kn(ft, e, t, n, r, l), !0;
    case "dragenter":
      return pt = kn(pt, e, t, n, r, l), !0;
    case "mouseover":
      return mt = kn(mt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Bn.set(o, kn(Bn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Hn.set(o, kn(Hn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Ha(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = za(n), t !== null) {
          e.blockedOn = t, Ba(e.priority, function() {
            Qa(n);
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
    var n = So(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ho = r, n.target.dispatchEvent(r), ho = null;
    } else return t = sr(n), t !== null && ui(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function os(e, t, n) {
  Lr(e) && n.delete(t);
}
function yd() {
  xo = !1, ft !== null && Lr(ft) && (ft = null), pt !== null && Lr(pt) && (pt = null), mt !== null && Lr(mt) && (mt = null), Bn.forEach(os), Hn.forEach(os);
}
function En(e, t) {
  e.blockedOn === t && (e.blockedOn = null, xo || (xo = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, yd)));
}
function Gn(e) {
  function t(l) {
    return En(l, e);
  }
  if (0 < gr.length) {
    En(gr[0], e);
    for (var n = 1; n < gr.length; n++) {
      var r = gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ft !== null && En(ft, e), pt !== null && En(pt, e), mt !== null && En(mt, e), Bn.forEach(t), Hn.forEach(t), n = 0; n < at.length; n++) r = at[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < at.length && (n = at[0], n.blockedOn === null); ) Ha(n), n.blockedOn === null && at.shift();
}
var sn = rt.ReactCurrentBatchConfig, Gr = !0;
function gd(e, t, n, r) {
  var l = F, o = sn.transition;
  sn.transition = null;
  try {
    F = 1, ci(e, t, n, r);
  } finally {
    F = l, sn.transition = o;
  }
}
function vd(e, t, n, r) {
  var l = F, o = sn.transition;
  sn.transition = null;
  try {
    F = 4, ci(e, t, n, r);
  } finally {
    F = l, sn.transition = o;
  }
}
function ci(e, t, n, r) {
  if (Gr) {
    var l = So(e, t, n, r);
    if (l === null) Hl(e, t, r, Kr, n), ls(e, r);
    else if (hd(l, e, t, n, r)) r.stopPropagation();
    else if (ls(e, r), t & 4 && -1 < md.indexOf(e)) {
      for (; l !== null; ) {
        var o = sr(l);
        if (o !== null && Va(o), o = So(e, t, n, r), o === null && Hl(e, t, r, Kr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Hl(e, t, r, null, n);
  }
}
var Kr = null;
function So(e, t, n, r) {
  if (Kr = null, e = ii(r), e = Pt(e), e !== null) if (t = Vt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = za(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Kr = e, null;
}
function Ga(e) {
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
        case Fa:
          return 4;
        case Br:
        case id:
          return 16;
        case Aa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null, di = null, Mr = null;
function Ka() {
  if (Mr) return Mr;
  var e, t = di, n = t.length, r, l = "value" in ct ? ct.value : ct.textContent, o = l.length;
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
function is() {
  return !1;
}
function Ie(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vr : is, this.isPropagationStopped = is, this;
  }
  return Y(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, fi = Ie(vn), ir = Y({}, vn, { view: 0, detail: 0 }), wd = Ie(ir), Dl, Fl, _n, pl = Y({}, ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== _n && (_n && e.type === "mousemove" ? (Dl = e.screenX - _n.screenX, Fl = e.screenY - _n.screenY) : Fl = Dl = 0, _n = e), Dl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fl;
} }), ss = Ie(pl), xd = Y({}, pl, { dataTransfer: 0 }), Sd = Ie(xd), kd = Y({}, ir, { relatedTarget: 0 }), Al = Ie(kd), Ed = Y({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _d = Ie(Ed), Cd = Y({}, vn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Nd = Ie(Cd), jd = Y({}, vn, { data: 0 }), as = Ie(jd), Id = {
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
}, Td = {
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
}, Pd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ld(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pd[e]) ? !!t[e] : !1;
}
function pi() {
  return Ld;
}
var Md = Y({}, ir, { key: function(e) {
  if (e.key) {
    var t = Id[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Td[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pi, charCode: function(e) {
  return e.type === "keypress" ? zr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), zd = Ie(Md), Rd = Y({}, pl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), us = Ie(Rd), Od = Y({}, ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pi }), Dd = Ie(Od), Fd = Y({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ad = Ie(Fd), $d = Y({}, pl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ud = Ie($d), Vd = [9, 13, 27, 32], mi = be && "CompositionEvent" in window, Rn = null;
be && "documentMode" in document && (Rn = document.documentMode);
var Qd = be && "TextEvent" in window && !Rn, Ya = be && (!mi || Rn && 8 < Rn && 11 >= Rn), cs = " ", ds = !1;
function Xa(e, t) {
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
function Za(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function Wd(e, t) {
  switch (e) {
    case "compositionend":
      return Za(t);
    case "keypress":
      return t.which !== 32 ? null : (ds = !0, cs);
    case "textInput":
      return e = t.data, e === cs && ds ? null : e;
    default:
      return null;
  }
}
function Bd(e, t) {
  if (Kt) return e === "compositionend" || !mi && Xa(e, t) ? (e = Ka(), Mr = di = ct = null, Kt = !1, e) : null;
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
      return Ya && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Hd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Hd[e.type] : t === "textarea";
}
function Ja(e, t, n, r) {
  Ia(r), t = Yr(t, "onChange"), 0 < t.length && (n = new fi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var On = null, Kn = null;
function Gd(e) {
  au(e, 0);
}
function ml(e) {
  var t = Zt(e);
  if (Sa(t)) return e;
}
function Kd(e, t) {
  if (e === "change") return t;
}
var qa = !1;
if (be) {
  var $l;
  if (be) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var ps = document.createElement("div");
      ps.setAttribute("oninput", "return;"), Ul = typeof ps.oninput == "function";
    }
    $l = Ul;
  } else $l = !1;
  qa = $l && (!document.documentMode || 9 < document.documentMode);
}
function ms() {
  On && (On.detachEvent("onpropertychange", ba), Kn = On = null);
}
function ba(e) {
  if (e.propertyName === "value" && ml(Kn)) {
    var t = [];
    Ja(t, Kn, e, ii(e)), Ma(Gd, t);
  }
}
function Yd(e, t, n) {
  e === "focusin" ? (ms(), On = t, Kn = n, On.attachEvent("onpropertychange", ba)) : e === "focusout" && ms();
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
var Qe = typeof Object.is == "function" ? Object.is : qd;
function Yn(e, t) {
  if (Qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!no.call(t, l) || !Qe(e[l], t[l])) return !1;
  }
  return !0;
}
function hs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ys(e, t) {
  var n = hs(e);
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
    n = hs(n);
  }
}
function eu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? eu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function tu() {
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
  var t = tu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && eu(n.ownerDocument.documentElement, n)) {
    if (r !== null && hi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = ys(n, o);
        var i = ys(
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
var ef = be && "documentMode" in document && 11 >= document.documentMode, Yt = null, ko = null, Dn = null, Eo = !1;
function gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Eo || Yt == null || Yt !== Vr(r) || (r = Yt, "selectionStart" in r && hi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Dn && Yn(Dn, r) || (Dn = r, r = Yr(ko, "onSelect"), 0 < r.length && (t = new fi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yt)));
}
function wr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xt = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") }, Vl = {}, nu = {};
be && (nu = document.createElement("div").style, "AnimationEvent" in window || (delete Xt.animationend.animation, delete Xt.animationiteration.animation, delete Xt.animationstart.animation), "TransitionEvent" in window || delete Xt.transitionend.transition);
function hl(e) {
  if (Vl[e]) return Vl[e];
  if (!Xt[e]) return e;
  var t = Xt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in nu) return Vl[e] = t[n];
  return e;
}
var ru = hl("animationend"), lu = hl("animationiteration"), ou = hl("animationstart"), iu = hl("transitionend"), su = /* @__PURE__ */ new Map(), vs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function kt(e, t) {
  su.set(e, t), Ut(t, [e]);
}
for (var Ql = 0; Ql < vs.length; Ql++) {
  var Wl = vs[Ql], tf = Wl.toLowerCase(), nf = Wl[0].toUpperCase() + Wl.slice(1);
  kt(tf, "on" + nf);
}
kt(ru, "onAnimationEnd");
kt(lu, "onAnimationIteration");
kt(ou, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(iu, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Ut("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ut("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ut("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ut("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function ws(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, td(r, t, void 0, e), e.currentTarget = null;
}
function au(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        ws(l, u, f), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, f = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        ws(l, u, f), o = s;
      }
    }
  }
  if (Wr) throw e = vo, Wr = !1, vo = null, e;
}
function U(e, t) {
  var n = t[Io];
  n === void 0 && (n = t[Io] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (uu(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), uu(n, e, r, t);
}
var xr = "_reactListening" + Math.random().toString(36).slice(2);
function Xn(e) {
  if (!e[xr]) {
    e[xr] = !0, ya.forEach(function(n) {
      n !== "selectionchange" && (rf.has(n) || Bl(n, !1, e), Bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xr] || (t[xr] = !0, Bl("selectionchange", !1, t));
  }
}
function uu(e, t, n, r) {
  switch (Ga(t)) {
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
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = Pt(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Ma(function() {
    var f = o, h = ii(n), y = [];
    e: {
      var m = su.get(e);
      if (m !== void 0) {
        var x = fi, S = e;
        switch (e) {
          case "keypress":
            if (zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = zd;
            break;
          case "focusin":
            S = "focus", x = Al;
            break;
          case "focusout":
            S = "blur", x = Al;
            break;
          case "beforeblur":
          case "afterblur":
            x = Al;
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
            x = ss;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Sd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Dd;
            break;
          case ru:
          case lu:
          case ou:
            x = _d;
            break;
          case iu:
            x = Ad;
            break;
          case "scroll":
            x = wd;
            break;
          case "wheel":
            x = Ud;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Nd;
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
        var g = (t & 4) !== 0, L = !g && e === "scroll", a = g ? m !== null ? m + "Capture" : null : m;
        g = [];
        for (var d = f, p; d !== null; ) {
          p = d;
          var v = p.stateNode;
          if (p.tag === 5 && v !== null && (p = v, a !== null && (v = Wn(d, a), v != null && g.push(Zn(d, v, p)))), L) break;
          d = d.return;
        }
        0 < g.length && (m = new x(m, S, null, n, h), y.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", m && n !== ho && (S = n.relatedTarget || n.fromElement) && (Pt(S) || S[et])) break e;
        if ((x || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, x ? (S = n.relatedTarget || n.toElement, x = f, S = S ? Pt(S) : null, S !== null && (L = Vt(S), S !== L || S.tag !== 5 && S.tag !== 6) && (S = null)) : (x = null, S = f), x !== S)) {
          if (g = ss, v = "onMouseLeave", a = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (g = us, v = "onPointerLeave", a = "onPointerEnter", d = "pointer"), L = x == null ? m : Zt(x), p = S == null ? m : Zt(S), m = new g(v, d + "leave", x, n, h), m.target = L, m.relatedTarget = p, v = null, Pt(h) === f && (g = new g(a, d + "enter", S, n, h), g.target = p, g.relatedTarget = L, v = g), L = v, x && S) t: {
            for (g = x, a = S, d = 0, p = g; p; p = Bt(p)) d++;
            for (p = 0, v = a; v; v = Bt(v)) p++;
            for (; 0 < d - p; ) g = Bt(g), d--;
            for (; 0 < p - d; ) a = Bt(a), p--;
            for (; d--; ) {
              if (g === a || a !== null && g === a.alternate) break t;
              g = Bt(g), a = Bt(a);
            }
            g = null;
          }
          else g = null;
          x !== null && xs(y, m, x, g, !1), S !== null && L !== null && xs(y, L, S, g, !0);
        }
      }
      e: {
        if (m = f ? Zt(f) : window, x = m.nodeName && m.nodeName.toLowerCase(), x === "select" || x === "input" && m.type === "file") var E = Kd;
        else if (fs(m)) if (qa) E = Jd;
        else {
          E = Xd;
          var j = Yd;
        }
        else (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = Zd);
        if (E && (E = E(e, f))) {
          Ja(y, E, n, h);
          break e;
        }
        j && j(e, m, f), e === "focusout" && (j = m._wrapperState) && j.controlled && m.type === "number" && uo(m, "number", m.value);
      }
      switch (j = f ? Zt(f) : window, e) {
        case "focusin":
          (fs(j) || j.contentEditable === "true") && (Yt = j, ko = f, Dn = null);
          break;
        case "focusout":
          Dn = ko = Yt = null;
          break;
        case "mousedown":
          Eo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Eo = !1, gs(y, n, h);
          break;
        case "selectionchange":
          if (ef) break;
        case "keydown":
        case "keyup":
          gs(y, n, h);
      }
      var I;
      if (mi) e: {
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
      else Kt ? Xa(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Ya && n.locale !== "ko" && (Kt || P !== "onCompositionStart" ? P === "onCompositionEnd" && Kt && (I = Ka()) : (ct = h, di = "value" in ct ? ct.value : ct.textContent, Kt = !0)), j = Yr(f, P), 0 < j.length && (P = new as(P, e, null, n, h), y.push({ event: P, listeners: j }), I ? P.data = I : (I = Za(n), I !== null && (P.data = I)))), (I = Qd ? Wd(e, n) : Bd(e, n)) && (f = Yr(f, "onBeforeInput"), 0 < f.length && (h = new as("onBeforeInput", "beforeinput", null, n, h), y.push({ event: h, listeners: f }), h.data = I));
    }
    au(y, t);
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
function xs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, l ? (s = Wn(n, o), s != null && i.unshift(Zn(n, s, u))) : l || (s = Wn(n, o), s != null && i.push(Zn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var lf = /\r\n?/g, of = /\u0000|\uFFFD/g;
function Ss(e) {
  return (typeof e == "string" ? e : "" + e).replace(lf, `
`).replace(of, "");
}
function Sr(e, t, n) {
  if (t = Ss(t), Ss(e) !== t && n) throw Error(w(425));
}
function Xr() {
}
var _o = null, Co = null;
function No(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var jo = typeof setTimeout == "function" ? setTimeout : void 0, sf = typeof clearTimeout == "function" ? clearTimeout : void 0, ks = typeof Promise == "function" ? Promise : void 0, af = typeof queueMicrotask == "function" ? queueMicrotask : typeof ks < "u" ? function(e) {
  return ks.resolve(null).then(e).catch(uf);
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
function ht(e) {
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
var wn = Math.random().toString(36).slice(2), He = "__reactFiber$" + wn, Jn = "__reactProps$" + wn, et = "__reactContainer$" + wn, Io = "__reactEvents$" + wn, cf = "__reactListeners$" + wn, df = "__reactHandles$" + wn;
function Pt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[et] || n[He]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Es(e); e !== null; ) {
        if (n = e[He]) return n;
        e = Es(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function sr(e) {
  return e = e[He] || e[et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function yl(e) {
  return e[Jn] || null;
}
var To = [], Jt = -1;
function Et(e) {
  return { current: e };
}
function V(e) {
  0 > Jt || (e.current = To[Jt], To[Jt] = null, Jt--);
}
function A(e, t) {
  Jt++, To[Jt] = e.current, e.current = t;
}
var St = {}, de = Et(St), we = Et(!1), Ot = St;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function xe(e) {
  return e = e.childContextTypes, e != null;
}
function Zr() {
  V(we), V(de);
}
function _s(e, t, n) {
  if (de.current !== St) throw Error(w(168));
  A(de, t), A(we, n);
}
function cu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Yc(e) || "Unknown", l));
  return Y({}, n, r);
}
function Jr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || St, Ot = de.current, A(de, e), A(we, we.current), !0;
}
function Cs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = cu(e, t, Ot), r.__reactInternalMemoizedMergedChildContext = e, V(we), V(de), A(de, e)) : V(we), A(we, n);
}
var Xe = null, gl = !1, Kl = !1;
function du(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
function ff(e) {
  gl = !0, du(e);
}
function _t() {
  if (!Kl && Xe !== null) {
    Kl = !0;
    var e = 0, t = F;
    try {
      var n = Xe;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xe = null, gl = !1;
    } catch (l) {
      throw Xe !== null && (Xe = Xe.slice(e + 1)), Da(si, _t), l;
    } finally {
      F = t, Kl = !1;
    }
  }
  return null;
}
var qt = [], bt = 0, qr = null, br = 0, Te = [], Pe = 0, Dt = null, Ze = 1, Je = "";
function It(e, t) {
  qt[bt++] = br, qt[bt++] = qr, qr = e, br = t;
}
function fu(e, t, n) {
  Te[Pe++] = Ze, Te[Pe++] = Je, Te[Pe++] = Dt, Dt = e;
  var r = Ze;
  e = Je;
  var l = 32 - Ue(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Ue(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ze = 1 << 32 - Ue(t) + l | n << l | r, Je = o + e;
  } else Ze = 1 << o | n << l | r, Je = e;
}
function yi(e) {
  e.return !== null && (It(e, 1), fu(e, 1, 0));
}
function gi(e) {
  for (; e === qr; ) qr = qt[--bt], qt[bt] = null, br = qt[--bt], qt[bt] = null;
  for (; e === Dt; ) Dt = Te[--Pe], Te[Pe] = null, Je = Te[--Pe], Te[Pe] = null, Ze = Te[--Pe], Te[Pe] = null;
}
var Ce = null, _e = null, W = !1, $e = null;
function pu(e, t) {
  var n = Le(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ns(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ce = e, _e = ht(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ce = e, _e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dt !== null ? { id: Ze, overflow: Je } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Le(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ce = e, _e = null, !0) : !1;
    default:
      return !1;
  }
}
function Po(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Lo(e) {
  if (W) {
    var t = _e;
    if (t) {
      var n = t;
      if (!Ns(e, t)) {
        if (Po(e)) throw Error(w(418));
        t = ht(n.nextSibling);
        var r = Ce;
        t && Ns(e, t) ? pu(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Ce = e);
      }
    } else {
      if (Po(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, W = !1, Ce = e;
    }
  }
}
function js(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ce = e;
}
function kr(e) {
  if (e !== Ce) return !1;
  if (!W) return js(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !No(e.type, e.memoizedProps)), t && (t = _e)) {
    if (Po(e)) throw mu(), Error(w(418));
    for (; t; ) pu(e, t), t = ht(t.nextSibling);
  }
  if (js(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _e = ht(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = Ce ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function mu() {
  for (var e = _e; e; ) e = ht(e.nextSibling);
}
function fn() {
  _e = Ce = null, W = !1;
}
function vi(e) {
  $e === null ? $e = [e] : $e.push(e);
}
var pf = rt.ReactCurrentBatchConfig;
function Cn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Er(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Is(e) {
  var t = e._init;
  return t(e._payload);
}
function hu(e) {
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
    return a = wt(a, d), a.index = 0, a.sibling = null, a;
  }
  function o(a, d, p) {
    return a.index = p, e ? (p = a.alternate, p !== null ? (p = p.index, p < d ? (a.flags |= 2, d) : p) : (a.flags |= 2, d)) : (a.flags |= 1048576, d);
  }
  function i(a) {
    return e && a.alternate === null && (a.flags |= 2), a;
  }
  function u(a, d, p, v) {
    return d === null || d.tag !== 6 ? (d = eo(p, a.mode, v), d.return = a, d) : (d = l(d, p), d.return = a, d);
  }
  function s(a, d, p, v) {
    var E = p.type;
    return E === Gt ? h(a, d, p.props.children, v, p.key) : d !== null && (d.elementType === E || typeof E == "object" && E !== null && E.$$typeof === it && Is(E) === d.type) ? (v = l(d, p.props), v.ref = Cn(a, d, p), v.return = a, v) : (v = Ur(p.type, p.key, p.props, null, a.mode, v), v.ref = Cn(a, d, p), v.return = a, v);
  }
  function f(a, d, p, v) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = to(p, a.mode, v), d.return = a, d) : (d = l(d, p.children || []), d.return = a, d);
  }
  function h(a, d, p, v, E) {
    return d === null || d.tag !== 7 ? (d = Rt(p, a.mode, v, E), d.return = a, d) : (d = l(d, p), d.return = a, d);
  }
  function y(a, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = eo("" + d, a.mode, p), d.return = a, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fr:
          return p = Ur(d.type, d.key, d.props, null, a.mode, p), p.ref = Cn(a, null, d), p.return = a, p;
        case Ht:
          return d = to(d, a.mode, p), d.return = a, d;
        case it:
          var v = d._init;
          return y(a, v(d._payload), p);
      }
      if (Tn(d) || xn(d)) return d = Rt(d, a.mode, p, null), d.return = a, d;
      Er(a, d);
    }
    return null;
  }
  function m(a, d, p, v) {
    var E = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return E !== null ? null : u(a, d, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fr:
          return p.key === E ? s(a, d, p, v) : null;
        case Ht:
          return p.key === E ? f(a, d, p, v) : null;
        case it:
          return E = p._init, m(
            a,
            d,
            E(p._payload),
            v
          );
      }
      if (Tn(p) || xn(p)) return E !== null ? null : h(a, d, p, v, null);
      Er(a, p);
    }
    return null;
  }
  function x(a, d, p, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return a = a.get(p) || null, u(d, a, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case fr:
          return a = a.get(v.key === null ? p : v.key) || null, s(d, a, v, E);
        case Ht:
          return a = a.get(v.key === null ? p : v.key) || null, f(d, a, v, E);
        case it:
          var j = v._init;
          return x(a, d, p, j(v._payload), E);
      }
      if (Tn(v) || xn(v)) return a = a.get(p) || null, h(d, a, v, E, null);
      Er(d, v);
    }
    return null;
  }
  function S(a, d, p, v) {
    for (var E = null, j = null, I = d, P = d = 0, B = null; I !== null && P < p.length; P++) {
      I.index > P ? (B = I, I = null) : B = I.sibling;
      var z = m(a, I, p[P], v);
      if (z === null) {
        I === null && (I = B);
        break;
      }
      e && I && z.alternate === null && t(a, I), d = o(z, d, P), j === null ? E = z : j.sibling = z, j = z, I = B;
    }
    if (P === p.length) return n(a, I), W && It(a, P), E;
    if (I === null) {
      for (; P < p.length; P++) I = y(a, p[P], v), I !== null && (d = o(I, d, P), j === null ? E = I : j.sibling = I, j = I);
      return W && It(a, P), E;
    }
    for (I = r(a, I); P < p.length; P++) B = x(I, a, P, p[P], v), B !== null && (e && B.alternate !== null && I.delete(B.key === null ? P : B.key), d = o(B, d, P), j === null ? E = B : j.sibling = B, j = B);
    return e && I.forEach(function(k) {
      return t(a, k);
    }), W && It(a, P), E;
  }
  function g(a, d, p, v) {
    var E = xn(p);
    if (typeof E != "function") throw Error(w(150));
    if (p = E.call(p), p == null) throw Error(w(151));
    for (var j = E = null, I = d, P = d = 0, B = null, z = p.next(); I !== null && !z.done; P++, z = p.next()) {
      I.index > P ? (B = I, I = null) : B = I.sibling;
      var k = m(a, I, z.value, v);
      if (k === null) {
        I === null && (I = B);
        break;
      }
      e && I && k.alternate === null && t(a, I), d = o(k, d, P), j === null ? E = k : j.sibling = k, j = k, I = B;
    }
    if (z.done) return n(
      a,
      I
    ), W && It(a, P), E;
    if (I === null) {
      for (; !z.done; P++, z = p.next()) z = y(a, z.value, v), z !== null && (d = o(z, d, P), j === null ? E = z : j.sibling = z, j = z);
      return W && It(a, P), E;
    }
    for (I = r(a, I); !z.done; P++, z = p.next()) z = x(I, a, P, z.value, v), z !== null && (e && z.alternate !== null && I.delete(z.key === null ? P : z.key), d = o(z, d, P), j === null ? E = z : j.sibling = z, j = z);
    return e && I.forEach(function(_) {
      return t(a, _);
    }), W && It(a, P), E;
  }
  function L(a, d, p, v) {
    if (typeof p == "object" && p !== null && p.type === Gt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fr:
          e: {
            for (var E = p.key, j = d; j !== null; ) {
              if (j.key === E) {
                if (E = p.type, E === Gt) {
                  if (j.tag === 7) {
                    n(a, j.sibling), d = l(j, p.props.children), d.return = a, a = d;
                    break e;
                  }
                } else if (j.elementType === E || typeof E == "object" && E !== null && E.$$typeof === it && Is(E) === j.type) {
                  n(a, j.sibling), d = l(j, p.props), d.ref = Cn(a, j, p), d.return = a, a = d;
                  break e;
                }
                n(a, j);
                break;
              } else t(a, j);
              j = j.sibling;
            }
            p.type === Gt ? (d = Rt(p.props.children, a.mode, v, p.key), d.return = a, a = d) : (v = Ur(p.type, p.key, p.props, null, a.mode, v), v.ref = Cn(a, d, p), v.return = a, a = v);
          }
          return i(a);
        case Ht:
          e: {
            for (j = p.key; d !== null; ) {
              if (d.key === j) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(a, d.sibling), d = l(d, p.children || []), d.return = a, a = d;
                break e;
              } else {
                n(a, d);
                break;
              }
              else t(a, d);
              d = d.sibling;
            }
            d = to(p, a.mode, v), d.return = a, a = d;
          }
          return i(a);
        case it:
          return j = p._init, L(a, d, j(p._payload), v);
      }
      if (Tn(p)) return S(a, d, p, v);
      if (xn(p)) return g(a, d, p, v);
      Er(a, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(a, d.sibling), d = l(d, p), d.return = a, a = d) : (n(a, d), d = eo(p, a.mode, v), d.return = a, a = d), i(a)) : n(a, d);
  }
  return L;
}
var pn = hu(!0), yu = hu(!1), el = Et(null), tl = null, en = null, wi = null;
function xi() {
  wi = en = tl = null;
}
function Si(e) {
  var t = el.current;
  V(el), e._currentValue = t;
}
function Mo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function an(e, t) {
  tl = e, wi = en = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ve = !0), e.firstContext = null);
}
function ze(e) {
  var t = e._currentValue;
  if (wi !== e) if (e = { context: e, memoizedValue: t, next: null }, en === null) {
    if (tl === null) throw Error(w(308));
    en = e, tl.dependencies = { lanes: 0, firstContext: e };
  } else en = en.next = e;
  return t;
}
var Lt = null;
function ki(e) {
  Lt === null ? Lt = [e] : Lt.push(e);
}
function gu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ki(t)) : (n.next = l.next, l.next = n), t.interleaved = n, tt(e, r);
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function Ei(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function vu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, D & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, tt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ki(r)) : (t.next = l.next, l.next = t), r.interleaved = t, tt(e, n);
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
  st = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, i === null ? o = f : i.next = f, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = f : u.next = f, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var y = l.baseState;
    i = 0, h = f = s = null, u = o;
    do {
      var m = u.lane, x = u.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: x,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, g = u;
          switch (m = t, x = n, g.tag) {
            case 1:
              if (S = g.payload, typeof S == "function") {
                y = S.call(x, y, m);
                break e;
              }
              y = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = g.payload, m = typeof S == "function" ? S.call(x, y, m) : S, m == null) break e;
              y = Y({}, y, m);
              break e;
            case 2:
              st = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else x = { eventTime: x, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (f = h = x, s = y) : h = h.next = x, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = y), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    At |= i, e.lanes = i, e.memoizedState = y;
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
var ar = {}, Ke = Et(ar), qn = Et(ar), bn = Et(ar);
function Mt(e) {
  if (e === ar) throw Error(w(174));
  return e;
}
function _i(e, t) {
  switch (A(bn, t), A(qn, e), A(Ke, ar), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = fo(t, e);
  }
  V(Ke), A(Ke, t);
}
function mn() {
  V(Ke), V(qn), V(bn);
}
function wu(e) {
  Mt(bn.current);
  var t = Mt(Ke.current), n = fo(t, e.type);
  t !== n && (A(qn, e), A(Ke, n));
}
function Ci(e) {
  qn.current === e && (V(Ke), V(qn));
}
var H = Et(0);
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
var Or = rt.ReactCurrentDispatcher, Xl = rt.ReactCurrentBatchConfig, Ft = 0, K = null, ee = null, re = null, ll = !1, Fn = !1, er = 0, mf = 0;
function ae() {
  throw Error(w(321));
}
function ji(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Qe(e[n], t[n])) return !1;
  return !0;
}
function Ii(e, t, n, r, l, o) {
  if (Ft = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Or.current = e === null || e.memoizedState === null ? vf : wf, e = n(r, l), Fn) {
    o = 0;
    do {
      if (Fn = !1, er = 0, 25 <= o) throw Error(w(301));
      o += 1, re = ee = null, t.updateQueue = null, Or.current = xf, e = n(r, l);
    } while (Fn);
  }
  if (Or.current = ol, t = ee !== null && ee.next !== null, Ft = 0, re = ee = K = null, ll = !1, t) throw Error(w(300));
  return e;
}
function Ti() {
  var e = er !== 0;
  return er = 0, e;
}
function Be() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return re === null ? K.memoizedState = re = e : re = re.next = e, re;
}
function Re() {
  if (ee === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = re === null ? K.memoizedState : re.next;
  if (t !== null) re = t, ee = e;
  else {
    if (e === null) throw Error(w(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, re === null ? K.memoizedState = re = e : re = re.next = e;
  }
  return re;
}
function tr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zl(e) {
  var t = Re(), n = t.queue;
  if (n === null) throw Error(w(311));
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
    var u = i = null, s = null, f = o;
    do {
      var h = f.lane;
      if ((Ft & h) === h) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var y = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (u = s = y, i = r) : s = s.next = y, K.lanes |= h, At |= h;
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? i = r : s.next = u, Qe(r, t.memoizedState) || (ve = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, K.lanes |= o, At |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Jl(e) {
  var t = Re(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Qe(o, t.memoizedState) || (ve = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function xu() {
}
function Su(e, t) {
  var n = K, r = Re(), l = t(), o = !Qe(r.memoizedState, l);
  if (o && (r.memoizedState = l, ve = !0), r = r.queue, Pi(_u.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || re !== null && re.memoizedState.tag & 1) {
    if (n.flags |= 2048, nr(9, Eu.bind(null, n, r, l, t), void 0, null), le === null) throw Error(w(349));
    Ft & 30 || ku(n, t, l);
  }
  return l;
}
function ku(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Eu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Cu(t) && Nu(e);
}
function _u(e, t, n) {
  return n(function() {
    Cu(t) && Nu(e);
  });
}
function Cu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qe(e, n);
  } catch {
    return !0;
  }
}
function Nu(e) {
  var t = tt(e, 1);
  t !== null && Ve(t, e, 1, -1);
}
function Ls(e) {
  var t = Be();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: tr, lastRenderedState: e }, t.queue = e, e = e.dispatch = gf.bind(null, K, e), [t.memoizedState, e];
}
function nr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ju() {
  return Re().memoizedState;
}
function Dr(e, t, n, r) {
  var l = Be();
  K.flags |= e, l.memoizedState = nr(1 | t, n, void 0, r === void 0 ? null : r);
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
  K.flags |= e, l.memoizedState = nr(1 | t, n, o, r);
}
function Ms(e, t) {
  return Dr(8390656, 8, e, t);
}
function Pi(e, t) {
  return vl(2048, 8, e, t);
}
function Iu(e, t) {
  return vl(4, 2, e, t);
}
function Tu(e, t) {
  return vl(4, 4, e, t);
}
function Pu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Lu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vl(4, 4, Pu.bind(null, t, e), n);
}
function Li() {
}
function Mu(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ji(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function zu(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ji(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ru(e, t, n) {
  return Ft & 21 ? (Qe(n, t) || (n = $a(), K.lanes |= n, At |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ve = !0), e.memoizedState = n);
}
function hf(e, t) {
  var n = F;
  F = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Xl.transition;
  Xl.transition = {};
  try {
    e(!1), t();
  } finally {
    F = n, Xl.transition = r;
  }
}
function Ou() {
  return Re().memoizedState;
}
function yf(e, t, n) {
  var r = vt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Du(e)) Fu(t, n);
  else if (n = gu(e, t, n, r), n !== null) {
    var l = me();
    Ve(n, e, r, l), Au(n, t, r);
  }
}
function gf(e, t, n) {
  var r = vt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Du(e)) Fu(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Qe(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, ki(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = gu(e, t, l, r), n !== null && (l = me(), Ve(n, e, r, l), Au(n, t, r));
  }
}
function Du(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Fu(e, t) {
  Fn = ll = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Au(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ai(e, n);
  }
}
var ol = { readContext: ze, useCallback: ae, useContext: ae, useEffect: ae, useImperativeHandle: ae, useInsertionEffect: ae, useLayoutEffect: ae, useMemo: ae, useReducer: ae, useRef: ae, useState: ae, useDebugValue: ae, useDeferredValue: ae, useTransition: ae, useMutableSource: ae, useSyncExternalStore: ae, useId: ae, unstable_isNewReconciler: !1 }, vf = { readContext: ze, useCallback: function(e, t) {
  return Be().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ze, useEffect: Ms, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Dr(
    4194308,
    4,
    Pu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Dr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Dr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Be();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Be();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = yf.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Be();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ls, useDebugValue: Li, useDeferredValue: function(e) {
  return Be().memoizedState = e;
}, useTransition: function() {
  var e = Ls(!1), t = e[0];
  return e = hf.bind(null, e[1]), Be().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, l = Be();
  if (W) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), le === null) throw Error(w(349));
    Ft & 30 || ku(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Ms(_u.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, nr(9, Eu.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Be(), t = le.identifierPrefix;
  if (W) {
    var n = Je, r = Ze;
    n = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = er++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = mf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wf = {
  readContext: ze,
  useCallback: Mu,
  useContext: ze,
  useEffect: Pi,
  useImperativeHandle: Lu,
  useInsertionEffect: Iu,
  useLayoutEffect: Tu,
  useMemo: zu,
  useReducer: Zl,
  useRef: ju,
  useState: function() {
    return Zl(tr);
  },
  useDebugValue: Li,
  useDeferredValue: function(e) {
    var t = Re();
    return Ru(t, ee.memoizedState, e);
  },
  useTransition: function() {
    var e = Zl(tr)[0], t = Re().memoizedState;
    return [e, t];
  },
  useMutableSource: xu,
  useSyncExternalStore: Su,
  useId: Ou,
  unstable_isNewReconciler: !1
}, xf = { readContext: ze, useCallback: Mu, useContext: ze, useEffect: Pi, useImperativeHandle: Lu, useInsertionEffect: Iu, useLayoutEffect: Tu, useMemo: zu, useReducer: Jl, useRef: ju, useState: function() {
  return Jl(tr);
}, useDebugValue: Li, useDeferredValue: function(e) {
  var t = Re();
  return ee === null ? t.memoizedState = e : Ru(t, ee.memoizedState, e);
}, useTransition: function() {
  var e = Jl(tr)[0], t = Re().memoizedState;
  return [e, t];
}, useMutableSource: xu, useSyncExternalStore: Su, useId: Ou, unstable_isNewReconciler: !1 };
function Fe(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Vt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = me(), l = vt(e), o = qe(r, l);
  o.payload = t, n != null && (o.callback = n), t = yt(e, o, l), t !== null && (Ve(t, e, l, r), Rr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = me(), l = vt(e), o = qe(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = yt(e, o, l), t !== null && (Ve(t, e, l, r), Rr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = me(), r = vt(e), l = qe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = yt(e, l, r), t !== null && (Ve(t, e, r, n), Rr(t, e, r));
} };
function zs(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Yn(n, r) || !Yn(l, o) : !0;
}
function $u(e, t, n) {
  var r = !1, l = St, o = t.contextType;
  return typeof o == "object" && o !== null ? o = ze(o) : (l = xe(t) ? Ot : de.current, r = t.contextTypes, o = (r = r != null) ? dn(e, l) : St), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = wl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Rs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && wl.enqueueReplaceState(t, t.state, null);
}
function Ro(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ei(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = ze(o) : (o = xe(t) ? Ot : de.current, l.context = dn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (zo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && wl.enqueueReplaceState(l, l.state, null), nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
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
var Sf = typeof WeakMap == "function" ? WeakMap : Map;
function Uu(e, t, n) {
  n = qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    sl || (sl = !0, Ho = r), Oo(e, t);
  }, n;
}
function Vu(e, t, n) {
  n = qe(-1, n), n.tag = 3;
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
    Oo(e, t), typeof r != "function" && (gt === null ? gt = /* @__PURE__ */ new Set([this]) : gt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Os(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sf();
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
function Fs(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qe(-1, 1), t.tag = 2, yt(n, t, 1))), n.lanes |= 1), e);
}
var kf = rt.ReactCurrentOwner, ve = !1;
function fe(e, t, n, r) {
  t.child = e === null ? yu(t, null, n, r) : pn(t, e.child, n, r);
}
function As(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return an(t, l), r = Ii(e, t, n, r, o, l), n = Ti(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : (W && n && yi(t), t.flags |= 1, fe(e, t, r, l), t.child);
}
function $s(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !$i(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Qu(e, t, o, r, l)) : (e = Ur(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Yn, n(i, r) && e.ref === t.ref) return nt(e, t, l);
  }
  return t.flags |= 1, e = wt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Qu(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yn(o, r) && e.ref === t.ref) if (ve = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ve = !0);
    else return t.lanes = e.lanes, nt(e, t, l);
  }
  return Do(e, t, n, r, l);
}
function Wu(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, A(nn, Ee), Ee |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, A(nn, Ee), Ee |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, A(nn, Ee), Ee |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, A(nn, Ee), Ee |= r;
  return fe(e, t, l, n), t.child;
}
function Bu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Do(e, t, n, r, l) {
  var o = xe(n) ? Ot : de.current;
  return o = dn(t, o), an(t, l), n = Ii(e, t, n, r, o, l), r = Ti(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : (W && r && yi(t), t.flags |= 1, fe(e, t, n, l), t.child);
}
function Us(e, t, n, r, l) {
  if (xe(n)) {
    var o = !0;
    Jr(t);
  } else o = !1;
  if (an(t, l), t.stateNode === null) Fr(e, t), $u(t, n, r), Ro(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = ze(f) : (f = xe(n) ? Ot : de.current, f = dn(t, f));
    var h = n.getDerivedStateFromProps, y = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== f) && Rs(t, i, r, f), st = !1;
    var m = t.memoizedState;
    i.state = m, nl(t, r, i, l), s = t.memoizedState, u !== r || m !== s || we.current || st ? (typeof h == "function" && (zo(t, n, h, r), s = t.memoizedState), (u = st || zs(t, n, u, r, m, s, f)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = f, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, vu(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : Fe(t.type, u), i.props = f, y = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = ze(s) : (s = xe(n) ? Ot : de.current, s = dn(t, s));
    var x = n.getDerivedStateFromProps;
    (h = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== y || m !== s) && Rs(t, i, r, s), st = !1, m = t.memoizedState, i.state = m, nl(t, r, i, l);
    var S = t.memoizedState;
    u !== y || m !== S || we.current || st ? (typeof x == "function" && (zo(t, n, x, r), S = t.memoizedState), (f = st || zs(t, n, f, r, m, S, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = s, r = f) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Fo(e, t, n, r, o, l);
}
function Fo(e, t, n, r, l, o) {
  Bu(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Cs(t, n, !1), nt(e, t, o);
  r = t.stateNode, kf.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = pn(t, e.child, null, o), t.child = pn(t, null, u, o)) : fe(e, t, u, o), t.memoizedState = r.state, l && Cs(t, n, !0), t.child;
}
function Hu(e) {
  var t = e.stateNode;
  t.pendingContext ? _s(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _s(e, t.context, !1), _i(e, t.containerInfo);
}
function Vs(e, t, n, r, l) {
  return fn(), vi(l), t.flags |= 256, fe(e, t, n, r), t.child;
}
var Ao = { dehydrated: null, treeContext: null, retryLane: 0 };
function $o(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gu(e, t, n) {
  var r = t.pendingProps, l = H.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), A(H, l & 1), e === null)
    return Lo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = kl(i, r, 0, null), e = Rt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = $o(n), t.memoizedState = Ao, e) : Mi(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Ef(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = wt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = wt(u, o) : (o = Rt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? $o(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ao, r;
  }
  return o = e.child, e = o.sibling, r = wt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Mi(e, t) {
  return t = kl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function _r(e, t, n, r) {
  return r !== null && vi(r), pn(t, e.child, null, n), e = Mi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ef(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ql(Error(w(422))), _r(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = kl({ mode: "visible", children: r.children }, l, 0, null), o = Rt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && pn(t, e.child, null, i), t.child.memoizedState = $o(i), t.memoizedState = Ao, o);
  if (!(t.mode & 1)) return _r(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(w(419)), r = ql(o, r, void 0), _r(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ve || u) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, tt(e, l), Ve(r, e, l, -1));
    }
    return Ai(), r = ql(Error(w(421))), _r(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Df.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, _e = ht(l.nextSibling), Ce = t, W = !0, $e = null, e !== null && (Te[Pe++] = Ze, Te[Pe++] = Je, Te[Pe++] = Dt, Ze = e.id, Je = e.overflow, Dt = t), t = Mi(t, r.children), t.flags |= 4096, t);
}
function Qs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mo(e.return, t, n);
}
function bl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Ku(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (fe(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Qs(e, n, t);
      else if (e.tag === 19) Qs(e, n, t);
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
  if (A(H, r), !(t.mode & 1)) t.memoizedState = null;
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
function Fr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function nt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), At |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = wt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function _f(e, t, n) {
  switch (t.tag) {
    case 3:
      Hu(t), fn();
      break;
    case 5:
      wu(t);
      break;
    case 1:
      xe(t.type) && Jr(t);
      break;
    case 4:
      _i(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      A(el, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (A(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gu(e, t, n) : (A(H, H.current & 1), e = nt(e, t, n), e !== null ? e.sibling : null);
      A(H, H.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ku(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), A(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Wu(e, t, n);
  }
  return nt(e, t, n);
}
var Yu, Uo, Xu, Zu;
Yu = function(e, t) {
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
Xu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Mt(Ke.current);
    var o = null;
    switch (n) {
      case "input":
        l = so(e, l), r = so(e, r), o = [];
        break;
      case "select":
        l = Y({}, l, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
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
      var u = l[f];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Vn.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Vn.hasOwnProperty(f) ? (s != null && f === "onScroll" && U("scroll", e), o || u === s || (o = [])) : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Zu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nn(e, t) {
  if (!W) switch (e.tailMode) {
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
function ue(e) {
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
      return ue(t), null;
    case 1:
      return xe(t.type) && Zr(), ue(t), null;
    case 3:
      return r = t.stateNode, mn(), V(we), V(de), Ni(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (kr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $e !== null && (Yo($e), $e = null))), Uo(e, t), ue(t), null;
    case 5:
      Ci(t);
      var l = Mt(bn.current);
      if (n = t.type, e !== null && t.stateNode != null) Xu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return ue(t), null;
        }
        if (e = Mt(Ke.current), kr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[He] = t, r[Jn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) U(Ln[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U(
                "error",
                r
              ), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Ji(r, o), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, U("invalid", r);
              break;
            case "textarea":
              bi(r, o), U("invalid", r);
          }
          po(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Sr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Sr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Vn.hasOwnProperty(i) && u != null && i === "onScroll" && U("scroll", r);
          }
          switch (n) {
            case "input":
              pr(r), qi(r, o, !0);
              break;
            case "textarea":
              pr(r), es(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Xr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _a(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[He] = t, e[Jn] = r, Yu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = mo(n, r), n) {
              case "dialog":
                U("cancel", e), U("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) U(Ln[l], e);
                l = r;
                break;
              case "source":
                U("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                U(
                  "error",
                  e
                ), U("load", e), l = r;
                break;
              case "details":
                U("toggle", e), l = r;
                break;
              case "input":
                Ji(e, r), l = so(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Y({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                bi(e, r), l = co(e, r), U("invalid", e);
                break;
              default:
                l = r;
            }
            po(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? ja(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ca(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Qn(e, s) : typeof s == "number" && Qn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Vn.hasOwnProperty(o) ? s != null && o === "onScroll" && U("scroll", e) : s != null && ni(e, o, s, i));
            }
            switch (n) {
              case "input":
                pr(e), qi(e, r, !1);
                break;
              case "textarea":
                pr(e), es(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xt(r.value));
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
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) Zu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = Mt(bn.current), Mt(Ke.current), kr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[He] = t, (o = r.nodeValue !== n) && (e = Ce, e !== null)) switch (e.tag) {
            case 3:
              Sr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Sr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[He] = t, t.stateNode = r;
      }
      return ue(t), null;
    case 13:
      if (V(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && _e !== null && t.mode & 1 && !(t.flags & 128)) mu(), fn(), t.flags |= 98560, o = !1;
        else if (o = kr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(w(317));
            o[He] = t;
          } else fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ue(t), o = !1;
        } else $e !== null && (Yo($e), $e = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? te === 0 && (te = 3) : Ai())), t.updateQueue !== null && (t.flags |= 4), ue(t), null);
    case 4:
      return mn(), Uo(e, t), e === null && Xn(t.stateNode.containerInfo), ue(t), null;
    case 10:
      return Si(t.type._context), ue(t), null;
    case 17:
      return xe(t.type) && Zr(), ue(t), null;
    case 19:
      if (V(H), o = t.memoizedState, o === null) return ue(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Nn(o, !1);
      else {
        if (te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = rl(e), i !== null) {
            for (t.flags |= 128, Nn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return A(H, H.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && J() > yn && (t.flags |= 128, r = !0, Nn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = rl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Nn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !W) return ue(t), null;
        } else 2 * J() - o.renderingStartTime > yn && n !== 1073741824 && (t.flags |= 128, r = !0, Nn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = H.current, A(H, r ? n & 1 | 2 : n & 1), t) : (ue(t), null);
    case 22:
    case 23:
      return Fi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ee & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Nf(e, t) {
  switch (gi(t), t.tag) {
    case 1:
      return xe(t.type) && Zr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mn(), V(we), V(de), Ni(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ci(t), null;
    case 13:
      if (V(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return V(H), null;
    case 4:
      return mn(), null;
    case 10:
      return Si(t.type._context), null;
    case 22:
    case 23:
      return Fi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cr = !1, ce = !1, jf = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    X(e, t, r);
  }
  else n.current = null;
}
function Vo(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var Ws = !1;
function If(e, t) {
  if (_o = Gr, e = tu(), hi(e)) {
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
        var i = 0, u = -1, s = -1, f = 0, h = 0, y = e, m = null;
        t: for (; ; ) {
          for (var x; y !== n || l !== 0 && y.nodeType !== 3 || (u = i + l), y !== o || r !== 0 && y.nodeType !== 3 || (s = i + r), y.nodeType === 3 && (i += y.nodeValue.length), (x = y.firstChild) !== null; )
            m = y, y = x;
          for (; ; ) {
            if (y === e) break t;
            if (m === n && ++f === l && (u = i), m === o && ++h === r && (s = i), (x = y.nextSibling) !== null) break;
            y = m, m = y.parentNode;
          }
          y = x;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Co = { focusedElem: e, selectionRange: n }, Gr = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
  else for (; C !== null; ) {
    t = C;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var g = S.memoizedProps, L = S.memoizedState, a = t.stateNode, d = a.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Fe(t.type, g), L);
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
          throw Error(w(163));
      }
    } catch (v) {
      X(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, C = e;
      break;
    }
    C = t.return;
  }
  return S = Ws, Ws = !1, S;
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
function Ju(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ju(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[He], delete t[Jn], delete t[Io], delete t[cf], delete t[df])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function qu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || qu(e.return)) return null;
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
var oe = null, Ae = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) bu(e, t, n), n = n.sibling;
}
function bu(e, t, n) {
  if (Ge && typeof Ge.onCommitFiberUnmount == "function") try {
    Ge.onCommitFiberUnmount(fl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ce || tn(n, t);
    case 6:
      var r = oe, l = Ae;
      oe = null, ot(e, t, n), oe = r, Ae = l, oe !== null && (Ae ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null && (Ae ? (e = oe, n = n.stateNode, e.nodeType === 8 ? Gl(e.parentNode, n) : e.nodeType === 1 && Gl(e, n), Gn(e)) : Gl(oe, n.stateNode));
      break;
    case 4:
      r = oe, l = Ae, oe = n.stateNode.containerInfo, Ae = !0, ot(e, t, n), oe = r, Ae = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Vo(n, t, i), l = l.next;
        } while (l !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (!ce && (tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        X(n, t, u);
      }
      ot(e, t, n);
      break;
    case 21:
      ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ce = (r = ce) || n.memoizedState !== null, ot(e, t, n), ce = r) : ot(e, t, n);
      break;
    default:
      ot(e, t, n);
  }
}
function Hs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jf()), t.forEach(function(r) {
      var l = Ff.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Oe(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            oe = u.stateNode, Ae = !1;
            break e;
          case 3:
            oe = u.stateNode.containerInfo, Ae = !0;
            break e;
          case 4:
            oe = u.stateNode.containerInfo, Ae = !0;
            break e;
        }
        u = u.return;
      }
      if (oe === null) throw Error(w(160));
      bu(o, i, l), oe = null, Ae = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (f) {
      X(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ec(t, e), t = t.sibling;
}
function ec(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Oe(t, e), We(e), r & 4) {
        try {
          An(3, e, e.return), xl(3, e);
        } catch (g) {
          X(e, e.return, g);
        }
        try {
          An(5, e, e.return);
        } catch (g) {
          X(e, e.return, g);
        }
      }
      break;
    case 1:
      Oe(t, e), We(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (Oe(t, e), We(e), r & 512 && n !== null && tn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (g) {
          X(e, e.return, g);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && ka(l, o), mo(u, i);
          var f = mo(u, o);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], y = s[i + 1];
            h === "style" ? ja(l, y) : h === "dangerouslySetInnerHTML" ? Ca(l, y) : h === "children" ? Qn(l, y) : ni(l, h, y, f);
          }
          switch (u) {
            case "input":
              ao(l, o);
              break;
            case "textarea":
              Ea(l, o);
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
          l[Jn] = o;
        } catch (g) {
          X(e, e.return, g);
        }
      }
      break;
    case 6:
      if (Oe(t, e), We(e), r & 4) {
        if (e.stateNode === null) throw Error(w(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (g) {
          X(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Oe(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Gn(t.containerInfo);
      } catch (g) {
        X(e, e.return, g);
      }
      break;
    case 4:
      Oe(t, e), We(e);
      break;
    case 13:
      Oe(t, e), We(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Oi = J())), r & 4 && Hs(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ce = (f = ce) || h, Oe(t, e), ce = f) : Oe(t, e), We(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && e.mode & 1) for (C = e, h = e.child; h !== null; ) {
          for (y = C = h; C !== null; ) {
            switch (m = C, x = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                An(4, m, m.return);
                break;
              case 1:
                tn(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (g) {
                    X(r, n, g);
                  }
                }
                break;
              case 5:
                tn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Ks(y);
                  continue;
                }
            }
            x !== null ? (x.return = m, C = x) : Ks(y);
          }
          h = h.sibling;
        }
        e: for (h = null, y = e; ; ) {
          if (y.tag === 5) {
            if (h === null) {
              h = y;
              try {
                l = y.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, s = y.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Na("display", i));
              } catch (g) {
                X(e, e.return, g);
              }
            }
          } else if (y.tag === 6) {
            if (h === null) try {
              y.stateNode.nodeValue = f ? "" : y.memoizedProps;
            } catch (g) {
              X(e, e.return, g);
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
      Oe(t, e), We(e), r & 4 && Hs(e);
      break;
    case 21:
      break;
    default:
      Oe(
        t,
        e
      ), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qu(n)) {
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
          r.flags & 32 && (Qn(l, ""), r.flags &= -33);
          var o = Bs(e);
          Bo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Bs(e);
          Wo(e, u, i);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      X(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Tf(e, t, n) {
  C = e, tc(e);
}
function tc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Cr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ce;
        u = Cr;
        var f = ce;
        if (Cr = i, (ce = s) && !f) for (C = l; C !== null; ) i = C, s = i.child, i.tag === 22 && i.memoizedState !== null ? Ys(l) : s !== null ? (s.return = i, C = s) : Ys(l);
        for (; o !== null; ) C = o, tc(o), o = o.sibling;
        C = l, Cr = u, ce = f;
      }
      Gs(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : Gs(e);
  }
}
function Gs(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ce || xl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ce) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Fe(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Ps(t, o, r);
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
              Ps(t, i, n);
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
            throw Error(w(163));
        }
        ce || t.flags & 512 && Qo(t);
      } catch (m) {
        X(t, t.return, m);
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
function Ks(e) {
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
function Ys(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xl(4, t);
          } catch (s) {
            X(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              X(t, l, s);
            }
          }
          var o = t.return;
          try {
            Qo(t);
          } catch (s) {
            X(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Qo(t);
          } catch (s) {
            X(t, i, s);
          }
      }
    } catch (s) {
      X(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, C = u;
      break;
    }
    C = t.return;
  }
}
var Pf = Math.ceil, il = rt.ReactCurrentDispatcher, zi = rt.ReactCurrentOwner, Me = rt.ReactCurrentBatchConfig, D = 0, le = null, b = null, ie = 0, Ee = 0, nn = Et(0), te = 0, rr = null, At = 0, Sl = 0, Ri = 0, $n = null, ge = null, Oi = 0, yn = 1 / 0, Ye = null, sl = !1, Ho = null, gt = null, Nr = !1, dt = null, al = 0, Un = 0, Go = null, Ar = -1, $r = 0;
function me() {
  return D & 6 ? J() : Ar !== -1 ? Ar : Ar = J();
}
function vt(e) {
  return e.mode & 1 ? D & 2 && ie !== 0 ? ie & -ie : pf.transition !== null ? ($r === 0 && ($r = $a()), $r) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ga(e.type)), e) : 1;
}
function Ve(e, t, n, r) {
  if (50 < Un) throw Un = 0, Go = null, Error(w(185));
  or(e, n, r), (!(D & 2) || e !== le) && (e === le && (!(D & 2) && (Sl |= n), te === 4 && ut(e, ie)), Se(e, r), n === 1 && D === 0 && !(t.mode & 1) && (yn = J() + 500, gl && _t()));
}
function Se(e, t) {
  var n = e.callbackNode;
  fd(e, t);
  var r = Hr(e, e === le ? ie : 0);
  if (r === 0) n !== null && rs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && rs(n), t === 1) e.tag === 0 ? ff(Xs.bind(null, e)) : du(Xs.bind(null, e)), af(function() {
      !(D & 6) && _t();
    }), n = null;
    else {
      switch (Ua(r)) {
        case 1:
          n = si;
          break;
        case 4:
          n = Fa;
          break;
        case 16:
          n = Br;
          break;
        case 536870912:
          n = Aa;
          break;
        default:
          n = Br;
      }
      n = uc(n, nc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function nc(e, t) {
  if (Ar = -1, $r = 0, D & 6) throw Error(w(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = Hr(e, e === le ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ul(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = lc();
    (le !== e || ie !== t) && (Ye = null, yn = J() + 500, zt(e, t));
    do
      try {
        zf();
        break;
      } catch (u) {
        rc(e, u);
      }
    while (!0);
    xi(), il.current = o, D = l, b !== null ? t = 0 : (le = null, ie = 0, t = te);
  }
  if (t !== 0) {
    if (t === 2 && (l = wo(e), l !== 0 && (r = l, t = Ko(e, l))), t === 1) throw n = rr, zt(e, 0), ut(e, r), Se(e, J()), n;
    if (t === 6) ut(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Lf(l) && (t = ul(e, r), t === 2 && (o = wo(e), o !== 0 && (r = o, t = Ko(e, o))), t === 1)) throw n = rr, zt(e, 0), ut(e, r), Se(e, J()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Tt(e, ge, Ye);
          break;
        case 3:
          if (ut(e, r), (r & 130023424) === r && (t = Oi + 500 - J(), 10 < t)) {
            if (Hr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              me(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = jo(Tt.bind(null, e, ge, Ye), t);
            break;
          }
          Tt(e, ge, Ye);
          break;
        case 4:
          if (ut(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ue(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = jo(Tt.bind(null, e, ge, Ye), r);
            break;
          }
          Tt(e, ge, Ye);
          break;
        case 5:
          Tt(e, ge, Ye);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return Se(e, J()), e.callbackNode === n ? nc.bind(null, e) : null;
}
function Ko(e, t) {
  var n = $n;
  return e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256), e = ul(e, t), e !== 2 && (t = ge, ge = n, t !== null && Yo(t)), e;
}
function Yo(e) {
  ge === null ? ge = e : ge.push.apply(ge, e);
}
function Lf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Qe(o(), l)) return !1;
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
function ut(e, t) {
  for (t &= ~Ri, t &= ~Sl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ue(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Xs(e) {
  if (D & 6) throw Error(w(327));
  un();
  var t = Hr(e, 0);
  if (!(t & 1)) return Se(e, J()), null;
  var n = ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wo(e);
    r !== 0 && (t = r, n = Ko(e, r));
  }
  if (n === 1) throw n = rr, zt(e, 0), ut(e, t), Se(e, J()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tt(e, ge, Ye), Se(e, J()), null;
}
function Di(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (yn = J() + 500, gl && _t());
  }
}
function $t(e) {
  dt !== null && dt.tag === 0 && !(D & 6) && un();
  var t = D;
  D |= 1;
  var n = Me.transition, r = F;
  try {
    if (Me.transition = null, F = 1, e) return e();
  } finally {
    F = r, Me.transition = n, D = t, !(D & 6) && _t();
  }
}
function Fi() {
  Ee = nn.current, V(nn);
}
function zt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, sf(n)), b !== null) for (n = b.return; n !== null; ) {
    var r = n;
    switch (gi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Zr();
        break;
      case 3:
        mn(), V(we), V(de), Ni();
        break;
      case 5:
        Ci(r);
        break;
      case 4:
        mn();
        break;
      case 13:
        V(H);
        break;
      case 19:
        V(H);
        break;
      case 10:
        Si(r.type._context);
        break;
      case 22:
      case 23:
        Fi();
    }
    n = n.return;
  }
  if (le = e, b = e = wt(e.current, null), ie = Ee = t, te = 0, rr = null, Ri = Sl = At = 0, ge = $n = null, Lt !== null) {
    for (t = 0; t < Lt.length; t++) if (n = Lt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Lt = null;
  }
  return e;
}
function rc(e, t) {
  do {
    var n = b;
    try {
      if (xi(), Or.current = ol, ll) {
        for (var r = K.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ll = !1;
      }
      if (Ft = 0, re = ee = K = null, Fn = !1, er = 0, zi.current = null, n === null || n.return === null) {
        te = 1, rr = t, b = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = ie, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, h = u, y = h.tag;
          if (!(h.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var x = Ds(i);
          if (x !== null) {
            x.flags &= -257, Fs(x, i, u, o, t), x.mode & 1 && Os(o, f, t), t = x, s = f;
            var S = t.updateQueue;
            if (S === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Os(o, f, t), Ai();
              break e;
            }
            s = Error(w(426));
          }
        } else if (W && u.mode & 1) {
          var L = Ds(i);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), Fs(L, i, u, o, t), vi(hn(s, u));
            break e;
          }
        }
        o = s = hn(s, u), te !== 4 && (te = 2), $n === null ? $n = [o] : $n.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var a = Uu(o, s, t);
              Ts(o, a);
              break e;
            case 1:
              u = s;
              var d = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (gt === null || !gt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Vu(o, u, t);
                Ts(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ic(n);
    } catch (E) {
      t = E, b === n && n !== null && (b = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function lc() {
  var e = il.current;
  return il.current = ol, e === null ? ol : e;
}
function Ai() {
  (te === 0 || te === 3 || te === 2) && (te = 4), le === null || !(At & 268435455) && !(Sl & 268435455) || ut(le, ie);
}
function ul(e, t) {
  var n = D;
  D |= 2;
  var r = lc();
  (le !== e || ie !== t) && (Ye = null, zt(e, t));
  do
    try {
      Mf();
      break;
    } catch (l) {
      rc(e, l);
    }
  while (!0);
  if (xi(), D = n, il.current = r, b !== null) throw Error(w(261));
  return le = null, ie = 0, te;
}
function Mf() {
  for (; b !== null; ) oc(b);
}
function zf() {
  for (; b !== null && !rd(); ) oc(b);
}
function oc(e) {
  var t = ac(e.alternate, e, Ee);
  e.memoizedProps = e.pendingProps, t === null ? ic(e) : b = t, zi.current = null;
}
function ic(e) {
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
    } else if (n = Cf(n, t, Ee), n !== null) {
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
  var r = F, l = Me.transition;
  try {
    Me.transition = null, F = 1, Rf(e, t, n, r);
  } finally {
    Me.transition = l, F = r;
  }
  return null;
}
function Rf(e, t, n, r) {
  do
    un();
  while (dt !== null);
  if (D & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (pd(e, o), e === le && (b = le = null, ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Nr || (Nr = !0, uc(Br, function() {
    return un(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Me.transition, Me.transition = null;
    var i = F;
    F = 1;
    var u = D;
    D |= 4, zi.current = null, If(e, n), ec(n, e), bd(Co), Gr = !!_o, Co = _o = null, e.current = n, Tf(n), ld(), D = u, F = i, Me.transition = o;
  } else e.current = n;
  if (Nr && (Nr = !1, dt = e, al = l), o = e.pendingLanes, o === 0 && (gt = null), sd(n.stateNode), Se(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (sl) throw sl = !1, e = Ho, Ho = null, e;
  return al & 1 && e.tag !== 0 && un(), o = e.pendingLanes, o & 1 ? e === Go ? Un++ : (Un = 0, Go = e) : Un = 0, _t(), null;
}
function un() {
  if (dt !== null) {
    var e = Ua(al), t = Me.transition, n = F;
    try {
      if (Me.transition = null, F = 16 > e ? 16 : e, dt === null) var r = !1;
      else {
        if (e = dt, dt = null, al = 0, D & 6) throw Error(w(331));
        var l = D;
        for (D |= 4, C = e.current; C !== null; ) {
          var o = C, i = o.child;
          if (C.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (C = f; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      An(8, h, o);
                  }
                  var y = h.child;
                  if (y !== null) y.return = h, C = y;
                  else for (; C !== null; ) {
                    h = C;
                    var m = h.sibling, x = h.return;
                    if (Ju(h), h === f) {
                      C = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = x, C = m;
                      break;
                    }
                    C = x;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var g = S.child;
                if (g !== null) {
                  S.child = null;
                  do {
                    var L = g.sibling;
                    g.sibling = null, g = L;
                  } while (g !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, C = i;
          else e: for (; C !== null; ) {
            if (o = C, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                An(9, o, o.return);
            }
            var a = o.sibling;
            if (a !== null) {
              a.return = o.return, C = a;
              break e;
            }
            C = o.return;
          }
        }
        var d = e.current;
        for (C = d; C !== null; ) {
          i = C;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, C = p;
          else e: for (i = d; C !== null; ) {
            if (u = C, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  xl(9, u);
              }
            } catch (E) {
              X(u, u.return, E);
            }
            if (u === i) {
              C = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, C = v;
              break e;
            }
            C = u.return;
          }
        }
        if (D = l, _t(), Ge && typeof Ge.onPostCommitFiberRoot == "function") try {
          Ge.onPostCommitFiberRoot(fl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      F = n, Me.transition = t;
    }
  }
  return !1;
}
function Zs(e, t, n) {
  t = hn(n, t), t = Uu(e, t, 1), e = yt(e, t, 1), t = me(), e !== null && (or(e, 1, t), Se(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) Zs(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Zs(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gt === null || !gt.has(r))) {
        e = hn(n, e), e = Vu(t, e, 1), t = yt(t, e, 1), e = me(), t !== null && (or(t, 1, e), Se(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Of(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = me(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ie & n) === n && (te === 4 || te === 3 && (ie & 130023424) === ie && 500 > J() - Oi ? zt(e, 0) : Ri |= n), Se(e, t);
}
function sc(e, t) {
  t === 0 && (e.mode & 1 ? (t = yr, yr <<= 1, !(yr & 130023424) && (yr = 4194304)) : t = 1);
  var n = me();
  e = tt(e, t), e !== null && (or(e, t, n), Se(e, n));
}
function Df(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), sc(e, n);
}
function Ff(e, t) {
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
  r !== null && r.delete(t), sc(e, n);
}
var ac;
ac = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || we.current) ve = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ve = !1, _f(e, t, n);
    ve = !!(e.flags & 131072);
  }
  else ve = !1, W && t.flags & 1048576 && fu(t, br, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fr(e, t), e = t.pendingProps;
      var l = dn(t, de.current);
      an(t, n), l = Ii(null, t, r, e, l, n);
      var o = Ti();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xe(r) ? (o = !0, Jr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ei(t), l.updater = wl, t.stateNode = l, l._reactInternals = t, Ro(t, r, e, n), t = Fo(null, t, r, !0, o, n)) : (t.tag = 0, W && o && yi(t), fe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = $f(r), e = Fe(r, e), l) {
          case 0:
            t = Do(null, t, r, e, n);
            break e;
          case 1:
            t = Us(null, t, r, e, n);
            break e;
          case 11:
            t = As(null, t, r, e, n);
            break e;
          case 14:
            t = $s(null, t, r, Fe(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Fe(r, l), Do(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Fe(r, l), Us(e, t, r, l, n);
    case 3:
      e: {
        if (Hu(t), e === null) throw Error(w(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, vu(e, t), nl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = hn(Error(w(423)), t), t = Vs(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = hn(Error(w(424)), t), t = Vs(e, t, r, n, l);
          break e;
        } else for (_e = ht(t.stateNode.containerInfo.firstChild), Ce = t, W = !0, $e = null, n = yu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fn(), r === l) {
            t = nt(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return wu(t), e === null && Lo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, No(r, l) ? i = null : o !== null && No(r, o) && (t.flags |= 32), Bu(e, t), fe(e, t, i, n), t.child;
    case 6:
      return e === null && Lo(t), null;
    case 13:
      return Gu(e, t, n);
    case 4:
      return _i(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pn(t, null, r, n) : fe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Fe(r, l), As(e, t, r, l, n);
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, A(el, r._currentValue), r._currentValue = i, o !== null) if (Qe(o.value, i)) {
          if (o.children === l.children && !we.current) {
            t = nt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = qe(-1, n & -n), s.tag = 2;
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
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(w(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Mo(i, n, t), i = o.sibling;
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
        fe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, an(t, n), l = ze(l), r = r(l), t.flags |= 1, fe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Fe(r, t.pendingProps), l = Fe(r.type, l), $s(e, t, r, l, n);
    case 15:
      return Qu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Fe(r, l), Fr(e, t), t.tag = 1, xe(r) ? (e = !0, Jr(t)) : e = !1, an(t, n), $u(t, r, l), Ro(t, r, l, n), Fo(null, t, r, !0, e, n);
    case 19:
      return Ku(e, t, n);
    case 22:
      return Wu(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function uc(e, t) {
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
function wt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Le(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ur(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") $i(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Gt:
      return Rt(n.children, l, o, t);
    case ri:
      i = 8, l |= 8;
      break;
    case ro:
      return e = Le(12, n, t, l | 2), e.elementType = ro, e.lanes = o, e;
    case lo:
      return e = Le(13, n, t, l), e.elementType = lo, e.lanes = o, e;
    case oo:
      return e = Le(19, n, t, l), e.elementType = oo, e.lanes = o, e;
    case wa:
      return kl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ga:
          i = 10;
          break e;
        case va:
          i = 9;
          break e;
        case li:
          i = 11;
          break e;
        case oi:
          i = 14;
          break e;
        case it:
          i = 16, r = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = Le(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Rt(e, t, n, r) {
  return e = Le(7, e, r, t), e.lanes = n, e;
}
function kl(e, t, n, r) {
  return e = Le(22, e, r, t), e.elementType = wa, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
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
function Ui(e, t, n, r, l, o, i, u, s) {
  return e = new Uf(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Le(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ei(o), e;
}
function Vf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function cc(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
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
    if (xe(n)) return cu(e, n, t);
  }
  return t;
}
function dc(e, t, n, r, l, o, i, u, s) {
  return e = Ui(n, r, !0, e, l, o, i, u, s), e.context = cc(null), n = e.current, r = me(), l = vt(n), o = qe(r, l), o.callback = t ?? null, yt(n, o, l), e.current.lanes = l, or(e, l, r), Se(e, r), e;
}
function El(e, t, n, r) {
  var l = t.current, o = me(), i = vt(l);
  return n = cc(n), t.context === null ? t.context = n : t.pendingContext = n, t = qe(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yt(l, t, i), e !== null && (Ve(e, l, i, o), Rr(e, l, i)), i;
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
function Js(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vi(e, t) {
  Js(e, t), (e = e.alternate) && Js(e, t);
}
function Qf() {
  return null;
}
var fc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Qi(e) {
  this._internalRoot = e;
}
_l.prototype.render = Qi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  El(e, t, null, null);
};
_l.prototype.unmount = Qi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function() {
      El(null, e, null, null);
    }), t[et] = null;
  }
};
function _l(e) {
  this._internalRoot = e;
}
_l.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Wa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++) ;
    at.splice(n, 0, e), n === 0 && Ha(e);
  }
};
function Wi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Cl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function qs() {
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
    var i = dc(t, r, e, 0, null, !1, !1, "", qs);
    return e._reactRootContainer = i, e[et] = i.current, Xn(e.nodeType === 8 ? e.parentNode : e), $t(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = cl(s);
      u.call(f);
    };
  }
  var s = Ui(e, 0, !1, null, null, !1, !1, "", qs);
  return e._reactRootContainer = s, e[et] = s.current, Xn(e.nodeType === 8 ? e.parentNode : e), $t(function() {
    El(t, s, n, r);
  }), s;
}
function Nl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = cl(i);
        u.call(s);
      };
    }
    El(t, i, e, l);
  } else i = Wf(n, t, e, l, r);
  return cl(i);
}
Va = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 && (ai(t, n | 1), Se(t, J()), !(D & 6) && (yn = J() + 500, _t()));
      }
      break;
    case 13:
      $t(function() {
        var r = tt(e, 1);
        if (r !== null) {
          var l = me();
          Ve(r, e, 1, l);
        }
      }), Vi(e, 1);
  }
};
ui = function(e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = me();
      Ve(t, e, 134217728, n);
    }
    Vi(e, 134217728);
  }
};
Qa = function(e) {
  if (e.tag === 13) {
    var t = vt(e), n = tt(e, t);
    if (n !== null) {
      var r = me();
      Ve(n, e, t, r);
    }
    Vi(e, t);
  }
};
Wa = function() {
  return F;
};
Ba = function(e, t) {
  var n = F;
  try {
    return F = e, t();
  } finally {
    F = n;
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
            if (!l) throw Error(w(90));
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
Pa = Di;
La = $t;
var Bf = { usingClientEntryPoint: !1, Events: [sr, Zt, yl, Ia, Ta, Di] }, jn = { findFiberByHostInstance: Pt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hf = { bundleType: jn.bundleType, version: jn.version, rendererPackageName: jn.rendererPackageName, rendererConfig: jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ra(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jn.findFiberByHostInstance || Qf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber) try {
    fl = jr.inject(Hf), Ge = jr;
  } catch {
  }
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bf;
je.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wi(t)) throw Error(w(200));
  return Vf(e, t, null, n);
};
je.createRoot = function(e, t) {
  if (!Wi(e)) throw Error(w(299));
  var n = !1, r = "", l = fc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ui(e, 1, !1, null, null, n, !1, r, l), e[et] = t.current, Xn(e.nodeType === 8 ? e.parentNode : e), new Qi(t);
};
je.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = Ra(t), e = e === null ? null : e.stateNode, e;
};
je.flushSync = function(e) {
  return $t(e);
};
je.hydrate = function(e, t, n) {
  if (!Cl(t)) throw Error(w(200));
  return Nl(null, e, t, !0, n);
};
je.hydrateRoot = function(e, t, n) {
  if (!Wi(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = fc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = dc(t, null, e, 1, n ?? null, l, !1, o, i), e[et] = t.current, Xn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new _l(t);
};
je.render = function(e, t, n) {
  if (!Cl(t)) throw Error(w(200));
  return Nl(null, e, t, !1, n);
};
je.unmountComponentAtNode = function(e) {
  if (!Cl(e)) throw Error(w(40));
  return e._reactRootContainer ? ($t(function() {
    Nl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[et] = null;
    });
  }), !0) : !1;
};
je.unstable_batchedUpdates = Di;
je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Cl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Nl(e, t, n, !1, r);
};
je.version = "18.3.1-next-f1338f8080-20240426";
function pc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc);
    } catch (e) {
      console.error(e);
    }
}
pc(), pa.exports = je;
var Gf = pa.exports, mc, bs = Gf;
mc = bs.createRoot, bs.hydrateRoot;
window.api = G;
const ea = async (e = 0, t = 30, n = "") => {
  const r = await G.fetchApi(
    `/meld-nexus/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}`
  );
  if (!r.ok)
    throw new Error(`Failed to fetch images: ${r.statusText}`);
  return await r.json();
}, Kf = async (e, t) => {
  const n = `/meld-nexus/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await G.fetchApi(n);
  return r.ok ? await r.json() : [];
}, Yf = async () => {
  const e = await G.fetchApi("/meld-nexus/search-suggestions");
  return e.ok ? await e.json() : [];
}, hc = async () => {
  const e = await G.fetchApi("/meld-nexus/settings");
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
  if (!(await G.fetchApi("/meld-nexus/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Zf = async (e, t) => {
  if (!(await G.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Jf = async (e, t = 12) => {
  const n = await G.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, qf = async (e) => {
  const t = await G.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, bf = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await G.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, ep = async (e, t = !0) => {
  const n = await G.fetchApi("/meld-nexus/bulk-delete", {
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
}, yc = async (e) => {
  const t = await G.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, tp = async (e, t) => {
  const n = await G.fetchApi(
    `/meld-nexus/folders?type=${e}&path=${encodeURIComponent(t)}`
  );
  return n.ok ? await n.json() : [];
}, np = async (e) => {
  const t = await G.fetchApi("/meld-nexus/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, rp = async () => {
  if (!(await G.fetchApi("/meld-nexus/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, lp = async () => {
  const e = await G.fetchApi("/meld-nexus/favorites");
  return e.ok ? await e.json() : [];
}, op = async (e, t) => {
  if (!(await G.fetchApi("/meld-nexus/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, ta = async (e) => {
  if (!(await G.fetchApi("/meld-nexus/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, ip = async (e, t) => {
  if (!(await G.fetchApi("/meld-nexus/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
};
var gc = { exports: {} }, jl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp = T, ap = Symbol.for("react.element"), up = Symbol.for("react.fragment"), cp = Object.prototype.hasOwnProperty, dp = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function vc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) cp.call(t, r) && !fp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: ap, type: e, key: o, ref: i, props: l, _owner: dp.current };
}
jl.Fragment = up;
jl.jsx = vc;
jl.jsxs = vc;
gc.exports = jl;
var c = gc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var pp = {
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
const mp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Q = (e, t) => {
  const n = T.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: u = "",
      children: s,
      ...f
    }, h) => T.createElement(
      "svg",
      {
        ref: h,
        ...pp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(o) * 24 / Number(l) : o,
        className: ["lucide", `lucide-${mp(e)}`, u].join(" "),
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
const hp = Q("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yp = Q("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gp = Q("Box", [
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
const vp = Q("Calendar", [
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
const wp = Q("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = Q("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = Q("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = Q("Download", [
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
const na = Q("Folder", [
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
const Sp = Q("Maximize", [
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
const kp = Q("Minimize", [
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
const Ep = Q("MoreVertical", [
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
const _p = Q("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cp = Q("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = Q("PlusCircle", [
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
const xc = Q("RefreshCw", [
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
const Sc = Q("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = Q("Settings", [
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
const Ip = Q("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = Q("Star", [
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
const Tp = Q("Tag", [
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
const kc = Q("Trash2", [
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
const Pp = Q("Type", [
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
const Lp = Q("Upload", [
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
const Qt = Q("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let dl = !1;
const Mp = (e) => {
  dl = e, dl && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, zp = (...e) => {
  dl && console.log("[Meld-Flow]", ...e);
}, Rp = (...e) => {
  dl && console.warn("[Meld-Flow]", ...e);
}, Op = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, pe = {
  log: zp,
  warn: Rp,
  error: Op,
  init: Mp
}, Dp = {
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
function Fp(e, t) {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "SET_IMAGES": {
      const { images: n, total: r, offset: l, limit: o } = t.payload;
      let i = e.viewerImageId;
      return e.viewerMode === "gallery" && i !== null && !n.some((u) => u.id === i) && (i = null), {
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
      const { images: n, total: r, offset: l, limit: o } = t.payload, i = [...e.images, ...n], u = Array.from(
        new Map(i.map((s) => [s.id, s])).values()
      );
      return {
        ...e,
        images: u,
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
      const [l, o] = [
        Math.min(n, r),
        Math.max(n, r)
      ], i = new Set(e.selectedIds);
      for (let u = l; u <= o; u++)
        i.add(e.images[u].id);
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
const Ec = T.createContext(void 0), Ap = ({
  children: e
}) => {
  const [t, n] = T.useReducer(Fp, Dp), r = T.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const s = await ea(
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
        const s = t.images.length, f = await ea(
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
      pe.error("Failed to load favorites", s);
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
  }, [t.selectedIds, r]), u = T.useCallback(
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
        const f = await hc();
        n({ type: "SET_SETTINGS", payload: f });
      } catch (f) {
        pe.error("Failed to load settings", f);
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
  }, [r]), /* @__PURE__ */ c.jsx(
    Ec.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: r,
        loadMoreImages: l,
        refreshFavorites: o,
        deleteSelected: i,
        updateSetting: u
      },
      children: e
    }
  );
}, Ct = () => {
  const e = T.useContext(Ec);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, $p = () => {
  const { state: e, dispatch: t, deleteSelected: n } = Ct(), r = e.selectedIds.size;
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
            kc,
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
          /* @__PURE__ */ c.jsx(Qt, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, Up = ({ image: e }) => {
  const { state: t, dispatch: n } = Ct(), r = t.selectedIds.has(e.id), [l, o] = T.useState(null), [i, u] = T.useState(!1), s = T.useRef(null);
  T.useEffect(() => {
    const a = (d) => {
      s.current && !s.current.contains(d.target) && u(!1);
    };
    return i && document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, [i]);
  const f = (a, d = 0) => {
    if (d >= 5) return [];
    const p = a.parent_id;
    if (!p && !a.parent_filename) return [];
    const v = p ? t.images.find((I) => I.id === p) : null;
    let E = null;
    if (v ? E = `/api/view?filename=${encodeURIComponent(v.filename)}&type=${v.type || "output"}${v.subfolder ? `&subfolder=${encodeURIComponent(v.subfolder)}` : ""}` : p && a.parent_filename && (E = `/api/view?filename=${encodeURIComponent(a.parent_filename)}&type=${a.parent_type || "output"}${a.parent_subfolder ? `&subfolder=${encodeURIComponent(a.parent_subfolder)}` : ""}`), !E && !v) return [];
    const j = {
      id: p || null,
      imgSrc: E
    };
    return v ? [j, ...f(v, d + 1)] : [j];
  }, h = f(e), y = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, m = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, x = (a) => {
    a.shiftKey ? (a.preventDefault(), a.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : a.ctrlKey || a.metaKey || t.selectedIds.size > 0 ? (a.preventDefault(), a.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, S = (a) => {
    a.shiftKey ? (a.preventDefault(), a.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, g = (a) => {
    (a.shiftKey || a.ctrlKey || a.metaKey || t.selectedIds.size > 0) && a.preventDefault();
  }, L = (a) => {
    (a.key === "Enter" || a.key === " ") && (a.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: S,
      onMouseDown: g,
      onKeyDown: L,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "meld-image-card__menu-container", ref: s, children: [
          /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (a) => {
                a.stopPropagation(), u(!i);
              },
              title: "Menu",
              children: /* @__PURE__ */ c.jsx(Ep, { size: 16 })
            }
          ),
          i && /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__menu", children: /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: "meld-image-card__menu-item",
              onClick: (a) => {
                a.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: { type: "parent_selection", imageId: e.id }
                }), u(!1);
              },
              children: [
                /* @__PURE__ */ c.jsx(Np, { size: 14 }),
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
            onMouseDown: g,
            onClick: (a) => {
              a.stopPropagation(), x(a);
            }
          }
        ) }),
        /* @__PURE__ */ c.jsxs("div", { className: "meld-image-card__details", children: [
          t.settings["sidebar.show_filename"] && /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__filename", children: y }),
          t.settings["gallery.show_parent_image"] && h.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ c.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ c.jsx("div", { className: "meld-lineage-thumbs", children: h.map(
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
                a.stopPropagation(), o({
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
                a.stopPropagation(), o({
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
                a.stopPropagation(), o({
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
              a.stopPropagation(), o(null);
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
                      Qt,
                      {
                        className: "meld-prompt-popup-close",
                        size: 18,
                        onClick: () => o(null)
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
}, Vp = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = Ct(), { viewerImageId: r, images: l, viewerMode: o, lineageImages: i } = e, [u, s] = T.useState(!1), [f, h] = T.useState(!1), y = o === "lineage" ? i : l.filter(
    (g) => g.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && g.has_children)
  ), m = (o === "lineage" && i.length > 0 ? i : l).find((g) => g.id === r), x = T.useCallback(
    (g) => {
      g && "stopPropagation" in g && g.stopPropagation(), document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch((L) => {
        console.error(
          `Error attempting to enable full-screen mode: ${L.message}`
        );
      });
    },
    []
  );
  if (T.useEffect(() => {
    if (o !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore)
      return;
    const g = y.findIndex(
      (L) => L.id === r
    );
    g !== -1 && g >= y.length - 15 && n();
  }, [
    r,
    y.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    y
  ]), T.useEffect(() => {
    const g = (a) => {
      r !== null && (a.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : a.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : a.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (a.key === "f" || a.key === "F") && x(a));
    }, L = () => {
      s(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", g), document.addEventListener("fullscreenchange", L), () => {
      window.removeEventListener("keydown", g), document.removeEventListener("fullscreenchange", L);
    };
  }, [r, t, x]), T.useEffect(() => {
    o === "lineage" && r !== null && i.length === 0 && (h(!0), qf(r).then((g) => {
      t({ type: "SET_LINEAGE", payload: g });
    }).catch((g) => {
      console.error("Failed to fetch lineage:", g);
    }).finally(() => {
      h(!1);
    }));
  }, [o, r, i.length, t]), T.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), T.useEffect(() => {
    if (r !== null) {
      const g = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      g && g.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center"
      });
    }
  }, [r]), !m) return null;
  const S = `/api/view?filename=${encodeURIComponent(m.filename)}&type=${m.type || "output"}${m.subfolder ? `&subfolder=${encodeURIComponent(m.subfolder)}` : ""}`;
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
          className: `meld-viewer-content ${u ? "meld-viewer-content--fullscreen" : ""}`,
          onClick: (g) => g.stopPropagation(),
          children: [
            /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-filename", children: m.filename }) }),
            /* @__PURE__ */ c.jsxs("div", { className: "meld-viewer-actions", children: [
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn",
                  onClick: x,
                  type: "button",
                  title: u ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                  children: u ? /* @__PURE__ */ c.jsx(kp, { size: 20 }) : /* @__PURE__ */ c.jsx(Sp, { size: 20 })
                }
              ),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                  onClick: () => t({ type: "CLOSE_VIEWER" }),
                  type: "button",
                  title: "Close (Esc)",
                  children: /* @__PURE__ */ c.jsx(Qt, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--prev",
                onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ c.jsx(Xo, { size: 32 })
              }
            ),
            /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-image-container", children: /* @__PURE__ */ c.jsx(
              "img",
              {
                src: S,
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
                children: /* @__PURE__ */ c.jsx(wc, { size: 32 })
              }
            ),
            !u && /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ c.jsxs("div", { className: "meld-viewer-thumbnails", children: [
              f ? /* @__PURE__ */ c.jsx("div", { style: { padding: "10px", color: "#888" }, children: "Loading lineage..." }) : y.map((g, L) => {
                const a = g.id === r, d = typeof m.parent_id == "number" && m.parent_id === g.id, p = typeof g.parent_id == "number" && g.parent_id === m.id, v = `/api/view?filename=${encodeURIComponent(g.filename)}&type=${g.type || "output"}${g.subfolder ? `&subfolder=${encodeURIComponent(g.subfolder)}` : ""}`;
                return /* @__PURE__ */ c.jsxs(
                  "div",
                  {
                    className: "meld-viewer-thumbnail-wrapper",
                    children: [
                      o === "lineage" && L > 0 && /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-lineage-connector", children: /* @__PURE__ */ c.jsx(Xo, { size: 16 }) }),
                      /* @__PURE__ */ c.jsxs(
                        "div",
                        {
                          className: `meld-viewer-thumbnail ${a ? "meld-viewer-thumbnail--active" : ""} ${d ? "meld-viewer-thumbnail--parent" : ""} ${p ? "meld-viewer-thumbnail--child" : ""}`,
                          onClick: () => t({
                            type: "OPEN_VIEWER",
                            payload: { id: g.id, mode: o }
                          }),
                          children: [
                            /* @__PURE__ */ c.jsx("img", { src: v, alt: g.filename }),
                            (d || p) && /* @__PURE__ */ c.jsx(
                              "div",
                              {
                                className: `meld-viewer-thumbnail-relation-icon ${d ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
                                children: d ? /* @__PURE__ */ c.jsx(yp, { size: 12 }) : /* @__PURE__ */ c.jsx(hp, { size: 12 })
                              }
                            ),
                            /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-thumbnail-label-v2", children: a ? "Current" : d ? "Source" : p ? "Derivative" : "" })
                          ]
                        }
                      )
                    ]
                  },
                  g.id
                );
              }),
              o === "gallery" && e.isLoading && /* @__PURE__ */ c.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ c.jsx(xc, { className: "animate-spin", size: 20 }) })
            ] }) })
          ]
        }
      )
    }
  );
}, Qp = () => {
  const { state: e, dispatch: t } = Ct(), { scanStatus: n } = e, [r, l] = T.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0
  }), [o, i] = T.useState([]), [u, s] = T.useState(!1), f = T.useCallback(async () => {
    if (r.type !== "custom") {
      s(!0);
      try {
        const a = await tp(r.type, r.subfolder);
        i(a);
      } catch (a) {
        console.error("Failed to load folders:", a);
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
    } catch (a) {
      console.error("Failed to start scan:", a), alert(`Failed to start scan: ${a}`);
    }
  }, y = async () => {
    try {
      await rp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (a) {
      console.error("Failed to cancel scan:", a);
    }
  }, m = (a) => {
    const d = r.subfolder ? `${r.subfolder}/${a}` : a;
    l({ ...r, subfolder: d });
  }, x = () => {
    const a = r.subfolder.split("/");
    a.pop(), l({ ...r, subfolder: a.join("/") });
  }, S = () => {
    n.isFinished && t({ type: "SET_SCAN_STATUS", payload: { isFinished: !1 } }), t({ type: "CLOSE_MODAL" });
  }, g = n.progress.phase === "linking", L = g ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ c.jsx("div", { className: "meld-modal-overlay", onClick: S, children: /* @__PURE__ */ c.jsxs(
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
              onClick: S,
              children: /* @__PURE__ */ c.jsx(Qt, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsx("div", { className: "meld-modal-body", children: n.isRunning ? /* @__PURE__ */ c.jsxs("div", { className: "meld-scan-progress", children: [
          /* @__PURE__ */ c.jsx("div", { className: "meld-scan-status-text", children: n.shouldCancel ? /* @__PURE__ */ c.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : g ? /* @__PURE__ */ c.jsx("span", { children: "Linking parent images..." }) : /* @__PURE__ */ c.jsx("span", { children: "Scanning images..." }) }),
          /* @__PURE__ */ c.jsx("div", { className: "meld-progress-container", children: /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "meld-progress-bar",
              style: { width: `${L}%` }
            }
          ) }),
          /* @__PURE__ */ c.jsx("div", { className: "meld-progress-stats", children: g ? /* @__PURE__ */ c.jsxs("span", { children: [
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
                onClick: S,
                children: "Run in Background"
              }
            ),
            /* @__PURE__ */ c.jsxs(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-danger",
                disabled: n.shouldCancel,
                onClick: y,
                children: [
                  /* @__PURE__ */ c.jsx(Ip, { size: 16 }),
                  "Stop Scan"
                ]
              }
            )
          ] })
        ] }) : n.isFinished ? /* @__PURE__ */ c.jsxs("div", { className: "meld-scan-finished", children: [
          /* @__PURE__ */ c.jsx("div", { className: "meld-finished-icon", children: /* @__PURE__ */ c.jsx(wp, { size: 64, color: "var(--meld-success)" }) }),
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
              onClick: S,
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
                onClick: h,
                style: { width: "100%" },
                children: [
                  /* @__PURE__ */ c.jsx(Cp, { size: 16 }),
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
                    onClick: x,
                    children: [
                      /* @__PURE__ */ c.jsx(Xo, { size: 16 }),
                      "Back"
                    ]
                  }
                ),
                /* @__PURE__ */ c.jsx("span", { className: "meld-browser-title", children: "Browse Folders" })
              ] }),
              /* @__PURE__ */ c.jsx("div", { className: "meld-folder-list", children: u ? /* @__PURE__ */ c.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : o.length === 0 ? /* @__PURE__ */ c.jsx("div", { className: "meld-browser-empty", children: "No subfolders found." }) : o.map((a) => /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: "meld-folder-item",
                  onClick: () => m(a),
                  children: [
                    /* @__PURE__ */ c.jsx(na, { size: 16 }),
                    /* @__PURE__ */ c.jsx("span", { children: a }),
                    /* @__PURE__ */ c.jsx(wc, { size: 14 })
                  ]
                },
                a
              )) })
            ] }),
            r.type === "custom" && /* @__PURE__ */ c.jsxs("div", { className: "meld-browser-info", children: [
              /* @__PURE__ */ c.jsx(na, { size: 48 }),
              /* @__PURE__ */ c.jsx("p", { children: "Please enter an absolute path in the sidebar." }),
              /* @__PURE__ */ c.jsx("span", { style: { fontSize: "11px", color: "#666" }, children: "Example: C:\\Users\\Me\\Pictures or /home/me/images" })
            ] })
          ] })
        ] }) })
      ]
    }
  ) });
}, Wp = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Ct(), [l, o] = T.useState([]), [i, u] = T.useState(!0), [s, f] = T.useState(!1), h = t.images.find((a) => a.id === e), y = T.useCallback(async () => {
    u(!0);
    try {
      const a = await Jf(e);
      o(a);
    } catch (a) {
      console.error("Failed to load suggestions:", a);
    } finally {
      u(!1);
    }
  }, [e]);
  T.useEffect(() => {
    y();
  }, [y]);
  const m = async (a) => {
    try {
      await Zf(e, a), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, x = async (a) => {
    u(!0);
    try {
      const d = await bf(a), { id: p } = await yc({
        filename: d.name,
        subfolder: d.subfolder || "",
        type: d.type || "input"
      });
      await m(p);
    } catch (d) {
      console.error("Failed to upload/register image:", d);
    } finally {
      u(!1);
    }
  }, S = (a) => {
    a.preventDefault(), a.stopPropagation(), f(!1);
    const d = a.dataTransfer.files[0];
    d != null && d.type.startsWith("image/") && x(d);
  };
  if (!h) return null;
  const g = l.filter((a) => a.is_source_match), L = l.filter((a) => !a.is_source_match);
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => n({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ c.jsxs("div", { className: "meld-modal-content", onClick: (a) => a.stopPropagation(), children: [
        /* @__PURE__ */ c.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ c.jsxs("h2", { children: [
            "Select Source for #",
            h.id
          ] }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              className: "meld-modal-close",
              onClick: () => n({ type: "CLOSE_MODAL" }),
              children: /* @__PURE__ */ c.jsx(Qt, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "meld-modal-body", children: [
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: `meld-drop-zone ${s ? "meld-drop-zone--active" : ""}`,
              onDragEnter: (a) => {
                a.preventDefault(), a.stopPropagation(), f(!0);
              },
              onDragOver: (a) => {
                a.preventDefault(), a.stopPropagation(), a.dataTransfer.dropEffect = "copy", f(!0);
              },
              onDragLeave: (a) => {
                a.preventDefault(), a.stopPropagation(), f(!1);
              },
              onDrop: S,
              children: [
                /* @__PURE__ */ c.jsx(Lp, { size: 32 }),
                /* @__PURE__ */ c.jsx("p", { children: "Drop an image file here to set it as source" })
              ]
            }
          ),
          i ? /* @__PURE__ */ c.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ c.jsxs("div", { className: "meld-suggestions-container", children: [
            g.length > 0 && /* @__PURE__ */ c.jsxs("section", { children: [
              /* @__PURE__ */ c.jsx("h3", { children: "Source Matches (from metadata)" }),
              /* @__PURE__ */ c.jsx("div", { className: "meld-suggestion-grid", children: g.map((a) => /* @__PURE__ */ c.jsxs(
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
              L.length > 0 ? /* @__PURE__ */ c.jsx("div", { className: "meld-suggestion-grid", children: L.map((a) => /* @__PURE__ */ c.jsxs(
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
}, Bp = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = Ct(), [r, l] = T.useState(e.searchQuery), [o, i] = T.useState([]), [u, s] = T.useState(!1), [f, h] = T.useState([]), [y, m] = T.useState(-1), [x, S] = T.useState(!1), g = T.useRef(null), L = T.useRef(null), a = T.useRef(e.searchQuery);
  T.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    !r && !e.searchQuery ? Yf().then((k) => {
      h(k);
    }) : h([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), T.useEffect(() => {
    l(e.searchQuery), a.current = e.searchQuery;
  }, [e.searchQuery]), T.useEffect(() => {
    var k;
    (k = g.current) == null || k.focus();
  }, []);
  const d = T.useCallback(
    (k, _ = !0) => {
      a.current !== k && (t({ type: "SET_SEARCH_QUERY", payload: k }), _ && s(!1), a.current = k);
    },
    [t]
  );
  T.useEffect(() => {
    const k = setTimeout(async () => {
      if (r === a.current)
        return;
      if (e.settings["search.realtime_search"] && d(r, !1), !e.settings["search.input_suggest"]) {
        i([]), s(!1);
        return;
      }
      const _ = r.split(/\s+/), $ = _[_.length - 1];
      if ($) {
        const q = $.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (q) {
          const ke = q[1].toLowerCase(), lt = q[2], Wt = await Kf(lt, ke);
          i(Wt), s(Wt.length > 0), m(-1);
        } else
          i([]), s(!1);
      } else
        i([]), s(!1);
    }, 300);
    return () => clearTimeout(k);
  }, [
    r,
    e.settings["search.realtime_search"],
    e.settings["search.input_suggest"],
    d
  ]);
  const p = (k) => {
    k.key === "Enter" ? d(r) : k.key === "Tab" ? u && y >= 0 && (v(o[y]), k.preventDefault()) : k.key === "ArrowDown" ? u && (m((_) => Math.min(_ + 1, o.length - 1)), k.preventDefault()) : k.key === "ArrowUp" ? u && (m((_) => Math.max(_ - 1, -1)), k.preventDefault()) : k.key === "Escape" && s(!1);
  }, v = (k) => {
    var lt;
    const _ = r.split(/\s+/);
    _.pop();
    const q = ["date", "after", "before"].includes(k.type) ? k.value : `"${k.value}"`, ke = `${[..._, `${k.type}:${q}`].join(" ").trim()} `;
    l(ke), d(ke), i([]), s(!1), (lt = g.current) == null || lt.focus();
  }, E = () => {
    l(""), d("");
  }, j = async (k, _, $) => {
    k.stopPropagation();
    const q = `Are you sure you want to delete the favorite "${$}"?`;
    if (window.confirm(q))
      try {
        await ta(_), await n();
      } catch (ke) {
        pe.error("Failed to delete favorite", ke);
      }
  }, I = async (k, _, $) => {
    k.stopPropagation();
    const q = window.prompt(
      "Enter a new name for this favorite:",
      $
    );
    if (!(q === null || q === $))
      try {
        await ip(_, q || $), await n();
      } catch (ke) {
        pe.error("Failed to rename favorite", ke);
      }
  }, P = (k, _) => {
    const q = ["date", "after", "before"].includes(k) ? _ : `"${_}"`, ke = `${k}:${q}`;
    l(ke), d(ke);
  }, B = async () => {
    if (!e.searchQuery || x) return;
    if (e.favorites.some(
      ($) => $.query === e.searchQuery
    )) {
      const $ = e.favorites.find((q) => q.query === e.searchQuery);
      if ($) {
        S(!0);
        try {
          await ta($.id), await n();
        } catch (q) {
          console.error("Failed to delete favorite:", q);
        } finally {
          S(!1);
        }
      }
      return;
    }
    const _ = window.prompt(
      "Enter a name for this favorite:",
      e.searchQuery
    );
    if (_ !== null) {
      S(!0);
      try {
        await op(_ || e.searchQuery, e.searchQuery), await n();
      } catch ($) {
        console.error("Failed to save favorite:", $);
      } finally {
        S(!1);
      }
    }
  }, z = (k) => {
    switch (k) {
      case "tag":
        return /* @__PURE__ */ c.jsx(Tp, { size: 12 });
      case "model":
        return /* @__PURE__ */ c.jsx(gp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ c.jsx(Pp, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ c.jsx(vp, { size: 12 });
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
                      Sc,
                      {
                        size: 18,
                        color: "#666",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: g,
                        type: "text",
                        value: r,
                        onChange: (k) => l(k.target.value),
                        onKeyDown: p,
                        onBlur: () => setTimeout(() => s(!1), 200),
                        onFocus: () => {
                          if (r === a.current) return;
                          const k = r.split(/\s+/), _ = k[k.length - 1];
                          _ != null && _.match(/^(pos|neg|model|date|after|before):/i) && s(!0);
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
                    e.searchQuery && /* @__PURE__ */ c.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: B,
                        disabled: x,
                        title: e.favorites.some((k) => k.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          marginRight: "4px",
                          opacity: x ? 0.5 : 1
                        },
                        children: /* @__PURE__ */ c.jsx(
                          ra,
                          {
                            size: 16,
                            color: x ? "#aaa" : e.favorites.some((k) => k.query === e.searchQuery) ? "#ffd700" : "#666",
                            fill: e.favorites.some((k) => k.query === e.searchQuery) ? "#ffd700" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ c.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: E,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ c.jsx(Qt, { size: 16, color: "#666" })
                      }
                    )
                  ]
                }
              ),
              u && o.length > 0 && /* @__PURE__ */ c.jsx(
                "div",
                {
                  ref: L,
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
                  children: o.map((k, _) => /* @__PURE__ */ c.jsx(
                    "div",
                    {
                      onMouseDown: ($) => {
                        $.preventDefault(), v(k);
                      },
                      onMouseEnter: () => m(_),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: _ === y ? "#333" : "transparent",
                        borderBottom: "1px solid #2a2a2a"
                      },
                      children: /* @__PURE__ */ c.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ c.jsx("span", { style: { color: "#888", display: "flex" }, children: z(k.type) }),
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
                                children: k.type
                              }
                            ),
                            /* @__PURE__ */ c.jsx("span", { style: { color: "#eee", fontSize: "14px" }, children: k.value })
                          ]
                        }
                      )
                    },
                    `${k.type}:${k.value}`
                  ))
                }
              )
            ]
          }
        ),
        !r && !e.searchQuery && f.length > 0 && /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "meld-search-quick-suggestions",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: f.map((k) => /* @__PURE__ */ c.jsxs(
              "button",
              {
                type: "button",
                onClick: () => P(k.type, k.value),
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
                onMouseEnter: (_) => {
                  _.currentTarget.style.backgroundColor = "#333", _.currentTarget.style.borderColor = "#444", _.currentTarget.style.color = "#fff";
                },
                onMouseLeave: (_) => {
                  _.currentTarget.style.backgroundColor = "#2a2a2a", _.currentTarget.style.borderColor = "#333", _.currentTarget.style.color = "#ccc";
                },
                children: [
                  /* @__PURE__ */ c.jsx("span", { style: { display: "flex", color: "#888" }, children: z(k.type) }),
                  /* @__PURE__ */ c.jsx(
                    "span",
                    {
                      style: {
                        color: "#3b82f6",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontSize: "10px"
                      },
                      children: k.type
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
                      children: k.value
                    }
                  )
                ]
              },
              `${k.type}:${k.value}`
            ))
          }
        ),
        !r && e.favorites.length > 0 && /* @__PURE__ */ c.jsxs(
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
              /* @__PURE__ */ c.jsxs(
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
                    /* @__PURE__ */ c.jsx(ra, { size: 12, fill: "#888" }),
                    "Favorites"
                  ]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  },
                  children: e.favorites.map((k) => /* @__PURE__ */ c.jsxs(
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
                        l(k.query), d(k.query);
                      },
                      onMouseEnter: (_) => {
                        _.currentTarget.style.backgroundColor = "#333", _.currentTarget.style.borderColor = "var(--meld-accent-color)", _.currentTarget.style.color = "#fff";
                      },
                      onMouseLeave: (_) => {
                        _.currentTarget.style.backgroundColor = "#2a2a2a", _.currentTarget.style.borderColor = "#333", _.currentTarget.style.color = "#ccc";
                      },
                      children: [
                        /* @__PURE__ */ c.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              minWidth: 0,
                              flex: 1
                            },
                            children: [
                              /* @__PURE__ */ c.jsx(
                                "span",
                                {
                                  style: {
                                    fontWeight: "bold",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                  },
                                  children: k.name
                                }
                              ),
                              k.name !== k.query && /* @__PURE__ */ c.jsx(
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
                                  children: k.query
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ c.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              flexShrink: 0
                            },
                            children: [
                              /* @__PURE__ */ c.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (_) => {
                                    _.stopPropagation(), I(_, k.id, k.name);
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
                                  onMouseEnter: (_) => {
                                    _.currentTarget.style.color = "var(--meld-accent-color)", _.currentTarget.style.backgroundColor = "rgba(68, 136, 255, 0.1)";
                                  },
                                  onMouseLeave: (_) => {
                                    _.currentTarget.style.color = "#666", _.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ c.jsx(_p, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ c.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (_) => {
                                    _.stopPropagation(), j(_, k.id, k.name);
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
                                  onMouseEnter: (_) => {
                                    _.currentTarget.style.color = "var(--meld-danger-color)", _.currentTarget.style.backgroundColor = "rgba(255,0,0,0.1)";
                                  },
                                  onMouseLeave: (_) => {
                                    _.currentTarget.style.color = "#666", _.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ c.jsx(kc, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    k.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Hp = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ct(), [r, l] = T.useState("General"), o = [
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
  }, u = o.filter(
    (s) => s.category === r
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
          onClick: (s) => s.stopPropagation(),
          children: [
            /* @__PURE__ */ c.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ c.jsx("h2", { children: "Settings" }),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-modal-close",
                  onClick: () => t({ type: "CLOSE_MODAL" }),
                  children: /* @__PURE__ */ c.jsx(Qt, { size: 20 })
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
            /* @__PURE__ */ c.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ c.jsx("div", { className: "meld-settings-list", children: u.map((s) => /* @__PURE__ */ c.jsxs("div", { className: "meld-settings-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "meld-settings-item__info", children: [
                /* @__PURE__ */ c.jsx("div", { className: "meld-settings-item__label", children: s.label }),
                /* @__PURE__ */ c.jsx("div", { className: "meld-settings-item__description", children: s.description })
              ] }),
              /* @__PURE__ */ c.jsx("div", { className: "meld-settings-item__control", children: s.type === "boolean" && /* @__PURE__ */ c.jsxs("label", { className: "meld-switch", children: [
                /* @__PURE__ */ c.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!e.settings[s.key],
                    onChange: () => i(s.key, !!e.settings[s.key])
                  }
                ),
                /* @__PURE__ */ c.jsx("span", { className: "meld-switch__slider" })
              ] }) })
            ] }, s.key)) }) })
          ]
        }
      )
    }
  );
}, Gp = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = Ct(), [l, o] = T.useState(!1), i = e.searchQuery.trim() !== "", u = T.useRef(null), s = e.images.filter(
    (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
  );
  return T.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && s.length === 0 && (pe.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    s.length,
    r
  ]), pe.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: s.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), T.useEffect(() => {
    const f = new IntersectionObserver(
      (y) => {
        y[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (pe.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), h = u.current;
    return h && f.observe(h), () => {
      h && f.unobserve(h);
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
                    children: /* @__PURE__ */ c.jsx(Sc, { size: 14 })
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
                    children: /* @__PURE__ */ c.jsx(xp, { size: 14 })
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
                      xc,
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
                    children: /* @__PURE__ */ c.jsx(jp, { size: 14 })
                  }
                )
              ]
            }
          ),
          l && /* @__PURE__ */ c.jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ c.jsx(Bp, {}) })
        ]
      }
    ),
    e.error && /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && s.length === 0 ? /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : s.length === 0 ? /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__list", children: s.map((f) => /* @__PURE__ */ c.jsx(Up, { image: f }, f.id)) }),
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          ref: u,
          className: "meld-gallery__load-more",
          style: { height: "20px", margin: "20px 0", textAlign: "center" },
          children: [
            e.isLoading && /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
            !e.pagination.hasMore && s.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx($p, {}),
    e.viewerImageId !== null && /* @__PURE__ */ c.jsx(Vp, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ c.jsx(Wp, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ c.jsx(Qp, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ c.jsx(Hp, {})
  ] });
}, Il = document.createElement("link");
Il.rel = "stylesheet";
Il.type = "text/css";
Il.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(Il);
let Ir = null, De = null;
_c.registerExtension({
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
      const n = await hc();
      pe.init(n.dev_mode), pe.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld-Flow] Failed to fetch settings", n), pe.init(!1);
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
      }, G.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), G.addEventListener("meld-nexus-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-progress", { detail: n.detail })
        );
      }), G.addEventListener("meld-nexus-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-finished", { detail: n.detail })
        ), (r = e.ui.meldNexus) == null || r.refresh(), console.log("Meld Nexus: Import completed.");
      }), G.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await yc({
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
            pe.log("MeldNexus: render called", {
              el: n,
              galleryRoot: Ir,
              galleryContainer: De
            }), De || (pe.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), De = document.createElement("div"), De.id = "meld-flow-gallery-container", De.style.height = "100%", De.style.width = "100%", De.style.display = "flex", De.style.flexDirection = "column"), n.contains(De) || (pe.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(De)), Ir ? pe.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (pe.log("MeldNexus: Creating new gallery root"), Ir = mc(De), Ir.render(
              Ki.createElement(
                Ap,
                null,
                Ki.createElement(Gp)
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
