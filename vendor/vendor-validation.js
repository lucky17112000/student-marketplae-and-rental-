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
}
