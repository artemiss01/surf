(() => {
  var e = {
      807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                      Object.prototype.hasOwnProperty.call(i, s) &&
                        (e[s] = i[s]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            i =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            s = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: i || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            l = function (t) {
              return e({}, a, t);
            },
            o = function (e, t) {
              var i,
                s = "LazyLoad::Initialized",
                n = new e(t);
              try {
                i = new CustomEvent(s, { detail: { instance: n } });
              } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  s,
                  !1,
                  !1,
                  { instance: n },
                );
              }
              window.dispatchEvent(i);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            p = "poster",
            h = "llOriginalAttrs",
            f = "data",
            m = "loading",
            v = "loaded",
            g = "applied",
            b = "error",
            w = "native",
            y = "data-",
            E = "ll-status",
            x = function (e, t) {
              return e.getAttribute(y + t);
            },
            S = function (e) {
              return x(e, E);
            },
            T = function (e, t) {
              return (function (e, t, i) {
                var s = "data-ll-status";
                null !== i ? e.setAttribute(s, i) : e.removeAttribute(s);
              })(e, 0, t);
            },
            C = function (e) {
              return T(e, null);
            },
            L = function (e) {
              return null === S(e);
            },
            M = function (e) {
              return S(e) === w;
            },
            O = [m, v, g, b],
            k = function (e, t, i, s) {
              e &&
                (void 0 === s ? (void 0 === i ? e(t) : e(t, i)) : e(t, i, s));
            },
            A = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            _ = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            P = function (e) {
              return e.llTempImage;
            },
            z = function (e, t) {
              if (t) {
                var i = t._observer;
                i && i.unobserve(e);
              }
            },
            I = function (e, t) {
              e && (e.loadingCount += t);
            },
            N = function (e, t) {
              e && (e.toLoadCount = t);
            },
            W = function (e) {
              for (var t, i = [], s = 0; (t = e.children[s]); s += 1)
                "SOURCE" === t.tagName && i.push(t);
              return i;
            },
            D = function (e, t) {
              var i = e.parentNode;
              i && "PICTURE" === i.tagName && W(i).forEach(t);
            },
            B = function (e, t) {
              W(e).forEach(t);
            },
            G = [c],
            $ = [c, p],
            R = [c, d, u],
            V = [f],
            H = function (e) {
              return !!e[h];
            },
            F = function (e) {
              return e[h];
            },
            q = function (e) {
              return delete e[h];
            },
            j = function (e, t) {
              if (!H(e)) {
                var i = {};
                t.forEach(function (t) {
                  i[t] = e.getAttribute(t);
                }),
                  (e[h] = i);
              }
            },
            X = function (e, t) {
              if (H(e)) {
                var i = F(e);
                t.forEach(function (t) {
                  !(function (e, t, i) {
                    i ? e.setAttribute(t, i) : e.removeAttribute(t);
                  })(e, t, i[t]);
                });
              }
            },
            Y = function (e, t, i) {
              A(e, t.class_applied),
                T(e, g),
                i &&
                  (t.unobserve_completed && z(e, t),
                  k(t.callback_applied, e, i));
            },
            U = function (e, t, i) {
              A(e, t.class_loading),
                T(e, m),
                i && (I(i, 1), k(t.callback_loading, e, i));
            },
            K = function (e, t, i) {
              i && e.setAttribute(t, i);
            },
            Z = function (e, t) {
              K(e, u, x(e, t.data_sizes)),
                K(e, d, x(e, t.data_srcset)),
                K(e, c, x(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                D(e, function (e) {
                  j(e, R), Z(e, t);
                }),
                  j(e, R),
                  Z(e, t);
              },
              IFRAME: function (e, t) {
                j(e, G), K(e, c, x(e, t.data_src));
              },
              VIDEO: function (e, t) {
                B(e, function (e) {
                  j(e, G), K(e, c, x(e, t.data_src));
                }),
                  j(e, $),
                  K(e, p, x(e, t.data_poster)),
                  K(e, c, x(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                j(e, V), K(e, f, x(e, t.data_src));
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                k(e.callback_finish, t);
            },
            te = function (e, t, i) {
              e.addEventListener(t, i), (e.llEvLisnrs[t] = i);
            },
            ie = function (e, t, i) {
              e.removeEventListener(t, i);
            },
            se = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (se(e)) {
                var t = e.llEvLisnrs;
                for (var i in t) {
                  var s = t[i];
                  ie(e, i, s);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, i) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                I(i, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(i),
                _(e, t.class_loading),
                t.unobserve_completed && z(e, i);
            },
            ae = function (e, t, i) {
              var s = P(e) || e;
              se(s) ||
                (function (e, t, i) {
                  se(e) || (e.llEvLisnrs = {});
                  var s = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, s, t), te(e, "error", i);
                })(
                  s,
                  function (n) {
                    !(function (e, t, i, s) {
                      var n = M(t);
                      re(t, i, s),
                        A(t, i.class_loaded),
                        T(t, v),
                        k(i.callback_loaded, t, s),
                        n || ee(i, s);
                    })(0, e, t, i),
                      ne(s);
                  },
                  function (n) {
                    !(function (e, t, i, s) {
                      var n = M(t);
                      re(t, i, s),
                        A(t, i.class_error),
                        T(t, b),
                        k(i.callback_error, t, s),
                        i.restore_on_error && X(t, R),
                        n || ee(i, s);
                    })(0, e, t, i),
                      ne(s);
                  },
                );
            },
            le = function (e, t, i) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, i) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      ae(e, t, i),
                      (function (e) {
                        H(e) ||
                          (e[h] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, i) {
                        var s = x(e, t.data_bg),
                          n = x(e, t.data_bg_hidpi),
                          a = r && n ? n : s;
                        a &&
                          ((e.style.backgroundImage = 'url("'.concat(a, '")')),
                          P(e).setAttribute(c, a),
                          U(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var s = x(e, t.data_bg_multi),
                          n = x(e, t.data_bg_multi_hidpi),
                          a = r && n ? n : s;
                        a && ((e.style.backgroundImage = a), Y(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var s = x(e, t.data_bg_set);
                        if (s) {
                          var n = s.split("|"),
                            r = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            Y(e, t, i);
                        }
                      })(e, t, i);
                  })(e, t, i)
                : (function (e, t, i) {
                    ae(e, t, i),
                      (function (e, t, i) {
                        var s = J[e.tagName];
                        s && (s(e, t), U(e, t, i));
                      })(e, t, i);
                  })(e, t, i);
            },
            oe = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              D(e, function (e) {
                X(e, R);
              }),
                X(e, R);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                X(e, G);
              },
              VIDEO: function (e) {
                B(e, function (e) {
                  X(e, G);
                }),
                  X(e, $),
                  e.load();
              },
              OBJECT: function (e) {
                X(e, V);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (H(e)) {
                        var t = F(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  L(e) ||
                    M(e) ||
                    (_(e, t.class_entered),
                    _(e, t.class_exited),
                    _(e, t.class_applied),
                    _(e, t.class_loading),
                    _(e, t.class_loaded),
                    _(e, t.class_error));
                })(e, t),
                C(e),
                q(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            he = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, i) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, i, s) {
                      var n = (function (e) {
                        return O.indexOf(S(e)) >= 0;
                      })(e);
                      T(e, "entered"),
                        A(e, i.class_entered),
                        _(e, i.class_exited),
                        (function (e, t, i) {
                          t.unobserve_entered && z(e, i);
                        })(e, i, s),
                        k(i.callback_enter, e, t, s),
                        n || le(e, i, s);
                    })(e.target, e, t, i)
                  : (function (e, t, i, s) {
                      L(e) ||
                        (A(e, i.class_exited),
                        (function (e, t, i, s) {
                          i.cancel_on_exit &&
                            (function (e) {
                              return S(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              D(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            ce(e),
                            _(e, i.class_loading),
                            I(s, -1),
                            C(e),
                            k(i.callback_cancel, e, t, s));
                        })(e, t, i, s),
                        k(i.callback_exit, e, t, s));
                    })(e.target, e, t, i);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            ve = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ge = function (e) {
              return (function (e) {
                return S(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return me(e).filter(L);
              })(e || ve(t));
            },
            we = function (e, i) {
              var n = l(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  s &&
                    !he(e) &&
                    (t._observer = new IntersectionObserver(
                      function (i) {
                        fe(i, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e),
                    ));
                })(n, this),
                (function (e, i) {
                  t &&
                    ((i._onlineHandler = function () {
                      !(function (e, t) {
                        var i;
                        ((i = ve(e)), me(i).filter(ge)).forEach(function (t) {
                          _(t, e.class_error), C(t);
                        }),
                          t.update();
                      })(e, i);
                    }),
                    window.addEventListener("online", i._onlineHandler));
                })(n, this),
                this.update(i);
            };
          return (
            (we.prototype = {
              update: function (e) {
                var t,
                  n,
                  r = this._settings,
                  a = be(e, r);
                N(this, a.length),
                  !i && s
                    ? he(r)
                      ? (function (e, t, i) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, i) {
                                e.setAttribute("loading", "lazy"),
                                  ae(e, t, i),
                                  (function (e, t) {
                                    var i = J[e.tagName];
                                    i && i(e, t);
                                  })(e, t),
                                  T(e, w);
                              })(e, t, i);
                          }),
                            N(i, 0);
                        })(a, r, this)
                      : ((n = a),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ve(this._settings).forEach(function (e) {
                    q(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  i = this._settings;
                be(e, i).forEach(function (e) {
                  z(e, t), le(e, i, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ve(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (we.load = function (e, t) {
              var i = l(t);
              le(e, i);
            }),
            (we.resetStatus = function (e) {
              C(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var i, s = 0; (i = t[s]); s += 1) o(e, i);
                  else o(e, t);
              })(we, window.lazyLoadOptions),
            we
          );
        })();
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var r = (t[s] = { exports: {} });
    return e[s].call(r.exports, r, r.exports, i), r.exports;
  }
  (() => {
    "use strict";
    let e = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
        );
      },
    };
    let t = !0,
      s = (e = 500) => {
        let i = document.querySelector("body");
        if (t) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (i.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    function n(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function r(e) {
      return e.filter(function (e, t, i) {
        return i.indexOf(e) === t;
      });
    }
    let a = (e, t = !1, i = 500, r = 0) => {
      const a = document.querySelector(e);
      if (a) {
        let l = "",
          o = 0;
        t &&
          ((l = "header.header"), (o = document.querySelector(l).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: i,
          header: l,
          offset: r,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (s(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(a, "", c);
        else {
          let e = a.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: o ? e - o : e, behavior: "smooth" });
        }
        n(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else n(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    function l(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function o(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : l(t[i]) &&
              l(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              o(e[i], t[i]);
        });
    }
    const c = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function d() {
      const e = "undefined" != typeof document ? document : {};
      return o(e, c), e;
    }
    const u = {
      document: c,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function p() {
      const e = "undefined" != typeof window ? window : {};
      return o(e, u), e;
    }
    function h(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function f() {
      return Date.now();
    }
    function m(e, t) {
      void 0 === t && (t = "x");
      const i = p();
      let s, n, r;
      const a = (function (e) {
        const t = p();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((n = a.transform || a.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = r.toString().split(","))),
        "x" === t &&
          (n = i.WebKitCSSMatrix
            ? r.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (n = i.WebKitCSSMatrix
            ? r.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        n || 0
      );
    }
    function v(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function g() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (
          null != n &&
          ((i = n),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const i = Object.keys(Object(n)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, s = i.length; t < s; t += 1) {
            const s = i[t],
              r = Object.getOwnPropertyDescriptor(n, s);
            void 0 !== r &&
              r.enumerable &&
              (v(e[s]) && v(n[s])
                ? n[s].__swiper__
                  ? (e[s] = n[s])
                  : g(e[s], n[s])
                : !v(e[s]) && v(n[s])
                ? ((e[s] = {}), n[s].__swiper__ ? (e[s] = n[s]) : g(e[s], n[s]))
                : (e[s] = n[s]));
          }
        }
      }
      var i;
      return e;
    }
    function b(e, t, i) {
      e.style.setProperty(t, i);
    }
    function w(e) {
      let { swiper: t, targetPosition: i, side: s } = e;
      const n = p(),
        r = -t.translate;
      let a,
        l = null;
      const o = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(t.cssModeFrameID);
      const c = i > r ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (a = new Date().getTime()), null === l && (l = a);
          const e = Math.max(Math.min((a - l) / o, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + c * (i - r);
          if ((d(p, i) && (p = i), t.wrapperEl.scrollTo({ [s]: p }), d(p, i)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [s]: p });
              }),
              void n.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = n.requestAnimationFrame(u);
        };
      u();
    }
    function y(e) {
      return (
        e.querySelector(".swiper-slide-transform") ||
        (e.shadowRoot &&
          e.shadowRoot.querySelector(".swiper-slide-transform")) ||
        e
      );
    }
    function E(e, t) {
      return (
        void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
      );
    }
    function x(e, t) {
      void 0 === t && (t = []);
      const i = document.createElement(e);
      return i.classList.add(...(Array.isArray(t) ? t : [t])), i;
    }
    function S(e, t) {
      return p().getComputedStyle(e, null).getPropertyValue(t);
    }
    function T(e) {
      let t,
        i = e;
      if (i) {
        for (t = 0; null !== (i = i.previousSibling); )
          1 === i.nodeType && (t += 1);
        return t;
      }
    }
    function C(e, t) {
      const i = [];
      let s = e.parentElement;
      for (; s; )
        t ? s.matches(t) && i.push(s) : i.push(s), (s = s.parentElement);
      return i;
    }
    function L(e, t, i) {
      const s = p();
      return i
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              s
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-right" : "margin-top",
                ),
            ) +
            parseFloat(
              s
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom",
                ),
            )
        : e.offsetWidth;
    }
    let M, O, k;
    function A() {
      return (
        M ||
          (M = (function () {
            const e = p(),
              t = d();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        M
      );
    }
    function _(e) {
      return (
        void 0 === e && (e = {}),
        O ||
          (O = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const i = A(),
              s = p(),
              n = s.navigator.platform,
              r = t || s.navigator.userAgent,
              a = { ios: !1, android: !1 },
              l = s.screen.width,
              o = s.screen.height,
              c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === n;
            let m = "MacIntel" === n;
            return (
              !d &&
                m &&
                i.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${l}x${o}`) >= 0 &&
                ((d = r.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (m = !1)),
              c && !f && ((a.os = "android"), (a.android = !0)),
              (d || h || u) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        O
      );
    }
    function P() {
      return (
        k ||
          (k = (function () {
            const e = p();
            let t = !1;
            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (i()) {
              const i = String(e.navigator.userAgent);
              if (i.includes("Version/")) {
                const [e, s] = i
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && s < 2);
              }
            }
            return {
              isSafari: t || i(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent,
              ),
            };
          })()),
        k
      );
    }
    var z = {
      on(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        const n = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
              s.eventsListeners[e][n](t);
          }),
          s
        );
      },
      once(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        function n() {
          s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
          for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
            r[a] = arguments[a];
          t.apply(s, r);
        }
        return (n.__emitterProxy = t), s.on(e, n, i);
      },
      onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof e) return i;
        const s = t ? "unshift" : "push";
        return (
          i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
      },
      off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed
          ? i
          : i.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach((s, n) => {
                    (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                      i.eventsListeners[e].splice(n, 1);
                  });
            }),
            i)
          : i;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, i, s;
        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (i = r.slice(1, r.length)), (s = e))
          : ((t = r[0].events), (i = r[0].data), (s = r[0].context || e)),
          i.unshift(s);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(s, [t, ...i]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(s, i);
                });
          }),
          e
        );
      },
    };
    const I = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const i = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        );
        if (i) {
          let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
          !t &&
            e.isElement &&
            (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)),
            t && t.remove();
        }
      },
      N = (e, t) => {
        if (!e.slides[t]) return;
        const i = e.slides[t].querySelector('[loading="lazy"]');
        i && i.removeAttribute("loading");
      },
      W = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const i = e.slides.length;
        if (!i || !t || t < 0) return;
        t = Math.min(t, i);
        const s =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          n = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const i = n,
            r = [i - t];
          return (
            r.push(...Array.from({ length: t }).map((e, t) => i + s + t)),
            void e.slides.forEach((t, i) => {
              r.includes(t.column) && N(e, i);
            })
          );
        }
        const r = n + s - 1;
        if (e.params.rewind || e.params.loop)
          for (let s = n - t; s <= r + t; s += 1) {
            const t = ((s % i) + i) % i;
            (t < n || t > r) && N(e, t);
          }
        else
          for (let s = Math.max(n - t, 0); s <= Math.min(r + t, i - 1); s += 1)
            s !== n && (s > r || s < n) && N(e, s);
      };
    var D = {
      updateSize: function () {
        const e = this;
        let t, i;
        const s = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : s.clientWidth),
          (i =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : s.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(S(s, "padding-left") || 0, 10) -
              parseInt(S(s, "padding-right") || 0, 10)),
            (i =
              i -
              parseInt(S(s, "padding-top") || 0, 10) -
              parseInt(S(s, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function i(e, i) {
          return parseFloat(e.getPropertyValue(t(i)) || 0);
        }
        const s = e.params,
          {
            wrapperEl: n,
            slidesEl: r,
            size: a,
            rtlTranslate: l,
            wrongRTL: o,
          } = e,
          c = e.virtual && s.virtual.enabled,
          d = c ? e.virtual.slides.length : e.slides.length,
          u = E(r, `.${e.params.slideClass}, swiper-slide`),
          p = c ? e.virtual.slides.length : u.length;
        let h = [];
        const f = [],
          m = [];
        let v = s.slidesOffsetBefore;
        "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
        let g = s.slidesOffsetAfter;
        "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
        const w = e.snapGrid.length,
          y = e.slidesGrid.length;
        let x = s.spaceBetween,
          T = -v,
          C = 0,
          M = 0;
        if (void 0 === a) return;
        "string" == typeof x && x.indexOf("%") >= 0
          ? (x = (parseFloat(x.replace("%", "")) / 100) * a)
          : "string" == typeof x && (x = parseFloat(x)),
          (e.virtualSize = -x),
          u.forEach((e) => {
            l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          s.centeredSlides &&
            s.cssMode &&
            (b(n, "--swiper-centered-offset-before", ""),
            b(n, "--swiper-centered-offset-after", ""));
        const O = s.grid && s.grid.rows > 1 && e.grid;
        let k;
        O && e.grid.initSlides(p);
        const A =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView,
          ).length > 0;
        for (let n = 0; n < p; n += 1) {
          let r;
          if (
            ((k = 0),
            u[n] && (r = u[n]),
            O && e.grid.updateSlide(n, r, p, t),
            !u[n] || "none" !== S(r, "display"))
          ) {
            if ("auto" === s.slidesPerView) {
              A && (u[n].style[t("width")] = "");
              const a = getComputedStyle(r),
                l = r.style.transform,
                o = r.style.webkitTransform;
              if (
                (l && (r.style.transform = "none"),
                o && (r.style.webkitTransform = "none"),
                s.roundLengths)
              )
                k = e.isHorizontal() ? L(r, "width", !0) : L(r, "height", !0);
              else {
                const e = i(a, "width"),
                  t = i(a, "padding-left"),
                  s = i(a, "padding-right"),
                  n = i(a, "margin-left"),
                  l = i(a, "margin-right"),
                  o = a.getPropertyValue("box-sizing");
                if (o && "border-box" === o) k = e + n + l;
                else {
                  const { clientWidth: i, offsetWidth: a } = r;
                  k = e + t + s + n + l + (a - i);
                }
              }
              l && (r.style.transform = l),
                o && (r.style.webkitTransform = o),
                s.roundLengths && (k = Math.floor(k));
            } else
              (k = (a - (s.slidesPerView - 1) * x) / s.slidesPerView),
                s.roundLengths && (k = Math.floor(k)),
                u[n] && (u[n].style[t("width")] = `${k}px`);
            u[n] && (u[n].swiperSlideSize = k),
              m.push(k),
              s.centeredSlides
                ? ((T = T + k / 2 + C / 2 + x),
                  0 === C && 0 !== n && (T = T - a / 2 - x),
                  0 === n && (T = T - a / 2 - x),
                  Math.abs(T) < 0.001 && (T = 0),
                  s.roundLengths && (T = Math.floor(T)),
                  M % s.slidesPerGroup == 0 && h.push(T),
                  f.push(T))
                : (s.roundLengths && (T = Math.floor(T)),
                  (M - Math.min(e.params.slidesPerGroupSkip, M)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(T),
                  f.push(T),
                  (T = T + k + x)),
              (e.virtualSize += k + x),
              (C = k),
              (M += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, a) + g),
          l &&
            o &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            (n.style.width = `${e.virtualSize + x}px`),
          s.setWrapperSize && (n.style[t("width")] = `${e.virtualSize + x}px`),
          O && e.grid.updateWrapperSize(k, h, t),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < h.length; i += 1) {
            let n = h[i];
            s.roundLengths && (n = Math.floor(n)),
              h[i] <= e.virtualSize - a && t.push(n);
          }
          (h = t),
            Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - a);
        }
        if (c && s.loop) {
          const t = m[0] + x;
          if (s.slidesPerGroup > 1) {
            const i = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  s.slidesPerGroup,
              ),
              n = t * s.slidesPerGroup;
            for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + n);
          }
          for (
            let i = 0;
            i < e.virtual.slidesBefore + e.virtual.slidesAfter;
            i += 1
          )
            1 === s.slidesPerGroup && h.push(h[h.length - 1] + t),
              f.push(f[f.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === h.length && (h = [0]), 0 !== x)) {
          const i = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
          u.filter(
            (e, t) => !(s.cssMode && !s.loop) || t !== u.length - 1,
          ).forEach((e) => {
            e.style[i] = `${x}px`;
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          m.forEach((t) => {
            e += t + (x || 0);
          }),
            (e -= x);
          const t = e - a;
          h = h.map((e) => (e <= 0 ? -v : e > t ? t + g : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          if (
            (m.forEach((t) => {
              e += t + (x || 0);
            }),
            (e -= x),
            e < a)
          ) {
            const t = (a - e) / 2;
            h.forEach((e, i) => {
              h[i] = e - t;
            }),
              f.forEach((e, i) => {
                f[i] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: h,
            slidesGrid: f,
            slidesSizesGrid: m,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          b(n, "--swiper-centered-offset-before", -h[0] + "px"),
            b(
              n,
              "--swiper-centered-offset-after",
              e.size / 2 - m[m.length - 1] / 2 + "px",
            );
          const t = -e.snapGrid[0],
            i = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + i));
        }
        if (
          (p !== d && e.emit("slidesLengthChange"),
          h.length !== w &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== y && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          !(c || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            i = e.el.classList.contains(t);
          p <= s.maxBackfaceHiddenSlides
            ? i || e.el.classList.add(t)
            : i && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [],
          s = t.virtual && t.params.virtual.enabled;
        let n,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) => (s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              i.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !s) break;
              i.push(a(e));
            }
        else i.push(a(t.activeIndex));
        for (n = 0; n < i.length; n += 1)
          if (void 0 !== i[n]) {
            const e = i[n].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          i = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset =
            (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
            i -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          i = t.params,
          { slides: s, rtlTranslate: n, snapGrid: r } = t;
        if (0 === s.length) return;
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        n && (a = e),
          s.forEach((e) => {
            e.classList.remove(i.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let l = i.spaceBetween;
        "string" == typeof l && l.indexOf("%") >= 0
          ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
          : "string" == typeof l && (l = parseFloat(l));
        for (let e = 0; e < s.length; e += 1) {
          const o = s[e];
          let c = o.swiperSlideOffset;
          i.cssMode && i.centeredSlides && (c -= s[0].swiperSlideOffset);
          const d =
              (a + (i.centeredSlides ? t.minTranslate() : 0) - c) /
              (o.swiperSlideSize + l),
            u =
              (a - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - c) /
              (o.swiperSlideSize + l),
            p = -(a - c),
            h = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (h > 1 && h <= t.size) ||
            (p <= 0 && h >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            s[e].classList.add(i.slideVisibleClass)),
            (o.progress = n ? -d : d),
            (o.originalProgress = n ? -u : u);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          s = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: r, isEnd: a, progressLoop: l } = t;
        const o = r,
          c = a;
        if (0 === s) (n = 0), (r = !0), (a = !0);
        else {
          n = (e - t.minTranslate()) / s;
          const i = Math.abs(e - t.minTranslate()) < 1,
            l = Math.abs(e - t.maxTranslate()) < 1;
          (r = i || n <= 0), (a = l || n >= 1), i && (n = 0), l && (n = 1);
        }
        if (i.loop) {
          const i = t.getSlideIndexByData(0),
            s = t.getSlideIndexByData(t.slides.length - 1),
            n = t.slidesGrid[i],
            r = t.slidesGrid[s],
            a = t.slidesGrid[t.slidesGrid.length - 1],
            o = Math.abs(e);
          (l = o >= n ? (o - n) / a : (o + a - r) / a), l > 1 && (l -= 1);
        }
        Object.assign(t, {
          progress: n,
          progressLoop: l,
          isBeginning: r,
          isEnd: a,
        }),
          (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !o && t.emit("reachBeginning toEdge"),
          a && !c && t.emit("reachEnd toEdge"),
          ((o && !r) || (c && !a)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: i, slidesEl: s, activeIndex: n } = e,
          r = e.virtual && i.virtual.enabled,
          a = (e) => E(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
        let l;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              i.slideActiveClass,
              i.slideNextClass,
              i.slidePrevClass,
            );
          }),
          r)
        )
          if (i.loop) {
            let t = n - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (l = a(`[data-swiper-slide-index="${t}"]`));
          } else l = a(`[data-swiper-slide-index="${n}"]`);
        else l = t[n];
        if (l) {
          l.classList.add(i.slideActiveClass);
          let e = (function (e, t) {
            const i = [];
            for (; e.nextElementSibling; ) {
              const s = e.nextElementSibling;
              t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
            }
            return i;
          })(l, `.${i.slideClass}, swiper-slide`)[0];
          i.loop && !e && (e = t[0]), e && e.classList.add(i.slideNextClass);
          let s = (function (e, t) {
            const i = [];
            for (; e.previousElementSibling; ) {
              const s = e.previousElementSibling;
              t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
            }
            return i;
          })(l, `.${i.slideClass}, swiper-slide`)[0];
          i.loop && 0 === !s && (s = t[t.length - 1]),
            s && s.classList.add(i.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: s,
            params: n,
            activeIndex: r,
            realIndex: a,
            snapIndex: l,
          } = t;
        let o,
          c = e;
        const d = (e) => {
          let i = e - t.virtual.slidesBefore;
          return (
            i < 0 && (i = t.virtual.slides.length + i),
            i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
            i
          );
        };
        if (
          (void 0 === c &&
            (c = (function (e) {
              const { slidesGrid: t, params: i } = e,
                s = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? s >= t[e] && s < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (n = e)
                    : s >= t[e] && s < t[e + 1] && (n = e + 1)
                  : s >= t[e] && (n = e);
              return (
                i.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
              );
            })(t)),
          s.indexOf(i) >= 0)
        )
          o = s.indexOf(i);
        else {
          const e = Math.min(n.slidesPerGroupSkip, c);
          o = e + Math.floor((c - e) / n.slidesPerGroup);
        }
        if ((o >= s.length && (o = s.length - 1), c === r))
          return (
            o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = d(c))
            )
          );
        let u;
        (u =
          t.virtual && n.virtual.enabled && n.loop
            ? d(c)
            : t.slides[c]
            ? parseInt(
                t.slides[c].getAttribute("data-swiper-slide-index") || c,
                10,
              )
            : c),
          Object.assign(t, {
            previousSnapIndex: l,
            snapIndex: o,
            previousRealIndex: a,
            realIndex: u,
            previousIndex: r,
            activeIndex: c,
          }),
          t.initialized && W(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          i = t.params,
          s = e.closest(`.${i.slideClass}, swiper-slide`);
        let n,
          r = !1;
        if (s)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === s) {
              (r = !0), (n = e);
              break;
            }
        if (!s || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = s),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                s.getAttribute("data-swiper-slide-index"),
                10,
              ))
            : (t.clickedIndex = n),
          i.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    var B = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: i, translate: s, wrapperEl: n } = this;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;
        let r = m(n, e);
        return (r += this.cssOverflowAdjustment()), i && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          { rtlTranslate: s, params: n, wrapperEl: r, progress: a } = i;
        let l,
          o = 0,
          c = 0;
        i.isHorizontal() ? (o = s ? -e : e) : (c = e),
          n.roundLengths && ((o = Math.floor(o)), (c = Math.floor(c))),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? o : c),
          n.cssMode
            ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -o : -c)
            : n.virtualTranslate ||
              (i.isHorizontal()
                ? (o -= i.cssOverflowAdjustment())
                : (c -= i.cssOverflowAdjustment()),
              (r.style.transform = `translate3d(${o}px, ${c}px, 0px)`));
        const d = i.maxTranslate() - i.minTranslate();
        (l = 0 === d ? 0 : (e - i.minTranslate()) / d),
          l !== a && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, i, s, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          void 0 === s && (s = !0);
        const r = this,
          { params: a, wrapperEl: l } = r;
        if (r.animating && a.preventInteractionOnTransition) return !1;
        const o = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = s && e > o ? o : s && e < c ? c : e),
          r.updateProgress(d),
          a.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                w({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            l.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              i &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              i &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.wrapperEl.removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd,
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      i && r.emit("transitionEnd"));
                  }),
                r.wrapperEl.addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      },
    };
    function G(e) {
      let { swiper: t, runCallbacks: i, direction: s, step: n } = e;
      const { activeIndex: r, previousIndex: a } = t;
      let l = s;
      if (
        (l || (l = r > a ? "next" : r < a ? "prev" : "reset"),
        t.emit(`transition${n}`),
        i && r !== a)
      ) {
        if ("reset" === l) return void t.emit(`slideResetTransition${n}`);
        t.emit(`slideChangeTransition${n}`),
          "next" === l
            ? t.emit(`slideNextTransition${n}`)
            : t.emit(`slidePrevTransition${n}`);
      }
    }
    var $ = {
      slideTo: function (e, t, i, s, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const r = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: l,
          snapGrid: o,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: f,
        } = r;
        if (
          (r.animating && l.preventInteractionOnTransition) ||
          (!f && !s && !n)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, a);
        let v = m + Math.floor((a - m) / r.params.slidesPerGroup);
        v >= o.length && (v = o.length - 1);
        const g = -o[v];
        if (l.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * g),
              i = Math.floor(100 * c[e]),
              s = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= i && t < s - (s - i) / 2
                ? (a = e)
                : t >= i && t < s && (a = e + 1)
              : t >= i && (a = e);
          }
        if (r.initialized && a !== u) {
          if (
            !r.allowSlideNext &&
            (p
              ? g > r.translate && g > r.minTranslate()
              : g < r.translate && g < r.minTranslate())
          )
            return !1;
          if (
            !r.allowSlidePrev &&
            g > r.translate &&
            g > r.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let b;
        if (
          (a !== (d || 0) && i && r.emit("beforeSlideChangeStart"),
          r.updateProgress(g),
          (b = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -g === r.translate) || (!p && g === r.translate))
        )
          return (
            r.updateActiveIndex(a),
            l.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== l.effect && r.setTranslate(g),
            "reset" !== b && (r.transitionStart(i, b), r.transitionEnd(i, b)),
            !1
          );
        if (l.cssMode) {
          const e = r.isHorizontal(),
            i = p ? g : -g;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                ? ((r._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    h[e ? "scrollLeft" : "scrollTop"] = i;
                  }))
                : (h[e ? "scrollLeft" : "scrollTop"] = i),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._immediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                w({ swiper: r, targetPosition: i, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(g),
          r.updateActiveIndex(a),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, s),
          r.transitionStart(i, b),
          0 === t
            ? r.transitionEnd(i, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd,
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(i, b));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd,
              )),
          !0
        );
      },
      slideToLoop: function (e, t, i, s) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          "string" == typeof e)
        ) {
          e = parseInt(e, 10);
        }
        const n = this;
        let r = e;
        return (
          n.params.loop &&
            (n.virtual && n.params.virtual.enabled
              ? (r += n.virtual.slidesBefore)
              : (r = n.getSlideIndexByData(r))),
          n.slideTo(r, t, i, s)
        );
      },
      slideNext: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          { enabled: n, params: r, animating: a } = s;
        if (!n) return s;
        let l = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        const o = s.activeIndex < r.slidesPerGroupSkip ? 1 : l,
          c = s.virtual && r.virtual.enabled;
        if (r.loop) {
          if (a && !c && r.loopPreventsSliding) return !1;
          s.loopFix({ direction: "next" }),
            (s._clientLeft = s.wrapperEl.clientLeft);
        }
        return r.rewind && s.isEnd
          ? s.slideTo(0, e, t, i)
          : s.slideTo(s.activeIndex + o, e, t, i);
      },
      slidePrev: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          {
            params: n,
            snapGrid: r,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: o,
            animating: c,
          } = s;
        if (!o) return s;
        const d = s.virtual && n.virtual.enabled;
        if (n.loop) {
          if (c && !d && n.loopPreventsSliding) return !1;
          s.loopFix({ direction: "prev" }),
            (s._clientLeft = s.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = u(l ? s.translate : -s.translate),
          h = r.map((e) => u(e));
        let f = r[h.indexOf(p) - 1];
        if (void 0 === f && n.cssMode) {
          let e;
          r.forEach((t, i) => {
            p >= t && (e = i);
          }),
            void 0 !== e && (f = r[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if (
          (void 0 !== f &&
            ((m = a.indexOf(f)),
            m < 0 && (m = s.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((m = m - s.slidesPerViewDynamic("previous", !0) + 1),
              (m = Math.max(m, 0)))),
          n.rewind && s.isBeginning)
        ) {
          const n =
            s.params.virtual && s.params.virtual.enabled && s.virtual
              ? s.virtual.slides.length - 1
              : s.slides.length - 1;
          return s.slideTo(n, e, t, i);
        }
        return s.slideTo(m, e, t, i);
      },
      slideReset: function (e, t, i) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, i)
        );
      },
      slideToClosest: function (e, t, i, s) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === s && (s = 0.5);
        const n = this;
        let r = n.activeIndex;
        const a = Math.min(n.params.slidesPerGroupSkip, r),
          l = a + Math.floor((r - a) / n.params.slidesPerGroup),
          o = n.rtlTranslate ? n.translate : -n.translate;
        if (o >= n.snapGrid[l]) {
          const e = n.snapGrid[l];
          o - e > (n.snapGrid[l + 1] - e) * s && (r += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[l - 1];
          o - e <= (n.snapGrid[l] - e) * s && (r -= n.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, n.slidesGrid.length - 1)),
          n.slideTo(r, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: i } = e,
          s =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          r = e.clickedIndex;
        const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10,
          )),
            t.centeredSlides
              ? r < e.loopedSlides - s / 2 ||
                r > e.slides.length - e.loopedSlides + s / 2
                ? (e.loopFix(),
                  (r = e.getSlideIndex(
                    E(i, `${a}[data-swiper-slide-index="${n}"]`)[0],
                  )),
                  h(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - s
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  E(i, `${a}[data-swiper-slide-index="${n}"]`)[0],
                )),
                h(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    var R = {
      loopCreate: function (e) {
        const t = this,
          { params: i, slidesEl: s } = t;
        if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
        E(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: i.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: i = !0,
          direction: s,
          setTranslate: n,
          activeSlideIndex: r,
          byController: a,
          byMousewheel: l,
        } = void 0 === e ? {} : e;
        const o = this;
        if (!o.params.loop) return;
        o.emit("beforeLoopFix");
        const {
          slides: c,
          allowSlidePrev: d,
          allowSlideNext: u,
          slidesEl: p,
          params: h,
        } = o;
        if (
          ((o.allowSlidePrev = !0),
          (o.allowSlideNext = !0),
          o.virtual && h.virtual.enabled)
        )
          return (
            i &&
              (h.centeredSlides || 0 !== o.snapIndex
                ? h.centeredSlides && o.snapIndex < h.slidesPerView
                  ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                  : o.snapIndex === o.snapGrid.length - 1 &&
                    o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
                : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
            (o.allowSlidePrev = d),
            (o.allowSlideNext = u),
            void o.emit("loopFix")
          );
        const f =
          "auto" === h.slidesPerView
            ? o.slidesPerViewDynamic()
            : Math.ceil(parseFloat(h.slidesPerView, 10));
        let m = h.loopedSlides || f;
        m % h.slidesPerGroup != 0 &&
          (m += h.slidesPerGroup - (m % h.slidesPerGroup)),
          (o.loopedSlides = m);
        const v = [],
          g = [];
        let b = o.activeIndex;
        void 0 === r
          ? (r = o.getSlideIndex(
              o.slides.filter((e) =>
                e.classList.contains(h.slideActiveClass),
              )[0],
            ))
          : (b = r);
        const w = "next" === s || !s,
          y = "prev" === s || !s;
        let E = 0,
          x = 0;
        if (r < m) {
          E = Math.max(m - r, h.slidesPerGroup);
          for (let e = 0; e < m - r; e += 1) {
            const t = e - Math.floor(e / c.length) * c.length;
            v.push(c.length - t - 1);
          }
        } else if (r > o.slides.length - 2 * m) {
          x = Math.max(r - (o.slides.length - 2 * m), h.slidesPerGroup);
          for (let e = 0; e < x; e += 1) {
            const t = e - Math.floor(e / c.length) * c.length;
            g.push(t);
          }
        }
        if (
          (y &&
            v.forEach((e) => {
              (o.slides[e].swiperLoopMoveDOM = !0),
                p.prepend(o.slides[e]),
                (o.slides[e].swiperLoopMoveDOM = !1);
            }),
          w &&
            g.forEach((e) => {
              (o.slides[e].swiperLoopMoveDOM = !0),
                p.append(o.slides[e]),
                (o.slides[e].swiperLoopMoveDOM = !1);
            }),
          o.recalcSlides(),
          "auto" === h.slidesPerView && o.updateSlides(),
          h.watchSlidesProgress && o.updateSlidesOffset(),
          i)
        )
          if (v.length > 0 && y)
            if (void 0 === t) {
              const e = o.slidesGrid[b],
                t = o.slidesGrid[b + E] - e;
              l
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(b + E, 0, !1, !0),
                  n &&
                    ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t),
                    (o.touchEventsData.currentTranslate = o.translate)));
            } else
              n &&
                (o.slideToLoop(t, 0, !1, !0),
                (o.touchEventsData.currentTranslate = o.translate));
          else if (g.length > 0 && w)
            if (void 0 === t) {
              const e = o.slidesGrid[b],
                t = o.slidesGrid[b - x] - e;
              l
                ? o.setTranslate(o.translate - t)
                : (o.slideTo(b - x, 0, !1, !0),
                  n &&
                    ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t),
                    (o.touchEventsData.currentTranslate = o.translate)));
            } else o.slideToLoop(t, 0, !1, !0);
        if (
          ((o.allowSlidePrev = d),
          (o.allowSlideNext = u),
          o.controller && o.controller.control && !a)
        ) {
          const e = {
            slideRealIndex: t,
            direction: s,
            setTranslate: n,
            activeSlideIndex: r,
            byController: !0,
          };
          Array.isArray(o.controller.control)
            ? o.controller.control.forEach((t) => {
                !t.destroyed &&
                  t.params.loop &&
                  t.loopFix({
                    ...e,
                    slideTo: t.params.slidesPerView === h.slidesPerView && i,
                  });
              })
            : o.controller.control instanceof o.constructor &&
              o.controller.control.params.loop &&
              o.controller.control.loopFix({
                ...e,
                slideTo:
                  o.controller.control.params.slidesPerView ===
                    h.slidesPerView && i,
              });
        }
        o.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: i } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const s = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          s[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          s.forEach((e) => {
            i.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function V(e) {
      const t = this,
        i = d(),
        s = p(),
        n = t.touchEventsData;
      n.evCache.push(e);
      const { params: r, touches: a, enabled: l } = t;
      if (!l) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let o = e;
      o.originalEvent && (o = o.originalEvent);
      let c = o.target;
      if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(c)) return;
      if ("which" in o && 3 === o.which) return;
      if ("button" in o && o.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const u = !!r.noSwipingClass && "" !== r.noSwipingClass,
        h = e.composedPath ? e.composedPath() : e.path;
      u && o.target && o.target.shadowRoot && h && (c = h[0]);
      const m = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        v = !(!o.target || !o.target.shadowRoot);
      if (
        r.noSwiping &&
        (v
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(i) {
                  if (!i || i === d() || i === p()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  const s = i.closest(e);
                  return s || i.getRootNode
                    ? s || t(i.getRootNode().host)
                    : null;
                })(t)
              );
            })(m, c)
          : c.closest(m))
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)) return;
      (a.currentX = o.pageX), (a.currentY = o.pageY);
      const g = a.currentX,
        b = a.currentY,
        w = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (w && (g <= y || g >= s.innerWidth - y)) {
        if ("prevent" !== w) return;
        e.preventDefault();
      }
      Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (a.startX = g),
        (a.startY = b),
        (n.touchStartTime = f()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (n.allowThresholdMove = !1);
      let E = !0;
      c.matches(n.focusableElements) &&
        ((E = !1), "SELECT" === c.nodeName && (n.isTouched = !1)),
        i.activeElement &&
          i.activeElement.matches(n.focusableElements) &&
          i.activeElement !== c &&
          i.activeElement.blur();
      const x = E && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !x) ||
        c.isContentEditable ||
        o.preventDefault(),
        r.freeMode &&
          r.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", o);
    }
    function H(e) {
      const t = d(),
        i = this,
        s = i.touchEventsData,
        { params: n, touches: r, rtlTranslate: a, enabled: l } = i;
      if (!l) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let o = e;
      if ((o.originalEvent && (o = o.originalEvent), !s.isTouched))
        return void (
          s.startMoving &&
          s.isScrolling &&
          i.emit("touchMoveOpposite", o)
        );
      const c = s.evCache.findIndex((e) => e.pointerId === o.pointerId);
      c >= 0 && (s.evCache[c] = o);
      const u = s.evCache.length > 1 ? s.evCache[0] : o,
        p = u.pageX,
        h = u.pageY;
      if (o.preventedByNestedSwiper) return (r.startX = p), void (r.startY = h);
      if (!i.allowTouchMove)
        return (
          o.target.matches(s.focusableElements) || (i.allowClick = !1),
          void (
            s.isTouched &&
            (Object.assign(r, {
              startX: p,
              startY: h,
              prevX: i.touches.currentX,
              prevY: i.touches.currentY,
              currentX: p,
              currentY: h,
            }),
            (s.touchStartTime = f()))
          )
        );
      if (n.touchReleaseOnEdges && !n.loop)
        if (i.isVertical()) {
          if (
            (h < r.startY && i.translate <= i.maxTranslate()) ||
            (h > r.startY && i.translate >= i.minTranslate())
          )
            return (s.isTouched = !1), void (s.isMoved = !1);
        } else if (
          (p < r.startX && i.translate <= i.maxTranslate()) ||
          (p > r.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        o.target === t.activeElement &&
        o.target.matches(s.focusableElements)
      )
        return (s.isMoved = !0), void (i.allowClick = !1);
      if (
        (s.allowTouchCallbacks && i.emit("touchMove", o),
        o.targetTouches && o.targetTouches.length > 1)
      )
        return;
      (r.currentX = p), (r.currentY = h);
      const m = r.currentX - r.startX,
        v = r.currentY - r.startY;
      if (i.params.threshold && Math.sqrt(m ** 2 + v ** 2) < i.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let e;
        (i.isHorizontal() && r.currentY === r.startY) ||
        (i.isVertical() && r.currentX === r.startX)
          ? (s.isScrolling = !1)
          : m * m + v * v >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(v), Math.abs(m))) / Math.PI),
            (s.isScrolling = i.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (s.isScrolling && i.emit("touchMoveOpposite", o),
        void 0 === s.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (s.startMoving = !0)),
        s.isScrolling ||
          (i.zoom &&
            i.params.zoom &&
            i.params.zoom.enabled &&
            s.evCache.length > 1))
      )
        return void (s.isTouched = !1);
      if (!s.startMoving) return;
      (i.allowClick = !1),
        !n.cssMode && o.cancelable && o.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && o.stopPropagation();
      let g = i.isHorizontal() ? m : v,
        b = i.isHorizontal()
          ? r.currentX - r.previousX
          : r.currentY - r.previousY;
      n.oneWayMovement &&
        ((g = Math.abs(g) * (a ? 1 : -1)), (b = Math.abs(b) * (a ? 1 : -1))),
        (r.diff = g),
        (g *= n.touchRatio),
        a && ((g = -g), (b = -b));
      const w = i.touchesDirection;
      (i.swipeDirection = g > 0 ? "prev" : "next"),
        (i.touchesDirection = b > 0 ? "prev" : "next");
      const y = i.params.loop && !n.cssMode;
      if (!s.isMoved) {
        if (
          (y && i.loopFix({ direction: i.swipeDirection }),
          (s.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          i.wrapperEl.dispatchEvent(e);
        }
        (s.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", o);
      }
      let E;
      s.isMoved &&
        w !== i.touchesDirection &&
        y &&
        Math.abs(g) >= 1 &&
        (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }),
        (E = !0)),
        i.emit("sliderMove", o),
        (s.isMoved = !0),
        (s.currentTranslate = g + s.startTranslate);
      let x = !0,
        S = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (S = 0),
        g > 0
          ? (y &&
              !E &&
              s.currentTranslate >
                (n.centeredSlides
                  ? i.minTranslate() - i.size / 2
                  : i.minTranslate()) &&
              i.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            s.currentTranslate > i.minTranslate() &&
              ((x = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + g) ** S)))
          : g < 0 &&
            (y &&
              !E &&
              s.currentTranslate <
                (n.centeredSlides
                  ? i.maxTranslate() + i.size / 2
                  : i.maxTranslate()) &&
              i.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  i.slides.length -
                  ("auto" === n.slidesPerView
                    ? i.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(n.slidesPerView, 10))),
              }),
            s.currentTranslate < i.maxTranslate() &&
              ((x = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - g) ** S))),
        x && (o.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          s.currentTranslate < s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          s.currentTranslate > s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (s.currentTranslate = s.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(g) > n.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return (
            (s.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (s.currentTranslate = s.startTranslate),
            void (r.diff = i.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
          n.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        n.freeMode &&
          n.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(s.currentTranslate),
        i.setTranslate(s.currentTranslate));
    }
    function F(e) {
      const t = this,
        i = t.touchEventsData,
        s = i.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (s >= 0 && i.evCache.splice(s, 1),
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
          e.type,
        ))
      ) {
        if (
          !(
            ["pointercancel", "contextmenu"].includes(e.type) &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      const {
        params: n,
        touches: r,
        rtlTranslate: a,
        slidesGrid: l,
        enabled: o,
      } = t;
      if (!o) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let c = e;
      if (
        (c.originalEvent && (c = c.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", c),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      n.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = f(),
        u = d - i.touchStartTime;
      if (t.allowClick) {
        const e = c.path || (c.composedPath && c.composedPath());
        t.updateClickedSlide((e && e[0]) || c.target),
          t.emit("tap click", c),
          u < 300 &&
            d - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", c);
      }
      if (
        ((i.lastClickTime = f()),
        h(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let p;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (p = n.followFinger
          ? a
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        n.cssMode)
      )
        return;
      if (n.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let m = 0,
        v = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < l.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== l[e + t]
          ? p >= l[e] && p < l[e + t] && ((m = e), (v = l[e + t] - l[e]))
          : p >= l[e] && ((m = e), (v = l[l.length - 1] - l[l.length - 2]));
      }
      let g = null,
        b = null;
      n.rewind &&
        (t.isBeginning
          ? (b =
              n.virtual && n.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (g = 0));
      const w = (p - l[m]) / v,
        y = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (u > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (w >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? g : m + y)
            : t.slideTo(m)),
          "prev" === t.swipeDirection &&
            (w > 1 - n.longSwipesRatio
              ? t.slideTo(m + y)
              : null !== b && w < 0 && Math.abs(w) > n.longSwipesRatio
              ? t.slideTo(b)
              : t.slideTo(m));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
          ? c.target === t.navigation.nextEl
            ? t.slideTo(m + y)
            : t.slideTo(m)
          : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + y),
            "prev" === t.swipeDirection && t.slideTo(null !== b ? b : m));
      }
    }
    function q() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e,
        a = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const l = a && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      l
        ? e.params.loop && !a
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = s),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function j(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function X() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
      if (!s) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function Y(e) {
      const t = this;
      I(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    let U = !1;
    function K() {}
    const Z = (e, t) => {
      const i = d(),
        { params: s, el: n, wrapperEl: r, device: a } = e,
        l = !!s.nested,
        o = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
      n[o]("pointerdown", e.onTouchStart, { passive: !1 }),
        i[o]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
        i[o]("pointerup", e.onTouchEnd, { passive: !0 }),
        i[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
        i[o]("pointerout", e.onTouchEnd, { passive: !0 }),
        i[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
        i[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (s.preventClicks || s.preventClicksPropagation) &&
          n[o]("click", e.onClick, !0),
        s.cssMode && r[o]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[c](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              q,
              !0,
            )
          : e[c]("observerUpdate", q, !0),
        n[o]("load", e.onLoad, { capture: !0 });
    };
    const J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var Q = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ee(e, t) {
      return function (i) {
        void 0 === i && (i = {});
        const s = Object.keys(i)[0],
          n = i[s];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in n
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                g(t, i))
              : g(t, i))
          : g(t, i);
      };
    }
    const te = {
        eventsEmitter: z,
        update: D,
        translate: B,
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode ||
              ((i.wrapperEl.style.transitionDuration = `${e}ms`),
              (i.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: s } = i;
            s.cssMode ||
              (s.autoHeight && i.updateAutoHeight(),
              G({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: s } = i;
            (i.animating = !1),
              s.cssMode ||
                (i.setTransition(0),
                G({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: $,
        loop: R,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = d(),
              { params: i } = e;
            (e.onTouchStart = V.bind(e)),
              (e.onTouchMove = H.bind(e)),
              (e.onTouchEnd = F.bind(e)),
              i.cssMode && (e.onScroll = X.bind(e)),
              (e.onClick = j.bind(e)),
              (e.onLoad = Y.bind(e)),
              U || (t.addEventListener("touchstart", K), (U = !0)),
              Z(e, "on");
          },
          detachEvents: function () {
            Z(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: i, params: s, el: n } = e,
              r = s.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const a = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const l = (a in r ? r[a] : void 0) || e.originalParams,
              o = J(e, s),
              c = J(e, l),
              d = s.enabled;
            o && !c
              ? (n.classList.remove(
                  `${s.containerModifierClass}grid`,
                  `${s.containerModifierClass}grid-column`,
                ),
                e.emitContainerClasses())
              : !o &&
                c &&
                (n.classList.add(`${s.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === s.grid.fill)) &&
                  n.classList.add(`${s.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                if (void 0 === l[t]) return;
                const i = s[t] && s[t].enabled,
                  n = l[t] && l[t].enabled;
                i && !n && e[t].disable(), !i && n && e[t].enable();
              });
            const u = l.direction && l.direction !== s.direction,
              p = s.loop && (l.slidesPerView !== s.slidesPerView || u);
            u && i && e.changeDirection(), g(e.params, l);
            const h = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !h ? e.disable() : !d && h && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", l),
              p && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t, i) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !i))
            )
              return;
            let s = !1;
            const n = p(),
              r = "window" === t ? n.innerHeight : i.clientHeight,
              a = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < a.length; e += 1) {
              const { point: r, value: l } = a[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${l}px)`).matches && (s = r)
                : l <= i.clientWidth && (s = r);
            }
            return s || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: s } = i;
            if (s) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: i, rtl: s, el: n, device: r } = e,
              a = (function (e, t) {
                const i = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((s) => {
                          e[s] && i.push(t + s);
                        })
                      : "string" == typeof e && i.push(t + e);
                  }),
                  i
                );
              })(
                [
                  "initialized",
                  i.direction,
                  { "free-mode": e.params.freeMode && i.freeMode.enabled },
                  { autoheight: i.autoHeight },
                  { rtl: s },
                  { grid: i.grid && i.grid.rows > 1 },
                  {
                    "grid-column":
                      i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": i.cssMode },
                  { centered: i.cssMode && i.centeredSlides },
                  { "watch-progress": i.watchSlidesProgress },
                ],
                i.containerModifierClass,
              );
            t.push(...a), n.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      ie = {};
    class se {
      constructor() {
        let e, t;
        for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
          s[n] = arguments[n];
        1 === s.length &&
        s[0].constructor &&
        "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
          ? (t = s[0])
          : ([e, t] = s),
          t || (t = {}),
          (t = g({}, t)),
          e && !t.el && (t.el = e);
        const r = d();
        if (
          t.el &&
          "string" == typeof t.el &&
          r.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            r.querySelectorAll(t.el).forEach((i) => {
              const s = g({}, t, { el: i });
              e.push(new se(s));
            }),
            e
          );
        }
        const a = this;
        (a.__swiper__ = !0),
          (a.support = A()),
          (a.device = _({ userAgent: t.userAgent })),
          (a.browser = P()),
          (a.eventsListeners = {}),
          (a.eventsAnyListeners = []),
          (a.modules = [...a.__modules__]),
          t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const l = {};
        a.modules.forEach((e) => {
          e({
            params: t,
            swiper: a,
            extendParams: ee(t, l),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a),
          });
        });
        const o = g({}, Q, l);
        return (
          (a.params = g({}, o, ie, t)),
          (a.originalParams = g({}, a.params)),
          (a.passedParams = g({}, t)),
          a.params &&
            a.params.on &&
            Object.keys(a.params.on).forEach((e) => {
              a.on(e, a.params.on[e]);
            }),
          a.params && a.params.onAny && a.onAny(a.params.onAny),
          Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === a.params.direction,
            isVertical: () => "vertical" === a.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          a.emit("_swiper"),
          a.params.init && a.init(),
          a
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: i } = this,
          s = T(E(t, `.${i.slideClass}, swiper-slide`)[0]);
        return T(e) - s;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
          )[0],
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = E(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = i.minTranslate(),
          n = (i.maxTranslate() - s) * e + s;
        i.translateTo(n, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass),
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass),
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((i) => {
          const s = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: i,
          slides: s,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: a,
          activeIndex: l,
        } = this;
        let o = 1;
        if (i.centeredSlides) {
          let e,
            t = s[l] ? s[l].swiperSlideSize : 0;
          for (let i = l + 1; i < s.length; i += 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (o += 1), t > a && (e = !0));
          for (let i = l - 1; i >= 0; i -= 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (o += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = l + 1; e < s.length; e += 1) {
            (t ? n[e] + r[e] - n[l] < a : n[e] - n[l] < a) && (o += 1);
          }
        else
          for (let e = l - 1; e >= 0; e -= 1) {
            n[l] - n[e] < a && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        if (
          (i.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && I(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          i.freeMode && i.freeMode.enabled && !i.cssMode)
        )
          s(), i.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === i.slidesPerView || i.slidesPerView > 1) &&
            e.isEnd &&
            !i.centeredSlides
          ) {
            const t =
              e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
            n = e.slideTo(t.length - 1, 0, !1, !0);
          } else n = e.slideTo(e.activeIndex, 0, !1, !0);
          n || s();
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const i = this,
          s = i.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
            i.el.classList.add(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let i = e || t.params.el;
        if (("string" == typeof i && (i = document.querySelector(i)), !i))
          return !1;
        (i.swiper = t),
          i.parentNode &&
            i.parentNode.host &&
            "SWIPER-CONTAINER" === i.parentNode.host.nodeName &&
            (t.isElement = !0);
        const s = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (i && i.shadowRoot && i.shadowRoot.querySelector) {
            return i.shadowRoot.querySelector(s());
          }
          return E(i, s())[0];
        })();
        return (
          !n &&
            t.params.createElements &&
            ((n = x("div", t.params.wrapperClass)),
            i.append(n),
            E(i, `.${t.params.slideClass}`).forEach((e) => {
              n.append(e);
            })),
          Object.assign(t, {
            el: i,
            wrapperEl: n,
            slidesEl:
              t.isElement && !i.parentNode.host.slideSlots
                ? i.parentNode.host
                : n,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: "rtl" === i.dir.toLowerCase() || "rtl" === S(i, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === i.dir.toLowerCase() || "rtl" === S(i, "direction")),
            wrongRTL: "-webkit-box" === S(n, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents();
        const i = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
          t.isElement &&
            i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
          i.forEach((e) => {
            e.complete
              ? I(t, e)
              : e.addEventListener("load", (e) => {
                  I(t, e.target);
                });
          }),
          W(t),
          (t.initialized = !0),
          W(t),
          t.emit("init"),
          t.emit("afterInit"),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const i = this,
          { params: s, el: n, wrapperEl: r, slides: a } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              n.removeAttribute("style"),
              r.removeAttribute("style"),
              a &&
                a.length &&
                a.forEach((e) => {
                  e.classList.remove(
                    s.slideVisibleClass,
                    s.slideActiveClass,
                    s.slideNextClass,
                    s.slidePrevClass,
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        g(ie, e);
      }
      static get extendedDefaults() {
        return ie;
      }
      static get defaults() {
        return Q;
      }
      static installModule(e) {
        se.prototype.__modules__ || (se.prototype.__modules__ = []);
        const t = se.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => se.installModule(e)), se)
          : (se.installModule(e), se);
      }
    }
    function ne(e, t, i, s) {
      return (
        e.params.createElements &&
          Object.keys(s).forEach((n) => {
            if (!i[n] && !0 === i.auto) {
              let r = E(e.el, `.${s[n]}`)[0];
              r || ((r = x("div", s[n])), (r.className = s[n]), e.el.append(r)),
                (i[n] = r),
                (t[n] = r);
            }
          }),
        i
      );
    }
    function re(e) {
      let { swiper: t, extendParams: i, on: s, emit: n } = e;
      i({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null });
      const r = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function a(e) {
        let i;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((i = t.el.querySelector(e)), i)
          ? i
          : (e &&
              ("string" == typeof e && (i = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                i.length > 1 &&
                1 === t.el.querySelectorAll(e).length &&
                (i = t.el.querySelector(e))),
            e && !i ? e : i);
      }
      function l(e, i) {
        const s = t.params.navigation;
        (e = r(e)).forEach((e) => {
          e &&
            (e.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = i),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](s.lockClass));
        });
      }
      function o() {
        const { nextEl: e, prevEl: i } = t.navigation;
        if (t.params.loop) return l(i, !1), void l(e, !1);
        l(i, t.isBeginning && !t.params.rewind),
          l(e, t.isEnd && !t.params.rewind);
      }
      function c(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), n("navigationPrev"));
      }
      function d(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), n("navigationNext"));
      }
      function u() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = ne(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        let i = a(e.nextEl),
          s = a(e.prevEl);
        Object.assign(t.navigation, { nextEl: i, prevEl: s }),
          (i = r(i)),
          (s = r(s));
        const n = (i, s) => {
          i && i.addEventListener("click", "next" === s ? d : c),
            !t.enabled && i && i.classList.add(...e.lockClass.split(" "));
        };
        i.forEach((e) => n(e, "next")), s.forEach((e) => n(e, "prev"));
      }
      function p() {
        let { nextEl: e, prevEl: i } = t.navigation;
        (e = r(e)), (i = r(i));
        const s = (e, i) => {
          e.removeEventListener("click", "next" === i ? d : c),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => s(e, "next")), i.forEach((e) => s(e, "prev"));
      }
      s("init", () => {
        !1 === t.params.navigation.enabled ? h() : (u(), o());
      }),
        s("toEdge fromEdge lock unlock", () => {
          o();
        }),
        s("destroy", () => {
          p();
        }),
        s("enable disable", () => {
          let { nextEl: e, prevEl: i } = t.navigation;
          (e = r(e)),
            (i = r(i)),
            [...e, ...i]
              .filter((e) => !!e)
              .forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.navigation.lockClass,
                ),
              );
        }),
        s("click", (e, i) => {
          let { nextEl: s, prevEl: a } = t.navigation;
          (s = r(s)), (a = r(a));
          const l = i.target;
          if (
            t.params.navigation.hideOnClick &&
            !a.includes(l) &&
            !s.includes(l)
          ) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === l || t.pagination.el.contains(l))
            )
              return;
            let e;
            s.length
              ? (e = s[0].classList.contains(t.params.navigation.hiddenClass))
              : a.length &&
                (e = a[0].classList.contains(t.params.navigation.hiddenClass)),
              n(!0 === e ? "navigationShow" : "navigationHide"),
              [...s, ...a]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass),
                );
          }
        });
      const h = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" "),
        ),
          p();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" "),
          ),
            u(),
            o();
        },
        disable: h,
        update: o,
        init: u,
        destroy: p,
      });
    }
    function ae(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!+\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function le(e) {
      let { swiper: t, extendParams: i, on: s, emit: n } = e;
      const r = "swiper-pagination";
      let a;
      i({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let l = 0;
      const o = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function c() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function d(e, i) {
        const { bulletActiveClass: s } = t.params.pagination;
        e &&
          (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${s}-${i}`),
          (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${s}-${i}-${i}`));
      }
      function u(e) {
        const i = e.target.closest(ae(t.params.pagination.bulletClass));
        if (!i) return;
        e.preventDefault();
        const s = T(i) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === s) return;
          const e = t.realIndex,
            i = t.getSlideIndexByData(s),
            n = t.getSlideIndexByData(t.realIndex);
          if (i > t.slides.length - t.loopedSlides) {
            const s = t.activeIndex;
            t.loopFix({
              direction: i > n ? "next" : "prev",
              activeSlideIndex: i,
              slideTo: !1,
            });
            s === t.activeIndex && t.slideToLoop(e, 0, !1, !0);
          }
          t.slideToLoop(s);
        } else t.slideTo(s);
      }
      function p() {
        const e = t.rtl,
          i = t.params.pagination;
        if (c()) return;
        let s,
          r,
          u = t.pagination.el;
        u = o(u);
        const p =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          h = t.params.loop
            ? Math.ceil(p / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((r = t.previousRealIndex || 0),
              (s =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
            ? ((s = t.snapIndex), (r = t.previousSnapIndex))
            : ((r = t.previousIndex || 0), (s = t.activeIndex || 0)),
          "bullets" === i.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const n = t.pagination.bullets;
          let o, c, p;
          if (
            (i.dynamicBullets &&
              ((a = L(n[0], t.isHorizontal() ? "width" : "height", !0)),
              u.forEach((e) => {
                e.style[t.isHorizontal() ? "width" : "height"] =
                  a * (i.dynamicMainBullets + 4) + "px";
              }),
              i.dynamicMainBullets > 1 &&
                void 0 !== r &&
                ((l += s - (r || 0)),
                l > i.dynamicMainBullets - 1
                  ? (l = i.dynamicMainBullets - 1)
                  : l < 0 && (l = 0)),
              (o = Math.max(s - l, 0)),
              (c = o + (Math.min(n.length, i.dynamicMainBullets) - 1)),
              (p = (c + o) / 2)),
            n.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${i.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e,
                )
                .flat();
              e.classList.remove(...t);
            }),
            u.length > 1)
          )
            n.forEach((e) => {
              const n = T(e);
              n === s
                ? e.classList.add(...i.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                i.dynamicBullets &&
                  (n >= o &&
                    n <= c &&
                    e.classList.add(
                      ...`${i.bulletActiveClass}-main`.split(" "),
                    ),
                  n === o && d(e, "prev"),
                  n === c && d(e, "next"));
            });
          else {
            const e = n[s];
            if (
              (e && e.classList.add(...i.bulletActiveClass.split(" ")),
              t.isElement &&
                n.forEach((e, t) => {
                  e.setAttribute("part", t === s ? "bullet-active" : "bullet");
                }),
              i.dynamicBullets)
            ) {
              const e = n[o],
                t = n[c];
              for (let e = o; e <= c; e += 1)
                n[e] &&
                  n[e].classList.add(
                    ...`${i.bulletActiveClass}-main`.split(" "),
                  );
              d(e, "prev"), d(t, "next");
            }
          }
          if (i.dynamicBullets) {
            const s = Math.min(n.length, i.dynamicMainBullets + 4),
              r = (a * s - a) / 2 - p * a,
              l = e ? "right" : "left";
            n.forEach((e) => {
              e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
            });
          }
        }
        u.forEach((e, r) => {
          if (
            ("fraction" === i.type &&
              (e.querySelectorAll(ae(i.currentClass)).forEach((e) => {
                e.textContent = i.formatFractionCurrent(s + 1);
              }),
              e.querySelectorAll(ae(i.totalClass)).forEach((e) => {
                e.textContent = i.formatFractionTotal(h);
              })),
            "progressbar" === i.type)
          ) {
            let n;
            n = i.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (s + 1) / h;
            let a = 1,
              l = 1;
            "horizontal" === n ? (a = r) : (l = r),
              e.querySelectorAll(ae(i.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${l})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === i.type && i.renderCustom
            ? ((e.innerHTML = i.renderCustom(t, s + 1, h)),
              0 === r && n("paginationRender", e))
            : (0 === r && n("paginationRender", e), n("paginationUpdate", e)),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](i.lockClass);
        });
      }
      function h() {
        const e = t.params.pagination;
        if (c()) return;
        const i =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length;
        let s = t.pagination.el;
        s = o(s);
        let r = "";
        if ("bullets" === e.type) {
          let s = t.params.loop
            ? Math.ceil(i / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && s > i && (s = i);
          for (let i = 0; i < s; i += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, i, e.bulletClass))
              : (r += `<${e.bulletElement} ${
                  t.isElement ? 'part="bullet"' : ""
                } class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
            (r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          s.forEach((i) => {
            "custom" !== e.type && (i.innerHTML = r || ""),
              "bullets" === e.type &&
                t.pagination.bullets.push(
                  ...i.querySelectorAll(ae(e.bulletClass)),
                );
          }),
          "custom" !== e.type && n("paginationRender", s[0]);
      }
      function f() {
        t.params.pagination = ne(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" },
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let i;
        "string" == typeof e.el &&
          t.isElement &&
          (i = t.el.querySelector(e.el)),
          i ||
            "string" != typeof e.el ||
            (i = [...document.querySelectorAll(e.el)]),
          i || (i = e.el),
          i &&
            0 !== i.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              Array.isArray(i) &&
              i.length > 1 &&
              ((i = [...t.el.querySelectorAll(e.el)]),
              i.length > 1 &&
                (i = i.filter((e) => C(e, ".swiper")[0] === t.el)[0])),
            Array.isArray(i) && 1 === i.length && (i = i[0]),
            Object.assign(t.pagination, { el: i }),
            (i = o(i)),
            i.forEach((i) => {
              "bullets" === e.type &&
                e.clickable &&
                i.classList.add(...(e.clickableClass || "").split(" ")),
                i.classList.add(e.modifierClass + e.type),
                i.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                ),
                "bullets" === e.type &&
                  e.dynamicBullets &&
                  (i.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (l = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                  e.progressbarOpposite &&
                  i.classList.add(e.progressbarOppositeClass),
                e.clickable && i.addEventListener("click", u),
                t.enabled || i.classList.add(e.lockClass);
            }));
      }
      function m() {
        const e = t.params.pagination;
        if (c()) return;
        let i = t.pagination.el;
        i &&
          ((i = o(i)),
          i.forEach((i) => {
            i.classList.remove(e.hiddenClass),
              i.classList.remove(e.modifierClass + e.type),
              i.classList.remove(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass,
              ),
              e.clickable &&
                (i.classList.remove(...(e.clickableClass || "").split(" ")),
                i.removeEventListener("click", u));
          })),
          t.pagination.bullets &&
            t.pagination.bullets.forEach((t) =>
              t.classList.remove(...e.bulletActiveClass.split(" ")),
            );
      }
      s("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: i } = t.pagination;
        (i = o(i)),
          i.forEach((i) => {
            i.classList.remove(e.horizontalClass, e.verticalClass),
              i.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass,
              );
          });
      }),
        s("init", () => {
          !1 === t.params.pagination.enabled ? v() : (f(), h(), p());
        }),
        s("activeIndexChange", () => {
          void 0 === t.snapIndex && p();
        }),
        s("snapIndexChange", () => {
          p();
        }),
        s("snapGridLengthChange", () => {
          h(), p();
        }),
        s("destroy", () => {
          m();
        }),
        s("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = o(e)),
            e.forEach((e) =>
              e.classList[t.enabled ? "remove" : "add"](
                t.params.pagination.lockClass,
              ),
            ));
        }),
        s("lock unlock", () => {
          p();
        }),
        s("click", (e, i) => {
          const s = i.target,
            r = o(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !s.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && s === t.navigation.nextEl) ||
                (t.navigation.prevEl && s === t.navigation.prevEl))
            )
              return;
            const e = r[0].classList.contains(t.params.pagination.hiddenClass);
            n(!0 === e ? "paginationShow" : "paginationHide"),
              r.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass),
              );
          }
        });
      const v = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = o(e)),
          e.forEach((e) =>
            e.classList.add(t.params.pagination.paginationDisabledClass),
          )),
          m();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = o(e)),
            e.forEach((e) =>
              e.classList.remove(t.params.pagination.paginationDisabledClass),
            )),
            f(),
            h(),
            p();
        },
        disable: v,
        render: h,
        update: p,
        init: f,
        destroy: m,
      });
    }
    function oe(e) {
      let t,
        i,
        { swiper: s, extendParams: n, on: r, emit: a, params: l } = e;
      (s.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        n({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let o,
        c,
        u,
        p,
        h,
        f,
        m,
        v = l && l.autoplay ? l.autoplay.delay : 3e3,
        g = l && l.autoplay ? l.autoplay.delay : 3e3,
        b = new Date().getTime;
      function w(e) {
        s &&
          !s.destroyed &&
          s.wrapperEl &&
          e.target === s.wrapperEl &&
          (s.wrapperEl.removeEventListener("transitionend", w), C());
      }
      const y = () => {
          if (s.destroyed || !s.autoplay.running) return;
          s.autoplay.paused ? (c = !0) : c && ((g = o), (c = !1));
          const e = s.autoplay.paused ? o : b + g - new Date().getTime();
          (s.autoplay.timeLeft = e),
            a("autoplayTimeLeft", e, e / v),
            (i = requestAnimationFrame(() => {
              y();
            }));
        },
        E = (e) => {
          if (s.destroyed || !s.autoplay.running) return;
          cancelAnimationFrame(i), y();
          let n = void 0 === e ? s.params.autoplay.delay : e;
          (v = s.params.autoplay.delay), (g = s.params.autoplay.delay);
          const r = (() => {
            let e;
            if (
              ((e =
                s.virtual && s.params.virtual.enabled
                  ? s.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active"),
                    )[0]
                  : s.slides[s.activeIndex]),
              !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(r) &&
            r > 0 &&
            void 0 === e &&
            ((n = r), (v = r), (g = r)),
            (o = n);
          const l = s.params.speed,
            c = () => {
              s &&
                !s.destroyed &&
                (s.params.autoplay.reverseDirection
                  ? !s.isBeginning || s.params.loop || s.params.rewind
                    ? (s.slidePrev(l, !0, !0), a("autoplay"))
                    : s.params.autoplay.stopOnLastSlide ||
                      (s.slideTo(s.slides.length - 1, l, !0, !0), a("autoplay"))
                  : !s.isEnd || s.params.loop || s.params.rewind
                  ? (s.slideNext(l, !0, !0), a("autoplay"))
                  : s.params.autoplay.stopOnLastSlide ||
                    (s.slideTo(0, l, !0, !0), a("autoplay")),
                s.params.cssMode &&
                  ((b = new Date().getTime()),
                  requestAnimationFrame(() => {
                    E();
                  })));
            };
          return (
            n > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  c();
                }, n)))
              : requestAnimationFrame(() => {
                  c();
                }),
            n
          );
        },
        x = () => {
          (s.autoplay.running = !0), E(), a("autoplayStart");
        },
        S = () => {
          (s.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(i),
            a("autoplayStop");
        },
        T = (e, i) => {
          if (s.destroyed || !s.autoplay.running) return;
          clearTimeout(t), e || (m = !0);
          const n = () => {
            a("autoplayPause"),
              s.params.autoplay.waitForTransition
                ? s.wrapperEl.addEventListener("transitionend", w)
                : C();
          };
          if (((s.autoplay.paused = !0), i))
            return f && (o = s.params.autoplay.delay), (f = !1), void n();
          const r = o || s.params.autoplay.delay;
          (o = r - (new Date().getTime() - b)),
            (s.isEnd && o < 0 && !s.params.loop) || (o < 0 && (o = 0), n());
        },
        C = () => {
          (s.isEnd && o < 0 && !s.params.loop) ||
            s.destroyed ||
            !s.autoplay.running ||
            ((b = new Date().getTime()),
            m ? ((m = !1), E(o)) : E(),
            (s.autoplay.paused = !1),
            a("autoplayResume"));
        },
        L = () => {
          if (s.destroyed || !s.autoplay.running) return;
          const e = d();
          "hidden" === e.visibilityState && ((m = !0), T(!0)),
            "visible" === e.visibilityState && C();
        },
        M = (e) => {
          "mouse" === e.pointerType &&
            ((m = !0), s.animating || s.autoplay.paused || T(!0));
        },
        O = (e) => {
          "mouse" === e.pointerType && s.autoplay.paused && C();
        };
      r("init", () => {
        s.params.autoplay.enabled &&
          (s.params.autoplay.pauseOnMouseEnter &&
            (s.el.addEventListener("pointerenter", M),
            s.el.addEventListener("pointerleave", O)),
          d().addEventListener("visibilitychange", L),
          (b = new Date().getTime()),
          x());
      }),
        r("destroy", () => {
          s.el.removeEventListener("pointerenter", M),
            s.el.removeEventListener("pointerleave", O),
            d().removeEventListener("visibilitychange", L),
            s.autoplay.running && S();
        }),
        r("beforeTransitionStart", (e, t, i) => {
          !s.destroyed &&
            s.autoplay.running &&
            (i || !s.params.autoplay.disableOnInteraction ? T(!0, !0) : S());
        }),
        r("sliderFirstMove", () => {
          !s.destroyed &&
            s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction
              ? S()
              : ((u = !0),
                (p = !1),
                (m = !1),
                (h = setTimeout(() => {
                  (m = !0), (p = !0), T(!0);
                }, 200))));
        }),
        r("touchEnd", () => {
          if (!s.destroyed && s.autoplay.running && u) {
            if (
              (clearTimeout(h),
              clearTimeout(t),
              s.params.autoplay.disableOnInteraction)
            )
              return (p = !1), void (u = !1);
            p && s.params.cssMode && C(), (p = !1), (u = !1);
          }
        }),
        r("slideChange", () => {
          !s.destroyed && s.autoplay.running && (f = !0);
        }),
        Object.assign(s.autoplay, { start: x, stop: S, pause: T, resume: C });
    }
    function ce(e, t) {
      const i = y(t);
      return (
        i !== t &&
          ((i.style.backfaceVisibility = "hidden"),
          (i.style["-webkit-backface-visibility"] = "hidden")),
        i
      );
    }
    function de(e) {
      let { swiper: t, duration: i, transformElements: s, allSlides: n } = e;
      const { activeIndex: r } = t;
      if (t.params.virtualTranslate && 0 !== i) {
        let e,
          i = !1;
        (e = n
          ? s
          : s.filter((e) => {
              const i = e.classList.contains("swiper-slide-transform")
                ? ((e) => {
                    if (!e.parentElement)
                      return t.slides.filter(
                        (t) => t.shadowRoot && t.shadowRoot === e.parentNode,
                      )[0];
                    return e.parentElement;
                  })(e)
                : e;
              return t.getSlideIndex(i) === r;
            })),
          e.forEach((e) => {
            !(function (e, t) {
              t &&
                e.addEventListener("transitionend", function i(s) {
                  s.target === e &&
                    (t.call(e, s), e.removeEventListener("transitionend", i));
                });
            })(e, () => {
              if (i) return;
              if (!t || t.destroyed) return;
              (i = !0), (t.animating = !1);
              const e = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
              });
              t.wrapperEl.dispatchEvent(e);
            });
          });
      }
    }
    function ue(e) {
      let { swiper: t, extendParams: i, on: s } = e;
      i({ fadeEffect: { crossFade: !1 } });
      !(function (e) {
        const {
          effect: t,
          swiper: i,
          on: s,
          setTranslate: n,
          setTransition: r,
          overwriteParams: a,
          perspective: l,
          recreateShadows: o,
          getEffectParams: c,
        } = e;
        let d;
        s("beforeInit", () => {
          if (i.params.effect !== t) return;
          i.classNames.push(`${i.params.containerModifierClass}${t}`),
            l &&
              l() &&
              i.classNames.push(`${i.params.containerModifierClass}3d`);
          const e = a ? a() : {};
          Object.assign(i.params, e), Object.assign(i.originalParams, e);
        }),
          s("setTranslate", () => {
            i.params.effect === t && n();
          }),
          s("setTransition", (e, s) => {
            i.params.effect === t && r(s);
          }),
          s("transitionEnd", () => {
            if (i.params.effect === t && o) {
              if (!c || !c().slideShadows) return;
              i.slides.forEach((e) => {
                e.querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                ).forEach((e) => e.remove());
              }),
                o();
            }
          }),
          s("virtualUpdate", () => {
            i.params.effect === t &&
              (i.slides.length || (d = !0),
              requestAnimationFrame(() => {
                d && i.slides && i.slides.length && (n(), (d = !1));
              }));
          });
      })({
        effect: "fade",
        swiper: t,
        on: s,
        setTranslate: () => {
          const { slides: e } = t;
          t.params.fadeEffect;
          for (let i = 0; i < e.length; i += 1) {
            const e = t.slides[i];
            let s = -e.swiperSlideOffset;
            t.params.virtualTranslate || (s -= t.translate);
            let n = 0;
            t.isHorizontal() || ((n = s), (s = 0));
            const r = t.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(e.progress), 0)
                : 1 + Math.min(Math.max(e.progress, -1), 0),
              a = ce(0, e);
            (a.style.opacity = r),
              (a.style.transform = `translate3d(${s}px, ${n}px, 0px)`);
          }
        },
        setTransition: (e) => {
          const i = t.slides.map((e) => y(e));
          i.forEach((t) => {
            t.style.transitionDuration = `${e}ms`;
          }),
            de({ swiper: t, duration: e, transformElements: i, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    }
    function pe() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)',
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    Object.keys(te).forEach((e) => {
      Object.keys(te[e]).forEach((t) => {
        se.prototype[t] = te[e][t];
      });
    }),
      se.use([
        function (e) {
          let { swiper: t, on: i, emit: s } = e;
          const n = p();
          let r = null,
            a = null;
          const l = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (s("beforeResize"), s("resize"));
            },
            o = () => {
              t && !t.destroyed && t.initialized && s("orientationchange");
            };
          i("init", () => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  a = n.requestAnimationFrame(() => {
                    const { width: i, height: s } = t;
                    let n = i,
                      r = s;
                    e.forEach((e) => {
                      let { contentBoxSize: i, contentRect: s, target: a } = e;
                      (a && a !== t.el) ||
                        ((n = s ? s.width : (i[0] || i).inlineSize),
                        (r = s ? s.height : (i[0] || i).blockSize));
                    }),
                      (n === i && r === s) || l();
                  });
                })),
                r.observe(t.el))
              : (n.addEventListener("resize", l),
                n.addEventListener("orientationchange", o));
          }),
            i("destroy", () => {
              a && n.cancelAnimationFrame(a),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                n.removeEventListener("resize", l),
                n.removeEventListener("orientationchange", o);
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: n } = e;
          const r = [],
            a = p(),
            l = function (e, i) {
              void 0 === i && (i = {});
              const s = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const i = function () {
                    n("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(i)
                    : a.setTimeout(i, 0);
                },
              );
              s.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData,
              }),
                r.push(s);
            };
          i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = C(t.hostEl);
                  for (let t = 0; t < e.length; t += 1) l(e[t]);
                }
                l(t.hostEl, { childList: t.params.observeSlideChildren }),
                  l(t.wrapperEl, { attributes: !1 });
              }
            }),
            s("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]),
      window.addEventListener("load", function (e) {
        pe(),
          document.querySelector(".swiper") &&
            (new se(".hero__slider", {
              modules: [re, le, ue, oe],
              effect: "fade",
              fadeEffect: { crossFade: !0 },
              autoplay: { delay: 3500 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 0,
              speed: 800,
              pagination: {
                el: ".swiper-pagination-hero",
                type: "bullets",
                clickable: !0,
                renderBullet: function (e, t) {
                  return '<span class="' + t + '">0' + (e + 1) + "</span>";
                },
              },
              navigation: {
                prevEl: ".hero__btn-prev-slide",
                nextEl: ".hero__btn-next-slide",
              },
            }),
            new se(".surf__slider", {
              modules: [re, oe],
              autoplay: { delay: 3500 },
              observer: !0,
              observeParents: !0,
              slidesPerView: "auto",
              spaceBetween: 0,
              autoHeight: !1,
              speed: 800,
              navigation: {
                prevEl: ".surf__btn-prev-slide",
                nextEl: ".surf__btn-next-slide",
              },
            }),
            new se(".buy-ticket__slider", {
              modules: [re, oe, ue],
              effect: "fade",
              fadeEffect: { crossFade: !0 },
              autoplay: { delay: 3500 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 10,
              autoHeight: !1,
              speed: 800,
              navigation: {
                prevEl: ".buy-ticket__btn-prev-slide",
                nextEl: ".buy-ticket__btn-next-slide",
              },
            }));
      });
    var he = i(807);
    const fe = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
    const me =
      "object" == typeof global && global && global.Object === Object && global;
    var ve = "object" == typeof self && self && self.Object === Object && self;
    const ge = me || ve || Function("return this")();
    const be = function () {
      return ge.Date.now();
    };
    var we = /\s/;
    const ye = function (e) {
      for (var t = e.length; t-- && we.test(e.charAt(t)); );
      return t;
    };
    var Ee = /^\s+/;
    const xe = function (e) {
      return e ? e.slice(0, ye(e) + 1).replace(Ee, "") : e;
    };
    const Se = ge.Symbol;
    var Te = Object.prototype,
      Ce = Te.hasOwnProperty,
      Le = Te.toString,
      Me = Se ? Se.toStringTag : void 0;
    const Oe = function (e) {
      var t = Ce.call(e, Me),
        i = e[Me];
      try {
        e[Me] = void 0;
        var s = !0;
      } catch (e) {}
      var n = Le.call(e);
      return s && (t ? (e[Me] = i) : delete e[Me]), n;
    };
    var ke = Object.prototype.toString;
    const Ae = function (e) {
      return ke.call(e);
    };
    var _e = Se ? Se.toStringTag : void 0;
    const Pe = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : _e && _e in Object(e)
        ? Oe(e)
        : Ae(e);
    };
    const ze = function (e) {
      return null != e && "object" == typeof e;
    };
    const Ie = function (e) {
      return "symbol" == typeof e || (ze(e) && "[object Symbol]" == Pe(e));
    };
    var Ne = /^[-+]0x[0-9a-f]+$/i,
      We = /^0b[01]+$/i,
      De = /^0o[0-7]+$/i,
      Be = parseInt;
    const Ge = function (e) {
      if ("number" == typeof e) return e;
      if (Ie(e)) return NaN;
      if (fe(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = fe(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = xe(e);
      var i = We.test(e);
      return i || De.test(e)
        ? Be(e.slice(2), i ? 2 : 8)
        : Ne.test(e)
        ? NaN
        : +e;
    };
    var $e = Math.max,
      Re = Math.min;
    const Ve = function (e, t, i) {
      var s,
        n,
        r,
        a,
        l,
        o,
        c = 0,
        d = !1,
        u = !1,
        p = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function h(t) {
        var i = s,
          r = n;
        return (s = n = void 0), (c = t), (a = e.apply(r, i));
      }
      function f(e) {
        var i = e - o;
        return void 0 === o || i >= t || i < 0 || (u && e - c >= r);
      }
      function m() {
        var e = be();
        if (f(e)) return v(e);
        l = setTimeout(
          m,
          (function (e) {
            var i = t - (e - o);
            return u ? Re(i, r - (e - c)) : i;
          })(e),
        );
      }
      function v(e) {
        return (l = void 0), p && s ? h(e) : ((s = n = void 0), a);
      }
      function g() {
        var e = be(),
          i = f(e);
        if (((s = arguments), (n = this), (o = e), i)) {
          if (void 0 === l)
            return (function (e) {
              return (c = e), (l = setTimeout(m, t)), d ? h(e) : a;
            })(o);
          if (u) return clearTimeout(l), (l = setTimeout(m, t)), h(o);
        }
        return void 0 === l && (l = setTimeout(m, t)), a;
      }
      return (
        (t = Ge(t) || 0),
        fe(i) &&
          ((d = !!i.leading),
          (r = (u = "maxWait" in i) ? $e(Ge(i.maxWait) || 0, t) : r),
          (p = "trailing" in i ? !!i.trailing : p)),
        (g.cancel = function () {
          void 0 !== l && clearTimeout(l), (c = 0), (s = o = n = l = void 0);
        }),
        (g.flush = function () {
          return void 0 === l ? a : v(be());
        }),
        g
      );
    };
    const He = function (e, t, i) {
      var s = !0,
        n = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        fe(i) &&
          ((s = "leading" in i ? !!i.leading : s),
          (n = "trailing" in i ? !!i.trailing : n)),
        Ve(e, t, { leading: s, maxWait: t, trailing: n })
      );
    };
    var Fe = function () {
        return (
          (Fe =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          Fe.apply(this, arguments)
        );
      },
      qe = null,
      je = null;
    function Xe() {
      if (null === qe) {
        if ("undefined" == typeof document) return (qe = 0);
        var e = document.body,
          t = document.createElement("div");
        t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
        var i = t.getBoundingClientRect().right;
        e.removeChild(t), (qe = i);
      }
      return qe;
    }
    function Ye(e) {
      return e && e.ownerDocument && e.ownerDocument.defaultView
        ? e.ownerDocument.defaultView
        : window;
    }
    function Ue(e) {
      return e && e.ownerDocument ? e.ownerDocument : document;
    }
    he &&
      window.addEventListener("resize", function () {
        je !== window.devicePixelRatio &&
          ((je = window.devicePixelRatio), (qe = null));
      });
    var Ke = function (e) {
      return Array.prototype.reduce.call(
        e,
        function (e, t) {
          var i = t.name.match(/data-simplebar-(.+)/);
          if (i) {
            var s = i[1].replace(/\W+(.)/g, function (e, t) {
              return t.toUpperCase();
            });
            switch (t.value) {
              case "true":
                e[s] = !0;
                break;
              case "false":
                e[s] = !1;
                break;
              case void 0:
                e[s] = !0;
                break;
              default:
                e[s] = t.value;
            }
          }
          return e;
        },
        {},
      );
    };
    function Ze(e, t) {
      var i;
      e && (i = e.classList).add.apply(i, t.split(" "));
    }
    function Je(e, t) {
      e &&
        t.split(" ").forEach(function (t) {
          e.classList.remove(t);
        });
    }
    function Qe(e) {
      return ".".concat(e.split(" ").join("."));
    }
    var et = Object.freeze({
        __proto__: null,
        getElementWindow: Ye,
        getElementDocument: Ue,
        getOptions: Ke,
        addClasses: Ze,
        removeClasses: Je,
        classNamesToQuery: Qe,
      }),
      tt = Ye,
      it = Ue,
      st = Ke,
      nt = Ze,
      rt = Je,
      at = Qe,
      lt = (function () {
        function e(t, i) {
          void 0 === i && (i = {});
          var s = this;
          if (
            ((this.removePreventClickId = null),
            (this.minScrollbarWidth = 20),
            (this.stopScrollDelay = 175),
            (this.isScrolling = !1),
            (this.isMouseEntering = !1),
            (this.scrollXTicking = !1),
            (this.scrollYTicking = !1),
            (this.wrapperEl = null),
            (this.contentWrapperEl = null),
            (this.contentEl = null),
            (this.offsetEl = null),
            (this.maskEl = null),
            (this.placeholderEl = null),
            (this.heightAutoObserverWrapperEl = null),
            (this.heightAutoObserverEl = null),
            (this.rtlHelpers = null),
            (this.scrollbarWidth = 0),
            (this.resizeObserver = null),
            (this.mutationObserver = null),
            (this.elStyles = null),
            (this.isRtl = null),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.onMouseMove = function () {}),
            (this.onWindowResize = function () {}),
            (this.onStopScrolling = function () {}),
            (this.onMouseEntered = function () {}),
            (this.onScroll = function () {
              var e = tt(s.el);
              s.scrollXTicking ||
                (e.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
                s.scrollYTicking ||
                  (e.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0)),
                s.isScrolling ||
                  ((s.isScrolling = !0), nt(s.el, s.classNames.scrolling)),
                s.showScrollbar("x"),
                s.showScrollbar("y"),
                s.onStopScrolling();
            }),
            (this.scrollX = function () {
              s.axis.x.isOverflowing && s.positionScrollbar("x"),
                (s.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              s.axis.y.isOverflowing && s.positionScrollbar("y"),
                (s.scrollYTicking = !1);
            }),
            (this._onStopScrolling = function () {
              rt(s.el, s.classNames.scrolling),
                s.options.autoHide &&
                  (s.hideScrollbar("x"), s.hideScrollbar("y")),
                (s.isScrolling = !1);
            }),
            (this.onMouseEnter = function () {
              s.isMouseEntering ||
                (nt(s.el, s.classNames.mouseEntered),
                s.showScrollbar("x"),
                s.showScrollbar("y"),
                (s.isMouseEntering = !0)),
                s.onMouseEntered();
            }),
            (this._onMouseEntered = function () {
              rt(s.el, s.classNames.mouseEntered),
                s.options.autoHide &&
                  (s.hideScrollbar("x"), s.hideScrollbar("y")),
                (s.isMouseEntering = !1);
            }),
            (this._onMouseMove = function (e) {
              (s.mouseX = e.clientX),
                (s.mouseY = e.clientY),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseMoveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              s.onMouseMove.cancel(),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  s.onMouseLeaveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  s.onMouseLeaveForAxis("y"),
                (s.mouseX = -1),
                (s.mouseY = -1);
            }),
            (this._onWindowResize = function () {
              (s.scrollbarWidth = s.getScrollbarWidth()),
                s.hideNativeScrollbar();
            }),
            (this.onPointerEvent = function (e) {
              var t, i;
              s.axis.x.track.el &&
                s.axis.y.track.el &&
                s.axis.x.scrollbar.el &&
                s.axis.y.scrollbar.el &&
                ((s.axis.x.track.rect =
                  s.axis.x.track.el.getBoundingClientRect()),
                (s.axis.y.track.rect =
                  s.axis.y.track.el.getBoundingClientRect()),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                  (t = s.isWithinBounds(s.axis.x.track.rect)),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                  (i = s.isWithinBounds(s.axis.y.track.rect)),
                (t || i) &&
                  (e.stopPropagation(),
                  "pointerdown" === e.type &&
                    "touch" !== e.pointerType &&
                    (t &&
                      ((s.axis.x.scrollbar.rect =
                        s.axis.x.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.x.scrollbar.rect)
                        ? s.onDragStart(e, "x")
                        : s.onTrackClick(e, "x")),
                    i &&
                      ((s.axis.y.scrollbar.rect =
                        s.axis.y.scrollbar.el.getBoundingClientRect()),
                      s.isWithinBounds(s.axis.y.scrollbar.rect)
                        ? s.onDragStart(e, "y")
                        : s.onTrackClick(e, "y")))));
            }),
            (this.drag = function (t) {
              var i, n, r, a, l, o, c, d, u, p, h;
              if (s.draggedAxis && s.contentWrapperEl) {
                var f = s.axis[s.draggedAxis].track,
                  m =
                    null !==
                      (n =
                        null === (i = f.rect) || void 0 === i
                          ? void 0
                          : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== n
                      ? n
                      : 0,
                  v = s.axis[s.draggedAxis].scrollbar,
                  g =
                    null !==
                      (a =
                        null === (r = s.contentWrapperEl) || void 0 === r
                          ? void 0
                          : r[s.axis[s.draggedAxis].scrollSizeAttr]) &&
                    void 0 !== a
                      ? a
                      : 0,
                  b = parseInt(
                    null !==
                      (o =
                        null === (l = s.elStyles) || void 0 === l
                          ? void 0
                          : l[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== o
                      ? o
                      : "0px",
                    10,
                  );
                t.preventDefault(), t.stopPropagation();
                var w =
                    ("y" === s.draggedAxis ? t.pageY : t.pageX) -
                    (null !==
                      (d =
                        null === (c = f.rect) || void 0 === c
                          ? void 0
                          : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== d
                      ? d
                      : 0) -
                    s.axis[s.draggedAxis].dragOffset,
                  y =
                    ((w =
                      "x" === s.draggedAxis && s.isRtl
                        ? (null !==
                            (p =
                              null === (u = f.rect) || void 0 === u
                                ? void 0
                                : u[s.axis[s.draggedAxis].sizeAttr]) &&
                          void 0 !== p
                            ? p
                            : 0) -
                          v.size -
                          w
                        : w) /
                      (m - v.size)) *
                    (g - b);
                "x" === s.draggedAxis &&
                  s.isRtl &&
                  (y = (
                    null === (h = e.getRtlHelpers()) || void 0 === h
                      ? void 0
                      : h.isScrollingToNegative
                  )
                    ? -y
                    : y),
                  (s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] =
                    y);
              }
            }),
            (this.onEndDrag = function (e) {
              var t = it(s.el),
                i = tt(s.el);
              e.preventDefault(),
                e.stopPropagation(),
                rt(s.el, s.classNames.dragging),
                t.removeEventListener("mousemove", s.drag, !0),
                t.removeEventListener("mouseup", s.onEndDrag, !0),
                (s.removePreventClickId = i.setTimeout(function () {
                  t.removeEventListener("click", s.preventClick, !0),
                    t.removeEventListener("dblclick", s.preventClick, !0),
                    (s.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.options = Fe(Fe({}, e.defaultOptions), i)),
            (this.classNames = Fe(
              Fe({}, e.defaultOptions.classNames),
              i.classNames,
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
            }),
            "object" != typeof this.el || !this.el.nodeName)
          )
            throw new Error(
              "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                this.el,
              ),
            );
          (this.onMouseMove = He(this._onMouseMove, 64)),
            (this.onWindowResize = Ve(this._onWindowResize, 64, {
              leading: !0,
            })),
            (this.onStopScrolling = Ve(
              this._onStopScrolling,
              this.stopScrollDelay,
            )),
            (this.onMouseEntered = Ve(
              this._onMouseEntered,
              this.stopScrollDelay,
            )),
            this.init();
        }
        return (
          (e.getRtlHelpers = function () {
            if (e.rtlHelpers) return e.rtlHelpers;
            var t = document.createElement("div");
            t.innerHTML =
              '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
            var i = t.firstElementChild,
              s = null == i ? void 0 : i.firstElementChild;
            if (!s) return null;
            document.body.appendChild(i), (i.scrollLeft = 0);
            var n = e.getOffset(i),
              r = e.getOffset(s);
            i.scrollLeft = -999;
            var a = e.getOffset(s);
            return (
              document.body.removeChild(i),
              (e.rtlHelpers = {
                isScrollOriginAtZero: n.left !== r.left,
                isScrollingToNegative: r.left !== a.left,
              }),
              e.rtlHelpers
            );
          }),
          (e.prototype.getScrollbarWidth = function () {
            try {
              return (this.contentWrapperEl &&
                "none" ===
                  getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                    .display) ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : Xe();
            } catch (e) {
              return Xe();
            }
          }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              i = it(e),
              s = tt(e);
            return {
              top: t.top + (s.pageYOffset || i.documentElement.scrollTop),
              left: t.left + (s.pageXOffset || i.documentElement.scrollLeft),
            };
          }),
          (e.prototype.init = function () {
            he &&
              (this.initDOM(),
              (this.rtlHelpers = e.getRtlHelpers()),
              (this.scrollbarWidth = this.getScrollbarWidth()),
              this.recalculate(),
              this.initListeners());
          }),
          (e.prototype.initDOM = function () {
            var e, t;
            (this.wrapperEl = this.el.querySelector(
              at(this.classNames.wrapper),
            )),
              (this.contentWrapperEl =
                this.options.scrollableNode ||
                this.el.querySelector(at(this.classNames.contentWrapper))),
              (this.contentEl =
                this.options.contentNode ||
                this.el.querySelector(at(this.classNames.contentEl))),
              (this.offsetEl = this.el.querySelector(
                at(this.classNames.offset),
              )),
              (this.maskEl = this.el.querySelector(at(this.classNames.mask))),
              (this.placeholderEl = this.findChild(
                this.wrapperEl,
                at(this.classNames.placeholder),
              )),
              (this.heightAutoObserverWrapperEl = this.el.querySelector(
                at(this.classNames.heightAutoObserverWrapperEl),
              )),
              (this.heightAutoObserverEl = this.el.querySelector(
                at(this.classNames.heightAutoObserverEl),
              )),
              (this.axis.x.track.el = this.findChild(
                this.el,
                ""
                  .concat(at(this.classNames.track))
                  .concat(at(this.classNames.horizontal)),
              )),
              (this.axis.y.track.el = this.findChild(
                this.el,
                ""
                  .concat(at(this.classNames.track))
                  .concat(at(this.classNames.vertical)),
              )),
              (this.axis.x.scrollbar.el =
                (null === (e = this.axis.x.track.el) || void 0 === e
                  ? void 0
                  : e.querySelector(at(this.classNames.scrollbar))) || null),
              (this.axis.y.scrollbar.el =
                (null === (t = this.axis.y.track.el) || void 0 === t
                  ? void 0
                  : t.querySelector(at(this.classNames.scrollbar))) || null),
              this.options.autoHide ||
                (nt(this.axis.x.scrollbar.el, this.classNames.visible),
                nt(this.axis.y.scrollbar.el, this.classNames.visible));
          }),
          (e.prototype.initListeners = function () {
            var e,
              t = this,
              i = tt(this.el);
            if (
              (this.el.addEventListener("mouseenter", this.onMouseEnter),
              this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              null === (e = this.contentWrapperEl) ||
                void 0 === e ||
                e.addEventListener("scroll", this.onScroll),
              i.addEventListener("resize", this.onWindowResize),
              this.contentEl)
            ) {
              if (window.ResizeObserver) {
                var s = !1,
                  n = i.ResizeObserver || ResizeObserver;
                (this.resizeObserver = new n(function () {
                  s &&
                    i.requestAnimationFrame(function () {
                      t.recalculate();
                    });
                })),
                  this.resizeObserver.observe(this.el),
                  this.resizeObserver.observe(this.contentEl),
                  i.requestAnimationFrame(function () {
                    s = !0;
                  });
              }
              (this.mutationObserver = new i.MutationObserver(function () {
                i.requestAnimationFrame(function () {
                  t.recalculate();
                });
              })),
                this.mutationObserver.observe(this.contentEl, {
                  childList: !0,
                  subtree: !0,
                  characterData: !0,
                });
            }
          }),
          (e.prototype.recalculate = function () {
            if (
              this.heightAutoObserverEl &&
              this.contentEl &&
              this.contentWrapperEl &&
              this.wrapperEl &&
              this.placeholderEl
            ) {
              var e = tt(this.el);
              (this.elStyles = e.getComputedStyle(this.el)),
                (this.isRtl = "rtl" === this.elStyles.direction);
              var t = this.contentEl.offsetWidth,
                i = this.heightAutoObserverEl.offsetHeight <= 1,
                s = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                n = this.contentWrapperEl.offsetWidth,
                r = this.elStyles.overflowX,
                a = this.elStyles.overflowY;
              (this.contentEl.style.padding = ""
                .concat(this.elStyles.paddingTop, " ")
                .concat(this.elStyles.paddingRight, " ")
                .concat(this.elStyles.paddingBottom, " ")
                .concat(this.elStyles.paddingLeft)),
                (this.wrapperEl.style.margin = "-"
                  .concat(this.elStyles.paddingTop, " -")
                  .concat(this.elStyles.paddingRight, " -")
                  .concat(this.elStyles.paddingBottom, " -")
                  .concat(this.elStyles.paddingLeft));
              var l = this.contentEl.scrollHeight,
                o = this.contentEl.scrollWidth;
              (this.contentWrapperEl.style.height = i ? "auto" : "100%"),
                (this.placeholderEl.style.width = s
                  ? "".concat(t || o, "px")
                  : "auto"),
                (this.placeholderEl.style.height = "".concat(l, "px"));
              var c = this.contentWrapperEl.offsetHeight;
              (this.axis.x.isOverflowing = 0 !== t && o > t),
                (this.axis.y.isOverflowing = l > c),
                (this.axis.x.isOverflowing =
                  "hidden" !== r && this.axis.x.isOverflowing),
                (this.axis.y.isOverflowing =
                  "hidden" !== a && this.axis.y.isOverflowing),
                (this.axis.x.forceVisible =
                  "x" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                (this.axis.y.forceVisible =
                  "y" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                this.hideNativeScrollbar();
              var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
              (this.axis.x.isOverflowing =
                this.axis.x.isOverflowing && o > n - u),
                (this.axis.y.isOverflowing =
                  this.axis.y.isOverflowing && l > c - d),
                (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                this.axis.x.scrollbar.el &&
                  (this.axis.x.scrollbar.el.style.width = "".concat(
                    this.axis.x.scrollbar.size,
                    "px",
                  )),
                this.axis.y.scrollbar.el &&
                  (this.axis.y.scrollbar.el.style.height = "".concat(
                    this.axis.y.scrollbar.size,
                    "px",
                  )),
                this.positionScrollbar("x"),
                this.positionScrollbar("y"),
                this.toggleTrackVisibility("x"),
                this.toggleTrackVisibility("y");
            }
          }),
          (e.prototype.getScrollbarSize = function (e) {
            var t, i;
            if (
              (void 0 === e && (e = "y"),
              !this.axis[e].isOverflowing || !this.contentEl)
            )
              return 0;
            var s,
              n = this.contentEl[this.axis[e].scrollSizeAttr],
              r =
                null !==
                  (i =
                    null === (t = this.axis[e].track.el) || void 0 === t
                      ? void 0
                      : t[this.axis[e].offsetSizeAttr]) && void 0 !== i
                  ? i
                  : 0,
              a = r / n;
            return (
              (s = Math.max(~~(a * r), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (s = Math.min(s, this.options.scrollbarMaxSize)),
              s
            );
          }),
          (e.prototype.positionScrollbar = function (t) {
            var i, s, n;
            void 0 === t && (t = "y");
            var r = this.axis[t].scrollbar;
            if (
              this.axis[t].isOverflowing &&
              this.contentWrapperEl &&
              r.el &&
              this.elStyles
            ) {
              var a = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                l =
                  (null === (i = this.axis[t].track.el) || void 0 === i
                    ? void 0
                    : i[this.axis[t].offsetSizeAttr]) || 0,
                o = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
              (c =
                "x" === t &&
                this.isRtl &&
                (null === (s = e.getRtlHelpers()) || void 0 === s
                  ? void 0
                  : s.isScrollOriginAtZero)
                  ? -c
                  : c),
                "x" === t &&
                  this.isRtl &&
                  (c = (
                    null === (n = e.getRtlHelpers()) || void 0 === n
                      ? void 0
                      : n.isScrollingToNegative
                  )
                    ? c
                    : -c);
              var d = c / (a - o),
                u = ~~((l - r.size) * d);
              (u = "x" === t && this.isRtl ? -u + (l - r.size) : u),
                (r.el.style.transform =
                  "x" === t
                    ? "translate3d(".concat(u, "px, 0, 0)")
                    : "translate3d(0, ".concat(u, "px, 0)"));
            }
          }),
          (e.prototype.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              i = this.axis[e].scrollbar.el;
            t &&
              i &&
              this.contentWrapperEl &&
              (this.axis[e].isOverflowing || this.axis[e].forceVisible
                ? ((t.style.visibility = "visible"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "scroll"),
                  this.el.classList.add(
                    "".concat(this.classNames.scrollable, "-").concat(e),
                  ))
                : ((t.style.visibility = "hidden"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "hidden"),
                  this.el.classList.remove(
                    "".concat(this.classNames.scrollable, "-").concat(e),
                  )),
              this.axis[e].isOverflowing
                ? (i.style.display = "block")
                : (i.style.display = "none"));
          }),
          (e.prototype.showScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                !this.axis[e].scrollbar.isVisible &&
                (nt(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !0));
          }),
          (e.prototype.hideScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                this.axis[e].scrollbar.isVisible &&
                (rt(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !1));
          }),
          (e.prototype.hideNativeScrollbar = function () {
            this.offsetEl &&
              ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
                this.axis.y.isOverflowing || this.axis.y.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"));
          }),
          (e.prototype.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e];
            t.track.el &&
              t.scrollbar.el &&
              ((t.track.rect = t.track.el.getBoundingClientRect()),
              (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(t.track.rect)
                ? (this.showScrollbar(e),
                  nt(t.track.el, this.classNames.hover),
                  this.isWithinBounds(t.scrollbar.rect)
                    ? nt(t.scrollbar.el, this.classNames.hover)
                    : rt(t.scrollbar.el, this.classNames.hover))
                : (rt(t.track.el, this.classNames.hover),
                  this.options.autoHide && this.hideScrollbar(e)));
          }),
          (e.prototype.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              rt(this.axis[e].track.el, this.classNames.hover),
              rt(this.axis[e].scrollbar.el, this.classNames.hover),
              this.options.autoHide && this.hideScrollbar(e);
          }),
          (e.prototype.onDragStart = function (e, t) {
            var i;
            void 0 === t && (t = "y");
            var s = it(this.el),
              n = tt(this.el),
              r = this.axis[t].scrollbar,
              a = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset =
              a -
              ((null === (i = r.rect) || void 0 === i
                ? void 0
                : i[this.axis[t].offsetAttr]) || 0)),
              (this.draggedAxis = t),
              nt(this.el, this.classNames.dragging),
              s.addEventListener("mousemove", this.drag, !0),
              s.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (s.addEventListener("click", this.preventClick, !0),
                  s.addEventListener("dblclick", this.preventClick, !0))
                : (n.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (e.prototype.onTrackClick = function (e, t) {
            var i,
              s,
              n,
              r,
              a = this;
            void 0 === t && (t = "y");
            var l = this.axis[t];
            if (
              this.options.clickOnTrack &&
              l.scrollbar.el &&
              this.contentWrapperEl
            ) {
              e.preventDefault();
              var o = tt(this.el);
              this.axis[t].scrollbar.rect =
                l.scrollbar.el.getBoundingClientRect();
              var c =
                  null !==
                    (s =
                      null === (i = this.axis[t].scrollbar.rect) || void 0 === i
                        ? void 0
                        : i[this.axis[t].offsetAttr]) && void 0 !== s
                    ? s
                    : 0,
                d = parseInt(
                  null !==
                    (r =
                      null === (n = this.elStyles) || void 0 === n
                        ? void 0
                        : n[this.axis[t].sizeAttr]) && void 0 !== r
                    ? r
                    : "0px",
                  10,
                ),
                u = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                p =
                  ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                h = -1 === p ? u - d : u + d,
                f = function () {
                  a.contentWrapperEl &&
                    (-1 === p
                      ? u > h &&
                        ((u -= 40),
                        (a.contentWrapperEl[a.axis[t].scrollOffsetAttr] = u),
                        o.requestAnimationFrame(f))
                      : u < h &&
                        ((u += 40),
                        (a.contentWrapperEl[a.axis[t].scrollOffsetAttr] = u),
                        o.requestAnimationFrame(f)));
                };
              f();
            }
          }),
          (e.prototype.getContentElement = function () {
            return this.contentEl;
          }),
          (e.prototype.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (e.prototype.removeListeners = function () {
            var e = tt(this.el);
            this.el.removeEventListener("mouseenter", this.onMouseEnter),
              this.el.removeEventListener(
                "pointerdown",
                this.onPointerEvent,
                !0,
              ),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll,
                ),
              e.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.onMouseMove.cancel(),
              this.onWindowResize.cancel(),
              this.onStopScrolling.cancel(),
              this.onMouseEntered.cancel();
          }),
          (e.prototype.unMount = function () {
            this.removeListeners();
          }),
          (e.prototype.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (e.prototype.findChild = function (e, t) {
            var i =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return i.call(e, t);
            })[0];
          }),
          (e.rtlHelpers = null),
          (e.defaultOptions = {
            forceVisible: !1,
            clickOnTrack: !0,
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            ariaLabel: "scrollable content",
            classNames: {
              contentEl: "simplebar-content",
              contentWrapper: "simplebar-content-wrapper",
              offset: "simplebar-offset",
              mask: "simplebar-mask",
              wrapper: "simplebar-wrapper",
              placeholder: "simplebar-placeholder",
              scrollbar: "simplebar-scrollbar",
              track: "simplebar-track",
              heightAutoObserverWrapperEl:
                "simplebar-height-auto-observer-wrapper",
              heightAutoObserverEl: "simplebar-height-auto-observer",
              visible: "simplebar-visible",
              horizontal: "simplebar-horizontal",
              vertical: "simplebar-vertical",
              hover: "simplebar-hover",
              dragging: "simplebar-dragging",
              scrolling: "simplebar-scrolling",
              scrollable: "simplebar-scrollable",
              mouseEntered: "simplebar-mouse-entered",
            },
            scrollableNode: null,
            contentNode: null,
            autoHide: !0,
          }),
          (e.getOptions = st),
          (e.helpers = et),
          e
        );
      })(),
      ot = function (e, t) {
        return (
          (ot =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }),
          ot(e, t)
        );
      };
    var ct = lt.helpers,
      dt = ct.getOptions,
      ut = ct.addClasses,
      pt = (function (e) {
        function t() {
          for (var i = [], s = 0; s < arguments.length; s++)
            i[s] = arguments[s];
          var n = e.apply(this, i) || this;
          return t.instances.set(i[0], n), n;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function i() {
              this.constructor = e;
            }
            ot(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          })(t, e),
          (t.initDOMLoadedElements = function () {
            document.removeEventListener(
              "DOMContentLoaded",
              this.initDOMLoadedElements,
            ),
              window.removeEventListener("load", this.initDOMLoadedElements),
              Array.prototype.forEach.call(
                document.querySelectorAll("[data-simplebar]"),
                function (e) {
                  "init" === e.getAttribute("data-simplebar") ||
                    t.instances.has(e) ||
                    new t(e, dt(e.attributes));
                },
              );
          }),
          (t.removeObserver = function () {
            var e;
            null === (e = t.globalObserver) || void 0 === e || e.disconnect();
          }),
          (t.prototype.initDOM = function () {
            var e,
              t,
              i,
              s = this;
            if (
              !Array.prototype.filter.call(this.el.children, function (e) {
                return e.classList.contains(s.classNames.wrapper);
              }).length
            ) {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  ut(this.wrapperEl, this.classNames.wrapper),
                  ut(this.contentWrapperEl, this.classNames.contentWrapper),
                  ut(this.offsetEl, this.classNames.offset),
                  ut(this.maskEl, this.classNames.mask),
                  ut(this.contentEl, this.classNames.contentEl),
                  ut(this.placeholderEl, this.classNames.placeholder),
                  ut(
                    this.heightAutoObserverWrapperEl,
                    this.classNames.heightAutoObserverWrapperEl,
                  ),
                  ut(
                    this.heightAutoObserverEl,
                    this.classNames.heightAutoObserverEl,
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl,
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl),
                null === (e = this.contentWrapperEl) ||
                  void 0 === e ||
                  e.setAttribute("tabindex", "0"),
                null === (t = this.contentWrapperEl) ||
                  void 0 === t ||
                  t.setAttribute("role", "region"),
                null === (i = this.contentWrapperEl) ||
                  void 0 === i ||
                  i.setAttribute("aria-label", this.options.ariaLabel);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var n = document.createElement("div"),
                r = document.createElement("div");
              ut(n, this.classNames.track),
                ut(r, this.classNames.scrollbar),
                n.appendChild(r),
                (this.axis.x.track.el = n.cloneNode(!0)),
                ut(this.axis.x.track.el, this.classNames.horizontal),
                (this.axis.y.track.el = n.cloneNode(!0)),
                ut(this.axis.y.track.el, this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            lt.prototype.initDOM.call(this),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.prototype.unMount = function () {
            lt.prototype.unMount.call(this), t.instances.delete(this.el);
          }),
          (t.initHtmlApi = function () {
            (this.initDOMLoadedElements =
              this.initDOMLoadedElements.bind(this)),
              "undefined" != typeof MutationObserver &&
                ((this.globalObserver = new MutationObserver(
                  t.handleMutations,
                )),
                this.globalObserver.observe(document, {
                  childList: !0,
                  subtree: !0,
                })),
              "complete" === document.readyState ||
              ("loading" !== document.readyState &&
                !document.documentElement.doScroll)
                ? window.setTimeout(this.initDOMLoadedElements)
                : (document.addEventListener(
                    "DOMContentLoaded",
                    this.initDOMLoadedElements,
                  ),
                  window.addEventListener("load", this.initDOMLoadedElements));
          }),
          (t.handleMutations = function (e) {
            e.forEach(function (e) {
              e.addedNodes.forEach(function (e) {
                1 === e.nodeType &&
                  (e.hasAttribute("data-simplebar")
                    ? !t.instances.has(e) &&
                      document.documentElement.contains(e) &&
                      new t(e, dt(e.attributes))
                    : e
                        .querySelectorAll("[data-simplebar]")
                        .forEach(function (e) {
                          "init" !== e.getAttribute("data-simplebar") &&
                            !t.instances.has(e) &&
                            document.documentElement.contains(e) &&
                            new t(e, dt(e.attributes));
                        }));
              }),
                e.removedNodes.forEach(function (e) {
                  1 === e.nodeType &&
                    ("init" === e.getAttribute("data-simplebar")
                      ? t.instances.has(e) &&
                        !document.documentElement.contains(e) &&
                        t.instances.get(e).unMount()
                      : Array.prototype.forEach.call(
                          e.querySelectorAll('[data-simplebar="init"]'),
                          function (e) {
                            t.instances.has(e) &&
                              !document.documentElement.contains(e) &&
                              t.instances.get(e).unMount();
                          },
                        ));
                });
            });
          }),
          (t.instances = new WeakMap()),
          t
        );
      })(lt);
    he && pt.initHtmlApi();
    new (i(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    class ht {
      constructor(e) {
        (this.config = Object.assign({ logging: !1 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]"),
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`,
          ),
            r(
              Array.from(e).map(function (e) {
                return `${e.dataset.watchRoot ? e.dataset.watchRoot : null}|${
                  e.dataset.watchMargin ? e.dataset.watchMargin : "0px"
                }|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              }),
            ).forEach((t) => {
              let i = t.split("|"),
                s = { root: i[0], margin: i[1], threshold: i[2] },
                n = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    i = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    n = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === s.root &&
                    String(i) === s.margin &&
                    String(n) === s.threshold
                  )
                    return e;
                }),
                r = this.getScrollWatcherConfig(s);
              this.scrollWatcherInit(n, r);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`,
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %",
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`,
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`,
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && n(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const i = e.target;
        this.scrollWatcherIntersecting(e, i),
          i.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(i, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } }),
          );
      }
    }
    let ft = !1;
    setTimeout(() => {
      if (ft) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    let mt = !0;
    document.addEventListener("click", function (e) {
      let t = e.target;
      mt && t.closest(".icon-menu")
        ? (document.documentElement.classList.add("menu-open"),
          document.documentElement.classList.add("lock"),
          (mt = !1))
        : t.closest(".header__column") ||
          (document.documentElement.classList.remove("menu-open"),
          document.documentElement.classList.remove("lock"),
          (mt = !0));
    }),
      document.documentElement.classList.add("lock");
    let vt = document.querySelector(".preloader");
    (window.onload = function () {
      vt &&
        (vt.classList.add("hide-preloader"),
        setInterval(function () {
          vt.classList.add("preloader-hidden");
        }, 990)),
        document.documentElement.classList.remove("lock");
    }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      e.any() && document.documentElement.classList.add("touch"),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
          function t() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", t), t();
        }
      })(),
      document.addEventListener("click", function (e) {
        let t = e.target;
        if (t.closest(".quantity__button")) {
          let e = parseInt(
            t.closest(".row-info-ticket__item").querySelector("input").value,
          );
          t.classList.contains("quantity__button_plus")
            ? e++
            : (--e, e < 1 && (e = 1)),
            (t.closest(".row-info-ticket__item").querySelector("input").value =
              e);
        }
      }),
      (function () {
        const e = document.querySelectorAll(".rating");
        e.length > 0 &&
          (function () {
            let t, i;
            for (let t = 0; t < e.length; t++) {
              s(e[t]);
            }
            function s(e) {
              n(e), r(), e.classList.contains("rating_set") && a(e);
            }
            function n(e) {
              (t = e.querySelector(".rating__active")),
                (i = e.querySelector(".rating__value"));
            }
            function r(e = i.innerHTML) {
              const s = e / 0.05;
              t.style.width = `${s}%`;
            }
            function a(e) {
              const t = e.querySelectorAll(".rating__item");
              for (let s = 0; s < t.length; s++) {
                const a = t[s];
                a.addEventListener("mouseenter", function (t) {
                  n(e), r(a.value);
                }),
                  a.addEventListener("mouseleave", function (e) {
                    r();
                  }),
                  a.addEventListener("click", function (t) {
                    n(e),
                      e.dataset.ajax
                        ? l(a.value, e)
                        : ((i.innerHTML = s + 1), r());
                  });
              }
            }
            async function l(e, t) {
              if (!t.classList.contains("rating_sending")) {
                t.classList.add("rating_sending");
                let e = await fetch("rating.json", { method: "GET" });
                if (e.ok) {
                  const s = (await e.json()).newRating;
                  (i.innerHTML = s), r(), t.classList.remove("rating_sending");
                } else alert("Ошибка"), t.classList.remove("rating_sending");
              }
            }
          })();
      })(),
      new ht({}),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const i = t.closest("[data-goto]"),
                s = i.dataset.goto ? i.dataset.goto : "",
                n = !!i.hasAttribute("data-goto-header"),
                r = i.dataset.gotoSpeed ? i.dataset.gotoSpeed : "500";
              a(s, n, r), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              i = t.target;
            if ("navigator" === i.dataset.watch) {
              const e = i.id,
                s =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="#${e}"]`));
              t.isIntersecting
                ? s && s.classList.add("_navigator-active")
                : s && s.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })();
  })();
})();
