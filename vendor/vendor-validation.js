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
