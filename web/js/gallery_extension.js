import { api as Y } from "../../../scripts/api.js";
import { app as Io } from "../../../scripts/app.js";
function id(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var To = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r = Symbol.for("react.element"), sd = Symbol.for("react.portal"), ad = Symbol.for("react.fragment"), od = Symbol.for("react.strict_mode"), ud = Symbol.for("react.profiler"), cd = Symbol.for("react.provider"), dd = Symbol.for("react.context"), fd = Symbol.for("react.forward_ref"), pd = Symbol.for("react.suspense"), md = Symbol.for("react.memo"), hd = Symbol.for("react.lazy"), ma = Symbol.iterator;
function gd(e) {
  return e === null || typeof e != "object" ? null : (e = ma && e[ma] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Mo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Lo = Object.assign, Po = {};
function Dn(e, t, n) {
  this.props = e, this.context = t, this.refs = Po, this.updater = n || Mo;
}
Dn.prototype.isReactComponent = {};
Dn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Dn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Do() {
}
Do.prototype = Dn.prototype;
function ms(e, t, n) {
  this.props = e, this.context = t, this.refs = Po, this.updater = n || Mo;
}
var hs = ms.prototype = new Do();
hs.constructor = ms;
Lo(hs, Dn.prototype);
hs.isPureReactComponent = !0;
var ha = Array.isArray, bo = Object.prototype.hasOwnProperty, gs = { current: null }, Ro = { key: !0, ref: !0, __self: !0, __source: !0 };
function zo(e, t, n) {
  var r, l = {}, i = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) bo.call(t, r) && !Ro.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), f = 0; f < o; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: _r, type: e, key: i, ref: a, props: l, _owner: gs.current };
}
function yd(e, t) {
  return { $$typeof: _r, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ys(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _r;
}
function vd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ga = /\/+/g;
function Bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? vd("" + e.key) : t.toString(36);
}
function Qr(e, t, n, r, l) {
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
        case _r:
        case sd:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + Bl(a, 0) : r, ha(l) ? (n = "", e != null && (n = e.replace(ga, "$&/") + "/"), Qr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (ys(l) && (l = yd(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(ga, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", ha(e)) for (var o = 0; o < e.length; o++) {
    i = e[o];
    var u = r + Bl(i, o);
    a += Qr(i, t, n, u, l);
  }
  else if (u = gd(e), typeof u == "function") for (e = u.call(e), o = 0; !(i = e.next()).done; ) i = i.value, u = r + Bl(i, o++), a += Qr(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function jr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Qr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function wd(e) {
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
var Te = { current: null }, Hr = { transition: null }, xd = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: Hr, ReactCurrentOwner: gs };
function Oo() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = { map: jr, forEach: function(e, t, n) {
  jr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return jr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return jr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ys(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
K.Component = Dn;
K.Fragment = ad;
K.Profiler = ud;
K.PureComponent = ms;
K.StrictMode = od;
K.Suspense = pd;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xd;
K.act = Oo;
K.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Lo({}, e.props), l = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = gs.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) bo.call(t, u) && !Ro.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var f = 0; f < u; f++) o[f] = arguments[f + 2];
    r.children = o;
  }
  return { $$typeof: _r, type: e.type, key: l, ref: i, props: r, _owner: a };
};
K.createContext = function(e) {
  return e = { $$typeof: dd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: cd, _context: e }, e.Consumer = e;
};
K.createElement = zo;
K.createFactory = function(e) {
  var t = zo.bind(null, e);
  return t.type = e, t;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(e) {
  return { $$typeof: fd, render: e };
};
K.isValidElement = ys;
K.lazy = function(e) {
  return { $$typeof: hd, _payload: { _status: -1, _result: e }, _init: wd };
};
K.memo = function(e, t) {
  return { $$typeof: md, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function(e) {
  var t = Hr.transition;
  Hr.transition = {};
  try {
    e();
  } finally {
    Hr.transition = t;
  }
};
K.unstable_act = Oo;
K.useCallback = function(e, t) {
  return Te.current.useCallback(e, t);
};
K.useContext = function(e) {
  return Te.current.useContext(e);
};
K.useDebugValue = function() {
};
K.useDeferredValue = function(e) {
  return Te.current.useDeferredValue(e);
};
K.useEffect = function(e, t) {
  return Te.current.useEffect(e, t);
};
K.useId = function() {
  return Te.current.useId();
};
K.useImperativeHandle = function(e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function(e, t) {
  return Te.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function(e, t) {
  return Te.current.useLayoutEffect(e, t);
};
K.useMemo = function(e, t) {
  return Te.current.useMemo(e, t);
};
K.useReducer = function(e, t, n) {
  return Te.current.useReducer(e, t, n);
};
K.useRef = function(e) {
  return Te.current.useRef(e);
};
K.useState = function(e) {
  return Te.current.useState(e);
};
K.useSyncExternalStore = function(e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function() {
  return Te.current.useTransition();
};
K.version = "18.3.1";
To.exports = K;
var y = To.exports;
const ya = /* @__PURE__ */ id(y);
var Fo = { exports: {} }, We = {}, Ao = { exports: {} }, $o = {};
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
  function t(N, A) {
    var $ = N.length;
    N.push(A);
    e: for (; 0 < $; ) {
      var j = $ - 1 >>> 1, U = N[j];
      if (0 < l(U, A)) N[j] = A, N[$] = U, $ = j;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var A = N[0], $ = N.pop();
    if ($ !== A) {
      N[0] = $;
      e: for (var j = 0, U = N.length, H = U >>> 1; j < H; ) {
        var ue = 2 * (j + 1) - 1, ze = N[ue], L = ue + 1, Q = N[L];
        if (0 > l(ze, $)) L < U && 0 > l(Q, ze) ? (N[j] = Q, N[L] = $, j = L) : (N[j] = ze, N[ue] = $, j = ue);
        else if (L < U && 0 > l(Q, $)) N[j] = Q, N[L] = $, j = L;
        else break e;
      }
    }
    return A;
  }
  function l(N, A) {
    var $ = N.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : N.id - A.id;
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
  var u = [], f = [], w = 1, x = null, h = 3, v = !1, g = !1, S = !1, I = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var A = n(f); A !== null; ) {
      if (A.callback === null) r(f);
      else if (A.startTime <= N) r(f), A.sortIndex = A.expirationTime, t(u, A);
      else break;
      A = n(f);
    }
  }
  function E(N) {
    if (S = !1, m(N), !g) if (n(u) !== null) g = !0, V(D);
    else {
      var A = n(f);
      A !== null && Z(E, A.startTime - N);
    }
  }
  function D(N, A) {
    g = !1, S && (S = !1, c(b), b = -1), v = !0;
    var $ = h;
    try {
      for (m(A), x = n(u); x !== null && (!(x.expirationTime > A) || N && !_()); ) {
        var j = x.callback;
        if (typeof j == "function") {
          x.callback = null, h = x.priorityLevel;
          var U = j(x.expirationTime <= A);
          A = e.unstable_now(), typeof U == "function" ? x.callback = U : x === n(u) && r(u), m(A);
        } else r(u);
        x = n(u);
      }
      if (x !== null) var H = !0;
      else {
        var ue = n(f);
        ue !== null && Z(E, ue.startTime - A), H = !1;
      }
      return H;
    } finally {
      x = null, h = $, v = !1;
    }
  }
  var z = !1, C = null, b = -1, G = 5, O = -1;
  function _() {
    return !(e.unstable_now() - O < G);
  }
  function p() {
    if (C !== null) {
      var N = e.unstable_now();
      O = N;
      var A = !0;
      try {
        A = C(!0, N);
      } finally {
        A ? R() : (z = !1, C = null);
      }
    } else z = !1;
  }
  var R;
  if (typeof d == "function") R = function() {
    d(p);
  };
  else if (typeof MessageChannel < "u") {
    var k = new MessageChannel(), P = k.port2;
    k.port1.onmessage = p, R = function() {
      P.postMessage(null);
    };
  } else R = function() {
    I(p, 0);
  };
  function V(N) {
    C = N, z || (z = !0, R());
  }
  function Z(N, A) {
    b = I(function() {
      N(e.unstable_now());
    }, A);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, V(D));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(N) {
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
      return N();
    } finally {
      h = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, A) {
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
    var $ = h;
    h = N;
    try {
      return A();
    } finally {
      h = $;
    }
  }, e.unstable_scheduleCallback = function(N, A, $) {
    var j = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? j + $ : j) : $ = j, N) {
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
    return U = $ + U, N = { id: w++, callback: A, priorityLevel: N, startTime: $, expirationTime: U, sortIndex: -1 }, $ > j ? (N.sortIndex = $, t(f, N), n(u) === null && N === n(f) && (S ? (c(b), b = -1) : S = !0, Z(E, $ - j))) : (N.sortIndex = U, t(u, N), g || v || (g = !0, V(D))), N;
  }, e.unstable_shouldYield = _, e.unstable_wrapCallback = function(N) {
    var A = h;
    return function() {
      var $ = h;
      h = A;
      try {
        return N.apply(this, arguments);
      } finally {
        h = $;
      }
    };
  };
})($o);
Ao.exports = $o;
var _d = Ao.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sd = y, Ue = _d;
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Vo = /* @__PURE__ */ new Set(), lr = {};
function en(e, t) {
  En(e, t), En(e + "Capture", t);
}
function En(e, t) {
  for (lr[e] = t, e = 0; e < t.length; e++) Vo.add(t[e]);
}
var yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wi = Object.prototype.hasOwnProperty, kd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, va = {}, wa = {};
function Ed(e) {
  return wi.call(wa, e) ? !0 : wi.call(va, e) ? !1 : kd.test(e) ? wa[e] = !0 : (va[e] = !0, !1);
}
function Cd(e, t, n, r) {
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
function jd(e, t, n, r) {
  if (t === null || typeof t > "u" || Cd(e, t, n, r)) return !0;
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
function Me(e, t, n, r, l, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  xe[e] = new Me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  xe[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  xe[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  xe[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  xe[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  xe[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  xe[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  xe[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  xe[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vs = /[\-:]([a-z])/g;
function ws(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    vs,
    ws
  );
  xe[t] = new Me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(vs, ws);
  xe[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(vs, ws);
  xe[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  xe[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  xe[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xs(e, t, n, r) {
  var l = xe.hasOwnProperty(t) ? xe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jd(t, n, l, r) && (n = null), r || l === null ? Ed(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = Sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Nr = Symbol.for("react.element"), sn = Symbol.for("react.portal"), an = Symbol.for("react.fragment"), _s = Symbol.for("react.strict_mode"), xi = Symbol.for("react.profiler"), Uo = Symbol.for("react.provider"), Wo = Symbol.for("react.context"), Ss = Symbol.for("react.forward_ref"), _i = Symbol.for("react.suspense"), Si = Symbol.for("react.suspense_list"), ks = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), Qo = Symbol.for("react.offscreen"), xa = Symbol.iterator;
function zn(e) {
  return e === null || typeof e != "object" ? null : (e = xa && e[xa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, Kl;
function Qn(e) {
  if (Kl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Kl = t && t[1] || "";
  }
  return `
` + Kl + e;
}
var Yl = !1;
function Xl(e, t) {
  if (!e || Yl) return "";
  Yl = !0;
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
    Yl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Qn(e) : "";
}
function Nd(e) {
  switch (e.tag) {
    case 5:
      return Qn(e.type);
    case 16:
      return Qn("Lazy");
    case 13:
      return Qn("Suspense");
    case 19:
      return Qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Xl(e.type, !1), e;
    case 11:
      return e = Xl(e.type.render, !1), e;
    case 1:
      return e = Xl(e.type, !0), e;
    default:
      return "";
  }
}
function ki(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case an:
      return "Fragment";
    case sn:
      return "Portal";
    case xi:
      return "Profiler";
    case _s:
      return "StrictMode";
    case _i:
      return "Suspense";
    case Si:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Wo:
      return (e.displayName || "Context") + ".Consumer";
    case Uo:
      return (e._context.displayName || "Context") + ".Provider";
    case Ss:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ks:
      return t = e.displayName || null, t !== null ? t : ki(e.type) || "Memo";
    case kt:
      t = e._payload, e = e._init;
      try {
        return ki(e(t));
      } catch {
      }
  }
  return null;
}
function Id(e) {
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
      return ki(t);
    case 8:
      return t === _s ? "StrictMode" : "Mode";
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
function Ot(e) {
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
function Ho(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Td(e) {
  var t = Ho(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ir(e) {
  e._valueTracker || (e._valueTracker = Td(e));
}
function Go(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ho(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function rl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ei(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function _a(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ot(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Bo(e, t) {
  t = t.checked, t != null && xs(e, "checked", t, !1);
}
function Ci(e, t) {
  Bo(e, t);
  var n = Ot(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ji(e, t.type, n) : t.hasOwnProperty("defaultValue") && ji(e, t.type, Ot(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Sa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ji(e, t, n) {
  (t !== "number" || rl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hn = Array.isArray;
function vn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ot(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ni(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ka(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(M(92));
      if (Hn(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ot(n) };
}
function Ko(e, t) {
  var n = Ot(t.value), r = Ot(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ea(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yo(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Yo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Tr, Xo = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Tr = Tr || document.createElement("div"), Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Tr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Kn = {
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
}, Md = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kn).forEach(function(e) {
  Md.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Kn[t] = Kn[e];
  });
});
function Jo(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kn.hasOwnProperty(e) && Kn[e] ? ("" + t).trim() : t + "px";
}
function Zo(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Jo(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Ld = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ti(e, t) {
  if (t) {
    if (Ld[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Mi(e, t) {
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
var Li = null;
function Es(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Pi = null, wn = null, xn = null;
function Ca(e) {
  if (e = Er(e)) {
    if (typeof Pi != "function") throw Error(M(280));
    var t = e.stateNode;
    t && (t = Pl(t), Pi(e.stateNode, e.type, t));
  }
}
function qo(e) {
  wn ? xn ? xn.push(e) : xn = [e] : wn = e;
}
function eu() {
  if (wn) {
    var e = wn, t = xn;
    if (xn = wn = null, Ca(e), t) for (e = 0; e < t.length; e++) Ca(t[e]);
  }
}
function tu(e, t) {
  return e(t);
}
function nu() {
}
var Jl = !1;
function ru(e, t, n) {
  if (Jl) return e(t, n);
  Jl = !0;
  try {
    return tu(e, t, n);
  } finally {
    Jl = !1, (wn !== null || xn !== null) && (nu(), eu());
  }
}
function sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pl(n);
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
var Di = !1;
if (yt) try {
  var On = {};
  Object.defineProperty(On, "passive", { get: function() {
    Di = !0;
  } }), window.addEventListener("test", On, On), window.removeEventListener("test", On, On);
} catch {
  Di = !1;
}
function Pd(e, t, n, r, l, i, a, o, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (w) {
    this.onError(w);
  }
}
var Yn = !1, ll = null, il = !1, bi = null, Dd = { onError: function(e) {
  Yn = !0, ll = e;
} };
function bd(e, t, n, r, l, i, a, o, u) {
  Yn = !1, ll = null, Pd.apply(Dd, arguments);
}
function Rd(e, t, n, r, l, i, a, o, u) {
  if (bd.apply(this, arguments), Yn) {
    if (Yn) {
      var f = ll;
      Yn = !1, ll = null;
    } else throw Error(M(198));
    il || (il = !0, bi = f);
  }
}
function tn(e) {
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
function lu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ja(e) {
  if (tn(e) !== e) throw Error(M(188));
}
function zd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = tn(e), t === null) throw Error(M(188));
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
        if (i === n) return ja(l), e;
        if (i === r) return ja(l), t;
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
function iu(e) {
  return e = zd(e), e !== null ? su(e) : null;
}
function su(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = su(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var au = Ue.unstable_scheduleCallback, Na = Ue.unstable_cancelCallback, Od = Ue.unstable_shouldYield, Fd = Ue.unstable_requestPaint, fe = Ue.unstable_now, Ad = Ue.unstable_getCurrentPriorityLevel, Cs = Ue.unstable_ImmediatePriority, ou = Ue.unstable_UserBlockingPriority, sl = Ue.unstable_NormalPriority, $d = Ue.unstable_LowPriority, uu = Ue.unstable_IdlePriority, Il = null, ct = null;
function Vd(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function") try {
    ct.onCommitFiberRoot(Il, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var rt = Math.clz32 ? Math.clz32 : Qd, Ud = Math.log, Wd = Math.LN2;
function Qd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ud(e) / Wd | 0) | 0;
}
var Mr = 64, Lr = 4194304;
function Gn(e) {
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
function al(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? r = Gn(o) : (i &= a, i !== 0 && (r = Gn(i)));
  } else a = n & ~l, a !== 0 ? r = Gn(a) : i !== 0 && (r = Gn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - rt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Hd(e, t) {
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
function Gd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - rt(i), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = Hd(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o;
  }
}
function Ri(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function cu() {
  var e = Mr;
  return Mr <<= 1, !(Mr & 4194240) && (Mr = 64), e;
}
function Zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Sr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - rt(t), e[t] = n;
}
function Bd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - rt(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function js(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ee = 0;
function du(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var fu, Ns, pu, mu, hu, zi = !1, Pr = [], Tt = null, Mt = null, Lt = null, ar = /* @__PURE__ */ new Map(), or = /* @__PURE__ */ new Map(), Ct = [], Kd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ia(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tt = null;
      break;
    case "dragenter":
    case "dragleave":
      Mt = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      ar.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      or.delete(t.pointerId);
  }
}
function Fn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Er(t), t !== null && Ns(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Yd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Tt = Fn(Tt, e, t, n, r, l), !0;
    case "dragenter":
      return Mt = Fn(Mt, e, t, n, r, l), !0;
    case "mouseover":
      return Lt = Fn(Lt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return ar.set(i, Fn(ar.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, or.set(i, Fn(or.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function gu(e) {
  var t = Qt(e.target);
  if (t !== null) {
    var n = tn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = lu(n), t !== null) {
          e.blockedOn = t, hu(e.priority, function() {
            pu(n);
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
function Gr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Li = r, n.target.dispatchEvent(r), Li = null;
    } else return t = Er(n), t !== null && Ns(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ta(e, t, n) {
  Gr(e) && n.delete(t);
}
function Xd() {
  zi = !1, Tt !== null && Gr(Tt) && (Tt = null), Mt !== null && Gr(Mt) && (Mt = null), Lt !== null && Gr(Lt) && (Lt = null), ar.forEach(Ta), or.forEach(Ta);
}
function An(e, t) {
  e.blockedOn === t && (e.blockedOn = null, zi || (zi = !0, Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Xd)));
}
function ur(e) {
  function t(l) {
    return An(l, e);
  }
  if (0 < Pr.length) {
    An(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Tt !== null && An(Tt, e), Mt !== null && An(Mt, e), Lt !== null && An(Lt, e), ar.forEach(t), or.forEach(t), n = 0; n < Ct.length; n++) r = Ct[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ct.length && (n = Ct[0], n.blockedOn === null); ) gu(n), n.blockedOn === null && Ct.shift();
}
var _n = _t.ReactCurrentBatchConfig, ol = !0;
function Jd(e, t, n, r) {
  var l = ee, i = _n.transition;
  _n.transition = null;
  try {
    ee = 1, Is(e, t, n, r);
  } finally {
    ee = l, _n.transition = i;
  }
}
function Zd(e, t, n, r) {
  var l = ee, i = _n.transition;
  _n.transition = null;
  try {
    ee = 4, Is(e, t, n, r);
  } finally {
    ee = l, _n.transition = i;
  }
}
function Is(e, t, n, r) {
  if (ol) {
    var l = Oi(e, t, n, r);
    if (l === null) oi(e, t, r, ul, n), Ia(e, r);
    else if (Yd(l, e, t, n, r)) r.stopPropagation();
    else if (Ia(e, r), t & 4 && -1 < Kd.indexOf(e)) {
      for (; l !== null; ) {
        var i = Er(l);
        if (i !== null && fu(i), i = Oi(e, t, n, r), i === null && oi(e, t, r, ul, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else oi(e, t, r, null, n);
  }
}
var ul = null;
function Oi(e, t, n, r) {
  if (ul = null, e = Es(r), e = Qt(e), e !== null) if (t = tn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = lu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ul = e, null;
}
function yu(e) {
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
      switch (Ad()) {
        case Cs:
          return 1;
        case ou:
          return 4;
        case sl:
        case $d:
          return 16;
        case uu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nt = null, Ts = null, Br = null;
function vu() {
  if (Br) return Br;
  var e, t = Ts, n = t.length, r, l = "value" in Nt ? Nt.value : Nt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[i - r]; r++) ;
  return Br = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Kr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Dr() {
  return !0;
}
function Ma() {
  return !1;
}
function Qe(e) {
  function t(n, r, l, i, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Dr : Ma, this.isPropagationStopped = Ma, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Dr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Dr);
  }, persist: function() {
  }, isPersistent: Dr }), t;
}
var bn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ms = Qe(bn), kr = oe({}, bn, { view: 0, detail: 0 }), qd = Qe(kr), ql, ei, $n, Tl = oe({}, kr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ls, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== $n && ($n && e.type === "mousemove" ? (ql = e.screenX - $n.screenX, ei = e.screenY - $n.screenY) : ei = ql = 0, $n = e), ql);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ei;
} }), La = Qe(Tl), ef = oe({}, Tl, { dataTransfer: 0 }), tf = Qe(ef), nf = oe({}, kr, { relatedTarget: 0 }), ti = Qe(nf), rf = oe({}, bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lf = Qe(rf), sf = oe({}, bn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), af = Qe(sf), of = oe({}, bn, { data: 0 }), Pa = Qe(of), uf = {
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
}, cf = {
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
}, df = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ff(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = df[e]) ? !!t[e] : !1;
}
function Ls() {
  return ff;
}
var pf = oe({}, kr, { key: function(e) {
  if (e.key) {
    var t = uf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Kr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ls, charCode: function(e) {
  return e.type === "keypress" ? Kr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), mf = Qe(pf), hf = oe({}, Tl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Da = Qe(hf), gf = oe({}, kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ls }), yf = Qe(gf), vf = oe({}, bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wf = Qe(vf), xf = oe({}, Tl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), _f = Qe(xf), Sf = [9, 13, 27, 32], Ps = yt && "CompositionEvent" in window, Xn = null;
yt && "documentMode" in document && (Xn = document.documentMode);
var kf = yt && "TextEvent" in window && !Xn, wu = yt && (!Ps || Xn && 8 < Xn && 11 >= Xn), ba = " ", Ra = !1;
function xu(e, t) {
  switch (e) {
    case "keyup":
      return Sf.indexOf(t.keyCode) !== -1;
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
function _u(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var on = !1;
function Ef(e, t) {
  switch (e) {
    case "compositionend":
      return _u(t);
    case "keypress":
      return t.which !== 32 ? null : (Ra = !0, ba);
    case "textInput":
      return e = t.data, e === ba && Ra ? null : e;
    default:
      return null;
  }
}
function Cf(e, t) {
  if (on) return e === "compositionend" || !Ps && xu(e, t) ? (e = vu(), Br = Ts = Nt = null, on = !1, e) : null;
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
      return wu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jf[e.type] : t === "textarea";
}
function Su(e, t, n, r) {
  qo(r), t = cl(t, "onChange"), 0 < t.length && (n = new Ms("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Jn = null, cr = null;
function Nf(e) {
  Du(e, 0);
}
function Ml(e) {
  var t = dn(e);
  if (Go(t)) return e;
}
function If(e, t) {
  if (e === "change") return t;
}
var ku = !1;
if (yt) {
  var ni;
  if (yt) {
    var ri = "oninput" in document;
    if (!ri) {
      var Oa = document.createElement("div");
      Oa.setAttribute("oninput", "return;"), ri = typeof Oa.oninput == "function";
    }
    ni = ri;
  } else ni = !1;
  ku = ni && (!document.documentMode || 9 < document.documentMode);
}
function Fa() {
  Jn && (Jn.detachEvent("onpropertychange", Eu), cr = Jn = null);
}
function Eu(e) {
  if (e.propertyName === "value" && Ml(cr)) {
    var t = [];
    Su(t, cr, e, Es(e)), ru(Nf, t);
  }
}
function Tf(e, t, n) {
  e === "focusin" ? (Fa(), Jn = t, cr = n, Jn.attachEvent("onpropertychange", Eu)) : e === "focusout" && Fa();
}
function Mf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ml(cr);
}
function Lf(e, t) {
  if (e === "click") return Ml(t);
}
function Pf(e, t) {
  if (e === "input" || e === "change") return Ml(t);
}
function Df(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var it = typeof Object.is == "function" ? Object.is : Df;
function dr(e, t) {
  if (it(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!wi.call(t, l) || !it(e[l], t[l])) return !1;
  }
  return !0;
}
function Aa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $a(e, t) {
  var n = Aa(e);
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
    n = Aa(n);
  }
}
function Cu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ju() {
  for (var e = window, t = rl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = rl(e.document);
  }
  return t;
}
function Ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function bf(e) {
  var t = ju(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Cu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ds(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = $a(n, i);
        var a = $a(
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
var Rf = yt && "documentMode" in document && 11 >= document.documentMode, un = null, Fi = null, Zn = null, Ai = !1;
function Va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ai || un == null || un !== rl(r) || (r = un, "selectionStart" in r && Ds(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Zn && dr(Zn, r) || (Zn = r, r = cl(Fi, "onSelect"), 0 < r.length && (t = new Ms("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = un)));
}
function br(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var cn = { animationend: br("Animation", "AnimationEnd"), animationiteration: br("Animation", "AnimationIteration"), animationstart: br("Animation", "AnimationStart"), transitionend: br("Transition", "TransitionEnd") }, li = {}, Nu = {};
yt && (Nu = document.createElement("div").style, "AnimationEvent" in window || (delete cn.animationend.animation, delete cn.animationiteration.animation, delete cn.animationstart.animation), "TransitionEvent" in window || delete cn.transitionend.transition);
function Ll(e) {
  if (li[e]) return li[e];
  if (!cn[e]) return e;
  var t = cn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nu) return li[e] = t[n];
  return e;
}
var Iu = Ll("animationend"), Tu = Ll("animationiteration"), Mu = Ll("animationstart"), Lu = Ll("transitionend"), Pu = /* @__PURE__ */ new Map(), Ua = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function At(e, t) {
  Pu.set(e, t), en(t, [e]);
}
for (var ii = 0; ii < Ua.length; ii++) {
  var si = Ua[ii], zf = si.toLowerCase(), Of = si[0].toUpperCase() + si.slice(1);
  At(zf, "on" + Of);
}
At(Iu, "onAnimationEnd");
At(Tu, "onAnimationIteration");
At(Mu, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(Lu, "onTransitionEnd");
En("onMouseEnter", ["mouseout", "mouseover"]);
En("onMouseLeave", ["mouseout", "mouseover"]);
En("onPointerEnter", ["pointerout", "pointerover"]);
En("onPointerLeave", ["pointerout", "pointerover"]);
en("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
en("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
en("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ff = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));
function Wa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Rd(r, t, void 0, e), e.currentTarget = null;
}
function Du(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, f = o.currentTarget;
        if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
        Wa(l, o, f), i = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, f = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
        Wa(l, o, f), i = u;
      }
    }
  }
  if (il) throw e = bi, il = !1, bi = null, e;
}
function re(e, t) {
  var n = t[Qi];
  n === void 0 && (n = t[Qi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (bu(t, e, 2, !1), n.add(r));
}
function ai(e, t, n) {
  var r = 0;
  t && (r |= 4), bu(n, e, r, t);
}
var Rr = "_reactListening" + Math.random().toString(36).slice(2);
function fr(e) {
  if (!e[Rr]) {
    e[Rr] = !0, Vo.forEach(function(n) {
      n !== "selectionchange" && (Ff.has(n) || ai(n, !1, e), ai(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rr] || (t[Rr] = !0, ai("selectionchange", !1, t));
  }
}
function bu(e, t, n, r) {
  switch (yu(t)) {
    case 1:
      var l = Jd;
      break;
    case 4:
      l = Zd;
      break;
    default:
      l = Is;
  }
  n = l.bind(null, t, n, e), l = void 0, !Di || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function oi(e, t, n, r, l) {
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
        if (a = Qt(o), a === null) return;
        if (u = a.tag, u === 5 || u === 6) {
          r = i = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  ru(function() {
    var f = i, w = Es(n), x = [];
    e: {
      var h = Pu.get(e);
      if (h !== void 0) {
        var v = Ms, g = e;
        switch (e) {
          case "keypress":
            if (Kr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = mf;
            break;
          case "focusin":
            g = "focus", v = ti;
            break;
          case "focusout":
            g = "blur", v = ti;
            break;
          case "beforeblur":
          case "afterblur":
            v = ti;
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
            v = La;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = tf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = yf;
            break;
          case Iu:
          case Tu:
          case Mu:
            v = lf;
            break;
          case Lu:
            v = wf;
            break;
          case "scroll":
            v = qd;
            break;
          case "wheel":
            v = _f;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = af;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Da;
        }
        var S = (t & 4) !== 0, I = !S && e === "scroll", c = S ? h !== null ? h + "Capture" : null : h;
        S = [];
        for (var d = f, m; d !== null; ) {
          m = d;
          var E = m.stateNode;
          if (m.tag === 5 && E !== null && (m = E, c !== null && (E = sr(d, c), E != null && S.push(pr(d, E, m)))), I) break;
          d = d.return;
        }
        0 < S.length && (h = new v(h, g, null, n, w), x.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== Li && (g = n.relatedTarget || n.fromElement) && (Qt(g) || g[vt])) break e;
        if ((v || h) && (h = w.window === w ? w : (h = w.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = f, g = g ? Qt(g) : null, g !== null && (I = tn(g), g !== I || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = f), v !== g)) {
          if (S = La, E = "onMouseLeave", c = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (S = Da, E = "onPointerLeave", c = "onPointerEnter", d = "pointer"), I = v == null ? h : dn(v), m = g == null ? h : dn(g), h = new S(E, d + "leave", v, n, w), h.target = I, h.relatedTarget = m, E = null, Qt(w) === f && (S = new S(c, d + "enter", g, n, w), S.target = m, S.relatedTarget = I, E = S), I = E, v && g) t: {
            for (S = v, c = g, d = 0, m = S; m; m = ln(m)) d++;
            for (m = 0, E = c; E; E = ln(E)) m++;
            for (; 0 < d - m; ) S = ln(S), d--;
            for (; 0 < m - d; ) c = ln(c), m--;
            for (; d--; ) {
              if (S === c || c !== null && S === c.alternate) break t;
              S = ln(S), c = ln(c);
            }
            S = null;
          }
          else S = null;
          v !== null && Qa(x, h, v, S, !1), g !== null && I !== null && Qa(x, I, g, S, !0);
        }
      }
      e: {
        if (h = f ? dn(f) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var D = If;
        else if (za(h)) if (ku) D = Pf;
        else {
          D = Mf;
          var z = Tf;
        }
        else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (D = Lf);
        if (D && (D = D(e, f))) {
          Su(x, D, n, w);
          break e;
        }
        z && z(e, h, f), e === "focusout" && (z = h._wrapperState) && z.controlled && h.type === "number" && ji(h, "number", h.value);
      }
      switch (z = f ? dn(f) : window, e) {
        case "focusin":
          (za(z) || z.contentEditable === "true") && (un = z, Fi = f, Zn = null);
          break;
        case "focusout":
          Zn = Fi = un = null;
          break;
        case "mousedown":
          Ai = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ai = !1, Va(x, n, w);
          break;
        case "selectionchange":
          if (Rf) break;
        case "keydown":
        case "keyup":
          Va(x, n, w);
      }
      var C;
      if (Ps) e: {
        switch (e) {
          case "compositionstart":
            var b = "onCompositionStart";
            break e;
          case "compositionend":
            b = "onCompositionEnd";
            break e;
          case "compositionupdate":
            b = "onCompositionUpdate";
            break e;
        }
        b = void 0;
      }
      else on ? xu(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (wu && n.locale !== "ko" && (on || b !== "onCompositionStart" ? b === "onCompositionEnd" && on && (C = vu()) : (Nt = w, Ts = "value" in Nt ? Nt.value : Nt.textContent, on = !0)), z = cl(f, b), 0 < z.length && (b = new Pa(b, e, null, n, w), x.push({ event: b, listeners: z }), C ? b.data = C : (C = _u(n), C !== null && (b.data = C)))), (C = kf ? Ef(e, n) : Cf(e, n)) && (f = cl(f, "onBeforeInput"), 0 < f.length && (w = new Pa("onBeforeInput", "beforeinput", null, n, w), x.push({ event: w, listeners: f }), w.data = C));
    }
    Du(x, t);
  });
}
function pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = sr(e, n), i != null && r.unshift(pr(e, i, l)), i = sr(e, t), i != null && r.push(pr(e, i, l))), e = e.return;
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qa(e, t, n, r, l) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, f = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && f !== null && (o = f, l ? (u = sr(n, i), u != null && a.unshift(pr(n, u, o))) : l || (u = sr(n, i), u != null && a.push(pr(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Af = /\r\n?/g, $f = /\u0000|\uFFFD/g;
function Ha(e) {
  return (typeof e == "string" ? e : "" + e).replace(Af, `
`).replace($f, "");
}
function zr(e, t, n) {
  if (t = Ha(t), Ha(e) !== t && n) throw Error(M(425));
}
function dl() {
}
var $i = null, Vi = null;
function Ui(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Wi = typeof setTimeout == "function" ? setTimeout : void 0, Vf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ga = typeof Promise == "function" ? Promise : void 0, Uf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ga < "u" ? function(e) {
  return Ga.resolve(null).then(e).catch(Wf);
} : Wi;
function Wf(e) {
  setTimeout(function() {
    throw e;
  });
}
function ui(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), ur(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  ur(t);
}
function Pt(e) {
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
function Ba(e) {
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
var Rn = Math.random().toString(36).slice(2), ut = "__reactFiber$" + Rn, mr = "__reactProps$" + Rn, vt = "__reactContainer$" + Rn, Qi = "__reactEvents$" + Rn, Qf = "__reactListeners$" + Rn, Hf = "__reactHandles$" + Rn;
function Qt(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[vt] || n[ut]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ba(e); e !== null; ) {
        if (n = e[ut]) return n;
        e = Ba(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Er(e) {
  return e = e[ut] || e[vt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Pl(e) {
  return e[mr] || null;
}
var Hi = [], fn = -1;
function $t(e) {
  return { current: e };
}
function le(e) {
  0 > fn || (e.current = Hi[fn], Hi[fn] = null, fn--);
}
function te(e, t) {
  fn++, Hi[fn] = e.current, e.current = t;
}
var Ft = {}, Ee = $t(Ft), De = $t(!1), Yt = Ft;
function Cn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function be(e) {
  return e = e.childContextTypes, e != null;
}
function fl() {
  le(De), le(Ee);
}
function Ka(e, t, n) {
  if (Ee.current !== Ft) throw Error(M(168));
  te(Ee, t), te(De, n);
}
function Ru(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(M(108, Id(e) || "Unknown", l));
  return oe({}, n, r);
}
function pl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, Yt = Ee.current, te(Ee, e), te(De, De.current), !0;
}
function Ya(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n ? (e = Ru(e, t, Yt), r.__reactInternalMemoizedMergedChildContext = e, le(De), le(Ee), te(Ee, e)) : le(De), te(De, n);
}
var pt = null, Dl = !1, ci = !1;
function zu(e) {
  pt === null ? pt = [e] : pt.push(e);
}
function Gf(e) {
  Dl = !0, zu(e);
}
function Vt() {
  if (!ci && pt !== null) {
    ci = !0;
    var e = 0, t = ee;
    try {
      var n = pt;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      pt = null, Dl = !1;
    } catch (l) {
      throw pt !== null && (pt = pt.slice(e + 1)), au(Cs, Vt), l;
    } finally {
      ee = t, ci = !1;
    }
  }
  return null;
}
var pn = [], mn = 0, ml = null, hl = 0, He = [], Ge = 0, Xt = null, mt = 1, ht = "";
function Ut(e, t) {
  pn[mn++] = hl, pn[mn++] = ml, ml = e, hl = t;
}
function Ou(e, t, n) {
  He[Ge++] = mt, He[Ge++] = ht, He[Ge++] = Xt, Xt = e;
  var r = mt;
  e = ht;
  var l = 32 - rt(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - rt(t) + l;
  if (30 < i) {
    var a = l - l % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, mt = 1 << 32 - rt(t) + l | n << l | r, ht = i + e;
  } else mt = 1 << i | n << l | r, ht = e;
}
function bs(e) {
  e.return !== null && (Ut(e, 1), Ou(e, 1, 0));
}
function Rs(e) {
  for (; e === ml; ) ml = pn[--mn], pn[mn] = null, hl = pn[--mn], pn[mn] = null;
  for (; e === Xt; ) Xt = He[--Ge], He[Ge] = null, ht = He[--Ge], He[Ge] = null, mt = He[--Ge], He[Ge] = null;
}
var Ve = null, $e = null, ie = !1, tt = null;
function Fu(e, t) {
  var n = Be(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Xa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, $e = Pt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Xt !== null ? { id: mt, overflow: ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ve = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function Gi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bi(e) {
  if (ie) {
    var t = $e;
    if (t) {
      var n = t;
      if (!Xa(e, t)) {
        if (Gi(e)) throw Error(M(418));
        t = Pt(n.nextSibling);
        var r = Ve;
        t && Xa(e, t) ? Fu(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, Ve = e);
      }
    } else {
      if (Gi(e)) throw Error(M(418));
      e.flags = e.flags & -4097 | 2, ie = !1, Ve = e;
    }
  }
}
function Ja(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ve = e;
}
function Or(e) {
  if (e !== Ve) return !1;
  if (!ie) return Ja(e), ie = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ui(e.type, e.memoizedProps)), t && (t = $e)) {
    if (Gi(e)) throw Au(), Error(M(418));
    for (; t; ) Fu(e, t), t = Pt(t.nextSibling);
  }
  if (Ja(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = Pt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = Ve ? Pt(e.stateNode.nextSibling) : null;
  return !0;
}
function Au() {
  for (var e = $e; e; ) e = Pt(e.nextSibling);
}
function jn() {
  $e = Ve = null, ie = !1;
}
function zs(e) {
  tt === null ? tt = [e] : tt.push(e);
}
var Bf = _t.ReactCurrentBatchConfig;
function Vn(e, t, n) {
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
function Fr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Za(e) {
  var t = e._init;
  return t(e._payload);
}
function $u(e) {
  function t(c, d) {
    if (e) {
      var m = c.deletions;
      m === null ? (c.deletions = [d], c.flags |= 16) : m.push(d);
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
    return c = zt(c, d), c.index = 0, c.sibling = null, c;
  }
  function i(c, d, m) {
    return c.index = m, e ? (m = c.alternate, m !== null ? (m = m.index, m < d ? (c.flags |= 2, d) : m) : (c.flags |= 2, d)) : (c.flags |= 1048576, d);
  }
  function a(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function o(c, d, m, E) {
    return d === null || d.tag !== 6 ? (d = yi(m, c.mode, E), d.return = c, d) : (d = l(d, m), d.return = c, d);
  }
  function u(c, d, m, E) {
    var D = m.type;
    return D === an ? w(c, d, m.props.children, E, m.key) : d !== null && (d.elementType === D || typeof D == "object" && D !== null && D.$$typeof === kt && Za(D) === d.type) ? (E = l(d, m.props), E.ref = Vn(c, d, m), E.return = c, E) : (E = tl(m.type, m.key, m.props, null, c.mode, E), E.ref = Vn(c, d, m), E.return = c, E);
  }
  function f(c, d, m, E) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = vi(m, c.mode, E), d.return = c, d) : (d = l(d, m.children || []), d.return = c, d);
  }
  function w(c, d, m, E, D) {
    return d === null || d.tag !== 7 ? (d = Kt(m, c.mode, E, D), d.return = c, d) : (d = l(d, m), d.return = c, d);
  }
  function x(c, d, m) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = yi("" + d, c.mode, m), d.return = c, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Nr:
          return m = tl(d.type, d.key, d.props, null, c.mode, m), m.ref = Vn(c, null, d), m.return = c, m;
        case sn:
          return d = vi(d, c.mode, m), d.return = c, d;
        case kt:
          var E = d._init;
          return x(c, E(d._payload), m);
      }
      if (Hn(d) || zn(d)) return d = Kt(d, c.mode, m, null), d.return = c, d;
      Fr(c, d);
    }
    return null;
  }
  function h(c, d, m, E) {
    var D = d !== null ? d.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return D !== null ? null : o(c, d, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Nr:
          return m.key === D ? u(c, d, m, E) : null;
        case sn:
          return m.key === D ? f(c, d, m, E) : null;
        case kt:
          return D = m._init, h(
            c,
            d,
            D(m._payload),
            E
          );
      }
      if (Hn(m) || zn(m)) return D !== null ? null : w(c, d, m, E, null);
      Fr(c, m);
    }
    return null;
  }
  function v(c, d, m, E, D) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return c = c.get(m) || null, o(d, c, "" + E, D);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Nr:
          return c = c.get(E.key === null ? m : E.key) || null, u(d, c, E, D);
        case sn:
          return c = c.get(E.key === null ? m : E.key) || null, f(d, c, E, D);
        case kt:
          var z = E._init;
          return v(c, d, m, z(E._payload), D);
      }
      if (Hn(E) || zn(E)) return c = c.get(m) || null, w(d, c, E, D, null);
      Fr(d, E);
    }
    return null;
  }
  function g(c, d, m, E) {
    for (var D = null, z = null, C = d, b = d = 0, G = null; C !== null && b < m.length; b++) {
      C.index > b ? (G = C, C = null) : G = C.sibling;
      var O = h(c, C, m[b], E);
      if (O === null) {
        C === null && (C = G);
        break;
      }
      e && C && O.alternate === null && t(c, C), d = i(O, d, b), z === null ? D = O : z.sibling = O, z = O, C = G;
    }
    if (b === m.length) return n(c, C), ie && Ut(c, b), D;
    if (C === null) {
      for (; b < m.length; b++) C = x(c, m[b], E), C !== null && (d = i(C, d, b), z === null ? D = C : z.sibling = C, z = C);
      return ie && Ut(c, b), D;
    }
    for (C = r(c, C); b < m.length; b++) G = v(C, c, b, m[b], E), G !== null && (e && G.alternate !== null && C.delete(G.key === null ? b : G.key), d = i(G, d, b), z === null ? D = G : z.sibling = G, z = G);
    return e && C.forEach(function(_) {
      return t(c, _);
    }), ie && Ut(c, b), D;
  }
  function S(c, d, m, E) {
    var D = zn(m);
    if (typeof D != "function") throw Error(M(150));
    if (m = D.call(m), m == null) throw Error(M(151));
    for (var z = D = null, C = d, b = d = 0, G = null, O = m.next(); C !== null && !O.done; b++, O = m.next()) {
      C.index > b ? (G = C, C = null) : G = C.sibling;
      var _ = h(c, C, O.value, E);
      if (_ === null) {
        C === null && (C = G);
        break;
      }
      e && C && _.alternate === null && t(c, C), d = i(_, d, b), z === null ? D = _ : z.sibling = _, z = _, C = G;
    }
    if (O.done) return n(
      c,
      C
    ), ie && Ut(c, b), D;
    if (C === null) {
      for (; !O.done; b++, O = m.next()) O = x(c, O.value, E), O !== null && (d = i(O, d, b), z === null ? D = O : z.sibling = O, z = O);
      return ie && Ut(c, b), D;
    }
    for (C = r(c, C); !O.done; b++, O = m.next()) O = v(C, c, b, O.value, E), O !== null && (e && O.alternate !== null && C.delete(O.key === null ? b : O.key), d = i(O, d, b), z === null ? D = O : z.sibling = O, z = O);
    return e && C.forEach(function(p) {
      return t(c, p);
    }), ie && Ut(c, b), D;
  }
  function I(c, d, m, E) {
    if (typeof m == "object" && m !== null && m.type === an && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Nr:
          e: {
            for (var D = m.key, z = d; z !== null; ) {
              if (z.key === D) {
                if (D = m.type, D === an) {
                  if (z.tag === 7) {
                    n(c, z.sibling), d = l(z, m.props.children), d.return = c, c = d;
                    break e;
                  }
                } else if (z.elementType === D || typeof D == "object" && D !== null && D.$$typeof === kt && Za(D) === z.type) {
                  n(c, z.sibling), d = l(z, m.props), d.ref = Vn(c, z, m), d.return = c, c = d;
                  break e;
                }
                n(c, z);
                break;
              } else t(c, z);
              z = z.sibling;
            }
            m.type === an ? (d = Kt(m.props.children, c.mode, E, m.key), d.return = c, c = d) : (E = tl(m.type, m.key, m.props, null, c.mode, E), E.ref = Vn(c, d, m), E.return = c, c = E);
          }
          return a(c);
        case sn:
          e: {
            for (z = m.key; d !== null; ) {
              if (d.key === z) if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                n(c, d.sibling), d = l(d, m.children || []), d.return = c, c = d;
                break e;
              } else {
                n(c, d);
                break;
              }
              else t(c, d);
              d = d.sibling;
            }
            d = vi(m, c.mode, E), d.return = c, c = d;
          }
          return a(c);
        case kt:
          return z = m._init, I(c, d, z(m._payload), E);
      }
      if (Hn(m)) return g(c, d, m, E);
      if (zn(m)) return S(c, d, m, E);
      Fr(c, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(c, d.sibling), d = l(d, m), d.return = c, c = d) : (n(c, d), d = yi(m, c.mode, E), d.return = c, c = d), a(c)) : n(c, d);
  }
  return I;
}
var Nn = $u(!0), Vu = $u(!1), gl = $t(null), yl = null, hn = null, Os = null;
function Fs() {
  Os = hn = yl = null;
}
function As(e) {
  var t = gl.current;
  le(gl), e._currentValue = t;
}
function Ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Sn(e, t) {
  yl = e, Os = hn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function Ye(e) {
  var t = e._currentValue;
  if (Os !== e) if (e = { context: e, memoizedValue: t, next: null }, hn === null) {
    if (yl === null) throw Error(M(308));
    hn = e, yl.dependencies = { lanes: 0, firstContext: e };
  } else hn = hn.next = e;
  return t;
}
var Ht = null;
function $s(e) {
  Ht === null ? Ht = [e] : Ht.push(e);
}
function Uu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, $s(t)) : (n.next = l.next, l.next = n), t.interleaved = n, wt(e, r);
}
function wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Et = !1;
function Vs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Wu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function gt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, J & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, wt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, $s(r)) : (t.next = l.next, l.next = t), r.interleaved = t, wt(e, n);
}
function Yr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, js(e, n);
  }
}
function qa(e, t) {
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
function vl(e, t, n, r) {
  var l = e.updateQueue;
  Et = !1;
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
          var g = e, S = o;
          switch (h = t, v = n, S.tag) {
            case 1:
              if (g = S.payload, typeof g == "function") {
                x = g.call(v, x, h);
                break e;
              }
              x = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = S.payload, h = typeof g == "function" ? g.call(v, x, h) : g, h == null) break e;
              x = oe({}, x, h);
              break e;
            case 2:
              Et = !0;
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
    Zt |= a, e.lanes = a, e.memoizedState = x;
  }
}
function eo(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(M(191, l));
      l.call(r);
    }
  }
}
var Cr = {}, dt = $t(Cr), hr = $t(Cr), gr = $t(Cr);
function Gt(e) {
  if (e === Cr) throw Error(M(174));
  return e;
}
function Us(e, t) {
  switch (te(gr, t), te(hr, e), te(dt, Cr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ii(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ii(t, e);
  }
  le(dt), te(dt, t);
}
function In() {
  le(dt), le(hr), le(gr);
}
function Qu(e) {
  Gt(gr.current);
  var t = Gt(dt.current), n = Ii(t, e.type);
  t !== n && (te(hr, e), te(dt, n));
}
function Ws(e) {
  hr.current === e && (le(dt), le(hr));
}
var se = $t(0);
function wl(e) {
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
var di = [];
function Qs() {
  for (var e = 0; e < di.length; e++) di[e]._workInProgressVersionPrimary = null;
  di.length = 0;
}
var Xr = _t.ReactCurrentDispatcher, fi = _t.ReactCurrentBatchConfig, Jt = 0, ae = null, me = null, ge = null, xl = !1, qn = !1, yr = 0, Kf = 0;
function _e() {
  throw Error(M(321));
}
function Hs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!it(e[n], t[n])) return !1;
  return !0;
}
function Gs(e, t, n, r, l, i) {
  if (Jt = i, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xr.current = e === null || e.memoizedState === null ? Zf : qf, e = n(r, l), qn) {
    i = 0;
    do {
      if (qn = !1, yr = 0, 25 <= i) throw Error(M(301));
      i += 1, ge = me = null, t.updateQueue = null, Xr.current = ep, e = n(r, l);
    } while (qn);
  }
  if (Xr.current = _l, t = me !== null && me.next !== null, Jt = 0, ge = me = ae = null, xl = !1, t) throw Error(M(300));
  return e;
}
function Bs() {
  var e = yr !== 0;
  return yr = 0, e;
}
function ot() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ge === null ? ae.memoizedState = ge = e : ge = ge.next = e, ge;
}
function Xe() {
  if (me === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ge === null ? ae.memoizedState : ge.next;
  if (t !== null) ge = t, me = e;
  else {
    if (e === null) throw Error(M(310));
    me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, ge === null ? ae.memoizedState = ge = e : ge = ge.next = e;
  }
  return ge;
}
function vr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pi(e) {
  var t = Xe(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = me, l = r.baseQueue, i = n.pending;
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
      if ((Jt & w) === w) u !== null && (u = u.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var x = {
          lane: w,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        u === null ? (o = u = x, a = r) : u = u.next = x, ae.lanes |= w, Zt |= w;
      }
      f = f.next;
    } while (f !== null && f !== i);
    u === null ? a = r : u.next = o, it(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, ae.lanes |= i, Zt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function mi(e) {
  var t = Xe(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = l = l.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== l);
    it(i, t.memoizedState) || (Pe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Hu() {
}
function Gu(e, t) {
  var n = ae, r = Xe(), l = t(), i = !it(r.memoizedState, l);
  if (i && (r.memoizedState = l, Pe = !0), r = r.queue, Ks(Yu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ge !== null && ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, wr(9, Ku.bind(null, n, r, l, t), void 0, null), ye === null) throw Error(M(349));
    Jt & 30 || Bu(n, t, l);
  }
  return l;
}
function Bu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ku(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Xu(t) && Ju(e);
}
function Yu(e, t, n) {
  return n(function() {
    Xu(t) && Ju(e);
  });
}
function Xu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !it(e, n);
  } catch {
    return !0;
  }
}
function Ju(e) {
  var t = wt(e, 1);
  t !== null && lt(t, e, 1, -1);
}
function to(e) {
  var t = ot();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: vr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Jf.bind(null, ae, e), [t.memoizedState, e];
}
function wr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Zu() {
  return Xe().memoizedState;
}
function Jr(e, t, n, r) {
  var l = ot();
  ae.flags |= e, l.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r);
}
function bl(e, t, n, r) {
  var l = Xe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (me !== null) {
    var a = me.memoizedState;
    if (i = a.destroy, r !== null && Hs(r, a.deps)) {
      l.memoizedState = wr(t, n, i, r);
      return;
    }
  }
  ae.flags |= e, l.memoizedState = wr(1 | t, n, i, r);
}
function no(e, t) {
  return Jr(8390656, 8, e, t);
}
function Ks(e, t) {
  return bl(2048, 8, e, t);
}
function qu(e, t) {
  return bl(4, 2, e, t);
}
function ec(e, t) {
  return bl(4, 4, e, t);
}
function tc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function nc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, bl(4, 4, tc.bind(null, t, e), n);
}
function Ys() {
}
function rc(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function lc(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ic(e, t, n) {
  return Jt & 21 ? (it(n, t) || (n = cu(), ae.lanes |= n, Zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function Yf(e, t) {
  var n = ee;
  ee = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = fi.transition;
  fi.transition = {};
  try {
    e(!1), t();
  } finally {
    ee = n, fi.transition = r;
  }
}
function sc() {
  return Xe().memoizedState;
}
function Xf(e, t, n) {
  var r = Rt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ac(e)) oc(t, n);
  else if (n = Uu(e, t, n, r), n !== null) {
    var l = Ne();
    lt(n, e, r, l), uc(n, t, r);
  }
}
function Jf(e, t, n) {
  var r = Rt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ac(e)) oc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var a = t.lastRenderedState, o = i(a, n);
      if (l.hasEagerState = !0, l.eagerState = o, it(o, a)) {
        var u = t.interleaved;
        u === null ? (l.next = l, $s(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Uu(e, t, l, r), n !== null && (l = Ne(), lt(n, e, r, l), uc(n, t, r));
  }
}
function ac(e) {
  var t = e.alternate;
  return e === ae || t !== null && t === ae;
}
function oc(e, t) {
  qn = xl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function uc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, js(e, n);
  }
}
var _l = { readContext: Ye, useCallback: _e, useContext: _e, useEffect: _e, useImperativeHandle: _e, useInsertionEffect: _e, useLayoutEffect: _e, useMemo: _e, useReducer: _e, useRef: _e, useState: _e, useDebugValue: _e, useDeferredValue: _e, useTransition: _e, useMutableSource: _e, useSyncExternalStore: _e, useId: _e, unstable_isNewReconciler: !1 }, Zf = { readContext: Ye, useCallback: function(e, t) {
  return ot().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ye, useEffect: no, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Jr(
    4194308,
    4,
    tc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Jr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Jr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ot();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ot();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Xf.bind(null, ae, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ot();
  return e = { current: e }, t.memoizedState = e;
}, useState: to, useDebugValue: Ys, useDeferredValue: function(e) {
  return ot().memoizedState = e;
}, useTransition: function() {
  var e = to(!1), t = e[0];
  return e = Yf.bind(null, e[1]), ot().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ae, l = ot();
  if (ie) {
    if (n === void 0) throw Error(M(407));
    n = n();
  } else {
    if (n = t(), ye === null) throw Error(M(349));
    Jt & 30 || Bu(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, no(Yu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, wr(9, Ku.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = ot(), t = ye.identifierPrefix;
  if (ie) {
    var n = ht, r = mt;
    n = (r & ~(1 << 32 - rt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Kf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, qf = {
  readContext: Ye,
  useCallback: rc,
  useContext: Ye,
  useEffect: Ks,
  useImperativeHandle: nc,
  useInsertionEffect: qu,
  useLayoutEffect: ec,
  useMemo: lc,
  useReducer: pi,
  useRef: Zu,
  useState: function() {
    return pi(vr);
  },
  useDebugValue: Ys,
  useDeferredValue: function(e) {
    var t = Xe();
    return ic(t, me.memoizedState, e);
  },
  useTransition: function() {
    var e = pi(vr)[0], t = Xe().memoizedState;
    return [e, t];
  },
  useMutableSource: Hu,
  useSyncExternalStore: Gu,
  useId: sc,
  unstable_isNewReconciler: !1
}, ep = { readContext: Ye, useCallback: rc, useContext: Ye, useEffect: Ks, useImperativeHandle: nc, useInsertionEffect: qu, useLayoutEffect: ec, useMemo: lc, useReducer: mi, useRef: Zu, useState: function() {
  return mi(vr);
}, useDebugValue: Ys, useDeferredValue: function(e) {
  var t = Xe();
  return me === null ? t.memoizedState = e : ic(t, me.memoizedState, e);
}, useTransition: function() {
  var e = mi(vr)[0], t = Xe().memoizedState;
  return [e, t];
}, useMutableSource: Hu, useSyncExternalStore: Gu, useId: sc, unstable_isNewReconciler: !1 };
function qe(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Yi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rl = { isMounted: function(e) {
  return (e = e._reactInternals) ? tn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), l = Rt(e), i = gt(r, l);
  i.payload = t, n != null && (i.callback = n), t = Dt(e, i, l), t !== null && (lt(t, e, l, r), Yr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), l = Rt(e), i = gt(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Dt(e, i, l), t !== null && (lt(t, e, l, r), Yr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ne(), r = Rt(e), l = gt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Dt(e, l, r), t !== null && (lt(t, e, r, n), Yr(t, e, r));
} };
function ro(e, t, n, r, l, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !dr(n, r) || !dr(l, i) : !0;
}
function cc(e, t, n) {
  var r = !1, l = Ft, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ye(i) : (l = be(t) ? Yt : Ee.current, r = t.contextTypes, i = (r = r != null) ? Cn(e, l) : Ft), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Rl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function lo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
}
function Xi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Vs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ye(i) : (i = be(t) ? Yt : Ee.current, l.context = Cn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Yi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Rl.enqueueReplaceState(l, l.state, null), vl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Nd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function hi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ji(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var tp = typeof WeakMap == "function" ? WeakMap : Map;
function dc(e, t, n) {
  n = gt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    kl || (kl = !0, as = r), Ji(e, t);
  }, n;
}
function fc(e, t, n) {
  n = gt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ji(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ji(e, t), typeof r != "function" && (bt === null ? bt = /* @__PURE__ */ new Set([this]) : bt.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function io(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = hp.bind(null, e, t, n), t.then(e, e));
}
function so(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ao(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1), t.tag = 2, Dt(n, t, 1))), n.lanes |= 1), e);
}
var np = _t.ReactCurrentOwner, Pe = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? Vu(t, null, n, r) : Nn(t, e.child, n, r);
}
function oo(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return Sn(t, l), r = Gs(e, t, n, r, i, l), n = Bs(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, xt(e, t, l)) : (ie && n && bs(t), t.flags |= 1, Ce(e, t, r, l), t.child);
}
function uo(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ra(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, pc(e, t, i, r, l)) : (e = tl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : dr, n(a, r) && e.ref === t.ref) return xt(e, t, l);
  }
  return t.flags |= 1, e = zt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function pc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (dr(i, r) && e.ref === t.ref) if (Pe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Pe = !0);
    else return t.lanes = e.lanes, xt(e, t, l);
  }
  return Zi(e, t, n, r, l);
}
function mc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, te(yn, Fe), Fe |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, te(yn, Fe), Fe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, te(yn, Fe), Fe |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, te(yn, Fe), Fe |= r;
  return Ce(e, t, l, n), t.child;
}
function hc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Zi(e, t, n, r, l) {
  var i = be(n) ? Yt : Ee.current;
  return i = Cn(t, i), Sn(t, l), n = Gs(e, t, n, r, i, l), r = Bs(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, xt(e, t, l)) : (ie && r && bs(t), t.flags |= 1, Ce(e, t, n, l), t.child);
}
function co(e, t, n, r, l) {
  if (be(n)) {
    var i = !0;
    pl(t);
  } else i = !1;
  if (Sn(t, l), t.stateNode === null) Zr(e, t), cc(t, n, r), Xi(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Ye(f) : (f = be(n) ? Yt : Ee.current, f = Cn(t, f));
    var w = n.getDerivedStateFromProps, x = typeof w == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    x || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== f) && lo(t, a, r, f), Et = !1;
    var h = t.memoizedState;
    a.state = h, vl(t, r, a, l), u = t.memoizedState, o !== r || h !== u || De.current || Et ? (typeof w == "function" && (Yi(t, n, w, r), u = t.memoizedState), (o = Et || ro(t, n, o, r, h, u, f)) ? (x || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = f, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Wu(e, t), o = t.memoizedProps, f = t.type === t.elementType ? o : qe(t.type, o), a.props = f, x = t.pendingProps, h = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ye(u) : (u = be(n) ? Yt : Ee.current, u = Cn(t, u));
    var v = n.getDerivedStateFromProps;
    (w = typeof v == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== x || h !== u) && lo(t, a, r, u), Et = !1, h = t.memoizedState, a.state = h, vl(t, r, a, l);
    var g = t.memoizedState;
    o !== x || h !== g || De.current || Et ? (typeof v == "function" && (Yi(t, n, v, r), g = t.memoizedState), (f = Et || ro(t, n, f, r, h, g, u) || !1) ? (w || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), a.props = r, a.state = g, a.context = u, r = f) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return qi(e, t, n, r, i, l);
}
function qi(e, t, n, r, l, i) {
  hc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && Ya(t, n, !1), xt(e, t, i);
  r = t.stateNode, np.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Nn(t, e.child, null, i), t.child = Nn(t, null, o, i)) : Ce(e, t, o, i), t.memoizedState = r.state, l && Ya(t, n, !0), t.child;
}
function gc(e) {
  var t = e.stateNode;
  t.pendingContext ? Ka(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ka(e, t.context, !1), Us(e, t.containerInfo);
}
function fo(e, t, n, r, l) {
  return jn(), zs(l), t.flags |= 256, Ce(e, t, n, r), t.child;
}
var es = { dehydrated: null, treeContext: null, retryLane: 0 };
function ts(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yc(e, t, n) {
  var r = t.pendingProps, l = se.current, i = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), te(se, l & 1), e === null)
    return Bi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Fl(a, r, 0, null), e = Kt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ts(n), t.memoizedState = es, e) : Xs(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return rp(e, t, a, r, o, l, n);
  if (i) {
    i = r.fallback, a = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = zt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = zt(o, i) : (i = Kt(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? ts(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = es, r;
  }
  return i = e.child, e = i.sibling, r = zt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Xs(e, t) {
  return t = Fl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ar(e, t, n, r) {
  return r !== null && zs(r), Nn(t, e.child, null, n), e = Xs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function rp(e, t, n, r, l, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = hi(Error(M(422))), Ar(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Fl({ mode: "visible", children: r.children }, l, 0, null), i = Kt(i, l, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Nn(t, e.child, null, a), t.child.memoizedState = ts(a), t.memoizedState = es, i);
  if (!(t.mode & 1)) return Ar(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, i = Error(M(419)), r = hi(i, r, void 0), Ar(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, Pe || o) {
    if (r = ye, r !== null) {
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, wt(e, l), lt(r, e, l, -1));
    }
    return na(), r = hi(Error(M(421))), Ar(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, $e = Pt(l.nextSibling), Ve = t, ie = !0, tt = null, e !== null && (He[Ge++] = mt, He[Ge++] = ht, He[Ge++] = Xt, mt = e.id, ht = e.overflow, Xt = t), t = Xs(t, r.children), t.flags |= 4096, t);
}
function po(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ki(e.return, t, n);
}
function gi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function vc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (Ce(e, t, r.children, n), r = se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && po(e, n, t);
      else if (e.tag === 19) po(e, n, t);
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
  if (te(se, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && wl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), gi(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && wl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      gi(t, !0, n, null, i);
      break;
    case "together":
      gi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Zr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function xt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Zt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = zt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function lp(e, t, n) {
  switch (t.tag) {
    case 3:
      gc(t), jn();
      break;
    case 5:
      Qu(t);
      break;
    case 1:
      be(t.type) && pl(t);
      break;
    case 4:
      Us(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      te(gl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (te(se, se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? yc(e, t, n) : (te(se, se.current & 1), e = xt(e, t, n), e !== null ? e.sibling : null);
      te(se, se.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return vc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), te(se, se.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, mc(e, t, n);
  }
  return xt(e, t, n);
}
var wc, ns, xc, _c;
wc = function(e, t) {
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
ns = function() {
};
xc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Gt(dt.current);
    var i = null;
    switch (n) {
      case "input":
        l = Ei(e, l), r = Ei(e, r), i = [];
        break;
      case "select":
        l = oe({}, l, { value: void 0 }), r = oe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Ni(e, l), r = Ni(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = dl);
    }
    Ti(n, r);
    var a;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var o = l[f];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (lr.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (o = l != null ? l[f] : void 0, r.hasOwnProperty(f) && u !== o && (u != null || o != null)) if (f === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in u) u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = u;
      else f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (i = i || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (lr.hasOwnProperty(f) ? (u != null && f === "onScroll" && re("scroll", e), i || o === u || (i = [])) : (i = i || []).push(f, u));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
_c = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Un(e, t) {
  if (!ie) switch (e.tailMode) {
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
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function ip(e, t, n) {
  var r = t.pendingProps;
  switch (Rs(t), t.tag) {
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
      return Se(t), null;
    case 1:
      return be(t.type) && fl(), Se(t), null;
    case 3:
      return r = t.stateNode, In(), le(De), le(Ee), Qs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Or(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, tt !== null && (cs(tt), tt = null))), ns(e, t), Se(t), null;
    case 5:
      Ws(t);
      var l = Gt(gr.current);
      if (n = t.type, e !== null && t.stateNode != null) xc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Se(t), null;
        }
        if (e = Gt(dt.current), Or(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ut] = t, r[mr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Bn.length; l++) re(Bn[l], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re(
                "error",
                r
              ), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              _a(r, i), re("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, re("invalid", r);
              break;
            case "textarea":
              ka(r, i), re("invalid", r);
          }
          Ti(n, i), l = null;
          for (var a in i) if (i.hasOwnProperty(a)) {
            var o = i[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && zr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && zr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : lr.hasOwnProperty(a) && o != null && a === "onScroll" && re("scroll", r);
          }
          switch (n) {
            case "input":
              Ir(r), Sa(r, i, !0);
              break;
            case "textarea":
              Ir(r), Ea(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = dl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Yo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[ut] = t, e[mr] = r, wc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Mi(n, r), n) {
              case "dialog":
                re("cancel", e), re("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Bn.length; l++) re(Bn[l], e);
                l = r;
                break;
              case "source":
                re("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                re(
                  "error",
                  e
                ), re("load", e), l = r;
                break;
              case "details":
                re("toggle", e), l = r;
                break;
              case "input":
                _a(e, r), l = Ei(e, r), re("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = oe({}, r, { value: void 0 }), re("invalid", e);
                break;
              case "textarea":
                ka(e, r), l = Ni(e, r), re("invalid", e);
                break;
              default:
                l = r;
            }
            Ti(n, l), o = l;
            for (i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "style" ? Zo(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Xo(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ir(e, u) : typeof u == "number" && ir(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (lr.hasOwnProperty(i) ? u != null && i === "onScroll" && re("scroll", e) : u != null && xs(e, i, u, a));
            }
            switch (n) {
              case "input":
                Ir(e), Sa(e, r, !1);
                break;
              case "textarea":
                Ir(e), Ea(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ot(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? vn(e, !!r.multiple, i, !1) : r.defaultValue != null && vn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = dl);
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
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) _c(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (n = Gt(gr.current), Gt(dt.current), Or(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ut] = t, (i = r.nodeValue !== n) && (e = Ve, e !== null)) switch (e.tag) {
            case 3:
              zr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && zr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ut] = t, t.stateNode = r;
      }
      return Se(t), null;
    case 13:
      if (le(se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ie && $e !== null && t.mode & 1 && !(t.flags & 128)) Au(), jn(), t.flags |= 98560, i = !1;
        else if (i = Or(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(M(317));
            i[ut] = t;
          } else jn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Se(t), i = !1;
        } else tt !== null && (cs(tt), tt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || se.current & 1 ? he === 0 && (he = 3) : na())), t.updateQueue !== null && (t.flags |= 4), Se(t), null);
    case 4:
      return In(), ns(e, t), e === null && fr(t.stateNode.containerInfo), Se(t), null;
    case 10:
      return As(t.type._context), Se(t), null;
    case 17:
      return be(t.type) && fl(), Se(t), null;
    case 19:
      if (le(se), i = t.memoizedState, i === null) return Se(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null) if (r) Un(i, !1);
      else {
        if (he !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = wl(e), a !== null) {
            for (t.flags |= 128, Un(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return te(se, se.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && fe() > Mn && (t.flags |= 128, r = !0, Un(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = wl(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Un(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !ie) return Se(t), null;
        } else 2 * fe() - i.renderingStartTime > Mn && n !== 1073741824 && (t.flags |= 128, r = !0, Un(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = fe(), t.sibling = null, n = se.current, te(se, r ? n & 1 | 2 : n & 1), t) : (Se(t), null);
    case 22:
    case 23:
      return ta(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Fe & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function sp(e, t) {
  switch (Rs(t), t.tag) {
    case 1:
      return be(t.type) && fl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return In(), le(De), le(Ee), Qs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ws(t), null;
    case 13:
      if (le(se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(M(340));
        jn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return le(se), null;
    case 4:
      return In(), null;
    case 10:
      return As(t.type._context), null;
    case 22:
    case 23:
      return ta(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $r = !1, ke = !1, ap = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function gn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    de(e, t, r);
  }
  else n.current = null;
}
function rs(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var mo = !1;
function op(e, t) {
  if ($i = ol, e = ju(), Ds(e)) {
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
  for (Vi = { focusedElem: e, selectionRange: n }, ol = !1, F = t; F !== null; ) if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
  else for (; F !== null; ) {
    t = F;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var S = g.memoizedProps, I = g.memoizedState, c = t.stateNode, d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? S : qe(t.type, S), I);
            c.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
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
      de(t, t.return, E);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, F = e;
      break;
    }
    F = t.return;
  }
  return g = mo, mo = !1, g;
}
function er(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && rs(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function zl(e, t) {
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
function ls(e) {
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
function Sc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Sc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ut], delete t[mr], delete t[Qi], delete t[Qf], delete t[Hf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function kc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ho(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || kc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function is(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = dl));
  else if (r !== 4 && (e = e.child, e !== null)) for (is(e, t, n), e = e.sibling; e !== null; ) is(e, t, n), e = e.sibling;
}
function ss(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), e = e.sibling;
}
var ve = null, et = !1;
function St(e, t, n) {
  for (n = n.child; n !== null; ) Ec(e, t, n), n = n.sibling;
}
function Ec(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function") try {
    ct.onCommitFiberUnmount(Il, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ke || gn(n, t);
    case 6:
      var r = ve, l = et;
      ve = null, St(e, t, n), ve = r, et = l, ve !== null && (et ? (e = ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null && (et ? (e = ve, n = n.stateNode, e.nodeType === 8 ? ui(e.parentNode, n) : e.nodeType === 1 && ui(e, n), ur(e)) : ui(ve, n.stateNode));
      break;
    case 4:
      r = ve, l = et, ve = n.stateNode.containerInfo, et = !0, St(e, t, n), ve = r, et = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && rs(n, t, a), l = l.next;
        } while (l !== r);
      }
      St(e, t, n);
      break;
    case 1:
      if (!ke && (gn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        de(n, t, o);
      }
      St(e, t, n);
      break;
    case 21:
      St(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null, St(e, t, n), ke = r) : St(e, t, n);
      break;
    default:
      St(e, t, n);
  }
}
function go(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ap()), t.forEach(function(r) {
      var l = yp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Je(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            ve = o.stateNode, et = !1;
            break e;
          case 3:
            ve = o.stateNode.containerInfo, et = !0;
            break e;
          case 4:
            ve = o.stateNode.containerInfo, et = !0;
            break e;
        }
        o = o.return;
      }
      if (ve === null) throw Error(M(160));
      Ec(i, a, l), ve = null, et = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (f) {
      de(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Cc(t, e), t = t.sibling;
}
function Cc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Je(t, e), at(e), r & 4) {
        try {
          er(3, e, e.return), zl(3, e);
        } catch (S) {
          de(e, e.return, S);
        }
        try {
          er(5, e, e.return);
        } catch (S) {
          de(e, e.return, S);
        }
      }
      break;
    case 1:
      Je(t, e), at(e), r & 512 && n !== null && gn(n, n.return);
      break;
    case 5:
      if (Je(t, e), at(e), r & 512 && n !== null && gn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          ir(l, "");
        } catch (S) {
          de(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && i.type === "radio" && i.name != null && Bo(l, i), Mi(o, a);
          var f = Mi(o, i);
          for (a = 0; a < u.length; a += 2) {
            var w = u[a], x = u[a + 1];
            w === "style" ? Zo(l, x) : w === "dangerouslySetInnerHTML" ? Xo(l, x) : w === "children" ? ir(l, x) : xs(l, w, x, f);
          }
          switch (o) {
            case "input":
              Ci(l, i);
              break;
            case "textarea":
              Ko(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? vn(l, !!i.multiple, v, !1) : h !== !!i.multiple && (i.defaultValue != null ? vn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : vn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[mr] = i;
        } catch (S) {
          de(e, e.return, S);
        }
      }
      break;
    case 6:
      if (Je(t, e), at(e), r & 4) {
        if (e.stateNode === null) throw Error(M(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (S) {
          de(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Je(t, e), at(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ur(t.containerInfo);
      } catch (S) {
        de(e, e.return, S);
      }
      break;
    case 4:
      Je(t, e), at(e);
      break;
    case 13:
      Je(t, e), at(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (qs = fe())), r & 4 && go(e);
      break;
    case 22:
      if (w = n !== null && n.memoizedState !== null, e.mode & 1 ? (ke = (f = ke) || w, Je(t, e), ke = f) : Je(t, e), at(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !w && e.mode & 1) for (F = e, w = e.child; w !== null; ) {
          for (x = F = w; F !== null; ) {
            switch (h = F, v = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                er(4, h, h.return);
                break;
              case 1:
                gn(h, h.return);
                var g = h.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (S) {
                    de(r, n, S);
                  }
                }
                break;
              case 5:
                gn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  vo(x);
                  continue;
                }
            }
            v !== null ? (v.return = h, F = v) : vo(x);
          }
          w = w.sibling;
        }
        e: for (w = null, x = e; ; ) {
          if (x.tag === 5) {
            if (w === null) {
              w = x;
              try {
                l = x.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = x.stateNode, u = x.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = Jo("display", a));
              } catch (S) {
                de(e, e.return, S);
              }
            }
          } else if (x.tag === 6) {
            if (w === null) try {
              x.stateNode.nodeValue = f ? "" : x.memoizedProps;
            } catch (S) {
              de(e, e.return, S);
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
      Je(t, e), at(e), r & 4 && go(e);
      break;
    case 21:
      break;
    default:
      Je(
        t,
        e
      ), at(e);
  }
}
function at(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kc(n)) {
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
          r.flags & 32 && (ir(l, ""), r.flags &= -33);
          var i = ho(e);
          ss(e, i, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = ho(e);
          is(e, o, a);
          break;
        default:
          throw Error(M(161));
      }
    } catch (u) {
      de(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function up(e, t, n) {
  F = e, jc(e);
}
function jc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var l = F, i = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || $r;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || ke;
        o = $r;
        var f = ke;
        if ($r = a, (ke = u) && !f) for (F = l; F !== null; ) a = F, u = a.child, a.tag === 22 && a.memoizedState !== null ? wo(l) : u !== null ? (u.return = a, F = u) : wo(l);
        for (; i !== null; ) F = i, jc(i), i = i.sibling;
        F = l, $r = o, ke = f;
      }
      yo(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, F = i) : yo(e);
  }
}
function yo(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ke || zl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ke) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && eo(t, i, r);
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
              eo(t, a, n);
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
                  x !== null && ur(x);
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
        ke || t.flags & 512 && ls(t);
      } catch (h) {
        de(t, t.return, h);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function vo(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function wo(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zl(4, t);
          } catch (u) {
            de(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              de(t, l, u);
            }
          }
          var i = t.return;
          try {
            ls(t);
          } catch (u) {
            de(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ls(t);
          } catch (u) {
            de(t, a, u);
          }
      }
    } catch (u) {
      de(t, t.return, u);
    }
    if (t === e) {
      F = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, F = o;
      break;
    }
    F = t.return;
  }
}
var cp = Math.ceil, Sl = _t.ReactCurrentDispatcher, Js = _t.ReactCurrentOwner, Ke = _t.ReactCurrentBatchConfig, J = 0, ye = null, pe = null, we = 0, Fe = 0, yn = $t(0), he = 0, xr = null, Zt = 0, Ol = 0, Zs = 0, tr = null, Le = null, qs = 0, Mn = 1 / 0, ft = null, kl = !1, as = null, bt = null, Vr = !1, It = null, El = 0, nr = 0, os = null, qr = -1, el = 0;
function Ne() {
  return J & 6 ? fe() : qr !== -1 ? qr : qr = fe();
}
function Rt(e) {
  return e.mode & 1 ? J & 2 && we !== 0 ? we & -we : Bf.transition !== null ? (el === 0 && (el = cu()), el) : (e = ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yu(e.type)), e) : 1;
}
function lt(e, t, n, r) {
  if (50 < nr) throw nr = 0, os = null, Error(M(185));
  Sr(e, n, r), (!(J & 2) || e !== ye) && (e === ye && (!(J & 2) && (Ol |= n), he === 4 && jt(e, we)), Re(e, r), n === 1 && J === 0 && !(t.mode & 1) && (Mn = fe() + 500, Dl && Vt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  Gd(e, t);
  var r = al(e, e === ye ? we : 0);
  if (r === 0) n !== null && Na(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Na(n), t === 1) e.tag === 0 ? Gf(xo.bind(null, e)) : zu(xo.bind(null, e)), Uf(function() {
      !(J & 6) && Vt();
    }), n = null;
    else {
      switch (du(r)) {
        case 1:
          n = Cs;
          break;
        case 4:
          n = ou;
          break;
        case 16:
          n = sl;
          break;
        case 536870912:
          n = uu;
          break;
        default:
          n = sl;
      }
      n = bc(n, Nc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Nc(e, t) {
  if (qr = -1, el = 0, J & 6) throw Error(M(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n) return null;
  var r = al(e, e === ye ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
  else {
    t = r;
    var l = J;
    J |= 2;
    var i = Tc();
    (ye !== e || we !== t) && (ft = null, Mn = fe() + 500, Bt(e, t));
    do
      try {
        pp();
        break;
      } catch (o) {
        Ic(e, o);
      }
    while (!0);
    Fs(), Sl.current = i, J = l, pe !== null ? t = 0 : (ye = null, we = 0, t = he);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ri(e), l !== 0 && (r = l, t = us(e, l))), t === 1) throw n = xr, Bt(e, 0), jt(e, r), Re(e, fe()), n;
    if (t === 6) jt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !dp(l) && (t = Cl(e, r), t === 2 && (i = Ri(e), i !== 0 && (r = i, t = us(e, i))), t === 1)) throw n = xr, Bt(e, 0), jt(e, r), Re(e, fe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          Wt(e, Le, ft);
          break;
        case 3:
          if (jt(e, r), (r & 130023424) === r && (t = qs + 500 - fe(), 10 < t)) {
            if (al(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Ne(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Wi(Wt.bind(null, e, Le, ft), t);
            break;
          }
          Wt(e, Le, ft);
          break;
        case 4:
          if (jt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - rt(r);
            i = 1 << a, a = t[a], a > l && (l = a), r &= ~i;
          }
          if (r = l, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Wi(Wt.bind(null, e, Le, ft), r);
            break;
          }
          Wt(e, Le, ft);
          break;
        case 5:
          Wt(e, Le, ft);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Re(e, fe()), e.callbackNode === n ? Nc.bind(null, e) : null;
}
function us(e, t) {
  var n = tr;
  return e.current.memoizedState.isDehydrated && (Bt(e, t).flags |= 256), e = Cl(e, t), e !== 2 && (t = Le, Le = n, t !== null && cs(t)), e;
}
function cs(e) {
  Le === null ? Le = e : Le.push.apply(Le, e);
}
function dp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!it(i(), l)) return !1;
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
function jt(e, t) {
  for (t &= ~Zs, t &= ~Ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - rt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xo(e) {
  if (J & 6) throw Error(M(327));
  kn();
  var t = al(e, 0);
  if (!(t & 1)) return Re(e, fe()), null;
  var n = Cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ri(e);
    r !== 0 && (t = r, n = us(e, r));
  }
  if (n === 1) throw n = xr, Bt(e, 0), jt(e, t), Re(e, fe()), n;
  if (n === 6) throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wt(e, Le, ft), Re(e, fe()), null;
}
function ea(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    J = n, J === 0 && (Mn = fe() + 500, Dl && Vt());
  }
}
function qt(e) {
  It !== null && It.tag === 0 && !(J & 6) && kn();
  var t = J;
  J |= 1;
  var n = Ke.transition, r = ee;
  try {
    if (Ke.transition = null, ee = 1, e) return e();
  } finally {
    ee = r, Ke.transition = n, J = t, !(J & 6) && Vt();
  }
}
function ta() {
  Fe = yn.current, le(yn);
}
function Bt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Vf(n)), pe !== null) for (n = pe.return; n !== null; ) {
    var r = n;
    switch (Rs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && fl();
        break;
      case 3:
        In(), le(De), le(Ee), Qs();
        break;
      case 5:
        Ws(r);
        break;
      case 4:
        In();
        break;
      case 13:
        le(se);
        break;
      case 19:
        le(se);
        break;
      case 10:
        As(r.type._context);
        break;
      case 22:
      case 23:
        ta();
    }
    n = n.return;
  }
  if (ye = e, pe = e = zt(e.current, null), we = Fe = t, he = 0, xr = null, Zs = Ol = Zt = 0, Le = tr = null, Ht !== null) {
    for (t = 0; t < Ht.length; t++) if (n = Ht[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var a = i.next;
        i.next = l, r.next = a;
      }
      n.pending = r;
    }
    Ht = null;
  }
  return e;
}
function Ic(e, t) {
  do {
    var n = pe;
    try {
      if (Fs(), Xr.current = _l, xl) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        xl = !1;
      }
      if (Jt = 0, ge = me = ae = null, qn = !1, yr = 0, Js.current = null, n === null || n.return === null) {
        he = 1, xr = t, pe = null;
        break;
      }
      e: {
        var i = e, a = n.return, o = n, u = t;
        if (t = we, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var f = u, w = o, x = w.tag;
          if (!(w.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var h = w.alternate;
            h ? (w.updateQueue = h.updateQueue, w.memoizedState = h.memoizedState, w.lanes = h.lanes) : (w.updateQueue = null, w.memoizedState = null);
          }
          var v = so(a);
          if (v !== null) {
            v.flags &= -257, ao(v, a, o, i, t), v.mode & 1 && io(i, f, t), t = v, u = f;
            var g = t.updateQueue;
            if (g === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(u), t.updateQueue = S;
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              io(i, f, t), na();
              break e;
            }
            u = Error(M(426));
          }
        } else if (ie && o.mode & 1) {
          var I = so(a);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), ao(I, a, o, i, t), zs(Tn(u, o));
            break e;
          }
        }
        i = u = Tn(u, o), he !== 4 && (he = 2), tr === null ? tr = [i] : tr.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var c = dc(i, u, t);
              qa(i, c);
              break e;
            case 1:
              o = u;
              var d = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (bt === null || !bt.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = fc(i, o, t);
                qa(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Lc(n);
    } catch (D) {
      t = D, pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Tc() {
  var e = Sl.current;
  return Sl.current = _l, e === null ? _l : e;
}
function na() {
  (he === 0 || he === 3 || he === 2) && (he = 4), ye === null || !(Zt & 268435455) && !(Ol & 268435455) || jt(ye, we);
}
function Cl(e, t) {
  var n = J;
  J |= 2;
  var r = Tc();
  (ye !== e || we !== t) && (ft = null, Bt(e, t));
  do
    try {
      fp();
      break;
    } catch (l) {
      Ic(e, l);
    }
  while (!0);
  if (Fs(), J = n, Sl.current = r, pe !== null) throw Error(M(261));
  return ye = null, we = 0, he;
}
function fp() {
  for (; pe !== null; ) Mc(pe);
}
function pp() {
  for (; pe !== null && !Od(); ) Mc(pe);
}
function Mc(e) {
  var t = Dc(e.alternate, e, Fe);
  e.memoizedProps = e.pendingProps, t === null ? Lc(e) : pe = t, Js.current = null;
}
function Lc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = sp(n, t), n !== null) {
        n.flags &= 32767, pe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        he = 6, pe = null;
        return;
      }
    } else if (n = ip(n, t, Fe), n !== null) {
      pe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function Wt(e, t, n) {
  var r = ee, l = Ke.transition;
  try {
    Ke.transition = null, ee = 1, mp(e, t, n, r);
  } finally {
    Ke.transition = l, ee = r;
  }
  return null;
}
function mp(e, t, n, r) {
  do
    kn();
  while (It !== null);
  if (J & 6) throw Error(M(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Bd(e, i), e === ye && (pe = ye = null, we = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Vr || (Vr = !0, bc(sl, function() {
    return kn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ke.transition, Ke.transition = null;
    var a = ee;
    ee = 1;
    var o = J;
    J |= 4, Js.current = null, op(e, n), Cc(n, e), bf(Vi), ol = !!$i, Vi = $i = null, e.current = n, up(n), Fd(), J = o, ee = a, Ke.transition = i;
  } else e.current = n;
  if (Vr && (Vr = !1, It = e, El = l), i = e.pendingLanes, i === 0 && (bt = null), Vd(n.stateNode), Re(e, fe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (kl) throw kl = !1, e = as, as = null, e;
  return El & 1 && e.tag !== 0 && kn(), i = e.pendingLanes, i & 1 ? e === os ? nr++ : (nr = 0, os = e) : nr = 0, Vt(), null;
}
function kn() {
  if (It !== null) {
    var e = du(El), t = Ke.transition, n = ee;
    try {
      if (Ke.transition = null, ee = 16 > e ? 16 : e, It === null) var r = !1;
      else {
        if (e = It, It = null, El = 0, J & 6) throw Error(M(331));
        var l = J;
        for (J |= 4, F = e.current; F !== null; ) {
          var i = F, a = i.child;
          if (F.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var f = o[u];
                for (F = f; F !== null; ) {
                  var w = F;
                  switch (w.tag) {
                    case 0:
                    case 11:
                    case 15:
                      er(8, w, i);
                  }
                  var x = w.child;
                  if (x !== null) x.return = w, F = x;
                  else for (; F !== null; ) {
                    w = F;
                    var h = w.sibling, v = w.return;
                    if (Sc(w), w === f) {
                      F = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = v, F = h;
                      break;
                    }
                    F = v;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var I = S.sibling;
                    S.sibling = null, S = I;
                  } while (S !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) a.return = i, F = a;
          else e: for (; F !== null; ) {
            if (i = F, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                er(9, i, i.return);
            }
            var c = i.sibling;
            if (c !== null) {
              c.return = i.return, F = c;
              break e;
            }
            F = i.return;
          }
        }
        var d = e.current;
        for (F = d; F !== null; ) {
          a = F;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) m.return = a, F = m;
          else e: for (a = d; F !== null; ) {
            if (o = F, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  zl(9, o);
              }
            } catch (D) {
              de(o, o.return, D);
            }
            if (o === a) {
              F = null;
              break e;
            }
            var E = o.sibling;
            if (E !== null) {
              E.return = o.return, F = E;
              break e;
            }
            F = o.return;
          }
        }
        if (J = l, Vt(), ct && typeof ct.onPostCommitFiberRoot == "function") try {
          ct.onPostCommitFiberRoot(Il, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ee = n, Ke.transition = t;
    }
  }
  return !1;
}
function _o(e, t, n) {
  t = Tn(n, t), t = dc(e, t, 1), e = Dt(e, t, 1), t = Ne(), e !== null && (Sr(e, 1, t), Re(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) _o(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      _o(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bt === null || !bt.has(r))) {
        e = Tn(n, e), e = fc(t, e, 1), t = Dt(t, e, 1), e = Ne(), t !== null && (Sr(t, 1, e), Re(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function hp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & n, ye === e && (we & n) === n && (he === 4 || he === 3 && (we & 130023424) === we && 500 > fe() - qs ? Bt(e, 0) : Zs |= n), Re(e, t);
}
function Pc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Lr, Lr <<= 1, !(Lr & 130023424) && (Lr = 4194304)) : t = 1);
  var n = Ne();
  e = wt(e, t), e !== null && (Sr(e, t, n), Re(e, n));
}
function gp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Pc(e, n);
}
function yp(e, t) {
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
  r !== null && r.delete(t), Pc(e, n);
}
var Dc;
Dc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || De.current) Pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Pe = !1, lp(e, t, n);
    Pe = !!(e.flags & 131072);
  }
  else Pe = !1, ie && t.flags & 1048576 && Ou(t, hl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Zr(e, t), e = t.pendingProps;
      var l = Cn(t, Ee.current);
      Sn(t, n), l = Gs(null, t, r, e, l, n);
      var i = Bs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(r) ? (i = !0, pl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Vs(t), l.updater = Rl, t.stateNode = l, l._reactInternals = t, Xi(t, r, e, n), t = qi(null, t, r, !0, i, n)) : (t.tag = 0, ie && i && bs(t), Ce(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Zr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = wp(r), e = qe(r, e), l) {
          case 0:
            t = Zi(null, t, r, e, n);
            break e;
          case 1:
            t = co(null, t, r, e, n);
            break e;
          case 11:
            t = oo(null, t, r, e, n);
            break e;
          case 14:
            t = uo(null, t, r, qe(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), Zi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), co(e, t, r, l, n);
    case 3:
      e: {
        if (gc(t), e === null) throw Error(M(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Wu(e, t), vl(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = Tn(Error(M(423)), t), t = fo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Tn(Error(M(424)), t), t = fo(e, t, r, n, l);
          break e;
        } else for ($e = Pt(t.stateNode.containerInfo.firstChild), Ve = t, ie = !0, tt = null, n = Vu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (jn(), r === l) {
            t = xt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Qu(t), e === null && Bi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = l.children, Ui(r, l) ? a = null : i !== null && Ui(r, i) && (t.flags |= 32), hc(e, t), Ce(e, t, a, n), t.child;
    case 6:
      return e === null && Bi(t), null;
    case 13:
      return yc(e, t, n);
    case 4:
      return Us(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Nn(t, null, r, n) : Ce(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), oo(e, t, r, l, n);
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, a = l.value, te(gl, r._currentValue), r._currentValue = a, i !== null) if (it(i.value, a)) {
          if (i.children === l.children && !De.current) {
            t = xt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var o = i.dependencies;
          if (o !== null) {
            a = i.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = gt(-1, n & -n), u.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var w = f.pending;
                    w === null ? u.next = u : (u.next = w.next, w.next = u), f.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ki(
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
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), Ki(a, n, t), a = i.sibling;
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
        Ce(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Sn(t, n), l = Ye(l), r = r(l), t.flags |= 1, Ce(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = qe(r, t.pendingProps), l = qe(r.type, l), uo(e, t, r, l, n);
    case 15:
      return pc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), Zr(e, t), t.tag = 1, be(r) ? (e = !0, pl(t)) : e = !1, Sn(t, n), cc(t, r, l), Xi(t, r, l, n), qi(null, t, r, !0, e, n);
    case 19:
      return vc(e, t, n);
    case 22:
      return mc(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function bc(e, t) {
  return au(e, t);
}
function vp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Be(e, t, n, r) {
  return new vp(e, t, n, r);
}
function ra(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function wp(e) {
  if (typeof e == "function") return ra(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ss) return 11;
    if (e === ks) return 14;
  }
  return 2;
}
function zt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function tl(e, t, n, r, l, i) {
  var a = 2;
  if (r = e, typeof e == "function") ra(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case an:
      return Kt(n.children, l, i, t);
    case _s:
      a = 8, l |= 8;
      break;
    case xi:
      return e = Be(12, n, t, l | 2), e.elementType = xi, e.lanes = i, e;
    case _i:
      return e = Be(13, n, t, l), e.elementType = _i, e.lanes = i, e;
    case Si:
      return e = Be(19, n, t, l), e.elementType = Si, e.lanes = i, e;
    case Qo:
      return Fl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Uo:
          a = 10;
          break e;
        case Wo:
          a = 9;
          break e;
        case Ss:
          a = 11;
          break e;
        case ks:
          a = 14;
          break e;
        case kt:
          a = 16, r = null;
          break e;
      }
      throw Error(M(130, e == null ? e : typeof e, ""));
  }
  return t = Be(a, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Kt(e, t, n, r) {
  return e = Be(7, e, r, t), e.lanes = n, e;
}
function Fl(e, t, n, r) {
  return e = Be(22, e, r, t), e.elementType = Qo, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function yi(e, t, n) {
  return e = Be(6, e, null, t), e.lanes = n, e;
}
function vi(e, t, n) {
  return t = Be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function xp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zl(0), this.expirationTimes = Zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function la(e, t, n, r, l, i, a, o, u) {
  return e = new xp(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Be(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vs(i), e;
}
function _p(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: sn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Rc(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (be(t.type)) {
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
    if (be(n)) return Ru(e, n, t);
  }
  return t;
}
function zc(e, t, n, r, l, i, a, o, u) {
  return e = la(n, r, !0, e, l, i, a, o, u), e.context = Rc(null), n = e.current, r = Ne(), l = Rt(n), i = gt(r, l), i.callback = t ?? null, Dt(n, i, l), e.current.lanes = l, Sr(e, l, r), Re(e, r), e;
}
function Al(e, t, n, r) {
  var l = t.current, i = Ne(), a = Rt(l);
  return n = Rc(n), t.context === null ? t.context = n : t.pendingContext = n, t = gt(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dt(l, t, a), e !== null && (lt(e, l, a, i), Yr(e, l, a)), a;
}
function jl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function So(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ia(e, t) {
  So(e, t), (e = e.alternate) && So(e, t);
}
function Sp() {
  return null;
}
var Oc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function sa(e) {
  this._internalRoot = e;
}
$l.prototype.render = sa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Al(e, t, null, null);
};
$l.prototype.unmount = sa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qt(function() {
      Al(null, e, null, null);
    }), t[vt] = null;
  }
};
function $l(e) {
  this._internalRoot = e;
}
$l.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = mu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++) ;
    Ct.splice(n, 0, e), n === 0 && gu(e);
  }
};
function aa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Vl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ko() {
}
function kp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = jl(a);
        i.call(f);
      };
    }
    var a = zc(t, r, e, 0, null, !1, !1, "", ko);
    return e._reactRootContainer = a, e[vt] = a.current, fr(e.nodeType === 8 ? e.parentNode : e), qt(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var f = jl(u);
      o.call(f);
    };
  }
  var u = la(e, 0, !1, null, null, !1, !1, "", ko);
  return e._reactRootContainer = u, e[vt] = u.current, fr(e.nodeType === 8 ? e.parentNode : e), qt(function() {
    Al(t, u, n, r);
  }), u;
}
function Ul(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = jl(a);
        o.call(u);
      };
    }
    Al(t, a, e, l);
  } else a = kp(n, t, e, l, r);
  return jl(a);
}
fu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes);
        n !== 0 && (js(t, n | 1), Re(t, fe()), !(J & 6) && (Mn = fe() + 500, Vt()));
      }
      break;
    case 13:
      qt(function() {
        var r = wt(e, 1);
        if (r !== null) {
          var l = Ne();
          lt(r, e, 1, l);
        }
      }), ia(e, 1);
  }
};
Ns = function(e) {
  if (e.tag === 13) {
    var t = wt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      lt(t, e, 134217728, n);
    }
    ia(e, 134217728);
  }
};
pu = function(e) {
  if (e.tag === 13) {
    var t = Rt(e), n = wt(e, t);
    if (n !== null) {
      var r = Ne();
      lt(n, e, t, r);
    }
    ia(e, t);
  }
};
mu = function() {
  return ee;
};
hu = function(e, t) {
  var n = ee;
  try {
    return ee = e, t();
  } finally {
    ee = n;
  }
};
Pi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ci(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Pl(r);
            if (!l) throw Error(M(90));
            Go(r), Ci(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ko(e, n);
      break;
    case "select":
      t = n.value, t != null && vn(e, !!n.multiple, t, !1);
  }
};
tu = ea;
nu = qt;
var Ep = { usingClientEntryPoint: !1, Events: [Er, dn, Pl, qo, eu, ea] }, Wn = { findFiberByHostInstance: Qt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cp = { bundleType: Wn.bundleType, version: Wn.version, rendererPackageName: Wn.rendererPackageName, rendererConfig: Wn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = iu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Wn.findFiberByHostInstance || Sp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ur.isDisabled && Ur.supportsFiber) try {
    Il = Ur.inject(Cp), ct = Ur;
  } catch {
  }
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ep;
We.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!aa(t)) throw Error(M(200));
  return _p(e, t, null, n);
};
We.createRoot = function(e, t) {
  if (!aa(e)) throw Error(M(299));
  var n = !1, r = "", l = Oc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = la(e, 1, !1, null, null, n, !1, r, l), e[vt] = t.current, fr(e.nodeType === 8 ? e.parentNode : e), new sa(t);
};
We.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = iu(t), e = e === null ? null : e.stateNode, e;
};
We.flushSync = function(e) {
  return qt(e);
};
We.hydrate = function(e, t, n) {
  if (!Vl(t)) throw Error(M(200));
  return Ul(null, e, t, !0, n);
};
We.hydrateRoot = function(e, t, n) {
  if (!aa(e)) throw Error(M(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", a = Oc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = zc(t, null, e, 1, n ?? null, l, !1, i, a), e[vt] = t.current, fr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new $l(t);
};
We.render = function(e, t, n) {
  if (!Vl(t)) throw Error(M(200));
  return Ul(null, e, t, !1, n);
};
We.unmountComponentAtNode = function(e) {
  if (!Vl(e)) throw Error(M(40));
  return e._reactRootContainer ? (qt(function() {
    Ul(null, null, e, !1, function() {
      e._reactRootContainer = null, e[vt] = null;
    });
  }), !0) : !1;
};
We.unstable_batchedUpdates = ea;
We.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Vl(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Ul(e, t, n, !1, r);
};
We.version = "18.3.1-next-f1338f8080-20240426";
function Fc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc);
    } catch (e) {
      console.error(e);
    }
}
Fc(), Fo.exports = We;
var Ae = Fo.exports, Ac, Eo = Ae;
Ac = Eo.createRoot, Eo.hydrateRoot;
window.api = Y;
const jp = async () => {
  const e = await Y.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
}, nl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const i = await Y.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  if (!i.ok)
    throw new Error(`Failed to fetch images: ${i.statusText}`);
  return await i.json();
}, Np = async (e) => {
  const t = await Y.fetchApi(`/meld/image/${e}/details`);
  if (!t.ok)
    throw new Error(`Failed to fetch image details: ${t.statusText}`);
  return await t.json();
}, Ip = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await Y.fetchApi(n);
  return r.ok ? await r.json() : [];
}, Tp = async () => {
  const e = await Y.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, $c = async () => {
  const e = await Y.fetchApi("/meld/settings");
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
      "gallery.related_phash_threshold": 8,
      "gallery.suggest_phash_threshold": 12,
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
      "viewer.shortcut.show_cheat_sheet": !0
    };
  const t = await e.json();
  return typeof t["sidebar.show_filename"] == "boolean" && (t["sidebar.show_filename"] = t["sidebar.show_filename"] ? "filename" : "none"), typeof t["viewer.details.show_filename"] == "boolean" && (t["viewer.details.show_filename"] = t["viewer.details.show_filename"] ? "filename" : "none"), typeof t["fullscreen.details.show_filename"] == "boolean" && (t["fullscreen.details.show_filename"] = t["fullscreen.details.show_filename"] ? "filename" : "none"), t;
}, Mp = async (e, t) => {
  if (!(await Y.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Lp = async (e, t) => {
  if (!(await Y.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Pp = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await Y.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  return r.ok ? await r.json() : [];
}, ds = async (e) => {
  const t = await Y.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, Dp = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await Y.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, fs = async (e, t = !1) => {
  const n = await Y.fetchApi("/meld/bulk-delete", {
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
}, ps = async (e) => {
  const t = await Y.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to restore images");
  }
}, Vc = async (e) => {
  const t = await Y.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, bp = async (e, t, n = !1, r) => {
  const l = await Y.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, Rp = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await Y.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, zp = async (e, t, n) => {
  const r = await Y.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, Op = async (e) => {
  const t = await Y.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Fp = async () => {
  if (!(await Y.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, Ap = async () => {
  const e = await Y.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, $p = async (e, t) => {
  if (!(await Y.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, Co = async (e) => {
  if (!(await Y.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, Vp = async (e, t) => {
  if (!(await Y.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, oa = async () => {
  const e = await Y.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, Up = async (e) => {
  const t = await Y.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, Wp = async (e) => {
  if (!(await Y.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, Qp = async (e, t) => {
  const n = await Y.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, Hp = async (e, t) => {
  if (!(await Y.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, Uc = async (e, t, n) => {
  if (!(await Y.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, Gp = async (e) => {
  const t = await Y.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, Bp = async (e) => {
  const t = await Y.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Wc = { exports: {} }, Wl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kp = y, Yp = Symbol.for("react.element"), Xp = Symbol.for("react.fragment"), Jp = Object.prototype.hasOwnProperty, Zp = Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qc(e, t, n) {
  var r, l = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) Jp.call(t, r) && !qp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Yp, type: e, key: i, ref: a, props: l, _owner: Zp.current };
}
Wl.Fragment = Xp;
Wl.jsx = Qc;
Wl.jsxs = Qc;
Wc.exports = Wl;
var s = Wc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var em = {
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
const tm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), X = (e, t) => {
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
        ...em,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${tm(e)}`, o].join(" "),
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
const nm = X("AlertTriangle", [
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
const rm = X("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hc = X("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = X("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = X("ArrowUpDown", [
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
const Gc = X("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const im = X("Box", [
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
const sm = X("Calendar", [
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
const am = X("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bc = X("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kc = X("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yc = X("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = X("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = X("Download", [
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
const cm = X("Folder", [
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
const dm = X("Info", [
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
const Xc = X("LayoutGrid", [
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
const fm = X("LayoutList", [
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
const pm = X("Maximize", [
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
const mm = X("Minimize", [
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
const hm = X("MoreVertical", [
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
const Jc = X("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = X("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ym = X("PlusCircle", [
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
const ua = X("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = X("RefreshCw", [
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
const Ln = X("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vm = X("Settings", [
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
const wm = X("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = X("Star", [
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
const nn = X("Tag", [
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
const Pn = X("Trash2", [
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
const xm = X("Type", [
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
const _m = X("Upload", [
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
const Ie = X("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let Nl = !1;
const Sm = (e) => {
  Nl = e, Nl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, km = (...e) => {
  Nl && console.log("[Meld]", ...e);
}, Em = (...e) => {
  Nl && console.warn("[Meld]", ...e);
}, Cm = (...e) => {
  console.error("[Meld]", ...e);
}, W = {
  log: km,
  warn: Em,
  error: Cm,
  init: Sm
}, jm = {
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
    "gallery.related_phash_threshold": 8,
    "gallery.suggest_phash_threshold": 12,
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
    "viewer.shortcut.show_cheat_sheet": !0
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
function Nm(e, t) {
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
const Zc = y.createContext(void 0), Im = ({
  children: e
}) => {
  const [t, n] = y.useReducer(Nm, jm), r = y.useRef(t.images.length), l = y.useRef(0);
  y.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const i = y.useCallback(
    async (v, g, S) => {
      const I = t.settings["gallery.max_load_count"], c = 200;
      let d = v;
      for (; d < Math.min(g, I) && S === l.current; )
        try {
          const m = Math.min(c, I - d);
          W.log("Background fetch: starting chunk", {
            offset: d,
            limit: m
          });
          const E = await nl(
            d,
            m,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== l.current || (n({ type: "APPEND_IMAGES", payload: E }), d += E.images.length, E.images.length === 0 || d >= E.total))
            break;
          await new Promise((D) => setTimeout(D, 300));
        } catch (m) {
          W.error("Background fetch failed", m);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = y.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const v = performance.now(), g = ++l.current;
    try {
      const S = t.searchQuery.trim() !== "", I = t.settings["gallery.initial_load_count"];
      W.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: I,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const c = await nl(
        0,
        I,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), d = performance.now() - v;
      W.log("refreshImages: initial fetch complete", {
        count: c.images.length,
        total: c.total,
        offset: c.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: c }), c.total > I && i(I, c.total, g);
    } catch (S) {
      W.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
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
      const g = r.current, S = t.searchQuery.trim() !== "", I = t.pagination.limit;
      W.log("loadMoreImages: starting fetch", {
        nextOffset: g,
        fetchLimit: I,
        isSearch: S
      });
      const c = await nl(
        g,
        I,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), d = performance.now() - v;
      W.log("loadMoreImages: fetch complete", {
        count: c.images.length,
        total: c.total,
        offset: c.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: c });
    } catch (g) {
      W.error("loadMoreImages: fetch failed", g), n({
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
      const v = await Ap();
      n({ type: "SET_FAVORITES", payload: v });
    } catch (v) {
      W.error("Failed to load favorites", v);
    }
  }, []), f = y.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds), S = t.images.filter(
      (I) => t.selectedIds.has(I.id)
    ).some(
      (I) => I.parent_id || I.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: v,
        hasLineage: S,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), w = y.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 }), await ps(v), t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: v }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (g) {
      n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [t.selectedIds, t.viewScope]), x = y.useCallback(
    async (v, g) => {
      try {
        await Mp(v, g), n({ type: "SET_SETTINGS", payload: { [v]: g } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), h = y.useCallback(
    async (v) => {
      const g = t.images.find((S) => S.id === v);
      if (g && !g.is_minimal)
        return g;
      try {
        W.log("fetchFullImageDetails: fetching full data", { id: v });
        const S = await Np(v);
        return n({ type: "UPDATE_IMAGE", payload: S }), S;
      } catch (S) {
        throw W.error("Failed to fetch image details", S), S;
      }
    },
    [t.images]
  );
  return y.useEffect(() => {
    (async () => {
      try {
        const g = await $c();
        n({ type: "SET_SETTINGS", payload: g });
      } catch (g) {
        W.error("Failed to load settings", g);
      }
    })();
  }, []), y.useEffect(() => {
    u();
  }, [u]), y.useEffect(() => {
    const v = () => {
      a();
    }, g = (I) => {
      const c = I.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: c }
      });
    }, S = (I) => {
      const c = I.detail;
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
    return window.addEventListener("meld-refresh", v), window.addEventListener("meld-scan-progress", g), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", v), window.removeEventListener("meld-scan-progress", g), window.removeEventListener("meld-scan-finished", S);
    };
  }, [a, t.scanStatus.progress.total]), y.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ s.jsx(
    Zc.Provider,
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
}, st = () => {
  const e = y.useContext(Zc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Tm = ({
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
}, Mm = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = st(), l = e.selectedIds.size;
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
                  rr,
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
                  Pn,
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
                  nn,
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
                  Pn,
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
              /* @__PURE__ */ s.jsx(Ie, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, qc = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: i } = st(), a = y.useRef(!0);
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
      ), S = g.findIndex(
        (c) => c.id === v
      );
      if (S === -1) return;
      let I = !1;
      for (let c = S + 1; c < g.length; c++)
        if (!h.has(g[c].id)) {
          i({
            type: "OPEN_VIEWER",
            payload: { id: g[c].id, mode: l.viewerMode }
          }), I = !0;
          break;
        }
      if (!I) {
        for (let c = S - 1; c >= 0; c--)
          if (!h.has(g[c].id)) {
            i({
              type: "OPEN_VIEWER",
              payload: { id: g[c].id, mode: l.viewerMode }
            }), I = !0;
            break;
          }
      }
      I || i({ type: "CLOSE_VIEWER" });
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
        (S) => S.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && S.has_children)
      ), v = new Set(e), g = h.filter(
        (S) => v.has(S.id)
      );
      if (f(v), await fs(e, n), !a.current) return;
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
        (S) => S.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && S.has_children)
      ), v = new Set(e);
      for (const S of e) {
        const I = await ds(S);
        if (!a.current) return;
        for (const c of I)
          v.add(c.id);
      }
      const g = h.filter(
        (S) => v.has(S.id)
      );
      if (f(v), await fs(Array.from(v), n), !a.current) return;
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
  return Ae.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: u, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (h) => h.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ s.jsx(Pn, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: u,
                children: /* @__PURE__ */ s.jsx(Ie, { size: 20 })
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
                        nm,
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
}, je = (e) => {
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
}, Lm = ({ image: e }) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = st(), l = t.selectedIds.has(e.id), a = (t.settings["gallery.view_mode"] || "grid_details") === "grid_only", [o, u] = y.useState(null), [f, w] = y.useState(!1), [x, h] = y.useState(null), [v, g] = y.useState(!1), S = y.useRef(null), I = async (p, R, k = !1) => {
    try {
      await navigator.clipboard.writeText(p), k ? (g(!0), setTimeout(() => g(!1), 2e3)) : (h(R), setTimeout(() => h(null), 2e3));
    } catch (P) {
      console.error("Failed to copy text: ", P);
    }
  };
  y.useEffect(() => {
    const p = (k) => {
      k.key === "Escape" && (o ? u(null) : w(!1));
    }, R = (k) => {
      S.current && !S.current.contains(k.target) && w(!1);
    };
    return window.addEventListener("keydown", p), f && document.addEventListener("mousedown", R), () => {
      window.removeEventListener("keydown", p), document.removeEventListener("mousedown", R);
    };
  }, [f, o]);
  const c = (p) => {
    const R = t.settings["gallery.lineage_max_depth"];
    if (R === 0) return [];
    if (p.ancestors && p.ancestors.length > 0)
      return p.ancestors.slice(0, R).map((N) => ({
        id: N.id,
        imgSrc: je(N)
      }));
    const k = p.parent_id;
    if (!k || !p.parent_filename) return [];
    const P = t.images.find((N) => N.id === k);
    let V = null;
    if (P ? V = je(P) : V = je({
      filename: p.parent_filename,
      subfolder: p.parent_subfolder || "",
      type: p.parent_type
    }), !V) return [];
    const Z = {
      id: k || null,
      imgSrc: V
    };
    if (P && R > 1) {
      const N = c(P);
      return [Z, ...N].slice(0, R);
    }
    return [Z];
  }, d = c(e), E = t.settings["sidebar.show_filename"] === "filepath" ? `${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, D = je(e), z = (p) => {
    p.shiftKey ? (p.preventDefault(), p.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : p.ctrlKey || p.metaKey || t.selectedIds.size > 0 ? (p.preventDefault(), p.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, C = (p) => {
    p.shiftKey ? (p.preventDefault(), p.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : p.ctrlKey || p.metaKey || t.selectedIds.size > 0 ? (p.preventDefault(), p.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, b = (p) => {
    (p.shiftKey || p.ctrlKey || p.metaKey || t.selectedIds.size > 0) && p.preventDefault();
  }, G = (p) => {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, O = async () => {
    try {
      const p = await Gp(e.id);
      if (!p.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        p.workflow
      ), W.log("Workflow restored successfully from Meld");
    } catch (p) {
      W.error("Error restoring workflow:", p), alert("Failed to restore workflow.");
    }
  }, _ = async () => {
    try {
      const p = await Bp(e.id), R = "MeldUnifiedLoader", k = window.app, V = window.LiteGraph.createNode(R);
      if (!V) {
        console.error(`Node type ${R} not found.`), alert(
          `Node type ${R} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const Z = {
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
      if (V.widgets) {
        for (const [j, U] of Object.entries(Z)) {
          const H = p[j];
          if (H != null) {
            const ue = V.widgets.find(
              (ze) => ze.name === U
            );
            ue && (ue.value = H);
          }
        }
        const $ = V.widgets.find(
          (j) => j.name === "control_after_generate"
        );
        $ && ($.value = "fixed");
      }
      const N = k.canvas.ds.offset, A = k.canvas.ds.scale;
      V.pos = [(-N[0] + 400) / A, (-N[1] + 300) / A], k.graph.add(V), k.canvas.selectNode(V), k.canvas.centerOnNode(V);
    } catch (p) {
      console.error("Error adding Unified Loader:", p), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-image-card ${l ? "meld-image-card--selected" : ""} ${a ? "meld-image-card--grid-only" : ""}`,
      onClick: C,
      onMouseDown: b,
      onKeyDown: G,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
          "img",
          {
            src: D,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: b,
            onClick: (p) => {
              p.stopPropagation(), z(p);
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
              (p, R) => p.imgSrc && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: p.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (k) => {
                    k.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: p.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: R === 0 ? "Source" : R === 1 ? "Grand-Source" : `Ancestor (S${R + 1})`,
                  alt: "source thumb"
                },
                p.id || R
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
              onClick: async (p) => {
                p.stopPropagation();
                const R = await r(e.id);
                u({
                  title: "Model",
                  text: R.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (p) => {
                      p.stopPropagation();
                      const R = await r(e.id);
                      I(R.model_name || "-", "Model");
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
              onClick: async (p) => {
                p.stopPropagation();
                const R = await r(e.id);
                u({
                  title: "Positive Prompt",
                  text: R.positive_prompt || R.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (p) => {
                      p.stopPropagation();
                      const R = await r(e.id);
                      I(
                        R.positive_prompt || R.positive || "-",
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
              onClick: async (p) => {
                p.stopPropagation();
                const R = await r(e.id);
                u({
                  title: "Negative Prompt",
                  text: R.negative_prompt || R.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${x === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (p) => {
                      p.stopPropagation();
                      const R = await r(e.id);
                      I(
                        R.negative_prompt || R.negative || "-",
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
              onClick: (p) => {
                p.stopPropagation(), n({
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
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((p, R) => /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    className: "meld-image-card__tag",
                    children: p
                  },
                  `${p}-${R}`
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
        !a && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu-container", ref: S, children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (p) => {
                p.stopPropagation(), w(!f);
              },
              title: "Menu",
              children: /* @__PURE__ */ s.jsx(hm, { size: 16 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (p) => {
                p.stopPropagation(), _();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ s.jsx(jo, { size: 16 })
            }
          ),
          f && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (p) => {
                  p.stopPropagation(), _(), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(jo, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (p) => {
                  p.stopPropagation(), O(), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(rm, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (p) => {
                  p.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(ym, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (p) => {
                  p.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), w(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(nn, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        o && Ae.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-prompt-popup-overlay",
              onClick: (p) => {
                p.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-prompt-popup-content",
                  onClick: (p) => p.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-header", children: [
                      /* @__PURE__ */ s.jsx("span", { children: o.title }),
                      /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            v ? /* @__PURE__ */ s.jsx(
                              Bc,
                              {
                                size: 18,
                                style: { color: "var(--meld-success-color)" }
                              }
                            ) : /* @__PURE__ */ s.jsx(
                              om,
                              {
                                className: "meld-prompt-popup-copy",
                                size: 18,
                                onClick: () => I(o.text, "", !0)
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              Ie,
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
}, ed = () => {
  const { dispatch: e } = st(), [t, n] = y.useState(() => {
    const _ = localStorage.getItem("meld-import-config"), p = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (_)
      try {
        const R = JSON.parse(_);
        return { ...p, ...R, tags: [] };
      } catch {
        return p;
      }
    return p;
  });
  y.useEffect(() => {
    const { tags: _, ...p } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(p));
  }, [t]);
  const [r, l] = y.useState([]), [i, a] = y.useState([]), [o, u] = y.useState(0), [f, w] = y.useState(!1), [x, h] = y.useState([]), [v, g] = y.useState(""), [S, I] = y.useState(!1), [c, d] = y.useState(null);
  y.useEffect(() => {
    (async () => {
      try {
        const p = await jp();
        n((R) => R.custom_path ? R : { ...R, custom_path: p });
      } catch (p) {
        W.error("Failed to fetch home directory:", p);
      }
    })();
  }, []), y.useEffect(() => {
    const _ = new AbortController();
    return (async () => {
      const R = t.type === "custom" ? t.custom_path : t.subfolder;
      if (W.log(
        `loadFolders started. Path: "${R}", Type: "${t.type}"`
      ), t.type === "custom" && !R) {
        W.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      w(!0);
      const k = R, P = t.type;
      try {
        W.log("Step 1: Fast load starting...");
        const V = await bp(
          t.type,
          R,
          !0,
          _.signal
        );
        if (_.signal.aborted) {
          W.log("Step 1: Aborted.");
          return;
        }
        W.log(
          `Step 1 complete. Found ${V.folders.length} folders, ${V.images.length} images.`
        ), l(V.folders), a(V.images), u(null);
        const Z = V.folders.map((N) => N.name);
        Z.length > 0 && (W.log(
          `Step 2: Metadata fetch starting for ${Z.length} folders...`
        ), Rp(
          P,
          k,
          Z,
          _.signal
        ).then((N) => {
          if (_.signal.aborted) {
            W.log("Step 2: Aborted.");
            return;
          }
          W.log("Step 2: Metadata fetch complete."), l(
            (A) => A.map(($) => {
              const j = N[$.name];
              return j ? { ...$, count: j.count, preview: j.preview } : $;
            })
          );
        }).catch((N) => {
          N.name !== "AbortError" && W.error("Step 2: Metadata fetch failed:", N);
        })), W.log("Step 3: Path image count starting..."), zp(P, k, _.signal).then((N) => {
          if (_.signal.aborted) {
            W.log("Step 3: Aborted.");
            return;
          }
          W.log(`Step 3: Path image count complete: ${N}`), u(N);
        }).catch((N) => {
          N.name !== "AbortError" && W.error("Step 3: Path image count failed:", N);
        });
      } catch (V) {
        if (V.name === "AbortError") {
          W.log("Request aborted.");
          return;
        }
        W.error("Failed to load folders:", V), l([]), a([]), u(0);
      } finally {
        _.signal.aborted || w(!1);
      }
    })(), () => {
      _.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const m = y.useCallback(async () => {
    I(!0);
    try {
      const _ = await oa();
      h(_);
    } catch (_) {
      W.error("Failed to fetch tags:", _);
    } finally {
      I(!1);
    }
  }, []);
  y.useEffect(() => {
    m();
  }, [m]), y.useEffect(() => {
    const _ = (p) => {
      p.key === "Escape" && (p.preventDefault(), p.stopImmediatePropagation(), c ? d(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => window.removeEventListener("keydown", _, { capture: !0 });
  }, [c, e]);
  const E = y.useMemo(() => x.filter(
    (_) => _.name.toLowerCase().includes(v.toLowerCase()) && !t.tags.includes(_.name)
  ), [x, v, t.tags]), D = (_) => {
    const p = _.trim();
    p && !t.tags.includes(p) && (n({ ...t, tags: [...t.tags, p] }), g(""));
  }, z = (_) => {
    n({ ...t, tags: t.tags.filter((p) => p !== _) });
  }, C = (_) => {
    _.key === "Enter" && v.trim() && (_.preventDefault(), D(v.trim()));
  }, b = async () => {
    try {
      await Op(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (_) {
      W.error("Failed to start scan:", _), alert(`Failed to start scan: ${_}`);
    }
  }, G = (_) => {
    if (t.type === "custom") {
      const p = t.custom_path.includes("\\") ? "\\" : "/", R = t.custom_path.endsWith(p) ? `${t.custom_path}${_}` : `${t.custom_path}${p}${_}`;
      n({ ...t, custom_path: R });
    } else {
      const p = t.subfolder ? `${t.subfolder}/${_}` : _;
      n({ ...t, subfolder: p });
    }
  }, O = () => {
    if (t.type === "custom") {
      const _ = t.custom_path.includes("\\") ? "\\" : "/", p = t.custom_path.split(_);
      if (p.length > 1) {
        p.pop();
        let R = p.join(_);
        R === "" && _ === "/" && (R = "/"), n({ ...t, custom_path: R });
      }
    } else {
      const _ = t.subfolder.split("/");
      _.pop(), n({ ...t, subfolder: _.join("/") });
    }
  };
  return Ae.createPortal(
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
              onClick: (_) => _.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(Ie, { size: 20 })
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
                          onChange: (_) => n({
                            ...t,
                            type: _.target.value,
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
                          onChange: (_) => n({ ...t, recursive: _.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "link-strategy", children: "Parent Linking" }),
                      /* @__PURE__ */ s.jsxs(
                        "select",
                        {
                          id: "link-strategy",
                          value: t.link_strategy,
                          onChange: (_) => n({
                            ...t,
                            link_strategy: _.target.value,
                            auto_link_parent: _.target.value !== "none"
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((_) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        _,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => z(_),
                            children: /* @__PURE__ */ s.jsx(Ie, { size: 12 })
                          }
                        )
                      ] }, _)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(Ln, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: v,
                            onChange: (_) => g(_.target.value),
                            onKeyDown: C
                          }
                        ),
                        v.trim() && !t.tags.includes(v.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => D(v),
                            children: /* @__PURE__ */ s.jsx(ua, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: S ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : E.length === 0 ? v && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        v
                      ] }) : E.map((_) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => D(_.name),
                          children: _.name
                        },
                        _.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: b,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(gm, { size: 16 }),
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
                          onClick: O,
                          children: [
                            /* @__PURE__ */ s.jsx(Kc, { size: 16 }),
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
                          onChange: (_) => n({ ...t, custom_path: _.target.value }),
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
                      r.map((_) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => G(_.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: _.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: je(_.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(cm, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: _.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${_.count === null ? "meld-folder-count--loading" : ""}`,
                                children: _.count !== null ? `${_.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(Yc, { size: 14 })
                          ]
                        },
                        _.name
                      )),
                      i.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: i.map((_) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => d(_),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: je(_),
                              alt: _.filename,
                              title: _.filename
                            }
                          )
                        },
                        _.filename
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
              onClick: (_) => {
                _.stopPropagation(), d(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (_) => _.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => d(null),
                          children: /* @__PURE__ */ s.jsx(Ie, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: je(c),
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
}, td = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = st(), [l, i] = y.useState([]), [a, o] = y.useState(!0), [u, f] = y.useState(!1), w = t.images.find((c) => c.id === e), x = y.useCallback(async () => {
    o(!0);
    try {
      const c = t.settings["gallery.suggest_phash_threshold"], d = await Pp(e, c);
      i(d);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  y.useEffect(() => {
    x();
  }, [x]);
  const h = async (c) => {
    try {
      await Lp(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, v = async (c) => {
    o(!0);
    try {
      const d = await Dp(c), { id: m } = await Vc({
        filename: d.name,
        subfolder: d.subfolder || "",
        type: d.type || "input"
      });
      await h(m);
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
  const S = l.filter((c) => c.is_source_match), I = l.filter((c) => !c.is_source_match);
  return Ae.createPortal(
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
                children: /* @__PURE__ */ s.jsx(Ie, { size: 20 })
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
                  /* @__PURE__ */ s.jsx(_m, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              S.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: S.map((c) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ s.jsx("img", { src: je(c), alt: c.filename }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: c.filename }) })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                I.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: I.map((c) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ s.jsx("img", { src: je(c), alt: c.filename }),
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
}, nd = () => {
  const { state: e, dispatch: t, updateSetting: n } = st(), [r, l] = y.useState("General"), [i, a] = y.useState({
    ...e.settings
  }), [o, u] = y.useState(
    {}
  ), [f, w] = y.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [x, h] = y.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [v, g] = y.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [S, I] = y.useState(e.settings["viewer.thumbnail_window_size"].toString()), [c, d] = y.useState(e.settings["gallery.trash_retention_days"].toString()), [m, E] = y.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [D, z] = y.useState(
    e.settings["gallery.related_phash_threshold"].toString()
  ), [C, b] = y.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [G, O] = y.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    _,
    p
  ] = y.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    R,
    k
  ] = y.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), P = [
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
      key: "gallery.suggest_phash_threshold",
      label: "Parent Suggestion Threshold",
      description: "Maximum pHash distance for automatic parent linking (0-64). Default: 12. Recommended: 8-16. Smaller is stricter.",
      type: "number",
      category: "General",
      min: 0,
      max: 64
    },
    {
      key: "gallery.related_phash_threshold",
      label: "Related Images Threshold",
      description: "Maximum pHash distance for 'Similar Images' view (0-64). Default: 8. Recommended: 4-12. Smaller is stricter.",
      type: "number",
      category: "General",
      min: 0,
      max: 64
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
      key: "viewer.details.show_source",
      label: "Show Source",
      description: "Display source image information in the details panel.",
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
      key: "fullscreen.details.show_source",
      label: "Show Source",
      description: "Display source image information in fullscreen details.",
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
    },
    {
      key: "viewer.shortcut.1",
      label: "Shortcut 1 (Key: 1)",
      description: "Command to execute when pressing '1' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.2",
      label: "Shortcut 2 (Key: 2)",
      description: "Command to execute when pressing '2' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.3",
      label: "Shortcut 3 (Key: 3)",
      description: "Command to execute when pressing '3' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.4",
      label: "Shortcut 4 (Key: 4)",
      description: "Command to execute when pressing '4' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.5",
      label: "Shortcut 5 (Key: 5)",
      description: "Command to execute when pressing '5' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.6",
      label: "Shortcut 6 (Key: 6)",
      description: "Command to execute when pressing '6' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.7",
      label: "Shortcut 7 (Key: 7)",
      description: "Command to execute when pressing '7' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.8",
      label: "Shortcut 8 (Key: 8)",
      description: "Command to execute when pressing '8' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.9",
      label: "Shortcut 9 (Key: 9)",
      description: "Command to execute when pressing '9' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.0",
      label: "Shortcut 0 (Key: 0)",
      description: "Command to execute when pressing '0' in View/Full Screen mode.",
      type: "text",
      category: "Shortcuts"
    },
    {
      key: "viewer.shortcut.show_cheat_sheet",
      label: "Show Cheat Sheet",
      description: "Display shortcut key guide in View/Full Screen mode.",
      type: "boolean",
      category: "Shortcuts"
    }
  ], V = async () => {
    const j = Object.keys(i).filter(
      (U) => i[U] !== e.settings[U] && !o[U]
    );
    if (j.length > 0)
      for (const U of j)
        await n(U, i[U]);
    t({ type: "CLOSE_MODAL" });
  }, Z = (j, U) => {
    a((H) => ({
      ...H,
      [j]: !U
    }));
  }, N = (j) => j.trim() ? j.trim().split(/\s+/).every((H) => !!(H === "next" || H === "prev" || H.startsWith("tag:") && H.length > 4 || H.startsWith("-tag:") && H.length > 5 || H.startsWith("tag-toggle:") && H.length > 11)) : !0, A = (j, U, H, ue) => {
    j === "gallery.initial_load_count" ? w(U) : j === "gallery.max_load_count" ? h(U) : j === "gallery.lineage_max_depth" ? g(U) : j === "viewer.thumbnail_window_size" ? I(U) : j === "gallery.trash_retention_days" ? d(U) : j === "gallery.suggest_phash_threshold" ? E(U) : j === "gallery.related_phash_threshold" ? z(U) : j === "viewer.details.max_positive_prompt_lines" ? b(U) : j === "viewer.details.max_negative_prompt_lines" ? O(U) : j === "fullscreen.details.max_positive_prompt_lines" ? p(U) : j === "fullscreen.details.max_negative_prompt_lines" && k(U);
    const ze = Number.parseInt(U, 10);
    if (!Number.isNaN(ze)) {
      let L = ze;
      H !== void 0 && L < H && (L = H), ue !== void 0 && L > ue && (L = ue), a((Q) => ({
        ...Q,
        [j]: L
      }));
    }
  }, $ = P.filter(
    (j) => j.category === r
  );
  return Ae.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: V, children: /* @__PURE__ */ s.jsxs(
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
                onClick: V,
                children: /* @__PURE__ */ s.jsx(Ie, { size: 20 })
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
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Shortcuts" ? "active" : ""}`,
                  onClick: () => l("Shortcuts"),
                  children: "Shortcuts"
                }
              )
            ] }) }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              r === "Shortcuts" && /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-help", children: [
                /* @__PURE__ */ s.jsx("p", { children: "These shortcuts are available in both View and Full Screen modes." }),
                /* @__PURE__ */ s.jsxs("p", { children: [
                  "You can combine multiple commands with spaces.",
                  /* @__PURE__ */ s.jsx("br", {}),
                  "Example: ",
                  /* @__PURE__ */ s.jsx("code", { children: "tag:favorite next" }),
                  " (Add tag and move to next)"
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
                      /* @__PURE__ */ s.jsx("code", { children: "next" }),
                      " / ",
                      /* @__PURE__ */ s.jsx("code", { children: "prev" }),
                      " - Navigate images"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-settings-list", children: $.map((j) => {
                var U;
                return /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
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
                          checked: !!i[j.key],
                          onChange: () => Z(
                            j.key,
                            !!i[j.key]
                          )
                        }
                      ),
                      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
                    ] }),
                    j.type === "number" && /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        type: "number",
                        className: "meld-number-input",
                        value: j.key === "gallery.initial_load_count" ? f : j.key === "gallery.max_load_count" ? x : j.key === "gallery.lineage_max_depth" ? v : j.key === "viewer.thumbnail_window_size" ? S : j.key === "viewer.details.max_positive_prompt_lines" ? C : j.key === "viewer.details.max_negative_prompt_lines" ? G : j.key === "fullscreen.details.max_positive_prompt_lines" ? _ : j.key === "fullscreen.details.max_negative_prompt_lines" ? R : j.key === "gallery.trash_retention_days" ? c : j.key === "gallery.suggest_phash_threshold" ? m : j.key === "gallery.related_phash_threshold" ? D : i[j.key],
                        min: j.min,
                        max: j.max,
                        onChange: (H) => A(
                          j.key,
                          H.target.value,
                          j.min,
                          j.max
                        ),
                        onBlur: () => {
                          j.key === "gallery.initial_load_count" ? w(
                            i["gallery.initial_load_count"].toString()
                          ) : j.key === "gallery.max_load_count" ? h(
                            i["gallery.max_load_count"].toString()
                          ) : j.key === "gallery.lineage_max_depth" ? g(
                            i["gallery.lineage_max_depth"].toString()
                          ) : j.key === "viewer.thumbnail_window_size" ? I(
                            i["viewer.thumbnail_window_size"].toString()
                          ) : j.key === "gallery.trash_retention_days" ? d(
                            i["gallery.trash_retention_days"].toString()
                          ) : j.key === "gallery.suggest_phash_threshold" ? E(
                            i["gallery.suggest_phash_threshold"].toString()
                          ) : j.key === "gallery.related_phash_threshold" ? z(
                            i["gallery.related_phash_threshold"].toString()
                          ) : j.key === "viewer.details.max_positive_prompt_lines" ? b(
                            i["viewer.details.max_positive_prompt_lines"].toString()
                          ) : j.key === "viewer.details.max_negative_prompt_lines" ? O(
                            i["viewer.details.max_negative_prompt_lines"].toString()
                          ) : j.key === "fullscreen.details.max_positive_prompt_lines" ? p(
                            i["fullscreen.details.max_positive_prompt_lines"].toString()
                          ) : j.key === "fullscreen.details.max_negative_prompt_lines" && k(
                            i["fullscreen.details.max_negative_prompt_lines"].toString()
                          );
                        }
                      }
                    ),
                    j.type === "select" && /* @__PURE__ */ s.jsx(
                      "select",
                      {
                        className: "meld-select",
                        value: i[j.key],
                        onChange: (H) => a((ue) => ({
                          ...ue,
                          [j.key]: H.target.value
                        })),
                        children: (U = j.options) == null ? void 0 : U.map((H) => /* @__PURE__ */ s.jsx("option", { value: H.value, children: H.label }, H.value))
                      }
                    ),
                    j.type === "text" && /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        type: "text",
                        className: `meld-text-input ${o[j.key] ? "meld-text-input--error" : ""}`,
                        value: i[j.key] || "",
                        onChange: (H) => {
                          a((ue) => ({
                            ...ue,
                            [j.key]: H.target.value
                          }));
                        },
                        onBlur: () => {
                          if (j.key.startsWith("viewer.shortcut.")) {
                            const H = N(
                              i[j.key] || ""
                            );
                            u((ue) => ({
                              ...ue,
                              [j.key]: !H
                            }));
                          }
                        }
                      }
                    )
                  ] })
                ] }, j.key);
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
              ] }) }),
              r === "Shortcuts" && /* @__PURE__ */ s.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Reset Shortcuts" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "Restore all shortcuts to their default values." })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-button meld-button--secondary",
                    onClick: () => {
                      a((j) => ({
                        ...j,
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
                      })), u({});
                    },
                    children: "Reset to Defaults"
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
}, nt = "none", rd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = st(), [i, a] = y.useState([]), [o, u] = y.useState(t), [f, w] = y.useState(""), [x, h] = y.useState(!0), [v, g] = y.useState(!1), S = y.useRef(null), I = e.length > 1, c = y.useCallback(async () => {
    h(!0);
    try {
      const C = await oa();
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
    S.current && S.current.focus();
    const C = (b) => {
      b.key === "Escape" && (b.preventDefault(), b.stopPropagation(), b.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", C, { capture: !0 }), () => window.removeEventListener("keydown", C, {
      capture: !0
    });
  }, [n]);
  const d = y.useMemo(() => i.filter(
    (C) => C.name.toLowerCase().includes(f.toLowerCase()) && !o.includes(C.name)
  ), [i, f, o]), m = (C) => {
    const b = C.trim();
    if (b.toLowerCase() === nt) {
      alert(
        `Tag name '${nt}' is reserved for search and cannot be used.`
      );
      return;
    }
    b && !o.includes(b) && (u([...o, b]), w(""));
  }, E = (C) => {
    u(o.filter((b) => b !== C));
  }, D = async () => {
    g(!0);
    try {
      if (I) {
        const C = o.filter((G) => !t.includes(G)), b = t.filter(
          (G) => !o.includes(G)
        );
        await Uc(e, C, b);
      } else
        await Hp(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (C) {
      console.error("Failed to update tags:", C), alert("Failed to update tags.");
    } finally {
      g(!1);
    }
  }, z = (C) => {
    C.key === "Enter" && f.trim() ? (C.preventDefault(), C.stopPropagation(), m(f.trim())) : C.key === "Escape" && (C.preventDefault(), C.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return Ae.createPortal(
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
              /* @__PURE__ */ s.jsx(nn, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: I ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(Ie, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            I && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: I ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((C) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                C,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => E(C),
                    children: /* @__PURE__ */ s.jsx(Ie, { size: 12 })
                  }
                )
              ] }, C)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(Ln, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: f,
                    onChange: (C) => w(C.target.value),
                    onKeyDown: z
                  }
                ),
                f.trim() && !o.includes(f.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => m(f),
                    children: [
                      /* @__PURE__ */ s.jsx(ua, { size: 14 }),
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
                  onClick: () => m(C.name),
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
                onClick: D,
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
}, ld = y.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, o = je(e);
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
              children: i ? /* @__PURE__ */ s.jsx(Gc, { size: 12 }) : /* @__PURE__ */ s.jsx(Hc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
ld.displayName = "ThumbnailItem";
const Pm = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = st(), { viewerImageId: l, images: i, viewerMode: a, lineageImages: o } = e, [u, f] = y.useState(!1), [w, x] = y.useState(
    e.settings["viewer.show_details_by_default"]
  ), [h, v] = y.useState(null), g = h ?? e.settings["viewer.show_thumbnails"], [S, I] = y.useState(!1), [c, d] = y.useState(!1), [m, E] = y.useState(null), [D, z] = y.useState(
    null
  ), C = y.useRef(null), b = y.useRef(!0);
  y.useEffect(() => () => {
    b.current = !1;
  }, []);
  const G = y.useRef(l);
  y.useEffect(() => {
    G.current = l;
  }, [l]);
  const O = y.useMemo(() => a === "lineage" ? o : i.filter(
    (L) => L.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && L.has_children)
  ), [a, o, i, e.settings]), _ = y.useMemo(() => l === null ? -1 : O.findIndex((L) => L.id === l), [O, l]), p = y.useMemo(() => (a === "lineage" && o.length > 0 ? o : i).find((L) => L.id === l), [a, o, i, l]), R = y.useMemo(() => {
    if (!g || _ === -1) return [];
    const L = e.settings["viewer.thumbnail_window_size"], Q = Math.floor(L / 2);
    let T = Math.max(0, _ - Q);
    const q = Math.min(O.length, T + L);
    return q === O.length && (T = Math.max(0, q - L)), O.slice(T, q).map((B, Oe) => ({
      img: B,
      absIndex: T + Oe
    }));
  }, [
    O,
    _,
    e.settings["viewer.thumbnail_window_size"],
    g
  ]), k = y.useCallback(async () => {
    if (!p) return;
    const L = u ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
    if (L === "confirm") {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [p.id],
          hasLineage: !!(p.parent_id || p.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
      return;
    }
    try {
      const Q = e.viewScope === "trash", T = /* @__PURE__ */ new Set([p.id]);
      if (L === "lineage") {
        const q = await ds(p.id);
        for (const B of q)
          T.add(B.id);
      }
      if (!b.current || G.current === null) return;
      if (O.length > T.size) {
        let q = !1;
        for (let B = _ + 1; B < O.length; B++)
          if (!T.has(O[B].id)) {
            t({
              type: "OPEN_VIEWER",
              payload: { id: O[B].id, mode: a }
            }), q = !0;
            break;
          }
        if (!q) {
          for (let B = _ - 1; B >= 0; B--)
            if (!T.has(O[B].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: O[B].id, mode: a }
              }), q = !0;
              break;
            }
        }
        q || t({ type: "CLOSE_VIEWER" });
      } else
        t({ type: "CLOSE_VIEWER" });
      if (await fs(Array.from(T), Q), !Q) {
        const q = O.filter(
          (B) => T.has(B.id)
        );
        E(q);
      }
      t({ type: "REMOVE_IMAGES", payload: Array.from(T) });
    } catch (Q) {
      t({
        type: "SET_ERROR",
        payload: Q instanceof Error ? Q.message : String(Q)
      });
    }
  }, [
    p,
    u,
    e.settings,
    e.viewScope,
    O,
    _,
    a,
    t
  ]), P = y.useCallback(() => {
    p && t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: [p.id],
        tags: p.tags || []
      }
    });
  }, [p, t]), V = y.useCallback(async () => {
    const L = u ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (_ === 0 && a === "gallery" && e.pagination.hasMore && !c && L) {
      d(!0);
      try {
        const Q = e.pagination.limit, T = e.pagination.total, q = Math.max(0, T - Q), B = await nl(
          q,
          Q,
          e.searchQuery
        );
        if (!b.current || (t({ type: "APPEND_IMAGES", payload: B }), G.current === null)) return;
        if (B.images.length > 0) {
          const Oe = B.images[B.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: Oe.id, mode: "gallery" }
          });
        }
      } catch (Q) {
        console.error("Failed to jump to end:", Q);
      } finally {
        d(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: u } });
  }, [
    _,
    a,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    c,
    u
  ]), Z = y.useCallback(
    (L) => {
      L && "stopPropagation" in L && L.stopPropagation();
      const Q = C.current;
      Q && (document.fullscreenElement ? document.exitFullscreen() : Q.requestFullscreen().catch((T) => {
        console.error(
          `Error attempting to enable full-screen mode: ${T.message}`
        );
      }));
    },
    []
  ), N = y.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: u } });
  }, [t, u]), A = y.useCallback(async () => {
    if (p)
      try {
        const L = p.id;
        O.length > 1 ? N() : t({ type: "CLOSE_VIEWER" }), await ps([L]), t({ type: "REMOVE_IMAGES", payload: [L] });
      } catch (L) {
        t({
          type: "SET_ERROR",
          payload: L instanceof Error ? L.message : String(L)
        });
      }
  }, [p, O.length, N, t]), $ = y.useCallback(async () => {
    if (!m || m.length === 0) return;
    const L = m.map((T) => T.id), Q = L[0];
    try {
      if (await ps(L), !b.current || (t({ type: "ADD_IMAGES", payload: m }), E(null), !b.current)) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: Q, mode: a }
      });
    } catch (T) {
      t({
        type: "SET_ERROR",
        payload: T instanceof Error ? T.message : String(T)
      });
    }
  }, [m, t, a]), j = y.useCallback(
    async (L) => {
      if (!L || !p) return;
      const Q = L.split(/\s+/), T = [], q = [];
      let B = !1, Oe = !1;
      for (const ne of Q)
        if (ne.startsWith("tag:")) {
          const ce = ne.substring(4);
          ce && !p.tags.includes(ce) && !T.includes(ce) && T.push(ce);
        } else if (ne.startsWith("-tag:")) {
          const ce = ne.substring(5);
          ce && p.tags.includes(ce) && !q.includes(ce) && q.push(ce);
        } else if (ne.startsWith("tag-toggle:")) {
          const ce = ne.substring(11);
          ce && (p.tags.includes(ce) ? q.includes(ce) || q.push(ce) : T.includes(ce) || T.push(ce));
        } else ne === "next" ? B = !0 : ne === "prev" && (Oe = !0);
      if (T.length > 0 || q.length > 0)
        try {
          await Uc([p.id], T, q);
          const ne = [...p.tags];
          for (const rn of T)
            ne.includes(rn) || ne.push(rn);
          const ce = ne.filter((rn) => !q.includes(rn));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...p, tags: ce }
          });
        } catch (ne) {
          console.error("Failed to update tags via shortcut:", ne);
        }
      B ? N() : Oe && V();
    },
    [p, t, N, V]
  );
  y.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || _ !== -1 && _ >= O.length - 15 && n();
  }, [
    l,
    O.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    _
  ]), y.useEffect(() => {
    const L = (T) => {
      var da, fa, pa;
      if (l === null) return;
      const q = ((da = document.activeElement) == null ? void 0 : da.tagName) === "INPUT" || ((fa = document.activeElement) == null ? void 0 : fa.tagName) === "TEXTAREA" || ((pa = document.activeElement) == null ? void 0 : pa.isContentEditable), B = T.key === "Delete" || T.key === "Backspace", Oe = T.key === "ArrowRight" || T.key === "ArrowLeft", ne = T.key === "f" || T.key === "F" || T.key === "i" || T.key === "I" || T.key === "t" || T.key === "T" || T.key === "r" || T.key === "R", ce = T.key === "Escape", rn = (T.ctrlKey || T.metaKey) && (T.key === "z" || T.key === "Z"), ca = /^[0-9]$/.test(T.key) && !T.ctrlKey && !T.metaKey && !T.altKey;
      if (B || Oe || ne || ce || rn || ca)
        if (q)
          if (ce) {
            if (e.activeModal.type !== "none") {
              T.preventDefault(), T.stopPropagation();
              return;
            }
            T.preventDefault(), T.stopPropagation(), T.stopImmediatePropagation();
          } else
            return;
        else {
          if (ce && e.activeModal.type !== "none") {
            T.preventDefault(), T.stopPropagation();
            return;
          }
          T.preventDefault(), T.stopPropagation(), T.stopImmediatePropagation();
        }
      else
        return;
      if (T.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (T.key === "ArrowRight")
        N();
      else if (T.key === "ArrowLeft")
        V();
      else if (T.key === "f" || T.key === "F")
        Z(T);
      else if (T.key === "i" || T.key === "I")
        x((Hl) => !Hl);
      else if (T.key === "t" || T.key === "T")
        P();
      else if ((T.key === "r" || T.key === "R") && e.viewScope === "trash")
        A();
      else if (T.key === "Delete")
        k();
      else if ((T.ctrlKey || T.metaKey) && (T.key === "z" || T.key === "Z"))
        $();
      else if (ca && !q) {
        const Hl = `viewer.shortcut.${T.key}`, Gl = e.settings[Hl];
        typeof Gl == "string" && Gl && (z(T.key), setTimeout(() => z(null), 500), j(Gl));
      }
    };
    window.addEventListener("keydown", L, { capture: !0 });
    const Q = () => {
      const T = !!document.fullscreenElement;
      f(T), x(T ? e.settings["fullscreen.show_details_by_default"] : e.settings["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", Q), () => {
      window.removeEventListener("keydown", L, { capture: !0 }), document.removeEventListener("fullscreenchange", Q);
    };
  }, [
    l,
    t,
    Z,
    N,
    V,
    e.settings,
    k,
    e.activeModal.type,
    $,
    P,
    A,
    e.viewScope,
    j
  ]), y.useEffect(() => {
    l !== null && r(l).catch((L) => {
      console.error("Failed to fetch full image details for viewer:", L);
    });
  }, [l, r]), y.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (I(!0), ds(l).then((L) => {
      t({ type: "SET_LINEAGE", payload: L });
    }).catch((L) => {
      console.error("Failed to fetch lineage:", L);
    }).finally(() => {
      I(!1);
    }));
  }, [a, l, o.length, t]), y.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), y.useEffect(() => {
    var L, Q;
    if (l !== null) {
      if (g) {
        const T = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        T && T.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((L = document.activeElement) == null ? void 0 : L.tagName) === "CANVAS" && document.activeElement.blur(), (Q = C.current) == null || Q.focus();
    }
  }, [l, g]), y.useEffect(() => {
    if (l === null || O.length === 0) return;
    const L = O.findIndex(
      (B) => B.id === l
    );
    if (L === -1) return;
    const Q = (B) => je(B), T = [
      L + 1,
      L + 2,
      L - 1
    ], q = setTimeout(() => {
      for (const B of T)
        if (B >= 0 && B < O.length) {
          const Oe = O[B], ne = new Image();
          ne.src = Q(Oe);
        }
    }, 150);
    return () => clearTimeout(q);
  }, [l, O]);
  const U = y.useCallback(
    (L) => {
      const Q = e.settings["gallery.lineage_max_depth"];
      if (Q === 0) return [];
      if (L.ancestors && L.ancestors.length > 0)
        return L.ancestors.slice(0, Q).map((ne) => ({
          id: ne.id,
          imgSrc: je(ne)
        }));
      const T = L.parent_id;
      if (!T || !L.parent_filename) return [];
      const q = i.find((ne) => ne.id === T);
      let B = null;
      if (q ? B = je(q) : B = je({
        filename: L.parent_filename,
        subfolder: L.parent_subfolder || "",
        type: L.parent_type
      }), !B) return [];
      const Oe = {
        id: T || null,
        imgSrc: B
      };
      if (q && Q > 1) {
        const ne = U(q);
        return [Oe, ...ne].slice(0, Q);
      }
      return [Oe];
    },
    [e.settings, i]
  ), H = y.useMemo(() => p ? U(p) : [], [p, U]);
  if (!p) return null;
  const ue = je(p), ze = u ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Ae.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: C,
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
              onClick: (L) => L.stopPropagation(),
              children: [
                ze && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: A,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(rr, { size: 20 })
                    }
                  ),
                  !u && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => v(!g),
                      type: "button",
                      title: g ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(Xc, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: P,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ s.jsx(nn, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => x(!w),
                      type: "button",
                      title: w ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(dm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: Z,
                      type: "button",
                      title: u ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: u ? /* @__PURE__ */ s.jsx(mm, { size: 20 }) : /* @__PURE__ */ s.jsx(pm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(Ie, { size: 20 })
                    }
                  )
                ] }),
                ze && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: V,
                    type: "button",
                    disabled: c,
                    children: /* @__PURE__ */ s.jsx(Kc, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  c && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(rr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      src: ue,
                      alt: p.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[u ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${c ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                ze && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: N,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(Yc, { size: 32 })
                  }
                ),
                w && /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-viewer-details-overlay ${u ? "meld-viewer-details-overlay--fullscreen" : ""} ${ze ? "" : "meld-viewer-details-overlay--no-icons"}`,
                    children: [
                      (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: (u ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? `${p.subfolder ? `${p.subfolder}/` : ""}${p.filename}` : p.filename })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_dimensions"] : e.settings["viewer.details.show_dimensions"]) && p.width && p.height && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-value", children: [
                          p.width,
                          " x ",
                          p.height,
                          " px"
                        ] })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_created_at"] : e.settings["viewer.details.show_created_at"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(p.created_at * 1e3).toLocaleString() })
                      ] }),
                      p.deleted_at && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(p.deleted_at * 1e3).toLocaleString() })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_model_name"] : e.settings["viewer.details.show_model_name"]) && p.model_name && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: p.model_name })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_source"] : e.settings["viewer.details.show_source"]) && H.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: H.map(
                          (L, Q) => L.imgSrc && /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: L.imgSrc,
                              className: "meld-lineage-badge__parent-thumb",
                              style: { cursor: "pointer" },
                              loading: "lazy",
                              onClick: (T) => {
                                T.stopPropagation(), t({
                                  type: "OPEN_VIEWER",
                                  payload: {
                                    id: L.id || p.id,
                                    mode: "lineage"
                                  }
                                });
                              },
                              title: Q === 0 ? "Source" : Q === 1 ? "Grand-Source" : `Ancestor (S${Q + 1})`,
                              alt: "source thumb"
                            },
                            L.id || Q
                          )
                        ) }) })
                      ] }),
                      (u ? e.settings["fullscreen.details.show_positive_prompt"] : e.settings["viewer.details.show_positive_prompt"]) && (p.positive_prompt || p.positive) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
                        /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_positive_prompt_lines"] : e.settings["viewer.details.max_positive_prompt_lines"]
                            },
                            children: p.positive_prompt || p.positive
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_negative_prompt"] : e.settings["viewer.details.show_negative_prompt"]) && (p.negative_prompt || p.negative) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
                        /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": u ? e.settings["fullscreen.details.max_negative_prompt_lines"] : e.settings["viewer.details.max_negative_prompt_lines"]
                            },
                            children: p.negative_prompt || p.negative
                          }
                        )
                      ] }),
                      (u ? e.settings["fullscreen.details.show_tags"] : e.settings["viewer.details.show_tags"]) && p.tags && p.tags.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
                        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: p.tags.map((L) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: L }, L)) })
                      ] })
                    ]
                  }
                ),
                !u && g && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                  S ? /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      style: {
                        padding: "10px",
                        color: "var(--meld-text-secondary)"
                      },
                      children: "Loading lineage..."
                    }
                  ) : R.map(({ img: L }) => /* @__PURE__ */ s.jsx(
                    ld,
                    {
                      thumb: L,
                      viewerImageId: l,
                      currentImage: p,
                      dispatch: t
                    },
                    L.id
                  )),
                  a === "gallery" && e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(rr, { className: "animate-spin", size: 20 }) })
                ] }) }),
                e.settings["viewer.shortcut.show_cheat_sheet"] && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-cheat-sheet", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((L) => {
                  const Q = String(L), T = e.settings[`viewer.shortcut.${Q}`];
                  return typeof T == "string" && T ? /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-viewer-cheat-sheet__item ${D === Q ? "meld-viewer-cheat-sheet__item--active" : ""}`,
                      children: [
                        /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-cheat-sheet__key", children: L }),
                        /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-cheat-sheet__cmd", children: T.replace("tag-toggle:", "+/- ") })
                      ]
                    },
                    L
                  ) : null;
                }) })
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            qc,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: E
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(td, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(ed, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(nd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            rd,
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
}, Dm = () => {
  const { state: e, dispatch: t } = st(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Fp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
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
        children: /* @__PURE__ */ s.jsx(wm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(am, { size: 14, className: "meld-success-icon" }),
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
}, bm = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = st(), [r, l] = y.useState(e.searchQuery), [i, a] = y.useState([]), [o, u] = y.useState(!1), [f, w] = y.useState([]), [x, h] = y.useState(-1), [v, g] = y.useState(!1), [S, I] = y.useState(null), c = y.useRef(null);
  y.useEffect(() => {
    if (S) {
      const k = setTimeout(() => I(null), 3e3);
      return () => clearTimeout(k);
    }
  }, [S]);
  const d = y.useRef(null), m = y.useRef(e.searchQuery), E = r !== m.current;
  y.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      w([]);
      return;
    }
    !r && !e.searchQuery ? Tp().then((k) => {
      w(k);
    }) : w([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), y.useEffect(() => {
    l(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), y.useEffect(() => {
    var k;
    (k = c.current) == null || k.focus();
  }, []);
  const D = y.useCallback(
    (k, P = !0) => {
      m.current !== k && (W.log("SearchBar: triggering search", { query: k }), t({ type: "SET_SEARCH_QUERY", payload: k }), P && u(!1), m.current = k);
    },
    [t]
  );
  y.useEffect(() => {
    const k = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"]) {
        a([]), u(!1);
        return;
      }
      const P = r.split(/\s+/), V = P[P.length - 1];
      if (V) {
        const Z = V.match(
          /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i
        );
        if (Z) {
          const N = Z[1].toLowerCase(), A = Z[2], $ = await Ip(A, N);
          a($), u($.length > 0), h(-1);
        } else
          a([]), u(!1);
      } else
        a([]), u(!1);
    }, 300);
    return () => clearTimeout(k);
  }, [r, e.settings["search.input_suggest"]]);
  const z = (k) => {
    k.key === "Enter" ? D(r) : k.key === "Tab" ? o && x >= 0 && (C(i[x]), k.preventDefault()) : k.key === "ArrowDown" ? o && (h((P) => Math.min(P + 1, i.length - 1)), k.preventDefault()) : k.key === "ArrowUp" ? o && (h((P) => Math.max(P - 1, -1)), k.preventDefault()) : k.key === "Escape" && u(!1);
  }, C = (k) => {
    var H;
    const P = r.split(/\s+/), Z = (P.pop() || "").match(/^([-!])/), N = Z ? Z[1] : "", j = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(k.type) ? k.value : `"${k.value}"`, U = `${[
      ...P,
      `${N}${k.type}:${j}`
    ].join(" ").trim()} `;
    l(U), a([]), u(!1), (H = c.current) == null || H.focus();
  }, b = () => {
    l(""), D("");
  }, G = async (k, P, V) => {
    k.stopPropagation();
    const Z = `Are you sure you want to delete the favorite "${V}"?`;
    if (window.confirm(Z))
      try {
        await Co(P), await n();
      } catch (N) {
        W.error("Failed to delete favorite", N);
      }
  }, O = async (k, P, V) => {
    k.stopPropagation();
    const Z = window.prompt(
      "Enter a new name for this favorite:",
      V
    );
    if (!(Z === null || Z === V))
      try {
        await Vp(P, Z || V), await n();
      } catch (N) {
        W.error("Failed to rename favorite", N);
      }
  }, _ = (k, P) => {
    const N = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(k) ? P : `"${P}"`, A = `${k}:${N}`;
    l(A), D(A);
  }, p = async () => {
    if (!e.searchQuery || v) return;
    if (e.favorites.some(
      (P) => P.query === e.searchQuery
    )) {
      const P = e.favorites.find((V) => V.query === e.searchQuery);
      if (P) {
        g(!0);
        try {
          await Co(P.id), await n(), I("Favorite removed.");
        } catch (V) {
          W.error("Failed to delete favorite:", V);
        } finally {
          g(!1);
        }
      }
      return;
    }
    g(!0);
    try {
      await $p(e.searchQuery, e.searchQuery), await n(), I(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (P) {
      W.error("Failed to save favorite:", P);
    } finally {
      g(!1);
    }
  }, R = (k) => {
    switch (k) {
      case "tag":
        return /* @__PURE__ */ s.jsx(nn, { size: 12 });
      case "model":
        return /* @__PURE__ */ s.jsx(im, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ s.jsx(xm, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ s.jsx(sm, { size: 12 });
      case "has_source":
        return /* @__PURE__ */ s.jsx(Gc, { size: 12 });
      case "has_derivatives":
        return /* @__PURE__ */ s.jsx(Hc, { size: 12 });
      case "sort":
        return /* @__PURE__ */ s.jsx(lm, { size: 12 });
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
                    /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => D(r),
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
                        onMouseEnter: (k) => {
                          k.currentTarget.style.transform = "translateY(-1px)", E ? (k.currentTarget.style.filter = "brightness(1.15)", k.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : k.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (k) => {
                          k.currentTarget.style.transform = "none", E ? (k.currentTarget.style.filter = "none", k.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : k.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (k) => {
                          k.currentTarget.style.transform = "translateY(1px)", k.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (k) => {
                          k.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            Ln,
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
                        onChange: (k) => {
                          const P = k.target.value;
                          l(P), P || D("");
                        },
                        onKeyDown: z,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === m.current) return;
                          const k = r.split(/\s+/), P = k[k.length - 1];
                          P != null && P.match(
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
                        onClick: p,
                        disabled: v,
                        title: e.favorites.some((k) => k.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          No,
                          {
                            size: 16,
                            color: e.favorites.some((k) => k.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((k) => k.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: b,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ s.jsx(Ie, { size: 16, color: "var(--meld-text-secondary)" })
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
                  children: i.map((k, P) => /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      onMouseDown: (V) => {
                        V.preventDefault(), C(k);
                      },
                      onMouseEnter: () => h(P),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: P === x ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                                children: R(k.type)
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
                                children: k.type
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                style: {
                                  color: k.value === nt ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                                  fontSize: "14px",
                                  fontWeight: k.value === nt ? "bold" : "normal"
                                },
                                children: k.value === nt ? k.type === "tag" ? `Untagged (${nt})` : `No ${k.type} (${nt})` : k.value
                              }
                            )
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
            children: f.map((k) => /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                onClick: () => _(k.type, k.value),
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
                      children: R(k.type)
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
                      children: k.type
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
                      children: k.value
                    }
                  )
                ]
              },
              `${k.type}:${k.value}`
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
                    /* @__PURE__ */ s.jsx(No, { size: 12, fill: "var(--meld-text-secondary)" }),
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
                  children: e.favorites.map((k) => /* @__PURE__ */ s.jsxs(
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
                        l(k.query), D(k.query);
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
                                  children: k.name
                                }
                              ),
                              k.name !== k.query && /* @__PURE__ */ s.jsx(
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
                                  children: k.query
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
                                    P.stopPropagation(), O(P, k.id, k.name);
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
                                  children: /* @__PURE__ */ s.jsx(Jc, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ s.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (P) => {
                                    P.stopPropagation(), G(P, k.id, k.name);
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
                                  children: /* @__PURE__ */ s.jsx(Pn, { size: 14 })
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
}, Rm = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = y.useState([]), [l, i] = y.useState(!0), [a, o] = y.useState(""), [u, f] = y.useState(""), [w, x] = y.useState(!1), [h, v] = y.useState(null), [g, S] = y.useState(""), [I, c] = y.useState(!1), d = y.useRef(null), m = y.useCallback(async () => {
    i(!0);
    try {
      const _ = await oa();
      r(_);
    } catch (_) {
      console.error("Failed to fetch tags:", _);
    } finally {
      i(!1);
    }
  }, []);
  y.useEffect(() => {
    m();
  }, [m]), y.useEffect(() => {
    h !== null && d.current && (d.current.focus(), d.current.select());
  }, [h]);
  const E = async (_) => {
    _.preventDefault();
    const p = u.trim();
    if (!(!p || w)) {
      if (p.toLowerCase() === nt) {
        alert(
          `Tag name '${nt}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((R) => R.name.toLowerCase() === p.toLowerCase())) {
        alert(`Tag "${p}" already exists.`);
        return;
      }
      x(!0);
      try {
        await Up(p), f(""), await m();
      } catch (R) {
        console.error("Failed to add tag:", R);
      } finally {
        x(!1);
      }
    }
  }, D = async (_, p) => {
    if (confirm(`Are you sure you want to delete tag "${p}"?`))
      try {
        await Wp(_), await m();
      } catch (R) {
        console.error("Failed to delete tag:", R);
      }
  }, z = (_) => {
    v(_.id), S(_.name);
  }, C = () => {
    v(null), S("");
  }, b = async (_) => {
    _.preventDefault();
    const p = g.trim();
    if (!p || h === null || I) return;
    if (p.toLowerCase() === nt) {
      alert(
        `Tag name '${nt}' is reserved for search and cannot be used.`
      );
      return;
    }
    const R = n.find((k) => k.id === h);
    if (R && R.name === p) {
      C();
      return;
    }
    if (n.some(
      (k) => k.id !== h && k.name.toLowerCase() === p.toLowerCase()
    )) {
      alert(`Tag "${p}" already exists.`);
      return;
    }
    c(!0);
    try {
      await Qp(h, p), C(), await m();
    } catch (k) {
      console.error("Failed to rename tag:", k), alert(k instanceof Error ? k.message : "Failed to rename tag");
    } finally {
      c(!1);
    }
  }, G = (_) => {
    t(`tag:${_}`);
  }, O = y.useMemo(() => n.filter(
    (_) => _.name.toLowerCase().includes(a.toLowerCase())
  ), [n, a]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(nn, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(Ie, { size: 16 })
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
            onChange: (_) => f(_.target.value),
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
              /* @__PURE__ */ s.jsx(ua, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(Ln, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: a,
            onChange: (_) => o(_.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: O.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : O.map((_) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: h === _.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: b,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: d,
                className: "meld-tag-rename-input",
                value: g,
                onChange: (p) => S(p.target.value),
                onKeyDown: (p) => p.key === "Escape" && C()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: I || !g.trim(),
                children: /* @__PURE__ */ s.jsx(Bc, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: C,
                disabled: I,
                children: /* @__PURE__ */ s.jsx(Ie, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: _.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => G(_.name),
              children: /* @__PURE__ */ s.jsx(Ln, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => z(_),
              children: /* @__PURE__ */ s.jsx(Jc, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => D(_.id, _.name),
              children: /* @__PURE__ */ s.jsx(Pn, { size: 14 })
            }
          )
        ] })
      ] }) }, _.id)) })
    ] })
  ] });
}, zm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = st(), [i, a] = y.useState("gallery"), [o, u] = y.useState(""), [f, w] = y.useState(e.pagination.limit);
  y.useEffect(() => {
    w(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const x = e.searchQuery.trim() !== "", h = y.useRef(null), v = y.useRef(null), g = y.useMemo(
    () => e.images.filter((I) => e.viewScope === "trash" ? I.exists !== !1 || e.settings["gallery.trash.show_missing"] : I.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && I.has_children)),
    [e.images, e.settings, e.viewScope]
  ), S = y.useMemo(
    () => g.slice(0, f),
    [g, f]
  );
  return y.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && g.length === 0 && (W.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    g.length,
    r
  ]), W.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: g.length,
    visibleCount: S.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), y.useEffect(() => {
    const I = (c) => {
      c.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), c.preventDefault(), c.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), c.preventDefault(), c.stopPropagation()));
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [e.activeModal.type, e.selectedIds.size, t]), y.useEffect(() => {
    const I = new IntersectionObserver(
      (d) => {
        if (d[0].isIntersecting) {
          if (e.isLoading) {
            W.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          f < g.length ? (W.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: f,
              newLimit: Math.min(
                f + e.pagination.limit,
                g.length
              ),
              totalAvailableLocally: g.length
            }
          ), w((m) => m + e.pagination.limit)) : e.pagination.hasMore ? (W.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : W.log(
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
    return c && I.observe(c), () => {
      c && I.unobserve(c);
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
    const I = e.viewerImageId ?? v.current;
    if (I !== null && g.some((d) => d.id === I)) {
      const d = g.findIndex((E) => E.id === I);
      if (d >= f) {
        w(
          Math.ceil((d + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const m = document.querySelector(
        `[data-image-id="${I}"]`
      );
      m && (m.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (v.current = null));
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
              /* @__PURE__ */ s.jsx(Pn, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (I) => l("gallery.trash.show_missing", I.target.checked)
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
                  /* @__PURE__ */ s.jsx(Ie, { size: 14 }),
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
                  i === "search" ? (u(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && o && t({
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
                children: /* @__PURE__ */ s.jsx(Ln, { size: 14 })
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(fm, { size: 14 }) : /* @__PURE__ */ s.jsx(Xc, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(nn, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(um, { size: 14 })
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
                  rr,
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
                children: /* @__PURE__ */ s.jsx(vm, { size: 14 })
              }
            )
          ] }),
          i === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(bm, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(Dm, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        i === "tags" ? /* @__PURE__ */ s.jsx(
          Rm,
          {
            onClose: () => a("gallery"),
            onSearch: (I) => {
              t({ type: "SET_SEARCH_QUERY", payload: I }), a("search");
            }
          }
        ) : e.isLoading && g.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : S.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              children: S.map((I) => /* @__PURE__ */ s.jsx("div", { "data-image-id": I.id, children: /* @__PURE__ */ s.jsx(Tm, { height: 150, children: /* @__PURE__ */ s.jsx(Lm, { image: I }) }) }, I.id))
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
                f >= g.length && !e.pagination.hasMore && S.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(Mm, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(Pm, {}),
        e.viewerImageId === null && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          e.activeModal.type === "parent_selection" && Ae.createPortal(
            /* @__PURE__ */ s.jsx(td, { imageId: e.activeModal.imageId }),
            document.body
          ),
          e.activeModal.type === "import" && Ae.createPortal(/* @__PURE__ */ s.jsx(ed, {}), document.body),
          e.activeModal.type === "settings" && Ae.createPortal(/* @__PURE__ */ s.jsx(nd, {}), document.body),
          e.activeModal.type === "tag_edit" && Ae.createPortal(
            /* @__PURE__ */ s.jsx(
              rd,
              {
                imageIds: e.activeModal.imageIds,
                initialTags: e.activeModal.tags,
                onClose: () => t({ type: "CLOSE_MODAL" })
              }
            ),
            document.body
          ),
          e.activeModal.type === "delete_confirm" && Ae.createPortal(
            /* @__PURE__ */ s.jsx(
              qc,
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
Io.registerExtension({
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
const Ql = document.createElement("link");
Ql.rel = "stylesheet";
Ql.type = "text/css";
Ql.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Ql);
let Wr = null, Ze = null;
Io.registerExtension({
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
      const n = await $c();
      W.init(n.dev_mode), W.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), W.init(!1);
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
      }, Y.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), Y.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), Y.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), W.log("Import completed.");
      }), Y.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Vc({
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
            W.log("render called", {
              el: n,
              galleryRoot: Wr,
              galleryContainer: Ze
            }), Ze || (W.log("galleryContainer not found, creating new one"), Ze = document.createElement("div"), Ze.id = "meld-gallery-container", Ze.style.height = "100%", Ze.style.width = "100%", Ze.style.display = "flex", Ze.style.flexDirection = "column"), n.contains(Ze) || (W.log("Appending galleryContainer to el"), n.appendChild(Ze)), Wr ? W.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (W.log("Creating new gallery root"), Wr = Ac(Ze), Wr.render(
              ya.createElement(
                Im,
                null,
                ya.createElement(zm)
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
