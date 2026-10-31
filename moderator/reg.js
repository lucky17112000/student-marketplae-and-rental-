const form = document.getElementById("regForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from submitting

    clearErrors();

    // Get values
    let name = document.getElementById("fullname").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let terms = document.getElementById("terms").checked;

    let isValid = true;

    // Only "empty" validation
    if (name === "") {
        showError("nameError", "Full Name cannot be empty");
        isValid = false;
    }

    if (username === "") {
        showError("usernameError", "Username cannot be empty");
        isValid = false;
    }

    if (email === "") {
        showError("emailError", "Email cannot be empty");
        isValid = false;
    }

    if (phone === "") {
        showError("phoneError", "Phone number cannot be empty");
        isValid = false;
    }

    if (password === "") {
        showError("passwordError", "Password cannot be empty");
        isValid = false;
    }

    if (confirmPassword === "") {
        showError("confirmError", "Please confirm your password");
        isValid = false;
    }

    if (!terms) {
        showError("termsError", "You must agree to the Terms and Conditions");
        isValid = false;
    }

    // Final result
    const msg = document.getElementById("formMessage");
    if (isValid) {
        msg.innerHTML = "Registration Successful!";
        msg.style.color = "green";
    } else {
        msg.innerHTML = "Please fix the errors above.";
        msg.style.color = "red";
    }
});

// Helper functions
function showError(id, message) {
    document.getElementById(id).innerHTML = message;
}

function clearErrors() {
    let errors = document.querySelectorAll(".error");
    errors.forEach(function (error) {
        error.innerHTML = "";
    });
    document.getElementById("formMessage").innerHTML = "";
}
