const button = document.getElementById("theme-toggle");
const html = document.documentElement;
const themeMeta = document.getElementById("theme-color-meta");

// Initialize theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.dataset.colorMode = savedTheme;
} else {
  html.dataset.colorMode = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
}

// Update meta theme color dynamically
function updateThemeColor() {
  const color = html.dataset.colorMode === "dark" ? "#0d1117" : "#ffffff";
  themeMeta.setAttribute("content", color);
}

// Initial run
updateThemeColor();

// Toggle on click
button.addEventListener("click", () => {
  html.dataset.colorMode =
    html.dataset.colorMode === "light" ? "dark" : "light";
  localStorage.setItem("theme", html.dataset.colorMode);
  updateThemeColor();
});
