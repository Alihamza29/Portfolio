// Header Scroll
let nav = document.querySelector(".navbar");
window. onscroll = function () {
if(document.documentElement.scrollTop > 20){
nav.classList.add("header-scrolled");
}else{
nav.classList.remove("header-scrolled");

}
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar. forEach(function(a){
a.addEventListener("click", function(){
navCollapse.classList.remove("show");
})
})



// main.js
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      duration: 1200,
      offset: 100,
      once: true,
      easing: 'ease-in-out',
    });
  });
  