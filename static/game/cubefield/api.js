/*
 * Project: @gamedistribution.com/html5-sdk
 * Description: GameDistribution.com HTML5 SDK
 * Development By: GameDistribution.com
 * Copyright(c): 2021
 * Version: 1.8.12 (21-02-2021 15:57)
 */
!(function i(o, r, a) {
	function s(e, t) {
		if (!r[e]) {
			if (!o[e]) {
				var n = 'function' == typeof require && require;
				if (!t && n) return n(e, !0);
				if (c) return c(e, !0);
				throw (((n = new Error("Cannot find module '" + e + "'")).code = 'MODULE_NOT_FOUND'), n);
			}
			(n = r[e] = { exports: {} }),
				o[e][0].call(
					n.exports,
					function (t) {
						return s(o[e][1][t] || t);
					},
					n,
					n.exports,
					i,
					o,
					r,
					a
				);
		}
		return r[e].exports;
	}
	for (var c = 'function' == typeof require && require, t = 0; t < a.length; t++) s(a[t]);
	return s;
})(
	{
		1: [
			function (t, e, n) {
				!function (ms) {
					!function () {
						!(function () {
							'use strict';
							var jt =
								'undefined' != typeof globalThis
									? globalThis
									: 'undefined' != typeof window
									? window
									: void 0 !== ms
									? ms
									: 'undefined' != typeof self
									? self
									: {};
							function t(t) {
								var e = { exports: {} };
								return t(e, e.exports), e.exports;
							}
							function l(t) {
								try {
									return !!t();
								} catch (t) {
									return !0;
								}
							}
							function i(t, e) {
								return {
									enumerable: !(1 & t),
									configurable: !(2 & t),
									writable: !(4 & t),
									value: e
								};
							}
							function o(t) {
								return b.call(t).slice(8, -1);
							}
							function d(t) {
								if (null == t) throw TypeError("Can't call method on " + t);
								return t;
							}
							function c(t) {
								return _(d(t));
							}
							function u(t) {
								return 'object' == typeof t ? null !== t : 'function' == typeof t;
							}
							function r(t, e) {
								if (!u(t)) return t;
								var n, i;
								if (e && 'function' == typeof (n = t.toString) && !u((i = n.call(t)))) return i;
								if ('function' == typeof (n = t.valueOf) && !u((i = n.call(t)))) return i;
								if (!e && 'function' == typeof (n = t.toString) && !u((i = n.call(t)))) return i;
								throw TypeError("Can't convert object to primitive value");
							}
							function p(t, e) {
								return y.call(t, e);
							}
							function a(t) {
								return w ? x.createElement(t) : {};
							}
							function A(t) {
								if (!u(t)) throw TypeError(String(t) + ' is not an object');
								return t;
							}
							function h(e, n) {
								try {
									T(f, e, n);
								} catch (t) {
									f[e] = n;
								}
								return n;
							}
							var n = t(function (e) {
									function n(t) {
										return (
											'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
												? (e.exports = n =
														function (t) {
															return typeof t;
														})
												: (e.exports = n =
														function (t) {
															return t &&
																'function' == typeof Symbol &&
																t.constructor === Symbol &&
																t !== Symbol.prototype
																? 'symbol'
																: typeof t;
														}),
											n(t)
										);
									}
									e.exports = n;
								}),
								f =
									(wn = function (t) {
										return t && t.Math == Math && t;
									})('object' == typeof globalThis && globalThis) ||
									wn('object' == typeof window && window) ||
									wn('object' == typeof self && self) ||
									wn('object' == typeof jt && jt) ||
									(function () {
										return this;
									})() ||
									Function('return this')(),
								s = !l(function () {
									return (
										7 !=
										Object.defineProperty({}, 1, {
											get: function () {
												return 7;
											}
										})[1]
									);
								}),
								e = {}.propertyIsEnumerable,
								g = Object.getOwnPropertyDescriptor,
								m = {
									f:
										g && !e.call({ 1: 2 }, 1)
											? function (t) {
													t = g(this, t);
													return !!t && t.enumerable;
											  }
											: e
								},
								b = {}.toString,
								v = ''.split,
								_ = l(function () {
									return !Object('z').propertyIsEnumerable(0);
								})
									? function (t) {
											return 'String' == o(t) ? v.call(t, '') : Object(t);
									  }
									: Object,
								y = {}.hasOwnProperty,
								x = f.document,
								w = u(x) && u(x.createElement),
								k =
									!s &&
									!l(function () {
										return (
											7 !=
											Object.defineProperty(a('div'), 'a', {
												get: function () {
													return 7;
												}
											}).a
										);
									}),
								E = Object.getOwnPropertyDescriptor,
								S = {
									f: s
										? E
										: function (t, e) {
												if (((t = c(t)), (e = r(e, !0)), k))
													try {
														return E(t, e);
													} catch (t) {}
												if (p(t, e)) return i(!m.f.call(t, e), t[e]);
										  }
								},
								D = Object.defineProperty,
								R = {
									f: s
										? D
										: function (t, e, n) {
												if ((A(t), (e = r(e, !0)), A(n), k))
													try {
														return D(t, e, n);
													} catch (t) {}
												if ('get' in n || 'set' in n) throw TypeError('Accessors not supported');
												return 'value' in n && (t[e] = n.value), t;
										  }
								},
								T = s
									? function (t, e, n) {
											return R.f(t, e, i(1, n));
									  }
									: function (t, e, n) {
											return (t[e] = n), t;
									  },
								L = f[(Dt = '__core-js_shared__')] || h(Dt, {}),
								C = Function.toString;
							function O(t) {
								return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++q + K).toString(36);
							}
							'function' != typeof L.inspectSource &&
								(L.inspectSource = function (t) {
									return C.call(t);
								});
							var P,
								I,
								j,
								B,
								M,
								z,
								N,
								U,
								G = L.inspectSource,
								F = 'function' == typeof (Tt = f.WeakMap) && /native code/.test(G(Tt)),
								H = t(function (t) {
									(t.exports = function (t, e) {
										return L[t] || (L[t] = void 0 !== e ? e : {});
									})('versions', []).push({
										version: '3.8.2',
										mode: 'global',
										copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
									});
								}),
								q = 0,
								K = Math.random(),
								V = H('keys'),
								W = function (t) {
									return V[t] || (V[t] = O(t));
								},
								$ = {},
								Y = f.WeakMap;
							function Z(t) {
								return 'function' == typeof t ? t : void 0;
							}
							function Q(t, e) {
								return arguments.length < 2
									? Z(ct[t]) || Z(f[t])
									: (ct[t] && ct[t][e]) || (f[t] && f[t][e]);
							}
							function J(t) {
								return isNaN((t = +t)) ? 0 : (0 < t ? dt : lt)(t);
							}
							function X(t) {
								return 0 < t ? ut(J(t), 9007199254740991) : 0;
							}
							function tt(t, e) {
								var n,
									i = c(t),
									o = 0,
									r = [];
								for (n in i) !p($, n) && p(i, n) && r.push(n);
								for (; e.length > o; ) p(i, (n = e[o++])) && (~ft(r, n) || r.push(n));
								return r;
							}
							function et(t, e) {
								for (var n = yt(e), i = R.f, o = S.f, r = 0; r < n.length; r++) {
									var a = n[r];
									p(t, a) || i(t, a, o(e, a));
								}
							}
							function nt(t) {
								return Object(d(t));
							}
							function it() {}
							function ot(t) {
								return '<script>' + t + '</script>';
							}
							N = F
								? ((P = L.state || (L.state = new Y())),
								  (I = P.get),
								  (j = P.has),
								  (B = P.set),
								  (M = function (t, e) {
										return (e.facade = t), B.call(P, t, e), e;
								  }),
								  (z = function (t) {
										return I.call(P, t) || {};
								  }),
								  function (t) {
										return j.call(P, t);
								  })
								: ((U = W('state')),
								  ($[U] = !0),
								  (M = function (t, e) {
										return (e.facade = t), T(t, U, e), e;
								  }),
								  (z = function (t) {
										return p(t, U) ? t[U] : {};
								  }),
								  function (t) {
										return p(t, U);
								  });
							var rt,
								at = {
									set: M,
									get: z,
									has: N,
									enforce: function (t) {
										return N(t) ? z(t) : M(t, {});
									},
									getterFor: function (n) {
										return function (t) {
											var e;
											if (!u(t) || (e = z(t)).type !== n)
												throw TypeError('Incompatible receiver, ' + n + ' required');
											return e;
										};
									}
								},
								st = t(function (t) {
									var e = at.get,
										s = at.enforce,
										c = String(String).split('String');
									(t.exports = function (t, e, n, i) {
										var o = !!i && !!i.unsafe,
											r = !!i && !!i.enumerable,
											a = !!i && !!i.noTargetGet;
										'function' == typeof n &&
											('string' != typeof e || p(n, 'name') || T(n, 'name', e),
											(i = s(n)).source || (i.source = c.join('string' == typeof e ? e : ''))),
											t !== f
												? (o ? !a && t[e] && (r = !0) : delete t[e], r ? (t[e] = n) : T(t, e, n))
												: r
												? (t[e] = n)
												: h(e, n);
									})(Function.prototype, 'toString', function () {
										return ('function' == typeof this && e(this).source) || G(this);
									});
								}),
								ct = f,
								lt = Math.ceil,
								dt = Math.floor,
								ut = Math.min,
								pt = Math.max,
								ht = Math.min,
								ft = (wn = {
									includes: (re = function (s) {
										return function (t, e, n) {
											var i,
												o = c(t),
												r = X(o.length),
												a = ((t = r), (n = J(n)) < 0 ? pt(n + t, 0) : ht(n, t));
											if (s && e != e) {
												for (; a < r; ) if ((i = o[a++]) != i) return !0;
											} else for (; a < r; a++) if ((s || a in o) && o[a] === e) return s || a || 0;
											return !s && -1;
										};
									})(!0),
									indexOf: re(!1)
								}).indexOf,
								gt = [
									'constructor',
									'hasOwnProperty',
									'isPrototypeOf',
									'propertyIsEnumerable',
									'toLocaleString',
									'toString',
									'valueOf'
								],
								mt = gt.concat('length', 'prototype'),
								bt = {
									f:
										Object.getOwnPropertyNames ||
										function (t) {
											return tt(t, mt);
										}
								},
								vt = { f: Object.getOwnPropertySymbols },
								yt =
									Q('Reflect', 'ownKeys') ||
									function (t) {
										var e = bt.f(A(t)),
											n = vt.f;
										return n ? e.concat(n(t)) : e;
									},
								_t = /#|\.prototype\./,
								xt = ((e = function (t, e) {
									t = wt[xt(t)];
									return t == Et || (t != kt && ('function' == typeof e ? l(e) : !!e));
								}).normalize = function (t) {
									return String(t).replace(_t, '.').toLowerCase();
								}),
								wt = (e.data = {}),
								kt = (e.NATIVE = 'N'),
								Et = (e.POLYFILL = 'P'),
								At = e,
								St = S.f,
								Dt = function (t, e) {
									var n,
										i,
										o,
										r,
										a = t.target,
										s = t.global,
										c = t.stat;
									if ((n = s ? f : c ? f[a] || h(a, {}) : (f[a] || {}).prototype))
										for (i in e) {
											if (
												((o = e[i]),
												(r = t.noTargetGet ? (r = St(n, i)) && r.value : n[i]),
												!At(s ? i : a + (c ? '.' : '#') + i, t.forced) && void 0 !== r)
											) {
												if (typeof o == typeof r) continue;
												et(o, r);
											}
											(t.sham || (r && r.sham)) && T(o, 'sham', !0), st(n, i, o, t);
										}
								},
								Rt =
									!!Object.getOwnPropertySymbols &&
									!l(function () {
										return !String(Symbol());
									}),
								Tt = Rt && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
								Lt =
									Array.isArray ||
									function (t) {
										return 'Array' == o(t);
									},
								Ct =
									Object.keys ||
									function (t) {
										return tt(t, gt);
									},
								Ot = s
									? Object.defineProperties
									: function (t, e) {
											A(t);
											for (var n, i = Ct(e), o = i.length, r = 0; r < o; )
												R.f(t, (n = i[r++]), e[n]);
											return t;
									  },
								Pt = Q('document', 'documentElement'),
								It = W('IE_PROTO'),
								Bt = function () {
									try {
										rt = document.domain && new ActiveXObject('htmlfile');
									} catch (t) {}
									var t, e;
									Bt = rt
										? (function (t) {
												t.write(ot('')), t.close();
												var e = t.parentWindow.Object;
												return (t = null), e;
										  })(rt)
										: (((e = a('iframe')).style.display = 'none'),
										  Pt.appendChild(e),
										  (e.src = String('javascript:')),
										  (t = e.contentWindow.document).open(),
										  t.write(ot('document.F=Object')),
										  t.close(),
										  t.F);
									for (var n = gt.length; n--; ) delete Bt.prototype[gt[n]];
									return Bt();
								};
							function Mt(t) {
								return (
									p(Wt, t) || (Rt && p($t, t) ? (Wt[t] = $t[t]) : (Wt[t] = Yt('Symbol.' + t))),
									Wt[t]
								);
							}
							function zt(t) {
								if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
								return t;
							}
							function Nt(i, o, t) {
								if ((zt(i), void 0 === o)) return i;
								switch (t) {
									case 0:
										return function () {
											return i.call(o);
										};
									case 1:
										return function (t) {
											return i.call(o, t);
										};
									case 2:
										return function (t, e) {
											return i.call(o, t, e);
										};
									case 3:
										return function (t, e, n) {
											return i.call(o, t, e, n);
										};
								}
								return function () {
									return i.apply(o, arguments);
								};
							}
							function Ut(t, e) {
								var n;
								return new (
									void 0 ===
									(n =
										Lt(t) &&
										(('function' == typeof (n = t.constructor) &&
											(n === Array || Lt(n.prototype))) ||
											(u(n) && null === (n = n[te])))
											? void 0
											: n)
										? Array
										: n
								)(0 === e ? 0 : e);
							}
							function Gt(t, e) {
								var n = (ge[t] = Ht(le.prototype));
								return ae(n, { type: oe, tag: t, description: e }), s || (n.description = e), n;
							}
							function Ft(e, t) {
								A(e);
								var n = c(t),
									t = Ct(n).concat(Ee(n));
								return (
									ne(t, function (t) {
										(s && !ke.call(n, t)) || we(e, t, n[t]);
									}),
									e
								);
							}
							$[It] = !0;
							var Ht =
									Object.create ||
									function (t, e) {
										var n;
										return (
											null !== t
												? ((it.prototype = A(t)),
												  (n = new it()),
												  (it.prototype = null),
												  (n[It] = t))
												: (n = Bt()),
											void 0 === e ? n : Ot(n, e)
										);
									},
								qt = bt.f,
								Kt = {}.toString,
								Vt =
									'object' == typeof window && window && Object.getOwnPropertyNames
										? Object.getOwnPropertyNames(window)
										: [],
								F = {
									f: function (t) {
										return Vt && '[object Window]' == Kt.call(t)
											? (function (t) {
													try {
														return qt(t);
													} catch (t) {
														return Vt.slice();
													}
											  })(t)
											: qt(c(t));
									}
								},
								Wt = H('wks'),
								$t = f.Symbol,
								Yt = Tt ? $t : ($t && $t.withoutSetter) || O,
								Zt = { f: Mt },
								Qt = R.f,
								Jt = R.f,
								Xt = Mt('toStringTag'),
								Y = function (t, e, n) {
									t &&
										!p((t = n ? t : t.prototype), Xt) &&
										Jt(t, Xt, { configurable: !0, value: e });
								},
								te = Mt('species'),
								ee = [].push,
								ne = (e = {
									forEach: (re = function (p) {
										var h = 1 == p,
											f = 2 == p,
											g = 3 == p,
											m = 4 == p,
											b = 6 == p,
											v = 7 == p,
											y = 5 == p || b;
										return function (t, e, n, i) {
											for (
												var o,
													r,
													a = nt(t),
													s = _(a),
													c = Nt(e, n, 3),
													l = X(s.length),
													d = 0,
													i = i || Ut,
													u = h ? i(t, l) : f || v ? i(t, 0) : void 0;
												d < l;
												d++
											)
												if ((y || d in s) && ((r = c((o = s[d]), d, a)), p))
													if (h) u[d] = r;
													else if (r)
														switch (p) {
															case 3:
																return !0;
															case 5:
																return o;
															case 6:
																return d;
															case 2:
																ee.call(u, o);
														}
													else
														switch (p) {
															case 4:
																return !1;
															case 7:
																ee.call(u, o);
														}
											return b ? -1 : g || m ? m : u;
										};
									})(0),
									map: re(1),
									filter: re(2),
									some: re(3),
									every: re(4),
									find: re(5),
									findIndex: re(6),
									filterOut: re(7)
								}).forEach,
								ie = W('hidden'),
								oe = 'Symbol',
								re = Mt('toPrimitive'),
								ae = at.set,
								se = at.getterFor(oe),
								ce = Object.prototype,
								le = f.Symbol,
								de = Q('JSON', 'stringify'),
								ue = S.f,
								pe = R.f,
								he = F.f,
								fe = m.f,
								ge = H('symbols'),
								me = H('op-symbols'),
								be = H('string-to-symbol-registry'),
								ve = H('symbol-to-string-registry'),
								W = H('wks'),
								ye = !(H = f.QObject) || !H.prototype || !H.prototype.findChild,
								_e =
									s &&
									l(function () {
										return (
											7 !=
											Ht(
												pe({}, 'a', {
													get: function () {
														return pe(this, 'a', { value: 7 }).a;
													}
												})
											).a
										);
									})
										? function (t, e, n) {
												var i = ue(ce, e);
												i && delete ce[e], pe(t, e, n), i && t !== ce && pe(ce, e, i);
										  }
										: pe,
								xe = Tt
									? function (t) {
											return 'symbol' == typeof t;
									  }
									: function (t) {
											return Object(t) instanceof le;
									  },
								we = function (t, e, n) {
									t === ce && we(me, e, n), A(t);
									e = r(e, !0);
									return (
										A(n),
										p(ge, e)
											? (n.enumerable
													? (p(t, ie) && t[ie][e] && (t[ie][e] = !1),
													  (n = Ht(n, { enumerable: i(0, !1) })))
													: (p(t, ie) || pe(t, ie, i(1, {})), (t[ie][e] = !0)),
											  _e(t, e, n))
											: pe(t, e, n)
									);
								},
								ke = function (t) {
									var e = r(t, !0),
										t = fe.call(this, e);
									return (
										!(this === ce && p(ge, e) && !p(me, e)) &&
										(!(t || !p(this, e) || !p(ge, e) || (p(this, ie) && this[ie][e])) || t)
									);
								},
								H = function (t, e) {
									var n = c(t),
										t = r(e, !0);
									if (n !== ce || !p(ge, t) || p(me, t)) {
										e = ue(n, t);
										return !e || !p(ge, t) || (p(n, ie) && n[ie][t]) || (e.enumerable = !0), e;
									}
								},
								Tt = function (t) {
									var t = he(c(t)),
										e = [];
									return (
										ne(t, function (t) {
											p(ge, t) || p($, t) || e.push(t);
										}),
										e
									);
								},
								Ee = function (t) {
									var e = t === ce,
										t = he(e ? me : c(t)),
										n = [];
									return (
										ne(t, function (t) {
											!p(ge, t) || (e && !p(ce, t)) || n.push(ge[t]);
										}),
										n
									);
								};
							Rt ||
								(st(
									(le = function () {
										if (this instanceof le) throw TypeError('Symbol is not a constructor');
										var t =
												arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
											e = O(t),
											n = function (t) {
												this === ce && n.call(me, t),
													p(this, ie) && p(this[ie], e) && (this[ie][e] = !1),
													_e(this, e, i(1, t));
											};
										return s && ye && _e(ce, e, { configurable: !0, set: n }), Gt(e, t);
									}).prototype,
									'toString',
									function () {
										return se(this).tag;
									}
								),
								st(le, 'withoutSetter', function (t) {
									return Gt(O(t), t);
								}),
								(m.f = ke),
								(R.f = we),
								(S.f = H),
								(bt.f = F.f = Tt),
								(vt.f = Ee),
								(Zt.f = function (t) {
									return Gt(Mt(t), t);
								}),
								s &&
									(pe(le.prototype, 'description', {
										configurable: !0,
										get: function () {
											return se(this).description;
										}
									}),
									st(ce, 'propertyIsEnumerable', ke, { unsafe: !0 }))),
								Dt({ global: !0, wrap: !0, forced: !Rt, sham: !Rt }, { Symbol: le }),
								ne(Ct(W), function (t) {
									var e;
									(e = t),
										(t = ct.Symbol || (ct.Symbol = {})),
										p(t, e) || Qt(t, e, { value: Zt.f(e) });
								}),
								Dt(
									{ target: oe, stat: !0, forced: !Rt },
									{
										for: function (t) {
											var e = String(t);
											if (p(be, e)) return be[e];
											t = le(e);
											return (be[e] = t), (ve[t] = e), t;
										},
										keyFor: function (t) {
											if (!xe(t)) throw TypeError(t + ' is not a symbol');
											if (p(ve, t)) return ve[t];
										},
										useSetter: function () {
											ye = !0;
										},
										useSimple: function () {
											ye = !1;
										}
									}
								),
								Dt(
									{ target: 'Object', stat: !0, forced: !Rt, sham: !s },
									{
										create: function (t, e) {
											return void 0 === e ? Ht(t) : Ft(Ht(t), e);
										},
										defineProperty: we,
										defineProperties: Ft,
										getOwnPropertyDescriptor: H
									}
								),
								Dt(
									{ target: 'Object', stat: !0, forced: !Rt },
									{ getOwnPropertyNames: Tt, getOwnPropertySymbols: Ee }
								),
								Dt(
									{
										target: 'Object',
										stat: !0,
										forced: l(function () {
											vt.f(1);
										})
									},
									{
										getOwnPropertySymbols: function (t) {
											return vt.f(nt(t));
										}
									}
								),
								de &&
									Dt(
										{
											target: 'JSON',
											stat: !0,
											forced:
												!Rt ||
												l(function () {
													var t = le();
													return (
														'[null]' != de([t]) || '{}' != de({ a: t }) || '{}' != de(Object(t))
													);
												})
										},
										{
											stringify: function (t, e, n) {
												for (var i, o = [t], r = 1; r < arguments.length; ) o.push(arguments[r++]);
												if ((u((i = e)) || void 0 !== t) && !xe(t))
													return (
														Lt(e) ||
															(e = function (t, e) {
																if (('function' == typeof i && (e = i.call(this, t, e)), !xe(e)))
																	return e;
															}),
														(o[1] = e),
														de.apply(null, o)
													);
											}
										}
									),
								le.prototype[re] || T(le.prototype, re, le.prototype.valueOf),
								Y(le, oe),
								($[ie] = !0);
							var Ae,
								Se,
								De,
								Re,
								Te,
								H = R.f,
								Le = f.Symbol;
							function Ce(t, e, n) {
								(e = r(e)) in t ? R.f(t, e, i(0, n)) : (t[e] = n);
							}
							!s ||
								'function' != typeof Le ||
								('description' in Le.prototype && void 0 === Le().description) ||
								((Ae = {}),
								et(
									(Se = function () {
										var t =
												arguments.length < 1 || void 0 === arguments[0]
													? void 0
													: String(arguments[0]),
											e = this instanceof Se ? new Le(t) : void 0 === t ? Le() : Le(t);
										return '' === t && (Ae[e] = !0), e;
									}),
									Le
								),
								((ze = Se.prototype = Le.prototype).constructor = Se),
								(De = ze.toString),
								(Re = 'Symbol(test)' == String(Le('test'))),
								(Te = /^Symbol\((.*)\)[^)]+$/),
								H(ze, 'description', {
									configurable: !0,
									get: function () {
										var t = u(this) ? this.valueOf() : this,
											e = De.call(t);
										if (p(Ae, t)) return '';
										e = Re ? e.slice(7, -1) : e.replace(Te, '$1');
										return '' === e ? void 0 : e;
									}
								}),
								Dt({ global: !0, forced: !0 }, { Symbol: Se }));
							(Tt = Q('navigator', 'userAgent') || ''), (H = (re = f.process) && re.versions);
							(ze = H && H.v8)
								? (He = (Ge = ze.split('.'))[0] + Ge[1])
								: Tt &&
								  (!(Ge = Tt.match(/Edge\/(\d+)/)) || 74 <= Ge[1]) &&
								  (Ge = Tt.match(/Chrome\/(\d+)/)) &&
								  (He = Ge[1]);
							var Oe = He && +He,
								Pe = Mt('species'),
								Ie = Mt('isConcatSpreadable'),
								je = 9007199254740991,
								Be = 'Maximum allowed index exceeded',
								re =
									51 <= Oe ||
									!l(function () {
										var t = [];
										return (t[Ie] = !1), t.concat()[0] !== t;
									}),
								H =
									51 <= Oe ||
									!l(function () {
										var t = [];
										return (
											((t.constructor = {})[Pe] = function () {
												return { foo: 1 };
											}),
											1 !== t.concat(Boolean).foo
										);
									});
							function Me(t) {
								throw t;
							}
							Dt(
								{ target: 'Array', proto: !0, forced: !re || !H },
								{
									concat: function (t) {
										for (
											var e, n, i, o = nt(this), r = Ut(o, 0), a = 0, s = -1, c = arguments.length;
											s < c;
											s++
										)
											if (
												(function (t) {
													if (!u(t)) return !1;
													var e = t[Ie];
													return void 0 !== e ? !!e : Lt(t);
												})((i = -1 === s ? o : arguments[s]))
											) {
												if (a + (n = X(i.length)) > je) throw TypeError(Be);
												for (e = 0; e < n; e++, a++) e in i && Ce(r, a, i[e]);
											} else {
												if (je <= a) throw TypeError(Be);
												Ce(r, a++, i);
											}
										return (r.length = a), r;
									}
								}
							);
							var ze = function (t, e) {
									var n = [][t];
									return (
										!!n &&
										l(function () {
											n.call(
												null,
												e ||
													function () {
														throw 1;
													},
												1
											);
										})
									);
								},
								Ne = Object.defineProperty,
								Ue = {},
								Ge = function (t, e) {
									if (p(Ue, t)) return Ue[t];
									var n = [][t],
										i = !!p((e = e || {}), 'ACCESSORS') && e.ACCESSORS,
										o = p(e, 0) ? e[0] : Me,
										r = p(e, 1) ? e[1] : void 0;
									return (Ue[t] =
										!!n &&
										!l(function () {
											if (i && !s) return 1;
											var t = { length: -1 };
											i ? Ne(t, 1, { enumerable: !0, get: Me }) : (t[1] = 1), n.call(t, o, r);
										}));
								},
								Fe = e.forEach,
								He = ze('forEach'),
								re = Ge('forEach'),
								qe =
									He && re
										? [].forEach
										: function (t) {
												return Fe(this, t, 1 < arguments.length ? arguments[1] : void 0);
										  };
							Dt({ target: 'Array', proto: !0, forced: [].forEach != qe }, { forEach: qe }),
								(H = Mt('unscopables')),
								null == (e = Array.prototype)[H] &&
									R.f(e, H, { configurable: !0, value: Ht(null) });
							var Ke = wn.includes;
							Dt(
								{ target: 'Array', proto: !0, forced: !Ge('indexOf', { ACCESSORS: !0, 1: 0 }) },
								{
									includes: function (t) {
										return Ke(this, t, 1 < arguments.length ? arguments[1] : void 0);
									}
								}
							),
								(e[H].includes = !0);
							var Ve = wn.indexOf,
								We = [].indexOf,
								$e = !!We && 1 / [1].indexOf(1, -0) < 0,
								He = ze('indexOf'),
								re = Ge('indexOf', { ACCESSORS: !0, 1: 0 });
							Dt(
								{ target: 'Array', proto: !0, forced: $e || !He || !re },
								{
									indexOf: function (t) {
										return $e
											? We.apply(this, arguments) || 0
											: Ve(this, t, 1 < arguments.length ? arguments[1] : void 0);
									}
								}
							);
							var e = R.f,
								Ye = (H = Function.prototype).toString,
								Ze = /^\s*function ([^ (]*)/;
							!s ||
								'name' in H ||
								e(H, 'name', {
									configurable: !0,
									get: function () {
										try {
											return Ye.call(this).match(Ze)[1];
										} catch (t) {
											return '';
										}
									}
								}),
								((wn = {})[Mt('toStringTag')] = 'z');
							var ze = '[object z]' === String(wn),
								Qe = Mt('toStringTag'),
								Je =
									'Arguments' ==
									o(
										(function () {
											return arguments;
										})()
									),
								Xe = ze
									? o
									: function (t) {
											var e;
											return void 0 === t
												? 'Undefined'
												: null === t
												? 'Null'
												: 'string' ==
												  typeof (t = (function (t, e) {
														try {
															return t[e];
														} catch (t) {}
												  })((e = Object(t)), Qe))
												? t
												: Je
												? o(e)
												: 'Object' == (t = o(e)) && 'function' == typeof e.callee
												? 'Arguments'
												: t;
									  },
								Ge = ze
									? {}.toString
									: function () {
											return '[object ' + Xe(this) + ']';
									  };
							function tn(t) {
								var e = t.return;
								return void 0 !== e && A(e.call(t)).value;
							}
							function en(t, e) {
								(this.stopped = t), (this.result = e);
							}
							function nn(t, e, n) {
								function i(t) {
									return r && tn(r), new en(!0, t);
								}
								function o(t) {
									return p ? (A(t), f ? g(t[0], t[1], i) : g(t[0], t[1])) : f ? g(t, i) : g(t);
								}
								var r,
									a,
									s,
									c,
									l,
									d,
									u = n && n.that,
									p = !(!n || !n.AS_ENTRIES),
									h = !(!n || !n.IS_ITERATOR),
									f = !(!n || !n.INTERRUPTED),
									g = Nt(e, u, 1 + p + f);
								if (h) r = t;
								else {
									if (
										'function' !=
										typeof (h = (function () {
											if (null != t) return t[ln] || t['@@iterator'] || an[Xe(t)];
										})())
									)
										throw TypeError('Target is not iterable');
									if (void 0 !== h && (an.Array === h || cn[sn] === h)) {
										for (a = 0, s = X(t.length); a < s; a++)
											if ((c = o(t[a])) && c instanceof en) return c;
										return new en(!1);
									}
									r = h.call(t);
								}
								for (l = r.next; !(d = l.call(r)).done; ) {
									try {
										c = o(d.value);
									} catch (t) {
										throw (tn(r), t);
									}
									if ('object' == typeof c && c && c instanceof en) return c;
								}
								return new en(!1);
							}
							ze || st(Object.prototype, 'toString', Ge, { unsafe: !0 });
							var on = f.Promise,
								rn = Mt('species'),
								He = function (t) {
									var e = Q(t),
										t = R.f;
									s &&
										e &&
										!e[rn] &&
										t(e, rn, {
											configurable: !0,
											get: function () {
												return this;
											}
										});
								},
								an = {},
								sn = Mt('iterator'),
								cn = Array.prototype,
								ln = Mt('iterator'),
								dn = Mt('iterator'),
								un = !1;
							try {
								var pn = 0,
									hn = {
										next: function () {
											return { done: !!pn++ };
										},
										return: function () {
											un = !0;
										}
									};
								(hn[dn] = function () {
									return this;
								}),
									Array.from(hn, function () {
										throw 2;
									});
							} catch (jt) {}
							function fn(t, e) {
								var n;
								return void 0 === (t = A(t).constructor) || null == (n = A(t)[vn]) ? e : zt(n);
							}
							function gn(t) {
								var e;
								An.hasOwnProperty(t) && ((e = An[t]), delete An[t], e());
							}
							function mn(t) {
								return function () {
									gn(t);
								};
							}
							var bn,
								vn = Mt('species'),
								re = /(iphone|ipod|ipad).*applewebkit/i.test(Tt),
								yn = 'process' == o(f.process),
								_n = f.location,
								e = f.setImmediate,
								H = f.clearImmediate,
								xn = f.process,
								wn = f.MessageChannel,
								kn = f.Dispatch,
								En = 0,
								An = {},
								ze = function (t) {
									gn(t.data);
								},
								Ge = function (t) {
									f.postMessage(t + '', _n.protocol + '//' + _n.host);
								};
							(e && H) ||
								((e = function (t) {
									for (var e = [], n = 1; n < arguments.length; ) e.push(arguments[n++]);
									return (
										(An[++En] = function () {
											('function' == typeof t ? t : Function(t)).apply(void 0, e);
										}),
										bn(En),
										En
									);
								}),
								(H = function (t) {
									delete An[t];
								}),
								yn
									? (bn = function (t) {
											xn.nextTick(mn(t));
									  })
									: kn && kn.now
									? (bn = function (t) {
											kn.now(mn(t));
									  })
									: wn && !re
									? ((In = (wn = new wn()).port2),
									  (wn.port1.onmessage = ze),
									  (bn = Nt(In.postMessage, In, 1)))
									: f.addEventListener &&
									  'function' == typeof postMessage &&
									  !f.importScripts &&
									  _n &&
									  'file:' !== _n.protocol &&
									  !l(Ge)
									? ((bn = Ge), f.addEventListener('message', ze, !1))
									: (bn =
											'onreadystatechange' in a('script')
												? function (t) {
														Pt.appendChild(a('script')).onreadystatechange = function () {
															Pt.removeChild(this), gn(t);
														};
												  }
												: function (t) {
														setTimeout(mn(t), 0);
												  }));
							var Sn,
								Dn,
								Rn,
								Tn,
								Ln,
								Cn,
								On,
								Pn,
								In = { set: e, clear: H },
								Ge = /web0s(?!.*chrome)/i.test(Tt),
								ze = S.f,
								jn = In.set,
								e = f.MutationObserver || f.WebKitMutationObserver,
								H = f.document,
								Bn = f.process,
								Tt = f.Promise;
							function Mn(t) {
								var n, i;
								(this.promise = new t(function (t, e) {
									if (void 0 !== n || void 0 !== i) throw TypeError('Bad Promise constructor');
									(n = t), (i = e);
								})),
									(this.resolve = zt(n)),
									(this.reject = zt(i));
							}
							function zn(t, e) {
								return (
									A(t), u(e) && e.constructor === t ? e : ((0, (t = Zn.f(t)).resolve)(e), t.promise)
								);
							}
							function Nn(t) {
								try {
									return { error: !1, value: t() };
								} catch (t) {
									return { error: !0, value: t };
								}
							}
							function Un(t) {
								var e;
								return !(!u(t) || 'function' != typeof (e = t.then)) && e;
							}
							function Gn(u, p) {
								var h;
								u.notified ||
									((u.notified = !0),
									(h = u.reactions),
									Yn(function () {
										for (var t = u.value, e = 1 == u.state, n = 0; h.length > n; ) {
											var i,
												o,
												r,
												a = h[n++],
												s = e ? a.ok : a.fail,
												c = a.resolve,
												l = a.reject,
												d = a.domain;
											try {
												s
													? (e || (2 === u.rejection && gi(u), (u.rejection = 1)),
													  !0 === s
															? (i = t)
															: (d && d.enter(), (i = s(t)), d && (d.exit(), (r = !0))),
													  i === a.promise
															? l(oi('Promise-chain cycle'))
															: (o = Un(i))
															? o.call(i, c, l)
															: c(i))
													: l(t);
											} catch (t) {
												d && !r && d.exit(), l(t);
											}
										}
										(u.reactions = []), (u.notified = !1), p && !u.rejection && hi(u);
									}));
							}
							function Fn(t, e, n) {
								var i, o;
								di
									? (((i = ri.createEvent('Event')).promise = e),
									  (i.reason = n),
									  i.initEvent(t, !1, !0),
									  f.dispatchEvent(i))
									: (i = { promise: e, reason: n }),
									!ui && (o = f['on' + t])
										? o(i)
										: t === pi &&
										  (function (t, e) {
												var n = f.console;
												n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
										  })('Unhandled promise rejection', n);
							}
							function Hn(e, n, i) {
								return function (t) {
									e(n, t, i);
								};
							}
							function qn(t, e, n) {
								t.done || ((t.done = !0), ((t = n ? n : t).value = e), (t.state = 2), Gn(t, !0));
							}
							(ze = (ze = ze(f, 'queueMicrotask')) && ze.value) ||
								((Sn = function () {
									var t, e;
									for (yn && (t = Bn.domain) && t.exit(); Dn; ) {
										(e = Dn.fn), (Dn = Dn.next);
										try {
											e();
										} catch (t) {
											throw (Dn ? Tn() : (Rn = void 0), t);
										}
									}
									(Rn = void 0), t && t.enter();
								}),
								(Tn =
									re || yn || Ge || !e || !H
										? Tt && Tt.resolve
											? ((On = Tt.resolve(void 0)),
											  (Pn = On.then),
											  function () {
													Pn.call(On, Sn);
											  })
											: yn
											? function () {
													Bn.nextTick(Sn);
											  }
											: function () {
													jn.call(f, Sn);
											  }
										: ((Ln = !0),
										  (Cn = H.createTextNode('')),
										  new e(Sn).observe(Cn, { characterData: !0 }),
										  function () {
												Cn.data = Ln = !Ln;
										  })));
							var Kn,
								Vn,
								Wn,
								$n,
								Yn =
									ze ||
									function (t) {
										t = { fn: t, next: void 0 };
										Rn && (Rn.next = t), Dn || ((Dn = t), Tn()), (Rn = t);
									},
								Zn = {
									f: function (t) {
										return new Mn(t);
									}
								},
								Qn = In.set,
								Jn = Mt('species'),
								Xn = 'Promise',
								ti = at.get,
								ei = at.set,
								ni = at.getterFor(Xn),
								ii = on,
								oi = f.TypeError,
								ri = f.document,
								ai = f.process,
								si = Q('fetch'),
								ci = Zn.f,
								li = ci,
								di = !!(ri && ri.createEvent && f.dispatchEvent),
								ui = 'function' == typeof PromiseRejectionEvent,
								pi = 'unhandledrejection',
								In =
									(ze = At(Xn, function () {
										if (G(ii) === String(ii)) {
											if (66 === Oe) return !0;
											if (!yn && !ui) return !0;
										}
										if (51 <= Oe && /native code/.test(ii)) return !1;
										function t(t) {
											t(
												function () {},
												function () {}
											);
										}
										var e = ii.resolve(1);
										return ((e.constructor = {})[Jn] = t), !(e.then(function () {}) instanceof t);
									})) ||
									!(function () {
										if (un) {
											var t = !1;
											try {
												var e = {};
												(e[dn] = function () {
													return {
														next: function () {
															return { done: (t = !0) };
														}
													};
												}),
													(e = e),
													ii.all(e).catch(function () {});
											} catch (t) {}
											return t;
										}
									})(),
								hi = function (i) {
									Qn.call(f, function () {
										var t,
											e = i.facade,
											n = i.value;
										if (
											fi(i) &&
											((t = Nn(function () {
												yn ? ai.emit('unhandledRejection', n, e) : Fn(pi, e, n);
											})),
											(i.rejection = yn || fi(i) ? 2 : 1),
											t.error)
										)
											throw t.value;
									});
								},
								fi = function (t) {
									return 1 !== t.rejection && !t.parent;
								},
								gi = function (e) {
									Qn.call(f, function () {
										var t = e.facade;
										yn ? ai.emit('rejectionHandled', t) : Fn('rejectionhandled', t, e.value);
									});
								},
								mi = function (n, t, e) {
									if (!n.done) {
										(n.done = !0), e && (n = e);
										try {
											if (n.facade === t) throw oi("Promise can't be resolved itself");
											var i = Un(t);
											i
												? Yn(function () {
														var e = { done: !1 };
														try {
															i.call(t, Hn(mi, e, n), Hn(qn, e, n));
														} catch (t) {
															qn(e, t, n);
														}
												  })
												: ((n.value = t), (n.state = 1), Gn(n, !1));
										} catch (t) {
											qn({ done: !1 }, t, n);
										}
									}
								};
							function bi(t) {
								var e;
								return u(t) && (void 0 !== (e = t[_i]) ? !!e : 'RegExp' == o(t));
							}
							function vi() {
								var t = A(this),
									e = '';
								return (
									t.global && (e += 'g'),
									t.ignoreCase && (e += 'i'),
									t.multiline && (e += 'm'),
									t.dotAll && (e += 's'),
									t.unicode && (e += 'u'),
									t.sticky && (e += 'y'),
									e
								);
							}
							ze &&
								((ii = function (t) {
									!(function (t, e) {
										if (!(t instanceof ii)) throw TypeError('Incorrect ' + e + ' invocation');
									})(this, Xn),
										zt(t),
										Kn.call(this);
									var e = ti(this);
									try {
										t(Hn(mi, e), Hn(qn, e));
									} catch (t) {
										qn(e, t);
									}
								}),
								((Kn = function (t) {
									ei(this, {
										type: Xn,
										done: !1,
										notified: !1,
										parent: !1,
										reactions: [],
										rejection: !1,
										state: 0,
										value: void 0
									});
								}).prototype = (function (t, e) {
									for (var n in e) st(t, n, e[n], void 0);
									return t;
								})(ii.prototype, {
									then: function (t, e) {
										var n = ni(this),
											i = ci(fn(this, ii));
										return (
											(i.ok = 'function' != typeof t || t),
											(i.fail = 'function' == typeof e && e),
											(i.domain = yn ? ai.domain : void 0),
											(n.parent = !0),
											n.reactions.push(i),
											0 != n.state && Gn(n, !1),
											i.promise
										);
									},
									catch: function (t) {
										return this.then(void 0, t);
									}
								})),
								(Vn = function () {
									var t = new Kn(),
										e = ti(t);
									(this.promise = t), (this.resolve = Hn(mi, e)), (this.reject = Hn(qn, e));
								}),
								(Zn.f = ci =
									function (t) {
										return t === ii || t === Wn ? new Vn() : li(t);
									}),
								'function' == typeof on &&
									(($n = on.prototype.then),
									st(
										on.prototype,
										'then',
										function (t, e) {
											var n = this;
											return new ii(function (t, e) {
												$n.call(n, t, e);
											}).then(t, e);
										},
										{ unsafe: !0 }
									),
									'function' == typeof si &&
										Dt(
											{ global: !0, enumerable: !0, forced: !0 },
											{
												fetch: function (t) {
													return zn(ii, si.apply(f, arguments));
												}
											}
										))),
								Dt({ global: !0, wrap: !0, forced: ze }, { Promise: ii }),
								Y(ii, Xn, !1),
								He(Xn),
								(Wn = Q(Xn)),
								Dt(
									{ target: Xn, stat: !0, forced: ze },
									{
										reject: function (t) {
											var e = ci(this);
											return e.reject.call(void 0, t), e.promise;
										}
									}
								),
								Dt(
									{ target: Xn, stat: !0, forced: ze },
									{
										resolve: function (t) {
											return zn(this, t);
										}
									}
								),
								Dt(
									{ target: Xn, stat: !0, forced: In },
									{
										all: function (t) {
											var s = this,
												e = ci(s),
												c = e.resolve,
												l = e.reject,
												n = Nn(function () {
													var i = zt(s.resolve),
														o = [],
														r = 0,
														a = 1;
													nn(t, function (t) {
														var e = r++,
															n = !1;
														o.push(void 0),
															a++,
															i.call(s, t).then(function (t) {
																n || ((n = !0), (o[e] = t), --a || c(o));
															}, l);
													}),
														--a || c(o);
												});
											return n.error && l(n.value), e.promise;
										},
										race: function (t) {
											var n = this,
												i = ci(n),
												o = i.reject,
												e = Nn(function () {
													var e = zt(n.resolve);
													nn(t, function (t) {
														e.call(n, t).then(i.resolve, o);
													});
												});
											return e.error && o(e.value), i.promise;
										}
									}
								),
								Dt(
									{
										target: 'Promise',
										proto: !0,
										real: !0,
										forced:
											!!on &&
											l(function () {
												on.prototype.finally.call({ then: function () {} }, function () {});
											})
									},
									{
										finally: function (e) {
											var n = fn(this, Q('Promise')),
												t = 'function' == typeof e;
											return this.then(
												t
													? function (t) {
															return zn(n, e()).then(function () {
																return t;
															});
													  }
													: e,
												t
													? function (t) {
															return zn(n, e()).then(function () {
																throw t;
															});
													  }
													: e
											);
										}
									}
								),
								'function' != typeof on ||
									on.prototype.finally ||
									st(on.prototype, 'finally', Q('Promise').prototype.finally);
							var yi =
									Object.setPrototypeOf ||
									('__proto__' in {}
										? (function () {
												var n,
													i = !1,
													t = {};
												try {
													(n = Object.getOwnPropertyDescriptor(
														Object.prototype,
														'__proto__'
													).set).call(t, []),
														(i = t instanceof Array);
												} catch (n) {}
												return function (t, e) {
													return (
														A(t),
														(function () {
															if (!u(e) && null !== e)
																throw TypeError("Can't set " + String(e) + ' as a prototype');
														})(),
														i ? n.call(t, e) : (t.__proto__ = e),
														t
													);
												};
										  })()
										: void 0),
								_i = Mt('match');
							function xi(t, e) {
								return RegExp(t, e);
							}
							var Y = {
									UNSUPPORTED_Y: l(function () {
										var t = xi('a', 'y');
										return (t.lastIndex = 2), null != t.exec('abcd');
									}),
									BROKEN_CARET: l(function () {
										var t = xi('^r', 'gy');
										return (t.lastIndex = 2), null != t.exec('str');
									})
								},
								wi = R.f,
								ze = bt.f,
								ki = at.set,
								Ei = Mt('match'),
								Ai = f.RegExp,
								Si = Ai.prototype,
								Di = /a/g,
								Ri = /a/g,
								Ti = new Ai(Di) !== Di,
								Li = Y.UNSUPPORTED_Y;
							if (
								s &&
								At(
									'RegExp',
									!Ti ||
										Li ||
										l(function () {
											return (Ri[Ei] = !1), Ai(Di) != Di || Ai(Ri) == Ri || '/a/i' != Ai(Di, 'i');
										})
								)
							) {
								for (
									var Ci = function (t, e) {
											var n,
												i = this instanceof Ci,
												o = bi(t),
												r = void 0 === e;
											if (!i && o && t.constructor === Ci && r) return t;
											Ti
												? o && !r && (t = t.source)
												: t instanceof Ci && (r && (e = vi.call(t)), (t = t.source)),
												Li && (n = !!e && -1 < e.indexOf('y')) && (e = e.replace(/y/g, ''));
											var a,
												s,
												e =
													((e = Ti ? new Ai(t, e) : Ai(t, e)),
													yi &&
														'function' == typeof (a = (i ? this : Si).constructor) &&
														a !== Ci &&
														u((s = a.prototype)) &&
														s !== Ci.prototype &&
														yi(e, s),
													e);
											return Li && n && ki(e, { sticky: n }), e;
										},
										Oi = ze(Ai),
										Pi = 0;
									Oi.length > Pi;

								)
									!(function (e) {
										e in Ci ||
											wi(Ci, e, {
												configurable: !0,
												get: function () {
													return Ai[e];
												},
												set: function (t) {
													Ai[e] = t;
												}
											});
									})(Oi[Pi++]);
								((Si.constructor = Ci).prototype = Si), st(f, 'RegExp', Ci);
							}
							He('RegExp');
							var Ii = RegExp.prototype.exec,
								ji = String.prototype.replace,
								In = Ii,
								Bi =
									((ze = /a/),
									(He = /b*/g),
									Ii.call(ze, 'a'),
									Ii.call(He, 'a'),
									0 !== ze.lastIndex || 0 !== He.lastIndex),
								Mi = Y.UNSUPPORTED_Y || Y.BROKEN_CARET,
								zi = void 0 !== /()??/.exec('')[1],
								Ni = (In =
									Bi || zi || Mi
										? function (t) {
												var e,
													n,
													i,
													o,
													r = this,
													a = Mi && r.sticky,
													s = vi.call(r),
													c = r.source,
													l = 0,
													d = t;
												return (
													a &&
														(-1 === (s = s.replace('y', '')).indexOf('g') && (s += 'g'),
														(d = String(t).slice(r.lastIndex)),
														0 < r.lastIndex &&
															(!r.multiline || (r.multiline && '\n' !== t[r.lastIndex - 1])) &&
															((c = '(?: ' + c + ')'), (d = ' ' + d), l++),
														(n = new RegExp('^(?:' + c + ')', s))),
													zi && (n = new RegExp('^' + c + '$(?!\\s)', s)),
													Bi && (e = r.lastIndex),
													(i = Ii.call(a ? n : r, d)),
													a
														? i
															? ((i.input = i.input.slice(l)),
															  (i[0] = i[0].slice(l)),
															  (i.index = r.lastIndex),
															  (r.lastIndex += i[0].length))
															: (r.lastIndex = 0)
														: Bi && i && (r.lastIndex = r.global ? i.index + i[0].length : e),
													zi &&
														i &&
														1 < i.length &&
														ji.call(i[0], n, function () {
															for (o = 1; o < arguments.length - 2; o++)
																void 0 === arguments[o] && (i[o] = void 0);
														}),
													i
												);
										  }
										: In);
							Dt({ target: 'RegExp', proto: !0, forced: /./.exec !== Ni }, { exec: Ni });
							var He = 'toString',
								Ui = RegExp.prototype,
								Gi = Ui.toString,
								Y = l(function () {
									return '/a/b' != Gi.call({ source: 'a', flags: 'b' });
								}),
								In = Gi.name != He;
							function Fi(t) {
								if (bi(t)) throw TypeError("The method doesn't accept regular expressions");
								return t;
							}
							(Y || In) &&
								st(
									RegExp.prototype,
									He,
									function () {
										var t = A(this),
											e = String(t.source),
											n = t.flags;
										return (
											'/' +
											e +
											'/' +
											String(
												void 0 === n && t instanceof RegExp && !('flags' in Ui) ? vi.call(t) : n
											)
										);
									},
									{ unsafe: !0 }
								);
							var Hi = Mt('match');
							function qi(t, e, n) {
								return e + (n ? Qi(t, e).length : 1);
							}
							function Ki(t, e) {
								var n = t.exec;
								if ('function' == typeof n) {
									n = n.call(t, e);
									if ('object' != typeof n)
										throw TypeError(
											'RegExp exec method returned something other than an Object or null'
										);
									return n;
								}
								if ('RegExp' !== o(t))
									throw TypeError('RegExp#exec called on incompatible receiver');
								return Ni.call(t, e);
							}
							Dt(
								{
									target: 'String',
									proto: !0,
									forced: !(Y = function (e) {
										var n = /./;
										try {
											'/./'[e](n);
										} catch (t) {
											try {
												return (n[Hi] = !1), '/./'[e](n);
											} catch (e) {}
										}
										return !1;
									})('includes')
								},
								{
									includes: function (t) {
										return !!~String(d(this)).indexOf(
											Fi(t),
											1 < arguments.length ? arguments[1] : void 0
										);
									}
								}
							);
							var Vi = Mt('species'),
								Wi = !l(function () {
									var t = /./;
									return (
										(t.exec = function () {
											var t = [];
											return (t.groups = { a: '7' }), t;
										}),
										'7' !== ''.replace(t, '$<a>')
									);
								}),
								$i = '$0' === 'a'.replace(/./, '$0'),
								Yi = !!/./[(In = Mt('replace'))] && '' === /./[In]('a', '$0'),
								Zi = !l(function () {
									var t = /(?:)/,
										e = t.exec;
									t.exec = function () {
										return e.apply(this, arguments);
									};
									t = 'ab'.split(t);
									return 2 !== t.length || 'a' !== t[0] || 'b' !== t[1];
								}),
								He = function (n, t, e, i) {
									var r,
										o,
										a = Mt(n),
										s = !l(function () {
											var t = {};
											return (
												(t[a] = function () {
													return 7;
												}),
												7 != ''[n](t)
											);
										}),
										c =
											s &&
											!l(function () {
												var t = !1,
													e = /a/;
												return (
													'split' === n &&
														(((e = {}).constructor = {}),
														(e.constructor[Vi] = function () {
															return e;
														}),
														(e.flags = ''),
														(e[a] = /./[a])),
													(e.exec = function () {
														return (t = !0), null;
													}),
													e[a](''),
													!t
												);
											});
									(s && c && ('replace' !== n || (Wi && $i && !Yi)) && ('split' !== n || Zi)) ||
										((r = /./[a]),
										(e = (c = e(
											a,
											''[n],
											function (t, e, n, i, o) {
												return e.exec === Ni
													? s && !o
														? { done: !0, value: r.call(e, n, i) }
														: { done: !0, value: t.call(n, e, i) }
													: { done: !1 };
											},
											{ REPLACE_KEEPS_$0: $i, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Yi }
										))[0]),
										(o = c[1]),
										st(String.prototype, n, e),
										st(
											RegExp.prototype,
											a,
											2 == t
												? function (t, e) {
														return o.call(t, this, e);
												  }
												: function (t) {
														return o.call(t, this);
												  }
										)),
										i && T(RegExp.prototype[a], 'sham', !0);
								},
								Qi =
									((In = function (r) {
										return function (t, e) {
											var n,
												i = String(d(t)),
												o = J(e),
												t = i.length;
											return o < 0 || t <= o
												? r
													? ''
													: void 0
												: (e = i.charCodeAt(o)) < 55296 ||
												  56319 < e ||
												  o + 1 === t ||
												  (n = i.charCodeAt(o + 1)) < 56320 ||
												  57343 < n
												? r
													? i.charAt(o)
													: e
												: r
												? i.slice(o, o + 2)
												: n - 56320 + ((e - 55296) << 10) + 65536;
										};
									})(!1),
									In(!0)),
								Ji = Math.floor,
								Xi = ''.replace,
								to = /\$([$&'`]|\d\d?|<[^>]*>)/g,
								eo = /\$([$&'`]|\d\d?)/g,
								no = Math.max,
								io = Math.min;
							He('replace', 2, function (o, _, x, t) {
								var w = t.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
									k = t.REPLACE_KEEPS_$0,
									E = w ? '$' : '$0';
								return [
									function (t, e) {
										var n = d(this),
											i = null == t ? void 0 : t[o];
										return void 0 !== i ? i.call(t, n, e) : _.call(String(n), t, e);
									},
									function (t, e) {
										if ((!w && k) || ('string' == typeof e && -1 === e.indexOf(E))) {
											var n = x(_, t, this, e);
											if (n.done) return n.value;
										}
										var i = A(t),
											o = String(this),
											r = 'function' == typeof e;
										r || (e = String(e));
										var a,
											s = i.global;
										s && ((a = i.unicode), (i.lastIndex = 0));
										for (var c = []; ; ) {
											var l = Ki(i, o);
											if (null === l) break;
											if ((c.push(l), !s)) break;
											'' === String(l[0]) && (i.lastIndex = qi(o, X(i.lastIndex), a));
										}
										for (var d, u = '', p = 0, h = 0; h < c.length; h++) {
											for (
												var l = c[h],
													f = String(l[0]),
													g = no(io(J(l.index), o.length), 0),
													m = [],
													b = 1;
												b < l.length;
												b++
											)
												m.push(void 0 === (d = l[b]) ? d : String(d));
											var v,
												y = l.groups,
												y = r
													? ((v = [f].concat(m, g, o)),
													  void 0 !== y && v.push(y),
													  String(e.apply(void 0, v)))
													: (function (r, a, s, c, l, t) {
															var d = s + r.length,
																u = c.length,
																e = eo;
															return (
																void 0 !== l && ((l = nt(l)), (e = to)),
																Xi.call(t, e, function (t, e) {
																	var n;
																	switch (e.charAt(0)) {
																		case '$':
																			return '$';
																		case '&':
																			return r;
																		case '`':
																			return a.slice(0, s);
																		case "'":
																			return a.slice(d);
																		case '<':
																			n = l[e.slice(1, -1)];
																			break;
																		default:
																			var i = +e;
																			if (0 == i) return t;
																			if (u < i) {
																				var o = Ji(i / 10);
																				return 0 !== o && o <= u
																					? void 0 === c[o - 1]
																						? e.charAt(1)
																						: c[o - 1] + e.charAt(1)
																					: t;
																			}
																			n = c[i - 1];
																	}
																	return void 0 === n ? '' : n;
																})
															);
													  })(f, o, g, m, y, e);
											p <= g && ((u += o.slice(p, g) + y), (p = g + f.length));
										}
										return u + o.slice(p);
									}
								];
							});
							var oo =
								Object.is ||
								function (t, e) {
									return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
								};
							He('search', 1, function (i, o, r) {
								return [
									function (t) {
										var e = d(this),
											n = null == t ? void 0 : t[i];
										return void 0 !== n ? n.call(t, e) : new RegExp(t)[i](String(e));
									},
									function (t) {
										var e = r(o, t, this);
										if (e.done) return e.value;
										var n = A(t),
											e = String(this),
											t = n.lastIndex;
										oo(t, 0) || (n.lastIndex = 0);
										e = Ki(n, e);
										return oo(n.lastIndex, t) || (n.lastIndex = t), null === e ? -1 : e.index;
									}
								];
							});
							var In = S.f,
								ro = ''.startsWith,
								ao = Math.min,
								Y = Y('startsWith');
							Dt(
								{
									target: 'String',
									proto: !0,
									forced: !((!Y && (In = In(String.prototype, 'startsWith')) && !In.writable) || Y)
								},
								{
									startsWith: function (t) {
										var e = String(d(this));
										Fi(t);
										var n = X(ao(1 < arguments.length ? arguments[1] : void 0, e.length)),
											t = String(t);
										return ro ? ro.call(e, t, n) : e.slice(n, n + t.length) === t;
									}
								}
							);
							var so,
								co,
								lo = '\t\n\v\f\r                　\u2028\u2029\ufeff',
								Y = '[' + lo + ']',
								uo = RegExp('^' + Y + Y + '*'),
								po = RegExp(Y + Y + '*$'),
								ho = {
									start: (Y = function (e) {
										return function (t) {
											t = String(d(t));
											return 1 & e && (t = t.replace(uo, '')), (t = 2 & e ? t.replace(po, '') : t);
										};
									})(1),
									end: Y(2),
									trim: Y(3)
								}.trim;
							for (co in (Dt(
								{
									target: 'String',
									proto: !0,
									forced:
										((so = 'trim'),
										l(function () {
											return lo[so]() || '​᠎' != '​᠎'[so]() || lo[so].name !== so;
										}))
								},
								{
									trim: function () {
										return ho(this);
									}
								}
							),
							{
								CSSRuleList: 0,
								CSSStyleDeclaration: 0,
								CSSValueList: 0,
								ClientRectList: 0,
								DOMRectList: 0,
								DOMStringList: 0,
								DOMTokenList: 1,
								DataTransferItemList: 0,
								FileList: 0,
								HTMLAllCollection: 0,
								HTMLCollection: 0,
								HTMLFormElement: 0,
								HTMLSelectElement: 0,
								MediaList: 0,
								MimeTypeArray: 0,
								NamedNodeMap: 0,
								NodeList: 1,
								PaintRequestList: 0,
								Plugin: 0,
								PluginArray: 0,
								SVGLengthList: 0,
								SVGNumberList: 0,
								SVGPathSegList: 0,
								SVGPointList: 0,
								SVGStringList: 0,
								SVGTransformList: 0,
								SourceBufferList: 0,
								StyleSheetList: 0,
								TextTrackCueList: 0,
								TextTrackList: 0,
								TouchList: 0
							})) {
								var fo = f[co],
									go = fo && fo.prototype;
								if (go && go.forEach !== qe)
									try {
										T(go, 'forEach', qe);
									} catch (jt) {
										go.forEach = qe;
									}
							}
							var mo = function (t, e, n) {
									return (
										e in t
											? Object.defineProperty(t, e, {
													value: n,
													enumerable: !0,
													configurable: !0,
													writable: !0
											  })
											: (t[e] = n),
										t
									);
								},
								bo = t(function (t) {
									var e = (function (a) {
										var c,
											t = Object.prototype,
											l = t.hasOwnProperty,
											e = 'function' == typeof Symbol ? Symbol : {},
											i = e.iterator || '@@iterator',
											n = e.asyncIterator || '@@asyncIterator',
											o = e.toStringTag || '@@toStringTag';
										function r(t, e, n) {
											return (
												Object.defineProperty(t, e, {
													value: n,
													enumerable: !0,
													configurable: !0,
													writable: !0
												}),
												t[e]
											);
										}
										try {
											r({}, '');
										} catch (a) {
											r = function (t, e, n) {
												return (t[e] = n);
											};
										}
										function s(t, e, n, i) {
											var o,
												r,
												a,
												s,
												e = e && e.prototype instanceof m ? e : m,
												e = Object.create(e.prototype),
												i = new A(i || []);
											return (
												(e._invoke =
													((o = t),
													(r = n),
													(a = i),
													(s = u),
													function (t, e) {
														if (s === h) throw new Error('Generator is already running');
														if (s === f) {
															if ('throw' === t) throw e;
															return D();
														}
														for (a.method = t, a.arg = e; ; ) {
															var n = a.delegate;
															if (n) {
																var i = (function t(e, n) {
																	var i = e.iterator[n.method];
																	if (i === c) {
																		if (((n.delegate = null), 'throw' === n.method)) {
																			if (
																				e.iterator.return &&
																				((n.method = 'return'),
																				(n.arg = c),
																				t(e, n),
																				'throw' === n.method)
																			)
																				return g;
																			(n.method = 'throw'),
																				(n.arg = new TypeError(
																					"The iterator does not provide a 'throw' method"
																				));
																		}
																		return g;
																	}
																	i = d(i, e.iterator, n.arg);
																	if ('throw' === i.type)
																		return (
																			(n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), g
																		);
																	var i = i.arg;
																	return i
																		? i.done
																			? ((n[e.resultName] = i.value),
																			  (n.next = e.nextLoc),
																			  'return' !== n.method && ((n.method = 'next'), (n.arg = c)),
																			  (n.delegate = null),
																			  g)
																			: i
																		: ((n.method = 'throw'),
																		  (n.arg = new TypeError('iterator result is not an object')),
																		  (n.delegate = null),
																		  g);
																})(n, a);
																if (i) {
																	if (i === g) continue;
																	return i;
																}
															}
															if ('next' === a.method) a.sent = a._sent = a.arg;
															else if ('throw' === a.method) {
																if (s === u) throw ((s = f), a.arg);
																a.dispatchException(a.arg);
															} else 'return' === a.method && a.abrupt('return', a.arg);
															s = h;
															i = d(o, r, a);
															if ('normal' === i.type) {
																if (((s = a.done ? f : p), i.arg === g)) continue;
																return { value: i.arg, done: a.done };
															}
															'throw' === i.type &&
																((s = f), (a.method = 'throw'), (a.arg = i.arg));
														}
													})),
												e
											);
										}
										function d(t, e, n) {
											try {
												return { type: 'normal', arg: t.call(e, n) };
											} catch (t) {
												return { type: 'throw', arg: t };
											}
										}
										a.wrap = s;
										var u = 'suspendedStart',
											p = 'suspendedYield',
											h = 'executing',
											f = 'completed',
											g = {};
										function m() {}
										function b() {}
										function v() {}
										var y = {};
										y[i] = function () {
											return this;
										};
										(e = Object.getPrototypeOf), (e = e && e(e(S([]))));
										e && e !== t && l.call(e, i) && (y = e);
										var _ = (v.prototype = m.prototype = Object.create(y));
										function x(t) {
											['next', 'throw', 'return'].forEach(function (e) {
												r(t, e, function (t) {
													return this._invoke(e, t);
												});
											});
										}
										function w(a, s) {
											var e;
											this._invoke = function (n, i) {
												function t() {
													return new s(function (t, e) {
														!(function e(t, n, i, o) {
															t = d(a[t], a, n);
															if ('throw' !== t.type) {
																var r = t.arg,
																	n = r.value;
																return n && 'object' == typeof n && l.call(n, '__await')
																	? s.resolve(n.__await).then(
																			function (t) {
																				e('next', t, i, o);
																			},
																			function (t) {
																				e('throw', t, i, o);
																			}
																	  )
																	: s.resolve(n).then(
																			function (t) {
																				(r.value = t), i(r);
																			},
																			function (t) {
																				return e('throw', t, i, o);
																			}
																	  );
															}
															o(t.arg);
														})(n, i, t, e);
													});
												}
												return (e = e ? e.then(t, t) : t());
											};
										}
										function k(t) {
											var e = { tryLoc: t[0] };
											1 in t && (e.catchLoc = t[1]),
												2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
												this.tryEntries.push(e);
										}
										function E(t) {
											var e = t.completion || {};
											(e.type = 'normal'), delete e.arg, (t.completion = e);
										}
										function A(t) {
											(this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(k, this), this.reset(!0);
										}
										function S(e) {
											if (e) {
												var t = e[i];
												if (t) return t.call(e);
												if ('function' == typeof e.next) return e;
												if (!isNaN(e.length)) {
													var n = -1,
														t = function t() {
															for (; ++n < e.length; )
																if (l.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
															return (t.value = c), (t.done = !0), t;
														};
													return (t.next = t);
												}
											}
											return { next: D };
										}
										function D() {
											return { value: c, done: !0 };
										}
										return (
											(((b.prototype = _.constructor = v).constructor = b).displayName = r(
												v,
												o,
												'GeneratorFunction'
											)),
											(a.isGeneratorFunction = function (t) {
												t = 'function' == typeof t && t.constructor;
												return (
													!!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name))
												);
											}),
											(a.mark = function (t) {
												return (
													Object.setPrototypeOf
														? Object.setPrototypeOf(t, v)
														: ((t.__proto__ = v), r(t, o, 'GeneratorFunction')),
													(t.prototype = Object.create(_)),
													t
												);
											}),
											(a.awrap = function (t) {
												return { __await: t };
											}),
											x(w.prototype),
											(w.prototype[n] = function () {
												return this;
											}),
											(a.AsyncIterator = w),
											(a.async = function (t, e, n, i, o) {
												void 0 === o && (o = Promise);
												var r = new w(s(t, e, n, i), o);
												return a.isGeneratorFunction(e)
													? r
													: r.next().then(function (t) {
															return t.done ? t.value : r.next();
													  });
											}),
											x(_),
											r(_, o, 'Generator'),
											(_[i] = function () {
												return this;
											}),
											(_.toString = function () {
												return '[object Generator]';
											}),
											(a.keys = function (n) {
												var t,
													i = [];
												for (t in n) i.push(t);
												return (
													i.reverse(),
													function t() {
														for (; i.length; ) {
															var e = i.pop();
															if (e in n) return (t.value = e), (t.done = !1), t;
														}
														return (t.done = !0), t;
													}
												);
											}),
											(a.values = S),
											(A.prototype = {
												constructor: A,
												reset: function (t) {
													if (
														((this.prev = 0),
														(this.next = 0),
														(this.sent = this._sent = c),
														(this.done = !1),
														(this.delegate = null),
														(this.method = 'next'),
														(this.arg = c),
														this.tryEntries.forEach(E),
														!t)
													)
														for (var e in this)
															't' === e.charAt(0) &&
																l.call(this, e) &&
																!isNaN(+e.slice(1)) &&
																(this[e] = c);
												},
												stop: function () {
													this.done = !0;
													var t = this.tryEntries[0].completion;
													if ('throw' === t.type) throw t.arg;
													return this.rval;
												},
												dispatchException: function (n) {
													if (this.done) throw n;
													var i = this;
													function t(t, e) {
														return (
															(r.type = 'throw'),
															(r.arg = n),
															(i.next = t),
															e && ((i.method = 'next'), (i.arg = c)),
															!!e
														);
													}
													for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
														var o = this.tryEntries[e],
															r = o.completion;
														if ('root' === o.tryLoc) return t('end');
														if (o.tryLoc <= this.prev) {
															var a = l.call(o, 'catchLoc'),
																s = l.call(o, 'finallyLoc');
															if (a && s) {
																if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
																if (this.prev < o.finallyLoc) return t(o.finallyLoc);
															} else if (a) {
																if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
															} else {
																if (!s) throw new Error('try statement without catch or finally');
																if (this.prev < o.finallyLoc) return t(o.finallyLoc);
															}
														}
													}
												},
												abrupt: function (t, e) {
													for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
														var i = this.tryEntries[n];
														if (
															i.tryLoc <= this.prev &&
															l.call(i, 'finallyLoc') &&
															this.prev < i.finallyLoc
														) {
															var o = i;
															break;
														}
													}
													var r = (o =
														o &&
														('break' === t || 'continue' === t) &&
														o.tryLoc <= e &&
														e <= o.finallyLoc
															? null
															: o)
														? o.completion
														: {};
													return (
														(r.type = t),
														(r.arg = e),
														o
															? ((this.method = 'next'), (this.next = o.finallyLoc), g)
															: this.complete(r)
													);
												},
												complete: function (t, e) {
													if ('throw' === t.type) throw t.arg;
													return (
														'break' === t.type || 'continue' === t.type
															? (this.next = t.arg)
															: 'return' === t.type
															? ((this.rval = this.arg = t.arg),
															  (this.method = 'return'),
															  (this.next = 'end'))
															: 'normal' === t.type && e && (this.next = e),
														g
													);
												},
												finish: function (t) {
													for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
														var n = this.tryEntries[e];
														if (n.finallyLoc === t)
															return this.complete(n.completion, n.afterLoc), E(n), g;
													}
												},
												catch: function (t) {
													for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
														var n = this.tryEntries[e];
														if (n.tryLoc === t) {
															var i,
																o = n.completion;
															return 'throw' === o.type && ((i = o.arg), E(n)), i;
														}
													}
													throw new Error('illegal catch attempt');
												},
												delegateYield: function (t, e, n) {
													return (
														(this.delegate = { iterator: S(t), resultName: e, nextLoc: n }),
														'next' === this.method && (this.arg = c),
														g
													);
												}
											}),
											a
										);
									})(t.exports);
									try {
										regeneratorRuntime = e;
									} catch (t) {
										Function('r', 'regeneratorRuntime = r')(e);
									}
								});
							function vo(t, e, n, i, o, r, a) {
								try {
									var s = t[r](a),
										c = s.value;
								} catch (t) {
									return n(t), 0;
								}
								s.done ? e(c) : Promise.resolve(c).then(i, o);
							}
							function yo(s) {
								return function () {
									var t = this,
										a = arguments;
									return new Promise(function (e, n) {
										var i = s.apply(t, a);
										function o(t) {
											vo(i, e, n, o, r, 'next', t);
										}
										function r(t) {
											vo(i, e, n, o, r, 'throw', t);
										}
										o(void 0);
									});
								};
							}
							var _o = function (t, e) {
									if (t !== e) throw new TypeError('Cannot instantiate an arrow function');
								},
								xo = function (t, e) {
									if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
								};
							function wo(t, e) {
								for (var n = 0; n < e.length; n++) {
									var i = e[n];
									(i.enumerable = i.enumerable || !1),
										(i.configurable = !0),
										'value' in i && (i.writable = !0),
										Object.defineProperty(t, i.key, i);
								}
							}
							function ko(t, e, n) {
								return e && wo(t.prototype, e), n && wo(t, n), t;
							}
							var Eo,
								Ao,
								So =
									('undefined' != typeof globalThis && globalThis) ||
									('undefined' != typeof self && self) ||
									(void 0 !== So && So),
								Do = 'URLSearchParams' in So,
								Ro = 'Symbol' in So && 'iterator' in Symbol,
								To =
									'FileReader' in So &&
									'Blob' in So &&
									(function () {
										try {
											return new Blob(), !0;
										} catch (t) {
											return !1;
										}
									})(),
								Lo = 'FormData' in So,
								Co = 'ArrayBuffer' in So;
							function Oo(t) {
								if (
									('string' != typeof t && (t = String(t)),
									/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || '' === t)
								)
									throw new TypeError('Invalid character in header field name');
								return t.toLowerCase();
							}
							function Po(t) {
								return (t = 'string' != typeof t ? String(t) : t);
							}
							function Io(e) {
								var t = {
									next: function () {
										var t = e.shift();
										return { done: void 0 === t, value: t };
									}
								};
								return (
									Ro &&
										(t[Symbol.iterator] = function () {
											return t;
										}),
									t
								);
							}
							function jo(e) {
								(this.map = {}),
									e instanceof jo
										? e.forEach(function (t, e) {
												this.append(e, t);
										  }, this)
										: Array.isArray(e)
										? e.forEach(function (t) {
												this.append(t[0], t[1]);
										  }, this)
										: e &&
										  Object.getOwnPropertyNames(e).forEach(function (t) {
												this.append(t, e[t]);
										  }, this);
							}
							function Bo(t) {
								if (t.bodyUsed) return Promise.reject(new TypeError('Already read'));
								t.bodyUsed = !0;
							}
							function Mo(n) {
								return new Promise(function (t, e) {
									(n.onload = function () {
										t(n.result);
									}),
										(n.onerror = function () {
											e(n.error);
										});
								});
							}
							function zo(t) {
								var e = new FileReader(),
									n = Mo(e);
								return e.readAsArrayBuffer(t), n;
							}
							function No(t) {
								if (t.slice) return t.slice(0);
								var e = new Uint8Array(t.byteLength);
								return e.set(new Uint8Array(t)), e.buffer;
							}
							function Uo() {
								return (
									(this.bodyUsed = !1),
									(this._initBody = function (t) {
										(this.bodyUsed = this.bodyUsed),
											(this._bodyInit = t)
												? 'string' == typeof t
													? (this._bodyText = t)
													: To && Blob.prototype.isPrototypeOf(t)
													? (this._bodyBlob = t)
													: Lo && FormData.prototype.isPrototypeOf(t)
													? (this._bodyFormData = t)
													: Do && URLSearchParams.prototype.isPrototypeOf(t)
													? (this._bodyText = t.toString())
													: Co && To && t && DataView.prototype.isPrototypeOf(t)
													? ((this._bodyArrayBuffer = No(t.buffer)),
													  (this._bodyInit = new Blob([this._bodyArrayBuffer])))
													: Co && (ArrayBuffer.prototype.isPrototypeOf(t) || Ao(t))
													? (this._bodyArrayBuffer = No(t))
													: (this._bodyText = t = Object.prototype.toString.call(t))
												: (this._bodyText = ''),
											this.headers.get('content-type') ||
												('string' == typeof t
													? this.headers.set('content-type', 'text/plain;charset=UTF-8')
													: this._bodyBlob && this._bodyBlob.type
													? this.headers.set('content-type', this._bodyBlob.type)
													: Do &&
													  URLSearchParams.prototype.isPrototypeOf(t) &&
													  this.headers.set(
															'content-type',
															'application/x-www-form-urlencoded;charset=UTF-8'
													  ));
									}),
									To &&
										((this.blob = function () {
											var t = Bo(this);
											if (t) return t;
											if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
											if (this._bodyArrayBuffer)
												return Promise.resolve(new Blob([this._bodyArrayBuffer]));
											if (this._bodyFormData)
												throw new Error('could not read FormData body as blob');
											return Promise.resolve(new Blob([this._bodyText]));
										}),
										(this.arrayBuffer = function () {
											return this._bodyArrayBuffer
												? Bo(this) ||
														(ArrayBuffer.isView(this._bodyArrayBuffer)
															? Promise.resolve(
																	this._bodyArrayBuffer.buffer.slice(
																		this._bodyArrayBuffer.byteOffset,
																		this._bodyArrayBuffer.byteOffset +
																			this._bodyArrayBuffer.byteLength
																	)
															  )
															: Promise.resolve(this._bodyArrayBuffer))
												: this.blob().then(zo);
										})),
									(this.text = function () {
										var t,
											e,
											n = Bo(this);
										if (n) return n;
										if (this._bodyBlob)
											return (
												(t = this._bodyBlob),
												(e = new FileReader()),
												(n = Mo(e)),
												e.readAsText(t),
												n
											);
										if (this._bodyArrayBuffer)
											return Promise.resolve(
												(function (t) {
													for (
														var e = new Uint8Array(t), n = new Array(e.length), i = 0;
														i < e.length;
														i++
													)
														n[i] = String.fromCharCode(e[i]);
													return n.join('');
												})(this._bodyArrayBuffer)
											);
										if (this._bodyFormData) throw new Error('could not read FormData body as text');
										return Promise.resolve(this._bodyText);
									}),
									Lo &&
										(this.formData = function () {
											return this.text().then(Ho);
										}),
									(this.json = function () {
										return this.text().then(JSON.parse);
									}),
									this
								);
							}
							Co &&
								((Eo = [
									'[object Int8Array]',
									'[object Uint8Array]',
									'[object Uint8ClampedArray]',
									'[object Int16Array]',
									'[object Uint16Array]',
									'[object Int32Array]',
									'[object Uint32Array]',
									'[object Float32Array]',
									'[object Float64Array]'
								]),
								(Ao =
									ArrayBuffer.isView ||
									function (t) {
										return t && -1 < Eo.indexOf(Object.prototype.toString.call(t));
									})),
								(jo.prototype.append = function (t, e) {
									(t = Oo(t)), (e = Po(e));
									var n = this.map[t];
									this.map[t] = n ? n + ', ' + e : e;
								}),
								(jo.prototype.delete = function (t) {
									delete this.map[Oo(t)];
								}),
								(jo.prototype.get = function (t) {
									return (t = Oo(t)), this.has(t) ? this.map[t] : null;
								}),
								(jo.prototype.has = function (t) {
									return this.map.hasOwnProperty(Oo(t));
								}),
								(jo.prototype.set = function (t, e) {
									this.map[Oo(t)] = Po(e);
								}),
								(jo.prototype.forEach = function (t, e) {
									for (var n in this.map)
										this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
								}),
								(jo.prototype.keys = function () {
									var n = [];
									return (
										this.forEach(function (t, e) {
											n.push(e);
										}),
										Io(n)
									);
								}),
								(jo.prototype.values = function () {
									var e = [];
									return (
										this.forEach(function (t) {
											e.push(t);
										}),
										Io(e)
									);
								}),
								(jo.prototype.entries = function () {
									var n = [];
									return (
										this.forEach(function (t, e) {
											n.push([e, t]);
										}),
										Io(n)
									);
								}),
								Ro && (jo.prototype[Symbol.iterator] = jo.prototype.entries);
							var Go = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
							function Fo(t, e) {
								if (!(this instanceof Fo))
									throw new TypeError(
										'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
									);
								var n,
									i = (e = e || {}).body;
								if (t instanceof Fo) {
									if (t.bodyUsed) throw new TypeError('Already read');
									(this.url = t.url),
										(this.credentials = t.credentials),
										e.headers || (this.headers = new jo(t.headers)),
										(this.method = t.method),
										(this.mode = t.mode),
										(this.signal = t.signal),
										i || null == t._bodyInit || ((i = t._bodyInit), (t.bodyUsed = !0));
								} else this.url = String(t);
								if (
									((this.credentials = e.credentials || this.credentials || 'same-origin'),
									(!e.headers && this.headers) || (this.headers = new jo(e.headers)),
									(this.method =
										((t = (n = e.method || this.method || 'GET').toUpperCase()),
										-1 < Go.indexOf(t) ? t : n)),
									(this.mode = e.mode || this.mode || null),
									(this.signal = e.signal || this.signal),
									(this.referrer = null),
									('GET' === this.method || 'HEAD' === this.method) && i)
								)
									throw new TypeError('Body not allowed for GET or HEAD requests');
								this._initBody(i),
									('GET' !== this.method && 'HEAD' !== this.method) ||
										('no-store' !== e.cache && 'no-cache' !== e.cache) ||
										((e = /([?&])_=[^&]*/).test(this.url)
											? (this.url = this.url.replace(e, '$1_=' + new Date().getTime()))
											: (this.url +=
													(/\?/.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()));
							}
							function Ho(t) {
								var n = new FormData();
								return (
									t
										.trim()
										.split('&')
										.forEach(function (t) {
											var e;
											t &&
												((t = (e = t.split('=')).shift().replace(/\+/g, ' ')),
												(e = e.join('=').replace(/\+/g, ' ')),
												n.append(decodeURIComponent(t), decodeURIComponent(e)));
										}),
									n
								);
							}
							function qo(t, e) {
								if (!(this instanceof qo))
									throw new TypeError(
										'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
									);
								(e = e || {}),
									(this.type = 'default'),
									(this.status = void 0 === e.status ? 200 : e.status),
									(this.ok = 200 <= this.status && this.status < 300),
									(this.statusText = 'statusText' in e ? e.statusText : ''),
									(this.headers = new jo(e.headers)),
									(this.url = e.url || ''),
									this._initBody(t);
							}
							(Fo.prototype.clone = function () {
								return new Fo(this, { body: this._bodyInit });
							}),
								Uo.call(Fo.prototype),
								Uo.call(qo.prototype),
								(qo.prototype.clone = function () {
									return new qo(this._bodyInit, {
										status: this.status,
										statusText: this.statusText,
										headers: new jo(this.headers),
										url: this.url
									});
								}),
								(qo.error = function () {
									var t = new qo(null, { status: 0, statusText: '' });
									return (t.type = 'error'), t;
								});
							var Ko = [301, 302, 303, 307, 308];
							qo.redirect = function (t, e) {
								if (-1 === Ko.indexOf(e)) throw new RangeError('Invalid status code');
								return new qo(null, { status: e, headers: { location: t } });
							};
							var Vo = So.DOMException;
							try {
								new Vo();
							} catch (jt) {
								((Vo = function (t, e) {
									(this.message = t), (this.name = e);
									t = Error(t);
									this.stack = t.stack;
								}).prototype = Object.create(Error.prototype)),
									(Vo.prototype.constructor = Vo);
							}
							function Wo(i, a) {
								return new Promise(function (o, t) {
									var e = new Fo(i, a);
									if (e.signal && e.signal.aborted) return t(new Vo('Aborted', 'AbortError'));
									var r = new XMLHttpRequest();
									function n() {
										r.abort();
									}
									(r.onload = function () {
										var t,
											n,
											e = {
												status: r.status,
												statusText: r.statusText,
												headers:
													((t = r.getAllResponseHeaders() || ''),
													(n = new jo()),
													t
														.replace(/\r?\n[\t ]+/g, ' ')
														.split('\r')
														.map(function (t) {
															return 0 === t.indexOf('\n') ? t.substr(1, t.length) : t;
														})
														.forEach(function (t) {
															var e = t.split(':'),
																t = e.shift().trim();
															t && ((e = e.join(':').trim()), n.append(t, e));
														}),
													n)
											};
										e.url = 'responseURL' in r ? r.responseURL : e.headers.get('X-Request-URL');
										var i = 'response' in r ? r.response : r.responseText;
										setTimeout(function () {
											o(new qo(i, e));
										}, 0);
									}),
										(r.onerror = function () {
											setTimeout(function () {
												t(new TypeError('Network request failed'));
											}, 0);
										}),
										(r.ontimeout = function () {
											setTimeout(function () {
												t(new TypeError('Network request failed'));
											}, 0);
										}),
										(r.onabort = function () {
											setTimeout(function () {
												t(new Vo('Aborted', 'AbortError'));
											}, 0);
										}),
										r.open(
											e.method,
											(function (e) {
												try {
													return '' === e && So.location.href ? So.location.href : e;
												} catch (t) {
													return e;
												}
											})(e.url),
											!0
										),
										'include' === e.credentials
											? (r.withCredentials = !0)
											: 'omit' === e.credentials && (r.withCredentials = !1),
										'responseType' in r &&
											(To
												? (r.responseType = 'blob')
												: Co &&
												  e.headers.get('Content-Type') &&
												  -1 !==
														e.headers.get('Content-Type').indexOf('application/octet-stream') &&
												  (r.responseType = 'arraybuffer')),
										!a || 'object' != typeof a.headers || a.headers instanceof jo
											? e.headers.forEach(function (t, e) {
													r.setRequestHeader(e, t);
											  })
											: Object.getOwnPropertyNames(a.headers).forEach(function (t) {
													r.setRequestHeader(t, Po(a.headers[t]));
											  }),
										e.signal &&
											(e.signal.addEventListener('abort', n),
											(r.onreadystatechange = function () {
												4 === r.readyState && e.signal.removeEventListener('abort', n);
											})),
										r.send(void 0 === e._bodyInit ? null : e._bodyInit);
								});
							}
							(Wo.polyfill = !0),
								So.fetch ||
									((So.fetch = Wo), (So.Headers = jo), (So.Request = Fo), (So.Response = qo));
							var $o = '1.8.12';
							He('match', 1, function (i, c, l) {
								return [
									function (t) {
										var e = d(this),
											n = null == t ? void 0 : t[i];
										return void 0 !== n ? n.call(t, e) : new RegExp(t)[i](String(e));
									},
									function (t) {
										var e = l(c, t, this);
										if (e.done) return e.value;
										var n = A(t),
											i = String(this);
										if (!n.global) return Ki(n, i);
										for (
											var o = n.unicode, r = [], a = (n.lastIndex = 0);
											null !== (s = Ki(n, i));

										) {
											var s = String(s[0]);
											'' === (r[a] = s) && (n.lastIndex = qi(i, X(n.lastIndex), o)), a++;
										}
										return 0 === a ? null : r;
									}
								];
							});
							var Yo = [].push,
								Zo = Math.min,
								Qo = 4294967295,
								Jo = !l(function () {
									return !RegExp(Qo, 'y');
								});
							He(
								'split',
								2,
								function (o, f, g) {
									var m =
										'c' == 'abbc'.split(/(b)*/)[1] ||
										4 != 'test'.split(/(?:)/, -1).length ||
										2 != 'ab'.split(/(?:ab)*/).length ||
										4 != '.'.split(/(.?)(.?)/).length ||
										1 < '.'.split(/()()/).length ||
										''.split(/.?/).length
											? function (t, e) {
													var n = String(d(this)),
														i = void 0 === e ? Qo : e >>> 0;
													if (0 == i) return [];
													if (void 0 === t) return [n];
													if (!bi(t)) return f.call(n, t, i);
													for (
														var o,
															r,
															a,
															s = [],
															e =
																(t.ignoreCase ? 'i' : '') +
																(t.multiline ? 'm' : '') +
																(t.unicode ? 'u' : '') +
																(t.sticky ? 'y' : ''),
															c = 0,
															l = new RegExp(t.source, e + 'g');
														(o = Ni.call(l, n)) &&
														!(
															(r = l.lastIndex) > c &&
															(s.push(n.slice(c, o.index)),
															1 < o.length && o.index < n.length && Yo.apply(s, o.slice(1)),
															(a = o[0].length),
															(c = r),
															s.length >= i)
														);

													)
														l.lastIndex === o.index && l.lastIndex++;
													return (
														c === n.length ? (!a && l.test('')) || s.push('') : s.push(n.slice(c)),
														s.length > i ? s.slice(0, i) : s
													);
											  }
											: '0'.split(void 0, 0).length
											? function (t, e) {
													return void 0 === t && 0 === e ? [] : f.call(this, t, e);
											  }
											: f;
									return [
										function (t, e) {
											var n = d(this),
												i = null == t ? void 0 : t[o];
											return void 0 !== i ? i.call(t, n, e) : m.call(String(n), t, e);
										},
										function (t, e) {
											var n = g(m, t, this, e, m !== f);
											if (n.done) return n.value;
											var i = A(t),
												o = String(this),
												n = fn(i, RegExp),
												r = i.unicode,
												t =
													(i.ignoreCase ? 'i' : '') +
													(i.multiline ? 'm' : '') +
													(i.unicode ? 'u' : '') +
													(Jo ? 'y' : 'g'),
												a = new n(Jo ? i : '^(?:' + i.source + ')', t),
												s = void 0 === e ? Qo : e >>> 0;
											if (0 == s) return [];
											if (0 === o.length) return null === Ki(a, o) ? [o] : [];
											for (var c = 0, l = 0, d = []; l < o.length; ) {
												a.lastIndex = Jo ? l : 0;
												var u,
													p = Ki(a, Jo ? o : o.slice(l));
												if (null === p || (u = Zo(X(a.lastIndex + (Jo ? 0 : l)), o.length)) === c)
													l = qi(o, l, r);
												else {
													if ((d.push(o.slice(c, l)), d.length === s)) return d;
													for (var h = 1; h <= p.length - 1; h++)
														if ((d.push(p[h]), d.length === s)) return d;
													l = c = u;
												}
											}
											return d.push(o.slice(c)), d;
										}
									];
								},
								!Jo
							);
							var Xo = function (t, e) {
									if (((e = e.split(':')[0]), !(t = +t))) return !1;
									switch (e) {
										case 'http':
										case 'ws':
											return 80 !== t;
										case 'https':
										case 'wss':
											return 443 !== t;
										case 'ftp':
											return 21 !== t;
										case 'gopher':
											return 70 !== t;
										case 'file':
											return !1;
									}
									return 0 !== t;
								},
								tr = Object.prototype.hasOwnProperty;
							function er(t) {
								try {
									return decodeURIComponent(t.replace(/\+/g, ' '));
								} catch (t) {
									return null;
								}
							}
							function nr(t) {
								try {
									return encodeURIComponent(t);
								} catch (t) {
									return null;
								}
							}
							var ir = {
									stringify: function (t, e) {
										var n,
											i,
											o = [];
										for (i in ('string' != typeof (e = e || '') && (e = '?'), t))
											if (tr.call(t, i)) {
												if (
													((n = t[i]) || (null != n && !isNaN(n)) || (n = ''),
													(i = nr(i)),
													(n = nr(n)),
													null === i || null === n)
												)
													continue;
												o.push(i + '=' + n);
											}
										return o.length ? e + o.join('&') : '';
									},
									parse: function (t) {
										for (var e = /([^=?#&]+)=?([^&]*)/g, n = {}; (o = e.exec(t)); ) {
											var i = er(o[1]),
												o = er(o[2]);
											null === i || null === o || i in n || (n[i] = o);
										}
										return n;
									}
								},
								or = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,
								rr = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,
								ar = new RegExp(
									'^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+'
								);
							function sr(t) {
								return (t || '').toString().replace(ar, '');
							}
							var cr = [
									['#', 'hash'],
									['?', 'query'],
									function (t) {
										return t.replace('\\', '/');
									},
									['/', 'pathname'],
									['@', 'auth', 1],
									[NaN, 'host', void 0, 1, 1],
									[/:(\d+)$/, 'port', void 0, 1],
									[NaN, 'hostname', void 0, 1, 1]
								],
								lr = { hash: 1, query: 1 };
							function dr(t) {
								var e,
									n =
										('undefined' != typeof window
											? window
											: void 0 !== jt
											? jt
											: 'undefined' != typeof self
											? self
											: {}
										).location || {},
									i = {},
									n = typeof (t = t || n);
								if ('blob:' === t.protocol) i = new pr(unescape(t.pathname), {});
								else if ('string' == n) for (e in ((i = new pr(t, {})), lr)) delete i[e];
								else if ('object' == n) {
									for (e in t) e in lr || (i[e] = t[e]);
									void 0 === i.slashes && (i.slashes = or.test(t.href));
								}
								return i;
							}
							function ur(t) {
								t = sr(t);
								t = rr.exec(t);
								return {
									protocol: t[1] ? t[1].toLowerCase() : '',
									slashes: !!(t[2] && 2 <= t[2].length),
									rest: t[2] && 1 === t[2].length ? '/' + t[3] : t[3]
								};
							}
							function pr(t, e, n) {
								if (((t = sr(t)), !(this instanceof pr))) return new pr(t, e, n);
								var i,
									o,
									r,
									a,
									s,
									c = cr.slice(),
									l = typeof e,
									d = this,
									u = 0;
								for (
									'object' != l && 'string' != l && ((n = e), (e = null)),
										n && 'function' != typeof n && (n = ir.parse),
										e = dr(e),
										i = !(l = ur(t || '')).protocol && !l.slashes,
										d.slashes = l.slashes || (i && e.slashes),
										d.protocol = l.protocol || e.protocol || '',
										t = l.rest,
										l.slashes || (c[3] = [/(.*)/, 'pathname']);
									u < c.length;
									u++
								)
									'function' != typeof (r = c[u])
										? ((o = r[0]),
										  (s = r[1]),
										  o != o
												? (d[s] = t)
												: 'string' == typeof o
												? ~(a = t.indexOf(o)) &&
												  (t =
														'number' == typeof r[2]
															? ((d[s] = t.slice(0, a)), t.slice(a + r[2]))
															: ((d[s] = t.slice(a)), t.slice(0, a)))
												: (a = o.exec(t)) && ((d[s] = a[1]), (t = t.slice(0, a.index))),
										  (d[s] = d[s] || (i && r[3] && e[s]) || ''),
										  r[4] && (d[s] = d[s].toLowerCase()))
										: (t = r(t));
								n && (d.query = n(d.query)),
									i &&
										e.slashes &&
										'/' !== d.pathname.charAt(0) &&
										('' !== d.pathname || '' !== e.pathname) &&
										(d.pathname = (function (t, e) {
											if ('' === t) return e;
											for (
												var n = (e || '/').split('/').slice(0, -1).concat(t.split('/')),
													i = n.length,
													t = n[i - 1],
													o = !1,
													r = 0;
												i--;

											)
												'.' === n[i]
													? n.splice(i, 1)
													: '..' === n[i]
													? (n.splice(i, 1), r++)
													: r && (0 === i && (o = !0), n.splice(i, 1), r--);
											return (
												o && n.unshift(''), ('.' !== t && '..' !== t) || n.push(''), n.join('/')
											);
										})(d.pathname, e.pathname)),
									'/' !== d.pathname.charAt(0) && d.hostname && (d.pathname = '/' + d.pathname),
									Xo(d.port, d.protocol) || ((d.host = d.hostname), (d.port = '')),
									(d.username = d.password = ''),
									d.auth &&
										((r = d.auth.split(':')), (d.username = r[0] || ''), (d.password = r[1] || '')),
									(d.origin =
										d.protocol && d.host && 'file:' !== d.protocol
											? d.protocol + '//' + d.host
											: 'null'),
									(d.href = d.toString());
							}
							(pr.prototype = {
								set: function (t, e, n) {
									var i,
										o = this;
									switch (t) {
										case 'query':
											'string' == typeof e && e.length && (e = (n || ir.parse)(e)), (o[t] = e);
											break;
										case 'port':
											(o[t] = e),
												Xo(e, o.protocol)
													? e && (o.host = o.hostname + ':' + e)
													: ((o.host = o.hostname), (o[t] = ''));
											break;
										case 'hostname':
											(o[t] = e), o.port && (e += ':' + o.port), (o.host = e);
											break;
										case 'host':
											(o[t] = e),
												/:\d+$/.test(e)
													? ((e = e.split(':')), (o.port = e.pop()), (o.hostname = e.join(':')))
													: ((o.hostname = e), (o.port = ''));
											break;
										case 'protocol':
											(o.protocol = e.toLowerCase()), (o.slashes = !n);
											break;
										case 'pathname':
										case 'hash':
											e
												? ((i = 'pathname' === t ? '/' : '#'),
												  (o[t] = e.charAt(0) !== i ? i + e : e))
												: (o[t] = e);
											break;
										default:
											o[t] = e;
									}
									for (var r = 0; r < cr.length; r++) {
										var a = cr[r];
										a[4] && (o[a[1]] = o[a[1]].toLowerCase());
									}
									return (
										(o.origin =
											o.protocol && o.host && 'file:' !== o.protocol
												? o.protocol + '//' + o.host
												: 'null'),
										(o.href = o.toString()),
										o
									);
								},
								toString: function (t) {
									(t && 'function' == typeof t) || (t = ir.stringify);
									var e = this,
										n = e.protocol;
									n && ':' !== n.charAt(n.length - 1) && (n += ':');
									n += e.slashes ? '//' : '';
									return (
										e.username &&
											((n += e.username), e.password && (n += ':' + e.password), (n += '@')),
										(n += e.host + e.pathname),
										(t = 'object' == typeof e.query ? t(e.query) : e.query) &&
											(n += '?' !== t.charAt(0) ? '?' + t : t),
										e.hash && (n += e.hash),
										n
									);
								}
							}),
								(pr.extractProtocol = ur),
								(pr.location = dr),
								(pr.trimLeft = sr),
								(pr.qs = ir);
							var hr = pr,
								fr = t(function (t, e) {
									var i = '__lodash_hash_undefined__',
										c = 9007199254740991,
										f = '[object Arguments]',
										g = '[object Boolean]',
										m = '[object Date]',
										b = '[object Function]',
										v = '[object GeneratorFunction]',
										y = '[object Map]',
										_ = '[object Number]',
										x = '[object Object]',
										n = '[object Promise]',
										w = '[object RegExp]',
										k = '[object Set]',
										E = '[object String]',
										A = '[object Symbol]',
										o = '[object WeakMap]',
										S = '[object ArrayBuffer]',
										D = '[object DataView]',
										R = '[object Float32Array]',
										T = '[object Float64Array]',
										L = '[object Int8Array]',
										C = '[object Int16Array]',
										O = '[object Int32Array]',
										P = '[object Uint8Array]',
										I = '[object Uint8ClampedArray]',
										j = '[object Uint16Array]',
										B = '[object Uint32Array]',
										M = /\w*$/,
										r = /^\[object .+?Constructor\]$/,
										l = /^(?:0|[1-9]\d*)$/,
										z = {};
									(z[f] =
										z['[object Array]'] =
										z[S] =
										z[D] =
										z[g] =
										z[m] =
										z[R] =
										z[T] =
										z[L] =
										z[C] =
										z[O] =
										z[y] =
										z[_] =
										z[x] =
										z[w] =
										z[k] =
										z[E] =
										z[A] =
										z[P] =
										z[I] =
										z[j] =
										z[B] =
											!0),
										(z['[object Error]'] = z[b] = z[o] = !1);
									var a = 'object' == typeof jt && jt && jt.Object === Object && jt,
										s = 'object' == typeof self && self && self.Object === Object && self,
										d = a || s || Function('return this')(),
										u = e && !e.nodeType && e,
										p = u && t && !t.nodeType && t,
										h = p && p.exports === u;
									function N(t, e) {
										return t.set(e[0], e[1]), t;
									}
									function U(t, e) {
										return t.add(e), t;
									}
									function G(t, e, n, i) {
										var o = -1,
											r = t ? t.length : 0;
										for (i && r && (n = t[++o]); ++o < r; ) n = e(n, t[o], o, t);
										return n;
									}
									function F(t) {
										var e = !1;
										if (null != t && 'function' != typeof t.toString)
											try {
												e = !!(t + '');
											} catch (t) {}
										return e;
									}
									function H(t) {
										var n = -1,
											i = Array(t.size);
										return (
											t.forEach(function (t, e) {
												i[++n] = [e, t];
											}),
											i
										);
									}
									function q(e, n) {
										return function (t) {
											return e(n(t));
										};
									}
									function K(t) {
										var e = -1,
											n = Array(t.size);
										return (
											t.forEach(function (t) {
												n[++e] = t;
											}),
											n
										);
									}
									var a = Array.prototype,
										s = Function.prototype,
										V = Object.prototype,
										e = d['__core-js_shared__'],
										W = (p = /[^.]+$/.exec((e && e.keys && e.keys.IE_PROTO) || ''))
											? 'Symbol(src)_1.' + p
											: '',
										$ = s.toString,
										Y = V.hasOwnProperty,
										Z = V.toString,
										Q = RegExp(
											'^' +
												$.call(Y)
													.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
													.replace(
														/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
														'$1.*?'
													) +
												'$'
										),
										u = h ? d.Buffer : void 0,
										e = d.Symbol,
										J = d.Uint8Array,
										X = q(Object.getPrototypeOf, Object),
										tt = Object.create,
										et = V.propertyIsEnumerable,
										nt = a.splice,
										p = Object.getOwnPropertySymbols,
										s = u ? u.isBuffer : void 0,
										it = q(Object.keys, Object),
										h = kt(d, 'DataView'),
										ot = kt(d, 'Map'),
										a = kt(d, 'Promise'),
										u = kt(d, 'Set'),
										d = kt(d, 'WeakMap'),
										rt = kt(Object, 'create'),
										at = Dt(h),
										st = Dt(ot),
										ct = Dt(a),
										lt = Dt(u),
										dt = Dt(d),
										e = e ? e.prototype : void 0,
										ut = e ? e.valueOf : void 0;
									function pt(t) {
										var e = -1,
											n = t ? t.length : 0;
										for (this.clear(); ++e < n; ) {
											var i = t[e];
											this.set(i[0], i[1]);
										}
									}
									function ht(t) {
										var e = -1,
											n = t ? t.length : 0;
										for (this.clear(); ++e < n; ) {
											var i = t[e];
											this.set(i[0], i[1]);
										}
									}
									function ft(t) {
										var e = -1,
											n = t ? t.length : 0;
										for (this.clear(); ++e < n; ) {
											var i = t[e];
											this.set(i[0], i[1]);
										}
									}
									function gt(t) {
										this.__data__ = new ht(t);
									}
									function mt(t, e) {
										var n,
											i,
											o,
											r =
												Tt(t) ||
												((i = n = t) &&
													'object' == typeof i &&
													Lt(i) &&
													Y.call(n, 'callee') &&
													(!et.call(n, 'callee') || Z.call(n) == f))
													? (function (t, e) {
															for (var n = -1, i = Array(t); ++n < t; ) i[n] = e(n);
															return i;
													  })(t.length, String)
													: [],
											a = r.length,
											s = !!a;
										for (o in t)
											(!e && !Y.call(t, o)) ||
												(s &&
													('length' == o ||
														(function t(e, n) {
															return (
																!!(n = null == n ? c : n) &&
																('number' == typeof e || l.test(e)) &&
																-1 < e &&
																e % 1 == 0 &&
																e < n
															);
														})(o, a))) ||
												r.push(o);
										return r;
									}
									function bt(t, e, n) {
										var i = t[e];
										(Y.call(t, e) && Rt(i, n) && (void 0 !== n || e in t)) || (t[e] = n);
									}
									function vt(t, e) {
										for (var n = t.length; n--; ) if (Rt(t[n][0], e)) return n;
										return -1;
									}
									function yt(r, a, s, c, t, e, l) {
										var d;
										if (void 0 !== (d = c ? (e ? c(r, t, e, l) : c(r)) : d)) return d;
										if (!Pt(r)) return r;
										var n,
											i = Tt(r);
										if (i) {
											if (
												((t = (n = r).length),
												(o = n.constructor(t)),
												t &&
													'string' == typeof n[0] &&
													Y.call(n, 'index') &&
													((o.index = n.index), (o.input = n.input)),
												(d = o),
												!a)
											)
												return (function (t, e) {
													var n = -1,
														i = t.length;
													for (e = e || Array(i); ++n < i; ) e[n] = t[n];
													return e;
												})(r, d);
										} else {
											var u = At(r),
												o = u == b || u == v;
											if (Ct(r))
												return (function (t) {
													if (a) return t.slice();
													var e = new t.constructor(t.length);
													return t.copy(e), e;
												})(r);
											if (u == x || u == f || (o && !e)) {
												if (F(r)) return e ? r : {};
												if (
													((d =
														'function' != typeof (o = o ? {} : r).constructor || St(o)
															? {}
															: Pt((o = X(o)))
															? tt(o)
															: {}),
													!a)
												)
													return (o = r), (h = (h = d) && xt(r, It(r), h)), xt(o, Et(o), h);
											} else {
												if (!z[u]) return e ? r : {};
												d = (function (t, e, n) {
													var i,
														o,
														r,
														a,
														s = t.constructor;
													switch (u) {
														case S:
															return _t(t);
														case g:
														case m:
															return new s(+t);
														case D:
															return (
																(r = t),
																(a = n ? _t(r.buffer) : r.buffer),
																new r.constructor(a, r.byteOffset, r.byteLength)
															);
														case R:
														case T:
														case L:
														case C:
														case O:
														case P:
														case I:
														case j:
														case B:
															return (
																(a = t),
																(r = n ? _t(a.buffer) : a.buffer),
																new a.constructor(r, a.byteOffset, a.length)
															);
														case y:
															return (o = t), G(n ? e(H(o), !0) : H(o), N, new o.constructor());
														case _:
														case E:
															return new s(t);
														case w:
															return (
																((i = new (o = t).constructor(o.source, M.exec(o))).lastIndex =
																	o.lastIndex),
																i
															);
														case k:
															return (i = t), G(n ? e(K(i), !0) : K(i), U, new i.constructor());
														case A:
															return ut ? Object(ut.call(t)) : {};
													}
												})(r, yt, a);
											}
										}
										var p,
											h = (l = l || new gt()).get(r);
										return (
											h ||
											(l.set(r, d),
											(function (t) {
												for (
													var e, n, i = -1, o = t ? t.length : 0;
													++i < o &&
													!1 !==
														((e = t[i]),
														(n = i),
														p && (e = r[(n = e)]),
														void bt(d, n, yt(e, a, s, c, n, r, l)));

												);
											})(
												(p = !i
													? s
														? ((e = Et),
														  (i = It((h = r))),
														  Tt(h)
																? i
																: (function (t, e) {
																		for (var n = -1, i = e.length, o = t.length; ++n < i; )
																			t[o + n] = e[n];
																		return t;
																  })(i, e(h)))
														: It(r)
													: p) || r
											),
											d)
										);
									}
									function _t(t) {
										var e = new t.constructor(t.byteLength);
										return new J(e).set(new J(t)), e;
									}
									function xt(t, e, n, i) {
										n = n || {};
										for (var o = -1, r = e.length; ++o < r; ) {
											var a = e[o],
												s = i ? i(n[a], t[a], a, n, t) : void 0;
											bt(n, a, void 0 === s ? t[a] : s);
										}
										return n;
									}
									function wt(t, e) {
										var n = t.__data__;
										return (
											'string' == (t = typeof e) || 'number' == t || 'symbol' == t || 'boolean' == t
												? '__proto__' !== e
												: null === e
										)
											? n['string' == typeof e ? 'string' : 'hash']
											: n.map;
									}
									function kt(t, e) {
										e = null == t ? void 0 : t[e];
										return (function t(e) {
											return Pt(e) && !(W && W in e) && (Ot(e) || F(e) ? Q : r).test(Dt(e));
										})(e)
											? e
											: void 0;
									}
									(pt.prototype.clear = function () {
										this.__data__ = rt ? rt(null) : {};
									}),
										(pt.prototype.delete = function (t) {
											return this.has(t) && delete this.__data__[t];
										}),
										(pt.prototype.get = function (t) {
											var e = this.__data__;
											if (rt) {
												var n = e[t];
												return n === i ? void 0 : n;
											}
											return Y.call(e, t) ? e[t] : void 0;
										}),
										(pt.prototype.has = function (t) {
											var e = this.__data__;
											return rt ? void 0 !== e[t] : Y.call(e, t);
										}),
										(pt.prototype.set = function (t, e) {
											return (this.__data__[t] = rt && void 0 === e ? i : e), this;
										}),
										(ht.prototype.clear = function () {
											this.__data__ = [];
										}),
										(ht.prototype.delete = function (t) {
											var e = this.__data__,
												t = vt(e, t);
											return !(t < 0 || (t == e.length - 1 ? e.pop() : nt.call(e, t, 1), 0));
										}),
										(ht.prototype.get = function (t) {
											var e = this.__data__,
												t = vt(e, t);
											return t < 0 ? void 0 : e[t][1];
										}),
										(ht.prototype.has = function (t) {
											return -1 < vt(this.__data__, t);
										}),
										(ht.prototype.set = function (t, e) {
											var n = this.__data__,
												i = vt(n, t);
											return i < 0 ? n.push([t, e]) : (n[i][1] = e), this;
										}),
										(ft.prototype.clear = function () {
											this.__data__ = { hash: new pt(), map: new (ot || ht)(), string: new pt() };
										}),
										(ft.prototype.delete = function (t) {
											return wt(this, t).delete(t);
										}),
										(ft.prototype.get = function (t) {
											return wt(this, t).get(t);
										}),
										(ft.prototype.has = function (t) {
											return wt(this, t).has(t);
										}),
										(ft.prototype.set = function (t, e) {
											return wt(this, t).set(t, e), this;
										}),
										(gt.prototype.clear = function () {
											this.__data__ = new ht();
										}),
										(gt.prototype.delete = function (t) {
											return this.__data__.delete(t);
										}),
										(gt.prototype.get = function (t) {
											return this.__data__.get(t);
										}),
										(gt.prototype.has = function (t) {
											return this.__data__.has(t);
										}),
										(gt.prototype.set = function (t, e) {
											var n = this.__data__;
											if (n instanceof ht) {
												var i = n.__data__;
												if (!ot || i.length < 199) return i.push([t, e]), this;
												n = this.__data__ = new ft(i);
											}
											return n.set(t, e), this;
										});
									var Et = p
											? q(p, Object)
											: function () {
													return [];
											  },
										At = function (t) {
											return Z.call(t);
										};
									function St(t) {
										var e = t && t.constructor;
										return t === (('function' == typeof e && e.prototype) || V);
									}
									function Dt(t) {
										if (null != t) {
											try {
												return $.call(t);
											} catch (t) {}
											try {
												return t + '';
											} catch (t) {}
										}
										return '';
									}
									function Rt(t, e) {
										return t === e || (t != t && e != e);
									}
									((h && At(new h(new ArrayBuffer(1))) != D) ||
										(ot && At(new ot()) != y) ||
										(a && At(a.resolve()) != n) ||
										(u && At(new u()) != k) ||
										(d && At(new d()) != o)) &&
										(At = function (t) {
											var e = Z.call(t),
												t = e == x ? t.constructor : void 0,
												t = t ? Dt(t) : void 0;
											if (t)
												switch (t) {
													case at:
														return D;
													case st:
														return y;
													case ct:
														return n;
													case lt:
														return k;
													case dt:
														return o;
												}
											return e;
										});
									var Tt = Array.isArray;
									function Lt(t) {
										return (
											null != t &&
											'number' == typeof (e = t.length) &&
											-1 < e &&
											e % 1 == 0 &&
											e <= c &&
											!Ot(t)
										);
										var e;
									}
									var Ct =
										s ||
										function () {
											return !1;
										};
									function Ot(t) {
										t = Pt(t) ? Z.call(t) : '';
										return t == b || t == v;
									}
									function Pt(t) {
										var e = typeof t;
										return t && ('object' == e || 'function' == e);
									}
									function It(t) {
										return (
											Lt(t)
												? mt
												: function (t) {
														if (!St(t)) return it(t);
														var e,
															n = [];
														for (e in Object(t)) Y.call(t, e) && 'constructor' != e && n.push(e);
														return n;
												  }
										)(t);
									}
									t.exports = function (t) {
										return yt(t, !0, !0);
									};
								});
							function gr(t) {
								return '[object Object]' === Object.prototype.toString.call(t);
							}
							function mr(t) {
								return (
									!1 !== gr(t) &&
									(void 0 === (t = t.constructor) ||
										(!1 !== gr((t = t.prototype)) && !1 !== t.hasOwnProperty('isPrototypeOf')))
								);
							}
							function br(t) {
								if (t) {
									var e = kr.call(t);
									return (
										'[object Function]' === e ||
										('function' == typeof t && '[object RegExp]' !== e) ||
										('undefined' != typeof window &&
											(t === window.setTimeout ||
												t === window.alert ||
												t === window.confirm ||
												t === window.prompt))
									);
								}
							}
							var vr = String.prototype.valueOf,
								yr = Object.prototype.toString,
								_r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag,
								He = Array.isArray,
								xr = Object.prototype.toString,
								wr =
									He ||
									function (t) {
										return !!t && '[object Array]' == xr.call(t);
									},
								kr = Object.prototype.toString,
								Er = t(function (x, w) {
									!(function (o, u) {
										var p = 'function',
											t = 'model',
											e = 'name',
											n = 'type',
											i = 'vendor',
											r = 'version',
											a = 'architecture',
											s = 'console',
											c = 'mobile',
											l = 'tablet',
											d = 'smarttv',
											h = 'wearable',
											f = {
												extend: function (t, e) {
													var n,
														i = {};
													for (n in t)
														e[n] && e[n].length % 2 == 0
															? (i[n] = e[n].concat(t[n]))
															: (i[n] = t[n]);
													return i;
												},
												has: function (t, e) {
													return (
														'string' == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
													);
												},
												lowerize: function (t) {
													return t.toLowerCase();
												},
												major: function (t) {
													return 'string' == typeof t ? t.replace(/[^\d\.]/g, '').split('.')[0] : u;
												},
												trim: function (t) {
													return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
												}
											},
											g = {
												rgx: function (t, e) {
													for (var n, i, o, r, a, s = 0; s < e.length && !r; ) {
														for (var c = e[s], l = e[s + 1], d = (n = 0); d < c.length && !r; )
															if ((r = c[d++].exec(t)))
																for (i = 0; i < l.length; i++)
																	(a = r[++n]),
																		'object' == typeof (o = l[i]) && 0 < o.length
																			? 2 == o.length
																				? typeof o[1] == p
																					? (this[o[0]] = o[1].call(this, a))
																					: (this[o[0]] = o[1])
																				: 3 == o.length
																				? typeof o[1] != p || (o[1].exec && o[1].test)
																					? (this[o[0]] = a ? a.replace(o[1], o[2]) : u)
																					: (this[o[0]] = a ? o[1].call(this, a, o[2]) : u)
																				: 4 == o.length &&
																				  (this[o[0]] = a
																						? o[3].call(this, a.replace(o[1], o[2]))
																						: u)
																			: (this[o] = a || u);
														s += 2;
													}
												},
												str: function (t, e) {
													for (var n in e)
														if ('object' == typeof e[n] && 0 < e[n].length) {
															for (var i = 0; i < e[n].length; i++)
																if (f.has(e[n][i], t)) return '?' === n ? u : n;
														} else if (f.has(e[n], t)) return '?' === n ? u : n;
													return t;
												}
											},
											m = {
												browser: {
													oldsafari: {
														version: {
															'1.0': '/8',
															1.2: '/1',
															1.3: '/3',
															'2.0': '/412',
															'2.0.2': '/416',
															'2.0.3': '/417',
															'2.0.4': '/419',
															'?': '/'
														}
													}
												},
												device: {
													amazon: { model: { 'Fire Phone': ['SD', 'KF'] } },
													sprint: {
														model: { 'Evo Shift 4G': '7373KT' },
														vendor: { HTC: 'APA', Sprint: 'Sprint' }
													}
												},
												os: {
													windows: {
														version: {
															ME: '4.90',
															'NT 3.11': 'NT3.51',
															'NT 4.0': 'NT4.0',
															2e3: 'NT 5.0',
															XP: ['NT 5.1', 'NT 5.2'],
															Vista: 'NT 6.0',
															7: 'NT 6.1',
															8: 'NT 6.2',
															8.1: 'NT 6.3',
															10: ['NT 6.4', 'NT 10.0'],
															RT: 'ARM'
														}
													}
												}
											},
											b = {
												browser: [
													[
														/(opera\smini)\/([\w\.-]+)/i,
														/(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,
														/(opera).+version\/([\w\.]+)/i,
														/(opera)[\/\s]+([\w\.]+)/i
													],
													[e, r],
													[/(opios)[\/\s]+([\w\.]+)/i],
													[[e, 'Opera Mini'], r],
													[/\s(opr)\/([\w\.]+)/i],
													[[e, 'Opera'], r],
													[
														/(kindle)\/([\w\.]+)/i,
														/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
														/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
														/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
														/(?:ms|\()(ie)\s([\w\.]+)/i,
														/(rekonq)\/([\w\.]*)/i,
														/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
													],
													[e, r],
													[/(konqueror)\/([\w\.]+)/i],
													[[e, 'Konqueror'], r],
													[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],
													[[e, 'IE'], r],
													[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
													[[e, 'Edge'], r],
													[/(yabrowser)\/([\w\.]+)/i],
													[[e, 'Yandex'], r],
													[/(Avast)\/([\w\.]+)/i],
													[[e, 'Avast Secure Browser'], r],
													[/(AVG)\/([\w\.]+)/i],
													[[e, 'AVG Secure Browser'], r],
													[/(puffin)\/([\w\.]+)/i],
													[[e, 'Puffin'], r],
													[/(focus)\/([\w\.]+)/i],
													[[e, 'Firefox Focus'], r],
													[/(opt)\/([\w\.]+)/i],
													[[e, 'Opera Touch'], r],
													[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
													[[e, 'UCBrowser'], r],
													[/(comodo_dragon)\/([\w\.]+)/i],
													[[e, /_/g, ' '], r],
													[/(windowswechat qbcore)\/([\w\.]+)/i],
													[[e, 'WeChat(Win) Desktop'], r],
													[/(micromessenger)\/([\w\.]+)/i],
													[[e, 'WeChat'], r],
													[/(brave)\/([\w\.]+)/i],
													[[e, 'Brave'], r],
													[/(whale)\/([\w\.]+)/i],
													[[e, 'Whale'], r],
													[/(qqbrowserlite)\/([\w\.]+)/i],
													[e, r],
													[/(QQ)\/([\d\.]+)/i],
													[e, r],
													[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
													[e, r],
													[/(baiduboxapp)[\/\s]?([\w\.]+)/i],
													[e, r],
													[/(2345Explorer)[\/\s]?([\w\.]+)/i],
													[e, r],
													[/(MetaSr)[\/\s]?([\w\.]+)/i],
													[e],
													[/(LBBROWSER)/i],
													[e],
													[/xiaomi\/miuibrowser\/([\w\.]+)/i],
													[r, [e, 'MIUI Browser']],
													[/;fbav\/([\w\.]+);/i],
													[r, [e, 'Facebook']],
													[/FBAN\/FBIOS|FB_IAB\/FB4A/i],
													[[e, 'Facebook']],
													[/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
													[e, r],
													[/headlesschrome(?:\/([\w\.]+)|\s)/i],
													[r, [e, 'Chrome Headless']],
													[/\swv\).+(chrome)\/([\w\.]+)/i],
													[[e, /(.+)/, '$1 WebView'], r],
													[/((?:oculus|samsung)browser)\/([\w\.]+)/i],
													[[e, /(.+(?:g|us))(.+)/, '$1 $2'], r],
													[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
													[r, [e, 'Android Browser']],
													[/(sailfishbrowser)\/([\w\.]+)/i],
													[[e, 'Sailfish Browser'], r],
													[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
													[e, r],
													[/(dolfin)\/([\w\.]+)/i],
													[[e, 'Dolphin'], r],
													[/(qihu|qhbrowser|qihoobrowser|360browser)/i],
													[[e, '360 Browser']],
													[/((?:android.+)crmo|crios)\/([\w\.]+)/i],
													[[e, 'Chrome'], r],
													[/(coast)\/([\w\.]+)/i],
													[[e, 'Opera Coast'], r],
													[/fxios\/([\w\.-]+)/i],
													[r, [e, 'Firefox']],
													[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
													[r, [e, 'Mobile Safari']],
													[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
													[r, e],
													[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],
													[[e, 'GSA'], r],
													[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
													[e, [r, g.str, m.browser.oldsafari.version]],
													[/(webkit|khtml)\/([\w\.]+)/i],
													[e, r],
													[/(navigator|netscape)\/([\w\.-]+)/i],
													[[e, 'Netscape'], r],
													[
														/(swiftfox)/i,
														/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
														/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
														/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
														/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,
														/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
														/(links)\s\(([\w\.]+)/i,
														/(gobrowser)\/?([\w\.]*)/i,
														/(ice\s?browser)\/v?([\w\._]+)/i,
														/(mosaic)[\/\s]([\w\.]+)/i
													],
													[e, r]
												],
												cpu: [
													[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
													[[a, 'amd64']],
													[/(ia32(?=;))/i],
													[[a, f.lowerize]],
													[/((?:i[346]|x)86)[;\)]/i],
													[[a, 'ia32']],
													[/windows\s(ce|mobile);\sppc;/i],
													[[a, 'arm']],
													[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
													[[a, /ower/, '', f.lowerize]],
													[/(sun4\w)[;\)]/i],
													[[a, 'sparc']],
													[
														/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
													],
													[[a, f.lowerize]]
												],
												device: [
													[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
													[t, i, [n, l]],
													[/applecoremedia\/[\w\.]+ \((ipad)/],
													[t, [i, 'Apple'], [n, l]],
													[/(apple\s{0,1}tv)/i],
													[
														[t, 'Apple TV'],
														[i, 'Apple'],
														[n, d]
													],
													[
														/(archos)\s(gamepad2?)/i,
														/(hp).+(touchpad)/i,
														/(hp).+(tablet)/i,
														/(kindle)\/([\w\.]+)/i,
														/\s(nook)[\w\s]+build\/(\w+)/i,
														/(dell)\s(strea[kpr\s\d]*[\dko])/i
													],
													[i, t, [n, l]],
													[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],
													[t, [i, 'Amazon'], [n, l]],
													[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
													[
														[t, g.str, m.device.amazon.model],
														[i, 'Amazon'],
														[n, c]
													],
													[/android.+aft([bms])\sbuild/i],
													[t, [i, 'Amazon'], [n, d]],
													[/\((ip[honed|\s\w*]+);.+(apple)/i],
													[t, i, [n, c]],
													[/\((ip[honed|\s\w*]+);/i],
													[t, [i, 'Apple'], [n, c]],
													[
														/(blackberry)[\s-]?(\w+)/i,
														/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
														/(hp)\s([\w\s]+\w)/i,
														/(asus)-?(\w+)/i
													],
													[i, t, [n, c]],
													[/\(bb10;\s(\w+)/i],
													[t, [i, 'BlackBerry'], [n, c]],
													[
														/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i
													],
													[t, [i, 'Asus'], [n, l]],
													[/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
													[
														[i, 'Sony'],
														[t, 'Xperia Tablet'],
														[n, l]
													],
													[
														/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
													],
													[t, [i, 'Sony'], [n, c]],
													[/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
													[i, t, [n, s]],
													[/android.+;\s(shield)\sbuild/i],
													[t, [i, 'Nvidia'], [n, s]],
													[/(playstation\s[34portablevi]+)/i],
													[t, [i, 'Sony'], [n, s]],
													[/(sprint\s(\w+))/i],
													[
														[i, g.str, m.device.sprint.vendor],
														[t, g.str, m.device.sprint.model],
														[n, c]
													],
													[
														/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,
														/(zte)-(\w*)/i,
														/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
													],
													[i, [t, /_/g, ' '], [n, c]],
													[/(nexus\s9)/i],
													[t, [i, 'HTC'], [n, l]],
													[
														/d\/huawei([\w\s-]+)[;\)]/i,
														/android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i
													],
													[t, [i, 'Huawei'], [n, c]],
													[/android.+(bah2?-a?[lw]\d{2})/i],
													[t, [i, 'Huawei'], [n, l]],
													[/(microsoft);\s(lumia[\s\w]+)/i],
													[i, t, [n, c]],
													[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
													[t, [i, 'Microsoft'], [n, s]],
													[/(kin\.[onetw]{3})/i],
													[
														[t, /\./g, ' '],
														[i, 'Microsoft'],
														[n, c]
													],
													[
														/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
														/mot[\s-]?(\w*)/i,
														/(XT\d{3,4}) build\//i,
														/(nexus\s6)/i
													],
													[t, [i, 'Motorola'], [n, c]],
													[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
													[t, [i, 'Motorola'], [n, l]],
													[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
													[
														[i, f.trim],
														[t, f.trim],
														[n, d]
													],
													[/hbbtv.+maple;(\d+)/i],
													[
														[t, /^/, 'SmartTV'],
														[i, 'Samsung'],
														[n, d]
													],
													[/\(dtv[\);].+(aquos)/i],
													[t, [i, 'Sharp'], [n, d]],
													[
														/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
														/((SM-T\w+))/i
													],
													[[i, 'Samsung'], t, [n, l]],
													[/smart-tv.+(samsung)/i],
													[i, [n, d], t],
													[
														/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
														/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
														/sec-((sgh\w+))/i
													],
													[[i, 'Samsung'], t, [n, c]],
													[/sie-(\w*)/i],
													[t, [i, 'Siemens'], [n, c]],
													[/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
													[[i, 'Nokia'], t, [n, c]],
													[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
													[t, [i, 'Acer'], [n, l]],
													[/android.+([vl]k\-?\d{3})\s+build/i],
													[t, [i, 'LG'], [n, l]],
													[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
													[[i, 'LG'], t, [n, l]],
													[/linux;\snetcast.+smarttv/i, /lg\snetcast\.tv-201\d/i],
													[[i, 'LG'], t, [n, d]],
													[
														/(nexus\s[45])/i,
														/lg[e;\s\/-]+(\w*)/i,
														/android.+lg(\-?[\d\w]+)\s+build/i
													],
													[t, [i, 'LG'], [n, c]],
													[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
													[i, t, [n, l]],
													[/android.+(ideatab[a-z0-9\-\s]+)/i],
													[t, [i, 'Lenovo'], [n, l]],
													[/(lenovo)[_\s-]?([\w-]+)/i],
													[i, t, [n, c]],
													[/linux;.+((jolla));/i],
													[i, t, [n, c]],
													[/((pebble))app\/[\d\.]+\s/i],
													[i, t, [n, h]],
													[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
													[i, t, [n, c]],
													[/crkey/i],
													[
														[t, 'Chromecast'],
														[i, 'Google'],
														[n, d]
													],
													[/android.+;\s(glass)\s\d/i],
													[t, [i, 'Google'], [n, h]],
													[/android.+;\s(pixel c)[\s)]/i],
													[t, [i, 'Google'], [n, l]],
													[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],
													[t, [i, 'Google'], [n, c]],
													[
														/android.+;\s(\w+)\s+build\/hm\1/i,
														/android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
														/android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,
														/android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i
													],
													[
														[t, /_/g, ' '],
														[i, 'Xiaomi'],
														[n, c]
													],
													[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],
													[
														[t, /_/g, ' '],
														[i, 'Xiaomi'],
														[n, l]
													],
													[/android.+;\s(m[1-5]\snote)\sbuild/i],
													[t, [i, 'Meizu'], [n, c]],
													[/(mz)-([\w-]{2,})/i],
													[[i, 'Meizu'], t, [n, c]],
													[/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
													[t, [i, 'OnePlus'], [n, c]],
													[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
													[t, [i, 'RCA'], [n, l]],
													[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],
													[t, [i, 'Dell'], [n, l]],
													[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
													[t, [i, 'Verizon'], [n, l]],
													[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
													[[i, 'Barnes & Noble'], t, [n, l]],
													[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
													[t, [i, 'NuVision'], [n, l]],
													[/android.+;\s(k88)\sbuild/i],
													[t, [i, 'ZTE'], [n, l]],
													[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
													[t, [i, 'Swiss'], [n, c]],
													[/android.+[;\/]\s*(zur\d{3})\s+build/i],
													[t, [i, 'Swiss'], [n, l]],
													[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
													[t, [i, 'Zeki'], [n, l]],
													[
														/(android).+[;\/]\s+([YR]\d{2})\s+build/i,
														/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i
													],
													[[i, 'Dragon Touch'], t, [n, l]],
													[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
													[t, [i, 'Insignia'], [n, l]],
													[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
													[t, [i, 'NextBook'], [n, l]],
													[
														/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
													],
													[[i, 'Voice'], t, [n, c]],
													[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
													[[i, 'LvTel'], t, [n, c]],
													[/android.+;\s(PH-1)\s/i],
													[t, [i, 'Essential'], [n, c]],
													[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
													[t, [i, 'Envizen'], [n, l]],
													[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
													[i, t, [n, l]],
													[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],
													[t, [i, 'MachSpeed'], [n, l]],
													[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
													[i, t, [n, l]],
													[/android.+[;\/]\s*TU_(1491)\s+build/i],
													[t, [i, 'Rotor'], [n, l]],
													[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
													[i, t, [n, l]],
													[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
													[t, [n, c]],
													[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
													[t, [n, l]],
													[/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
													[[n, f.lowerize], i, t],
													[/[\s\/\(](smart-?tv)[;\)]/i],
													[[n, d]],
													[/(android[\w\.\s\-]{0,9});.+build/i],
													[t, [i, 'Generic']]
												],
												engine: [
													[/windows.+\sedge\/([\w\.]+)/i],
													[r, [e, 'EdgeHTML']],
													[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
													[r, [e, 'Blink']],
													[
														/(presto)\/([\w\.]+)/i,
														/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
														/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
														/(icab)[\/\s]([23]\.[\d\.]+)/i
													],
													[e, r],
													[/rv\:([\w\.]{1,9}).+(gecko)/i],
													[r, e]
												],
												os: [
													[/microsoft\s(windows)\s(vista|xp)/i],
													[e, r],
													[
														/(windows)\snt\s6\.2;\s(arm)/i,
														/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
														/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
													],
													[e, [r, g.str, m.os.windows.version]],
													[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
													[
														[e, 'Windows'],
														[r, g.str, m.os.windows.version]
													],
													[/\((bb)(10);/i],
													[[e, 'BlackBerry'], r],
													[
														/(blackberry)\w*\/?([\w\.]*)/i,
														/(tizen|kaios)[\/\s]([\w\.]+)/i,
														/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
													],
													[e, r],
													[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
													[[e, 'Symbian'], r],
													[/\((series40);/i],
													[e],
													[/mozilla.+\(mobile;.+gecko.+firefox/i],
													[[e, 'Firefox OS'], r],
													[/crkey\/([\d\.]+)/i],
													[r, [e, 'Chromecast']],
													[
														/(nintendo|playstation)\s([wids34portablevu]+)/i,
														/(mint)[\/\s\(]?(\w*)/i,
														/(mageia|vectorlinux)[;\s]/i,
														/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
														/(hurd|linux)\s?([\w\.]*)/i,
														/(gnu)\s?([\w\.]*)/i
													],
													[e, r],
													[/(cros)\s[\w]+\s([\w\.]+\w)/i],
													[[e, 'Chromium OS'], r],
													[/(sunos)\s?([\w\.\d]*)/i],
													[[e, 'Solaris'], r],
													[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
													[e, r],
													[/(haiku)\s(\w+)/i],
													[e, r],
													[
														/cfnetwork\/.+darwin/i,
														/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i
													],
													[
														[r, /_/g, '.'],
														[e, 'iOS']
													],
													[/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
													[
														[e, 'Mac OS'],
														[r, /_/g, '.']
													],
													[
														/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
														/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
														/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
														/(unix)\s?([\w\.]*)/i
													],
													[e, r]
												]
											},
											v = function (t, e) {
												if (('object' == typeof t && ((e = t), (t = u)), !(this instanceof v)))
													return new v(t, e).getResult();
												var n =
														t ||
														(o && o.navigator && o.navigator.userAgent
															? o.navigator.userAgent
															: ''),
													i = e ? f.extend(b, e) : b;
												return (
													(this.getBrowser = function () {
														var t = { name: u, version: u };
														return g.rgx.call(t, n, i.browser), (t.major = f.major(t.version)), t;
													}),
													(this.getCPU = function () {
														var t = { architecture: u };
														return g.rgx.call(t, n, i.cpu), t;
													}),
													(this.getDevice = function () {
														var t = { vendor: u, model: u, type: u };
														return g.rgx.call(t, n, i.device), t;
													}),
													(this.getEngine = function () {
														var t = { name: u, version: u };
														return g.rgx.call(t, n, i.engine), t;
													}),
													(this.getOS = function () {
														var t = { name: u, version: u };
														return g.rgx.call(t, n, i.os), t;
													}),
													(this.getResult = function () {
														return {
															ua: this.getUA(),
															browser: this.getBrowser(),
															engine: this.getEngine(),
															os: this.getOS(),
															device: this.getDevice(),
															cpu: this.getCPU()
														};
													}),
													(this.getUA = function () {
														return n;
													}),
													(this.setUA = function (t) {
														return (n = t), this;
													}),
													this
												);
											};
										(v.VERSION = '0.7.23'),
											(v.BROWSER = { NAME: e, MAJOR: 'major', VERSION: r }),
											(v.CPU = { ARCHITECTURE: a }),
											(v.DEVICE = {
												MODEL: t,
												VENDOR: i,
												TYPE: n,
												CONSOLE: s,
												MOBILE: c,
												SMARTTV: d,
												TABLET: l,
												WEARABLE: h,
												EMBEDDED: 'embedded'
											}),
											(v.ENGINE = { NAME: e, VERSION: r }),
											(v.OS = { NAME: e, VERSION: r }),
											((w = x.exports ? (x.exports = v) : w).UAParser = v);
										var y,
											_ = o && (o.jQuery || o.Zepto);
										_ &&
											!_.ua &&
											((y = new v()),
											(_.ua = y.getResult()),
											(_.ua.get = function () {
												return y.getUA();
											}),
											(_.ua.set = function (t) {
												y.setUA(t);
												var e,
													n = y.getResult();
												for (e in n) _.ua[e] = n[e];
											}));
									})('object' == typeof window ? window : jt);
								}),
								Ar = t(function (E, t) {
									var e;
									(e =
										'undefined' != typeof self ? self : 'undefined' != typeof window ? window : jt),
										(E.exports = (function (e) {
											function n(t) {
												if (t.length < 2)
													return (e = t.charCodeAt(0)) < 128
														? t
														: e < 2048
														? u(192 | (e >>> 6)) + u(128 | (63 & e))
														: u(224 | ((e >>> 12) & 15)) +
														  u(128 | ((e >>> 6) & 63)) +
														  u(128 | (63 & e));
												var e =
													65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
												return (
													u(240 | ((e >>> 18) & 7)) +
													u(128 | ((e >>> 12) & 63)) +
													u(128 | ((e >>> 6) & 63)) +
													u(128 | (63 & e))
												);
											}
											function i(t) {
												return t.replace(p, n);
											}
											function o(t) {
												var e = [0, 2, 1][t.length % 3],
													t =
														(t.charCodeAt(0) << 16) |
														((1 < t.length ? t.charCodeAt(1) : 0) << 8) |
														(2 < t.length ? t.charCodeAt(2) : 0);
												return [
													l.charAt(t >>> 18),
													l.charAt((t >>> 12) & 63),
													2 <= e ? '=' : l.charAt((t >>> 6) & 63),
													1 <= e ? '=' : l.charAt(63 & t)
												].join('');
											}
											function r(t) {
												return h(i(String(t)));
											}
											function c(t) {
												return t
													.replace(/[+\/]/g, function (t) {
														return '+' == t ? '-' : '_';
													})
													.replace(/=/g, '');
											}
											function a(t, e) {
												return e ? c(r(t)) : r(t);
											}
											var t,
												s = (e = e || {}).Base64,
												l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
												d = (function (t) {
													for (var e = {}, n = 0, i = t.length; n < i; n++) e[t.charAt(n)] = n;
													return e;
												})(l),
												u = String.fromCharCode,
												p = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
												h =
													e.btoa && 'function' == typeof e.btoa
														? function (t) {
																return e.btoa(t);
														  }
														: function (t) {
																if (t.match(/[^\x00-\xFF]/))
																	throw new RangeError('The string contains invalid characters.');
																return t.replace(/[\s\S]{1,3}/g, o);
														  };
											e.Uint8Array &&
												(t = function (t, e) {
													for (var n = '', i = 0, o = t.length; i < o; i += 3) {
														var r = t[i],
															a = t[i + 1],
															s = t[i + 2],
															r = (r << 16) | (a << 8) | s;
														n +=
															l.charAt(r >>> 18) +
															l.charAt((r >>> 12) & 63) +
															(void 0 !== a ? l.charAt((r >>> 6) & 63) : '=') +
															(void 0 !== s ? l.charAt(63 & r) : '=');
													}
													return e ? c(n) : n;
												});
											function f(t) {
												switch (t.length) {
													case 4:
														var e =
															(((7 & t.charCodeAt(0)) << 18) |
																((63 & t.charCodeAt(1)) << 12) |
																((63 & t.charCodeAt(2)) << 6) |
																(63 & t.charCodeAt(3))) -
															65536;
														return u(55296 + (e >>> 10)) + u(56320 + (1023 & e));
													case 3:
														return u(
															((15 & t.charCodeAt(0)) << 12) |
																((63 & t.charCodeAt(1)) << 6) |
																(63 & t.charCodeAt(2))
														);
													default:
														return u(((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1)));
												}
											}
											function g(t) {
												return t.replace(x, f);
											}
											function m(t) {
												var e = t.length,
													n = e % 4,
													t =
														(0 < e ? d[t.charAt(0)] << 18 : 0) |
														(1 < e ? d[t.charAt(1)] << 12 : 0) |
														(2 < e ? d[t.charAt(2)] << 6 : 0) |
														(3 < e ? d[t.charAt(3)] : 0);
												return (
													((t = [u(t >>> 16), u((t >>> 8) & 255), u(255 & t)]).length -= [
														0, 0, 2, 1
													][n]),
													t.join('')
												);
											}
											function b(t) {
												return w(String(t).replace(/[^A-Za-z0-9\+\/]/g, ''));
											}
											function v(t) {
												return String(t)
													.replace(/[-_]/g, function (t) {
														return '-' == t ? '+' : '/';
													})
													.replace(/[^A-Za-z0-9\+\/]/g, '');
											}
											function y(t) {
												return (t = v(t)), g(w(t));
											}
											var _,
												x =
													/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
												w =
													e.atob && 'function' == typeof e.atob
														? function (t) {
																return e.atob(t);
														  }
														: function (t) {
																return t.replace(/\S{1,4}/g, m);
														  };
											e.Uint8Array &&
												(_ = function (t) {
													return Uint8Array.from(b(v(t)), function (t) {
														return t.charCodeAt(0);
													});
												});
											var k;
											return (
												(e.Base64 = {
													VERSION: '2.6.4',
													atob: b,
													btoa: h,
													fromBase64: y,
													toBase64: a,
													utob: i,
													encode: a,
													encodeURI: function (t) {
														return a(t, !0);
													},
													btou: g,
													decode: y,
													noConflict: function () {
														var t = e.Base64;
														return (e.Base64 = s), t;
													},
													fromUint8Array: t,
													toUint8Array: _
												}),
												'function' == typeof Object.defineProperty &&
													((k = function (t) {
														return { value: t, enumerable: !1, writable: !0, configurable: !0 };
													}),
													(e.Base64.extendString = function () {
														Object.defineProperty(
															String.prototype,
															'fromBase64',
															k(function () {
																return y(this);
															})
														),
															Object.defineProperty(
																String.prototype,
																'toBase64',
																k(function (t) {
																	return a(this, t);
																})
															),
															Object.defineProperty(
																String.prototype,
																'toBase64URI',
																k(function () {
																	return a(this, !0);
																})
															);
													})),
												e.Meteor && (Base64 = e.Base64),
												E.exports && (E.exports.Base64 = e.Base64),
												{ Base64: e.Base64 }
											);
										})(e));
								}),
								Sr = {
									Rewarded: 'rewarded',
									Interstitial: 'interstitial',
									Preroll: 'interstitial',
									Midroll: 'interstitial',
									Display: 'display'
								};
							function Dr(t, e) {
								for (var n in e)
									e.hasOwnProperty(n) && null !== e[n] && void 0 !== e[n] && (t[n] = e[n]);
								return t;
							}
							function Rr(t, e) {
								(e = e || window.location.href),
									(e = new RegExp('[?&]' + t + '=([^&#]*)', 'i').exec(e));
								return e ? e[1] : null;
							}
							function Tr() {
								for (
									var t,
										e = /\+/g,
										n = /([^&=]+)=?([^&]*)/g,
										i = function (t) {
											return decodeURIComponent(t.toLowerCase().replace(e, ' '));
										},
										o = window.location.search.substring(1),
										r = {};
									(t = n.exec(o));

								)
									r[i(t[1])] = i(t[2]);
								return r;
							}
							function Lr(t) {
								for (
									;
									(function t(e) {
										return (e = e || '') !== decodeURIComponent(e);
									})(t);

								)
									t = decodeURIComponent(t);
								return t;
							}
							function Cr(r, a, s) {
								return new Promise(function (t, e) {
									var n, i, o;
									s && s.exists && s.exists()
										? t()
										: ((i =
												(n =
													s && s.alternates && 0 < s.alternates.length
														? (function (t) {
																if (t && t.length) {
																	var e = document.querySelectorAll('script');
																	if (e)
																		for (var n in e) {
																			n = e[n];
																			if (t.includes(n.src)) return n;
																		}
																}
														  })(s.alternates)
														: void 0) || document.createElement('script')),
										  (o = s && s.error_prefix ? s.error_prefix : 'Failed:'),
										  (i.onload = function () {
												s && s.exists && !s.exists() ? e(''.concat(o, ' ').concat(r)) : t();
										  }),
										  (i.onerror = function () {
												e(''.concat(o, ' ').concat(r));
										  }),
										  n ||
												((i.type = 'text/javascript'),
												(i.async = !0),
												(i.src = r),
												(i.id = a),
												document.head.appendChild(i)));
								});
							}
							function Or() {
								var t = 0,
									e = window;
								try {
									for (; e != e.parent; ) t++, (e = e.parent);
								} catch (t) {}
								return t;
							}
							function Pr(t, e) {
								return (function t(e) {
									return localStorage.getItem(e);
								})(t)
									? 'true' === (t = localStorage.getItem(t)) || !0 === t || 1 === t || '1' === t
									: e;
							}
							function Ir(t) {
								localStorage.removeItem(t);
							}
							function jr(t, e) {
								localStorage.setItem(t, e);
							}
							var Br = (function () {
									var t = Date.now();
									try {
										return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
									} catch (t) {
										return !1;
									}
								})(),
								Mr = Date.now(),
								zr = { console: !1 };
							function Nr(t, e, n) {
								try {
									var i;
									((Br && Pr('gd_debug_ex')) || (zr && !0 === zr.console)) &&
										((i =
											'error' === n
												? 'background: #c4161e; color: #fff'
												: 'warning' === n
												? 'background: #ff8c1c; color: #fff'
												: 'info' === n
												? 'background: #ff0080; color: #fff'
												: 'background: #44a5ab; color: #fff'),
										(i = console.log(
											'[' + (Date.now() - Mr) / 1e3 + 's]%c %c %c gdsdk %c %c %c ' + t + ' ',
											'background: #9854d8',
											'background: #6c2ca7',
											'color: #fff; background: #450f78;',
											'background: #6c2ca7',
											'background: #9854d8',
											i,
											void 0 !== e ? e : ''
										)),
										console.log.apply(console, i));
								} catch (t) {
									console.log(t);
								}
							}
							var Ur = [
									'SDK_READY',
									'SDK_ERROR',
									'SDK_LB_LOGIN',
									'SDK_SHW_LB',
									'SDK_GAME_START',
									'SDK_GAME_PAUSE',
									'SDK_GDPR_TRACKING',
									'SDK_GDPR_TARGETING',
									'SDK_GDPR_THIRD_PARTY',
									'AD_SDK_MANAGER_READY',
									'AD_SDK_CANCELED',
									'AD_IS_ALREADY_RUNNING'
								],
								Gr = [
									'AD_ERROR',
									'AD_BREAK_READY',
									'AD_METADATA',
									'ALL_ADS_COMPLETED',
									'CLICK',
									'COMPLETE',
									'CONTENT_PAUSE_REQUESTED',
									'CONTENT_RESUME_REQUESTED',
									'DURATION_CHANGE',
									'FIRST_QUARTILE',
									'IMPRESSION',
									'INTERACTION',
									'LINEAR_CHANGED',
									'LOADED',
									'LOG',
									'MIDPOINT',
									'PAUSED',
									'RESUMED',
									'SKIPPABLE_STATE_CHANGED',
									'SKIPPED',
									'STARTED',
									'THIRD_QUARTILE',
									'USER_CLOSE',
									'VOLUME_CHANGED',
									'VOLUME_MUTED',
									'DISPLAYAD_IMPRESSION',
									'DISPLAYAD_ERROR'
								],
								Fr = 1010,
								Hr = 1010,
								qr = 1020,
								Kr = 1030,
								Vr = 1100,
								Wr = null,
								$r =
									(ko(ia, [
										{
											key: '_getListenerIdx',
											value: function (t, e, n) {
												var i,
													o = this.listeners[t],
													r = -1;
												if (!o || 0 === o.length) return r;
												for (i = 0; i < o.length; i++)
													if (o[i].callback === e && (!n || n === o[i].scope)) {
														r = i;
														break;
													}
												return r;
											}
										},
										{
											key: 'subscribe',
											value: function (t, e, n) {
												if (!t) throw new Error('Event name cannot be null or undefined.');
												if (!e || 'function' != typeof e)
													throw new Error('Listener must be of type function.');
												0 <= this._getListenerIdx(t, e, n)
													? console.log(t, n)
													: ((n = { callback: e, scope: n }),
													  (this.listeners[t] = this.listeners[t] || []),
													  this.listeners[t].push(n));
											}
										},
										{
											key: 'unsubscribeScope',
											value: function (t) {
												for (var e = Object.keys(this.listeners), n = 0; n < e.length; n++) {
													for (var i = e[n], o = this.listeners[i], r = 0; r < o.length; r++)
														o[r].scope === t && (o.splice(r, 1), r--);
													0 === o.length && delete this.listeners[i];
												}
											}
										},
										{
											key: 'broadcast',
											value: function (t, e) {
												var n = this.listeners[t];
												t &&
													this.listeners[t] &&
													(((e = e || {}).name = e.name || t),
													n.forEach(function (t) {
														t.callback.call(t.scope, e, t.scope);
													}));
											}
										},
										{
											key: 'printScope',
											value: function (t) {
												for (var e = Object.keys(this.listeners), n = 0; n < e.length; n++)
													for (var i = e[n], o = this.listeners[i], r = 0; r < o.length; r++)
														o[r].scope === t && console.log(i, t);
											}
										}
									]),
									ia),
								Yr =
									(ko(na, [
										{
											key: 'transform',
											value: function (t, e) {
												t = fr(t);
												return this.transformValue(t, e);
											}
										},
										{
											key: 'transformValue',
											value: function (e, t) {
												if (mr(e) || wr(e)) for (var n in e) e[n] = this.transformValue(e[n], t);
												else if (
													'string' == typeof (c = e) ||
													('object' == typeof c &&
														(_r
															? (function (t) {
																	try {
																		return vr.call(t), !0;
																	} catch (t) {
																		return !1;
																	}
															  })(c)
															: '[object String]' === yr.call(c)))
												) {
													var i,
														o,
														r,
														a = /\{\{(\w+)\}\}/g,
														s = [];
													do {} while (
														((i = a.exec(e)) &&
															(i[0],
															(o = i[1]),
															void 0 !== (r = this.getMacroKeyValue(o, t)) &&
																s.push({ key: o, value: r })),
														i)
													);
													0 < s.length &&
														s.forEach(function (t) {
															e = e.replace(new RegExp('{{' + t.key + '}}', 'g'), t.value);
														});
												}
												var c;
												return e;
											}
										},
										{
											key: 'getMacroKeyValue',
											value: function (t, e) {
												switch (t) {
													case 'CACHEBUSTER':
														return Date.now();
													case 'GAME_ID':
														return this.game.gameId;
													case 'GAME_TITLE':
														return this.game.title;
													case 'COUNTRY_CODE':
														return this.game.ctry;
													case 'PAGE_URL':
														return this.bridge.parentURL;
													case 'PAGE_URL_ESC':
														return encodeURIComponent(this.bridge.parentURL);
													case 'PAGE_URL_ESC_ESC':
														return encodeURIComponent(encodeURIComponent(this.bridge.parentURL));
													case 'DOMAIN_MATCHED':
														return this.bridge.domainMatched ? 1 : 0;
													case 'DOMAIN_PARENT':
														return this.bridge.parentDomain;
													case 'DOMAIN_TOP':
														return this.bridge.topDomain;
													case 'DEPTH':
													case 'GAME_DEPTH':
														return this.bridge.depth;
													default:
														if (e && br(e.get)) return e.get(t);
												}
											}
										}
									]),
									na),
								Zr =
									(ko(ea, [
										{
											key: 'send',
											value: function (t, e) {
												if (!this._config.isCoreSDKMode) {
													var n =
															window.innerWidth ||
															document.documentElement.clientWidth ||
															document.body.clientWidth,
														i =
															window.innerHeight ||
															document.documentElement.clientHeight ||
															document.body.clientHeight;
													(n -= n % 64),
														(i -= i % 64),
														(this._size = ''.concat(n, ' x ').concat(i));
													i = this._topic_counter[t] || 0;
													this._topic_counter[t] = ++i;
													var o = {
														gmid: this._config.gameId,
														tdmn: this._config.topDomain,
														domn: this._config.domain,
														rfrr: this._config.referrer,
														lthr: this._config.hours,
														ctry: this._config.country,
														dpth: this._config.depth,
														vers: this._config.version,
														trac: this._config.tracking,
														whlb: this._config.whitelabel,
														plat: this._config.platform,
														tpct: i,
														args: e,
														ttle: document.title,
														size: this._size,
														brnm: this._ua.browser.name,
														brmj: this._ua.browser.major,
														osnm: this._ua.os.name,
														osvr: this._ua.os.version,
														dvmd: this._ua.device.model,
														byld: this._config.byloader,
														bylv: this._config.byloaderVersion,
														imgu: this._config.isMasterGameURL,
														iegu: this._config.isExtHostedGameURL,
														itgu: this._config.isTokenGameURL,
														cmpe: !1,
														host: window.location.hostname
													};
													'undefined' != typeof idhb &&
														void 0 !== idhb.iabCmpExists() &&
														(o.cmpe = idhb.iabCmpExists());
													try {
														(o = encodeURIComponent(Ar.Base64.encode(JSON.stringify([o])))),
															fetch(
																this._url +
																	'?tp=com.gdsdk.'
																		.concat(t, '&ar=')
																		.concat(o, '&ts=')
																		.concat(Date.now())
															);
													} catch (t) {}
												}
											}
										},
										{
											key: 'setGameData',
											value: function (t) {
												(this._gameData = t), (this._config.country = t.ctry);
											}
										}
									]),
									ea),
								Qr = null,
								Jr =
									(ko(ta, [
										{
											key: 'start',
											value: function () {
												var t =
														'\n            #gdsdk__console_container {\n                display: flex;\n                box-sizing: border-box;\n                padding: 3px;\n                background: linear-gradient(90deg,#3d1b5d,#5c3997);\n                box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);\n                color: #fff;\n                font-family: Helvetica, Arial, sans-serif;\n                font-size: 8px;\n            }\n            #gdsdk__console_container button {\n                flex: 1;\n                background: #44a5ab;\n                padding: 3px 10px;\n                margin: 2px;\n                border: 0;\n                border-radius: 3px;\n                color: #fff;\n                outline: 0;\n                cursor: pointer;\n                font-size: 8px;\n                box-shadow: 0 0 0 transparent;\n                text-shadow: 0 0 0 transparent;\n                text-overflow: ellipsis;\n                overflow: hidden;\n                white-space: nowrap;\n            }\n            #gdsdk__console_container button:hover {\n                background: #4fb3b9;\n            }\n            #gdsdk__console_container button:active {\n                background: #62bbc0;\n            }\n        ',
													e = document.head || document.getElementsByTagName('head')[0],
													n = document.createElement('style');
												(n.type = 'text/css'),
													n.styleSheet
														? (n.styleSheet.cssText = t)
														: n.appendChild(document.createTextNode(t)),
													e.appendChild(n);
												var i = document.body || document.getElementsByTagName('body')[0],
													o = document.createElement('div');
												(o.id = 'gdsdk__console'),
													(o.style.position = 'fixed'),
													(o.style.zIndex = Vr),
													(o.style.bottom = '0'),
													(o.style.left = '0'),
													(o.style.width = '100%'),
													(o.innerHTML =
														'\n            <div id="gdsdk__console_container">\n                <button id="gdsdk__hbgdDebug">Activate hbgd debug</button>\n                <button id="gdsdk__hbgdConfig">Log idhb config</button>\n                \x3c!--\n                <button id="gdsdk__resumeGame">Resume</button>\n                <button id="gdsdk__pauseGame">Pause</button>\n                --\x3e\n                <button id="gdsdk__showLeaderboard">LeaderBoard</button>\n                <button id="gdsdk__showInterstitial">Interstitial</button>\n                <button id="gdsdk__showRewarded">Rewarded</button>\n                \x3c!--\n                <button id="gdsdk__preloadRewarded">Preload rewarded</button>\n                --\x3e\n                <button id="gdsdk__cancel">Cancel</button>\n                <button id="gdsdk__demo">Demo VAST tag</button>\n                <button id="gdsdk__disableMidrollTimer">Disable delay</button>\n                <button id="gdsdk__closeDebug">Close</button>\n            </div>\n        '),
													i.appendChild(o);
												var r = document.getElementById('gdsdk__showLeaderboard'),
													a = document.getElementById('gdsdk__showInterstitial'),
													s = document.getElementById('gdsdk__showRewarded'),
													c = document.getElementById('gdsdk__cancel'),
													t = document.getElementById('gdsdk__demo'),
													e = document.getElementById('gdsdk__disableMidrollTimer'),
													n = document.getElementById('gdsdk__hbgdDebug'),
													i = document.getElementById('gdsdk__hbgdConfig'),
													o = document.getElementById('gdsdk__closeDebug');
												Pr('gd_tag')
													? ((t.innerHTML = 'Revert Vast tag'), (t.style.background = '#ff8c1c'))
													: ((t.innerHTML = 'Demo VAST tag'), (t.style.background = '#44a5ab')),
													Pr('gd_disable_midroll_timer')
														? ((e.innerHTML = 'Revert delay'), (e.style.background = '#ff8c1c'))
														: ((e.innerHTML = 'Disable delay'), (e.style.background = '#44a5ab')),
													Pr('gd_hb_debug')
														? ((n.innerHTML = 'Revert HB Debug'), (n.style.background = '#ff8c1c'))
														: ((n.innerHTML = 'HB Debug'), (n.style.background = '#44a5ab')),
													r.addEventListener('click', function () {
														window.gdsdk.showLeaderBoard().catch(function (t) {});
													}),
													a.addEventListener('click', function () {
														window.gdsdk.showAd(Sr.Interstitial).catch(function (t) {});
													}),
													s.addEventListener('click', function () {
														window.gdsdk.showAd(Sr.Rewarded).catch(function (t) {});
													}),
													c.addEventListener('click', function () {
														window.gdsdk
															.cancelAd()
															.then(function (t) {})
															.catch(function (t) {});
													}),
													t.addEventListener('click', function () {
														try {
															Pr('gd_tag') ? Ir('gd_tag') : jr('gd_tag', !0), location.reload();
														} catch (t) {
															console.log(t);
														}
													}),
													e.addEventListener('click', function () {
														try {
															Pr('gd_disable_midroll_timer')
																? Ir('gd_disable_midroll_timer')
																: jr('gd_disable_midroll_timer', !0),
																location.reload();
														} catch (t) {
															console.log(t);
														}
													}),
													o.addEventListener('click', function () {
														try {
															Pr('gd_debug_ex') ? Ir('gd_debug_ex') : jr('gd_debug_ex', !0),
																location.reload();
														} catch (t) {
															console.log(t);
														}
													}),
													n.addEventListener('click', function () {
														try {
															Pr('gd_hb_debug') ? Ir('gd_hb_debug') : jr('gd_hb_debug', !0),
																window.idhb && window.idhb.debug(!(!Br || !Pr('gd_hb_debug'))),
																location.reload();
														} catch (t) {
															console.log(t);
														}
													}),
													i.addEventListener('click', function () {
														try {
															var t = window.idhb.getConfig();
															console.info(t);
														} catch (t) {
															console.log(t);
														}
													});
											}
										}
									]),
									ta),
								Xr =
									(new Blob(
										[
											new Uint8Array([
												255, 227, 24, 196, 0, 0, 0, 3, 72, 1, 64, 0, 0, 4, 132, 16, 31, 227, 192,
												225, 76, 255, 67, 12, 255, 221, 27, 255, 228, 97, 73, 63, 255, 195, 131, 69,
												192, 232, 223, 255, 255, 207, 102, 239, 255, 255, 255, 101, 158, 206, 70,
												20, 59, 255, 254, 95, 70, 149, 66, 4, 16, 128, 0, 2, 2, 32, 240, 138, 255,
												36, 106, 183, 255, 227, 24, 196, 59, 11, 34, 62, 80, 49, 135, 40, 0, 253,
												29, 191, 209, 200, 141, 71, 7, 255, 252, 152, 74, 15, 130, 33, 185, 6, 63,
												255, 252, 195, 70, 203, 86, 53, 15, 255, 255, 247, 103, 76, 121, 64, 32, 47,
												255, 34, 227, 194, 209, 138, 76, 65, 77, 69, 51, 46, 57, 55, 170, 170, 170,
												170, 170, 170, 170, 170, 170, 170, 255, 227, 24, 196, 73, 13, 153, 210, 100,
												81, 135, 56, 0, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170,
												170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170,
												170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170,
												170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170,
												170, 170
											])
										],
										{ type: 'audio/mpeg' }
									),
									new Blob(
										[
											new Uint8Array([
												0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115,
												111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101,
												101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111,
												118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107,
												0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
												0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36,
												101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1,
												0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0,
												0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172,
												68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0,
												0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111,
												117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105,
												110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
												36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0,
												0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116,
												98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
												87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
												0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0,
												0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0,
												1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1,
												2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0,
												0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
												0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99,
												111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0,
												0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0,
												0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0,
												0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111,
												111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118,
												102, 53, 54, 46, 52, 48, 46, 49, 48, 49
											])
										],
										{ type: 'video/mp4' }
									));
							function ta(t) {
								if ((xo(this, ta), Qr)) return Qr;
								((Qr = this).eventBus = new $r()), (this._sdk = t);
							}
							function ea(t) {
								xo(this, ea),
									(this._config = t || {}),
									(this._url = t.url || 'https://msgrt.gamedistribution.com/collect'),
									(this._topic_counter = {}),
									(this._ua = new Er().getResult());
							}
							function na(t) {
								xo(this, na), (this.game = t.game), (this.bridge = t.bridge);
							}
							function ia() {
								if ((xo(this, ia), Wr)) return Wr;
								(Wr = this).listeners = {};
							}
							function oa(t) {
								return Object.assign({ muted: !1, timeout: 250, inline: !1 }, t);
							}
							function ra(t, e) {
								var i,
									n = t.muted,
									o = t.timeout,
									t = t.inline,
									e = e(),
									r = e.element,
									e = e.source,
									a = void 0,
									s = void 0;
								return (
									!0 === (r.muted = n) && r.setAttribute('muted', 'muted'),
									!0 === t && r.setAttribute('playsinline', 'playsinline'),
									(r.src = e),
									new Promise(function (n) {
										(a = r.play()),
											(i = setTimeout(function () {
												s(!1, new Error('Timeout ' + o + ' ms has been reached'));
											}, o)),
											(s = function (t) {
												var e =
													1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
												clearTimeout(i), n({ result: t, error: e });
											}),
											void 0 !== a
												? a
														.then(function () {
															return s(!0);
														})
														.catch(function (t) {
															return s(!1, t);
														})
												: s(!0);
									})
								);
							}
							var aa = function (t) {
									return ra((t = oa(t)), function () {
										return {
											element: document.createElement('video'),
											source: URL.createObjectURL(Xr)
										};
									});
								},
								sa = t(function (t, e) {
									var i = '__lodash_hash_undefined__',
										o = 9007199254740991,
										n = '[object Arguments]',
										r = '[object Function]',
										h = '[object Object]',
										a = /^\[object .+?Constructor\]$/,
										s = /^(?:0|[1-9]\d*)$/,
										c = {};
									(c['[object Float32Array]'] =
										c['[object Float64Array]'] =
										c['[object Int8Array]'] =
										c['[object Int16Array]'] =
										c['[object Int32Array]'] =
										c['[object Uint8Array]'] =
										c['[object Uint8ClampedArray]'] =
										c['[object Uint16Array]'] =
										c['[object Uint32Array]'] =
											!0),
										(c[n] =
											c['[object Array]'] =
											c['[object ArrayBuffer]'] =
											c['[object Boolean]'] =
											c['[object DataView]'] =
											c['[object Date]'] =
											c['[object Error]'] =
											c[r] =
											c['[object Map]'] =
											c['[object Number]'] =
											c[h] =
											c['[object RegExp]'] =
											c['[object Set]'] =
											c['[object String]'] =
											c['[object WeakMap]'] =
												!1);
									var l = 'object' == typeof jt && jt && jt.Object === Object && jt,
										d = 'object' == typeof self && self && self.Object === Object && self,
										u = l || d || Function('return this')(),
										p = e && !e.nodeType && e,
										f = p && t && !t.nodeType && t,
										g = f && f.exports === p,
										m = g && l.process,
										d = (function () {
											try {
												return (
													(f && f.require && f.require('util').types) ||
													(m && m.binding && m.binding('util'))
												);
											} catch (t) {}
										})(),
										e = d && d.isTypedArray;
									var b,
										v,
										p = Array.prototype,
										l = Function.prototype,
										y = Object.prototype,
										d = u['__core-js_shared__'],
										_ = l.toString,
										x = y.hasOwnProperty,
										w = (d = /[^.]+$/.exec((d && d.keys && d.keys.IE_PROTO) || ''))
											? 'Symbol(src)_1.' + d
											: '',
										k = y.toString,
										E = _.call(Object),
										A = RegExp(
											'^' +
												_.call(x)
													.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
													.replace(
														/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
														'$1.*?'
													) +
												'$'
										),
										d = g ? u.Buffer : void 0,
										g = u.Symbol,
										S = u.Uint8Array,
										D =
											(d && d.allocUnsafe,
											(b = Object.getPrototypeOf),
											(v = Object),
											function (t) {
												return b(v(t));
											}),
										R = Object.create,
										T = y.propertyIsEnumerable,
										L = p.splice,
										C = g ? g.toStringTag : void 0,
										O = (function () {
											try {
												var t = Q(Object, 'defineProperty');
												return t({}, '', {}), t;
											} catch (t) {}
										})(),
										d = d ? d.isBuffer : void 0,
										P = Math.max,
										I = Date.now,
										j = Q(u, 'Map'),
										B = Q(Object, 'create'),
										M = function (t) {
											if (!pt(t)) return {};
											if (R) return R(t);
											z.prototype = t;
											t = new z();
											return (z.prototype = void 0), t;
										};
									function z() {}
									function N(t) {
										var e = -1,
											n = null == t ? 0 : t.length;
										for (this.clear(); ++e < n; ) {
											var i = t[e];
											this.set(i[0], i[1]);
										}
									}
									function U(t) {
										var e = -1,
											n = null == t ? 0 : t.length;
										for (this.clear(); ++e < n; ) {
											var i = t[e];
											this.set(i[0], i[1]);
										}
									}
									function G(t) {
										var e = -1,
											n = null == t ? 0 : t.length;
										for (this.clear(); ++e < n; ) {
											var i = t[e];
											this.set(i[0], i[1]);
										}
									}
									function F(t) {
										t = this.__data__ = new U(t);
										this.size = t.size;
									}
									function H(t, e, n) {
										((void 0 === n || rt(t[e], n)) && (void 0 !== n || e in t)) || K(t, e, n);
									}
									function q(t, e) {
										for (var n = t.length; n--; ) if (rt(t[n][0], e)) return n;
										return -1;
									}
									function K(t, e, n) {
										'__proto__' == e && O
											? O(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
											: (t[e] = n);
									}
									(N.prototype.clear = function () {
										(this.__data__ = B ? B(null) : {}), (this.size = 0);
									}),
										(N.prototype.delete = function (t) {
											t = this.has(t) && delete this.__data__[t];
											return (this.size -= t ? 1 : 0), t;
										}),
										(N.prototype.get = function (t) {
											var e = this.__data__;
											if (B) {
												var n = e[t];
												return n === i ? void 0 : n;
											}
											return x.call(e, t) ? e[t] : void 0;
										}),
										(N.prototype.has = function (t) {
											var e = this.__data__;
											return B ? void 0 !== e[t] : x.call(e, t);
										}),
										(N.prototype.set = function (t, e) {
											var n = this.__data__;
											return (
												(this.size += this.has(t) ? 0 : 1), (n[t] = B && void 0 === e ? i : e), this
											);
										}),
										(U.prototype.clear = function () {
											(this.__data__ = []), (this.size = 0);
										}),
										(U.prototype.delete = function (t) {
											var e = this.__data__,
												t = q(e, t);
											return !(
												t < 0 || (t == e.length - 1 ? e.pop() : L.call(e, t, 1), --this.size, 0)
											);
										}),
										(U.prototype.get = function (t) {
											var e = this.__data__,
												t = q(e, t);
											return t < 0 ? void 0 : e[t][1];
										}),
										(U.prototype.has = function (t) {
											return -1 < q(this.__data__, t);
										}),
										(U.prototype.set = function (t, e) {
											var n = this.__data__,
												i = q(n, t);
											return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
										}),
										(G.prototype.clear = function () {
											(this.size = 0),
												(this.__data__ = { hash: new N(), map: new (j || U)(), string: new N() });
										}),
										(G.prototype.delete = function (t) {
											t = Z(this, t).delete(t);
											return (this.size -= t ? 1 : 0), t;
										}),
										(G.prototype.get = function (t) {
											return Z(this, t).get(t);
										}),
										(G.prototype.has = function (t) {
											return Z(this, t).has(t);
										}),
										(G.prototype.set = function (t, e) {
											var n = Z(this, t),
												i = n.size;
											return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
										}),
										(F.prototype.clear = function () {
											(this.__data__ = new U()), (this.size = 0);
										}),
										(F.prototype.delete = function (t) {
											var e = this.__data__,
												t = e.delete(t);
											return (this.size = e.size), t;
										}),
										(F.prototype.get = function (t) {
											return this.__data__.get(t);
										}),
										(F.prototype.has = function (t) {
											return this.__data__.has(t);
										}),
										(F.prototype.set = function (t, e) {
											var n = this.__data__;
											if (n instanceof U) {
												var i = n.__data__;
												if (!j || i.length < 199)
													return i.push([t, e]), (this.size = ++n.size), this;
												n = this.__data__ = new G(i);
											}
											return n.set(t, e), (this.size = n.size), this;
										});
									var V = function (t, e, n) {
										for (var i = -1, o = Object(t), r = n(t), a = r.length; a--; ) {
											var s = r[++i];
											if (!1 === e(o[s], s, o)) break;
										}
										return t;
									};
									function W(t) {
										return null == t
											? void 0 === t
												? '[object Undefined]'
												: '[object Null]'
											: C && C in Object(t)
											? (function (t) {
													var e = x.call(t, C),
														n = t[C];
													try {
														var i = !(t[C] = void 0);
													} catch (t) {}
													var o = k.call(t);
													return i && (e ? (t[C] = n) : delete t[C]), o;
											  })(t)
											: k.call(t);
									}
									function $(t) {
										return ht(t) && W(t) == n;
									}
									function Y(i, o, r, a, s) {
										i !== o &&
											V(
												o,
												function (t, e) {
													var n;
													(s = s || new F()),
														pt(t)
															? (function (t, e, n, i, o, r, a) {
																	var s = tt(t, n),
																		c = tt(e, n),
																		l = a.get(c);
																	if (l) return H(t, n, l);
																	var d,
																		u = r ? r(s, c, n + '', t, e, a) : void 0,
																		p = void 0 === u;
																	p &&
																		((l = !(d = st(c)) && lt(c)),
																		(e = !d && !l && gt(c)),
																		(u = c),
																		d || l || e
																			? (u = st(s)
																					? s
																					: ht((d = s)) && ct(d)
																					? (function (t, e) {
																							var n = -1,
																								i = t.length;
																							for (e = e || Array(i); ++n < i; ) e[n] = t[n];
																							return e;
																					  })(s)
																					: l
																					? ((p = !1), c.slice())
																					: e
																					? ((p = !1),
																					  (e = new (l = (d = c).buffer).constructor(
																							l.byteLength
																					  )),
																					  new S(e).set(new S(l)),
																					  new d.constructor(e, d.byteOffset, d.length))
																					: [])
																			: (function (t) {
																					if (ht(t) && W(t) == h) {
																						t = D(t);
																						if (null === t) return 1;
																						t = x.call(t, 'constructor') && t.constructor;
																						return (
																							'function' == typeof t &&
																							t instanceof t &&
																							_.call(t) == E
																						);
																					}
																			  })(c) || at(c)
																			? at((u = s))
																				? (u = (function (t, e, n) {
																						var i = !n;
																						n = n || {};
																						for (var o = -1, r = e.length; ++o < r; ) {
																							var a = e[o],
																								s = void 0;
																							(i
																								? K
																								: function t(e, n, i) {
																										var o = e[n];
																										(x.call(e, n) &&
																											rt(o, i) &&
																											(void 0 !== i || n in e)) ||
																											K(e, n, i);
																								  })(n, a, (s = void 0 === s ? t[a] : s));
																						}
																						return n;
																				  })(s, mt(s)))
																				: (pt(s) && !dt(s)) ||
																				  (u =
																						'function' != typeof c.constructor || X(c)
																							? {}
																							: M(D(c)))
																			: (p = !1)),
																		p && (a.set(c, u), o(u, c, i, r, a), a.delete(c)),
																		H(t, n, u);
															  })(i, o, e, r, Y, a, s)
															: ((n = a ? a(tt(i, e), t, e + '', i, o, s) : void 0),
															  H(i, e, (n = void 0 === n ? t : n)));
												},
												mt
											);
									}
									function Z(t, e) {
										var n = t.__data__;
										return (
											'string' == (t = typeof e) || 'number' == t || 'symbol' == t || 'boolean' == t
												? '__proto__' !== e
												: null === e
										)
											? n['string' == typeof e ? 'string' : 'hash']
											: n.map;
									}
									function Q(t, e) {
										e = null == t ? void 0 : t[e];
										return (function t(e) {
											return (
												pt(e) &&
												!(w && w in e) &&
												(dt(e) ? A : a).test(
													(function (t) {
														if (null != t) {
															try {
																return _.call(t);
															} catch (t) {}
															try {
																return t + '';
															} catch (t) {}
														}
														return '';
													})(e)
												)
											);
										})(e)
											? e
											: void 0;
									}
									function J(t, e) {
										var n = typeof t;
										return (
											(e = null == e ? o : e) &&
											('number' == n || ('symbol' != n && s.test(t))) &&
											-1 < t &&
											t % 1 == 0 &&
											t < e
										);
									}
									function X(t) {
										var e = t && t.constructor;
										return t === (('function' == typeof e && e.prototype) || y);
									}
									function tt(t, e) {
										if (('constructor' !== e || 'function' != typeof t[e]) && '__proto__' != e)
											return t[e];
									}
									var et,
										nt,
										it,
										ot =
											((et = O
												? function (t, e) {
														return O(t, 'toString', {
															configurable: !0,
															enumerable: !1,
															value:
																((n = e),
																function () {
																	return n;
																}),
															writable: !0
														});
														var n;
												  }
												: vt),
											(it = nt = 0),
											function () {
												var t = I(),
													e = 16 - (t - it);
												if (((it = t), 0 < e)) {
													if (800 <= ++nt) return arguments[0];
												} else nt = 0;
												return et.apply(void 0, arguments);
											});
									function rt(t, e) {
										return t === e || (t != t && e != e);
									}
									var at = $(
											(function () {
												return arguments;
											})()
										)
											? $
											: function (t) {
													return ht(t) && x.call(t, 'callee') && !T.call(t, 'callee');
											  },
										st = Array.isArray;
									function ct(t) {
										return null != t && ut(t.length) && !dt(t);
									}
									var lt =
										d ||
										function () {
											return !1;
										};
									function dt(t) {
										if (pt(t)) {
											t = W(t);
											return (
												t == r ||
												'[object GeneratorFunction]' == t ||
												'[object AsyncFunction]' == t ||
												'[object Proxy]' == t
											);
										}
									}
									function ut(t) {
										return 'number' == typeof t && -1 < t && t % 1 == 0 && t <= o;
									}
									function pt(t) {
										var e = typeof t;
										return null != t && ('object' == e || 'function' == e);
									}
									function ht(t) {
										return null != t && 'object' == typeof t;
									}
									var ft,
										gt = e
											? ((ft = e),
											  function (t) {
													return ft(t);
											  })
											: function (t) {
													return ht(t) && ut(t.length) && !!c[W(t)];
											  };
									function mt(t) {
										return ct(t)
											? (function t(e, n) {
													var i,
														o = st(e),
														r = !o && at(e),
														a = !o && !r && lt(e),
														s = !o && !r && !a && gt(e),
														c = o || r || a || s,
														l = c
															? (function (t, e) {
																	for (var n = -1, i = Array(t); ++n < t; ) i[n] = e(n);
																	return i;
															  })(e.length, String)
															: [],
														d = l.length;
													for (i in e)
														(!n && !x.call(e, i)) ||
															(c &&
																('length' == i ||
																	(a && ('offset' == i || 'parent' == i)) ||
																	(s &&
																		('buffer' == i || 'byteLength' == i || 'byteOffset' == i)) ||
																	J(i, d))) ||
															l.push(i);
													return l;
											  })(t, !0)
											: (function t(n) {
													if (!pt(n))
														return (function () {
															var t = [];
															if (null != n) for (var e in Object(n)) t.push(e);
															return t;
														})();
													var e,
														i = X(n),
														o = [];
													for (e in n) ('constructor' != e || (!i && x.call(n, e))) && o.push(e);
													return o;
											  })(t);
									}
									var bt,
										e =
											((bt = function (t, e, n) {
												Y(t, e, n);
											}),
											(function t(e, n) {
												return ot(
													((r = e),
													(s = vt),
													(a = P(void 0 === (a = n) ? r.length - 1 : a, 0)),
													function () {
														for (
															var t = arguments, e = -1, n = P(t.length - a, 0), i = Array(n);
															++e < n;

														)
															i[e] = t[a + e];
														for (var e = -1, o = Array(a + 1); ++e < a; ) o[e] = t[e];
														return (
															(o[a] = s(i)),
															(function t(e, n, i) {
																switch (i.length) {
																	case 0:
																		return e.call(n);
																	case 1:
																		return e.call(n, i[0]);
																	case 2:
																		return e.call(n, i[0], i[1]);
																	case 3:
																		return e.call(n, i[0], i[1], i[2]);
																}
																return e.apply(n, i);
															})(r, this, o)
														);
													}),
													e + ''
												);
												var r, a, s;
											})(function (t, e) {
												var n = -1,
													i = e.length,
													o = 1 < i ? e[i - 1] : void 0,
													r = 2 < i ? e[2] : void 0,
													o = 3 < bt.length && 'function' == typeof o ? (i--, o) : void 0;
												for (
													r &&
														(function (t, e, n) {
															if (pt(n)) {
																var i = typeof e;
																return (
																	('number' == i
																		? ct(n) && J(e, n.length)
																		: 'string' == i && (e in n)) && rt(n[e], t)
																);
															}
														})(e[0], e[1], r) &&
														((o = i < 3 ? void 0 : o), (i = 1)),
														t = Object(t);
													++n < i;

												) {
													var a = e[n];
													a && bt(t, a, n);
												}
												return t;
											}));
									function vt(t) {
										return t;
									}
									t.exports = e;
								});
							function ca(e, t) {
								var n,
									i = Object.keys(e);
								return (
									Object.getOwnPropertySymbols &&
										((n = Object.getOwnPropertySymbols(e)),
										t &&
											(n = n.filter(function (t) {
												return Object.getOwnPropertyDescriptor(e, t).enumerable;
											})),
										i.push.apply(i, n)),
									i
								);
							}
							function la(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {};
									t % 2
										? ca(Object(n), !0).forEach(function (t) {
												mo(e, t, n[t]);
										  })
										: Object.getOwnPropertyDescriptors
										? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
										: ca(Object(n)).forEach(function (t) {
												Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
										  });
								}
								return e;
							}
							function da(e, t) {
								var n,
									i = Object.keys(e);
								return (
									Object.getOwnPropertySymbols &&
										((n = Object.getOwnPropertySymbols(e)),
										t &&
											(n = n.filter(function (t) {
												return Object.getOwnPropertyDescriptor(e, t).enumerable;
											})),
										i.push.apply(i, n)),
									i
								);
							}
							function ua(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {};
									t % 2
										? da(Object(n), !0).forEach(function (t) {
												mo(e, t, n[t]);
										  })
										: Object.getOwnPropertyDescriptors
										? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
										: da(Object(n)).forEach(function (t) {
												Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
										  });
								}
								return e;
							}
							var pa,
								ha,
								fa,
								ga,
								ma,
								ba,
								va,
								ya,
								_a,
								xa,
								wa,
								ka,
								Ea = null,
								Aa =
									(ko(Da, [
										{
											key: 'start',
											value:
												((ka = yo(
													bo.mark(function t() {
														var e,
															n,
															i = this;
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			if (((t.prev = 0), this.isCoreSDKMode))
																				throw new Error('CoreSDK mode is enabled.');
																			t.next = 3;
																			break;
																		case 3:
																			return (
																				(n = this._getPrebidScripts()),
																				(e = n[0]),
																				(window.HB_OPTIONSgd = { gameId: this.gameId }),
																				(t.next = 8),
																				Cr(e, 'gdsdk_prebid', {
																					alternates: n,
																					error_prefix: 'Blocked:',
																					exists: function () {
																						return _o(this, i), window.idhb;
																					}.bind(this)
																				})
																			);
																		case 8:
																			return (
																				(window.idhb = window.idhb || {}),
																				(window.idhb.que = window.idhb.que || []),
																				window.idhb.que.push(
																					function () {
																						var n = this;
																						_o(this, i),
																							window.idhb.addEventListener(
																								'slotRenderEnded',
																								function (t) {
																									_o(this, n);
																									try {
																										var e =
																											1 === (e = t.slotId.split('@')).length
																												? e[0]
																												: e[1];
																										t.isEmpty
																											? this.eventBus.broadcast('DISPLAYAD_ERROR', {
																													message: e,
																													status: 'warning'
																											  })
																											: this.eventBus.broadcast(
																													'DISPLAYAD_IMPRESSION',
																													{ message: e, status: 'success' }
																											  );
																									} catch (t) {}
																								}.bind(this)
																							);
																					}.bind(this)
																				),
																				(e = [
																					'https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js',
																					'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
																					'http://imasdk.googleapis.com/js/sdkloader/ima3_debug.js',
																					'http://imasdk.googleapis.com/js/sdkloader/ima3.js'
																				]),
																				(n = this.options.debug ? e[0] : e[1]),
																				(t.next = 15),
																				Cr(n, 'gdsdk_ima', {
																					alternates: e,
																					error_prefix: 'Blocked:',
																					exists: function () {
																						return _o(this, i), window.google && window.google.ima;
																					}.bind(this)
																				})
																			);
																		case 15:
																			this._createPlayer(), this._setUpIMA(), (t.next = 22);
																			break;
																		case 19:
																			throw ((t.prev = 19), (t.t0 = t.catch(0)), new Error(t.t0));
																		case 22:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this,
															[[0, 19]]
														);
													})
												)),
												function () {
													return ka.apply(this, arguments);
												})
										},
										{
											key: '_getAdVast',
											value: function (e, c) {
												var n = this;
												return new Promise(
													function (a) {
														var s = this;
														if ((_o(this, n), Br && Pr('gd_debug_ex') && Pr('gd_tag'))) {
															var t = this.IMASampleTags[e],
																t = t[Math.floor(Math.random() * t.length)];
															a({ url: t });
														} else
															try {
																1 === this.adTypeCount && (this.adCount = 0),
																	this.adCount++,
																	this.adTypeCount++,
																	this._getTunnlKeys(e)
																		.then(
																			function (t) {
																				var n = this;
																				_o(this, s);
																				var i = t.data;
																				if (void 0 === window.idhb.requestAds)
																					throw new Error(
																						"Prebid.js wrapper script hit an error or didn't exist!"
																					);
																				var e = i.nsid || 'TNL_T-17102571517',
																					t = i.tid || 'TNL_NS-18101700058',
																					o = ''.concat(e, '/').concat(t);
																				delete i.nsid, delete i.tid;
																				var r =
																					i.consent_string || 'BOWJjG9OWJjG9CLAAAENBx-AAAAiDAAA';
																				sa(i, {
																					tnl_system: '1',
																					tnl_content_category: this.category.toLowerCase()
																				}),
																					this.eventBus.broadcast('AD_REQUEST', {
																						message: i.tnl_ad_pos
																					});
																				t = this.options;
																				return (
																					'preroll' === i.tnl_ad_pos && mr(t.preroll)
																						? (t = t.preroll)
																						: 'midroll' === i.tnl_ad_pos && mr(t.midroll)
																						? (t = t.midroll)
																						: 'rewarded' === i.tnl_ad_pos &&
																						  mr(t.rewarded) &&
																						  (t = t.rewarded),
																					c &&
																					c.retry_on_success &&
																					mr(t.retry_on_success) &&
																					mr(t.retry_on_success.vast)
																						? a(
																								this._createCustomAdVastUrl(
																									t.retry_on_success.vast,
																									{ tnl_keys: i }
																								)
																						  )
																						: c &&
																						  c.retry_on_failure &&
																						  this.options.retry_on_failure &&
																						  mr(t.retry_on_failure.vast)
																						? a(
																								this._createCustomAdVastUrl(
																									t.retry_on_failure.vast,
																									{ tnl_keys: i }
																								)
																						  )
																						: mr(t.vast)
																						? a(
																								this._createCustomAdVastUrl(t.vast, { tnl_keys: i })
																						  )
																						: void window.idhb.que.push(
																								function () {
																									var e = this;
																									_o(this, n),
																										window.idhb.setRefererUrl(
																											encodeURIComponent(this.parentURL)
																										),
																										window.idhb.allowPersonalizedAds(
																											!!parseInt(this.userAllowedPersonalizedAds)
																										);
																									var t =
																										'rewarded' === i.tnl_ad_pos
																											? 'rewardedVideo'
																											: 'gdbanner' === i.tnl_ad_pos
																											? 'gd__banner'
																											: 'midroll' === i.tnl_ad_pos
																											? 'midroll'
																											: 'video1';
																									window.idhb.setDfpAdUnitCodeForAdSlot(t, o),
																										window.idhb.setAdserverTargetingForAdSlot(t, i),
																										window.idhb.setDefaultGdprConsentString(r),
																										window.idhb.requestAds({
																											slotIds: [t],
																											callback: function (t) {
																												_o(this, e), a({ tnl_keys: i, url: t });
																											}.bind(this)
																										});
																								}.bind(this)
																						  )
																				);
																			}.bind(this)
																		)
																		.catch(
																			function (t) {
																				throw (_o(this, s), new Error(t));
																			}.bind(this)
																		);
															} catch (t) {
																throw new Error(t);
															}
													}.bind(this)
												);
											}
										},
										{
											key: 'getAdPosition',
											value: function (t) {
												return (
													(this.adTypeCount =
														t === Sr.Rewarded ? this.adTypeCount - 1 : this.adTypeCount),
													t === Sr.Rewarded
														? 'rewarded'
														: 1 === this.adTypeCount
														? 'preroll'
														: 'midroll'
												);
											}
										},
										{
											key: '_getTunnlKeys',
											value: function (s) {
												var c = this;
												return new Promise(
													function (n) {
														var i = this;
														_o(this, c);
														var t =
																(!navigator.userAgent.match(/Crosswalk/i) &&
																	void 0 === window.cordova) ||
																'm.hopy.com' !== this.parentDomain
																	? 'page_url='.concat(encodeURIComponent(this.parentURL))
																	: 'bundle=com.hopy.frivgames',
															o = this.getAdPosition(s),
															e = Rr('ch', window.location.href),
															r = Rr('ch_date', window.location.href),
															e = e ? '&ch='.concat(e) : '',
															r = r ? '&ch_date='.concat(r) : '',
															a = 'https://pub.headerlift.com/opphb?'
																.concat(t, '&player_width=')
																.concat(this.options.width, '&player_height=')
																.concat(this.options.height, '&ad_type=video_image&game_id=')
																.concat(this.gameId, '&ad_position=')
																.concat(o)
																.concat(e)
																.concat(r, '&correlator=')
																.concat(Date.now()),
															r = new Request(a, { method: 'GET' });
														fetch(r)
															.then(
																function (t) {
																	_o(this, i);
																	var e = t.headers.get('content-type');
																	if (e && -1 !== e.indexOf('application/json')) return t.json();
																	throw new TypeError("Oops, we didn't get JSON!");
																}.bind(this)
															)
															.then(
																function (t) {
																	_o(this, i),
																		(function (t) {
																			if (t) {
																				for (var e in t) if (t.hasOwnProperty(e)) return;
																				return 1;
																			}
																		})(t) &&
																			((t = this._createTunnlReportingFallbackKeys(o)),
																			this.eventBus.broadcast('AD_REQUEST_KEYS_EMPTY', {
																				message: 'Tunnl returned empty response.',
																				details: a
																			})),
																		n({ data: t, url: a });
																}.bind(this)
															)
															.catch(
																function (t) {
																	_o(this, i);
																	var e = this._createTunnlReportingFallbackKeys(o);
																	this.eventBus.broadcast('AD_REQUEST_KEYS_FALLBACK', {
																		message: t.message,
																		details: a
																	}),
																		n({ data: e, url: a });
																}.bind(this)
															);
													}.bind(this)
												);
											}
										},
										{
											key: '_createTunnlReportingFallbackKeys',
											value: function (t) {
												return {
													tid: 'TNL_T-17102571517',
													nsid: 'TNL_NS-18101700058',
													tnl_tid: 'T-17102571517',
													tnl_nsid: 'NS-18101700058',
													tnl_pw: this.options.width,
													tnl_ph: this.options.height,
													tnl_pt: '22',
													tnl_pid: 'P-17101800031',
													tnl_paid: '17',
													tnl_ad_type: 'video_image',
													tnl_asset_id: this.gameId.toString(),
													tnl_ad_pos: t,
													tnl_skippable: '1',
													tnl_cp1: '',
													tnl_cp2: '',
													tnl_cp3: '',
													tnl_cp4: '',
													tnl_cp5: '',
													tnl_cp6: '',
													tnl_campaign: '2',
													tnl_gdpr: '0',
													tnl_gdpr_consent: '1',
													consent_string: 'BOWJjG9OWJjG9CLAAAENBx-AAAAiDAAA',
													tnl_content_category: this.category.toLowerCase()
												};
											}
										},
										{
											key: '_requestAd',
											value: function (r, a) {
												var s = this;
												return (
													(a = a || {}),
													new Promise(
														function (t) {
															if ((_o(this, s), 'undefined' == typeof google))
																throw new Error('Unable to load ad, google IMA SDK not defined.');
															try {
																var e =
																	null == r || null === (i = r.tnl_keys) || void 0 === i
																		? void 0
																		: i.tnl_ad_pos;
																this.adSuccess = !1;
																var n = new google.ima.AdsRequest(),
																	i = this._transformVast(r, a),
																	o = ua(ua({}, a), {}, { adTag: i, tnl_ad_pos: e });
																(this.adCounter[e] = this.adCounter[e] || 0),
																	this.adCounter[e]++,
																	this._isVMAP(e)
																		? (n.adsResponse = (function (t) {
																				var e = t.position || 'midroll',
																					n = Date.now(),
																					i = new hr(t.adTagURI1, !0);
																				i.query = la(
																					la({}, i.query),
																					{},
																					{
																						ad_rule: 0,
																						vpos: e,
																						pod: 1,
																						ppos: 1,
																						lip: !0,
																						correlator: n,
																						output: 'xml_vast3'
																					}
																				);
																				(i = i.toString()), (t = new hr(t.adTagURI2, !0));
																				t.query = la(
																					la({}, t.query),
																					{},
																					{
																						ad_rule: 0,
																						vpos: e,
																						pod: 1,
																						correlator: ++n,
																						output: 'xml_vast3'
																					}
																				);
																				t = t.toString();
																				return '\n<?xml version="1.0" encoding="UTF-8"?>\n<vmap:VMAP xmlns:vmap="http://www.iab.net/videosuite/vmap" version="1.0">\n<vmap:AdBreak timeOffset="start" breakType="linear,nonlinear" breakId="break-1">\n    <vmap:AdSource id="ad-1" allowMultipleAds="false" followRedirects="true">\n        <vmap:AdTagURI templateType="vast3"><![CDATA['
																					.concat(
																						i,
																						']]></vmap:AdTagURI>\n    </vmap:AdSource>\n</vmap:AdBreak>\n<vmap:AdBreak timeOffset="start" breakType="linear,nonlinear" breakId="break-2">\n    <vmap:AdSource id="ad-1-bumper" allowMultipleAds="false" followRedirects="true">\n        <vmap:AdTagURI templateType="vast3"><![CDATA['
																					)
																					.concat(
																						t,
																						']]></vmap:AdTagURI>\n    </vmap:AdSource>\n    <vmap:Extensions>\n        <vmap:Extension type="bumper" suppress_bumper="true"></vmap:Extension>\n    </vmap:Extensions>\n</vmap:AdBreak>\n</vmap:VMAP>'
																					);
																		  })(
																				this._get_vmap_context({
																					adtag: i,
																					position:
																						'preroll' === o.tnl_ad_pos ? 'preroll' : 'midroll',
																					config: this._get_vmap_config(e)
																				})
																		  ).trim())
																		: (n.adTagUrl = i.url),
																	(n.linearAdSlotWidth = this.options.width),
																	(n.linearAdSlotHeight = this.options.height),
																	(n.nonLinearAdSlotWidth = this.options.width),
																	(n.nonLinearAdSlotHeight = this.options.height),
																	(n.forceNonLinearFullSlot = !0),
																	this.options.vast_load_timeout &&
																		(n.vastLoadTimeout = this.options.vast_load_timeout),
																	this.options.autoplay_signal &&
																		n.setAdWillAutoPlay(a.autoplayAllowed),
																	this.options.volume_signal &&
																		n.setAdWillPlayMuted(a.autoplayRequiresMute),
																	this.adsLoader.requestAds(n, o);
																try {
																	this.eventBus.broadcast('AD_SDK_REQUEST', { message: o });
																} catch (t) {}
																t(n);
															} catch (t) {
																throw new Error(t);
															}
														}.bind(this)
													)
												);
											}
										},
										{
											key: 'cancel',
											value: function () {
												var t;
												!1 !== this.requestRunning &&
													((this.requestRunning = !1),
													this._resetAdsLoader(),
													this._hide('cancel'),
													(t = 'AD_SDK_CANCELED'),
													this.eventBus.broadcast(t, {
														name: t,
														message: 'Advertisement has been canceled.',
														status: 'warning',
														analytics: {
															category: this.eventCategory,
															action: t,
															label: this.gameId
														}
													}));
											}
										},
										{
											key: '_checkAutoPlay',
											value:
												((wa = yo(
													bo.mark(function t() {
														var e = this;
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			return t.abrupt(
																				'return',
																				new Promise(
																					function (n, t) {
																						var i = this;
																						_o(this, e),
																							aa({ inline: !0, muted: !1 }).then(
																								function (t) {
																									_o(this, i);
																									var e = t.result;
																									t.error,
																										n(
																											!0 === e
																												? {
																														autoplayAllowed: !0,
																														autoplayRequiresMute: !1
																												  }
																												: {
																														autoplayAllowed: !0,
																														autoplayRequiresMute: !0
																												  }
																										);
																								}.bind(this)
																							);
																					}.bind(this)
																				)
																			);
																		case 1:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this
														);
													})
												)),
												function () {
													return wa.apply(this, arguments);
												})
										},
										{
											key: '_initDisplayContainerWithAutoPlay',
											value:
												((xa = yo(
													bo.mark(function t() {
														var e;
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			return (t.next = 2), this._checkAutoPlay(!1);
																		case 2:
																			return (
																				(e = t.sent),
																				(this._autoplay = e),
																				(this.video_ad_player.autoplay = e.autoplayAllowed),
																				(this.video_ad_player.volume = e.autoplayRequiresMute
																					? 0
																					: 1),
																				(this.video_ad_player.muted = !!e.autoplayRequiresMute),
																				e.adDisplayContainerInitialized ||
																					(this.adDisplayContainer.initialize(),
																					(this.adDisplayContainerInitialized = !0)),
																				t.abrupt('return', e)
																			);
																		case 9:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this
														);
													})
												)),
												function () {
													return xa.apply(this, arguments);
												})
										},
										{
											key: 'startAd',
											value:
												((_a = yo(
													bo.mark(function t(e, n) {
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			if (e === Sr.Interstitial)
																				return t.abrupt('return', this._startInterstitialAd(n));
																			t.next = 4;
																			break;
																		case 4:
																			if (e === Sr.Rewarded)
																				return t.abrupt('return', this._startRewardedAd(n));
																			t.next = 8;
																			break;
																		case 8:
																			throw new Error('Unsupported ad type');
																		case 9:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this
														);
													})
												)),
												function (t, e) {
													return _a.apply(this, arguments);
												})
										},
										{
											key: 'preloadAd',
											value:
												((ya = yo(
													bo.mark(function t(e) {
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			if (e === Sr.Interstitial)
																				return t.abrupt('return', this._preloadInterstitialAd());
																			t.next = 4;
																			break;
																		case 4:
																			if (e === Sr.Rewarded)
																				return t.abrupt('return', this._preloadRewardedAd());
																			t.next = 8;
																			break;
																		case 8:
																			throw new Error('Unsupported ad type');
																		case 9:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this
														);
													})
												)),
												function (t) {
													return ya.apply(this, arguments);
												})
										},
										{
											key: 'loadDisplayAd',
											value:
												((va = yo(
													bo.mark(function t(s) {
														var c = this;
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			return t.abrupt(
																				'return',
																				new Promise(
																					function (t, e) {
																						var n = this;
																						_o(this, c);
																						try {
																							var i = s ? s.containerId : null;
																							i || e('Container id is not specified');
																							var o = document.getElementById(i);
																							document.getElementById(i) ||
																								e(
																									'No container is found with this id - '.concat(i)
																								),
																								void 0 === window.idhb.requestAds &&
																									e(
																										"Prebid.js wrapper script hit an error or didn't exist!"
																									);
																							var r,
																								a = s.slotId || 'gd__banner@'.concat(i);
																							document.getElementById(a) ||
																								((i =
																									'\n                    .gd__banner{\n                        z-index: '.concat(
																										qr,
																										';\n                        height: 100%;\n                        display: flex !important;\n                        align-items: center;\n                        justify-content: center;\n                    }'
																									)),
																								document.getElementById('gd__banner__style') ||
																									(((r = document.createElement('style')).type =
																										'text/css'),
																									(r.id = 'gd__banner__style'),
																									r.styleSheet
																										? (r.styleSheet.cssText = i)
																										: r.appendChild(document.createTextNode(i)),
																									o.appendChild(r)),
																								((r = document.createElement('div')).id = a),
																								r.classList.add('gd__banner'),
																								o.appendChild(r)),
																								window.idhb.que.push(
																									function () {
																										var e = this;
																										_o(this, n),
																											window.idhb.setRefererUrl(
																												encodeURIComponent(this.parentURL)
																											),
																											window.idhb.allowPersonalizedAds(
																												!!parseInt(this.userAllowedPersonalizedAds)
																											),
																											window.idhb.setDefaultGdprConsentString(
																												'BOWJjG9OWJjG9CLAAAENBx-AAAAiDAAA'
																											);
																										var t = {};
																										(t[a] = {
																											maxSize: [o.offsetWidth, o.offsetHeight]
																										}),
																											window.idhb.requestAds({
																												slots: t,
																												callback: function (t) {
																													_o(this, e);
																												}.bind(this)
																											});
																									}.bind(this)
																								),
																								t();
																						} catch (t) {
																							e(t.message || t);
																						}
																					}.bind(this)
																				)
																			);
																		case 1:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this
														);
													})
												)),
												function (t) {
													return va.apply(this, arguments);
												})
										},
										{
											key: '_startInterstitialAd',
											value:
												((ba = yo(
													bo.mark(function t(e) {
														var n;
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			if (this.requestRunning)
																				return (
																					this.eventBus.broadcast('AD_IS_ALREADY_RUNNING', {
																						status: 'warning'
																					}),
																					t.abrupt('return')
																				);
																			t.next = 3;
																			break;
																		case 3:
																			return (
																				(this.requestRunning = !0),
																				(t.next = 6),
																				this._initDisplayContainerWithAutoPlay()
																			);
																		case 6:
																			return (
																				(n = t.sent),
																				(t.next = 9),
																				this._loadInterstitialAd(ua(ua({}, n), e))
																			);
																		case 9:
																			(t.prev = 9),
																				n.autoplayRequiresMute && this.adsManager.setVolume(0),
																				this.adsManager.init(
																					this.options.width,
																					this.options.height,
																					google.ima.ViewMode.NORMAL
																				),
																				this.adsManager.start(),
																				(t.next = 19);
																			break;
																		case 15:
																			throw (
																				((t.prev = 15),
																				(t.t0 = t.catch(9)),
																				this._onError(t.t0),
																				t.t0)
																			);
																		case 19:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this,
															[[9, 15]]
														);
													})
												)),
												function (t) {
													return ba.apply(this, arguments);
												})
										},
										{
											key: '_loadInterstitialAd',
											value:
												((ma = yo(
													bo.mark(function t(e) {
														var n,
															i,
															a = this;
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			if (
																				(this._resetAdsLoader(),
																				(t.prev = 1),
																				(t.t0 = this.preloadedInterstitialAdVast),
																				t.t0)
																			) {
																				t.next = 7;
																				break;
																			}
																			return (t.next = 6), this._getAdVast(Sr.Interstitial, e);
																		case 6:
																			t.t0 = t.sent;
																		case 7:
																			return (
																				(n = t.t0),
																				delete this.preloadedInterstitialAdVast,
																				(t.next = 11),
																				this._requestAd(n, ua({ adType: Sr.Interstitial }, e))
																			);
																		case 11:
																			return (
																				(i = t.sent),
																				(t.next = 14),
																				new Promise(
																					function (e, n) {
																						var i = this;
																						_o(this, a);
																						var o = 'videoad.preloadad';
																						this.eventBus.unsubscribeScope(o);
																						var t = function (t) {
																								_o(this, i),
																									this.eventBus.unsubscribeScope(o),
																									e(t.message);
																							}.bind(this),
																							r = function (t) {
																								_o(this, i),
																									this.eventBus.unsubscribeScope(o),
																									n(t.message);
																							}.bind(this);
																						this.eventBus.subscribe('AD_SDK_MANAGER_READY', t, o),
																							this.eventBus.subscribe('AD_SDK_CANCELED', r, o),
																							this.eventBus.subscribe('AD_ERROR', r, o);
																					}.bind(this)
																				)
																			);
																		case 14:
																			return t.abrupt('return', i);
																		case 17:
																			throw ((t.prev = 17), (t.t1 = t.catch(1)), new Error(t.t1));
																		case 20:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this,
															[[1, 17]]
														);
													})
												)),
												function (t) {
													return ma.apply(this, arguments);
												})
										},
										{
											key: '_startRewardedAd',
											value:
												((ga = yo(
													bo.mark(function t(e) {
														var n;
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			if (this.requestRunning)
																				return (
																					this.eventBus.broadcast('AD_IS_ALREADY_RUNNING', {
																						status: 'warning'
																					}),
																					t.abrupt('return')
																				);
																			t.next = 3;
																			break;
																		case 3:
																			return (
																				(this.requestRunning = !0),
																				(t.next = 6),
																				this._initDisplayContainerWithAutoPlay()
																			);
																		case 6:
																			return (
																				(n = t.sent),
																				(t.next = 9),
																				this._loadRewardedAd(ua(ua({}, n), e))
																			);
																		case 9:
																			(t.prev = 9),
																				n.autoplayRequiresMute && this.adsManager.setVolume(0),
																				this.adsManager.init(
																					this.options.width,
																					this.options.height,
																					google.ima.ViewMode.NORMAL
																				),
																				this.adsManager.start(),
																				(t.next = 19);
																			break;
																		case 15:
																			throw (
																				((t.prev = 15),
																				(t.t0 = t.catch(9)),
																				this._onError(t.t0),
																				t.t0)
																			);
																		case 19:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this,
															[[9, 15]]
														);
													})
												)),
												function (t) {
													return ga.apply(this, arguments);
												})
										},
										{
											key: '_loadRewardedAd',
											value:
												((fa = yo(
													bo.mark(function t(e) {
														var n,
															i,
															a = this;
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			if (
																				(this._resetAdsLoader(),
																				(t.prev = 1),
																				(t.t0 = this.preloadedRewardedAdVast),
																				t.t0)
																			) {
																				t.next = 7;
																				break;
																			}
																			return (t.next = 6), this._getAdVast(Sr.Rewarded, e);
																		case 6:
																			t.t0 = t.sent;
																		case 7:
																			return (
																				(n = t.t0),
																				delete this.preloadedRewardedAdVast,
																				(t.next = 11),
																				this._requestAd(n, ua({ adType: Sr.Rewarded }, e))
																			);
																		case 11:
																			return (
																				(i = t.sent),
																				(t.next = 14),
																				new Promise(
																					function (e, n) {
																						var i = this;
																						_o(this, a);
																						var o = 'videoad.preloadad';
																						this.eventBus.unsubscribeScope(o);
																						var t = function (t) {
																								_o(this, i),
																									this.eventBus.unsubscribeScope(o),
																									e(t.message);
																							}.bind(this),
																							r = function (t) {
																								_o(this, i),
																									this.eventBus.unsubscribeScope(o),
																									n(t.message);
																							}.bind(this);
																						this.eventBus.subscribe('AD_SDK_MANAGER_READY', t, o),
																							this.eventBus.subscribe('AD_SDK_CANCELED', r, o),
																							this.eventBus.subscribe('AD_ERROR', r, o);
																					}.bind(this)
																				)
																			);
																		case 14:
																			return t.abrupt('return', i);
																		case 17:
																			throw ((t.prev = 17), (t.t1 = t.catch(1)), new Error(t.t1));
																		case 20:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this,
															[[1, 17]]
														);
													})
												)),
												function (t) {
													return fa.apply(this, arguments);
												})
										},
										{
											key: '_preloadInterstitialAd',
											value:
												((ha = yo(
													bo.mark(function t() {
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			return (
																				(t.prev = 0), (t.next = 3), this._getAdVast(Sr.Interstitial)
																			);
																		case 3:
																			return (
																				(this.preloadedInterstitialAdVast = t.sent),
																				t.abrupt('return', this.preloadedInterstitialAdVast.url)
																			);
																		case 7:
																			throw ((t.prev = 7), (t.t0 = t.catch(0)), new Error(t.t0));
																		case 10:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this,
															[[0, 7]]
														);
													})
												)),
												function () {
													return ha.apply(this, arguments);
												})
										},
										{
											key: '_preloadRewardedAd',
											value:
												((pa = yo(
													bo.mark(function t() {
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			return (
																				(t.prev = 0), (t.next = 3), this._getAdVast(Sr.Rewarded)
																			);
																		case 3:
																			return (
																				(this.preloadedRewardedAdVast = t.sent),
																				t.abrupt('return', this.preloadedRewardedAdVast.url)
																			);
																		case 7:
																			throw ((t.prev = 7), (t.t0 = t.catch(0)), new Error(t.t0));
																		case 10:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this,
															[[0, 7]]
														);
													})
												)),
												function () {
													return pa.apply(this, arguments);
												})
										},
										{
											key: '_onError',
											value: function (t) {
												this.cancel(), this._clearSafetyTimer('ERROR');
											}
										},
										{
											key: '_hide',
											value: function (t) {
												(this.video_ad_player.src = ''),
													this.activeAdContainer &&
														(this.activeAdContainer.style.visibility = 'hidden');
											}
										},
										{
											key: '_show',
											value: function (t) {
												var e,
													n,
													i = this;
												this.activeAdContainer &&
													((this.activeAdContainer.style.visibility = 'visible'),
													(e = null == t ? void 0 : t.mode),
													(n = this._isT4R(t)),
													(t = this._getT4ROptions()),
													'loaded' === e
														? ((this.activeAdContainer.style.opacity = n ? 0.001 : 1),
														  n && this.eventBus.broadcast('AD_T4R'),
														  n &&
																setTimeout(
																	function () {
																		_o(this, i), (this.activeAdContainer.style.opacity = 1);
																	}.bind(this),
																	((null == t ? void 0 : t.min) || 1234) +
																		Math.random() * ((null == t ? void 0 : t.max) || 3210)
																))
														: ('click' !== e && 'first_quartile' !== e) ||
														  (this.activeAdContainer.style.opacity = 1));
											}
										},
										{
											key: '_createPlayer',
											value: function () {
												var n = this,
													t = document.body || document.getElementsByTagName('body')[0];
												(this.adContainer = document.createElement('div')),
													(this.adContainer.id = ''.concat(this.prefix, 'advertisement')),
													(this.adContainer.style.position = this.thirdPartyContainer
														? 'absolute'
														: 'fixed'),
													(this.adContainer.style.zIndex = Hr),
													(this.adContainer.style.top = '0'),
													(this.adContainer.style.left = '0'),
													(this.adContainer.style.width = '100%'),
													(this.adContainer.style.height = '100%'),
													this.thirdPartyContainer &&
														(this.thirdPartyContainer.style.transform = null);
												var i = document.createElement('video');
												i.setAttribute('playsinline', !0),
													i.setAttribute('webkit-playsinline', !0),
													(i.id = ''.concat(this.prefix, 'advertisement_video')),
													(i.style.position = 'absolute'),
													(i.style.backgroundColor = '#000000'),
													(i.style.top = '0'),
													(i.style.left = '0'),
													(i.style.width = this.options.width + 'px'),
													(i.style.height = this.options.height + 'px'),
													(this.video_ad_player = i),
													this.adContainer.appendChild(i);
												var o = document.createElement('div');
												(o.id = ''.concat(this.prefix, 'advertisement_slot')),
													(o.style.position = 'absolute'),
													(o.style.top = '0'),
													(o.style.left = '0'),
													(o.style.width = this.options.width + 'px'),
													(o.style.height = this.options.height + 'px'),
													(this.adContainerInner = o),
													(this.activeAdContainer = this.adContainer),
													this.thirdPartyContainer
														? (this.adContainer.appendChild(o),
														  this.thirdPartyContainer.appendChild(this.adContainer),
														  (this.activeAdContainer = this.thirdPartyContainer))
														: (this.adContainer.appendChild(o), t.appendChild(this.adContainer)),
													(this.activeAdContainer.style.visibility = 'hidden');
												t = function () {
													_o(this, n);
													var t =
															window.innerWidth ||
															document.documentElement.clientWidth ||
															document.body.clientWidth,
														e =
															window.innerHeight ||
															document.documentElement.clientHeight ||
															document.body.clientHeight;
													(this.options.width = this.thirdPartyContainer
														? this.thirdPartyContainer.offsetWidth
														: t),
														(this.options.height = this.thirdPartyContainer
															? this.thirdPartyContainer.offsetHeight
															: e),
														(o.style.width = this.options.width + 'px'),
														(o.style.height = this.options.height + 'px'),
														(i.style.width = this.options.width + 'px'),
														(i.style.height = this.options.height + 'px');
												}.bind(this);
												window.addEventListener('resize', t),
													window.document.addEventListener('DOMContentLoaded', t);
											}
										},
										{
											key: '_setUpIMA',
											value: function () {
												(this.adDisplayContainer = new google.ima.AdDisplayContainer(
													this.adContainerInner,
													this.video_ad_player
												)),
													(this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer)),
													this.adsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus(!0),
													this.adsLoader.getSettings().setLocale(this.options.locale),
													this.adsLoader.getSettings().setVpaidMode(this._getVPAIDMode()),
													this.adsLoader.getSettings().setAutoPlayAdBreaks(!0),
													this.adsLoader.addEventListener(
														google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
														this._onAdsManagerLoaded,
														!1,
														this
													),
													this.adsLoader.addEventListener(
														google.ima.AdErrorEvent.Type.AD_ERROR,
														this._onAdError,
														!1,
														this
													);
											}
										},
										{
											key: '_onAdsManagerLoaded',
											value: function (t) {
												var e = this,
													n = new google.ima.AdsRenderingSettings();
												(n.autoAlign = !0),
													(n.enablePreloading = !1),
													(n.restoreCustomPlaybackStateOnAdBreakComplete = !0),
													(n.uiElements = [
														google.ima.UiElements.AD_ATTRIBUTION,
														google.ima.UiElements.COUNTDOWN
													]),
													(this.adsManager = t.getAdsManager(this.video_ad_player, n)),
													this.adsManager.addEventListener(
														google.ima.AdErrorEvent.Type.AD_ERROR,
														this._onAdError.bind(this),
														!1,
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.AD_BREAK_READY,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.AD_METADATA,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.CLICK,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.COMPLETE,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.DURATION_CHANGE,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.FIRST_QUARTILE,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.IMPRESSION,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.INTERACTION,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.LINEAR_CHANGED,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.LOADED,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.LOG,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.MIDPOINT,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.PAUSED,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.RESUMED,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.SKIPPED,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.STARTED,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.THIRD_QUARTILE,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.USER_CLOSE,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.VOLUME_CHANGED,
														this._onAdEvent.bind(this),
														this
													),
													this.adsManager.addEventListener(
														google.ima.AdEvent.Type.VOLUME_MUTED,
														this._onAdEvent.bind(this),
														this
													),
													window.addEventListener(
														'resize',
														function () {
															_o(this, e),
																this.adsManager &&
																	this.adsManager.resize(
																		this.options.width,
																		this.options.height,
																		google.ima.ViewMode.NORMAL
																	);
														}.bind(this)
													),
													this.adDisplayContainerInitialized ||
														(this.adDisplayContainer.initialize(),
														(this.adDisplayContainerInitialized = !0));
												var i = new Date(),
													o = i.getHours(),
													r = i.getDate(),
													a = i.getMonth(),
													n = i.getFullYear(),
													i = 'AD_SDK_MANAGER_READY';
												this.eventBus.broadcast(i, {
													name: i,
													message: 'AD SDK is ready',
													status: 'success',
													analytics: {
														category: i,
														action: this.parentDomain,
														label: 'h'.concat(o, ' d').concat(r, ' m').concat(a, ' y').concat(n)
													}
												}),
													(this._adrequest_user_context = t.getUserRequestContext());
											}
										},
										{
											key: '_onAdEvent',
											value: function (t) {
												var e,
													n,
													i = new Date(),
													o = i.getHours(),
													r = i.getDate(),
													a = i.getMonth(),
													s = i.getFullYear(),
													i =
														((e = google.ima.AdEvent.Type),
														(n = t.type),
														Object.keys(e).find(function (t) {
															return e[t] === n;
														})),
													c = !1;
												this._sendIMAEventsToHB(t);
												var l = '';
												switch (t.type) {
													case google.ima.AdEvent.Type.AD_BREAK_READY:
														l =
															'Fired when an ad rule or a VMAP ad break would have played if autoPlayAdBreaks is false.';
														break;
													case google.ima.AdEvent.Type.AD_METADATA:
														l = 'Fired when an ads list is loaded.';
														break;
													case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
														(c = !0),
															(l = 'Fired when the ads manager is done playing all the ads.');
														break;
													case google.ima.AdEvent.Type.CLICK:
														var l = 'Fired when the ad is clicked.',
															d = t.getAd().getContentType();
														this._show({ mode: 'click', contentType: d });
														break;
													case google.ima.AdEvent.Type.COMPLETE:
														(c = this._is_completed(t.getAd())),
															(l = 'Fired when the ad completes playing.');
														break;
													case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
														l =
															'Fired when content should be paused. This usually happens right before an ad is about to cover the content.';
														break;
													case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
														(l =
															'Fired when content should be resumed. This usually happens when an ad finishes or collapses.'),
															(c = !0);
														break;
													case google.ima.AdEvent.Type.DURATION_CHANGE:
														l = "Fired when the ad's duration changes.";
														break;
													case google.ima.AdEvent.Type.FIRST_QUARTILE:
														l = 'Fired when the ad playhead crosses first quartile.';
														var u = t.getAd().getContentType();
														this._show({ mode: 'first_quartile', contentType: u });
														break;
													case google.ima.AdEvent.Type.IMPRESSION:
														l = 'Fired when the impression URL has been pinged.';
														break;
													case google.ima.AdEvent.Type.INTERACTION:
														l =
															'Fired when an ad triggers the interaction callback. Ad interactions contain an interaction ID string in the ad data.';
														break;
													case google.ima.AdEvent.Type.LINEAR_CHANGED:
														l =
															'Fired when the displayed ad changes from linear to nonlinear, or vice versa.';
														break;
													case google.ima.AdEvent.Type.LOADED:
														u = t.getAd().getContentType();
														(l = u), this._show({ mode: 'loaded', contentType: u });
														break;
													case google.ima.AdEvent.Type.LOG:
														t.getAdData().adError && (l = t.getAdData());
														break;
													case google.ima.AdEvent.Type.MIDPOINT:
														l = 'Fired when the ad playhead crosses midpoint.';
														break;
													case google.ima.AdEvent.Type.PAUSED:
														l = 'Fired when the ad is paused.';
														break;
													case google.ima.AdEvent.Type.RESUMED:
														l = 'Fired when the ad is resumed.';
														break;
													case google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED:
														l = 'Fired when the displayed ads skippable state is changed.';
														break;
													case google.ima.AdEvent.Type.SKIPPED:
														(c = this._is_completed(t.getAd())),
															(l = 'Fired when the ad is skipped by the user.');
														break;
													case google.ima.AdEvent.Type.STARTED:
														l = 'Fired when the ad starts playing.';
														break;
													case google.ima.AdEvent.Type.THIRD_QUARTILE:
														l = 'Fired when the ad playhead crosses third quartile.';
														break;
													case google.ima.AdEvent.Type.USER_CLOSE:
														(c = this._is_completed(t.getAd())),
															(l = 'Fired when the ad is closed by the user.');
														break;
													case google.ima.AdEvent.Type.VOLUME_CHANGED:
														l = 'Fired when the ad volume has changed.';
														break;
													case google.ima.AdEvent.Type.VOLUME_MUTED:
														l = 'Fired when the ad volume has been muted.';
												}
												'' !== i &&
													'' !== l &&
													this.eventBus.broadcast(i, {
														name: i,
														message: l,
														status: 'success',
														analytics: {
															category: i,
															action: this.parentDomain,
															label: 'h'.concat(o, ' d').concat(r, ' m').concat(a, ' y').concat(s)
														}
													}),
													c &&
														!this.adSuccess &&
														((this.adSuccess = !0),
														this.eventBus.broadcast('AD_SUCCESS', {
															message: 'Ad succeeded.',
															status: 'success'
														}),
														this.resetForNext(t));
											}
										},
										{
											key: '_onAdError',
											value: function (t) {
												(this.requestRunning = !1),
													this._resetAdsLoader(),
													this._clearSafetyTimer('ERROR'),
													this._hide('_onAdError'),
													this._sendIMAEventsToHB(t);
												try {
													var e = 'AD_ERROR',
														n = t.getError(),
														i = n.getErrorCode().toString() || n.getVastErrorCode().toString(),
														n = this._getInnerErrorCode(n);
													this.eventBus.broadcast(e, {
														message: i,
														details: n,
														status: 'warning',
														analytics: { category: e, action: n, label: i }
													});
												} catch (t) {}
											}
										},
										{
											key: '_sendIMAEventsToHB',
											value: function (t) {
												if (window.idhb && 'function' == typeof window.idhb.onImaEvent)
													try {
														window.idhb.onImaEvent(t);
													} catch (t) {}
											}
										},
										{
											key: '_resetAdsLoader',
											value: function () {
												this.adsManager &&
													(this.adsManager.destroy(),
													(this.adsManager = null),
													(this._adrequest_user_context = null)),
													this.adsLoader && this.adsLoader.contentComplete();
											}
										},
										{
											key: '_startSafetyTimer',
											value: function (t, e) {
												var n = this;
												this.safetyTimer && clearTimeout(this.safetyTimer),
													(this.safetyTimer = window.setTimeout(
														function () {
															_o(this, n), this.cancel(), this._clearSafetyTimer(e);
														}.bind(this),
														t
													));
											}
										},
										{
											key: '_clearSafetyTimer',
											value: function (t) {
												void 0 !== this.safetyTimer &&
													null !== this.safetyTimer &&
													(clearTimeout(this.safetyTimer), (this.safetyTimer = void 0));
											}
										},
										{
											key: '_getVPAIDMode',
											value: function () {
												return 'disabled' === this.options.vpaid_mode
													? google.ima.ImaSdkSettings.VpaidMode.DISABLED
													: 'insecure' === this.options.vpaid_mode
													? google.ima.ImaSdkSettings.VpaidMode.INSECURE
													: google.ima.ImaSdkSettings.VpaidMode.ENABLED;
											}
										},
										{
											key: '_getPrebidScripts',
											value: function () {
												var t = [
													'https://hb.improvedigital.com/pbw/gameDistributionV1.3.min.js',
													'http://hb.improvedigital.com/pbw/gameDistributionV1.3.min.js'
												];
												return this.options.hb_script ? [this.options.hb_script].concat(t) : t;
											}
										},
										{
											key: '_getInnerErrorCode',
											value: function (t) {
												if (br(t.getInnerError)) {
													t = t.getInnerError();
													if (t)
														return br(t.getErrorCode) && br(t.getVastErrorCode)
															? t.getErrorCode().toString() || t.getVastErrorCode().toString()
															: t.message;
												}
											}
										},
										{
											key: 'resetForNext',
											value: function () {
												(this.requestRunning = !1), this._hide('resetForNext');
											}
										},
										{
											key: '_createCustomAdVastUrl',
											value: function (t, e) {
												var n = this;
												if (t) {
													var i,
														o = this.macros.transform(t, {
															get: function (t) {
																if ((_o(this, n), e && e.tnl_keys))
																	return e.tnl_keys[t.toLowerCase()];
															}.bind(this)
														});
													for (i in o.query || {}) {
														var r = o.query[i];
														mr(r) && (o.query[i] = ir.stringify(r));
													}
													t = new hr(o.url, !0);
													return sa(t.query, o.query || {}), ua({ url: t.toString() }, e);
												}
											}
										},
										{
											key: '_transformVast',
											value: function (t, e) {
												var n = { url: t.url };
												try {
													var i = new hr(t.url, !0);
													this._transformQuery(t, e, i) && (n.url = i.toString());
													i = ir.parse(i.query.cust_params);
													return (n.bidder = i.hb_bidder), (n.price = i.gd_fp), n;
												} catch (t) {
													return (
														(n.hasError = !0),
														(n.message = t.message),
														(n.bidder = 'error'),
														console.log(t.message),
														n
													);
												}
											}
										},
										{
											key: '_transformQuery',
											value: function (e, t, n) {
												var i = this;
												if (e && t && e.tnl_keys) {
													var o = this.options.vast_query;
													if (
														(t.retry_on_success &&
														this.options.retry_on_success &&
														mr(this.options.retry_on_success.vast_query)
															? (o = this.options.retry_on_success.vast_query)
															: t.retry_on_failure &&
															  this.options.retry_on_failure &&
															  mr(this.options.retry_on_failure.vast_query) &&
															  (o = this.options.retry_on_failure.vast_query),
														mr((o = fr(o))))
													) {
														var r = n.query;
														if (o.$$remove) {
															for (var a in r) new RegExp(o.$$remove, 'i').test(a) && delete r[a];
															delete o.$$remove;
														}
														var s = ir.parse(r.cust_params);
														if (o.cust_params && o.cust_params.$$remove) {
															for (var c in s)
																new RegExp(o.cust_params.$$remove, 'i').test(c) && delete s[c];
															delete o.cust_params.$$remove;
														}
														n = this.macros.transform(o, {
															get: function (t) {
																return _o(this, i), e.tnl_keys[t.toLowerCase()];
															}.bind(this)
														});
														return (
															(r.cust_params = s),
															sa(r, n),
															(r.cust_params = ir.stringify(r.cust_params)),
															!0
														);
													}
												}
											}
										},
										{
											key: '_isT4R',
											value: function (t) {
												var e,
													n,
													i,
													o,
													r,
													a,
													s,
													c =
														null === (c = this._adrequest_user_context) || void 0 === c
															? void 0
															: c.tnl_ad_pos;
												return (
													c &&
													((null == t || null === (e = t.contentType) || void 0 === e
														? void 0
														: e.startsWith('image/')) ||
														'text' === (null == t ? void 0 : t.contentType)) &&
													(('preroll' === c &&
														(null === (t = this.gameData) ||
														void 0 === t ||
														null === (n = t.pAds) ||
														void 0 === n ||
														null === (i = n.t4r) ||
														void 0 === i
															? void 0
															: i.enabled)) ||
														('midroll' === c &&
															(null === (i = this.gameData) ||
															void 0 === i ||
															null === (o = i.mAds) ||
															void 0 === o ||
															null === (r = o.t4r) ||
															void 0 === r
																? void 0
																: r.enabled)) ||
														('rewarded' === c &&
															(null === (c = this.gameData) ||
															void 0 === c ||
															null === (a = c.rAds) ||
															void 0 === a ||
															null === (s = a.t4r) ||
															void 0 === s
																? void 0
																: s.enabled)))
												);
											}
										},
										{
											key: '_isVMAP',
											value: function (t) {
												var e, n, i, o, r, a, s, c;
												if (!t) return !1;
												var l =
													('preroll' === t &&
														(!0 ===
															(null === (e = this.gameData) ||
															void 0 === e ||
															null === (n = e.pAds) ||
															void 0 === n
																? void 0
																: n.vmap) ||
															!0 ===
																(null === (n = this.gameData) ||
																void 0 === n ||
																null === (i = n.pAds) ||
																void 0 === i ||
																null === (o = i.vmap) ||
																void 0 === o
																	? void 0
																	: o.enabled))) ||
													('midroll' === t &&
														(!0 ===
															(null === (o = this.gameData) ||
															void 0 === o ||
															null === (r = o.mAds) ||
															void 0 === r
																? void 0
																: r.vmap) ||
															!0 ===
																(null === (r = this.gameData) ||
																void 0 === r ||
																null === (a = r.mAds) ||
																void 0 === a ||
																null === (s = a.vmap) ||
																void 0 === s
																	? void 0
																	: s.enabled))) ||
													('rewarded' === t &&
														(!0 ===
															(null === (s = this.gameData) ||
															void 0 === s ||
															null === (c = s.rAds) ||
															void 0 === c
																? void 0
																: c.vmap) ||
															!0 ===
																(null === (c = this.gameData) ||
																void 0 === c ||
																null === (l = c.rAds) ||
																void 0 === l ||
																null === (d = l.vmap) ||
																void 0 === d
																	? void 0
																	: d.enabled)));
												if (!l) return !1;
												var d = this._get_vmap_config(t),
													t = this.adCounter[t];
												return void 0 !== (null == d ? void 0 : d.start)
													? t >= (null == d ? void 0 : d.start)
													: l;
											}
										},
										{
											key: '_getT4ROptions',
											value: function () {
												var t, e, n, i, o;
												switch (
													null === (t = this._adrequest_user_context) || void 0 === t
														? void 0
														: t.tnl_ad_pos
												) {
													case 'preroll':
														return null === (e = this.gameData) ||
															void 0 === e ||
															null === (n = e.pAds) ||
															void 0 === n
															? void 0
															: n.t4r;
													case 'midroll':
														return null === (n = this.gameData) ||
															void 0 === n ||
															null === (i = n.mAds) ||
															void 0 === i
															? void 0
															: i.t4r;
													case 'rewarded':
														return null === (i = this.gameData) ||
															void 0 === i ||
															null === (o = i.rAds) ||
															void 0 === o
															? void 0
															: o.t4r;
												}
											}
										},
										{
											key: '_is_completed',
											value: function (t) {
												var e = t.getContentType(),
													t = t.getAdPodInfo();
												return !(!e.startsWith('image/') && 'text' !== e && 1 !== t.getTotalAds());
											}
										},
										{
											key: '_get_vmap_context',
											value: function (t) {
												var e = t.adtag,
													n = t.position,
													i = t.config,
													t = this._createCustomAdVastUrl(null == i ? void 0 : i.vast_1) || e,
													e = this._createCustomAdVastUrl(null == i ? void 0 : i.vast_2) || e;
												return {
													adTagURI1: null == t ? void 0 : t.url,
													adTagURI2: null == e ? void 0 : e.url,
													position: n
												};
											}
										},
										{
											key: '_get_vmap_config',
											value: function (t) {
												var e, n, i, o, r;
												switch (t) {
													case 'preroll':
														return null === (e = this.gameData) ||
															void 0 === e ||
															null === (n = e.pAds) ||
															void 0 === n
															? void 0
															: n.vmap;
													case 'midroll':
														return null === (n = this.gameData) ||
															void 0 === n ||
															null === (i = n.mAds) ||
															void 0 === i
															? void 0
															: i.vmap;
													case 'rewarded':
														return null === (i = this.gameData) ||
															void 0 === i ||
															null === (o = i.rAds) ||
															void 0 === o
															? void 0
															: o.vmap;
													default:
														return null === (o = this.gameData) ||
															void 0 === o ||
															null === (r = o.pAds) ||
															void 0 === r
															? void 0
															: r.vmap;
												}
											}
										}
									]),
									Da),
								Sa = t(function (n) {
									function i(t, e) {
										return (
											(n.exports = i =
												Object.setPrototypeOf ||
												function (t, e) {
													return (t.__proto__ = e), t;
												}),
											i(t, e)
										);
									}
									n.exports = i;
								});
							function Da(t, e, n) {
								var i = this;
								if ((xo(this, Da), Ea)) return Ea;
								var o = { debug: !1, width: 640, height: 360, locale: 'en' };
								((Ea = this).options = e ? Dr(o, e) : o),
									(this.prefix = 'gdsdk__'),
									(this.adsLoader = null),
									(this.adsManager = null),
									(this.adDisplayContainer = null),
									(this.eventBus = new $r()),
									(this.safetyTimer = null),
									(this.containerTransitionSpeed = 0),
									(this.adCount = 0),
									(this.adCounter = {}),
									(this.adTypeCount = 0),
									(this.preloadedAdType = null),
									(this.requestRunning = !1),
									(this.parentDomain = n.parentDomain),
									(this.parentURL = n.parentURL),
									(this.adDisplayContainerInitialized = !1),
									(this.IMASampleTags = {
										interstitial: [
											'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=',
											'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dredirectlinear&correlator=',
											'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dredirecterror&correlator='
										],
										rewarded: [
											'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator='
										]
									}),
									(this.userAllowedPersonalizedAds =
										0 <= document.location.search.indexOf('gdpr-targeting=0') ||
										0 <= document.cookie.indexOf('ogdpr_advertisement=0')
											? '0'
											: '1'),
									this.parentDomain.includes('girlsgogames') &&
										(this.userAllowedPersonalizedAds = !1),
									(this.thirdPartyContainer = '' !== t ? document.getElementById(t) : null),
									(this.options.width =
										'number' == typeof this.options.width
											? this.options.width
											: '100%' === this.options.width
											? 640
											: this.options.width.replace(/[^0-9]/g, '')),
									(this.options.height =
										'number' == typeof this.options.height
											? this.options.height
											: '100%' === this.options.height
											? 360
											: this.options.height.replace(/[^0-9]/g, ''));
								(n =
									window.innerWidth ||
									document.documentElement.clientWidth ||
									document.body.clientWidth),
									(t =
										window.innerHeight ||
										document.documentElement.clientHeight ||
										document.body.clientHeight);
								(this.options.width = this.thirdPartyContainer
									? this.thirdPartyContainer.offsetWidth
									: n),
									(this.options.height = this.thirdPartyContainer
										? this.thirdPartyContainer.offsetHeight
										: t),
									(this.gameId = '0'),
									(this.category = ''),
									(this.tags = []),
									(this.eventCategory = 'AD'),
									this.eventBus.subscribe(
										'LOADED',
										function () {
											_o(this, i),
												this._clearSafetyTimer('LOADED'),
												this._startSafetyTimer(8e3, 'LOADED');
										}.bind(this),
										'ima'
									),
									this.eventBus.subscribe(
										'STARTED',
										function () {
											_o(this, i), this._clearSafetyTimer('STARTED');
										}.bind(this),
										'ima'
									);
							}
							function Ra(t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError('Super expression must either be null or a function');
								(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									e && Sa(t, e);
							}
							function Ta(t, e) {
								return !e || ('object' !== n(e) && 'function' != typeof e)
									? (function (t) {
											if (void 0 === t)
												throw new ReferenceError(
													"this hasn't been initialised - super() hasn't been called"
												);
											return t;
									  })(t)
									: e;
							}
							var La = t(function (e) {
									function n(t) {
										return (
											(e.exports = n =
												Object.setPrototypeOf
													? Object.getPrototypeOf
													: function (t) {
															return t.__proto__ || Object.getPrototypeOf(t);
													  }),
											n(t)
										);
									}
									e.exports = n;
								}),
								Ca =
									(He = 'object' == typeof Reflect ? Reflect : null) &&
									'function' == typeof He.apply
										? He.apply
										: function (t, e, n) {
												return Function.prototype.apply.call(t, e, n);
										  },
								Oa =
									He && 'function' == typeof He.ownKeys
										? He.ownKeys
										: Object.getOwnPropertySymbols
										? function (t) {
												return Object.getOwnPropertyNames(t).concat(
													Object.getOwnPropertySymbols(t)
												);
										  }
										: function (t) {
												return Object.getOwnPropertyNames(t);
										  },
								Pa =
									Number.isNaN ||
									function (t) {
										return t != t;
									};
							function Ia() {
								Ia.init.call(this);
							}
							var ja = Ia;
							((Ia.EventEmitter = Ia).prototype._events = void 0),
								(Ia.prototype._eventsCount = 0),
								(Ia.prototype._maxListeners = void 0);
							var Ba = 10;
							function Ma(t) {
								if ('function' != typeof t)
									throw new TypeError(
										'The "listener" argument must be of type Function. Received type ' + typeof t
									);
							}
							function za(t) {
								return void 0 === t._maxListeners ? Ia.defaultMaxListeners : t._maxListeners;
							}
							function Na(t, e, n, i) {
								var o, r;
								return (
									Ma(n),
									void 0 === (o = t._events)
										? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
										: (void 0 !== o.newListener &&
												(t.emit('newListener', e, n.listener || n), (o = t._events)),
										  (r = o[e])),
									void 0 === r
										? ((r = o[e] = n), ++t._eventsCount)
										: ('function' == typeof r
												? (r = o[e] = i ? [n, r] : [r, n])
												: i
												? r.unshift(n)
												: r.push(n),
										  0 < (n = za(t)) &&
												r.length > n &&
												!r.warned &&
												((r.warned = !0),
												((n = new Error(
													'Possible EventEmitter memory leak detected. ' +
														r.length +
														' ' +
														String(e) +
														' listeners added. Use emitter.setMaxListeners() to increase limit'
												)).name = 'MaxListenersExceededWarning'),
												(n.emitter = t),
												(n.type = e),
												(n.count = r.length),
												console && console.warn && console.warn(n))),
									t
								);
							}
							function Ua(t, e, n) {
								(t = { fired: !1, wrapFn: void 0, target: t, type: e, listener: n }),
									(e = function t() {
										if (!this.fired)
											return (
												this.target.removeListener(this.type, this.wrapFn),
												(this.fired = !0),
												0 === arguments.length
													? this.listener.call(this.target)
													: this.listener.apply(this.target, arguments)
											);
									}.bind(t));
								return (e.listener = n), (t.wrapFn = e);
							}
							function Ga(t, e, n) {
								t = t._events;
								if (void 0 === t) return [];
								e = t[e];
								return void 0 === e
									? []
									: 'function' == typeof e
									? n
										? [e.listener || e]
										: [e]
									: n
									? (function (t) {
											for (var e = new Array(t.length), n = 0; n < e.length; ++n)
												e[n] = t[n].listener || t[n];
											return e;
									  })(e)
									: Ha(e, e.length);
							}
							function Fa(t) {
								var e = this._events;
								if (void 0 !== e) {
									t = e[t];
									if ('function' == typeof t) return 1;
									if (void 0 !== t) return t.length;
								}
								return 0;
							}
							function Ha(t, e) {
								for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
								return n;
							}
							Object.defineProperty(Ia, 'defaultMaxListeners', {
								enumerable: !0,
								get: function () {
									return Ba;
								},
								set: function (t) {
									if ('number' != typeof t || t < 0 || Pa(t))
										throw new RangeError(
											'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
												t +
												'.'
										);
									Ba = t;
								}
							}),
								(Ia.init = function () {
									(void 0 !== this._events &&
										this._events !== Object.getPrototypeOf(this)._events) ||
										((this._events = Object.create(null)), (this._eventsCount = 0)),
										(this._maxListeners = this._maxListeners || void 0);
								}),
								(Ia.prototype.setMaxListeners = function (t) {
									if ('number' != typeof t || t < 0 || Pa(t))
										throw new RangeError(
											'The value of "n" is out of range. It must be a non-negative number. Received ' +
												t +
												'.'
										);
									return (this._maxListeners = t), this;
								}),
								(Ia.prototype.getMaxListeners = function () {
									return za(this);
								}),
								(Ia.prototype.emit = function (t) {
									for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
									var i,
										o = 'error' === t,
										r = this._events;
									if (void 0 !== r) o = o && void 0 === r.error;
									else if (!o) return !1;
									if (o) {
										if ((i = 0 < e.length ? e[0] : i) instanceof Error) throw i;
										o = new Error('Unhandled error.' + (i ? ' (' + i.message + ')' : ''));
										throw ((o.context = i), o);
									}
									t = r[t];
									if (void 0 === t) return !1;
									if ('function' == typeof t) Ca(t, this, e);
									else for (var a = t.length, s = Ha(t, a), n = 0; n < a; ++n) Ca(s[n], this, e);
									return !0;
								}),
								(Ia.prototype.addListener = function (t, e) {
									return Na(this, t, e, !1);
								}),
								(Ia.prototype.on = Ia.prototype.addListener),
								(Ia.prototype.prependListener = function (t, e) {
									return Na(this, t, e, !0);
								}),
								(Ia.prototype.once = function (t, e) {
									return Ma(e), this.on(t, Ua(this, t, e)), this;
								}),
								(Ia.prototype.prependOnceListener = function (t, e) {
									return Ma(e), this.prependListener(t, Ua(this, t, e)), this;
								}),
								(Ia.prototype.removeListener = function (t, e) {
									var n, i, o, r, a;
									if ((Ma(e), void 0 === (i = this._events))) return this;
									if (void 0 === (n = i[t])) return this;
									if (n === e || n.listener === e)
										0 == --this._eventsCount
											? (this._events = Object.create(null))
											: (delete i[t],
											  i.removeListener && this.emit('removeListener', t, n.listener || e));
									else if ('function' != typeof n) {
										for (o = -1, r = n.length - 1; 0 <= r; r--)
											if (n[r] === e || n[r].listener === e) {
												(a = n[r].listener), (o = r);
												break;
											}
										if (o < 0) return this;
										0 === o
											? n.shift()
											: (function (t, e) {
													for (; e + 1 < t.length; e++) t[e] = t[e + 1];
													t.pop();
											  })(n, o),
											1 === n.length && (i[t] = n[0]),
											void 0 !== i.removeListener && this.emit('removeListener', t, a || e);
									}
									return this;
								}),
								(Ia.prototype.off = Ia.prototype.removeListener),
								(Ia.prototype.removeAllListeners = function (t) {
									var e, n;
									if (void 0 === (n = this._events)) return this;
									if (void 0 === n.removeListener)
										return (
											0 === arguments.length
												? ((this._events = Object.create(null)), (this._eventsCount = 0))
												: void 0 !== n[t] &&
												  (0 == --this._eventsCount
														? (this._events = Object.create(null))
														: delete n[t]),
											this
										);
									if (0 === arguments.length) {
										for (var i, o = Object.keys(n), r = 0; r < o.length; ++r)
											'removeListener' !== (i = o[r]) && this.removeAllListeners(i);
										return (
											this.removeAllListeners('removeListener'),
											(this._events = Object.create(null)),
											(this._eventsCount = 0),
											this
										);
									}
									if ('function' == typeof (e = n[t])) this.removeListener(t, e);
									else if (void 0 !== e)
										for (r = e.length - 1; 0 <= r; r--) this.removeListener(t, e[r]);
									return this;
								}),
								(Ia.prototype.listeners = function (t) {
									return Ga(this, t, !0);
								}),
								(Ia.prototype.rawListeners = function (t) {
									return Ga(this, t, !1);
								}),
								(Ia.listenerCount = function (t, e) {
									return 'function' == typeof t.listenerCount ? t.listenerCount(e) : Fa.call(t, e);
								}),
								(Ia.prototype.listenerCount = Fa),
								(Ia.prototype.eventNames = function () {
									return 0 < this._eventsCount ? Oa(this._events) : [];
								}),
								(ja.once = function (o, r) {
									return new Promise(function (t, e) {
										function n() {
											void 0 !== i && o.removeListener('error', i), t([].slice.call(arguments));
										}
										var i;
										'error' !== r &&
											((i = function (t) {
												o.removeListener(r, n), e(t);
											}),
											o.once('error', i)),
											o.once(r, n);
									});
								});
							var qa = (function () {
									Ra(r, ja);
									var n,
										i,
										o =
											((n = r),
											(i = (function () {
												if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
												if (Reflect.construct.sham) return !1;
												if ('function' == typeof Proxy) return !0;
												try {
													return (
														Date.prototype.toString.call(
															Reflect.construct(Date, [], function () {})
														),
														!0
													);
												} catch (t) {
													return !1;
												}
											})()),
											function () {
												var t,
													e = La(n);
												return (
													(e = i
														? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
														: e.apply(this, arguments)),
													Ta(this, e)
												);
											});
									function r(t, e) {
										var n;
										return xo(this, r), ((n = o.call(this)).options = t), (n.gameData = e), n;
									}
									return (
										ko(r, [
											{
												key: '_getThumbnail',
												value: function (t, e) {
													var n = e.assets.find(function (t) {
														return t.hasOwnProperty('name') && 512 === t.width && 512 === t.height;
													});
													return n
														? 'https://img.gamedistribution.com/'.concat(n.name)
														: 0 < e.assets.length && e.assets[0].hasOwnProperty('name')
														? 'https://img.gamedistribution.com/'.concat(e.assets[0].name)
														: 'https://img.gamedistribution.com/logo.svg';
												}
											},
											{
												key: '_registerEvents',
												value: function () {
													var e = this,
														t = document.getElementById(
															''.concat(this.options.prefix, 'splash-button')
														);
													t &&
														t.addEventListener('click', function (t) {
															e.emit('playClick', t);
														});
													t = document.getElementById(''.concat(this.options.prefix, 'splash'));
													t &&
														t.addEventListener('click', function (t) {
															e.emit('containerClick', t);
														});
												}
											},
											{
												key: 'hide',
												value: function () {
													var t = this._container,
														e = this._extContainer;
													t && t.parentNode && t.parentNode.removeChild(t),
														e && (e.style.display = 'none');
												}
											},
											{
												key: '_insertCss',
												value: function (t) {
													var e = document.head || document.getElementsByTagName('head')[0],
														n = document.createElement('style'),
														i = document.head.querySelector('style[data-gdsdk-style]');
													i && i.remove(),
														(n.type = 'text/css'),
														n.setAttribute('data-gdsdk-style', !0),
														n.styleSheet
															? (n.styleSheet.cssText = t)
															: n.appendChild(document.createTextNode(t)),
														e.appendChild(n);
												}
											},
											{
												key: '_getExtContainer',
												value: function () {
													if (this.options.flashSettings.splashContainerId)
														return document.getElementById(
															this.options.flashSettings.splashContainerId
														);
												}
											},
											{
												key: 'getRoot',
												value: function () {
													return this._root;
												}
											}
										]),
										r
									);
								})(),
								Ka = {
									arabic: 'العب',
									english: 'PLAY',
									turkish: 'OYNA',
									french: 'JOUER',
									russian: 'играть'
								},
								Va = (function () {
									Ra(r, qa);
									var n,
										i,
										o =
											((n = r),
											(i = (function () {
												if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
												if (Reflect.construct.sham) return !1;
												if ('function' == typeof Proxy) return !0;
												try {
													return (
														Date.prototype.toString.call(
															Reflect.construct(Date, [], function () {})
														),
														!0
													);
												} catch (t) {
													return !1;
												}
											})()),
											function () {
												var t,
													e = La(n);
												return (
													(e = i
														? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
														: e.apply(this, arguments)),
													Ta(this, e)
												);
											});
									function r(t, e) {
										return xo(this, r), (e = o.call(this, t, e))._init(), e;
									}
									return (
										ko(r, [
											{
												key: '_init',
												value: function () {
													var t = this._css(this.options, this.gameData);
													this._insertCss(t);
													var e = this._html(this.options, this.gameData),
														t = this._insertHtml(e),
														e = t.container,
														t = t.extContainer;
													(this._root = e),
														(this._container = e),
														(this._extContainer = t),
														this._registerEvents();
												}
											},
											{
												key: '_css',
												value: function (t, e) {
													e = this._getThumbnail(t, e);
													return '\n            body {\n                position: inherit;\n            }\n            .'
														.concat(
															this.options.prefix,
															'splash-background-container {\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #000;\n                overflow: hidden;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-background-image {\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-image: url(https://static.gamedistribution.com/custom-splash/admeen/bg-2048x2048.jpg);\n                background-size: cover;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-logo {\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 150px;\n                height: 130px;\n                background-image: url(https://static.gamedistribution.com/custom-splash/admeen/logo.png);\n                background-size: cover;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-container {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                position: absolute;\n                bottom: 0;\n                width: 100%;\n                height: 100%;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                flex: 1;\n                align-self: center;\n                justify-content: center;\n                padding: 20px;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div {\n                text-align: center;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-button {\n                border: 0;\n                margin: auto;\n                padding: 15px 22px;\n                cursor: pointer;\n                background-image: url(https://static.gamedistribution.com/custom-splash/admeen/normal.png);\n                background-size: cover;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-button:hover {\n                background-image: url(https://static.gamedistribution.com/custom-splash/admeen/hover.png);\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-button:active {\n                box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n                background: linear-gradient(0deg, #ffffff, #f5f5f5);\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-thumbnail {\n                position: relative;\n                width: 150px;\n                height: 150px;\n                margin: auto auto 20px;\n                overflow: hidden;\n                border: 1px solid rgba(255, 255, 255, 1);\n                background-color: #000;\n                box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);\n                background-image: url('
														)
														.concat(
															e,
															');\n                background-position: center;\n                background-size: cover;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-thumbnail > img {\n                width: 100%;\n                height: 100%;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-bottom {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                align-self: center;\n                justify-content: center;\n                width: 100%;\n                padding: 0 0 20px;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(this.options.prefix, 'splash-consent,\n            .')
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-title {\n                box-sizing: border-box;\n                width: 100%;\n                padding: 20px;\n                background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5) 50%, transparent);\n                color: #fff;\n                text-align: left;\n                font-size: 12px;\n                font-family: Arial;\n                font-weight: normal;\n                text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);\n                line-height: 150%;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-title {\n                padding: 15px 0;\n                text-align: center;\n                font-size: 18px;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                line-height: 100%;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-consent a {\n                color: #fff;\n            }\n        '
														);
												}
											},
											{
												key: '_html',
												value: function (t, e) {
													return t.isConsentDomain
														? '\n                <div class="'
																.concat(
																	this.options.prefix,
																	'splash-background-container">\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-background-image"></div>\n                </div>\n                <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-container">\n                <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-logo"></div>\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-top">\n                        <div>\n                            <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-thumbnail"></div>\n                            <div class="'
																)
																.concat(this.options.prefix, 'splash-button" id="')
																.concat(
																	this.options.prefix,
																	'splash-button"></div>\n                        </div>   \n                    </div>\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-bottom">\n                        <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-consent">\n                            We may show personalized ads provided by our partners, and our \n                            services can not be used by children under 16 years old without the \n                            consent of their legal guardian. By clicking "PLAY GAME", you consent \n                            to transmit your data to our partners for advertising purposes and \n                            declare that you are 16 years old or have the permission of your \n                            legal guardian. You can review our terms\n                            <a href="https://azerion.com/business/privacy.html" target="_blank">here</a>.\n                        </div>\n                    </div>\n                </div>\n            '
																)
														: '\n                <div class="'
																.concat(
																	this.options.prefix,
																	'splash-background-container">\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-background-image"></div>\n                </div>\n                <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-container">\n                <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-logo"></div>\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-top">\n                        <div>\n                            <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-thumbnail"></div>\n                            <div class="'
																)
																.concat(this.options.prefix, 'splash-button" id="')
																.concat(
																	this.options.prefix,
																	'splash-button"></div>\n                        </div>   \n                    </div>\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-bottom">\n                        <div class="'
																)
																.concat(this.options.prefix, 'splash-title">')
																.concat(
																	e.title,
																	'</div>\n                    </div>\n                </div>\n            '
																);
												}
											},
											{
												key: '_insertHtml',
												value: function (t) {
													var e = document.createElement('div');
													(e.innerHTML = t),
														(e.id = ''.concat(this.options.prefix, 'splash')),
														(e.style['z-index'] = Fr),
														(e.style.position = 'absolute'),
														(e.style.width = '100%'),
														(e.style.height = '100%'),
														(e.style.top = '0'),
														(e.style.left = '0');
													var n = this._getExtContainer();
													return (
														n
															? ((n.style.display = 'block'), n.insertBefore(e, n.firstChild))
															: (t =
																	document.body ||
																	document.getElementsByTagName('body')[0]).insertBefore(
																	e,
																	t.firstChild
															  ),
														{ container: e, extContainer: n }
													);
												}
											}
										]),
										r
									);
								})();
							!(function () {
								Ra(r, qa);
								var n,
									i,
									o =
										((n = r),
										(i = (function () {
											if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
											if (Reflect.construct.sham) return !1;
											if ('function' == typeof Proxy) return !0;
											try {
												return (
													Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
													!0
												);
											} catch (t) {
												return !1;
											}
										})()),
										function () {
											var t,
												e = La(n);
											return (
												(e = i
													? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
													: e.apply(this, arguments)),
												Ta(this, e)
											);
										});
								function r(t, e) {
									return xo(this, r), (e = o.call(this, t, e))._init(), e;
								}
								ko(r, [
									{
										key: '_init',
										value: function () {
											var t = this._css(this.options, this.gameData);
											this._insertCss(t);
											var e = this._html(this.options, this.gameData),
												t = this._insertHtml(e),
												e = t.container,
												t = t.extContainer;
											(this._root = e),
												(this._container = e),
												(this._extContainer = t),
												this._registerEvents();
											var n = document.querySelector('.'.concat(this.options.prefix, 'loader')),
												i = document.getElementById(
													''.concat(this.options.prefix, 'splash-button')
												);
											this.on('playClick', function () {
												(n.style.display = 'block'), (i.style.display = 'none');
											});
										}
									},
									{
										key: '_css',
										value: function (t, e) {
											var n = this._getThumbnail(t, e);
											return '\n            body {\n                position: inherit;\n            }\n\n            .'
												.concat(
													this.options.prefix,
													'splash-background-container {\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                overflow:hidden;\n                '
												)
												.concat(
													this._getBackground(t, e),
													'                      \n            }\n\n            .'
												)
												.concat(
													this.options.prefix,
													'sdk-version{\n                position:absolute;\n                right:0;\n                top:0;  \n                font-size:8px;\n                padding-top:6px;                 \n                padding-right:6px;\n                color:#aaa;     \n            }\n\n            .'
												)
												.concat(
													this.options.prefix,
													'splash-container {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left:0;\n                width: 100%;\n                height: 100%;\n            }\n\n            .'
												)
												.concat(
													this.options.prefix,
													'splash-top {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                flex: 1;\n                align-self: center;\n                justify-content: center;\n            }\n\n            .'
												)
												.concat(
													this.options.prefix,
													'splash-bottom {\n              display: flex;\n              flex-flow: column;\n              box-sizing: border-box;\n              align-self: center;\n              justify-content: center;\n              width: 100%;\n              padding-left:6px;\n              padding-right:6px;\n              padding-bottom:6px;\n            }\n\n            .'
												)
												.concat(
													this.options.prefix,
													'splash-top > div {\n                text-align: center;\n            }\n\n            .'
												)
												.concat(
													this.options.prefix,
													'splash-top > div > button {\n                margin: auto;\n                padding: 8px;\n                border-radius: 5px;\n                border:0;\n                background: linear-gradient(0deg, #21A179, #1C8464);\n                color: white;\n                text-transform: uppercase;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                font-size: 18px;\n                cursor: pointer;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n                width: 150px;\n            }\n\n            .'
												)
												.concat(
													this.options.prefix,
													'splash-top > div > button:hover {\n                background: linear-gradient(0deg, #1C8464, #21A179);\n            }\n\n            .'
												)
												.concat(
													this.options.prefix,
													'splash-top > div > button:active {\n                box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n                background: linear-gradient(0deg, #1C8464, #15674E);\n            }\n            \n            .'
												)
												.concat(
													this.options.prefix,
													'splash-top > div > div:first-child {\n                position: relative;\n                width: 150px;\n                height: 150px;\n                margin: auto auto 12px;\n                border-radius: 5px;\n                overflow: hidden;\n                border: 2px solid rgba(255, 255, 255, 0.8);\n                box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);\n                background-image: url('
												)
												.concat(
													n,
													');\n                background-position: center;\n                background-size: cover;\n            }\n            .'
												)
												.concat(this.options.prefix, 'splash-bottom > .')
												.concat(this.options.prefix, 'splash-consent,\n            .')
												.concat(this.options.prefix, 'splash-bottom > .')
												.concat(
													this.options.prefix,
													'splash-title {\n                box-sizing: border-box;\n                width: 100%;\n                color: #fff;\n                text-align: justify;\n                font-size: 12px;\n                font-family: Arial;\n                font-weight: normal;\n                line-height: 150%;\n            }\n            .'
												)
												.concat(this.options.prefix, 'splash-bottom > .')
												.concat(
													this.options.prefix,
													'splash-title {\n                text-align: center;\n                font-size: 18px;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                line-height: 100%;\n                text-transform: uppercase;\n            }\n            .'
												)
												.concat(this.options.prefix, 'splash-bottom > .')
												.concat(
													this.options.prefix,
													'splash-consent a {\n                color: #fff;\n            }\n            \n            .'
												)
												.concat(this.options.prefix, 'loader,\n            .')
												.concat(
													this.options.prefix,
													'loader:after {\n              border-radius: 50%;\n              width: 1.5em;\n              height: 1.5em;\n            }\n\n            .'
												)
												.concat(
													this.options.prefix,
													'loader {\n              margin: 0px auto;\n              font-size: 10px;\n              position: relative;\n              text-indent: -9999em;\n              border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n              border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n              border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n              border-left: 1.1em solid #ffffff;\n              -webkit-transform: translateZ(0);\n              -ms-transform: translateZ(0);\n              transform: translateZ(0);\n              -webkit-animation: '
												)
												.concat(
													this.options.prefix,
													'load8 1.1s infinite linear;\n              animation: '
												)
												.concat(
													this.options.prefix,
													'load8 1.1s infinite linear;\n              display:none;\n            }\n            @-webkit-keyframes '
												)
												.concat(
													this.options.prefix,
													'load8 {\n              0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n              }\n              100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n              }\n            }\n            @keyframes '
												)
												.concat(
													this.options.prefix,
													'load8 {\n              0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n              }\n              100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n              }\n            }\n\n            @keyframes '
												)
												.concat(
													this.options.prefix,
													'gradient {\n              0% {\n                background-position: 0% 50%;\n              }\n              50% {\n                background-position: 100% 50%;\n              }\n              100% {\n                background-position: 0% 50%;\n              }\n            }            \n'
												);
										}
									},
									{
										key: '_html',
										value: function (t, e) {
											var n = t.isConsentDomain,
												t = e.loader.lang ? Ka[e.loader.lang] : 'PLAY',
												e = 'arabic' !== e.loader.lang ? e.title : '',
												n = n ? 'display:block' : 'display:none';
											return '\n                <div class="'
												.concat(
													this.options.prefix,
													'splash-background-container">\n                  <div class="'
												)
												.concat(this.options.prefix, 'sdk-version">')
												.concat(this.options.version, '</div>\n                  <div class="')
												.concat(
													this.options.prefix,
													'splash-container">\n                      <div class="'
												)
												.concat(
													this.options.prefix,
													'splash-top">\n                          <div>\n                            <div></div>\n                            <button id="'
												)
												.concat(this.options.prefix, 'splash-button">')
												.concat(t, '</button> \n                            <div class="')
												.concat(
													this.options.prefix,
													'loader">Loading...</div>\n                          </div>\n                      </div>\n                      <div class="'
												)
												.concat(
													this.options.prefix,
													'splash-bottom">\n                          <div class="'
												)
												.concat(this.options.prefix, 'splash-title">')
												.concat(e, '</div>\n                          <div class="')
												.concat(this.options.prefix, 'splash-consent" style=')
												.concat(
													n,
													'>\n                              We may show personalized ads provided by our partners, and our \n                              services can not be used by children under 16 years old without the \n                              consent of their legal guardian. By clicking "PLAY", you consent \n                              to transmit your data to our partners for advertising purposes and \n                              declare that you are 16 years old or have the permission of your \n                              legal guardian. You can review our terms\n                              <a href="https://azerion.com/business/privacy.html" target="_blank">here</a>.\n                          </div>\n                      </div>\n                  </div>       \n                </div>\n            '
												);
										}
									},
									{
										key: '_insertHtml',
										value: function (t) {
											var e = document.createElement('div');
											(e.innerHTML = t),
												(e.id = ''.concat(this.options.prefix, 'splash')),
												(e.style['z-index'] = Fr),
												(e.style.position = 'fixed'),
												(e.style.width = '100%'),
												(e.style.height = '100%'),
												(e.style.top = '0'),
												(e.style.left = '0');
											var n = this._getExtContainer();
											return (
												n
													? ((n.style.display = 'block'), n.insertBefore(e, n.firstChild))
													: (t =
															document.body ||
															document.getElementsByTagName('body')[0]).insertBefore(
															e,
															t.firstChild
													  ),
												{ container: e, extContainer: n }
											);
										}
									},
									{
										key: '_getBackground',
										value: function (t, e) {
											var n = e.splash.background || t.background;
											if ('carbon' === n) {
												t = e.splash['background-color'] || '#131313';
												return '\n      background:\n      linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,\n      linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,\n      linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,\n      linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,\n      linear-gradient(90deg, #1b1b1b 10px, transparent 10px),\n      linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);\n      background-color:'.concat(
													t,
													';\n      background-size: 20px 20px;        \n      '
												);
											}
											if ('rainbow' === n) {
												var i = e.splash['background-color'] || '#840b2a';
												return '\n      background:\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,\n      linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);\n      background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;\n      background-color:'.concat(
													i,
													';    \n      '
												);
											}
											if ('linedpaper' === n) {
												i = e.splash['background-color'] || '#fff';
												return '\n      background-color:'.concat(
													i,
													';\n      background-image:\n      linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),\n      linear-gradient(#eee .1em, transparent .1em);\n      background-size: 100% 1.2em;     \n      '
												);
											}
											if ('era' === n)
												return (
													e.splash['background-color'],
													'\n        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n        background-size: 300% 300%;        \n        animation: '.concat(
														this.options.prefix,
														'gradient 60s ease infinite;\n    '
													)
												);
											e = e.splash['background-color'] || '#282828';
											return '\n     background:\n      radial-gradient(black 10%, transparent 10%) 0 0,\n      radial-gradient(black 10%, transparent 10%) 8px 8px,\n      radial-gradient(rgba(255,255,255,.1) 10%, transparent 10%) 0 1px,\n      radial-gradient(rgba(255,255,255,.1) 10%, transparent 10%) 8px 9px;\n      background-color:'.concat(
												e,
												';\n      background-size:16px 16px;\n     '
											);
										}
									}
								]);
							})();
							var Wa = (function () {
									Ra(r, qa);
									var n,
										i,
										o =
											((n = r),
											(i = (function () {
												if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
												if (Reflect.construct.sham) return !1;
												if ('function' == typeof Proxy) return !0;
												try {
													return (
														Date.prototype.toString.call(
															Reflect.construct(Date, [], function () {})
														),
														!0
													);
												} catch (t) {
													return !1;
												}
											})()),
											function () {
												var t,
													e = La(n);
												return (
													(e = i
														? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
														: e.apply(this, arguments)),
													Ta(this, e)
												);
											});
									function r(t, e) {
										return xo(this, r), (e = o.call(this, t, e))._init(), e;
									}
									return (
										ko(r, [
											{
												key: '_init',
												value: function () {
													this._palette = this._create_palette();
													var t = this._css(this.options, this.gameData);
													this._insertCss(t);
													var e = this._html(this.options, this.gameData),
														t = this._insertHtml(e),
														e = t.container,
														t = t.extContainer;
													(this._root = e),
														(this._container = e),
														(this._extContainer = t),
														this._registerEvents();
													var n = document.querySelector('.'.concat(this.options.prefix, 'loader')),
														i = document.getElementById(
															''.concat(this.options.prefix, 'splash-button')
														);
													this.on('playClick', function () {
														n && (n.style.display = 'block'), i && (i.style.display = 'none');
													}),
														this.on(
															'slotVisibilityChanged',
															this._on_slot_visibility_changed.bind(this)
														),
														this._init_slots(),
														this._create_abstract();
												}
											},
											{
												key: '_css',
												value: function (t, e) {
													e = this._getThumbnail(t, e);
													return '\n            body {\n                position: inherit;                              \n            }\n            .'
														.concat(
															this.options.prefix,
															'splash-container {\n              display: flex;\n              flex-direction: column;\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              top:0;\n              left:0;\n              color:'
														)
														.concat(
															this._palette.primary_text,
															';\n              font-family: Helvetica, Arial, sans-serif;    \n              background: '
														)
														.concat(
															this._palette.primary_dark,
															';                 \n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-abstract {\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              top:0;\n              left:0;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top {\n              display:flex;\n              justify-content: center;\n              align-items: center;\n              position:relative;\n              width:100%;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-center {\n              display: flex;\n              flex-grow:1;\n              position:relative;\n              flex-basis:100%;\n              overflow:hidden;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-bottom {\n              display:flex;\n              justify-content: center;\n              align-items: center;\n              position:relative;\n              width:100%;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-left {\n              display:flex;\n              position:relative;\n              justify-content: center;\n              align-items: center;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game {\n              display:flex;\n              flex-grow:1;\n              flex-direction:column;\n              flex-basis:100%;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-right {\n              display:flex;\n              position:relative;\n              justify-content: center;\n              align-items: center;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-metadata{\n              display:flex;\n              flex-direction:column;\n              justify-content:center;\n              flex-grow:1;\n              position:relative;\n            }\n            \n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-consent{\n              display:flex;\n              justify-content:center;\n              margin:0.5em;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-consent>p{\n              text-align: justify;\n              font-size: 12px;\n              font-family: Arial;\n              font-weight: normal;\n              max-width: 300px;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-consent>p>a{\n              color:'
														)
														.concat(this._palette.primary_text, ';\n            }\n\n            .')
														.concat(
															this.options.prefix,
															'splash-game-thumbnail-play{\n              flex-grow:1;\n              display:flex;\n              flex-direction:column;\n              justify-content:center;\n              align-items:center;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-title{\n              display:flex;\n              justify-content:center;\n              align-items:center;\n              margin:4px;\n              font-size:1.5em;\n              color:'
														)
														.concat(
															this._palette.primary_text,
															';  \n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-thumbnail{\n              display:flex;\n              justify-content:center;\n              align-items:flex-end;\n              position:relative;\n              margin:4px;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-play{\n              display:flex;\n              justify-content:center;\n              align-items:flex-start;\n              margin:6px;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-description{\n              display:flex;\n              justify-content:center;\n              align-items:flex-end;\n              margin:4px;\n              text-align: justify;\n              font-size: 14px;\n              font-family: Arial;\n              font-weight: normal;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-title>p{\n              max-width: 300px;  \n              padding:8px 24px;\n              text-transform:uppercase;\n              text-align:center;\n              box-sizing:border-box;\n            }\n                             \n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-description>p{\n              max-width: 300px;  \n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-thumbnail>div {\n              width: 150px;\n              height: 150px;\n              border-radius: 4px;\n              border: 2px solid '
														)
														.concat(
															this._palette.primary_light,
															';\n              background-image: url('
														)
														.concat(
															e,
															');\n              background-position: center;\n              background-size: cover;\n              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);              \n            }\n            \n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-play>button{\n              padding: 8px;\n              border-radius: 6px;\n              border:0;\n              background: '
														)
														.concat(this._palette.primary_paper, ';\n              color: ')
														.concat(
															this._palette.primary_text,
															';\n              text-transform: uppercase;\n              font-weight: bold;\n              font-size: 24px;\n              cursor: pointer;\n              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n              width: 150px;\n              border: 2px solid '
														)
														.concat(
															this._palette.primary_light,
															';              \n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-game-play>button:hover {\n                background: '
														)
														.concat(this._palette.primary, ';\n            }\n\n            .')
														.concat(
															this.options.prefix,
															'splash-game-play>button:active {\n              background: '
														)
														.concat(this._palette.primary_dark, ';\n            }\n\n            .')
														.concat(this.options.prefix, 'loader,\n            .')
														.concat(
															this.options.prefix,
															'loader:after {\n              border-radius: 20px;\n              width: 40px;\n              height: 40px;\n              box-sizing:border-box;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'loader {\n              margin: 0px auto;\n              position: relative;\n              border-top: 10px solid rgba(255, 255, 255, 0.2);\n              border-right: 10px solid rgba(255, 255, 255, 0.2);\n              border-bottom: 10px solid rgba(255, 255, 255, 0.2);\n              border-left: 10px solid '
														)
														.concat(
															this._palette.primary_text,
															';\n              -webkit-transform: translateZ(0);\n              -ms-transform: translateZ(0);\n              transform: translateZ(0);\n              -webkit-animation: '
														)
														.concat(
															this.options.prefix,
															'load8 1s infinite linear;\n              animation: '
														)
														.concat(
															this.options.prefix,
															'load8 1s infinite linear;\n              display:none;\n            }\n\n            @-webkit-keyframes '
														)
														.concat(
															this.options.prefix,
															'load8 {\n              0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n              }\n              100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n              }\n            }\n\n            @keyframes '
														)
														.concat(
															this.options.prefix,
															'load8 {\n              0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n              }\n              100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n              }\n            }\n\n            @media screen and (max-height:600px) {\n              .'
														)
														.concat(
															this.options.prefix,
															'splash-game-description{\n                display:none;\n              }\n              \n              .'
														)
														.concat(
															this.options.prefix,
															'splash-game-thumbnail>div{\n                max-width:150px;\n                max-height:150px;\n              }            \n            }\n\n            @media screen and (min-width:600px){\n              .'
														)
														.concat(this.options.prefix, 'splash-center >.')
														.concat(
															this.options.prefix,
															'splash-left{\n                display:flex;\n              }\n              .'
														)
														.concat(this.options.prefix, 'splash-center >.')
														.concat(
															this.options.prefix,
															'splash-right{\n                display:flex;\n              }\n              .'
														)
														.concat(this.options.prefix, 'splash-game-title>p,.')
														.concat(this.options.prefix, 'splash-game-consent>p,.')
														.concat(
															this.options.prefix,
															'splash-game-description>p{\n                max-width:500px;\n              }\n            }\n\n            @media screen and (min-height:600px){              \n              .'
														)
														.concat(this.options.prefix, 'splash-container >.')
														.concat(
															this.options.prefix,
															'splash-top{\n                display:flex;\n              }\n              .'
														)
														.concat(this.options.prefix, 'splash-container >.')
														.concat(
															this.options.prefix,
															'splash-bottom{\n                display:flex;\n              }        \n            }\n      '
														);
												}
											},
											{
												key: '_html',
												value: function (t, e) {
													var n = t.isConsentDomain,
														t = e.loader.lang ? Ka[e.loader.lang] : 'PLAY',
														n = n ? 'display:flex' : 'display:none';
													return '\n          <div class="'
														.concat(
															this.options.prefix,
															'splash-container">\n            <div id="'
														)
														.concat(this.options.prefix, 'splash-abstract" class="')
														.concat(
															this.options.prefix,
															'splash-abstract"></div>\n            <div id="'
														)
														.concat(this.options.prefix, 'splash-slot-top" class="')
														.concat(
															this.options.prefix,
															'splash-top"></div>\n            <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-center">   \n              <div id="'
														)
														.concat(this.options.prefix, 'splash-slot-left" class="')
														.concat(
															this.options.prefix,
															'splash-left">\n              </div>\n              <div id="'
														)
														.concat(this.options.prefix, 'splash-game" class="')
														.concat(
															this.options.prefix,
															'splash-game">\n\n                <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-game-metadata">\n                  \n                  <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-game-thumbnail-play">\n                    <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-game-thumbnail">   \n                      <div></div>\n                    </div>\n\n                    <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-game-play">   \n                      <button id="'
														)
														.concat(this.options.prefix, 'splash-button">')
														.concat(t, '</button>\n                      <div class="')
														.concat(
															this.options.prefix,
															'loader"></div>    \n                    </div> \n                  </div>\n\n                  <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-game-title">                    \n                    <p>'
														)
														.concat(
															e.title,
															'</p>\n                  </div>\n                  \n                  <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-game-description">\n                    <p>'
														)
														.concat(
															e.description,
															'</p>                    \n                  </div>\n\n                </div>\n\n                <div class="'
														)
														.concat(this.options.prefix, 'splash-game-consent" style=')
														.concat(
															n,
															'>\n                  <p>\n                    We may show personalized ads provided by our partners, and our \n                    services can not be used by children under 16 years old without the \n                    consent of their legal guardian. By clicking "PLAY", you consent \n                    to transmit your data to our partners for advertising purposes and \n                    declare that you are 16 years old or have the permission of your \n                    legal guardian. You can review our terms\n                    <a href="https://azerion.com/business/privacy.html" target="_blank">here</a>.       \n                  </p>\n                </div>                                          \n              </div>              \n              <div id="'
														)
														.concat(this.options.prefix, 'splash-slot-right" class="')
														.concat(
															this.options.prefix,
															'splash-right"></div>              \n            </div>            \n            <div id="'
														)
														.concat(this.options.prefix, 'splash-slot-bottom" class="')
														.concat(
															this.options.prefix,
															'splash-bottom">\n            \x3c!--<div style="width:600px;background-color:red;height:90px;"></div>--\x3e\n            </div>            \n          </div>\n      '
														);
												}
											},
											{
												key: '_insertHtml',
												value: function (t) {
													var e = document.createElement('div');
													(e.innerHTML = t),
														(e.id = ''.concat(this.options.prefix, 'splash')),
														(e.style['z-index'] = Fr),
														(e.style.position = 'fixed'),
														(e.style.width = '100%'),
														(e.style.height = '100%'),
														(e.style.top = '0'),
														(e.style.left = '0');
													var n = this._getExtContainer();
													return (
														n
															? ((n.style.display = 'block'), n.insertBefore(e, n.firstChild))
															: (t =
																	document.body ||
																	document.getElementsByTagName('body')[0]).insertBefore(
																	e,
																	t.firstChild
															  ),
														{ container: e, extContainer: n }
													);
												}
											},
											{
												key: '_getBackground',
												value: function (t, e) {
													var n = e.splash.background || t.background;
													if ('carbon' === n) {
														t = e.splash['background-color'] || '#131313';
														return '\n      background:\n      linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,\n      linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,\n      linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,\n      linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,\n      linear-gradient(90deg, #1b1b1b 10px, transparent 10px),\n      linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);\n      background-color:'.concat(
															t,
															';\n      background-size: 20px 20px;        \n      '
														);
													}
													if ('rainbow' === n) {
														var i = e.splash['background-color'] || '#840b2a';
														return '\n      background:\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,\n      linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);\n      background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;\n      background-color:'.concat(
															i,
															';    \n      '
														);
													}
													if ('linedpaper' === n) {
														i = e.splash['background-color'] || '#fff';
														return '\n      background-color:'.concat(
															i,
															';\n      background-image:\n      linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),\n      linear-gradient(#eee .1em, transparent .1em);\n      background-size: 100% 1.2em;     \n      '
														);
													}
													if ('cicadastripes' === n) {
														n = e.splash['background-color'] || '#026873';
														return '\n      background-color:'.concat(
															n,
															';\n      background-image: linear-gradient(90deg, rgba(255,255,255,.07) 50%, transparent 50%),\n      linear-gradient(90deg, rgba(255,255,255,.13) 50%, transparent 50%),\n      linear-gradient(90deg, transparent 50%, rgba(255,255,255,.17) 50%),\n      linear-gradient(90deg, transparent 50%, rgba(255,255,255,.19) 50%);\n      background-size: 13px, 29px, 37px, 53px; \n      '
														);
													}
													e = e.splash['background-color'] || '#282828';
													return '\n     background:\n     radial-gradient(black 10%, transparent 10%) 0 0,\n     radial-gradient(black 10%, transparent 10%) 8px 8px,\n     radial-gradient(rgba(255,255,255,.1) 10%, transparent 10%) 0 1px,\n     radial-gradient(rgba(255,255,255,.1) 10%, transparent 10%) 8px 9px;\n     background-color:'.concat(
														e,
														';\n     background-size:16px 16px;\n     '
													);
												}
											},
											{
												key: '_init_slots',
												value: function () {
													var t = document.querySelector(
														'.'.concat(this.options.prefix, 'splash-game-description')
													);
													!this.gameData.description && t && (t.style.display = 'none');
													var e = document.getElementById(
															''.concat(this.options.prefix, 'splash-slot-top')
														),
														n = document.getElementById(
															''.concat(this.options.prefix, 'splash-slot-bottom')
														),
														i = document.getElementById(
															''.concat(this.options.prefix, 'splash-slot-left')
														),
														o = document.getElementById(
															''.concat(this.options.prefix, 'splash-slot-right')
														),
														r = this.gameData.dAds,
														a = r.enabled,
														s = a && r.top && r.top.enabled,
														c = a && r.bottom && r.bottom.enabled,
														t = a && r.left && r.left.enabled,
														r = a && r.right && r.right.enabled;
													e && (s ? this._observe_visibility(e) : (e.style.display = 'none')),
														n && (c ? this._observe_visibility(n) : (n.style.display = 'none')),
														i && (t ? this._observe_visibility(i) : (i.style.display = 'none')),
														o && (r ? this._observe_visibility(o) : (o.style.display = 'none')),
														(this._slots = { top: e, bottom: n, left: i, right: o });
												}
											},
											{
												key: '_observe_visibility',
												value: function (t) {
													var e,
														n = this;
													IntersectionObserver &&
														((e = { root: t.parent, rootMargin: '0px', threshold: 0.5 }),
														new IntersectionObserver(function (t, e) {
															t.forEach(function (t) {
																n.emit('slotVisibilityChanged', {
																	id: t.target.id,
																	visible: t.isIntersecting
																});
															});
														}, e).observe(t));
												}
											},
											{
												key: '_on_slot_visibility_changed',
												value: function (t) {
													var e = t.id,
														n = t.visible,
														i = this.gameData.dAds,
														t = e.split('-'),
														t = t[t.length - 1];
													if (i && i.enabled)
														switch (t) {
															case 'left':
																i.left && this._put_html(e, n, i.left);
																break;
															case 'right':
																i.right && this._put_html(e, n, i.right);
																break;
															case 'top':
																i.top && this._put_html(e, n, i.top);
																break;
															case 'bottom':
																i.bottom && this._put_html(e, n, i.bottom);
														}
												}
											},
											{
												key: '_put_html',
												value: function (t, e, n) {
													t = document.getElementById(t);
													if (t && n.enabled && n.script)
														if (e) {
															var i,
																o = document.createElement('script');
															for (i in n.script) o.setAttribute(i, n.script[i]);
															t.appendChild(o);
														} else t.innerHTML = '';
												}
											},
											{
												key: '_create_palette',
												value: function () {
													var t = Math.round(360 * Math.random()),
														e = Math.round(15 * Math.random());
													return {
														hue: t,
														saturation: e,
														primary: 'hsl('.concat(t, ',').concat(e, '%,50%)'),
														primary_dark: 'hsl('.concat(t, ',').concat(e, '%,35%)'),
														primary_light: 'hsl('.concat(t, ',').concat(e, '%,55%)'),
														primary_text: 'hsl('.concat(t, ',').concat(e, '%,90%)'),
														primary_paper: 'hsl('.concat(t, ',').concat(e, '%,40%)')
													};
												}
											},
											{
												key: '_create_abstract',
												value: function () {
													var s = window.innerWidth,
														c = window.innerHeight,
														t = this._palette;
													t.hue, t.saturation;
													for (
														var l = t.primary,
															d = t.primary_light,
															u = 'background-color:'.concat(this._palette.primary_dark),
															p = [],
															h = [],
															e = 0;
														e < 12;
														e++
													)
														(p[e] = Math.round(Math.random() * s)),
															(h[e] = Math.round(Math.random() * c));
													var f = document.getElementById(
														''.concat(this.options.prefix, 'splash-abstract')
													);
													function i() {
														var t = [
																[
																	'M',
																	p[0] / 10,
																	c,
																	'L',
																	p[0] / 8,
																	c,
																	'C',
																	p[1] / 3,
																	h[0] / 2,
																	(2 * s) / 3,
																	p[2],
																	s,
																	p[3],
																	'L',
																	s,
																	c,
																	'Z'
																],
																[
																	'M',
																	0,
																	h[1],
																	'C',
																	p[4] / 2,
																	h[2],
																	(2 * s) / 3,
																	h[3],
																	s,
																	h[4] / 10,
																	'L',
																	s,
																	0,
																	'L',
																	0,
																	0,
																	'Z'
																]
															],
															e = t[0].join(' '),
															n = t[1].join(' '),
															i = f,
															o = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
														o.setAttribute('width', s),
															o.setAttribute('height', c),
															o.setAttribute('style', u),
															o.setAttribute('id', 'mysvg');
														for (var r = 0; r < s / 5; r++) {
															var a = document.createElementNS(
																'http://www.w3.org/2000/svg',
																'line'
															);
															a.setAttribute('x1', 5 * r),
																a.setAttribute('y1', 0),
																a.setAttribute('x2', 5 * r),
																a.setAttribute('y2', c),
																a.setAttribute(
																	'style',
																	'stroke:rgba(0,0,0, 0.05);stroke-width:1);'
																);
														}
														t = document.createElementNS('http://www.w3.org/2000/svg', 'path');
														t.setAttributeNS(null, 'd', e),
															t.setAttributeNS(null, 'stroke', 'rgba(0,0,0,0.05)'),
															t.setAttributeNS(null, 'stroke-width', 1),
															t.setAttributeNS(null, 'opacity', 1),
															t.setAttributeNS(null, 'fill', l),
															o.appendChild(t);
														t = document.createElementNS('http://www.w3.org/2000/svg', 'path');
														t.setAttributeNS(null, 'd', n),
															t.setAttributeNS(null, 'stroke', 'rgba(0,0,0,0.05)'),
															t.setAttributeNS(null, 'stroke-width', 1),
															t.setAttributeNS(null, 'opacity', 1),
															t.setAttributeNS(null, 'fill', d),
															o.appendChild(t),
															i.appendChild(o);
													}
													function n() {
														for (
															var t = window.innerWidth, e = window.innerHeight, n = 0;
															n < 12;
															n++
														)
															(p[n] = Math.round(Math.random() * t)),
																(h[n] = Math.round(Math.random() * e));
														(f.innerHTML = ''), i();
													}
													window.addEventListener('resize', n),
														window.addEventListener('orientationchange', n),
														i();
												}
											}
										]),
										r
									);
								})(),
								$a = (function () {
									Ra(r, qa);
									var n,
										i,
										o =
											((n = r),
											(i = (function () {
												if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
												if (Reflect.construct.sham) return !1;
												if ('function' == typeof Proxy) return !0;
												try {
													return (
														Date.prototype.toString.call(
															Reflect.construct(Date, [], function () {})
														),
														!0
													);
												} catch (t) {
													return !1;
												}
											})()),
											function () {
												var t,
													e = La(n);
												return (
													(e = i
														? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
														: e.apply(this, arguments)),
													Ta(this, e)
												);
											});
									function r(t, e) {
										return xo(this, r), (e = o.call(this, t, e))._init(), e;
									}
									return (
										ko(r, [
											{
												key: '_init',
												value: function () {
													var t = this._css(this.options, this.gameData);
													this._insertCss(t);
													var e = this._html(this.options, this.gameData),
														t = this._insertHtml(e),
														e = t.container,
														t = t.extContainer;
													(this._root = e),
														(this._container = e),
														(this._extContainer = t),
														this._registerEvents();
												}
											},
											{
												key: '_css',
												value: function (t, e) {
													e = this._getThumbnail(t, e);
													return '\n            body {\n                position: inherit;\n            }\n            .'
														.concat(
															this.options.prefix,
															'splash-background-container {\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #000;\n                overflow: hidden;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-background-image {\n                box-sizing: border-box;\n                position: absolute;\n                top: -25%;\n                left: -25%;\n                width: 150%;\n                height: 150%;\n                background-image: url('
														)
														.concat(
															e,
															');\n                background-size: cover;\n                filter: blur(50px) brightness(1.5);\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-container {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                position: absolute;\n                bottom: 0;\n                width: 100%;\n                height: 100%;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                flex: 1;\n                align-self: center;\n                justify-content: center;\n                padding: 20px;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div {\n                text-align: center;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button {\n                border: 0;\n                margin: auto;\n                padding: 10px 22px;\n                border-radius: 5px;\n                border: 3px solid white;\n                background: linear-gradient(0deg, #dddddd, #ffffff);\n                color: #222;\n                text-transform: uppercase;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                font-size: 18px;\n                cursor: pointer;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button:hover {\n                background: linear-gradient(0deg, #ffffff, #dddddd);\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button:active {\n                box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n                background: linear-gradient(0deg, #ffffff, #f5f5f5);\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > div {\n                position: relative;\n                width: 150px;\n                height: 150px;\n                margin: auto auto 20px;\n                border-radius: 100%;\n                overflow: hidden;\n                border: 3px solid rgba(255, 255, 255, 1);\n                background-color: #000;\n                box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);\n                background-image: url('
														)
														.concat(
															e,
															');\n                background-position: center;\n                background-size: cover;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > div > img {\n                width: 100%;\n                height: 100%;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-bottom {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                align-self: center;\n                justify-content: center;\n                width: 100%;\n                padding: 0 0 20px;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(this.options.prefix, 'splash-consent,\n            .')
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-title {\n                box-sizing: border-box;\n                width: 100%;\n                padding: 20px;\n                background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5) 50%, transparent);\n                color: #fff;\n                text-align: left;\n                font-size: 12px;\n                font-family: Arial;\n                font-weight: normal;\n                text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);\n                line-height: 150%;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-title {\n                padding: 15px 0;\n                text-align: center;\n                font-size: 18px;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                line-height: 100%;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-consent a {\n                color: #fff;\n            }\n        '
														);
												}
											},
											{
												key: '_html',
												value: function (t, e) {
													var n = t.isConsentDomain,
														t = e.loader.lang ? Ka[e.loader.lang] : 'PLAY';
													return n
														? '\n                <div class="'
																.concat(
																	this.options.prefix,
																	'splash-background-container">\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-background-image"></div>\n                </div>\n                <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-container">\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-top">\n                        <div>\n                            <div></div>\n                            <button id="'
																)
																.concat(this.options.prefix, 'splash-button">')
																.concat(
																	t,
																	'</button>\n                        </div>   \n                    </div>\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-bottom">\n                        <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-consent">\n                            We may show personalized ads provided by our partners, and our \n                            services can not be used by children under 16 years old without the \n                            consent of their legal guardian. By clicking "PLAY GAME", you consent \n                            to transmit your data to our partners for advertising purposes and \n                            declare that you are 16 years old or have the permission of your \n                            legal guardian. You can review our terms\n                            <a href="https://azerion.com/business/privacy.html" target="_blank">here</a>.\n                        </div>\n                    </div>\n                </div>\n            '
																)
														: '\n                <div class="'
																.concat(
																	this.options.prefix,
																	'splash-background-container">\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-background-image"></div>\n                </div>\n                <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-container">\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-top">\n                        <div>\n                            <div></div>\n                            <button id="'
																)
																.concat(this.options.prefix, 'splash-button">')
																.concat(
																	t,
																	'</button>\n                        </div>   \n                    </div>\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-bottom">\n                        <div class="'
																)
																.concat(this.options.prefix, 'splash-title">')
																.concat(
																	e.title,
																	'</div>\n                    </div>\n                </div>\n            '
																);
												}
											},
											{
												key: '_insertHtml',
												value: function (t) {
													var e = document.createElement('div');
													(e.innerHTML = t),
														(e.id = ''.concat(this.options.prefix, 'splash')),
														(e.style['z-index'] = Fr),
														(e.style.position = 'absolute'),
														(e.style.width = '100%'),
														(e.style.height = '100%'),
														(e.style.top = '0'),
														(e.style.left = '0');
													var n = this._getExtContainer();
													return (
														n
															? ((n.style.display = 'block'), n.insertBefore(e, n.firstChild))
															: (t =
																	document.body ||
																	document.getElementsByTagName('body')[0]).insertBefore(
																	e,
																	t.firstChild
															  ),
														{ container: e, extContainer: n }
													);
												}
											}
										]),
										r
									);
								})(),
								Ya = (function () {
									Ra(r, qa);
									var n,
										i,
										o =
											((n = r),
											(i = (function () {
												if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
												if (Reflect.construct.sham) return !1;
												if ('function' == typeof Proxy) return !0;
												try {
													return (
														Date.prototype.toString.call(
															Reflect.construct(Date, [], function () {})
														),
														!0
													);
												} catch (t) {
													return !1;
												}
											})()),
											function () {
												var t,
													e = La(n);
												return (
													(e = i
														? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
														: e.apply(this, arguments)),
													Ta(this, e)
												);
											});
									function r(t, e) {
										return xo(this, r), (e = o.call(this, t, e))._init(), e;
									}
									return (
										ko(r, [
											{
												key: '_init',
												value: function () {
													var t = this._css(this.options, this.gameData);
													this._insertCss(t);
													var e = this._html(this.options, this.gameData),
														t = this._insertHtml(e),
														e = t.container,
														t = t.extContainer;
													(this._root = e),
														(this._container = e),
														(this._extContainer = t),
														this._registerEvents();
													var n = document.querySelector('.'.concat(this.options.prefix, 'loader')),
														i = document.getElementById(
															''.concat(this.options.prefix, 'splash-button')
														),
														o = document.getElementById(
															''.concat(this.options.prefix, 'walkthrough-button')
														);
													o.addEventListener('click', function () {
														window.parent.postMessage('scrollToWalkthrough', '*');
													});
													var r = document.getElementById('categoryMascot');
													this.on('playClick', function () {
														(n.style.display = 'block'),
															(i.style.display = 'none'),
															(o.style.display = 'none'),
															(r.style.display = 'none');
													});
												}
											},
											{
												key: '_css',
												value: function (t, e) {
													var t = this._getThumbnail(t, e),
														n = 'https://kizicdn.com/assets/games/mascots/kizi-maskot-',
														i = '',
														o = '@2x';
													switch (e.category) {
														case 'Girls':
															i = ''.concat(n, 'girls').concat(o, '.png');
															break;
														case 'Hypercasual':
															i = ''.concat(n, 'strategy').concat(o, '.png');
															break;
														case 'Puzzle':
															i = ''.concat(n, 'puzzle').concat(o, '.png');
															break;
														case 'Baby':
															i = ''.concat(n, 'baby').concat(o, '.png');
															break;
														case 'Soccer':
															i = ''.concat(n, 'soccer').concat(o, '.png');
															break;
														case 'Cooking':
															i = ''.concat(n, 'cooking').concat(o, '.png');
															break;
														case 'Racing':
															i = ''.concat(n, 'race').concat(o, '.png');
															break;
														case 'Action':
															i = ''.concat(n, 'action').concat(o, '.png');
															break;
														default:
															i = ''.concat(n, 'default').concat(o, '.png');
													}
													return '\n    \n            body {\n                position: inherit;\n                background: none;\n                border-radius: 40px 40px 0px 0px;\n                overflow: hidden;\n            }\n\n            .'
														.concat(
															this.options.prefix,
															'splash-background-container {\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                overflow:hidden;\n                border-radius: 40px 40px 0px 0px;\n                background: rgb(0,81,168);\n                background: -moz-linear-gradient(14deg, rgba(0,81,168,1) 0%, rgba(0,118,248,1) 100%);\n                background: -webkit-linear-gradient(14deg, rgba(0,81,168,1) 0%, rgba(0,118,248,1) 100%);\n                background: linear-gradient(14deg, rgba(0,81,168,1) 0%, rgba(0,118,248,1) 100%);\n                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0051a8",endColorstr="#0076f8",GradientType=1);                \n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'sdk-version{\n                position: absolute;\n                right: 0px;\n                bottom: 5px;\n                font-size: 8px;\n                padding-top: 6px;\n                padding-right: 6px;\n                color: #49a1ff;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-container {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left:0;\n                width: 100%;\n                height: 100%;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-container .mascot {\n                position: relative;\n                width: 40%;\n                height: 250px;\n                border-radius: 20px;\n                overflow: hidden;\n                background-image: url('
														)
														.concat(
															i,
															');\n                background-position: bottom;\n                background-size: contain;\n                background-repeat: no-repeat;\n                bottom: 0;\n                left: 0;\n                position: absolute;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                flex: 1;\n                align-self: center;\n                justify-content: center;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-bottom {\n              display: flex;\n              flex-flow: column;\n              box-sizing: border-box;\n              align-self: center;\n              justify-content: center;\n              width: 100%;\n              padding-left:6px;\n              padding-right:6px;\n              padding-bottom:6px;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div {\n                text-align: center;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button {\n                margin: auto;\n                padding: 8px;\n                border-radius: 30px;\n                border: 0;\n                background-color: #59B21F;\n                width: 210px;\n                height: 48px;\n                box-shadow: 0px 5px 0 #3E8E0D;\n                position: relative;\n                overflow: hidden;\n                outline: none;\n                cursor: pointer;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															"splash-top > div > button .text {\n                color: white;\n                text-transform: uppercase;\n                font-family: 'Oswald', sans-serif;\n                font-size: 17px;\n                position: absolute;\n                z-index: 1;\n                text-align: center;\n                position: absolute;\n                z-index: 1;\n                left: 0;\n                top: 12px;\n                width: 100%;\n            }\n\n            ."
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button.walkthrough {\n                background-color: #EA2E40;\n                box-shadow: 0px 5px 0 #AD0B1A;\n                margin-top: 15px;\n                padding-left: 45px;\n                height: 40px;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button.walkthrough .text{\n                top: 8px;\n            }\n            \n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button.walkthrough .icon {\n                width: 34px;\n                height: 34px;\n                top: 3px;\n                left: 20px;\n                z-index: 9;\n                position: absolute;\n            }\n            \n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button.walkthrough .icon svg {\n                width: 100%;\n                height: 100%;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button.walkthrough .text {\n                text-indent: 33px;\n                text-transform: capitalize;\n            }\n            \n            .bubbles {\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                left: 0;\n                top: 0;\n            }\n\n            .green-bubbles .bubble:before,\n            .green-bubbles .bubble:after {\n                position: absolute;\n                background: #449C0C;\n                content: " ";\n                border-radius: 50%;\n                display: block;\n            }\n\n            .green-bubbles .left {\n                width: 1px;\n                height: 1px;\n                position: absolute;\n                display: block;\n            }\n\n            .green-bubbles .left:before {\n                width: 30px;\n                height: 30px;\n                left: 0px;\n                top: -17px;\n            }\n\n            .green-bubbles .left:after {\n                position: absolute;\n                width: 50px;\n                height: 50px;\n                background: #449C0C;\n                content: " ";\n                left: 10px;\n                top: 34px;\n                border-radius: 50%;\n            }\n\n            .green-bubbles .right:after {\n                position: absolute;\n                width: 56px;\n                right: 0px;\n                top: 17px;\n                height: 55px;\n                background: #449C0C;\n                content: " ";\n                border-radius: 50%;\n            }\n\n            .red-bubbles .bubble:before,\n            .red-bubbles .bubble:after {\n                position: absolute;\n                background: #FF4859;\n                content: " ";\n                border-radius: 50%;\n            }\n\n            .red-bubbles .left {\n                width: 1px;\n                height: 1px;\n                display: block;\n                position: absolute;\n            }\n\n            .red-bubbles .left:before {\n                width: 30px;\n                height: 30px;\n                left: -10px;\n                top: -10px;\n            }\n\n            .red-bubbles .left:after {\n                width: 20px;\n                height: 20px;\n                left: 60px;\n                top: 37px;\n            }\n\n            .red-bubbles .right:after {\n                width: 36px;\n                height: 50px;\n                right: 0px;\n                top: -33px;\n            }\n\n            \n            \n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div {\n                display: flex;\n                flex-direction: column;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button:hover {\n                background: #3E8E0C;\n                box-shadow: 0px 5px 0 #347909;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button:active {\n                background: #337b06;\n                box-shadow: 0px 5px 0 #2b7100;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button:hover .green-bubbles .left:after,\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button:hover .green-bubbles .left:before,\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button:hover .green-bubbles .right:after {\n                background: #52b513;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button.walkthrough:hover {\n                background: #c7192a;\n                box-shadow: 0px 5px 0 #af1623;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button.walkthrough:active {\n                background: #ad0d1d;\n                box-shadow: 0px 5px 0 #980e1a;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button.walkthrough:hover .red-bubbles .left:after,\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button.walkthrough:hover .red-bubbles .left:before,\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button.walkthrough:hover .red-bubbles .right:after {\n                background: #fb5b6a;\n            }\n\n              .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > div.game-image {\n                position: relative;\n                width: 120px;\n                height: 120px;\n                margin: auto auto 20px;\n                border-radius: 20px;\n                overflow: hidden;\n                background-image: url('
														)
														.concat(
															t,
															');\n                background-position: center;\n                background-size: cover;\n            }\n\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-consent {\n                box-sizing: border-box;\n                width: 100%;\n                color: #3991ef;\n                text-align: justify;\n                position: absolute;\n                font-size: 12px;\n                font-family: Arial;\n                font-weight: normal;\n                background: rgba(0, 56, 111, 0.78);\n                line-height: 150%;\n                padding: 10px 30px 10px;\n                left: 0;\n                bottom: 0;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-top > .game > .')
														.concat(
															this.options.prefix,
															"splash-title {\n                box-sizing: border-box;\n                width: 100%;\n                color: #fff;\n                text-align: justify;\n                font-weight: normal;\n                text-align: center;\n                line-height: 150%;\n                font-family: 'Oswald', sans-serif;\n                font-size: 20px;\n                text-align: center;\n                padding-bottom: 20px;\n                cursor: default;\n                text-transform: uppercase;\n            }\n\n            ."
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-consent a {\n                color: #60bdea !important;\n            }\n\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(this.options.prefix, 'splash-consent a:hover,\n            .')
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-consent a:active {\n                color: #9cdfff !important;\n            }\n            \n            .'
														)
														.concat(this.options.prefix, 'loader,\n            .')
														.concat(
															this.options.prefix,
															'loader:after {\n              border-radius: 50%;\n              width: 1.5em;\n              height: 1.5em;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'loader {\n              margin: 0px auto;\n              font-size: 10px;\n              position: relative;\n              text-indent: -9999em;\n              border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n              border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n              border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n              border-left: 1.1em solid #ffffff;\n              -webkit-transform: translateZ(0);\n              -ms-transform: translateZ(0);\n              transform: translateZ(0);\n              -webkit-animation: '
														)
														.concat(
															this.options.prefix,
															'load8 1.1s infinite linear;\n              animation: '
														)
														.concat(
															this.options.prefix,
															'load8 1.1s infinite linear;\n              display:none;\n            }\n            @-webkit-keyframes '
														)
														.concat(
															this.options.prefix,
															'load8 {\n              0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n              }\n              100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n              }\n            }\n            @keyframes '
														)
														.concat(
															this.options.prefix,
															'load8 {\n              0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n              }\n              100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n              }\n            }          \n'
														);
												}
											},
											{
												key: '_html',
												value: function (t, e) {
													t = t.isConsentDomain ? 'display:block' : 'display:none';
													return "<style>\n            @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');\n            </style>\n                <div class=\""
														.concat(
															this.options.prefix,
															'splash-background-container">\n                  <div class="'
														)
														.concat(this.options.prefix, 'sdk-version">')
														.concat(this.options.version, '</div>\n                  <div class="')
														.concat(
															this.options.prefix,
															'splash-container">\n                    <div id="categoryMascot" class="mascot"></div>\n                      <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-top">\n                          <div class="game">\n                            <div class="'
														)
														.concat(this.options.prefix, 'splash-title">')
														.concat(
															e.title,
															'</div>\n                            <div class="game-image"></div>\n                            <button id="'
														)
														.concat(
															this.options.prefix,
															'splash-button">\n                                    <span class="text">PLAY NOW</span>\n                                    <span class="bubbles green-bubbles">\n                                        <i class="left bubble"></i>\n                                        <i class="right bubble"></i>\n                                    </span>\n                                </button>\n                                <button class="walkthrough" id="'
														)
														.concat(
															this.options.prefix,
															'walkthrough-button">\n                                    <span class="icon">'
														)
														.concat(
															'\n    <?xml version="1.0" encoding="utf-8"?>\n        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41 41" style="enable-background:new 0 0 41 41;" xml:space="preserve">\n            <g>\n                <rect x="-0.2" y="0.3" style="opacity:0;fill:#FFFFFF;" width="41" height="41"/>\n                <g>\n\t\t            <g id="Group_7" transform="translate(0.527 0.527)">\n                        <path id="Path_2724" style="fill:#FF7680;" d="M35.8,16.1c-1.5-5.8-6-10.3-11.8-11.8h-8.3c-5.8,1.5-10.3,6-11.8,11.8v8.3\n                            c1.5,5.8,6,10.3,11.8,11.8H24c5.8-1.5,10.3-6,11.8-11.8V16.1z M19.8,31.8l-3.4-2.5c-2.6-1-4.6-3-5.6-5.6l-2.6-3.4l2.6-3.4\n                            c1-2.6,3-4.6,5.6-5.6l3.4-2.6l3.4,2.6c2.6,1,4.6,3,5.6,5.6l2.6,3.4l-2.6,3.4c-1,2.6-3,4.7-5.6,5.6L19.8,31.8z"/>\n                    </g>\n                    <path id="Path_2725" style="fill:#F44854;" d="M36.3,25c-1.5,5.8-6,10.3-11.8,11.8h-2c8.8-2.3,14.1-11.2,11.8-20.1\n                        c-1.5-5.8-6-10.3-11.8-11.8h2c5.8,1.5,10.3,6,11.8,11.8L36.3,25z"/>\n                    <g id="Group_8" transform="translate(12.308 0)">\n                        <path id="Path_2726" style="fill:#EEF7FF;" d="M12.2,4.8l-0.1,0.6l-0.7,6.3c-2.2-0.8-4.6-0.8-6.7,0L3.9,4.8c1-0.3,2-0.4,3.1-0.5\n                            c0.4,0,0.7,0,1.1,0C9.4,4.3,10.8,4.5,12.2,4.8L12.2,4.8z"/>\n                    </g>\n                    <g id="Group_9" transform="translate(12.308 25.469)">\n                        <path id="Path_2727" style="fill:#EEF7FF;" d="M12.2,11.3c-1.4,0.4-2.8,0.5-4.2,0.5c-0.4,0-0.7,0-1.1,0c-1-0.1-2.1-0.2-3.1-0.5\n                            l0.8-6.9c2.2,0.8,4.6,0.8,6.7,0l0.7,6.3L12.2,11.3z"/>\n                    </g>\n                    <g id="Group_10" transform="translate(25.469 12.308)">\n                        <path id="Path_2728" style="fill:#EEF7FF;" d="M11.3,8.5c0,1.4-0.2,2.8-0.5,4.2l-1.9-0.2l-5.1-0.6c0.8-2.2,0.8-4.6,0-6.7l5.1-0.6\n                            l1.9-0.2C11.2,5.7,11.3,7.1,11.3,8.5z"/>\n                    </g>\n                    <g id="Group_11" transform="translate(0 12.308)">\n                        <path id="Path_2729" style="fill:#EEF7FF;" d="M10.7,8.5c0,1.2,0.2,2.3,0.6,3.4l-6.9,0.8c-0.7-2.7-0.7-5.6,0-8.3l6.9,0.8\n                            C10.9,6.2,10.7,7.3,10.7,8.5z"/>\n                    </g>\n                    <g id="Group_12" transform="translate(15.403 0)">\n                        <path id="Path_2730" style="fill:#D8E5EF;" d="M9,5.5c-1.6-0.6-3.4-1-5.2-1.1c0.4,0,0.7,0,1.1,0c1.4,0,2.8,0.2,4.2,0.5L9,5.5z"/>\n                        <path id="Path_2731" style="fill:#D8E5EF;" d="M9,36.1l0.1,0.6c-1.4,0.4-2.8,0.5-4.2,0.5c-0.4,0-0.7,0-1.1,0\n                            C5.6,37.1,7.4,36.8,9,36.1z"/>\n                        <path id="Path_2732" style="fill:#D8E5EF;" d="M21.4,20.8c0,1.4-0.2,2.8-0.5,4.2L19,24.7c0.6-2.6,0.6-5.3,0-7.9l1.9-0.2\n                            C21.2,18,21.4,19.4,21.4,20.8z"/>\n                    </g>\n                </g>\n            </g>\n        </svg>',
															'</span>\n                                    <span class="text">Watch Walkthrough</span>\n                                    <span class="bubbles red-bubbles">\n                                        <i class="left bubble"></i>\n                                        <i class="right bubble"></i>\n                                    </span>\n                                </button>\n\n                            <div class="'
														)
														.concat(
															this.options.prefix,
															'loader">Loading...</div>\n                          </div>\n                      </div>\n                        <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-bottom">\n                            <div class="'
														)
														.concat(this.options.prefix, 'splash-consent" style=')
														.concat(
															t,
															'>\n                            We may show personalized ads provided by our partners, and our \n                            services can not be used by children under 16 years old without the \n                            consent of their legal guardian. By clicking "PLAY", you consent \n                            to transmit your data to our partners for advertising purposes and \n                            declare that you are 16 years old or have the permission of your \n                            legal guardian. You can review our terms\n                            <a href="https://azerion.com/business/privacy.html" target="_blank">here</a>.\n                            </div>\n                        </div>\n                     \n                  </div>       \n                </div>\n            '
														);
												}
											},
											{
												key: '_insertHtml',
												value: function (t) {
													var e = document.createElement('div');
													(e.innerHTML = t),
														(e.id = ''.concat(this.options.prefix, 'splash')),
														(e.style['z-index'] = Fr),
														(e.style.position = 'fixed'),
														(e.style.width = '100%'),
														(e.style.height = '100%'),
														(e.style.top = '0'),
														(e.style.left = '0');
													var n = this._getExtContainer();
													return (
														n
															? ((n.style.display = 'block'), n.insertBefore(e, n.firstChild))
															: (t =
																	document.body ||
																	document.getElementsByTagName('body')[0]).insertBefore(
																	e,
																	t.firstChild
															  ),
														{ container: e, extContainer: n }
													);
												}
											}
										]),
										r
									);
								})(),
								Za = (function () {
									Ra(r, qa);
									var n,
										i,
										o =
											((n = r),
											(i = (function () {
												if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
												if (Reflect.construct.sham) return !1;
												if ('function' == typeof Proxy) return !0;
												try {
													return (
														Date.prototype.toString.call(
															Reflect.construct(Date, [], function () {})
														),
														!0
													);
												} catch (t) {
													return !1;
												}
											})()),
											function () {
												var t,
													e = La(n);
												return (
													(e = i
														? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
														: e.apply(this, arguments)),
													Ta(this, e)
												);
											});
									function r(t, e, n) {
										return xo(this, r), ((e = o.call(this, t, e))._parentDomain = n), e._init(), e;
									}
									return (
										ko(r, [
											{
												key: '_init',
												value: function () {
													var t = this._css(this.options, this.gameData);
													this._insertCss(t);
													var e = this._html(this.options, this.gameData),
														t = this._insertHtml(e),
														e = t.container,
														t = t.extContainer;
													(this._root = e),
														(this._container = e),
														(this._extContainer = t),
														this._registerEvents();
													var n = document.querySelector('.'.concat(this.options.prefix, 'loader')),
														i = document.getElementById(
															''.concat(this.options.prefix, 'splash-button')
														);
													this.on('playClick', function () {
														(n.style.display = 'block'), (i.style.display = 'none');
													});
												}
											},
											{
												key: '_css',
												value: function (t, e) {
													e = this._getThumbnail(t, e);
													return '\n            '
														.concat(
															this._customCss(),
															'\n            body {\n                position: inherit;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-background-container {\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #000;\n                overflow: hidden;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-background-image {\n                box-sizing: border-box;\n                position: absolute;\n                top: -25%;\n                left: -25%;\n                width: 150%;\n                height: 150%;\n                background-image: url('
														)
														.concat(
															e,
															');\n                background-size: cover;\n                filter: blur(50px) brightness(1.5);\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-container {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                position: absolute;\n                bottom: 0;\n                width: 100%;\n                height: 100%;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                flex: 1;\n                align-self: center;\n                justify-content: center;\n                padding: 20px;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div {\n                text-align: center;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															"splash-top > div > button {\n                position: relative;\n                min-width: 180px;\n                min-height: 45px;\n                line-height: 45px;\n                // margin: 20px auto 0;\n                border: 0;\n                border-radius: 25px;\n                border-bottom: 5px solid grey;\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                text-align: center;\n                text-transform: uppercase;\n                text-shadow: 1px 1px 1px rgba(0, 0, 0, .004);\n                font-family: 'Roboto Condensed', 'Helvetica Neue', 'Arial', 'sans-serif';\n                font-size: 16px;\n                font-weight: 400;\n                cursor: pointer;\n                box-shadow: inset 0 -1px 1px hsla(0, 0%, 100%, .1), inset 0 1px 1px hsla(0, 0%, 100%, .2);\n                will-change: transform;\n                transition: transform .15s linear;\n            }\n            ."
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button:focus {\n                outline: none;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button:active  {\n                box-shadow: 0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .13);\n                transform: translateY(-5px);\n            }\n            .'
														)
														.concat(this.options.prefix, 'loader,\n            .')
														.concat(
															this.options.prefix,
															'loader:after {\n              border-radius: 50%;\n              width: 1.5em;\n              height: 1.5em;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'loader {\n                margin: 0px auto;\n                font-size: 10px;\n                position: relative;\n                text-indent: -9999em;\n                border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n                border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n                border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n                border-left: 1.1em solid #ffffff;\n                -webkit-transform: translateZ(0);\n                -ms-transform: translateZ(0);\n                transform: translateZ(0);\n                -webkit-animation: '
														)
														.concat(
															this.options.prefix,
															'load8 1.1s infinite linear;\n                animation: '
														)
														.concat(
															this.options.prefix,
															'load8 1.1s infinite linear;\n                display:none;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > div:first-child {\n                position: relative;\n                width: 150px;\n                height: 150px;\n                margin: auto auto 20px;\n                border-radius: 10px;\n                overflow: hidden;\n                border: 2px solid rgba(255, 255, 255, 0.8);\n                box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);\n                background-image: url('
														)
														.concat(
															e,
															');\n                background-position: center;\n                background-size: cover;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > div > img {\n                width: 100%;\n                height: 100%;\n            }\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-bottom {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                align-self: center;\n                justify-content: center;\n                width: 100%;\n                padding: 0 0 20px;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(this.options.prefix, 'splash-consent,\n            .')
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-title {\n                box-sizing: border-box;\n                width: 100%;\n                padding: 20px;\n                background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5) 50%, transparent);\n                color: #fff;\n                text-align: left;\n                font-size: 12px;\n                font-family: Arial;\n                font-weight: normal;\n                text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);\n                line-height: 150%;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-title {\n                padding: 15px 0;\n                text-align: center;\n                font-size: 18px;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                line-height: 100%;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-consent a {\n                color: #fff;\n            }\n            @-webkit-keyframes '
														)
														.concat(
															this.options.prefix,
															'load8 {\n                0% {\n                  -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n                }\n                100% {\n                  -webkit-transform: rotate(360deg);\n                  transform: rotate(360deg);\n                }\n              }\n              @keyframes '
														)
														.concat(
															this.options.prefix,
															'load8 {\n                0% {\n                  -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n                }\n                100% {\n                  -webkit-transform: rotate(360deg);\n                  transform: rotate(360deg);\n                }\n              }\n  \n              @keyframes '
														)
														.concat(
															this.options.prefix,
															'gradient {\n                0% {\n                  background-position: 0% 50%;\n                }\n                50% {\n                  background-position: 100% 50%;\n                }\n                100% {\n                  background-position: 0% 50%;\n                }\n              } \n        '
														);
												}
											},
											{
												key: '_customCss',
												value: function () {
													var e = this,
														t = Object.freeze({
															FG: 'funnygames',
															SP: 'spele',
															HG: 'hyvesgames',
															BG: 'bgames'
														}),
														n = Object.freeze({
															en_US: 'en_US',
															en_GB: 'en_GB',
															nl_NL: 'nl_NL',
															pt_PT: 'pt_PT',
															es_ES: 'es_ES',
															ru_RU: 'ru_RU',
															tr_TR: 'tr_TR',
															fr_FR: 'fr_FR',
															de_DE: 'de_DE',
															de_CH: 'de_CH',
															de_AT: 'de_AT',
															el_GR: 'el_GR',
															sv_SE: 'sv_SE',
															pl_PL: 'pl_PL',
															pt_BR: 'pt_BR',
															it_IT: 'it_IT',
															fi_FI: 'fi_FI',
															nb_NO: 'nb_NO',
															da_DK: 'da_DK',
															hu_HU: 'hu_HU',
															lt_LT: 'lt_LT',
															ja_JP: 'ja_JP',
															nl_BE: 'nl_BE',
															ro_RO: 'ro_RO',
															cs_CZ: 'cs_CZ'
														}),
														i = [
															{ domain: 'localhost', locale: 'en_US', site_group: t.HG },
															{ domain: 'local.spele.nl', locale: n.nl_NL, site_group: t.SP },
															{ domain: 'test.spele.nl', locale: n.nl_NL, site_group: t.SP },
															{ domain: 'spele.nl', locale: n.nl_NL, site_group: t.SP },
															{ domain: 'spielspiele.de', locale: n.de_DE, site_group: t.SP },
															{ domain: 'spele.be', locale: n.nl_BE, site_group: t.SP },
															{ domain: 'waznygry.pl', locale: n.pl_PL, site_group: t.SP },
															{ domain: 'hryhry.net', locale: n.cs_CZ, site_group: t.SP },
															{ domain: 'nyckelspel.se', locale: n.sv_SE, site_group: t.SP },
															{ domain: 'spiels.at', locale: n.de_AT, site_group: t.SP },
															{ domain: 'oyungemisi.com', locale: n.tr_TR, site_group: t.SP },
															{ domain: 'jouerjouer.com', locale: n.fr_FR, site_group: t.SP },
															{ domain: 'starbie.co.uk', locale: n.en_GB, site_group: t.SP },
															{ domain: 'jogojogar.com', locale: n.pt_PT, site_group: t.SP },
															{ domain: 'pelaaleikkia.com', locale: n.fi_FI, site_group: t.SP },
															{ domain: 'keygames.com', locale: n.en_US, site_group: t.SP },
															{ domain: 'minigioco.it', locale: n.it_IT, site_group: t.SP },
															{ domain: 'clavejuegos.com', locale: n.es_ES, site_group: t.SP },
															{ domain: 'spiels.ch', locale: n.de_CH, site_group: t.SP },
															{ domain: 'local.funnygames.nl', locale: n.nl_NL, site_group: t.FG },
															{ domain: 'test.funnygames.nl', locale: n.nl_NL, site_group: t.FG },
															{ domain: 'funnygames.nl', locale: n.nl_NL, site_group: t.FG },
															{ domain: 'funnygames.pt', locale: n.pt_PT, site_group: t.FG },
															{ domain: 'funnygames.fi', locale: n.fi_FI, site_group: t.FG },
															{ domain: 'funnygames.com.br', locale: n.pt_BR, site_group: t.FG },
															{ domain: 'funnygames.be', locale: n.nl_BE, site_group: t.FG },
															{ domain: 'funnygames.com.tr', locale: n.tr_TR, site_group: t.FG },
															{ domain: 'funnygames.it', locale: n.it_IT, site_group: t.FG },
															{ domain: 'funnygames.lt', locale: n.lt_LT, site_group: t.FG },
															{ domain: 'funnygames.ro', locale: n.ro_RO, site_group: t.FG },
															{ domain: 'funnygames.hu', locale: n.hu_HU, site_group: t.FG },
															{ domain: 'funnygames.se', locale: n.sv_SE, site_group: t.FG },
															{ domain: 'funnygames.fr', locale: n.fr_FR, site_group: t.FG },
															{ domain: 'funnygames.org', locale: n.en_US, site_group: t.FG },
															{ domain: 'funnygames.pl', locale: n.pl_PL, site_group: t.FG },
															{ domain: 'funnygames.ch', locale: n.de_CH, site_group: t.FG },
															{ domain: 'funnygames.no', locale: n.nb_NO, site_group: t.FG },
															{ domain: 'funnygames.dk', locale: n.da_DK, site_group: t.FG },
															{ domain: 'funnygames.eu', locale: n.de_DE, site_group: t.FG },
															{ domain: 'funnygames.at', locale: n.de_AT, site_group: t.FG },
															{ domain: 'funnygames.gr', locale: n.el_GR, site_group: t.FG },
															{ domain: 'funnygames.jp', locale: n.ja_JP, site_group: t.FG },
															{ domain: 'misjuegos.com', locale: n.es_ES, site_group: t.FG },
															{ domain: 'local.bgames.com', locale: n.en_US, site_group: t.BG },
															{ domain: 'test.bgames.com', locale: n.en_US, site_group: t.BG },
															{ domain: 'bgames.com', locale: n.en_US, site_group: t.BG },
															{ domain: 'local.hyvesgames.nl', locale: n.nl_NL, site_group: t.HG },
															{ domain: 'test.hyvesgames.nl', locale: n.nl_NL, site_group: t.HG },
															{ domain: 'hyvesgames.nl', locale: n.nl_NL, site_group: t.HG }
														],
														o = i.find(function (t) {
															return e._parentDomain === t.domain;
														}).site_group;
													(this.siteLocale = i.find(function (t) {
														return e._parentDomain === t.domain;
													}).locale),
														console.info('[splash] site group', o),
														console.info('[splash] site locale', this.siteLocale),
														(this.locales = n);
													var r = '';
													switch (o) {
														case t.FG:
															r = '\n                .'
																.concat(
																	this.options.prefix,
																	'splash-top > div > button {\n                    border-bottom-color: hsla(37, 100%, 62%, 1)!important;\n                    color: black;\n                    background: linear-gradient(140deg, hsla(53, 97%, 50%, 1), hsla(53, 97%, 45%, 1));\n                }\n\n                .'
																)
																.concat(
																	this.options.prefix,
																	'splash-top > div > button:hover {\n                     border-bottom-color: hsla(22, 100%, 50%, 1)!important;\n                     color: white;\n                     background: linear-gradient(140deg, hsla(32, 100%, 54%, 1), hsla(32, 100%, 49%, 1));\n                }\n\n                .'
																)
																.concat(
																	this.options.prefix,
																	'splash-top > div > button:active {\n                    border-bottom-color: hsla(22, 100%, 60%, 1)!important;\n                    background: linear-gradient(140deg, hsla(32, 100%, 64%, 1), hsla(32, 100%, 59%, 1));\n                }\n                '
																);
															break;
														case t.SP:
															r = '\n                .'
																.concat(
																	this.options.prefix,
																	'splash-top > div > button {\n                    border-radius: 2px!important;\n                    border-bottom-color: hsla(29, 97%, 42%, 1)!important;\n                    color: hsla(0, 0%, 98%, 1);\n                    background: linear-gradient(140deg, hsla(29, 97%, 57%, 1), hsla(29, 98%, 52%, 1));\n                }\n\n                .'
																)
																.concat(
																	this.options.prefix,
																	"splash-top > div > button:before {\n                    content: '';\n                    position: absolute;\n                    z-index: -1;\n                    left: 50%;\n                    right: 50%;\n                    bottom: -5px;\n                    background: hsla(29, 97%, 36%, 1);\n                    height: 5px;\n                    transition-property: left,right;\n                    transition-duration: .3s;\n                    transition-timing-function: ease-out;\n                }\n\n                ."
																)
																.concat(
																	this.options.prefix,
																	'splash-top > div > button:hover:before {\n                    left: 0;\n                    right: 0;\n                }\n                '
																);
															break;
														case t.HG:
															r = '\n                .'
																.concat(
																	this.options.prefix,
																	'splash-top > div > button {\n                    height: 35px;\n                    line-height: 35px;\n                    border-bottom: none!important;\n                    border-radius: 5px!important;\n                    color: hsla(24, 100%, 47%, 1);\n                    background: white;\n                }\n\n                .'
																)
																.concat(
																	this.options.prefix,
																	'splash-top > div > button:hover {\n                    color: white;\n                    background: hsla(24, 100%, 47%, 1);\n                }\n                '
																);
															break;
														case t.BG:
															r = '\n                .'
																.concat(
																	this.options.prefix,
																	'splash-top > div > button {\n                    border-bottom-color: hsla(80, 62%, 40%, 1)!important;\n                    color: hsla(0, 0%, 98%, 1);\n                    background: linear-gradient(140deg, hsla(80, 62%, 50%, 1), hsla(80, 62%, 45%, 1));\n                }\n\n                .'
																)
																.concat(
																	this.options.prefix,
																	'splash-top > div > button:hover {\n                    background: linear-gradient(140deg, hsla(80, 62%, 60%, 1), hsla(80, 62%, 55%, 1));\n                }\n                '
																);
													}
													return r;
												}
											},
											{
												key: '_customButtonText',
												value: function (t, e) {
													return [
														{ locale: t.en_US, translation: 'play now!' },
														{ locale: t.en_GB, translation: 'play now!' },
														{ locale: t.nl_NL, translation: 'speel nu!' },
														{ locale: t.pt_PT, translation: 'jogar um jogo!' },
														{ locale: t.es_ES, translation: 'jugar un juego!' },
														{ locale: t.ru_RU, translation: 'играть сейчас!' },
														{ locale: t.tr_TR, translation: 'şimdi oyna!' },
														{ locale: t.fr_FR, translation: 'jouer au jeu!' },
														{ locale: t.de_DE, translation: 'Spiel spielen!' },
														{ locale: t.de_CH, translation: 'Spiel spielen!' },
														{ locale: t.de_AT, translation: 'Spiel spielen!' },
														{ locale: t.el_GR, translation: 'paíxe tóra!' },
														{ locale: t.sv_SE, translation: 'spela spel!' },
														{ locale: t.pl_PL, translation: 'zagraj teraz!' },
														{ locale: t.pt_BR, translation: 'jogar um jogo!' },
														{ locale: t.it_IT, translation: 'gioca ora!' },
														{ locale: t.fi_FI, translation: 'pelaa peliä!' },
														{ locale: t.nb_NO, translation: 'spill!' },
														{ locale: t.da_DK, translation: 'spille spil!' },
														{ locale: t.hu_HU, translation: 'játssz most!' },
														{ locale: t.lt_LT, translation: 'spēlēt tagad!' },
														{ locale: t.ja_JP, translation: 'gēmu shimasu!' },
														{ locale: t.nl_BE, translation: 'speel nu!' },
														{ locale: t.ro_RO, translation: 'joaca jocul!' },
														{ locale: t.cs_CZ, translation: 'hrát teď!' }
													].find(function (t) {
														return t.locale === e;
													}).translation;
												}
											},
											{
												key: '_html',
												value: function (t, e) {
													var n = t.isConsentDomain,
														t = this._customButtonText(this.locales, this.siteLocale);
													return n
														? '\n                <div class="'
																.concat(
																	this.options.prefix,
																	'splash-background-container">\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-background-image"></div>\n                </div>\n                <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-container">\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-top">\n                        <div>\n                            <div></div>\n                            <button id="'
																)
																.concat(this.options.prefix, 'splash-button">')
																.concat(t, '</button>\n                            <div class="')
																.concat(
																	this.options.prefix,
																	'loader">Loading...</div>\n                        </div>   \n                    </div>\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-bottom">\n                        <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-consent">\n                            We may show personalized ads provided by our partners, and our \n                            services can not be used by children under 16 years old without the \n                            consent of their legal guardian. By clicking "PLAY GAME", you consent \n                            to transmit your data to our partners for advertising purposes and \n                            declare that you are 16 years old or have the permission of your \n                            legal guardian. You can review our terms\n                            <a href="https://azerion.com/business/privacy.html" target="_blank">here</a>.\n                        </div>\n                    </div>\n                </div>\n            '
																)
														: '\n                <div class="'
																.concat(
																	this.options.prefix,
																	'splash-background-container">\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-background-image"></div>\n                </div>\n                <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-container">\n                    <div class="'
																)
																.concat(
																	this.options.prefix,
																	'splash-top">\n                        <div>\n                            <div></div>\n                            <button id="'
																)
																.concat(this.options.prefix, 'splash-button">')
																.concat(t, '</button>\n                            <div class="')
																.concat(
																	this.options.prefix,
																	'loader">Loading...</div>\n                        </div>   \n                    </div>\n                </div>\n            '
																);
												}
											},
											{
												key: '_insertHtml',
												value: function (t) {
													var e = document.createElement('div');
													(e.innerHTML = t),
														(e.id = ''.concat(this.options.prefix, 'splash')),
														(e.style['z-index'] = Fr),
														(e.style.position = 'absolute'),
														(e.style.width = '100%'),
														(e.style.height = '100%'),
														(e.style.top = '0'),
														(e.style.left = '0');
													var n = this._getExtContainer();
													return (
														n
															? ((n.style.display = 'block'), n.insertBefore(e, n.firstChild))
															: (t =
																	document.body ||
																	document.getElementsByTagName('body')[0]).insertBefore(
																	e,
																	t.firstChild
															  ),
														{ container: e, extContainer: n }
													);
												}
											}
										]),
										r
									);
								})(),
								Qa = (function () {
									Ra(r, qa);
									var n,
										i,
										o =
											((n = r),
											(i = (function () {
												if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
												if (Reflect.construct.sham) return !1;
												if ('function' == typeof Proxy) return !0;
												try {
													return (
														Date.prototype.toString.call(
															Reflect.construct(Date, [], function () {})
														),
														!0
													);
												} catch (t) {
													return !1;
												}
											})()),
											function () {
												var t,
													e = La(n);
												return (
													(e = i
														? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
														: e.apply(this, arguments)),
													Ta(this, e)
												);
											});
									function r(t, e) {
										return xo(this, r), (e = o.call(this, t, e))._init(), e;
									}
									return (
										ko(r, [
											{
												key: '_init',
												value: function () {
													var t = this._css(this.options, this.gameData);
													this._insertCss(t);
													var e = this._html(this.options, this.gameData),
														t = this._insertHtml(e),
														e = t.container,
														t = t.extContainer;
													(this._root = e),
														(this._container = e),
														(this._extContainer = t),
														this._registerEvents();
													var n = document.querySelector('.'.concat(this.options.prefix, 'loader')),
														i = document.getElementById(
															''.concat(this.options.prefix, 'splash-button')
														);
													this.on('playClick', function () {
														(n.style.display = 'block'), (i.style.display = 'none');
													});
												}
											},
											{
												key: '_css',
												value: function (t, e) {
													e = this._getThumbnail(t, e);
													return '\n            body {\n                position: inherit;\n            }\n\n            .'
														.concat(
															this.options.prefix,
															'splash-background-container {\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                overflow:hidden;\n                background: radial-gradient(89.6% 90.02% at 50% 80.27%, #565863 0%, rgba(0, 0, 0, 0) 100%), #000000; \n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															"splash-background-container:before{\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              content: '';\n              background-image: url(\"data:image/svg+xml,%3Csvg width='1920' height='1080' viewBox='0 0 1920 1080' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg style='mix-blend-mode:luminosity'%3E%3Cpath d='M374.388 566.387L-350.928 101.185L-308.327 226.235L-623.315 24.2411L-728.18 140.727L-223.736 464.057L-266.206 339.182L-150.024 413.679L-61.4135 315.063L268.562 682.087L459.11 804.428L416.553 679.378L591.328 791.363L696.193 674.877L332.092 441.337L374.388 566.387ZM1020.53 798.922L1057.15 906.408L972.643 852.228L867.778 968.714L1141.78 1144.4L1099.18 1019.35L1450.08 1244.59L1554.95 1128.11L1028.35 790.184L1020.53 798.922ZM-853.232 280.021L-814.17 394.629L-904.135 336.823L-1009 453.309L-729.36 632.451L-771.961 507.401L-431.15 726.129L-326.285 609.643L-848.557 274.822L-853.232 280.021ZM62.8079 -337.714L358.615 -147.998L-19.5986 -568.676L20.6433 -450.704L-117.079 -538.965L-221.944 -422.479L105.234 -212.751L62.8079 -337.714ZM1891.96 61.2493L1759.83 -23.5156L1654.96 92.9706L1265.48 -340.554L1166.64 -403.953L1209.2 -278.903L903.781 -474.779L798.917 -358.293L1293.79 -40.9055L1251.23 -165.956L1976.55 299.246L1934.12 174.109L2237.45 368.631L2342.31 252.145L1849.36 -63.8444L1891.96 61.2493ZM2623 -60.48L2355.42 -232.238L2398.02 -107.188L2040.82 -336.097L1935.96 -219.611L2462.43 118.007L2473.79 105.38L2439.84 5.80255L2518.27 56.1372L2623 -60.48ZM-443.035 -169.32L282.282 295.882L239.68 170.788L816.438 540.739L976.881 362.252L837.629 272.943L880.231 397.993L154.914 -67.2088L197.516 57.8849L-342.321 -288.384L-502.764 -109.897L-400.433 -44.3572L-443.035 -169.32ZM1562.99 738.145L1187.44 497.439L1239.52 555.507L1148.9 656.351L1647.58 976.142L1604.98 851.048L1730.9 931.837L1835.77 815.351L1520.39 613.051L1562.99 738.145ZM-649.226 868.089L-603.828 918.598L-551.395 860.399L-679.899 778.081L-649.226 868.089ZM2065.47 559.789L2116.76 502.726L2026.27 444.701L2065.47 559.789ZM2263.09 -502.699L2538.93 -325.96L2285.2 -608L2161.33 -470.235L2305.52 -377.649L2263.09 -502.699ZM1386.12 229.599L678.54 -224.199L668.491 -212.969L703.446 -110.509L622.831 -162.329L517.966 -45.8428L787.993 127.357L745.435 2.30713L1470.75 467.465L1428.15 342.415L1956.19 681.082L2061.05 564.595L1343.52 104.549L1386.12 229.599ZM1234.02 1415L747.489 1102.9L697.198 1158.87L899.718 1384.15L1169.13 1557L1329.58 1378.51L1191.46 1289.95L1234.02 1415Z' fill='url(%23paint0_linear)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='807' y1='-1.00003' x2='807.082' y2='1086' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23131314' stop-opacity='0.25'/%3E%3Cstop offset='1' stop-color='%2329292C' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\"); linear-gradient(179.99deg, rgba(19, 19, 20, 0.25) 28.04%, rgba(41, 41, 44, 0) 78.24%);\n              mix-blend-mode: luminosity;\n              transform: rotate(-180deg);\n            }\n            \n            ."
														)
														.concat(
															this.options.prefix,
															'sdk-version{\n                position:absolute;\n                right:0;\n                top:0;  \n                font-size:8px;\n                padding-top:6px;                 \n                padding-right:6px;\n                color:#aaa;     \n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-container {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left:0;\n                width: 100%;\n                height: 100%;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                flex: 1;\n                align-self: center;\n                justify-content: center;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-bottom {\n              display: flex;\n              flex-flow: column;\n              box-sizing: border-box;\n              align-self: center;\n              justify-content: center;\n              width: 100%;\n              margin-bottom:5px;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div {\n                text-align: center;\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'splash-top > div > button {\n                margin: auto;\n                padding: 8px;\n                border-radius: 6px;\n                border:0;\n                background: linear-gradient(360deg, rgba(255, 159, 0, 0.416) 0%, rgba(251, 185, 75, 6.5e-05) 100%), #FFCA4D;;\n                color: black;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                font-size: 18px;\n                cursor: pointer;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n                width: 222px;\n                height:58px;\n            }\n          \n            .'
														)
														.concat(this.options.prefix, 'splash-top > div > .')
														.concat(
															this.options.prefix,
															'splash-top-image{\n              margin: auto;\n              width: 222px;\n              height: 222px;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              margin-bottom: 40px;\n              background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%);\n              border-radius: 50px;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-top > div > .')
														.concat(
															this.options.prefix,
															'splash-top-image div {\n              position: relative;\n              width: 154px;\n              height: 154px;\n              background-image: url('
														)
														.concat(
															e,
															');\n              background-position: center;\n              background-size: cover;\n              border-radius: 30px;\n              z-index: 1;\n          }\n          .'
														)
														.concat(this.options.prefix, 'splash-top > div > .')
														.concat(
															this.options.prefix,
															'splash-top-image:after{\n                width: 220px;\n                height: 220px;\n                margin: auto auto 12px;\n                border-radius: 50px;\n                background-image: url('
														)
														.concat(
															e,
															");\n                background-position: center;\n                background-size: cover;\n                position:absolute;\n                content: '';\n                opacity: .7;\n                filter: blur(20px);\n          }\n\n          ."
														)
														.concat(this.options.prefix, 'splash-top > div > .')
														.concat(
															this.options.prefix,
															"splash-top-image:before{\n            content: '';\n            position: absolute;\n            width: 220px;\n            height: 220px;\n            border-radius: 50px;\n            background: linear-gradient(179.99deg, #50515B 0%, #141415 100%);\n          }\n\n\n            ."
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(this.options.prefix, 'splash-consent,\n            .')
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(this.options.prefix, 'splash-title,\n            .')
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-description {\n                box-sizing: border-box;\n                width: 600px;\n                color: #fff;\n                text-align: justify;\n                font-size: 12px;\n                font-family: Arial;\n                font-weight: normal;\n                line-height: 100%;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-title {\n                margin-bottom: 15px;\n                text-align: center;\n                font-size: 18px;\n                font-family: Helvetica, Arial, sans-serif;\n                font-weight: bold;\n                line-height: 100%;\n            }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-description {\n              margin-bottom: 15px;\n              text-align: center;\n              line-height: 100%;\n              font-family: Roboto;\n              font-style: normal;\n              font-weight: normal;\n              font-size: 16px;\n              line-height: 22px;\n              letter-spacing: 0.003em;\n              color: #979797;\n          }\n            .'
														)
														.concat(this.options.prefix, 'splash-bottom > .')
														.concat(
															this.options.prefix,
															'splash-consent a {\n                color: #fff;\n            }\n            \n            .'
														)
														.concat(this.options.prefix, 'loader,\n            .')
														.concat(
															this.options.prefix,
															'loader:after {\n              border-radius: 50%;\n              width: 1.5em;\n              height: 1.5em;\n            }\n            @media (max-width:500px){\n              .gdsdk__splash-top > div > button{\n                width:95%;\n                position: fixed;\n                bottom: 10px;\n                left: 10px;\n                right: 10px;\n              }\n              .gdsdk__splash-description{\n                width: 100%;\n              }\n            }\n\n            .'
														)
														.concat(
															this.options.prefix,
															'loader {\n              margin: 0px auto;\n              font-size: 20px;\n              position: relative;\n              border-top: 1px solid #F87F29;\n              -webkit-transform: translateZ(0);\n              -ms-transform: translateZ(0);\n              transform: translateZ(0);\n              -webkit-animation: '
														)
														.concat(
															this.options.prefix,
															'load8 1.1s infinite linear;\n              animation: '
														)
														.concat(
															this.options.prefix,
															'load8 1.1s infinite linear;\n              display: none;\n            }\n            @-webkit-keyframes '
														)
														.concat(
															this.options.prefix,
															'load8 {\n              0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n              }\n              100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n              }\n            }\n            @keyframes '
														)
														.concat(
															this.options.prefix,
															'load8 {\n              0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n              }\n              100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n              }\n            }\n\n            @keyframes '
														)
														.concat(
															this.options.prefix,
															'gradient {\n              0% {\n                background-position: 0% 50%;\n              }\n              50% {\n                background-position: 100% 50%;\n              }\n              100% {\n                background-position: 0% 50%;\n              }\n            }            \n'
														);
												}
											},
											{
												key: '_html',
												value: function (t, e) {
													var n = t.isConsentDomain,
														i = e.loader.lang ? Ka[e.loader.lang] : 'Играть',
														t = 'arabic' !== e.loader.lang ? e.title : '',
														e = 'arabic' !== e.loader.lang ? e.description : '',
														n = n ? 'display:block' : 'display:none';
													return '\n                <div class="'
														.concat(
															this.options.prefix,
															'splash-background-container">\n                  <div class="'
														)
														.concat(this.options.prefix, 'sdk-version">')
														.concat(this.options.version, '</div>\n                  <div class="')
														.concat(
															this.options.prefix,
															'splash-container">\n                      <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-top">\n                          <div>\n                            <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-top-image">\n                              <div></div>\n                            </div>\n                            <div>\n                              \x3c!--<div class="'
														)
														.concat(
															this.options.prefix,
															'splash-bottom">\n                                <div class="'
														)
														.concat(this.options.prefix, 'splash-title">')
														.concat(t, '</div>\n                                <div class="')
														.concat(this.options.prefix, 'splash-description">')
														.concat(
															e,
															'</div>\n                              </div>--\x3e\n                            </div>\n                            <button id="'
														)
														.concat(this.options.prefix, 'splash-button">')
														.concat(i, '</button> \n                            <div class="')
														.concat(
															this.options.prefix,
															'loader"></div>\n                          </div>\n                      </div>\n                      <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-bottom">\n                          <div class="'
														)
														.concat(this.options.prefix, 'splash-consent" style=')
														.concat(
															n,
															'>\n                              We may show personalized ads provided by our partners, and our \n                              services can not be used by children under 16 years old without the \n                              consent of their legal guardian. By clicking "PLAY", you consent \n                              to transmit your data to our partners for advertising purposes and \n                              declare that you are 16 years old or have the permission of your \n                              legal guardian. You can review our terms\n                              <a href="https://azerion.com/business/privacy.html" target="_blank">here</a>.\n                          </div>\n                      </div>\n                  </div>       \n                </div>\n            '
														);
												}
											},
											{
												key: '_insertHtml',
												value: function (t) {
													var e = document.createElement('div');
													(e.innerHTML = t),
														(e.id = ''.concat(this.options.prefix, 'splash')),
														(e.style['z-index'] = Fr),
														(e.style.position = 'fixed'),
														(e.style.width = '100%'),
														(e.style.height = '100%'),
														(e.style.top = '0'),
														(e.style.left = '0');
													var n = this._getExtContainer();
													return (
														n
															? ((n.style.display = 'block'), n.insertBefore(e, n.firstChild))
															: (t =
																	document.body ||
																	document.getElementsByTagName('body')[0]).insertBefore(
																	e,
																	t.firstChild
															  ),
														{ container: e, extContainer: n }
													);
												}
											},
											{
												key: '_getBackground',
												value: function (t, e) {
													t = e.splash.background || t.background;
													if ('carbon' === t) {
														var n = e.splash['background-color'] || '#131313';
														return '\n      background:\n      linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,\n      linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,\n      linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,\n      linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,\n      linear-gradient(90deg, #1b1b1b 10px, transparent 10px),\n      linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);\n      background-color:'.concat(
															n,
															';\n      background-size: 20px 20px;        \n      '
														);
													}
													if ('rainbow' === t) {
														n = e.splash['background-color'] || '#840b2a';
														return '\n      background:\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,\n      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,\n      linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);\n      background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;\n      background-color:'.concat(
															n,
															';    \n      '
														);
													}
													if ('linedpaper' !== t)
														return 'era' === t
															? (e.splash['background-color'],
															  '\n        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n        background-size: 300% 300%;        \n        animation: '.concat(
																	this.options.prefix,
																	'gradient 60s ease infinite;\n    '
															  ))
															: '\n      background-color:'.concat(
																	'#000000',
																	';\n      background-size:16px 16px;\n     '
															  );
													e = e.splash['background-color'] || '#fff';
													return '\n      background-color:'.concat(
														e,
														';\n      background-image:\n      linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),\n      linear-gradient(#eee .1em, transparent .1em);\n      background-size: 100% 1.2em;     \n      '
													);
												}
											}
										]),
										r
									);
								})(),
								Ja = (function () {
									Ra(r, qa);
									var n,
										i,
										o =
											((n = r),
											(i = (function () {
												if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
												if (Reflect.construct.sham) return !1;
												if ('function' == typeof Proxy) return !0;
												try {
													return (
														Date.prototype.toString.call(
															Reflect.construct(Date, [], function () {})
														),
														!0
													);
												} catch (t) {
													return !1;
												}
											})()),
											function () {
												var t,
													e = La(n);
												return (
													(e = i
														? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
														: e.apply(this, arguments)),
													Ta(this, e)
												);
											});
									function r(t, e) {
										return xo(this, r), (e = o.call(this, t, e))._init(), e;
									}
									return (
										ko(r, [
											{
												key: '_init',
												value: function () {
													var t = this._css(this.options, this.gameData);
													this._insertCss(t);
													var e = this._html(this.options, this.gameData),
														t = this._insertHtml(e),
														e = t.container,
														t = t.extContainer;
													(this._root = e),
														(this._container = e),
														(this._extContainer = t),
														this._registerEvents();
													var n = document.querySelector('.'.concat(this.options.prefix, 'loader')),
														i = document.getElementById(
															''.concat(this.options.prefix, 'splash-button')
														);
													this.on('playClick', function () {
														(n.style.display = 'block'), (i.style.display = 'none');
													}),
														(document.getElementById('go_huz').onclick = function () {
															window.open('https://telenorspill.no/?play-code=azerion');
														});
												}
											},
											{
												key: '_css',
												value: function (t, e) {
													return (
														this._getThumbnail(t, e),
														'\n    \n            body {\n                position: inherit;\n                background: #003174 !important;\n                border-radius: 40px 40px 0px 0px;\n                overflow: hidden;\n            }\n\n            .'
															.concat(
																this.options.prefix,
																'splash-background-container {\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                overflow:hidden;\n                background: #000;              \n            }\n\n            .'
															)
															.concat(
																this.options.prefix,
																'splash-container {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                position: absolute;\n                top: 0;\n                left:0;\n                width: 100%;\n                height: 100%;\n            }\n\n            .'
															)
															.concat(
																this.options.prefix,
																'splash-top {\n                display: flex;\n                flex-flow: column;\n                box-sizing: border-box;\n                flex: 1;\n                align-self: center;\n                justify-content: center;\n            }\n\n            .'
															)
															.concat(
																this.options.prefix,
																'splash-bottom {\n              display: flex;\n              flex-flow: column;\n              box-sizing: border-box;\n              align-self: center;\n              justify-content: center;\n              width: 100%;\n              padding-left:6px;\n              padding-right:6px;\n              padding-bottom:6px;\n            }\n\n            .'
															)
															.concat(
																this.options.prefix,
																"splash-bottom .skip {\n                align-self: flex-end;\n                color: #fff !important;\n                font-family: 'Amatic SC', cursive;\n                font-weight: 600;\n                font-size: 24pt;\n                text-decoration: none;\n                margin-right: 20px !important;\n                padding-bottom: 10px;\n                background: black!important;\n                border: 0px solid;\n            }\n\n            ."
															)
															.concat(this.options.prefix, 'splash-bottom > .')
															.concat(
																this.options.prefix,
																'splash-consent {\n                box-sizing: border-box;\n                width: 100%;\n                // color: #3991ef;\n                color: white;\n                text-align: justify;\n                // position: absolute;\n                font-size: 12px;\n                font-family: Arial;\n                font-weight: normal;\n                // background: rgba(0, 56, 111, 0.78);\n                line-height: 150%;\n                padding: 10px 30px 10px;\n                left: 0;\n                bottom: 0;\n            }\n            .'
															)
															.concat(this.options.prefix, 'splash-top > .game > .')
															.concat(
																this.options.prefix,
																"splash-title {\n                box-sizing: border-box;\n                width: 100%;\n                color: #fff;\n                text-align: justify;\n                font-weight: normal;\n                text-align: center;\n                line-height: 150%;\n                font-family: 'Oswald', sans-serif;\n                font-size: 20px;\n                text-align: center;\n                padding-bottom: 20px;\n                cursor: default;\n                text-transform: uppercase;\n            }\n\n            ."
															)
															.concat(
																this.options.prefix,
																'splash-top > .game {\n                background: #000;\n                width: 100%;\n                height: 100%;\n                display: flex;\n                align-items: center;\n                justify-content: space-evenly;\n                flex-direction: column;\n            }\n\n            .'
															)
															.concat(
																this.options.prefix,
																'splash-top > .game > img {\n                width: 40%;\n                margin-top: 5% !important;\n            }\n\n            .'
															)
															.concat(
																this.options.prefix,
																"splash-top > .game > .text {\n                font-family: 'Architects Daughter', cursive;\n                width: 60%;\n                text-align: center;\n                font-size: 14pt;\n                color: #fff !important;\n                padding-bottom: 20px !important;\n            }\n\n            ."
															)
															.concat(
																this.options.prefix,
																"splash-top > .game > .cta {\n                width: auto;\n                text-decoration: none;\n                border: 2px solid #2BFD00;\n                padding: 5px 25px !important;\n                display: block;\n                font-family: 'Amatic SC', cursive;\n                font-weight: 600;\n                font-size: 24pt;\n                color: #fff !important;\n                border-radius: 30pt;\n                background: black;\n            }\n            ."
															)
															.concat(
																this.options.prefix,
																'splash-top > .game > .cta:active {\n              outline: none;\n            }\n\n            .'
															)
															.concat(
																this.options.prefix,
																'splash-top > .game > .cta:hover {\n                border: 2px solid #d70002;\n                \n            }\n\n            .'
															)
															.concat(this.options.prefix, 'splash-bottom > .')
															.concat(
																this.options.prefix,
																'splash-consent a {\n                color: #60bdea !important;\n            }\n\n            .'
															)
															.concat(this.options.prefix, 'splash-bottom > .')
															.concat(this.options.prefix, 'splash-consent a:hover,\n            .')
															.concat(this.options.prefix, 'splash-bottom > .')
															.concat(
																this.options.prefix,
																'splash-consent a:active {\n                color: #9cdfff !important;\n            }\n            \n            .'
															)
															.concat(this.options.prefix, 'loader,\n            .')
															.concat(
																this.options.prefix,
																'loader:after {\n              border-radius: 50%;\n              width: 1.5em;\n              height: 1.5em;\n            }\n\n            .'
															)
															.concat(
																this.options.prefix,
																'loader {\n              margin: 0px auto;\n              font-size: 10px;\n              position: relative;\n              text-indent: -9999em;\n              border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n              border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n              border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n              border-left: 1.1em solid #ffffff;\n              -webkit-transform: translateZ(0);\n              -ms-transform: translateZ(0);\n              transform: translateZ(0);\n              -webkit-animation: '
															)
															.concat(
																this.options.prefix,
																'load8 1.1s infinite linear;\n              animation: '
															)
															.concat(
																this.options.prefix,
																'load8 1.1s infinite linear;\n              display:none;\n            }\n            @-webkit-keyframes '
															)
															.concat(
																this.options.prefix,
																'load8 {\n              0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n              }\n              100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n              }\n            }\n            @keyframes '
															)
															.concat(
																this.options.prefix,
																'load8 {\n              0% {\n                -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n              }\n              100% {\n                -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n              }\n            }          \n'
															)
													);
												}
											},
											{
												key: '_html',
												value: function (t, e) {
													t = t.isConsentDomain ? 'display:block' : 'display:none';
													return "<style>\n                @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Architects+Daughter&display=swap');\n            </style>\n                <div class=\""
														.concat(
															this.options.prefix,
															'splash-background-container">\n                  <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-container">\n                      <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-top">\n                          <div class="game">\n                            <img src="http://static.gamedistribution.com/assets/impostor-game.png" alt="impostor game" />\n                            <div class="text">\n                              Visste du at du kan spille dette spillet uten noen reklame på den familievennlige portalen Telenorspill?\n                            </div>\n                            <button id="go_huz" class="btn cta">TRYKK FOR Å SPILLE</button>\n                          </div>\n                      </div>\n                        <div class="'
														)
														.concat(
															this.options.prefix,
															'splash-bottom">\n                        <button class="skip" id="'
														)
														.concat(
															this.options.prefix,
															'splash-button">HOPP OVER</button> \n                        <div class="'
														)
														.concat(
															this.options.prefix,
															'loader">Loading...</div>\n                        \x3c!--<a href="#" class="skip" id="'
														)
														.concat(
															this.options.prefix,
															'splash-button">HOPP OVER SIKKERHET</a>--\x3e\n                            <div class="'
														)
														.concat(this.options.prefix, 'splash-consent" style=')
														.concat(
															t,
															'>\n                            Here you consent \n                            to transmit your data to our partners for advertising purposes and \n                            declare that you are 16 years old or have the permission of your \n                            legal guardian. You can review our terms\n                            <a href="https://azerion.com/business/privacy.html" target="_blank">here</a>.\n                            </div>\n                        </div>\n                     \n                  </div>       \n                </div>\n            '
														);
												}
											},
											{
												key: '_insertHtml',
												value: function (t) {
													var e = document.createElement('div');
													(e.innerHTML = t),
														(e.id = ''.concat(this.options.prefix, 'splash')),
														(e.style['z-index'] = Fr),
														(e.style.position = 'fixed'),
														(e.style.width = '100%'),
														(e.style.height = '100%'),
														(e.style.top = '0'),
														(e.style.left = '0');
													var n = this._getExtContainer();
													return (
														n
															? ((n.style.display = 'block'), n.insertBefore(e, n.firstChild))
															: (t =
																	document.body ||
																	document.getElementsByTagName('body')[0]).insertBefore(
																	e,
																	t.firstChild
															  ),
														{ container: e, extContainer: n }
													);
												}
											}
										]),
										r
									);
								})();
							function Xa(e, t) {
								var n,
									i = Object.keys(e);
								return (
									Object.getOwnPropertySymbols &&
										((n = Object.getOwnPropertySymbols(e)),
										t &&
											(n = n.filter(function (t) {
												return Object.getOwnPropertyDescriptor(e, t).enumerable;
											})),
										i.push.apply(i, n)),
									i
								);
							}
							function ts(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {};
									t % 2
										? Xa(Object(n), !0).forEach(function (t) {
												mo(e, t, n[t]);
										  })
										: Object.getOwnPropertyDescriptors
										? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
										: Xa(Object(n)).forEach(function (t) {
												Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
										  });
								}
								return e;
							}
							var es = (function () {
									Ra(s, ja);
									var n,
										i,
										a =
											((n = s),
											(i = (function () {
												if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
												if (Reflect.construct.sham) return !1;
												if ('function' == typeof Proxy) return !0;
												try {
													return (
														Date.prototype.toString.call(
															Reflect.construct(Date, [], function () {})
														),
														!0
													);
												} catch (t) {
													return !1;
												}
											})()),
											function () {
												var t,
													e = La(n);
												return (
													(e = i
														? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
														: e.apply(this, arguments)),
													Ta(this, e)
												);
											});
									function s(t, e) {
										var n;
										xo(this, s),
											((n = a.call(this)).options = t),
											(n.gameData = e),
											(n.promo = e.promo),
											(n.macros = {
												GAME_ID: e.gameId,
												GAME_TITLE: e.title,
												URL: location.href,
												REFERRER_URL: document.referrer || location.href
											});
										var i,
											o = {};
										for (i in n.macros) {
											var r = n.macros[i];
											(o[i + '_ESC'] = encodeURIComponent(r)),
												(o[i + '_ESC_ESC'] = encodeURIComponent(encodeURIComponent(r)));
										}
										return (n.macros = ts(ts({}, n.macros), o)), (n.dict = e.promo.dict || {}), n;
									}
									return (
										ko(s, [
											{
												key: '_registerEvents',
												value: function () {
													var e = this;
													this.skipButton.addEventListener('click', function (t) {
														e.emit('skipClick', t);
													});
												}
											},
											{
												key: '_insertCss',
												value: function (t) {
													var e = document.head || document.getElementsByTagName('head')[0],
														n = document.createElement('style'),
														i = document.head.querySelector('style[data-gdsdk-promo-style]');
													i && i.remove(),
														(n.type = 'text/css'),
														n.setAttribute('data-gdsdk-promo-style', !0),
														n.styleSheet
															? (n.styleSheet.cssText = t)
															: n.appendChild(document.createTextNode(t)),
														e.appendChild(n);
												}
											},
											{
												key: '_getExtContainer',
												value: function () {
													if (this.options.flashSettings.splashContainerId)
														return document.getElementById(
															this.options.flashSettings.splashContainerId
														);
												}
											},
											{
												key: 'hide',
												value: function () {
													var t = this._container,
														e = this._extContainer;
													t && t.parentNode && t.parentNode.removeChild(t),
														e && (e.style.display = 'none');
												}
											},
											{
												key: 'getRoot',
												value: function () {
													return this._root;
												}
											}
										]),
										s
									);
								})(),
								ns = (function () {
									Ra(r, es);
									var n,
										i,
										o =
											((n = r),
											(i = (function () {
												if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
												if (Reflect.construct.sham) return !1;
												if ('function' == typeof Proxy) return !0;
												try {
													return (
														Date.prototype.toString.call(
															Reflect.construct(Date, [], function () {})
														),
														!0
													);
												} catch (t) {
													return !1;
												}
											})()),
											function () {
												var t,
													e = La(n);
												return (
													(e = i
														? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
														: e.apply(this, arguments)),
													Ta(this, e)
												);
											});
									function r(t, e) {
										return xo(this, r), (e = o.call(this, t, e))._init(), e;
									}
									return (
										ko(r, [
											{
												key: '_init',
												value: function () {
													var t = this._css();
													this._insertCss(t);
													var e = this._html(),
														t = this._insertHtml(e),
														e = t.container,
														t = t.extContainer;
													this._initIframeMode(e),
														this._initSkipButton(e),
														(this._root = e),
														(this._container = e),
														(this._ext_container = t),
														this._registerEvents();
												}
											},
											{
												key: '_css',
												value: function () {
													return '\n        body {\n            position: inherit;\n        }\n\n        .'
														.concat(
															this.options.prefix,
															'promo-container {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: stretch;\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          top:0;\n          left:0;\n          background-color:black;\n        }\n\n        .'
														)
														.concat(
															this.options.prefix,
															'promo-iframe-container {\n          flex-grow:1;\n          position:relative;\n        }\n        \n        .'
														)
														.concat(
															this.options.prefix,
															'promo-controls-container {\n          padding: 4px 0px;\n          text-align:right;\n        }\n\n        .'
														)
														.concat(
															this.options.prefix,
															'promo-iframe-container>iframe {\n          box-sizing:border-box;\n          width:0;\n          height:0;\n          min-height:100%;\n          min-width:100%;\n          max-width:100%;\n          max-height:100%;\n          overflow:hidden;\n          position:absolute;\n        }\n\n        #'
														)
														.concat(
															this.options.prefix,
															'promo-button{\n          box-sizing:border-box;\n          padding: 4px 16px;\n          margin: auto;\n          border: 1px solid rgba(255,255,255,0.5);\n          background: black;\n          color: white;\n          color: rgba(255,255,255,0.8);\n          font-family: Helvetica, Arial, sans-serif;\n          font-size: 18px;\n          cursor: pointer;\n          min-width: 150px;\n        }\n\n        #'
														)
														.concat(
															this.options.prefix,
															'promo-button:hover {\n            background: linear-gradient(0deg, #1C8464, #21A179);\n        }\n\n        #'
														)
														.concat(
															this.options.prefix,
															'promo-button:active {\n            background: linear-gradient(0deg, #1C8464, #15674E);\n        }\n\n        #'
														)
														.concat(this.options.prefix, 'promo-button:disabled,#')
														.concat(
															this.options.prefix,
															'promo-button[disabled]{\n          background: black;\n        }\n    '
														);
												}
											},
											{
												key: '_html',
												value: function () {
													return '\n        <div class="'
														.concat(
															this.options.prefix,
															'promo-container">\n          <div class="'
														)
														.concat(
															this.options.prefix,
															'promo-iframe-container">\n            <iframe frameBorder="1"></iframe>\n          </div>        \n          <div class="'
														)
														.concat(
															this.options.prefix,
															'promo-controls-container">\n            <button id="'
														)
														.concat(
															this.options.prefix,
															'promo-button" disabled></button>\n          </div>\n        </div>\n        '
														);
												}
											},
											{
												key: '_insertHtml',
												value: function (t) {
													var e = document.createElement('div');
													(e.innerHTML = t),
														(e.id = ''.concat(this.options.prefix, 'promo')),
														(e.style['z-index'] = Kr),
														(e.style.position = 'fixed'),
														(e.style.width = '100%'),
														(e.style.height = '100%'),
														(e.style.top = '0'),
														(e.style.left = '0');
													var n = this._getExtContainer();
													return (
														n
															? ((n.style.display = 'block'), n.insertBefore(e, n.firstChild))
															: (t =
																	document.body ||
																	document.getElementsByTagName('body')[0]).insertBefore(
																	e,
																	t.firstChild
															  ),
														{ container: e, extContainer: n }
													);
												}
											},
											{
												key: '_initIframeMode',
												value: function (t) {
													var e,
														n = t.querySelector('iframe');
													for (e in this.promo.attrs) {
														var i = this.promo.attrs[e],
															i = this._replaceMacros(i);
														n.setAttribute(e, i);
													}
												}
											},
											{
												key: '_replaceMacros',
												value: function (t) {
													var e,
														n,
														i = t;
													for (e in this.macros)
														var o = this.macros[e],
															r = '{{' + e + '}}',
															r = this._escapeRegExp(r),
															i = i.replace(new RegExp(r, 'g'), o);
													for (n in this.dict) {
														var a = this.dict[n],
															s = '{{DICT[' + n + ']}}',
															s = this._escapeRegExp(s);
														i = i.replace(new RegExp(s, 'g'), a);
													}
													return i;
												}
											},
											{
												key: '_initSkipButton',
												value: function (t) {
													var e = this;
													this.skipButton = document.getElementById(
														''.concat(this.options.prefix, 'promo-button')
													);
													var n =
															this.promo.textBeforeSkip || 'You can skip this promo in {{0}} secs',
														i = this.promo.textOnSkip || 'SKIP',
														o = this.promo.skipAfter || 15;
													this.skipButton.innerText = n.replace('{{0}}', o);
													var r = Date.now(),
														a = setInterval(function () {
															var t = Math.floor((Date.now() - r) / 1e3),
																t = o - t;
															e.skipButton.innerText = n.replace('{{0}}', t);
														}, 1e3);
													setTimeout(function () {
														clearInterval(a),
															(e.skipButton.innerText = e._replaceMacros(i)),
															e.skipButton.removeAttribute('disabled');
													}, 1e3 * o);
												}
											},
											{
												key: '_escapeRegExp',
												value: function (t) {
													return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
												}
											}
										]),
										r
									);
								})(),
								is = (function () {
									Ra(r, es);
									var n,
										i,
										o =
											((n = r),
											(i = (function () {
												if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
												if (Reflect.construct.sham) return !1;
												if ('function' == typeof Proxy) return !0;
												try {
													return (
														Date.prototype.toString.call(
															Reflect.construct(Date, [], function () {})
														),
														!0
													);
												} catch (t) {
													return !1;
												}
											})()),
											function () {
												var t,
													e = La(n);
												return (
													(e = i
														? ((t = La(this).constructor), Reflect.construct(e, arguments, t))
														: e.apply(this, arguments)),
													Ta(this, e)
												);
											});
									function r(t, e) {
										return xo(this, r), (e = o.call(this, t, e))._init(), e;
									}
									return (
										ko(r, [
											{
												key: '_init',
												value: function () {
													this._slotId = this.gameData.promo.puzzle.slotId || 'gd__preroll_banner';
													var t = this._css();
													this._insertCss(t);
													var e = this._html(),
														t = this._insertHtml(e),
														e = t.container,
														t = t.extContainer;
													this._initDisplayMode(e),
														this._initSkipButton(e),
														(this._root = e),
														(this._container = e),
														(this._ext_container = t),
														(this._promoContainer = document.querySelector(
															'.'.concat(this.options.prefix, 'promo-container')
														)),
														(this._promoControlsContainer = document.querySelector(
															'.'.concat(this.options.prefix, 'promo-controls-container')
														)),
														this._registerEvents();
												}
											},
											{
												key: 'getSlotId',
												value: function () {
													return this._slotId;
												}
											},
											{
												key: 'getSlotContainerId',
												value: function () {
													return this._slotId + '_container';
												}
											},
											{
												key: '_css',
												value: function () {
													return '\n        body {\n            position: inherit;\n        }\n\n        .'
														.concat(
															this.options.prefix,
															'promo-container {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: stretch;\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          top:0;\n          left:0;\n        }\n\n        .'
														)
														.concat(
															this.options.prefix,
															'promo-display-container {\n          flex-grow:1;\n          position:relative;\n        }\n        \n        .'
														)
														.concat(
															this.options.prefix,
															'promo-controls-container {\n          padding: 4px 0px;\n          text-align:right;\n          visibility:hidden;\n        }\n\n        .'
														)
														.concat(
															this.options.prefix,
															'promo-display-container>div {\n          box-sizing:border-box;\n          width:0;\n          height:0;\n          min-height:100%;\n          min-width:100%;\n          max-width:100%;\n          max-height:100%;\n          overflow:hidden;\n          position:absolute;\n        }\n\n        #'
														)
														.concat(
															this.options.prefix,
															'promo-message{\n          box-sizing:border-box;\n          padding: 4px 16px;\n          margin: auto;\n          color: white;\n          color: rgba(255,255,255,0.8);\n          font-family: Helvetica, Arial, sans-serif;\n          font-size: 14px;\n          cursor: pointer;\n          min-width: 150px;\n          float:left;\n          text-align:left;\n          margin-bottom:8px;\n        }\n\n        #'
														)
														.concat(
															this.options.prefix,
															'promo-button{\n          box-sizing:border-box;\n          padding: 4px 16px;\n          margin: auto;\n          border: 1px solid rgba(255,255,255,0.5);\n          color: white;\n          color: rgba(255,255,255,0.8);\n          font-family: Helvetica, Arial, sans-serif;\n          font-size: 18px;\n          cursor: pointer;\n          min-width: 150px;\n          margin-bottom:8px;\n          background: black;\n        }\n\n        #'
														)
														.concat(
															this.options.prefix,
															'promo-button:hover {\n            background: linear-gradient(0deg, #1C8464, #21A179);\n        }\n\n        #'
														)
														.concat(
															this.options.prefix,
															'promo-button:active {\n            background: linear-gradient(0deg, #1C8464, #15674E);\n        }\n\n        #'
														)
														.concat(this.options.prefix, 'promo-button:disabled,#')
														.concat(
															this.options.prefix,
															'promo-button[disabled]{\n          background: black;\n        }\n    '
														);
												}
											},
											{
												key: '_html',
												value: function () {
													return '\n        <div class="'
														.concat(
															this.options.prefix,
															'promo-container">\n          <div class="'
														)
														.concat(
															this.options.prefix,
															'promo-display-container">\n            <div id="'
														)
														.concat(
															this.getSlotContainerId(),
															'"></div>\n          </div>\n          <div class="'
														)
														.concat(
															this.options.prefix,
															'promo-controls-container">\n            <button id="'
														)
														.concat(
															this.options.prefix,
															'promo-button" disabled></button>\n            <span id="'
														)
														.concat(
															this.options.prefix,
															'promo-message"></span>\n          </div>\n        </div>\n        '
														);
												}
											},
											{
												key: '_insertHtml',
												value: function (t) {
													var e = document.createElement('div');
													(e.innerHTML = t),
														(e.id = ''.concat(this.options.prefix, 'promo')),
														(e.style['z-index'] = Kr),
														(e.style.position = 'fixed'),
														(e.style.width = '100%'),
														(e.style.height = '100%'),
														(e.style.top = '0'),
														(e.style.left = '0');
													var n = this._getExtContainer();
													return (
														n
															? ((n.style.display = 'block'), n.insertBefore(e, n.firstChild))
															: (t =
																	document.body ||
																	document.getElementsByTagName('body')[0]).insertBefore(
																	e,
																	t.firstChild
															  ),
														{ container: e, extContainer: n }
													);
												}
											},
											{
												key: '_initDisplayMode',
												value: function (t) {
													for (var e in this.promo.attrs)
														(e = this.promo.attrs[e]), (e = this._replaceMacros(e));
												}
											},
											{
												key: '_replaceMacros',
												value: function (t) {
													var e,
														n,
														i = t;
													for (e in this.macros)
														var o = this.macros[e],
															r = '{{' + e + '}}',
															r = this._escapeRegExp(r),
															i = i.replace(new RegExp(r, 'g'), o);
													for (n in this.dict) {
														var a = this.dict[n],
															s = '{{DICT[' + n + ']}}',
															s = this._escapeRegExp(s);
														i = i.replace(new RegExp(s, 'g'), a);
													}
													return i;
												}
											},
											{
												key: '_initSkipButton',
												value: function (t) {
													var e = this;
													(this.skipButton = document.getElementById(
														''.concat(this.options.prefix, 'promo-button')
													)),
														(this.textBeforeAdCloseLabel = document.getElementById(
															''.concat(this.options.prefix, 'promo-message')
														));
													var n = this.promo.textBeforeSkip || 'You can skip this ad in {{0}} secs',
														i = this.promo.textOnSkip || 'SKIP',
														o = this.promo.skipAfter || 15,
														r = this.promo.textBeforeAdClose || 'Ad will be closed in {{0}} secs',
														a = this.promo.adDuration || 30,
														o = a < o ? a : o;
													this.skipButton.innerText = n.replace('{{0}}', o);
													var s = Date.now(),
														c = setInterval(function () {
															var t = Math.floor((Date.now() - s) / 1e3),
																t = o - t;
															e.skipButton.innerText = n.replace('{{0}}', t);
														}, 250);
													setTimeout(function () {
														clearInterval(c),
															(e.skipButton.innerText = e._replaceMacros(i)),
															e.skipButton.removeAttribute('disabled');
														var t = setInterval(function () {
															var t = Math.floor((Date.now() - s) / 1e3),
																t = a - t;
															e.textBeforeAdCloseLabel.innerText = r.replace('{{0}}', t);
														}, 250);
														setTimeout(function () {
															clearInterval(t), e.emit('adCompleted');
														}, 1e3 * (a - o));
													}, 1e3 * o);
												}
											},
											{
												key: '_escapeRegExp',
												value: function (t) {
													return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
												}
											},
											{
												key: 'show',
												value: function () {
													(this._promoContainer.style['background-color'] = 'black'),
														(this._promoControlsContainer.style.visibility = 'visible');
												}
											}
										]),
										r
									);
								})();
							function os(e, t) {
								var n,
									i = Object.keys(e);
								return (
									Object.getOwnPropertySymbols &&
										((n = Object.getOwnPropertySymbols(e)),
										t &&
											(n = n.filter(function (t) {
												return Object.getOwnPropertyDescriptor(e, t).enumerable;
											})),
										i.push.apply(i, n)),
									i
								);
							}
							function rs(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {};
									t % 2
										? os(Object(n), !0).forEach(function (t) {
												mo(e, t, n[t]);
										  })
										: Object.getOwnPropertyDescriptors
										? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
										: os(Object(n)).forEach(function (t) {
												Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
										  });
								}
								return e;
							}
							var as,
								ss,
								cs,
								ls,
								ds,
								us,
								ps = null,
								hs =
									(ko(fs, [
										{
											key: '_sendLoaderDataEvent',
											value: function () {
												try {
													this.options.onLoaderEvent({
														name: 'LOADER_DATA',
														message: { game: this._gameData, bridge: this._bridge },
														status: this._sdk_ready ? 'success' : 'error'
													});
												} catch (t) {}
											}
										},
										{
											key: '_sendViewEvent',
											value: function () {
												this._bridge.noViewEvent ||
													((this._bridge.noViewEvent = !0),
													this._sendTunnlEvent(7),
													this.msgrt.send('view'));
											}
										},
										{
											key: '_sendLoadedEvent',
											value: function () {
												this._bridge.noLoadedEvent ||
													((this._bridge.noLoadedEvent = !0),
													this._sendTunnlEvent(1),
													this._initGamedockTracker(window.GamedockSDK, 'gameplay'),
													this.msgrt.send('loaded', {
														message: this._hasBlocker ? 'Has Blocker' : 'No Blocker'
													}));
											}
										},
										{
											key: '_initializeSDKWithGameData',
											value:
												((us = yo(
													bo.mark(function t(e, n) {
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			return (t.prev = 0), (t.next = 3), this._getGameData();
																		case 3:
																			return (
																				(this._gameData = t.sent),
																				this._checkGameId(),
																				this._checkGameDeleted(),
																				(t.next = 8),
																				this._checkBlocking()
																			);
																		case 8:
																			return (
																				this._changeMidrollInDebugMode(),
																				(t.next = 11),
																				this._initializeVideoAd()
																			);
																		case 11:
																			this._sendSDKReady(), e(this._gameData), (t.next = 20);
																			break;
																		case 15:
																			(t.prev = 15),
																				(t.t0 = t.catch(0)),
																				this._sendSDKError(t.t0),
																				this.onResumeGame(t.t0.message, 'warning'),
																				n(t.t0);
																		case 20:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this,
															[[0, 15]]
														);
													})
												)),
												function (t, e) {
													return us.apply(this, arguments);
												})
										},
										{
											key: '_getDefaultOptions',
											value: function () {
												return {
													debug: !1,
													testing: !1,
													gameId: '4f3d7d38d24b740c95da2b03dc3a2333',
													prefix: 'gdsdk__',
													onEvent: function (t) {},
													onLoaderEvent: function (t) {},
													flashSettings: { adContainerId: '', splashContainerId: '' },
													advertisementSettings: {},
													resumeGame: function () {},
													pauseGame: function () {},
													onInit: function (t) {},
													onError: function (t) {},
													loader: {}
												};
											}
										},
										{
											key: '_extendDefaultOptions',
											value: function (t, e) {
												t = fr(t);
												(this.options = e ? Dr(t, e) : t),
													(this.options.gameId = this.options.gameId.trim());
											}
										},
										{
											key: '_setConsoleBanner',
											value: function () {
												var t;
												this._bridge.noConsoleBanner ||
													((t = console.log(
														'%c %c %c GameDistribution.com HTML5 SDK | Version: 1.8.12 %c %c %c',
														'background: #9854d8',
														'background: #6c2ca7',
														'color: #fff; background: #450f78;',
														'background: #6c2ca7',
														'background: #9854d8',
														'background: #ffffff'
													)),
													console.log.apply(console, t));
											}
										},
										{
											key: '_sendTunnlEvent',
											value: function (t) {
												t = {
													page_url: this._parentURL,
													game_id: this.options.gameId,
													eventtype: t,
													ts: Date.now()
												};
												fetch('https://ana.headerlift.com/event?'.concat(ir.stringify(t)));
											}
										},
										{
											key: '_sendAdRequestContext',
											value: function (t) {
												this.msgrt.send('adctx', { message: t.adTag.bidder });
											}
										},
										{
											key: '_checkWhitelabelPartner',
											value: function () {
												this._whitelabelPartner = !1;
												var t = Tr();
												t.hasOwnProperty('xanthophyll') &&
													'true' === t.xanthophyll &&
													((this._whitelabelPartner = !0),
													Nr(
														'White label publisher',
														''.concat(this._whitelabelPartner),
														'success'
													));
											}
										},
										{
											key: '_checkConsole',
											value: function () {
												try {
													if (!Br) return;
													'developer.gamedistribution.com' === this._parentDomain
														? (jr('gd_debug_ex', !0),
														  jr('gd_disable_midroll_timer', !0),
														  jr('gd_tag', !0))
														: 'localhost:3000' === this._parentDomain &&
														  (jr('gd_debug_ex', !0), jr('gd_disable_midroll_timer', !0)),
														Pr('gd_debug_ex') &&
															(this.openConsole(),
															this.msgrt.send('dev.console', { message: this._parentDomain }));
												} catch (t) {}
											}
										},
										{
											key: '_checkUserDeclinedTracking',
											value: function () {
												this._userDeclinedTracking =
													this._bridge.isCoreSDKMode ||
													0 <= document.location.search.indexOf('gdpr-tracking=0') ||
													0 <= document.cookie.indexOf('ogdpr_tracking=0');
											}
										},
										{
											key: '_initializeMessageRouter',
											value: function () {
												var t;
												this.msgrt = new Zr({
													isCoreSDKMode: this._bridge.isCoreSDKMode,
													gameId: this.options.gameId,
													hours: new Date().getHours(),
													topDomain: this._topDomain,
													domain: this._parentDomain,
													referrer: this._parentURL,
													depth: Or(),
													version: $o,
													tracking: this._userDeclinedTracking,
													whitelabel: this._whitelabelPartner,
													platform:
														((t = navigator.userAgent || navigator.vendor || window.opera),
														/windows phone/i.test(t)
															? 'windows'
															: /android/i.test(t)
															? 'android'
															: /iPad|iPhone|iPod/.test(t) && !window.MSStream
															? 'ios'
															: ''),
													byloader: this._bridge.isTokenGameURL,
													isTokenGameURL: this._bridge.isTokenGameURL,
													isMasterGameURL: this._bridge.isMasterGameURL,
													isExtHostedGameURL: this._bridge.isExtHostedGameURL,
													byloaderVersion: this._bridge.version
												});
											}
										},
										{
											key: '_loadGamedockTracker',
											value: function () {
												var e = this,
													t = [
														'https://cdn.gamedock.io/gamedock-web-tracker/4.0.4/script/gamedock-sdk.min.js'
													];
												Cr(t[0], 'GamedockSDK', { alternates: t })
													.then(
														function () {
															_o(this, e),
																this._initGamedockTracker(window.GamedockSDK, 'pageview');
														}.bind(this)
													)
													.catch(
														function (t) {
															_o(this, e), this._sendSDKError(t);
														}.bind(this)
													);
											}
										},
										{
											key: '_initGamedockTracker',
											value: function (t, e) {
												t.initialize('gd', this._parentDomain).tracking.trackEvent(e, {
													pageId: this.options.gameId,
													pageType: 'game'
												});
											}
										},
										{
											key: '_loadMiniJuegosGratisTracker',
											value: function () {
												var e = this;
												window.mpConfig = {
													game: this.options.gameId,
													partner: 'game-distribution'
												};
												var t = ['https://ext.minijuegosgratis.com/external-host/main.js'];
												Cr(t[0], 'MinijuegosSDK', { alternates: t }).catch(
													function (t) {
														_o(this, e), this._sendSDKError(t);
													}.bind(this)
												);
											}
										},
										{
											key: '_loadGoogleAnalytics',
											value: function () {
												var e = this,
													t = ['https://www.google-analytics.com/analytics.js'];
												Cr(t[0], 'gdsdk_google_analytics', {
													alternates: t,
													error_prefix: 'Blocked:',
													exists: function () {
														return _o(this, e), window.ga;
													}.bind(this)
												})
													.then(
														function () {
															_o(this, e),
																window.ga(
																	'create',
																	'UA-60359297-49',
																	{ name: 'gd', cookieExpires: 7776e3, sampleRate: 5 },
																	'auto'
																),
																this._bridge.noGAPageView || window.ga('gd.send', 'pageview'),
																this._userDeclinedTracking ||
																	window.ga('gd.set', 'anonymizeIp', !0);
														}.bind(this)
													)
													.catch(
														function (t) {
															_o(this, e), this._sendSDKError(t);
														}.bind(this)
													);
											}
										},
										{
											key: '_subscribeToEvents',
											value: function () {
												var n = this;
												(this.eventBus = new $r()),
													Ur.forEach(
														function (t) {
															var e = this;
															return (
																_o(this, n),
																this.eventBus.subscribe(
																	t,
																	function (t) {
																		return _o(this, e), this._onEvent(t);
																	}.bind(this),
																	'sdk'
																)
															);
														}.bind(this)
													),
													this.eventBus.subscribe(
														'AD_SDK_CANCELED',
														function () {
															_o(this, n);
														}.bind(this),
														'sdk'
													),
													Gr.forEach(
														function (t) {
															var e = this;
															return (
																_o(this, n),
																this.eventBus.subscribe(
																	t,
																	function (t) {
																		return _o(this, e), this._onEvent(t);
																	}.bind(this),
																	'ima'
																)
															);
														}.bind(this)
													),
													this.eventBus.subscribe(
														'COMPLETE',
														function () {
															if (
																(_o(this, n),
																'developer.gamedistribution.com' === this._parentDomain ||
																	!0 === new RegExp('^localhost').test(this._parentDomain))
															) {
																fetch(
																	'https://game.api.gamedistribution.com/game/v2/hasapi/'
																		.concat(this.options.gameId, '?timestamp=')
																		.concat(new Date().valueOf())
																);
																try {
																	var t = JSON.stringify({
																		type: 'GD_SDK_IMPLEMENTED',
																		gameID: this.options.gameId
																	});
																	window.location !== window.top.location
																		? window.top.postMessage(t, '*')
																		: null !== window.opener &&
																		  window.opener.location !== window.location &&
																		  window.opener.postMessage(t, '*');
																} catch (t) {}
															}
														}.bind(this),
														'ima'
													),
													this.eventBus.subscribe(
														'CONTENT_PAUSE_REQUESTED',
														function () {
															return (
																_o(this, n),
																this.onPauseGame(
																	'New advertisements requested and loaded',
																	'success'
																)
															);
														}.bind(this),
														'ima'
													),
													this.eventBus.subscribe(
														'IMPRESSION',
														function (t) {
															_o(this, n), this.msgrt.send('ad.impression');
														}.bind(this),
														'ima'
													),
													this.eventBus.subscribe(
														'SKIPPED',
														function (t) {
															_o(this, n);
														}.bind(this),
														'ima'
													),
													this.eventBus.subscribe(
														'AD_ERROR',
														function (t) {
															_o(this, n),
																this.msgrt.send('ad.error', {
																	message: t.message,
																	details: t.details
																});
														}.bind(this),
														'ima'
													),
													this.eventBus.subscribe(
														'CLICK',
														function (t) {
															_o(this, n);
														}.bind(this),
														'ima'
													),
													this.eventBus.subscribe(
														'COMPLETE',
														function (t) {
															_o(this, n);
														}.bind(this),
														'ima'
													),
													this.eventBus.subscribe(
														'AD_SDK_REQUEST',
														function (t) {
															_o(this, n),
																this._sendTunnlEvent(2),
																this._sendAdRequestContext(t.message);
														}.bind(this),
														'sdk'
													),
													this.eventBus.subscribe(
														'SDK_ERROR',
														function (t) {
															_o(this, n),
																t.message.startsWith('Blocked:')
																	? this._bridge.noBlockerEvent ||
																	  (this.msgrt.send('error', { message: t.message }),
																	  this._hasBlocker ||
																			((this._hasBlocker = !0), this._sendTunnlEvent(3)))
																	: this.msgrt.send('error', { message: t.message });
														}.bind(this),
														'sdk'
													),
													this.eventBus.subscribe(
														'AD_REQUEST',
														function (t) {
															_o(this, n);
														}.bind(this),
														'sdk'
													),
													this.eventBus.subscribe(
														'AD_REQUEST_KEYS_EMPTY',
														function (t) {
															_o(this, n),
																this.msgrt.send('tunnl.keys.empty', {
																	message: t.message,
																	details: t.details
																});
														}.bind(this),
														'sdk'
													),
													this.eventBus.subscribe(
														'AD_REQUEST_KEYS_FALLBACK',
														function (t) {
															_o(this, n),
																this.msgrt.send('tunnl.keys.fallback', {
																	message: t.message,
																	details: t.details
																});
														}.bind(this),
														'sdk'
													),
													this.eventBus.subscribe(
														'AD_T4R',
														function (t) {
															return _o(this, n), this.msgrt.send('adt4r');
														}.bind(this),
														'sdk'
													);
											}
										},
										{
											key: '_gdpr',
											value: function () {
												var e = this,
													t =
														!this._bridge.isCoreSDKMode &&
														0 <= document.location.search.indexOf('gdpr-tracking'),
													n = 0 <= document.location.search.indexOf('gdpr-tracking=1'),
													i =
														!this._bridge.isCoreSDKMode &&
														0 <= document.location.search.indexOf('gdpr-targeting'),
													o = 0 <= document.location.search.indexOf('gdpr-targeting=1'),
													r =
														!this._bridge.isCoreSDKMode &&
														0 <= document.location.search.indexOf('gdpr-third-party'),
													a = 0 <= document.location.search.indexOf('gdpr-third-party=1');
												[
													{
														name: 'SDK_GDPR_TRACKING',
														message: t ? (n ? 'Allowed' : 'Not allowed') : 'Not set',
														status: n ? 'success' : 'warning',
														label: t ? (n ? '1' : '0') : 'not set'
													},
													{
														name: 'SDK_GDPR_TARGETING',
														message: i ? (o ? 'Allowed' : 'Not allowed') : 'Not set',
														status: o ? 'success' : 'warning',
														label: i ? (o ? '1' : '0') : 'not set'
													},
													{
														name: 'SDK_GDPR_THIRD_PARTY',
														message: r ? (a ? 'Allowed' : 'Not allowed') : 'Not set',
														status: a ? 'success' : 'warning',
														label: r ? (a ? '1' : '0') : 'not set'
													}
												].forEach(
													function (t) {
														_o(this, e),
															this.eventBus.broadcast(t.name, {
																name: t.name,
																message: t.message,
																status: t.status,
																analytics: {
																	category: t.name,
																	action: this._parentDomain,
																	label: t.label
																}
															});
													}.bind(this)
												);
											}
										},
										{
											key: '_checkGameId',
											value: function () {
												this.options.gameId === this._defaults.gameId &&
													this._sendSDKError(
														'Check correctness of your GAME ID. Otherwise, no revenue will be recorded.'
													);
											}
										},
										{
											key: '_getDefaultGameData',
											value: function () {
												return {
													gameId: this.options.gameId,
													enableAds: !0,
													preroll: !0,
													midroll: 12e4,
													rewardedAds: !1,
													title: '',
													tags: [],
													category: '',
													assets: [],
													sdk: this._getDefaultAdSDKData(),
													loader: this._getDefaultLoaderData(),
													splash: this._getDefaultSplashData(),
													promo: this._getDefaultPromoData(),
													dAds: this._getDefaultDisplayAdsData(),
													pAds: this._getDefaultPrerollAdsData(),
													mAds: this._getDefaultMidrollAdsData(),
													rAds: this._getDefaultRewardedAdsData()
												};
											}
										},
										{
											key: '_getDefaultAdSDKData',
											value: function () {
												return {};
											}
										},
										{
											key: '_getDefaultLoaderData',
											value: function () {
												return {};
											}
										},
										{
											key: '_getDefaultSplashData',
											value: function () {
												return {};
											}
										},
										{
											key: '_getDefaultPromoData',
											value: function () {
												return {};
											}
										},
										{
											key: '_getDefaultDisplayAdsData',
											value: function () {
												return { enabled: !0 };
											}
										},
										{
											key: '_getDefaultPrerollAdsData',
											value: function () {
												return {};
											}
										},
										{
											key: '_getDefaultMidrollAdsData',
											value: function () {
												return {};
											}
										},
										{
											key: '_getDefaultRewardedAdsData',
											value: function () {
												return {};
											}
										},
										{
											key: '_getGameDataUrl',
											value: function () {
												return 'https://game.api.gamedistribution.com/game/v3/get/'
													.concat(this.options.gameId.replace(/-/g, ''), '/?domain=')
													.concat(this._parentDomain, '&v=')
													.concat($o, '&localTime=')
													.concat(new Date().getHours());
											}
										},
										{
											key: '_checkBlocking',
											value:
												((ds = yo(
													bo.mark(function t() {
														var e,
															n,
															i = this;
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			return (
																				(e = !0),
																				(n = this._gameData),
																				(t.next = 4),
																				this.checkAllowedDomain()
																			);
																		case 4:
																			(e = t.sent),
																				((n.bloc_gard && !0 === n.bloc_gard.enabled) || !e) &&
																					(this.msgrt.send('blocked'),
																					setTimeout(
																						function () {
																							_o(this, i),
																								(window.location.href =
																									'https://html5.api.gamedistribution.com/blocked.html?domain='.concat(
																										this._parentDomain
																									));
																						}.bind(this),
																						100
																					));
																		case 6:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this
														);
													})
												)),
												function () {
													return ds.apply(this, arguments);
												})
										},
										{
											key: '_checkGameDeleted',
											value: function () {
												var t = this;
												6 === this._gameData.status &&
													(console.log(
														'%c %c %c This game was deleted, please remove it in your website... ',
														'background: #F2181A',
														'background: #F23818',
														'color: #fff; background: #F23818;',
														'background: #F55E60',
														'background: #F55E60',
														'background: #c4161e; color: #fff;'
													),
													setTimeout(
														function () {
															_o(this, t),
																(document.location =
																	'https://html5.api.gamedistribution.com/deleted.html');
														}.bind(this),
														100
													));
											}
										},
										{
											key: '_changeMidrollInDebugMode',
											value: function () {
												var t = this._gameData;
												Br &&
													Pr('gd_debug_ex') &&
													(Pr('gd_disable_midroll_timer')
														? (t.midroll = 0)
														: (t.midroll = this._getDefaultGameData().midroll));
											}
										},
										{
											key: '_checkSplashAndPromoScreens',
											value: function () {
												this._gameData.loader &&
													!1 === this._gameData.loader.mobile &&
													this._getisMobile() &&
													(this._gameData.loader.enabled = !1);
												var t = this._gameData,
													e = t.gdpr && !0 === t.gdpr.consent,
													n = t.loader,
													i = t.promo;
												this.options.loader.enabled
													? i.enabled
														? this._createPromoBeforeSplash(t, e)
														: n.enabled
														? this._createSplash(t, e)
														: this.onResumeGame(
																'Advertisement(s) are done. Start / resume the game.',
																'success'
														  )
													: n.enabled ||
													  (this._bridge.isTokenGameURL && this._bridge.isExtHostedGameURL) ||
													  (t.preroll
															? this.options.advertisementSettings.autoplay || e
																? i.enabled
																	? this._createPromoBeforeSplash(t, e)
																	: !1 !== n.enabled && this._createSplash(t, e)
																: i.enabled && this._createPromo(t, e)
															: (this.adRequestTimer = Date.now()));
											}
										},
										{
											key: '_initializeVideoAd',
											value:
												((ls = yo(
													bo.mark(function t() {
														var e;
														return bo.wrap(
															function (t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			return (
																				(e = this._gameData).sdk.enabled &&
																					(this.options.advertisementSettings = Dr(
																						this.options.advertisementSettings,
																						e.sdk
																					)),
																				(this.macros = new Yr({ game: e, bridge: this._bridge })),
																				(this.adInstance = new Aa(
																					this.options.flashSettings.adContainerId,
																					this.options.advertisementSettings,
																					{
																						parentURL: this._parentURL,
																						parentDomain: this._parentDomain
																					}
																				)),
																				(this.adInstance.gameId = e.gameId),
																				(this.adInstance.category = e.category),
																				(this.adInstance.tags = e.tags),
																				(this.adInstance.noPreroll = this._bridge.noPreroll),
																				(this.adInstance.macros = this.macros),
																				(this.adInstance.isCoreSDKMode =
																					this._bridge.isCoreSDKMode),
																				(this.adInstance.gameData = e),
																				(t.next = 13),
																				this.adInstance.start()
																			);
																		case 13:
																		case 'end':
																			return t.stop();
																	}
															},
															t,
															this
														);
													})
												)),
												function () {
													return ls.apply(this, arguments);
												})
										},
										{
											key: '_sendSDKReady',
											value: function () {
												var t = 'Everything is ready.';
												this.eventBus.broadcast('SDK_READY', { message: t, status: 'success' });
												try {
													this.options.onInit(t);
												} catch (t) {
													Nr('DEVELOPER_ERROR', t.message, 'warning');
												}
											}
										},
										{
											key: '_sendSDKError',
											value: function (t) {
												(t = t.message ? t : { message: t }),
													this.eventBus.broadcast('SDK_ERROR', {
														message: t.message,
														status: 'error'
													});
												try {
													this.options.onError(t);
												} catch (t) {
													Nr('DEVELOPER_ERROR', t.message, 'warning');
												}
											}
										},
										{
											key: '_onEvent',
											value: function (t) {
												Nr(t.name, t.message, t.status);
												try {
													this.options.onEvent({
														name: t.name,
														message: t.message,
														status: t.status
													});
												} catch (t) {
													Nr('DEVELOPER_ERROR', t.message, 'warning');
												}
											}
										},
										{
											key: '_getGameData',
											value: function () {
												var e = this;
												return new Promise(
													function (n) {
														var i = this;
														_o(this, e);
														var o = this._getDefaultGameData(),
															t = this._getGameDataUrl();
														fetch(t)
															.then(
																function (t) {
																	return _o(this, i), t.json();
																}.bind(this)
															)
															.then(
																function (t) {
																	var e;
																	_o(this, i),
																		t.success
																			? ((t = {
																					gameId: (e = t.result.game).gameMd5,
																					status: e.status,
																					description: e.description,
																					enableAds: e.enableAds,
																					preroll: e.preRoll,
																					midroll: 6e4 * e.timeAds,
																					rewardedAds: e.rewardedAds,
																					title: e.title,
																					tags: e.tags,
																					category: e.category,
																					assets: e.assets,
																					disp_2nd_prer: e.disp_2nd_prer,
																					ctry_vst: e.ctry_vst,
																					ctry: e.ctry,
																					block_exts: this._parseAndSelectRandomOne(e.push_cuda),
																					bloc_gard: this._parseAndSelectRandomOne(e.bloc_gard),
																					cookie: this._parseAndSelectRandomOne(e.cookie),
																					gdpr: this._parseAndSelectRandomOne(e.gdpr),
																					diagnostic: this._parseAndSelectRandomOne(e.diagnostic),
																					sdk:
																						this._parseAndSelectRandomOne(e.sdk) ||
																						this._getDefaultAdSDKData(),
																					loader:
																						this._parseAndSelectRandomOne(e.loader) ||
																						this._getDefaultLoaderData(),
																					splash:
																						this._parseAndSelectRandomOne(e.splash) ||
																						this._getDefaultSplashData(),
																					promo:
																						this._parseAndSelectRandomOne(e.promo) ||
																						this._getDefaultPromoData(),
																					dAds:
																						this._parseAndSelectRandomOne(e.dads) ||
																						this._getDefaultDisplayAdsData(),
																					pAds:
																						this._parseAndSelectRandomOne(e.pads) ||
																						this._getDefaultPrerollAdsData(),
																					mAds:
																						this._parseAndSelectRandomOne(e.mads) ||
																						this._getDefaultMidrollAdsData(),
																					rAds:
																						this._parseAndSelectRandomOne(e.rads) ||
																						this._getDefaultRewardedAdsData()
																			  }),
																			  (e = Dr(fr(o), t)),
																			  (this._bridge.noPreroll =
																					(!this._getisMobile() || !1 !== e.loader.mobile) &&
																					this._bridge.noPreroll),
																			  this._bridge.noPreroll &&
																					(this.adRequestTimer = Date.now()),
																			  this.msgrt.setGameData(e),
																			  (t = e.diagnostic),
																			  (zr = t),
																			  n(e))
																			: ((o.failed = !0), n(o));
																}.bind(this)
															)
															.catch(
																function (t) {
																	_o(this, i), (o.failed = !0), n(o);
																}.bind(this)
															);
													}.bind(this)
												);
											}
										},
										{
											key: 'checkAllowedDomain',
											value: function () {
												var i = this;
												return new Promise(
													function (e) {
														var n = this;
														_o(this, i);
														var t =
															null !== (t = this._topDomain) && void 0 !== t
																? t
																: this._parentDomain;
														fetch(
															'https://game.api.gamedistribution.com/game/v3/checkdomain/'
																.concat(t, '?correlator=')
																.concat(Date.now())
														)
															.then(
																function (t) {
																	return _o(this, n), t.json();
																}.bind(this)
															)
															.then(
																function (t) {
																	_o(this, n), !0 === t.success && !0 === t.result && e(!0), e(!1);
																}.bind(this)
															);
													}.bind(this)
												);
											}
										},
										{
											key: '_createSplash',
											value: function (t, n) {
												var i = this,
													e = new (this._getSplashTemplate(t))(
														rs(rs({}, this.options), {}, { isConsentDomain: n, version: $o }),
														t,
														this._parentDomain
													);
												e.on(
													'playClick',
													function () {
														var t,
															e = this;
														_o(this, i),
															n &&
																((t = new Date()).setDate(t.getDate() + 90),
																(document.cookie = 'ogdpr_tracking=1; expires='.concat(
																	t.toUTCString(),
																	'; path=/'
																))),
															this.showAd(Sr.Interstitial).catch(
																function (t) {
																	_o(this, e);
																}.bind(this)
															);
													}.bind(this)
												),
													e.on(
														'slotVisibilityChanged',
														function (t) {
															_o(this, i);
														}.bind(this)
													),
													this.onPauseGame('Pause the game and wait for a user gesture', 'success'),
													this.eventBus.subscribe(
														'SDK_GAME_PAUSE',
														function () {
															_o(this, i), e.hide();
														}.bind(this)
													),
													this.eventBus.subscribe(
														'SDK_GAME_START',
														function () {
															_o(this, i), e.hide();
														}.bind(this)
													);
											}
										},
										{
											key: '_createPromoBeforeSplash',
											value: function (t, e) {
												var n = this,
													i = new (this._getPromoTemplate(t))(
														rs(rs({}, this.options), {}, { isConsentDomain: e, version: $o }),
														t
													);
												i.on(
													'skipClick',
													function () {
														_o(this, n), i.hide(), this._createSplash(t, e);
													}.bind(this)
												);
											}
										},
										{
											key: '_createPromo',
											value: function (t, e) {
												var n = this,
													i = new (this._getPromoTemplate(t))(
														rs(rs({}, this.options), {}, { isConsentDomain: e, version: $o }),
														t
													);
												i.on(
													'skipClick',
													function () {
														_o(this, n),
															i.hide(),
															this.onResumeGame('Resumed after the promo', 'warning');
													}.bind(this)
												),
													this.onPauseGame('Pause the game for the promo', 'success');
											}
										},
										{
											key: 'showBanner',
											value: function () {
												var e = this;
												this.showAd(Sr.Interstitial).catch(
													function (t) {
														_o(this, e);
													}.bind(this)
												);
											}
										},
										{
											key: 'showAd',
											value:
												((cs = yo(
													bo.mark(function t(l, d) {
														var u = this;
														return bo.wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return t.abrupt(
																			'return',
																			new Promise(
																				(function () {
																					var n = yo(
																						bo.mark(function t(r, a) {
																							var s,
																								i,
																								o,
																								e,
																								n,
																								c = this;
																							return bo.wrap(
																								function (t) {
																									for (;;)
																										switch ((t.prev = t.next)) {
																											case 0:
																												return (
																													(t.prev = 0),
																													u._sendLoadedEvent(),
																													(t.next = 4),
																													u.sdkReady
																												);
																											case 4:
																												if (
																													(s = t.sent).bloc_gard &&
																													!0 === s.bloc_gard.enabled
																												)
																													throw new Error(
																														'Game or domain is blocked.'
																													);
																												t.next = 7;
																												break;
																											case 7:
																												if (!s.enableAds || u._whitelabelPartner)
																													throw new Error(
																														'Advertisements are disabled.'
																													);
																												t.next = 9;
																												break;
																											case 9:
																												if (l) {
																													t.next = 13;
																													break;
																												}
																												(l = Sr.Interstitial), (t.next = 15);
																												break;
																											case 13:
																												if (
																													l !== Sr.Interstitial &&
																													l !== Sr.Rewarded
																												)
																													throw new Error(
																														'Unsupported an advertisement type: ',
																														l
																													);
																												t.next = 15;
																												break;
																											case 15:
																												if (l !== Sr.Rewarded || s.rewardedAds) {
																													t.next = 17;
																													break;
																												}
																												throw new Error(
																													'Rewarded ads are disabled.'
																												);
																											case 17:
																												if (
																													l !== Sr.Interstitial ||
																													void 0 === u.adRequestTimer
																												) {
																													t.next = 21;
																													break;
																												}
																												if (
																													Date.now() - u.adRequestTimer <
																													s.midroll
																												)
																													throw new Error(
																														'The advertisement was requested too soon.'
																													);
																												t.next = 21;
																												break;
																											case 21:
																												return (
																													(i = 'main.showad'),
																													(o = function (i) {
																														var o = this;
																														_o(this, c),
																															u.adInstance.resetForNext(),
																															u
																																.showAd(l, i)
																																.then(
																																	function (t) {
																																		_o(this, o),
																																			(u.adRequestTimer =
																																				Date.now()),
																																			u.onResumeGame(
																																				'Advertisement(s) are done. Start / resume the game.',
																																				'success'
																																			),
																																			r('');
																																	}.bind(this)
																																)
																																.catch(
																																	function (t) {
																																		var e,
																																			n = this;
																																		_o(this, o),
																																			i.retry_on_success
																																				? ((u.adRequestTimer =
																																						Date.now()),
																																				  u.onResumeGame(
																																						'Advertisement(s) are done. Start / resume the game.',
																																						'success'
																																				  ),
																																				  r(''))
																																				: i.retry_on_failure &&
																																				  (e =
																																						(s.promo || {})
																																							.puzzle || {})
																																						.enabled &&
																																				  ((e.trigger
																																						.interstitial_failure &&
																																						l ===
																																							Sr.Interstitial) ||
																																						(e.trigger
																																							.rewarded_failure &&
																																							l === Sr.Rewarded))
																																				? u
																																						._showPromoDisplayAd()
																																						.then(
																																							function (t) {
																																								_o(this, n),
																																									u.onResumeGame(
																																										'DisplayAd succeded.',
																																										'success'
																																									),
																																									r(
																																										'DisplayAd succeded.'
																																									);
																																							}.bind(this)
																																						)
																																						.catch(
																																							function (t) {
																																								_o(this, n),
																																									u.onResumeGame(
																																										'DisplayAd failed.',
																																										'warning'
																																									),
																																									a(
																																										'DisplayAd failed.'
																																									);
																																							}.bind(this)
																																						)
																																				: (u.onResumeGame(
																																						t.message || t,
																																						'warning'
																																				  ),
																																				  a(t.message || t));
																																	}.bind(this)
																																);
																													}.bind(this)),
																													(e = function (t) {
																														var e,
																															n = this;
																														_o(this, c),
																															u.eventBus.unsubscribeScope(i),
																															void 0 !== d
																																? a(t.message)
																																: u._isRetryOnFailureEnabled(l)
																																? o({ retry_on_failure: !0 })
																																: ((u.adRequestTimer = Date.now()),
																																  (e = (s.promo || {}).puzzle || {})
																																		.enabled &&
																																  ((e.trigger
																																		.interstitial_failure &&
																																		l === Sr.Interstitial) ||
																																		(e.trigger.rewarded_failure &&
																																			l === Sr.Rewarded))
																																		? u
																																				._showPromoDisplayAd()
																																				.then(
																																					function (t) {
																																						_o(this, n),
																																							u.onResumeGame(
																																								'DisplayAd succeded.',
																																								'success'
																																							),
																																							r(
																																								'DisplayAd succeded.'
																																							);
																																					}.bind(this)
																																				)
																																				.catch(
																																					function (t) {
																																						_o(this, n),
																																							u.onResumeGame(
																																								'DisplayAd failed.',
																																								'warning'
																																							),
																																							a(
																																								'DisplayAd failed.'
																																							);
																																					}.bind(this)
																																				)
																																		: (mr(u._gameData.promo) &&
																																				u._gameData.promo.puzzle
																																					.enableAfterPreroll &&
																																				(u._gameData.promo.puzzle.enabled =
																																					!0),
																																		  u.onResumeGame(
																																				t.message,
																																				'warning'
																																		  ),
																																		  a(t.message)));
																													}.bind(this)),
																													(n = function (t) {
																														_o(this, c),
																															u.eventBus.unsubscribeScope(i),
																															void 0 !== d
																																? r(t.message)
																																: u._isRetryOnSuccessEnabled(l)
																																? o({ retry_on_success: !0 })
																																: ((u.adRequestTimer = Date.now()),
																																  u.onResumeGame(
																																		'Advertisement(s) are done. Start / resume the game.',
																																		'success'
																																  ),
																																  r(t.message));
																													}.bind(this)),
																													u.eventBus.subscribe('AD_ERROR', e, i),
																													u.eventBus.subscribe(
																														'AD_SDK_CANCELED',
																														e,
																														i
																													),
																													u.eventBus.subscribe('AD_SUCCESS', n, i),
																													(t.next = 30),
																													u.adInstance.startAd(l, d)
																												);
																											case 30:
																												t.next = 36;
																												break;
																											case 32:
																												(t.prev = 32),
																													(t.t0 = t.catch(0)),
																													u.onResumeGame(t.t0.message, 'warning'),
																													a(t.t0.message);
																											case 36:
																											case 'end':
																												return t.stop();
																										}
																								},
																								t,
																								this,
																								[[0, 32]]
																							);
																						})
																					);
																					return function (t, e) {
																						return n.apply(this, arguments);
																					};
																				})()
																			)
																		);
																	case 1:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												)),
												function (t, e) {
													return cs.apply(this, arguments);
												})
										},
										{
											key: '_isRetryOnSuccessEnabled',
											value: function (t) {
												var e = this._gameData,
													n = this.adInstance.getAdPosition(t),
													t =
														e.sdk.enabled &&
														(!0 === e.sdk.retry_on_success || mr(e.sdk.retry_on_success));
												return (
													'preroll' === n && void 0 !== e.pAds.retry_on_success
														? (t = t && e.pAds.retry_on_success)
														: 'midroll' === n && void 0 !== e.mAds.retry_on_success
														? (t = t && e.mAds.retry_on_success)
														: 'rewarded' === n &&
														  void 0 !== e.rAds.retry_on_success &&
														  (t = t && e.rAds.retry_on_success),
													t
												);
											}
										},
										{
											key: '_isRetryOnFailureEnabled',
											value: function (t) {
												var e = this._gameData,
													n = this.adInstance.getAdPosition(t),
													t =
														e.sdk.enabled &&
														(!0 === e.sdk.retry_on_failure || mr(e.sdk.retry_on_failure));
												return (
													'preroll' === n && void 0 !== e.pAds.retry_on_failure
														? (t = t && e.pAds.retry_on_failure)
														: 'midroll' === n && void 0 !== e.mAds.retry_on_failure
														? (t = t && e.mAds.retry_on_failure)
														: 'rewarded' === n &&
														  void 0 !== e.rAds.retry_on_failure &&
														  (t = t && e.rAds.retry_on_failure),
													t
												);
											}
										},
										{
											key: 'preloadAd',
											value:
												((ss = yo(
													bo.mark(function t(r) {
														var a = this;
														return bo.wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return t.abrupt(
																			'return',
																			new Promise(
																				(function () {
																					var n = yo(
																						bo.mark(function t(e, n) {
																							var i, o;
																							return bo.wrap(
																								function (t) {
																									for (;;)
																										switch ((t.prev = t.next)) {
																											case 0:
																												return (
																													(t.prev = 0), (t.next = 3), a.sdkReady
																												);
																											case 3:
																												if (
																													(i = t.sent).bloc_gard &&
																													!0 === i.bloc_gard.enabled
																												)
																													throw new Error(
																														'Game or domain is blocked.'
																													);
																												t.next = 6;
																												break;
																											case 6:
																												if (!i.enableAds || a._whitelabelPartner)
																													throw new Error(
																														'Advertisements are disabled.'
																													);
																												t.next = 8;
																												break;
																											case 8:
																												if (r) {
																													t.next = 12;
																													break;
																												}
																												(r = Sr.Rewarded), (t.next = 14);
																												break;
																											case 12:
																												if (
																													r !== Sr.Interstitial &&
																													r !== Sr.Rewarded
																												)
																													throw new Error(
																														'Unsupported an advertisement type:' + r
																													);
																												t.next = 14;
																												break;
																											case 14:
																												if (r !== Sr.Rewarded || i.rewardedAds) {
																													t.next = 16;
																													break;
																												}
																												throw new Error(
																													'Rewarded ads are disabled.'
																												);
																											case 16:
																												return (
																													(t.next = 18), a.adInstance.preloadAd(r)
																												);
																											case 18:
																												(o = t.sent), e(o), (t.next = 25);
																												break;
																											case 22:
																												(t.prev = 22), (t.t0 = t.catch(0)), n(t.t0);
																											case 25:
																											case 'end':
																												return t.stop();
																										}
																								},
																								t,
																								null,
																								[[0, 22]]
																							);
																						})
																					);
																					return function (t, e) {
																						return n.apply(this, arguments);
																					};
																				})()
																			)
																		);
																	case 1:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												)),
												function (t) {
													return ss.apply(this, arguments);
												})
										},
										{
											key: 'cancelAd',
											value:
												((as = yo(
													bo.mark(function t() {
														var i = this;
														return bo.wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return t.abrupt(
																			'return',
																			new Promise(
																				(function () {
																					var n = yo(
																						bo.mark(function t(e, n) {
																							return bo.wrap(function (t) {
																								for (;;)
																									switch ((t.prev = t.next)) {
																										case 0:
																											try {
																												i.adInstance.cancel(),
																													i.onResumeGame(
																														'Advertisement(s) are cancelled. Start / resume the game.',
																														'success'
																													),
																													n();
																											} catch (t) {
																												i.onResumeGame(
																													'Advertisement(s) are cancelled. Start / resume the game.',
																													'success'
																												),
																													e(t.message);
																											}
																										case 1:
																										case 'end':
																											return t.stop();
																									}
																							}, t);
																						})
																					);
																					return function (t, e) {
																						return n.apply(this, arguments);
																					};
																				})()
																			)
																		);
																	case 1:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												)),
												function () {
													return as.apply(this, arguments);
												})
										},
										{
											key: 'showDisplayAd',
											value: function (i) {
												var n,
													o = this;
												return new Promise(
													((n = yo(
														bo.mark(function t(e, n) {
															return bo.wrap(
																function (t) {
																	for (;;)
																		switch ((t.prev = t.next)) {
																			case 0:
																				return (t.prev = 0), (t.next = 3), o.sdkReady;
																			case 3:
																				if (t.sent.dAds.enabled)
																					return (t.next = 7), o.adInstance.loadDisplayAd(i);
																				t.next = 10;
																				break;
																			case 7:
																				e(), (t.next = 11);
																				break;
																			case 10:
																				n('Display-Ads are disabled.');
																			case 11:
																				t.next = 16;
																				break;
																			case 13:
																				(t.prev = 13), (t.t0 = t.catch(0)), n(t.t0.message || t.t0);
																			case 16:
																			case 'end':
																				return t.stop();
																		}
																},
																t,
																null,
																[[0, 13]]
															);
														})
													)),
													function (t, e) {
														return n.apply(this, arguments);
													})
												);
											}
										},
										{
											key: 'onResumeGame',
											value: function (t, e) {
												this._allowExternals({ enabled: !1 });
												try {
													this.options.resumeGame();
												} catch (t) {
													Nr('DEVELOPER_ERROR', t.message, 'warning');
												}
												var n = 'SDK_GAME_START';
												this.eventBus.broadcast(n, {
													name: n,
													message: t,
													status: e,
													analytics: { category: 'SDK', action: n, label: this.options.gameId + '' }
												});
											}
										},
										{
											key: 'onPauseGame',
											value: function (t, e) {
												this._allowExternals({ enabled: !0 });
												try {
													this.options.pauseGame();
												} catch (t) {
													Nr('DEVELOPER_ERROR', t.message, 'warning');
												}
												var n = 'SDK_GAME_PAUSE';
												this.eventBus.broadcast(n, {
													name: n,
													message: t,
													status: e,
													analytics: { category: 'SDK', action: n, label: this.options.gameId + '' }
												});
											}
										},
										{
											key: 'openConsole',
											value: function () {
												try {
													new Jr(this).start(), jr('gd_debug_ex', !0);
												} catch (t) {
													console.log(t);
												}
											}
										},
										{
											key: '_initBlockingExternals',
											value: function () {
												var t = this._gameData;
												(t.failed || (t.block_exts && t.block_exts.enabled)) &&
													((this.window_open = window.open),
													this._allowExternals({ enabled: !1 }),
													this._removeExternalsInHtml({ enabled: !1 }));
											}
										},
										{
											key: '_allowExternals',
											value: function (t) {
												var e = this;
												void 0 !== this.window_open &&
													(!1 === t.enabled
														? (window.open = function (t) {
																_o(this, e),
																	this.msgrt.send('external', { message: 'C> '.concat(t) }),
																	(t.startsWith('https://play.google.com') ||
																		t.startsWith('https://itunes.apple.com')) &&
																		this.window_open.call(null, t);
														  }.bind(this))
														: (window.open = this.window_open));
											}
										},
										{
											key: '_removeExternalsInHtml',
											value: function (t) {
												var o = this;
												!1 === t.enabled &&
													window.document.querySelectorAll('a').forEach(
														function (t) {
															var e = this;
															_o(this, o);
															var n = !!(
																	t.innerText.toLowerCase().includes('start') ||
																	t.innerText.toLowerCase().includes('play') ||
																	t.innerText.toLowerCase().includes('continue')
																),
																i = t.getAttribute('href');
															t.removeAttribute('href'),
																n ||
																	(t.onclick = function (t) {
																		return (
																			_o(this, e),
																			t.preventDefault(),
																			this.msgrt.send('external', { message: 'H> '.concat(i) }),
																			!1
																		);
																	}.bind(this));
														}.bind(this)
													);
											}
										},
										{
											key: '_getBridgeContext',
											value: function () {
												var t,
													e,
													n = this._isTokenGameURL(),
													i = this._isMasterGameURL(),
													o = this._isExtHostedGameURL(),
													r = (r = n || o ? this._getTokenGameURLConfig() : {}) || {},
													a =
														(n || o) && r.parentURL
															? r.parentURL
															: (function () {
																	var t = Tr();
																	if (t.gd_sdk_referrer_url) return t.gd_sdk_referrer_url;
																	var e =
																		window.location !== window.parent.location &&
																		document.referrer &&
																		'' !== document.referrer
																			? document.referrer
																			: document.location.href;
																	return (
																		-1 !== document.referrer.indexOf('gameplayer.io')
																			? ((e = 'https://gamedistribution.com'),
																			  (t = Rr('ref', document.referrer)) &&
																					'' !== t &&
																					'{portal%20name}' !== t &&
																					'{spilgames}' !== t &&
																					'{portal name}' !== t &&
																					((e = Lr(t).replace(/^(?:https?:\/\/)?(?:\/\/)?/i, '')),
																					(e = 'https://'.concat(e))))
																			: -1 !== document.referrer.indexOf('localhost') &&
																			  (e = 'https://gamedistribution.com/'),
																		e
																	);
															  })(),
													s =
														(n || o) && r.parentDomain
															? r.parentDomain
															: ((t = Tr()),
															  (e = (
																	t.gd_sdk_referrer_url ||
																	(window.location !== window.parent.location &&
																	document.referrer &&
																	'' !== document.referrer
																		? document.referrer.split('/')[2]
																		: document.location.host)
															  )
																	.replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, '')
																	.split('/')[0]),
															  -1 !== document.referrer.indexOf('gameplayer.io')
																	? ((e = 'gamedistribution.com'),
																	  (t = Rr('ref', document.referrer)) &&
																			'' !== t &&
																			'{portal%20name}' !== t &&
																			'{spilgames}' !== t &&
																			'{portal name}' !== t &&
																			(e = Lr(t)
																				.replace(/^(?:https?:\/\/)?(?:\/\/)?(?:www\.)?/i, '')
																				.split('/')[0]))
																	: -1 !== document.referrer.indexOf('localhost') &&
																	  (e = 'gamedistribution.com'),
															  e),
													t =
														(n || o) && r.topDomain
															? r.topDomain
															: (function () {
																	var t = Or();
																	if (0 === t) return location.host.replace(/^www\.(.*)$/i, '$1');
																	if (
																		location.ancestorOrigins &&
																		0 < location.ancestorOrigins.length
																	)
																		return location.ancestorOrigins[
																			location.ancestorOrigins.length - 1
																		].replace(/^https?:\/\/(www\.)?(.*)$/i, '$2');
																	if (1 === t) {
																		t = (function (t) {
																			if (t && '' !== t)
																				try {
																					return new hr(t);
																				} catch (t) {}
																		})(document.referrer);
																		if (t) return t.host.replace(/^www\.(.*)$/i, '$1');
																	}
															  })(),
													e =
														(t && -1 !== t.indexOf('girlsgogames.')) ||
														(s && -1 !== s.indexOf('girlsgogames.'));
												return {
													isCoreSDKMode: e,
													isTokenGameURL: n,
													isMasterGameURL: i,
													isExtHostedGameURL: o,
													noConsoleBanner: e || ((n || o) && r.loaderEnabled),
													noViewEvent: e || ((n || o) && r.loaderEnabled),
													noLoadedEvent: e || ((n || o) && r.loaderEnabled),
													noBlockerEvent: e || ((n || o) && r.loaderEnabled),
													noPreroll: e || ((n || o) && r.loaderEnabled),
													parentURL: a,
													parentDomain: s,
													topDomain: t,
													noGAPageView: e || ((n || o) && r.loaderEnabled),
													noLotamePageView: e || ((n || o) && r.loaderEnabled),
													noGamedockSDK: e || ((n || o) && r.loaderEnabled),
													noMinijuegosSDK: e || ((n || o) && r.loaderEnabled),
													version: r.version,
													pauseGameOnStartup:
														(n || o) && r.loaderEnabled && r.hasImpression && '1.1.24' <= r.version,
													depth: Or(),
													domainMatched: s === t,
													exports: { formatTokenURLSearch: this._formatTokenURLSearch.bind(this) }
												};
											}
										},
										{
											key: '_isMasterGameURL',
											value: function () {
												var t =
													/http[s]?:\/\/(html5\.gamedistribution\.com\/[A-Fa-f0-9]{32})(.*)$/i;
												return (
													t.test(location.href) ||
													(!this._isTokenGameURL() && t.test(document.referrer))
												);
											}
										},
										{
											key: '_isTokenGameURL',
											value: function () {
												var t =
													/http[s]?:\/\/(html5\.gamedistribution\.com\/[A-Za-z0-9]{8})\/(.*)$/i;
												return t.test(location.href) || t.test(document.referrer);
											}
										},
										{
											key: '_isExtHostedGameURL',
											value: function () {
												var t = /^http[s]?:\/\/.*?gd_sdk_referrer_url=.*$/i;
												return t.test(location.href) || t.test(document.referrer);
											}
										},
										{
											key: '_getTokenGameURLConfig',
											value: function () {
												try {
													var t,
														e =
															/http[s]?:\/\/html5\.gamedistribution\.com\/[A-Za-z0-9]{8}\/[A-Fa-f0-9]{32}\/.*/i;
													if (e.test(location.href)) {
														var n = new hr(location.href, !0);
														if (!n.query.gd_zone_config) return;
														t = n.query.gd_zone_config;
													} else if (e.test(document.referrer)) {
														var i = new hr(document.referrer, !0);
														if (!i.query.gd_zone_config) return;
														t = i.query.gd_zone_config;
													} else {
														i = new hr(location.href, !0);
														if (!i.query.gd_zone_config) return;
														t = i.query.gd_zone_config;
													}
													return JSON.parse(Ar.Base64.decode(decodeURIComponent(t)));
												} catch (t) {}
											}
										},
										{
											key: '_getSplashTemplate',
											value: function (t) {
												t = t.splash;
												return 'quantum' === t.template
													? $a
													: 'pluto' === t.template
													? Wa
													: 'rocket' === t.template
													? Ya
													: 'admeen' === t.template
													? Va
													: 'talpa' === t.template
													? Za
													: 'saturn' === t.template
													? Qa
													: 'impostor' === t.template
													? Ja
													: Wa;
											}
										},
										{
											key: '_getPromoTemplate',
											value: function (t) {
												return ns;
											}
										},
										{
											key: '_formatTokenURLSearch',
											value: function (t) {
												var e = '';
												try {
													e = encodeURIComponent(Ar.Base64.encode(JSON.stringify(t)));
												} catch (t) {}
												try {
													var n = new hr(location.href, !0);
													return (
														(n.query = n.query || {}),
														(n.query.gd_zone_config = e),
														'?'.concat(ir.stringify(n.query))
													);
												} catch (t) {
													return '?gd_zone_config='.concat(e);
												}
											}
										},
										{
											key: '_parseAndSelectRandomOne',
											value: function (t) {
												t = this._selectRandomOne(
													(function (t) {
														if (t)
															try {
																return JSON.parse(t);
															} catch (t) {}
													})(t)
												);
												return !t || !t.version || $o >= t.version ? t : void 0;
											}
										},
										{
											key: '_selectRandomOne',
											value: function (t) {
												var e = this;
												if (!wr(t) || 0 === t.length) return t;
												if (1 === t.length) return t[0];
												var n = 0;
												t.forEach(
													function (t) {
														_o(this, e), (t.weight = t.weight || 1), (n += t.weight);
													}.bind(this)
												);
												for (
													var i = Math.floor(Math.random() * Math.floor(n)), n = 0, o = 0;
													o < t.length;
													o++
												) {
													var r = t[o];
													if (i < (n += r.weight)) return r;
												}
											}
										},
										{
											key: 'session',
											value: function () {
												var n,
													o = this;
												return new Promise(
													((n = yo(
														bo.mark(function t(e, n) {
															var i;
															return bo.wrap(
																function (t) {
																	for (;;)
																		switch ((t.prev = t.next)) {
																			case 0:
																				return (t.prev = 0), (t.next = 3), o.sdkReady;
																			case 3:
																				t.next = 7;
																				break;
																			case 5:
																				(t.prev = 5), (t.t0 = t.catch(0));
																			case 7:
																				(i = o._gameData),
																					e({
																						ads: { display: { enabled: i.dAds.enabled } },
																						location: {
																							parentDomain: o._bridge.parentDomain,
																							topDomain: o._bridge.topDomain,
																							parentURL: o._bridge.parentURL,
																							depth: o._bridge.depth,
																							loadedByGameZone: o._bridge.isTokenGameURL
																						}
																					});
																			case 9:
																			case 'end':
																				return t.stop();
																		}
																},
																t,
																null,
																[[0, 5]]
															);
														})
													)),
													function (t, e) {
														return n.apply(this, arguments);
													})
												);
											}
										},
										{
											key: '_showPromoDisplayAd',
											value: function () {
												var s = this;
												return new Promise(
													function (t, e) {
														var n = this;
														_o(this, s);
														var i = this._gameData,
															o = new is(rs(rs({}, this.options), {}, { version: $o }), i),
															r = 'promo-display';
														this.eventBus.unsubscribeScope(r);
														var a = function () {
																_o(this, n), this.eventBus.unsubscribeScope(r), o.show();
															}.bind(this),
															i = function () {
																_o(this, n),
																	this.eventBus.unsubscribeScope(r),
																	o.hide(),
																	e('No promo display ad');
															}.bind(this);
														this.eventBus.subscribe('DISPLAYAD_IMPRESSION', a, r),
															this.eventBus.subscribe('DISPLAYAD_ERROR', i, r),
															this.showDisplayAd({
																containerId: o.getSlotContainerId(),
																slotId: o.getSlotId(),
																visible: !0
															}).catch(
																function (t) {
																	_o(this, n), o.hide(), e(t);
																}.bind(this)
															),
															o.on(
																'skipClick',
																function () {
																	_o(this, n), o.hide(), t();
																}.bind(this)
															),
															o.on(
																'adCompleted',
																function () {
																	_o(this, n), o.hide(), t();
																}.bind(this)
															);
													}.bind(this)
												);
											}
										},
										{
											key: '_getisMobile',
											value: function () {
												var t = !1,
													e = navigator.userAgent || navigator.vendor || window.opera;
												return (t =
													!1 ===
														(t =
															/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
																e
															) ||
															/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
																e.substr(0, 4)
															)
																? !0
																: t) && -1 < window.orientation
														? !0
														: t);
											}
										}
									]),
									new fs(
										((He =
											'object' ===
												('undefined' == typeof GD_OPTIONS ? 'undefined' : n(GD_OPTIONS)) &&
											GD_OPTIONS
												? GD_OPTIONS
												: window.gdApi &&
												  'object' === n(window.gdApi.q[0][0]) &&
												  window.gdApi.q[0][0]
												? window.gdApi.q[0][0]
												: {}),
										window.gdApi &&
											'object' === n(window.gdApi.q[0][0]) &&
											window.gdApi.q[0][0] &&
											(He.hasOwnProperty('advertisementSettings') ||
												(He.advertisementSettings = { autoplay: !0 })),
										He)
									));
							function fs(t) {
								var n = this;
								if ((xo(this, fs), ps)) return ps;
								((ps = this)._defaults = this._getDefaultOptions()),
									this._extendDefaultOptions(this._defaults, t),
									(this._version = t.version || '0.0.0'),
									(this._bridge = this._getBridgeContext()),
									(this._parentURL = this._bridge.parentURL),
									(this._parentDomain = this._bridge.parentDomain),
									(this._topDomain = this._bridge.topDomain),
									this._setConsoleBanner(),
									this._checkUserDeclinedTracking(),
									this._checkWhitelabelPartner(),
									this._bridge.isCoreSDKMode || this._loadGoogleAnalytics(),
									this._bridge.isCoreSDKMode ||
										this._bridge.noGamedockSDK ||
										this._loadGamedockTracker(),
									!this._bridge.isCoreSDKMode &&
										!this._bridge.noMinijuegosSDK &&
										0 <= document.location.search.indexOf('mp_game_id') &&
										this._loadMiniJuegosGratisTracker(),
									this._initializeMessageRouter(),
									this._checkConsole(),
									this._subscribeToEvents(),
									this._gdpr(),
									(this.sdkReady = new Promise(this._initializeSDKWithGameData.bind(this))),
									this.sdkReady
										.then(
											function (t) {
												_o(this, n), (this._sdk_ready = !0);
											}.bind(this)
										)
										.catch(
											function (t) {
												_o(this, n), (this._sdk_ready = !1);
											}.bind(this)
										)
										.finally(
											function () {
												var e = this;
												_o(this, n),
													this._sendViewEvent(),
													this._sendLoaderDataEvent(),
													this._checkSplashAndPromoScreens(),
													this._initBlockingExternals(),
													window.addEventListener(
														'DOMNodeInserted',
														function () {
															var t;
															_o(this, e),
																this._gameData.block_exts &&
																	this._removeExternalsInHtml({ enabled: !1 }),
																document.getElementsByClassName('webgl-content')[0] &&
																	(t = document
																		.getElementsByClassName('webgl-content')[0]
																		.getElementsByClassName('footer')[0]) &&
																	t.setAttribute('style', 'display:none');
														}.bind(this)
													);
											}.bind(this)
										);
							}
							function gs() {
								(this.AdType = Sr),
									(this.preloadAd = function (t) {
										return hs.preloadAd(t);
									}),
									(this.showAd = function (t, e) {
										return t === Sr.Display ? hs.showDisplayAd(e) : hs.showAd(t);
									}),
									(this.cancelAd = function () {
										return hs.cancelAd();
									}),
									(this.openConsole = function () {
										hs.openConsole();
									}),
									(this.getSession = function () {
										return hs.session();
									});
							}
							(gs.prototype = new (function () {
								(this.showBanner = function () {
									hs.showBanner();
								}),
									(this.play = function () {}),
									(this.customLog = function () {});
							})()),
								(window.gdsdk = new gs()),
								(window.gdApi = window.gdsdk);
						})();
					}.call(this);
				}.call(
					this,
					'undefined' != typeof global
						? global
						: 'undefined' != typeof self
						? self
						: 'undefined' != typeof window
						? window
						: {}
				);
			},
			{}
		],
		2: [
			function (t, e, n) {
				'use strict';
				t('@bygd/gd-sdk-pes/dist/default');
			},
			{ '@bygd/gd-sdk-pes/dist/default': 1 }
		]
	},
	{},
	[2]
);
