/* Mobil uyum katmanı — sayfa mantığından bağımsız.
   1) Viewport'tan geniş mockup/tablo bloklarını yatay kaydırılabilir sarmalayıcıya alır.
   2) Site navigasyonunu tam ekran accordion menü olarak enjekte eder (≤1080px).
   Sayfa içeriğine dokunmaz; yalnızca taşan blokları sarar. */
(function () {
  var NAV = [
    { label: "Platform", items: [
      ["Modüller", "Platform - Moduller"], ["Ürün ağacı", "Platform - Urun Agaci"],
      ["Maliyet", "Platform - Maliyet"], ["Otomasyon", "Platform - Otomasyon"],
      ["Mobil barkod", "Platform - Mobil Barkod"], ["Yönetici dashboard", "Platform - Yonetici Dashboard"],
      ["Ölçeklenebilirlik", "Platform - Olceklenebilirlik"], ["Güvenlik", "Platform - Guvenlik"], ["GxP", "Platform - GxP"] ] },
    { label: "Çözümler", items: [
      ["ERP", "Cozum - ERP"], ["MES", "Cozum - MES"], ["MRP", "Cozum - MRP"],
      ["Otomasyon", "Cozum - Otomasyon"], ["Bulut sunucu", "Cozum - Bulut Sunucu"],
      ["Sektöre özel", "Cozum - Sektore Ozel"], ["Sektöre göre", "Cozum - Sektore Gore"],
      ["YZ finansal analiz", "Cozum - YZ Finansal Analiz"] ] },
    { label: "Kullanım", items: [
      ["Üretim planlama", "Kullanim - Uretim Planlama"], ["İzlenebilirlik", "Kullanim - Izlenebilirlik"],
      ["Kalite", "Kullanim - Kalite"], ["WMS", "Kullanim - WMS"], ["SCM", "Kullanim - SCM"] ] },
    { label: "Şirket", items: [
      ["Hakkımızda", "Sirket - Hakkimizda"], ["Kaynaklar", "Sirket - Kaynaklar"], ["İletişim", "Sirket - Iletisim"] ] }
  ];
  var FONT = "'Inter Tight',-apple-system,BlinkMacSystemFont,'SF Pro Text','SF Pro Display',system-ui,sans-serif";

  function href(base) {
    // yayın kopyasında dosya adları sadeleştirilmiş; hangi biçim varsa ona bağlan
    if (document.currentScript && /\.dc\.html/.test(location.pathname)) return base + ".dc.html";
    if (/\.dc\.html/.test(location.pathname)) return base + ".dc.html";
    return base.toLowerCase()
      .replace(/ı/g, "i").replace(/İ/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
      .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
      .replace(/\s*-\s*/g, "-").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + ".html";
  }

  /* ---------- 1) taşan blokları kaydırılabilir yap ---------- */
  function fitWide() {
    if (window.innerWidth > 700) return;
    var vw = window.innerWidth, wrapped = 0;
    var conts = document.querySelectorAll('section, footer');
    for (var i = 0; i < conts.length && wrapped < 8; i++) {
      var kids = conts[i].querySelectorAll(':scope > div, :scope > div > div, :scope > div > div > div');
      for (var j = 0; j < kids.length && wrapped < 8; j++) {
        var el = kids[j];
        if (el.dataset.mobFit || el.closest("[data-mob-scroll]")) continue;
        var cs = getComputedStyle(el);
        if (cs.position === "absolute" || cs.position === "fixed") continue;
        var r = el.getBoundingClientRect();
        if (r.width <= vw + 8) continue;
        // 3D/ölçek transformları mobilde düzleştirilir — dürüst yerleşim
        if (cs.transform !== "none") { el.style.transform = "none"; }
        if (getComputedStyle(el.parentNode).perspective !== "none") { el.parentNode.style.perspective = "none"; }
        r = el.getBoundingClientRect();
        if (r.width <= vw + 8) { el.dataset.mobFit = "1"; continue; }
        el.dataset.mobFit = "1";
        var wrap = document.createElement("div");
        wrap.setAttribute("data-mob-scroll", "");
        wrap.style.cssText = "overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;margin-inline:-18px;padding-inline:18px;scrollbar-width:none;";
        el.parentNode.insertBefore(wrap, el);
        wrap.appendChild(el);
        el.style.width = "max-content";
        el.style.maxWidth = "none";
        wrapped++;
      }
    }
  }

  /* ---------- 2) mobil menü ---------- */
  function buildNav() {
    if (document.querySelector("[data-mnav-btn],[data-mnav-injected]")) return;   // zaten var
    var head = document.querySelector("header");
    if (!head) return;
    var pill = head.querySelector("div > div");
    if (!pill) return;

    /* mobilde masaüstü CTA'yı gizle: pill içindeki, logo olmayan son bağlantı */
    var links = pill.querySelectorAll("a");
    if (links.length > 1) {
      var cta = links[links.length - 1];
      if (!cta.querySelector("span[style*='border-radius']") ) cta.setAttribute("data-desktop-cta-inner", "");
    }

    var btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("data-mnav-injected", "");
    btn.setAttribute("aria-label", "Menü");
    btn.style.cssText = "display:none;align-items:center;justify-content:center;width:44px;height:44px;flex:none;margin-left:auto;border:1px solid rgba(255,255,255,.7);border-radius:999px;background:linear-gradient(150deg,rgba(255,255,255,.72),rgba(255,255,255,.46));backdrop-filter:blur(18px) saturate(170%);-webkit-backdrop-filter:blur(18px) saturate(170%);color:#0a1424;cursor:pointer;";
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    pill.appendChild(btn);

    var panel = document.createElement("div");
    panel.setAttribute("data-mnav-injected-panel", "");
    panel.style.cssText = "position:fixed;inset:0;z-index:99;display:none;flex-direction:column;padding:92px 18px 32px;background:#ffffff;overflow-y:auto;font-family:" + FONT + ";";
    var html = "";
    NAV.forEach(function (g, gi) {
      html += '<div style="border-bottom:1px solid rgba(13,27,46,.08);">' +
        '<button type="button" data-acc="' + gi + '" style="display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;min-height:56px;padding:0 4px;border:0;background:transparent;color:#0a1424;font-family:inherit;font-size:17px;font-weight:600;letter-spacing:-.02em;text-align:left;cursor:pointer;">' +
        g.label + '<span data-chev style="color:#55637a;font-size:15px;">+</span></button>' +
        '<div data-acc-body="' + gi + '" style="display:none;flex-direction:column;gap:2px;padding:2px 4px 16px;">' +
        g.items.map(function (it) {
          return '<a href="' + href(it[1]) + '" style="display:flex;align-items:center;min-height:48px;padding:0 6px;border-radius:12px;color:#4c5a70;font-size:15px;font-weight:500;text-decoration:none;">' + it[0] + '</a>';
        }).join("") + "</div></div>";
    });
    html += '<a href="' + href("Sirket - Iletisim") + '" style="display:inline-flex;flex:none;align-items:center;justify-content:center;min-height:52px;margin-top:24px;border-radius:999px;background:#0b5cff;color:#fff;font-size:16px;font-weight:600;text-decoration:none;">Demo Talep Edin</a>';
    panel.innerHTML = html;
    document.body.appendChild(panel);

    var open = false;
    btn.addEventListener("click", function () {
      open = !open;
      panel.style.display = open ? "flex" : "none";
      document.documentElement.style.overflow = open ? "hidden" : "";
      btn.innerHTML = open
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    });
    panel.addEventListener("click", function (e) {
      var b = e.target.closest("[data-acc]");
      if (!b) return;
      var body = panel.querySelector('[data-acc-body="' + b.dataset.acc + '"]');
      var vis = body.style.display === "flex";
      panel.querySelectorAll("[data-acc-body]").forEach(function (x) { x.style.display = "none"; });
      panel.querySelectorAll("[data-chev]").forEach(function (x) { x.textContent = "+"; });
      if (!vis) { body.style.display = "flex"; b.querySelector("[data-chev]").textContent = "–"; }
    });

    var st = document.createElement("style");
    st.textContent = "@media (max-width:1080px){[data-mnav-injected]{display:inline-flex !important;margin-left:auto !important;}" +
      "header [data-desktop-nav],header nav{display:none !important;}" +
      "header [data-desktop-cta-inner]{display:none !important;}}" +
      "@media (min-width:1081px){[data-mnav-injected],[data-mnav-injected-panel]{display:none !important;}}" +
      "@media (max-width:600px){a[style*=\"border-radius:999px\"],button[style*=\"border-radius:999px\"]{min-height:44px;}" +
      "[data-mob-scroll]::-webkit-scrollbar{display:none;}}";
    document.head.appendChild(st);
  }

  function boot() {
    try {
      var extra = document.querySelectorAll("[data-mnav-injected]");
      for (var i = 1; i < extra.length; i++) extra[i].remove();
      var panels = document.querySelectorAll("[data-mnav-injected-panel]");
      for (var j = 1; j < panels.length; j++) panels[j].remove();
      buildNav();
    } catch (e) {}
    try { fitWide(); } catch (e) {}
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  var tries = 0;
  var iv = setInterval(function () { boot(); if (++tries > 12) clearInterval(iv); }, 500);
  window.addEventListener("resize", function () { fitWide(); });
})();
