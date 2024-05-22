let username = document.querySelector("#userName");
let password = document.querySelector("#passWord");
let errorBox = document.querySelector(".error");
let h1 = document.querySelector('#error-text');
let i = document.querySelector('#i');

function login() {
    let user = username.value;
    let pass = password.value;

    if (user.length < 8 || pass.length < 8) {
        errorBox.style.display = "flex";
        h1.textContent = "نام کاربری یا رمز عبور شما کمتر از 8 کارکتر است";

    } else {
        errorBox.style.display = "none";
    }
    setTimeout(() => {
        errorBox.style.display = "none";
    }, 5000);
}

function p() {
    if (i.className == "far fa-eye") {
        password.setAttribute("type", "password")
        i.className = "far fa-eye-slash";
    } else {
        password.setAttribute("type", "text")
        i.className = "far fa-eye";
    }

}