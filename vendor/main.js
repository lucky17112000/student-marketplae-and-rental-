const validateVendorForm = () => {
  //   return nameCheck() && emailCheck();
  const validationList = [nameCheck(), emailCheck()];
  return validationList.every((result) => {
    if (result) return true;
    else return false;
  });
};
window.validateVendorForm = validateVendorForm;
