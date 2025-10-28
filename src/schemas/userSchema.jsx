import * as Yup from "yup";
export const userSchema = Yup.object({
      name: Yup.string().min(3, "At least 3 characters").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Phone must be 10–15 digits")
        .required("Required"),
      password: Yup.string().min(6, "Min 6 characters").required("Required"),
      date: Yup.date().required("Required"),
      gender: Yup.string().required("Select gender"),
      ageGroup: Yup.array()
        .min(1, "Select at least one group")
        .required("Required"),
      weekday: Yup.string().required("Select a weekday"),
    });