//
$(".nav-bar a").on("click", function(e) {
  if (this.has !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      1500
    );
  }
});

$(".menu a").on("click", function(e) {
  if (this.has !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      1500
    );
  }
});

//
const cardLink1 = document.querySelector(".card-link-1");
const moreContent1 = document.querySelector(".more-content-1");

cardLink1.addEventListener("click", toggleDisplay);
cardLink1.addEventListener("click", toggleOption);

function toggleDisplay() {
  moreContent1.classList.toggle("display");
}

function toggleOption() {
  if (cardLink1.innerHTML === "Find Out More") {
    cardLink1.innerHTML = "Read Less";
  } else {
    cardLink1.innerHTML = "Find Out More";
  }
}

//
const slides = document.querySelectorAll(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
//const stopBtn1 = document.querySelector("#stop-btn-1");
//const stopBtn2 = document.querySelector("#stop-btn-2");
let automatic = true;
const interval = 5000;
let slideInterval;

/*
stopBtn1.addEventListener("click", toggleStopBtn);
stopBtn2.addEventListener("click", toggleStopBtn);

function toggleStopBtn() {
  automatic = !automatic;
}*/

//
const slide1 = document.querySelector(".slide-1");
const slide5 = document.querySelector(".slide-5");
const buttons = document.querySelector(".buttons");

const prevSlide = () => {
  const active = document.querySelector(".active");

  active.classList.remove("active");

  if (active !== slide1) {
    active.previousElementSibling.classList.add("active");
  } else {
    slide5.classList.add("active");
  }

  setTimeout(() => {
    active.classList.remove("active");
  }, 200);
};

const nextSlide = () => {
  const active = document.querySelector(".active");

  active.classList.remove("active");

  if (active.nextElementSibling !== buttons) {
    active.nextElementSibling.classList.add("active");
  } else {
    slide1.classList.add("active");
  }

  setTimeout(() => {
    active.classList.remove("active");
  }, 200);
};

prev.addEventListener("click", e => {
  prevSlide();
  if (automatic) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});

next.addEventListener("click", e => {
  nextSlide();
  if (automatic) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});

if (automatic) {
  slideInterval = setInterval(nextSlide, interval);
}

//
const contactFormBtn = document.querySelector(".contact-form-btn");
const contactFormLine = document.querySelector(".contact-form-line");
const moreInfo = document.querySelector(".more-info");
const leftImage = document.querySelector(".modified-card-img-1");
const contactForm = document.querySelector(".contact-form");

contactFormBtn.addEventListener("click", changeLineShape);

function changeLineShape() {
  if (contactFormBtn.innerHTML === "Message") {
    contactFormBtn.innerHTML = "Submit";
  } else {
    contactFormBtn.innerHTML = "Message";
  }

  contactFormLine.classList.toggle("change");
  moreInfo.classList.toggle("change");
  leftImage.classList.toggle("change");
  contactForm.classList.toggle("change");
}

const gallerySection = document.querySelector(".gallery-section");

function changeBgColor() {
  if (this.scrollY > this.innerHeight * 3.5) {
    gallerySection.classList.add("color-active");
  } else {
    gallerySection.classList.remove("color-active");
  }
}

window.addEventListener("scroll", changeBgColor);
