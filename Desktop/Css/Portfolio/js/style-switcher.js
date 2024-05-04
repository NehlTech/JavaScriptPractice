/** =============== Toggle Switcher =============== */
/* ==================================================== */

const toggleSwitcher = document.querySelector(".style-switcher-toggler");
toggleSwitcher.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

/** =============== Hide Switcher On Scroll =============== */
/* ==================================================== */

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/** =============== Change Theme Colors =============== */
/* ==================================================== */
const changeStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  changeStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/** =============== Toggle Day and Night =============== */
/* ==================================================== */

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
