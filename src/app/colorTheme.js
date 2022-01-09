// if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
//   console.log("🎉 Dark mode is supported");
// }

const checkSystemPreferences = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

const setDarkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
};

const setLightMode = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
};

// checks system preferences and activates correct checkbox;
export function setColorScheme(e) {
  const toggle = document.getElementById("toggle");
  if (e.matches) {
    // Dark
    toggle.checked = true;
    setDarkMode();
  } else {
    // Light
    toggle.checked = false;
    setLightMode();
  }
}

// toggles theme based on user changes
toggle.addEventListener("change", (e) => {
  const isChecked = e.target.checked;
  isChecked ? setDarkMode() : setLightMode();
});

// check if there is a theme already  in local storage
export function checkAndSetTheme() {
  const existingTheme = localStorage.getItem("theme");
  if (existingTheme) {
    // if there is an existing theme, then set it
    document.documentElement.setAttribute("data-theme", existingTheme);
    if (existingTheme == "dark") {
      // if that existing theme is dark, check the box
      toggle.checked = true;
    } else {
      toggle.checked = false;
    }
  } else {
    // if there is no exsiting theme, then set it with system preferences
    setColorScheme(checkSystemPreferences);
  }
}
