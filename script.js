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
///////////////////////////////////////////////////////////////////////////////
//smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const header = link.getAttribute("href");
    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector("href");
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});
////////////////////////////
//    Sticky navigation
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px", // the same as the navigation height
  }
);
obs.observe(sectionHero);
