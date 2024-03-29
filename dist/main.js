/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      t(e)
    );
  }
  function e(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function n(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function r(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? n(Object(r), !0).forEach(function (e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : n(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function o(e, n, r) {
    return (
      (n = (function (e) {
        var n = (function (e, n) {
          if ("object" !== t(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, "string");
            if ("object" !== t(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" === t(n) ? n : String(n);
      })(n)) in e
        ? Object.defineProperty(e, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[n] = r),
      e
    );
  }
  function i() {
    y("#basket"), y("#backdrop");
  }
  var a =
    "\n:host {\n    display: block;\n}\n.card-container {\n  box-sizing: border-box;\n    width: 170px;\n    height: 260px;\n    margin: 2rem auto;\n    background: url(./assets/deco-card.png);\n    background-size: 100%;\n    position: relative;\n    padding-top: 30px;\n  }\n\n  .name {\n    margin-block-end: 0;\n    margin-block-start: 0;\n    text-align: center;\n    font-size: 20px;\n    line-height: 20px;\n    font-style: italic;\n  }\n  .price-badge {\n    background-color: rgba(193, 202, 194, 0.6);\n    border-radius: 50%;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    right: -0.5em; \n    transform: translate(50%); \n    display: none;\n  }\n  .price-whole {\n    font-family: 'Lobster', cursive;\n    display: block;\n    width: 40px;\n    padding: 0.3rem 0 0 0;\n    font-weight: bold;\n    text-align: center;\n    background-color: rgba(255, 202, 92);\n    border-bottom: 1px solid #ccc;\n  }\n  .price-change {\n    font-family: 'Lobster', cursive;\n    display: block;\n    width: 40px;\n    padding: 0.1rem 0 0.3rem 0;\n    text-align: center;\n    font-style: italic;\n    font-size: 0.7em;\n    background-color: rgba(122, 175, 136, 1);\n  }\n  .add-icon {\n    background-color: rgba(193, 202, 194, 0.6);\n    padding: 0.1em;\n    border-bottom-left-radius: 10px;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    text-align: center;\n    color: #333;\n    position: absolute;\n    top: 50px;\n    right: -0.5em; \n    transform: translate(50%); \n    transition: all 0.2s;\n    display: none;\n  }\n  .plus-sign {\n    // display: block;\n    font-family: courier;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 15px;\n    padding: 0;\n    margin: 0;\n  }\n  .add-badge {\n    font-size: 14px;\n    line-height: 10px;\n    font-family: courier;\n    margin: 0;\n  }\n  \n  .add-icon:hover {\n    background-color: rgba(193, 202, 194, 1);\n    border: 1px solid rgba(255, 202, 92);\n    cursor: pointer;\n  }\n\n  .image-frame {\n    width: 136px;\n    height: 115px;\n    margin: auto;\n  }\n  .image-frame img {\n    width: 100%;\n    height: 100%;\n  }\n  .description {\n    margin-top: 40px;\n    text-align: center;\n  }";
  function c(t) {
    return (
      (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      c(t)
    );
  }
  function u(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          t,
          (void 0,
          (o = (function (t, e) {
            if ("object" !== c(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, "string");
              if ("object" !== c(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(r.key)),
          "symbol" === c(o) ? o : String(o)),
          r
        );
    }
    var o;
  }
  function l(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return (
      (l = function (t) {
        if (
          null === t ||
          ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return t;
        var n;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return s(t, arguments, p(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          f(r, t)
        );
      }),
      l(t)
    );
  }
  function s(t, e, n) {
    return (
      (s = d()
        ? Reflect.construct.bind()
        : function (t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var o = new (Function.bind.apply(t, r))();
            return n && f(o, n.prototype), o;
          }),
      s.apply(null, arguments)
    );
  }
  function d() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (t) {
      return !1;
    }
  }
  function f(t, e) {
    return (
      (f = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      f(t, e)
    );
  }
  function p(t) {
    return (
      (p = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      p(t)
    );
  }
  var h = (function (t) {
    !(function (t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e && f(t, e);
    })(y, t);
    var n,
      o,
      i,
      l,
      s,
      h =
        ((l = y),
        (s = d()),
        function () {
          var t,
            e = p(l);
          if (s) {
            var n = p(this).constructor;
            t = Reflect.construct(e, arguments, n);
          } else t = e.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === c(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, t);
        });
    function y(t, e, n, r, o) {
      var i;
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, y),
        ((i = h.call(this)).title = t),
        (i.description = e),
        (i.imageUrl = r),
        (i.id = n),
        (i.price = o),
        (i.shadow = i.attachShadow({ mode: "open" })),
        (i.containerTag = document.createElement("div")),
        i.containerTag.setAttribute("class", "card-container");
      var c = document.createElement("h2");
      c.setAttribute("class", "name"), (c.textContent = i.title);
      var u = document.createElement("div");
      u.setAttribute("class", "image-frame");
      var l = document.createElement("img");
      l.setAttribute("src", i.imageUrl),
        l.setAttribute("alt", i.title),
        u.appendChild(l);
      var s = document.createElement("p");
      (s.textContent = i.description), s.setAttribute("class", "description");
      var d = document.createElement("span");
      (d.innerHTML = '<span class="price-badge"><span class="price-whole">'
        .concat(Math.floor(i.price), '</span><span class="price-change">')
        .concat(
          (100 * (i.price - Math.floor(i.price))).toFixed(0),
          "</span></span>"
        )),
        (i.addToBasket = document.createElement("span")),
        i.addToBasket.setAttribute("class", "add-icon"),
        i.addToBasket.setAttribute("id", "add-".concat(i.id)),
        (i.addToBasket.innerHTML =
          '<span class="plus-sign">+</span><br><span class="add-badge">ADD</span>');
      var f = document.createElement("style");
      return (
        (f.textContent = a),
        i.containerTag.appendChild(c),
        i.containerTag.appendChild(u),
        i.containerTag.appendChild(s),
        i.containerTag.appendChild(d),
        i.containerTag.appendChild(i.addToBasket),
        i.shadow.appendChild(f),
        i.shadow.appendChild(i.containerTag),
        i
      );
    }
    return (
      (n = y),
      (i = [
        {
          key: "observedAttributes",
          get: function () {
            return ["product-name", "image-url", "description"];
          },
        },
      ]),
      (o = [
        {
          key: "connectedCallback",
          value: function () {
            var t = this;
            this.containerTag.addEventListener("mouseover", function (e) {
              e.stopImmediatePropagation(),
                (e.currentTarget.style.scale = "1.05"),
                (t.shadow.querySelector(".price-badge").style.display =
                  "block"),
                (t.shadow.querySelector(".add-icon").style.display = "block");
            }),
              this.containerTag.addEventListener("mouseleave", function (e) {
                e.stopImmediatePropagation(),
                  (e.currentTarget.style.scale = "1"),
                  (t.shadow.querySelector(".price-badge").style.display =
                    "none"),
                  (t.shadow.querySelector(".add-icon").style.display = "none");
              }),
              this.addToBasket.addEventListener("click", function (n) {
                var o, i, a, c, u;
                (n.currentTarget.style.scale = "0.9"),
                  setTimeout(function () {
                    t.shadow.querySelector(".add-icon").style.scale = "1";
                  }, 100),
                  (function (t) {
                    var e = m("#amount-field"),
                      n = m(".pot-icon");
                    (e.textContent =
                      "" === e.textContent ? 1 : ++e.textContent),
                      (n.style.animationName = "bump"),
                      setTimeout(function () {
                        n.style.animationName = "";
                      }, 100),
                      (function (t) {
                        var e = t.replace("add-", ""),
                          n = "basket-".concat(e);
                        if (m("#".concat(n))) g(n);
                        else {
                          var r = JSON.parse(
                              localStorage.getItem("fresh-menu")
                            ).find(function (t) {
                              return t.id === e;
                            }),
                            o = (function (t, e, n, r) {
                              var o = document.createElement("li");
                              o.classList.add("basket-item"),
                                o.setAttribute("id", t);
                              var i = document.createElement("span");
                              (i.textContent = e),
                                i.classList.add("basket-product-name");
                              var a = document.createElement("span");
                              (a.textContent = n),
                                a.classList.add("basket-product-price");
                              var c = document.createElement("span");
                              (c.textContent = 1),
                                c.classList.add("basket-product-amount");
                              var u = document.createElement("span");
                              (u.textContent = 1 * n),
                                u.classList.add("basket-product-sum");
                              var l = document.createElement("button");
                              (l.textContent = "-"),
                                (l.onclick = function () {
                                  return g(t, "SUBTRACTION");
                                }),
                                l.classList.add("remove-button");
                              var s = document.createElement("button");
                              return (
                                (s.textContent = "+"),
                                (s.onclick = function () {
                                  return g(t, "ADDITION");
                                }),
                                s.classList.add("add-button"),
                                o.appendChild(i),
                                o.appendChild(a),
                                o.appendChild(c),
                                o.appendChild(u),
                                o.appendChild(l),
                                o.appendChild(s),
                                o
                              );
                            })(n, r.productName, r.price);
                          m(".basket-list").appendChild(o);
                        }
                      })(t);
                  })(n.currentTarget.id),
                  (o = n.currentTarget.id),
                  (a = JSON.parse(localStorage.getItem("order-amount"))),
                  (c = JSON.parse(localStorage.getItem("fresh-menu")).find(
                    function (t) {
                      return "add-".concat(t.id) === o;
                    }
                  )),
                  (i =
                    a && a.length > 0
                      ? a.find(function (t) {
                          return "add-".concat(t.id) === o;
                        })
                        ? a.map(function (t) {
                            return "add-".concat(t.id) === o
                              ? r(r({}, t), {}, { amount: t.amount + 1 })
                              : t;
                          })
                        : [].concat(
                            (function (t) {
                              if (Array.isArray(t)) return e(t);
                            })((u = a)) ||
                              (function (t) {
                                if (
                                  ("undefined" != typeof Symbol &&
                                    null != t[Symbol.iterator]) ||
                                  null != t["@@iterator"]
                                )
                                  return Array.from(t);
                              })(u) ||
                              (function (t, n) {
                                if (t) {
                                  if ("string" == typeof t) return e(t, n);
                                  var r = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1);
                                  return (
                                    "Object" === r &&
                                      t.constructor &&
                                      (r = t.constructor.name),
                                    "Map" === r || "Set" === r
                                      ? Array.from(t)
                                      : "Arguments" === r ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          r
                                        )
                                      ? e(t, n)
                                      : void 0
                                  );
                                }
                              })(u) ||
                              (function () {
                                throw new TypeError(
                                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })(),
                            [r(r({}, c), {}, { amount: 1 })]
                          )
                      : [r(r({}, c), {}, { amount: 1 })]),
                  localStorage.setItem("order-amount", JSON.stringify(i));
              });
          },
        },
      ]) && u(n.prototype, o),
      i && u(n, i),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      y
    );
  })(l(HTMLElement));
  function m(t) {
    return document.querySelector(t);
  }
  function y(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "block",
      n = m(t),
      r = window.getComputedStyle(n);
    n.style.display = "none" === r.display ? e : "none";
  }
  function g(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "ADDITION",
      n = m("#".concat(t, " span.basket-product-amount")),
      r = m("#".concat(t, " span.basket-product-sum")),
      o = m("#".concat(t, " span.basket-product-price")),
      i = n.textContent;
    switch ((r.textContent, e)) {
      case "ADDITION":
        (n.textContent = ++i),
          (r.textContent = (+r.textContent + +o.textContent).toFixed(2));
        break;
      case "SUBTRACTION":
        1 == +n.textContent && m("#".concat(t)).remove(),
          (n.textContent = --i),
          (r.textContent = (+r.textContent - +o.textContent).toFixed(2));
    }
    w();
  }
  function b(t) {
    (m("#menu").innerHTML = ""),
      t.forEach(function (t) {
        var e = m("#menu"),
          n = new h(t.productName, t.review, t.id, t.imageUrl, t.price);
        e.appendChild(n);
      });
  }
  function v(t) {
    (m("#side-menu").innerHTML = ""),
      t.forEach(function (t) {
        var e = document.createElement("li");
        (e.textContent = t),
          e.addEventListener("click", function (t) {
            m("#selected-tagname").textContent = t.currentTarget.textContent;
            var e,
              n = m(".clear-tagname");
            "none" === window.getComputedStyle(n).display &&
              y(".clear-tagname", "inline-block"),
              (e = t.currentTarget.textContent),
              b(
                JSON.parse(localStorage.getItem("fresh-menu")).filter(function (
                  t
                ) {
                  return t.categoryTag.includes(e);
                })
              );
          }),
          m("#side-menu").appendChild(e);
      });
  }
  function w() {
    var t = 0,
      e = document.querySelectorAll(".basket-list .basket-product-sum");
    console.log(e),
      e.forEach(function (e) {
        var n = +e.textContent;
        t += n;
      }),
      (m("#basket-total").textContent = t.toFixed(2));
  }
  function x(t) {
    return (
      (x =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      x(t)
    );
  }
  function k() {
    k = function () {
      return t;
    };
    var t = {},
      e = Object.prototype,
      n = e.hasOwnProperty,
      r =
        Object.defineProperty ||
        function (t, e, n) {
          t[e] = n.value;
        },
      o = "function" == typeof Symbol ? Symbol : {},
      i = o.iterator || "@@iterator",
      a = o.asyncIterator || "@@asyncIterator",
      c = o.toStringTag || "@@toStringTag";
    function u(t, e, n) {
      return (
        Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[e]
      );
    }
    try {
      u({}, "");
    } catch (t) {
      u = function (t, e, n) {
        return (t[e] = n);
      };
    }
    function l(t, e, n, o) {
      var i = e && e.prototype instanceof f ? e : f,
        a = Object.create(i.prototype),
        c = new T(o || []);
      return r(a, "_invoke", { value: S(t, n, c) }), a;
    }
    function s(t, e, n) {
      try {
        return { type: "normal", arg: t.call(e, n) };
      } catch (t) {
        return { type: "throw", arg: t };
      }
    }
    t.wrap = l;
    var d = {};
    function f() {}
    function p() {}
    function h() {}
    var m = {};
    u(m, i, function () {
      return this;
    });
    var y = Object.getPrototypeOf,
      g = y && y(y(L([])));
    g && g !== e && n.call(g, i) && (m = g);
    var b = (h.prototype = f.prototype = Object.create(m));
    function v(t) {
      ["next", "throw", "return"].forEach(function (e) {
        u(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function w(t, e) {
      function o(r, i, a, c) {
        var u = s(t[r], t, i);
        if ("throw" !== u.type) {
          var l = u.arg,
            d = l.value;
          return d && "object" == x(d) && n.call(d, "__await")
            ? e.resolve(d.__await).then(
                function (t) {
                  o("next", t, a, c);
                },
                function (t) {
                  o("throw", t, a, c);
                }
              )
            : e.resolve(d).then(
                function (t) {
                  (l.value = t), a(l);
                },
                function (t) {
                  return o("throw", t, a, c);
                }
              );
        }
        c(u.arg);
      }
      var i;
      r(this, "_invoke", {
        value: function (t, n) {
          function r() {
            return new e(function (e, r) {
              o(t, n, e, r);
            });
          }
          return (i = i ? i.then(r, r) : r());
        },
      });
    }
    function S(t, e, n) {
      var r = "suspendedStart";
      return function (o, i) {
        if ("executing" === r) throw new Error("Generator is already running");
        if ("completed" === r) {
          if ("throw" === o) throw i;
          return { value: void 0, done: !0 };
        }
        for (n.method = o, n.arg = i; ; ) {
          var a = n.delegate;
          if (a) {
            var c = O(a, n);
            if (c) {
              if (c === d) continue;
              return c;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;
          else if ("throw" === n.method) {
            if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          r = "executing";
          var u = s(t, e, n);
          if ("normal" === u.type) {
            if (((r = n.done ? "completed" : "suspendedYield"), u.arg === d))
              continue;
            return { value: u.arg, done: n.done };
          }
          "throw" === u.type &&
            ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
        }
      };
    }
    function O(t, e) {
      var n = e.method,
        r = t.iterator[n];
      if (void 0 === r)
        return (
          (e.delegate = null),
          ("throw" === n &&
            t.iterator.return &&
            ((e.method = "return"),
            (e.arg = void 0),
            O(t, e),
            "throw" === e.method)) ||
            ("return" !== n &&
              ((e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a '" + n + "' method"
              )))),
          d
        );
      var o = s(r, t.iterator, e.arg);
      if ("throw" === o.type)
        return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), d;
      var i = o.arg;
      return i
        ? i.done
          ? ((e[t.resultName] = i.value),
            (e.next = t.nextLoc),
            "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
            (e.delegate = null),
            d)
          : i
        : ((e.method = "throw"),
          (e.arg = new TypeError("iterator result is not an object")),
          (e.delegate = null),
          d);
    }
    function E(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e);
    }
    function C(t) {
      var e = t.completion || {};
      (e.type = "normal"), delete e.arg, (t.completion = e);
    }
    function T(t) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        t.forEach(E, this),
        this.reset(!0);
    }
    function L(t) {
      if (t) {
        var e = t[i];
        if (e) return e.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var r = -1,
            o = function e() {
              for (; ++r < t.length; )
                if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
              return (e.value = void 0), (e.done = !0), e;
            };
          return (o.next = o);
        }
      }
      return { next: j };
    }
    function j() {
      return { value: void 0, done: !0 };
    }
    return (
      (p.prototype = h),
      r(b, "constructor", { value: h, configurable: !0 }),
      r(h, "constructor", { value: p, configurable: !0 }),
      (p.displayName = u(h, c, "GeneratorFunction")),
      (t.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return (
          !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
        );
      }),
      (t.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, h)
            : ((t.__proto__ = h), u(t, c, "GeneratorFunction")),
          (t.prototype = Object.create(b)),
          t
        );
      }),
      (t.awrap = function (t) {
        return { __await: t };
      }),
      v(w.prototype),
      u(w.prototype, a, function () {
        return this;
      }),
      (t.AsyncIterator = w),
      (t.async = function (e, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new w(l(e, n, r, o), i);
        return t.isGeneratorFunction(n)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      v(b),
      u(b, c, "Generator"),
      u(b, i, function () {
        return this;
      }),
      u(b, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (t) {
        var e = Object(t),
          n = [];
        for (var r in e) n.push(r);
        return (
          n.reverse(),
          function t() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in e) return (t.value = r), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (t.values = L),
      (T.prototype = {
        constructor: T,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(C),
            !t)
          )
            for (var e in this)
              "t" === e.charAt(0) &&
                n.call(this, e) &&
                !isNaN(+e.slice(1)) &&
                (this[e] = void 0);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var e = this;
          function r(n, r) {
            return (
              (a.type = "throw"),
              (a.arg = t),
              (e.next = n),
              r && ((e.method = "next"), (e.arg = void 0)),
              !!r
            );
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
              a = i.completion;
            if ("root" === i.tryLoc) return r("end");
            if (i.tryLoc <= this.prev) {
              var c = n.call(i, "catchLoc"),
                u = n.call(i, "finallyLoc");
              if (c && u) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
              } else if (c) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
              } else {
                if (!u)
                  throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (
              o.tryLoc <= this.prev &&
              n.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === t || "continue" === t) &&
            i.tryLoc <= e &&
            e <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = t),
            (a.arg = e),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), d)
              : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return (
            "break" === t.type || "continue" === t.type
              ? (this.next = t.arg)
              : "return" === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === t.type && e && (this.next = e),
            d
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t)
              return this.complete(n.completion, n.afterLoc), C(n), d;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.tryLoc === t) {
              var r = n.completion;
              if ("throw" === r.type) {
                var o = r.arg;
                C(n);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (t, e, n) {
          return (
            (this.delegate = { iterator: L(t), resultName: e, nextLoc: n }),
            "next" === this.method && (this.arg = void 0),
            d
          );
        },
      }),
      t
    );
  }
  function S(t, e, n, r, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void n(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(r, o);
  }
  customElements.define("product-card", h);
  var O = (function () {
      var t,
        e =
          ((t = k().mark(function t(e) {
            var n, r;
            return k().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      fetch(
                        "https://tvendor-4db67-default-rtdb.europe-west1.firebasedatabase.app/productList.json"
                      )
                    );
                  case 2:
                    return (n = t.sent), (t.next = 5), n.json();
                  case 5:
                    (r = t.sent),
                      console.log(JSON.stringify(r)),
                      r.forEach(function (t) {
                        t.categoryTag.forEach(function (t) {
                          e.includes(t) || e.push(t);
                        });
                      }),
                      b(r),
                      v(e),
                      localStorage.setItem("fresh-menu", JSON.stringify(r));
                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          function () {
            var e = this,
              n = arguments;
            return new Promise(function (r, o) {
              var i = t.apply(e, n);
              function a(t) {
                S(i, r, o, a, c, "next", t);
              }
              function c(t) {
                S(i, r, o, a, c, "throw", t);
              }
              a(void 0);
            });
          });
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    E = [],
    C = m(".basket-button"),
    T = m("#backdrop"),
    L = m("#clear-basket"),
    j = m("#close-basket"),
    P = m("#search-bar"),
    N = m("#search-by-name"),
    A = m(".clear-tagname");
  (N.oninput = function (t) {
    return (function (t) {
      b(
        JSON.parse(localStorage.getItem("fresh-menu")).filter(function (e) {
          return e.productName
            .toLowerCase()
            .includes(t.target.value.toLowerCase());
        })
      );
    })(t);
  }),
    (A.onclick = function () {
      (m("#selected-tagname").textContent = ""),
        y(".clear-tagname", "inline-block"),
        b(JSON.parse(localStorage.getItem("fresh-menu")));
    }),
    (P.oninput = function (t) {
      return (
        (e = t),
        (n = E),
        (r = v),
        console.log(e.target.value),
        void r(
          n.filter(function (t) {
            return t.includes(e.target.value);
          })
        )
      );
      var e, n, r;
    }),
    (j.onclick = i),
    (L.onclick = function () {
      (m(".basket-list").textContent = ""), w();
    }),
    (T.onclick = i),
    (C.onclick = function () {
      y("#basket"), y("#backdrop"), w();
    }),
    O(E);
})();
