const btnDarkMode = document.getElementById("dark-mode-btn");

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkMode.classList.add("dark-mode-btn_active");
  document.body.classList.add("dark");
}

if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn_active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode-btn_active");
  document.body.classList.remove("dark");
}

btnDarkMode.addEventListener("click", () => {
  btnDarkMode.classList.toggle("dark-mode-btn_active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
});
