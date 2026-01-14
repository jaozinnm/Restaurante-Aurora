const burger = document.getElementById("burger");
const navMobile = document.getElementById("navMobile");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function toggleMenu(forceClose = false) {
  const isOpen = navMobile.classList.contains("open");
  const next = forceClose ? false : !isOpen;

  navMobile.classList.toggle("open", next);
  burger.setAttribute("aria-expanded", String(next));
}

burger?.addEventListener("click", () => toggleMenu());

navMobile?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(true));
});

// Fecha ao clicar fora
document.addEventListener("click", (e) => {
  if (!navMobile.classList.contains("open")) return;
  const clickedInside = navMobile.contains(e.target) || burger.contains(e.target);
  if (!clickedInside) toggleMenu(true);
});
