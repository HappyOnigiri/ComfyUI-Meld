import { api as Y } from "/scripts/api.js";
import { app as Uo } from "/scripts/app.js";
function Md(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vo = { exports: {} }, q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br = Symbol.for("react.element"), Id = Symbol.for("react.portal"), bd = Symbol.for("react.fragment"), Ld = Symbol.for("react.strict_mode"), Td = Symbol.for("react.profiler"), Pd = Symbol.for("react.provider"), Dd = Symbol.for("react.context"), Rd = Symbol.for("react.forward_ref"), zd = Symbol.for("react.suspense"), Ad = Symbol.for("react.memo"), Od = Symbol.for("react.lazy"), Na = Symbol.iterator;
function Fd(e) {
  return e === null || typeof e != "object" ? null : (e = Na && e[Na] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Qo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Bo = Object.assign, Ho = {};
function Un(e, t, n) {
  this.props = e, this.context = t, this.refs = Ho, this.updater = n || Qo;
}
Un.prototype.isReactComponent = {};
Un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Go() {
}
Go.prototype = Un.prototype;
function Ni(e, t, n) {
  this.props = e, this.context = t, this.refs = Ho, this.updater = n || Qo;
}
var Mi = Ni.prototype = new Go();
Mi.constructor = Ni;
Bo(Mi, Un.prototype);
Mi.isPureReactComponent = !0;
var Ma = Array.isArray, Ko = Object.prototype.hasOwnProperty, Ii = { current: null }, Yo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xo(e, t, n) {
  var r, l = {}, i = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ko.call(t, r) && !Yo.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: br, type: e, key: i, ref: a, props: l, _owner: Ii.current };
}
function $d(e, t) {
  return { $$typeof: br, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function bi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === br;
}
function Wd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ia = /\/+/g;
function rs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Wd("" + e.key) : t.toString(36);
}
function Zr(e, t, n, r, l) {
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
        case br:
        case Id:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + rs(a, 0) : r, Ma(l) ? (n = "", e != null && (n = e.replace(Ia, "$&/") + "/"), Zr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (bi(l) && (l = $d(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(Ia, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", Ma(e)) for (var o = 0; o < e.length; o++) {
    i = e[o];
    var u = r + rs(i, o);
    a += Zr(i, t, n, u, l);
  }
  else if (u = Fd(e), typeof u == "function") for (e = u.call(e), o = 0; !(i = e.next()).done; ) i = i.value, u = r + rs(i, o++), a += Zr(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Rr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Zr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Ud(e) {
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
var Re = { current: null }, el = { transition: null }, Vd = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: el, ReactCurrentOwner: Ii };
function qo() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = { map: Rr, forEach: function(e, t, n) {
  Rr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Rr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Rr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!bi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
q.Component = Un;
q.Fragment = bd;
q.Profiler = Td;
q.PureComponent = Ni;
q.StrictMode = Ld;
q.Suspense = zd;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vd;
q.act = qo;
q.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Bo({}, e.props), l = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Ii.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Ko.call(t, u) && !Yo.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: br, type: e.type, key: l, ref: i, props: r, _owner: a };
};
q.createContext = function(e) {
  return e = { $$typeof: Dd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Pd, _context: e }, e.Consumer = e;
};
q.createElement = Xo;
q.createFactory = function(e) {
  var t = Xo.bind(null, e);
  return t.type = e, t;
};
q.createRef = function() {
  return { current: null };
};
q.forwardRef = function(e) {
  return { $$typeof: Rd, render: e };
};
q.isValidElement = bi;
q.lazy = function(e) {
  return { $$typeof: Od, _payload: { _status: -1, _result: e }, _init: Ud };
};
q.memo = function(e, t) {
  return { $$typeof: Ad, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function(e) {
  var t = el.transition;
  el.transition = {};
  try {
    e();
  } finally {
    el.transition = t;
  }
};
q.unstable_act = qo;
q.useCallback = function(e, t) {
  return Re.current.useCallback(e, t);
};
q.useContext = function(e) {
  return Re.current.useContext(e);
};
q.useDebugValue = function() {
};
q.useDeferredValue = function(e) {
  return Re.current.useDeferredValue(e);
};
q.useEffect = function(e, t) {
  return Re.current.useEffect(e, t);
};
q.useId = function() {
  return Re.current.useId();
};
q.useImperativeHandle = function(e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function(e, t) {
  return Re.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function(e, t) {
  return Re.current.useLayoutEffect(e, t);
};
q.useMemo = function(e, t) {
  return Re.current.useMemo(e, t);
};
q.useReducer = function(e, t, n) {
  return Re.current.useReducer(e, t, n);
};
q.useRef = function(e) {
  return Re.current.useRef(e);
};
q.useState = function(e) {
  return Re.current.useState(e);
};
q.useSyncExternalStore = function(e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function() {
  return Re.current.useTransition();
};
q.version = "18.3.1";
Vo.exports = q;
var g = Vo.exports;
const fl = /* @__PURE__ */ Md(g);
var Jo = { exports: {} }, Ye = {}, Zo = { exports: {} }, eu = {};
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
  function t(b, z) {
    var T = b.length;
    b.push(z);
    e: for (; 0 < T; ) {
      var I = T - 1 >>> 1, H = b[I];
      if (0 < l(H, z)) b[I] = z, b[T] = H, T = I;
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var z = b[0], T = b.pop();
    if (T !== z) {
      b[0] = T;
      e: for (var I = 0, H = b.length, ie = H >>> 1; I < ie; ) {
        var W = 2 * (I + 1) - 1, J = b[W], le = W + 1, Ae = b[le];
        if (0 > l(J, T)) le < H && 0 > l(Ae, J) ? (b[I] = Ae, b[le] = T, I = le) : (b[I] = J, b[W] = T, I = W);
        else if (le < H && 0 > l(Ae, T)) b[I] = Ae, b[le] = T, I = le;
        else break e;
      }
    }
    return z;
  }
  function l(b, z) {
    var T = b.sortIndex - z.sortIndex;
    return T !== 0 ? T : b.id - z.id;
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
  var u = [], c = [], m = 1, x = null, w = 3, y = !1, v = !1, k = !1, j = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(b) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= b) r(c), z.sortIndex = z.expirationTime, t(u, z);
      else break;
      z = n(c);
    }
  }
  function h(b) {
    if (k = !1, p(b), !v) if (n(u) !== null) v = !0, M(_);
    else {
      var z = n(c);
      z !== null && U(h, z.startTime - b);
    }
  }
  function _(b, z) {
    v = !1, k && (k = !1, d(L), L = -1), y = !0;
    var T = w;
    try {
      for (p(z), x = n(u); x !== null && (!(x.expirationTime > z) || b && !P()); ) {
        var I = x.callback;
        if (typeof I == "function") {
          x.callback = null, w = x.priorityLevel;
          var H = I(x.expirationTime <= z);
          z = e.unstable_now(), typeof H == "function" ? x.callback = H : x === n(u) && r(u), p(z);
        } else r(u);
        x = n(u);
      }
      if (x !== null) var ie = !0;
      else {
        var W = n(c);
        W !== null && U(h, W.startTime - z), ie = !1;
      }
      return ie;
    } finally {
      x = null, w = T, y = !1;
    }
  }
  var C = !1, N = null, L = -1, F = 5, E = -1;
  function P() {
    return !(e.unstable_now() - E < F);
  }
  function B() {
    if (N !== null) {
      var b = e.unstable_now();
      E = b;
      var z = !0;
      try {
        z = N(!0, b);
      } finally {
        z ? A() : (C = !1, N = null);
      }
    } else C = !1;
  }
  var A;
  if (typeof f == "function") A = function() {
    f(B);
  };
  else if (typeof MessageChannel < "u") {
    var S = new MessageChannel(), $ = S.port2;
    S.port1.onmessage = B, A = function() {
      $.postMessage(null);
    };
  } else A = function() {
    j(B, 0);
  };
  function M(b) {
    N = b, C || (C = !0, A());
  }
  function U(b, z) {
    L = j(function() {
      b(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    v || y || (v = !0, M(_));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < b ? Math.floor(1e3 / b) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(b) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = w;
    }
    var T = w;
    w = z;
    try {
      return b();
    } finally {
      w = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(b, z) {
    switch (b) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        b = 3;
    }
    var T = w;
    w = b;
    try {
      return z();
    } finally {
      w = T;
    }
  }, e.unstable_scheduleCallback = function(b, z, T) {
    var I = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? I + T : I) : T = I, b) {
      case 1:
        var H = -1;
        break;
      case 2:
        H = 250;
        break;
      case 5:
        H = 1073741823;
        break;
      case 4:
        H = 1e4;
        break;
      default:
        H = 5e3;
    }
    return H = T + H, b = { id: m++, callback: z, priorityLevel: b, startTime: T, expirationTime: H, sortIndex: -1 }, T > I ? (b.sortIndex = T, t(c, b), n(u) === null && b === n(c) && (k ? (d(L), L = -1) : k = !0, U(h, T - I))) : (b.sortIndex = H, t(u, b), v || y || (v = !0, M(_))), b;
  }, e.unstable_shouldYield = P, e.unstable_wrapCallback = function(b) {
    var z = w;
    return function() {
      var T = w;
      w = z;
      try {
        return b.apply(this, arguments);
      } finally {
        w = T;
      }
    };
  };
})(eu);
Zo.exports = eu;
var Qd = Zo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bd = g, Ke = Qd;
function D(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var tu = /* @__PURE__ */ new Set(), fr = {};
function cn(e, t) {
  Pn(e, t), Pn(e + "Capture", t);
}
function Pn(e, t) {
  for (fr[e] = t, e = 0; e < t.length; e++) tu.add(t[e]);
}
var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), bs = Object.prototype.hasOwnProperty, Hd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ba = {}, La = {};
function Gd(e) {
  return bs.call(La, e) ? !0 : bs.call(ba, e) ? !1 : Hd.test(e) ? La[e] = !0 : (ba[e] = !0, !1);
}
function Kd(e, t, n, r) {
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
function Yd(e, t, n, r) {
  if (t === null || typeof t > "u" || Kd(e, t, n, r)) return !0;
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
function ze(e, t, n, r, l, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Me[e] = new ze(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Me[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Me[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Me[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Me[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Me[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Me[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Me[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Me[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Li = /[\-:]([a-z])/g;
function Ti(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Li,
    Ti
  );
  Me[t] = new ze(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Li, Ti);
  Me[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Li, Ti);
  Me[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Me[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Me[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Pi(e, t, n, r) {
  var l = Me.hasOwnProperty(t) ? Me[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Yd(t, n, l, r) && (n = null), r || l === null ? Gd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mt = Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, zr = Symbol.for("react.element"), hn = Symbol.for("react.portal"), gn = Symbol.for("react.fragment"), Di = Symbol.for("react.strict_mode"), Ls = Symbol.for("react.profiler"), nu = Symbol.for("react.provider"), ru = Symbol.for("react.context"), Ri = Symbol.for("react.forward_ref"), Ts = Symbol.for("react.suspense"), Ps = Symbol.for("react.suspense_list"), zi = Symbol.for("react.memo"), Lt = Symbol.for("react.lazy"), lu = Symbol.for("react.offscreen"), Ta = Symbol.iterator;
function Bn(e) {
  return e === null || typeof e != "object" ? null : (e = Ta && e[Ta] || e["@@iterator"], typeof e == "function" ? e : null);
}
var me = Object.assign, ls;
function Zn(e) {
  if (ls === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ls = t && t[1] || "";
  }
  return `
` + ls + e;
}
var ss = !1;
function is(e, t) {
  if (!e || ss) return "";
  ss = !0;
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
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
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
    ss = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Zn(e) : "";
}
function Xd(e) {
  switch (e.tag) {
    case 5:
      return Zn(e.type);
    case 16:
      return Zn("Lazy");
    case 13:
      return Zn("Suspense");
    case 19:
      return Zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = is(e.type, !1), e;
    case 11:
      return e = is(e.type.render, !1), e;
    case 1:
      return e = is(e.type, !0), e;
    default:
      return "";
  }
}
function Ds(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gn:
      return "Fragment";
    case hn:
      return "Portal";
    case Ls:
      return "Profiler";
    case Di:
      return "StrictMode";
    case Ts:
      return "Suspense";
    case Ps:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ru:
      return (e.displayName || "Context") + ".Consumer";
    case nu:
      return (e._context.displayName || "Context") + ".Provider";
    case Ri:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case zi:
      return t = e.displayName || null, t !== null ? t : Ds(e.type) || "Memo";
    case Lt:
      t = e._payload, e = e._init;
      try {
        return Ds(e(t));
      } catch {
      }
  }
  return null;
}
function qd(e) {
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
      return Ds(t);
    case 8:
      return t === Di ? "StrictMode" : "Mode";
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
function Bt(e) {
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
function su(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Jd(e) {
  var t = su(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ar(e) {
  e._valueTracker || (e._valueTracker = Jd(e));
}
function iu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = su(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function pl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Rs(e, t) {
  var n = t.checked;
  return me({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Pa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Bt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function au(e, t) {
  t = t.checked, t != null && Pi(e, "checked", t, !1);
}
function zs(e, t) {
  au(e, t);
  var n = Bt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? As(e, t.type, n) : t.hasOwnProperty("defaultValue") && As(e, t.type, Bt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Da(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function As(e, t, n) {
  (t !== "number" || pl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var er = Array.isArray;
function Nn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Os(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return me({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ra(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(D(92));
      if (er(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Bt(n) };
}
function ou(e, t) {
  var n = Bt(t.value), r = Bt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function za(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function uu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? uu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Or, cu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Or = Or || document.createElement("div"), Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Or.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var rr = {
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
}, Zd = ["Webkit", "ms", "Moz", "O"];
Object.keys(rr).forEach(function(e) {
  Zd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), rr[t] = rr[e];
  });
});
function du(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || rr.hasOwnProperty(e) && rr[e] ? ("" + t).trim() : t + "px";
}
function fu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = du(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var ef = me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function $s(e, t) {
  if (t) {
    if (ef[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function Ws(e, t) {
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
var Us = null;
function Ai(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Vs = null, Mn = null, In = null;
function Aa(e) {
  if (e = Pr(e)) {
    if (typeof Vs != "function") throw Error(D(280));
    var t = e.stateNode;
    t && (t = Ul(t), Vs(e.stateNode, e.type, t));
  }
}
function pu(e) {
  Mn ? In ? In.push(e) : In = [e] : Mn = e;
}
function mu() {
  if (Mn) {
    var e = Mn, t = In;
    if (In = Mn = null, Aa(e), t) for (e = 0; e < t.length; e++) Aa(t[e]);
  }
}
function hu(e, t) {
  return e(t);
}
function gu() {
}
var as = !1;
function yu(e, t, n) {
  if (as) return e(t, n);
  as = !0;
  try {
    return hu(e, t, n);
  } finally {
    as = !1, (Mn !== null || In !== null) && (gu(), mu());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ul(n);
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
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var Qs = !1;
if (jt) try {
  var Hn = {};
  Object.defineProperty(Hn, "passive", { get: function() {
    Qs = !0;
  } }), window.addEventListener("test", Hn, Hn), window.removeEventListener("test", Hn, Hn);
} catch {
  Qs = !1;
}
function tf(e, t, n, r, l, i, a, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var lr = !1, ml = null, hl = !1, Bs = null, nf = { onError: function(e) {
  lr = !0, ml = e;
} };
function rf(e, t, n, r, l, i, a, o, u) {
  lr = !1, ml = null, tf.apply(nf, arguments);
}
function lf(e, t, n, r, l, i, a, o, u) {
  if (rf.apply(this, arguments), lr) {
    if (lr) {
      var c = ml;
      lr = !1, ml = null;
    } else throw Error(D(198));
    hl || (hl = !0, Bs = c);
  }
}
function dn(e) {
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
function vu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Oa(e) {
  if (dn(e) !== e) throw Error(D(188));
}
function sf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = dn(e), t === null) throw Error(D(188));
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
        if (i === n) return Oa(l), e;
        if (i === r) return Oa(l), t;
        i = i.sibling;
      }
      throw Error(D(188));
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
        if (!a) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function wu(e) {
  return e = sf(e), e !== null ? xu(e) : null;
}
function xu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _u = Ke.unstable_scheduleCallback, Fa = Ke.unstable_cancelCallback, af = Ke.unstable_shouldYield, of = Ke.unstable_requestPaint, ye = Ke.unstable_now, uf = Ke.unstable_getCurrentPriorityLevel, Oi = Ke.unstable_ImmediatePriority, ku = Ke.unstable_UserBlockingPriority, gl = Ke.unstable_NormalPriority, cf = Ke.unstable_LowPriority, Su = Ke.unstable_IdlePriority, Ol = null, ht = null;
function df(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function") try {
    ht.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ut = Math.clz32 ? Math.clz32 : mf, ff = Math.log, pf = Math.LN2;
function mf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ff(e) / pf | 0) | 0;
}
var Fr = 64, $r = 4194304;
function tr(e) {
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
function yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? r = tr(o) : (i &= a, i !== 0 && (r = tr(i)));
  } else a = n & ~l, a !== 0 ? r = tr(a) : i !== 0 && (r = tr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ut(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function hf(e, t) {
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
function gf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - ut(i), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = hf(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o;
  }
}
function Hs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ju() {
  var e = Fr;
  return Fr <<= 1, !(Fr & 4194240) && (Fr = 64), e;
}
function os(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Lr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ut(t), e[t] = n;
}
function yf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ut(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function Fi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var se = 0;
function Eu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Cu, $i, Nu, Mu, Iu, Gs = !1, Wr = [], At = null, Ot = null, Ft = null, hr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), Pt = [], vf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $a(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      At = null;
      break;
    case "dragenter":
    case "dragleave":
      Ot = null;
      break;
    case "mouseover":
    case "mouseout":
      Ft = null;
      break;
    case "pointerover":
    case "pointerout":
      hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gr.delete(t.pointerId);
  }
}
function Gn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Pr(t), t !== null && $i(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function wf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return At = Gn(At, e, t, n, r, l), !0;
    case "dragenter":
      return Ot = Gn(Ot, e, t, n, r, l), !0;
    case "mouseover":
      return Ft = Gn(Ft, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return hr.set(i, Gn(hr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, gr.set(i, Gn(gr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function bu(e) {
  var t = Zt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = vu(n), t !== null) {
          e.blockedOn = t, Iu(e.priority, function() {
            Nu(n);
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
function tl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ks(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Us = r, n.target.dispatchEvent(r), Us = null;
    } else return t = Pr(n), t !== null && $i(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Wa(e, t, n) {
  tl(e) && n.delete(t);
}
function xf() {
  Gs = !1, At !== null && tl(At) && (At = null), Ot !== null && tl(Ot) && (Ot = null), Ft !== null && tl(Ft) && (Ft = null), hr.forEach(Wa), gr.forEach(Wa);
}
function Kn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Gs || (Gs = !0, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, xf)));
}
function yr(e) {
  function t(l) {
    return Kn(l, e);
  }
  if (0 < Wr.length) {
    Kn(Wr[0], e);
    for (var n = 1; n < Wr.length; n++) {
      var r = Wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (At !== null && Kn(At, e), Ot !== null && Kn(Ot, e), Ft !== null && Kn(Ft, e), hr.forEach(t), gr.forEach(t), n = 0; n < Pt.length; n++) r = Pt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pt.length && (n = Pt[0], n.blockedOn === null); ) bu(n), n.blockedOn === null && Pt.shift();
}
var bn = Mt.ReactCurrentBatchConfig, vl = !0;
function _f(e, t, n, r) {
  var l = se, i = bn.transition;
  bn.transition = null;
  try {
    se = 1, Wi(e, t, n, r);
  } finally {
    se = l, bn.transition = i;
  }
}
function kf(e, t, n, r) {
  var l = se, i = bn.transition;
  bn.transition = null;
  try {
    se = 4, Wi(e, t, n, r);
  } finally {
    se = l, bn.transition = i;
  }
}
function Wi(e, t, n, r) {
  if (vl) {
    var l = Ks(e, t, n, r);
    if (l === null) vs(e, t, r, wl, n), $a(e, r);
    else if (wf(l, e, t, n, r)) r.stopPropagation();
    else if ($a(e, r), t & 4 && -1 < vf.indexOf(e)) {
      for (; l !== null; ) {
        var i = Pr(l);
        if (i !== null && Cu(i), i = Ks(e, t, n, r), i === null && vs(e, t, r, wl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else vs(e, t, r, null, n);
  }
}
var wl = null;
function Ks(e, t, n, r) {
  if (wl = null, e = Ai(r), e = Zt(e), e !== null) if (t = dn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = vu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return wl = e, null;
}
function Lu(e) {
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
      switch (uf()) {
        case Oi:
          return 1;
        case ku:
          return 4;
        case gl:
        case cf:
          return 16;
        case Su:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rt = null, Ui = null, nl = null;
function Tu() {
  if (nl) return nl;
  var e, t = Ui, n = t.length, r, l = "value" in Rt ? Rt.value : Rt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[i - r]; r++) ;
  return nl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function rl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ur() {
  return !0;
}
function Ua() {
  return !1;
}
function Xe(e) {
  function t(n, r, l, i, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ur : Ua, this.isPropagationStopped = Ua, this;
  }
  return me(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ur);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ur);
  }, persist: function() {
  }, isPersistent: Ur }), t;
}
var Vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Vi = Xe(Vn), Tr = me({}, Vn, { view: 0, detail: 0 }), Sf = Xe(Tr), us, cs, Yn, Fl = me({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (us = e.screenX - Yn.screenX, cs = e.screenY - Yn.screenY) : cs = us = 0, Yn = e), us);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : cs;
} }), Va = Xe(Fl), jf = me({}, Fl, { dataTransfer: 0 }), Ef = Xe(jf), Cf = me({}, Tr, { relatedTarget: 0 }), ds = Xe(Cf), Nf = me({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Mf = Xe(Nf), If = me({}, Vn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), bf = Xe(If), Lf = me({}, Vn, { data: 0 }), Qa = Xe(Lf), Tf = {
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
}, Pf = {
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
}, Df = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Rf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Df[e]) ? !!t[e] : !1;
}
function Qi() {
  return Rf;
}
var zf = me({}, Tr, { key: function(e) {
  if (e.key) {
    var t = Tf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = rl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qi, charCode: function(e) {
  return e.type === "keypress" ? rl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Af = Xe(zf), Of = me({}, Fl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ba = Xe(Of), Ff = me({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qi }), $f = Xe(Ff), Wf = me({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Uf = Xe(Wf), Vf = me({}, Fl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Qf = Xe(Vf), Bf = [9, 13, 27, 32], Bi = jt && "CompositionEvent" in window, sr = null;
jt && "documentMode" in document && (sr = document.documentMode);
var Hf = jt && "TextEvent" in window && !sr, Pu = jt && (!Bi || sr && 8 < sr && 11 >= sr), Ha = " ", Ga = !1;
function Du(e, t) {
  switch (e) {
    case "keyup":
      return Bf.indexOf(t.keyCode) !== -1;
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
function Ru(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yn = !1;
function Gf(e, t) {
  switch (e) {
    case "compositionend":
      return Ru(t);
    case "keypress":
      return t.which !== 32 ? null : (Ga = !0, Ha);
    case "textInput":
      return e = t.data, e === Ha && Ga ? null : e;
    default:
      return null;
  }
}
function Kf(e, t) {
  if (yn) return e === "compositionend" || !Bi && Du(e, t) ? (e = Tu(), nl = Ui = Rt = null, yn = !1, e) : null;
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
      return Pu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ka(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yf[e.type] : t === "textarea";
}
function zu(e, t, n, r) {
  pu(r), t = xl(t, "onChange"), 0 < t.length && (n = new Vi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ir = null, vr = null;
function Xf(e) {
  Gu(e, 0);
}
function $l(e) {
  var t = xn(e);
  if (iu(t)) return e;
}
function qf(e, t) {
  if (e === "change") return t;
}
var Au = !1;
if (jt) {
  var fs;
  if (jt) {
    var ps = "oninput" in document;
    if (!ps) {
      var Ya = document.createElement("div");
      Ya.setAttribute("oninput", "return;"), ps = typeof Ya.oninput == "function";
    }
    fs = ps;
  } else fs = !1;
  Au = fs && (!document.documentMode || 9 < document.documentMode);
}
function Xa() {
  ir && (ir.detachEvent("onpropertychange", Ou), vr = ir = null);
}
function Ou(e) {
  if (e.propertyName === "value" && $l(vr)) {
    var t = [];
    zu(t, vr, e, Ai(e)), yu(Xf, t);
  }
}
function Jf(e, t, n) {
  e === "focusin" ? (Xa(), ir = t, vr = n, ir.attachEvent("onpropertychange", Ou)) : e === "focusout" && Xa();
}
function Zf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return $l(vr);
}
function ep(e, t) {
  if (e === "click") return $l(t);
}
function tp(e, t) {
  if (e === "input" || e === "change") return $l(t);
}
function np(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var dt = typeof Object.is == "function" ? Object.is : np;
function wr(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!bs.call(t, l) || !dt(e[l], t[l])) return !1;
  }
  return !0;
}
function qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ja(e, t) {
  var n = qa(e);
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
    n = qa(n);
  }
}
function Fu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function $u() {
  for (var e = window, t = pl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = pl(e.document);
  }
  return t;
}
function Hi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function rp(e) {
  var t = $u(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Fu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Hi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ja(n, i);
        var a = Ja(
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
var lp = jt && "documentMode" in document && 11 >= document.documentMode, vn = null, Ys = null, ar = null, Xs = !1;
function Za(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xs || vn == null || vn !== pl(r) || (r = vn, "selectionStart" in r && Hi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ar && wr(ar, r) || (ar = r, r = xl(Ys, "onSelect"), 0 < r.length && (t = new Vi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vn)));
}
function Vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var wn = { animationend: Vr("Animation", "AnimationEnd"), animationiteration: Vr("Animation", "AnimationIteration"), animationstart: Vr("Animation", "AnimationStart"), transitionend: Vr("Transition", "TransitionEnd") }, ms = {}, Wu = {};
jt && (Wu = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
function Wl(e) {
  if (ms[e]) return ms[e];
  if (!wn[e]) return e;
  var t = wn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wu) return ms[e] = t[n];
  return e;
}
var Uu = Wl("animationend"), Vu = Wl("animationiteration"), Qu = Wl("animationstart"), Bu = Wl("transitionend"), Hu = /* @__PURE__ */ new Map(), eo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Gt(e, t) {
  Hu.set(e, t), cn(t, [e]);
}
for (var hs = 0; hs < eo.length; hs++) {
  var gs = eo[hs], sp = gs.toLowerCase(), ip = gs[0].toUpperCase() + gs.slice(1);
  Gt(sp, "on" + ip);
}
Gt(Uu, "onAnimationEnd");
Gt(Vu, "onAnimationIteration");
Gt(Qu, "onAnimationStart");
Gt("dblclick", "onDoubleClick");
Gt("focusin", "onFocus");
Gt("focusout", "onBlur");
Gt(Bu, "onTransitionEnd");
Pn("onMouseEnter", ["mouseout", "mouseover"]);
Pn("onMouseLeave", ["mouseout", "mouseover"]);
Pn("onPointerEnter", ["pointerout", "pointerover"]);
Pn("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ap = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
function to(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, lf(r, t, void 0, e), e.currentTarget = null;
}
function Gu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
        to(l, o, c), i = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, c = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
        to(l, o, c), i = u;
      }
    }
  }
  if (hl) throw e = Bs, hl = !1, Bs = null, e;
}
function oe(e, t) {
  var n = t[ti];
  n === void 0 && (n = t[ti] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ku(t, e, 2, !1), n.add(r));
}
function ys(e, t, n) {
  var r = 0;
  t && (r |= 4), Ku(n, e, r, t);
}
var Qr = "_reactListening" + Math.random().toString(36).slice(2);
function xr(e) {
  if (!e[Qr]) {
    e[Qr] = !0, tu.forEach(function(n) {
      n !== "selectionchange" && (ap.has(n) || ys(n, !1, e), ys(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qr] || (t[Qr] = !0, ys("selectionchange", !1, t));
  }
}
function Ku(e, t, n, r) {
  switch (Lu(t)) {
    case 1:
      var l = _f;
      break;
    case 4:
      l = kf;
      break;
    default:
      l = Wi;
  }
  n = l.bind(null, t, n, e), l = void 0, !Qs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function vs(e, t, n, r, l) {
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
        if (a = Zt(o), a === null) return;
        if (u = a.tag, u === 5 || u === 6) {
          r = i = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  yu(function() {
    var c = i, m = Ai(n), x = [];
    e: {
      var w = Hu.get(e);
      if (w !== void 0) {
        var y = Vi, v = e;
        switch (e) {
          case "keypress":
            if (rl(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Af;
            break;
          case "focusin":
            v = "focus", y = ds;
            break;
          case "focusout":
            v = "blur", y = ds;
            break;
          case "beforeblur":
          case "afterblur":
            y = ds;
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
            y = Va;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Ef;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = $f;
            break;
          case Uu:
          case Vu:
          case Qu:
            y = Mf;
            break;
          case Bu:
            y = Uf;
            break;
          case "scroll":
            y = Sf;
            break;
          case "wheel":
            y = Qf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = bf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ba;
        }
        var k = (t & 4) !== 0, j = !k && e === "scroll", d = k ? w !== null ? w + "Capture" : null : w;
        k = [];
        for (var f = c, p; f !== null; ) {
          p = f;
          var h = p.stateNode;
          if (p.tag === 5 && h !== null && (p = h, d !== null && (h = mr(f, d), h != null && k.push(_r(f, h, p)))), j) break;
          f = f.return;
        }
        0 < k.length && (w = new y(w, v, null, n, m), x.push({ event: w, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", w && n !== Us && (v = n.relatedTarget || n.fromElement) && (Zt(v) || v[Et])) break e;
        if ((y || w) && (w = m.window === m ? m : (w = m.ownerDocument) ? w.defaultView || w.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = c, v = v ? Zt(v) : null, v !== null && (j = dn(v), v !== j || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = c), y !== v)) {
          if (k = Va, h = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (k = Ba, h = "onPointerLeave", d = "onPointerEnter", f = "pointer"), j = y == null ? w : xn(y), p = v == null ? w : xn(v), w = new k(h, f + "leave", y, n, m), w.target = j, w.relatedTarget = p, h = null, Zt(m) === c && (k = new k(d, f + "enter", v, n, m), k.target = p, k.relatedTarget = j, h = k), j = h, y && v) t: {
            for (k = y, d = v, f = 0, p = k; p; p = mn(p)) f++;
            for (p = 0, h = d; h; h = mn(h)) p++;
            for (; 0 < f - p; ) k = mn(k), f--;
            for (; 0 < p - f; ) d = mn(d), p--;
            for (; f--; ) {
              if (k === d || d !== null && k === d.alternate) break t;
              k = mn(k), d = mn(d);
            }
            k = null;
          }
          else k = null;
          y !== null && no(x, w, y, k, !1), v !== null && j !== null && no(x, j, v, k, !0);
        }
      }
      e: {
        if (w = c ? xn(c) : window, y = w.nodeName && w.nodeName.toLowerCase(), y === "select" || y === "input" && w.type === "file") var _ = qf;
        else if (Ka(w)) if (Au) _ = tp;
        else {
          _ = Zf;
          var C = Jf;
        }
        else (y = w.nodeName) && y.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (_ = ep);
        if (_ && (_ = _(e, c))) {
          zu(x, _, n, m);
          break e;
        }
        C && C(e, w, c), e === "focusout" && (C = w._wrapperState) && C.controlled && w.type === "number" && As(w, "number", w.value);
      }
      switch (C = c ? xn(c) : window, e) {
        case "focusin":
          (Ka(C) || C.contentEditable === "true") && (vn = C, Ys = c, ar = null);
          break;
        case "focusout":
          ar = Ys = vn = null;
          break;
        case "mousedown":
          Xs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Xs = !1, Za(x, n, m);
          break;
        case "selectionchange":
          if (lp) break;
        case "keydown":
        case "keyup":
          Za(x, n, m);
      }
      var N;
      if (Bi) e: {
        switch (e) {
          case "compositionstart":
            var L = "onCompositionStart";
            break e;
          case "compositionend":
            L = "onCompositionEnd";
            break e;
          case "compositionupdate":
            L = "onCompositionUpdate";
            break e;
        }
        L = void 0;
      }
      else yn ? Du(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (Pu && n.locale !== "ko" && (yn || L !== "onCompositionStart" ? L === "onCompositionEnd" && yn && (N = Tu()) : (Rt = m, Ui = "value" in Rt ? Rt.value : Rt.textContent, yn = !0)), C = xl(c, L), 0 < C.length && (L = new Qa(L, e, null, n, m), x.push({ event: L, listeners: C }), N ? L.data = N : (N = Ru(n), N !== null && (L.data = N)))), (N = Hf ? Gf(e, n) : Kf(e, n)) && (c = xl(c, "onBeforeInput"), 0 < c.length && (m = new Qa("onBeforeInput", "beforeinput", null, n, m), x.push({ event: m, listeners: c }), m.data = N));
    }
    Gu(x, t);
  });
}
function _r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = mr(e, n), i != null && r.unshift(_r(e, i, l)), i = mr(e, t), i != null && r.push(_r(e, i, l))), e = e.return;
  }
  return r;
}
function mn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function no(e, t, n, r, l) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = mr(n, i), u != null && a.unshift(_r(n, u, o))) : l || (u = mr(n, i), u != null && a.push(_r(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var op = /\r\n?/g, up = /\u0000|\uFFFD/g;
function ro(e) {
  return (typeof e == "string" ? e : "" + e).replace(op, `
`).replace(up, "");
}
function Br(e, t, n) {
  if (t = ro(t), ro(e) !== t && n) throw Error(D(425));
}
function _l() {
}
var qs = null, Js = null;
function Zs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ei = typeof setTimeout == "function" ? setTimeout : void 0, cp = typeof clearTimeout == "function" ? clearTimeout : void 0, lo = typeof Promise == "function" ? Promise : void 0, dp = typeof queueMicrotask == "function" ? queueMicrotask : typeof lo < "u" ? function(e) {
  return lo.resolve(null).then(e).catch(fp);
} : ei;
function fp(e) {
  setTimeout(function() {
    throw e;
  });
}
function ws(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), yr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  yr(t);
}
function $t(e) {
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
function so(e) {
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
var Qn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + Qn, kr = "__reactProps$" + Qn, Et = "__reactContainer$" + Qn, ti = "__reactEvents$" + Qn, pp = "__reactListeners$" + Qn, mp = "__reactHandles$" + Qn;
function Zt(e) {
  var t = e[mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Et] || n[mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = so(e); e !== null; ) {
        if (n = e[mt]) return n;
        e = so(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Pr(e) {
  return e = e[mt] || e[Et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function Ul(e) {
  return e[kr] || null;
}
var ni = [], _n = -1;
function Kt(e) {
  return { current: e };
}
function ue(e) {
  0 > _n || (e.current = ni[_n], ni[_n] = null, _n--);
}
function ae(e, t) {
  _n++, ni[_n] = e.current, e.current = t;
}
var Ht = {}, Te = Kt(Ht), $e = Kt(!1), ln = Ht;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function We(e) {
  return e = e.childContextTypes, e != null;
}
function kl() {
  ue($e), ue(Te);
}
function io(e, t, n) {
  if (Te.current !== Ht) throw Error(D(168));
  ae(Te, t), ae($e, n);
}
function Yu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(D(108, qd(e) || "Unknown", l));
  return me({}, n, r);
}
function Sl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht, ln = Te.current, ae(Te, e), ae($e, $e.current), !0;
}
function ao(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n ? (e = Yu(e, t, ln), r.__reactInternalMemoizedMergedChildContext = e, ue($e), ue(Te), ae(Te, e)) : ue($e), ae($e, n);
}
var xt = null, Vl = !1, xs = !1;
function Xu(e) {
  xt === null ? xt = [e] : xt.push(e);
}
function hp(e) {
  Vl = !0, Xu(e);
}
function Yt() {
  if (!xs && xt !== null) {
    xs = !0;
    var e = 0, t = se;
    try {
      var n = xt;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      xt = null, Vl = !1;
    } catch (l) {
      throw xt !== null && (xt = xt.slice(e + 1)), _u(Oi, Yt), l;
    } finally {
      se = t, xs = !1;
    }
  }
  return null;
}
var kn = [], Sn = 0, jl = null, El = 0, qe = [], Je = 0, sn = null, _t = 1, kt = "";
function qt(e, t) {
  kn[Sn++] = El, kn[Sn++] = jl, jl = e, El = t;
}
function qu(e, t, n) {
  qe[Je++] = _t, qe[Je++] = kt, qe[Je++] = sn, sn = e;
  var r = _t;
  e = kt;
  var l = 32 - ut(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - ut(t) + l;
  if (30 < i) {
    var a = l - l % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, _t = 1 << 32 - ut(t) + l | n << l | r, kt = i + e;
  } else _t = 1 << i | n << l | r, kt = e;
}
function Gi(e) {
  e.return !== null && (qt(e, 1), qu(e, 1, 0));
}
function Ki(e) {
  for (; e === jl; ) jl = kn[--Sn], kn[Sn] = null, El = kn[--Sn], kn[Sn] = null;
  for (; e === sn; ) sn = qe[--Je], qe[Je] = null, kt = qe[--Je], qe[Je] = null, _t = qe[--Je], qe[Je] = null;
}
var Ge = null, He = null, de = !1, at = null;
function Ju(e, t) {
  var n = Ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function oo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ge = e, He = $t(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ge = e, He = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sn !== null ? { id: _t, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ge = e, He = null, !0) : !1;
    default:
      return !1;
  }
}
function ri(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function li(e) {
  if (de) {
    var t = He;
    if (t) {
      var n = t;
      if (!oo(e, t)) {
        if (ri(e)) throw Error(D(418));
        t = $t(n.nextSibling);
        var r = Ge;
        t && oo(e, t) ? Ju(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, Ge = e);
      }
    } else {
      if (ri(e)) throw Error(D(418));
      e.flags = e.flags & -4097 | 2, de = !1, Ge = e;
    }
  }
}
function uo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ge = e;
}
function Hr(e) {
  if (e !== Ge) return !1;
  if (!de) return uo(e), de = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Zs(e.type, e.memoizedProps)), t && (t = He)) {
    if (ri(e)) throw Zu(), Error(D(418));
    for (; t; ) Ju(e, t), t = $t(t.nextSibling);
  }
  if (uo(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = $t(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = Ge ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function Zu() {
  for (var e = He; e; ) e = $t(e.nextSibling);
}
function Rn() {
  He = Ge = null, de = !1;
}
function Yi(e) {
  at === null ? at = [e] : at.push(e);
}
var gp = Mt.ReactCurrentBatchConfig;
function Xn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var o = l.refs;
        a === null ? delete o[i] : o[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function Gr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function co(e) {
  var t = e._init;
  return t(e._payload);
}
function ec(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [f], d.flags |= 16) : p.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), f = f.sibling;
    return null;
  }
  function r(d, f) {
    for (d = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling;
    return d;
  }
  function l(d, f) {
    return d = Qt(d, f), d.index = 0, d.sibling = null, d;
  }
  function i(d, f, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < f ? (d.flags |= 2, f) : p) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function a(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function o(d, f, p, h) {
    return f === null || f.tag !== 6 ? (f = Ns(p, d.mode, h), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function u(d, f, p, h) {
    var _ = p.type;
    return _ === gn ? m(d, f, p.props.children, h, p.key) : f !== null && (f.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Lt && co(_) === f.type) ? (h = l(f, p.props), h.ref = Xn(d, f, p), h.return = d, h) : (h = cl(p.type, p.key, p.props, null, d.mode, h), h.ref = Xn(d, f, p), h.return = d, h);
  }
  function c(d, f, p, h) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = Ms(p, d.mode, h), f.return = d, f) : (f = l(f, p.children || []), f.return = d, f);
  }
  function m(d, f, p, h, _) {
    return f === null || f.tag !== 7 ? (f = rn(p, d.mode, h, _), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function x(d, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ns("" + f, d.mode, p), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case zr:
          return p = cl(f.type, f.key, f.props, null, d.mode, p), p.ref = Xn(d, null, f), p.return = d, p;
        case hn:
          return f = Ms(f, d.mode, p), f.return = d, f;
        case Lt:
          var h = f._init;
          return x(d, h(f._payload), p);
      }
      if (er(f) || Bn(f)) return f = rn(f, d.mode, p, null), f.return = d, f;
      Gr(d, f);
    }
    return null;
  }
  function w(d, f, p, h) {
    var _ = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return _ !== null ? null : o(d, f, "" + p, h);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zr:
          return p.key === _ ? u(d, f, p, h) : null;
        case hn:
          return p.key === _ ? c(d, f, p, h) : null;
        case Lt:
          return _ = p._init, w(
            d,
            f,
            _(p._payload),
            h
          );
      }
      if (er(p) || Bn(p)) return _ !== null ? null : m(d, f, p, h, null);
      Gr(d, p);
    }
    return null;
  }
  function y(d, f, p, h, _) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return d = d.get(p) || null, o(f, d, "" + h, _);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case zr:
          return d = d.get(h.key === null ? p : h.key) || null, u(f, d, h, _);
        case hn:
          return d = d.get(h.key === null ? p : h.key) || null, c(f, d, h, _);
        case Lt:
          var C = h._init;
          return y(d, f, p, C(h._payload), _);
      }
      if (er(h) || Bn(h)) return d = d.get(p) || null, m(f, d, h, _, null);
      Gr(f, h);
    }
    return null;
  }
  function v(d, f, p, h) {
    for (var _ = null, C = null, N = f, L = f = 0, F = null; N !== null && L < p.length; L++) {
      N.index > L ? (F = N, N = null) : F = N.sibling;
      var E = w(d, N, p[L], h);
      if (E === null) {
        N === null && (N = F);
        break;
      }
      e && N && E.alternate === null && t(d, N), f = i(E, f, L), C === null ? _ = E : C.sibling = E, C = E, N = F;
    }
    if (L === p.length) return n(d, N), de && qt(d, L), _;
    if (N === null) {
      for (; L < p.length; L++) N = x(d, p[L], h), N !== null && (f = i(N, f, L), C === null ? _ = N : C.sibling = N, C = N);
      return de && qt(d, L), _;
    }
    for (N = r(d, N); L < p.length; L++) F = y(N, d, L, p[L], h), F !== null && (e && F.alternate !== null && N.delete(F.key === null ? L : F.key), f = i(F, f, L), C === null ? _ = F : C.sibling = F, C = F);
    return e && N.forEach(function(P) {
      return t(d, P);
    }), de && qt(d, L), _;
  }
  function k(d, f, p, h) {
    var _ = Bn(p);
    if (typeof _ != "function") throw Error(D(150));
    if (p = _.call(p), p == null) throw Error(D(151));
    for (var C = _ = null, N = f, L = f = 0, F = null, E = p.next(); N !== null && !E.done; L++, E = p.next()) {
      N.index > L ? (F = N, N = null) : F = N.sibling;
      var P = w(d, N, E.value, h);
      if (P === null) {
        N === null && (N = F);
        break;
      }
      e && N && P.alternate === null && t(d, N), f = i(P, f, L), C === null ? _ = P : C.sibling = P, C = P, N = F;
    }
    if (E.done) return n(
      d,
      N
    ), de && qt(d, L), _;
    if (N === null) {
      for (; !E.done; L++, E = p.next()) E = x(d, E.value, h), E !== null && (f = i(E, f, L), C === null ? _ = E : C.sibling = E, C = E);
      return de && qt(d, L), _;
    }
    for (N = r(d, N); !E.done; L++, E = p.next()) E = y(N, d, L, E.value, h), E !== null && (e && E.alternate !== null && N.delete(E.key === null ? L : E.key), f = i(E, f, L), C === null ? _ = E : C.sibling = E, C = E);
    return e && N.forEach(function(B) {
      return t(d, B);
    }), de && qt(d, L), _;
  }
  function j(d, f, p, h) {
    if (typeof p == "object" && p !== null && p.type === gn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zr:
          e: {
            for (var _ = p.key, C = f; C !== null; ) {
              if (C.key === _) {
                if (_ = p.type, _ === gn) {
                  if (C.tag === 7) {
                    n(d, C.sibling), f = l(C, p.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (C.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Lt && co(_) === C.type) {
                  n(d, C.sibling), f = l(C, p.props), f.ref = Xn(d, C, p), f.return = d, d = f;
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            p.type === gn ? (f = rn(p.props.children, d.mode, h, p.key), f.return = d, d = f) : (h = cl(p.type, p.key, p.props, null, d.mode, h), h.ref = Xn(d, f, p), h.return = d, d = h);
          }
          return a(d);
        case hn:
          e: {
            for (C = p.key; f !== null; ) {
              if (f.key === C) if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                n(d, f.sibling), f = l(f, p.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = Ms(p, d.mode, h), f.return = d, d = f;
          }
          return a(d);
        case Lt:
          return C = p._init, j(d, f, C(p._payload), h);
      }
      if (er(p)) return v(d, f, p, h);
      if (Bn(p)) return k(d, f, p, h);
      Gr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, p), f.return = d, d = f) : (n(d, f), f = Ns(p, d.mode, h), f.return = d, d = f), a(d)) : n(d, f);
  }
  return j;
}
var zn = ec(!0), tc = ec(!1), Cl = Kt(null), Nl = null, jn = null, Xi = null;
function qi() {
  Xi = jn = Nl = null;
}
function Ji(e) {
  var t = Cl.current;
  ue(Cl), e._currentValue = t;
}
function si(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Ln(e, t) {
  Nl = e, Xi = jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function tt(e) {
  var t = e._currentValue;
  if (Xi !== e) if (e = { context: e, memoizedValue: t, next: null }, jn === null) {
    if (Nl === null) throw Error(D(308));
    jn = e, Nl.dependencies = { lanes: 0, firstContext: e };
  } else jn = jn.next = e;
  return t;
}
var en = null;
function Zi(e) {
  en === null ? en = [e] : en.push(e);
}
function nc(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Zi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ct(e, r);
}
function Ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Tt = !1;
function ea(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function rc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function St(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ne & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ct(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Zi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ct(e, n);
}
function ll(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fi(e, n);
  }
}
function fo(e, t) {
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
function Ml(e, t, n, r) {
  var l = e.updateQueue;
  Tt = !1;
  var i = l.firstBaseUpdate, a = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, c = u.next;
    u.next = null, a === null ? i = c : a.next = c, a = u;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, o = m.lastBaseUpdate, o !== a && (o === null ? m.firstBaseUpdate = c : o.next = c, m.lastBaseUpdate = u));
  }
  if (i !== null) {
    var x = l.baseState;
    a = 0, m = c = u = null, o = i;
    do {
      var w = o.lane, y = o.eventTime;
      if ((r & w) === w) {
        m !== null && (m = m.next = {
          eventTime: y,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var v = e, k = o;
          switch (w = t, y = n, k.tag) {
            case 1:
              if (v = k.payload, typeof v == "function") {
                x = v.call(y, x, w);
                break e;
              }
              x = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = k.payload, w = typeof v == "function" ? v.call(y, x, w) : v, w == null) break e;
              x = me({}, x, w);
              break e;
            case 2:
              Tt = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, w = l.effects, w === null ? l.effects = [o] : w.push(o));
      } else y = { eventTime: y, lane: w, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, m === null ? (c = m = y, u = x) : m = m.next = y, a |= w;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        w = o, o = w.next, w.next = null, l.lastBaseUpdate = w, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (u = x), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    on |= a, e.lanes = a, e.memoizedState = x;
  }
}
function po(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(D(191, l));
      l.call(r);
    }
  }
}
var Dr = {}, gt = Kt(Dr), Sr = Kt(Dr), jr = Kt(Dr);
function tn(e) {
  if (e === Dr) throw Error(D(174));
  return e;
}
function ta(e, t) {
  switch (ae(jr, t), ae(Sr, e), ae(gt, Dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fs(t, e);
  }
  ue(gt), ae(gt, t);
}
function An() {
  ue(gt), ue(Sr), ue(jr);
}
function lc(e) {
  tn(jr.current);
  var t = tn(gt.current), n = Fs(t, e.type);
  t !== n && (ae(Sr, e), ae(gt, n));
}
function na(e) {
  Sr.current === e && (ue(gt), ue(Sr));
}
var fe = Kt(0);
function Il(e) {
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
var _s = [];
function ra() {
  for (var e = 0; e < _s.length; e++) _s[e]._workInProgressVersionPrimary = null;
  _s.length = 0;
}
var sl = Mt.ReactCurrentDispatcher, ks = Mt.ReactCurrentBatchConfig, an = 0, pe = null, xe = null, Se = null, bl = !1, or = !1, Er = 0, yp = 0;
function Ie() {
  throw Error(D(321));
}
function la(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!dt(e[n], t[n])) return !1;
  return !0;
}
function sa(e, t, n, r, l, i) {
  if (an = i, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, sl.current = e === null || e.memoizedState === null ? _p : kp, e = n(r, l), or) {
    i = 0;
    do {
      if (or = !1, Er = 0, 25 <= i) throw Error(D(301));
      i += 1, Se = xe = null, t.updateQueue = null, sl.current = Sp, e = n(r, l);
    } while (or);
  }
  if (sl.current = Ll, t = xe !== null && xe.next !== null, an = 0, Se = xe = pe = null, bl = !1, t) throw Error(D(300));
  return e;
}
function ia() {
  var e = Er !== 0;
  return Er = 0, e;
}
function pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Se === null ? pe.memoizedState = Se = e : Se = Se.next = e, Se;
}
function nt() {
  if (xe === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = Se === null ? pe.memoizedState : Se.next;
  if (t !== null) Se = t, xe = e;
  else {
    if (e === null) throw Error(D(310));
    xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, Se === null ? pe.memoizedState = Se = e : Se = Se.next = e;
  }
  return Se;
}
function Cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ss(e) {
  var t = nt(), n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = xe, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var a = l.next;
      l.next = i.next, i.next = a;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var o = a = null, u = null, c = i;
    do {
      var m = c.lane;
      if ((an & m) === m) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var x = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = x, a = r) : u = u.next = x, pe.lanes |= m, on |= m;
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? a = r : u.next = o, dt(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, pe.lanes |= i, on |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function js(e) {
  var t = nt(), n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = l = l.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== l);
    dt(i, t.memoizedState) || (Fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function sc() {
}
function ic(e, t) {
  var n = pe, r = nt(), l = t(), i = !dt(r.memoizedState, l);
  if (i && (r.memoizedState = l, Fe = !0), r = r.queue, aa(uc.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Se !== null && Se.memoizedState.tag & 1) {
    if (n.flags |= 2048, Nr(9, oc.bind(null, n, r, l, t), void 0, null), je === null) throw Error(D(349));
    an & 30 || ac(n, t, l);
  }
  return l;
}
function ac(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function oc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, cc(t) && dc(e);
}
function uc(e, t, n) {
  return n(function() {
    cc(t) && dc(e);
  });
}
function cc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function dc(e) {
  var t = Ct(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function mo(e) {
  var t = pt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = xp.bind(null, pe, e), [t.memoizedState, e];
}
function Nr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fc() {
  return nt().memoizedState;
}
function il(e, t, n, r) {
  var l = pt();
  pe.flags |= e, l.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ql(e, t, n, r) {
  var l = nt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var a = xe.memoizedState;
    if (i = a.destroy, r !== null && la(r, a.deps)) {
      l.memoizedState = Nr(t, n, i, r);
      return;
    }
  }
  pe.flags |= e, l.memoizedState = Nr(1 | t, n, i, r);
}
function ho(e, t) {
  return il(8390656, 8, e, t);
}
function aa(e, t) {
  return Ql(2048, 8, e, t);
}
function pc(e, t) {
  return Ql(4, 2, e, t);
}
function mc(e, t) {
  return Ql(4, 4, e, t);
}
function hc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function gc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ql(4, 4, hc.bind(null, t, e), n);
}
function oa() {
}
function yc(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && la(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function vc(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && la(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function wc(e, t, n) {
  return an & 21 ? (dt(n, t) || (n = ju(), pe.lanes |= n, on |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function vp(e, t) {
  var n = se;
  se = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ks.transition;
  ks.transition = {};
  try {
    e(!1), t();
  } finally {
    se = n, ks.transition = r;
  }
}
function xc() {
  return nt().memoizedState;
}
function wp(e, t, n) {
  var r = Vt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, _c(e)) kc(t, n);
  else if (n = nc(e, t, n, r), n !== null) {
    var l = De();
    ct(n, e, r, l), Sc(n, t, r);
  }
}
function xp(e, t, n) {
  var r = Vt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_c(e)) kc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var a = t.lastRenderedState, o = i(a, n);
      if (l.hasEagerState = !0, l.eagerState = o, dt(o, a)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Zi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = nc(e, t, l, r), n !== null && (l = De(), ct(n, e, r, l), Sc(n, t, r));
  }
}
function _c(e) {
  var t = e.alternate;
  return e === pe || t !== null && t === pe;
}
function kc(e, t) {
  or = bl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Sc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fi(e, n);
  }
}
var Ll = { readContext: tt, useCallback: Ie, useContext: Ie, useEffect: Ie, useImperativeHandle: Ie, useInsertionEffect: Ie, useLayoutEffect: Ie, useMemo: Ie, useReducer: Ie, useRef: Ie, useState: Ie, useDebugValue: Ie, useDeferredValue: Ie, useTransition: Ie, useMutableSource: Ie, useSyncExternalStore: Ie, useId: Ie, unstable_isNewReconciler: !1 }, _p = { readContext: tt, useCallback: function(e, t) {
  return pt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: tt, useEffect: ho, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, il(
    4194308,
    4,
    hc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return il(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return il(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = pt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = pt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = wp.bind(null, pe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = pt();
  return e = { current: e }, t.memoizedState = e;
}, useState: mo, useDebugValue: oa, useDeferredValue: function(e) {
  return pt().memoizedState = e;
}, useTransition: function() {
  var e = mo(!1), t = e[0];
  return e = vp.bind(null, e[1]), pt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = pe, l = pt();
  if (de) {
    if (n === void 0) throw Error(D(407));
    n = n();
  } else {
    if (n = t(), je === null) throw Error(D(349));
    an & 30 || ac(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, ho(uc.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Nr(9, oc.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = pt(), t = je.identifierPrefix;
  if (de) {
    var n = kt, r = _t;
    n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Er++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = yp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, kp = {
  readContext: tt,
  useCallback: yc,
  useContext: tt,
  useEffect: aa,
  useImperativeHandle: gc,
  useInsertionEffect: pc,
  useLayoutEffect: mc,
  useMemo: vc,
  useReducer: Ss,
  useRef: fc,
  useState: function() {
    return Ss(Cr);
  },
  useDebugValue: oa,
  useDeferredValue: function(e) {
    var t = nt();
    return wc(t, xe.memoizedState, e);
  },
  useTransition: function() {
    var e = Ss(Cr)[0], t = nt().memoizedState;
    return [e, t];
  },
  useMutableSource: sc,
  useSyncExternalStore: ic,
  useId: xc,
  unstable_isNewReconciler: !1
}, Sp = { readContext: tt, useCallback: yc, useContext: tt, useEffect: aa, useImperativeHandle: gc, useInsertionEffect: pc, useLayoutEffect: mc, useMemo: vc, useReducer: js, useRef: fc, useState: function() {
  return js(Cr);
}, useDebugValue: oa, useDeferredValue: function(e) {
  var t = nt();
  return xe === null ? t.memoizedState = e : wc(t, xe.memoizedState, e);
}, useTransition: function() {
  var e = js(Cr)[0], t = nt().memoizedState;
  return [e, t];
}, useMutableSource: sc, useSyncExternalStore: ic, useId: xc, unstable_isNewReconciler: !1 };
function st(e, t) {
  if (e && e.defaultProps) {
    t = me({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ii(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : me({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bl = { isMounted: function(e) {
  return (e = e._reactInternals) ? dn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = De(), l = Vt(e), i = St(r, l);
  i.payload = t, n != null && (i.callback = n), t = Wt(e, i, l), t !== null && (ct(t, e, l, r), ll(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = De(), l = Vt(e), i = St(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Wt(e, i, l), t !== null && (ct(t, e, l, r), ll(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = De(), r = Vt(e), l = St(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Wt(e, l, r), t !== null && (ct(t, e, r, n), ll(t, e, r));
} };
function go(e, t, n, r, l, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !wr(n, r) || !wr(l, i) : !0;
}
function jc(e, t, n) {
  var r = !1, l = Ht, i = t.contextType;
  return typeof i == "object" && i !== null ? i = tt(i) : (l = We(t) ? ln : Te.current, r = t.contextTypes, i = (r = r != null) ? Dn(e, l) : Ht), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function yo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
}
function ai(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ea(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = tt(i) : (i = We(t) ? ln : Te.current, l.context = Dn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ii(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Bl.enqueueReplaceState(l, l.state, null), Ml(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function On(e, t) {
  try {
    var n = "", r = t;
    do
      n += Xd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Es(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function oi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var jp = typeof WeakMap == "function" ? WeakMap : Map;
function Ec(e, t, n) {
  n = St(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Pl || (Pl = !0, vi = r), oi(e, t);
  }, n;
}
function Cc(e, t, n) {
  n = St(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      oi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    oi(e, t), typeof r != "function" && (Ut === null ? Ut = /* @__PURE__ */ new Set([this]) : Ut.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function vo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Op.bind(null, e, t, n), t.then(e, e));
}
function wo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xo(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = St(-1, 1), t.tag = 2, Wt(n, t, 1))), n.lanes |= 1), e);
}
var Ep = Mt.ReactCurrentOwner, Fe = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? tc(t, null, n, r) : zn(t, e.child, n, r);
}
function _o(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return Ln(t, l), r = sa(e, t, n, r, i, l), n = ia(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (de && n && Gi(t), t.flags |= 1, Pe(e, t, r, l), t.child);
}
function ko(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ga(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Nc(e, t, i, r, l)) : (e = cl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : wr, n(a, r) && e.ref === t.ref) return Nt(e, t, l);
  }
  return t.flags |= 1, e = Qt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Nc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (wr(i, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, Nt(e, t, l);
  }
  return ui(e, t, n, r, l);
}
function Mc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ae(Cn, Be), Be |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ae(Cn, Be), Be |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ae(Cn, Be), Be |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ae(Cn, Be), Be |= r;
  return Pe(e, t, l, n), t.child;
}
function Ic(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ui(e, t, n, r, l) {
  var i = We(n) ? ln : Te.current;
  return i = Dn(t, i), Ln(t, l), n = sa(e, t, n, r, i, l), r = ia(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (de && r && Gi(t), t.flags |= 1, Pe(e, t, n, l), t.child);
}
function So(e, t, n, r, l) {
  if (We(n)) {
    var i = !0;
    Sl(t);
  } else i = !1;
  if (Ln(t, l), t.stateNode === null) al(e, t), jc(t, n, r), ai(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = tt(c) : (c = We(n) ? ln : Te.current, c = Dn(t, c));
    var m = n.getDerivedStateFromProps, x = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    x || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== c) && yo(t, a, r, c), Tt = !1;
    var w = t.memoizedState;
    a.state = w, Ml(t, r, a, l), u = t.memoizedState, o !== r || w !== u || $e.current || Tt ? (typeof m == "function" && (ii(t, n, m, r), u = t.memoizedState), (o = Tt || go(t, n, o, r, w, u, c)) ? (x || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = c, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, rc(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : st(t.type, o), a.props = c, x = t.pendingProps, w = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = tt(u) : (u = We(n) ? ln : Te.current, u = Dn(t, u));
    var y = n.getDerivedStateFromProps;
    (m = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== x || w !== u) && yo(t, a, r, u), Tt = !1, w = t.memoizedState, a.state = w, Ml(t, r, a, l);
    var v = t.memoizedState;
    o !== x || w !== v || $e.current || Tt ? (typeof y == "function" && (ii(t, n, y, r), v = t.memoizedState), (c = Tt || go(t, n, c, r, w, v, u) || !1) ? (m || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, v, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, v, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), a.props = r, a.state = v, a.context = u, r = c) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ci(e, t, n, r, i, l);
}
function ci(e, t, n, r, l, i) {
  Ic(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && ao(t, n, !1), Nt(e, t, i);
  r = t.stateNode, Ep.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = zn(t, e.child, null, i), t.child = zn(t, null, o, i)) : Pe(e, t, o, i), t.memoizedState = r.state, l && ao(t, n, !0), t.child;
}
function bc(e) {
  var t = e.stateNode;
  t.pendingContext ? io(e, t.pendingContext, t.pendingContext !== t.context) : t.context && io(e, t.context, !1), ta(e, t.containerInfo);
}
function jo(e, t, n, r, l) {
  return Rn(), Yi(l), t.flags |= 256, Pe(e, t, n, r), t.child;
}
var di = { dehydrated: null, treeContext: null, retryLane: 0 };
function fi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lc(e, t, n) {
  var r = t.pendingProps, l = fe.current, i = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ae(fe, l & 1), e === null)
    return li(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Kl(a, r, 0, null), e = rn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = fi(n), t.memoizedState = di, e) : ua(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Cp(e, t, a, r, o, l, n);
  if (i) {
    i = r.fallback, a = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Qt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = Qt(o, i) : (i = rn(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? fi(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = di, r;
  }
  return i = e.child, e = i.sibling, r = Qt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ua(e, t) {
  return t = Kl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Kr(e, t, n, r) {
  return r !== null && Yi(r), zn(t, e.child, null, n), e = ua(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Cp(e, t, n, r, l, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Es(Error(D(422))), Kr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Kl({ mode: "visible", children: r.children }, l, 0, null), i = rn(i, l, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && zn(t, e.child, null, a), t.child.memoizedState = fi(a), t.memoizedState = di, i);
  if (!(t.mode & 1)) return Kr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, i = Error(D(419)), r = Es(i, r, void 0), Kr(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, Fe || o) {
    if (r = je, r !== null) {
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ct(e, l), ct(r, e, l, -1));
    }
    return ha(), r = Es(Error(D(421))), Kr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Fp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, He = $t(l.nextSibling), Ge = t, de = !0, at = null, e !== null && (qe[Je++] = _t, qe[Je++] = kt, qe[Je++] = sn, _t = e.id, kt = e.overflow, sn = t), t = ua(t, r.children), t.flags |= 4096, t);
}
function Eo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), si(e.return, t, n);
}
function Cs(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Tc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (Pe(e, t, r.children, n), r = fe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Eo(e, n, t);
      else if (e.tag === 19) Eo(e, n, t);
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
  if (ae(fe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Il(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Cs(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Il(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Cs(t, !0, n, null, i);
      break;
    case "together":
      Cs(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function al(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Nt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), on |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Qt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Np(e, t, n) {
  switch (t.tag) {
    case 3:
      bc(t), Rn();
      break;
    case 5:
      lc(t);
      break;
    case 1:
      We(t.type) && Sl(t);
      break;
    case 4:
      ta(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ae(Cl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ae(fe, fe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Lc(e, t, n) : (ae(fe, fe.current & 1), e = Nt(e, t, n), e !== null ? e.sibling : null);
      ae(fe, fe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Tc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ae(fe, fe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Mc(e, t, n);
  }
  return Nt(e, t, n);
}
var Pc, pi, Dc, Rc;
Pc = function(e, t) {
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
pi = function() {
};
Dc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, tn(gt.current);
    var i = null;
    switch (n) {
      case "input":
        l = Rs(e, l), r = Rs(e, r), i = [];
        break;
      case "select":
        l = me({}, l, { value: void 0 }), r = me({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Os(e, l), r = Os(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _l);
    }
    $s(n, r);
    var a;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (fr.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== o && (u != null || o != null)) if (c === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in u) u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (i = i || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (fr.hasOwnProperty(c) ? (u != null && c === "onScroll" && oe("scroll", e), i || o === u || (i = [])) : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Rc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qn(e, t) {
  if (!de) switch (e.tailMode) {
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
function be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Mp(e, t, n) {
  var r = t.pendingProps;
  switch (Ki(t), t.tag) {
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
      return be(t), null;
    case 1:
      return We(t.type) && kl(), be(t), null;
    case 3:
      return r = t.stateNode, An(), ue($e), ue(Te), ra(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Hr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, at !== null && (_i(at), at = null))), pi(e, t), be(t), null;
    case 5:
      na(t);
      var l = tn(jr.current);
      if (n = t.type, e !== null && t.stateNode != null) Dc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return be(t), null;
        }
        if (e = tn(gt.current), Hr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[mt] = t, r[kr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < nr.length; l++) oe(nr[l], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe(
                "error",
                r
              ), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              Pa(r, i), oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, oe("invalid", r);
              break;
            case "textarea":
              Ra(r, i), oe("invalid", r);
          }
          $s(n, i), l = null;
          for (var a in i) if (i.hasOwnProperty(a)) {
            var o = i[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && Br(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && Br(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : fr.hasOwnProperty(a) && o != null && a === "onScroll" && oe("scroll", r);
          }
          switch (n) {
            case "input":
              Ar(r), Da(r, i, !0);
              break;
            case "textarea":
              Ar(r), za(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = _l);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = uu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[mt] = t, e[kr] = r, Pc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Ws(n, r), n) {
              case "dialog":
                oe("cancel", e), oe("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < nr.length; l++) oe(nr[l], e);
                l = r;
                break;
              case "source":
                oe("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                oe(
                  "error",
                  e
                ), oe("load", e), l = r;
                break;
              case "details":
                oe("toggle", e), l = r;
                break;
              case "input":
                Pa(e, r), l = Rs(e, r), oe("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = me({}, r, { value: void 0 }), oe("invalid", e);
                break;
              case "textarea":
                Ra(e, r), l = Os(e, r), oe("invalid", e);
                break;
              default:
                l = r;
            }
            $s(n, l), o = l;
            for (i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "style" ? fu(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && cu(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && pr(e, u) : typeof u == "number" && pr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (fr.hasOwnProperty(i) ? u != null && i === "onScroll" && oe("scroll", e) : u != null && Pi(e, i, u, a));
            }
            switch (n) {
              case "input":
                Ar(e), Da(e, r, !1);
                break;
              case "textarea":
                Ar(e), za(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Nn(e, !!r.multiple, i, !1) : r.defaultValue != null && Nn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = _l);
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
      return be(t), null;
    case 6:
      if (e && t.stateNode != null) Rc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (n = tn(jr.current), tn(gt.current), Hr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[mt] = t, (i = r.nodeValue !== n) && (e = Ge, e !== null)) switch (e.tag) {
            case 3:
              Br(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[mt] = t, t.stateNode = r;
      }
      return be(t), null;
    case 13:
      if (ue(fe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (de && He !== null && t.mode & 1 && !(t.flags & 128)) Zu(), Rn(), t.flags |= 98560, i = !1;
        else if (i = Hr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(D(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(D(317));
            i[mt] = t;
          } else Rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          be(t), i = !1;
        } else at !== null && (_i(at), at = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || fe.current & 1 ? _e === 0 && (_e = 3) : ha())), t.updateQueue !== null && (t.flags |= 4), be(t), null);
    case 4:
      return An(), pi(e, t), e === null && xr(t.stateNode.containerInfo), be(t), null;
    case 10:
      return Ji(t.type._context), be(t), null;
    case 17:
      return We(t.type) && kl(), be(t), null;
    case 19:
      if (ue(fe), i = t.memoizedState, i === null) return be(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null) if (r) qn(i, !1);
      else {
        if (_e !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = Il(e), a !== null) {
            for (t.flags |= 128, qn(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ae(fe, fe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ye() > Fn && (t.flags |= 128, r = !0, qn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Il(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qn(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !de) return be(t), null;
        } else 2 * ye() - i.renderingStartTime > Fn && n !== 1073741824 && (t.flags |= 128, r = !0, qn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ye(), t.sibling = null, n = fe.current, ae(fe, r ? n & 1 | 2 : n & 1), t) : (be(t), null);
    case 22:
    case 23:
      return ma(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Be & 1073741824 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : be(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function Ip(e, t) {
  switch (Ki(t), t.tag) {
    case 1:
      return We(t.type) && kl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return An(), ue($e), ue(Te), ra(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return na(t), null;
    case 13:
      if (ue(fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(D(340));
        Rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ue(fe), null;
    case 4:
      return An(), null;
    case 10:
      return Ji(t.type._context), null;
    case 22:
    case 23:
      return ma(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yr = !1, Le = !1, bp = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function En(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    he(e, t, r);
  }
  else n.current = null;
}
function mi(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var Co = !1;
function Lp(e, t) {
  if (qs = vl, e = $u(), Hi(e)) {
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
        var a = 0, o = -1, u = -1, c = 0, m = 0, x = e, w = null;
        t: for (; ; ) {
          for (var y; x !== n || l !== 0 && x.nodeType !== 3 || (o = a + l), x !== i || r !== 0 && x.nodeType !== 3 || (u = a + r), x.nodeType === 3 && (a += x.nodeValue.length), (y = x.firstChild) !== null; )
            w = x, x = y;
          for (; ; ) {
            if (x === e) break t;
            if (w === n && ++c === l && (o = a), w === i && ++m === r && (u = a), (y = x.nextSibling) !== null) break;
            x = w, w = x.parentNode;
          }
          x = y;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Js = { focusedElem: e, selectionRange: n }, vl = !1, O = t; O !== null; ) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
  else for (; O !== null; ) {
    t = O;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var k = v.memoizedProps, j = v.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? k : st(t.type, k), j);
            d.__reactInternalSnapshotBeforeUpdate = f;
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
          throw Error(D(163));
      }
    } catch (h) {
      he(t, t.return, h);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, O = e;
      break;
    }
    O = t.return;
  }
  return v = Co, Co = !1, v;
}
function ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && mi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Hl(e, t) {
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
function hi(e) {
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
function zc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, zc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[kr], delete t[ti], delete t[pp], delete t[mp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ac(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function No(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ac(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _l));
  else if (r !== 4 && (e = e.child, e !== null)) for (gi(e, t, n), e = e.sibling; e !== null; ) gi(e, t, n), e = e.sibling;
}
function yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (yi(e, t, n), e = e.sibling; e !== null; ) yi(e, t, n), e = e.sibling;
}
var Ee = null, it = !1;
function bt(e, t, n) {
  for (n = n.child; n !== null; ) Oc(e, t, n), n = n.sibling;
}
function Oc(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function") try {
    ht.onCommitFiberUnmount(Ol, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Le || En(n, t);
    case 6:
      var r = Ee, l = it;
      Ee = null, bt(e, t, n), Ee = r, it = l, Ee !== null && (it ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null && (it ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? ws(e.parentNode, n) : e.nodeType === 1 && ws(e, n), yr(e)) : ws(Ee, n.stateNode));
      break;
    case 4:
      r = Ee, l = it, Ee = n.stateNode.containerInfo, it = !0, bt(e, t, n), Ee = r, it = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && mi(n, t, a), l = l.next;
        } while (l !== r);
      }
      bt(e, t, n);
      break;
    case 1:
      if (!Le && (En(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        he(n, t, o);
      }
      bt(e, t, n);
      break;
    case 21:
      bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, bt(e, t, n), Le = r) : bt(e, t, n);
      break;
    default:
      bt(e, t, n);
  }
}
function Mo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bp()), t.forEach(function(r) {
      var l = $p.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function rt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            Ee = o.stateNode, it = !1;
            break e;
          case 3:
            Ee = o.stateNode.containerInfo, it = !0;
            break e;
          case 4:
            Ee = o.stateNode.containerInfo, it = !0;
            break e;
        }
        o = o.return;
      }
      if (Ee === null) throw Error(D(160));
      Oc(i, a, l), Ee = null, it = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      he(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Fc(t, e), t = t.sibling;
}
function Fc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (rt(t, e), ft(e), r & 4) {
        try {
          ur(3, e, e.return), Hl(3, e);
        } catch (k) {
          he(e, e.return, k);
        }
        try {
          ur(5, e, e.return);
        } catch (k) {
          he(e, e.return, k);
        }
      }
      break;
    case 1:
      rt(t, e), ft(e), r & 512 && n !== null && En(n, n.return);
      break;
    case 5:
      if (rt(t, e), ft(e), r & 512 && n !== null && En(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          pr(l, "");
        } catch (k) {
          he(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && i.type === "radio" && i.name != null && au(l, i), Ws(o, a);
          var c = Ws(o, i);
          for (a = 0; a < u.length; a += 2) {
            var m = u[a], x = u[a + 1];
            m === "style" ? fu(l, x) : m === "dangerouslySetInnerHTML" ? cu(l, x) : m === "children" ? pr(l, x) : Pi(l, m, x, c);
          }
          switch (o) {
            case "input":
              zs(l, i);
              break;
            case "textarea":
              ou(l, i);
              break;
            case "select":
              var w = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? Nn(l, !!i.multiple, y, !1) : w !== !!i.multiple && (i.defaultValue != null ? Nn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Nn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[kr] = i;
        } catch (k) {
          he(e, e.return, k);
        }
      }
      break;
    case 6:
      if (rt(t, e), ft(e), r & 4) {
        if (e.stateNode === null) throw Error(D(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (k) {
          he(e, e.return, k);
        }
      }
      break;
    case 3:
      if (rt(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        yr(t.containerInfo);
      } catch (k) {
        he(e, e.return, k);
      }
      break;
    case 4:
      rt(t, e), ft(e);
      break;
    case 13:
      rt(t, e), ft(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (fa = ye())), r & 4 && Mo(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (c = Le) || m, rt(t, e), Le = c) : rt(t, e), ft(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (O = e, m = e.child; m !== null; ) {
          for (x = O = m; O !== null; ) {
            switch (w = O, y = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ur(4, w, w.return);
                break;
              case 1:
                En(w, w.return);
                var v = w.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (k) {
                    he(r, n, k);
                  }
                }
                break;
              case 5:
                En(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  bo(x);
                  continue;
                }
            }
            y !== null ? (y.return = w, O = y) : bo(x);
          }
          m = m.sibling;
        }
        e: for (m = null, x = e; ; ) {
          if (x.tag === 5) {
            if (m === null) {
              m = x;
              try {
                l = x.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = x.stateNode, u = x.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = du("display", a));
              } catch (k) {
                he(e, e.return, k);
              }
            }
          } else if (x.tag === 6) {
            if (m === null) try {
              x.stateNode.nodeValue = c ? "" : x.memoizedProps;
            } catch (k) {
              he(e, e.return, k);
            }
          } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
            x.child.return = x, x = x.child;
            continue;
          }
          if (x === e) break e;
          for (; x.sibling === null; ) {
            if (x.return === null || x.return === e) break e;
            m === x && (m = null), x = x.return;
          }
          m === x && (m = null), x.sibling.return = x.return, x = x.sibling;
        }
      }
      break;
    case 19:
      rt(t, e), ft(e), r & 4 && Mo(e);
      break;
    case 21:
      break;
    default:
      rt(
        t,
        e
      ), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ac(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (pr(l, ""), r.flags &= -33);
          var i = No(e);
          yi(e, i, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = No(e);
          gi(e, o, a);
          break;
        default:
          throw Error(D(161));
      }
    } catch (u) {
      he(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Tp(e, t, n) {
  O = e, $c(e);
}
function $c(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O, i = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Yr;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || Le;
        o = Yr;
        var c = Le;
        if (Yr = a, (Le = u) && !c) for (O = l; O !== null; ) a = O, u = a.child, a.tag === 22 && a.memoizedState !== null ? Lo(l) : u !== null ? (u.return = a, O = u) : Lo(l);
        for (; i !== null; ) O = i, $c(i), i = i.sibling;
        O = l, Yr = o, Le = c;
      }
      Io(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, O = i) : Io(e);
  }
}
function Io(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Le || Hl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Le) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && po(t, i, r);
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
              po(t, a, n);
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
              var c = t.alternate;
              if (c !== null) {
                var m = c.memoizedState;
                if (m !== null) {
                  var x = m.dehydrated;
                  x !== null && yr(x);
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
            throw Error(D(163));
        }
        Le || t.flags & 512 && hi(t);
      } catch (w) {
        he(t, t.return, w);
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
function bo(e) {
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
function Lo(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hl(4, t);
          } catch (u) {
            he(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              he(t, l, u);
            }
          }
          var i = t.return;
          try {
            hi(t);
          } catch (u) {
            he(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            hi(t);
          } catch (u) {
            he(t, a, u);
          }
      }
    } catch (u) {
      he(t, t.return, u);
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
var Pp = Math.ceil, Tl = Mt.ReactCurrentDispatcher, ca = Mt.ReactCurrentOwner, et = Mt.ReactCurrentBatchConfig, ne = 0, je = null, ve = null, Ne = 0, Be = 0, Cn = Kt(0), _e = 0, Mr = null, on = 0, Gl = 0, da = 0, cr = null, Oe = null, fa = 0, Fn = 1 / 0, wt = null, Pl = !1, vi = null, Ut = null, Xr = !1, zt = null, Dl = 0, dr = 0, wi = null, ol = -1, ul = 0;
function De() {
  return ne & 6 ? ye() : ol !== -1 ? ol : ol = ye();
}
function Vt(e) {
  return e.mode & 1 ? ne & 2 && Ne !== 0 ? Ne & -Ne : gp.transition !== null ? (ul === 0 && (ul = ju()), ul) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Lu(e.type)), e) : 1;
}
function ct(e, t, n, r) {
  if (50 < dr) throw dr = 0, wi = null, Error(D(185));
  Lr(e, n, r), (!(ne & 2) || e !== je) && (e === je && (!(ne & 2) && (Gl |= n), _e === 4 && Dt(e, Ne)), Ue(e, r), n === 1 && ne === 0 && !(t.mode & 1) && (Fn = ye() + 500, Vl && Yt()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  gf(e, t);
  var r = yl(e, e === je ? Ne : 0);
  if (r === 0) n !== null && Fa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Fa(n), t === 1) e.tag === 0 ? hp(To.bind(null, e)) : Xu(To.bind(null, e)), dp(function() {
      !(ne & 6) && Yt();
    }), n = null;
    else {
      switch (Eu(r)) {
        case 1:
          n = Oi;
          break;
        case 4:
          n = ku;
          break;
        case 16:
          n = gl;
          break;
        case 536870912:
          n = Su;
          break;
        default:
          n = gl;
      }
      n = Kc(n, Wc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Wc(e, t) {
  if (ol = -1, ul = 0, ne & 6) throw Error(D(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = yl(e, e === je ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Rl(e, r);
  else {
    t = r;
    var l = ne;
    ne |= 2;
    var i = Vc();
    (je !== e || Ne !== t) && (wt = null, Fn = ye() + 500, nn(e, t));
    do
      try {
        zp();
        break;
      } catch (o) {
        Uc(e, o);
      }
    while (!0);
    qi(), Tl.current = i, ne = l, ve !== null ? t = 0 : (je = null, Ne = 0, t = _e);
  }
  if (t !== 0) {
    if (t === 2 && (l = Hs(e), l !== 0 && (r = l, t = xi(e, l))), t === 1) throw n = Mr, nn(e, 0), Dt(e, r), Ue(e, ye()), n;
    if (t === 6) Dt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Dp(l) && (t = Rl(e, r), t === 2 && (i = Hs(e), i !== 0 && (r = i, t = xi(e, i))), t === 1)) throw n = Mr, nn(e, 0), Dt(e, r), Ue(e, ye()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          Jt(e, Oe, wt);
          break;
        case 3:
          if (Dt(e, r), (r & 130023424) === r && (t = fa + 500 - ye(), 10 < t)) {
            if (yl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              De(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ei(Jt.bind(null, e, Oe, wt), t);
            break;
          }
          Jt(e, Oe, wt);
          break;
        case 4:
          if (Dt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - ut(r);
            i = 1 << a, a = t[a], a > l && (l = a), r &= ~i;
          }
          if (r = l, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ei(Jt.bind(null, e, Oe, wt), r);
            break;
          }
          Jt(e, Oe, wt);
          break;
        case 5:
          Jt(e, Oe, wt);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return Ue(e, ye()), e.callbackNode === n ? Wc.bind(null, e) : null;
}
function xi(e, t) {
  var n = cr;
  return e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256), e = Rl(e, t), e !== 2 && (t = Oe, Oe = n, t !== null && _i(t)), e;
}
function _i(e) {
  Oe === null ? Oe = e : Oe.push.apply(Oe, e);
}
function Dp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!dt(i(), l)) return !1;
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
function Dt(e, t) {
  for (t &= ~da, t &= ~Gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ut(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function To(e) {
  if (ne & 6) throw Error(D(327));
  Tn();
  var t = yl(e, 0);
  if (!(t & 1)) return Ue(e, ye()), null;
  var n = Rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hs(e);
    r !== 0 && (t = r, n = xi(e, r));
  }
  if (n === 1) throw n = Mr, nn(e, 0), Dt(e, t), Ue(e, ye()), n;
  if (n === 6) throw Error(D(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Jt(e, Oe, wt), Ue(e, ye()), null;
}
function pa(e, t) {
  var n = ne;
  ne |= 1;
  try {
    return e(t);
  } finally {
    ne = n, ne === 0 && (Fn = ye() + 500, Vl && Yt());
  }
}
function un(e) {
  zt !== null && zt.tag === 0 && !(ne & 6) && Tn();
  var t = ne;
  ne |= 1;
  var n = et.transition, r = se;
  try {
    if (et.transition = null, se = 1, e) return e();
  } finally {
    se = r, et.transition = n, ne = t, !(ne & 6) && Yt();
  }
}
function ma() {
  Be = Cn.current, ue(Cn);
}
function nn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, cp(n)), ve !== null) for (n = ve.return; n !== null; ) {
    var r = n;
    switch (Ki(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && kl();
        break;
      case 3:
        An(), ue($e), ue(Te), ra();
        break;
      case 5:
        na(r);
        break;
      case 4:
        An();
        break;
      case 13:
        ue(fe);
        break;
      case 19:
        ue(fe);
        break;
      case 10:
        Ji(r.type._context);
        break;
      case 22:
      case 23:
        ma();
    }
    n = n.return;
  }
  if (je = e, ve = e = Qt(e.current, null), Ne = Be = t, _e = 0, Mr = null, da = Gl = on = 0, Oe = cr = null, en !== null) {
    for (t = 0; t < en.length; t++) if (n = en[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var a = i.next;
        i.next = l, r.next = a;
      }
      n.pending = r;
    }
    en = null;
  }
  return e;
}
function Uc(e, t) {
  do {
    var n = ve;
    try {
      if (qi(), sl.current = Ll, bl) {
        for (var r = pe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        bl = !1;
      }
      if (an = 0, Se = xe = pe = null, or = !1, Er = 0, ca.current = null, n === null || n.return === null) {
        _e = 1, Mr = t, ve = null;
        break;
      }
      e: {
        var i = e, a = n.return, o = n, u = t;
        if (t = Ne, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, m = o, x = m.tag;
          if (!(m.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var w = m.alternate;
            w ? (m.updateQueue = w.updateQueue, m.memoizedState = w.memoizedState, m.lanes = w.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y = wo(a);
          if (y !== null) {
            y.flags &= -257, xo(y, a, o, i, t), y.mode & 1 && vo(i, c, t), t = y, u = c;
            var v = t.updateQueue;
            if (v === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(u), t.updateQueue = k;
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              vo(i, c, t), ha();
              break e;
            }
            u = Error(D(426));
          }
        } else if (de && o.mode & 1) {
          var j = wo(a);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), xo(j, a, o, i, t), Yi(On(u, o));
            break e;
          }
        }
        i = u = On(u, o), _e !== 4 && (_e = 2), cr === null ? cr = [i] : cr.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Ec(i, u, t);
              fo(i, d);
              break e;
            case 1:
              o = u;
              var f = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ut === null || !Ut.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var h = Cc(i, o, t);
                fo(i, h);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Bc(n);
    } catch (_) {
      t = _, ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Vc() {
  var e = Tl.current;
  return Tl.current = Ll, e === null ? Ll : e;
}
function ha() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4), je === null || !(on & 268435455) && !(Gl & 268435455) || Dt(je, Ne);
}
function Rl(e, t) {
  var n = ne;
  ne |= 2;
  var r = Vc();
  (je !== e || Ne !== t) && (wt = null, nn(e, t));
  do
    try {
      Rp();
      break;
    } catch (l) {
      Uc(e, l);
    }
  while (!0);
  if (qi(), ne = n, Tl.current = r, ve !== null) throw Error(D(261));
  return je = null, Ne = 0, _e;
}
function Rp() {
  for (; ve !== null; ) Qc(ve);
}
function zp() {
  for (; ve !== null && !af(); ) Qc(ve);
}
function Qc(e) {
  var t = Gc(e.alternate, e, Be);
  e.memoizedProps = e.pendingProps, t === null ? Bc(e) : ve = t, ca.current = null;
}
function Bc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ip(n, t), n !== null) {
        n.flags &= 32767, ve = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        _e = 6, ve = null;
        return;
      }
    } else if (n = Mp(n, t, Be), n !== null) {
      ve = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function Jt(e, t, n) {
  var r = se, l = et.transition;
  try {
    et.transition = null, se = 1, Ap(e, t, n, r);
  } finally {
    et.transition = l, se = r;
  }
  return null;
}
function Ap(e, t, n, r) {
  do
    Tn();
  while (zt !== null);
  if (ne & 6) throw Error(D(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(D(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (yf(e, i), e === je && (ve = je = null, Ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xr || (Xr = !0, Kc(gl, function() {
    return Tn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = et.transition, et.transition = null;
    var a = se;
    se = 1;
    var o = ne;
    ne |= 4, ca.current = null, Lp(e, n), Fc(n, e), rp(Js), vl = !!qs, Js = qs = null, e.current = n, Tp(n), of(), ne = o, se = a, et.transition = i;
  } else e.current = n;
  if (Xr && (Xr = !1, zt = e, Dl = l), i = e.pendingLanes, i === 0 && (Ut = null), df(n.stateNode), Ue(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Pl) throw Pl = !1, e = vi, vi = null, e;
  return Dl & 1 && e.tag !== 0 && Tn(), i = e.pendingLanes, i & 1 ? e === wi ? dr++ : (dr = 0, wi = e) : dr = 0, Yt(), null;
}
function Tn() {
  if (zt !== null) {
    var e = Eu(Dl), t = et.transition, n = se;
    try {
      if (et.transition = null, se = 16 > e ? 16 : e, zt === null) var r = !1;
      else {
        if (e = zt, zt = null, Dl = 0, ne & 6) throw Error(D(331));
        var l = ne;
        for (ne |= 4, O = e.current; O !== null; ) {
          var i = O, a = i.child;
          if (O.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (O = c; O !== null; ) {
                  var m = O;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ur(8, m, i);
                  }
                  var x = m.child;
                  if (x !== null) x.return = m, O = x;
                  else for (; O !== null; ) {
                    m = O;
                    var w = m.sibling, y = m.return;
                    if (zc(m), m === c) {
                      O = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = y, O = w;
                      break;
                    }
                    O = y;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var k = v.child;
                if (k !== null) {
                  v.child = null;
                  do {
                    var j = k.sibling;
                    k.sibling = null, k = j;
                  } while (k !== null);
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
                ur(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, O = d;
              break e;
            }
            O = i.return;
          }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          a = O;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, O = p;
          else e: for (a = f; O !== null; ) {
            if (o = O, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Hl(9, o);
              }
            } catch (_) {
              he(o, o.return, _);
            }
            if (o === a) {
              O = null;
              break e;
            }
            var h = o.sibling;
            if (h !== null) {
              h.return = o.return, O = h;
              break e;
            }
            O = o.return;
          }
        }
        if (ne = l, Yt(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
          ht.onPostCommitFiberRoot(Ol, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      se = n, et.transition = t;
    }
  }
  return !1;
}
function Po(e, t, n) {
  t = On(n, t), t = Ec(e, t, 1), e = Wt(e, t, 1), t = De(), e !== null && (Lr(e, 1, t), Ue(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) Po(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Po(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ut === null || !Ut.has(r))) {
        e = On(n, e), e = Cc(t, e, 1), t = Wt(t, e, 1), e = De(), t !== null && (Lr(t, 1, e), Ue(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Op(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = De(), e.pingedLanes |= e.suspendedLanes & n, je === e && (Ne & n) === n && (_e === 4 || _e === 3 && (Ne & 130023424) === Ne && 500 > ye() - fa ? nn(e, 0) : da |= n), Ue(e, t);
}
function Hc(e, t) {
  t === 0 && (e.mode & 1 ? (t = $r, $r <<= 1, !($r & 130023424) && ($r = 4194304)) : t = 1);
  var n = De();
  e = Ct(e, t), e !== null && (Lr(e, t, n), Ue(e, n));
}
function Fp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Hc(e, n);
}
function $p(e, t) {
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
      throw Error(D(314));
  }
  r !== null && r.delete(t), Hc(e, n);
}
var Gc;
Gc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || $e.current) Fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, Np(e, t, n);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, de && t.flags & 1048576 && qu(t, El, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      al(e, t), e = t.pendingProps;
      var l = Dn(t, Te.current);
      Ln(t, n), l = sa(null, t, r, e, l, n);
      var i = ia();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (i = !0, Sl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ea(t), l.updater = Bl, t.stateNode = l, l._reactInternals = t, ai(t, r, e, n), t = ci(null, t, r, !0, i, n)) : (t.tag = 0, de && i && Gi(t), Pe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (al(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Up(r), e = st(r, e), l) {
          case 0:
            t = ui(null, t, r, e, n);
            break e;
          case 1:
            t = So(null, t, r, e, n);
            break e;
          case 11:
            t = _o(null, t, r, e, n);
            break e;
          case 14:
            t = ko(null, t, r, st(r.type, e), n);
            break e;
        }
        throw Error(D(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), ui(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), So(e, t, r, l, n);
    case 3:
      e: {
        if (bc(t), e === null) throw Error(D(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, rc(e, t), Ml(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = On(Error(D(423)), t), t = jo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = On(Error(D(424)), t), t = jo(e, t, r, n, l);
          break e;
        } else for (He = $t(t.stateNode.containerInfo.firstChild), Ge = t, de = !0, at = null, n = tc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Rn(), r === l) {
            t = Nt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return lc(t), e === null && li(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = l.children, Zs(r, l) ? a = null : i !== null && Zs(r, i) && (t.flags |= 32), Ic(e, t), Pe(e, t, a, n), t.child;
    case 6:
      return e === null && li(t), null;
    case 13:
      return Lc(e, t, n);
    case 4:
      return ta(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : Pe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), _o(e, t, r, l, n);
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, a = l.value, ae(Cl, r._currentValue), r._currentValue = a, i !== null) if (dt(i.value, a)) {
          if (i.children === l.children && !$e.current) {
            t = Nt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var o = i.dependencies;
          if (o !== null) {
            a = i.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = St(-1, n & -n), u.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var m = c.pending;
                    m === null ? u.next = u : (u.next = m.next, m.next = u), c.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), si(
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
            if (a = i.return, a === null) throw Error(D(341));
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), si(a, n, t), a = i.sibling;
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
        Pe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Ln(t, n), l = tt(l), r = r(l), t.flags |= 1, Pe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = st(r, t.pendingProps), l = st(r.type, l), ko(e, t, r, l, n);
    case 15:
      return Nc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), al(e, t), t.tag = 1, We(r) ? (e = !0, Sl(t)) : e = !1, Ln(t, n), jc(t, r, l), ai(t, r, l, n), ci(null, t, r, !0, e, n);
    case 19:
      return Tc(e, t, n);
    case 22:
      return Mc(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function Kc(e, t) {
  return _u(e, t);
}
function Wp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ze(e, t, n, r) {
  return new Wp(e, t, n, r);
}
function ga(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Up(e) {
  if (typeof e == "function") return ga(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ri) return 11;
    if (e === zi) return 14;
  }
  return 2;
}
function Qt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function cl(e, t, n, r, l, i) {
  var a = 2;
  if (r = e, typeof e == "function") ga(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case gn:
      return rn(n.children, l, i, t);
    case Di:
      a = 8, l |= 8;
      break;
    case Ls:
      return e = Ze(12, n, t, l | 2), e.elementType = Ls, e.lanes = i, e;
    case Ts:
      return e = Ze(13, n, t, l), e.elementType = Ts, e.lanes = i, e;
    case Ps:
      return e = Ze(19, n, t, l), e.elementType = Ps, e.lanes = i, e;
    case lu:
      return Kl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case nu:
          a = 10;
          break e;
        case ru:
          a = 9;
          break e;
        case Ri:
          a = 11;
          break e;
        case zi:
          a = 14;
          break e;
        case Lt:
          a = 16, r = null;
          break e;
      }
      throw Error(D(130, e == null ? e : typeof e, ""));
  }
  return t = Ze(a, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function rn(e, t, n, r) {
  return e = Ze(7, e, r, t), e.lanes = n, e;
}
function Kl(e, t, n, r) {
  return e = Ze(22, e, r, t), e.elementType = lu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ns(e, t, n) {
  return e = Ze(6, e, null, t), e.lanes = n, e;
}
function Ms(e, t, n) {
  return t = Ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Vp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = os(0), this.expirationTimes = os(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = os(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ya(e, t, n, r, l, i, a, o, u) {
  return e = new Vp(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ze(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ea(i), e;
}
function Qp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Yc(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (dn(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return Yu(e, n, t);
  }
  return t;
}
function Xc(e, t, n, r, l, i, a, o, u) {
  return e = ya(n, r, !0, e, l, i, a, o, u), e.context = Yc(null), n = e.current, r = De(), l = Vt(n), i = St(r, l), i.callback = t ?? null, Wt(n, i, l), e.current.lanes = l, Lr(e, l, r), Ue(e, r), e;
}
function Yl(e, t, n, r) {
  var l = t.current, i = De(), a = Vt(l);
  return n = Yc(n), t.context === null ? t.context = n : t.pendingContext = n, t = St(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Wt(l, t, a), e !== null && (ct(e, l, a, i), ll(e, l, a)), a;
}
function zl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Do(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function va(e, t) {
  Do(e, t), (e = e.alternate) && Do(e, t);
}
function Bp() {
  return null;
}
var qc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function wa(e) {
  this._internalRoot = e;
}
Xl.prototype.render = wa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  Yl(e, t, null, null);
};
Xl.prototype.unmount = wa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      Yl(null, e, null, null);
    }), t[Et] = null;
  }
};
function Xl(e) {
  this._internalRoot = e;
}
Xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Mu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++) ;
    Pt.splice(n, 0, e), n === 0 && bu(e);
  }
};
function xa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ql(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ro() {
}
function Hp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = zl(a);
        i.call(c);
      };
    }
    var a = Xc(t, r, e, 0, null, !1, !1, "", Ro);
    return e._reactRootContainer = a, e[Et] = a.current, xr(e.nodeType === 8 ? e.parentNode : e), un(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = zl(u);
      o.call(c);
    };
  }
  var u = ya(e, 0, !1, null, null, !1, !1, "", Ro);
  return e._reactRootContainer = u, e[Et] = u.current, xr(e.nodeType === 8 ? e.parentNode : e), un(function() {
    Yl(t, u, n, r);
  }), u;
}
function Jl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = zl(a);
        o.call(u);
      };
    }
    Yl(t, a, e, l);
  } else a = Hp(n, t, e, l, r);
  return zl(a);
}
Cu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = tr(t.pendingLanes);
        n !== 0 && (Fi(t, n | 1), Ue(t, ye()), !(ne & 6) && (Fn = ye() + 500, Yt()));
      }
      break;
    case 13:
      un(function() {
        var r = Ct(e, 1);
        if (r !== null) {
          var l = De();
          ct(r, e, 1, l);
        }
      }), va(e, 1);
  }
};
$i = function(e) {
  if (e.tag === 13) {
    var t = Ct(e, 134217728);
    if (t !== null) {
      var n = De();
      ct(t, e, 134217728, n);
    }
    va(e, 134217728);
  }
};
Nu = function(e) {
  if (e.tag === 13) {
    var t = Vt(e), n = Ct(e, t);
    if (n !== null) {
      var r = De();
      ct(n, e, t, r);
    }
    va(e, t);
  }
};
Mu = function() {
  return se;
};
Iu = function(e, t) {
  var n = se;
  try {
    return se = e, t();
  } finally {
    se = n;
  }
};
Vs = function(e, t, n) {
  switch (t) {
    case "input":
      if (zs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ul(r);
            if (!l) throw Error(D(90));
            iu(r), zs(r, l);
          }
        }
      }
      break;
    case "textarea":
      ou(e, n);
      break;
    case "select":
      t = n.value, t != null && Nn(e, !!n.multiple, t, !1);
  }
};
hu = pa;
gu = un;
var Gp = { usingClientEntryPoint: !1, Events: [Pr, xn, Ul, pu, mu, pa] }, Jn = { findFiberByHostInstance: Zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Kp = { bundleType: Jn.bundleType, version: Jn.version, rendererPackageName: Jn.rendererPackageName, rendererConfig: Jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = wu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Jn.findFiberByHostInstance || Bp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qr.isDisabled && qr.supportsFiber) try {
    Ol = qr.inject(Kp), ht = qr;
  } catch {
  }
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gp;
Ye.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xa(t)) throw Error(D(200));
  return Qp(e, t, null, n);
};
Ye.createRoot = function(e, t) {
  if (!xa(e)) throw Error(D(299));
  var n = !1, r = "", l = qc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ya(e, 1, !1, null, null, n, !1, r, l), e[Et] = t.current, xr(e.nodeType === 8 ? e.parentNode : e), new wa(t);
};
Ye.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","), Error(D(268, e)));
  return e = wu(t), e = e === null ? null : e.stateNode, e;
};
Ye.flushSync = function(e) {
  return un(e);
};
Ye.hydrate = function(e, t, n) {
  if (!ql(t)) throw Error(D(200));
  return Jl(null, e, t, !0, n);
};
Ye.hydrateRoot = function(e, t, n) {
  if (!xa(e)) throw Error(D(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", a = qc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Xc(t, null, e, 1, n ?? null, l, !1, i, a), e[Et] = t.current, xr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Xl(t);
};
Ye.render = function(e, t, n) {
  if (!ql(t)) throw Error(D(200));
  return Jl(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function(e) {
  if (!ql(e)) throw Error(D(40));
  return e._reactRootContainer ? (un(function() {
    Jl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Et] = null;
    });
  }), !0) : !1;
};
Ye.unstable_batchedUpdates = pa;
Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ql(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return Jl(e, t, n, !1, r);
};
Ye.version = "18.3.1-next-f1338f8080-20240426";
function Jc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jc);
    } catch (e) {
      console.error(e);
    }
}
Jc(), Jo.exports = Ye;
var Ce = Jo.exports, Zc, zo = Ce;
Zc = zo.createRoot, zo.hydrateRoot;
var ed = { exports: {} }, Zl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yp = g, Xp = Symbol.for("react.element"), qp = Symbol.for("react.fragment"), Jp = Object.prototype.hasOwnProperty, Zp = Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, em = { key: !0, ref: !0, __self: !0, __source: !0 };
function td(e, t, n) {
  var r, l = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) Jp.call(t, r) && !em.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Xp, type: e, key: i, ref: a, props: l, _owner: Zp.current };
}
Zl.Fragment = qp;
Zl.jsx = td;
Zl.jsxs = td;
ed.exports = Zl;
var s = ed.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tm = {
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
const nm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), X = (e, t) => {
  const n = g.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: u,
      ...c
    }, m) => g.createElement(
      "svg",
      {
        ref: m,
        ...tm,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${nm(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([x, w]) => g.createElement(x, w)),
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
const nd = X("AlertCircle", [
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
const rm = X("AlertTriangle", [
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
const lm = X("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rd = X("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = X("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sm = X("ArrowUpDown", [
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
const ld = X("ArrowUp", [
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
const am = X("Calendar", [
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
const om = X("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _a = X("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sd = X("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const id = X("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = X("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = X("Download", [
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
const ad = X("FileJson", [
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
const dm = X("Folder", [
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
const fm = X("Info", [
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
const od = X("LayoutGrid", [
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
const pm = X("LayoutList", [
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
const mm = X("Link2Off", [
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
const hm = X("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = X("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = X("Maximize", [
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
const ym = X("Minimize", [
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
const vm = X("MoreVertical", [
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
const ud = X("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = X("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wm = X("PlusCircle", [
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
const ka = X("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = X("RefreshCw", [
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
const $n = X("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xm = X("Settings", [
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
const ki = X("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Si = X("Star", [
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
const fn = X("Tag", [
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
const Wn = X("Trash2", [
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
const _m = X("Type", [
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
const km = X("Upload", [
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
const we = X("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = Y;
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
const Sm = async () => {
  const e = await Y.fetchApi("/meld/home-dir");
  return (await ee(e)).home;
};
let Al = !1;
const jm = (e) => {
  Al = e, Al && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Em = (...e) => {
  Al && console.log("[Meld]", ...e);
}, Cm = (...e) => {
  Al && console.warn("[Meld]", ...e);
}, Nm = (...e) => {
  console.error("[Meld]", ...e);
}, Q = {
  log: Em,
  warn: Cm,
  error: Nm,
  init: jm
}, dl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const i = await Y.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return ee(i);
}, cd = async (e) => {
  const t = await Y.fetchApi(`/meld/image/${e}/details`);
  return ee(t);
}, ji = async (e, t = !1) => {
  const n = await Y.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await ee(n);
}, Sa = async (e) => {
  const t = await Y.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return ee(t);
}, dd = async (e) => {
  const t = await Y.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return ee(t);
}, Fo = async (e, t) => {
  const n = await Y.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await ee(n);
}, Mm = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await Y.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await ee(r);
  } catch {
    return [];
  }
}, Ei = async (e) => {
  const t = await Y.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await ee(t);
  } catch {
    return [];
  }
}, Im = async (e, t) => {
  const n = await Y.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await ee(n);
}, Ci = async (e, t, n) => {
  const r = await Y.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await ee(r);
}, bm = async (e) => {
  const t = await Y.fetchApi(`/meld/image/${e}/workflow`);
  return ee(t);
}, Lm = async (e) => {
  const t = await Y.fetchApi(`/meld/image/${e}/snapshot_data`);
  return ee(t);
}, Tm = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await Y.fetchApi(n);
  return ee(r);
}, Pm = async () => {
  const e = await Y.fetchApi("/meld/search-suggestions");
  return ee(e);
}, Dm = async () => {
  const e = await Y.fetchApi("/meld/search-keywords");
  return ee(e);
}, Rm = async () => {
  const e = await Y.fetchApi("/meld/search-config");
  return ee(e);
}, zm = async () => {
  const e = await Y.fetchApi("/meld/favorites");
  return ee(e);
}, Am = async (e, t) => {
  const n = await Y.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await ee(n);
}, $o = async (e) => {
  const t = await Y.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await ee(t);
}, Om = async (e, t, n) => {
  const r = await Y.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await ee(r);
}, Fm = {
  dev_mode: !1,
  "gallery.show_parent_image": !0,
  "gallery.show_parent_images": !1,
  "sidebar.show_filename": "filename",
  "sidebar.show_dimensions": !0,
  "sidebar.show_created_at": !1,
  "sidebar.show_model_name": !0,
  "sidebar.show_positive_prompt": !0,
  "sidebar.show_negative_prompt": !1,
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
  "search.show_all_keywords": !0
}, fd = async () => {
  let e;
  try {
    const t = await Y.fetchApi("/meld/settings");
    e = await ee(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), Fm;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, $m = async (e, t) => {
  const n = await Y.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await ee(n);
}, Wm = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  viewScope: "default",
  viewerImageId: null,
  viewerMode: "gallery",
  viewerInitialMaskMode: !1,
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
    "search.show_all_keywords": !0
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
function Um(e, t) {
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
        new Map(o.map((c) => [c.id, c])).values()
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
        const c = new Set(e.selectedIds);
        return c.add(t.payload), {
          ...e,
          selectedIds: c,
          lastSelectedId: t.payload
        };
      }
      const l = e.images.findIndex(
        (c) => c.id === e.lastSelectedId
      ), i = e.images.findIndex(
        (c) => c.id === t.payload
      );
      if (l === -1 || i === -1) return e;
      const [a, o] = [
        Math.min(l, i),
        Math.max(l, i)
      ], u = new Set(e.selectedIds);
      for (let c = a; c <= o; c++)
        u.add(e.images[c].id);
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
      const l = t.payload, i = typeof l == "number" ? l : l.id, a = typeof l == "number" ? "gallery" : l.mode;
      let o = !1;
      if (typeof l != "number" && l.initialMaskMode && (typeof l.initialMaskMode == "string" ? o = l.initialMaskMode : o = "run"), o)
        return {
          ...e,
          activeModal: {
            type: "mask_editor",
            imageId: i,
            mode: o
          }
        };
      const u = e.viewerMode === "lineage" && a === "lineage" && e.lineageImages.some((c) => c.id === i);
      return {
        ...e,
        viewerImageId: i,
        viewerMode: a,
        viewerInitialMaskMode: o,
        lineageImages: u ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        viewerInitialMaskMode: !1,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const i = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), o = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (m) => m.exists !== !1 && (e.settings["gallery.show_parent_images"] || !m.has_children || a)
      );
      if (e.viewerImageId === null || o.length === 0)
        return e;
      const u = o.findIndex(
        (m) => m.id === e.viewerImageId
      );
      if (u === -1 || u === o.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || u === o.length - 1 && !i)
        return e;
      const c = (u + 1) % o.length;
      return {
        ...e,
        viewerImageId: o[c].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const i = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), o = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (m) => m.exists !== !1 && (e.settings["gallery.show_parent_images"] || !m.has_children || a)
      );
      if (e.viewerImageId === null || o.length === 0)
        return e;
      const u = o.findIndex(
        (m) => m.id === e.viewerImageId
      );
      if (u === -1 || u === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || u === 0 && !i)
        return e;
      const c = (u - 1 + o.length) % o.length;
      return {
        ...e,
        viewerImageId: o[c].id
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
const pd = g.createContext(void 0), Vm = ({
  children: e
}) => {
  const [t, n] = g.useReducer(Um, Wm), r = g.useRef(t.images.length), l = g.useRef(0);
  g.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const i = g.useCallback(
    async (y, v, k) => {
      const j = t.settings["gallery.max_load_count"], d = 200;
      let f = y;
      for (; f < Math.min(v, j) && k === l.current; )
        try {
          const p = Math.min(d, j - f);
          Q.log("Background fetch: starting chunk", {
            offset: f,
            limit: p
          });
          const h = await dl(
            f,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (k !== l.current || (n({ type: "APPEND_IMAGES", payload: h }), f += h.images.length, h.images.length === 0 || f >= h.total))
            break;
          await new Promise((_) => setTimeout(_, 300));
        } catch (p) {
          Q.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = g.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), v = ++l.current;
    try {
      const k = t.searchQuery.trim() !== "", j = t.settings["gallery.initial_load_count"];
      Q.log("refreshImages: starting initial fetch", {
        isSearch: k,
        fetchLimit: j,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const d = await dl(
        0,
        j,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), f = performance.now() - y;
      Q.log("refreshImages: initial fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: d }), d.total > j && i(j, d.total, v);
    } catch (k) {
      Q.error("refreshImages: fetch failed", k), n({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    i
  ]), o = g.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now();
    try {
      const v = r.current, k = t.searchQuery.trim() !== "", j = t.pagination.limit;
      Q.log("loadMoreImages: starting fetch", {
        nextOffset: v,
        fetchLimit: j,
        isSearch: k
      });
      const d = await dl(
        v,
        j,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), f = performance.now() - y;
      Q.log("loadMoreImages: fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: d });
    } catch (v) {
      Q.error("loadMoreImages: fetch failed", v), n({
        type: "SET_ERROR",
        payload: v instanceof Error ? v.message : String(v)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.searchQuery,
    t.viewScope
  ]), u = g.useCallback(async () => {
    try {
      const y = await zm();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      Q.error("Failed to load favorites", y);
    }
  }, []), c = g.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), k = t.images.filter(
      (j) => t.selectedIds.has(j.id)
    ).some(
      (j) => j.parent_id || j.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: y,
        hasLineage: k,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), m = g.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const k = (await Sa(y)).restored_ids || y;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: k }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (v) {
      n({
        type: "SET_ERROR",
        payload: v instanceof Error ? v.message : String(v)
      });
    }
  }, [t.selectedIds, t.viewScope]), x = g.useCallback(
    async (y, v) => {
      try {
        await $m(y, v), n({ type: "SET_SETTINGS", payload: { [y]: v } });
      } catch (k) {
        n({
          type: "SET_ERROR",
          payload: k instanceof Error ? k.message : String(k)
        });
      }
    },
    []
  ), w = g.useCallback(
    async (y) => {
      const v = t.images.find((k) => k.id === y);
      if (v && !v.is_minimal)
        return v;
      try {
        Q.log("fetchFullImageDetails: fetching full data", { id: y });
        const k = await cd(y);
        return n({ type: "UPDATE_IMAGE", payload: k }), k;
      } catch (k) {
        throw Q.error("Failed to fetch image details", k), k;
      }
    },
    [t.images]
  );
  return g.useEffect(() => {
    (async () => {
      try {
        const v = await fd();
        n({ type: "SET_SETTINGS", payload: v });
      } catch (v) {
        Q.error("Failed to load settings", v);
      }
    })();
  }, []), g.useEffect(() => {
    u();
  }, [u]), g.useEffect(() => {
    const y = () => {
      a();
    }, v = (j) => {
      const d = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: d }
      });
    }, k = (j) => {
      const d = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: d.new_count || 0,
          updatedCount: d.updated_count || 0,
          totalCount: d.total_count || 0,
          progress: {
            current: d.total_count || t.scanStatus.progress.total,
            total: d.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), a();
    };
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", v), window.addEventListener("meld-scan-finished", k), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", v), window.removeEventListener("meld-scan-finished", k);
    };
  }, [a, t.scanStatus.progress.total]), g.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ s.jsx(
    pd.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: c,
        restoreSelected: m,
        updateSetting: x,
        fetchFullImageDetails: w
      },
      children: e
    }
  );
}, ke = () => {
  const e = g.useContext(pd);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Ve = (e) => {
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
}, ja = async () => {
  const e = await Y.fetchApi("/meld/tags");
  return ee(e);
}, Qm = async (e) => {
  const t = await Y.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return ee(t);
}, Bm = async (e) => {
  const t = await Y.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await ee(t);
}, Hm = async (e, t) => {
  const n = await Y.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await ee(n);
}, Gm = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await Y.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Km = async (e, t, n = !1, r) => {
  const l = await Y.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await ee(l);
  } catch (i) {
    return console.error("Failed to fetch folders", i), { folders: [], images: [], image_count: 0 };
  }
}, Ym = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await Y.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await ee(l);
  } catch (i) {
    return console.error("Failed to fetch folder metadata", i), {};
  }
}, Xm = async (e, t, n) => {
  const r = await Y.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await ee(r)).count;
  } catch {
    return 0;
  }
}, qm = async (e) => {
  const t = await Y.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await ee(t);
}, Jm = async () => {
  const e = await Y.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await ee(e);
}, md = () => {
  const { dispatch: e } = ke(), [t, n] = g.useState(() => {
    const S = localStorage.getItem("meld-import-config"), $ = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (S)
      try {
        const M = JSON.parse(S);
        return { ...$, ...M, tags: [] };
      } catch {
        return $;
      }
    return $;
  });
  g.useEffect(() => {
    const { tags: S, ...$ } = t;
    localStorage.setItem("meld-import-config", JSON.stringify($));
  }, [t]);
  const [r, l] = g.useState([]), [i, a] = g.useState([]), [o, u] = g.useState(0), [c, m] = g.useState(!1), [x, w] = g.useState([]), [y, v] = g.useState(""), [k, j] = g.useState(!1), [d, f] = g.useState(null), p = g.useRef(!1), h = (S) => {
    S.target === S.currentTarget && (p.current = !0);
  }, _ = (S) => {
    S.target === S.currentTarget && p.current && e({ type: "CLOSE_MODAL" }), p.current = !1;
  };
  g.useEffect(() => {
    (async () => {
      try {
        const $ = await Sm();
        n((M) => M.custom_path ? M : { ...M, custom_path: $ });
      } catch ($) {
        Q.error("Failed to fetch home directory:", $);
      }
    })();
  }, []), g.useEffect(() => {
    const S = new AbortController();
    return (async () => {
      const M = t.type === "custom" ? t.custom_path : t.subfolder;
      if (Q.log(
        `loadFolders started. Path: "${M}", Type: "${t.type}"`
      ), t.type === "custom" && !M) {
        Q.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      m(!0);
      const U = M, b = t.type;
      try {
        Q.log("Step 1: Fast load starting...");
        const z = await Km(
          t.type,
          M,
          !0,
          S.signal
        );
        if (S.signal.aborted) {
          Q.log("Step 1: Aborted.");
          return;
        }
        Q.log(
          `Step 1 complete. Found ${z.folders.length} folders, ${z.images.length} images.`
        ), l(z.folders), a(z.images), u(null);
        const T = z.folders.map((I) => I.name);
        T.length > 0 && (Q.log(
          `Step 2: Metadata fetch starting for ${T.length} folders...`
        ), Ym(
          b,
          U,
          T,
          S.signal
        ).then((I) => {
          if (S.signal.aborted) {
            Q.log("Step 2: Aborted.");
            return;
          }
          Q.log("Step 2: Metadata fetch complete."), l(
            (H) => H.map((ie) => {
              const W = I[ie.name];
              return W ? { ...ie, count: W.count, preview: W.preview } : ie;
            })
          );
        }).catch((I) => {
          I.name !== "AbortError" && Q.error("Step 2: Metadata fetch failed:", I);
        })), Q.log("Step 3: Path image count starting..."), Xm(b, U, S.signal).then((I) => {
          if (S.signal.aborted) {
            Q.log("Step 3: Aborted.");
            return;
          }
          Q.log(`Step 3: Path image count complete: ${I}`), u(I);
        }).catch((I) => {
          I.name !== "AbortError" && Q.error("Step 3: Path image count failed:", I);
        });
      } catch (z) {
        if (z.name === "AbortError") {
          Q.log("Request aborted.");
          return;
        }
        Q.error("Failed to load folders:", z), l([]), a([]), u(0);
      } finally {
        S.signal.aborted || m(!1);
      }
    })(), () => {
      S.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const C = g.useCallback(async () => {
    j(!0);
    try {
      const S = await ja();
      w(S);
    } catch (S) {
      Q.error("Failed to fetch tags:", S);
    } finally {
      j(!1);
    }
  }, []);
  g.useEffect(() => {
    C();
  }, [C]), g.useEffect(() => {
    const S = ($) => {
      $.key === "Escape" && ($.preventDefault(), $.stopImmediatePropagation(), d ? f(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", S, { capture: !0 }), () => window.removeEventListener("keydown", S, { capture: !0 });
  }, [d, e]);
  const N = g.useMemo(() => x.filter(
    (S) => S.name.toLowerCase().includes(y.toLowerCase()) && !t.tags.includes(S.name)
  ), [x, y, t.tags]), L = (S) => {
    const $ = S.trim();
    $ && !t.tags.includes($) && (n({ ...t, tags: [...t.tags, $] }), v(""));
  }, F = (S) => {
    n({ ...t, tags: t.tags.filter(($) => $ !== S) });
  }, E = (S) => {
    S.key === "Enter" && y.trim() && (S.preventDefault(), L(y.trim()));
  }, P = async () => {
    try {
      await qm(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (S) {
      Q.error("Failed to start scan:", S), alert(`Failed to start scan: ${S}`);
    }
  }, B = (S) => {
    if (t.type === "custom") {
      const $ = t.custom_path.includes("\\") ? "\\" : "/", M = t.custom_path.endsWith($) ? `${t.custom_path}${S}` : `${t.custom_path}${$}${S}`;
      n({ ...t, custom_path: M });
    } else {
      const $ = t.subfolder ? `${t.subfolder}/${S}` : S;
      n({ ...t, subfolder: $ });
    }
  }, A = () => {
    if (t.type === "custom") {
      const S = t.custom_path.includes("\\") ? "\\" : "/", $ = t.custom_path.split(S);
      if ($.length > 1) {
        $.pop();
        let M = $.join(S);
        M === "" && S === "/" && (M = "/"), n({ ...t, custom_path: M });
      }
    } else {
      const S = t.subfolder.split("/");
      S.pop(), n({ ...t, subfolder: S.join("/") });
    }
  };
  return Ce.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: h,
        onMouseUp: _,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (S) => S.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(we, { size: 20 })
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
                          onChange: (S) => n({
                            ...t,
                            type: S.target.value,
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
                          onChange: (S) => n({ ...t, recursive: S.target.checked })
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
                          onChange: (S) => n({
                            ...t,
                            link_strategy: S.target.value,
                            auto_link_parent: S.target.value !== "none"
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((S) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        S,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => F(S),
                            children: /* @__PURE__ */ s.jsx(we, { size: 12 })
                          }
                        )
                      ] }, S)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx($n, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: y,
                            onChange: (S) => v(S.target.value),
                            onKeyDown: E
                          }
                        ),
                        y.trim() && !t.tags.includes(y.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => L(y),
                            children: /* @__PURE__ */ s.jsx(ka, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: k ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : N.length === 0 ? y && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        y
                      ] }) : N.map((S) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => L(S.name),
                          children: S.name
                        },
                        S.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: P,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(es, { size: 16 }),
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
                          onClick: A,
                          children: [
                            /* @__PURE__ */ s.jsx(sd, { size: 16 }),
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
                          onChange: (S) => n({ ...t, custom_path: S.target.value }),
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: c ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && i.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      r.map((S) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => B(S.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: S.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Ve(S.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(dm, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: S.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${S.count === null ? "meld-folder-count--loading" : ""}`,
                                children: S.count !== null ? `${S.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(id, { size: 14 })
                          ]
                        },
                        S.name
                      )),
                      i.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: i.map((S) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(S),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: Ve(S),
                              alt: S.filename,
                              title: S.filename
                            }
                          )
                        },
                        S.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          d && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (S) => {
                S.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (S) => S.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => f(null),
                          children: /* @__PURE__ */ s.jsx(we, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: Ve(d),
                          alt: d.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: d.filename })
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
}, Zm = () => {
  const { dispatch: e } = ke();
  return { injectMaskToGraph: g.useCallback(
    (n, r) => {
      var w, y;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r);
      const l = window.app;
      if (!(l != null && l.graph))
        return console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      let i = n.filename;
      n.subfolder && (i = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (i = `${i} [${n.type}]`);
      const a = l.graph._nodes.filter(
        (v) => v.type === "MeldImageLoader"
      );
      if (a.length > 0) {
        const v = a[0], k = v.widgets.find(
          (j) => j.name === "image"
        );
        k && (k.value = i, typeof k.callback == "function" && k.callback(i), console.log(
          "[Meld-Debug] injectMaskToGraph: Updated MeldImageLoader",
          v.id,
          "with",
          i
        ));
      }
      const o = l.graph._nodes.filter(
        (v) => v.type === "LoadImageMask"
      );
      if (o.length === 0)
        return console.log(
          "[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"
        ), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const u = o[0], c = u.widgets.find(
        (v) => v.name === "image"
      ), m = `${r} [temp]`;
      console.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        u.id,
        "widget 'image' with",
        m
      ), c && (c.value = m, typeof c.callback == "function" && c.callback(m));
      const x = u.widgets.find(
        (v) => v.name === "channel"
      );
      return x && (x.value = "red", typeof x.callback == "function" && x.callback("red")), (y = (w = l.graph).afterChange) == null || y.call(w), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
}, hd = ({
  imageId: e,
  mode: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = ke(), i = r.images.find((A) => A.id === e), { injectMaskToGraph: a } = Zm(), [o, u] = g.useState(!1), [c, m] = g.useState({ x: 0, y: 0 }), [x, w] = g.useState({ x: 0, y: 0 }), [y, v] = g.useState(null), [k, j] = g.useState(!1), [d, f] = g.useState(!1), p = g.useRef(null), h = g.useRef(null), _ = g.useRef(null), C = g.useCallback(() => {
    const A = p.current;
    if (!A) return;
    const S = A.getContext("2d");
    if (S) {
      if (S.clearRect(0, 0, A.width, A.height), o) {
        S.strokeStyle = "white", S.lineWidth = 2, S.setLineDash([5, 5]);
        const $ = Math.min(c.x, x.x), M = Math.min(c.y, x.y), U = Math.abs(c.x - x.x), b = Math.abs(c.y - x.y);
        S.strokeRect($, M, U, b);
      } else if (y) {
        S.strokeStyle = "white", S.lineWidth = 2, S.setLineDash([]), S.strokeRect(y.x, y.y, y.w, y.h);
        const $ = getComputedStyle(document.documentElement), M = $.getPropertyValue("--comfy-input-bg-active") || $.getPropertyValue("--comfy-input-bg");
        M && (S.fillStyle = M, S.fillRect(y.x, y.y, y.w, y.h));
      }
    }
  }, [o, c, x, y]);
  g.useEffect(() => {
    const A = () => {
      h.current && p.current && (p.current.width = h.current.clientWidth, p.current.height = h.current.clientHeight, C());
    }, S = new ResizeObserver(A);
    return h.current && S.observe(h.current), A(), () => S.disconnect();
  }, [C]);
  const N = (A) => {
    var U;
    if (k) return;
    u(!0);
    const S = (U = h.current) == null ? void 0 : U.getBoundingClientRect();
    if (!S) return;
    const $ = A.clientX - S.left, M = A.clientY - S.top;
    m({ x: $, y: M }), w({ x: $, y: M }), v(null);
  }, L = (A) => {
    var U;
    if (!o) return;
    const S = (U = h.current) == null ? void 0 : U.getBoundingClientRect();
    if (!S) return;
    const $ = A.clientX - S.left, M = A.clientY - S.top;
    w({ x: $, y: M });
  }, F = () => {
    if (!o) return;
    u(!1);
    const A = Math.min(c.x, x.x), S = Math.min(c.y, x.y), $ = Math.abs(c.x - x.x), M = Math.abs(c.y - x.y);
    $ > 5 && M > 5 && (v({ x: A, y: S, w: $, h: M }), j(!0));
  }, E = async () => {
    if (!y || !_.current || !h.current) return null;
    f(!0);
    try {
      const A = _.current, S = A.naturalWidth, $ = A.naturalHeight, M = document.createElement("canvas");
      M.width = S, M.height = $;
      const U = M.getContext("2d");
      if (!U) return null;
      U.fillStyle = "black", U.fillRect(0, 0, M.width, M.height);
      const b = h.current.getBoundingClientRect(), z = A.getBoundingClientRect(), T = S / $, I = z.width / z.height;
      let H, ie, W = 0, J = 0;
      T > I ? (H = z.width, ie = z.width / T, J = (z.height - ie) / 2) : (ie = z.height, H = z.height * T, W = (z.width - H) / 2);
      const le = S / H, Ae = $ / ie, pn = y.x - (z.left - b.left) - W, yt = y.y - (z.top - b.top) - J, G = pn * le, Z = yt * Ae, R = y.w * le, re = y.h * Ae;
      U.fillStyle = "white", U.fillRect(G, Z, R, re);
      const K = await new Promise(
        (ce) => M.toBlob(ce, "image/png")
      );
      if (!K) return null;
      const Qe = `meld_mask_${Date.now()}.png`, It = new File([K], Qe, { type: "image/png" }), vt = new FormData();
      vt.append("image", It), vt.append("type", "temp"), vt.append("overwrite", "true");
      const ge = await Y.fetchApi("/upload/image", {
        method: "POST",
        body: vt
      });
      return ge.ok ? (await ge.json()).name : null;
    } catch (A) {
      return console.error("[Meld] Error uploading mask:", A), null;
    } finally {
      f(!1);
    }
  }, P = async () => {
    if (!i) return;
    const A = await E();
    A && a(i, A) && n();
  }, B = async () => {
    if (!i) return;
    const A = await E();
    A && l({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [i],
        maskFilename: A
      }
    });
  };
  return i ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, role: "presentation", children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-modal-content meld-mask-editor-modal",
      onClick: (A) => A.stopPropagation(),
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
          /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(we, { size: 20 }) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: h,
              className: "meld-mask-editor-canvas-container",
              onMouseDown: N,
              onMouseMove: L,
              onMouseUp: F,
              role: "presentation",
              children: [
                /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    ref: _,
                    src: Ve(i),
                    alt: "To be masked",
                    className: "meld-mask-editor-image"
                  }
                ),
                /* @__PURE__ */ s.jsx("canvas", { ref: p, className: "meld-mask-editor-canvas" }),
                k && y && /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-mask-toolbar",
                    style: {
                      left: y.x + y.w,
                      top: y.y + y.h,
                      position: "absolute",
                      zIndex: 1e3
                    },
                    onClick: (A) => A.stopPropagation(),
                    onMouseDown: (A) => A.stopPropagation(),
                    role: "presentation",
                    children: [
                      t === "apply" ? /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                          onClick: P,
                          disabled: d,
                          type: "button",
                          children: [
                            d ? /* @__PURE__ */ s.jsx(Oo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(_a, { size: 16 }),
                            /* @__PURE__ */ s.jsx("span", { children: "Send" })
                          ]
                        }
                      ) : /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                          onClick: B,
                          disabled: d,
                          type: "button",
                          children: [
                            d ? /* @__PURE__ */ s.jsx(Oo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(es, { size: 16 }),
                            /* @__PURE__ */ s.jsx("span", { children: "Queue" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                          onClick: () => {
                            j(!1), v(null);
                          },
                          disabled: d,
                          type: "button",
                          children: /* @__PURE__ */ s.jsx(we, { size: 16 })
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "meld-mask-editor-hint", children: "Drag to select mask area" })
        ] })
      ]
    }
  ) }) : null;
}, eh = () => {
  const { state: e, dispatch: t, updateSetting: n } = ke(), [r, l] = g.useState("Gallery"), [i, a] = g.useState({
    ...e.settings
  }), [o, u] = g.useState(
    {}
  ), [c, m] = g.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [x, w] = g.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [y, v] = g.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [k, j] = g.useState(e.settings["viewer.thumbnail_window_size"].toString()), [d, f] = g.useState(e.settings["gallery.trash_retention_days"].toString()), [p, h] = g.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [_, C] = g.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [N, L] = g.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [F, E] = g.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    P,
    B
  ] = g.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    A,
    S
  ] = g.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [$, M] = g.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: i,
    setLocalSettings: a,
    shortcutErrors: o,
    setShortcutErrors: u,
    handleClose: async () => {
      const W = Object.keys(i).filter(
        (J) => i[J] !== e.settings[J] && !o[J]
      );
      if (W.length > 0)
        for (const J of W)
          await n(J, i[J]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (W, J) => {
      a((le) => ({
        ...le,
        [W]: !J
      }));
    },
    handleNumberChange: (W, J, le, Ae) => {
      W === "gallery.initial_load_count" ? m(J) : W === "gallery.max_load_count" ? w(J) : W === "gallery.lineage_max_depth" ? v(J) : W === "viewer.thumbnail_window_size" ? j(J) : W === "gallery.trash_retention_days" ? f(J) : W === "gallery.auto_link_phash_threshold" ? h(J) : W === "gallery.suggest_phash_threshold" ? C(J) : W === "viewer.details.max_positive_prompt_lines" ? L(J) : W === "viewer.details.max_negative_prompt_lines" ? E(J) : W === "fullscreen.details.max_positive_prompt_lines" ? B(J) : W === "fullscreen.details.max_negative_prompt_lines" ? S(J) : W === "sidebar.thumbnail_size" && M(J);
      const pn = Number.parseInt(J, 10);
      if (!Number.isNaN(pn)) {
        let yt = pn;
        le !== void 0 && yt < le && (yt = le), Ae !== void 0 && yt > Ae && (yt = Ae), a((G) => ({
          ...G,
          [W]: yt
        }));
      }
    },
    handleNumberBlur: (W) => {
      W.key === "gallery.initial_load_count" ? m(
        i["gallery.initial_load_count"].toString()
      ) : W.key === "gallery.max_load_count" ? w(i["gallery.max_load_count"].toString()) : W.key === "gallery.lineage_max_depth" ? v(
        i["gallery.lineage_max_depth"].toString()
      ) : W.key === "viewer.thumbnail_window_size" ? j(
        i["viewer.thumbnail_window_size"].toString()
      ) : W.key === "gallery.trash_retention_days" ? f(
        i["gallery.trash_retention_days"].toString()
      ) : W.key === "gallery.auto_link_phash_threshold" ? h(
        i["gallery.auto_link_phash_threshold"].toString()
      ) : W.key === "gallery.suggest_phash_threshold" ? C(
        i["gallery.suggest_phash_threshold"].toString()
      ) : W.key === "viewer.details.max_positive_prompt_lines" ? L(
        i["viewer.details.max_positive_prompt_lines"].toString()
      ) : W.key === "viewer.details.max_negative_prompt_lines" ? E(
        i["viewer.details.max_negative_prompt_lines"].toString()
      ) : W.key === "fullscreen.details.max_positive_prompt_lines" ? B(
        i["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : W.key === "fullscreen.details.max_negative_prompt_lines" ? S(
        i["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : W.key === "sidebar.thumbnail_size" && M(i["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      a((W) => ({
        ...W,
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
    handleViewTrash: () => {
      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
    },
    validateShortcut: (W) => W.trim() ? W.trim().split(/\s+/).every((le) => !!(le === "next" || le === "prev" || le === "delete" || le.startsWith("tag:") && le.length > 4 || le.startsWith("-tag:") && le.length > 5 || le.startsWith("tag-toggle:") && le.length > 11)) : !0,
    // Input states
    initialLoadCountInput: c,
    maxLoadCountInput: x,
    lineageMaxDepthInput: y,
    thumbnailWindowSizeInput: k,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: _,
    maxPositivePromptLinesInput: N,
    maxNegativePromptLinesInput: F,
    fullscreenMaxPositivePromptLinesInput: P,
    fullscreenMaxNegativePromptLinesInput: A,
    thumbnailSizeInput: $
  };
}, V = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), th = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  maxPositivePromptLinesInput: i,
  maxNegativePromptLinesInput: a
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      V,
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
      V,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.delete_mode": o.target.value
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
      V,
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
      V,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.small_image_mode": o.target.value
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
      V,
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
      V,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.details.show_filename": o.target.value
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
      V,
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
      V,
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
      V,
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
      V,
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
      V,
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
      V,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt in fullscreen.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (o) => r(
              "fullscreen.details.max_positive_prompt_lines",
              o.target.value,
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
      V,
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
      V,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt in fullscreen.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 100,
            onChange: (o) => r(
              "fullscreen.details.max_negative_prompt_lines",
              o.target.value,
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
      V,
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
] }), nh = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailSizeInput: i,
  initialLoadCountInput: a,
  maxLoadCountInput: o
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ s.jsx(
      V,
      {
        label: "Thumbnail Size",
        description: "Size of the image thumbnails in the sidebar (50-500px).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 50,
            max: 500,
            onChange: (u) => r(
              "sidebar.thumbnail_size",
              u.target.value,
              50,
              500
            ),
            onBlur: () => l({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      V,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (u) => t((c) => ({
              ...c,
              "sidebar.show_filename": u.target.value
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
      V,
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
      V,
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
      V,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources).",
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
      V,
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
      V,
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
      V,
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
      V,
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
    /* @__PURE__ */ s.jsx(V, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      V,
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
      V,
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
      V,
      {
        label: "Initial Load Count",
        description: "Number of images to load and display immediately (10-1000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 10,
            max: 1e3,
            onChange: (u) => r(
              "gallery.initial_load_count",
              u.target.value,
              10,
              1e3
            ),
            onBlur: () => l({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      V,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 10,
            max: 1e6,
            onChange: (u) => r(
              "gallery.max_load_count",
              u.target.value,
              10,
              1e6
            ),
            onBlur: () => l({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] })
] }), rh = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: l,
  handleToggle: i,
  handleResetShortcuts: a
}) => {
  const o = [
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
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "delete" }),
            " - Delete image immediately (No confirm)"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
      o.map((u, c) => /* @__PURE__ */ s.jsx(
        V,
        {
          label: `Shortcut ${c === 9 ? 0 : c + 1} (Key: ${c === 9 ? 0 : c + 1})`,
          description: `Command to execute when pressing '${c === 9 ? 0 : c + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[u] ? "meld-text-input--error" : ""}`,
              value: e[u] || "",
              onChange: (m) => {
                t((x) => ({
                  ...x,
                  [u]: m.target.value
                }));
              },
              onBlur: () => {
                const m = l(
                  e[u] || ""
                );
                r((x) => ({
                  ...x,
                  [u]: !m
                }));
              }
            }
          )
        },
        u
      )),
      /* @__PURE__ */ s.jsx(
        V,
        {
          label: "Show Cheat Sheet",
          description: "Display shortcut key guide in View/Full Screen mode.",
          children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "checkbox",
                checked: !!e["viewer.shortcut.show_cheat_sheet"],
                onChange: () => i(
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
      V,
      {
        label: "Reset Shortcuts",
        description: "Restore all shortcuts to their default values.",
        children: /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: a,
            children: "Reset to Defaults"
          }
        )
      }
    ) })
  ] });
}, lh = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: i,
  lineageMaxDepthInput: a,
  trashRetentionDaysInput: o,
  autoLinkPhashThresholdInput: u,
  suggestPhashThresholdInput: c
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ s.jsx(
      V,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (m) => l((x) => ({
              ...x,
              "gallery.matching_strategy": m.target.value
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
      V,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: u,
            min: 0,
            max: 100,
            onChange: (m) => t(
              "gallery.auto_link_phash_threshold",
              m.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      V,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 0,
            max: 100,
            onChange: (m) => t(
              "gallery.suggest_phash_threshold",
              m.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      V,
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
      V,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 10,
            onChange: (m) => t(
              "gallery.lineage_max_depth",
              m.target.value,
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
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ s.jsx(
      V,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 0,
            max: 365,
            onChange: (m) => t(
              "gallery.trash_retention_days",
              m.target.value,
              0,
              365
            ),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      V,
      {
        label: "Trash Management",
        description: "View and manage items currently in the trash bin.",
        children: /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: i,
            children: "View Trash"
          }
        )
      }
    )
  ] })
] }), sh = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: i,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      V,
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
      V,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.small_image_mode": u.target.value
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
      V,
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
      V,
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
      V,
      {
        label: "Thumbnail Window Size",
        description: "Number of thumbnails to keep in the viewer (1-10000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 1e4,
            onChange: (u) => r(
              "viewer.thumbnail_window_size",
              u.target.value,
              1,
              1e4
            ),
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      V,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.delete_mode": u.target.value
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
      V,
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
      V,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.details.show_filename": u.target.value
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
      V,
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
      V,
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
      V,
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
      V,
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
      V,
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
      V,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 100,
            onChange: (u) => r(
              "viewer.details.max_positive_prompt_lines",
              u.target.value,
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
      V,
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
      V,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 100,
            onChange: (u) => r(
              "viewer.details.max_negative_prompt_lines",
              u.target.value,
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
      V,
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
] }), gd = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: l,
    setShortcutErrors: i,
    handleClose: a,
    handleToggle: o,
    handleNumberChange: u,
    handleNumberBlur: c,
    handleResetShortcuts: m,
    handleViewTrash: x,
    validateShortcut: w,
    // Input states
    initialLoadCountInput: y,
    maxLoadCountInput: v,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: j,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: h,
    maxNegativePromptLinesInput: _,
    fullscreenMaxPositivePromptLinesInput: C,
    fullscreenMaxNegativePromptLinesInput: N,
    thumbnailSizeInput: L
  } = eh(), F = g.useRef(!1), E = (S) => {
    S.target === S.currentTarget && (F.current = !0);
  }, P = (S) => {
    S.target === S.currentTarget && F.current && a(), F.current = !1;
  }, B = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], A = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          lh,
          {
            localSettings: n,
            handleNumberChange: u,
            handleNumberBlur: c,
            handleToggle: o,
            setLocalSettings: r,
            handleViewTrash: x,
            lineageMaxDepthInput: k,
            trashRetentionDaysInput: d,
            autoLinkPhashThresholdInput: f,
            suggestPhashThresholdInput: p
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          nh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailSizeInput: L,
            initialLoadCountInput: y,
            maxLoadCountInput: v
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          sh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: j,
            maxPositivePromptLinesInput: h,
            maxNegativePromptLinesInput: _
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          th,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: C,
            maxNegativePromptLinesInput: N
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          rh,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: i,
            validateShortcut: w,
            handleToggle: o,
            handleResetShortcuts: m
          }
        );
      default:
        return null;
    }
  };
  return Ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: E,
        onMouseUp: P,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (S) => S.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: a,
                    children: /* @__PURE__ */ s.jsx(we, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: B.map((S) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === S.id ? "active" : ""}`,
                    onClick: () => t(S.id),
                    children: S.label
                  },
                  S.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: A() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, ot = "none", yd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = ke(), [i, a] = g.useState([]), [o, u] = g.useState(t), [c, m] = g.useState(""), [x, w] = g.useState(!0), [y, v] = g.useState(!1), k = g.useRef(null), j = e.length > 1, d = g.useRef(!1), f = (E) => {
    E.target === E.currentTarget && (d.current = !0);
  }, p = (E) => {
    E.target === E.currentTarget && d.current && n(), d.current = !1;
  }, h = g.useCallback(async () => {
    w(!0);
    try {
      const E = await ja();
      a(E);
    } catch (E) {
      console.error("Failed to fetch tags:", E);
    } finally {
      w(!1);
    }
  }, []);
  g.useEffect(() => {
    h();
  }, [h]), g.useEffect(() => {
    k.current && k.current.focus();
    const E = (P) => {
      P.key === "Escape" && (P.preventDefault(), P.stopPropagation(), P.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", E, { capture: !0 }), () => window.removeEventListener("keydown", E, {
      capture: !0
    });
  }, [n]);
  const _ = g.useMemo(() => i.filter(
    (E) => E.name.toLowerCase().includes(c.toLowerCase()) && !o.includes(E.name)
  ), [i, c, o]), C = (E) => {
    const P = E.trim();
    if (P.toLowerCase() === ot) {
      alert(
        `Tag name '${ot}' is reserved for search and cannot be used.`
      );
      return;
    }
    P && !o.includes(P) && (u([...o, P]), m(""));
  }, N = (E) => {
    u(o.filter((P) => P !== E));
  }, L = async () => {
    v(!0);
    try {
      if (j) {
        const E = o.filter((B) => !t.includes(B)), P = t.filter(
          (B) => !o.includes(B)
        );
        await Ci(e, E, P);
      } else
        await Im(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (E) {
      console.error("Failed to update tags:", E), alert("Failed to update tags.");
    } finally {
      v(!1);
    }
  }, F = (E) => {
    E.key === "Enter" && c.trim() ? (E.preventDefault(), E.stopPropagation(), C(c.trim())) : E.key === "Escape" && (E.preventDefault(), E.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return Ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: p,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (E) => E.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(fn, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(we, { size: 20 }) })
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((E) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                E,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => N(E),
                    children: /* @__PURE__ */ s.jsx(we, { size: 12 })
                  }
                )
              ] }, E)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx($n, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: k,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: c,
                    onChange: (E) => m(E.target.value),
                    onKeyDown: F
                  }
                ),
                c.trim() && !o.includes(c.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => C(c),
                    children: [
                      /* @__PURE__ */ s.jsx(ka, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : _.length === 0 ? c ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : _.map((E) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => C(E.name),
                  children: E.name
                },
                E.id
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
                onClick: L,
                disabled: y,
                children: y ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, ih = async () => {
  const e = await Y.fetchApi("/meld/workflows");
  return ee(e);
}, ah = async (e) => {
  const t = await Y.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return ee(t);
}, vd = ({
  images: e,
  onExecute: t,
  isMaskMode: n
}) => {
  var p;
  const { dispatch: r } = ke(), [l, i] = g.useState([]), [a, o] = g.useState(!0), [u, c] = g.useState(null), [m, x] = g.useState(!1), w = g.useMemo(() => l.map((h) => {
    let _ = h.valid, C = h.reason;
    return n && (h.mask_count === 0 ? (_ = !1, C = "No 'Load Image (as Mask)' node found.") : h.mask_count > 1 && (_ = !1, C = `Multiple 'Load Image (as Mask)' nodes found (${h.mask_count}).`)), { ...h, valid: _, reason: C };
  }).sort((h, _) => h.valid !== _.valid ? h.valid ? -1 : 1 : h.name.localeCompare(_.name)), [l, n]), y = g.useCallback(async () => {
    try {
      o(!0);
      const h = await ih();
      i(h), c(null);
    } catch (h) {
      c(h instanceof Error ? h.message : String(h));
    } finally {
      o(!1);
    }
  }, []);
  g.useEffect(() => {
    y();
  }, [y]);
  const v = g.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]), k = g.useRef(!1), j = g.useCallback((h) => {
    h.target === h.currentTarget && (k.current = !0);
  }, []), d = g.useCallback(
    (h) => {
      h.target === h.currentTarget && k.current && v(), k.current = !1;
    },
    [v]
  );
  g.useEffect(() => {
    const h = (_) => {
      _.key === "Escape" && v();
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [v]);
  const f = async (h) => {
    if (!m)
      try {
        x(!0), await t(h), v();
      } catch (_) {
        c(_ instanceof Error ? _.message : String(_)), x(!1);
      }
  };
  return Ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: j,
        onMouseUp: d,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--medium",
            onClick: (h) => h.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(ad, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: v,
                    children: /* @__PURE__ */ s.jsx(we, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: a ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : u ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(nd, { size: 20 }),
                /* @__PURE__ */ s.jsx("span", { children: u })
              ] }) : l.length === 0 ? /* @__PURE__ */ s.jsx(
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
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (p = e[0]) == null ? void 0 : p.filename }),
                      ". Workflows must have exactly one",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: "Meld Image Loader" }),
                      " node",
                      n && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                        " ",
                        "and one ",
                        /* @__PURE__ */ s.jsx("strong", { children: "Load Image (as Mask)" }),
                        " node"
                      ] }),
                      "."
                    ]
                  }
                ),
                w.map((h) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-workflow-item ${h.valid ? "" : "meld-workflow-item--invalid"}`,
                    onClick: () => h.valid && !m && f(h.name),
                    title: h.reason || "Click to run",
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: h.name }),
                        !h.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: h.reason })
                      ] }),
                      h.valid && /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary meld-btn-small",
                          disabled: m,
                          onClick: (_) => {
                            _.stopPropagation(), f(h.name);
                          },
                          children: [
                            /* @__PURE__ */ s.jsx(es, { size: 14 }),
                            m ? "Queuing..." : "Queue"
                          ]
                        }
                      )
                    ]
                  },
                  h.name
                ))
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: v,
                  disabled: m,
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
}, wd = () => ({ executeWorkflow: g.useCallback(
  async (t, n, r) => {
    var x, w, y, v, k, j;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r
    });
    const l = await ah(t);
    console.log("[Meld] Workflow fetched:", t);
    let i = null, a = null, o = !1;
    if (l.nodes && Array.isArray(l.nodes)) {
      o = !0;
      const d = l.nodes.find(
        (p) => p.type === "MeldImageLoader"
      );
      d && (i = String(d.id));
      const f = l.nodes.find(
        (p) => p.type === "LoadImageMask"
      );
      f && (a = String(f.id));
    } else
      for (const d in l) {
        const f = l[d];
        f.class_type === "MeldImageLoader" ? i = d : f.class_type === "LoadImageMask" && (a = d);
      }
    if (console.log("[Meld] Node IDs found:", {
      loaderNodeId: i,
      maskNodeId: a,
      isUIFormat: o
    }), !i)
      throw new Error(
        "Meld Image Loader node not found in the selected workflow."
      );
    if (r && !a)
      throw console.warn(
        "[Meld] Mask filename provided but no mask node found in workflow JSON"
      ), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let u = n.filename;
    if (n.subfolder && (u = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (u = `${u} [${n.type}]`), o) {
      const d = window.app, f = t.replace(/\.json$/i, "");
      let p = !1;
      const h = document.querySelectorAll(".workflow-tab");
      for (const N of Array.from(h)) {
        const L = N.querySelector(".workflow-label"), F = ((x = L == null ? void 0 : L.textContent) == null ? void 0 : x.trim()) || ((w = N.textContent) == null ? void 0 : w.trim()) || "";
        if (F === f || F === t || F.startsWith(`${f} `) || F.startsWith(`${f}•`)) {
          N.click(), p = !0;
          break;
        }
      }
      p || await d.loadGraphData(l, !0, !0, t), await new Promise((N) => setTimeout(N, 200));
      const _ = d.graph._nodes;
      console.log("[Meld] Active graph nodes count:", _.length);
      const C = _.find(
        (N) => String(N.id) === i || N.type === "MeldImageLoader"
      );
      if (C) {
        const N = (y = C.widgets) == null ? void 0 : y.find((L) => L.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: C.id,
          imagePath: u
        }), N && (N.value = u);
      } else
        console.warn(
          "[Meld] MeldImageLoader not found in active graph after loading"
        );
      if (r) {
        const N = _.find(
          (L) => String(L.id) === a || L.type === "LoadImageMask"
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: N == null ? void 0 : N.id,
          maskFilename: r
        }), N) {
          const L = (v = N.widgets) == null ? void 0 : v.find(
            (E) => E.name === "image"
          );
          L && (L.value = `${r} [temp]`);
          const F = (k = N.widgets) == null ? void 0 : k.find(
            (E) => E.name === "channel"
          );
          F && (F.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      d.graph.setDirtyCanvas(!0, !0);
      try {
        await d.queuePrompt(0);
        return;
      } catch (N) {
        throw console.error("Failed to queue workflow:", N), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const c = JSON.parse(JSON.stringify(l));
    c[i].inputs.image = u, r && a && (c[a].inputs.image = `${r} [temp]`, c[a].inputs.channel = "red");
    const m = await Y.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: c,
        client_id: Y.clientId
      })
    });
    if (!m.ok) {
      const d = await m.json();
      throw new Error(((j = d.error) == null ? void 0 : j.message) || "Failed to queue workflow");
    }
    return await m.json();
  },
  []
) }), xd = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: i } = ke(), a = g.useRef(!0);
  g.useEffect(() => () => {
    a.current = !1;
  }, []);
  const o = g.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), u = g.useMemo(
    () => l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
      (d) => d.exists !== !1 && (l.settings["gallery.show_parent_images"] || !d.has_children || o)
    ),
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      o
    ]
  ), c = g.useRef(l.viewerImageId);
  g.useEffect(() => {
    c.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const m = g.useCallback(() => {
    i({ type: "CLOSE_MODAL" });
  }, [i]), x = g.useRef(!1), w = g.useCallback((d) => {
    d.target === d.currentTarget && (x.current = !0);
  }, []), y = g.useCallback(
    (d) => {
      d.target === d.currentTarget && x.current && m(), x.current = !1;
    },
    [m]
  ), v = g.useCallback(
    (d) => {
      if (!a.current) return;
      const f = c.current;
      if (f === null || !d.has(f))
        return;
      const p = u.findIndex(
        (_) => _.id === f
      );
      if (p === -1) return;
      let h = !1;
      for (let _ = p + 1; _ < u.length; _++)
        if (!d.has(u[_].id)) {
          i({
            type: "OPEN_VIEWER",
            payload: { id: u[_].id, mode: l.viewerMode }
          }), h = !0;
          break;
        }
      if (!h) {
        for (let _ = p - 1; _ >= 0; _--)
          if (!d.has(u[_].id)) {
            i({
              type: "OPEN_VIEWER",
              payload: { id: u[_].id, mode: l.viewerMode }
            }), h = !0;
            break;
          }
      }
      h || i({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, u, i]
  );
  g.useEffect(() => {
    const d = (f) => {
      f.key === "Escape" && m();
    };
    return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
  }, [m]);
  const k = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e), f = u.filter(
        (p) => d.has(p.id)
      );
      if (v(d), await ji(e, n), !a.current) return;
      !n && r && r(f), i({ type: "REMOVE_IMAGES", payload: e }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (d) {
      i({
        type: "SET_ERROR",
        payload: d instanceof Error ? d.message : String(d)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  }, j = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e);
      for (const p of e) {
        const h = await Ei(p);
        if (!a.current) return;
        for (const _ of h)
          d.add(_.id);
      }
      const f = u.filter(
        (p) => d.has(p.id)
      );
      if (v(d), await ji(Array.from(d), n), !a.current) return;
      !n && r && r(f), i({
        type: "REMOVE_IMAGES",
        payload: Array.from(d)
      }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (d) {
      i({
        type: "SET_ERROR",
        payload: d instanceof Error ? d.message : String(d)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  };
  return Ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: y,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (d) => d.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(Wn, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: m,
                    children: /* @__PURE__ */ s.jsx(we, { size: 20 })
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
                            rm,
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
                    onClick: m,
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
                      onClick: j,
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
}, _d = ({ message: e }) => {
  const { dispatch: t } = ke();
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => t({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (n) => n.stopPropagation(), children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ s.jsx(nd, { size: 20, color: "var(--meld-danger-color)" }),
            /* @__PURE__ */ s.jsx("h2", { children: "Error" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              className: "meld-modal-close",
              onClick: () => t({ type: "CLOSE_MODAL" }),
              type: "button",
              children: /* @__PURE__ */ s.jsx(we, { size: 20 })
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
            onClick: () => t({ type: "CLOSE_MODAL" }),
            type: "button",
            children: "OK"
          }
        ) })
      ] })
    }
  );
}, kd = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = ke(), [l, i] = g.useState([]), [a, o] = g.useState(!0), [u, c] = g.useState(!1), m = g.useRef(!1), x = (_) => {
    _.target === _.currentTarget && (m.current = !0);
  }, w = (_) => {
    _.target === _.currentTarget && m.current && n({ type: "CLOSE_MODAL" }), m.current = !1;
  }, y = t.images.find((_) => _.id === e), v = g.useCallback(async () => {
    o(!0);
    try {
      const _ = t.settings["gallery.suggest_phash_threshold"], C = await Mm(e, _);
      i(C);
    } catch (_) {
      console.error("Failed to load suggestions:", _);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  g.useEffect(() => {
    v();
  }, [v]);
  const k = async (_) => {
    if (_ == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!y || _ === y.parent_id) && !(y.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Fo(e, _), await cd(e), await r(), n({ type: "CLOSE_MODAL" });
      } catch (C) {
        console.error("Failed to link parent:", C);
      }
  }, j = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Fo(e, null), await r(), n({ type: "CLOSE_MODAL" });
      } catch (_) {
        console.error("Failed to remove source:", _), alert("Failed to remove source image.");
      }
  }, d = async (_) => {
    o(!0);
    try {
      const C = await Gm(_), { id: N } = await dd({
        filename: C.name,
        subfolder: C.subfolder || "",
        type: C.type || "input"
      });
      if (N === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await k(N);
    } catch (C) {
      console.error("Failed to upload/register image:", C);
    } finally {
      o(!1);
    }
  }, f = (_) => {
    _.preventDefault(), _.stopPropagation(), c(!1);
    const C = _.dataTransfer.files[0];
    C != null && C.type.startsWith("image/") && d(C);
  };
  if (!y) return null;
  const p = l.filter((_) => _.is_source_match), h = l.filter((_) => !_.is_source_match);
  return Ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: x,
        onMouseUp: w,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              y.id
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ s.jsx(we, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            y.parent_id && /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx(hm, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    y.parent_filename && /* @__PURE__ */ s.jsx(
                                      "img",
                                      {
                                        src: Ve({
                                          filename: y.parent_filename,
                                          subfolder: y.parent_subfolder || "",
                                          type: y.parent_type || "output"
                                        }),
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
                                              children: y.parent_filename || "Unknown Image"
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
                                                y.parent_id
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
                      onClick: j,
                      title: "Remove Source",
                      children: /* @__PURE__ */ s.jsx(mm, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (_) => {
                  _.preventDefault(), _.stopPropagation(), c(!0);
                },
                onDragOver: (_) => {
                  _.preventDefault(), _.stopPropagation(), _.dataTransfer.dropEffect = "copy", c(!0);
                },
                onDragLeave: (_) => {
                  _.preventDefault(), _.stopPropagation(), c(!1);
                },
                onDrop: f,
                children: [
                  /* @__PURE__ */ s.jsx(km, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              p.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: p.map((_) => {
                  const C = _.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !C && k(_.id),
                      style: {
                        cursor: C ? "default" : "pointer",
                        ...C ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Ve(_), alt: _.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: _.filename }),
                          C && /* @__PURE__ */ s.jsx(
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
                    _.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                h.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: h.map((_) => {
                  const C = _.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !C && k(_.id),
                      style: {
                        cursor: C ? "default" : "pointer",
                        ...C ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Ve(_), alt: _.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: _.filename }),
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
                                  Math.round((64 - _.distance) / 64 * 100),
                                  "%"
                                ] }),
                                C && /* @__PURE__ */ s.jsx(
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
                    _.id
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
}, oh = () => {
  const { state: e, dispatch: t } = ke(), { executeWorkflow: n } = wd();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      vd,
      {
        images: e.activeModal.images,
        isMaskMode: !!e.activeModal.maskFilename,
        onExecute: async (r) => {
          if (e.activeModal.type === "workflow_selection") {
            const l = e.activeModal.maskFilename;
            for (const i of e.activeModal.images)
              await n(r, i, l);
          }
        }
      }
    ),
    e.activeModal.type === "parent_selection" && Ce.createPortal(
      /* @__PURE__ */ s.jsx(kd, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Ce.createPortal(/* @__PURE__ */ s.jsx(md, {}), document.body),
    e.activeModal.type === "settings" && Ce.createPortal(/* @__PURE__ */ s.jsx(gd, {}), document.body),
    e.activeModal.type === "tag_edit" && Ce.createPortal(
      /* @__PURE__ */ s.jsx(
        yd,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && Ce.createPortal(
      /* @__PURE__ */ s.jsx(_d, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && Ce.createPortal(
      /* @__PURE__ */ s.jsx(
        xd,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && Ce.createPortal(
      /* @__PURE__ */ s.jsx(
        hd,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, Ea = (e, t) => {
  const n = g.useCallback(async (c) => {
    try {
      const m = await bm(c.id);
      if (!m.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        m.workflow
      ), Q.log("Workflow restored successfully from Meld");
    } catch (m) {
      Q.error("Error restoring workflow:", m), alert("Failed to restore workflow.");
    }
  }, []), r = g.useCallback(async (c) => {
    try {
      const m = await Lm(c.id), x = "MeldUnifiedLoader", w = window.app, v = window.LiteGraph.createNode(x);
      if (!v) {
        console.error(`Node type ${x} not found.`), alert(
          `Node type ${x} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const k = {
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
      if (v.widgets) {
        for (const [p, h] of Object.entries(k)) {
          const _ = m[p];
          if (_ != null) {
            const C = v.widgets.find(
              (N) => N.name === h
            );
            C && (C.value = _);
          }
        }
        const f = v.widgets.find(
          (p) => p.name === "control_after_generate"
        );
        f && (f.value = "fixed");
      }
      const j = w.canvas.ds.offset, d = w.canvas.ds.scale;
      v.pos = [(-j[0] + 400) / d, (-j[1] + 300) / d], w.graph.add(v), w.canvas.selectNode(v), w.canvas.centerOnNode(v);
    } catch (m) {
      console.error("Error adding Unified Loader:", m), alert("Failed to load settings.");
    }
  }, []), l = g.useCallback(
    (c) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [c.id],
          tags: c.tags || []
        }
      });
    },
    [t]
  ), i = g.useCallback(
    (c) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: c.id }
      });
    },
    [t]
  ), a = g.useCallback(
    (c) => {
      const m = Array.isArray(c) ? c : [c];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: m }
      });
    },
    [t]
  ), o = g.useCallback(
    (c, m = "run") => {
      var k;
      console.log("[Meld] handleRunWithMask called", c, m);
      const x = window.app, w = ((k = x == null ? void 0 : x.graph) == null ? void 0 : k._nodes) || [];
      console.log(
        "[Meld] Current graph nodes:",
        w.map((j) => ({
          id: j.id,
          type: j.type
        }))
      );
      const y = w.some(
        (j) => j.type === "LoadImageMask"
      ), v = w.some(
        (j) => j.type === "MeldImageLoader"
      );
      if (console.log("[Meld] Nodes found:", { hasMaskNode: y, hasLoaderNode: v }), m === "apply") {
        if (!y || !v) {
          const j = [];
          v || j.push("'Meld Image Loader'"), y || j.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${j.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
      } else if (!y) {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow. Please add one to use the Mask Tool."
          }
        });
        return;
      }
      t({
        type: "OPEN_MODAL",
        payload: { type: "mask_editor", imageId: c.id, mode: m }
      });
    },
    [t]
  ), u = g.useCallback(
    async (c, m) => {
      try {
        const x = c.id, y = (await Sa([x])).restored_ids || [x];
        t({ type: "REMOVE_IMAGES", payload: y }), m == null || m();
      } catch (x) {
        t({
          type: "SET_ERROR",
          payload: x instanceof Error ? x.message : String(x)
        });
      }
    },
    [t]
  );
  return {
    handleRestoreWorkflow: n,
    handleAddUnifiedLoader: r,
    handleEditTags: l,
    handleEditSource: i,
    handleRunWithWorkflow: a,
    handleRunWithMask: o,
    handleRestore: u
  };
}, Sd = (e, t) => {
  const n = g.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((c) => ({
          id: c.id,
          imgSrc: Ve(c)
        }));
      const i = r.parent_id;
      if (!i || !r.parent_filename) return [];
      const a = e.find((c) => c.id === i);
      let o = null;
      if (a ? o = Ve(a) : o = Ve({
        filename: r.parent_filename,
        subfolder: r.parent_subfolder || "",
        type: r.parent_type
      }), !o) return [];
      const u = {
        id: i || null,
        imgSrc: o
      };
      if (a && l > 1) {
        const c = n(a);
        return [u, ...c].slice(0, l);
      }
      return [u];
    },
    [t, e]
  );
  return { getParentChain: n };
}, jd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ke(), l = t.selectedIds.has(e.id), i = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: a,
    handleAddUnifiedLoader: o,
    handleEditSource: u,
    handleEditTags: c,
    handleRunWithWorkflow: m
  } = Ea(t, n), { getParentChain: x } = Sd(t.images, t.settings), [w, y] = g.useState(null), [v, k] = g.useState(!1), [j, d] = g.useState(null), [f, p] = g.useState(!1), h = g.useRef(null), _ = async (T, I, H = !1) => {
    try {
      await navigator.clipboard.writeText(T), H ? (p(!0), setTimeout(() => p(!1), 2e3)) : (d(I), setTimeout(() => d(null), 2e3));
    } catch (ie) {
      console.error("Failed to copy text: ", ie);
    }
  };
  g.useEffect(() => {
    const T = (H) => {
      H.key === "Escape" && (w ? y(null) : k(!1));
    }, I = (H) => {
      h.current && !h.current.contains(H.target) && k(!1);
    };
    return window.addEventListener("keydown", T), v && document.addEventListener("mousedown", I), () => {
      window.removeEventListener("keydown", T), document.removeEventListener("mousedown", I);
    };
  }, [v, w]);
  const C = x(e), L = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, F = Ve(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: i,
    popupContent: w,
    setPopupContent: y,
    isMenuOpen: v,
    setIsMenuOpen: k,
    copiedLabel: j,
    popupCopied: f,
    menuRef: h,
    parentChain: C,
    displayFilename: L,
    imgSrc: F,
    handleCopy: _,
    handleClick: (T) => {
      T.shiftKey ? (T.preventDefault(), T.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : T.ctrlKey || T.metaKey || t.selectedIds.size > 0 ? (T.preventDefault(), T.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (T) => {
      T.shiftKey ? (T.preventDefault(), T.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : T.ctrlKey || T.metaKey || t.selectedIds.size > 0 ? (T.preventDefault(), T.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (T.preventDefault(), T.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (T) => {
      (T.shiftKey || T.ctrlKey || T.metaKey || t.selectedIds.size > 0 || !T.target.closest("img.meld-image-card__thumbnail")) && T.preventDefault();
    },
    handleKeyDown: (T) => {
      (T.key === "Enter" || T.key === " ") && (T.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleRestoreWorkflow: async () => {
      await a(e);
    },
    handleAddUnifiedLoader: async () => {
      await o(e);
    },
    handleEditSource: () => {
      u(e);
    },
    handleEditTags: () => {
      c(e);
    },
    handleRunWithWorkflow: () => {
      m(e);
    },
    handleRunWithMask: (T = "run") => {
      n({
        type: "OPEN_MODAL",
        payload: { type: "mask_editor", imageId: e.id, mode: T }
      });
    },
    fetchFullImageDetails: r
  };
}, uh = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  onAddUnifiedLoader: r,
  onRestoreWorkflow: l,
  onRunWithWorkflow: i,
  onRunWithMask: a,
  onEditSource: o,
  onEditTags: u
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu-container", ref: n, children: [
  /* @__PURE__ */ s.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (c) => {
        c.stopPropagation(), t(!e);
      },
      title: "Menu",
      children: /* @__PURE__ */ s.jsx(vm, { size: 16 })
    }
  ),
  /* @__PURE__ */ s.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (c) => {
        c.stopPropagation(), r();
      },
      title: "Add Unified Loader",
      children: /* @__PURE__ */ s.jsx(Ao, { size: 16 })
    }
  ),
  e && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu", children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => r(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(Ao, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Add Unified Loader" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => l(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(lm, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Restore Full Workflow" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => i(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(es, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Queue Workflow" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => a("apply"), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(ki, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Send to Workflow (Mask)" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => a("run"), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(ki, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Queue Workflow (Mask)" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => o(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(wm, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Edit source image" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => u(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(fn, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Edit Tags" })
        ]
      }
    )
  ] })
] }), ch = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => Ce.createPortal(
  /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-prompt-popup-overlay",
      onClick: (i) => {
        i.stopPropagation(), n();
      },
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-prompt-popup-content",
          onClick: (i) => i.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-header", children: [
              /* @__PURE__ */ s.jsx("span", { children: e }),
              /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                l ? /* @__PURE__ */ s.jsx(_a, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  um,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  we,
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
), Ed = fl.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: l,
      setPopupContent: i,
      isMenuOpen: a,
      setIsMenuOpen: o,
      copiedLabel: u,
      popupCopied: c,
      menuRef: m,
      parentChain: x,
      displayFilename: w,
      imgSrc: y,
      handleCopy: v,
      handleClick: k,
      handleContainerClick: j,
      handleMouseDown: d,
      handleKeyDown: f,
      handleRestoreWorkflow: p,
      handleAddUnifiedLoader: h,
      handleEditSource: _,
      handleEditTags: C,
      handleRunWithWorkflow: N,
      handleRunWithMask: L,
      fetchFullImageDetails: F
    } = jd(e);
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${a ? "meld-image-card--menu-open" : ""}`,
        onClick: j,
        onMouseDown: d,
        onKeyDown: f,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
            "img",
            {
              src: y,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              width: e.width || void 0,
              height: e.height || void 0,
              onMouseDown: d,
              onClick: (E) => {
                E.stopPropagation(), k(E);
              }
            }
          ) }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && w,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && x.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: x.map(
                (E, P) => E.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: E.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (B) => {
                      B.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: E.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: P === 0 ? "Source" : P === 1 ? "Grand-Source" : `Ancestor (S${P + 1})`,
                    alt: "source thumb"
                  },
                  E.id || P
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
                onClick: async (E) => {
                  E.stopPropagation();
                  const P = await F(e.id);
                  i({
                    title: "Model",
                    text: P.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const P = await F(e.id);
                        v(P.model_name || "-", "Model");
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
                onClick: async (E) => {
                  E.stopPropagation();
                  const P = await F(e.id);
                  i({
                    title: "Positive Prompt",
                    text: P.positive_prompt || P.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const P = await F(e.id);
                        v(
                          P.positive_prompt || P.positive || "-",
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
                onClick: async (E) => {
                  E.stopPropagation();
                  const P = await F(e.id);
                  i({
                    title: "Negative Prompt",
                    text: P.negative_prompt || P.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const P = await F(e.id);
                        v(
                          P.negative_prompt || P.negative || "-",
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
                onClick: (E) => {
                  E.stopPropagation(), C();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((E, P) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: E
                    },
                    `${E}-${P}`
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
          /* @__PURE__ */ s.jsx(
            uh,
            {
              isMenuOpen: a,
              setIsMenuOpen: o,
              menuRef: m,
              onAddUnifiedLoader: h,
              onRestoreWorkflow: p,
              onRunWithWorkflow: N,
              onRunWithMask: (E) => L(E),
              onEditSource: _,
              onEditTags: C
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            ch,
            {
              title: l.title,
              text: l.text,
              onClose: () => i(null),
              onCopy: (E) => v(E, "", !0),
              isCopied: c
            }
          )
        ]
      }
    );
  }
);
Ed.displayName = "DetailedImageCard";
const Cd = fl.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: i,
      handleClick: a
    } = jd(e);
    return /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""}`,
        onClick: r,
        onMouseDown: l,
        onKeyDown: i,
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
          "img",
          {
            src: n,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            width: e.width || void 0,
            height: e.height || void 0,
            onMouseDown: l,
            onClick: (o) => {
              o.stopPropagation(), a(o);
            }
          }
        ) })
      }
    );
  }
);
Cd.displayName = "SimpleImageCard";
const dh = ({ image: e }) => {
  const { state: t } = ke();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Cd, { image: e }) : /* @__PURE__ */ s.jsx(Ed, { image: e });
}, fh = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: l
}) => {
  const [i, a] = g.useState(!1), o = g.useRef(null);
  return g.useEffect(() => {
    const u = new IntersectionObserver(
      ([m]) => {
        m.isIntersecting && a(!0);
      },
      { rootMargin: n }
    ), c = o.current;
    return c && u.observe(c), () => {
      c && u.unobserve(c);
    };
  }, [n]), /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: o,
      className: r,
      style: {
        minHeight: `${t}px`,
        ...l
      },
      children: i ? e : null
    }
  );
}, ph = () => {
  const { state: e, dispatch: t } = ke(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Jm(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (m) {
      console.error("Failed to cancel scan:", m);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, i = n.progress.phase === "linking", { current: a, total: o } = n.progress, u = o > 0 ? a / o : 0, c = i ? 50 + Math.round(u * 50) : Math.round(u * 50);
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
        style: { width: `${c}%` }
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
        children: /* @__PURE__ */ s.jsx(ki, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(om, { size: 14, className: "meld-success-icon" }),
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
}, mh = () => {
  const { state: e, refreshFavorites: t } = ke(), [n, r] = g.useState(!1), [l, i] = g.useState(null), [a, o] = g.useState(null), [u, c] = g.useState(""), [m, x] = g.useState("");
  g.useEffect(() => {
    if (l) {
      const j = setTimeout(() => i(null), 3e3);
      return () => clearTimeout(j);
    }
  }, [l]);
  const w = g.useCallback(
    async (j, d, f) => {
      j.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${f}"?`;
      if (window.confirm(p))
        try {
          await $o(d), await t();
        } catch (h) {
          Q.error("Failed to delete favorite", h);
        }
    },
    [t]
  ), y = g.useCallback(
    (j, d) => {
      j.stopPropagation(), o(d), c(d.name), x(d.query);
    },
    []
  ), v = g.useCallback(async () => {
    if (!(!a || !u.trim() || !m.trim()))
      try {
        r(!0), await Om(
          a.id,
          u,
          m
        ), await t(), o(null), i("Favorite updated.");
      } catch (j) {
        Q.error("Failed to update favorite", j), i("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [a, u, m, t]), k = g.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (d) => d.query === e.searchQuery
    )) {
      const d = e.favorites.find((f) => f.query === e.searchQuery);
      if (d) {
        r(!0);
        try {
          await $o(d.id), await t(), i("Favorite removed.");
        } catch (f) {
          Q.error("Failed to delete favorite:", f);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Am(e.searchQuery, e.searchQuery), await t(), i(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (d) {
      Q.error("Failed to save favorite:", d);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    editingFavorite: a,
    setEditingFavorite: o,
    editFavoriteName: u,
    setEditFavoriteName: c,
    editFavoriteQuery: m,
    setEditFavoriteQuery: x,
    handleDeleteFavorite: w,
    handleEditFavorite: y,
    handleSaveEditFavorite: v,
    handleSaveFavorite: k,
    setToastMessage: i
  };
}, Is = (e) => {
  const t = [];
  let n = "", r = !1;
  for (let l = 0; l < e.length; l++) {
    const i = e[l];
    if (i === '"')
      r = !r, n += i;
    else if (i === " " && !r)
      for (t.push(n), n = ""; l + 1 < e.length && e[l + 1] === " "; )
        l++;
    else
      n += i;
  }
  return t.push(n), t;
}, hh = () => {
  const { state: e, dispatch: t, updateSetting: n } = ke(), [r, l] = g.useState(e.searchQuery), [i, a] = g.useState([]), [o, u] = g.useState(!1), [c, m] = g.useState([]), [x, w] = g.useState([]), y = e.settings["search.show_all_keywords"], [v, k] = g.useState(-1), [j, d] = g.useState(null), f = g.useRef(null), p = g.useRef(e.searchQuery), h = g.useCallback(async () => {
    if (x.length > 0) return;
    const M = await Dm();
    w(M);
  }, [x.length]);
  g.useEffect(() => {
    Rm().then((M) => {
      d(M);
    }), y && h();
  }, [h, y]);
  const _ = g.useMemo(() => {
    if (!j) return null;
    const M = j.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${M}):(.*)$`, "i");
  }, [j]), C = g.useCallback(() => {
    const M = !y;
    M && h(), n("search.show_all_keywords", M);
  }, [y, h, n]), N = r !== p.current;
  g.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      m([]);
      return;
    }
    Pm().then((M) => {
      m(M);
    });
  }, [e.settings["search.quick_suggestions"]]), g.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), g.useEffect(() => {
    var M;
    (M = f.current) == null || M.focus();
  }, []);
  const L = g.useCallback(
    (M, U = !0) => {
      p.current !== M && (Q.log("SearchBar: triggering search", { query: M }), t({ type: "SET_SEARCH_QUERY", payload: M }), U && u(!1), p.current = M);
    },
    [t]
  );
  g.useEffect(() => {
    const M = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"] || !_) {
        a([]), u(!1);
        return;
      }
      const U = Is(r), b = U[U.length - 1];
      if (b) {
        const z = b.match(_);
        if (z) {
          const T = z[1].toLowerCase();
          let I = z[2];
          I.startsWith('"') && (I = I.substring(1)), I.endsWith('"') && (I = I.substring(0, I.length - 1));
          const H = await Tm(I, T);
          a(H), u(H.length > 0), k(-1);
        } else {
          const T = b.replace(/^([-!])/, "").toLowerCase();
          if (T && j) {
            const I = j.all_prefixes.filter((H) => H.startsWith(T)).map((H) => ({
              type: H,
              value: "",
              count: 0
            }));
            if (I.length > 0) {
              a(I), u(!0), k(-1);
              return;
            }
          }
          a([]), u(!1);
        }
      } else
        a([]), u(!1);
    }, 300);
    return () => clearTimeout(M);
  }, [
    r,
    e.settings["search.input_suggest"],
    _,
    j
  ]);
  const F = g.useCallback(
    (M) => {
      var ie;
      const U = Is(r), z = (U.pop() || "").match(/^([-!])/), T = z ? z[1] : "", H = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(M.type);
      if (M.value === "") {
        const W = `${[...U, `${T}${M.type}:`].join(" ").trim()}`;
        l(W);
      } else {
        const W = H ? M.value : `"${M.value}"`, J = `${[
          ...U,
          `${T}${M.type}:${W}`
        ].join(" ").trim()} `;
        l(J), a([]), u(!1);
      }
      (ie = f.current) == null || ie.focus();
    },
    [r, j]
  ), E = (M) => {
    M.key === "Enter" ? L(r) : M.key === "Tab" ? o && v >= 0 && (F(i[v]), M.preventDefault()) : M.key === "ArrowDown" ? o && (k((U) => Math.min(U + 1, i.length - 1)), M.preventDefault()) : M.key === "ArrowUp" ? o && (k((U) => Math.max(U - 1, -1)), M.preventDefault()) : M.key === "Escape" && u(!1);
  }, P = g.useCallback(() => {
    l(""), L("");
  }, [L]), B = g.useCallback(
    (M, U, b = !1) => {
      var ie;
      if (b) {
        const W = `${M}:`;
        l(W), (ie = f.current) == null || ie.focus();
        return;
      }
      const I = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(M) ? U : `"${U}"`, H = `${M}:${I}`;
      l(H), L(H);
    },
    [L, j]
  ), A = g.useCallback(
    (M) => {
      l(M), M || L("");
    },
    [L]
  ), S = g.useCallback(() => {
    if (r === p.current || !_)
      return;
    const M = Is(r), U = M[M.length - 1];
    if (!U) return;
    const b = !!U.match(_), z = U.replace(/^([-!])/, "").toLowerCase(), T = z && (j == null ? void 0 : j.all_prefixes.some((I) => I.startsWith(z)));
    (b || T) && u(!0);
  }, [r, _, j]), $ = g.useCallback(() => {
    setTimeout(() => u(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: i,
    showSuggestions: o,
    setShowSuggestions: u,
    searchSuggestions: c,
    allKeywords: x,
    showAllKeywords: y,
    toggleShowAllKeywords: C,
    selectedIndex: v,
    setSelectedIndex: k,
    inputRef: f,
    isQueryChanged: N,
    handleSearch: L,
    handleKeyDown: E,
    applySuggestion: F,
    clearSearch: P,
    applySearchSuggestion: B,
    handleInputChange: A,
    handleInputFocus: S,
    handleInputBlur: $
  };
}, gh = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, i] = g.useState(!1), [a, o] = g.useState(!1), [u, c] = g.useState(!1);
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
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
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
                    color: a ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                    backgroundColor: a ? "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))" : "transparent",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: () => o(!0),
                  onMouseLeave: () => o(!1),
                  title: "Edit favorite",
                  children: /* @__PURE__ */ s.jsx(ud, { size: 14 })
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
                    color: u ? "var(--meld-danger-color)" : "var(--meld-text-secondary)",
                    backgroundColor: u ? "var(--comfy-input-bg-active, rgba(255,0,0,0.1))" : "transparent",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: () => c(!0),
                  onMouseLeave: () => c(!1),
                  title: "Delete favorite",
                  children: /* @__PURE__ */ s.jsx(Wn, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Wo = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(fn, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(im, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(_m, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(am, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(ld, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(rd, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(sm, { size: 12 });
    default:
      return null;
  }
}, yh = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: i,
  searchQuery: a,
  searchSuggestions: o,
  allKeywords: u,
  showAllKeywords: c,
  toggleShowAllKeywords: m,
  applySearchSuggestion: x,
  favorites: w,
  onSelectFavorite: y,
  onEditFavorite: v,
  onDeleteFavorite: k
}) => {
  const j = (h, _, C) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => x(h.type, h.value, C === "all"),
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
        N.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", N.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", N.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Wo(h.type)
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
            children: h.type
          }
        ),
        C !== "all" && /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: h.value
          }
        )
      ]
    },
    `${C}-${h.type}:${h.value}:${_}`
  ), d = () => !e || t.length === 0 ? null : /* @__PURE__ */ s.jsx(
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
        zIndex: 1e3,
        marginTop: "8px",
        maxHeight: "400px",
        overflowY: "auto",
        boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))"
      },
      children: t.map((h, _) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (C) => {
            C.preventDefault(), l(h);
          },
          onMouseEnter: () => r(_),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: _ === n ? "var(--comfy-menu-bg, #333)" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
          },
          children: /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ s.jsx(
              "span",
              {
                style: {
                  color: "var(--meld-text-secondary)",
                  display: "flex"
                },
                children: Wo(h.type)
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
                  width: h.type.length > 8 ? "auto" : "60px",
                  flexShrink: 0
                },
                children: [
                  h.type,
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ s.jsx(
              "span",
              {
                style: {
                  color: h.value === ot ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: h.value === ot ? "bold" : "normal"
                },
                children: h.value === ot ? h.type === "tag" ? `Untagged (${ot})` : `No ${h.type} (${ot})` : h.value
              }
            )
          ] })
        },
        `${h.type}:${h.value}`
      ))
    }
  ), f = () => o.length === 0 || i && i === a ? null : /* @__PURE__ */ s.jsxs(
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
            children: o.map(
              (h, _) => j(h, _, "quick")
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
                        children: c ? "Show Less" : "Show More"
                      }
                    )
                  ]
                }
              ),
              c && /* @__PURE__ */ s.jsx(
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
                  children: Array.from(new Set(u.map((h) => h.type))).map(
                    (h, _) => j({ type: h, value: "" }, _, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), p = () => w.length === 0 || i && i === a ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(Si, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: w.map((h) => /* @__PURE__ */ s.jsx(
              gh,
              {
                fav: h,
                onSelect: y,
                onEdit: v,
                onDelete: k
              },
              h.id
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
      onMouseDown: (h) => {
        h.preventDefault();
      },
      children: [
        d(),
        f(),
        p()
      ]
    }
  );
}, vh = () => {
  const { state: e } = ke(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: i,
    allKeywords: a,
    showAllKeywords: o,
    toggleShowAllKeywords: u,
    selectedIndex: c,
    setSelectedIndex: m,
    inputRef: x,
    isQueryChanged: w,
    handleSearch: y,
    handleKeyDown: v,
    applySuggestion: k,
    clearSearch: j,
    applySearchSuggestion: d,
    handleInputChange: f,
    handleInputFocus: p,
    handleInputBlur: h
  } = hh(), {
    isSaving: _,
    toastMessage: C,
    editingFavorite: N,
    setEditingFavorite: L,
    editFavoriteName: F,
    setEditFavoriteName: E,
    editFavoriteQuery: P,
    setEditFavoriteQuery: B,
    handleDeleteFavorite: A,
    handleEditFavorite: S,
    handleSaveEditFavorite: $,
    handleSaveFavorite: M
  } = mh(), U = g.useRef(null), b = g.useRef(!1);
  g.useEffect(() => {
    N && U.current && U.current.focus();
  }, [N]);
  const z = (I) => {
    I.target === I.currentTarget && (b.current = !0);
  }, T = (I) => {
    I.target === I.currentTarget && b.current && L(null), b.current = !1;
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
              C && /* @__PURE__ */ s.jsx(
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
                  children: C
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
                        onClick: () => y(t),
                        style: {
                          background: w ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: w ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: w ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (I) => {
                          I.currentTarget.style.transform = "translateY(-1px)", w ? (I.currentTarget.style.filter = "brightness(1.15)", I.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : I.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (I) => {
                          I.currentTarget.style.transform = "none", w ? (I.currentTarget.style.filter = "none", I.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : I.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (I) => {
                          I.currentTarget.style.transform = "translateY(1px)", I.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (I) => {
                          I.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            $n,
                            {
                              size: 16,
                              color: w ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: w ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          w && /* @__PURE__ */ s.jsx(
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
                        ref: x,
                        type: "text",
                        value: t,
                        onChange: (I) => f(I.target.value),
                        onKeyDown: v,
                        onBlur: h,
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
                        onClick: M,
                        disabled: _,
                        title: e.favorites.some((I) => I.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          Si,
                          {
                            size: 16,
                            color: e.favorites.some((I) => I.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((I) => I.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: j,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ s.jsx(we, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                yh,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: c,
                  setSelectedIndex: m,
                  applySuggestion: k,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: i,
                  allKeywords: a,
                  showAllKeywords: o,
                  toggleShowAllKeywords: u,
                  applySearchSuggestion: d,
                  favorites: e.favorites,
                  onSelectFavorite: (I) => {
                    n(I), y(I);
                  },
                  onEditFavorite: S,
                  onDeleteFavorite: A
                }
              )
            ]
          }
        ),
        N && Ce.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: z,
              onMouseUp: T,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (I) => I.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(Si, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => L(null),
                          children: /* @__PURE__ */ s.jsx(we, { size: 20 })
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
                                    ref: U,
                                    type: "text",
                                    value: F,
                                    onChange: (I) => E(I.target.value),
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
                                    onKeyDown: (I) => {
                                      I.key === "Enter" && $(), I.key === "Escape" && L(null);
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
                                    value: P,
                                    onChange: (I) => B(I.target.value),
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
                                    onKeyDown: (I) => {
                                      I.key === "Enter" && !I.shiftKey && (I.preventDefault(), $()), I.key === "Escape" && L(null);
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
                          onClick: () => L(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: $,
                          disabled: _ || !F.trim() || !P.trim(),
                          children: _ ? "Saving..." : "Save Changes"
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
}, wh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = g.useState([]), [l, i] = g.useState(!0), [a, o] = g.useState(""), [u, c] = g.useState(""), [m, x] = g.useState(!1), [w, y] = g.useState(null), [v, k] = g.useState(""), [j, d] = g.useState(!1), f = g.useRef(null), p = g.useCallback(async () => {
    i(!0);
    try {
      const P = await ja();
      r(P);
    } catch (P) {
      console.error("Failed to fetch tags:", P);
    } finally {
      i(!1);
    }
  }, []);
  g.useEffect(() => {
    p();
  }, [p]), g.useEffect(() => {
    w !== null && f.current && (f.current.focus(), f.current.select());
  }, [w]);
  const h = async (P) => {
    P.preventDefault();
    const B = u.trim();
    if (!(!B || m)) {
      if (B.toLowerCase() === ot) {
        alert(
          `Tag name '${ot}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((A) => A.name.toLowerCase() === B.toLowerCase())) {
        alert(`Tag "${B}" already exists.`);
        return;
      }
      x(!0);
      try {
        await Qm(B), c(""), await p();
      } catch (A) {
        console.error("Failed to add tag:", A);
      } finally {
        x(!1);
      }
    }
  }, _ = async (P, B) => {
    if (confirm(`Are you sure you want to delete tag "${B}"?`))
      try {
        await Bm(P), await p();
      } catch (A) {
        console.error("Failed to delete tag:", A);
      }
  }, C = (P) => {
    y(P.id), k(P.name);
  }, N = () => {
    y(null), k("");
  }, L = async (P) => {
    P.preventDefault();
    const B = v.trim();
    if (!B || w === null || j) return;
    if (B.toLowerCase() === ot) {
      alert(
        `Tag name '${ot}' is reserved for search and cannot be used.`
      );
      return;
    }
    const A = n.find((S) => S.id === w);
    if (A && A.name === B) {
      N();
      return;
    }
    if (n.some(
      (S) => S.id !== w && S.name.toLowerCase() === B.toLowerCase()
    )) {
      alert(`Tag "${B}" already exists.`);
      return;
    }
    d(!0);
    try {
      await Hm(w, B), N(), await p();
    } catch (S) {
      console.error("Failed to rename tag:", S), alert(S instanceof Error ? S.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, F = (P) => {
    t(`tag:${P}`);
  }, E = g.useMemo(() => n.filter(
    (P) => P.name.toLowerCase().includes(a.toLowerCase())
  ), [n, a]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(fn, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(we, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: h, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (P) => c(P.target.value),
            disabled: m
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || m,
            children: [
              /* @__PURE__ */ s.jsx(ka, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx($n, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: a,
            onChange: (P) => o(P.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: E.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : E.map((P) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: w === P.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: L,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: v,
                onChange: (B) => k(B.target.value),
                onKeyDown: (B) => B.key === "Escape" && N()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !v.trim(),
                children: /* @__PURE__ */ s.jsx(_a, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: N,
                disabled: j,
                children: /* @__PURE__ */ s.jsx(we, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: P.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => F(P.name),
              children: /* @__PURE__ */ s.jsx($n, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => C(P),
              children: /* @__PURE__ */ s.jsx(ud, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => _(P.id, P.name),
              children: /* @__PURE__ */ s.jsx(Wn, { size: 14 })
            }
          )
        ] })
      ] }) }, P.id)) })
    ] })
  ] });
}, xh = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: i, viewerMode: a, lineageImages: o, settings: u } = e, { handleEditTags: c, handleRestore: m } = Ea(e, t), { getParentChain: x } = Sd(i, u), [w, y] = g.useState(!1), [v, k] = g.useState(
    u["viewer.show_details_by_default"]
  ), [j, d] = g.useState(null), f = j ?? u["viewer.show_thumbnails"], [p, h] = g.useState(!1), [_, C] = g.useState(!1), [N, L] = g.useState(null), [F, E] = g.useState(null), [P, B] = g.useState(
    null
  ), A = g.useRef(null), S = g.useRef(!0);
  g.useEffect(() => (S.current = !0, () => {
    S.current = !1;
  }), []);
  const $ = g.useRef(l);
  g.useEffect(() => {
    $.current = l;
  }, [l]);
  const M = g.useMemo(() => {
    const G = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return a === "lineage" ? o : i.filter(
      (Z) => Z.exists !== !1 && (u["gallery.show_parent_images"] || !Z.has_children || G)
    );
  }, [a, o, i, u, e.searchQuery]), U = l === null ? -1 : M.findIndex((G) => G.id === l), b = (a === "lineage" && o.length > 0 ? o : i).find((G) => G.id === l), z = g.useCallback(
    async (G = !1) => {
      if (!b) return;
      const Z = w ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!G && Z === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [b.id],
            hasLineage: !!(b.parent_id || b.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const R = e.viewScope === "trash", re = /* @__PURE__ */ new Set([b.id]);
        if (Z === "lineage") {
          const K = await Ei(b.id);
          for (const te of K)
            re.add(te.id);
        }
        if (!S.current || $.current === null) return;
        if (M.length > re.size) {
          let K = !1;
          for (let te = U + 1; te < M.length; te++)
            if (!re.has(M[te].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: M[te].id, mode: a }
              }), K = !0;
              break;
            }
          if (!K) {
            for (let te = U - 1; te >= 0; te--)
              if (!re.has(M[te].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: M[te].id, mode: a }
                }), K = !0;
                break;
              }
          }
          K || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await ji(Array.from(re), R), !R) {
          const K = M.filter(
            (te) => re.has(te.id)
          );
          L(K), E(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(re) });
      } catch (R) {
        t({
          type: "SET_ERROR",
          payload: R instanceof Error ? R.message : String(R)
        });
      }
    },
    [
      b,
      w,
      u,
      e.viewScope,
      M,
      U,
      a,
      t
    ]
  ), T = g.useCallback(() => {
    b && c(b);
  }, [b, c]), I = g.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: w } });
  }, [t, w]), H = g.useCallback(async () => {
    const G = w ? u["fullscreen.loop"] : u["viewer.loop"];
    if (U === 0 && a === "gallery" && e.pagination.hasMore && !_ && G) {
      C(!0);
      try {
        const Z = e.pagination.limit, R = e.pagination.total, re = Math.max(0, R - Z), K = await dl(
          re,
          Z,
          e.searchQuery
        );
        if (!S.current || (t({ type: "APPEND_IMAGES", payload: K }), $.current === null)) return;
        if (K.images.length > 0) {
          const te = K.images[K.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: te.id, mode: "gallery" }
          });
        }
      } catch (Z) {
        console.error("Failed to jump to end:", Z);
      } finally {
        C(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: w } });
  }, [
    U,
    a,
    e.pagination,
    e.searchQuery,
    u,
    t,
    _,
    w
  ]), ie = g.useCallback(
    (G) => {
      G && "stopPropagation" in G && G.stopPropagation();
      const Z = A.current;
      Z && (document.fullscreenElement ? document.exitFullscreen() : Z.requestFullscreen().catch((R) => {
        console.error(
          `Error attempting to enable full-screen mode: ${R.message}`
        );
      }));
    },
    []
  ), W = g.useCallback(async () => {
    b && (M.length > 1 ? I() : t({ type: "CLOSE_VIEWER" }), await m(b));
  }, [b, M.length, I, m, t]), J = g.useCallback(async () => {
    if (!N || N.length === 0) return;
    const G = N.map((R) => R.id), Z = G[0];
    try {
      const R = await Sa(G);
      if (!S.current) return;
      if (t({ type: "ADD_IMAGES", payload: N }), e.viewScope === "trash") {
        const re = R.restored_ids || G;
        t({ type: "REMOVE_IMAGES", payload: re });
      }
      if (L(null), !S.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: Z, mode: a }
      });
    } catch (R) {
      t({
        type: "SET_ERROR",
        payload: R instanceof Error ? R.message : String(R)
      });
    }
  }, [N, t, a, e.viewScope]), le = g.useCallback(async () => {
    if (N && N.length > 0)
      await J();
    else if (F && F.type === "tags") {
      const { imageId: G, addTags: Z, removeTags: R } = F;
      try {
        await Ci([G], Z, R);
        const re = (a === "lineage" ? o : i).find((K) => K.id === G);
        if (re) {
          const K = [...re.tags];
          for (const Qe of Z)
            K.includes(Qe) || K.push(Qe);
          const te = K.filter((Qe) => !R.includes(Qe));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...re, tags: te }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: G, mode: a }
          });
        }
        E(null);
      } catch (re) {
        t({
          type: "SET_ERROR",
          payload: re instanceof Error ? re.message : String(re)
        });
      }
    }
  }, [
    N,
    F,
    J,
    i,
    o,
    a,
    t
  ]), Ae = g.useCallback(
    async (G) => {
      if (!G || !b) return;
      const Z = b.id, R = [...b.tags], re = G.split(/\s+/), K = [], te = [];
      let Qe = !1, It = !1, vt = !1;
      for (const ge of re)
        if (ge.startsWith("tag:")) {
          const ce = ge.substring(4);
          ce && !R.includes(ce) && !K.includes(ce) && K.push(ce);
        } else if (ge.startsWith("-tag:")) {
          const ce = ge.substring(5);
          ce && R.includes(ce) && !te.includes(ce) && te.push(ce);
        } else if (ge.startsWith("tag-toggle:")) {
          const ce = ge.substring(11);
          ce && (R.includes(ce) ? te.includes(ce) || te.push(ce) : K.includes(ce) || K.push(ce));
        } else ge === "next" ? Qe = !0 : ge === "prev" ? It = !0 : ge === "delete" && (vt = !0);
      if (K.length > 0 || te.length > 0)
        try {
          await Ci(
            [Z],
            K,
            te
          );
          const ge = [...R];
          for (const Xt of K)
            ge.includes(Xt) || ge.push(Xt);
          const ce = ge.filter((Xt) => !te.includes(Xt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...b, id: Z, tags: ce }
          }), E({
            type: "tags",
            imageId: Z,
            addTags: [...te],
            removeTags: [...K]
          }), L(null);
        } catch (ge) {
          console.error("Failed to update tags via shortcut:", ge);
        }
      vt ? z(!0) : Qe ? I() : It && H();
    },
    [b, t, I, H, z]
  );
  g.useEffect(() => {
    const G = (R) => {
      var ce, Xt, Ca;
      if (l === null) return;
      const re = ((ce = document.activeElement) == null ? void 0 : ce.tagName) === "INPUT" || ((Xt = document.activeElement) == null ? void 0 : Xt.tagName) === "TEXTAREA" || ((Ca = document.activeElement) == null ? void 0 : Ca.isContentEditable), K = R.key === "Delete" || R.key === "Backspace", te = R.key === "ArrowRight" || R.key === "ArrowLeft", Qe = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        R.key
      ), It = R.key === "Escape", vt = (R.ctrlKey || R.metaKey) && (R.key === "z" || R.key === "Z" || R.code === "KeyZ"), ge = /^[0-9]$/.test(R.key) && !R.ctrlKey && !R.metaKey && !R.altKey && R.code !== "KeyZ";
      if (K || te || Qe || It || vt || ge)
        if (re)
          if (It) {
            if (e.activeModal.type !== "none") {
              R.preventDefault(), R.stopPropagation();
              return;
            }
            R.preventDefault(), R.stopPropagation(), R.stopImmediatePropagation();
          } else
            return;
        else {
          if (It && e.activeModal.type !== "none") {
            R.preventDefault(), R.stopPropagation();
            return;
          }
          R.preventDefault(), R.stopPropagation(), R.stopImmediatePropagation();
        }
      else
        return;
      if (R.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (R.key === "ArrowRight")
        I();
      else if (R.key === "ArrowLeft")
        H();
      else if (R.key === "f" || R.key === "F")
        ie(R);
      else if (R.key === "i" || R.key === "I")
        k((ts) => !ts);
      else if (R.key === "t" || R.key === "T")
        T();
      else if ((R.key === "r" || R.key === "R") && e.viewScope === "trash")
        W();
      else if (R.key === "Delete")
        z();
      else if ((R.ctrlKey || R.metaKey) && (R.key === "z" || R.key === "Z"))
        le();
      else if (ge && !re) {
        const ts = `viewer.shortcut.${R.key}`, ns = u[ts];
        typeof ns == "string" && ns && (B(R.key), setTimeout(() => {
          S.current && B(null);
        }, 500), Ae(ns));
      }
    };
    window.addEventListener("keydown", G, { capture: !0 });
    const Z = () => {
      const R = !!document.fullscreenElement;
      y(R), k(R ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", Z), () => {
      window.removeEventListener("keydown", G, { capture: !0 }), document.removeEventListener("fullscreenchange", Z);
    };
  }, [
    l,
    t,
    ie,
    I,
    H,
    u,
    z,
    e.activeModal.type,
    le,
    T,
    W,
    e.viewScope,
    Ae
  ]), g.useEffect(() => {
    l !== null && r(l).catch((G) => {
      console.error("Failed to fetch full image details for viewer:", G);
    });
  }, [l, r]), g.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (h(!0), Ei(l).then((G) => {
      S.current && t({ type: "SET_LINEAGE", payload: G });
    }).catch((G) => {
      console.error("Failed to fetch lineage:", G);
    }).finally(() => {
      S.current && h(!1);
    }));
  }, [a, l, o.length, t]), g.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || U !== -1 && U >= M.length - 15 && n();
  }, [
    l,
    M.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    U
  ]);
  const pn = g.useMemo(() => {
    if (!f || U === -1) return [];
    const G = u["viewer.thumbnail_window_size"], Z = Math.floor(G / 2);
    let R = Math.max(0, U - Z);
    const re = Math.min(M.length, R + G);
    return re === M.length && (R = Math.max(0, re - G)), M.slice(R, re).map((K, te) => ({
      img: K,
      absIndex: R + te
    }));
  }, [M, U, u, f]), yt = g.useMemo(() => b ? x(b) : [], [b, x]);
  return g.useEffect(() => {
    var G, Z;
    if (l !== null) {
      if (f) {
        const R = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        R && R.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((G = document.activeElement) == null ? void 0 : G.tagName) === "CANVAS" && document.activeElement.blur(), (Z = A.current) == null || Z.focus();
    }
  }, [l, f]), g.useEffect(() => {
    if (l === null || M.length === 0) return;
    const G = M.findIndex(
      (K) => K.id === l
    );
    if (G === -1) return;
    const Z = (K) => Ve(K), R = [
      G + 1,
      G + 2,
      G - 1
    ], re = setTimeout(() => {
      for (const K of R)
        if (K >= 0 && K < M.length) {
          const te = M[K], Qe = new Image();
          Qe.src = Z(te);
        }
    }, 150);
    return () => clearTimeout(re);
  }, [l, M]), {
    isFullscreen: w,
    showDetails: v,
    setShowDetails: k,
    showThumbnails: f,
    setShowThumbnailsOverride: d,
    isLoadingLineage: p,
    isJumping: _,
    activeShortcutKey: P,
    lastDeletedImages: N,
    setLastDeletedImages: L,
    overlayRef: A,
    handleNext: I,
    handlePrevious: H,
    handleDelete: z,
    handleTagEdit: T,
    handleRestore: W,
    handleUndo: le,
    toggleFullscreen: ie,
    currentIndex: U,
    currentThumbnails: M,
    image: b,
    windowedThumbnails: pn,
    parentChain: yt
  };
}, _h = ({
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
}) }) : null, kh = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: i
}) => /* @__PURE__ */ s.jsxs(
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
          (a, o) => a.imgSrc && /* @__PURE__ */ s.jsx(
            "img",
            {
              src: a.imgSrc,
              className: "meld-lineage-badge__parent-thumb",
              style: { cursor: "pointer" },
              loading: "lazy",
              onClick: (u) => {
                u.stopPropagation(), i({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: a.id || e.id,
                    mode: "lineage"
                  }
                });
              },
              title: o === 0 ? "Source" : o === 1 ? "Grand-Source" : `Ancestor (S${o + 1})`,
              alt: "source thumb"
            },
            a.id || o
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
        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((a) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: a }, a)) })
      ] })
    ]
  }
), Nd = g.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, o = Ve(e);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${i ? "meld-viewer-thumbnail--parent" : ""} ${a ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: o, alt: e.filename }),
          (i || a) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: i ? "Source Image" : "Derivative Image",
              children: i ? /* @__PURE__ */ s.jsx(ld, { size: 12 }) : /* @__PURE__ */ s.jsx(rd, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Nd.displayName = "ThumbnailItem";
const Sh = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: l,
  isLoading: i,
  viewerMode: a
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
  ) : e.map(({ img: o }) => /* @__PURE__ */ s.jsx(
    Nd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  a === "gallery" && i && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(Ir, { className: "animate-spin", size: 20 }) })
] }) });
function jh() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ke(), {
    isFullscreen: l,
    showDetails: i,
    setShowDetails: a,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: c,
    isJumping: m,
    activeShortcutKey: x,
    setLastDeletedImages: w,
    overlayRef: y,
    handleNext: v,
    handlePrevious: k,
    handleTagEdit: j,
    handleRestore: d,
    toggleFullscreen: f,
    image: p,
    windowedThumbnails: h,
    parentChain: _
  } = xh({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), C = g.useRef(null), { executeWorkflow: N } = wd();
  if (!p) return null;
  const { viewerImageId: L, viewerMode: F } = e, E = Ve(p), P = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Ce.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: y,
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
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${o ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (B) => B.stopPropagation(),
              children: [
                P && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: d,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(Ir, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => u(!o),
                      type: "button",
                      title: o ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(od, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: j,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ s.jsx(fn, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => a(!i),
                      type: "button",
                      title: i ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(fm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: f,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ s.jsx(ym, { size: 20 }) : /* @__PURE__ */ s.jsx(gm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(we, { size: 20 })
                    }
                  )
                ] }),
                P && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: k,
                    type: "button",
                    disabled: m,
                    children: /* @__PURE__ */ s.jsx(sd, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  m && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(Ir, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: C,
                      src: E,
                      alt: p.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${m ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                P && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: v,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(id, { size: 32 })
                  }
                ),
                i && /* @__PURE__ */ s.jsx(
                  kh,
                  {
                    image: p,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: P,
                    parentChain: _,
                    dispatch: t
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  Sh,
                  {
                    windowedThumbnails: h,
                    viewerImageId: L,
                    currentImage: p,
                    dispatch: t,
                    isLoadingLineage: c,
                    isLoading: e.isLoading,
                    viewerMode: F
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  _h,
                  {
                    settings: e.settings,
                    activeShortcutKey: x
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            vd,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename,
              onExecute: async (B) => {
                if (e.activeModal.type === "workflow_selection") {
                  const A = e.activeModal.maskFilename;
                  for (const S of e.activeModal.images)
                    await N(B, S, A);
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(_d, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            xd,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: w
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(kd, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(md, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(gd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            yd,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            hd,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          )
        ]
      }
    ),
    document.body
  );
}
const Eh = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = ke(), [i, a] = g.useState("gallery"), [o, u] = g.useState(""), [c, m] = g.useState(e.pagination.limit);
  g.useEffect(() => {
    m(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const x = e.searchQuery.trim() !== "", w = g.useRef(null), y = g.useRef(null), v = g.useMemo(() => {
    const j = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((d) => e.viewScope === "trash" ? d.exists !== !1 || e.settings["gallery.trash.show_missing"] : d.exists !== !1 && (e.settings["gallery.show_parent_images"] || !d.has_children || j));
  }, [e.images, e.settings, e.viewScope, e.searchQuery]), k = g.useMemo(
    () => v.slice(0, c),
    [v, c]
  );
  return g.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && v.length === 0 && (Q.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    v.length,
    r
  ]), g.useEffect(() => {
    const j = (d) => {
      d.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), d.preventDefault(), d.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), d.preventDefault(), d.stopPropagation()));
    };
    return window.addEventListener("keydown", j), () => window.removeEventListener("keydown", j);
  }, [e.activeModal.type, e.selectedIds.size, t]), g.useEffect(() => {
    const j = new IntersectionObserver(
      (f) => {
        if (f[0].isIntersecting) {
          if (e.isLoading) {
            Q.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          c < v.length ? (Q.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: c,
              newLimit: Math.min(
                c + e.pagination.limit,
                v.length
              ),
              totalAvailableLocally: v.length
            }
          ), m((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (Q.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : Q.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: v.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), d = w.current;
    return d && j.observe(d), () => {
      d && j.unobserve(d);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    c,
    v.length,
    e.pagination.limit,
    e.images.length
  ]), g.useEffect(() => {
    const j = e.viewerImageId ?? y.current;
    if (j !== null && v.some((f) => f.id === j)) {
      const f = v.findIndex((h) => h.id === j);
      if (f >= c) {
        m(
          Math.ceil((f + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${j}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (y.current = null));
    }
    e.viewerImageId !== null && (y.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    v,
    c,
    e.pagination.limit
  ]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: l,
    viewMode: i,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: u,
    localLimit: c,
    displayedImages: v,
    visibleImages: k,
    isSearchActive: x,
    loadMoreRef: w
  };
}, Ch = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ke(), { handleRunWithWorkflow: l } = Ea(e, t), i = e.selectedIds.size;
  if (i === 0) return null;
  const a = e.viewScope === "trash", o = () => {
    const c = e.images.filter(
      (x) => e.selectedIds.has(x.id)
    ), m = /* @__PURE__ */ new Set();
    for (const x of c)
      if (x.tags)
        for (const w of x.tags)
          m.add(w);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(m)
      }
    });
  }, u = () => {
    const c = e.images.filter(
      (m) => e.selectedIds.has(m.id)
    );
    l(c);
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${a ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
          i,
          " items selected"
        ] }),
        a ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--restore",
              onClick: r,
              children: [
                /* @__PURE__ */ s.jsx(
                  Ir,
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
                  Wn,
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
              onClick: o,
              children: [
                /* @__PURE__ */ s.jsx(
                  fn,
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
              className: "meld-bulk-bar__button meld-bulk-bar__button--workflow",
              onClick: u,
              children: [
                /* @__PURE__ */ s.jsx(
                  ad,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Queue Workflow"
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
                  Wn,
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
              /* @__PURE__ */ s.jsx(we, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, Nh = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: i,
    lastSearchQuery: a,
    setLastSearchQuery: o,
    localLimit: u,
    displayedImages: c,
    visibleImages: m,
    isSearchActive: x,
    loadMoreRef: w
  } = Eh();
  return Q.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: m.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx(Wn, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (y) => r("gallery.trash.show_missing", y.target.checked)
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
                  /* @__PURE__ */ s.jsx(we, { size: 14 }),
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
                  l === "search" ? (o(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), i("gallery")) : (!e.searchQuery && a && t({
                    type: "SET_SEARCH_QUERY",
                    payload: a
                  }), i("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: x ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: x ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx($n, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const v = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", v);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(pm, { size: 14 }) : /* @__PURE__ */ s.jsx(od, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => i(l === "tags" ? "gallery" : "tags"),
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
                children: /* @__PURE__ */ s.jsx(fn, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(cm, { size: 14 })
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
                  Ir,
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
                children: /* @__PURE__ */ s.jsx(xm, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(vh, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(ph, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ s.jsx(
          wh,
          {
            onClose: () => i("gallery"),
            onSearch: (y) => {
              t({ type: "SET_SEARCH_QUERY", payload: y }), i("search");
            }
          }
        ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : m.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: m.map((y) => {
                const v = e.settings["sidebar.thumbnail_size"] || 100, k = e.settings["gallery.view_mode"] === "grid_only", j = k && y.width && y.height ? Math.min(
                  v,
                  v * y.width / y.height
                ) + 10 : k ? v + 10 : "100%";
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    "data-image-id": y.id,
                    style: {
                      width: k ? "auto" : "100%",
                      flexShrink: 0,
                      display: k ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ s.jsx(
                      fh,
                      {
                        height: k ? v + 10 : Math.max(v, 150),
                        style: {
                          width: typeof j == "number" ? `${j}px` : j,
                          minWidth: typeof j == "number" ? `${j}px` : j,
                          display: k ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ s.jsx(dh, { image: y })
                      }
                    )
                  },
                  y.id
                );
              })
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: w,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                u >= c.length && !e.pagination.hasMore && m.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(Ch, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(jh, {}),
        /* @__PURE__ */ s.jsx(oh, {})
      ]
    }
  );
};
Uo.registerExtension({
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
const Mh = document.getElementById(
  "meld-gallery-style"
);
if (!Mh) {
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
let Jr = null, lt = null;
Uo.registerExtension({
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
      const n = await fd();
      Q.init(n.dev_mode), Q.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), Q.init(!1);
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
        ), (r = e.ui.meld) == null || r.refresh(), Q.log("Import completed.");
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
                  await dd({
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
            Q.log("render called", {
              el: n,
              galleryRoot: Jr,
              galleryContainer: lt
            }), lt || (Q.log("galleryContainer not found, creating new one"), lt = document.createElement("div"), lt.id = "meld-gallery-container", lt.style.height = "100%", lt.style.width = "100%", lt.style.display = "flex", lt.style.flexDirection = "column"), n.contains(lt) || (Q.log("Appending galleryContainer to el"), n.appendChild(lt)), Jr ? Q.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (Q.log("Creating new gallery root"), Jr = Zc(lt), Jr.render(
              fl.createElement(
                Vm,
                null,
                fl.createElement(Nh)
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
