import React, { useState } from 'react'
import { FriendsIcon, MessageIcon } from '../../svg/Friends'
import { CameraIcon } from '../../svg/Camera'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../featuers/slice/LoginSlice';
import { createPortal } from 'react-dom';
import Modals from '../Modals'; 
import img from '../../assets/defaultimg/profile.png'

const Navbar = () => {
  let location = useLocation() 
  const auth = getAuth();
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let [show, setShow]=useState(false)
  let user = useSelector((state)=>state.login.loggedIn)
  

  let handleLogout =()=>{
    signOut(auth).then(() => {
      localStorage.removeItem("login");
      dispatch(logOutUser());
      navigate("/login");
    }).catch((error) => {
       console.log(error);       
    });
  } 
  
  
  return (
    <>
    <div className='flex justify-around p-2 text-white bg-[#232323]'>
        <div className='flex justify-center items-center '>
            <div className='w-14 h-14 rounded-full bg-[#D9D9D9] relative'>
              <img  src={user.photoURL || img } className='rounded-full w-full h-full object-cover' alt="" />
              
              <div className='w-4 h-4 rounded-full bg-white text-black flex justify-center items-center absolute bottom-0 right-0 text-2xl' onClick={()=>setShow(true)}>
                  <CameraIcon />
              </div>
            </div>
            <div className='ml-5'><span>{user.displayName}</span></div>
        </div>
        <div className=' flex justify-center items-center gap-5'>
          <Link to='/' className={`${location.pathname == "/" ? "text-white bg-[#6CD0FB] " : "text-[#292D32] bg-white  " } w-10 h-10 rounded-full  flex justify-center items-center`}>
                <FriendsIcon/>
          </Link>
          <Link to='/message'  className={`${location.pathname == "/message" ? "text-white bg-[#6CD0FB] " : "text-[#292D32] bg-white  " } w-10 h-10 rounded-full  flex justify-center items-center`}>                 
                <MessageIcon/>
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <button className='bg-blue-400 py-2 px-5 rounded-md' onClick={handleLogout}>LogOut</button>
        </div>
    </div>
    {show && createPortal(
   <Modals setShow={setShow} />,
    document.body
      
    )}
    </>
    
  )
}

export default Navbar