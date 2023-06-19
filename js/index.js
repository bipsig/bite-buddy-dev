// This section ofJavascript deals with the Pre Loader and hence Decides the time for which the pre-loader shall be displayed when the page reloads
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 3000);
});



/* This section of Javascript deals with the Navigation Bar in the header section. It makes the navigtion bar responsive to window size and hence converting the horizontal navigation menu into a hamburger menu when the size of the window becomes small, say for Mobile screen. */
const header = document.querySelector('.header');
const scrollLink = document.querySelectorAll('.navbar a:not(:last-child)');
const hamburger = document.querySelector('.header .hamburger');
const navbar = document.querySelector('.header .navbar');

Array.from(scrollLink).map((link) => {
  link.addEventListener('click', (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
    navbar.classList.remove('show');
  });
});

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
});


/* This section of Javascript deals with the Carousel Section of our page, which automatically slide the slides of different foods. */
const slides = document.querySelectorAll('.carousel input[name="slides"]');
const thumbnails = document.querySelectorAll('.carousel__thumbnails label');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);
const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseenter', pauseSlide);
carousel.addEventListener('mouseleave', resumeSlide);

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    slides[currentSlide].checked = false;
    currentSlide = index;
    slides[currentSlide].checked = true;
  });
});

function nextSlide() {
  slides[currentSlide].checked = false;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].checked = true;
}

function pauseSlide() {
  clearInterval(slideInterval);
}

function resumeSlide() {
  slideInterval = setInterval(nextSlide, 3000);
}


