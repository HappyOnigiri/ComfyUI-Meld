import { api as U } from "../../../scripts/api.js";
import { app as ca } from "../../../scripts/app.js";
function Tc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var da = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr = Symbol.for("react.element"), Pc = Symbol.for("react.portal"), Ic = Symbol.for("react.fragment"), Lc = Symbol.for("react.strict_mode"), Mc = Symbol.for("react.profiler"), zc = Symbol.for("react.provider"), Rc = Symbol.for("react.context"), Fc = Symbol.for("react.forward_ref"), Dc = Symbol.for("react.suspense"), Oc = Symbol.for("react.memo"), Ac = Symbol.for("react.lazy"), Xi = Symbol.iterator;
function $c(e) {
  return e === null || typeof e != "object" ? null : (e = Xi && e[Xi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fa = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, pa = Object.assign, ma = {};
function gn(e, t, n) {
  this.props = e, this.context = t, this.refs = ma, this.updater = n || fa;
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ha() {
}
ha.prototype = gn.prototype;
function qo(e, t, n) {
  this.props = e, this.context = t, this.refs = ma, this.updater = n || fa;
}
var bo = qo.prototype = new ha();
bo.constructor = qo;
pa(bo, gn.prototype);
bo.isPureReactComponent = !0;
var Zi = Array.isArray, ya = Object.prototype.hasOwnProperty, ei = { current: null }, ga = { key: !0, ref: !0, __self: !0, __source: !0 };
function va(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ya.call(t, r) && !ga.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), f = 0; f < a; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: lr, type: e, key: o, ref: i, props: l, _owner: ei.current };
}
function Uc(e, t) {
  return { $$typeof: lr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ti(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function Vc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ji = /\/+/g;
function Ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Vc("" + e.key) : t.toString(36);
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
        case Pc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Ml(i, 0) : r, Zi(l) ? (n = "", e != null && (n = e.replace(Ji, "$&/") + "/"), Ir(l, t, n, "", function(f) {
    return f;
  })) : l != null && (ti(l) && (l = Uc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ji, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Zi(e)) for (var a = 0; a < e.length; a++) {
    o = e[a];
    var s = r + Ml(o, a);
    i += Ir(o, t, n, s, l);
  }
  else if (s = $c(e), typeof s == "function") for (e = s.call(e), a = 0; !(o = e.next()).done; ) o = o.value, s = r + Ml(o, a++), i += Ir(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function fr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Ir(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Qc(e) {
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
var ve = { current: null }, Lr = { transition: null }, Wc = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: Lr, ReactCurrentOwner: ei };
function wa() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = { map: fr, forEach: function(e, t, n) {
  fr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return fr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return fr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ti(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
D.Component = gn;
D.Fragment = Ic;
D.Profiler = Mc;
D.PureComponent = qo;
D.StrictMode = Lc;
D.Suspense = Dc;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wc;
D.act = wa;
D.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = pa({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ei.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (s in t) ya.call(t, s) && !ga.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
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
D.createContext = function(e) {
  return e = { $$typeof: Rc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: zc, _context: e }, e.Consumer = e;
};
D.createElement = va;
D.createFactory = function(e) {
  var t = va.bind(null, e);
  return t.type = e, t;
};
D.createRef = function() {
  return { current: null };
};
D.forwardRef = function(e) {
  return { $$typeof: Fc, render: e };
};
D.isValidElement = ti;
D.lazy = function(e) {
  return { $$typeof: Ac, _payload: { _status: -1, _result: e }, _init: Qc };
};
D.memo = function(e, t) {
  return { $$typeof: Oc, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function(e) {
  var t = Lr.transition;
  Lr.transition = {};
  try {
    e();
  } finally {
    Lr.transition = t;
  }
};
D.unstable_act = wa;
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
da.exports = D;
var N = da.exports;
const qi = /* @__PURE__ */ Tc(N);
var xa = { exports: {} }, Pe = {}, Sa = { exports: {} }, ka = {};
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
  function t(j, z) {
    var F = j.length;
    j.push(z);
    e: for (; 0 < F; ) {
      var G = F - 1 >>> 1, oe = j[G];
      if (0 < l(oe, z)) j[G] = z, j[F] = oe, F = G;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var z = j[0], F = j.pop();
    if (F !== z) {
      j[0] = F;
      e: for (var G = 0, oe = j.length, cr = oe >>> 1; G < cr; ) {
        var Tt = 2 * (G + 1) - 1, Ll = j[Tt], Pt = Tt + 1, dr = j[Pt];
        if (0 > l(Ll, F)) Pt < oe && 0 > l(dr, Ll) ? (j[G] = dr, j[Pt] = F, G = Pt) : (j[G] = Ll, j[Tt] = F, G = Tt);
        else if (Pt < oe && 0 > l(dr, F)) j[G] = dr, j[Pt] = F, G = Pt;
        else break e;
      }
    }
    return z;
  }
  function l(j, z) {
    var F = j.sortIndex - z.sortIndex;
    return F !== 0 ? F : j.id - z.id;
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
  var s = [], f = [], h = 1, y = null, m = 3, w = !1, x = !1, k = !1, E = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var z = n(f); z !== null; ) {
      if (z.callback === null) r(f);
      else if (z.startTime <= j) r(f), z.sortIndex = z.expirationTime, t(s, z);
      else break;
      z = n(f);
    }
  }
  function v(j) {
    if (k = !1, p(j), !x) if (n(s) !== null) x = !0, ee(T);
    else {
      var z = n(f);
      z !== null && ne(v, z.startTime - j);
    }
  }
  function T(j, z) {
    x = !1, k && (k = !1, c(g), g = -1), w = !0;
    var F = m;
    try {
      for (p(z), y = n(s); y !== null && (!(y.expirationTime > z) || j && !Q()); ) {
        var G = y.callback;
        if (typeof G == "function") {
          y.callback = null, m = y.priorityLevel;
          var oe = G(y.expirationTime <= z);
          z = e.unstable_now(), typeof oe == "function" ? y.callback = oe : y === n(s) && r(s), p(z);
        } else r(s);
        y = n(s);
      }
      if (y !== null) var cr = !0;
      else {
        var Tt = n(f);
        Tt !== null && ne(v, Tt.startTime - z), cr = !1;
      }
      return cr;
    } finally {
      y = null, m = F, w = !1;
    }
  }
  var I = !1, L = null, g = -1, R = 5, M = -1;
  function Q() {
    return !(e.unstable_now() - M < R);
  }
  function Z() {
    if (L !== null) {
      var j = e.unstable_now();
      M = j;
      var z = !0;
      try {
        z = L(!0, j);
      } finally {
        z ? _() : (I = !1, L = null);
      }
    } else I = !1;
  }
  var _;
  if (typeof d == "function") _ = function() {
    d(Z);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), q = C.port2;
    C.port1.onmessage = Z, _ = function() {
      q.postMessage(null);
    };
  } else _ = function() {
    E(Z, 0);
  };
  function ee(j) {
    L = j, I || (I = !0, _());
  }
  function ne(j, z) {
    g = E(function() {
      j(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    x || w || (x = !0, ee(T));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(j) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = m;
    }
    var F = m;
    m = z;
    try {
      return j();
    } finally {
      m = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, z) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var F = m;
    m = j;
    try {
      return z();
    } finally {
      m = F;
    }
  }, e.unstable_scheduleCallback = function(j, z, F) {
    var G = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? G + F : G) : F = G, j) {
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
    return oe = F + oe, j = { id: h++, callback: z, priorityLevel: j, startTime: F, expirationTime: oe, sortIndex: -1 }, F > G ? (j.sortIndex = F, t(f, j), n(s) === null && j === n(f) && (k ? (c(g), g = -1) : k = !0, ne(v, F - G))) : (j.sortIndex = oe, t(s, j), x || w || (x = !0, ee(T))), j;
  }, e.unstable_shouldYield = Q, e.unstable_wrapCallback = function(j) {
    var z = m;
    return function() {
      var F = m;
      m = z;
      try {
        return j.apply(this, arguments);
      } finally {
        m = F;
      }
    };
  };
})(ka);
Sa.exports = ka;
var Bc = Sa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hc = N, Te = Bc;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _a = /* @__PURE__ */ new Set(), Vn = {};
function Qt(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Vn[e] = t, e = 0; e < t.length; e++) _a.add(t[e]);
}
var tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lo = Object.prototype.hasOwnProperty, Gc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bi = {}, es = {};
function Kc(e) {
  return lo.call(es, e) ? !0 : lo.call(bi, e) ? !1 : Gc.test(e) ? es[e] = !0 : (bi[e] = !0, !1);
}
function Yc(e, t, n, r) {
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
function Xc(e, t, n, r) {
  if (t === null || typeof t > "u" || Yc(e, t, n, r)) return !0;
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
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Xc(t, n, l, r) && (n = null), r || l === null ? Kc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, pr = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), oi = Symbol.for("react.strict_mode"), oo = Symbol.for("react.profiler"), Ea = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), ii = Symbol.for("react.forward_ref"), io = Symbol.for("react.suspense"), so = Symbol.for("react.suspense_list"), si = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), Na = Symbol.for("react.offscreen"), ts = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object" ? null : (e = ts && e[ts] || e["@@iterator"], typeof e == "function" ? e : null);
}
var X = Object.assign, zl;
function Tn(e) {
  if (zl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    zl = t && t[1] || "";
  }
  return `
` + zl + e;
}
var Rl = !1;
function Fl(e, t) {
  if (!e || Rl) return "";
  Rl = !0;
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
    Rl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Tn(e) : "";
}
function Zc(e) {
  switch (e.tag) {
    case 5:
      return Tn(e.type);
    case 16:
      return Tn("Lazy");
    case 13:
      return Tn("Suspense");
    case 19:
      return Tn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Fl(e.type, !1), e;
    case 11:
      return e = Fl(e.type.render, !1), e;
    case 1:
      return e = Fl(e.type, !0), e;
    default:
      return "";
  }
}
function ao(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gt:
      return "Fragment";
    case Ht:
      return "Portal";
    case oo:
      return "Profiler";
    case oi:
      return "StrictMode";
    case io:
      return "Suspense";
    case so:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ca:
      return (e.displayName || "Context") + ".Consumer";
    case Ea:
      return (e._context.displayName || "Context") + ".Provider";
    case ii:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case si:
      return t = e.displayName || null, t !== null ? t : ao(e.type) || "Memo";
    case st:
      t = e._payload, e = e._init;
      try {
        return ao(e(t));
      } catch {
      }
  }
  return null;
}
function Jc(e) {
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
      return ao(t);
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
function St(e) {
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
function ja(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function qc(e) {
  var t = ja(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function mr(e) {
  e._valueTracker || (e._valueTracker = qc(e));
}
function Ta(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ja(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Qr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uo(e, t) {
  var n = t.checked;
  return X({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ns(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = St(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Pa(e, t) {
  t = t.checked, t != null && li(e, "checked", t, !1);
}
function co(e, t) {
  Pa(e, t);
  var n = St(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? fo(e, t.type, n) : t.hasOwnProperty("defaultValue") && fo(e, t.type, St(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function rs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function fo(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pn = Array.isArray;
function rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + St(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return X({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ls(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: St(n) };
}
function Ia(e, t) {
  var n = St(t.value), r = St(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function os(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function La(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? La(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hr, Ma = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (hr = hr || document.createElement("div"), hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, bc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mn).forEach(function(e) {
  bc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Mn[t] = Mn[e];
  });
});
function za(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mn.hasOwnProperty(e) && Mn[e] ? ("" + t).trim() : t + "px";
}
function Ra(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = za(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var ed = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ho(e, t) {
  if (t) {
    if (ed[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
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
var go = null;
function ai(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var vo = null, ln = null, on = null;
function is(e) {
  if (e = sr(e)) {
    if (typeof vo != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = vl(t), vo(e.stateNode, e.type, t));
  }
}
function Fa(e) {
  ln ? on ? on.push(e) : on = [e] : ln = e;
}
function Da() {
  if (ln) {
    var e = ln, t = on;
    if (on = ln = null, is(e), t) for (e = 0; e < t.length; e++) is(t[e]);
  }
}
function Oa(e, t) {
  return e(t);
}
function Aa() {
}
var Dl = !1;
function $a(e, t, n) {
  if (Dl) return e(t, n);
  Dl = !0;
  try {
    return Oa(e, t, n);
  } finally {
    Dl = !1, (ln !== null || on !== null) && (Aa(), Da());
  }
}
function Wn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vl(n);
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
var wo = !1;
if (tt) try {
  var Sn = {};
  Object.defineProperty(Sn, "passive", { get: function() {
    wo = !0;
  } }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
} catch {
  wo = !1;
}
function td(e, t, n, r, l, o, i, a, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var zn = !1, Wr = null, Br = !1, xo = null, nd = { onError: function(e) {
  zn = !0, Wr = e;
} };
function rd(e, t, n, r, l, o, i, a, s) {
  zn = !1, Wr = null, td.apply(nd, arguments);
}
function ld(e, t, n, r, l, o, i, a, s) {
  if (rd.apply(this, arguments), zn) {
    if (zn) {
      var f = Wr;
      zn = !1, Wr = null;
    } else throw Error(S(198));
    Br || (Br = !0, xo = f);
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
function Ua(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ss(e) {
  if (Wt(e) !== e) throw Error(S(188));
}
function od(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wt(e), t === null) throw Error(S(188));
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
        if (o === n) return ss(l), e;
        if (o === r) return ss(l), t;
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
function Va(e) {
  return e = od(e), e !== null ? Qa(e) : null;
}
function Qa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Qa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wa = Te.unstable_scheduleCallback, as = Te.unstable_cancelCallback, id = Te.unstable_shouldYield, sd = Te.unstable_requestPaint, b = Te.unstable_now, ad = Te.unstable_getCurrentPriorityLevel, ui = Te.unstable_ImmediatePriority, Ba = Te.unstable_UserBlockingPriority, Hr = Te.unstable_NormalPriority, ud = Te.unstable_LowPriority, Ha = Te.unstable_IdlePriority, ml = null, Ye = null;
function cd(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
    Ye.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Qe = Math.clz32 ? Math.clz32 : pd, dd = Math.log, fd = Math.LN2;
function pd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (dd(e) / fd | 0) | 0;
}
var yr = 64, gr = 4194304;
function In(e) {
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
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? r = In(a) : (o &= i, o !== 0 && (r = In(o)));
  } else i = n & ~l, i !== 0 ? r = In(i) : o !== 0 && (r = In(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Qe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function md(e, t) {
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
function hd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Qe(o), a = 1 << i, s = l[i];
    s === -1 ? (!(a & n) || a & r) && (l[i] = md(a, t)) : s <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function So(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ga() {
  var e = yr;
  return yr <<= 1, !(yr & 4194240) && (yr = 64), e;
}
function Ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function or(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qe(t), e[t] = n;
}
function yd(e, t) {
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
var A = 0;
function Ka(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ya, di, Xa, Za, Ja, ko = !1, vr = [], pt = null, mt = null, ht = null, Bn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), ut = [], gd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function us(e, t) {
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
function kn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = sr(t), t !== null && di(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function vd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return pt = kn(pt, e, t, n, r, l), !0;
    case "dragenter":
      return mt = kn(mt, e, t, n, r, l), !0;
    case "mouseover":
      return ht = kn(ht, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Bn.set(o, kn(Bn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Hn.set(o, kn(Hn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function qa(e) {
  var t = Mt(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ua(n), t !== null) {
          e.blockedOn = t, Ja(e.priority, function() {
            Xa(n);
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
function Mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      go = r, n.target.dispatchEvent(r), go = null;
    } else return t = sr(n), t !== null && di(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function cs(e, t, n) {
  Mr(e) && n.delete(t);
}
function wd() {
  ko = !1, pt !== null && Mr(pt) && (pt = null), mt !== null && Mr(mt) && (mt = null), ht !== null && Mr(ht) && (ht = null), Bn.forEach(cs), Hn.forEach(cs);
}
function _n(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ko || (ko = !0, Te.unstable_scheduleCallback(Te.unstable_NormalPriority, wd)));
}
function Gn(e) {
  function t(l) {
    return _n(l, e);
  }
  if (0 < vr.length) {
    _n(vr[0], e);
    for (var n = 1; n < vr.length; n++) {
      var r = vr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (pt !== null && _n(pt, e), mt !== null && _n(mt, e), ht !== null && _n(ht, e), Bn.forEach(t), Hn.forEach(t), n = 0; n < ut.length; n++) r = ut[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && (n = ut[0], n.blockedOn === null); ) qa(n), n.blockedOn === null && ut.shift();
}
var sn = ot.ReactCurrentBatchConfig, Kr = !0;
function xd(e, t, n, r) {
  var l = A, o = sn.transition;
  sn.transition = null;
  try {
    A = 1, fi(e, t, n, r);
  } finally {
    A = l, sn.transition = o;
  }
}
function Sd(e, t, n, r) {
  var l = A, o = sn.transition;
  sn.transition = null;
  try {
    A = 4, fi(e, t, n, r);
  } finally {
    A = l, sn.transition = o;
  }
}
function fi(e, t, n, r) {
  if (Kr) {
    var l = _o(e, t, n, r);
    if (l === null) Kl(e, t, r, Yr, n), us(e, r);
    else if (vd(l, e, t, n, r)) r.stopPropagation();
    else if (us(e, r), t & 4 && -1 < gd.indexOf(e)) {
      for (; l !== null; ) {
        var o = sr(l);
        if (o !== null && Ya(o), o = _o(e, t, n, r), o === null && Kl(e, t, r, Yr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Kl(e, t, r, null, n);
  }
}
var Yr = null;
function _o(e, t, n, r) {
  if (Yr = null, e = ai(r), e = Mt(e), e !== null) if (t = Wt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ua(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Yr = e, null;
}
function ba(e) {
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
      switch (ad()) {
        case ui:
          return 1;
        case Ba:
          return 4;
        case Hr:
        case ud:
          return 16;
        case Ha:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null, pi = null, zr = null;
function eu() {
  if (zr) return zr;
  var e, t = pi, n = t.length, r, l = "value" in dt ? dt.value : dt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return zr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Rr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function wr() {
  return !0;
}
function ds() {
  return !1;
}
function Ie(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? wr : ds, this.isPropagationStopped = ds, this;
  }
  return X(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wr);
  }, persist: function() {
  }, isPersistent: wr }), t;
}
var vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, mi = Ie(vn), ir = X({}, vn, { view: 0, detail: 0 }), kd = Ie(ir), Al, $l, En, hl = X({}, ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? (Al = e.screenX - En.screenX, $l = e.screenY - En.screenY) : $l = Al = 0, En = e), Al);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : $l;
} }), fs = Ie(hl), _d = X({}, hl, { dataTransfer: 0 }), Ed = Ie(_d), Cd = X({}, ir, { relatedTarget: 0 }), Ul = Ie(Cd), Nd = X({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jd = Ie(Nd), Td = X({}, vn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Pd = Ie(Td), Id = X({}, vn, { data: 0 }), ps = Ie(Id), Ld = {
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
}, Md = {
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
}, zd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Rd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zd[e]) ? !!t[e] : !1;
}
function hi() {
  return Rd;
}
var Fd = X({}, ir, { key: function(e) {
  if (e.key) {
    var t = Ld[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Rr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Md[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hi, charCode: function(e) {
  return e.type === "keypress" ? Rr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Rr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Dd = Ie(Fd), Od = X({}, hl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ms = Ie(Od), Ad = X({}, ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hi }), $d = Ie(Ad), Ud = X({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Vd = Ie(Ud), Qd = X({}, hl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Wd = Ie(Qd), Bd = [9, 13, 27, 32], yi = tt && "CompositionEvent" in window, Rn = null;
tt && "documentMode" in document && (Rn = document.documentMode);
var Hd = tt && "TextEvent" in window && !Rn, tu = tt && (!yi || Rn && 8 < Rn && 11 >= Rn), hs = " ", ys = !1;
function nu(e, t) {
  switch (e) {
    case "keyup":
      return Bd.indexOf(t.keyCode) !== -1;
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
function ru(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function Gd(e, t) {
  switch (e) {
    case "compositionend":
      return ru(t);
    case "keypress":
      return t.which !== 32 ? null : (ys = !0, hs);
    case "textInput":
      return e = t.data, e === hs && ys ? null : e;
    default:
      return null;
  }
}
function Kd(e, t) {
  if (Kt) return e === "compositionend" || !yi && nu(e, t) ? (e = eu(), zr = pi = dt = null, Kt = !1, e) : null;
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
      return tu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function gs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yd[e.type] : t === "textarea";
}
function lu(e, t, n, r) {
  Fa(r), t = Xr(t, "onChange"), 0 < t.length && (n = new mi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Fn = null, Kn = null;
function Xd(e) {
  hu(e, 0);
}
function yl(e) {
  var t = Zt(e);
  if (Ta(t)) return e;
}
function Zd(e, t) {
  if (e === "change") return t;
}
var ou = !1;
if (tt) {
  var Vl;
  if (tt) {
    var Ql = "oninput" in document;
    if (!Ql) {
      var vs = document.createElement("div");
      vs.setAttribute("oninput", "return;"), Ql = typeof vs.oninput == "function";
    }
    Vl = Ql;
  } else Vl = !1;
  ou = Vl && (!document.documentMode || 9 < document.documentMode);
}
function ws() {
  Fn && (Fn.detachEvent("onpropertychange", iu), Kn = Fn = null);
}
function iu(e) {
  if (e.propertyName === "value" && yl(Kn)) {
    var t = [];
    lu(t, Kn, e, ai(e)), $a(Xd, t);
  }
}
function Jd(e, t, n) {
  e === "focusin" ? (ws(), Fn = t, Kn = n, Fn.attachEvent("onpropertychange", iu)) : e === "focusout" && ws();
}
function qd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return yl(Kn);
}
function bd(e, t) {
  if (e === "click") return yl(t);
}
function ef(e, t) {
  if (e === "input" || e === "change") return yl(t);
}
function tf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Be = typeof Object.is == "function" ? Object.is : tf;
function Yn(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!lo.call(t, l) || !Be(e[l], t[l])) return !1;
  }
  return !0;
}
function xs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ss(e, t) {
  var n = xs(e);
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
    n = xs(n);
  }
}
function su(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? su(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function au() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function gi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function nf(e) {
  var t = au(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && su(n.ownerDocument.documentElement, n)) {
    if (r !== null && gi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ss(n, o);
        var i = Ss(
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
var rf = tt && "documentMode" in document && 11 >= document.documentMode, Yt = null, Eo = null, Dn = null, Co = !1;
function ks(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Co || Yt == null || Yt !== Qr(r) || (r = Yt, "selectionStart" in r && gi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Dn && Yn(Dn, r) || (Dn = r, r = Xr(Eo, "onSelect"), 0 < r.length && (t = new mi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yt)));
}
function xr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xt = { animationend: xr("Animation", "AnimationEnd"), animationiteration: xr("Animation", "AnimationIteration"), animationstart: xr("Animation", "AnimationStart"), transitionend: xr("Transition", "TransitionEnd") }, Wl = {}, uu = {};
tt && (uu = document.createElement("div").style, "AnimationEvent" in window || (delete Xt.animationend.animation, delete Xt.animationiteration.animation, delete Xt.animationstart.animation), "TransitionEvent" in window || delete Xt.transitionend.transition);
function gl(e) {
  if (Wl[e]) return Wl[e];
  if (!Xt[e]) return e;
  var t = Xt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in uu) return Wl[e] = t[n];
  return e;
}
var cu = gl("animationend"), du = gl("animationiteration"), fu = gl("animationstart"), pu = gl("transitionend"), mu = /* @__PURE__ */ new Map(), _s = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function _t(e, t) {
  mu.set(e, t), Qt(t, [e]);
}
for (var Bl = 0; Bl < _s.length; Bl++) {
  var Hl = _s[Bl], lf = Hl.toLowerCase(), of = Hl[0].toUpperCase() + Hl.slice(1);
  _t(lf, "on" + of);
}
_t(cu, "onAnimationEnd");
_t(du, "onAnimationIteration");
_t(fu, "onAnimationStart");
_t("dblclick", "onDoubleClick");
_t("focusin", "onFocus");
_t("focusout", "onBlur");
_t(pu, "onTransitionEnd");
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
var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function Es(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ld(r, t, void 0, e), e.currentTarget = null;
}
function hu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], s = a.instance, f = a.currentTarget;
        if (a = a.listener, s !== o && l.isPropagationStopped()) break e;
        Es(l, a, f), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], s = a.instance, f = a.currentTarget, a = a.listener, s !== o && l.isPropagationStopped()) break e;
        Es(l, a, f), o = s;
      }
    }
  }
  if (Br) throw e = xo, Br = !1, xo = null, e;
}
function W(e, t) {
  var n = t[Io];
  n === void 0 && (n = t[Io] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (yu(t, e, 2, !1), n.add(r));
}
function Gl(e, t, n) {
  var r = 0;
  t && (r |= 4), yu(n, e, r, t);
}
var Sr = "_reactListening" + Math.random().toString(36).slice(2);
function Xn(e) {
  if (!e[Sr]) {
    e[Sr] = !0, _a.forEach(function(n) {
      n !== "selectionchange" && (sf.has(n) || Gl(n, !1, e), Gl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sr] || (t[Sr] = !0, Gl("selectionchange", !1, t));
  }
}
function yu(e, t, n, r) {
  switch (ba(t)) {
    case 1:
      var l = xd;
      break;
    case 4:
      l = Sd;
      break;
    default:
      l = fi;
  }
  n = l.bind(null, t, n, e), l = void 0, !wo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Kl(e, t, n, r, l) {
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
        if (i = Mt(a), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  $a(function() {
    var f = o, h = ai(n), y = [];
    e: {
      var m = mu.get(e);
      if (m !== void 0) {
        var w = mi, x = e;
        switch (e) {
          case "keypress":
            if (Rr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Dd;
            break;
          case "focusin":
            x = "focus", w = Ul;
            break;
          case "focusout":
            x = "blur", w = Ul;
            break;
          case "beforeblur":
          case "afterblur":
            w = Ul;
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
            w = fs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Ed;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = $d;
            break;
          case cu:
          case du:
          case fu:
            w = jd;
            break;
          case pu:
            w = Vd;
            break;
          case "scroll":
            w = kd;
            break;
          case "wheel":
            w = Wd;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Pd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ms;
        }
        var k = (t & 4) !== 0, E = !k && e === "scroll", c = k ? m !== null ? m + "Capture" : null : m;
        k = [];
        for (var d = f, p; d !== null; ) {
          p = d;
          var v = p.stateNode;
          if (p.tag === 5 && v !== null && (p = v, c !== null && (v = Wn(d, c), v != null && k.push(Zn(d, v, p)))), E) break;
          d = d.return;
        }
        0 < k.length && (m = new w(m, x, null, n, h), y.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", m && n !== go && (x = n.relatedTarget || n.fromElement) && (Mt(x) || x[nt])) break e;
        if ((w || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, w ? (x = n.relatedTarget || n.toElement, w = f, x = x ? Mt(x) : null, x !== null && (E = Wt(x), x !== E || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null, x = f), w !== x)) {
          if (k = fs, v = "onMouseLeave", c = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (k = ms, v = "onPointerLeave", c = "onPointerEnter", d = "pointer"), E = w == null ? m : Zt(w), p = x == null ? m : Zt(x), m = new k(v, d + "leave", w, n, h), m.target = E, m.relatedTarget = p, v = null, Mt(h) === f && (k = new k(c, d + "enter", x, n, h), k.target = p, k.relatedTarget = E, v = k), E = v, w && x) t: {
            for (k = w, c = x, d = 0, p = k; p; p = Bt(p)) d++;
            for (p = 0, v = c; v; v = Bt(v)) p++;
            for (; 0 < d - p; ) k = Bt(k), d--;
            for (; 0 < p - d; ) c = Bt(c), p--;
            for (; d--; ) {
              if (k === c || c !== null && k === c.alternate) break t;
              k = Bt(k), c = Bt(c);
            }
            k = null;
          }
          else k = null;
          w !== null && Cs(y, m, w, k, !1), x !== null && E !== null && Cs(y, E, x, k, !0);
        }
      }
      e: {
        if (m = f ? Zt(f) : window, w = m.nodeName && m.nodeName.toLowerCase(), w === "select" || w === "input" && m.type === "file") var T = Zd;
        else if (gs(m)) if (ou) T = ef;
        else {
          T = qd;
          var I = Jd;
        }
        else (w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (T = bd);
        if (T && (T = T(e, f))) {
          lu(y, T, n, h);
          break e;
        }
        I && I(e, m, f), e === "focusout" && (I = m._wrapperState) && I.controlled && m.type === "number" && fo(m, "number", m.value);
      }
      switch (I = f ? Zt(f) : window, e) {
        case "focusin":
          (gs(I) || I.contentEditable === "true") && (Yt = I, Eo = f, Dn = null);
          break;
        case "focusout":
          Dn = Eo = Yt = null;
          break;
        case "mousedown":
          Co = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Co = !1, ks(y, n, h);
          break;
        case "selectionchange":
          if (rf) break;
        case "keydown":
        case "keyup":
          ks(y, n, h);
      }
      var L;
      if (yi) e: {
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
      else Kt ? nu(e, n) && (g = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (g = "onCompositionStart");
      g && (tu && n.locale !== "ko" && (Kt || g !== "onCompositionStart" ? g === "onCompositionEnd" && Kt && (L = eu()) : (dt = h, pi = "value" in dt ? dt.value : dt.textContent, Kt = !0)), I = Xr(f, g), 0 < I.length && (g = new ps(g, e, null, n, h), y.push({ event: g, listeners: I }), L ? g.data = L : (L = ru(n), L !== null && (g.data = L)))), (L = Hd ? Gd(e, n) : Kd(e, n)) && (f = Xr(f, "onBeforeInput"), 0 < f.length && (h = new ps("onBeforeInput", "beforeinput", null, n, h), y.push({ event: h, listeners: f }), h.data = L));
    }
    hu(y, t);
  });
}
function Zn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xr(e, t) {
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
function Cs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, s = a.alternate, f = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 && f !== null && (a = f, l ? (s = Wn(n, o), s != null && i.unshift(Zn(n, s, a))) : l || (s = Wn(n, o), s != null && i.push(Zn(n, s, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var af = /\r\n?/g, uf = /\u0000|\uFFFD/g;
function Ns(e) {
  return (typeof e == "string" ? e : "" + e).replace(af, `
`).replace(uf, "");
}
function kr(e, t, n) {
  if (t = Ns(t), Ns(e) !== t && n) throw Error(S(425));
}
function Zr() {
}
var No = null, jo = null;
function To(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Po = typeof setTimeout == "function" ? setTimeout : void 0, cf = typeof clearTimeout == "function" ? clearTimeout : void 0, js = typeof Promise == "function" ? Promise : void 0, df = typeof queueMicrotask == "function" ? queueMicrotask : typeof js < "u" ? function(e) {
  return js.resolve(null).then(e).catch(ff);
} : Po;
function ff(e) {
  setTimeout(function() {
    throw e;
  });
}
function Yl(e, t) {
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
function Ts(e) {
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
var wn = Math.random().toString(36).slice(2), Ke = "__reactFiber$" + wn, Jn = "__reactProps$" + wn, nt = "__reactContainer$" + wn, Io = "__reactEvents$" + wn, pf = "__reactListeners$" + wn, mf = "__reactHandles$" + wn;
function Mt(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[nt] || n[Ke]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ts(e); e !== null; ) {
        if (n = e[Ke]) return n;
        e = Ts(e);
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
function vl(e) {
  return e[Jn] || null;
}
var Lo = [], Jt = -1;
function Et(e) {
  return { current: e };
}
function B(e) {
  0 > Jt || (e.current = Lo[Jt], Lo[Jt] = null, Jt--);
}
function V(e, t) {
  Jt++, Lo[Jt] = e.current, e.current = t;
}
var kt = {}, me = Et(kt), ke = Et(!1), Ot = kt;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function _e(e) {
  return e = e.childContextTypes, e != null;
}
function Jr() {
  B(ke), B(me);
}
function Ps(e, t, n) {
  if (me.current !== kt) throw Error(S(168));
  V(me, t), V(ke, n);
}
function gu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Jc(e) || "Unknown", l));
  return X({}, n, r);
}
function qr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kt, Ot = me.current, V(me, e), V(ke, ke.current), !0;
}
function Is(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = gu(e, t, Ot), r.__reactInternalMemoizedMergedChildContext = e, B(ke), B(me), V(me, e)) : B(ke), V(ke, n);
}
var Je = null, wl = !1, Xl = !1;
function vu(e) {
  Je === null ? Je = [e] : Je.push(e);
}
function hf(e) {
  wl = !0, vu(e);
}
function Ct() {
  if (!Xl && Je !== null) {
    Xl = !0;
    var e = 0, t = A;
    try {
      var n = Je;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Je = null, wl = !1;
    } catch (l) {
      throw Je !== null && (Je = Je.slice(e + 1)), Wa(ui, Ct), l;
    } finally {
      A = t, Xl = !1;
    }
  }
  return null;
}
var qt = [], bt = 0, br = null, el = 0, Le = [], Me = 0, At = null, qe = 1, be = "";
function It(e, t) {
  qt[bt++] = el, qt[bt++] = br, br = e, el = t;
}
function wu(e, t, n) {
  Le[Me++] = qe, Le[Me++] = be, Le[Me++] = At, At = e;
  var r = qe;
  e = be;
  var l = 32 - Qe(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Qe(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, qe = 1 << 32 - Qe(t) + l | n << l | r, be = o + e;
  } else qe = 1 << o | n << l | r, be = e;
}
function vi(e) {
  e.return !== null && (It(e, 1), wu(e, 1, 0));
}
function wi(e) {
  for (; e === br; ) br = qt[--bt], qt[bt] = null, el = qt[--bt], qt[bt] = null;
  for (; e === At; ) At = Le[--Me], Le[Me] = null, be = Le[--Me], Le[Me] = null, qe = Le[--Me], Le[Me] = null;
}
var je = null, Ne = null, H = !1, Ve = null;
function xu(e, t) {
  var n = ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ls(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = yt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = At !== null ? { id: qe, overflow: be } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, je = e, Ne = null, !0) : !1;
    default:
      return !1;
  }
}
function Mo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zo(e) {
  if (H) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!Ls(e, t)) {
        if (Mo(e)) throw Error(S(418));
        t = yt(n.nextSibling);
        var r = je;
        t && Ls(e, t) ? xu(r, n) : (e.flags = e.flags & -4097 | 2, H = !1, je = e);
      }
    } else {
      if (Mo(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, H = !1, je = e;
    }
  }
}
function Ms(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  je = e;
}
function _r(e) {
  if (e !== je) return !1;
  if (!H) return Ms(e), H = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !To(e.type, e.memoizedProps)), t && (t = Ne)) {
    if (Mo(e)) throw Su(), Error(S(418));
    for (; t; ) xu(e, t), t = yt(t.nextSibling);
  }
  if (Ms(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = yt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = je ? yt(e.stateNode.nextSibling) : null;
  return !0;
}
function Su() {
  for (var e = Ne; e; ) e = yt(e.nextSibling);
}
function fn() {
  Ne = je = null, H = !1;
}
function xi(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
var yf = ot.ReactCurrentBatchConfig;
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
function Er(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function zs(e) {
  var t = e._init;
  return t(e._payload);
}
function ku(e) {
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
  function a(c, d, p, v) {
    return d === null || d.tag !== 6 ? (d = no(p, c.mode, v), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function s(c, d, p, v) {
    var T = p.type;
    return T === Gt ? h(c, d, p.props.children, v, p.key) : d !== null && (d.elementType === T || typeof T == "object" && T !== null && T.$$typeof === st && zs(T) === d.type) ? (v = l(d, p.props), v.ref = Cn(c, d, p), v.return = c, v) : (v = Vr(p.type, p.key, p.props, null, c.mode, v), v.ref = Cn(c, d, p), v.return = c, v);
  }
  function f(c, d, p, v) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = ro(p, c.mode, v), d.return = c, d) : (d = l(d, p.children || []), d.return = c, d);
  }
  function h(c, d, p, v, T) {
    return d === null || d.tag !== 7 ? (d = Dt(p, c.mode, v, T), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function y(c, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = no("" + d, c.mode, p), d.return = c, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case pr:
          return p = Vr(d.type, d.key, d.props, null, c.mode, p), p.ref = Cn(c, null, d), p.return = c, p;
        case Ht:
          return d = ro(d, c.mode, p), d.return = c, d;
        case st:
          var v = d._init;
          return y(c, v(d._payload), p);
      }
      if (Pn(d) || xn(d)) return d = Dt(d, c.mode, p, null), d.return = c, d;
      Er(c, d);
    }
    return null;
  }
  function m(c, d, p, v) {
    var T = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return T !== null ? null : a(c, d, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case pr:
          return p.key === T ? s(c, d, p, v) : null;
        case Ht:
          return p.key === T ? f(c, d, p, v) : null;
        case st:
          return T = p._init, m(
            c,
            d,
            T(p._payload),
            v
          );
      }
      if (Pn(p) || xn(p)) return T !== null ? null : h(c, d, p, v, null);
      Er(c, p);
    }
    return null;
  }
  function w(c, d, p, v, T) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return c = c.get(p) || null, a(d, c, "" + v, T);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case pr:
          return c = c.get(v.key === null ? p : v.key) || null, s(d, c, v, T);
        case Ht:
          return c = c.get(v.key === null ? p : v.key) || null, f(d, c, v, T);
        case st:
          var I = v._init;
          return w(c, d, p, I(v._payload), T);
      }
      if (Pn(v) || xn(v)) return c = c.get(p) || null, h(d, c, v, T, null);
      Er(d, v);
    }
    return null;
  }
  function x(c, d, p, v) {
    for (var T = null, I = null, L = d, g = d = 0, R = null; L !== null && g < p.length; g++) {
      L.index > g ? (R = L, L = null) : R = L.sibling;
      var M = m(c, L, p[g], v);
      if (M === null) {
        L === null && (L = R);
        break;
      }
      e && L && M.alternate === null && t(c, L), d = o(M, d, g), I === null ? T = M : I.sibling = M, I = M, L = R;
    }
    if (g === p.length) return n(c, L), H && It(c, g), T;
    if (L === null) {
      for (; g < p.length; g++) L = y(c, p[g], v), L !== null && (d = o(L, d, g), I === null ? T = L : I.sibling = L, I = L);
      return H && It(c, g), T;
    }
    for (L = r(c, L); g < p.length; g++) R = w(L, c, g, p[g], v), R !== null && (e && R.alternate !== null && L.delete(R.key === null ? g : R.key), d = o(R, d, g), I === null ? T = R : I.sibling = R, I = R);
    return e && L.forEach(function(Q) {
      return t(c, Q);
    }), H && It(c, g), T;
  }
  function k(c, d, p, v) {
    var T = xn(p);
    if (typeof T != "function") throw Error(S(150));
    if (p = T.call(p), p == null) throw Error(S(151));
    for (var I = T = null, L = d, g = d = 0, R = null, M = p.next(); L !== null && !M.done; g++, M = p.next()) {
      L.index > g ? (R = L, L = null) : R = L.sibling;
      var Q = m(c, L, M.value, v);
      if (Q === null) {
        L === null && (L = R);
        break;
      }
      e && L && Q.alternate === null && t(c, L), d = o(Q, d, g), I === null ? T = Q : I.sibling = Q, I = Q, L = R;
    }
    if (M.done) return n(
      c,
      L
    ), H && It(c, g), T;
    if (L === null) {
      for (; !M.done; g++, M = p.next()) M = y(c, M.value, v), M !== null && (d = o(M, d, g), I === null ? T = M : I.sibling = M, I = M);
      return H && It(c, g), T;
    }
    for (L = r(c, L); !M.done; g++, M = p.next()) M = w(L, c, g, M.value, v), M !== null && (e && M.alternate !== null && L.delete(M.key === null ? g : M.key), d = o(M, d, g), I === null ? T = M : I.sibling = M, I = M);
    return e && L.forEach(function(Z) {
      return t(c, Z);
    }), H && It(c, g), T;
  }
  function E(c, d, p, v) {
    if (typeof p == "object" && p !== null && p.type === Gt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case pr:
          e: {
            for (var T = p.key, I = d; I !== null; ) {
              if (I.key === T) {
                if (T = p.type, T === Gt) {
                  if (I.tag === 7) {
                    n(c, I.sibling), d = l(I, p.props.children), d.return = c, c = d;
                    break e;
                  }
                } else if (I.elementType === T || typeof T == "object" && T !== null && T.$$typeof === st && zs(T) === I.type) {
                  n(c, I.sibling), d = l(I, p.props), d.ref = Cn(c, I, p), d.return = c, c = d;
                  break e;
                }
                n(c, I);
                break;
              } else t(c, I);
              I = I.sibling;
            }
            p.type === Gt ? (d = Dt(p.props.children, c.mode, v, p.key), d.return = c, c = d) : (v = Vr(p.type, p.key, p.props, null, c.mode, v), v.ref = Cn(c, d, p), v.return = c, c = v);
          }
          return i(c);
        case Ht:
          e: {
            for (I = p.key; d !== null; ) {
              if (d.key === I) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(c, d.sibling), d = l(d, p.children || []), d.return = c, c = d;
                break e;
              } else {
                n(c, d);
                break;
              }
              else t(c, d);
              d = d.sibling;
            }
            d = ro(p, c.mode, v), d.return = c, c = d;
          }
          return i(c);
        case st:
          return I = p._init, E(c, d, I(p._payload), v);
      }
      if (Pn(p)) return x(c, d, p, v);
      if (xn(p)) return k(c, d, p, v);
      Er(c, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(c, d.sibling), d = l(d, p), d.return = c, c = d) : (n(c, d), d = no(p, c.mode, v), d.return = c, c = d), i(c)) : n(c, d);
  }
  return E;
}
var pn = ku(!0), _u = ku(!1), tl = Et(null), nl = null, en = null, Si = null;
function ki() {
  Si = en = nl = null;
}
function _i(e) {
  var t = tl.current;
  B(tl), e._currentValue = t;
}
function Ro(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function an(e, t) {
  nl = e, Si = en = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Fe(e) {
  var t = e._currentValue;
  if (Si !== e) if (e = { context: e, memoizedValue: t, next: null }, en === null) {
    if (nl === null) throw Error(S(308));
    en = e, nl.dependencies = { lanes: 0, firstContext: e };
  } else en = en.next = e;
  return t;
}
var zt = null;
function Ei(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function Eu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ei(t)) : (n.next = l.next, l.next = n), t.interleaved = n, rt(e, r);
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function Ci(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Cu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function et(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, O & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, rt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ei(r)) : (t.next = l.next, l.next = t), r.interleaved = t, rt(e, n);
}
function Fr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ci(e, n);
  }
}
function Rs(e, t) {
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
function rl(e, t, n, r) {
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
      var m = a.lane, w = a.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: w,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var x = e, k = a;
          switch (m = t, w = n, k.tag) {
            case 1:
              if (x = k.payload, typeof x == "function") {
                y = x.call(w, y, m);
                break e;
              }
              y = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = k.payload, m = typeof x == "function" ? x.call(w, y, m) : x, m == null) break e;
              y = X({}, y, m);
              break e;
            case 2:
              at = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [a] : m.push(a));
      } else w = { eventTime: w, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, h === null ? (f = h = w, s = y) : h = h.next = w, i |= m;
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
    Ut |= i, e.lanes = i, e.memoizedState = y;
  }
}
function Fs(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var ar = {}, Xe = Et(ar), qn = Et(ar), bn = Et(ar);
function Rt(e) {
  if (e === ar) throw Error(S(174));
  return e;
}
function Ni(e, t) {
  switch (V(bn, t), V(qn, e), V(Xe, ar), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : mo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = mo(t, e);
  }
  B(Xe), V(Xe, t);
}
function mn() {
  B(Xe), B(qn), B(bn);
}
function Nu(e) {
  Rt(bn.current);
  var t = Rt(Xe.current), n = mo(t, e.type);
  t !== n && (V(qn, e), V(Xe, n));
}
function ji(e) {
  qn.current === e && (B(Xe), B(qn));
}
var K = Et(0);
function ll(e) {
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
var Zl = [];
function Ti() {
  for (var e = 0; e < Zl.length; e++) Zl[e]._workInProgressVersionPrimary = null;
  Zl.length = 0;
}
var Dr = ot.ReactCurrentDispatcher, Jl = ot.ReactCurrentBatchConfig, $t = 0, Y = null, re = null, ie = null, ol = !1, On = !1, er = 0, gf = 0;
function de() {
  throw Error(S(321));
}
function Pi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Ii(e, t, n, r, l, o) {
  if ($t = o, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Dr.current = e === null || e.memoizedState === null ? Sf : kf, e = n(r, l), On) {
    o = 0;
    do {
      if (On = !1, er = 0, 25 <= o) throw Error(S(301));
      o += 1, ie = re = null, t.updateQueue = null, Dr.current = _f, e = n(r, l);
    } while (On);
  }
  if (Dr.current = il, t = re !== null && re.next !== null, $t = 0, ie = re = Y = null, ol = !1, t) throw Error(S(300));
  return e;
}
function Li() {
  var e = er !== 0;
  return er = 0, e;
}
function Ge() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? Y.memoizedState = ie = e : ie = ie.next = e, ie;
}
function De() {
  if (re === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = ie === null ? Y.memoizedState : ie.next;
  if (t !== null) ie = t, re = e;
  else {
    if (e === null) throw Error(S(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, ie === null ? Y.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function tr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ql(e) {
  var t = De(), n = t.queue;
  if (n === null) throw Error(S(311));
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
    var a = i = null, s = null, f = o;
    do {
      var h = f.lane;
      if (($t & h) === h) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var y = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (a = s = y, i = r) : s = s.next = y, Y.lanes |= h, Ut |= h;
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? i = r : s.next = a, Be(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Y.lanes |= o, Ut |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bl(e) {
  var t = De(), n = t.queue;
  if (n === null) throw Error(S(311));
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
function ju() {
}
function Tu(e, t) {
  var n = Y, r = De(), l = t(), o = !Be(r.memoizedState, l);
  if (o && (r.memoizedState = l, Se = !0), r = r.queue, Mi(Lu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, nr(9, Iu.bind(null, n, r, l, t), void 0, null), se === null) throw Error(S(349));
    $t & 30 || Pu(n, t, l);
  }
  return l;
}
function Pu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Iu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Mu(t) && zu(e);
}
function Lu(e, t, n) {
  return n(function() {
    Mu(t) && zu(e);
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
function zu(e) {
  var t = rt(e, 1);
  t !== null && We(t, e, 1, -1);
}
function Ds(e) {
  var t = Ge();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: tr, lastRenderedState: e }, t.queue = e, e = e.dispatch = xf.bind(null, Y, e), [t.memoizedState, e];
}
function nr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ru() {
  return De().memoizedState;
}
function Or(e, t, n, r) {
  var l = Ge();
  Y.flags |= e, l.memoizedState = nr(1 | t, n, void 0, r === void 0 ? null : r);
}
function xl(e, t, n, r) {
  var l = De();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var i = re.memoizedState;
    if (o = i.destroy, r !== null && Pi(r, i.deps)) {
      l.memoizedState = nr(t, n, o, r);
      return;
    }
  }
  Y.flags |= e, l.memoizedState = nr(1 | t, n, o, r);
}
function Os(e, t) {
  return Or(8390656, 8, e, t);
}
function Mi(e, t) {
  return xl(2048, 8, e, t);
}
function Fu(e, t) {
  return xl(4, 2, e, t);
}
function Du(e, t) {
  return xl(4, 4, e, t);
}
function Ou(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Au(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xl(4, 4, Ou.bind(null, t, e), n);
}
function zi() {
}
function $u(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Uu(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Vu(e, t, n) {
  return $t & 21 ? (Be(n, t) || (n = Ga(), Y.lanes |= n, Ut |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function vf(e, t) {
  var n = A;
  A = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Jl.transition;
  Jl.transition = {};
  try {
    e(!1), t();
  } finally {
    A = n, Jl.transition = r;
  }
}
function Qu() {
  return De().memoizedState;
}
function wf(e, t, n) {
  var r = wt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Wu(e)) Bu(t, n);
  else if (n = Eu(e, t, n, r), n !== null) {
    var l = ge();
    We(n, e, r, l), Hu(n, t, r);
  }
}
function xf(e, t, n) {
  var r = wt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wu(e)) Bu(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, a = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = a, Be(a, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, Ei(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Eu(e, t, l, r), n !== null && (l = ge(), We(n, e, r, l), Hu(n, t, r));
  }
}
function Wu(e) {
  var t = e.alternate;
  return e === Y || t !== null && t === Y;
}
function Bu(e, t) {
  On = ol = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Hu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ci(e, n);
  }
}
var il = { readContext: Fe, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, Sf = { readContext: Fe, useCallback: function(e, t) {
  return Ge().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fe, useEffect: Os, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Or(
    4194308,
    4,
    Ou.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Or(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Or(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ge();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ge();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = wf.bind(null, Y, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ge();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ds, useDebugValue: zi, useDeferredValue: function(e) {
  return Ge().memoizedState = e;
}, useTransition: function() {
  var e = Ds(!1), t = e[0];
  return e = vf.bind(null, e[1]), Ge().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Y, l = Ge();
  if (H) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(S(349));
    $t & 30 || Pu(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Os(Lu.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, nr(9, Iu.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ge(), t = se.identifierPrefix;
  if (H) {
    var n = be, r = qe;
    n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = er++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = gf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, kf = {
  readContext: Fe,
  useCallback: $u,
  useContext: Fe,
  useEffect: Mi,
  useImperativeHandle: Au,
  useInsertionEffect: Fu,
  useLayoutEffect: Du,
  useMemo: Uu,
  useReducer: ql,
  useRef: Ru,
  useState: function() {
    return ql(tr);
  },
  useDebugValue: zi,
  useDeferredValue: function(e) {
    var t = De();
    return Vu(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = ql(tr)[0], t = De().memoizedState;
    return [e, t];
  },
  useMutableSource: ju,
  useSyncExternalStore: Tu,
  useId: Qu,
  unstable_isNewReconciler: !1
}, _f = { readContext: Fe, useCallback: $u, useContext: Fe, useEffect: Mi, useImperativeHandle: Au, useInsertionEffect: Fu, useLayoutEffect: Du, useMemo: Uu, useReducer: bl, useRef: Ru, useState: function() {
  return bl(tr);
}, useDebugValue: zi, useDeferredValue: function(e) {
  var t = De();
  return re === null ? t.memoizedState = e : Vu(t, re.memoizedState, e);
}, useTransition: function() {
  var e = bl(tr)[0], t = De().memoizedState;
  return [e, t];
}, useMutableSource: ju, useSyncExternalStore: Tu, useId: Qu, unstable_isNewReconciler: !1 };
function $e(e, t) {
  if (e && e.defaultProps) {
    t = X({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Fo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ge(), l = wt(e), o = et(r, l);
  o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (We(t, e, l, r), Fr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ge(), l = wt(e), o = et(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (We(t, e, l, r), Fr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ge(), r = wt(e), l = et(n, r);
  l.tag = 2, t != null && (l.callback = t), t = gt(e, l, r), t !== null && (We(t, e, r, n), Fr(t, e, r));
} };
function As(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Yn(n, r) || !Yn(l, o) : !0;
}
function Gu(e, t, n) {
  var r = !1, l = kt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Fe(o) : (l = _e(t) ? Ot : me.current, r = t.contextTypes, o = (r = r != null) ? dn(e, l) : kt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Sl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function $s(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Sl.enqueueReplaceState(t, t.state, null);
}
function Do(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ci(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Fe(o) : (o = _e(t) ? Ot : me.current, l.context = dn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Fo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Sl.enqueueReplaceState(l, l.state, null), rl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Zc(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function eo(e, t, n) {
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
var Ef = typeof WeakMap == "function" ? WeakMap : Map;
function Ku(e, t, n) {
  n = et(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    al || (al = !0, Ko = r), Oo(e, t);
  }, n;
}
function Yu(e, t, n) {
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
function Us(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ef();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Af.bind(null, e, t, n), t.then(e, e));
}
function Vs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qs(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = et(-1, 1), t.tag = 2, gt(n, t, 1))), n.lanes |= 1), e);
}
var Cf = ot.ReactCurrentOwner, Se = !1;
function he(e, t, n, r) {
  t.child = e === null ? _u(t, null, n, r) : pn(t, e.child, n, r);
}
function Ws(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return an(t, l), r = Ii(e, t, n, r, o, l), n = Li(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, lt(e, t, l)) : (H && n && vi(t), t.flags |= 1, he(e, t, r, l), t.child);
}
function Bs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Vi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Xu(e, t, o, r, l)) : (e = Vr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Yn, n(i, r) && e.ref === t.ref) return lt(e, t, l);
  }
  return t.flags |= 1, e = xt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Xu(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yn(o, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, lt(e, t, l);
  }
  return Ao(e, t, n, r, l);
}
function Zu(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, V(nn, Ce), Ce |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, V(nn, Ce), Ce |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, V(nn, Ce), Ce |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, V(nn, Ce), Ce |= r;
  return he(e, t, l, n), t.child;
}
function Ju(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ao(e, t, n, r, l) {
  var o = _e(n) ? Ot : me.current;
  return o = dn(t, o), an(t, l), n = Ii(e, t, n, r, o, l), r = Li(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, lt(e, t, l)) : (H && r && vi(t), t.flags |= 1, he(e, t, n, l), t.child);
}
function Hs(e, t, n, r, l) {
  if (_e(n)) {
    var o = !0;
    qr(t);
  } else o = !1;
  if (an(t, l), t.stateNode === null) Ar(e, t), Gu(t, n, r), Do(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var s = i.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Fe(f) : (f = _e(n) ? Ot : me.current, f = dn(t, f));
    var h = n.getDerivedStateFromProps, y = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || s !== f) && $s(t, i, r, f), at = !1;
    var m = t.memoizedState;
    i.state = m, rl(t, r, i, l), s = t.memoizedState, a !== r || m !== s || ke.current || at ? (typeof h == "function" && (Fo(t, n, h, r), s = t.memoizedState), (a = at || As(t, n, a, r, m, s, f)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = f, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Cu(e, t), a = t.memoizedProps, f = t.type === t.elementType ? a : $e(t.type, a), i.props = f, y = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Fe(s) : (s = _e(n) ? Ot : me.current, s = dn(t, s));
    var w = n.getDerivedStateFromProps;
    (h = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== y || m !== s) && $s(t, i, r, s), at = !1, m = t.memoizedState, i.state = m, rl(t, r, i, l);
    var x = t.memoizedState;
    a !== y || m !== x || ke.current || at ? (typeof w == "function" && (Fo(t, n, w, r), x = t.memoizedState), (f = at || As(t, n, f, r, m, x, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), i.props = r, i.state = x, i.context = s, r = f) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return $o(e, t, n, r, o, l);
}
function $o(e, t, n, r, l, o) {
  Ju(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Is(t, n, !1), lt(e, t, o);
  r = t.stateNode, Cf.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = pn(t, e.child, null, o), t.child = pn(t, null, a, o)) : he(e, t, a, o), t.memoizedState = r.state, l && Is(t, n, !0), t.child;
}
function qu(e) {
  var t = e.stateNode;
  t.pendingContext ? Ps(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ps(e, t.context, !1), Ni(e, t.containerInfo);
}
function Gs(e, t, n, r, l) {
  return fn(), xi(l), t.flags |= 256, he(e, t, n, r), t.child;
}
var Uo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bu(e, t, n) {
  var r = t.pendingProps, l = K.current, o = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), V(K, l & 1), e === null)
    return zo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = El(i, r, 0, null), e = Dt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Vo(n), t.memoizedState = Uo, e) : Ri(t, i));
  if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Nf(e, t, i, r, a, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, a = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = xt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? o = xt(a, o) : (o = Dt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Vo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Uo, r;
  }
  return o = e.child, e = o.sibling, r = xt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ri(e, t) {
  return t = El({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Cr(e, t, n, r) {
  return r !== null && xi(r), pn(t, e.child, null, n), e = Ri(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Nf(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = eo(Error(S(422))), Cr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), o = Dt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && pn(t, e.child, null, i), t.child.memoizedState = Vo(i), t.memoizedState = Uo, o);
  if (!(t.mode & 1)) return Cr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(S(419)), r = eo(o, r, void 0), Cr(e, t, i, r);
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, rt(e, l), We(r, e, l, -1));
    }
    return Ui(), r = eo(Error(S(421))), Cr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $f.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ne = yt(l.nextSibling), je = t, H = !0, Ve = null, e !== null && (Le[Me++] = qe, Le[Me++] = be, Le[Me++] = At, qe = e.id, be = e.overflow, At = t), t = Ri(t, r.children), t.flags |= 4096, t);
}
function Ks(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ro(e.return, t, n);
}
function to(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function ec(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (he(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ks(e, n, t);
      else if (e.tag === 19) Ks(e, n, t);
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
  if (V(K, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ll(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), to(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ll(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      to(t, !0, n, null, o);
      break;
    case "together":
      to(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ar(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function lt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ut |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = xt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function jf(e, t, n) {
  switch (t.tag) {
    case 3:
      qu(t), fn();
      break;
    case 5:
      Nu(t);
      break;
    case 1:
      _e(t.type) && qr(t);
      break;
    case 4:
      Ni(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      V(tl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (V(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? bu(e, t, n) : (V(K, K.current & 1), e = lt(e, t, n), e !== null ? e.sibling : null);
      V(K, K.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ec(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), V(K, K.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Zu(e, t, n);
  }
  return lt(e, t, n);
}
var tc, Qo, nc, rc;
tc = function(e, t) {
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
Qo = function() {
};
nc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Rt(Xe.current);
    var o = null;
    switch (n) {
      case "input":
        l = uo(e, l), r = uo(e, r), o = [];
        break;
      case "select":
        l = X({}, l, { value: void 0 }), r = X({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = po(e, l), r = po(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zr);
    }
    ho(n, r);
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
rc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nn(e, t) {
  if (!H) switch (e.tailMode) {
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
function Tf(e, t, n) {
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
      return _e(t.type) && Jr(), fe(t), null;
    case 3:
      return r = t.stateNode, mn(), B(ke), B(me), Ti(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_r(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ve !== null && (Zo(Ve), Ve = null))), Qo(e, t), fe(t), null;
    case 5:
      ji(t);
      var l = Rt(bn.current);
      if (n = t.type, e !== null && t.stateNode != null) nc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return fe(t), null;
        }
        if (e = Rt(Xe.current), _r(t)) {
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
              ns(r, o), W("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, W("invalid", r);
              break;
            case "textarea":
              ls(r, o), W("invalid", r);
          }
          ho(n, o), l = null;
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
              mr(r), rs(r, o, !0);
              break;
            case "textarea":
              mr(r), os(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = La(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ke] = t, e[Jn] = r, tc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = yo(n, r), n) {
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
                ns(e, r), l = uo(e, r), W("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = X({}, r, { value: void 0 }), W("invalid", e);
                break;
              case "textarea":
                ls(e, r), l = po(e, r), W("invalid", e);
                break;
              default:
                l = r;
            }
            ho(n, l), a = l;
            for (o in a) if (a.hasOwnProperty(o)) {
              var s = a[o];
              o === "style" ? Ra(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ma(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Qn(e, s) : typeof s == "number" && Qn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Vn.hasOwnProperty(o) ? s != null && o === "onScroll" && W("scroll", e) : s != null && li(e, o, s, i));
            }
            switch (n) {
              case "input":
                mr(e), rs(e, r, !1);
                break;
              case "textarea":
                mr(e), os(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + St(r.value));
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
                typeof l.onClick == "function" && (e.onclick = Zr);
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
      if (e && t.stateNode != null) rc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = Rt(bn.current), Rt(Xe.current), _r(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ke] = t, (o = r.nodeValue !== n) && (e = je, e !== null)) switch (e.tag) {
            case 3:
              kr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && kr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ke] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (B(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (H && Ne !== null && t.mode & 1 && !(t.flags & 128)) Su(), fn(), t.flags |= 98560, o = !1;
        else if (o = _r(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[Ke] = t;
          } else fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), o = !1;
        } else Ve !== null && (Zo(Ve), Ve = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? le === 0 && (le = 3) : Ui())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return mn(), Qo(e, t), e === null && Xn(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return _i(t.type._context), fe(t), null;
    case 17:
      return _e(t.type) && Jr(), fe(t), null;
    case 19:
      if (B(K), o = t.memoizedState, o === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Nn(o, !1);
      else {
        if (le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = ll(e), i !== null) {
            for (t.flags |= 128, Nn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return V(K, K.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && b() > yn && (t.flags |= 128, r = !0, Nn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ll(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Nn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !H) return fe(t), null;
        } else 2 * b() - o.renderingStartTime > yn && n !== 1073741824 && (t.flags |= 128, r = !0, Nn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = b(), t.sibling = null, n = K.current, V(K, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return $i(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ce & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Pf(e, t) {
  switch (wi(t), t.tag) {
    case 1:
      return _e(t.type) && Jr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mn(), B(ke), B(me), Ti(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ji(t), null;
    case 13:
      if (B(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return B(K), null;
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
var Nr = !1, pe = !1, If = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    J(e, t, r);
  }
  else n.current = null;
}
function Wo(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Ys = !1;
function Lf(e, t) {
  if (No = Kr, e = au(), gi(e)) {
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
          for (var w; y !== n || l !== 0 && y.nodeType !== 3 || (a = i + l), y !== o || r !== 0 && y.nodeType !== 3 || (s = i + r), y.nodeType === 3 && (i += y.nodeValue.length), (w = y.firstChild) !== null; )
            m = y, y = w;
          for (; ; ) {
            if (y === e) break t;
            if (m === n && ++f === l && (a = i), m === o && ++h === r && (s = i), (w = y.nextSibling) !== null) break;
            y = m, m = y.parentNode;
          }
          y = w;
        }
        n = a === -1 || s === -1 ? null : { start: a, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (jo = { focusedElem: e, selectionRange: n }, Kr = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var k = x.memoizedProps, E = x.memoizedState, c = t.stateNode, d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? k : $e(t.type, k), E);
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
    } catch (v) {
      J(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return x = Ys, Ys = !1, x;
}
function An(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Wo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function kl(e, t) {
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
function Bo(e) {
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
function lc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, lc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ke], delete t[Jn], delete t[Io], delete t[pf], delete t[mf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || oc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ho(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ho(e, t, n), e = e.sibling; e !== null; ) Ho(e, t, n), e = e.sibling;
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), e = e.sibling;
}
var ae = null, Ue = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) ic(e, t, n), n = n.sibling;
}
function ic(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
    Ye.onCommitFiberUnmount(ml, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || tn(n, t);
    case 6:
      var r = ae, l = Ue;
      ae = null, it(e, t, n), ae = r, Ue = l, ae !== null && (Ue ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Ue ? (e = ae, n = n.stateNode, e.nodeType === 8 ? Yl(e.parentNode, n) : e.nodeType === 1 && Yl(e, n), Gn(e)) : Yl(ae, n.stateNode));
      break;
    case 4:
      r = ae, l = Ue, ae = n.stateNode.containerInfo, Ue = !0, it(e, t, n), ae = r, Ue = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Wo(n, t, i), l = l.next;
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (!pe && (tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, it(e, t, n), pe = r) : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function Zs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new If()), t.forEach(function(r) {
      var l = Uf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Oe(e, t) {
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
      if (ae === null) throw Error(S(160));
      ic(o, i, l), ae = null, Ue = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (f) {
      J(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sc(t, e), t = t.sibling;
}
function sc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Oe(t, e), He(e), r & 4) {
        try {
          An(3, e, e.return), kl(3, e);
        } catch (k) {
          J(e, e.return, k);
        }
        try {
          An(5, e, e.return);
        } catch (k) {
          J(e, e.return, k);
        }
      }
      break;
    case 1:
      Oe(t, e), He(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (Oe(t, e), He(e), r & 512 && n !== null && tn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (k) {
          J(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, a = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          a === "input" && o.type === "radio" && o.name != null && Pa(l, o), yo(a, i);
          var f = yo(a, o);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], y = s[i + 1];
            h === "style" ? Ra(l, y) : h === "dangerouslySetInnerHTML" ? Ma(l, y) : h === "children" ? Qn(l, y) : li(l, h, y, f);
          }
          switch (a) {
            case "input":
              co(l, o);
              break;
            case "textarea":
              Ia(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? rn(l, !!o.multiple, w, !1) : m !== !!o.multiple && (o.defaultValue != null ? rn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Jn] = o;
        } catch (k) {
          J(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Oe(t, e), He(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          J(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Oe(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Gn(t.containerInfo);
      } catch (k) {
        J(e, e.return, k);
      }
      break;
    case 4:
      Oe(t, e), He(e);
      break;
    case 13:
      Oe(t, e), He(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Oi = b())), r & 4 && Zs(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (f = pe) || h, Oe(t, e), pe = f) : Oe(t, e), He(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && e.mode & 1) for (P = e, h = e.child; h !== null; ) {
          for (y = P = h; P !== null; ) {
            switch (m = P, w = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                An(4, m, m.return);
                break;
              case 1:
                tn(m, m.return);
                var x = m.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (k) {
                    J(r, n, k);
                  }
                }
                break;
              case 5:
                tn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  qs(y);
                  continue;
                }
            }
            w !== null ? (w.return = m, P = w) : qs(y);
          }
          h = h.sibling;
        }
        e: for (h = null, y = e; ; ) {
          if (y.tag === 5) {
            if (h === null) {
              h = y;
              try {
                l = y.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = y.stateNode, s = y.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = za("display", i));
              } catch (k) {
                J(e, e.return, k);
              }
            }
          } else if (y.tag === 6) {
            if (h === null) try {
              y.stateNode.nodeValue = f ? "" : y.memoizedProps;
            } catch (k) {
              J(e, e.return, k);
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
      Oe(t, e), He(e), r & 4 && Zs(e);
      break;
    case 21:
      break;
    default:
      Oe(
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
          if (oc(n)) {
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
          var o = Xs(e);
          Go(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = Xs(e);
          Ho(e, a, i);
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
function Mf(e, t, n) {
  P = e, ac(e);
}
function ac(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Nr;
      if (!i) {
        var a = l.alternate, s = a !== null && a.memoizedState !== null || pe;
        a = Nr;
        var f = pe;
        if (Nr = i, (pe = s) && !f) for (P = l; P !== null; ) i = P, s = i.child, i.tag === 22 && i.memoizedState !== null ? bs(l) : s !== null ? (s.return = i, P = s) : bs(l);
        for (; o !== null; ) P = o, ac(o), o = o.sibling;
        P = l, Nr = a, pe = f;
      }
      Js(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, P = o) : Js(e);
  }
}
function Js(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || kl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : $e(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Fs(t, o, r);
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
              Fs(t, i, n);
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
        pe || t.flags & 512 && Bo(t);
      } catch (m) {
        J(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function qs(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function bs(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            kl(4, t);
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
            Bo(t);
          } catch (s) {
            J(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Bo(t);
          } catch (s) {
            J(t, i, s);
          }
      }
    } catch (s) {
      J(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, P = a;
      break;
    }
    P = t.return;
  }
}
var zf = Math.ceil, sl = ot.ReactCurrentDispatcher, Fi = ot.ReactCurrentOwner, Re = ot.ReactCurrentBatchConfig, O = 0, se = null, te = null, ue = 0, Ce = 0, nn = Et(0), le = 0, rr = null, Ut = 0, _l = 0, Di = 0, $n = null, xe = null, Oi = 0, yn = 1 / 0, Ze = null, al = !1, Ko = null, vt = null, jr = !1, ft = null, ul = 0, Un = 0, Yo = null, $r = -1, Ur = 0;
function ge() {
  return O & 6 ? b() : $r !== -1 ? $r : $r = b();
}
function wt(e) {
  return e.mode & 1 ? O & 2 && ue !== 0 ? ue & -ue : yf.transition !== null ? (Ur === 0 && (Ur = Ga()), Ur) : (e = A, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ba(e.type)), e) : 1;
}
function We(e, t, n, r) {
  if (50 < Un) throw Un = 0, Yo = null, Error(S(185));
  or(e, n, r), (!(O & 2) || e !== se) && (e === se && (!(O & 2) && (_l |= n), le === 4 && ct(e, ue)), Ee(e, r), n === 1 && O === 0 && !(t.mode & 1) && (yn = b() + 500, wl && Ct()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  hd(e, t);
  var r = Gr(e, e === se ? ue : 0);
  if (r === 0) n !== null && as(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && as(n), t === 1) e.tag === 0 ? hf(ea.bind(null, e)) : vu(ea.bind(null, e)), df(function() {
      !(O & 6) && Ct();
    }), n = null;
    else {
      switch (Ka(r)) {
        case 1:
          n = ui;
          break;
        case 4:
          n = Ba;
          break;
        case 16:
          n = Hr;
          break;
        case 536870912:
          n = Ha;
          break;
        default:
          n = Hr;
      }
      n = yc(n, uc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function uc(e, t) {
  if ($r = -1, Ur = 0, O & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = Gr(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = cl(e, r);
  else {
    t = r;
    var l = O;
    O |= 2;
    var o = dc();
    (se !== e || ue !== t) && (Ze = null, yn = b() + 500, Ft(e, t));
    do
      try {
        Df();
        break;
      } catch (a) {
        cc(e, a);
      }
    while (!0);
    ki(), sl.current = o, O = l, te !== null ? t = 0 : (se = null, ue = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (l = So(e), l !== 0 && (r = l, t = Xo(e, l))), t === 1) throw n = rr, Ft(e, 0), ct(e, r), Ee(e, b()), n;
    if (t === 6) ct(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Rf(l) && (t = cl(e, r), t === 2 && (o = So(e), o !== 0 && (r = o, t = Xo(e, o))), t === 1)) throw n = rr, Ft(e, 0), ct(e, r), Ee(e, b()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Lt(e, xe, Ze);
          break;
        case 3:
          if (ct(e, r), (r & 130023424) === r && (t = Oi + 500 - b(), 10 < t)) {
            if (Gr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ge(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Po(Lt.bind(null, e, xe, Ze), t);
            break;
          }
          Lt(e, xe, Ze);
          break;
        case 4:
          if (ct(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Qe(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = b() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Po(Lt.bind(null, e, xe, Ze), r);
            break;
          }
          Lt(e, xe, Ze);
          break;
        case 5:
          Lt(e, xe, Ze);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ee(e, b()), e.callbackNode === n ? uc.bind(null, e) : null;
}
function Xo(e, t) {
  var n = $n;
  return e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256), e = cl(e, t), e !== 2 && (t = xe, xe = n, t !== null && Zo(t)), e;
}
function Zo(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function Rf(e) {
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
function ct(e, t) {
  for (t &= ~Di, t &= ~_l, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ea(e) {
  if (O & 6) throw Error(S(327));
  un();
  var t = Gr(e, 0);
  if (!(t & 1)) return Ee(e, b()), null;
  var n = cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = So(e);
    r !== 0 && (t = r, n = Xo(e, r));
  }
  if (n === 1) throw n = rr, Ft(e, 0), ct(e, t), Ee(e, b()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Lt(e, xe, Ze), Ee(e, b()), null;
}
function Ai(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    O = n, O === 0 && (yn = b() + 500, wl && Ct());
  }
}
function Vt(e) {
  ft !== null && ft.tag === 0 && !(O & 6) && un();
  var t = O;
  O |= 1;
  var n = Re.transition, r = A;
  try {
    if (Re.transition = null, A = 1, e) return e();
  } finally {
    A = r, Re.transition = n, O = t, !(O & 6) && Ct();
  }
}
function $i() {
  Ce = nn.current, B(nn);
}
function Ft(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, cf(n)), te !== null) for (n = te.return; n !== null; ) {
    var r = n;
    switch (wi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Jr();
        break;
      case 3:
        mn(), B(ke), B(me), Ti();
        break;
      case 5:
        ji(r);
        break;
      case 4:
        mn();
        break;
      case 13:
        B(K);
        break;
      case 19:
        B(K);
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
  if (se = e, te = e = xt(e.current, null), ue = Ce = t, le = 0, rr = null, Di = _l = Ut = 0, xe = $n = null, zt !== null) {
    for (t = 0; t < zt.length; t++) if (n = zt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    zt = null;
  }
  return e;
}
function cc(e, t) {
  do {
    var n = te;
    try {
      if (ki(), Dr.current = il, ol) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ol = !1;
      }
      if ($t = 0, ie = re = Y = null, On = !1, er = 0, Fi.current = null, n === null || n.return === null) {
        le = 1, rr = t, te = null;
        break;
      }
      e: {
        var o = e, i = n.return, a = n, s = t;
        if (t = ue, a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, h = a, y = h.tag;
          if (!(h.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var w = Vs(i);
          if (w !== null) {
            w.flags &= -257, Qs(w, i, a, o, t), w.mode & 1 && Us(o, f, t), t = w, s = f;
            var x = t.updateQueue;
            if (x === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Us(o, f, t), Ui();
              break e;
            }
            s = Error(S(426));
          }
        } else if (H && a.mode & 1) {
          var E = Vs(i);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), Qs(E, i, a, o, t), xi(hn(s, a));
            break e;
          }
        }
        o = s = hn(s, a), le !== 4 && (le = 2), $n === null ? $n = [o] : $n.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var c = Ku(o, s, t);
              Rs(o, c);
              break e;
            case 1:
              a = s;
              var d = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (vt === null || !vt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Yu(o, a, t);
                Rs(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      pc(n);
    } catch (T) {
      t = T, te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function dc() {
  var e = sl.current;
  return sl.current = il, e === null ? il : e;
}
function Ui() {
  (le === 0 || le === 3 || le === 2) && (le = 4), se === null || !(Ut & 268435455) && !(_l & 268435455) || ct(se, ue);
}
function cl(e, t) {
  var n = O;
  O |= 2;
  var r = dc();
  (se !== e || ue !== t) && (Ze = null, Ft(e, t));
  do
    try {
      Ff();
      break;
    } catch (l) {
      cc(e, l);
    }
  while (!0);
  if (ki(), O = n, sl.current = r, te !== null) throw Error(S(261));
  return se = null, ue = 0, le;
}
function Ff() {
  for (; te !== null; ) fc(te);
}
function Df() {
  for (; te !== null && !id(); ) fc(te);
}
function fc(e) {
  var t = hc(e.alternate, e, Ce);
  e.memoizedProps = e.pendingProps, t === null ? pc(e) : te = t, Fi.current = null;
}
function pc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Pf(n, t), n !== null) {
        n.flags &= 32767, te = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, te = null;
        return;
      }
    } else if (n = Tf(n, t, Ce), n !== null) {
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
  var r = A, l = Re.transition;
  try {
    Re.transition = null, A = 1, Of(e, t, n, r);
  } finally {
    Re.transition = l, A = r;
  }
  return null;
}
function Of(e, t, n, r) {
  do
    un();
  while (ft !== null);
  if (O & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (yd(e, o), e === se && (te = se = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jr || (jr = !0, yc(Hr, function() {
    return un(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Re.transition, Re.transition = null;
    var i = A;
    A = 1;
    var a = O;
    O |= 4, Fi.current = null, Lf(e, n), sc(n, e), nf(jo), Kr = !!No, jo = No = null, e.current = n, Mf(n), sd(), O = a, A = i, Re.transition = o;
  } else e.current = n;
  if (jr && (jr = !1, ft = e, ul = l), o = e.pendingLanes, o === 0 && (vt = null), cd(n.stateNode), Ee(e, b()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al) throw al = !1, e = Ko, Ko = null, e;
  return ul & 1 && e.tag !== 0 && un(), o = e.pendingLanes, o & 1 ? e === Yo ? Un++ : (Un = 0, Yo = e) : Un = 0, Ct(), null;
}
function un() {
  if (ft !== null) {
    var e = Ka(ul), t = Re.transition, n = A;
    try {
      if (Re.transition = null, A = 16 > e ? 16 : e, ft === null) var r = !1;
      else {
        if (e = ft, ft = null, ul = 0, O & 6) throw Error(S(331));
        var l = O;
        for (O |= 4, P = e.current; P !== null; ) {
          var o = P, i = o.child;
          if (P.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var f = a[s];
                for (P = f; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      An(8, h, o);
                  }
                  var y = h.child;
                  if (y !== null) y.return = h, P = y;
                  else for (; P !== null; ) {
                    h = P;
                    var m = h.sibling, w = h.return;
                    if (lc(h), h === f) {
                      P = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = w, P = m;
                      break;
                    }
                    P = w;
                  }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var E = k.sibling;
                    k.sibling = null, k = E;
                  } while (k !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, P = i;
          else e: for (; P !== null; ) {
            if (o = P, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                An(9, o, o.return);
            }
            var c = o.sibling;
            if (c !== null) {
              c.return = o.return, P = c;
              break e;
            }
            P = o.return;
          }
        }
        var d = e.current;
        for (P = d; P !== null; ) {
          i = P;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, P = p;
          else e: for (i = d; P !== null; ) {
            if (a = P, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  kl(9, a);
              }
            } catch (T) {
              J(a, a.return, T);
            }
            if (a === i) {
              P = null;
              break e;
            }
            var v = a.sibling;
            if (v !== null) {
              v.return = a.return, P = v;
              break e;
            }
            P = a.return;
          }
        }
        if (O = l, Ct(), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
          Ye.onPostCommitFiberRoot(ml, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      A = n, Re.transition = t;
    }
  }
  return !1;
}
function ta(e, t, n) {
  t = hn(n, t), t = Ku(e, t, 1), e = gt(e, t, 1), t = ge(), e !== null && (or(e, 1, t), Ee(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) ta(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ta(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vt === null || !vt.has(r))) {
        e = hn(n, e), e = Yu(t, e, 1), t = gt(t, e, 1), e = ge(), t !== null && (or(t, 1, e), Ee(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Af(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ge(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ue & n) === n && (le === 4 || le === 3 && (ue & 130023424) === ue && 500 > b() - Oi ? Ft(e, 0) : Di |= n), Ee(e, t);
}
function mc(e, t) {
  t === 0 && (e.mode & 1 ? (t = gr, gr <<= 1, !(gr & 130023424) && (gr = 4194304)) : t = 1);
  var n = ge();
  e = rt(e, t), e !== null && (or(e, t, n), Ee(e, n));
}
function $f(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), mc(e, n);
}
function Uf(e, t) {
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
  r !== null && r.delete(t), mc(e, n);
}
var hc;
hc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, jf(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, H && t.flags & 1048576 && wu(t, el, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ar(e, t), e = t.pendingProps;
      var l = dn(t, me.current);
      an(t, n), l = Ii(null, t, r, e, l, n);
      var o = Li();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (o = !0, qr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ci(t), l.updater = Sl, t.stateNode = l, l._reactInternals = t, Do(t, r, e, n), t = $o(null, t, r, !0, o, n)) : (t.tag = 0, H && o && vi(t), he(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ar(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Qf(r), e = $e(r, e), l) {
          case 0:
            t = Ao(null, t, r, e, n);
            break e;
          case 1:
            t = Hs(null, t, r, e, n);
            break e;
          case 11:
            t = Ws(null, t, r, e, n);
            break e;
          case 14:
            t = Bs(null, t, r, $e(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Ao(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Hs(e, t, r, l, n);
    case 3:
      e: {
        if (qu(t), e === null) throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Cu(e, t), rl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = hn(Error(S(423)), t), t = Gs(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = hn(Error(S(424)), t), t = Gs(e, t, r, n, l);
          break e;
        } else for (Ne = yt(t.stateNode.containerInfo.firstChild), je = t, H = !0, Ve = null, n = _u(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (fn(), r === l) {
            t = lt(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Nu(t), e === null && zo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, To(r, l) ? i = null : o !== null && To(r, o) && (t.flags |= 32), Ju(e, t), he(e, t, i, n), t.child;
    case 6:
      return e === null && zo(t), null;
    case 13:
      return bu(e, t, n);
    case 4:
      return Ni(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pn(t, null, r, n) : he(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Ws(e, t, r, l, n);
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, V(tl, r._currentValue), r._currentValue = i, o !== null) if (Be(o.value, i)) {
          if (o.children === l.children && !ke.current) {
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
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ro(
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
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ro(i, n, t), i = o.sibling;
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
      return r = t.type, l = $e(r, t.pendingProps), l = $e(r.type, l), Bs(e, t, r, l, n);
    case 15:
      return Xu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Ar(e, t), t.tag = 1, _e(r) ? (e = !0, qr(t)) : e = !1, an(t, n), Gu(t, r, l), Do(t, r, l, n), $o(null, t, r, !0, e, n);
    case 19:
      return ec(e, t, n);
    case 22:
      return Zu(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function yc(e, t) {
  return Wa(e, t);
}
function Vf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ze(e, t, n, r) {
  return new Vf(e, t, n, r);
}
function Vi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Qf(e) {
  if (typeof e == "function") return Vi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ii) return 11;
    if (e === si) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return n === null ? (n = ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Vr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Vi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Gt:
      return Dt(n.children, l, o, t);
    case oi:
      i = 8, l |= 8;
      break;
    case oo:
      return e = ze(12, n, t, l | 2), e.elementType = oo, e.lanes = o, e;
    case io:
      return e = ze(13, n, t, l), e.elementType = io, e.lanes = o, e;
    case so:
      return e = ze(19, n, t, l), e.elementType = so, e.lanes = o, e;
    case Na:
      return El(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ea:
          i = 10;
          break e;
        case Ca:
          i = 9;
          break e;
        case ii:
          i = 11;
          break e;
        case si:
          i = 14;
          break e;
        case st:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = ze(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Dt(e, t, n, r) {
  return e = ze(7, e, r, t), e.lanes = n, e;
}
function El(e, t, n, r) {
  return e = ze(22, e, r, t), e.elementType = Na, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function no(e, t, n) {
  return e = ze(6, e, null, t), e.lanes = n, e;
}
function ro(e, t, n) {
  return t = ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Wf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ol(0), this.expirationTimes = Ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ol(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Qi(e, t, n, r, l, o, i, a, s) {
  return e = new Wf(e, t, n, a, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ze(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ci(o), e;
}
function Bf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function gc(e) {
  if (!e) return kt;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(S(170));
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
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return gu(e, n, t);
  }
  return t;
}
function vc(e, t, n, r, l, o, i, a, s) {
  return e = Qi(n, r, !0, e, l, o, i, a, s), e.context = gc(null), n = e.current, r = ge(), l = wt(n), o = et(r, l), o.callback = t ?? null, gt(n, o, l), e.current.lanes = l, or(e, l, r), Ee(e, r), e;
}
function Cl(e, t, n, r) {
  var l = t.current, o = ge(), i = wt(l);
  return n = gc(n), t.context === null ? t.context = n : t.pendingContext = n, t = et(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gt(l, t, i), e !== null && (We(e, l, i, o), Fr(e, l, i)), i;
}
function dl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function na(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wi(e, t) {
  na(e, t), (e = e.alternate) && na(e, t);
}
function Hf() {
  return null;
}
var wc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Bi(e) {
  this._internalRoot = e;
}
Nl.prototype.render = Bi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Cl(e, t, null, null);
};
Nl.prototype.unmount = Bi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vt(function() {
      Cl(null, e, null, null);
    }), t[nt] = null;
  }
};
function Nl(e) {
  this._internalRoot = e;
}
Nl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Za();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++) ;
    ut.splice(n, 0, e), n === 0 && qa(e);
  }
};
function Hi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function jl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ra() {
}
function Gf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = dl(i);
        o.call(f);
      };
    }
    var i = vc(t, r, e, 0, null, !1, !1, "", ra);
    return e._reactRootContainer = i, e[nt] = i.current, Xn(e.nodeType === 8 ? e.parentNode : e), Vt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var f = dl(s);
      a.call(f);
    };
  }
  var s = Qi(e, 0, !1, null, null, !1, !1, "", ra);
  return e._reactRootContainer = s, e[nt] = s.current, Xn(e.nodeType === 8 ? e.parentNode : e), Vt(function() {
    Cl(t, s, n, r);
  }), s;
}
function Tl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function() {
        var s = dl(i);
        a.call(s);
      };
    }
    Cl(t, i, e, l);
  } else i = Gf(n, t, e, l, r);
  return dl(i);
}
Ya = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 && (ci(t, n | 1), Ee(t, b()), !(O & 6) && (yn = b() + 500, Ct()));
      }
      break;
    case 13:
      Vt(function() {
        var r = rt(e, 1);
        if (r !== null) {
          var l = ge();
          We(r, e, 1, l);
        }
      }), Wi(e, 1);
  }
};
di = function(e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = ge();
      We(t, e, 134217728, n);
    }
    Wi(e, 134217728);
  }
};
Xa = function(e) {
  if (e.tag === 13) {
    var t = wt(e), n = rt(e, t);
    if (n !== null) {
      var r = ge();
      We(n, e, t, r);
    }
    Wi(e, t);
  }
};
Za = function() {
  return A;
};
Ja = function(e, t) {
  var n = A;
  try {
    return A = e, t();
  } finally {
    A = n;
  }
};
vo = function(e, t, n) {
  switch (t) {
    case "input":
      if (co(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = vl(r);
            if (!l) throw Error(S(90));
            Ta(r), co(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ia(e, n);
      break;
    case "select":
      t = n.value, t != null && rn(e, !!n.multiple, t, !1);
  }
};
Oa = Ai;
Aa = Vt;
var Kf = { usingClientEntryPoint: !1, Events: [sr, Zt, vl, Fa, Da, Ai] }, jn = { findFiberByHostInstance: Mt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Yf = { bundleType: jn.bundleType, version: jn.version, rendererPackageName: jn.rendererPackageName, rendererConfig: jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Va(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jn.findFiberByHostInstance || Hf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber) try {
    ml = Tr.inject(Yf), Ye = Tr;
  } catch {
  }
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kf;
Pe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hi(t)) throw Error(S(200));
  return Bf(e, t, null, n);
};
Pe.createRoot = function(e, t) {
  if (!Hi(e)) throw Error(S(299));
  var n = !1, r = "", l = wc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Qi(e, 1, !1, null, null, n, !1, r, l), e[nt] = t.current, Xn(e.nodeType === 8 ? e.parentNode : e), new Bi(t);
};
Pe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Va(t), e = e === null ? null : e.stateNode, e;
};
Pe.flushSync = function(e) {
  return Vt(e);
};
Pe.hydrate = function(e, t, n) {
  if (!jl(t)) throw Error(S(200));
  return Tl(null, e, t, !0, n);
};
Pe.hydrateRoot = function(e, t, n) {
  if (!Hi(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = wc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = vc(t, null, e, 1, n ?? null, l, !1, o, i), e[nt] = t.current, Xn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Nl(t);
};
Pe.render = function(e, t, n) {
  if (!jl(t)) throw Error(S(200));
  return Tl(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function(e) {
  if (!jl(e)) throw Error(S(40));
  return e._reactRootContainer ? (Vt(function() {
    Tl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[nt] = null;
    });
  }), !0) : !1;
};
Pe.unstable_batchedUpdates = Ai;
Pe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!jl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Tl(e, t, n, !1, r);
};
Pe.version = "18.3.1-next-f1338f8080-20240426";
function xc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xc);
    } catch (e) {
      console.error(e);
    }
}
xc(), xa.exports = Pe;
var ur = xa.exports, Sc, la = ur;
Sc = la.createRoot, la.hydrateRoot;
window.api = U;
const oa = async (e = 0, t = 30, n = "") => {
  const r = await U.fetchApi(
    `/meld-nexus/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}`
  );
  if (!r.ok)
    throw new Error(`Failed to fetch images: ${r.statusText}`);
  return await r.json();
}, Xf = async (e, t) => {
  const n = `/meld-nexus/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await U.fetchApi(n);
  return r.ok ? await r.json() : [];
}, Zf = async () => {
  const e = await U.fetchApi("/meld-nexus/search-suggestions");
  return e.ok ? await e.json() : [];
}, kc = async () => {
  const e = await U.fetchApi("/meld-nexus/settings");
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
    "fullscreen.show_filename": !0
  };
}, Jf = async (e, t) => {
  if (!(await U.fetchApi("/meld-nexus/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, qf = async (e, t) => {
  if (!(await U.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, bf = async (e, t = 12) => {
  const n = await U.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, ep = async (e) => {
  const t = await U.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, tp = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await U.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, np = async (e, t = !0) => {
  const n = await U.fetchApi("/meld-nexus/bulk-delete", {
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
}, _c = async (e) => {
  const t = await U.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, rp = async (e, t) => {
  const n = await U.fetchApi(
    `/meld-nexus/folders?type=${e}&path=${encodeURIComponent(t)}`
  );
  return n.ok ? await n.json() : [];
}, lp = async (e) => {
  const t = await U.fetchApi("/meld-nexus/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, op = async () => {
  if (!(await U.fetchApi("/meld-nexus/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, ip = async () => {
  const e = await U.fetchApi("/meld-nexus/favorites");
  return e.ok ? await e.json() : [];
}, sp = async (e, t) => {
  if (!(await U.fetchApi("/meld-nexus/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, ia = async (e) => {
  if (!(await U.fetchApi("/meld-nexus/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, ap = async (e, t) => {
  if (!(await U.fetchApi("/meld-nexus/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, up = async () => {
  const e = await U.fetchApi("/meld-nexus/tags");
  return e.ok ? await e.json() : [];
}, cp = async (e) => {
  const t = await U.fetchApi("/meld-nexus/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, dp = async (e) => {
  if (!(await U.fetchApi(`/meld-nexus/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, fp = async (e) => {
  const t = await U.fetchApi(`/meld-nexus/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, pp = async (e) => {
  const t = await U.fetchApi(`/meld-nexus/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Ec = { exports: {} }, Pl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mp = N, hp = Symbol.for("react.element"), yp = Symbol.for("react.fragment"), gp = Object.prototype.hasOwnProperty, vp = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, wp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) gp.call(t, r) && !wp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: hp, type: e, key: o, ref: i, props: l, _owner: vp.current };
}
Pl.Fragment = yp;
Pl.jsx = Cc;
Pl.jsxs = Cc;
Ec.exports = Pl;
var u = Ec.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xp = {
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
const Sp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), $ = (e, t) => {
  const n = N.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: a = "",
      children: s,
      ...f
    }, h) => N.createElement(
      "svg",
      {
        ref: h,
        ...xp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(o) * 24 / Number(l) : o,
        className: ["lucide", `lucide-${Sp(e)}`, a].join(" "),
        ...f
      },
      [
        ...t.map(([y, m]) => N.createElement(y, m)),
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
const kp = $("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = $("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = $("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ep = $("Box", [
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
const Cp = $("Calendar", [
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
const Np = $("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = $("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = $("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = $("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tp = $("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = $("Download", [
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
const aa = $("Folder", [
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
const Ip = $("Maximize", [
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
const Lp = $("Minimize", [
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
const Mp = $("MoreVertical", [
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
const zp = $("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = $("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = $("PlusCircle", [
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
const Dp = $("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = $("RefreshCw", [
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
const fl = $("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = $("Settings", [
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
const Ap = $("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = $("Star", [
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
const Ki = $("Tag", [
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
const Yi = $("Trash2", [
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
const $p = $("Type", [
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
const Up = $("Upload", [
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
const Nt = $("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let pl = !1;
const Vp = (e) => {
  pl = e, pl && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, Qp = (...e) => {
  pl && console.log("[Meld-Flow]", ...e);
}, Wp = (...e) => {
  pl && console.warn("[Meld-Flow]", ...e);
}, Bp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, ye = {
  log: Qp,
  warn: Wp,
  error: Bp,
  init: Vp
}, Hp = {
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
    "fullscreen.show_filename": !0
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
function Gp(e, t) {
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
const jc = N.createContext(void 0), Kp = ({
  children: e
}) => {
  const [t, n] = N.useReducer(Gp, Hp), r = N.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const s = await oa(
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
  }, [t.pagination.limit, t.searchQuery]), l = N.useCallback(async () => {
    if (!(t.isLoading || !t.pagination.hasMore)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        const s = t.images.length, f = await oa(
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
  ]), o = N.useCallback(async () => {
    try {
      const s = await ip();
      n({ type: "SET_FAVORITES", payload: s });
    } catch (s) {
      ye.error("Failed to load favorites", s);
    }
  }, []), i = N.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const s = Array.from(t.selectedIds), f = `Are you sure you want to delete the selected ${s.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(f)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await np(s, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (h) {
        n({
          type: "SET_ERROR",
          payload: h instanceof Error ? h.message : String(h)
        });
      }
    }
  }, [t.selectedIds, r]), a = N.useCallback(
    async (s, f) => {
      try {
        await Jf(s, f), n({ type: "SET_SETTINGS", payload: { [s]: f } });
      } catch (h) {
        n({
          type: "SET_ERROR",
          payload: h instanceof Error ? h.message : String(h)
        });
      }
    },
    []
  );
  return N.useEffect(() => {
    (async () => {
      try {
        const f = await kc();
        n({ type: "SET_SETTINGS", payload: f });
      } catch (f) {
        ye.error("Failed to load settings", f);
      }
    })();
  }, []), N.useEffect(() => {
    o();
  }, [o]), N.useEffect(() => {
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
  }, [r, t.scanStatus.progress.total]), N.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ u.jsx(
    jc.Provider,
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
}, jt = () => {
  const e = N.useContext(jc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Yp = () => {
  const { state: e, dispatch: t, deleteSelected: n } = jt(), r = e.selectedIds.size;
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
            Yi,
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
          /* @__PURE__ */ u.jsx(Nt, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, Xp = ({ image: e }) => {
  const { state: t, dispatch: n } = jt(), r = t.selectedIds.has(e.id), [l, o] = N.useState(null), [i, a] = N.useState(!1), [s, f] = N.useState(null), [h, y] = N.useState(!1), m = N.useRef(null), w = async (g, R, M = !1) => {
    try {
      await navigator.clipboard.writeText(g), M ? (y(!0), setTimeout(() => y(!1), 2e3)) : (f(R), setTimeout(() => f(null), 2e3));
    } catch (Q) {
      console.error("Failed to copy text: ", Q);
    }
  };
  N.useEffect(() => {
    const g = (R) => {
      m.current && !m.current.contains(R.target) && a(!1);
    };
    return i && document.addEventListener("mousedown", g), () => {
      document.removeEventListener("mousedown", g);
    };
  }, [i]);
  const x = (g, R = 0) => {
    if (R >= 5) return [];
    const M = g.parent_id;
    if (!M && !g.parent_filename) return [];
    const Q = M ? t.images.find((C) => C.id === M) : null;
    let Z = null;
    if (Q ? Z = `/api/view?filename=${encodeURIComponent(Q.filename)}&type=${Q.type || "output"}${Q.subfolder ? `&subfolder=${encodeURIComponent(Q.subfolder)}` : ""}` : M && g.parent_filename && (Z = `/api/view?filename=${encodeURIComponent(g.parent_filename)}&type=${g.parent_type || "output"}${g.parent_subfolder ? `&subfolder=${encodeURIComponent(g.parent_subfolder)}` : ""}`), !Z && !Q) return [];
    const _ = {
      id: M || null,
      imgSrc: Z
    };
    return Q ? [_, ...x(Q, R + 1)] : [_];
  }, k = x(e), E = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, c = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, d = (g) => {
    g.shiftKey ? (g.preventDefault(), g.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : g.ctrlKey || g.metaKey || t.selectedIds.size > 0 ? (g.preventDefault(), g.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, p = (g) => {
    g.shiftKey ? (g.preventDefault(), g.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, v = (g) => {
    (g.shiftKey || g.ctrlKey || g.metaKey || t.selectedIds.size > 0) && g.preventDefault();
  }, T = (g) => {
    (g.key === "Enter" || g.key === " ") && (g.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, I = async () => {
    try {
      const g = await fp(e.id);
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
  }, L = async () => {
    try {
      const g = await pp(e.id), R = "MeldUnifiedLoader", M = window.app, Z = window.LiteGraph.createNode(R);
      if (!Z) {
        console.error(`Node type ${R} not found.`), alert(
          `Node type ${R} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const _ = {
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
      if (Z.widgets) {
        for (const [ne, j] of Object.entries(_)) {
          const z = g[ne];
          if (z != null) {
            const F = Z.widgets.find(
              (G) => G.name === j
            );
            F && (F.value = z);
          }
        }
        const ee = Z.widgets.find(
          (ne) => ne.name === "control_after_generate"
        );
        ee && (ee.value = "fixed");
      }
      const C = M.canvas.ds.offset, q = M.canvas.ds.scale;
      Z.pos = [(-C[0] + 400) / q, (-C[1] + 300) / q], M.graph.add(Z), M.canvas.selectNode(Z), M.canvas.centerOnNode(Z);
    } catch (g) {
      console.error("Error adding Unified Loader:", g), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: p,
      onMouseDown: v,
      onKeyDown: T,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ u.jsx(
          "img",
          {
            src: c,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: v,
            onClick: (g) => {
              g.stopPropagation(), d(g);
            }
          }
        ) }),
        /* @__PURE__ */ u.jsxs("div", { className: "meld-image-card__details", children: [
          t.settings["sidebar.show_filename"] && /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__filename", children: E }),
          t.settings["gallery.show_parent_image"] && k.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ u.jsx("div", { className: "meld-lineage-thumbs", children: k.map(
              (g, R) => g.imgSrc && /* @__PURE__ */ u.jsx(
                "img",
                {
                  src: g.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  onClick: (M) => {
                    M.stopPropagation(), n({
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
                      g.stopPropagation(), w(e.model_name || "-", "Model");
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
                      g.stopPropagation(), w(
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
                      g.stopPropagation(), w(
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
            /* @__PURE__ */ u.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((g, R) => /* @__PURE__ */ u.jsx("span", { className: "meld-image-card__tag", children: g }, `${g}-${R}`)) : /* @__PURE__ */ u.jsx(
              "span",
              {
                style: {
                  color: "var(--meld-text-secondary)"
                },
                children: "-"
              }
            ) })
          ] })
        ] }),
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
              children: /* @__PURE__ */ u.jsx(Mp, { size: 16 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (g) => {
                g.stopPropagation(), L();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ u.jsx(sa, { size: 16 })
            }
          ),
          i && /* @__PURE__ */ u.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ u.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), L(), a(!1);
                },
                children: [
                  /* @__PURE__ */ u.jsx(sa, { size: 14 }),
                  /* @__PURE__ */ u.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ u.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (g) => {
                  g.stopPropagation(), I(), a(!1);
                },
                children: [
                  /* @__PURE__ */ u.jsx(Gi, { size: 14 }),
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
                  /* @__PURE__ */ u.jsx(Fp, { size: 14 }),
                  /* @__PURE__ */ u.jsx("span", { children: "Add source image" })
                ]
              }
            )
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
                            jp,
                            {
                              size: 18,
                              style: { color: "var(--meld-success-color)" }
                            }
                          ) : /* @__PURE__ */ u.jsx(
                            Tp,
                            {
                              className: "meld-prompt-popup-copy",
                              size: 18,
                              onClick: () => w(l.text, "", !0)
                            }
                          ),
                          /* @__PURE__ */ u.jsx(
                            Nt,
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
}, Zp = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = jt(), { viewerImageId: r, images: l, viewerMode: o, lineageImages: i } = e, [a, s] = N.useState(!1), [f, h] = N.useState(!1), y = N.useRef(null), m = o === "lineage" ? i : l.filter(
    (E) => E.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && E.has_children)
  ), w = (o === "lineage" && i.length > 0 ? i : l).find((E) => E.id === r), x = N.useCallback(
    (E) => {
      E && "stopPropagation" in E && E.stopPropagation();
      const c = y.current;
      c && (document.fullscreenElement ? document.exitFullscreen() : c.requestFullscreen().catch((d) => {
        console.error(
          `Error attempting to enable full-screen mode: ${d.message}`
        );
      }));
    },
    []
  );
  if (N.useEffect(() => {
    if (o !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore)
      return;
    const E = m.findIndex(
      (c) => c.id === r
    );
    E !== -1 && E >= m.length - 15 && n();
  }, [
    r,
    m.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    m
  ]), N.useEffect(() => {
    const E = (d) => {
      r !== null && (d.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : d.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : d.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (d.key === "f" || d.key === "F") && x(d));
    }, c = () => {
      s(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", E), document.addEventListener("fullscreenchange", c), () => {
      window.removeEventListener("keydown", E), document.removeEventListener("fullscreenchange", c);
    };
  }, [r, t, x]), N.useEffect(() => {
    o === "lineage" && r !== null && i.length === 0 && (h(!0), ep(r).then((E) => {
      t({ type: "SET_LINEAGE", payload: E });
    }).catch((E) => {
      console.error("Failed to fetch lineage:", E);
    }).finally(() => {
      h(!1);
    }));
  }, [o, r, i.length, t]), N.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), N.useEffect(() => {
    if (r !== null) {
      const E = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      E && E.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center"
      });
    }
  }, [r]), !w) return null;
  const k = `/api/view?filename=${encodeURIComponent(w.filename)}&type=${w.type || "output"}${w.subfolder ? `&subfolder=${encodeURIComponent(w.subfolder)}` : ""}`;
  return ur.createPortal(
    /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: y,
        className: "meld-viewer-overlay",
        style: { background: "rgba(0, 0, 0, 0.85)" },
        onClick: () => t({ type: "CLOSE_VIEWER" }),
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ u.jsxs(
          "div",
          {
            className: `meld-viewer-content ${a ? "meld-viewer-content--fullscreen" : ""}`,
            onClick: (E) => E.stopPropagation(),
            children: [
              (!a && e.settings["viewer.show_filename"] || a && e.settings["fullscreen.show_filename"]) && /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-filename", children: w.filename }) }),
              /* @__PURE__ */ u.jsxs("div", { className: "meld-viewer-actions", children: [
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn",
                    onClick: x,
                    type: "button",
                    title: a ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                    children: a ? /* @__PURE__ */ u.jsx(Lp, { size: 20 }) : /* @__PURE__ */ u.jsx(Ip, { size: 20 })
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                    onClick: () => t({ type: "CLOSE_VIEWER" }),
                    type: "button",
                    title: "Close (Esc)",
                    children: /* @__PURE__ */ u.jsx(Nt, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--prev",
                  onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                  type: "button",
                  children: /* @__PURE__ */ u.jsx(Jo, { size: 32 })
                }
              ),
              /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-image-container", children: /* @__PURE__ */ u.jsx(
                "img",
                {
                  src: k,
                  alt: w.filename,
                  className: "meld-viewer-image"
                }
              ) }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--next",
                  onClick: () => t({ type: "NEXT_IMAGE" }),
                  type: "button",
                  children: /* @__PURE__ */ u.jsx(Nc, { size: 32 })
                }
              ),
              !a && /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ u.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                f ? /* @__PURE__ */ u.jsx(
                  "div",
                  {
                    style: {
                      padding: "10px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "Loading lineage..."
                  }
                ) : m.map((E, c) => {
                  const d = E.id === r, p = typeof w.parent_id == "number" && w.parent_id === E.id, v = typeof E.parent_id == "number" && E.parent_id === w.id, T = `/api/view?filename=${encodeURIComponent(E.filename)}&type=${E.type || "output"}${E.subfolder ? `&subfolder=${encodeURIComponent(E.subfolder)}` : ""}`;
                  return /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: "meld-viewer-thumbnail-wrapper",
                      children: [
                        o === "lineage" && c > 0 && /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-lineage-connector", children: /* @__PURE__ */ u.jsx(Jo, { size: 16 }) }),
                        /* @__PURE__ */ u.jsxs(
                          "div",
                          {
                            className: `meld-viewer-thumbnail ${d ? "meld-viewer-thumbnail--active" : ""} ${p ? "meld-viewer-thumbnail--parent" : ""} ${v ? "meld-viewer-thumbnail--child" : ""}`,
                            onClick: () => t({
                              type: "OPEN_VIEWER",
                              payload: { id: E.id, mode: o }
                            }),
                            children: [
                              /* @__PURE__ */ u.jsx("img", { src: T, alt: E.filename }),
                              (p || v) && /* @__PURE__ */ u.jsx(
                                "div",
                                {
                                  className: `meld-viewer-thumbnail-relation-icon ${p ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
                                  children: p ? /* @__PURE__ */ u.jsx(_p, { size: 12 }) : /* @__PURE__ */ u.jsx(kp, { size: 12 })
                                }
                              ),
                              /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-thumbnail-label-v2", children: d ? "Current" : p ? "Source" : v ? "Derivative" : "" })
                            ]
                          }
                        )
                      ]
                    },
                    E.id
                  );
                }),
                o === "gallery" && e.isLoading && /* @__PURE__ */ u.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ u.jsx(Gi, { className: "animate-spin", size: 20 }) })
              ] }) })
            ]
          }
        )
      }
    ),
    document.body
  );
}, Jp = () => {
  const { state: e, dispatch: t } = jt(), { scanStatus: n } = e, [r, l] = N.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0
  }), [o, i] = N.useState([]), [a, s] = N.useState(!1), f = N.useCallback(async () => {
    if (r.type !== "custom") {
      s(!0);
      try {
        const c = await rp(r.type, r.subfolder);
        i(c);
      } catch (c) {
        console.error("Failed to load folders:", c);
      } finally {
        s(!1);
      }
    }
  }, [r.type, r.subfolder]);
  N.useEffect(() => {
    f();
  }, [f]);
  const h = async () => {
    try {
      await lp(r), t({
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
      await op(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (c) {
      console.error("Failed to cancel scan:", c);
    }
  }, m = (c) => {
    const d = r.subfolder ? `${r.subfolder}/${c}` : c;
    l({ ...r, subfolder: d });
  }, w = () => {
    const c = r.subfolder.split("/");
    c.pop(), l({ ...r, subfolder: c.join("/") });
  }, x = () => {
    n.isFinished && t({ type: "SET_SCAN_STATUS", payload: { isFinished: !1 } }), t({ type: "CLOSE_MODAL" });
  }, k = n.progress.phase === "linking", E = k ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return ur.createPortal(
    /* @__PURE__ */ u.jsx("div", { className: "meld-modal-overlay", onClick: x, children: /* @__PURE__ */ u.jsxs(
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
                onClick: x,
                children: /* @__PURE__ */ u.jsx(Nt, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "meld-modal-body", children: n.isRunning ? /* @__PURE__ */ u.jsxs("div", { className: "meld-scan-progress", children: [
            /* @__PURE__ */ u.jsx("div", { className: "meld-scan-status-text", children: n.shouldCancel ? /* @__PURE__ */ u.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : k ? /* @__PURE__ */ u.jsx("span", { children: "Linking parent images..." }) : /* @__PURE__ */ u.jsx("span", { children: "Scanning images..." }) }),
            /* @__PURE__ */ u.jsx("div", { className: "meld-progress-container", children: /* @__PURE__ */ u.jsx(
              "div",
              {
                className: "meld-progress-bar",
                style: { width: `${E}%` }
              }
            ) }),
            /* @__PURE__ */ u.jsx("div", { className: "meld-progress-stats", children: k ? /* @__PURE__ */ u.jsxs("span", { children: [
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
                  onClick: x,
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
                    /* @__PURE__ */ u.jsx(Ap, { size: 16 }),
                    "Stop Scan"
                  ]
                }
              )
            ] })
          ] }) : n.isFinished ? /* @__PURE__ */ u.jsxs("div", { className: "meld-scan-finished", children: [
            /* @__PURE__ */ u.jsx("div", { className: "meld-finished-icon", children: /* @__PURE__ */ u.jsx(Np, { size: 64, color: "var(--meld-success)" }) }),
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
                onClick: x,
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
                    /* @__PURE__ */ u.jsx(Rp, { size: 16 }),
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
                      onClick: w,
                      children: [
                        /* @__PURE__ */ u.jsx(Jo, { size: 16 }),
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
                      /* @__PURE__ */ u.jsx(aa, { size: 16 }),
                      /* @__PURE__ */ u.jsx("span", { children: c }),
                      /* @__PURE__ */ u.jsx(Nc, { size: 14 })
                    ]
                  },
                  c
                )) })
              ] }),
              r.type === "custom" && /* @__PURE__ */ u.jsxs("div", { className: "meld-browser-info", children: [
                /* @__PURE__ */ u.jsx(aa, { size: 48 }),
                /* @__PURE__ */ u.jsx("p", { children: "Please enter an absolute path in the sidebar." }),
                /* @__PURE__ */ u.jsx(
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
}, qp = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = jt(), [l, o] = N.useState([]), [i, a] = N.useState(!0), [s, f] = N.useState(!1), h = t.images.find((c) => c.id === e), y = N.useCallback(async () => {
    a(!0);
    try {
      const c = await bf(e);
      o(c);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      a(!1);
    }
  }, [e]);
  N.useEffect(() => {
    y();
  }, [y]);
  const m = async (c) => {
    try {
      await qf(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, w = async (c) => {
    a(!0);
    try {
      const d = await tp(c), { id: p } = await _c({
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
  }, x = (c) => {
    c.preventDefault(), c.stopPropagation(), f(!1);
    const d = c.dataTransfer.files[0];
    d != null && d.type.startsWith("image/") && w(d);
  };
  if (!h) return null;
  const k = l.filter((c) => c.is_source_match), E = l.filter((c) => !c.is_source_match);
  return ur.createPortal(
    /* @__PURE__ */ u.jsx(
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
                children: /* @__PURE__ */ u.jsx(Nt, { size: 20 })
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
                onDrop: x,
                children: [
                  /* @__PURE__ */ u.jsx(Up, { size: 32 }),
                  /* @__PURE__ */ u.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            i ? /* @__PURE__ */ u.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ u.jsxs("div", { className: "meld-suggestions-container", children: [
              k.length > 0 && /* @__PURE__ */ u.jsxs("section", { children: [
                /* @__PURE__ */ u.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ u.jsx("div", { className: "meld-suggestion-grid", children: k.map((c) => /* @__PURE__ */ u.jsxs(
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
                E.length > 0 ? /* @__PURE__ */ u.jsx("div", { className: "meld-suggestion-grid", children: E.map((c) => /* @__PURE__ */ u.jsxs(
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
    ),
    document.body
  );
}, bp = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = jt(), [r, l] = N.useState(e.searchQuery), [o, i] = N.useState([]), [a, s] = N.useState(!1), [f, h] = N.useState([]), [y, m] = N.useState(-1), [w, x] = N.useState(!1), [k, E] = N.useState(null), c = N.useRef(null);
  N.useEffect(() => {
    if (k) {
      const _ = setTimeout(() => E(null), 3e3);
      return () => clearTimeout(_);
    }
  }, [k]);
  const d = N.useRef(null), p = N.useRef(e.searchQuery);
  N.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    !r && !e.searchQuery ? Zf().then((_) => {
      h(_);
    }) : h([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), N.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), N.useEffect(() => {
    var _;
    (_ = c.current) == null || _.focus();
  }, []);
  const v = N.useCallback(
    (_, C = !0) => {
      p.current !== _ && (t({ type: "SET_SEARCH_QUERY", payload: _ }), C && s(!1), p.current = _);
    },
    [t]
  );
  N.useEffect(() => {
    const _ = setTimeout(async () => {
      if (r === p.current)
        return;
      if (e.settings["search.realtime_search"] && v(r, !1), !e.settings["search.input_suggest"]) {
        i([]), s(!1);
        return;
      }
      const C = r.split(/\s+/), q = C[C.length - 1];
      if (q) {
        const ee = q.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (ee) {
          const ne = ee[1].toLowerCase(), j = ee[2], z = await Xf(j, ne);
          i(z), s(z.length > 0), m(-1);
        } else
          i([]), s(!1);
      } else
        i([]), s(!1);
    }, 300);
    return () => clearTimeout(_);
  }, [
    r,
    e.settings["search.realtime_search"],
    e.settings["search.input_suggest"],
    v
  ]);
  const T = (_) => {
    _.key === "Enter" ? v(r) : _.key === "Tab" ? a && y >= 0 && (I(o[y]), _.preventDefault()) : _.key === "ArrowDown" ? a && (m((C) => Math.min(C + 1, o.length - 1)), _.preventDefault()) : _.key === "ArrowUp" ? a && (m((C) => Math.max(C - 1, -1)), _.preventDefault()) : _.key === "Escape" && s(!1);
  }, I = (_) => {
    var j;
    const C = r.split(/\s+/);
    C.pop();
    const ee = ["date", "after", "before"].includes(_.type) ? _.value : `"${_.value}"`, ne = `${[...C, `${_.type}:${ee}`].join(" ").trim()} `;
    l(ne), v(ne), i([]), s(!1), (j = c.current) == null || j.focus();
  }, L = () => {
    l(""), v("");
  }, g = async (_, C, q) => {
    _.stopPropagation();
    const ee = `Are you sure you want to delete the favorite "${q}"?`;
    if (window.confirm(ee))
      try {
        await ia(C), await n();
      } catch (ne) {
        ye.error("Failed to delete favorite", ne);
      }
  }, R = async (_, C, q) => {
    _.stopPropagation();
    const ee = window.prompt(
      "Enter a new name for this favorite:",
      q
    );
    if (!(ee === null || ee === q))
      try {
        await ap(C, ee || q), await n();
      } catch (ne) {
        ye.error("Failed to rename favorite", ne);
      }
  }, M = (_, C) => {
    const ee = ["date", "after", "before"].includes(_) ? C : `"${C}"`, ne = `${_}:${ee}`;
    l(ne), v(ne);
  }, Q = async () => {
    if (!e.searchQuery || w) return;
    if (e.favorites.some(
      (C) => C.query === e.searchQuery
    )) {
      const C = e.favorites.find((q) => q.query === e.searchQuery);
      if (C) {
        x(!0);
        try {
          await ia(C.id), await n(), E("Favorite removed.");
        } catch (q) {
          console.error("Failed to delete favorite:", q);
        } finally {
          x(!1);
        }
      }
      return;
    }
    x(!0);
    try {
      await sp(e.searchQuery, e.searchQuery), await n(), E(
        "Favorite added! You can select favorites when the search query is empty."
      );
    } catch (C) {
      console.error("Failed to save favorite:", C);
    } finally {
      x(!1);
    }
  }, Z = (_) => {
    switch (_) {
      case "tag":
        return /* @__PURE__ */ u.jsx(Ki, { size: 12 });
      case "model":
        return /* @__PURE__ */ u.jsx(Ep, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ u.jsx($p, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ u.jsx(Cp, { size: 12 });
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
              k && /* @__PURE__ */ u.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "-45px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "var(--comfy-menu-bg, #333)",
                    color: "var(--meld-text-color)",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    zIndex: 1e3,
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 12px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
                    pointerEvents: "none",
                    fontWeight: "bold",
                    border: "1px solid var(--comfy-menu-border, #444)",
                    animation: "meld-fade-in 0.3s ease-out"
                  },
                  children: k
                }
              ),
              /* @__PURE__ */ u.jsxs(
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
                    /* @__PURE__ */ u.jsx(
                      fl,
                      {
                        size: 18,
                        color: "var(--meld-text-secondary)",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ u.jsx(
                      "input",
                      {
                        ref: c,
                        type: "text",
                        value: r,
                        onChange: (_) => l(_.target.value),
                        onKeyDown: T,
                        onBlur: () => setTimeout(() => s(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const _ = r.split(/\s+/), C = _[_.length - 1];
                          C != null && C.match(/^(pos|neg|model|date|after|before):/i) && s(!0);
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
                    e.searchQuery && /* @__PURE__ */ u.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Q,
                        disabled: w,
                        title: e.favorites.some((_) => _.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                        children: /* @__PURE__ */ u.jsx(
                          ua,
                          {
                            size: 16,
                            color: e.favorites.some((_) => _.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((_) => _.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ u.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: L,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ u.jsx(Nt, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              a && o.length > 0 && /* @__PURE__ */ u.jsx(
                "div",
                {
                  ref: d,
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
                  children: o.map((_, C) => /* @__PURE__ */ u.jsx(
                    "div",
                    {
                      onMouseDown: (q) => {
                        q.preventDefault(), I(_);
                      },
                      onMouseEnter: () => m(C),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: C === y ? "var(--comfy-menu-bg, #333)" : "transparent",
                        borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
                      },
                      children: /* @__PURE__ */ u.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ u.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-secondary)",
                                  display: "flex"
                                },
                                children: Z(_.type)
                              }
                            ),
                            /* @__PURE__ */ u.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--comfy-input-text-active, #3b82f6)",
                                  fontSize: "11px",
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  width: "45px"
                                },
                                children: _.type
                              }
                            ),
                            /* @__PURE__ */ u.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-color)",
                                  fontSize: "14px"
                                },
                                children: _.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${_.type}:${_.value}`
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
            children: f.map((_) => /* @__PURE__ */ u.jsxs(
              "button",
              {
                type: "button",
                onClick: () => M(_.type, _.value),
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
                onMouseEnter: (C) => {
                  C.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", C.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", C.currentTarget.style.color = "var(--meld-text-color)";
                },
                onMouseLeave: (C) => {
                  C.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", C.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", C.currentTarget.style.color = "var(--meld-text-color)";
                },
                children: [
                  /* @__PURE__ */ u.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: Z(_.type)
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    "span",
                    {
                      style: {
                        color: "var(--comfy-input-text-active, #3b82f6)",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontSize: "10px"
                      },
                      children: _.type
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
                      children: _.value
                    }
                  )
                ]
              },
              `${_.type}:${_.value}`
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
              borderTop: "1px solid var(--comfy-menu-border, #333)",
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
                    color: "var(--meld-text-secondary)",
                    fontSize: "11px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    paddingLeft: "4px",
                    marginBottom: "4px"
                  },
                  children: [
                    /* @__PURE__ */ u.jsx(ua, { size: 12, fill: "var(--meld-text-secondary)" }),
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
                  children: e.favorites.map((_) => /* @__PURE__ */ u.jsxs(
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
                        l(_.query), v(_.query);
                      },
                      onMouseEnter: (C) => {
                        C.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", C.currentTarget.style.borderColor = "var(--meld-accent-color)", C.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (C) => {
                        C.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", C.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", C.currentTarget.style.color = "var(--meld-text-color)";
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
                                  children: _.name
                                }
                              ),
                              _.name !== _.query && /* @__PURE__ */ u.jsx(
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
                                  children: _.query
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
                                  onClick: (C) => {
                                    C.stopPropagation(), R(C, _.id, _.name);
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
                                  onMouseEnter: (C) => {
                                    C.currentTarget.style.color = "var(--meld-accent-color)", C.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (C) => {
                                    C.currentTarget.style.color = "var(--meld-text-secondary)", C.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ u.jsx(zp, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ u.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (C) => {
                                    C.stopPropagation(), g(C, _.id, _.name);
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
                                  onMouseEnter: (C) => {
                                    C.currentTarget.style.color = "var(--meld-danger-color)", C.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (C) => {
                                    C.currentTarget.style.color = "var(--meld-text-secondary)", C.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ u.jsx(Yi, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    _.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, em = () => {
  const { state: e, dispatch: t, updateSetting: n } = jt(), [r, l] = N.useState("General"), o = [
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
      key: "fullscreen.show_filename",
      label: "Show Filename",
      description: "Display the filename in fullscreen mode.",
      type: "boolean",
      category: "Full Screen"
    }
  ], i = (s, f) => {
    n(s, !f);
  }, a = o.filter(
    (s) => s.category === r
  );
  return ur.createPortal(
    /* @__PURE__ */ u.jsx(
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
                    children: /* @__PURE__ */ u.jsx(Nt, { size: 20 })
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
                ),
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${r === "View" ? "active" : ""}`,
                    onClick: () => l("View"),
                    children: "View"
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${r === "Full Screen" ? "active" : ""}`,
                    onClick: () => l("Full Screen"),
                    children: "Full Screen"
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
    ),
    document.body
  );
}, tm = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = N.useState([]), [l, o] = N.useState(!0), [i, a] = N.useState(""), [s, f] = N.useState(""), [h, y] = N.useState(!1), m = N.useCallback(async () => {
    o(!0);
    try {
      const c = await up();
      r(c);
    } catch (c) {
      console.error("Failed to fetch tags:", c);
    } finally {
      o(!1);
    }
  }, []);
  N.useEffect(() => {
    m();
  }, [m]);
  const w = async (c) => {
    if (c.preventDefault(), !(!s.trim() || h)) {
      y(!0);
      try {
        await cp(s.trim()), f(""), await m();
      } catch (d) {
        console.error("Failed to add tag:", d);
      } finally {
        y(!1);
      }
    }
  }, x = async (c, d) => {
    if (confirm(`Are you sure you want to delete tag "${d}"?`))
      try {
        await dp(c), await m();
      } catch (p) {
        console.error("Failed to delete tag:", p);
      }
  }, k = (c) => {
    t(`tag:${c}`);
  }, E = N.useMemo(() => n.filter(
    (c) => c.name.toLowerCase().includes(i.toLowerCase())
  ), [n, i]);
  return /* @__PURE__ */ u.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ u.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ u.jsx(Ki, { size: 16 }),
        /* @__PURE__ */ u.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ u.jsx(Nt, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ u.jsxs("form", { className: "meld-tag-add-form", onSubmit: w, children: [
        /* @__PURE__ */ u.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: s,
            onChange: (c) => f(c.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ u.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !s.trim() || h,
            children: [
              /* @__PURE__ */ u.jsx(Dp, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ u.jsx(fl, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ u.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: i,
            onChange: (c) => a(c.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ u.jsx("div", { className: "meld-tag-list", children: E.length === 0 ? /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : E.map((c) => /* @__PURE__ */ u.jsxs("div", { className: "meld-tag-item", children: [
        /* @__PURE__ */ u.jsx("span", { className: "meld-tag-item__name", children: c.name }),
        /* @__PURE__ */ u.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => k(c.name),
              children: /* @__PURE__ */ u.jsx(fl, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => x(c.id, c.name),
              children: /* @__PURE__ */ u.jsx(Yi, { size: 14 })
            }
          )
        ] })
      ] }, c.id)) })
    ] })
  ] });
}, nm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = jt(), [l, o] = N.useState("gallery"), i = e.searchQuery.trim() !== "", a = N.useRef(null), s = e.images.filter(
    (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
  );
  return N.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && s.length === 0 && (ye.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    s.length,
    r
  ]), ye.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: s.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), N.useEffect(() => {
    const f = new IntersectionObserver(
      (y) => {
        y[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (ye.log(
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
                    onClick: () => o(l === "search" ? "gallery" : "search"),
                    style: {
                      background: "none",
                      border: "none",
                      color: i ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: i ? "bold" : "normal"
                    },
                    title: "Search",
                    children: /* @__PURE__ */ u.jsx(fl, { size: 14 })
                  }
                ),
                /* @__PURE__ */ u.jsx(
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
                    children: /* @__PURE__ */ u.jsx(Ki, { size: 14 })
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
                      color: "var(--meld-text-secondary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center"
                    },
                    title: "Import",
                    children: /* @__PURE__ */ u.jsx(Pp, { size: 14 })
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
                      color: "var(--meld-text-secondary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center"
                    },
                    disabled: e.isLoading,
                    title: "Refresh",
                    children: /* @__PURE__ */ u.jsx(
                      Gi,
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
                      color: "var(--meld-text-secondary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center"
                    },
                    title: "Settings",
                    children: /* @__PURE__ */ u.jsx(Op, { size: 14 })
                  }
                )
              ]
            }
          ),
          l === "search" && /* @__PURE__ */ u.jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ u.jsx(bp, {}) })
        ]
      }
    ),
    e.error && /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__error", children: e.error }),
    l === "tags" ? /* @__PURE__ */ u.jsx(
      tm,
      {
        onClose: () => o("gallery"),
        onSearch: (f) => {
          t({ type: "SET_SEARCH_QUERY", payload: f }), o("search");
        }
      }
    ) : e.isLoading && s.length === 0 ? /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : s.length === 0 ? /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("div", { className: "meld-gallery__list", children: s.map((f) => /* @__PURE__ */ u.jsx(Xp, { image: f }, f.id)) }),
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
    /* @__PURE__ */ u.jsx(Yp, {}),
    e.viewerImageId !== null && /* @__PURE__ */ u.jsx(Zp, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ u.jsx(qp, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ u.jsx(Jp, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ u.jsx(em, {})
  ] });
};
ca.registerExtension({
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
const Il = document.createElement("link");
Il.rel = "stylesheet";
Il.type = "text/css";
Il.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(Il);
let Pr = null, Ae = null;
ca.registerExtension({
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
      const n = await kc();
      ye.init(n.dev_mode), ye.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld-Flow] Failed to fetch settings", n), ye.init(!1);
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
      }, U.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), U.addEventListener("meld-nexus-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-progress", { detail: n.detail })
        );
      }), U.addEventListener("meld-nexus-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-finished", { detail: n.detail })
        ), (r = e.ui.meldNexus) == null || r.refresh(), console.log("Meld Nexus: Import completed.");
      }), U.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await _c({
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
            ye.log("MeldNexus: render called", {
              el: n,
              galleryRoot: Pr,
              galleryContainer: Ae
            }), Ae || (ye.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), Ae = document.createElement("div"), Ae.id = "meld-flow-gallery-container", Ae.style.height = "100%", Ae.style.width = "100%", Ae.style.display = "flex", Ae.style.flexDirection = "column"), n.contains(Ae) || (ye.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(Ae)), Pr ? ye.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (ye.log("MeldNexus: Creating new gallery root"), Pr = Sc(Ae), Pr.render(
              qi.createElement(
                Kp,
                null,
                qi.createElement(nm)
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
