document.getElementById("year").textContent = new Date().getFullYear();

// Navigation: aktuellen Abschnitt markieren
const links = [...document.querySelectorAll(".rail ul a")];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) =>
      a.toggleAttribute("aria-current", a.hash === "#" + e.target.id)
    );
    links.forEach((a) => {
      if (a.getAttribute("aria-current") !== null) a.setAttribute("aria-current", "true");
    });
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("section.block").forEach((s) => observer.observe(s));
