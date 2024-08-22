import * as Yup from 'yup';

export const signIn = Yup.object({ 
    email: Yup.string().email().required("please fill up your email"),
    password: Yup.string().required("please fill up your password")
})