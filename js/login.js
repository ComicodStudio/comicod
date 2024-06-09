let eye = document.querySelector('#eye')
let pass = document.querySelector('#password')



eye.addEventListener('click', () => {
    if(pass.getAttribute('type') == "password") {
        eye.setAttribute('src', 'assets/icon/eye-slash.svg')
        pass.setAttribute('type', 'text')
    } else {
        eye.setAttribute('src', 'assets/icon/eye.svg')
        pass.setAttribute('type', 'password')
    }
})