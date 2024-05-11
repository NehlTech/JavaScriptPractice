/** =============== Typing Animation =============== */
/* ==================================================== */

var typed = new Typed(".typing", {
  strings: [
    " ",
    "Web Designer",

    "Backend Developer",
    "Educator",
    "Software Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/** =============== Aside =============== */
/* ==================================================== */

const nav = document.querySelector(".nav");
navList = nav.querySelectorAll("li");
totalNavList = navList.length;
allSection = document.querySelectorAll(".section");
totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", (event) => {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // allSection[j].classList.add("back-section");
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    event.target.classList.add("active");
    // this.classList.add("active").bind(this);
    showSection(event.target);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

//Remove back Section
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  // console.log(element.getAttribute("href").split("#"));
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

// function updateNav(element) {
//   for (let i = 0; i < totalNavList; i++) {
//     navList[i].querySelector("a").classList.remove("active");
//     const target = element.getAttribute("href").split("#")[1]; // Corrected line
//     const navHref = navList[i]
//       .querySelector("a")
//       .getAttribute("href")
//       .split("#")[1]; // Corrected line
//     if (target === navHref) {
//       // Corrected line
//       navList[i].querySelector("a").classList.add("active");
//     }
//   }
// }

document.querySelector(".hire-me").addEventListener("click", (e) => {
  const sectionIndex = e.target.getAttribute("data-section-index");
  showSection(e.target);
  updateNav(e.target);
  removeBackSection();
  addBackSection(sectionIndex);
});
/** =============== Aside Toggler =============== */
/* ==================================================== */

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
