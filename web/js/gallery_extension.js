import { api as ee } from "/scripts/api.js";
import { app as Bc } from "/scripts/app.js";
function sm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qc = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var al = Symbol.for("react.element"), am = Symbol.for("react.portal"), om = Symbol.for("react.fragment"), im = Symbol.for("react.strict_mode"), cm = Symbol.for("react.profiler"), dm = Symbol.for("react.provider"), um = Symbol.for("react.context"), fm = Symbol.for("react.forward_ref"), mm = Symbol.for("react.suspense"), hm = Symbol.for("react.memo"), pm = Symbol.for("react.lazy"), vi = Symbol.iterator;
function gm(e) {
  return e === null || typeof e != "object" ? null : (e = vi && e[vi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Hc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Kc = Object.assign, Gc = {};
function fr(e, t, n) {
  this.props = e, this.context = t, this.refs = Gc, this.updater = n || Hc;
}
fr.prototype.isReactComponent = {};
fr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
fr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qc() {
}
qc.prototype = fr.prototype;
function ho(e, t, n) {
  this.props = e, this.context = t, this.refs = Gc, this.updater = n || Hc;
}
var po = ho.prototype = new qc();
po.constructor = ho;
Kc(po, fr.prototype);
po.isPureReactComponent = !0;
var wi = Array.isArray, Yc = Object.prototype.hasOwnProperty, go = { current: null }, Xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zc(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Yc.call(t, r) && !Xc.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: al, type: e, key: a, ref: o, props: l, _owner: go.current };
}
function ym(e, t) {
  return { $$typeof: al, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function yo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === al;
}
function vm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var xi = /\/+/g;
function $s(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? vm("" + e.key) : t.toString(36);
}
function Pl(e, t, n, r, l) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (a) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case al:
        case am:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + $s(o, 0) : r, wi(l) ? (n = "", e != null && (n = e.replace(xi, "$&/") + "/"), Pl(l, t, n, "", function(d) {
    return d;
  })) : l != null && (yo(l) && (l = ym(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(xi, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", wi(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + $s(a, i);
    o += Pl(a, t, n, c, l);
  }
  else if (c = gm(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + $s(a, i++), o += Pl(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ml(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Pl(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function wm(e) {
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
var Qe = { current: null }, Ol = { transition: null }, xm = { ReactCurrentDispatcher: Qe, ReactCurrentBatchConfig: Ol, ReactCurrentOwner: go };
function Jc() {
  throw Error("act(...) is not supported in production builds of React.");
}
le.Children = { map: ml, forEach: function(e, t, n) {
  ml(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ml(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ml(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!yo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
le.Component = fr;
le.Fragment = om;
le.Profiler = cm;
le.PureComponent = ho;
le.StrictMode = im;
le.Suspense = mm;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xm;
le.act = Jc;
le.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Kc({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = go.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) Yc.call(t, c) && !Xc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: al, type: e.type, key: l, ref: a, props: r, _owner: o };
};
le.createContext = function(e) {
  return e = { $$typeof: um, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: dm, _context: e }, e.Consumer = e;
};
le.createElement = Zc;
le.createFactory = function(e) {
  var t = Zc.bind(null, e);
  return t.type = e, t;
};
le.createRef = function() {
  return { current: null };
};
le.forwardRef = function(e) {
  return { $$typeof: fm, render: e };
};
le.isValidElement = yo;
le.lazy = function(e) {
  return { $$typeof: pm, _payload: { _status: -1, _result: e }, _init: wm };
};
le.memo = function(e, t) {
  return { $$typeof: hm, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function(e) {
  var t = Ol.transition;
  Ol.transition = {};
  try {
    e();
  } finally {
    Ol.transition = t;
  }
};
le.unstable_act = Jc;
le.useCallback = function(e, t) {
  return Qe.current.useCallback(e, t);
};
le.useContext = function(e) {
  return Qe.current.useContext(e);
};
le.useDebugValue = function() {
};
le.useDeferredValue = function(e) {
  return Qe.current.useDeferredValue(e);
};
le.useEffect = function(e, t) {
  return Qe.current.useEffect(e, t);
};
le.useId = function() {
  return Qe.current.useId();
};
le.useImperativeHandle = function(e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function(e, t) {
  return Qe.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function(e, t) {
  return Qe.current.useLayoutEffect(e, t);
};
le.useMemo = function(e, t) {
  return Qe.current.useMemo(e, t);
};
le.useReducer = function(e, t, n) {
  return Qe.current.useReducer(e, t, n);
};
le.useRef = function(e) {
  return Qe.current.useRef(e);
};
le.useState = function(e) {
  return Qe.current.useState(e);
};
le.useSyncExternalStore = function(e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function() {
  return Qe.current.useTransition();
};
le.version = "18.3.1";
Qc.exports = le;
var h = Qc.exports;
const Zt = /* @__PURE__ */ sm(h);
var ed = { exports: {} }, st = {}, td = { exports: {} }, nd = {};
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
  function t(C, R) {
    var O = C.length;
    C.push(R);
    e: for (; 0 < O; ) {
      var E = O - 1 >>> 1, z = C[E];
      if (0 < l(z, R)) C[E] = R, C[O] = z, O = E;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var R = C[0], O = C.pop();
    if (O !== R) {
      C[0] = O;
      e: for (var E = 0, z = C.length, B = z >>> 1; E < B; ) {
        var A = 2 * (E + 1) - 1, Q = C[A], J = A + 1, ie = C[J];
        if (0 > l(Q, O)) J < z && 0 > l(ie, Q) ? (C[E] = ie, C[J] = O, E = J) : (C[E] = Q, C[A] = O, E = A);
        else if (J < z && 0 > l(ie, O)) C[E] = ie, C[J] = O, E = J;
        else break e;
      }
    }
    return R;
  }
  function l(C, R) {
    var O = C.sortIndex - R.sortIndex;
    return O !== 0 ? O : C.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var o = Date, i = o.now();
    e.unstable_now = function() {
      return o.now() - i;
    };
  }
  var c = [], d = [], m = 1, y = null, v = 3, x = !1, g = !1, _ = !1, k = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var R = n(d); R !== null; ) {
      if (R.callback === null) r(d);
      else if (R.startTime <= C) r(d), R.sortIndex = R.expirationTime, t(c, R);
      else break;
      R = n(d);
    }
  }
  function w(C) {
    if (_ = !1, p(C), !g) if (n(c) !== null) g = !0, P(j);
    else {
      var R = n(d);
      R !== null && L(w, R.startTime - C);
    }
  }
  function j(C, R) {
    g = !1, _ && (_ = !1, f(M), M = -1), x = !0;
    var O = v;
    try {
      for (p(R), y = n(c); y !== null && (!(y.expirationTime > R) || C && !I()); ) {
        var E = y.callback;
        if (typeof E == "function") {
          y.callback = null, v = y.priorityLevel;
          var z = E(y.expirationTime <= R);
          R = e.unstable_now(), typeof z == "function" ? y.callback = z : y === n(c) && r(c), p(R);
        } else r(c);
        y = n(c);
      }
      if (y !== null) var B = !0;
      else {
        var A = n(d);
        A !== null && L(w, A.startTime - R), B = !1;
      }
      return B;
    } finally {
      y = null, v = O, x = !1;
    }
  }
  var S = !1, b = null, M = -1, D = 5, T = -1;
  function I() {
    return !(e.unstable_now() - T < D);
  }
  function F() {
    if (b !== null) {
      var C = e.unstable_now();
      T = C;
      var R = !0;
      try {
        R = b(!0, C);
      } finally {
        R ? V() : (S = !1, b = null);
      }
    } else S = !1;
  }
  var V;
  if (typeof u == "function") V = function() {
    u(F);
  };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(), U = N.port2;
    N.port1.onmessage = F, V = function() {
      U.postMessage(null);
    };
  } else V = function() {
    k(F, 0);
  };
  function P(C) {
    b = C, S || (S = !0, V());
  }
  function L(C, R) {
    M = k(function() {
      C(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    g || x || (g = !0, P(j));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(C) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = v;
    }
    var O = v;
    v = R;
    try {
      return C();
    } finally {
      v = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, R) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var O = v;
    v = C;
    try {
      return R();
    } finally {
      v = O;
    }
  }, e.unstable_scheduleCallback = function(C, R, O) {
    var E = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? E + O : E) : O = E, C) {
      case 1:
        var z = -1;
        break;
      case 2:
        z = 250;
        break;
      case 5:
        z = 1073741823;
        break;
      case 4:
        z = 1e4;
        break;
      default:
        z = 5e3;
    }
    return z = O + z, C = { id: m++, callback: R, priorityLevel: C, startTime: O, expirationTime: z, sortIndex: -1 }, O > E ? (C.sortIndex = O, t(d, C), n(c) === null && C === n(d) && (_ ? (f(M), M = -1) : _ = !0, L(w, O - E))) : (C.sortIndex = z, t(c, C), g || x || (g = !0, P(j))), C;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(C) {
    var R = v;
    return function() {
      var O = v;
      v = R;
      try {
        return C.apply(this, arguments);
      } finally {
        v = O;
      }
    };
  };
})(nd);
td.exports = nd;
var _m = td.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var km = h, lt = _m;
function W(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var rd = /* @__PURE__ */ new Set(), Ar = {};
function Tn(e, t) {
  lr(e, t), lr(e + "Capture", t);
}
function lr(e, t) {
  for (Ar[e] = t, e = 0; e < t.length; e++) rd.add(t[e]);
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ya = Object.prototype.hasOwnProperty, Sm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _i = {}, ki = {};
function jm(e) {
  return ya.call(ki, e) ? !0 : ya.call(_i, e) ? !1 : Sm.test(e) ? ki[e] = !0 : (_i[e] = !0, !1);
}
function bm(e, t, n, r) {
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
function Em(e, t, n, r) {
  if (t === null || typeof t > "u" || bm(e, t, n, r)) return !0;
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
function He(e, t, n, r, l, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ae[e] = new He(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ae[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ae[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ae[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ae[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ae[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ae[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ae[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ae[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vo = /[\-:]([a-z])/g;
function wo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    vo,
    wo
  );
  Ae[t] = new He(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(vo, wo);
  Ae[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(vo, wo);
  Ae[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new He("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xo(e, t, n, r) {
  var l = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Em(t, n, l, r) && (n = null), r || l === null ? jm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, hl = Symbol.for("react.element"), Wn = Symbol.for("react.portal"), $n = Symbol.for("react.fragment"), _o = Symbol.for("react.strict_mode"), va = Symbol.for("react.profiler"), ld = Symbol.for("react.provider"), sd = Symbol.for("react.context"), ko = Symbol.for("react.forward_ref"), wa = Symbol.for("react.suspense"), xa = Symbol.for("react.suspense_list"), So = Symbol.for("react.memo"), Gt = Symbol.for("react.lazy"), ad = Symbol.for("react.offscreen"), Si = Symbol.iterator;
function gr(e) {
  return e === null || typeof e != "object" ? null : (e = Si && e[Si] || e["@@iterator"], typeof e == "function" ? e : null);
}
var be = Object.assign, Us;
function jr(e) {
  if (Us === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Us = t && t[1] || "";
  }
  return `
` + Us + e;
}
var Vs = !1;
function Bs(e, t) {
  if (!e || Vs) return "";
  Vs = !0;
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
`), a = r.stack.split(`
`), o = l.length - 1, i = a.length - 1; 1 <= o && 0 <= i && l[o] !== a[i]; ) i--;
      for (; 1 <= o && 0 <= i; o--, i--) if (l[o] !== a[i]) {
        if (o !== 1 || i !== 1)
          do
            if (o--, i--, 0 > i || l[o] !== a[i]) {
              var c = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= o && 0 <= i);
        break;
      }
    }
  } finally {
    Vs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? jr(e) : "";
}
function Cm(e) {
  switch (e.tag) {
    case 5:
      return jr(e.type);
    case 16:
      return jr("Lazy");
    case 13:
      return jr("Suspense");
    case 19:
      return jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Bs(e.type, !1), e;
    case 11:
      return e = Bs(e.type.render, !1), e;
    case 1:
      return e = Bs(e.type, !0), e;
    default:
      return "";
  }
}
function _a(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $n:
      return "Fragment";
    case Wn:
      return "Portal";
    case va:
      return "Profiler";
    case _o:
      return "StrictMode";
    case wa:
      return "Suspense";
    case xa:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case sd:
      return (e.displayName || "Context") + ".Consumer";
    case ld:
      return (e._context.displayName || "Context") + ".Provider";
    case ko:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case So:
      return t = e.displayName || null, t !== null ? t : _a(e.type) || "Memo";
    case Gt:
      t = e._payload, e = e._init;
      try {
        return _a(e(t));
      } catch {
      }
  }
  return null;
}
function Nm(e) {
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
      return _a(t);
    case 8:
      return t === _o ? "StrictMode" : "Mode";
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
function dn(e) {
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
function od(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Mm(e) {
  var t = od(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, a.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function pl(e) {
  e._valueTracker || (e._valueTracker = Mm(e));
}
function id(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = od(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Gl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ka(e, t) {
  var n = t.checked;
  return be({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ji(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = dn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function cd(e, t) {
  t = t.checked, t != null && xo(e, "checked", t, !1);
}
function Sa(e, t) {
  cd(e, t);
  var n = dn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ja(e, t.type, n) : t.hasOwnProperty("defaultValue") && ja(e, t.type, dn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function bi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ja(e, t, n) {
  (t !== "number" || Gl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var br = Array.isArray;
function Zn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ba(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
  return be({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ei(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(W(92));
      if (br(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: dn(n) };
}
function dd(e, t) {
  var n = dn(t.value), r = dn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ci(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ud(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ea(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ud(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var gl, fd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (gl = gl || document.createElement("div"), gl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nr = {
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
}, Im = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nr).forEach(function(e) {
  Im.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Nr[t] = Nr[e];
  });
});
function md(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nr.hasOwnProperty(e) && Nr[e] ? ("" + t).trim() : t + "px";
}
function hd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = md(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Tm = be({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ca(e, t) {
  if (t) {
    if (Tm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(W(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(W(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(W(62));
  }
}
function Na(e, t) {
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
var Ma = null;
function jo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ia = null, Jn = null, er = null;
function Ni(e) {
  if (e = cl(e)) {
    if (typeof Ia != "function") throw Error(W(280));
    var t = e.stateNode;
    t && (t = js(t), Ia(e.stateNode, e.type, t));
  }
}
function pd(e) {
  Jn ? er ? er.push(e) : er = [e] : Jn = e;
}
function gd() {
  if (Jn) {
    var e = Jn, t = er;
    if (er = Jn = null, Ni(e), t) for (e = 0; e < t.length; e++) Ni(t[e]);
  }
}
function yd(e, t) {
  return e(t);
}
function vd() {
}
var Qs = !1;
function wd(e, t, n) {
  if (Qs) return e(t, n);
  Qs = !0;
  try {
    return yd(e, t, n);
  } finally {
    Qs = !1, (Jn !== null || er !== null) && (vd(), gd());
  }
}
function Fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = js(n);
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
  if (n && typeof n != "function") throw Error(W(231, t, typeof n));
  return n;
}
var Ta = !1;
if (zt) try {
  var yr = {};
  Object.defineProperty(yr, "passive", { get: function() {
    Ta = !0;
  } }), window.addEventListener("test", yr, yr), window.removeEventListener("test", yr, yr);
} catch {
  Ta = !1;
}
function Lm(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var Mr = !1, ql = null, Yl = !1, La = null, Dm = { onError: function(e) {
  Mr = !0, ql = e;
} };
function Rm(e, t, n, r, l, a, o, i, c) {
  Mr = !1, ql = null, Lm.apply(Dm, arguments);
}
function Pm(e, t, n, r, l, a, o, i, c) {
  if (Rm.apply(this, arguments), Mr) {
    if (Mr) {
      var d = ql;
      Mr = !1, ql = null;
    } else throw Error(W(198));
    Yl || (Yl = !0, La = d);
  }
}
function Ln(e) {
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
function xd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Mi(e) {
  if (Ln(e) !== e) throw Error(W(188));
}
function Om(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ln(e), t === null) throw Error(W(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var a = l.alternate;
    if (a === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === a.child) {
      for (a = l.child; a; ) {
        if (a === n) return Mi(l), e;
        if (a === r) return Mi(l), t;
        a = a.sibling;
      }
      throw Error(W(188));
    }
    if (n.return !== r.return) n = l, r = a;
    else {
      for (var o = !1, i = l.child; i; ) {
        if (i === n) {
          o = !0, n = l, r = a;
          break;
        }
        if (i === r) {
          o = !0, r = l, n = a;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = a.child; i; ) {
          if (i === n) {
            o = !0, n = a, r = l;
            break;
          }
          if (i === r) {
            o = !0, r = a, n = l;
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(W(189));
      }
    }
    if (n.alternate !== r) throw Error(W(190));
  }
  if (n.tag !== 3) throw Error(W(188));
  return n.stateNode.current === n ? e : t;
}
function _d(e) {
  return e = Om(e), e !== null ? kd(e) : null;
}
function kd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = kd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sd = lt.unstable_scheduleCallback, Ii = lt.unstable_cancelCallback, Am = lt.unstable_shouldYield, zm = lt.unstable_requestPaint, Ce = lt.unstable_now, Fm = lt.unstable_getCurrentPriorityLevel, bo = lt.unstable_ImmediatePriority, jd = lt.unstable_UserBlockingPriority, Xl = lt.unstable_NormalPriority, Wm = lt.unstable_LowPriority, bd = lt.unstable_IdlePriority, xs = null, Mt = null;
function $m(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function") try {
    Mt.onCommitFiberRoot(xs, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var _t = Math.clz32 ? Math.clz32 : Bm, Um = Math.log, Vm = Math.LN2;
function Bm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Um(e) / Vm | 0) | 0;
}
var yl = 64, vl = 4194304;
function Er(e) {
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
function Zl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = Er(i) : (a &= o, a !== 0 && (r = Er(a)));
  } else o = n & ~l, o !== 0 ? r = Er(o) : a !== 0 && (r = Er(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - _t(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Qm(e, t) {
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
function Hm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - _t(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = Qm(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Da(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ed() {
  var e = yl;
  return yl <<= 1, !(yl & 4194240) && (yl = 64), e;
}
function Hs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ol(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - _t(t), e[t] = n;
}
function Km(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - _t(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function Eo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - _t(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ue = 0;
function Cd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Nd, Co, Md, Id, Td, Ra = !1, wl = [], tn = null, nn = null, rn = null, Wr = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), Yt = [], Gm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ti(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
      break;
    case "pointerover":
    case "pointerout":
      Wr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $r.delete(t.pointerId);
  }
}
function vr(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = cl(t), t !== null && Co(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function qm(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return tn = vr(tn, e, t, n, r, l), !0;
    case "dragenter":
      return nn = vr(nn, e, t, n, r, l), !0;
    case "mouseover":
      return rn = vr(rn, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return Wr.set(a, vr(Wr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, $r.set(a, vr($r.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Ld(e) {
  var t = xn(e.target);
  if (t !== null) {
    var n = Ln(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = xd(n), t !== null) {
          e.blockedOn = t, Td(e.priority, function() {
            Md(n);
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
function Al(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ma = r, n.target.dispatchEvent(r), Ma = null;
    } else return t = cl(n), t !== null && Co(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Li(e, t, n) {
  Al(e) && n.delete(t);
}
function Ym() {
  Ra = !1, tn !== null && Al(tn) && (tn = null), nn !== null && Al(nn) && (nn = null), rn !== null && Al(rn) && (rn = null), Wr.forEach(Li), $r.forEach(Li);
}
function wr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ra || (Ra = !0, lt.unstable_scheduleCallback(lt.unstable_NormalPriority, Ym)));
}
function Ur(e) {
  function t(l) {
    return wr(l, e);
  }
  if (0 < wl.length) {
    wr(wl[0], e);
    for (var n = 1; n < wl.length; n++) {
      var r = wl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (tn !== null && wr(tn, e), nn !== null && wr(nn, e), rn !== null && wr(rn, e), Wr.forEach(t), $r.forEach(t), n = 0; n < Yt.length; n++) r = Yt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yt.length && (n = Yt[0], n.blockedOn === null); ) Ld(n), n.blockedOn === null && Yt.shift();
}
var tr = Vt.ReactCurrentBatchConfig, Jl = !0;
function Xm(e, t, n, r) {
  var l = ue, a = tr.transition;
  tr.transition = null;
  try {
    ue = 1, No(e, t, n, r);
  } finally {
    ue = l, tr.transition = a;
  }
}
function Zm(e, t, n, r) {
  var l = ue, a = tr.transition;
  tr.transition = null;
  try {
    ue = 4, No(e, t, n, r);
  } finally {
    ue = l, tr.transition = a;
  }
}
function No(e, t, n, r) {
  if (Jl) {
    var l = Pa(e, t, n, r);
    if (l === null) na(e, t, r, es, n), Ti(e, r);
    else if (qm(l, e, t, n, r)) r.stopPropagation();
    else if (Ti(e, r), t & 4 && -1 < Gm.indexOf(e)) {
      for (; l !== null; ) {
        var a = cl(l);
        if (a !== null && Nd(a), a = Pa(e, t, n, r), a === null && na(e, t, r, es, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else na(e, t, r, null, n);
  }
}
var es = null;
function Pa(e, t, n, r) {
  if (es = null, e = jo(r), e = xn(e), e !== null) if (t = Ln(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = xd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return es = e, null;
}
function Dd(e) {
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
      switch (Fm()) {
        case bo:
          return 1;
        case jd:
          return 4;
        case Xl:
        case Wm:
          return 16;
        case bd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null, Mo = null, zl = null;
function Rd() {
  if (zl) return zl;
  var e, t = Mo, n = t.length, r, l = "value" in Jt ? Jt.value : Jt.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return zl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Fl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function xl() {
  return !0;
}
function Di() {
  return !1;
}
function at(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? xl : Di, this.isPropagationStopped = Di, this;
  }
  return be(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xl);
  }, persist: function() {
  }, isPersistent: xl }), t;
}
var mr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Io = at(mr), il = be({}, mr, { view: 0, detail: 0 }), Jm = at(il), Ks, Gs, xr, _s = be({}, il, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: To, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xr && (xr && e.type === "mousemove" ? (Ks = e.screenX - xr.screenX, Gs = e.screenY - xr.screenY) : Gs = Ks = 0, xr = e), Ks);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Gs;
} }), Ri = at(_s), eh = be({}, _s, { dataTransfer: 0 }), th = at(eh), nh = be({}, il, { relatedTarget: 0 }), qs = at(nh), rh = be({}, mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lh = at(rh), sh = be({}, mr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ah = at(sh), oh = be({}, mr, { data: 0 }), Pi = at(oh), ih = {
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
}, ch = {
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
}, dh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function uh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dh[e]) ? !!t[e] : !1;
}
function To() {
  return uh;
}
var fh = be({}, il, { key: function(e) {
  if (e.key) {
    var t = ih[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Fl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ch[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: To, charCode: function(e) {
  return e.type === "keypress" ? Fl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), mh = at(fh), hh = be({}, _s, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oi = at(hh), ph = be({}, il, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: To }), gh = at(ph), yh = be({}, mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vh = at(yh), wh = be({}, _s, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), xh = at(wh), _h = [9, 13, 27, 32], Lo = zt && "CompositionEvent" in window, Ir = null;
zt && "documentMode" in document && (Ir = document.documentMode);
var kh = zt && "TextEvent" in window && !Ir, Pd = zt && (!Lo || Ir && 8 < Ir && 11 >= Ir), Ai = " ", zi = !1;
function Od(e, t) {
  switch (e) {
    case "keyup":
      return _h.indexOf(t.keyCode) !== -1;
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
function Ad(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function Sh(e, t) {
  switch (e) {
    case "compositionend":
      return Ad(t);
    case "keypress":
      return t.which !== 32 ? null : (zi = !0, Ai);
    case "textInput":
      return e = t.data, e === Ai && zi ? null : e;
    default:
      return null;
  }
}
function jh(e, t) {
  if (Un) return e === "compositionend" || !Lo && Od(e, t) ? (e = Rd(), zl = Mo = Jt = null, Un = !1, e) : null;
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
      return Pd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Fi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bh[e.type] : t === "textarea";
}
function zd(e, t, n, r) {
  pd(r), t = ts(t, "onChange"), 0 < t.length && (n = new Io("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Tr = null, Vr = null;
function Eh(e) {
  qd(e, 0);
}
function ks(e) {
  var t = Qn(e);
  if (id(t)) return e;
}
function Ch(e, t) {
  if (e === "change") return t;
}
var Fd = !1;
if (zt) {
  var Ys;
  if (zt) {
    var Xs = "oninput" in document;
    if (!Xs) {
      var Wi = document.createElement("div");
      Wi.setAttribute("oninput", "return;"), Xs = typeof Wi.oninput == "function";
    }
    Ys = Xs;
  } else Ys = !1;
  Fd = Ys && (!document.documentMode || 9 < document.documentMode);
}
function $i() {
  Tr && (Tr.detachEvent("onpropertychange", Wd), Vr = Tr = null);
}
function Wd(e) {
  if (e.propertyName === "value" && ks(Vr)) {
    var t = [];
    zd(t, Vr, e, jo(e)), wd(Eh, t);
  }
}
function Nh(e, t, n) {
  e === "focusin" ? ($i(), Tr = t, Vr = n, Tr.attachEvent("onpropertychange", Wd)) : e === "focusout" && $i();
}
function Mh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ks(Vr);
}
function Ih(e, t) {
  if (e === "click") return ks(t);
}
function Th(e, t) {
  if (e === "input" || e === "change") return ks(t);
}
function Lh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var St = typeof Object.is == "function" ? Object.is : Lh;
function Br(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ya.call(t, l) || !St(e[l], t[l])) return !1;
  }
  return !0;
}
function Ui(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vi(e, t) {
  var n = Ui(e);
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
    n = Ui(n);
  }
}
function $d(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $d(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ud() {
  for (var e = window, t = Gl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gl(e.document);
  }
  return t;
}
function Do(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Dh(e) {
  var t = Ud(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && $d(n.ownerDocument.documentElement, n)) {
    if (r !== null && Do(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Vi(n, a);
        var o = Vi(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Rh = zt && "documentMode" in document && 11 >= document.documentMode, Vn = null, Oa = null, Lr = null, Aa = !1;
function Bi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Aa || Vn == null || Vn !== Gl(r) || (r = Vn, "selectionStart" in r && Do(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Lr && Br(Lr, r) || (Lr = r, r = ts(Oa, "onSelect"), 0 < r.length && (t = new Io("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Vn)));
}
function _l(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Bn = { animationend: _l("Animation", "AnimationEnd"), animationiteration: _l("Animation", "AnimationIteration"), animationstart: _l("Animation", "AnimationStart"), transitionend: _l("Transition", "TransitionEnd") }, Zs = {}, Vd = {};
zt && (Vd = document.createElement("div").style, "AnimationEvent" in window || (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation), "TransitionEvent" in window || delete Bn.transitionend.transition);
function Ss(e) {
  if (Zs[e]) return Zs[e];
  if (!Bn[e]) return e;
  var t = Bn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vd) return Zs[e] = t[n];
  return e;
}
var Bd = Ss("animationend"), Qd = Ss("animationiteration"), Hd = Ss("animationstart"), Kd = Ss("transitionend"), Gd = /* @__PURE__ */ new Map(), Qi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fn(e, t) {
  Gd.set(e, t), Tn(t, [e]);
}
for (var Js = 0; Js < Qi.length; Js++) {
  var ea = Qi[Js], Ph = ea.toLowerCase(), Oh = ea[0].toUpperCase() + ea.slice(1);
  fn(Ph, "on" + Oh);
}
fn(Bd, "onAnimationEnd");
fn(Qd, "onAnimationIteration");
fn(Hd, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(Kd, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
Tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ah = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
function Hi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Pm(r, t, void 0, e), e.currentTarget = null;
}
function qd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Hi(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Hi(l, i, d), a = c;
      }
    }
  }
  if (Yl) throw e = La, Yl = !1, La = null, e;
}
function ve(e, t) {
  var n = t[Ua];
  n === void 0 && (n = t[Ua] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Yd(t, e, 2, !1), n.add(r));
}
function ta(e, t, n) {
  var r = 0;
  t && (r |= 4), Yd(n, e, r, t);
}
var kl = "_reactListening" + Math.random().toString(36).slice(2);
function Qr(e) {
  if (!e[kl]) {
    e[kl] = !0, rd.forEach(function(n) {
      n !== "selectionchange" && (Ah.has(n) || ta(n, !1, e), ta(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kl] || (t[kl] = !0, ta("selectionchange", !1, t));
  }
}
function Yd(e, t, n, r) {
  switch (Dd(t)) {
    case 1:
      var l = Xm;
      break;
    case 4:
      l = Zm;
      break;
    default:
      l = No;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ta || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function na(e, t, n, r, l) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var i = r.stateNode.containerInfo;
      if (i === l || i.nodeType === 8 && i.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var c = o.tag;
        if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l)) return;
        o = o.return;
      }
      for (; i !== null; ) {
        if (o = xn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  wd(function() {
    var d = a, m = jo(n), y = [];
    e: {
      var v = Gd.get(e);
      if (v !== void 0) {
        var x = Io, g = e;
        switch (e) {
          case "keypress":
            if (Fl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = mh;
            break;
          case "focusin":
            g = "focus", x = qs;
            break;
          case "focusout":
            g = "blur", x = qs;
            break;
          case "beforeblur":
          case "afterblur":
            x = qs;
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
            x = Ri;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = th;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = gh;
            break;
          case Bd:
          case Qd:
          case Hd:
            x = lh;
            break;
          case Kd:
            x = vh;
            break;
          case "scroll":
            x = Jm;
            break;
          case "wheel":
            x = xh;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = ah;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Oi;
        }
        var _ = (t & 4) !== 0, k = !_ && e === "scroll", f = _ ? v !== null ? v + "Capture" : null : v;
        _ = [];
        for (var u = d, p; u !== null; ) {
          p = u;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, f !== null && (w = Fr(u, f), w != null && _.push(Hr(u, w, p)))), k) break;
          u = u.return;
        }
        0 < _.length && (v = new x(v, g, null, n, m), y.push({ event: v, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", v && n !== Ma && (g = n.relatedTarget || n.fromElement) && (xn(g) || g[Ft])) break e;
        if ((x || v) && (v = m.window === m ? m : (v = m.ownerDocument) ? v.defaultView || v.parentWindow : window, x ? (g = n.relatedTarget || n.toElement, x = d, g = g ? xn(g) : null, g !== null && (k = Ln(g), g !== k || g.tag !== 5 && g.tag !== 6) && (g = null)) : (x = null, g = d), x !== g)) {
          if (_ = Ri, w = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Oi, w = "onPointerLeave", f = "onPointerEnter", u = "pointer"), k = x == null ? v : Qn(x), p = g == null ? v : Qn(g), v = new _(w, u + "leave", x, n, m), v.target = k, v.relatedTarget = p, w = null, xn(m) === d && (_ = new _(f, u + "enter", g, n, m), _.target = p, _.relatedTarget = k, w = _), k = w, x && g) t: {
            for (_ = x, f = g, u = 0, p = _; p; p = zn(p)) u++;
            for (p = 0, w = f; w; w = zn(w)) p++;
            for (; 0 < u - p; ) _ = zn(_), u--;
            for (; 0 < p - u; ) f = zn(f), p--;
            for (; u--; ) {
              if (_ === f || f !== null && _ === f.alternate) break t;
              _ = zn(_), f = zn(f);
            }
            _ = null;
          }
          else _ = null;
          x !== null && Ki(y, v, x, _, !1), g !== null && k !== null && Ki(y, k, g, _, !0);
        }
      }
      e: {
        if (v = d ? Qn(d) : window, x = v.nodeName && v.nodeName.toLowerCase(), x === "select" || x === "input" && v.type === "file") var j = Ch;
        else if (Fi(v)) if (Fd) j = Th;
        else {
          j = Mh;
          var S = Nh;
        }
        else (x = v.nodeName) && x.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (j = Ih);
        if (j && (j = j(e, d))) {
          zd(y, j, n, m);
          break e;
        }
        S && S(e, v, d), e === "focusout" && (S = v._wrapperState) && S.controlled && v.type === "number" && ja(v, "number", v.value);
      }
      switch (S = d ? Qn(d) : window, e) {
        case "focusin":
          (Fi(S) || S.contentEditable === "true") && (Vn = S, Oa = d, Lr = null);
          break;
        case "focusout":
          Lr = Oa = Vn = null;
          break;
        case "mousedown":
          Aa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Aa = !1, Bi(y, n, m);
          break;
        case "selectionchange":
          if (Rh) break;
        case "keydown":
        case "keyup":
          Bi(y, n, m);
      }
      var b;
      if (Lo) e: {
        switch (e) {
          case "compositionstart":
            var M = "onCompositionStart";
            break e;
          case "compositionend":
            M = "onCompositionEnd";
            break e;
          case "compositionupdate":
            M = "onCompositionUpdate";
            break e;
        }
        M = void 0;
      }
      else Un ? Od(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M && (Pd && n.locale !== "ko" && (Un || M !== "onCompositionStart" ? M === "onCompositionEnd" && Un && (b = Rd()) : (Jt = m, Mo = "value" in Jt ? Jt.value : Jt.textContent, Un = !0)), S = ts(d, M), 0 < S.length && (M = new Pi(M, e, null, n, m), y.push({ event: M, listeners: S }), b ? M.data = b : (b = Ad(n), b !== null && (M.data = b)))), (b = kh ? Sh(e, n) : jh(e, n)) && (d = ts(d, "onBeforeInput"), 0 < d.length && (m = new Pi("onBeforeInput", "beforeinput", null, n, m), y.push({ event: m, listeners: d }), m.data = b));
    }
    qd(y, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ts(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = Fr(e, n), a != null && r.unshift(Hr(e, a, l)), a = Fr(e, t), a != null && r.push(Hr(e, a, l))), e = e.return;
  }
  return r;
}
function zn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ki(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = Fr(n, a), c != null && o.unshift(Hr(n, c, i))) : l || (c = Fr(n, a), c != null && o.push(Hr(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var zh = /\r\n?/g, Fh = /\u0000|\uFFFD/g;
function Gi(e) {
  return (typeof e == "string" ? e : "" + e).replace(zh, `
`).replace(Fh, "");
}
function Sl(e, t, n) {
  if (t = Gi(t), Gi(e) !== t && n) throw Error(W(425));
}
function ns() {
}
var za = null, Fa = null;
function Wa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var $a = typeof setTimeout == "function" ? setTimeout : void 0, Wh = typeof clearTimeout == "function" ? clearTimeout : void 0, qi = typeof Promise == "function" ? Promise : void 0, $h = typeof queueMicrotask == "function" ? queueMicrotask : typeof qi < "u" ? function(e) {
  return qi.resolve(null).then(e).catch(Uh);
} : $a;
function Uh(e) {
  setTimeout(function() {
    throw e;
  });
}
function ra(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Ur(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Ur(t);
}
function ln(e) {
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
function Yi(e) {
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
var hr = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + hr, Kr = "__reactProps$" + hr, Ft = "__reactContainer$" + hr, Ua = "__reactEvents$" + hr, Vh = "__reactListeners$" + hr, Bh = "__reactHandles$" + hr;
function xn(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ft] || n[Nt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Yi(e); e !== null; ) {
        if (n = e[Nt]) return n;
        e = Yi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function cl(e) {
  return e = e[Nt] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(W(33));
}
function js(e) {
  return e[Kr] || null;
}
var Va = [], Hn = -1;
function mn(e) {
  return { current: e };
}
function we(e) {
  0 > Hn || (e.current = Va[Hn], Va[Hn] = null, Hn--);
}
function he(e, t) {
  Hn++, Va[Hn] = e.current, e.current = t;
}
var un = {}, $e = mn(un), Xe = mn(!1), bn = un;
function sr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ze(e) {
  return e = e.childContextTypes, e != null;
}
function rs() {
  we(Xe), we($e);
}
function Xi(e, t, n) {
  if ($e.current !== un) throw Error(W(168));
  he($e, t), he(Xe, n);
}
function Xd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(W(108, Nm(e) || "Unknown", l));
  return be({}, n, r);
}
function ls(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, bn = $e.current, he($e, e), he(Xe, Xe.current), !0;
}
function Zi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(W(169));
  n ? (e = Xd(e, t, bn), r.__reactInternalMemoizedMergedChildContext = e, we(Xe), we($e), he($e, e)) : we(Xe), he(Xe, n);
}
var Rt = null, bs = !1, la = !1;
function Zd(e) {
  Rt === null ? Rt = [e] : Rt.push(e);
}
function Qh(e) {
  bs = !0, Zd(e);
}
function hn() {
  if (!la && Rt !== null) {
    la = !0;
    var e = 0, t = ue;
    try {
      var n = Rt;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Rt = null, bs = !1;
    } catch (l) {
      throw Rt !== null && (Rt = Rt.slice(e + 1)), Sd(bo, hn), l;
    } finally {
      ue = t, la = !1;
    }
  }
  return null;
}
var Kn = [], Gn = 0, ss = null, as = 0, ct = [], dt = 0, En = null, Pt = 1, Ot = "";
function vn(e, t) {
  Kn[Gn++] = as, Kn[Gn++] = ss, ss = e, as = t;
}
function Jd(e, t, n) {
  ct[dt++] = Pt, ct[dt++] = Ot, ct[dt++] = En, En = e;
  var r = Pt;
  e = Ot;
  var l = 32 - _t(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - _t(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Pt = 1 << 32 - _t(t) + l | n << l | r, Ot = a + e;
  } else Pt = 1 << a | n << l | r, Ot = e;
}
function Ro(e) {
  e.return !== null && (vn(e, 1), Jd(e, 1, 0));
}
function Po(e) {
  for (; e === ss; ) ss = Kn[--Gn], Kn[Gn] = null, as = Kn[--Gn], Kn[Gn] = null;
  for (; e === En; ) En = ct[--dt], ct[dt] = null, Ot = ct[--dt], ct[dt] = null, Pt = ct[--dt], ct[dt] = null;
}
var rt = null, nt = null, _e = !1, wt = null;
function eu(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ji(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = ln(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = En !== null ? { id: Pt, overflow: Ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, rt = e, nt = null, !0) : !1;
    default:
      return !1;
  }
}
function Ba(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qa(e) {
  if (_e) {
    var t = nt;
    if (t) {
      var n = t;
      if (!Ji(e, t)) {
        if (Ba(e)) throw Error(W(418));
        t = ln(n.nextSibling);
        var r = rt;
        t && Ji(e, t) ? eu(r, n) : (e.flags = e.flags & -4097 | 2, _e = !1, rt = e);
      }
    } else {
      if (Ba(e)) throw Error(W(418));
      e.flags = e.flags & -4097 | 2, _e = !1, rt = e;
    }
  }
}
function ec(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  rt = e;
}
function jl(e) {
  if (e !== rt) return !1;
  if (!_e) return ec(e), _e = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wa(e.type, e.memoizedProps)), t && (t = nt)) {
    if (Ba(e)) throw tu(), Error(W(418));
    for (; t; ) eu(e, t), t = ln(t.nextSibling);
  }
  if (ec(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(W(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = ln(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function tu() {
  for (var e = nt; e; ) e = ln(e.nextSibling);
}
function ar() {
  nt = rt = null, _e = !1;
}
function Oo(e) {
  wt === null ? wt = [e] : wt.push(e);
}
var Hh = Vt.ReactCurrentBatchConfig;
function _r(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(W(284));
    if (!n._owner) throw Error(W(290, e));
  }
  return e;
}
function bl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(W(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function tc(e) {
  var t = e._init;
  return t(e._payload);
}
function nu(e) {
  function t(f, u) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [u], f.flags |= 16) : p.push(u);
    }
  }
  function n(f, u) {
    if (!e) return null;
    for (; u !== null; ) t(f, u), u = u.sibling;
    return null;
  }
  function r(f, u) {
    for (f = /* @__PURE__ */ new Map(); u !== null; ) u.key !== null ? f.set(u.key, u) : f.set(u.index, u), u = u.sibling;
    return f;
  }
  function l(f, u) {
    return f = cn(f, u), f.index = 0, f.sibling = null, f;
  }
  function a(f, u, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < u ? (f.flags |= 2, u) : p) : (f.flags |= 2, u)) : (f.flags |= 1048576, u);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, u, p, w) {
    return u === null || u.tag !== 6 ? (u = ua(p, f.mode, w), u.return = f, u) : (u = l(u, p), u.return = f, u);
  }
  function c(f, u, p, w) {
    var j = p.type;
    return j === $n ? m(f, u, p.props.children, w, p.key) : u !== null && (u.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Gt && tc(j) === u.type) ? (w = l(u, p.props), w.ref = _r(f, u, p), w.return = f, w) : (w = Hl(p.type, p.key, p.props, null, f.mode, w), w.ref = _r(f, u, p), w.return = f, w);
  }
  function d(f, u, p, w) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== p.containerInfo || u.stateNode.implementation !== p.implementation ? (u = fa(p, f.mode, w), u.return = f, u) : (u = l(u, p.children || []), u.return = f, u);
  }
  function m(f, u, p, w, j) {
    return u === null || u.tag !== 7 ? (u = jn(p, f.mode, w, j), u.return = f, u) : (u = l(u, p), u.return = f, u);
  }
  function y(f, u, p) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = ua("" + u, f.mode, p), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case hl:
          return p = Hl(u.type, u.key, u.props, null, f.mode, p), p.ref = _r(f, null, u), p.return = f, p;
        case Wn:
          return u = fa(u, f.mode, p), u.return = f, u;
        case Gt:
          var w = u._init;
          return y(f, w(u._payload), p);
      }
      if (br(u) || gr(u)) return u = jn(u, f.mode, p, null), u.return = f, u;
      bl(f, u);
    }
    return null;
  }
  function v(f, u, p, w) {
    var j = u !== null ? u.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return j !== null ? null : i(f, u, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hl:
          return p.key === j ? c(f, u, p, w) : null;
        case Wn:
          return p.key === j ? d(f, u, p, w) : null;
        case Gt:
          return j = p._init, v(
            f,
            u,
            j(p._payload),
            w
          );
      }
      if (br(p) || gr(p)) return j !== null ? null : m(f, u, p, w, null);
      bl(f, p);
    }
    return null;
  }
  function x(f, u, p, w, j) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(p) || null, i(u, f, "" + w, j);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case hl:
          return f = f.get(w.key === null ? p : w.key) || null, c(u, f, w, j);
        case Wn:
          return f = f.get(w.key === null ? p : w.key) || null, d(u, f, w, j);
        case Gt:
          var S = w._init;
          return x(f, u, p, S(w._payload), j);
      }
      if (br(w) || gr(w)) return f = f.get(p) || null, m(u, f, w, j, null);
      bl(u, w);
    }
    return null;
  }
  function g(f, u, p, w) {
    for (var j = null, S = null, b = u, M = u = 0, D = null; b !== null && M < p.length; M++) {
      b.index > M ? (D = b, b = null) : D = b.sibling;
      var T = v(f, b, p[M], w);
      if (T === null) {
        b === null && (b = D);
        break;
      }
      e && b && T.alternate === null && t(f, b), u = a(T, u, M), S === null ? j = T : S.sibling = T, S = T, b = D;
    }
    if (M === p.length) return n(f, b), _e && vn(f, M), j;
    if (b === null) {
      for (; M < p.length; M++) b = y(f, p[M], w), b !== null && (u = a(b, u, M), S === null ? j = b : S.sibling = b, S = b);
      return _e && vn(f, M), j;
    }
    for (b = r(f, b); M < p.length; M++) D = x(b, f, M, p[M], w), D !== null && (e && D.alternate !== null && b.delete(D.key === null ? M : D.key), u = a(D, u, M), S === null ? j = D : S.sibling = D, S = D);
    return e && b.forEach(function(I) {
      return t(f, I);
    }), _e && vn(f, M), j;
  }
  function _(f, u, p, w) {
    var j = gr(p);
    if (typeof j != "function") throw Error(W(150));
    if (p = j.call(p), p == null) throw Error(W(151));
    for (var S = j = null, b = u, M = u = 0, D = null, T = p.next(); b !== null && !T.done; M++, T = p.next()) {
      b.index > M ? (D = b, b = null) : D = b.sibling;
      var I = v(f, b, T.value, w);
      if (I === null) {
        b === null && (b = D);
        break;
      }
      e && b && I.alternate === null && t(f, b), u = a(I, u, M), S === null ? j = I : S.sibling = I, S = I, b = D;
    }
    if (T.done) return n(
      f,
      b
    ), _e && vn(f, M), j;
    if (b === null) {
      for (; !T.done; M++, T = p.next()) T = y(f, T.value, w), T !== null && (u = a(T, u, M), S === null ? j = T : S.sibling = T, S = T);
      return _e && vn(f, M), j;
    }
    for (b = r(f, b); !T.done; M++, T = p.next()) T = x(b, f, M, T.value, w), T !== null && (e && T.alternate !== null && b.delete(T.key === null ? M : T.key), u = a(T, u, M), S === null ? j = T : S.sibling = T, S = T);
    return e && b.forEach(function(F) {
      return t(f, F);
    }), _e && vn(f, M), j;
  }
  function k(f, u, p, w) {
    if (typeof p == "object" && p !== null && p.type === $n && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hl:
          e: {
            for (var j = p.key, S = u; S !== null; ) {
              if (S.key === j) {
                if (j = p.type, j === $n) {
                  if (S.tag === 7) {
                    n(f, S.sibling), u = l(S, p.props.children), u.return = f, f = u;
                    break e;
                  }
                } else if (S.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Gt && tc(j) === S.type) {
                  n(f, S.sibling), u = l(S, p.props), u.ref = _r(f, S, p), u.return = f, f = u;
                  break e;
                }
                n(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            p.type === $n ? (u = jn(p.props.children, f.mode, w, p.key), u.return = f, f = u) : (w = Hl(p.type, p.key, p.props, null, f.mode, w), w.ref = _r(f, u, p), w.return = f, f = w);
          }
          return o(f);
        case Wn:
          e: {
            for (S = p.key; u !== null; ) {
              if (u.key === S) if (u.tag === 4 && u.stateNode.containerInfo === p.containerInfo && u.stateNode.implementation === p.implementation) {
                n(f, u.sibling), u = l(u, p.children || []), u.return = f, f = u;
                break e;
              } else {
                n(f, u);
                break;
              }
              else t(f, u);
              u = u.sibling;
            }
            u = fa(p, f.mode, w), u.return = f, f = u;
          }
          return o(f);
        case Gt:
          return S = p._init, k(f, u, S(p._payload), w);
      }
      if (br(p)) return g(f, u, p, w);
      if (gr(p)) return _(f, u, p, w);
      bl(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, u !== null && u.tag === 6 ? (n(f, u.sibling), u = l(u, p), u.return = f, f = u) : (n(f, u), u = ua(p, f.mode, w), u.return = f, f = u), o(f)) : n(f, u);
  }
  return k;
}
var or = nu(!0), ru = nu(!1), os = mn(null), is = null, qn = null, Ao = null;
function zo() {
  Ao = qn = is = null;
}
function Fo(e) {
  var t = os.current;
  we(os), e._currentValue = t;
}
function Ha(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function nr(e, t) {
  is = e, Ao = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ye = !0), e.firstContext = null);
}
function ht(e) {
  var t = e._currentValue;
  if (Ao !== e) if (e = { context: e, memoizedValue: t, next: null }, qn === null) {
    if (is === null) throw Error(W(308));
    qn = e, is.dependencies = { lanes: 0, firstContext: e };
  } else qn = qn.next = e;
  return t;
}
var _n = null;
function Wo(e) {
  _n === null ? _n = [e] : _n.push(e);
}
function lu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Wo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Wt(e, r);
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var qt = !1;
function $o(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function su(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function At(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ae & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Wt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Wo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Wt(e, n);
}
function Wl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Eo(e, n);
  }
}
function nc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? l = a = o : a = a.next = o, n = n.next;
      } while (n !== null);
      a === null ? l = a = t : a = a.next = t;
    } else l = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function cs(e, t, n, r) {
  var l = e.updateQueue;
  qt = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== o && (i === null ? m.firstBaseUpdate = d : i.next = d, m.lastBaseUpdate = c));
  }
  if (a !== null) {
    var y = l.baseState;
    o = 0, m = d = c = null, i = a;
    do {
      var v = i.lane, x = i.eventTime;
      if ((r & v) === v) {
        m !== null && (m = m.next = {
          eventTime: x,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var g = e, _ = i;
          switch (v = t, x = n, _.tag) {
            case 1:
              if (g = _.payload, typeof g == "function") {
                y = g.call(x, y, v);
                break e;
              }
              y = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = _.payload, v = typeof g == "function" ? g.call(x, y, v) : g, v == null) break e;
              y = be({}, y, v);
              break e;
            case 2:
              qt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [i] : v.push(i));
      } else x = { eventTime: x, lane: v, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, m === null ? (d = m = x, c = y) : m = m.next = x, o |= v;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        v = i, i = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (c = y), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    Nn |= o, e.lanes = o, e.memoizedState = y;
  }
}
function rc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(W(191, l));
      l.call(r);
    }
  }
}
var dl = {}, It = mn(dl), Gr = mn(dl), qr = mn(dl);
function kn(e) {
  if (e === dl) throw Error(W(174));
  return e;
}
function Uo(e, t) {
  switch (he(qr, t), he(Gr, e), he(It, dl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ea(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ea(t, e);
  }
  we(It), he(It, t);
}
function ir() {
  we(It), we(Gr), we(qr);
}
function au(e) {
  kn(qr.current);
  var t = kn(It.current), n = Ea(t, e.type);
  t !== n && (he(Gr, e), he(It, n));
}
function Vo(e) {
  Gr.current === e && (we(It), we(Gr));
}
var Se = mn(0);
function ds(e) {
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
var sa = [];
function Bo() {
  for (var e = 0; e < sa.length; e++) sa[e]._workInProgressVersionPrimary = null;
  sa.length = 0;
}
var $l = Vt.ReactCurrentDispatcher, aa = Vt.ReactCurrentBatchConfig, Cn = 0, je = null, Te = null, De = null, us = !1, Dr = !1, Yr = 0, Kh = 0;
function ze() {
  throw Error(W(321));
}
function Qo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function Ho(e, t, n, r, l, a) {
  if (Cn = a, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $l.current = e === null || e.memoizedState === null ? Xh : Zh, e = n(r, l), Dr) {
    a = 0;
    do {
      if (Dr = !1, Yr = 0, 25 <= a) throw Error(W(301));
      a += 1, De = Te = null, t.updateQueue = null, $l.current = Jh, e = n(r, l);
    } while (Dr);
  }
  if ($l.current = fs, t = Te !== null && Te.next !== null, Cn = 0, De = Te = je = null, us = !1, t) throw Error(W(300));
  return e;
}
function Ko() {
  var e = Yr !== 0;
  return Yr = 0, e;
}
function Ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? je.memoizedState = De = e : De = De.next = e, De;
}
function pt() {
  if (Te === null) {
    var e = je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = De === null ? je.memoizedState : De.next;
  if (t !== null) De = t, Te = e;
  else {
    if (e === null) throw Error(W(310));
    Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, De === null ? je.memoizedState = De = e : De = De.next = e;
  }
  return De;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oa(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = Te, l = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = a.next, a.next = o;
    }
    r.baseQueue = l = a, n.pending = null;
  }
  if (l !== null) {
    a = l.next, r = r.baseState;
    var i = o = null, c = null, d = a;
    do {
      var m = d.lane;
      if ((Cn & m) === m) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var y = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = y, o = r) : c = c.next = y, je.lanes |= m, Nn |= m;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, St(r, t.memoizedState) || (Ye = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, je.lanes |= a, Nn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ia(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== l);
    St(a, t.memoizedState) || (Ye = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function ou() {
}
function iu(e, t) {
  var n = je, r = pt(), l = t(), a = !St(r.memoizedState, l);
  if (a && (r.memoizedState = l, Ye = !0), r = r.queue, Go(uu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || De !== null && De.memoizedState.tag & 1) {
    if (n.flags |= 2048, Zr(9, du.bind(null, n, r, l, t), void 0, null), Re === null) throw Error(W(349));
    Cn & 30 || cu(n, t, l);
  }
  return l;
}
function cu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function du(e, t, n, r) {
  t.value = n, t.getSnapshot = r, fu(t) && mu(e);
}
function uu(e, t, n) {
  return n(function() {
    fu(t) && mu(e);
  });
}
function fu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function mu(e) {
  var t = Wt(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function lc(e) {
  var t = Ct();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Yh.bind(null, je, e), [t.memoizedState, e];
}
function Zr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function hu() {
  return pt().memoizedState;
}
function Ul(e, t, n, r) {
  var l = Ct();
  je.flags |= e, l.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Es(e, t, n, r) {
  var l = pt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Te !== null) {
    var o = Te.memoizedState;
    if (a = o.destroy, r !== null && Qo(r, o.deps)) {
      l.memoizedState = Zr(t, n, a, r);
      return;
    }
  }
  je.flags |= e, l.memoizedState = Zr(1 | t, n, a, r);
}
function sc(e, t) {
  return Ul(8390656, 8, e, t);
}
function Go(e, t) {
  return Es(2048, 8, e, t);
}
function pu(e, t) {
  return Es(4, 2, e, t);
}
function gu(e, t) {
  return Es(4, 4, e, t);
}
function yu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function vu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Es(4, 4, yu.bind(null, t, e), n);
}
function qo() {
}
function wu(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function xu(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function _u(e, t, n) {
  return Cn & 21 ? (St(n, t) || (n = Ed(), je.lanes |= n, Nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = n);
}
function Gh(e, t) {
  var n = ue;
  ue = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = aa.transition;
  aa.transition = {};
  try {
    e(!1), t();
  } finally {
    ue = n, aa.transition = r;
  }
}
function ku() {
  return pt().memoizedState;
}
function qh(e, t, n) {
  var r = on(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Su(e)) ju(t, n);
  else if (n = lu(e, t, n, r), n !== null) {
    var l = Be();
    kt(n, e, r, l), bu(n, t, r);
  }
}
function Yh(e, t, n) {
  var r = on(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Su(e)) ju(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, St(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Wo(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = lu(e, t, l, r), n !== null && (l = Be(), kt(n, e, r, l), bu(n, t, r));
  }
}
function Su(e) {
  var t = e.alternate;
  return e === je || t !== null && t === je;
}
function ju(e, t) {
  Dr = us = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function bu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Eo(e, n);
  }
}
var fs = { readContext: ht, useCallback: ze, useContext: ze, useEffect: ze, useImperativeHandle: ze, useInsertionEffect: ze, useLayoutEffect: ze, useMemo: ze, useReducer: ze, useRef: ze, useState: ze, useDebugValue: ze, useDeferredValue: ze, useTransition: ze, useMutableSource: ze, useSyncExternalStore: ze, useId: ze, unstable_isNewReconciler: !1 }, Xh = { readContext: ht, useCallback: function(e, t) {
  return Ct().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ht, useEffect: sc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ul(
    4194308,
    4,
    yu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ul(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ul(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ct();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ct();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = qh.bind(null, je, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ct();
  return e = { current: e }, t.memoizedState = e;
}, useState: lc, useDebugValue: qo, useDeferredValue: function(e) {
  return Ct().memoizedState = e;
}, useTransition: function() {
  var e = lc(!1), t = e[0];
  return e = Gh.bind(null, e[1]), Ct().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = je, l = Ct();
  if (_e) {
    if (n === void 0) throw Error(W(407));
    n = n();
  } else {
    if (n = t(), Re === null) throw Error(W(349));
    Cn & 30 || cu(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, sc(uu.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Zr(9, du.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Ct(), t = Re.identifierPrefix;
  if (_e) {
    var n = Ot, r = Pt;
    n = (r & ~(1 << 32 - _t(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Kh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Zh = {
  readContext: ht,
  useCallback: wu,
  useContext: ht,
  useEffect: Go,
  useImperativeHandle: vu,
  useInsertionEffect: pu,
  useLayoutEffect: gu,
  useMemo: xu,
  useReducer: oa,
  useRef: hu,
  useState: function() {
    return oa(Xr);
  },
  useDebugValue: qo,
  useDeferredValue: function(e) {
    var t = pt();
    return _u(t, Te.memoizedState, e);
  },
  useTransition: function() {
    var e = oa(Xr)[0], t = pt().memoizedState;
    return [e, t];
  },
  useMutableSource: ou,
  useSyncExternalStore: iu,
  useId: ku,
  unstable_isNewReconciler: !1
}, Jh = { readContext: ht, useCallback: wu, useContext: ht, useEffect: Go, useImperativeHandle: vu, useInsertionEffect: pu, useLayoutEffect: gu, useMemo: xu, useReducer: ia, useRef: hu, useState: function() {
  return ia(Xr);
}, useDebugValue: qo, useDeferredValue: function(e) {
  var t = pt();
  return Te === null ? t.memoizedState = e : _u(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = ia(Xr)[0], t = pt().memoizedState;
  return [e, t];
}, useMutableSource: ou, useSyncExternalStore: iu, useId: ku, unstable_isNewReconciler: !1 };
function yt(e, t) {
  if (e && e.defaultProps) {
    t = be({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ka(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : be({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Cs = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ln(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), l = on(e), a = At(r, l);
  a.payload = t, n != null && (a.callback = n), t = sn(e, a, l), t !== null && (kt(t, e, l, r), Wl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), l = on(e), a = At(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = sn(e, a, l), t !== null && (kt(t, e, l, r), Wl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), r = on(e), l = At(n, r);
  l.tag = 2, t != null && (l.callback = t), t = sn(e, l, r), t !== null && (kt(t, e, r, n), Wl(t, e, r));
} };
function ac(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Br(n, r) || !Br(l, a) : !0;
}
function Eu(e, t, n) {
  var r = !1, l = un, a = t.contextType;
  return typeof a == "object" && a !== null ? a = ht(a) : (l = Ze(t) ? bn : $e.current, r = t.contextTypes, a = (r = r != null) ? sr(e, l) : un), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Cs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function oc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Cs.enqueueReplaceState(t, t.state, null);
}
function Ga(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, $o(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = ht(a) : (a = Ze(t) ? bn : $e.current, l.context = sr(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ka(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Cs.enqueueReplaceState(l, l.state, null), cs(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function cr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Cm(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ca(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ep = typeof WeakMap == "function" ? WeakMap : Map;
function Cu(e, t, n) {
  n = At(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    hs || (hs = !0, so = r), qa(e, t);
  }, n;
}
function Nu(e, t, n) {
  n = At(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      qa(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    qa(e, t), typeof r != "function" && (an === null ? an = /* @__PURE__ */ new Set([this]) : an.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function ic(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ep();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = hp.bind(null, e, t, n), t.then(e, e));
}
function cc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dc(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = At(-1, 1), t.tag = 2, sn(n, t, 1))), n.lanes |= 1), e);
}
var tp = Vt.ReactCurrentOwner, Ye = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? ru(t, null, n, r) : or(t, e.child, n, r);
}
function uc(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return nr(t, l), r = Ho(e, t, n, r, a, l), n = Ko(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (_e && n && Ro(t), t.flags |= 1, Ve(e, t, r, l), t.child);
}
function fc(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !ri(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Mu(e, t, a, r, l)) : (e = Hl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Br, n(o, r) && e.ref === t.ref) return $t(e, t, l);
  }
  return t.flags |= 1, e = cn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Mu(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Br(a, r) && e.ref === t.ref) if (Ye = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ye = !0);
    else return t.lanes = e.lanes, $t(e, t, l);
  }
  return Ya(e, t, n, r, l);
}
function Iu(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, he(Xn, tt), tt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, he(Xn, tt), tt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, he(Xn, tt), tt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, he(Xn, tt), tt |= r;
  return Ve(e, t, l, n), t.child;
}
function Tu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ya(e, t, n, r, l) {
  var a = Ze(n) ? bn : $e.current;
  return a = sr(t, a), nr(t, l), n = Ho(e, t, n, r, a, l), r = Ko(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (_e && r && Ro(t), t.flags |= 1, Ve(e, t, n, l), t.child);
}
function mc(e, t, n, r, l) {
  if (Ze(n)) {
    var a = !0;
    ls(t);
  } else a = !1;
  if (nr(t, l), t.stateNode === null) Vl(e, t), Eu(t, n, r), Ga(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = ht(d) : (d = Ze(n) ? bn : $e.current, d = sr(t, d));
    var m = n.getDerivedStateFromProps, y = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    y || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && oc(t, o, r, d), qt = !1;
    var v = t.memoizedState;
    o.state = v, cs(t, r, o, l), c = t.memoizedState, i !== r || v !== c || Xe.current || qt ? (typeof m == "function" && (Ka(t, n, m, r), c = t.memoizedState), (i = qt || ac(t, n, i, r, v, c, d)) ? (y || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, su(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : yt(t.type, i), o.props = d, y = t.pendingProps, v = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = ht(c) : (c = Ze(n) ? bn : $e.current, c = sr(t, c));
    var x = n.getDerivedStateFromProps;
    (m = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== y || v !== c) && oc(t, o, r, c), qt = !1, v = t.memoizedState, o.state = v, cs(t, r, o, l);
    var g = t.memoizedState;
    i !== y || v !== g || Xe.current || qt ? (typeof x == "function" && (Ka(t, n, x, r), g = t.memoizedState), (d = qt || ac(t, n, d, r, v, g, c) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), o.props = r, o.state = g, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Xa(e, t, n, r, a, l);
}
function Xa(e, t, n, r, l, a) {
  Tu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Zi(t, n, !1), $t(e, t, a);
  r = t.stateNode, tp.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = or(t, e.child, null, a), t.child = or(t, null, i, a)) : Ve(e, t, i, a), t.memoizedState = r.state, l && Zi(t, n, !0), t.child;
}
function Lu(e) {
  var t = e.stateNode;
  t.pendingContext ? Xi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xi(e, t.context, !1), Uo(e, t.containerInfo);
}
function hc(e, t, n, r, l) {
  return ar(), Oo(l), t.flags |= 256, Ve(e, t, n, r), t.child;
}
var Za = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ja(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Du(e, t, n) {
  var r = t.pendingProps, l = Se.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), he(Se, l & 1), e === null)
    return Qa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Is(o, r, 0, null), e = jn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Ja(n), t.memoizedState = Za, e) : Yo(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return np(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = cn(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = cn(i, a) : (a = jn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Ja(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Za, r;
  }
  return a = e.child, e = a.sibling, r = cn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Yo(e, t) {
  return t = Is({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function El(e, t, n, r) {
  return r !== null && Oo(r), or(t, e.child, null, n), e = Yo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function np(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ca(Error(W(422))), El(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = Is({ mode: "visible", children: r.children }, l, 0, null), a = jn(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && or(t, e.child, null, o), t.child.memoizedState = Ja(o), t.memoizedState = Za, a);
  if (!(t.mode & 1)) return El(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(W(419)), r = ca(a, r, void 0), El(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Ye || i) {
    if (r = Re, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Wt(e, l), kt(r, e, l, -1));
    }
    return ni(), r = ca(Error(W(421))), El(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = pp.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, nt = ln(l.nextSibling), rt = t, _e = !0, wt = null, e !== null && (ct[dt++] = Pt, ct[dt++] = Ot, ct[dt++] = En, Pt = e.id, Ot = e.overflow, En = t), t = Yo(t, r.children), t.flags |= 4096, t);
}
function pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ha(e.return, t, n);
}
function da(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Ru(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Ve(e, t, r.children, n), r = Se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && pc(e, n, t);
      else if (e.tag === 19) pc(e, n, t);
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
  if (he(Se, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ds(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), da(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ds(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      da(t, !0, n, null, a);
      break;
    case "together":
      da(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Vl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Nn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(W(153));
  if (t.child !== null) {
    for (e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = cn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function rp(e, t, n) {
  switch (t.tag) {
    case 3:
      Lu(t), ar();
      break;
    case 5:
      au(t);
      break;
    case 1:
      Ze(t.type) && ls(t);
      break;
    case 4:
      Uo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      he(os, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (he(Se, Se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Du(e, t, n) : (he(Se, Se.current & 1), e = $t(e, t, n), e !== null ? e.sibling : null);
      he(Se, Se.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ru(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), he(Se, Se.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Iu(e, t, n);
  }
  return $t(e, t, n);
}
var Pu, eo, Ou, Au;
Pu = function(e, t) {
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
eo = function() {
};
Ou = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, kn(It.current);
    var a = null;
    switch (n) {
      case "input":
        l = ka(e, l), r = ka(e, r), a = [];
        break;
      case "select":
        l = be({}, l, { value: void 0 }), r = be({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = ba(e, l), r = ba(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ns);
    }
    Ca(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var i = l[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ar.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = l != null ? l[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Ar.hasOwnProperty(d) ? (c != null && d === "onScroll" && ve("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Au = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kr(e, t) {
  if (!_e) switch (e.tailMode) {
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
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function lp(e, t, n) {
  var r = t.pendingProps;
  switch (Po(t), t.tag) {
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
      return Fe(t), null;
    case 1:
      return Ze(t.type) && rs(), Fe(t), null;
    case 3:
      return r = t.stateNode, ir(), we(Xe), we($e), Bo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (jl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (io(wt), wt = null))), eo(e, t), Fe(t), null;
    case 5:
      Vo(t);
      var l = kn(qr.current);
      if (n = t.type, e !== null && t.stateNode != null) Ou(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(W(166));
          return Fe(t), null;
        }
        if (e = kn(It.current), jl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Nt] = t, r[Kr] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ve("cancel", r), ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ve("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cr.length; l++) ve(Cr[l], r);
              break;
            case "source":
              ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ve(
                "error",
                r
              ), ve("load", r);
              break;
            case "details":
              ve("toggle", r);
              break;
            case "input":
              ji(r, a), ve("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ve("invalid", r);
              break;
            case "textarea":
              Ei(r, a), ve("invalid", r);
          }
          Ca(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && Sl(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && Sl(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Ar.hasOwnProperty(o) && i != null && o === "onScroll" && ve("scroll", r);
          }
          switch (n) {
            case "input":
              pl(r), bi(r, a, !0);
              break;
            case "textarea":
              pl(r), Ci(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = ns);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ud(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Nt] = t, e[Kr] = r, Pu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Na(n, r), n) {
              case "dialog":
                ve("cancel", e), ve("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cr.length; l++) ve(Cr[l], e);
                l = r;
                break;
              case "source":
                ve("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                ve(
                  "error",
                  e
                ), ve("load", e), l = r;
                break;
              case "details":
                ve("toggle", e), l = r;
                break;
              case "input":
                ji(e, r), l = ka(e, r), ve("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = be({}, r, { value: void 0 }), ve("invalid", e);
                break;
              case "textarea":
                Ei(e, r), l = ba(e, r), ve("invalid", e);
                break;
              default:
                l = r;
            }
            Ca(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? hd(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && fd(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && zr(e, c) : typeof c == "number" && zr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ar.hasOwnProperty(a) ? c != null && a === "onScroll" && ve("scroll", e) : c != null && xo(e, a, c, o));
            }
            switch (n) {
              case "input":
                pl(e), bi(e, r, !1);
                break;
              case "textarea":
                pl(e), Ci(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Zn(e, !!r.multiple, a, !1) : r.defaultValue != null && Zn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ns);
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
      return Fe(t), null;
    case 6:
      if (e && t.stateNode != null) Au(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(W(166));
        if (n = kn(qr.current), kn(It.current), jl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Nt] = t, (a = r.nodeValue !== n) && (e = rt, e !== null)) switch (e.tag) {
            case 3:
              Sl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Sl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Nt] = t, t.stateNode = r;
      }
      return Fe(t), null;
    case 13:
      if (we(Se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (_e && nt !== null && t.mode & 1 && !(t.flags & 128)) tu(), ar(), t.flags |= 98560, a = !1;
        else if (a = jl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(W(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(W(317));
            a[Nt] = t;
          } else ar(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Fe(t), a = !1;
        } else wt !== null && (io(wt), wt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Se.current & 1 ? Le === 0 && (Le = 3) : ni())), t.updateQueue !== null && (t.flags |= 4), Fe(t), null);
    case 4:
      return ir(), eo(e, t), e === null && Qr(t.stateNode.containerInfo), Fe(t), null;
    case 10:
      return Fo(t.type._context), Fe(t), null;
    case 17:
      return Ze(t.type) && rs(), Fe(t), null;
    case 19:
      if (we(Se), a = t.memoizedState, a === null) return Fe(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) kr(a, !1);
      else {
        if (Le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = ds(e), o !== null) {
            for (t.flags |= 128, kr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return he(Se, Se.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ce() > dr && (t.flags |= 128, r = !0, kr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ds(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !_e) return Fe(t), null;
        } else 2 * Ce() - a.renderingStartTime > dr && n !== 1073741824 && (t.flags |= 128, r = !0, kr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ce(), t.sibling = null, n = Se.current, he(Se, r ? n & 1 | 2 : n & 1), t) : (Fe(t), null);
    case 22:
    case 23:
      return ti(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? tt & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, t.tag));
}
function sp(e, t) {
  switch (Po(t), t.tag) {
    case 1:
      return Ze(t.type) && rs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ir(), we(Xe), we($e), Bo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Vo(t), null;
    case 13:
      if (we(Se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(W(340));
        ar();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return we(Se), null;
    case 4:
      return ir(), null;
    case 10:
      return Fo(t.type._context), null;
    case 22:
    case 23:
      return ti(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cl = !1, We = !1, ap = typeof WeakSet == "function" ? WeakSet : Set, H = null;
function Yn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ee(e, t, r);
  }
  else n.current = null;
}
function to(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var gc = !1;
function op(e, t) {
  if (za = Jl, e = Ud(), Do(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, a = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, a.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, i = -1, c = -1, d = 0, m = 0, y = e, v = null;
        t: for (; ; ) {
          for (var x; y !== n || l !== 0 && y.nodeType !== 3 || (i = o + l), y !== a || r !== 0 && y.nodeType !== 3 || (c = o + r), y.nodeType === 3 && (o += y.nodeValue.length), (x = y.firstChild) !== null; )
            v = y, y = x;
          for (; ; ) {
            if (y === e) break t;
            if (v === n && ++d === l && (i = o), v === a && ++m === r && (c = o), (x = y.nextSibling) !== null) break;
            y = v, v = y.parentNode;
          }
          y = x;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fa = { focusedElem: e, selectionRange: n }, Jl = !1, H = t; H !== null; ) if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, H = e;
  else for (; H !== null; ) {
    t = H;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var _ = g.memoizedProps, k = g.memoizedState, f = t.stateNode, u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : yt(t.type, _), k);
            f.__reactInternalSnapshotBeforeUpdate = u;
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
          throw Error(W(163));
      }
    } catch (w) {
      Ee(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, H = e;
      break;
    }
    H = t.return;
  }
  return g = gc, gc = !1, g;
}
function Rr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && to(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ns(e, t) {
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
function no(e) {
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
function zu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, zu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nt], delete t[Kr], delete t[Ua], delete t[Vh], delete t[Bh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Fu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Fu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ro(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ns));
  else if (r !== 4 && (e = e.child, e !== null)) for (ro(e, t, n), e = e.sibling; e !== null; ) ro(e, t, n), e = e.sibling;
}
function lo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (lo(e, t, n), e = e.sibling; e !== null; ) lo(e, t, n), e = e.sibling;
}
var Pe = null, vt = !1;
function Kt(e, t, n) {
  for (n = n.child; n !== null; ) Wu(e, t, n), n = n.sibling;
}
function Wu(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function") try {
    Mt.onCommitFiberUnmount(xs, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      We || Yn(n, t);
    case 6:
      var r = Pe, l = vt;
      Pe = null, Kt(e, t, n), Pe = r, vt = l, Pe !== null && (vt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null && (vt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? ra(e.parentNode, n) : e.nodeType === 1 && ra(e, n), Ur(e)) : ra(Pe, n.stateNode));
      break;
    case 4:
      r = Pe, l = vt, Pe = n.stateNode.containerInfo, vt = !0, Kt(e, t, n), Pe = r, vt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!We && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && to(n, t, o), l = l.next;
        } while (l !== r);
      }
      Kt(e, t, n);
      break;
    case 1:
      if (!We && (Yn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ee(n, t, i);
      }
      Kt(e, t, n);
      break;
    case 21:
      Kt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (We = (r = We) || n.memoizedState !== null, Kt(e, t, n), We = r) : Kt(e, t, n);
      break;
    default:
      Kt(e, t, n);
  }
}
function vc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ap()), t.forEach(function(r) {
      var l = gp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function gt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Pe = i.stateNode, vt = !1;
            break e;
          case 3:
            Pe = i.stateNode.containerInfo, vt = !0;
            break e;
          case 4:
            Pe = i.stateNode.containerInfo, vt = !0;
            break e;
        }
        i = i.return;
      }
      if (Pe === null) throw Error(W(160));
      Wu(a, o, l), Pe = null, vt = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      Ee(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) $u(t, e), t = t.sibling;
}
function $u(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (gt(t, e), Et(e), r & 4) {
        try {
          Rr(3, e, e.return), Ns(3, e);
        } catch (_) {
          Ee(e, e.return, _);
        }
        try {
          Rr(5, e, e.return);
        } catch (_) {
          Ee(e, e.return, _);
        }
      }
      break;
    case 1:
      gt(t, e), Et(e), r & 512 && n !== null && Yn(n, n.return);
      break;
    case 5:
      if (gt(t, e), Et(e), r & 512 && n !== null && Yn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          zr(l, "");
        } catch (_) {
          Ee(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && cd(l, a), Na(i, o);
          var d = Na(i, a);
          for (o = 0; o < c.length; o += 2) {
            var m = c[o], y = c[o + 1];
            m === "style" ? hd(l, y) : m === "dangerouslySetInnerHTML" ? fd(l, y) : m === "children" ? zr(l, y) : xo(l, m, y, d);
          }
          switch (i) {
            case "input":
              Sa(l, a);
              break;
            case "textarea":
              dd(l, a);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? Zn(l, !!a.multiple, x, !1) : v !== !!a.multiple && (a.defaultValue != null ? Zn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Zn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Kr] = a;
        } catch (_) {
          Ee(e, e.return, _);
        }
      }
      break;
    case 6:
      if (gt(t, e), Et(e), r & 4) {
        if (e.stateNode === null) throw Error(W(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (_) {
          Ee(e, e.return, _);
        }
      }
      break;
    case 3:
      if (gt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ur(t.containerInfo);
      } catch (_) {
        Ee(e, e.return, _);
      }
      break;
    case 4:
      gt(t, e), Et(e);
      break;
    case 13:
      gt(t, e), Et(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (Jo = Ce())), r & 4 && vc(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (We = (d = We) || m, gt(t, e), We = d) : gt(t, e), Et(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1) for (H = e, m = e.child; m !== null; ) {
          for (y = H = m; H !== null; ) {
            switch (v = H, x = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rr(4, v, v.return);
                break;
              case 1:
                Yn(v, v.return);
                var g = v.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (_) {
                    Ee(r, n, _);
                  }
                }
                break;
              case 5:
                Yn(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  xc(y);
                  continue;
                }
            }
            x !== null ? (x.return = v, H = x) : xc(y);
          }
          m = m.sibling;
        }
        e: for (m = null, y = e; ; ) {
          if (y.tag === 5) {
            if (m === null) {
              m = y;
              try {
                l = y.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = y.stateNode, c = y.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = md("display", o));
              } catch (_) {
                Ee(e, e.return, _);
              }
            }
          } else if (y.tag === 6) {
            if (m === null) try {
              y.stateNode.nodeValue = d ? "" : y.memoizedProps;
            } catch (_) {
              Ee(e, e.return, _);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            m === y && (m = null), y = y.return;
          }
          m === y && (m = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      gt(t, e), Et(e), r & 4 && vc(e);
      break;
    case 21:
      break;
    default:
      gt(
        t,
        e
      ), Et(e);
  }
}
function Et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(W(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (zr(l, ""), r.flags &= -33);
          var a = yc(e);
          lo(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = yc(e);
          ro(e, i, o);
          break;
        default:
          throw Error(W(161));
      }
    } catch (c) {
      Ee(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ip(e, t, n) {
  H = e, Uu(e);
}
function Uu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null; ) {
    var l = H, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Cl;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || We;
        i = Cl;
        var d = We;
        if (Cl = o, (We = c) && !d) for (H = l; H !== null; ) o = H, c = o.child, o.tag === 22 && o.memoizedState !== null ? _c(l) : c !== null ? (c.return = o, H = c) : _c(l);
        for (; a !== null; ) H = a, Uu(a), a = a.sibling;
        H = l, Cl = i, We = d;
      }
      wc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, H = a) : wc(e);
  }
}
function wc(e) {
  for (; H !== null; ) {
    var t = H;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            We || Ns(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !We) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && rc(t, a, r);
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
              rc(t, o, n);
            }
            break;
          case 5:
            var i = t.stateNode;
            if (n === null && t.flags & 4) {
              n = i;
              var c = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c.autoFocus && n.focus();
                  break;
                case "img":
                  c.src && (n.src = c.src);
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
                var m = d.memoizedState;
                if (m !== null) {
                  var y = m.dehydrated;
                  y !== null && Ur(y);
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
            throw Error(W(163));
        }
        We || t.flags & 512 && no(t);
      } catch (v) {
        Ee(t, t.return, v);
      }
    }
    if (t === e) {
      H = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, H = n;
      break;
    }
    H = t.return;
  }
}
function xc(e) {
  for (; H !== null; ) {
    var t = H;
    if (t === e) {
      H = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, H = n;
      break;
    }
    H = t.return;
  }
}
function _c(e) {
  for (; H !== null; ) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ns(4, t);
          } catch (c) {
            Ee(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ee(t, l, c);
            }
          }
          var a = t.return;
          try {
            no(t);
          } catch (c) {
            Ee(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            no(t);
          } catch (c) {
            Ee(t, o, c);
          }
      }
    } catch (c) {
      Ee(t, t.return, c);
    }
    if (t === e) {
      H = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, H = i;
      break;
    }
    H = t.return;
  }
}
var cp = Math.ceil, ms = Vt.ReactCurrentDispatcher, Xo = Vt.ReactCurrentOwner, ft = Vt.ReactCurrentBatchConfig, ae = 0, Re = null, Me = null, Oe = 0, tt = 0, Xn = mn(0), Le = 0, Jr = null, Nn = 0, Ms = 0, Zo = 0, Pr = null, Ge = null, Jo = 0, dr = 1 / 0, Dt = null, hs = !1, so = null, an = null, Nl = !1, en = null, ps = 0, Or = 0, ao = null, Bl = -1, Ql = 0;
function Be() {
  return ae & 6 ? Ce() : Bl !== -1 ? Bl : Bl = Ce();
}
function on(e) {
  return e.mode & 1 ? ae & 2 && Oe !== 0 ? Oe & -Oe : Hh.transition !== null ? (Ql === 0 && (Ql = Ed()), Ql) : (e = ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Dd(e.type)), e) : 1;
}
function kt(e, t, n, r) {
  if (50 < Or) throw Or = 0, ao = null, Error(W(185));
  ol(e, n, r), (!(ae & 2) || e !== Re) && (e === Re && (!(ae & 2) && (Ms |= n), Le === 4 && Xt(e, Oe)), Je(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (dr = Ce() + 500, bs && hn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  Hm(e, t);
  var r = Zl(e, e === Re ? Oe : 0);
  if (r === 0) n !== null && Ii(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ii(n), t === 1) e.tag === 0 ? Qh(kc.bind(null, e)) : Zd(kc.bind(null, e)), $h(function() {
      !(ae & 6) && hn();
    }), n = null;
    else {
      switch (Cd(r)) {
        case 1:
          n = bo;
          break;
        case 4:
          n = jd;
          break;
        case 16:
          n = Xl;
          break;
        case 536870912:
          n = bd;
          break;
        default:
          n = Xl;
      }
      n = Yu(n, Vu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Vu(e, t) {
  if (Bl = -1, Ql = 0, ae & 6) throw Error(W(327));
  var n = e.callbackNode;
  if (rr() && e.callbackNode !== n) return null;
  var r = Zl(e, e === Re ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gs(e, r);
  else {
    t = r;
    var l = ae;
    ae |= 2;
    var a = Qu();
    (Re !== e || Oe !== t) && (Dt = null, dr = Ce() + 500, Sn(e, t));
    do
      try {
        fp();
        break;
      } catch (i) {
        Bu(e, i);
      }
    while (!0);
    zo(), ms.current = a, ae = l, Me !== null ? t = 0 : (Re = null, Oe = 0, t = Le);
  }
  if (t !== 0) {
    if (t === 2 && (l = Da(e), l !== 0 && (r = l, t = oo(e, l))), t === 1) throw n = Jr, Sn(e, 0), Xt(e, r), Je(e, Ce()), n;
    if (t === 6) Xt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !dp(l) && (t = gs(e, r), t === 2 && (a = Da(e), a !== 0 && (r = a, t = oo(e, a))), t === 1)) throw n = Jr, Sn(e, 0), Xt(e, r), Je(e, Ce()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          wn(e, Ge, Dt);
          break;
        case 3:
          if (Xt(e, r), (r & 130023424) === r && (t = Jo + 500 - Ce(), 10 < t)) {
            if (Zl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Be(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = $a(wn.bind(null, e, Ge, Dt), t);
            break;
          }
          wn(e, Ge, Dt);
          break;
        case 4:
          if (Xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - _t(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = Ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = $a(wn.bind(null, e, Ge, Dt), r);
            break;
          }
          wn(e, Ge, Dt);
          break;
        case 5:
          wn(e, Ge, Dt);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return Je(e, Ce()), e.callbackNode === n ? Vu.bind(null, e) : null;
}
function oo(e, t) {
  var n = Pr;
  return e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256), e = gs(e, t), e !== 2 && (t = Ge, Ge = n, t !== null && io(t)), e;
}
function io(e) {
  Ge === null ? Ge = e : Ge.push.apply(Ge, e);
}
function dp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!St(a(), l)) return !1;
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
function Xt(e, t) {
  for (t &= ~Zo, t &= ~Ms, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - _t(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function kc(e) {
  if (ae & 6) throw Error(W(327));
  rr();
  var t = Zl(e, 0);
  if (!(t & 1)) return Je(e, Ce()), null;
  var n = gs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Da(e);
    r !== 0 && (t = r, n = oo(e, r));
  }
  if (n === 1) throw n = Jr, Sn(e, 0), Xt(e, t), Je(e, Ce()), n;
  if (n === 6) throw Error(W(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, wn(e, Ge, Dt), Je(e, Ce()), null;
}
function ei(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (dr = Ce() + 500, bs && hn());
  }
}
function Mn(e) {
  en !== null && en.tag === 0 && !(ae & 6) && rr();
  var t = ae;
  ae |= 1;
  var n = ft.transition, r = ue;
  try {
    if (ft.transition = null, ue = 1, e) return e();
  } finally {
    ue = r, ft.transition = n, ae = t, !(ae & 6) && hn();
  }
}
function ti() {
  tt = Xn.current, we(Xn);
}
function Sn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Wh(n)), Me !== null) for (n = Me.return; n !== null; ) {
    var r = n;
    switch (Po(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && rs();
        break;
      case 3:
        ir(), we(Xe), we($e), Bo();
        break;
      case 5:
        Vo(r);
        break;
      case 4:
        ir();
        break;
      case 13:
        we(Se);
        break;
      case 19:
        we(Se);
        break;
      case 10:
        Fo(r.type._context);
        break;
      case 22:
      case 23:
        ti();
    }
    n = n.return;
  }
  if (Re = e, Me = e = cn(e.current, null), Oe = tt = t, Le = 0, Jr = null, Zo = Ms = Nn = 0, Ge = Pr = null, _n !== null) {
    for (t = 0; t < _n.length; t++) if (n = _n[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = l, r.next = o;
      }
      n.pending = r;
    }
    _n = null;
  }
  return e;
}
function Bu(e, t) {
  do {
    var n = Me;
    try {
      if (zo(), $l.current = fs, us) {
        for (var r = je.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        us = !1;
      }
      if (Cn = 0, De = Te = je = null, Dr = !1, Yr = 0, Xo.current = null, n === null || n.return === null) {
        Le = 1, Jr = t, Me = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Oe, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, m = i, y = m.tag;
          if (!(m.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var v = m.alternate;
            v ? (m.updateQueue = v.updateQueue, m.memoizedState = v.memoizedState, m.lanes = v.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var x = cc(o);
          if (x !== null) {
            x.flags &= -257, dc(x, o, i, a, t), x.mode & 1 && ic(a, d, t), t = x, c = d;
            var g = t.updateQueue;
            if (g === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(c), t.updateQueue = _;
            } else g.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              ic(a, d, t), ni();
              break e;
            }
            c = Error(W(426));
          }
        } else if (_e && i.mode & 1) {
          var k = cc(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), dc(k, o, i, a, t), Oo(cr(c, i));
            break e;
          }
        }
        a = c = cr(c, i), Le !== 4 && (Le = 2), Pr === null ? Pr = [a] : Pr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = Cu(a, c, t);
              nc(a, f);
              break e;
            case 1:
              i = c;
              var u = a.type, p = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (an === null || !an.has(p)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var w = Nu(a, i, t);
                nc(a, w);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Ku(n);
    } catch (j) {
      t = j, Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Qu() {
  var e = ms.current;
  return ms.current = fs, e === null ? fs : e;
}
function ni() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4), Re === null || !(Nn & 268435455) && !(Ms & 268435455) || Xt(Re, Oe);
}
function gs(e, t) {
  var n = ae;
  ae |= 2;
  var r = Qu();
  (Re !== e || Oe !== t) && (Dt = null, Sn(e, t));
  do
    try {
      up();
      break;
    } catch (l) {
      Bu(e, l);
    }
  while (!0);
  if (zo(), ae = n, ms.current = r, Me !== null) throw Error(W(261));
  return Re = null, Oe = 0, Le;
}
function up() {
  for (; Me !== null; ) Hu(Me);
}
function fp() {
  for (; Me !== null && !Am(); ) Hu(Me);
}
function Hu(e) {
  var t = qu(e.alternate, e, tt);
  e.memoizedProps = e.pendingProps, t === null ? Ku(e) : Me = t, Xo.current = null;
}
function Ku(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = sp(n, t), n !== null) {
        n.flags &= 32767, Me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Le = 6, Me = null;
        return;
      }
    } else if (n = lp(n, t, tt), n !== null) {
      Me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function wn(e, t, n) {
  var r = ue, l = ft.transition;
  try {
    ft.transition = null, ue = 1, mp(e, t, n, r);
  } finally {
    ft.transition = l, ue = r;
  }
  return null;
}
function mp(e, t, n, r) {
  do
    rr();
  while (en !== null);
  if (ae & 6) throw Error(W(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(W(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Km(e, a), e === Re && (Me = Re = null, Oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Nl || (Nl = !0, Yu(Xl, function() {
    return rr(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = ft.transition, ft.transition = null;
    var o = ue;
    ue = 1;
    var i = ae;
    ae |= 4, Xo.current = null, op(e, n), $u(n, e), Dh(Fa), Jl = !!za, Fa = za = null, e.current = n, ip(n), zm(), ae = i, ue = o, ft.transition = a;
  } else e.current = n;
  if (Nl && (Nl = !1, en = e, ps = l), a = e.pendingLanes, a === 0 && (an = null), $m(n.stateNode), Je(e, Ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (hs) throw hs = !1, e = so, so = null, e;
  return ps & 1 && e.tag !== 0 && rr(), a = e.pendingLanes, a & 1 ? e === ao ? Or++ : (Or = 0, ao = e) : Or = 0, hn(), null;
}
function rr() {
  if (en !== null) {
    var e = Cd(ps), t = ft.transition, n = ue;
    try {
      if (ft.transition = null, ue = 16 > e ? 16 : e, en === null) var r = !1;
      else {
        if (e = en, en = null, ps = 0, ae & 6) throw Error(W(331));
        var l = ae;
        for (ae |= 4, H = e.current; H !== null; ) {
          var a = H, o = a.child;
          if (H.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (H = d; H !== null; ) {
                  var m = H;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, m, a);
                  }
                  var y = m.child;
                  if (y !== null) y.return = m, H = y;
                  else for (; H !== null; ) {
                    m = H;
                    var v = m.sibling, x = m.return;
                    if (zu(m), m === d) {
                      H = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = x, H = v;
                      break;
                    }
                    H = x;
                  }
                }
              }
              var g = a.alternate;
              if (g !== null) {
                var _ = g.child;
                if (_ !== null) {
                  g.child = null;
                  do {
                    var k = _.sibling;
                    _.sibling = null, _ = k;
                  } while (_ !== null);
                }
              }
              H = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, H = o;
          else e: for (; H !== null; ) {
            if (a = H, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                Rr(9, a, a.return);
            }
            var f = a.sibling;
            if (f !== null) {
              f.return = a.return, H = f;
              break e;
            }
            H = a.return;
          }
        }
        var u = e.current;
        for (H = u; H !== null; ) {
          o = H;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, H = p;
          else e: for (o = u; H !== null; ) {
            if (i = H, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Ns(9, i);
              }
            } catch (j) {
              Ee(i, i.return, j);
            }
            if (i === o) {
              H = null;
              break e;
            }
            var w = i.sibling;
            if (w !== null) {
              w.return = i.return, H = w;
              break e;
            }
            H = i.return;
          }
        }
        if (ae = l, hn(), Mt && typeof Mt.onPostCommitFiberRoot == "function") try {
          Mt.onPostCommitFiberRoot(xs, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ue = n, ft.transition = t;
    }
  }
  return !1;
}
function Sc(e, t, n) {
  t = cr(n, t), t = Cu(e, t, 1), e = sn(e, t, 1), t = Be(), e !== null && (ol(e, 1, t), Je(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Sc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Sc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (an === null || !an.has(r))) {
        e = cr(n, e), e = Nu(t, e, 1), t = sn(t, e, 1), e = Be(), t !== null && (ol(t, 1, e), Je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function hp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, Re === e && (Oe & n) === n && (Le === 4 || Le === 3 && (Oe & 130023424) === Oe && 500 > Ce() - Jo ? Sn(e, 0) : Zo |= n), Je(e, t);
}
function Gu(e, t) {
  t === 0 && (e.mode & 1 ? (t = vl, vl <<= 1, !(vl & 130023424) && (vl = 4194304)) : t = 1);
  var n = Be();
  e = Wt(e, t), e !== null && (ol(e, t, n), Je(e, n));
}
function pp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Gu(e, n);
}
function gp(e, t) {
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
      throw Error(W(314));
  }
  r !== null && r.delete(t), Gu(e, n);
}
var qu;
qu = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) Ye = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ye = !1, rp(e, t, n);
    Ye = !!(e.flags & 131072);
  }
  else Ye = !1, _e && t.flags & 1048576 && Jd(t, as, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Vl(e, t), e = t.pendingProps;
      var l = sr(t, $e.current);
      nr(t, n), l = Ho(null, t, r, e, l, n);
      var a = Ko();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ze(r) ? (a = !0, ls(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, $o(t), l.updater = Cs, t.stateNode = l, l._reactInternals = t, Ga(t, r, e, n), t = Xa(null, t, r, !0, a, n)) : (t.tag = 0, _e && a && Ro(t), Ve(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Vl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = vp(r), e = yt(r, e), l) {
          case 0:
            t = Ya(null, t, r, e, n);
            break e;
          case 1:
            t = mc(null, t, r, e, n);
            break e;
          case 11:
            t = uc(null, t, r, e, n);
            break e;
          case 14:
            t = fc(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(W(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : yt(r, l), Ya(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : yt(r, l), mc(e, t, r, l, n);
    case 3:
      e: {
        if (Lu(t), e === null) throw Error(W(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, su(e, t), cs(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = cr(Error(W(423)), t), t = hc(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = cr(Error(W(424)), t), t = hc(e, t, r, n, l);
          break e;
        } else for (nt = ln(t.stateNode.containerInfo.firstChild), rt = t, _e = !0, wt = null, n = ru(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ar(), r === l) {
            t = $t(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return au(t), e === null && Qa(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, Wa(r, l) ? o = null : a !== null && Wa(r, a) && (t.flags |= 32), Tu(e, t), Ve(e, t, o, n), t.child;
    case 6:
      return e === null && Qa(t), null;
    case 13:
      return Du(e, t, n);
    case 4:
      return Uo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = or(t, null, r, n) : Ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : yt(r, l), uc(e, t, r, l, n);
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, he(os, r._currentValue), r._currentValue = o, a !== null) if (St(a.value, o)) {
          if (a.children === l.children && !Xe.current) {
            t = $t(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var i = a.dependencies;
          if (i !== null) {
            o = a.child;
            for (var c = i.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = At(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var m = d.pending;
                    m === null ? c.next = c : (c.next = m.next, m.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Ha(
                  a.return,
                  n,
                  t
                ), i.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (o = a.return, o === null) throw Error(W(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Ha(o, n, t), o = a.sibling;
          } else o = a.child;
          if (o !== null) o.return = a;
          else for (o = a; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (a = o.sibling, a !== null) {
              a.return = o.return, o = a;
              break;
            }
            o = o.return;
          }
          a = o;
        }
        Ve(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, nr(t, n), l = ht(l), r = r(l), t.flags |= 1, Ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = yt(r, t.pendingProps), l = yt(r.type, l), fc(e, t, r, l, n);
    case 15:
      return Mu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : yt(r, l), Vl(e, t), t.tag = 1, Ze(r) ? (e = !0, ls(t)) : e = !1, nr(t, n), Eu(t, r, l), Ga(t, r, l, n), Xa(null, t, r, !0, e, n);
    case 19:
      return Ru(e, t, n);
    case 22:
      return Iu(e, t, n);
  }
  throw Error(W(156, t.tag));
};
function Yu(e, t) {
  return Sd(e, t);
}
function yp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new yp(e, t, n, r);
}
function ri(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function vp(e) {
  if (typeof e == "function") return ri(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ko) return 11;
    if (e === So) return 14;
  }
  return 2;
}
function cn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Hl(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") ri(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case $n:
      return jn(n.children, l, a, t);
    case _o:
      o = 8, l |= 8;
      break;
    case va:
      return e = ut(12, n, t, l | 2), e.elementType = va, e.lanes = a, e;
    case wa:
      return e = ut(13, n, t, l), e.elementType = wa, e.lanes = a, e;
    case xa:
      return e = ut(19, n, t, l), e.elementType = xa, e.lanes = a, e;
    case ad:
      return Is(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ld:
          o = 10;
          break e;
        case sd:
          o = 9;
          break e;
        case ko:
          o = 11;
          break e;
        case So:
          o = 14;
          break e;
        case Gt:
          o = 16, r = null;
          break e;
      }
      throw Error(W(130, e == null ? e : typeof e, ""));
  }
  return t = ut(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function jn(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function Is(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = ad, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ua(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function fa(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function wp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hs(0), this.expirationTimes = Hs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hs(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function li(e, t, n, r, l, a, o, i, c) {
  return e = new wp(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ut(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $o(a), e;
}
function xp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Wn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Xu(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (Ln(e) !== e || e.tag !== 1) throw Error(W(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(W(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return Xd(e, n, t);
  }
  return t;
}
function Zu(e, t, n, r, l, a, o, i, c) {
  return e = li(n, r, !0, e, l, a, o, i, c), e.context = Xu(null), n = e.current, r = Be(), l = on(n), a = At(r, l), a.callback = t ?? null, sn(n, a, l), e.current.lanes = l, ol(e, l, r), Je(e, r), e;
}
function Ts(e, t, n, r) {
  var l = t.current, a = Be(), o = on(l);
  return n = Xu(n), t.context === null ? t.context = n : t.pendingContext = n, t = At(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = sn(l, t, o), e !== null && (kt(e, l, o, a), Wl(e, l, o)), o;
}
function ys(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function si(e, t) {
  jc(e, t), (e = e.alternate) && jc(e, t);
}
function _p() {
  return null;
}
var Ju = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ai(e) {
  this._internalRoot = e;
}
Ls.prototype.render = ai.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(W(409));
  Ts(e, t, null, null);
};
Ls.prototype.unmount = ai.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mn(function() {
      Ts(null, e, null, null);
    }), t[Ft] = null;
  }
};
function Ls(e) {
  this._internalRoot = e;
}
Ls.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Id();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++) ;
    Yt.splice(n, 0, e), n === 0 && Ld(e);
  }
};
function oi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ds(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function bc() {
}
function kp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = ys(o);
        a.call(d);
      };
    }
    var o = Zu(t, r, e, 0, null, !1, !1, "", bc);
    return e._reactRootContainer = o, e[Ft] = o.current, Qr(e.nodeType === 8 ? e.parentNode : e), Mn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = ys(c);
      i.call(d);
    };
  }
  var c = li(e, 0, !1, null, null, !1, !1, "", bc);
  return e._reactRootContainer = c, e[Ft] = c.current, Qr(e.nodeType === 8 ? e.parentNode : e), Mn(function() {
    Ts(t, c, n, r);
  }), c;
}
function Rs(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var c = ys(o);
        i.call(c);
      };
    }
    Ts(t, o, e, l);
  } else o = kp(n, t, e, l, r);
  return ys(o);
}
Nd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Er(t.pendingLanes);
        n !== 0 && (Eo(t, n | 1), Je(t, Ce()), !(ae & 6) && (dr = Ce() + 500, hn()));
      }
      break;
    case 13:
      Mn(function() {
        var r = Wt(e, 1);
        if (r !== null) {
          var l = Be();
          kt(r, e, 1, l);
        }
      }), si(e, 1);
  }
};
Co = function(e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = Be();
      kt(t, e, 134217728, n);
    }
    si(e, 134217728);
  }
};
Md = function(e) {
  if (e.tag === 13) {
    var t = on(e), n = Wt(e, t);
    if (n !== null) {
      var r = Be();
      kt(n, e, t, r);
    }
    si(e, t);
  }
};
Id = function() {
  return ue;
};
Td = function(e, t) {
  var n = ue;
  try {
    return ue = e, t();
  } finally {
    ue = n;
  }
};
Ia = function(e, t, n) {
  switch (t) {
    case "input":
      if (Sa(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = js(r);
            if (!l) throw Error(W(90));
            id(r), Sa(r, l);
          }
        }
      }
      break;
    case "textarea":
      dd(e, n);
      break;
    case "select":
      t = n.value, t != null && Zn(e, !!n.multiple, t, !1);
  }
};
yd = ei;
vd = Mn;
var Sp = { usingClientEntryPoint: !1, Events: [cl, Qn, js, pd, gd, ei] }, Sr = { findFiberByHostInstance: xn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, jp = { bundleType: Sr.bundleType, version: Sr.version, rendererPackageName: Sr.rendererPackageName, rendererConfig: Sr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = _d(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Sr.findFiberByHostInstance || _p, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ml.isDisabled && Ml.supportsFiber) try {
    xs = Ml.inject(jp), Mt = Ml;
  } catch {
  }
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
st.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oi(t)) throw Error(W(200));
  return xp(e, t, null, n);
};
st.createRoot = function(e, t) {
  if (!oi(e)) throw Error(W(299));
  var n = !1, r = "", l = Ju;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = li(e, 1, !1, null, null, n, !1, r, l), e[Ft] = t.current, Qr(e.nodeType === 8 ? e.parentNode : e), new ai(t);
};
st.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(W(188)) : (e = Object.keys(e).join(","), Error(W(268, e)));
  return e = _d(t), e = e === null ? null : e.stateNode, e;
};
st.flushSync = function(e) {
  return Mn(e);
};
st.hydrate = function(e, t, n) {
  if (!Ds(t)) throw Error(W(200));
  return Rs(null, e, t, !0, n);
};
st.hydrateRoot = function(e, t, n) {
  if (!oi(e)) throw Error(W(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = Ju;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Zu(t, null, e, 1, n ?? null, l, !1, a, o), e[Ft] = t.current, Qr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ls(t);
};
st.render = function(e, t, n) {
  if (!Ds(t)) throw Error(W(200));
  return Rs(null, e, t, !1, n);
};
st.unmountComponentAtNode = function(e) {
  if (!Ds(e)) throw Error(W(40));
  return e._reactRootContainer ? (Mn(function() {
    Rs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ft] = null;
    });
  }), !0) : !1;
};
st.unstable_batchedUpdates = ei;
st.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ds(n)) throw Error(W(200));
  if (e == null || e._reactInternals === void 0) throw Error(W(38));
  return Rs(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function ef() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ef);
    } catch (e) {
      console.error(e);
    }
}
ef(), ed.exports = st;
var de = ed.exports, tf, Ec = de;
tf = Ec.createRoot, Ec.hydrateRoot;
var nf = { exports: {} }, Ps = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bp = h, Ep = Symbol.for("react.element"), Cp = Symbol.for("react.fragment"), Np = Object.prototype.hasOwnProperty, Mp = bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function rf(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Np.call(t, r) && !Ip.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Ep, type: e, key: a, ref: o, props: l, _owner: Mp.current };
}
Ps.Fragment = Cp;
Ps.jsx = rf;
Ps.jsxs = rf;
nf.exports = Ps;
var s = nf.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Tp = {
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
const Lp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), X = (e, t) => {
  const n = h.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, m) => h.createElement(
      "svg",
      {
        ref: m,
        ...Tp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${Lp(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([y, v]) => h.createElement(y, v)),
        ...Array.isArray(c) ? c : [c]
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
const lf = X("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = X("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sf = X("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = X("ArrowUpDown", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const af = X("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = X("Box", [
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
const Op = X("Calendar", [
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
const Ap = X("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ii = X("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = X("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const of = X("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = X("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = X("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = X("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = X("Download", [
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
const $p = X("Eraser", [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya"
    }
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const di = X("FileJson", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = X("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = X("Folder", [
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
const Bp = X("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qp = X("Lasso", [
  ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
  [
    "path",
    {
      d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",
      key: "146dds"
    }
  ],
  ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cf = X("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = X("LayoutList", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["path", { d: "M14 4h7", key: "3xa0d5" }],
  ["path", { d: "M14 9h7", key: "1icrd9" }],
  ["path", { d: "M14 15h7", key: "1mj8o2" }],
  ["path", { d: "M14 20h7", key: "11slyb" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = X("Link2Off", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
  ["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
  ["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = X("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cc = X("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = X("Maximize", [
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
const Yp = X("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xp = X("Minimize", [
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
const Zp = X("MoreVertical", [
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
const Jp = X("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = X("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = X("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = X("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = X("RefreshCw", [
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
const eg = X("ScanLine", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = X("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = X("Settings", [
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
const ff = X("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = X("Star", [
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
const tg = X("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pr = X("Tag", [
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
const Ut = X("Trash2", [
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
const ng = X("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = X("Type", [
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
const lg = X("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sg = X("Upload", [
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
const ag = X("Workflow", [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = X("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = X("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ig = X("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = ee;
async function se(e) {
  if (!e.ok) {
    let n = `API error: ${e.status} ${e.statusText}`;
    try {
      const r = await e.json();
      r != null && r.error && (n = r.error);
    } catch {
    }
    throw new Error(n);
  }
  const t = await e.json();
  if (!t.success)
    throw new Error(t.error || t.message || "Unknown error");
  return t.data;
}
const cg = async () => {
  const e = await ee.fetchApi("/meld/home-dir");
  return (await se(e)).home;
}, Ue = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  h.useEffect(() => {
    if (!t) return;
    const r = (l) => {
      l.key === "Escape" && (l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let vs = !1;
const dg = (e) => {
  vs = e, vs && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, ug = (...e) => {
  vs && console.log("[Meld]", ...e);
}, fg = (...e) => {
  vs && console.warn("[Meld]", ...e);
}, mg = (...e) => {
  console.error("[Meld]", ...e);
}, Y = {
  log: ug,
  warn: fg,
  error: mg,
  init: dg
}, Kl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await ee.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return se(a);
}, mf = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/details`);
  return se(t);
}, hg = async (e, t = !1) => {
  const n = await ee.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await se(n);
}, ui = async (e) => {
  const t = await ee.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return se(t);
}, hf = async (e) => {
  const t = await ee.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return se(t);
}, Nc = async (e, t) => {
  const n = await ee.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await se(n);
}, pg = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await ee.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await se(r);
  } catch {
    return [];
  }
}, fi = async (e) => {
  const t = await ee.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await se(t);
  } catch {
    return [];
  }
}, gg = async (e, t) => {
  const n = await ee.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await se(n);
}, yg = async (e, t) => {
  const n = await ee.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return se(n);
}, co = async (e, t, n) => {
  const r = await ee.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await se(r);
}, vg = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/workflow`);
  return se(t);
}, wg = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/snapshot_data`);
  return se(t);
}, xg = async (e, t) => {
  const n = await ee.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error("Failed to download ZIP");
  const r = await n.blob(), l = window.URL.createObjectURL(r), a = document.createElement("a");
  a.href = l, a.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(l), document.body.removeChild(a);
}, _g = async (e, t) => {
  const n = await ee.fetchApi("/meld/api/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error(`Failed to download image ${e}`);
  const r = n.headers.get("Content-Disposition");
  let l = `image_${e}.png`;
  if (r != null && r.includes("filename=")) {
    const c = r.match(/filename="?([^"]+)"?/);
    c != null && c[1] && (l = c[1]);
  }
  const a = await n.blob(), o = window.URL.createObjectURL(a), i = document.createElement("a");
  i.href = o, i.download = l, document.body.appendChild(i), i.click(), window.URL.revokeObjectURL(o), document.body.removeChild(i);
}, kg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await ee.fetchApi(n);
  return se(r);
}, Sg = async () => {
  const e = await ee.fetchApi("/meld/search-suggestions");
  return se(e);
}, jg = async () => {
  const e = await ee.fetchApi("/meld/search-keywords");
  return se(e);
}, bg = async () => {
  const e = await ee.fetchApi("/meld/search-config");
  return se(e);
}, Eg = async () => {
  const e = await ee.fetchApi("/meld/favorites");
  return se(e);
}, Cg = async (e, t) => {
  const n = await ee.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await se(n);
}, Mc = async (e) => {
  const t = await ee.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await se(t);
}, Ng = async (e, t, n) => {
  const r = await ee.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await se(r);
}, Mg = {
  dev_mode: !1,
  "gallery.show_parent_image": !0,
  "gallery.show_parent_images": !1,
  "sidebar.show_filename": "filename",
  "sidebar.show_dimensions": !0,
  "sidebar.show_created_at": !1,
  "sidebar.show_model_name": !0,
  "sidebar.show_positive_prompt": !0,
  "sidebar.show_negative_prompt": !1,
  "sidebar.show_user_notes": "always",
  "sidebar.show_tags": !0,
  "sidebar.thumbnail_size": 100,
  "search.quick_suggestions": !0,
  "search.input_suggest": !0,
  "viewer.loop": !0,
  "fullscreen.show_icons": !0,
  "fullscreen.loop": !0,
  "fullscreen.show_details_by_default": !0,
  "fullscreen.details.show_filename": "filename",
  "fullscreen.details.show_dimensions": !0,
  "fullscreen.details.show_created_at": !0,
  "fullscreen.details.show_tags": !0,
  "fullscreen.details.show_model_name": !0,
  "fullscreen.details.show_positive_prompt": !0,
  "fullscreen.details.show_negative_prompt": !0,
  "fullscreen.details.show_user_notes": "always",
  "fullscreen.details.show_source": !0,
  "fullscreen.details.max_positive_prompt_lines": 7,
  "fullscreen.details.max_negative_prompt_lines": 7,
  "viewer.show_details_by_default": !0,
  "viewer.details.show_filename": "filename",
  "viewer.details.show_dimensions": !0,
  "viewer.details.show_created_at": !0,
  "viewer.details.show_tags": !0,
  "viewer.details.show_model_name": !0,
  "viewer.details.show_positive_prompt": !0,
  "viewer.details.show_negative_prompt": !0,
  "viewer.details.show_user_notes": "always",
  "viewer.details.show_source": !0,
  "viewer.details.max_positive_prompt_lines": 7,
  "viewer.details.max_negative_prompt_lines": 7,
  "gallery.initial_load_count": 100,
  "gallery.max_load_count": 1e4,
  "viewer.thumbnail_window_size": 15,
  "viewer.show_thumbnails": !0,
  "viewer.show_icons": !0,
  "viewer.delete_mode": "confirm",
  "viewer.small_image_mode": "fit",
  "fullscreen.delete_mode": "confirm",
  "fullscreen.small_image_mode": "fit",
  "gallery.matching_strategy": "phash_created",
  "gallery.lineage_max_depth": 5,
  "gallery.trash_retention_days": 30,
  "gallery.trash.show_missing": !1,
  "gallery.view_mode": "grid_details",
  "gallery.suggest_phash_threshold": 82,
  "gallery.auto_link_phash_threshold": 92,
  "gallery.inherit_tags": !0,
  "viewer.shortcut.1": "tag:keep next",
  "viewer.shortcut.2": "tag:best next",
  "viewer.shortcut.3": "tag:fix-needed next",
  "viewer.shortcut.4": "",
  "viewer.shortcut.5": "",
  "viewer.shortcut.6": "",
  "viewer.shortcut.7": "",
  "viewer.shortcut.8": "",
  "viewer.shortcut.9": "",
  "viewer.shortcut.0": "",
  "viewer.shortcut.show_cheat_sheet": !0,
  "gallery.quick_shortcut.1": "add_unified_loader",
  "gallery.quick_shortcut.2": "",
  "gallery.quick_shortcut.3": "",
  "search.show_all_keywords": !0
}, pf = async () => {
  let e;
  try {
    const t = await ee.fetchApi("/meld/settings");
    e = await se(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), Mg;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Ig = async (e, t) => {
  const n = await ee.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await se(n);
}, Tg = async () => {
  const e = await ee.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return se(e);
}, Ic = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, m) => {
    const y = typeof d == "function" ? d(t) : d;
    if (!Object.is(y, t)) {
      const v = t;
      t = m ?? (typeof y != "object" || y === null) ? y : Object.assign({}, t, y), n.forEach((x) => x(t, v));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, Lg = (e) => e ? Ic(e) : Ic, Dg = (e) => e;
function Rg(e, t = Dg) {
  const n = Zt.useSyncExternalStore(
    e.subscribe,
    Zt.useCallback(() => t(e.getState()), [e, t]),
    Zt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Zt.useDebugValue(n), n;
}
const Pg = (e) => {
  const t = Lg(e), n = (r) => Rg(t, r);
  return Object.assign(n, t), n;
}, Og = (e) => Pg;
function Ag(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (l) => {
      var a;
      const o = (c) => c === null ? null : JSON.parse(c, void 0), i = (a = n.getItem(l)) != null ? a : null;
      return i instanceof Promise ? i.then(o) : o(i);
    },
    setItem: (l, a) => n.setItem(l, JSON.stringify(a, void 0)),
    removeItem: (l) => n.removeItem(l)
  };
}
const uo = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return uo(r)(n);
      },
      catch(r) {
        return this;
      }
    };
  } catch (n) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return uo(r)(n);
      }
    };
  }
}, zg = (e, t) => (n, r, l) => {
  let a = {
    storage: Ag(() => window.localStorage),
    partialize: (k) => k,
    version: 0,
    merge: (k, f) => ({
      ...f,
      ...k
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let m = a.storage;
  if (!m)
    return e(
      (...k) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...k);
      },
      r,
      l
    );
  const y = () => {
    const k = a.partialize({ ...r() });
    return m.setItem(a.name, {
      state: k,
      version: a.version
    });
  }, v = l.setState;
  l.setState = (k, f) => (v(k, f), y());
  const x = e(
    (...k) => (n(...k), y()),
    r,
    l
  );
  l.getInitialState = () => x;
  let g;
  const _ = () => {
    var k, f;
    if (!m) return;
    const u = ++i;
    o = !1, c.forEach((w) => {
      var j;
      return w((j = r()) != null ? j : x);
    });
    const p = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (k = r()) != null ? k : x)) || void 0;
    return uo(m.getItem.bind(m))(a.name).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== a.version) {
          if (a.migrate) {
            const j = a.migrate(
              w.state,
              w.version
            );
            return j instanceof Promise ? j.then((S) => [!0, S]) : [!0, j];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, w.state];
      return [!1, void 0];
    }).then((w) => {
      var j;
      if (u !== i)
        return;
      const [S, b] = w;
      if (g = a.merge(
        b,
        (j = r()) != null ? j : x
      ), n(g, !0), S)
        return y();
    }).then(() => {
      u === i && (p == null || p(g, void 0), g = r(), o = !0, d.forEach((w) => w(g)));
    }).catch((w) => {
      u === i && (p == null || p(void 0, w));
    });
  };
  return l.persist = {
    setOptions: (k) => {
      a = {
        ...a,
        ...k
      }, k.storage && (m = k.storage);
    },
    clearStorage: () => {
      m == null || m.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => _(),
    hasHydrated: () => o,
    onHydrate: (k) => (c.add(k), () => {
      c.delete(k);
    }),
    onFinishHydration: (k) => (d.add(k), () => {
      d.delete(k);
    })
  }, a.skipHydration || _(), g || x;
}, Fg = zg, Wg = [
  {
    id: "keep",
    label: "Keep",
    color: "var(--meld-success-color, #4ade80)",
    shortcutKey: "1"
  },
  {
    id: "refine",
    label: "Refine",
    color: "var(--brand-yellow, #ffd700)",
    shortcutKey: "2"
  },
  {
    id: "trash",
    label: "Trash",
    color: "var(--meld-danger-color, #ff4c4c)",
    shortcutKey: "3"
  }
];
let Il = null;
const re = Og()(
  Fg(
    (e) => ({
      isOpen: !1,
      slots: Wg,
      buckets: {},
      images: {},
      toastMessage: null,
      toastType: "info",
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((l) => {
        const a = { ...l.buckets };
        for (const i in a)
          a[i] = a[i].filter((c) => c !== n);
        a[t] || (a[t] = []), a[t].includes(n) || (a[t] = [...a[t], n]);
        const o = { ...l.images };
        return r && (o[n] = r), { buckets: a, images: o };
      }),
      removeFromBucket: (t, n) => e((r) => {
        var i;
        const l = {
          ...r.buckets,
          [t]: ((i = r.buckets[t]) == null ? void 0 : i.filter((c) => c !== n)) || []
        }, a = Object.values(l).some(
          (c) => c.includes(n)
        ), o = { ...r.images };
        return a || delete o[n], { buckets: l, images: o };
      }),
      clearBucket: (t) => e((n) => {
        const r = {
          ...n.buckets,
          [t]: []
        }, l = new Set(Object.values(r).flat()), a = { ...n.images };
        for (const o of Object.keys(a))
          l.has(o) || delete a[o];
        return { buckets: r, images: a };
      }),
      updateSlot: (t, n) => e((r) => ({
        slots: r.slots.map(
          (l) => l.id === t ? { ...l, ...n } : l
        )
      })),
      addSlot: (t) => e((n) => ({
        slots: [...n.slots, t]
      })),
      removeSlot: (t) => e((n) => {
        const r = n.slots.filter((i) => i.id !== t), l = { ...n.buckets };
        delete l[t];
        const a = new Set(Object.values(l).flat()), o = { ...n.images };
        for (const i of Object.keys(o))
          a.has(i) || delete o[i];
        return {
          slots: r,
          buckets: l,
          images: o
        };
      }),
      removeImages: (t) => e((n) => {
        const r = t.map(String), l = new Set(r), a = { ...n.buckets };
        let o = !1;
        for (const [c, d] of Object.entries(a)) {
          const m = d.filter((y) => !l.has(y));
          m.length !== d.length && (a[c] = m, o = !0);
        }
        if (!o) return n;
        const i = { ...n.images };
        for (const c of r)
          delete i[c];
        return { buckets: a, images: i };
      }),
      /**
       * Show toast message for 2.5 seconds.
       * If called multiple times, the latest message overwrites the previous one.
       */
      showToast: (t, n = "info") => {
        Il && clearTimeout(Il), e({ toastMessage: t, toastType: n }), Il = setTimeout(() => {
          e({ toastMessage: null }), Il = null;
        }, 2500);
      }
    }),
    {
      name: "meld-light-table-storage",
      // Persist both slots configuration, buckets, and images
      partialize: (e) => ({
        slots: e.slots,
        buckets: e.buckets,
        images: e.images
      })
    }
  )
), $g = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  viewScope: "default",
  viewerImageId: null,
  viewerMode: "gallery",
  viewerLightTableSlotId: null,
  viewerInitialMaskMode: !1,
  viewerFallbackImage: null,
  lineageImages: [],
  activeModal: { type: "none" },
  lastSelectedId: null,
  scanStatus: {
    isRunning: !1,
    isFinished: !1,
    shouldCancel: !1,
    progress: { current: 0, total: 0, phase: "" },
    newCount: 0,
    updatedCount: 0,
    totalCount: 0
  },
  settings: {
    dev_mode: !1,
    "gallery.show_parent_image": !0,
    "gallery.show_parent_images": !1,
    "sidebar.show_filename": "filename",
    "sidebar.show_dimensions": !0,
    "sidebar.show_created_at": !1,
    "sidebar.show_model_name": !0,
    "sidebar.show_positive_prompt": !0,
    "sidebar.show_negative_prompt": !1,
    "sidebar.show_user_notes": "always",
    "sidebar.show_tags": !0,
    "sidebar.thumbnail_size": 100,
    "search.quick_suggestions": !0,
    "search.input_suggest": !0,
    "viewer.loop": !0,
    "fullscreen.show_icons": !0,
    "fullscreen.loop": !0,
    "fullscreen.show_details_by_default": !0,
    "fullscreen.details.show_filename": "filename",
    "fullscreen.details.show_dimensions": !0,
    "fullscreen.details.show_created_at": !0,
    "fullscreen.details.show_tags": !0,
    "fullscreen.details.show_model_name": !0,
    "fullscreen.details.show_positive_prompt": !0,
    "fullscreen.details.show_negative_prompt": !0,
    "fullscreen.details.show_user_notes": "always",
    "fullscreen.details.show_source": !0,
    "fullscreen.details.max_positive_prompt_lines": 7,
    "fullscreen.details.max_negative_prompt_lines": 7,
    "viewer.show_details_by_default": !0,
    "viewer.details.show_filename": "filename",
    "viewer.details.show_dimensions": !0,
    "viewer.details.show_created_at": !0,
    "viewer.details.show_tags": !0,
    "viewer.details.show_model_name": !0,
    "viewer.details.show_positive_prompt": !0,
    "viewer.details.show_negative_prompt": !0,
    "viewer.details.show_user_notes": "always",
    "viewer.details.show_source": !0,
    "viewer.details.max_positive_prompt_lines": 7,
    "viewer.details.max_negative_prompt_lines": 7,
    "gallery.initial_load_count": 100,
    "gallery.max_load_count": 1e4,
    "viewer.thumbnail_window_size": 15,
    "viewer.show_thumbnails": !0,
    "viewer.show_icons": !0,
    "viewer.delete_mode": "confirm",
    "viewer.small_image_mode": "fit",
    "fullscreen.delete_mode": "confirm",
    "fullscreen.small_image_mode": "fit",
    "gallery.matching_strategy": "phash_created",
    "gallery.lineage_max_depth": 5,
    "gallery.trash_retention_days": 30,
    "gallery.trash.show_missing": !1,
    "gallery.view_mode": "grid_details",
    "gallery.suggest_phash_threshold": 82,
    "gallery.auto_link_phash_threshold": 92,
    "gallery.inherit_tags": !0,
    "viewer.shortcut.1": "tag:keep next",
    "viewer.shortcut.2": "tag:best next",
    "viewer.shortcut.3": "tag:fix-needed next",
    "viewer.shortcut.4": "",
    "viewer.shortcut.5": "",
    "viewer.shortcut.6": "",
    "viewer.shortcut.7": "",
    "viewer.shortcut.8": "",
    "viewer.shortcut.9": "",
    "viewer.shortcut.0": "",
    "viewer.shortcut.show_cheat_sheet": !0,
    "gallery.quick_shortcut.1": "add_unified_loader",
    "gallery.quick_shortcut.2": "",
    "gallery.quick_shortcut.3": "",
    "search.show_all_keywords": !0
  },
  pagination: {
    total: 0,
    offset: 0,
    limit: 100,
    hasMore: !1
  },
  searchQuery: "",
  favorites: [],
  toastMessage: null,
  toastType: "info",
  confirmModal: null
};
function Ug(e, t) {
  var n, r, l;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const a = new Set(t.payload), o = e.images.filter((d) => !a.has(d.id)), i = e.lineageImages.filter(
        (d) => !a.has(d.id)
      ), c = new Set(e.selectedIds);
      for (const d of t.payload)
        c.delete(d);
      return {
        ...e,
        images: o,
        lineageImages: i,
        selectedIds: c,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const a = t.payload, o = [...e.images, ...a], i = Array.from(
        new Map(o.map((c) => [c.id, c])).values()
      ).sort((c, d) => d.created_at - c.created_at);
      return {
        ...e,
        images: i,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + a.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const a = t.payload, o = e.images.map(
        (c) => c.id === a.id ? a : c
      ), i = e.lineageImages.map(
        (c) => c.id === a.id ? a : c
      );
      return {
        ...e,
        images: o,
        lineageImages: i
      };
    }
    case "SET_IMAGES": {
      const { images: a, total: o, offset: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !a.some((m) => m.id === c)) {
        const m = e.images.find((y) => y.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        m ? d = m : c = null;
      }
      return {
        ...e,
        images: a,
        isLoading: !1,
        error: null,
        viewerImageId: c,
        viewerFallbackImage: d,
        pagination: {
          total: o,
          offset: i,
          limit: e.pagination.limit,
          hasMore: i + a.length < o
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: a, total: o, offset: i } = t.payload, c = [...e.images, ...a], d = Array.from(
        new Map(c.map((m) => [m.id, m])).values()
      );
      return {
        ...e,
        images: d,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: o,
          offset: i,
          hasMore: i + a.length < o
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
      const a = new Set(e.selectedIds);
      let o = e.lastSelectedId;
      return a.has(t.payload) ? (a.delete(t.payload), o === t.payload && (o = null)) : (a.add(t.payload), o = t.payload), {
        ...e,
        selectedIds: a,
        lastSelectedId: o
      };
    }
    case "SELECT_RANGE": {
      if (e.lastSelectedId === null) {
        const m = new Set(e.selectedIds);
        return m.add(t.payload), {
          ...e,
          selectedIds: m,
          lastSelectedId: t.payload
        };
      }
      const a = e.images.findIndex(
        (m) => m.id === e.lastSelectedId
      ), o = e.images.findIndex(
        (m) => m.id === t.payload
      );
      if (a === -1 || o === -1) return e;
      const [i, c] = [
        Math.min(a, o),
        Math.max(a, o)
      ], d = new Set(e.selectedIds);
      for (let m = i; m <= c; m++)
        d.add(e.images[m].id);
      return {
        ...e,
        selectedIds: d,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(
          e.images.map((a) => a.id)
        ),
        lastSelectedId: e.images.length > 0 ? e.images[0].id : null
      };
    case "CLEAR_SELECTION":
      return {
        ...e,
        selectedIds: /* @__PURE__ */ new Set(),
        lastSelectedId: null
      };
    case "DESELECT_IMAGES": {
      const a = new Set(e.selectedIds);
      let o = e.lastSelectedId;
      return t.payload.forEach((i) => {
        a.delete(i), o === i && (o = null);
      }), {
        ...e,
        selectedIds: a,
        lastSelectedId: o
      };
    }
    case "SET_VIEW_SCOPE":
      return {
        ...e,
        viewScope: t.payload,
        images: [],
        // Clear images to force a fresh fetch
        selectedIds: /* @__PURE__ */ new Set(),
        // Clear selection when switching modes
        viewerImageId: null,
        // Close viewer when switching modes
        pagination: {
          ...e.pagination,
          offset: 0,
          total: 0,
          hasMore: !1
        }
      };
    case "REFRESH":
      return e;
    case "OPEN_VIEWER": {
      const a = t.payload, o = typeof a == "number" ? a : a.id, i = typeof a == "number" ? "gallery" : a.mode, c = typeof a != "number" && a.mode === "lighttable" ? a.slotId : null;
      let d = !1;
      if (typeof a != "number" && a.initialMaskMode && (typeof a.initialMaskMode == "string" ? d = a.initialMaskMode : d = "run"), d)
        return {
          ...e,
          activeModal: {
            type: "mask_editor",
            imageId: o,
            mode: d
          }
        };
      const m = e.viewerMode === "lineage" && i === "lineage" && e.lineageImages.some((y) => y.id === o);
      return {
        ...e,
        viewerImageId: o,
        viewerMode: i,
        viewerLightTableSlotId: c,
        viewerInitialMaskMode: d,
        lineageImages: m ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        viewerLightTableSlotId: null,
        viewerInitialMaskMode: !1,
        viewerFallbackImage: null,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const o = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.trim() !== "";
      let c = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? c = (re.getState().buckets[e.viewerLightTableSlotId] || []).map((x) => {
        const g = Number.parseInt(x, 10);
        return e.images.find((_) => _.id === g) || e.lineageImages.find((_) => _.id === g) || null;
      }).filter((x) => x !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? c = e.lineageImages : c = e.images.filter(
        (y) => y.exists !== !1 && (e.settings["gallery.show_parent_images"] || i || !y.has_children)
      ), e.viewerImageId === null || c.length === 0)
        return e;
      const d = c.findIndex(
        (y) => y.id === e.viewerImageId
      );
      if (d === -1 || d === c.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || d === c.length - 1 && !o)
        return e;
      const m = (d + 1) % c.length;
      return {
        ...e,
        viewerImageId: c[m].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const o = ((l = t.payload) == null ? void 0 : l.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.trim() !== "";
      let c = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? c = (re.getState().buckets[e.viewerLightTableSlotId] || []).map((x) => {
        const g = Number.parseInt(x, 10);
        return e.images.find((_) => _.id === g) || e.lineageImages.find((_) => _.id === g) || null;
      }).filter((x) => x !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? c = e.lineageImages : c = e.images.filter(
        (y) => y.exists !== !1 && (e.settings["gallery.show_parent_images"] || i || !y.has_children)
      ), e.viewerImageId === null || c.length === 0)
        return e;
      const d = c.findIndex(
        (y) => y.id === e.viewerImageId
      );
      if (d === -1 || d === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || d === 0 && !o)
        return e;
      const m = (d - 1 + c.length) % c.length;
      return {
        ...e,
        viewerImageId: c[m].id
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
      const a = {
        ...e.settings,
        ...t.payload
      }, o = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (o.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: a,
        pagination: o
      };
    }
    case "SET_SEARCH_QUERY":
      return {
        ...e,
        searchQuery: t.payload
      };
    case "SHOW_TOAST": {
      const a = t.payload;
      return typeof a == "string" ? {
        ...e,
        toastMessage: a,
        toastType: "info"
      } : {
        ...e,
        toastMessage: a.message,
        toastType: a.type || "info"
      };
    }
    case "HIDE_TOAST":
      return {
        ...e,
        toastMessage: null
      };
    case "OPEN_CONFIRM_MODAL":
      return {
        ...e,
        confirmModal: t.payload
      };
    case "CLOSE_CONFIRM_MODAL":
      return {
        ...e,
        confirmModal: null
      };
    default:
      return e;
  }
}
const gf = h.createContext(void 0), Vg = ({
  children: e
}) => {
  const [t, n] = h.useReducer(Ug, $g), r = h.useRef(t.images.length), l = h.useRef(0), a = h.useRef(/* @__PURE__ */ new Map());
  h.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = h.useCallback(
    async (g, _, k) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let p = g;
      for (; p < Math.min(_, f) && k === l.current; )
        try {
          const w = Math.min(u, f - p);
          Y.log("Background fetch: starting chunk", {
            offset: p,
            limit: w
          });
          const j = await Kl(
            p,
            w,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (k !== l.current || (n({ type: "APPEND_IMAGES", payload: j }), p += j.images.length, j.images.length === 0 || p >= j.total))
            break;
          await new Promise((S) => setTimeout(S, 300));
        } catch (w) {
          Y.error("Background fetch failed", w);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = h.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const g = performance.now(), _ = ++l.current;
    try {
      const k = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      Y.log("refreshImages: starting initial fetch", {
        isSearch: k,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await Kl(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), p = performance.now() - g;
      Y.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, _);
    } catch (k) {
      Y.error("refreshImages: fetch failed", k), n({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    o
  ]), c = h.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const g = performance.now();
    try {
      const _ = r.current, k = t.searchQuery.trim() !== "", f = t.pagination.limit;
      Y.log("loadMoreImages: starting fetch", {
        nextOffset: _,
        fetchLimit: f,
        isSearch: k
      });
      const u = await Kl(
        _,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), p = performance.now() - g;
      Y.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (_) {
      Y.error("loadMoreImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.searchQuery,
    t.viewScope
  ]), d = h.useCallback(async () => {
    try {
      const g = await Eg();
      n({ type: "SET_FAVORITES", payload: g });
    } catch (g) {
      Y.error("Failed to load favorites", g);
    }
  }, []), m = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds), k = t.images.filter(
      (f) => t.selectedIds.has(f.id)
    ).some(
      (f) => f.parent_id || f.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: g,
        hasLineage: k,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), y = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const k = (await ui(g)).restored_ids || g;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: k }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (_) {
      n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.selectedIds, t.viewScope]), v = h.useCallback(
    async (g, _) => {
      try {
        await Ig(g, _), n({ type: "SET_SETTINGS", payload: { [g]: _ } });
      } catch (k) {
        n({
          type: "SET_ERROR",
          payload: k instanceof Error ? k.message : String(k)
        });
      }
    },
    []
  ), x = h.useCallback(
    async (g) => {
      const _ = t.images.find((p) => p.id === g);
      if (_ && !_.is_minimal)
        return _;
      const k = t.lineageImages.find((p) => p.id === g);
      if (k && !k.is_minimal)
        return k;
      const f = a.current.get(g);
      if (f)
        return f;
      const u = (async () => {
        try {
          Y.log("fetchFullImageDetails: fetching full data", { id: g });
          const p = await mf(g);
          return n({ type: "UPDATE_IMAGE", payload: p }), p;
        } finally {
          a.current.delete(g);
        }
      })();
      return a.current.set(g, u), u;
    },
    [t.images, t.lineageImages]
  );
  return h.useEffect(() => {
    (async () => {
      try {
        const _ = await pf();
        n({ type: "SET_SETTINGS", payload: _ });
      } catch (_) {
        Y.error("Failed to load settings", _);
      }
    })();
  }, []), h.useEffect(() => {
    d();
  }, [d]), h.useEffect(() => {
    const g = () => {
      i();
    }, _ = (f) => {
      const u = f.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: u }
      });
    }, k = (f) => {
      const u = f.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: u.new_count || 0,
          updatedCount: u.updated_count || 0,
          totalCount: u.total_count || 0,
          progress: {
            current: u.total_count || t.scanStatus.progress.total,
            total: u.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), i();
    };
    return window.addEventListener("meld-refresh", g), window.addEventListener("meld-scan-progress", _), window.addEventListener("meld-scan-finished", k), () => {
      window.removeEventListener("meld-refresh", g), window.removeEventListener("meld-scan-progress", _), window.removeEventListener("meld-scan-finished", k);
    };
  }, [i, t.scanStatus.progress.total]), h.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    gf.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: m,
        restoreSelected: y,
        updateSetting: v,
        fetchFullImageDetails: x
      },
      children: e
    }
  );
}, ge = () => {
  const e = h.useContext(gf);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, mt = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), l = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${l}&size=${t}`}`;
}, mi = (e) => {
  if (!e.filename) return "";
  if (e.type === "custom")
    return `/api/meld/view-custom?filename=${encodeURIComponent(
      e.filename
    )}&subfolder=${encodeURIComponent(e.subfolder)}`;
  if (e.type === "trash")
    return `/api/meld/view-trash?filename=${encodeURIComponent(e.filename)}`;
  const t = e.type || "output";
  return `/api/view?filename=${encodeURIComponent(
    e.filename
  )}&type=${t}&subfolder=${encodeURIComponent(e.subfolder)}`;
}, hi = async () => {
  const e = await ee.fetchApi("/meld/tags");
  return se(e);
}, Bg = async (e) => {
  const t = await ee.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return se(t);
}, Qg = async (e) => {
  const t = await ee.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await se(t);
}, Hg = async (e, t) => {
  const n = await ee.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await se(n);
}, Kg = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await ee.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Gg = async (e, t, n = !1, r) => {
  const l = await ee.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await se(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, qg = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await ee.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await se(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, Yg = async (e, t, n) => {
  const r = await ee.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await se(r)).count;
  } catch {
    return 0;
  }
}, Xg = async (e) => {
  const t = await ee.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await se(t);
}, Zg = async () => {
  const e = await ee.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await se(e);
}, yf = () => {
  const { dispatch: e } = ge(), [t, n] = h.useState(() => {
    const N = localStorage.getItem("meld-import-config"), U = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (N)
      try {
        const P = JSON.parse(N);
        return { ...U, ...P, tags: [] };
      } catch {
        return U;
      }
    return U;
  });
  h.useEffect(() => {
    const { tags: N, ...U } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(U));
  }, [t]);
  const [r, l] = h.useState([]), [a, o] = h.useState([]), [i, c] = h.useState(0), [d, m] = h.useState(!1), [y, v] = h.useState([]), [x, g] = h.useState(""), [_, k] = h.useState(!1), [f, u] = h.useState(null), p = h.useRef(!1), w = (N) => {
    N.target === N.currentTarget && (p.current = !0);
  }, j = (N) => {
    N.target === N.currentTarget && p.current && e({ type: "CLOSE_MODAL" }), p.current = !1;
  };
  h.useEffect(() => {
    (async () => {
      try {
        const U = await cg();
        n((P) => P.custom_path ? P : { ...P, custom_path: U });
      } catch (U) {
        Y.error("Failed to fetch home directory:", U);
      }
    })();
  }, []), h.useEffect(() => {
    const N = new AbortController();
    return (async () => {
      const P = t.type === "custom" ? t.custom_path : t.subfolder;
      if (Y.log(
        `loadFolders started. Path: "${P}", Type: "${t.type}"`
      ), t.type === "custom" && !P) {
        Y.log("Custom path is empty, skipping load."), l([]), o([]), c(0);
        return;
      }
      m(!0);
      const L = P, C = t.type;
      try {
        Y.log("Step 1: Fast load starting...");
        const R = await Gg(
          t.type,
          P,
          !0,
          N.signal
        );
        if (N.signal.aborted) {
          Y.log("Step 1: Aborted.");
          return;
        }
        Y.log(
          `Step 1 complete. Found ${R.folders.length} folders, ${R.images.length} images.`
        ), l(R.folders), o(R.images), c(null);
        const O = R.folders.map((E) => E.name);
        O.length > 0 && (Y.log(
          `Step 2: Metadata fetch starting for ${O.length} folders...`
        ), qg(
          C,
          L,
          O,
          N.signal
        ).then((E) => {
          if (N.signal.aborted) {
            Y.log("Step 2: Aborted.");
            return;
          }
          Y.log("Step 2: Metadata fetch complete."), l(
            (z) => z.map((B) => {
              const A = E[B.name];
              return A ? { ...B, count: A.count, preview: A.preview } : B;
            })
          );
        }).catch((E) => {
          E.name !== "AbortError" && Y.error("Step 2: Metadata fetch failed:", E);
        })), Y.log("Step 3: Path image count starting..."), Yg(C, L, N.signal).then((E) => {
          if (N.signal.aborted) {
            Y.log("Step 3: Aborted.");
            return;
          }
          Y.log(`Step 3: Path image count complete: ${E}`), c(E);
        }).catch((E) => {
          E.name !== "AbortError" && Y.error("Step 3: Path image count failed:", E);
        });
      } catch (R) {
        if (R.name === "AbortError") {
          Y.log("Request aborted.");
          return;
        }
        Y.error("Failed to load folders:", R), l([]), o([]), c(0);
      } finally {
        N.signal.aborted || m(!1);
      }
    })(), () => {
      N.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const S = h.useCallback(async () => {
    k(!0);
    try {
      const N = await hi();
      v(N);
    } catch (N) {
      Y.error("Failed to fetch tags:", N);
    } finally {
      k(!1);
    }
  }, []);
  h.useEffect(() => {
    S();
  }, [S]), Ue({
    onEscape: h.useCallback(() => {
      f ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const b = h.useMemo(() => y.filter(
    (N) => N.name.toLowerCase().includes(x.toLowerCase()) && !t.tags.includes(N.name)
  ), [y, x, t.tags]), M = (N) => {
    const U = N.trim();
    U && !t.tags.includes(U) && (n({ ...t, tags: [...t.tags, U] }), g(""));
  }, D = (N) => {
    n({ ...t, tags: t.tags.filter((U) => U !== N) });
  }, T = (N) => {
    N.key === "Enter" && x.trim() && (N.preventDefault(), M(x.trim()));
  }, I = async () => {
    try {
      await Xg(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (N) {
      Y.error("Failed to start scan:", N), alert(`Failed to start scan: ${N}`);
    }
  }, F = (N) => {
    if (t.type === "custom") {
      const U = t.custom_path.includes("\\") ? "\\" : "/", P = t.custom_path.endsWith(U) ? `${t.custom_path}${N}` : `${t.custom_path}${U}${N}`;
      n({ ...t, custom_path: P });
    } else {
      const U = t.subfolder ? `${t.subfolder}/${N}` : N;
      n({ ...t, subfolder: U });
    }
  }, V = () => {
    if (t.type === "custom") {
      const N = t.custom_path.includes("\\") ? "\\" : "/", U = t.custom_path.split(N);
      if (U.length > 1) {
        U.pop();
        let P = U.join(N);
        P === "" && N === "/" && (P = "/"), n({ ...t, custom_path: P });
      }
    } else {
      const N = t.subfolder.split("/");
      N.pop(), n({ ...t, subfolder: N.join("/") });
    }
  };
  return de.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: j,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (N) => N.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-import-container", children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-import-sidebar", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                      /* @__PURE__ */ s.jsxs(
                        "select",
                        {
                          id: "base-location",
                          value: t.type,
                          onChange: (N) => n({
                            ...t,
                            type: N.target.value,
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
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("span", { className: "meld-form-label", children: "Images Found" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-path-count", children: i === null ? /* @__PURE__ */ s.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${i} images` })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (N) => n({ ...t, recursive: N.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "link-strategy", children: "Source Linking" }),
                      /* @__PURE__ */ s.jsxs(
                        "select",
                        {
                          id: "link-strategy",
                          value: t.link_strategy,
                          onChange: (N) => n({
                            ...t,
                            link_strategy: N.target.value,
                            auto_link_parent: N.target.value !== "none"
                          }),
                          children: [
                            /* @__PURE__ */ s.jsx("option", { value: "none", children: "Do not link" }),
                            /* @__PURE__ */ s.jsx("option", { value: "new_only", children: "Only for new images" }),
                            /* @__PURE__ */ s.jsx("option", { value: "all", children: "Reset for all images" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((N) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        N,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => D(N),
                            children: /* @__PURE__ */ s.jsx(pe, { size: 12 })
                          }
                        )
                      ] }, N)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(In, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: x,
                            onChange: (N) => g(N.target.value),
                            onKeyDown: T
                          }
                        ),
                        x.trim() && !t.tags.includes(x.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => M(x),
                            children: /* @__PURE__ */ s.jsx(Os, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : b.length === 0 ? x && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        x
                      ] }) : b.map((N) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => M(N.name),
                          children: N.name
                        },
                        N.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: I,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(tl, { size: 16 }),
                          "Start Import"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-import-browser", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-browser-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-browser-back",
                          disabled: t.type === "custom" ? t.custom_path === "/" || !t.custom_path.includes("/") && !t.custom_path.includes("\\") : !t.subfolder,
                          onClick: V,
                          children: [
                            /* @__PURE__ */ s.jsx(of, { size: 16 }),
                            "Back"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-browser-path-container", children: t.type === "custom" ? /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "text",
                          className: "meld-browser-path-input",
                          value: t.custom_path,
                          onChange: (N) => n({ ...t, custom_path: N.target.value }),
                          placeholder: "Enter absolute path..."
                        }
                      ) : /* @__PURE__ */ s.jsxs("div", { className: "meld-browser-path-display", children: [
                        /* @__PURE__ */ s.jsxs("span", { className: "meld-browser-path-type", children: [
                          t.type,
                          "/"
                        ] }),
                        t.subfolder
                      ] }) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: d ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && a.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      r.map((N) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => F(N.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: N.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: mt(N.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(Vp, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: N.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${N.count === null ? "meld-folder-count--loading" : ""}`,
                                children: N.count !== null ? `${N.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(ci, { size: 14 })
                          ]
                        },
                        N.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((N) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => u(N),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: mt(N, 120),
                              alt: N.filename,
                              title: N.filename
                            }
                          )
                        },
                        N.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          f && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (N) => {
                N.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (N) => N.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => u(null),
                          children: /* @__PURE__ */ s.jsx(pe, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: mt(f, 400),
                          alt: f.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: f.filename })
                  ]
                }
              )
            }
          )
        ]
      }
    ),
    document.fullscreenElement || document.body
  );
}, Jg = ({
  imageIds: e,
  onSuccess: t,
  onClose: n
}) => {
  const [r, l] = h.useState("zip"), [a, o] = h.useState(!1), [i, c] = h.useState(!1), d = h.useRef(!1), m = (x) => {
    x.target === x.currentTarget && (d.current = !0);
  }, y = (x) => {
    x.target === x.currentTarget && d.current && (i || n()), d.current = !1;
  };
  Ue({
    onEscape: () => {
      i || n();
    }
  });
  const v = async () => {
    c(!0);
    try {
      if (r === "zip")
        await xg(e, a);
      else
        for (const x of e)
          await _g(x, a), await new Promise((g) => setTimeout(g, 200));
      n(), t == null || t();
    } catch (x) {
      console.error("Download failed:", x), alert("Failed to download images.");
    } finally {
      c(!1);
    }
  };
  return de.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: y,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(el, { size: 18 }),
              /* @__PURE__ */ s.jsxs("h3", { style: { margin: 0 }, children: [
                "Download (",
                e.length,
                " image",
                e.length > 1 ? "s" : "",
                ")"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: n,
                disabled: i,
                children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", style: { padding: "20px" }, children: [
            /* @__PURE__ */ s.jsxs("div", { style: { marginBottom: "20px" }, children: [
              /* @__PURE__ */ s.jsx(
                "label",
                {
                  htmlFor: "download-format",
                  style: {
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "bold"
                  },
                  children: "Format"
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "16px" }, children: [
                /* @__PURE__ */ s.jsxs(
                  "label",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "format",
                          value: "zip",
                          checked: r === "zip",
                          onChange: () => l("zip"),
                          disabled: i
                        }
                      ),
                      "ZIP (Single File)"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "label",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "format",
                          value: "raw",
                          checked: r === "raw",
                          onChange: () => l("raw"),
                          disabled: i
                        }
                      ),
                      "Raw (Multiple Files)"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(
                "label",
                {
                  htmlFor: "download-options",
                  style: {
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "bold"
                  },
                  children: "Options"
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "label",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer"
                  },
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: a,
                        onChange: (x) => o(x.target.checked),
                        disabled: i
                      }
                    ),
                    "Remove metadata (ComfyUI workflow data) from downloaded images"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                disabled: i,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: v,
                disabled: i,
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: i ? "Downloading..." : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsx(el, { size: 16 }),
                  " Download"
                ] })
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, vf = async () => {
  const e = await ee.fetchApi("/meld/workflows");
  return se(e);
}, wf = async (e) => {
  const t = await ee.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return se(t);
}, pi = () => ({ executeWorkflow: h.useCallback(
  async (t, n, r, l) => {
    var x, g, _, k, f, u, p;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await wf(t);
    console.log("[Meld] Workflow fetched:", t);
    let o = l || null, i = null, c = !1;
    const d = (w) => {
      if (!w) return !1;
      const j = w.replace(/\s+/g, "");
      return j === "MeldImageLoader" || j === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const j = a.nodes.find(
          (S) => d(S.type)
        );
        j && (o = String(j.id));
      }
      const w = a.nodes.find(
        (j) => {
          var S;
          return ((S = j.type) == null ? void 0 : S.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      w && (i = String(w.id));
    } else {
      if (!o)
        for (const w in a) {
          const j = a[w];
          if (d(j.class_type)) {
            o = w;
            break;
          }
        }
      for (const w in a)
        if (((x = a[w].class_type) == null ? void 0 : x.replace(/\s+/g, "")) === "LoadImageMask") {
          i = w;
          break;
        }
    }
    if (console.log("[Meld] Node IDs found:", {
      loaderNodeId: o,
      maskNodeId: i,
      isUIFormat: c
    }), !o)
      throw new Error(
        "Meld Image Loader or Load Image node not found in the selected workflow."
      );
    if (r && !i)
      throw console.warn(
        "[Meld] Mask filename provided but no mask node found in workflow JSON"
      ), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let m = n.filename;
    if (n.subfolder && (m = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (m = `${m} [${n.type}]`), c) {
      const w = window.app, j = t.replace(/\.json$/i, "");
      let S = !1;
      const b = document.querySelectorAll(".workflow-tab");
      for (const T of Array.from(b)) {
        const I = T.querySelector(".workflow-label"), F = ((g = I == null ? void 0 : I.textContent) == null ? void 0 : g.trim()) || ((_ = T.textContent) == null ? void 0 : _.trim()) || "";
        if (F === j || F === t || F.startsWith(`${j} `) || F.startsWith(`${j}•`)) {
          T.click(), S = !0;
          break;
        }
      }
      S || await w.loadGraphData(a, !0, !0, t), await new Promise((T) => setTimeout(T, 200));
      const M = w.graph._nodes;
      console.log("[Meld] Active graph nodes count:", M.length);
      const D = M.find(
        (T) => String(T.id) === o || d(T.type)
      );
      if (D) {
        const T = (k = D.widgets) == null ? void 0 : k.find((I) => I.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: D.id,
          type: D.type,
          imagePath: m
        }), T && (T.value = m, typeof T.callback == "function" && T.callback(m));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const T = M.find(
          (I) => {
            var F;
            return String(I.id) === i || ((F = I.type) == null ? void 0 : F.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: T == null ? void 0 : T.id,
          maskFilename: r
        }), T) {
          const I = (f = T.widgets) == null ? void 0 : f.find(
            (V) => V.name === "image"
          );
          I && (I.value = `${r} [temp]`);
          const F = (u = T.widgets) == null ? void 0 : u.find(
            (V) => V.name === "channel"
          );
          F && (F.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      w.graph.setDirtyCanvas(!0, !0);
      try {
        await w.queuePrompt(0);
        return;
      } catch (T) {
        throw console.error("Failed to queue workflow:", T), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const y = JSON.parse(JSON.stringify(a));
    y[o].inputs.image = m, r && i && (y[i].inputs.image = `${r} [temp]`, y[i].inputs.channel = "red");
    const v = await ee.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: y,
        client_id: ee.clientId
      })
    });
    if (!v.ok) {
      const w = await v.json();
      throw new Error(((p = w.error) == null ? void 0 : p.message) || "Failed to queue workflow");
    }
    return await v.json();
  },
  []
) });
function ey(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function rl(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = ey(e), l = (m) => {
    if (!m) return !1;
    const y = m.replace(/\s+/g, "").toLowerCase();
    return y === "meldimageloader" || y === "loadimage";
  }, a = n.graph._nodes.filter(
    (m) => l(m.type)
  );
  if (a.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let o = a[0];
  if (t) {
    const m = a.find(
      (y) => String(y.id) === t
    );
    m && (o = m);
  }
  const i = o.widgets.find(
    (m) => m.name === "image"
  );
  return i && (i.value = r, typeof i.callback == "function" && i.callback(r)), (d = (c = n.graph).afterChange) == null || d.call(c), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const ty = () => {
  const { dispatch: e } = ge();
  return { injectMaskToGraph: h.useCallback(
    (n, r) => {
      var m, y;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), rl(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      const a = l.graph._nodes.filter(
        (v) => v.type === "LoadImageMask"
      );
      if (a.length === 0)
        return console.log(
          "[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"
        ), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0], i = o.widgets.find(
        (v) => v.name === "image"
      ), c = `${r} [temp]`;
      console.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find(
        (v) => v.name === "channel"
      );
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (y = (m = l.graph).afterChange) == null || y.call(m), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Tl(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function ny(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = fo(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let m = 0; m < r * l; m++)
    d[m] = c.data[m * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function fo(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], m = c * 4;
    d > 0 ? (i[m] = t[0], i[m + 1] = t[1], i[m + 2] = t[2], i[m + 3] = n) : (i[m] = 0, i[m + 1] = 0, i[m + 2] = 0, i[m + 3] = 0);
  }
  return o;
}
function ry(e) {
  return e.data.every((t) => t === 0);
}
const Tc = (e) => e === "rect" || e === "ellipse" || e === "lasso", ws = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = ge(), i = h.useMemo(() => a.images.find(($) => $.id === e) ?? a.lineageImages.find(($) => $.id === e) ?? re.getState().images[String(e)], [a.images, a.lineageImages, e]), c = h.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: m } = ty(), { executeWorkflow: y } = pi();
  Ue({ onEscape: l });
  const v = h.useRef(null), x = h.useRef(null), g = h.useRef(null), _ = h.useRef(null), [k, f] = h.useState(!1), [u, p] = h.useState(() => {
    const $ = localStorage.getItem("meld-mask-tool");
    return Tc($) ? $ : "rect";
  });
  h.useEffect(() => {
    Tc(u) && localStorage.setItem("meld-mask-tool", u);
  }, [u]);
  const [w, j] = h.useState({ x: 0, y: 0 }), [S, b] = h.useState({ x: 0, y: 0 }), [M, D] = h.useState([]), [T, I] = h.useState(null), [F, V] = h.useState(!1), [N, U] = h.useState(1), [P, L] = h.useState({ x: 0, y: 0 }), [C, R] = h.useState(!1), [O, E] = h.useState(!1), z = h.useRef(null), B = h.useCallback(() => {
    const $ = g.current, q = x.current;
    if (!$ || !q) return null;
    const te = q.getBoundingClientRect(), K = $.naturalWidth, ne = $.naturalHeight;
    if (!K || !ne) return null;
    const oe = K / ne, Ne = te.width / te.height;
    let me, ke, ye = 0, et = 0;
    return oe > Ne ? (me = te.width, ke = te.width / oe, et = (te.height - ke) / 2) : (ke = te.height, me = te.height * oe, ye = (te.width - me) / 2), {
      left: ye,
      top: et,
      width: me,
      height: ke
    };
  }, []), A = h.useCallback(
    ($, q, te, K) => {
      if (!$) return q;
      const ne = $.getBoundingClientRect(), oe = ne.width / 2, Ne = ne.height / 2, me = {
        x: (oe - q.x) / te,
        y: (Ne - q.y) / te
      };
      return { x: oe - me.x * K, y: Ne - me.y * K };
    },
    []
  ), Q = h.useCallback(() => {
    U(($) => {
      const q = Math.min($ * 1.2, 20);
      return L(
        (te) => A(x.current, te, $, q)
      ), q;
    });
  }, [A]), J = h.useCallback(() => {
    U(($) => {
      const q = Math.max(0.1, $ / 1.2);
      return L(
        (te) => A(x.current, te, $, q)
      ), q;
    });
  }, [A]), ie = h.useCallback(() => {
    const $ = v.current;
    if (!$) return;
    const q = $.getContext("2d");
    if (!q) return;
    q.clearRect(0, 0, $.width, $.height);
    const te = getComputedStyle(document.documentElement), K = te.getPropertyValue("--comfy-input-bg-active") || te.getPropertyValue("--comfy-input-bg") || te.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", ne = B();
    if (_.current && ne && (q.save(), q.globalAlpha = 0.5, q.drawImage(
      _.current,
      ne.left,
      ne.top,
      ne.width,
      ne.height
    ), q.restore()), k) {
      const oe = Math.min(w.x, S.x), Ne = Math.min(w.y, S.y), me = Math.abs(w.x - S.x), ke = Math.abs(w.y - S.y);
      if (q.save(), q.globalAlpha = 0.3, q.fillStyle = K, q.strokeStyle = "white", q.lineWidth = 2, q.setLineDash([5, 5]), q.beginPath(), u === "rect")
        q.rect(oe, Ne, me, ke);
      else if (u === "ellipse") {
        const ye = oe + me / 2, et = Ne + ke / 2;
        q.ellipse(ye, et, me / 2, ke / 2, 0, 0, 2 * Math.PI);
      } else if (u === "lasso" && M.length > 1) {
        q.moveTo(M[0].x, M[0].y);
        for (let ye = 1; ye < M.length; ye++)
          q.lineTo(M[ye].x, M[ye].y);
        q.closePath();
      }
      q.fill(), q.globalAlpha = 1, q.stroke(), q.restore();
    }
  }, [
    k,
    w,
    S,
    u,
    M,
    B
  ]), [ce, Ie] = h.useState([]), fe = h.useMemo(() => ce.length > 0 ? ce[ce.length - 1] : g.current ? Tl(
    g.current.naturalWidth,
    g.current.naturalHeight
  ) : null, [ce]);
  h.useEffect(() => {
    var $;
    ($ = g.current) != null && $.naturalWidth && ce.length === 0 && Ie([
      Tl(
        g.current.naturalWidth,
        g.current.naturalHeight
      )
    ]);
  }, [ce.length]);
  const Bt = h.useCallback(() => {
    var $;
    ($ = g.current) != null && $.naturalWidth && ce.length === 0 && Ie([
      Tl(
        g.current.naturalWidth,
        g.current.naturalHeight
      )
    ]);
  }, [ce.length]), Z = h.useRef(!1), pn = h.useRef(0), Qt = ($) => {
    $.target === $.currentTarget && (Z.current = !0);
  }, Lt = ($) => {
    $.target === $.currentTarget && Z.current && !k && l(), Z.current = !1;
  };
  h.useEffect(() => {
    if (!fe) return;
    _.current || (_.current = document.createElement("canvas"));
    const $ = _.current;
    $.width = fe.width, $.height = fe.height;
    const q = $.getContext("2d");
    if (!q) return;
    const te = fo(fe, [255, 255, 255], 255);
    q.putImageData(te, 0, 0), ie();
  }, [fe, ie]), h.useEffect(() => {
    k && ie();
  }, [k, ie]), h.useEffect(() => {
    const $ = x.current;
    if (!$) return;
    const q = (te) => {
      te.preventDefault();
      const K = te.deltaY > 0 ? 1 / 1.1 : 1.1;
      U((ne) => {
        const oe = Math.min(Math.max(0.1, ne * K), 20);
        return L((Ne) => {
          const me = $.getBoundingClientRect(), ke = te.clientX - me.left, ye = te.clientY - me.top, et = {
            x: (ke - Ne.x) / ne,
            y: (ye - Ne.y) / ne
          };
          return {
            x: ke - et.x * oe,
            y: ye - et.y * oe
          };
        }), oe;
      });
    };
    return $.addEventListener("wheel", q, { passive: !1 }), () => $.removeEventListener("wheel", q);
  }, []), h.useEffect(() => {
    if (!O) return;
    const $ = (te) => {
      if (z.current) {
        const K = te.clientX - z.current.clientX, ne = te.clientY - z.current.clientY;
        L({
          x: z.current.panX + K,
          y: z.current.panY + ne
        });
      }
    }, q = () => {
      E(!1), z.current = null;
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", q), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", q);
    };
  }, [O]), h.useEffect(() => {
    const $ = () => {
      x.current && v.current && (v.current.width = x.current.clientWidth, v.current.height = x.current.clientHeight, ie());
    }, q = new ResizeObserver($);
    return x.current && q.observe(x.current), $(), () => q.disconnect();
  }, [ie]);
  const xe = ($) => {
    var ye;
    const q = $.button === 2, te = $.button === 1, K = C && $.button === 0;
    if (q || te || K) {
      $.preventDefault(), $.stopPropagation(), z.current = {
        panX: P.x,
        panY: P.y,
        clientX: $.clientX,
        clientY: $.clientY
      }, E(!0);
      return;
    }
    if ($.button !== 0 || k || F || Date.now() - pn.current < 100)
      return;
    $.preventDefault();
    const ne = B(), oe = (ye = x.current) == null ? void 0 : ye.getBoundingClientRect();
    if (!ne || !oe) return;
    f(!0);
    const Ne = {
      x: ($.clientX - oe.left - P.x) / N,
      y: ($.clientY - oe.top - P.y) / N
    }, me = Math.max(
      ne.left,
      Math.min(Ne.x, ne.left + ne.width)
    ), ke = Math.max(
      ne.top,
      Math.min(Ne.y, ne.top + ne.height)
    );
    j({ x: me, y: ke }), b({ x: me, y: ke }), D(u === "lasso" ? [{ x: me, y: ke }] : []), I(null);
  };
  h.useEffect(() => {
    if (!k) return;
    const $ = (te) => {
      var ke;
      const K = B(), ne = (ke = x.current) == null ? void 0 : ke.getBoundingClientRect();
      if (!K || !ne) return;
      const oe = {
        x: (te.clientX - ne.left - P.x) / N,
        y: (te.clientY - ne.top - P.y) / N
      }, Ne = Math.max(
        K.left,
        Math.min(oe.x, K.left + K.width)
      ), me = Math.max(
        K.top,
        Math.min(oe.y, K.top + K.height)
      );
      b({ x: Ne, y: me }), u === "lasso" && D((ye) => [...ye, { x: Ne, y: me }]);
    }, q = (te) => {
      var oe;
      const K = B(), ne = (oe = x.current) == null ? void 0 : oe.getBoundingClientRect();
      if (K && ne && fe && g.current) {
        const Ne = {
          x: (te.clientX - ne.left - P.x) / N,
          y: (te.clientY - ne.top - P.y) / N
        }, me = Math.max(
          K.left,
          Math.min(Ne.x, K.left + K.width)
        ), ke = Math.max(
          K.top,
          Math.min(Ne.y, K.top + K.height)
        ), ye = Math.min(w.x, me), et = Math.min(w.y, ke), Rn = Math.abs(w.x - me), Ws = Math.abs(w.y - ke), Jf = u === "lasso";
        if (Rn > 5 || Ws > 5 || Jf && M.length > 2) {
          const em = g.current.naturalWidth, tm = g.current.naturalHeight, Pn = em / K.width, On = tm / K.height, nm = ny(fe, (yn) => {
            if (u === "rect") {
              const An = (ye - K.left) * Pn, Ht = (et - K.top) * On, ul = Rn * Pn, fl = Ws * On;
              yn.rect(An, Ht, ul, fl);
            } else if (u === "ellipse") {
              const An = (ye - K.left) * Pn, Ht = (et - K.top) * On, ul = Rn * Pn, fl = Ws * On, rm = An + ul / 2, lm = Ht + fl / 2;
              yn.ellipse(
                rm,
                lm,
                ul / 2,
                fl / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (u === "lasso" && M.length > 2) {
              const An = M[0];
              yn.moveTo(
                (An.x - K.left) * Pn,
                (An.y - K.top) * On
              );
              for (let Ht = 1; Ht < M.length; Ht++)
                yn.lineTo(
                  (M[Ht].x - K.left) * Pn,
                  (M[Ht].y - K.top) * On
                );
              yn.closePath();
            }
          });
          Ie((yn) => [...yn, nm]);
        }
      }
      pn.current = Date.now(), f(!1), D([]);
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", q), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", q);
    };
  }, [
    k,
    w.x,
    w.y,
    B,
    fe,
    u,
    M,
    P.x,
    P.y,
    N
  ]);
  const ot = h.useCallback(() => {
    ce.length > 1 && Ie(($) => $.slice(0, -1));
  }, [ce.length]);
  h.useEffect(() => {
    const $ = (K) => {
      if (!K) return !1;
      const ne = K, oe = ne.tagName;
      return oe === "INPUT" || oe === "TEXTAREA" || oe === "BUTTON" || oe === "SELECT" || oe === "A" || ne.isContentEditable || ne.tabIndex != null && ne.tabIndex >= 0;
    }, q = (K) => {
      K.code === "Space" && !K.repeat && ($(K.target) || (K.preventDefault(), R(!0))), (K.metaKey || K.ctrlKey) && K.key.toLowerCase() === "z" && !K.shiftKey ? (K.preventDefault(), K.stopPropagation(), K.stopImmediatePropagation(), ot()) : K.key === "Escape" && (K.preventDefault(), K.stopPropagation(), K.stopImmediatePropagation(), l(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, te = (K) => {
      K.code === "Space" && ($(K.target) || (K.preventDefault(), R(!1)));
    };
    return window.addEventListener("keydown", q, { capture: !0 }), window.addEventListener("keyup", te, { capture: !0 }), () => {
      window.removeEventListener("keydown", q, { capture: !0 }), window.removeEventListener("keyup", te, { capture: !0 });
    };
  }, [ot, l]);
  const jt = () => {
    if (g.current) {
      const $ = Tl(
        g.current.naturalWidth,
        g.current.naturalHeight
      );
      Ie((q) => [...q, $]);
    }
  }, bt = async () => {
    if (!fe || !g.current) return null;
    V(!0);
    try {
      const { width: $, height: q } = fe, te = document.createElement("canvas");
      te.width = $, te.height = q;
      const K = te.getContext("2d");
      if (!K) return null;
      const ne = fo(fe, [255, 255, 255], 255);
      K.putImageData(ne, 0, 0);
      const oe = await new Promise(
        (Rn) => te.toBlob(Rn, "image/png")
      );
      if (!oe) return null;
      const me = `meld_mask_${Date.now()}.png`, ke = new File([oe], me, { type: "image/png" }), ye = new FormData();
      ye.append("image", ke), ye.append("type", "temp"), ye.append("overwrite", "true");
      const et = await ee.fetchApi("/upload/image", {
        method: "POST",
        body: ye
      });
      return et.ok ? (await et.json()).name : null;
    } catch ($) {
      return console.error("[Meld] Error uploading mask:", $), null;
    } finally {
      V(!1);
    }
  }, Dn = async () => {
    if (!d) return;
    const $ = await bt();
    $ && m(d, $) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, gn = async () => {
    if (!d) return;
    const $ = await bt();
    $ && (t === "run_sequence" && n ? (await y(
      n.workflowName,
      d,
      $,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [d],
        maskFilename: $,
        onSuccess: r
      }
    }));
  }, Fs = h.useMemo(
    () => fe && !ry(fe),
    [fe]
  );
  return d ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: Qt,
      onMouseUp: Lt,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: ($) => $.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: l, type: "button", children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "rect" ? "active" : ""}`,
                    onClick: () => p("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(ff, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "ellipse" ? "active" : ""}`,
                    onClick: () => p("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Fp, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "lasso" ? "active" : ""}`,
                    onClick: () => p("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Qp, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Lasso" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    style: {
                      width: 1,
                      backgroundColor: "var(--meld-border-color)",
                      margin: "0 4px"
                    }
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: J,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ s.jsx(ig, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      U(1), L({ x: 0, y: 0 });
                    },
                    type: "button",
                    title: "Reset Zoom",
                    "aria-label": "Reset Zoom",
                    style: {
                      minWidth: "48px",
                      justifyContent: "center",
                      fontSize: "11px"
                    },
                    children: [
                      Math.round(N * 100),
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: Q,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ s.jsx(og, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: x,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: xe,
                  onContextMenu: ($) => $.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: O ? "grabbing" : C ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${P.x}px, ${P.y}px) scale(${N})`,
                        transformOrigin: "0 0",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none"
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "img",
                          {
                            ref: g,
                            src: mi(d),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: ($) => $.preventDefault(),
                            onLoad: Bt
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "canvas",
                          {
                            ref: v,
                            className: "meld-mask-editor-canvas",
                            onDragStart: ($) => $.preventDefault()
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-footer", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-mask-editor-hint", children: "Select a tool and drag on the image to create mask areas (Cmd/Ctrl+Z to undo)" }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-actions", children: [
                  t === "apply" ? /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                      onClick: Dn,
                      disabled: !Fs || F,
                      type: "button",
                      children: [
                        F ? /* @__PURE__ */ s.jsx(Cc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(ii, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: gn,
                      disabled: !Fs || F,
                      type: "button",
                      children: [
                        F ? /* @__PURE__ */ s.jsx(Cc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(tl, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: ot,
                      disabled: ce.length <= 1 || F,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(lg, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: jt,
                      disabled: !Fs || F,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(pe, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Clear" })
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ]
        }
      )
    }
  ) : null;
}, xf = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, Ll = (e) => e.replace(/^["']|["']$/g, ""), ly = (e) => e.trim() ? xf(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, sy = (e, t) => {
  const n = xf(e), r = {
    addTags: [],
    removeTags: [],
    toggleTags: [],
    moveNext: !1,
    movePrev: !1,
    isDeleted: !1,
    sendToLtSlot: null
  }, l = (t == null ? void 0 : t.tags) || [];
  for (const a of n)
    if (a.startsWith("tag:")) {
      const o = Ll(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = Ll(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = Ll(a.substring(11));
      o && (t ? l.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = Ll(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, ay = () => {
  const { state: e, dispatch: t, updateSetting: n } = ge(), [r, l] = h.useState("Gallery"), [a, o] = h.useState({
    ...e.settings
  }), [i, c] = h.useState(
    {}
  ), [d, m] = h.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [y, v] = h.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, g] = h.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [_, k] = h.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, u] = h.useState(e.settings["gallery.trash_retention_days"].toString()), [p, w] = h.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [j, S] = h.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [b, M] = h.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [D, T] = h.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    I,
    F
  ] = h.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    V,
    N
  ] = h.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [U, P] = h.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: a,
    setLocalSettings: o,
    shortcutErrors: i,
    setShortcutErrors: c,
    handleClose: async () => {
      const Q = Object.keys(a).filter(
        (J) => a[J] !== e.settings[J] && !i[J]
      );
      if (Q.length > 0)
        for (const J of Q)
          await n(J, a[J]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (Q, J) => {
      o((ie) => ({
        ...ie,
        [Q]: !J
      }));
    },
    handleNumberChange: (Q, J, ie, ce) => {
      Q === "gallery.initial_load_count" ? m(J) : Q === "gallery.max_load_count" ? v(J) : Q === "gallery.lineage_max_depth" ? g(J) : Q === "viewer.thumbnail_window_size" ? k(J) : Q === "gallery.trash_retention_days" ? u(J) : Q === "gallery.auto_link_phash_threshold" ? w(J) : Q === "gallery.suggest_phash_threshold" ? S(J) : Q === "viewer.details.max_positive_prompt_lines" ? M(J) : Q === "viewer.details.max_negative_prompt_lines" ? T(J) : Q === "fullscreen.details.max_positive_prompt_lines" ? F(J) : Q === "fullscreen.details.max_negative_prompt_lines" ? N(J) : Q === "sidebar.thumbnail_size" && P(J);
      const Ie = Number.parseInt(J, 10);
      if (!Number.isNaN(Ie)) {
        let fe = Ie;
        ie !== void 0 && fe < ie && (fe = ie), ce !== void 0 && fe > ce && (fe = ce), o((Bt) => ({
          ...Bt,
          [Q]: fe
        }));
      }
    },
    handleNumberBlur: (Q) => {
      Q.key === "gallery.initial_load_count" ? m(
        a["gallery.initial_load_count"].toString()
      ) : Q.key === "gallery.max_load_count" ? v(a["gallery.max_load_count"].toString()) : Q.key === "gallery.lineage_max_depth" ? g(
        a["gallery.lineage_max_depth"].toString()
      ) : Q.key === "viewer.thumbnail_window_size" ? k(
        a["viewer.thumbnail_window_size"].toString()
      ) : Q.key === "gallery.trash_retention_days" ? u(
        a["gallery.trash_retention_days"].toString()
      ) : Q.key === "gallery.auto_link_phash_threshold" ? w(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : Q.key === "gallery.suggest_phash_threshold" ? S(
        a["gallery.suggest_phash_threshold"].toString()
      ) : Q.key === "viewer.details.max_positive_prompt_lines" ? M(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : Q.key === "viewer.details.max_negative_prompt_lines" ? T(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : Q.key === "fullscreen.details.max_positive_prompt_lines" ? F(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : Q.key === "fullscreen.details.max_negative_prompt_lines" ? N(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : Q.key === "sidebar.thumbnail_size" && P(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      o((Q) => ({
        ...Q,
        "viewer.shortcut.1": "tag:keep next",
        "viewer.shortcut.2": "tag:best next",
        "viewer.shortcut.3": "tag:fix-needed next",
        "viewer.shortcut.4": "",
        "viewer.shortcut.5": "",
        "viewer.shortcut.6": "",
        "viewer.shortcut.7": "",
        "viewer.shortcut.8": "",
        "viewer.shortcut.9": "",
        "viewer.shortcut.0": ""
      })), c({});
    },
    handleViewTrash: () => {
      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
    },
    handleClearThumbnailCache: () => {
      t({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          message: "Are you sure you want to delete all cached thumbnails?",
          onConfirm: async () => {
            try {
              await Tg(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (Q) {
              console.error("Failed to clear thumbnail cache:", Q), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (Q) => ly(Q),
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: y,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: _,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: j,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: D,
    fullscreenMaxPositivePromptLinesInput: I,
    fullscreenMaxNegativePromptLinesInput: V,
    thumbnailSizeInput: U
  };
}, G = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), oy = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Tool Icons",
        description: "Display navigation and close icons in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.show_icons"],
              onChange: () => n(
                "fullscreen.show_icons",
                e["fullscreen.show_icons"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.delete_mode": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ s.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ s.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.loop"],
              onChange: () => n(
                "fullscreen.loop",
                e["fullscreen.loop"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.small_image_mode": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ s.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when entering fullscreen.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.show_details_by_default"],
              onChange: () => n(
                "fullscreen.show_details_by_default",
                e["fullscreen.show_details_by_default"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.details.show_filename": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ s.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ s.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Dimensions",
        description: "Display dimensions in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_dimensions"],
              onChange: () => n(
                "fullscreen.details.show_dimensions",
                e["fullscreen.details.show_dimensions"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Created At",
        description: "Display generation date/time in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_created_at"],
              onChange: () => n(
                "fullscreen.details.show_created_at",
                e["fullscreen.details.show_created_at"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Source Info",
        description: "Display source image information in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_source"],
              onChange: () => n(
                "fullscreen.details.show_source",
                e["fullscreen.details.show_source"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Model",
        description: "Display model name in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_model_name"],
              onChange: () => n(
                "fullscreen.details.show_model_name",
                e["fullscreen.details.show_model_name"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Positive",
        description: "Display positive prompt in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_positive_prompt"],
              onChange: () => n(
                "fullscreen.details.show_positive_prompt",
                e["fullscreen.details.show_positive_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt in fullscreen.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 100,
            onChange: (i) => r(
              "fullscreen.details.max_positive_prompt_lines",
              i.target.value,
              1,
              100
            ),
            onBlur: () => l({
              key: "fullscreen.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Negative",
        description: "Display negative prompt in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_negative_prompt"],
              onChange: () => n(
                "fullscreen.details.show_negative_prompt",
                e["fullscreen.details.show_negative_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show User Notes",
        description: "Display user notes in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_user_notes"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.details.show_user_notes": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ s.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ s.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt in fullscreen.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 100,
            onChange: (i) => r(
              "fullscreen.details.max_negative_prompt_lines",
              i.target.value,
              1,
              100
            ),
            onBlur: () => l({
              key: "fullscreen.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Tags",
        description: "Display tags in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.details.show_tags"],
              onChange: () => n(
                "fullscreen.details.show_tags",
                e["fullscreen.details.show_tags"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] })
] });
function Tt({
  size: e = 24,
  color: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s.jsx(
    "svg",
    {
      ...r,
      width: e,
      height: e,
      viewBox: "2 2 20 20",
      fill: "none",
      stroke: t ?? "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      children: n
    }
  );
}
function _f() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M18 16.6v2.8",
        stroke: "var(--meld-icon-halo, transparent)",
        strokeWidth: 4
      }
    ),
    /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M16.6 18h2.8",
        stroke: "var(--meld-icon-halo, transparent)",
        strokeWidth: 4
      }
    ),
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function kf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Sf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function jf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function bf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(_f, {})
  ] });
}
function Ef(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Cf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(_f, {})
  ] });
}
function Nf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Mf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function If(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function Tf(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Lf = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: kf
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Ef
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Cf
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: jf },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: bf
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Sf
  },
  { id: "edit_tags", label: "Edit Tags", icon: Mf },
  { id: "edit_notes", label: "Edit Notes", icon: If },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Nf
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Tf
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Ut }
], iy = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailSizeInput: a,
  initialLoadCountInput: o,
  maxLoadCountInput: i
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Thumbnail Size",
        description: "Size of the image thumbnails in the sidebar (50-500px).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 50,
            max: 500,
            onChange: (c) => r(
              "sidebar.thumbnail_size",
              c.target.value,
              50,
              500
            ),
            onBlur: () => l({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "sidebar.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ s.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ s.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Dimensions",
        description: "Display the image dimensions (width x height) on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_dimensions"],
              onChange: () => n(
                "sidebar.show_dimensions",
                e["sidebar.show_dimensions"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Created At",
        description: "Display the image creation date and time on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_created_at"],
              onChange: () => n(
                "sidebar.show_created_at",
                e["sidebar.show_created_at"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources). (Note: This setting is ignored during searches)",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.show_parent_images"],
              onChange: () => n(
                "gallery.show_parent_images",
                e["gallery.show_parent_images"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Source Info",
        description: "Display source image information and lineage link on image cards.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.show_parent_image"],
              onChange: () => n(
                "gallery.show_parent_image",
                e["gallery.show_parent_image"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Model",
        description: "Display the model name on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_model_name"],
              onChange: () => n(
                "sidebar.show_model_name",
                e["sidebar.show_model_name"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Positive",
        description: "Display the positive prompt on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_positive_prompt"],
              onChange: () => n(
                "sidebar.show_positive_prompt",
                e["sidebar.show_positive_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Negative",
        description: "Display the negative prompt on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_negative_prompt"],
              onChange: () => n(
                "sidebar.show_negative_prompt",
                e["sidebar.show_negative_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show User Notes",
        description: "Display user notes on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "sidebar.show_user_notes": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ s.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ s.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(G, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["sidebar.show_tags"],
          onChange: () => n(
            "sidebar.show_tags",
            e["sidebar.show_tags"]
          )
        }
      ),
      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Search Behavior" }),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Quick Suggestions",
        description: "Show suggested keywords when the search field is empty.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.quick_suggestions"],
              onChange: () => n(
                "search.quick_suggestions",
                e["search.quick_suggestions"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Input Suggestions",
        description: "Show suggestions when typing search prefixes (e.g. pos:).",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.input_suggest"],
              onChange: () => n(
                "search.input_suggest",
                e["search.input_suggest"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "List Behavior" }),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Initial Load Count",
        description: "Number of images to load and display immediately (10-1000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 10,
            max: 1e3,
            onChange: (c) => r(
              "gallery.initial_load_count",
              c.target.value,
              10,
              1e3
            ),
            onBlur: () => l({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 10,
            max: 1e6,
            onChange: (c) => r(
              "gallery.max_load_count",
              c.target.value,
              10,
              1e6
            ),
            onBlur: () => l({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Quick Shortcuts (Card)" }),
    [1, 2, 3].map((c) => /* @__PURE__ */ s.jsx(
      G,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ s.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (d) => t((m) => ({
              ...m,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Lf.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), cy = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "ComfyUI Meld" }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Version" }),
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "0.4.0" })
    ] }) })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Author & Links" }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Author" }),
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "HappyOnigiri" })
    ] }) }),
    /* @__PURE__ */ s.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "GitHub Repository"
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "Star the project or fork it" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld/issues/new/choose",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "Bug Tracker"
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "Report issues or suggest features" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      "a",
      {
        href: "https://x.com/H_OnigiriWorks",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "X (Twitter)"
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "Follow for updates and news" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs(
    "div",
    {
      style: {
        marginTop: "40px",
        fontSize: "11px",
        color: "var(--meld-text-secondary)",
        textAlign: "center"
      },
      children: [
        "© 2024-",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " HappyOnigiri"
      ]
    }
  )
] }), dy = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: l,
  handleToggle: a,
  handleResetShortcuts: o
}) => {
  const i = [
    "viewer.shortcut.1",
    "viewer.shortcut.2",
    "viewer.shortcut.3",
    "viewer.shortcut.4",
    "viewer.shortcut.5",
    "viewer.shortcut.6",
    "viewer.shortcut.7",
    "viewer.shortcut.8",
    "viewer.shortcut.9",
    "viewer.shortcut.0"
  ];
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-help", children: [
      /* @__PURE__ */ s.jsx("p", { children: "These shortcuts are available in both View and Full Screen modes." }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "You can combine multiple commands with spaces.",
        /* @__PURE__ */ s.jsx("br", {}),
        "Example: ",
        /* @__PURE__ */ s.jsx("code", { children: "tag:favorite next" }),
        " (Add tag and move to next)",
        /* @__PURE__ */ s.jsx("br", {}),
        "Use quotes for names with spaces. Example: ",
        /* @__PURE__ */ s.jsx("code", { children: 'lt:"My Best"' })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-help__commands", children: [
        /* @__PURE__ */ s.jsx("strong", { children: "Available commands:" }),
        /* @__PURE__ */ s.jsxs("ul", { children: [
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "tag:NAME" }),
            " - Add a tag"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "-tag:NAME" }),
            " - Remove a tag"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "tag-toggle:NAME" }),
            " - Toggle a tag"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "lt:SLOT_ID" }),
            " - Send to Light Table (Example:",
            " ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:keep" }),
            ", ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:refine" }),
            ",",
            " ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:trash" }),
            ")"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "next" }),
            " / ",
            /* @__PURE__ */ s.jsx("code", { children: "prev" }),
            " - Navigate images"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "delete" }),
            " - Delete image immediately (No confirm)"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
      i.map((c, d) => /* @__PURE__ */ s.jsx(
        G,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[c] ? "meld-text-input--error" : ""}`,
              value: e[c] || "",
              onChange: (m) => {
                t((y) => ({
                  ...y,
                  [c]: m.target.value
                }));
              },
              onBlur: () => {
                const m = l(
                  e[c] || ""
                );
                r((y) => ({
                  ...y,
                  [c]: !m
                }));
              }
            }
          )
        },
        c
      )),
      /* @__PURE__ */ s.jsx(
        G,
        {
          label: "Show Cheat Sheet",
          description: "Display shortcut key guide in View/Full Screen mode.",
          children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "checkbox",
                checked: !!e["viewer.shortcut.show_cheat_sheet"],
                onChange: () => a(
                  "viewer.shortcut.show_cheat_sheet",
                  !!e["viewer.shortcut.show_cheat_sheet"]
                )
              }
            ),
            /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Reset Shortcuts",
        description: "Restore all shortcuts to their default values.",
        children: /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: o,
            children: "Reset to Defaults"
          }
        )
      }
    ) })
  ] });
}, uy = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: a,
  handleClearThumbnailCache: o,
  lineageMaxDepthInput: i,
  trashRetentionDaysInput: c,
  autoLinkPhashThresholdInput: d,
  suggestPhashThresholdInput: m
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (y) => l((v) => ({
              ...v,
              "gallery.matching_strategy": y.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "phash_created", children: "pHash & Created Time" }),
              /* @__PURE__ */ s.jsx("option", { value: "filename_phash", children: "Filename -> pHash" }),
              /* @__PURE__ */ s.jsx("option", { value: "phash_only", children: "pHash Only" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: d,
            min: 0,
            max: 100,
            onChange: (y) => t(
              "gallery.auto_link_phash_threshold",
              y.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: m,
            min: 0,
            max: 100,
            onChange: (y) => t(
              "gallery.suggest_phash_threshold",
              y.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Inherit Tags from Source",
        description: "Automatically copy tags from the source image when a new image is registered or saved.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.inherit_tags"],
              onChange: () => r(
                "gallery.inherit_tags",
                e["gallery.inherit_tags"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Lineage" }),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 10,
            onChange: (y) => t(
              "gallery.lineage_max_depth",
              y.target.value,
              1,
              10
            ),
            onBlur: () => n({ key: "gallery.lineage_max_depth" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Thumbnail Cache" }),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Clear Thumbnail Cache",
        description: "Delete all cached thumbnails. They will be regenerated on next view.",
        children: /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: o,
            children: "Clear Thumbnail Cache"
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 0,
            max: 365,
            onChange: (y) => t(
              "gallery.trash_retention_days",
              y.target.value,
              0,
              365
            ),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Trash Management",
        description: "View and manage items currently in the trash bin.",
        children: /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: a,
            children: "View Trash"
          }
        )
      }
    )
  ] })
] }), fy = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: a,
  maxPositivePromptLinesInput: o,
  maxNegativePromptLinesInput: i
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in the viewer.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.loop"],
              onChange: () => n("viewer.loop", e["viewer.loop"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.small_image_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ s.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Tool Icons",
        description: "Display navigation and action icons in view mode.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_icons"],
              onChange: () => n(
                "viewer.show_icons",
                e["viewer.show_icons"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Thumbnails",
        description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_thumbnails"],
              onChange: () => n(
                "viewer.show_thumbnails",
                e["viewer.show_thumbnails"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Thumbnail Window Size",
        description: "Number of thumbnails to keep in the viewer (1-10000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 1e4,
            onChange: (c) => r(
              "viewer.thumbnail_window_size",
              c.target.value,
              1,
              1e4
            ),
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.delete_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ s.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ s.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when opening the viewer.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_details_by_default"],
              onChange: () => n(
                "viewer.show_details_by_default",
                e["viewer.show_details_by_default"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.details.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ s.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ s.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Dimensions",
        description: "Display dimensions in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_dimensions"],
              onChange: () => n(
                "viewer.details.show_dimensions",
                e["viewer.details.show_dimensions"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Created At",
        description: "Display generation date/time in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_created_at"],
              onChange: () => n(
                "viewer.details.show_created_at",
                e["viewer.details.show_created_at"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Source Info",
        description: "Display source image information in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_source"],
              onChange: () => n(
                "viewer.details.show_source",
                e["viewer.details.show_source"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Model",
        description: "Display model name in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_model_name"],
              onChange: () => n(
                "viewer.details.show_model_name",
                e["viewer.details.show_model_name"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Positive",
        description: "Display positive prompt in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_positive_prompt"],
              onChange: () => n(
                "viewer.details.show_positive_prompt",
                e["viewer.details.show_positive_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 100,
            onChange: (c) => r(
              "viewer.details.max_positive_prompt_lines",
              c.target.value,
              1,
              100
            ),
            onBlur: () => l({
              key: "viewer.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Negative",
        description: "Display negative prompt in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_negative_prompt"],
              onChange: () => n(
                "viewer.details.show_negative_prompt",
                e["viewer.details.show_negative_prompt"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show User Notes",
        description: "Display user notes in the details panel.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.details.show_user_notes": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ s.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ s.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (c) => r(
              "viewer.details.max_negative_prompt_lines",
              c.target.value,
              1,
              100
            ),
            onBlur: () => l({
              key: "viewer.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      G,
      {
        label: "Show Tags",
        description: "Display tags in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.details.show_tags"],
              onChange: () => n(
                "viewer.details.show_tags",
                e["viewer.details.show_tags"]
              )
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] })
] }), Df = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: l,
    setShortcutErrors: a,
    handleClose: o,
    handleToggle: i,
    handleNumberChange: c,
    handleNumberBlur: d,
    handleResetShortcuts: m,
    handleViewTrash: y,
    handleClearThumbnailCache: v,
    validateShortcut: x,
    // Input states
    initialLoadCountInput: g,
    maxLoadCountInput: _,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: f,
    trashRetentionDaysInput: u,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: w,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: S,
    fullscreenMaxPositivePromptLinesInput: b,
    fullscreenMaxNegativePromptLinesInput: M,
    thumbnailSizeInput: D
  } = ay();
  Ue({ onEscape: o });
  const T = h.useRef(!1), I = (U) => {
    U.target === U.currentTarget && (T.current = !0);
  }, F = (U) => {
    U.target === U.currentTarget && T.current && o(), T.current = !1;
  }, V = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], N = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          uy,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: y,
            handleClearThumbnailCache: v,
            lineageMaxDepthInput: k,
            trashRetentionDaysInput: u,
            autoLinkPhashThresholdInput: p,
            suggestPhashThresholdInput: w
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          iy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: D,
            initialLoadCountInput: g,
            maxLoadCountInput: _
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          fy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: f,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: S
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          oy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: b,
            maxNegativePromptLinesInput: M
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          dy,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: x,
            handleToggle: i,
            handleResetShortcuts: m
          }
        );
      case "Information":
        return /* @__PURE__ */ s.jsx(cy, {});
      default:
        return null;
    }
  };
  return de.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: I,
        onMouseUp: F,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (U) => U.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: o,
                    children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: V.map((U) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === U.id ? "active" : ""}`,
                    onClick: () => t(U.id),
                    children: U.label
                  },
                  U.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: N() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, xt = "none", ll = (e) => {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}, qe = (e) => {
  e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
}, my = () => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return !1;
  const t = e.tagName;
  return t === "INPUT" || t === "TEXTAREA" || e.isContentEditable;
}, Rf = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = ge(), [o, i] = h.useState([]), [c, d] = h.useState(t), [m, y] = h.useState(""), [v, x] = h.useState(!0), [g, _] = h.useState(!1), k = h.useRef(null), f = e.length > 1, u = h.useRef(!1), p = (I) => {
    I.target === I.currentTarget && (u.current = !0);
  }, w = (I) => {
    I.target === I.currentTarget && u.current && n(), u.current = !1;
  }, j = h.useCallback(async () => {
    x(!0);
    try {
      const I = await hi();
      i(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      x(!1);
    }
  }, []);
  h.useEffect(() => {
    j();
  }, [j]), h.useEffect(() => {
    k.current && k.current.focus();
  }, []), Ue({ onEscape: n });
  const S = h.useMemo(() => o.filter(
    (I) => I.name.toLowerCase().includes(m.toLowerCase()) && !c.includes(I.name)
  ), [o, m, c]), b = (I) => {
    const F = I.trim();
    if (F.toLowerCase() === xt) {
      alert(
        `Tag name '${xt}' is reserved for search and cannot be used.`
      );
      return;
    }
    F && !c.includes(F) && (d([...c, F]), y(""));
  }, M = (I) => {
    d(c.filter((F) => F !== I));
  }, D = async () => {
    _(!0);
    try {
      if (f) {
        const I = c.filter((V) => !t.includes(V)), F = t.filter(
          (V) => !c.includes(V)
        );
        await co(e, I, F);
      } else
        await gg(e[0], c);
      await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (I) {
      console.error("Failed to update tags:", I), alert("Failed to update tags.");
    } finally {
      _(!1);
    }
  }, T = (I) => {
    I.key === "Enter" && m.trim() && (qe(I), b(m.trim()));
  };
  return de.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: p,
        onMouseUp: w,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (I) => I.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(pr, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: f ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            f && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: f ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((I) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                I,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => M(I),
                    children: /* @__PURE__ */ s.jsx(pe, { size: 12 })
                  }
                )
              ] }, I)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(In, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: k,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: m,
                    onChange: (I) => y(I.target.value),
                    onKeyDown: T
                  }
                ),
                m.trim() && !c.includes(m.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => b(m),
                    children: [
                      /* @__PURE__ */ s.jsx(Os, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: v ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : S.length === 0 ? m ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : S.map((I) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => b(I.name),
                  children: I.name
                },
                I.id
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
                onClick: D,
                disabled: g,
                children: g ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, As = (e, t) => {
  const n = h.useCallback(async (x) => {
    try {
      const g = await vg(x.id);
      return g.workflow ? (await window.app.loadGraphData(
        g.workflow
      ), Y.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (g) {
      return Y.error("Error restoring workflow:", g), alert("Failed to restore workflow."), !1;
    }
  }, []), r = h.useCallback(async (x) => {
    try {
      const g = await wg(x.id), _ = g.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", k = window.app, u = window.LiteGraph.createNode(_);
      if (!u)
        return console.error(`Node type ${_} not found.`), alert(
          `Node type ${_} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const p = g.is_flux ? {
        model_name: "model_name",
        clip_name1: "clip_name1",
        clip_name2: "clip_name2",
        clip_type: "clip_type",
        clip_device: "clip_device",
        positive: "positive",
        seed: "seed",
        steps: "steps",
        guidance: "guidance",
        sampler_name: "sampler_name",
        scheduler: "scheduler",
        width: "width",
        height: "height"
      } : {
        model_name: "model_name",
        positive: "positive",
        negative: "negative",
        seed: "seed",
        steps: "steps",
        cfg: "cfg",
        sampler_name: "sampler_name",
        scheduler: "scheduler",
        width: "width",
        height: "height"
      };
      if (u.widgets) {
        for (const [b, M] of Object.entries(p)) {
          const D = g[b];
          if (D != null && D !== "") {
            const T = u.widgets.find(
              (I) => I.name === M
            );
            T && (T.value = D);
          }
        }
        const S = u.widgets.find(
          (b) => b.name === "control_after_generate"
        );
        S && (S.value = "fixed");
      }
      const w = k.canvas.ds.offset, j = k.canvas.ds.scale;
      return u.pos = [(-w[0] + 400) / j, (-w[1] + 300) / j], k.graph.add(u), k.canvas.selectNode(u), k.canvas.centerOnNode(u), !0;
    } catch (g) {
      return console.error("Error adding Unified Loader:", g), alert("Failed to load settings."), !1;
    }
  }, []), l = h.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [x.id],
          tags: x.tags || []
        }
      });
    },
    [t]
  ), a = h.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "note_edit",
          imageId: x.id,
          notes: x.user_notes || ""
        }
      });
    },
    [t]
  ), o = h.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), i = h.useCallback(
    (x) => {
      const g = window.app;
      if (!(g != null && g.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const _ = (u) => {
        if (!u) return !1;
        const p = u.replace(/\s+/g, "").toLowerCase();
        return p === "meldimageloader" || p === "loadimage";
      }, k = g.graph._nodes.filter(
        (u) => _(u.type)
      );
      if (k.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (k.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: x,
            nodes: k.map(
              (u) => ({
                id: String(u.id),
                type: u.type,
                title: u.title
              })
            ),
            onSelect: (u) => {
              rl(x, u);
            }
          }
        }), !0;
      const f = rl(x);
      return f.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: f.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), c = h.useCallback(
    (x) => {
      const g = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: g }
      });
    },
    [t]
  ), d = h.useCallback(
    async (x, g = "run") => {
      var k;
      console.log("[Meld] handleRunWithMask called", x, g);
      const _ = Array.isArray(x) ? x : [x];
      if (g === "apply") {
        const f = window.app, u = ((k = f == null ? void 0 : f.graph) == null ? void 0 : k._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          u.map((j) => ({
            id: j.id,
            type: j.type
          }))
        );
        const p = u.some(
          (j) => j.type === "LoadImageMask"
        ), w = u.some(
          (j) => j.type === "MeldImageLoader" || j.type === "LoadImage" || j.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: p, hasLoaderNode: w }), !p || !w) {
          const j = [];
          w || j.push("'Meld Image Loader'"), p || j.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${j.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
        if (_.length > 1) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "'Apply' mode without queueing only supports single image selection."
            }
          });
          return;
        }
        t({
          type: "OPEN_MODAL",
          payload: { type: "mask_editor", imageId: _[0].id, mode: g }
        });
        return;
      }
      try {
        if (!(await vf()).some(
          (p) => p.valid && p.mask_count >= 1
        )) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "No workflows found with at least one 'Load Image (as Mask)' node. Please save a compatible workflow first."
            }
          });
          return;
        }
      } catch (f) {
        console.error("[Meld] Error checking workflows:", f);
      }
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "workflow_selection",
          images: _,
          isMaskSequence: !0
        }
      });
    },
    [t]
  ), m = h.useCallback(
    async (x, g) => {
      try {
        const _ = x.id, f = (await ui([_])).restored_ids || [_];
        t({ type: "REMOVE_IMAGES", payload: f }), g == null || g();
      } catch (_) {
        t({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    [t]
  ), y = h.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [x.id],
          hasLineage: !!(x.parent_id || x.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
    },
    [e.viewScope, t]
  ), v = h.useCallback(
    async (x, g) => {
      try {
        const _ = await yg(
          x,
          g
        );
        t({ type: "UPDATE_IMAGE", payload: _ });
      } catch (_) {
        t({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    [t]
  );
  return {
    handleRestoreWorkflow: n,
    handleAddUnifiedLoader: r,
    handleEditTags: l,
    handleEditSource: o,
    handleSendToWorkflow: i,
    handleRunWithWorkflow: c,
    handleRunWithMask: d,
    handleRestore: m,
    handleDelete: y,
    handleEditNotes: a,
    handleUpdateUserNotes: v
  };
}, Pf = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = ge(), { handleUpdateUserNotes: a } = As(r, l), [o, i] = h.useState(t), [c, d] = h.useState(!1), m = h.useRef(null), y = h.useRef(!1), v = (_) => {
    _.target === _.currentTarget && (y.current = !0);
  }, x = (_) => {
    _.target === _.currentTarget && y.current && n(), y.current = !1;
  };
  h.useEffect(() => {
    m.current && m.current.focus();
  }, []);
  const g = h.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (_) {
      console.error("Failed to update notes:", _), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return h.useEffect(() => {
    const _ = (k) => {
      k.key === "Enter" && (k.ctrlKey || k.metaKey) && k.target === m.current && (k.preventDefault(), k.stopPropagation(), k.stopImmediatePropagation(), g());
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => {
      window.removeEventListener("keydown", _, {
        capture: !0
      });
    };
  }, [g]), Ue({ onEscape: n }), de.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
        onMouseUp: x,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(tg, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ s.jsx(
              "textarea",
              {
                ref: m,
                className: "meld-image-card__notes-textarea",
                style: {
                  width: "100%",
                  minHeight: "200px",
                  backgroundColor: "var(--meld-input-bg)",
                  color: "var(--meld-input-text)",
                  border: "1px solid var(--meld-border-color)",
                  borderRadius: "4px",
                  padding: "8px",
                  fontSize: "0.9rem",
                  resize: "vertical"
                },
                placeholder: "Add notes...",
                value: o,
                onChange: (_) => i(_.target.value)
              }
            ),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                style: {
                  fontSize: "0.8rem",
                  color: "var(--meld-text-secondary)",
                  marginTop: "8px",
                  textAlign: "right"
                },
                children: "Press Ctrl+Enter or Cmd+Enter to save"
              }
            )
          ] }) }),
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
                onClick: g,
                disabled: c,
                children: c ? "Saving..." : "Save Notes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Of = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = ge(), l = h.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  Ue({ onEscape: l });
  const a = h.useRef(!1), o = h.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = h.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && l(), a.current = !1;
    },
    [l]
  );
  return de.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: o,
        onMouseUp: i,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (c) => c.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Select Target Node" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: l,
                    children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    style: {
                      marginBottom: "15px",
                      fontSize: "14px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: [
                      "Multiple loader nodes found in the current workflow. Select which one to use for ",
                      /* @__PURE__ */ s.jsx("strong", { children: e.filename }),
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: t.map((c) => /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-workflow-node-item",
                    onClick: () => {
                      n(c.id), l();
                    },
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                        /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: c.title || c.type }),
                        /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                          "#",
                          c.id
                        ] })
                      ] }),
                      /* @__PURE__ */ s.jsx(tl, { size: 12 })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: l,
                  children: "Cancel"
                }
              ) })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Af = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var P;
  const { dispatch: l } = ge(), [a, o] = h.useState([]), [i, c] = h.useState(!0), [d, m] = h.useState(null), [y, v] = h.useState(!1), [x, g] = h.useState(null), [_, k] = h.useState({}), [f, u] = h.useState({}), [p, w] = h.useState(""), j = h.useRef(null), S = h.useMemo(() => a.map((L) => {
    let C = L.valid, R = L.reason;
    return r && L.mask_count === 0 && (C = !1, R = "No 'Load Image (as Mask)' node found."), { ...L, valid: C, reason: R };
  }).sort((L, C) => L.valid !== C.valid ? L.valid ? -1 : 1 : L.name.localeCompare(C.name)), [a, r]), b = h.useMemo(() => {
    if (!p.trim()) return S;
    const L = p.toLowerCase();
    return S.filter(
      (C) => C.name.toLowerCase().includes(L)
    );
  }, [S, p]), M = h.useCallback(async () => {
    try {
      c(!0);
      const L = await vf();
      o(L), m(null);
    } catch (L) {
      m(L instanceof Error ? L.message : String(L));
    } finally {
      c(!1);
    }
  }, []);
  h.useEffect(() => {
    M();
  }, [M]), h.useEffect(() => {
    !i && j.current && j.current.focus();
  }, [i]);
  const D = h.useCallback(() => {
    l({ type: "CLOSE_MODAL" });
  }, [l]);
  Ue({ onEscape: D });
  const T = h.useRef(!1), I = h.useCallback((L) => {
    L.target === L.currentTarget && (T.current = !0);
  }, []), F = h.useCallback(
    (L) => {
      L.target === L.currentTarget && T.current && D(), T.current = !1;
    },
    [D]
  ), V = async (L, C) => {
    if (!y)
      try {
        v(!0);
        const R = await t(L, C);
        n == null || n(), R !== !1 && D();
      } catch (R) {
        m(R instanceof Error ? R.message : String(R)), v(!1);
      }
  }, N = async (L) => {
    if (!(_[L] || f[L]))
      try {
        u((E) => ({ ...E, [L]: !0 }));
        const C = await wf(L), R = [], O = (E) => {
          if (!E) return !1;
          const z = E.replace(/\s+/g, "").toLowerCase();
          return r ? z === "loadimagemask" : z === "meldimageloader" || z === "loadimage";
        };
        if (C.nodes && Array.isArray(C.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            C.nodes.length
          );
          for (const E of C.nodes)
            O(E.type) && (console.log(
              "[Meld] Found target node (UI):",
              E.id,
              E.type,
              E.title
            ), R.push({
              id: String(E.id),
              type: E.type || "",
              title: E.title
            }));
        } else {
          console.log("[Meld] Extracting nodes from API format workflow");
          for (const E in C) {
            const z = C[E];
            z && typeof z == "object" && O(z.class_type) && (console.log(
              "[Meld] Found target node (API):",
              E,
              z.class_type
            ), R.push({
              id: E,
              type: z.class_type || ""
            }));
          }
        }
        R.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), k((E) => ({ ...E, [L]: R }));
      } catch (C) {
        console.error("Failed to fetch workflow nodes:", C);
      } finally {
        u((C) => ({ ...C, [L]: !1 }));
      }
  }, U = (L) => {
    if (!L.valid || y) return;
    if ((r ? L.mask_count : L.loader_count + L.load_image_count) <= 1) {
      V(L.name);
      return;
    }
    x === L.name ? g(null) : (g(L.name), N(L.name));
  };
  return de.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: I,
        onMouseUp: F,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (L) => L.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(di, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: D,
                    children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(lf, { size: 20 }),
                /* @__PURE__ */ s.jsx("span", { children: d })
              ] }) : a.length === 0 ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  style: {
                    padding: "40px",
                    textAlign: "center",
                    color: "var(--meld-text-secondary)"
                  },
                  children: "No workflows found in ComfyUI/user/default/workflows"
                }
              ) : /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-list", children: [
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    style: {
                      marginBottom: "15px",
                      fontSize: "14px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: [
                      "Select a workflow to process",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (P = e[0]) == null ? void 0 : P.filename }),
                      ". Workflows must have at least one",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: "Meld Image Loader" }),
                      " or",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: "Load Image" }),
                      " node",
                      r && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                        " ",
                        "and one ",
                        /* @__PURE__ */ s.jsx("strong", { children: "Load Image (as Mask)" }),
                        " node"
                      ] }),
                      "."
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-tag-search-container",
                    style: { marginBottom: "12px" },
                    children: [
                      /* @__PURE__ */ s.jsx(In, { className: "meld-tag-search-icon", size: 16 }),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          ref: j,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: p,
                          onChange: (L) => w(L.target.value)
                        }
                      ),
                      p && /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var L;
                            w(""), (L = j.current) == null || L.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ s.jsx(pe, { size: 14 })
                        }
                      )
                    ]
                  }
                ),
                b.length === 0 ? /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : b.map((L) => {
                  const C = r ? L.mask_count : L.loader_count + L.load_image_count, R = x === L.name, O = _[L.name] || [], E = f[L.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${L.valid ? "" : "meld-workflow-item--invalid"} ${R ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => U(L),
                        title: L.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: L.name }),
                            !L.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: L.reason }),
                            L.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__supports", children: C > 1 ? `Multiple loaders found (${C})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${L.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          L.valid && C <= 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: y,
                              onClick: (z) => {
                                z.stopPropagation(), V(L.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(tl, { size: 14 }),
                                y ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          L.valid && C > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: y,
                              onClick: (z) => {
                                z.stopPropagation(), U(L);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                R ? "Close" : "Select Node",
                                /* @__PURE__ */ s.jsx(
                                  ci,
                                  {
                                    size: 14,
                                    style: {
                                      transform: R ? "rotate(90deg)" : "rotate(0deg)",
                                      transition: "transform 0.2s"
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    R && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker", children: E ? /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: O.map((z) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: y,
                          onClick: () => V(L.name, z.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: z.title || z.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                z.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(tl, { size: 12 })
                          ]
                        },
                        z.id
                      )) })
                    ] }) })
                  ] }, L.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: D,
                  disabled: y,
                  children: "Cancel"
                }
              ) })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, hy = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => {
  const r = h.useRef(null), l = h.useRef(null);
  return Ue({ onEscape: n }), h.useEffect(() => {
    if (l.current = document.activeElement, r.current) {
      const o = r.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      o.length > 0 ? o[0].focus() : r.current.focus();
    }
    const a = (o) => {
      if (o.key === "Tab") {
        if (!r.current) return;
        const i = r.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (i.length === 0) return;
        const c = i[0], d = i[i.length - 1];
        o.shiftKey ? document.activeElement === c && (d.focus(), o.preventDefault()) : document.activeElement === d && (c.focus(), o.preventDefault());
      }
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), l.current && typeof l.current.focus == "function" && l.current.focus();
    };
  }, []), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-confirm-modal__overlay",
      onClick: n,
      onKeyDown: (a) => {
        a.key === "Enter" && n();
      },
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: r,
          className: "meld-confirm-modal__dialog",
          onClick: (a) => a.stopPropagation(),
          onKeyDown: (a) => a.stopPropagation(),
          role: "alertdialog",
          "aria-modal": "true",
          "aria-label": e,
          tabIndex: -1,
          children: [
            /* @__PURE__ */ s.jsx("p", { className: "meld-confirm-modal__message", children: e }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-confirm-modal__actions", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                  onClick: n,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-confirm-modal__btn meld-confirm-modal__btn--confirm",
                  onClick: t,
                  children: "OK"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, mo = async (e, t) => {
  await hg(e, t), re.getState().removeImages(e);
}, zf = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = ge(), o = h.useRef(!0);
  h.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = h.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = h.useMemo(
    () => l.searchQuery.trim() !== "",
    [l.searchQuery]
  ), d = h.useMemo(() => l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? (re.getState().buckets[l.viewerLightTableSlotId] || []).map((w) => {
    const j = Number.parseInt(w, 10);
    return l.images.find((S) => S.id === j) || l.lineageImages.find((S) => S.id === j) || null;
  }).filter((w) => w !== null) : l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
    (u) => u.exists !== !1 && (l.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
  ), [
    l.viewerMode,
    l.viewerLightTableSlotId,
    l.lineageImages,
    l.images,
    l.settings,
    c,
    i
  ]), m = h.useRef(l.viewerImageId);
  h.useEffect(() => {
    m.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const y = h.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  Ue({ onEscape: y });
  const v = h.useRef(!1), x = h.useCallback((u) => {
    u.target === u.currentTarget && (v.current = !0);
  }, []), g = h.useCallback(
    (u) => {
      u.target === u.currentTarget && v.current && y(), v.current = !1;
    },
    [y]
  ), _ = h.useCallback(
    (u) => {
      if (!o.current) return;
      const p = m.current;
      if (p === null || !u.has(p))
        return;
      const w = d.findIndex(
        (S) => S.id === p
      );
      if (w === -1) return;
      let j = !1;
      for (let S = w + 1; S < d.length; S++)
        if (!u.has(d[S].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: {
              id: d[S].id,
              mode: l.viewerMode,
              // Preserve slotId in lighttable mode to stay within the slot
              ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
            }
          }), j = !0;
          break;
        }
      if (!j) {
        for (let S = w - 1; S >= 0; S--)
          if (!u.has(d[S].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: {
                id: d[S].id,
                mode: l.viewerMode,
                // Preserve slotId in lighttable mode to stay within the slot
                ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
              }
            }), j = !0;
            break;
          }
      }
      j || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, l.viewerLightTableSlotId, d, a]
  ), k = async () => {
    var u, p;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const w = new Set(e), j = d.filter(
        (S) => w.has(S.id)
      );
      if (_(w), await mo(e, n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((p = (u = l.activeModal).onSuccess) == null || p.call(u)), !n && r && r(j), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (w) {
      a({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, f = async () => {
    var u, p;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const w = new Set(e);
      for (const S of e) {
        const b = await fi(S);
        if (!o.current) return;
        for (const M of b)
          w.add(M.id);
      }
      const j = d.filter(
        (S) => w.has(S.id)
      );
      if (_(w), await mo(
        Array.from(w),
        n
      ), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((p = (u = l.activeModal).onSuccess) == null || p.call(u)), !n && r && r(j), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(w)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (w) {
      a({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return de.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: x,
        onMouseUp: g,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(Ut, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: y,
                    children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  style: {
                    padding: "10px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                  },
                  children: [
                    /* @__PURE__ */ s.jsxs("p", { children: [
                      "Are you sure you want to",
                      " ",
                      n ? "permanently delete" : "move to trash",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: e.length }),
                      " selected items?"
                    ] }),
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        style: {
                          padding: "12px",
                          backgroundColor: "var(--comfy-input-bg, rgba(255, 0, 0, 0.1))",
                          border: `1px solid ${n ? "var(--meld-danger-color)" : "var(--meld-accent-color)"}`,
                          borderRadius: "4px",
                          display: "flex",
                          gap: "10px"
                        },
                        children: [
                          /* @__PURE__ */ s.jsx(
                            Dp,
                            {
                              size: 20,
                              style: {
                                color: n ? "var(--meld-danger-color)" : "var(--meld-accent-color)",
                                flexShrink: 0
                              }
                            }
                          ),
                          /* @__PURE__ */ s.jsx("div", { style: { fontSize: "13px" }, children: n ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                            /* @__PURE__ */ s.jsx("strong", { children: "WARNING:" }),
                            " Physical files will be permanently deleted from the trash bin. This operation cannot be undone."
                          ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                            /* @__PURE__ */ s.jsx("strong", { children: "INFO:" }),
                            " Selected items will be moved to the trash bin. You can restore them later from the settings."
                          ] }) })
                        ]
                      }
                    ),
                    t && /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        style: {
                          padding: "12px",
                          backgroundColor: "var(--comfy-input-bg-active, rgba(0, 150, 255, 0.1))",
                          border: "1px solid var(--meld-accent-color)",
                          borderRadius: "4px",
                          fontSize: "13px"
                        },
                        children: [
                          "Selected images include items with a ",
                          /* @__PURE__ */ s.jsx("strong", { children: "Source" }),
                          " or derivatives. You can choose to delete just the selected items or all related items (lineage)."
                        ]
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn-secondary",
                    onClick: y,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: k,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: f,
                      children: n ? "Delete All Related" : "Move All Related"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Ff = ({ message: e }) => {
  const { dispatch: t } = ge(), n = h.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return Ue({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(lf, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsx(
      "div",
      {
        style: { padding: "20px 0", textAlign: "center", fontSize: "14px" },
        children: e
      }
    ) }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
      "button",
      {
        className: "meld-btn meld-btn-primary",
        onClick: n,
        type: "button",
        children: "OK"
      }
    ) })
  ] }) });
}, Wf = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = ge(), [l, a] = h.useState([]), [o, i] = h.useState(!0), [c, d] = h.useState(!1), m = h.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  Ue({ onEscape: m });
  const y = h.useRef(!1), v = (S) => {
    S.target === S.currentTarget && (y.current = !0);
  }, x = (S) => {
    S.target === S.currentTarget && y.current && m(), y.current = !1;
  }, g = t.images.find((S) => S.id === e), _ = h.useCallback(async () => {
    i(!0);
    try {
      const S = t.settings["gallery.suggest_phash_threshold"], b = await pg(e, S);
      a(b);
    } catch (S) {
      console.error("Failed to load suggestions:", S);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  h.useEffect(() => {
    _();
  }, [_]);
  const k = async (S) => {
    if (S == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!g || S === g.parent_id) && !(g.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Nc(e, S), await mf(e), await r(), m();
      } catch (b) {
        console.error("Failed to link parent:", b);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Nc(e, null), await r(), m();
      } catch (S) {
        console.error("Failed to remove source:", S), alert("Failed to remove source image.");
      }
  }, u = async (S) => {
    i(!0);
    try {
      const b = await Kg(S), { id: M } = await hf({
        filename: b.name,
        subfolder: b.subfolder || "",
        type: b.type || "input"
      });
      if (M === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await k(M);
    } catch (b) {
      console.error("Failed to upload/register image:", b);
    } finally {
      i(!1);
    }
  }, p = (S) => {
    S.preventDefault(), S.stopPropagation(), d(!1);
    const b = S.dataTransfer.files[0];
    b != null && b.type.startsWith("image/") && u(b);
  };
  if (!g) return null;
  const w = l.filter((S) => S.is_source_match), j = l.filter((S) => !S.is_source_match);
  return de.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
        onMouseUp: x,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (S) => S.stopPropagation(), children: [
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
                onClick: m,
                children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            g.parent_id && /* @__PURE__ */ s.jsxs(
              "div",
              {
                style: {
                  marginBottom: "16px",
                  padding: "12px",
                  backgroundColor: "var(--comfy-input-bg, rgba(0, 0, 0, 0.1))",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid var(--meld-border-color, #444)"
                },
                children: [
                  /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        minWidth: 0
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(Gp, { size: 16, color: "var(--meld-accent-color)" }),
                        /* @__PURE__ */ s.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ s.jsx(
                                "span",
                                {
                                  style: {
                                    fontSize: "0.8em",
                                    color: "var(--meld-text-secondary)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em"
                                  },
                                  children: "Current Source"
                                }
                              ),
                              /* @__PURE__ */ s.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    minWidth: 0
                                  },
                                  children: [
                                    g.parent_filename && /* @__PURE__ */ s.jsx(
                                      "img",
                                      {
                                        src: mt(
                                          {
                                            filename: g.parent_filename,
                                            subfolder: g.parent_subfolder || "",
                                            type: g.parent_type || "output"
                                          },
                                          64
                                        ),
                                        alt: "Current Source",
                                        style: {
                                          width: "40px",
                                          height: "40px",
                                          objectFit: "cover",
                                          borderRadius: "4px",
                                          border: "1px solid var(--meld-border-color)"
                                        }
                                      }
                                    ),
                                    /* @__PURE__ */ s.jsxs(
                                      "div",
                                      {
                                        style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          minWidth: 0
                                        },
                                        children: [
                                          /* @__PURE__ */ s.jsx(
                                            "span",
                                            {
                                              style: {
                                                fontWeight: "bold",
                                                fontSize: "0.95em",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                              },
                                              children: g.parent_filename || "Unknown Image"
                                            }
                                          ),
                                          /* @__PURE__ */ s.jsxs(
                                            "span",
                                            {
                                              style: {
                                                color: "var(--meld-text-secondary)",
                                                fontSize: "0.85em"
                                              },
                                              children: [
                                                "#",
                                                g.parent_id
                                              ]
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  ]
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger meld-btn--sm",
                      style: {
                        flexShrink: 0,
                        width: "32px",
                        height: "32px",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%"
                      },
                      onClick: f,
                      title: "Remove Source",
                      children: /* @__PURE__ */ s.jsx(Kp, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${c ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (S) => {
                  S.preventDefault(), S.stopPropagation(), d(!0);
                },
                onDragOver: (S) => {
                  S.preventDefault(), S.stopPropagation(), S.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (S) => {
                  S.preventDefault(), S.stopPropagation(), d(!1);
                },
                onDrop: p,
                children: [
                  /* @__PURE__ */ s.jsx(sg, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              w.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: w.map((S) => {
                  const b = S.id === g.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && k(S.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "img",
                          {
                            src: mt(S, 64),
                            alt: S.filename
                          }
                        ),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: S.filename }),
                          b && /* @__PURE__ */ s.jsx(
                            "span",
                            {
                              style: {
                                fontSize: "8px",
                                color: "var(--meld-accent-color)",
                                fontWeight: "bold",
                                marginTop: "2px"
                              },
                              children: "CURRENT SOURCE"
                            }
                          )
                        ] })
                      ]
                    },
                    S.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                j.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: j.map((S) => {
                  const b = S.id === g.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && k(S.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "img",
                          {
                            src: mt(S, 64),
                            alt: S.filename
                          }
                        ),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: S.filename }),
                          /* @__PURE__ */ s.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "2px"
                              },
                              children: [
                                /* @__PURE__ */ s.jsxs("span", { className: "meld-suggestion-distance", children: [
                                  "Match:",
                                  " ",
                                  Math.round((64 - S.distance) / 64 * 100),
                                  "%"
                                ] }),
                                b && /* @__PURE__ */ s.jsx(
                                  "span",
                                  {
                                    style: {
                                      fontSize: "8px",
                                      color: "var(--meld-accent-color)",
                                      fontWeight: "bold"
                                    },
                                    children: "CURRENT"
                                  }
                                )
                              ]
                            }
                          )
                        ] })
                      ]
                    },
                    S.id
                  );
                }) }) : /* @__PURE__ */ s.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, py = () => {
  const { state: e, dispatch: t } = ge(), n = e.toastMessage;
  return h.useEffect(() => {
    if (n) {
      const r = setTimeout(() => {
        t({ type: "HIDE_TOAST" });
      }, 3e3);
      return () => clearTimeout(r);
    }
  }, [n, t]), n ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `meld-toast ${e.toastType === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: n
    }
  ) : null;
}, gy = () => {
  const { state: e, dispatch: t } = ge(), { executeWorkflow: n } = pi();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      Af,
      {
        images: e.activeModal.images,
        isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
        onExecute: async (r, l) => {
          if (e.activeModal.type === "workflow_selection") {
            if (e.activeModal.isMaskSequence)
              return t({
                type: "OPEN_MODAL",
                payload: {
                  type: "mask_sequence_step",
                  images: e.activeModal.images,
                  currentIndex: 0,
                  workflowName: r,
                  targetLoaderNodeId: l
                }
              }), !1;
            const a = e.activeModal.maskFilename, o = e.activeModal.onSuccess;
            for (const i of e.activeModal.images)
              await n(
                r,
                i,
                a,
                l
              );
            o == null || o();
          }
        }
      }
    ),
    e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
      Of,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && rl(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && de.createPortal(
      /* @__PURE__ */ s.jsx(Wf, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && de.createPortal(/* @__PURE__ */ s.jsx(yf, {}), document.body),
    e.activeModal.type === "settings" && de.createPortal(/* @__PURE__ */ s.jsx(Df, {}), document.body),
    e.activeModal.type === "tag_edit" && de.createPortal(
      /* @__PURE__ */ s.jsx(
        Rf,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && de.createPortal(
      /* @__PURE__ */ s.jsx(Ff, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && de.createPortal(
      /* @__PURE__ */ s.jsx(
        zf,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent,
          onSuccess: () => {
            var r, l;
            e.activeModal.type === "delete_confirm" && ((l = (r = e.activeModal).onSuccess) == null || l.call(r));
          }
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && de.createPortal(
      /* @__PURE__ */ s.jsx(
        ws,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && de.createPortal(
      /* @__PURE__ */ s.jsx(
        ws,
        {
          imageId: e.activeModal.images[e.activeModal.currentIndex].id,
          mode: "run_sequence",
          sequenceData: {
            workflowName: e.activeModal.workflowName,
            targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
            currentIndex: e.activeModal.currentIndex,
            totalCount: e.activeModal.images.length
          },
          onSuccess: () => {
            if (e.activeModal.type === "mask_sequence_step") {
              const r = e.activeModal.currentIndex + 1;
              r < e.activeModal.images.length ? t({
                type: "OPEN_MODAL",
                payload: {
                  ...e.activeModal,
                  currentIndex: r
                }
              }) : t({ type: "CLOSE_MODAL" });
            }
          },
          onClose: () => t({ type: "CLOSE_MODAL" })
        },
        e.activeModal.images[e.activeModal.currentIndex].id
      ),
      document.body
    ),
    e.activeModal.type === "note_edit" && de.createPortal(
      /* @__PURE__ */ s.jsx(
        Pf,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && de.createPortal(
      /* @__PURE__ */ s.jsx(
        Jg,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && de.createPortal(
      /* @__PURE__ */ s.jsx(
        hy,
        {
          message: e.confirmModal.message,
          onConfirm: () => {
            var r;
            (r = e.confirmModal) == null || r.onConfirm(), t({ type: "CLOSE_CONFIRM_MODAL" });
          },
          onCancel: () => {
            var r, l;
            (l = (r = e.confirmModal) == null ? void 0 : r.onCancel) == null || l.call(r), t({ type: "CLOSE_CONFIRM_MODAL" });
          }
        }
      ),
      document.body
    ),
    e.toastMessage && de.createPortal(/* @__PURE__ */ s.jsx(py, {}), document.body)
  ] });
}, yy = () => {
  const { state: e, dispatch: t } = ge(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Zg(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (m) {
      console.error("Failed to cancel scan:", m);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, d = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
  return /* @__PURE__ */ s.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ s.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : a ? /* @__PURE__ */ s.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ s.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-progress-stats-compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-progress-container-compact", children: /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-progress-bar",
        style: { width: `${d}%` }
      }
    ) }),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-stop-compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ s.jsx(ff, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(Ap, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ s.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-ok-compact",
        onClick: l,
        children: "OK"
      }
    )
  ] }) });
}, gi = {
  lightTable: {
    id: "meld-light-table-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  },
  bulkActionBar: {
    id: "meld-bulk-bar-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  }
}, vy = Object.keys(gi), Lc = /* @__PURE__ */ new Map(), Dc = "data-meld-portal-root";
let ma = null, ha = null;
const Rc = ".comfyui-body-bottom";
function Pc(e) {
  var n, r, l, a;
  const t = `[${Dc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (i.nodeType !== Node.ELEMENT_NODE) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Dc) || (r = c.querySelector) != null && r.call(c, t) || (l = c.matches) != null && l.call(c, Rc) || (a = c.querySelector) != null && a.call(c, Rc)) return !0;
  }
  return !1;
}
function wy(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function xy(e) {
  const t = gi[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function $f(e) {
  const t = gi[e], n = Lc.get(e) ?? xy(e);
  Lc.set(e, n);
  const r = wy(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function Uf() {
  for (const e of vy)
    $f(e);
}
function Oc() {
  ha === null && (ha = requestAnimationFrame(() => {
    ha = null, Uf();
  }));
}
function Vf(e) {
  return $f(e);
}
function _y() {
  ma || typeof document > "u" || !document.body || (Uf(), ma = new MutationObserver((e) => {
    for (const t of e) {
      if (Pc(t.addedNodes)) {
        Oc();
        return;
      }
      if (Pc(t.removedNodes)) {
        Oc();
        return;
      }
    }
  }), ma.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
const zs = ({
  onKeyDown: e,
  enabled: t = !0
}) => {
  h.useEffect(() => {
    if (t)
      return window.addEventListener("keydown", e, { capture: !0 }), () => {
        window.removeEventListener("keydown", e, { capture: !0 });
      };
  }, [e, t]);
}, ky = () => {
  const { state: e } = ge(), t = re((a) => a.slots), n = re((a) => a.addToBucket), r = t.length > 0 && e.selectedIds.size > 0, l = h.useCallback(
    (a) => {
      if (my())
        return;
      const o = e.selectedIds;
      if (!o || o.size === 0)
        return;
      const i = t.find(
        (c) => c.shortcutKey.toLowerCase() === a.key.toLowerCase()
      );
      i && (ll(a), o.forEach((c) => {
        n(i.id, String(c));
      }));
    },
    [t, n, e.selectedIds]
  );
  zs({ onKeyDown: l, enabled: r });
}, Bf = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => (Ue({ onEscape: n }), /* @__PURE__ */ s.jsx(
  "div",
  {
    className: "meld-confirm-modal__overlay",
    onClick: n,
    onKeyDown: (r) => {
      r.key === "Enter" && n();
    },
    role: "presentation",
    children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-confirm-modal__dialog",
        onClick: (r) => r.stopPropagation(),
        onKeyDown: (r) => r.stopPropagation(),
        role: "alertdialog",
        "aria-modal": "true",
        "aria-label": e,
        children: [
          /* @__PURE__ */ s.jsx("p", { className: "meld-confirm-modal__message", children: e }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-confirm-modal__actions", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-confirm-modal__btn meld-confirm-modal__btn--confirm",
                onClick: t,
                children: "OK"
              }
            )
          ] })
        ]
      }
    )
  }
)), sl = ({
  enabled: e,
  insideRefs: t,
  onOutside: n,
  options: r
}) => {
  const l = (r == null ? void 0 : r.capture) ?? !0, a = (r == null ? void 0 : r.ignoreNonPrimary) ?? !0, o = h.useRef(t), i = h.useRef(n);
  h.useEffect(() => {
    o.current = t;
  }, [t]), h.useEffect(() => {
    i.current = n;
  }, [n]), h.useEffect(() => {
    if (!e) return;
    const c = (d) => {
      if (a && (d.pointerType === "mouse" && d.button !== 0 || !d.isPrimary))
        return;
      const m = d.target;
      if (!(m instanceof Node))
        return;
      o.current.some((v) => {
        const x = v.current;
        return x ? x.contains(m) : !1;
      }) || i.current(d);
    };
    return window.addEventListener("pointerdown", c, { capture: l }), () => {
      window.removeEventListener("pointerdown", c, {
        capture: l
      });
    };
  }, [e, l, a]);
}, Sy = (e, t, n, r, l) => {
  if (t.length !== 0)
    switch (e.type) {
      case "delete":
        r({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: t,
            hasLineage: n.some((a) => a.parent_id || a.has_children),
            isPermanent: !1,
            // To make it simple, standard soft delete
            onSuccess: l
          }
        });
        break;
      case "edit_tags": {
        const a = /* @__PURE__ */ new Set();
        for (const o of n)
          if (o.tags)
            for (const i of o.tags)
              a.add(i);
        e.value && a.add(e.value), r({
          type: "OPEN_MODAL",
          payload: {
            type: "tag_edit",
            imageIds: t,
            tags: Array.from(a),
            onSuccess: l
          }
        });
        break;
      }
      case "move_folder":
        console.warn("move_folder action is not yet implemented"), l == null || l();
        break;
      case "queue_workflow":
        r({
          type: "OPEN_MODAL",
          payload: { type: "workflow_selection", images: n, onSuccess: l }
        });
        break;
      case "run_with_mask":
        t.length > 0 && r({
          type: "OPEN_MODAL",
          payload: {
            type: "workflow_selection",
            images: n.filter((a) => t.includes(a.id)),
            isMaskSequence: !0,
            onSuccess: l
          }
        });
        break;
      case "download":
        r({
          type: "OPEN_MODAL",
          payload: { type: "download_options", imageIds: t, onSuccess: l }
        });
        break;
      default:
        console.log(
          `Action ${e.type} executed on ${t.length} images`
        );
        break;
    }
}, jy = ({ config: e }) => {
  var O;
  const t = re((E) => E.buckets), n = re((E) => E.slots), r = re((E) => E.images), l = n.length, { state: a, dispatch: o } = ge(), [i, c] = h.useState(!1), [d, m] = h.useState(!1), [y, v] = h.useState(!1), [x, g] = h.useState(e.label), [_, k] = h.useState(e.color), [f, u] = h.useState([]), [p, w] = h.useState(null), j = h.useRef(null), S = h.useRef(null);
  sl({
    enabled: i,
    insideRefs: [S],
    onOutside: () => c(!1)
  }), sl({
    enabled: y,
    insideRefs: [j],
    onOutside: () => v(!1)
  });
  const b = t[e.id] || [], M = b.length, D = b.map((E) => {
    const z = Number(E);
    let B = a.images.find((A) => A.id === z);
    return B || (B = a.lineageImages.find((A) => A.id === z)), B || (B = r[E]), B;
  }).filter(Boolean);
  h.useEffect(() => {
    u((E) => {
      const z = E.filter((B) => b.includes(String(B)));
      return z.length !== E.length ? z : E;
    });
  }, [b]);
  const T = f.filter(
    (E) => b.includes(String(E))
  ), I = T.length > 0, F = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.add("drag-over");
  }, V = (E) => {
    E.currentTarget.classList.remove("drag-over");
  }, N = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.remove("drag-over");
    const z = E.dataTransfer.getData("text/plain");
    z && z.split(",").forEach((A) => {
      if (A) {
        const Q = A.trim(), J = Number(Q);
        let ie = a.images.find((ce) => ce.id === J);
        ie || (ie = a.lineageImages.find(
          (ce) => ce.id === J
        )), re.getState().addToBucket(e.id, Q, ie);
      }
    });
  }, U = (E, z) => {
    E.stopPropagation();
    let B = [z];
    T.includes(z) ? B = T : (u([z]), w(z)), E.dataTransfer.setData("text/plain", B.join(",")), E.dataTransfer.setData("application/meld-lt-source-slot", e.id), E.dataTransfer.effectAllowed = "move";
  }, P = (E, z) => {
    if (E.dataTransfer.dropEffect === "none") {
      const B = T.includes(z) ? T : [z];
      B.forEach((A) => {
        re.getState().removeFromBucket(e.id, String(A));
      }), u((A) => A.filter((Q) => !B.includes(Q)));
    }
  }, L = (E) => {
    if (M === 0) return;
    const z = {
      type: E
    }, B = I ? T : b.map(Number);
    if (B.length === 0) return;
    const A = B.map((ie) => D.find((ce) => ce.id === ie)).filter(Boolean), Q = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Sy(
      z,
      B,
      A,
      o,
      () => {
        re.getState().showToast(Q[E] ?? "Done");
      }
    );
  }, C = () => {
    re.getState().clearBucket(e.id), re.getState().showToast(`Tab "${e.label}" cleared`), m(!1);
  }, R = () => {
    const E = re.getState();
    E.slots.length <= 1 || (E.removeSlot(e.id), re.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: F,
      onDragLeave: V,
      onDrop: N,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: M === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : D.map((E) => {
          const z = mt(E);
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-lt-slot-panel__image-wrapper${T.includes(E.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (B) => {
                if (B.ctrlKey || B.metaKey)
                  u(
                    (A) => A.includes(E.id) ? A.filter((Q) => Q !== E.id) : [...A, E.id]
                  ), w(E.id);
                else if (B.shiftKey && p !== null) {
                  const A = D.findIndex(
                    (J) => J.id === E.id
                  ), Q = D.findIndex(
                    (J) => J.id === p
                  );
                  if (A !== -1 && Q !== -1) {
                    const J = Math.min(A, Q), ie = Math.max(A, Q), ce = D.slice(J, ie + 1).map((Ie) => Ie.id);
                    u(
                      (Ie) => Array.from(/* @__PURE__ */ new Set([...Ie, ...ce]))
                    );
                  }
                  w(E.id);
                } else
                  u([]), w(null), o({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: E.id,
                      mode: "lighttable",
                      slotId: e.id
                    }
                  });
              },
              onDragStart: (B) => U(B, E.id),
              onDragEnd: (B) => P(B, E.id),
              children: /* @__PURE__ */ s.jsx("img", { src: z, alt: E.filename, draggable: !1 })
            },
            E.id
          );
        }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: j, children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => v(!y),
                disabled: M === 0,
                title: "Actions",
                children: [
                  I ? `Action (${T.length})` : "Action",
                  /* @__PURE__ */ s.jsx(zp, { size: 12 })
                ]
              }
            ),
            y && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: pr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: di
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: ag
              },
              {
                type: "download",
                label: "Download",
                icon: el
              },
              {
                type: "delete",
                label: "Delete",
                icon: Ut,
                danger: !0
              }
            ].map((E) => /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${E.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in E && E.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (z) => z.stopPropagation(),
                onClick: () => {
                  "disabled" in E && E.disabled || (L(E.type), v(!1));
                },
                children: [
                  /* @__PURE__ */ s.jsx(E.icon, { size: 13 }),
                  /* @__PURE__ */ s.jsx("span", { children: E.label })
                ]
              },
              E.type
            )) })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => m(!0),
              title: "Clear Tab",
              disabled: M === 0,
              children: /* @__PURE__ */ s.jsx($p, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: S, children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ s.jsx(uf, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: x,
                    onChange: (E) => g(E.target.value),
                    placeholder: "e.g. Keep"
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-color-${e.id}`, children: "Tab Color:" }),
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      flex: 1
                    },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          id: `slot-color-${e.id}`,
                          type: "color",
                          value: _.startsWith("var") ? ((O = _.match(
                            /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/
                          )) == null ? void 0 : O[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(_) ? _ : "#9ca3af",
                          onChange: (E) => k(E.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          value: _,
                          onChange: (E) => k(E.target.value),
                          placeholder: "#hex or CSS var",
                          style: { flex: 1, minWidth: 0 }
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-save",
                  onClick: () => {
                    const E = re.getState(), z = x.trim();
                    if (!z) {
                      E.showToast(
                        "Error: Tab label cannot be empty",
                        "error"
                      );
                      return;
                    }
                    if (E.slots.some(
                      (A) => A.id !== e.id && (A.label.toLowerCase() === z.toLowerCase() || A.id.toLowerCase() === z.toLowerCase())
                    )) {
                      E.showToast(
                        `Error: "${z}" is already in use`,
                        "error"
                      );
                      return;
                    }
                    E.updateSlot(e.id, {
                      label: z,
                      color: _
                    }), c(!1), E.showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              l > 1 && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: R,
                  style: {
                    background: "none",
                    border: "none",
                    color: "var(--brand-red, #ff4c4c)",
                    cursor: "pointer",
                    marginTop: "12px",
                    textDecoration: "underline",
                    padding: 0,
                    alignSelf: "flex-end",
                    fontSize: "12px"
                  },
                  children: "Delete Tab"
                }
              )
            ] })
          ] })
        ] }),
        d && /* @__PURE__ */ s.jsx(
          Bf,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: C,
            onCancel: () => m(!1)
          }
        )
      ]
    }
  );
}, by = () => {
  const e = re((n) => n.toastMessage), t = re((n) => n.toastType);
  return e ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `meld-toast ${t === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: e
    }
  ) : null;
}, Ey = () => {
  var x;
  ky();
  const e = re((g) => g.isOpen), t = re((g) => g.slots), n = re((g) => g.buckets), r = re((g) => g.setIsOpen), { state: l } = ge(), [a, o] = h.useState(((x = t[0]) == null ? void 0 : x.id) || "keep"), i = Vf("lightTable"), [c, d] = h.useState(!1);
  if (!e) return null;
  const m = () => {
    const g = `slot_${Date.now().toString(36)}`;
    re.getState().addSlot({
      id: g,
      label: `Tab ${t.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), o(g);
  }, y = () => {
    t.forEach((g) => {
      re.getState().clearBucket(g.id);
    }), re.getState().showToast("All tabs cleared"), d(!1);
  }, v = /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((g) => {
        var _;
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${a === g.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => o(g.id),
            style: { "--tab-color": g.color },
            onDragOver: (k) => {
              k.preventDefault(), o(g.id);
            },
            onDrop: (k) => {
              k.preventDefault();
              const f = k.dataTransfer.getData("text/plain");
              f && f.split(",").forEach((p) => {
                if (p) {
                  const w = p.trim(), j = l.images.find(
                    (S) => String(S.id) === w
                  );
                  re.getState().addToBucket(g.id, w, j);
                }
              });
            },
            children: [
              g.label,
              "  (",
              ((_ = n[g.id]) == null ? void 0 : _.length) || 0,
              ")"
            ]
          },
          g.id
        );
      }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__add-tab-btn",
          onClick: m,
          title: "Add Tab",
          style: {
            background: "none",
            border: "none",
            color: "var(--meld-text-secondary, #9ca3af)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "0 8px"
          },
          children: /* @__PURE__ */ s.jsx(Os, { size: 16 })
        }
      ),
      /* @__PURE__ */ s.jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => d(!0),
          title: "Clear All Tabs",
          children: [
            /* @__PURE__ */ s.jsx(ng, { size: 14 }),
            /* @__PURE__ */ s.jsx("span", { children: "Clear All" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__close-btn",
          onClick: () => r(!1),
          title: "Close Light Table",
          style: {
            background: "none",
            border: "none",
            color: "var(--meld-text-secondary, #9ca3af)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
            marginLeft: "8px"
          },
          children: /* @__PURE__ */ s.jsx(pe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-light-table__content", children: t.map((g) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: a === g.id ? "block" : "none" },
        children: /* @__PURE__ */ s.jsx(jy, { config: g })
      },
      g.id
    )) }),
    c && /* @__PURE__ */ s.jsx(
      Bf,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: y,
        onCancel: () => d(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(by, {})
  ] });
  return de.createPortal(v, i);
}, Qf = () => {
  const { state: e, refreshFavorites: t } = ge(), [n, r] = h.useState(!1), [l, a] = h.useState(null), [o, i] = h.useState("info"), [c, d] = h.useState(null), [m, y] = h.useState(""), [v, x] = h.useState("");
  h.useEffect(() => {
    if (l) {
      const u = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(u);
    }
  }, [l]);
  const g = h.useCallback(
    async (u, p, w) => {
      u.stopPropagation();
      const j = `Are you sure you want to delete the favorite "${w}"?`;
      if (window.confirm(j))
        try {
          await Mc(p), await t();
        } catch (S) {
          Y.error("Failed to delete favorite", S);
        }
    },
    [t]
  ), _ = h.useCallback(
    (u, p) => {
      u.stopPropagation(), d(p), y(p.name), x(p.query);
    },
    []
  ), k = h.useCallback(async () => {
    if (!(!c || !m.trim() || !v.trim()))
      try {
        r(!0), await Ng(
          c.id,
          m,
          v
        ), await t(), d(null);
      } catch (u) {
        Y.error("Failed to update favorite", u), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, m, v, t]), f = h.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (p) => p.query === e.searchQuery
    )) {
      const p = e.favorites.find((w) => w.query === e.searchQuery);
      if (p) {
        r(!0);
        try {
          await Mc(p.id), await t();
        } catch (w) {
          Y.error("Failed to delete favorite:", w);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Cg(e.searchQuery, e.searchQuery), await t();
    } catch (p) {
      Y.error("Failed to save favorite:", p);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    toastType: o,
    editingFavorite: c,
    setEditingFavorite: d,
    editFavoriteName: m,
    setEditFavoriteName: y,
    editFavoriteQuery: v,
    setEditFavoriteQuery: x,
    handleDeleteFavorite: g,
    handleEditFavorite: _,
    handleSaveEditFavorite: k,
    handleSaveFavorite: f,
    setToastMessage: (u, p = "info") => {
      a(u), i(p);
    }
  };
}, Hf = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, a] = h.useState(!1), [o, i] = h.useState(!1), [c, d] = h.useState(!1);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: l ? "var(--comfy-menu-bg, #333)" : "var(--comfy-input-bg, #2a2a2a)",
        border: "1px solid",
        borderColor: l ? "var(--meld-accent-color)" : "var(--comfy-menu-border, #333)",
        borderRadius: "6px",
        padding: "8px 12px",
        cursor: "pointer",
        transition: "all 0.2s",
        color: "var(--meld-text-color)",
        fontSize: "13px",
        gap: "10px"
      },
      onClick: () => t(e.query),
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
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
                  children: e.name
                }
              ),
              e.name !== e.query && /* @__PURE__ */ s.jsx(
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
                  children: e.query
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
                  onClick: (m) => n(m, e),
                  style: {
                    background: "none",
                    border: "none",
                    color: o ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                    backgroundColor: o ? "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))" : "transparent",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: () => i(!0),
                  onMouseLeave: () => i(!1),
                  title: "Edit favorite",
                  children: /* @__PURE__ */ s.jsx(df, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: (m) => r(m, e.id, e.name),
                  style: {
                    background: "none",
                    border: "none",
                    color: c ? "var(--meld-danger-color)" : "var(--meld-text-secondary)",
                    backgroundColor: c ? "var(--comfy-input-bg-active, rgba(255,0,0,0.1))" : "transparent",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: () => d(!0),
                  onMouseLeave: () => d(!1),
                  title: "Delete favorite",
                  children: /* @__PURE__ */ s.jsx(Ut, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Cy = "_menu_jab2z_1", Ny = "_header_jab2z_14", My = "_title_jab2z_23", Iy = "_count_jab2z_32", Ty = "_list_jab2z_37", Ly = "_toast_jab2z_46", Dy = "_editTitle_jab2z_56", Ry = "_form_jab2z_62", Py = "_fieldGroup_jab2z_69", Oy = "_label_jab2z_75", Ay = "_input_jab2z_81", zy = "_textarea_jab2z_82", Ke = {
  menu: Cy,
  header: Ny,
  title: My,
  count: Iy,
  list: Ty,
  toast: Ly,
  editTitle: Dy,
  form: Ry,
  fieldGroup: Py,
  label: Oy,
  input: Ay,
  textarea: zy
}, Fy = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = ge(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: m,
    setEditFavoriteQuery: y,
    handleDeleteFavorite: v,
    handleEditFavorite: x,
    handleSaveEditFavorite: g
  } = Qf(), [_, k] = h.useState({ top: 0, left: 0 }), f = h.useRef(null), u = h.useRef(null);
  return Ue({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), sl({
    enabled: !!e && !o,
    insideRefs: [f],
    onOutside: () => t()
  }), h.useEffect(() => {
    if (e) {
      let j = e.left;
      const S = e.bottom + 5;
      j + 300 > window.innerWidth - 10 && (j = window.innerWidth - 300 - 10), j < 10 && (j = 10), k({ top: S, left: j });
    }
  }, [e]), h.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), e ? de.createPortal(
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: f,
          className: `${Ke.menu} meld-favorites-context-menu`,
          style: {
            top: _.top,
            left: _.left
          },
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: Ke.header, children: [
              /* @__PURE__ */ s.jsxs("div", { className: Ke.title, children: [
                /* @__PURE__ */ s.jsx(
                  ur,
                  {
                    size: 14,
                    color: "var(--brand-yellow, #ffd700)",
                    fill: "var(--brand-yellow, #ffd700)"
                  }
                ),
                "Favorites"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: Ke.count, children: [
                r.favorites.length,
                " items"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: Ke.list, children: r.favorites.map((p) => /* @__PURE__ */ s.jsx(
              Hf,
              {
                fav: p,
                onSelect: (w) => {
                  n(w), t();
                },
                onEdit: x,
                onDelete: v
              },
              p.id
            )) }),
            a && /* @__PURE__ */ s.jsx("div", { className: Ke.toast, children: a })
          ]
        }
      ),
      o && /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "meld-modal-overlay meld-favorites-edit-modal-overlay",
          onMouseDown: (p) => {
            p.target === p.currentTarget && i(null);
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (p) => p.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsxs("h2", { className: Ke.editTitle, children: [
                    /* @__PURE__ */ s.jsx(ur, { size: 20, color: "var(--meld-accent-color)" }),
                    "Edit Favorite"
                  ] }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: Ke.form, children: [
                  /* @__PURE__ */ s.jsxs("div", { className: Ke.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx(
                      "label",
                      {
                        htmlFor: "edit-favorite-name-ctx",
                        className: Ke.label,
                        children: "Name"
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        id: "edit-favorite-name-ctx",
                        ref: u,
                        type: "text",
                        value: c,
                        onChange: (p) => d(p.target.value),
                        placeholder: "Favorite Name",
                        className: Ke.input,
                        onKeyDown: (p) => {
                          p.key === "Enter" && (qe(p), g()), p.key === "Escape" && (qe(p), i(null));
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: Ke.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx(
                      "label",
                      {
                        htmlFor: "edit-favorite-query-ctx",
                        className: Ke.label,
                        children: "Search Query"
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "textarea",
                      {
                        id: "edit-favorite-query-ctx",
                        value: m,
                        onChange: (p) => y(p.target.value),
                        placeholder: "Search Query",
                        rows: 3,
                        className: Ke.textarea,
                        onKeyDown: (p) => {
                          p.key === "Enter" && !p.shiftKey && (qe(p), g()), p.key === "Escape" && (qe(p), i(null));
                        }
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-secondary",
                      onClick: () => i(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-primary",
                      onClick: g,
                      disabled: l || !c.trim() || !m.trim(),
                      children: l ? "Saving..." : "Save Changes"
                    }
                  )
                ] })
              ]
            }
          )
        }
      )
    ] }),
    document.fullscreenElement || document.body
  ) : null;
}, Dl = (e) => {
  const t = [];
  let n = "", r = !1;
  for (let l = 0; l < e.length; l++) {
    const a = e[l];
    if (a === '"')
      r = !r, n += a;
    else if (a === " " && !r)
      for (t.push(n), n = ""; l + 1 < e.length && e[l + 1] === " "; )
        l++;
    else
      n += a;
  }
  return t.push(n), t;
}, Wy = () => {
  const { state: e, dispatch: t, updateSetting: n } = ge(), [r, l] = h.useState(e.searchQuery), [a, o] = h.useState([]), [i, c] = h.useState(!1), [d, m] = h.useState([]), [y, v] = h.useState([]), x = e.settings["search.show_all_keywords"], [g, _] = h.useState(-1), [k, f] = h.useState(null), u = h.useRef(null), p = h.useRef(e.searchQuery), w = h.useCallback(async () => {
    if (y.length > 0) return;
    const P = await jg();
    v(P);
  }, [y.length]);
  h.useEffect(() => {
    bg().then((P) => {
      f(P);
    }), x && w();
  }, [w, x]);
  const j = h.useMemo(() => {
    if (!k) return null;
    const P = k.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${P}):(.*)$`, "i");
  }, [k]), S = h.useCallback(() => {
    const P = !x;
    P && w(), n("search.show_all_keywords", P);
  }, [x, w, n]), b = r !== p.current;
  h.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      m([]);
      return;
    }
    Sg().then((P) => {
      m(P);
    });
  }, [e.settings["search.quick_suggestions"]]), h.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), h.useEffect(() => {
    var P;
    (P = u.current) == null || P.focus();
  }, []);
  const M = h.useCallback(
    (P, L = !0) => {
      p.current !== P && (Y.log("SearchBar: triggering search", { query: P }), t({ type: "SET_SEARCH_QUERY", payload: P }), L && c(!1), p.current = P);
    },
    [t]
  );
  h.useEffect(() => {
    const P = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"] || !j) {
        o([]), c(!1);
        return;
      }
      const L = Dl(r), C = L[L.length - 1];
      if (C) {
        const R = C.match(j);
        if (R) {
          const O = R[1].toLowerCase();
          let E = R[2];
          E.startsWith('"') && (E = E.substring(1)), E.endsWith('"') && (E = E.substring(0, E.length - 1));
          const z = await kg(E, O);
          o(z), c(z.length > 0), _(-1);
        } else {
          const O = C.replace(/^([-!])/, "").toLowerCase();
          if (O && k) {
            const E = k.all_prefixes.filter((z) => z.startsWith(O)).map((z) => ({
              type: z,
              value: "",
              count: 0
            }));
            if (E.length > 0) {
              o(E), c(!0), _(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(P);
  }, [
    r,
    e.settings["search.input_suggest"],
    j,
    k
  ]);
  const D = h.useCallback(
    (P) => {
      var B;
      const L = Dl(r), R = (L.pop() || "").match(/^([-!])/), O = R ? R[1] : "", z = ((k == null ? void 0 : k.no_quote_prefixes) || []).includes(P.type);
      if (P.value === "") {
        const A = `${[...L, `${O}${P.type}:`].join(" ").trim()}`;
        l(A);
      } else {
        const A = z ? P.value : `"${P.value}"`, Q = `${[
          ...L,
          `${O}${P.type}:${A}`
        ].join(" ").trim()} `;
        l(Q), o([]), c(!1);
      }
      (B = u.current) == null || B.focus();
    },
    [r, k]
  ), T = (P) => {
    if (P.key === "Enter")
      qe(P), i && g >= 0 ? D(a[g]) : M(r);
    else if (P.key === "Tab") {
      if (i && a.length > 0) {
        qe(P);
        const L = g >= 0 ? g : 0;
        D(a[L]);
      }
    } else P.key === "ArrowDown" ? i && (qe(P), _((L) => Math.min(L + 1, a.length - 1))) : P.key === "ArrowUp" ? i && (qe(P), _((L) => Math.max(L - 1, -1))) : P.key === "Escape" && (qe(P), c(!1));
  }, I = h.useCallback(() => {
    l(""), M("");
  }, [M]), F = h.useCallback(
    (P, L, C = !1) => {
      var fe;
      const R = Dl(r), O = R[R.length - 1] || "";
      let E = !1;
      const z = O.replace(/^([-!])/, "").toLowerCase();
      z && P.toLowerCase().startsWith(z) && (E = !0);
      const B = O.match(/^([-!])/), A = E && B ? B[1] : "";
      if (E && R.pop(), C) {
        const Bt = [...R, `${A}${P}:`].filter(Boolean).join(" ");
        l(Bt), (fe = u.current) == null || fe.focus();
        return;
      }
      const ie = ((k == null ? void 0 : k.no_quote_prefixes) || []).includes(P) ? L : `"${L}"`, ce = `${A}${P}:${ie}`, Ie = [...R, ce].filter(Boolean).join(" ");
      l(Ie), M(Ie);
    },
    [r, M, k]
  ), V = h.useCallback(
    (P) => {
      l(P), P || M("");
    },
    [M]
  ), N = h.useCallback(() => {
    if (r === p.current || !j)
      return;
    const P = Dl(r), L = P[P.length - 1];
    if (!L) return;
    const C = !!L.match(j), R = L.replace(/^([-!])/, "").toLowerCase(), O = R && (k == null ? void 0 : k.all_prefixes.some((E) => E.startsWith(R)));
    (C || O) && c(!0);
  }, [r, j, k]), U = h.useCallback(() => {
    setTimeout(() => c(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: y,
    showAllKeywords: x,
    toggleShowAllKeywords: S,
    selectedIndex: g,
    setSelectedIndex: _,
    inputRef: u,
    isQueryChanged: b,
    handleSearch: M,
    handleKeyDown: T,
    applySuggestion: D,
    clearSearch: I,
    applySearchSuggestion: F,
    handleInputChange: V,
    handleInputFocus: N,
    handleInputBlur: U
  };
}, Ac = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(pr, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(Pp, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(rg, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(Op, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(af, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(sf, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(Up, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(Rp, { size: 12 });
    default:
      return null;
  }
}, $y = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: a,
  searchQuery: o,
  searchSuggestions: i,
  allKeywords: c,
  showAllKeywords: d,
  toggleShowAllKeywords: m,
  applySearchSuggestion: y,
  favorites: v,
  onSelectFavorite: x,
  onEditFavorite: g,
  onDeleteFavorite: _
}) => {
  const k = (w, j, S) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => y(w.type, w.value, S === "all"),
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
      onMouseEnter: (b) => {
        b.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", b.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", b.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (b) => {
        b.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", b.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", b.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Ac(w.type)
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
            children: w.type
          }
        ),
        S !== "all" && /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: w.value
          }
        )
      ]
    },
    `${S}-${w.type}:${w.value}:${j}`
  ), f = () => !e || t.length === 0 ? null : /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-search-suggestions",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "var(--comfy-menu-bg, #222)",
        border: "1px solid var(--comfy-menu-border, #444)",
        borderRadius: "0 0 6px 6px",
        marginTop: "8px",
        maxHeight: "400px",
        overflowY: "auto",
        boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))"
      },
      children: t.map((w, j) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (S) => {
            S.preventDefault(), l(w);
          },
          onMouseEnter: () => r(j),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: j === n ? "var(--comfy-input-bg-active, rgba(59, 130, 246, 0.15))" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)",
            borderLeft: j === n ? "3px solid var(--meld-accent-color, #3b82f6)" : "3px solid transparent",
            transition: "all 0.1s ease-out"
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transform: j === n ? "translateX(2px)" : "none",
                transition: "transform 0.1s ease-out"
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: j === n ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-secondary)",
                      display: "flex",
                      transition: "color 0.1s"
                    },
                    children: Ac(w.type)
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "span",
                  {
                    style: {
                      color: "var(--comfy-input-text-active, #3b82f6)",
                      fontSize: "10px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      width: w.type.length > 8 ? "auto" : "60px",
                      flexShrink: 0
                    },
                    children: [
                      w.type,
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: w.value === xt ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: w.value === xt ? "bold" : "normal"
                    },
                    children: w.value === xt ? w.type === "tag" ? `Untagged (${xt})` : `No ${w.type} (${xt})` : w.value
                  }
                )
              ]
            }
          )
        },
        `${w.type}:${w.value}`
      ))
    }
  ), u = () => i.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-search-quick-suggestions",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginTop: "8px"
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: i.map(
              (w, j) => k(w, j, "quick")
            )
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              borderTop: "1px solid var(--comfy-menu-border, #333)",
              paddingTop: "12px",
              marginTop: "4px"
            },
            children: [
              /* @__PURE__ */ s.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 4px"
                  },
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "var(--meld-text-secondary)",
                          fontSize: "11px",
                          fontWeight: "bold",
                          textTransform: "uppercase"
                        },
                        children: "All Keywords"
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: m,
                        style: {
                          backgroundColor: "transparent",
                          border: "none",
                          color: "var(--meld-accent-color, #3b82f6)",
                          fontSize: "11px",
                          cursor: "pointer"
                        },
                        children: d ? "Show Less" : "Show More"
                      }
                    )
                  ]
                }
              ),
              d && /* @__PURE__ */ s.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    padding: "0 4px",
                    maxHeight: "200px",
                    overflowY: "auto"
                  },
                  children: Array.from(new Set(c.map((w) => w.type))).map(
                    (w, j) => k({ type: w, value: "" }, j, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), p = () => v.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-search-favorites",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "4px",
        marginTop: "8px",
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
              /* @__PURE__ */ s.jsx(ur, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: v.map((w) => /* @__PURE__ */ s.jsx(
              Hf,
              {
                fav: w,
                onSelect: x,
                onEdit: g,
                onDelete: _
              },
              w.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      style: { position: "relative" },
      onMouseDown: (w) => {
        w.preventDefault();
      },
      children: [
        f(),
        u(),
        p()
      ]
    }
  );
}, Uy = () => {
  const { state: e } = ge(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: m,
    inputRef: y,
    isQueryChanged: v,
    handleSearch: x,
    handleKeyDown: g,
    applySuggestion: _,
    clearSearch: k,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: p,
    handleInputBlur: w
  } = Wy(), {
    isSaving: j,
    toastMessage: S,
    toastType: b,
    editingFavorite: M,
    setEditingFavorite: D,
    editFavoriteName: T,
    setEditFavoriteName: I,
    editFavoriteQuery: F,
    setEditFavoriteQuery: V,
    handleDeleteFavorite: N,
    handleEditFavorite: U,
    handleSaveEditFavorite: P,
    handleSaveFavorite: L,
    setToastMessage: C
  } = Qf(), R = async () => {
    if (e.favorites.some(
      (Q) => Q.query === e.searchQuery
    )) {
      C("This query is already in your favorites.", "error");
      return;
    }
    await L();
  };
  Ue({
    onEscape: () => D(null),
    enabled: !!M
  });
  const O = h.useRef(null), E = h.useRef(!1);
  h.useEffect(() => {
    M && O.current && O.current.focus();
  }, [M]);
  const z = (A) => {
    A.target === A.currentTarget && (E.current = !0);
  }, B = (A) => {
    A.target === A.currentTarget && E.current && D(null), E.current = !1;
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
                  className: "meld-search-toast",
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
                    whiteSpace: "pre-wrap",
                    textAlign: "center",
                    boxShadow: "0 4px 12px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
                    pointerEvents: "none",
                    fontWeight: "bold",
                    border: b === "error" ? "1px solid var(--brand-red, #ff4c4c)" : "1px solid var(--comfy-menu-border, #444)",
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
                    /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => x(t),
                        style: {
                          background: v ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: v ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: v ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (A) => {
                          A.currentTarget.style.transform = "translateY(-1px)", v ? (A.currentTarget.style.filter = "brightness(1.15)", A.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : A.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (A) => {
                          A.currentTarget.style.transform = "none", v ? (A.currentTarget.style.filter = "none", A.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : A.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (A) => {
                          A.currentTarget.style.transform = "translateY(1px)", A.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (A) => {
                          A.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            In,
                            {
                              size: 16,
                              color: v ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: v ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          v && /* @__PURE__ */ s.jsx(
                            "span",
                            {
                              style: {
                                color: "var(--meld-text-color, #fff)",
                                fontSize: "12px",
                                fontWeight: "bold",
                                marginLeft: "6px",
                                textShadow: "0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2))"
                              },
                              children: "Search"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        ref: y,
                        type: "text",
                        value: t,
                        onChange: (A) => u(A.target.value),
                        onKeyDown: g,
                        onBlur: w,
                        onFocus: p,
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
                        onClick: R,
                        disabled: j,
                        title: e.favorites.some((A) => A.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          ur,
                          {
                            size: 16,
                            color: e.favorites.some((A) => A.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((A) => A.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: k,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ s.jsx(pe, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                $y,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: d,
                  setSelectedIndex: m,
                  applySuggestion: _,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: o,
                  showAllKeywords: i,
                  toggleShowAllKeywords: c,
                  applySearchSuggestion: f,
                  favorites: e.favorites,
                  onSelectFavorite: (A) => {
                    n(A), x(A);
                  },
                  onEditFavorite: U,
                  onDeleteFavorite: N
                }
              )
            ]
          }
        ),
        M && de.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: z,
              onMouseUp: B,
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (A) => A.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(ur, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => D(null),
                          children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px",
                          padding: "8px 0"
                        },
                        children: [
                          /* @__PURE__ */ s.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(
                                  "label",
                                  {
                                    htmlFor: "edit-favorite-name",
                                    style: {
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                      color: "var(--meld-text-secondary)"
                                    },
                                    children: "Name"
                                  }
                                ),
                                /* @__PURE__ */ s.jsx(
                                  "input",
                                  {
                                    id: "edit-favorite-name",
                                    ref: O,
                                    type: "text",
                                    value: T,
                                    onChange: (A) => I(A.target.value),
                                    placeholder: "Favorite Name",
                                    style: {
                                      backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
                                      border: "1px solid var(--comfy-menu-border, #333)",
                                      borderRadius: "4px",
                                      color: "var(--meld-text-color)",
                                      padding: "8px 12px",
                                      fontSize: "14px",
                                      outline: "none"
                                    },
                                    onKeyDown: (A) => {
                                      A.key === "Enter" && (qe(A), P()), A.key === "Escape" && (qe(A), D(null));
                                    }
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
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(
                                  "label",
                                  {
                                    htmlFor: "edit-favorite-query",
                                    style: {
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                      color: "var(--meld-text-secondary)"
                                    },
                                    children: "Search Query"
                                  }
                                ),
                                /* @__PURE__ */ s.jsx(
                                  "textarea",
                                  {
                                    id: "edit-favorite-query",
                                    value: F,
                                    onChange: (A) => V(A.target.value),
                                    placeholder: "Search Query",
                                    rows: 3,
                                    style: {
                                      backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
                                      border: "1px solid var(--comfy-menu-border, #333)",
                                      borderRadius: "4px",
                                      color: "var(--meld-text-color)",
                                      padding: "8px 12px",
                                      fontSize: "13px",
                                      fontFamily: "monospace",
                                      outline: "none",
                                      resize: "vertical"
                                    },
                                    onKeyDown: (A) => {
                                      A.key === "Enter" && !A.shiftKey && (qe(A), P()), A.key === "Escape" && (qe(A), D(null));
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-secondary",
                          onClick: () => D(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: P,
                          disabled: j || !T.trim() || !F.trim(),
                          children: j ? "Saving..." : "Save Changes"
                        }
                      )
                    ] })
                  ]
                }
              )
            }
          ),
          document.fullscreenElement || document.body
        )
      ]
    }
  );
}, Vy = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = h.useState([]), [l, a] = h.useState(!0), [o, i] = h.useState(""), [c, d] = h.useState(""), [m, y] = h.useState(!1), [v, x] = h.useState(null), [g, _] = h.useState(""), [k, f] = h.useState(!1), u = h.useRef(null), p = h.useCallback(async () => {
    a(!0);
    try {
      const I = await hi();
      r(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      a(!1);
    }
  }, []);
  h.useEffect(() => {
    p();
  }, [p]), h.useEffect(() => {
    v !== null && u.current && (u.current.focus(), u.current.select());
  }, [v]);
  const w = async (I) => {
    I.preventDefault();
    const F = c.trim();
    if (!(!F || m)) {
      if (F.toLowerCase() === xt) {
        alert(
          `Tag name '${xt}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((V) => V.name.toLowerCase() === F.toLowerCase())) {
        alert(`Tag "${F}" already exists.`);
        return;
      }
      y(!0);
      try {
        await Bg(F), d(""), await p();
      } catch (V) {
        console.error("Failed to add tag:", V);
      } finally {
        y(!1);
      }
    }
  }, j = async (I, F) => {
    if (confirm(`Are you sure you want to delete tag "${F}"?`))
      try {
        await Qg(I), await p();
      } catch (V) {
        console.error("Failed to delete tag:", V);
      }
  }, S = (I) => {
    x(I.id), _(I.name);
  }, b = () => {
    x(null), _("");
  }, M = async (I) => {
    I.preventDefault();
    const F = g.trim();
    if (!F || v === null || k) return;
    if (F.toLowerCase() === xt) {
      alert(
        `Tag name '${xt}' is reserved for search and cannot be used.`
      );
      return;
    }
    const V = n.find((N) => N.id === v);
    if (V && V.name === F) {
      b();
      return;
    }
    if (n.some(
      (N) => N.id !== v && N.name.toLowerCase() === F.toLowerCase()
    )) {
      alert(`Tag "${F}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Hg(v, F), b(), await p();
    } catch (N) {
      console.error("Failed to rename tag:", N), alert(N instanceof Error ? N.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, D = (I) => {
    t(`tag:${I}`);
  }, T = h.useMemo(() => n.filter(
    (I) => I.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(pr, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(pe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: w, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (I) => d(I.target.value),
            disabled: m
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || m,
            children: [
              /* @__PURE__ */ s.jsx(Os, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(In, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (I) => i(I.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: T.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : T.map((I) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: v === I.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: M,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: u,
                className: "meld-tag-rename-input",
                value: g,
                onChange: (F) => _(F.target.value),
                onKeyDown: (F) => F.key === "Escape" && b()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: k || !g.trim(),
                children: /* @__PURE__ */ s.jsx(ii, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: b,
                disabled: k,
                children: /* @__PURE__ */ s.jsx(pe, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: I.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => D(I.name),
              children: /* @__PURE__ */ s.jsx(In, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => S(I),
              children: /* @__PURE__ */ s.jsx(df, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => j(I.id, I.name),
              children: /* @__PURE__ */ s.jsx(Ut, { size: 14 })
            }
          )
        ] })
      ] }) }, I.id)) })
    ] })
  ] });
}, pa = 56, Kf = (e, t) => {
  const n = h.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((d) => ({
          id: d.id,
          imgSrc: mt(d, pa)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const o = e.find((d) => d.id === a);
      let i = null;
      if (o ? i = mt(o, pa) : i = mt(
        {
          filename: r.parent_filename,
          subfolder: r.parent_subfolder || "",
          type: r.parent_type
        },
        pa
      ), !i) return [];
      const c = {
        id: a || null,
        imgSrc: i
      };
      if (o && l > 1) {
        const d = n(o);
        return [c, ...d].slice(0, l);
      }
      return [c];
    },
    [t, e]
  );
  return { getParentChain: n };
}, By = ({
  state: e,
  dispatch: t,
  image: n,
  isFullscreen: r,
  currentThumbnails: l,
  currentIndex: a,
  viewerMode: o,
  lineageImages: i,
  images: c,
  mountRefs: d,
  handleNext: m,
  handlePrevious: y,
  handleEditTags: v,
  handleRestore: x
}) => {
  const [g, _] = h.useState(null), [k, f] = h.useState(null), u = h.useCallback(
    async (M = !1) => {
      if (!n) return;
      const D = r ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
      if (!M && D === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [n.id],
            hasLineage: !!(n.parent_id || n.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const T = e.viewScope === "trash", I = /* @__PURE__ */ new Set([n.id]);
        let F = [];
        if (D === "lineage") {
          F = await fi(n.id);
          for (const N of F)
            I.add(N.id);
        }
        if (!d.isMountedRef.current || d.viewerImageIdRef.current === null)
          return;
        const V = l.filter(
          (N) => I.has(N.id)
        ).length;
        if (l.length > V) {
          let N = !1;
          for (let U = a + 1; U < l.length; U++)
            if (!I.has(l[U].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: {
                  id: l[U].id,
                  mode: o,
                  ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
                }
              }), N = !0;
              break;
            }
          if (!N) {
            for (let U = a - 1; U >= 0; U--)
              if (!I.has(l[U].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: l[U].id,
                    mode: o,
                    ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
                  }
                }), N = !0;
                break;
              }
          }
          N || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await mo(
          Array.from(I),
          T
        ), !T) {
          const N = [
            ...l,
            ...F,
            ...i,
            ...c
          ], U = /* @__PURE__ */ new Map();
          for (const L of N)
            U.set(L.id, L);
          const P = Array.from(I).map((L) => {
            const C = U.get(L);
            return C || {
              id: L,
              filename: `deleted_${L}`,
              subfolder: "",
              type: "custom",
              created_at: 0,
              positive: "",
              negative: "",
              tags: []
            };
          });
          _(P), f(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(I) });
      } catch (T) {
        t({
          type: "SET_ERROR",
          payload: T instanceof Error ? T.message : String(T)
        });
      }
    },
    [
      a,
      l,
      t,
      n,
      c,
      r,
      i,
      d,
      e.settings,
      e.viewScope,
      e.viewerLightTableSlotId,
      o
    ]
  ), p = h.useCallback(() => {
    n && v(n);
  }, [v, n]), w = h.useCallback(async () => {
    n && (l.length > 1 ? m() : t({ type: "CLOSE_VIEWER" }), await x(n));
  }, [l.length, t, m, x, n]), j = h.useCallback(async () => {
    if (!g || g.length === 0) return;
    const M = g.map((T) => T.id), D = M[0];
    try {
      const T = await ui(M);
      if (!d.isMountedRef.current) return;
      if (t({ type: "ADD_IMAGES", payload: g }), e.viewScope === "trash") {
        const I = T.restored_ids || M;
        t({ type: "REMOVE_IMAGES", payload: I });
      }
      if (_(null), !d.isMountedRef.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: {
          id: D,
          mode: o,
          ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
        }
      });
    } catch (T) {
      t({
        type: "SET_ERROR",
        payload: T instanceof Error ? T.message : String(T)
      });
    }
  }, [
    t,
    g,
    d.isMountedRef,
    e.viewScope,
    e.viewerLightTableSlotId,
    o
  ]), S = h.useCallback(async () => {
    if (g && g.length > 0) {
      await j();
      return;
    }
    if (!k || k.type !== "tags")
      return;
    const { imageId: M, addTags: D, removeTags: T } = k;
    try {
      await co([M], D, T);
      const I = (o === "lineage" ? i : c).find((F) => F.id === M);
      if (I) {
        const F = [...I.tags];
        for (const N of D)
          F.includes(N) || F.push(N);
        const V = F.filter((N) => !T.includes(N));
        t({
          type: "UPDATE_IMAGE",
          payload: { ...I, tags: V }
        }), t({
          type: "OPEN_VIEWER",
          payload: {
            id: M,
            mode: o,
            ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
          }
        });
      }
      f(null);
    } catch (I) {
      t({
        type: "SET_ERROR",
        payload: I instanceof Error ? I.message : String(I)
      });
    }
  }, [
    t,
    j,
    c,
    g,
    k,
    i,
    e.viewerLightTableSlotId,
    o
  ]), b = h.useCallback(
    async (M) => {
      if (!M || !n) return;
      const D = n.id, T = [...n.tags], I = sy(M, n), {
        addTags: F,
        removeTags: V,
        isDeleted: N,
        moveNext: U,
        movePrev: P,
        sendToLtSlot: L
      } = I;
      if (L) {
        const C = re.getState(), R = C.slots.find(
          (O) => O.id.toLowerCase() === L.toLowerCase() || O.label.toLowerCase() === L.toLowerCase()
        );
        if (R) {
          if (C.addToBucket(R.id, String(D), n), C.showToast(`Sent to ${R.label}`), !N) {
            if (l.length > 1) {
              let O = null;
              for (let E = a + 1; E < l.length; E++)
                if (l[E].id !== D) {
                  O = l[E].id;
                  break;
                }
              if (O === null) {
                for (let E = a - 1; E >= 0; E--)
                  if (l[E].id !== D) {
                    O = l[E].id;
                    break;
                  }
              }
              t(O !== null ? {
                type: "OPEN_VIEWER",
                payload: {
                  id: O,
                  mode: o,
                  ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
                }
              } : { type: "CLOSE_VIEWER" });
            } else
              t({ type: "CLOSE_VIEWER" });
            t({ type: "REMOVE_IMAGES", payload: [D] });
          }
        } else
          C.showToast(
            `Error: Light Table slot "${L}" not found`,
            "error"
          ), console.warn(
            `Attempted to send to non-existent LT slot: ${L}`
          );
      }
      if (F.length > 0 || V.length > 0)
        try {
          await co(
            [D],
            F,
            V
          );
          const C = [...T];
          for (const O of F)
            C.includes(O) || C.push(O);
          const R = C.filter((O) => !V.includes(O));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...n, id: D, tags: R }
          }), f({
            type: "tags",
            imageId: D,
            addTags: [...V],
            removeTags: [...F]
          }), _(null);
        } catch (C) {
          console.error("Failed to update tags via shortcut:", C), t({
            type: "SET_ERROR",
            payload: C instanceof Error ? C.message : String(C)
          });
        }
      N ? await u(!0) : U ? m() : P && await y();
    },
    [
      a,
      l,
      t,
      u,
      m,
      y,
      n,
      e.viewerLightTableSlotId,
      o
    ]
  );
  return {
    lastDeletedImages: g,
    setLastDeletedImages: _,
    handleDelete: u,
    handleTagEditAction: p,
    handleRestoreAction: w,
    handleUndo: S,
    executeCommand: b
  };
}, Qy = ({
  overlayRef: e,
  settings: t,
  setShowDetails: n
}) => {
  const [r, l] = h.useState(!1), a = h.useCallback(
    (o) => {
      o && "stopPropagation" in o && o.stopPropagation();
      const i = e.current;
      i && (document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen().catch((c) => {
        console.error(
          `Error attempting to enable full-screen mode: ${c.message}`
        );
      }));
    },
    [e]
  );
  return h.useEffect(() => {
    const o = () => {
      const i = !!document.fullscreenElement;
      l(i), n(i ? t["fullscreen.show_details_by_default"] : t["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, [t, n]), { isFullscreen: r, toggleFullscreen: a };
}, Hy = ({
  viewerImageId: e,
  activeModalType: t,
  viewScope: n,
  settings: r,
  dispatch: l,
  isMountedRef: a,
  toggleFullscreen: o,
  handleNext: i,
  handlePrevious: c,
  handleDelete: d,
  handleUndo: m,
  handleTagEditAction: y,
  handleRestoreAction: v,
  executeCommand: x,
  setShowDetails: g,
  setActiveShortcutKey: _
}) => {
  const k = h.useCallback(
    (f) => {
      if (!(f.target instanceof HTMLElement))
        return;
      const u = f.target, p = u.tagName === "INPUT" || u.tagName === "TEXTAREA" || u.isContentEditable;
      if (p && f.key !== "Escape") {
        f.key === "Enter" && (f.ctrlKey || f.metaKey) && f.preventDefault();
        return;
      }
      if (e === null || t !== "none")
        return;
      const w = f.key === "Delete" || f.key === "Backspace", j = f.key === "ArrowRight" || f.key === "ArrowLeft" || f.key === "ArrowDown" || f.key === "ArrowUp", S = [
        "f",
        "F",
        "i",
        "I",
        "t",
        "T",
        "r",
        "R",
        "Enter"
      ].includes(f.key), b = f.key === "Escape", M = (f.ctrlKey || f.metaKey) && (f.key === "z" || f.key === "Z" || f.code === "KeyZ"), D = /^[0-9]$/.test(f.key) && !f.ctrlKey && !f.metaKey && !f.altKey && f.code !== "KeyZ";
      if (w || j || S || b || M || D)
        if (!p || b)
          ll(f);
        else
          return;
      else
        return;
      if (b)
        document.fullscreenElement ? document.exitFullscreen() : l({ type: "CLOSE_VIEWER" });
      else if (j)
        f.key === "ArrowRight" || f.key === "ArrowDown" ? i() : c();
      else if (S && (f.key === "f" || f.key === "F" || f.key === "Enter"))
        o(f);
      else if (S && (f.key === "i" || f.key === "I"))
        g((T) => !T);
      else if (S && (f.key === "t" || f.key === "T"))
        y();
      else if (S && (f.key === "r" || f.key === "R") && n === "trash")
        v();
      else if (w)
        d();
      else if (M)
        m();
      else if (D && !p) {
        const T = `viewer.shortcut.${f.key}`, I = r[T];
        typeof I == "string" && I && (_(f.key), setTimeout(() => {
          a.current && _(null);
        }, 500), x(I));
      }
    },
    [
      t,
      l,
      x,
      d,
      i,
      c,
      v,
      y,
      m,
      a,
      _,
      g,
      r,
      o,
      n,
      e
    ]
  );
  zs({
    enabled: e !== null,
    onKeyDown: k
  });
}, Ky = ({
  viewerMode: e,
  viewerImageId: t,
  lineageLength: n,
  dispatch: r,
  isMountedRef: l
}) => {
  const [a, o] = h.useState(!1), i = h.useRef(0);
  return h.useEffect(() => {
    let c = !1;
    if (e === "lineage" && t !== null && n === 0) {
      const d = ++i.current;
      o(!0), fi(t).then((m) => {
        !c && l.current && d === i.current && r({ type: "SET_LINEAGE", payload: m });
      }).catch((m) => {
        console.error("Failed to fetch lineage:", m);
      }).finally(() => {
        !c && l.current && d === i.current && o(!1);
      });
    }
    return () => {
      c = !0;
    };
  }, [r, l, n, t, e]), { isLoadingLineage: a };
}, Gy = ({
  dispatch: e,
  isFullscreen: t,
  settings: n,
  currentIndex: r,
  viewerMode: l,
  pagination: a,
  searchQuery: o,
  isJumping: i,
  setIsJumping: c,
  mountRefs: d
}) => {
  const m = h.useCallback(() => {
    e({ type: "NEXT_IMAGE", payload: { isFullscreen: t } });
  }, [e, t]), y = h.useCallback(async () => {
    const v = t ? n["fullscreen.loop"] : n["viewer.loop"];
    if (r === 0 && l === "gallery" && a.hasMore && !i && v) {
      c(!0);
      try {
        const x = a.limit, g = a.total, _ = Math.max(0, g - x), k = await Kl(
          _,
          x,
          o
        );
        if (!d.isMountedRef.current || (e({ type: "APPEND_IMAGES", payload: k }), d.viewerImageIdRef.current === null)) return;
        if (k.images.length > 0) {
          const f = k.images[k.images.length - 1];
          e({
            type: "OPEN_VIEWER",
            payload: { id: f.id, mode: "gallery" }
          });
        }
      } catch (x) {
        console.error("Failed to jump to end:", x);
      } finally {
        c(!1);
      }
    } else
      e({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: t } });
  }, [
    r,
    e,
    t,
    i,
    d,
    a,
    o,
    c,
    n,
    l
  ]);
  return { handleNext: m, handlePrevious: y };
};
function qy(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? l || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const Yy = ({
  viewerImageId: e,
  currentThumbnails: t,
  currentIndex: n,
  isFullscreen: r,
  settings: l,
  hasMore: a,
  viewerMode: o,
  isLoading: i,
  loadMoreImages: c,
  fetchFullImageDetails: d
}) => {
  h.useEffect(() => {
    o !== "gallery" || e === null || i || !a || n === -1 || n >= t.length - 15 && c();
  }, [
    n,
    t.length,
    a,
    i,
    c,
    e,
    o
  ]), h.useEffect(() => {
    if (e === null || t.length === 0) return;
    const m = t.map((k) => k.id), y = m.indexOf(e);
    if (y === -1) return;
    const v = r ? l["fullscreen.loop"] : l["viewer.loop"], { prevId: x, nextId: g } = qy({
      ids: m,
      index: y,
      loopEnabled: v,
      hasMore: a && o === "gallery"
    }), _ = setTimeout(() => {
      const k = [x, g].filter(
        (f) => f !== null && f !== e
      );
      k.length !== 0 && Promise.allSettled(k.map((f) => d(f))).then(
        (f) => {
          for (const u of f)
            u.status === "rejected" && Y.warn(
              "Prefetching adjacent image details failed",
              u.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(_);
  }, [
    t,
    d,
    a,
    r,
    l,
    e,
    o
  ]), h.useEffect(() => {
    if (e === null || t.length === 0 || n === -1) return;
    const m = [
      n + 1,
      n + 2,
      n - 1
    ], y = setTimeout(() => {
      for (const v of m)
        if (v >= 0 && v < t.length) {
          const x = t[v], g = new Image();
          g.src = mi(x);
        }
    }, 150);
    return () => clearTimeout(y);
  }, [n, t, e]);
}, Xy = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var Lt;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    handleEditTags: d,
    handleEditNotes: m,
    handleRestore: y,
    handleUpdateUserNotes: v,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: g,
    handleSendToWorkflow: _,
    handleRunWithWorkflow: k,
    handleRunWithMask: f,
    handleEditSource: u
  } = As(e, t), { getParentChain: p } = Kf(a, c), [w, j] = h.useState(!1), [S, b] = h.useState(
    c["viewer.show_details_by_default"]
  ), [M, D] = h.useState(null), T = M ?? c["viewer.show_thumbnails"], [I, F] = h.useState(!1), [V, N] = h.useState(
    null
  ), U = h.useRef(null), P = {
    isMountedRef: h.useRef(!0),
    viewerImageIdRef: h.useRef(l)
  };
  h.useEffect(() => (P.isMountedRef.current = !0, () => {
    P.isMountedRef.current = !1;
  }), [P.isMountedRef]), h.useEffect(() => {
    P.viewerImageIdRef.current = l;
  }, [P.viewerImageIdRef, l]);
  const L = h.useMemo(() => {
    const xe = e.searchQuery.trim() !== "";
    return o === "lighttable" && e.viewerLightTableSlotId ? (re.getState().buckets[e.viewerLightTableSlotId] || []).map((bt) => {
      const Dn = Number.parseInt(bt, 10);
      return a.find((gn) => gn.id === Dn) || i.find((gn) => gn.id === Dn) || null;
    }).filter((bt) => bt !== null) : o === "lineage" ? i : a.filter(
      (ot) => ot.exists !== !1 && (c["gallery.show_parent_images"] || xe || !ot.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), C = l === null ? -1 : L.findIndex((xe) => xe.id === l), O = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? L : a).find((xe) => xe.id === l) || (l === ((Lt = e.viewerFallbackImage) == null ? void 0 : Lt.id) ? e.viewerFallbackImage : void 0), { isFullscreen: E, toggleFullscreen: z } = Qy({
    overlayRef: U,
    settings: c,
    setShowDetails: b
  }), { handleNext: B, handlePrevious: A } = Gy({
    dispatch: t,
    isFullscreen: E,
    settings: c,
    currentIndex: C,
    viewerMode: o,
    pagination: e.pagination,
    searchQuery: e.searchQuery,
    isJumping: I,
    setIsJumping: F,
    mountRefs: P
  }), {
    lastDeletedImages: Q,
    setLastDeletedImages: J,
    handleDelete: ie,
    handleTagEditAction: ce,
    handleRestoreAction: Ie,
    handleUndo: fe,
    executeCommand: Bt
  } = By({
    state: e,
    dispatch: t,
    image: O,
    isFullscreen: E,
    currentThumbnails: L,
    currentIndex: C,
    viewerMode: o,
    lineageImages: i,
    images: a,
    mountRefs: P,
    handleNext: B,
    handlePrevious: A,
    handleEditTags: d,
    handleRestore: y
  }), { isLoadingLineage: Z } = Ky({
    viewerMode: o,
    viewerImageId: l,
    lineageLength: i.length,
    dispatch: t,
    isMountedRef: P.isMountedRef
  });
  Hy({
    viewerImageId: l,
    activeModalType: e.activeModal.type,
    viewScope: e.viewScope,
    settings: c,
    dispatch: t,
    isMountedRef: P.isMountedRef,
    toggleFullscreen: z,
    handleNext: B,
    handlePrevious: A,
    handleDelete: () => {
      ie();
    },
    handleUndo: fe,
    handleTagEditAction: ce,
    handleRestoreAction: Ie,
    executeCommand: Bt,
    setShowDetails: b,
    setActiveShortcutKey: N
  }), h.useEffect(() => {
    l !== null && r(l).catch((xe) => {
      console.error("Failed to fetch full image details for viewer:", xe);
    });
  }, [r, l]), Yy({
    viewerImageId: l,
    currentThumbnails: L,
    currentIndex: C,
    isFullscreen: E,
    settings: c,
    hasMore: e.pagination.hasMore,
    viewerMode: o,
    isLoading: e.isLoading,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  const pn = h.useMemo(() => {
    if (!T || C === -1) return [];
    const xe = c["viewer.thumbnail_window_size"], ot = Math.floor(xe / 2);
    let jt = Math.max(0, C - ot);
    const bt = Math.min(L.length, jt + xe);
    return bt === L.length && (jt = Math.max(0, bt - xe)), L.slice(jt, bt).map((Dn, gn) => ({
      img: Dn,
      absIndex: jt + gn
    }));
  }, [L, C, c, T]), Qt = h.useMemo(() => O ? p(O) : [], [p, O]);
  return h.useEffect(() => {
    var xe, ot;
    if (l !== null) {
      if (T) {
        const jt = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        jt && jt.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((xe = document.activeElement) == null ? void 0 : xe.tagName) === "CANVAS" && document.activeElement.blur(), (ot = U.current) == null || ot.focus();
    }
  }, [T, l]), {
    isFullscreen: E,
    showDetails: S,
    setShowDetails: b,
    showThumbnails: T,
    setShowThumbnailsOverride: D,
    isLoadingLineage: Z,
    isJumping: I,
    isMenuOpen: w,
    setIsMenuOpen: j,
    activeShortcutKey: V,
    lastDeletedImages: Q,
    setLastDeletedImages: J,
    overlayRef: U,
    handleNext: B,
    handlePrevious: A,
    handleDelete: ie,
    handleUpdateUserNotes: v,
    handleEditNotes: () => O && m(O),
    handleTagEdit: ce,
    handleRestore: Ie,
    handleUndo: fe,
    handleRestoreWorkflow: async () => {
      if (!O) return;
      await x(O) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!O) return;
      await g(O) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!O) return;
      _(O) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => O && k(O),
    handleRunWithMask: (xe) => O && f(O, xe),
    handleEditSource: () => O && u(O),
    toggleFullscreen: z,
    currentIndex: C,
    currentThumbnails: L,
    image: O,
    windowedThumbnails: pn,
    parentChain: Qt
  };
}, yi = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: l,
  onRestoreWorkflow: a,
  onSendToWorkflow: o,
  onRunWithWorkflow: i,
  onRunWithMask: c,
  onEditSource: d,
  onEditTags: m,
  onEditNotes: y,
  onDelete: v,
  onRestore: x,
  showRestore: g,
  deleteLabel: _,
  showQuickShortcuts: k = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: p = ""
}) => {
  const [w, j] = h.useState("left");
  h.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? j("right") : j("left"));
  }, [e, n]);
  const S = (D) => {
    switch (D) {
      case "add_unified_loader":
        return l;
      case "restore_full_workflow":
        return a;
      case "send_to_workflow":
        return o;
      case "queue_workflow":
        return i;
      case "send_to_workflow_mask":
        return () => c("apply");
      case "queue_workflow_mask":
        return () => c("run");
      case "edit_source_image":
        return d;
      case "edit_tags":
        return m;
      case "edit_notes":
        return y;
      case "restore_image":
        return x;
      case "delete_or_trash":
        return v;
      default:
        return null;
    }
  }, b = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((D) => D && D !== ""), M = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: M, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${p}`,
        onClick: (D) => {
          D.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(Zp, { size: u })
      }
    ),
    k && b.map((D, T) => {
      const I = Lf.find((N) => N.id === D);
      if (!I || !I.icon) return null;
      const F = I.icon, V = S(D);
      return !V || D === "restore_image" && !g ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${p}`,
          onClick: (N) => {
            N.stopPropagation(), V();
          },
          title: I.label,
          children: /* @__PURE__ */ s.jsx(F, { size: u })
        },
        `${D}-${T}`
      );
    }),
    e && /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card__menu ${w === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: kf,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: Ef,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: Cf,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: jf,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: bf,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Sf,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: Mf,
            handler: m
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: If,
            handler: y
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: Nf,
            handler: d
          },
          ...g ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: Tf,
              handler: x,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: _,
            icon: Ut,
            handler: v,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((D) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${D.className || ""}`,
            onMouseDown: (T) => T.stopPropagation(),
            onClick: (T) => {
              T.preventDefault(), T.stopPropagation(), D.handler(), t(!1);
            },
            children: [
              /* @__PURE__ */ s.jsx(D.icon, { size: 14, color: D.color }),
              /* @__PURE__ */ s.jsx("span", { children: D.label })
            ]
          },
          D.id
        ))
      }
    )
  ] });
}, Zy = ({
  settings: e,
  activeShortcutKey: t
}) => e["viewer.shortcut.show_cheat_sheet"] ? /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-cheat-sheet", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => {
  const r = String(n), l = e[`viewer.shortcut.${r}`];
  return typeof l == "string" && l ? /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-viewer-cheat-sheet__item ${t === r ? "meld-viewer-cheat-sheet__item--active" : ""}`,
      children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-cheat-sheet__key", children: n }),
        /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-cheat-sheet__cmd", children: l.replace("tag-toggle:", "+/- ") })
      ]
    },
    n
  ) : null;
}) }) : null, Jy = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = h.useState("idle");
  h.useEffect(() => {
    c("idle");
  }, []);
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], m = d === "always" || d === "if_present" && e.user_notes;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-viewer-details-overlay ${t ? "meld-viewer-details-overlay--fullscreen" : ""} ${r ? "" : "meld-viewer-details-overlay--no-icons"}`,
      children: [
        (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename })
        ] }),
        (t ? n["fullscreen.details.show_dimensions"] : n["viewer.details.show_dimensions"]) && e.width && e.height && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-value", children: [
            e.width,
            " x ",
            e.height,
            " px"
          ] })
        ] }),
        (t ? n["fullscreen.details.show_created_at"] : n["viewer.details.show_created_at"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.created_at * 1e3).toLocaleString() })
        ] }),
        e.deleted_at && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.deleted_at * 1e3).toLocaleString() })
        ] }),
        (t ? n["fullscreen.details.show_model_name"] : n["viewer.details.show_model_name"]) && e.model_name && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
        ] }),
        (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && l.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: l.map(
            (y, v) => y.imgSrc && /* @__PURE__ */ s.jsx(
              "img",
              {
                src: y.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (x) => {
                  x.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: y.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: v === 0 ? "Source" : v === 1 ? "Grand-Source" : `Ancestor (S${v + 1})`,
                alt: "source thumb"
              },
              y.id || v
            )
          ) }) })
        ] }),
        (t ? n["fullscreen.details.show_positive_prompt"] : n["viewer.details.show_positive_prompt"]) && (e.positive_prompt || e.positive) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-viewer-details-value meld-viewer-details-value--prompt",
              style: {
                "--meld-prompt-max-lines": t ? n["fullscreen.details.max_positive_prompt_lines"] : n["viewer.details.max_positive_prompt_lines"]
              },
              children: e.positive_prompt || e.positive
            }
          )
        ] }),
        (t ? n["fullscreen.details.show_negative_prompt"] : n["viewer.details.show_negative_prompt"]) && (e.negative_prompt || e.negative) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-viewer-details-value meld-viewer-details-value--prompt",
              style: {
                "--meld-prompt-max-lines": t ? n["fullscreen.details.max_negative_prompt_lines"] : n["viewer.details.max_negative_prompt_lines"]
              },
              children: e.negative_prompt || e.negative
            }
          )
        ] }),
        (t ? n["fullscreen.details.show_tags"] : n["viewer.details.show_tags"]) && e.tags && e.tags.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((y) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: y }, y)) })
        ] }),
        m && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            i === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
          ] }),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-viewer-notes-preview",
              onClick: (y) => {
                y.stopPropagation(), o == null || o();
              },
              style: {
                cursor: "pointer",
                minHeight: "40px",
                padding: "8px",
                backgroundColor: "var(--meld-input-bg)",
                borderRadius: "4px",
                fontSize: "0.9rem",
                whiteSpace: "pre-wrap"
              },
              children: e.user_notes || /* @__PURE__ */ s.jsx("span", { style: { color: "var(--meld-text-secondary)" }, children: "Add notes..." })
            }
          )
        ] })
      ]
    }
  );
}, Gf = h.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r,
    viewerMode: l,
    lightTableSlotId: a
  }) => {
    const o = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, c = typeof e.parent_id == "number" && e.parent_id === n.id, d = mt(e, 64);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${o ? "meld-viewer-thumbnail--active" : ""} ${i ? "meld-viewer-thumbnail--parent" : ""} ${c ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: {
            id: e.id,
            mode: l,
            // Preserve slotId in lighttable mode
            ...l === "lighttable" && a ? { slotId: a } : {}
          }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: d, alt: e.filename }),
          (i || c) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: i ? "Source Image" : "Derivative Image",
              children: i ? /* @__PURE__ */ s.jsx(af, { size: 12 }) : /* @__PURE__ */ s.jsx(sf, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Gf.displayName = "ThumbnailItem";
const ev = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: l,
  isLoading: a,
  viewerMode: o,
  lightTableSlotId: i
}) => /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-thumbnails", children: [
  l ? /* @__PURE__ */ s.jsx(
    "div",
    {
      style: {
        padding: "10px",
        color: "var(--meld-text-secondary)"
      },
      children: "Loading lineage..."
    }
  ) : e.map(({ img: c }) => /* @__PURE__ */ s.jsx(
    Gf,
    {
      thumb: c,
      viewerImageId: t,
      currentImage: n,
      dispatch: r,
      viewerMode: o,
      lightTableSlotId: i
    },
    c.id
  )),
  o === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(nl, { className: "animate-spin", size: 20 }) })
] }) });
function tv() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ge(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: m,
    isMenuOpen: y,
    setIsMenuOpen: v,
    activeShortcutKey: x,
    setLastDeletedImages: g,
    overlayRef: _,
    handleNext: k,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: p,
    handleRestore: w,
    handleRestoreWorkflow: j,
    handleAddUnifiedLoader: S,
    handleSendToWorkflow: b,
    handleRunWithWorkflow: M,
    handleRunWithMask: D,
    handleEditSource: T,
    handleDelete: I,
    toggleFullscreen: F,
    image: V,
    windowedThumbnails: N,
    parentChain: U
  } = Xy({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), P = h.useRef(null), L = h.useRef(null), { executeWorkflow: C } = pi(), R = h.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!V) return null;
  const { viewerImageId: O, viewerMode: E } = e, z = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return de.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: _,
        className: "meld-viewer-overlay",
        onClick: () => {
          e.activeModal.type === "none" && t({ type: "CLOSE_VIEWER" });
        },
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${i ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (B) => B.stopPropagation(),
              children: [
                z && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: w,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(nl, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(cf, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(Bp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: F,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(Xp, { size: 20 }) : /* @__PURE__ */ s.jsx(qp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    yi,
                    {
                      isMenuOpen: y,
                      setIsMenuOpen: v,
                      menuRef: L,
                      settings: e.settings,
                      onAddUnifiedLoader: S,
                      onRestoreWorkflow: j,
                      onSendToWorkflow: b,
                      onRunWithWorkflow: M,
                      onRunWithMask: D,
                      onEditSource: T,
                      onEditTags: u,
                      onEditNotes: p,
                      onDelete: I,
                      deleteLabel: R,
                      showQuickShortcuts: !1,
                      iconSize: 20,
                      buttonClassName: "meld-viewer-action-btn"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                    }
                  )
                ] }),
                z && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: m,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(of, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  m && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(nl, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: P,
                      src: mi(V),
                      alt: V.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${m ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                z && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: k,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ s.jsx(ci, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  Jy,
                  {
                    image: V,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: z,
                    parentChain: U,
                    dispatch: t,
                    onEditNotes: p
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  ev,
                  {
                    windowedThumbnails: N,
                    viewerImageId: O,
                    currentImage: V,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: E,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Zy,
                  {
                    settings: e.settings,
                    activeShortcutKey: x
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            Af,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (B, A) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: B,
                        targetLoaderNodeId: A
                      }
                    }), !1;
                  const Q = e.activeModal.maskFilename;
                  for (const J of e.activeModal.images)
                    await C(
                      B,
                      J,
                      Q,
                      A
                    );
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            Of,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (B) => {
                e.activeModal.type === "node_selection" && rl(e.activeModal.image, B);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Ff, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            zf,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: g
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Wf, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(yf, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Df, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            Rf,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            ws,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            ws,
            {
              imageId: e.activeModal.images[e.activeModal.currentIndex].id,
              mode: "run_sequence",
              sequenceData: {
                workflowName: e.activeModal.workflowName,
                targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
                currentIndex: e.activeModal.currentIndex,
                totalCount: e.activeModal.images.length
              },
              onSuccess: () => {
                if (e.activeModal.type === "mask_sequence_step") {
                  const B = e.activeModal.currentIndex + 1;
                  B < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: B
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            },
            e.activeModal.images[e.activeModal.currentIndex].id
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ s.jsx(
            Pf,
            {
              imageId: e.activeModal.imageId,
              initialNotes: e.activeModal.notes,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          )
        ]
      }
    ),
    document.body
  );
}
const nv = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = ge(), [a, o] = h.useState("gallery"), [i, c] = h.useState(""), d = e.searchQuery.trim() !== "", m = h.useRef(null), y = h.useRef(null), v = re((k) => k.buckets), x = h.useMemo(() => {
    const k = /* @__PURE__ */ new Set();
    for (const f of Object.values(v))
      for (const u of f)
        k.add(Number(u));
    return k;
  }, [v]), g = h.useMemo(() => e.images.filter((k) => x.has(k.id) ? !1 : e.viewScope === "trash" ? k.exists !== !1 || e.settings["gallery.trash.show_missing"] : k.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !k.has_children)), [
    e.images,
    e.settings,
    e.viewScope,
    x,
    d
  ]), _ = g;
  return h.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && g.length === 0 && (Y.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    g.length,
    r
  ]), zs({
    onKeyDown: (k) => {
      if (k.key !== "Escape")
        return;
      const f = !!document.querySelector(
        '[role="dialog"][aria-modal="true"], [role="alertdialog"][aria-modal="true"], .meld-modal-overlay'
      );
      e.activeModal.type !== "none" || f || e.selectedIds.size !== 0 && (t({ type: "CLEAR_SELECTION" }), ll(k));
    }
  }), h.useEffect(() => {
    const k = new IntersectionObserver(
      (u) => {
        if (u[0].isIntersecting) {
          if (e.isLoading) {
            Y.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          e.pagination.hasMore ? (Y.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : Y.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: g.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = m.current;
    return f && k.observe(f), () => {
      f && k.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    g.length,
    e.images.length
  ]), h.useEffect(() => {
    e.viewerImageId !== null && (y.current = e.viewerImageId);
  }, [e.viewerImageId]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: l,
    viewMode: a,
    setViewMode: o,
    lastSearchQuery: i,
    setLastSearchQuery: c,
    localLimit: e.pagination.limit,
    displayedImages: g,
    visibleImages: _,
    isSearchActive: d,
    loadMoreRef: m
  };
}, rv = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ge(), { handleRunWithWorkflow: l, handleRunWithMask: a } = As(
    e,
    t
  ), o = e.selectedIds.size, [i, c] = h.useState(!1), [d, m] = h.useState(null), y = h.useRef(null), v = h.useRef(null), x = Vf("bulkActionBar");
  if (Ue({
    onEscape: () => c(!1),
    enabled: i
  }), sl({
    enabled: i,
    insideRefs: [y, v],
    onOutside: () => c(!1)
  }), o === 0) return null;
  const g = e.viewScope === "trash", _ = () => e.images.filter((b) => e.selectedIds.has(b.id)), k = () => {
    if (i) {
      c(!1);
      return;
    }
    y.current && (m(y.current.getBoundingClientRect()), c(!0));
  }, f = (b) => {
    b(), c(!1);
  }, u = () => {
    const b = _(), M = /* @__PURE__ */ new Set();
    for (const D of b)
      if (D.tags)
        for (const T of D.tags)
          M.add(T);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(M)
      }
    });
  }, p = () => {
    const b = _();
    l(b);
  }, w = () => {
    const b = _();
    b.length > 0 && a(b, "run");
  }, j = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, S = /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${g ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
          o,
          " items selected"
        ] }),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            ref: y,
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--action",
            onClick: k,
            children: [
              /* @__PURE__ */ s.jsx(
                Yp,
                {
                  size: 16,
                  style: { marginRight: "8px", verticalAlign: "middle" }
                }
              ),
              "Action"
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
              /* @__PURE__ */ s.jsx(pe, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        ),
        i && d && /* @__PURE__ */ s.jsx(
          "div",
          {
            ref: v,
            className: "meld-bulk-bar-menu",
            style: {
              bottom: window.innerHeight - d.top + 5,
              left: d.left
            },
            children: g ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
                  onClick: () => f(r),
                  children: [
                    /* @__PURE__ */ s.jsx(nl, { size: 14 }),
                    " Restore"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
                  onClick: () => f(n),
                  children: [
                    /* @__PURE__ */ s.jsx(Ut, { size: 14 }),
                    " Delete Permanently"
                  ]
                }
              )
            ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item",
                  onClick: () => f(u),
                  children: [
                    /* @__PURE__ */ s.jsx(pr, { size: 14 }),
                    " Edit Tags"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item",
                  onClick: () => f(p),
                  children: [
                    /* @__PURE__ */ s.jsx(di, { size: 14 }),
                    " Queue Workflow"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item",
                  onClick: () => f(w),
                  children: [
                    /* @__PURE__ */ s.jsx(eg, { size: 14 }),
                    " Queue Workflow (Mask)"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item",
                  onClick: () => f(j),
                  children: [
                    /* @__PURE__ */ s.jsx(el, { size: 14 }),
                    " Download"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx("div", { className: "meld-bulk-bar-menu__divider" }),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
                  onClick: () => f(n),
                  children: [
                    /* @__PURE__ */ s.jsx(Ut, { size: 14 }),
                    " Move to Trash"
                  ]
                }
              )
            ] })
          }
        )
      ]
    }
  );
  return de.createPortal(S, x);
};
function Fn(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let m;
    n.key && ((i = n.debug) != null && i.call(n)) && (m = Date.now());
    const y = e();
    if (!(y.length !== r.length || y.some((g, _) => r[_] !== g)))
      return l;
    r = y;
    let x;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (x = Date.now()), l = t(...y), n.key && ((d = n.debug) != null && d.call(n))) {
      const g = Math.round((Date.now() - m) * 100) / 100, _ = Math.round((Date.now() - x) * 100) / 100, k = _ / 16, f = (u, p) => {
        for (u = String(u); u.length < p; )
          u = " " + u;
        return u;
      };
      console.info(
        `%c⏱ ${f(_, 5)} /${f(g, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * k, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return n != null && n.onChange && !(a && n.skipInitialOnChange) && n.onChange(l), a = !1, l;
  }
  return o.updateDeps = (i) => {
    r = i;
  }, o;
}
function zc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const lv = (e, t) => Math.abs(e - t) < 1.01, sv = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, Fc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, av = (e) => e, ov = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, iv = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const l = (o) => {
    const { width: i, height: c } = o;
    t({ width: Math.round(i), height: Math.round(c) });
  };
  if (l(Fc(n)), !r.ResizeObserver)
    return () => {
    };
  const a = new r.ResizeObserver((o) => {
    const i = () => {
      const c = o[0];
      if (c != null && c.borderBoxSize) {
        const d = c.borderBoxSize[0];
        if (d) {
          l({ width: d.inlineSize, height: d.blockSize });
          return;
        }
      }
      l(Fc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Wc = {
  passive: !0
}, $c = typeof window > "u" ? !0 : "onscrollend" in window, cv = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && $c ? () => {
  } : sv(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (m) => () => {
    const { horizontal: y, isRtl: v } = e.options;
    l = y ? n.scrollLeft * (v && -1 || 1) : n.scrollTop, a(), t(l, m);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Wc);
  const d = e.options.useScrollendEvent && $c;
  return d && n.addEventListener("scrollend", c, Wc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, dv = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, uv = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var l, a;
  const o = e + t;
  (a = (l = r.scrollElement) == null ? void 0 : l.scrollTo) == null || a.call(l, {
    [r.options.horizontal ? "left" : "top"]: o,
    behavior: n
  });
};
class fv {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((a) => {
          const o = () => {
            this._measureElement(a.target, a);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = r()) == null || l.disconnect(), n = null;
        },
        observe: (l) => {
          var a;
          return (a = r()) == null ? void 0 : a.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var a;
          return (a = r()) == null ? void 0 : a.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, l]) => {
        typeof l > "u" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: av,
        rangeExtractor: ov,
        onChange: () => {
        },
        measureElement: dv,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...n
      };
    }, this.notify = (n) => {
      var r, l;
      (l = (r = this.options).onChange) == null || l.call(r, this, n);
    }, this.maybeNotify = Fn(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((l) => {
          this.observer.observe(l);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (l) => {
            this.scrollRect = l, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (l, a) => {
            this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < l ? "forward" : "backward" : null, this.scrollOffset = l, this.isScrolling = a, this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
      const l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (let o = r - 1; o >= 0; o--) {
        const i = n[o];
        if (l.has(i.lane))
          continue;
        const c = a.get(
          i.lane
        );
        if (c == null || i.end > c.end ? a.set(i.lane, i) : i.end < c.end && l.set(i.lane, !0), l.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((o, i) => o.end === i.end ? o.index - i.index : o.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = Fn(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (n, r, l, a, o, i) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: l,
        getItemKey: a,
        enabled: o,
        lanes: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Fn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: l, getItemKey: a, enabled: o, lanes: i }, c) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const v of this.laneAssignments.keys())
            v >= n && this.laneAssignments.delete(v);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((v) => {
          this.itemSizeCache.set(v.key, v.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1);
        const m = this.measurementsCache.slice(0, d), y = new Array(i).fill(
          void 0
        );
        for (let v = 0; v < d; v++) {
          const x = m[v];
          x && (y[x.lane] = v);
        }
        for (let v = d; v < n; v++) {
          const x = a(v), g = this.laneAssignments.get(v);
          let _, k;
          if (g !== void 0 && this.options.lanes > 1) {
            _ = g;
            const w = y[_], j = w !== void 0 ? m[w] : void 0;
            k = j ? j.end + this.options.gap : r + l;
          } else {
            const w = this.options.lanes === 1 ? m[v - 1] : this.getFurthestMeasurement(m, v);
            k = w ? w.end + this.options.gap : r + l, _ = w ? w.lane : v % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(v, _);
          }
          const f = c.get(x), u = typeof f == "number" ? f : this.options.estimateSize(v), p = k + u;
          m[v] = {
            index: v,
            start: k,
            size: u,
            end: p,
            key: x,
            lane: _
          }, y[_] = v;
        }
        return this.measurementsCache = m, m;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Fn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? mv({
        measurements: n,
        outerSize: r,
        scrollOffset: l,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Fn(
      () => {
        let n = null, r = null;
        const l = this.calculateRange();
        return l && (n = l.startIndex, r = l.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, l, a, o) => a === null || o === null ? [] : n({
        startIndex: a,
        endIndex: o,
        overscan: r,
        count: l
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, l = n.getAttribute(r);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const l = this.indexFromElement(n), a = this.measurementsCache[l];
      if (!a)
        return;
      const o = a.key, i = this.elementsCache.get(o);
      i !== n && (i && this.observer.unobserve(i), this.observer.observe(n), this.elementsCache.set(o, n)), n.isConnected && this.resizeItem(l, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const l = this.measurementsCache[n];
      if (!l)
        return;
      const a = this.itemSizeCache.get(l.key) ?? l.size, o = r - a;
      o !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(l, o, this) : l.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(l.index), this.itemSizeCache = new Map(this.itemSizeCache.set(l.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, l) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(l));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = Fn(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const l = [];
        for (let a = 0, o = n.length; a < o; a++) {
          const i = n[a], c = r[i];
          l.push(c);
        }
        return l;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return zc(
          r[qf(
            0,
            r.length - 1,
            (l) => zc(r[l]).start,
            n
          )]
        );
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const n = this.scrollElement.document.documentElement;
        return this.options.horizontal ? n.scrollWidth - this.scrollElement.innerWidth : n.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (n, r, l = 0) => {
      if (!this.scrollElement) return 0;
      const a = this.getSize(), o = this.getScrollOffset();
      r === "auto" && (r = n >= o + a ? "end" : "start"), r === "center" ? n += (l - a) / 2 : r === "end" && (n -= a);
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const l = this.measurementsCache[n];
      if (!l)
        return;
      const a = this.getSize(), o = this.getScrollOffset();
      if (r === "auto")
        if (l.end >= o + a - this.options.scrollPaddingEnd)
          r = "end";
        else if (l.start <= o + this.options.scrollPaddingStart)
          r = "start";
        else
          return [o, r];
      if (r === "end" && n === this.options.count - 1)
        return [this.getMaxScrollOffset(), r];
      const i = r === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, r, l.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (n, { align: r = "start", behavior: l } = {}) => {
      l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: l
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: l } = {}) => {
      l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), n = Math.max(0, Math.min(n, this.options.count - 1)), this.currentScrollToIndex = n;
      let a = 0;
      const o = 10, i = (d) => {
        if (!this.targetWindow) return;
        const m = this.getOffsetForIndex(n, d);
        if (!m) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [y, v] = m;
        this._scrollToOffset(y, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const x = () => {
            if (this.currentScrollToIndex !== n) return;
            const g = this.getScrollOffset(), _ = this.getOffsetForIndex(n, v);
            if (!_) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            lv(_[0], g) || c(v);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(x) : x();
        });
      }, c = (d) => {
        this.targetWindow && this.currentScrollToIndex === n && (a++, a < o ? this.targetWindow.requestAnimationFrame(() => i(d)) : console.warn(
          `Failed to scroll to index ${n} after ${o} attempts.`
        ));
      };
      i(r);
    }, this.scrollBy = (n, { behavior: r } = {}) => {
      r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + n, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var n;
      const r = this.getMeasurements();
      let l;
      if (r.length === 0)
        l = this.options.paddingStart;
      else if (this.options.lanes === 1)
        l = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
      else {
        const a = Array(this.options.lanes).fill(null);
        let o = r.length - 1;
        for (; o >= 0 && a.some((i) => i === null); ) {
          const i = r[o];
          a[i.lane] === null && (a[i.lane] = i.end), o--;
        }
        l = Math.max(...a.filter((i) => i !== null));
      }
      return Math.max(
        l - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: l
    }) => {
      this.options.scrollToFn(n, { behavior: l, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const qf = (e, t, n, r) => {
  for (; e <= t; ) {
    const l = (e + t) / 2 | 0, a = n(l);
    if (a < r)
      e = l + 1;
    else if (a > r)
      t = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function mv({
  measurements: e,
  outerSize: t,
  scrollOffset: n,
  lanes: r
}) {
  const l = e.length - 1, a = (c) => e[c].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: l
    };
  let o = qf(
    0,
    l,
    a,
    n
  ), i = o;
  if (r === 1)
    for (; i < l && e[i].end < n + t; )
      i++;
  else if (r > 1) {
    const c = Array(r).fill(0);
    for (; i < l && c.some((m) => m < n + t); ) {
      const m = e[i];
      c[m.lane] = m.end, i++;
    }
    const d = Array(r).fill(n + t);
    for (; o >= 0 && d.some((m) => m >= n); ) {
      const m = e[o];
      d[m.lane] = m.start, o--;
    }
    o = Math.max(0, o - o % r), i = Math.min(l, i + (r - 1 - i % r));
  }
  return { startIndex: o, endIndex: i };
}
const Uc = typeof document < "u" ? h.useLayoutEffect : h.useEffect;
function hv({
  useFlushSync: e = !0,
  ...t
}) {
  const n = h.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? de.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = h.useState(
    () => new fv(r)
  );
  return l.setOptions(r), Uc(() => l._didMount(), []), Uc(() => l._willUpdate()), l;
}
function pv(e) {
  return hv({
    observeElementRect: iv,
    observeElementOffset: cv,
    scrollToFn: uv,
    ...e
  });
}
const Yf = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ge(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: m,
    handleRunWithWorkflow: y,
    handleRunWithMask: v,
    handleRestore: x,
    handleDelete: g,
    handleEditNotes: _,
    handleUpdateUserNotes: k
  } = As(t, n), { getParentChain: f } = Kf(t.images, t.settings), [u, p] = h.useState(null), [w, j] = h.useState(!1), [S, b] = h.useState(null), [M, D] = h.useState(!1), T = h.useRef(null);
  sl({
    enabled: w,
    insideRefs: [T],
    onOutside: () => j(!1)
  });
  const I = async (Z, pn, Qt = !1) => {
    try {
      await navigator.clipboard.writeText(Z), Qt ? (D(!0), setTimeout(() => D(!1), 2e3)) : (b(pn), setTimeout(() => b(null), 2e3));
    } catch (Lt) {
      console.error("Failed to copy text: ", Lt);
    }
  }, F = h.useCallback(
    (Z) => {
      if (Z.key === "Escape") {
        if (u) {
          ll(Z), p(null);
          return;
        }
        w && (ll(Z), j(!1));
      }
    },
    [u, w]
  );
  zs({
    enabled: w || u !== null,
    onKeyDown: F
  });
  const V = f(e), U = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, P = t.settings["sidebar.thumbnail_size"] || 100, L = mt(
    e,
    Math.min(400, Math.round(P * 1.5))
  );
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: u,
    setPopupContent: p,
    isMenuOpen: w,
    setIsMenuOpen: j,
    copiedLabel: S,
    popupCopied: M,
    menuRef: T,
    parentChain: V,
    displayFilename: U,
    imgSrc: L,
    handleCopy: I,
    handleClick: (Z) => {
      Z.shiftKey ? (Z.preventDefault(), Z.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : Z.ctrlKey || Z.metaKey || t.selectedIds.size > 0 ? (Z.preventDefault(), Z.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (Z) => {
      Z.preventDefault(), Z.stopPropagation(), Z.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (Z) => {
      Z.shiftKey ? (Z.preventDefault(), Z.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : Z.ctrlKey || Z.metaKey || t.selectedIds.size > 0 ? (Z.preventDefault(), Z.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (Z.preventDefault(), Z.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (Z) => {
      Z.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || !Z.shiftKey && !Z.ctrlKey && !Z.metaKey && l || (Z.shiftKey || Z.ctrlKey || Z.metaKey || t.selectedIds.size > 0) && Z.preventDefault();
    },
    handleKeyDown: (Z) => {
      var Qt, Lt, xe;
      ((Qt = document.activeElement) == null ? void 0 : Qt.tagName) === "INPUT" || ((Lt = document.activeElement) == null ? void 0 : Lt.tagName) === "TEXTAREA" || (xe = document.activeElement) != null && xe.isContentEditable || (Z.key === "Enter" || Z.key === " ") && (Z.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleRestoreWorkflow: async () => {
      await o(e);
    },
    handleAddUnifiedLoader: async () => {
      await i(e);
    },
    handleEditSource: () => {
      c(e);
    },
    handleEditTags: () => {
      d(e);
    },
    handleEditNotes: () => {
      _(e);
    },
    handleSendToWorkflow: () => {
      m(e);
    },
    handleRestore: () => {
      x(e);
    },
    handleDelete: () => {
      g(e);
    },
    handleRunWithWorkflow: () => {
      y(e);
    },
    handleRunWithMask: (Z = "run") => v(e, Z),
    handleUpdateUserNotes: (Z) => k(e.id, Z),
    fetchFullImageDetails: r
  };
}, gv = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => de.createPortal(
  /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-prompt-popup-overlay",
      onClick: (a) => {
        a.stopPropagation(), n();
      },
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-prompt-popup-content",
          onClick: (a) => a.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-header", children: [
              /* @__PURE__ */ s.jsx("span", { children: e }),
              /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                l ? /* @__PURE__ */ s.jsx(ii, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  Wp,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  pe,
                  {
                    className: "meld-prompt-popup-close",
                    size: 18,
                    onClick: n
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup-text", children: t })
          ]
        }
      )
    }
  ),
  document.body
), Xf = Zt.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: l,
      setPopupContent: a,
      isMenuOpen: o,
      setIsMenuOpen: i,
      copiedLabel: c,
      popupCopied: d,
      menuRef: m,
      parentChain: y,
      displayFilename: v,
      imgSrc: x,
      handleCopy: g,
      handleClick: _,
      handleSelectToggle: k,
      handleContainerClick: f,
      handleMouseDown: u,
      handleKeyDown: p,
      handleRestoreWorkflow: w,
      handleAddUnifiedLoader: j,
      handleEditSource: S,
      handleEditTags: b,
      handleEditNotes: M,
      handleSendToWorkflow: D,
      handleRestore: T,
      handleDelete: I,
      handleRunWithWorkflow: F,
      handleRunWithMask: V,
      fetchFullImageDetails: N
    } = Yf(e), [U, P] = h.useState("idle");
    h.useEffect(() => {
      e.user_notes && U === "saving" && P("idle");
    }, [e.user_notes, U]);
    const L = (C) => {
      C.stopPropagation();
      let R = String(e.id);
      r && t.selectedIds.size > 0 && (R = Array.from(t.selectedIds).join(",")), C.dataTransfer.setData("text/plain", R), re.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: f,
        onMouseDown: u,
        onKeyDown: p,
        role: "button",
        tabIndex: 0,
        draggable: !0,
        onDragStart: L,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: k,
                "aria-label": "Toggle selection",
                role: "checkbox",
                "aria-checked": r,
                children: r && /* @__PURE__ */ s.jsxs(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    width: "12",
                    height: "12",
                    stroke: "currentColor",
                    strokeWidth: "4",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ s.jsx("title", { children: "Selected" }),
                      /* @__PURE__ */ s.jsx("polyline", { points: "20 6 9 17 4 12" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ s.jsx(
              "img",
              {
                src: x,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                draggable: !1,
                width: e.width || void 0,
                height: e.height || void 0,
                style: {
                  aspectRatio: e.width && e.height ? `${e.width} / ${e.height}` : void 0
                },
                onMouseDown: u,
                onClick: (C) => {
                  C.stopPropagation(), _(C);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && v,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && y.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: y.map(
                (C, R) => C.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: C.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (O) => {
                      O.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: C.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: R === 0 ? "Source" : R === 1 ? "Grand-Source" : `Ancestor (S${R + 1})`,
                    alt: "source thumb"
                  },
                  C.id || R
                )
              ) })
            ] }),
            t.settings["sidebar.show_created_at"] && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__meta-item", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Created At" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.created_at * 1e3).toLocaleString() })
            ] }),
            t.viewScope === "trash" && e.deleted_at && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__meta-item", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Deleted At" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.deleted_at * 1e3).toLocaleString() })
            ] }),
            t.settings["sidebar.show_model_name"] && /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (C) => {
                  C.stopPropagation();
                  const R = await N(e.id);
                  a({
                    title: "Model",
                    text: R.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const R = await N(e.id);
                        g(R.model_name || "-", "Model");
                      },
                      children: c === "Model" ? "Copied!" : "Model"
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
                onClick: async (C) => {
                  C.stopPropagation();
                  const R = await N(e.id);
                  a({
                    title: "Positive Prompt",
                    text: R.positive_prompt || R.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const R = await N(e.id);
                        g(
                          R.positive_prompt || R.positive || "-",
                          "Positive"
                        );
                      },
                      children: c === "Positive" ? "Copied!" : "Positive"
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
                onClick: async (C) => {
                  C.stopPropagation();
                  const R = await N(e.id);
                  a({
                    title: "Negative Prompt",
                    text: R.negative_prompt || R.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const R = await N(e.id);
                        g(
                          R.negative_prompt || R.negative || "-",
                          "Negative"
                        );
                      },
                      children: c === "Negative" ? "Copied!" : "Negative"
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
                onClick: (C) => {
                  C.stopPropagation(), b();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((C, R) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: C
                    },
                    `${C}-${R}`
                  )) : /* @__PURE__ */ s.jsx(
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
            ),
            (t.settings["sidebar.show_user_notes"] === "always" || t.settings["sidebar.show_user_notes"] === "if_present" && e.user_notes) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__meta-item meld-image-card__meta-item--notes", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__meta-label", children: [
                "Notes",
                U === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: "meld-image-card__meta-content",
                  onClick: (C) => {
                    C.stopPropagation(), M();
                  },
                  children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsx(
            yi,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: m,
              settings: t.settings,
              onAddUnifiedLoader: j,
              onRestoreWorkflow: w,
              onSendToWorkflow: D,
              onRunWithWorkflow: F,
              onRunWithMask: (C) => V(C),
              onEditSource: S,
              onEditTags: b,
              onEditNotes: M,
              onRestore: T,
              showRestore: t.viewScope === "trash",
              onDelete: I,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            gv,
            {
              title: l.title,
              text: l.text,
              onClose: () => a(null),
              onCopy: (C) => g(C, "", !0),
              isCopied: d
            }
          )
        ]
      }
    );
  }
);
Xf.displayName = "DetailedImageCard";
const Zf = Zt.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: a,
      handleClick: o,
      handleSelectToggle: i,
      isMenuOpen: c,
      setIsMenuOpen: d,
      menuRef: m,
      state: y,
      handleAddUnifiedLoader: v,
      handleRestoreWorkflow: x,
      handleSendToWorkflow: g,
      handleRunWithWorkflow: _,
      handleRunWithMask: k,
      handleEditSource: f,
      handleEditTags: u,
      handleEditNotes: p,
      handleDelete: w,
      handleRestore: j
    } = Yf(e), S = y.viewScope === "trash", b = S ? "Delete Permanently" : "Move to Trash", M = (D) => {
      D.stopPropagation();
      let T = String(e.id);
      t && y.selectedIds.size > 0 && (T = Array.from(y.selectedIds).join(",")), D.dataTransfer.setData("text/plain", T), re.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""} ${c ? "meld-image-card--menu-open" : ""}`,
        onClick: r,
        onMouseDown: l,
        onKeyDown: a,
        role: "button",
        tabIndex: 0,
        draggable: !0,
        onDragStart: M,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-image-card__select-checkbox ${t ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: i,
                "aria-label": "Toggle selection",
                role: "checkbox",
                "aria-checked": t,
                children: t && /* @__PURE__ */ s.jsxs(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    width: "10",
                    height: "10",
                    stroke: "currentColor",
                    strokeWidth: "4",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ s.jsx("title", { children: "Selected" }),
                      /* @__PURE__ */ s.jsx("polyline", { points: "20 6 9 17 4 12" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ s.jsx(
              "img",
              {
                src: n,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                draggable: !1,
                width: e.width || void 0,
                height: e.height || void 0,
                style: {
                  aspectRatio: e.width && e.height ? `${e.width} / ${e.height}` : void 0
                },
                onMouseDown: l,
                onClick: (D) => {
                  D.stopPropagation(), o(D);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            yi,
            {
              isMenuOpen: c,
              setIsMenuOpen: d,
              menuRef: m,
              settings: y.settings,
              onAddUnifiedLoader: v,
              onRestoreWorkflow: x,
              onSendToWorkflow: g,
              onRunWithWorkflow: _,
              onRunWithMask: k,
              onEditSource: f,
              onEditTags: u,
              onEditNotes: p,
              onDelete: w,
              onRestore: j,
              showRestore: S,
              deleteLabel: b,
              showQuickShortcuts: !1,
              variant: "thumbnail_overlay_top_right"
            }
          )
        ]
      }
    );
  }
);
Zf.displayName = "SimpleImageCard";
const Vc = ({ image: e }) => {
  const { state: t } = ge();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Zf, { image: e }) : /* @__PURE__ */ s.jsx(Xf, { image: e });
}, ga = 6, yv = 10, vv = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  hasMore: a
}) => {
  const o = h.useRef(null), [i, c] = h.useState(300), d = t["sidebar.thumbnail_size"] || 100, m = t["gallery.view_mode"] === "grid_only";
  h.useEffect(() => {
    const f = o.current;
    if (!f) return;
    const u = () => {
      c(f.clientWidth);
    };
    u();
    const p = new ResizeObserver(u);
    return p.observe(f), () => p.disconnect();
  }, []);
  const y = d + 10, v = m ? Math.max(
    1,
    Math.floor(
      (i - yv * 2 + ga) / (y + ga)
    )
  ) : 1, x = m ? Math.ceil(e.length / v) : e.length, g = m ? d + 14 : d + 40, _ = pv({
    count: x,
    getScrollElement: () => o.current,
    estimateSize: () => g,
    overscan: 5,
    getItemKey: (f) => {
      var u;
      return m ? `row-${f}-${v}` : ((u = e[f]) == null ? void 0 : u.id) ?? f;
    }
  });
  h.useEffect(() => {
    if (r === null) return;
    const f = e.findIndex((p) => p.id === r);
    if (f < 0) return;
    const u = m ? Math.floor(f / v) : f;
    _.scrollToIndex(u, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, m, v, _]);
  const k = _.getVirtualItems();
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: o,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${d}px`
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `meld-gallery__list ${m ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${_.getTotalSize()}px`,
              position: "relative"
            },
            children: k.map((f) => {
              if (m) {
                const p = f.index * v, w = Math.min(
                  p + v,
                  e.length
                ), j = e.slice(p, w);
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    ref: _.measureElement,
                    "data-index": f.index,
                    className: "meld-gallery__virtual-grid-row",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${f.start}px)`,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: ga,
                      alignItems: "flex-start"
                    },
                    children: j.map((S) => /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        "data-image-id": S.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              width: S.width && S.height ? Math.min(
                                d,
                                d * S.width / S.height
                              ) + 10 : d + 10,
                              minWidth: d + 10
                            },
                            children: /* @__PURE__ */ s.jsx(Vc, { image: S })
                          }
                        )
                      },
                      S.id
                    ))
                  },
                  f.key
                );
              }
              const u = e[f.index];
              return u ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: _.measureElement,
                  "data-index": f.index,
                  "data-image-id": u.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${f.start}px)`
                  },
                  children: /* @__PURE__ */ s.jsx(Vc, { image: u })
                },
                f.key
              ) : null;
            })
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            ref: n,
            className: "meld-gallery__load-more",
            style: {
              height: "20px",
              margin: "20px 0",
              textAlign: "center"
            },
            children: [
              l && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
              !l && !a && e.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
            ]
          }
        )
      ]
    }
  );
}, wv = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: i,
    displayedImages: c,
    visibleImages: d,
    isSearchActive: m,
    loadMoreRef: y
  } = nv(), v = re((b) => b.isOpen), x = re((b) => b.setIsOpen), g = re((b) => b.buckets), _ = Object.values(g).some((b) => b && b.length > 0);
  Y.log("GalleryPanel: isLightTableOpen =", v);
  const [k, f] = h.useState(!1), [u, p] = h.useState(null), w = h.useRef(null), j = h.useCallback(() => {
    w.current && (p(
      w.current.getBoundingClientRect()
    ), f(!0));
  }, []), S = h.useCallback(
    (b) => {
      t({ type: "SET_SEARCH_QUERY", payload: b }), i(b), a("search"), f(!1);
    },
    [t, i, a]
  );
  return Y.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: d.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (b) => {
        b.dataTransfer.types.includes(
          "application/meld-lt-source-slot"
        ) && (b.preventDefault(), b.dataTransfer.dropEffect = "move");
      },
      onDrop: (b) => {
        const M = b.dataTransfer.getData(
          "application/meld-lt-source-slot"
        );
        if (M) {
          b.preventDefault();
          const D = b.dataTransfer.getData("text/plain");
          if (D) {
            const T = D.split(","), I = [];
            T.forEach((F) => {
              if (F) {
                const V = F.trim();
                re.getState().removeFromBucket(M, V);
                const N = Number(V);
                Number.isNaN(N) || I.push(N);
              }
            }), I.length > 0 && t({ type: "DESELECT_IMAGES", payload: I });
          }
        }
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx(Ut, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (b) => r("gallery.trash.show_missing", b.target.checked)
                }
              ),
              /* @__PURE__ */ s.jsx("span", { children: "Show missing files" })
            ] }),
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-gallery__exit-trash",
                onClick: () => t({ type: "SET_VIEW_SCOPE", payload: "default" }),
                title: "Exit Trash View",
                children: [
                  /* @__PURE__ */ s.jsx(pe, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__actions", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  l === "search" ? (i(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: m ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: m ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(In, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                ref: w,
                type: "button",
                onClick: j,
                style: {
                  background: "none",
                  border: "none",
                  color: k ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ s.jsx(
                  ur,
                  {
                    size: 14,
                    fill: k ? "var(--brand-yellow, #ffd700)" : "none"
                  }
                )
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(l === "tags" ? "gallery" : "tags"),
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
                children: /* @__PURE__ */ s.jsx(pr, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const M = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", M);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: e.settings["gallery.view_mode"] === "grid_only" ? "Switch to Details View" : "Switch to Grid Only View",
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(Hp, { size: 14 }) : /* @__PURE__ */ s.jsx(cf, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  Y.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    v,
                    "to",
                    !v
                  ), x(!v);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: v ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ s.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ s.jsx(
                    Jp,
                    {
                      size: 14,
                      fill: v ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: v ? 1 : 0.8 }
                    }
                  ),
                  !v && _ && /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        top: "-2px",
                        right: "-2px",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--brand-yellow, #ffd700)",
                        boxShadow: "0 0 2px var(--comfy-menu-shadow, rgba(0,0,0,0.5))"
                      }
                    }
                  )
                ] })
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
                children: /* @__PURE__ */ s.jsx(el, { size: 14 })
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
                  nl,
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
                children: /* @__PURE__ */ s.jsx(uf, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(Uy, {}) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(yy, {}),
          e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
          l === "tags" ? /* @__PURE__ */ s.jsx(
            Vy,
            {
              onClose: () => a("gallery"),
              onSearch: (b) => {
                t({ type: "SET_SEARCH_QUERY", payload: b }), a("search");
              }
            }
          ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              },
              children: /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." })
            }
          ) : d.length === 0 ? /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              },
              children: /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." })
            }
          ) : /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ s.jsx(
                vv,
                {
                  visibleImages: d,
                  settings: e.settings,
                  loadMoreRef: y,
                  viewerImageId: e.viewerImageId,
                  isLoading: e.isLoading,
                  hasMore: e.pagination.hasMore
                }
              )
            }
          ),
          /* @__PURE__ */ s.jsx(rv, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(tv, {}),
        /* @__PURE__ */ s.jsx(gy, {}),
        k && /* @__PURE__ */ s.jsx(
          Fy,
          {
            anchorRect: u,
            onClose: () => f(!1),
            onSelect: S
          }
        ),
        /* @__PURE__ */ s.jsx(Ey, {})
      ]
    }
  );
};
Bc.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, a;
      const n = (l = e.widgets) == null ? void 0 : l.find((o) => o.name === "positive"), r = (a = e.widgets) == null ? void 0 : a.find((o) => o.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const xv = document.getElementById(
  "meld-gallery-style"
);
if (!xv) {
  const e = document.createElement("link");
  e.id = "meld-gallery-style", e.rel = "stylesheet", e.type = "text/css";
  try {
    e.href = new URL(
      /* @vite-ignore */
      "./style.css",
      import.meta.url
    ).toString();
  } catch {
    e.href = "/extensions/ComfyUI-Meld/js/style.css";
  }
  document.head.appendChild(e);
}
let Rl = null, it = null;
Bc.registerExtension({
  name: "ComfyUI.Meld",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const a = n.ui.meld;
        a != null && a.isVisible() && a.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    _y();
    try {
      const n = await pf();
      Y.init(n.dev_mode), Y.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), Y.init(!1);
    }
    if ((t = e.extensionManager) != null && t.registerSidebarTab) {
      e.ui.meld = {
        refresh: () => {
          window.dispatchEvent(new CustomEvent("meld-refresh"));
        },
        isVisible: () => {
          const n = document.getElementById("meld-gallery-container");
          return n && n.offsetParent !== null;
        },
        toggle: () => {
          var n;
          try {
            (n = e.extensionManager) == null || n.setSidebarTabActive("meld-gallery");
          } catch (r) {
            console.error("Error toggling sidebar:", r);
          }
        }
      }, ee.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), ee.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), ee.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), Y.log("Import completed.");
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
                  await hf({
                    filename: l.filename,
                    subfolder: l.subfolder,
                    type: l.type
                  });
                } catch (a) {
                  console.error("Failed to auto-register image:", a);
                }
          }
        }
      );
      try {
        e.extensionManager.registerSidebarTab({
          id: "meld-gallery",
          // NOTE: Use both the legacy mask-based icon and a PrimeIcons fallback.
          // - Web browsers typically render mask-image/data-URL icons correctly (legacy look).
          // - Some desktop WebViews (notably macOS desktop builds) may fail to render them reliably,
          //   so we keep PrimeIcons as a fallback.
          // The CSS decides which one is visible via @supports().
          icon: "meld-icon pi pi-images",
          title: "Meld",
          tooltip: "Meld Image Manager",
          type: "custom",
          render: (n) => {
            Y.log("render called", {
              el: n,
              galleryRoot: Rl,
              galleryContainer: it
            }), n.style.height = "100%", n.style.overflow = "hidden";
            let r = n.parentElement;
            for (; r && !r.classList.contains("sidebar-content-container"); )
              r.style.height = "100%", r.style.overflow = "hidden", r = r.parentElement;
            r && (r.style.overflow = "hidden"), it || (Y.log("galleryContainer not found, creating new one"), it = document.createElement("div"), it.id = "meld-gallery-container", it.style.height = "100%", it.style.width = "100%", it.style.display = "flex", it.style.flexDirection = "column", it.style.overflow = "hidden"), n.contains(it) || (Y.log("Appending galleryContainer to el"), n.appendChild(it)), Rl ? Y.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (Y.log("Creating new gallery root"), Rl = tf(it), Rl.render(
              Zt.createElement(
                Vg,
                null,
                Zt.createElement(wv)
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
