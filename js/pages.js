document.querySelector(".page").addEventListener("click",page);

function page(){
    window.location.href = "../index.html";
}

document.querySelector(".products").addEventListener("click",products);

function products(){
    window.location.href = "../pages/products.html";
}

document.querySelector(".solutions").addEventListener("click", solutions);

function solutions(){
    window.location.href = "solutions.html";
}

document.querySelector(".services").addEventListener("click",services);

function services(){
    window.location.href = "services.html"
}

document.querySelector(".web-development").addEventListener("click",development);

function development(){
    window.location.href = "web-development.html";
}

document.querySelector(".about-us").addEventListener("click",aboutUs);

function aboutUs(){
    window.location.href = "about-us.html"
}

