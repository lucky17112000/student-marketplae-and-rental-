const validateVendorForm = () => {
  //   return nameCheck() && emailCheck();
  const validationList = [
    nameCheck(),
    emailCheck(),
    phoneCheck(),
    studentIdCheck(),
    businessNameCheck(),
    vendorTypeCheck(),
    productCategoryCheck(),
    addressCheck(),
    descriptionCheck(),
    passwordCheck(),
  ];
  return validationList.every((result) => {
    if (result) return true;
    else return false;
  });
};
window.validateVendorForm = validateVendorForm;
