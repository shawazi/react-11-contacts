import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-_]).{6,}$/;

export const basicSchema = yup.object().shape({
    // email: yup.string().email("Please enter a valid email.").required("Required."),
    // age: yup.number().positive().integer().required(),
    // password: yup.string().min(6).matches(passwordRules, {message: "Please create a stronger password with at least: one digit, one uppercase letter, one lowercase letter, one special character, and a minimum of 6 total characters."}).required("Required."),
    // confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match.").required("Required."),

    userName: yup.string().required("Required."),
    phone: yup.string().matches(new RegExp('[0-9]{10}')).required("I'm going to need your phone number, please."),
    gender: yup.string().required("I need to know the current status of your gender.").oneOf(["Male", "Female", "Other"]).label("Selected Gender")
})