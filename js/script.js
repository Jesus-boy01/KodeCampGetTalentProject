const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const email = document.getElementById("email");
const signIn = document.getElementById("signin");
const successModal = document.getElementById("success-modal");

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});

password.addEventListener('focus', iconDisplay);
password.addEventListener('input', changeButtonColor);
password.addEventListener('input', addModalFunction);

function iconDisplay() {
    if (!(onfocus)) {
        togglePassword.classList.add("icon-display");
    }
}

email.addEventListener('input', changeButtonColor);
email.addEventListener('input', addModalFunction);

function changeButtonColor() {
    signIn.classList.add("button-active-color")
}

signIn.addEventListener('click', signinSuccess);

function signinSuccess(e) {
    e.preventDefault();

    formValidation();
}

function formValidation() {
    if (email.value && password.value) {
        // modalFunction();
    } else {
        alert("Email and Password must be filled");
    }
}

function addModalFunction() {
    successModal.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-xl">
                                <div class="modal-content border-0">
                                    <div class="modal-title password-reset-success-head text-center" style="background-color: #3AB418; border-color: #3AB418 !important;">
                                        <div class="password-reset-title text-white py-3">
                                            <h3 class="display-6">Done!</h3>
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <div class="password-reset-success-content text-center">
                                            <div class="password-reset-image py-3 mx-auto">
                                                <img src="img/password-reset-success.png" class="img-fluid" alt="Password Reset Success">
                                            </div>
                                            <div class="password-reset-info pb-lg-3">
                                                <p class="mx-2" style="color: #555;">Email sent, password reset successful.</p>
                                            </div>
                                            <div class="password-reset-button mb-lg-5 mb-md-4 mb-4">
                                                <a href="sign-in.html" class="text-decoration-none text-center fs-lg-5 btn btn-primary py-2 mx-auto" style="width: 20%; background-color: #2776EA; border-color: #2776EA;">Sign In</a>
                                                <a href="sign-up-success.html">Test</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>`;
}