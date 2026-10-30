function nameCheck() {
  let nameText = document.getElementById("full-name").value;
  let namePattern = /^[A-Za-z ]{5,}$/;
  if (nameText == "") {
    document.getElementById("nameError").innerHTML = "Name Cannot be Empty";
    return false;
  } else if (!namePattern.test(nameText)) {
    document.getElementById("nameError").innerHTML =
      "Invalid name. Only Letter Allowed and must be >=5";
    return false;
  } else {
    document.getElementById("nameError").innerHTML = "";
    return true;
  }
}

function emailCheck() {
  const emailText = document.getElementById("email").value;
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (emailText === "") {
    document.getElementById("emailError").innerHTML = "Email Cannot be Empty";
    return false;
  } else if (!emailPattern.test(emailText)) {
    document.getElementById("emailError").innerHTML =
      "Please enter a valid email (e.g. example@gmail.com)";
    return false;
  } else {
    document.getElementById("emailError").innerHTML = "";
    return true;
  }
}

function phoneCheck() {
  const phoneText = document.getElementById("phone").value;
  const phonePattern = /^01[3-9]\d{8}$/;
  if (phoneText === "") {
    document.getElementById("phoneError").innerHTML =
      "Phone Number Cannot be Empty";
    return false;
  } else if (!phonePattern.test(phoneText)) {
    document.getElementById("phoneError").innerHTML =
      "Please enter a valid Bangladeshi phone number";
    return false;
  } else {
    document.getElementById("phoneError").innerHTML = "";
    return true;
  }
}
function studentIdCheck() {
  const studentIdText = document.getElementById("student-id").value;
  const studentIdPattern = /^\d{2}-\d{5}-\d$/;
  if (studentIdText == "") {
    document.getElementById("studentIdError").innerHTML = "";
    return true;
  } else if (!studentIdPattern.test(studentIdText)) {
    document.getElementById("studentIdError").innerHTML =
      "Invalid Student ID. Example: 22-12345-1";
    return false;
  } else {
    document.getElementById("studentIdError").innerHTML = "";
    return true;
  }
}

function businessNameCheck() {
  const businessNamePattern = /^[A-Za-z0-9 ]{3,}$/;
  const buisnessText = document.getElementById("business-name").value;
  if (buisnessText === "") {
    document.getElementById("businessNameError").innerHTML =
      "Buisness field not be empty";
    return false;
  } else if (!businessNamePattern.test(buisnessText)) {
    document.getElementById("businessNameError").innerHTML =
      "provide valid buisness name";
    return false;
  } else {
    document.getElementById("businessNameError").innerHTML = "";
    return true;
  }
}

function vendorTypeCheck() {
  const vendorTypeText = document.getElementById("vendor-type").value;
  if (vendorTypeText === "") {
    document.getElementById("vendorTypeError").innerHTML = "select vendor type";
    return false;
  } else {
    document.getElementById("vendorTypeError").innerHTML = "";
    return true;
  }
}

function productCategoryCheck() {
  const productcategoryText = document.getElementById("product-category").value;
  if (productcategoryText === "") {
    document.getElementById("productcategoryError").innerHTML =
      "Select Your product Category";
    return false;
  } else {
    document.getElementById("productcategoryError").innerHTML = "";
    return true;
  }
}

function addressCheck() {
  const addressText = document.getElementById("address").value;
  console.log(addressText.length);
  if (addressText === "") {
    document.getElementById("textAreaError").innerHTML =
      "write your buisness Adress ";
    return false;
  } else if (addressText.length < 10) {
    document.getElementById("textAreaError").innerHTML =
      "Adress Atleast 10 char";
    return false;
  } else {
    document.getElementById("textAreaError").innerHTML = "";
    return true;
  }
  // textAreaError
}

function descriptionCheck() {
  // descriptionError
  const descriptionText = document.getElementById("description").value;
  if (descriptionText === "") {
    document.getElementById("descriptionError").innerHTML = "";
    return true;
  } else if (descriptionText.length < 20) {
    document.getElementById("descriptionError").innerHTML = "At lest 20 char";
    return false;
  } else {
    document.getElementById("descriptionError").innerHTML = "";
    return true;
  }
}
function passwordCheck() {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!*?&#])[A-Za-z\d@$!*?&#]{8,}$/;
  const passwordText = document.getElementById("password").value;
  if (passwordText === "") {
    document.getElementById("passwordError").innerHTML =
      "Password must provide";
    return false;
  } else if (!passwordPattern.test(passwordText)) {
    document.getElementById("passwordError").innerHTML =
      "Password must contain:<br>" +
      "- Minimum 8 characters<br>" +
      "- At least one uppercase letter (A-Z)<br>" +
      "- At least one lowercase letter (a-z)<br>" +
      "- At least one number (0-9)<br>" +
      "- At least one special character (@$!%*?&)";
    return false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
    return true;
  }
}

function confirmPasswordCheck() {
  const confirmPasswordText = document.getElementById("confirm-password").value;
  const passwordText = document.getElementById("password").value;
  if (confirmPasswordText === "") {
    document.getElementById("confirmPasswordError").innerHTML =
      "Must fill the field";
    return false;
  } else if (confirmPasswordText !== passwordText) {
    document.getElementById("confirmPasswordError").innerHTML =
      "Not match with ur password";
    return false;
  } else {
    document.getElementById("confirmPasswordError").innerHTML = "";
    return true;
  }
}
