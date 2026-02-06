const button = document.getElementById("theme-toggle");
const html = document.documentElement;

// Initialize theme based on system preference
if (!localStorage.getItem("theme")) {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  html.dataset.theme = systemPrefersDark ? "dark" : "light";
} else {
  html.dataset.theme = localStorage.getItem("theme");
}

button.addEventListener("click", () => {
  const current = html.dataset.theme;
  const next = current === "light" ? "dark" : "light";
  html.dataset.theme = next;
  localStorage.setItem("theme", next);
});
