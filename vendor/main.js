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
  ];
  return validationList.every((result) => {
    if (result) return true;
    else return false;
  });
};
window.validateVendorForm = validateVendorForm;
