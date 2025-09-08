"use strict";

var _templateObject;
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
(() => {
  var rt = !1,
    nt = !1,
    U = [],
    it = -1;
  function qt(e) {
    Cn(e);
  }
  function Cn(e) {
    U.includes(e) || U.push(e), Tn();
  }
  function Ee(e) {
    let t = U.indexOf(e);
    t !== -1 && t > it && U.splice(t, 1);
  }
  function Tn() {
    !nt && !rt && (rt = !0, queueMicrotask(Rn));
  }
  function Rn() {
    rt = !1, nt = !0;
    for (let e = 0; e < U.length; e++) U[e](), it = e;
    U.length = 0, it = -1, nt = !1;
  }
  var R,
    D,
    L,
    st,
    ot = !0;
  function Ut(e) {
    ot = !1, e(), ot = !0;
  }
  function Wt(e) {
    R = e.reactive, L = e.release, D = t => e.effect(t, {
      scheduler: r => {
        ot ? qt(r) : r();
      }
    }), st = e.raw;
  }
  function at(e) {
    D = e;
  }
  function Gt(e) {
    let t = () => {};
    return [n => {
      let i = D(n);
      return e._x_effects || (e._x_effects = new Set(), e._x_runEffects = () => {
        e._x_effects.forEach(o => o());
      }), e._x_effects.add(i), t = () => {
        i !== void 0 && (e._x_effects.delete(i), L(i));
      }, i;
    }, () => {
      t();
    }];
  }
  function ve(e, t) {
    let r = !0,
      n,
      i = D(() => {
        let o = e();
        JSON.stringify(o), r ? n = o : queueMicrotask(() => {
          t(o, n), n = o;
        }), r = !1;
      });
    return () => L(i);
  }
  var Jt = [],
    Yt = [],
    Xt = [];
  function Zt(e) {
    Xt.push(e);
  }
  function ee(e, t) {
    typeof t == "function" ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t)) : (t = e, Yt.push(t));
  }
  function Ae(e) {
    Jt.push(e);
  }
  function Oe(e, t, r) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(r);
  }
  function ct(e, t) {
    e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach(_ref => {
      let [r, n] = _ref;
      (t === void 0 || t.includes(r)) && (n.forEach(i => i()), delete e._x_attributeCleanups[r]);
    });
  }
  function Qt(e) {
    if (e._x_cleanups) for (; e._x_cleanups.length;) e._x_cleanups.pop()();
  }
  var lt = new MutationObserver(pt),
    ut = !1;
  function le() {
    lt.observe(document, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeOldValue: !0
    }), ut = !0;
  }
  function ft() {
    Mn(), lt.disconnect(), ut = !1;
  }
  var ce = [];
  function Mn() {
    let e = lt.takeRecords();
    ce.push(() => e.length > 0 && pt(e));
    let t = ce.length;
    queueMicrotask(() => {
      if (ce.length === t) for (; ce.length > 0;) ce.shift()();
    });
  }
  function _(e) {
    if (!ut) return e();
    ft();
    let t = e();
    return le(), t;
  }
  var dt = !1,
    Se = [];
  function er() {
    dt = !0;
  }
  function tr() {
    dt = !1, pt(Se), Se = [];
  }
  function pt(e) {
    if (dt) {
      Se = Se.concat(e);
      return;
    }
    let t = new Set(),
      r = new Set(),
      n = new Map(),
      i = new Map();
    for (let o = 0; o < e.length; o++) if (!e[o].target._x_ignoreMutationObserver && (e[o].type === "childList" && (e[o].addedNodes.forEach(s => s.nodeType === 1 && t.add(s)), e[o].removedNodes.forEach(s => s.nodeType === 1 && r.add(s))), e[o].type === "attributes")) {
      let s = e[o].target,
        a = e[o].attributeName,
        c = e[o].oldValue,
        l = () => {
          n.has(s) || n.set(s, []), n.get(s).push({
            name: a,
            value: s.getAttribute(a)
          });
        },
        u = () => {
          i.has(s) || i.set(s, []), i.get(s).push(a);
        };
      s.hasAttribute(a) && c === null ? l() : s.hasAttribute(a) ? (u(), l()) : u();
    }
    i.forEach((o, s) => {
      ct(s, o);
    }), n.forEach((o, s) => {
      Jt.forEach(a => a(s, o));
    });
    var _iterator = _createForOfIteratorHelper(r),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        let o = _step.value;
        t.has(o) || Yt.forEach(s => s(o));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    t.forEach(o => {
      o._x_ignoreSelf = !0, o._x_ignore = !0;
    });
    var _iterator2 = _createForOfIteratorHelper(t),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        let o = _step2.value;
        r.has(o) || o.isConnected && (delete o._x_ignoreSelf, delete o._x_ignore, Xt.forEach(s => s(o)), o._x_ignore = !0, o._x_ignoreSelf = !0);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    t.forEach(o => {
      delete o._x_ignoreSelf, delete o._x_ignore;
    }), t = null, r = null, n = null, i = null;
  }
  function Ce(e) {
    return F(j(e));
  }
  function P(e, t, r) {
    return e._x_dataStack = [t].concat(_toConsumableArray(j(r || e))), () => {
      e._x_dataStack = e._x_dataStack.filter(n => n !== t);
    };
  }
  function j(e) {
    return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? j(e.host) : e.parentNode ? j(e.parentNode) : [];
  }
  function F(e) {
    return new Proxy({
      objects: e
    }, Nn);
  }
  var Nn = {
    ownKeys(_ref2) {
      let {
        objects: e
      } = _ref2;
      return Array.from(new Set(e.flatMap(t => Object.keys(t))));
    },
    has(_ref3, t) {
      let {
        objects: e
      } = _ref3;
      return t == Symbol.unscopables ? !1 : e.some(r => Object.prototype.hasOwnProperty.call(r, t) || Reflect.has(r, t));
    },
    get(_ref4, t, r) {
      let {
        objects: e
      } = _ref4;
      return t == "toJSON" ? Dn : Reflect.get(e.find(n => Reflect.has(n, t)) || {}, t, r);
    },
    set(_ref5, t, r, n) {
      let {
        objects: e
      } = _ref5;
      let i = e.find(s => Object.prototype.hasOwnProperty.call(s, t)) || e[e.length - 1],
        o = Object.getOwnPropertyDescriptor(i, t);
      return o !== null && o !== void 0 && o.set && o !== null && o !== void 0 && o.get ? o.set.call(n, r) || !0 : Reflect.set(i, t, r);
    }
  };
  function Dn() {
    return Reflect.ownKeys(this).reduce((t, r) => (t[r] = Reflect.get(this, r), t), {});
  }
  function Te(e) {
    let t = n => typeof n == "object" && !Array.isArray(n) && n !== null,
      r = function (n) {
        let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(_ref6 => {
          let [o, {
            value: s,
            enumerable: a
          }] = _ref6;
          if (a === !1 || s === void 0 || typeof s == "object" && s !== null && s.__v_skip) return;
          let c = i === "" ? o : "".concat(i, ".").concat(o);
          typeof s == "object" && s !== null && s._x_interceptor ? n[o] = s.initialize(e, c, o) : t(s) && s !== n && !(s instanceof Element) && r(s, c);
        });
      };
    return r(e);
  }
  function Re(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
    let r = {
      initialValue: void 0,
      _x_interceptor: !0,
      initialize(n, i, o) {
        return e(this.initialValue, () => Pn(n, i), s => mt(n, i, s), i, o);
      }
    };
    return t(r), n => {
      if (typeof n == "object" && n !== null && n._x_interceptor) {
        let i = r.initialize.bind(r);
        r.initialize = (o, s, a) => {
          let c = n.initialize(o, s, a);
          return r.initialValue = c, i(o, s, a);
        };
      } else r.initialValue = n;
      return r;
    };
  }
  function Pn(e, t) {
    return t.split(".").reduce((r, n) => r[n], e);
  }
  function mt(e, t, r) {
    if (typeof t == "string" && (t = t.split(".")), t.length === 1) e[t[0]] = r;else {
      if (t.length === 0) throw error;
      return e[t[0]] || (e[t[0]] = {}), mt(e[t[0]], t.slice(1), r);
    }
  }
  var rr = {};
  function y(e, t) {
    rr[e] = t;
  }
  function ue(e, t) {
    return Object.entries(rr).forEach(_ref7 => {
      let [r, n] = _ref7;
      let i = null;
      function o() {
        if (i) return i;
        {
          let [s, a] = _t(t);
          return i = _objectSpread({
            interceptor: Re
          }, s), ee(t, a), i;
        }
      }
      Object.defineProperty(e, "$".concat(r), {
        get() {
          return n(t, o());
        },
        enumerable: !1
      });
    }), e;
  }
  function nr(e, t, r) {
    try {
      for (var _len = arguments.length, n = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        n[_key - 3] = arguments[_key];
      }
      return r.apply(void 0, n);
    } catch (i) {
      te(i, e, t);
    }
  }
  function te(e, t) {
    var _e2;
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : void 0;
    e = Object.assign((_e2 = e) !== null && _e2 !== void 0 ? _e2 : {
      message: "No error message given."
    }, {
      el: t,
      expression: r
    }), console.warn("Alpine Expression Error: ".concat(e.message, "\n\n").concat(r ? 'Expression: "' + r + "\"\n\n" : ""), t), setTimeout(() => {
      throw e;
    }, 0);
  }
  var Me = !0;
  function De(e) {
    let t = Me;
    Me = !1;
    let r = e();
    return Me = t, r;
  }
  function M(e, t) {
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let n;
    return x(e, t)(i => n = i, r), n;
  }
  function x() {
    return ir.apply(void 0, arguments);
  }
  var ir = gt;
  function or(e) {
    ir = e;
  }
  function gt(e, t) {
    let r = {};
    ue(r, e);
    let n = [r].concat(_toConsumableArray(j(e))),
      i = typeof t == "function" ? In(n, t) : Ln(n, t, e);
    return nr.bind(null, e, t, i);
  }
  function In(e, t) {
    return function () {
      let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
      let {
        scope: n = {},
        params: i = []
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let o = t.apply(F([n].concat(_toConsumableArray(e))), i);
      Ne(r, o);
    };
  }
  var ht = {};
  function kn(e, t) {
    if (ht[e]) return ht[e];
    let r = Object.getPrototypeOf(async function () {}).constructor,
      n = /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim()) ? "(async()=>{ ".concat(e, " })()") : e,
      o = (() => {
        try {
          let s = new r(["__self", "scope"], "with (scope) { __self.result = ".concat(n, " }; __self.finished = true; return __self.result;"));
          return Object.defineProperty(s, "name", {
            value: "[Alpine] ".concat(e)
          }), s;
        } catch (s) {
          return te(s, t, e), Promise.resolve();
        }
      })();
    return ht[e] = o, o;
  }
  function Ln(e, t, r) {
    let n = kn(t, r);
    return function () {
      let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
      let {
        scope: o = {},
        params: s = []
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      n.result = void 0, n.finished = !1;
      let a = F([o].concat(_toConsumableArray(e)));
      if (typeof n == "function") {
        let c = n(n, a).catch(l => te(l, r, t));
        n.finished ? (Ne(i, n.result, a, s, r), n.result = void 0) : c.then(l => {
          Ne(i, l, a, s, r);
        }).catch(l => te(l, r, t)).finally(() => n.result = void 0);
      }
    };
  }
  function Ne(e, t, r, n, i) {
    if (Me && typeof t == "function") {
      let o = t.apply(r, n);
      o instanceof Promise ? o.then(s => Ne(e, s, r, n)).catch(s => te(s, i, t)) : e(o);
    } else typeof t == "object" && t instanceof Promise ? t.then(o => e(o)) : e(t);
  }
  var bt = "x-";
  function C() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return bt + e;
  }
  function sr(e) {
    bt = e;
  }
  var Pe = {};
  function d(e, t) {
    return Pe[e] = t, {
      before(r) {
        if (!Pe[r]) {
          console.warn(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["Cannot find directive `", "`. `", "` will use the default order of execution"], ["Cannot find directive \\`", "\\`. \\`", "\\` will use the default order of execution"])), r, e));
          return;
        }
        let n = W.indexOf(r);
        W.splice(n >= 0 ? n : W.indexOf("DEFAULT"), 0, e);
      }
    };
  }
  function ar(e) {
    return Object.keys(Pe).includes(e);
  }
  function de(e, t, r) {
    if (t = Array.from(t), e._x_virtualDirectives) {
      let o = Object.entries(e._x_virtualDirectives).map(_ref8 => {
          let [a, c] = _ref8;
          return {
            name: a,
            value: c
          };
        }),
        s = wt(o);
      o = o.map(a => s.find(c => c.name === a.name) ? {
        name: "x-bind:".concat(a.name),
        value: "\"".concat(a.value, "\"")
      } : a), t = t.concat(o);
    }
    let n = {};
    return t.map(ur((o, s) => n[o] = s)).filter(dr).map(jn(n, r)).sort(Fn).map(o => $n(e, o));
  }
  function wt(e) {
    return Array.from(e).map(ur()).filter(t => !dr(t));
  }
  var xt = !1,
    fe = new Map(),
    cr = Symbol();
  function lr(e) {
    xt = !0;
    let t = Symbol();
    cr = t, fe.set(t, []);
    let r = () => {
        for (; fe.get(t).length;) fe.get(t).shift()();
        fe.delete(t);
      },
      n = () => {
        xt = !1, r();
      };
    e(r), n();
  }
  function _t(e) {
    let t = [],
      r = a => t.push(a),
      [n, i] = Gt(e);
    return t.push(i), [{
      Alpine: B,
      effect: n,
      cleanup: r,
      evaluateLater: x.bind(x, e),
      evaluate: M.bind(M, e)
    }, () => t.forEach(a => a())];
  }
  function $n(e, t) {
    let r = () => {},
      n = Pe[t.type] || r,
      [i, o] = _t(e);
    Oe(e, t.original, o);
    let s = () => {
      e._x_ignore || e._x_ignoreSelf || (n.inline && n.inline(e, t, i), n = n.bind(n, e, t, i), xt ? fe.get(cr).push(n) : n());
    };
    return s.runCleanups = o, s;
  }
  var Ie = (e, t) => _ref9 => {
      let {
        name: r,
        value: n
      } = _ref9;
      return r.startsWith(e) && (r = r.replace(e, t)), {
        name: r,
        value: n
      };
    },
    ke = e => e;
  function ur() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
    return _ref10 => {
      let {
        name: t,
        value: r
      } = _ref10;
      let {
        name: n,
        value: i
      } = fr.reduce((o, s) => s(o), {
        name: t,
        value: r
      });
      return n !== t && e(n, t), {
        name: n,
        value: i
      };
    };
  }
  var fr = [];
  function re(e) {
    fr.push(e);
  }
  function dr(_ref11) {
    let {
      name: e
    } = _ref11;
    return pr().test(e);
  }
  var pr = () => new RegExp("^".concat(bt, "([^:^.]+)\\b"));
  function jn(e, t) {
    return _ref12 => {
      let {
        name: r,
        value: n
      } = _ref12;
      let i = r.match(pr()),
        o = r.match(/:([a-zA-Z0-9\-_:]+)/),
        s = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
        a = t || e[r] || r;
      return {
        type: i ? i[1] : null,
        value: o ? o[1] : null,
        modifiers: s.map(c => c.replace(".", "")),
        expression: n,
        original: a
      };
    };
  }
  var yt = "DEFAULT",
    W = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", yt, "teleport"];
  function Fn(e, t) {
    let r = W.indexOf(e.type) === -1 ? yt : e.type,
      n = W.indexOf(t.type) === -1 ? yt : t.type;
    return W.indexOf(r) - W.indexOf(n);
  }
  function G(e, t) {
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    e.dispatchEvent(new CustomEvent(t, {
      detail: r,
      bubbles: !0,
      composed: !0,
      cancelable: !0
    }));
  }
  function T(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
      Array.from(e.children).forEach(i => T(i, t));
      return;
    }
    let r = !1;
    if (t(e, () => r = !0), r) return;
    let n = e.firstElementChild;
    for (; n;) T(n, t, !1), n = n.nextElementSibling;
  }
  function E(e) {
    var _console;
    for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      t[_key2 - 1] = arguments[_key2];
    }
    (_console = console).warn.apply(_console, ["Alpine Warning: ".concat(e)].concat(t));
  }
  var mr = !1;
  function _r() {
    mr && E("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."), mr = !0, document.body || E("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), G(document, "alpine:init"), G(document, "alpine:initializing"), le(), Zt(t => S(t, T)), ee(t => vt(t)), Ae((t, r) => {
      de(t, r).forEach(n => n());
    });
    let e = t => !J(t.parentElement, !0);
    Array.from(document.querySelectorAll(xr().join(","))).filter(e).forEach(t => {
      S(t);
    }), G(document, "alpine:initialized"), setTimeout(() => {
      Bn();
    });
  }
  var Et = [],
    hr = [];
  function gr() {
    return Et.map(e => e());
  }
  function xr() {
    return Et.concat(hr).map(e => e());
  }
  function Le(e) {
    Et.push(e);
  }
  function $e(e) {
    hr.push(e);
  }
  function J(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    return z(e, r => {
      if ((t ? xr() : gr()).some(i => r.matches(i))) return !0;
    });
  }
  function z(e, t) {
    if (e) {
      if (t(e)) return e;
      if (e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement) return z(e.parentElement, t);
    }
  }
  function yr(e) {
    return gr().some(t => e.matches(t));
  }
  var br = [];
  function wr(e) {
    br.push(e);
  }
  function S(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : T;
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : () => {};
    lr(() => {
      t(e, (n, i) => {
        r(n, i), br.forEach(o => o(n, i)), de(n, n.attributes).forEach(o => o()), n._x_ignore && i();
      });
    });
  }
  function vt(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : T;
    t(e, r => {
      ct(r), Qt(r);
    });
  }
  function Bn() {
    [["ui", "dialog", ["[x-dialog], [x-popover]"]], ["anchor", "anchor", ["[x-anchor]"]], ["sort", "sort", ["[x-sort]"]]].forEach(_ref13 => {
      let [t, r, n] = _ref13;
      ar(r) || n.some(i => {
        if (document.querySelector(i)) return E("found \"".concat(i, "\", but missing ").concat(t, " plugin")), !0;
      });
    });
  }
  var St = [],
    At = !1;
  function ne() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
    return queueMicrotask(() => {
      At || setTimeout(() => {
        je();
      });
    }), new Promise(t => {
      St.push(() => {
        e(), t();
      });
    });
  }
  function je() {
    for (At = !1; St.length;) St.shift()();
  }
  function Er() {
    At = !0;
  }
  function pe(e, t) {
    return Array.isArray(t) ? vr(e, t.join(" ")) : typeof t == "object" && t !== null ? zn(e, t) : typeof t == "function" ? pe(e, t()) : vr(e, t);
  }
  function vr(e, t) {
    let r = o => o.split(" ").filter(Boolean),
      n = o => o.split(" ").filter(s => !e.classList.contains(s)).filter(Boolean),
      i = o => {
        var _e$classList;
        return (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(o)), () => {
          var _e$classList2;
          (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(o));
        };
      };
    return t = t === !0 ? t = "" : t || "", i(n(t));
  }
  function zn(e, t) {
    let r = a => a.split(" ").filter(Boolean),
      n = Object.entries(t).flatMap(_ref14 => {
        let [a, c] = _ref14;
        return c ? r(a) : !1;
      }).filter(Boolean),
      i = Object.entries(t).flatMap(_ref15 => {
        let [a, c] = _ref15;
        return c ? !1 : r(a);
      }).filter(Boolean),
      o = [],
      s = [];
    return i.forEach(a => {
      e.classList.contains(a) && (e.classList.remove(a), s.push(a));
    }), n.forEach(a => {
      e.classList.contains(a) || (e.classList.add(a), o.push(a));
    }), () => {
      s.forEach(a => e.classList.add(a)), o.forEach(a => e.classList.remove(a));
    };
  }
  function Y(e, t) {
    return typeof t == "object" && t !== null ? Kn(e, t) : Hn(e, t);
  }
  function Kn(e, t) {
    let r = {};
    return Object.entries(t).forEach(_ref16 => {
      let [n, i] = _ref16;
      r[n] = e.style[n], n.startsWith("--") || (n = Vn(n)), e.style.setProperty(n, i);
    }), setTimeout(() => {
      e.style.length === 0 && e.removeAttribute("style");
    }), () => {
      Y(e, r);
    };
  }
  function Hn(e, t) {
    let r = e.getAttribute("style", t);
    return e.setAttribute("style", t), () => {
      e.setAttribute("style", r || "");
    };
  }
  function Vn(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function me(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
    let r = !1;
    return function () {
      r ? t.apply(this, arguments) : (r = !0, e.apply(this, arguments));
    };
  }
  d("transition", (e, _ref17, _ref18) => {
    let {
      value: t,
      modifiers: r,
      expression: n
    } = _ref17;
    let {
      evaluate: i
    } = _ref18;
    typeof n == "function" && (n = i(n)), n !== !1 && (!n || typeof n == "boolean" ? Un(e, r, t) : qn(e, n, t));
  });
  function qn(e, t, r) {
    Sr(e, pe, ""), {
      enter: i => {
        e._x_transition.enter.during = i;
      },
      "enter-start": i => {
        e._x_transition.enter.start = i;
      },
      "enter-end": i => {
        e._x_transition.enter.end = i;
      },
      leave: i => {
        e._x_transition.leave.during = i;
      },
      "leave-start": i => {
        e._x_transition.leave.start = i;
      },
      "leave-end": i => {
        e._x_transition.leave.end = i;
      }
    }[r](t);
  }
  function Un(e, t, r) {
    Sr(e, Y);
    let n = !t.includes("in") && !t.includes("out") && !r,
      i = n || t.includes("in") || ["enter"].includes(r),
      o = n || t.includes("out") || ["leave"].includes(r);
    t.includes("in") && !n && (t = t.filter((g, b) => b < t.indexOf("out"))), t.includes("out") && !n && (t = t.filter((g, b) => b > t.indexOf("out")));
    let s = !t.includes("opacity") && !t.includes("scale"),
      a = s || t.includes("opacity"),
      c = s || t.includes("scale"),
      l = a ? 0 : 1,
      u = c ? _e(t, "scale", 95) / 100 : 1,
      p = _e(t, "delay", 0) / 1e3,
      m = _e(t, "origin", "center"),
      w = "opacity, transform",
      $ = _e(t, "duration", 150) / 1e3,
      we = _e(t, "duration", 75) / 1e3,
      f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i && (e._x_transition.enter.during = {
      transformOrigin: m,
      transitionDelay: "".concat(p, "s"),
      transitionProperty: w,
      transitionDuration: "".concat($, "s"),
      transitionTimingFunction: f
    }, e._x_transition.enter.start = {
      opacity: l,
      transform: "scale(".concat(u, ")")
    }, e._x_transition.enter.end = {
      opacity: 1,
      transform: "scale(1)"
    }), o && (e._x_transition.leave.during = {
      transformOrigin: m,
      transitionDelay: "".concat(p, "s"),
      transitionProperty: w,
      transitionDuration: "".concat(we, "s"),
      transitionTimingFunction: f
    }, e._x_transition.leave.start = {
      opacity: 1,
      transform: "scale(1)"
    }, e._x_transition.leave.end = {
      opacity: l,
      transform: "scale(".concat(u, ")")
    });
  }
  function Sr(e, t) {
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    e._x_transition || (e._x_transition = {
      enter: {
        during: r,
        start: r,
        end: r
      },
      leave: {
        during: r,
        start: r,
        end: r
      },
      in() {
        let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
        let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
        Fe(e, t, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, n, i);
      },
      out() {
        let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
        let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
        Fe(e, t, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, n, i);
      }
    });
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function (e, t, r, n) {
    let i = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout,
      o = () => i(r);
    if (t) {
      e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(r) : o() : e._x_transition ? e._x_transition.in(r) : o();
      return;
    }
    e._x_hidePromise = e._x_transition ? new Promise((s, a) => {
      e._x_transition.out(() => {}, () => s(n)), e._x_transitioning && e._x_transitioning.beforeCancel(() => a({
        isFromCancelledTransition: !0
      }));
    }) : Promise.resolve(n), queueMicrotask(() => {
      let s = Ar(e);
      s ? (s._x_hideChildren || (s._x_hideChildren = []), s._x_hideChildren.push(e)) : i(() => {
        let a = c => {
          let l = Promise.all([c._x_hidePromise].concat(_toConsumableArray((c._x_hideChildren || []).map(a)))).then(_ref19 => {
            let [u] = _ref19;
            return u === null || u === void 0 ? void 0 : u();
          });
          return delete c._x_hidePromise, delete c._x_hideChildren, l;
        };
        a(e).catch(c => {
          if (!c.isFromCancelledTransition) throw c;
        });
      });
    });
  };
  function Ar(e) {
    let t = e.parentNode;
    if (t) return t._x_hidePromise ? t : Ar(t);
  }
  function Fe(e, t) {
    let {
      during: r,
      start: n,
      end: i
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : () => {};
    let s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : () => {};
    if (e._x_transitioning && e._x_transitioning.cancel(), Object.keys(r).length === 0 && Object.keys(n).length === 0 && Object.keys(i).length === 0) {
      o(), s();
      return;
    }
    let a, c, l;
    Wn(e, {
      start() {
        a = t(e, n);
      },
      during() {
        c = t(e, r);
      },
      before: o,
      end() {
        a(), l = t(e, i);
      },
      after: s,
      cleanup() {
        c(), l();
      }
    });
  }
  function Wn(e, t) {
    let r,
      n,
      i,
      o = me(() => {
        _(() => {
          r = !0, n || t.before(), i || (t.end(), je()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning;
        });
      });
    e._x_transitioning = {
      beforeCancels: [],
      beforeCancel(s) {
        this.beforeCancels.push(s);
      },
      cancel: me(function () {
        for (; this.beforeCancels.length;) this.beforeCancels.shift()();
        o();
      }),
      finish: o
    }, _(() => {
      t.start(), t.during();
    }), Er(), requestAnimationFrame(() => {
      if (r) return;
      let s = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3,
        a = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      s === 0 && (s = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3), _(() => {
        t.before();
      }), n = !0, requestAnimationFrame(() => {
        r || (_(() => {
          t.end();
        }), je(), setTimeout(e._x_transitioning.finish, s + a), i = !0);
      });
    });
  }
  function _e(e, t, r) {
    if (e.indexOf(t) === -1) return r;
    let n = e[e.indexOf(t) + 1];
    if (!n || t === "scale" && isNaN(n)) return r;
    if (t === "duration" || t === "delay") {
      let i = n.match(/([0-9]+)ms/);
      if (i) return i[1];
    }
    return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [n, e[e.indexOf(t) + 2]].join(" ") : n;
  }
  var I = !1;
  function A(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {};
    return function () {
      return I ? t.apply(void 0, arguments) : e.apply(void 0, arguments);
    };
  }
  function Or(e) {
    return function () {
      return I && e.apply(void 0, arguments);
    };
  }
  var Cr = [];
  function K(e) {
    Cr.push(e);
  }
  function Tr(e, t) {
    Cr.forEach(r => r(e, t)), I = !0, Mr(() => {
      S(t, (r, n) => {
        n(r, () => {});
      });
    }), I = !1;
  }
  var Be = !1;
  function Rr(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack), I = !0, Be = !0, Mr(() => {
      Gn(t);
    }), I = !1, Be = !1;
  }
  function Gn(e) {
    let t = !1;
    S(e, (n, i) => {
      T(n, (o, s) => {
        if (t && yr(o)) return s();
        t = !0, i(o, s);
      });
    });
  }
  function Mr(e) {
    let t = D;
    at((r, n) => {
      let i = t(r);
      return L(i), () => {};
    }), e(), at(t);
  }
  function he(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    switch (e._x_bindings || (e._x_bindings = R({})), e._x_bindings[t] = r, t = n.includes("camel") ? ri(t) : t, t) {
      case "value":
        Jn(e, r);
        break;
      case "style":
        Xn(e, r);
        break;
      case "class":
        Yn(e, r);
        break;
      case "selected":
      case "checked":
        Zn(e, t, r);
        break;
      default:
        Dr(e, t, r);
        break;
    }
  }
  function Jn(e, t) {
    if (e.type === "radio") e.attributes.value === void 0 && (e.value = t), window.fromModel && (typeof t == "boolean" ? e.checked = ge(e.value) === t : e.checked = Nr(e.value, t));else if (e.type === "checkbox") Number.isInteger(t) ? e.value = t : !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some(r => Nr(r, e.value)) : e.checked = !!t;else if (e.tagName === "SELECT") ti(e, t);else {
      if (e.value === t) return;
      e.value = t === void 0 ? "" : t;
    }
  }
  function Yn(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedClasses = pe(e, t);
  }
  function Xn(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(), e._x_undoAddedStyles = Y(e, t);
  }
  function Zn(e, t, r) {
    Dr(e, t, r), ei(e, t, r);
  }
  function Dr(e, t, r) {
    [null, void 0, !1].includes(r) && ni(t) ? e.removeAttribute(t) : (Pr(t) && (r = t), Qn(e, t, r));
  }
  function Qn(e, t, r) {
    e.getAttribute(t) != r && e.setAttribute(t, r);
  }
  function ei(e, t, r) {
    e[t] !== r && (e[t] = r);
  }
  function ti(e, t) {
    let r = [].concat(t).map(n => n + "");
    Array.from(e.options).forEach(n => {
      n.selected = r.includes(n.value);
    });
  }
  function ri(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
  }
  function Nr(e, t) {
    return e == t;
  }
  function ge(e) {
    return [1, "1", "true", "on", "yes", !0].includes(e) ? !0 : [0, "0", "false", "off", "no", !1].includes(e) ? !1 : e ? Boolean(e) : null;
  }
  function Pr(e) {
    return ["disabled", "checked", "required", "readonly", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e);
  }
  function ni(e) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e);
  }
  function Ir(e, t, r) {
    return e._x_bindings && e._x_bindings[t] !== void 0 ? e._x_bindings[t] : Lr(e, t, r);
  }
  function kr(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
    if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
      let i = e._x_inlineBindings[t];
      return i.extract = n, De(() => M(e, i.expression));
    }
    return Lr(e, t, r);
  }
  function Lr(e, t, r) {
    let n = e.getAttribute(t);
    return n === null ? typeof r == "function" ? r() : r : n === "" ? !0 : Pr(t) ? !![t, "true"].includes(n) : n;
  }
  function ze(e, t) {
    var r;
    return function () {
      var n = this,
        i = arguments,
        o = function () {
          r = null, e.apply(n, i);
        };
      clearTimeout(r), r = setTimeout(o, t);
    };
  }
  function Ke(e, t) {
    let r;
    return function () {
      let n = this,
        i = arguments;
      r || (e.apply(n, i), r = !0, setTimeout(() => r = !1, t));
    };
  }
  function He(_ref20, _ref21) {
    let {
      get: e,
      set: t
    } = _ref20;
    let {
      get: r,
      set: n
    } = _ref21;
    let i = !0,
      o,
      s,
      a = D(() => {
        let c = e(),
          l = r();
        if (i) n(Ot(c)), i = !1;else {
          let u = JSON.stringify(c),
            p = JSON.stringify(l);
          u !== o ? n(Ot(c)) : u !== p && t(Ot(l));
        }
        o = JSON.stringify(e()), s = JSON.stringify(r());
      });
    return () => {
      L(a);
    };
  }
  function Ot(e) {
    return typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e;
  }
  function $r(e) {
    (Array.isArray(e) ? e : [e]).forEach(r => r(B));
  }
  var X = {},
    jr = !1;
  function Fr(e, t) {
    if (jr || (X = R(X), jr = !0), t === void 0) return X[e];
    X[e] = t, typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && X[e].init(), Te(X[e]);
  }
  function Br() {
    return X;
  }
  var zr = {};
  function Kr(e, t) {
    let r = typeof t != "function" ? () => t : t;
    return e instanceof Element ? Ct(e, r()) : (zr[e] = r, () => {});
  }
  function Hr(e) {
    return Object.entries(zr).forEach(_ref22 => {
      let [t, r] = _ref22;
      Object.defineProperty(e, t, {
        get() {
          return function () {
            return r.apply(void 0, arguments);
          };
        }
      });
    }), e;
  }
  function Ct(e, t, r) {
    let n = [];
    for (; n.length;) n.pop()();
    let i = Object.entries(t).map(_ref23 => {
        let [s, a] = _ref23;
        return {
          name: s,
          value: a
        };
      }),
      o = wt(i);
    return i = i.map(s => o.find(a => a.name === s.name) ? {
      name: "x-bind:".concat(s.name),
      value: "\"".concat(s.value, "\"")
    } : s), de(e, i, r).map(s => {
      n.push(s.runCleanups), s();
    }), () => {
      for (; n.length;) n.pop()();
    };
  }
  var Vr = {};
  function qr(e, t) {
    Vr[e] = t;
  }
  function Ur(e, t) {
    return Object.entries(Vr).forEach(_ref24 => {
      let [r, n] = _ref24;
      Object.defineProperty(e, r, {
        get() {
          return function () {
            return n.bind(t).apply(void 0, arguments);
          };
        },
        enumerable: !1
      });
    }), e;
  }
  var ii = {
      get reactive() {
        return R;
      },
      get release() {
        return L;
      },
      get effect() {
        return D;
      },
      get raw() {
        return st;
      },
      version: "3.14.1",
      flushAndStopDeferringMutations: tr,
      dontAutoEvaluateFunctions: De,
      disableEffectScheduling: Ut,
      startObservingMutations: le,
      stopObservingMutations: ft,
      setReactivityEngine: Wt,
      onAttributeRemoved: Oe,
      onAttributesAdded: Ae,
      closestDataStack: j,
      skipDuringClone: A,
      onlyDuringClone: Or,
      addRootSelector: Le,
      addInitSelector: $e,
      interceptClone: K,
      addScopeToNode: P,
      deferMutations: er,
      mapAttributes: re,
      evaluateLater: x,
      interceptInit: wr,
      setEvaluator: or,
      mergeProxies: F,
      extractProp: kr,
      findClosest: z,
      onElRemoved: ee,
      closestRoot: J,
      destroyTree: vt,
      interceptor: Re,
      transition: Fe,
      setStyles: Y,
      mutateDom: _,
      directive: d,
      entangle: He,
      throttle: Ke,
      debounce: ze,
      evaluate: M,
      initTree: S,
      nextTick: ne,
      prefixed: C,
      prefix: sr,
      plugin: $r,
      magic: y,
      store: Fr,
      start: _r,
      clone: Rr,
      cloneNode: Tr,
      bound: Ir,
      $data: Ce,
      watch: ve,
      walk: T,
      data: qr,
      bind: Kr
    },
    B = ii;
  function Tt(e, t) {
    let r = Object.create(null),
      n = e.split(",");
    for (let i = 0; i < n.length; i++) r[n[i]] = !0;
    return t ? i => !!r[i.toLowerCase()] : i => !!r[i];
  }
  var oi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
  var Ms = Tt(oi + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
  var Wr = Object.freeze({}),
    Ns = Object.freeze([]);
  var si = Object.prototype.hasOwnProperty,
    xe = (e, t) => si.call(e, t),
    H = Array.isArray,
    ie = e => Gr(e) === "[object Map]";
  var ai = e => typeof e == "string",
    Ve = e => typeof e == "symbol",
    ye = e => e !== null && typeof e == "object";
  var ci = Object.prototype.toString,
    Gr = e => ci.call(e),
    Rt = e => Gr(e).slice(8, -1);
  var qe = e => ai(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  var Ue = e => {
      let t = Object.create(null);
      return r => t[r] || (t[r] = e(r));
    },
    li = /-(\w)/g,
    Ds = Ue(e => e.replace(li, (t, r) => r ? r.toUpperCase() : "")),
    ui = /\B([A-Z])/g,
    Ps = Ue(e => e.replace(ui, "-$1").toLowerCase()),
    Mt = Ue(e => e.charAt(0).toUpperCase() + e.slice(1)),
    Is = Ue(e => e ? "on".concat(Mt(e)) : ""),
    Nt = (e, t) => e !== t && (e === e || t === t);
  var Dt = new WeakMap(),
    be = [],
    k,
    Z = Symbol("iterate"),
    Pt = Symbol("Map key iterate");
  function fi(e) {
    return e && e._isEffect === !0;
  }
  function en(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Wr;
    fi(e) && (e = e.raw);
    let r = pi(e, t);
    return t.lazy || r(), r;
  }
  function tn(e) {
    e.active && (rn(e), e.options.onStop && e.options.onStop(), e.active = !1);
  }
  var di = 0;
  function pi(e, t) {
    let r = function () {
      if (!r.active) return e();
      if (!be.includes(r)) {
        rn(r);
        try {
          return _i(), be.push(r), k = r, e();
        } finally {
          be.pop(), nn(), k = be[be.length - 1];
        }
      }
    };
    return r.id = di++, r.allowRecurse = !!t.allowRecurse, r._isEffect = !0, r.active = !0, r.raw = e, r.deps = [], r.options = t, r;
  }
  function rn(e) {
    let {
      deps: t
    } = e;
    if (t.length) {
      for (let r = 0; r < t.length; r++) t[r].delete(e);
      t.length = 0;
    }
  }
  var oe = !0,
    kt = [];
  function mi() {
    kt.push(oe), oe = !1;
  }
  function _i() {
    kt.push(oe), oe = !0;
  }
  function nn() {
    let e = kt.pop();
    oe = e === void 0 ? !0 : e;
  }
  function N(e, t, r) {
    if (!oe || k === void 0) return;
    let n = Dt.get(e);
    n || Dt.set(e, n = new Map());
    let i = n.get(r);
    i || n.set(r, i = new Set()), i.has(k) || (i.add(k), k.deps.push(i), k.options.onTrack && k.options.onTrack({
      effect: k,
      target: e,
      type: t,
      key: r
    }));
  }
  function q(e, t, r, n, i, o) {
    let s = Dt.get(e);
    if (!s) return;
    let a = new Set(),
      c = u => {
        u && u.forEach(p => {
          (p !== k || p.allowRecurse) && a.add(p);
        });
      };
    if (t === "clear") s.forEach(c);else if (r === "length" && H(e)) s.forEach((u, p) => {
      (p === "length" || p >= n) && c(u);
    });else switch (r !== void 0 && c(s.get(r)), t) {
      case "add":
        H(e) ? qe(r) && c(s.get("length")) : (c(s.get(Z)), ie(e) && c(s.get(Pt)));
        break;
      case "delete":
        H(e) || (c(s.get(Z)), ie(e) && c(s.get(Pt)));
        break;
      case "set":
        ie(e) && c(s.get(Z));
        break;
    }
    let l = u => {
      u.options.onTrigger && u.options.onTrigger({
        effect: u,
        target: e,
        key: r,
        type: t,
        newValue: n,
        oldValue: i,
        oldTarget: o
      }), u.options.scheduler ? u.options.scheduler(u) : u();
    };
    a.forEach(l);
  }
  var hi = Tt("__proto__,__v_isRef,__isVue"),
    on = new Set(Object.getOwnPropertyNames(Symbol).map(e => Symbol[e]).filter(Ve)),
    gi = sn();
  var xi = sn(!0);
  var Jr = yi();
  function yi() {
    let e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
      e[t] = function () {
        let n = h(this);
        for (let o = 0, s = this.length; o < s; o++) N(n, "get", o + "");
        for (var _len3 = arguments.length, r = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          r[_key3] = arguments[_key3];
        }
        let i = n[t].apply(n, r);
        return i === -1 || i === !1 ? n[t].apply(n, _toConsumableArray(r.map(h))) : i;
      };
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
      e[t] = function () {
        mi();
        for (var _len4 = arguments.length, r = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          r[_key4] = arguments[_key4];
        }
        let n = h(this)[t].apply(this, r);
        return nn(), n;
      };
    }), e;
  }
  function sn() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    return function (n, i, o) {
      if (i === "__v_isReactive") return !e;
      if (i === "__v_isReadonly") return e;
      if (i === "__v_raw" && o === (e ? t ? ki : un : t ? Ii : ln).get(n)) return n;
      let s = H(n);
      if (!e && s && xe(Jr, i)) return Reflect.get(Jr, i, o);
      let a = Reflect.get(n, i, o);
      return (Ve(i) ? on.has(i) : hi(i)) || (e || N(n, "get", i), t) ? a : It(a) ? !s || !qe(i) ? a.value : a : ye(a) ? e ? fn(a) : Qe(a) : a;
    };
  }
  var bi = wi();
  function wi() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    return function (r, n, i, o) {
      let s = r[n];
      if (!e && (i = h(i), s = h(s), !H(r) && It(s) && !It(i))) return s.value = i, !0;
      let a = H(r) && qe(n) ? Number(n) < r.length : xe(r, n),
        c = Reflect.set(r, n, i, o);
      return r === h(o) && (a ? Nt(i, s) && q(r, "set", n, i, s) : q(r, "add", n, i)), c;
    };
  }
  function Ei(e, t) {
    let r = xe(e, t),
      n = e[t],
      i = Reflect.deleteProperty(e, t);
    return i && r && q(e, "delete", t, void 0, n), i;
  }
  function vi(e, t) {
    let r = Reflect.has(e, t);
    return (!Ve(t) || !on.has(t)) && N(e, "has", t), r;
  }
  function Si(e) {
    return N(e, "iterate", H(e) ? "length" : Z), Reflect.ownKeys(e);
  }
  var Ai = {
      get: gi,
      set: bi,
      deleteProperty: Ei,
      has: vi,
      ownKeys: Si
    },
    Oi = {
      get: xi,
      set(e, t) {
        return console.warn("Set operation on key \"".concat(String(t), "\" failed: target is readonly."), e), !0;
      },
      deleteProperty(e, t) {
        return console.warn("Delete operation on key \"".concat(String(t), "\" failed: target is readonly."), e), !0;
      }
    };
  var Lt = e => ye(e) ? Qe(e) : e,
    $t = e => ye(e) ? fn(e) : e,
    jt = e => e,
    Ze = e => Reflect.getPrototypeOf(e);
  function We(e, t) {
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    let n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    e = e.__v_raw;
    let i = h(e),
      o = h(t);
    t !== o && !r && N(i, "get", t), !r && N(i, "get", o);
    let {
        has: s
      } = Ze(i),
      a = n ? jt : r ? $t : Lt;
    if (s.call(i, t)) return a(e.get(t));
    if (s.call(i, o)) return a(e.get(o));
    e !== i && e.get(t);
  }
  function Ge(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    let r = this.__v_raw,
      n = h(r),
      i = h(e);
    return e !== i && !t && N(n, "has", e), !t && N(n, "has", i), e === i ? r.has(e) : r.has(e) || r.has(i);
  }
  function Je(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    return e = e.__v_raw, !t && N(h(e), "iterate", Z), Reflect.get(e, "size", e);
  }
  function Yr(e) {
    e = h(e);
    let t = h(this);
    return Ze(t).has.call(t, e) || (t.add(e), q(t, "add", e, e)), this;
  }
  function Xr(e, t) {
    t = h(t);
    let r = h(this),
      {
        has: n,
        get: i
      } = Ze(r),
      o = n.call(r, e);
    o ? cn(r, n, e) : (e = h(e), o = n.call(r, e));
    let s = i.call(r, e);
    return r.set(e, t), o ? Nt(t, s) && q(r, "set", e, t, s) : q(r, "add", e, t), this;
  }
  function Zr(e) {
    let t = h(this),
      {
        has: r,
        get: n
      } = Ze(t),
      i = r.call(t, e);
    i ? cn(t, r, e) : (e = h(e), i = r.call(t, e));
    let o = n ? n.call(t, e) : void 0,
      s = t.delete(e);
    return i && q(t, "delete", e, void 0, o), s;
  }
  function Qr() {
    let e = h(this),
      t = e.size !== 0,
      r = ie(e) ? new Map(e) : new Set(e),
      n = e.clear();
    return t && q(e, "clear", void 0, void 0, r), n;
  }
  function Ye(e, t) {
    return function (n, i) {
      let o = this,
        s = o.__v_raw,
        a = h(s),
        c = t ? jt : e ? $t : Lt;
      return !e && N(a, "iterate", Z), s.forEach((l, u) => n.call(i, c(l), c(u), o));
    };
  }
  function Xe(e, t, r) {
    return function () {
      let i = this.__v_raw,
        o = h(i),
        s = ie(o),
        a = e === "entries" || e === Symbol.iterator && s,
        c = e === "keys" && s,
        l = i[e].apply(i, arguments),
        u = r ? jt : t ? $t : Lt;
      return !t && N(o, "iterate", c ? Pt : Z), {
        next() {
          let {
            value: p,
            done: m
          } = l.next();
          return m ? {
            value: p,
            done: m
          } : {
            value: a ? [u(p[0]), u(p[1])] : u(p),
            done: m
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function V(e) {
    return function () {
      {
        let r = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
        console.warn("".concat(Mt(e), " operation ").concat(r, "failed: target is readonly."), h(this));
      }
      return e === "delete" ? !1 : this;
    };
  }
  function Ci() {
    let e = {
        get(o) {
          return We(this, o);
        },
        get size() {
          return Je(this);
        },
        has: Ge,
        add: Yr,
        set: Xr,
        delete: Zr,
        clear: Qr,
        forEach: Ye(!1, !1)
      },
      t = {
        get(o) {
          return We(this, o, !1, !0);
        },
        get size() {
          return Je(this);
        },
        has: Ge,
        add: Yr,
        set: Xr,
        delete: Zr,
        clear: Qr,
        forEach: Ye(!1, !0)
      },
      r = {
        get(o) {
          return We(this, o, !0);
        },
        get size() {
          return Je(this, !0);
        },
        has(o) {
          return Ge.call(this, o, !0);
        },
        add: V("add"),
        set: V("set"),
        delete: V("delete"),
        clear: V("clear"),
        forEach: Ye(!0, !1)
      },
      n = {
        get(o) {
          return We(this, o, !0, !0);
        },
        get size() {
          return Je(this, !0);
        },
        has(o) {
          return Ge.call(this, o, !0);
        },
        add: V("add"),
        set: V("set"),
        delete: V("delete"),
        clear: V("clear"),
        forEach: Ye(!0, !0)
      };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
      e[o] = Xe(o, !1, !1), r[o] = Xe(o, !0, !1), t[o] = Xe(o, !1, !0), n[o] = Xe(o, !0, !0);
    }), [e, r, t, n];
  }
  var [Ti, Ri, Mi, Ni] = Ci();
  function an(e, t) {
    let r = t ? e ? Ni : Mi : e ? Ri : Ti;
    return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(xe(r, i) && i in n ? r : n, i, o);
  }
  var Di = {
    get: an(!1, !1)
  };
  var Pi = {
    get: an(!0, !1)
  };
  function cn(e, t, r) {
    let n = h(r);
    if (n !== r && t.call(e, n)) {
      let i = Rt(e);
      console.warn("Reactive ".concat(i, " contains both the raw and reactive versions of the same object").concat(i === "Map" ? " as keys" : "", ", which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible."));
    }
  }
  var ln = new WeakMap(),
    Ii = new WeakMap(),
    un = new WeakMap(),
    ki = new WeakMap();
  function Li(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function $i(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Li(Rt(e));
  }
  function Qe(e) {
    return e && e.__v_isReadonly ? e : dn(e, !1, Ai, Di, ln);
  }
  function fn(e) {
    return dn(e, !0, Oi, Pi, un);
  }
  function dn(e, t, r, n, i) {
    if (!ye(e)) return console.warn("value cannot be made reactive: ".concat(String(e))), e;
    if (e.__v_raw && !(t && e.__v_isReactive)) return e;
    let o = i.get(e);
    if (o) return o;
    let s = $i(e);
    if (s === 0) return e;
    let a = new Proxy(e, s === 2 ? n : r);
    return i.set(e, a), a;
  }
  function h(e) {
    return e && h(e.__v_raw) || e;
  }
  function It(e) {
    return Boolean(e && e.__v_isRef === !0);
  }
  y("nextTick", () => ne);
  y("dispatch", e => G.bind(G, e));
  y("watch", (e, _ref25) => {
    let {
      evaluateLater: t,
      cleanup: r
    } = _ref25;
    return (n, i) => {
      let o = t(n),
        a = ve(() => {
          let c;
          return o(l => c = l), c;
        }, i);
      r(a);
    };
  });
  y("store", Br);
  y("data", e => Ce(e));
  y("root", e => J(e));
  y("refs", e => (e._x_refs_proxy || (e._x_refs_proxy = F(ji(e))), e._x_refs_proxy));
  function ji(e) {
    let t = [];
    return z(e, r => {
      r._x_refs && t.push(r._x_refs);
    }), t;
  }
  var Ft = {};
  function Bt(e) {
    return Ft[e] || (Ft[e] = 0), ++Ft[e];
  }
  function pn(e, t) {
    return z(e, r => {
      if (r._x_ids && r._x_ids[t]) return !0;
    });
  }
  function mn(e, t) {
    e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Bt(t));
  }
  y("id", (e, _ref26) => {
    let {
      cleanup: t
    } = _ref26;
    return function (r) {
      let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      let i = "".concat(r).concat(n ? "-".concat(n) : "");
      return Fi(e, i, t, () => {
        let o = pn(e, r),
          s = o ? o._x_ids[r] : Bt(r);
        return n ? "".concat(r, "-").concat(s, "-").concat(n) : "".concat(r, "-").concat(s);
      });
    };
  });
  K((e, t) => {
    e._x_id && (t._x_id = e._x_id);
  });
  function Fi(e, t, r, n) {
    if (e._x_id || (e._x_id = {}), e._x_id[t]) return e._x_id[t];
    let i = n();
    return e._x_id[t] = i, r(() => {
      delete e._x_id[t];
    }), i;
  }
  y("el", e => e);
  _n("Focus", "focus", "focus");
  _n("Persist", "persist", "persist");
  function _n(e, t, r) {
    y(t, n => E("You can't use [$".concat(t, "] without first installing the \"").concat(e, "\" plugin here: https://alpinejs.dev/plugins/").concat(r), n));
  }
  d("modelable", (e, _ref27, _ref28) => {
    let {
      expression: t
    } = _ref27;
    let {
      effect: r,
      evaluateLater: n,
      cleanup: i
    } = _ref28;
    let o = n(t),
      s = () => {
        let u;
        return o(p => u = p), u;
      },
      a = n("".concat(t, " = __placeholder")),
      c = u => a(() => {}, {
        scope: {
          __placeholder: u
        }
      }),
      l = s();
    c(l), queueMicrotask(() => {
      if (!e._x_model) return;
      e._x_removeModelListeners.default();
      let u = e._x_model.get,
        p = e._x_model.set,
        m = He({
          get() {
            return u();
          },
          set(w) {
            p(w);
          }
        }, {
          get() {
            return s();
          },
          set(w) {
            c(w);
          }
        });
      i(m);
    });
  });
  d("teleport", (e, _ref29, _ref30) => {
    let {
      modifiers: t,
      expression: r
    } = _ref29;
    let {
      cleanup: n
    } = _ref30;
    e.tagName.toLowerCase() !== "template" && E("x-teleport can only be used on a <template> tag", e);
    let i = hn(r),
      o = e.content.cloneNode(!0).firstElementChild;
    e._x_teleport = o, o._x_teleportBack = e, e.setAttribute("data-teleport-template", !0), o.setAttribute("data-teleport-target", !0), e._x_forwardEvents && e._x_forwardEvents.forEach(a => {
      o.addEventListener(a, c => {
        c.stopPropagation(), e.dispatchEvent(new c.constructor(c.type, c));
      });
    }), P(o, {}, e);
    let s = (a, c, l) => {
      l.includes("prepend") ? c.parentNode.insertBefore(a, c) : l.includes("append") ? c.parentNode.insertBefore(a, c.nextSibling) : c.appendChild(a);
    };
    _(() => {
      s(o, i, t), A(() => {
        S(o), o._x_ignore = !0;
      })();
    }), e._x_teleportPutBack = () => {
      let a = hn(r);
      _(() => {
        s(e._x_teleport, a, t);
      });
    }, n(() => o.remove());
  });
  var Bi = document.createElement("div");
  function hn(e) {
    let t = A(() => document.querySelector(e), () => Bi)();
    return t || E("Cannot find x-teleport element for selector: \"".concat(e, "\"")), t;
  }
  var gn = () => {};
  gn.inline = (e, _ref31, _ref32) => {
    let {
      modifiers: t
    } = _ref31;
    let {
      cleanup: r
    } = _ref32;
    t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0, r(() => {
      t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
    });
  };
  d("ignore", gn);
  d("effect", A((e, _ref33, _ref34) => {
    let {
      expression: t
    } = _ref33;
    let {
      effect: r
    } = _ref34;
    r(x(e, t));
  }));
  function se(e, t, r, n) {
    let i = e,
      o = c => n(c),
      s = {},
      a = (c, l) => u => l(c, u);
    if (r.includes("dot") && (t = zi(t)), r.includes("camel") && (t = Ki(t)), r.includes("passive") && (s.passive = !0), r.includes("capture") && (s.capture = !0), r.includes("window") && (i = window), r.includes("document") && (i = document), r.includes("debounce")) {
      let c = r[r.indexOf("debounce") + 1] || "invalid-wait",
        l = et(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
      o = ze(o, l);
    }
    if (r.includes("throttle")) {
      let c = r[r.indexOf("throttle") + 1] || "invalid-wait",
        l = et(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
      o = Ke(o, l);
    }
    return r.includes("prevent") && (o = a(o, (c, l) => {
      l.preventDefault(), c(l);
    })), r.includes("stop") && (o = a(o, (c, l) => {
      l.stopPropagation(), c(l);
    })), r.includes("once") && (o = a(o, (c, l) => {
      c(l), i.removeEventListener(t, o, s);
    })), (r.includes("away") || r.includes("outside")) && (i = document, o = a(o, (c, l) => {
      e.contains(l.target) || l.target.isConnected !== !1 && (e.offsetWidth < 1 && e.offsetHeight < 1 || e._x_isShown !== !1 && c(l));
    })), r.includes("self") && (o = a(o, (c, l) => {
      l.target === e && c(l);
    })), (Vi(t) || yn(t)) && (o = a(o, (c, l) => {
      qi(l, r) || c(l);
    })), i.addEventListener(t, o, s), () => {
      i.removeEventListener(t, o, s);
    };
  }
  function zi(e) {
    return e.replace(/-/g, ".");
  }
  function Ki(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
  }
  function et(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function Hi(e) {
    return [" ", "_"].includes(e) ? e : e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function Vi(e) {
    return ["keydown", "keyup"].includes(e);
  }
  function yn(e) {
    return ["contextmenu", "click", "mouse"].some(t => e.includes(t));
  }
  function qi(e, t) {
    let r = t.filter(o => !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(o));
    if (r.includes("debounce")) {
      let o = r.indexOf("debounce");
      r.splice(o, et((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (r.includes("throttle")) {
      let o = r.indexOf("throttle");
      r.splice(o, et((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (r.length === 0 || r.length === 1 && xn(e.key).includes(r[0])) return !1;
    let i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(o => r.includes(o));
    return r = r.filter(o => !i.includes(o)), !(i.length > 0 && i.filter(s => ((s === "cmd" || s === "super") && (s = "meta"), e["".concat(s, "Key")])).length === i.length && (yn(e.type) || xn(e.key).includes(r[0])));
  }
  function xn(e) {
    if (!e) return [];
    e = Hi(e);
    let t = {
      ctrl: "control",
      slash: "/",
      space: " ",
      spacebar: " ",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      comma: ",",
      equal: "=",
      minus: "-",
      underscore: "_"
    };
    return t[e] = e, Object.keys(t).map(r => {
      if (t[r] === e) return r;
    }).filter(r => r);
  }
  d("model", (e, _ref35, _ref36) => {
    let {
      modifiers: t,
      expression: r
    } = _ref35;
    let {
      effect: n,
      cleanup: i
    } = _ref36;
    let o = e;
    t.includes("parent") && (o = e.parentNode);
    let s = x(o, r),
      a;
    typeof r == "string" ? a = x(o, "".concat(r, " = __placeholder")) : typeof r == "function" && typeof r() == "string" ? a = x(o, "".concat(r(), " = __placeholder")) : a = () => {};
    let c = () => {
        let m;
        return s(w => m = w), bn(m) ? m.get() : m;
      },
      l = m => {
        let w;
        s($ => w = $), bn(w) ? w.set(m) : a(() => {}, {
          scope: {
            __placeholder: m
          }
        });
      };
    typeof r == "string" && e.type === "radio" && _(() => {
      e.hasAttribute("name") || e.setAttribute("name", r);
    });
    var u = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
    let p = I ? () => {} : se(e, u, t, m => {
      l(zt(e, t, m, c()));
    });
    if (t.includes("fill") && ([void 0, null, ""].includes(c()) || e.type === "checkbox" && Array.isArray(c()) || e.tagName.toLowerCase() === "select" && e.multiple) && l(zt(e, t, {
      target: e
    }, c())), e._x_removeModelListeners || (e._x_removeModelListeners = {}), e._x_removeModelListeners.default = p, i(() => e._x_removeModelListeners.default()), e.form) {
      let m = se(e.form, "reset", [], w => {
        ne(() => e._x_model && e._x_model.set(zt(e, t, {
          target: e
        }, c())));
      });
      i(() => m());
    }
    e._x_model = {
      get() {
        return c();
      },
      set(m) {
        l(m);
      }
    }, e._x_forceModelUpdate = m => {
      m === void 0 && typeof r == "string" && r.match(/\./) && (m = ""), window.fromModel = !0, _(() => he(e, "value", m)), delete window.fromModel;
    }, n(() => {
      let m = c();
      t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate(m);
    });
  });
  function zt(e, t, r, n) {
    return _(() => {
      if (r instanceof CustomEvent && r.detail !== void 0) return r.detail !== null && r.detail !== void 0 ? r.detail : r.target.value;
      if (e.type === "checkbox") {
        if (Array.isArray(n)) {
          let i = null;
          return t.includes("number") ? i = Kt(r.target.value) : t.includes("boolean") ? i = ge(r.target.value) : i = r.target.value, r.target.checked ? n.includes(i) ? n : n.concat([i]) : n.filter(o => !Ui(o, i));
        } else return r.target.checked;
      } else {
        if (e.tagName.toLowerCase() === "select" && e.multiple) return t.includes("number") ? Array.from(r.target.selectedOptions).map(i => {
          let o = i.value || i.text;
          return Kt(o);
        }) : t.includes("boolean") ? Array.from(r.target.selectedOptions).map(i => {
          let o = i.value || i.text;
          return ge(o);
        }) : Array.from(r.target.selectedOptions).map(i => i.value || i.text);
        {
          let i;
          return e.type === "radio" ? r.target.checked ? i = r.target.value : i = n : i = r.target.value, t.includes("number") ? Kt(i) : t.includes("boolean") ? ge(i) : t.includes("trim") ? i.trim() : i;
        }
      }
    });
  }
  function Kt(e) {
    let t = e ? parseFloat(e) : null;
    return Wi(t) ? t : e;
  }
  function Ui(e, t) {
    return e == t;
  }
  function Wi(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function bn(e) {
    return e !== null && typeof e == "object" && typeof e.get == "function" && typeof e.set == "function";
  }
  d("cloak", e => queueMicrotask(() => _(() => e.removeAttribute(C("cloak")))));
  $e(() => "[".concat(C("init"), "]"));
  d("init", A((e, _ref37, _ref38) => {
    let {
      expression: t
    } = _ref37;
    let {
      evaluate: r
    } = _ref38;
    return typeof t == "string" ? !!t.trim() && r(t, {}, !1) : r(t, {}, !1);
  }));
  d("text", (e, _ref39, _ref40) => {
    let {
      expression: t
    } = _ref39;
    let {
      effect: r,
      evaluateLater: n
    } = _ref40;
    let i = n(t);
    r(() => {
      i(o => {
        _(() => {
          e.textContent = o;
        });
      });
    });
  });
  d("html", (e, _ref41, _ref42) => {
    let {
      expression: t
    } = _ref41;
    let {
      effect: r,
      evaluateLater: n
    } = _ref42;
    let i = n(t);
    r(() => {
      i(o => {
        _(() => {
          e.innerHTML = o, e._x_ignoreSelf = !0, S(e), delete e._x_ignoreSelf;
        });
      });
    });
  });
  re(Ie(":", ke(C("bind:"))));
  var wn = (e, _ref43, _ref44) => {
    let {
      value: t,
      modifiers: r,
      expression: n,
      original: i
    } = _ref43;
    let {
      effect: o,
      cleanup: s
    } = _ref44;
    if (!t) {
      let c = {};
      Hr(c), x(e, n)(u => {
        Ct(e, u, i);
      }, {
        scope: c
      });
      return;
    }
    if (t === "key") return Gi(e, n);
    if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract) return;
    let a = x(e, n);
    o(() => a(c => {
      c === void 0 && typeof n == "string" && n.match(/\./) && (c = ""), _(() => he(e, t, c, r));
    })), s(() => {
      e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedStyles && e._x_undoAddedStyles();
    });
  };
  wn.inline = (e, _ref45) => {
    let {
      value: t,
      modifiers: r,
      expression: n
    } = _ref45;
    t && (e._x_inlineBindings || (e._x_inlineBindings = {}), e._x_inlineBindings[t] = {
      expression: n,
      extract: !1
    });
  };
  d("bind", wn);
  function Gi(e, t) {
    e._x_keyExpression = t;
  }
  Le(() => "[".concat(C("data"), "]"));
  d("data", (e, _ref46, _ref47) => {
    let {
      expression: t
    } = _ref46;
    let {
      cleanup: r
    } = _ref47;
    if (Ji(e)) return;
    t = t === "" ? "{}" : t;
    let n = {};
    ue(n, e);
    let i = {};
    Ur(i, n);
    let o = M(e, t, {
      scope: i
    });
    (o === void 0 || o === !0) && (o = {}), ue(o, e);
    let s = R(o);
    Te(s);
    let a = P(e, s);
    s.init && M(e, s.init), r(() => {
      s.destroy && M(e, s.destroy), a();
    });
  });
  K((e, t) => {
    e._x_dataStack && (t._x_dataStack = e._x_dataStack, t.setAttribute("data-has-alpine-state", !0));
  });
  function Ji(e) {
    return I ? Be ? !0 : e.hasAttribute("data-has-alpine-state") : !1;
  }
  d("show", (e, _ref48, _ref49) => {
    let {
      modifiers: t,
      expression: r
    } = _ref48;
    let {
      effect: n
    } = _ref49;
    let i = x(e, r);
    e._x_doHide || (e._x_doHide = () => {
      _(() => {
        e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0);
      });
    }), e._x_doShow || (e._x_doShow = () => {
      _(() => {
        e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display");
      });
    });
    let o = () => {
        e._x_doHide(), e._x_isShown = !1;
      },
      s = () => {
        e._x_doShow(), e._x_isShown = !0;
      },
      a = () => setTimeout(s),
      c = me(p => p ? s() : o(), p => {
        typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, p, s, o) : p ? a() : o();
      }),
      l,
      u = !0;
    n(() => i(p => {
      !u && p === l || (t.includes("immediate") && (p ? a() : o()), c(p), l = p, u = !1);
    }));
  });
  d("for", (e, _ref50, _ref51) => {
    let {
      expression: t
    } = _ref50;
    let {
      effect: r,
      cleanup: n
    } = _ref51;
    let i = Xi(t),
      o = x(e, i.items),
      s = x(e, e._x_keyExpression || "index");
    e._x_prevKeys = [], e._x_lookup = {}, r(() => Yi(e, i, o, s)), n(() => {
      Object.values(e._x_lookup).forEach(a => a.remove()), delete e._x_prevKeys, delete e._x_lookup;
    });
  });
  function Yi(e, t, r, n) {
    let i = s => typeof s == "object" && !Array.isArray(s),
      o = e;
    r(s => {
      Zi(s) && s >= 0 && (s = Array.from(Array(s).keys(), f => f + 1)), s === void 0 && (s = []);
      let a = e._x_lookup,
        c = e._x_prevKeys,
        l = [],
        u = [];
      if (i(s)) s = Object.entries(s).map(_ref52 => {
        let [f, g] = _ref52;
        let b = En(t, g, f, s);
        n(v => {
          u.includes(v) && E("Duplicate key on x-for", e), u.push(v);
        }, {
          scope: _objectSpread({
            index: f
          }, b)
        }), l.push(b);
      });else for (let f = 0; f < s.length; f++) {
        let g = En(t, s[f], f, s);
        n(b => {
          u.includes(b) && E("Duplicate key on x-for", e), u.push(b);
        }, {
          scope: _objectSpread({
            index: f
          }, g)
        }), l.push(g);
      }
      let p = [],
        m = [],
        w = [],
        $ = [];
      for (let f = 0; f < c.length; f++) {
        let g = c[f];
        u.indexOf(g) === -1 && w.push(g);
      }
      c = c.filter(f => !w.includes(f));
      let we = "template";
      for (let f = 0; f < u.length; f++) {
        let g = u[f],
          b = c.indexOf(g);
        if (b === -1) c.splice(f, 0, g), p.push([we, f]);else if (b !== f) {
          let v = c.splice(f, 1)[0],
            O = c.splice(b - 1, 1)[0];
          c.splice(f, 0, O), c.splice(b, 0, v), m.push([v, O]);
        } else $.push(g);
        we = g;
      }
      for (let f = 0; f < w.length; f++) {
        let g = w[f];
        a[g]._x_effects && a[g]._x_effects.forEach(Ee), a[g].remove(), a[g] = null, delete a[g];
      }
      for (let f = 0; f < m.length; f++) {
        let [g, b] = m[f],
          v = a[g],
          O = a[b],
          Q = document.createElement("div");
        _(() => {
          O || E('x-for ":key" is undefined or invalid', o, b, a), O.after(Q), v.after(O), O._x_currentIfEl && O.after(O._x_currentIfEl), Q.before(v), v._x_currentIfEl && v.after(v._x_currentIfEl), Q.remove();
        }), O._x_refreshXForScope(l[u.indexOf(b)]);
      }
      for (let f = 0; f < p.length; f++) {
        let [g, b] = p[f],
          v = g === "template" ? o : a[g];
        v._x_currentIfEl && (v = v._x_currentIfEl);
        let O = l[b],
          Q = u[b],
          ae = document.importNode(o.content, !0).firstElementChild,
          Vt = R(O);
        P(ae, Vt, o), ae._x_refreshXForScope = Sn => {
          Object.entries(Sn).forEach(_ref53 => {
            let [An, On] = _ref53;
            Vt[An] = On;
          });
        }, _(() => {
          v.after(ae), A(() => S(ae))();
        }), typeof Q == "object" && E("x-for key cannot be an object, it must be a string or an integer", o), a[Q] = ae;
      }
      for (let f = 0; f < $.length; f++) a[$[f]]._x_refreshXForScope(l[u.indexOf($[f])]);
      o._x_prevKeys = u;
    });
  }
  function Xi(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      r = /^\s*\(|\)\s*$/g,
      n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
      i = e.match(n);
    if (!i) return;
    let o = {};
    o.items = i[2].trim();
    let s = i[1].replace(r, "").trim(),
      a = s.match(t);
    return a ? (o.item = s.replace(t, "").trim(), o.index = a[1].trim(), a[2] && (o.collection = a[2].trim())) : o.item = s, o;
  }
  function En(e, t, r, n) {
    let i = {};
    return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map(s => s.trim()).forEach((s, a) => {
      i[s] = t[a];
    }) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object" ? e.item.replace("{", "").replace("}", "").split(",").map(s => s.trim()).forEach(s => {
      i[s] = t[s];
    }) : i[e.item] = t, e.index && (i[e.index] = r), e.collection && (i[e.collection] = n), i;
  }
  function Zi(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function vn() {}
  vn.inline = (e, _ref54, _ref55) => {
    let {
      expression: t
    } = _ref54;
    let {
      cleanup: r
    } = _ref55;
    let n = J(e);
    n._x_refs || (n._x_refs = {}), n._x_refs[t] = e, r(() => delete n._x_refs[t]);
  };
  d("ref", vn);
  d("if", (e, _ref56, _ref57) => {
    let {
      expression: t
    } = _ref56;
    let {
      effect: r,
      cleanup: n
    } = _ref57;
    e.tagName.toLowerCase() !== "template" && E("x-if can only be used on a <template> tag", e);
    let i = x(e, t),
      o = () => {
        if (e._x_currentIfEl) return e._x_currentIfEl;
        let a = e.content.cloneNode(!0).firstElementChild;
        return P(a, {}, e), _(() => {
          e.after(a), A(() => S(a))();
        }), e._x_currentIfEl = a, e._x_undoIf = () => {
          T(a, c => {
            c._x_effects && c._x_effects.forEach(Ee);
          }), a.remove(), delete e._x_currentIfEl;
        }, a;
      },
      s = () => {
        e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
      };
    r(() => i(a => {
      a ? o() : s();
    })), n(() => e._x_undoIf && e._x_undoIf());
  });
  d("id", (e, _ref58, _ref59) => {
    let {
      expression: t
    } = _ref58;
    let {
      evaluate: r
    } = _ref59;
    r(t).forEach(i => mn(e, i));
  });
  K((e, t) => {
    e._x_ids && (t._x_ids = e._x_ids);
  });
  re(Ie("@", ke(C("on:"))));
  d("on", A((e, _ref60, _ref61) => {
    let {
      value: t,
      modifiers: r,
      expression: n
    } = _ref60;
    let {
      cleanup: i
    } = _ref61;
    let o = n ? x(e, n) : () => {};
    e.tagName.toLowerCase() === "template" && (e._x_forwardEvents || (e._x_forwardEvents = []), e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
    let s = se(e, t, r, a => {
      o(() => {}, {
        scope: {
          $event: a
        },
        params: [a]
      });
    });
    i(() => s());
  }));
  tt("Collapse", "collapse", "collapse");
  tt("Intersect", "intersect", "intersect");
  tt("Focus", "trap", "focus");
  tt("Mask", "mask", "mask");
  function tt(e, t, r) {
    d(t, n => E("You can't use [x-".concat(t, "] without first installing the \"").concat(e, "\" plugin here: https://alpinejs.dev/plugins/").concat(r), n));
  }
  B.setEvaluator(gt);
  B.setReactivityEngine({
    reactive: Qe,
    effect: en,
    release: tn,
    raw: h
  });
  var Ht = B;
  window.Alpine = Ht;
  queueMicrotask(() => {
    Ht.start();
  });
})();