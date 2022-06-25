import * as Yup from "yup";

export const LoanRequestValidationSchema = Yup.object({
  amount: Yup.number()
    .required("Amount is required")
    .test("isAmountValid", "Amount should be less than €250,000.00", function (value) {
      if (value && value < 250000) {
        return true;
      } else {
        return false;
      }
    }),
  fullName: Yup.string()
    .required("Full Name is required")
    .max(200, "First name must be at most 200 characters")
    .matches(/^[A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]+$/, "Only alphabets are allowed for first name"),
  imageUrl: Yup.mixed().required("Image is required"),
});
