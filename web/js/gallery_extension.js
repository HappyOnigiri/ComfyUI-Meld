import { api as X } from "/scripts/api.js";
import { app as Bo } from "/scripts/app.js";
function bd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ho = { exports: {} }, te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br = Symbol.for("react.element"), Ld = Symbol.for("react.portal"), Td = Symbol.for("react.fragment"), Pd = Symbol.for("react.strict_mode"), Dd = Symbol.for("react.profiler"), Rd = Symbol.for("react.provider"), zd = Symbol.for("react.context"), Ad = Symbol.for("react.forward_ref"), Od = Symbol.for("react.suspense"), Fd = Symbol.for("react.memo"), $d = Symbol.for("react.lazy"), ba = Symbol.iterator;
function Wd(e) {
  return e === null || typeof e != "object" ? null : (e = ba && e[ba] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ko = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Go = Object.assign, Yo = {};
function Un(e, t, n) {
  this.props = e, this.context = t, this.refs = Yo, this.updater = n || Ko;
}
Un.prototype.isReactComponent = {};
Un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xo() {
}
Xo.prototype = Un.prototype;
function bi(e, t, n) {
  this.props = e, this.context = t, this.refs = Yo, this.updater = n || Ko;
}
var Li = bi.prototype = new Xo();
Li.constructor = bi;
Go(Li, Un.prototype);
Li.isPureReactComponent = !0;
var La = Array.isArray, qo = Object.prototype.hasOwnProperty, Ti = { current: null }, Jo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zo(e, t, n) {
  var r, l = {}, i = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) qo.call(t, r) && !Jo.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: br, type: e, key: i, ref: a, props: l, _owner: Ti.current };
}
function Ud(e, t) {
  return { $$typeof: br, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Pi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === br;
}
function Vd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ta = /\/+/g;
function is(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Vd("" + e.key) : t.toString(36);
}
function tl(e, t, n, r, l) {
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
        case Ld:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + is(a, 0) : r, La(l) ? (n = "", e != null && (n = e.replace(Ta, "$&/") + "/"), tl(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Pi(l) && (l = Ud(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(Ta, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", La(e)) for (var o = 0; o < e.length; o++) {
    i = e[o];
    var u = r + is(i, o);
    a += tl(i, t, n, u, l);
  }
  else if (u = Wd(e), typeof u == "function") for (e = u.call(e), o = 0; !(i = e.next()).done; ) i = i.value, u = r + is(i, o++), a += tl(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Ar(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return tl(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Qd(e) {
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
var ze = { current: null }, nl = { transition: null }, Bd = { ReactCurrentDispatcher: ze, ReactCurrentBatchConfig: nl, ReactCurrentOwner: Ti };
function eu() {
  throw Error("act(...) is not supported in production builds of React.");
}
te.Children = { map: Ar, forEach: function(e, t, n) {
  Ar(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ar(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ar(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Pi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
te.Component = Un;
te.Fragment = Td;
te.Profiler = Dd;
te.PureComponent = bi;
te.StrictMode = Pd;
te.Suspense = Od;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bd;
te.act = eu;
te.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Go({}, e.props), l = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Ti.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) qo.call(t, u) && !Jo.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
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
te.createContext = function(e) {
  return e = { $$typeof: zd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Rd, _context: e }, e.Consumer = e;
};
te.createElement = Zo;
te.createFactory = function(e) {
  var t = Zo.bind(null, e);
  return t.type = e, t;
};
te.createRef = function() {
  return { current: null };
};
te.forwardRef = function(e) {
  return { $$typeof: Ad, render: e };
};
te.isValidElement = Pi;
te.lazy = function(e) {
  return { $$typeof: $d, _payload: { _status: -1, _result: e }, _init: Qd };
};
te.memo = function(e, t) {
  return { $$typeof: Fd, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function(e) {
  var t = nl.transition;
  nl.transition = {};
  try {
    e();
  } finally {
    nl.transition = t;
  }
};
te.unstable_act = eu;
te.useCallback = function(e, t) {
  return ze.current.useCallback(e, t);
};
te.useContext = function(e) {
  return ze.current.useContext(e);
};
te.useDebugValue = function() {
};
te.useDeferredValue = function(e) {
  return ze.current.useDeferredValue(e);
};
te.useEffect = function(e, t) {
  return ze.current.useEffect(e, t);
};
te.useId = function() {
  return ze.current.useId();
};
te.useImperativeHandle = function(e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
te.useInsertionEffect = function(e, t) {
  return ze.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function(e, t) {
  return ze.current.useLayoutEffect(e, t);
};
te.useMemo = function(e, t) {
  return ze.current.useMemo(e, t);
};
te.useReducer = function(e, t, n) {
  return ze.current.useReducer(e, t, n);
};
te.useRef = function(e) {
  return ze.current.useRef(e);
};
te.useState = function(e) {
  return ze.current.useState(e);
};
te.useSyncExternalStore = function(e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
te.useTransition = function() {
  return ze.current.useTransition();
};
te.version = "18.3.1";
Ho.exports = te;
var h = Ho.exports;
const ml = /* @__PURE__ */ bd(h);
var tu = { exports: {} }, Ge = {}, nu = { exports: {} }, ru = {};
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
  function t(b, R) {
    var D = b.length;
    b.push(R);
    e: for (; 0 < D; ) {
      var C = D - 1 >>> 1, Q = b[C];
      if (0 < l(Q, R)) b[C] = R, b[D] = Q, D = C;
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var R = b[0], D = b.pop();
    if (D !== R) {
      b[0] = D;
      e: for (var C = 0, Q = b.length, Z = Q >>> 1; C < Z; ) {
        var O = 2 * (C + 1) - 1, J = b[O], Y = O + 1, we = b[Y];
        if (0 > l(J, D)) Y < Q && 0 > l(we, J) ? (b[C] = we, b[Y] = D, C = Y) : (b[C] = J, b[O] = D, C = O);
        else if (Y < Q && 0 > l(we, D)) b[C] = we, b[Y] = D, C = Y;
        else break e;
      }
    }
    return R;
  }
  function l(b, R) {
    var D = b.sortIndex - R.sortIndex;
    return D !== 0 ? D : b.id - R.id;
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
  var u = [], c = [], m = 1, v = null, w = 3, x = !1, _ = !1, S = !1, j = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(b) {
    for (var R = n(c); R !== null; ) {
      if (R.callback === null) r(c);
      else if (R.startTime <= b) r(c), R.sortIndex = R.expirationTime, t(u, R);
      else break;
      R = n(c);
    }
  }
  function g(b) {
    if (S = !1, p(b), !_) if (n(u) !== null) _ = !0, L(y);
    else {
      var R = n(c);
      R !== null && H(g, R.startTime - b);
    }
  }
  function y(b, R) {
    _ = !1, S && (S = !1, d(T), T = -1), x = !0;
    var D = w;
    try {
      for (p(R), v = n(u); v !== null && (!(v.expirationTime > R) || b && !M()); ) {
        var C = v.callback;
        if (typeof C == "function") {
          v.callback = null, w = v.priorityLevel;
          var Q = C(v.expirationTime <= R);
          R = e.unstable_now(), typeof Q == "function" ? v.callback = Q : v === n(u) && r(u), p(R);
        } else r(u);
        v = n(u);
      }
      if (v !== null) var Z = !0;
      else {
        var O = n(c);
        O !== null && H(g, O.startTime - R), Z = !1;
      }
      return Z;
    } finally {
      v = null, w = D, x = !1;
    }
  }
  var N = !1, I = null, T = -1, A = 5, k = -1;
  function M() {
    return !(e.unstable_now() - k < A);
  }
  function F() {
    if (I !== null) {
      var b = e.unstable_now();
      k = b;
      var R = !0;
      try {
        R = I(!0, b);
      } finally {
        R ? B() : (N = !1, I = null);
      }
    } else N = !1;
  }
  var B;
  if (typeof f == "function") B = function() {
    f(F);
  };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(), W = E.port2;
    E.port1.onmessage = F, B = function() {
      W.postMessage(null);
    };
  } else B = function() {
    j(F, 0);
  };
  function L(b) {
    I = b, N || (N = !0, B());
  }
  function H(b, R) {
    T = j(function() {
      b(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    _ || x || (_ = !0, L(y));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < b ? Math.floor(1e3 / b) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(b) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = w;
    }
    var D = w;
    w = R;
    try {
      return b();
    } finally {
      w = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(b, R) {
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
    var D = w;
    w = b;
    try {
      return R();
    } finally {
      w = D;
    }
  }, e.unstable_scheduleCallback = function(b, R, D) {
    var C = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? C + D : C) : D = C, b) {
      case 1:
        var Q = -1;
        break;
      case 2:
        Q = 250;
        break;
      case 5:
        Q = 1073741823;
        break;
      case 4:
        Q = 1e4;
        break;
      default:
        Q = 5e3;
    }
    return Q = D + Q, b = { id: m++, callback: R, priorityLevel: b, startTime: D, expirationTime: Q, sortIndex: -1 }, D > C ? (b.sortIndex = D, t(c, b), n(u) === null && b === n(c) && (S ? (d(T), T = -1) : S = !0, H(g, D - C))) : (b.sortIndex = Q, t(u, b), _ || x || (_ = !0, L(y))), b;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(b) {
    var R = w;
    return function() {
      var D = w;
      w = R;
      try {
        return b.apply(this, arguments);
      } finally {
        w = D;
      }
    };
  };
})(ru);
nu.exports = ru;
var Hd = nu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd = h, Ke = Hd;
function P(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var lu = /* @__PURE__ */ new Set(), fr = {};
function un(e, t) {
  Pn(e, t), Pn(e + "Capture", t);
}
function Pn(e, t) {
  for (fr[e] = t, e = 0; e < t.length; e++) lu.add(t[e]);
}
var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ps = Object.prototype.hasOwnProperty, Gd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Pa = {}, Da = {};
function Yd(e) {
  return Ps.call(Da, e) ? !0 : Ps.call(Pa, e) ? !1 : Gd.test(e) ? Da[e] = !0 : (Pa[e] = !0, !1);
}
function Xd(e, t, n, r) {
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
function qd(e, t, n, r) {
  if (t === null || typeof t > "u" || Xd(e, t, n, r)) return !0;
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
function Ae(e, t, n, r, l, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ne[e] = new Ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ne[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ne[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ne[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ne[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ne[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ne[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ne[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ne[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Di = /[\-:]([a-z])/g;
function Ri(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Di,
    Ri
  );
  Ne[t] = new Ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Di, Ri);
  Ne[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Di, Ri);
  Ne[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ne[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ne[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zi(e, t, n, r) {
  var l = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (qd(t, n, l, r) && (n = null), r || l === null ? Yd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mt = Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Or = Symbol.for("react.element"), hn = Symbol.for("react.portal"), gn = Symbol.for("react.fragment"), Ai = Symbol.for("react.strict_mode"), Ds = Symbol.for("react.profiler"), su = Symbol.for("react.provider"), iu = Symbol.for("react.context"), Oi = Symbol.for("react.forward_ref"), Rs = Symbol.for("react.suspense"), zs = Symbol.for("react.suspense_list"), Fi = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), au = Symbol.for("react.offscreen"), Ra = Symbol.iterator;
function Bn(e) {
  return e === null || typeof e != "object" ? null : (e = Ra && e[Ra] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pe = Object.assign, as;
function Zn(e) {
  if (as === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    as = t && t[1] || "";
  }
  return `
` + as + e;
}
var os = !1;
function us(e, t) {
  if (!e || os) return "";
  os = !0;
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
    os = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Zn(e) : "";
}
function Jd(e) {
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
      return e = us(e.type, !1), e;
    case 11:
      return e = us(e.type.render, !1), e;
    case 1:
      return e = us(e.type, !0), e;
    default:
      return "";
  }
}
function As(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gn:
      return "Fragment";
    case hn:
      return "Portal";
    case Ds:
      return "Profiler";
    case Ai:
      return "StrictMode";
    case Rs:
      return "Suspense";
    case zs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case iu:
      return (e.displayName || "Context") + ".Consumer";
    case su:
      return (e._context.displayName || "Context") + ".Provider";
    case Oi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Fi:
      return t = e.displayName || null, t !== null ? t : As(e.type) || "Memo";
    case bt:
      t = e._payload, e = e._init;
      try {
        return As(e(t));
      } catch {
      }
  }
  return null;
}
function Zd(e) {
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
      return As(t);
    case 8:
      return t === Ai ? "StrictMode" : "Mode";
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
function Qt(e) {
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
function ou(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ef(e) {
  var t = ou(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Fr(e) {
  e._valueTracker || (e._valueTracker = ef(e));
}
function uu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ou(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function hl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Os(e, t) {
  var n = t.checked;
  return pe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function za(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Qt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function cu(e, t) {
  t = t.checked, t != null && zi(e, "checked", t, !1);
}
function Fs(e, t) {
  cu(e, t);
  var n = Qt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? $s(e, t.type, n) : t.hasOwnProperty("defaultValue") && $s(e, t.type, Qt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Aa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function $s(e, t, n) {
  (t !== "number" || hl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var er = Array.isArray;
function Nn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Qt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ws(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return pe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Oa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(P(92));
      if (er(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Qt(n) };
}
function du(e, t) {
  var n = Qt(t.value), r = Qt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Fa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function fu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Us(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? fu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var $r, pu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for ($r = $r || document.createElement("div"), $r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = $r.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, tf = ["Webkit", "ms", "Moz", "O"];
Object.keys(rr).forEach(function(e) {
  tf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), rr[t] = rr[e];
  });
});
function mu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || rr.hasOwnProperty(e) && rr[e] ? ("" + t).trim() : t + "px";
}
function hu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = mu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var nf = pe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Vs(e, t) {
  if (t) {
    if (nf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function Qs(e, t) {
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
var Bs = null;
function $i(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Hs = null, Mn = null, In = null;
function $a(e) {
  if (e = Pr(e)) {
    if (typeof Hs != "function") throw Error(P(280));
    var t = e.stateNode;
    t && (t = Ql(t), Hs(e.stateNode, e.type, t));
  }
}
function gu(e) {
  Mn ? In ? In.push(e) : In = [e] : Mn = e;
}
function yu() {
  if (Mn) {
    var e = Mn, t = In;
    if (In = Mn = null, $a(e), t) for (e = 0; e < t.length; e++) $a(t[e]);
  }
}
function vu(e, t) {
  return e(t);
}
function wu() {
}
var cs = !1;
function xu(e, t, n) {
  if (cs) return e(t, n);
  cs = !0;
  try {
    return vu(e, t, n);
  } finally {
    cs = !1, (Mn !== null || In !== null) && (wu(), yu());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ql(n);
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
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var Ks = !1;
if (jt) try {
  var Hn = {};
  Object.defineProperty(Hn, "passive", { get: function() {
    Ks = !0;
  } }), window.addEventListener("test", Hn, Hn), window.removeEventListener("test", Hn, Hn);
} catch {
  Ks = !1;
}
function rf(e, t, n, r, l, i, a, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var lr = !1, gl = null, yl = !1, Gs = null, lf = { onError: function(e) {
  lr = !0, gl = e;
} };
function sf(e, t, n, r, l, i, a, o, u) {
  lr = !1, gl = null, rf.apply(lf, arguments);
}
function af(e, t, n, r, l, i, a, o, u) {
  if (sf.apply(this, arguments), lr) {
    if (lr) {
      var c = gl;
      lr = !1, gl = null;
    } else throw Error(P(198));
    yl || (yl = !0, Gs = c);
  }
}
function cn(e) {
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
function _u(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Wa(e) {
  if (cn(e) !== e) throw Error(P(188));
}
function of(e) {
  var t = e.alternate;
  if (!t) {
    if (t = cn(e), t === null) throw Error(P(188));
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
        if (i === n) return Wa(l), e;
        if (i === r) return Wa(l), t;
        i = i.sibling;
      }
      throw Error(P(188));
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
        if (!a) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function ku(e) {
  return e = of(e), e !== null ? Su(e) : null;
}
function Su(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Su(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ju = Ke.unstable_scheduleCallback, Ua = Ke.unstable_cancelCallback, uf = Ke.unstable_shouldYield, cf = Ke.unstable_requestPaint, ge = Ke.unstable_now, df = Ke.unstable_getCurrentPriorityLevel, Wi = Ke.unstable_ImmediatePriority, Eu = Ke.unstable_UserBlockingPriority, vl = Ke.unstable_NormalPriority, ff = Ke.unstable_LowPriority, Cu = Ke.unstable_IdlePriority, $l = null, yt = null;
function pf(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function") try {
    yt.onCommitFiberRoot($l, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var dt = Math.clz32 ? Math.clz32 : gf, mf = Math.log, hf = Math.LN2;
function gf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (mf(e) / hf | 0) | 0;
}
var Wr = 64, Ur = 4194304;
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
function wl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? r = tr(o) : (i &= a, i !== 0 && (r = tr(i)));
  } else a = n & ~l, a !== 0 ? r = tr(a) : i !== 0 && (r = tr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - dt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function yf(e, t) {
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
function vf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - dt(i), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = yf(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o;
  }
}
function Ys(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Nu() {
  var e = Wr;
  return Wr <<= 1, !(Wr & 4194240) && (Wr = 64), e;
}
function ds(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Lr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - dt(t), e[t] = n;
}
function wf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - dt(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function Ui(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ie = 0;
function Mu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Iu, Vi, bu, Lu, Tu, Xs = !1, Vr = [], zt = null, At = null, Ot = null, hr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), Tt = [], xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Va(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zt = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Ot = null;
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
function Kn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Pr(t), t !== null && Vi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function _f(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return zt = Kn(zt, e, t, n, r, l), !0;
    case "dragenter":
      return At = Kn(At, e, t, n, r, l), !0;
    case "mouseover":
      return Ot = Kn(Ot, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return hr.set(i, Kn(hr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, gr.set(i, Kn(gr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Pu(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = _u(n), t !== null) {
          e.blockedOn = t, Tu(e.priority, function() {
            bu(n);
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
function rl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = qs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Bs = r, n.target.dispatchEvent(r), Bs = null;
    } else return t = Pr(n), t !== null && Vi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Qa(e, t, n) {
  rl(e) && n.delete(t);
}
function kf() {
  Xs = !1, zt !== null && rl(zt) && (zt = null), At !== null && rl(At) && (At = null), Ot !== null && rl(Ot) && (Ot = null), hr.forEach(Qa), gr.forEach(Qa);
}
function Gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Xs || (Xs = !0, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, kf)));
}
function yr(e) {
  function t(l) {
    return Gn(l, e);
  }
  if (0 < Vr.length) {
    Gn(Vr[0], e);
    for (var n = 1; n < Vr.length; n++) {
      var r = Vr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (zt !== null && Gn(zt, e), At !== null && Gn(At, e), Ot !== null && Gn(Ot, e), hr.forEach(t), gr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) Pu(n), n.blockedOn === null && Tt.shift();
}
var bn = Mt.ReactCurrentBatchConfig, xl = !0;
function Sf(e, t, n, r) {
  var l = ie, i = bn.transition;
  bn.transition = null;
  try {
    ie = 1, Qi(e, t, n, r);
  } finally {
    ie = l, bn.transition = i;
  }
}
function jf(e, t, n, r) {
  var l = ie, i = bn.transition;
  bn.transition = null;
  try {
    ie = 4, Qi(e, t, n, r);
  } finally {
    ie = l, bn.transition = i;
  }
}
function Qi(e, t, n, r) {
  if (xl) {
    var l = qs(e, t, n, r);
    if (l === null) _s(e, t, r, _l, n), Va(e, r);
    else if (_f(l, e, t, n, r)) r.stopPropagation();
    else if (Va(e, r), t & 4 && -1 < xf.indexOf(e)) {
      for (; l !== null; ) {
        var i = Pr(l);
        if (i !== null && Iu(i), i = qs(e, t, n, r), i === null && _s(e, t, r, _l, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else _s(e, t, r, null, n);
  }
}
var _l = null;
function qs(e, t, n, r) {
  if (_l = null, e = $i(r), e = Jt(e), e !== null) if (t = cn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = _u(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return _l = e, null;
}
function Du(e) {
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
      switch (df()) {
        case Wi:
          return 1;
        case Eu:
          return 4;
        case vl:
        case ff:
          return 16;
        case Cu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null, Bi = null, ll = null;
function Ru() {
  if (ll) return ll;
  var e, t = Bi, n = t.length, r, l = "value" in Dt ? Dt.value : Dt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[i - r]; r++) ;
  return ll = l.slice(e, 1 < r ? 1 - r : void 0);
}
function sl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Qr() {
  return !0;
}
function Ba() {
  return !1;
}
function Ye(e) {
  function t(n, r, l, i, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Qr : Ba, this.isPropagationStopped = Ba, this;
  }
  return pe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Qr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Qr);
  }, persist: function() {
  }, isPersistent: Qr }), t;
}
var Vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Hi = Ye(Vn), Tr = pe({}, Vn, { view: 0, detail: 0 }), Ef = Ye(Tr), fs, ps, Yn, Wl = pe({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ki, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (fs = e.screenX - Yn.screenX, ps = e.screenY - Yn.screenY) : ps = fs = 0, Yn = e), fs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ps;
} }), Ha = Ye(Wl), Cf = pe({}, Wl, { dataTransfer: 0 }), Nf = Ye(Cf), Mf = pe({}, Tr, { relatedTarget: 0 }), ms = Ye(Mf), If = pe({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bf = Ye(If), Lf = pe({}, Vn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Tf = Ye(Lf), Pf = pe({}, Vn, { data: 0 }), Ka = Ye(Pf), Df = {
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
}, Rf = {
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
}, zf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Af(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zf[e]) ? !!t[e] : !1;
}
function Ki() {
  return Af;
}
var Of = pe({}, Tr, { key: function(e) {
  if (e.key) {
    var t = Df[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = sl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ki, charCode: function(e) {
  return e.type === "keypress" ? sl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ff = Ye(Of), $f = pe({}, Wl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ga = Ye($f), Wf = pe({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ki }), Uf = Ye(Wf), Vf = pe({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Qf = Ye(Vf), Bf = pe({}, Wl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Hf = Ye(Bf), Kf = [9, 13, 27, 32], Gi = jt && "CompositionEvent" in window, sr = null;
jt && "documentMode" in document && (sr = document.documentMode);
var Gf = jt && "TextEvent" in window && !sr, zu = jt && (!Gi || sr && 8 < sr && 11 >= sr), Ya = " ", Xa = !1;
function Au(e, t) {
  switch (e) {
    case "keyup":
      return Kf.indexOf(t.keyCode) !== -1;
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
function Ou(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yn = !1;
function Yf(e, t) {
  switch (e) {
    case "compositionend":
      return Ou(t);
    case "keypress":
      return t.which !== 32 ? null : (Xa = !0, Ya);
    case "textInput":
      return e = t.data, e === Ya && Xa ? null : e;
    default:
      return null;
  }
}
function Xf(e, t) {
  if (yn) return e === "compositionend" || !Gi && Au(e, t) ? (e = Ru(), ll = Bi = Dt = null, yn = !1, e) : null;
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
      return zu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function qa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qf[e.type] : t === "textarea";
}
function Fu(e, t, n, r) {
  gu(r), t = kl(t, "onChange"), 0 < t.length && (n = new Hi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ir = null, vr = null;
function Jf(e) {
  Xu(e, 0);
}
function Ul(e) {
  var t = xn(e);
  if (uu(t)) return e;
}
function Zf(e, t) {
  if (e === "change") return t;
}
var $u = !1;
if (jt) {
  var hs;
  if (jt) {
    var gs = "oninput" in document;
    if (!gs) {
      var Ja = document.createElement("div");
      Ja.setAttribute("oninput", "return;"), gs = typeof Ja.oninput == "function";
    }
    hs = gs;
  } else hs = !1;
  $u = hs && (!document.documentMode || 9 < document.documentMode);
}
function Za() {
  ir && (ir.detachEvent("onpropertychange", Wu), vr = ir = null);
}
function Wu(e) {
  if (e.propertyName === "value" && Ul(vr)) {
    var t = [];
    Fu(t, vr, e, $i(e)), xu(Jf, t);
  }
}
function ep(e, t, n) {
  e === "focusin" ? (Za(), ir = t, vr = n, ir.attachEvent("onpropertychange", Wu)) : e === "focusout" && Za();
}
function tp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ul(vr);
}
function np(e, t) {
  if (e === "click") return Ul(t);
}
function rp(e, t) {
  if (e === "input" || e === "change") return Ul(t);
}
function lp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pt = typeof Object.is == "function" ? Object.is : lp;
function wr(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ps.call(t, l) || !pt(e[l], t[l])) return !1;
  }
  return !0;
}
function eo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function to(e, t) {
  var n = eo(e);
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
    n = eo(n);
  }
}
function Uu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Uu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Vu() {
  for (var e = window, t = hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = hl(e.document);
  }
  return t;
}
function Yi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function sp(e) {
  var t = Vu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Uu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Yi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = to(n, i);
        var a = to(
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
var ip = jt && "documentMode" in document && 11 >= document.documentMode, vn = null, Js = null, ar = null, Zs = !1;
function no(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zs || vn == null || vn !== hl(r) || (r = vn, "selectionStart" in r && Yi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ar && wr(ar, r) || (ar = r, r = kl(Js, "onSelect"), 0 < r.length && (t = new Hi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vn)));
}
function Br(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var wn = { animationend: Br("Animation", "AnimationEnd"), animationiteration: Br("Animation", "AnimationIteration"), animationstart: Br("Animation", "AnimationStart"), transitionend: Br("Transition", "TransitionEnd") }, ys = {}, Qu = {};
jt && (Qu = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
function Vl(e) {
  if (ys[e]) return ys[e];
  if (!wn[e]) return e;
  var t = wn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Qu) return ys[e] = t[n];
  return e;
}
var Bu = Vl("animationend"), Hu = Vl("animationiteration"), Ku = Vl("animationstart"), Gu = Vl("transitionend"), Yu = /* @__PURE__ */ new Map(), ro = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ht(e, t) {
  Yu.set(e, t), un(t, [e]);
}
for (var vs = 0; vs < ro.length; vs++) {
  var ws = ro[vs], ap = ws.toLowerCase(), op = ws[0].toUpperCase() + ws.slice(1);
  Ht(ap, "on" + op);
}
Ht(Bu, "onAnimationEnd");
Ht(Hu, "onAnimationIteration");
Ht(Ku, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(Gu, "onTransitionEnd");
Pn("onMouseEnter", ["mouseout", "mouseover"]);
Pn("onMouseLeave", ["mouseout", "mouseover"]);
Pn("onPointerEnter", ["pointerout", "pointerover"]);
Pn("onPointerLeave", ["pointerout", "pointerover"]);
un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
un("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), up = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
function lo(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, af(r, t, void 0, e), e.currentTarget = null;
}
function Xu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
        lo(l, o, c), i = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, c = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
        lo(l, o, c), i = u;
      }
    }
  }
  if (yl) throw e = Gs, yl = !1, Gs = null, e;
}
function oe(e, t) {
  var n = t[li];
  n === void 0 && (n = t[li] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (qu(t, e, 2, !1), n.add(r));
}
function xs(e, t, n) {
  var r = 0;
  t && (r |= 4), qu(n, e, r, t);
}
var Hr = "_reactListening" + Math.random().toString(36).slice(2);
function xr(e) {
  if (!e[Hr]) {
    e[Hr] = !0, lu.forEach(function(n) {
      n !== "selectionchange" && (up.has(n) || xs(n, !1, e), xs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hr] || (t[Hr] = !0, xs("selectionchange", !1, t));
  }
}
function qu(e, t, n, r) {
  switch (Du(t)) {
    case 1:
      var l = Sf;
      break;
    case 4:
      l = jf;
      break;
    default:
      l = Qi;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ks || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function _s(e, t, n, r, l) {
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
        if (a = Jt(o), a === null) return;
        if (u = a.tag, u === 5 || u === 6) {
          r = i = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  xu(function() {
    var c = i, m = $i(n), v = [];
    e: {
      var w = Yu.get(e);
      if (w !== void 0) {
        var x = Hi, _ = e;
        switch (e) {
          case "keypress":
            if (sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Ff;
            break;
          case "focusin":
            _ = "focus", x = ms;
            break;
          case "focusout":
            _ = "blur", x = ms;
            break;
          case "beforeblur":
          case "afterblur":
            x = ms;
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
            x = Ha;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Nf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Uf;
            break;
          case Bu:
          case Hu:
          case Ku:
            x = bf;
            break;
          case Gu:
            x = Qf;
            break;
          case "scroll":
            x = Ef;
            break;
          case "wheel":
            x = Hf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Tf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ga;
        }
        var S = (t & 4) !== 0, j = !S && e === "scroll", d = S ? w !== null ? w + "Capture" : null : w;
        S = [];
        for (var f = c, p; f !== null; ) {
          p = f;
          var g = p.stateNode;
          if (p.tag === 5 && g !== null && (p = g, d !== null && (g = mr(f, d), g != null && S.push(_r(f, g, p)))), j) break;
          f = f.return;
        }
        0 < S.length && (w = new x(w, _, null, n, m), v.push({ event: w, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", w && n !== Bs && (_ = n.relatedTarget || n.fromElement) && (Jt(_) || _[Et])) break e;
        if ((x || w) && (w = m.window === m ? m : (w = m.ownerDocument) ? w.defaultView || w.parentWindow : window, x ? (_ = n.relatedTarget || n.toElement, x = c, _ = _ ? Jt(_) : null, _ !== null && (j = cn(_), _ !== j || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (x = null, _ = c), x !== _)) {
          if (S = Ha, g = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (S = Ga, g = "onPointerLeave", d = "onPointerEnter", f = "pointer"), j = x == null ? w : xn(x), p = _ == null ? w : xn(_), w = new S(g, f + "leave", x, n, m), w.target = j, w.relatedTarget = p, g = null, Jt(m) === c && (S = new S(d, f + "enter", _, n, m), S.target = p, S.relatedTarget = j, g = S), j = g, x && _) t: {
            for (S = x, d = _, f = 0, p = S; p; p = mn(p)) f++;
            for (p = 0, g = d; g; g = mn(g)) p++;
            for (; 0 < f - p; ) S = mn(S), f--;
            for (; 0 < p - f; ) d = mn(d), p--;
            for (; f--; ) {
              if (S === d || d !== null && S === d.alternate) break t;
              S = mn(S), d = mn(d);
            }
            S = null;
          }
          else S = null;
          x !== null && so(v, w, x, S, !1), _ !== null && j !== null && so(v, j, _, S, !0);
        }
      }
      e: {
        if (w = c ? xn(c) : window, x = w.nodeName && w.nodeName.toLowerCase(), x === "select" || x === "input" && w.type === "file") var y = Zf;
        else if (qa(w)) if ($u) y = rp;
        else {
          y = tp;
          var N = ep;
        }
        else (x = w.nodeName) && x.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (y = np);
        if (y && (y = y(e, c))) {
          Fu(v, y, n, m);
          break e;
        }
        N && N(e, w, c), e === "focusout" && (N = w._wrapperState) && N.controlled && w.type === "number" && $s(w, "number", w.value);
      }
      switch (N = c ? xn(c) : window, e) {
        case "focusin":
          (qa(N) || N.contentEditable === "true") && (vn = N, Js = c, ar = null);
          break;
        case "focusout":
          ar = Js = vn = null;
          break;
        case "mousedown":
          Zs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Zs = !1, no(v, n, m);
          break;
        case "selectionchange":
          if (ip) break;
        case "keydown":
        case "keyup":
          no(v, n, m);
      }
      var I;
      if (Gi) e: {
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
      else yn ? Au(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (zu && n.locale !== "ko" && (yn || T !== "onCompositionStart" ? T === "onCompositionEnd" && yn && (I = Ru()) : (Dt = m, Bi = "value" in Dt ? Dt.value : Dt.textContent, yn = !0)), N = kl(c, T), 0 < N.length && (T = new Ka(T, e, null, n, m), v.push({ event: T, listeners: N }), I ? T.data = I : (I = Ou(n), I !== null && (T.data = I)))), (I = Gf ? Yf(e, n) : Xf(e, n)) && (c = kl(c, "onBeforeInput"), 0 < c.length && (m = new Ka("onBeforeInput", "beforeinput", null, n, m), v.push({ event: m, listeners: c }), m.data = I));
    }
    Xu(v, t);
  });
}
function _r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function kl(e, t) {
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
function so(e, t, n, r, l) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = mr(n, i), u != null && a.unshift(_r(n, u, o))) : l || (u = mr(n, i), u != null && a.push(_r(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var cp = /\r\n?/g, dp = /\u0000|\uFFFD/g;
function io(e) {
  return (typeof e == "string" ? e : "" + e).replace(cp, `
`).replace(dp, "");
}
function Kr(e, t, n) {
  if (t = io(t), io(e) !== t && n) throw Error(P(425));
}
function Sl() {
}
var ei = null, ti = null;
function ni(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ri = typeof setTimeout == "function" ? setTimeout : void 0, fp = typeof clearTimeout == "function" ? clearTimeout : void 0, ao = typeof Promise == "function" ? Promise : void 0, pp = typeof queueMicrotask == "function" ? queueMicrotask : typeof ao < "u" ? function(e) {
  return ao.resolve(null).then(e).catch(mp);
} : ri;
function mp(e) {
  setTimeout(function() {
    throw e;
  });
}
function ks(e, t) {
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
function Ft(e) {
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
function oo(e) {
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
var Qn = Math.random().toString(36).slice(2), gt = "__reactFiber$" + Qn, kr = "__reactProps$" + Qn, Et = "__reactContainer$" + Qn, li = "__reactEvents$" + Qn, hp = "__reactListeners$" + Qn, gp = "__reactHandles$" + Qn;
function Jt(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Et] || n[gt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = oo(e); e !== null; ) {
        if (n = e[gt]) return n;
        e = oo(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Pr(e) {
  return e = e[gt] || e[Et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Ql(e) {
  return e[kr] || null;
}
var si = [], _n = -1;
function Kt(e) {
  return { current: e };
}
function ue(e) {
  0 > _n || (e.current = si[_n], si[_n] = null, _n--);
}
function ae(e, t) {
  _n++, si[_n] = e.current, e.current = t;
}
var Bt = {}, Pe = Kt(Bt), $e = Kt(!1), rn = Bt;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function We(e) {
  return e = e.childContextTypes, e != null;
}
function jl() {
  ue($e), ue(Pe);
}
function uo(e, t, n) {
  if (Pe.current !== Bt) throw Error(P(168));
  ae(Pe, t), ae($e, n);
}
function Ju(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(P(108, Zd(e) || "Unknown", l));
  return pe({}, n, r);
}
function El(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Bt, rn = Pe.current, ae(Pe, e), ae($e, $e.current), !0;
}
function co(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n ? (e = Ju(e, t, rn), r.__reactInternalMemoizedMergedChildContext = e, ue($e), ue(Pe), ae(Pe, e)) : ue($e), ae($e, n);
}
var xt = null, Bl = !1, Ss = !1;
function Zu(e) {
  xt === null ? xt = [e] : xt.push(e);
}
function yp(e) {
  Bl = !0, Zu(e);
}
function Gt() {
  if (!Ss && xt !== null) {
    Ss = !0;
    var e = 0, t = ie;
    try {
      var n = xt;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      xt = null, Bl = !1;
    } catch (l) {
      throw xt !== null && (xt = xt.slice(e + 1)), ju(Wi, Gt), l;
    } finally {
      ie = t, Ss = !1;
    }
  }
  return null;
}
var kn = [], Sn = 0, Cl = null, Nl = 0, Xe = [], qe = 0, ln = null, _t = 1, kt = "";
function Xt(e, t) {
  kn[Sn++] = Nl, kn[Sn++] = Cl, Cl = e, Nl = t;
}
function ec(e, t, n) {
  Xe[qe++] = _t, Xe[qe++] = kt, Xe[qe++] = ln, ln = e;
  var r = _t;
  e = kt;
  var l = 32 - dt(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - dt(t) + l;
  if (30 < i) {
    var a = l - l % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, _t = 1 << 32 - dt(t) + l | n << l | r, kt = i + e;
  } else _t = 1 << i | n << l | r, kt = e;
}
function Xi(e) {
  e.return !== null && (Xt(e, 1), ec(e, 1, 0));
}
function qi(e) {
  for (; e === Cl; ) Cl = kn[--Sn], kn[Sn] = null, Nl = kn[--Sn], kn[Sn] = null;
  for (; e === ln; ) ln = Xe[--qe], Xe[qe] = null, kt = Xe[--qe], Xe[qe] = null, _t = Xe[--qe], Xe[qe] = null;
}
var Be = null, Qe = null, ce = !1, ut = null;
function tc(e, t) {
  var n = Je(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function fo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Be = e, Qe = Ft(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Be = e, Qe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? { id: _t, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Be = e, Qe = null, !0) : !1;
    default:
      return !1;
  }
}
function ii(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ai(e) {
  if (ce) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!fo(e, t)) {
        if (ii(e)) throw Error(P(418));
        t = Ft(n.nextSibling);
        var r = Be;
        t && fo(e, t) ? tc(r, n) : (e.flags = e.flags & -4097 | 2, ce = !1, Be = e);
      }
    } else {
      if (ii(e)) throw Error(P(418));
      e.flags = e.flags & -4097 | 2, ce = !1, Be = e;
    }
  }
}
function po(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Be = e;
}
function Gr(e) {
  if (e !== Be) return !1;
  if (!ce) return po(e), ce = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ni(e.type, e.memoizedProps)), t && (t = Qe)) {
    if (ii(e)) throw nc(), Error(P(418));
    for (; t; ) tc(e, t), t = Ft(t.nextSibling);
  }
  if (po(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = Be ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function nc() {
  for (var e = Qe; e; ) e = Ft(e.nextSibling);
}
function Rn() {
  Qe = Be = null, ce = !1;
}
function Ji(e) {
  ut === null ? ut = [e] : ut.push(e);
}
var vp = Mt.ReactCurrentBatchConfig;
function Xn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var o = l.refs;
        a === null ? delete o[i] : o[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Yr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function mo(e) {
  var t = e._init;
  return t(e._payload);
}
function rc(e) {
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
    return d = Vt(d, f), d.index = 0, d.sibling = null, d;
  }
  function i(d, f, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < f ? (d.flags |= 2, f) : p) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function a(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function o(d, f, p, g) {
    return f === null || f.tag !== 6 ? (f = bs(p, d.mode, g), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function u(d, f, p, g) {
    var y = p.type;
    return y === gn ? m(d, f, p.props.children, g, p.key) : f !== null && (f.elementType === y || typeof y == "object" && y !== null && y.$$typeof === bt && mo(y) === f.type) ? (g = l(f, p.props), g.ref = Xn(d, f, p), g.return = d, g) : (g = fl(p.type, p.key, p.props, null, d.mode, g), g.ref = Xn(d, f, p), g.return = d, g);
  }
  function c(d, f, p, g) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = Ls(p, d.mode, g), f.return = d, f) : (f = l(f, p.children || []), f.return = d, f);
  }
  function m(d, f, p, g, y) {
    return f === null || f.tag !== 7 ? (f = nn(p, d.mode, g, y), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function v(d, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = bs("" + f, d.mode, p), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Or:
          return p = fl(f.type, f.key, f.props, null, d.mode, p), p.ref = Xn(d, null, f), p.return = d, p;
        case hn:
          return f = Ls(f, d.mode, p), f.return = d, f;
        case bt:
          var g = f._init;
          return v(d, g(f._payload), p);
      }
      if (er(f) || Bn(f)) return f = nn(f, d.mode, p, null), f.return = d, f;
      Yr(d, f);
    }
    return null;
  }
  function w(d, f, p, g) {
    var y = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return y !== null ? null : o(d, f, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Or:
          return p.key === y ? u(d, f, p, g) : null;
        case hn:
          return p.key === y ? c(d, f, p, g) : null;
        case bt:
          return y = p._init, w(
            d,
            f,
            y(p._payload),
            g
          );
      }
      if (er(p) || Bn(p)) return y !== null ? null : m(d, f, p, g, null);
      Yr(d, p);
    }
    return null;
  }
  function x(d, f, p, g, y) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return d = d.get(p) || null, o(f, d, "" + g, y);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Or:
          return d = d.get(g.key === null ? p : g.key) || null, u(f, d, g, y);
        case hn:
          return d = d.get(g.key === null ? p : g.key) || null, c(f, d, g, y);
        case bt:
          var N = g._init;
          return x(d, f, p, N(g._payload), y);
      }
      if (er(g) || Bn(g)) return d = d.get(p) || null, m(f, d, g, y, null);
      Yr(f, g);
    }
    return null;
  }
  function _(d, f, p, g) {
    for (var y = null, N = null, I = f, T = f = 0, A = null; I !== null && T < p.length; T++) {
      I.index > T ? (A = I, I = null) : A = I.sibling;
      var k = w(d, I, p[T], g);
      if (k === null) {
        I === null && (I = A);
        break;
      }
      e && I && k.alternate === null && t(d, I), f = i(k, f, T), N === null ? y = k : N.sibling = k, N = k, I = A;
    }
    if (T === p.length) return n(d, I), ce && Xt(d, T), y;
    if (I === null) {
      for (; T < p.length; T++) I = v(d, p[T], g), I !== null && (f = i(I, f, T), N === null ? y = I : N.sibling = I, N = I);
      return ce && Xt(d, T), y;
    }
    for (I = r(d, I); T < p.length; T++) A = x(I, d, T, p[T], g), A !== null && (e && A.alternate !== null && I.delete(A.key === null ? T : A.key), f = i(A, f, T), N === null ? y = A : N.sibling = A, N = A);
    return e && I.forEach(function(M) {
      return t(d, M);
    }), ce && Xt(d, T), y;
  }
  function S(d, f, p, g) {
    var y = Bn(p);
    if (typeof y != "function") throw Error(P(150));
    if (p = y.call(p), p == null) throw Error(P(151));
    for (var N = y = null, I = f, T = f = 0, A = null, k = p.next(); I !== null && !k.done; T++, k = p.next()) {
      I.index > T ? (A = I, I = null) : A = I.sibling;
      var M = w(d, I, k.value, g);
      if (M === null) {
        I === null && (I = A);
        break;
      }
      e && I && M.alternate === null && t(d, I), f = i(M, f, T), N === null ? y = M : N.sibling = M, N = M, I = A;
    }
    if (k.done) return n(
      d,
      I
    ), ce && Xt(d, T), y;
    if (I === null) {
      for (; !k.done; T++, k = p.next()) k = v(d, k.value, g), k !== null && (f = i(k, f, T), N === null ? y = k : N.sibling = k, N = k);
      return ce && Xt(d, T), y;
    }
    for (I = r(d, I); !k.done; T++, k = p.next()) k = x(I, d, T, k.value, g), k !== null && (e && k.alternate !== null && I.delete(k.key === null ? T : k.key), f = i(k, f, T), N === null ? y = k : N.sibling = k, N = k);
    return e && I.forEach(function(F) {
      return t(d, F);
    }), ce && Xt(d, T), y;
  }
  function j(d, f, p, g) {
    if (typeof p == "object" && p !== null && p.type === gn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Or:
          e: {
            for (var y = p.key, N = f; N !== null; ) {
              if (N.key === y) {
                if (y = p.type, y === gn) {
                  if (N.tag === 7) {
                    n(d, N.sibling), f = l(N, p.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (N.elementType === y || typeof y == "object" && y !== null && y.$$typeof === bt && mo(y) === N.type) {
                  n(d, N.sibling), f = l(N, p.props), f.ref = Xn(d, N, p), f.return = d, d = f;
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            p.type === gn ? (f = nn(p.props.children, d.mode, g, p.key), f.return = d, d = f) : (g = fl(p.type, p.key, p.props, null, d.mode, g), g.ref = Xn(d, f, p), g.return = d, d = g);
          }
          return a(d);
        case hn:
          e: {
            for (N = p.key; f !== null; ) {
              if (f.key === N) if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                n(d, f.sibling), f = l(f, p.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = Ls(p, d.mode, g), f.return = d, d = f;
          }
          return a(d);
        case bt:
          return N = p._init, j(d, f, N(p._payload), g);
      }
      if (er(p)) return _(d, f, p, g);
      if (Bn(p)) return S(d, f, p, g);
      Yr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, p), f.return = d, d = f) : (n(d, f), f = bs(p, d.mode, g), f.return = d, d = f), a(d)) : n(d, f);
  }
  return j;
}
var zn = rc(!0), lc = rc(!1), Ml = Kt(null), Il = null, jn = null, Zi = null;
function ea() {
  Zi = jn = Il = null;
}
function ta(e) {
  var t = Ml.current;
  ue(Ml), e._currentValue = t;
}
function oi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Ln(e, t) {
  Il = e, Zi = jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function et(e) {
  var t = e._currentValue;
  if (Zi !== e) if (e = { context: e, memoizedValue: t, next: null }, jn === null) {
    if (Il === null) throw Error(P(308));
    jn = e, Il.dependencies = { lanes: 0, firstContext: e };
  } else jn = jn.next = e;
  return t;
}
var Zt = null;
function na(e) {
  Zt === null ? Zt = [e] : Zt.push(e);
}
function sc(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, na(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ct(e, r);
}
function Ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function ra(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ic(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function St(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function $t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, se & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ct(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, na(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ct(e, n);
}
function il(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ui(e, n);
  }
}
function ho(e, t) {
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
function bl(e, t, n, r) {
  var l = e.updateQueue;
  Lt = !1;
  var i = l.firstBaseUpdate, a = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, c = u.next;
    u.next = null, a === null ? i = c : a.next = c, a = u;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, o = m.lastBaseUpdate, o !== a && (o === null ? m.firstBaseUpdate = c : o.next = c, m.lastBaseUpdate = u));
  }
  if (i !== null) {
    var v = l.baseState;
    a = 0, m = c = u = null, o = i;
    do {
      var w = o.lane, x = o.eventTime;
      if ((r & w) === w) {
        m !== null && (m = m.next = {
          eventTime: x,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var _ = e, S = o;
          switch (w = t, x = n, S.tag) {
            case 1:
              if (_ = S.payload, typeof _ == "function") {
                v = _.call(x, v, w);
                break e;
              }
              v = _;
              break e;
            case 3:
              _.flags = _.flags & -65537 | 128;
            case 0:
              if (_ = S.payload, w = typeof _ == "function" ? _.call(x, v, w) : _, w == null) break e;
              v = pe({}, v, w);
              break e;
            case 2:
              Lt = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, w = l.effects, w === null ? l.effects = [o] : w.push(o));
      } else x = { eventTime: x, lane: w, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, m === null ? (c = m = x, u = v) : m = m.next = x, a |= w;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        w = o, o = w.next, w.next = null, l.lastBaseUpdate = w, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (u = v), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    an |= a, e.lanes = a, e.memoizedState = v;
  }
}
function go(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(P(191, l));
      l.call(r);
    }
  }
}
var Dr = {}, vt = Kt(Dr), Sr = Kt(Dr), jr = Kt(Dr);
function en(e) {
  if (e === Dr) throw Error(P(174));
  return e;
}
function la(e, t) {
  switch (ae(jr, t), ae(Sr, e), ae(vt, Dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Us(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Us(t, e);
  }
  ue(vt), ae(vt, t);
}
function An() {
  ue(vt), ue(Sr), ue(jr);
}
function ac(e) {
  en(jr.current);
  var t = en(vt.current), n = Us(t, e.type);
  t !== n && (ae(Sr, e), ae(vt, n));
}
function sa(e) {
  Sr.current === e && (ue(vt), ue(Sr));
}
var de = Kt(0);
function Ll(e) {
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
var js = [];
function ia() {
  for (var e = 0; e < js.length; e++) js[e]._workInProgressVersionPrimary = null;
  js.length = 0;
}
var al = Mt.ReactCurrentDispatcher, Es = Mt.ReactCurrentBatchConfig, sn = 0, fe = null, xe = null, Se = null, Tl = !1, or = !1, Er = 0, wp = 0;
function Ie() {
  throw Error(P(321));
}
function aa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
  return !0;
}
function oa(e, t, n, r, l, i) {
  if (sn = i, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, al.current = e === null || e.memoizedState === null ? Sp : jp, e = n(r, l), or) {
    i = 0;
    do {
      if (or = !1, Er = 0, 25 <= i) throw Error(P(301));
      i += 1, Se = xe = null, t.updateQueue = null, al.current = Ep, e = n(r, l);
    } while (or);
  }
  if (al.current = Pl, t = xe !== null && xe.next !== null, sn = 0, Se = xe = fe = null, Tl = !1, t) throw Error(P(300));
  return e;
}
function ua() {
  var e = Er !== 0;
  return Er = 0, e;
}
function ht() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Se === null ? fe.memoizedState = Se = e : Se = Se.next = e, Se;
}
function tt() {
  if (xe === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = Se === null ? fe.memoizedState : Se.next;
  if (t !== null) Se = t, xe = e;
  else {
    if (e === null) throw Error(P(310));
    xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, Se === null ? fe.memoizedState = Se = e : Se = Se.next = e;
  }
  return Se;
}
function Cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cs(e) {
  var t = tt(), n = t.queue;
  if (n === null) throw Error(P(311));
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
      if ((sn & m) === m) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var v = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = v, a = r) : u = u.next = v, fe.lanes |= m, an |= m;
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? a = r : u.next = o, pt(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, fe.lanes |= i, an |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ns(e) {
  var t = tt(), n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = l = l.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== l);
    pt(i, t.memoizedState) || (Fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function oc() {
}
function uc(e, t) {
  var n = fe, r = tt(), l = t(), i = !pt(r.memoizedState, l);
  if (i && (r.memoizedState = l, Fe = !0), r = r.queue, ca(fc.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Se !== null && Se.memoizedState.tag & 1) {
    if (n.flags |= 2048, Nr(9, dc.bind(null, n, r, l, t), void 0, null), je === null) throw Error(P(349));
    sn & 30 || cc(n, t, l);
  }
  return l;
}
function cc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function dc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, pc(t) && mc(e);
}
function fc(e, t, n) {
  return n(function() {
    pc(t) && mc(e);
  });
}
function pc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function mc(e) {
  var t = Ct(e, 1);
  t !== null && ft(t, e, 1, -1);
}
function yo(e) {
  var t = ht();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = kp.bind(null, fe, e), [t.memoizedState, e];
}
function Nr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function hc() {
  return tt().memoizedState;
}
function ol(e, t, n, r) {
  var l = ht();
  fe.flags |= e, l.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Hl(e, t, n, r) {
  var l = tt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var a = xe.memoizedState;
    if (i = a.destroy, r !== null && aa(r, a.deps)) {
      l.memoizedState = Nr(t, n, i, r);
      return;
    }
  }
  fe.flags |= e, l.memoizedState = Nr(1 | t, n, i, r);
}
function vo(e, t) {
  return ol(8390656, 8, e, t);
}
function ca(e, t) {
  return Hl(2048, 8, e, t);
}
function gc(e, t) {
  return Hl(4, 2, e, t);
}
function yc(e, t) {
  return Hl(4, 4, e, t);
}
function vc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function wc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hl(4, 4, vc.bind(null, t, e), n);
}
function da() {
}
function xc(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && aa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function _c(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && aa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function kc(e, t, n) {
  return sn & 21 ? (pt(n, t) || (n = Nu(), fe.lanes |= n, an |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function xp(e, t) {
  var n = ie;
  ie = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Es.transition;
  Es.transition = {};
  try {
    e(!1), t();
  } finally {
    ie = n, Es.transition = r;
  }
}
function Sc() {
  return tt().memoizedState;
}
function _p(e, t, n) {
  var r = Ut(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, jc(e)) Ec(t, n);
  else if (n = sc(e, t, n, r), n !== null) {
    var l = Re();
    ft(n, e, r, l), Cc(n, t, r);
  }
}
function kp(e, t, n) {
  var r = Ut(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jc(e)) Ec(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var a = t.lastRenderedState, o = i(a, n);
      if (l.hasEagerState = !0, l.eagerState = o, pt(o, a)) {
        var u = t.interleaved;
        u === null ? (l.next = l, na(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = sc(e, t, l, r), n !== null && (l = Re(), ft(n, e, r, l), Cc(n, t, r));
  }
}
function jc(e) {
  var t = e.alternate;
  return e === fe || t !== null && t === fe;
}
function Ec(e, t) {
  or = Tl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Cc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ui(e, n);
  }
}
var Pl = { readContext: et, useCallback: Ie, useContext: Ie, useEffect: Ie, useImperativeHandle: Ie, useInsertionEffect: Ie, useLayoutEffect: Ie, useMemo: Ie, useReducer: Ie, useRef: Ie, useState: Ie, useDebugValue: Ie, useDeferredValue: Ie, useTransition: Ie, useMutableSource: Ie, useSyncExternalStore: Ie, useId: Ie, unstable_isNewReconciler: !1 }, Sp = { readContext: et, useCallback: function(e, t) {
  return ht().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: et, useEffect: vo, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ol(
    4194308,
    4,
    vc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ol(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ol(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ht();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ht();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = _p.bind(null, fe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ht();
  return e = { current: e }, t.memoizedState = e;
}, useState: yo, useDebugValue: da, useDeferredValue: function(e) {
  return ht().memoizedState = e;
}, useTransition: function() {
  var e = yo(!1), t = e[0];
  return e = xp.bind(null, e[1]), ht().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = fe, l = ht();
  if (ce) {
    if (n === void 0) throw Error(P(407));
    n = n();
  } else {
    if (n = t(), je === null) throw Error(P(349));
    sn & 30 || cc(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, vo(fc.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Nr(9, dc.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = ht(), t = je.identifierPrefix;
  if (ce) {
    var n = kt, r = _t;
    n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Er++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = wp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, jp = {
  readContext: et,
  useCallback: xc,
  useContext: et,
  useEffect: ca,
  useImperativeHandle: wc,
  useInsertionEffect: gc,
  useLayoutEffect: yc,
  useMemo: _c,
  useReducer: Cs,
  useRef: hc,
  useState: function() {
    return Cs(Cr);
  },
  useDebugValue: da,
  useDeferredValue: function(e) {
    var t = tt();
    return kc(t, xe.memoizedState, e);
  },
  useTransition: function() {
    var e = Cs(Cr)[0], t = tt().memoizedState;
    return [e, t];
  },
  useMutableSource: oc,
  useSyncExternalStore: uc,
  useId: Sc,
  unstable_isNewReconciler: !1
}, Ep = { readContext: et, useCallback: xc, useContext: et, useEffect: ca, useImperativeHandle: wc, useInsertionEffect: gc, useLayoutEffect: yc, useMemo: _c, useReducer: Ns, useRef: hc, useState: function() {
  return Ns(Cr);
}, useDebugValue: da, useDeferredValue: function(e) {
  var t = tt();
  return xe === null ? t.memoizedState = e : kc(t, xe.memoizedState, e);
}, useTransition: function() {
  var e = Ns(Cr)[0], t = tt().memoizedState;
  return [e, t];
}, useMutableSource: oc, useSyncExternalStore: uc, useId: Sc, unstable_isNewReconciler: !1 };
function at(e, t) {
  if (e && e.defaultProps) {
    t = pe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ui(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : pe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Kl = { isMounted: function(e) {
  return (e = e._reactInternals) ? cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), l = Ut(e), i = St(r, l);
  i.payload = t, n != null && (i.callback = n), t = $t(e, i, l), t !== null && (ft(t, e, l, r), il(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), l = Ut(e), i = St(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = $t(e, i, l), t !== null && (ft(t, e, l, r), il(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Re(), r = Ut(e), l = St(n, r);
  l.tag = 2, t != null && (l.callback = t), t = $t(e, l, r), t !== null && (ft(t, e, r, n), il(t, e, r));
} };
function wo(e, t, n, r, l, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !wr(n, r) || !wr(l, i) : !0;
}
function Nc(e, t, n) {
  var r = !1, l = Bt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = et(i) : (l = We(t) ? rn : Pe.current, r = t.contextTypes, i = (r = r != null) ? Dn(e, l) : Bt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Kl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function xo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Kl.enqueueReplaceState(t, t.state, null);
}
function ci(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ra(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = et(i) : (i = We(t) ? rn : Pe.current, l.context = Dn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ui(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Kl.enqueueReplaceState(l, l.state, null), bl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function On(e, t) {
  try {
    var n = "", r = t;
    do
      n += Jd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ms(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function di(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Cp = typeof WeakMap == "function" ? WeakMap : Map;
function Mc(e, t, n) {
  n = St(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Rl || (Rl = !0, _i = r), di(e, t);
  }, n;
}
function Ic(e, t, n) {
  n = St(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      di(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    di(e, t), typeof r != "function" && (Wt === null ? Wt = /* @__PURE__ */ new Set([this]) : Wt.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function _o(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Cp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = $p.bind(null, e, t, n), t.then(e, e));
}
function ko(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function So(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = St(-1, 1), t.tag = 2, $t(n, t, 1))), n.lanes |= 1), e);
}
var Np = Mt.ReactCurrentOwner, Fe = !1;
function De(e, t, n, r) {
  t.child = e === null ? lc(t, null, n, r) : zn(t, e.child, n, r);
}
function jo(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return Ln(t, l), r = oa(e, t, n, r, i, l), n = ua(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (ce && n && Xi(t), t.flags |= 1, De(e, t, r, l), t.child);
}
function Eo(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !wa(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, bc(e, t, i, r, l)) : (e = fl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : wr, n(a, r) && e.ref === t.ref) return Nt(e, t, l);
  }
  return t.flags |= 1, e = Vt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function bc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (wr(i, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, Nt(e, t, l);
  }
  return fi(e, t, n, r, l);
}
function Lc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ae(Cn, Ve), Ve |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ae(Cn, Ve), Ve |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ae(Cn, Ve), Ve |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ae(Cn, Ve), Ve |= r;
  return De(e, t, l, n), t.child;
}
function Tc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function fi(e, t, n, r, l) {
  var i = We(n) ? rn : Pe.current;
  return i = Dn(t, i), Ln(t, l), n = oa(e, t, n, r, i, l), r = ua(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (ce && r && Xi(t), t.flags |= 1, De(e, t, n, l), t.child);
}
function Co(e, t, n, r, l) {
  if (We(n)) {
    var i = !0;
    El(t);
  } else i = !1;
  if (Ln(t, l), t.stateNode === null) ul(e, t), Nc(t, n, r), ci(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = et(c) : (c = We(n) ? rn : Pe.current, c = Dn(t, c));
    var m = n.getDerivedStateFromProps, v = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    v || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== c) && xo(t, a, r, c), Lt = !1;
    var w = t.memoizedState;
    a.state = w, bl(t, r, a, l), u = t.memoizedState, o !== r || w !== u || $e.current || Lt ? (typeof m == "function" && (ui(t, n, m, r), u = t.memoizedState), (o = Lt || wo(t, n, o, r, w, u, c)) ? (v || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = c, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, ic(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : at(t.type, o), a.props = c, v = t.pendingProps, w = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = et(u) : (u = We(n) ? rn : Pe.current, u = Dn(t, u));
    var x = n.getDerivedStateFromProps;
    (m = typeof x == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== v || w !== u) && xo(t, a, r, u), Lt = !1, w = t.memoizedState, a.state = w, bl(t, r, a, l);
    var _ = t.memoizedState;
    o !== v || w !== _ || $e.current || Lt ? (typeof x == "function" && (ui(t, n, x, r), _ = t.memoizedState), (c = Lt || wo(t, n, c, r, w, _, u) || !1) ? (m || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, _, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, _, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = _), a.props = r, a.state = _, a.context = u, r = c) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return pi(e, t, n, r, i, l);
}
function pi(e, t, n, r, l, i) {
  Tc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && co(t, n, !1), Nt(e, t, i);
  r = t.stateNode, Np.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = zn(t, e.child, null, i), t.child = zn(t, null, o, i)) : De(e, t, o, i), t.memoizedState = r.state, l && co(t, n, !0), t.child;
}
function Pc(e) {
  var t = e.stateNode;
  t.pendingContext ? uo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && uo(e, t.context, !1), la(e, t.containerInfo);
}
function No(e, t, n, r, l) {
  return Rn(), Ji(l), t.flags |= 256, De(e, t, n, r), t.child;
}
var mi = { dehydrated: null, treeContext: null, retryLane: 0 };
function hi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dc(e, t, n) {
  var r = t.pendingProps, l = de.current, i = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ae(de, l & 1), e === null)
    return ai(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Xl(a, r, 0, null), e = nn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = hi(n), t.memoizedState = mi, e) : fa(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Mp(e, t, a, r, o, l, n);
  if (i) {
    i = r.fallback, a = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Vt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = Vt(o, i) : (i = nn(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? hi(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = mi, r;
  }
  return i = e.child, e = i.sibling, r = Vt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function fa(e, t) {
  return t = Xl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Xr(e, t, n, r) {
  return r !== null && Ji(r), zn(t, e.child, null, n), e = fa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Mp(e, t, n, r, l, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ms(Error(P(422))), Xr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Xl({ mode: "visible", children: r.children }, l, 0, null), i = nn(i, l, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && zn(t, e.child, null, a), t.child.memoizedState = hi(a), t.memoizedState = mi, i);
  if (!(t.mode & 1)) return Xr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, i = Error(P(419)), r = Ms(i, r, void 0), Xr(e, t, a, r);
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ct(e, l), ft(r, e, l, -1));
    }
    return va(), r = Ms(Error(P(421))), Xr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Wp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Qe = Ft(l.nextSibling), Be = t, ce = !0, ut = null, e !== null && (Xe[qe++] = _t, Xe[qe++] = kt, Xe[qe++] = ln, _t = e.id, kt = e.overflow, ln = t), t = fa(t, r.children), t.flags |= 4096, t);
}
function Mo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), oi(e.return, t, n);
}
function Is(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Rc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (De(e, t, r.children, n), r = de.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Mo(e, n, t);
      else if (e.tag === 19) Mo(e, n, t);
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
  if (ae(de, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Ll(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Is(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Ll(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Is(t, !0, n, null, i);
      break;
    case "together":
      Is(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ul(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Nt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), an |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Vt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ip(e, t, n) {
  switch (t.tag) {
    case 3:
      Pc(t), Rn();
      break;
    case 5:
      ac(t);
      break;
    case 1:
      We(t.type) && El(t);
      break;
    case 4:
      la(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ae(Ml, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ae(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Dc(e, t, n) : (ae(de, de.current & 1), e = Nt(e, t, n), e !== null ? e.sibling : null);
      ae(de, de.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Rc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ae(de, de.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Lc(e, t, n);
  }
  return Nt(e, t, n);
}
var zc, gi, Ac, Oc;
zc = function(e, t) {
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
gi = function() {
};
Ac = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, en(vt.current);
    var i = null;
    switch (n) {
      case "input":
        l = Os(e, l), r = Os(e, r), i = [];
        break;
      case "select":
        l = pe({}, l, { value: void 0 }), r = pe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Ws(e, l), r = Ws(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Sl);
    }
    Vs(n, r);
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
Oc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qn(e, t) {
  if (!ce) switch (e.tailMode) {
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
function bp(e, t, n) {
  var r = t.pendingProps;
  switch (qi(t), t.tag) {
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
      return We(t.type) && jl(), be(t), null;
    case 3:
      return r = t.stateNode, An(), ue($e), ue(Pe), ia(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && (ji(ut), ut = null))), gi(e, t), be(t), null;
    case 5:
      sa(t);
      var l = en(jr.current);
      if (n = t.type, e !== null && t.stateNode != null) Ac(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return be(t), null;
        }
        if (e = en(vt.current), Gr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[gt] = t, r[kr] = i, e = (t.mode & 1) !== 0, n) {
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
              za(r, i), oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, oe("invalid", r);
              break;
            case "textarea":
              Oa(r, i), oe("invalid", r);
          }
          Vs(n, i), l = null;
          for (var a in i) if (i.hasOwnProperty(a)) {
            var o = i[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && Kr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && Kr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : fr.hasOwnProperty(a) && o != null && a === "onScroll" && oe("scroll", r);
          }
          switch (n) {
            case "input":
              Fr(r), Aa(r, i, !0);
              break;
            case "textarea":
              Fr(r), Fa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Sl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[gt] = t, e[kr] = r, zc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Qs(n, r), n) {
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
                za(e, r), l = Os(e, r), oe("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = pe({}, r, { value: void 0 }), oe("invalid", e);
                break;
              case "textarea":
                Oa(e, r), l = Ws(e, r), oe("invalid", e);
                break;
              default:
                l = r;
            }
            Vs(n, l), o = l;
            for (i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "style" ? hu(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && pu(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && pr(e, u) : typeof u == "number" && pr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (fr.hasOwnProperty(i) ? u != null && i === "onScroll" && oe("scroll", e) : u != null && zi(e, i, u, a));
            }
            switch (n) {
              case "input":
                Fr(e), Aa(e, r, !1);
                break;
              case "textarea":
                Fr(e), Fa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Qt(r.value));
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
                typeof l.onClick == "function" && (e.onclick = Sl);
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
      if (e && t.stateNode != null) Oc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (n = en(jr.current), en(vt.current), Gr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[gt] = t, (i = r.nodeValue !== n) && (e = Be, e !== null)) switch (e.tag) {
            case 3:
              Kr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Kr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[gt] = t, t.stateNode = r;
      }
      return be(t), null;
    case 13:
      if (ue(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ce && Qe !== null && t.mode & 1 && !(t.flags & 128)) nc(), Rn(), t.flags |= 98560, i = !1;
        else if (i = Gr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(P(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(P(317));
            i[gt] = t;
          } else Rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          be(t), i = !1;
        } else ut !== null && (ji(ut), ut = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? _e === 0 && (_e = 3) : va())), t.updateQueue !== null && (t.flags |= 4), be(t), null);
    case 4:
      return An(), gi(e, t), e === null && xr(t.stateNode.containerInfo), be(t), null;
    case 10:
      return ta(t.type._context), be(t), null;
    case 17:
      return We(t.type) && jl(), be(t), null;
    case 19:
      if (ue(de), i = t.memoizedState, i === null) return be(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null) if (r) qn(i, !1);
      else {
        if (_e !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = Ll(e), a !== null) {
            for (t.flags |= 128, qn(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ae(de, de.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ge() > Fn && (t.flags |= 128, r = !0, qn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ll(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qn(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !ce) return be(t), null;
        } else 2 * ge() - i.renderingStartTime > Fn && n !== 1073741824 && (t.flags |= 128, r = !0, qn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ge(), t.sibling = null, n = de.current, ae(de, r ? n & 1 | 2 : n & 1), t) : (be(t), null);
    case 22:
    case 23:
      return ya(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ve & 1073741824 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : be(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function Lp(e, t) {
  switch (qi(t), t.tag) {
    case 1:
      return We(t.type) && jl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return An(), ue($e), ue(Pe), ia(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return sa(t), null;
    case 13:
      if (ue(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(P(340));
        Rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ue(de), null;
    case 4:
      return An(), null;
    case 10:
      return ta(t.type._context), null;
    case 22:
    case 23:
      return ya(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qr = !1, Le = !1, Tp = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
function En(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    me(e, t, r);
  }
  else n.current = null;
}
function yi(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Io = !1;
function Pp(e, t) {
  if (ei = xl, e = Vu(), Yi(e)) {
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
        var a = 0, o = -1, u = -1, c = 0, m = 0, v = e, w = null;
        t: for (; ; ) {
          for (var x; v !== n || l !== 0 && v.nodeType !== 3 || (o = a + l), v !== i || r !== 0 && v.nodeType !== 3 || (u = a + r), v.nodeType === 3 && (a += v.nodeValue.length), (x = v.firstChild) !== null; )
            w = v, v = x;
          for (; ; ) {
            if (v === e) break t;
            if (w === n && ++c === l && (o = a), w === i && ++m === r && (u = a), (x = v.nextSibling) !== null) break;
            v = w, w = v.parentNode;
          }
          v = x;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ti = { focusedElem: e, selectionRange: n }, xl = !1, $ = t; $ !== null; ) if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
  else for (; $ !== null; ) {
    t = $;
    try {
      var _ = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (_ !== null) {
            var S = _.memoizedProps, j = _.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? S : at(t.type, S), j);
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
          throw Error(P(163));
      }
    } catch (g) {
      me(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, $ = e;
      break;
    }
    $ = t.return;
  }
  return _ = Io, Io = !1, _;
}
function ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && yi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Gl(e, t) {
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
function vi(e) {
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
function Fc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Fc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gt], delete t[kr], delete t[li], delete t[hp], delete t[gp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function $c(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bo(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || $c(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Sl));
  else if (r !== 4 && (e = e.child, e !== null)) for (wi(e, t, n), e = e.sibling; e !== null; ) wi(e, t, n), e = e.sibling;
}
function xi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (xi(e, t, n), e = e.sibling; e !== null; ) xi(e, t, n), e = e.sibling;
}
var Ee = null, ot = !1;
function It(e, t, n) {
  for (n = n.child; n !== null; ) Wc(e, t, n), n = n.sibling;
}
function Wc(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function") try {
    yt.onCommitFiberUnmount($l, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Le || En(n, t);
    case 6:
      var r = Ee, l = ot;
      Ee = null, It(e, t, n), Ee = r, ot = l, Ee !== null && (ot ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null && (ot ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? ks(e.parentNode, n) : e.nodeType === 1 && ks(e, n), yr(e)) : ks(Ee, n.stateNode));
      break;
    case 4:
      r = Ee, l = ot, Ee = n.stateNode.containerInfo, ot = !0, It(e, t, n), Ee = r, ot = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && yi(n, t, a), l = l.next;
        } while (l !== r);
      }
      It(e, t, n);
      break;
    case 1:
      if (!Le && (En(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        me(n, t, o);
      }
      It(e, t, n);
      break;
    case 21:
      It(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, It(e, t, n), Le = r) : It(e, t, n);
      break;
    default:
      It(e, t, n);
  }
}
function Lo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Tp()), t.forEach(function(r) {
      var l = Up.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function st(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            Ee = o.stateNode, ot = !1;
            break e;
          case 3:
            Ee = o.stateNode.containerInfo, ot = !0;
            break e;
          case 4:
            Ee = o.stateNode.containerInfo, ot = !0;
            break e;
        }
        o = o.return;
      }
      if (Ee === null) throw Error(P(160));
      Wc(i, a, l), Ee = null, ot = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      me(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Uc(t, e), t = t.sibling;
}
function Uc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (st(t, e), mt(e), r & 4) {
        try {
          ur(3, e, e.return), Gl(3, e);
        } catch (S) {
          me(e, e.return, S);
        }
        try {
          ur(5, e, e.return);
        } catch (S) {
          me(e, e.return, S);
        }
      }
      break;
    case 1:
      st(t, e), mt(e), r & 512 && n !== null && En(n, n.return);
      break;
    case 5:
      if (st(t, e), mt(e), r & 512 && n !== null && En(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          pr(l, "");
        } catch (S) {
          me(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && i.type === "radio" && i.name != null && cu(l, i), Qs(o, a);
          var c = Qs(o, i);
          for (a = 0; a < u.length; a += 2) {
            var m = u[a], v = u[a + 1];
            m === "style" ? hu(l, v) : m === "dangerouslySetInnerHTML" ? pu(l, v) : m === "children" ? pr(l, v) : zi(l, m, v, c);
          }
          switch (o) {
            case "input":
              Fs(l, i);
              break;
            case "textarea":
              du(l, i);
              break;
            case "select":
              var w = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var x = i.value;
              x != null ? Nn(l, !!i.multiple, x, !1) : w !== !!i.multiple && (i.defaultValue != null ? Nn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Nn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[kr] = i;
        } catch (S) {
          me(e, e.return, S);
        }
      }
      break;
    case 6:
      if (st(t, e), mt(e), r & 4) {
        if (e.stateNode === null) throw Error(P(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (S) {
          me(e, e.return, S);
        }
      }
      break;
    case 3:
      if (st(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        yr(t.containerInfo);
      } catch (S) {
        me(e, e.return, S);
      }
      break;
    case 4:
      st(t, e), mt(e);
      break;
    case 13:
      st(t, e), mt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (ha = ge())), r & 4 && Lo(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (c = Le) || m, st(t, e), Le = c) : st(t, e), mt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for ($ = e, m = e.child; m !== null; ) {
          for (v = $ = m; $ !== null; ) {
            switch (w = $, x = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ur(4, w, w.return);
                break;
              case 1:
                En(w, w.return);
                var _ = w.stateNode;
                if (typeof _.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, _.props = t.memoizedProps, _.state = t.memoizedState, _.componentWillUnmount();
                  } catch (S) {
                    me(r, n, S);
                  }
                }
                break;
              case 5:
                En(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  Po(v);
                  continue;
                }
            }
            x !== null ? (x.return = w, $ = x) : Po(v);
          }
          m = m.sibling;
        }
        e: for (m = null, v = e; ; ) {
          if (v.tag === 5) {
            if (m === null) {
              m = v;
              try {
                l = v.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = v.stateNode, u = v.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = mu("display", a));
              } catch (S) {
                me(e, e.return, S);
              }
            }
          } else if (v.tag === 6) {
            if (m === null) try {
              v.stateNode.nodeValue = c ? "" : v.memoizedProps;
            } catch (S) {
              me(e, e.return, S);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            m === v && (m = null), v = v.return;
          }
          m === v && (m = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      st(t, e), mt(e), r & 4 && Lo(e);
      break;
    case 21:
      break;
    default:
      st(
        t,
        e
      ), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($c(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (pr(l, ""), r.flags &= -33);
          var i = bo(e);
          xi(e, i, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = bo(e);
          wi(e, o, a);
          break;
        default:
          throw Error(P(161));
      }
    } catch (u) {
      me(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dp(e, t, n) {
  $ = e, Vc(e);
}
function Vc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var l = $, i = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || qr;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || Le;
        o = qr;
        var c = Le;
        if (qr = a, (Le = u) && !c) for ($ = l; $ !== null; ) a = $, u = a.child, a.tag === 22 && a.memoizedState !== null ? Do(l) : u !== null ? (u.return = a, $ = u) : Do(l);
        for (; i !== null; ) $ = i, Vc(i), i = i.sibling;
        $ = l, qr = o, Le = c;
      }
      To(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, $ = i) : To(e);
  }
}
function To(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Le || Gl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Le) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && go(t, i, r);
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
              go(t, a, n);
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
                  var v = m.dehydrated;
                  v !== null && yr(v);
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
            throw Error(P(163));
        }
        Le || t.flags & 512 && vi(t);
      } catch (w) {
        me(t, t.return, w);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function Po(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function Do(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Gl(4, t);
          } catch (u) {
            me(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              me(t, l, u);
            }
          }
          var i = t.return;
          try {
            vi(t);
          } catch (u) {
            me(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            vi(t);
          } catch (u) {
            me(t, a, u);
          }
      }
    } catch (u) {
      me(t, t.return, u);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, $ = o;
      break;
    }
    $ = t.return;
  }
}
var Rp = Math.ceil, Dl = Mt.ReactCurrentDispatcher, pa = Mt.ReactCurrentOwner, Ze = Mt.ReactCurrentBatchConfig, se = 0, je = null, ye = null, Ce = 0, Ve = 0, Cn = Kt(0), _e = 0, Mr = null, an = 0, Yl = 0, ma = 0, cr = null, Oe = null, ha = 0, Fn = 1 / 0, wt = null, Rl = !1, _i = null, Wt = null, Jr = !1, Rt = null, zl = 0, dr = 0, ki = null, cl = -1, dl = 0;
function Re() {
  return se & 6 ? ge() : cl !== -1 ? cl : cl = ge();
}
function Ut(e) {
  return e.mode & 1 ? se & 2 && Ce !== 0 ? Ce & -Ce : vp.transition !== null ? (dl === 0 && (dl = Nu()), dl) : (e = ie, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Du(e.type)), e) : 1;
}
function ft(e, t, n, r) {
  if (50 < dr) throw dr = 0, ki = null, Error(P(185));
  Lr(e, n, r), (!(se & 2) || e !== je) && (e === je && (!(se & 2) && (Yl |= n), _e === 4 && Pt(e, Ce)), Ue(e, r), n === 1 && se === 0 && !(t.mode & 1) && (Fn = ge() + 500, Bl && Gt()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  vf(e, t);
  var r = wl(e, e === je ? Ce : 0);
  if (r === 0) n !== null && Ua(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ua(n), t === 1) e.tag === 0 ? yp(Ro.bind(null, e)) : Zu(Ro.bind(null, e)), pp(function() {
      !(se & 6) && Gt();
    }), n = null;
    else {
      switch (Mu(r)) {
        case 1:
          n = Wi;
          break;
        case 4:
          n = Eu;
          break;
        case 16:
          n = vl;
          break;
        case 536870912:
          n = Cu;
          break;
        default:
          n = vl;
      }
      n = qc(n, Qc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Qc(e, t) {
  if (cl = -1, dl = 0, se & 6) throw Error(P(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = wl(e, e === je ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Al(e, r);
  else {
    t = r;
    var l = se;
    se |= 2;
    var i = Hc();
    (je !== e || Ce !== t) && (wt = null, Fn = ge() + 500, tn(e, t));
    do
      try {
        Op();
        break;
      } catch (o) {
        Bc(e, o);
      }
    while (!0);
    ea(), Dl.current = i, se = l, ye !== null ? t = 0 : (je = null, Ce = 0, t = _e);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ys(e), l !== 0 && (r = l, t = Si(e, l))), t === 1) throw n = Mr, tn(e, 0), Pt(e, r), Ue(e, ge()), n;
    if (t === 6) Pt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !zp(l) && (t = Al(e, r), t === 2 && (i = Ys(e), i !== 0 && (r = i, t = Si(e, i))), t === 1)) throw n = Mr, tn(e, 0), Pt(e, r), Ue(e, ge()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          qt(e, Oe, wt);
          break;
        case 3:
          if (Pt(e, r), (r & 130023424) === r && (t = ha + 500 - ge(), 10 < t)) {
            if (wl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Re(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ri(qt.bind(null, e, Oe, wt), t);
            break;
          }
          qt(e, Oe, wt);
          break;
        case 4:
          if (Pt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - dt(r);
            i = 1 << a, a = t[a], a > l && (l = a), r &= ~i;
          }
          if (r = l, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Rp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ri(qt.bind(null, e, Oe, wt), r);
            break;
          }
          qt(e, Oe, wt);
          break;
        case 5:
          qt(e, Oe, wt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Ue(e, ge()), e.callbackNode === n ? Qc.bind(null, e) : null;
}
function Si(e, t) {
  var n = cr;
  return e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256), e = Al(e, t), e !== 2 && (t = Oe, Oe = n, t !== null && ji(t)), e;
}
function ji(e) {
  Oe === null ? Oe = e : Oe.push.apply(Oe, e);
}
function zp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!pt(i(), l)) return !1;
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
function Pt(e, t) {
  for (t &= ~ma, t &= ~Yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - dt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ro(e) {
  if (se & 6) throw Error(P(327));
  Tn();
  var t = wl(e, 0);
  if (!(t & 1)) return Ue(e, ge()), null;
  var n = Al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ys(e);
    r !== 0 && (t = r, n = Si(e, r));
  }
  if (n === 1) throw n = Mr, tn(e, 0), Pt(e, t), Ue(e, ge()), n;
  if (n === 6) throw Error(P(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, qt(e, Oe, wt), Ue(e, ge()), null;
}
function ga(e, t) {
  var n = se;
  se |= 1;
  try {
    return e(t);
  } finally {
    se = n, se === 0 && (Fn = ge() + 500, Bl && Gt());
  }
}
function on(e) {
  Rt !== null && Rt.tag === 0 && !(se & 6) && Tn();
  var t = se;
  se |= 1;
  var n = Ze.transition, r = ie;
  try {
    if (Ze.transition = null, ie = 1, e) return e();
  } finally {
    ie = r, Ze.transition = n, se = t, !(se & 6) && Gt();
  }
}
function ya() {
  Ve = Cn.current, ue(Cn);
}
function tn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, fp(n)), ye !== null) for (n = ye.return; n !== null; ) {
    var r = n;
    switch (qi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && jl();
        break;
      case 3:
        An(), ue($e), ue(Pe), ia();
        break;
      case 5:
        sa(r);
        break;
      case 4:
        An();
        break;
      case 13:
        ue(de);
        break;
      case 19:
        ue(de);
        break;
      case 10:
        ta(r.type._context);
        break;
      case 22:
      case 23:
        ya();
    }
    n = n.return;
  }
  if (je = e, ye = e = Vt(e.current, null), Ce = Ve = t, _e = 0, Mr = null, ma = Yl = an = 0, Oe = cr = null, Zt !== null) {
    for (t = 0; t < Zt.length; t++) if (n = Zt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var a = i.next;
        i.next = l, r.next = a;
      }
      n.pending = r;
    }
    Zt = null;
  }
  return e;
}
function Bc(e, t) {
  do {
    var n = ye;
    try {
      if (ea(), al.current = Pl, Tl) {
        for (var r = fe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Tl = !1;
      }
      if (sn = 0, Se = xe = fe = null, or = !1, Er = 0, pa.current = null, n === null || n.return === null) {
        _e = 1, Mr = t, ye = null;
        break;
      }
      e: {
        var i = e, a = n.return, o = n, u = t;
        if (t = Ce, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, m = o, v = m.tag;
          if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var w = m.alternate;
            w ? (m.updateQueue = w.updateQueue, m.memoizedState = w.memoizedState, m.lanes = w.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var x = ko(a);
          if (x !== null) {
            x.flags &= -257, So(x, a, o, i, t), x.mode & 1 && _o(i, c, t), t = x, u = c;
            var _ = t.updateQueue;
            if (_ === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(u), t.updateQueue = S;
            } else _.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              _o(i, c, t), va();
              break e;
            }
            u = Error(P(426));
          }
        } else if (ce && o.mode & 1) {
          var j = ko(a);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), So(j, a, o, i, t), Ji(On(u, o));
            break e;
          }
        }
        i = u = On(u, o), _e !== 4 && (_e = 2), cr === null ? cr = [i] : cr.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Mc(i, u, t);
              ho(i, d);
              break e;
            case 1:
              o = u;
              var f = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Wt === null || !Wt.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = Ic(i, o, t);
                ho(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gc(n);
    } catch (y) {
      t = y, ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Hc() {
  var e = Dl.current;
  return Dl.current = Pl, e === null ? Pl : e;
}
function va() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4), je === null || !(an & 268435455) && !(Yl & 268435455) || Pt(je, Ce);
}
function Al(e, t) {
  var n = se;
  se |= 2;
  var r = Hc();
  (je !== e || Ce !== t) && (wt = null, tn(e, t));
  do
    try {
      Ap();
      break;
    } catch (l) {
      Bc(e, l);
    }
  while (!0);
  if (ea(), se = n, Dl.current = r, ye !== null) throw Error(P(261));
  return je = null, Ce = 0, _e;
}
function Ap() {
  for (; ye !== null; ) Kc(ye);
}
function Op() {
  for (; ye !== null && !uf(); ) Kc(ye);
}
function Kc(e) {
  var t = Xc(e.alternate, e, Ve);
  e.memoizedProps = e.pendingProps, t === null ? Gc(e) : ye = t, pa.current = null;
}
function Gc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Lp(n, t), n !== null) {
        n.flags &= 32767, ye = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        _e = 6, ye = null;
        return;
      }
    } else if (n = bp(n, t, Ve), n !== null) {
      ye = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function qt(e, t, n) {
  var r = ie, l = Ze.transition;
  try {
    Ze.transition = null, ie = 1, Fp(e, t, n, r);
  } finally {
    Ze.transition = l, ie = r;
  }
  return null;
}
function Fp(e, t, n, r) {
  do
    Tn();
  while (Rt !== null);
  if (se & 6) throw Error(P(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (wf(e, i), e === je && (ye = je = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Jr || (Jr = !0, qc(vl, function() {
    return Tn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ze.transition, Ze.transition = null;
    var a = ie;
    ie = 1;
    var o = se;
    se |= 4, pa.current = null, Pp(e, n), Uc(n, e), sp(ti), xl = !!ei, ti = ei = null, e.current = n, Dp(n), cf(), se = o, ie = a, Ze.transition = i;
  } else e.current = n;
  if (Jr && (Jr = !1, Rt = e, zl = l), i = e.pendingLanes, i === 0 && (Wt = null), pf(n.stateNode), Ue(e, ge()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Rl) throw Rl = !1, e = _i, _i = null, e;
  return zl & 1 && e.tag !== 0 && Tn(), i = e.pendingLanes, i & 1 ? e === ki ? dr++ : (dr = 0, ki = e) : dr = 0, Gt(), null;
}
function Tn() {
  if (Rt !== null) {
    var e = Mu(zl), t = Ze.transition, n = ie;
    try {
      if (Ze.transition = null, ie = 16 > e ? 16 : e, Rt === null) var r = !1;
      else {
        if (e = Rt, Rt = null, zl = 0, se & 6) throw Error(P(331));
        var l = se;
        for (se |= 4, $ = e.current; $ !== null; ) {
          var i = $, a = i.child;
          if ($.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for ($ = c; $ !== null; ) {
                  var m = $;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ur(8, m, i);
                  }
                  var v = m.child;
                  if (v !== null) v.return = m, $ = v;
                  else for (; $ !== null; ) {
                    m = $;
                    var w = m.sibling, x = m.return;
                    if (Fc(m), m === c) {
                      $ = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = x, $ = w;
                      break;
                    }
                    $ = x;
                  }
                }
              }
              var _ = i.alternate;
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
              $ = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) a.return = i, $ = a;
          else e: for (; $ !== null; ) {
            if (i = $, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ur(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, $ = d;
              break e;
            }
            $ = i.return;
          }
        }
        var f = e.current;
        for ($ = f; $ !== null; ) {
          a = $;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, $ = p;
          else e: for (a = f; $ !== null; ) {
            if (o = $, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Gl(9, o);
              }
            } catch (y) {
              me(o, o.return, y);
            }
            if (o === a) {
              $ = null;
              break e;
            }
            var g = o.sibling;
            if (g !== null) {
              g.return = o.return, $ = g;
              break e;
            }
            $ = o.return;
          }
        }
        if (se = l, Gt(), yt && typeof yt.onPostCommitFiberRoot == "function") try {
          yt.onPostCommitFiberRoot($l, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ie = n, Ze.transition = t;
    }
  }
  return !1;
}
function zo(e, t, n) {
  t = On(n, t), t = Mc(e, t, 1), e = $t(e, t, 1), t = Re(), e !== null && (Lr(e, 1, t), Ue(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) zo(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      zo(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r))) {
        e = On(n, e), e = Ic(t, e, 1), t = $t(t, e, 1), e = Re(), t !== null && (Lr(t, 1, e), Ue(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function $p(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Re(), e.pingedLanes |= e.suspendedLanes & n, je === e && (Ce & n) === n && (_e === 4 || _e === 3 && (Ce & 130023424) === Ce && 500 > ge() - ha ? tn(e, 0) : ma |= n), Ue(e, t);
}
function Yc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ur, Ur <<= 1, !(Ur & 130023424) && (Ur = 4194304)) : t = 1);
  var n = Re();
  e = Ct(e, t), e !== null && (Lr(e, t, n), Ue(e, n));
}
function Wp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Yc(e, n);
}
function Up(e, t) {
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
      throw Error(P(314));
  }
  r !== null && r.delete(t), Yc(e, n);
}
var Xc;
Xc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || $e.current) Fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, Ip(e, t, n);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, ce && t.flags & 1048576 && ec(t, Nl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ul(e, t), e = t.pendingProps;
      var l = Dn(t, Pe.current);
      Ln(t, n), l = oa(null, t, r, e, l, n);
      var i = ua();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (i = !0, El(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ra(t), l.updater = Kl, t.stateNode = l, l._reactInternals = t, ci(t, r, e, n), t = pi(null, t, r, !0, i, n)) : (t.tag = 0, ce && i && Xi(t), De(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ul(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Qp(r), e = at(r, e), l) {
          case 0:
            t = fi(null, t, r, e, n);
            break e;
          case 1:
            t = Co(null, t, r, e, n);
            break e;
          case 11:
            t = jo(null, t, r, e, n);
            break e;
          case 14:
            t = Eo(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(P(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), fi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), Co(e, t, r, l, n);
    case 3:
      e: {
        if (Pc(t), e === null) throw Error(P(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, ic(e, t), bl(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = On(Error(P(423)), t), t = No(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = On(Error(P(424)), t), t = No(e, t, r, n, l);
          break e;
        } else for (Qe = Ft(t.stateNode.containerInfo.firstChild), Be = t, ce = !0, ut = null, n = lc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Rn(), r === l) {
            t = Nt(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ac(t), e === null && ai(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = l.children, ni(r, l) ? a = null : i !== null && ni(r, i) && (t.flags |= 32), Tc(e, t), De(e, t, a, n), t.child;
    case 6:
      return e === null && ai(t), null;
    case 13:
      return Dc(e, t, n);
    case 4:
      return la(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : De(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), jo(e, t, r, l, n);
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, a = l.value, ae(Ml, r._currentValue), r._currentValue = a, i !== null) if (pt(i.value, a)) {
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
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), oi(
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
            if (a = i.return, a === null) throw Error(P(341));
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), oi(a, n, t), a = i.sibling;
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
        De(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Ln(t, n), l = et(l), r = r(l), t.flags |= 1, De(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = at(r, t.pendingProps), l = at(r.type, l), Eo(e, t, r, l, n);
    case 15:
      return bc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), ul(e, t), t.tag = 1, We(r) ? (e = !0, El(t)) : e = !1, Ln(t, n), Nc(t, r, l), ci(t, r, l, n), pi(null, t, r, !0, e, n);
    case 19:
      return Rc(e, t, n);
    case 22:
      return Lc(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function qc(e, t) {
  return ju(e, t);
}
function Vp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Je(e, t, n, r) {
  return new Vp(e, t, n, r);
}
function wa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Qp(e) {
  if (typeof e == "function") return wa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Oi) return 11;
    if (e === Fi) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function fl(e, t, n, r, l, i) {
  var a = 2;
  if (r = e, typeof e == "function") wa(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case gn:
      return nn(n.children, l, i, t);
    case Ai:
      a = 8, l |= 8;
      break;
    case Ds:
      return e = Je(12, n, t, l | 2), e.elementType = Ds, e.lanes = i, e;
    case Rs:
      return e = Je(13, n, t, l), e.elementType = Rs, e.lanes = i, e;
    case zs:
      return e = Je(19, n, t, l), e.elementType = zs, e.lanes = i, e;
    case au:
      return Xl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case su:
          a = 10;
          break e;
        case iu:
          a = 9;
          break e;
        case Oi:
          a = 11;
          break e;
        case Fi:
          a = 14;
          break e;
        case bt:
          a = 16, r = null;
          break e;
      }
      throw Error(P(130, e == null ? e : typeof e, ""));
  }
  return t = Je(a, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function nn(e, t, n, r) {
  return e = Je(7, e, r, t), e.lanes = n, e;
}
function Xl(e, t, n, r) {
  return e = Je(22, e, r, t), e.elementType = au, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function bs(e, t, n) {
  return e = Je(6, e, null, t), e.lanes = n, e;
}
function Ls(e, t, n) {
  return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Bp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ds(0), this.expirationTimes = ds(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ds(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function xa(e, t, n, r, l, i, a, o, u) {
  return e = new Bp(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Je(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ra(i), e;
}
function Hp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Jc(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (cn(e) !== e || e.tag !== 1) throw Error(P(170));
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
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return Ju(e, n, t);
  }
  return t;
}
function Zc(e, t, n, r, l, i, a, o, u) {
  return e = xa(n, r, !0, e, l, i, a, o, u), e.context = Jc(null), n = e.current, r = Re(), l = Ut(n), i = St(r, l), i.callback = t ?? null, $t(n, i, l), e.current.lanes = l, Lr(e, l, r), Ue(e, r), e;
}
function ql(e, t, n, r) {
  var l = t.current, i = Re(), a = Ut(l);
  return n = Jc(n), t.context === null ? t.context = n : t.pendingContext = n, t = St(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $t(l, t, a), e !== null && (ft(e, l, a, i), il(e, l, a)), a;
}
function Ol(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ao(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _a(e, t) {
  Ao(e, t), (e = e.alternate) && Ao(e, t);
}
function Kp() {
  return null;
}
var ed = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ka(e) {
  this._internalRoot = e;
}
Jl.prototype.render = ka.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  ql(e, t, null, null);
};
Jl.prototype.unmount = ka.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    on(function() {
      ql(null, e, null, null);
    }), t[Et] = null;
  }
};
function Jl(e) {
  this._internalRoot = e;
}
Jl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Lu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && Pu(e);
  }
};
function Sa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Zl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Oo() {
}
function Gp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = Ol(a);
        i.call(c);
      };
    }
    var a = Zc(t, r, e, 0, null, !1, !1, "", Oo);
    return e._reactRootContainer = a, e[Et] = a.current, xr(e.nodeType === 8 ? e.parentNode : e), on(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = Ol(u);
      o.call(c);
    };
  }
  var u = xa(e, 0, !1, null, null, !1, !1, "", Oo);
  return e._reactRootContainer = u, e[Et] = u.current, xr(e.nodeType === 8 ? e.parentNode : e), on(function() {
    ql(t, u, n, r);
  }), u;
}
function es(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = Ol(a);
        o.call(u);
      };
    }
    ql(t, a, e, l);
  } else a = Gp(n, t, e, l, r);
  return Ol(a);
}
Iu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = tr(t.pendingLanes);
        n !== 0 && (Ui(t, n | 1), Ue(t, ge()), !(se & 6) && (Fn = ge() + 500, Gt()));
      }
      break;
    case 13:
      on(function() {
        var r = Ct(e, 1);
        if (r !== null) {
          var l = Re();
          ft(r, e, 1, l);
        }
      }), _a(e, 1);
  }
};
Vi = function(e) {
  if (e.tag === 13) {
    var t = Ct(e, 134217728);
    if (t !== null) {
      var n = Re();
      ft(t, e, 134217728, n);
    }
    _a(e, 134217728);
  }
};
bu = function(e) {
  if (e.tag === 13) {
    var t = Ut(e), n = Ct(e, t);
    if (n !== null) {
      var r = Re();
      ft(n, e, t, r);
    }
    _a(e, t);
  }
};
Lu = function() {
  return ie;
};
Tu = function(e, t) {
  var n = ie;
  try {
    return ie = e, t();
  } finally {
    ie = n;
  }
};
Hs = function(e, t, n) {
  switch (t) {
    case "input":
      if (Fs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ql(r);
            if (!l) throw Error(P(90));
            uu(r), Fs(r, l);
          }
        }
      }
      break;
    case "textarea":
      du(e, n);
      break;
    case "select":
      t = n.value, t != null && Nn(e, !!n.multiple, t, !1);
  }
};
vu = ga;
wu = on;
var Yp = { usingClientEntryPoint: !1, Events: [Pr, xn, Ql, gu, yu, ga] }, Jn = { findFiberByHostInstance: Jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Xp = { bundleType: Jn.bundleType, version: Jn.version, rendererPackageName: Jn.rendererPackageName, rendererConfig: Jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ku(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Jn.findFiberByHostInstance || Kp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zr.isDisabled && Zr.supportsFiber) try {
    $l = Zr.inject(Xp), yt = Zr;
  } catch {
  }
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yp;
Ge.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Sa(t)) throw Error(P(200));
  return Hp(e, t, null, n);
};
Ge.createRoot = function(e, t) {
  if (!Sa(e)) throw Error(P(299));
  var n = !1, r = "", l = ed;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = xa(e, 1, !1, null, null, n, !1, r, l), e[Et] = t.current, xr(e.nodeType === 8 ? e.parentNode : e), new ka(t);
};
Ge.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
  return e = ku(t), e = e === null ? null : e.stateNode, e;
};
Ge.flushSync = function(e) {
  return on(e);
};
Ge.hydrate = function(e, t, n) {
  if (!Zl(t)) throw Error(P(200));
  return es(null, e, t, !0, n);
};
Ge.hydrateRoot = function(e, t, n) {
  if (!Sa(e)) throw Error(P(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", a = ed;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Zc(t, null, e, 1, n ?? null, l, !1, i, a), e[Et] = t.current, xr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Jl(t);
};
Ge.render = function(e, t, n) {
  if (!Zl(t)) throw Error(P(200));
  return es(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function(e) {
  if (!Zl(e)) throw Error(P(40));
  return e._reactRootContainer ? (on(function() {
    es(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Et] = null;
    });
  }), !0) : !1;
};
Ge.unstable_batchedUpdates = ga;
Ge.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Zl(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return es(e, t, n, !1, r);
};
Ge.version = "18.3.1-next-f1338f8080-20240426";
function td() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(td);
    } catch (e) {
      console.error(e);
    }
}
td(), tu.exports = Ge;
var Te = tu.exports, nd, Fo = Te;
nd = Fo.createRoot, Fo.hydrateRoot;
var rd = { exports: {} }, ts = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qp = h, Jp = Symbol.for("react.element"), Zp = Symbol.for("react.fragment"), em = Object.prototype.hasOwnProperty, tm = qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function ld(e, t, n) {
  var r, l = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) em.call(t, r) && !nm.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Jp, type: e, key: i, ref: a, props: l, _owner: tm.current };
}
ts.Fragment = Zp;
ts.jsx = ld;
ts.jsxs = ld;
rd.exports = ts;
var s = rd.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rm = {
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
const lm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), q = (e, t) => {
  const n = h.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: u,
      ...c
    }, m) => h.createElement(
      "svg",
      {
        ref: m,
        ...rm,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${lm(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([v, w]) => h.createElement(v, w)),
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
const sd = q("AlertCircle", [
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
const sm = q("AlertTriangle", [
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
const im = q("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const id = q("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = q("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = q("ArrowUpDown", [
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
const ad = q("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = q("Box", [
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
const um = q("Calendar", [
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
const cm = q("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ja = q("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const od = q("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ud = q("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = q("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = q("Download", [
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
const cd = q("FileJson", [
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
const pm = q("Folder", [
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
const mm = q("Info", [
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
const dd = q("LayoutGrid", [
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
const hm = q("LayoutList", [
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
const gm = q("Link2Off", [
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
const ym = q("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = q("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vm = q("Maximize", [
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
const wm = q("Minimize", [
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
const xm = q("MoreVertical", [
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
const fd = q("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = q("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _m = q("PlusCircle", [
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
const Ea = q("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = q("RefreshCw", [
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
const $n = q("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const km = q("Settings", [
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
const Ei = q("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ci = q("Star", [
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
const dn = q("Tag", [
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
const Wn = q("Trash2", [
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
const Sm = q("Type", [
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
const jm = q("Upload", [
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
const ve = q("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = X;
async function le(e) {
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
const Em = async () => {
  const e = await X.fetchApi("/meld/home-dir");
  return (await le(e)).home;
};
let Fl = !1;
const Cm = (e) => {
  Fl = e, Fl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Nm = (...e) => {
  Fl && console.log("[Meld]", ...e);
}, Mm = (...e) => {
  Fl && console.warn("[Meld]", ...e);
}, Im = (...e) => {
  console.error("[Meld]", ...e);
}, V = {
  log: Nm,
  warn: Mm,
  error: Im,
  init: Cm
}, pl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const i = await X.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return le(i);
}, pd = async (e) => {
  const t = await X.fetchApi(`/meld/image/${e}/details`);
  return le(t);
}, Ni = async (e, t = !1) => {
  const n = await X.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await le(n);
}, Ca = async (e) => {
  const t = await X.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return le(t);
}, md = async (e) => {
  const t = await X.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return le(t);
}, Uo = async (e, t) => {
  const n = await X.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await le(n);
}, bm = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await X.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await le(r);
  } catch {
    return [];
  }
}, Mi = async (e) => {
  const t = await X.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await le(t);
  } catch {
    return [];
  }
}, Lm = async (e, t) => {
  const n = await X.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await le(n);
}, Ii = async (e, t, n) => {
  const r = await X.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await le(r);
}, Tm = async (e) => {
  const t = await X.fetchApi(`/meld/image/${e}/workflow`);
  return le(t);
}, Pm = async (e) => {
  const t = await X.fetchApi(`/meld/image/${e}/snapshot_data`);
  return le(t);
}, Dm = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await X.fetchApi(n);
  return le(r);
}, Rm = async () => {
  const e = await X.fetchApi("/meld/search-suggestions");
  return le(e);
}, zm = async () => {
  const e = await X.fetchApi("/meld/search-keywords");
  return le(e);
}, Am = async () => {
  const e = await X.fetchApi("/meld/search-config");
  return le(e);
}, Om = async () => {
  const e = await X.fetchApi("/meld/favorites");
  return le(e);
}, Fm = async (e, t) => {
  const n = await X.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await le(n);
}, Vo = async (e) => {
  const t = await X.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await le(t);
}, $m = async (e, t, n) => {
  const r = await X.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await le(r);
}, Wm = {
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
}, hd = async () => {
  let e;
  try {
    const t = await X.fetchApi("/meld/settings");
    e = await le(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), Wm;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Um = async (e, t) => {
  const n = await X.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await le(n);
}, Vm = {
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
function Qm(e, t) {
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
      typeof l != "number" && l.initialMaskMode && (typeof l.initialMaskMode == "string" ? o = l.initialMaskMode : o = "run");
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
const gd = h.createContext(void 0), Bm = ({
  children: e
}) => {
  const [t, n] = h.useReducer(Qm, Vm), r = h.useRef(t.images.length), l = h.useRef(0);
  h.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const i = h.useCallback(
    async (x, _, S) => {
      const j = t.settings["gallery.max_load_count"], d = 200;
      let f = x;
      for (; f < Math.min(_, j) && S === l.current; )
        try {
          const p = Math.min(d, j - f);
          V.log("Background fetch: starting chunk", {
            offset: f,
            limit: p
          });
          const g = await pl(
            f,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== l.current || (n({ type: "APPEND_IMAGES", payload: g }), f += g.images.length, g.images.length === 0 || f >= g.total))
            break;
          await new Promise((y) => setTimeout(y, 300));
        } catch (p) {
          V.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = h.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const x = performance.now(), _ = ++l.current;
    try {
      const S = t.searchQuery.trim() !== "", j = t.settings["gallery.initial_load_count"];
      V.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: j,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const d = await pl(
        0,
        j,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), f = performance.now() - x;
      V.log("refreshImages: initial fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: d }), d.total > j && i(j, d.total, _);
    } catch (S) {
      V.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    i
  ]), o = h.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const x = performance.now();
    try {
      const _ = r.current, S = t.searchQuery.trim() !== "", j = t.pagination.limit;
      V.log("loadMoreImages: starting fetch", {
        nextOffset: _,
        fetchLimit: j,
        isSearch: S
      });
      const d = await pl(
        _,
        j,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), f = performance.now() - x;
      V.log("loadMoreImages: fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: d });
    } catch (_) {
      V.error("loadMoreImages: fetch failed", _), n({
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
  ]), u = h.useCallback(async () => {
    try {
      const x = await Om();
      n({ type: "SET_FAVORITES", payload: x });
    } catch (x) {
      V.error("Failed to load favorites", x);
    }
  }, []), c = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const x = Array.from(t.selectedIds), S = t.images.filter(
      (j) => t.selectedIds.has(j.id)
    ).some(
      (j) => j.parent_id || j.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: x,
        hasLineage: S,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), m = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const x = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const S = (await Ca(x)).restored_ids || x;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: S }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (_) {
      n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.selectedIds, t.viewScope]), v = h.useCallback(
    async (x, _) => {
      try {
        await Um(x, _), n({ type: "SET_SETTINGS", payload: { [x]: _ } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), w = h.useCallback(
    async (x) => {
      const _ = t.images.find((S) => S.id === x);
      if (_ && !_.is_minimal)
        return _;
      try {
        V.log("fetchFullImageDetails: fetching full data", { id: x });
        const S = await pd(x);
        return n({ type: "UPDATE_IMAGE", payload: S }), S;
      } catch (S) {
        throw V.error("Failed to fetch image details", S), S;
      }
    },
    [t.images]
  );
  return h.useEffect(() => {
    (async () => {
      try {
        const _ = await hd();
        n({ type: "SET_SETTINGS", payload: _ });
      } catch (_) {
        V.error("Failed to load settings", _);
      }
    })();
  }, []), h.useEffect(() => {
    u();
  }, [u]), h.useEffect(() => {
    const x = () => {
      a();
    }, _ = (j) => {
      const d = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: d }
      });
    }, S = (j) => {
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
    return window.addEventListener("meld-refresh", x), window.addEventListener("meld-scan-progress", _), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", x), window.removeEventListener("meld-scan-progress", _), window.removeEventListener("meld-scan-finished", S);
    };
  }, [a, t.scanStatus.progress.total]), h.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ s.jsx(
    gd.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: c,
        restoreSelected: m,
        updateSetting: v,
        fetchFullImageDetails: w
      },
      children: e
    }
  );
}, Me = () => {
  const e = h.useContext(gd);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, He = (e) => {
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
}, Na = async () => {
  const e = await X.fetchApi("/meld/tags");
  return le(e);
}, Hm = async (e) => {
  const t = await X.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return le(t);
}, Km = async (e) => {
  const t = await X.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await le(t);
}, Gm = async (e, t) => {
  const n = await X.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await le(n);
}, Ym = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await X.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Xm = async (e, t, n = !1, r) => {
  const l = await X.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await le(l);
  } catch (i) {
    return console.error("Failed to fetch folders", i), { folders: [], images: [], image_count: 0 };
  }
}, qm = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await X.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await le(l);
  } catch (i) {
    return console.error("Failed to fetch folder metadata", i), {};
  }
}, Jm = async (e, t, n) => {
  const r = await X.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await le(r)).count;
  } catch {
    return 0;
  }
}, Zm = async (e) => {
  const t = await X.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await le(t);
}, eh = async () => {
  const e = await X.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await le(e);
}, yd = () => {
  const { dispatch: e } = Me(), [t, n] = h.useState(() => {
    const E = localStorage.getItem("meld-import-config"), W = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (E)
      try {
        const L = JSON.parse(E);
        return { ...W, ...L, tags: [] };
      } catch {
        return W;
      }
    return W;
  });
  h.useEffect(() => {
    const { tags: E, ...W } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(W));
  }, [t]);
  const [r, l] = h.useState([]), [i, a] = h.useState([]), [o, u] = h.useState(0), [c, m] = h.useState(!1), [v, w] = h.useState([]), [x, _] = h.useState(""), [S, j] = h.useState(!1), [d, f] = h.useState(null), p = h.useRef(!1), g = (E) => {
    E.target === E.currentTarget && (p.current = !0);
  }, y = (E) => {
    E.target === E.currentTarget && p.current && e({ type: "CLOSE_MODAL" }), p.current = !1;
  };
  h.useEffect(() => {
    (async () => {
      try {
        const W = await Em();
        n((L) => L.custom_path ? L : { ...L, custom_path: W });
      } catch (W) {
        V.error("Failed to fetch home directory:", W);
      }
    })();
  }, []), h.useEffect(() => {
    const E = new AbortController();
    return (async () => {
      const L = t.type === "custom" ? t.custom_path : t.subfolder;
      if (V.log(
        `loadFolders started. Path: "${L}", Type: "${t.type}"`
      ), t.type === "custom" && !L) {
        V.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      m(!0);
      const H = L, b = t.type;
      try {
        V.log("Step 1: Fast load starting...");
        const R = await Xm(
          t.type,
          L,
          !0,
          E.signal
        );
        if (E.signal.aborted) {
          V.log("Step 1: Aborted.");
          return;
        }
        V.log(
          `Step 1 complete. Found ${R.folders.length} folders, ${R.images.length} images.`
        ), l(R.folders), a(R.images), u(null);
        const D = R.folders.map((C) => C.name);
        D.length > 0 && (V.log(
          `Step 2: Metadata fetch starting for ${D.length} folders...`
        ), qm(
          b,
          H,
          D,
          E.signal
        ).then((C) => {
          if (E.signal.aborted) {
            V.log("Step 2: Aborted.");
            return;
          }
          V.log("Step 2: Metadata fetch complete."), l(
            (Q) => Q.map((Z) => {
              const O = C[Z.name];
              return O ? { ...Z, count: O.count, preview: O.preview } : Z;
            })
          );
        }).catch((C) => {
          C.name !== "AbortError" && V.error("Step 2: Metadata fetch failed:", C);
        })), V.log("Step 3: Path image count starting..."), Jm(b, H, E.signal).then((C) => {
          if (E.signal.aborted) {
            V.log("Step 3: Aborted.");
            return;
          }
          V.log(`Step 3: Path image count complete: ${C}`), u(C);
        }).catch((C) => {
          C.name !== "AbortError" && V.error("Step 3: Path image count failed:", C);
        });
      } catch (R) {
        if (R.name === "AbortError") {
          V.log("Request aborted.");
          return;
        }
        V.error("Failed to load folders:", R), l([]), a([]), u(0);
      } finally {
        E.signal.aborted || m(!1);
      }
    })(), () => {
      E.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const N = h.useCallback(async () => {
    j(!0);
    try {
      const E = await Na();
      w(E);
    } catch (E) {
      V.error("Failed to fetch tags:", E);
    } finally {
      j(!1);
    }
  }, []);
  h.useEffect(() => {
    N();
  }, [N]), h.useEffect(() => {
    const E = (W) => {
      W.key === "Escape" && (W.preventDefault(), W.stopImmediatePropagation(), d ? f(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", E, { capture: !0 }), () => window.removeEventListener("keydown", E, { capture: !0 });
  }, [d, e]);
  const I = h.useMemo(() => v.filter(
    (E) => E.name.toLowerCase().includes(x.toLowerCase()) && !t.tags.includes(E.name)
  ), [v, x, t.tags]), T = (E) => {
    const W = E.trim();
    W && !t.tags.includes(W) && (n({ ...t, tags: [...t.tags, W] }), _(""));
  }, A = (E) => {
    n({ ...t, tags: t.tags.filter((W) => W !== E) });
  }, k = (E) => {
    E.key === "Enter" && x.trim() && (E.preventDefault(), T(x.trim()));
  }, M = async () => {
    try {
      await Zm(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (E) {
      V.error("Failed to start scan:", E), alert(`Failed to start scan: ${E}`);
    }
  }, F = (E) => {
    if (t.type === "custom") {
      const W = t.custom_path.includes("\\") ? "\\" : "/", L = t.custom_path.endsWith(W) ? `${t.custom_path}${E}` : `${t.custom_path}${W}${E}`;
      n({ ...t, custom_path: L });
    } else {
      const W = t.subfolder ? `${t.subfolder}/${E}` : E;
      n({ ...t, subfolder: W });
    }
  }, B = () => {
    if (t.type === "custom") {
      const E = t.custom_path.includes("\\") ? "\\" : "/", W = t.custom_path.split(E);
      if (W.length > 1) {
        W.pop();
        let L = W.join(E);
        L === "" && E === "/" && (L = "/"), n({ ...t, custom_path: L });
      }
    } else {
      const E = t.subfolder.split("/");
      E.pop(), n({ ...t, subfolder: E.join("/") });
    }
  };
  return Te.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: y,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (E) => E.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(ve, { size: 20 })
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
                          onChange: (E) => n({
                            ...t,
                            type: E.target.value,
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
                          onChange: (E) => n({ ...t, recursive: E.target.checked })
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
                          onChange: (E) => n({
                            ...t,
                            link_strategy: E.target.value,
                            auto_link_parent: E.target.value !== "none"
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((E) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        E,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => A(E),
                            children: /* @__PURE__ */ s.jsx(ve, { size: 12 })
                          }
                        )
                      ] }, E)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx($n, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: x,
                            onChange: (E) => _(E.target.value),
                            onKeyDown: k
                          }
                        ),
                        x.trim() && !t.tags.includes(x.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => T(x),
                            children: /* @__PURE__ */ s.jsx(Ea, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: S ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : I.length === 0 ? x && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        x
                      ] }) : I.map((E) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => T(E.name),
                          children: E.name
                        },
                        E.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: M,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(ns, { size: 16 }),
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
                          onClick: B,
                          children: [
                            /* @__PURE__ */ s.jsx(od, { size: 16 }),
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
                          onChange: (E) => n({ ...t, custom_path: E.target.value }),
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
                      r.map((E) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => F(E.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: E.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: He(E.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(pm, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: E.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${E.count === null ? "meld-folder-count--loading" : ""}`,
                                children: E.count !== null ? `${E.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(ud, { size: 14 })
                          ]
                        },
                        E.name
                      )),
                      i.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: i.map((E) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(E),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: He(E),
                              alt: E.filename,
                              title: E.filename
                            }
                          )
                        },
                        E.filename
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
              onClick: (E) => {
                E.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (E) => E.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => f(null),
                          children: /* @__PURE__ */ s.jsx(ve, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: He(d),
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
}, th = () => {
  const { state: e, dispatch: t, updateSetting: n } = Me(), [r, l] = h.useState("Gallery"), [i, a] = h.useState({
    ...e.settings
  }), [o, u] = h.useState(
    {}
  ), [c, m] = h.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, w] = h.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, _] = h.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [S, j] = h.useState(e.settings["viewer.thumbnail_window_size"].toString()), [d, f] = h.useState(e.settings["gallery.trash_retention_days"].toString()), [p, g] = h.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [y, N] = h.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [I, T] = h.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [A, k] = h.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    M,
    F
  ] = h.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    B,
    E
  ] = h.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [W, L] = h.useState(
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
      const O = Object.keys(i).filter(
        (J) => i[J] !== e.settings[J] && !o[J]
      );
      if (O.length > 0)
        for (const J of O)
          await n(J, i[J]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (O, J) => {
      a((Y) => ({
        ...Y,
        [O]: !J
      }));
    },
    handleNumberChange: (O, J, Y, we) => {
      O === "gallery.initial_load_count" ? m(J) : O === "gallery.max_load_count" ? w(J) : O === "gallery.lineage_max_depth" ? _(J) : O === "viewer.thumbnail_window_size" ? j(J) : O === "gallery.trash_retention_days" ? f(J) : O === "gallery.auto_link_phash_threshold" ? g(J) : O === "gallery.suggest_phash_threshold" ? N(J) : O === "viewer.details.max_positive_prompt_lines" ? T(J) : O === "viewer.details.max_negative_prompt_lines" ? k(J) : O === "fullscreen.details.max_positive_prompt_lines" ? F(J) : O === "fullscreen.details.max_negative_prompt_lines" ? E(J) : O === "sidebar.thumbnail_size" && L(J);
      const nt = Number.parseInt(J, 10);
      if (!Number.isNaN(nt)) {
        let rt = nt;
        Y !== void 0 && rt < Y && (rt = Y), we !== void 0 && rt > we && (rt = we), a((fn) => ({
          ...fn,
          [O]: rt
        }));
      }
    },
    handleNumberBlur: (O) => {
      O.key === "gallery.initial_load_count" ? m(
        i["gallery.initial_load_count"].toString()
      ) : O.key === "gallery.max_load_count" ? w(i["gallery.max_load_count"].toString()) : O.key === "gallery.lineage_max_depth" ? _(
        i["gallery.lineage_max_depth"].toString()
      ) : O.key === "viewer.thumbnail_window_size" ? j(
        i["viewer.thumbnail_window_size"].toString()
      ) : O.key === "gallery.trash_retention_days" ? f(
        i["gallery.trash_retention_days"].toString()
      ) : O.key === "gallery.auto_link_phash_threshold" ? g(
        i["gallery.auto_link_phash_threshold"].toString()
      ) : O.key === "gallery.suggest_phash_threshold" ? N(
        i["gallery.suggest_phash_threshold"].toString()
      ) : O.key === "viewer.details.max_positive_prompt_lines" ? T(
        i["viewer.details.max_positive_prompt_lines"].toString()
      ) : O.key === "viewer.details.max_negative_prompt_lines" ? k(
        i["viewer.details.max_negative_prompt_lines"].toString()
      ) : O.key === "fullscreen.details.max_positive_prompt_lines" ? F(
        i["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : O.key === "fullscreen.details.max_negative_prompt_lines" ? E(
        i["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : O.key === "sidebar.thumbnail_size" && L(i["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      a((O) => ({
        ...O,
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
    validateShortcut: (O) => O.trim() ? O.trim().split(/\s+/).every((Y) => !!(Y === "next" || Y === "prev" || Y === "delete" || Y.startsWith("tag:") && Y.length > 4 || Y.startsWith("-tag:") && Y.length > 5 || Y.startsWith("tag-toggle:") && Y.length > 11)) : !0,
    // Input states
    initialLoadCountInput: c,
    maxLoadCountInput: v,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: S,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: y,
    maxPositivePromptLinesInput: I,
    maxNegativePromptLinesInput: A,
    fullscreenMaxPositivePromptLinesInput: M,
    fullscreenMaxNegativePromptLinesInput: B,
    thumbnailSizeInput: W
  };
}, U = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), nh = ({
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
] }), rh = ({
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
    /* @__PURE__ */ s.jsx(U, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      U,
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
      U,
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
      U,
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
      U,
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
] }), lh = ({
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
        U,
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
                t((v) => ({
                  ...v,
                  [u]: m.target.value
                }));
              },
              onBlur: () => {
                const m = l(
                  e[u] || ""
                );
                r((v) => ({
                  ...v,
                  [u]: !m
                }));
              }
            }
          )
        },
        u
      )),
      /* @__PURE__ */ s.jsx(
        U,
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
      U,
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
}, sh = ({
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
      U,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (m) => l((v) => ({
              ...v,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
] }), ih = ({
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
] }), vd = () => {
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
    handleViewTrash: v,
    validateShortcut: w,
    // Input states
    initialLoadCountInput: x,
    maxLoadCountInput: _,
    lineageMaxDepthInput: S,
    thumbnailWindowSizeInput: j,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: g,
    maxNegativePromptLinesInput: y,
    fullscreenMaxPositivePromptLinesInput: N,
    fullscreenMaxNegativePromptLinesInput: I,
    thumbnailSizeInput: T
  } = th(), A = h.useRef(!1), k = (E) => {
    E.target === E.currentTarget && (A.current = !0);
  }, M = (E) => {
    E.target === E.currentTarget && A.current && a(), A.current = !1;
  }, F = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], B = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          sh,
          {
            localSettings: n,
            handleNumberChange: u,
            handleNumberBlur: c,
            handleToggle: o,
            setLocalSettings: r,
            handleViewTrash: v,
            lineageMaxDepthInput: S,
            trashRetentionDaysInput: d,
            autoLinkPhashThresholdInput: f,
            suggestPhashThresholdInput: p
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          rh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailSizeInput: T,
            initialLoadCountInput: x,
            maxLoadCountInput: _
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          ih,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: j,
            maxPositivePromptLinesInput: g,
            maxNegativePromptLinesInput: y
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          nh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: N,
            maxNegativePromptLinesInput: I
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          lh,
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
  return Te.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: k,
        onMouseUp: M,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (E) => E.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: a,
                    children: /* @__PURE__ */ s.jsx(ve, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: F.map((E) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === E.id ? "active" : ""}`,
                    onClick: () => t(E.id),
                    children: E.label
                  },
                  E.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: B() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, ct = "none", wd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Me(), [i, a] = h.useState([]), [o, u] = h.useState(t), [c, m] = h.useState(""), [v, w] = h.useState(!0), [x, _] = h.useState(!1), S = h.useRef(null), j = e.length > 1, d = h.useRef(!1), f = (k) => {
    k.target === k.currentTarget && (d.current = !0);
  }, p = (k) => {
    k.target === k.currentTarget && d.current && n(), d.current = !1;
  }, g = h.useCallback(async () => {
    w(!0);
    try {
      const k = await Na();
      a(k);
    } catch (k) {
      console.error("Failed to fetch tags:", k);
    } finally {
      w(!1);
    }
  }, []);
  h.useEffect(() => {
    g();
  }, [g]), h.useEffect(() => {
    S.current && S.current.focus();
    const k = (M) => {
      M.key === "Escape" && (M.preventDefault(), M.stopPropagation(), M.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", k, { capture: !0 }), () => window.removeEventListener("keydown", k, {
      capture: !0
    });
  }, [n]);
  const y = h.useMemo(() => i.filter(
    (k) => k.name.toLowerCase().includes(c.toLowerCase()) && !o.includes(k.name)
  ), [i, c, o]), N = (k) => {
    const M = k.trim();
    if (M.toLowerCase() === ct) {
      alert(
        `Tag name '${ct}' is reserved for search and cannot be used.`
      );
      return;
    }
    M && !o.includes(M) && (u([...o, M]), m(""));
  }, I = (k) => {
    u(o.filter((M) => M !== k));
  }, T = async () => {
    _(!0);
    try {
      if (j) {
        const k = o.filter((F) => !t.includes(F)), M = t.filter(
          (F) => !o.includes(F)
        );
        await Ii(e, k, M);
      } else
        await Lm(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (k) {
      console.error("Failed to update tags:", k), alert("Failed to update tags.");
    } finally {
      _(!1);
    }
  }, A = (k) => {
    k.key === "Enter" && c.trim() ? (k.preventDefault(), k.stopPropagation(), N(c.trim())) : k.key === "Escape" && (k.preventDefault(), k.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return Te.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: p,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(dn, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(ve, { size: 20 }) })
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((k) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                k,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => I(k),
                    children: /* @__PURE__ */ s.jsx(ve, { size: 12 })
                  }
                )
              ] }, k)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx($n, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: c,
                    onChange: (k) => m(k.target.value),
                    onKeyDown: A
                  }
                ),
                c.trim() && !o.includes(c.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => N(c),
                    children: [
                      /* @__PURE__ */ s.jsx(Ea, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: v ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : y.length === 0 ? c ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : y.map((k) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => N(k.name),
                  children: k.name
                },
                k.id
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
                onClick: T,
                disabled: x,
                children: x ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, ah = async () => {
  const e = await X.fetchApi("/meld/workflows");
  return le(e);
}, oh = async (e) => {
  const t = await X.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return le(t);
}, xd = ({
  images: e,
  onExecute: t,
  isMaskMode: n
}) => {
  var p;
  const { dispatch: r } = Me(), [l, i] = h.useState([]), [a, o] = h.useState(!0), [u, c] = h.useState(null), [m, v] = h.useState(!1), w = h.useMemo(() => l.map((g) => {
    let y = g.valid, N = g.reason;
    return n && (g.mask_count === 0 ? (y = !1, N = "No 'Load Image (as Mask)' node found.") : g.mask_count > 1 && (y = !1, N = `Multiple 'Load Image (as Mask)' nodes found (${g.mask_count}).`)), { ...g, valid: y, reason: N };
  }).sort((g, y) => g.valid !== y.valid ? g.valid ? -1 : 1 : g.name.localeCompare(y.name)), [l, n]), x = h.useCallback(async () => {
    try {
      o(!0);
      const g = await ah();
      i(g), c(null);
    } catch (g) {
      c(g instanceof Error ? g.message : String(g));
    } finally {
      o(!1);
    }
  }, []);
  h.useEffect(() => {
    x();
  }, [x]);
  const _ = h.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]), S = h.useRef(!1), j = h.useCallback((g) => {
    g.target === g.currentTarget && (S.current = !0);
  }, []), d = h.useCallback(
    (g) => {
      g.target === g.currentTarget && S.current && _(), S.current = !1;
    },
    [_]
  );
  h.useEffect(() => {
    const g = (y) => {
      y.key === "Escape" && _();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [_]);
  const f = async (g) => {
    if (!m)
      try {
        v(!0), await t(g), _();
      } catch (y) {
        c(y instanceof Error ? y.message : String(y)), v(!1);
      }
  };
  return Te.createPortal(
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
            onClick: (g) => g.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(cd, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: _,
                    children: /* @__PURE__ */ s.jsx(ve, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: a ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : u ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(sd, { size: 20 }),
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
                w.map((g) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-workflow-item ${g.valid ? "" : "meld-workflow-item--invalid"}`,
                    onClick: () => g.valid && !m && f(g.name),
                    title: g.reason || "Click to run",
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: g.name }),
                        !g.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: g.reason })
                      ] }),
                      g.valid && /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary meld-btn-small",
                          disabled: m,
                          onClick: (y) => {
                            y.stopPropagation(), f(g.name);
                          },
                          children: [
                            /* @__PURE__ */ s.jsx(ns, { size: 14 }),
                            m ? "Queuing..." : "Queue"
                          ]
                        }
                      )
                    ]
                  },
                  g.name
                ))
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: _,
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
}, _d = () => ({ executeWorkflow: h.useCallback(
  async (t, n, r) => {
    var v, w, x, _, S, j;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r
    });
    const l = await oh(t);
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
      const g = document.querySelectorAll(".workflow-tab");
      for (const I of Array.from(g)) {
        const T = I.querySelector(".workflow-label"), A = ((v = T == null ? void 0 : T.textContent) == null ? void 0 : v.trim()) || ((w = I.textContent) == null ? void 0 : w.trim()) || "";
        if (A === f || A === t || A.startsWith(`${f} `) || A.startsWith(`${f}•`)) {
          I.click(), p = !0;
          break;
        }
      }
      p || await d.loadGraphData(l, !0, !0, t), await new Promise((I) => setTimeout(I, 200));
      const y = d.graph._nodes;
      console.log("[Meld] Active graph nodes count:", y.length);
      const N = y.find(
        (I) => String(I.id) === i || I.type === "MeldImageLoader"
      );
      if (N) {
        const I = (x = N.widgets) == null ? void 0 : x.find((T) => T.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: N.id,
          imagePath: u
        }), I && (I.value = u);
      } else
        console.warn(
          "[Meld] MeldImageLoader not found in active graph after loading"
        );
      if (r) {
        const I = y.find(
          (T) => String(T.id) === a || T.type === "LoadImageMask"
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: I == null ? void 0 : I.id,
          maskFilename: r
        }), I) {
          const T = (_ = I.widgets) == null ? void 0 : _.find(
            (k) => k.name === "image"
          );
          T && (T.value = `${r} [temp]`);
          const A = (S = I.widgets) == null ? void 0 : S.find(
            (k) => k.name === "channel"
          );
          A && (A.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      d.graph.setDirtyCanvas(!0, !0);
      try {
        await d.queuePrompt(0);
        return;
      } catch (I) {
        throw console.error("Failed to queue workflow:", I), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const c = JSON.parse(JSON.stringify(l));
    c[i].inputs.image = u, r && a && (c[a].inputs.image = `${r} [temp]`, c[a].inputs.channel = "red");
    const m = await X.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: c,
        client_id: X.clientId
      })
    });
    if (!m.ok) {
      const d = await m.json();
      throw new Error(((j = d.error) == null ? void 0 : j.message) || "Failed to queue workflow");
    }
    return await m.json();
  },
  []
) }), kd = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: i } = Me(), a = h.useRef(!0);
  h.useEffect(() => () => {
    a.current = !1;
  }, []);
  const o = h.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), u = h.useMemo(
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
  ), c = h.useRef(l.viewerImageId);
  h.useEffect(() => {
    c.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const m = h.useCallback(() => {
    i({ type: "CLOSE_MODAL" });
  }, [i]), v = h.useRef(!1), w = h.useCallback((d) => {
    d.target === d.currentTarget && (v.current = !0);
  }, []), x = h.useCallback(
    (d) => {
      d.target === d.currentTarget && v.current && m(), v.current = !1;
    },
    [m]
  ), _ = h.useCallback(
    (d) => {
      if (!a.current) return;
      const f = c.current;
      if (f === null || !d.has(f))
        return;
      const p = u.findIndex(
        (y) => y.id === f
      );
      if (p === -1) return;
      let g = !1;
      for (let y = p + 1; y < u.length; y++)
        if (!d.has(u[y].id)) {
          i({
            type: "OPEN_VIEWER",
            payload: { id: u[y].id, mode: l.viewerMode }
          }), g = !0;
          break;
        }
      if (!g) {
        for (let y = p - 1; y >= 0; y--)
          if (!d.has(u[y].id)) {
            i({
              type: "OPEN_VIEWER",
              payload: { id: u[y].id, mode: l.viewerMode }
            }), g = !0;
            break;
          }
      }
      g || i({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, u, i]
  );
  h.useEffect(() => {
    const d = (f) => {
      f.key === "Escape" && m();
    };
    return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
  }, [m]);
  const S = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e), f = u.filter(
        (p) => d.has(p.id)
      );
      if (_(d), await Ni(e, n), !a.current) return;
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
        const g = await Mi(p);
        if (!a.current) return;
        for (const y of g)
          d.add(y.id);
      }
      const f = u.filter(
        (p) => d.has(p.id)
      );
      if (_(d), await Ni(Array.from(d), n), !a.current) return;
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
  return Te.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
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
                    children: /* @__PURE__ */ s.jsx(ve, { size: 20 })
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
                            sm,
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
                      onClick: S,
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
}, Sd = ({ message: e }) => {
  const { dispatch: t } = Me();
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => t({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (n) => n.stopPropagation(), children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ s.jsx(sd, { size: 20, color: "var(--meld-danger-color)" }),
            /* @__PURE__ */ s.jsx("h2", { children: "Error" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              className: "meld-modal-close",
              onClick: () => t({ type: "CLOSE_MODAL" }),
              type: "button",
              children: /* @__PURE__ */ s.jsx(ve, { size: 20 })
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
}, jd = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Me(), [l, i] = h.useState([]), [a, o] = h.useState(!0), [u, c] = h.useState(!1), m = h.useRef(!1), v = (y) => {
    y.target === y.currentTarget && (m.current = !0);
  }, w = (y) => {
    y.target === y.currentTarget && m.current && n({ type: "CLOSE_MODAL" }), m.current = !1;
  }, x = t.images.find((y) => y.id === e), _ = h.useCallback(async () => {
    o(!0);
    try {
      const y = t.settings["gallery.suggest_phash_threshold"], N = await bm(e, y);
      i(N);
    } catch (y) {
      console.error("Failed to load suggestions:", y);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  h.useEffect(() => {
    _();
  }, [_]);
  const S = async (y) => {
    if (y == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!x || y === x.parent_id) && !(x.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Uo(e, y), await pd(e), await r(), n({ type: "CLOSE_MODAL" });
      } catch (N) {
        console.error("Failed to link parent:", N);
      }
  }, j = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Uo(e, null), await r(), n({ type: "CLOSE_MODAL" });
      } catch (y) {
        console.error("Failed to remove source:", y), alert("Failed to remove source image.");
      }
  }, d = async (y) => {
    o(!0);
    try {
      const N = await Ym(y), { id: I } = await md({
        filename: N.name,
        subfolder: N.subfolder || "",
        type: N.type || "input"
      });
      if (I === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await S(I);
    } catch (N) {
      console.error("Failed to upload/register image:", N);
    } finally {
      o(!1);
    }
  }, f = (y) => {
    y.preventDefault(), y.stopPropagation(), c(!1);
    const N = y.dataTransfer.files[0];
    N != null && N.type.startsWith("image/") && d(N);
  };
  if (!x) return null;
  const p = l.filter((y) => y.is_source_match), g = l.filter((y) => !y.is_source_match);
  return Te.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
        onMouseUp: w,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (y) => y.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              x.id
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ s.jsx(ve, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            x.parent_id && /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx(ym, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    x.parent_filename && /* @__PURE__ */ s.jsx(
                                      "img",
                                      {
                                        src: He({
                                          filename: x.parent_filename,
                                          subfolder: x.parent_subfolder || "",
                                          type: x.parent_type || "output"
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
                                              children: x.parent_filename || "Unknown Image"
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
                                                x.parent_id
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
                      children: /* @__PURE__ */ s.jsx(gm, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (y) => {
                  y.preventDefault(), y.stopPropagation(), c(!0);
                },
                onDragOver: (y) => {
                  y.preventDefault(), y.stopPropagation(), y.dataTransfer.dropEffect = "copy", c(!0);
                },
                onDragLeave: (y) => {
                  y.preventDefault(), y.stopPropagation(), c(!1);
                },
                onDrop: f,
                children: [
                  /* @__PURE__ */ s.jsx(jm, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              p.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: p.map((y) => {
                  const N = y.id === x.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${N ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !N && S(y.id),
                      style: {
                        cursor: N ? "default" : "pointer",
                        ...N ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: He(y), alt: y.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: y.filename }),
                          N && /* @__PURE__ */ s.jsx(
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
                    y.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                g.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: g.map((y) => {
                  const N = y.id === x.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${N ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !N && S(y.id),
                      style: {
                        cursor: N ? "default" : "pointer",
                        ...N ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: He(y), alt: y.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: y.filename }),
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
                                  Math.round((64 - y.distance) / 64 * 100),
                                  "%"
                                ] }),
                                N && /* @__PURE__ */ s.jsx(
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
                    y.id
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
}, uh = () => {
  const { state: e, dispatch: t } = Me(), { executeWorkflow: n } = _d();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      xd,
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
    e.activeModal.type === "parent_selection" && Te.createPortal(
      /* @__PURE__ */ s.jsx(jd, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Te.createPortal(/* @__PURE__ */ s.jsx(yd, {}), document.body),
    e.activeModal.type === "settings" && Te.createPortal(/* @__PURE__ */ s.jsx(vd, {}), document.body),
    e.activeModal.type === "tag_edit" && Te.createPortal(
      /* @__PURE__ */ s.jsx(
        wd,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && Te.createPortal(
      /* @__PURE__ */ s.jsx(Sd, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && Te.createPortal(
      /* @__PURE__ */ s.jsx(
        kd,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    )
  ] });
}, Ma = (e, t) => {
  const n = h.useCallback(async (c) => {
    try {
      const m = await Tm(c.id);
      if (!m.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        m.workflow
      ), V.log("Workflow restored successfully from Meld");
    } catch (m) {
      V.error("Error restoring workflow:", m), alert("Failed to restore workflow.");
    }
  }, []), r = h.useCallback(async (c) => {
    try {
      const m = await Pm(c.id), v = "MeldUnifiedLoader", w = window.app, _ = window.LiteGraph.createNode(v);
      if (!_) {
        console.error(`Node type ${v} not found.`), alert(
          `Node type ${v} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const S = {
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
      if (_.widgets) {
        for (const [p, g] of Object.entries(S)) {
          const y = m[p];
          if (y != null) {
            const N = _.widgets.find(
              (I) => I.name === g
            );
            N && (N.value = y);
          }
        }
        const f = _.widgets.find(
          (p) => p.name === "control_after_generate"
        );
        f && (f.value = "fixed");
      }
      const j = w.canvas.ds.offset, d = w.canvas.ds.scale;
      _.pos = [(-j[0] + 400) / d, (-j[1] + 300) / d], w.graph.add(_), w.canvas.selectNode(_), w.canvas.centerOnNode(_);
    } catch (m) {
      console.error("Error adding Unified Loader:", m), alert("Failed to load settings.");
    }
  }, []), l = h.useCallback(
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
  ), i = h.useCallback(
    (c) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: c.id }
      });
    },
    [t]
  ), a = h.useCallback(
    (c) => {
      const m = Array.isArray(c) ? c : [c];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: m }
      });
    },
    [t]
  ), o = h.useCallback(
    (c, m = "run") => {
      var S;
      console.log("[Meld] handleRunWithMask called", c, m);
      const v = window.app, w = ((S = v == null ? void 0 : v.graph) == null ? void 0 : S._nodes) || [];
      console.log(
        "[Meld] Current graph nodes:",
        w.map((j) => ({
          id: j.id,
          type: j.type
        }))
      );
      const x = w.some(
        (j) => j.type === "LoadImageMask"
      ), _ = w.some(
        (j) => j.type === "MeldImageLoader"
      );
      if (console.log("[Meld] Nodes found:", { hasMaskNode: x, hasLoaderNode: _ }), m === "apply") {
        if (!x || !_) {
          const j = [];
          _ || j.push("'Meld Image Loader'"), x || j.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${j.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
      } else if (!x) {
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
        type: "OPEN_VIEWER",
        payload: { id: c.id, mode: "gallery", initialMaskMode: m }
      });
    },
    [t]
  ), u = h.useCallback(
    async (c, m) => {
      try {
        const v = c.id, x = (await Ca([v])).restored_ids || [v];
        t({ type: "REMOVE_IMAGES", payload: x }), m == null || m();
      } catch (v) {
        t({
          type: "SET_ERROR",
          payload: v instanceof Error ? v.message : String(v)
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
}, Ed = (e, t) => {
  const n = h.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((c) => ({
          id: c.id,
          imgSrc: He(c)
        }));
      const i = r.parent_id;
      if (!i || !r.parent_filename) return [];
      const a = e.find((c) => c.id === i);
      let o = null;
      if (a ? o = He(a) : o = He({
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
}, Cd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Me(), l = t.selectedIds.has(e.id), i = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: a,
    handleAddUnifiedLoader: o,
    handleEditSource: u,
    handleEditTags: c,
    handleRunWithWorkflow: m,
    handleRunWithMask: v
  } = Ma(t, n), { getParentChain: w } = Ed(t.images, t.settings), [x, _] = h.useState(null), [S, j] = h.useState(!1), [d, f] = h.useState(null), [p, g] = h.useState(!1), y = h.useRef(null), N = async (C, Q, Z = !1) => {
    try {
      await navigator.clipboard.writeText(C), Z ? (g(!0), setTimeout(() => g(!1), 2e3)) : (f(Q), setTimeout(() => f(null), 2e3));
    } catch (O) {
      console.error("Failed to copy text: ", O);
    }
  };
  h.useEffect(() => {
    const C = (Z) => {
      Z.key === "Escape" && (x ? _(null) : j(!1));
    }, Q = (Z) => {
      y.current && !y.current.contains(Z.target) && j(!1);
    };
    return window.addEventListener("keydown", C), S && document.addEventListener("mousedown", Q), () => {
      window.removeEventListener("keydown", C), document.removeEventListener("mousedown", Q);
    };
  }, [S, x]);
  const I = w(e), A = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, k = He(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: i,
    popupContent: x,
    setPopupContent: _,
    isMenuOpen: S,
    setIsMenuOpen: j,
    copiedLabel: d,
    popupCopied: p,
    menuRef: y,
    parentChain: I,
    displayFilename: A,
    imgSrc: k,
    handleCopy: N,
    handleClick: (C) => {
      C.shiftKey ? (C.preventDefault(), C.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : C.ctrlKey || C.metaKey || t.selectedIds.size > 0 ? (C.preventDefault(), C.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (C) => {
      C.shiftKey ? (C.preventDefault(), C.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : C.ctrlKey || C.metaKey || t.selectedIds.size > 0 ? (C.preventDefault(), C.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (C.preventDefault(), C.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (C) => {
      (C.shiftKey || C.ctrlKey || C.metaKey || t.selectedIds.size > 0 || !C.target.closest("img.meld-image-card__thumbnail")) && C.preventDefault();
    },
    handleKeyDown: (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
    handleRunWithMask: (C = "run") => {
      console.log(
        "[Meld] handleRunWithMaskAction called for image:",
        e.id,
        C
      ), v(e, C);
    },
    fetchFullImageDetails: r
  };
}, ch = ({
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
      children: /* @__PURE__ */ s.jsx(xm, { size: 16 })
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
      children: /* @__PURE__ */ s.jsx($o, { size: 16 })
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
          /* @__PURE__ */ s.jsx($o, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(im, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(ns, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(Ei, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(Ei, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(_m, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(dn, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Edit Tags" })
        ]
      }
    )
  ] })
] }), dh = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => Te.createPortal(
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
                l ? /* @__PURE__ */ s.jsx(ja, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  dm,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  ve,
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
), Nd = ml.memo(
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
      parentChain: v,
      displayFilename: w,
      imgSrc: x,
      handleCopy: _,
      handleClick: S,
      handleContainerClick: j,
      handleMouseDown: d,
      handleKeyDown: f,
      handleRestoreWorkflow: p,
      handleAddUnifiedLoader: g,
      handleEditSource: y,
      handleEditTags: N,
      handleRunWithWorkflow: I,
      handleRunWithMask: T,
      fetchFullImageDetails: A
    } = Cd(e);
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
              src: x,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              width: e.width || void 0,
              height: e.height || void 0,
              onMouseDown: d,
              onClick: (k) => {
                k.stopPropagation(), S(k);
              }
            }
          ) }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && w,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
                (k, M) => k.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: k.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (F) => {
                      F.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: k.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: M === 0 ? "Source" : M === 1 ? "Grand-Source" : `Ancestor (S${M + 1})`,
                    alt: "source thumb"
                  },
                  k.id || M
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
                onClick: async (k) => {
                  k.stopPropagation();
                  const M = await A(e.id);
                  i({
                    title: "Model",
                    text: M.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (k) => {
                        k.stopPropagation();
                        const M = await A(e.id);
                        _(M.model_name || "-", "Model");
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
                onClick: async (k) => {
                  k.stopPropagation();
                  const M = await A(e.id);
                  i({
                    title: "Positive Prompt",
                    text: M.positive_prompt || M.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (k) => {
                        k.stopPropagation();
                        const M = await A(e.id);
                        _(
                          M.positive_prompt || M.positive || "-",
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
                onClick: async (k) => {
                  k.stopPropagation();
                  const M = await A(e.id);
                  i({
                    title: "Negative Prompt",
                    text: M.negative_prompt || M.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (k) => {
                        k.stopPropagation();
                        const M = await A(e.id);
                        _(
                          M.negative_prompt || M.negative || "-",
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
                onClick: (k) => {
                  k.stopPropagation(), N();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((k, M) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: k
                    },
                    `${k}-${M}`
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
            ch,
            {
              isMenuOpen: a,
              setIsMenuOpen: o,
              menuRef: m,
              onAddUnifiedLoader: g,
              onRestoreWorkflow: p,
              onRunWithWorkflow: I,
              onRunWithMask: (k) => T(k),
              onEditSource: y,
              onEditTags: N
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            dh,
            {
              title: l.title,
              text: l.text,
              onClose: () => i(null),
              onCopy: (k) => _(k, "", !0),
              isCopied: c
            }
          )
        ]
      }
    );
  }
);
Nd.displayName = "DetailedImageCard";
const Md = ml.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: i,
      handleClick: a
    } = Cd(e);
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
Md.displayName = "SimpleImageCard";
const fh = ({ image: e }) => {
  const { state: t } = Me();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Md, { image: e }) : /* @__PURE__ */ s.jsx(Nd, { image: e });
}, ph = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: l
}) => {
  const [i, a] = h.useState(!1), o = h.useRef(null);
  return h.useEffect(() => {
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
}, mh = () => {
  const { state: e, dispatch: t } = Me(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await eh(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
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
        children: /* @__PURE__ */ s.jsx(Ei, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(cm, { size: 14, className: "meld-success-icon" }),
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
}, hh = () => {
  const { state: e, refreshFavorites: t } = Me(), [n, r] = h.useState(!1), [l, i] = h.useState(null), [a, o] = h.useState(null), [u, c] = h.useState(""), [m, v] = h.useState("");
  h.useEffect(() => {
    if (l) {
      const j = setTimeout(() => i(null), 3e3);
      return () => clearTimeout(j);
    }
  }, [l]);
  const w = h.useCallback(
    async (j, d, f) => {
      j.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${f}"?`;
      if (window.confirm(p))
        try {
          await Vo(d), await t();
        } catch (g) {
          V.error("Failed to delete favorite", g);
        }
    },
    [t]
  ), x = h.useCallback(
    (j, d) => {
      j.stopPropagation(), o(d), c(d.name), v(d.query);
    },
    []
  ), _ = h.useCallback(async () => {
    if (!(!a || !u.trim() || !m.trim()))
      try {
        r(!0), await $m(
          a.id,
          u,
          m
        ), await t(), o(null), i("Favorite updated.");
      } catch (j) {
        V.error("Failed to update favorite", j), i("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [a, u, m, t]), S = h.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (d) => d.query === e.searchQuery
    )) {
      const d = e.favorites.find((f) => f.query === e.searchQuery);
      if (d) {
        r(!0);
        try {
          await Vo(d.id), await t(), i("Favorite removed.");
        } catch (f) {
          V.error("Failed to delete favorite:", f);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Fm(e.searchQuery, e.searchQuery), await t(), i(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (d) {
      V.error("Failed to save favorite:", d);
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
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: _,
    handleSaveFavorite: S,
    setToastMessage: i
  };
}, Ts = (e) => {
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
}, gh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Me(), [r, l] = h.useState(e.searchQuery), [i, a] = h.useState([]), [o, u] = h.useState(!1), [c, m] = h.useState([]), [v, w] = h.useState([]), x = e.settings["search.show_all_keywords"], [_, S] = h.useState(-1), [j, d] = h.useState(null), f = h.useRef(null), p = h.useRef(e.searchQuery), g = h.useCallback(async () => {
    if (v.length > 0) return;
    const L = await zm();
    w(L);
  }, [v.length]);
  h.useEffect(() => {
    Am().then((L) => {
      d(L);
    }), x && g();
  }, [g, x]);
  const y = h.useMemo(() => {
    if (!j) return null;
    const L = j.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${L}):(.*)$`, "i");
  }, [j]), N = h.useCallback(() => {
    const L = !x;
    L && g(), n("search.show_all_keywords", L);
  }, [x, g, n]), I = r !== p.current;
  h.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      m([]);
      return;
    }
    Rm().then((L) => {
      m(L);
    });
  }, [e.settings["search.quick_suggestions"]]), h.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), h.useEffect(() => {
    var L;
    (L = f.current) == null || L.focus();
  }, []);
  const T = h.useCallback(
    (L, H = !0) => {
      p.current !== L && (V.log("SearchBar: triggering search", { query: L }), t({ type: "SET_SEARCH_QUERY", payload: L }), H && u(!1), p.current = L);
    },
    [t]
  );
  h.useEffect(() => {
    const L = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"] || !y) {
        a([]), u(!1);
        return;
      }
      const H = Ts(r), b = H[H.length - 1];
      if (b) {
        const R = b.match(y);
        if (R) {
          const D = R[1].toLowerCase();
          let C = R[2];
          C.startsWith('"') && (C = C.substring(1)), C.endsWith('"') && (C = C.substring(0, C.length - 1));
          const Q = await Dm(C, D);
          a(Q), u(Q.length > 0), S(-1);
        } else {
          const D = b.replace(/^([-!])/, "").toLowerCase();
          if (D && j) {
            const C = j.all_prefixes.filter((Q) => Q.startsWith(D)).map((Q) => ({
              type: Q,
              value: "",
              count: 0
            }));
            if (C.length > 0) {
              a(C), u(!0), S(-1);
              return;
            }
          }
          a([]), u(!1);
        }
      } else
        a([]), u(!1);
    }, 300);
    return () => clearTimeout(L);
  }, [
    r,
    e.settings["search.input_suggest"],
    y,
    j
  ]);
  const A = h.useCallback(
    (L) => {
      var Z;
      const H = Ts(r), R = (H.pop() || "").match(/^([-!])/), D = R ? R[1] : "", Q = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(L.type);
      if (L.value === "") {
        const O = `${[...H, `${D}${L.type}:`].join(" ").trim()}`;
        l(O);
      } else {
        const O = Q ? L.value : `"${L.value}"`, J = `${[
          ...H,
          `${D}${L.type}:${O}`
        ].join(" ").trim()} `;
        l(J), a([]), u(!1);
      }
      (Z = f.current) == null || Z.focus();
    },
    [r, j]
  ), k = (L) => {
    L.key === "Enter" ? T(r) : L.key === "Tab" ? o && _ >= 0 && (A(i[_]), L.preventDefault()) : L.key === "ArrowDown" ? o && (S((H) => Math.min(H + 1, i.length - 1)), L.preventDefault()) : L.key === "ArrowUp" ? o && (S((H) => Math.max(H - 1, -1)), L.preventDefault()) : L.key === "Escape" && u(!1);
  }, M = h.useCallback(() => {
    l(""), T("");
  }, [T]), F = h.useCallback(
    (L, H, b = !1) => {
      var Z;
      if (b) {
        const O = `${L}:`;
        l(O), (Z = f.current) == null || Z.focus();
        return;
      }
      const C = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(L) ? H : `"${H}"`, Q = `${L}:${C}`;
      l(Q), T(Q);
    },
    [T, j]
  ), B = h.useCallback(
    (L) => {
      l(L), L || T("");
    },
    [T]
  ), E = h.useCallback(() => {
    if (r === p.current || !y)
      return;
    const L = Ts(r), H = L[L.length - 1];
    if (!H) return;
    const b = !!H.match(y), R = H.replace(/^([-!])/, "").toLowerCase(), D = R && (j == null ? void 0 : j.all_prefixes.some((C) => C.startsWith(R)));
    (b || D) && u(!0);
  }, [r, y, j]), W = h.useCallback(() => {
    setTimeout(() => u(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: i,
    showSuggestions: o,
    setShowSuggestions: u,
    searchSuggestions: c,
    allKeywords: v,
    showAllKeywords: x,
    toggleShowAllKeywords: N,
    selectedIndex: _,
    setSelectedIndex: S,
    inputRef: f,
    isQueryChanged: I,
    handleSearch: T,
    handleKeyDown: k,
    applySuggestion: A,
    clearSearch: M,
    applySearchSuggestion: F,
    handleInputChange: B,
    handleInputFocus: E,
    handleInputBlur: W
  };
}, yh = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, i] = h.useState(!1), [a, o] = h.useState(!1), [u, c] = h.useState(!1);
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
                  children: /* @__PURE__ */ s.jsx(fd, { size: 14 })
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
}, Qo = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(dn, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(om, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Sm, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(um, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(ad, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(id, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(am, { size: 12 });
    default:
      return null;
  }
}, vh = ({
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
  applySearchSuggestion: v,
  favorites: w,
  onSelectFavorite: x,
  onEditFavorite: _,
  onDeleteFavorite: S
}) => {
  const j = (g, y, N) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(g.type, g.value, N === "all"),
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
      onMouseEnter: (I) => {
        I.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", I.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", I.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (I) => {
        I.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", I.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", I.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Qo(g.type)
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
            children: g.type
          }
        ),
        N !== "all" && /* @__PURE__ */ s.jsx(
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
    `${N}-${g.type}:${g.value}:${y}`
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
      children: t.map((g, y) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (N) => {
            N.preventDefault(), l(g);
          },
          onMouseEnter: () => r(y),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: y === n ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                children: Qo(g.type)
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
                  width: g.type.length > 8 ? "auto" : "60px",
                  flexShrink: 0
                },
                children: [
                  g.type,
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ s.jsx(
              "span",
              {
                style: {
                  color: g.value === ct ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: g.value === ct ? "bold" : "normal"
                },
                children: g.value === ct ? g.type === "tag" ? `Untagged (${ct})` : `No ${g.type} (${ct})` : g.value
              }
            )
          ] })
        },
        `${g.type}:${g.value}`
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
              (g, y) => j(g, y, "quick")
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
                  children: Array.from(new Set(u.map((g) => g.type))).map(
                    (g, y) => j({ type: g, value: "" }, y, "all")
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
              /* @__PURE__ */ s.jsx(Ci, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: w.map((g) => /* @__PURE__ */ s.jsx(
              yh,
              {
                fav: g,
                onSelect: x,
                onEdit: _,
                onDelete: S
              },
              g.id
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
      onMouseDown: (g) => {
        g.preventDefault();
      },
      children: [
        d(),
        f(),
        p()
      ]
    }
  );
}, wh = () => {
  const { state: e } = Me(), {
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
    inputRef: v,
    isQueryChanged: w,
    handleSearch: x,
    handleKeyDown: _,
    applySuggestion: S,
    clearSearch: j,
    applySearchSuggestion: d,
    handleInputChange: f,
    handleInputFocus: p,
    handleInputBlur: g
  } = gh(), {
    isSaving: y,
    toastMessage: N,
    editingFavorite: I,
    setEditingFavorite: T,
    editFavoriteName: A,
    setEditFavoriteName: k,
    editFavoriteQuery: M,
    setEditFavoriteQuery: F,
    handleDeleteFavorite: B,
    handleEditFavorite: E,
    handleSaveEditFavorite: W,
    handleSaveFavorite: L
  } = hh(), H = h.useRef(null), b = h.useRef(!1);
  h.useEffect(() => {
    I && H.current && H.current.focus();
  }, [I]);
  const R = (C) => {
    C.target === C.currentTarget && (b.current = !0);
  }, D = (C) => {
    C.target === C.currentTarget && b.current && T(null), b.current = !1;
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
              N && /* @__PURE__ */ s.jsx(
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
                  children: N
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
                        onMouseEnter: (C) => {
                          C.currentTarget.style.transform = "translateY(-1px)", w ? (C.currentTarget.style.filter = "brightness(1.15)", C.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : C.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (C) => {
                          C.currentTarget.style.transform = "none", w ? (C.currentTarget.style.filter = "none", C.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : C.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (C) => {
                          C.currentTarget.style.transform = "translateY(1px)", C.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (C) => {
                          C.currentTarget.style.transform = "translateY(-1px)";
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
                        ref: v,
                        type: "text",
                        value: t,
                        onChange: (C) => f(C.target.value),
                        onKeyDown: _,
                        onBlur: g,
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
                        onClick: L,
                        disabled: y,
                        title: e.favorites.some((C) => C.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          Ci,
                          {
                            size: 16,
                            color: e.favorites.some((C) => C.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((C) => C.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                        children: /* @__PURE__ */ s.jsx(ve, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                vh,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: c,
                  setSelectedIndex: m,
                  applySuggestion: S,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: i,
                  allKeywords: a,
                  showAllKeywords: o,
                  toggleShowAllKeywords: u,
                  applySearchSuggestion: d,
                  favorites: e.favorites,
                  onSelectFavorite: (C) => {
                    n(C), x(C);
                  },
                  onEditFavorite: E,
                  onDeleteFavorite: B
                }
              )
            ]
          }
        ),
        I && Te.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: R,
              onMouseUp: D,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (C) => C.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(Ci, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => T(null),
                          children: /* @__PURE__ */ s.jsx(ve, { size: 20 })
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
                                    ref: H,
                                    type: "text",
                                    value: A,
                                    onChange: (C) => k(C.target.value),
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
                                    onKeyDown: (C) => {
                                      C.key === "Enter" && W(), C.key === "Escape" && T(null);
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
                                    value: M,
                                    onChange: (C) => F(C.target.value),
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
                                    onKeyDown: (C) => {
                                      C.key === "Enter" && !C.shiftKey && (C.preventDefault(), W()), C.key === "Escape" && T(null);
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
                          onClick: () => T(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: W,
                          disabled: y || !A.trim() || !M.trim(),
                          children: y ? "Saving..." : "Save Changes"
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
}, xh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = h.useState([]), [l, i] = h.useState(!0), [a, o] = h.useState(""), [u, c] = h.useState(""), [m, v] = h.useState(!1), [w, x] = h.useState(null), [_, S] = h.useState(""), [j, d] = h.useState(!1), f = h.useRef(null), p = h.useCallback(async () => {
    i(!0);
    try {
      const M = await Na();
      r(M);
    } catch (M) {
      console.error("Failed to fetch tags:", M);
    } finally {
      i(!1);
    }
  }, []);
  h.useEffect(() => {
    p();
  }, [p]), h.useEffect(() => {
    w !== null && f.current && (f.current.focus(), f.current.select());
  }, [w]);
  const g = async (M) => {
    M.preventDefault();
    const F = u.trim();
    if (!(!F || m)) {
      if (F.toLowerCase() === ct) {
        alert(
          `Tag name '${ct}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((B) => B.name.toLowerCase() === F.toLowerCase())) {
        alert(`Tag "${F}" already exists.`);
        return;
      }
      v(!0);
      try {
        await Hm(F), c(""), await p();
      } catch (B) {
        console.error("Failed to add tag:", B);
      } finally {
        v(!1);
      }
    }
  }, y = async (M, F) => {
    if (confirm(`Are you sure you want to delete tag "${F}"?`))
      try {
        await Km(M), await p();
      } catch (B) {
        console.error("Failed to delete tag:", B);
      }
  }, N = (M) => {
    x(M.id), S(M.name);
  }, I = () => {
    x(null), S("");
  }, T = async (M) => {
    M.preventDefault();
    const F = _.trim();
    if (!F || w === null || j) return;
    if (F.toLowerCase() === ct) {
      alert(
        `Tag name '${ct}' is reserved for search and cannot be used.`
      );
      return;
    }
    const B = n.find((E) => E.id === w);
    if (B && B.name === F) {
      I();
      return;
    }
    if (n.some(
      (E) => E.id !== w && E.name.toLowerCase() === F.toLowerCase()
    )) {
      alert(`Tag "${F}" already exists.`);
      return;
    }
    d(!0);
    try {
      await Gm(w, F), I(), await p();
    } catch (E) {
      console.error("Failed to rename tag:", E), alert(E instanceof Error ? E.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, A = (M) => {
    t(`tag:${M}`);
  }, k = h.useMemo(() => n.filter(
    (M) => M.name.toLowerCase().includes(a.toLowerCase())
  ), [n, a]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(dn, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(ve, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: g, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (M) => c(M.target.value),
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
              /* @__PURE__ */ s.jsx(Ea, { size: 14 }),
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
            onChange: (M) => o(M.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: k.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : k.map((M) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: w === M.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: T,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: _,
                onChange: (F) => S(F.target.value),
                onKeyDown: (F) => F.key === "Escape" && I()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !_.trim(),
                children: /* @__PURE__ */ s.jsx(ja, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: I,
                disabled: j,
                children: /* @__PURE__ */ s.jsx(ve, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: M.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => A(M.name),
              children: /* @__PURE__ */ s.jsx($n, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => N(M),
              children: /* @__PURE__ */ s.jsx(fd, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => y(M.id, M.name),
              children: /* @__PURE__ */ s.jsx(Wn, { size: 14 })
            }
          )
        ] })
      ] }) }, M.id)) })
    ] })
  ] });
}, _h = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: i, viewerMode: a, lineageImages: o, settings: u } = e, { handleEditTags: c, handleRestore: m } = Ma(e, t), { getParentChain: v } = Ed(i, u), [w, x] = h.useState(!1), [_, S] = h.useState(
    u["viewer.show_details_by_default"]
  ), [j, d] = h.useState(null), f = j ?? u["viewer.show_thumbnails"], [p, g] = h.useState(!1), [y, N] = h.useState(!1), [I, T] = h.useState(
    e.viewerInitialMaskMode || null
  );
  h.useEffect(() => {
    e.viewerInitialMaskMode && T(e.viewerInitialMaskMode);
  }, [e.viewerInitialMaskMode]);
  const [A, k] = h.useState(null), [M, F] = h.useState(null), [B, E] = h.useState(
    null
  ), W = h.useRef(null), L = h.useRef(!0);
  h.useEffect(() => (L.current = !0, () => {
    L.current = !1;
  }), []);
  const H = h.useRef(l);
  h.useEffect(() => {
    H.current = l;
  }, [l]);
  const b = h.useMemo(() => {
    const K = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return a === "lineage" ? o : i.filter(
      (ne) => ne.exists !== !1 && (u["gallery.show_parent_images"] || !ne.has_children || K)
    );
  }, [a, o, i, u, e.searchQuery]), R = l === null ? -1 : b.findIndex((K) => K.id === l), D = (a === "lineage" && o.length > 0 ? o : i).find((K) => K.id === l), C = h.useCallback(
    async (K = !1) => {
      if (!D) return;
      const ne = w ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!K && ne === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [D.id],
            hasLineage: !!(D.parent_id || D.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const z = e.viewScope === "trash", re = /* @__PURE__ */ new Set([D.id]);
        if (ne === "lineage") {
          const G = await Mi(D.id);
          for (const ee of G)
            re.add(ee.id);
        }
        if (!L.current || H.current === null) return;
        if (b.length > re.size) {
          let G = !1;
          for (let ee = R + 1; ee < b.length; ee++)
            if (!re.has(b[ee].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: b[ee].id, mode: a }
              }), G = !0;
              break;
            }
          if (!G) {
            for (let ee = R - 1; ee >= 0; ee--)
              if (!re.has(b[ee].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: b[ee].id, mode: a }
                }), G = !0;
                break;
              }
          }
          G || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await Ni(Array.from(re), z), !z) {
          const G = b.filter(
            (ee) => re.has(ee.id)
          );
          k(G), F(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(re) });
      } catch (z) {
        t({
          type: "SET_ERROR",
          payload: z instanceof Error ? z.message : String(z)
        });
      }
    },
    [
      D,
      w,
      u,
      e.viewScope,
      b,
      R,
      a,
      t
    ]
  ), Q = h.useCallback(() => {
    D && c(D);
  }, [D, c]), Z = h.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: w } });
  }, [t, w]), O = h.useCallback(async () => {
    const K = w ? u["fullscreen.loop"] : u["viewer.loop"];
    if (R === 0 && a === "gallery" && e.pagination.hasMore && !y && K) {
      N(!0);
      try {
        const ne = e.pagination.limit, z = e.pagination.total, re = Math.max(0, z - ne), G = await pl(
          re,
          ne,
          e.searchQuery
        );
        if (!L.current || (t({ type: "APPEND_IMAGES", payload: G }), H.current === null)) return;
        if (G.images.length > 0) {
          const ee = G.images[G.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: ee.id, mode: "gallery" }
          });
        }
      } catch (ne) {
        console.error("Failed to jump to end:", ne);
      } finally {
        N(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: w } });
  }, [
    R,
    a,
    e.pagination,
    e.searchQuery,
    u,
    t,
    y,
    w
  ]), J = h.useCallback(
    (K) => {
      K && "stopPropagation" in K && K.stopPropagation();
      const ne = W.current;
      ne && (document.fullscreenElement ? document.exitFullscreen() : ne.requestFullscreen().catch((z) => {
        console.error(
          `Error attempting to enable full-screen mode: ${z.message}`
        );
      }));
    },
    []
  ), Y = h.useCallback(async () => {
    D && (b.length > 1 ? Z() : t({ type: "CLOSE_VIEWER" }), await m(D));
  }, [D, b.length, Z, m, t]), we = h.useCallback(async () => {
    if (!A || A.length === 0) return;
    const K = A.map((z) => z.id), ne = K[0];
    try {
      const z = await Ca(K);
      if (!L.current) return;
      if (t({ type: "ADD_IMAGES", payload: A }), e.viewScope === "trash") {
        const re = z.restored_ids || K;
        t({ type: "REMOVE_IMAGES", payload: re });
      }
      if (k(null), !L.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: ne, mode: a }
      });
    } catch (z) {
      t({
        type: "SET_ERROR",
        payload: z instanceof Error ? z.message : String(z)
      });
    }
  }, [A, t, a, e.viewScope]), nt = h.useCallback(async () => {
    if (A && A.length > 0)
      await we();
    else if (M && M.type === "tags") {
      const { imageId: K, addTags: ne, removeTags: z } = M;
      try {
        await Ii([K], ne, z);
        const re = (a === "lineage" ? o : i).find((G) => G.id === K);
        if (re) {
          const G = [...re.tags];
          for (const lt of ne)
            G.includes(lt) || G.push(lt);
          const ee = G.filter((lt) => !z.includes(lt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...re, tags: ee }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: K, mode: a }
          });
        }
        F(null);
      } catch (re) {
        t({
          type: "SET_ERROR",
          payload: re instanceof Error ? re.message : String(re)
        });
      }
    }
  }, [
    A,
    M,
    we,
    i,
    o,
    a,
    t
  ]), rt = h.useCallback(
    async (K) => {
      if (!K || !D) return;
      const ne = D.id, z = [...D.tags], re = K.split(/\s+/), G = [], ee = [];
      let lt = !1, pn = !1, zr = !1;
      for (const ke of re)
        if (ke.startsWith("tag:")) {
          const he = ke.substring(4);
          he && !z.includes(he) && !G.includes(he) && G.push(he);
        } else if (ke.startsWith("-tag:")) {
          const he = ke.substring(5);
          he && z.includes(he) && !ee.includes(he) && ee.push(he);
        } else if (ke.startsWith("tag-toggle:")) {
          const he = ke.substring(11);
          he && (z.includes(he) ? ee.includes(he) || ee.push(he) : G.includes(he) || G.push(he));
        } else ke === "next" ? lt = !0 : ke === "prev" ? pn = !0 : ke === "delete" && (zr = !0);
      if (G.length > 0 || ee.length > 0)
        try {
          await Ii(
            [ne],
            G,
            ee
          );
          const ke = [...z];
          for (const Yt of G)
            ke.includes(Yt) || ke.push(Yt);
          const he = ke.filter((Yt) => !ee.includes(Yt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...D, id: ne, tags: he }
          }), F({
            type: "tags",
            imageId: ne,
            addTags: [...ee],
            removeTags: [...G]
          }), k(null);
        } catch (ke) {
          console.error("Failed to update tags via shortcut:", ke);
        }
      zr ? C(!0) : lt ? Z() : pn && O();
    },
    [D, t, Z, O, C]
  );
  h.useEffect(() => {
    const K = (z) => {
      var he, Yt, Ia;
      if (l === null) return;
      const re = ((he = document.activeElement) == null ? void 0 : he.tagName) === "INPUT" || ((Yt = document.activeElement) == null ? void 0 : Yt.tagName) === "TEXTAREA" || ((Ia = document.activeElement) == null ? void 0 : Ia.isContentEditable), G = z.key === "Delete" || z.key === "Backspace", ee = z.key === "ArrowRight" || z.key === "ArrowLeft", lt = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        z.key
      ), pn = z.key === "Escape", zr = (z.ctrlKey || z.metaKey) && (z.key === "z" || z.key === "Z" || z.code === "KeyZ"), ke = /^[0-9]$/.test(z.key) && !z.ctrlKey && !z.metaKey && !z.altKey && z.code !== "KeyZ";
      if (G || ee || lt || pn || zr || ke)
        if (re)
          if (pn) {
            if (e.activeModal.type !== "none") {
              z.preventDefault(), z.stopPropagation();
              return;
            }
            z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation();
          } else
            return;
        else {
          if (pn && e.activeModal.type !== "none") {
            z.preventDefault(), z.stopPropagation();
            return;
          }
          z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation();
        }
      else
        return;
      if (z.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (z.key === "ArrowRight")
        Z();
      else if (z.key === "ArrowLeft")
        O();
      else if (z.key === "f" || z.key === "F")
        J(z);
      else if (z.key === "i" || z.key === "I")
        S((ls) => !ls);
      else if (z.key === "t" || z.key === "T")
        Q();
      else if ((z.key === "r" || z.key === "R") && e.viewScope === "trash")
        Y();
      else if (z.key === "Delete")
        C();
      else if ((z.ctrlKey || z.metaKey) && (z.key === "z" || z.key === "Z"))
        nt();
      else if (ke && !re) {
        const ls = `viewer.shortcut.${z.key}`, ss = u[ls];
        typeof ss == "string" && ss && (E(z.key), setTimeout(() => {
          L.current && E(null);
        }, 500), rt(ss));
      }
    };
    window.addEventListener("keydown", K, { capture: !0 });
    const ne = () => {
      const z = !!document.fullscreenElement;
      x(z), S(z ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", ne), () => {
      window.removeEventListener("keydown", K, { capture: !0 }), document.removeEventListener("fullscreenchange", ne);
    };
  }, [
    l,
    t,
    J,
    Z,
    O,
    u,
    C,
    e.activeModal.type,
    nt,
    Q,
    Y,
    e.viewScope,
    rt
  ]), h.useEffect(() => {
    l !== null && r(l).catch((K) => {
      console.error("Failed to fetch full image details for viewer:", K);
    });
  }, [l, r]), h.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (g(!0), Mi(l).then((K) => {
      L.current && t({ type: "SET_LINEAGE", payload: K });
    }).catch((K) => {
      console.error("Failed to fetch lineage:", K);
    }).finally(() => {
      L.current && g(!1);
    }));
  }, [a, l, o.length, t]), h.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || R !== -1 && R >= b.length - 15 && n();
  }, [
    l,
    b.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    R
  ]);
  const fn = h.useMemo(() => {
    if (!f || R === -1) return [];
    const K = u["viewer.thumbnail_window_size"], ne = Math.floor(K / 2);
    let z = Math.max(0, R - ne);
    const re = Math.min(b.length, z + K);
    return re === b.length && (z = Math.max(0, re - K)), b.slice(z, re).map((G, ee) => ({
      img: G,
      absIndex: z + ee
    }));
  }, [b, R, u, f]), Rr = h.useMemo(() => D ? v(D) : [], [D, v]);
  return h.useEffect(() => {
    var K, ne;
    if (l !== null) {
      if (f) {
        const z = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        z && z.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((K = document.activeElement) == null ? void 0 : K.tagName) === "CANVAS" && document.activeElement.blur(), (ne = W.current) == null || ne.focus();
    }
  }, [l, f]), h.useEffect(() => {
    if (l === null || b.length === 0) return;
    const K = b.findIndex(
      (G) => G.id === l
    );
    if (K === -1) return;
    const ne = (G) => He(G), z = [
      K + 1,
      K + 2,
      K - 1
    ], re = setTimeout(() => {
      for (const G of z)
        if (G >= 0 && G < b.length) {
          const ee = b[G], lt = new Image();
          lt.src = ne(ee);
        }
    }, 150);
    return () => clearTimeout(re);
  }, [l, b]), {
    isFullscreen: w,
    showDetails: _,
    setShowDetails: S,
    showThumbnails: f,
    setShowThumbnailsOverride: d,
    isLoadingLineage: p,
    isJumping: y,
    maskMode: I,
    setMaskMode: T,
    activeShortcutKey: B,
    lastDeletedImages: A,
    setLastDeletedImages: k,
    overlayRef: W,
    handleNext: Z,
    handlePrevious: O,
    handleDelete: C,
    handleTagEdit: Q,
    handleRestore: Y,
    handleUndo: nt,
    toggleFullscreen: J,
    currentIndex: R,
    currentThumbnails: b,
    image: D,
    windowedThumbnails: fn,
    parentChain: Rr
  };
}, kh = ({
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
}) }) : null, Sh = ({
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
), Id = h.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, o = He(e);
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
              children: i ? /* @__PURE__ */ s.jsx(ad, { size: 12 }) : /* @__PURE__ */ s.jsx(id, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Id.displayName = "ThumbnailItem";
const jh = ({
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
    Id,
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
function Eh({
  maskMode: e,
  onClose: t,
  onInject: n,
  onRunWithWorkflow: r,
  mainImageRef: l
}) {
  const [i, a] = h.useState(!1), [o, u] = h.useState({ x: 0, y: 0 }), [c, m] = h.useState({ x: 0, y: 0 }), [v, w] = h.useState(null), [x, _] = h.useState(!1), [S, j] = h.useState(!1), d = h.useRef(null), f = h.useRef(null), p = h.useCallback(() => {
    const k = d.current;
    if (!k) return;
    const M = k.getContext("2d");
    if (M) {
      if (M.clearRect(0, 0, k.width, k.height), i) {
        console.log("Drawing dragging rect", { startPos: o, currentPos: c }), M.strokeStyle = "white", M.lineWidth = 2, M.setLineDash([5, 5]);
        const F = Math.min(o.x, c.x), B = Math.min(o.y, c.y), E = Math.abs(o.x - c.x), W = Math.abs(o.y - c.y);
        M.strokeRect(F, B, E, W);
      } else if (v) {
        console.log("Drawing selection rect", { selection: v }), M.strokeStyle = "white", M.lineWidth = 2, M.setLineDash([]), M.strokeRect(v.x, v.y, v.w, v.h);
        const F = getComputedStyle(document.documentElement);
        M.fillStyle = F.getPropertyValue("--comfy-input-bg-active") || "#ffffff4d", M.fillRect(v.x, v.y, v.w, v.h);
      }
    }
  }, [i, o, c, v]);
  h.useEffect(() => {
    const k = () => {
      f.current && d.current && (d.current.width = f.current.clientWidth, d.current.height = f.current.clientHeight, p());
    }, M = new ResizeObserver(k);
    return f.current && M.observe(f.current), k(), () => M.disconnect();
  }, [p]);
  const g = (k) => {
    var E;
    if (console.log("[Meld-Debug] Mask handleMouseDown", {
      showToolbar: x,
      clientX: k.clientX,
      clientY: k.clientY
    }), x) {
      console.log(
        "[Meld-Debug] Mask handleMouseDown: Toolbar is open, ignoring"
      );
      return;
    }
    a(!0);
    const M = (E = f.current) == null ? void 0 : E.getBoundingClientRect();
    if (!M) {
      console.log("[Meld-Debug] Mask handleMouseDown: no rect");
      return;
    }
    const F = k.clientX - M.left, B = k.clientY - M.top;
    console.log("[Meld-Debug] Mask handleMouseDown: startPos", { x: F, y: B, rect: M }), u({ x: F, y: B }), m({ x: F, y: B }), w(null);
  }, y = (k) => {
    var E;
    if (!i) return;
    const M = (E = f.current) == null ? void 0 : E.getBoundingClientRect();
    if (!M) {
      console.log("[Meld-Debug] Mask handleMouseMove: no rect");
      return;
    }
    const F = k.clientX - M.left, B = k.clientY - M.top;
    m({ x: F, y: B }), console.log("[Meld-Debug] Mask handleMouseMove", { x: F, y: B });
  }, N = (k) => {
    if (console.log("[Meld-Debug] Mask handleMouseUp", {
      isDragging: i,
      clientX: k.clientX,
      clientY: k.clientY
    }), !i) return;
    a(!1);
    const M = Math.min(o.x, c.x), F = Math.min(o.y, c.y), B = Math.abs(o.x - c.x), E = Math.abs(o.y - c.y);
    console.log("[Meld-Debug] Mask selection finished:", { x: M, y: F, w: B, h: E }), B > 5 && E > 5 ? (w({ x: M, y: F, w: B, h: E }), _(!0)) : console.log("[Meld-Debug] Mask selection too small, ignoring");
  }, I = async () => {
    if (console.log("[Meld-Debug] uploadMask started", { selection: v }), !v || !l.current || !f.current)
      return console.log("[Meld-Debug] uploadMask: missing requirements", {
        hasSelection: !!v,
        hasImage: !!l.current,
        hasOverlay: !!f.current
      }), null;
    j(!0);
    try {
      const k = l.current, M = k.naturalWidth, F = k.naturalHeight;
      console.log("[Meld-Debug] Image natural size:", {
        naturalWidth: M,
        naturalHeight: F
      });
      const B = document.createElement("canvas");
      B.width = M, B.height = F;
      const E = B.getContext("2d");
      if (!E) return null;
      E.fillStyle = "black", E.fillRect(0, 0, B.width, B.height);
      const W = f.current.getBoundingClientRect(), L = k.getBoundingClientRect(), H = M / F, b = L.width / L.height;
      let R, D, C = 0, Q = 0;
      H > b ? (R = L.width, D = L.width / H, Q = (L.height - D) / 2) : (D = L.height, R = L.height * H, C = (L.width - R) / 2);
      const Z = M / R, O = F / D, J = v.x - (L.left - W.left) - C, Y = v.y - (L.top - W.top) - Q, we = J * Z, nt = Y * O, rt = v.w * Z, fn = v.h * O;
      console.log("[Meld-Debug] Mask coordinates calculation:", {
        rect: W,
        imgRect: L,
        relX: J,
        relY: Y,
        maskX: we,
        maskY: nt,
        maskW: rt,
        maskH: fn,
        displayedWidth: R,
        displayedHeight: D,
        offsetX: C,
        offsetY: Q
      }), E.fillStyle = "white", E.fillRect(we, nt, rt, fn);
      const Rr = await new Promise(
        (ee) => B.toBlob(ee, "image/png")
      );
      if (!Rr)
        return console.log("[Meld-Debug] Failed to create blob"), null;
      const ne = `meld_mask_${Date.now()}.png`, z = new File([Rr], ne, { type: "image/png" });
      console.log("[Meld-Debug] Uploading file:", ne);
      const re = new FormData();
      re.append("image", z), re.append("type", "temp"), re.append("overwrite", "true");
      const G = await X.fetchApi("/upload/image", {
        method: "POST",
        body: re
      });
      if (G.ok) {
        const ee = await G.json();
        return console.log("[Meld-Debug] Upload success:", ee.name), ee.name;
      }
      return console.log(
        "[Meld-Debug] Upload failed:",
        G.status,
        G.statusText
      ), null;
    } catch (k) {
      return console.error("[Meld-Debug] Error uploading mask:", k), null;
    } finally {
      j(!1);
    }
  }, T = async () => {
    console.log("[Meld] MaskOverlay handleInject called");
    const k = await I();
    console.log("[Meld] Mask uploaded, filename:", k), k && (n(k), t());
  }, A = async () => {
    console.log("[Meld] MaskOverlay handleRunWithWorkflow called");
    const k = await I();
    console.log("[Meld] Mask uploaded for workflow, filename:", k), k && r(k);
  };
  return /* @__PURE__ */ s.jsx("div", { className: "meld-mask-overlay-wrapper", children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: f,
      className: "meld-mask-overlay",
      onMouseDown: g,
      onMouseMove: y,
      onMouseUp: N,
      onClick: (k) => {
        console.log("[Meld-Debug] Mask overlay onClick", {
          clientX: k.clientX,
          clientY: k.clientY
        }), k.stopPropagation();
      },
      role: "presentation",
      children: [
        /* @__PURE__ */ s.jsx("canvas", { ref: d, className: "meld-mask-canvas" }),
        x && v && /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-mask-toolbar",
            style: {
              left: v.x + v.w,
              top: v.y + v.h,
              position: "absolute",
              zIndex: 1e4
            },
            onClick: (k) => k.stopPropagation(),
            onMouseDown: (k) => k.stopPropagation(),
            role: "presentation",
            children: [
              e === "apply" && /* @__PURE__ */ s.jsxs(
                "button",
                {
                  className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                  onClick: T,
                  disabled: S,
                  type: "button",
                  title: "Send to Current Workflow",
                  children: [
                    S ? /* @__PURE__ */ s.jsx(Wo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(ja, { size: 16 }),
                    /* @__PURE__ */ s.jsx("span", { children: "Send" })
                  ]
                }
              ),
              e === "run" && /* @__PURE__ */ s.jsxs(
                "button",
                {
                  className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                  onClick: A,
                  disabled: S,
                  type: "button",
                  title: "Queue via Workflow",
                  children: [
                    S ? /* @__PURE__ */ s.jsx(Wo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(ns, { size: 16 }),
                    /* @__PURE__ */ s.jsx("span", { children: "Queue" })
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                  onClick: () => {
                    _(!1), w(null);
                  },
                  disabled: S,
                  type: "button",
                  children: /* @__PURE__ */ s.jsx(ve, { size: 16 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-hint", children: [
          "Drag to select mask area",
          /* @__PURE__ */ s.jsx("button", { className: "meld-mask-close", onClick: t, type: "button", children: /* @__PURE__ */ s.jsx(ve, { size: 20 }) })
        ] })
      ]
    }
  ) });
}
function Ch() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Me(), {
    isFullscreen: l,
    showDetails: i,
    setShowDetails: a,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: c,
    isJumping: m,
    activeShortcutKey: v,
    setLastDeletedImages: w,
    overlayRef: x,
    handleNext: _,
    handlePrevious: S,
    handleTagEdit: j,
    handleRestore: d,
    toggleFullscreen: f,
    maskMode: p,
    setMaskMode: g,
    image: y,
    windowedThumbnails: N,
    parentChain: I
  } = _h({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), T = h.useRef(null), { executeWorkflow: A } = _d(), k = h.useCallback(
    (W) => {
      var O, J;
      if (!y) return;
      console.log("[Meld-Debug] handleInjectMask called with:", W);
      const L = window.app;
      if (!(L != null && L.graph)) {
        console.log("[Meld-Debug] handleInjectMask: No comfyApp.graph found");
        return;
      }
      let H = y.filename;
      y.subfolder && (H = `${y.subfolder}/${y.filename}`), y.type && y.type !== "input" && (H = `${H} [${y.type}]`);
      const b = L.graph._nodes.filter(
        (Y) => Y.type === "MeldImageLoader"
      );
      if (b.length > 0) {
        const Y = b[0], we = Y.widgets.find(
          (nt) => nt.name === "image"
        );
        we && (we.value = H, typeof we.callback == "function" && we.callback(H), console.log(
          "[Meld-Debug] handleInjectMask: Updated MeldImageLoader",
          Y.id,
          "with",
          H
        ));
      }
      const R = L.graph._nodes.filter(
        (Y) => Y.type === "LoadImageMask"
      );
      if (console.log(
        "[Meld-Debug] handleInjectMask: Found mask nodes:",
        R.map((Y) => Y.id)
      ), R.length === 0) {
        console.log(
          "[Meld-Debug] handleInjectMask: No LoadImageMask nodes found in active graph"
        ), t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), g(null);
        return;
      }
      const D = R[0], C = D.widgets.find(
        (Y) => Y.name === "image"
      ), Q = `${W} [temp]`;
      console.log(
        "[Meld-Debug] handleInjectMask: Updating node",
        D.id,
        "widget 'image' with",
        Q
      ), C ? (C.value = Q, typeof C.callback == "function" && C.callback(Q)) : console.log(
        "[Meld-Debug] handleInjectMask: 'image' widget not found on node",
        D.id
      );
      const Z = D.widgets.find(
        (Y) => Y.name === "channel"
      );
      Z && (Z.value = "red", typeof Z.callback == "function" && Z.callback("red")), (J = (O = L.graph).afterChange) == null || J.call(O), L.graph.setDirtyCanvas(!0, !0), g(null), t({ type: "CLOSE_VIEWER" });
    },
    [t, g, y]
  );
  if (!y) return null;
  const { viewerImageId: M, viewerMode: F } = e, B = He(y), E = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Te.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: x,
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
              onClick: (W) => W.stopPropagation(),
              children: [
                E && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
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
                      children: /* @__PURE__ */ s.jsx(dd, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: j,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ s.jsx(dn, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => a(!i),
                      type: "button",
                      title: i ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(mm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: f,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ s.jsx(wm, { size: 20 }) : /* @__PURE__ */ s.jsx(vm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(ve, { size: 20 })
                    }
                  )
                ] }),
                E && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: S,
                    type: "button",
                    disabled: m,
                    children: /* @__PURE__ */ s.jsx(od, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  m && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(Ir, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: T,
                      src: B,
                      alt: y.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${m ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  ),
                  p && /* @__PURE__ */ s.jsx(
                    Eh,
                    {
                      maskMode: p,
                      onClose: () => g(null),
                      onInject: k,
                      onRunWithWorkflow: (W) => {
                        t({
                          type: "OPEN_MODAL",
                          payload: {
                            type: "workflow_selection",
                            images: [y],
                            maskFilename: W
                          }
                        });
                      },
                      mainImageRef: T
                    }
                  )
                ] }),
                E && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: _,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(ud, { size: 32 })
                  }
                ),
                i && /* @__PURE__ */ s.jsx(
                  Sh,
                  {
                    image: y,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: E,
                    parentChain: I,
                    dispatch: t
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  jh,
                  {
                    windowedThumbnails: N,
                    viewerImageId: M,
                    currentImage: y,
                    dispatch: t,
                    isLoadingLineage: c,
                    isLoading: e.isLoading,
                    viewerMode: F
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  kh,
                  {
                    settings: e.settings,
                    activeShortcutKey: v
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            xd,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename,
              onExecute: async (W) => {
                if (e.activeModal.type === "workflow_selection") {
                  const L = e.activeModal.maskFilename;
                  for (const H of e.activeModal.images)
                    await A(W, H, L);
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Sd, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            kd,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: w
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(jd, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(yd, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(vd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            wd,
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
}
const Nh = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Me(), [i, a] = h.useState("gallery"), [o, u] = h.useState(""), [c, m] = h.useState(e.pagination.limit);
  h.useEffect(() => {
    m(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const v = e.searchQuery.trim() !== "", w = h.useRef(null), x = h.useRef(null), _ = h.useMemo(() => {
    const j = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((d) => e.viewScope === "trash" ? d.exists !== !1 || e.settings["gallery.trash.show_missing"] : d.exists !== !1 && (e.settings["gallery.show_parent_images"] || !d.has_children || j));
  }, [e.images, e.settings, e.viewScope, e.searchQuery]), S = h.useMemo(
    () => _.slice(0, c),
    [_, c]
  );
  return h.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && _.length === 0 && (V.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    _.length,
    r
  ]), h.useEffect(() => {
    const j = (d) => {
      d.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), d.preventDefault(), d.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), d.preventDefault(), d.stopPropagation()));
    };
    return window.addEventListener("keydown", j), () => window.removeEventListener("keydown", j);
  }, [e.activeModal.type, e.selectedIds.size, t]), h.useEffect(() => {
    const j = new IntersectionObserver(
      (f) => {
        if (f[0].isIntersecting) {
          if (e.isLoading) {
            V.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          c < _.length ? (V.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: c,
              newLimit: Math.min(
                c + e.pagination.limit,
                _.length
              ),
              totalAvailableLocally: _.length
            }
          ), m((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (V.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : V.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: _.length,
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
    _.length,
    e.pagination.limit,
    e.images.length
  ]), h.useEffect(() => {
    const j = e.viewerImageId ?? x.current;
    if (j !== null && _.some((f) => f.id === j)) {
      const f = _.findIndex((g) => g.id === j);
      if (f >= c) {
        m(
          Math.ceil((f + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${j}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (x.current = null));
    }
    e.viewerImageId !== null && (x.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    _,
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
    displayedImages: _,
    visibleImages: S,
    isSearchActive: v,
    loadMoreRef: w
  };
}, Mh = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Me(), { handleRunWithWorkflow: l } = Ma(e, t), i = e.selectedIds.size;
  if (i === 0) return null;
  const a = e.viewScope === "trash", o = () => {
    const c = e.images.filter(
      (v) => e.selectedIds.has(v.id)
    ), m = /* @__PURE__ */ new Set();
    for (const v of c)
      if (v.tags)
        for (const w of v.tags)
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
                  dn,
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
                  cd,
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
              /* @__PURE__ */ s.jsx(ve, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, Ih = () => {
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
    isSearchActive: v,
    loadMoreRef: w
  } = Nh();
  return V.log("GalleryPanel: rendering", {
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
                  onChange: (x) => r("gallery.trash.show_missing", x.target.checked)
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
                  /* @__PURE__ */ s.jsx(ve, { size: 14 }),
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
                  color: v ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: v ? "bold" : "normal"
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
                  const _ = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", _);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(hm, { size: 14 }) : /* @__PURE__ */ s.jsx(dd, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(dn, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(fm, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(km, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(wh, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(mh, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ s.jsx(
          xh,
          {
            onClose: () => i("gallery"),
            onSearch: (x) => {
              t({ type: "SET_SEARCH_QUERY", payload: x }), i("search");
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
              children: m.map((x) => {
                const _ = e.settings["sidebar.thumbnail_size"] || 100, S = e.settings["gallery.view_mode"] === "grid_only", j = S && x.width && x.height ? Math.min(
                  _,
                  _ * x.width / x.height
                ) + 10 : S ? _ + 10 : "100%";
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    "data-image-id": x.id,
                    style: {
                      width: S ? "auto" : "100%",
                      flexShrink: 0,
                      display: S ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ s.jsx(
                      ph,
                      {
                        height: S ? _ + 10 : Math.max(_, 150),
                        style: {
                          width: typeof j == "number" ? `${j}px` : j,
                          minWidth: typeof j == "number" ? `${j}px` : j,
                          display: S ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ s.jsx(fh, { image: x })
                      }
                    )
                  },
                  x.id
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
        /* @__PURE__ */ s.jsx(Mh, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(Ch, {}),
        /* @__PURE__ */ s.jsx(uh, {})
      ]
    }
  );
};
Bo.registerExtension({
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
const rs = document.createElement("link");
rs.rel = "stylesheet";
rs.type = "text/css";
rs.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(rs);
let el = null, it = null;
Bo.registerExtension({
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
      const n = await hd();
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
      }, X.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), X.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), X.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), V.log("Import completed.");
      }), X.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await md({
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
              galleryRoot: el,
              galleryContainer: it
            }), it || (V.log("galleryContainer not found, creating new one"), it = document.createElement("div"), it.id = "meld-gallery-container", it.style.height = "100%", it.style.width = "100%", it.style.display = "flex", it.style.flexDirection = "column"), n.contains(it) || (V.log("Appending galleryContainer to el"), n.appendChild(it)), el ? V.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (V.log("Creating new gallery root"), el = nd(it), el.render(
              ml.createElement(
                Bm,
                null,
                ml.createElement(Ih)
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
