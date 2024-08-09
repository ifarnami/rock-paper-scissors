const checkboxEl = document.getElementById("checkbox");
const themeIconEl = document.getElementById("checkbox-icon");

window.addEventListener("DOMContentLoaded", () => {
  checkThemeOnFirstRender(checkboxEl);
});

themeIconEl.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  toggleThemeInLocalStorage();
});

const toggleThemeInLocalStorage = () => {
  const isDark = localStorage.getItem("dark-mode");

  if (isDark === null || isDark === "false") {
    localStorage.setItem("dark-mode", "true");
    return;
  } else {
    localStorage.setItem("dark-mode", "false");
  }
};

const checkThemeOnFirstRender = (toggle) => {
  if (localStorage.getItem("dark-mode") === "true") {
    toggle.checked = true;
    document.documentElement.classList.add("dark");
  }
};
