import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required("Username is required")
    .min(2, "name must be at least 2 characters"),
    email: yup
    .string()
    .email("This must be an email address")
    .required("Email is required"),
    size: yup
    .string()
    .oneOf(["small", "medium", "large"]),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    peppers: yup.boolean(),
    gluten: yup.boolean(),
    special: yup
    .string()
    .trim()
    })




export default formSchema;