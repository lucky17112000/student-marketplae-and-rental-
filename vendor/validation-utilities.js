const getValidationList = () => {
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
    confirmPasswordCheck(),
    termsCheck(),
  ];
  return validationList;
};
