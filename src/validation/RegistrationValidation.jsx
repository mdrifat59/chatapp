import * as Yup from 'yup';

export const signUp = Yup.object({
    fullName: Yup.string().min(5).max(10).required("Please fill up Your Name"),
    email: Yup.string().email().required("please fill up your email"),
    password: Yup.string().min(8).required("please fill up your password")
})