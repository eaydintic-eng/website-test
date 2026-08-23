/* Cursor'a tepki veren ışık — statik logo, CSS radial gradient + maske.
   Logo hiç hareket etmez; yalnız mavi yansımanın konumu ve yoğunluğu değişir. */
(function () {
  var REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function wire(wrap) {
    if (wrap.dataset.litWired) return;
    wrap.dataset.litWired = "1";
    var zone = wrap.closest("section") || wrap;
    var tx = 50, ty = 40, tl = 0;          // hedef
    var cx = 50, cy = 40, cl = 0;          // mevcut (damped)
    var raf = 0, idle = 0;

    function onMove(e) {
      var r = wrap.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 100;
      ty = ((e.clientY - r.top) / r.height) * 100;
      // logodan uzaklaştıkça yoğunluk düşer
      var dx = Math.max(0, Math.abs(tx - 50) - 50) / 60;
      var dy = Math.max(0, Math.abs(ty - 50) - 50) / 60;
      var far = Math.min(1, Math.hypot(dx, dy));
      tl = 1 - far * 0.85;
      tx = Math.max(-40, Math.min(140, tx));
      ty = Math.max(-40, Math.min(140, ty));
      idle = 0;
      if (!raf) loop();
    }
    function onLeave() { tl = 0; if (!raf) loop(); }

    function loop() {
      var k = REDUCED ? 0.4 : 0.12;
      cx += (tx - cx) * k;
      cy += (ty - cy) * k;
      cl += (tl - cl) * (k * 0.8);
      wrap.style.setProperty("--mx", cx.toFixed(2) + "%");
      wrap.style.setProperty("--my", cy.toFixed(2) + "%");
      wrap.style.setProperty("--dx", ((cx - 50) * 1.5).toFixed(1) + "px");
      wrap.style.setProperty("--dy", ((cy - 50) * 1.5).toFixed(1) + "px");
      wrap.style.setProperty("--lit", cl.toFixed(3));
      var settled = Math.abs(tx - cx) < 0.1 && Math.abs(ty - cy) < 0.1 && Math.abs(tl - cl) < 0.002;
      if (settled && ++idle > 8) { raf = 0; return; }
      raf = requestAnimationFrame(loop);
    }

    zone.addEventListener("pointermove", onMove, { passive: true });
    zone.addEventListener("pointerleave", onLeave, { passive: true });
    loop();
  }

  function boot() { document.querySelectorAll("[data-atom-light]").forEach(wire); }
  boot();
  new MutationObserver(boot).observe(document.documentElement, { childList: true, subtree: true });
})();
