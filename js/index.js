document.querySelector(".page").addEventListener("click",page);

function page(){
    window.location.href = "index.html";
}

document.querySelector(".options").addEventListener("click", shownav);

let navVisible = false;

function shownav(){
  if(!navVisible){
    document.querySelector(".nav-mobiles").style.display = "block";
    navVisible = true;
  }else{
    document.querySelector(".nav-mobiles").style.display = "none";
    navVisible = false;
  }
}

document.querySelector(".products").addEventListener("click",products);

function products(){
    window.location.href = "pages/products.html";
}

document.querySelector(".solutions").addEventListener("click", solutions);

function solutions(){
    window.location.href = "pages/solutions.html";
}

document.querySelector(".services").addEventListener("click",services);

function services(){
    window.location.href = "pages/services.html";
}

document.querySelector(".web-development").addEventListener("click",development);

function development(){
    window.location.href = "pages/web-development.html";
}

document.querySelector(".about-us").addEventListener("click",aboutUs);

function aboutUs(){
    window.location.href = "pages/about-us.html";
}


/* Funcion cambiar imagen */

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length -1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[slideIndex].style.display = 'block';
  currentSlide = slideIndex;
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

function autoSlide() {
  changeSlide(1);
}

setInterval(autoSlide, 6000); // Cambia de imagen cada 6 segundos

showSlide(currentSlide);



