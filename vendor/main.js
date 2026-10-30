const validateVendorForm = () => {
  //   return nameCheck() && emailCheck();
  const validationList = [
    nameCheck(),
    emailCheck(),
    phoneCheck(),
    studentIdCheck(),
  ];
  return validationList.every((result) => {
    if (result) return true;
    else return false;
  });
};
window.validateVendorForm = validateVendorForm;
