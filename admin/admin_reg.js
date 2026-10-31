

const validationMessage = document.getElementById("validationMessage");
const termsCheckbox = document.getElementById("terms");
const clearButton = document.getElementById("clearForm");


function showMessage(message, isSuccess) {

    validationMessage.style.color = isSuccess ? "green" : "red";

    validationMessage.innerHTML = message;
}



function hasSequentialCharacters(value) {

    const text = value.toLowerCase();

    for (let i = 0; i <= text.length - 4; i++) {

        const part = text.substring(i, i + 4);

        if (/^[0-9]{4}$/.test(part) || /^[a-z]{4}$/.test(part)) {

            const first = part.charCodeAt(0);
            const second = part.charCodeAt(1);
            const third = part.charCodeAt(2);
            const fourth = part.charCodeAt(3);

            if (
                (second === first + 1 &&
                 third === second + 1 &&
                 fourth === third + 1) ||

                (second === first - 1 &&
                 third === second - 1 &&
                 fourth === third - 1)
            ) {
                return true;
            }
        }
    }

    return false;
}



function hasWeakPasswordPattern(password) {

    const lowerPassword = password.toLowerCase();

    const commonPatterns = [
        "password",
        "admin",
        "qwerty",
        "welcome",
        "letmein",
        "iloveyou",
        "123456"
    ];

    const containsCommonPattern = commonPatterns.some(
        function(pattern) {
            return lowerPassword.includes(pattern);
        }
    );

    const containsRepeatedCharacters = /(.)\1{3,}/i.test(password);

    const containsSequence = hasSequentialCharacters(password);

    return containsCommonPattern ||
           containsRepeatedCharacters ||
           containsSequence;
}



function validateAdminForm() {

    const fullName = document.getElementById("fullName").value.trim();

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    const termsAccepted = termsCheckbox.checked;

    let errorMessage = "";


   

    if (
        fullName === "" ||
        username === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        errorMessage = "All fields are required.";

    }


    

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {

        errorMessage = "Please enter a valid email address.";

    }


  

    else if (!/^01[3-9]\d{8}$/.test(phone)) {

        errorMessage = "Enter a valid 11-digit Bangladeshi phone number.";

    }


    

    else if (!/^adm_[A-Za-z0-9_]{3,16}$/.test(username)) {

        errorMessage = "Username must start with adm_ followed by 3-16 letters, numbers or underscores.";

    }


   

    else if (!/^[A-Za-z]{2,}(?:\s+[A-Za-z]{2,}){1,3}$/.test(fullName)) {

        errorMessage = "Full Name must contain 2-4 words using English letters only.";

    }


    

    else if (
        password.length < 12 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[^A-Za-z0-9\s]/.test(password) ||
        /\s/.test(password)
    ) {

        errorMessage = "Password must contain at least 12 characters, uppercase, lowercase, number and special character. Spaces are not allowed.";

    }


    

    else {

        const passwordLower = password.toLowerCase();

        const usernamePart = username.replace(/^adm_/i, "").toLowerCase();

        const emailPart = email.split("@")[0].toLowerCase();

        const nameParts = fullName.toLowerCase().split(/\s+/);

        let containsPersonalInfo = false;


        if (
            usernamePart.length >= 3 &&
            passwordLower.includes(usernamePart)
        ) {

            containsPersonalInfo = true;

        }


        if (
            emailPart.length >= 3 &&
            passwordLower.includes(emailPart)
        ) {

            containsPersonalInfo = true;

        }


        for (let i = 0; i < nameParts.length; i++) {

            if (
                nameParts[i].length >= 3 &&
                passwordLower.includes(nameParts[i])
            ) {

                containsPersonalInfo = true;

            }
        }


        if (containsPersonalInfo) {

            errorMessage = "Password must not contain your username, name or email username.";

        }


       

        else if (hasWeakPasswordPattern(password)) {

            errorMessage = "Weak password! Avoid common words, sequential characters like 1234 or abcd, and repeated characters like aaaa.";

        }

    }


    

    if (
        errorMessage === "" &&
        password !== confirmPassword
    ) {

        errorMessage = "Password and Confirm Password do not match.";

    }


    

    if (
        errorMessage === "" &&
        !termsAccepted
    ) {

        errorMessage = "You must accept the Terms and Conditions.";

    }


    

    if (errorMessage !== "") {

        showMessage(errorMessage, false);

        return false;

    }


    

    showMessage(
        "All validations passed! Admin Registration is valid. (Demo only — no account is saved.)",
        true
    );

    return false;

}




clearButton.addEventListener("click", function() {

    validationMessage.innerHTML = "";

});




termsCheckbox.addEventListener("change", function() {

    validationMessage.innerHTML = "";

});