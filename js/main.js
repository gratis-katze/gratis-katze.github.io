// Besucherzähler: zählt nur Besuche in diesem Browser (kein Server nötig).
(function () {
  const el = document.getElementById("counter");
  if (!el) return;
  let n = 1;
  try {
    n = (parseInt(localStorage.getItem("visits"), 10) || 0) + 1;
    localStorage.setItem("visits", n);
  } catch (e) {}
  el.textContent = String(n).padStart(6, "0");
})();
