import { api as J } from "/scripts/api.js";
import { app as Vc } from "/scripts/app.js";
var Mw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function df(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bc = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr = Symbol.for("react.element"), uf = Symbol.for("react.portal"), mf = Symbol.for("react.fragment"), ff = Symbol.for("react.strict_mode"), pf = Symbol.for("react.profiler"), hf = Symbol.for("react.provider"), gf = Symbol.for("react.context"), yf = Symbol.for("react.forward_ref"), vf = Symbol.for("react.suspense"), wf = Symbol.for("react.memo"), xf = Symbol.for("react.lazy"), ci = Symbol.iterator;
function _f(e) {
  return e === null || typeof e != "object" ? null : (e = ci && e[ci] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Qc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Hc = Object.assign, Kc = {};
function rr(e, t, n) {
  this.props = e, this.context = t, this.refs = Kc, this.updater = n || Qc;
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
rr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gc() {
}
Gc.prototype = rr.prototype;
function ro(e, t, n) {
  this.props = e, this.context = t, this.refs = Kc, this.updater = n || Qc;
}
var lo = ro.prototype = new Gc();
lo.constructor = ro;
Hc(lo, rr.prototype);
lo.isPureReactComponent = !0;
var di = Array.isArray, qc = Object.prototype.hasOwnProperty, so = { current: null }, Yc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xc(e, t, n) {
  var r, s = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) qc.call(t, r) && !Yc.hasOwnProperty(r) && (s[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) s.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    s.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) s[r] === void 0 && (s[r] = i[r]);
  return { $$typeof: Jr, type: e, key: a, ref: o, props: s, _owner: so.current };
}
function kf(e, t) {
  return { $$typeof: Jr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ao(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jr;
}
function bf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ui = /\/+/g;
function Ts(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? bf("" + e.key) : t.toString(36);
}
function Cl(e, t, n, r, s) {
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
        case Jr:
        case uf:
          o = !0;
      }
  }
  if (o) return o = e, s = s(o), e = r === "" ? "." + Ts(o, 0) : r, di(s) ? (n = "", e != null && (n = e.replace(ui, "$&/") + "/"), Cl(s, t, n, "", function(d) {
    return d;
  })) : s != null && (ao(s) && (s = kf(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(ui, "$&/") + "/") + e)), t.push(s)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", di(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Ts(a, i);
    o += Cl(a, t, n, c, s);
  }
  else if (c = _f(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Ts(a, i++), o += Cl(a, t, n, c, s);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function al(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return Cl(e, r, "", "", function(a) {
    return t.call(n, a, s++);
  }), r;
}
function Sf(e) {
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
var We = { current: null }, El = { transition: null }, jf = { ReactCurrentDispatcher: We, ReactCurrentBatchConfig: El, ReactCurrentOwner: so };
function Zc() {
  throw Error("act(...) is not supported in production builds of React.");
}
le.Children = { map: al, forEach: function(e, t, n) {
  al(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return al(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return al(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ao(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
le.Component = rr;
le.Fragment = mf;
le.Profiler = pf;
le.PureComponent = ro;
le.StrictMode = ff;
le.Suspense = vf;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jf;
le.act = Zc;
le.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Hc({}, e.props), s = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = so.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) qc.call(t, c) && !Yc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: Jr, type: e.type, key: s, ref: a, props: r, _owner: o };
};
le.createContext = function(e) {
  return e = { $$typeof: gf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hf, _context: e }, e.Consumer = e;
};
le.createElement = Xc;
le.createFactory = function(e) {
  var t = Xc.bind(null, e);
  return t.type = e, t;
};
le.createRef = function() {
  return { current: null };
};
le.forwardRef = function(e) {
  return { $$typeof: yf, render: e };
};
le.isValidElement = ao;
le.lazy = function(e) {
  return { $$typeof: xf, _payload: { _status: -1, _result: e }, _init: Sf };
};
le.memo = function(e, t) {
  return { $$typeof: wf, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function(e) {
  var t = El.transition;
  El.transition = {};
  try {
    e();
  } finally {
    El.transition = t;
  }
};
le.unstable_act = Zc;
le.useCallback = function(e, t) {
  return We.current.useCallback(e, t);
};
le.useContext = function(e) {
  return We.current.useContext(e);
};
le.useDebugValue = function() {
};
le.useDeferredValue = function(e) {
  return We.current.useDeferredValue(e);
};
le.useEffect = function(e, t) {
  return We.current.useEffect(e, t);
};
le.useId = function() {
  return We.current.useId();
};
le.useImperativeHandle = function(e, t, n) {
  return We.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function(e, t) {
  return We.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function(e, t) {
  return We.current.useLayoutEffect(e, t);
};
le.useMemo = function(e, t) {
  return We.current.useMemo(e, t);
};
le.useReducer = function(e, t, n) {
  return We.current.useReducer(e, t, n);
};
le.useRef = function(e) {
  return We.current.useRef(e);
};
le.useState = function(e) {
  return We.current.useState(e);
};
le.useSyncExternalStore = function(e, t, n) {
  return We.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function() {
  return We.current.useTransition();
};
le.version = "18.3.1";
Bc.exports = le;
var f = Bc.exports;
const dt = /* @__PURE__ */ df(f);
var Jc = { exports: {} }, lt = {}, ed = { exports: {} }, td = {};
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
  function t(j, E) {
    var L = j.length;
    j.push(E);
    e: for (; 0 < L; ) {
      var O = L - 1 >>> 1, M = j[O];
      if (0 < s(M, E)) j[O] = E, j[L] = M, L = O;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var E = j[0], L = j.pop();
    if (L !== E) {
      j[0] = L;
      e: for (var O = 0, M = j.length, A = M >>> 1; O < A; ) {
        var P = 2 * (O + 1) - 1, W = j[P], H = P + 1, X = j[H];
        if (0 > s(W, L)) H < M && 0 > s(X, W) ? (j[O] = X, j[H] = L, O = H) : (j[O] = W, j[P] = L, O = P);
        else if (H < M && 0 > s(X, L)) j[O] = X, j[H] = L, O = H;
        else break e;
      }
    }
    return E;
  }
  function s(j, E) {
    var L = j.sortIndex - E.sortIndex;
    return L !== 0 ? L : j.id - E.id;
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
  var c = [], d = [], h = 1, v = null, y = 3, S = !1, _ = !1, x = !1, b = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function u(j) {
    for (var E = n(d); E !== null; ) {
      if (E.callback === null) r(d);
      else if (E.startTime <= j) r(d), E.sortIndex = E.expirationTime, t(c, E);
      else break;
      E = n(d);
    }
  }
  function g(j) {
    if (x = !1, u(j), !_) if (n(c) !== null) _ = !0, D(k);
    else {
      var E = n(d);
      E !== null && V(g, E.startTime - j);
    }
  }
  function k(j, E) {
    _ = !1, x && (x = !1, m(T), T = -1), S = !0;
    var L = y;
    try {
      for (u(E), v = n(c); v !== null && (!(v.expirationTime > E) || j && !R()); ) {
        var O = v.callback;
        if (typeof O == "function") {
          v.callback = null, y = v.priorityLevel;
          var M = O(v.expirationTime <= E);
          E = e.unstable_now(), typeof M == "function" ? v.callback = M : v === n(c) && r(c), u(E);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var A = !0;
      else {
        var P = n(d);
        P !== null && V(g, P.startTime - E), A = !1;
      }
      return A;
    } finally {
      v = null, y = L, S = !1;
    }
  }
  var w = !1, C = null, T = -1, z = 5, I = -1;
  function R() {
    return !(e.unstable_now() - I < z);
  }
  function U() {
    if (C !== null) {
      var j = e.unstable_now();
      I = j;
      var E = !0;
      try {
        E = C(!0, j);
      } finally {
        E ? B() : (w = !1, C = null);
      }
    } else w = !1;
  }
  var B;
  if (typeof p == "function") B = function() {
    p(U);
  };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(), F = N.port2;
    N.port1.onmessage = U, B = function() {
      F.postMessage(null);
    };
  } else B = function() {
    b(U, 0);
  };
  function D(j) {
    C = j, w || (w = !0, B());
  }
  function V(j, E) {
    T = b(function() {
      j(e.unstable_now());
    }, E);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    _ || S || (_ = !0, D(k));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(j) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var E = 3;
        break;
      default:
        E = y;
    }
    var L = y;
    y = E;
    try {
      return j();
    } finally {
      y = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, E) {
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
    var L = y;
    y = j;
    try {
      return E();
    } finally {
      y = L;
    }
  }, e.unstable_scheduleCallback = function(j, E, L) {
    var O = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? O + L : O) : L = O, j) {
      case 1:
        var M = -1;
        break;
      case 2:
        M = 250;
        break;
      case 5:
        M = 1073741823;
        break;
      case 4:
        M = 1e4;
        break;
      default:
        M = 5e3;
    }
    return M = L + M, j = { id: h++, callback: E, priorityLevel: j, startTime: L, expirationTime: M, sortIndex: -1 }, L > O ? (j.sortIndex = L, t(d, j), n(c) === null && j === n(d) && (x ? (m(T), T = -1) : x = !0, V(g, L - O))) : (j.sortIndex = M, t(c, j), _ || S || (_ = !0, D(k))), j;
  }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(j) {
    var E = y;
    return function() {
      var L = y;
      y = E;
      try {
        return j.apply(this, arguments);
      } finally {
        y = L;
      }
    };
  };
})(td);
ed.exports = td;
var Cf = ed.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ef = f, rt = Cf;
function Q(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var nd = /* @__PURE__ */ new Set(), Tr = {};
function jn(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) nd.add(t[e]);
}
var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ia = Object.prototype.hasOwnProperty, Nf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, mi = {}, fi = {};
function If(e) {
  return ia.call(fi, e) ? !0 : ia.call(mi, e) ? !1 : Nf.test(e) ? fi[e] = !0 : (mi[e] = !0, !1);
}
function Mf(e, t, n, r) {
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
function Tf(e, t, n, r) {
  if (t === null || typeof t > "u" || Mf(e, t, n, r)) return !0;
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
function Ue(e, t, n, r, s, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Le[e] = new Ue(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Le[t] = new Ue(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Le[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Le[e] = new Ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Le[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Le[e] = new Ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Le[e] = new Ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Le[e] = new Ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Le[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var oo = /[\-:]([a-z])/g;
function io(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    oo,
    io
  );
  Le[t] = new Ue(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(oo, io);
  Le[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(oo, io);
  Le[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Le[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new Ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Le[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function co(e, t, n, r) {
  var s = Le.hasOwnProperty(t) ? Le[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Tf(t, n, s, r) && (n = null), r || s === null ? If(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ol = Symbol.for("react.element"), In = Symbol.for("react.portal"), Mn = Symbol.for("react.fragment"), uo = Symbol.for("react.strict_mode"), ca = Symbol.for("react.profiler"), rd = Symbol.for("react.provider"), ld = Symbol.for("react.context"), mo = Symbol.for("react.forward_ref"), da = Symbol.for("react.suspense"), ua = Symbol.for("react.suspense_list"), fo = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), sd = Symbol.for("react.offscreen"), pi = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object" ? null : (e = pi && e[pi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var we = Object.assign, Ls;
function yr(e) {
  if (Ls === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ls = t && t[1] || "";
  }
  return `
` + Ls + e;
}
var As = !1;
function Ds(e, t) {
  if (!e || As) return "";
  As = !0;
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
      for (var s = d.stack.split(`
`), a = r.stack.split(`
`), o = s.length - 1, i = a.length - 1; 1 <= o && 0 <= i && s[o] !== a[i]; ) i--;
      for (; 1 <= o && 0 <= i; o--, i--) if (s[o] !== a[i]) {
        if (o !== 1 || i !== 1)
          do
            if (o--, i--, 0 > i || s[o] !== a[i]) {
              var c = `
` + s[o].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= o && 0 <= i);
        break;
      }
    }
  } finally {
    As = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function Lf(e) {
  switch (e.tag) {
    case 5:
      return yr(e.type);
    case 16:
      return yr("Lazy");
    case 13:
      return yr("Suspense");
    case 19:
      return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ds(e.type, !1), e;
    case 11:
      return e = Ds(e.type.render, !1), e;
    case 1:
      return e = Ds(e.type, !0), e;
    default:
      return "";
  }
}
function ma(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case In:
      return "Portal";
    case ca:
      return "Profiler";
    case uo:
      return "StrictMode";
    case da:
      return "Suspense";
    case ua:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ld:
      return (e.displayName || "Context") + ".Consumer";
    case rd:
      return (e._context.displayName || "Context") + ".Provider";
    case mo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case fo:
      return t = e.displayName || null, t !== null ? t : ma(e.type) || "Memo";
    case Qt:
      t = e._payload, e = e._init;
      try {
        return ma(e(t));
      } catch {
      }
  }
  return null;
}
function Af(e) {
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
      return ma(t);
    case 8:
      return t === uo ? "StrictMode" : "Mode";
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
function sn(e) {
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
function ad(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Df(e) {
  var t = ad(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var s = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return s.call(this);
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
function il(e) {
  e._valueTracker || (e._valueTracker = Df(e));
}
function od(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ad(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Wl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fa(e, t) {
  var n = t.checked;
  return we({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function hi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = sn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function id(e, t) {
  t = t.checked, t != null && co(e, "checked", t, !1);
}
function pa(e, t) {
  id(e, t);
  var n = sn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ha(e, t.type, n) : t.hasOwnProperty("defaultValue") && ha(e, t.type, sn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function gi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ha(e, t, n) {
  (t !== "number" || Wl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function Wn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function ga(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(Q(91));
  return we({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function yi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(Q(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(Q(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: sn(n) };
}
function cd(e, t) {
  var n = sn(t.value), r = sn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function vi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function dd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ya(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? dd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var cl, ud = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (cl = cl || document.createElement("div"), cl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = cl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _r = {
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
}, Rf = ["Webkit", "ms", "Moz", "O"];
Object.keys(_r).forEach(function(e) {
  Rf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), _r[t] = _r[e];
  });
});
function md(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || _r.hasOwnProperty(e) && _r[e] ? ("" + t).trim() : t + "px";
}
function fd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = md(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var Pf = we({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function va(e, t) {
  if (t) {
    if (Pf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(Q(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(Q(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(Q(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(Q(62));
  }
}
function wa(e, t) {
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
var xa = null;
function po(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var _a = null, Un = null, Vn = null;
function wi(e) {
  if (e = nl(e)) {
    if (typeof _a != "function") throw Error(Q(280));
    var t = e.stateNode;
    t && (t = gs(t), _a(e.stateNode, e.type, t));
  }
}
function pd(e) {
  Un ? Vn ? Vn.push(e) : Vn = [e] : Un = e;
}
function hd() {
  if (Un) {
    var e = Un, t = Vn;
    if (Vn = Un = null, wi(e), t) for (e = 0; e < t.length; e++) wi(t[e]);
  }
}
function gd(e, t) {
  return e(t);
}
function yd() {
}
var Rs = !1;
function vd(e, t, n) {
  if (Rs) return e(t, n);
  Rs = !0;
  try {
    return gd(e, t, n);
  } finally {
    Rs = !1, (Un !== null || Vn !== null) && (yd(), hd());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = gs(n);
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
  if (n && typeof n != "function") throw Error(Q(231, t, typeof n));
  return n;
}
var ka = !1;
if (Ot) try {
  var cr = {};
  Object.defineProperty(cr, "passive", { get: function() {
    ka = !0;
  } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
} catch {
  ka = !1;
}
function Of(e, t, n, r, s, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var kr = !1, Ul = null, Vl = !1, ba = null, zf = { onError: function(e) {
  kr = !0, Ul = e;
} };
function Ff(e, t, n, r, s, a, o, i, c) {
  kr = !1, Ul = null, Of.apply(zf, arguments);
}
function $f(e, t, n, r, s, a, o, i, c) {
  if (Ff.apply(this, arguments), kr) {
    if (kr) {
      var d = Ul;
      kr = !1, Ul = null;
    } else throw Error(Q(198));
    Vl || (Vl = !0, ba = d);
  }
}
function Cn(e) {
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
function wd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xi(e) {
  if (Cn(e) !== e) throw Error(Q(188));
}
function Wf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Cn(e), t === null) throw Error(Q(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var a = s.alternate;
    if (a === null) {
      if (r = s.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === a.child) {
      for (a = s.child; a; ) {
        if (a === n) return xi(s), e;
        if (a === r) return xi(s), t;
        a = a.sibling;
      }
      throw Error(Q(188));
    }
    if (n.return !== r.return) n = s, r = a;
    else {
      for (var o = !1, i = s.child; i; ) {
        if (i === n) {
          o = !0, n = s, r = a;
          break;
        }
        if (i === r) {
          o = !0, r = s, n = a;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = a.child; i; ) {
          if (i === n) {
            o = !0, n = a, r = s;
            break;
          }
          if (i === r) {
            o = !0, r = a, n = s;
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(Q(189));
      }
    }
    if (n.alternate !== r) throw Error(Q(190));
  }
  if (n.tag !== 3) throw Error(Q(188));
  return n.stateNode.current === n ? e : t;
}
function xd(e) {
  return e = Wf(e), e !== null ? _d(e) : null;
}
function _d(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _d(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var kd = rt.unstable_scheduleCallback, _i = rt.unstable_cancelCallback, Uf = rt.unstable_shouldYield, Vf = rt.unstable_requestPaint, _e = rt.unstable_now, Bf = rt.unstable_getCurrentPriorityLevel, ho = rt.unstable_ImmediatePriority, bd = rt.unstable_UserBlockingPriority, Bl = rt.unstable_NormalPriority, Qf = rt.unstable_LowPriority, Sd = rt.unstable_IdlePriority, ms = null, It = null;
function Hf(e) {
  if (It && typeof It.onCommitFiberRoot == "function") try {
    It.onCommitFiberRoot(ms, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var kt = Math.clz32 ? Math.clz32 : qf, Kf = Math.log, Gf = Math.LN2;
function qf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Kf(e) / Gf | 0) | 0;
}
var dl = 64, ul = 4194304;
function wr(e) {
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
function Ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, s = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~s;
    i !== 0 ? r = wr(i) : (a &= o, a !== 0 && (r = wr(a)));
  } else o = n & ~s, o !== 0 ? r = wr(o) : a !== 0 && (r = wr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - kt(t), s = 1 << n, r |= e[n], t &= ~s;
  return r;
}
function Yf(e, t) {
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
function Xf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - kt(a), i = 1 << o, c = s[o];
    c === -1 ? (!(i & n) || i & r) && (s[o] = Yf(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Sa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function jd() {
  var e = dl;
  return dl <<= 1, !(dl & 4194240) && (dl = 64), e;
}
function Ps(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function el(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
}
function Zf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - kt(n), a = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
  }
}
function go(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var oe = 0;
function Cd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ed, yo, Nd, Id, Md, ja = !1, ml = [], Xt = null, Zt = null, Jt = null, Dr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), Kt = [], Jf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ki(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rr.delete(t.pointerId);
  }
}
function dr(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = nl(t), t !== null && yo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function ep(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return Xt = dr(Xt, e, t, n, r, s), !0;
    case "dragenter":
      return Zt = dr(Zt, e, t, n, r, s), !0;
    case "mouseover":
      return Jt = dr(Jt, e, t, n, r, s), !0;
    case "pointerover":
      var a = s.pointerId;
      return Dr.set(a, dr(Dr.get(a) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return a = s.pointerId, Rr.set(a, dr(Rr.get(a) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function Td(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = wd(n), t !== null) {
          e.blockedOn = t, Md(e.priority, function() {
            Nd(n);
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
function Nl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      xa = r, n.target.dispatchEvent(r), xa = null;
    } else return t = nl(n), t !== null && yo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function bi(e, t, n) {
  Nl(e) && n.delete(t);
}
function tp() {
  ja = !1, Xt !== null && Nl(Xt) && (Xt = null), Zt !== null && Nl(Zt) && (Zt = null), Jt !== null && Nl(Jt) && (Jt = null), Dr.forEach(bi), Rr.forEach(bi);
}
function ur(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ja || (ja = !0, rt.unstable_scheduleCallback(rt.unstable_NormalPriority, tp)));
}
function Pr(e) {
  function t(s) {
    return ur(s, e);
  }
  if (0 < ml.length) {
    ur(ml[0], e);
    for (var n = 1; n < ml.length; n++) {
      var r = ml[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Xt !== null && ur(Xt, e), Zt !== null && ur(Zt, e), Jt !== null && ur(Jt, e), Dr.forEach(t), Rr.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) Td(n), n.blockedOn === null && Kt.shift();
}
var Bn = Ut.ReactCurrentBatchConfig, Hl = !0;
function np(e, t, n, r) {
  var s = oe, a = Bn.transition;
  Bn.transition = null;
  try {
    oe = 1, vo(e, t, n, r);
  } finally {
    oe = s, Bn.transition = a;
  }
}
function rp(e, t, n, r) {
  var s = oe, a = Bn.transition;
  Bn.transition = null;
  try {
    oe = 4, vo(e, t, n, r);
  } finally {
    oe = s, Bn.transition = a;
  }
}
function vo(e, t, n, r) {
  if (Hl) {
    var s = Ca(e, t, n, r);
    if (s === null) Hs(e, t, r, Kl, n), ki(e, r);
    else if (ep(s, e, t, n, r)) r.stopPropagation();
    else if (ki(e, r), t & 4 && -1 < Jf.indexOf(e)) {
      for (; s !== null; ) {
        var a = nl(s);
        if (a !== null && Ed(a), a = Ca(e, t, n, r), a === null && Hs(e, t, r, Kl, n), a === s) break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else Hs(e, t, r, null, n);
  }
}
var Kl = null;
function Ca(e, t, n, r) {
  if (Kl = null, e = po(r), e = pn(e), e !== null) if (t = Cn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = wd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Kl = e, null;
}
function Ld(e) {
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
      switch (Bf()) {
        case ho:
          return 1;
        case bd:
          return 4;
        case Bl:
        case Qf:
          return 16;
        case Sd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null, wo = null, Il = null;
function Ad() {
  if (Il) return Il;
  var e, t = wo, n = t.length, r, s = "value" in qt ? qt.value : qt.textContent, a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[a - r]; r++) ;
  return Il = s.slice(e, 1 < r ? 1 - r : void 0);
}
function Ml(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function fl() {
  return !0;
}
function Si() {
  return !1;
}
function st(e) {
  function t(n, r, s, a, o) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? fl : Si, this.isPropagationStopped = Si, this;
  }
  return we(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = fl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = fl);
  }, persist: function() {
  }, isPersistent: fl }), t;
}
var lr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, xo = st(lr), tl = we({}, lr, { view: 0, detail: 0 }), lp = st(tl), Os, zs, mr, fs = we({}, tl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _o, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== mr && (mr && e.type === "mousemove" ? (Os = e.screenX - mr.screenX, zs = e.screenY - mr.screenY) : zs = Os = 0, mr = e), Os);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : zs;
} }), ji = st(fs), sp = we({}, fs, { dataTransfer: 0 }), ap = st(sp), op = we({}, tl, { relatedTarget: 0 }), Fs = st(op), ip = we({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cp = st(ip), dp = we({}, lr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), up = st(dp), mp = we({}, lr, { data: 0 }), Ci = st(mp), fp = {
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
}, pp = {
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
}, hp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function gp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hp[e]) ? !!t[e] : !1;
}
function _o() {
  return gp;
}
var yp = we({}, tl, { key: function(e) {
  if (e.key) {
    var t = fp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ml(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _o, charCode: function(e) {
  return e.type === "keypress" ? Ml(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ml(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), vp = st(yp), wp = we({}, fs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ei = st(wp), xp = we({}, tl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _o }), _p = st(xp), kp = we({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bp = st(kp), Sp = we({}, fs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), jp = st(Sp), Cp = [9, 13, 27, 32], ko = Ot && "CompositionEvent" in window, br = null;
Ot && "documentMode" in document && (br = document.documentMode);
var Ep = Ot && "TextEvent" in window && !br, Dd = Ot && (!ko || br && 8 < br && 11 >= br), Ni = " ", Ii = !1;
function Rd(e, t) {
  switch (e) {
    case "keyup":
      return Cp.indexOf(t.keyCode) !== -1;
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
function Pd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function Np(e, t) {
  switch (e) {
    case "compositionend":
      return Pd(t);
    case "keypress":
      return t.which !== 32 ? null : (Ii = !0, Ni);
    case "textInput":
      return e = t.data, e === Ni && Ii ? null : e;
    default:
      return null;
  }
}
function Ip(e, t) {
  if (Tn) return e === "compositionend" || !ko && Rd(e, t) ? (e = Ad(), Il = wo = qt = null, Tn = !1, e) : null;
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
      return Dd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Mi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mp[e.type] : t === "textarea";
}
function Od(e, t, n, r) {
  pd(r), t = Gl(t, "onChange"), 0 < t.length && (n = new xo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Sr = null, Or = null;
function Tp(e) {
  Gd(e, 0);
}
function ps(e) {
  var t = Dn(e);
  if (od(t)) return e;
}
function Lp(e, t) {
  if (e === "change") return t;
}
var zd = !1;
if (Ot) {
  var $s;
  if (Ot) {
    var Ws = "oninput" in document;
    if (!Ws) {
      var Ti = document.createElement("div");
      Ti.setAttribute("oninput", "return;"), Ws = typeof Ti.oninput == "function";
    }
    $s = Ws;
  } else $s = !1;
  zd = $s && (!document.documentMode || 9 < document.documentMode);
}
function Li() {
  Sr && (Sr.detachEvent("onpropertychange", Fd), Or = Sr = null);
}
function Fd(e) {
  if (e.propertyName === "value" && ps(Or)) {
    var t = [];
    Od(t, Or, e, po(e)), vd(Tp, t);
  }
}
function Ap(e, t, n) {
  e === "focusin" ? (Li(), Sr = t, Or = n, Sr.attachEvent("onpropertychange", Fd)) : e === "focusout" && Li();
}
function Dp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ps(Or);
}
function Rp(e, t) {
  if (e === "click") return ps(t);
}
function Pp(e, t) {
  if (e === "input" || e === "change") return ps(t);
}
function Op(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var St = typeof Object.is == "function" ? Object.is : Op;
function zr(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!ia.call(t, s) || !St(e[s], t[s])) return !1;
  }
  return !0;
}
function Ai(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Di(e, t) {
  var n = Ai(e);
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
    n = Ai(n);
  }
}
function $d(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $d(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Wd() {
  for (var e = window, t = Wl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wl(e.document);
  }
  return t;
}
function bo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function zp(e) {
  var t = Wd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && $d(n.ownerDocument.documentElement, n)) {
    if (r !== null && bo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, a = Math.min(r.start, s);
        r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = Di(n, a);
        var o = Di(
          n,
          r
        );
        s && o && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Fp = Ot && "documentMode" in document && 11 >= document.documentMode, Ln = null, Ea = null, jr = null, Na = !1;
function Ri(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Na || Ln == null || Ln !== Wl(r) || (r = Ln, "selectionStart" in r && bo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), jr && zr(jr, r) || (jr = r, r = Gl(Ea, "onSelect"), 0 < r.length && (t = new xo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ln)));
}
function pl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var An = { animationend: pl("Animation", "AnimationEnd"), animationiteration: pl("Animation", "AnimationIteration"), animationstart: pl("Animation", "AnimationStart"), transitionend: pl("Transition", "TransitionEnd") }, Us = {}, Ud = {};
Ot && (Ud = document.createElement("div").style, "AnimationEvent" in window || (delete An.animationend.animation, delete An.animationiteration.animation, delete An.animationstart.animation), "TransitionEvent" in window || delete An.transitionend.transition);
function hs(e) {
  if (Us[e]) return Us[e];
  if (!An[e]) return e;
  var t = An[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ud) return Us[e] = t[n];
  return e;
}
var Vd = hs("animationend"), Bd = hs("animationiteration"), Qd = hs("animationstart"), Hd = hs("transitionend"), Kd = /* @__PURE__ */ new Map(), Pi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(e, t) {
  Kd.set(e, t), jn(t, [e]);
}
for (var Vs = 0; Vs < Pi.length; Vs++) {
  var Bs = Pi[Vs], $p = Bs.toLowerCase(), Wp = Bs[0].toUpperCase() + Bs.slice(1);
  cn($p, "on" + Wp);
}
cn(Vd, "onAnimationEnd");
cn(Bd, "onAnimationIteration");
cn(Qd, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Hd, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Up = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function Oi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, $f(r, t, void 0, e), e.currentTarget = null;
}
function Gd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && s.isPropagationStopped()) break e;
        Oi(s, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && s.isPropagationStopped()) break e;
        Oi(s, i, d), a = c;
      }
    }
  }
  if (Vl) throw e = ba, Vl = !1, ba = null, e;
}
function pe(e, t) {
  var n = t[Aa];
  n === void 0 && (n = t[Aa] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (qd(t, e, 2, !1), n.add(r));
}
function Qs(e, t, n) {
  var r = 0;
  t && (r |= 4), qd(n, e, r, t);
}
var hl = "_reactListening" + Math.random().toString(36).slice(2);
function Fr(e) {
  if (!e[hl]) {
    e[hl] = !0, nd.forEach(function(n) {
      n !== "selectionchange" && (Up.has(n) || Qs(n, !1, e), Qs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hl] || (t[hl] = !0, Qs("selectionchange", !1, t));
  }
}
function qd(e, t, n, r) {
  switch (Ld(t)) {
    case 1:
      var s = np;
      break;
    case 4:
      s = rp;
      break;
    default:
      s = vo;
  }
  n = s.bind(null, t, n, e), s = void 0, !ka || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function Hs(e, t, n, r, s) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var i = r.stateNode.containerInfo;
      if (i === s || i.nodeType === 8 && i.parentNode === s) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var c = o.tag;
        if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === s || c.nodeType === 8 && c.parentNode === s)) return;
        o = o.return;
      }
      for (; i !== null; ) {
        if (o = pn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  vd(function() {
    var d = a, h = po(n), v = [];
    e: {
      var y = Kd.get(e);
      if (y !== void 0) {
        var S = xo, _ = e;
        switch (e) {
          case "keypress":
            if (Ml(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = vp;
            break;
          case "focusin":
            _ = "focus", S = Fs;
            break;
          case "focusout":
            _ = "blur", S = Fs;
            break;
          case "beforeblur":
          case "afterblur":
            S = Fs;
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
            S = ji;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = ap;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = _p;
            break;
          case Vd:
          case Bd:
          case Qd:
            S = cp;
            break;
          case Hd:
            S = bp;
            break;
          case "scroll":
            S = lp;
            break;
          case "wheel":
            S = jp;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = up;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Ei;
        }
        var x = (t & 4) !== 0, b = !x && e === "scroll", m = x ? y !== null ? y + "Capture" : null : y;
        x = [];
        for (var p = d, u; p !== null; ) {
          u = p;
          var g = u.stateNode;
          if (u.tag === 5 && g !== null && (u = g, m !== null && (g = Ar(p, m), g != null && x.push($r(p, g, u)))), b) break;
          p = p.return;
        }
        0 < x.length && (y = new S(y, _, null, n, h), v.push({ event: y, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", y && n !== xa && (_ = n.relatedTarget || n.fromElement) && (pn(_) || _[zt])) break e;
        if ((S || y) && (y = h.window === h ? h : (y = h.ownerDocument) ? y.defaultView || y.parentWindow : window, S ? (_ = n.relatedTarget || n.toElement, S = d, _ = _ ? pn(_) : null, _ !== null && (b = Cn(_), _ !== b || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (S = null, _ = d), S !== _)) {
          if (x = ji, g = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (x = Ei, g = "onPointerLeave", m = "onPointerEnter", p = "pointer"), b = S == null ? y : Dn(S), u = _ == null ? y : Dn(_), y = new x(g, p + "leave", S, n, h), y.target = b, y.relatedTarget = u, g = null, pn(h) === d && (x = new x(m, p + "enter", _, n, h), x.target = u, x.relatedTarget = b, g = x), b = g, S && _) t: {
            for (x = S, m = _, p = 0, u = x; u; u = En(u)) p++;
            for (u = 0, g = m; g; g = En(g)) u++;
            for (; 0 < p - u; ) x = En(x), p--;
            for (; 0 < u - p; ) m = En(m), u--;
            for (; p--; ) {
              if (x === m || m !== null && x === m.alternate) break t;
              x = En(x), m = En(m);
            }
            x = null;
          }
          else x = null;
          S !== null && zi(v, y, S, x, !1), _ !== null && b !== null && zi(v, b, _, x, !0);
        }
      }
      e: {
        if (y = d ? Dn(d) : window, S = y.nodeName && y.nodeName.toLowerCase(), S === "select" || S === "input" && y.type === "file") var k = Lp;
        else if (Mi(y)) if (zd) k = Pp;
        else {
          k = Dp;
          var w = Ap;
        }
        else (S = y.nodeName) && S.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (k = Rp);
        if (k && (k = k(e, d))) {
          Od(v, k, n, h);
          break e;
        }
        w && w(e, y, d), e === "focusout" && (w = y._wrapperState) && w.controlled && y.type === "number" && ha(y, "number", y.value);
      }
      switch (w = d ? Dn(d) : window, e) {
        case "focusin":
          (Mi(w) || w.contentEditable === "true") && (Ln = w, Ea = d, jr = null);
          break;
        case "focusout":
          jr = Ea = Ln = null;
          break;
        case "mousedown":
          Na = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Na = !1, Ri(v, n, h);
          break;
        case "selectionchange":
          if (Fp) break;
        case "keydown":
        case "keyup":
          Ri(v, n, h);
      }
      var C;
      if (ko) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Tn ? Rd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Dd && n.locale !== "ko" && (Tn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Tn && (C = Ad()) : (qt = h, wo = "value" in qt ? qt.value : qt.textContent, Tn = !0)), w = Gl(d, T), 0 < w.length && (T = new Ci(T, e, null, n, h), v.push({ event: T, listeners: w }), C ? T.data = C : (C = Pd(n), C !== null && (T.data = C)))), (C = Ep ? Np(e, n) : Ip(e, n)) && (d = Gl(d, "onBeforeInput"), 0 < d.length && (h = new Ci("onBeforeInput", "beforeinput", null, n, h), v.push({ event: h, listeners: d }), h.data = C));
    }
    Gd(v, t);
  });
}
function $r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e, a = s.stateNode;
    s.tag === 5 && a !== null && (s = a, a = Ar(e, n), a != null && r.unshift($r(e, a, s)), a = Ar(e, t), a != null && r.push($r(e, a, s))), e = e.return;
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function zi(e, t, n, r, s) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, s ? (c = Ar(n, a), c != null && o.unshift($r(n, c, i))) : s || (c = Ar(n, a), c != null && o.push($r(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Vp = /\r\n?/g, Bp = /\u0000|\uFFFD/g;
function Fi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Vp, `
`).replace(Bp, "");
}
function gl(e, t, n) {
  if (t = Fi(t), Fi(e) !== t && n) throw Error(Q(425));
}
function ql() {
}
var Ia = null, Ma = null;
function Ta(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var La = typeof setTimeout == "function" ? setTimeout : void 0, Qp = typeof clearTimeout == "function" ? clearTimeout : void 0, $i = typeof Promise == "function" ? Promise : void 0, Hp = typeof queueMicrotask == "function" ? queueMicrotask : typeof $i < "u" ? function(e) {
  return $i.resolve(null).then(e).catch(Kp);
} : La;
function Kp(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ks(e, t) {
  var n = t, r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (r === 0) {
        e.removeChild(s), Pr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  Pr(t);
}
function en(e) {
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
function Wi(e) {
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
var sr = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + sr, Wr = "__reactProps$" + sr, zt = "__reactContainer$" + sr, Aa = "__reactEvents$" + sr, Gp = "__reactListeners$" + sr, qp = "__reactHandles$" + sr;
function pn(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zt] || n[Nt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Wi(e); e !== null; ) {
        if (n = e[Nt]) return n;
        e = Wi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function nl(e) {
  return e = e[Nt] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(Q(33));
}
function gs(e) {
  return e[Wr] || null;
}
var Da = [], Rn = -1;
function dn(e) {
  return { current: e };
}
function he(e) {
  0 > Rn || (e.current = Da[Rn], Da[Rn] = null, Rn--);
}
function me(e, t) {
  Rn++, Da[Rn] = e.current, e.current = t;
}
var an = {}, ze = dn(an), Ye = dn(!1), xn = an;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, a;
  for (a in n) s[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function Xe(e) {
  return e = e.childContextTypes, e != null;
}
function Yl() {
  he(Ye), he(ze);
}
function Ui(e, t, n) {
  if (ze.current !== an) throw Error(Q(168));
  me(ze, t), me(Ye, n);
}
function Yd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(Q(108, Af(e) || "Unknown", s));
  return we({}, n, r);
}
function Xl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, xn = ze.current, me(ze, e), me(Ye, Ye.current), !0;
}
function Vi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(Q(169));
  n ? (e = Yd(e, t, xn), r.__reactInternalMemoizedMergedChildContext = e, he(Ye), he(ze), me(ze, e)) : he(Ye), me(Ye, n);
}
var At = null, ys = !1, Gs = !1;
function Xd(e) {
  At === null ? At = [e] : At.push(e);
}
function Yp(e) {
  ys = !0, Xd(e);
}
function un() {
  if (!Gs && At !== null) {
    Gs = !0;
    var e = 0, t = oe;
    try {
      var n = At;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      At = null, ys = !1;
    } catch (s) {
      throw At !== null && (At = At.slice(e + 1)), kd(ho, un), s;
    } finally {
      oe = t, Gs = !1;
    }
  }
  return null;
}
var Pn = [], On = 0, Zl = null, Jl = 0, it = [], ct = 0, _n = null, Dt = 1, Rt = "";
function mn(e, t) {
  Pn[On++] = Jl, Pn[On++] = Zl, Zl = e, Jl = t;
}
function Zd(e, t, n) {
  it[ct++] = Dt, it[ct++] = Rt, it[ct++] = _n, _n = e;
  var r = Dt;
  e = Rt;
  var s = 32 - kt(r) - 1;
  r &= ~(1 << s), n += 1;
  var a = 32 - kt(t) + s;
  if (30 < a) {
    var o = s - s % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, s -= o, Dt = 1 << 32 - kt(t) + s | n << s | r, Rt = a + e;
  } else Dt = 1 << a | n << s | r, Rt = e;
}
function So(e) {
  e.return !== null && (mn(e, 1), Zd(e, 1, 0));
}
function jo(e) {
  for (; e === Zl; ) Zl = Pn[--On], Pn[On] = null, Jl = Pn[--On], Pn[On] = null;
  for (; e === _n; ) _n = it[--ct], it[ct] = null, Rt = it[--ct], it[ct] = null, Dt = it[--ct], it[ct] = null;
}
var nt = null, tt = null, ge = !1, xt = null;
function Jd(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Bi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, nt = e, tt = en(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, nt = e, tt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _n !== null ? { id: Dt, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, nt = e, tt = null, !0) : !1;
    default:
      return !1;
  }
}
function Ra(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pa(e) {
  if (ge) {
    var t = tt;
    if (t) {
      var n = t;
      if (!Bi(e, t)) {
        if (Ra(e)) throw Error(Q(418));
        t = en(n.nextSibling);
        var r = nt;
        t && Bi(e, t) ? Jd(r, n) : (e.flags = e.flags & -4097 | 2, ge = !1, nt = e);
      }
    } else {
      if (Ra(e)) throw Error(Q(418));
      e.flags = e.flags & -4097 | 2, ge = !1, nt = e;
    }
  }
}
function Qi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  nt = e;
}
function yl(e) {
  if (e !== nt) return !1;
  if (!ge) return Qi(e), ge = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ta(e.type, e.memoizedProps)), t && (t = tt)) {
    if (Ra(e)) throw eu(), Error(Q(418));
    for (; t; ) Jd(e, t), t = en(t.nextSibling);
  }
  if (Qi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(Q(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              tt = en(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      tt = null;
    }
  } else tt = nt ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function eu() {
  for (var e = tt; e; ) e = en(e.nextSibling);
}
function Yn() {
  tt = nt = null, ge = !1;
}
function Co(e) {
  xt === null ? xt = [e] : xt.push(e);
}
var Xp = Ut.ReactCurrentBatchConfig;
function fr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(Q(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(Q(147, e));
      var s = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = s.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(Q(284));
    if (!n._owner) throw Error(Q(290, e));
  }
  return e;
}
function vl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(Q(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hi(e) {
  var t = e._init;
  return t(e._payload);
}
function tu(e) {
  function t(m, p) {
    if (e) {
      var u = m.deletions;
      u === null ? (m.deletions = [p], m.flags |= 16) : u.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), p = p.sibling;
    return null;
  }
  function r(m, p) {
    for (m = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
    return m;
  }
  function s(m, p) {
    return m = ln(m, p), m.index = 0, m.sibling = null, m;
  }
  function a(m, p, u) {
    return m.index = u, e ? (u = m.alternate, u !== null ? (u = u.index, u < p ? (m.flags |= 2, p) : u) : (m.flags |= 2, p)) : (m.flags |= 1048576, p);
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function i(m, p, u, g) {
    return p === null || p.tag !== 6 ? (p = ta(u, m.mode, g), p.return = m, p) : (p = s(p, u), p.return = m, p);
  }
  function c(m, p, u, g) {
    var k = u.type;
    return k === Mn ? h(m, p, u.props.children, g, u.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Qt && Hi(k) === p.type) ? (g = s(p, u.props), g.ref = fr(m, p, u), g.return = m, g) : (g = Ol(u.type, u.key, u.props, null, m.mode, g), g.ref = fr(m, p, u), g.return = m, g);
  }
  function d(m, p, u, g) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== u.containerInfo || p.stateNode.implementation !== u.implementation ? (p = na(u, m.mode, g), p.return = m, p) : (p = s(p, u.children || []), p.return = m, p);
  }
  function h(m, p, u, g, k) {
    return p === null || p.tag !== 7 ? (p = wn(u, m.mode, g, k), p.return = m, p) : (p = s(p, u), p.return = m, p);
  }
  function v(m, p, u) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = ta("" + p, m.mode, u), p.return = m, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ol:
          return u = Ol(p.type, p.key, p.props, null, m.mode, u), u.ref = fr(m, null, p), u.return = m, u;
        case In:
          return p = na(p, m.mode, u), p.return = m, p;
        case Qt:
          var g = p._init;
          return v(m, g(p._payload), u);
      }
      if (vr(p) || ir(p)) return p = wn(p, m.mode, u, null), p.return = m, p;
      vl(m, p);
    }
    return null;
  }
  function y(m, p, u, g) {
    var k = p !== null ? p.key : null;
    if (typeof u == "string" && u !== "" || typeof u == "number") return k !== null ? null : i(m, p, "" + u, g);
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case ol:
          return u.key === k ? c(m, p, u, g) : null;
        case In:
          return u.key === k ? d(m, p, u, g) : null;
        case Qt:
          return k = u._init, y(
            m,
            p,
            k(u._payload),
            g
          );
      }
      if (vr(u) || ir(u)) return k !== null ? null : h(m, p, u, g, null);
      vl(m, u);
    }
    return null;
  }
  function S(m, p, u, g, k) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return m = m.get(u) || null, i(p, m, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ol:
          return m = m.get(g.key === null ? u : g.key) || null, c(p, m, g, k);
        case In:
          return m = m.get(g.key === null ? u : g.key) || null, d(p, m, g, k);
        case Qt:
          var w = g._init;
          return S(m, p, u, w(g._payload), k);
      }
      if (vr(g) || ir(g)) return m = m.get(u) || null, h(p, m, g, k, null);
      vl(p, g);
    }
    return null;
  }
  function _(m, p, u, g) {
    for (var k = null, w = null, C = p, T = p = 0, z = null; C !== null && T < u.length; T++) {
      C.index > T ? (z = C, C = null) : z = C.sibling;
      var I = y(m, C, u[T], g);
      if (I === null) {
        C === null && (C = z);
        break;
      }
      e && C && I.alternate === null && t(m, C), p = a(I, p, T), w === null ? k = I : w.sibling = I, w = I, C = z;
    }
    if (T === u.length) return n(m, C), ge && mn(m, T), k;
    if (C === null) {
      for (; T < u.length; T++) C = v(m, u[T], g), C !== null && (p = a(C, p, T), w === null ? k = C : w.sibling = C, w = C);
      return ge && mn(m, T), k;
    }
    for (C = r(m, C); T < u.length; T++) z = S(C, m, T, u[T], g), z !== null && (e && z.alternate !== null && C.delete(z.key === null ? T : z.key), p = a(z, p, T), w === null ? k = z : w.sibling = z, w = z);
    return e && C.forEach(function(R) {
      return t(m, R);
    }), ge && mn(m, T), k;
  }
  function x(m, p, u, g) {
    var k = ir(u);
    if (typeof k != "function") throw Error(Q(150));
    if (u = k.call(u), u == null) throw Error(Q(151));
    for (var w = k = null, C = p, T = p = 0, z = null, I = u.next(); C !== null && !I.done; T++, I = u.next()) {
      C.index > T ? (z = C, C = null) : z = C.sibling;
      var R = y(m, C, I.value, g);
      if (R === null) {
        C === null && (C = z);
        break;
      }
      e && C && R.alternate === null && t(m, C), p = a(R, p, T), w === null ? k = R : w.sibling = R, w = R, C = z;
    }
    if (I.done) return n(
      m,
      C
    ), ge && mn(m, T), k;
    if (C === null) {
      for (; !I.done; T++, I = u.next()) I = v(m, I.value, g), I !== null && (p = a(I, p, T), w === null ? k = I : w.sibling = I, w = I);
      return ge && mn(m, T), k;
    }
    for (C = r(m, C); !I.done; T++, I = u.next()) I = S(C, m, T, I.value, g), I !== null && (e && I.alternate !== null && C.delete(I.key === null ? T : I.key), p = a(I, p, T), w === null ? k = I : w.sibling = I, w = I);
    return e && C.forEach(function(U) {
      return t(m, U);
    }), ge && mn(m, T), k;
  }
  function b(m, p, u, g) {
    if (typeof u == "object" && u !== null && u.type === Mn && u.key === null && (u = u.props.children), typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case ol:
          e: {
            for (var k = u.key, w = p; w !== null; ) {
              if (w.key === k) {
                if (k = u.type, k === Mn) {
                  if (w.tag === 7) {
                    n(m, w.sibling), p = s(w, u.props.children), p.return = m, m = p;
                    break e;
                  }
                } else if (w.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Qt && Hi(k) === w.type) {
                  n(m, w.sibling), p = s(w, u.props), p.ref = fr(m, w, u), p.return = m, m = p;
                  break e;
                }
                n(m, w);
                break;
              } else t(m, w);
              w = w.sibling;
            }
            u.type === Mn ? (p = wn(u.props.children, m.mode, g, u.key), p.return = m, m = p) : (g = Ol(u.type, u.key, u.props, null, m.mode, g), g.ref = fr(m, p, u), g.return = m, m = g);
          }
          return o(m);
        case In:
          e: {
            for (w = u.key; p !== null; ) {
              if (p.key === w) if (p.tag === 4 && p.stateNode.containerInfo === u.containerInfo && p.stateNode.implementation === u.implementation) {
                n(m, p.sibling), p = s(p, u.children || []), p.return = m, m = p;
                break e;
              } else {
                n(m, p);
                break;
              }
              else t(m, p);
              p = p.sibling;
            }
            p = na(u, m.mode, g), p.return = m, m = p;
          }
          return o(m);
        case Qt:
          return w = u._init, b(m, p, w(u._payload), g);
      }
      if (vr(u)) return _(m, p, u, g);
      if (ir(u)) return x(m, p, u, g);
      vl(m, u);
    }
    return typeof u == "string" && u !== "" || typeof u == "number" ? (u = "" + u, p !== null && p.tag === 6 ? (n(m, p.sibling), p = s(p, u), p.return = m, m = p) : (n(m, p), p = ta(u, m.mode, g), p.return = m, m = p), o(m)) : n(m, p);
  }
  return b;
}
var Xn = tu(!0), nu = tu(!1), es = dn(null), ts = null, zn = null, Eo = null;
function No() {
  Eo = zn = ts = null;
}
function Io(e) {
  var t = es.current;
  he(es), e._currentValue = t;
}
function Oa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Qn(e, t) {
  ts = e, Eo = zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (Eo !== e) if (e = { context: e, memoizedValue: t, next: null }, zn === null) {
    if (ts === null) throw Error(Q(308));
    zn = e, ts.dependencies = { lanes: 0, firstContext: e };
  } else zn = zn.next = e;
  return t;
}
var hn = null;
function Mo(e) {
  hn === null ? hn = [e] : hn.push(e);
}
function ru(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, Mo(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function To(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Pt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ae & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Ft(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, Mo(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Ft(e, n);
}
function Tl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, go(e, n);
  }
}
function Ki(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var s = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? s = a = o : a = a.next = o, n = n.next;
      } while (n !== null);
      a === null ? s = a = t : a = a.next = t;
    } else s = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ns(e, t, n, r) {
  var s = e.updateQueue;
  Ht = !1;
  var a = s.firstBaseUpdate, o = s.lastBaseUpdate, i = s.shared.pending;
  if (i !== null) {
    s.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = d : i.next = d, h.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = s.baseState;
    o = 0, h = d = c = null, i = a;
    do {
      var y = i.lane, S = i.eventTime;
      if ((r & y) === y) {
        h !== null && (h = h.next = {
          eventTime: S,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var _ = e, x = i;
          switch (y = t, S = n, x.tag) {
            case 1:
              if (_ = x.payload, typeof _ == "function") {
                v = _.call(S, v, y);
                break e;
              }
              v = _;
              break e;
            case 3:
              _.flags = _.flags & -65537 | 128;
            case 0:
              if (_ = x.payload, y = typeof _ == "function" ? _.call(S, v, y) : _, y == null) break e;
              v = we({}, v, y);
              break e;
            case 2:
              Ht = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, y = s.effects, y === null ? s.effects = [i] : y.push(i));
      } else S = { eventTime: S, lane: y, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (d = h = S, c = v) : h = h.next = S, o |= y;
      if (i = i.next, i === null) {
        if (i = s.shared.pending, i === null) break;
        y = i, i = y.next, y.next = null, s.lastBaseUpdate = y, s.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = v), s.baseState = c, s.firstBaseUpdate = d, s.lastBaseUpdate = h, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        o |= s.lane, s = s.next;
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    bn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function Gi(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(Q(191, s));
      s.call(r);
    }
  }
}
var rl = {}, Mt = dn(rl), Ur = dn(rl), Vr = dn(rl);
function gn(e) {
  if (e === rl) throw Error(Q(174));
  return e;
}
function Lo(e, t) {
  switch (me(Vr, t), me(Ur, e), me(Mt, rl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ya(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ya(t, e);
  }
  he(Mt), me(Mt, t);
}
function Zn() {
  he(Mt), he(Ur), he(Vr);
}
function su(e) {
  gn(Vr.current);
  var t = gn(Mt.current), n = ya(t, e.type);
  t !== n && (me(Ur, e), me(Mt, n));
}
function Ao(e) {
  Ur.current === e && (he(Mt), he(Ur));
}
var ye = dn(0);
function rs(e) {
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
var qs = [];
function Do() {
  for (var e = 0; e < qs.length; e++) qs[e]._workInProgressVersionPrimary = null;
  qs.length = 0;
}
var Ll = Ut.ReactCurrentDispatcher, Ys = Ut.ReactCurrentBatchConfig, kn = 0, ve = null, Se = null, Ee = null, ls = !1, Cr = !1, Br = 0, Zp = 0;
function Re() {
  throw Error(Q(321));
}
function Ro(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function Po(e, t, n, r, s, a) {
  if (kn = a, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ll.current = e === null || e.memoizedState === null ? nh : rh, e = n(r, s), Cr) {
    a = 0;
    do {
      if (Cr = !1, Br = 0, 25 <= a) throw Error(Q(301));
      a += 1, Ee = Se = null, t.updateQueue = null, Ll.current = lh, e = n(r, s);
    } while (Cr);
  }
  if (Ll.current = ss, t = Se !== null && Se.next !== null, kn = 0, Ee = Se = ve = null, ls = !1, t) throw Error(Q(300));
  return e;
}
function Oo() {
  var e = Br !== 0;
  return Br = 0, e;
}
function Et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ee === null ? ve.memoizedState = Ee = e : Ee = Ee.next = e, Ee;
}
function ht() {
  if (Se === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = Ee === null ? ve.memoizedState : Ee.next;
  if (t !== null) Ee = t, Se = e;
  else {
    if (e === null) throw Error(Q(310));
    Se = e, e = { memoizedState: Se.memoizedState, baseState: Se.baseState, baseQueue: Se.baseQueue, queue: Se.queue, next: null }, Ee === null ? ve.memoizedState = Ee = e : Ee = Ee.next = e;
  }
  return Ee;
}
function Qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xs(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(Q(311));
  n.lastRenderedReducer = e;
  var r = Se, s = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (s !== null) {
      var o = s.next;
      s.next = a.next, a.next = o;
    }
    r.baseQueue = s = a, n.pending = null;
  }
  if (s !== null) {
    a = s.next, r = r.baseState;
    var i = o = null, c = null, d = a;
    do {
      var h = d.lane;
      if ((kn & h) === h) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, ve.lanes |= h, bn |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, St(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      a = s.lane, ve.lanes |= a, bn |= a, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zs(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(Q(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = s = s.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== s);
    St(a, t.memoizedState) || (qe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function au() {
}
function ou(e, t) {
  var n = ve, r = ht(), s = t(), a = !St(r.memoizedState, s);
  if (a && (r.memoizedState = s, qe = !0), r = r.queue, zo(du.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Ee !== null && Ee.memoizedState.tag & 1) {
    if (n.flags |= 2048, Hr(9, cu.bind(null, n, r, s, t), void 0, null), Ne === null) throw Error(Q(349));
    kn & 30 || iu(n, t, s);
  }
  return s;
}
function iu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function cu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, uu(t) && mu(e);
}
function du(e, t, n) {
  return n(function() {
    uu(t) && mu(e);
  });
}
function uu(e) {
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
  var t = Ft(e, 1);
  t !== null && bt(t, e, 1, -1);
}
function qi(e) {
  var t = Et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qr, lastRenderedState: e }, t.queue = e, e = e.dispatch = th.bind(null, ve, e), [t.memoizedState, e];
}
function Hr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fu() {
  return ht().memoizedState;
}
function Al(e, t, n, r) {
  var s = Et();
  ve.flags |= e, s.memoizedState = Hr(1 | t, n, void 0, r === void 0 ? null : r);
}
function vs(e, t, n, r) {
  var s = ht();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Se !== null) {
    var o = Se.memoizedState;
    if (a = o.destroy, r !== null && Ro(r, o.deps)) {
      s.memoizedState = Hr(t, n, a, r);
      return;
    }
  }
  ve.flags |= e, s.memoizedState = Hr(1 | t, n, a, r);
}
function Yi(e, t) {
  return Al(8390656, 8, e, t);
}
function zo(e, t) {
  return vs(2048, 8, e, t);
}
function pu(e, t) {
  return vs(4, 2, e, t);
}
function hu(e, t) {
  return vs(4, 4, e, t);
}
function gu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function yu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vs(4, 4, gu.bind(null, t, e), n);
}
function Fo() {
}
function vu(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ro(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function wu(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ro(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function xu(e, t, n) {
  return kn & 21 ? (St(n, t) || (n = jd(), ve.lanes |= n, bn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n);
}
function Jp(e, t) {
  var n = oe;
  oe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ys.transition;
  Ys.transition = {};
  try {
    e(!1), t();
  } finally {
    oe = n, Ys.transition = r;
  }
}
function _u() {
  return ht().memoizedState;
}
function eh(e, t, n) {
  var r = rn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ku(e)) bu(t, n);
  else if (n = ru(e, t, n, r), n !== null) {
    var s = $e();
    bt(n, e, r, s), Su(n, t, r);
  }
}
function th(e, t, n) {
  var r = rn(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ku(e)) bu(t, s);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (s.hasEagerState = !0, s.eagerState = i, St(i, o)) {
        var c = t.interleaved;
        c === null ? (s.next = s, Mo(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = ru(e, t, s, r), n !== null && (s = $e(), bt(n, e, r, s), Su(n, t, r));
  }
}
function ku(e) {
  var t = e.alternate;
  return e === ve || t !== null && t === ve;
}
function bu(e, t) {
  Cr = ls = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Su(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, go(e, n);
  }
}
var ss = { readContext: pt, useCallback: Re, useContext: Re, useEffect: Re, useImperativeHandle: Re, useInsertionEffect: Re, useLayoutEffect: Re, useMemo: Re, useReducer: Re, useRef: Re, useState: Re, useDebugValue: Re, useDeferredValue: Re, useTransition: Re, useMutableSource: Re, useSyncExternalStore: Re, useId: Re, unstable_isNewReconciler: !1 }, nh = { readContext: pt, useCallback: function(e, t) {
  return Et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: Yi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Al(
    4194308,
    4,
    gu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Al(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Al(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = eh.bind(null, ve, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Et();
  return e = { current: e }, t.memoizedState = e;
}, useState: qi, useDebugValue: Fo, useDeferredValue: function(e) {
  return Et().memoizedState = e;
}, useTransition: function() {
  var e = qi(!1), t = e[0];
  return e = Jp.bind(null, e[1]), Et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ve, s = Et();
  if (ge) {
    if (n === void 0) throw Error(Q(407));
    n = n();
  } else {
    if (n = t(), Ne === null) throw Error(Q(349));
    kn & 30 || iu(r, t, n);
  }
  s.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return s.queue = a, Yi(du.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Hr(9, cu.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Et(), t = Ne.identifierPrefix;
  if (ge) {
    var n = Rt, r = Dt;
    n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Br++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Zp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, rh = {
  readContext: pt,
  useCallback: vu,
  useContext: pt,
  useEffect: zo,
  useImperativeHandle: yu,
  useInsertionEffect: pu,
  useLayoutEffect: hu,
  useMemo: wu,
  useReducer: Xs,
  useRef: fu,
  useState: function() {
    return Xs(Qr);
  },
  useDebugValue: Fo,
  useDeferredValue: function(e) {
    var t = ht();
    return xu(t, Se.memoizedState, e);
  },
  useTransition: function() {
    var e = Xs(Qr)[0], t = ht().memoizedState;
    return [e, t];
  },
  useMutableSource: au,
  useSyncExternalStore: ou,
  useId: _u,
  unstable_isNewReconciler: !1
}, lh = { readContext: pt, useCallback: vu, useContext: pt, useEffect: zo, useImperativeHandle: yu, useInsertionEffect: pu, useLayoutEffect: hu, useMemo: wu, useReducer: Zs, useRef: fu, useState: function() {
  return Zs(Qr);
}, useDebugValue: Fo, useDeferredValue: function(e) {
  var t = ht();
  return Se === null ? t.memoizedState = e : xu(t, Se.memoizedState, e);
}, useTransition: function() {
  var e = Zs(Qr)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: au, useSyncExternalStore: ou, useId: _u, unstable_isNewReconciler: !1 };
function vt(e, t) {
  if (e && e.defaultProps) {
    t = we({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function za(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : we({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ws = { isMounted: function(e) {
  return (e = e._reactInternals) ? Cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), s = rn(e), a = Pt(r, s);
  a.payload = t, n != null && (a.callback = n), t = tn(e, a, s), t !== null && (bt(t, e, s, r), Tl(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), s = rn(e), a = Pt(r, s);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = tn(e, a, s), t !== null && (bt(t, e, s, r), Tl(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = rn(e), s = Pt(n, r);
  s.tag = 2, t != null && (s.callback = t), t = tn(e, s, r), t !== null && (bt(t, e, r, n), Tl(t, e, r));
} };
function Xi(e, t, n, r, s, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(s, a) : !0;
}
function ju(e, t, n) {
  var r = !1, s = an, a = t.contextType;
  return typeof a == "object" && a !== null ? a = pt(a) : (s = Xe(t) ? xn : ze.current, r = t.contextTypes, a = (r = r != null) ? qn(e, s) : an), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ws, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Zi(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ws.enqueueReplaceState(t, t.state, null);
}
function Fa(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, To(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? s.context = pt(a) : (a = Xe(t) ? xn : ze.current, s.context = qn(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (za(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && ws.enqueueReplaceState(s, s.state, null), ns(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Jn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Lf(r), r = r.return;
    while (r);
    var s = n;
  } catch (a) {
    s = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Js(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $a(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var sh = typeof WeakMap == "function" ? WeakMap : Map;
function Cu(e, t, n) {
  n = Pt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    os || (os = !0, Ya = r), $a(e, t);
  }, n;
}
function Eu(e, t, n) {
  n = Pt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function() {
      return r(s);
    }, n.callback = function() {
      $a(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    $a(e, t), typeof r != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ji(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sh();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = wh.bind(null, e, t, n), t.then(e, e));
}
function ec(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tc(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pt(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
}
var ah = Ut.ReactCurrentOwner, qe = !1;
function Fe(e, t, n, r) {
  t.child = e === null ? nu(t, null, n, r) : Xn(t, e.child, n, r);
}
function nc(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return Qn(t, s), r = Po(e, t, n, r, a, s), n = Oo(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, $t(e, t, s)) : (ge && n && So(t), t.flags |= 1, Fe(e, t, r, s), t.child);
}
function rc(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Ko(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Nu(e, t, a, r, s)) : (e = Ol(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & s)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : zr, n(o, r) && e.ref === t.ref) return $t(e, t, s);
  }
  return t.flags |= 1, e = ln(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Nu(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (zr(a, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) e.flags & 131072 && (qe = !0);
    else return t.lanes = e.lanes, $t(e, t, s);
  }
  return Wa(e, t, n, r, s);
}
function Iu(e, t, n) {
  var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, me($n, et), et |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, me($n, et), et |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, me($n, et), et |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, me($n, et), et |= r;
  return Fe(e, t, s, n), t.child;
}
function Mu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Wa(e, t, n, r, s) {
  var a = Xe(n) ? xn : ze.current;
  return a = qn(t, a), Qn(t, s), n = Po(e, t, n, r, a, s), r = Oo(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, $t(e, t, s)) : (ge && r && So(t), t.flags |= 1, Fe(e, t, n, s), t.child);
}
function lc(e, t, n, r, s) {
  if (Xe(n)) {
    var a = !0;
    Xl(t);
  } else a = !1;
  if (Qn(t, s), t.stateNode === null) Dl(e, t), ju(t, n, r), Fa(t, n, r, s), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = pt(d) : (d = Xe(n) ? xn : ze.current, d = qn(t, d));
    var h = n.getDerivedStateFromProps, v = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && Zi(t, o, r, d), Ht = !1;
    var y = t.memoizedState;
    o.state = y, ns(t, r, o, s), c = t.memoizedState, i !== r || y !== c || Ye.current || Ht ? (typeof h == "function" && (za(t, n, h, r), c = t.memoizedState), (i = Ht || Xi(t, n, i, r, y, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, lu(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : vt(t.type, i), o.props = d, v = t.pendingProps, y = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = pt(c) : (c = Xe(n) ? xn : ze.current, c = qn(t, c));
    var S = n.getDerivedStateFromProps;
    (h = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || y !== c) && Zi(t, o, r, c), Ht = !1, y = t.memoizedState, o.state = y, ns(t, r, o, s);
    var _ = t.memoizedState;
    i !== v || y !== _ || Ye.current || Ht ? (typeof S == "function" && (za(t, n, S, r), _ = t.memoizedState), (d = Ht || Xi(t, n, d, r, y, _, c) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, _, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, _, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = _), o.props = r, o.state = _, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ua(e, t, n, r, a, s);
}
function Ua(e, t, n, r, s, a) {
  Mu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && Vi(t, n, !1), $t(e, t, a);
  r = t.stateNode, ah.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Xn(t, e.child, null, a), t.child = Xn(t, null, i, a)) : Fe(e, t, i, a), t.memoizedState = r.state, s && Vi(t, n, !0), t.child;
}
function Tu(e) {
  var t = e.stateNode;
  t.pendingContext ? Ui(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ui(e, t.context, !1), Lo(e, t.containerInfo);
}
function sc(e, t, n, r, s) {
  return Yn(), Co(s), t.flags |= 256, Fe(e, t, n, r), t.child;
}
var Va = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ba(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lu(e, t, n) {
  var r = t.pendingProps, s = ye.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), me(ye, s & 1), e === null)
    return Pa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = ks(o, r, 0, null), e = wn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Ba(n), t.memoizedState = Va, e) : $o(t, o));
  if (s = e.memoizedState, s !== null && (i = s.dehydrated, i !== null)) return oh(e, t, o, r, i, s, n);
  if (a) {
    a = r.fallback, o = t.mode, s = e.child, i = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = ln(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), i !== null ? a = ln(i, a) : (a = wn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Ba(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Va, r;
  }
  return a = e.child, e = a.sibling, r = ln(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function $o(e, t) {
  return t = ks({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function wl(e, t, n, r) {
  return r !== null && Co(r), Xn(t, e.child, null, n), e = $o(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function oh(e, t, n, r, s, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Js(Error(Q(422))), wl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = ks({ mode: "visible", children: r.children }, s, 0, null), a = wn(a, s, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Xn(t, e.child, null, o), t.child.memoizedState = Ba(o), t.memoizedState = Va, a);
  if (!(t.mode & 1)) return wl(e, t, o, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(Q(419)), r = Js(a, r, void 0), wl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, qe || i) {
    if (r = Ne, r !== null) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
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
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      s = s & (r.suspendedLanes | o) ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, Ft(e, s), bt(r, e, s, -1));
    }
    return Ho(), r = Js(Error(Q(421))), wl(e, t, o, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = xh.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, tt = en(s.nextSibling), nt = t, ge = !0, xt = null, e !== null && (it[ct++] = Dt, it[ct++] = Rt, it[ct++] = _n, Dt = e.id, Rt = e.overflow, _n = t), t = $o(t, r.children), t.flags |= 4096, t);
}
function ac(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Oa(e.return, t, n);
}
function ea(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
}
function Au(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, a = r.tail;
  if (Fe(e, t, r.children, n), r = ye.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ac(e, n, t);
      else if (e.tag === 19) ac(e, n, t);
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
  if (me(ye, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && rs(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), ea(t, !1, s, n, a);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && rs(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      ea(t, !0, n, null, a);
      break;
    case "together":
      ea(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Dl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), bn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(Q(153));
  if (t.child !== null) {
    for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ih(e, t, n) {
  switch (t.tag) {
    case 3:
      Tu(t), Yn();
      break;
    case 5:
      su(t);
      break;
    case 1:
      Xe(t.type) && Xl(t);
      break;
    case 4:
      Lo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      me(es, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (me(ye, ye.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Lu(e, t, n) : (me(ye, ye.current & 1), e = $t(e, t, n), e !== null ? e.sibling : null);
      me(ye, ye.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Au(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), me(ye, ye.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Iu(e, t, n);
  }
  return $t(e, t, n);
}
var Du, Qa, Ru, Pu;
Du = function(e, t) {
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
Qa = function() {
};
Ru = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, gn(Mt.current);
    var a = null;
    switch (n) {
      case "input":
        s = fa(e, s), r = fa(e, r), a = [];
        break;
      case "select":
        s = we({}, s, { value: void 0 }), r = we({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        s = ga(e, s), r = ga(e, r), a = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ql);
    }
    va(n, r);
    var o;
    n = null;
    for (d in s) if (!r.hasOwnProperty(d) && s.hasOwnProperty(d) && s[d] != null) if (d === "style") {
      var i = s[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Tr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = s != null ? s[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Tr.hasOwnProperty(d) ? (c != null && d === "onScroll" && pe("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Pu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function pr(e, t) {
  if (!ge) switch (e.tailMode) {
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
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function ch(e, t, n) {
  var r = t.pendingProps;
  switch (jo(t), t.tag) {
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
      return Pe(t), null;
    case 1:
      return Xe(t.type) && Yl(), Pe(t), null;
    case 3:
      return r = t.stateNode, Zn(), he(Ye), he(ze), Do(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (yl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (Ja(xt), xt = null))), Qa(e, t), Pe(t), null;
    case 5:
      Ao(t);
      var s = gn(Vr.current);
      if (n = t.type, e !== null && t.stateNode != null) Ru(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(Q(166));
          return Pe(t), null;
        }
        if (e = gn(Mt.current), yl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Nt] = t, r[Wr] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              pe("cancel", r), pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < xr.length; s++) pe(xr[s], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe(
                "error",
                r
              ), pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              hi(r, a), pe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, pe("invalid", r);
              break;
            case "textarea":
              yi(r, a), pe("invalid", r);
          }
          va(n, a), s = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && gl(r.textContent, i, e), s = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && gl(
              r.textContent,
              i,
              e
            ), s = ["children", "" + i]) : Tr.hasOwnProperty(o) && i != null && o === "onScroll" && pe("scroll", r);
          }
          switch (n) {
            case "input":
              il(r), gi(r, a, !0);
              break;
            case "textarea":
              il(r), vi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = ql);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = dd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Nt] = t, e[Wr] = r, Du(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = wa(n, r), n) {
              case "dialog":
                pe("cancel", e), pe("close", e), s = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", e), s = r;
                break;
              case "video":
              case "audio":
                for (s = 0; s < xr.length; s++) pe(xr[s], e);
                s = r;
                break;
              case "source":
                pe("error", e), s = r;
                break;
              case "img":
              case "image":
              case "link":
                pe(
                  "error",
                  e
                ), pe("load", e), s = r;
                break;
              case "details":
                pe("toggle", e), s = r;
                break;
              case "input":
                hi(e, r), s = fa(e, r), pe("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = we({}, r, { value: void 0 }), pe("invalid", e);
                break;
              case "textarea":
                yi(e, r), s = ga(e, r), pe("invalid", e);
                break;
              default:
                s = r;
            }
            va(n, s), i = s;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? fd(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && ud(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Lr(e, c) : typeof c == "number" && Lr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Tr.hasOwnProperty(a) ? c != null && a === "onScroll" && pe("scroll", e) : c != null && co(e, a, c, o));
            }
            switch (n) {
              case "input":
                il(e), gi(e, r, !1);
                break;
              case "textarea":
                il(e), vi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Wn(e, !!r.multiple, a, !1) : r.defaultValue != null && Wn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = ql);
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
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) Pu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(Q(166));
        if (n = gn(Vr.current), gn(Mt.current), yl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Nt] = t, (a = r.nodeValue !== n) && (e = nt, e !== null)) switch (e.tag) {
            case 3:
              gl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Nt] = t, t.stateNode = r;
      }
      return Pe(t), null;
    case 13:
      if (he(ye), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ge && tt !== null && t.mode & 1 && !(t.flags & 128)) eu(), Yn(), t.flags |= 98560, a = !1;
        else if (a = yl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(Q(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(Q(317));
            a[Nt] = t;
          } else Yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Pe(t), a = !1;
        } else xt !== null && (Ja(xt), xt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ye.current & 1 ? je === 0 && (je = 3) : Ho())), t.updateQueue !== null && (t.flags |= 4), Pe(t), null);
    case 4:
      return Zn(), Qa(e, t), e === null && Fr(t.stateNode.containerInfo), Pe(t), null;
    case 10:
      return Io(t.type._context), Pe(t), null;
    case 17:
      return Xe(t.type) && Yl(), Pe(t), null;
    case 19:
      if (he(ye), a = t.memoizedState, a === null) return Pe(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) pr(a, !1);
      else {
        if (je !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = rs(e), o !== null) {
            for (t.flags |= 128, pr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return me(ye, ye.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && _e() > er && (t.flags |= 128, r = !0, pr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = rs(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), pr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !ge) return Pe(t), null;
        } else 2 * _e() - a.renderingStartTime > er && n !== 1073741824 && (t.flags |= 128, r = !0, pr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = _e(), t.sibling = null, n = ye.current, me(ye, r ? n & 1 | 2 : n & 1), t) : (Pe(t), null);
    case 22:
    case 23:
      return Qo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? et & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(Q(156, t.tag));
}
function dh(e, t) {
  switch (jo(t), t.tag) {
    case 1:
      return Xe(t.type) && Yl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Zn(), he(Ye), he(ze), Do(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ao(t), null;
    case 13:
      if (he(ye), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(Q(340));
        Yn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return he(ye), null;
    case 4:
      return Zn(), null;
    case 10:
      return Io(t.type._context), null;
    case 22:
    case 23:
      return Qo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xl = !1, Oe = !1, uh = typeof WeakSet == "function" ? WeakSet : Set, q = null;
function Fn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    xe(e, t, r);
  }
  else n.current = null;
}
function Ha(e, t, n) {
  try {
    n();
  } catch (r) {
    xe(e, t, r);
  }
}
var oc = !1;
function mh(e, t) {
  if (Ia = Hl, e = Wd(), bo(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var s = r.anchorOffset, a = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, a.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, i = -1, c = -1, d = 0, h = 0, v = e, y = null;
        t: for (; ; ) {
          for (var S; v !== n || s !== 0 && v.nodeType !== 3 || (i = o + s), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (S = v.firstChild) !== null; )
            y = v, v = S;
          for (; ; ) {
            if (v === e) break t;
            if (y === n && ++d === s && (i = o), y === a && ++h === r && (c = o), (S = v.nextSibling) !== null) break;
            v = y, y = v.parentNode;
          }
          v = S;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ma = { focusedElem: e, selectionRange: n }, Hl = !1, q = t; q !== null; ) if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, q = e;
  else for (; q !== null; ) {
    t = q;
    try {
      var _ = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (_ !== null) {
            var x = _.memoizedProps, b = _.memoizedState, m = t.stateNode, p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : vt(t.type, x), b);
            m.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var u = t.stateNode.containerInfo;
          u.nodeType === 1 ? u.textContent = "" : u.nodeType === 9 && u.documentElement && u.removeChild(u.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(Q(163));
      }
    } catch (g) {
      xe(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, q = e;
      break;
    }
    q = t.return;
  }
  return _ = oc, oc = !1, _;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var a = s.destroy;
        s.destroy = void 0, a !== void 0 && Ha(t, n, a);
      }
      s = s.next;
    } while (s !== r);
  }
}
function xs(e, t) {
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
function Ka(e) {
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
function Ou(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ou(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nt], delete t[Wr], delete t[Aa], delete t[Gp], delete t[qp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function zu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ic(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || zu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ga(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ql));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ga(e, t, n), e = e.sibling; e !== null; ) Ga(e, t, n), e = e.sibling;
}
function qa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (qa(e, t, n), e = e.sibling; e !== null; ) qa(e, t, n), e = e.sibling;
}
var Me = null, wt = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) Fu(e, t, n), n = n.sibling;
}
function Fu(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function") try {
    It.onCommitFiberUnmount(ms, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Oe || Fn(n, t);
    case 6:
      var r = Me, s = wt;
      Me = null, Bt(e, t, n), Me = r, wt = s, Me !== null && (wt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Me.removeChild(n.stateNode));
      break;
    case 18:
      Me !== null && (wt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? Ks(e.parentNode, n) : e.nodeType === 1 && Ks(e, n), Pr(e)) : Ks(Me, n.stateNode));
      break;
    case 4:
      r = Me, s = wt, Me = n.stateNode.containerInfo, wt = !0, Bt(e, t, n), Me = r, wt = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var a = s, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Ha(n, t, o), s = s.next;
        } while (s !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (!Oe && (Fn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        xe(n, t, i);
      }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null, Bt(e, t, n), Oe = r) : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function cc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uh()), t.forEach(function(r) {
      var s = _h.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s));
    });
  }
}
function gt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var s = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Me = i.stateNode, wt = !1;
            break e;
          case 3:
            Me = i.stateNode.containerInfo, wt = !0;
            break e;
          case 4:
            Me = i.stateNode.containerInfo, wt = !0;
            break e;
        }
        i = i.return;
      }
      if (Me === null) throw Error(Q(160));
      Fu(a, o, s), Me = null, wt = !1;
      var c = s.alternate;
      c !== null && (c.return = null), s.return = null;
    } catch (d) {
      xe(s, t, d);
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
      if (gt(t, e), Ct(e), r & 4) {
        try {
          Er(3, e, e.return), xs(3, e);
        } catch (x) {
          xe(e, e.return, x);
        }
        try {
          Er(5, e, e.return);
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      break;
    case 1:
      gt(t, e), Ct(e), r & 512 && n !== null && Fn(n, n.return);
      break;
    case 5:
      if (gt(t, e), Ct(e), r & 512 && n !== null && Fn(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          Lr(s, "");
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && id(s, a), wa(i, o);
          var d = wa(i, a);
          for (o = 0; o < c.length; o += 2) {
            var h = c[o], v = c[o + 1];
            h === "style" ? fd(s, v) : h === "dangerouslySetInnerHTML" ? ud(s, v) : h === "children" ? Lr(s, v) : co(s, h, v, d);
          }
          switch (i) {
            case "input":
              pa(s, a);
              break;
            case "textarea":
              cd(s, a);
              break;
            case "select":
              var y = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!a.multiple;
              var S = a.value;
              S != null ? Wn(s, !!a.multiple, S, !1) : y !== !!a.multiple && (a.defaultValue != null ? Wn(
                s,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Wn(s, !!a.multiple, a.multiple ? [] : "", !1));
          }
          s[Wr] = a;
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      break;
    case 6:
      if (gt(t, e), Ct(e), r & 4) {
        if (e.stateNode === null) throw Error(Q(162));
        s = e.stateNode, a = e.memoizedProps;
        try {
          s.nodeValue = a;
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (gt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Pr(t.containerInfo);
      } catch (x) {
        xe(e, e.return, x);
      }
      break;
    case 4:
      gt(t, e), Ct(e);
      break;
    case 13:
      gt(t, e), Ct(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (Vo = _e())), r & 4 && cc(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Oe = (d = Oe) || h, gt(t, e), Oe = d) : gt(t, e), Ct(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (q = e, h = e.child; h !== null; ) {
          for (v = q = h; q !== null; ) {
            switch (y = q, S = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Er(4, y, y.return);
                break;
              case 1:
                Fn(y, y.return);
                var _ = y.stateNode;
                if (typeof _.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, _.props = t.memoizedProps, _.state = t.memoizedState, _.componentWillUnmount();
                  } catch (x) {
                    xe(r, n, x);
                  }
                }
                break;
              case 5:
                Fn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  uc(v);
                  continue;
                }
            }
            S !== null ? (S.return = y, q = S) : uc(v);
          }
          h = h.sibling;
        }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                s = v.stateNode, d ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = md("display", o));
              } catch (x) {
                xe(e, e.return, x);
              }
            }
          } else if (v.tag === 6) {
            if (h === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (x) {
              xe(e, e.return, x);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            h === v && (h = null), v = v.return;
          }
          h === v && (h = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      gt(t, e), Ct(e), r & 4 && cc(e);
      break;
    case 21:
      break;
    default:
      gt(
        t,
        e
      ), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(Q(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Lr(s, ""), r.flags &= -33);
          var a = ic(e);
          qa(e, a, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = ic(e);
          Ga(e, i, o);
          break;
        default:
          throw Error(Q(161));
      }
    } catch (c) {
      xe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fh(e, t, n) {
  q = e, Wu(e);
}
function Wu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; q !== null; ) {
    var s = q, a = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || xl;
      if (!o) {
        var i = s.alternate, c = i !== null && i.memoizedState !== null || Oe;
        i = xl;
        var d = Oe;
        if (xl = o, (Oe = c) && !d) for (q = s; q !== null; ) o = q, c = o.child, o.tag === 22 && o.memoizedState !== null ? mc(s) : c !== null ? (c.return = o, q = c) : mc(s);
        for (; a !== null; ) q = a, Wu(a), a = a.sibling;
        q = s, xl = i, Oe = d;
      }
      dc(e);
    } else s.subtreeFlags & 8772 && a !== null ? (a.return = s, q = a) : dc(e);
  }
}
function dc(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Oe || xs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Oe) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Gi(t, a, r);
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
              Gi(t, o, n);
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
                var h = d.memoizedState;
                if (h !== null) {
                  var v = h.dehydrated;
                  v !== null && Pr(v);
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
            throw Error(Q(163));
        }
        Oe || t.flags & 512 && Ka(t);
      } catch (y) {
        xe(t, t.return, y);
      }
    }
    if (t === e) {
      q = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, q = n;
      break;
    }
    q = t.return;
  }
}
function uc(e) {
  for (; q !== null; ) {
    var t = q;
    if (t === e) {
      q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, q = n;
      break;
    }
    q = t.return;
  }
}
function mc(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xs(4, t);
          } catch (c) {
            xe(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              xe(t, s, c);
            }
          }
          var a = t.return;
          try {
            Ka(t);
          } catch (c) {
            xe(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ka(t);
          } catch (c) {
            xe(t, o, c);
          }
      }
    } catch (c) {
      xe(t, t.return, c);
    }
    if (t === e) {
      q = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, q = i;
      break;
    }
    q = t.return;
  }
}
var ph = Math.ceil, as = Ut.ReactCurrentDispatcher, Wo = Ut.ReactCurrentOwner, mt = Ut.ReactCurrentBatchConfig, ae = 0, Ne = null, be = null, Te = 0, et = 0, $n = dn(0), je = 0, Kr = null, bn = 0, _s = 0, Uo = 0, Nr = null, Ke = null, Vo = 0, er = 1 / 0, Lt = null, os = !1, Ya = null, nn = null, _l = !1, Yt = null, is = 0, Ir = 0, Xa = null, Rl = -1, Pl = 0;
function $e() {
  return ae & 6 ? _e() : Rl !== -1 ? Rl : Rl = _e();
}
function rn(e) {
  return e.mode & 1 ? ae & 2 && Te !== 0 ? Te & -Te : Xp.transition !== null ? (Pl === 0 && (Pl = jd()), Pl) : (e = oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ld(e.type)), e) : 1;
}
function bt(e, t, n, r) {
  if (50 < Ir) throw Ir = 0, Xa = null, Error(Q(185));
  el(e, n, r), (!(ae & 2) || e !== Ne) && (e === Ne && (!(ae & 2) && (_s |= n), je === 4 && Gt(e, Te)), Ze(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (er = _e() + 500, ys && un()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  Xf(e, t);
  var r = Ql(e, e === Ne ? Te : 0);
  if (r === 0) n !== null && _i(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && _i(n), t === 1) e.tag === 0 ? Yp(fc.bind(null, e)) : Xd(fc.bind(null, e)), Hp(function() {
      !(ae & 6) && un();
    }), n = null;
    else {
      switch (Cd(r)) {
        case 1:
          n = ho;
          break;
        case 4:
          n = bd;
          break;
        case 16:
          n = Bl;
          break;
        case 536870912:
          n = Sd;
          break;
        default:
          n = Bl;
      }
      n = qu(n, Uu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Uu(e, t) {
  if (Rl = -1, Pl = 0, ae & 6) throw Error(Q(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Ql(e, e === Ne ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = cs(e, r);
  else {
    t = r;
    var s = ae;
    ae |= 2;
    var a = Bu();
    (Ne !== e || Te !== t) && (Lt = null, er = _e() + 500, vn(e, t));
    do
      try {
        yh();
        break;
      } catch (i) {
        Vu(e, i);
      }
    while (!0);
    No(), as.current = a, ae = s, be !== null ? t = 0 : (Ne = null, Te = 0, t = je);
  }
  if (t !== 0) {
    if (t === 2 && (s = Sa(e), s !== 0 && (r = s, t = Za(e, s))), t === 1) throw n = Kr, vn(e, 0), Gt(e, r), Ze(e, _e()), n;
    if (t === 6) Gt(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !hh(s) && (t = cs(e, r), t === 2 && (a = Sa(e), a !== 0 && (r = a, t = Za(e, a))), t === 1)) throw n = Kr, vn(e, 0), Gt(e, r), Ze(e, _e()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(Q(345));
        case 2:
          fn(e, Ke, Lt);
          break;
        case 3:
          if (Gt(e, r), (r & 130023424) === r && (t = Vo + 500 - _e(), 10 < t)) {
            if (Ql(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = La(fn.bind(null, e, Ke, Lt), t);
            break;
          }
          fn(e, Ke, Lt);
          break;
        case 4:
          if (Gt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - kt(r);
            a = 1 << o, o = t[o], o > s && (s = o), r &= ~a;
          }
          if (r = s, r = _e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ph(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = La(fn.bind(null, e, Ke, Lt), r);
            break;
          }
          fn(e, Ke, Lt);
          break;
        case 5:
          fn(e, Ke, Lt);
          break;
        default:
          throw Error(Q(329));
      }
    }
  }
  return Ze(e, _e()), e.callbackNode === n ? Uu.bind(null, e) : null;
}
function Za(e, t) {
  var n = Nr;
  return e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256), e = cs(e, t), e !== 2 && (t = Ke, Ke = n, t !== null && Ja(t)), e;
}
function Ja(e) {
  Ke === null ? Ke = e : Ke.push.apply(Ke, e);
}
function hh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var s = n[r], a = s.getSnapshot;
        s = s.value;
        try {
          if (!St(a(), s)) return !1;
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
function Gt(e, t) {
  for (t &= ~Uo, t &= ~_s, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fc(e) {
  if (ae & 6) throw Error(Q(327));
  Hn();
  var t = Ql(e, 0);
  if (!(t & 1)) return Ze(e, _e()), null;
  var n = cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Sa(e);
    r !== 0 && (t = r, n = Za(e, r));
  }
  if (n === 1) throw n = Kr, vn(e, 0), Gt(e, t), Ze(e, _e()), n;
  if (n === 6) throw Error(Q(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, Ke, Lt), Ze(e, _e()), null;
}
function Bo(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (er = _e() + 500, ys && un());
  }
}
function Sn(e) {
  Yt !== null && Yt.tag === 0 && !(ae & 6) && Hn();
  var t = ae;
  ae |= 1;
  var n = mt.transition, r = oe;
  try {
    if (mt.transition = null, oe = 1, e) return e();
  } finally {
    oe = r, mt.transition = n, ae = t, !(ae & 6) && un();
  }
}
function Qo() {
  et = $n.current, he($n);
}
function vn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Qp(n)), be !== null) for (n = be.return; n !== null; ) {
    var r = n;
    switch (jo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Yl();
        break;
      case 3:
        Zn(), he(Ye), he(ze), Do();
        break;
      case 5:
        Ao(r);
        break;
      case 4:
        Zn();
        break;
      case 13:
        he(ye);
        break;
      case 19:
        he(ye);
        break;
      case 10:
        Io(r.type._context);
        break;
      case 22:
      case 23:
        Qo();
    }
    n = n.return;
  }
  if (Ne = e, be = e = ln(e.current, null), Te = et = t, je = 0, Kr = null, Uo = _s = bn = 0, Ke = Nr = null, hn !== null) {
    for (t = 0; t < hn.length; t++) if (n = hn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var s = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = s, r.next = o;
      }
      n.pending = r;
    }
    hn = null;
  }
  return e;
}
function Vu(e, t) {
  do {
    var n = be;
    try {
      if (No(), Ll.current = ss, ls) {
        for (var r = ve.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        ls = !1;
      }
      if (kn = 0, Ee = Se = ve = null, Cr = !1, Br = 0, Wo.current = null, n === null || n.return === null) {
        je = 1, Kr = t, be = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Te, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, h = i, v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var y = h.alternate;
            y ? (h.updateQueue = y.updateQueue, h.memoizedState = y.memoizedState, h.lanes = y.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var S = ec(o);
          if (S !== null) {
            S.flags &= -257, tc(S, o, i, a, t), S.mode & 1 && Ji(a, d, t), t = S, c = d;
            var _ = t.updateQueue;
            if (_ === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(c), t.updateQueue = x;
            } else _.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Ji(a, d, t), Ho();
              break e;
            }
            c = Error(Q(426));
          }
        } else if (ge && i.mode & 1) {
          var b = ec(o);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), tc(b, o, i, a, t), Co(Jn(c, i));
            break e;
          }
        }
        a = c = Jn(c, i), je !== 4 && (je = 2), Nr === null ? Nr = [a] : Nr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var m = Cu(a, c, t);
              Ki(a, m);
              break e;
            case 1:
              i = c;
              var p = a.type, u = a.stateNode;
              if (!(a.flags & 128) && (typeof p.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (nn === null || !nn.has(u)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Eu(a, i, t);
                Ki(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Hu(n);
    } catch (k) {
      t = k, be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Bu() {
  var e = as.current;
  return as.current = ss, e === null ? ss : e;
}
function Ho() {
  (je === 0 || je === 3 || je === 2) && (je = 4), Ne === null || !(bn & 268435455) && !(_s & 268435455) || Gt(Ne, Te);
}
function cs(e, t) {
  var n = ae;
  ae |= 2;
  var r = Bu();
  (Ne !== e || Te !== t) && (Lt = null, vn(e, t));
  do
    try {
      gh();
      break;
    } catch (s) {
      Vu(e, s);
    }
  while (!0);
  if (No(), ae = n, as.current = r, be !== null) throw Error(Q(261));
  return Ne = null, Te = 0, je;
}
function gh() {
  for (; be !== null; ) Qu(be);
}
function yh() {
  for (; be !== null && !Uf(); ) Qu(be);
}
function Qu(e) {
  var t = Gu(e.alternate, e, et);
  e.memoizedProps = e.pendingProps, t === null ? Hu(e) : be = t, Wo.current = null;
}
function Hu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = dh(n, t), n !== null) {
        n.flags &= 32767, be = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        je = 6, be = null;
        return;
      }
    } else if (n = ch(n, t, et), n !== null) {
      be = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function fn(e, t, n) {
  var r = oe, s = mt.transition;
  try {
    mt.transition = null, oe = 1, vh(e, t, n, r);
  } finally {
    mt.transition = s, oe = r;
  }
  return null;
}
function vh(e, t, n, r) {
  do
    Hn();
  while (Yt !== null);
  if (ae & 6) throw Error(Q(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(Q(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Zf(e, a), e === Ne && (be = Ne = null, Te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _l || (_l = !0, qu(Bl, function() {
    return Hn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = mt.transition, mt.transition = null;
    var o = oe;
    oe = 1;
    var i = ae;
    ae |= 4, Wo.current = null, mh(e, n), $u(n, e), zp(Ma), Hl = !!Ia, Ma = Ia = null, e.current = n, fh(n), Vf(), ae = i, oe = o, mt.transition = a;
  } else e.current = n;
  if (_l && (_l = !1, Yt = e, is = s), a = e.pendingLanes, a === 0 && (nn = null), Hf(n.stateNode), Ze(e, _e()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (os) throw os = !1, e = Ya, Ya = null, e;
  return is & 1 && e.tag !== 0 && Hn(), a = e.pendingLanes, a & 1 ? e === Xa ? Ir++ : (Ir = 0, Xa = e) : Ir = 0, un(), null;
}
function Hn() {
  if (Yt !== null) {
    var e = Cd(is), t = mt.transition, n = oe;
    try {
      if (mt.transition = null, oe = 16 > e ? 16 : e, Yt === null) var r = !1;
      else {
        if (e = Yt, Yt = null, is = 0, ae & 6) throw Error(Q(331));
        var s = ae;
        for (ae |= 4, q = e.current; q !== null; ) {
          var a = q, o = a.child;
          if (q.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (q = d; q !== null; ) {
                  var h = q;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, h, a);
                  }
                  var v = h.child;
                  if (v !== null) v.return = h, q = v;
                  else for (; q !== null; ) {
                    h = q;
                    var y = h.sibling, S = h.return;
                    if (Ou(h), h === d) {
                      q = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = S, q = y;
                      break;
                    }
                    q = S;
                  }
                }
              }
              var _ = a.alternate;
              if (_ !== null) {
                var x = _.child;
                if (x !== null) {
                  _.child = null;
                  do {
                    var b = x.sibling;
                    x.sibling = null, x = b;
                  } while (x !== null);
                }
              }
              q = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, q = o;
          else e: for (; q !== null; ) {
            if (a = q, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                Er(9, a, a.return);
            }
            var m = a.sibling;
            if (m !== null) {
              m.return = a.return, q = m;
              break e;
            }
            q = a.return;
          }
        }
        var p = e.current;
        for (q = p; q !== null; ) {
          o = q;
          var u = o.child;
          if (o.subtreeFlags & 2064 && u !== null) u.return = o, q = u;
          else e: for (o = p; q !== null; ) {
            if (i = q, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  xs(9, i);
              }
            } catch (k) {
              xe(i, i.return, k);
            }
            if (i === o) {
              q = null;
              break e;
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, q = g;
              break e;
            }
            q = i.return;
          }
        }
        if (ae = s, un(), It && typeof It.onPostCommitFiberRoot == "function") try {
          It.onPostCommitFiberRoot(ms, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      oe = n, mt.transition = t;
    }
  }
  return !1;
}
function pc(e, t, n) {
  t = Jn(n, t), t = Cu(e, t, 1), e = tn(e, t, 1), t = $e(), e !== null && (el(e, 1, t), Ze(e, t));
}
function xe(e, t, n) {
  if (e.tag === 3) pc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      pc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
        e = Jn(n, e), e = Eu(t, e, 1), t = tn(t, e, 1), e = $e(), t !== null && (el(t, 1, e), Ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function wh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Ne === e && (Te & n) === n && (je === 4 || je === 3 && (Te & 130023424) === Te && 500 > _e() - Vo ? vn(e, 0) : Uo |= n), Ze(e, t);
}
function Ku(e, t) {
  t === 0 && (e.mode & 1 ? (t = ul, ul <<= 1, !(ul & 130023424) && (ul = 4194304)) : t = 1);
  var n = $e();
  e = Ft(e, t), e !== null && (el(e, t, n), Ze(e, n));
}
function xh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ku(e, n);
}
function _h(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(Q(314));
  }
  r !== null && r.delete(t), Ku(e, n);
}
var Gu;
Gu = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ye.current) qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, ih(e, t, n);
    qe = !!(e.flags & 131072);
  }
  else qe = !1, ge && t.flags & 1048576 && Zd(t, Jl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Dl(e, t), e = t.pendingProps;
      var s = qn(t, ze.current);
      Qn(t, n), s = Po(null, t, r, e, s, n);
      var a = Oo();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (a = !0, Xl(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, To(t), s.updater = ws, t.stateNode = s, s._reactInternals = t, Fa(t, r, e, n), t = Ua(null, t, r, !0, a, n)) : (t.tag = 0, ge && a && So(t), Fe(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Dl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = bh(r), e = vt(r, e), s) {
          case 0:
            t = Wa(null, t, r, e, n);
            break e;
          case 1:
            t = lc(null, t, r, e, n);
            break e;
          case 11:
            t = nc(null, t, r, e, n);
            break e;
          case 14:
            t = rc(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(Q(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), Wa(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), lc(e, t, r, s, n);
    case 3:
      e: {
        if (Tu(t), e === null) throw Error(Q(387));
        r = t.pendingProps, a = t.memoizedState, s = a.element, lu(e, t), ns(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          s = Jn(Error(Q(423)), t), t = sc(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = Jn(Error(Q(424)), t), t = sc(e, t, r, n, s);
          break e;
        } else for (tt = en(t.stateNode.containerInfo.firstChild), nt = t, ge = !0, xt = null, n = nu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Yn(), r === s) {
            t = $t(e, t, n);
            break e;
          }
          Fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return su(t), e === null && Pa(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = s.children, Ta(r, s) ? o = null : a !== null && Ta(r, a) && (t.flags |= 32), Mu(e, t), Fe(e, t, o, n), t.child;
    case 6:
      return e === null && Pa(t), null;
    case 13:
      return Lu(e, t, n);
    case 4:
      return Lo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Xn(t, null, r, n) : Fe(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), nc(e, t, r, s, n);
    case 7:
      return Fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, o = s.value, me(es, r._currentValue), r._currentValue = o, a !== null) if (St(a.value, o)) {
          if (a.children === s.children && !Ye.current) {
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
                  c = Pt(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? c.next = c : (c.next = h.next, h.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Oa(
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
            if (o = a.return, o === null) throw Error(Q(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Oa(o, n, t), o = a.sibling;
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
        Fe(e, t, s.children, n), t = t.child;
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, Qn(t, n), s = pt(s), r = r(s), t.flags |= 1, Fe(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = vt(r, t.pendingProps), s = vt(r.type, s), rc(e, t, r, s, n);
    case 15:
      return Nu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), Dl(e, t), t.tag = 1, Xe(r) ? (e = !0, Xl(t)) : e = !1, Qn(t, n), ju(t, r, s), Fa(t, r, s, n), Ua(null, t, r, !0, e, n);
    case 19:
      return Au(e, t, n);
    case 22:
      return Iu(e, t, n);
  }
  throw Error(Q(156, t.tag));
};
function qu(e, t) {
  return kd(e, t);
}
function kh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new kh(e, t, n, r);
}
function Ko(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function bh(e) {
  if (typeof e == "function") return Ko(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === mo) return 11;
    if (e === fo) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ol(e, t, n, r, s, a) {
  var o = 2;
  if (r = e, typeof e == "function") Ko(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Mn:
      return wn(n.children, s, a, t);
    case uo:
      o = 8, s |= 8;
      break;
    case ca:
      return e = ut(12, n, t, s | 2), e.elementType = ca, e.lanes = a, e;
    case da:
      return e = ut(13, n, t, s), e.elementType = da, e.lanes = a, e;
    case ua:
      return e = ut(19, n, t, s), e.elementType = ua, e.lanes = a, e;
    case sd:
      return ks(n, s, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case rd:
          o = 10;
          break e;
        case ld:
          o = 9;
          break e;
        case mo:
          o = 11;
          break e;
        case fo:
          o = 14;
          break e;
        case Qt:
          o = 16, r = null;
          break e;
      }
      throw Error(Q(130, e == null ? e : typeof e, ""));
  }
  return t = ut(o, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
}
function wn(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function ks(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = sd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ta(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function na(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Sh(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ps(0), this.expirationTimes = Ps(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ps(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function Go(e, t, n, r, s, a, o, i, c) {
  return e = new Sh(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ut(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, To(a), e;
}
function jh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: In, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Yu(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(Q(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(Q(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return Yd(e, n, t);
  }
  return t;
}
function Xu(e, t, n, r, s, a, o, i, c) {
  return e = Go(n, r, !0, e, s, a, o, i, c), e.context = Yu(null), n = e.current, r = $e(), s = rn(n), a = Pt(r, s), a.callback = t ?? null, tn(n, a, s), e.current.lanes = s, el(e, s, r), Ze(e, r), e;
}
function bs(e, t, n, r) {
  var s = t.current, a = $e(), o = rn(s);
  return n = Yu(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pt(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(s, t, o), e !== null && (bt(e, s, o, a), Tl(e, s, o)), o;
}
function ds(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qo(e, t) {
  hc(e, t), (e = e.alternate) && hc(e, t);
}
function Ch() {
  return null;
}
var Zu = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Yo(e) {
  this._internalRoot = e;
}
Ss.prototype.render = Yo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(Q(409));
  bs(e, t, null, null);
};
Ss.prototype.unmount = Yo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sn(function() {
      bs(null, e, null, null);
    }), t[zt] = null;
  }
};
function Ss(e) {
  this._internalRoot = e;
}
Ss.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Id();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && Td(e);
  }
};
function Xo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function js(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function gc() {
}
function Eh(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = ds(o);
        a.call(d);
      };
    }
    var o = Xu(t, r, e, 0, null, !1, !1, "", gc);
    return e._reactRootContainer = o, e[zt] = o.current, Fr(e.nodeType === 8 ? e.parentNode : e), Sn(), o;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = ds(c);
      i.call(d);
    };
  }
  var c = Go(e, 0, !1, null, null, !1, !1, "", gc);
  return e._reactRootContainer = c, e[zt] = c.current, Fr(e.nodeType === 8 ? e.parentNode : e), Sn(function() {
    bs(t, c, n, r);
  }), c;
}
function Cs(e, t, n, r, s) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof s == "function") {
      var i = s;
      s = function() {
        var c = ds(o);
        i.call(c);
      };
    }
    bs(t, o, e, s);
  } else o = Eh(n, t, e, s, r);
  return ds(o);
}
Ed = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wr(t.pendingLanes);
        n !== 0 && (go(t, n | 1), Ze(t, _e()), !(ae & 6) && (er = _e() + 500, un()));
      }
      break;
    case 13:
      Sn(function() {
        var r = Ft(e, 1);
        if (r !== null) {
          var s = $e();
          bt(r, e, 1, s);
        }
      }), qo(e, 1);
  }
};
yo = function(e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = $e();
      bt(t, e, 134217728, n);
    }
    qo(e, 134217728);
  }
};
Nd = function(e) {
  if (e.tag === 13) {
    var t = rn(e), n = Ft(e, t);
    if (n !== null) {
      var r = $e();
      bt(n, e, t, r);
    }
    qo(e, t);
  }
};
Id = function() {
  return oe;
};
Md = function(e, t) {
  var n = oe;
  try {
    return oe = e, t();
  } finally {
    oe = n;
  }
};
_a = function(e, t, n) {
  switch (t) {
    case "input":
      if (pa(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = gs(r);
            if (!s) throw Error(Q(90));
            od(r), pa(r, s);
          }
        }
      }
      break;
    case "textarea":
      cd(e, n);
      break;
    case "select":
      t = n.value, t != null && Wn(e, !!n.multiple, t, !1);
  }
};
gd = Bo;
yd = Sn;
var Nh = { usingClientEntryPoint: !1, Events: [nl, Dn, gs, pd, hd, Bo] }, hr = { findFiberByHostInstance: pn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ih = { bundleType: hr.bundleType, version: hr.version, rendererPackageName: hr.rendererPackageName, rendererConfig: hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = xd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: hr.findFiberByHostInstance || Ch, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kl.isDisabled && kl.supportsFiber) try {
    ms = kl.inject(Ih), It = kl;
  } catch {
  }
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nh;
lt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xo(t)) throw Error(Q(200));
  return jh(e, t, null, n);
};
lt.createRoot = function(e, t) {
  if (!Xo(e)) throw Error(Q(299));
  var n = !1, r = "", s = Zu;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Go(e, 1, !1, null, null, n, !1, r, s), e[zt] = t.current, Fr(e.nodeType === 8 ? e.parentNode : e), new Yo(t);
};
lt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(Q(188)) : (e = Object.keys(e).join(","), Error(Q(268, e)));
  return e = xd(t), e = e === null ? null : e.stateNode, e;
};
lt.flushSync = function(e) {
  return Sn(e);
};
lt.hydrate = function(e, t, n) {
  if (!js(t)) throw Error(Q(200));
  return Cs(null, e, t, !0, n);
};
lt.hydrateRoot = function(e, t, n) {
  if (!Xo(e)) throw Error(Q(405));
  var r = n != null && n.hydratedSources || null, s = !1, a = "", o = Zu;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Xu(t, null, e, 1, n ?? null, s, !1, a, o), e[zt] = t.current, Fr(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new Ss(t);
};
lt.render = function(e, t, n) {
  if (!js(t)) throw Error(Q(200));
  return Cs(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function(e) {
  if (!js(e)) throw Error(Q(40));
  return e._reactRootContainer ? (Sn(function() {
    Cs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zt] = null;
    });
  }), !0) : !1;
};
lt.unstable_batchedUpdates = Bo;
lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!js(n)) throw Error(Q(200));
  if (e == null || e._reactInternals === void 0) throw Error(Q(38));
  return Cs(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function Ju() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ju);
    } catch (e) {
      console.error(e);
    }
}
Ju(), Jc.exports = lt;
var ue = Jc.exports, em, yc = ue;
em = yc.createRoot, yc.hydrateRoot;
var tm = { exports: {} }, Es = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mh = f, Th = Symbol.for("react.element"), Lh = Symbol.for("react.fragment"), Ah = Object.prototype.hasOwnProperty, Dh = Mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rh = { key: !0, ref: !0, __self: !0, __source: !0 };
function nm(e, t, n) {
  var r, s = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Ah.call(t, r) && !Rh.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Th, type: e, key: a, ref: o, props: s, _owner: Dh.current };
}
Es.Fragment = Lh;
Es.jsx = nm;
Es.jsxs = nm;
tm.exports = Es;
var l = tm.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ph = {
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
const Oh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Z = (e, t) => {
  const n = f.forwardRef(
    ({
      color: r = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, h) => f.createElement(
      "svg",
      {
        ref: h,
        ...Ph,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(s) : a,
        className: ["lucide", `lucide-${Oh(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([v, y]) => f.createElement(v, y)),
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
const rm = Z("AlertCircle", [
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
const zh = Z("AlertTriangle", [
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
const Fh = Z("ArrowDownNarrowWide", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h4", key: "6d7r33" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h10", key: "1438ji" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = Z("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $h = Z("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wh = Z("ArrowUpDown", [
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
const Uh = Z("ArrowUpNarrowWide", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h10", key: "jvxblo" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sm = Z("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = Z("BarChart2", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vh = Z("Box", [
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
const Bh = Z("Calendar", [
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
const Qh = Z("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = Z("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hh = Z("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = Z("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = Z("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kh = Z("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = Z("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = Z("Download", [
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
const Gh = Z("Eraser", [
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
const Jo = Z("FileJson", [
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
const qh = Z("FileText", [
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
const Yh = Z("Folder", [
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
const Xh = Z("Info", [
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
const Zh = Z("Lasso", [
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
const ei = Z("LayoutGrid", [
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
const Jh = Z("LayoutList", [
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
const eg = Z("Link2Off", [
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
const tg = Z("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = Z("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = Z("Maximize", [
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
const rg = Z("Menu", [
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
const lg = Z("Minimize", [
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
const sg = Z("MoreVertical", [
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
const ag = Z("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const im = Z("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = Z("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = Z("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = Z("RefreshCw", [
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
const og = Z("ScanLine", [
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
const on = Z("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = Z("Settings", [
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
const dm = Z("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = Z("Star", [
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
const ig = Z("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = Z("Tag", [
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
const Wt = Z("Trash2", [
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
const cg = Z("Trash", [
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
const dg = Z("Type", [
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
const ug = Z("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mg = Z("Upload", [
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
const fg = Z("Workflow", [
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
const de = Z("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pg = Z("ZoomIn", [
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
const hg = Z("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = J;
async function ee(e) {
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
const um = (e) => typeof e == "object" && e !== null, wc = (e) => {
  if (typeof e == "string")
    return e;
  if (um(e) && typeof e.message == "string")
    return e.message;
};
async function ll(e) {
  let t;
  try {
    t = await e.json();
  } catch {
    throw e.ok ? new Error("Failed to parse JSON response") : new Error(`${e.status} ${e.statusText}`);
  }
  if (!e.ok) {
    let n = `${e.status} ${e.statusText}`;
    if (um(t)) {
      const r = "error" in t ? t.error : void 0, s = wc(r), a = "message" in t ? wc(t.message) : void 0;
      n = s ?? a ?? n;
    }
    throw new Error(n);
  }
  return t;
}
const gg = async () => {
  const e = await J.fetchApi("/meld/home-dir");
  return (await ee(e)).home;
}, ke = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  f.useEffect(() => {
    if (!t) return;
    const r = (s) => {
      s.key === "Escape" && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let us = !1;
const yg = (e) => {
  us = e, us && console.log("[Meld] Logger initialized in DEV mode (COMFYUI_MELD_DEV=true).");
}, vg = (...e) => {
  us && console.log("[Meld]", ...e);
}, wg = (...e) => {
  us && console.warn("[Meld]", ...e);
}, xg = (...e) => {
  console.error("[Meld]", ...e);
}, $ = {
  log: vg,
  warn: wg,
  error: xg,
  init: yg
};
function zl(e, t) {
  const n = e;
  return {
    images: Array.isArray(n == null ? void 0 : n.images) ? n.images : [],
    total: typeof (n == null ? void 0 : n.total) == "number" ? n.total : (t == null ? void 0 : t.total) ?? 0,
    offset: typeof (n == null ? void 0 : n.offset) == "number" ? n.offset : (t == null ? void 0 : t.offset) ?? 0,
    limit: typeof (n == null ? void 0 : n.limit) == "number" ? n.limit : (t == null ? void 0 : t.limit) ?? 0
  };
}
const Fl = async (e = 0, t = 30, n = "", r = "default", s = !1) => {
  const a = await J.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${s ? "&minimal=true" : ""}`
  );
  return ee(a);
}, mm = async (e) => {
  const t = await J.fetchApi(`/meld/image/${e}/details`);
  return ee(t);
}, _g = async (e, t = !1) => {
  const n = await J.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await ee(n);
}, eo = async (e) => {
  const t = await J.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return ee(t);
}, fm = async (e) => {
  const t = await J.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return ee(t);
}, xc = async (e, t) => {
  const n = await J.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await ee(n);
}, kg = async (e, t, n) => {
  const r = t !== void 0 ? `&threshold=${t}` : "", s = await J.fetchApi(`/meld/suggest-parents?id=${e}${r}`, { signal: n });
  try {
    return await ee(s);
  } catch {
    return [];
  }
}, ti = async (e) => {
  const t = await J.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await ee(t);
  } catch {
    return [];
  }
}, bg = async (e, t) => {
  const n = await J.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await ee(n);
}, Sg = async (e, t) => {
  const n = await J.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return ee(n);
}, pm = async (e, t, n) => {
  const r = await J.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await ee(r);
}, jg = async (e) => {
  const t = await J.fetchApi(`/meld/image/${e}/workflow`);
  return ee(t);
}, Cg = async (e) => {
  const t = await J.fetchApi(`/meld/image/${e}/snapshot_data`);
  return ee(t);
}, ra = (e, t) => {
  let n = e.replace(/\\/g, "/").split("/").pop() ?? "";
  return n === "." || n === ".." || n.startsWith("-") || (n = n.replace(/[\\:*?"<>|/\x00-\x1f\x7f\s]/g, "_"), n = n.replace(/[^a-zA-Z0-9\-_.]/g, "_"), n = n.replace(/\.{2,}/g, ".").replace(/[\s.]+$/, ""), !n || n === "." || n === ".." || n.startsWith("-") || n.length > 255) ? t : n;
}, hm = async (e, t, n, r, s) => {
  const a = await J.fetchApi("/meld/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t, resizeMode: n, resizeValue: r, resizeFilter: s })
  });
  if (!a.ok) {
    let v = `Failed to fetch image ${e}: ${a.statusText || a.status}`;
    try {
      await ee(a.clone());
    } catch (y) {
      const S = y instanceof Error ? y.message : String(y);
      S && (v = `Failed to fetch image ${e}: ${S}`);
    }
    throw new Error(v);
  }
  const o = (a.headers.get("Content-Type") || "").toLowerCase();
  if (o.includes("application/json") || o.includes("+json")) {
    let v = `Image ${e}: server returned JSON instead of binary data`;
    try {
      await ee(a.clone()), v = `Image ${e}: server returned a JSON response on the binary download path`;
    } catch (y) {
      const S = y instanceof Error ? y.message : String(y);
      S && (v = S);
    }
    throw new Error(v);
  }
  const i = `image_${e}.png`, c = a.headers.get("Content-Disposition");
  let d = i;
  if (c) {
    const v = c.match(/filename\*=([^;\s]+)/i);
    if (v != null && v[1]) {
      let y = v[1];
      const S = y.match(/^([A-Za-z0-9-]+)'[^']*'(.*)$/);
      S != null && S[2] && (y = S[2]);
      try {
        d = ra(decodeURIComponent(y), i);
      } catch {
        const _ = c.match(/filename="?([^"]+)"?/);
        _ != null && _[1] && (d = ra(_[1], i));
      }
    } else if (c.includes("filename=")) {
      const y = c.match(/filename="?([^"]+)"?/);
      y != null && y[1] && (d = ra(y[1], i));
    }
  }
  return { blob: await a.blob(), filename: d };
}, _c = 500, kc = 2 * 1024 * 1024 * 1024, Eg = async (e, t, n, r, s, a) => {
  const o = (await import("./jszip.min.js").then((x) => x.j)).default, i = new o(), c = e.length;
  if (c > _c)
    throw new Error(
      `ZIP entry limit reached (${_c} files). Please reduce the number of images.`
    );
  const d = /* @__PURE__ */ new Set();
  let h = 0, v = 0;
  for (const x of e) {
    a == null || a(h, c);
    const { blob: b, filename: m } = await hm(
      x,
      t,
      n,
      r,
      s
    );
    if (v += b.size, v > kc)
      throw new Error(
        `ZIP size limit reached (${kc / 1024 / 1024 / 1024} GB). Please reduce the number of images.`
      );
    let p = m;
    if (d.has(p)) {
      const u = p.lastIndexOf("."), g = u > 0 ? p.slice(0, u) : p, k = u > 0 ? p.slice(u) : "";
      let w = 2;
      for (; d.has(p); )
        p = `${g}_${w}${k}`, w++;
    }
    d.add(p), i.file(p, b), h += 1;
  }
  a == null || a(c, c);
  const y = await i.generateAsync({ type: "blob" }), S = window.URL.createObjectURL(y), _ = document.createElement("a");
  _.href = S, _.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(_), _.click(), window.URL.revokeObjectURL(S), document.body.removeChild(_);
}, Ng = async (e, t, n, r, s) => {
  const { blob: a, filename: o } = await hm(
    e,
    t,
    n,
    r,
    s
  ), i = window.URL.createObjectURL(a), c = document.createElement("a");
  c.href = i, c.download = o, document.body.appendChild(c), c.click(), window.URL.revokeObjectURL(i), document.body.removeChild(c);
}, Ig = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await J.fetchApi(n);
  return ee(r);
}, Mg = async () => {
  const e = await J.fetchApi("/meld/search-suggestions");
  return ee(e);
}, Tg = async () => {
  const e = await J.fetchApi("/meld/search-keywords");
  return ee(e);
}, Lg = async () => {
  const e = await J.fetchApi("/meld/search-config");
  return ee(e);
}, Ag = async () => {
  const e = await J.fetchApi("/meld/favorites");
  return ee(e);
}, Dg = async (e, t) => {
  const n = await J.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await ee(n);
}, bc = async (e) => {
  const t = await J.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await ee(t);
}, Rg = async (e, t, n) => {
  const r = await J.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await ee(r);
}, Pg = {
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
  "fullscreen.details.show_core_prompt": !1,
  "fullscreen.details.core_prompt_count": 10,
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
  "viewer.details.show_core_prompt": !1,
  "viewer.details.core_prompt_count": 10,
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
}, gm = async () => {
  let e;
  try {
    const t = await J.fetchApi("/meld/settings");
    e = await ee(t);
  } catch (t) {
    return $.error("Failed to fetch settings, using defaults", t), Pg;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Og = async (e, t) => {
  const n = await J.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await ee(n);
}, zg = async () => {
  const e = await J.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return ee(e);
};
function gr(e) {
  return Array.from(new Map(e.map((t) => [t.id, t])).values());
}
const Fg = (e, t) => {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = gr(e.images.filter((o) => !n.has(o.id))), s = gr(
        e.lineageImages.filter((o) => !n.has(o.id))
      ), a = Math.max(
        0,
        e.pagination.total + (r.length - e.images.length)
      );
      return {
        ...e,
        images: r,
        lineageImages: s,
        pagination: {
          ...e.pagination,
          total: a
        }
      };
    }
    case "ADD_IMAGES": {
      const n = [...e.images, ...t.payload], r = gr(n).sort(
        (a, o) => o.created_at - a.created_at
      ), s = Math.max(
        0,
        e.pagination.total + (r.length - e.images.length)
      );
      return {
        ...e,
        images: r,
        pagination: {
          ...e.pagination,
          total: s
        }
      };
    }
    case "UPDATE_IMAGE": {
      const n = t.payload, r = e.images.map(
        (a) => a.id === n.id ? n : a
      ), s = e.lineageImages.map(
        (a) => a.id === n.id ? n : a
      );
      return {
        ...e,
        images: r,
        lineageImages: s
      };
    }
    case "SET_IMAGES": {
      const { images: n, total: r, offset: s } = t.payload, a = gr(n);
      return {
        ...e,
        images: a,
        isLoading: !1,
        error: null,
        pagination: {
          total: r,
          offset: s,
          limit: e.pagination.limit,
          // hasMore must use deduped length to preserve dedupe-aware pagination.
          hasMore: s + a.length < r
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: n, total: r, offset: s } = t.payload, a = [...e.images, ...n], o = gr(a);
      return {
        ...e,
        images: o,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: r,
          offset: s,
          // hasMore must be based on total unique loaded items after merge.
          hasMore: o.length < r
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
    default:
      return e;
  }
};
function ym(e) {
  if (typeof e == "number")
    return !1;
  const t = e.initialMaskMode;
  return t ? t === "apply" || t === "run" ? t : t === !0 ? "run" : !1 : !1;
}
const $g = (e, t) => {
  switch (t.type) {
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
    case "OPEN_VIEWER": {
      const n = t.payload, r = ym(n);
      if (!r)
        return e;
      const s = typeof n == "number" ? n : n.id;
      return {
        ...e,
        activeModal: {
          type: "mask_editor",
          imageId: s,
          mode: r
        }
      };
    }
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
}, Wg = (e, t) => {
  switch (t.type) {
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
        const i = new Set(e.selectedIds);
        return i.add(t.payload), {
          ...e,
          selectedIds: i,
          lastSelectedId: t.payload
        };
      }
      const n = e.images.findIndex((i) => i.id === e.lastSelectedId), r = e.images.findIndex((i) => i.id === t.payload);
      if (n === -1 || r === -1)
        return e;
      const [s, a] = [Math.min(n, r), Math.max(n, r)], o = new Set(e.selectedIds);
      for (let i = s; i <= a; i++) {
        const c = e.images[i];
        c && o.add(c.id);
      }
      return {
        ...e,
        selectedIds: o,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL": {
      const n = e.images[0];
      return {
        ...e,
        selectedIds: new Set(e.images.map((r) => r.id)),
        lastSelectedId: n ? n.id : null
      };
    }
    case "CLEAR_SELECTION":
      return {
        ...e,
        selectedIds: /* @__PURE__ */ new Set(),
        lastSelectedId: null
      };
    case "DESELECT_IMAGES": {
      const n = new Set(e.selectedIds);
      let r = e.lastSelectedId;
      return t.payload.forEach((s) => {
        n.delete(s), r === s && (r = null);
      }), {
        ...e,
        selectedIds: n,
        lastSelectedId: r
      };
    }
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = new Set(e.selectedIds);
      for (const s of n)
        r.delete(s);
      return {
        ...e,
        selectedIds: r,
        lastSelectedId: e.lastSelectedId !== null && n.has(e.lastSelectedId) ? null : e.lastSelectedId
      };
    }
    default:
      return e;
  }
}, Ug = (e, t) => {
  switch (t.type) {
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
      return t.payload["gallery.initial_load_count"] !== void 0 && (r.limit = t.payload["gallery.initial_load_count"]), {
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
    case "SHOW_TOAST": {
      const n = t.payload;
      return typeof n == "string" ? {
        ...e,
        toastMessage: n,
        toastType: "info"
      } : {
        ...e,
        toastMessage: n.message,
        toastType: n.type || "info"
      };
    }
    case "HIDE_TOAST":
      return {
        ...e,
        toastMessage: null
      };
    default:
      return e;
  }
};
function Sc(e, t) {
  const n = e.searchQuery.trim() !== "";
  return e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? t ?? [] : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
    (r) => r.exists !== !1 && (e.settings["gallery.show_parent_images"] || n || !r.has_children)
  );
}
const Vg = (e, t) => {
  var n, r, s, a, o;
  switch (t.type) {
    case "SET_IMAGES": {
      const { images: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !i.some((h) => h.id === c)) {
        const h = e.images.find((v) => v.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        h ? d = h : c = null;
      }
      return {
        ...e,
        viewerImageId: c,
        viewerFallbackImage: d
      };
    }
    case "OPEN_VIEWER": {
      const i = t.payload, c = typeof i == "number" ? i : i.id, d = typeof i == "number" ? "gallery" : i.mode, h = typeof i != "number" && i.mode === "lighttable" ? i.slotId : null, v = ym(i), y = e.viewerMode === "lineage" && d === "lineage" && e.lineageImages.some((S) => S.id === c);
      return {
        ...e,
        viewerImageId: c,
        viewerMode: d,
        viewerLightTableSlotId: h,
        viewerInitialMaskMode: v,
        lineageImages: y ? e.lineageImages : []
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
      const c = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Sc(e, (s = t.payload) == null ? void 0 : s.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((S) => S.id === e.viewerImageId);
      if (h === -1 || h === d.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || h === d.length - 1 && !c)
        return e;
      const v = (h + 1) % d.length, y = d[v];
      return y ? {
        ...e,
        viewerImageId: y.id
      } : e;
    }
    case "PREVIOUS_IMAGE": {
      const c = ((a = t.payload) == null ? void 0 : a.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Sc(e, (o = t.payload) == null ? void 0 : o.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((S) => S.id === e.viewerImageId);
      if (h === -1 || h === 0 && !c)
        return e;
      const v = (h - 1 + d.length) % d.length, y = d[v];
      return y ? {
        ...e,
        viewerImageId: y.id
      } : e;
    }
    default:
      return e;
  }
}, Bg = [
  Vg,
  Fg,
  Wg,
  $g,
  Ug
];
function Qg(e, t) {
  return t.type === "REFRESH" ? e : t.type === "SET_VIEW_SCOPE" ? {
    ...e,
    viewScope: t.payload,
    images: [],
    selectedIds: /* @__PURE__ */ new Set(),
    viewerImageId: null,
    pagination: {
      ...e.pagination,
      offset: 0,
      total: 0,
      hasMore: !1
    }
  } : Bg.reduce((n, r) => r(n, t), e);
}
const Hg = {
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
    "fullscreen.details.show_core_prompt": !1,
    "fullscreen.details.core_prompt_count": 10,
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
    "viewer.details.show_core_prompt": !1,
    "viewer.details.core_prompt_count": 10,
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
function Kg(e, t) {
  return Qg(e, t);
}
const vm = f.createContext(void 0), Gg = ({ children: e }) => {
  const [t, n] = f.useReducer(Kg, Hg), r = f.useRef(t.images.length), s = f.useRef(0), a = f.useRef(/* @__PURE__ */ new Map());
  f.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = f.useCallback(
    async (_, x, b) => {
      const m = t.settings["gallery.max_load_count"], p = 200;
      let u = _;
      for (; u < Math.min(x, m) && b === s.current; )
        try {
          const g = Math.min(p, m - u);
          $.log("Background fetch: starting chunk", {
            offset: u,
            limit: g
          });
          const k = await Fl(
            u,
            g,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (b !== s.current) break;
          const { images: w, total: C } = zl(k, {
            total: x
          });
          if (n({
            type: "APPEND_IMAGES",
            payload: {
              images: w,
              total: C,
              offset: u,
              limit: g
            }
          }), u += w.length, w.length === 0 || u >= C) break;
          await new Promise((T) => setTimeout(T, 300));
        } catch (g) {
          $.error("Background fetch failed", g);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = f.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const _ = performance.now(), x = ++s.current;
    try {
      const b = t.searchQuery.trim() !== "", m = t.settings["gallery.initial_load_count"];
      $.log("refreshImages: starting initial fetch", {
        isSearch: b,
        fetchLimit: m,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const p = await Fl(
        0,
        m,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), u = zl(p, {
        total: t.pagination.total,
        offset: 0,
        limit: m
      }), g = performance.now() - _;
      $.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: g.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > m && o(m, u.total, x);
    } catch (b) {
      $.error("refreshImages: fetch failed", b), n({
        type: "SET_ERROR",
        payload: b instanceof Error ? b.message : String(b)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    t.pagination.total,
    o
  ]), c = f.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const _ = performance.now();
    try {
      const x = r.current, b = t.searchQuery.trim() !== "", m = t.pagination.limit;
      $.log("loadMoreImages: starting fetch", {
        nextOffset: x,
        fetchLimit: m,
        isSearch: b
      });
      const p = await Fl(
        x,
        m,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), u = zl(p, {
        total: t.pagination.total,
        offset: x,
        limit: m
      }), g = performance.now() - _;
      $.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: g.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (x) {
      $.error("loadMoreImages: fetch failed", x), n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.pagination.total,
    t.searchQuery,
    t.viewScope
  ]), d = f.useCallback(async () => {
    try {
      const _ = await Ag();
      n({ type: "SET_FAVORITES", payload: _ });
    } catch (_) {
      $.error("Failed to load favorites", _);
    }
  }, []), h = f.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const _ = Array.from(t.selectedIds), b = t.images.filter((m) => t.selectedIds.has(m.id)).some((m) => m.parent_id || m.has_children);
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: _,
        hasLineage: b,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = f.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const _ = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const b = (await eo(_)).restored_ids || _;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: b }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (x) {
      n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [t.selectedIds, t.viewScope]), y = f.useCallback(
    async (_, x) => {
      try {
        await Og(_, x), n({ type: "SET_SETTINGS", payload: { [_]: x } });
      } catch (b) {
        n({
          type: "SET_ERROR",
          payload: b instanceof Error ? b.message : String(b)
        });
      }
    },
    []
  ), S = f.useCallback(
    async (_) => {
      const x = t.images.find((u) => u.id === _);
      if (x && !x.is_minimal && "positive_prompt_keywords" in x)
        return x;
      const b = t.lineageImages.find((u) => u.id === _);
      if (b && !b.is_minimal && "positive_prompt_keywords" in b)
        return b;
      const m = a.current.get(_);
      if (m)
        return m;
      const p = (async () => {
        try {
          $.log("fetchFullImageDetails: fetching full data", { id: _ });
          const u = await mm(_);
          return n({ type: "UPDATE_IMAGE", payload: u }), u;
        } finally {
          a.current.delete(_);
        }
      })();
      return a.current.set(_, p), p;
    },
    [t.images, t.lineageImages]
  );
  return f.useEffect(() => {
    (async () => {
      try {
        const x = await gm();
        n({ type: "SET_SETTINGS", payload: x });
      } catch (x) {
        $.error("Failed to load settings", x);
      }
    })();
  }, []), f.useEffect(() => {
    d();
  }, [d]), f.useEffect(() => {
    const _ = () => {
      i();
    }, x = (m) => {
      const p = m.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: p }
      });
    }, b = (m) => {
      const p = m.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: p.new_count || 0,
          updatedCount: p.updated_count || 0,
          totalCount: p.total_count || 0,
          progress: {
            current: p.total_count || t.scanStatus.progress.total,
            total: p.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), i();
    };
    return window.addEventListener("meld-refresh", _), window.addEventListener("meld-scan-progress", x), window.addEventListener("meld-scan-finished", b), () => {
      window.removeEventListener("meld-refresh", _), window.removeEventListener("meld-scan-progress", x), window.removeEventListener("meld-scan-finished", b);
    };
  }, [i, t.scanStatus.progress.total]), f.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ l.jsx(
    vm.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: h,
        restoreSelected: v,
        updateSetting: y,
        fetchFullImageDetails: S
      },
      children: e
    }
  );
}, ie = () => {
  const e = f.useContext(vm);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, ft = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), s = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${s}&size=${t}`}`;
}, ni = (e) => {
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
}, ri = async () => {
  const e = await J.fetchApi("/meld/tags");
  return ee(e);
}, qg = async (e) => {
  const t = await J.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return ee(t);
}, Yg = async (e) => {
  const t = await J.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await ee(t);
}, Xg = async (e, t) => {
  const n = await J.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await ee(n);
}, Zg = (e) => {
  if (typeof e != "object" || e === null)
    return !1;
  const t = e;
  return typeof t.name == "string" && typeof t.subfolder == "string" && typeof t.type == "string";
}, Jg = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await J.fetchApi("/upload/image", {
    method: "POST",
    body: t
  }), r = await ll(n);
  if (!Zg(r))
    throw new Error("Invalid upload image response shape");
  return r;
}, ey = async (e, t, n = !1, r) => {
  const s = await J.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await ee(s);
  } catch (a) {
    return $.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, ty = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const s = await J.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await ee(s);
  } catch (a) {
    return $.error("Failed to fetch folder metadata", a), {};
  }
}, ny = async (e, t, n) => {
  const r = await J.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await ee(r)).count;
  } catch {
    return 0;
  }
}, ry = async (e) => {
  const t = await J.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await ee(t);
}, ly = async () => {
  const e = await J.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await ee(e);
}, wm = () => {
  const { dispatch: e } = ie(), [t, n] = f.useState(() => {
    const N = localStorage.getItem("meld-import-config"), F = {
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
        const D = JSON.parse(N);
        return { ...F, ...D, tags: [] };
      } catch {
        return F;
      }
    return F;
  });
  f.useEffect(() => {
    const { tags: N, ...F } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(F));
  }, [t]);
  const [r, s] = f.useState([]), [a, o] = f.useState([]), [i, c] = f.useState(0), [d, h] = f.useState(!1), [v, y] = f.useState([]), [S, _] = f.useState(""), [x, b] = f.useState(!1), [m, p] = f.useState(null), u = f.useRef(!1), g = (N) => {
    N.target === N.currentTarget && (u.current = !0);
  }, k = (N) => {
    N.target === N.currentTarget && u.current && e({ type: "CLOSE_MODAL" }), u.current = !1;
  };
  f.useEffect(() => {
    (async () => {
      try {
        const F = await gg();
        n((D) => D.custom_path ? D : { ...D, custom_path: F });
      } catch (F) {
        $.error("Failed to fetch home directory:", F);
      }
    })();
  }, []), f.useEffect(() => {
    const N = new AbortController();
    return (async () => {
      const D = t.type === "custom" ? t.custom_path : t.subfolder;
      if ($.log(`loadFolders started. Path: "${D}", Type: "${t.type}"`), t.type === "custom" && !D) {
        $.log("Custom path is empty, skipping load."), s([]), o([]), c(0), h(!1);
        return;
      }
      h(!0);
      const V = D, j = t.type;
      try {
        $.log("Step 1: Fast load starting...");
        const E = await ey(t.type, D, !0, N.signal);
        if (N.signal.aborted) {
          $.log("Step 1: Aborted.");
          return;
        }
        const L = Array.isArray(E == null ? void 0 : E.folders) ? E.folders : [], O = Array.isArray(E == null ? void 0 : E.images) ? E.images : [];
        $.log(`Step 1 complete. Found ${L.length} folders, ${O.length} images.`), s(L), o(O), c(null);
        const M = L.map((A) => A.name);
        M.length > 0 && ($.log(`Step 2: Metadata fetch starting for ${M.length} folders...`), ty(j, V, M, N.signal).then((A) => {
          if (N.signal.aborted) {
            $.log("Step 2: Aborted.");
            return;
          }
          $.log("Step 2: Metadata fetch complete."), s(
            (P) => P.map((W) => {
              const H = A[W.name];
              return H ? { ...W, count: H.count, preview: H.preview } : W;
            })
          );
        }).catch((A) => {
          A.name !== "AbortError" && $.error("Step 2: Metadata fetch failed:", A);
        })), $.log("Step 3: Path image count starting..."), ny(j, V, N.signal).then((A) => {
          if (N.signal.aborted) {
            $.log("Step 3: Aborted.");
            return;
          }
          $.log(`Step 3: Path image count complete: ${A}`), c(A);
        }).catch((A) => {
          A.name !== "AbortError" && $.error("Step 3: Path image count failed:", A);
        });
      } catch (E) {
        if (E.name === "AbortError") {
          $.log("Request aborted.");
          return;
        }
        $.error("Failed to load folders:", E), s([]), o([]), c(0);
      } finally {
        N.signal.aborted || h(!1);
      }
    })(), () => {
      N.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const w = f.useCallback(async () => {
    b(!0);
    try {
      const N = await ri();
      y(N);
    } catch (N) {
      $.error("Failed to fetch tags:", N);
    } finally {
      b(!1);
    }
  }, []);
  f.useEffect(() => {
    w();
  }, [w]), ke({
    onEscape: f.useCallback(() => {
      m ? p(null) : e({ type: "CLOSE_MODAL" });
    }, [m, e])
  });
  const C = f.useMemo(() => v.filter(
    (N) => N.name.toLowerCase().includes(S.toLowerCase()) && !t.tags.includes(N.name)
  ), [v, S, t.tags]), T = (N) => {
    const F = N.trim();
    F && !t.tags.includes(F) && (n({ ...t, tags: [...t.tags, F] }), _(""));
  }, z = (N) => {
    n({ ...t, tags: t.tags.filter((F) => F !== N) });
  }, I = (N) => {
    N.key === "Enter" && S.trim() && (N.preventDefault(), T(S.trim()));
  }, R = async () => {
    try {
      await ry(t), e({
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
      $.error("Failed to start scan:", N), alert(`Failed to start scan: ${N}`);
    }
  }, U = (N) => {
    if (t.type === "custom") {
      const F = t.custom_path.includes("\\") ? "\\" : "/", D = t.custom_path.endsWith(F) ? `${t.custom_path}${N}` : `${t.custom_path}${F}${N}`;
      n({ ...t, custom_path: D });
    } else {
      const F = t.subfolder ? `${t.subfolder}/${N}` : N;
      n({ ...t, subfolder: F });
    }
  }, B = () => {
    if (t.type === "custom") {
      const N = t.custom_path.includes("\\") ? "\\" : "/", F = t.custom_path.split(N);
      if (F.length > 1) {
        F.pop();
        let D = F.join(N);
        D === "" && N === "/" && (D = "/"), n({ ...t, custom_path: D });
      }
    } else {
      const N = t.subfolder.split("/");
      N.pop(), n({ ...t, subfolder: N.join("/") });
    }
  };
  return ue.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: k,
        children: [
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (N) => N.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ l.jsx(de, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-import-container", children: [
                  /* @__PURE__ */ l.jsxs("div", { className: "meld-import-sidebar", children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                      /* @__PURE__ */ l.jsxs(
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
                            /* @__PURE__ */ l.jsx("option", { value: "output", children: "Output Directory" }),
                            /* @__PURE__ */ l.jsx("option", { value: "input", children: "Input Directory" }),
                            /* @__PURE__ */ l.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("span", { className: "meld-form-label", children: "Images Found" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-path-count", children: i === null ? /* @__PURE__ */ l.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${i} images` })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-form-group--checkbox", children: /* @__PURE__ */ l.jsxs("label", { children: [
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (N) => n({ ...t, recursive: N.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("label", { htmlFor: "link-strategy", children: "Source Linking" }),
                      /* @__PURE__ */ l.jsxs(
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
                            /* @__PURE__ */ l.jsx("option", { value: "none", children: "Do not link" }),
                            /* @__PURE__ */ l.jsx("option", { value: "new_only", children: "Only for new images" }),
                            /* @__PURE__ */ l.jsx("option", { value: "all", children: "Reset for all images" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((N) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        N,
                        /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => z(N),
                            children: /* @__PURE__ */ l.jsx(de, { size: 12 })
                          }
                        )
                      ] }, N)) }),
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ l.jsx(on, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: S,
                            onChange: (N) => _(N.target.value),
                            onKeyDown: I
                          }
                        ),
                        S.trim() && !t.tags.includes(S.trim()) && /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => T(S),
                            children: /* @__PURE__ */ l.jsx(Ns, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : C.length === 0 ? S && /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        S
                      ] }) : C.map((N) => /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => T(N.name),
                          children: N.name
                        },
                        N.id
                      )) })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ l.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn--primary",
                        onClick: R,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ l.jsx(qr, { size: 16 }),
                          "Start Import"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "meld-import-browser", children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-browser-header", children: [
                      /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-browser-back",
                          disabled: t.type === "custom" ? t.custom_path === "/" || !t.custom_path.includes("/") && !t.custom_path.includes("\\") : !t.subfolder,
                          onClick: B,
                          children: [
                            /* @__PURE__ */ l.jsx(om, { size: 16 }),
                            "Back"
                          ]
                        }
                      ),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-browser-path-container", children: t.type === "custom" ? /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          type: "text",
                          className: "meld-browser-path-input",
                          value: t.custom_path,
                          onChange: (N) => n({ ...t, custom_path: N.target.value }),
                          placeholder: "Enter absolute path..."
                        }
                      ) : /* @__PURE__ */ l.jsxs("div", { className: "meld-browser-path-display", children: [
                        /* @__PURE__ */ l.jsxs("span", { className: "meld-browser-path-type", children: [
                          t.type,
                          "/"
                        ] }),
                        t.subfolder
                      ] }) })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-folder-list", children: d ? /* @__PURE__ */ l.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && a.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      r.map((N) => /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          className: "meld-folder-item",
                          onClick: () => U(N.name),
                          onKeyDown: (F) => {
                            (F.key === "Enter" || F.key === " ") && (F.preventDefault(), U(N.name));
                          },
                          "aria-label": `Open folder ${N.name}`,
                          children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-folder-icon-wrapper", children: N.preview ? /* @__PURE__ */ l.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: ft(N.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ l.jsx(Yh, { size: 16 }) }),
                            /* @__PURE__ */ l.jsx("span", { className: "meld-folder-name", children: N.name }),
                            /* @__PURE__ */ l.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${N.count === null ? "meld-folder-count--loading" : ""}`,
                                children: N.count !== null ? `${N.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ l.jsx(Zo, { size: 14 })
                          ]
                        },
                        N.name
                      )),
                      a.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-browser-image-grid", children: a.map((N) => /* @__PURE__ */ l.jsx(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          className: "meld-browser-image-item",
                          onClick: () => p(N),
                          onKeyDown: (F) => {
                            (F.key === "Enter" || F.key === " ") && (F.preventDefault(), p(N));
                          },
                          "aria-label": `Preview ${N.filename}`,
                          children: /* @__PURE__ */ l.jsx(
                            "img",
                            {
                              src: ft(N, 120),
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
          m && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (N) => {
                N.stopPropagation(), p(null);
              },
              children: /* @__PURE__ */ l.jsxs("div", { className: "meld-import-preview-content", onClick: (N) => N.stopPropagation(), children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-import-preview-close",
                      onClick: () => p(null),
                      children: /* @__PURE__ */ l.jsx(de, { size: 24 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx("img", { src: ft(m, 400), alt: m.filename })
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-import-preview-info", children: m.filename })
              ] })
            }
          )
        ]
      }
    ),
    document.fullscreenElement || document.body
  );
}, xm = "meld-download-options", sy = [
  { value: "lanczos", label: "Lanczos (high quality)" },
  { value: "bicubic", label: "Bicubic" },
  { value: "bilinear", label: "Bilinear" },
  { value: "box", label: "Box" },
  { value: "hamming", label: "Hamming" },
  { value: "nearest", label: "Nearest (pixel art)" }
];
function ay() {
  try {
    const e = localStorage.getItem(xm);
    if (e) {
      const t = JSON.parse(e), n = t.removeMetadata, r = n === !0 || n === "true" || typeof n == "number" && n === 1, a = ["none", "percent", "max_edge"].includes(t.resizeMode) ? t.resizeMode : "none", o = typeof t.resizeValue == "number" && t.resizeValue > 0 ? t.resizeValue : 100, c = [
        "lanczos",
        "bicubic",
        "bilinear",
        "box",
        "hamming",
        "nearest"
      ].includes(t.resizeFilter) ? t.resizeFilter : "lanczos";
      return {
        format: t.format === "raw" ? "raw" : "zip",
        removeMetadata: r,
        resizeMode: a,
        resizeValue: o,
        resizeFilter: c
      };
    }
  } catch {
  }
  return {
    format: "zip",
    removeMetadata: !1,
    resizeMode: "none",
    resizeValue: 100,
    resizeFilter: "lanczos"
  };
}
function oy(e) {
  try {
    localStorage.setItem(xm, JSON.stringify(e));
  } catch {
  }
}
const jc = "meld-download-modal-title", iy = ({ imageIds: e, onSuccess: t, onClose: n }) => {
  const [r, s] = f.useState(() => ay()), { format: a, removeMetadata: o, resizeMode: i, resizeValue: c, resizeFilter: d } = r, [h, v] = f.useState(!1), y = f.useRef(!0), [S, _] = f.useState(null), [x, b] = f.useState(String(c)), m = f.useRef(!1);
  f.useEffect(() => () => {
    y.current = !1;
  }, []), f.useEffect(() => {
    oy(r);
  }, [r]), f.useEffect(() => {
    b(String(c));
  }, [c]);
  const p = (I) => {
    I.target === I.currentTarget && (m.current = !0);
  }, u = (I) => {
    I.target === I.currentTarget && m.current && (h || n()), m.current = !1;
  };
  ke({
    onEscape: () => {
      h || n();
    }
  });
  const g = (I) => {
    b(I);
    const R = Number(I);
    if (!Number.isFinite(R) || R <= 0)
      return;
    const N = Math.min(i === "percent" ? 99 : 99999, Math.max(1, Math.round(R)));
    s((F) => ({ ...F, resizeValue: N }));
  }, k = async () => {
    if (e.length === 0) {
      n();
      return;
    }
    y.current = !0, v(!0);
    const I = e.length;
    _({ current: 0, total: I });
    try {
      if (a === "zip")
        await Eg(
          e,
          o,
          i,
          c,
          d,
          (R, U) => {
            y.current && _({ current: R, total: U });
          }
        );
      else {
        let R = 0;
        for (const U of e) {
          if (!y.current) break;
          _({ current: R, total: I }), await Ng(
            U,
            o,
            i,
            c,
            d
          ), R += 1, y.current && _({ current: R, total: I }), await new Promise((B) => requestAnimationFrame(() => B()));
        }
      }
      if (!y.current) return;
      n(), t == null || t();
    } catch (R) {
      if (!y.current) return;
      $.error("Download failed:", R), alert("Failed to download images.");
    } finally {
      y.current && (v(!1), _(null));
    }
  }, w = i === "percent" ? "%" : "px", C = 1, T = i === "percent" ? 99 : 99999, z = i === "percent" ? "1-99" : "Max edge (px)";
  return ue.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: p,
        onMouseUp: u,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content",
            onClick: (I) => I.stopPropagation(),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": jc,
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                  /* @__PURE__ */ l.jsx(Gr, { size: 18 }),
                  /* @__PURE__ */ l.jsxs("h3", { id: jc, style: { margin: 0 }, children: [
                    "Download (",
                    e.length,
                    " image",
                    e.length > 1 ? "s" : "",
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: n,
                    disabled: h,
                    children: /* @__PURE__ */ l.jsx(de, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", style: { padding: "20px" }, children: [
                /* @__PURE__ */ l.jsxs("div", { style: { marginBottom: "20px" }, children: [
                  /* @__PURE__ */ l.jsx(
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
                  /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: "16px" }, children: [
                    /* @__PURE__ */ l.jsxs(
                      "label",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          cursor: "pointer"
                        },
                        children: [
                          /* @__PURE__ */ l.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "format",
                              value: "zip",
                              checked: a === "zip",
                              onChange: () => s((I) => ({ ...I, format: "zip" })),
                              disabled: h
                            }
                          ),
                          "ZIP (Single File)"
                        ]
                      }
                    ),
                    /* @__PURE__ */ l.jsxs(
                      "label",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          cursor: "pointer"
                        },
                        children: [
                          /* @__PURE__ */ l.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "format",
                              value: "raw",
                              checked: a === "raw",
                              onChange: () => s((I) => ({ ...I, format: "raw" })),
                              disabled: h
                            }
                          ),
                          "Raw (Multiple Files)"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ l.jsxs("div", { style: { marginBottom: "20px" }, children: [
                  /* @__PURE__ */ l.jsx(
                    "label",
                    {
                      htmlFor: "resize-value",
                      style: {
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "bold"
                      },
                      children: "Resize"
                    }
                  ),
                  /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: [
                    /* @__PURE__ */ l.jsxs(
                      "label",
                      {
                        style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                        children: [
                          /* @__PURE__ */ l.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "resizeMode",
                              value: "none",
                              checked: i === "none",
                              onChange: () => s((I) => ({ ...I, resizeMode: "none" })),
                              disabled: h
                            }
                          ),
                          "No resize"
                        ]
                      }
                    ),
                    /* @__PURE__ */ l.jsxs(
                      "label",
                      {
                        style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                        children: [
                          /* @__PURE__ */ l.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "resizeMode",
                              value: "percent",
                              checked: i === "percent",
                              onChange: () => s((I) => ({ ...I, resizeMode: "percent", resizeValue: 50 })),
                              disabled: h
                            }
                          ),
                          "Resize (percentage)"
                        ]
                      }
                    ),
                    /* @__PURE__ */ l.jsxs(
                      "label",
                      {
                        style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                        children: [
                          /* @__PURE__ */ l.jsx(
                            "input",
                            {
                              type: "radio",
                              name: "resizeMode",
                              value: "max_edge",
                              checked: i === "max_edge",
                              onChange: () => s((I) => ({ ...I, resizeMode: "max_edge", resizeValue: 1024 })),
                              disabled: h
                            }
                          ),
                          "Resize (max edge)"
                        ]
                      }
                    )
                  ] }),
                  i !== "none" && /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "10px",
                        paddingLeft: "4px"
                      },
                      children: [
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            type: "number",
                            id: "resize-value",
                            min: C,
                            max: T,
                            step: 1,
                            value: x,
                            placeholder: z,
                            onChange: (I) => g(I.target.value),
                            disabled: h,
                            style: {
                              width: "100px",
                              padding: "4px 8px",
                              borderRadius: "4px",
                              border: "1px solid var(--border-color, #555)",
                              background: "var(--comfy-input-bg, #1a1a1a)",
                              color: "inherit",
                              fontSize: "14px"
                            }
                          }
                        ),
                        /* @__PURE__ */ l.jsx("span", { style: { fontSize: "13px" }, children: w }),
                        i === "percent" && /* @__PURE__ */ l.jsx("span", { style: { fontSize: "12px", color: "var(--meld-text-secondary)" }, children: "(1-99)" }),
                        i === "max_edge" && /* @__PURE__ */ l.jsx("span", { style: { fontSize: "12px", color: "var(--meld-text-secondary)" }, children: "(max edge px)" })
                      ]
                    }
                  ),
                  i !== "none" && /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "10px",
                        paddingLeft: "4px"
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("label", { htmlFor: "resize-filter", style: { fontSize: "13px" }, children: "Algorithm:" }),
                        /* @__PURE__ */ l.jsx(
                          "select",
                          {
                            id: "resize-filter",
                            value: d,
                            onChange: (I) => s((R) => ({
                              ...R,
                              resizeFilter: I.target.value
                            })),
                            disabled: h,
                            style: {
                              padding: "4px 8px",
                              borderRadius: "4px",
                              border: "1px solid var(--border-color, #555)",
                              background: "var(--comfy-input-bg, #1a1a1a)",
                              color: "inherit",
                              fontSize: "13px"
                            },
                            children: sy.map((I) => /* @__PURE__ */ l.jsx("option", { value: I.value, children: I.label }, I.value))
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ l.jsxs("div", { children: [
                  /* @__PURE__ */ l.jsx(
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
                  /* @__PURE__ */ l.jsxs(
                    "label",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer"
                      },
                      children: [
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: o,
                            onChange: (I) => s((R) => ({ ...R, removeMetadata: I.target.checked })),
                            disabled: h
                          }
                        ),
                        "Remove metadata (ComfyUI workflow data) from downloaded images"
                      ]
                    }
                  )
                ] })
              ] }),
              h && S && /* @__PURE__ */ l.jsxs(
                "div",
                {
                  style: {
                    padding: "12px 20px",
                    borderTop: "1px solid var(--border-color, #555)"
                  },
                  children: [
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "8px",
                          fontSize: "13px"
                        },
                        children: [
                          /* @__PURE__ */ l.jsx("span", { children: `${S.total} images - Processing ${S.current + 1 > S.total ? S.total : S.current + 1} of ${S.total}...` }),
                          /* @__PURE__ */ l.jsxs("span", { style: { color: "var(--meld-text-secondary)" }, children: [
                            Math.round(S.current / Math.max(1, S.total) * 100),
                            "%"
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      "div",
                      {
                        role: "progressbar",
                        "aria-label": "Download progress",
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": Math.round(
                          S.current / Math.max(1, S.total) * 100
                        ),
                        style: {
                          width: "100%",
                          height: "4px",
                          background: "var(--comfy-input-bg, #1a1a1a)",
                          borderRadius: "2px",
                          overflow: "hidden"
                        },
                        children: /* @__PURE__ */ l.jsx(
                          "div",
                          {
                            style: {
                              height: "100%",
                              borderRadius: "2px",
                              transition: "width 0.3s ease",
                              width: `${S.current / Math.max(1, S.total) * 100}%`,
                              background: "var(--meld-accent, #4a9eff)"
                            }
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn--secondary",
                    onClick: n,
                    disabled: h,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn--primary",
                    onClick: k,
                    disabled: h,
                    style: { display: "flex", alignItems: "center", gap: "8px" },
                    children: h && S ? `Downloading ${Math.min(S.current + 1, S.total)}/${S.total}...` : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx(Gr, { size: 16 }),
                      " Download"
                    ] })
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Cc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, h) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const y = t;
      t = h ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((S) => S(t, y));
    }
  }, s = () => t, i = { setState: r, getState: s, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, s, i);
  return i;
}, cy = (e) => e ? Cc(e) : Cc, dy = (e) => e;
function uy(e, t = dy) {
  const n = dt.useSyncExternalStore(
    e.subscribe,
    dt.useCallback(() => t(e.getState()), [e, t]),
    dt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return dt.useDebugValue(n), n;
}
const my = (e) => {
  const t = cy(e), n = (r) => uy(t, r);
  return Object.assign(n, t), n;
}, fy = (e) => my;
function py(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var a;
      const o = (c) => c === null ? null : JSON.parse(c, void 0), i = (a = n.getItem(s)) != null ? a : null;
      return i instanceof Promise ? i.then(o) : o(i);
    },
    setItem: (s, a) => n.setItem(s, JSON.stringify(a, void 0)),
    removeItem: (s) => n.removeItem(s)
  };
}
const to = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return to(r)(n);
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
        return to(r)(n);
      }
    };
  }
}, hy = (e, t) => (n, r, s) => {
  let a = {
    storage: py(() => window.localStorage),
    partialize: (b) => b,
    version: 0,
    merge: (b, m) => ({
      ...m,
      ...b
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let h = a.storage;
  if (!h)
    return e(
      (...b) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...b);
      },
      r,
      s
    );
  const v = () => {
    const b = a.partialize({ ...r() });
    return h.setItem(a.name, {
      state: b,
      version: a.version
    });
  }, y = s.setState;
  s.setState = (b, m) => (y(b, m), v());
  const S = e(
    (...b) => (n(...b), v()),
    r,
    s
  );
  s.getInitialState = () => S;
  let _;
  const x = () => {
    var b, m;
    if (!h) return;
    const p = ++i;
    o = !1, c.forEach((g) => {
      var k;
      return g((k = r()) != null ? k : S);
    });
    const u = ((m = a.onRehydrateStorage) == null ? void 0 : m.call(a, (b = r()) != null ? b : S)) || void 0;
    return to(h.getItem.bind(h))(a.name).then((g) => {
      if (g)
        if (typeof g.version == "number" && g.version !== a.version) {
          if (a.migrate) {
            const k = a.migrate(
              g.state,
              g.version
            );
            return k instanceof Promise ? k.then((w) => [!0, w]) : [!0, k];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, g.state];
      return [!1, void 0];
    }).then((g) => {
      var k;
      if (p !== i)
        return;
      const [w, C] = g;
      if (_ = a.merge(
        C,
        (k = r()) != null ? k : S
      ), n(_, !0), w)
        return v();
    }).then(() => {
      p === i && (u == null || u(_, void 0), _ = r(), o = !0, d.forEach((g) => g(_)));
    }).catch((g) => {
      p === i && (u == null || u(void 0, g));
    });
  };
  return s.persist = {
    setOptions: (b) => {
      a = {
        ...a,
        ...b
      }, b.storage && (h = b.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => x(),
    hasHydrated: () => o,
    onHydrate: (b) => (c.add(b), () => {
      c.delete(b);
    }),
    onFinishHydration: (b) => (d.add(b), () => {
      d.delete(b);
    })
  }, a.skipHydration || x(), _ || S;
}, gy = hy, yy = [
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
let yn = null;
const _m = () => yy.map((e) => ({ ...e })), ne = fy()(
  gy(
    (e) => ({
      isOpen: !1,
      slots: _m(),
      buckets: {},
      images: {},
      toastMessage: null,
      toastType: "info",
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((s) => {
        const a = { ...s.buckets };
        for (const c in a) {
          const d = a[c] ?? [];
          a[c] = d.filter((h) => h !== n);
        }
        a[t] || (a[t] = []);
        const o = a[t] ?? [];
        o.includes(n) || (a[t] = [...o, n]);
        const i = { ...s.images };
        return r && (i[n] = r), { buckets: a, images: i };
      }),
      removeFromBucket: (t, n) => e((r) => {
        var i;
        const s = {
          ...r.buckets,
          [t]: ((i = r.buckets[t]) == null ? void 0 : i.filter((c) => c !== n)) || []
        }, a = Object.values(s).some((c) => c.includes(n)), o = { ...r.images };
        return a || delete o[n], { buckets: s, images: o };
      }),
      clearBucket: (t) => e((n) => {
        const r = {
          ...n.buckets,
          [t]: []
        }, s = new Set(Object.values(r).flat()), a = { ...n.images };
        for (const o of Object.keys(a))
          s.has(o) || delete a[o];
        return { buckets: r, images: a };
      }),
      updateSlot: (t, n) => e((r) => ({
        slots: r.slots.map((s) => s.id === t ? { ...s, ...n } : s)
      })),
      addSlot: (t) => e((n) => ({
        slots: [...n.slots, t]
      })),
      removeSlot: (t) => e((n) => {
        const r = n.slots.filter((i) => i.id !== t), s = { ...n.buckets };
        delete s[t];
        const a = new Set(Object.values(s).flat()), o = { ...n.images };
        for (const i of Object.keys(o))
          a.has(i) || delete o[i];
        return {
          slots: r,
          buckets: s,
          images: o
        };
      }),
      removeImages: (t) => e((n) => {
        if (!t) return n;
        const r = t.map(String), s = new Set(r), a = { ...n.buckets };
        let o = !1;
        for (const [c, d] of Object.entries(a)) {
          const h = d.filter((v) => !s.has(v));
          h.length !== d.length && (a[c] = h, o = !0);
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
        yn && clearTimeout(yn), e({ toastMessage: t, toastType: n }), yn = setTimeout(() => {
          e({ toastMessage: null }), yn = null;
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
), vy = () => {
  var e, t;
  yn && (clearTimeout(yn), yn = null), ne.setState((n) => ({
    ...n,
    isOpen: !1,
    slots: _m(),
    buckets: {},
    images: {},
    toastMessage: null,
    toastType: "info"
  })), (t = (e = ne.persist) == null ? void 0 : e.clearStorage) == null || t.call(e);
}, km = async () => {
  const e = await J.fetchApi("/meld/workflows");
  return ee(e);
}, bm = async (e) => {
  const t = await J.fetchApi(`/meld/workflow/raw?name=${encodeURIComponent(e)}`);
  return ee(t);
}, Sm = (e) => e ? e.replace(/\s+/g, "").toLowerCase() : "", Kn = (e) => {
  const t = Sm(e);
  return t === "meldimageloader" || t === "loadimage";
}, Mr = (e) => Sm(e) === "loadimagemask", wy = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && t !== null && "id" in t && "type" in t
), li = () => ({ executeWorkflow: f.useCallback(
  async (t, n, r, s) => {
    var x, b, m, p, u;
    if (!t || !n)
      throw new Error(
        `Missing required inputs for workflow execution: workflowName (${!!t}), image (${!!n})`
      );
    $.log("executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: s
    });
    const a = await bm(t);
    $.log("Workflow fetched:", t);
    let o = s || null, i = null, c = !1;
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const k = a.nodes.find((w) => Kn(w.type));
        k && (o = String(k.id));
      }
      const g = a.nodes.find((k) => Mr(k.type));
      g && (i = String(g.id));
    } else {
      if (!o)
        for (const g in a) {
          const k = a[g];
          if (Kn(k.class_type)) {
            o = g;
            break;
          }
        }
      for (const g in a) {
        const k = a[g];
        if (Mr(k.class_type)) {
          i = g;
          break;
        }
      }
    }
    if ($.log("Node IDs found:", {
      loaderNodeId: o,
      maskNodeId: i,
      isUIFormat: c
    }), !o)
      throw new Error("Meld Image Loader or Load Image node not found in the selected workflow.");
    if (r && !i)
      throw $.warn("Mask filename provided but no mask node found in workflow JSON"), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let d = n.filename;
    if (n.subfolder && (d = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (d = `${d} [${n.type}]`), c) {
      const g = window.app;
      if (typeof g != "object" || g === null || !("graph" in g))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const k = g;
      if (!k.graph || !wy(k.graph._nodes))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const w = t.replace(/\.json$/i, "");
      let C = !1;
      const T = document.querySelectorAll(".workflow-tab");
      for (const R of Array.from(T)) {
        const U = R.querySelector(".workflow-label"), B = ((x = U == null ? void 0 : U.textContent) == null ? void 0 : x.trim()) || ((b = R.textContent) == null ? void 0 : b.trim()) || "";
        if (B === w || B === t || B.startsWith(`${w} `) || B.startsWith(`${w}•`)) {
          R.click(), C = !0;
          break;
        }
      }
      C || await k.loadGraphData(a, !0, !0, t), await new Promise((R) => setTimeout(R, 200));
      const z = k.graph._nodes;
      $.log("Active graph nodes count:", z.length);
      const I = z.find(
        (R) => String(R.id) === o || Kn(R.type)
      );
      if (I) {
        const R = (m = I.widgets) == null ? void 0 : m.find((U) => U.name === "image");
        $.log("Updating loader node widget:", {
          nodeId: I.id,
          type: I.type,
          imagePath: d
        }), R && (R.value = d, typeof R.callback == "function" && R.callback(d));
      } else
        $.warn(
          "Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const R = z.find(
          (U) => String(U.id) === i || Mr(U.type)
        );
        if ($.log("Updating mask node widget:", {
          nodeId: R == null ? void 0 : R.id,
          maskFilename: r
        }), R) {
          const U = (p = R.widgets) == null ? void 0 : p.find((N) => N.name === "image");
          U && (U.value = `${r} [temp]`);
          const B = (u = R.widgets) == null ? void 0 : u.find((N) => N.name === "channel");
          B && (B.value = "red");
        } else
          $.warn("LoadImageMask not found in active graph after loading");
      }
      k.graph.setDirtyCanvas(!0, !0);
      try {
        if (typeof k.queuePrompt != "function")
          throw new Error("queuePrompt is not available.");
        await k.queuePrompt(0);
        return;
      } catch (R) {
        throw $.error("Failed to queue workflow:", R), new Error("Failed to queue workflow. Check logs for details.");
      }
    }
    const h = JSON.parse(JSON.stringify(a));
    h[o].inputs.image = d, r && i && (h[i].inputs.image = `${r} [temp]`, h[i].inputs.channel = "red");
    const v = window.api;
    if (!(typeof v == "object" && v !== null && "fetchApi" in v && typeof v.fetchApi == "function"))
      throw new Error("ComfyUI API is not available. Please reload ComfyUI and try again.");
    const S = v, _ = await S.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: h,
        client_id: typeof S.clientId == "string" ? S.clientId : void 0
      })
    });
    return ll(_);
  },
  []
) });
function $l(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function xy(e, t, n = 255) {
  const { width: r, height: s } = e, a = document.createElement("canvas");
  a.width = r, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = si(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, s), d = new Uint8ClampedArray(r * s);
  for (let h = 0; h < r * s; h++) {
    const v = c.data[h * 4] ?? 0;
    d[h] = v > 128 ? 255 : 0;
  }
  return { ...e, data: d };
}
function si(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: s, height: a } = e, o = new ImageData(s, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c] ?? 0, h = c * 4;
    d > 0 ? (i[h] = t[0], i[h + 1] = t[1], i[h + 2] = t[2], i[h + 3] = n) : (i[h] = 0, i[h + 1] = 0, i[h + 2] = 0, i[h + 3] = 0);
  }
  return o;
}
function _y(e) {
  return e.data.every((t) => t === 0);
}
const Ec = (e) => e === "rect" || e === "ellipse" || e === "lasso";
function ky({
  canvasRef: e,
  overlayRef: t,
  imageRef: n,
  currentMask: r,
  onMaskStamp: s
}) {
  const a = f.useRef(null), [o, i] = f.useState(!1), [c, d] = f.useState(() => {
    try {
      const E = typeof localStorage < "u" ? localStorage.getItem("meld-mask-tool") : null;
      return Ec(E) ? E : "rect";
    } catch {
      return "rect";
    }
  }), h = f.useCallback((E) => {
    d(E);
  }, []);
  f.useEffect(() => {
    try {
      typeof localStorage < "u" && Ec(c) && localStorage.setItem("meld-mask-tool", c);
    } catch {
    }
  }, [c]);
  const [v, y] = f.useState({ x: 0, y: 0 }), [S, _] = f.useState({ x: 0, y: 0 }), x = f.useRef([]), [b, m] = f.useState(1), [p, u] = f.useState({ x: 0, y: 0 }), [g, k] = f.useState(!1), [w, C] = f.useState(!1), T = f.useRef(null), z = f.useRef(0), I = f.useCallback(() => {
    const E = n.current, L = t.current;
    if (!E || !L) return null;
    const O = L.getBoundingClientRect(), M = E.naturalWidth, A = E.naturalHeight;
    if (!M || !A) return null;
    const P = M / A, W = O.width / O.height;
    let H, X, re = 0, se = 0;
    return P > W ? (H = O.width, X = O.width / P, se = (O.height - X) / 2) : (X = O.height, H = O.height * P, re = (O.width - H) / 2), {
      left: re,
      top: se,
      width: H,
      height: X
    };
  }, [n, t]), R = f.useCallback(
    (E, L, O, M) => {
      if (!E) return L;
      const A = E.getBoundingClientRect(), P = A.width / 2, W = A.height / 2, H = {
        x: (P - L.x) / O,
        y: (W - L.y) / O
      };
      return { x: P - H.x * M, y: W - H.y * M };
    },
    []
  ), U = f.useCallback(() => {
    m((E) => {
      const L = Math.min(E * 1.2, 20);
      return u((O) => R(t.current, O, E, L)), L;
    });
  }, [R, t]), B = f.useCallback(() => {
    m((E) => {
      const L = Math.max(0.1, E / 1.2);
      return u((O) => R(t.current, O, E, L)), L;
    });
  }, [R, t]), N = f.useCallback(() => {
    m(1), u({ x: 0, y: 0 });
  }, []), F = f.useCallback(() => {
    const E = e.current;
    if (!E) return;
    const L = E.getContext("2d");
    if (!L) return;
    L.clearRect(0, 0, E.width, E.height);
    const O = getComputedStyle(document.documentElement), M = O.getPropertyValue("--comfy-input-bg-active") || O.getPropertyValue("--comfy-input-bg") || O.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", A = I();
    if (a.current && A && (L.save(), L.globalAlpha = 0.5, L.drawImage(
      a.current,
      A.left,
      A.top,
      A.width,
      A.height
    ), L.restore()), o) {
      const P = Math.min(v.x, S.x), W = Math.min(v.y, S.y), H = Math.abs(v.x - S.x), X = Math.abs(v.y - S.y);
      if (L.save(), L.globalAlpha = 0.3, L.fillStyle = M, L.strokeStyle = "white", L.lineWidth = 2, L.setLineDash([5, 5]), L.beginPath(), c === "rect")
        L.rect(P, W, H, X);
      else if (c === "ellipse") {
        const re = P + H / 2, se = W + X / 2;
        L.ellipse(re, se, H / 2, X / 2, 0, 0, 2 * Math.PI);
      } else if (c === "lasso" && x.current.length > 1) {
        const re = x.current[0];
        if (re) {
          L.moveTo(re.x, re.y);
          for (let se = 1; se < x.current.length; se++) {
            const K = x.current[se];
            K && L.lineTo(K.x, K.y);
          }
          L.closePath();
        }
      }
      L.fill(), L.globalAlpha = 1, L.stroke(), L.restore();
    }
  }, [o, v, S, c, I, e]), D = f.useRef(F);
  f.useEffect(() => {
    D.current = F;
  }), f.useEffect(() => {
    if (!r) return;
    a.current || (a.current = document.createElement("canvas"));
    const E = a.current;
    E.width = r.width, E.height = r.height;
    const L = E.getContext("2d");
    if (!L) return;
    const O = si(r, [255, 255, 255], 255);
    L.putImageData(O, 0, 0), F();
  }, [r, F]), f.useEffect(() => {
    o && F();
  }, [o, F]), f.useEffect(() => {
    const E = t.current;
    if (!E) return;
    const L = (O) => {
      O.preventDefault();
      const M = O.deltaY > 0 ? 1 / 1.1 : 1.1;
      m((A) => {
        const P = Math.min(Math.max(0.1, A * M), 20);
        return u((W) => {
          const H = E.getBoundingClientRect(), X = O.clientX - H.left, re = O.clientY - H.top, se = {
            x: (X - W.x) / A,
            y: (re - W.y) / A
          };
          return {
            x: X - se.x * P,
            y: re - se.y * P
          };
        }), P;
      });
    };
    return E.addEventListener("wheel", L, { passive: !1 }), () => E.removeEventListener("wheel", L);
  }, [t]), f.useEffect(() => {
    if (!w) return;
    const E = (O) => {
      if (T.current) {
        const M = O.clientX - T.current.clientX, A = O.clientY - T.current.clientY;
        u({
          x: T.current.panX + M,
          y: T.current.panY + A
        });
      }
    }, L = () => {
      C(!1), T.current = null;
    };
    return window.addEventListener("mousemove", E), window.addEventListener("mouseup", L), () => {
      window.removeEventListener("mousemove", E), window.removeEventListener("mouseup", L);
    };
  }, [w]), f.useEffect(() => {
    const E = () => {
      t.current && e.current && (e.current.width = t.current.clientWidth, e.current.height = t.current.clientHeight, D.current());
    }, L = new ResizeObserver(E);
    return t.current && L.observe(t.current), E(), () => L.disconnect();
  }, [t, e]);
  const V = f.useCallback(
    (E) => {
      var re;
      const L = E.button === 2, O = E.button === 1, M = g && E.button === 0;
      if (L || O || M) {
        E.preventDefault(), E.stopPropagation(), T.current = {
          panX: p.x,
          panY: p.y,
          clientX: E.clientX,
          clientY: E.clientY
        }, C(!0);
        return;
      }
      if (E.button !== 0 || o || Date.now() - z.current < 100) return;
      E.preventDefault();
      const A = I(), P = (re = t.current) == null ? void 0 : re.getBoundingClientRect();
      if (!A || !P) return;
      i(!0);
      const W = {
        x: (E.clientX - P.left - p.x) / b,
        y: (E.clientY - P.top - p.y) / b
      }, H = Math.max(A.left, Math.min(W.x, A.left + A.width)), X = Math.max(A.top, Math.min(W.y, A.top + A.height));
      y({ x: H, y: X }), _({ x: H, y: X }), c === "lasso" ? x.current = [{ x: H, y: X }] : x.current = [];
    },
    [g, p, o, I, t, b, c]
  );
  f.useEffect(() => {
    if (!o) return;
    const E = (O) => {
      var X;
      const M = I(), A = (X = t.current) == null ? void 0 : X.getBoundingClientRect();
      if (!M || !A) return;
      const P = {
        x: (O.clientX - A.left - p.x) / b,
        y: (O.clientY - A.top - p.y) / b
      }, W = Math.max(M.left, Math.min(P.x, M.left + M.width)), H = Math.max(M.top, Math.min(P.y, M.top + M.height));
      _({ x: W, y: H }), c === "lasso" && (x.current.push({ x: W, y: H }), D.current());
    }, L = (O) => {
      var P;
      const M = I(), A = (P = t.current) == null ? void 0 : P.getBoundingClientRect();
      if (M && A && r && n.current) {
        const W = {
          x: (O.clientX - A.left - p.x) / b,
          y: (O.clientY - A.top - p.y) / b
        }, H = Math.max(M.left, Math.min(W.x, M.left + M.width)), X = Math.max(M.top, Math.min(W.y, M.top + M.height)), re = Math.min(v.x, H), se = Math.min(v.y, X), K = Math.abs(v.x - H), te = Math.abs(v.y - X), G = c === "lasso";
        if (K > 5 || te > 5 || G && x.current.length > 2) {
          const Ae = n.current.naturalWidth, De = n.current.naturalHeight, Be = Ae / M.width, jt = De / M.height, sl = xy(r, (fe) => {
            if (c === "rect") {
              const Ce = (re - M.left) * Be, Ie = (se - M.top) * jt, Qe = K * Be, Vt = te * jt;
              fe.rect(Ce, Ie, Qe, Vt);
            } else if (c === "ellipse") {
              const Ce = (re - M.left) * Be, Ie = (se - M.top) * jt, Qe = K * Be, Vt = te * jt, at = Ce + Qe / 2, or = Ie + Vt / 2;
              fe.ellipse(at, or, Qe / 2, Vt / 2, 0, 0, 2 * Math.PI);
            } else if (c === "lasso" && x.current.length > 2) {
              const Ce = x.current[0];
              if (!Ce) return;
              fe.moveTo(
                (Ce.x - M.left) * Be,
                (Ce.y - M.top) * jt
              );
              for (let Ie = 1; Ie < x.current.length; Ie++) {
                const Qe = x.current[Ie];
                Qe && fe.lineTo((Qe.x - M.left) * Be, (Qe.y - M.top) * jt);
              }
              fe.closePath();
            }
          });
          s(sl);
        }
      }
      z.current = Date.now(), i(!1), x.current = [];
    };
    return window.addEventListener("mousemove", E), window.addEventListener("mouseup", L), () => {
      window.removeEventListener("mousemove", E), window.removeEventListener("mouseup", L);
    };
  }, [
    o,
    v.x,
    v.y,
    I,
    r,
    c,
    p.x,
    p.y,
    b,
    n,
    t,
    s
  ]), f.useEffect(() => {
    const E = (M) => {
      if (!M) return !1;
      const A = M, P = A.tagName;
      return P === "INPUT" || P === "TEXTAREA" || P === "BUTTON" || P === "SELECT" || P === "A" || A.isContentEditable || A.tabIndex != null && A.tabIndex >= 0;
    }, L = (M) => {
      M.code === "Space" && !M.repeat && (E(M.target) || (M.preventDefault(), k(!0)));
    }, O = (M) => {
      M.code === "Space" && (E(M.target) || (M.preventDefault(), k(!1)));
    };
    return window.addEventListener("keydown", L, { capture: !0 }), window.addEventListener("keyup", O, { capture: !0 }), () => {
      window.removeEventListener("keydown", L, { capture: !0 }), window.removeEventListener("keyup", O, { capture: !0 });
    };
  }, []);
  const j = f.useCallback(() => {
    if (n.current) {
      const E = $l(
        n.current.naturalWidth,
        n.current.naturalHeight
      );
      s(E);
    }
  }, [n, s]);
  return {
    activeTool: c,
    setActiveTool: h,
    scale: b,
    pan: p,
    handleZoomIn: U,
    handleZoomOut: B,
    handleResetZoom: N,
    isPanning: g,
    isPanDragging: w,
    handleMouseDown: V,
    handleClear: j
  };
}
const jm = (e) => !!(e && Array.isArray(e.widgets));
function by(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function Yr(e, t) {
  var i, c;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  if (!Array.isArray(n.graph._nodes))
    return { ok: !1, reason: "no_loader_node" };
  const r = by(e), s = n.graph._nodes.filter((d) => Kn(d.type));
  if (s.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let a = s[0];
  if (t) {
    const d = s.find((h) => String(h.id) === t);
    d && (a = d);
  }
  if (!jm(a))
    return { ok: !1, reason: "no_widgets" };
  const o = a.widgets.find((d) => d.name === "image");
  return o ? (o.value = r, typeof o.callback == "function" && o.callback(r), (c = (i = n.graph).afterChange) == null || c.call(i), n.graph.setDirtyCanvas(!0, !0), { ok: !0 }) : { ok: !1, reason: "no_image_widget" };
}
const Sy = () => {
  const { dispatch: e } = ie();
  return { injectMaskToGraph: f.useCallback(
    (n, r) => {
      var h, v;
      $.log("[Meld-Debug] injectMaskToGraph called with:", r), Yr(n);
      const s = window.app;
      if (!(s != null && s.graph))
        return $.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      if (!Array.isArray(s.graph._nodes))
        return $.log("[Meld-Debug] injectMaskToGraph: comfyApp.graph._nodes is not an array"), !1;
      const a = s.graph._nodes.filter((y) => Mr(y.type));
      if (a.length === 0)
        return $.log("[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0];
      if (!o)
        return !1;
      if (!jm(o))
        return $.log("[Meld-Debug] injectMaskToGraph: target mask node has no widgets", o.id), !1;
      const i = o.widgets.find((y) => y.name === "image"), c = `${r} [temp]`;
      $.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find((y) => y.name === "channel");
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (h = s.graph).afterChange) == null || v.call(h), s.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
}, ai = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: s
}) => {
  const { state: a, dispatch: o } = ie(), i = f.useMemo(() => a.images.find((W) => W.id === e) ?? a.lineageImages.find((W) => W.id === e) ?? ne.getState().images[String(e)], [a.images, a.lineageImages, e]), c = f.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: h } = Sy(), { executeWorkflow: v } = li(), y = f.useRef(null), S = f.useRef(null), _ = f.useRef(null), [x, b] = f.useState([]), m = f.useMemo(() => x.length > 0 ? x[x.length - 1] ?? null : _.current ? $l(_.current.naturalWidth, _.current.naturalHeight) : null, [x]), p = f.useCallback((W) => {
    b((H) => [...H, W]);
  }, []), {
    activeTool: u,
    setActiveTool: g,
    scale: k,
    pan: w,
    handleZoomIn: C,
    handleZoomOut: T,
    handleResetZoom: z,
    isPanning: I,
    isPanDragging: R,
    handleMouseDown: U,
    handleClear: B
  } = ky({
    canvasRef: y,
    overlayRef: S,
    imageRef: _,
    currentMask: m,
    onMaskStamp: p
  });
  ke({ onEscape: s });
  const N = f.useRef(!1), F = f.useCallback((W) => {
    W.target === W.currentTarget && (N.current = !0);
  }, []), D = f.useCallback(
    (W) => {
      W.target === W.currentTarget && N.current && s(), N.current = !1;
    },
    [s]
  );
  f.useEffect(() => {
    var W;
    (W = _.current) != null && W.naturalWidth && x.length === 0 && b([
      $l(_.current.naturalWidth, _.current.naturalHeight)
    ]);
  }, [x.length]);
  const V = f.useCallback(() => {
    var W;
    (W = _.current) != null && W.naturalWidth && x.length === 0 && b([
      $l(_.current.naturalWidth, _.current.naturalHeight)
    ]);
  }, [x.length]), j = f.useCallback(() => {
    x.length > 1 && b((W) => W.slice(0, -1));
  }, [x.length]);
  f.useEffect(() => {
    const W = (H) => {
      (H.metaKey || H.ctrlKey) && H.key.toLowerCase() === "z" && !H.shiftKey && (H.preventDefault(), H.stopPropagation(), H.stopImmediatePropagation(), j());
    };
    return window.addEventListener("keydown", W, { capture: !0 }), () => window.removeEventListener("keydown", W, { capture: !0 });
  }, [j]);
  const [E, L] = f.useState(!1), O = async () => {
    if (!m || !_.current) return null;
    L(!0);
    try {
      const { width: W, height: H } = m, X = document.createElement("canvas");
      X.width = W, X.height = H;
      const re = X.getContext("2d");
      if (!re) return null;
      const se = si(m, [255, 255, 255], 255);
      re.putImageData(se, 0, 0);
      const K = await new Promise(
        (jt) => X.toBlob(jt, "image/png")
      );
      if (!K) return null;
      const G = `meld_mask_${Date.now()}.png`, Ve = new File([K], G, { type: "image/png" }), Ae = new FormData();
      Ae.append("image", Ve), Ae.append("type", "temp"), Ae.append("overwrite", "true");
      const De = await J.fetchApi("/upload/image", {
        method: "POST",
        body: Ae
      });
      return (await ll(De)).name ?? null;
    } catch (W) {
      return $.error("Error uploading mask:", W), null;
    } finally {
      L(!1);
    }
  }, M = async () => {
    if (!d) return;
    const W = await O();
    W && h(d, W) && (s(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, A = async () => {
    if (!d) return;
    const W = await O();
    W && (t === "run_sequence" && n ? (await v(
      n.workflowName,
      d,
      W,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [d],
        maskFilename: W,
        onSuccess: r
      }
    }));
  }, P = f.useMemo(() => m && !_y(m), [m]);
  return d ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: F,
      onMouseUp: D,
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (W) => W.stopPropagation(),
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ l.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: s, type: "button", children: /* @__PURE__ */ l.jsx(de, { size: 20 }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "rect" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => g("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(dm, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "ellipse" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => g("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Kh, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "lasso" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => g("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Zh, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Lasso" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    style: {
                      width: 1,
                      backgroundColor: "var(--meld-border-color)",
                      margin: "0 4px"
                    }
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: T,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ l.jsx(hg, { size: 18 })
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: z,
                    type: "button",
                    title: "Reset Zoom",
                    "aria-label": "Reset Zoom",
                    style: {
                      minWidth: "48px",
                      justifyContent: "center",
                      fontSize: "11px"
                    },
                    children: [
                      Math.round(k * 100),
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: C,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ l.jsx(pg, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  ref: S,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: U,
                  onContextMenu: (W) => W.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: R ? "grabbing" : I ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${w.x}px, ${w.y}px) scale(${k})`,
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
                        /* @__PURE__ */ l.jsx(
                          "img",
                          {
                            ref: _,
                            src: ni(d),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: (W) => W.preventDefault(),
                            onLoad: V
                          }
                        ),
                        /* @__PURE__ */ l.jsx(
                          "canvas",
                          {
                            ref: y,
                            className: "meld-mask-editor-canvas",
                            onDragStart: (W) => W.preventDefault()
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-footer", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-mask-editor-hint", children: "Select a tool and drag on the image to create mask areas (Cmd/Ctrl+Z to undo)" }),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-actions", children: [
                  t === "apply" ? /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                      onClick: M,
                      disabled: !P || E,
                      type: "button",
                      children: [
                        E ? /* @__PURE__ */ l.jsx(vc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Je, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: A,
                      disabled: !P || E,
                      type: "button",
                      children: [
                        E ? /* @__PURE__ */ l.jsx(vc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(qr, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: j,
                      disabled: x.length <= 1 || E,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ l.jsx(ug, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: B,
                      disabled: !P || E,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ l.jsx(de, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Clear" })
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
}, Cm = ({
  images: e,
  currentIndex: t,
  workflowName: n,
  targetLoaderNodeId: r,
  onSuccess: s,
  onClose: a
}) => {
  ke({ onEscape: a });
  const o = e[t];
  return f.useEffect(() => {
    o || a();
  }, [o, a]), o ? /* @__PURE__ */ l.jsx(
    ai,
    {
      imageId: o.id,
      mode: "run_sequence",
      sequenceData: {
        workflowName: n,
        targetLoaderNodeId: r,
        currentIndex: t,
        totalCount: e.length
      },
      onSuccess: s,
      onClose: a
    },
    o.id
  ) : null;
}, Em = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, bl = (e) => e.replace(/^["']|["']$/g, ""), jy = (e) => e.trim() ? Em(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, Cy = (e, t) => {
  const n = Em(e), r = {
    addTags: [],
    removeTags: [],
    toggleTags: [],
    moveNext: !1,
    movePrev: !1,
    isDeleted: !1,
    sendToLtSlot: null
  }, s = (t == null ? void 0 : t.tags) || [];
  for (const a of n)
    if (a.startsWith("tag:")) {
      const o = bl(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = bl(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = bl(a.substring(11));
      o && (t ? s.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = bl(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, Ey = async () => {
  const e = await J.fetchApi("/meld/databases");
  return ee(e);
}, Ny = async (e, t = !1) => {
  const n = await J.fetchApi("/meld/databases", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, switch_to_new: t })
  });
  return ee(n);
}, Iy = async (e) => {
  const t = await J.fetchApi("/meld/databases/switch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return ee(t);
}, My = async (e, t) => {
  const n = await J.fetchApi("/meld/databases/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, confirm_text: t })
  });
  return ee(n);
}, Ty = async (e, t) => {
  const n = await J.fetchApi("/meld/databases/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, new_name: t })
  });
  return ee(n);
}, Nc = [
  "Light Table contents will be cleared.",
  "Search keywords, suggestions, and in-flight cache will be reinitialized.",
  "Current selection, viewer state, open modals, and search results will be reset.",
  "Database-specific settings may change after the switch.",
  "Switching is blocked while scan or analytics refresh is running."
], Ly = () => {
  const { dispatch: e } = ie(), [t, n] = f.useState(null), [r, s] = f.useState(""), [a, o] = f.useState({}), [i, c] = f.useState(!1), d = f.useCallback(async () => {
    try {
      c(!0);
      const u = await Ey();
      n(u);
    } catch (u) {
      $.error("Failed to fetch databases", u), e({
        type: "SET_ERROR",
        payload: u instanceof Error ? u.message : "Failed to fetch databases"
      });
    } finally {
      c(!1);
    }
  }, [e]);
  f.useEffect(() => {
    d();
  }, [d]);
  const h = f.useCallback((u) => {
    window.dispatchEvent(new CustomEvent("meld-database-changed", { detail: u }));
  }, []), v = (t == null ? void 0 : t.active_database) ?? null, y = (t == null ? void 0 : t.databases) ?? [], S = f.useCallback((u, g) => {
    o((k) => ({
      ...k,
      [u]: g
    }));
  }, []), _ = f.useCallback(
    (u) => a[u] ?? u,
    [a]
  ), x = f.useCallback(async () => {
    const u = r.trim();
    if (!u) {
      e({ type: "SET_ERROR", payload: "Database name is required" });
      return;
    }
    e({
      type: "OPEN_CONFIRM_MODAL",
      payload: {
        title: "Create Database",
        message: `Create a new empty database named "${u}"?`,
        details: [
          "The new database will be created without switching immediately.",
          "Settings are stored per database, so the new database starts with its own settings state.",
          "You can switch to it afterwards from the database list."
        ],
        confirmLabel: "Create",
        onConfirm: async () => {
          c(!0);
          try {
            const g = await Ny(u, !1);
            n(g), s("");
          } catch (g) {
            throw $.error("Failed to create database", g), e({
              type: "SET_ERROR",
              payload: g instanceof Error ? g.message : "Failed to create database"
            }), g;
          } finally {
            c(!1);
          }
        }
      }
    });
  }, [r, e]), b = f.useCallback(
    (u) => {
      u.is_active || e({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          title: "Switch Database",
          message: `Switch active database to "${u.name}"?`,
          details: Nc,
          confirmLabel: "Switch Database",
          onConfirm: async () => {
            c(!0);
            try {
              const g = await Iy(u.name);
              n(g), h(g);
            } catch (g) {
              throw $.error("Failed to switch database", g), e({
                type: "SET_ERROR",
                payload: g instanceof Error ? g.message : "Failed to switch database"
              }), g;
            } finally {
              c(!1);
            }
          }
        }
      });
    },
    [e, h]
  ), m = f.useCallback(
    (u) => {
      const g = [
        `The database file "${u.filename}" will be permanently deleted.`,
        'Type "delete" to confirm the operation.'
      ];
      u.is_active && (g.push(
        "The app will switch to another database or recreate default.db automatically."
      ), g.push(...Nc)), e({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          title: "Delete Database",
          message: `Delete database "${u.name}" permanently?`,
          details: g,
          confirmLabel: "Delete Database",
          danger: !0,
          requiredText: "delete",
          requiredTextLabel: 'Type "delete" to enable deletion.',
          onConfirm: async (k) => {
            c(!0);
            try {
              const w = await My(
                u.name,
                k ?? ""
              );
              n(w), (u.is_active || (t == null ? void 0 : t.active_database) !== w.active_database || (t == null ? void 0 : t.database_generation) !== w.database_generation) && h(w);
            } catch (w) {
              throw $.error("Failed to delete database", w), e({
                type: "SET_ERROR",
                payload: w instanceof Error ? w.message : "Failed to delete database"
              }), w;
            } finally {
              c(!1);
            }
          }
        }
      });
    },
    [e, h, t == null ? void 0 : t.active_database, t == null ? void 0 : t.database_generation]
  ), p = f.useCallback(
    (u) => {
      const g = _(u.name).trim();
      if (!g) {
        e({ type: "SET_ERROR", payload: "New database name is required" });
        return;
      }
      if (g === u.name) {
        e({ type: "SET_ERROR", payload: "New database name must be different" });
        return;
      }
      e({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          title: "Rename Database",
          message: `Rename database "${u.name}" to "${g}"?`,
          details: [
            "The database file and runtime directories will be renamed together.",
            "Current database contents are preserved."
          ],
          confirmLabel: "Rename Database",
          onConfirm: async () => {
            c(!0);
            try {
              const k = await Ty(u.name, g);
              n(k), o((w) => {
                const { [u.name]: C, ...T } = w;
                return { ...T, [g]: g };
              }), u.is_active && h(k);
            } catch (k) {
              throw $.error("Failed to rename database", k), e({
                type: "SET_ERROR",
                payload: k instanceof Error ? k.message : "Failed to rename database"
              }), k;
            } finally {
              c(!1);
            }
          }
        }
      });
    },
    [e, h, _]
  );
  return f.useMemo(
    () => ({
      databases: y,
      activeDatabaseName: v,
      databaseNameInput: r,
      setDatabaseNameInput: s,
      getRenameDraftForDatabase: _,
      setRenameDraftForDatabase: S,
      isLoading: i,
      loadDatabases: d,
      submitCreateDatabase: x,
      confirmRenameDatabase: p,
      confirmSwitchDatabase: b,
      confirmDeleteDatabase: m
    }),
    [
      y,
      v,
      r,
      _,
      S,
      i,
      d,
      x,
      p,
      b,
      m
    ]
  );
}, Ay = () => {
  const { state: e, dispatch: t, updateSetting: n } = ie(), r = Ly(), [s, a] = f.useState("Gallery"), [o, i] = f.useState({
    ...e.settings
  }), [c, d] = f.useState({}), [h, v] = f.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [y, S] = f.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [_, x] = f.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [b, m] = f.useState(
    e.settings["viewer.thumbnail_window_size"].toString()
  ), [p, u] = f.useState(
    e.settings["gallery.trash_retention_days"].toString()
  ), [g, k] = f.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [w, C] = f.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [T, z] = f.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [I, R] = f.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [U, B] = f.useState(
    e.settings["viewer.details.core_prompt_count"].toString()
  ), [N, F] = f.useState(e.settings["fullscreen.details.max_positive_prompt_lines"].toString()), [D, V] = f.useState(e.settings["fullscreen.details.max_negative_prompt_lines"].toString()), [j, E] = f.useState(
    e.settings["fullscreen.details.core_prompt_count"].toString()
  ), [L, O] = f.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: s,
    setActiveTab: a,
    localSettings: o,
    setLocalSettings: i,
    shortcutErrors: c,
    setShortcutErrors: d,
    handleClose: async () => {
      const K = Object.keys(o).filter(
        (te) => o[te] !== e.settings[te] && !c[te]
      );
      if (K.length > 0)
        for (const te of K)
          await n(te, o[te]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (K, te) => {
      i((G) => ({
        ...G,
        [K]: !te
      }));
    },
    handleNumberChange: (K, te, G, Ve) => {
      K === "gallery.initial_load_count" ? v(te) : K === "gallery.max_load_count" ? S(te) : K === "gallery.lineage_max_depth" ? x(te) : K === "viewer.thumbnail_window_size" ? m(te) : K === "gallery.trash_retention_days" ? u(te) : K === "gallery.auto_link_phash_threshold" ? k(te) : K === "gallery.suggest_phash_threshold" ? C(te) : K === "viewer.details.max_positive_prompt_lines" ? z(te) : K === "viewer.details.max_negative_prompt_lines" ? R(te) : K === "viewer.details.core_prompt_count" ? B(te) : K === "fullscreen.details.max_positive_prompt_lines" ? F(te) : K === "fullscreen.details.max_negative_prompt_lines" ? V(te) : K === "fullscreen.details.core_prompt_count" ? E(te) : K === "sidebar.thumbnail_size" && O(te);
      const Ae = Number.parseInt(te, 10);
      if (!Number.isNaN(Ae)) {
        let De = Ae;
        G !== void 0 && De < G && (De = G), Ve !== void 0 && De > Ve && (De = Ve), i((Be) => ({
          ...Be,
          [K]: De
        }));
      }
    },
    handleNumberBlur: (K) => {
      !K || !K.key || (K.key === "gallery.initial_load_count" ? v(o["gallery.initial_load_count"].toString()) : K.key === "gallery.max_load_count" ? S(o["gallery.max_load_count"].toString()) : K.key === "gallery.lineage_max_depth" ? x(o["gallery.lineage_max_depth"].toString()) : K.key === "viewer.thumbnail_window_size" ? m(o["viewer.thumbnail_window_size"].toString()) : K.key === "gallery.trash_retention_days" ? u(o["gallery.trash_retention_days"].toString()) : K.key === "gallery.auto_link_phash_threshold" ? k(o["gallery.auto_link_phash_threshold"].toString()) : K.key === "gallery.suggest_phash_threshold" ? C(o["gallery.suggest_phash_threshold"].toString()) : K.key === "viewer.details.max_positive_prompt_lines" ? z(
        o["viewer.details.max_positive_prompt_lines"].toString()
      ) : K.key === "viewer.details.max_negative_prompt_lines" ? R(
        o["viewer.details.max_negative_prompt_lines"].toString()
      ) : K.key === "viewer.details.core_prompt_count" ? B(o["viewer.details.core_prompt_count"].toString()) : K.key === "fullscreen.details.max_positive_prompt_lines" ? F(
        o["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : K.key === "fullscreen.details.max_negative_prompt_lines" ? V(
        o["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : K.key === "fullscreen.details.core_prompt_count" ? E(
        o["fullscreen.details.core_prompt_count"].toString()
      ) : K.key === "sidebar.thumbnail_size" && O(o["sidebar.thumbnail_size"].toString()));
    },
    handleResetShortcuts: () => {
      i((K) => ({
        ...K,
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
      })), d({});
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
              await zg(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (K) {
              $.error("Failed to clear thumbnail cache:", K), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (K) => typeof K != "string" ? !1 : jy(K),
    // Input states
    initialLoadCountInput: h,
    maxLoadCountInput: y,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: b,
    trashRetentionDaysInput: p,
    autoLinkPhashThresholdInput: g,
    suggestPhashThresholdInput: w,
    maxPositivePromptLinesInput: T,
    maxNegativePromptLinesInput: I,
    fullscreenMaxPositivePromptLinesInput: N,
    fullscreenMaxNegativePromptLinesInput: D,
    viewerCorePromptCountInput: U,
    fullscreenCorePromptCountInput: j,
    thumbnailSizeInput: L,
    ...r
  };
}, Y = ({
  label: e,
  description: t,
  children: n,
  labelId: r
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", id: r, children: e }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Dy = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o,
  fullscreenCorePromptCountInput: i
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Tool Icons",
        description: "Display navigation and close icons in fullscreen mode.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.show_icons"],
              onChange: () => n("fullscreen.show_icons", e["fullscreen.show_icons"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.delete_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ l.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ l.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.loop"],
              onChange: () => n("fullscreen.loop", e["fullscreen.loop"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.small_image_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ l.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when entering fullscreen.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.details.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ l.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ l.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Dimensions",
        description: "Display dimensions in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Created At",
        description: "Display generation date/time in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Source Info",
        description: "Display source image information in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(Y, { label: "Show Model", description: "Display model name in fullscreen details.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Positive",
        description: "Display positive prompt in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Core Prompt",
        description: "Display a subset of keywords from the positive prompt based on rarity (bottom analytics counts).",
        labelId: "fullscreen-show-core-prompt-label",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              id: "fullscreen-core-prompt-checkbox",
              "aria-labelledby": "fullscreen-show-core-prompt-label",
              checked: e["fullscreen.details.show_core_prompt"],
              onChange: () => n(
                "fullscreen.details.show_core_prompt",
                e["fullscreen.details.show_core_prompt"]
              )
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Core Prompt Keyword Count",
        description: "Number of rarity keywords to display in fullscreen.",
        labelId: "fullscreen-core-prompt-count-label",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            id: "fullscreen-core-prompt-count",
            "aria-labelledby": "fullscreen-core-prompt-count-label",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (c) => r("fullscreen.details.core_prompt_count", c.target.value, 1, 100),
            onBlur: () => s({
              key: "fullscreen.details.core_prompt_count"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt in fullscreen.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 100,
            onChange: (c) => r(
              "fullscreen.details.max_positive_prompt_lines",
              c.target.value,
              1,
              100
            ),
            onBlur: () => s({
              key: "fullscreen.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Negative",
        description: "Display negative prompt in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show User Notes",
        description: "Display user notes in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "fullscreen.details.show_user_notes": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ l.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ l.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt in fullscreen.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 100,
            onChange: (c) => r(
              "fullscreen.details.max_negative_prompt_lines",
              c.target.value,
              1,
              100
            ),
            onBlur: () => s({
              key: "fullscreen.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(Y, { label: "Show Tags", description: "Display tags in fullscreen details.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] })
] });
function Tt({ size: e = 24, color: t, children: n, ...r }) {
  return /* @__PURE__ */ l.jsx(
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
function Nm() {
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx("path", { d: "M18 16.6v2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.6 18h2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ l.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function Im(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Mm(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Tm(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Lm(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx(Nm, {})
  ] });
}
function Am(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Dm(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ l.jsx(Nm, {})
  ] });
}
function Rm(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Pm(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Om(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 15h6" })
  ] });
}
function zm(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Fm = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Im
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Am
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Dm
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Tm },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Lm
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Mm
  },
  { id: "edit_tags", label: "Edit Tags", icon: Pm },
  { id: "edit_notes", label: "Edit Notes", icon: Om },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Rm
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: zm
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Wt }
], Ry = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  thumbnailSizeInput: a,
  initialLoadCountInput: o,
  maxLoadCountInput: i
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Thumbnail Size",
        description: "Size of the image thumbnails in the sidebar (50-500px).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 50,
            max: 500,
            onChange: (c) => r("sidebar.thumbnail_size", c.target.value, 50, 500),
            onBlur: () => s({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "sidebar.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ l.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ l.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Dimensions",
        description: "Display the image dimensions (width x height) on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_dimensions"],
              onChange: () => n("sidebar.show_dimensions", e["sidebar.show_dimensions"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Created At",
        description: "Display the image creation date and time on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_created_at"],
              onChange: () => n("sidebar.show_created_at", e["sidebar.show_created_at"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources). (Note: This setting is ignored during searches)",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Source Info",
        description: "Display source image information and lineage link on image cards.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(Y, { label: "Show Model", description: "Display the model name on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["sidebar.show_model_name"],
          onChange: () => n("sidebar.show_model_name", e["sidebar.show_model_name"])
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(Y, { label: "Show Positive", description: "Display the positive prompt on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(Y, { label: "Show Negative", description: "Display the negative prompt on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(Y, { label: "Show User Notes", description: "Display user notes on the card.", children: /* @__PURE__ */ l.jsxs(
      "select",
      {
        className: "meld-select",
        value: e["sidebar.show_user_notes"],
        onChange: (c) => t((d) => ({
          ...d,
          "sidebar.show_user_notes": c.target.value
        })),
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "always", children: "Always show" }),
          /* @__PURE__ */ l.jsx("option", { value: "if_present", children: "Show only when present" }),
          /* @__PURE__ */ l.jsx("option", { value: "hidden", children: "Always hide" })
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsx(Y, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["sidebar.show_tags"],
          onChange: () => n("sidebar.show_tags", e["sidebar.show_tags"])
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Search Behavior" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Quick Suggestions",
        description: "Show suggested keywords when the search field is empty.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.quick_suggestions"],
              onChange: () => n("search.quick_suggestions", e["search.quick_suggestions"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Input Suggestions",
        description: "Show suggestions when typing search prefixes (e.g. pos:).",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.input_suggest"],
              onChange: () => n("search.input_suggest", e["search.input_suggest"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "List Behavior" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Initial Load Count",
        description: "Number of images to load and display immediately (10-1000).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 10,
            max: 1e3,
            onChange: (c) => r("gallery.initial_load_count", c.target.value, 10, 1e3),
            onBlur: () => s({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 10,
            max: 1e6,
            onChange: (c) => r("gallery.max_load_count", c.target.value, 10, 1e6),
            onBlur: () => s({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Quick Shortcuts (Card)" }),
    [1, 2, 3].map((c) => /* @__PURE__ */ l.jsx(
      Y,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ l.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (d) => t((h) => ({
              ...h,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Fm.map((d) => /* @__PURE__ */ l.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), Py = () => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "ComfyUI-Meld" }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: "Version" }),
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "1.1.0" })
    ] }) })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Author & Links" }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: "Author" }),
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "HappyOnigiri" })
    ] }) }),
    /* @__PURE__ */ l.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "GitHub Repository"
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "Star the project or fork it" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld/issues/new/choose",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "Bug Tracker"
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "Report issues or suggest features" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "a",
      {
        href: "https://x.com/H_OnigiriWorks",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "X (Twitter)"
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "Follow for updates and news" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs(
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
] }), Oy = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: s,
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
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-help", children: [
      /* @__PURE__ */ l.jsx("p", { children: "These shortcuts are available in both View and Full Screen modes." }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "You can combine multiple commands with spaces.",
        /* @__PURE__ */ l.jsx("br", {}),
        "Example: ",
        /* @__PURE__ */ l.jsx("code", { children: "tag:favorite next" }),
        " (Add tag and move to next)",
        /* @__PURE__ */ l.jsx("br", {}),
        "Use quotes for names with spaces. Example: ",
        /* @__PURE__ */ l.jsx("code", { children: 'lt:"My Best"' })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-help__commands", children: [
        /* @__PURE__ */ l.jsx("strong", { children: "Available commands:" }),
        /* @__PURE__ */ l.jsxs("ul", { children: [
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "tag:NAME" }),
            " - Add a tag"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "-tag:NAME" }),
            " - Remove a tag"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "tag-toggle:NAME" }),
            " - Toggle a tag"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "lt:SLOT_ID" }),
            " - Send to Light Table (Example: ",
            /* @__PURE__ */ l.jsx("code", { children: "lt:keep" }),
            ",",
            " ",
            /* @__PURE__ */ l.jsx("code", { children: "lt:refine" }),
            ", ",
            /* @__PURE__ */ l.jsx("code", { children: "lt:trash" }),
            ")"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "next" }),
            " / ",
            /* @__PURE__ */ l.jsx("code", { children: "prev" }),
            " - Navigate images"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "delete" }),
            " - Delete image immediately (No confirm)"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
      i.map((c, d) => /* @__PURE__ */ l.jsx(
        Y,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[c] ? "meld-text-input--error" : ""}`,
              value: e[c] || "",
              onChange: (h) => {
                t((v) => ({
                  ...v,
                  [c]: h.target.value
                }));
              },
              onBlur: () => {
                const h = s(e[c] || "");
                r((v) => ({
                  ...v,
                  [c]: !h
                }));
              }
            }
          )
        },
        c
      )),
      /* @__PURE__ */ l.jsx(
        Y,
        {
          label: "Show Cheat Sheet",
          description: "Display shortcut key guide in View/Full Screen mode.",
          children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
            /* @__PURE__ */ l.jsx(
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
            /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Reset Shortcuts",
        description: "Restore all shortcuts to their default values.",
        children: /* @__PURE__ */ l.jsx(
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
}, zy = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: s,
  handleViewTrash: a,
  handleClearThumbnailCache: o,
  lineageMaxDepthInput: i,
  trashRetentionDaysInput: c,
  autoLinkPhashThresholdInput: d,
  suggestPhashThresholdInput: h,
  databases: v,
  activeDatabaseName: y,
  databaseNameInput: S,
  setDatabaseNameInput: _,
  getRenameDraftForDatabase: x,
  setRenameDraftForDatabase: b,
  isDatabaseLoading: m,
  handleCreateDatabase: p,
  handleRenameDatabase: u,
  handleSwitchDatabase: g,
  handleDeleteDatabase: k
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (w) => s((C) => ({
              ...C,
              "gallery.matching_strategy": w.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "phash_created", children: "pHash & Created Time" }),
              /* @__PURE__ */ l.jsx("option", { value: "filename_phash", children: "Filename -> pHash" }),
              /* @__PURE__ */ l.jsx("option", { value: "phash_only", children: "pHash Only" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: d,
            min: 0,
            max: 100,
            onChange: (w) => t("gallery.auto_link_phash_threshold", w.target.value, 0, 100),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: h,
            min: 0,
            max: 100,
            onChange: (w) => t("gallery.suggest_phash_threshold", w.target.value, 0, 100),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Inherit Tags from Source",
        description: "Automatically copy tags from the source image when a new image is registered or saved.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.inherit_tags"],
              onChange: () => r("gallery.inherit_tags", e["gallery.inherit_tags"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Lineage" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 10,
            onChange: (w) => t("gallery.lineage_max_depth", w.target.value, 1, 10),
            onBlur: () => n({ key: "gallery.lineage_max_depth" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Database" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Create Database",
        description: "Create a new empty database file. Creation uses a confirmation modal.",
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-inline-actions", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "text",
              className: "meld-input",
              value: S,
              onChange: (w) => _(w.target.value),
              placeholder: "database_name",
              disabled: m,
              "aria-label": "Database name"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-button meld-button--secondary",
              onClick: p,
              disabled: m || S.trim().length === 0,
              children: "Create"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-database-list", role: "list", "aria-label": "Database list", children: v.map((w) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-database-card", role: "listitem", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-database-card__info", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-database-card__title-row", children: [
          /* @__PURE__ */ l.jsx("span", { className: "meld-settings-database-card__title", children: w.name }),
          w.is_active && /* @__PURE__ */ l.jsx("span", { className: "meld-settings-database-card__badge", children: "Active" })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-database-card__meta", children: [
          /* @__PURE__ */ l.jsx("span", { children: w.filename }),
          /* @__PURE__ */ l.jsxs("span", { children: [
            w.image_count,
            " images"
          ] }),
          y === w.name && /* @__PURE__ */ l.jsx("span", { children: "Currently loaded" })
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-database-card__actions", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            className: "meld-input meld-settings-database-card__rename-input",
            value: x(w.name),
            onChange: (C) => b(w.name, C.target.value),
            placeholder: "new_database_name",
            disabled: m,
            "aria-label": `Rename ${w.name}`
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: () => u(w),
            disabled: m || x(w.name).trim().length === 0 || x(w.name).trim() === w.name,
            children: "Rename"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: () => g(w),
            disabled: m || w.is_active,
            children: "Switch"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "meld-btn meld-btn--danger",
            onClick: () => k(w),
            disabled: m || !w.can_delete,
            children: "Delete"
          }
        )
      ] })
    ] }, w.name)) })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Thumbnail Cache" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Clear Thumbnail Cache",
        description: "Delete all cached thumbnails. They will be regenerated on next view.",
        children: /* @__PURE__ */ l.jsx(
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
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 0,
            max: 365,
            onChange: (w) => t("gallery.trash_retention_days", w.target.value, 0, 365),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Trash Management",
        description: "View and manage items currently in the trash bin.",
        children: /* @__PURE__ */ l.jsx(
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
] }), Fy = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  thumbnailWindowSizeInput: a,
  maxPositivePromptLinesInput: o,
  maxNegativePromptLinesInput: i,
  viewerCorePromptCountInput: c
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in the viewer.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.loop"],
              onChange: () => n("viewer.loop", e["viewer.loop"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (d) => t((h) => ({
              ...h,
              "viewer.small_image_mode": d.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ l.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Tool Icons",
        description: "Display navigation and action icons in view mode.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_icons"],
              onChange: () => n("viewer.show_icons", e["viewer.show_icons"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Thumbnails",
        description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_thumbnails"],
              onChange: () => n("viewer.show_thumbnails", e["viewer.show_thumbnails"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Thumbnail Window Size",
        description: "Number of thumbnails to keep in the viewer (1-10000).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 1e4,
            onChange: (d) => r("viewer.thumbnail_window_size", d.target.value, 1, 1e4),
            onBlur: () => s({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(Y, { label: "Delete Mode", description: "Choose how images are deleted in view mode.", children: /* @__PURE__ */ l.jsxs(
      "select",
      {
        className: "meld-select",
        value: e["viewer.delete_mode"],
        onChange: (d) => t((h) => ({
          ...h,
          "viewer.delete_mode": d.target.value
        })),
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "confirm", children: "Confirmed" }),
          /* @__PURE__ */ l.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
          /* @__PURE__ */ l.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
        ]
      }
    ) })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when opening the viewer.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (d) => t((h) => ({
              ...h,
              "viewer.details.show_filename": d.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ l.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ l.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(Y, { label: "Show Dimensions", description: "Display dimensions in the details panel.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Created At",
        description: "Display generation date/time in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Source Info",
        description: "Display source image information in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(Y, { label: "Show Model", description: "Display model name in the details panel.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Positive",
        description: "Display positive prompt in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Core Prompt",
        description: "Display a subset of keywords from the positive prompt based on rarity (bottom analytics counts).",
        labelId: "viewer-details-show-core-prompt-label",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              id: "viewer-details-show-core-prompt-checkbox",
              "aria-labelledby": "viewer-details-show-core-prompt-label",
              checked: e["viewer.details.show_core_prompt"],
              onChange: () => n(
                "viewer.details.show_core_prompt",
                e["viewer.details.show_core_prompt"]
              )
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Core Prompt Keyword Count",
        description: "Number of rarity keywords to display.",
        labelId: "viewer-details-core-prompt-count-label",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            id: "viewer-details-core-prompt-count",
            "aria-labelledby": "viewer-details-core-prompt-count-label",
            className: "meld-number-input",
            value: c,
            min: 1,
            max: 100,
            onChange: (d) => r("viewer.details.core_prompt_count", d.target.value, 1, 100),
            onBlur: () => s({
              key: "viewer.details.core_prompt_count"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 100,
            onChange: (d) => r("viewer.details.max_positive_prompt_lines", d.target.value, 1, 100),
            onBlur: () => s({
              key: "viewer.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Show Negative",
        description: "Display negative prompt in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(Y, { label: "Show User Notes", description: "Display user notes in the details panel.", children: /* @__PURE__ */ l.jsxs(
      "select",
      {
        className: "meld-select",
        value: e["viewer.details.show_user_notes"],
        onChange: (d) => t((h) => ({
          ...h,
          "viewer.details.show_user_notes": d.target.value
        })),
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "always", children: "Always show" }),
          /* @__PURE__ */ l.jsx("option", { value: "if_present", children: "Show only when present" }),
          /* @__PURE__ */ l.jsx("option", { value: "hidden", children: "Always hide" })
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsx(
      Y,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (d) => r("viewer.details.max_negative_prompt_lines", d.target.value, 1, 100),
            onBlur: () => s({
              key: "viewer.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(Y, { label: "Show Tags", description: "Display tags in the details panel.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["viewer.details.show_tags"],
          onChange: () => n("viewer.details.show_tags", e["viewer.details.show_tags"])
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] })
] }), $m = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: s,
    setShortcutErrors: a,
    handleClose: o,
    handleToggle: i,
    handleNumberChange: c,
    handleNumberBlur: d,
    handleResetShortcuts: h,
    handleViewTrash: v,
    handleClearThumbnailCache: y,
    validateShortcut: S,
    // Input states
    initialLoadCountInput: _,
    maxLoadCountInput: x,
    lineageMaxDepthInput: b,
    thumbnailWindowSizeInput: m,
    trashRetentionDaysInput: p,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: g,
    maxPositivePromptLinesInput: k,
    maxNegativePromptLinesInput: w,
    fullscreenMaxPositivePromptLinesInput: C,
    fullscreenMaxNegativePromptLinesInput: T,
    viewerCorePromptCountInput: z,
    fullscreenCorePromptCountInput: I,
    thumbnailSizeInput: R,
    databases: U,
    activeDatabaseName: B,
    databaseNameInput: N,
    setDatabaseNameInput: F,
    getRenameDraftForDatabase: D,
    setRenameDraftForDatabase: V,
    isLoading: j,
    submitCreateDatabase: E,
    confirmRenameDatabase: L,
    confirmSwitchDatabase: O,
    confirmDeleteDatabase: M
  } = Ay();
  ke({ onEscape: o });
  const A = f.useRef(!1), P = (K) => {
    K.target === K.currentTarget && (A.current = !0);
  }, W = (K) => {
    K.target === K.currentTarget && A.current && o(), A.current = !1;
  }, H = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], X = (K) => K.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""), re = (K, te) => {
    if (K.key === "ArrowDown" || K.key === "ArrowRight") {
      K.preventDefault();
      const G = H[(te + 1) % H.length];
      G && t(G.id);
    } else if (K.key === "ArrowUp" || K.key === "ArrowLeft") {
      K.preventDefault();
      const G = H[(te - 1 + H.length) % H.length];
      G && t(G.id);
    }
  }, se = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ l.jsx(
          zy,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            handleClearThumbnailCache: y,
            lineageMaxDepthInput: b,
            trashRetentionDaysInput: p,
            autoLinkPhashThresholdInput: u,
            suggestPhashThresholdInput: g,
            databases: U,
            activeDatabaseName: B,
            databaseNameInput: N,
            setDatabaseNameInput: F,
            getRenameDraftForDatabase: D,
            setRenameDraftForDatabase: V,
            isDatabaseLoading: j,
            handleCreateDatabase: E,
            handleRenameDatabase: L,
            handleSwitchDatabase: O,
            handleDeleteDatabase: M
          }
        );
      case "Gallery":
        return /* @__PURE__ */ l.jsx(
          Ry,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: R,
            initialLoadCountInput: _,
            maxLoadCountInput: x
          }
        );
      case "View":
        return /* @__PURE__ */ l.jsx(
          Fy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: m,
            maxPositivePromptLinesInput: k,
            maxNegativePromptLinesInput: w,
            viewerCorePromptCountInput: z
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ l.jsx(
          Dy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: C,
            maxNegativePromptLinesInput: T,
            fullscreenCorePromptCountInput: I
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ l.jsx(
          Oy,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: s,
            setShortcutErrors: a,
            validateShortcut: S,
            handleToggle: i,
            handleResetShortcuts: h
          }
        );
      case "Information":
        return /* @__PURE__ */ l.jsx(Py, {});
      default:
        return null;
    }
  };
  return ue.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: P,
        onMouseUp: W,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content meld-settings-modal", onClick: (K) => K.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: o,
                "aria-label": "Close",
                children: /* @__PURE__ */ l.jsx(de, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ l.jsx("div", { className: "meld-tabs", role: "tablist", children: H.map((K, te) => /* @__PURE__ */ l.jsx(
              "button",
              {
                id: `meld-settings-tab-${X(K.id)}`,
                type: "button",
                role: "tab",
                "aria-selected": e === K.id,
                tabIndex: e === K.id ? 0 : -1,
                "aria-controls": `meld-settings-tabpanel-${X(K.id)}`,
                className: `meld-tab ${e === K.id ? "active" : ""}`,
                onClick: () => t(K.id),
                onKeyDown: (G) => re(G, te),
                children: K.label
              },
              K.id
            )) }) }),
            /* @__PURE__ */ l.jsx(
              "div",
              {
                className: "meld-modal-body",
                role: "tabpanel",
                id: `meld-settings-tabpanel-${X(e)}`,
                "aria-labelledby": `meld-settings-tab-${X(e)}`,
                children: se()
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, _t = "none", Xr = (e) => {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}, Ge = (e) => {
  e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
}, $y = () => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return !1;
  const t = e.tagName;
  return t === "INPUT" || t === "TEXTAREA" || !!e.isContentEditable;
}, Wm = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: s, refreshImages: a } = ie(), [o, i] = f.useState([]), [c, d] = f.useState(t), [h, v] = f.useState(""), [y, S] = f.useState(!0), [_, x] = f.useState(!1), b = f.useRef(null), m = e.length > 1, p = f.useRef(!1), u = (I) => {
    I.target === I.currentTarget && (p.current = !0);
  }, g = (I) => {
    I.target === I.currentTarget && p.current && n(), p.current = !1;
  };
  f.useEffect(() => {
    let I = !0;
    return (async () => {
      S(!0);
      try {
        const U = await ri();
        I && i(U || []);
      } catch (U) {
        I && $.error("Failed to fetch tags:", U);
      } finally {
        I && S(!1);
      }
    })(), () => {
      I = !1;
    };
  }, []), f.useEffect(() => {
    b.current && b.current.focus();
  }, []), ke({ onEscape: n });
  const k = f.useMemo(() => o.filter(
    (I) => I.name.toLowerCase().includes(h.toLowerCase()) && !c.includes(I.name)
  ), [o, h, c]), w = (I) => {
    const R = I.trim();
    if (R.toLowerCase() === _t) {
      alert(`Tag name '${_t}' is reserved for search and cannot be used.`);
      return;
    }
    R && !c.includes(R) && (d([...c, R]), v(""));
  }, C = (I) => {
    d(c.filter((R) => R !== I));
  }, T = async () => {
    x(!0);
    try {
      if (m) {
        const I = c.filter((U) => !t.includes(U)), R = t.filter((U) => !c.includes(U));
        await pm(e, I, R);
      } else {
        const I = e[0];
        if (I === void 0)
          throw new Error("No image selected");
        await bg(I, c);
      }
      await a(), s({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (I) {
      $.error("Failed to update tags:", I), alert("Failed to update tags.");
    } finally {
      x(!1);
    }
  }, z = (I) => {
    I.key === "Enter" && h.trim() && (Ge(I), w(h.trim()));
  };
  return ue.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: u,
        onMouseUp: g,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (I) => I.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(ar, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: m ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(de, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
            m && /* @__PURE__ */ l.jsx(
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
            /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: m ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((I) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                I,
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => C(I),
                    children: /* @__PURE__ */ l.jsx(de, { size: 12 })
                  }
                )
              ] }, I)) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ l.jsx(on, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: b,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: h,
                    onChange: (I) => v(I.target.value),
                    onKeyDown: z
                  }
                ),
                h.trim() && !c.includes(h.trim()) && /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => w(h),
                    children: [
                      /* @__PURE__ */ l.jsx(Ns, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: y ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? h ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : k.map((I) => /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => w(I.name),
                  children: I.name
                },
                I.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: n, children: "Cancel" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
                onClick: T,
                disabled: _,
                children: _ ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Is = (e, t) => {
  const n = f.useCallback(async (x) => eo(x), []), r = f.useCallback(
    async (x, b, m) => {
      await pm(x, b, m);
    },
    []
  ), s = f.useCallback(async (x) => {
    try {
      const b = await jg(x.id);
      return b.workflow ? (await window.app.loadGraphData(b.workflow), $.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (b) {
      return $.error("Error restoring workflow:", b), alert("Failed to restore workflow."), !1;
    }
  }, []), a = f.useCallback(async (x) => {
    try {
      const b = await Cg(x.id), m = b.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", p = window.app, u = window.LiteGraph;
      if (!p.graph || !p.canvas || !u)
        return alert("ComfyUI graph is not ready. Please open a workflow first."), !1;
      const g = u.createNode(m);
      if (!g)
        return $.error(`Node type ${m} not found.`), alert(
          `Node type ${m} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const k = b.is_flux ? {
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
      if (g.widgets) {
        for (const [z, I] of Object.entries(k)) {
          const R = b[z];
          if (R != null && R !== "") {
            const U = g.widgets.find((B) => B.name === I);
            U && (U.value = R);
          }
        }
        const T = g.widgets.find((z) => z.name === "control_after_generate");
        T && (T.value = "fixed");
      }
      const w = p.canvas.ds.offset, C = p.canvas.ds.scale;
      return g.pos = [(-w[0] + 400) / C, (-w[1] + 300) / C], p.graph.add(g), p.canvas.selectNode(g), p.canvas.centerOnNode(g), !0;
    } catch (b) {
      return $.error("Error adding Unified Loader:", b), alert("Failed to load settings."), !1;
    }
  }, []), o = f.useCallback(
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
  ), i = f.useCallback(
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
  ), c = f.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), d = f.useCallback(
    (x) => {
      const b = window.app;
      if (!(b != null && b.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const m = b.graph._nodes.filter((u) => Kn(u.type));
      if (m.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (m.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: x,
            nodes: m.map((u) => ({
              id: String(u.id),
              type: u.type ?? "",
              title: u.title
            })),
            onSelect: (u) => {
              Yr(x, u);
            }
          }
        }), !0;
      const p = Yr(x);
      return p.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: p.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : p.reason === "no_widgets" || p.reason === "no_image_widget" ? "The selected loader node does not expose an image widget." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), h = f.useCallback(
    (x) => {
      const b = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: b }
      });
    },
    [t]
  ), v = f.useCallback(
    async (x, b = "run") => {
      var p;
      $.log("handleRunWithMask called", x, b);
      const m = Array.isArray(x) ? x : [x];
      if (b === "apply") {
        const u = window.app, g = ((p = u == null ? void 0 : u.graph) == null ? void 0 : p._nodes) || [];
        $.log(
          "Current graph nodes:",
          g.map((T) => ({
            id: T.id,
            type: T.type ?? ""
          }))
        );
        const k = g.some((T) => Mr(T.type)), w = g.some((T) => Kn(T.type));
        if ($.log("Nodes found:", { hasMaskNode: k, hasLoaderNode: w }), !k || !w) {
          const T = [];
          w || T.push("'Meld Image Loader'"), k || T.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${T.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
        if (m.length > 1) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "'Apply' mode without queueing only supports single image selection."
            }
          });
          return;
        }
        const C = m[0];
        if (!C) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "No images selected"
            }
          });
          return;
        }
        t({
          type: "OPEN_MODAL",
          payload: { type: "mask_editor", imageId: C.id, mode: b }
        });
        return;
      }
      try {
        if (!(await km()).some((k) => k.valid && k.mask_count >= 1)) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "No workflows found with at least one 'Load Image (as Mask)' node. Please save a compatible workflow first."
            }
          });
          return;
        }
      } catch (u) {
        $.error("[Meld] Error checking workflows:", u);
      }
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "workflow_selection",
          images: m,
          isMaskSequence: !0
        }
      });
    },
    [t]
  ), y = f.useCallback(
    async (x, b) => {
      try {
        const m = x.id, u = (await eo([m])).restored_ids || [m];
        t({ type: "REMOVE_IMAGES", payload: u }), b == null || b();
      } catch (m) {
        t({
          type: "SET_ERROR",
          payload: m instanceof Error ? m.message : String(m)
        });
      }
    },
    [t]
  ), S = f.useCallback(
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
  ), _ = f.useCallback(
    async (x, b) => {
      try {
        const m = await Sg(x, b);
        t({ type: "UPDATE_IMAGE", payload: m });
      } catch (m) {
        t({
          type: "SET_ERROR",
          payload: m instanceof Error ? m.message : String(m)
        });
      }
    },
    [t]
  );
  return {
    restoreImages: n,
    bulkUpdateImageTags: r,
    handleRestoreWorkflow: s,
    handleAddUnifiedLoader: a,
    handleEditTags: o,
    handleEditSource: c,
    handleSendToWorkflow: d,
    handleRunWithWorkflow: h,
    handleRunWithMask: v,
    handleRestore: y,
    handleDelete: S,
    handleEditNotes: i,
    handleUpdateUserNotes: _
  };
}, Um = ({ imageId: e, initialNotes: t, onClose: n }) => {
  const { state: r, dispatch: s } = ie(), { handleUpdateUserNotes: a } = Is(r, s), [o, i] = f.useState(t), [c, d] = f.useState(!1), h = f.useRef(null), v = f.useRef(!1), y = (x) => {
    x.target === x.currentTarget && (v.current = !0);
  }, S = (x) => {
    x.target === x.currentTarget && v.current && n(), v.current = !1;
  };
  f.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const _ = f.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (x) {
      $.error("Failed to update notes:", x), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return f.useEffect(() => {
    const x = (b) => {
      b.key === "Enter" && (b.ctrlKey || b.metaKey) && b.target === h.current && (b.preventDefault(), b.stopPropagation(), b.stopImmediatePropagation(), _());
    };
    return window.addEventListener("keydown", x, { capture: !0 }), () => {
      window.removeEventListener("keydown", x, {
        capture: !0
      });
    };
  }, [_]), ke({ onEscape: n }), ue.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: S,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(ig, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, "aria-label": "Close", children: /* @__PURE__ */ l.jsx(de, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ l.jsx(
              "textarea",
              {
                id: "meld-notes-textarea",
                ref: h,
                className: "meld-image-card__notes-textarea",
                "aria-label": "Image notes",
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
                onChange: (x) => i(x.target.value)
              }
            ),
            /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: n, children: "Cancel" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
                onClick: _,
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
}, Vm = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = ie(), s = f.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  ke({ onEscape: s });
  const a = f.useRef(!1), o = f.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = f.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && s(), a.current = !1;
    },
    [s]
  );
  return ue.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: o,
        onMouseUp: i,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (c) => c.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsx("h2", { children: "Select Target Node" }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: s,
                    "aria-label": "Close",
                    children: /* @__PURE__ */ l.jsx(de, { size: 20, "aria-hidden": !0 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
                /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    style: {
                      marginBottom: "15px",
                      fontSize: "14px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: [
                      "Multiple loader nodes found in the current workflow. Select which one to use for",
                      " ",
                      /* @__PURE__ */ l.jsx("strong", { children: e.filename }),
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: t.map((c) => /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-workflow-node-item",
                    onClick: () => {
                      n(c.id), s();
                    },
                    children: [
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                        /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: c.title || c.type }),
                        /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                          "#",
                          c.id
                        ] })
                      ] }),
                      /* @__PURE__ */ l.jsx(qr, { size: 12 })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: s, children: "Cancel" }) })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Bm = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var F;
  const { dispatch: s } = ie(), [a, o] = f.useState([]), [i, c] = f.useState(!0), [d, h] = f.useState(null), [v, y] = f.useState(!1), [S, _] = f.useState(null), [x, b] = f.useState({}), [m, p] = f.useState({}), [u, g] = f.useState(""), k = f.useRef(null), w = f.useMemo(() => a.map((D) => {
    let V = D.valid, j = D.reason;
    return r && D.mask_count === 0 && (V = !1, j = "No 'Load Image (as Mask)' node found."), { ...D, valid: V, reason: j };
  }).sort((D, V) => D.valid !== V.valid ? D.valid ? -1 : 1 : D.name.localeCompare(V.name)), [a, r]), C = f.useMemo(() => {
    if (!u.trim()) return w;
    const D = u.toLowerCase();
    return w.filter((V) => V.name.toLowerCase().includes(D));
  }, [w, u]);
  f.useEffect(() => {
    let D = !0;
    return (async () => {
      try {
        c(!0);
        const j = await km();
        D && (o(j), h(null));
      } catch (j) {
        D && h(j instanceof Error ? j.message : String(j));
      } finally {
        D && c(!1);
      }
    })(), () => {
      D = !1;
    };
  }, []), f.useEffect(() => {
    !i && k.current && k.current.focus();
  }, [i]);
  const T = f.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]);
  ke({ onEscape: T });
  const z = f.useRef(!1), I = f.useCallback((D) => {
    D.target === D.currentTarget && (z.current = !0);
  }, []), R = f.useCallback(
    (D) => {
      D.target === D.currentTarget && z.current && T(), z.current = !1;
    },
    [T]
  ), U = async (D, V) => {
    if (!v)
      try {
        y(!0);
        const j = await t(D, V);
        n == null || n(), j !== !1 && T();
      } catch (j) {
        h(j instanceof Error ? j.message : String(j));
      } finally {
        y(!1);
      }
  }, B = async (D) => {
    if (!(x[D] || m[D]))
      try {
        p((L) => ({ ...L, [D]: !0 }));
        const V = await bm(D), j = [], E = (L) => {
          if (!L) return !1;
          const O = L.replace(/\s+/g, "").toLowerCase();
          return r ? O === "loadimagemask" : O === "meldimageloader" || O === "loadimage";
        };
        if (V.nodes && Array.isArray(V.nodes)) {
          $.log("Extracting nodes from UI format workflow", V.nodes.length);
          for (const L of V.nodes)
            E(L.type) && ($.log("Found target node (UI):", L.id, L.type, L.title), j.push({
              id: String(L.id),
              type: L.type || "",
              title: L.title
            }));
        } else {
          $.log("Extracting nodes from API format workflow");
          for (const L in V) {
            const O = V[L];
            O && typeof O == "object" && E(O.class_type) && ($.log("Found target node (API):", L, O.class_type), j.push({
              id: L,
              type: O.class_type || ""
            }));
          }
        }
        j.length === 0 && $.warn("No loader nodes found in workflow JSON despite count > 0"), b((L) => ({ ...L, [D]: j }));
      } catch (V) {
        $.error("Failed to fetch workflow nodes:", V);
      } finally {
        p((V) => ({ ...V, [D]: !1 }));
      }
  }, N = (D) => {
    if (!D.valid || v) return;
    if ((r ? D.mask_count : D.loader_count + D.load_image_count) <= 1) {
      U(D.name);
      return;
    }
    S === D.name ? _(null) : (_(D.name), B(D.name));
  };
  return ue.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: I,
        onMouseUp: R,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (D) => D.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(Jo, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: T, children: /* @__PURE__ */ l.jsx(de, { size: 20 }) })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ l.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ l.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ l.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ l.jsx(rm, { size: 20 }),
                /* @__PURE__ */ l.jsx("span", { children: d })
              ] }) : a.length === 0 ? /* @__PURE__ */ l.jsx(
                "div",
                {
                  style: {
                    padding: "40px",
                    textAlign: "center",
                    color: "var(--meld-text-secondary)"
                  },
                  children: "No workflows found in ComfyUI/user/default/workflows"
                }
              ) : /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-list", children: [
                /* @__PURE__ */ l.jsxs(
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
                      /* @__PURE__ */ l.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (F = e[0]) == null ? void 0 : F.filename }),
                      ". Workflows must have at least one ",
                      /* @__PURE__ */ l.jsx("strong", { children: "Meld Image Loader" }),
                      " or",
                      " ",
                      /* @__PURE__ */ l.jsx("strong", { children: "Load Image" }),
                      " node",
                      r && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                        " ",
                        "and one ",
                        /* @__PURE__ */ l.jsx("strong", { children: "Load Image (as Mask)" }),
                        " node"
                      ] }),
                      "."
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", style: { marginBottom: "12px" }, children: [
                  /* @__PURE__ */ l.jsx(on, { className: "meld-tag-search-icon", size: 16 }),
                  /* @__PURE__ */ l.jsx(
                    "input",
                    {
                      ref: k,
                      type: "text",
                      className: "meld-tag-search-input",
                      placeholder: "Search workflows...",
                      value: u,
                      onChange: (D) => g(D.target.value)
                    }
                  ),
                  u && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-item__btn",
                      onClick: () => {
                        var D;
                        g(""), (D = k.current) == null || D.focus();
                      },
                      style: { padding: "4px" },
                      children: /* @__PURE__ */ l.jsx(de, { size: 14 })
                    }
                  )
                ] }),
                C.length === 0 ? /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : C.map((D) => {
                  const V = r ? D.mask_count : D.loader_count + D.load_image_count, j = S === D.name, E = x[D.name] || [], L = m[D.name];
                  return /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${D.valid ? "" : "meld-workflow-item--invalid"} ${j ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => N(D),
                        title: D.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__name", children: D.name }),
                            !D.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__reason", children: D.reason }),
                            D.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__supports", children: V > 1 ? `Multiple loaders found (${V})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${D.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          D.valid && V <= 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (O) => {
                                O.stopPropagation(), U(D.name);
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(qr, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          D.valid && V > 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (O) => {
                                O.stopPropagation(), N(D);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                j ? "Close" : "Select Node",
                                /* @__PURE__ */ l.jsx(
                                  Zo,
                                  {
                                    size: 14,
                                    style: {
                                      transform: j ? "rotate(90deg)" : "rotate(0deg)",
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
                    j && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker", children: L ? /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ l.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: E.map((O) => /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => U(D.name, O.id),
                          children: [
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: O.title || O.type }),
                              /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                O.id
                              ] })
                            ] }),
                            /* @__PURE__ */ l.jsx(qr, { size: 12 })
                          ]
                        },
                        O.id
                      )) })
                    ] }) })
                  ] }, D.name);
                })
              ] }) }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn--secondary",
                  onClick: T,
                  disabled: v,
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
}, Wy = ({
  title: e,
  message: t,
  details: n,
  confirmLabel: r = "OK",
  cancelLabel: s = "Cancel",
  danger: a = !1,
  requiredText: o,
  requiredTextLabel: i,
  onConfirm: c,
  onCancel: d
}) => {
  const h = f.useRef(null), v = f.useRef(null), [y, S] = f.useState(""), [_, x] = f.useState(!1);
  ke({ onEscape: _ ? () => {
  } : d ?? (() => {
  }) }), f.useEffect(() => {
    if (v.current = document.activeElement, h.current) {
      const p = h.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      p.length > 0 ? p[0].focus() : h.current.focus();
    }
    const m = (p) => {
      if (p.key === "Tab") {
        if (!h.current) return;
        const u = h.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (u.length === 0) return;
        const g = u.item(0), k = u.item(u.length - 1);
        if (!g || !k) return;
        p.shiftKey ? document.activeElement === g && (k.focus(), p.preventDefault()) : document.activeElement === k && (g.focus(), p.preventDefault());
      }
    };
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), v.current && typeof v.current.focus == "function" && v.current.focus();
    };
  }, []);
  const b = _ || !!o && y !== o;
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-confirm-modal__overlay",
      onClick: () => {
        _ || d == null || d();
      },
      onKeyDown: (m) => {
        m.key === "Enter" && !_ && (d == null || d());
      },
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: h,
          className: "meld-confirm-modal__dialog",
          onClick: (m) => m.stopPropagation(),
          onKeyDown: (m) => m.stopPropagation(),
          role: "alertdialog",
          "aria-modal": "true",
          "aria-label": e || t,
          tabIndex: -1,
          children: [
            e && /* @__PURE__ */ l.jsx("h3", { className: "meld-confirm-modal__title", children: e }),
            /* @__PURE__ */ l.jsx("p", { className: "meld-confirm-modal__message", children: t }),
            n && n.length > 0 && /* @__PURE__ */ l.jsx("ul", { className: "meld-confirm-modal__details", children: n.map((m) => /* @__PURE__ */ l.jsx("li", { children: m }, m)) }),
            o && /* @__PURE__ */ l.jsxs("div", { className: "meld-confirm-modal__input-group", children: [
              /* @__PURE__ */ l.jsx("label", { className: "meld-confirm-modal__input-label", htmlFor: "meld-confirm-modal-input", children: i || `Type "${o}" to confirm.` }),
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  id: "meld-confirm-modal-input",
                  type: "text",
                  className: "meld-confirm-modal__input",
                  value: y,
                  onChange: (m) => S(m.target.value),
                  autoComplete: "off",
                  autoCapitalize: "off",
                  spellCheck: !1,
                  disabled: _
                }
              )
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-confirm-modal__actions", children: [
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                  onClick: () => d == null ? void 0 : d(),
                  disabled: _,
                  children: s
                }
              ),
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-confirm-modal__btn meld-confirm-modal__btn--confirm${a ? " meld-confirm-modal__btn--danger" : ""}`,
                  onClick: async () => {
                    if (!b) {
                      x(!0);
                      try {
                        await Promise.resolve(c(y));
                      } catch {
                      } finally {
                        x(!1);
                      }
                    }
                  },
                  disabled: b,
                  children: r
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, no = async (e, t) => {
  await _g(e, t), ne.getState().removeImages(e);
}, Qm = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: s, dispatch: a } = ie(), o = f.useRef(!0);
  f.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = f.useMemo(
    () => s.searchQuery.toLowerCase().includes("has_derivatives:yes") || s.searchQuery.toLowerCase().includes("has_derivatives:true") || s.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [s.searchQuery]
  ), c = f.useMemo(() => s.searchQuery.trim() !== "", [s.searchQuery]), d = ne((u) => u.buckets), h = f.useMemo(() => s.viewerMode === "lighttable" && s.viewerLightTableSlotId ? (d[s.viewerLightTableSlotId] || []).map((g) => {
    const k = Number.parseInt(g, 10);
    return s.images.find((w) => w.id === k) || s.lineageImages.find((w) => w.id === k) || null;
  }).filter((g) => g !== null) : s.viewerMode === "lineage" && s.lineageImages.length > 0 ? s.lineageImages : s.images.filter(
    (u) => u.exists !== !1 && (s.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
  ), [
    s.viewerMode,
    s.viewerLightTableSlotId,
    d,
    s.lineageImages,
    s.images,
    s.settings,
    c,
    i
  ]), v = f.useRef(s.viewerImageId);
  f.useEffect(() => {
    v.current = s.viewerImageId;
  }, [s.viewerImageId]);
  const y = f.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  ke({ onEscape: y });
  const S = f.useRef(!1), _ = f.useCallback((u) => {
    u.target === u.currentTarget && (S.current = !0);
  }, []), x = f.useCallback(
    (u) => {
      u.target === u.currentTarget && S.current && y(), S.current = !1;
    },
    [y]
  ), b = f.useCallback(
    (u) => {
      if (!o.current) return;
      const g = v.current;
      if (g === null || !u.has(g))
        return;
      const k = h.findIndex(
        (C) => C.id === g
      );
      if (k === -1) return;
      let w = !1;
      for (let C = k + 1; C < h.length; C++) {
        const T = h[C];
        if (T && !u.has(T.id)) {
          a({
            type: "OPEN_VIEWER",
            payload: {
              id: T.id,
              mode: s.viewerMode,
              // Preserve slotId in lighttable mode to stay within the slot
              ...s.viewerMode === "lighttable" && s.viewerLightTableSlotId ? { slotId: s.viewerLightTableSlotId } : {}
            }
          }), w = !0;
          break;
        }
      }
      if (!w)
        for (let C = k - 1; C >= 0; C--) {
          const T = h[C];
          if (T && !u.has(T.id)) {
            a({
              type: "OPEN_VIEWER",
              payload: {
                id: T.id,
                mode: s.viewerMode,
                // Preserve slotId in lighttable mode to stay within the slot
                ...s.viewerMode === "lighttable" && s.viewerLightTableSlotId ? { slotId: s.viewerLightTableSlotId } : {}
              }
            }), w = !0;
            break;
          }
        }
      w || a({ type: "CLOSE_VIEWER" });
    },
    [s.viewerMode, s.viewerLightTableSlotId, h, a]
  ), m = async () => {
    var u, g;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const k = new Set(e), w = h.filter((C) => k.has(C.id));
      if (b(k), await no(e, n), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((g = (u = s.activeModal).onSuccess) == null || g.call(u)), !n && r && r(w), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (k) {
      a({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, p = async () => {
    var u, g;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const k = new Set(e);
      for (const C of e) {
        const T = await ti(C);
        if (!o.current) return;
        for (const z of T)
          k.add(z.id);
      }
      const w = h.filter((C) => k.has(C.id));
      if (b(k), await no(Array.from(k), n), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((g = (u = s.activeModal).onSuccess) == null || g.call(u)), !n && r && r(w), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(k)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (k) {
      a({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return ue.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: _,
        onMouseUp: x,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(Wt, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: y, children: /* @__PURE__ */ l.jsx(de, { size: 20 }) })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  style: {
                    padding: "10px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                  },
                  children: [
                    /* @__PURE__ */ l.jsxs("p", { children: [
                      "Are you sure you want to ",
                      n ? "permanently delete" : "move to trash",
                      " ",
                      /* @__PURE__ */ l.jsx("strong", { children: e.length }),
                      " selected items?"
                    ] }),
                    /* @__PURE__ */ l.jsxs(
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
                          /* @__PURE__ */ l.jsx(
                            zh,
                            {
                              size: 20,
                              style: {
                                color: n ? "var(--meld-danger-color)" : "var(--meld-accent-color)",
                                flexShrink: 0
                              }
                            }
                          ),
                          /* @__PURE__ */ l.jsx("div", { style: { fontSize: "13px" }, children: n ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                            /* @__PURE__ */ l.jsx("strong", { children: "WARNING:" }),
                            " Physical files will be permanently deleted from the trash bin. This operation cannot be undone."
                          ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                            /* @__PURE__ */ l.jsx("strong", { children: "INFO:" }),
                            " Selected items will be moved to the trash bin. You can restore them later from the settings."
                          ] }) })
                        ]
                      }
                    ),
                    t && /* @__PURE__ */ l.jsxs(
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
                          /* @__PURE__ */ l.jsx("strong", { children: "Source" }),
                          " or derivatives. You can choose to delete just the selected items or all related items (lineage)."
                        ]
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
                /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: y, children: "Cancel" }),
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--danger",
                      onClick: m,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: p,
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
}, Hm = ({ message: e }) => {
  const { dispatch: t } = ie(), n = f.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return ke({ onEscape: n }), /* @__PURE__ */ l.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(rm, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ l.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ l.jsx(de, { size: 20 }) })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsx("div", { style: { padding: "20px 0", textAlign: "center", fontSize: "14px" }, children: e }) }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx("button", { className: "meld-btn meld-btn--primary", onClick: n, type: "button", children: "OK" }) })
  ] }) });
}, Km = ({ imageId: e }) => {
  const { state: t, dispatch: n, refreshImages: r } = ie(), [s, a] = f.useState([]), [o, i] = f.useState(!0), [c, d] = f.useState(!1), h = f.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  ke({ onEscape: h });
  const v = f.useRef(!1), y = (w) => {
    w.target === w.currentTarget && (v.current = !0);
  }, S = (w) => {
    w.target === w.currentTarget && v.current && h(), v.current = !1;
  }, _ = t.images.find((w) => w.id === e), x = f.useCallback(
    async (w) => {
      i(!0);
      try {
        const C = t.settings["gallery.suggest_phash_threshold"], T = await kg(e, C, w);
        w.aborted || a(T);
      } catch (C) {
        w.aborted || $.error("Failed to load suggestions:", C);
      } finally {
        w.aborted || i(!1);
      }
    },
    [e, t.settings]
  );
  f.useEffect(() => {
    const w = new AbortController();
    return x(w.signal), () => w.abort();
  }, [x]);
  const b = async (w) => {
    if (w == null) {
      $.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!_ || w === _.parent_id) && !(_.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await xc(e, w), await mm(e), await r(), h();
      } catch (C) {
        $.error("Failed to link parent:", C);
      }
  }, m = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await xc(e, null), await r(), h();
      } catch (w) {
        $.error("Failed to remove source:", w), alert("Failed to remove source image.");
      }
  }, p = async (w) => {
    i(!0);
    try {
      const C = await Jg(w), { id: T } = await fm({
        filename: C.name,
        subfolder: C.subfolder || "",
        type: C.type || "input"
      });
      if (T === e) {
        alert("Uploaded image is identical to the current image. Cannot set as source.");
        return;
      }
      await b(T);
    } catch (C) {
      $.error("Failed to upload/register image:", C);
    } finally {
      i(!1);
    }
  }, u = (w) => {
    w.preventDefault(), w.stopPropagation(), d(!1);
    const C = w.dataTransfer.files[0];
    C != null && C.type.startsWith("image/") && p(C);
  };
  if (!_) return null;
  const g = s.filter((w) => w.is_source_match), k = s.filter((w) => !w.is_source_match);
  return ue.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: S,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "parent-selection-modal-title",
            onClick: (w) => w.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { id: "parent-selection-modal-title", children: [
                  "Select Source for #",
                  _.id
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: h,
                    "aria-label": "Close",
                    children: /* @__PURE__ */ l.jsx(de, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
                _.parent_id && /* @__PURE__ */ l.jsxs(
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
                      /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            minWidth: 0
                          },
                          children: [
                            /* @__PURE__ */ l.jsx(tg, { size: 16, color: "var(--meld-accent-color)" }),
                            /* @__PURE__ */ l.jsxs(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "4px",
                                  minWidth: 0
                                },
                                children: [
                                  /* @__PURE__ */ l.jsx(
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
                                  /* @__PURE__ */ l.jsxs(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        minWidth: 0
                                      },
                                      children: [
                                        _.parent_filename && /* @__PURE__ */ l.jsx(
                                          "img",
                                          {
                                            src: ft(
                                              {
                                                filename: _.parent_filename,
                                                subfolder: _.parent_subfolder || "",
                                                type: _.parent_type || "output"
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
                                        /* @__PURE__ */ l.jsxs(
                                          "div",
                                          {
                                            style: {
                                              display: "flex",
                                              flexDirection: "column",
                                              minWidth: 0
                                            },
                                            children: [
                                              /* @__PURE__ */ l.jsx(
                                                "span",
                                                {
                                                  style: {
                                                    fontWeight: "bold",
                                                    fontSize: "0.95em",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                  },
                                                  children: _.parent_filename || "Unknown Image"
                                                }
                                              ),
                                              /* @__PURE__ */ l.jsxs(
                                                "span",
                                                {
                                                  style: {
                                                    color: "var(--meld-text-secondary)",
                                                    fontSize: "0.85em"
                                                  },
                                                  children: [
                                                    "#",
                                                    _.parent_id
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
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn--danger meld-btn--sm",
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
                          onClick: m,
                          title: "Remove Source",
                          children: /* @__PURE__ */ l.jsx(eg, { size: 16 })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    className: `meld-drop-zone ${c ? "meld-drop-zone--active" : ""}`,
                    onDragEnter: (w) => {
                      w.preventDefault(), w.stopPropagation(), d(!0);
                    },
                    onDragOver: (w) => {
                      w.preventDefault(), w.stopPropagation(), w.dataTransfer.dropEffect = "copy", d(!0);
                    },
                    onDragLeave: (w) => {
                      w.preventDefault(), w.stopPropagation(), d(!1);
                    },
                    onDrop: u,
                    children: [
                      /* @__PURE__ */ l.jsx(mg, { size: 32 }),
                      /* @__PURE__ */ l.jsx("p", { children: "Drop an image file here to set it as source" })
                    ]
                  }
                ),
                o ? /* @__PURE__ */ l.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestions-container", children: [
                  g.length > 0 && /* @__PURE__ */ l.jsxs("section", { children: [
                    /* @__PURE__ */ l.jsx("h3", { children: "Source Matches (from metadata)" }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: g.map((w) => {
                      const C = w.id === _.parent_id;
                      return /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          "aria-pressed": C,
                          "aria-current": C ? "true" : void 0,
                          "aria-label": `Select ${w.filename} as source${C ? " (current)" : ""}`,
                          className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                          onClick: () => !C && b(w.id),
                          onKeyDown: (T) => {
                            (T.key === "Enter" || T.key === " ") && (T.preventDefault(), C || b(w.id));
                          },
                          style: {
                            cursor: C ? "default" : "pointer",
                            ...C ? {
                              borderColor: "var(--meld-accent-color)",
                              boxShadow: "0 0 0 2px var(--meld-accent-color)"
                            } : {}
                          },
                          children: [
                            /* @__PURE__ */ l.jsx("img", { src: ft(w, 64), alt: w.filename }),
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: w.filename }),
                              C && /* @__PURE__ */ l.jsx(
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
                        w.id
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ l.jsxs("section", { children: [
                    /* @__PURE__ */ l.jsx("h3", { children: "Visual Matches (pHash)" }),
                    k.length > 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: k.map((w) => {
                      const C = w.id === _.parent_id;
                      return /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          "aria-pressed": C,
                          "aria-current": C ? "true" : void 0,
                          "aria-label": `Select ${w.filename} as source${C ? " (current)" : ""}`,
                          className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                          onClick: () => !C && b(w.id),
                          onKeyDown: (T) => {
                            (T.key === "Enter" || T.key === " ") && (T.preventDefault(), C || b(w.id));
                          },
                          style: {
                            cursor: C ? "default" : "pointer",
                            ...C ? {
                              borderColor: "var(--meld-accent-color)",
                              boxShadow: "0 0 0 2px var(--meld-accent-color)"
                            } : {}
                          },
                          children: [
                            /* @__PURE__ */ l.jsx("img", { src: ft(w, 64), alt: w.filename }),
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: w.filename }),
                              /* @__PURE__ */ l.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: "2px"
                                  },
                                  children: [
                                    /* @__PURE__ */ l.jsxs("span", { className: "meld-suggestion-distance", children: [
                                      "Match: ",
                                      Math.round((64 - w.distance) / 64 * 100),
                                      "%"
                                    ] }),
                                    C && /* @__PURE__ */ l.jsx(
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
                        w.id
                      );
                    }) }) : /* @__PURE__ */ l.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
                  ] })
                ] })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Uy = () => {
  const { state: e, dispatch: t } = ie(), n = e.toastMessage;
  return f.useEffect(() => {
    if (n) {
      const r = setTimeout(() => {
        t({ type: "HIDE_TOAST" });
      }, 3e3);
      return () => clearTimeout(r);
    }
  }, [n, t]), n ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `meld-toast ${e.toastType === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: n
    }
  ) : null;
}, Vy = () => {
  const { state: e, dispatch: t } = ie(), { executeWorkflow: n } = li();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
      Bm,
      {
        images: e.activeModal.images,
        isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
        onExecute: async (r, s) => {
          if (e.activeModal.type === "workflow_selection") {
            if (e.activeModal.isMaskSequence)
              return t({
                type: "OPEN_MODAL",
                payload: {
                  type: "mask_sequence_step",
                  images: e.activeModal.images,
                  currentIndex: 0,
                  workflowName: r,
                  targetLoaderNodeId: s
                }
              }), !1;
            const a = e.activeModal.maskFilename, o = e.activeModal.onSuccess, i = e.activeModal.onError, d = (await Promise.allSettled(
              e.activeModal.images.map(
                (h) => n(r, h, a, s)
              )
            )).filter((h) => h.status === "rejected");
            if (d.length > 0)
              return t({
                type: "SET_ERROR",
                payload: `${d.length} of ${e.activeModal.images.length} workflow(s) failed.`
              }), i == null || i(), !1;
            o == null || o();
          }
        }
      }
    ),
    e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
      Vm,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && Yr(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(Km, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(wm, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx($m, {}),
    e.activeModal.type === "tag_edit" && ue.createPortal(
      /* @__PURE__ */ l.jsx(
        Wm,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && ue.createPortal(/* @__PURE__ */ l.jsx(Hm, { message: e.activeModal.message }), document.body),
    e.activeModal.type === "delete_confirm" && ue.createPortal(
      /* @__PURE__ */ l.jsx(
        Qm,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent,
          onSuccess: () => {
            var r, s;
            e.activeModal.type === "delete_confirm" && ((s = (r = e.activeModal).onSuccess) == null || s.call(r));
          }
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && ue.createPortal(
      /* @__PURE__ */ l.jsx(
        ai,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && ue.createPortal(
      /* @__PURE__ */ l.jsx(
        Cm,
        {
          images: e.activeModal.images,
          currentIndex: e.activeModal.currentIndex,
          workflowName: e.activeModal.workflowName,
          targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
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
        }
      ),
      document.body
    ),
    e.activeModal.type === "note_edit" && ue.createPortal(
      /* @__PURE__ */ l.jsx(
        Um,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && ue.createPortal(
      /* @__PURE__ */ l.jsx(
        iy,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && ue.createPortal(
      /* @__PURE__ */ l.jsx(
        Wy,
        {
          ...e.confirmModal,
          onConfirm: async (r) => {
            var s;
            await ((s = e.confirmModal) == null ? void 0 : s.onConfirm(r)), t({ type: "CLOSE_CONFIRM_MODAL" });
          },
          onCancel: () => {
            var r, s;
            (s = (r = e.confirmModal) == null ? void 0 : r.onCancel) == null || s.call(r), t({ type: "CLOSE_CONFIRM_MODAL" });
          }
        }
      ),
      document.body
    ),
    e.toastMessage && ue.createPortal(/* @__PURE__ */ l.jsx(Uy, {}), document.body)
  ] });
}, Gm = async (e) => {
  const t = await J.fetchApi("/meld/analytics", { signal: e == null ? void 0 : e.signal });
  return ee(t);
}, qm = async (e, t) => {
  var i;
  const n = new URLSearchParams();
  n.set("limit", String(t.limit)), n.set("offset", String(t.offset)), t != null && t.sort && n.set("sort", t.sort), (i = t == null ? void 0 : t.q) != null && i.trim() && n.set("q", t.q.trim());
  const r = n.toString(), s = `/meld/analytics/${e}${r ? `?${r}` : ""}`, a = await J.fetchApi(s, { signal: t == null ? void 0 : t.signal }), o = await ll(a);
  if (!o.success)
    throw new Error(o.error || "Failed to fetch analytics");
  return {
    data: o.data ?? [],
    total: o.total ?? 0
  };
}, Ym = async (e) => {
  const t = await J.fetchApi("/meld/analytics/refresh", {
    method: "POST",
    signal: e == null ? void 0 : e.signal
  });
  await ee(t);
}, By = async (e, t, n) => {
  if (!t || t.length === 0) return {};
  const r = await J.fetchApi("/meld/analytics/counts", {
    method: "POST",
    body: JSON.stringify({ category: e, names: t }),
    signal: n == null ? void 0 : n.signal
  }), s = await ll(r);
  if (!s.success)
    throw new Error(s.error || "Failed to fetch analytics counts");
  return s.data ?? {};
}, Qy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fetchAnalyticsCategory: qm,
  fetchAnalyticsCounts: By,
  fetchAnalyticsSummary: Gm,
  refreshAnalytics: Ym
}, Symbol.toStringTag, { value: "Module" })), Hy = "_meldAnalytics__headerRow_9nv4x_3", Ky = "_meldAnalytics__title_9nv4x_9", Gy = "_meldAnalytics__controls_9nv4x_14", qy = "_meldAnalytics_9nv4x_3", Yy = "_meldAnalytics__totalCard_9nv4x_26", Xy = "_meldAnalytics__totalCardTitle_9nv4x_37", Zy = "_meldAnalytics__totalCardValue_9nv4x_46", Jy = "_meldAnalytics__grid_9nv4x_54", ev = "_meldAnalytics__section_9nv4x_60", tv = "_meldAnalytics__sectionHeader_9nv4x_71", nv = "_meldAnalytics__sectionTitle_9nv4x_83", rv = "_meldAnalytics__item_9nv4x_94", lv = "_meldAnalytics__itemLabel_9nv4x_111", sv = "_meldAnalytics__itemCount_9nv4x_118", av = "_meldAnalytics__seeAllBtn_9nv4x_128", ov = "_meldAnalytics__fullView_9nv4x_149", iv = "_meldAnalytics__fullViewToolbar_9nv4x_155", cv = "_meldAnalytics__toolbarBtn_9nv4x_162", dv = "_meldAnalytics__searchContainer_9nv4x_167", uv = "_meldAnalytics__searchIcon_9nv4x_179", mv = "_meldAnalytics__searchInput_9nv4x_184", fv = "_meldAnalytics__fullList_9nv4x_197", pv = "_meldAnalytics__fullListItem_9nv4x_204", hv = "_meldAnalytics__refreshBtn_9nv4x_222", ce = {
  meldAnalytics__headerRow: Hy,
  meldAnalytics__title: Ky,
  meldAnalytics__controls: Gy,
  meldAnalytics: qy,
  meldAnalytics__totalCard: Yy,
  meldAnalytics__totalCardTitle: Xy,
  meldAnalytics__totalCardValue: Zy,
  meldAnalytics__grid: Jy,
  meldAnalytics__section: ev,
  meldAnalytics__sectionHeader: tv,
  meldAnalytics__sectionTitle: nv,
  meldAnalytics__item: rv,
  meldAnalytics__itemLabel: lv,
  meldAnalytics__itemCount: sv,
  meldAnalytics__seeAllBtn: av,
  meldAnalytics__fullView: ov,
  meldAnalytics__fullViewToolbar: iv,
  meldAnalytics__toolbarBtn: cv,
  meldAnalytics__searchContainer: dv,
  meldAnalytics__searchIcon: uv,
  meldAnalytics__searchInput: mv,
  meldAnalytics__fullList: fv,
  meldAnalytics__fullListItem: pv,
  meldAnalytics__refreshBtn: hv
}, gv = {
  positive_prompts: "pos",
  negative_prompts: "neg",
  tags: "tag",
  models: "model",
  by_date: "date",
  by_resolution: "resolution"
};
function yv(e, t) {
  const n = gv[e];
  return n ? /[\s"]/.test(t) ? `${n}:"${t.replace(/"/g, '\\"')}"` : `${n}:${t}` : t;
}
function vv(e) {
  return e.name !== void 0 ? e.name : e.date !== void 0 ? e.date : e.resolution !== void 0 ? e.resolution : "";
}
function Ic(e) {
  return vv(e);
}
const wv = ({ onClose: e, onSearchAndNavigate: t }) => {
  const { dispatch: n } = ie(), [r, s] = f.useState(null), [a, o] = f.useState(!0), [i, c] = f.useState(!1), [d, h] = f.useState(null), [v, y] = f.useState([]), [S, _] = f.useState(0), [x, b] = f.useState(!1), [m, p] = f.useState(null), [u, g] = f.useState("count_desc"), [k, w] = f.useState(""), C = f.useRef(""), T = f.useRef(null), z = f.useRef(0);
  ke({
    onEscape: () => {
      d ? h(null) : e();
    }
  });
  const I = f.useCallback(async (F, D) => {
    const V = D;
    o(!0);
    try {
      const j = await Gm({ signal: F });
      if (F != null && F.aborted || V !== void 0 && V !== z.current) return;
      s(j);
    } catch (j) {
      if (F != null && F.aborted || j && typeof j == "object" && j.name === "AbortError" || V !== void 0 && V !== z.current) return;
      throw s(null), j;
    } finally {
      !(F != null && F.aborted) && (V === void 0 || V === z.current) && o(!1);
    }
  }, []);
  f.useEffect(() => {
    const F = new AbortController();
    z.current += 1;
    const D = z.current;
    return I(F.signal, D).catch(() => {
    }), () => F.abort();
  }, [I]);
  const R = f.useCallback(
    async (F, D, V, j) => {
      b(!0), p(null);
      try {
        const { data: E, total: L } = await qm(F, {
          limit: 500,
          offset: 0,
          sort: D,
          q: V.trim() || void 0,
          signal: j
        });
        if (j != null && j.aborted) return;
        y(E), _(L);
      } catch (E) {
        if (j != null && j.aborted || E && typeof E == "object" && E.name === "AbortError")
          return;
        const L = E instanceof Error ? E.message : typeof E == "string" ? E : "Unknown error";
        throw p(L), E;
      } finally {
        j != null && j.aborted || b(!1);
      }
    },
    []
  );
  f.useEffect(() => {
    if (!d) return;
    const F = C.current !== k;
    C.current = k;
    const D = new AbortController(), V = () => {
      R(d, u, k, D.signal).catch(() => {
      });
    };
    if (F) {
      const j = setTimeout(V, 300);
      return () => {
        clearTimeout(j), D.abort();
      };
    }
    return V(), () => D.abort();
  }, [d, u, k, R]);
  const U = f.useCallback(async () => {
    var V;
    (V = T.current) == null || V.abort();
    const F = new AbortController();
    T.current = F;
    const D = F.signal;
    c(!0);
    try {
      if (await Ym({ signal: D }), D.aborted) return;
      z.current += 1;
      const j = z.current;
      if (await I(D, j), D.aborted || (d && await R(d, u, k, D), D.aborted)) return;
      n({ type: "SHOW_TOAST", payload: "Analytics refreshed" });
    } catch (j) {
      if (D.aborted) return;
      const E = j instanceof Error ? j.message : typeof j == "string" ? j : "Unknown error";
      n({
        type: "SHOW_TOAST",
        payload: `Analytics refresh failed: ${E}`
      });
    } finally {
      D.aborted || c(!1);
    }
  }, [I, R, d, u, k, n]);
  f.useEffect(() => () => {
    var F;
    (F = T.current) == null || F.abort();
  }, []);
  const B = f.useCallback(
    (F, D) => {
      const V = yv(F, D);
      t ? t(V) : e();
    },
    [t, e]
  ), N = (F, D, V) => /* @__PURE__ */ l.jsxs("div", { className: ce.meldAnalytics__section, children: [
    /* @__PURE__ */ l.jsxs("div", { className: ce.meldAnalytics__sectionHeader, children: [
      /* @__PURE__ */ l.jsx("h3", { className: ce.meldAnalytics__sectionTitle, children: F }),
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: ce.meldAnalytics__seeAllBtn,
          onClick: () => {
            h(D), w(""), g("count_desc");
          },
          children: [
            "See all ",
            /* @__PURE__ */ l.jsx($h, { size: 14 })
          ]
        }
      )
    ] }),
    V.map((j, E) => {
      const L = Ic(j);
      return /* @__PURE__ */ l.jsxs(
        "div",
        {
          role: "button",
          tabIndex: 0,
          className: ce.meldAnalytics__item,
          onClick: () => B(D, L),
          onKeyDown: (O) => {
            (O.key === "Enter" || O.key === " ") && (O.preventDefault(), B(D, L));
          },
          children: [
            /* @__PURE__ */ l.jsx("span", { className: ce.meldAnalytics__itemLabel, children: L }),
            /* @__PURE__ */ l.jsx("span", { className: ce.meldAnalytics__itemCount, children: j.count })
          ]
        },
        `${L}-${E}`
      );
    })
  ] }, D);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-analytics-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-analytics-header", children: [
      /* @__PURE__ */ l.jsxs("div", { className: ce.meldAnalytics__headerRow, children: [
        /* @__PURE__ */ l.jsx(am, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { className: ce.meldAnalytics__title, children: "Image Analytics" })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: ce.meldAnalytics__controls, children: [
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: ce.meldAnalytics__refreshBtn,
            onClick: U,
            disabled: i,
            title: "Refresh analytics",
            children: [
              /* @__PURE__ */ l.jsx(tr, { size: 14, className: i ? "animate-spin" : "" }),
              "Refresh"
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "meld-analytics-close",
            onClick: e,
            title: "Close and return to gallery",
            "aria-label": "Close and return to gallery",
            children: /* @__PURE__ */ l.jsx(de, { size: 16 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-analytics-content", children: d ? /* @__PURE__ */ l.jsxs("div", { className: ce.meldAnalytics__fullView, children: [
      /* @__PURE__ */ l.jsxs("div", { className: ce.meldAnalytics__fullViewToolbar, children: [
        /* @__PURE__ */ l.jsxs("div", { className: ce.meldAnalytics__searchContainer, children: [
          /* @__PURE__ */ l.jsx(on, { size: 14, className: ce.meldAnalytics__searchIcon }),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "text",
              className: ce.meldAnalytics__searchInput,
              placeholder: "Filter...",
              value: k,
              onChange: (F) => w(F.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-btn meld-btn--secondary ${ce.meldAnalytics__toolbarBtn}`,
            onClick: () => g((F) => F === "count_desc" ? "count_asc" : "count_desc"),
            title: u === "count_desc" ? "Sort ascending" : "Sort descending",
            children: [
              u === "count_desc" ? /* @__PURE__ */ l.jsx(Fh, { size: 14 }) : /* @__PURE__ */ l.jsx(Uh, { size: 14 }),
              u === "count_desc" ? "Desc" : "Asc"
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: `meld-btn meld-btn--secondary ${ce.meldAnalytics__toolbarBtn}`,
            onClick: () => h(null),
            children: "Back"
          }
        )
      ] }),
      x ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading..." }) : m ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__empty", role: "alert", children: [
        "Failed to load: ",
        m
      ] }) : /* @__PURE__ */ l.jsxs("div", { className: ce.meldAnalytics__fullList, children: [
        v.map((F, D) => {
          const V = Ic(F);
          return /* @__PURE__ */ l.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              className: ce.meldAnalytics__fullListItem,
              onClick: () => B(d, V),
              onKeyDown: (j) => {
                (j.key === "Enter" || j.key === " ") && (j.preventDefault(), B(d, V));
              },
              children: [
                /* @__PURE__ */ l.jsxs("span", { className: ce.meldAnalytics__itemLabel, children: [
                  D + 1,
                  ". ",
                  V
                ] }),
                /* @__PURE__ */ l.jsx("span", { className: ce.meldAnalytics__itemCount, children: F.count })
              ]
            },
            `${V}-${D}`
          );
        }),
        v.length === 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No items found." })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { style: { fontSize: 12, color: "var(--meld-text-secondary)" }, children: [
        S,
        " total"
      ] })
    ] }) : a ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading analytics..." }) : r ? /* @__PURE__ */ l.jsxs("div", { className: ce.meldAnalytics, children: [
      /* @__PURE__ */ l.jsxs("div", { className: ce.meldAnalytics__totalCard, children: [
        /* @__PURE__ */ l.jsx("div", { className: ce.meldAnalytics__totalCardTitle, children: "Total Images" }),
        /* @__PURE__ */ l.jsx("div", { className: ce.meldAnalytics__totalCardValue, children: r.total_images.toLocaleString() })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: ce.meldAnalytics__grid, children: [
        N(
          "Positive Prompt (top 5)",
          "positive_prompts",
          r.positive_prompts
        ),
        N(
          "Negative Prompt (top 5)",
          "negative_prompts",
          r.negative_prompts
        ),
        N("Tag (top 5)", "tags", r.tags),
        N("Model (top 5)", "models", r.models),
        N("Created Date (top 5)", "by_date", r.by_date),
        N("Resolution (top 5)", "by_resolution", r.by_resolution)
      ] })
    ] }) : /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "Failed to load analytics." }) })
  ] });
}, xv = () => {
  const { state: e, dispatch: t } = ie(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await ly(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      $.error("Failed to cancel scan:", h);
    }
  }, s = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, d = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
  return /* @__PURE__ */ l.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-progress--compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-scan__status-text--compact", children: n.shouldCancel ? /* @__PURE__ */ l.jsx("span", { className: "meld-scan__status--cancelling", children: "Cancelling..." }) : a ? /* @__PURE__ */ l.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ l.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-progress-stats--compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-progress-container--compact", children: /* @__PURE__ */ l.jsx("div", { className: "meld-progress-bar", style: { width: `${d}%` } }) }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn--stop--compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ l.jsx(dm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-finished--compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ l.jsx(Qh, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ l.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-btn--ok--compact", onClick: s, children: "OK" })
  ] }) });
}, oi = {
  lightTable: {
    id: "meld-light-table-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  },
  bulkActionBar: {
    id: "meld-bulk-bar-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  }
}, _v = Object.keys(oi), Mc = /* @__PURE__ */ new Map(), Tc = "data-meld-portal-root";
let la = null, sa = null;
const Lc = ".comfyui-body-bottom";
function Ac(e) {
  var n, r, s, a;
  const t = `[${Tc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e.item(o);
    if (!i || i.nodeType !== 1) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Tc) || (r = c.querySelector) != null && r.call(c, t) || (s = c.matches) != null && s.call(c, Lc) || (a = c.querySelector) != null && a.call(c, Lc)) return !0;
  }
  return !1;
}
function kv(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function bv(e) {
  const t = oi[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function Xm(e) {
  const t = oi[e], n = Mc.get(e) ?? bv(e);
  Mc.set(e, n);
  const r = kv(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function Zm() {
  for (const e of _v)
    Xm(e);
}
function Dc() {
  sa === null && (sa = requestAnimationFrame(() => {
    sa = null, Zm();
  }));
}
function Jm(e) {
  return Xm(e);
}
function Sv() {
  la || typeof document > "u" || !document.body || (Zm(), la = new MutationObserver((e) => {
    for (const t of e) {
      if (Ac(t.addedNodes)) {
        Dc();
        return;
      }
      if (Ac(t.removedNodes)) {
        Dc();
        return;
      }
    }
  }), la.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
const Ms = ({
  onKeyDown: e,
  enabled: t = !0
}) => {
  f.useEffect(() => {
    if (t)
      return window.addEventListener("keydown", e, { capture: !0 }), () => {
        window.removeEventListener("keydown", e, { capture: !0 });
      };
  }, [e, t]);
}, jv = () => {
  const { state: e } = ie(), t = ne((a) => a.slots), n = ne((a) => a.addToBucket), r = t.length > 0 && e.selectedIds.size > 0, s = f.useCallback(
    (a) => {
      if ($y())
        return;
      const o = e.selectedIds;
      if (!o || o.size === 0)
        return;
      const i = t.find((c) => c.shortcutKey.toLowerCase() === a.key.toLowerCase());
      i && (Xr(a), o.forEach((c) => {
        n(i.id, String(c));
      }));
    },
    [t, n, e.selectedIds]
  );
  Ms({ onKeyDown: s, enabled: r });
}, ef = ({ message: e, onConfirm: t, onCancel: n }) => (ke({ onEscape: n }), /* @__PURE__ */ l.jsx(
  "div",
  {
    className: "meld-confirm-modal__overlay",
    onClick: n,
    onKeyDown: (r) => {
      r.key === "Escape" && n();
    },
    role: "presentation",
    children: /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "meld-confirm-modal__dialog",
        onClick: (r) => r.stopPropagation(),
        onKeyDown: (r) => r.stopPropagation(),
        role: "alertdialog",
        "aria-modal": "true",
        "aria-label": e,
        children: [
          /* @__PURE__ */ l.jsx("p", { className: "meld-confirm-modal__message", children: e }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-confirm-modal__actions", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ l.jsx(
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
)), Zr = ({
  enabled: e,
  insideRefs: t,
  onOutside: n,
  options: r
}) => {
  const s = (r == null ? void 0 : r.capture) ?? !0, a = (r == null ? void 0 : r.ignoreNonPrimary) ?? !0, o = f.useRef(t), i = f.useRef(n);
  f.useEffect(() => {
    o.current = t;
  }, [t]), f.useEffect(() => {
    i.current = n;
  }, [n]), f.useEffect(() => {
    if (!e) return;
    const c = (d) => {
      if (a && (d.pointerType === "mouse" && d.button !== 0 || !d.isPrimary))
        return;
      const h = d.target;
      if (!(h instanceof Node))
        return;
      o.current.some((y) => {
        const S = y.current;
        return S ? S.contains(h) : !1;
      }) || i.current(d);
    };
    return window.addEventListener("pointerdown", c, { capture: s }), () => {
      window.removeEventListener("pointerdown", c, {
        capture: s
      });
    };
  }, [e, s, a]);
}, Cv = (e, t, n, r, s) => {
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
            onSuccess: s
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
            onSuccess: s
          }
        });
        break;
      }
      case "move_folder":
        $.warn("move_folder action is not yet implemented"), s == null || s();
        break;
      case "queue_workflow":
        r({
          type: "OPEN_MODAL",
          payload: { type: "workflow_selection", images: n, onSuccess: s }
        });
        break;
      case "run_with_mask":
        t.length > 0 && r({
          type: "OPEN_MODAL",
          payload: {
            type: "workflow_selection",
            images: n.filter((a) => t.includes(a.id)),
            isMaskSequence: !0,
            onSuccess: s
          }
        });
        break;
      case "download":
        r({
          type: "OPEN_MODAL",
          payload: { type: "download_options", imageIds: t, onSuccess: s }
        });
        break;
      default:
        $.log(`Action ${e.type} executed on ${t.length} images`);
        break;
    }
}, Ev = ({ config: e }) => {
  var O;
  const t = ne((M) => M.buckets), n = ne((M) => M.slots), r = ne((M) => M.images), s = n.length, { state: a, dispatch: o } = ie(), [i, c] = f.useState(!1), [d, h] = f.useState(!1), [v, y] = f.useState(!1), [S, _] = f.useState(e.label), [x, b] = f.useState(e.color), [m, p] = f.useState([]), [u, g] = f.useState(null), k = f.useRef(null), w = f.useRef(null);
  Zr({
    enabled: i,
    insideRefs: [w],
    onOutside: () => c(!1)
  }), Zr({
    enabled: v,
    insideRefs: [k],
    onOutside: () => y(!1)
  });
  const C = t[e.id] || [], T = C.length, z = C.map((M) => {
    const A = Number(M);
    let P = a.images.find((W) => W.id === A);
    return P || (P = a.lineageImages.find((W) => W.id === A)), P || (P = r[M]), P;
  }).filter(Boolean);
  f.useEffect(() => {
    p((M) => {
      const A = M.filter((P) => C.includes(String(P)));
      return A.length !== M.length ? A : M;
    });
  }, [C]);
  const I = m.filter((M) => C.includes(String(M))), R = I.length > 0, U = (M) => {
    M.preventDefault(), M.stopPropagation(), M.currentTarget.classList.add("drag-over");
  }, B = (M) => {
    M.currentTarget.classList.remove("drag-over");
  }, N = (M) => {
    M.preventDefault(), M.stopPropagation(), M.currentTarget.classList.remove("drag-over");
    const A = M.dataTransfer.getData("text/plain");
    A && A.split(",").forEach((W) => {
      if (W) {
        const H = W.trim(), X = Number(H);
        let re = a.images.find((se) => se.id === X);
        re || (re = a.lineageImages.find((se) => se.id === X)), ne.getState().addToBucket(e.id, H, re);
      }
    });
  }, F = (M, A) => {
    M.stopPropagation();
    let P = [A];
    I.includes(A) ? P = I : (p([A]), g(A)), M.dataTransfer.setData("text/plain", P.join(",")), M.dataTransfer.setData("application/meld-lt-source-slot", e.id), M.dataTransfer.effectAllowed = "move";
  }, D = (M, A) => {
    if (M.dataTransfer.dropEffect === "none") {
      const P = I.includes(A) ? I : [A];
      P.forEach((W) => {
        ne.getState().removeFromBucket(e.id, String(W));
      }), p((W) => W.filter((H) => !P.includes(H)));
    }
  }, V = (M) => {
    if (T === 0) return;
    const A = {
      type: M
    }, P = R ? I : C.map(Number);
    if (P.length === 0) return;
    const W = P.map((re) => z.find((se) => se.id === re)).filter(Boolean), H = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Cv(A, P, W, o, () => {
      ne.getState().showToast(H[M] ?? "Done");
    });
  }, j = () => {
    ne.getState().clearBucket(e.id), ne.getState().showToast(`Tab "${e.label}" cleared`), h(!1);
  }, E = () => {
    const M = ne.getState();
    M.slots.length <= 1 || (M.removeSlot(e.id), ne.getState().showToast(`Tab "${e.label}" deleted`));
  }, L = f.useCallback(
    (M, A) => {
      if (!M.repeat && (M.key === "Enter" || M.key === " "))
        if (M.preventDefault(), M.ctrlKey || M.metaKey)
          p(
            (P) => P.includes(A.id) ? P.filter((W) => W !== A.id) : [...P, A.id]
          ), g(A.id);
        else if (M.shiftKey && u !== null) {
          const P = z.findIndex((H) => H.id === A.id), W = z.findIndex((H) => H.id === u);
          if (P !== -1 && W !== -1) {
            const H = Math.min(P, W), X = Math.max(P, W), re = z.slice(H, X + 1).map((se) => se.id);
            p((se) => Array.from(/* @__PURE__ */ new Set([...se, ...re])));
          }
          g(A.id);
        } else
          p([]), g(null), o({
            type: "OPEN_VIEWER",
            payload: {
              id: A.id,
              mode: "lighttable",
              slotId: e.id
            }
          });
    },
    [z, u, o, e.id]
  );
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: U,
      onDragLeave: B,
      onDrop: N,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__images", children: T === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : z.map((M) => {
          const A = ft(M);
          return /* @__PURE__ */ l.jsx(
            "div",
            {
              role: "button",
              tabIndex: 0,
              className: `meld-lt-slot-panel__image-wrapper${I.includes(M.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (P) => {
                if (P.ctrlKey || P.metaKey)
                  p(
                    (W) => W.includes(M.id) ? W.filter((H) => H !== M.id) : [...W, M.id]
                  ), g(M.id);
                else if (P.shiftKey && u !== null) {
                  const W = z.findIndex((X) => X.id === M.id), H = z.findIndex((X) => X.id === u);
                  if (W !== -1 && H !== -1) {
                    const X = Math.min(W, H), re = Math.max(W, H), se = z.slice(X, re + 1).map((K) => K.id);
                    p((K) => Array.from(/* @__PURE__ */ new Set([...K, ...se])));
                  }
                  g(M.id);
                } else
                  p([]), g(null), o({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: M.id,
                      mode: "lighttable",
                      slotId: e.id
                    }
                  });
              },
              onKeyDown: (P) => L(P, M),
              onDragStart: (P) => F(P, M.id),
              onDragEnd: (P) => D(P, M.id),
              children: /* @__PURE__ */ l.jsx("img", { src: A, alt: M.filename, draggable: !1 })
            },
            M.id
          );
        }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: k, children: [
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => y(!v),
                disabled: T === 0,
                title: "Actions",
                children: [
                  R ? `Action (${I.length})` : "Action",
                  /* @__PURE__ */ l.jsx(Hh, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: ar
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: Jo
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: fg
              },
              {
                type: "download",
                label: "Download",
                icon: Gr
              },
              {
                type: "delete",
                label: "Delete",
                icon: Wt,
                danger: !0
              }
            ].map((M) => /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${M.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in M && M.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (A) => A.stopPropagation(),
                onClick: () => {
                  "disabled" in M && M.disabled || (V(M.type), y(!1));
                },
                children: [
                  /* @__PURE__ */ l.jsx(M.icon, { size: 13 }),
                  /* @__PURE__ */ l.jsx("span", { children: M.label })
                ]
              },
              M.type
            )) })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => h(!0),
              title: "Clear Tab",
              disabled: T === 0,
              children: /* @__PURE__ */ l.jsx(Gh, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: w, children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ l.jsx(cm, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: S,
                    onChange: (M) => _(M.target.value),
                    placeholder: "e.g. Keep"
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-color-${e.id}`, children: "Tab Color:" }),
                /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      flex: 1
                    },
                    children: [
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          id: `slot-color-${e.id}`,
                          type: "color",
                          value: x.startsWith("var") ? ((O = x.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/)) == null ? void 0 : O[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(x) ? x : "#9ca3af",
                          onChange: (M) => b(M.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          value: x,
                          onChange: (M) => b(M.target.value),
                          placeholder: "#hex or CSS var",
                          style: { flex: 1, minWidth: 0 }
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-save",
                  onClick: () => {
                    const M = ne.getState(), A = S.trim();
                    if (!A) {
                      M.showToast("Error: Tab label cannot be empty", "error");
                      return;
                    }
                    if (M.slots.some(
                      (W) => W.id !== e.id && (W.label.toLowerCase() === A.toLowerCase() || W.id.toLowerCase() === A.toLowerCase())
                    )) {
                      M.showToast(`Error: "${A}" is already in use`, "error");
                      return;
                    }
                    M.updateSlot(e.id, {
                      label: A,
                      color: x
                    }), c(!1), M.showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              s > 1 && /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: E,
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
        d && /* @__PURE__ */ l.jsx(
          ef,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: j,
            onCancel: () => h(!1)
          }
        )
      ]
    }
  );
}, Nv = () => {
  const e = ne((n) => n.toastMessage), t = ne((n) => n.toastType);
  return e ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: `meld-toast ${t === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: e
    }
  ) : null;
}, Iv = () => {
  var S;
  jv();
  const e = ne((_) => _.isOpen), t = ne((_) => _.setIsOpen), [n, r] = f.useState(!1);
  ke({
    onEscape: () => t(!1),
    enabled: e && !n
  }), f.useEffect(() => {
    e || r(!1);
  }, [e]);
  const s = ne((_) => _.slots), a = ne((_) => _.buckets), { state: o } = ie(), [i, c] = f.useState(((S = s[0]) == null ? void 0 : S.id) || "keep"), d = Jm("lightTable");
  if (!e) return null;
  const h = () => {
    const _ = `slot_${Date.now().toString(36)}`;
    ne.getState().addSlot({
      id: _,
      label: `Tab ${s.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), c(_);
  }, v = () => {
    s.forEach((_) => {
      ne.getState().clearBucket(_.id);
    }), ne.getState().showToast("All tabs cleared"), r(!1);
  }, y = /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table__tabs", children: [
      s.map((_) => {
        var x;
        return /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${i === _.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => c(_.id),
            style: { "--tab-color": _.color },
            onDragOver: (b) => {
              b.preventDefault(), c(_.id);
            },
            onDrop: (b) => {
              b.preventDefault();
              const m = b.dataTransfer.getData("text/plain");
              m && m.split(",").forEach((u) => {
                if (u) {
                  const g = u.trim(), k = o.images.find((w) => String(w.id) === g);
                  ne.getState().addToBucket(_.id, g, k);
                }
              });
            },
            children: [
              _.label,
              "  (",
              ((x = a[_.id]) == null ? void 0 : x.length) || 0,
              ")"
            ]
          },
          _.id
        );
      }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__add-tab-btn",
          onClick: h,
          title: "Add Tab",
          "aria-label": "Add Tab",
          style: {
            background: "none",
            border: "none",
            color: "var(--meld-text-secondary, #9ca3af)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "0 8px"
          },
          children: /* @__PURE__ */ l.jsx(Ns, { size: 16 })
        }
      ),
      /* @__PURE__ */ l.jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => r(!0),
          title: "Clear All Tabs",
          children: [
            /* @__PURE__ */ l.jsx(cg, { size: 14 }),
            /* @__PURE__ */ l.jsx("span", { children: "Clear All" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__close-btn",
          onClick: () => t(!1),
          title: "Close Light Table",
          "aria-label": "Close Light Table",
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
          children: /* @__PURE__ */ l.jsx(de, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-light-table__content", children: s.map((_) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: i === _.id ? "block" : "none" },
        children: /* @__PURE__ */ l.jsx(Ev, { config: _ })
      },
      _.id
    )) }),
    n && /* @__PURE__ */ l.jsx(
      ef,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => r(!1)
      }
    ),
    /* @__PURE__ */ l.jsx(Nv, {})
  ] });
  return ue.createPortal(y, d);
}, tf = () => {
  const { state: e, refreshFavorites: t } = ie(), [n, r] = f.useState(!1), [s, a] = f.useState(null), [o, i] = f.useState("info"), [c, d] = f.useState(null), [h, v] = f.useState(""), [y, S] = f.useState("");
  f.useEffect(() => {
    if (s) {
      const p = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(p);
    }
  }, [s]);
  const _ = f.useCallback(
    async (p, u, g) => {
      p.stopPropagation();
      const k = `Are you sure you want to delete the favorite "${g}"?`;
      if (window.confirm(k))
        try {
          await bc(u), await t();
        } catch (w) {
          $.error("Failed to delete favorite", w);
        }
    },
    [t]
  ), x = f.useCallback((p, u) => {
    p.stopPropagation(), d(u), v(u.name), S(u.query);
  }, []), b = f.useCallback(async () => {
    if (!(!c || !h.trim() || !y.trim()))
      try {
        r(!0), await Rg(c.id, h, y), await t(), d(null);
      } catch (p) {
        $.error("Failed to update favorite", p), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, h, y, t]), m = f.useCallback(async () => {
    if (!e.searchQuery || n) return !1;
    if (e.favorites.some((u) => u.query === e.searchQuery)) {
      const u = e.favorites.find((g) => g.query === e.searchQuery);
      if (u) {
        r(!0);
        try {
          return await bc(u.id), await t(), !0;
        } catch (g) {
          return $.error("Failed to delete favorite:", g), !1;
        } finally {
          r(!1);
        }
      }
      return !1;
    }
    r(!0);
    try {
      return await Dg(e.searchQuery, e.searchQuery), await t(), !0;
    } catch (u) {
      return $.error("Failed to save favorite:", u), !1;
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: s,
    toastType: o,
    editingFavorite: c,
    setEditingFavorite: d,
    editFavoriteName: h,
    setEditFavoriteName: v,
    editFavoriteQuery: y,
    setEditFavoriteQuery: S,
    handleDeleteFavorite: _,
    handleEditFavorite: x,
    handleSaveEditFavorite: b,
    handleSaveFavorite: m,
    setToastMessage: (p, u = "info") => {
      a(p), i(u);
    }
  };
}, nf = ({ fav: e, onSelect: t, onEdit: n, onDelete: r }) => {
  const [s, a] = f.useState(!1), [o, i] = f.useState(!1), [c, d] = f.useState(!1);
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: s ? "var(--comfy-menu-bg, #333)" : "var(--comfy-input-bg, #2a2a2a)",
        border: "1px solid",
        borderColor: s ? "var(--meld-accent-color)" : "var(--comfy-menu-border, #333)",
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
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              flex: 1
            },
            children: [
              /* @__PURE__ */ l.jsx(
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
              e.name !== e.query && /* @__PURE__ */ l.jsx(
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
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  onClick: (h) => n(h, e),
                  "aria-label": `Edit favorite ${e.name}`,
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
                  children: /* @__PURE__ */ l.jsx(im, { size: 14 })
                }
              ),
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  onClick: (h) => r(h, e.id, e.name),
                  "aria-label": `Delete favorite ${e.name}`,
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
                  children: /* @__PURE__ */ l.jsx(Wt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Mv = "_menu_jab2z_1", Tv = "_header_jab2z_14", Lv = "_title_jab2z_23", Av = "_count_jab2z_32", Dv = "_list_jab2z_37", Rv = "_toast_jab2z_46", Pv = "_editTitle_jab2z_56", Ov = "_form_jab2z_62", zv = "_fieldGroup_jab2z_69", Fv = "_label_jab2z_75", $v = "_input_jab2z_81", Wv = "_textarea_jab2z_82", He = {
  menu: Mv,
  header: Tv,
  title: Lv,
  count: Av,
  list: Dv,
  toast: Rv,
  editTitle: Pv,
  form: Ov,
  fieldGroup: zv,
  label: Fv,
  input: $v,
  textarea: Wv
}, Uv = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = ie(), {
    isSaving: s,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: y,
    handleEditFavorite: S,
    handleSaveEditFavorite: _
  } = tf(), [x, b] = f.useState({ top: 0, left: 0 }), m = f.useRef(null), p = f.useRef(null);
  return ke({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), Zr({
    enabled: !!e && !o,
    insideRefs: [m],
    onOutside: () => t()
  }), f.useEffect(() => {
    if (e) {
      let k = e.left;
      const w = e.bottom + 5;
      k + 300 > window.innerWidth - 10 && (k = window.innerWidth - 300 - 10), k < 10 && (k = 10), b({ top: w, left: k });
    }
  }, [e]), f.useEffect(() => {
    o && p.current && p.current.focus();
  }, [o]), e ? ue.createPortal(
    /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: m,
          className: `${He.menu} meld-favorites-context-menu`,
          style: {
            top: x.top,
            left: x.left
          },
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: He.header, children: [
              /* @__PURE__ */ l.jsxs("div", { className: He.title, children: [
                /* @__PURE__ */ l.jsx(
                  nr,
                  {
                    size: 14,
                    color: "var(--brand-yellow, #ffd700)",
                    fill: "var(--brand-yellow, #ffd700)"
                  }
                ),
                "Favorites"
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: He.count, children: [
                r.favorites.length,
                " items"
              ] })
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: He.list, children: r.favorites.map((u) => /* @__PURE__ */ l.jsx(
              nf,
              {
                fav: u,
                onSelect: (g) => {
                  n(g), t();
                },
                onEdit: S,
                onDelete: y
              },
              u.id
            )) }),
            a && /* @__PURE__ */ l.jsx("div", { className: He.toast, children: a })
          ]
        }
      ),
      o && /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "meld-modal-overlay meld-favorites-edit-modal-overlay",
          onMouseDown: (u) => {
            u.target === u.currentTarget && i(null);
          },
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (u) => u.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsxs("h2", { className: He.editTitle, children: [
                    /* @__PURE__ */ l.jsx(nr, { size: 20, color: "var(--meld-accent-color)" }),
                    "Edit Favorite"
                  ] }),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ l.jsx(de, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: He.form, children: [
                  /* @__PURE__ */ l.jsxs("div", { className: He.fieldGroup, children: [
                    /* @__PURE__ */ l.jsx("label", { htmlFor: "edit-favorite-name-ctx", className: He.label, children: "Name" }),
                    /* @__PURE__ */ l.jsx(
                      "input",
                      {
                        id: "edit-favorite-name-ctx",
                        ref: p,
                        type: "text",
                        value: c,
                        onChange: (u) => d(u.target.value),
                        placeholder: "Favorite Name",
                        className: He.input,
                        onKeyDown: (u) => {
                          u.key === "Enter" && (Ge(u), _()), u.key === "Escape" && (Ge(u), i(null));
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: He.fieldGroup, children: [
                    /* @__PURE__ */ l.jsx("label", { htmlFor: "edit-favorite-query-ctx", className: He.label, children: "Search Query" }),
                    /* @__PURE__ */ l.jsx(
                      "textarea",
                      {
                        id: "edit-favorite-query-ctx",
                        value: h,
                        onChange: (u) => v(u.target.value),
                        placeholder: "Search Query",
                        rows: 3,
                        className: He.textarea,
                        onKeyDown: (u) => {
                          u.key === "Enter" && !u.shiftKey && (Ge(u), _()), u.key === "Escape" && (Ge(u), i(null));
                        }
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--secondary",
                      onClick: () => i(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--primary",
                      onClick: _,
                      disabled: s || !c.trim() || !h.trim(),
                      children: s ? "Saving..." : "Save Changes"
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
}, Sl = (e) => {
  const t = [];
  let n = "", r = !1;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (a === '"')
      r = !r, n += a;
    else if (a === " " && !r)
      for (t.push(n), n = ""; s + 1 < e.length && e[s + 1] === " "; )
        s++;
    else
      n += a;
  }
  return t.push(n), t;
}, Vv = () => {
  const { state: e, dispatch: t, updateSetting: n } = ie(), [r, s] = f.useState(e.searchQuery), [a, o] = f.useState([]), [i, c] = f.useState(!1), [d, h] = f.useState([]), [v, y] = f.useState([]), S = e.settings["search.show_all_keywords"], [_, x] = f.useState(-1), [b, m] = f.useState(null), p = f.useRef(null), u = f.useRef(e.searchQuery), g = f.useRef(!0);
  f.useEffect(() => (g.current = !0, () => {
    g.current = !1;
  }), []);
  const k = f.useCallback(async () => {
    if (v.length > 0) return;
    const j = await Tg();
    g.current && y(j);
  }, [v.length]);
  f.useEffect(() => {
    let j = !0;
    return Lg().then((E) => {
      j && m(E);
    }).catch((E) => {
      j && $.error("Failed to fetch search config:", E);
    }), S && k().catch((E) => {
      j && $.error("Failed to fetch keywords:", E);
    }), () => {
      j = !1;
    };
  }, [k, S]);
  const w = f.useMemo(() => {
    if (!b) return null;
    const j = b.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${j}):(.*)$`, "i");
  }, [b]), C = f.useCallback(() => {
    const j = !S;
    j && k(), n("search.show_all_keywords", j);
  }, [S, k, n]), T = r !== u.current;
  f.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    let j = !0;
    return Mg().then((E) => {
      j && h(E);
    }).catch((E) => {
      j && ($.error("Failed to fetch search suggestions:", E), h([]));
    }), () => {
      j = !1;
    };
  }, [e.settings["search.quick_suggestions"]]), f.useEffect(() => {
    s(e.searchQuery), u.current = e.searchQuery;
  }, [e.searchQuery]), f.useEffect(() => {
    var j;
    (j = p.current) == null || j.focus();
  }, []);
  const z = f.useCallback(
    (j, E = !0) => {
      u.current !== j && ($.log("SearchBar: triggering search", { query: j }), t({ type: "SET_SEARCH_QUERY", payload: j }), E && c(!1), u.current = j);
    },
    [t]
  );
  f.useEffect(() => {
    const j = setTimeout(async () => {
      if (r === u.current)
        return;
      if (!e.settings["search.input_suggest"] || !w) {
        o([]), c(!1);
        return;
      }
      const E = Sl(r), L = E[E.length - 1];
      if (L) {
        const O = L.match(w);
        if (O) {
          const M = O[1];
          let A = O[2];
          if (!M || A === void 0) {
            o([]), c(!1);
            return;
          }
          const P = M.toLowerCase();
          A.startsWith('"') && (A = A.substring(1)), A.endsWith('"') && (A = A.substring(0, A.length - 1));
          const W = await Ig(A, P);
          o(W), c(W.length > 0), x(-1);
        } else {
          const M = L.replace(/^([-!])/, "").toLowerCase();
          if (M && b) {
            const A = b.all_prefixes.filter((P) => P.startsWith(M)).map((P) => ({
              type: P,
              value: "",
              count: 0
            }));
            if (A.length > 0) {
              o(A), c(!0), x(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(j);
  }, [r, e.settings["search.input_suggest"], w, b]);
  const I = f.useCallback(
    (j) => {
      var W;
      if (!j) return;
      const E = Sl(r), O = (E.pop() || "").match(/^([-!])/), M = O ? O[1] : "", P = ((b == null ? void 0 : b.no_quote_prefixes) || []).includes(j.type);
      if (j.value === "") {
        const H = `${[...E, `${M}${j.type}:`].join(" ").trim()}`;
        s(H);
      } else {
        const H = P ? j.value : `"${j.value}"`, X = `${[...E, `${M}${j.type}:${H}`].join(" ").trim()} `;
        s(X), o([]), c(!1);
      }
      (W = p.current) == null || W.focus();
    },
    [r, b]
  ), R = (j) => {
    if (j)
      if (j.key === "Enter")
        if (Ge(j), i && _ >= 0) {
          const E = a[_];
          E && I(E);
        } else
          z(r);
      else if (j.key === "Tab") {
        if (i && a.length > 0) {
          Ge(j);
          const E = _ >= 0 ? _ : 0, L = a[E];
          L && I(L);
        }
      } else j.key === "ArrowDown" ? i && (Ge(j), x((E) => Math.min(E + 1, a.length - 1))) : j.key === "ArrowUp" ? i && (Ge(j), x((E) => Math.max(E - 1, -1))) : j.key === "Escape" && (Ge(j), c(!1));
  }, U = f.useCallback(() => {
    s(""), z("");
  }, [z]), B = f.useCallback(
    (j, E, L = !1) => {
      var G;
      if (!j) return;
      const O = Sl(r), M = O[O.length - 1] || "";
      let A = !1;
      const P = M.replace(/^([-!])/, "").toLowerCase();
      P && j.toLowerCase().startsWith(P) && (A = !0);
      const W = M.match(/^([-!])/), H = A && W ? W[1] : "";
      if (A && O.pop(), L) {
        const Ve = [...O, `${H}${j}:`].filter(Boolean).join(" ");
        s(Ve), (G = p.current) == null || G.focus();
        return;
      }
      const se = ((b == null ? void 0 : b.no_quote_prefixes) || []).includes(j) ? E : `"${E}"`, K = `${H}${j}:${se}`, te = [...O, K].filter(Boolean).join(" ");
      s(te), z(te);
    },
    [r, z, b]
  ), N = f.useCallback(
    (j) => {
      s(j), j || z("");
    },
    [z]
  ), F = f.useCallback(() => {
    if (r === u.current || !w) return;
    const j = Sl(r), E = j[j.length - 1];
    if (!E) return;
    const L = !!E.match(w), O = E.replace(/^([-!])/, "").toLowerCase(), M = O && (b == null ? void 0 : b.all_prefixes.some((A) => A.startsWith(O)));
    (L || M) && c(!0);
  }, [r, w, b]), D = f.useRef(null), V = f.useCallback(() => {
    D.current = setTimeout(() => c(!1), 200);
  }, []);
  return f.useEffect(() => () => {
    D.current && clearTimeout(D.current);
  }, []), {
    inputValue: r,
    setInputValue: s,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: v,
    showAllKeywords: S,
    toggleShowAllKeywords: C,
    selectedIndex: _,
    setSelectedIndex: x,
    inputRef: p,
    isQueryChanged: T,
    handleSearch: z,
    handleKeyDown: R,
    applySuggestion: I,
    clearSearch: U,
    applySearchSuggestion: B,
    handleInputChange: N,
    handleInputFocus: F,
    handleInputBlur: V
  };
}, Rc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ l.jsx(ar, { size: 12 });
    case "model":
      return /* @__PURE__ */ l.jsx(Vh, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ l.jsx(dg, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ l.jsx(Bh, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ l.jsx(sm, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ l.jsx(lm, { size: 12 });
    case "note":
      return /* @__PURE__ */ l.jsx(qh, { size: 12 });
    case "sort":
      return /* @__PURE__ */ l.jsx(Wh, { size: 12 });
    default:
      return null;
  }
}, Bv = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: s,
  inputValue: a,
  searchQuery: o,
  searchSuggestions: i,
  allKeywords: c,
  showAllKeywords: d,
  toggleShowAllKeywords: h,
  applySearchSuggestion: v,
  favorites: y,
  onSelectFavorite: S,
  onEditFavorite: _,
  onDeleteFavorite: x
}) => {
  const b = (g, k, w) => /* @__PURE__ */ l.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(g.type, g.value, w === "all"),
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
        /* @__PURE__ */ l.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Rc(g.type)
          }
        ),
        /* @__PURE__ */ l.jsx(
          "span",
          {
            style: {
              color: "var(--comfy-input-text-active, #3b82f6)",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "10px"
            },
            children: g.type
          }
        ),
        w !== "all" && /* @__PURE__ */ l.jsx(
          "span",
          {
            style: {
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: g.value
          }
        )
      ]
    },
    `${w}-${g.type}:${g.value}:${k}`
  ), m = () => !e || t.length === 0 ? null : /* @__PURE__ */ l.jsx(
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
      children: t.map((g, k) => /* @__PURE__ */ l.jsx(
        "div",
        {
          onMouseDown: (w) => {
            w.preventDefault(), s(g);
          },
          onMouseEnter: () => r(k),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: k === n ? "var(--comfy-input-bg-active, rgba(59, 130, 246, 0.15))" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)",
            borderLeft: k === n ? "3px solid var(--meld-accent-color, #3b82f6)" : "3px solid transparent",
            transition: "all 0.1s ease-out"
          },
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transform: k === n ? "translateX(2px)" : "none",
                transition: "transform 0.1s ease-out"
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    style: {
                      color: k === n ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-secondary)",
                      display: "flex",
                      transition: "color 0.1s"
                    },
                    children: Rc(g.type)
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "span",
                  {
                    style: {
                      color: "var(--comfy-input-text-active, #3b82f6)",
                      fontSize: "10px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      width: g.type.length > 8 ? "auto" : "60px",
                      flexShrink: 0
                    },
                    children: [
                      g.type,
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    style: {
                      color: g.value === _t ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: g.value === _t ? "bold" : "normal"
                    },
                    children: g.value === _t ? g.type === "tag" ? `Untagged (${_t})` : `No ${g.type} (${_t})` : g.value
                  }
                )
              ]
            }
          )
        },
        `${g.type}:${g.value}`
      ))
    }
  ), p = () => i.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: i.map((g, k) => b(g, k, "quick"))
          }
        ),
        /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 4px"
                  },
                  children: [
                    /* @__PURE__ */ l.jsx(
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
                    /* @__PURE__ */ l.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: h,
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
              d && /* @__PURE__ */ l.jsx(
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
                  children: Array.from(new Set(c.map((g) => g.type))).map(
                    (g, k) => b({ type: g, value: "" }, k, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), u = () => y.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsx(nr, { size: 12, fill: "var(--meld-text-secondary)" }),
              "Favorites"
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            },
            children: y.map((g) => /* @__PURE__ */ l.jsx(
              nf,
              {
                fav: g,
                onSelect: S,
                onEdit: _,
                onDelete: x
              },
              g.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      style: { position: "relative" },
      onMouseDown: (g) => {
        g.preventDefault();
      },
      children: [
        m(),
        p(),
        u()
      ]
    }
  );
}, Qv = () => {
  const { state: e } = ie(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: s,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: h,
    inputRef: v,
    isQueryChanged: y,
    handleSearch: S,
    handleKeyDown: _,
    applySuggestion: x,
    clearSearch: b,
    applySearchSuggestion: m,
    handleInputChange: p,
    handleInputFocus: u,
    handleInputBlur: g
  } = Vv(), {
    isSaving: k,
    toastMessage: w,
    toastType: C,
    editingFavorite: T,
    setEditingFavorite: z,
    editFavoriteName: I,
    setEditFavoriteName: R,
    editFavoriteQuery: U,
    setEditFavoriteQuery: B,
    handleDeleteFavorite: N,
    handleEditFavorite: F,
    handleSaveEditFavorite: D,
    handleSaveFavorite: V,
    setToastMessage: j
  } = tf(), E = async () => {
    const P = e.favorites.some((H) => H.query === e.searchQuery);
    await V() && j(
      P ? "Removed from favorites." : "Added to favorites.",
      "info"
    );
  };
  ke({
    onEscape: () => z(null),
    enabled: !!T
  });
  const L = f.useRef(null), O = f.useRef(!1);
  f.useEffect(() => {
    T && L.current && L.current.focus();
  }, [T]);
  const M = (P) => {
    P.target === P.currentTarget && (O.current = !0);
  }, A = (P) => {
    P.target === P.currentTarget && O.current && z(null), O.current = !1;
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-search-bar-wrapper", style: { position: "relative", width: "100%" }, children: [
          w && /* @__PURE__ */ l.jsx(
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
                border: C === "error" ? "1px solid var(--brand-red, #ff4c4c)" : "1px solid var(--comfy-menu-border, #444)",
                animation: "meld-fade-in-down 0.3s ease-out",
                width: "max-content",
                maxWidth: "300px"
              },
              children: w
            }
          ),
          /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => S(t),
                    style: {
                      background: y ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                      border: y ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                      cursor: "pointer",
                      padding: "6px 10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                      flexShrink: 0,
                      borderRadius: "4px",
                      transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: y ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                    },
                    onMouseEnter: (P) => {
                      P.currentTarget.style.transform = "translateY(-1px)", y ? (P.currentTarget.style.filter = "brightness(1.15)", P.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : P.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                    },
                    onMouseLeave: (P) => {
                      P.currentTarget.style.transform = "none", y ? (P.currentTarget.style.filter = "none", P.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : P.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                    },
                    onMouseDown: (P) => {
                      P.currentTarget.style.transform = "translateY(1px)", P.currentTarget.style.boxShadow = "none";
                    },
                    onMouseUp: (P) => {
                      P.currentTarget.style.transform = "translateY(-1px)";
                    },
                    title: "Search (Enter)",
                    children: [
                      /* @__PURE__ */ l.jsx(
                        on,
                        {
                          size: 16,
                          color: y ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                          style: {
                            transition: "color 0.2s",
                            filter: y ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                          }
                        }
                      ),
                      y && /* @__PURE__ */ l.jsx(
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
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: v,
                    type: "text",
                    value: t,
                    onChange: (P) => p(P.target.value),
                    onKeyDown: _,
                    onBlur: g,
                    onFocus: u,
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
                e.searchQuery && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: E,
                    disabled: k,
                    "aria-label": e.favorites.some((P) => P.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
                    title: e.favorites.some((P) => P.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                    children: /* @__PURE__ */ l.jsx(
                      nr,
                      {
                        size: 16,
                        color: e.favorites.some((P) => P.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                        fill: e.favorites.some((P) => P.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                      }
                    )
                  }
                ),
                t && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: b,
                    "aria-label": "Clear search",
                    style: {
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ l.jsx(de, { size: 16, color: "var(--meld-text-secondary)" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(
            Bv,
            {
              showSuggestions: s,
              suggestions: r,
              selectedIndex: d,
              setSelectedIndex: h,
              applySuggestion: x,
              inputValue: t,
              searchQuery: e.searchQuery,
              searchSuggestions: a,
              allKeywords: o,
              showAllKeywords: i,
              toggleShowAllKeywords: c,
              applySearchSuggestion: m,
              favorites: e.favorites,
              onSelectFavorite: (P) => {
                n(P), S(P);
              },
              onEditFavorite: F,
              onDeleteFavorite: N
            }
          )
        ] }),
        T && ue.createPortal(
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: M,
              onMouseUp: A,
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (P) => P.stopPropagation(),
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "edit-favorite-title",
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ l.jsxs(
                        "h2",
                        {
                          id: "edit-favorite-title",
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ l.jsx(nr, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => z(null),
                          children: /* @__PURE__ */ l.jsx(de, { size: 20 })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px",
                          padding: "8px 0"
                        },
                        children: [
                          /* @__PURE__ */ l.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(
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
                                /* @__PURE__ */ l.jsx(
                                  "input",
                                  {
                                    id: "edit-favorite-name",
                                    ref: L,
                                    type: "text",
                                    value: I,
                                    onChange: (P) => R(P.target.value),
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
                                    onKeyDown: (P) => {
                                      P.key === "Enter" && (Ge(P), D()), P.key === "Escape" && (Ge(P), z(null));
                                    }
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ l.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(
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
                                /* @__PURE__ */ l.jsx(
                                  "textarea",
                                  {
                                    id: "edit-favorite-query",
                                    value: U,
                                    onChange: (P) => B(P.target.value),
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
                                    onKeyDown: (P) => {
                                      P.key === "Enter" && !P.shiftKey && (Ge(P), D()), P.key === "Escape" && (Ge(P), z(null));
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn--secondary",
                          onClick: () => z(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn--primary",
                          onClick: D,
                          disabled: k || !I.trim() || !U.trim(),
                          children: k ? "Saving..." : "Save Changes"
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
}, Hv = ({ onClose: e, onSearch: t }) => {
  const [n, r] = f.useState([]), [s, a] = f.useState(!0), [o, i] = f.useState(""), [c, d] = f.useState(""), [h, v] = f.useState(!1), [y, S] = f.useState(null), [_, x] = f.useState(""), [b, m] = f.useState(!1), p = f.useRef(null), u = f.useCallback(async () => {
    a(!0);
    try {
      const R = await ri();
      r(R);
    } catch (R) {
      $.error("Failed to fetch tags:", R);
    } finally {
      a(!1);
    }
  }, []);
  f.useEffect(() => {
    u();
  }, [u]), f.useEffect(() => {
    y !== null && p.current && (p.current.focus(), p.current.select());
  }, [y]);
  const g = async (R) => {
    R.preventDefault();
    const U = c.trim();
    if (!(!U || h)) {
      if (U.toLowerCase() === _t) {
        alert(`Tag name '${_t}' is reserved for search and cannot be used.`);
        return;
      }
      if (n.some((B) => B.name.toLowerCase() === U.toLowerCase())) {
        alert(`Tag "${U}" already exists.`);
        return;
      }
      v(!0);
      try {
        await qg(U), d(""), await u();
      } catch (B) {
        $.error("Failed to add tag:", B);
      } finally {
        v(!1);
      }
    }
  }, k = async (R, U) => {
    if (confirm(`Are you sure you want to delete tag "${U}"?`))
      try {
        await Yg(R), await u();
      } catch (B) {
        $.error("Failed to delete tag:", B);
      }
  }, w = (R) => {
    S(R.id), x(R.name);
  }, C = () => {
    S(null), x("");
  }, T = async (R) => {
    R.preventDefault();
    const U = _.trim();
    if (!U || y === null || b) return;
    if (U.toLowerCase() === _t) {
      alert(`Tag name '${_t}' is reserved for search and cannot be used.`);
      return;
    }
    const B = n.find((N) => N.id === y);
    if (B && B.name === U) {
      C();
      return;
    }
    if (n.some((N) => N.id !== y && N.name.toLowerCase() === U.toLowerCase())) {
      alert(`Tag "${U}" already exists.`);
      return;
    }
    m(!0);
    try {
      await Xg(y, U), C(), await u();
    } catch (N) {
      $.error("Failed to rename tag:", N), alert(N instanceof Error ? N.message : "Failed to rename tag");
    } finally {
      m(!1);
    }
  }, z = (R) => {
    t(`tag:${R}`);
  }, I = f.useMemo(() => n.filter((R) => R.name.toLowerCase().includes(o.toLowerCase())), [n, o]);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(ar, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ l.jsx(de, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ l.jsxs("form", { className: "meld-tag-add-form", onSubmit: g, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (R) => d(R.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn--primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || h,
            children: [
              /* @__PURE__ */ l.jsx(Ns, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ l.jsx(on, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (R) => i(R.target.value)
          }
        )
      ] }),
      s ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-list", children: I.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : I.map((R) => /* @__PURE__ */ l.jsx("div", { className: "meld-tag-item", children: y === R.id ? /* @__PURE__ */ l.jsxs("form", { className: "meld-tag-rename-form", onSubmit: T, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            ref: p,
            className: "meld-tag-rename-input",
            value: _,
            onChange: (U) => x(U.target.value),
            onKeyDown: (U) => U.key === "Escape" && C()
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "submit",
            className: "meld-tag-item__btn meld-tag-item__btn--save",
            title: "Save",
            disabled: b || !_.trim(),
            children: /* @__PURE__ */ l.jsx(Je, { size: 14 })
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-item__btn",
            title: "Cancel",
            onClick: C,
            disabled: b,
            children: /* @__PURE__ */ l.jsx(de, { size: 14 })
          }
        )
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("span", { className: "meld-tag-item__name", children: R.name }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => z(R.name),
              children: /* @__PURE__ */ l.jsx(on, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => w(R),
              children: /* @__PURE__ */ l.jsx(im, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => k(R.id, R.name),
              children: /* @__PURE__ */ l.jsx(Wt, { size: 14 })
            }
          )
        ] })
      ] }) }, R.id)) })
    ] })
  ] });
}, aa = 56, rf = (e, t) => {
  const n = f.useCallback(async (s) => ti(s), []), r = f.useCallback(
    (s) => {
      const a = t["gallery.lineage_max_depth"];
      if (a === 0) return [];
      if (s.ancestors && s.ancestors.length > 0)
        return s.ancestors.slice(0, a).map((h) => ({
          id: h.id,
          imgSrc: ft(h, aa)
        }));
      const o = s.parent_id;
      if (!o || !s.parent_filename) return [];
      const i = e.find((h) => h.id === o);
      let c = null;
      if (i ? c = ft(i, aa) : c = ft(
        {
          filename: s.parent_filename,
          subfolder: s.parent_subfolder || "",
          type: s.parent_type
        },
        aa
      ), !c) return [];
      const d = {
        id: o || null,
        imgSrc: c
      };
      if (i && a > 1) {
        const h = r(i);
        return [d, ...h].slice(0, a);
      }
      return [d];
    },
    [t, e]
  );
  return { getParentChain: r, fetchLineage: n };
}, Pc = ({
  currentThumbnails: e,
  currentIndex: t,
  removedIds: n,
  viewerMode: r,
  viewerLightTableSlotId: s,
  dispatch: a,
  removeImageIds: o
}) => {
  let i = null;
  for (let c = t + 1; c < e.length; c++) {
    const d = e[c];
    if (d && !n.has(d.id)) {
      i = d.id;
      break;
    }
  }
  if (i === null)
    for (let c = t - 1; c >= 0; c--) {
      const d = e[c];
      if (d && !n.has(d.id)) {
        i = d.id;
        break;
      }
    }
  a(i !== null ? {
    type: "OPEN_VIEWER",
    payload: {
      id: i,
      mode: r,
      ...r === "lighttable" && s ? { slotId: s } : {}
    }
  } : { type: "CLOSE_VIEWER" }), o && o.length > 0 && a({ type: "REMOVE_IMAGES", payload: o });
}, Kv = ({
  state: e,
  dispatch: t,
  image: n,
  isFullscreen: r,
  currentThumbnails: s,
  currentIndex: a,
  viewerMode: o,
  lineageImages: i,
  images: c,
  mountRefs: d,
  handleNext: h,
  handlePrevious: v,
  handleEditTags: y,
  handleRestore: S,
  fetchLineage: _,
  restoreImages: x,
  bulkUpdateImageTags: b
}) => {
  const [m, p] = f.useState(null), [u, g] = f.useState(
    null
  ), k = f.useCallback(
    async (R = !1) => {
      if (!n) return;
      const U = r ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
      if (!R && U === "confirm") {
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
        const B = e.viewScope === "trash", N = /* @__PURE__ */ new Set([n.id]);
        let F = [];
        if (U === "lineage") {
          F = await _(n.id);
          for (const D of F)
            N.add(D.id);
        }
        if (!d.isMountedRef.current || d.viewerImageIdRef.current === null || (await no(Array.from(N), B), !d.isMountedRef.current || d.viewerImageIdRef.current === null))
          return;
        if (Pc({
          currentThumbnails: s,
          currentIndex: a,
          removedIds: N,
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: Array.from(N)
        }), !B) {
          const D = [
            ...s,
            ...F,
            ...i,
            ...c
          ], V = /* @__PURE__ */ new Map();
          for (const E of D)
            V.set(E.id, E);
          const j = Array.from(N).map((E) => {
            const L = V.get(E);
            return L || {
              id: E,
              filename: `deleted_${E}`,
              subfolder: "",
              type: "custom",
              created_at: 0,
              positive: "",
              negative: "",
              tags: []
            };
          });
          p(j), g(null);
        }
      } catch (B) {
        t({
          type: "SET_ERROR",
          payload: B instanceof Error ? B.message : String(B)
        });
      }
    },
    [
      a,
      s,
      t,
      n,
      _,
      c,
      r,
      i,
      d,
      e.settings,
      e.viewScope,
      e.viewerLightTableSlotId,
      o
    ]
  ), w = f.useCallback(() => {
    n && y(n);
  }, [y, n]), C = f.useCallback(async () => {
    n && (s.length > 1 ? h() : t({ type: "CLOSE_VIEWER" }), await S(n));
  }, [s.length, t, h, S, n]), T = f.useCallback(async () => {
    if (!m || m.length === 0) return;
    const R = m.map((U) => U.id);
    try {
      const U = await x(R);
      if (!d.isMountedRef.current) return;
      const B = U.restored_ids || R, N = new Set(B), F = m.filter((V) => N.has(V.id));
      if (F.length > 0 && t({ type: "ADD_IMAGES", payload: F }), e.viewScope === "trash" && t({ type: "REMOVE_IMAGES", payload: B }), p(null), !d.isMountedRef.current) return;
      const D = B[0];
      D !== void 0 && t({
        type: "OPEN_VIEWER",
        payload: {
          id: D,
          mode: o,
          ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
        }
      });
    } catch (U) {
      t({
        type: "SET_ERROR",
        payload: U instanceof Error ? U.message : String(U)
      });
    }
  }, [
    t,
    m,
    d.isMountedRef,
    x,
    e.viewScope,
    e.viewerLightTableSlotId,
    o
  ]), z = f.useCallback(async () => {
    if (m && m.length > 0) {
      await T();
      return;
    }
    if (!u || u.type !== "tags")
      return;
    const { imageId: R, addTags: U, removeTags: B } = u;
    try {
      await b([R], U, B);
      const N = (o === "lineage" ? i : c).find(
        (F) => F.id === R
      );
      if (N) {
        const F = [...N.tags];
        for (const V of U)
          F.includes(V) || F.push(V);
        const D = F.filter((V) => !B.includes(V));
        t({
          type: "UPDATE_IMAGE",
          payload: { ...N, tags: D }
        }), t({
          type: "OPEN_VIEWER",
          payload: {
            id: R,
            mode: o,
            ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
          }
        });
      }
      g(null);
    } catch (N) {
      t({
        type: "SET_ERROR",
        payload: N instanceof Error ? N.message : String(N)
      });
    }
  }, [
    t,
    T,
    c,
    m,
    u,
    i,
    b,
    e.viewerLightTableSlotId,
    o
  ]), I = f.useCallback(
    async (R) => {
      if (!R || typeof R != "string" || !n) return;
      const U = n.id, B = [...n.tags], N = Cy(R, n), { addTags: F, removeTags: D, isDeleted: V, moveNext: j, movePrev: E, sendToLtSlot: L } = N;
      if (L) {
        const O = ne.getState(), M = O.slots.find(
          (A) => A.id.toLowerCase() === L.toLowerCase() || A.label.toLowerCase() === L.toLowerCase()
        );
        M ? (O.addToBucket(M.id, String(U), n), O.showToast(`Sent to ${M.label}`), V || Pc({
          currentThumbnails: s,
          currentIndex: a,
          removedIds: /* @__PURE__ */ new Set([U]),
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: [U]
        })) : (O.showToast(`Error: Light Table slot "${L}" not found`, "error"), $.warn(`Attempted to send to non-existent LT slot: ${L}`));
      }
      if (F.length > 0 || D.length > 0)
        try {
          await b([U], F, D);
          const O = [...B];
          for (const A of F)
            O.includes(A) || O.push(A);
          const M = O.filter((A) => !D.includes(A));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...n, id: U, tags: M }
          }), g({
            type: "tags",
            imageId: U,
            addTags: [...D],
            removeTags: [...F]
          }), p(null);
        } catch (O) {
          $.error("Failed to update tags via shortcut:", O), t({
            type: "SET_ERROR",
            payload: O instanceof Error ? O.message : String(O)
          });
        }
      V ? await k(!0) : j ? h() : E && await v();
    },
    [
      a,
      s,
      t,
      b,
      k,
      h,
      v,
      n,
      e.viewerLightTableSlotId,
      o
    ]
  );
  return {
    lastDeletedImages: m,
    setLastDeletedImages: p,
    handleDelete: k,
    handleTagEditAction: w,
    handleRestoreAction: C,
    handleUndo: z,
    executeCommand: I
  };
}, Gv = ({
  overlayRef: e,
  settings: t,
  setShowDetails: n
}) => {
  const [r, s] = f.useState(!1), a = f.useCallback(
    (o) => {
      o && typeof o.stopPropagation == "function" && o.stopPropagation();
      const i = e.current;
      i && (document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen().catch((c) => {
        $.error(`Error attempting to enable full-screen mode: ${c.message}`);
      }));
    },
    [e]
  );
  return f.useEffect(() => {
    const o = () => {
      const i = !!document.fullscreenElement;
      s(i), n(i ? t["fullscreen.show_details_by_default"] : t["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, [t, n]), { isFullscreen: r, toggleFullscreen: a };
}, qv = ({
  viewerImageId: e,
  activeModalType: t,
  viewScope: n,
  settings: r,
  dispatch: s,
  isMountedRef: a,
  toggleFullscreen: o,
  handleNext: i,
  handlePrevious: c,
  handleDelete: d,
  handleUndo: h,
  handleTagEditAction: v,
  handleRestoreAction: y,
  executeCommand: S,
  setShowDetails: _,
  setActiveShortcutKey: x
}) => {
  const b = f.useCallback(
    (m) => {
      if (!(m.target instanceof HTMLElement))
        return;
      const p = m.target, u = p.tagName === "INPUT" || p.tagName === "TEXTAREA" || p.isContentEditable;
      if (u && m.key !== "Escape") {
        m.key === "Enter" && (m.ctrlKey || m.metaKey) && m.preventDefault();
        return;
      }
      if (e === null || t !== "none")
        return;
      const g = m.key === "Delete" || m.key === "Backspace", k = m.key === "ArrowRight" || m.key === "ArrowLeft" || m.key === "ArrowDown" || m.key === "ArrowUp", w = ["f", "F", "i", "I", "t", "T", "r", "R", "Enter"].includes(m.key), C = m.key === "Escape", T = (m.ctrlKey || m.metaKey) && (m.key === "z" || m.key === "Z" || m.code === "KeyZ"), z = /^[0-9]$/.test(m.key) && !m.ctrlKey && !m.metaKey && !m.altKey && m.code !== "KeyZ";
      if (g || k || w || C || T || z)
        if (!u || C)
          Xr(m);
        else
          return;
      else
        return;
      if (C)
        document.fullscreenElement ? document.exitFullscreen() : s({ type: "CLOSE_VIEWER" });
      else if (k)
        m.key === "ArrowRight" || m.key === "ArrowDown" ? i() : c();
      else if (w && (m.key === "f" || m.key === "F" || m.key === "Enter"))
        o(m);
      else if (w && (m.key === "i" || m.key === "I"))
        _((I) => !I);
      else if (w && (m.key === "t" || m.key === "T"))
        v();
      else if (w && (m.key === "r" || m.key === "R") && n === "trash")
        y();
      else if (g)
        d();
      else if (T)
        h();
      else if (z && !u) {
        const I = `viewer.shortcut.${m.key}`, R = r[I];
        typeof R == "string" && R && (x(m.key), setTimeout(() => {
          a.current && x(null);
        }, 500), S(R));
      }
    },
    [
      t,
      s,
      S,
      d,
      i,
      c,
      y,
      v,
      h,
      a,
      x,
      _,
      r,
      o,
      n,
      e
    ]
  );
  Ms({
    enabled: e !== null,
    onKeyDown: b
  });
}, Yv = ({
  viewerMode: e,
  viewerImageId: t,
  lineageLength: n,
  dispatch: r,
  isMountedRef: s
}) => {
  const [a, o] = f.useState(!1), i = f.useRef(0);
  return f.useEffect(() => {
    let c = !1;
    if (e === "lineage" && t !== null && n === 0) {
      const d = ++i.current;
      o(!0), ti(t).then((h) => {
        !c && s.current && d === i.current && r({ type: "SET_LINEAGE", payload: h });
      }).catch((h) => {
        $.error("Failed to fetch lineage:", h);
      }).finally(() => {
        !c && s.current && d === i.current && o(!1);
      });
    }
    return () => {
      c = !0;
    };
  }, [r, s, n, t, e]), { isLoadingLineage: a };
}, Xv = ({
  dispatch: e,
  isFullscreen: t,
  settings: n,
  currentThumbnails: r,
  currentIndex: s,
  viewerMode: a,
  pagination: o,
  searchQuery: i,
  isJumping: c,
  setIsJumping: d,
  mountRefs: h
}) => {
  const v = a === "lighttable" ? r : void 0, y = f.useCallback(() => {
    e({
      type: "NEXT_IMAGE",
      payload: { isFullscreen: t, currentList: v }
    });
  }, [v, e, t]), S = f.useCallback(async () => {
    const _ = t ? n["fullscreen.loop"] : n["viewer.loop"];
    if (s === 0 && a === "gallery" && o.hasMore && !c && _) {
      d(!0);
      try {
        const x = o.limit, b = o.total, m = Math.max(0, b - x), p = await Fl(m, x, i);
        if (!h.isMountedRef.current) return;
        const u = zl(p, {
          total: o.total,
          offset: m,
          limit: x
        });
        if (e({ type: "APPEND_IMAGES", payload: u }), h.viewerImageIdRef.current === null) return;
        if (u.images.length > 0) {
          const g = u.images.at(-1);
          if (!g) return;
          e({
            type: "OPEN_VIEWER",
            payload: { id: g.id, mode: "gallery" }
          });
        }
      } catch (x) {
        $.error("Failed to jump to end:", x);
      } finally {
        d(!1);
      }
    } else
      e({
        type: "PREVIOUS_IMAGE",
        payload: { isFullscreen: t, currentList: v }
      });
  }, [
    v,
    s,
    e,
    t,
    c,
    h,
    o,
    i,
    d,
    n,
    a
  ]);
  return { handleNext: y, handlePrevious: S };
};
function Zv(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: s } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? s || !r ? null : t[0] ?? null : t[n + 1] ?? null;
  return { prevId: a ? s || !r ? null : t[t.length - 1] ?? null : t[n - 1] ?? null, nextId: i };
}
const Jv = ({
  viewerImageId: e,
  currentThumbnails: t,
  currentIndex: n,
  isFullscreen: r,
  settings: s,
  hasMore: a,
  viewerMode: o,
  isLoading: i,
  loadMoreImages: c,
  fetchFullImageDetails: d
}) => {
  f.useEffect(() => {
    o !== "gallery" || e === null || i || !a || n === -1 || n >= t.length - 15 && c();
  }, [
    n,
    t.length,
    a,
    i,
    c,
    e,
    o
  ]), f.useEffect(() => {
    if (e === null || t.length === 0) return;
    const h = t.map((b) => b.id), v = h.indexOf(e);
    if (v === -1) return;
    const y = r ? s["fullscreen.loop"] : s["viewer.loop"], { prevId: S, nextId: _ } = Zv({
      ids: h,
      index: v,
      loopEnabled: y,
      hasMore: a && o === "gallery"
    }), x = setTimeout(() => {
      const b = [S, _].filter(
        (m) => m !== null && m !== e
      );
      b.length !== 0 && Promise.allSettled(b.map((m) => d(m))).then((m) => {
        for (const p of m)
          p.status === "rejected" && $.warn("Prefetching adjacent image details failed", p.reason);
      });
    }, 50);
    return () => clearTimeout(x);
  }, [
    t,
    d,
    a,
    r,
    s,
    e,
    o
  ]), f.useEffect(() => {
    if (e === null || t.length === 0 || n === -1) return;
    const h = [n + 1, n + 2, n - 1], v = setTimeout(() => {
      for (const y of h)
        if (y >= 0 && y < t.length) {
          const S = t[y];
          if (!S) continue;
          const _ = new Image();
          _.src = ni(S);
        }
    }, 150);
    return () => clearTimeout(v);
  }, [n, t, e]);
};
function ew(e) {
  return {
    id: e,
    filename: `__missing_${e}__`,
    subfolder: "",
    type: "output",
    created_at: 0,
    positive: "",
    negative: "",
    tags: [],
    exists: !1,
    is_minimal: !0
  };
}
const tw = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var sl;
  const { viewerImageId: s, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    restoreImages: d,
    bulkUpdateImageTags: h,
    handleEditTags: v,
    handleEditNotes: y,
    handleRestore: S,
    handleUpdateUserNotes: _,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: b,
    handleSendToWorkflow: m,
    handleRunWithWorkflow: p,
    handleRunWithMask: u,
    handleEditSource: g
  } = Is(e, t), { getParentChain: k, fetchLineage: w } = rf(a, c), [C, T] = f.useState(!1), [z, I] = f.useState(c["viewer.show_details_by_default"]), [R, U] = f.useState(null), B = R ?? c["viewer.show_thumbnails"], [N, F] = f.useState(!1), [D, V] = f.useState(null), j = f.useRef(null), E = {
    isMountedRef: f.useRef(!0),
    viewerImageIdRef: f.useRef(s)
  };
  f.useEffect(() => (E.isMountedRef.current = !0, () => {
    E.isMountedRef.current = !1;
  }), [E.isMountedRef]), f.useEffect(() => {
    E.viewerImageIdRef.current = s;
  }, [E.viewerImageIdRef, s]);
  const L = f.useMemo(() => {
    const fe = e.searchQuery.trim() !== "";
    if (o === "lighttable" && e.viewerLightTableSlotId) {
      const Ce = ne.getState(), Ie = Ce.buckets[e.viewerLightTableSlotId] || [], Qe = new Map(a.map((at) => [at.id, at])), Vt = new Map(i.map((at) => [at.id, at]));
      return Ie.map((at) => {
        const or = Number.parseInt(at, 10);
        return Qe.get(or) || Vt.get(or) || Ce.images[at] || ew(or);
      });
    }
    return o === "lineage" ? i : a.filter(
      (Ce) => Ce.exists !== !1 && (c["gallery.show_parent_images"] || fe || !Ce.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), O = s === null ? -1 : L.findIndex((fe) => fe.id === s), A = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? L : a).find((fe) => fe.id === s) || (s === ((sl = e.viewerFallbackImage) == null ? void 0 : sl.id) ? e.viewerFallbackImage : void 0), { isFullscreen: P, toggleFullscreen: W } = Gv({
    overlayRef: j,
    settings: c,
    setShowDetails: I
  }), { handleNext: H, handlePrevious: X } = Xv({
    dispatch: t,
    isFullscreen: P,
    settings: c,
    currentThumbnails: L,
    currentIndex: O,
    viewerMode: o,
    pagination: e.pagination,
    searchQuery: e.searchQuery,
    isJumping: N,
    setIsJumping: F,
    mountRefs: E
  }), {
    lastDeletedImages: re,
    setLastDeletedImages: se,
    handleDelete: K,
    handleTagEditAction: te,
    handleRestoreAction: G,
    handleUndo: Ve,
    executeCommand: Ae
  } = Kv({
    state: e,
    dispatch: t,
    image: A,
    isFullscreen: P,
    currentThumbnails: L,
    currentIndex: O,
    viewerMode: o,
    lineageImages: i,
    images: a,
    mountRefs: E,
    handleNext: H,
    handlePrevious: X,
    handleEditTags: v,
    handleRestore: S,
    fetchLineage: w,
    restoreImages: d,
    bulkUpdateImageTags: h
  }), { isLoadingLineage: De } = Yv({
    viewerMode: o,
    viewerImageId: s,
    lineageLength: i.length,
    dispatch: t,
    isMountedRef: E.isMountedRef
  });
  qv({
    viewerImageId: s,
    activeModalType: e.activeModal.type,
    viewScope: e.viewScope,
    settings: c,
    dispatch: t,
    isMountedRef: E.isMountedRef,
    toggleFullscreen: W,
    handleNext: H,
    handlePrevious: X,
    handleDelete: () => {
      K();
    },
    handleUndo: Ve,
    handleTagEditAction: te,
    handleRestoreAction: G,
    executeCommand: Ae,
    setShowDetails: I,
    setActiveShortcutKey: V
  }), f.useEffect(() => {
    s !== null && r(s).catch((fe) => {
      $.error("Failed to fetch full image details for viewer:", fe);
    });
  }, [r, s]), Jv({
    viewerImageId: s,
    currentThumbnails: L,
    currentIndex: O,
    isFullscreen: P,
    settings: c,
    hasMore: e.pagination.hasMore,
    viewerMode: o,
    isLoading: e.isLoading,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  const Be = f.useMemo(() => {
    if (!B || O === -1) return [];
    const fe = c["viewer.thumbnail_window_size"], Ce = Math.floor(fe / 2);
    let Ie = Math.max(0, O - Ce);
    const Qe = Math.min(L.length, Ie + fe);
    return Qe === L.length && (Ie = Math.max(0, Qe - fe)), L.slice(Ie, Qe).map((Vt, at) => ({
      img: Vt,
      absIndex: Ie + at
    }));
  }, [L, O, c, B]), jt = f.useMemo(() => A ? k(A) : [], [k, A]);
  return f.useEffect(() => {
    var fe, Ce;
    if (s !== null) {
      if (B) {
        const Ie = document.querySelector(".meld-viewer-thumbnail--active");
        Ie && Ie.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((fe = document.activeElement) == null ? void 0 : fe.tagName) === "CANVAS" && document.activeElement.blur(), (Ce = j.current) == null || Ce.focus();
    }
  }, [B, s]), {
    isFullscreen: P,
    showDetails: z,
    setShowDetails: I,
    showThumbnails: B,
    setShowThumbnailsOverride: U,
    isLoadingLineage: De,
    isJumping: N,
    isMenuOpen: C,
    setIsMenuOpen: T,
    activeShortcutKey: D,
    lastDeletedImages: re,
    setLastDeletedImages: se,
    overlayRef: j,
    handleNext: H,
    handlePrevious: X,
    handleDelete: K,
    handleUpdateUserNotes: _,
    handleEditNotes: () => A && y(A),
    handleTagEdit: te,
    handleRestore: G,
    handleUndo: Ve,
    handleRestoreWorkflow: async () => {
      if (!A) return;
      await x(A) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!A) return;
      await b(A) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!A) return;
      m(A) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => A && p(A),
    handleRunWithMask: (fe) => A && u(A, fe),
    handleEditSource: () => A && g(A),
    toggleFullscreen: W,
    currentIndex: O,
    currentThumbnails: L,
    image: A,
    windowedThumbnails: Be,
    parentChain: jt
  };
}, ii = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: s,
  onRestoreWorkflow: a,
  onSendToWorkflow: o,
  onRunWithWorkflow: i,
  onRunWithMask: c,
  onEditSource: d,
  onEditTags: h,
  onEditNotes: v,
  onDelete: y,
  onRestore: S,
  showRestore: _,
  deleteLabel: x,
  showQuickShortcuts: b = !0,
  variant: m = "default",
  iconSize: p = 16,
  buttonClassName: u = ""
}) => {
  const [g, k] = f.useState("left");
  f.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? k("right") : k("left"));
  }, [e, n]);
  const w = (z) => {
    switch (z) {
      case "add_unified_loader":
        return s;
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
        return h;
      case "edit_notes":
        return v;
      case "restore_image":
        return S;
      case "delete_or_trash":
        return y;
      default:
        return null;
    }
  }, C = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((z) => z && z !== ""), T = [
    "meld-image-card__menu-container",
    m === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: T, ref: n, children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${u}`,
        onClick: (z) => {
          z.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ l.jsx(sg, { size: p })
      }
    ),
    b && C.map((z, I) => {
      const R = Fm.find((N) => N.id === z);
      if (!R || !R.icon) return null;
      const U = R.icon, B = w(z);
      return !B || z === "restore_image" && !_ ? null : /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${u}`,
          onClick: (N) => {
            N.stopPropagation(), B();
          },
          title: R.label,
          children: /* @__PURE__ */ l.jsx(U, { size: p })
        },
        `${z}-${I}`
      );
    }),
    e && /* @__PURE__ */ l.jsx(
      "div",
      {
        className: `meld-image-card__menu ${g === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: Im,
            handler: s
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: Am,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: Dm,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: Tm,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: Lm,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Mm,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: Pm,
            handler: h
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: Om,
            handler: v
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: Rm,
            handler: d
          },
          ..._ ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: zm,
              handler: S,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: x,
            icon: Wt,
            handler: y,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((z) => /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-image-card__menu-item ${z.className || ""}`,
            onMouseDown: (I) => I.stopPropagation(),
            onClick: (I) => {
              I.preventDefault(), I.stopPropagation(), z.handler(), t(!1);
            },
            "aria-label": z.label,
            children: [
              /* @__PURE__ */ l.jsx(z.icon, { size: 14, color: z.color }),
              /* @__PURE__ */ l.jsx("span", { children: z.label })
            ]
          },
          z.id
        ))
      }
    )
  ] });
}, nw = ({
  settings: e,
  activeShortcutKey: t
}) => e["viewer.shortcut.show_cheat_sheet"] ? /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-cheat-sheet", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => {
  const r = String(n), s = e[`viewer.shortcut.${r}`];
  return typeof s == "string" && s ? /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-viewer-cheat-sheet__item ${t === r ? "meld-viewer-cheat-sheet__item--active" : ""}`,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-cheat-sheet__key", children: n }),
        /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-cheat-sheet__cmd", children: s.replace("tag-toggle:", "+/- ") })
      ]
    },
    n
  ) : null;
}) }) : null, rw = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: s,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = f.useState("idle"), [d, h] = f.useState(null), v = f.useRef(null), y = f.useCallback(async (k, w) => {
    try {
      await navigator.clipboard.writeText(k), v.current && (clearTimeout(v.current), v.current = null), h(w), v.current = setTimeout(() => {
        h(null), v.current = null;
      }, 2e3);
    } catch {
    }
  }, []);
  f.useEffect(() => (c("idle"), h(null), () => {
    v.current && (clearTimeout(v.current), v.current = null);
  }), []);
  const S = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], _ = S === "always" || S === "if_present" && e.user_notes, [x, b] = f.useState([]), [m, p] = f.useState(!1), u = t ? n["fullscreen.details.show_core_prompt"] : n["viewer.details.show_core_prompt"], g = t ? n["fullscreen.details.core_prompt_count"] : n["viewer.details.core_prompt_count"];
  return f.useEffect(() => {
    if (!u) {
      p(!1), b([]);
      return;
    }
    const k = Array.isArray(e.positive_prompt_keywords) && e.positive_prompt_keywords.length > 0 ? e.positive_prompt_keywords : [], w = Array.from(new Set(k));
    if (w.length === 0) {
      p(!1), b([]);
      return;
    }
    const C = new AbortController();
    return (async () => {
      p(!0);
      try {
        const { fetchAnalyticsCounts: z } = await Promise.resolve().then(() => Qy), I = await z("positive_prompts", w, {
          signal: C.signal
        });
        if (C.signal.aborted) {
          p(!1), b([]);
          return;
        }
        const R = w.map((U) => ({
          name: U,
          count: I[U] ?? 0
        })).sort((U, B) => U.count - B.count);
        b(R.slice(0, g));
      } catch (z) {
        if (z instanceof Error && z.name === "AbortError") {
          p(!1), b([]);
          return;
        }
        $.error("Failed to fetch core prompt counts", z), p(!1), b([]);
      } finally {
        C.signal.aborted || p(!1);
      }
    })(), () => {
      C.abort(), p(!1), b([]);
    };
  }, [e.positive_prompt_keywords, u, g]), /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-viewer-details-overlay ${t ? "meld-viewer-details-overlay--fullscreen" : ""} ${r ? "" : "meld-viewer-details-overlay--no-icons"}`,
      children: [
        (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Copy filepath" : "Copy filename",
                onClick: (k) => {
                  k.stopPropagation();
                  const w = (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename;
                  y(w, "filepath");
                },
                children: d === "filepath" ? /* @__PURE__ */ l.jsx(Je, { size: 16 }) : /* @__PURE__ */ l.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename })
        ] }),
        (t ? n["fullscreen.details.show_dimensions"] : n["viewer.details.show_dimensions"]) && e.width && e.height && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy dimensions",
                onClick: (k) => {
                  k.stopPropagation(), y(`${e.width} x ${e.height} px`, "dimensions");
                },
                children: d === "dimensions" ? /* @__PURE__ */ l.jsx(Je, { size: 16 }) : /* @__PURE__ */ l.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-value", children: [
            e.width,
            " x ",
            e.height,
            " px"
          ] })
        ] }),
        (t ? n["fullscreen.details.show_created_at"] : n["viewer.details.show_created_at"]) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy created timestamp",
                onClick: (k) => {
                  k.stopPropagation(), y(new Date(e.created_at * 1e3).toLocaleString(), "created_at");
                },
                children: d === "created_at" ? /* @__PURE__ */ l.jsx(Je, { size: 16 }) : /* @__PURE__ */ l.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.created_at * 1e3).toLocaleString() })
        ] }),
        e.deleted_at && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy deleted timestamp",
                onClick: (k) => {
                  k.stopPropagation();
                  const w = e.deleted_at;
                  w && y(new Date(w * 1e3).toLocaleString(), "deleted_at");
                },
                children: d === "deleted_at" ? /* @__PURE__ */ l.jsx(Je, { size: 16 }) : /* @__PURE__ */ l.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.deleted_at * 1e3).toLocaleString() })
        ] }),
        (t ? n["fullscreen.details.show_model_name"] : n["viewer.details.show_model_name"]) && e.model_name && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy model",
                onClick: (k) => {
                  k.stopPropagation();
                  const w = e.model_name;
                  w && y(w, "model");
                },
                children: d === "model" ? /* @__PURE__ */ l.jsx(Je, { size: 16 }) : /* @__PURE__ */ l.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
        ] }),
        (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && s.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: s.map(
            (k, w) => k.imgSrc && /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-lineage-badge__parent-thumb meld-lineage-badge__parent-thumb-btn",
                style: {
                  cursor: "pointer",
                  padding: 0,
                  border: "none",
                  background: "none"
                },
                onClick: (C) => {
                  C.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: k.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: w === 0 ? "Source" : w === 1 ? "Grand-Source" : `Ancestor (S${w + 1})`,
                "aria-label": w === 0 ? "View source image" : w === 1 ? "View grand-source image" : `View ancestor image (S${w + 1})`,
                children: /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    src: k.imgSrc,
                    loading: "lazy",
                    alt: "",
                    style: {
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }
                  }
                )
              },
              k.id || w
            )
          ) }) })
        ] }),
        (t ? n["fullscreen.details.show_positive_prompt"] : n["viewer.details.show_positive_prompt"]) && (e.positive_prompt || e.positive) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy positive prompt",
                onClick: (k) => {
                  k.stopPropagation(), y(e.positive_prompt || e.positive || "", "positive");
                },
                children: d === "positive" ? /* @__PURE__ */ l.jsx(Je, { size: 16 }) : /* @__PURE__ */ l.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(
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
        u && (m || x.length > 0) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-label", children: [
              "Core Prompt",
              m && /* @__PURE__ */ l.jsx("span", { className: "meld-notes__status", role: "status", "aria-live": "polite", children: "Loading..." })
            ] }),
            !m && x.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy core prompt",
                onClick: (k) => {
                  k.stopPropagation(), y(x.map((w) => w.name).join(", "), "core_prompt");
                },
                children: d === "core_prompt" ? /* @__PURE__ */ l.jsx(Je, { size: 16 }) : /* @__PURE__ */ l.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: x.map((k, w) => /* @__PURE__ */ l.jsxs(
            "span",
            {
              className: "meld-viewer-details-tag",
              title: `Usage count: ${k.count}`,
              children: [
                k.name,
                " ",
                /* @__PURE__ */ l.jsxs("span", { className: "meld-viewer-details-tag-count", children: [
                  "(",
                  k.count,
                  ")"
                ] })
              ]
            },
            `${k.name}-${w}`
          )) })
        ] }),
        (t ? n["fullscreen.details.show_negative_prompt"] : n["viewer.details.show_negative_prompt"]) && (e.negative_prompt || e.negative) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy negative prompt",
                onClick: (k) => {
                  k.stopPropagation(), y(e.negative_prompt || e.negative || "", "negative");
                },
                children: d === "negative" ? /* @__PURE__ */ l.jsx(Je, { size: 16 }) : /* @__PURE__ */ l.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(
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
        (t ? n["fullscreen.details.show_tags"] : n["viewer.details.show_tags"]) && e.tags && e.tags.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy tags",
                onClick: (k) => {
                  var w;
                  k.stopPropagation(), y(((w = e.tags) == null ? void 0 : w.join(", ")) ?? "", "tags");
                },
                children: d === "tags" ? /* @__PURE__ */ l.jsx(Je, { size: 16 }) : /* @__PURE__ */ l.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((k) => /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-details-tag", children: k }, k)) })
        ] }),
        _ && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-label", children: [
              "Notes",
              i === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy notes",
                onClick: (k) => {
                  k.stopPropagation(), y(e.user_notes || "", "notes");
                },
                children: d === "notes" ? /* @__PURE__ */ l.jsx(Je, { size: 16 }) : /* @__PURE__ */ l.jsx(yt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-viewer-notes-preview",
              onClick: (k) => {
                k.stopPropagation(), o == null || o();
              },
              "aria-label": e.user_notes ? "Edit notes" : "Add notes",
              style: {
                cursor: "pointer",
                minHeight: "40px",
                padding: "8px",
                backgroundColor: "var(--meld-input-bg)",
                borderRadius: "4px",
                fontSize: "0.9rem",
                whiteSpace: "pre-wrap",
                width: "100%",
                textAlign: "left",
                border: "none",
                color: "inherit",
                fontFamily: "inherit"
              },
              children: e.user_notes || /* @__PURE__ */ l.jsx("span", { style: { color: "var(--meld-text-secondary)" }, children: "Add notes..." })
            }
          )
        ] })
      ]
    }
  );
}, lf = f.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r,
    viewerMode: s,
    lightTableSlotId: a
  }) => {
    const o = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, c = typeof e.parent_id == "number" && e.parent_id === n.id, d = ft(e, 64);
    return /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${o ? "meld-viewer-thumbnail--active" : ""} ${i ? "meld-viewer-thumbnail--parent" : ""} ${c ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: {
            id: e.id,
            mode: s,
            // Preserve slotId in lighttable mode
            ...s === "lighttable" && a ? { slotId: a } : {}
          }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ l.jsx("img", { src: d, alt: e.filename }),
          (i || c) && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: i ? "Source Image" : "Derivative Image",
              children: i ? /* @__PURE__ */ l.jsx(sm, { size: 12 }) : /* @__PURE__ */ l.jsx(lm, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
lf.displayName = "ThumbnailItem";
const lw = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: s,
  isLoading: a,
  viewerMode: o,
  lightTableSlotId: i
}) => /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-thumbnails", children: [
  s ? /* @__PURE__ */ l.jsx(
    "div",
    {
      style: {
        padding: "10px",
        color: "var(--meld-text-secondary)"
      },
      children: "Loading lineage..."
    }
  ) : e.map(({ img: c }) => /* @__PURE__ */ l.jsx(
    lf,
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
  o === "gallery" && a && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ l.jsx(tr, { className: "animate-spin", size: 20 }) })
] }) });
function sw() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ie(), {
    isFullscreen: s,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: h,
    isMenuOpen: v,
    setIsMenuOpen: y,
    activeShortcutKey: S,
    setLastDeletedImages: _,
    overlayRef: x,
    handleNext: b,
    handlePrevious: m,
    handleTagEdit: p,
    handleEditNotes: u,
    handleRestore: g,
    handleRestoreWorkflow: k,
    handleAddUnifiedLoader: w,
    handleSendToWorkflow: C,
    handleRunWithWorkflow: T,
    handleRunWithMask: z,
    handleEditSource: I,
    handleDelete: R,
    toggleFullscreen: U,
    image: B,
    windowedThumbnails: N,
    parentChain: F
  } = tw({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), D = f.useRef(null), V = f.useRef(null), { executeWorkflow: j } = li(), E = f.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!B) return null;
  const { viewerImageId: L, viewerMode: O } = e, M = s ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return ue.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: x,
        className: "meld-viewer-overlay",
        onClick: () => {
          e.activeModal.type === "none" && t({ type: "CLOSE_VIEWER" });
        },
        onKeyDown: (A) => {
          A.target === A.currentTarget && e.activeModal.type === "none" && (A.key === "Enter" || A.key === " " || A.key === "Spacebar") && (A.key === " " && A.preventDefault(), t({ type: "CLOSE_VIEWER" }));
        },
        role: "button",
        tabIndex: 0,
        "aria-label": "Close image viewer",
        children: [
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: `meld-viewer-content ${s ? "meld-viewer-content--fullscreen" : ""} ${i ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (A) => A.stopPropagation(),
              children: [
                M && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: g,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ l.jsx(tr, { size: 20 })
                    }
                  ),
                  !s && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ l.jsx(ei, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ l.jsx(Xh, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: U,
                      type: "button",
                      title: s ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: s ? /* @__PURE__ */ l.jsx(lg, { size: 20 }) : /* @__PURE__ */ l.jsx(ng, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    ii,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: y,
                      menuRef: V,
                      settings: e.settings,
                      onAddUnifiedLoader: w,
                      onRestoreWorkflow: k,
                      onSendToWorkflow: C,
                      onRunWithWorkflow: T,
                      onRunWithMask: z,
                      onEditSource: I,
                      onEditTags: p,
                      onEditNotes: u,
                      onDelete: R,
                      deleteLabel: E,
                      showQuickShortcuts: !1,
                      iconSize: 20,
                      buttonClassName: "meld-viewer-action-btn"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ l.jsx(de, { size: 20 })
                    }
                  )
                ] }),
                M && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: m,
                    type: "button",
                    disabled: h,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ l.jsx(om, { size: 32 })
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ l.jsx(tr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      ref: D,
                      src: ni(B),
                      alt: B.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[s ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                M && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: b,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ l.jsx(Zo, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ l.jsx(
                  rw,
                  {
                    image: B,
                    isFullscreen: s,
                    settings: e.settings,
                    showIcons: M,
                    parentChain: F,
                    dispatch: t,
                    onEditNotes: u
                  }
                ),
                !s && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ l.jsx(
                  lw,
                  {
                    windowedThumbnails: N,
                    viewerImageId: L,
                    currentImage: B,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: O,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ l.jsx(nw, { settings: e.settings, activeShortcutKey: S })
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
            Bm,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (A, P) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: A,
                        targetLoaderNodeId: P
                      }
                    }), !1;
                  const W = e.activeModal.maskFilename;
                  for (const H of e.activeModal.images)
                    await j(A, H, W, P);
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
            Vm,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (A) => {
                e.activeModal.type === "node_selection" && Yr(e.activeModal.image, A);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ l.jsx(Hm, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ l.jsx(
            Qm,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: _
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(Km, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(wm, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx($m, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ l.jsx(
            Wm,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ l.jsx(
            ai,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ l.jsx(
            Cm,
            {
              images: e.activeModal.images,
              currentIndex: e.activeModal.currentIndex,
              workflowName: e.activeModal.workflowName,
              targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
              onSuccess: () => {
                if (e.activeModal.type === "mask_sequence_step") {
                  const A = e.activeModal.currentIndex + 1;
                  A < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: A
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ l.jsx(
            Um,
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
const aw = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: s } = ie(), [a, o] = f.useState("gallery"), [i, c] = f.useState(""), d = e.searchQuery.trim() !== "", h = f.useRef(null), v = f.useRef(null), y = ne((b) => b.buckets), S = f.useMemo(() => {
    const b = /* @__PURE__ */ new Set();
    for (const m of Object.values(y))
      for (const p of m)
        b.add(Number(p));
    return b;
  }, [y]), _ = f.useMemo(() => e.images.filter((b) => S.has(b.id) ? !1 : e.viewScope === "trash" ? b.exists !== !1 || e.settings["gallery.trash.show_missing"] : b.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !b.has_children)), [e.images, e.settings, e.viewScope, S, d]), x = _;
  return f.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && _.length === 0 && ($.log("GalleryPanel: Auto-loading more because all loaded images are hidden"), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    _.length,
    r
  ]), Ms({
    onKeyDown: (b) => {
      if (b.key !== "Escape")
        return;
      const m = !!document.querySelector(
        '[role="dialog"][aria-modal="true"], [role="alertdialog"][aria-modal="true"], .meld-modal-overlay'
      );
      e.activeModal.type !== "none" || m || e.selectedIds.size !== 0 && (t({ type: "CLEAR_SELECTION" }), Xr(b));
    }
  }), f.useEffect(() => {
    const b = new IntersectionObserver(
      (p) => {
        const u = p[0];
        if (u && u.isIntersecting) {
          if (e.isLoading) {
            $.log("GalleryPanel: Intersection observed but already loading");
            return;
          }
          e.pagination.hasMore ? ($.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : $.log("GalleryPanel: Intersection observed but no more to load", {
            localCount: _.length,
            serverHasMore: e.pagination.hasMore
          });
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), m = h.current;
    return m && b.observe(m), () => {
      m && b.unobserve(m);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    _.length,
    e.images.length
  ]), f.useEffect(() => {
    e.viewerImageId !== null && (v.current = e.viewerImageId);
  }, [e.viewerImageId]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: s,
    viewMode: a,
    setViewMode: o,
    lastSearchQuery: i,
    setLastSearchQuery: c,
    localLimit: e.pagination.limit,
    displayedImages: _,
    visibleImages: x,
    isSearchActive: d,
    loadMoreRef: h
  };
}, ow = ({ slots: e, onSelect: t, onCancel: n }) => (ke({ onEscape: n }), /* @__PURE__ */ l.jsx("div", { className: "meld-tab-select-modal__overlay", onClick: n, role: "presentation", children: /* @__PURE__ */ l.jsxs(
  "div",
  {
    className: "meld-tab-select-modal__dialog",
    onClick: (r) => r.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Select Light Table tab",
    children: [
      /* @__PURE__ */ l.jsx("p", { className: "meld-tab-select-modal__title", children: "Select a tab" }),
      /* @__PURE__ */ l.jsx("div", { className: "meld-tab-select-modal__list", children: e.map((r) => /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-tab-select-modal__tab-btn",
          style: { "--tab-color": r.color },
          onClick: () => t(r.id, r.label),
          children: r.label
        },
        r.id
      )) })
    ]
  }
) })), iw = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ie(), { handleRunWithWorkflow: s, handleRunWithMask: a } = Is(e, t), o = e.selectedIds.size, i = ne((N) => N.slots), c = ne((N) => N.addToBucket), d = ne((N) => N.showToast), [h, v] = f.useState(!1), [y, S] = f.useState(null), [_, x] = f.useState(!1), b = f.useRef(null), m = f.useRef(null), p = Jm("bulkActionBar");
  if (ke({
    onEscape: () => v(!1),
    enabled: h
  }), Zr({
    enabled: h,
    insideRefs: [b, m],
    onOutside: () => v(!1)
  }), o === 0) return null;
  const u = e.viewScope === "trash", g = () => e.images.filter((N) => e.selectedIds.has(N.id)), k = () => {
    if (h) {
      v(!1);
      return;
    }
    b.current && (S(b.current.getBoundingClientRect()), v(!0));
  }, w = (N) => {
    N(), v(!1);
  }, C = () => {
    const N = g(), F = /* @__PURE__ */ new Set();
    for (const D of N)
      if (D.tags)
        for (const V of D.tags)
          F.add(V);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(F)
      }
    });
  }, T = () => {
    const N = g();
    s(N);
  }, z = () => {
    const N = g();
    N.length > 0 && a(N, "run");
  }, I = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, R = () => {
    const N = i[0];
    if (N)
      if (i.length === 1) {
        for (const F of e.selectedIds)
          c(N.id, String(F));
        d(`${o} image(s) sent to "${N.label}"`), v(!1);
      } else
        v(!1), x(!0);
  }, U = (N, F) => {
    for (const D of e.selectedIds)
      c(N, String(D));
    d(`${o} image(s) sent to "${F}"`), x(!1);
  }, B = /* @__PURE__ */ l.jsxs("div", { className: `meld-bulk-bar ${u ? "meld-bulk-bar--trash" : ""}`, children: [
    /* @__PURE__ */ l.jsxs("span", { className: "meld-bulk-bar__info", children: [
      o,
      " items selected"
    ] }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        ref: b,
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--action",
        onClick: k,
        children: [
          /* @__PURE__ */ l.jsx(rg, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Action"
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ l.jsx(de, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    ),
    h && y && /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: m,
        className: "meld-bulk-bar-menu",
        style: {
          bottom: window.innerHeight - y.top + 5,
          left: y.left
        },
        children: u ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
              onClick: () => w(r),
              children: [
                /* @__PURE__ */ l.jsx(tr, { size: 14 }),
                " Restore"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
              onClick: () => w(n),
              children: [
                /* @__PURE__ */ l.jsx(Wt, { size: 14 }),
                " Delete Permanently"
              ]
            }
          )
        ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => w(C),
              children: [
                /* @__PURE__ */ l.jsx(ar, { size: 14 }),
                " Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => w(T),
              children: [
                /* @__PURE__ */ l.jsx(Jo, { size: 14 }),
                " Queue Workflow"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => w(z),
              children: [
                /* @__PURE__ */ l.jsx(og, { size: 14 }),
                " Queue Workflow (Mask)"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => w(I),
              children: [
                /* @__PURE__ */ l.jsx(Gr, { size: 14 }),
                " Download"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: R,
              disabled: i.length === 0,
              children: [
                /* @__PURE__ */ l.jsx(ei, { size: 14 }),
                " Send to Light Table"
              ]
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-bulk-bar-menu__divider" }),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
              onClick: () => w(n),
              children: [
                /* @__PURE__ */ l.jsx(Wt, { size: 14 }),
                " Move to Trash"
              ]
            }
          )
        ] })
      }
    ),
    _ && /* @__PURE__ */ l.jsx(
      ow,
      {
        slots: i,
        onSelect: U,
        onCancel: () => x(!1)
      }
    )
  ] });
  return ue.createPortal(B, p);
};
function Nn(e, t, n) {
  let r = n.initialDeps ?? [], s, a = !0;
  function o() {
    var i, c, d;
    let h;
    n.key && ((i = n.debug) != null && i.call(n)) && (h = Date.now());
    const v = e();
    if (!(v.length !== r.length || v.some((_, x) => r[x] !== _)))
      return s;
    r = v;
    let S;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (S = Date.now()), s = t(...v), n.key && ((d = n.debug) != null && d.call(n))) {
      const _ = Math.round((Date.now() - h) * 100) / 100, x = Math.round((Date.now() - S) * 100) / 100, b = x / 16, m = (p, u) => {
        for (p = String(p); p.length < u; )
          p = " " + p;
        return p;
      };
      console.info(
        `%c⏱ ${m(x, 5)} /${m(_, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * b, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return n != null && n.onChange && !(a && n.skipInitialOnChange) && n.onChange(s), a = !1, s;
  }
  return o.updateDeps = (i) => {
    r = i;
  }, o;
}
function Oc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const cw = (e, t) => Math.abs(e - t) < 1.01, dw = (e, t, n) => {
  let r;
  return function(...s) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, s), n);
  };
}, zc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, uw = (e) => e, mw = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let s = t; s <= n; s++)
    r.push(s);
  return r;
}, fw = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const s = (o) => {
    const { width: i, height: c } = o;
    t({ width: Math.round(i), height: Math.round(c) });
  };
  if (s(zc(n)), !r.ResizeObserver)
    return () => {
    };
  const a = new r.ResizeObserver((o) => {
    const i = () => {
      const c = o[0];
      if (c != null && c.borderBoxSize) {
        const d = c.borderBoxSize[0];
        if (d) {
          s({ width: d.inlineSize, height: d.blockSize });
          return;
        }
      }
      s(zc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Fc = {
  passive: !0
}, $c = typeof window > "u" ? !0 : "onscrollend" in window, pw = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let s = 0;
  const a = e.options.useScrollendEvent && $c ? () => {
  } : dw(
    r,
    () => {
      t(s, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (h) => () => {
    const { horizontal: v, isRtl: y } = e.options;
    s = v ? n.scrollLeft * (y && -1 || 1) : n.scrollTop, a(), t(s, h);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Fc);
  const d = e.options.useScrollendEvent && $c;
  return d && n.addEventListener("scrollend", c, Fc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, hw = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, gw = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var s, a;
  const o = e + t;
  (a = (s = r.scrollElement) == null ? void 0 : s.scrollTo) == null || a.call(s, {
    [r.options.horizontal ? "left" : "top"]: o,
    behavior: n
  });
};
class yw {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((a) => {
          const o = () => {
            this._measureElement(a.target, a);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = r()) == null || s.disconnect(), n = null;
        },
        observe: (s) => {
          var a;
          return (a = r()) == null ? void 0 : a.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var a;
          return (a = r()) == null ? void 0 : a.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, s]) => {
        typeof s > "u" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: uw,
        rangeExtractor: mw,
        onChange: () => {
        },
        measureElement: hw,
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
      var r, s;
      (s = (r = this.options).onChange) == null || s.call(r, this, n);
    }, this.maybeNotify = Nn(
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
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((s) => {
          this.observer.observe(s);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (s) => {
            this.scrollRect = s, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (s, a) => {
            this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = a, this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
      const s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (let o = r - 1; o >= 0; o--) {
        const i = n[o];
        if (s.has(i.lane))
          continue;
        const c = a.get(
          i.lane
        );
        if (c == null || i.end > c.end ? a.set(i.lane, i) : i.end < c.end && s.set(i.lane, !0), s.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((o, i) => o.end === i.end ? o.index - i.index : o.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = Nn(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (n, r, s, a, o, i) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: s,
        getItemKey: a,
        enabled: o,
        lanes: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Nn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: s, getItemKey: a, enabled: o, lanes: i }, c) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const y of this.laneAssignments.keys())
            y >= n && this.laneAssignments.delete(y);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((y) => {
          this.itemSizeCache.set(y.key, y.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1);
        const h = this.measurementsCache.slice(0, d), v = new Array(i).fill(
          void 0
        );
        for (let y = 0; y < d; y++) {
          const S = h[y];
          S && (v[S.lane] = y);
        }
        for (let y = d; y < n; y++) {
          const S = a(y), _ = this.laneAssignments.get(y);
          let x, b;
          if (_ !== void 0 && this.options.lanes > 1) {
            x = _;
            const g = v[x], k = g !== void 0 ? h[g] : void 0;
            b = k ? k.end + this.options.gap : r + s;
          } else {
            const g = this.options.lanes === 1 ? h[y - 1] : this.getFurthestMeasurement(h, y);
            b = g ? g.end + this.options.gap : r + s, x = g ? g.lane : y % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(y, x);
          }
          const m = c.get(S), p = typeof m == "number" ? m : this.options.estimateSize(y), u = b + p;
          h[y] = {
            index: y,
            start: b,
            size: p,
            end: u,
            key: S,
            lane: x
          }, v[x] = y;
        }
        return this.measurementsCache = h, h;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Nn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, s, a) => this.range = n.length > 0 && r > 0 ? vw({
        measurements: n,
        outerSize: r,
        scrollOffset: s,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Nn(
      () => {
        let n = null, r = null;
        const s = this.calculateRange();
        return s && (n = s.startIndex, r = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, s, a, o) => a === null || o === null ? [] : n({
        startIndex: a,
        endIndex: o,
        overscan: r,
        count: s
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, s = n.getAttribute(r);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const s = this.indexFromElement(n), a = this.measurementsCache[s];
      if (!a)
        return;
      const o = a.key, i = this.elementsCache.get(o);
      i !== n && (i && this.observer.unobserve(i), this.observer.observe(n), this.elementsCache.set(o, n)), n.isConnected && this.resizeItem(s, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const s = this.measurementsCache[n];
      if (!s)
        return;
      const a = this.itemSizeCache.get(s.key) ?? s.size, o = r - a;
      o !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, o, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(s.index), this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, s) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(s));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = Nn(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const s = [];
        for (let a = 0, o = n.length; a < o; a++) {
          const i = n[a], c = r[i];
          s.push(c);
        }
        return s;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Oc(
          r[sf(
            0,
            r.length - 1,
            (s) => Oc(r[s]).start,
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
    }, this.getOffsetForAlignment = (n, r, s = 0) => {
      if (!this.scrollElement) return 0;
      const a = this.getSize(), o = this.getScrollOffset();
      r === "auto" && (r = n >= o + a ? "end" : "start"), r === "center" ? n += (s - a) / 2 : r === "end" && (n -= a);
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const s = this.measurementsCache[n];
      if (!s)
        return;
      const a = this.getSize(), o = this.getScrollOffset();
      if (r === "auto")
        if (s.end >= o + a - this.options.scrollPaddingEnd)
          r = "end";
        else if (s.start <= o + this.options.scrollPaddingStart)
          r = "start";
        else
          return [o, r];
      if (r === "end" && n === this.options.count - 1)
        return [this.getMaxScrollOffset(), r];
      const i = r === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, r, s.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (n, { align: r = "start", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: s
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), n = Math.max(0, Math.min(n, this.options.count - 1)), this.currentScrollToIndex = n;
      let a = 0;
      const o = 10, i = (d) => {
        if (!this.targetWindow) return;
        const h = this.getOffsetForIndex(n, d);
        if (!h) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [v, y] = h;
        this._scrollToOffset(v, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const S = () => {
            if (this.currentScrollToIndex !== n) return;
            const _ = this.getScrollOffset(), x = this.getOffsetForIndex(n, y);
            if (!x) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            cw(x[0], _) || c(y);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(S) : S();
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
      let s;
      if (r.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
      else {
        const a = Array(this.options.lanes).fill(null);
        let o = r.length - 1;
        for (; o >= 0 && a.some((i) => i === null); ) {
          const i = r[o];
          a[i.lane] === null && (a[i.lane] = i.end), o--;
        }
        s = Math.max(...a.filter((i) => i !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: s
    }) => {
      this.options.scrollToFn(n, { behavior: s, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const sf = (e, t, n, r) => {
  for (; e <= t; ) {
    const s = (e + t) / 2 | 0, a = n(s);
    if (a < r)
      e = s + 1;
    else if (a > r)
      t = s - 1;
    else
      return s;
  }
  return e > 0 ? e - 1 : 0;
};
function vw({
  measurements: e,
  outerSize: t,
  scrollOffset: n,
  lanes: r
}) {
  const s = e.length - 1, a = (c) => e[c].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: s
    };
  let o = sf(
    0,
    s,
    a,
    n
  ), i = o;
  if (r === 1)
    for (; i < s && e[i].end < n + t; )
      i++;
  else if (r > 1) {
    const c = Array(r).fill(0);
    for (; i < s && c.some((h) => h < n + t); ) {
      const h = e[i];
      c[h.lane] = h.end, i++;
    }
    const d = Array(r).fill(n + t);
    for (; o >= 0 && d.some((h) => h >= n); ) {
      const h = e[o];
      d[h.lane] = h.start, o--;
    }
    o = Math.max(0, o - o % r), i = Math.min(s, i + (r - 1 - i % r));
  }
  return { startIndex: o, endIndex: i };
}
const Wc = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function ww({
  useFlushSync: e = !0,
  ...t
}) {
  const n = f.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? ue.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [s] = f.useState(
    () => new yw(r)
  );
  return s.setOptions(r), Wc(() => s._didMount(), []), Wc(() => s._willUpdate()), s;
}
function xw(e) {
  return ww({
    observeElementRect: fw,
    observeElementOffset: pw,
    scrollToFn: gw,
    ...e
  });
}
const af = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ie(), s = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: v,
    handleRunWithMask: y,
    handleRestore: S,
    handleDelete: _,
    handleEditNotes: x,
    handleUpdateUserNotes: b
  } = Is(t, n), { getParentChain: m } = rf(t.images, t.settings), [p, u] = f.useState(null), [g, k] = f.useState(!1), [w, C] = f.useState(null), [T, z] = f.useState(!1), I = f.useRef(null);
  Zr({
    enabled: g,
    insideRefs: [I],
    onOutside: () => k(!1)
  });
  const R = async (G, Ve, Ae = !1) => {
    try {
      await navigator.clipboard.writeText(G), Ae ? (z(!0), setTimeout(() => z(!1), 2e3)) : (C(Ve), setTimeout(() => C(null), 2e3));
    } catch (De) {
      $.error("Failed to copy text: ", De);
    }
  }, U = f.useCallback(
    (G) => {
      if (G.key === "Escape") {
        if (p) {
          Xr(G), u(null);
          return;
        }
        g && (Xr(G), k(!1));
      }
    },
    [p, g]
  );
  Ms({
    enabled: g || p !== null,
    onKeyDown: U
  });
  const B = m(e), F = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, D = t.settings["sidebar.thumbnail_size"] || 100, V = ft(e, Math.min(400, Math.round(D * 1.5)));
  return {
    state: t,
    dispatch: n,
    isSelected: s,
    viewMode: a,
    popupContent: p,
    setPopupContent: u,
    isMenuOpen: g,
    setIsMenuOpen: k,
    copiedLabel: w,
    popupCopied: T,
    menuRef: I,
    parentChain: B,
    displayFilename: F,
    imgSrc: V,
    handleCopy: R,
    handleClick: (G) => {
      !G || typeof G.preventDefault != "function" || (G.shiftKey ? (G.preventDefault(), G.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : G.ctrlKey || G.metaKey || t.selectedIds.size > 0 ? (G.preventDefault(), G.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id }));
    },
    handleSelectToggle: (G) => {
      !G || typeof G.preventDefault != "function" || (G.preventDefault(), G.stopPropagation(), G.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleContainerClick: (G) => {
      !G || typeof G.preventDefault != "function" || (G.shiftKey ? (G.preventDefault(), G.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : G.ctrlKey || G.metaKey || t.selectedIds.size > 0 ? (G.preventDefault(), G.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (G.preventDefault(), G.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })));
    },
    handleMouseDown: (G) => {
      !G || typeof G.preventDefault != "function" || !G.target || G.target instanceof Element && G.target.closest("textarea, input, button, .meld-image-card__meta-content") || !G.shiftKey && !G.ctrlKey && !G.metaKey && s || (G.shiftKey || G.ctrlKey || G.metaKey || t.selectedIds.size > 0) && G.preventDefault();
    },
    handleKeyDown: (G) => {
      var Ae, De, Be;
      !G || typeof G.preventDefault != "function" || ((Ae = document.activeElement) == null ? void 0 : Ae.tagName) === "INPUT" || ((De = document.activeElement) == null ? void 0 : De.tagName) === "TEXTAREA" || (Be = document.activeElement) != null && Be.isContentEditable || (G.key === "Enter" || G.key === " ") && (G.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      x(e);
    },
    handleSendToWorkflow: () => {
      h(e);
    },
    handleRestore: () => {
      S(e);
    },
    handleDelete: () => {
      _(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (G = "run") => y(e, G),
    handleUpdateUserNotes: (G) => b(e.id, G),
    fetchFullImageDetails: r
  };
}, _w = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: s
}) => (ke({ onEscape: n }), ue.createPortal(
  /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-prompt-popup__overlay",
      onClick: (a) => {
        a.stopPropagation(), n();
      },
      children: /* @__PURE__ */ l.jsxs("div", { className: "meld-prompt-popup__content", onClick: (a) => a.stopPropagation(), children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-prompt-popup__header", children: [
          /* @__PURE__ */ l.jsx("span", { children: e }),
          /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            s ? /* @__PURE__ */ l.jsx(Je, { size: 18, style: { color: "var(--meld-success-color)" }, "aria-hidden": !0 }) : /* @__PURE__ */ l.jsx(
              "span",
              {
                role: "button",
                tabIndex: 0,
                className: "meld-prompt-popup__copy",
                "aria-label": "Copy prompt",
                onClick: () => r(t),
                onKeyDown: (a) => {
                  (a.key === "Enter" || a.key === " ") && (a.preventDefault(), r(t));
                },
                children: /* @__PURE__ */ l.jsx(yt, { size: 18 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "span",
              {
                role: "button",
                tabIndex: 0,
                className: "meld-prompt-popup__close",
                "aria-label": "Close",
                onClick: n,
                onKeyDown: (a) => {
                  (a.key === "Enter" || a.key === " ") && (a.preventDefault(), n());
                },
                children: /* @__PURE__ */ l.jsx(de, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "meld-prompt-popup__text", children: t })
      ] })
    }
  ),
  document.body
)), of = dt.memo(({ image: e }) => {
  const {
    state: t,
    dispatch: n,
    isSelected: r,
    popupContent: s,
    setPopupContent: a,
    isMenuOpen: o,
    setIsMenuOpen: i,
    copiedLabel: c,
    popupCopied: d,
    menuRef: h,
    parentChain: v,
    displayFilename: y,
    imgSrc: S,
    handleCopy: _,
    handleClick: x,
    handleSelectToggle: b,
    handleContainerClick: m,
    handleMouseDown: p,
    handleKeyDown: u,
    handleRestoreWorkflow: g,
    handleAddUnifiedLoader: k,
    handleEditSource: w,
    handleEditTags: C,
    handleEditNotes: T,
    handleSendToWorkflow: z,
    handleRestore: I,
    handleDelete: R,
    handleRunWithWorkflow: U,
    handleRunWithMask: B,
    fetchFullImageDetails: N
  } = af(e), [F, D] = f.useState("idle");
  f.useEffect(() => {
    e.user_notes && F === "saving" && D("idle");
  }, [e.user_notes, F]);
  const V = (j) => {
    j.stopPropagation();
    let E = String(e.id);
    r && t.selectedIds.size > 0 && (E = Array.from(t.selectedIds).join(",")), j.dataTransfer.setData("text/plain", E), ne.getState().setIsOpen(!0);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
      onClick: m,
      onMouseDown: p,
      onKeyDown: u,
      role: "button",
      tabIndex: 0,
      draggable: !0,
      onDragStart: V,
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
              onClick: b,
              "aria-label": "Toggle selection",
              role: "checkbox",
              "aria-checked": r,
              children: r && /* @__PURE__ */ l.jsxs(
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
                    /* @__PURE__ */ l.jsx("title", { children: "Selected" }),
                    /* @__PURE__ */ l.jsx("polyline", { points: "20 6 9 17 4 12" })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
            "img",
            {
              src: S,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              draggable: !1,
              width: e.width || void 0,
              height: e.height || void 0,
              style: {
                aspectRatio: e.width && e.height ? `${e.width} / ${e.height}` : void 0
              },
              onMouseDown: p,
              onClick: (j) => {
                j.stopPropagation(), x(j);
              }
            }
          )
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && y,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
              (j, E) => j.imgSrc && /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lineage-badge__parent-thumb meld-lineage-badge__parent-thumb-btn",
                  style: {
                    padding: 0,
                    border: "none",
                    background: "none"
                  },
                  onClick: (L) => {
                    L.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: j.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: E === 0 ? "Source" : E === 1 ? "Grand-Source" : `Ancestor (S${E + 1})`,
                  "aria-label": E === 0 ? "View source image" : E === 1 ? "View grand-source image" : `View ancestor image (S${E + 1})`,
                  children: /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      src: j.imgSrc,
                      loading: "lazy",
                      alt: "",
                      style: {
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }
                    }
                  )
                },
                j.id || E
              )
            ) })
          ] }),
          t.settings["sidebar.show_created_at"] && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Created At" }),
            /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.created_at * 1e3).toLocaleString() })
          ] }),
          t.viewScope === "trash" && e.deleted_at && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Deleted At" }),
            /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.deleted_at * 1e3).toLocaleString() })
          ] }),
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: async (j) => {
                j.stopPropagation();
                const E = await N(e.id);
                a({
                  title: "Model",
                  text: E.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (j) => {
                      j.stopPropagation();
                      const E = await N(e.id);
                      _(E.model_name || "-", "Model");
                    },
                    children: c === "Model" ? "Copied!" : "Model"
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: async (j) => {
                j.stopPropagation();
                const E = await N(e.id);
                a({
                  title: "Positive Prompt",
                  text: E.positive_prompt || E.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (j) => {
                      j.stopPropagation();
                      const E = await N(e.id);
                      _(E.positive_prompt || E.positive || "-", "Positive");
                    },
                    children: c === "Positive" ? "Copied!" : "Positive"
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: async (j) => {
                j.stopPropagation();
                const E = await N(e.id);
                a({
                  title: "Negative Prompt",
                  text: E.negative_prompt || E.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (j) => {
                      j.stopPropagation();
                      const E = await N(e.id);
                      _(E.negative_prompt || E.negative || "-", "Negative");
                    },
                    children: c === "Negative" ? "Copied!" : "Negative"
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_tags"] && /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (j) => {
                j.stopPropagation(), C();
              },
              children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((j) => /* @__PURE__ */ l.jsx("span", { className: "meld-image-card__tag", children: j }, j)) : /* @__PURE__ */ l.jsx(
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
          (t.settings["sidebar.show_user_notes"] === "always" || t.settings["sidebar.show_user_notes"] === "if_present" && e.user_notes) && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-item meld-image-card__meta-item--notes", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-label", children: [
              "Notes",
              F === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ l.jsx(
              "div",
              {
                className: "meld-image-card__meta-content",
                onClick: (j) => {
                  j.stopPropagation(), T();
                },
                children: /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ l.jsx("span", { className: "meld-notes__placeholder", children: "Add notes..." }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l.jsx(
          ii,
          {
            isMenuOpen: o,
            setIsMenuOpen: i,
            menuRef: h,
            settings: t.settings,
            onAddUnifiedLoader: k,
            onRestoreWorkflow: g,
            onSendToWorkflow: z,
            onRunWithWorkflow: U,
            onRunWithMask: (j) => B(j),
            onEditSource: w,
            onEditTags: C,
            onEditNotes: T,
            onRestore: I,
            showRestore: t.viewScope === "trash",
            onDelete: R,
            deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
          }
        ),
        s && /* @__PURE__ */ l.jsx(
          _w,
          {
            title: s.title,
            text: s.text,
            onClose: () => a(null),
            onCopy: (j) => _(j, "", !0),
            isCopied: d
          }
        )
      ]
    }
  );
});
of.displayName = "DetailedImageCard";
const cf = dt.memo(({ image: e }) => {
  const {
    isSelected: t,
    imgSrc: n,
    handleContainerClick: r,
    handleMouseDown: s,
    handleKeyDown: a,
    handleClick: o,
    handleSelectToggle: i,
    isMenuOpen: c,
    setIsMenuOpen: d,
    menuRef: h,
    state: v,
    handleAddUnifiedLoader: y,
    handleRestoreWorkflow: S,
    handleSendToWorkflow: _,
    handleRunWithWorkflow: x,
    handleRunWithMask: b,
    handleEditSource: m,
    handleEditTags: p,
    handleEditNotes: u,
    handleDelete: g,
    handleRestore: k
  } = af(e), w = v.viewScope === "trash", C = w ? "Delete Permanently" : "Move to Trash", T = (z) => {
    z.stopPropagation();
    let I = String(e.id);
    t && v.selectedIds.size > 0 && (I = Array.from(v.selectedIds).join(",")), z.dataTransfer.setData("text/plain", I), ne.getState().setIsOpen(!0);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""} ${c ? "meld-image-card--menu-open" : ""}`,
      onClick: r,
      onMouseDown: s,
      onKeyDown: a,
      role: "button",
      tabIndex: 0,
      draggable: !0,
      onDragStart: T,
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: `meld-image-card__select-checkbox ${t ? "meld-image-card__select-checkbox--checked" : ""}`,
              onClick: i,
              "aria-label": "Toggle selection",
              role: "checkbox",
              "aria-checked": t,
              children: t && /* @__PURE__ */ l.jsxs(
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
                    /* @__PURE__ */ l.jsx("title", { children: "Selected" }),
                    /* @__PURE__ */ l.jsx("polyline", { points: "20 6 9 17 4 12" })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
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
              onMouseDown: s,
              onClick: (z) => {
                z.stopPropagation(), o(z);
              }
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(
          ii,
          {
            isMenuOpen: c,
            setIsMenuOpen: d,
            menuRef: h,
            settings: v.settings,
            onAddUnifiedLoader: y,
            onRestoreWorkflow: S,
            onSendToWorkflow: _,
            onRunWithWorkflow: x,
            onRunWithMask: b,
            onEditSource: m,
            onEditTags: p,
            onEditNotes: u,
            onDelete: g,
            onRestore: k,
            showRestore: w,
            deleteLabel: C,
            showQuickShortcuts: !1,
            variant: "thumbnail_overlay_top_right"
          }
        )
      ]
    }
  );
});
cf.displayName = "SimpleImageCard";
const Uc = ({ image: e }) => {
  const { state: t } = ie();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ l.jsx(cf, { image: e }) : /* @__PURE__ */ l.jsx(of, { image: e });
}, oa = 6, kw = 10, bw = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: s,
  hasMore: a
}) => {
  const o = f.useRef(null), [i, c] = f.useState(300), [d, h] = f.useState(!0), v = t["sidebar.thumbnail_size"] || 100, y = t["gallery.view_mode"] === "grid_only";
  f.useEffect(() => {
    const u = o.current;
    if (!u) return;
    const g = () => {
      c(u.clientWidth);
    };
    g();
    const k = new ResizeObserver(g);
    return k.observe(u), () => k.disconnect();
  }, []), f.useEffect(() => {
    const u = o.current;
    if (!u) return;
    if (typeof IntersectionObserver > "u") {
      h(!0);
      return;
    }
    const g = new IntersectionObserver(
      (k) => {
        const w = k[0];
        w && h(w.isIntersecting);
      },
      { threshold: 0 }
    );
    return g.observe(u), () => g.disconnect();
  }, []);
  const S = v + 10, _ = y ? Math.max(
    1,
    Math.floor((i - kw * 2 + oa) / (S + oa))
  ) : 1, x = y ? Math.ceil(e.length / _) : e.length, b = y ? v + 14 : v + 40, m = xw({
    count: x,
    getScrollElement: () => o.current,
    estimateSize: () => b,
    overscan: 5,
    enabled: d,
    getItemKey: (u) => {
      var g;
      return y ? `row-${u}-${_}` : ((g = e[u]) == null ? void 0 : g.id) ?? u;
    }
  });
  f.useEffect(() => {
    if (r === null) return;
    const u = e.findIndex((k) => k.id === r);
    if (u < 0) return;
    const g = y ? Math.floor(u / _) : u;
    m.scrollToIndex(g, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, y, _, m]);
  const p = m.getVirtualItems();
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: o,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${v}px`
      },
      children: [
        /* @__PURE__ */ l.jsx(
          "div",
          {
            className: `meld-gallery__list ${y ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${m.getTotalSize()}px`,
              position: "relative"
            },
            children: p.map((u) => {
              if (y) {
                const k = u.index * _, w = Math.min(k + _, e.length), C = e.slice(k, w);
                return /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    ref: m.measureElement,
                    "data-index": u.index,
                    className: "meld-gallery__virtual-grid-row",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${u.start}px)`,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: oa,
                      alignItems: "flex-start"
                    },
                    children: C.map((T) => /* @__PURE__ */ l.jsx(
                      "div",
                      {
                        "data-image-id": T.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ l.jsx(
                          "div",
                          {
                            style: {
                              width: T.width && T.height ? Math.min(v, v * T.width / T.height) + 10 : v + 10,
                              minWidth: v + 10
                            },
                            children: /* @__PURE__ */ l.jsx(Uc, { image: T })
                          }
                        )
                      },
                      T.id
                    ))
                  },
                  u.key
                );
              }
              const g = e[u.index];
              return g ? /* @__PURE__ */ l.jsx(
                "div",
                {
                  ref: m.measureElement,
                  "data-index": u.index,
                  "data-image-id": g.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${u.start}px)`
                  },
                  children: /* @__PURE__ */ l.jsx(Uc, { image: g })
                },
                u.key
              ) : null;
            })
          }
        ),
        /* @__PURE__ */ l.jsxs(
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
              s && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
              !s && !a && e.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
            ]
          }
        )
      ]
    }
  );
}, Sw = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: s,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: i,
    displayedImages: c,
    visibleImages: d,
    isSearchActive: h,
    loadMoreRef: v
  } = aw(), y = ne((C) => C.isOpen), S = ne((C) => C.setIsOpen), _ = ne((C) => C.buckets), x = Object.values(_).some(
    (C) => C && C.length > 0
  );
  $.log("GalleryPanel: isLightTableOpen =", y);
  const [b, m] = f.useState(!1), [p, u] = f.useState(null), g = f.useRef(null), k = f.useCallback(() => {
    g.current && (u(g.current.getBoundingClientRect()), m(!0));
  }, []), w = f.useCallback(
    (C) => {
      t({ type: "SET_SEARCH_QUERY", payload: C }), i(C), a("search"), m(!1);
    },
    [t, i, a]
  );
  return $.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: d.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (C) => {
        C.dataTransfer.types.includes("application/meld-lt-source-slot") && (C.preventDefault(), C.dataTransfer.dropEffect = "move");
      },
      onDrop: (C) => {
        const T = C.dataTransfer.getData("application/meld-lt-source-slot");
        if (T) {
          C.preventDefault();
          const z = C.dataTransfer.getData("text/plain");
          if (z) {
            const I = z.split(","), R = [];
            I.forEach((U) => {
              if (U) {
                const B = U.trim();
                ne.getState().removeFromBucket(T, B);
                const N = Number(B);
                Number.isNaN(N) || R.push(N);
              }
            }), R.length > 0 && t({ type: "DESELECT_IMAGES", payload: R });
          }
        }
      },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ l.jsx(Wt, { size: 14 }),
              /* @__PURE__ */ l.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ l.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (C) => r("gallery.trash.show_missing", C.target.checked)
                }
              ),
              /* @__PURE__ */ l.jsx("span", { children: "Show missing files" })
            ] }),
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                type: "button",
                className: "meld-gallery__exit-trash",
                onClick: () => t({ type: "SET_VIEW_SCOPE", payload: "default" }),
                title: "Exit Trash View",
                children: [
                  /* @__PURE__ */ l.jsx(de, { size: 14 }),
                  /* @__PURE__ */ l.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__actions", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(s === "analytics" ? "gallery" : "analytics"),
                style: {
                  background: "none",
                  border: "none",
                  color: s === "analytics" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Image Analytics",
                children: /* @__PURE__ */ l.jsx(am, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  s === "search" ? (i(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: h ? "var(--meld-success-color)" : s === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: h ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ l.jsx(on, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                ref: g,
                type: "button",
                onClick: k,
                style: {
                  background: "none",
                  border: "none",
                  color: b ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ l.jsx(nr, { size: 14, fill: b ? "var(--brand-yellow, #ffd700)" : "none" })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(s === "tags" ? "gallery" : "tags"),
                style: {
                  background: "none",
                  border: "none",
                  color: s === "tags" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: s === "tags" ? "bold" : "normal"
                },
                title: "Tag Manager",
                children: /* @__PURE__ */ l.jsx(ar, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const T = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", T);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ l.jsx(Jh, { size: 14 }) : /* @__PURE__ */ l.jsx(ei, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  $.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    y,
                    "to",
                    !y
                  ), S(!y);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: y ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ l.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ l.jsx(
                    ag,
                    {
                      size: 14,
                      fill: y ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: y ? 1 : 0.8 }
                    }
                  ),
                  !y && x && /* @__PURE__ */ l.jsx(
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
            /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(Gr, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(tr, { size: 14, className: e.isLoading ? "animate-spin" : "" })
              }
            ),
            /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(cm, { size: 14 })
              }
            )
          ] }),
          s === "search" && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ l.jsx(Qv, {}) })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ l.jsx(xv, {}),
          e.error && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__error", children: e.error }),
          s === "analytics" ? /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ l.jsx(
                wv,
                {
                  onClose: () => a("gallery"),
                  onSearchAndNavigate: (C) => {
                    t({ type: "SET_SEARCH_QUERY", payload: C }), a("search");
                  }
                }
              )
            }
          ) : s === "tags" ? /* @__PURE__ */ l.jsx(
            Hv,
            {
              onClose: () => a("gallery"),
              onSearch: (C) => {
                t({ type: "SET_SEARCH_QUERY", payload: C }), a("search");
              }
            }
          ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ l.jsx(
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
              children: /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." })
            }
          ) : d.length === 0 ? /* @__PURE__ */ l.jsx(
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
              children: /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No images found." })
            }
          ) : /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ l.jsx(
                bw,
                {
                  visibleImages: d,
                  settings: e.settings,
                  loadMoreRef: v,
                  viewerImageId: e.viewerImageId,
                  isLoading: e.isLoading,
                  hasMore: e.pagination.hasMore
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsx(iw, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ l.jsx(sw, {}),
        /* @__PURE__ */ l.jsx(Vy, {}),
        b && /* @__PURE__ */ l.jsx(
          Uv,
          {
            anchorRect: p,
            onClose: () => m(!1),
            onSelect: w
          }
        ),
        /* @__PURE__ */ l.jsx(Iv, {})
      ]
    }
  );
};
Vc.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    function t(s) {
      return s !== null && typeof s == "object" && "comfyClass" in s && typeof s.comfyClass == "string" && Array.isArray(s.widgets);
    }
    if (!t(e)) return;
    const n = e;
    if (n.comfyClass !== "MeldUnifiedLoader") return;
    const r = () => {
      var o, i;
      const s = (o = n.widgets) == null ? void 0 : o.find((c) => c.name === "positive"), a = (i = n.widgets) == null ? void 0 : i.find((c) => c.name === "negative");
      s && s.inputEl && (s.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", s.inputEl.style.paddingLeft = "8px"), a && a.inputEl && (a.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", a.inputEl.style.paddingLeft = "8px");
    };
    r(), setTimeout(r, 1), setTimeout(r, 100);
  }
});
const jw = document.getElementById("meld-gallery-style");
if (!jw) {
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
let jl = null, ot = null;
const Cw = () => dt.createElement(Gg, null, dt.createElement(Sw)), Ew = () => {
  const [e, t] = dt.useState(0);
  return dt.useEffect(() => {
    const n = () => {
      vy(), t((r) => r + 1);
    };
    return window.addEventListener("meld-database-changed", n), () => {
      window.removeEventListener("meld-database-changed", n);
    };
  }, []), dt.createElement(Cw, { key: e });
};
Vc.registerExtension({
  name: "ComfyUI.Meld",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...s) {
        r == null || r.apply(this, s);
        const a = n.ui.meld;
        a != null && a.isVisible() && a.refresh();
      };
    }
  },
  async setup(e) {
    var n;
    Sv();
    try {
      const r = await gm();
      $.init(r.dev_mode), $.log("Settings received:", r);
    } catch (r) {
      $.error("Failed to fetch settings", r), $.init(!1);
    }
    if (!((n = e.extensionManager) != null && n.registerSidebarTab))
      return;
    e.ui.meld = {
      refresh: () => {
        window.dispatchEvent(new CustomEvent("meld-refresh"));
      },
      isVisible: () => {
        const r = document.getElementById("meld-gallery-container");
        return r && r.offsetParent !== null;
      },
      toggle: () => {
        var r;
        try {
          (r = e.extensionManager) == null || r.setSidebarTabActive("meld-gallery");
        } catch (s) {
          $.error("Error toggling sidebar:", s);
        }
      }
    }, J.addEventListener("meld-image-saved", () => {
      var r;
      (r = e.ui.meld) == null || r.refresh();
    }), J.addEventListener("meld-scan-progress", (r) => {
      window.dispatchEvent(new CustomEvent("meld-scan-progress", { detail: r.detail }));
    }), J.addEventListener("meld-scan-finished", (r) => {
      var s;
      window.dispatchEvent(new CustomEvent("meld-scan-finished", { detail: r.detail })), (s = e.ui.meld) == null || s.refresh(), $.log("Import completed.");
    });
    function t(r) {
      if (!r || typeof r != "object") return !1;
      const s = r.output;
      if (!s || typeof s != "object") return !1;
      const a = s.images;
      if (!a || !Array.isArray(a)) return !1;
      for (const o of a) {
        if (!o || typeof o != "object") return !1;
        const i = o;
        if (typeof i.filename != "string" || typeof i.subfolder != "string" || typeof i.type != "string")
          return !1;
      }
      return !0;
    }
    J.addEventListener("executed", async (r) => {
      var s;
      if (t(r.detail) && (s = r.detail.output) != null && s.images) {
        for (const a of r.detail.output.images)
          if (a.type === "output")
            try {
              await fm({
                filename: a.filename,
                subfolder: a.subfolder,
                type: a.type
              });
            } catch (o) {
              $.error("Failed to auto-register image:", o);
            }
      }
    });
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
        render: (r) => {
          $.log("render called", {
            el: r,
            galleryRoot: jl,
            galleryContainer: ot
          }), r.style.height = "100%", r.style.overflow = "hidden";
          let s = r.parentElement;
          for (; s && !s.classList.contains("sidebar-content-container"); )
            s.style.height = "100%", s.style.overflow = "hidden", s = s.parentElement;
          s && (s.style.overflow = "hidden"), ot || ($.log("galleryContainer not found, creating new one"), ot = document.createElement("div"), ot.id = "meld-gallery-container", ot.style.height = "100%", ot.style.width = "100%", ot.style.display = "flex", ot.style.flexDirection = "column", ot.style.overflow = "hidden"), r.contains(ot) || ($.log("Appending galleryContainer to el"), r.appendChild(ot)), jl ? $.log("Gallery root already exists, React should handle re-render if needed") : ($.log("Creating new gallery root"), jl = em(ot), jl.render(dt.createElement(Ew)));
        }
      });
    } catch (r) {
      $.error("Error during sidebar registration:", r);
    }
  }
});
export {
  Mw as c,
  df as g
};
