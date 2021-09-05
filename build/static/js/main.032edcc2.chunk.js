(this.webpackJsonpwebsite = this.webpackJsonpwebsite || []).push([
  [0],
  {
    19: function (e, t, c) {},
    20: function (e, t, c) {},
    27: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(0),
        s = c.n(n),
        i = c(12),
        j = c.n(i),
        r = (c(19), c(9)),
        b = c(2),
        o = (c(20), c(1));
      function u() {
        return Object(o.jsxs)("div", {
          children: [
            Object(o.jsx)("h1", { children: "About" }),
            Object(o.jsx)("p", { children: "This is the about page" }),
          ],
        });
      }
      function a() {
        return Object(o.jsxs)("div", {
          children: [
            Object(o.jsx)("h1", { children: "Home" }),
            Object(o.jsx)("p", {
              children:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quisquam.",
            }),
          ],
        });
      }
      var h = function () {
          return Object(o.jsxs)(r.a, {
            children: [
              Object(o.jsx)(r.b, {
                to: "/about",
                children: Object(o.jsx)("button", { children: "About" }),
              }),
              Object(o.jsxs)("div", {
                className: "App",
                children: [
                  Object(o.jsxs)(b.c, {
                    children: [
                      Object(o.jsx)(b.a, {
                        path: "/about",
                        children: Object(o.jsx)(u, {}),
                      }),
                      Object(o.jsx)(b.a, {
                        path: "/",
                        children: Object(o.jsx)(a, {}),
                      }),
                    ],
                  }),
                  Object(o.jsx)("header", { className: "App-header" }),
                ],
              }),
            ],
          });
        },
        d = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 28))
              .then(function (t) {
                var c = t.getCLS,
                  n = t.getFID,
                  s = t.getFCP,
                  i = t.getLCP,
                  j = t.getTTFB;
                c(e), n(e), s(e), i(e), j(e);
              });
        };
      j.a.render(
        Object(o.jsx)(s.a.StrictMode, { children: Object(o.jsx)(h, {}) }),
        document.getElementById("root")
      ),
        d();
    },
  },
  [[27, 1, 2]],
]);
//# sourceMappingURL=main.032edcc2.chunk.js.map
