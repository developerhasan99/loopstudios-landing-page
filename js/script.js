const toggleNav = document.querySelector("#toggle-nav");
const closeNav = document.querySelector("#close-nav");
const mobileNav = document.querySelector("#mobile-nav");

toggleNav.addEventListener("click", function () {
  mobileNav.style.left = "0";
});

closeNav.addEventListener("click", function () {
  mobileNav.style.left = "100%";
});
