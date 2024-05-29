const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

document.querySelector(".sign-up-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('signup-username');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    let isValid = true;

    if (!usernameInput.value.trim()) {
        usernameError.innerText = 'Please enter your username';
        isValid = false;
    } else {
        usernameError.innerText = '';
    }

    if (!emailInput.value.trim()) {
        emailError.innerText = 'Please enter your email';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.innerText = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.innerText = '';
    }

    if (!passwordInput.value.trim()) {
        passwordError.innerText = 'Please enter your password';
        isValid = false;
    } else if (passwordInput.value.trim().length < 6) {
        passwordError.innerText = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        passwordError.innerText = '';
    }

    if (isValid) {
    }
});
document.querySelector(".sign-in-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('signin-username');
    const passwordInput = document.getElementById('signin-password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    let isValid = true;

    if (!usernameInput.value.trim()) {
        usernameError.innerText = 'Please enter your username';
        isValid = false;
    } else {
        usernameError.innerText = '';
    }

    if (!passwordInput.value.trim()) {
        passwordError.innerText = 'Please enter your password';
        isValid = false;
    } else {
        passwordError.innerText = '';
    }

    if (isValid) {
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
