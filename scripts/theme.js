const themeSelect = document.getElementById("theme-select");
const html = document.documentElement;
const themeMeta = document.getElementById("theme-color-meta");

// Detect system preference
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

// Initialize
const savedTheme = localStorage.getItem("theme") || "system";
themeSelect.value = savedTheme;
applyTheme(savedTheme);

themeSelect.addEventListener("change", () => {
  const selected = themeSelect.value;
  localStorage.setItem("theme", selected);
  applyTheme(selected);
});

function applyTheme(mode) {
  if (mode === "system") {
    html.dataset.colorMode = systemPrefersDark ? "dark" : "light";
  } else {
    html.dataset.colorMode = mode;
  }

  const themeColor = html.dataset.colorMode === "dark" ? "#0d1117" : "#ffffff";
  themeMeta.setAttribute("content", themeColor);
}
