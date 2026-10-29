const form = document.getElementById("regForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from submitting

    // Clear previous messages
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

    //  Name Validation
    if (name === "") {
        showError("nameError", "Full Name cannot be empty");
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        showError("nameError", "Name should contain only letters");
        isValid = false;
    }

    //  Username Validation
    if (username === "") {
        showError("usernameError", "Username cannot be empty");
        isValid = false;
    } else if (username.length < 4) {
        showError("usernameError", "Username must be at least 4 characters");
        isValid = false;
    }

    //  Email Validation
    if (email === "") {
        showError("emailError", "Email cannot be empty");
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("emailError", "Enter a valid email address");
        isValid = false;
    }

    // Phone Validation
    if (phone === "") {
        showError("phoneError", "Phone number cannot be empty");
        isValid = false;
    } else if (!/^\d{11}$/.test(phone)) {
        showError("phoneError", "Phone must be 11 digits only");
        isValid = false;
    }

    // Password Validation
    if (password === "") {
        showError("passwordError", "Password cannot be empty");
        isValid = false;
    } else if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters");
        isValid = false;
    } else if (!/\d/.test(password)) {
        showError("passwordError", "Password must contain at least one number");
        isValid = false;
    }

    // Confirm Password
    if (confirmPassword === "") {
        showError("confirmError", "Please confirm your password");
        isValid = false;
    } else if (password !== confirmPassword) {
        showError("confirmError", "Passwords do not match");
        isValid = false;
    }

    //  Terms Checkbox
    if (!terms) {
        showError("termsError", "You must agree to the Terms and Conditions");
        isValid = false;
    }

    // Final Result
    if (isValid) {
        document.getElementById("formMessage").innerHTML = "Registration Successful!";
        document.getElementById("formMessage").style.color = "green";
    } else {
        document.getElementById("formMessage").innerHTML = "Please fix the errors above.";
        document.getElementById("formMessage").style.color = "red";
    }
});

// Helper functions
function showError(id, message) {
    document.getElementById(id).innerHTML = message;
}

function clearErrors() {
    let errors = document.querySelectorAll(".error");
    errors.forEach(function(error) {
        error.innerHTML = "";
    });
    document.getElementById("formMessage").innerHTML = "";
}