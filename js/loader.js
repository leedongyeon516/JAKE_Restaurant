//
const loader = document.querySelector(".loader");
const loaderMain = document.querySelector(".loader-main");
const loaderLink = document.querySelector(".view-btn");

function init() {
  setTimeout(() => {
    loaderMain.style.display = "block";
    setTimeout(() => (loader.style.opacity = 0), 50);
    setTimeout(() => (loaderMain.style.opacity = 1), 50);
  }, 1500);
}

init();
