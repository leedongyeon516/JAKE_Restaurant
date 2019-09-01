//
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuShowcase = document.querySelector(".menu-showcase");
const navItems = document.querySelectorAll(".nav-item");
const navItem1 = document.querySelector(".nav-item-1");
const navItem2 = document.querySelector(".nav-item-2");
const navItem3 = document.querySelector(".nav-item-3");
const navItem4 = document.querySelector(".nav-item-4");
const navItem5 = document.querySelector(".nav-item-5");
let showMenu = false;

//
menuBtn.addEventListener("click", toggleMenu);
navItem1.addEventListener("click", toggleMenu);
navItem2.addEventListener("click", toggleMenu);
navItem3.addEventListener("click", toggleMenu);
navItem4.addEventListener("click", toggleMenu);
navItem5.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    closeMenu();
  }
}

menuShowcase.addEventListener("click", function() {
  closeMenu();
});

function closeMenu() {
  menuBtn.classList.remove("close");
  menu.classList.remove("show");
  menuNav.classList.remove("show");
  navItems.forEach(item => item.classList.remove("show"));
  showMenu = false;
}
