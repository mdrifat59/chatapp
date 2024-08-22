import { useFormik } from 'formik'
import Lottie from 'lottie-react'
import React, { useState } from 'react'
import loginAnimation from '../animation/login.json'
import { toast, ToastContainer } from 'react-toastify'
import { signIn } from '../validation/LoginValidation'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { BeatLoader } from 'react-spinners'
import { useDispatch } from 'react-redux'
import { loggedInUser } from '../featuers/slice/LoginSlice'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const auth = getAuth();
  let [loader, setLoader]=useState(false)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let initialValues ={ 
      email: "",
      password: "",
  }
  let formik = useFormik({
      initialValues,
      onSubmit: ()=>{
          singInUser()
      },
      validationSchema: signIn,
  }) 

  let singInUser = ()=>{
    setLoader(true)
    signInWithEmailAndPassword(auth, formik.values.email, formik.values.password).then(({user})=>{
        if(user.emailVerified == true){ 
            setLoader(false)   
            dispatch(loggedInUser(user))
            localStorage.setItem("login", JSON.stringify(user))
            navigate("/")
        }else{
          toast.error('please varify your email', {
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
        
    }).catch((error)=>{
        if(error.message.includes("auth/invalid-credential")){
            toast.error('Email or Password is incorrect', {
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
        
    })
  }
 
  return (
    <>
       <ToastContainer/>
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-2/4  bg-white shadow-md rounded-md grid grid-cols-2 border'>
                <div> <Lottie animationData={loginAnimation} loop={true} /></div>
                <div className='p-3 m-auto'>
                    <h1 className='text-xl font-robotoBold'>Login your Account</h1>
                    <form onSubmit={formik.handleSubmit}>                        
                        <input className='border w-full mt-2 px-2 py-1 rounded-md outline-none' type="email" placeholder='Your Email' name='email' value={formik.values.email} onChange={formik.handleChange}/> 
                        { formik.errors.email && formik.touched.email &&  <p className='mb-1 text-red-500'>{formik.errors.email}</p> } 
                        <input className='border w-full mt-2 px-2 py-1 rounded-md outline-none' type="password" placeholder='password' name='password' value={formik.values.password} onChange={formik.handleChange} /> 
                        { formik.errors.password && formik.touched.password &&  <p className='mb-1 text-red-500'>{formik.errors.password}</p> }  
                        <button type='submit' disabled={loader} className='py-1 px-3 mt-2 bg-gray-500 text-white rounded-md w-full'  > {loader ? <BeatLoader color='#fff' size={8}/> : "Sing In"}</button>
                    </form>
                    <p className='font-robotoRegular text-base text-gray-400 mt-4'>Don't have an account? <Link to="/registration" className='text-blue-500'>Sing Up</Link></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login