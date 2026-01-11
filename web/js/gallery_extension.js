import { api as De } from "../../../scripts/api.js";
import { app as vc } from "../../../scripts/app.js";
function yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qu = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn = Symbol.for("react.element"), gc = Symbol.for("react.portal"), wc = Symbol.for("react.fragment"), kc = Symbol.for("react.strict_mode"), Sc = Symbol.for("react.profiler"), xc = Symbol.for("react.provider"), Ec = Symbol.for("react.context"), _c = Symbol.for("react.forward_ref"), Cc = Symbol.for("react.suspense"), Nc = Symbol.for("react.memo"), Pc = Symbol.for("react.lazy"), Ho = Symbol.iterator;
function Lc(e) {
  return e === null || typeof e != "object" ? null : (e = Ho && e[Ho] || e["@@iterator"], typeof e == "function" ? e : null);
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
var Bo = Array.isArray, rs = Object.prototype.hasOwnProperty, Xi = { current: null }, ls = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) rs.call(t, r) && !ls.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: bn, type: e, key: i, ref: o, props: l, _owner: Xi.current };
}
function jc(e, t) {
  return { $$typeof: bn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bn;
}
function zc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Wo = /\/+/g;
function Ll(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? zc("" + e.key) : t.toString(36);
}
function Cr(e, t, n, r, l) {
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
        case bn:
        case gc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Ll(o, 0) : r, Bo(l) ? (n = "", e != null && (n = e.replace(Wo, "$&/") + "/"), Cr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (Yi(l) && (l = jc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Wo, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Bo(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Ll(i, u);
    o += Cr(i, t, n, s, l);
  }
  else if (s = Lc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Ll(i, u++), o += Cr(i, t, n, s, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ur(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Cr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Ic(e) {
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
var se = { current: null }, Nr = { transition: null }, Tc = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: Nr, ReactCurrentOwner: Xi };
function os() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = { map: ur, forEach: function(e, t, n) {
  ur(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ur(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ur(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Yi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = an;
z.Fragment = wc;
z.Profiler = Sc;
z.PureComponent = Gi;
z.StrictMode = kc;
z.Suspense = Cc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tc;
z.act = os;
z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = es({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Xi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) rs.call(t, s) && !ls.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: bn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function(e) {
  return e = { $$typeof: Ec, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: xc, _context: e }, e.Consumer = e;
};
z.createElement = is;
z.createFactory = function(e) {
  var t = is.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: _c, render: e };
};
z.isValidElement = Yi;
z.lazy = function(e) {
  return { $$typeof: Pc, _payload: { _status: -1, _result: e }, _init: Ic };
};
z.memo = function(e, t) {
  return { $$typeof: Nc, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = t;
  }
};
z.unstable_act = os;
z.useCallback = function(e, t) {
  return se.current.useCallback(e, t);
};
z.useContext = function(e) {
  return se.current.useContext(e);
};
z.useDebugValue = function() {
};
z.useDeferredValue = function(e) {
  return se.current.useDeferredValue(e);
};
z.useEffect = function(e, t) {
  return se.current.useEffect(e, t);
};
z.useId = function() {
  return se.current.useId();
};
z.useImperativeHandle = function(e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function(e, t) {
  return se.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function(e, t) {
  return se.current.useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return se.current.useMemo(e, t);
};
z.useReducer = function(e, t, n) {
  return se.current.useReducer(e, t, n);
};
z.useRef = function(e) {
  return se.current.useRef(e);
};
z.useState = function(e) {
  return se.current.useState(e);
};
z.useSyncExternalStore = function(e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function() {
  return se.current.useTransition();
};
z.version = "18.3.1";
qu.exports = z;
var O = qu.exports;
const Qo = /* @__PURE__ */ yc(O);
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
  function t(_, L) {
    var j = _.length;
    _.push(L);
    e: for (; 0 < j; ) {
      var Q = j - 1 >>> 1, Z = _[Q];
      if (0 < l(Z, L)) _[Q] = L, _[j] = Z, j = Q;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var L = _[0], j = _.pop();
    if (j !== L) {
      _[0] = j;
      e: for (var Q = 0, Z = _.length, ir = Z >>> 1; Q < ir; ) {
        var kt = 2 * (Q + 1) - 1, Pl = _[kt], St = kt + 1, or = _[St];
        if (0 > l(Pl, j)) St < Z && 0 > l(or, Pl) ? (_[Q] = or, _[St] = j, Q = St) : (_[Q] = Pl, _[kt] = j, Q = kt);
        else if (St < Z && 0 > l(or, j)) _[Q] = or, _[St] = j, Q = St;
        else break e;
      }
    }
    return L;
  }
  function l(_, L) {
    var j = _.sortIndex - L.sortIndex;
    return j !== 0 ? j : _.id - L.id;
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
  var s = [], f = [], v = 1, p = null, m = 3, k = !1, S = !1, w = !1, M = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var L = n(f); L !== null; ) {
      if (L.callback === null) r(f);
      else if (L.startTime <= _) r(f), L.sortIndex = L.expirationTime, t(s, L);
      else break;
      L = n(f);
    }
  }
  function y(_) {
    if (w = !1, d(_), !S) if (n(s) !== null) S = !0, Cl(E);
    else {
      var L = n(f);
      L !== null && Nl(y, L.startTime - _);
    }
  }
  function E(_, L) {
    S = !1, w && (w = !1, c(P), P = -1), k = !0;
    var j = m;
    try {
      for (d(L), p = n(s); p !== null && (!(p.expirationTime > L) || _ && !Le()); ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          p.callback = null, m = p.priorityLevel;
          var Z = Q(p.expirationTime <= L);
          L = e.unstable_now(), typeof Z == "function" ? p.callback = Z : p === n(s) && r(s), d(L);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var ir = !0;
      else {
        var kt = n(f);
        kt !== null && Nl(y, kt.startTime - L), ir = !1;
      }
      return ir;
    } finally {
      p = null, m = j, k = !1;
    }
  }
  var C = !1, N = null, P = -1, W = 5, I = -1;
  function Le() {
    return !(e.unstable_now() - I < W);
  }
  function pn() {
    if (N !== null) {
      var _ = e.unstable_now();
      I = _;
      var L = !0;
      try {
        L = N(!0, _);
      } finally {
        L ? mn() : (C = !1, N = null);
      }
    } else C = !1;
  }
  var mn;
  if (typeof a == "function") mn = function() {
    a(pn);
  };
  else if (typeof MessageChannel < "u") {
    var Vo = new MessageChannel(), hc = Vo.port2;
    Vo.port1.onmessage = pn, mn = function() {
      hc.postMessage(null);
    };
  } else mn = function() {
    M(pn, 0);
  };
  function Cl(_) {
    N = _, C || (C = !0, mn());
  }
  function Nl(_, L) {
    P = M(function() {
      _(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    S || k || (S = !0, Cl(E));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(_) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = m;
    }
    var j = m;
    m = L;
    try {
      return _();
    } finally {
      m = j;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, L) {
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
    var j = m;
    m = _;
    try {
      return L();
    } finally {
      m = j;
    }
  }, e.unstable_scheduleCallback = function(_, L, j) {
    var Q = e.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? Q + j : Q) : j = Q, _) {
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
    return Z = j + Z, _ = { id: v++, callback: L, priorityLevel: _, startTime: j, expirationTime: Z, sortIndex: -1 }, j > Q ? (_.sortIndex = j, t(f, _), n(s) === null && _ === n(f) && (w ? (c(P), P = -1) : w = !0, Nl(y, j - Q))) : (_.sortIndex = Z, t(s, _), S || k || (S = !0, Cl(E))), _;
  }, e.unstable_shouldYield = Le, e.unstable_wrapCallback = function(_) {
    var L = m;
    return function() {
      var j = m;
      m = L;
      try {
        return _.apply(this, arguments);
      } finally {
        m = j;
      }
    };
  };
})(as);
ss.exports = as;
var Mc = ss.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc = O, ge = Mc;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cs = /* @__PURE__ */ new Set(), Dn = {};
function Rt(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (Dn[e] = t, e = 0; e < t.length; e++) cs.add(t[e]);
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ei = Object.prototype.hasOwnProperty, Oc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Go = {}, Ko = {};
function Dc(e) {
  return ei.call(Ko, e) ? !0 : ei.call(Go, e) ? !1 : Oc.test(e) ? Ko[e] = !0 : (Go[e] = !0, !1);
}
function Fc(e, t, n, r) {
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
function Uc(e, t, n, r) {
  if (t === null || typeof t > "u" || Fc(e, t, n, r)) return !0;
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
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Uc(t, n, l, r) && (n = null), r || l === null ? Dc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var be = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sr = Symbol.for("react.element"), Ft = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), bi = Symbol.for("react.strict_mode"), ti = Symbol.for("react.profiler"), fs = Symbol.for("react.provider"), ds = Symbol.for("react.context"), eo = Symbol.for("react.forward_ref"), ni = Symbol.for("react.suspense"), ri = Symbol.for("react.suspense_list"), to = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), ps = Symbol.for("react.offscreen"), Xo = Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object" ? null : (e = Xo && e[Xo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var H = Object.assign, jl;
function En(e) {
  if (jl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    jl = t && t[1] || "";
  }
  return `
` + jl + e;
}
var zl = !1;
function Il(e, t) {
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
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
        if (o !== 1 || u !== 1)
          do
            if (o--, u--, 0 > u || l[o] !== i[u]) {
              var s = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
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
function Ac(e) {
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
      return e = Il(e.type, !1), e;
    case 11:
      return e = Il(e.type.render, !1), e;
    case 1:
      return e = Il(e.type, !0), e;
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
    case ds:
      return (e.displayName || "Context") + ".Consumer";
    case fs:
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
function $c(e) {
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
function Vc(e) {
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
function ar(e) {
  e._valueTracker || (e._valueTracker = Vc(e));
}
function hs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ms(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ii(e, t) {
  var n = t.checked;
  return H({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
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
  (t !== "number" || Fr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _n = Array.isArray;
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
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return H({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Jo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(g(92));
      if (_n(n)) {
        if (1 < n.length) throw Error(g(93));
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
var cr, ws = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (cr = cr || document.createElement("div"), cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = cr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pn = {
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
}, Hc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pn).forEach(function(e) {
  Hc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Pn[t] = Pn[e];
  });
});
function ks(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pn.hasOwnProperty(e) && Pn[e] ? ("" + t).trim() : t + "px";
}
function Ss(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = ks(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Bc = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ci(e, t) {
  if (t) {
    if (Bc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function fi(e, t) {
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
var di = null;
function no(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var pi = null, Zt = null, Jt = null;
function bo(e) {
  if (e = nr(e)) {
    if (typeof pi != "function") throw Error(g(280));
    var t = e.stateNode;
    t && (t = dl(t), pi(e.stateNode, e.type, t));
  }
}
function xs(e) {
  Zt ? Jt ? Jt.push(e) : Jt = [e] : Zt = e;
}
function Es() {
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
    Tl = !1, (Zt !== null || Jt !== null) && (Cs(), Es());
  }
}
function Un(e, t) {
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
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var mi = !1;
if (Ye) try {
  var vn = {};
  Object.defineProperty(vn, "passive", { get: function() {
    mi = !0;
  } }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
} catch {
  mi = !1;
}
function Wc(e, t, n, r, l, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (v) {
    this.onError(v);
  }
}
var Ln = !1, Ur = null, Ar = !1, hi = null, Qc = { onError: function(e) {
  Ln = !0, Ur = e;
} };
function Gc(e, t, n, r, l, i, o, u, s) {
  Ln = !1, Ur = null, Wc.apply(Qc, arguments);
}
function Kc(e, t, n, r, l, i, o, u, s) {
  if (Gc.apply(this, arguments), Ln) {
    if (Ln) {
      var f = Ur;
      Ln = !1, Ur = null;
    } else throw Error(g(198));
    Ar || (Ar = !0, hi = f);
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
  if (Ot(e) !== e) throw Error(g(188));
}
function Xc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ot(e), t === null) throw Error(g(188));
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
      throw Error(g(188));
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
        if (!o) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Ls(e) {
  return e = Xc(e), e !== null ? js(e) : null;
}
function js(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = js(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zs = ge.unstable_scheduleCallback, tu = ge.unstable_cancelCallback, Yc = ge.unstable_shouldYield, Zc = ge.unstable_requestPaint, G = ge.unstable_now, Jc = ge.unstable_getCurrentPriorityLevel, ro = ge.unstable_ImmediatePriority, Is = ge.unstable_UserBlockingPriority, $r = ge.unstable_NormalPriority, qc = ge.unstable_LowPriority, Ts = ge.unstable_IdlePriority, sl = null, Ve = null;
function bc(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function") try {
    Ve.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Re = Math.clz32 ? Math.clz32 : nf, ef = Math.log, tf = Math.LN2;
function nf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ef(e) / tf | 0) | 0;
}
var fr = 64, dr = 4194304;
function Cn(e) {
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
function Vr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = Cn(u) : (i &= o, i !== 0 && (r = Cn(i)));
  } else o = n & ~l, o !== 0 ? r = Cn(o) : i !== 0 && (r = Cn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Re(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function rf(e, t) {
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
function lf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Re(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = rf(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function vi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ms() {
  var e = fr;
  return fr <<= 1, !(fr & 4194240) && (fr = 64), e;
}
function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function er(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Re(t), e[t] = n;
}
function of(e, t) {
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
var R = 0;
function Rs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Os, io, Ds, Fs, Us, yi = !1, pr = [], ut = null, st = null, at = null, An = /* @__PURE__ */ new Map(), $n = /* @__PURE__ */ new Map(), rt = [], uf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $n.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = nr(t), t !== null && io(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function sf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ut = yn(ut, e, t, n, r, l), !0;
    case "dragenter":
      return st = yn(st, e, t, n, r, l), !0;
    case "mouseover":
      return at = yn(at, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return An.set(i, yn(An.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, $n.set(i, yn($n.get(i) || null, e, t, n, r, l)), !0;
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
function Pr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      di = r, n.target.dispatchEvent(r), di = null;
    } else return t = nr(n), t !== null && io(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ru(e, t, n) {
  Pr(e) && n.delete(t);
}
function af() {
  yi = !1, ut !== null && Pr(ut) && (ut = null), st !== null && Pr(st) && (st = null), at !== null && Pr(at) && (at = null), An.forEach(ru), $n.forEach(ru);
}
function gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yi || (yi = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, af)));
}
function Vn(e) {
  function t(l) {
    return gn(l, e);
  }
  if (0 < pr.length) {
    gn(pr[0], e);
    for (var n = 1; n < pr.length; n++) {
      var r = pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ut !== null && gn(ut, e), st !== null && gn(st, e), at !== null && gn(at, e), An.forEach(t), $n.forEach(t), n = 0; n < rt.length; n++) r = rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < rt.length && (n = rt[0], n.blockedOn === null); ) As(n), n.blockedOn === null && rt.shift();
}
var qt = be.ReactCurrentBatchConfig, Hr = !0;
function cf(e, t, n, r) {
  var l = R, i = qt.transition;
  qt.transition = null;
  try {
    R = 1, oo(e, t, n, r);
  } finally {
    R = l, qt.transition = i;
  }
}
function ff(e, t, n, r) {
  var l = R, i = qt.transition;
  qt.transition = null;
  try {
    R = 4, oo(e, t, n, r);
  } finally {
    R = l, qt.transition = i;
  }
}
function oo(e, t, n, r) {
  if (Hr) {
    var l = gi(e, t, n, r);
    if (l === null) Bl(e, t, r, Br, n), nu(e, r);
    else if (sf(l, e, t, n, r)) r.stopPropagation();
    else if (nu(e, r), t & 4 && -1 < uf.indexOf(e)) {
      for (; l !== null; ) {
        var i = nr(l);
        if (i !== null && Os(i), i = gi(e, t, n, r), i === null && Bl(e, t, r, Br, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Bl(e, t, r, null, n);
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
      switch (Jc()) {
        case ro:
          return 1;
        case Is:
          return 4;
        case $r:
        case qc:
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
var it = null, uo = null, Lr = null;
function Vs() {
  if (Lr) return Lr;
  var e, t = uo, n = t.length, r, l = "value" in it ? it.value : it.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Lr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function jr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function mr() {
  return !0;
}
function lu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? mr : lu, this.isPropagationStopped = lu, this;
  }
  return H(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = mr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = mr);
  }, persist: function() {
  }, isPersistent: mr }), t;
}
var cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, so = ke(cn), tr = H({}, cn, { view: 0, detail: 0 }), df = ke(tr), Rl, Ol, wn, al = H({}, tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ao, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== wn && (wn && e.type === "mousemove" ? (Rl = e.screenX - wn.screenX, Ol = e.screenY - wn.screenY) : Ol = Rl = 0, wn = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ol;
} }), iu = ke(al), pf = H({}, al, { dataTransfer: 0 }), mf = ke(pf), hf = H({}, tr, { relatedTarget: 0 }), Dl = ke(hf), vf = H({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yf = ke(vf), gf = H({}, cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), wf = ke(gf), kf = H({}, cn, { data: 0 }), ou = ke(kf), Sf = {
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
}, xf = {
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
}, Ef = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function _f(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ef[e]) ? !!t[e] : !1;
}
function ao() {
  return _f;
}
var Cf = H({}, tr, { key: function(e) {
  if (e.key) {
    var t = Sf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = jr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ao, charCode: function(e) {
  return e.type === "keypress" ? jr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? jr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Nf = ke(Cf), Pf = H({}, al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uu = ke(Pf), Lf = H({}, tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ao }), jf = ke(Lf), zf = H({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), If = ke(zf), Tf = H({}, al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Mf = ke(Tf), Rf = [9, 13, 27, 32], co = Ye && "CompositionEvent" in window, jn = null;
Ye && "documentMode" in document && (jn = document.documentMode);
var Of = Ye && "TextEvent" in window && !jn, Hs = Ye && (!co || jn && 8 < jn && 11 >= jn), su = " ", au = !1;
function Bs(e, t) {
  switch (e) {
    case "keyup":
      return Rf.indexOf(t.keyCode) !== -1;
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
function Ws(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function Df(e, t) {
  switch (e) {
    case "compositionend":
      return Ws(t);
    case "keypress":
      return t.which !== 32 ? null : (au = !0, su);
    case "textInput":
      return e = t.data, e === su && au ? null : e;
    default:
      return null;
  }
}
function Ff(e, t) {
  if (At) return e === "compositionend" || !co && Bs(e, t) ? (e = Vs(), Lr = uo = it = null, At = !1, e) : null;
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
      return Hs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Uf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Uf[e.type] : t === "textarea";
}
function Qs(e, t, n, r) {
  xs(r), t = Wr(t, "onChange"), 0 < t.length && (n = new so("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var zn = null, Hn = null;
function Af(e) {
  na(e, 0);
}
function cl(e) {
  var t = Ht(e);
  if (hs(t)) return e;
}
function $f(e, t) {
  if (e === "change") return t;
}
var Gs = !1;
if (Ye) {
  var Fl;
  if (Ye) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var fu = document.createElement("div");
      fu.setAttribute("oninput", "return;"), Ul = typeof fu.oninput == "function";
    }
    Fl = Ul;
  } else Fl = !1;
  Gs = Fl && (!document.documentMode || 9 < document.documentMode);
}
function du() {
  zn && (zn.detachEvent("onpropertychange", Ks), Hn = zn = null);
}
function Ks(e) {
  if (e.propertyName === "value" && cl(Hn)) {
    var t = [];
    Qs(t, Hn, e, no(e)), Ns(Af, t);
  }
}
function Vf(e, t, n) {
  e === "focusin" ? (du(), zn = t, Hn = n, zn.attachEvent("onpropertychange", Ks)) : e === "focusout" && du();
}
function Hf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return cl(Hn);
}
function Bf(e, t) {
  if (e === "click") return cl(t);
}
function Wf(e, t) {
  if (e === "input" || e === "change") return cl(t);
}
function Qf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fe = typeof Object.is == "function" ? Object.is : Qf;
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
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fr(e.document);
  }
  return t;
}
function fo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Gf(e) {
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
var Kf = Ye && "documentMode" in document && 11 >= document.documentMode, $t = null, wi = null, In = null, ki = !1;
function hu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ki || $t == null || $t !== Fr(r) || (r = $t, "selectionStart" in r && fo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), In && Bn(In, r) || (In = r, r = Wr(wi, "onSelect"), 0 < r.length && (t = new so("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = $t)));
}
function hr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vt = { animationend: hr("Animation", "AnimationEnd"), animationiteration: hr("Animation", "AnimationIteration"), animationstart: hr("Animation", "AnimationStart"), transitionend: hr("Transition", "TransitionEnd") }, Al = {}, Zs = {};
Ye && (Zs = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);
function fl(e) {
  if (Al[e]) return Al[e];
  if (!Vt[e]) return e;
  var t = Vt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zs) return Al[e] = t[n];
  return e;
}
var Js = fl("animationend"), qs = fl("animationiteration"), bs = fl("animationstart"), ea = fl("transitionend"), ta = /* @__PURE__ */ new Map(), vu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yt(e, t) {
  ta.set(e, t), Rt(t, [e]);
}
for (var $l = 0; $l < vu.length; $l++) {
  var Vl = vu[$l], Xf = Vl.toLowerCase(), Yf = Vl[0].toUpperCase() + Vl.slice(1);
  yt(Xf, "on" + Yf);
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
var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function yu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Kc(r, t, void 0, e), e.currentTarget = null;
}
function na(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        yu(l, u, f), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, f = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        yu(l, u, f), i = s;
      }
    }
  }
  if (Ar) throw e = hi, Ar = !1, hi = null, e;
}
function F(e, t) {
  var n = t[Ci];
  n === void 0 && (n = t[Ci] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ra(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), ra(n, e, r, t);
}
var vr = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
  if (!e[vr]) {
    e[vr] = !0, cs.forEach(function(n) {
      n !== "selectionchange" && (Zf.has(n) || Hl(n, !1, e), Hl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vr] || (t[vr] = !0, Hl("selectionchange", !1, t));
  }
}
function ra(e, t, n, r) {
  switch ($s(t)) {
    case 1:
      var l = cf;
      break;
    case 4:
      l = ff;
      break;
    default:
      l = oo;
  }
  n = l.bind(null, t, n, e), l = void 0, !mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Bl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = _t(u), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Ns(function() {
    var f = i, v = no(n), p = [];
    e: {
      var m = ta.get(e);
      if (m !== void 0) {
        var k = so, S = e;
        switch (e) {
          case "keypress":
            if (jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Nf;
            break;
          case "focusin":
            S = "focus", k = Dl;
            break;
          case "focusout":
            S = "blur", k = Dl;
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
            k = mf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = jf;
            break;
          case Js:
          case qs:
          case bs:
            k = yf;
            break;
          case ea:
            k = If;
            break;
          case "scroll":
            k = df;
            break;
          case "wheel":
            k = Mf;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = wf;
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
        var w = (t & 4) !== 0, M = !w && e === "scroll", c = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var a = f, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (d.tag === 5 && y !== null && (d = y, c !== null && (y = Un(a, c), y != null && w.push(Qn(a, y, d)))), M) break;
          a = a.return;
        }
        0 < w.length && (m = new k(m, S, null, n, v), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", m && n !== di && (S = n.relatedTarget || n.fromElement) && (_t(S) || S[Ze])) break e;
        if ((k || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window, k ? (S = n.relatedTarget || n.toElement, k = f, S = S ? _t(S) : null, S !== null && (M = Ot(S), S !== M || S.tag !== 5 && S.tag !== 6) && (S = null)) : (k = null, S = f), k !== S)) {
          if (w = iu, y = "onMouseLeave", c = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (w = uu, y = "onPointerLeave", c = "onPointerEnter", a = "pointer"), M = k == null ? m : Ht(k), d = S == null ? m : Ht(S), m = new w(y, a + "leave", k, n, v), m.target = M, m.relatedTarget = d, y = null, _t(v) === f && (w = new w(c, a + "enter", S, n, v), w.target = d, w.relatedTarget = M, y = w), M = y, k && S) t: {
            for (w = k, c = S, a = 0, d = w; d; d = Dt(d)) a++;
            for (d = 0, y = c; y; y = Dt(y)) d++;
            for (; 0 < a - d; ) w = Dt(w), a--;
            for (; 0 < d - a; ) c = Dt(c), d--;
            for (; a--; ) {
              if (w === c || c !== null && w === c.alternate) break t;
              w = Dt(w), c = Dt(c);
            }
            w = null;
          }
          else w = null;
          k !== null && gu(p, m, k, w, !1), S !== null && M !== null && gu(p, M, S, w, !0);
        }
      }
      e: {
        if (m = f ? Ht(f) : window, k = m.nodeName && m.nodeName.toLowerCase(), k === "select" || k === "input" && m.type === "file") var E = $f;
        else if (cu(m)) if (Gs) E = Wf;
        else {
          E = Hf;
          var C = Vf;
        }
        else (k = m.nodeName) && k.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = Bf);
        if (E && (E = E(e, f))) {
          Qs(p, E, n, v);
          break e;
        }
        C && C(e, m, f), e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && ui(m, "number", m.value);
      }
      switch (C = f ? Ht(f) : window, e) {
        case "focusin":
          (cu(C) || C.contentEditable === "true") && ($t = C, wi = f, In = null);
          break;
        case "focusout":
          In = wi = $t = null;
          break;
        case "mousedown":
          ki = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ki = !1, hu(p, n, v);
          break;
        case "selectionchange":
          if (Kf) break;
        case "keydown":
        case "keyup":
          hu(p, n, v);
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
      else At ? Bs(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Hs && n.locale !== "ko" && (At || P !== "onCompositionStart" ? P === "onCompositionEnd" && At && (N = Vs()) : (it = v, uo = "value" in it ? it.value : it.textContent, At = !0)), C = Wr(f, P), 0 < C.length && (P = new ou(P, e, null, n, v), p.push({ event: P, listeners: C }), N ? P.data = N : (N = Ws(n), N !== null && (P.data = N)))), (N = Of ? Df(e, n) : Ff(e, n)) && (f = Wr(f, "onBeforeInput"), 0 < f.length && (v = new ou("onBeforeInput", "beforeinput", null, n, v), p.push({ event: v, listeners: f }), v.data = N));
    }
    na(p, t);
  });
}
function Qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Un(e, n), i != null && r.unshift(Qn(e, i, l)), i = Un(e, t), i != null && r.push(Qn(e, i, l))), e = e.return;
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
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, l ? (s = Un(n, i), s != null && o.unshift(Qn(n, s, u))) : l || (s = Un(n, i), s != null && o.push(Qn(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Jf = /\r\n?/g, qf = /\u0000|\uFFFD/g;
function wu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Jf, `
`).replace(qf, "");
}
function yr(e, t, n) {
  if (t = wu(t), wu(e) !== t && n) throw Error(g(425));
}
function Qr() {
}
var Si = null, xi = null;
function Ei(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _i = typeof setTimeout == "function" ? setTimeout : void 0, bf = typeof clearTimeout == "function" ? clearTimeout : void 0, ku = typeof Promise == "function" ? Promise : void 0, ed = typeof queueMicrotask == "function" ? queueMicrotask : typeof ku < "u" ? function(e) {
  return ku.resolve(null).then(e).catch(td);
} : _i;
function td(e) {
  setTimeout(function() {
    throw e;
  });
}
function Wl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Vn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Vn(t);
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
var fn = Math.random().toString(36).slice(2), $e = "__reactFiber$" + fn, Gn = "__reactProps$" + fn, Ze = "__reactContainer$" + fn, Ci = "__reactEvents$" + fn, nd = "__reactListeners$" + fn, rd = "__reactHandles$" + fn;
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
function nr(e) {
  return e = e[$e] || e[Ze], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ht(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function dl(e) {
  return e[Gn] || null;
}
var Ni = [], Bt = -1;
function gt(e) {
  return { current: e };
}
function U(e) {
  0 > Bt || (e.current = Ni[Bt], Ni[Bt] = null, Bt--);
}
function D(e, t) {
  Bt++, Ni[Bt] = e.current, e.current = t;
}
var vt = {}, ie = gt(vt), de = gt(!1), jt = vt;
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
function Gr() {
  U(de), U(ie);
}
function xu(e, t, n) {
  if (ie.current !== vt) throw Error(g(168));
  D(ie, t), D(de, n);
}
function la(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, $c(e) || "Unknown", l));
  return H({}, n, r);
}
function Kr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vt, jt = ie.current, D(ie, e), D(de, de.current), !0;
}
function Eu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n ? (e = la(e, t, jt), r.__reactInternalMemoizedMergedChildContext = e, U(de), U(ie), D(ie, e)) : U(de), D(de, n);
}
var Qe = null, pl = !1, Ql = !1;
function ia(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
function ld(e) {
  pl = !0, ia(e);
}
function wt() {
  if (!Ql && Qe !== null) {
    Ql = !0;
    var e = 0, t = R;
    try {
      var n = Qe;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Qe = null, pl = !1;
    } catch (l) {
      throw Qe !== null && (Qe = Qe.slice(e + 1)), zs(ro, wt), l;
    } finally {
      R = t, Ql = !1;
    }
  }
  return null;
}
var Wt = [], Qt = 0, Xr = null, Yr = 0, Se = [], xe = 0, zt = null, Ge = 1, Ke = "";
function xt(e, t) {
  Wt[Qt++] = Yr, Wt[Qt++] = Xr, Xr = e, Yr = t;
}
function oa(e, t, n) {
  Se[xe++] = Ge, Se[xe++] = Ke, Se[xe++] = zt, zt = e;
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
  e.return !== null && (xt(e, 1), oa(e, 1, 0));
}
function mo(e) {
  for (; e === Xr; ) Xr = Wt[--Qt], Wt[Qt] = null, Yr = Wt[--Qt], Wt[Qt] = null;
  for (; e === zt; ) zt = Se[--xe], Se[xe] = null, Ke = Se[--xe], Se[xe] = null, Ge = Se[--xe], Se[xe] = null;
}
var ye = null, ve = null, A = !1, Me = null;
function ua(e, t) {
  var n = Ee(5, null, null, 0);
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
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? { id: Ge, overflow: Ke } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ee(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function Pi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Li(e) {
  if (A) {
    var t = ve;
    if (t) {
      var n = t;
      if (!_u(e, t)) {
        if (Pi(e)) throw Error(g(418));
        t = ct(n.nextSibling);
        var r = ye;
        t && _u(e, t) ? ua(r, n) : (e.flags = e.flags & -4097 | 2, A = !1, ye = e);
      }
    } else {
      if (Pi(e)) throw Error(g(418));
      e.flags = e.flags & -4097 | 2, A = !1, ye = e;
    }
  }
}
function Cu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ye = e;
}
function gr(e) {
  if (e !== ye) return !1;
  if (!A) return Cu(e), A = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ei(e.type, e.memoizedProps)), t && (t = ve)) {
    if (Pi(e)) throw sa(), Error(g(418));
    for (; t; ) ua(e, t), t = ct(t.nextSibling);
  }
  if (Cu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
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
var id = be.ReactCurrentBatchConfig;
function kn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function wr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Nu(e) {
  var t = e._init;
  return t(e._payload);
}
function aa(e) {
  function t(c, a) {
    if (e) {
      var d = c.deletions;
      d === null ? (c.deletions = [a], c.flags |= 16) : d.push(a);
    }
  }
  function n(c, a) {
    if (!e) return null;
    for (; a !== null; ) t(c, a), a = a.sibling;
    return null;
  }
  function r(c, a) {
    for (c = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
    return c;
  }
  function l(c, a) {
    return c = mt(c, a), c.index = 0, c.sibling = null, c;
  }
  function i(c, a, d) {
    return c.index = d, e ? (d = c.alternate, d !== null ? (d = d.index, d < a ? (c.flags |= 2, a) : d) : (c.flags |= 2, a)) : (c.flags |= 1048576, a);
  }
  function o(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, a, d, y) {
    return a === null || a.tag !== 6 ? (a = ql(d, c.mode, y), a.return = c, a) : (a = l(a, d), a.return = c, a);
  }
  function s(c, a, d, y) {
    var E = d.type;
    return E === Ut ? v(c, a, d.props.children, y, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tt && Nu(E) === a.type) ? (y = l(a, d.props), y.ref = kn(c, a, d), y.return = c, y) : (y = Dr(d.type, d.key, d.props, null, c.mode, y), y.ref = kn(c, a, d), y.return = c, y);
  }
  function f(c, a, d, y) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = bl(d, c.mode, y), a.return = c, a) : (a = l(a, d.children || []), a.return = c, a);
  }
  function v(c, a, d, y, E) {
    return a === null || a.tag !== 7 ? (a = Lt(d, c.mode, y, E), a.return = c, a) : (a = l(a, d), a.return = c, a);
  }
  function p(c, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = ql("" + a, c.mode, d), a.return = c, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case sr:
          return d = Dr(a.type, a.key, a.props, null, c.mode, d), d.ref = kn(c, null, a), d.return = c, d;
        case Ft:
          return a = bl(a, c.mode, d), a.return = c, a;
        case tt:
          var y = a._init;
          return p(c, y(a._payload), d);
      }
      if (_n(a) || hn(a)) return a = Lt(a, c.mode, d, null), a.return = c, a;
      wr(c, a);
    }
    return null;
  }
  function m(c, a, d, y) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(c, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case sr:
          return d.key === E ? s(c, a, d, y) : null;
        case Ft:
          return d.key === E ? f(c, a, d, y) : null;
        case tt:
          return E = d._init, m(
            c,
            a,
            E(d._payload),
            y
          );
      }
      if (_n(d) || hn(d)) return E !== null ? null : v(c, a, d, y, null);
      wr(c, d);
    }
    return null;
  }
  function k(c, a, d, y, E) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return c = c.get(d) || null, u(a, c, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case sr:
          return c = c.get(y.key === null ? d : y.key) || null, s(a, c, y, E);
        case Ft:
          return c = c.get(y.key === null ? d : y.key) || null, f(a, c, y, E);
        case tt:
          var C = y._init;
          return k(c, a, d, C(y._payload), E);
      }
      if (_n(y) || hn(y)) return c = c.get(d) || null, v(a, c, y, E, null);
      wr(a, y);
    }
    return null;
  }
  function S(c, a, d, y) {
    for (var E = null, C = null, N = a, P = a = 0, W = null; N !== null && P < d.length; P++) {
      N.index > P ? (W = N, N = null) : W = N.sibling;
      var I = m(c, N, d[P], y);
      if (I === null) {
        N === null && (N = W);
        break;
      }
      e && N && I.alternate === null && t(c, N), a = i(I, a, P), C === null ? E = I : C.sibling = I, C = I, N = W;
    }
    if (P === d.length) return n(c, N), A && xt(c, P), E;
    if (N === null) {
      for (; P < d.length; P++) N = p(c, d[P], y), N !== null && (a = i(N, a, P), C === null ? E = N : C.sibling = N, C = N);
      return A && xt(c, P), E;
    }
    for (N = r(c, N); P < d.length; P++) W = k(N, c, P, d[P], y), W !== null && (e && W.alternate !== null && N.delete(W.key === null ? P : W.key), a = i(W, a, P), C === null ? E = W : C.sibling = W, C = W);
    return e && N.forEach(function(Le) {
      return t(c, Le);
    }), A && xt(c, P), E;
  }
  function w(c, a, d, y) {
    var E = hn(d);
    if (typeof E != "function") throw Error(g(150));
    if (d = E.call(d), d == null) throw Error(g(151));
    for (var C = E = null, N = a, P = a = 0, W = null, I = d.next(); N !== null && !I.done; P++, I = d.next()) {
      N.index > P ? (W = N, N = null) : W = N.sibling;
      var Le = m(c, N, I.value, y);
      if (Le === null) {
        N === null && (N = W);
        break;
      }
      e && N && Le.alternate === null && t(c, N), a = i(Le, a, P), C === null ? E = Le : C.sibling = Le, C = Le, N = W;
    }
    if (I.done) return n(
      c,
      N
    ), A && xt(c, P), E;
    if (N === null) {
      for (; !I.done; P++, I = d.next()) I = p(c, I.value, y), I !== null && (a = i(I, a, P), C === null ? E = I : C.sibling = I, C = I);
      return A && xt(c, P), E;
    }
    for (N = r(c, N); !I.done; P++, I = d.next()) I = k(N, c, P, I.value, y), I !== null && (e && I.alternate !== null && N.delete(I.key === null ? P : I.key), a = i(I, a, P), C === null ? E = I : C.sibling = I, C = I);
    return e && N.forEach(function(pn) {
      return t(c, pn);
    }), A && xt(c, P), E;
  }
  function M(c, a, d, y) {
    if (typeof d == "object" && d !== null && d.type === Ut && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case sr:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (E = d.type, E === Ut) {
                  if (C.tag === 7) {
                    n(c, C.sibling), a = l(C, d.props.children), a.return = c, c = a;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tt && Nu(E) === C.type) {
                  n(c, C.sibling), a = l(C, d.props), a.ref = kn(c, C, d), a.return = c, c = a;
                  break e;
                }
                n(c, C);
                break;
              } else t(c, C);
              C = C.sibling;
            }
            d.type === Ut ? (a = Lt(d.props.children, c.mode, y, d.key), a.return = c, c = a) : (y = Dr(d.type, d.key, d.props, null, c.mode, y), y.ref = kn(c, a, d), y.return = c, c = y);
          }
          return o(c);
        case Ft:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(c, a.sibling), a = l(a, d.children || []), a.return = c, c = a;
                break e;
              } else {
                n(c, a);
                break;
              }
              else t(c, a);
              a = a.sibling;
            }
            a = bl(d, c.mode, y), a.return = c, c = a;
          }
          return o(c);
        case tt:
          return C = d._init, M(c, a, C(d._payload), y);
      }
      if (_n(d)) return S(c, a, d, y);
      if (hn(d)) return w(c, a, d, y);
      wr(c, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(c, a.sibling), a = l(a, d), a.return = c, c = a) : (n(c, a), a = ql(d, c.mode, y), a.return = c, c = a), o(c)) : n(c, a);
  }
  return M;
}
var ln = aa(!0), ca = aa(!1), Zr = gt(null), Jr = null, Gt = null, vo = null;
function yo() {
  vo = Gt = Jr = null;
}
function go(e) {
  var t = Zr.current;
  U(Zr), e._currentValue = t;
}
function ji(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function bt(e, t) {
  Jr = e, vo = Gt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null);
}
function Ce(e) {
  var t = e._currentValue;
  if (vo !== e) if (e = { context: e, memoizedValue: t, next: null }, Gt === null) {
    if (Jr === null) throw Error(g(308));
    Gt = e, Jr.dependencies = { lanes: 0, firstContext: e };
  } else Gt = Gt.next = e;
  return t;
}
var Ct = null;
function wo(e) {
  Ct === null ? Ct = [e] : Ct.push(e);
}
function fa(e, t, n, r) {
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
function da(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Xe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, T & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Je(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, wo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Je(e, n);
}
function zr(e, t, n) {
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
function qr(e, t, n, r) {
  var l = e.updateQueue;
  nt = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, o === null ? i = f : o.next = f, o = s;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== o && (u === null ? v.firstBaseUpdate = f : u.next = f, v.lastBaseUpdate = s));
  }
  if (i !== null) {
    var p = l.baseState;
    o = 0, v = f = s = null, u = i;
    do {
      var m = u.lane, k = u.eventTime;
      if ((r & m) === m) {
        v !== null && (v = v.next = {
          eventTime: k,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, w = u;
          switch (m = t, k = n, w.tag) {
            case 1:
              if (S = w.payload, typeof S == "function") {
                p = S.call(k, p, m);
                break e;
              }
              p = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = w.payload, m = typeof S == "function" ? S.call(k, p, m) : S, m == null) break e;
              p = H({}, p, m);
              break e;
            case 2:
              nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else k = { eventTime: k, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, v === null ? (f = v = k, s = p) : v = v.next = k, o |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (v === null && (s = p), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = v, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Tt |= o, e.lanes = o, e.memoizedState = p;
  }
}
function Lu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(g(191, l));
      l.call(r);
    }
  }
}
var rr = {}, He = gt(rr), Kn = gt(rr), Xn = gt(rr);
function Nt(e) {
  if (e === rr) throw Error(g(174));
  return e;
}
function So(e, t) {
  switch (D(Xn, t), D(Kn, e), D(He, rr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ai(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ai(t, e);
  }
  U(He), D(He, t);
}
function on() {
  U(He), U(Kn), U(Xn);
}
function pa(e) {
  Nt(Xn.current);
  var t = Nt(He.current), n = ai(t, e.type);
  t !== n && (D(Kn, e), D(He, n));
}
function xo(e) {
  Kn.current === e && (U(He), U(Kn));
}
var $ = gt(0);
function br(e) {
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
function Eo() {
  for (var e = 0; e < Gl.length; e++) Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var Ir = be.ReactCurrentDispatcher, Kl = be.ReactCurrentBatchConfig, It = 0, V = null, X = null, J = null, el = !1, Tn = !1, Yn = 0, od = 0;
function ne() {
  throw Error(g(321));
}
function _o(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Co(e, t, n, r, l, i) {
  if (It = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ir.current = e === null || e.memoizedState === null ? cd : fd, e = n(r, l), Tn) {
    i = 0;
    do {
      if (Tn = !1, Yn = 0, 25 <= i) throw Error(g(301));
      i += 1, J = X = null, t.updateQueue = null, Ir.current = dd, e = n(r, l);
    } while (Tn);
  }
  if (Ir.current = tl, t = X !== null && X.next !== null, It = 0, J = X = V = null, el = !1, t) throw Error(g(300));
  return e;
}
function No() {
  var e = Yn !== 0;
  return Yn = 0, e;
}
function Ae() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? V.memoizedState = J = e : J = J.next = e, J;
}
function Ne() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? V.memoizedState : J.next;
  if (t !== null) J = t, X = e;
  else {
    if (e === null) throw Error(g(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, J === null ? V.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xl(e) {
  var t = Ne(), n = t.queue;
  if (n === null) throw Error(g(311));
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
    var u = o = null, s = null, f = i;
    do {
      var v = f.lane;
      if ((It & v) === v) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var p = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (u = s = p, o = r) : s = s.next = p, V.lanes |= v, Tt |= v;
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? o = r : s.next = u, Fe(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
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
  var t = Ne(), n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Fe(i, t.memoizedState) || (fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ma() {
}
function ha(e, t) {
  var n = V, r = Ne(), l = t(), i = !Fe(r.memoizedState, l);
  if (i && (r.memoizedState = l, fe = !0), r = r.queue, Po(ga.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, Jn(9, ya.bind(null, n, r, l, t), void 0, null), q === null) throw Error(g(349));
    It & 30 || va(n, t, l);
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
function ju(e) {
  var t = Ae();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zn, lastRenderedState: e }, t.queue = e, e = e.dispatch = ad.bind(null, V, e), [t.memoizedState, e];
}
function Jn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Sa() {
  return Ne().memoizedState;
}
function Tr(e, t, n, r) {
  var l = Ae();
  V.flags |= e, l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r);
}
function ml(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (i = o.destroy, r !== null && _o(r, o.deps)) {
      l.memoizedState = Jn(t, n, i, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = Jn(1 | t, n, i, r);
}
function zu(e, t) {
  return Tr(8390656, 8, e, t);
}
function Po(e, t) {
  return ml(2048, 8, e, t);
}
function xa(e, t) {
  return ml(4, 2, e, t);
}
function Ea(e, t) {
  return ml(4, 4, e, t);
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
  return n = n != null ? n.concat([e]) : null, ml(4, 4, _a.bind(null, t, e), n);
}
function Lo() {
}
function Na(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function La(e, t, n) {
  return It & 21 ? (Fe(n, t) || (n = Ms(), V.lanes |= n, Tt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n);
}
function ud(e, t) {
  var n = R;
  R = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Kl.transition;
  Kl.transition = {};
  try {
    e(!1), t();
  } finally {
    R = n, Kl.transition = r;
  }
}
function ja() {
  return Ne().memoizedState;
}
function sd(e, t, n) {
  var r = pt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, za(e)) Ia(t, n);
  else if (n = fa(e, t, n, r), n !== null) {
    var l = ue();
    Oe(n, e, r, l), Ta(n, t, r);
  }
}
function ad(e, t, n) {
  var r = pt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (za(e)) Ia(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Fe(u, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, wo(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = fa(e, t, l, r), n !== null && (l = ue(), Oe(n, e, r, l), Ta(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function Ia(e, t) {
  Tn = el = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ta(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n);
  }
}
var tl = { readContext: Ce, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, cd = { readContext: Ce, useCallback: function(e, t) {
  return Ae().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ce, useEffect: zu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Tr(
    4194308,
    4,
    _a.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Tr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Tr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ae();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ae();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = sd.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ae();
  return e = { current: e }, t.memoizedState = e;
}, useState: ju, useDebugValue: Lo, useDeferredValue: function(e) {
  return Ae().memoizedState = e;
}, useTransition: function() {
  var e = ju(!1), t = e[0];
  return e = ud.bind(null, e[1]), Ae().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = Ae();
  if (A) {
    if (n === void 0) throw Error(g(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(g(349));
    It & 30 || va(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, zu(ga.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Jn(9, ya.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Ae(), t = q.identifierPrefix;
  if (A) {
    var n = Ke, r = Ge;
    n = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = od++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, fd = {
  readContext: Ce,
  useCallback: Na,
  useContext: Ce,
  useEffect: Po,
  useImperativeHandle: Ca,
  useInsertionEffect: xa,
  useLayoutEffect: Ea,
  useMemo: Pa,
  useReducer: Xl,
  useRef: Sa,
  useState: function() {
    return Xl(Zn);
  },
  useDebugValue: Lo,
  useDeferredValue: function(e) {
    var t = Ne();
    return La(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Xl(Zn)[0], t = Ne().memoizedState;
    return [e, t];
  },
  useMutableSource: ma,
  useSyncExternalStore: ha,
  useId: ja,
  unstable_isNewReconciler: !1
}, dd = { readContext: Ce, useCallback: Na, useContext: Ce, useEffect: Po, useImperativeHandle: Ca, useInsertionEffect: xa, useLayoutEffect: Ea, useMemo: Pa, useReducer: Yl, useRef: Sa, useState: function() {
  return Yl(Zn);
}, useDebugValue: Lo, useDeferredValue: function(e) {
  var t = Ne();
  return X === null ? t.memoizedState = e : La(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Yl(Zn)[0], t = Ne().memoizedState;
  return [e, t];
}, useMutableSource: ma, useSyncExternalStore: ha, useId: ja, unstable_isNewReconciler: !1 };
function Ie(e, t) {
  if (e && e.defaultProps) {
    t = H({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ot(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = pt(e), i = Xe(r, l);
  i.payload = t, n != null && (i.callback = n), t = ft(e, i, l), t !== null && (Oe(t, e, l, r), zr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = pt(e), i = Xe(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ft(e, i, l), t !== null && (Oe(t, e, l, r), zr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ue(), r = pt(e), l = Xe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ft(e, l, r), t !== null && (Oe(t, e, r, n), zr(t, e, r));
} };
function Iu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Bn(n, r) || !Bn(l, i) : !0;
}
function Ma(e, t, n) {
  var r = !1, l = vt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ce(i) : (l = pe(t) ? jt : ie.current, r = t.contextTypes, i = (r = r != null) ? nn(e, l) : vt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Tu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Ii(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ko(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ce(i) : (i = pe(t) ? jt : ie.current, l.context = nn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (zi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && hl.enqueueReplaceState(l, l.state, null), qr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function un(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ac(r), r = r.return;
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
var pd = typeof WeakMap == "function" ? WeakMap : Map;
function Ra(e, t, n) {
  n = Xe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    rl || (rl = !0, Hi = r), Ti(e, t);
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
    Ti(e, t), typeof r != "function" && (dt === null ? dt = /* @__PURE__ */ new Set([this]) : dt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Pd.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xe(-1, 1), t.tag = 2, ft(n, t, 1))), n.lanes |= 1), e);
}
var md = be.ReactCurrentOwner, fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? ca(t, null, n, r) : ln(t, e.child, n, r);
}
function Du(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return bt(t, l), r = Co(e, t, n, r, i, l), n = No(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (A && n && po(t), t.flags |= 1, oe(e, t, r, l), t.child);
}
function Fu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Do(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Da(e, t, i, r, l)) : (e = Dr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
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
    if (Bn(i, r) && e.ref === t.ref) if (fe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
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
  var i = pe(n) ? jt : ie.current;
  return i = nn(t, i), bt(t, l), n = Co(e, t, n, r, i, l), r = No(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (A && r && po(t), t.flags |= 1, oe(e, t, n, l), t.child);
}
function Uu(e, t, n, r, l) {
  if (pe(n)) {
    var i = !0;
    Kr(t);
  } else i = !1;
  if (bt(t, l), t.stateNode === null) Mr(e, t), Ma(t, n, r), Ii(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Ce(f) : (f = pe(n) ? jt : ie.current, f = nn(t, f));
    var v = n.getDerivedStateFromProps, p = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== f) && Tu(t, o, r, f), nt = !1;
    var m = t.memoizedState;
    o.state = m, qr(t, r, o, l), s = t.memoizedState, u !== r || m !== s || de.current || nt ? (typeof v == "function" && (zi(t, n, v, r), s = t.memoizedState), (u = nt || Iu(t, n, u, r, m, s, f)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = f, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, da(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : Ie(t.type, u), o.props = f, p = t.pendingProps, m = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ce(s) : (s = pe(n) ? jt : ie.current, s = nn(t, s));
    var k = n.getDerivedStateFromProps;
    (v = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== p || m !== s) && Tu(t, o, r, s), nt = !1, m = t.memoizedState, o.state = m, qr(t, r, o, l);
    var S = t.memoizedState;
    u !== p || m !== S || de.current || nt ? (typeof k == "function" && (zi(t, n, k, r), S = t.memoizedState), (f = nt || Iu(t, n, f, r, m, S, s) || !1) ? (v || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, S, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), o.props = r, o.state = S, o.context = s, r = f) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ri(e, t, n, r, i, l);
}
function Ri(e, t, n, r, l, i) {
  Ua(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Eu(t, n, !1), qe(e, t, i);
  r = t.stateNode, md.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ln(t, e.child, null, i), t.child = ln(t, null, u, i)) : oe(e, t, u, i), t.memoizedState = r.state, l && Eu(t, n, !0), t.child;
}
function Aa(e) {
  var t = e.stateNode;
  t.pendingContext ? xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xu(e, t.context, !1), So(e, t.containerInfo);
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
    return Li(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = gl(o, r, 0, null), e = Lt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Di(n), t.memoizedState = Oi, e) : jo(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return hd(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = mt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = mt(u, i) : (i = Lt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Di(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Oi, r;
  }
  return i = e.child, e = i.sibling, r = mt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function jo(e, t) {
  return t = gl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function kr(e, t, n, r) {
  return r !== null && ho(r), ln(t, e.child, null, n), e = jo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function hd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Zl(Error(g(422))), kr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = gl({ mode: "visible", children: r.children }, l, 0, null), i = Lt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ln(t, e.child, null, o), t.child.memoizedState = Di(o), t.memoizedState = Oi, i);
  if (!(t.mode & 1)) return kr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(g(419)), r = Zl(i, r, void 0), kr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, fe || u) {
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
    return Oo(), r = Zl(Error(g(421))), kr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ld.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ve = ct(l.nextSibling), ye = t, A = !0, Me = null, e !== null && (Se[xe++] = Ge, Se[xe++] = Ke, Se[xe++] = zt, Ge = e.id, Ke = e.overflow, zt = t), t = jo(t, r.children), t.flags |= 4096, t);
}
function $u(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ji(e.return, t, n);
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
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && br(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Jl(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && br(e) === null) {
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
function Mr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function qe(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Tt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function vd(e, t, n) {
  switch (t.tag) {
    case 3:
      Aa(t), rn();
      break;
    case 5:
      pa(t);
      break;
    case 1:
      pe(t.type) && Kr(t);
      break;
    case 4:
      So(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      D(Zr, r._currentValue), r._currentValue = l;
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
var Ha, Fi, Ba, Wa;
Ha = function(e, t) {
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
Ba = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Nt(He.current);
    var i = null;
    switch (n) {
      case "input":
        l = ii(e, l), r = ii(e, r), i = [];
        break;
      case "select":
        l = H({}, l, { value: void 0 }), r = H({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = si(e, l), r = si(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr);
    }
    ci(n, r);
    var o;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var u = l[f];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Dn.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Dn.hasOwnProperty(f) ? (s != null && f === "onScroll" && F("scroll", e), i || u === s || (i = [])) : (i = i || []).push(f, s));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Wa = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sn(e, t) {
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
function yd(e, t, n) {
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
      return pe(t.type) && Gr(), re(t), null;
    case 3:
      return r = t.stateNode, on(), U(de), U(ie), Eo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (gr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (Qi(Me), Me = null))), Fi(e, t), re(t), null;
    case 5:
      xo(t);
      var l = Nt(Xn.current);
      if (n = t.type, e !== null && t.stateNode != null) Ba(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return re(t), null;
        }
        if (e = Nt(He.current), gr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[$e] = t, r[Gn] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Nn.length; l++) F(Nn[l], r);
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
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && yr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && yr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Dn.hasOwnProperty(o) && u != null && o === "onScroll" && F("scroll", r);
          }
          switch (n) {
            case "input":
              ar(r), Zo(r, i, !0);
              break;
            case "textarea":
              ar(r), qo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Qr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[$e] = t, e[Gn] = r, Ha(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = fi(n, r), n) {
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
                for (l = 0; l < Nn.length; l++) F(Nn[l], e);
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
                e._wrapperState = { wasMultiple: !!r.multiple }, l = H({}, r, { value: void 0 }), F("invalid", e);
                break;
              case "textarea":
                Jo(e, r), l = si(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            ci(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Ss(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ws(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Fn(e, s) : typeof s == "number" && Fn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Dn.hasOwnProperty(i) ? s != null && i === "onScroll" && F("scroll", e) : s != null && qi(e, i, s, o));
            }
            switch (n) {
              case "input":
                ar(e), Zo(e, r, !1);
                break;
              case "textarea":
                ar(e), qo(e);
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
                typeof l.onClick == "function" && (e.onclick = Qr);
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
      if (e && t.stateNode != null) Wa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (n = Nt(Xn.current), Nt(He.current), gr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[$e] = t, (i = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
            case 3:
              yr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && yr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$e] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (U($), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (A && ve !== null && t.mode & 1 && !(t.flags & 128)) sa(), rn(), t.flags |= 98560, i = !1;
        else if (i = gr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(g(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(g(317));
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
      return pe(t.type) && Gr(), re(t), null;
    case 19:
      if (U($), i = t.memoizedState, i === null) return re(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) Sn(i, !1);
      else {
        if (Y !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = br(e), o !== null) {
            for (t.flags |= 128, Sn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return D($, $.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && G() > sn && (t.flags |= 128, r = !0, Sn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = br(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Sn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !A) return re(t), null;
        } else 2 * G() - i.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128, r = !0, Sn(i, !1), t.lanes = 4194304);
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
  throw Error(g(156, t.tag));
}
function gd(e, t) {
  switch (mo(t), t.tag) {
    case 1:
      return pe(t.type) && Gr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return on(), U(de), U(ie), Eo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return xo(t), null;
    case 13:
      if (U($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(g(340));
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
var Sr = !1, le = !1, wd = typeof WeakSet == "function" ? WeakSet : Set, x = null;
function Kt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    B(e, t, r);
  }
  else n.current = null;
}
function Ui(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var Vu = !1;
function kd(e, t) {
  if (Si = Hr, e = Ys(), fo(e)) {
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
        var o = 0, u = -1, s = -1, f = 0, v = 0, p = e, m = null;
        t: for (; ; ) {
          for (var k; p !== n || l !== 0 && p.nodeType !== 3 || (u = o + l), p !== i || r !== 0 && p.nodeType !== 3 || (s = o + r), p.nodeType === 3 && (o += p.nodeValue.length), (k = p.firstChild) !== null; )
            m = p, p = k;
          for (; ; ) {
            if (p === e) break t;
            if (m === n && ++f === l && (u = o), m === i && ++v === r && (s = o), (k = p.nextSibling) !== null) break;
            p = m, m = p.parentNode;
          }
          p = k;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xi = { focusedElem: e, selectionRange: n }, Hr = !1, x = t; x !== null; ) if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, x = e;
  else for (; x !== null; ) {
    t = x;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var w = S.memoizedProps, M = S.memoizedState, c = t.stateNode, a = c.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ie(t.type, w), M);
            c.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(g(163));
      }
    } catch (y) {
      B(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, x = e;
      break;
    }
    x = t.return;
  }
  return S = Vu, Vu = !1, S;
}
function Mn(e, t, n) {
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
function vl(e, t) {
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
  t !== null && (e.alternate = null, Qa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$e], delete t[Gn], delete t[Ci], delete t[nd], delete t[rd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ga(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hu(e) {
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Qr));
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
    Ve.onCommitFiberUnmount(sl, n);
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
      b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? Wl(e.parentNode, n) : e.nodeType === 1 && Wl(e, n), Vn(e)) : Wl(b, n.stateNode));
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
        B(n, t, u);
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
function Bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wd()), t.forEach(function(r) {
      var l = jd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function je(e, t) {
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
      if (b === null) throw Error(g(160));
      Ka(i, o, l), b = null, Te = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (f) {
      B(l, t, f);
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
      if (je(t, e), Ue(e), r & 4) {
        try {
          Mn(3, e, e.return), vl(3, e);
        } catch (w) {
          B(e, e.return, w);
        }
        try {
          Mn(5, e, e.return);
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 1:
      je(t, e), Ue(e), r & 512 && n !== null && Kt(n, n.return);
      break;
    case 5:
      if (je(t, e), Ue(e), r & 512 && n !== null && Kt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Fn(l, "");
        } catch (w) {
          B(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && vs(l, i), fi(u, o);
          var f = fi(u, i);
          for (o = 0; o < s.length; o += 2) {
            var v = s[o], p = s[o + 1];
            v === "style" ? Ss(l, p) : v === "dangerouslySetInnerHTML" ? ws(l, p) : v === "children" ? Fn(l, p) : qi(l, v, p, f);
          }
          switch (u) {
            case "input":
              oi(l, i);
              break;
            case "textarea":
              ys(l, i);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var k = i.value;
              k != null ? Yt(l, !!i.multiple, k, !1) : m !== !!i.multiple && (i.defaultValue != null ? Yt(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Yt(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Gn] = i;
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 6:
      if (je(t, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(g(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 3:
      if (je(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Vn(t.containerInfo);
      } catch (w) {
        B(e, e.return, w);
      }
      break;
    case 4:
      je(t, e), Ue(e);
      break;
    case 13:
      je(t, e), Ue(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (To = G())), r & 4 && Bu(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (f = le) || v, je(t, e), le = f) : je(t, e), Ue(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !v && e.mode & 1) for (x = e, v = e.child; v !== null; ) {
          for (p = x = v; x !== null; ) {
            switch (m = x, k = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Mn(4, m, m.return);
                break;
              case 1:
                Kt(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (w) {
                    B(r, n, w);
                  }
                }
                break;
              case 5:
                Kt(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Qu(p);
                  continue;
                }
            }
            k !== null ? (k.return = m, x = k) : Qu(p);
          }
          v = v.sibling;
        }
        e: for (v = null, p = e; ; ) {
          if (p.tag === 5) {
            if (v === null) {
              v = p;
              try {
                l = p.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = p.stateNode, s = p.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ks("display", o));
              } catch (w) {
                B(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (v === null) try {
              p.stateNode.nodeValue = f ? "" : p.memoizedProps;
            } catch (w) {
              B(e, e.return, w);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            v === p && (v = null), p = p.return;
          }
          v === p && (v = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      je(t, e), Ue(e), r & 4 && Bu(e);
      break;
    case 21:
      break;
    default:
      je(
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
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Fn(l, ""), r.flags &= -33);
          var i = Hu(e);
          Vi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = Hu(e);
          $i(e, u, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sd(e, t, n) {
  x = e, Ya(e);
}
function Ya(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Sr;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || le;
        u = Sr;
        var f = le;
        if (Sr = o, (le = s) && !f) for (x = l; x !== null; ) o = x, s = o.child, o.tag === 22 && o.memoizedState !== null ? Gu(l) : s !== null ? (s.return = o, x = s) : Gu(l);
        for (; i !== null; ) x = i, Ya(i), i = i.sibling;
        x = l, Sr = u, le = f;
      }
      Wu(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, x = i) : Wu(e);
  }
}
function Wu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            le || vl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !le) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ie(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Lu(t, i, r);
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
              Lu(t, o, n);
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
                var v = f.memoizedState;
                if (v !== null) {
                  var p = v.dehydrated;
                  p !== null && Vn(p);
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
            throw Error(g(163));
        }
        le || t.flags & 512 && Ai(t);
      } catch (m) {
        B(t, t.return, m);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function Qu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function Gu(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ai(t);
          } catch (s) {
            B(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ai(t);
          } catch (s) {
            B(t, o, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      x = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, x = u;
      break;
    }
    x = t.return;
  }
}
var xd = Math.ceil, nl = be.ReactCurrentDispatcher, zo = be.ReactCurrentOwner, _e = be.ReactCurrentBatchConfig, T = 0, q = null, K = null, ee = 0, he = 0, Xt = gt(0), Y = 0, qn = null, Tt = 0, yl = 0, Io = 0, Rn = null, ce = null, To = 0, sn = 1 / 0, We = null, rl = !1, Hi = null, dt = null, xr = !1, ot = null, ll = 0, On = 0, Bi = null, Rr = -1, Or = 0;
function ue() {
  return T & 6 ? G() : Rr !== -1 ? Rr : Rr = G();
}
function pt(e) {
  return e.mode & 1 ? T & 2 && ee !== 0 ? ee & -ee : id.transition !== null ? (Or === 0 && (Or = Ms()), Or) : (e = R, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $s(e.type)), e) : 1;
}
function Oe(e, t, n, r) {
  if (50 < On) throw On = 0, Bi = null, Error(g(185));
  er(e, n, r), (!(T & 2) || e !== q) && (e === q && (!(T & 2) && (yl |= n), Y === 4 && lt(e, ee)), me(e, r), n === 1 && T === 0 && !(t.mode & 1) && (sn = G() + 500, pl && wt()));
}
function me(e, t) {
  var n = e.callbackNode;
  lf(e, t);
  var r = Vr(e, e === q ? ee : 0);
  if (r === 0) n !== null && tu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && tu(n), t === 1) e.tag === 0 ? ld(Ku.bind(null, e)) : ia(Ku.bind(null, e)), ed(function() {
      !(T & 6) && wt();
    }), n = null;
    else {
      switch (Rs(r)) {
        case 1:
          n = ro;
          break;
        case 4:
          n = Is;
          break;
        case 16:
          n = $r;
          break;
        case 536870912:
          n = Ts;
          break;
        default:
          n = $r;
      }
      n = rc(n, Za.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Za(e, t) {
  if (Rr = -1, Or = 0, T & 6) throw Error(g(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Vr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = T;
    T |= 2;
    var i = qa();
    (q !== e || ee !== t) && (We = null, sn = G() + 500, Pt(e, t));
    do
      try {
        Cd();
        break;
      } catch (u) {
        Ja(e, u);
      }
    while (!0);
    yo(), nl.current = i, T = l, K !== null ? t = 0 : (q = null, ee = 0, t = Y);
  }
  if (t !== 0) {
    if (t === 2 && (l = vi(e), l !== 0 && (r = l, t = Wi(e, l))), t === 1) throw n = qn, Pt(e, 0), lt(e, r), me(e, G()), n;
    if (t === 6) lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Ed(l) && (t = il(e, r), t === 2 && (i = vi(e), i !== 0 && (r = i, t = Wi(e, i))), t === 1)) throw n = qn, Pt(e, 0), lt(e, r), me(e, G()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          Et(e, ce, We);
          break;
        case 3:
          if (lt(e, r), (r & 130023424) === r && (t = To + 500 - G(), 10 < t)) {
            if (Vr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = _i(Et.bind(null, e, ce, We), t);
            break;
          }
          Et(e, ce, We);
          break;
        case 4:
          if (lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Re(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _i(Et.bind(null, e, ce, We), r);
            break;
          }
          Et(e, ce, We);
          break;
        case 5:
          Et(e, ce, We);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return me(e, G()), e.callbackNode === n ? Za.bind(null, e) : null;
}
function Wi(e, t) {
  var n = Rn;
  return e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = ce, ce = n, t !== null && Qi(t)), e;
}
function Qi(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
}
function Ed(e) {
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
  for (t &= ~Io, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Re(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ku(e) {
  if (T & 6) throw Error(g(327));
  en();
  var t = Vr(e, 0);
  if (!(t & 1)) return me(e, G()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vi(e);
    r !== 0 && (t = r, n = Wi(e, r));
  }
  if (n === 1) throw n = qn, Pt(e, 0), lt(e, t), me(e, G()), n;
  if (n === 6) throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Et(e, ce, We), me(e, G()), null;
}
function Mo(e, t) {
  var n = T;
  T |= 1;
  try {
    return e(t);
  } finally {
    T = n, T === 0 && (sn = G() + 500, pl && wt());
  }
}
function Mt(e) {
  ot !== null && ot.tag === 0 && !(T & 6) && en();
  var t = T;
  T |= 1;
  var n = _e.transition, r = R;
  try {
    if (_e.transition = null, R = 1, e) return e();
  } finally {
    R = r, _e.transition = n, T = t, !(T & 6) && wt();
  }
}
function Ro() {
  he = Xt.current, U(Xt);
}
function Pt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, bf(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (mo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Gr();
        break;
      case 3:
        on(), U(de), U(ie), Eo();
        break;
      case 5:
        xo(r);
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
  if (q = e, K = e = mt(e.current, null), ee = he = t, Y = 0, qn = null, Io = yl = Tt = 0, ce = Rn = null, Ct !== null) {
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
      if (yo(), Ir.current = tl, el) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        el = !1;
      }
      if (It = 0, J = X = V = null, Tn = !1, Yn = 0, zo.current = null, n === null || n.return === null) {
        Y = 1, qn = t, K = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, s = t;
        if (t = ee, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, v = u, p = v.tag;
          if (!(v.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = v.alternate;
            m ? (v.updateQueue = m.updateQueue, v.memoizedState = m.memoizedState, v.lanes = m.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var k = Ru(o);
          if (k !== null) {
            k.flags &= -257, Ou(k, o, u, i, t), k.mode & 1 && Mu(i, f, t), t = k, s = f;
            var S = t.updateQueue;
            if (S === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), t.updateQueue = w;
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Mu(i, f, t), Oo();
              break e;
            }
            s = Error(g(426));
          }
        } else if (A && u.mode & 1) {
          var M = Ru(o);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256), Ou(M, o, u, i, t), ho(un(s, u));
            break e;
          }
        }
        i = s = un(s, u), Y !== 4 && (Y = 2), Rn === null ? Rn = [i] : Rn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var c = Ra(i, s, t);
              Pu(i, c);
              break e;
            case 1:
              u = s;
              var a = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (dt === null || !dt.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = Oa(i, u, t);
                Pu(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ec(n);
    } catch (E) {
      t = E, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qa() {
  var e = nl.current;
  return nl.current = tl, e === null ? tl : e;
}
function Oo() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), q === null || !(Tt & 268435455) && !(yl & 268435455) || lt(q, ee);
}
function il(e, t) {
  var n = T;
  T |= 2;
  var r = qa();
  (q !== e || ee !== t) && (We = null, Pt(e, t));
  do
    try {
      _d();
      break;
    } catch (l) {
      Ja(e, l);
    }
  while (!0);
  if (yo(), T = n, nl.current = r, K !== null) throw Error(g(261));
  return q = null, ee = 0, Y;
}
function _d() {
  for (; K !== null; ) ba(K);
}
function Cd() {
  for (; K !== null && !Yc(); ) ba(K);
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
      if (n = gd(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Y = 6, K = null;
        return;
      }
    } else if (n = yd(n, t, he), n !== null) {
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
function Et(e, t, n) {
  var r = R, l = _e.transition;
  try {
    _e.transition = null, R = 1, Nd(e, t, n, r);
  } finally {
    _e.transition = l, R = r;
  }
  return null;
}
function Nd(e, t, n, r) {
  do
    en();
  while (ot !== null);
  if (T & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(g(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (of(e, i), e === q && (K = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || xr || (xr = !0, rc($r, function() {
    return en(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = _e.transition, _e.transition = null;
    var o = R;
    R = 1;
    var u = T;
    T |= 4, zo.current = null, kd(e, n), Xa(n, e), Gf(xi), Hr = !!Si, xi = Si = null, e.current = n, Sd(n), Zc(), T = u, R = o, _e.transition = i;
  } else e.current = n;
  if (xr && (xr = !1, ot = e, ll = l), i = e.pendingLanes, i === 0 && (dt = null), bc(n.stateNode), me(e, G()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (rl) throw rl = !1, e = Hi, Hi = null, e;
  return ll & 1 && e.tag !== 0 && en(), i = e.pendingLanes, i & 1 ? e === Bi ? On++ : (On = 0, Bi = e) : On = 0, wt(), null;
}
function en() {
  if (ot !== null) {
    var e = Rs(ll), t = _e.transition, n = R;
    try {
      if (_e.transition = null, R = 16 > e ? 16 : e, ot === null) var r = !1;
      else {
        if (e = ot, ot = null, ll = 0, T & 6) throw Error(g(331));
        var l = T;
        for (T |= 4, x = e.current; x !== null; ) {
          var i = x, o = i.child;
          if (x.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (x = f; x !== null; ) {
                  var v = x;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, v, i);
                  }
                  var p = v.child;
                  if (p !== null) p.return = v, x = p;
                  else for (; x !== null; ) {
                    v = x;
                    var m = v.sibling, k = v.return;
                    if (Qa(v), v === f) {
                      x = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = k, x = m;
                      break;
                    }
                    x = k;
                  }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var M = w.sibling;
                    w.sibling = null, w = M;
                  } while (w !== null);
                }
              }
              x = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, x = o;
          else e: for (; x !== null; ) {
            if (i = x, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Mn(9, i, i.return);
            }
            var c = i.sibling;
            if (c !== null) {
              c.return = i.return, x = c;
              break e;
            }
            x = i.return;
          }
        }
        var a = e.current;
        for (x = a; x !== null; ) {
          o = x;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, x = d;
          else e: for (o = a; x !== null; ) {
            if (u = x, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  vl(9, u);
              }
            } catch (E) {
              B(u, u.return, E);
            }
            if (u === o) {
              x = null;
              break e;
            }
            var y = u.sibling;
            if (y !== null) {
              y.return = u.return, x = y;
              break e;
            }
            x = u.return;
          }
        }
        if (T = l, wt(), Ve && typeof Ve.onPostCommitFiberRoot == "function") try {
          Ve.onPostCommitFiberRoot(sl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      R = n, _e.transition = t;
    }
  }
  return !1;
}
function Xu(e, t, n) {
  t = un(n, t), t = Ra(e, t, 1), e = ft(e, t, 1), t = ue(), e !== null && (er(e, 1, t), me(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Xu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Xu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dt === null || !dt.has(r))) {
        e = un(n, e), e = Oa(t, e, 1), t = ft(t, e, 1), e = ue(), t !== null && (er(t, 1, e), me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Pd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (Y === 4 || Y === 3 && (ee & 130023424) === ee && 500 > G() - To ? Pt(e, 0) : Io |= n), me(e, t);
}
function tc(e, t) {
  t === 0 && (e.mode & 1 ? (t = dr, dr <<= 1, !(dr & 130023424) && (dr = 4194304)) : t = 1);
  var n = ue();
  e = Je(e, t), e !== null && (er(e, t, n), me(e, n));
}
function Ld(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), tc(e, n);
}
function jd(e, t) {
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
      throw Error(g(314));
  }
  r !== null && r.delete(t), tc(e, n);
}
var nc;
nc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, vd(e, t, n);
    fe = !!(e.flags & 131072);
  }
  else fe = !1, A && t.flags & 1048576 && oa(t, Yr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Mr(e, t), e = t.pendingProps;
      var l = nn(t, ie.current);
      bt(t, n), l = Co(null, t, r, e, l, n);
      var i = No();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (i = !0, Kr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ko(t), l.updater = hl, t.stateNode = l, l._reactInternals = t, Ii(t, r, e, n), t = Ri(null, t, r, !0, i, n)) : (t.tag = 0, A && i && po(t), oe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Mr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Id(r), e = Ie(r, e), l) {
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
            t = Fu(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(g(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Mi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Uu(e, t, r, l, n);
    case 3:
      e: {
        if (Aa(t), e === null) throw Error(g(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, da(e, t), qr(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = un(Error(g(423)), t), t = Au(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = un(Error(g(424)), t), t = Au(e, t, r, n, l);
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
      return pa(t), e === null && Li(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Ei(r, l) ? o = null : i !== null && Ei(r, i) && (t.flags |= 32), Ua(e, t), oe(e, t, o, n), t.child;
    case 6:
      return e === null && Li(t), null;
    case 13:
      return $a(e, t, n);
    case 4:
      return So(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Du(e, t, r, l, n);
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, D(Zr, r._currentValue), r._currentValue = o, i !== null) if (Fe(i.value, o)) {
          if (i.children === l.children && !de.current) {
            t = qe(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = Xe(-1, n & -n), s.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var v = f.pending;
                    v === null ? s.next = s : (s.next = v.next, v.next = s), f.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), ji(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(g(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), ji(o, n, t), o = i.sibling;
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
      return l = t.type, r = t.pendingProps.children, bt(t, n), l = Ce(l), r = r(l), t.flags |= 1, oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ie(r, t.pendingProps), l = Ie(r.type, l), Fu(e, t, r, l, n);
    case 15:
      return Da(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Mr(e, t), t.tag = 1, pe(r) ? (e = !0, Kr(t)) : e = !1, bt(t, n), Ma(t, r, l), Ii(t, r, l, n), Ri(null, t, r, !0, e, n);
    case 19:
      return Va(e, t, n);
    case 22:
      return Fa(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function rc(e, t) {
  return zs(e, t);
}
function zd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, t, n, r) {
  return new zd(e, t, n, r);
}
function Do(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Id(e) {
  if (typeof e == "function") return Do(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === eo) return 11;
    if (e === to) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ee(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Dr(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Do(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Ut:
      return Lt(n.children, l, i, t);
    case bi:
      o = 8, l |= 8;
      break;
    case ti:
      return e = Ee(12, n, t, l | 2), e.elementType = ti, e.lanes = i, e;
    case ni:
      return e = Ee(13, n, t, l), e.elementType = ni, e.lanes = i, e;
    case ri:
      return e = Ee(19, n, t, l), e.elementType = ri, e.lanes = i, e;
    case ps:
      return gl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case fs:
          o = 10;
          break e;
        case ds:
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
      throw Error(g(130, e == null ? e : typeof e, ""));
  }
  return t = Ee(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Lt(e, t, n, r) {
  return e = Ee(7, e, r, t), e.lanes = n, e;
}
function gl(e, t, n, r) {
  return e = Ee(22, e, r, t), e.elementType = ps, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ql(e, t, n) {
  return e = Ee(6, e, null, t), e.lanes = n, e;
}
function bl(e, t, n) {
  return t = Ee(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Td(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ml(0), this.expirationTimes = Ml(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ml(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Fo(e, t, n, r, l, i, o, u, s) {
  return e = new Td(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ee(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ko(i), e;
}
function Md(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ft, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function lc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (Ot(e) !== e || e.tag !== 1) throw Error(g(170));
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
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return la(e, n, t);
  }
  return t;
}
function ic(e, t, n, r, l, i, o, u, s) {
  return e = Fo(n, r, !0, e, l, i, o, u, s), e.context = lc(null), n = e.current, r = ue(), l = pt(n), i = Xe(r, l), i.callback = t ?? null, ft(n, i, l), e.current.lanes = l, er(e, l, r), me(e, r), e;
}
function wl(e, t, n, r) {
  var l = t.current, i = ue(), o = pt(l);
  return n = lc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Xe(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ft(l, t, o), e !== null && (Oe(e, l, o, i), zr(e, l, o)), o;
}
function ol(e) {
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
function Rd() {
  return null;
}
var oc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ao(e) {
  this._internalRoot = e;
}
kl.prototype.render = Ao.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  wl(e, t, null, null);
};
kl.prototype.unmount = Ao.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function() {
      wl(null, e, null, null);
    }), t[Ze] = null;
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function(e) {
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
function Sl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Zu() {
}
function Od(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = ol(o);
        i.call(f);
      };
    }
    var o = ic(t, r, e, 0, null, !1, !1, "", Zu);
    return e._reactRootContainer = o, e[Ze] = o.current, Wn(e.nodeType === 8 ? e.parentNode : e), Mt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = ol(s);
      u.call(f);
    };
  }
  var s = Fo(e, 0, !1, null, null, !1, !1, "", Zu);
  return e._reactRootContainer = s, e[Ze] = s.current, Wn(e.nodeType === 8 ? e.parentNode : e), Mt(function() {
    wl(t, s, n, r);
  }), s;
}
function xl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = ol(o);
        u.call(s);
      };
    }
    wl(t, o, e, l);
  } else o = Od(n, t, e, l, r);
  return ol(o);
}
Os = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cn(t.pendingLanes);
        n !== 0 && (lo(t, n | 1), me(t, G()), !(T & 6) && (sn = G() + 500, wt()));
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
  return R;
};
Us = function(e, t) {
  var n = R;
  try {
    return R = e, t();
  } finally {
    R = n;
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
            if (!l) throw Error(g(90));
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
var Dd = { usingClientEntryPoint: !1, Events: [nr, Ht, dl, xs, Es, Mo] }, xn = { findFiberByHostInstance: _t, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Fd = { bundleType: xn.bundleType, version: xn.version, rendererPackageName: xn.rendererPackageName, rendererConfig: xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ls(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xn.findFiberByHostInstance || Rd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Er.isDisabled && Er.supportsFiber) try {
    sl = Er.inject(Fd), Ve = Er;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dd;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$o(t)) throw Error(g(200));
  return Md(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!$o(e)) throw Error(g(299));
  var n = !1, r = "", l = oc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Fo(e, 1, !1, null, null, n, !1, r, l), e[Ze] = t.current, Wn(e.nodeType === 8 ? e.parentNode : e), new Ao(t);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = Ls(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Mt(e);
};
we.hydrate = function(e, t, n) {
  if (!Sl(t)) throw Error(g(200));
  return xl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!$o(e)) throw Error(g(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = oc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ic(t, null, e, 1, n ?? null, l, !1, i, o), e[Ze] = t.current, Wn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new kl(t);
};
we.render = function(e, t, n) {
  if (!Sl(t)) throw Error(g(200));
  return xl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!Sl(e)) throw Error(g(40));
  return e._reactRootContainer ? (Mt(function() {
    xl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ze] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Mo;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Sl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return xl(e, t, n, !1, r);
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
var Ud = us.exports, sc, Ju = Ud;
sc = Ju.createRoot, Ju.hydrateRoot;
window.api = De;
const Ad = async () => {
  const e = await De.fetchApi("/meld-nexus/list");
  if (!e.ok)
    throw new Error(`Failed to fetch images: ${e.statusText}`);
  return await e.json();
}, $d = async () => {
  const e = await De.fetchApi("/meld-nexus/settings");
  return e.ok ? await e.json() : { dev_mode: !1 };
}, Vd = async (e, t) => {
  if (!(await De.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Hd = async (e, t = 12) => {
  const n = await De.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, Bd = async (e) => {
  const t = await De.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, Wd = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await De.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Qd = async (e, t = !0) => {
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
  if (!(await De.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  })).ok)
    throw new Error("Failed to register image");
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
var Gd = O, Kd = Symbol.for("react.element"), Xd = Symbol.for("react.fragment"), Yd = Object.prototype.hasOwnProperty, Zd = Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Jd = { key: !0, ref: !0, __self: !0, __source: !0 };
function fc(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Yd.call(t, r) && !Jd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Kd, type: e, key: i, ref: o, props: l, _owner: Zd.current };
}
El.Fragment = Xd;
El.jsx = fc;
El.jsxs = fc;
cc.exports = El;
var h = cc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qd = {
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
const bd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Pe = (e, t) => {
  const n = O.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: u = "",
      children: s,
      ...f
    }, v) => O.createElement(
      "svg",
      {
        ref: v,
        ...qd,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${bd(e)}`, u].join(" "),
        ...f
      },
      [
        ...t.map(([p, m]) => O.createElement(p, m)),
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
const ep = Pe("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = Pe("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = Pe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = Pe("GitBranch", [
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
const np = Pe("Maximize", [
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
const rp = Pe("Minimize", [
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
const lp = Pe("PlusCircle", [
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
const ip = Pe("RefreshCw", [
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
const op = Pe("Trash2", [
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
const up = Pe("Upload", [
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
const sp = Pe("XSquare", [
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
const lr = Pe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let ul = !1;
const ap = (e) => {
  ul = e, ul && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, cp = (...e) => {
  ul && console.log("[Meld-Flow]", ...e);
}, fp = (...e) => {
  ul && console.warn("[Meld-Flow]", ...e);
}, dp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, Be = {
  log: cp,
  warn: fp,
  error: dp,
  init: ap
}, pp = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  lastUpdated: Date.now(),
  viewMode: "list",
  viewerImageId: null,
  activeModal: { type: "none" }
};
function mp(e, t) {
  switch (t.type) {
    case "SET_IMAGES": {
      let n = e.viewerImageId;
      return n !== null && !t.payload.some((r) => r.id === n) && (n = null), {
        ...e,
        images: t.payload,
        isLoading: !1,
        error: null,
        viewerImageId: n
      };
    }
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
      return n.has(t.payload) ? n.delete(t.payload) : n.add(t.payload), {
        ...e,
        selectedIds: n
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(
          e.images.map((n) => n.id)
        )
      };
    case "CLEAR_SELECTION":
      return {
        ...e,
        selectedIds: /* @__PURE__ */ new Set()
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
    case "OPEN_VIEWER":
      return {
        ...e,
        viewerImageId: t.payload
      };
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null
      };
    case "NEXT_IMAGE": {
      if (e.viewerImageId === null || e.images.length === 0)
        return e;
      const r = (e.images.findIndex(
        (l) => l.id === e.viewerImageId
      ) + 1) % e.images.length;
      return {
        ...e,
        viewerImageId: e.images[r].id
      };
    }
    case "PREVIOUS_IMAGE": {
      if (e.viewerImageId === null || e.images.length === 0)
        return e;
      const r = (e.images.findIndex(
        (l) => l.id === e.viewerImageId
      ) - 1 + e.images.length) % e.images.length;
      return {
        ...e,
        viewerImageId: e.images[r].id
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
const mc = O.createContext(void 0), hp = ({
  children: e
}) => {
  const [t, n] = O.useReducer(mp, pp), r = O.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const i = await Ad();
      n({ type: "SET_IMAGES", payload: i });
    } catch (i) {
      n({
        type: "SET_ERROR",
        payload: i instanceof Error ? i.message : String(i)
      });
    }
  }, []), l = O.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const i = Array.from(t.selectedIds), o = `Are you sure you want to delete the selected ${i.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(o)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await Qd(i, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (u) {
        n({
          type: "SET_ERROR",
          payload: u instanceof Error ? u.message : String(u)
        });
      }
    }
  }, [t.selectedIds, r]);
  return O.useEffect(() => {
    const i = () => {
      r();
    };
    return window.addEventListener("meld-nexus-refresh", i), () => {
      window.removeEventListener("meld-nexus-refresh", i);
    };
  }, [r]), O.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ h.jsx(
    mc.Provider,
    {
      value: { state: t, dispatch: n, refreshImages: r, deleteSelected: l },
      children: e
    }
  );
}, dn = () => {
  const e = O.useContext(mc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, vp = () => {
  const { state: e, dispatch: t, deleteSelected: n } = dn(), r = e.selectedIds.size;
  return r === 0 ? null : /* @__PURE__ */ h.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ h.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ h.jsx(
            op,
            {
              size: 16,
              style: { marginRight: "8px", verticalAlign: "middle" }
            }
          ),
          "Delete"
        ]
      }
    ),
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
        onClick: () => t({ type: "CLEAR_SELECTION" }),
        children: [
          /* @__PURE__ */ h.jsx(lr, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, yp = ({
  imageId: e
}) => {
  const { dispatch: t } = dn(), [n, r] = O.useState([]), [l, i] = O.useState(!0), o = O.useCallback(async () => {
    i(!0);
    try {
      const m = await Bd(e);
      r(m);
    } catch (m) {
      console.error("Failed to load lineage:", m);
    } finally {
      i(!1);
    }
  }, [e]);
  O.useEffect(() => {
    o();
  }, [o]);
  const s = ((m) => {
    var S;
    const k = /* @__PURE__ */ new Map();
    for (const w of m) {
      const M = w.parent_id || null;
      k.has(M) || k.set(M, []), (S = k.get(M)) == null || S.push(w);
    }
    return k;
  })(n), f = (m, k = 0) => (s.get(m) || []).map((w) => /* @__PURE__ */ h.jsxs("div", { className: "meld-tree-node-container", children: [
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        className: `meld-tree-node ${w.id === e ? "meld-tree-node--current" : ""}`,
        style: { paddingLeft: `${k * 24}px` },
        children: [
          k > 0 && /* @__PURE__ */ h.jsx(dc, { size: 16, className: "meld-tree-node-arrow" }),
          /* @__PURE__ */ h.jsxs("div", { className: "meld-tree-node-content", children: [
            /* @__PURE__ */ h.jsx(
              "img",
              {
                src: `/api/view?filename=${encodeURIComponent(w.filename)}&type=${w.type || "output"}${w.subfolder ? `&subfolder=${encodeURIComponent(w.subfolder)}` : ""}`,
                alt: w.filename,
                onClick: () => t({ type: "OPEN_VIEWER", payload: w.id })
              }
            ),
            /* @__PURE__ */ h.jsxs("div", { className: "meld-tree-node-info", children: [
              /* @__PURE__ */ h.jsxs("span", { className: "meld-tree-node-id", children: [
                "#",
                w.id
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "meld-tree-node-filename", children: w.filename })
            ] })
          ] }),
          w.id === e && /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "meld-tree-change-parent",
              onClick: () => t({
                type: "OPEN_MODAL",
                payload: { type: "parent_selection", imageId: w.id }
              }),
              children: "Change Parent"
            }
          )
        ]
      }
    ),
    f(w.id, k + 1)
  ] }, w.id)), v = new Set(n.map((m) => m.id)), p = n.filter(
    (m) => !m.parent_id || !v.has(m.parent_id)
  );
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => t({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ h.jsxs(
        "div",
        {
          className: "meld-modal-content meld-modal-content--large",
          onClick: (m) => m.stopPropagation(),
          children: [
            /* @__PURE__ */ h.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ h.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                /* @__PURE__ */ h.jsx(pc, { size: 20 }),
                /* @__PURE__ */ h.jsx("h2", { children: "History Tree" })
              ] }),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-modal-close",
                  onClick: () => t({ type: "CLOSE_MODAL" }),
                  children: /* @__PURE__ */ h.jsx(lr, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ h.jsx("div", { className: "meld-modal-body", children: l ? /* @__PURE__ */ h.jsx("div", { className: "meld-modal-loading", children: "Loading tree..." }) : n.length === 0 ? /* @__PURE__ */ h.jsx("div", { className: "meld-no-lineage", children: "No related images found." }) : /* @__PURE__ */ h.jsx("div", { className: "meld-tree-container", children: p.map((m) => /* @__PURE__ */ h.jsx("div", { className: "meld-tree-root", children: f(m.parent_id || null) }, m.id)) }) })
          ]
        }
      )
    }
  );
}, gp = ({ image: e }) => {
  const { state: t, dispatch: n } = dn(), r = t.selectedIds.has(e.id), [l, i] = O.useState(null), o = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, u = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, s = (p) => {
    p.ctrlKey || p.metaKey || t.selectedIds.size > 0 ? (p.preventDefault(), p.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, f = (p) => {
    n({ type: "TOGGLE_SELECT", payload: e.id });
  }, v = (p) => {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  };
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: f,
      onKeyDown: v,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ h.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ h.jsx(
          "img",
          {
            src: u,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onClick: (p) => {
              p.stopPropagation(), s(p);
            }
          }
        ) }),
        /* @__PURE__ */ h.jsxs("div", { className: "meld-image-card__details", children: [
          /* @__PURE__ */ h.jsx("div", { className: "meld-image-card__filename", children: o }),
          /* @__PURE__ */ h.jsx("div", { className: "meld-image-card__lineage-v2", children: e.parent_id ? /* @__PURE__ */ h.jsxs(
            "div",
            {
              className: "meld-lineage-badge meld-lineage-badge--has-parent",
              onClick: (p) => {
                p.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: { type: "history_tree", imageId: e.id }
                });
              },
              children: [
                /* @__PURE__ */ h.jsx(pc, { size: 12 }),
                /* @__PURE__ */ h.jsxs("span", { children: [
                  "Parent #",
                  e.parent_id
                ] })
              ]
            }
          ) : /* @__PURE__ */ h.jsxs(
            "div",
            {
              className: "meld-lineage-badge meld-lineage-badge--no-parent",
              onClick: (p) => {
                p.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: { type: "parent_selection", imageId: e.id }
                });
              },
              children: [
                /* @__PURE__ */ h.jsx(lp, { size: 12 }),
                /* @__PURE__ */ h.jsx("span", { children: "Origin (No parent)" })
              ]
            }
          ) }),
          /* @__PURE__ */ h.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (p) => {
                p.stopPropagation(), i({
                  title: "Positive Prompt",
                  text: e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ h.jsx("div", { className: "meld-image-card__meta-label", children: "Positive" }),
                /* @__PURE__ */ h.jsx("div", { className: "meld-image-card__meta-content", children: e.positive || "-" })
              ]
            }
          ),
          /* @__PURE__ */ h.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (p) => {
                p.stopPropagation(), i({
                  title: "Negative Prompt",
                  text: e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ h.jsx("div", { className: "meld-image-card__meta-label", children: "Negative" }),
                /* @__PURE__ */ h.jsx("div", { className: "meld-image-card__meta-content", children: e.negative || "-" })
              ]
            }
          ),
          /* @__PURE__ */ h.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ h.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
            /* @__PURE__ */ h.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((p, m) => /* @__PURE__ */ h.jsx("span", { className: "meld-image-card__tag", children: p }, `${p}-${m}`)) : /* @__PURE__ */ h.jsx("span", { style: { color: "#666" }, children: "-" }) })
          ] })
        ] }),
        l && /* @__PURE__ */ h.jsx(
          "div",
          {
            className: "meld-prompt-popup-overlay",
            onClick: (p) => {
              p.stopPropagation(), i(null);
            },
            children: /* @__PURE__ */ h.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (p) => p.stopPropagation(),
                children: [
                  /* @__PURE__ */ h.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ h.jsx("span", { children: l.title }),
                    /* @__PURE__ */ h.jsx(
                      lr,
                      {
                        className: "meld-prompt-popup-close",
                        size: 18,
                        onClick: () => i(null)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ h.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, wp = () => {
  const { state: e, dispatch: t } = dn(), { viewerImageId: n, images: r } = e, [l, i] = O.useState(!1), o = r.find((f) => f.id === n), u = O.useCallback(
    (f) => {
      f && "stopPropagation" in f && f.stopPropagation(), document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch((v) => {
        console.error(
          `Error attempting to enable full-screen mode: ${v.message}`
        );
      });
    },
    []
  );
  if (O.useEffect(() => {
    const f = (p) => {
      n !== null && (p.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : p.key === "ArrowRight" ? t({ type: "NEXT_IMAGE" }) : p.key === "ArrowLeft" ? t({ type: "PREVIOUS_IMAGE" }) : (p.key === "f" || p.key === "F") && u(p));
    }, v = () => {
      i(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", f), document.addEventListener("fullscreenchange", v), () => {
      window.removeEventListener("keydown", f), document.removeEventListener("fullscreenchange", v);
    };
  }, [n, t, u]), O.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), !o) return null;
  const s = `/api/view?filename=${encodeURIComponent(o.filename)}&type=${o.type || "output"}${o.subfolder ? `&subfolder=${encodeURIComponent(o.subfolder)}` : ""}`;
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      className: "meld-viewer-overlay",
      onClick: () => t({ type: "CLOSE_VIEWER" }),
      role: "button",
      tabIndex: 0,
      children: /* @__PURE__ */ h.jsxs(
        "div",
        {
          className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""}`,
          onClick: (f) => f.stopPropagation(),
          children: [
            /* @__PURE__ */ h.jsxs("div", { className: "meld-viewer-actions", children: [
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn",
                  onClick: u,
                  type: "button",
                  title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                  children: l ? /* @__PURE__ */ h.jsx(rp, { size: 20 }) : /* @__PURE__ */ h.jsx(np, { size: 20 })
                }
              ),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                  onClick: () => t({ type: "CLOSE_VIEWER" }),
                  type: "button",
                  title: "Close (Esc)",
                  children: /* @__PURE__ */ h.jsx(lr, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--prev",
                onClick: () => t({ type: "PREVIOUS_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ h.jsx(tp, { size: 32 })
              }
            ),
            /* @__PURE__ */ h.jsxs("div", { className: "meld-viewer-image-container", children: [
              /* @__PURE__ */ h.jsx(
                "img",
                {
                  src: s,
                  alt: o.filename,
                  className: "meld-viewer-image"
                }
              ),
              /* @__PURE__ */ h.jsx("div", { className: "meld-viewer-info", children: /* @__PURE__ */ h.jsx("div", { className: "meld-viewer-filename", children: o.filename }) })
            ] }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "meld-viewer-nav meld-viewer-nav--next",
                onClick: () => t({ type: "NEXT_IMAGE" }),
                type: "button",
                children: /* @__PURE__ */ h.jsx(dc, { size: 32 })
              }
            )
          ]
        }
      )
    }
  );
}, kp = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = dn(), [l, i] = O.useState([]), [o, u] = O.useState(!0), [s, f] = O.useState(!1), v = t.images.find((c) => c.id === e), p = O.useCallback(async () => {
    u(!0);
    try {
      const c = await Hd(e);
      i(c);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      u(!1);
    }
  }, [e]);
  O.useEffect(() => {
    p();
  }, [p]);
  const m = async (c) => {
    try {
      await Vd(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (a) {
      console.error("Failed to link parent:", a);
    }
  }, k = async (c) => {
    u(!0);
    try {
      const a = await Wd(c);
      await ac({
        filename: a.name,
        subfolder: a.subfolder || "",
        type: a.type || "input"
      }), await p();
    } catch (a) {
      console.error("Failed to upload/register image:", a);
    } finally {
      u(!1);
    }
  }, S = (c) => {
    c.preventDefault(), f(!1);
    const a = c.dataTransfer.files[0];
    a != null && a.type.startsWith("image/") && k(a);
  };
  if (!v) return null;
  const w = l.filter((c) => c.is_source_match), M = l.filter((c) => !c.is_source_match);
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => n({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ h.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
        /* @__PURE__ */ h.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ h.jsxs("h2", { children: [
            "Select Parent for #",
            v.id
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "meld-modal-close",
              onClick: () => n({ type: "CLOSE_MODAL" }),
              children: /* @__PURE__ */ h.jsx(lr, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "meld-modal-body", children: [
          /* @__PURE__ */ h.jsxs(
            "div",
            {
              className: `meld-drop-zone ${s ? "meld-drop-zone--active" : ""}`,
              onDragOver: (c) => {
                c.preventDefault(), f(!0);
              },
              onDragLeave: () => f(!1),
              onDrop: S,
              children: [
                /* @__PURE__ */ h.jsx(up, { size: 32 }),
                /* @__PURE__ */ h.jsx("p", { children: "Drop an image file here to add it as a candidate" })
              ]
            }
          ),
          o ? /* @__PURE__ */ h.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ h.jsxs("div", { className: "meld-suggestions-container", children: [
            w.length > 0 && /* @__PURE__ */ h.jsxs("section", { children: [
              /* @__PURE__ */ h.jsx("h3", { children: "Source Matches (from metadata)" }),
              /* @__PURE__ */ h.jsx("div", { className: "meld-suggestion-grid", children: w.map((c) => /* @__PURE__ */ h.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => m(c.id),
                  children: [
                    /* @__PURE__ */ h.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(c.filename)}&type=${c.type || "output"}${c.subfolder ? `&subfolder=${encodeURIComponent(c.subfolder)}` : ""}`,
                        alt: c.filename
                      }
                    ),
                    /* @__PURE__ */ h.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ h.jsx("span", { className: "meld-suggestion-filename", children: c.filename }) })
                  ]
                },
                c.id
              )) })
            ] }),
            /* @__PURE__ */ h.jsxs("section", { children: [
              /* @__PURE__ */ h.jsx("h3", { children: "Visual Matches (pHash)" }),
              M.length > 0 ? /* @__PURE__ */ h.jsx("div", { className: "meld-suggestion-grid", children: M.map((c) => /* @__PURE__ */ h.jsxs(
                "div",
                {
                  className: "meld-suggestion-card",
                  onClick: () => m(c.id),
                  children: [
                    /* @__PURE__ */ h.jsx(
                      "img",
                      {
                        src: `/api/view?filename=${encodeURIComponent(c.filename)}&type=${c.type || "output"}${c.subfolder ? `&subfolder=${encodeURIComponent(c.subfolder)}` : ""}`,
                        alt: c.filename
                      }
                    ),
                    /* @__PURE__ */ h.jsxs("div", { className: "meld-suggestion-info", children: [
                      /* @__PURE__ */ h.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
                      /* @__PURE__ */ h.jsxs("span", { className: "meld-suggestion-distance", children: [
                        "Match:",
                        " ",
                        Math.round((64 - c.distance) / 64 * 100),
                        "%"
                      ] })
                    ] })
                  ]
                },
                c.id
              )) }) : /* @__PURE__ */ h.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
            ] })
          ] })
        ] })
      ] })
    }
  );
}, Sp = () => {
  const { state: e, dispatch: t, refreshImages: n } = dn();
  Be.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  });
  const r = () => {
    e.selectedIds.size > 0 ? t({ type: "CLEAR_SELECTION" }) : t({ type: "SELECT_ALL" });
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
          gap: "15px"
        },
        children: [
          /* @__PURE__ */ h.jsx(
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
              children: e.selectedIds.size > 0 ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
                /* @__PURE__ */ h.jsx(sp, { size: 14 }),
                "Deselect"
              ] }) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
                /* @__PURE__ */ h.jsx(ep, { size: 14 }),
                "Select All"
              ] })
            }
          ),
          /* @__PURE__ */ h.jsxs(
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
                /* @__PURE__ */ h.jsx(
                  ip,
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
    e.error && /* @__PURE__ */ h.jsx("div", { className: "meld-gallery__error", children: e.error }),
    e.isLoading && e.images.length === 0 ? /* @__PURE__ */ h.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : e.images.length === 0 ? /* @__PURE__ */ h.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ h.jsx("div", { className: "meld-gallery__list", children: e.images.map((l) => /* @__PURE__ */ h.jsx(gp, { image: l }, l.id)) }),
    /* @__PURE__ */ h.jsx(vp, {}),
    e.viewerImageId !== null && /* @__PURE__ */ h.jsx(wp, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ h.jsx(kp, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "history_tree" && /* @__PURE__ */ h.jsx(yp, { imageId: e.activeModal.imageId })
  ] });
}, _l = document.createElement("link");
_l.rel = "stylesheet";
_l.type = "text/css";
_l.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(_l);
let _r = null, ze = null;
vc.registerExtension({
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
      const n = await $d();
      Be.init(n.dev_mode), Be.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld-Flow] Failed to fetch settings", n), Be.init(!1);
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
            Be.log("MeldNexus: render called", {
              el: n,
              galleryRoot: _r,
              galleryContainer: ze
            }), ze || (Be.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), ze = document.createElement("div"), ze.id = "meld-flow-gallery-container", ze.style.height = "100%", ze.style.width = "100%", ze.style.display = "flex", ze.style.flexDirection = "column"), n.contains(ze) || (Be.log("MeldNexus: Appending galleryContainer to el"), n.appendChild(ze)), _r ? Be.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (Be.log("MeldNexus: Creating new gallery root"), _r = sc(ze), _r.render(
              Qo.createElement(
                hp,
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
