const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const email = document.getElementById("email");
const signIn = document.getElementById("signin");
const passwordInfo = document.getElementById("password-info");

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});

password.addEventListener('focus', iconDisplay);
password.addEventListener('focus', passwordInformation);

function iconDisplay() {
    if (!(onfocus)) {
        togglePassword.classList.add("icon-display");
    }
}

function passwordInformation() {
    passwordInfo.innerHTML = "Password should be at least 8 characters";
}

email.addEventListener('input', changeButtonColor);

function changeButtonColor() {
    signIn.classList.add("button-active-color")
}

signIn.addEventListener('click', signinSuccess);

function signinSuccess(e) {
    e.preventDefault();

    if (email.value && password.value) {
        window.location.href = 'index.html';
    } else {
        alert("Email and Password must be filled");
    }
}