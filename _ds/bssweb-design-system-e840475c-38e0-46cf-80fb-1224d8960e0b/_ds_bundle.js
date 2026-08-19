/* @ds-bundle: {"format":4,"namespace":"BsswebDesignSystem_e84047","components":[{"name":"CTABanner","sourcePath":"components/brand/CTABanner.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"FeatureCard","sourcePath":"components/brand/FeatureCard.jsx"},{"name":"GradientText","sourcePath":"components/brand/GradientText.jsx"},{"name":"LogoWall","sourcePath":"components/brand/LogoWall.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ActivityItem","sourcePath":"components/data/ActivityItem.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"BeamCanvas","sourcePath":"components/motion/BeamCanvas.jsx"},{"name":"ParallaxLayer","sourcePath":"components/motion/ParallaxLayer.jsx"},{"name":"ScrollReveal","sourcePath":"components/motion/ScrollReveal.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/CTABanner.jsx":"cb54ff1d649b","components/brand/Eyebrow.jsx":"19aad4aed6bb","components/brand/FeatureCard.jsx":"b88a2077ce3f","components/brand/GradientText.jsx":"7a4452e46d81","components/brand/LogoWall.jsx":"0bfc8887a6eb","components/brand/SectionHeading.jsx":"71be2c4c4f93","components/brand/Wordmark.jsx":"5c1f2aecfa40","components/core/Avatar.jsx":"fe729003b257","components/core/Badge.jsx":"0bf495fb40bb","components/core/Button.jsx":"e0710c3d622d","components/core/Card.jsx":"0f6dd1537197","components/core/Divider.jsx":"33b07a3a8ed0","components/core/Icon.jsx":"e49241d9a4a9","components/core/IconButton.jsx":"27866497cb18","components/core/Tag.jsx":"a68651189ba2","components/data/ActivityItem.jsx":"2fbb64d03679","components/data/BarChart.jsx":"be4a43c382ab","components/data/DataTable.jsx":"b158828f3adf","components/data/StatCard.jsx":"7b338b60952f","components/feedback/Dialog.jsx":"38f19dee04b5","components/feedback/ProgressBar.jsx":"fbc5ff1869db","components/feedback/Skeleton.jsx":"ebacab04ca7c","components/feedback/Toast.jsx":"98111987d6b1","components/feedback/Tooltip.jsx":"e3664af5747e","components/forms/Checkbox.jsx":"eabc8bbb2fe8","components/forms/Field.jsx":"fc75848391b8","components/forms/Input.jsx":"a5f5c6dadf67","components/forms/Radio.jsx":"1f9187495094","components/forms/Select.jsx":"274f3d962793","components/forms/Switch.jsx":"34a627f98a5e","components/forms/Textarea.jsx":"ca4e75b47e87","components/motion/BeamCanvas.jsx":"ee7e75f8d0d1","components/motion/ParallaxLayer.jsx":"32cddcf9ed76","components/motion/ScrollReveal.jsx":"476f30fb5f44","components/navigation/Breadcrumbs.jsx":"017905556f6d","components/navigation/NavBar.jsx":"98fbe95d34c3","components/navigation/Pagination.jsx":"bdceee7b1a26","components/navigation/SideNav.jsx":"1a2c1ac6b5b0","components/navigation/Tabs.jsx":"4d0413a296bd","ui_kits/console/Views.jsx":"6843b3879301","ui_kits/marketing-site/ChainHero.jsx":"30fda5ad8ad2","ui_kits/marketing-site/Chrome.jsx":"44bbcb5f5aff","ui_kits/marketing-site/Home.jsx":"7274e5e897b4","ui_kits/marketing-site/Solutions.jsx":"b175132f8659","ui_kits/mobile/Screens.jsx":"767f80e219eb","ui_kits/portfolio/Work.jsx":"42193db8277d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BsswebDesignSystem_e84047 = window.BsswebDesignSystem_e84047 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/CTABanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-cta{position:relative;overflow:hidden;border-radius:var(--radius-2xl);border:1px solid var(--border-default);background:radial-gradient(120% 140% at 50% 0%,#123a8f 0%,#0a1738 46%,#060c1c 100%);padding:80px 40px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:22px}
.bw-cta::before{content:"";position:absolute;top:-40%;left:50%;width:2px;height:120%;transform:translateX(-50%);background:var(--gradient-beam);filter:blur(1px);opacity:.85}
.bw-cta::after{content:"";position:absolute;inset:0;background:var(--pattern-grid);background-size:var(--pattern-grid-size);-webkit-mask-image:radial-gradient(70% 60% at 50% 40%,#000,transparent);mask-image:radial-gradient(70% 60% at 50% 40%,#000,transparent);pointer-events:none}
.bw-cta__inner{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:22px}
.bw-cta__title{font-family:var(--font-display);font-size:var(--display-3-size);font-weight:600;line-height:1.02;letter-spacing:var(--display-3-track);color:#fff;text-wrap:balance}
.bw-cta__body{font-size:var(--body-lg-size);line-height:1.55;color:rgba(226,235,255,.72);max-width:46ch;text-wrap:pretty}
.bw-cta__actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:6px}
.bw-cta__foot{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:rgba(226,235,255,.42)}
@media (max-width:760px){.bw-cta{padding:56px 22px}.bw-cta__title{font-size:32px}}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-cta")) {
  const s = document.createElement("style");
  s.id = "bw-cta";
  s.textContent = __css;
  document.head.appendChild(s);
}
function CTABanner({
  eyebrow,
  title,
  body,
  actions,
  footnote,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ["bw-cta", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bw-cta__inner"
  }, eyebrow, /*#__PURE__*/React.createElement("h2", {
    className: "bw-cta__title"
  }, title), body && /*#__PURE__*/React.createElement("p", {
    className: "bw-cta__body"
  }, body), actions && /*#__PURE__*/React.createElement("div", {
    className: "bw-cta__actions"
  }, actions), footnote && /*#__PURE__*/React.createElement("span", {
    className: "bw-cta__foot"
  }, footnote)));
}
Object.assign(__ds_scope, { CTABanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CTABanner.jsx", error: String((e && e.message) || e) }); }

// components/brand/GradientText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-gradtext{background:var(--gradient-text);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;display:inline}
.bw-gradtext--accent{background:var(--gradient-text-accent)}
.bw-gradtext--aurora{background:var(--gradient-aurora);background-size:220% 100%;animation:bw-grad-drift 9s var(--ease-in-out-quint) infinite alternate}
@keyframes bw-grad-drift{from{background-position:0% 50%}to{background-position:100% 50%}}
.bw-serif{font-family:var(--font-serif);font-style:italic;font-weight:400;letter-spacing:-0.01em}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-gradtext")) {
  const s = document.createElement("style");
  s.id = "bw-gradtext";
  s.textContent = __css;
  document.head.appendChild(s);
}
function GradientText({
  variant = "fade",
  serif = false,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["bw-gradtext", variant !== "fade" && "bw-gradtext--" + variant, serif && "bw-serif", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { GradientText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GradientText.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoWall.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-logowall{display:flex;flex-direction:column;align-items:center;gap:26px;width:100%}
.bw-logowall__cap{font-size:13px;color:var(--text-tertiary);letter-spacing:-0.005em}
.bw-logowall__row{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:44px;width:100%}
.bw-logowall__item{font-family:var(--font-display);font-size:19px;font-weight:600;letter-spacing:-0.03em;color:var(--text-primary);opacity:.42;transition:opacity var(--dur-base) var(--ease-out-expo),filter var(--dur-base)}
.bw-logowall__item:hover{opacity:.95}
.bw-logowall--marquee{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.bw-logowall--marquee .bw-logowall__row{flex-wrap:nowrap;width:max-content;animation:bw-marquee 34s linear infinite}
@keyframes bw-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-logowall")) {
  const s = document.createElement("style");
  s.id = "bw-logowall";
  s.textContent = __css;
  document.head.appendChild(s);
}
function LogoWall({
  caption,
  logos = [],
  marquee = false,
  className = "",
  ...rest
}) {
  const list = marquee ? logos.concat(logos) : logos;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-logowall", marquee && "bw-logowall--marquee", className].filter(Boolean).join(" ")
  }, rest), caption && /*#__PURE__*/React.createElement("span", {
    className: "bw-logowall__cap"
  }, caption), /*#__PURE__*/React.createElement("div", {
    className: "bw-logowall__row"
  }, list.map((l, i) => typeof l === "string" ? /*#__PURE__*/React.createElement("span", {
    className: "bw-logowall__item",
    key: i
  }, l) : /*#__PURE__*/React.createElement("span", {
    className: "bw-logowall__item",
    key: i
  }, l))));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-secthead{display:flex;flex-direction:column;gap:20px;max-width:var(--measure-default)}
.bw-secthead--center{align-items:center;text-align:center;margin:0 auto}
.bw-secthead__title{font-family:var(--font-display);font-size:var(--display-3-size);font-weight:600;line-height:var(--display-3-line);letter-spacing:var(--display-3-track);color:var(--text-primary);text-wrap:balance}
.bw-secthead--sm .bw-secthead__title{font-size:var(--h1-size);line-height:var(--h1-line);letter-spacing:var(--h1-track)}
.bw-secthead__body{font-size:var(--body-lg-size);line-height:var(--body-lg-line);color:var(--text-secondary);max-width:var(--measure-tight);text-wrap:pretty}
.bw-secthead__actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:4px}
@media (max-width:760px){.bw-secthead__title{font-size:34px}}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-secthead")) {
  const s = document.createElement("style");
  s.id = "bw-secthead";
  s.textContent = __css;
  document.head.appendChild(s);
}
function SectionHeading({
  eyebrow,
  title,
  body,
  actions,
  align = "center",
  size = "lg",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-secthead", align === "center" && "bw-secthead--center", size === "sm" && "bw-secthead--sm", className].filter(Boolean).join(" ")
  }, rest), eyebrow, /*#__PURE__*/React.createElement("h2", {
    className: "bw-secthead__title"
  }, title), body && /*#__PURE__*/React.createElement("p", {
    className: "bw-secthead__body"
  }, body), actions && /*#__PURE__*/React.createElement("div", {
    className: "bw-secthead__actions"
  }, actions));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-wordmark{display:inline-flex;align-items:center;gap:9px;font-family:var(--font-display);font-weight:700;letter-spacing:-0.045em;color:var(--text-primary);text-decoration:none;line-height:1;white-space:nowrap}
.bw-wordmark__dot{width:.34em;height:.34em;border-radius:50%;background:var(--gradient-brand);box-shadow:var(--glow-brand-sm);flex:none;margin-bottom:-.06em}
.bw-wordmark__suffix{font-weight:400;color:var(--text-tertiary);letter-spacing:-0.02em}
.bw-wordmark--mono{color:currentColor}
.bw-wordmark--mono .bw-wordmark__dot{background:currentColor;box-shadow:none}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-wordmark")) {
  const s = document.createElement("style");
  s.id = "bw-wordmark";
  s.textContent = __css;
  document.head.appendChild(s);
}
const SIZES = {
  sm: 17,
  md: 21,
  lg: 30,
  xl: 46
};
function Wordmark({
  size = "md",
  suffix,
  mono = false,
  showDot = true,
  href,
  className = "",
  style,
  ...rest
}) {
  const Tag = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["bw-wordmark", mono && "bw-wordmark--mono", className].filter(Boolean).join(" "),
    href: href,
    style: {
      fontSize: SIZES[size] || SIZES.md,
      ...style
    }
  }, rest), showDot && /*#__PURE__*/React.createElement("span", {
    className: "bw-wordmark__dot"
  }), "bssweb", suffix && /*#__PURE__*/React.createElement("span", {
    className: "bw-wordmark__suffix"
  }, "\xA0", suffix));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-avatar{display:inline-flex;align-items:center;justify-content:center;border-radius:var(--radius-pill);background:var(--gradient-aurora);color:#fff;font-family:var(--font-sans);font-weight:600;letter-spacing:-0.01em;overflow:hidden;flex:none;position:relative;box-shadow:inset 0 0 0 1px rgba(255,255,255,.16)}
.bw-avatar img{width:100%;height:100%;object-fit:cover}
.bw-avatar__status{position:absolute;right:-1px;bottom:-1px;width:30%;height:30%;min-width:8px;min-height:8px;border-radius:50%;border:2px solid var(--surface-card)}
.bw-avatar-group{display:inline-flex;align-items:center}
.bw-avatar-group>.bw-avatar{margin-left:-9px;box-shadow:0 0 0 2px var(--surface-card),inset 0 0 0 1px rgba(255,255,255,.16)}
.bw-avatar-group>.bw-avatar:first-child{margin-left:0}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-avatar")) {
  const s = document.createElement("style");
  s.id = "bw-avatar";
  s.textContent = __css;
  document.head.appendChild(s);
}
const SIZES = {
  xs: 22,
  sm: 28,
  md: 34,
  lg: 44,
  xl: 64
};
const STATUS = {
  online: "var(--green-500)",
  busy: "var(--red-500)",
  away: "var(--amber-500)",
  offline: "var(--ink-400)"
};
function Avatar({
  name = "",
  src,
  size = "md",
  status,
  className = "",
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "bw-avatar " + className,
    title: name,
    style: {
      width: px,
      height: px,
      fontSize: Math.round(px * 0.38),
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials, status && /*#__PURE__*/React.createElement("span", {
    className: "bw-avatar__status",
    style: {
      background: STATUS[status]
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-badge{display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 9px;border-radius:var(--radius-pill);font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;border:1px solid transparent;white-space:nowrap}
.bw-badge--neutral{background:rgba(255,255,255,.06);color:var(--text-secondary);border-color:var(--border-subtle)}
.bw-badge--brand{background:var(--surface-brand-subtle);color:var(--blue-300);border-color:rgba(61,130,255,.3)}
.bw-badge--accent{background:var(--surface-accent-subtle);color:var(--aqua-400);border-color:rgba(33,217,194,.3)}
.bw-badge--success{background:rgba(31,191,117,.13);color:#4bd898;border-color:rgba(31,191,117,.3)}
.bw-badge--warning{background:rgba(255,176,32,.13);color:#ffc65c;border-color:rgba(255,176,32,.3)}
.bw-badge--danger{background:rgba(255,77,94,.13);color:#ff8c97;border-color:rgba(255,77,94,.3)}
.bw-badge__dot{width:5px;height:5px;border-radius:50%;background:currentColor;box-shadow:0 0 8px currentColor}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-badge")) {
  const s = document.createElement("style");
  s.id = "bw-badge";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Badge({
  tone = "neutral",
  dot = false,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["bw-badge", "bw-badge--" + tone, className].filter(Boolean).join(" ")
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "bw-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-btn{--_h:var(--control-h-md);--_px:var(--control-pad-x-md);display:inline-flex;align-items:center;justify-content:center;gap:8px;height:var(--_h);padding:0 var(--_px);border:1px solid transparent;border-radius:var(--radius-pill);font-family:var(--font-sans);font-size:14px;font-weight:var(--weight-semibold);letter-spacing:-0.01em;line-height:1;cursor:pointer;white-space:nowrap;text-decoration:none;transition:var(--transition-control);position:relative;isolation:isolate}
.bw-btn:disabled,.bw-btn[aria-disabled=true]{cursor:not-allowed;opacity:.42;box-shadow:none;transform:none}
.bw-btn:active:not(:disabled){transform:scale(var(--press-scale))}
.bw-btn--sm{--_h:var(--control-h-sm);--_px:var(--control-pad-x-sm);font-size:13px;gap:6px}
.bw-btn--lg{--_h:var(--control-h-lg);--_px:var(--control-pad-x-lg);font-size:15px}
.bw-btn--block{display:flex;width:100%}
.bw-btn--primary{background:var(--gradient-brand);color:var(--text-on-brand);box-shadow:var(--glow-brand-sm)}
.bw-btn--primary:hover:not(:disabled){background:var(--gradient-brand-hover);box-shadow:0 0 0 1px rgba(109,162,255,.5),0 6px 26px rgba(11,92,255,.5);transform:translateY(-1px)}
.bw-btn--primary:active:not(:disabled){transform:scale(var(--press-scale));box-shadow:0 0 0 1px rgba(61,130,255,.4),0 2px 8px rgba(11,92,255,.4)}
.bw-btn--secondary{background:rgba(255,255,255,.06);color:var(--text-primary);border-color:var(--border-default);backdrop-filter:var(--blur-sm)}
.bw-btn--secondary:hover:not(:disabled){background:rgba(255,255,255,.1);border-color:var(--border-strong)}
.bw-btn--outline{background:transparent;color:var(--text-primary);border-color:var(--border-default)}
.bw-btn--outline:hover:not(:disabled){border-color:var(--border-brand);color:var(--text-brand);background:var(--surface-brand-subtle)}
.bw-btn--ghost{background:transparent;color:var(--text-secondary);padding:0 12px}
.bw-btn--ghost:hover:not(:disabled){background:var(--surface-hover);color:var(--text-primary)}
.bw-btn--accent{background:var(--aqua-500);color:#02201c;box-shadow:var(--glow-accent)}
.bw-btn--accent:hover:not(:disabled){background:var(--aqua-400);transform:translateY(-1px)}
.bw-btn--danger{background:var(--red-500);color:#fff}
.bw-btn--danger:hover:not(:disabled){background:#ff6675}
.bw-btn__spin{width:14px;height:14px;border-radius:50%;border:2px solid currentColor;border-top-color:transparent;animation:bw-btn-spin .7s linear infinite}
@keyframes bw-btn-spin{to{transform:rotate(360deg)}}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-btn")) {
  const s = document.createElement("style");
  s.id = "bw-btn";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  loading = false,
  fullWidth = false,
  disabled = false,
  href,
  children,
  className = "",
  ...rest
}) {
  const Tag = href ? "a" : "button";
  const cls = ["bw-btn", "bw-btn--" + variant, size !== "md" && "bw-btn--" + size, fullWidth && "bw-btn--block", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    disabled: Tag === "button" ? disabled || loading : undefined,
    "aria-disabled": disabled || loading || undefined
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    className: "bw-btn__spin"
  }) : iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-card{position:relative;background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:var(--radius-card);padding:var(--card-pad);box-shadow:var(--shadow-sm),var(--edge-top);transition:var(--transition-surface)}
.bw-card--lg{padding:var(--card-pad-lg);border-radius:var(--radius-panel)}
.bw-card--flush{padding:0;overflow:hidden}
.bw-card--glass{background:rgba(255,255,255,.04);backdrop-filter:var(--blur-glass);border-color:var(--border-default)}
.bw-card--outline{background:transparent;box-shadow:none;border-color:var(--border-default)}
.bw-card--interactive{cursor:pointer}
.bw-card--interactive:hover{transform:translateY(var(--hover-lift));border-color:var(--border-default);box-shadow:var(--shadow-lg),var(--edge-top)}
.bw-card--glow::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity var(--dur-base) var(--ease-out-expo);box-shadow:var(--glow-brand-md)}
.bw-card--glow:hover::after{opacity:1}
.bw-card__edge{position:absolute;top:0;left:12%;right:12%;height:1px;background:var(--gradient-edge);pointer-events:none}
.bw-card__head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:14px}
.bw-card__title{font-family:var(--font-display);font-size:var(--h5-size);font-weight:600;letter-spacing:var(--h5-track);color:var(--text-primary)}
.bw-card__sub{margin-top:5px;font-size:var(--body-sm-size);line-height:var(--body-sm-line);color:var(--text-tertiary)}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-card")) {
  const s = document.createElement("style");
  s.id = "bw-card";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Card({
  variant = "default",
  size = "md",
  interactive = false,
  glow = false,
  edge = true,
  title,
  subtitle,
  action,
  children,
  className = "",
  ...rest
}) {
  const cls = ["bw-card", variant !== "default" && "bw-card--" + variant, size === "lg" && "bw-card--lg", interactive && "bw-card--interactive", glow && "bw-card--glow", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), edge && variant !== "outline" && /*#__PURE__*/React.createElement("span", {
    className: "bw-card__edge"
  }), (title || action) && /*#__PURE__*/React.createElement("div", {
    className: "bw-card__head"
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    className: "bw-card__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "bw-card__sub"
  }, subtitle)), action), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-divider{border:0;height:1px;width:100%;background:var(--border-subtle)}
.bw-divider--fade{background:var(--gradient-edge);opacity:.9}
.bw-divider--vertical{width:1px;height:auto;align-self:stretch}
.bw-divider--label{display:flex;align-items:center;gap:14px;background:none;height:auto;color:var(--text-tertiary);font-family:var(--font-mono);font-size:var(--mono-sm-size);letter-spacing:var(--mono-sm-track);text-transform:uppercase}
.bw-divider--label::before,.bw-divider--label::after{content:"";flex:1;height:1px;background:var(--border-subtle)}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-divider")) {
  const s = document.createElement("style");
  s.id = "bw-divider";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Divider({
  orientation = "horizontal",
  fade = false,
  label,
  className = "",
  ...rest
}) {
  if (label) return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-divider bw-divider--label", className].filter(Boolean).join(" ")
  }, rest), label);
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ["bw-divider", fade && "bw-divider--fade", orientation === "vertical" && "bw-divider--vertical", className].filter(Boolean).join(" ")
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = "https://unpkg.com/lucide-static@0.474.0/icons/";
const __css = `.bw-icon{display:inline-block;flex:none;background-color:currentColor;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;vertical-align:-0.125em}`;
if (typeof document !== "undefined" && !document.getElementById("bw-icon")) {
  const s = document.createElement("style");
  s.id = "bw-icon";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Icon({
  name = "arrow-right",
  size = 18,
  strokeWidth,
  basePath = BASE,
  className = "",
  style,
  ...rest
}) {
  const url = basePath + name + ".svg";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "bw-icon " + className,
    role: "img",
    "aria-label": rest["aria-label"] || name.replace(/-/g, " "),
    style: {
      width: size,
      height: size,
      WebkitMaskImage: "url(" + url + ")",
      maskImage: "url(" + url + ")",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-eyebrow{display:inline-flex;align-items:center;gap:7px;height:30px;padding:0 14px 0 11px;border-radius:var(--radius-pill);background:rgba(255,255,255,.05);border:1px solid var(--border-subtle);backdrop-filter:var(--blur-sm);color:var(--text-secondary);font-size:12.5px;font-weight:500;letter-spacing:-0.005em;white-space:nowrap}
.bw-eyebrow__icon{color:var(--blue-300);display:flex}
.bw-eyebrow--accent .bw-eyebrow__icon{color:var(--aqua-400)}
.bw-eyebrow--plain{background:none;border:0;padding:0;height:auto;font-family:var(--font-mono);font-size:var(--mono-sm-size);letter-spacing:var(--mono-sm-track);text-transform:uppercase;color:var(--text-tertiary)}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-eyebrow")) {
  const s = document.createElement("style");
  s.id = "bw-eyebrow";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Eyebrow({
  icon = "sparkles",
  variant = "capsule",
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["bw-eyebrow", variant !== "capsule" && "bw-eyebrow--" + variant, className].filter(Boolean).join(" ")
  }, rest), icon && variant !== "plain" && /*#__PURE__*/React.createElement("span", {
    className: "bw-eyebrow__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  })), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-feature{position:relative;display:flex;flex-direction:column;gap:14px;padding:26px;border-radius:var(--radius-panel);background:var(--surface-card);border:1px solid var(--border-subtle);overflow:hidden;transition:var(--transition-surface);min-height:220px}
.bw-feature::before{content:"";position:absolute;top:0;left:12%;right:12%;height:1px;background:var(--gradient-edge)}
.bw-feature:hover{transform:translateY(var(--hover-lift));border-color:var(--border-default);box-shadow:var(--shadow-lg)}
.bw-feature__icon{width:38px;height:38px;border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;background:var(--surface-brand-subtle);border:1px solid rgba(61,130,255,.25);color:var(--blue-300)}
.bw-feature--accent .bw-feature__icon{background:var(--surface-accent-subtle);border-color:rgba(33,217,194,.25);color:var(--aqua-400)}
.bw-feature__title{font-family:var(--font-display);font-size:var(--h4-size);font-weight:600;letter-spacing:var(--h4-track);color:var(--text-primary)}
.bw-feature__body{font-size:14px;line-height:1.6;color:var(--text-tertiary);max-width:42ch;text-wrap:pretty}
.bw-feature__media{margin:6px -26px -26px;position:relative;min-height:120px}
.bw-feature__media::after{content:"";position:absolute;inset:0;background:var(--gradient-protect-b);opacity:.55;pointer-events:none}
.bw-feature__glow{position:absolute;inset:auto -20% -60% -20%;height:220px;background:radial-gradient(60% 100% at 50% 100%,rgba(11,92,255,.35),transparent 70%);opacity:0;transition:opacity var(--dur-slow) var(--ease-out-expo);pointer-events:none}
.bw-feature:hover .bw-feature__glow{opacity:1}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-feature")) {
  const s = document.createElement("style");
  s.id = "bw-feature";
  s.textContent = __css;
  document.head.appendChild(s);
}
function FeatureCard({
  icon,
  title,
  body,
  tone = "brand",
  media,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-feature", tone !== "brand" && "bw-feature--" + tone, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bw-feature__glow"
  }), icon && /*#__PURE__*/React.createElement("span", {
    className: "bw-feature__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 19
  })), title && /*#__PURE__*/React.createElement("div", {
    className: "bw-feature__title"
  }, title), body && /*#__PURE__*/React.createElement("p", {
    className: "bw-feature__body"
  }, body), children, media && /*#__PURE__*/React.createElement("div", {
    className: "bw-feature__media"
  }, media));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-iconbtn{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:var(--radius-control);border:1px solid transparent;background:transparent;color:var(--text-secondary);cursor:pointer;transition:var(--transition-control)}
.bw-iconbtn:hover:not(:disabled){background:var(--surface-hover);color:var(--text-primary)}
.bw-iconbtn:active:not(:disabled){transform:scale(var(--press-scale))}
.bw-iconbtn:disabled{opacity:.4;cursor:not-allowed}
.bw-iconbtn--sm{width:28px;height:28px;border-radius:var(--radius-xs)}
.bw-iconbtn--lg{width:44px;height:44px}
.bw-iconbtn--outline{border-color:var(--border-default)}
.bw-iconbtn--outline:hover:not(:disabled){border-color:var(--border-strong)}
.bw-iconbtn--solid{background:var(--gradient-brand);color:#fff;box-shadow:var(--glow-brand-sm)}
.bw-iconbtn--solid:hover:not(:disabled){background:var(--gradient-brand-hover)}
.bw-iconbtn--round{border-radius:var(--radius-pill)}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-iconbtn")) {
  const s = document.createElement("style");
  s.id = "bw-iconbtn";
  s.textContent = __css;
  document.head.appendChild(s);
}
function IconButton({
  icon = "settings",
  size = "md",
  variant = "ghost",
  round = false,
  label,
  className = "",
  ...rest
}) {
  const cls = ["bw-iconbtn", "bw-iconbtn--" + variant, size !== "md" && "bw-iconbtn--" + size, round && "bw-iconbtn--round", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label || icon
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 15 : size === "lg" ? 20 : 17
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-tag{display:inline-flex;align-items:center;gap:7px;height:28px;padding:0 12px;border-radius:var(--radius-pill);background:rgba(255,255,255,.05);border:1px solid var(--border-subtle);color:var(--text-secondary);font-size:13px;font-weight:500;letter-spacing:-0.005em;transition:var(--transition-control)}
.bw-tag--interactive{cursor:pointer}
.bw-tag--interactive:hover{background:rgba(255,255,255,.09);color:var(--text-primary);border-color:var(--border-default)}
.bw-tag--selected{background:var(--surface-brand-subtle);border-color:var(--border-brand);color:var(--blue-200)}
.bw-tag__x{display:inline-flex;opacity:.55;cursor:pointer;transition:opacity var(--dur-fast)}
.bw-tag__x:hover{opacity:1}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-tag")) {
  const s = document.createElement("style");
  s.id = "bw-tag";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Tag({
  selected = false,
  onRemove,
  onClick,
  icon,
  children,
  className = "",
  ...rest
}) {
  const interactive = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["bw-tag", interactive && "bw-tag--interactive", selected && "bw-tag--selected", className].filter(Boolean).join(" "),
    onClick: onClick
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "bw-tag__x",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/ActivityItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-activity{display:flex;align-items:center;gap:12px;padding:11px 4px;border-bottom:1px solid var(--border-subtle);transition:background var(--dur-fast)}
.bw-activity:last-child{border-bottom:0}
.bw-activity:hover{background:var(--surface-hover)}
.bw-activity__body{flex:1;min-width:0}
.bw-activity__text{font-size:13.5px;color:var(--text-secondary);letter-spacing:-0.005em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.bw-activity__text b{color:var(--text-primary);font-weight:600}
.bw-activity__meta{margin-top:2px;font-family:var(--font-mono);font-size:11px;color:var(--text-disabled)}
.bw-activity__time{font-family:var(--font-mono);font-size:11px;color:var(--text-disabled);white-space:nowrap;flex:none}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-activity")) {
  const s = document.createElement("style");
  s.id = "bw-activity";
  s.textContent = __css;
  document.head.appendChild(s);
}
function ActivityItem({
  actor,
  avatarSrc,
  action,
  target,
  meta,
  time,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-activity", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: actor,
    src: avatarSrc,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bw-activity__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-activity__text"
  }, /*#__PURE__*/React.createElement("b", null, actor), " ", action, " ", /*#__PURE__*/React.createElement("b", null, target)), meta && /*#__PURE__*/React.createElement("div", {
    className: "bw-activity__meta"
  }, meta)), /*#__PURE__*/React.createElement("span", {
    className: "bw-activity__time"
  }, time));
}
Object.assign(__ds_scope, { ActivityItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ActivityItem.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-bar{width:100%}
.bw-bar__plot{display:flex;align-items:flex-end;gap:var(--_gap,8px);height:var(--_h,190px);position:relative;padding-top:8px}
.bw-bar__col{flex:1;display:flex;flex-direction:column;align-items:center;gap:9px;height:100%;justify-content:flex-end;position:relative}
.bw-bar__stem{width:100%;max-width:22px;border-radius:5px 5px 3px 3px;background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.06));transition:height var(--dur-slower) var(--ease-out-expo),background var(--dur-quick),box-shadow var(--dur-quick)}
.bw-bar__col:hover .bw-bar__stem{background:linear-gradient(180deg,rgba(255,255,255,.24),rgba(255,255,255,.1))}
.bw-bar__col--active .bw-bar__stem{background:linear-gradient(180deg,var(--blue-400),var(--blue-600));box-shadow:0 0 26px rgba(11,92,255,.6)}
.bw-bar__col--accent .bw-bar__stem{background:linear-gradient(180deg,var(--aqua-400),var(--aqua-600));box-shadow:var(--glow-accent)}
.bw-bar__x{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.04em;color:var(--text-disabled);white-space:nowrap}
.bw-bar__flag{position:absolute;top:-6px;transform:translateY(-100%);padding:3px 8px;border-radius:var(--radius-pill);background:var(--blue-500);color:#fff;font-family:var(--font-mono);font-size:10.5px;white-space:nowrap;box-shadow:var(--glow-brand-sm)}
.bw-bar__grid{position:absolute;left:0;right:0;height:1px;background:var(--border-subtle)}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-bar")) {
  const s = document.createElement("style");
  s.id = "bw-bar";
  s.textContent = __css;
  document.head.appendChild(s);
}
function BarChart({
  data = [],
  height = 190,
  gap = 8,
  activeIndex,
  gridLines = 4,
  className = "",
  style,
  ...rest
}) {
  const max = Math.max(1, ...data.map(d => typeof d === "number" ? d : d.value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-bar", className].filter(Boolean).join(" "),
    style: {
      "--_h": height + "px",
      "--_gap": gap + "px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bw-bar__plot"
  }, Array.from({
    length: gridLines
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: "g" + i,
    className: "bw-bar__grid",
    style: {
      bottom: (i + 1) / (gridLines + 1) * 100 + "%"
    }
  })), data.map((d, i) => {
    const item = typeof d === "number" ? {
      value: d
    } : d;
    const active = activeIndex === i || item.active;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: ["bw-bar__col", active && "bw-bar__col--active", item.tone === "accent" && "bw-bar__col--accent"].filter(Boolean).join(" ")
    }, active && item.flag && /*#__PURE__*/React.createElement("span", {
      className: "bw-bar__flag"
    }, item.flag), /*#__PURE__*/React.createElement("span", {
      className: "bw-bar__stem",
      style: {
        height: Math.max(3, item.value / max * 100) + "%"
      }
    }), item.label && /*#__PURE__*/React.createElement("span", {
      className: "bw-bar__x"
    }, item.label));
  })));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-table{width:100%;border-collapse:separate;border-spacing:0;font-size:13.5px}
.bw-table thead th{text-align:left;padding:10px 16px;font-family:var(--font-mono);font-size:var(--mono-sm-size);letter-spacing:var(--mono-sm-track);text-transform:uppercase;color:var(--text-disabled);font-weight:500;border-bottom:1px solid var(--border-subtle);white-space:nowrap;background:rgba(255,255,255,.02)}
.bw-table thead th.bw-table--num{text-align:right}
.bw-table tbody td{padding:13px 16px;border-bottom:1px solid var(--border-subtle);color:var(--text-secondary);letter-spacing:-0.005em;vertical-align:middle}
.bw-table tbody td.bw-table--num{text-align:right;font-family:var(--font-mono);font-variant-numeric:tabular-nums;color:var(--text-primary)}
.bw-table tbody tr{transition:background var(--dur-fast) var(--ease-standard)}
.bw-table tbody tr:hover{background:var(--surface-hover)}
.bw-table tbody tr:last-child td{border-bottom:0}
.bw-table--clickable tbody tr{cursor:pointer}
.bw-table__primary{color:var(--text-primary);font-weight:500}
.bw-table__sort{display:inline-flex;align-items:center;gap:4px;cursor:pointer}
.bw-table__sort:hover{color:var(--text-secondary)}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-table")) {
  const s = document.createElement("style");
  s.id = "bw-table";
  s.textContent = __css;
  document.head.appendChild(s);
}
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("table", _extends({
    className: ["bw-table", onRowClick && "bw-table--clickable", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: c.align === "right" ? "bw-table--num" : undefined,
    style: c.width ? {
      width: c.width
    } : undefined
  }, c.sortable ? /*#__PURE__*/React.createElement("span", {
    className: "bw-table__sort"
  }, c.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 12
  })) : c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id || i,
    onClick: () => onRowClick && onRowClick(r)
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: [c.align === "right" && "bw-table--num", ci === 0 && "bw-table__primary"].filter(Boolean).join(" ") || undefined
  }, c.render ? c.render(r) : r[c.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-stat{position:relative;display:flex;flex-direction:column;gap:14px;padding:18px 20px;border-radius:var(--radius-card);background:var(--surface-card);border:1px solid var(--border-subtle);box-shadow:var(--shadow-sm),var(--edge-top);overflow:hidden;transition:var(--transition-surface)}
.bw-stat::after{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(120% 90% at 50% 0%,rgba(11,92,255,.16),transparent 62%);opacity:.9}
.bw-stat--accent::after{background:radial-gradient(120% 90% at 50% 0%,rgba(33,217,194,.15),transparent 62%)}
.bw-stat--plain::after{display:none}
.bw-stat__top{display:flex;align-items:center;justify-content:space-between;gap:10px;position:relative;z-index:1}
.bw-stat__chip{width:30px;height:30px;border-radius:var(--radius-xs);display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.06);border:1px solid var(--border-subtle);color:var(--text-secondary)}
.bw-stat__link{font-size:12px;color:var(--text-tertiary);display:inline-flex;align-items:center;gap:4px;cursor:pointer;transition:color var(--dur-fast)}
.bw-stat__link:hover{color:var(--text-primary)}
.bw-stat__value{position:relative;z-index:1;font-family:var(--font-display);font-size:38px;font-weight:600;letter-spacing:-0.04em;line-height:1;color:var(--text-primary);font-variant-numeric:tabular-nums}
.bw-stat__label{position:relative;z-index:1;font-size:12.5px;color:var(--text-tertiary);letter-spacing:-0.005em}
.bw-stat__delta{display:inline-flex;align-items:center;gap:3px;font-family:var(--font-mono);font-size:11.5px;margin-left:8px;vertical-align:middle}
.bw-stat__delta--up{color:#4bd898}
.bw-stat__delta--down{color:#ff8c97}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-stat")) {
  const s = document.createElement("style");
  s.id = "bw-stat";
  s.textContent = __css;
  document.head.appendChild(s);
}
function StatCard({
  value,
  label,
  icon,
  delta,
  tone = "brand",
  action,
  className = "",
  ...rest
}) {
  const dir = delta && String(delta).trim().startsWith("-") ? "down" : "up";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-stat", tone !== "brand" && "bw-stat--" + tone, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bw-stat__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bw-stat__chip"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || "chart-line",
    size: 16
  })), action && /*#__PURE__*/React.createElement("span", {
    className: "bw-stat__link"
  }, action, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 12
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bw-stat__value"
  }, value, delta && /*#__PURE__*/React.createElement("span", {
    className: "bw-stat__delta bw-stat__delta--" + dir
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: dir === "up" ? "arrow-up-right" : "arrow-right",
    size: 11
  }), delta)), /*#__PURE__*/React.createElement("div", {
    className: "bw-stat__label",
    style: {
      marginTop: 8
    }
  }, label)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-dialog__scrim{position:fixed;inset:0;z-index:100;background:var(--surface-scrim);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:24px;animation:bw-fade var(--dur-quick) var(--ease-out-expo)}
.bw-dialog{width:100%;max-width:480px;background:var(--surface-card);border:1px solid var(--border-default);border-radius:var(--radius-panel);box-shadow:var(--shadow-xl);position:relative;overflow:hidden;animation:bw-dialog-in var(--dur-base) var(--ease-out-expo)}
.bw-dialog--lg{max-width:720px}
.bw-dialog__edge{position:absolute;top:0;left:10%;right:10%;height:1px;background:var(--gradient-edge)}
.bw-dialog__head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:24px 24px 0}
.bw-dialog__title{font-family:var(--font-display);font-size:var(--h3-size);font-weight:600;letter-spacing:var(--h3-track);color:var(--text-primary)}
.bw-dialog__desc{margin-top:8px;font-size:14px;line-height:1.55;color:var(--text-secondary);max-width:46ch}
.bw-dialog__body{padding:20px 24px}
.bw-dialog__foot{display:flex;align-items:center;justify-content:flex-end;gap:10px;padding:16px 24px;border-top:1px solid var(--border-subtle);background:rgba(255,255,255,.02)}
@keyframes bw-fade{from{opacity:0}to{opacity:1}}
@keyframes bw-dialog-in{from{opacity:0;transform:translateY(16px) scale(.97)}to{opacity:1;transform:none}}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-dialog")) {
  const s = document.createElement("style");
  s.id = "bw-dialog";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Dialog({
  open = true,
  title,
  description,
  size = "md",
  footer,
  onClose,
  children,
  className = "",
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "bw-dialog__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-dialog", size === "lg" && "bw-dialog--lg", className].filter(Boolean).join(" "),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bw-dialog__edge"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bw-dialog__head"
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    className: "bw-dialog__title"
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "bw-dialog__desc"
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    size: "sm",
    label: "Close",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    className: "bw-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "bw-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-prog{width:100%}
.bw-prog__head{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:7px}
.bw-prog__label{font-size:13px;color:var(--text-secondary);letter-spacing:-0.005em}
.bw-prog__val{font-family:var(--font-mono);font-size:12px;color:var(--text-tertiary)}
.bw-prog__track{height:6px;width:100%;border-radius:var(--radius-pill);background:rgba(255,255,255,.07);overflow:hidden}
.bw-prog--thin .bw-prog__track{height:3px}
.bw-prog__fill{height:100%;border-radius:var(--radius-pill);background:var(--gradient-brand);transition:width var(--dur-slow) var(--ease-out-expo)}
.bw-prog--accent .bw-prog__fill{background:linear-gradient(90deg,var(--aqua-600),var(--aqua-400));box-shadow:var(--glow-accent)}
.bw-prog--warning .bw-prog__fill{background:linear-gradient(90deg,#e08c00,var(--amber-500))}
.bw-prog--danger .bw-prog__fill{background:linear-gradient(90deg,#d63b4a,var(--red-500))}
.bw-prog--indeterminate .bw-prog__fill{width:38%!important;animation:bw-prog-run 1.4s var(--ease-in-out-quint) infinite}
@keyframes bw-prog-run{0%{transform:translateX(-110%)}100%{transform:translateX(300%)}}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-prog")) {
  const s = document.createElement("style");
  s.id = "bw-prog";
  s.textContent = __css;
  document.head.appendChild(s);
}
function ProgressBar({
  value = 0,
  label,
  showValue = true,
  tone = "brand",
  thin = false,
  indeterminate = false,
  className = "",
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-prog", tone !== "brand" && "bw-prog--" + tone, thin && "bw-prog--thin", indeterminate && "bw-prog--indeterminate", className].filter(Boolean).join(" ")
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "bw-prog__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bw-prog__label"
  }, label), showValue && !indeterminate && /*#__PURE__*/React.createElement("span", {
    className: "bw-prog__val"
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    className: "bw-prog__track",
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : pct
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-prog__fill",
    style: {
      width: pct + "%"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-skel{display:block;border-radius:var(--radius-xs);background:linear-gradient(90deg,rgba(255,255,255,.045) 25%,rgba(255,255,255,.09) 37%,rgba(255,255,255,.045) 63%);background-size:400% 100%;animation:bw-skel-shimmer 1.6s var(--ease-in-out-quint) infinite}
.bw-skel--circle{border-radius:50%}
.bw-skel--text{height:11px;border-radius:var(--radius-pill)}
@keyframes bw-skel-shimmer{0%{background-position:100% 50%}100%{background-position:0 50%}}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-skel")) {
  const s = document.createElement("style");
  s.id = "bw-skel";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Skeleton({
  width = "100%",
  height,
  shape = "block",
  lines = 1,
  className = "",
  style,
  ...rest
}) {
  if (shape === "text" && lines > 1) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 9
      }
    }, Array.from({
      length: lines
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "bw-skel bw-skel--text",
      style: {
        width: i === lines - 1 ? "62%" : "100%"
      }
    })));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["bw-skel", shape !== "block" && "bw-skel--" + shape, className].filter(Boolean).join(" "),
    style: {
      width,
      height: height || (shape === "text" ? 11 : 60),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-toast{display:flex;align-items:flex-start;gap:12px;width:100%;max-width:400px;padding:14px 14px 14px 16px;border-radius:var(--radius-card);background:rgba(14,19,31,.9);backdrop-filter:var(--blur-glass);border:1px solid var(--border-default);box-shadow:var(--shadow-lg);animation:bw-toast-in var(--dur-base) var(--ease-out-expo);position:relative;overflow:hidden}
.bw-toast::before{content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--_tone,var(--blue-500));box-shadow:0 0 14px var(--_tone,var(--blue-500))}
.bw-toast__icon{display:flex;color:var(--_tone,var(--blue-400));margin-top:1px}
.bw-toast__title{font-size:14px;font-weight:600;color:var(--text-primary);letter-spacing:-0.01em}
.bw-toast__msg{margin-top:3px;font-size:13px;line-height:1.5;color:var(--text-secondary)}
@keyframes bw-toast-in{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:none}}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-toast")) {
  const s = document.createElement("style");
  s.id = "bw-toast";
  s.textContent = __css;
  document.head.appendChild(s);
}
const TONE = {
  info: ["var(--blue-500)", "info"],
  success: ["var(--green-500)", "circle-check"],
  warning: ["var(--amber-500)", "triangle-alert"],
  danger: ["var(--red-500)", "circle-alert"]
};
function Toast({
  tone = "info",
  title,
  children,
  onClose,
  className = "",
  style,
  ...rest
}) {
  const [color, icon] = TONE[tone] || TONE.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-toast", className].filter(Boolean).join(" "),
    role: "status",
    style: {
      "--_tone": color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bw-toast__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "bw-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "bw-toast__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    size: "sm",
    label: "Dismiss",
    onClick: onClose
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-tip{position:relative;display:inline-flex}
.bw-tip__bubble{position:absolute;z-index:60;pointer-events:none;opacity:0;transform:translateY(4px);transition:opacity var(--dur-fast) var(--ease-standard),transform var(--dur-quick) var(--ease-out-expo);background:var(--ink-700);color:var(--text-primary);border:1px solid var(--border-default);border-radius:var(--radius-xs);padding:6px 10px;font-size:12.5px;line-height:1.4;white-space:nowrap;box-shadow:var(--shadow-md)}
.bw-tip:hover .bw-tip__bubble,.bw-tip:focus-within .bw-tip__bubble{opacity:1;transform:none}
.bw-tip__bubble--top{bottom:calc(100% + 8px);left:50%;margin-left:-50%;transform:translateY(4px);display:flex;justify-content:center}
.bw-tip__bubble--bottom{top:calc(100% + 8px);left:50%;transform:translate(-50%,4px)}
.bw-tip:hover .bw-tip__bubble--bottom{transform:translate(-50%,0)}
.bw-tip__bubble--right{left:calc(100% + 8px);top:50%;transform:translate(0,calc(-50% + 4px))}
.bw-tip:hover .bw-tip__bubble--right{transform:translate(0,-50%)}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-tip")) {
  const s = document.createElement("style");
  s.id = "bw-tip";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Tooltip({
  label,
  side = "top",
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["bw-tip", className].filter(Boolean).join(" ")
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "bw-tip__bubble bw-tip__bubble--" + side,
    style: side === "top" ? {
      bottom: "calc(100% + 8px)",
      left: "50%",
      marginLeft: 0,
      transform: "translateX(-50%)"
    } : undefined,
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-check{display:inline-flex;align-items:flex-start;gap:10px;cursor:pointer;font-size:14px;color:var(--text-secondary);letter-spacing:-0.005em;user-select:none}
.bw-check input{position:absolute;opacity:0;width:0;height:0}
.bw-check__box{width:18px;height:18px;flex:none;margin-top:1px;border-radius:5px;border:1px solid var(--border-strong);background:var(--surface-inset);display:flex;align-items:center;justify-content:center;color:#fff;transition:var(--transition-control)}
.bw-check:hover .bw-check__box{border-color:var(--border-brand)}
.bw-check input:checked+.bw-check__box{background:var(--gradient-brand);border-color:transparent;box-shadow:var(--glow-brand-sm)}
.bw-check input:focus-visible+.bw-check__box{box-shadow:0 0 0 3px rgba(11,92,255,.28)}
.bw-check__box>*{opacity:0;transform:scale(.6);transition:opacity var(--dur-fast),transform var(--dur-quick) var(--ease-spring)}
.bw-check input:checked+.bw-check__box>*{opacity:1;transform:scale(1)}
.bw-check--disabled{opacity:.45;cursor:not-allowed}
.bw-check__desc{display:block;margin-top:3px;font-size:12.5px;color:var(--text-tertiary)}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-check")) {
  const s = document.createElement("style");
  s.id = "bw-check";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  description,
  indeterminate = false,
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["bw-check", disabled && "bw-check--disabled", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "bw-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: indeterminate ? "minus" : "check",
    size: 13
  })), label && /*#__PURE__*/React.createElement("span", null, label, description && /*#__PURE__*/React.createElement("span", {
    className: "bw-check__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-field{display:flex;flex-direction:column;gap:7px;width:100%}
.bw-field__label{font-size:13px;font-weight:500;color:var(--text-secondary);letter-spacing:-0.005em;display:flex;align-items:center;gap:6px}
.bw-field__req{color:var(--blue-400)}
.bw-field__hint{font-size:12px;line-height:1.45;color:var(--text-tertiary)}
.bw-field__err{font-size:12px;line-height:1.45;color:#ff8c97;display:flex;align-items:center;gap:5px}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-field")) {
  const s = document.createElement("style");
  s.id = "bw-field";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-field", className].filter(Boolean).join(" ")
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "bw-field__label",
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "bw-field__req"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "bw-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "bw-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-inputwrap{position:relative;display:flex;align-items:center;width:100%}
.bw-input{width:100%;height:var(--control-h-md);padding:0 14px;background:var(--surface-inset);border:1px solid var(--border-default);border-radius:var(--radius-control);color:var(--text-primary);font-family:var(--font-sans);font-size:14px;letter-spacing:-0.005em;transition:var(--transition-control);outline:none}
.bw-input::placeholder{color:var(--text-disabled)}
.bw-input:hover:not(:disabled){border-color:var(--border-strong)}
.bw-input:focus{border-color:var(--border-brand);box-shadow:0 0 0 3px rgba(11,92,255,.18)}
.bw-input:disabled{opacity:.5;cursor:not-allowed}
.bw-input--sm{height:var(--control-h-sm);font-size:13px;padding:0 11px}
.bw-input--lg{height:var(--control-h-lg);font-size:15px;padding:0 18px}
.bw-input--pill{border-radius:var(--radius-pill);padding-left:18px}
.bw-input--err{border-color:rgba(255,77,94,.6)}
.bw-input--err:focus{box-shadow:0 0 0 3px rgba(255,77,94,.18)}
.bw-input--icon{padding-left:40px}
.bw-input--icon.bw-input--pill{padding-left:44px}
.bw-inputwrap__icon{position:absolute;left:14px;color:var(--text-tertiary);pointer-events:none;display:flex}
.bw-inputwrap--pill .bw-inputwrap__icon{left:18px}
.bw-inputwrap__suffix{position:absolute;right:6px;display:flex;align-items:center;gap:6px}
.bw-textarea{min-height:110px;height:auto;padding:12px 14px;line-height:1.55;resize:vertical}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-input")) {
  const s = document.createElement("style");
  s.id = "bw-input";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Input({
  size = "md",
  icon,
  suffix,
  error = false,
  pill = false,
  className = "",
  ...rest
}) {
  const cls = ["bw-input", size !== "md" && "bw-input--" + size, icon && "bw-input--icon", pill && "bw-input--pill", error && "bw-input--err", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: "bw-inputwrap" + (pill ? " bw-inputwrap--pill" : "")
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "bw-inputwrap__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    className: cls
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "bw-inputwrap__suffix"
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-radiogroup{display:flex;flex-direction:column;gap:12px}
.bw-radiogroup--row{flex-direction:row;gap:22px}
.bw-radio{display:inline-flex;align-items:flex-start;gap:10px;cursor:pointer;font-size:14px;color:var(--text-secondary);letter-spacing:-0.005em;user-select:none}
.bw-radio input{position:absolute;opacity:0;width:0;height:0}
.bw-radio__dot{width:18px;height:18px;flex:none;margin-top:1px;border-radius:50%;border:1px solid var(--border-strong);background:var(--surface-inset);display:flex;align-items:center;justify-content:center;transition:var(--transition-control)}
.bw-radio__dot::after{content:"";width:8px;height:8px;border-radius:50%;background:#fff;transform:scale(0);transition:transform var(--dur-quick) var(--ease-spring)}
.bw-radio:hover .bw-radio__dot{border-color:var(--border-brand)}
.bw-radio input:checked+.bw-radio__dot{background:var(--gradient-brand);border-color:transparent;box-shadow:var(--glow-brand-sm)}
.bw-radio input:checked+.bw-radio__dot::after{transform:scale(1)}
.bw-radio__desc{display:block;margin-top:3px;font-size:12.5px;color:var(--text-tertiary)}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-radio")) {
  const s = document.createElement("style");
  s.id = "bw-radio";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Radio({
  options = [],
  name,
  value,
  onChange,
  row = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-radiogroup", row && "bw-radiogroup--row", className].filter(Boolean).join(" "),
    role: "radiogroup"
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("label", {
      className: "bw-radio",
      key: opt.value
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: opt.value,
      checked: value === undefined ? undefined : value === opt.value,
      onChange: onChange
    }), /*#__PURE__*/React.createElement("span", {
      className: "bw-radio__dot"
    }), /*#__PURE__*/React.createElement("span", null, opt.label, opt.description && /*#__PURE__*/React.createElement("span", {
      className: "bw-radio__desc"
    }, opt.description)));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-selectwrap{position:relative;display:inline-flex;align-items:center;width:100%}
.bw-select{appearance:none;width:100%;height:var(--control-h-md);padding:0 38px 0 14px;background:var(--surface-inset);border:1px solid var(--border-default);border-radius:var(--radius-control);color:var(--text-primary);font-family:var(--font-sans);font-size:14px;cursor:pointer;transition:var(--transition-control);outline:none}
.bw-select:hover:not(:disabled){border-color:var(--border-strong)}
.bw-select:focus{border-color:var(--border-brand);box-shadow:0 0 0 3px rgba(11,92,255,.18)}
.bw-select:disabled{opacity:.5;cursor:not-allowed}
.bw-select--sm{height:var(--control-h-sm);font-size:13px;padding:0 32px 0 11px}
.bw-select option{background:var(--ink-850);color:var(--text-primary)}
.bw-selectwrap__chev{position:absolute;right:12px;color:var(--text-tertiary);pointer-events:none;display:flex}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-select")) {
  const s = document.createElement("style");
  s.id = "bw-select";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Select({
  options = [],
  size = "md",
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "bw-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ["bw-select", size !== "md" && "bw-select--" + size, className].filter(Boolean).join(" ")
  }, rest), children || options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "bw-selectwrap__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-switch{display:inline-flex;align-items:center;gap:11px;cursor:pointer;font-size:14px;color:var(--text-secondary);user-select:none}
.bw-switch input{position:absolute;opacity:0;width:0;height:0}
.bw-switch__track{width:40px;height:23px;flex:none;border-radius:var(--radius-pill);background:var(--ink-600);border:1px solid var(--border-default);position:relative;transition:background var(--dur-quick) var(--ease-out-expo),box-shadow var(--dur-quick)}
.bw-switch__track::after{content:"";position:absolute;top:2px;left:2px;width:17px;height:17px;border-radius:50%;background:#fff;transition:transform var(--dur-quick) var(--ease-out-expo);box-shadow:0 1px 3px rgba(0,0,0,.5)}
.bw-switch input:checked+.bw-switch__track{background:var(--gradient-brand);border-color:transparent;box-shadow:var(--glow-brand-sm)}
.bw-switch input:checked+.bw-switch__track::after{transform:translateX(17px)}
.bw-switch input:focus-visible+.bw-switch__track{box-shadow:0 0 0 3px rgba(11,92,255,.28)}
.bw-switch--sm .bw-switch__track{width:32px;height:19px}
.bw-switch--sm .bw-switch__track::after{width:13px;height:13px}
.bw-switch--sm input:checked+.bw-switch__track::after{transform:translateX(13px)}
.bw-switch--disabled{opacity:.45;cursor:not-allowed}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-switch")) {
  const s = document.createElement("style");
  s.id = "bw-switch";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Switch({
  label,
  size = "md",
  disabled = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["bw-switch", size === "sm" && "bw-switch--sm", disabled && "bw-switch--disabled", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "bw-switch__track"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `.bw-ta{width:100%;min-height:110px;padding:12px 14px;background:var(--surface-inset);border:1px solid var(--border-default);border-radius:var(--radius-control);color:var(--text-primary);font-family:var(--font-sans);font-size:14px;line-height:1.55;transition:var(--transition-control);outline:none;resize:vertical}
.bw-ta::placeholder{color:var(--text-disabled)}
.bw-ta:hover:not(:disabled){border-color:var(--border-strong)}
.bw-ta:focus{border-color:var(--border-brand);box-shadow:0 0 0 3px rgba(11,92,255,.18)}
.bw-ta:disabled{opacity:.5;cursor:not-allowed}`;
if (typeof document !== "undefined" && !document.getElementById("bw-textarea")) {
  const s = document.createElement("style");
  s.id = "bw-textarea";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Textarea({
  rows = 4,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ["bw-ta", className].filter(Boolean).join(" "),
    rows: rows
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/motion/BeamCanvas.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VERT = `attribute vec2 a_pos;void main(){gl_Position=vec4(a_pos,0.0,1.0);}`;
const FRAG = `precision highp float;
uniform vec2 u_res;uniform float u_time;uniform float u_intensity;uniform vec2 u_mouse;uniform float u_hue;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),f.x),mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),f.x),f.y);}
float fbm(vec2 p){float v=0.0,a=0.5;for(int i=0;i<5;i++){v+=a*noise(p);p*=2.02;a*=0.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/u_res.xy;
  vec2 p=(gl_FragCoord.xy-0.5*u_res.xy)/u_res.y;
  float t=u_time*0.08;
  vec3 col=vec3(0.016,0.024,0.047);
  col+=vec3(0.030,0.105,0.345)*smoothstep(1.05,0.0,length(p*vec2(0.68,1.35)+vec2(0.0,0.55)));
  float n=fbm(p*1.6+vec2(t*1.2,-t*0.7));
  float band=smoothstep(0.34,0.95,n)*smoothstep(0.95,0.05,uv.y);
  col+=mix(vec3(0.04,0.24,0.85),vec3(0.13,0.72,0.70),clamp(n+u_hue,0.0,1.0))*band*0.48;
  float x=abs(p.x+(u_mouse.x-0.5)*0.09);
  float core=exp(-x*x*900.0);
  float halo=exp(-x*x*26.0);
  float vert=smoothstep(0.0,0.34,uv.y)*smoothstep(1.02,0.5,uv.y);
  float flick=0.86+0.14*sin(u_time*1.6)+0.07*noise(vec2(u_time*0.9,0.0));
  col+=(vec3(0.78,0.87,1.0)*core*1.7+vec3(0.16,0.42,1.0)*halo*0.55)*vert*flick*u_intensity;
  vec2 sp=gl_FragCoord.xy/max(u_res.y,1.0)*62.0;
  vec2 si=floor(sp);
  float star=hash(si);
  if(star>0.9855){
    float d=length(fract(sp)-0.5);
    float tw=0.55+0.45*sin(u_time*2.0+star*40.0);
    col+=vec3(0.72,0.83,1.0)*smoothstep(0.34,0.0,d)*0.6*tw;
  }
  col*=1.0-0.52*pow(length(p*vec2(0.55,0.8)),2.2);
  col+=(hash(gl_FragCoord.xy+u_time)-0.5)*0.018;
  gl_FragColor=vec4(col,1.0);
}`;
function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.warn("BeamCanvas shader:", gl.getShaderInfoLog(s));
    return null;
  }
  return s;
}
function BeamCanvas({
  intensity = 1,
  speed = 1,
  hueShift = 0,
  interactive = true,
  className = "",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      powerPreference: "high-performance"
    });
    if (!gl) {
      setFailed(true);
      return;
    }
    const prog = gl.createProgram();
    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) {
      setFailed(true);
      return;
    }
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uInt = gl.getUniformLocation(prog, "u_intensity");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uHue = gl.getUniformLocation(prog, "u_hue");
    const mouse = {
      x: 0.5,
      y: 0.5
    };
    const target = {
      x: 0.5,
      y: 0.5
    };
    const onMove = e => {
      const r = canvas.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width;
      target.y = (e.clientY - r.top) / r.height;
    };
    if (interactive) window.addEventListener("pointermove", onMove, {
      passive: true
    });
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0,
      running = true;
    const start = performance.now();
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting;
      if (running && !reduced) raf = requestAnimationFrame(frame);
    });
    io.observe(canvas);
    function frame(now) {
      resize();
      mouse.x += (target.x - mouse.x) * 0.05;
      mouse.y += (target.y - mouse.y) * 0.05;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, reduced ? 6 : (now - start) / 1000 * speed);
      gl.uniform1f(uInt, intensity);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uHue, hueShift);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (running && !reduced) raf = requestAnimationFrame(frame);
    }
    frame(performance.now());
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      if (interactive) window.removeEventListener("pointermove", onMove);
    };
  }, [intensity, speed, hueShift, interactive]);
  if (failed) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: className,
      style: {
        background: "var(--gradient-canvas)",
        ...style
      },
      "aria-hidden": "true"
    }, rest));
  }
  return /*#__PURE__*/React.createElement("canvas", _extends({
    ref: ref,
    className: className,
    "aria-hidden": "true",
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { BeamCanvas });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/BeamCanvas.jsx", error: String((e && e.message) || e) }); }

// components/motion/ParallaxLayer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ParallaxLayer({
  depth = 0.12,
  axis = "y",
  children,
  className = "",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      const d = -p * depth * 100;
      el.style.transform = axis === "x" ? "translate3d(" + d + "px,0,0)" : "translate3d(0," + d + "px,0)";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [depth, axis]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: className,
    style: {
      willChange: "transform",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ParallaxLayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/ParallaxLayer.jsx", error: String((e && e.message) || e) }); }

// components/motion/ScrollReveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-reveal{opacity:0;transform:translateY(var(--reveal-y)) scale(var(--_s,1));transition:opacity var(--dur-slow) var(--ease-out-expo),transform var(--dur-slow) var(--ease-out-expo);transition-delay:var(--_d,0ms);will-change:opacity,transform}
.bw-reveal--in{opacity:1;transform:none}
.bw-reveal--left{transform:translateX(calc(var(--reveal-y) * -1.4))}
.bw-reveal--right{transform:translateX(calc(var(--reveal-y) * 1.4))}
.bw-reveal--scale{transform:translateY(var(--reveal-y)) scale(.965)}
.bw-reveal--blur{filter:blur(10px);transition:opacity var(--dur-slow) var(--ease-out-expo),transform var(--dur-slow) var(--ease-out-expo),filter var(--dur-slow) var(--ease-out-expo)}
.bw-reveal--blur.bw-reveal--in{filter:none}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-reveal")) {
  const s = document.createElement("style");
  s.id = "bw-reveal";
  s.textContent = __css;
  document.head.appendChild(s);
}
function ScrollReveal({
  as: Tag = "div",
  from = "up",
  delay = 0,
  stagger,
  threshold = 0.16,
  once = true,
  children,
  className = "",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true);
        if (once) io.disconnect();
      } else if (!once) setSeen(false);
    }, {
      threshold,
      rootMargin: "0px 0px -8% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);
  const kids = stagger != null && React.Children.count(children) > 1 ? React.Children.map(children, (c, i) => React.isValidElement(c) ? React.cloneElement(c, {
    style: {
      ...(c.props.style || {}),
      transitionDelay: delay + i * stagger + "ms"
    },
    className: [c.props.className, "bw-reveal", seen && "bw-reveal--in"].filter(Boolean).join(" ")
  }) : c) : children;
  const self = stagger != null ? "" : ["bw-reveal", from !== "up" && "bw-reveal--" + from, seen && "bw-reveal--in"].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: [self, className].filter(Boolean).join(" "),
    style: {
      "--_d": delay + "ms",
      ...style
    }
  }, rest), kids);
}
Object.assign(__ds_scope, { ScrollReveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/ScrollReveal.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-crumbs{display:flex;align-items:center;gap:7px;font-size:13px;color:var(--text-tertiary);letter-spacing:-0.005em}
.bw-crumbs a,.bw-crumbs button{color:var(--text-tertiary);text-decoration:none;background:none;border:0;padding:0;font:inherit;cursor:pointer;transition:color var(--dur-fast)}
.bw-crumbs a:hover,.bw-crumbs button:hover{color:var(--text-primary)}
.bw-crumbs__sep{opacity:.4;display:flex}
.bw-crumbs__current{color:var(--text-primary);font-weight:500}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-crumbs")) {
  const s = document.createElement("style");
  s.id = "bw-crumbs";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Breadcrumbs({
  items = [],
  onNavigate,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["bw-crumbs", className].filter(Boolean).join(" "),
    "aria-label": "Breadcrumb"
  }, rest), items.map((it, i) => {
    const item = typeof it === "string" ? {
      label: it
    } : it;
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: item.label
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "bw-crumbs__current"
    }, item.label) : /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate && onNavigate(item.label)
    }, item.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "bw-crumbs__sep"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 13
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-nav{position:relative;z-index:40;display:flex;align-items:center;justify-content:space-between;gap:24px;height:var(--nav-h);padding:0 26px}
.bw-nav--floating{position:sticky;top:14px;margin:0 auto;max-width:var(--layout-max);border-radius:var(--radius-pill);background:rgba(8,12,22,.62);backdrop-filter:var(--blur-glass);border:1px solid var(--border-subtle);box-shadow:var(--shadow-md)}
.bw-nav--solid{background:var(--surface-raised);border-bottom:1px solid var(--border-subtle)}
.bw-nav__brand{display:flex;align-items:center;gap:10px;flex:none}
.bw-nav__links{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--radius-pill);background:rgba(255,255,255,.04);border:1px solid var(--border-subtle)}
.bw-nav__link{padding:7px 15px;border-radius:var(--radius-pill);font-size:13.5px;font-weight:500;color:var(--text-tertiary);letter-spacing:-0.005em;cursor:pointer;transition:var(--transition-control);text-decoration:none;background:none;border:0;font-family:var(--font-sans)}
.bw-nav__link:hover{color:var(--text-primary)}
.bw-nav__link--active{background:var(--surface-brand-subtle);color:#fff;box-shadow:inset 0 0 0 1px rgba(61,130,255,.35)}
.bw-nav__actions{display:flex;align-items:center;gap:10px;flex:none}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-nav")) {
  const s = document.createElement("style");
  s.id = "bw-nav";
  s.textContent = __css;
  document.head.appendChild(s);
}
function NavBar({
  brand,
  links = [],
  activeLink,
  onNavigate,
  actions,
  variant = "floating",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["bw-nav", "bw-nav--" + variant, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bw-nav__brand"
  }, brand), links.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bw-nav__links"
  }, links.map(l => {
    const item = typeof l === "string" ? {
      label: l
    } : l;
    return /*#__PURE__*/React.createElement("button", {
      key: item.label,
      className: "bw-nav__link" + (activeLink === item.label ? " bw-nav__link--active" : ""),
      onClick: () => onNavigate && onNavigate(item.label)
    }, item.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "bw-nav__actions"
  }, actions));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-pag{display:flex;align-items:center;gap:6px}
.bw-pag__meta{margin-right:12px;font-family:var(--font-mono);font-size:12px;color:var(--text-tertiary)}
.bw-pag__num{min-width:32px;height:32px;padding:0 8px;border-radius:var(--radius-xs);border:1px solid transparent;background:none;color:var(--text-tertiary);font-family:var(--font-mono);font-size:12.5px;cursor:pointer;transition:var(--transition-control)}
.bw-pag__num:hover{background:var(--surface-hover);color:var(--text-primary)}
.bw-pag__num--active{background:var(--surface-brand-subtle);color:#fff;border-color:rgba(61,130,255,.35)}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-pag")) {
  const s = document.createElement("style");
  s.id = "bw-pag";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  total,
  className = "",
  ...rest
}) {
  const nums = [];
  const from = Math.max(1, Math.min(page - 1, pageCount - 2));
  for (let i = from; i < from + 3 && i <= pageCount; i++) nums.push(i);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-pag", className].filter(Boolean).join(" ")
  }, rest), total != null && /*#__PURE__*/React.createElement("span", {
    className: "bw-pag__meta"
  }, total, " records"), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-left",
    size: "sm",
    label: "Previous",
    disabled: page <= 1,
    onClick: () => onChange && onChange(page - 1)
  }), nums.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    className: "bw-pag__num" + (n === page ? " bw-pag__num--active" : ""),
    onClick: () => onChange && onChange(n)
  }, n)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-right",
    size: "sm",
    label: "Next",
    disabled: page >= pageCount,
    onClick: () => onChange && onChange(page + 1)
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-sidenav{width:var(--sidenav-w);flex:none;display:flex;flex-direction:column;gap:4px;padding:18px 12px;background:var(--surface-raised);border-right:1px solid var(--border-subtle);height:100%;overflow-y:auto}
.bw-sidenav--collapsed{width:var(--sidenav-w-collapsed);align-items:center}
.bw-sidenav__brand{display:flex;align-items:center;gap:10px;padding:6px 10px 20px}
.bw-sidenav__group{margin-top:18px;padding:0 12px 8px;font-family:var(--font-mono);font-size:var(--mono-sm-size);letter-spacing:var(--mono-sm-track);text-transform:uppercase;color:var(--text-disabled)}
.bw-sidenav__item{display:flex;align-items:center;gap:11px;width:100%;padding:9px 12px;border:0;background:none;border-radius:var(--radius-control);color:var(--text-tertiary);font-family:var(--font-sans);font-size:13.5px;font-weight:500;letter-spacing:-0.005em;cursor:pointer;transition:var(--transition-control);text-align:left;position:relative}
.bw-sidenav__item:hover{background:var(--surface-hover);color:var(--text-primary)}
.bw-sidenav__item--active{background:var(--surface-brand-subtle);color:#fff;box-shadow:inset 0 0 0 1px rgba(61,130,255,.3)}
.bw-sidenav__item--active::before{content:"";position:absolute;left:-12px;top:50%;transform:translateY(-50%);width:3px;height:18px;border-radius:0 3px 3px 0;background:var(--blue-500);box-shadow:0 0 12px var(--blue-500)}
.bw-sidenav__count{margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--text-disabled)}
.bw-sidenav__foot{margin-top:auto;padding-top:16px}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-sidenav")) {
  const s = document.createElement("style");
  s.id = "bw-sidenav";
  s.textContent = __css;
  document.head.appendChild(s);
}
function SideNav({
  brand,
  items = [],
  activeItem,
  onSelect,
  collapsed = false,
  footer,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({
    className: ["bw-sidenav", collapsed && "bw-sidenav--collapsed", className].filter(Boolean).join(" ")
  }, rest), brand && /*#__PURE__*/React.createElement("div", {
    className: "bw-sidenav__brand"
  }, brand), items.map((it, i) => it.group ? /*#__PURE__*/React.createElement("div", {
    className: "bw-sidenav__group",
    key: "g" + i
  }, collapsed ? "" : it.group) : /*#__PURE__*/React.createElement("button", {
    key: it.label,
    className: "bw-sidenav__item" + (activeItem === it.label ? " bw-sidenav__item--active" : ""),
    onClick: () => onSelect && onSelect(it.label),
    title: it.label
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon || "circle-check",
    size: 17
  }), !collapsed && /*#__PURE__*/React.createElement("span", null, it.label), !collapsed && it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "bw-sidenav__count"
  }, it.count))), footer && /*#__PURE__*/React.createElement("div", {
    className: "bw-sidenav__foot"
  }, footer));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __css = `
.bw-tabs{display:inline-flex;align-items:center;gap:2px;position:relative}
.bw-tabs--capsule{padding:4px;border-radius:var(--radius-pill);background:rgba(255,255,255,.04);border:1px solid var(--border-subtle)}
.bw-tabs--underline{gap:24px;border-bottom:1px solid var(--border-subtle);width:100%;justify-content:flex-start}
.bw-tab{border:0;background:none;font-family:var(--font-sans);font-size:13.5px;font-weight:500;letter-spacing:-0.005em;color:var(--text-tertiary);cursor:pointer;transition:var(--transition-control);display:inline-flex;align-items:center;gap:7px}
.bw-tabs--capsule .bw-tab{padding:7px 15px;border-radius:var(--radius-pill)}
.bw-tabs--capsule .bw-tab--active{background:var(--surface-brand-subtle);color:#fff;box-shadow:inset 0 0 0 1px rgba(61,130,255,.35)}
.bw-tabs--underline .bw-tab{padding:0 0 13px;position:relative}
.bw-tabs--underline .bw-tab--active{color:var(--text-primary)}
.bw-tabs--underline .bw-tab--active::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--blue-500);box-shadow:0 0 12px var(--blue-500)}
.bw-tab:hover{color:var(--text-primary)}
.bw-tab__badge{font-family:var(--font-mono);font-size:11px;padding:1px 6px;border-radius:var(--radius-pill);background:rgba(255,255,255,.08);color:var(--text-tertiary)}
`;
if (typeof document !== "undefined" && !document.getElementById("bw-tabs")) {
  const s = document.createElement("style");
  s.id = "bw-tabs";
  s.textContent = __css;
  document.head.appendChild(s);
}
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = "capsule",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bw-tabs", "bw-tabs--" + variant, className].filter(Boolean).join(" "),
    role: "tablist"
  }, rest), tabs.map(t => {
    const tab = typeof t === "string" ? {
      label: t
    } : t;
    const active = value === tab.label;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.label,
      role: "tab",
      "aria-selected": active,
      className: "bw-tab" + (active ? " bw-tab--active" : ""),
      onClick: () => onChange && onChange(tab.label)
    }, tab.label, tab.badge != null && /*#__PURE__*/React.createElement("span", {
      className: "bw-tab__badge"
    }, tab.badge));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Views.jsx
try { (() => {
const {
  Card,
  StatCard,
  BarChart,
  DataTable,
  ActivityItem,
  Badge,
  Button,
  IconButton,
  Icon,
  Tabs,
  Input,
  Select,
  Tag,
  ProgressBar,
  Divider,
  Avatar,
  Breadcrumbs,
  Pagination,
  Checkbox,
  Switch,
  Field,
  Textarea,
  Radio,
  Tooltip,
  Skeleton,
  Eyebrow,
  GradientText
} = window.BsswebDesignSystem_e84047;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const BARS = [34, 52, 41, 68, 49, 77, 58, 44, 62, 38, 55, 71].map((v, i) => ({
  value: v,
  label: MONTHS[i],
  flag: i === 5 ? "1,412 units" : undefined
}));
const ORDERS = [{
  id: "WO-40218",
  part: "Housing, 40mm cast",
  plant: "BUR-02",
  status: "Released",
  tone: "success",
  qty: "1,480",
  due: "12 Aug",
  owner: "Deniz Aksoy",
  pct: 78
}, {
  id: "WO-40219",
  part: "Rotor shaft A2",
  plant: "IST-01",
  status: "Planning",
  tone: "brand",
  qty: "620",
  due: "13 Aug",
  owner: "Mert Kaya",
  pct: 24
}, {
  id: "WO-40220",
  part: "Bearing seat kit",
  plant: "BUR-02",
  status: "At risk",
  tone: "warning",
  qty: "2,140",
  due: "13 Aug",
  owner: "Ipek Yildiz",
  pct: 41
}, {
  id: "WO-40221",
  part: "Valve body, brass",
  plant: "IST-01",
  status: "Released",
  tone: "success",
  qty: "310",
  due: "14 Aug",
  owner: "Deniz Aksoy",
  pct: 92
}, {
  id: "WO-40222",
  part: "Coupling flange",
  plant: "ROT-03",
  status: "Blocked",
  tone: "danger",
  qty: "880",
  due: "15 Aug",
  owner: "Jan de Vries",
  pct: 12
}, {
  id: "WO-40223",
  part: "Housing, 60mm cast",
  plant: "BUR-02",
  status: "Planning",
  tone: "brand",
  qty: "1,020",
  due: "16 Aug",
  owner: "Mert Kaya",
  pct: 8
}];
const STOCK = [{
  sku: "CST-4001",
  name: "Housing blank, 40mm",
  loc: "BUR-02 · A14",
  onhand: "3,120",
  safety: "1,500",
  cover: 72,
  status: "Healthy",
  tone: "success"
}, {
  sku: "SHF-2210",
  name: "Rotor shaft billet",
  loc: "IST-01 · C02",
  onhand: "410",
  safety: "600",
  cover: 22,
  status: "Below safety",
  tone: "warning"
}, {
  sku: "BRG-0088",
  name: "Bearing, 22mm",
  loc: "BUR-02 · B07",
  onhand: "18,400",
  safety: "6,000",
  cover: 96,
  status: "Healthy",
  tone: "success"
}, {
  sku: "VLV-7712",
  name: "Valve body casting",
  loc: "ROT-03 · D11",
  onhand: "0",
  safety: "400",
  cover: 0,
  status: "Stockout",
  tone: "danger"
}];
function PageHead({
  crumbs,
  title,
  sub,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: crumbs
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: "-.028em",
      margin: 0
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      color: "var(--text-tertiary)"
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, actions));
}
function Dashboard({
  onOpen
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    crumbs: ["Home", "Dashboard"],
    title: "Operations overview",
    sub: "All plants \xB7 rolling 12 months",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 14
      })
    }, "Export"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 14
      })
    }, "New work order"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "factory",
    value: "42",
    label: "Active work orders",
    delta: "+8.2%",
    action: "View detail"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "boxes",
    value: "21",
    label: "Clearance reviews",
    delta: "-3.1%",
    action: "View detail"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "bot",
    value: "68",
    label: "AI-planned runs",
    delta: "+24%",
    tone: "accent",
    action: "View detail"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "wallet",
    value: "\u20AC4.1M",
    label: "Committed spend",
    delta: "+2.4%",
    action: "View detail"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Tracking history",
    subtitle: "Output by month, all plants",
    action: /*#__PURE__*/React.createElement(Tabs, {
      tabs: ["Units", "Value"],
      value: "Units",
      onChange: () => {}
    })
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: BARS,
    activeIndex: 5,
    height: 196
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Recent activity",
    subtitle: "Audit trail",
    action: /*#__PURE__*/React.createElement(IconButton, {
      icon: "ellipsis",
      size: "sm",
      label: "More"
    })
  }, /*#__PURE__*/React.createElement(ActivityItem, {
    actor: "Deniz Aksoy",
    action: "released",
    target: "WO-40218",
    meta: "Plant BUR-02 \xB7 1,480 units",
    time: "18 min"
  }), /*#__PURE__*/React.createElement(ActivityItem, {
    actor: "Mert Kaya",
    action: "approved",
    target: "PO-8841",
    meta: "Vendor Nutrican",
    time: "1 hr"
  }), /*#__PURE__*/React.createElement(ActivityItem, {
    actor: "Ipek Yildiz",
    action: "flagged",
    target: "WO-40220",
    meta: "Capacity at 94%",
    time: "3 hr"
  }), /*#__PURE__*/React.createElement(ActivityItem, {
    actor: "bssweb AI",
    action: "re-sequenced",
    target: "Line B",
    meta: "Cost of delay \u20AC12.4k avoided",
    time: "4 hr"
  }), /*#__PURE__*/React.createElement(ActivityItem, {
    actor: "Jan de Vries",
    action: "blocked",
    target: "WO-40222",
    meta: "Stockout VLV-7712",
    time: "6 hr"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Capacity",
    subtitle: "Next 24 hours"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Bursa \xB7 Line A",
    value: 62
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Bursa \xB7 Line B",
    value: 94,
    tone: "warning"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Istanbul \xB7 Line A",
    value: 41
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Rotterdam \xB7 Line C",
    value: 12,
    tone: "accent"
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      gridColumn: "span 2"
    },
    variant: "flush"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: "-.01em"
    }
  }, "Today\u2019s exceptions"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 13,
      color: "var(--text-tertiary)"
    }
  }, "Ranked by cost of delay")), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  }, "AI ranked")), /*#__PURE__*/React.createElement(DataTable, {
    onRowClick: onOpen,
    columns: [{
      key: "id",
      label: "Order"
    }, {
      key: "part",
      label: "Part"
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.status)
    }, {
      key: "qty",
      label: "Qty",
      align: "right"
    }],
    rows: ORDERS.slice(0, 4)
  }))));
}
function WorkOrders({
  onOpen
}) {
  const [tab, setTab] = React.useState("All");
  const [page, setPage] = React.useState(1);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    crumbs: ["Operations", "Work orders"],
    title: "Work orders",
    sub: "1,284 records \xB7 6 shown",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "funnel",
        size: 14
      })
    }, "Filter"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 14
      })
    }, "New work order"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      label: "All"
    }, {
      label: "Released"
    }, {
      label: "At risk",
      badge: 2
    }, {
      label: "Blocked",
      badge: 1
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search orders, parts, vendors"
  })), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ["All plants", "Istanbul — IST-01", "Bursa — BUR-02", "Rotterdam — ROT-03"]
  }), /*#__PURE__*/React.createElement(Tag, {
    selected: true,
    onRemove: () => {}
  }, "Due this week")), /*#__PURE__*/React.createElement(Card, {
    variant: "flush"
  }, /*#__PURE__*/React.createElement(DataTable, {
    onRowClick: onOpen,
    columns: [{
      key: "id",
      label: "Order",
      sortable: true
    }, {
      key: "part",
      label: "Part"
    }, {
      key: "plant",
      label: "Plant"
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.status)
    }, {
      key: "pct",
      label: "Progress",
      width: 150,
      render: r => /*#__PURE__*/React.createElement(ProgressBar, {
        value: r.pct,
        showValue: false,
        thin: true,
        tone: r.pct > 85 ? "accent" : "brand"
      })
    }, {
      key: "owner",
      label: "Owner",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.owner,
        size: "xs"
      }), r.owner)
    }, {
      key: "due",
      label: "Due",
      align: "right"
    }, {
      key: "qty",
      label: "Qty",
      align: "right",
      sortable: true
    }],
    rows: ORDERS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--text-disabled)"
    }
  }, "Updated 8 seconds ago"), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pageCount: 9,
    total: 1284,
    onChange: setPage
  })));
}
function Inventory() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    crumbs: ["Operations", "Inventory"],
    title: "Inventory",
    sub: "Net requirements recalculated on every movement",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "upload",
        size: 14
      })
    }, "Import count"), /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Run netting"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "package",
    value: "4,212",
    label: "Active SKUs",
    delta: "+1.1%",
    tone: "plain"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "triangle-alert",
    value: "7",
    label: "Below safety stock",
    delta: "-2"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "circle-alert",
    value: "1",
    label: "Stockouts",
    delta: "+1",
    tone: "plain"
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "flush"
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "sku",
      label: "SKU",
      sortable: true
    }, {
      key: "name",
      label: "Description"
    }, {
      key: "loc",
      label: "Location"
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.status)
    }, {
      key: "cover",
      label: "Cover",
      width: 140,
      render: r => /*#__PURE__*/React.createElement(ProgressBar, {
        value: r.cover,
        showValue: false,
        thin: true,
        tone: r.cover < 25 ? "danger" : r.cover < 50 ? "warning" : "brand"
      })
    }, {
      key: "safety",
      label: "Safety",
      align: "right"
    }, {
      key: "onhand",
      label: "On hand",
      align: "right",
      sortable: true
    }],
    rows: STOCK
  })));
}
function Planner({
  onToast
}) {
  const [prompt, setPrompt] = React.useState("Recover WO-40220 without pushing the Zantic delivery");
  const [thinking, setThinking] = React.useState(false);
  const [done, setDone] = React.useState(true);
  const run = () => {
    setThinking(true);
    setDone(false);
    setTimeout(() => {
      setThinking(false);
      setDone(true);
      onToast();
    }, 1400);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    crumbs: ["bssweb AI", "Planner"],
    title: "Planner",
    sub: "Every suggestion carries the inputs it used",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "file-text",
        size: 14
      })
    }, "Model card")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.25fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    size: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "What should the planner solve?",
    hint: "Plain language. It reads the live schedule, the BOM and open receipts."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    value: prompt,
    onChange: e => setPrompt(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 14
    }),
    loading: thinking,
    onClick: run
  }, "Draft a plan"), /*#__PURE__*/React.createElement(Switch, {
    size: "sm",
    label: "Auto-apply low-risk moves"
  })), /*#__PURE__*/React.createElement(Divider, {
    fade: true
  }), thinking ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    shape: "text",
    lines: 3
  }), /*#__PURE__*/React.createElement(Skeleton, {
    height: 70
  })) : done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  }, "Draft"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-disabled)"
    }
  }, "3 moves \xB7 \u20AC12.4k cost of delay avoided")), [["Re-sequence WO-40220 ahead of WO-40223 on Line B", "Frees 4.5 hrs before the Zantic cut-off."], ["Split the Bursa run 60/40 with Istanbul", "Istanbul has 41% idle capacity through Thursday."], ["Expedite BRG-0088 from vendor Crono", "Two-day lead time, €340 premium."]].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 12,
      padding: "14px 16px",
      borderRadius: "var(--radius-card)",
      background: "var(--surface-inset)",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--aqua-400)",
      marginTop: 2
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-primary)",
      letterSpacing: "-.005em"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 13,
      color: "var(--text-tertiary)",
      lineHeight: 1.5
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Apply all"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Discard"))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Inputs used",
    subtitle: "Read at 09:41 local"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, ["Live schedule", "BOM v14", "Open receipts", "Vendor lead times", "Line B OEE", "Zantic contract"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    icon: "database"
  }, t)))), /*#__PURE__*/React.createElement(Card, {
    title: "Guardrails"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Never move a released order",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Respect customer cut-off dates",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Allow overtime up to 4 hrs"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Allow vendor expedite",
    defaultChecked: true
  }))))));
}
Object.assign(window, {
  Dashboard,
  WorkOrders,
  Inventory,
  Planner,
  ORDERS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Views.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ChainHero.jsx
try { (() => {
const {
  Icon
} = window.BsswebDesignSystem_e84047;

/* ================= CONFIG — edit here, not in the component logic =================
   Every link uses ONE identical treatment (glow + forward-pop + HUD card). No link
   behaves differently from another. hitArea / panel are percentages of the hero box,
   so they survive resizing. bloom.x/y is the glow centre (also % of the box).
   image stays null until a per-link render exists; the CSS glow is the shared look. */
const CHAIN_ASSETS = "../../assets/hero/";
const chainSolutions = [{
  id: "mes",
  code: "MES",
  icon: "factory",
  title: "Üretim Yürütme Sistemi",
  body: "Sahadaki her istasyonu gerçek zamanlı izleyin.",
  hitArea: {
    x: 39,
    y: 66,
    w: 15,
    h: 24
  },
  bloom: {
    x: 46,
    y: 76
  },
  panel: {
    x: 44,
    y: 40
  }
}, {
  id: "mrp",
  code: "MRP / MRP II",
  icon: "boxes",
  title: "Üretim Kaynakları Planlaması",
  body: "Net ihtiyaçlar her stok hareketinde yeniden hesaplanır.",
  hitArea: {
    x: 50,
    y: 55,
    w: 14,
    h: 23
  },
  bloom: {
    x: 57,
    y: 65
  },
  panel: {
    x: 47,
    y: 28
  }
}, {
  id: "automation",
  code: "OTOMASYON",
  icon: "workflow",
  title: "Üretim Otomasyonları",
  body: "Akıllı otomasyon çözümleriyle üretiminizi geleceğe taşıyın.",
  hitArea: {
    x: 60,
    y: 42,
    w: 15,
    h: 25
  },
  bloom: {
    x: 67,
    y: 52
  },
  panel: {
    x: 46,
    y: 20
  }
}, {
  id: "erp",
  code: "ERP",
  icon: "wallet",
  title: "Kurumsal Kaynak Planlaması",
  body: "Sipariş, maliyet ve stok aynı deftere işler.",
  hitArea: {
    x: 71,
    y: 31,
    w: 13,
    h: 22
  },
  bloom: {
    x: 77,
    y: 40
  },
  panel: {
    x: 46,
    y: 22
  }
}, {
  id: "aifinance",
  code: "AI FİNANS",
  icon: "chart-pie",
  title: "AI Finansal Analiz ve Raporlama",
  body: "Fire ve duruş maliyeti oluştuğu anda fiyatlanır.",
  hitArea: {
    x: 81,
    y: 21,
    w: 12,
    h: 20
  },
  bloom: {
    x: 86,
    y: 29
  },
  panel: {
    x: 46,
    y: 16
  }
}];
const CHAIN_IDLE = CHAIN_ASSETS + "chain-idle.png";
const chainEase = "cubic-bezier(0.22, 1, 0.36, 1)";
function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}
function ChainHero({
  children
}) {
  const [active, setActive] = React.useState(null); // solution id or null
  const [ready, setReady] = React.useState(false);
  const reduced = useReducedMotion();
  const coarse = React.useMemo(() => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches, []);
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    const im = new Image();
    im.onload = im.onerror = () => setReady(true);
    im.src = CHAIN_IDLE;
  }, []);
  React.useEffect(() => {
    if (!coarse) return;
    const onDoc = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setActive(null);
    };
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, [coarse]);
  const glowDur = reduced ? "180ms" : "520ms";
  const fade = "opacity " + glowDur + " " + chainEase;
  const sol = chainSolutions.find(s => s.id === active) || null;
  return /*#__PURE__*/React.createElement("section", {
    ref: rootRef,
    "aria-label": "bssweb \xE7\xF6z\xFCm zinciri",
    style: {
      position: "relative",
      minHeight: "min(880px, 100vh)",
      overflow: "hidden",
      marginTop: -78,
      paddingTop: 78,
      background: "#04060c"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: CHAIN_IDLE,
    alt: "",
    draggable: "false",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "72% 50%",
      filter: sol && !reduced ? "brightness(1.05)" : "none",
      transition: "filter " + glowDur + " " + chainEase
    }
  }), chainSolutions.map(s => {
    const on = active === s.id;
    const cx = s.bloom.x + "%",
      cy = s.bloom.y + "%";
    const pop = on && !reduced ? "scale(1.04)" : "scale(0.9)";
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s.id
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: cx,
        top: cy,
        width: "34vmin",
        height: "34vmin",
        transform: "translate(-50%,-50%) " + pop,
        borderRadius: "50%",
        pointerEvents: "none",
        background: "radial-gradient(closest-side, rgba(61,130,255,.45), rgba(11,92,255,.18) 46%, rgba(11,92,255,0) 72%)",
        mixBlendMode: "screen",
        opacity: on ? 1 : 0,
        transition: fade + ", transform " + glowDur + " " + chainEase,
        willChange: "opacity, transform"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: cx,
        top: cy,
        width: "17vmin",
        height: "17vmin",
        transform: "translate(-50%,-50%) " + pop,
        borderRadius: "50%",
        pointerEvents: "none",
        background: "radial-gradient(closest-side, rgba(180,214,255,.9), rgba(61,130,255,.5) 40%, rgba(11,92,255,0) 74%)",
        mixBlendMode: "screen",
        opacity: on ? 1 : 0,
        transition: fade + ", transform " + glowDur + " " + chainEase,
        willChange: "opacity, transform"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: s.hitArea.x + s.hitArea.w / 2 + "%",
        top: s.hitArea.y + s.hitArea.h / 2 + "%",
        width: "12vmin",
        height: "12vmin",
        transform: "translate(-50%,-50%) " + (on && !reduced ? "scale(1.06)" : "scale(0.94)"),
        borderRadius: "50%",
        pointerEvents: "none",
        boxShadow: "0 0 22px 2px rgba(120,178,255,.75), inset 0 0 14px rgba(140,190,255,.55)",
        border: "1px solid rgba(190,220,255,.5)",
        opacity: on ? 1 : 0,
        transition: fade + ", transform " + glowDur + " " + chainEase,
        willChange: "opacity, transform"
      }
    }));
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(100deg, rgba(4,6,12,.9) 0%, rgba(4,6,12,.58) 30%, rgba(4,6,12,0) 55%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: "auto 0 0 0",
      height: 160,
      background: "var(--gradient-protect-b)",
      pointerEvents: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "0 var(--layout-gutter)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      paddingTop: 96,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 24,
      pointerEvents: "auto"
    }
  }, children)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 3
    }
  }, chainSolutions.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    "aria-label": s.title,
    "aria-pressed": active === s.id,
    disabled: !ready,
    onPointerEnter: coarse ? undefined : () => setActive(s.id),
    onPointerLeave: coarse ? undefined : () => setActive(a => a === s.id ? null : a),
    onClick: coarse ? () => setActive(a => a === s.id ? null : s.id) : undefined,
    onFocus: () => setActive(s.id),
    onBlur: () => setActive(a => a === s.id ? null : a),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActive(a => a === s.id ? null : s.id);
      }
    },
    style: {
      position: "absolute",
      left: s.hitArea.x + "%",
      top: s.hitArea.y + "%",
      width: s.hitArea.w + "%",
      height: s.hitArea.h + "%",
      background: "transparent",
      border: 0,
      borderRadius: "50%",
      cursor: "pointer",
      padding: 0
    }
  }))), sol && /*#__PURE__*/React.createElement("div", {
    key: sol.id,
    role: "status",
    style: {
      position: "absolute",
      zIndex: 4,
      left: sol.panel.x + "%",
      top: "max(" + sol.panel.y + "%, 112px)",
      width: 258,
      pointerEvents: "none",
      opacity: 0,
      animation: (reduced ? "chainPanelInR 180ms" : "chainPanelIn 320ms " + chainEase) + " 130ms forwards"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "rgba(7,11,22,.8)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(140,178,255,.28)",
      clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
      padding: "13px 15px 14px",
      boxShadow: "0 16px 46px rgba(0,2,8,.6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 9,
      right: 11,
      display: "flex",
      gap: 3
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 2.5,
      height: 2.5,
      borderRadius: "50%",
      background: "rgba(140,178,255,.55)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 15,
      bottom: 15,
      width: 1,
      background: "linear-gradient(180deg, rgba(61,130,255,0), rgba(61,130,255,.8), rgba(61,130,255,0))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      flex: "none",
      borderRadius: 7,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-brand-subtle)",
      border: "1px solid rgba(61,130,255,.3)",
      color: "var(--blue-300)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: sol.icon,
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: ".16em",
      color: "var(--blue-300)",
      textTransform: "uppercase"
    }
  }, sol.code), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontFamily: "var(--font-display)",
      fontSize: 14.5,
      fontWeight: 600,
      letterSpacing: "-.012em",
      color: "#fff",
      lineHeight: 1.15
    }
  }, sol.title))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 11.5,
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      textWrap: "pretty"
    }
  }, sol.body))), /*#__PURE__*/React.createElement("style", null, `@keyframes chainPanelIn{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}@keyframes chainPanelInR{from{opacity:0}to{opacity:1}}`));
}
Object.assign(window, {
  ChainHero,
  chainSolutions
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ChainHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Chrome.jsx
try { (() => {
const {
  NavBar,
  Wordmark,
  Button,
  Icon,
  Divider
} = window.BsswebDesignSystem_e84047;
function SiteNav({
  view,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      padding: "14px 24px 0"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    brand: /*#__PURE__*/React.createElement(Wordmark, {
      size: "sm",
      onClick: () => onNavigate("Platform"),
      style: {
        cursor: "pointer"
      }
    }),
    links: ["Platform", "Solutions", "Pricing", "Company"],
    activeLink: view,
    onNavigate: onNavigate,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 14
      })
    }, "Book a demo"))
  }));
}
const FOOT = [["Platform", ["Overview", "Data model", "Integrations", "Security", "Status"]], ["Solutions", ["ERP", "MRP", "MES", "bssweb AI", "Finance"]], ["Company", ["About", "Customers", "Careers", "Press", "Contact"]], ["Resources", ["Docs", "API reference", "Implementation guide", "Changelog"]]];
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      padding: "64px 0 40px",
      marginTop: 128
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(4, 1fr)",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "md"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.6,
      color: "var(--text-tertiary)",
      maxWidth: "30ch"
    }
  }, "Enterprise software for companies that make physical things."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, "Istanbul \xB7 Bursa \xB7 Rotterdam")), FOOT.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, title), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontSize: 13.5,
      color: "var(--text-tertiary)"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: 20,
      display: "flex",
      justifyContent: "space-between",
      gap: 20,
      flexWrap: "wrap",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".06em",
      color: "var(--text-disabled)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 bssweb"), /*#__PURE__*/React.createElement("span", null, "ISO 27001 \xB7 SOC 2 Type II \xB7 EU data residency")));
}
Object.assign(window, {
  SiteNav,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Home.jsx
try { (() => {
const {
  BeamCanvas,
  ScrollReveal,
  ParallaxLayer,
  Eyebrow,
  GradientText,
  SectionHeading,
  FeatureCard,
  LogoWall,
  CTABanner,
  Card,
  Button,
  Input,
  Icon,
  Badge,
  StatCard,
  BarChart,
  DataTable,
  ActivityItem,
  Divider
} = window.BsswebDesignSystem_e84047;
const BARS = [34, 52, 41, 68, 49, 77, 58, 44, 62, 38, 55, 71].map((v, i) => ({
  value: v,
  label: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
  flag: i === 5 ? "1.4k units" : undefined
}));
function ConsoleShot({
  compact
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-panel)",
      border: "1px solid var(--border-default)",
      background: "var(--surface-raised)",
      boxShadow: "var(--shadow-xl)",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "168px 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-900)",
      borderRight: "1px solid var(--border-subtle)",
      padding: "16px 12px",
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "2px 8px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "-.045em"
    }
  }, "bssweb")), [["Dashboard", "layout-dashboard", 1], ["Work orders", "factory"], ["Inventory", "boxes"], ["Logistics", "truck"], ["Ledger", "wallet"], ["Insights", "chart-line"], ["Vendors", "users"]].map(([l, ic, on]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "7px 9px",
      borderRadius: 8,
      fontSize: 12,
      color: on ? "#fff" : "var(--text-tertiary)",
      background: on ? "var(--surface-brand-subtle)" : "transparent",
      boxShadow: on ? "inset 0 0 0 1px rgba(61,130,255,.3)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 14
  }), l))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      background: "var(--ink-950)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 30,
      borderRadius: 8,
      background: "var(--surface-inset)",
      border: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 11px",
      fontSize: 11.5,
      color: "var(--text-disabled)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 13
  }), "Search orders, parts, vendors"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  }, "Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "factory",
    value: "42",
    label: "Active work orders",
    delta: "+8.2%"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "boxes",
    value: "21",
    label: "Clearance reviews",
    delta: "-3.1%"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "bot",
    value: "68",
    label: "AI-planned runs",
    delta: "+24%",
    tone: "accent"
  })), !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Tracking history",
    subtitle: "Output by month"
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: BARS,
    activeIndex: 5,
    height: 128,
    gap: 5
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Recent activity",
    subtitle: "Audit trail"
  }, /*#__PURE__*/React.createElement(ActivityItem, {
    actor: "Deniz Aksoy",
    action: "released",
    target: "WO-40218",
    meta: "Plant BUR-02",
    time: "18 min"
  }), /*#__PURE__*/React.createElement(ActivityItem, {
    actor: "Mert Kaya",
    action: "approved",
    target: "PO-8841",
    meta: "Nutrican",
    time: "1 hr"
  }), /*#__PURE__*/React.createElement(ActivityItem, {
    actor: "Ipek Yildiz",
    action: "flagged",
    target: "WO-40220",
    meta: "Capacity 94%",
    time: "3 hr"
  })))));
}
function Hero() {
  return /*#__PURE__*/React.createElement(ChainHero, null, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    icon: "sparkles"
  }, "bssweb AI is live in every module")), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(40px, 4.6vw, 68px)",
      fontWeight: 600,
      lineHeight: .96,
      letterSpacing: "-.04em",
      margin: 0,
      textWrap: "balance"
    }
  }, "Run the whole plant", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(GradientText, {
    serif: true
  }, "in one system"))), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.55,
      color: "var(--text-secondary)",
      maxWidth: "44ch",
      textWrap: "pretty"
    }
  }, "ERP, MRP, MES, finance and AI planning on one data model. A change on the floor lands in the ledger the second it happens.")), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 230,
    style: {
      width: "100%",
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Input, {
    pill: true,
    size: "lg",
    icon: "mail",
    placeholder: "Work email",
    suffix: /*#__PURE__*/React.createElement(Button, {
      size: "md"
    }, "Request access")
  })), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, "Zincirin \xFCzerine gelin \u2014 her halka bir \xE7\xF6z\xFCm")));
}
const MODULES = [{
  icon: "wallet",
  key: "ERP",
  title: "One ledger, one truth",
  body: "Orders, costs and inventory post to the same records. No nightly reconciliation."
}, {
  icon: "boxes",
  key: "MRP",
  title: "Material planning that holds",
  body: "Net requirements recalculate on every movement, not on a weekly run."
}, {
  icon: "factory",
  key: "MES",
  title: "The floor, in real time",
  body: "Machine signals, operator confirmations and scrap in one execution layer."
}, {
  icon: "bot",
  key: "AI",
  title: "Planning, run by AI",
  body: "Describe the run. bssweb drafts the routing, the BOM and the schedule.",
  tone: "accent"
}, {
  icon: "chart-pie",
  key: "Finance",
  title: "Close in days, not weeks",
  body: "Scrap, downtime and rework price themselves as they happen."
}, {
  icon: "shield-check",
  key: "Platform",
  title: "Built for audit",
  body: "Every field change is versioned, attributed and exportable."
}];
function Home() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(ParallaxLayer, {
    depth: 0.06
  }, /*#__PURE__*/React.createElement(ConsoleShot, null)))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(LogoWall, {
    caption: "Running production at",
    logos: ["Zantic", "BookStore", "Wager", "Unicoin", "Crono", "Nutrican", "Mercury"]
  }))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      marginTop: 128
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "workflow"
    }, "One platform"),
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Five systems, ", /*#__PURE__*/React.createElement(GradientText, {
      serif: true
    }, "one record")),
    body: "Most manufacturers run planning, execution and finance in separate tools and spend the month reconciling them. bssweb does not."
  })), /*#__PURE__*/React.createElement(ScrollReveal, {
    stagger: 70,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 56
    }
  }, MODULES.map(m => /*#__PURE__*/React.createElement(FeatureCard, {
    key: m.key,
    icon: m.icon,
    tone: m.tone,
    title: m.title,
    body: m.body
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, m.key))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      marginTop: 128,
      display: "grid",
      gridTemplateColumns: "1fr 1.15fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, {
    from: "left"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    size: "sm",
    eyebrow: /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "bot",
      variant: "accent"
    }, "bssweb AI"),
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Every deviation, priced ", /*#__PURE__*/React.createElement(GradientText, {
      serif: true
    }, "before it reaches finance")),
    body: "The planner ranks exceptions by cost of delay instead of by timestamp, and drafts the recovery schedule for a human to approve.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, "See it plan a run"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Read the model card"))
  })), /*#__PURE__*/React.createElement(ScrollReveal, {
    from: "right",
    delay: 90
  }, /*#__PURE__*/React.createElement(ConsoleShot, null))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      marginTop: 128
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, {
    stagger: 70,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, [["11 days", "Median implementation, mid-market"], ["1.4M", "Work orders executed monthly"], ["99.98%", "Platform availability, trailing 12 mo"], ["4.2 hrs", "Average month-end close"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      borderTop: "1px solid var(--border-default)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 52,
      lineHeight: 1,
      letterSpacing: "-.02em",
      color: "var(--text-primary)"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 13,
      lineHeight: 1.5,
      color: "var(--text-tertiary)",
      maxWidth: "24ch"
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      marginTop: 128
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(Card, {
    size: "lg",
    variant: "glass",
    style: {
      padding: "56px 48px",
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontSize: 34,
      lineHeight: 1.28,
      letterSpacing: "-.01em",
      color: "var(--text-primary)",
      textWrap: "pretty"
    }
  }, "\u201CWe replaced four systems and a spreadsheet the plant manager kept on his desk. The spreadsheet was the hard one.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      background: "var(--gradient-aurora)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Selin Duran"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-tertiary)"
    }
  }, "VP Operations, Zantic")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, [["Systems retired", "4"], ["Close time", "−68%"], ["Stock write-off", "−31%"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      borderBottom: "1px solid var(--border-subtle)",
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: "-.03em"
    }
  }, v))))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      marginTop: 128
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(CTABanner, {
    eyebrow: /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "cpu"
    }, "Implementation in weeks"),
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Bring the whole operation ", /*#__PURE__*/React.createElement(GradientText, {
      serif: true
    }, "onto one system")),
    body: "Talk to an implementation engineer, not a sales rep. Bring your BOM and we will model it live.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Book a demo"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary"
    }, "Read the docs")),
    footnote: "No credit card \xB7 ISO 27001 \xB7 SOC 2 Type II"
  }))));
}
Object.assign(window, {
  Home,
  ConsoleShot
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Solutions.jsx
try { (() => {
const {
  Tabs,
  Eyebrow,
  SectionHeading,
  GradientText,
  Card,
  Badge,
  Button,
  Icon,
  Divider,
  ScrollReveal,
  DataTable,
  ProgressBar,
  Tag
} = window.BsswebDesignSystem_e84047;
const LINES = {
  ERP: {
    colour: "var(--blue-500)",
    lead: "Finance, procurement and inventory on one ledger.",
    points: ["Multi-entity, multi-currency consolidation", "Three-way match on receipt, not on invoice", "Landed cost allocated at the movement"],
    stat: ["4.2 hrs", "average month-end close"]
  },
  MRP: {
    colour: "var(--aqua-500)",
    lead: "Net requirements that recalculate on every movement.",
    points: ["Continuous netting, no weekly batch", "Vendor lead-time learned from receipts", "Safety stock priced against service level"],
    stat: ["−31%", "stock write-off, year one"]
  },
  MES: {
    colour: "var(--violet-500)",
    lead: "The shop floor, in real time.",
    points: ["OPC-UA and MQTT machine ingestion", "Operator confirmations on a tablet", "Scrap and downtime coded at source"],
    stat: ["1.4M", "work orders executed monthly"]
  },
  AI: {
    colour: "var(--blue-300)",
    lead: "Planning and exception triage, run by a model you can audit.",
    points: ["Prompt-to-work-order drafting", "Exceptions ranked by cost of delay", "Every suggestion carries its inputs"],
    stat: ["68%", "of runs planned by AI"]
  },
  Finance: {
    colour: "var(--green-500)",
    lead: "Costs priced as they happen.",
    points: ["Standard vs actual variance live", "Scrap posts to the ledger at source", "Audit trail on every field"],
    stat: ["−68%", "time to close"]
  }
};
function Solutions() {
  const [line, setLine] = React.useState("MRP");
  const d = LINES[line];
  return /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingTop: 112
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "workflow"
    }, "Solutions"),
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Pick the module. ", /*#__PURE__*/React.createElement(GradientText, {
      serif: true
    }, "Get the whole model.")),
    body: "Every line runs on the same records. Adding a module is a permission change, not a migration."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: Object.keys(LINES),
    value: line,
    onChange: setLine
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 28,
      marginTop: 44,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    size: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: d.colour,
      boxShadow: "0 0 16px " + d.colour
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--text-tertiary)"
    }
  }, "bssweb ", line)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: "-.028em",
      lineHeight: 1.14,
      textWrap: "balance"
    }
  }, d.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, d.points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: d.colour,
      display: "flex",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15
  })), p))), /*#__PURE__*/React.createElement(Divider, {
    fade: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 44,
      lineHeight: 1,
      color: "var(--text-primary)"
    }
  }, d.stat[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-tertiary)"
    }
  }, d.stat[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Explore ", line), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Docs"))), /*#__PURE__*/React.createElement(Card, {
    size: "lg",
    variant: "glass",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, "Live in the console"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  }, "Streaming")), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Line B utilisation",
    value: 78
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Bursa capacity",
    value: 94,
    tone: "warning"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Vendor OTIF",
    value: 62,
    tone: "accent"
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, ["Work orders", "Routings", "BOM", "Receipts", "Variance", "Audit"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.6,
      color: "var(--text-tertiary)"
    }
  }, "Each module writes to the same event log. Turning one on backfills the last 24 months of history automatically."))));
}
const PLANS = [{
  name: "Core",
  price: "€1,900",
  per: "per site / month",
  body: "ERP and finance for a single legal entity.",
  cta: "Start a pilot",
  variant: "secondary",
  features: ["One entity, one site", "Up to 50 named users", "Standard integrations", "Business-hours support"]
}, {
  name: "Operate",
  price: "€4,600",
  per: "per site / month",
  body: "Adds MRP and MES with live machine ingestion.",
  cta: "Book a demo",
  variant: "primary",
  featured: true,
  features: ["Unlimited entities", "OPC-UA / MQTT ingestion", "bssweb AI planning", "24/7 support, 15-min SLA"]
}, {
  name: "Enterprise",
  price: "Custom",
  per: "annual agreement",
  body: "Multi-plant deployments with data residency.",
  cta: "Talk to us",
  variant: "secondary",
  features: ["EU / US / APAC residency", "Dedicated implementation team", "Private model deployment", "Named reliability engineer"]
}];
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingTop: 112
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "wallet"
    }, "Pricing"),
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Priced per site, ", /*#__PURE__*/React.createElement(GradientText, {
      serif: true
    }, "not per seat")),
    body: "Operators, planners and finance all read the same records. Charging by head would only teach you to share logins."
  }), /*#__PURE__*/React.createElement(ScrollReveal, {
    stagger: 80,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      marginTop: 56,
      alignItems: "stretch"
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: 28,
      borderRadius: "var(--radius-panel)",
      background: p.featured ? "radial-gradient(120% 100% at 50% 0%, #10306f 0%, #0a1430 55%, #0b1019 100%)" : "var(--surface-card)",
      border: "1px solid " + (p.featured ? "var(--border-brand)" : "var(--border-subtle)"),
      boxShadow: p.featured ? "var(--shadow-lg), var(--edge-top)" : "var(--shadow-sm), var(--edge-top)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: "-.015em"
    }
  }, p.name), p.featured && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Most deployed")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 42,
      fontWeight: 600,
      letterSpacing: "-.04em",
      lineHeight: 1
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, p.per)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.6,
      color: "var(--text-tertiary)"
    }
  }, p.body), /*#__PURE__*/React.createElement(Divider, {
    fade: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, p.features.map(ft => /*#__PURE__*/React.createElement("div", {
    key: ft,
    style: {
      display: "flex",
      gap: 9,
      alignItems: "flex-start",
      fontSize: 13.5,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--blue-400)",
      display: "flex",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  })), ft))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: p.variant
  }, p.cta))))), /*#__PURE__*/React.createElement(Card, {
    variant: "flush",
    style: {
      marginTop: 28,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "f",
      label: "Included"
    }, {
      key: "core",
      label: "Core",
      align: "right"
    }, {
      key: "op",
      label: "Operate",
      align: "right"
    }, {
      key: "ent",
      label: "Enterprise",
      align: "right"
    }],
    rows: [{
      f: "Entities",
      core: "1",
      op: "Unlimited",
      ent: "Unlimited"
    }, {
      f: "Machine ingestion",
      core: "—",
      op: "OPC-UA, MQTT",
      ent: "+ custom drivers"
    }, {
      f: "bssweb AI planning",
      core: "—",
      op: "Included",
      ent: "Private deployment"
    }, {
      f: "Data residency",
      core: "EU",
      op: "EU",
      ent: "EU / US / APAC"
    }, {
      f: "Support SLA",
      core: "Next business day",
      op: "15 min, 24/7",
      ent: "Named engineer"
    }]
  })));
}
const COMPANY = [["2018", "Founded in Istanbul by four people who had all implemented the same ERP badly."], ["2021", "First MES deployment on a live automotive line in Bursa."], ["2024", "Finance and MRP merged onto a single event log."], ["2026", "bssweb AI planning ships to every module."]];
function Company() {
  return /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingTop: 112
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "globe"
    }, "Company"),
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "We build for the people ", /*#__PURE__*/React.createElement(GradientText, {
      serif: true
    }, "on the floor")),
    body: "Ninety of us across Istanbul, Bursa and Rotterdam. Roughly half have worked a shift in a plant."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, COMPANY.map(([y, t]) => /*#__PURE__*/React.createElement("div", {
    key: y,
    style: {
      display: "grid",
      gridTemplateColumns: "84px 1fr",
      gap: 20,
      padding: "22px 0",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".06em",
      color: "var(--blue-400)"
    }
  }, y), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--text-secondary)"
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      alignContent: "start"
    }
  }, [["90", "people"], ["3", "offices"], ["41", "plants live"], ["12", "countries"]].map(([v, l]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 38,
      fontWeight: 600,
      letterSpacing: "-.04em",
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, l))))));
}
Object.assign(window, {
  Solutions,
  Pricing,
  Company
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Solutions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Screens.jsx
try { (() => {
const {
  Wordmark,
  Button,
  Input,
  Field,
  Icon,
  Badge,
  Card,
  StatCard,
  ProgressBar,
  Divider,
  Avatar,
  Tag,
  Switch,
  Checkbox,
  ActivityItem,
  BarChart,
  Toast,
  Tabs
} = window.BsswebDesignSystem_e84047;

/* ---- phone chrome ---- */
function StatusBar({
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 46,
      flex: "none",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      padding: "0 22px 8px",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "-.01em",
      color: dark ? "#fff" : "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "09:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      opacity: .9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 1.5,
      alignItems: "flex-end"
    }
  }, [5, 7, 9, 11].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 3,
      height: h,
      borderRadius: 1,
      background: "currentColor"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 11,
      border: "1.5px solid currentColor",
      borderRadius: 3,
      padding: 1.5,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: "currentColor",
      borderRadius: 1
    }
  }))));
}
function Phone({
  label,
  children,
  tab,
  onTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      borderRadius: 46,
      background: "var(--surface-canvas)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-xl), var(--edge-all)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      overflowX: "hidden"
    }
  }, children), tab && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      height: 78,
      borderTop: "1px solid var(--border-subtle)",
      background: "rgba(8,12,22,.86)",
      backdropFilter: "var(--blur-glass)",
      display: "flex",
      alignItems: "flex-start",
      paddingTop: 11
    }
  }, [["Floor", "factory"], ["Orders", "boxes"], ["Approvals", "check"], ["Me", "user"]].map(([l, ic]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onTab && onTab(l),
    style: {
      flex: 1,
      background: "none",
      border: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 5,
      cursor: "pointer",
      color: tab === l ? "var(--blue-400)" : "var(--text-disabled)",
      fontFamily: "var(--font-sans)",
      fontSize: 10.5,
      letterSpacing: ".01em"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20
  }), l))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 8,
      left: "50%",
      transform: "translateX(-50%)",
      width: 134,
      height: 5,
      borderRadius: 3,
      background: "rgba(255,255,255,.28)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, label));
}

/* ---- screens ---- */
function SignIn({
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: 26,
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-canvas)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "-10%",
      width: 2,
      height: "80%",
      transform: "translateX(-50%)",
      background: "var(--gradient-beam)",
      filter: "blur(1px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 34,
      fontWeight: 600,
      letterSpacing: "-.04em",
      lineHeight: 1.02
    }
  }, "The floor,", /*#__PURE__*/React.createElement("br", null), "in your pocket"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "var(--text-secondary)"
    }
  }, "Confirm runs, log scrap and clear exceptions from the line.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Badge number"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "BUR-4471",
    icon: "user"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "PIN"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022",
    icon: "lock"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onDone,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    variant: "ghost"
  }, "Use badge tap instead")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-disabled)",
      textAlign: "center"
    }
  }, "Plant BUR-02 \xB7 shift B")));
}
function Floor({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, "Shift B \xB7 Line B"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: 27,
      fontWeight: 600,
      letterSpacing: "-.032em"
    }
  }, "Good morning, Deniz")), /*#__PURE__*/React.createElement(Avatar, {
    name: "Deniz Aksoy",
    size: "md",
    status: "online"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "factory",
    value: "6",
    label: "Runs on your line",
    delta: "+2"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "triangle-alert",
    value: "2",
    label: "Exceptions",
    tone: "accent"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Line B utilisation",
    subtitle: "Next 6 hours"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 94,
    tone: "warning",
    label: "Committed"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(BarChart, {
    height: 92,
    gap: 5,
    data: [42, 55, 61, 78, 94, 88, 70, 62],
    activeIndex: 4,
    gridLines: 2
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: "-.015em"
    }
  }, "Your queue"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-disabled)"
    }
  }, "6 RUNS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, [["WO-40218", "Housing, 40mm cast", "Released", "success", 78], ["WO-40220", "Bearing seat kit", "At risk", "warning", 41], ["WO-40223", "Housing, 60mm cast", "Planning", "brand", 8]].map(([id, part, st, tone, pct]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onOpen(id),
    style: {
      textAlign: "left",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 11,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      boxShadow: "var(--edge-top)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      color: "var(--text-primary)"
    }
  }, id), /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    dot: true
  }, st)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, part), /*#__PURE__*/React.createElement(ProgressBar, {
    value: pct,
    showValue: false,
    thin: true
  }))))));
}
function OrderDetail({
  id,
  onBack,
  onConfirm
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "8px 20px 26px",
      background: "radial-gradient(120% 120% at 50% 0%, #123a8f 0%, #0a1738 55%, #04060c 100%)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: 0,
      color: "rgba(255,255,255,.72)",
      display: "flex",
      alignItems: "center",
      gap: 7,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 15
  }), "Queue"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".06em",
      color: "var(--blue-300)"
    }
  }, id), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Released")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "10px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: "-.035em",
      lineHeight: 1.06
    }
  }, "Housing, 40mm cast"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 44,
      lineHeight: 1
    }
  }, "1,155"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: "var(--text-tertiary)"
    }
  }, "of 1,480 units confirmed")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 78,
    showValue: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    icon: "clock"
  }, "Due 12 Aug"), /*#__PURE__*/React.createElement(Tag, {
    icon: "factory"
  }, "Line B"), /*#__PURE__*/React.createElement(Tag, {
    icon: "user"
  }, "Deniz Aksoy")), /*#__PURE__*/React.createElement(Card, {
    title: "Confirm output",
    subtitle: "Last confirmation 22 min ago"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Good units"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "240"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Scrap",
    hint: "Coded at source \u2014 no month-end reconciliation."
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "6",
    icon: "triangle-alert"
  })), /*#__PURE__*/React.createElement(Switch, {
    label: "Machine confirmed the count",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onConfirm
  }, "Confirm 240 units"))), /*#__PURE__*/React.createElement(Card, {
    title: "Activity"
  }, /*#__PURE__*/React.createElement(ActivityItem, {
    actor: "Deniz Aksoy",
    action: "confirmed",
    target: "240 units",
    meta: "Line B",
    time: "22 min"
  }), /*#__PURE__*/React.createElement(ActivityItem, {
    actor: "bssweb AI",
    action: "re-sequenced",
    target: "Line B",
    meta: "\u20AC12.4k avoided",
    time: "4 hr"
  }), /*#__PURE__*/React.createElement(ActivityItem, {
    actor: "Mert Kaya",
    action: "released",
    target: id,
    meta: "Plant BUR-02",
    time: "9 hr"
  }))));
}
function Approvals() {
  const [tab, setTab] = React.useState("Pending");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: 27,
      fontWeight: 600,
      letterSpacing: "-.032em"
    }
  }, "Approvals"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      label: "Pending",
      badge: 3
    }, {
      label: "Done"
    }],
    value: tab,
    onChange: setTab,
    variant: "underline"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, [["Overtime, 4 hrs", "Line B · Thursday", "€1,240", "warning"], ["Vendor expedite", "BRG-0088 · Crono", "€340", "brand"], ["Scrap write-off", "WO-40220 · 62 units", "€2,180", "danger"]].map(([t, m, v, tone]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "-.01em",
      color: "var(--text-primary)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-disabled)"
    }
  }, m)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, v)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    fullWidth: true
  }, "Approve"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    fullWidth: true,
    variant: "outline"
  }, "Decline"))))));
}
function Me() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Deniz Aksoy",
    size: "xl",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 21,
      fontWeight: 600,
      letterSpacing: "-.025em"
    }
  }, "Deniz Aksoy"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".06em",
      color: "var(--text-disabled)"
    }
  }, "BUR-4471 \xB7 SHIFT LEAD"))), /*#__PURE__*/React.createElement(Card, {
    title: "This shift"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginTop: 4
    }
  }, [["1,155", "units confirmed"], ["6", "scrap logged"], ["2", "exceptions cleared"], ["94%", "line utilisation"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: "-.03em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 12,
      color: "var(--text-tertiary)"
    }
  }, l))))), /*#__PURE__*/React.createElement(Card, {
    title: "Preferences"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Push exceptions to this device",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Haptic on confirmation",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Show costs in euro",
    defaultChecked: true
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true
  }, "Sign out"));
}
Object.assign(window, {
  Phone,
  SignIn,
  Floor,
  OrderDetail,
  Approvals,
  Me
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
const {
  Eyebrow,
  GradientText,
  SectionHeading,
  Card,
  Badge,
  Tag,
  Button,
  Icon,
  Divider,
  ScrollReveal,
  ParallaxLayer,
  Wordmark,
  BeamCanvas
} = window.BsswebDesignSystem_e84047;
const CASES = [{
  id: "zantic",
  client: "Zantic",
  sector: "Automotive components",
  year: "2025",
  title: "Four systems retired in eleven days",
  lines: ["ERP", "MES", "Finance"],
  figure: "−68%",
  figureLabel: "time to close",
  field: "linear-gradient(140deg,#0b5cff,#5b4bff 55%,#21d9c2)"
}, {
  id: "nutrican",
  client: "Nutrican",
  sector: "Food processing",
  year: "2025",
  title: "Batch genealogy that survives an audit",
  lines: ["MES", "MRP"],
  figure: "9 min",
  figureLabel: "full lot traceback",
  field: "linear-gradient(140deg,#0033b8,#0b5cff 50%,#6fa3ff)"
}, {
  id: "mercury",
  client: "Mercury Steel",
  sector: "Heavy fabrication",
  year: "2024",
  title: "Planning a mill that never stops",
  lines: ["MRP", "AI"],
  figure: "−31%",
  figureLabel: "stock write-off",
  field: "linear-gradient(140deg,#04060c,#123a8f 60%,#21d9c2)"
}, {
  id: "crono",
  client: "Crono",
  sector: "Precision machining",
  year: "2024",
  title: "One ledger across three countries",
  lines: ["ERP", "Finance"],
  figure: "12",
  figureLabel: "entities consolidated",
  field: "linear-gradient(140deg,#5b4bff,#0b5cff 60%,#0a1738)"
}];
function WorkIndex({
  onOpen
}) {
  const [filter, setFilter] = React.useState("All");
  const shown = filter === "All" ? CASES : CASES.filter(c => c.lines.includes(filter));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      paddingTop: 120,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement(BeamCanvas, {
    style: {
      position: "absolute",
      inset: 0,
      opacity: .75
    },
    intensity: 0.6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-protect-b)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: /*#__PURE__*/React.createElement(Eyebrow, {
      icon: "factory"
    }, "Customer work"),
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Plants that run ", /*#__PURE__*/React.createElement(GradientText, {
      serif: true
    }, "on bssweb")),
    body: "Four implementations, written up by the engineers who ran them. Numbers are the customers\u2019 own."
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 32
    }
  }, ["All", "ERP", "MRP", "MES", "AI", "Finance"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: filter === t,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement(ScrollReveal, {
    stagger: 80,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, shown.map(c => /*#__PURE__*/React.createElement("article", {
    key: c.id,
    onClick: () => onOpen(c.id),
    style: {
      cursor: "pointer",
      borderRadius: "var(--radius-panel)",
      overflow: "hidden",
      border: "1px solid var(--border-subtle)",
      background: "var(--surface-card)",
      transition: "var(--transition-surface)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "none";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 240,
      background: c.field,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--pattern-grid)",
      backgroundSize: "48px 48px",
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-protect-b)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      bottom: 20,
      display: "flex",
      alignItems: "baseline",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 56,
      lineHeight: 1,
      color: "#fff"
    }
  }, c.figure), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.72)"
    }
  }, c.figureLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, /*#__PURE__*/React.createElement("span", null, c.client), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, c.sector), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, c.year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: "-.028em",
      lineHeight: 1.12,
      textWrap: "balance"
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      alignItems: "center"
    }
  }, c.lines.map(l => /*#__PURE__*/React.createElement(Badge, {
    key: l,
    tone: l === "AI" ? "accent" : "brand"
  }, l)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      color: "var(--text-tertiary)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 17
  })))))))));
}
function CaseStudy({
  id,
  onBack
}) {
  const c = CASES.find(x => x.id === id) || CASES[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 460,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(ParallaxLayer, {
    depth: 0.14,
    style: {
      position: "absolute",
      inset: "-12% 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: c.field
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--pattern-grid)",
      backgroundSize: "64px 64px",
      opacity: .45
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-protect-b)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 1,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingBottom: 44
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      alignSelf: "flex-start",
      marginBottom: 24,
      background: "none",
      border: 0,
      color: "rgba(255,255,255,.75)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontSize: 13,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), "All work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.7)"
    }
  }, /*#__PURE__*/React.createElement("span", null, c.client), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, c.sector), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, c.year)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "16px 0 0",
      fontFamily: "var(--font-display)",
      fontSize: "clamp(38px,5.4vw,72px)",
      fontWeight: 600,
      letterSpacing: "-.042em",
      lineHeight: .96,
      color: "#fff",
      maxWidth: "18ch",
      textWrap: "balance"
    }
  }, c.title))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 64,
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22,
      position: "sticky",
      top: 100,
      alignSelf: "start"
    }
  }, [["Client", c.client], ["Sector", c.sector], ["Modules", c.lines.join(" · ")], ["Go-live", "11 days"], ["Sites", "3 plants, 2 countries"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, v))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    })
  }, "PDF")), /*#__PURE__*/React.createElement("article", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 40,
      maxWidth: "68ch"
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 22,
      lineHeight: 1.5,
      letterSpacing: "-.012em",
      color: "var(--text-primary)",
      textWrap: "pretty"
    }
  }, c.client, " ran planning in one system, execution in another and finance in a third. Month-end took nine days and every number was argued over first.")), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 14px",
      fontFamily: "var(--font-display)",
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: "-.025em"
    }
  }, "The problem"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--text-secondary)"
    }
  }, "Three plants, twelve legal entities and a scheduling spreadsheet that only one planner understood. Nothing was wrong with any single system \u2014 the cost sat in the seams between them. A scrap event on Line B took four days to reach the ledger, by which time the quote for the next order had already gone out at the old cost.")), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, [[c.figure, c.figureLabel], ["11 days", "to first live plant"], ["0", "parallel-run months"]].map(([v, l]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 40,
      lineHeight: 1,
      color: "var(--text-primary)"
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-disabled)"
    }
  }, l))))), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 14px",
      fontFamily: "var(--font-display)",
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: "-.025em"
    }
  }, "What we did"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--text-secondary)"
    }
  }, "We modelled the BOM on day one and ran it against six months of historical movements before anyone signed anything. The first plant went live on a Tuesday with no parallel run, because the event log had already been backfilled and reconciled against the old ledger to the cent.")), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 300,
      borderRadius: "var(--radius-panel)",
      background: c.field,
      position: "relative",
      overflow: "hidden",
      border: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--pattern-grid)",
      backgroundSize: "40px 40px",
      opacity: .5
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 12,
      fontSize: 12.5,
      color: "var(--text-disabled)"
    }
  }, "Placeholder field \u2014 no plant photography was supplied with the brief."))), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      paddingLeft: 26,
      borderLeft: "2px solid var(--blue-500)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontSize: 30,
      lineHeight: 1.3,
      letterSpacing: "-.01em",
      color: "var(--text-primary)"
    }
  }, "\u201CWe replaced four systems and a spreadsheet the plant manager kept on his desk. The spreadsheet was the hard one.\u201D"), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 18,
      fontSize: 13,
      color: "var(--text-tertiary)"
    }
  }, "Selin Duran \u2014 VP Operations, ", c.client))), /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 14px",
      fontFamily: "var(--font-display)",
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: "-.025em"
    }
  }, "Where it stands"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--text-secondary)"
    }
  }, "All three plants are live. Close runs in 4.2 hours. The planner who owned the spreadsheet now owns the exception queue, which is a better job and, she says, a quieter one.")))));
}
Object.assign(window, {
  WorkIndex,
  CaseStudy,
  CASES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CTABanner = __ds_scope.CTABanner;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.GradientText = __ds_scope.GradientText;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ActivityItem = __ds_scope.ActivityItem;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.BeamCanvas = __ds_scope.BeamCanvas;

__ds_ns.ParallaxLayer = __ds_scope.ParallaxLayer;

__ds_ns.ScrollReveal = __ds_scope.ScrollReveal;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
