const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;



// Adding a slight animation on hover for new skills
document.querySelectorAll(".new-skill-card").forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
  });

  card.addEventListener("mouseout", () => {
    card.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.2)";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Ensure the loader exists
  if (!document.querySelector("#loader")) {
      console.error("Error: #loader element not found!");
      return;
  }

  var tl = gsap.timeline();

  tl.from("#loader h3", {
      x: 50,
      opacity: 0,
      duration: 1.3,
      stagger: 0.1
  })
  .to("#loader h3", {
      opacity: 0,
      x: -40,
      duration: 1,
      stagger: 0.1
  })
  .to("#loader", {
      opacity: 0,
      duration: 0.5
  })
  .set("#loader", { display: "none" }); // Hide loader after animation
});
console.log(document.querySelectorAll("#loader h3"));

