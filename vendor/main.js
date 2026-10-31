const validateVendorForm = () => {
  //   return nameCheck() && emailCheck();
  const validationList = getValidationList();

  const isvalid = validationList.every((result) => {
    if (result) return true;
    else return false;
  });
  if (isvalid) {
    Toastify({
      text: "Registration successfull",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    document.querySelector("form").reset();
  }
  return false;
};
window.validateVendorForm = validateVendorForm;
