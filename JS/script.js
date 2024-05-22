let body = document.querySelector("#body");
let header = document.querySelector("#header");
let DLBtn = document.querySelector("#dl-btn");
let theme = document.querySelector(".theme");
let right = document.querySelector("#b-right");
let left = document.querySelector("#b-left");
const allTextElements = document.querySelectorAll('body, body *');

theme.addEventListener('click', () => {
    if (DLBtn.className == "fas fa-sun") {
        DLBtn.className = "fas fa-moon";
        dark();
    }
    else {
        DLBtn.className = "fas fa-sun";
        light();
    }
})

dark = () => {
    // allTextElements.forEach(element => {
    //     element.style.color = '#e2e2e2';
    // });
}

light = () => {

}