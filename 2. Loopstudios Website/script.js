// Updating the year in the bottom of the landing page
const year = document.querySelector(".year");
year.innerText = new Date().getFullYear();

const hamburgerButton = document.querySelector("#hamburgerbtn");
const mobileMenu = document.querySelector(".mobile-menu");
hamburgerButton.addEventListener("click", (e) => {
  hamburgerButton.classList.toggle("open");
  Array.from(hamburgerButton.children).forEach((element) => {
    element.style.background = "#000";
  });
  mobileMenu.style.right = "0";
  if (!hamburgerButton.classList.contains("open")) {
    mobileMenu.style.right = "";
    Array.from(hamburgerButton.children).forEach((element) => {
      element.style.background = "#fff";
    });
  }
});
