import { useFormik } from 'formik';
import React, { useState } from 'react'
import { signUp } from '../validation/RegistrationValidation';
import Lottie from "lottie-react";
import registrationanimation from "../animation/reganimation.json"
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";

const Registration = () => {
    const auth = getAuth();
    let [loader, setLoader] = useState(false)
    let navigate = useNavigate()
    const db = getDatabase()
    let initialValues = {
        fullName: "",
        email: "",
        password: "",
    }
    let formik = useFormik({
        initialValues,
        onSubmit: () => {
            createNewusers()
        },
        validationSchema: signUp,
    })

    let createNewusers = () => {
        setLoader(true)
        createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
            .then(({ user }) => {
                updateProfile(auth.currentUser, {
                    displayName: formik.values.fullName
                })

                    .then(() => {
                        sendEmailVerification(auth.currentUser)
                            .then(() => {
                                set(ref(db, 'users/' + user.uid), {
                                    username: user.displayName,
                                    email: user.email,
                                })
                                toast.success('please check your mail or varification', {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });
                                setTimeout(() => {
                                    navigate("/login")
                                }, 2000);
                                setLoader(false)
                            }).catch((error) => {
                                toast.error(error.message, {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });
                            })

                    })
            }).catch((error) => {
                if (error.message.includes("auth/email-already-in-use")) {
                    toast.error('Email already in use', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setLoader(false)
                }
                // console.log(error.message);
            })
    }
    // console.log(formik);
    return (
        <>
            <ToastContainer />
            <div className='w-full h-screen flex justify-center items-center'>
                <div className='w-2/4  bg-white shadow-md rounded-md grid grid-cols-2 border'>
                    <div> <Lottie animationData={registrationanimation} loop={true} /></div>
                    <div className='p-3 m-auto'>
                        <h1 className='text-xl font-robotoBold'>Registration Form</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <input className='border w-full mt-2 px-2 py-1 rounded-md outline-none ' type="text" placeholder='Your Name' name='fullName' value={formik.values.fullName} onChange={formik.handleChange} />
                            {formik.errors.fullName && formik.touched.fullName && <p className='mb-1 text-red-500'>{formik.errors.fullName}</p>}

                            <input className='border w-full mt-2 px-2 py-1 rounded-md outline-none' type="email" placeholder='Your Email' name='email' value={formik.values.email} onChange={formik.handleChange} />
                            {formik.errors.email && formik.touched.email && <p className='mb-1 text-red-500'>{formik.errors.email}</p>}
                            <input className='border w-full mt-2 px-2 py-1 rounded-md outline-none' type="password" placeholder='password' name='password' value={formik.values.password} onChange={formik.handleChange} />
                            {formik.errors.password && formik.touched.password && <p className='mb-1 text-red-500'>{formik.errors.password}</p>}
                            <button type='submit' disabled={loader} className='py-1 px-3 mt-2 bg-gray-500 text-white rounded-md w-full'  > {loader ? <BeatLoader color='#fff' size={8} /> : "Sing Up"}</button>
                        </form>
                        <p className='text-sm text-gray-400 mt-4'>Already have an account? <Link to="/login" className='text-blue-500'>Sing In</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration