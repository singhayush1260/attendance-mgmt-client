import * as Yup from 'yup';

const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const registerSchema=Yup.object({
    Name:Yup.string().min(4).max(20).required('Field cannot be empty'),
    Email:Yup.string().matches(emailRegex,'Enter a valid email').required('Field cannot be empty'),
    Password:Yup.string().matches(passwordRegex, 'Must be atleast 8 characters,contain an uppercase, lowercase, digit, symbol').required('Field cannot be empty'),
});

