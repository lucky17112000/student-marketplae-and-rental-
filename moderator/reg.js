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
    let department = document.getElementById("department").value.trim();
    let studentId = document.getElementById("student_id").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let terms = document.getElementById("terms").checked;

    let isValid = true;

    // Name Validation (only letters)
    if (name === "") {
        showError("nameError", "Full Name cannot be empty");
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        showError("nameError", "Name should contain only letters");
        isValid = false;
    }

    // Username Validation (only letters)
    if (username === "") {
        showError("usernameError", "Username cannot be empty");
        isValid = false;
    } else if (!/^[A-Za-z]+$/.test(username)) {
        showError("usernameError", "Username should contain only letters");
        isValid = false;
    }

    // Email Validation ( @gmail.com)
    if (email === "") {
        showError("emailError", "Email cannot be empty");
        isValid = false;
    } else if (!/^[^\s@]+@gmail\.com$/i.test(email)) {
        showError("emailError", "Email must end with @gmail.com");
        isValid = false;
    }

    // Phone Validation (11 digits)
    if (phone === "") {
        showError("phoneError", "Phone number cannot be empty");
        isValid = false;
    } else if (!/^\d{11}$/.test(phone)) {
        showError("phoneError", "Phone must be exactly 11 digits");
        isValid = false;
    }

    // Department Validation (cannot be empty)
    if (department === "") {
        showError("departmentError", "Department cannot be empty");
        isValid = false;
    }

    // Student ID Validation (only numbers)
    if (studentId === "") {
        showError("studentIdError", "Student ID cannot be empty");
        isValid = false;
    } else if (!/^\d+$/.test(studentId)) {
        showError("studentIdError", "Student ID should contain only numbers");
        isValid = false;
    }

    // Password Validation (minimum 8 char)
    if (password === "") {
        showError("passwordError", "Password cannot be empty");
        isValid = false;
    } else if (password.length < 8) {
        showError("passwordError", "Password must be at least 8 characters");
        isValid = false;
    }

    // Confirm Password (minimum 8 char)
    if (confirmPassword === "") {
        showError("confirmError", "Please confirm your password");
        isValid = false;
    } else if (confirmPassword.length < 8) {
        showError("confirmError", "Confirm password must be at least 8 characters");
        isValid = false;
    }

    // Terms Checkbox
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
