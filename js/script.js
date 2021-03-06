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
    if (!(email.value && password.value)) {
        alert("Email and Password must be filled");
    }
}

function addModalFunction() {
    if (email.value && password.value) {
        successModal.innerHTML = `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl modal-dialog-centered">
                                    <div class="modal-content border-0">
                                        <div class="modal-header px-3 pt-3 border-0" style="background-color: #3AB418; border-color: #3AB418 !important;">
                                            <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-title sign-up-success-head text-center" style="background-color: #3AB418; border-color: #3AB418 !important;">
                                            <div class="sign-up-title text-white pb-3">
                                                <h3 class="display-6">Awesome!</h3>
                                            </div>
                                        </div>
                                        <div class="modal-body">
                                            <div class="sign-up-success-content text-center">
                                                <div class="sign-up-image mx-auto">
                                                    <img src="img/sign-up-success.png" class="img-fluid" alt="Sign Up Success">
                                                </div>
                                                <div class="sign-up-success-info pb-lg-3 pt-2">
                                                    <p class="mx-2" style="color: #555;">Your account has been successfully created!</p>
                                                </div>
                                                <div class="sign-up-success-button mb-lg-5 mb-md-4 mb-4">
                                                    <a href="home.html" class="text-decoration-none text-center fs-lg-5 btn btn-primary py-2 mx-auto w-md-50" style="background-color: #2776EA; border-color: #2776EA;">Get Started</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>`;
    }
}