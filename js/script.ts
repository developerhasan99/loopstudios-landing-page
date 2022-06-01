const toggleNav = document.querySelector("#toggle-nav") as HTMLButtonElement;
const closeNav = document.querySelector("#close-nav") as HTMLButtonElement;
const mobileNav = document.querySelector("#mobile-nav") as HTMLDivElement;

toggleNav.addEventListener("click", function () {
  mobileNav.style.left = "0";
});

closeNav.addEventListener("click", function () {
  mobileNav.style.left = "100%";
});
