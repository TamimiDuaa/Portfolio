import {WorkHoursRegister} from "/WorkHoursRegister";
$(document).ready(function( ){
    $('.toggle-collapse').click(function(){
    $('.navbar-ul').toggleClass("collapse");
    $('.nav-item').toggleClass("nav-item-col");
    })
})
function install(){
    window.open("https://drive.google.com/file/d/1bnyahTK3PeX25pSh-2LLwEh6JGOjylPh/view?usp=sharing");
}
const scrollAnimations = document.querySelectorAll(".sk");

function handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    scrollAnimations.forEach((element) => {
        const elementOffset = element.getBoundingClientRect().top;

        if (elementOffset < windowHeight ) {
            element.classList.add("animate");
        }
    });
}

window.addEventListener("scroll", handleScroll);


