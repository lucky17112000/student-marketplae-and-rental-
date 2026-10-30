document.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    if (field.id === "full-name") nameCheck();
    else if (field.id === "email") emailCheck();
    else if (field.id === "phone") phoneCheck();
    else if (field.id === "student-id") studentIdCheck();
    else if (field.id === "business-name") businessNameCheck();
    else if (field.id === "vendor-type") vendorTypeCheck();
    else if (field.id === "product-category") productCategoryCheck();
    else if (field.id === "address") addressCheck();
    else if (field.id === "description") descriptionCheck();
    else if (field.id === "password") passwordCheck();
    else if (field.id === "confirm-password") confirmPasswordCheck();
  });
});
