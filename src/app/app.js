console.log("boooouurns");

const darkToggle = document.getElementById("dark");
const lightToggle = document.getElementById("light");

const setDarkMode = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
};

const setLightMode = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
};

//  check system preferences and load & toggle correct theme
const getUserPreference = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// get theme from local storage
const getThemeFromStorage = () => {
  return localStorage.getItem("theme");
};

const radioBtns = document.querySelectorAll(".toggle input");
radioBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    darkToggle.checked ? setDarkMode() : setLightMode();
  });
});

// check if there's an existing theme from local storage and load it, otherwise, use system preferences
const checkAndLoadTheme = () => {
  let currentTheme = getThemeFromStorage() || getUserPreference();
  currentTheme == "dark" ? darkToggle.click() : lightToggle.click();
};

// event listener for change to prefers-color-scheme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    event.matches ? darkToggle.click() : lightToggle.click();
  });

checkAndLoadTheme();
