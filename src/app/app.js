const toggle = document.getElementById("toggle");
const checkSystemPreferences = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

const setDarkMode = () => {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  localStorage.setItem("colorMode", "dark");
};

const setLightMode = () => {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  localStorage.setItem("colorMode", "light");
};

// checks and uses system's theme, activates checkbox;
const setColorScheme = (e) => {
  if (e.matches) {
    // Dark
    toggle.checked = true;
    console.log("dark mode");
  } else {
    // Light
    toggle.checked = false;
    console.log("light mode");
  }
};

setColorScheme(checkSystemPreferences);
checkSystemPreferences.addEventListener("change", setColorScheme);

// toggles theme based on user changes
toggle.addEventListener("input", (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    setDarkMode();
  } else {
    setLightMode();
  }
});
