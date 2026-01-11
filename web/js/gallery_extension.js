import { api as De } from "../../../scripts/api.js";
import { app as mc } from "../../../scripts/app.js";
function hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qu = { exports: {} }, j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn = Symbol.for("react.element"), vc = Symbol.for("react.portal"), yc = Symbol.for("react.fragment"), gc = Symbol.for("react.strict_mode"), wc = Symbol.for("react.profiler"), kc = Symbol.for("react.provider"), Sc = Symbol.for("react.context"), Ec = Symbol.for("react.forward_ref"), xc = Symbol.for("react.suspense"), _c = Symbol.for("react.memo"), Cc = Symbol.for("react.lazy"), Bo = Symbol.iterator;
function Nc(e) {
  return e === null || typeof e != "object" ? null : (e = Bo && e[Bo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var bu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, es = Object.assign, ts = {};
function an(e, t, n) {
  this.props = e, this.context = t, this.refs = ts, this.updater = n || bu;
}
an.prototype.isReactComponent = {};
an.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
an.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ns() {
}
ns.prototype = an.prototype;
function Gi(e, t, n) {
  this.props = e, this.context = t, this.refs = ts, this.updater = n || bu;
}
var Ki = Gi.prototype = new ns();
Ki.constructor = Gi;
es(Ki, an.prototype);
Ki.isPureReactComponent = !0;
var Wo = Array.isArray, rs = Object.prototype.hasOwnProperty, Xi = { current: null }, ls = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) rs.call(t, r) && !ls.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), d = 0; d < u; d++) a[d] = arguments[d + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: qn, type: e, key: i, ref: o, props: l, _owner: Xi.current };
}
function Pc(e, t) {
  return { $$typeof: qn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qn;
}
function Ic(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ho = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ic("" + e.key) : t.toString(36);
}
function _r(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (i) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case qn:
        case vc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Il(o, 0) : r, Wo(l) ? (n = "", e != null && (n = e.replace(Ho, "$&/") + "/"), _r(l, t, n, "", function(d) {
    return d;
  })) : l != null && (Yi(l) && (l = Pc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ho, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Wo(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var a = r + Il(i, u);
    o += _r(i, t, n, a, l);
  }
  else if (a = Nc(e), typeof a == "function") for (e = a.call(e), u = 0; !(i = e.next()).done; ) i = i.value, a = r + Il(i, u++), o += _r(i, t, n, a, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function or(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return _r(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Lc(e) {
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
var se = { current: null }, Cr = { transition: null }, zc = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: Cr, ReactCurrentOwner: Xi };
function os() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = { map: or, forEach: function(e, t, n) {
  or(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return or(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return or(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Yi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
j.Component = an;
j.Fragment = yc;
j.Profiler = wc;
j.PureComponent = Gi;
j.StrictMode = gc;
j.Suspense = xc;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc;
j.act = os;
j.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = es({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Xi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) rs.call(t, a) && !ls.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var d = 0; d < a; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: qn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
j.createContext = function(e) {
  return e = { $$typeof: Sc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: kc, _context: e }, e.Consumer = e;
};
j.createElement = is;
j.createFactory = function(e) {
  var t = is.bind(null, e);
  return t.type = e, t;
};
j.createRef = function() {
  return { current: null };
};
j.forwardRef = function(e) {
  return { $$typeof: Ec, render: e };
};
j.isValidElement = Yi;
j.lazy = function(e) {
  return { $$typeof: Cc, _payload: { _status: -1, _result: e }, _init: Lc };
};
j.memo = function(e, t) {
  return { $$typeof: _c, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function(e) {
  var t = Cr.transition;
  Cr.transition = {};
  try {
    e();
  } finally {
    Cr.transition = t;
  }
};
j.unstable_act = os;
j.useCallback = function(e, t) {
  return se.current.useCallback(e, t);
};
j.useContext = function(e) {
  return se.current.useContext(e);
};
j.useDebugValue = function() {
};
j.useDeferredValue = function(e) {
  return se.current.useDeferredValue(e);
};
j.useEffect = function(e, t) {
  return se.current.useEffect(e, t);
};
j.useId = function() {
  return se.current.useId();
};
j.useImperativeHandle = function(e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function(e, t) {
  return se.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function(e, t) {
  return se.current.useLayoutEffect(e, t);
};
j.useMemo = function(e, t) {
  return se.current.useMemo(e, t);
};
j.useReducer = function(e, t, n) {
  return se.current.useReducer(e, t, n);
};
j.useRef = function(e) {
  return se.current.useRef(e);
};
j.useState = function(e) {
  return se.current.useState(e);
};
j.useSyncExternalStore = function(e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function() {
  return se.current.useTransition();
};
j.version = "18.3.1";
qu.exports = j;
var R = qu.exports;
const Qo = /* @__PURE__ */ hc(R);
var us = { exports: {} }, we = {}, ss = { exports: {} }, as = {};
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
  function t(_, I) {
    var z = _.length;
    _.push(I);
    e: for (; 0 < z; ) {
      var Q = z - 1 >>> 1, Z = _[Q];
      if (0 < l(Z, I)) _[Q] = I, _[z] = Z, z = Q;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var I = _[0], z = _.pop();
    if (z !== I) {
      _[0] = z;
      e: for (var Q = 0, Z = _.length, lr = Z >>> 1; Q < lr; ) {
        var kt = 2 * (Q + 1) - 1, Pl = _[kt], St = kt + 1, ir = _[St];
        if (0 > l(Pl, z)) St < Z && 0 > l(ir, Pl) ? (_[Q] = ir, _[St] = z, Q = St) : (_[Q] = Pl, _[kt] = z, Q = kt);
        else if (St < Z && 0 > l(ir, z)) _[Q] = ir, _[St] = z, Q = St;
        else break e;
      }
    }
    return I;
  }
  function l(_, I) {
    var z = _.sortIndex - I.sortIndex;
    return z !== 0 ? z : _.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var a = [], d = [], m = 1, h = null, p = 3, k = !1, y = !1, S = !1, L = typeof setTimeout == "function" ? setTimeout : null, s = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(_) {
    for (var I = n(d); I !== null; ) {
      if (I.callback === null) r(d);
      else if (I.startTime <= _) r(d), I.sortIndex = I.expirationTime, t(a, I);
      else break;
      I = n(d);
    }
  }
  function g(_) {
    if (S = !1, f(_), !y) if (n(a) !== null) y = !0, Cl(x);
    else {
      var I = n(d);
      I !== null && Nl(g, I.startTime - _);
    }
  }
  function x(_, I) {
    y = !1, S && (S = !1, s(P), P = -1), k = !0;
    var z = p;
    try {
      for (f(I), h = n(a); h !== null && (!(h.expirationTime > I) || _ && !Ie()); ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          h.callback = null, p = h.priorityLevel;
          var Z = Q(h.expirationTime <= I);
          I = e.unstable_now(), typeof Z == "function" ? h.callback = Z : h === n(a) && r(a), f(I);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var lr = !0;
      else {
        var kt = n(d);
        kt !== null && Nl(g, kt.startTime - I), lr = !1;
      }
      return lr;
    } finally {
      h = null, p = z, k = !1;
    }
  }
  var C = !1, N = null, P = -1, H = 5, T = -1;
  function Ie() {
    return !(e.unstable_now() - T < H);
  }
  function fn() {
    if (N !== null) {
      var _ = e.unstable_now();
      T = _;
      var I = !0;
      try {
        I = N(!0, _);
      } finally {
        I ? pn() : (C = !1, N = null);
      }
    } else C = !1;
  }
  var pn;
  if (typeof c == "function") pn = function() {
    c(fn);
  };
  else if (typeof MessageChannel < "u") {
    var Vo = new MessageChannel(), pc = Vo.port2;
    Vo.port1.onmessage = fn, pn = function() {
      pc.postMessage(null);
    };
  } else pn = function() {
    L(fn, 0);
  };
  function Cl(_) {
    N = _, C || (C = !0, pn());
  }
  function Nl(_, I) {
    P = L(function() {
      _(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    y || k || (y = !0, Cl(x));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(_) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = p;
    }
    var z = p;
    p = I;
    try {
      return _();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, I) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var z = p;
    p = _;
    try {
      return I();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(_, I, z) {
    var Q = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Q + z : Q) : z = Q, _) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = z + Z, _ = { id: m++, callback: I, priorityLevel: _, startTime: z, expirationTime: Z, sortIndex: -1 }, z > Q ? (_.sortIndex = z, t(d, _), n(a) === null && _ === n(d) && (S ? (s(P), P = -1) : S = !0, Nl(g, z - Q))) : (_.sortIndex = Z, t(a, _), y || k || (y = !0, Cl(x))), _;
  }, e.unstable_shouldYield = Ie, e.unstable_wrapCallback = function(_) {
    var I = p;
    return function() {
      var z = p;
      p = I;
      try {
        return _.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(as);
ss.exports = as;
var jc = ss.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc = R, ge = jc;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cs = /* @__PURE__ */ new Set(), On = {};
function Rt(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) cs.add(t[e]);
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ei = Object.prototype.hasOwnProperty, Mc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Go = {}, Ko = {};
function Rc(e) {
  return ei.call(Ko, e) ? !0 : ei.call(Go, e) ? !1 : Mc.test(e) ? Ko[e] = !0 : (Go[e] = !0, !1);
}
function Oc(e, t, n, r) {
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
function Dc(e, t, n, r) {
  if (t === null || typeof t > "u" || Oc(e, t, n, r)) return !0;
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
function ae(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  te[e] = new ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zi = /[\-:]([a-z])/g;
function Ji(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Zi,
    Ji
  );
  te[t] = new ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Zi, Ji);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Zi, Ji);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qi(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Dc(t, n, l, r) && (n = null), r || l === null ? Rc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var be = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ur = Symbol.for("react.element"), Ft = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), bi = Symbol.for("react.strict_mode"), ti = Symbol.for("react.profiler"), ds = Symbol.for("react.provider"), fs = Symbol.for("react.context"), eo = Symbol.for("react.forward_ref"), ni = Symbol.for("react.suspense"), ri = Symbol.for("react.suspense_list"), to = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), ps = Symbol.for("react.offscreen"), Xo = Symbol.iterator;
function mn(e) {
  return e === null || typeof e != "object" ? null : (e = Xo && e[Xo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, Ll;
function En(e) {
  if (Ll === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ll = t && t[1] || "";
  }
  return `
` + Ll + e;
}
var zl = !1;
function jl(e, t) {
  if (!e || zl) return "";
  zl = !0;
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
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
        if (o !== 1 || u !== 1)
          do
            if (o--, u--, 0 > u || l[o] !== i[u]) {
              var a = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    zl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? En(e) : "";
}
function Fc(e) {
  switch (e.tag) {
    case 5:
      return En(e.type);
    case 16:
      return En("Lazy");
    case 13:
      return En("Suspense");
    case 19:
      return En("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = jl(e.type, !1), e;
    case 11:
      return e = jl(e.type.render, !1), e;
    case 1:
      return e = jl(e.type, !0), e;
    default:
      return "";
  }
}
function li(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Ft:
      return "Portal";
    case ti:
      return "Profiler";
    case bi:
      return "StrictMode";
    case ni:
      return "Suspense";
    case ri:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case fs:
      return (e.displayName || "Context") + ".Consumer";
    case ds:
      return (e._context.displayName || "Context") + ".Provider";
    case eo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case to:
      return t = e.displayName || null, t !== null ? t : li(e.type) || "Memo";
    case tt:
      t = e._payload, e = e._init;
      try {
        return li(e(t));
      } catch {
      }
  }
  return null;
}
function Uc(e) {
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
      return li(t);
    case 8:
      return t === bi ? "StrictMode" : "Mode";
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
function ht(e) {
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
function ms(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ac(e) {
  var t = ms(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function sr(e) {
  e._valueTracker || (e._valueTracker = Ac(e));
}
function hs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ms(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Dr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ii(e, t) {
  var n = t.checked;
  return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Yo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vs(e, t) {
  t = t.checked, t != null && qi(e, "checked", t, !1);
}
function oi(e, t) {
  vs(e, t);
  var n = ht(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ui(e, t.type, n) : t.hasOwnProperty("defaultValue") && ui(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Zo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ui(e, t, n) {
  (t !== "number" || Dr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xn = Array.isArray;
function Yt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function si(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Jo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (xn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ht(n) };
}
function ys(e, t) {
  var n = ht(t.value), r = ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function qo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ai(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? gs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ar, ws = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ar = ar || document.createElement("div"), ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ar.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Dn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nn = {
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
}, $c = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function(e) {
  $c.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Nn[t] = Nn[e];
  });
});
function ks(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px";
}
function Ss(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = ks(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Vc = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ci(e, t) {
  if (t) {
    if (Vc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function di(e, t) {
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
var fi = null;
function no(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var pi = null, Zt = null, Jt = null;
function bo(e) {
  if (e = tr(e)) {
    if (typeof pi != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = dl(t), pi(e.stateNode, e.type, t));
  }
}
function Es(e) {
  Zt ? Jt ? Jt.push(e) : Jt = [e] : Zt = e;
}
function xs() {
  if (Zt) {
    var e = Zt, t = Jt;
    if (Jt = Zt = null, bo(e), t) for (e = 0; e < t.length; e++) bo(t[e]);
  }
}
function _s(e, t) {
  return e(t);
}
function Cs() {
}
var Tl = !1;
function Ns(e, t, n) {
  if (Tl) return e(t, n);
  Tl = !0;
  try {
    return _s(e, t, n);
  } finally {
    Tl = !1, (Zt !== null || Jt !== null) && (Cs(), xs());
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = dl(n);
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
var mi = !1;
if (Ye) try {
  var hn = {};
  Object.defineProperty(hn, "passive", { get: function() {
    mi = !0;
  } }), window.addEventListener("test", hn, hn), window.removeEventListener("test", hn, hn);
} catch {
  mi = !1;
}
function Bc(e, t, n, r, l, i, o, u, a) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var Pn = !1, Fr = null, Ur = !1, hi = null, Wc = { onError: function(e) {
  Pn = !0, Fr = e;
} };
function Hc(e, t, n, r, l, i, o, u, a) {
  Pn = !1, Fr = null, Bc.apply(Wc, arguments);
}
function Qc(e, t, n, r, l, i, o, u, a) {
  if (Hc.apply(this, arguments), Pn) {
    if (Pn) {
      var d = Fr;
      Pn = !1, Fr = null;
    } else throw Error(w(198));
    Ur || (Ur = !0, hi = d);
  }
}
function Ot(e) {
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
function Ps(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function eu(e) {
  if (Ot(e) !== e) throw Error(w(188));
}
function Gc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ot(e), t === null) throw Error(w(188));
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
        if (i === n) return eu(l), e;
        if (i === r) return eu(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          o = !0, n = l, r = i;
          break;
        }
        if (u === r) {
          o = !0, r = l, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            o = !0, n = i, r = l;
            break;
          }
          if (u === r) {
            o = !0, r = i, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function Is(e) {
  return e = Gc(e), e !== null ? Ls(e) : null;
}
function Ls(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ls(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zs = ge.unstable_scheduleCallback, tu = ge.unstable_cancelCallback, Kc = ge.unstable_shouldYield, Xc = ge.unstable_requestPaint, G = ge.unstable_now, Yc = ge.unstable_getCurrentPriorityLevel, ro = ge.unstable_ImmediatePriority, js = ge.unstable_UserBlockingPriority, Ar = ge.unstable_NormalPriority, Zc = ge.unstable_LowPriority, Ts = ge.unstable_IdlePriority, ul = null, Ve = null;
function Jc(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function") try {
    Ve.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Re = Math.clz32 ? Math.clz32 : ed, qc = Math.log, bc = Math.LN2;
function ed(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (qc(e) / bc | 0) | 0;
}
var cr = 64, dr = 4194304;
function _n(e) {
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
function $r(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = _n(u) : (i &= o, i !== 0 && (r = _n(i)));
  } else o = n & ~l, o !== 0 ? r = _n(o) : i !== 0 && (r = _n(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Re(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function td(e, t) {
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
function nd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Re(i), u = 1 << o, a = l[o];
    a === -1 ? (!(u & n) || u & r) && (l[o] = td(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function vi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ms() {
  var e = cr;
  return cr <<= 1, !(cr & 4194240) && (cr = 64), e;
}
function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bn(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Re(t), e[t] = n;
}
function rd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function lo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Rs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Os, io, Ds, Fs, Us, yi = !1, fr = [], ut = null, st = null, at = null, Un = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), rt = [], ld = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function nu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Un.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      An.delete(t.pointerId);
  }
}
function vn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = tr(t), t !== null && io(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function id(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ut = vn(ut, e, t, n, r, l), !0;
    case "dragenter":
      return st = vn(st, e, t, n, r, l), !0;
    case "mouseover":
      return at = vn(at, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Un.set(i, vn(Un.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, An.set(i, vn(An.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function As(e) {
  var t = _t(e.target);
  if (t !== null) {
    var n = Ot(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ps(n), t !== null) {
          e.blockedOn = t, Us(e.priority, function() {
            Ds(n);
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
function Nr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fi = r, n.target.dispatchEvent(r), fi = null;
    } else return t = tr(n), t !== null && io(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ru(e, t, n) {
  Nr(e) && n.delete(t);
}
function od() {
  yi = !1, ut !== null && Nr(ut) && (ut = null), st !== null && Nr(st) && (st = null), at !== null && Nr(at) && (at = null), Un.forEach(ru), An.forEach(ru);
}
function yn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yi || (yi = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, od)));
}
function $n(e) {
  function t(l) {
    return yn(l, e);
  }
  if (0 < fr.length) {
    yn(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var r = fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ut !== null && yn(ut, e), st !== null && yn(st, e), at !== null && yn(at, e), Un.forEach(t), An.forEach(t), n = 0; n < rt.length; n++) r = rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rt.length && (n = rt[0], n.blockedOn === null); ) As(n), n.blockedOn === null && rt.shift();
}
var qt = be.ReactCurrentBatchConfig, Vr = !0;
function ud(e, t, n, r) {
  var l = O, i = qt.transition;
  qt.transition = null;
  try {
    O = 1, oo(e, t, n, r);
  } finally {
    O = l, qt.transition = i;
  }
}
function sd(e, t, n, r) {
  var l = O, i = qt.transition;
  qt.transition = null;
  try {
    O = 4, oo(e, t, n, r);
  } finally {
    O = l, qt.transition = i;
  }
}
function oo(e, t, n, r) {
  if (Vr) {
    var l = gi(e, t, n, r);
    if (l === null) Wl(e, t, r, Br, n), nu(e, r);
    else if (id(l, e, t, n, r)) r.stopPropagation();
    else if (nu(e, r), t & 4 && -1 < ld.indexOf(e)) {
      for (; l !== null; ) {
        var i = tr(l);
        if (i !== null && Os(i), i = gi(e, t, n, r), i === null && Wl(e, t, r, Br, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Wl(e, t, r, null, n);
  }
}
var Br = null;
function gi(e, t, n, r) {
  if (Br = null, e = no(r), e = _t(e), e !== null) if (t = Ot(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ps(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Br = e, null;
}
function $s(e) {
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
      switch (Yc()) {
        case ro:
          return 1;
        case js:
          return 4;
        case Ar:
        case Zc:
          return 16;
        case Ts:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null, uo = null, Pr = null;
function Vs() {
  if (Pr) return Pr;
  var e, t = uo, n = t.length, r, l = "value" in it ? it.value : it.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Pr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ir(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function pr() {
  return !0;
}
function lu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? pr : lu, this.isPropagationStopped = lu, this;
  }
  return B(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pr);
  }, persist: function() {
  }, isPersistent: pr }), t;
}
var cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, so = ke(cn), er = B({}, cn, { view: 0, detail: 0 }), ad = ke(er), Rl, Ol, gn, sl = B({}, er, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ao, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (Rl = e.screenX - gn.screenX, Ol = e.screenY - gn.screenY) : Ol = Rl = 0, gn = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ol;
} }), iu = ke(sl), cd = B({}, sl, { dataTransfer: 0 }), dd = ke(cd), fd = B({}, er, { relatedTarget: 0 }), Dl = ke(fd), pd = B({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), md = ke(pd), hd = B({}, cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), vd = ke(hd), yd = B({}, cn, { data: 0 }), ou = ke(yd), gd = {
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
}, wd = {
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
}, kd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Sd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kd[e]) ? !!t[e] : !1;
}
function ao() {
  return Sd;
}
var Ed = B({}, er, { key: function(e) {
  if (e.key) {
    var t = gd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ao, charCode: function(e) {
  return e.type === "keypress" ? Ir(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ir(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), xd = ke(Ed), _d = B({}, sl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uu = ke(_d), Cd = B({}, er, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ao }), Nd = ke(Cd), Pd = B({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Id = ke(Pd), Ld = B({}, sl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), zd = ke(Ld), jd = [9, 13, 27, 32], co = Ye && "CompositionEvent" in window, In = null;
Ye && "documentMode" in document && (In = document.documentMode);
var Td = Ye && "TextEvent" in window && !In, Bs = Ye && (!co || In && 8 < In && 11 >= In), su = " ", au = !1;
function Ws(e, t) {
  switch (e) {
    case "keyup":
      return jd.indexOf(t.keyCode) !== -1;
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
function Hs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function Md(e, t) {
  switch (e) {
    case "compositionend":
      return Hs(t);
    case "keypress":
      return t.which !== 32 ? null : (au = !0, su);
    case "textInput":
      return e = t.data, e === su && au ? null : e;
    default:
      return null;
  }
}
function Rd(e, t) {
  if (At) return e === "compositionend" || !co && Ws(e, t) ? (e = Vs(), Pr = uo = it = null, At = !1, e) : null;
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
      return Bs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Od = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Od[e.type] : t === "textarea";
}
function Qs(e, t, n, r) {
  Es(r), t = Wr(t, "onChange"), 0 < t.length && (n = new so("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ln = null, Vn = null;
function Dd(e) {
  na(e, 0);
}
function al(e) {
  var t = Bt(e);
  if (hs(t)) return e;
}
function Fd(e, t) {
  if (e === "change") return t;
}
var Gs = !1;
if (Ye) {
  var Fl;
  if (Ye) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var du = document.createElement("div");
      du.setAttribute("oninput", "return;"), Ul = typeof du.oninput == "function";
    }
    Fl = Ul;
  } else Fl = !1;
  Gs = Fl && (!document.documentMode || 9 < document.documentMode);
}
function fu() {
  Ln && (Ln.detachEvent("onpropertychange", Ks), Vn = Ln = null);
}
function Ks(e) {
  if (e.propertyName === "value" && al(Vn)) {
    var t = [];
    Qs(t, Vn, e, no(e)), Ns(Dd, t);
  }
}
function Ud(e, t, n) {
  e === "focusin" ? (fu(), Ln = t, Vn = n, Ln.attachEvent("onpropertychange", Ks)) : e === "focusout" && fu();
}
function Ad(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return al(Vn);
}
function $d(e, t) {
  if (e === "click") return al(t);
}
function Vd(e, t) {
  if (e === "input" || e === "change") return al(t);
}
function Bd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fe = typeof Object.is == "function" ? Object.is : Bd;
function Bn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ei.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function pu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function mu(e, t) {
  var n = pu(e);
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
    n = pu(n);
  }
}
function Xs(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ys() {
  for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Dr(e.document);
  }
  return t;
}
function fo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Wd(e) {
  var t = Ys(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Xs(n.ownerDocument.documentElement, n)) {
    if (r !== null && fo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = mu(n, i);
        var o = mu(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Hd = Ye && "documentMode" in document && 11 >= document.documentMode, $t = null, wi = null, zn = null, ki = !1;
function hu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ki || $t == null || $t !== Dr(r) || (r = $t, "selectionStart" in r && fo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), zn && Bn(zn, r) || (zn = r, r = Wr(wi, "onSelect"), 0 < r.length && (t = new so("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = $t)));
}
function mr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vt = { animationend: mr("Animation", "AnimationEnd"), animationiteration: mr("Animation", "AnimationIteration"), animationstart: mr("Animation", "AnimationStart"), transitionend: mr("Transition", "TransitionEnd") }, Al = {}, Zs = {};
Ye && (Zs = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);
function cl(e) {
  if (Al[e]) return Al[e];
  if (!Vt[e]) return e;
  var t = Vt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zs) return Al[e] = t[n];
  return e;
}
var Js = cl("animationend"), qs = cl("animationiteration"), bs = cl("animationstart"), ea = cl("transitionend"), ta = /* @__PURE__ */ new Map(), vu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yt(e, t) {
  ta.set(e, t), Rt(t, [e]);
}
for (var $l = 0; $l < vu.length; $l++) {
  var Vl = vu[$l], Qd = Vl.toLowerCase(), Gd = Vl[0].toUpperCase() + Vl.slice(1);
  yt(Qd, "on" + Gd);
}
yt(Js, "onAnimationEnd");
yt(qs, "onAnimationIteration");
yt(bs, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(ea, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Rt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));
function yu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Qc(r, t, void 0, e), e.currentTarget = null;
}
function na(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], a = u.instance, d = u.currentTarget;
        if (u = u.listener, a !== i && l.isPropagationStopped()) break e;
        yu(l, u, d), i = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], a = u.instance, d = u.currentTarget, u = u.listener, a !== i && l.isPropagationStopped()) break e;
        yu(l, u, d), i = a;
      }
    }
  }
  if (Ur) throw e = hi, Ur = !1, hi = null, e;
}
function F(e, t) {
  var n = t[Ci];
  n === void 0 && (n = t[Ci] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ra(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), ra(n, e, r, t);
}
var hr = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
  if (!e[hr]) {
    e[hr] = !0, cs.forEach(function(n) {
      n !== "selectionchange" && (Kd.has(n) || Bl(n, !1, e), Bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hr] || (t[hr] = !0, Bl("selectionchange", !1, t));
  }
}
function ra(e, t, n, r) {
  switch ($s(t)) {
    case 1:
      var l = ud;
      break;
    case 4:
      l = sd;
      break;
    default:
      l = oo;
  }
  n = l.bind(null, t, n, e), l = void 0, !mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Wl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var a = o.tag;
        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = _t(u), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Ns(function() {
    var d = i, m = no(n), h = [];
    e: {
      var p = ta.get(e);
      if (p !== void 0) {
        var k = so, y = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = xd;
            break;
          case "focusin":
            y = "focus", k = Dl;
            break;
          case "focusout":
            y = "blur", k = Dl;
            break;
          case "beforeblur":
          case "afterblur":
            k = Dl;
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
            k = iu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Nd;
            break;
          case Js:
          case qs:
          case bs:
            k = md;
            break;
          case ea:
            k = Id;
            break;
          case "scroll":
            k = ad;
            break;
          case "wheel":
            k = zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = vd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = uu;
        }
        var S = (t & 4) !== 0, L = !S && e === "scroll", s = S ? p !== null ? p + "Capture" : null : p;
        S = [];
        for (var c = d, f; c !== null; ) {
          f = c;
          var g = f.stateNode;
          if (f.tag === 5 && g !== null && (f = g, s !== null && (g = Fn(c, s), g != null && S.push(Hn(c, g, f)))), L) break;
          c = c.return;
        }
        0 < S.length && (p = new k(p, y, null, n, m), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", p && n !== fi && (y = n.relatedTarget || n.fromElement) && (_t(y) || y[Ze])) break e;
        if ((k || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, k ? (y = n.relatedTarget || n.toElement, k = d, y = y ? _t(y) : null, y !== null && (L = Ot(y), y !== L || y.tag !== 5 && y.tag !== 6) && (y = null)) : (k = null, y = d), k !== y)) {
          if (S = iu, g = "onMouseLeave", s = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (S = uu, g = "onPointerLeave", s = "onPointerEnter", c = "pointer"), L = k == null ? p : Bt(k), f = y == null ? p : Bt(y), p = new S(g, c + "leave", k, n, m), p.target = L, p.relatedTarget = f, g = null, _t(m) === d && (S = new S(s, c + "enter", y, n, m), S.target = f, S.relatedTarget = L, g = S), L = g, k && y) t: {
            for (S = k, s = y, c = 0, f = S; f; f = Dt(f)) c++;
            for (f = 0, g = s; g; g = Dt(g)) f++;
            for (; 0 < c - f; ) S = Dt(S), c--;
            for (; 0 < f - c; ) s = Dt(s), f--;
            for (; c--; ) {
              if (S === s || s !== null && S === s.alternate) break t;
              S = Dt(S), s = Dt(s);
            }
            S = null;
          }
          else S = null;
          k !== null && gu(h, p, k, S, !1), y !== null && L !== null && gu(h, L, y, S, !0);
        }
      }
      e: {
        if (p = d ? Bt(d) : window, k = p.nodeName && p.nodeName.toLowerCase(), k === "select" || k === "input" && p.type === "file") var x = Fd;
        else if (cu(p)) if (Gs) x = Vd;
        else {
          x = Ad;
          var C = Ud;
        }
        else (k = p.nodeName) && k.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = $d);
        if (x && (x = x(e, d))) {
          Qs(h, x, n, m);
          break e;
        }
        C && C(e, p, d), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && ui(p, "number", p.value);
      }
      switch (C = d ? Bt(d) : window, e) {
        case "focusin":
          (cu(C) || C.contentEditable === "true") && ($t = C, wi = d, zn = null);
          break;
        case "focusout":
          zn = wi = $t = null;
          break;
        case "mousedown":
          ki = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ki = !1, hu(h, n, m);
          break;
        case "selectionchange":
          if (Hd) break;
        case "keydown":
        case "keyup":
          hu(h, n, m);
      }
      var N;
      if (co) e: {
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
      else At ? Ws(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Bs && n.locale !== "ko" && (At || P !== "onCompositionStart" ? P === "onCompositionEnd" && At && (N = Vs()) : (it = m, uo = "value" in it ? it.value : it.textContent, At = !0)), C = Wr(d, P), 0 < C.length && (P = new ou(P, e, null, n, m), h.push({ event: P, listeners: C }), N ? P.data = N : (N = Hs(n), N !== null && (P.data = N)))), (N = Td ? Md(e, n) : Rd(e, n)) && (d = Wr(d, "onBeforeInput"), 0 < d.length && (m = new ou("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: d }), m.data = N));
    }
    na(h, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Fn(e, n), i != null && r.unshift(Hn(e, i, l)), i = Fn(e, t), i != null && r.push(Hn(e, i, l))), e = e.return;
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function gu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, d = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && d !== null && (u = d, l ? (a = Fn(n, i), a != null && o.unshift(Hn(n, a, u))) : l || (a = Fn(n, i), a != null && o.push(Hn(n, a, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Xd = /\r\n?/g, Yd = /\u0000|\uFFFD/g;
function wu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Xd, `
`).replace(Yd, "");
}
function vr(e, t, n) {
  if (t = wu(t), wu(e) !== t && n) throw Error(w(425));
}
function Hr() {
}
var Si = null, Ei = null;
function xi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _i = typeof setTimeout == "function" ? setTimeout : void 0, Zd = typeof clearTimeout == "function" ? clearTimeout : void 0, ku = typeof Promise == "function" ? Promise : void 0, Jd = typeof queueMicrotask == "function" ? queueMicrotask : typeof ku < "u" ? function(e) {
  return ku.resolve(null).then(e).catch(qd);
} : _i;
function qd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Hl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), $n(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  $n(t);
}
function ct(e) {
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
function Su(e) {
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
var dn = Math.random().toString(36).slice(2), $e = "__reactFiber$" + dn, Qn = "__reactProps$" + dn, Ze = "__reactContainer$" + dn, Ci = "__reactEvents$" + dn, bd = "__reactListeners$" + dn, ef = "__reactHandles$" + dn;
function _t(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ze] || n[$e]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Su(e); e !== null; ) {
        if (n = e[$e]) return n;
        e = Su(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function tr(e) {
  return e = e[$e] || e[Ze], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function dl(e) {
  return e[Qn] || null;
}
var Ni = [], Wt = -1;
function gt(e) {
  return { current: e };
}
function U(e) {
  0 > Wt || (e.current = Ni[Wt], Ni[Wt] = null, Wt--);
}
function D(e, t) {
  Wt++, Ni[Wt] = e.current, e.current = t;
}
var vt = {}, ie = gt(vt), fe = gt(!1), Lt = vt;
function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function pe(e) {
  return e = e.childContextTypes, e != null;
}
function Qr() {
  U(fe), U(ie);
}
function Eu(e, t, n) {
  if (ie.current !== vt) throw Error(w(168));
  D(ie, t), D(fe, n);
}
function la(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Uc(e) || "Unknown", l));
  return B({}, n, r);
}
function Gr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vt, Lt = ie.current, D(ie, e), D(fe, fe.current), !0;
}
function xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = la(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, U(fe), U(ie), D(ie, e)) : U(fe), D(fe, n);
}
var Qe = null, fl = !1, Ql = !1;
function ia(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
function tf(e) {
  fl = !0, ia(e);
}
function wt() {
  if (!Ql && Qe !== null) {
    Ql = !0;
    var e = 0, t = O;
    try {
      var n = Qe;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Qe = null, fl = !1;
    } catch (l) {
      throw Qe !== null && (Qe = Qe.slice(e + 1)), zs(ro, wt), l;
    } finally {
      O = t, Ql = !1;
    }
  }
  return null;
}
var Ht = [], Qt = 0, Kr = null, Xr = 0, Ee = [], xe = 0, zt = null, Ge = 1, Ke = "";
function Et(e, t) {
  Ht[Qt++] = Xr, Ht[Qt++] = Kr, Kr = e, Xr = t;
}
function oa(e, t, n) {
  Ee[xe++] = Ge, Ee[xe++] = Ke, Ee[xe++] = zt, zt = e;
  var r = Ge;
  e = Ke;
  var l = 32 - Re(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Re(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ge = 1 << 32 - Re(t) + l | n << l | r, Ke = i + e;
  } else Ge = 1 << i | n << l | r, Ke = e;
}
function po(e) {
  e.return !== null && (Et(e, 1), oa(e, 1, 0));
}
function mo(e) {
  for (; e === Kr; ) Kr = Ht[--Qt], Ht[Qt] = null, Xr = Ht[--Qt], Ht[Qt] = null;
  for (; e === zt; ) zt = Ee[--xe], Ee[xe] = null, Ke = Ee[--xe], Ee[xe] = null, Ge = Ee[--xe], Ee[xe] = null;
}
var ye = null, ve = null, A = !1, Me = null;
function ua(e, t) {
  var n = _e(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function _u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = ct(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? { id: Ge, overflow: Ke } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = _e(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function Pi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ii(e) {
  if (A) {
    var t = ve;
    if (t) {
      var n = t;
      if (!_u(e, t)) {
        if (Pi(e)) throw Error(w(418));
        t = ct(n.nextSibling);
        var r = ye;
        t && _u(e, t) ? ua(r, n) : (e.flags = e.flags & -4097 | 2, A = !1, ye = e);
      }
    } else {
      if (Pi(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, A = !1, ye = e;
    }
  }
}
function Cu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ye = e;
}
function yr(e) {
  if (e !== ye) return !1;
  if (!A) return Cu(e), A = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xi(e.type, e.memoizedProps)), t && (t = ve)) {
    if (Pi(e)) throw sa(), Error(w(418));
    for (; t; ) ua(e, t), t = ct(t.nextSibling);
  }
  if (Cu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ct(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function sa() {
  for (var e = ve; e; ) e = ct(e.nextSibling);
}
function rn() {
  ve = ye = null, A = !1;
}
function ho(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var nf = be.ReactCurrentBatchConfig;
function wn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function gr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Nu(e) {
  var t = e._init;
  return t(e._payload);
}
function aa(e) {
  function t(s, c) {
    if (e) {
      var f = s.deletions;
      f === null ? (s.deletions = [c], s.flags |= 16) : f.push(c);
    }
  }
  function n(s, c) {
    if (!e) return null;
    for (; c !== null; ) t(s, c), c = c.sibling;
    return null;
  }
  function r(s, c) {
    for (s = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? s.set(c.key, c) : s.set(c.index, c), c = c.sibling;
    return s;
  }
  function l(s, c) {
    return s = mt(s, c), s.index = 0, s.sibling = null, s;
  }
  function i(s, c, f) {
    return s.index = f, e ? (f = s.alternate, f !== null ? (f = f.index, f < c ? (s.flags |= 2, c) : f) : (s.flags |= 2, c)) : (s.flags |= 1048576, c);
  }
  function o(s) {
    return e && s.alternate === null && (s.flags |= 2), s;
  }
  function u(s, c, f, g) {
    return c === null || c.tag !== 6 ? (c = ql(f, s.mode, g), c.return = s, c) : (c = l(c, f), c.return = s, c);
  }
  function a(s, c, f, g) {
    var x = f.type;
    return x === Ut ? m(s, c, f.props.children, g, f.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === tt && Nu(x) === c.type) ? (g = l(c, f.props), g.ref = wn(s, c, f), g.return = s, g) : (g = Or(f.type, f.key, f.props, null, s.mode, g), g.ref = wn(s, c, f), g.return = s, g);
  }
  function d(s, c, f, g) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = bl(f, s.mode, g), c.return = s, c) : (c = l(c, f.children || []), c.return = s, c);
  }
  function m(s, c, f, g, x) {
    return c === null || c.tag !== 7 ? (c = It(f, s.mode, g, x), c.return = s, c) : (c = l(c, f), c.return = s, c);
  }
  function h(s, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = ql("" + c, s.mode, f), c.return = s, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ur:
          return f = Or(c.type, c.key, c.props, null, s.mode, f), f.ref = wn(s, null, c), f.return = s, f;
        case Ft:
          return c = bl(c, s.mode, f), c.return = s, c;
        case tt:
          var g = c._init;
          return h(s, g(c._payload), f);
      }
      if (xn(c) || mn(c)) return c = It(c, s.mode, f, null), c.return = s, c;
      gr(s, c);
    }
    return null;
  }
  function p(s, c, f, g) {
    var x = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return x !== null ? null : u(s, c, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ur:
          return f.key === x ? a(s, c, f, g) : null;
        case Ft:
          return f.key === x ? d(s, c, f, g) : null;
        case tt:
          return x = f._init, p(
            s,
            c,
            x(f._payload),
            g
          );
      }
      if (xn(f) || mn(f)) return x !== null ? null : m(s, c, f, g, null);
      gr(s, f);
    }
    return null;
  }
  function k(s, c, f, g, x) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return s = s.get(f) || null, u(c, s, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ur:
          return s = s.get(g.key === null ? f : g.key) || null, a(c, s, g, x);
        case Ft:
          return s = s.get(g.key === null ? f : g.key) || null, d(c, s, g, x);
        case tt:
          var C = g._init;
          return k(s, c, f, C(g._payload), x);
      }
      if (xn(g) || mn(g)) return s = s.get(f) || null, m(c, s, g, x, null);
      gr(c, g);
    }
    return null;
  }
  function y(s, c, f, g) {
    for (var x = null, C = null, N = c, P = c = 0, H = null; N !== null && P < f.length; P++) {
      N.index > P ? (H = N, N = null) : H = N.sibling;
      var T = p(s, N, f[P], g);
      if (T === null) {
        N === null && (N = H);
        break;
      }
      e && N && T.alternate === null && t(s, N), c = i(T, c, P), C === null ? x = T : C.sibling = T, C = T, N = H;
    }
    if (P === f.length) return n(s, N), A && Et(s, P), x;
    if (N === null) {
      for (; P < f.length; P++) N = h(s, f[P], g), N !== null && (c = i(N, c, P), C === null ? x = N : C.sibling = N, C = N);
      return A && Et(s, P), x;
    }
    for (N = r(s, N); P < f.length; P++) H = k(N, s, P, f[P], g), H !== null && (e && H.alternate !== null && N.delete(H.key === null ? P : H.key), c = i(H, c, P), C === null ? x = H : C.sibling = H, C = H);
    return e && N.forEach(function(Ie) {
      return t(s, Ie);
    }), A && Et(s, P), x;
  }
  function S(s, c, f, g) {
    var x = mn(f);
    if (typeof x != "function") throw Error(w(150));
    if (f = x.call(f), f == null) throw Error(w(151));
    for (var C = x = null, N = c, P = c = 0, H = null, T = f.next(); N !== null && !T.done; P++, T = f.next()) {
      N.index > P ? (H = N, N = null) : H = N.sibling;
      var Ie = p(s, N, T.value, g);
      if (Ie === null) {
        N === null && (N = H);
        break;
      }
      e && N && Ie.alternate === null && t(s, N), c = i(Ie, c, P), C === null ? x = Ie : C.sibling = Ie, C = Ie, N = H;
    }
    if (T.done) return n(
      s,
      N
    ), A && Et(s, P), x;
    if (N === null) {
      for (; !T.done; P++, T = f.next()) T = h(s, T.value, g), T !== null && (c = i(T, c, P), C === null ? x = T : C.sibling = T, C = T);
      return A && Et(s, P), x;
    }
    for (N = r(s, N); !T.done; P++, T = f.next()) T = k(N, s, P, T.value, g), T !== null && (e && T.alternate !== null && N.delete(T.key === null ? P : T.key), c = i(T, c, P), C === null ? x = T : C.sibling = T, C = T);
    return e && N.forEach(function(fn) {
      return t(s, fn);
    }), A && Et(s, P), x;
  }
  function L(s, c, f, g) {
    if (typeof f == "object" && f !== null && f.type === Ut && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ur:
          e: {
            for (var x = f.key, C = c; C !== null; ) {
              if (C.key === x) {
                if (x = f.type, x === Ut) {
                  if (C.tag === 7) {
                    n(s, C.sibling), c = l(C, f.props.children), c.return = s, s = c;
                    break e;
                  }
                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === tt && Nu(x) === C.type) {
                  n(s, C.sibling), c = l(C, f.props), c.ref = wn(s, C, f), c.return = s, s = c;
                  break e;
                }
                n(s, C);
                break;
              } else t(s, C);
              C = C.sibling;
            }
            f.type === Ut ? (c = It(f.props.children, s.mode, g, f.key), c.return = s, s = c) : (g = Or(f.type, f.key, f.props, null, s.mode, g), g.ref = wn(s, c, f), g.return = s, s = g);
          }
          return o(s);
        case Ft:
          e: {
            for (C = f.key; c !== null; ) {
              if (c.key === C) if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                n(s, c.sibling), c = l(c, f.children || []), c.return = s, s = c;
                break e;
              } else {
                n(s, c);
                break;
              }
              else t(s, c);
              c = c.sibling;
            }
            c = bl(f, s.mode, g), c.return = s, s = c;
          }
          return o(s);
        case tt:
          return C = f._init, L(s, c, C(f._payload), g);
      }
      if (xn(f)) return y(s, c, f, g);
      if (mn(f)) return S(s, c, f, g);
      gr(s, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(s, c.sibling), c = l(c, f), c.return = s, s = c) : (n(s, c), c = ql(f, s.mode, g), c.return = s, s = c), o(s)) : n(s, c);
  }
  return L;
}
var ln = aa(!0), ca = aa(!1), Yr = gt(null), Zr = null, Gt = null, vo = null;
function yo() {
  vo = Gt = Zr = null;
}
function go(e) {
  var t = Yr.current;
  U(Yr), e._currentValue = t;
}
function Li(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function bt(e, t) {
  Zr = e, vo = Gt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (de = !0), e.firstContext = null);
}
function Ne(e) {
  var t = e._currentValue;
  if (vo !== e) if (e = { context: e, memoizedValue: t, next: null }, Gt === null) {
    if (Zr === null) throw Error(w(308));
    Gt = e, Zr.dependencies = { lanes: 0, firstContext: e };
  } else Gt = Gt.next = e;
  return t;
}
var Ct = null;
function wo(e) {
  Ct === null ? Ct = [e] : Ct.push(e);
}
function da(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, wo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Je(e, r);
}
function Je(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function ko(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fa(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Xe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, M & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Je(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, wo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Je(e, n);
}
function Lr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n);
  }
}
function Pu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Jr(e, t, n, r) {
  var l = e.updateQueue;
  nt = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, d = a.next;
    a.next = null, o === null ? i = d : o.next = d, o = a;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== o && (u === null ? m.firstBaseUpdate = d : u.next = d, m.lastBaseUpdate = a));
  }
  if (i !== null) {
    var h = l.baseState;
    o = 0, m = d = a = null, u = i;
    do {
      var p = u.lane, k = u.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: k,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var y = e, S = u;
          switch (p = t, k = n, S.tag) {
            case 1:
              if (y = S.payload, typeof y == "function") {
                h = y.call(k, h, p);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = S.payload, p = typeof y == "function" ? y.call(k, h, p) : y, p == null) break e;
              h = B({}, h, p);
              break e;
            case 2:
              nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else k = { eventTime: k, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (d = m = k, a = h) : m = m.next = k, o |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (a = h), l.baseState = a, l.firstBaseUpdate = d, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Tt |= o, e.lanes = o, e.memoizedState = h;
  }
}
function Iu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(w(191, l));
      l.call(r);
    }
  }
}
var nr = {}, Be = gt(nr), Gn = gt(nr), Kn = gt(nr);
function Nt(e) {
  if (e === nr) throw Error(w(174));
  return e;
}
function So(e, t) {
  switch (D(Kn, t), D(Gn, e), D(Be, nr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ai(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ai(t, e);
  }
  U(Be), D(Be, t);
}
function on() {
  U(Be), U(Gn), U(Kn);
}
function pa(e) {
  Nt(Kn.current);
  var t = Nt(Be.current), n = ai(t, e.type);
  t !== n && (D(Gn, e), D(Be, n));
}
function Eo(e) {
  Gn.current === e && (U(Be), U(Gn));
}
var $ = gt(0);
function qr(e) {
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
var Gl = [];
function xo() {
  for (var e = 0; e < Gl.length; e++) Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var zr = be.ReactCurrentDispatcher, Kl = be.ReactCurrentBatchConfig, jt = 0, V = null, X = null, J = null, br = !1, jn = !1, Xn = 0, rf = 0;
function ne() {
  throw Error(w(321));
}
function _o(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Co(e, t, n, r, l, i) {
  if (jt = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zr.current = e === null || e.memoizedState === null ? sf : af, e = n(r, l), jn) {
    i = 0;
    do {
      if (jn = !1, Xn = 0, 25 <= i) throw Error(w(301));
      i += 1, J = X = null, t.updateQueue = null, zr.current = cf, e = n(r, l);
    } while (jn);
  }
  if (zr.current = el, t = X !== null && X.next !== null, jt = 0, J = X = V = null, br = !1, t) throw Error(w(300));
  return e;
}
function No() {
  var e = Xn !== 0;
  return Xn = 0, e;
}
function Ae() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? V.memoizedState = J = e : J = J.next = e, J;
}
function Pe() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? V.memoizedState : J.next;
  if (t !== null) J = t, X = e;
  else {
    if (e === null) throw Error(w(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, J === null ? V.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xl(e) {
  var t = Pe(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = X, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var u = o = null, a = null, d = i;
    do {
      var m = d.lane;
      if ((jt & m) === m) a !== null && (a = a.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var h = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        a === null ? (u = a = h, o = r) : a = a.next = h, V.lanes |= m, Tt |= m;
      }
      d = d.next;
    } while (d !== null && d !== i);
    a === null ? o = r : a.next = u, Fe(r, t.memoizedState) || (de = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, V.lanes |= i, Tt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yl(e) {
  var t = Pe(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Fe(i, t.memoizedState) || (de = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ma() {
}
function ha(e, t) {
  var n = V, r = Pe(), l = t(), i = !Fe(r.memoizedState, l);
  if (i && (r.memoizedState = l, de = !0), r = r.queue, Po(ga.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, Zn(9, ya.bind(null, n, r, l, t), void 0, null), q === null) throw Error(w(349));
    jt & 30 || va(n, t, l);
  }
  return l;
}
function va(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ya(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wa(t) && ka(e);
}
function ga(e, t, n) {
  return n(function() {
    wa(t) && ka(e);
  });
}
function wa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function ka(e) {
  var t = Je(e, 1);
  t !== null && Oe(t, e, 1, -1);
}
function Lu(e) {
  var t = Ae();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yn, lastRenderedState: e }, t.queue = e, e = e.dispatch = uf.bind(null, V, e), [t.memoizedState, e];
}
function Zn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Sa() {
  return Pe().memoizedState;
}
function jr(e, t, n, r) {
  var l = Ae();
  V.flags |= e, l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r);
}
function pl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (i = o.destroy, r !== null && _o(r, o.deps)) {
      l.memoizedState = Zn(t, n, i, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = Zn(1 | t, n, i, r);
}
function zu(e, t) {
  return jr(8390656, 8, e, t);
}
function Po(e, t) {
  return pl(2048, 8, e, t);
}
function Ea(e, t) {
  return pl(4, 2, e, t);
}
function xa(e, t) {
  return pl(4, 4, e, t);
}
function _a(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ca(e, t, n) {
  return n = n != null ? n.concat([e]) : null, pl(4, 4, _a.bind(null, t, e), n);
}
function Io() {
}
function Na(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pa(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ia(e, t, n) {
  return jt & 21 ? (Fe(n, t) || (n = Ms(), V.lanes |= n, Tt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, de = !0), e.memoizedState = n);
}
function lf(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Kl.transition;
  Kl.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, Kl.transition = r;
  }
}
function La() {
  return Pe().memoizedState;
}
function of(e, t, n) {
  var r = pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, za(e)) ja(t, n);
  else if (n = da(e, t, n, r), n !== null) {
    var l = ue();
    Oe(n, e, r, l), Ta(n, t, r);
  }
}
function uf(e, t, n) {
  var r = pt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (za(e)) ja(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Fe(u, o)) {
        var a = t.interleaved;
        a === null ? (l.next = l, wo(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = da(e, t, l, r), n !== null && (l = ue(), Oe(n, e, r, l), Ta(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function ja(e, t) {
  jn = br = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ta(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n);
  }
}
var el = { readContext: Ne, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, sf = { readContext: Ne, useCallback: function(e, t) {
  return Ae().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ne, useEffect: zu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, jr(
    4194308,
    4,
    _a.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return jr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return jr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ae();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ae();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = of.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ae();
  return e = { current: e }, t.memoizedState = e;
}, useState: Lu, useDebugValue: Io, useDeferredValue: function(e) {
  return Ae().memoizedState = e;
}, useTransition: function() {
  var e = Lu(!1), t = e[0];
  return e = lf.bind(null, e[1]), Ae().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = Ae();
  if (A) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(w(349));
    jt & 30 || va(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, zu(ga.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Zn(9, ya.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Ae(), t = q.identifierPrefix;
  if (A) {
    var n = Ke, r = Ge;
    n = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = rf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, af = {
  readContext: Ne,
  useCallback: Na,
  useContext: Ne,
  useEffect: Po,
  useImperativeHandle: Ca,
  useInsertionEffect: Ea,
  useLayoutEffect: xa,
  useMemo: Pa,
  useReducer: Xl,
  useRef: Sa,
  useState: function() {
    return Xl(Yn);
  },
  useDebugValue: Io,
  useDeferredValue: function(e) {
    var t = Pe();
    return Ia(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Xl(Yn)[0], t = Pe().memoizedState;
    return [e, t];
  },
  useMutableSource: ma,
  useSyncExternalStore: ha,
  useId: La,
  unstable_isNewReconciler: !1
}, cf = { readContext: Ne, useCallback: Na, useContext: Ne, useEffect: Po, useImperativeHandle: Ca, useInsertionEffect: Ea, useLayoutEffect: xa, useMemo: Pa, useReducer: Yl, useRef: Sa, useState: function() {
  return Yl(Yn);
}, useDebugValue: Io, useDeferredValue: function(e) {
  var t = Pe();
  return X === null ? t.memoizedState = e : Ia(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Yl(Yn)[0], t = Pe().memoizedState;
  return [e, t];
}, useMutableSource: ma, useSyncExternalStore: ha, useId: La, unstable_isNewReconciler: !1 };
function je(e, t) {
  if (e && e.defaultProps) {
    t = B({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ml = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ot(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = pt(e), i = Xe(r, l);
  i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (Oe(t, e, l, r), Lr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = pt(e), i = Xe(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (Oe(t, e, l, r), Lr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ue(), r = pt(e), l = Xe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = dt(e, l, r), t !== null && (Oe(t, e, r, n), Lr(t, e, r));
} };
function ju(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Bn(n, r) || !Bn(l, i) : !0;
}
function Ma(e, t, n) {
  var r = !1, l = vt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ne(i) : (l = pe(t) ? Lt : ie.current, r = t.contextTypes, i = (r = r != null) ? nn(e, l) : vt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ml, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Tu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ml.enqueueReplaceState(t, t.state, null);
}
function ji(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ko(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ne(i) : (i = pe(t) ? Lt : ie.current, l.context = nn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (zi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ml.enqueueReplaceState(l, l.state, null), Jr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function un(e, t) {
  try {
    var n = "", r = t;
    do
      n += Fc(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Zl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ti(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var df = typeof WeakMap == "function" ? WeakMap : Map;
function Ra(e, t, n) {
  n = Xe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    nl || (nl = !0, Bi = r), Ti(e, t);
  }, n;
}
function Oa(e, t, n) {
  n = Xe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ti(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ti(e, t), typeof r != "function" && (ft === null ? ft = /* @__PURE__ */ new Set([this]) : ft.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new df();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Cf.bind(null, e, t, n), t.then(e, e));
}
function Ru(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xe(-1, 1), t.tag = 2, dt(n, t, 1))), n.lanes |= 1), e);
}
var ff = be.ReactCurrentOwner, de = !1;
function oe(e, t, n, r) {
  t.child = e === null ? ca(t, null, n, r) : ln(t, e.child, n, r);
}
function Du(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return bt(t, l), r = Co(e, t, n, r, i, l), n = No(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (A && n && po(t), t.flags |= 1, oe(e, t, r, l), t.child);
}
function Fu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Do(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Da(e, t, i, r, l)) : (e = Or(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Bn, n(o, r) && e.ref === t.ref) return qe(e, t, l);
  }
  return t.flags |= 1, e = mt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Da(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bn(i, r) && e.ref === t.ref) if (de = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (de = !0);
    else return t.lanes = e.lanes, qe(e, t, l);
  }
  return Mi(e, t, n, r, l);
}
function Fa(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, D(Xt, he), he |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, D(Xt, he), he |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, D(Xt, he), he |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, D(Xt, he), he |= r;
  return oe(e, t, l, n), t.child;
}
function Ua(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Mi(e, t, n, r, l) {
  var i = pe(n) ? Lt : ie.current;
  return i = nn(t, i), bt(t, l), n = Co(e, t, n, r, i, l), r = No(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (A && r && po(t), t.flags |= 1, oe(e, t, n, l), t.child);
}
function Uu(e, t, n, r, l) {
  if (pe(n)) {
    var i = !0;
    Gr(t);
  } else i = !1;
  if (bt(t, l), t.stateNode === null) Tr(e, t), Ma(t, n, r), ji(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var a = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Ne(d) : (d = pe(n) ? Lt : ie.current, d = nn(t, d));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== d) && Tu(t, o, r, d), nt = !1;
    var p = t.memoizedState;
    o.state = p, Jr(t, r, o, l), a = t.memoizedState, u !== r || p !== a || fe.current || nt ? (typeof m == "function" && (zi(t, n, m, r), a = t.memoizedState), (u = nt || ju(t, n, u, r, p, a, d)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = d, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, fa(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : je(t.type, u), o.props = d, h = t.pendingProps, p = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ne(a) : (a = pe(n) ? Lt : ie.current, a = nn(t, a));
    var k = n.getDerivedStateFromProps;
    (m = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || p !== a) && Tu(t, o, r, a), nt = !1, p = t.memoizedState, o.state = p, Jr(t, r, o, l);
    var y = t.memoizedState;
    u !== h || p !== y || fe.current || nt ? (typeof k == "function" && (zi(t, n, k, r), y = t.memoizedState), (d = nt || ju(t, n, d, r, p, y, a) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = a, r = d) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ri(e, t, n, r, i, l);
}
function Ri(e, t, n, r, l, i) {
  Ua(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && xu(t, n, !1), qe(e, t, i);
  r = t.stateNode, ff.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ln(t, e.child, null, i), t.child = ln(t, null, u, i)) : oe(e, t, u, i), t.memoizedState = r.state, l && xu(t, n, !0), t.child;
}
function Aa(e) {
  var t = e.stateNode;
  t.pendingContext ? Eu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Eu(e, t.context, !1), So(e, t.containerInfo);
}
function Au(e, t, n, r, l) {
  return rn(), ho(l), t.flags |= 256, oe(e, t, n, r), t.child;
}
var Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Di(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $a(e, t, n) {
  var r = t.pendingProps, l = $.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D($, l & 1), e === null)
    return Ii(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = yl(o, r, 0, null), e = It(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Di(n), t.memoizedState = Oi, e) : Lo(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return pf(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = mt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = mt(u, i) : (i = It(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Di(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Oi, r;
  }
  return i = e.child, e = i.sibling, r = mt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Lo(e, t) {
  return t = yl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function wr(e, t, n, r) {
  return r !== null && ho(r), ln(t, e.child, null, n), e = Lo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function pf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Zl(Error(w(422))), wr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = yl({ mode: "visible", children: r.children }, l, 0, null), i = It(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ln(t, e.child, null, o), t.child.memoizedState = Di(o), t.memoizedState = Oi, i);
  if (!(t.mode & 1)) return wr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(w(419)), r = Zl(i, r, void 0), wr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, de || u) {
    if (r = q, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Je(e, l), Oe(r, e, l, -1));
    }
    return Oo(), r = Zl(Error(w(421))), wr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Nf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ve = ct(l.nextSibling), ye = t, A = !0, Me = null, e !== null && (Ee[xe++] = Ge, Ee[xe++] = Ke, Ee[xe++] = zt, Ge = e.id, Ke = e.overflow, zt = t), t = Lo(t, r.children), t.flags |= 4096, t);
}
function $u(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Li(e.return, t, n);
}
function Jl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Va(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (oe(e, t, r.children, n), r = $.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && $u(e, n, t);
      else if (e.tag === 19) $u(e, n, t);
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
  if (D($, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && qr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Jl(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && qr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Jl(t, !0, n, null, i);
      break;
    case "together":
      Jl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Tr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function qe(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Tt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function mf(e, t, n) {
  switch (t.tag) {
    case 3:
      Aa(t), rn();
      break;
    case 5:
      pa(t);
      break;
    case 1:
      pe(t.type) && Gr(t);
      break;
    case 4:
      So(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      D(Yr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (D($, $.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? $a(e, t, n) : (D($, $.current & 1), e = qe(e, t, n), e !== null ? e.sibling : null);
      D($, $.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Va(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D($, $.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Fa(e, t, n);
  }
  return qe(e, t, n);
}
var Ba, Fi, Wa, Ha;
Ba = function(e, t) {
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
Fi = function() {
};
Wa = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Nt(Be.current);
    var i = null;
    switch (n) {
      case "input":
        l = ii(e, l), r = ii(e, r), i = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = si(e, l), r = si(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
    }
    ci(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var u = l[d];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (On.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
    for (d in r) {
      var a = r[d];
      if (u = l != null ? l[d] : void 0, r.hasOwnProperty(d) && a !== u && (a != null || u != null)) if (d === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (i || (i = []), i.push(
        d,
        n
      )), n = a;
      else d === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(d, a)) : d === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(d, "" + a) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (On.hasOwnProperty(d) ? (a != null && d === "onScroll" && F("scroll", e), i || u === a || (i = [])) : (i = i || []).push(d, a));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Ha = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kn(e, t) {
  if (!A) switch (e.tailMode) {
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
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function hf(e, t, n) {
  var r = t.pendingProps;
  switch (mo(t), t.tag) {
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
      return re(t), null;
    case 1:
      return pe(t.type) && Qr(), re(t), null;
    case 3:
      return r = t.stateNode, on(), U(fe), U(ie), xo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (yr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (Qi(Me), Me = null))), Fi(e, t), re(t), null;
    case 5:
      Eo(t);
      var l = Nt(Kn.current);
      if (n = t.type, e !== null && t.stateNode != null) Wa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return re(t), null;
        }
        if (e = Nt(Be.current), yr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[$e] = t, r[Qn] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cn.length; l++) F(Cn[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F(
                "error",
                r
              ), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Yo(r, i), F("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, F("invalid", r);
              break;
            case "textarea":
              Jo(r, i), F("invalid", r);
          }
          ci(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && vr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && vr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : On.hasOwnProperty(o) && u != null && o === "onScroll" && F("scroll", r);
          }
          switch (n) {
            case "input":
              sr(r), Zo(r, i, !0);
              break;
            case "textarea":
              sr(r), qo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Hr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[$e] = t, e[Qn] = r, Ba(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = di(n, r), n) {
              case "dialog":
                F("cancel", e), F("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cn.length; l++) F(Cn[l], e);
                l = r;
                break;
              case "source":
                F("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                F(
                  "error",
                  e
                ), F("load", e), l = r;
                break;
              case "details":
                F("toggle", e), l = r;
                break;
              case "input":
                Yo(e, r), l = ii(e, r), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), F("invalid", e);
                break;
              case "textarea":
                Jo(e, r), l = si(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            ci(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var a = u[i];
              i === "style" ? Ss(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ws(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Dn(e, a) : typeof a == "number" && Dn(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (On.hasOwnProperty(i) ? a != null && i === "onScroll" && F("scroll", e) : a != null && qi(e, i, a, o));
            }
            switch (n) {
              case "input":
                sr(e), Zo(e, r, !1);
                break;
              case "textarea":
                sr(e), qo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Yt(e, !!r.multiple, i, !1) : r.defaultValue != null && Yt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Hr);
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
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Ha(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = Nt(Kn.current), Nt(Be.current), yr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[$e] = t, (i = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
            case 3:
              vr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && vr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$e] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (U($), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (A && ve !== null && t.mode & 1 && !(t.flags & 128)) sa(), rn(), t.flags |= 98560, i = !1;
        else if (i = yr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(w(317));
            i[$e] = t;
          } else rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          re(t), i = !1;
        } else Me !== null && (Qi(Me), Me = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $.current & 1 ? Y === 0 && (Y = 3) : Oo())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return on(), Fi(e, t), e === null && Wn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return go(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Qr(), re(t), null;
    case 19:
      if (U($), i = t.memoizedState, i === null) return re(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) kn(i, !1);
      else {
        if (Y !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = qr(e), o !== null) {
            for (t.flags |= 128, kn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return D($, $.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && G() > sn && (t.flags |= 128, r = !0, kn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = qr(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !A) return re(t), null;
        } else 2 * G() - i.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128, r = !0, kn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = G(), t.sibling = null, n = $.current, D($, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
    case 22:
    case 23:
      return Ro(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function vf(e, t) {
  switch (mo(t), t.tag) {
    case 1:
      return pe(t.type) && Qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return on(), U(fe), U(ie), xo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Eo(t), null;
    case 13:
      if (U($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return U($), null;
    case 4:
      return on(), null;
    case 10:
      return go(t.type._context), null;
    case 22:
    case 23:
      return Ro(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var kr = !1, le = !1, yf = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function Kt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    W(e, t, r);
  }
  else n.current = null;
}
function Ui(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Vu = !1;
function gf(e, t) {
  if (Si = Vr, e = Ys(), fo(e)) {
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
        var o = 0, u = -1, a = -1, d = 0, m = 0, h = e, p = null;
        t: for (; ; ) {
          for (var k; h !== n || l !== 0 && h.nodeType !== 3 || (u = o + l), h !== i || r !== 0 && h.nodeType !== 3 || (a = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (k = h.firstChild) !== null; )
            p = h, h = k;
          for (; ; ) {
            if (h === e) break t;
            if (p === n && ++d === l && (u = o), p === i && ++m === r && (a = o), (k = h.nextSibling) !== null) break;
            h = p, p = h.parentNode;
          }
          h = k;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ei = { focusedElem: e, selectionRange: n }, Vr = !1, E = t; E !== null; ) if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
  else for (; E !== null; ) {
    t = E;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var S = y.memoizedProps, L = y.memoizedState, s = t.stateNode, c = s.getSnapshotBeforeUpdate(t.elementType === t.type ? S : je(t.type, S), L);
            s.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var f = t.stateNode.containerInfo;
          f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(w(163));
      }
    } catch (g) {
      W(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, E = e;
      break;
    }
    E = t.return;
  }
  return y = Vu, Vu = !1, y;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Ui(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function hl(e, t) {
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
function Ai(e) {
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
function Qa(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Qa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$e], delete t[Qn], delete t[Ci], delete t[bd], delete t[ef])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ga(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ga(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $i(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hr));
  else if (r !== 4 && (e = e.child, e !== null)) for ($i(e, t, n), e = e.sibling; e !== null; ) $i(e, t, n), e = e.sibling;
}
function Vi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Vi(e, t, n), e = e.sibling; e !== null; ) Vi(e, t, n), e = e.sibling;
}
var b = null, Te = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) Ka(e, t, n), n = n.sibling;
}
function Ka(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function") try {
    Ve.onCommitFiberUnmount(ul, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      le || Kt(n, t);
    case 6:
      var r = b, l = Te;
      b = null, et(e, t, n), b = r, Te = l, b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? Hl(e.parentNode, n) : e.nodeType === 1 && Hl(e, n), $n(e)) : Hl(b, n.stateNode));
      break;
    case 4:
      r = b, l = Te, b = n.stateNode.containerInfo, Te = !0, et(e, t, n), b = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Ui(n, t, o), l = l.next;
        } while (l !== r);
      }
      et(e, t, n);
      break;
    case 1:
      if (!le && (Kt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        W(n, t, u);
      }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, et(e, t, n), le = r) : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function Wu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yf()), t.forEach(function(r) {
      var l = Pf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            b = u.stateNode, Te = !1;
            break e;
          case 3:
            b = u.stateNode.containerInfo, Te = !0;
            break e;
          case 4:
            b = u.stateNode.containerInfo, Te = !0;
            break e;
        }
        u = u.return;
      }
      if (b === null) throw Error(w(160));
      Ka(i, o, l), b = null, Te = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (d) {
      W(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xa(t, e), t = t.sibling;
}
function Xa(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(t, e), Ue(e), r & 4) {
        try {
          Tn(3, e, e.return), hl(3, e);
        } catch (S) {
          W(e, e.return, S);
        }
        try {
          Tn(5, e, e.return);
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 1:
      Le(t, e), Ue(e), r & 512 && n !== null && Kt(n, n.return);
      break;
    case 5:
      if (Le(t, e), Ue(e), r & 512 && n !== null && Kt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Dn(l, "");
        } catch (S) {
          W(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && i.type === "radio" && i.name != null && vs(l, i), di(u, o);
          var d = di(u, i);
          for (o = 0; o < a.length; o += 2) {
            var m = a[o], h = a[o + 1];
            m === "style" ? Ss(l, h) : m === "dangerouslySetInnerHTML" ? ws(l, h) : m === "children" ? Dn(l, h) : qi(l, m, h, d);
          }
          switch (u) {
            case "input":
              oi(l, i);
              break;
            case "textarea":
              ys(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var k = i.value;
              k != null ? Yt(l, !!i.multiple, k, !1) : p !== !!i.multiple && (i.defaultValue != null ? Yt(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Yt(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Qn] = i;
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 6:
      if (Le(t, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(w(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Le(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        $n(t.containerInfo);
      } catch (S) {
        W(e, e.return, S);
      }
      break;
    case 4:
      Le(t, e), Ue(e);
      break;
    case 13:
      Le(t, e), Ue(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (To = G())), r & 4 && Wu(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (d = le) || m, Le(t, e), le = d) : Le(t, e), Ue(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1) for (E = e, m = e.child; m !== null; ) {
          for (h = E = m; E !== null; ) {
            switch (p = E, k = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Tn(4, p, p.return);
                break;
              case 1:
                Kt(p, p.return);
                var y = p.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (S) {
                    W(r, n, S);
                  }
                }
                break;
              case 5:
                Kt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Qu(h);
                  continue;
                }
            }
            k !== null ? (k.return = p, E = k) : Qu(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, d ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = h.stateNode, a = h.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = ks("display", o));
              } catch (S) {
                W(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (m === null) try {
              h.stateNode.nodeValue = d ? "" : h.memoizedProps;
            } catch (S) {
              W(e, e.return, S);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), h = h.return;
          }
          m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Le(t, e), Ue(e), r & 4 && Wu(e);
      break;
    case 21:
      break;
    default:
      Le(
        t,
        e
      ), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ga(n)) {
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
          r.flags & 32 && (Dn(l, ""), r.flags &= -33);
          var i = Bu(e);
          Vi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = Bu(e);
          $i(e, u, o);
          break;
        default:
          throw Error(w(161));
      }
    } catch (a) {
      W(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wf(e, t, n) {
  E = e, Ya(e);
}
function Ya(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || kr;
      if (!o) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || le;
        u = kr;
        var d = le;
        if (kr = o, (le = a) && !d) for (E = l; E !== null; ) o = E, a = o.child, o.tag === 22 && o.memoizedState !== null ? Gu(l) : a !== null ? (a.return = o, E = a) : Gu(l);
        for (; i !== null; ) E = i, Ya(i), i = i.sibling;
        E = l, kr = u, le = d;
      }
      Hu(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, E = i) : Hu(e);
  }
}
function Hu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            le || hl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !le) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : je(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Iu(t, i, r);
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
              Iu(t, o, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
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
                  var h = m.dehydrated;
                  h !== null && $n(h);
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
        le || t.flags & 512 && Ai(t);
      } catch (p) {
        W(t, t.return, p);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function Qu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function Gu(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hl(4, t);
          } catch (a) {
            W(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              W(t, l, a);
            }
          }
          var i = t.return;
          try {
            Ai(t);
          } catch (a) {
            W(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ai(t);
          } catch (a) {
            W(t, o, a);
          }
      }
    } catch (a) {
      W(t, t.return, a);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, E = u;
      break;
    }
    E = t.return;
  }
}
var kf = Math.ceil, tl = be.ReactCurrentDispatcher, zo = be.ReactCurrentOwner, Ce = be.ReactCurrentBatchConfig, M = 0, q = null, K = null, ee = 0, he = 0, Xt = gt(0), Y = 0, Jn = null, Tt = 0, vl = 0, jo = 0, Mn = null, ce = null, To = 0, sn = 1 / 0, He = null, nl = !1, Bi = null, ft = null, Sr = !1, ot = null, rl = 0, Rn = 0, Wi = null, Mr = -1, Rr = 0;
function ue() {
  return M & 6 ? G() : Mr !== -1 ? Mr : Mr = G();
}
function pt(e) {
  return e.mode & 1 ? M & 2 && ee !== 0 ? ee & -ee : nf.transition !== null ? (Rr === 0 && (Rr = Ms()), Rr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $s(e.type)), e) : 1;
}
function Oe(e, t, n, r) {
  if (50 < Rn) throw Rn = 0, Wi = null, Error(w(185));
  bn(e, n, r), (!(M & 2) || e !== q) && (e === q && (!(M & 2) && (vl |= n), Y === 4 && lt(e, ee)), me(e, r), n === 1 && M === 0 && !(t.mode & 1) && (sn = G() + 500, fl && wt()));
}
function me(e, t) {
  var n = e.callbackNode;
  nd(e, t);
  var r = $r(e, e === q ? ee : 0);
  if (r === 0) n !== null && tu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && tu(n), t === 1) e.tag === 0 ? tf(Ku.bind(null, e)) : ia(Ku.bind(null, e)), Jd(function() {
      !(M & 6) && wt();
    }), n = null;
    else {
      switch (Rs(r)) {
        case 1:
          n = ro;
          break;
        case 4:
          n = js;
          break;
        case 16:
          n = Ar;
          break;
        case 536870912:
          n = Ts;
          break;
        default:
          n = Ar;
      }
      n = rc(n, Za.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Za(e, t) {
  if (Mr = -1, Rr = 0, M & 6) throw Error(w(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = $r(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ll(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = qa();
    (q !== e || ee !== t) && (He = null, sn = G() + 500, Pt(e, t));
    do
      try {
        xf();
        break;
      } catch (u) {
        Ja(e, u);
      }
    while (!0);
    yo(), tl.current = i, M = l, K !== null ? t = 0 : (q = null, ee = 0, t = Y);
  }
  if (t !== 0) {
    if (t === 2 && (l = vi(e), l !== 0 && (r = l, t = Hi(e, l))), t === 1) throw n = Jn, Pt(e, 0), lt(e, r), me(e, G()), n;
    if (t === 6) lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Sf(l) && (t = ll(e, r), t === 2 && (i = vi(e), i !== 0 && (r = i, t = Hi(e, i))), t === 1)) throw n = Jn, Pt(e, 0), lt(e, r), me(e, G()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          xt(e, ce, He);
          break;
        case 3:
          if (lt(e, r), (r & 130023424) === r && (t = To + 500 - G(), 10 < t)) {
            if ($r(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = _i(xt.bind(null, e, ce, He), t);
            break;
          }
          xt(e, ce, He);
          break;
        case 4:
          if (lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Re(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kf(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _i(xt.bind(null, e, ce, He), r);
            break;
          }
          xt(e, ce, He);
          break;
        case 5:
          xt(e, ce, He);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return me(e, G()), e.callbackNode === n ? Za.bind(null, e) : null;
}
function Hi(e, t) {
  var n = Mn;
  return e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256), e = ll(e, t), e !== 2 && (t = ce, ce = n, t !== null && Qi(t)), e;
}
function Qi(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
}
function Sf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Fe(i(), l)) return !1;
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
function lt(e, t) {
  for (t &= ~jo, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Re(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ku(e) {
  if (M & 6) throw Error(w(327));
  en();
  var t = $r(e, 0);
  if (!(t & 1)) return me(e, G()), null;
  var n = ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vi(e);
    r !== 0 && (t = r, n = Hi(e, r));
  }
  if (n === 1) throw n = Jn, Pt(e, 0), lt(e, t), me(e, G()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, xt(e, ce, He), me(e, G()), null;
}
function Mo(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (sn = G() + 500, fl && wt());
  }
}
function Mt(e) {
  ot !== null && ot.tag === 0 && !(M & 6) && en();
  var t = M;
  M |= 1;
  var n = Ce.transition, r = O;
  try {
    if (Ce.transition = null, O = 1, e) return e();
  } finally {
    O = r, Ce.transition = n, M = t, !(M & 6) && wt();
  }
}
function Ro() {
  he = Xt.current, U(Xt);
}
function Pt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Zd(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (mo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Qr();
        break;
      case 3:
        on(), U(fe), U(ie), xo();
        break;
      case 5:
        Eo(r);
        break;
      case 4:
        on();
        break;
      case 13:
        U($);
        break;
      case 19:
        U($);
        break;
      case 10:
        go(r.type._context);
        break;
      case 22:
      case 23:
        Ro();
    }
    n = n.return;
  }
  if (q = e, K = e = mt(e.current, null), ee = he = t, Y = 0, Jn = null, jo = vl = Tt = 0, ce = Mn = null, Ct !== null) {
    for (t = 0; t < Ct.length; t++) if (n = Ct[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    Ct = null;
  }
  return e;
}
function Ja(e, t) {
  do {
    var n = K;
    try {
      if (yo(), zr.current = el, br) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        br = !1;
      }
      if (jt = 0, J = X = V = null, jn = !1, Xn = 0, zo.current = null, n === null || n.return === null) {
        Y = 1, Jn = t, K = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, a = t;
        if (t = ee, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var d = a, m = u, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var k = Ru(o);
          if (k !== null) {
            k.flags &= -257, Ou(k, o, u, i, t), k.mode & 1 && Mu(i, d, t), t = k, a = d;
            var y = t.updateQueue;
            if (y === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(a), t.updateQueue = S;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Mu(i, d, t), Oo();
              break e;
            }
            a = Error(w(426));
          }
        } else if (A && u.mode & 1) {
          var L = Ru(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), Ou(L, o, u, i, t), ho(un(a, u));
            break e;
          }
        }
        i = a = un(a, u), Y !== 4 && (Y = 2), Mn === null ? Mn = [i] : Mn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var s = Ra(i, a, t);
              Pu(i, s);
              break e;
            case 1:
              u = a;
              var c = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ft === null || !ft.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = Oa(i, u, t);
                Pu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ec(n);
    } catch (x) {
      t = x, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qa() {
  var e = tl.current;
  return tl.current = el, e === null ? el : e;
}
function Oo() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), q === null || !(Tt & 268435455) && !(vl & 268435455) || lt(q, ee);
}
function ll(e, t) {
  var n = M;
  M |= 2;
  var r = qa();
  (q !== e || ee !== t) && (He = null, Pt(e, t));
  do
    try {
      Ef();
      break;
    } catch (l) {
      Ja(e, l);
    }
  while (!0);
  if (yo(), M = n, tl.current = r, K !== null) throw Error(w(261));
  return q = null, ee = 0, Y;
}
function Ef() {
  for (; K !== null; ) ba(K);
}
function xf() {
  for (; K !== null && !Kc(); ) ba(K);
}
function ba(e) {
  var t = nc(e.alternate, e, he);
  e.memoizedProps = e.pendingProps, t === null ? ec(e) : K = t, zo.current = null;
}
function ec(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = vf(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Y = 6, K = null;
        return;
      }
    } else if (n = hf(n, t, he), n !== null) {
      K = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function xt(e, t, n) {
  var r = O, l = Ce.transition;
  try {
    Ce.transition = null, O = 1, _f(e, t, n, r);
  } finally {
    Ce.transition = l, O = r;
  }
  return null;
}
function _f(e, t, n, r) {
  do
    en();
  while (ot !== null);
  if (M & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (rd(e, i), e === q && (K = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Sr || (Sr = !0, rc(Ar, function() {
    return en(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ce.transition, Ce.transition = null;
    var o = O;
    O = 1;
    var u = M;
    M |= 4, zo.current = null, gf(e, n), Xa(n, e), Wd(Ei), Vr = !!Si, Ei = Si = null, e.current = n, wf(n), Xc(), M = u, O = o, Ce.transition = i;
  } else e.current = n;
  if (Sr && (Sr = !1, ot = e, rl = l), i = e.pendingLanes, i === 0 && (ft = null), Jc(n.stateNode), me(e, G()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (nl) throw nl = !1, e = Bi, Bi = null, e;
  return rl & 1 && e.tag !== 0 && en(), i = e.pendingLanes, i & 1 ? e === Wi ? Rn++ : (Rn = 0, Wi = e) : Rn = 0, wt(), null;
}
function en() {
  if (ot !== null) {
    var e = Rs(rl), t = Ce.transition, n = O;
    try {
      if (Ce.transition = null, O = 16 > e ? 16 : e, ot === null) var r = !1;
      else {
        if (e = ot, ot = null, rl = 0, M & 6) throw Error(w(331));
        var l = M;
        for (M |= 4, E = e.current; E !== null; ) {
          var i = E, o = i.child;
          if (E.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var d = u[a];
                for (E = d; E !== null; ) {
                  var m = E;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, E = h;
                  else for (; E !== null; ) {
                    m = E;
                    var p = m.sibling, k = m.return;
                    if (Qa(m), m === d) {
                      E = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = k, E = p;
                      break;
                    }
                    E = k;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var S = y.child;
                if (S !== null) {
                  y.child = null;
                  do {
                    var L = S.sibling;
                    S.sibling = null, S = L;
                  } while (S !== null);
                }
              }
              E = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, E = o;
          else e: for (; E !== null; ) {
            if (i = E, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Tn(9, i, i.return);
            }
            var s = i.sibling;
            if (s !== null) {
              s.return = i.return, E = s;
              break e;
            }
            E = i.return;
          }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          o = E;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) f.return = o, E = f;
          else e: for (o = c; E !== null; ) {
            if (u = E, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  hl(9, u);
              }
            } catch (x) {
              W(u, u.return, x);
            }
            if (u === o) {
              E = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, E = g;
              break e;
            }
            E = u.return;
          }
        }
        if (M = l, wt(), Ve && typeof Ve.onPostCommitFiberRoot == "function") try {
          Ve.onPostCommitFiberRoot(ul, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, Ce.transition = t;
    }
  }
  return !1;
}
function Xu(e, t, n) {
  t = un(n, t), t = Ra(e, t, 1), e = dt(e, t, 1), t = ue(), e !== null && (bn(e, 1, t), me(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) Xu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Xu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ft === null || !ft.has(r))) {
        e = un(n, e), e = Oa(t, e, 1), t = dt(t, e, 1), e = ue(), t !== null && (bn(t, 1, e), me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Cf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (Y === 4 || Y === 3 && (ee & 130023424) === ee && 500 > G() - To ? Pt(e, 0) : jo |= n), me(e, t);
}
function tc(e, t) {
  t === 0 && (e.mode & 1 ? (t = dr, dr <<= 1, !(dr & 130023424) && (dr = 4194304)) : t = 1);
  var n = ue();
  e = Je(e, t), e !== null && (bn(e, t, n), me(e, n));
}
function Nf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), tc(e, n);
}
function Pf(e, t) {
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
  r !== null && r.delete(t), tc(e, n);
}
var nc;
nc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || fe.current) de = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return de = !1, mf(e, t, n);
    de = !!(e.flags & 131072);
  }
  else de = !1, A && t.flags & 1048576 && oa(t, Xr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Tr(e, t), e = t.pendingProps;
      var l = nn(t, ie.current);
      bt(t, n), l = Co(null, t, r, e, l, n);
      var i = No();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (i = !0, Gr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ko(t), l.updater = ml, t.stateNode = l, l._reactInternals = t, ji(t, r, e, n), t = Ri(null, t, r, !0, i, n)) : (t.tag = 0, A && i && po(t), oe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Tr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Lf(r), e = je(r, e), l) {
          case 0:
            t = Mi(null, t, r, e, n);
            break e;
          case 1:
            t = Uu(null, t, r, e, n);
            break e;
          case 11:
            t = Du(null, t, r, e, n);
            break e;
          case 14:
            t = Fu(null, t, r, je(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Mi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Uu(e, t, r, l, n);
    case 3:
      e: {
        if (Aa(t), e === null) throw Error(w(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, fa(e, t), Jr(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = un(Error(w(423)), t), t = Au(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = un(Error(w(424)), t), t = Au(e, t, r, n, l);
          break e;
        } else for (ve = ct(t.stateNode.containerInfo.firstChild), ye = t, A = !0, Me = null, n = ca(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (rn(), r === l) {
            t = qe(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pa(t), e === null && Ii(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, xi(r, l) ? o = null : i !== null && xi(r, i) && (t.flags |= 32), Ua(e, t), oe(e, t, o, n), t.child;
    case 6:
      return e === null && Ii(t), null;
    case 13:
      return $a(e, t, n);
    case 4:
      return So(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Du(e, t, r, l, n);
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, D(Yr, r._currentValue), r._currentValue = o, i !== null) if (Fe(i.value, o)) {
          if (i.children === l.children && !fe.current) {
            t = qe(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Xe(-1, n & -n), a.tag = 2;
                  var d = i.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var m = d.pending;
                    m === null ? a.next = a : (a.next = m.next, m.next = a), d.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Li(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(w(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Li(o, n, t), o = i.sibling;
          } else o = i.child;
          if (o !== null) o.return = i;
          else for (o = i; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (i = o.sibling, i !== null) {
              i.return = o.return, o = i;
              break;
            }
            o = o.return;
          }
          i = o;
        }
        oe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, bt(t, n), l = Ne(l), r = r(l), t.flags |= 1, oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = je(r, t.pendingProps), l = je(r.type, l), Fu(e, t, r, l, n);
    case 15:
      return Da(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Tr(e, t), t.tag = 1, pe(r) ? (e = !0, Gr(t)) : e = !1, bt(t, n), Ma(t, r, l), ji(t, r, l, n), Ri(null, t, r, !0, e, n);
    case 19:
      return Va(e, t, n);
    case 22:
      return Fa(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function rc(e, t) {
  return zs(e, t);
}
function If(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _e(e, t, n, r) {
  return new If(e, t, n, r);
}
function Do(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Lf(e) {
  if (typeof e == "function") return Do(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === eo) return 11;
    if (e === to) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = _e(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Or(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Do(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Ut:
      return It(n.children, l, i, t);
    case bi:
      o = 8, l |= 8;
      break;
    case ti:
      return e = _e(12, n, t, l | 2), e.elementType = ti, e.lanes = i, e;
    case ni:
      return e = _e(13, n, t, l), e.elementType = ni, e.lanes = i, e;
    case ri:
      return e = _e(19, n, t, l), e.elementType = ri, e.lanes = i, e;
    case ps:
      return yl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ds:
          o = 10;
          break e;
        case fs:
          o = 9;
          break e;
        case eo:
          o = 11;
          break e;
        case to:
          o = 14;
          break e;
        case tt:
          o = 16, r = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = _e(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function It(e, t, n, r) {
  return e = _e(7, e, r, t), e.lanes = n, e;
}
function yl(e, t, n, r) {
  return e = _e(22, e, r, t), e.elementType = ps, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ql(e, t, n) {
  return e = _e(6, e, null, t), e.lanes = n, e;
}
function bl(e, t, n) {
  return t = _e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function zf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ml(0), this.expirationTimes = Ml(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ml(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Fo(e, t, n, r, l, i, o, u, a) {
  return e = new zf(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = _e(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ko(i), e;
}
function jf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ft, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function lc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (Ot(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
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
    if (pe(n)) return la(e, n, t);
  }
  return t;
}
function ic(e, t, n, r, l, i, o, u, a) {
  return e = Fo(n, r, !0, e, l, i, o, u, a), e.context = lc(null), n = e.current, r = ue(), l = pt(n), i = Xe(r, l), i.callback = t ?? null, dt(n, i, l), e.current.lanes = l, bn(e, l, r), me(e, r), e;
}
function gl(e, t, n, r) {
  var l = t.current, i = ue(), o = pt(l);
  return n = lc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Xe(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dt(l, t, o), e !== null && (Oe(e, l, o, i), Lr(e, l, o)), o;
}
function il(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Uo(e, t) {
  Yu(e, t), (e = e.alternate) && Yu(e, t);
}
function Tf() {
  return null;
}
var oc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ao(e) {
  this._internalRoot = e;
}
wl.prototype.render = Ao.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  gl(e, t, null, null);
};
wl.prototype.unmount = Ao.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function() {
      gl(null, e, null, null);
    }), t[Ze] = null;
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Fs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++) ;
    rt.splice(n, 0, e), n === 0 && As(e);
  }
};
function $o(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function kl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Zu() {
}
function Mf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var d = il(o);
        i.call(d);
      };
    }
    var o = ic(t, r, e, 0, null, !1, !1, "", Zu);
    return e._reactRootContainer = o, e[Ze] = o.current, Wn(e.nodeType === 8 ? e.parentNode : e), Mt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var d = il(a);
      u.call(d);
    };
  }
  var a = Fo(e, 0, !1, null, null, !1, !1, "", Zu);
  return e._reactRootContainer = a, e[Ze] = a.current, Wn(e.nodeType === 8 ? e.parentNode : e), Mt(function() {
    gl(t, a, n, r);
  }), a;
}
function Sl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = il(o);
        u.call(a);
      };
    }
    gl(t, o, e, l);
  } else o = Mf(n, t, e, l, r);
  return il(o);
}
Os = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _n(t.pendingLanes);
        n !== 0 && (lo(t, n | 1), me(t, G()), !(M & 6) && (sn = G() + 500, wt()));
      }
      break;
    case 13:
      Mt(function() {
        var r = Je(e, 1);
        if (r !== null) {
          var l = ue();
          Oe(r, e, 1, l);
        }
      }), Uo(e, 1);
  }
};
io = function(e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = ue();
      Oe(t, e, 134217728, n);
    }
    Uo(e, 134217728);
  }
};
Ds = function(e) {
  if (e.tag === 13) {
    var t = pt(e), n = Je(e, t);
    if (n !== null) {
      var r = ue();
      Oe(n, e, t, r);
    }
    Uo(e, t);
  }
};
Fs = function() {
  return O;
};
Us = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
pi = function(e, t, n) {
  switch (t) {
    case "input":
      if (oi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = dl(r);
            if (!l) throw Error(w(90));
            hs(r), oi(r, l);
          }
        }
      }
      break;
    case "textarea":
      ys(e, n);
      break;
    case "select":
      t = n.value, t != null && Yt(e, !!n.multiple, t, !1);
  }
};
_s = Mo;
Cs = Mt;
var Rf = { usingClientEntryPoint: !1, Events: [tr, Bt, dl, Es, xs, Mo] }, Sn = { findFiberByHostInstance: _t, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Of = { bundleType: Sn.bundleType, version: Sn.version, rendererPackageName: Sn.rendererPackageName, rendererConfig: Sn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Is(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Sn.findFiberByHostInstance || Tf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Er.isDisabled && Er.supportsFiber) try {
    ul = Er.inject(Of), Ve = Er;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$o(t)) throw Error(w(200));
  return jf(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!$o(e)) throw Error(w(299));
  var n = !1, r = "", l = oc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Fo(e, 1, !1, null, null, n, !1, r, l), e[Ze] = t.current, Wn(e.nodeType === 8 ? e.parentNode : e), new Ao(t);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = Is(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Mt(e);
};
we.hydrate = function(e, t, n) {
  if (!kl(t)) throw Error(w(200));
  return Sl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!$o(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = oc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ic(t, null, e, 1, n ?? null, l, !1, i, o), e[Ze] = t.current, Wn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new wl(t);
};
we.render = function(e, t, n) {
  if (!kl(t)) throw Error(w(200));
  return Sl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!kl(e)) throw Error(w(40));
  return e._reactRootContainer ? (Mt(function() {
    Sl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ze] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Mo;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!kl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Sl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function uc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc);
    } catch (e) {
      console.error(e);
    }
}
uc(), us.exports = we;
var Df = us.exports, sc, Ju = Df;
sc = Ju.createRoot, Ju.hydrateRoot;
window.api = De;
const Ff = async () => {
  const e = await De.fetchApi("/meld-nexus/list");
  if (!e.ok)
    throw new Error(`Failed to fetch images: ${e.statusText}`);
  return await e.json();
}, Uf = async () => {
  const e = await De.fetchApi("/meld-nexus/settings");
  return e.ok ? await e.json() : { dev_mode: !1 };
}, Af = async (e, t) => {
  if (!(await De.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, $f = async (e, t = 12) => {
  const n = await De.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, Vf = async (e) => {
  const t = await De.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, Bf = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await De.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Wf = async (e, t = !0) => {
  const n = await De.fetchApi("/meld-nexus/bulk-delete", {
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
}, ac = async (e) => {
  const t = await De.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
};
var cc = { exports: {} }, El = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hf = R, Qf = Symbol.for("react.element"), Gf = Symbol.for("react.fragment"), Kf = Object.prototype.hasOwnProperty, Xf = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Yf = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Kf.call(t, r) && !Yf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Qf, type: e, key: i, ref: o, props: l, _owner: Xf.current };
}
El.Fragment = Gf;
El.jsx = dc;
El.jsxs = dc;
cc.exports = El;
var v = cc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zf = {
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
const Jf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Se = (e, t) => {
  const n = R.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: u = "",
      children: a,
      ...d
    }, m) => R.createElement(
      "svg",
      {
        ref: m,
        ...Zf,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Jf(e)}`, u].join(" "),
        ...d
      },
      [
        ...t.map(([h, p]) => R.createElement(h, p)),
        ...Array.isArray(a) ? a : [a]
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
const qf = Se("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bf = Se("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = Se("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = Se("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = Se("Maximize", [
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
const rp = Se("Minimize", [
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
const lp = Se("MoreVertical", [
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
const ip = Se("PlusCircle", [
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
const op = Se("RefreshCw", [
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
const up = Se("Trash2", [
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
const sp = Se("Upload", [
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
const ap = Se("XSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = Se("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let ol = !1;
const cp = (e) => {
  ol = e, ol && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, dp = (...e) => {
  ol && console.log("[Meld-Flow]", ...e);
}, fp = (...e) => {
  ol && console.warn("[Meld-Flow]", ...e);
}, pp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, We = {
  log: dp,
  warn: fp,
  error: pp,
  init: cp
}, mp = {
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
  lastSelectedId: null
};
function hp(e, t) {
  switch (t.type) {
    case "SET_IMAGES": {
      let n = e.viewerImageId;
      return e.viewerMode === "gallery" && n !== null && !t.payload.some((r) => r.id === n) && (n = null), {
        ...e,
        images: t.payload,
        isLoading: !1,
        error: null,
        viewerImageId: n
      };
    }
    case "SET_LINEAGE":
      return {
        ...e,
        lineageImages: t.payload
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
      const [l, i] = [
        Math.min(n, r),
        Math.max(n, r)
      ], o = new Set(e.selectedIds);
      for (let u = l; u <= i; u++)
        o.add(e.images[u].id);
      return {
        ...e,
        selectedIds: o,
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
      const n = t.payload, r = typeof n == "number" ? n : n.id, l = typeof n == "number" ? "gallery" : n.mode, i = e.viewerMode === "lineage" && l === "lineage" && e.lineageImages.some((o) => o.id === r);
      return {
        ...e,
        viewerImageId: r,
        viewerMode: l,
        lineageImages: i ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const n = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images;
      if (e.viewerImageId === null || n.length === 0)
        return e;
      const r = n.findIndex(
        (i) => i.id === e.viewerImageId
      );
      if (r === -1) return e;
      const l = (r + 1) % n.length;
      return {
        ...e,
        viewerImageId: n[l].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const n = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images;
      if (e.viewerImageId === null || n.length === 0)
        return e;
      const r = n.findIndex(
        (i) => i.id === e.viewerImageId
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
    default:
      return e;
  }
}
const fc = R.createContext(void 0), vp = ({
  children: e
}) => {
  const [t, n] = R.useReducer(hp, mp), r = R.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const i = await Ff();
      n({ type: "SET_IMAGES", payload: i });
    } catch (i) {
      n({
        type: "SET_ERROR",
        payload: i instanceof Error ? i.message : String(i)
      });
    }
  }, []), l = R.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const i = Array.from(t.selectedIds), o = `Are you sure you want to delete the selected ${i.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(o)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await Wf(i, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (u) {
        n({
          type: "SET_ERROR",
          payload: u instanceof Error ? u.message : String(u)
        });
      }
    }
  }, [t.selectedIds, r]);
  return R.useEffect(() => {
    const i = () => {
      r();
    };
    return window.addEventListener("meld-nexus-refresh", i), () => {
      window.removeEventListener("meld-nexus-refresh", i);
    };
  }, [r]), R.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ v.jsx(
    fc.Provider,
    {
      value: { state: t, dispatch: n, refreshImages: r, deleteSelected: l },
      children: e
    }
  );
}, rr = () => {
  const e = R.useContext(fc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, yp = () => {
  const { state: e, dispatch: t, deleteSelected: n } = rr(), r = e.selectedIds.size;
  return r === 0 ? null : /* @__PURE__ */ v.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ v.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ v.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ v.jsx(
            up,
            {
              size: 16,
              style: { marginRight: "8px", verticalAlign: "middle" }
            }
          ),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ v.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ v.jsx(xl, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, gp = ({ image: e }) => {
  const { state: t, dispatch: n } = rr(), r = t.selectedIds.has(e.id), [l, i] = R.useState(null), [o, u] = R.useState(!1), a = R.useRef(null);
  R.useEffect(() => {
    const s = (c) => {
      a.current && !a.current.contains(c.target) && u(!1);
    };
    return o && document.addEventListener("mousedown", s), () => {
      document.removeEventListener("mousedown", s);
    };
  }, [o]);
  const d = e.parent_id ? t.images.find((s) => s.id === e.parent_id) : null, m = d ? `/api/view?filename=${encodeURIComponent(d.filename)}&type=${d.type || "output"}${d.subfolder ? `&subfolder=${encodeURIComponent(d.subfolder)}` : ""}` : null, h = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, p = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, k = (s) => {
    s.shiftKey ? (s.preventDefault(), s.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : s.ctrlKey || s.metaKey || t.selectedIds.size > 0 ? (s.preventDefault(), s.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, y = (s) => {
    s.shiftKey ? (s.preventDefault(), s.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, S = (s) => {
    (s.shiftKey || s.ctrlKey || s.metaKey || t.selectedIds.size > 0) && s.preventDefault();
  }, L = (s) => {
    (s.key === "Enter" || s.key === " ") && (s.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: y,
      onMouseDown: S,
      onKeyDown: L,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ v.jsxs("div", { className: "meld-image-card__menu-container", ref: a, children: [
          /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (s) => {
                s.stopPropagation(), u(!o);
              },
              title: "Menu",
              children: /* @__PURE__ */ v.jsx(lp, { size: 16 })
            }
          ),
          o && /* @__PURE__ */ v.jsx("div", { className: "meld-image-card__menu", children: /* @__PURE__ */ v.jsxs(
            "div",
            {
              className: "meld-image-card__menu-item",
              onClick: (s) => {
                s.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: { type: "parent_selection", imageId: e.id }
                }), u(!1);
              },
              children: [
                /* @__PURE__ */ v.jsx(ip, { size: 14 }),
                /* @__PURE__ */ v.jsx("span", { children: "Add parent image" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ v.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ v.jsx(
          "img",
          {
            src: p,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: S,
            onClick: (s) => {
              s.stopPropagation(), k(s);
            }
          }
        ) }),
        /* @__PURE__ */ v.jsxs("div", { className: "meld-image-card__details", children: [
          /* @__PURE__ */ v.jsx("div", { className: "meld-image-card__filename", children: h }),
          /* @__PURE__ */ v.jsx("div", { className: "meld-image-card__lineage-v2", children: e.parent_id && /* @__PURE__ */ v.jsxs(
            "div",
            {
              className: "meld-lineage-badge meld-lineage-badge--has-parent",
              onClick: (s) => {
                s.stopPropagation(), n({
                  type: "OPEN_VIEWER",
                  payload: { id: e.id, mode: "lineage" }
                });
              },
              children: [
                /* @__PURE__ */ v.jsx(tp, { size: 12 }),
                m && /* @__PURE__ */ v.jsx(
                  "img",
                  {
                    src: m,
                    className: "meld-lineage-badge__parent-thumb",
                    alt: "parent thumb"
                  }
                ),
                /* @__PURE__ */ v.jsx("span", { children: "Parent" })
              ]
            }
          ) }),
          /* @__PURE__ */ v.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (s) => {
                s.stopPropagation(), i({
                  title: "Positive Prompt",
                  text: e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ v.jsx("div", { className: "meld-image-card__meta-label", children: "Positive" }),
                /* @__PURE__ */ v.jsx("div", { className: "meld-image-card__meta-content", children: e.positive || "-" })
              ]
            }
          ),
          /* @__PURE__ */ v.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (s) => {
                s.stopPropagation(), i({
                  title: "Negative Prompt",
                  text: e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ v.jsx("div", { className: "meld-image-card__meta-label", children: "Negative" }),
                /* @__PURE__ */ v.jsx("div", { className: "meld-image-card__meta-content", children: e.negative || "-" })
              ]
            }
          ),
          /* @__PURE__ */ v.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ v.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
            /* @__PURE__ */ v.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((s, c) => /* @__PURE__ */ v.jsx("span", { className: "meld-image-card__tag", children: s }, `${s}-${c}`)) : /* @__PURE__ */ v.jsx("span", { style: { color: "#666" }, children: "-" }) })
          ] })
        ] }),
        l && /* @__PURE__ */ v.jsx(
          "div",
          {
            className: "meld-prompt-popup-overlay",
            onClick: (s) => {
              s.stopPropagation(), i(null);
            },
            children: /* @__PURE__ */ v.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (s) => s.stopPropagation(),
                children: [
                  /* @__PURE__ */ v.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ v.jsx("span", { children: l.title }),
                    /* @__PURE__ */ v.jsx(
                      xl,
                      {
                        className: "meld-prompt-popup-close",
                        size: 18,
                        onClick: () => i(null)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ v.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, wp = () => {
  const { state: e, dispatch: t } = rr(), { viewerImageId: n, images: r, viewerMode: l, lineageImages: i } = e, [o, u] = R.useState(!1), [a, d] = R.useState(!1), m = (l === "lineage" && i.length > 0 ? i : r).find((y) => y.id === n), h = R.useCallback(
    (y) => {
      y && "stopPropagation" in y && y.stopPropagation(), document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch((S) => {
        console.error(
          `Error attempting to enable full-screen mode: ${S.message}`
        );
      });
    },
    []
  );
  if (R.useEffect(() => {
    const y = (L) => {
      n !== null && (L.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : L.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : L.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (L.key === "f" || L.key === "F") && h(L));
    }, S = () => {
      u(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", y), document.addEventListener("fullscreenchange", S), () => {
      window.removeEventListener("keydown", y), document.removeEventListener("fullscreenchange", S);
    };
  }, [n, t, h]), R.useEffect(() => {
    l === "lineage" && n !== null && i.length === 0 && (d(!0), Vf(n).then((y) => {
      t({ type: "SET_LINEAGE", payload: y });
    }).catch((y) => {
      console.error("Failed to fetch lineage:", y);
    }).finally(() => {
      d(!1);
    }));
  }, [l, n, i.length, t]), R.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), R.useEffect(() => {
    if (n !== null) {
      const y = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      y && y.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [n]), !m) return null;
  const p = `/api/view?filename=${encodeURIComponent(m.filename)}&type=${m.type || "output"}${m.subfolder ? `&subfolder=${encodeURIComponent(m.subfolder)}` : ""}`, k = l === "lineage" ? i : r;
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "meld-viewer-overlay",
      onClick: () => t({ type: "CLOSE_VIEWER" }),
      role: "button",
      tabIndex: 0,
      children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          className: `meld-viewer-content ${o ? "meld-viewer-content--fullscreen" : ""}`,
          onClick: (y) => y.stopPropagation(),
          children: [
            /* @__PURE__ */ v.jsxs("div", { className: "meld-viewer-actions", children: [
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn",
                  onClick: h,
                  type: "button",
                  title: o ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                  children: o ? /* @__PURE__ */ v.jsx(rp, { size: 20 }) : /* @__PURE__ */ v.jsx(np, { size: 20 })
                }
              ),
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                  onClick: () => t({ type: "CLOSE_VIEWER" }),
                  type: "button",
                  title: "Close (Esc)",
                  children: /* @__PURE__ */ v.jsx(xl, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--prev",
                onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ v.jsx(bf, { size: 32 })
              }
            ),
            /* @__PURE__ */ v.jsxs("div", { className: "meld-viewer-image-container", children: [
              /* @__PURE__ */ v.jsx(
                "img",
                {
                  src: p,
                  alt: m.filename,
                  className: "meld-viewer-image"
                }
              ),
              !o && /* @__PURE__ */ v.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ v.jsx("div", { className: "meld-viewer-filename", children: m.filename }) })
            ] }),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--next",
                onClick: () => t({ type: "NEXT_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ v.jsx(ep, { size: 32 })
              }
            ),
            !o && /* @__PURE__ */ v.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ v.jsx("div", { className: "meld-viewer-thumbnails", children: a ? /* @__PURE__ */ v.jsx("div", { style: { padding: "10px", color: "#888" }, children: "Loading lineage..." }) : k.map((y) => {
              const S = y.id === n, L = m.parent_id === y.id, s = y.parent_id === m.id, c = `/api/view?filename=${encodeURIComponent(y.filename)}&type=${y.type || "output"}${y.subfolder ? `&subfolder=${encodeURIComponent(y.subfolder)}` : ""}`;
              return /* @__PURE__ */ v.jsxs(
                "div",
                {
                  className: `meld-viewer-thumbnail ${S ? "meld-viewer-thumbnail--active" : ""}`,
                  onClick: () => t({
                    type: "OPEN_VIEWER",
                    payload: { id: y.id, mode: l }
                  }),
                  children: [
                    /* @__PURE__ */ v.jsx("img", { src: c, alt: y.filename }),
                    l === "lineage" && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                      L && /* @__PURE__ */ v.jsx("span", { className: "meld-viewer-thumbnail-label meld-viewer-thumbnail-label--parent", children: "Parent" }),
                      s && /* @__PURE__ */ v.jsx("span", { className: "meld-viewer-thumbnail-label meld-viewer-thumbnail-label--child", children: "Child" })
                    ] })
                  ]
                },
                y.id
              );
            }) }) })
          ]
        }
      )
    }
  );
}, kp = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = rr(), [l, i] = R.useState([]), [o, u] = R.useState(!0), [a, d] = R.useState(!1), m = t.images.find((s) => s.id === e), h = R.useCallback(async () => {
    u(!0);
    try {
      const s = await $f(e);
      i(s);
    } catch (s) {
      console.error("Failed to load suggestions:", s);
    } finally {
      u(!1);
    }
  }, [e]);
  R.useEffect(() => {
    h();
  }, [h]);
  const p = async (s) => {
    try {
      await Af(e, s), await r(), n({ type: "CLOSE_MODAL" });
    } catch (c) {
      console.error("Failed to link parent:", c);
    }
  }, k = async (s) => {
    u(!0);
    try {
      const c = await Bf(s), { id: f } = await ac({
        filename: c.name,
        subfolder: c.subfolder || "",
        type: c.type || "input"
      });
      await p(f);
    } catch (c) {
      console.error("Failed to upload/register image:", c);
    } finally {
      u(!1);
    }
  }, y = (s) => {
    s.preventDefault(), s.stopPropagation(), d(!1);
    const c = s.dataTransfer.files[0];
    c != null && c.type.startsWith("image/") && k(c);
  };
  if (!m) return null;
  const S = l.filter((s) => s.is_source_match), L = l.filter((s) => !s.is_source_match);
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => n({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ v.jsxs("div", { className: "meld-modal-content", onClick: (s) => s.stopPropagation(), children: [
        /* @__PURE__ */ v.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ v.jsxs("h2", { children: [
            "Select Parent for #",
            m.id
          ] }),
          /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              className: "meld-modal-close",
              onClick: () => n({ type: "CLOSE_MODAL" }),
              children: /* @__PURE__ */ v.jsx(xl, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "meld-modal-body", children: [
          /* @__PURE__ */ v.jsxs(
            "div",
            {
              className: `meld-drop-zone ${a ? "meld-drop-zone--active" : ""}`,
              onDragEnter: (s) => {
                s.preventDefault(), s.stopPropagation(), d(!0);
              },
              onDragOver: (s) => {
                s.preventDefault(), s.stopPropagation(), s.dataTransfer.dropEffect = "copy", d(!0);
              },
              onDragLeave: (s) => {
                s.preventDefault(), s.stopPropagation(), d(!1);
              },
              onDrop: y,
              children: [
                /* @__PURE__ */ v.jsx(sp, { size: 32 }),
                /* @__PURE__ */ v.jsx("p", { children: "Drop an image file here to set it as parent" })
              ]
            }
          ),
          o ? /* @__PURE__ */ v.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ v.jsxs("div", { className: "meld-suggestions-container", children: [
            S.length > 0 && /* @__PURE__ */ v.jsxs("section", { children: [
              /* @__PURE__ */ v.jsx("h3", { children: "Source Matches (from metadata)" }),
              /* @__PURE__ */ v.jsx("div", { className: "meld-suggestion-grid", children: S.map((s) => /* @__PURE__ */ v.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => p(s.id),
                  children: [
                    /* @__PURE__ */ v.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(s.filename)}&type=${s.type || "output"}${s.subfolder ? `&subfolder=${encodeURIComponent(s.subfolder)}` : ""}`,
                        alt: s.filename
                      }
                    ),
                    /* @__PURE__ */ v.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ v.jsx("span", { className: "meld-suggestion-filename", children: s.filename }) })
                  ]
                },
                s.id
              )) })
            ] }),
            /* @__PURE__ */ v.jsxs("section", { children: [
              /* @__PURE__ */ v.jsx("h3", { children: "Visual Matches (pHash)" }),
              L.length > 0 ? /* @__PURE__ */ v.jsx("div", { className: "meld-suggestion-grid", children: L.map((s) => /* @__PURE__ */ v.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => p(s.id),
                  children: [
                    /* @__PURE__ */ v.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(s.filename)}&type=${s.type || "output"}${s.subfolder ? `&subfolder=${encodeURIComponent(s.subfolder)}` : ""}`,
                        alt: s.filename
                      }
                    ),
                    /* @__PURE__ */ v.jsxs("div", { className: "meld-suggestion-info", children: [
                      /* @__PURE__ */ v.jsx("span", { className: "meld-suggestion-filename", children: s.filename }),
                      /* @__PURE__ */ v.jsxs("span", { className: "meld-suggestion-distance", children: [
                        "Match:",
                        " ",
                        Math.round((64 - s.distance) / 64 * 100),
                        "%"
                      ] })
                    ] })
                  ]
                },
                s.id
              )) }) : /* @__PURE__ */ v.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
            ] })
          ] })
        ] })
      ] })
    }
  );
}, Sp = () => {
  const { state: e, dispatch: t, refreshImages: n } = rr();
  We.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  });
  const r = () => {
    e.selectedIds.size > 0 ? t({ type: "CLEAR_SELECTION" }) : t({ type: "SELECT_ALL" });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ v.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
          gap: "15px"
        },
        children: [
          /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              onClick: r,
              style: {
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              },
              disabled: e.images.length === 0,
              children: e.selectedIds.size > 0 ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                /* @__PURE__ */ v.jsx(ap, { size: 14 }),
                "Deselect"
              ] }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                /* @__PURE__ */ v.jsx(qf, { size: 14 }),
                "Select All"
              ] })
            }
          ),
          /* @__PURE__ */ v.jsxs(
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
                alignItems: "center",
                gap: "5px"
              },
              disabled: e.isLoading,
              children: [
                /* @__PURE__ */ v.jsx(
                  op,
                  {
                    size: 14,
                    className: e.isLoading ? "animate-spin" : ""
                  }
                ),
                "Refresh"
              ]
            }
          )
        ]
      }
    ),
    e.error && /* @__PURE__ */ v.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && e.images.length === 0 ? /* @__PURE__ */ v.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : e.images.length === 0 ? /* @__PURE__ */ v.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ v.jsx("div", { className: "meld-gallery__list", children: e.images.map((l) => /* @__PURE__ */ v.jsx(gp, { image: l }, l.id)) }),
    /* @__PURE__ */ v.jsx(yp, {}),
    e.viewerImageId !== null && /* @__PURE__ */ v.jsx(wp, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ v.jsx(kp, { imageId: e.activeModal.imageId })
  ] });
}, _l = document.createElement("link");
_l.rel = "stylesheet";
_l.type = "text/css";
_l.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(_l);
let xr = null, ze = null;
mc.registerExtension({
  name: "ComfyUI.MeldNexus",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldNexus") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const i = n.ui.meldNexus;
        i != null && i.isVisible() && i.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await Uf();
      We.init(n.dev_mode), We.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld-Flow] Failed to fetch settings", n), We.init(!1);
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
      }, De.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), De.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await ac({
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
          id: "meld-flow-gallery",
          icon: "meld-nexus-icon",
          title: "Nexus",
          tooltip: "Meld Flow: Nexus",
          type: "custom",
          render: (n) => {
            We.log("MeldNexus: render called", {
              el: n,
              galleryRoot: xr,
              galleryContainer: ze
            }), ze || (We.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), ze = document.createElement("div"), ze.id = "meld-flow-gallery-container", ze.style.height = "100%", ze.style.width = "100%", ze.style.display = "flex", ze.style.flexDirection = "column"), n.contains(ze) || (We.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(ze)), xr ? We.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (We.log("MeldNexus: Creating new gallery root"), xr = sc(ze), xr.render(
              Qo.createElement(
                vp,
                null,
                Qo.createElement(Sp)
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
