import { api as G } from "../../../scripts/api.js";
import { app as wo } from "../../../scripts/app.js";
function Zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xo = { exports: {} }, W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr = Symbol.for("react.element"), Jc = Symbol.for("react.portal"), qc = Symbol.for("react.fragment"), ed = Symbol.for("react.strict_mode"), td = Symbol.for("react.profiler"), nd = Symbol.for("react.provider"), rd = Symbol.for("react.context"), ld = Symbol.for("react.forward_ref"), id = Symbol.for("react.suspense"), ad = Symbol.for("react.memo"), sd = Symbol.for("react.lazy"), is = Symbol.iterator;
function od(e) {
  return e === null || typeof e != "object" ? null : (e = is && e[is] || e["@@iterator"], typeof e == "function" ? e : null);
}
var _o = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, So = Object.assign, ko = {};
function Nn(e, t, n) {
  this.props = e, this.context = t, this.refs = ko, this.updater = n || _o;
}
Nn.prototype.isReactComponent = {};
Nn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Nn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Eo() {
}
Eo.prototype = Nn.prototype;
function aa(e, t, n) {
  this.props = e, this.context = t, this.refs = ko, this.updater = n || _o;
}
var sa = aa.prototype = new Eo();
sa.constructor = aa;
So(sa, Nn.prototype);
sa.isPureReactComponent = !0;
var as = Array.isArray, Co = Object.prototype.hasOwnProperty, oa = { current: null }, No = { key: !0, ref: !0, __self: !0, __source: !0 };
function jo(e, t, n) {
  var r, l = {}, i = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) Co.call(t, r) && !No.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), f = 0; f < o; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: mr, type: e, key: i, ref: a, props: l, _owner: oa.current };
}
function ud(e, t) {
  return { $$typeof: mr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ua(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mr;
}
function cd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ss = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? cd("" + e.key) : t.toString(36);
}
function Or(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (i) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case mr:
        case Jc:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + Al(a, 0) : r, as(l) ? (n = "", e != null && (n = e.replace(ss, "$&/") + "/"), Or(l, t, n, "", function(f) {
    return f;
  })) : l != null && (ua(l) && (l = ud(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(ss, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", as(e)) for (var o = 0; o < e.length; o++) {
    i = e[o];
    var u = r + Al(i, o);
    a += Or(i, t, n, u, l);
  }
  else if (u = od(e), typeof u == "function") for (e = u.call(e), o = 0; !(i = e.next()).done; ) i = i.value, u = r + Al(i, o++), a += Or(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Or(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function dd(e) {
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
var ke = { current: null }, Fr = { transition: null }, fd = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: Fr, ReactCurrentOwner: oa };
function Io() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = { map: wr, forEach: function(e, t, n) {
  wr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return wr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return wr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ua(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
W.Component = Nn;
W.Fragment = qc;
W.Profiler = td;
W.PureComponent = aa;
W.StrictMode = ed;
W.Suspense = id;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fd;
W.act = Io;
W.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = So({}, e.props), l = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = oa.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Co.call(t, u) && !No.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var f = 0; f < u; f++) o[f] = arguments[f + 2];
    r.children = o;
  }
  return { $$typeof: mr, type: e.type, key: l, ref: i, props: r, _owner: a };
};
W.createContext = function(e) {
  return e = { $$typeof: rd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: nd, _context: e }, e.Consumer = e;
};
W.createElement = jo;
W.createFactory = function(e) {
  var t = jo.bind(null, e);
  return t.type = e, t;
};
W.createRef = function() {
  return { current: null };
};
W.forwardRef = function(e) {
  return { $$typeof: ld, render: e };
};
W.isValidElement = ua;
W.lazy = function(e) {
  return { $$typeof: sd, _payload: { _status: -1, _result: e }, _init: dd };
};
W.memo = function(e, t) {
  return { $$typeof: ad, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function(e) {
  var t = Fr.transition;
  Fr.transition = {};
  try {
    e();
  } finally {
    Fr.transition = t;
  }
};
W.unstable_act = Io;
W.useCallback = function(e, t) {
  return ke.current.useCallback(e, t);
};
W.useContext = function(e) {
  return ke.current.useContext(e);
};
W.useDebugValue = function() {
};
W.useDeferredValue = function(e) {
  return ke.current.useDeferredValue(e);
};
W.useEffect = function(e, t) {
  return ke.current.useEffect(e, t);
};
W.useId = function() {
  return ke.current.useId();
};
W.useImperativeHandle = function(e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function(e, t) {
  return ke.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function(e, t) {
  return ke.current.useLayoutEffect(e, t);
};
W.useMemo = function(e, t) {
  return ke.current.useMemo(e, t);
};
W.useReducer = function(e, t, n) {
  return ke.current.useReducer(e, t, n);
};
W.useRef = function(e) {
  return ke.current.useRef(e);
};
W.useState = function(e) {
  return ke.current.useState(e);
};
W.useSyncExternalStore = function(e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function() {
  return ke.current.useTransition();
};
W.version = "18.3.1";
xo.exports = W;
var y = xo.exports;
const os = /* @__PURE__ */ Zc(y);
var To = { exports: {} }, Re = {}, Mo = { exports: {} }, Lo = {};
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
  function t(T, A) {
    var $ = T.length;
    T.push(A);
    e: for (; 0 < $; ) {
      var z = $ - 1 >>> 1, U = T[z];
      if (0 < l(U, A)) T[z] = A, T[$] = U, $ = z;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var A = T[0], $ = T.pop();
    if ($ !== A) {
      T[0] = $;
      e: for (var z = 0, U = T.length, D = U >>> 1; z < D; ) {
        var X = 2 * (z + 1) - 1, B = T[X], we = X + 1, ht = T[we];
        if (0 > l(B, $)) we < U && 0 > l(ht, B) ? (T[z] = ht, T[we] = $, z = we) : (T[z] = B, T[X] = $, z = X);
        else if (we < U && 0 > l(ht, $)) T[z] = ht, T[we] = $, z = we;
        else break e;
      }
    }
    return A;
  }
  function l(T, A) {
    var $ = T.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : T.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var a = Date, o = a.now();
    e.unstable_now = function() {
      return a.now() - o;
    };
  }
  var u = [], f = [], w = 1, x = null, h = 3, v = !1, g = !1, _ = !1, j = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var A = n(f); A !== null; ) {
      if (A.callback === null) r(f);
      else if (A.startTime <= T) r(f), A.sortIndex = A.expirationTime, t(u, A);
      else break;
      A = n(f);
    }
  }
  function E(T) {
    if (_ = !1, p(T), !g) if (n(u) !== null) g = !0, F(P);
    else {
      var A = n(f);
      A !== null && H(E, A.startTime - T);
    }
  }
  function P(T, A) {
    g = !1, _ && (_ = !1, c(I), I = -1), v = !0;
    var $ = h;
    try {
      for (p(A), x = n(u); x !== null && (!(x.expirationTime > A) || T && !k()); ) {
        var z = x.callback;
        if (typeof z == "function") {
          x.callback = null, h = x.priorityLevel;
          var U = z(x.expirationTime <= A);
          A = e.unstable_now(), typeof U == "function" ? x.callback = U : x === n(u) && r(u), p(A);
        } else r(u);
        x = n(u);
      }
      if (x !== null) var D = !0;
      else {
        var X = n(f);
        X !== null && H(E, X.startTime - A), D = !1;
      }
      return D;
    } finally {
      x = null, h = $, v = !1;
    }
  }
  var R = !1, C = null, I = -1, Q = 5, L = -1;
  function k() {
    return !(e.unstable_now() - L < Q);
  }
  function S() {
    if (C !== null) {
      var T = e.unstable_now();
      L = T;
      var A = !0;
      try {
        A = C(!0, T);
      } finally {
        A ? b() : (R = !1, C = null);
      }
    } else R = !1;
  }
  var b;
  if (typeof d == "function") b = function() {
    d(S);
  };
  else if (typeof MessageChannel < "u") {
    var m = new MessageChannel(), N = m.port2;
    m.port1.onmessage = S, b = function() {
      N.postMessage(null);
    };
  } else b = function() {
    j(S, 0);
  };
  function F(T) {
    C = T, R || (R = !0, b());
  }
  function H(T, A) {
    I = j(function() {
      T(e.unstable_now());
    }, A);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, F(P));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(T) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var A = 3;
        break;
      default:
        A = h;
    }
    var $ = h;
    h = A;
    try {
      return T();
    } finally {
      h = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, A) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var $ = h;
    h = T;
    try {
      return A();
    } finally {
      h = $;
    }
  }, e.unstable_scheduleCallback = function(T, A, $) {
    var z = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? z + $ : z) : $ = z, T) {
      case 1:
        var U = -1;
        break;
      case 2:
        U = 250;
        break;
      case 5:
        U = 1073741823;
        break;
      case 4:
        U = 1e4;
        break;
      default:
        U = 5e3;
    }
    return U = $ + U, T = { id: w++, callback: A, priorityLevel: T, startTime: $, expirationTime: U, sortIndex: -1 }, $ > z ? (T.sortIndex = $, t(f, T), n(u) === null && T === n(f) && (_ ? (c(I), I = -1) : _ = !0, H(E, $ - z))) : (T.sortIndex = U, t(u, T), g || v || (g = !0, F(P))), T;
  }, e.unstable_shouldYield = k, e.unstable_wrapCallback = function(T) {
    var A = h;
    return function() {
      var $ = h;
      h = A;
      try {
        return T.apply(this, arguments);
      } finally {
        h = $;
      }
    };
  };
})(Lo);
Mo.exports = Lo;
var pd = Mo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var md = y, ze = pd;
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Po = /* @__PURE__ */ new Set(), Zn = {};
function Kt(e, t) {
  yn(e, t), yn(e + "Capture", t);
}
function yn(e, t) {
  for (Zn[e] = t, e = 0; e < t.length; e++) Po.add(t[e]);
}
var ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), di = Object.prototype.hasOwnProperty, hd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, us = {}, cs = {};
function gd(e) {
  return di.call(cs, e) ? !0 : di.call(us, e) ? !1 : hd.test(e) ? cs[e] = !0 : (us[e] = !0, !1);
}
function yd(e, t, n, r) {
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
function vd(e, t, n, r) {
  if (t === null || typeof t > "u" || yd(e, t, n, r)) return !0;
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
function Ee(e, t, n, r, l, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  me[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  me[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  me[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  me[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  me[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  me[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  me[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  me[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  me[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ca = /[\-:]([a-z])/g;
function da(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ca,
    da
  );
  me[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ca, da);
  me[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ca, da);
  me[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  me[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  me[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fa(e, t, n, r) {
  var l = me.hasOwnProperty(t) ? me[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vd(t, n, l, r) && (n = null), r || l === null ? gd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mt = md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xr = Symbol.for("react.element"), Jt = Symbol.for("react.portal"), qt = Symbol.for("react.fragment"), pa = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), Do = Symbol.for("react.provider"), zo = Symbol.for("react.context"), ma = Symbol.for("react.forward_ref"), pi = Symbol.for("react.suspense"), mi = Symbol.for("react.suspense_list"), ha = Symbol.for("react.memo"), yt = Symbol.for("react.lazy"), Ro = Symbol.for("react.offscreen"), ds = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object" ? null : (e = ds && e[ds] || e["@@iterator"], typeof e == "function" ? e : null);
}
var le = Object.assign, $l;
function On(e) {
  if ($l === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    $l = t && t[1] || "";
  }
  return `
` + $l + e;
}
var Vl = !1;
function Ul(e, t) {
  if (!e || Vl) return "";
  Vl = !0;
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
`), a = l.length - 1, o = i.length - 1; 1 <= a && 0 <= o && l[a] !== i[o]; ) o--;
      for (; 1 <= a && 0 <= o; a--, o--) if (l[a] !== i[o]) {
        if (a !== 1 || o !== 1)
          do
            if (a--, o--, 0 > o || l[a] !== i[o]) {
              var u = `
` + l[a].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= a && 0 <= o);
        break;
      }
    }
  } finally {
    Vl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function wd(e) {
  switch (e.tag) {
    case 5:
      return On(e.type);
    case 16:
      return On("Lazy");
    case 13:
      return On("Suspense");
    case 19:
      return On("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ul(e.type, !1), e;
    case 11:
      return e = Ul(e.type.render, !1), e;
    case 1:
      return e = Ul(e.type, !0), e;
    default:
      return "";
  }
}
function hi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qt:
      return "Fragment";
    case Jt:
      return "Portal";
    case fi:
      return "Profiler";
    case pa:
      return "StrictMode";
    case pi:
      return "Suspense";
    case mi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case zo:
      return (e.displayName || "Context") + ".Consumer";
    case Do:
      return (e._context.displayName || "Context") + ".Provider";
    case ma:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ha:
      return t = e.displayName || null, t !== null ? t : hi(e.type) || "Memo";
    case yt:
      t = e._payload, e = e._init;
      try {
        return hi(e(t));
      } catch {
      }
  }
  return null;
}
function xd(e) {
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
      return hi(t);
    case 8:
      return t === pa ? "StrictMode" : "Mode";
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
function Lt(e) {
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
function bo(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function _d(e) {
  var t = bo(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(a) {
      r = "" + a, i.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function _r(e) {
  e._valueTracker || (e._valueTracker = _d(e));
}
function Oo(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = bo(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Xr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gi(e, t) {
  var n = t.checked;
  return le({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function fs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Lt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Fo(e, t) {
  t = t.checked, t != null && fa(e, "checked", t, !1);
}
function yi(e, t) {
  Fo(e, t);
  var n = Lt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? vi(e, t.type, n) : t.hasOwnProperty("defaultValue") && vi(e, t.type, Lt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ps(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function vi(e, t, n) {
  (t !== "number" || Xr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fn = Array.isArray;
function dn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function wi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return le({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ms(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(M(92));
      if (Fn(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Lt(n) };
}
function Ao(e, t) {
  var n = Lt(t.value), r = Lt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function hs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $o(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? $o(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sr, Vo = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vn = {
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
}, Sd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vn).forEach(function(e) {
  Sd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Vn[t] = Vn[e];
  });
});
function Uo(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vn.hasOwnProperty(e) && Vn[e] ? ("" + t).trim() : t + "px";
}
function Qo(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Uo(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var kd = le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function _i(e, t) {
  if (t) {
    if (kd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Si(e, t) {
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
var ki = null;
function ga(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ei = null, fn = null, pn = null;
function gs(e) {
  if (e = yr(e)) {
    if (typeof Ei != "function") throw Error(M(280));
    var t = e.stateNode;
    t && (t = Cl(t), Ei(e.stateNode, e.type, t));
  }
}
function Wo(e) {
  fn ? pn ? pn.push(e) : pn = [e] : fn = e;
}
function Ho() {
  if (fn) {
    var e = fn, t = pn;
    if (pn = fn = null, gs(e), t) for (e = 0; e < t.length; e++) gs(t[e]);
  }
}
function Bo(e, t) {
  return e(t);
}
function Go() {
}
var Ql = !1;
function Ko(e, t, n) {
  if (Ql) return e(t, n);
  Ql = !0;
  try {
    return Bo(e, t, n);
  } finally {
    Ql = !1, (fn !== null || pn !== null) && (Go(), Ho());
  }
}
function qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cl(n);
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
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Ci = !1;
if (ct) try {
  var Mn = {};
  Object.defineProperty(Mn, "passive", { get: function() {
    Ci = !0;
  } }), window.addEventListener("test", Mn, Mn), window.removeEventListener("test", Mn, Mn);
} catch {
  Ci = !1;
}
function Ed(e, t, n, r, l, i, a, o, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (w) {
    this.onError(w);
  }
}
var Un = !1, Zr = null, Jr = !1, Ni = null, Cd = { onError: function(e) {
  Un = !0, Zr = e;
} };
function Nd(e, t, n, r, l, i, a, o, u) {
  Un = !1, Zr = null, Ed.apply(Cd, arguments);
}
function jd(e, t, n, r, l, i, a, o, u) {
  if (Nd.apply(this, arguments), Un) {
    if (Un) {
      var f = Zr;
      Un = !1, Zr = null;
    } else throw Error(M(198));
    Jr || (Jr = !0, Ni = f);
  }
}
function Yt(e) {
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
function Yo(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ys(e) {
  if (Yt(e) !== e) throw Error(M(188));
}
function Id(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Yt(e), t === null) throw Error(M(188));
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
        if (i === n) return ys(l), e;
        if (i === r) return ys(l), t;
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var a = !1, o = l.child; o; ) {
        if (o === n) {
          a = !0, n = l, r = i;
          break;
        }
        if (o === r) {
          a = !0, r = l, n = i;
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = i.child; o; ) {
          if (o === n) {
            a = !0, n = i, r = l;
            break;
          }
          if (o === r) {
            a = !0, r = i, n = l;
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Xo(e) {
  return e = Id(e), e !== null ? Zo(e) : null;
}
function Zo(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zo(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jo = ze.unstable_scheduleCallback, vs = ze.unstable_cancelCallback, Td = ze.unstable_shouldYield, Md = ze.unstable_requestPaint, ae = ze.unstable_now, Ld = ze.unstable_getCurrentPriorityLevel, ya = ze.unstable_ImmediatePriority, qo = ze.unstable_UserBlockingPriority, qr = ze.unstable_NormalPriority, Pd = ze.unstable_LowPriority, eu = ze.unstable_IdlePriority, _l = null, rt = null;
function Dd(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function") try {
    rt.onCommitFiberRoot(_l, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Xe = Math.clz32 ? Math.clz32 : bd, zd = Math.log, Rd = Math.LN2;
function bd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zd(e) / Rd | 0) | 0;
}
var kr = 64, Er = 4194304;
function An(e) {
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
function el(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? r = An(o) : (i &= a, i !== 0 && (r = An(i)));
  } else a = n & ~l, a !== 0 ? r = An(a) : i !== 0 && (r = An(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Xe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Od(e, t) {
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
function Fd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - Xe(i), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = Od(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o;
  }
}
function ji(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function tu() {
  var e = kr;
  return kr <<= 1, !(kr & 4194240) && (kr = 64), e;
}
function Wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xe(t), e[t] = n;
}
function Ad(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Xe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function va(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var Z = 0;
function nu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ru, wa, lu, iu, au, Ii = !1, Cr = [], kt = null, Et = null, Ct = null, er = /* @__PURE__ */ new Map(), tr = /* @__PURE__ */ new Map(), wt = [], $d = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ws(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Et = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      er.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      tr.delete(t.pointerId);
  }
}
function Ln(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = yr(t), t !== null && wa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Vd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return kt = Ln(kt, e, t, n, r, l), !0;
    case "dragenter":
      return Et = Ln(Et, e, t, n, r, l), !0;
    case "mouseover":
      return Ct = Ln(Ct, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return er.set(i, Ln(er.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, tr.set(i, Ln(tr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function su(e) {
  var t = Ft(e.target);
  if (t !== null) {
    var n = Yt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Yo(n), t !== null) {
          e.blockedOn = t, au(e.priority, function() {
            lu(n);
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
function Ar(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ki = r, n.target.dispatchEvent(r), ki = null;
    } else return t = yr(n), t !== null && wa(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function xs(e, t, n) {
  Ar(e) && n.delete(t);
}
function Ud() {
  Ii = !1, kt !== null && Ar(kt) && (kt = null), Et !== null && Ar(Et) && (Et = null), Ct !== null && Ar(Ct) && (Ct = null), er.forEach(xs), tr.forEach(xs);
}
function Pn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ii || (Ii = !0, ze.unstable_scheduleCallback(ze.unstable_NormalPriority, Ud)));
}
function nr(e) {
  function t(l) {
    return Pn(l, e);
  }
  if (0 < Cr.length) {
    Pn(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (kt !== null && Pn(kt, e), Et !== null && Pn(Et, e), Ct !== null && Pn(Ct, e), er.forEach(t), tr.forEach(t), n = 0; n < wt.length; n++) r = wt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wt.length && (n = wt[0], n.blockedOn === null); ) su(n), n.blockedOn === null && wt.shift();
}
var mn = mt.ReactCurrentBatchConfig, tl = !0;
function Qd(e, t, n, r) {
  var l = Z, i = mn.transition;
  mn.transition = null;
  try {
    Z = 1, xa(e, t, n, r);
  } finally {
    Z = l, mn.transition = i;
  }
}
function Wd(e, t, n, r) {
  var l = Z, i = mn.transition;
  mn.transition = null;
  try {
    Z = 4, xa(e, t, n, r);
  } finally {
    Z = l, mn.transition = i;
  }
}
function xa(e, t, n, r) {
  if (tl) {
    var l = Ti(e, t, n, r);
    if (l === null) ei(e, t, r, nl, n), ws(e, r);
    else if (Vd(l, e, t, n, r)) r.stopPropagation();
    else if (ws(e, r), t & 4 && -1 < $d.indexOf(e)) {
      for (; l !== null; ) {
        var i = yr(l);
        if (i !== null && ru(i), i = Ti(e, t, n, r), i === null && ei(e, t, r, nl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ei(e, t, r, null, n);
  }
}
var nl = null;
function Ti(e, t, n, r) {
  if (nl = null, e = ga(r), e = Ft(e), e !== null) if (t = Yt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Yo(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return nl = e, null;
}
function ou(e) {
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
      switch (Ld()) {
        case ya:
          return 1;
        case qo:
          return 4;
        case qr:
        case Pd:
          return 16;
        case eu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null, _a = null, $r = null;
function uu() {
  if ($r) return $r;
  var e, t = _a, n = t.length, r, l = "value" in _t ? _t.value : _t.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[i - r]; r++) ;
  return $r = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Vr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Nr() {
  return !0;
}
function _s() {
  return !1;
}
function be(e) {
  function t(n, r, l, i, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Nr : _s, this.isPropagationStopped = _s, this;
  }
  return le(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Nr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Nr);
  }, persist: function() {
  }, isPersistent: Nr }), t;
}
var jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Sa = be(jn), gr = le({}, jn, { view: 0, detail: 0 }), Hd = be(gr), Hl, Bl, Dn, Sl = le({}, gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ka, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Dn && (Dn && e.type === "mousemove" ? (Hl = e.screenX - Dn.screenX, Bl = e.screenY - Dn.screenY) : Bl = Hl = 0, Dn = e), Hl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Bl;
} }), Ss = be(Sl), Bd = le({}, Sl, { dataTransfer: 0 }), Gd = be(Bd), Kd = le({}, gr, { relatedTarget: 0 }), Gl = be(Kd), Yd = le({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = be(Yd), Zd = le({}, jn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Jd = be(Zd), qd = le({}, jn, { data: 0 }), ks = be(qd), ef = {
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
}, tf = {
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
}, nf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function rf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = nf[e]) ? !!t[e] : !1;
}
function ka() {
  return rf;
}
var lf = le({}, gr, { key: function(e) {
  if (e.key) {
    var t = ef[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Vr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ka, charCode: function(e) {
  return e.type === "keypress" ? Vr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Vr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), af = be(lf), sf = le({}, Sl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Es = be(sf), of = le({}, gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ka }), uf = be(of), cf = le({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), df = be(cf), ff = le({}, Sl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), pf = be(ff), mf = [9, 13, 27, 32], Ea = ct && "CompositionEvent" in window, Qn = null;
ct && "documentMode" in document && (Qn = document.documentMode);
var hf = ct && "TextEvent" in window && !Qn, cu = ct && (!Ea || Qn && 8 < Qn && 11 >= Qn), Cs = " ", Ns = !1;
function du(e, t) {
  switch (e) {
    case "keyup":
      return mf.indexOf(t.keyCode) !== -1;
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
function fu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function gf(e, t) {
  switch (e) {
    case "compositionend":
      return fu(t);
    case "keypress":
      return t.which !== 32 ? null : (Ns = !0, Cs);
    case "textInput":
      return e = t.data, e === Cs && Ns ? null : e;
    default:
      return null;
  }
}
function yf(e, t) {
  if (en) return e === "compositionend" || !Ea && du(e, t) ? (e = uu(), $r = _a = _t = null, en = !1, e) : null;
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
      return cu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vf[e.type] : t === "textarea";
}
function pu(e, t, n, r) {
  Wo(r), t = rl(t, "onChange"), 0 < t.length && (n = new Sa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Wn = null, rr = null;
function wf(e) {
  Eu(e, 0);
}
function kl(e) {
  var t = rn(e);
  if (Oo(t)) return e;
}
function xf(e, t) {
  if (e === "change") return t;
}
var mu = !1;
if (ct) {
  var Kl;
  if (ct) {
    var Yl = "oninput" in document;
    if (!Yl) {
      var Is = document.createElement("div");
      Is.setAttribute("oninput", "return;"), Yl = typeof Is.oninput == "function";
    }
    Kl = Yl;
  } else Kl = !1;
  mu = Kl && (!document.documentMode || 9 < document.documentMode);
}
function Ts() {
  Wn && (Wn.detachEvent("onpropertychange", hu), rr = Wn = null);
}
function hu(e) {
  if (e.propertyName === "value" && kl(rr)) {
    var t = [];
    pu(t, rr, e, ga(e)), Ko(wf, t);
  }
}
function _f(e, t, n) {
  e === "focusin" ? (Ts(), Wn = t, rr = n, Wn.attachEvent("onpropertychange", hu)) : e === "focusout" && Ts();
}
function Sf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return kl(rr);
}
function kf(e, t) {
  if (e === "click") return kl(t);
}
function Ef(e, t) {
  if (e === "input" || e === "change") return kl(t);
}
function Cf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : Cf;
function lr(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!di.call(t, l) || !Je(e[l], t[l])) return !1;
  }
  return !0;
}
function Ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ls(e, t) {
  var n = Ms(e);
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
    n = Ms(n);
  }
}
function gu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function yu() {
  for (var e = window, t = Xr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xr(e.document);
  }
  return t;
}
function Ca(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Nf(e) {
  var t = yu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && gu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ca(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ls(n, i);
        var a = Ls(
          n,
          r
        );
        l && a && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var jf = ct && "documentMode" in document && 11 >= document.documentMode, tn = null, Mi = null, Hn = null, Li = !1;
function Ps(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Li || tn == null || tn !== Xr(r) || (r = tn, "selectionStart" in r && Ca(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Hn && lr(Hn, r) || (Hn = r, r = rl(Mi, "onSelect"), 0 < r.length && (t = new Sa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = tn)));
}
function jr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var nn = { animationend: jr("Animation", "AnimationEnd"), animationiteration: jr("Animation", "AnimationIteration"), animationstart: jr("Animation", "AnimationStart"), transitionend: jr("Transition", "TransitionEnd") }, Xl = {}, vu = {};
ct && (vu = document.createElement("div").style, "AnimationEvent" in window || (delete nn.animationend.animation, delete nn.animationiteration.animation, delete nn.animationstart.animation), "TransitionEvent" in window || delete nn.transitionend.transition);
function El(e) {
  if (Xl[e]) return Xl[e];
  if (!nn[e]) return e;
  var t = nn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in vu) return Xl[e] = t[n];
  return e;
}
var wu = El("animationend"), xu = El("animationiteration"), _u = El("animationstart"), Su = El("transitionend"), ku = /* @__PURE__ */ new Map(), Ds = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dt(e, t) {
  ku.set(e, t), Kt(t, [e]);
}
for (var Zl = 0; Zl < Ds.length; Zl++) {
  var Jl = Ds[Zl], If = Jl.toLowerCase(), Tf = Jl[0].toUpperCase() + Jl.slice(1);
  Dt(If, "on" + Tf);
}
Dt(wu, "onAnimationEnd");
Dt(xu, "onAnimationIteration");
Dt(_u, "onAnimationStart");
Dt("dblclick", "onDoubleClick");
Dt("focusin", "onFocus");
Dt("focusout", "onBlur");
Dt(Su, "onTransitionEnd");
yn("onMouseEnter", ["mouseout", "mouseover"]);
yn("onMouseLeave", ["mouseout", "mouseover"]);
yn("onPointerEnter", ["pointerout", "pointerover"]);
yn("onPointerLeave", ["pointerout", "pointerover"]);
Kt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Mf = new Set("cancel close invalid load scroll toggle".split(" ").concat($n));
function zs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, jd(r, t, void 0, e), e.currentTarget = null;
}
function Eu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, f = o.currentTarget;
        if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
        zs(l, o, f), i = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, f = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
        zs(l, o, f), i = u;
      }
    }
  }
  if (Jr) throw e = Ni, Jr = !1, Ni = null, e;
}
function q(e, t) {
  var n = t[bi];
  n === void 0 && (n = t[bi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Cu(t, e, 2, !1), n.add(r));
}
function ql(e, t, n) {
  var r = 0;
  t && (r |= 4), Cu(n, e, r, t);
}
var Ir = "_reactListening" + Math.random().toString(36).slice(2);
function ir(e) {
  if (!e[Ir]) {
    e[Ir] = !0, Po.forEach(function(n) {
      n !== "selectionchange" && (Mf.has(n) || ql(n, !1, e), ql(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ir] || (t[Ir] = !0, ql("selectionchange", !1, t));
  }
}
function Cu(e, t, n, r) {
  switch (ou(t)) {
    case 1:
      var l = Qd;
      break;
    case 4:
      l = Wd;
      break;
    default:
      l = xa;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ci || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ei(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var o = r.stateNode.containerInfo;
      if (o === l || o.nodeType === 8 && o.parentNode === l) break;
      if (a === 4) for (a = r.return; a !== null; ) {
        var u = a.tag;
        if ((u === 3 || u === 4) && (u = a.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        a = a.return;
      }
      for (; o !== null; ) {
        if (a = Ft(o), a === null) return;
        if (u = a.tag, u === 5 || u === 6) {
          r = i = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Ko(function() {
    var f = i, w = ga(n), x = [];
    e: {
      var h = ku.get(e);
      if (h !== void 0) {
        var v = Sa, g = e;
        switch (e) {
          case "keypress":
            if (Vr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = af;
            break;
          case "focusin":
            g = "focus", v = Gl;
            break;
          case "focusout":
            g = "blur", v = Gl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Gl;
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
            v = Ss;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Gd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = uf;
            break;
          case wu:
          case xu:
          case _u:
            v = Xd;
            break;
          case Su:
            v = df;
            break;
          case "scroll":
            v = Hd;
            break;
          case "wheel":
            v = pf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Es;
        }
        var _ = (t & 4) !== 0, j = !_ && e === "scroll", c = _ ? h !== null ? h + "Capture" : null : h;
        _ = [];
        for (var d = f, p; d !== null; ) {
          p = d;
          var E = p.stateNode;
          if (p.tag === 5 && E !== null && (p = E, c !== null && (E = qn(d, c), E != null && _.push(ar(d, E, p)))), j) break;
          d = d.return;
        }
        0 < _.length && (h = new v(h, g, null, n, w), x.push({ event: h, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== ki && (g = n.relatedTarget || n.fromElement) && (Ft(g) || g[dt])) break e;
        if ((v || h) && (h = w.window === w ? w : (h = w.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = f, g = g ? Ft(g) : null, g !== null && (j = Yt(g), g !== j || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = f), v !== g)) {
          if (_ = Ss, E = "onMouseLeave", c = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Es, E = "onPointerLeave", c = "onPointerEnter", d = "pointer"), j = v == null ? h : rn(v), p = g == null ? h : rn(g), h = new _(E, d + "leave", v, n, w), h.target = j, h.relatedTarget = p, E = null, Ft(w) === f && (_ = new _(c, d + "enter", g, n, w), _.target = p, _.relatedTarget = j, E = _), j = E, v && g) t: {
            for (_ = v, c = g, d = 0, p = _; p; p = Zt(p)) d++;
            for (p = 0, E = c; E; E = Zt(E)) p++;
            for (; 0 < d - p; ) _ = Zt(_), d--;
            for (; 0 < p - d; ) c = Zt(c), p--;
            for (; d--; ) {
              if (_ === c || c !== null && _ === c.alternate) break t;
              _ = Zt(_), c = Zt(c);
            }
            _ = null;
          }
          else _ = null;
          v !== null && Rs(x, h, v, _, !1), g !== null && j !== null && Rs(x, j, g, _, !0);
        }
      }
      e: {
        if (h = f ? rn(f) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var P = xf;
        else if (js(h)) if (mu) P = Ef;
        else {
          P = Sf;
          var R = _f;
        }
        else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = kf);
        if (P && (P = P(e, f))) {
          pu(x, P, n, w);
          break e;
        }
        R && R(e, h, f), e === "focusout" && (R = h._wrapperState) && R.controlled && h.type === "number" && vi(h, "number", h.value);
      }
      switch (R = f ? rn(f) : window, e) {
        case "focusin":
          (js(R) || R.contentEditable === "true") && (tn = R, Mi = f, Hn = null);
          break;
        case "focusout":
          Hn = Mi = tn = null;
          break;
        case "mousedown":
          Li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Li = !1, Ps(x, n, w);
          break;
        case "selectionchange":
          if (jf) break;
        case "keydown":
        case "keyup":
          Ps(x, n, w);
      }
      var C;
      if (Ea) e: {
        switch (e) {
          case "compositionstart":
            var I = "onCompositionStart";
            break e;
          case "compositionend":
            I = "onCompositionEnd";
            break e;
          case "compositionupdate":
            I = "onCompositionUpdate";
            break e;
        }
        I = void 0;
      }
      else en ? du(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I && (cu && n.locale !== "ko" && (en || I !== "onCompositionStart" ? I === "onCompositionEnd" && en && (C = uu()) : (_t = w, _a = "value" in _t ? _t.value : _t.textContent, en = !0)), R = rl(f, I), 0 < R.length && (I = new ks(I, e, null, n, w), x.push({ event: I, listeners: R }), C ? I.data = C : (C = fu(n), C !== null && (I.data = C)))), (C = hf ? gf(e, n) : yf(e, n)) && (f = rl(f, "onBeforeInput"), 0 < f.length && (w = new ks("onBeforeInput", "beforeinput", null, n, w), x.push({ event: w, listeners: f }), w.data = C));
    }
    Eu(x, t);
  });
}
function ar(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = qn(e, n), i != null && r.unshift(ar(e, i, l)), i = qn(e, t), i != null && r.push(ar(e, i, l))), e = e.return;
  }
  return r;
}
function Zt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Rs(e, t, n, r, l) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, f = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && f !== null && (o = f, l ? (u = qn(n, i), u != null && a.unshift(ar(n, u, o))) : l || (u = qn(n, i), u != null && a.push(ar(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Lf = /\r\n?/g, Pf = /\u0000|\uFFFD/g;
function bs(e) {
  return (typeof e == "string" ? e : "" + e).replace(Lf, `
`).replace(Pf, "");
}
function Tr(e, t, n) {
  if (t = bs(t), bs(e) !== t && n) throw Error(M(425));
}
function ll() {
}
var Pi = null, Di = null;
function zi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ri = typeof setTimeout == "function" ? setTimeout : void 0, Df = typeof clearTimeout == "function" ? clearTimeout : void 0, Os = typeof Promise == "function" ? Promise : void 0, zf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Os < "u" ? function(e) {
  return Os.resolve(null).then(e).catch(Rf);
} : Ri;
function Rf(e) {
  setTimeout(function() {
    throw e;
  });
}
function ti(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), nr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  nr(t);
}
function Nt(e) {
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
function Fs(e) {
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
var In = Math.random().toString(36).slice(2), nt = "__reactFiber$" + In, sr = "__reactProps$" + In, dt = "__reactContainer$" + In, bi = "__reactEvents$" + In, bf = "__reactListeners$" + In, Of = "__reactHandles$" + In;
function Ft(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[dt] || n[nt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Fs(e); e !== null; ) {
        if (n = e[nt]) return n;
        e = Fs(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function yr(e) {
  return e = e[nt] || e[dt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Cl(e) {
  return e[sr] || null;
}
var Oi = [], ln = -1;
function zt(e) {
  return { current: e };
}
function ee(e) {
  0 > ln || (e.current = Oi[ln], Oi[ln] = null, ln--);
}
function J(e, t) {
  ln++, Oi[ln] = e.current, e.current = t;
}
var Pt = {}, ve = zt(Pt), je = zt(!1), Qt = Pt;
function vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ie(e) {
  return e = e.childContextTypes, e != null;
}
function il() {
  ee(je), ee(ve);
}
function As(e, t, n) {
  if (ve.current !== Pt) throw Error(M(168));
  J(ve, t), J(je, n);
}
function Nu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(M(108, xd(e) || "Unknown", l));
  return le({}, n, r);
}
function al(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pt, Qt = ve.current, J(ve, e), J(je, je.current), !0;
}
function $s(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n ? (e = Nu(e, t, Qt), r.__reactInternalMemoizedMergedChildContext = e, ee(je), ee(ve), J(ve, e)) : ee(je), J(je, n);
}
var at = null, Nl = !1, ni = !1;
function ju(e) {
  at === null ? at = [e] : at.push(e);
}
function Ff(e) {
  Nl = !0, ju(e);
}
function Rt() {
  if (!ni && at !== null) {
    ni = !0;
    var e = 0, t = Z;
    try {
      var n = at;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      at = null, Nl = !1;
    } catch (l) {
      throw at !== null && (at = at.slice(e + 1)), Jo(ya, Rt), l;
    } finally {
      Z = t, ni = !1;
    }
  }
  return null;
}
var an = [], sn = 0, sl = null, ol = 0, Oe = [], Fe = 0, Wt = null, st = 1, ot = "";
function bt(e, t) {
  an[sn++] = ol, an[sn++] = sl, sl = e, ol = t;
}
function Iu(e, t, n) {
  Oe[Fe++] = st, Oe[Fe++] = ot, Oe[Fe++] = Wt, Wt = e;
  var r = st;
  e = ot;
  var l = 32 - Xe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Xe(t) + l;
  if (30 < i) {
    var a = l - l % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, st = 1 << 32 - Xe(t) + l | n << l | r, ot = i + e;
  } else st = 1 << i | n << l | r, ot = e;
}
function Na(e) {
  e.return !== null && (bt(e, 1), Iu(e, 1, 0));
}
function ja(e) {
  for (; e === sl; ) sl = an[--sn], an[sn] = null, ol = an[--sn], an[sn] = null;
  for (; e === Wt; ) Wt = Oe[--Fe], Oe[Fe] = null, ot = Oe[--Fe], Oe[Fe] = null, st = Oe[--Fe], Oe[Fe] = null;
}
var De = null, Pe = null, te = !1, Ke = null;
function Tu(e, t) {
  var n = Ae(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Vs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, De = e, Pe = Nt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, De = e, Pe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wt !== null ? { id: st, overflow: ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ae(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, De = e, Pe = null, !0) : !1;
    default:
      return !1;
  }
}
function Fi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ai(e) {
  if (te) {
    var t = Pe;
    if (t) {
      var n = t;
      if (!Vs(e, t)) {
        if (Fi(e)) throw Error(M(418));
        t = Nt(n.nextSibling);
        var r = De;
        t && Vs(e, t) ? Tu(r, n) : (e.flags = e.flags & -4097 | 2, te = !1, De = e);
      }
    } else {
      if (Fi(e)) throw Error(M(418));
      e.flags = e.flags & -4097 | 2, te = !1, De = e;
    }
  }
}
function Us(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  De = e;
}
function Mr(e) {
  if (e !== De) return !1;
  if (!te) return Us(e), te = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zi(e.type, e.memoizedProps)), t && (t = Pe)) {
    if (Fi(e)) throw Mu(), Error(M(418));
    for (; t; ) Tu(e, t), t = Nt(t.nextSibling);
  }
  if (Us(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Pe = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Pe = null;
    }
  } else Pe = De ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function Mu() {
  for (var e = Pe; e; ) e = Nt(e.nextSibling);
}
function wn() {
  Pe = De = null, te = !1;
}
function Ia(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
var Af = mt.ReactCurrentBatchConfig;
function zn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var o = l.refs;
        a === null ? delete o[i] : o[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Qs(e) {
  var t = e._init;
  return t(e._payload);
}
function Lu(e) {
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
    return c = Mt(c, d), c.index = 0, c.sibling = null, c;
  }
  function i(c, d, p) {
    return c.index = p, e ? (p = c.alternate, p !== null ? (p = p.index, p < d ? (c.flags |= 2, d) : p) : (c.flags |= 2, d)) : (c.flags |= 1048576, d);
  }
  function a(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function o(c, d, p, E) {
    return d === null || d.tag !== 6 ? (d = ui(p, c.mode, E), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function u(c, d, p, E) {
    var P = p.type;
    return P === qt ? w(c, d, p.props.children, E, p.key) : d !== null && (d.elementType === P || typeof P == "object" && P !== null && P.$$typeof === yt && Qs(P) === d.type) ? (E = l(d, p.props), E.ref = zn(c, d, p), E.return = c, E) : (E = Kr(p.type, p.key, p.props, null, c.mode, E), E.ref = zn(c, d, p), E.return = c, E);
  }
  function f(c, d, p, E) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = ci(p, c.mode, E), d.return = c, d) : (d = l(d, p.children || []), d.return = c, d);
  }
  function w(c, d, p, E, P) {
    return d === null || d.tag !== 7 ? (d = Ut(p, c.mode, E, P), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function x(c, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = ui("" + d, c.mode, p), d.return = c, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case xr:
          return p = Kr(d.type, d.key, d.props, null, c.mode, p), p.ref = zn(c, null, d), p.return = c, p;
        case Jt:
          return d = ci(d, c.mode, p), d.return = c, d;
        case yt:
          var E = d._init;
          return x(c, E(d._payload), p);
      }
      if (Fn(d) || Tn(d)) return d = Ut(d, c.mode, p, null), d.return = c, d;
      Lr(c, d);
    }
    return null;
  }
  function h(c, d, p, E) {
    var P = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return P !== null ? null : o(c, d, "" + p, E);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case xr:
          return p.key === P ? u(c, d, p, E) : null;
        case Jt:
          return p.key === P ? f(c, d, p, E) : null;
        case yt:
          return P = p._init, h(
            c,
            d,
            P(p._payload),
            E
          );
      }
      if (Fn(p) || Tn(p)) return P !== null ? null : w(c, d, p, E, null);
      Lr(c, p);
    }
    return null;
  }
  function v(c, d, p, E, P) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return c = c.get(p) || null, o(d, c, "" + E, P);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case xr:
          return c = c.get(E.key === null ? p : E.key) || null, u(d, c, E, P);
        case Jt:
          return c = c.get(E.key === null ? p : E.key) || null, f(d, c, E, P);
        case yt:
          var R = E._init;
          return v(c, d, p, R(E._payload), P);
      }
      if (Fn(E) || Tn(E)) return c = c.get(p) || null, w(d, c, E, P, null);
      Lr(d, E);
    }
    return null;
  }
  function g(c, d, p, E) {
    for (var P = null, R = null, C = d, I = d = 0, Q = null; C !== null && I < p.length; I++) {
      C.index > I ? (Q = C, C = null) : Q = C.sibling;
      var L = h(c, C, p[I], E);
      if (L === null) {
        C === null && (C = Q);
        break;
      }
      e && C && L.alternate === null && t(c, C), d = i(L, d, I), R === null ? P = L : R.sibling = L, R = L, C = Q;
    }
    if (I === p.length) return n(c, C), te && bt(c, I), P;
    if (C === null) {
      for (; I < p.length; I++) C = x(c, p[I], E), C !== null && (d = i(C, d, I), R === null ? P = C : R.sibling = C, R = C);
      return te && bt(c, I), P;
    }
    for (C = r(c, C); I < p.length; I++) Q = v(C, c, I, p[I], E), Q !== null && (e && Q.alternate !== null && C.delete(Q.key === null ? I : Q.key), d = i(Q, d, I), R === null ? P = Q : R.sibling = Q, R = Q);
    return e && C.forEach(function(k) {
      return t(c, k);
    }), te && bt(c, I), P;
  }
  function _(c, d, p, E) {
    var P = Tn(p);
    if (typeof P != "function") throw Error(M(150));
    if (p = P.call(p), p == null) throw Error(M(151));
    for (var R = P = null, C = d, I = d = 0, Q = null, L = p.next(); C !== null && !L.done; I++, L = p.next()) {
      C.index > I ? (Q = C, C = null) : Q = C.sibling;
      var k = h(c, C, L.value, E);
      if (k === null) {
        C === null && (C = Q);
        break;
      }
      e && C && k.alternate === null && t(c, C), d = i(k, d, I), R === null ? P = k : R.sibling = k, R = k, C = Q;
    }
    if (L.done) return n(
      c,
      C
    ), te && bt(c, I), P;
    if (C === null) {
      for (; !L.done; I++, L = p.next()) L = x(c, L.value, E), L !== null && (d = i(L, d, I), R === null ? P = L : R.sibling = L, R = L);
      return te && bt(c, I), P;
    }
    for (C = r(c, C); !L.done; I++, L = p.next()) L = v(C, c, I, L.value, E), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? I : L.key), d = i(L, d, I), R === null ? P = L : R.sibling = L, R = L);
    return e && C.forEach(function(S) {
      return t(c, S);
    }), te && bt(c, I), P;
  }
  function j(c, d, p, E) {
    if (typeof p == "object" && p !== null && p.type === qt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case xr:
          e: {
            for (var P = p.key, R = d; R !== null; ) {
              if (R.key === P) {
                if (P = p.type, P === qt) {
                  if (R.tag === 7) {
                    n(c, R.sibling), d = l(R, p.props.children), d.return = c, c = d;
                    break e;
                  }
                } else if (R.elementType === P || typeof P == "object" && P !== null && P.$$typeof === yt && Qs(P) === R.type) {
                  n(c, R.sibling), d = l(R, p.props), d.ref = zn(c, R, p), d.return = c, c = d;
                  break e;
                }
                n(c, R);
                break;
              } else t(c, R);
              R = R.sibling;
            }
            p.type === qt ? (d = Ut(p.props.children, c.mode, E, p.key), d.return = c, c = d) : (E = Kr(p.type, p.key, p.props, null, c.mode, E), E.ref = zn(c, d, p), E.return = c, c = E);
          }
          return a(c);
        case Jt:
          e: {
            for (R = p.key; d !== null; ) {
              if (d.key === R) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(c, d.sibling), d = l(d, p.children || []), d.return = c, c = d;
                break e;
              } else {
                n(c, d);
                break;
              }
              else t(c, d);
              d = d.sibling;
            }
            d = ci(p, c.mode, E), d.return = c, c = d;
          }
          return a(c);
        case yt:
          return R = p._init, j(c, d, R(p._payload), E);
      }
      if (Fn(p)) return g(c, d, p, E);
      if (Tn(p)) return _(c, d, p, E);
      Lr(c, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(c, d.sibling), d = l(d, p), d.return = c, c = d) : (n(c, d), d = ui(p, c.mode, E), d.return = c, c = d), a(c)) : n(c, d);
  }
  return j;
}
var xn = Lu(!0), Pu = Lu(!1), ul = zt(null), cl = null, on = null, Ta = null;
function Ma() {
  Ta = on = cl = null;
}
function La(e) {
  var t = ul.current;
  ee(ul), e._currentValue = t;
}
function $i(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function hn(e, t) {
  cl = e, Ta = on = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0), e.firstContext = null);
}
function Ue(e) {
  var t = e._currentValue;
  if (Ta !== e) if (e = { context: e, memoizedValue: t, next: null }, on === null) {
    if (cl === null) throw Error(M(308));
    on = e, cl.dependencies = { lanes: 0, firstContext: e };
  } else on = on.next = e;
  return t;
}
var At = null;
function Pa(e) {
  At === null ? At = [e] : At.push(e);
}
function Du(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Pa(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ft(e, r);
}
function ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function Da(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function zu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ut(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Y & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, ft(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Pa(r)) : (t.next = l.next, l.next = t), r.interleaved = t, ft(e, n);
}
function Ur(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, va(e, n);
  }
}
function Ws(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = a : i = i.next = a, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function dl(e, t, n, r) {
  var l = e.updateQueue;
  vt = !1;
  var i = l.firstBaseUpdate, a = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, f = u.next;
    u.next = null, a === null ? i = f : a.next = f, a = u;
    var w = e.alternate;
    w !== null && (w = w.updateQueue, o = w.lastBaseUpdate, o !== a && (o === null ? w.firstBaseUpdate = f : o.next = f, w.lastBaseUpdate = u));
  }
  if (i !== null) {
    var x = l.baseState;
    a = 0, w = f = u = null, o = i;
    do {
      var h = o.lane, v = o.eventTime;
      if ((r & h) === h) {
        w !== null && (w = w.next = {
          eventTime: v,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var g = e, _ = o;
          switch (h = t, v = n, _.tag) {
            case 1:
              if (g = _.payload, typeof g == "function") {
                x = g.call(v, x, h);
                break e;
              }
              x = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = _.payload, h = typeof g == "function" ? g.call(v, x, h) : g, h == null) break e;
              x = le({}, x, h);
              break e;
            case 2:
              vt = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [o] : h.push(o));
      } else v = { eventTime: v, lane: h, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, w === null ? (f = w = v, u = x) : w = w.next = v, a |= h;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        h = o, o = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (w === null && (u = x), l.baseState = u, l.firstBaseUpdate = f, l.lastBaseUpdate = w, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Bt |= a, e.lanes = a, e.memoizedState = x;
  }
}
function Hs(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(M(191, l));
      l.call(r);
    }
  }
}
var vr = {}, lt = zt(vr), or = zt(vr), ur = zt(vr);
function $t(e) {
  if (e === vr) throw Error(M(174));
  return e;
}
function za(e, t) {
  switch (J(ur, t), J(or, e), J(lt, vr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xi(t, e);
  }
  ee(lt), J(lt, t);
}
function _n() {
  ee(lt), ee(or), ee(ur);
}
function Ru(e) {
  $t(ur.current);
  var t = $t(lt.current), n = xi(t, e.type);
  t !== n && (J(or, e), J(lt, n));
}
function Ra(e) {
  or.current === e && (ee(lt), ee(or));
}
var ne = zt(0);
function fl(e) {
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
var ri = [];
function ba() {
  for (var e = 0; e < ri.length; e++) ri[e]._workInProgressVersionPrimary = null;
  ri.length = 0;
}
var Qr = mt.ReactCurrentDispatcher, li = mt.ReactCurrentBatchConfig, Ht = 0, re = null, oe = null, ce = null, pl = !1, Bn = !1, cr = 0, $f = 0;
function he() {
  throw Error(M(321));
}
function Oa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Je(e[n], t[n])) return !1;
  return !0;
}
function Fa(e, t, n, r, l, i) {
  if (Ht = i, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qr.current = e === null || e.memoizedState === null ? Wf : Hf, e = n(r, l), Bn) {
    i = 0;
    do {
      if (Bn = !1, cr = 0, 25 <= i) throw Error(M(301));
      i += 1, ce = oe = null, t.updateQueue = null, Qr.current = Bf, e = n(r, l);
    } while (Bn);
  }
  if (Qr.current = ml, t = oe !== null && oe.next !== null, Ht = 0, ce = oe = re = null, pl = !1, t) throw Error(M(300));
  return e;
}
function Aa() {
  var e = cr !== 0;
  return cr = 0, e;
}
function tt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ce === null ? re.memoizedState = ce = e : ce = ce.next = e, ce;
}
function Qe() {
  if (oe === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = ce === null ? re.memoizedState : ce.next;
  if (t !== null) ce = t, oe = e;
  else {
    if (e === null) throw Error(M(310));
    oe = e, e = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, ce === null ? re.memoizedState = ce = e : ce = ce.next = e;
  }
  return ce;
}
function dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ii(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = oe, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var a = l.next;
      l.next = i.next, i.next = a;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var o = a = null, u = null, f = i;
    do {
      var w = f.lane;
      if ((Ht & w) === w) u !== null && (u = u.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var x = {
          lane: w,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        u === null ? (o = u = x, a = r) : u = u.next = x, re.lanes |= w, Bt |= w;
      }
      f = f.next;
    } while (f !== null && f !== i);
    u === null ? a = r : u.next = o, Je(r, t.memoizedState) || (Ne = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, re.lanes |= i, Bt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ai(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = l = l.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== l);
    Je(i, t.memoizedState) || (Ne = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function bu() {
}
function Ou(e, t) {
  var n = re, r = Qe(), l = t(), i = !Je(r.memoizedState, l);
  if (i && (r.memoizedState = l, Ne = !0), r = r.queue, $a($u.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ce !== null && ce.memoizedState.tag & 1) {
    if (n.flags |= 2048, fr(9, Au.bind(null, n, r, l, t), void 0, null), de === null) throw Error(M(349));
    Ht & 30 || Fu(n, t, l);
  }
  return l;
}
function Fu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Au(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Vu(t) && Uu(e);
}
function $u(e, t, n) {
  return n(function() {
    Vu(t) && Uu(e);
  });
}
function Vu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function Uu(e) {
  var t = ft(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function Bs(e) {
  var t = tt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: dr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Qf.bind(null, re, e), [t.memoizedState, e];
}
function fr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Qu() {
  return Qe().memoizedState;
}
function Wr(e, t, n, r) {
  var l = tt();
  re.flags |= e, l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r);
}
function jl(e, t, n, r) {
  var l = Qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (oe !== null) {
    var a = oe.memoizedState;
    if (i = a.destroy, r !== null && Oa(r, a.deps)) {
      l.memoizedState = fr(t, n, i, r);
      return;
    }
  }
  re.flags |= e, l.memoizedState = fr(1 | t, n, i, r);
}
function Gs(e, t) {
  return Wr(8390656, 8, e, t);
}
function $a(e, t) {
  return jl(2048, 8, e, t);
}
function Wu(e, t) {
  return jl(4, 2, e, t);
}
function Hu(e, t) {
  return jl(4, 4, e, t);
}
function Bu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Gu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, jl(4, 4, Bu.bind(null, t, e), n);
}
function Va() {
}
function Ku(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Yu(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Xu(e, t, n) {
  return Ht & 21 ? (Je(n, t) || (n = tu(), re.lanes |= n, Bt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ne = !0), e.memoizedState = n);
}
function Vf(e, t) {
  var n = Z;
  Z = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = li.transition;
  li.transition = {};
  try {
    e(!1), t();
  } finally {
    Z = n, li.transition = r;
  }
}
function Zu() {
  return Qe().memoizedState;
}
function Uf(e, t, n) {
  var r = Tt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ju(e)) qu(t, n);
  else if (n = Du(e, t, n, r), n !== null) {
    var l = _e();
    Ze(n, e, r, l), ec(n, t, r);
  }
}
function Qf(e, t, n) {
  var r = Tt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ju(e)) qu(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var a = t.lastRenderedState, o = i(a, n);
      if (l.hasEagerState = !0, l.eagerState = o, Je(o, a)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Pa(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Du(e, t, l, r), n !== null && (l = _e(), Ze(n, e, r, l), ec(n, t, r));
  }
}
function Ju(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function qu(e, t) {
  Bn = pl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ec(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, va(e, n);
  }
}
var ml = { readContext: Ue, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, Wf = { readContext: Ue, useCallback: function(e, t) {
  return tt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ue, useEffect: Gs, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wr(
    4194308,
    4,
    Bu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Wr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Wr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = tt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = tt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Uf.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = tt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Bs, useDebugValue: Va, useDeferredValue: function(e) {
  return tt().memoizedState = e;
}, useTransition: function() {
  var e = Bs(!1), t = e[0];
  return e = Vf.bind(null, e[1]), tt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = re, l = tt();
  if (te) {
    if (n === void 0) throw Error(M(407));
    n = n();
  } else {
    if (n = t(), de === null) throw Error(M(349));
    Ht & 30 || Fu(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Gs($u.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, fr(9, Au.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = tt(), t = de.identifierPrefix;
  if (te) {
    var n = ot, r = st;
    n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = cr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = $f++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Hf = {
  readContext: Ue,
  useCallback: Ku,
  useContext: Ue,
  useEffect: $a,
  useImperativeHandle: Gu,
  useInsertionEffect: Wu,
  useLayoutEffect: Hu,
  useMemo: Yu,
  useReducer: ii,
  useRef: Qu,
  useState: function() {
    return ii(dr);
  },
  useDebugValue: Va,
  useDeferredValue: function(e) {
    var t = Qe();
    return Xu(t, oe.memoizedState, e);
  },
  useTransition: function() {
    var e = ii(dr)[0], t = Qe().memoizedState;
    return [e, t];
  },
  useMutableSource: bu,
  useSyncExternalStore: Ou,
  useId: Zu,
  unstable_isNewReconciler: !1
}, Bf = { readContext: Ue, useCallback: Ku, useContext: Ue, useEffect: $a, useImperativeHandle: Gu, useInsertionEffect: Wu, useLayoutEffect: Hu, useMemo: Yu, useReducer: ai, useRef: Qu, useState: function() {
  return ai(dr);
}, useDebugValue: Va, useDeferredValue: function(e) {
  var t = Qe();
  return oe === null ? t.memoizedState = e : Xu(t, oe.memoizedState, e);
}, useTransition: function() {
  var e = ai(dr)[0], t = Qe().memoizedState;
  return [e, t];
}, useMutableSource: bu, useSyncExternalStore: Ou, useId: Zu, unstable_isNewReconciler: !1 };
function Be(e, t) {
  if (e && e.defaultProps) {
    t = le({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Vi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : le({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Il = { isMounted: function(e) {
  return (e = e._reactInternals) ? Yt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), l = Tt(e), i = ut(r, l);
  i.payload = t, n != null && (i.callback = n), t = jt(e, i, l), t !== null && (Ze(t, e, l, r), Ur(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), l = Tt(e), i = ut(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = jt(e, i, l), t !== null && (Ze(t, e, l, r), Ur(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = _e(), r = Tt(e), l = ut(n, r);
  l.tag = 2, t != null && (l.callback = t), t = jt(e, l, r), t !== null && (Ze(t, e, r, n), Ur(t, e, r));
} };
function Ks(e, t, n, r, l, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !lr(n, r) || !lr(l, i) : !0;
}
function tc(e, t, n) {
  var r = !1, l = Pt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ue(i) : (l = Ie(t) ? Qt : ve.current, r = t.contextTypes, i = (r = r != null) ? vn(e, l) : Pt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Il, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ys(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Il.enqueueReplaceState(t, t.state, null);
}
function Ui(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Da(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ue(i) : (i = Ie(t) ? Qt : ve.current, l.context = vn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Vi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Il.enqueueReplaceState(l, l.state, null), dl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sn(e, t) {
  try {
    var n = "", r = t;
    do
      n += wd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Gf = typeof WeakMap == "function" ? WeakMap : Map;
function nc(e, t, n) {
  n = ut(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    gl || (gl = !0, qi = r), Qi(e, t);
  }, n;
}
function rc(e, t, n) {
  n = ut(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Qi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Qi(e, t), typeof r != "function" && (It === null ? It = /* @__PURE__ */ new Set([this]) : It.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function Xs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = sp.bind(null, e, t, n), t.then(e, e));
}
function Zs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Js(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ut(-1, 1), t.tag = 2, jt(n, t, 1))), n.lanes |= 1), e);
}
var Kf = mt.ReactCurrentOwner, Ne = !1;
function xe(e, t, n, r) {
  t.child = e === null ? Pu(t, null, n, r) : xn(t, e.child, n, r);
}
function qs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return hn(t, l), r = Fa(e, t, n, r, i, l), n = Aa(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, pt(e, t, l)) : (te && n && Na(t), t.flags |= 1, xe(e, t, r, l), t.child);
}
function eo(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Ya(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, lc(e, t, i, r, l)) : (e = Kr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : lr, n(a, r) && e.ref === t.ref) return pt(e, t, l);
  }
  return t.flags |= 1, e = Mt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function lc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (lr(i, r) && e.ref === t.ref) if (Ne = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Ne = !0);
    else return t.lanes = e.lanes, pt(e, t, l);
  }
  return Wi(e, t, n, r, l);
}
function ic(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, J(cn, Me), Me |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, J(cn, Me), Me |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, J(cn, Me), Me |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, J(cn, Me), Me |= r;
  return xe(e, t, l, n), t.child;
}
function ac(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Wi(e, t, n, r, l) {
  var i = Ie(n) ? Qt : ve.current;
  return i = vn(t, i), hn(t, l), n = Fa(e, t, n, r, i, l), r = Aa(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, pt(e, t, l)) : (te && r && Na(t), t.flags |= 1, xe(e, t, n, l), t.child);
}
function to(e, t, n, r, l) {
  if (Ie(n)) {
    var i = !0;
    al(t);
  } else i = !1;
  if (hn(t, l), t.stateNode === null) Hr(e, t), tc(t, n, r), Ui(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Ue(f) : (f = Ie(n) ? Qt : ve.current, f = vn(t, f));
    var w = n.getDerivedStateFromProps, x = typeof w == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    x || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== f) && Ys(t, a, r, f), vt = !1;
    var h = t.memoizedState;
    a.state = h, dl(t, r, a, l), u = t.memoizedState, o !== r || h !== u || je.current || vt ? (typeof w == "function" && (Vi(t, n, w, r), u = t.memoizedState), (o = vt || Ks(t, n, o, r, h, u, f)) ? (x || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = f, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, zu(e, t), o = t.memoizedProps, f = t.type === t.elementType ? o : Be(t.type, o), a.props = f, x = t.pendingProps, h = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ue(u) : (u = Ie(n) ? Qt : ve.current, u = vn(t, u));
    var v = n.getDerivedStateFromProps;
    (w = typeof v == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== x || h !== u) && Ys(t, a, r, u), vt = !1, h = t.memoizedState, a.state = h, dl(t, r, a, l);
    var g = t.memoizedState;
    o !== x || h !== g || je.current || vt ? (typeof v == "function" && (Vi(t, n, v, r), g = t.memoizedState), (f = vt || Ks(t, n, f, r, h, g, u) || !1) ? (w || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), a.props = r, a.state = g, a.context = u, r = f) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Hi(e, t, n, r, i, l);
}
function Hi(e, t, n, r, l, i) {
  ac(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && $s(t, n, !1), pt(e, t, i);
  r = t.stateNode, Kf.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = xn(t, e.child, null, i), t.child = xn(t, null, o, i)) : xe(e, t, o, i), t.memoizedState = r.state, l && $s(t, n, !0), t.child;
}
function sc(e) {
  var t = e.stateNode;
  t.pendingContext ? As(e, t.pendingContext, t.pendingContext !== t.context) : t.context && As(e, t.context, !1), za(e, t.containerInfo);
}
function no(e, t, n, r, l) {
  return wn(), Ia(l), t.flags |= 256, xe(e, t, n, r), t.child;
}
var Bi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function oc(e, t, n) {
  var r = t.pendingProps, l = ne.current, i = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), J(ne, l & 1), e === null)
    return Ai(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Ll(a, r, 0, null), e = Ut(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Gi(n), t.memoizedState = Bi, e) : Ua(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Yf(e, t, a, r, o, l, n);
  if (i) {
    i = r.fallback, a = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Mt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = Mt(o, i) : (i = Ut(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? Gi(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = Bi, r;
  }
  return i = e.child, e = i.sibling, r = Mt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ua(e, t) {
  return t = Ll({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Pr(e, t, n, r) {
  return r !== null && Ia(r), xn(t, e.child, null, n), e = Ua(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Yf(e, t, n, r, l, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = si(Error(M(422))), Pr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Ll({ mode: "visible", children: r.children }, l, 0, null), i = Ut(i, l, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && xn(t, e.child, null, a), t.child.memoizedState = Gi(a), t.memoizedState = Bi, i);
  if (!(t.mode & 1)) return Pr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, i = Error(M(419)), r = si(i, r, void 0), Pr(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, Ne || o) {
    if (r = de, r !== null) {
      switch (a & -a) {
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, ft(e, l), Ze(r, e, l, -1));
    }
    return Ka(), r = si(Error(M(421))), Pr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = op.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Pe = Nt(l.nextSibling), De = t, te = !0, Ke = null, e !== null && (Oe[Fe++] = st, Oe[Fe++] = ot, Oe[Fe++] = Wt, st = e.id, ot = e.overflow, Wt = t), t = Ua(t, r.children), t.flags |= 4096, t);
}
function ro(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), $i(e.return, t, n);
}
function oi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function uc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (xe(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ro(e, n, t);
      else if (e.tag === 19) ro(e, n, t);
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
  if (J(ne, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && fl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), oi(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && fl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      oi(t, !0, n, null, i);
      break;
    case "together":
      oi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Hr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function pt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Bt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, n = Mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Xf(e, t, n) {
  switch (t.tag) {
    case 3:
      sc(t), wn();
      break;
    case 5:
      Ru(t);
      break;
    case 1:
      Ie(t.type) && al(t);
      break;
    case 4:
      za(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      J(ul, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (J(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? oc(e, t, n) : (J(ne, ne.current & 1), e = pt(e, t, n), e !== null ? e.sibling : null);
      J(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return uc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), J(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ic(e, t, n);
  }
  return pt(e, t, n);
}
var cc, Ki, dc, fc;
cc = function(e, t) {
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
Ki = function() {
};
dc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, $t(lt.current);
    var i = null;
    switch (n) {
      case "input":
        l = gi(e, l), r = gi(e, r), i = [];
        break;
      case "select":
        l = le({}, l, { value: void 0 }), r = le({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = wi(e, l), r = wi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ll);
    }
    _i(n, r);
    var a;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var o = l[f];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Zn.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (o = l != null ? l[f] : void 0, r.hasOwnProperty(f) && u !== o && (u != null || o != null)) if (f === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in u) u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = u;
      else f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (i = i || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Zn.hasOwnProperty(f) ? (u != null && f === "onScroll" && q("scroll", e), i || o === u || (i = [])) : (i = i || []).push(f, u));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
fc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!te) switch (e.tailMode) {
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
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Zf(e, t, n) {
  var r = t.pendingProps;
  switch (ja(t), t.tag) {
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
      return ge(t), null;
    case 1:
      return Ie(t.type) && il(), ge(t), null;
    case 3:
      return r = t.stateNode, _n(), ee(je), ee(ve), ba(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Mr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ke !== null && (na(Ke), Ke = null))), Ki(e, t), ge(t), null;
    case 5:
      Ra(t);
      var l = $t(ur.current);
      if (n = t.type, e !== null && t.stateNode != null) dc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return ge(t), null;
        }
        if (e = $t(lt.current), Mr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[nt] = t, r[sr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < $n.length; l++) q($n[l], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q(
                "error",
                r
              ), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              fs(r, i), q("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, q("invalid", r);
              break;
            case "textarea":
              ms(r, i), q("invalid", r);
          }
          _i(n, i), l = null;
          for (var a in i) if (i.hasOwnProperty(a)) {
            var o = i[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && Tr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && Tr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : Zn.hasOwnProperty(a) && o != null && a === "onScroll" && q("scroll", r);
          }
          switch (n) {
            case "input":
              _r(r), ps(r, i, !0);
              break;
            case "textarea":
              _r(r), hs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ll);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = $o(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[nt] = t, e[sr] = r, cc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Si(n, r), n) {
              case "dialog":
                q("cancel", e), q("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < $n.length; l++) q($n[l], e);
                l = r;
                break;
              case "source":
                q("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                q(
                  "error",
                  e
                ), q("load", e), l = r;
                break;
              case "details":
                q("toggle", e), l = r;
                break;
              case "input":
                fs(e, r), l = gi(e, r), q("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = le({}, r, { value: void 0 }), q("invalid", e);
                break;
              case "textarea":
                ms(e, r), l = wi(e, r), q("invalid", e);
                break;
              default:
                l = r;
            }
            _i(n, l), o = l;
            for (i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "style" ? Qo(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Vo(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Jn(e, u) : typeof u == "number" && Jn(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Zn.hasOwnProperty(i) ? u != null && i === "onScroll" && q("scroll", e) : u != null && fa(e, i, u, a));
            }
            switch (n) {
              case "input":
                _r(e), ps(e, r, !1);
                break;
              case "textarea":
                _r(e), hs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? dn(e, !!r.multiple, i, !1) : r.defaultValue != null && dn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ll);
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
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) fc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (n = $t(ur.current), $t(lt.current), Mr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[nt] = t, (i = r.nodeValue !== n) && (e = De, e !== null)) switch (e.tag) {
            case 3:
              Tr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Tr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[nt] = t, t.stateNode = r;
      }
      return ge(t), null;
    case 13:
      if (ee(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (te && Pe !== null && t.mode & 1 && !(t.flags & 128)) Mu(), wn(), t.flags |= 98560, i = !1;
        else if (i = Mr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(M(317));
            i[nt] = t;
          } else wn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ge(t), i = !1;
        } else Ke !== null && (na(Ke), Ke = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? ue === 0 && (ue = 3) : Ka())), t.updateQueue !== null && (t.flags |= 4), ge(t), null);
    case 4:
      return _n(), Ki(e, t), e === null && ir(t.stateNode.containerInfo), ge(t), null;
    case 10:
      return La(t.type._context), ge(t), null;
    case 17:
      return Ie(t.type) && il(), ge(t), null;
    case 19:
      if (ee(ne), i = t.memoizedState, i === null) return ge(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null) if (r) Rn(i, !1);
      else {
        if (ue !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = fl(e), a !== null) {
            for (t.flags |= 128, Rn(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return J(ne, ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ae() > kn && (t.flags |= 128, r = !0, Rn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = fl(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Rn(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !te) return ge(t), null;
        } else 2 * ae() - i.renderingStartTime > kn && n !== 1073741824 && (t.flags |= 128, r = !0, Rn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ae(), t.sibling = null, n = ne.current, J(ne, r ? n & 1 | 2 : n & 1), t) : (ge(t), null);
    case 22:
    case 23:
      return Ga(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Me & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function Jf(e, t) {
  switch (ja(t), t.tag) {
    case 1:
      return Ie(t.type) && il(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return _n(), ee(je), ee(ve), ba(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ra(t), null;
    case 13:
      if (ee(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(M(340));
        wn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ee(ne), null;
    case 4:
      return _n(), null;
    case 10:
      return La(t.type._context), null;
    case 22:
    case 23:
      return Ga(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dr = !1, ye = !1, qf = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function un(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ie(e, t, r);
  }
  else n.current = null;
}
function Yi(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var lo = !1;
function ep(e, t) {
  if (Pi = tl, e = yu(), Ca(e)) {
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
        var a = 0, o = -1, u = -1, f = 0, w = 0, x = e, h = null;
        t: for (; ; ) {
          for (var v; x !== n || l !== 0 && x.nodeType !== 3 || (o = a + l), x !== i || r !== 0 && x.nodeType !== 3 || (u = a + r), x.nodeType === 3 && (a += x.nodeValue.length), (v = x.firstChild) !== null; )
            h = x, x = v;
          for (; ; ) {
            if (x === e) break t;
            if (h === n && ++f === l && (o = a), h === i && ++w === r && (u = a), (v = x.nextSibling) !== null) break;
            x = h, h = x.parentNode;
          }
          x = v;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Di = { focusedElem: e, selectionRange: n }, tl = !1, O = t; O !== null; ) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
  else for (; O !== null; ) {
    t = O;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var _ = g.memoizedProps, j = g.memoizedState, c = t.stateNode, d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : Be(t.type, _), j);
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
          throw Error(M(163));
      }
    } catch (E) {
      ie(t, t.return, E);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, O = e;
      break;
    }
    O = t.return;
  }
  return g = lo, lo = !1, g;
}
function Gn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Yi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Tl(e, t) {
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
function Xi(e) {
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
function pc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, pc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nt], delete t[sr], delete t[bi], delete t[bf], delete t[Of])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function mc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function io(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || mc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ll));
  else if (r !== 4 && (e = e.child, e !== null)) for (Zi(e, t, n), e = e.sibling; e !== null; ) Zi(e, t, n), e = e.sibling;
}
function Ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ji(e, t, n), e = e.sibling; e !== null; ) Ji(e, t, n), e = e.sibling;
}
var fe = null, Ge = !1;
function gt(e, t, n) {
  for (n = n.child; n !== null; ) hc(e, t, n), n = n.sibling;
}
function hc(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == "function") try {
    rt.onCommitFiberUnmount(_l, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ye || un(n, t);
    case 6:
      var r = fe, l = Ge;
      fe = null, gt(e, t, n), fe = r, Ge = l, fe !== null && (Ge ? (e = fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null && (Ge ? (e = fe, n = n.stateNode, e.nodeType === 8 ? ti(e.parentNode, n) : e.nodeType === 1 && ti(e, n), nr(e)) : ti(fe, n.stateNode));
      break;
    case 4:
      r = fe, l = Ge, fe = n.stateNode.containerInfo, Ge = !0, gt(e, t, n), fe = r, Ge = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Yi(n, t, a), l = l.next;
        } while (l !== r);
      }
      gt(e, t, n);
      break;
    case 1:
      if (!ye && (un(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        ie(n, t, o);
      }
      gt(e, t, n);
      break;
    case 21:
      gt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, gt(e, t, n), ye = r) : gt(e, t, n);
      break;
    default:
      gt(e, t, n);
  }
}
function ao(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qf()), t.forEach(function(r) {
      var l = up.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            fe = o.stateNode, Ge = !1;
            break e;
          case 3:
            fe = o.stateNode.containerInfo, Ge = !0;
            break e;
          case 4:
            fe = o.stateNode.containerInfo, Ge = !0;
            break e;
        }
        o = o.return;
      }
      if (fe === null) throw Error(M(160));
      hc(i, a, l), fe = null, Ge = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (f) {
      ie(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) gc(t, e), t = t.sibling;
}
function gc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (We(t, e), et(e), r & 4) {
        try {
          Gn(3, e, e.return), Tl(3, e);
        } catch (_) {
          ie(e, e.return, _);
        }
        try {
          Gn(5, e, e.return);
        } catch (_) {
          ie(e, e.return, _);
        }
      }
      break;
    case 1:
      We(t, e), et(e), r & 512 && n !== null && un(n, n.return);
      break;
    case 5:
      if (We(t, e), et(e), r & 512 && n !== null && un(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Jn(l, "");
        } catch (_) {
          ie(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && i.type === "radio" && i.name != null && Fo(l, i), Si(o, a);
          var f = Si(o, i);
          for (a = 0; a < u.length; a += 2) {
            var w = u[a], x = u[a + 1];
            w === "style" ? Qo(l, x) : w === "dangerouslySetInnerHTML" ? Vo(l, x) : w === "children" ? Jn(l, x) : fa(l, w, x, f);
          }
          switch (o) {
            case "input":
              yi(l, i);
              break;
            case "textarea":
              Ao(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? dn(l, !!i.multiple, v, !1) : h !== !!i.multiple && (i.defaultValue != null ? dn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : dn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[sr] = i;
        } catch (_) {
          ie(e, e.return, _);
        }
      }
      break;
    case 6:
      if (We(t, e), et(e), r & 4) {
        if (e.stateNode === null) throw Error(M(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (_) {
          ie(e, e.return, _);
        }
      }
      break;
    case 3:
      if (We(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        nr(t.containerInfo);
      } catch (_) {
        ie(e, e.return, _);
      }
      break;
    case 4:
      We(t, e), et(e);
      break;
    case 13:
      We(t, e), et(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Ha = ae())), r & 4 && ao(e);
      break;
    case 22:
      if (w = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (f = ye) || w, We(t, e), ye = f) : We(t, e), et(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !w && e.mode & 1) for (O = e, w = e.child; w !== null; ) {
          for (x = O = w; O !== null; ) {
            switch (h = O, v = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Gn(4, h, h.return);
                break;
              case 1:
                un(h, h.return);
                var g = h.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (_) {
                    ie(r, n, _);
                  }
                }
                break;
              case 5:
                un(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  oo(x);
                  continue;
                }
            }
            v !== null ? (v.return = h, O = v) : oo(x);
          }
          w = w.sibling;
        }
        e: for (w = null, x = e; ; ) {
          if (x.tag === 5) {
            if (w === null) {
              w = x;
              try {
                l = x.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = x.stateNode, u = x.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = Uo("display", a));
              } catch (_) {
                ie(e, e.return, _);
              }
            }
          } else if (x.tag === 6) {
            if (w === null) try {
              x.stateNode.nodeValue = f ? "" : x.memoizedProps;
            } catch (_) {
              ie(e, e.return, _);
            }
          } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
            x.child.return = x, x = x.child;
            continue;
          }
          if (x === e) break e;
          for (; x.sibling === null; ) {
            if (x.return === null || x.return === e) break e;
            w === x && (w = null), x = x.return;
          }
          w === x && (w = null), x.sibling.return = x.return, x = x.sibling;
        }
      }
      break;
    case 19:
      We(t, e), et(e), r & 4 && ao(e);
      break;
    case 21:
      break;
    default:
      We(
        t,
        e
      ), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Jn(l, ""), r.flags &= -33);
          var i = io(e);
          Ji(e, i, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = io(e);
          Zi(e, o, a);
          break;
        default:
          throw Error(M(161));
      }
    } catch (u) {
      ie(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tp(e, t, n) {
  O = e, yc(e);
}
function yc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O, i = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Dr;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || ye;
        o = Dr;
        var f = ye;
        if (Dr = a, (ye = u) && !f) for (O = l; O !== null; ) a = O, u = a.child, a.tag === 22 && a.memoizedState !== null ? uo(l) : u !== null ? (u.return = a, O = u) : uo(l);
        for (; i !== null; ) O = i, yc(i), i = i.sibling;
        O = l, Dr = o, ye = f;
      }
      so(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, O = i) : so(e);
  }
}
function so(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ye || Tl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ye) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Be(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Hs(t, i, r);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Hs(t, a, n);
            }
            break;
          case 5:
            var o = t.stateNode;
            if (n === null && t.flags & 4) {
              n = o;
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
                var w = f.memoizedState;
                if (w !== null) {
                  var x = w.dehydrated;
                  x !== null && nr(x);
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
            throw Error(M(163));
        }
        ye || t.flags & 512 && Xi(t);
      } catch (h) {
        ie(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function oo(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, O = n;
      break;
    }
    O = t.return;
  }
}
function uo(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Tl(4, t);
          } catch (u) {
            ie(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ie(t, l, u);
            }
          }
          var i = t.return;
          try {
            Xi(t);
          } catch (u) {
            ie(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Xi(t);
          } catch (u) {
            ie(t, a, u);
          }
      }
    } catch (u) {
      ie(t, t.return, u);
    }
    if (t === e) {
      O = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, O = o;
      break;
    }
    O = t.return;
  }
}
var np = Math.ceil, hl = mt.ReactCurrentDispatcher, Qa = mt.ReactCurrentOwner, Ve = mt.ReactCurrentBatchConfig, Y = 0, de = null, se = null, pe = 0, Me = 0, cn = zt(0), ue = 0, pr = null, Bt = 0, Ml = 0, Wa = 0, Kn = null, Ce = null, Ha = 0, kn = 1 / 0, it = null, gl = !1, qi = null, It = null, zr = !1, St = null, yl = 0, Yn = 0, ea = null, Br = -1, Gr = 0;
function _e() {
  return Y & 6 ? ae() : Br !== -1 ? Br : Br = ae();
}
function Tt(e) {
  return e.mode & 1 ? Y & 2 && pe !== 0 ? pe & -pe : Af.transition !== null ? (Gr === 0 && (Gr = tu()), Gr) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ou(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < Yn) throw Yn = 0, ea = null, Error(M(185));
  hr(e, n, r), (!(Y & 2) || e !== de) && (e === de && (!(Y & 2) && (Ml |= n), ue === 4 && xt(e, pe)), Te(e, r), n === 1 && Y === 0 && !(t.mode & 1) && (kn = ae() + 500, Nl && Rt()));
}
function Te(e, t) {
  var n = e.callbackNode;
  Fd(e, t);
  var r = el(e, e === de ? pe : 0);
  if (r === 0) n !== null && vs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && vs(n), t === 1) e.tag === 0 ? Ff(co.bind(null, e)) : ju(co.bind(null, e)), zf(function() {
      !(Y & 6) && Rt();
    }), n = null;
    else {
      switch (nu(r)) {
        case 1:
          n = ya;
          break;
        case 4:
          n = qo;
          break;
        case 16:
          n = qr;
          break;
        case 536870912:
          n = eu;
          break;
        default:
          n = qr;
      }
      n = Cc(n, vc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function vc(e, t) {
  if (Br = -1, Gr = 0, Y & 6) throw Error(M(327));
  var n = e.callbackNode;
  if (gn() && e.callbackNode !== n) return null;
  var r = el(e, e === de ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vl(e, r);
  else {
    t = r;
    var l = Y;
    Y |= 2;
    var i = xc();
    (de !== e || pe !== t) && (it = null, kn = ae() + 500, Vt(e, t));
    do
      try {
        ip();
        break;
      } catch (o) {
        wc(e, o);
      }
    while (!0);
    Ma(), hl.current = i, Y = l, se !== null ? t = 0 : (de = null, pe = 0, t = ue);
  }
  if (t !== 0) {
    if (t === 2 && (l = ji(e), l !== 0 && (r = l, t = ta(e, l))), t === 1) throw n = pr, Vt(e, 0), xt(e, r), Te(e, ae()), n;
    if (t === 6) xt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !rp(l) && (t = vl(e, r), t === 2 && (i = ji(e), i !== 0 && (r = i, t = ta(e, i))), t === 1)) throw n = pr, Vt(e, 0), xt(e, r), Te(e, ae()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          Ot(e, Ce, it);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = Ha + 500 - ae(), 10 < t)) {
            if (el(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              _e(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ri(Ot.bind(null, e, Ce, it), t);
            break;
          }
          Ot(e, Ce, it);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - Xe(r);
            i = 1 << a, a = t[a], a > l && (l = a), r &= ~i;
          }
          if (r = l, r = ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * np(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ri(Ot.bind(null, e, Ce, it), r);
            break;
          }
          Ot(e, Ce, it);
          break;
        case 5:
          Ot(e, Ce, it);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Te(e, ae()), e.callbackNode === n ? vc.bind(null, e) : null;
}
function ta(e, t) {
  var n = Kn;
  return e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256), e = vl(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && na(t)), e;
}
function na(e) {
  Ce === null ? Ce = e : Ce.push.apply(Ce, e);
}
function rp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Je(i(), l)) return !1;
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
function xt(e, t) {
  for (t &= ~Wa, t &= ~Ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function co(e) {
  if (Y & 6) throw Error(M(327));
  gn();
  var t = el(e, 0);
  if (!(t & 1)) return Te(e, ae()), null;
  var n = vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ji(e);
    r !== 0 && (t = r, n = ta(e, r));
  }
  if (n === 1) throw n = pr, Vt(e, 0), xt(e, t), Te(e, ae()), n;
  if (n === 6) throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ot(e, Ce, it), Te(e, ae()), null;
}
function Ba(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    Y = n, Y === 0 && (kn = ae() + 500, Nl && Rt());
  }
}
function Gt(e) {
  St !== null && St.tag === 0 && !(Y & 6) && gn();
  var t = Y;
  Y |= 1;
  var n = Ve.transition, r = Z;
  try {
    if (Ve.transition = null, Z = 1, e) return e();
  } finally {
    Z = r, Ve.transition = n, Y = t, !(Y & 6) && Rt();
  }
}
function Ga() {
  Me = cn.current, ee(cn);
}
function Vt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Df(n)), se !== null) for (n = se.return; n !== null; ) {
    var r = n;
    switch (ja(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && il();
        break;
      case 3:
        _n(), ee(je), ee(ve), ba();
        break;
      case 5:
        Ra(r);
        break;
      case 4:
        _n();
        break;
      case 13:
        ee(ne);
        break;
      case 19:
        ee(ne);
        break;
      case 10:
        La(r.type._context);
        break;
      case 22:
      case 23:
        Ga();
    }
    n = n.return;
  }
  if (de = e, se = e = Mt(e.current, null), pe = Me = t, ue = 0, pr = null, Wa = Ml = Bt = 0, Ce = Kn = null, At !== null) {
    for (t = 0; t < At.length; t++) if (n = At[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var a = i.next;
        i.next = l, r.next = a;
      }
      n.pending = r;
    }
    At = null;
  }
  return e;
}
function wc(e, t) {
  do {
    var n = se;
    try {
      if (Ma(), Qr.current = ml, pl) {
        for (var r = re.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        pl = !1;
      }
      if (Ht = 0, ce = oe = re = null, Bn = !1, cr = 0, Qa.current = null, n === null || n.return === null) {
        ue = 1, pr = t, se = null;
        break;
      }
      e: {
        var i = e, a = n.return, o = n, u = t;
        if (t = pe, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var f = u, w = o, x = w.tag;
          if (!(w.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var h = w.alternate;
            h ? (w.updateQueue = h.updateQueue, w.memoizedState = h.memoizedState, w.lanes = h.lanes) : (w.updateQueue = null, w.memoizedState = null);
          }
          var v = Zs(a);
          if (v !== null) {
            v.flags &= -257, Js(v, a, o, i, t), v.mode & 1 && Xs(i, f, t), t = v, u = f;
            var g = t.updateQueue;
            if (g === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(u), t.updateQueue = _;
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Xs(i, f, t), Ka();
              break e;
            }
            u = Error(M(426));
          }
        } else if (te && o.mode & 1) {
          var j = Zs(a);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), Js(j, a, o, i, t), Ia(Sn(u, o));
            break e;
          }
        }
        i = u = Sn(u, o), ue !== 4 && (ue = 2), Kn === null ? Kn = [i] : Kn.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var c = nc(i, u, t);
              Ws(i, c);
              break e;
            case 1:
              o = u;
              var d = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (It === null || !It.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = rc(i, o, t);
                Ws(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Sc(n);
    } catch (P) {
      t = P, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xc() {
  var e = hl.current;
  return hl.current = ml, e === null ? ml : e;
}
function Ka() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4), de === null || !(Bt & 268435455) && !(Ml & 268435455) || xt(de, pe);
}
function vl(e, t) {
  var n = Y;
  Y |= 2;
  var r = xc();
  (de !== e || pe !== t) && (it = null, Vt(e, t));
  do
    try {
      lp();
      break;
    } catch (l) {
      wc(e, l);
    }
  while (!0);
  if (Ma(), Y = n, hl.current = r, se !== null) throw Error(M(261));
  return de = null, pe = 0, ue;
}
function lp() {
  for (; se !== null; ) _c(se);
}
function ip() {
  for (; se !== null && !Td(); ) _c(se);
}
function _c(e) {
  var t = Ec(e.alternate, e, Me);
  e.memoizedProps = e.pendingProps, t === null ? Sc(e) : se = t, Qa.current = null;
}
function Sc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Jf(n, t), n !== null) {
        n.flags &= 32767, se = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ue = 6, se = null;
        return;
      }
    } else if (n = Zf(n, t, Me), n !== null) {
      se = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function Ot(e, t, n) {
  var r = Z, l = Ve.transition;
  try {
    Ve.transition = null, Z = 1, ap(e, t, n, r);
  } finally {
    Ve.transition = l, Z = r;
  }
  return null;
}
function ap(e, t, n, r) {
  do
    gn();
  while (St !== null);
  if (Y & 6) throw Error(M(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Ad(e, i), e === de && (se = de = null, pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || zr || (zr = !0, Cc(qr, function() {
    return gn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ve.transition, Ve.transition = null;
    var a = Z;
    Z = 1;
    var o = Y;
    Y |= 4, Qa.current = null, ep(e, n), gc(n, e), Nf(Di), tl = !!Pi, Di = Pi = null, e.current = n, tp(n), Md(), Y = o, Z = a, Ve.transition = i;
  } else e.current = n;
  if (zr && (zr = !1, St = e, yl = l), i = e.pendingLanes, i === 0 && (It = null), Dd(n.stateNode), Te(e, ae()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (gl) throw gl = !1, e = qi, qi = null, e;
  return yl & 1 && e.tag !== 0 && gn(), i = e.pendingLanes, i & 1 ? e === ea ? Yn++ : (Yn = 0, ea = e) : Yn = 0, Rt(), null;
}
function gn() {
  if (St !== null) {
    var e = nu(yl), t = Ve.transition, n = Z;
    try {
      if (Ve.transition = null, Z = 16 > e ? 16 : e, St === null) var r = !1;
      else {
        if (e = St, St = null, yl = 0, Y & 6) throw Error(M(331));
        var l = Y;
        for (Y |= 4, O = e.current; O !== null; ) {
          var i = O, a = i.child;
          if (O.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var f = o[u];
                for (O = f; O !== null; ) {
                  var w = O;
                  switch (w.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(8, w, i);
                  }
                  var x = w.child;
                  if (x !== null) x.return = w, O = x;
                  else for (; O !== null; ) {
                    w = O;
                    var h = w.sibling, v = w.return;
                    if (pc(w), w === f) {
                      O = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = v, O = h;
                      break;
                    }
                    O = v;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var _ = g.child;
                if (_ !== null) {
                  g.child = null;
                  do {
                    var j = _.sibling;
                    _.sibling = null, _ = j;
                  } while (_ !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) a.return = i, O = a;
          else e: for (; O !== null; ) {
            if (i = O, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Gn(9, i, i.return);
            }
            var c = i.sibling;
            if (c !== null) {
              c.return = i.return, O = c;
              break e;
            }
            O = i.return;
          }
        }
        var d = e.current;
        for (O = d; O !== null; ) {
          a = O;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, O = p;
          else e: for (a = d; O !== null; ) {
            if (o = O, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Tl(9, o);
              }
            } catch (P) {
              ie(o, o.return, P);
            }
            if (o === a) {
              O = null;
              break e;
            }
            var E = o.sibling;
            if (E !== null) {
              E.return = o.return, O = E;
              break e;
            }
            O = o.return;
          }
        }
        if (Y = l, Rt(), rt && typeof rt.onPostCommitFiberRoot == "function") try {
          rt.onPostCommitFiberRoot(_l, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Z = n, Ve.transition = t;
    }
  }
  return !1;
}
function fo(e, t, n) {
  t = Sn(n, t), t = nc(e, t, 1), e = jt(e, t, 1), t = _e(), e !== null && (hr(e, 1, t), Te(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) fo(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      fo(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (It === null || !It.has(r))) {
        e = Sn(n, e), e = rc(t, e, 1), t = jt(t, e, 1), e = _e(), t !== null && (hr(t, 1, e), Te(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function sp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = _e(), e.pingedLanes |= e.suspendedLanes & n, de === e && (pe & n) === n && (ue === 4 || ue === 3 && (pe & 130023424) === pe && 500 > ae() - Ha ? Vt(e, 0) : Wa |= n), Te(e, t);
}
function kc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Er, Er <<= 1, !(Er & 130023424) && (Er = 4194304)) : t = 1);
  var n = _e();
  e = ft(e, t), e !== null && (hr(e, t, n), Te(e, n));
}
function op(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), kc(e, n);
}
function up(e, t) {
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
      throw Error(M(314));
  }
  r !== null && r.delete(t), kc(e, n);
}
var Ec;
Ec = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || je.current) Ne = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ne = !1, Xf(e, t, n);
    Ne = !!(e.flags & 131072);
  }
  else Ne = !1, te && t.flags & 1048576 && Iu(t, ol, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Hr(e, t), e = t.pendingProps;
      var l = vn(t, ve.current);
      hn(t, n), l = Fa(null, t, r, e, l, n);
      var i = Aa();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(r) ? (i = !0, al(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Da(t), l.updater = Il, t.stateNode = l, l._reactInternals = t, Ui(t, r, e, n), t = Hi(null, t, r, !0, i, n)) : (t.tag = 0, te && i && Na(t), xe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Hr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = dp(r), e = Be(r, e), l) {
          case 0:
            t = Wi(null, t, r, e, n);
            break e;
          case 1:
            t = to(null, t, r, e, n);
            break e;
          case 11:
            t = qs(null, t, r, e, n);
            break e;
          case 14:
            t = eo(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(M(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), Wi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), to(e, t, r, l, n);
    case 3:
      e: {
        if (sc(t), e === null) throw Error(M(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, zu(e, t), dl(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = Sn(Error(M(423)), t), t = no(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Sn(Error(M(424)), t), t = no(e, t, r, n, l);
          break e;
        } else for (Pe = Nt(t.stateNode.containerInfo.firstChild), De = t, te = !0, Ke = null, n = Pu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (wn(), r === l) {
            t = pt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ru(t), e === null && Ai(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = l.children, zi(r, l) ? a = null : i !== null && zi(r, i) && (t.flags |= 32), ac(e, t), xe(e, t, a, n), t.child;
    case 6:
      return e === null && Ai(t), null;
    case 13:
      return oc(e, t, n);
    case 4:
      return za(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = xn(t, null, r, n) : xe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), qs(e, t, r, l, n);
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, a = l.value, J(ul, r._currentValue), r._currentValue = a, i !== null) if (Je(i.value, a)) {
          if (i.children === l.children && !je.current) {
            t = pt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var o = i.dependencies;
          if (o !== null) {
            a = i.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = ut(-1, n & -n), u.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var w = f.pending;
                    w === null ? u.next = u : (u.next = w.next, w.next = u), f.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), $i(
                  i.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (a = i.return, a === null) throw Error(M(341));
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), $i(a, n, t), a = i.sibling;
          } else a = i.child;
          if (a !== null) a.return = i;
          else for (a = i; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (i = a.sibling, i !== null) {
              i.return = a.return, a = i;
              break;
            }
            a = a.return;
          }
          i = a;
        }
        xe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, hn(t, n), l = Ue(l), r = r(l), t.flags |= 1, xe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Be(r, t.pendingProps), l = Be(r.type, l), eo(e, t, r, l, n);
    case 15:
      return lc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), Hr(e, t), t.tag = 1, Ie(r) ? (e = !0, al(t)) : e = !1, hn(t, n), tc(t, r, l), Ui(t, r, l, n), Hi(null, t, r, !0, e, n);
    case 19:
      return uc(e, t, n);
    case 22:
      return ic(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Cc(e, t) {
  return Jo(e, t);
}
function cp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ae(e, t, n, r) {
  return new cp(e, t, n, r);
}
function Ya(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function dp(e) {
  if (typeof e == "function") return Ya(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ma) return 11;
    if (e === ha) return 14;
  }
  return 2;
}
function Mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ae(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Kr(e, t, n, r, l, i) {
  var a = 2;
  if (r = e, typeof e == "function") Ya(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case qt:
      return Ut(n.children, l, i, t);
    case pa:
      a = 8, l |= 8;
      break;
    case fi:
      return e = Ae(12, n, t, l | 2), e.elementType = fi, e.lanes = i, e;
    case pi:
      return e = Ae(13, n, t, l), e.elementType = pi, e.lanes = i, e;
    case mi:
      return e = Ae(19, n, t, l), e.elementType = mi, e.lanes = i, e;
    case Ro:
      return Ll(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Do:
          a = 10;
          break e;
        case zo:
          a = 9;
          break e;
        case ma:
          a = 11;
          break e;
        case ha:
          a = 14;
          break e;
        case yt:
          a = 16, r = null;
          break e;
      }
      throw Error(M(130, e == null ? e : typeof e, ""));
  }
  return t = Ae(a, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ut(e, t, n, r) {
  return e = Ae(7, e, r, t), e.lanes = n, e;
}
function Ll(e, t, n, r) {
  return e = Ae(22, e, r, t), e.elementType = Ro, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ui(e, t, n) {
  return e = Ae(6, e, null, t), e.lanes = n, e;
}
function ci(e, t, n) {
  return t = Ae(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function fp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Xa(e, t, n, r, l, i, a, o, u) {
  return e = new fp(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ae(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Da(i), e;
}
function pp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Nc(e) {
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (Yt(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return Nu(e, n, t);
  }
  return t;
}
function jc(e, t, n, r, l, i, a, o, u) {
  return e = Xa(n, r, !0, e, l, i, a, o, u), e.context = Nc(null), n = e.current, r = _e(), l = Tt(n), i = ut(r, l), i.callback = t ?? null, jt(n, i, l), e.current.lanes = l, hr(e, l, r), Te(e, r), e;
}
function Pl(e, t, n, r) {
  var l = t.current, i = _e(), a = Tt(l);
  return n = Nc(n), t.context === null ? t.context = n : t.pendingContext = n, t = ut(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = jt(l, t, a), e !== null && (Ze(e, l, a, i), Ur(e, l, a)), a;
}
function wl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function po(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Za(e, t) {
  po(e, t), (e = e.alternate) && po(e, t);
}
function mp() {
  return null;
}
var Ic = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ja(e) {
  this._internalRoot = e;
}
Dl.prototype.render = Ja.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Pl(e, t, null, null);
};
Dl.prototype.unmount = Ja.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gt(function() {
      Pl(null, e, null, null);
    }), t[dt] = null;
  }
};
function Dl(e) {
  this._internalRoot = e;
}
Dl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = iu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++) ;
    wt.splice(n, 0, e), n === 0 && su(e);
  }
};
function qa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function mo() {
}
function hp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = wl(a);
        i.call(f);
      };
    }
    var a = jc(t, r, e, 0, null, !1, !1, "", mo);
    return e._reactRootContainer = a, e[dt] = a.current, ir(e.nodeType === 8 ? e.parentNode : e), Gt(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var f = wl(u);
      o.call(f);
    };
  }
  var u = Xa(e, 0, !1, null, null, !1, !1, "", mo);
  return e._reactRootContainer = u, e[dt] = u.current, ir(e.nodeType === 8 ? e.parentNode : e), Gt(function() {
    Pl(t, u, n, r);
  }), u;
}
function Rl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = wl(a);
        o.call(u);
      };
    }
    Pl(t, a, e, l);
  } else a = hp(n, t, e, l, r);
  return wl(a);
}
ru = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = An(t.pendingLanes);
        n !== 0 && (va(t, n | 1), Te(t, ae()), !(Y & 6) && (kn = ae() + 500, Rt()));
      }
      break;
    case 13:
      Gt(function() {
        var r = ft(e, 1);
        if (r !== null) {
          var l = _e();
          Ze(r, e, 1, l);
        }
      }), Za(e, 1);
  }
};
wa = function(e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var n = _e();
      Ze(t, e, 134217728, n);
    }
    Za(e, 134217728);
  }
};
lu = function(e) {
  if (e.tag === 13) {
    var t = Tt(e), n = ft(e, t);
    if (n !== null) {
      var r = _e();
      Ze(n, e, t, r);
    }
    Za(e, t);
  }
};
iu = function() {
  return Z;
};
au = function(e, t) {
  var n = Z;
  try {
    return Z = e, t();
  } finally {
    Z = n;
  }
};
Ei = function(e, t, n) {
  switch (t) {
    case "input":
      if (yi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Cl(r);
            if (!l) throw Error(M(90));
            Oo(r), yi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ao(e, n);
      break;
    case "select":
      t = n.value, t != null && dn(e, !!n.multiple, t, !1);
  }
};
Bo = Ba;
Go = Gt;
var gp = { usingClientEntryPoint: !1, Events: [yr, rn, Cl, Wo, Ho, Ba] }, bn = { findFiberByHostInstance: Ft, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, yp = { bundleType: bn.bundleType, version: bn.version, rendererPackageName: bn.rendererPackageName, rendererConfig: bn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Xo(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: bn.findFiberByHostInstance || mp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber) try {
    _l = Rr.inject(yp), rt = Rr;
  } catch {
  }
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gp;
Re.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qa(t)) throw Error(M(200));
  return pp(e, t, null, n);
};
Re.createRoot = function(e, t) {
  if (!qa(e)) throw Error(M(299));
  var n = !1, r = "", l = Ic;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Xa(e, 1, !1, null, null, n, !1, r, l), e[dt] = t.current, ir(e.nodeType === 8 ? e.parentNode : e), new Ja(t);
};
Re.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = Xo(t), e = e === null ? null : e.stateNode, e;
};
Re.flushSync = function(e) {
  return Gt(e);
};
Re.hydrate = function(e, t, n) {
  if (!zl(t)) throw Error(M(200));
  return Rl(null, e, t, !0, n);
};
Re.hydrateRoot = function(e, t, n) {
  if (!qa(e)) throw Error(M(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", a = Ic;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = jc(t, null, e, 1, n ?? null, l, !1, i, a), e[dt] = t.current, ir(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Dl(t);
};
Re.render = function(e, t, n) {
  if (!zl(t)) throw Error(M(200));
  return Rl(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function(e) {
  if (!zl(e)) throw Error(M(40));
  return e._reactRootContainer ? (Gt(function() {
    Rl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[dt] = null;
    });
  }), !0) : !1;
};
Re.unstable_batchedUpdates = Ba;
Re.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!zl(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Rl(e, t, n, !1, r);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function Tc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tc);
    } catch (e) {
      console.error(e);
    }
}
Tc(), To.exports = Re;
var Le = To.exports, Mc, ho = Le;
Mc = ho.createRoot, ho.hydrateRoot;
window.api = G;
const vp = async () => {
  const e = await G.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
}, Yr = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const i = await G.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  if (!i.ok)
    throw new Error(`Failed to fetch images: ${i.statusText}`);
  return await i.json();
}, wp = async (e) => {
  const t = await G.fetchApi(`/meld/image/${e}/details`);
  if (!t.ok)
    throw new Error(`Failed to fetch image details: ${t.statusText}`);
  return await t.json();
}, xp = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await G.fetchApi(n);
  return r.ok ? await r.json() : [];
}, _p = async () => {
  const e = await G.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Lc = async () => {
  const e = await G.fetchApi("/meld/settings");
  if (!e.ok)
    return {
      dev_mode: !1,
      "gallery.show_parent_image": !0,
      "gallery.hide_parent_images": !0,
      "sidebar.show_filename": "filename",
      "sidebar.show_dimensions": !0,
      "sidebar.show_created_at": !1,
      "sidebar.show_model_name": !0,
      "sidebar.show_positive_prompt": !0,
      "sidebar.show_negative_prompt": !1,
      "sidebar.show_tags": !0,
      "search.quick_suggestions": !0,
      "search.input_suggest": !0,
      "search.realtime_search": !0,
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
      "gallery.view_mode": "grid_details"
    };
  const t = await e.json();
  return typeof t["sidebar.show_filename"] == "boolean" && (t["sidebar.show_filename"] = t["sidebar.show_filename"] ? "filename" : "none"), typeof t["viewer.details.show_filename"] == "boolean" && (t["viewer.details.show_filename"] = t["viewer.details.show_filename"] ? "filename" : "none"), typeof t["fullscreen.details.show_filename"] == "boolean" && (t["fullscreen.details.show_filename"] = t["fullscreen.details.show_filename"] ? "filename" : "none"), t;
}, Sp = async (e, t) => {
  if (!(await G.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, kp = async (e, t) => {
  if (!(await G.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Ep = async (e, t = 12) => {
  const n = await G.fetchApi(
    `/meld/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, ra = async (e) => {
  const t = await G.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, Cp = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await G.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, la = async (e, t = !1) => {
  const n = await G.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to delete images");
  }
}, ia = async (e) => {
  const t = await G.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to restore images");
  }
}, Pc = async (e) => {
  const t = await G.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, Np = async (e, t, n = !1, r) => {
  const l = await G.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, jp = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await G.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, Ip = async (e, t, n) => {
  const r = await G.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, Tp = async (e) => {
  const t = await G.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Mp = async () => {
  if (!(await G.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, Lp = async () => {
  const e = await G.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, Pp = async (e, t) => {
  if (!(await G.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, go = async (e) => {
  if (!(await G.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, Dp = async (e, t) => {
  if (!(await G.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, es = async () => {
  const e = await G.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, zp = async (e) => {
  const t = await G.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, Rp = async (e) => {
  if (!(await G.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, bp = async (e, t) => {
  const n = await G.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, Op = async (e, t) => {
  if (!(await G.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, Fp = async (e, t, n) => {
  if (!(await G.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, Ap = async (e) => {
  const t = await G.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, $p = async (e) => {
  const t = await G.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Dc = { exports: {} }, bl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vp = y, Up = Symbol.for("react.element"), Qp = Symbol.for("react.fragment"), Wp = Object.prototype.hasOwnProperty, Hp = Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bp = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
  var r, l = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) Wp.call(t, r) && !Bp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Up, type: e, key: i, ref: a, props: l, _owner: Hp.current };
}
bl.Fragment = Qp;
bl.jsx = zc;
bl.jsxs = zc;
Dc.exports = bl;
var s = Dc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Gp = {
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
const Kp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), K = (e, t) => {
  const n = y.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: u,
      ...f
    }, w) => y.createElement(
      "svg",
      {
        ref: w,
        ...Gp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Kp(e)}`, o].join(" "),
        ...f
      },
      [
        ...t.map(([x, h]) => y.createElement(x, h)),
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
const Yp = K("AlertTriangle", [
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
const Xp = K("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rc = K("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = K("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zp = K("ArrowUpDown", [
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
const bc = K("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = K("Box", [
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
const qp = K("Calendar", [
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
const em = K("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = K("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fc = K("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ac = K("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tm = K("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = K("Download", [
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
const rm = K("Folder", [
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
const lm = K("Info", [
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
const $c = K("LayoutGrid", [
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
const im = K("LayoutList", [
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
const am = K("Maximize", [
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
const sm = K("Minimize", [
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
const om = K("MoreVertical", [
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
const Vc = K("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = K("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = K("PlusCircle", [
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
const ts = K("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = K("RefreshCw", [
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
const En = K("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = K("Settings", [
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
const fm = K("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = K("Star", [
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
const Xt = K("Tag", [
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
const Cn = K("Trash2", [
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
const pm = K("Type", [
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
const mm = K("Upload", [
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
const Se = K("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let xl = !1;
const hm = (e) => {
  xl = e, xl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, gm = (...e) => {
  xl && console.log("[Meld]", ...e);
}, ym = (...e) => {
  xl && console.warn("[Meld]", ...e);
}, vm = (...e) => {
  console.error("[Meld]", ...e);
}, V = {
  log: gm,
  warn: ym,
  error: vm,
  init: hm
}, wm = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  lastUpdated: Date.now(),
  viewMode: "list",
  viewScope: "default",
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
    updatedCount: 0,
    totalCount: 0
  },
  settings: {
    dev_mode: !1,
    "gallery.show_parent_image": !0,
    "gallery.hide_parent_images": !0,
    "sidebar.show_filename": "filename",
    "sidebar.show_dimensions": !0,
    "sidebar.show_created_at": !1,
    "sidebar.show_model_name": !0,
    "sidebar.show_positive_prompt": !0,
    "sidebar.show_negative_prompt": !1,
    "sidebar.show_tags": !0,
    "search.quick_suggestions": !0,
    "search.input_suggest": !0,
    "search.realtime_search": !0,
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
    "gallery.view_mode": "grid_details"
  },
  pagination: {
    total: 0,
    offset: 0,
    limit: 100,
    hasMore: !1
  },
  searchQuery: "",
  favorites: []
};
function xm(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const l = new Set(t.payload), i = e.images.filter((o) => !l.has(o.id)), a = new Set(e.selectedIds);
      for (const o of t.payload)
        a.delete(o);
      return {
        ...e,
        images: i,
        selectedIds: a,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const l = t.payload, i = [...e.images, ...l], a = Array.from(
        new Map(i.map((o) => [o.id, o])).values()
      ).sort((o, u) => u.created_at - o.created_at);
      return {
        ...e,
        images: a,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + l.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const l = t.payload, i = e.images.map(
        (o) => o.id === l.id ? l : o
      ), a = e.lineageImages.map(
        (o) => o.id === l.id ? l : o
      );
      return {
        ...e,
        images: i,
        lineageImages: a
      };
    }
    case "SET_IMAGES": {
      const { images: l, total: i, offset: a } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !l.some((u) => u.id === o) && (o = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: o,
        pagination: {
          total: i,
          offset: a,
          limit: e.pagination.limit,
          hasMore: a + l.length < i
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: i, offset: a } = t.payload, o = [...e.images, ...l], u = Array.from(
        new Map(o.map((f) => [f.id, f])).values()
      );
      return {
        ...e,
        images: u,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: i,
          offset: a,
          hasMore: a + l.length < i
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
      const l = new Set(e.selectedIds);
      let i = e.lastSelectedId;
      return l.has(t.payload) ? (l.delete(t.payload), i === t.payload && (i = null)) : (l.add(t.payload), i = t.payload), {
        ...e,
        selectedIds: l,
        lastSelectedId: i
      };
    }
    case "SELECT_RANGE": {
      if (e.lastSelectedId === null) {
        const f = new Set(e.selectedIds);
        return f.add(t.payload), {
          ...e,
          selectedIds: f,
          lastSelectedId: t.payload
        };
      }
      const l = e.images.findIndex(
        (f) => f.id === e.lastSelectedId
      ), i = e.images.findIndex(
        (f) => f.id === t.payload
      );
      if (l === -1 || i === -1) return e;
      const [a, o] = [
        Math.min(l, i),
        Math.max(l, i)
      ], u = new Set(e.selectedIds);
      for (let f = a; f <= o; f++)
        u.add(e.images[f].id);
      return {
        ...e,
        selectedIds: u,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(
          e.images.map((l) => l.id)
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
      return {
        ...e,
        lastUpdated: Date.now()
      };
    case "OPEN_VIEWER": {
      const l = t.payload, i = typeof l == "number" ? l : l.id, a = typeof l == "number" ? "gallery" : l.mode, o = e.viewerMode === "lineage" && a === "lineage" && e.lineageImages.some((u) => u.id === i);
      return {
        ...e,
        viewerImageId: i,
        viewerMode: a,
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
      const i = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (f) => f.id === e.viewerImageId
      );
      if (o === -1 || o === a.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || o === a.length - 1 && !i)
        return e;
      const u = (o + 1) % a.length;
      return {
        ...e,
        viewerImageId: a[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const i = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (f) => f.id === e.viewerImageId
      );
      if (o === -1 || o === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || o === 0 && !i)
        return e;
      const u = (o - 1 + a.length) % a.length;
      return {
        ...e,
        viewerImageId: a[u].id
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
      const l = {
        ...e.settings,
        ...t.payload
      }, i = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (i.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: l,
        pagination: i
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
const Uc = y.createContext(void 0), _m = ({
  children: e
}) => {
  const [t, n] = y.useReducer(xm, wm), r = y.useRef(t.images.length), l = y.useRef(0);
  y.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const i = y.useCallback(
    async (v, g, _) => {
      const j = t.settings["gallery.max_load_count"], c = 200;
      let d = v;
      for (; d < Math.min(g, j) && _ === l.current; )
        try {
          const p = Math.min(c, j - d);
          V.log("Background fetch: starting chunk", {
            offset: d,
            limit: p
          });
          const E = await Yr(
            d,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current || (n({ type: "APPEND_IMAGES", payload: E }), d += E.images.length, E.images.length === 0 || d >= E.total))
            break;
          await new Promise((P) => setTimeout(P, 300));
        } catch (p) {
          V.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = y.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const v = performance.now(), g = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", j = t.settings["gallery.initial_load_count"];
      V.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: j,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const c = await Yr(
        0,
        j,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), d = performance.now() - v;
      V.log("refreshImages: initial fetch complete", {
        count: c.images.length,
        total: c.total,
        offset: c.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: c }), c.total > j && i(j, c.total, g);
    } catch (_) {
      V.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    i
  ]), o = y.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const v = performance.now();
    try {
      const g = r.current, _ = t.searchQuery.trim() !== "", j = t.pagination.limit;
      V.log("loadMoreImages: starting fetch", {
        nextOffset: g,
        fetchLimit: j,
        isSearch: _
      });
      const c = await Yr(
        g,
        j,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), d = performance.now() - v;
      V.log("loadMoreImages: fetch complete", {
        count: c.images.length,
        total: c.total,
        offset: c.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: c });
    } catch (g) {
      V.error("loadMoreImages: fetch failed", g), n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.searchQuery,
    t.viewScope
  ]), u = y.useCallback(async () => {
    try {
      const v = await Lp();
      n({ type: "SET_FAVORITES", payload: v });
    } catch (v) {
      V.error("Failed to load favorites", v);
    }
  }, []), f = y.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds), _ = t.images.filter(
      (j) => t.selectedIds.has(j.id)
    ).some(
      (j) => j.parent_id || j.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: v,
        hasLineage: _,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), w = y.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 }), await ia(v), t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: v }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (g) {
      n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [t.selectedIds, t.viewScope]), x = y.useCallback(
    async (v, g) => {
      try {
        await Sp(v, g), n({ type: "SET_SETTINGS", payload: { [v]: g } });
      } catch (_) {
        n({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    []
  ), h = y.useCallback(
    async (v) => {
      const g = t.images.find((_) => _.id === v);
      if (g && !g.is_minimal)
        return g;
      try {
        V.log("fetchFullImageDetails: fetching full data", { id: v });
        const _ = await wp(v);
        return n({ type: "UPDATE_IMAGE", payload: _ }), _;
      } catch (_) {
        throw V.error("Failed to fetch image details", _), _;
      }
    },
    [t.images]
  );
  return y.useEffect(() => {
    (async () => {
      try {
        const g = await Lc();
        n({ type: "SET_SETTINGS", payload: g });
      } catch (g) {
        V.error("Failed to load settings", g);
      }
    })();
  }, []), y.useEffect(() => {
    u();
  }, [u]), y.useEffect(() => {
    const v = () => {
      a();
    }, g = (j) => {
      const c = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: c }
      });
    }, _ = (j) => {
      const c = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: c.new_count || 0,
          updatedCount: c.updated_count || 0,
          totalCount: c.total_count || 0,
          progress: {
            current: c.total_count || t.scanStatus.progress.total,
            total: c.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), a();
    };
    return window.addEventListener("meld-refresh", v), window.addEventListener("meld-scan-progress", g), window.addEventListener("meld-scan-finished", _), () => {
      window.removeEventListener("meld-refresh", v), window.removeEventListener("meld-scan-progress", g), window.removeEventListener("meld-scan-finished", _);
    };
  }, [a, t.scanStatus.progress.total]), y.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ s.jsx(
    Uc.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: f,
        restoreSelected: w,
        updateSetting: x,
        fetchFullImageDetails: h
      },
      children: e
    }
  );
}, qe = () => {
  const e = y.useContext(Uc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Sm = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = y.useState(!1), i = y.useRef(null);
  return y.useEffect(() => {
    const a = new IntersectionObserver(
      ([u]) => {
        l(u.isIntersecting);
      },
      { rootMargin: n }
    ), o = i.current;
    return o && a.observe(o), () => {
      o && a.unobserve(o);
    };
  }, [n]), /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: i,
      style: {
        minHeight: r ? "auto" : `${t}px`,
        width: "100%",
        containIntrinsicSize: `auto ${t}px`,
        contentVisibility: "auto"
      },
      children: r ? e : null
    }
  );
}, km = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = qe(), l = e.selectedIds.size;
  if (l === 0) return null;
  const i = e.viewScope === "trash", a = () => {
    const o = e.images.filter(
      (f) => e.selectedIds.has(f.id)
    ), u = /* @__PURE__ */ new Set();
    for (const f of o)
      if (f.tags)
        for (const w of f.tags)
          u.add(w);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(u)
      }
    });
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${i ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
          l,
          " items selected"
        ] }),
        i ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--restore",
              onClick: r,
              children: [
                /* @__PURE__ */ s.jsx(
                  Xn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Restore"
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
                  Cn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Delete Permanently"
              ]
            }
          )
        ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
              onClick: a,
              children: [
                /* @__PURE__ */ s.jsx(
                  Xt,
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
                  Cn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Move to Trash"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ s.jsx(Se, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, Qc = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: i } = qe(), a = y.useRef(!0);
  y.useEffect(() => () => {
    a.current = !1;
  }, []);
  const o = y.useRef(l.viewerImageId);
  y.useEffect(() => {
    o.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const u = y.useCallback(() => {
    i({ type: "CLOSE_MODAL" });
  }, [i]), f = y.useCallback(
    (h) => {
      if (!a.current) return;
      const v = o.current;
      if (v === null || !h.has(v))
        return;
      const g = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (c) => c.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && c.has_children)
      ), _ = g.findIndex(
        (c) => c.id === v
      );
      if (_ === -1) return;
      let j = !1;
      for (let c = _ + 1; c < g.length; c++)
        if (!h.has(g[c].id)) {
          i({
            type: "OPEN_VIEWER",
            payload: { id: g[c].id, mode: l.viewerMode }
          }), j = !0;
          break;
        }
      if (!j) {
        for (let c = _ - 1; c >= 0; c--)
          if (!h.has(g[c].id)) {
            i({
              type: "OPEN_VIEWER",
              payload: { id: g[c].id, mode: l.viewerMode }
            }), j = !0;
            break;
          }
      }
      j || i({ type: "CLOSE_VIEWER" });
    },
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      i
    ]
  );
  y.useEffect(() => {
    const h = (v) => {
      v.key === "Escape" && u();
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [u]);
  const w = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (_) => _.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && _.has_children)
      ), v = new Set(e), g = h.filter(
        (_) => v.has(_.id)
      );
      if (f(v), await la(e, n), !a.current) return;
      !n && r && r(g), i({ type: "REMOVE_IMAGES", payload: e }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  }, x = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (_) => _.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && _.has_children)
      ), v = new Set(e);
      for (const _ of e) {
        const j = await ra(_);
        if (!a.current) return;
        for (const c of j)
          v.add(c.id);
      }
      const g = h.filter(
        (_) => v.has(_.id)
      );
      if (f(v), await la(Array.from(v), n), !a.current) return;
      !n && r && r(g), i({
        type: "REMOVE_IMAGES",
        payload: Array.from(v)
      }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  };
  return Le.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: u, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (h) => h.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ s.jsx(Cn, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: u,
                children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
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
                        Yp,
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
                      " or descendants. You can choose to delete just the selected items or all related items in their lineage."
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
                onClick: u,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  onClick: w,
                  children: n ? "Delete Permanently" : "Move to Trash"
                }
              ),
              t && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                  onClick: x,
                  children: n ? "Delete All Related" : "Move All Related"
                }
              )
            ] })
          ] })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, $e = (e) => {
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
}, Em = ({ image: e }) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = qe(), l = t.selectedIds.has(e.id), a = (t.settings["gallery.view_mode"] || "grid_details") === "grid_only", [o, u] = y.useState(null), [f, w] = y.useState(!1), [x, h] = y.useState(null), [v, g] = y.useState(!1), _ = y.useRef(null), j = async (S, b, m = !1) => {
    try {
      await navigator.clipboard.writeText(S), m ? (g(!0), setTimeout(() => g(!1), 2e3)) : (h(b), setTimeout(() => h(null), 2e3));
    } catch (N) {
      console.error("Failed to copy text: ", N);
    }
  };
  y.useEffect(() => {
    const S = (m) => {
      m.key === "Escape" && (o ? u(null) : w(!1));
    }, b = (m) => {
      _.current && !_.current.contains(m.target) && w(!1);
    };
    return window.addEventListener("keydown", S), f && document.addEventListener("mousedown", b), () => {
      window.removeEventListener("keydown", S), document.removeEventListener("mousedown", b);
    };
  }, [f, o]);
  const c = (S) => {
    const b = t.settings["gallery.lineage_max_depth"];
    if (b === 0) return [];
    if (S.ancestors && S.ancestors.length > 0)
      return S.ancestors.slice(0, b).map((T) => ({
        id: T.id,
        imgSrc: $e(T)
      }));
    const m = S.parent_id;
    if (!m || !S.parent_filename) return [];
    const N = t.images.find((T) => T.id === m);
    let F = null;
    if (N ? F = $e(N) : F = $e({
      filename: S.parent_filename,
      subfolder: S.parent_subfolder || "",
      type: S.parent_type
    }), !F) return [];
    const H = {
      id: m || null,
      imgSrc: F
    };
    if (N && b > 1) {
      const T = c(N);
      return [H, ...T].slice(0, b);
    }
    return [H];
  }, d = c(e), E = t.settings["sidebar.show_filename"] === "filepath" ? `${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, P = $e(e), R = (S) => {
    S.shiftKey ? (S.preventDefault(), S.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : S.ctrlKey || S.metaKey || t.selectedIds.size > 0 ? (S.preventDefault(), S.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, C = (S) => {
    S.shiftKey ? (S.preventDefault(), S.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : S.ctrlKey || S.metaKey || t.selectedIds.size > 0 ? (S.preventDefault(), S.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, I = (S) => {
    (S.shiftKey || S.ctrlKey || S.metaKey || t.selectedIds.size > 0) && S.preventDefault();
  }, Q = (S) => {
    (S.key === "Enter" || S.key === " ") && (S.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, L = async () => {
    try {
      const S = await Ap(e.id);
      if (!S.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        S.workflow
      ), V.log("Workflow restored successfully from Meld");
    } catch (S) {
      V.error("Error restoring workflow:", S), alert("Failed to restore workflow.");
    }
  }, k = async () => {
    try {
      const S = await $p(e.id), b = "MeldUnifiedLoader", m = window.app, F = window.LiteGraph.createNode(b);
      if (!F) {
        console.error(`Node type ${b} not found.`), alert(
          `Node type ${b} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const H = {
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
      if (F.widgets) {
        for (const [z, U] of Object.entries(H)) {
          const D = S[z];
          if (D != null) {
            const X = F.widgets.find(
              (B) => B.name === U
            );
            X && (X.value = D);
          }
        }
        const $ = F.widgets.find(
          (z) => z.name === "control_after_generate"
        );
        $ && ($.value = "fixed");
      }
      const T = m.canvas.ds.offset, A = m.canvas.ds.scale;
      F.pos = [(-T[0] + 400) / A, (-T[1] + 300) / A], m.graph.add(F), m.canvas.selectNode(F), m.canvas.centerOnNode(F);
    } catch (S) {
      console.error("Error adding Unified Loader:", S), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-image-card ${l ? "meld-image-card--selected" : ""} ${a ? "meld-image-card--grid-only" : ""}`,
      onClick: C,
      onMouseDown: I,
      onKeyDown: Q,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
          "img",
          {
            src: P,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: I,
            onClick: (S) => {
              S.stopPropagation(), R(S);
            }
          }
        ) }),
        !a && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && E,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && d.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: d.map(
              (S, b) => S.imgSrc && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: S.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (m) => {
                    m.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: S.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: b === 0 ? "Source" : b === 1 ? "Grand-Source" : `Ancestor (S${b + 1})`,
                  alt: "source thumb"
                },
                S.id || b
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
              onClick: async (S) => {
                S.stopPropagation();
                const b = await r(e.id);
                u({
                  title: "Model",
                  text: b.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (S) => {
                      S.stopPropagation();
                      const b = await r(e.id);
                      j(b.model_name || "-", "Model");
                    },
                    children: x === "Model" ? "Copied!" : "Model"
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
              onClick: async (S) => {
                S.stopPropagation();
                const b = await r(e.id);
                u({
                  title: "Positive Prompt",
                  text: b.positive_prompt || b.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (S) => {
                      S.stopPropagation();
                      const b = await r(e.id);
                      j(
                        b.positive_prompt || b.positive || "-",
                        "Positive"
                      );
                    },
                    children: x === "Positive" ? "Copied!" : "Positive"
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
              onClick: async (S) => {
                S.stopPropagation();
                const b = await r(e.id);
                u({
                  title: "Negative Prompt",
                  text: b.negative_prompt || b.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (S) => {
                      S.stopPropagation();
                      const b = await r(e.id);
                      j(
                        b.negative_prompt || b.negative || "-",
                        "Negative"
                      );
                    },
                    children: x === "Negative" ? "Copied!" : "Negative"
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
              onClick: (S) => {
                S.stopPropagation(), n({
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
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((S, b) => /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    className: "meld-image-card__tag",
                    children: S
                  },
                  `${S}-${b}`
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
          )
        ] }),
        !a && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu-container", ref: _, children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (S) => {
                S.stopPropagation(), w(!f);
              },
              title: "Menu",
              children: /* @__PURE__ */ s.jsx(om, { size: 16 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (S) => {
                S.stopPropagation(), k();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ s.jsx(yo, { size: 16 })
            }
          ),
          f && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (S) => {
                  S.stopPropagation(), k(), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(yo, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (S) => {
                  S.stopPropagation(), L(), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(Xp, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (S) => {
                  S.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(cm, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (S) => {
                  S.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(Xt, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        o && Le.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-prompt-popup-overlay",
              onClick: (S) => {
                S.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-prompt-popup-content",
                  onClick: (S) => S.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-header", children: [
                      /* @__PURE__ */ s.jsx("span", { children: o.title }),
                      /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            v ? /* @__PURE__ */ s.jsx(
                              Oc,
                              {
                                size: 18,
                                style: { color: "var(--meld-success-color)" }
                              }
                            ) : /* @__PURE__ */ s.jsx(
                              tm,
                              {
                                className: "meld-prompt-popup-copy",
                                size: 18,
                                onClick: () => j(o.text, "", !0)
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              Se,
                              {
                                className: "meld-prompt-popup-close",
                                size: 18,
                                onClick: () => u(null)
                              }
                            )
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup-text", children: o.text })
                  ]
                }
              )
            }
          ),
          document.body
        )
      ]
    }
  );
}, Wc = () => {
  const { dispatch: e } = qe(), [t, n] = y.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0,
    tags: []
  }), [r, l] = y.useState([]), [i, a] = y.useState([]), [o, u] = y.useState(0), [f, w] = y.useState(!1), [x, h] = y.useState([]), [v, g] = y.useState(""), [_, j] = y.useState(!1), [c, d] = y.useState(null);
  y.useEffect(() => {
    (async () => {
      try {
        const S = await vp();
        n((b) => ({ ...b, custom_path: S }));
      } catch (S) {
        V.error("Failed to fetch home directory:", S);
      }
    })();
  }, []), y.useEffect(() => {
    const k = new AbortController();
    return (async () => {
      const b = t.type === "custom" ? t.custom_path : t.subfolder;
      if (V.log(
        `loadFolders started. Path: "${b}", Type: "${t.type}"`
      ), t.type === "custom" && !b) {
        V.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      w(!0);
      const m = b, N = t.type;
      try {
        V.log("Step 1: Fast load starting...");
        const F = await Np(
          t.type,
          b,
          !0,
          k.signal
        );
        if (k.signal.aborted) {
          V.log("Step 1: Aborted.");
          return;
        }
        V.log(
          `Step 1 complete. Found ${F.folders.length} folders, ${F.images.length} images.`
        ), l(F.folders), a(F.images), u(null);
        const H = F.folders.map((T) => T.name);
        H.length > 0 && (V.log(
          `Step 2: Metadata fetch starting for ${H.length} folders...`
        ), jp(
          N,
          m,
          H,
          k.signal
        ).then((T) => {
          if (k.signal.aborted) {
            V.log("Step 2: Aborted.");
            return;
          }
          V.log("Step 2: Metadata fetch complete."), l(
            (A) => A.map(($) => {
              const z = T[$.name];
              return z ? { ...$, count: z.count, preview: z.preview } : $;
            })
          );
        }).catch((T) => {
          T.name !== "AbortError" && V.error("Step 2: Metadata fetch failed:", T);
        })), V.log("Step 3: Path image count starting..."), Ip(N, m, k.signal).then((T) => {
          if (k.signal.aborted) {
            V.log("Step 3: Aborted.");
            return;
          }
          V.log(`Step 3: Path image count complete: ${T}`), u(T);
        }).catch((T) => {
          T.name !== "AbortError" && V.error("Step 3: Path image count failed:", T);
        });
      } catch (F) {
        if (F.name === "AbortError") {
          V.log("Request aborted.");
          return;
        }
        V.error("Failed to load folders:", F), l([]), a([]), u(0);
      } finally {
        k.signal.aborted || w(!1);
      }
    })(), () => {
      k.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = y.useCallback(async () => {
    j(!0);
    try {
      const k = await es();
      h(k);
    } catch (k) {
      V.error("Failed to fetch tags:", k);
    } finally {
      j(!1);
    }
  }, []);
  y.useEffect(() => {
    p();
  }, [p]), y.useEffect(() => {
    const k = (S) => {
      S.key === "Escape" && (S.preventDefault(), S.stopImmediatePropagation(), c ? d(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", k, { capture: !0 }), () => window.removeEventListener("keydown", k, { capture: !0 });
  }, [c, e]);
  const E = y.useMemo(() => x.filter(
    (k) => k.name.toLowerCase().includes(v.toLowerCase()) && !t.tags.includes(k.name)
  ), [x, v, t.tags]), P = (k) => {
    const S = k.trim();
    S && !t.tags.includes(S) && (n({ ...t, tags: [...t.tags, S] }), g(""));
  }, R = (k) => {
    n({ ...t, tags: t.tags.filter((S) => S !== k) });
  }, C = (k) => {
    k.key === "Enter" && v.trim() && (k.preventDefault(), P(v.trim()));
  }, I = async () => {
    try {
      await Tp(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (k) {
      V.error("Failed to start scan:", k), alert(`Failed to start scan: ${k}`);
    }
  }, Q = (k) => {
    if (t.type === "custom") {
      const S = t.custom_path.includes("\\") ? "\\" : "/", b = t.custom_path.endsWith(S) ? `${t.custom_path}${k}` : `${t.custom_path}${S}${k}`;
      n({ ...t, custom_path: b });
    } else {
      const S = t.subfolder ? `${t.subfolder}/${k}` : k;
      n({ ...t, subfolder: S });
    }
  }, L = () => {
    if (t.type === "custom") {
      const k = t.custom_path.includes("\\") ? "\\" : "/", S = t.custom_path.split(k);
      if (S.length > 1) {
        S.pop();
        let b = S.join(k);
        b === "" && k === "/" && (b = "/"), n({ ...t, custom_path: b });
      }
    } else {
      const k = t.subfolder.split("/");
      k.pop(), n({ ...t, subfolder: k.join("/") });
    }
  };
  return Le.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => e({ type: "CLOSE_MODAL" }),
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (k) => k.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
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
                          onChange: (k) => n({
                            ...t,
                            type: k.target.value,
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-path-count", children: o === null ? /* @__PURE__ */ s.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${o} images` })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (k) => n({ ...t, recursive: k.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.auto_link_parent,
                          onChange: (k) => n({
                            ...t,
                            auto_link_parent: k.target.checked
                          })
                        }
                      ),
                      "Auto Link Parent"
                    ] }) }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((k) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        k,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => R(k),
                            children: /* @__PURE__ */ s.jsx(Se, { size: 12 })
                          }
                        )
                      ] }, k)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: v,
                            onChange: (k) => g(k.target.value),
                            onKeyDown: C
                          }
                        ),
                        v.trim() && !t.tags.includes(v.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => P(v),
                            children: /* @__PURE__ */ s.jsx(ts, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : E.length === 0 ? v && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        v
                      ] }) : E.map((k) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => P(k.name),
                          children: k.name
                        },
                        k.id
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
                          /* @__PURE__ */ s.jsx(um, { size: 16 }),
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
                          onClick: L,
                          children: [
                            /* @__PURE__ */ s.jsx(Fc, { size: 16 }),
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
                          onChange: (k) => n({ ...t, custom_path: k.target.value }),
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: f ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && i.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      r.map((k) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => Q(k.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: k.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: $e(k.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(rm, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: k.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${k.count === null ? "meld-folder-count--loading" : ""}`,
                                children: k.count !== null ? `${k.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(Ac, { size: 14 })
                          ]
                        },
                        k.name
                      )),
                      i.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: i.map((k) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => d(k),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: $e(k),
                              alt: k.filename,
                              title: k.filename
                            }
                          )
                        },
                        k.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          c && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (k) => {
                k.stopPropagation(), d(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (k) => k.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => d(null),
                          children: /* @__PURE__ */ s.jsx(Se, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: $e(c),
                          alt: c.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: c.filename })
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
}, Hc = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = qe(), [l, i] = y.useState([]), [a, o] = y.useState(!0), [u, f] = y.useState(!1), w = t.images.find((c) => c.id === e), x = y.useCallback(async () => {
    o(!0);
    try {
      const c = await Ep(e);
      i(c);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      o(!1);
    }
  }, [e]);
  y.useEffect(() => {
    x();
  }, [x]);
  const h = async (c) => {
    try {
      await kp(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, v = async (c) => {
    o(!0);
    try {
      const d = await Cp(c), { id: p } = await Pc({
        filename: d.name,
        subfolder: d.subfolder || "",
        type: d.type || "input"
      });
      await h(p);
    } catch (d) {
      console.error("Failed to upload/register image:", d);
    } finally {
      o(!1);
    }
  }, g = (c) => {
    c.preventDefault(), c.stopPropagation(), f(!1);
    const d = c.dataTransfer.files[0];
    d != null && d.type.startsWith("image/") && v(d);
  };
  if (!w) return null;
  const _ = l.filter((c) => c.is_source_match), j = l.filter((c) => !c.is_source_match);
  return Le.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              w.id
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (c) => {
                  c.preventDefault(), c.stopPropagation(), f(!0);
                },
                onDragOver: (c) => {
                  c.preventDefault(), c.stopPropagation(), c.dataTransfer.dropEffect = "copy", f(!0);
                },
                onDragLeave: (c) => {
                  c.preventDefault(), c.stopPropagation(), f(!1);
                },
                onDrop: g,
                children: [
                  /* @__PURE__ */ s.jsx(mm, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              _.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: _.map((c) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ s.jsx("img", { src: $e(c), alt: c.filename }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: c.filename }) })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                j.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: j.map((c) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ s.jsx("img", { src: $e(c), alt: c.filename }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                        /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
                        /* @__PURE__ */ s.jsxs("span", { className: "meld-suggestion-distance", children: [
                          "Match:",
                          " ",
                          Math.round((64 - c.distance) / 64 * 100),
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  c.id
                )) }) : /* @__PURE__ */ s.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Bc = () => {
  const { state: e, dispatch: t, updateSetting: n } = qe(), [r, l] = y.useState("General"), [i, a] = y.useState({
    ...e.settings
  }), [o, u] = y.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [f, w] = y.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, h] = y.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [v, g] = y.useState(e.settings["viewer.thumbnail_window_size"].toString()), [_, j] = y.useState(e.settings["gallery.trash_retention_days"].toString()), [c, d] = y.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [p, E] = y.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    P,
    R
  ] = y.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    C,
    I
  ] = y.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), Q = [
    {
      key: "gallery.view_mode",
      label: "Gallery View Mode",
      description: "Choose between standard view with details or grid only view.",
      type: "select",
      category: "General",
      options: [
        { value: "grid_details", label: "Details View" },
        { value: "grid_only", label: "Grid Only View" }
      ]
    },
    {
      key: "gallery.initial_load_count",
      label: "Initial Load Count",
      description: "Number of images to load and display immediately (10-1000).",
      type: "number",
      category: "General",
      min: 10,
      max: 1e3
    },
    {
      key: "gallery.max_load_count",
      label: "Maximum Load Count",
      description: "Maximum number of images to load in the background (10-1000000).",
      type: "number",
      category: "General",
      min: 10,
      max: 1e6
    },
    {
      key: "gallery.hide_parent_images",
      label: "Hide Source Images",
      description: "Hide images that have been used as a basis for other images (sources).",
      type: "boolean",
      category: "General"
    },
    {
      key: "gallery.matching_strategy",
      label: "Source Matching Strategy",
      description: "Algorithm used to identify the source image.",
      type: "select",
      category: "General",
      options: [
        { value: "phash_created", label: "pHash & Created Time" },
        { value: "filename_phash", label: "Filename -> pHash" },
        { value: "phash_only", label: "pHash Only" }
      ]
    },
    {
      key: "gallery.lineage_max_depth",
      label: "Max Lineage Depth",
      description: "Maximum number of ancestor levels to fetch and display (1-10).",
      type: "number",
      category: "General",
      min: 1,
      max: 10
    },
    {
      key: "gallery.trash_retention_days",
      label: "Trash Retention Period (Days)",
      description: "How many days to keep deleted items in trash (0-365).",
      type: "number",
      category: "General",
      min: 0,
      max: 365
    },
    {
      key: "sidebar.show_filename",
      label: "Show Filename/Path",
      description: "Choose how to display the filename or path on the card.",
      type: "select",
      category: "Sidebar",
      options: [
        { value: "filename", label: "Filename" },
        { value: "filepath", label: "Filepath" },
        { value: "none", label: "None" }
      ]
    },
    {
      key: "sidebar.show_dimensions",
      label: "Show Dimensions",
      description: "Display the image dimensions (width x height) on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_created_at",
      label: "Show Created At",
      description: "Display the image creation date and time on the card.",
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
      key: "viewer.loop",
      label: "Loop Navigation",
      description: "Loop to the beginning/end when navigating in the viewer.",
      type: "boolean",
      category: "View"
    },
    {
      key: "viewer.small_image_mode",
      label: "Small Image Display",
      description: "Choose how to display images smaller than the viewer area.",
      type: "select",
      category: "View",
      options: [
        { value: "original", label: "Original Size" },
        { value: "fit", label: "Fit to Screen" }
      ]
    },
    {
      key: "viewer.show_details_by_default",
      label: "Show by Default",
      description: "Show the image details panel automatically when opening the viewer.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_filename",
      label: "Show Filename/Path",
      description: "Choose how to display the filename or path in the details.",
      type: "select",
      category: "View Details",
      options: [
        { value: "filename", label: "Filename" },
        { value: "filepath", label: "Filepath" },
        { value: "none", label: "None" }
      ]
    },
    {
      key: "viewer.details.show_dimensions",
      label: "Show Dimensions",
      description: "Display dimensions in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_created_at",
      label: "Show Created At",
      description: "Display generation date/time in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_model_name",
      label: "Show Model",
      description: "Display model name in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_positive_prompt",
      label: "Show Positive",
      description: "Display positive prompt in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_negative_prompt",
      label: "Show Negative",
      description: "Display negative prompt in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.max_positive_prompt_lines",
      label: "Max Positive Prompt Lines",
      description: "Maximum number of lines to display for the positive prompt.",
      type: "number",
      category: "View Details",
      min: 1,
      max: 100
    },
    {
      key: "viewer.details.max_negative_prompt_lines",
      label: "Max Negative Prompt Lines",
      description: "Maximum number of lines to display for the negative prompt.",
      type: "number",
      category: "View Details",
      min: 1,
      max: 100
    },
    {
      key: "viewer.details.show_tags",
      label: "Show Tags",
      description: "Display tags in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.show_icons",
      label: "Show Tool Icons",
      description: "Display navigation and action icons in view mode.",
      type: "boolean",
      category: "View"
    },
    {
      key: "viewer.show_thumbnails",
      label: "Show Thumbnails",
      description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
      type: "boolean",
      category: "View"
    },
    {
      key: "viewer.delete_mode",
      label: "Delete Mode",
      description: "Choose how images are deleted in view mode.",
      type: "select",
      category: "View",
      options: [
        { value: "confirm", label: "Confirmed" },
        { value: "target_only", label: "Unconfirmed (Target Only)" },
        { value: "lineage", label: "Unconfirmed (Include Lineage)" }
      ]
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
      key: "fullscreen.show_icons",
      label: "Show Tool Icons",
      description: "Display navigation and close icons in fullscreen mode.",
      type: "boolean",
      category: "Full Screen"
    },
    {
      key: "fullscreen.delete_mode",
      label: "Delete Mode",
      description: "Choose how images are deleted in fullscreen mode.",
      type: "select",
      category: "Full Screen",
      options: [
        { value: "confirm", label: "Confirmed" },
        { value: "target_only", label: "Unconfirmed (Target Only)" },
        { value: "lineage", label: "Unconfirmed (Include Lineage)" }
      ]
    },
    {
      key: "fullscreen.loop",
      label: "Loop Navigation",
      description: "Loop to the beginning/end when navigating in fullscreen.",
      type: "boolean",
      category: "Full Screen"
    },
    {
      key: "fullscreen.small_image_mode",
      label: "Small Image Display",
      description: "Choose how to display images smaller than the screen in fullscreen.",
      type: "select",
      category: "Full Screen",
      options: [
        { value: "original", label: "Original Size" },
        { value: "fit", label: "Fit to Screen" }
      ]
    },
    {
      key: "fullscreen.show_details_by_default",
      label: "Show Detail by Default",
      description: "Show the image details panel automatically when entering fullscreen.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_filename",
      label: "Show Filename/Path",
      description: "Choose how to display the filename or path in fullscreen details.",
      type: "select",
      category: "Full Screen Detail",
      options: [
        { value: "filename", label: "Filename" },
        { value: "filepath", label: "Filepath" },
        { value: "none", label: "None" }
      ]
    },
    {
      key: "fullscreen.details.show_dimensions",
      label: "Show Dimensions",
      description: "Display dimensions in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_created_at",
      label: "Show Created At",
      description: "Display generation date/time in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_model_name",
      label: "Show Model",
      description: "Display model name in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_positive_prompt",
      label: "Show Positive",
      description: "Display positive prompt in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_negative_prompt",
      label: "Show Negative",
      description: "Display negative prompt in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.max_positive_prompt_lines",
      label: "Max Positive Prompt Lines",
      description: "Maximum number of lines to display for the positive prompt in fullscreen.",
      type: "number",
      category: "Full Screen Detail",
      min: 1,
      max: 100
    },
    {
      key: "fullscreen.details.max_negative_prompt_lines",
      label: "Max Negative Prompt Lines",
      description: "Maximum number of lines to display for the negative prompt in fullscreen.",
      type: "number",
      category: "Full Screen Detail",
      min: 1,
      max: 100
    },
    {
      key: "fullscreen.details.show_tags",
      label: "Show Tags",
      description: "Display tags in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    }
  ], L = async () => {
    const m = Object.keys(i).filter((N) => i[N] !== e.settings[N]);
    if (m.length > 0)
      for (const N of m)
        await n(N, i[N]);
    t({ type: "CLOSE_MODAL" });
  }, k = (m, N) => {
    a((F) => ({
      ...F,
      [m]: !N
    }));
  }, S = (m, N, F, H) => {
    m === "gallery.initial_load_count" ? u(N) : m === "gallery.max_load_count" ? w(N) : m === "gallery.lineage_max_depth" ? h(N) : m === "viewer.thumbnail_window_size" ? g(N) : m === "gallery.trash_retention_days" ? j(N) : m === "viewer.details.max_positive_prompt_lines" ? d(N) : m === "viewer.details.max_negative_prompt_lines" ? E(N) : m === "fullscreen.details.max_positive_prompt_lines" ? R(N) : m === "fullscreen.details.max_negative_prompt_lines" && I(N);
    const T = Number.parseInt(N, 10);
    if (!Number.isNaN(T)) {
      let A = T;
      F !== void 0 && A < F && (A = F), H !== void 0 && A > H && (A = H), a(($) => ({
        ...$,
        [m]: A
      }));
    }
  }, b = Q.filter(
    (m) => m.category === r
  );
  return Le.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: L, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (m) => m.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: L,
                children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-tabs", children: [
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
                  className: `meld-tab ${r === "View Details" ? "active" : ""}`,
                  onClick: () => l("View Details"),
                  children: "View Details"
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
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen Detail" ? "active" : ""}`,
                  onClick: () => l("Full Screen Detail"),
                  children: "Full Screen Detail"
                }
              )
            ] }) }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-settings-list", children: b.map((m) => {
                var N;
                return /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
                    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: m.label }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: m.description })
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__control", children: [
                    m.type === "boolean" && /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: !!i[m.key],
                          onChange: () => k(
                            m.key,
                            !!i[m.key]
                          )
                        }
                      ),
                      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
                    ] }),
                    m.type === "number" && /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        type: "number",
                        className: "meld-number-input",
                        value: m.key === "gallery.initial_load_count" ? o : m.key === "gallery.max_load_count" ? f : m.key === "gallery.lineage_max_depth" ? x : m.key === "viewer.thumbnail_window_size" ? v : m.key === "viewer.details.max_positive_prompt_lines" ? c : m.key === "viewer.details.max_negative_prompt_lines" ? p : m.key === "fullscreen.details.max_positive_prompt_lines" ? P : m.key === "fullscreen.details.max_negative_prompt_lines" ? C : m.key === "gallery.trash_retention_days" ? _ : i[m.key],
                        min: m.min,
                        max: m.max,
                        onChange: (F) => S(
                          m.key,
                          F.target.value,
                          m.min,
                          m.max
                        ),
                        onBlur: () => {
                          m.key === "gallery.initial_load_count" ? u(
                            i["gallery.initial_load_count"].toString()
                          ) : m.key === "gallery.max_load_count" ? w(
                            i["gallery.max_load_count"].toString()
                          ) : m.key === "gallery.lineage_max_depth" ? h(
                            i["gallery.lineage_max_depth"].toString()
                          ) : m.key === "viewer.thumbnail_window_size" ? g(
                            i["viewer.thumbnail_window_size"].toString()
                          ) : m.key === "gallery.trash_retention_days" ? j(
                            i["gallery.trash_retention_days"].toString()
                          ) : m.key === "viewer.details.max_positive_prompt_lines" ? d(
                            i["viewer.details.max_positive_prompt_lines"].toString()
                          ) : m.key === "viewer.details.max_negative_prompt_lines" ? E(
                            i["viewer.details.max_negative_prompt_lines"].toString()
                          ) : m.key === "fullscreen.details.max_positive_prompt_lines" ? R(
                            i["fullscreen.details.max_positive_prompt_lines"].toString()
                          ) : m.key === "fullscreen.details.max_negative_prompt_lines" && I(
                            i["fullscreen.details.max_negative_prompt_lines"].toString()
                          );
                        }
                      }
                    ),
                    m.type === "select" && /* @__PURE__ */ s.jsx(
                      "select",
                      {
                        className: "meld-select",
                        value: i[m.key],
                        onChange: (F) => a((H) => ({
                          ...H,
                          [m.key]: F.target.value
                        })),
                        children: (N = m.options) == null ? void 0 : N.map((F) => /* @__PURE__ */ s.jsx("option", { value: F.value, children: F.label }, F.value))
                      }
                    )
                  ] })
                ] }, m.key);
              }) }),
              r === "General" && /* @__PURE__ */ s.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Trash Management" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "View and manage items currently in the trash bin." })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-button meld-button--secondary",
                    onClick: () => {
                      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
                    },
                    children: "View Trash"
                  }
                ) })
              ] }) })
            ] })
          ] })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, Ye = "none", Gc = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = qe(), [i, a] = y.useState([]), [o, u] = y.useState(t), [f, w] = y.useState(""), [x, h] = y.useState(!0), [v, g] = y.useState(!1), _ = y.useRef(null), j = e.length > 1, c = y.useCallback(async () => {
    h(!0);
    try {
      const C = await es();
      a(C);
    } catch (C) {
      console.error("Failed to fetch tags:", C);
    } finally {
      h(!1);
    }
  }, []);
  y.useEffect(() => {
    c();
  }, [c]), y.useEffect(() => {
    _.current && _.current.focus();
    const C = (I) => {
      I.key === "Escape" && (I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", C, { capture: !0 }), () => window.removeEventListener("keydown", C, {
      capture: !0
    });
  }, [n]);
  const d = y.useMemo(() => i.filter(
    (C) => C.name.toLowerCase().includes(f.toLowerCase()) && !o.includes(C.name)
  ), [i, f, o]), p = (C) => {
    const I = C.trim();
    if (I.toLowerCase() === Ye) {
      alert(
        `Tag name '${Ye}' is reserved for search and cannot be used.`
      );
      return;
    }
    I && !o.includes(I) && (u([...o, I]), w(""));
  }, E = (C) => {
    u(o.filter((I) => I !== C));
  }, P = async () => {
    g(!0);
    try {
      if (j) {
        const C = o.filter((Q) => !t.includes(Q)), I = t.filter(
          (Q) => !o.includes(Q)
        );
        await Fp(e, C, I);
      } else
        await Op(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (C) {
      console.error("Failed to update tags:", C), alert("Failed to update tags.");
    } finally {
      g(!1);
    }
  }, R = (C) => {
    C.key === "Enter" && f.trim() ? (C.preventDefault(), C.stopPropagation(), p(f.trim())) : C.key === "Escape" && (C.preventDefault(), C.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return Le.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: (C) => {
          C.stopPropagation(), n();
        },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (C) => C.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Xt, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(Se, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            j && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: j ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((C) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                C,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => E(C),
                    children: /* @__PURE__ */ s.jsx(Se, { size: 12 })
                  }
                )
              ] }, C)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: f,
                    onChange: (C) => w(C.target.value),
                    onKeyDown: R
                  }
                ),
                f.trim() && !o.includes(f.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => p(f),
                    children: [
                      /* @__PURE__ */ s.jsx(ts, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? f ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : d.map((C) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => p(C.name),
                  children: C.name
                },
                C.id
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
                onClick: P,
                disabled: v,
                children: v ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Kc = y.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, o = $e(e);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${i ? "meld-viewer-thumbnail--parent" : ""} ${a ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
          // Default to gallery mode when clicking a thumbnail
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: o, alt: e.filename }),
          (i || a) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              children: i ? /* @__PURE__ */ s.jsx(bc, { size: 12 }) : /* @__PURE__ */ s.jsx(Rc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Kc.displayName = "ThumbnailItem";
const Cm = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = qe(), { viewerImageId: l, images: i, viewerMode: a, lineageImages: o } = e, [u, f] = y.useState(!1), [w, x] = y.useState(
    e.settings["viewer.show_details_by_default"]
  ), [h, v] = y.useState(null), g = h ?? e.settings["viewer.show_thumbnails"], [_, j] = y.useState(!1), [c, d] = y.useState(!1), [p, E] = y.useState(null), P = y.useRef(null), R = y.useRef(!0);
  y.useEffect(() => () => {
    R.current = !1;
  }, []);
  const C = y.useRef(l);
  y.useEffect(() => {
    C.current = l;
  }, [l]);
  const I = y.useMemo(() => a === "lineage" ? o : i.filter(
    (z) => z.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && z.has_children)
  ), [a, o, i, e.settings]), Q = y.useMemo(() => l === null ? -1 : I.findIndex((z) => z.id === l), [I, l]), L = y.useMemo(() => (a === "lineage" && o.length > 0 ? o : i).find((z) => z.id === l), [a, o, i, l]), k = y.useMemo(() => {
    if (!g || Q === -1) return [];
    const z = e.settings["viewer.thumbnail_window_size"], U = Math.floor(z / 2);
    let D = Math.max(0, Q - U);
    const X = Math.min(I.length, D + z);
    return X === I.length && (D = Math.max(0, X - z)), I.slice(D, X).map((B, we) => ({
      img: B,
      absIndex: D + we
    }));
  }, [
    I,
    Q,
    e.settings["viewer.thumbnail_window_size"],
    g
  ]), S = y.useCallback(async () => {
    if (!L) return;
    const z = u ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
    if (z === "confirm") {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [L.id],
          hasLineage: !!(L.parent_id || L.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
      return;
    }
    try {
      const U = e.viewScope === "trash", D = /* @__PURE__ */ new Set([L.id]);
      if (z === "lineage") {
        const X = await ra(L.id);
        for (const B of X)
          D.add(B.id);
      }
      if (!R.current || C.current === null) return;
      if (I.length > D.size) {
        let X = !1;
        for (let B = Q + 1; B < I.length; B++)
          if (!D.has(I[B].id)) {
            t({
              type: "OPEN_VIEWER",
              payload: { id: I[B].id, mode: a }
            }), X = !0;
            break;
          }
        if (!X) {
          for (let B = Q - 1; B >= 0; B--)
            if (!D.has(I[B].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: I[B].id, mode: a }
              }), X = !0;
              break;
            }
        }
        X || t({ type: "CLOSE_VIEWER" });
      } else
        t({ type: "CLOSE_VIEWER" });
      if (await la(Array.from(D), U), !U) {
        const X = I.filter(
          (B) => D.has(B.id)
        );
        E(X);
      }
      t({ type: "REMOVE_IMAGES", payload: Array.from(D) });
    } catch (U) {
      t({
        type: "SET_ERROR",
        payload: U instanceof Error ? U.message : String(U)
      });
    }
  }, [
    L,
    u,
    e.settings,
    e.viewScope,
    I,
    Q,
    a,
    t
  ]), b = y.useCallback(() => {
    L && t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: [L.id],
        tags: L.tags || []
      }
    });
  }, [L, t]), m = y.useCallback(async () => {
    const z = u ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (Q === 0 && a === "gallery" && e.pagination.hasMore && !c && z) {
      d(!0);
      try {
        const U = e.pagination.limit, D = e.pagination.total, X = Math.max(0, D - U), B = await Yr(
          X,
          U,
          e.searchQuery
        );
        if (!R.current || (t({ type: "APPEND_IMAGES", payload: B }), C.current === null)) return;
        if (B.images.length > 0) {
          const we = B.images[B.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: we.id, mode: "gallery" }
          });
        }
      } catch (U) {
        console.error("Failed to jump to end:", U);
      } finally {
        d(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: u } });
  }, [
    Q,
    a,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    c,
    u
  ]), N = y.useCallback(
    (z) => {
      z && "stopPropagation" in z && z.stopPropagation();
      const U = P.current;
      U && (document.fullscreenElement ? document.exitFullscreen() : U.requestFullscreen().catch((D) => {
        console.error(
          `Error attempting to enable full-screen mode: ${D.message}`
        );
      }));
    },
    []
  ), F = y.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: u } });
  }, [t, u]), H = y.useCallback(async () => {
    if (L)
      try {
        const z = L.id;
        I.length > 1 ? F() : t({ type: "CLOSE_VIEWER" }), await ia([z]), t({ type: "REMOVE_IMAGES", payload: [z] });
      } catch (z) {
        t({
          type: "SET_ERROR",
          payload: z instanceof Error ? z.message : String(z)
        });
      }
  }, [L, I.length, F, t]), T = y.useCallback(async () => {
    if (!p || p.length === 0) return;
    const z = p.map((D) => D.id), U = z[0];
    try {
      if (await ia(z), !R.current || (t({ type: "ADD_IMAGES", payload: p }), E(null), !R.current)) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: U, mode: a }
      });
    } catch (D) {
      t({
        type: "SET_ERROR",
        payload: D instanceof Error ? D.message : String(D)
      });
    }
  }, [p, t, a]);
  if (y.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || Q !== -1 && Q >= I.length - 15 && n();
  }, [
    l,
    I.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    Q
  ]), y.useEffect(() => {
    const z = (D) => {
      var ns, rs, ls;
      if (l === null) return;
      const X = ((ns = document.activeElement) == null ? void 0 : ns.tagName) === "INPUT" || ((rs = document.activeElement) == null ? void 0 : rs.tagName) === "TEXTAREA" || ((ls = document.activeElement) == null ? void 0 : ls.isContentEditable), B = D.key === "Delete" || D.key === "Backspace", we = D.key === "ArrowRight" || D.key === "ArrowLeft", ht = D.key === "f" || D.key === "F" || D.key === "i" || D.key === "I" || D.key === "t" || D.key === "T" || D.key === "r" || D.key === "R", Fl = D.key === "Escape", Yc = (D.ctrlKey || D.metaKey) && (D.key === "z" || D.key === "Z");
      if (B || we || ht || Fl || Yc)
        if (X)
          if (Fl) {
            if (e.activeModal.type !== "none") {
              D.preventDefault(), D.stopPropagation();
              return;
            }
            D.preventDefault(), D.stopPropagation(), D.stopImmediatePropagation();
          } else
            return;
        else {
          if (Fl && e.activeModal.type !== "none") {
            D.preventDefault(), D.stopPropagation();
            return;
          }
          D.preventDefault(), D.stopPropagation(), D.stopImmediatePropagation();
        }
      else
        return;
      D.key === "Escape" ? (e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" })) : D.key === "ArrowRight" ? F() : D.key === "ArrowLeft" ? m() : D.key === "f" || D.key === "F" ? N(D) : D.key === "i" || D.key === "I" ? x((Xc) => !Xc) : D.key === "t" || D.key === "T" ? b() : (D.key === "r" || D.key === "R") && e.viewScope === "trash" ? H() : D.key === "Delete" ? S() : (D.ctrlKey || D.metaKey) && (D.key === "z" || D.key === "Z") && T();
    };
    window.addEventListener("keydown", z, { capture: !0 });
    const U = () => {
      const D = !!document.fullscreenElement;
      f(D), x(D ? e.settings["fullscreen.show_details_by_default"] : e.settings["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", U), () => {
      window.removeEventListener("keydown", z, { capture: !0 }), document.removeEventListener("fullscreenchange", U);
    };
  }, [
    l,
    t,
    N,
    F,
    m,
    e.settings,
    S,
    e.activeModal.type,
    T,
    b,
    H,
    e.viewScope
  ]), y.useEffect(() => {
    l !== null && r(l).catch((z) => {
      console.error("Failed to fetch full image details for viewer:", z);
    });
  }, [l, r]), y.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (j(!0), ra(l).then((z) => {
      t({ type: "SET_LINEAGE", payload: z });
    }).catch((z) => {
      console.error("Failed to fetch lineage:", z);
    }).finally(() => {
      j(!1);
    }));
  }, [a, l, o.length, t]), y.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), y.useEffect(() => {
    var z, U;
    if (l !== null) {
      if (g) {
        const D = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        D && D.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((z = document.activeElement) == null ? void 0 : z.tagName) === "CANVAS" && document.activeElement.blur(), (U = P.current) == null || U.focus();
    }
  }, [l, g]), y.useEffect(() => {
    if (l === null || I.length === 0) return;
    const z = I.findIndex(
      (B) => B.id === l
    );
    if (z === -1) return;
    const U = (B) => $e(B), D = [
      z + 1,
      z + 2,
      z - 1
    ], X = setTimeout(() => {
      for (const B of D)
        if (B >= 0 && B < I.length) {
          const we = I[B], ht = new Image();
          ht.src = U(we);
        }
    }, 150);
    return () => clearTimeout(X);
  }, [l, I]), !L) return null;
  const A = $e(L), $ = u ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Le.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: P,
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
              className: `meld-viewer-content ${u ? "meld-viewer-content--fullscreen" : ""} ${g ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (z) => z.stopPropagation(),
              children: [
                $ && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: H,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(Xn, { size: 20 })
                    }
                  ),
                  !u && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => v(!g),
                      type: "button",
                      title: g ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx($c, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: b,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ s.jsx(Xt, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => x(!w),
                      type: "button",
                      title: w ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(lm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: N,
                      type: "button",
                      title: u ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: u ? /* @__PURE__ */ s.jsx(sm, { size: 20 }) : /* @__PURE__ */ s.jsx(am, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
                    }
                  )
                ] }),
                $ && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: m,
                    type: "button",
                    disabled: c,
                    children: /* @__PURE__ */ s.jsx(Fc, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  c && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(Xn, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      src: A,
                      alt: L.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[u ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${c ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                $ && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: F,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(Ac, { size: 32 })
                  }
                ),
                w && /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-viewer-details-overlay ${u ? "meld-viewer-details-overlay--fullscreen" : ""} ${$ ? "" : "meld-viewer-details-overlay--no-icons"}`,
                    children: [
                      (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? `${L.subfolder ? `${L.subfolder}/` : ""}${L.filename}` : L.filename })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_dimensions"] : e.settings["viewer.details.show_dimensions"]) && L.width && L.height && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-value", children: [
                          L.width,
                          " x ",
                          L.height,
                          " px"
                        ] })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_created_at"] : e.settings["viewer.details.show_created_at"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(L.created_at * 1e3).toLocaleString() })
                      ] }),
                      L.deleted_at && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(L.deleted_at * 1e3).toLocaleString() })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_model_name"] : e.settings["viewer.details.show_model_name"]) && L.model_name && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: L.model_name })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_positive_prompt"] : e.settings["viewer.details.show_positive_prompt"]) && (L.positive_prompt || L.positive) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
                        /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_positive_prompt_lines"] : e.settings["viewer.details.max_positive_prompt_lines"]
                            },
                            children: L.positive_prompt || L.positive
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_negative_prompt"] : e.settings["viewer.details.show_negative_prompt"]) && (L.negative_prompt || L.negative) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
                        /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_negative_prompt_lines"] : e.settings["viewer.details.max_negative_prompt_lines"]
                            },
                            children: L.negative_prompt || L.negative
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_tags"] : e.settings["viewer.details.show_tags"]) && L.tags && L.tags.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: L.tags.map((z) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: z }, z)) })
                      ] })
                    ]
                  }
                ),
                !u && g && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                  _ ? /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      style: {
                        padding: "10px",
                        color: "var(--meld-text-secondary)"
                      },
                      children: "Loading lineage..."
                    }
                  ) : k.map(({ img: z }) => /* @__PURE__ */ s.jsx(
                    Kc,
                    {
                      thumb: z,
                      viewerImageId: l,
                      currentImage: L,
                      dispatch: t
                    },
                    z.id
                  )),
                  a === "gallery" && e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(Xn, { className: "animate-spin", size: 20 }) })
                ] }) })
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Qc,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: E
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Hc, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Wc, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Bc, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            Gc,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          )
        ]
      }
    ),
    document.body
  );
}, Nm = () => {
  const { state: e, dispatch: t } = qe(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Mp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (o) {
      console.error("Failed to cancel scan:", o);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, i = n.progress.phase === "linking", a = i ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ s.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ s.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : i ? /* @__PURE__ */ s.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ s.jsx("span", { children: "Scanning..." }) }),
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
        style: { width: `${a}%` }
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
        children: /* @__PURE__ */ s.jsx(fm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(em, { size: 14, className: "meld-success-icon" }),
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
}, jm = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = qe(), [r, l] = y.useState(e.searchQuery), [i, a] = y.useState([]), [o, u] = y.useState(!1), [f, w] = y.useState([]), [x, h] = y.useState(-1), [v, g] = y.useState(!1), [_, j] = y.useState(null), c = y.useRef(null);
  y.useEffect(() => {
    if (_) {
      const m = setTimeout(() => j(null), 3e3);
      return () => clearTimeout(m);
    }
  }, [_]);
  const d = y.useRef(null), p = y.useRef(e.searchQuery), E = r !== p.current;
  y.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      w([]);
      return;
    }
    !r && !e.searchQuery ? _p().then((m) => {
      w(m);
    }) : w([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), y.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), y.useEffect(() => {
    var m;
    (m = c.current) == null || m.focus();
  }, []);
  const P = y.useCallback(
    (m, N = !0) => {
      p.current !== m && (V.log("SearchBar: triggering search", { query: m }), t({ type: "SET_SEARCH_QUERY", payload: m }), N && u(!1), p.current = m);
    },
    [t]
  );
  y.useEffect(() => {
    const m = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"]) {
        a([]), u(!1);
        return;
      }
      const N = r.split(/\s+/), F = N[N.length - 1];
      if (F) {
        const H = F.match(
          /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i
        );
        if (H) {
          const T = H[1].toLowerCase(), A = H[2], $ = await xp(A, T);
          a($), u($.length > 0), h(-1);
        } else
          a([]), u(!1);
      } else
        a([]), u(!1);
    }, 300);
    return () => clearTimeout(m);
  }, [r, e.settings["search.input_suggest"]]);
  const R = (m) => {
    m.key === "Enter" ? P(r) : m.key === "Tab" ? o && x >= 0 && (C(i[x]), m.preventDefault()) : m.key === "ArrowDown" ? o && (h((N) => Math.min(N + 1, i.length - 1)), m.preventDefault()) : m.key === "ArrowUp" ? o && (h((N) => Math.max(N - 1, -1)), m.preventDefault()) : m.key === "Escape" && u(!1);
  }, C = (m) => {
    var D;
    const N = r.split(/\s+/), H = (N.pop() || "").match(/^([-!])/), T = H ? H[1] : "", z = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(m.type) ? m.value : `"${m.value}"`, U = `${[
      ...N,
      `${T}${m.type}:${z}`
    ].join(" ").trim()} `;
    l(U), a([]), u(!1), (D = c.current) == null || D.focus();
  }, I = () => {
    l(""), P("");
  }, Q = async (m, N, F) => {
    m.stopPropagation();
    const H = `Are you sure you want to delete the favorite "${F}"?`;
    if (window.confirm(H))
      try {
        await go(N), await n();
      } catch (T) {
        V.error("Failed to delete favorite", T);
      }
  }, L = async (m, N, F) => {
    m.stopPropagation();
    const H = window.prompt(
      "Enter a new name for this favorite:",
      F
    );
    if (!(H === null || H === F))
      try {
        await Dp(N, H || F), await n();
      } catch (T) {
        V.error("Failed to rename favorite", T);
      }
  }, k = (m, N) => {
    const T = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(m) ? N : `"${N}"`, A = `${m}:${T}`;
    l(A), P(A);
  }, S = async () => {
    if (!e.searchQuery || v) return;
    if (e.favorites.some(
      (N) => N.query === e.searchQuery
    )) {
      const N = e.favorites.find((F) => F.query === e.searchQuery);
      if (N) {
        g(!0);
        try {
          await go(N.id), await n(), j("Favorite removed.");
        } catch (F) {
          V.error("Failed to delete favorite:", F);
        } finally {
          g(!1);
        }
      }
      return;
    }
    g(!0);
    try {
      await Pp(e.searchQuery, e.searchQuery), await n(), j(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (N) {
      V.error("Failed to save favorite:", N);
    } finally {
      g(!1);
    }
  }, b = (m) => {
    switch (m) {
      case "tag":
        return /* @__PURE__ */ s.jsx(Xt, { size: 12 });
      case "model":
        return /* @__PURE__ */ s.jsx(Jp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ s.jsx(pm, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ s.jsx(qp, { size: 12 });
      case "has_source":
        return /* @__PURE__ */ s.jsx(bc, { size: 12 });
      case "has_derivatives":
        return /* @__PURE__ */ s.jsx(Rc, { size: 12 });
      case "sort":
        return /* @__PURE__ */ s.jsx(Zp, { size: 12 });
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
              _ && /* @__PURE__ */ s.jsx(
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
                  children: _
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
                        onClick: () => P(r),
                        style: {
                          background: E ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: E ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: E ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (m) => {
                          m.currentTarget.style.transform = "translateY(-1px)", E ? (m.currentTarget.style.filter = "brightness(1.15)", m.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : m.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (m) => {
                          m.currentTarget.style.transform = "none", E ? (m.currentTarget.style.filter = "none", m.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : m.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (m) => {
                          m.currentTarget.style.transform = "translateY(1px)", m.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (m) => {
                          m.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            En,
                            {
                              size: 16,
                              color: E ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: E ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          E && /* @__PURE__ */ s.jsx(
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
                        ref: c,
                        type: "text",
                        value: r,
                        onChange: (m) => {
                          const N = m.target.value;
                          l(N), N || P("");
                        },
                        onKeyDown: R,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const m = r.split(/\s+/), N = m[m.length - 1];
                          N != null && N.match(
                            /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):/i
                          ) && u(!0);
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
                        onClick: S,
                        disabled: v,
                        title: e.favorites.some((m) => m.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          vo,
                          {
                            size: 16,
                            color: e.favorites.some((m) => m.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((m) => m.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: I,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ s.jsx(Se, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              o && i.length > 0 && /* @__PURE__ */ s.jsx(
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
                  children: i.map((m, N) => /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      onMouseDown: (F) => {
                        F.preventDefault(), C(m);
                      },
                      onMouseEnter: () => h(N),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: N === x ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                                children: b(m.type)
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
                                children: m.type
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                style: {
                                  color: m.value === Ye ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                                  fontSize: "14px",
                                  fontWeight: m.value === Ye ? "bold" : "normal"
                                },
                                children: m.value === Ye ? m.type === "tag" ? `Untagged (${Ye})` : `No ${m.type} (${Ye})` : m.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${m.type}:${m.value}`
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
            children: f.map((m) => /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                onClick: () => k(m.type, m.value),
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
                onMouseEnter: (N) => {
                  N.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", N.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", N.currentTarget.style.color = "var(--meld-text-color)";
                },
                onMouseLeave: (N) => {
                  N.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", N.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", N.currentTarget.style.color = "var(--meld-text-color)";
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: b(m.type)
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
                      children: m.type
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
                      children: m.value
                    }
                  )
                ]
              },
              `${m.type}:${m.value}`
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
                    /* @__PURE__ */ s.jsx(vo, { size: 12, fill: "var(--meld-text-secondary)" }),
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
                  children: e.favorites.map((m) => /* @__PURE__ */ s.jsxs(
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
                        l(m.query), P(m.query);
                      },
                      onMouseEnter: (N) => {
                        N.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", N.currentTarget.style.borderColor = "var(--meld-accent-color)", N.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (N) => {
                        N.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", N.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", N.currentTarget.style.color = "var(--meld-text-color)";
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
                                  children: m.name
                                }
                              ),
                              m.name !== m.query && /* @__PURE__ */ s.jsx(
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
                                  children: m.query
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
                                  onClick: (N) => {
                                    N.stopPropagation(), L(N, m.id, m.name);
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
                                  onMouseEnter: (N) => {
                                    N.currentTarget.style.color = "var(--meld-accent-color)", N.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (N) => {
                                    N.currentTarget.style.color = "var(--meld-text-secondary)", N.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ s.jsx(Vc, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ s.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (N) => {
                                    N.stopPropagation(), Q(N, m.id, m.name);
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
                                  onMouseEnter: (N) => {
                                    N.currentTarget.style.color = "var(--meld-danger-color)", N.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (N) => {
                                    N.currentTarget.style.color = "var(--meld-text-secondary)", N.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ s.jsx(Cn, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    m.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Im = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = y.useState([]), [l, i] = y.useState(!0), [a, o] = y.useState(""), [u, f] = y.useState(""), [w, x] = y.useState(!1), [h, v] = y.useState(null), [g, _] = y.useState(""), [j, c] = y.useState(!1), d = y.useRef(null), p = y.useCallback(async () => {
    i(!0);
    try {
      const k = await es();
      r(k);
    } catch (k) {
      console.error("Failed to fetch tags:", k);
    } finally {
      i(!1);
    }
  }, []);
  y.useEffect(() => {
    p();
  }, [p]), y.useEffect(() => {
    h !== null && d.current && (d.current.focus(), d.current.select());
  }, [h]);
  const E = async (k) => {
    k.preventDefault();
    const S = u.trim();
    if (!(!S || w)) {
      if (S.toLowerCase() === Ye) {
        alert(
          `Tag name '${Ye}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((b) => b.name.toLowerCase() === S.toLowerCase())) {
        alert(`Tag "${S}" already exists.`);
        return;
      }
      x(!0);
      try {
        await zp(S), f(""), await p();
      } catch (b) {
        console.error("Failed to add tag:", b);
      } finally {
        x(!1);
      }
    }
  }, P = async (k, S) => {
    if (confirm(`Are you sure you want to delete tag "${S}"?`))
      try {
        await Rp(k), await p();
      } catch (b) {
        console.error("Failed to delete tag:", b);
      }
  }, R = (k) => {
    v(k.id), _(k.name);
  }, C = () => {
    v(null), _("");
  }, I = async (k) => {
    k.preventDefault();
    const S = g.trim();
    if (!S || h === null || j) return;
    if (S.toLowerCase() === Ye) {
      alert(
        `Tag name '${Ye}' is reserved for search and cannot be used.`
      );
      return;
    }
    const b = n.find((m) => m.id === h);
    if (b && b.name === S) {
      C();
      return;
    }
    if (n.some(
      (m) => m.id !== h && m.name.toLowerCase() === S.toLowerCase()
    )) {
      alert(`Tag "${S}" already exists.`);
      return;
    }
    c(!0);
    try {
      await bp(h, S), C(), await p();
    } catch (m) {
      console.error("Failed to rename tag:", m), alert(m instanceof Error ? m.message : "Failed to rename tag");
    } finally {
      c(!1);
    }
  }, Q = (k) => {
    t(`tag:${k}`);
  }, L = y.useMemo(() => n.filter(
    (k) => k.name.toLowerCase().includes(a.toLowerCase())
  ), [n, a]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Xt, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(Se, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: E, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (k) => f(k.target.value),
            disabled: w
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || w,
            children: [
              /* @__PURE__ */ s.jsx(ts, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: a,
            onChange: (k) => o(k.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: L.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : L.map((k) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: h === k.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: I,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: d,
                className: "meld-tag-rename-input",
                value: g,
                onChange: (S) => _(S.target.value),
                onKeyDown: (S) => S.key === "Escape" && C()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !g.trim(),
                children: /* @__PURE__ */ s.jsx(Oc, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: C,
                disabled: j,
                children: /* @__PURE__ */ s.jsx(Se, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: k.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => Q(k.name),
              children: /* @__PURE__ */ s.jsx(En, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => R(k),
              children: /* @__PURE__ */ s.jsx(Vc, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => P(k.id, k.name),
              children: /* @__PURE__ */ s.jsx(Cn, { size: 14 })
            }
          )
        ] })
      ] }) }, k.id)) })
    ] })
  ] });
}, Tm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = qe(), [i, a] = y.useState("gallery"), [o, u] = y.useState(""), [f, w] = y.useState(e.pagination.limit);
  y.useEffect(() => {
    w(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const x = e.searchQuery.trim() !== "", h = y.useRef(null), v = y.useRef(null), g = y.useMemo(
    () => e.images.filter((j) => e.viewScope === "trash" ? j.exists !== !1 || e.settings["gallery.trash.show_missing"] : j.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && j.has_children)),
    [e.images, e.settings, e.viewScope]
  ), _ = y.useMemo(
    () => g.slice(0, f),
    [g, f]
  );
  return y.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && g.length === 0 && (V.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    g.length,
    r
  ]), V.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: g.length,
    visibleCount: _.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), y.useEffect(() => {
    const j = (c) => {
      c.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), c.preventDefault(), c.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), c.preventDefault(), c.stopPropagation()));
    };
    return window.addEventListener("keydown", j), () => window.removeEventListener("keydown", j);
  }, [e.activeModal.type, e.selectedIds.size, t]), y.useEffect(() => {
    const j = new IntersectionObserver(
      (d) => {
        if (d[0].isIntersecting) {
          if (e.isLoading) {
            V.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          f < g.length ? (V.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: f,
              newLimit: Math.min(
                f + e.pagination.limit,
                g.length
              ),
              totalAvailableLocally: g.length
            }
          ), w((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (V.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : V.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: g.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), c = h.current;
    return c && j.observe(c), () => {
      c && j.unobserve(c);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    f,
    g.length,
    e.pagination.limit,
    e.images.length
  ]), y.useEffect(() => {
    const j = e.viewerImageId ?? v.current;
    if (j !== null && g.some((d) => d.id === j)) {
      const d = g.findIndex((E) => E.id === j);
      if (d >= f) {
        w(
          Math.ceil((d + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${j}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (v.current = null));
    }
    e.viewerImageId !== null && (v.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    g,
    f,
    e.pagination.limit
  ]), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx(Cn, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (j) => l("gallery.trash.show_missing", j.target.checked)
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
                  /* @__PURE__ */ s.jsx(Se, { size: 14 }),
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
                  i === "search" ? (e.searchQuery && (u(e.searchQuery), t({ type: "SET_SEARCH_QUERY", payload: "" })), a("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: x ? "var(--meld-success-color)" : i === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: x ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(En, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const c = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  l("gallery.view_mode", c);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(im, { size: 14 }) : /* @__PURE__ */ s.jsx($c, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(i === "tags" ? "gallery" : "tags"),
                style: {
                  background: "none",
                  border: "none",
                  color: i === "tags" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: i === "tags" ? "bold" : "normal"
                },
                title: "Tag Manager",
                children: /* @__PURE__ */ s.jsx(Xt, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(nm, { size: 14 })
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
                  Xn,
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
                children: /* @__PURE__ */ s.jsx(dm, { size: 14 })
              }
            )
          ] }),
          i === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(jm, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(Nm, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        i === "tags" ? /* @__PURE__ */ s.jsx(
          Im,
          {
            onClose: () => a("gallery"),
            onSearch: (j) => {
              t({ type: "SET_SEARCH_QUERY", payload: j }), a("search");
            }
          }
        ) : e.isLoading && g.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : _.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              children: _.map((j) => /* @__PURE__ */ s.jsx("div", { "data-image-id": j.id, children: /* @__PURE__ */ s.jsx(Sm, { height: 150, children: /* @__PURE__ */ s.jsx(Em, { image: j }) }) }, j.id))
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: h,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                f >= g.length && !e.pagination.hasMore && _.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(km, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(Cm, {}),
        e.viewerImageId === null && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          e.activeModal.type === "parent_selection" && Le.createPortal(
            /* @__PURE__ */ s.jsx(Hc, { imageId: e.activeModal.imageId }),
            document.body
          ),
          e.activeModal.type === "import" && Le.createPortal(/* @__PURE__ */ s.jsx(Wc, {}), document.body),
          e.activeModal.type === "settings" && Le.createPortal(/* @__PURE__ */ s.jsx(Bc, {}), document.body),
          e.activeModal.type === "tag_edit" && Le.createPortal(
            /* @__PURE__ */ s.jsx(
              Gc,
              {
                imageIds: e.activeModal.imageIds,
                initialTags: e.activeModal.tags,
                onClose: () => t({ type: "CLOSE_MODAL" })
              }
            ),
            document.body
          ),
          e.activeModal.type === "delete_confirm" && Le.createPortal(
            /* @__PURE__ */ s.jsx(
              Qc,
              {
                imageIds: e.activeModal.imageIds,
                hasLineage: e.activeModal.hasLineage,
                isPermanent: e.activeModal.isPermanent
              }
            ),
            document.body
          )
        ] })
      ]
    }
  );
};
wo.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, i;
      const n = (l = e.widgets) == null ? void 0 : l.find((a) => a.name === "positive"), r = (i = e.widgets) == null ? void 0 : i.find((a) => a.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const Ol = document.createElement("link");
Ol.rel = "stylesheet";
Ol.type = "text/css";
Ol.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Ol);
let br = null, He = null;
wo.registerExtension({
  name: "ComfyUI.Meld",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const i = n.ui.meld;
        i != null && i.isVisible() && i.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await Lc();
      V.init(n.dev_mode), V.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), V.init(!1);
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
      }, G.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), G.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), G.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), V.log("Import completed.");
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
                  await Pc({
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
          id: "meld-gallery",
          icon: "meld-icon",
          title: "Meld",
          tooltip: "Meld Image Manager",
          type: "custom",
          render: (n) => {
            V.log("render called", {
              el: n,
              galleryRoot: br,
              galleryContainer: He
            }), He || (V.log("galleryContainer not found, creating new one"), He = document.createElement("div"), He.id = "meld-gallery-container", He.style.height = "100%", He.style.width = "100%", He.style.display = "flex", He.style.flexDirection = "column"), n.contains(He) || (V.log("Appending galleryContainer to el"), n.appendChild(He)), br ? V.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (V.log("Creating new gallery root"), br = Mc(He), br.render(
              os.createElement(
                _m,
                null,
                os.createElement(Tm)
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
