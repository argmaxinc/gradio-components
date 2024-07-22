const {
  SvelteComponent: Ht,
  assign: Jt,
  create_slot: Kt,
  detach: Qt,
  element: Wt,
  get_all_dirty_from_scope: xt,
  get_slot_changes: $t,
  get_spread_update: en,
  init: tn,
  insert: nn,
  safe_not_equal: ln,
  set_dynamic_element_data: ft,
  set_style: X,
  toggle_class: x,
  transition_in: Pt,
  transition_out: It,
  update_slot_base: fn
} = window.__gradio__svelte__internal;
function sn(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[18].default
  ), s = Kt(
    i,
    n,
    /*$$scope*/
    n[17],
    null
  );
  let a = [
    { "data-testid": (
      /*test_id*/
      n[7]
    ) },
    { id: (
      /*elem_id*/
      n[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      n[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let f = 0; f < a.length; f += 1)
    r = Jt(r, a[f]);
  return {
    c() {
      e = Wt(
        /*tag*/
        n[14]
      ), s && s.c(), ft(
        /*tag*/
        n[14]
      )(e, r), x(
        e,
        "hidden",
        /*visible*/
        n[10] === !1
      ), x(
        e,
        "padded",
        /*padding*/
        n[6]
      ), x(
        e,
        "border_focus",
        /*border_mode*/
        n[5] === "focus"
      ), x(
        e,
        "border_contrast",
        /*border_mode*/
        n[5] === "contrast"
      ), x(e, "hide-container", !/*explicit_call*/
      n[8] && !/*container*/
      n[9]), X(
        e,
        "height",
        /*get_dimension*/
        n[15](
          /*height*/
          n[0]
        )
      ), X(e, "width", typeof /*width*/
      n[1] == "number" ? `calc(min(${/*width*/
      n[1]}px, 100%))` : (
        /*get_dimension*/
        n[15](
          /*width*/
          n[1]
        )
      )), X(
        e,
        "border-style",
        /*variant*/
        n[4]
      ), X(
        e,
        "overflow",
        /*allow_overflow*/
        n[11] ? "visible" : "hidden"
      ), X(
        e,
        "flex-grow",
        /*scale*/
        n[12]
      ), X(e, "min-width", `calc(min(${/*min_width*/
      n[13]}px, 100%))`), X(e, "border-width", "var(--block-border-width)");
    },
    m(f, o) {
      nn(f, e, o), s && s.m(e, null), l = !0;
    },
    p(f, o) {
      s && s.p && (!l || o & /*$$scope*/
      131072) && fn(
        s,
        i,
        f,
        /*$$scope*/
        f[17],
        l ? $t(
          i,
          /*$$scope*/
          f[17],
          o,
          null
        ) : xt(
          /*$$scope*/
          f[17]
        ),
        null
      ), ft(
        /*tag*/
        f[14]
      )(e, r = en(a, [
        (!l || o & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          f[7]
        ) },
        (!l || o & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          f[2]
        ) },
        (!l || o & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        f[3].join(" ") + " svelte-nl1om8")) && { class: t }
      ])), x(
        e,
        "hidden",
        /*visible*/
        f[10] === !1
      ), x(
        e,
        "padded",
        /*padding*/
        f[6]
      ), x(
        e,
        "border_focus",
        /*border_mode*/
        f[5] === "focus"
      ), x(
        e,
        "border_contrast",
        /*border_mode*/
        f[5] === "contrast"
      ), x(e, "hide-container", !/*explicit_call*/
      f[8] && !/*container*/
      f[9]), o & /*height*/
      1 && X(
        e,
        "height",
        /*get_dimension*/
        f[15](
          /*height*/
          f[0]
        )
      ), o & /*width*/
      2 && X(e, "width", typeof /*width*/
      f[1] == "number" ? `calc(min(${/*width*/
      f[1]}px, 100%))` : (
        /*get_dimension*/
        f[15](
          /*width*/
          f[1]
        )
      )), o & /*variant*/
      16 && X(
        e,
        "border-style",
        /*variant*/
        f[4]
      ), o & /*allow_overflow*/
      2048 && X(
        e,
        "overflow",
        /*allow_overflow*/
        f[11] ? "visible" : "hidden"
      ), o & /*scale*/
      4096 && X(
        e,
        "flex-grow",
        /*scale*/
        f[12]
      ), o & /*min_width*/
      8192 && X(e, "min-width", `calc(min(${/*min_width*/
      f[13]}px, 100%))`);
    },
    i(f) {
      l || (Pt(s, f), l = !0);
    },
    o(f) {
      It(s, f), l = !1;
    },
    d(f) {
      f && Qt(e), s && s.d(f);
    }
  };
}
function on(n) {
  let e, t = (
    /*tag*/
    n[14] && sn(n)
  );
  return {
    c() {
      t && t.c();
    },
    m(l, i) {
      t && t.m(l, i), e = !0;
    },
    p(l, [i]) {
      /*tag*/
      l[14] && t.p(l, i);
    },
    i(l) {
      e || (Pt(t, l), e = !0);
    },
    o(l) {
      It(t, l), e = !1;
    },
    d(l) {
      t && t.d(l);
    }
  };
}
function an(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { height: s = void 0 } = e, { width: a = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: f = [] } = e, { variant: o = "solid" } = e, { border_mode: u = "base" } = e, { padding: _ = !0 } = e, { type: m = "normal" } = e, { test_id: b = void 0 } = e, { explicit_call: p = !1 } = e, { container: C = !0 } = e, { visible: M = !0 } = e, { allow_overflow: V = !0 } = e, { scale: c = null } = e, { min_width: d = 0 } = e, q = m === "fieldset" ? "fieldset" : "div";
  const I = (h) => {
    if (h !== void 0) {
      if (typeof h == "number")
        return h + "px";
      if (typeof h == "string")
        return h;
    }
  };
  return n.$$set = (h) => {
    "height" in h && t(0, s = h.height), "width" in h && t(1, a = h.width), "elem_id" in h && t(2, r = h.elem_id), "elem_classes" in h && t(3, f = h.elem_classes), "variant" in h && t(4, o = h.variant), "border_mode" in h && t(5, u = h.border_mode), "padding" in h && t(6, _ = h.padding), "type" in h && t(16, m = h.type), "test_id" in h && t(7, b = h.test_id), "explicit_call" in h && t(8, p = h.explicit_call), "container" in h && t(9, C = h.container), "visible" in h && t(10, M = h.visible), "allow_overflow" in h && t(11, V = h.allow_overflow), "scale" in h && t(12, c = h.scale), "min_width" in h && t(13, d = h.min_width), "$$scope" in h && t(17, i = h.$$scope);
  }, [
    s,
    a,
    r,
    f,
    o,
    u,
    _,
    b,
    p,
    C,
    M,
    V,
    c,
    d,
    q,
    I,
    m,
    i,
    l
  ];
}
class rn extends Ht {
  constructor(e) {
    super(), tn(this, e, an, on, ln, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: un,
  attr: _n,
  create_slot: cn,
  detach: dn,
  element: mn,
  get_all_dirty_from_scope: bn,
  get_slot_changes: hn,
  init: gn,
  insert: wn,
  safe_not_equal: pn,
  transition_in: kn,
  transition_out: vn,
  update_slot_base: yn
} = window.__gradio__svelte__internal;
function qn(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), i = cn(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = mn("div"), i && i.c(), _n(e, "class", "svelte-1hnfib2");
    },
    m(s, a) {
      wn(s, e, a), i && i.m(e, null), t = !0;
    },
    p(s, [a]) {
      i && i.p && (!t || a & /*$$scope*/
      1) && yn(
        i,
        l,
        s,
        /*$$scope*/
        s[0],
        t ? hn(
          l,
          /*$$scope*/
          s[0],
          a,
          null
        ) : bn(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (kn(i, s), t = !0);
    },
    o(s) {
      vn(i, s), t = !1;
    },
    d(s) {
      s && dn(e), i && i.d(s);
    }
  };
}
function Cn(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return n.$$set = (s) => {
    "$$scope" in s && t(0, i = s.$$scope);
  }, [i, l];
}
class Mn extends un {
  constructor(e) {
    super(), gn(this, e, Cn, qn, pn, {});
  }
}
const {
  SvelteComponent: zn,
  attr: st,
  check_outros: Fn,
  create_component: Ln,
  create_slot: Sn,
  destroy_component: Vn,
  detach: Ne,
  element: Nn,
  empty: Pn,
  get_all_dirty_from_scope: In,
  get_slot_changes: Zn,
  group_outros: jn,
  init: En,
  insert: Pe,
  mount_component: Bn,
  safe_not_equal: Tn,
  set_data: Dn,
  space: An,
  text: Xn,
  toggle_class: de,
  transition_in: pe,
  transition_out: Ie,
  update_slot_base: Rn
} = window.__gradio__svelte__internal;
function ot(n) {
  let e, t;
  return e = new Mn({
    props: {
      $$slots: { default: [Yn] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ln(e.$$.fragment);
    },
    m(l, i) {
      Bn(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i & /*$$scope, info*/
      10 && (s.$$scope = { dirty: i, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (pe(e.$$.fragment, l), t = !0);
    },
    o(l) {
      Ie(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Vn(e, l);
    }
  };
}
function Yn(n) {
  let e;
  return {
    c() {
      e = Xn(
        /*info*/
        n[1]
      );
    },
    m(t, l) {
      Pe(t, e, l);
    },
    p(t, l) {
      l & /*info*/
      2 && Dn(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Ne(e);
    }
  };
}
function Gn(n) {
  let e, t, l, i;
  const s = (
    /*#slots*/
    n[2].default
  ), a = Sn(
    s,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let r = (
    /*info*/
    n[1] && ot(n)
  );
  return {
    c() {
      e = Nn("span"), a && a.c(), t = An(), r && r.c(), l = Pn(), st(e, "data-testid", "block-info"), st(e, "class", "svelte-22c38v"), de(e, "sr-only", !/*show_label*/
      n[0]), de(e, "hide", !/*show_label*/
      n[0]), de(
        e,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(f, o) {
      Pe(f, e, o), a && a.m(e, null), Pe(f, t, o), r && r.m(f, o), Pe(f, l, o), i = !0;
    },
    p(f, [o]) {
      a && a.p && (!i || o & /*$$scope*/
      8) && Rn(
        a,
        s,
        f,
        /*$$scope*/
        f[3],
        i ? Zn(
          s,
          /*$$scope*/
          f[3],
          o,
          null
        ) : In(
          /*$$scope*/
          f[3]
        ),
        null
      ), (!i || o & /*show_label*/
      1) && de(e, "sr-only", !/*show_label*/
      f[0]), (!i || o & /*show_label*/
      1) && de(e, "hide", !/*show_label*/
      f[0]), (!i || o & /*info*/
      2) && de(
        e,
        "has-info",
        /*info*/
        f[1] != null
      ), /*info*/
      f[1] ? r ? (r.p(f, o), o & /*info*/
      2 && pe(r, 1)) : (r = ot(f), r.c(), pe(r, 1), r.m(l.parentNode, l)) : r && (jn(), Ie(r, 1, 1, () => {
        r = null;
      }), Fn());
    },
    i(f) {
      i || (pe(a, f), pe(r), i = !0);
    },
    o(f) {
      Ie(a, f), Ie(r), i = !1;
    },
    d(f) {
      f && (Ne(e), Ne(t), Ne(l)), a && a.d(f), r && r.d(f);
    }
  };
}
function On(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { show_label: s = !0 } = e, { info: a = void 0 } = e;
  return n.$$set = (r) => {
    "show_label" in r && t(0, s = r.show_label), "info" in r && t(1, a = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [s, a, l, i];
}
class Un extends zn {
  constructor(e) {
    super(), En(this, e, On, Gn, Tn, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Hn,
  append: Je,
  attr: ie,
  bubble: Jn,
  create_component: Kn,
  destroy_component: Qn,
  detach: Zt,
  element: Ke,
  init: Wn,
  insert: jt,
  listen: xn,
  mount_component: $n,
  safe_not_equal: el,
  set_data: tl,
  set_style: me,
  space: nl,
  text: ll,
  toggle_class: E,
  transition_in: il,
  transition_out: fl
} = window.__gradio__svelte__internal;
function at(n) {
  let e, t;
  return {
    c() {
      e = Ke("span"), t = ll(
        /*label*/
        n[1]
      ), ie(e, "class", "svelte-1lrphxw");
    },
    m(l, i) {
      jt(l, e, i), Je(e, t);
    },
    p(l, i) {
      i & /*label*/
      2 && tl(
        t,
        /*label*/
        l[1]
      );
    },
    d(l) {
      l && Zt(e);
    }
  };
}
function sl(n) {
  let e, t, l, i, s, a, r, f = (
    /*show_label*/
    n[2] && at(n)
  );
  return i = new /*Icon*/
  n[0]({}), {
    c() {
      e = Ke("button"), f && f.c(), t = nl(), l = Ke("div"), Kn(i.$$.fragment), ie(l, "class", "svelte-1lrphxw"), E(
        l,
        "small",
        /*size*/
        n[4] === "small"
      ), E(
        l,
        "large",
        /*size*/
        n[4] === "large"
      ), E(
        l,
        "medium",
        /*size*/
        n[4] === "medium"
      ), e.disabled = /*disabled*/
      n[7], ie(
        e,
        "aria-label",
        /*label*/
        n[1]
      ), ie(
        e,
        "aria-haspopup",
        /*hasPopup*/
        n[8]
      ), ie(
        e,
        "title",
        /*label*/
        n[1]
      ), ie(e, "class", "svelte-1lrphxw"), E(
        e,
        "pending",
        /*pending*/
        n[3]
      ), E(
        e,
        "padded",
        /*padded*/
        n[5]
      ), E(
        e,
        "highlight",
        /*highlight*/
        n[6]
      ), E(
        e,
        "transparent",
        /*transparent*/
        n[9]
      ), me(e, "color", !/*disabled*/
      n[7] && /*_color*/
      n[12] ? (
        /*_color*/
        n[12]
      ) : "var(--block-label-text-color)"), me(e, "--bg-color", /*disabled*/
      n[7] ? "auto" : (
        /*background*/
        n[10]
      )), me(
        e,
        "margin-left",
        /*offset*/
        n[11] + "px"
      );
    },
    m(o, u) {
      jt(o, e, u), f && f.m(e, null), Je(e, t), Je(e, l), $n(i, l, null), s = !0, a || (r = xn(
        e,
        "click",
        /*click_handler*/
        n[14]
      ), a = !0);
    },
    p(o, [u]) {
      /*show_label*/
      o[2] ? f ? f.p(o, u) : (f = at(o), f.c(), f.m(e, t)) : f && (f.d(1), f = null), (!s || u & /*size*/
      16) && E(
        l,
        "small",
        /*size*/
        o[4] === "small"
      ), (!s || u & /*size*/
      16) && E(
        l,
        "large",
        /*size*/
        o[4] === "large"
      ), (!s || u & /*size*/
      16) && E(
        l,
        "medium",
        /*size*/
        o[4] === "medium"
      ), (!s || u & /*disabled*/
      128) && (e.disabled = /*disabled*/
      o[7]), (!s || u & /*label*/
      2) && ie(
        e,
        "aria-label",
        /*label*/
        o[1]
      ), (!s || u & /*hasPopup*/
      256) && ie(
        e,
        "aria-haspopup",
        /*hasPopup*/
        o[8]
      ), (!s || u & /*label*/
      2) && ie(
        e,
        "title",
        /*label*/
        o[1]
      ), (!s || u & /*pending*/
      8) && E(
        e,
        "pending",
        /*pending*/
        o[3]
      ), (!s || u & /*padded*/
      32) && E(
        e,
        "padded",
        /*padded*/
        o[5]
      ), (!s || u & /*highlight*/
      64) && E(
        e,
        "highlight",
        /*highlight*/
        o[6]
      ), (!s || u & /*transparent*/
      512) && E(
        e,
        "transparent",
        /*transparent*/
        o[9]
      ), u & /*disabled, _color*/
      4224 && me(e, "color", !/*disabled*/
      o[7] && /*_color*/
      o[12] ? (
        /*_color*/
        o[12]
      ) : "var(--block-label-text-color)"), u & /*disabled, background*/
      1152 && me(e, "--bg-color", /*disabled*/
      o[7] ? "auto" : (
        /*background*/
        o[10]
      )), u & /*offset*/
      2048 && me(
        e,
        "margin-left",
        /*offset*/
        o[11] + "px"
      );
    },
    i(o) {
      s || (il(i.$$.fragment, o), s = !0);
    },
    o(o) {
      fl(i.$$.fragment, o), s = !1;
    },
    d(o) {
      o && Zt(e), f && f.d(), Qn(i), a = !1, r();
    }
  };
}
function ol(n, e, t) {
  let l, { Icon: i } = e, { label: s = "" } = e, { show_label: a = !1 } = e, { pending: r = !1 } = e, { size: f = "small" } = e, { padded: o = !0 } = e, { highlight: u = !1 } = e, { disabled: _ = !1 } = e, { hasPopup: m = !1 } = e, { color: b = "var(--block-label-text-color)" } = e, { transparent: p = !1 } = e, { background: C = "var(--background-fill-primary)" } = e, { offset: M = 0 } = e;
  function V(c) {
    Jn.call(this, n, c);
  }
  return n.$$set = (c) => {
    "Icon" in c && t(0, i = c.Icon), "label" in c && t(1, s = c.label), "show_label" in c && t(2, a = c.show_label), "pending" in c && t(3, r = c.pending), "size" in c && t(4, f = c.size), "padded" in c && t(5, o = c.padded), "highlight" in c && t(6, u = c.highlight), "disabled" in c && t(7, _ = c.disabled), "hasPopup" in c && t(8, m = c.hasPopup), "color" in c && t(13, b = c.color), "transparent" in c && t(9, p = c.transparent), "background" in c && t(10, C = c.background), "offset" in c && t(11, M = c.offset);
  }, n.$$.update = () => {
    n.$$.dirty & /*highlight, color*/
    8256 && t(12, l = u ? "var(--color-accent)" : b);
  }, [
    i,
    s,
    a,
    r,
    f,
    o,
    u,
    _,
    m,
    p,
    C,
    M,
    l,
    b,
    V
  ];
}
class al extends Hn {
  constructor(e) {
    super(), Wn(this, e, ol, sl, el, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 13,
      transparent: 9,
      background: 10,
      offset: 11
    });
  }
}
const {
  SvelteComponent: rl,
  append: Oe,
  attr: O,
  detach: ul,
  init: _l,
  insert: cl,
  noop: Ue,
  safe_not_equal: dl,
  set_style: $,
  svg_element: ze
} = window.__gradio__svelte__internal;
function ml(n) {
  let e, t, l, i;
  return {
    c() {
      e = ze("svg"), t = ze("g"), l = ze("path"), i = ze("path"), O(l, "d", "M18,6L6.087,17.913"), $(l, "fill", "none"), $(l, "fill-rule", "nonzero"), $(l, "stroke-width", "2px"), O(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), O(i, "d", "M4.364,4.364L19.636,19.636"), $(i, "fill", "none"), $(i, "fill-rule", "nonzero"), $(i, "stroke-width", "2px"), O(e, "width", "100%"), O(e, "height", "100%"), O(e, "viewBox", "0 0 24 24"), O(e, "version", "1.1"), O(e, "xmlns", "http://www.w3.org/2000/svg"), O(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), O(e, "xml:space", "preserve"), O(e, "stroke", "currentColor"), $(e, "fill-rule", "evenodd"), $(e, "clip-rule", "evenodd"), $(e, "stroke-linecap", "round"), $(e, "stroke-linejoin", "round");
    },
    m(s, a) {
      cl(s, e, a), Oe(e, t), Oe(t, l), Oe(e, i);
    },
    p: Ue,
    i: Ue,
    o: Ue,
    d(s) {
      s && ul(e);
    }
  };
}
class bl extends rl {
  constructor(e) {
    super(), _l(this, e, null, ml, dl, {});
  }
}
const hl = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], rt = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
hl.reduce(
  (n, { color: e, primary: t, secondary: l }) => ({
    ...n,
    [e]: {
      primary: rt[e][t],
      secondary: rt[e][l]
    }
  }),
  {}
);
function he(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let l = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + l;
}
function Ze() {
}
function gl(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
const Et = typeof window < "u";
let ut = Et ? () => window.performance.now() : () => Date.now(), Bt = Et ? (n) => requestAnimationFrame(n) : Ze;
const ge = /* @__PURE__ */ new Set();
function Tt(n) {
  ge.forEach((e) => {
    e.c(n) || (ge.delete(e), e.f());
  }), ge.size !== 0 && Bt(Tt);
}
function wl(n) {
  let e;
  return ge.size === 0 && Bt(Tt), {
    promise: new Promise((t) => {
      ge.add(e = { c: n, f: t });
    }),
    abort() {
      ge.delete(e);
    }
  };
}
const be = [];
function pl(n, e = Ze) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(r) {
    if (gl(n, r) && (n = r, t)) {
      const f = !be.length;
      for (const o of l)
        o[1](), be.push(o, n);
      if (f) {
        for (let o = 0; o < be.length; o += 2)
          be[o][0](be[o + 1]);
        be.length = 0;
      }
    }
  }
  function s(r) {
    i(r(n));
  }
  function a(r, f = Ze) {
    const o = [r, f];
    return l.add(o), l.size === 1 && (t = e(i, s) || Ze), r(n), () => {
      l.delete(o), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: a };
}
function _t(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function Qe(n, e, t, l) {
  if (typeof t == "number" || _t(t)) {
    const i = l - t, s = (t - e) / (n.dt || 1 / 60), a = n.opts.stiffness * i, r = n.opts.damping * s, f = (a - r) * n.inv_mass, o = (s + f) * n.dt;
    return Math.abs(o) < n.opts.precision && Math.abs(i) < n.opts.precision ? l : (n.settled = !1, _t(t) ? new Date(t.getTime() + o) : t + o);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, s) => Qe(n, e[s], t[s], l[s])
      );
    if (typeof t == "object") {
      const i = {};
      for (const s in t)
        i[s] = Qe(n, e[s], t[s], l[s]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function ct(n, e = {}) {
  const t = pl(n), { stiffness: l = 0.15, damping: i = 0.8, precision: s = 0.01 } = e;
  let a, r, f, o = n, u = n, _ = 1, m = 0, b = !1;
  function p(M, V = {}) {
    u = M;
    const c = f = {};
    return n == null || V.hard || C.stiffness >= 1 && C.damping >= 1 ? (b = !0, a = ut(), o = M, t.set(n = u), Promise.resolve()) : (V.soft && (m = 1 / ((V.soft === !0 ? 0.5 : +V.soft) * 60), _ = 0), r || (a = ut(), b = !1, r = wl((d) => {
      if (b)
        return b = !1, r = null, !1;
      _ = Math.min(_ + m, 1);
      const q = {
        inv_mass: _,
        opts: C,
        settled: !0,
        dt: (d - a) * 60 / 1e3
      }, I = Qe(q, o, n, u);
      return a = d, o = n, t.set(n = I), q.settled && (r = null), !q.settled;
    })), new Promise((d) => {
      r.promise.then(() => {
        c === f && d();
      });
    }));
  }
  const C = {
    set: p,
    update: (M, V) => p(M(u, n), V),
    subscribe: t.subscribe,
    stiffness: l,
    damping: i,
    precision: s
  };
  return C;
}
const {
  SvelteComponent: kl,
  append: U,
  attr: L,
  component_subscribe: dt,
  detach: vl,
  element: yl,
  init: ql,
  insert: Cl,
  noop: mt,
  safe_not_equal: Ml,
  set_style: Fe,
  svg_element: H,
  toggle_class: bt
} = window.__gradio__svelte__internal, { onMount: zl } = window.__gradio__svelte__internal;
function Fl(n) {
  let e, t, l, i, s, a, r, f, o, u, _, m;
  return {
    c() {
      e = yl("div"), t = H("svg"), l = H("g"), i = H("path"), s = H("path"), a = H("path"), r = H("path"), f = H("g"), o = H("path"), u = H("path"), _ = H("path"), m = H("path"), L(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), L(i, "fill", "#FF7C00"), L(i, "fill-opacity", "0.4"), L(i, "class", "svelte-43sxxs"), L(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), L(s, "fill", "#FF7C00"), L(s, "class", "svelte-43sxxs"), L(a, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), L(a, "fill", "#FF7C00"), L(a, "fill-opacity", "0.4"), L(a, "class", "svelte-43sxxs"), L(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), L(r, "fill", "#FF7C00"), L(r, "class", "svelte-43sxxs"), Fe(l, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), L(o, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), L(o, "fill", "#FF7C00"), L(o, "fill-opacity", "0.4"), L(o, "class", "svelte-43sxxs"), L(u, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), L(u, "fill", "#FF7C00"), L(u, "class", "svelte-43sxxs"), L(_, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), L(_, "fill", "#FF7C00"), L(_, "fill-opacity", "0.4"), L(_, "class", "svelte-43sxxs"), L(m, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), L(m, "fill", "#FF7C00"), L(m, "class", "svelte-43sxxs"), Fe(f, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), L(t, "viewBox", "-1200 -1200 3000 3000"), L(t, "fill", "none"), L(t, "xmlns", "http://www.w3.org/2000/svg"), L(t, "class", "svelte-43sxxs"), L(e, "class", "svelte-43sxxs"), bt(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(b, p) {
      Cl(b, e, p), U(e, t), U(t, l), U(l, i), U(l, s), U(l, a), U(l, r), U(t, f), U(f, o), U(f, u), U(f, _), U(f, m);
    },
    p(b, [p]) {
      p & /*$top*/
      2 && Fe(l, "transform", "translate(" + /*$top*/
      b[1][0] + "px, " + /*$top*/
      b[1][1] + "px)"), p & /*$bottom*/
      4 && Fe(f, "transform", "translate(" + /*$bottom*/
      b[2][0] + "px, " + /*$bottom*/
      b[2][1] + "px)"), p & /*margin*/
      1 && bt(
        e,
        "margin",
        /*margin*/
        b[0]
      );
    },
    i: mt,
    o: mt,
    d(b) {
      b && vl(e);
    }
  };
}
function Ll(n, e, t) {
  let l, i;
  var s = this && this.__awaiter || function(b, p, C, M) {
    function V(c) {
      return c instanceof C ? c : new C(function(d) {
        d(c);
      });
    }
    return new (C || (C = Promise))(function(c, d) {
      function q(z) {
        try {
          h(M.next(z));
        } catch (P) {
          d(P);
        }
      }
      function I(z) {
        try {
          h(M.throw(z));
        } catch (P) {
          d(P);
        }
      }
      function h(z) {
        z.done ? c(z.value) : V(z.value).then(q, I);
      }
      h((M = M.apply(b, p || [])).next());
    });
  };
  let { margin: a = !0 } = e;
  const r = ct([0, 0]);
  dt(n, r, (b) => t(1, l = b));
  const f = ct([0, 0]);
  dt(n, f, (b) => t(2, i = b));
  let o;
  function u() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), f.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), f.set([125, -140])]), yield Promise.all([r.set([-125, 0]), f.set([125, -0])]), yield Promise.all([r.set([125, 0]), f.set([-125, 0])]);
    });
  }
  function _() {
    return s(this, void 0, void 0, function* () {
      yield u(), o || _();
    });
  }
  function m() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), f.set([-125, 0])]), _();
    });
  }
  return zl(() => (m(), () => o = !0)), n.$$set = (b) => {
    "margin" in b && t(0, a = b.margin);
  }, [a, l, i, r, f];
}
class Sl extends kl {
  constructor(e) {
    super(), ql(this, e, Ll, Fl, Ml, { margin: 0 });
  }
}
const {
  SvelteComponent: Vl,
  append: _e,
  attr: Q,
  binding_callbacks: ht,
  check_outros: We,
  create_component: Dt,
  create_slot: At,
  destroy_component: Xt,
  destroy_each: Rt,
  detach: v,
  element: ee,
  empty: we,
  ensure_array_like: je,
  get_all_dirty_from_scope: Yt,
  get_slot_changes: Gt,
  group_outros: xe,
  init: Nl,
  insert: y,
  mount_component: Ot,
  noop: $e,
  safe_not_equal: Pl,
  set_data: G,
  set_style: se,
  space: Y,
  text: N,
  toggle_class: R,
  transition_in: K,
  transition_out: te,
  update_slot_base: Ut
} = window.__gradio__svelte__internal, { tick: Il } = window.__gradio__svelte__internal, { onDestroy: Zl } = window.__gradio__svelte__internal, { createEventDispatcher: jl } = window.__gradio__svelte__internal, El = (n) => ({}), gt = (n) => ({}), Bl = (n) => ({}), wt = (n) => ({});
function pt(n, e, t) {
  const l = n.slice();
  return l[41] = e[t], l[43] = t, l;
}
function kt(n, e, t) {
  const l = n.slice();
  return l[41] = e[t], l;
}
function Tl(n) {
  let e, t, l, i, s = (
    /*i18n*/
    n[1]("common.error") + ""
  ), a, r, f;
  t = new al({
    props: {
      Icon: bl,
      label: (
        /*i18n*/
        n[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    n[32]
  );
  const o = (
    /*#slots*/
    n[30].error
  ), u = At(
    o,
    n,
    /*$$scope*/
    n[29],
    gt
  );
  return {
    c() {
      e = ee("div"), Dt(t.$$.fragment), l = Y(), i = ee("span"), a = N(s), r = Y(), u && u.c(), Q(e, "class", "clear-status svelte-16nch4a"), Q(i, "class", "error svelte-16nch4a");
    },
    m(_, m) {
      y(_, e, m), Ot(t, e, null), y(_, l, m), y(_, i, m), _e(i, a), y(_, r, m), u && u.m(_, m), f = !0;
    },
    p(_, m) {
      const b = {};
      m[0] & /*i18n*/
      2 && (b.label = /*i18n*/
      _[1]("common.clear")), t.$set(b), (!f || m[0] & /*i18n*/
      2) && s !== (s = /*i18n*/
      _[1]("common.error") + "") && G(a, s), u && u.p && (!f || m[0] & /*$$scope*/
      536870912) && Ut(
        u,
        o,
        _,
        /*$$scope*/
        _[29],
        f ? Gt(
          o,
          /*$$scope*/
          _[29],
          m,
          El
        ) : Yt(
          /*$$scope*/
          _[29]
        ),
        gt
      );
    },
    i(_) {
      f || (K(t.$$.fragment, _), K(u, _), f = !0);
    },
    o(_) {
      te(t.$$.fragment, _), te(u, _), f = !1;
    },
    d(_) {
      _ && (v(e), v(l), v(i), v(r)), Xt(t), u && u.d(_);
    }
  };
}
function Dl(n) {
  let e, t, l, i, s, a, r, f, o, u = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && vt(n)
  );
  function _(d, q) {
    if (
      /*progress*/
      d[7]
    ) return Rl;
    if (
      /*queue_position*/
      d[2] !== null && /*queue_size*/
      d[3] !== void 0 && /*queue_position*/
      d[2] >= 0
    ) return Xl;
    if (
      /*queue_position*/
      d[2] === 0
    ) return Al;
  }
  let m = _(n), b = m && m(n), p = (
    /*timer*/
    n[5] && Ct(n)
  );
  const C = [Ul, Ol], M = [];
  function V(d, q) {
    return (
      /*last_progress_level*/
      d[15] != null ? 0 : (
        /*show_progress*/
        d[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = V(n)) && (a = M[s] = C[s](n));
  let c = !/*timer*/
  n[5] && Nt(n);
  return {
    c() {
      u && u.c(), e = Y(), t = ee("div"), b && b.c(), l = Y(), p && p.c(), i = Y(), a && a.c(), r = Y(), c && c.c(), f = we(), Q(t, "class", "progress-text svelte-16nch4a"), R(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), R(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(d, q) {
      u && u.m(d, q), y(d, e, q), y(d, t, q), b && b.m(t, null), _e(t, l), p && p.m(t, null), y(d, i, q), ~s && M[s].m(d, q), y(d, r, q), c && c.m(d, q), y(d, f, q), o = !0;
    },
    p(d, q) {
      /*variant*/
      d[8] === "default" && /*show_eta_bar*/
      d[18] && /*show_progress*/
      d[6] === "full" ? u ? u.p(d, q) : (u = vt(d), u.c(), u.m(e.parentNode, e)) : u && (u.d(1), u = null), m === (m = _(d)) && b ? b.p(d, q) : (b && b.d(1), b = m && m(d), b && (b.c(), b.m(t, l))), /*timer*/
      d[5] ? p ? p.p(d, q) : (p = Ct(d), p.c(), p.m(t, null)) : p && (p.d(1), p = null), (!o || q[0] & /*variant*/
      256) && R(
        t,
        "meta-text-center",
        /*variant*/
        d[8] === "center"
      ), (!o || q[0] & /*variant*/
      256) && R(
        t,
        "meta-text",
        /*variant*/
        d[8] === "default"
      );
      let I = s;
      s = V(d), s === I ? ~s && M[s].p(d, q) : (a && (xe(), te(M[I], 1, 1, () => {
        M[I] = null;
      }), We()), ~s ? (a = M[s], a ? a.p(d, q) : (a = M[s] = C[s](d), a.c()), K(a, 1), a.m(r.parentNode, r)) : a = null), /*timer*/
      d[5] ? c && (xe(), te(c, 1, 1, () => {
        c = null;
      }), We()) : c ? (c.p(d, q), q[0] & /*timer*/
      32 && K(c, 1)) : (c = Nt(d), c.c(), K(c, 1), c.m(f.parentNode, f));
    },
    i(d) {
      o || (K(a), K(c), o = !0);
    },
    o(d) {
      te(a), te(c), o = !1;
    },
    d(d) {
      d && (v(e), v(t), v(i), v(r), v(f)), u && u.d(d), b && b.d(), p && p.d(), ~s && M[s].d(d), c && c.d(d);
    }
  };
}
function vt(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = ee("div"), Q(e, "class", "eta-bar svelte-16nch4a"), se(e, "transform", t);
    },
    m(l, i) {
      y(l, e, i);
    },
    p(l, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (l[17] || 0) * 100 - 100}%)`) && se(e, "transform", t);
    },
    d(l) {
      l && v(e);
    }
  };
}
function Al(n) {
  let e;
  return {
    c() {
      e = N("processing |");
    },
    m(t, l) {
      y(t, e, l);
    },
    p: $e,
    d(t) {
      t && v(e);
    }
  };
}
function Xl(n) {
  let e, t = (
    /*queue_position*/
    n[2] + 1 + ""
  ), l, i, s, a;
  return {
    c() {
      e = N("queue: "), l = N(t), i = N("/"), s = N(
        /*queue_size*/
        n[3]
      ), a = N(" |");
    },
    m(r, f) {
      y(r, e, f), y(r, l, f), y(r, i, f), y(r, s, f), y(r, a, f);
    },
    p(r, f) {
      f[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && G(l, t), f[0] & /*queue_size*/
      8 && G(
        s,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (v(e), v(l), v(i), v(s), v(a));
    }
  };
}
function Rl(n) {
  let e, t = je(
    /*progress*/
    n[7]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = qt(kt(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = we();
    },
    m(i, s) {
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(i, s);
      y(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      128) {
        t = je(
          /*progress*/
          i[7]
        );
        let a;
        for (a = 0; a < t.length; a += 1) {
          const r = kt(i, t, a);
          l[a] ? l[a].p(r, s) : (l[a] = qt(r), l[a].c(), l[a].m(e.parentNode, e));
        }
        for (; a < l.length; a += 1)
          l[a].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && v(e), Rt(l, i);
    }
  };
}
function yt(n) {
  let e, t = (
    /*p*/
    n[41].unit + ""
  ), l, i, s = " ", a;
  function r(u, _) {
    return (
      /*p*/
      u[41].length != null ? Gl : Yl
    );
  }
  let f = r(n), o = f(n);
  return {
    c() {
      o.c(), e = Y(), l = N(t), i = N(" | "), a = N(s);
    },
    m(u, _) {
      o.m(u, _), y(u, e, _), y(u, l, _), y(u, i, _), y(u, a, _);
    },
    p(u, _) {
      f === (f = r(u)) && o ? o.p(u, _) : (o.d(1), o = f(u), o && (o.c(), o.m(e.parentNode, e))), _[0] & /*progress*/
      128 && t !== (t = /*p*/
      u[41].unit + "") && G(l, t);
    },
    d(u) {
      u && (v(e), v(l), v(i), v(a)), o.d(u);
    }
  };
}
function Yl(n) {
  let e = he(
    /*p*/
    n[41].index || 0
  ) + "", t;
  return {
    c() {
      t = N(e);
    },
    m(l, i) {
      y(l, t, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && e !== (e = he(
        /*p*/
        l[41].index || 0
      ) + "") && G(t, e);
    },
    d(l) {
      l && v(t);
    }
  };
}
function Gl(n) {
  let e = he(
    /*p*/
    n[41].index || 0
  ) + "", t, l, i = he(
    /*p*/
    n[41].length
  ) + "", s;
  return {
    c() {
      t = N(e), l = N("/"), s = N(i);
    },
    m(a, r) {
      y(a, t, r), y(a, l, r), y(a, s, r);
    },
    p(a, r) {
      r[0] & /*progress*/
      128 && e !== (e = he(
        /*p*/
        a[41].index || 0
      ) + "") && G(t, e), r[0] & /*progress*/
      128 && i !== (i = he(
        /*p*/
        a[41].length
      ) + "") && G(s, i);
    },
    d(a) {
      a && (v(t), v(l), v(s));
    }
  };
}
function qt(n) {
  let e, t = (
    /*p*/
    n[41].index != null && yt(n)
  );
  return {
    c() {
      t && t.c(), e = we();
    },
    m(l, i) {
      t && t.m(l, i), y(l, e, i);
    },
    p(l, i) {
      /*p*/
      l[41].index != null ? t ? t.p(l, i) : (t = yt(l), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(l) {
      l && v(e), t && t.d(l);
    }
  };
}
function Ct(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), l, i;
  return {
    c() {
      e = N(
        /*formatted_timer*/
        n[20]
      ), l = N(t), i = N("s");
    },
    m(s, a) {
      y(s, e, a), y(s, l, a), y(s, i, a);
    },
    p(s, a) {
      a[0] & /*formatted_timer*/
      1048576 && G(
        e,
        /*formatted_timer*/
        s[20]
      ), a[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && G(l, t);
    },
    d(s) {
      s && (v(e), v(l), v(i));
    }
  };
}
function Ol(n) {
  let e, t;
  return e = new Sl({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      Dt(e.$$.fragment);
    },
    m(l, i) {
      Ot(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*variant*/
      256 && (s.margin = /*variant*/
      l[8] === "default"), e.$set(s);
    },
    i(l) {
      t || (K(e.$$.fragment, l), t = !0);
    },
    o(l) {
      te(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Xt(e, l);
    }
  };
}
function Ul(n) {
  let e, t, l, i, s, a = `${/*last_progress_level*/
  n[15] * 100}%`, r = (
    /*progress*/
    n[7] != null && Mt(n)
  );
  return {
    c() {
      e = ee("div"), t = ee("div"), r && r.c(), l = Y(), i = ee("div"), s = ee("div"), Q(t, "class", "progress-level-inner svelte-16nch4a"), Q(s, "class", "progress-bar svelte-16nch4a"), se(s, "width", a), Q(i, "class", "progress-bar-wrap svelte-16nch4a"), Q(e, "class", "progress-level svelte-16nch4a");
    },
    m(f, o) {
      y(f, e, o), _e(e, t), r && r.m(t, null), _e(e, l), _e(e, i), _e(i, s), n[31](s);
    },
    p(f, o) {
      /*progress*/
      f[7] != null ? r ? r.p(f, o) : (r = Mt(f), r.c(), r.m(t, null)) : r && (r.d(1), r = null), o[0] & /*last_progress_level*/
      32768 && a !== (a = `${/*last_progress_level*/
      f[15] * 100}%`) && se(s, "width", a);
    },
    i: $e,
    o: $e,
    d(f) {
      f && v(e), r && r.d(), n[31](null);
    }
  };
}
function Mt(n) {
  let e, t = je(
    /*progress*/
    n[7]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = Vt(pt(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = we();
    },
    m(i, s) {
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(i, s);
      y(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        t = je(
          /*progress*/
          i[7]
        );
        let a;
        for (a = 0; a < t.length; a += 1) {
          const r = pt(i, t, a);
          l[a] ? l[a].p(r, s) : (l[a] = Vt(r), l[a].c(), l[a].m(e.parentNode, e));
        }
        for (; a < l.length; a += 1)
          l[a].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && v(e), Rt(l, i);
    }
  };
}
function zt(n) {
  let e, t, l, i, s = (
    /*i*/
    n[43] !== 0 && Hl()
  ), a = (
    /*p*/
    n[41].desc != null && Ft(n)
  ), r = (
    /*p*/
    n[41].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null && Lt()
  ), f = (
    /*progress_level*/
    n[14] != null && St(n)
  );
  return {
    c() {
      s && s.c(), e = Y(), a && a.c(), t = Y(), r && r.c(), l = Y(), f && f.c(), i = we();
    },
    m(o, u) {
      s && s.m(o, u), y(o, e, u), a && a.m(o, u), y(o, t, u), r && r.m(o, u), y(o, l, u), f && f.m(o, u), y(o, i, u);
    },
    p(o, u) {
      /*p*/
      o[41].desc != null ? a ? a.p(o, u) : (a = Ft(o), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null), /*p*/
      o[41].desc != null && /*progress_level*/
      o[14] && /*progress_level*/
      o[14][
        /*i*/
        o[43]
      ] != null ? r || (r = Lt(), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null), /*progress_level*/
      o[14] != null ? f ? f.p(o, u) : (f = St(o), f.c(), f.m(i.parentNode, i)) : f && (f.d(1), f = null);
    },
    d(o) {
      o && (v(e), v(t), v(l), v(i)), s && s.d(o), a && a.d(o), r && r.d(o), f && f.d(o);
    }
  };
}
function Hl(n) {
  let e;
  return {
    c() {
      e = N(" /");
    },
    m(t, l) {
      y(t, e, l);
    },
    d(t) {
      t && v(e);
    }
  };
}
function Ft(n) {
  let e = (
    /*p*/
    n[41].desc + ""
  ), t;
  return {
    c() {
      t = N(e);
    },
    m(l, i) {
      y(l, t, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      l[41].desc + "") && G(t, e);
    },
    d(l) {
      l && v(t);
    }
  };
}
function Lt(n) {
  let e;
  return {
    c() {
      e = N("-");
    },
    m(t, l) {
      y(t, e, l);
    },
    d(t) {
      t && v(e);
    }
  };
}
function St(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[43]
  ] || 0)).toFixed(1) + "", t, l;
  return {
    c() {
      t = N(e), l = N("%");
    },
    m(i, s) {
      y(i, t, s), y(i, l, s);
    },
    p(i, s) {
      s[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[43]
      ] || 0)).toFixed(1) + "") && G(t, e);
    },
    d(i) {
      i && (v(t), v(l));
    }
  };
}
function Vt(n) {
  let e, t = (
    /*p*/
    (n[41].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[43]
    ] != null) && zt(n)
  );
  return {
    c() {
      t && t.c(), e = we();
    },
    m(l, i) {
      t && t.m(l, i), y(l, e, i);
    },
    p(l, i) {
      /*p*/
      l[41].desc != null || /*progress_level*/
      l[14] && /*progress_level*/
      l[14][
        /*i*/
        l[43]
      ] != null ? t ? t.p(l, i) : (t = zt(l), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(l) {
      l && v(e), t && t.d(l);
    }
  };
}
function Nt(n) {
  let e, t, l, i;
  const s = (
    /*#slots*/
    n[30]["additional-loading-text"]
  ), a = At(
    s,
    n,
    /*$$scope*/
    n[29],
    wt
  );
  return {
    c() {
      e = ee("p"), t = N(
        /*loading_text*/
        n[9]
      ), l = Y(), a && a.c(), Q(e, "class", "loading svelte-16nch4a");
    },
    m(r, f) {
      y(r, e, f), _e(e, t), y(r, l, f), a && a.m(r, f), i = !0;
    },
    p(r, f) {
      (!i || f[0] & /*loading_text*/
      512) && G(
        t,
        /*loading_text*/
        r[9]
      ), a && a.p && (!i || f[0] & /*$$scope*/
      536870912) && Ut(
        a,
        s,
        r,
        /*$$scope*/
        r[29],
        i ? Gt(
          s,
          /*$$scope*/
          r[29],
          f,
          Bl
        ) : Yt(
          /*$$scope*/
          r[29]
        ),
        wt
      );
    },
    i(r) {
      i || (K(a, r), i = !0);
    },
    o(r) {
      te(a, r), i = !1;
    },
    d(r) {
      r && (v(e), v(l)), a && a.d(r);
    }
  };
}
function Jl(n) {
  let e, t, l, i, s;
  const a = [Dl, Tl], r = [];
  function f(o, u) {
    return (
      /*status*/
      o[4] === "pending" ? 0 : (
        /*status*/
        o[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = f(n)) && (l = r[t] = a[t](n)), {
    c() {
      e = ee("div"), l && l.c(), Q(e, "class", i = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-16nch4a"), R(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden"), R(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), R(
        e,
        "generating",
        /*status*/
        n[4] === "generating"
      ), R(
        e,
        "border",
        /*border*/
        n[12]
      ), se(
        e,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), se(
        e,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(o, u) {
      y(o, e, u), ~t && r[t].m(e, null), n[33](e), s = !0;
    },
    p(o, u) {
      let _ = t;
      t = f(o), t === _ ? ~t && r[t].p(o, u) : (l && (xe(), te(r[_], 1, 1, () => {
        r[_] = null;
      }), We()), ~t ? (l = r[t], l ? l.p(o, u) : (l = r[t] = a[t](o), l.c()), K(l, 1), l.m(e, null)) : l = null), (!s || u[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      o[8] + " " + /*show_progress*/
      o[6] + " svelte-16nch4a")) && Q(e, "class", i), (!s || u[0] & /*variant, show_progress, status, show_progress*/
      336) && R(e, "hide", !/*status*/
      o[4] || /*status*/
      o[4] === "complete" || /*show_progress*/
      o[6] === "hidden"), (!s || u[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && R(
        e,
        "translucent",
        /*variant*/
        o[8] === "center" && /*status*/
        (o[4] === "pending" || /*status*/
        o[4] === "error") || /*translucent*/
        o[11] || /*show_progress*/
        o[6] === "minimal"
      ), (!s || u[0] & /*variant, show_progress, status*/
      336) && R(
        e,
        "generating",
        /*status*/
        o[4] === "generating"
      ), (!s || u[0] & /*variant, show_progress, border*/
      4416) && R(
        e,
        "border",
        /*border*/
        o[12]
      ), u[0] & /*absolute*/
      1024 && se(
        e,
        "position",
        /*absolute*/
        o[10] ? "absolute" : "static"
      ), u[0] & /*absolute*/
      1024 && se(
        e,
        "padding",
        /*absolute*/
        o[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(o) {
      s || (K(l), s = !0);
    },
    o(o) {
      te(l), s = !1;
    },
    d(o) {
      o && v(e), ~t && r[t].d(), n[33](null);
    }
  };
}
var Kl = function(n, e, t, l) {
  function i(s) {
    return s instanceof t ? s : new t(function(a) {
      a(s);
    });
  }
  return new (t || (t = Promise))(function(s, a) {
    function r(u) {
      try {
        o(l.next(u));
      } catch (_) {
        a(_);
      }
    }
    function f(u) {
      try {
        o(l.throw(u));
      } catch (_) {
        a(_);
      }
    }
    function o(u) {
      u.done ? s(u.value) : i(u.value).then(r, f);
    }
    o((l = l.apply(n, e || [])).next());
  });
};
let Le = [], He = !1;
function Ql(n) {
  return Kl(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Le.push(e), !He) He = !0;
      else return;
      yield Il(), requestAnimationFrame(() => {
        let l = [0, 0];
        for (let i = 0; i < Le.length; i++) {
          const a = Le[i].getBoundingClientRect();
          (i === 0 || a.top + window.scrollY <= l[0]) && (l[0] = a.top + window.scrollY, l[1] = i);
        }
        window.scrollTo({ top: l[0] - 20, behavior: "smooth" }), He = !1, Le = [];
      });
    }
  });
}
function Wl(n, e, t) {
  let l, { $$slots: i = {}, $$scope: s } = e;
  this && this.__awaiter;
  const a = jl();
  let { i18n: r } = e, { eta: f = null } = e, { queue_position: o } = e, { queue_size: u } = e, { status: _ } = e, { scroll_to_output: m = !1 } = e, { timer: b = !0 } = e, { show_progress: p = "full" } = e, { message: C = null } = e, { progress: M = null } = e, { variant: V = "default" } = e, { loading_text: c = "Loading..." } = e, { absolute: d = !0 } = e, { translucent: q = !1 } = e, { border: I = !1 } = e, { autoscroll: h } = e, z, P = !1, ne = 0, j = 0, T = null, k = null, F = 0, D = null, Z, W = null, ye = !0;
  const Be = () => {
    t(0, f = t(27, T = t(19, ce = null))), t(25, ne = performance.now()), t(26, j = 0), P = !0, qe();
  };
  function qe() {
    requestAnimationFrame(() => {
      t(26, j = (performance.now() - ne) / 1e3), P && qe();
    });
  }
  function Ce() {
    t(26, j = 0), t(0, f = t(27, T = t(19, ce = null))), P && (P = !1);
  }
  Zl(() => {
    P && Ce();
  });
  let ce = null;
  function Te(w) {
    ht[w ? "unshift" : "push"](() => {
      W = w, t(16, W), t(7, M), t(14, D), t(15, Z);
    });
  }
  const De = () => {
    a("clear_status");
  };
  function Ae(w) {
    ht[w ? "unshift" : "push"](() => {
      z = w, t(13, z);
    });
  }
  return n.$$set = (w) => {
    "i18n" in w && t(1, r = w.i18n), "eta" in w && t(0, f = w.eta), "queue_position" in w && t(2, o = w.queue_position), "queue_size" in w && t(3, u = w.queue_size), "status" in w && t(4, _ = w.status), "scroll_to_output" in w && t(22, m = w.scroll_to_output), "timer" in w && t(5, b = w.timer), "show_progress" in w && t(6, p = w.show_progress), "message" in w && t(23, C = w.message), "progress" in w && t(7, M = w.progress), "variant" in w && t(8, V = w.variant), "loading_text" in w && t(9, c = w.loading_text), "absolute" in w && t(10, d = w.absolute), "translucent" in w && t(11, q = w.translucent), "border" in w && t(12, I = w.border), "autoscroll" in w && t(24, h = w.autoscroll), "$$scope" in w && t(29, s = w.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (f === null && t(0, f = T), f != null && T !== f && (t(28, k = (performance.now() - ne) / 1e3 + f), t(19, ce = k.toFixed(1)), t(27, T = f))), n.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, F = k === null || k <= 0 || !j ? null : Math.min(j / k, 1)), n.$$.dirty[0] & /*progress*/
    128 && M != null && t(18, ye = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (M != null ? t(14, D = M.map((w) => {
      if (w.index != null && w.length != null)
        return w.index / w.length;
      if (w.progress != null)
        return w.progress;
    })) : t(14, D = null), D ? (t(15, Z = D[D.length - 1]), W && (Z === 0 ? t(16, W.style.transition = "0", W) : t(16, W.style.transition = "150ms", W))) : t(15, Z = void 0)), n.$$.dirty[0] & /*status*/
    16 && (_ === "pending" ? Be() : Ce()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && z && m && (_ === "pending" || _ === "complete") && Ql(z, h), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, l = j.toFixed(1));
  }, [
    f,
    r,
    o,
    u,
    _,
    b,
    p,
    M,
    V,
    c,
    d,
    q,
    I,
    z,
    D,
    Z,
    W,
    F,
    ye,
    ce,
    l,
    a,
    m,
    C,
    h,
    ne,
    j,
    T,
    k,
    s,
    i,
    Te,
    De,
    Ae
  ];
}
class xl extends Vl {
  constructor(e) {
    super(), Nl(
      this,
      e,
      Wl,
      Jl,
      Pl,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: $l,
  append: B,
  assign: ei,
  attr: S,
  binding_callbacks: Se,
  create_component: et,
  destroy_component: tt,
  detach: ke,
  element: J,
  get_spread_object: ti,
  get_spread_update: ni,
  init: li,
  insert: ve,
  listen: fe,
  mount_component: nt,
  run_all: ii,
  safe_not_equal: fi,
  set_data: si,
  set_input_value: Ve,
  space: ue,
  text: oi,
  to_number: Ee,
  transition_in: lt,
  transition_out: it
} = window.__gradio__svelte__internal, { afterUpdate: ai } = window.__gradio__svelte__internal;
function ri(n) {
  let e;
  return {
    c() {
      e = oi(
        /*label*/
        n[5]
      );
    },
    m(t, l) {
      ve(t, e, l);
    },
    p(t, l) {
      l[0] & /*label*/
      32 && si(
        e,
        /*label*/
        t[5]
      );
    },
    d(t) {
      t && ke(e);
    }
  };
}
function ui(n) {
  let e, t, l, i, s, a, r, f, o, u, _, m, b, p, C, M, V, c, d, q, I, h, z, P, ne;
  const j = [
    { autoscroll: (
      /*gradio*/
      n[1].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      n[1].i18n
    ) },
    /*loading_status*/
    n[14]
  ];
  let T = {};
  for (let k = 0; k < j.length; k += 1)
    T = ei(T, j[k]);
  return e = new xl({ props: T }), e.$on(
    "clear_status",
    /*clear_status_handler*/
    n[26]
  ), a = new Un({
    props: {
      show_label: (
        /*show_label*/
        n[13]
      ),
      info: (
        /*info*/
        n[6]
      ),
      $$slots: { default: [ri] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      et(e.$$.fragment), t = ue(), l = J("div"), i = J("div"), s = J("label"), et(a.$$.fragment), r = ue(), f = J("div"), o = J("input"), _ = ue(), m = J("input"), p = ue(), C = J("div"), M = J("div"), V = ue(), c = J("div"), d = ue(), q = J("div"), I = ue(), h = J("div"), S(
        s,
        "for",
        /*id*/
        n[20]
      ), S(o, "aria-label", u = `minimum value input for ${/*label*/
      n[5]}`), S(o, "data-testid", "number-input-min"), S(o, "type", "number"), S(
        o,
        "min",
        /*minimum*/
        n[10]
      ), S(
        o,
        "max",
        /*maximum*/
        n[11]
      ), S(
        o,
        "step",
        /*step*/
        n[12]
      ), o.disabled = /*disabled*/
      n[19], S(o, "class", "svelte-5fr5fz"), S(m, "aria-label", b = `maximum value input for ${/*label*/
      n[5]}`), S(m, "data-testid", "number-input-max"), S(m, "type", "number"), S(
        m,
        "min",
        /*minimum*/
        n[10]
      ), S(
        m,
        "max",
        /*maximum*/
        n[11]
      ), S(
        m,
        "step",
        /*step*/
        n[12]
      ), m.disabled = /*disabled*/
      n[19], S(m, "class", "svelte-5fr5fz"), S(f, "class", "inputs svelte-5fr5fz"), S(i, "class", "head svelte-5fr5fz"), S(l, "class", "wrap"), S(M, "class", "slider-track svelte-5fr5fz"), S(c, "class", "slider-track-highlight svelte-5fr5fz"), S(q, "class", "slider-thumb min svelte-5fr5fz"), S(h, "class", "slider-thumb max svelte-5fr5fz"), S(C, "class", "slider-container svelte-5fr5fz");
    },
    m(k, F) {
      nt(e, k, F), ve(k, t, F), ve(k, l, F), B(l, i), B(i, s), nt(a, s, null), B(i, r), B(i, f), B(f, o), Ve(
        o,
        /*value*/
        n[0][0]
      ), B(f, _), B(f, m), Ve(
        m,
        /*value*/
        n[0][1]
      ), ve(k, p, F), ve(k, C, F), B(C, M), B(C, V), B(C, c), n[31](c), B(C, d), B(C, q), n[32](q), B(C, I), B(C, h), n[34](h), n[36](C), z = !0, P || (ne = [
        fe(
          o,
          "input",
          /*input0_input_handler*/
          n[27]
        ),
        fe(
          o,
          "blur",
          /*clamp*/
          n[21]
        ),
        fe(
          o,
          "change",
          /*change_handler*/
          n[28]
        ),
        fe(
          m,
          "input",
          /*input1_input_handler*/
          n[29]
        ),
        fe(
          m,
          "blur",
          /*clamp*/
          n[21]
        ),
        fe(
          m,
          "change",
          /*change_handler_1*/
          n[30]
        ),
        fe(
          q,
          "mousedown",
          /*mousedown_handler*/
          n[33]
        ),
        fe(
          h,
          "mousedown",
          /*mousedown_handler_1*/
          n[35]
        )
      ], P = !0);
    },
    p(k, F) {
      const D = F[0] & /*gradio, loading_status*/
      16386 ? ni(j, [
        F[0] & /*gradio*/
        2 && { autoscroll: (
          /*gradio*/
          k[1].autoscroll
        ) },
        F[0] & /*gradio*/
        2 && { i18n: (
          /*gradio*/
          k[1].i18n
        ) },
        F[0] & /*loading_status*/
        16384 && ti(
          /*loading_status*/
          k[14]
        )
      ]) : {};
      e.$set(D);
      const Z = {};
      F[0] & /*show_label*/
      8192 && (Z.show_label = /*show_label*/
      k[13]), F[0] & /*info*/
      64 && (Z.info = /*info*/
      k[6]), F[0] & /*label*/
      32 | F[1] & /*$$scope*/
      512 && (Z.$$scope = { dirty: F, ctx: k }), a.$set(Z), (!z || F[0] & /*label*/
      32 && u !== (u = `minimum value input for ${/*label*/
      k[5]}`)) && S(o, "aria-label", u), (!z || F[0] & /*minimum*/
      1024) && S(
        o,
        "min",
        /*minimum*/
        k[10]
      ), (!z || F[0] & /*maximum*/
      2048) && S(
        o,
        "max",
        /*maximum*/
        k[11]
      ), (!z || F[0] & /*step*/
      4096) && S(
        o,
        "step",
        /*step*/
        k[12]
      ), (!z || F[0] & /*disabled*/
      524288) && (o.disabled = /*disabled*/
      k[19]), F[0] & /*value*/
      1 && Ee(o.value) !== /*value*/
      k[0][0] && Ve(
        o,
        /*value*/
        k[0][0]
      ), (!z || F[0] & /*label*/
      32 && b !== (b = `maximum value input for ${/*label*/
      k[5]}`)) && S(m, "aria-label", b), (!z || F[0] & /*minimum*/
      1024) && S(
        m,
        "min",
        /*minimum*/
        k[10]
      ), (!z || F[0] & /*maximum*/
      2048) && S(
        m,
        "max",
        /*maximum*/
        k[11]
      ), (!z || F[0] & /*step*/
      4096) && S(
        m,
        "step",
        /*step*/
        k[12]
      ), (!z || F[0] & /*disabled*/
      524288) && (m.disabled = /*disabled*/
      k[19]), F[0] & /*value*/
      1 && Ee(m.value) !== /*value*/
      k[0][1] && Ve(
        m,
        /*value*/
        k[0][1]
      );
    },
    i(k) {
      z || (lt(e.$$.fragment, k), lt(a.$$.fragment, k), z = !0);
    },
    o(k) {
      it(e.$$.fragment, k), it(a.$$.fragment, k), z = !1;
    },
    d(k) {
      k && (ke(t), ke(l), ke(p), ke(C)), tt(e, k), tt(a), n[31](null), n[32](null), n[34](null), n[36](null), P = !1, ii(ne);
    }
  };
}
function _i(n) {
  let e, t;
  return e = new rn({
    props: {
      visible: (
        /*visible*/
        n[4]
      ),
      elem_id: (
        /*elem_id*/
        n[2]
      ),
      elem_classes: (
        /*elem_classes*/
        n[3]
      ),
      container: (
        /*container*/
        n[7]
      ),
      scale: (
        /*scale*/
        n[8]
      ),
      min_width: (
        /*min_width*/
        n[9]
      ),
      $$slots: { default: [ui] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      et(e.$$.fragment);
    },
    m(l, i) {
      nt(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*visible*/
      16 && (s.visible = /*visible*/
      l[4]), i[0] & /*elem_id*/
      4 && (s.elem_id = /*elem_id*/
      l[2]), i[0] & /*elem_classes*/
      8 && (s.elem_classes = /*elem_classes*/
      l[3]), i[0] & /*container*/
      128 && (s.container = /*container*/
      l[7]), i[0] & /*scale*/
      256 && (s.scale = /*scale*/
      l[8]), i[0] & /*min_width*/
      512 && (s.min_width = /*min_width*/
      l[9]), i[0] & /*sliderContainer, maxThumb, minThumb, track, label, minimum, maximum, step, disabled, value, show_label, info, gradio, loading_status*/
      1047651 | i[1] & /*$$scope*/
      512 && (s.$$scope = { dirty: i, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (lt(e.$$.fragment, l), t = !0);
    },
    o(l) {
      it(e.$$.fragment, l), t = !1;
    },
    d(l) {
      tt(e, l);
    }
  };
}
function ci(n, e, t) {
  let l, { gradio: i } = e, { elem_id: s = "" } = e, { elem_classes: a = [] } = e, { visible: r = !0 } = e, { value: f } = e, { label: o } = e, { info: u = void 0 } = e, { container: _ = !0 } = e, { scale: m = null } = e, { min_width: b = void 0 } = e, { minimum: p } = e, { maximum: C } = e, { step: M } = e, { show_label: V } = e, { interactive: c } = e, { loading_status: d } = e, { value_is_output: q = !1 } = e, I, h, z, P;
  const ne = `range_id_${Math.random().toString(36).substr(2, 9)}`;
  function j() {
    i.dispatch("change"), q || i.dispatch("input");
  }
  ai(() => {
    t(24, q = !1), F();
  });
  function T() {
    i.dispatch("release", f);
  }
  function k() {
    t(0, f[0] = Math.max(p, Math.min(Z(f[0]), f[1])), f), t(0, f[1] = Math.min(C, Math.max(f[0], Z(f[1]))), f), t(0, f), F(), T();
  }
  function F() {
    const g = C - p, A = (f[0] - p) / g * 100, le = (f[1] - p) / g * 100;
    t(16, h.style.left = `${A}%`, h), t(17, z.style.left = `${le}%`, z), t(18, P.style.left = `${A}%`, P), t(18, P.style.width = `${le - A}%`, P);
  }
  function D(g) {
    const A = (oe) => {
      const ae = I.getBoundingClientRect(), Re = (oe.clientX - ae.left) / ae.width, Me = Z(p + Re * (C - p));
      g ? t(0, f[0] = Math.min(Math.max(Me, p), f[1]), f) : t(0, f[1] = Math.max(Math.min(Me, C), f[0]), f), t(0, f), F(), j();
    }, le = () => {
      window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", le), T();
    };
    window.addEventListener("mousemove", A), window.addEventListener("mouseup", le);
  }
  function Z(g) {
    const A = Math.ceil(Math.log(M) * -1), le = Math.round((g - p) / M) * M + p;
    return Number(le.toFixed(A));
  }
  const W = () => i.dispatch("clear_status", d);
  function ye() {
    f[0] = Ee(this.value), t(0, f);
  }
  const Be = () => {
    t(0, f[0] = Z(f[0]), f), k();
  };
  function qe() {
    f[1] = Ee(this.value), t(0, f);
  }
  const Ce = () => {
    t(0, f[1] = Z(f[1]), f), k();
  };
  function ce(g) {
    Se[g ? "unshift" : "push"](() => {
      P = g, t(18, P);
    });
  }
  function Te(g) {
    Se[g ? "unshift" : "push"](() => {
      h = g, t(16, h);
    });
  }
  const De = () => D(!0);
  function Ae(g) {
    Se[g ? "unshift" : "push"](() => {
      z = g, t(17, z);
    });
  }
  const w = () => D(!1);
  function Xe(g) {
    Se[g ? "unshift" : "push"](() => {
      I = g, t(15, I);
    });
  }
  return n.$$set = (g) => {
    "gradio" in g && t(1, i = g.gradio), "elem_id" in g && t(2, s = g.elem_id), "elem_classes" in g && t(3, a = g.elem_classes), "visible" in g && t(4, r = g.visible), "value" in g && t(0, f = g.value), "label" in g && t(5, o = g.label), "info" in g && t(6, u = g.info), "container" in g && t(7, _ = g.container), "scale" in g && t(8, m = g.scale), "min_width" in g && t(9, b = g.min_width), "minimum" in g && t(10, p = g.minimum), "maximum" in g && t(11, C = g.maximum), "step" in g && t(12, M = g.step), "show_label" in g && t(13, V = g.show_label), "interactive" in g && t(25, c = g.interactive), "loading_status" in g && t(14, d = g.loading_status), "value_is_output" in g && t(24, q = g.value_is_output);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*interactive*/
    33554432 && t(19, l = !c), n.$$.dirty[0] & /*value*/
    1 && j();
  }, [
    f,
    i,
    s,
    a,
    r,
    o,
    u,
    _,
    m,
    b,
    p,
    C,
    M,
    V,
    d,
    I,
    h,
    z,
    P,
    l,
    ne,
    k,
    D,
    Z,
    q,
    c,
    W,
    ye,
    Be,
    qe,
    Ce,
    ce,
    Te,
    De,
    Ae,
    w,
    Xe
  ];
}
class di extends $l {
  constructor(e) {
    super(), li(
      this,
      e,
      ci,
      _i,
      fi,
      {
        gradio: 1,
        elem_id: 2,
        elem_classes: 3,
        visible: 4,
        value: 0,
        label: 5,
        info: 6,
        container: 7,
        scale: 8,
        min_width: 9,
        minimum: 10,
        maximum: 11,
        step: 12,
        show_label: 13,
        interactive: 25,
        loading_status: 14,
        value_is_output: 24
      },
      null,
      [-1, -1]
    );
  }
}
export {
  di as default
};
