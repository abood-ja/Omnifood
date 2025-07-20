// set current year
const year = document.querySelector(".year");
currentYear = new Date().getFullYear();
year.textContent = currentYear;
////////////////////////////////////////////////////////////////////////////////////
// implementing the mobile navigation functionality
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
