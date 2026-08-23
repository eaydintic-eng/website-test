/* Reveal bootstrap — motion kütüphanesinden bağımsız güvenlik ağı.
   .reveal öğeleri görünür alana girdiğinde açılır; hiçbir koşulda içerik gizli kalmaz. */
(function () {
  var io, seen = (typeof WeakSet === "function") ? new WeakSet() : null;
  function show(el) {
    el.classList.add("in");
    el.style.opacity = "1";
    el.style.transform = "none";
  }
  function all() {
    var l = document.querySelectorAll(".reveal");
    for (var i = 0; i < l.length; i++) show(l[i]);
  }
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
    setTimeout(all, 300);
    setTimeout(all, 1500);
    return;
  }
  function ensure() {
    if (!io) {
      io = new IntersectionObserver(function (es) {
        for (var i = 0; i < es.length; i++) {
          if (es[i].isIntersecting) { show(es[i].target); io.unobserve(es[i].target); }
        }
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    }
    var l = document.querySelectorAll(".reveal:not(.in)");
    for (var i = 0; i < l.length; i++) {
      if (seen) { if (seen.has(l[i])) continue; seen.add(l[i]); }
      io.observe(l[i]);
    }
  }
  var t = setInterval(ensure, 400);
  setTimeout(function () { clearInterval(t); ensure(); }, 10000);
  ensure();
})();
