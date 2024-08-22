import React from 'react'
import { FriendsIcon, MessageIcon } from '../../svg/Friends'
import { CameraIcon } from '../../svg/Camera'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around p-2 text-white bg-[#232323]'>
        <div className='flex justify-center items-center '>
            <div className='w-14 h-14 rounded-full bg-[#D9D9D9] relative'>
              <div className='w-4 h-4 rounded-full bg-white text-black flex justify-center items-center absolute bottom-0 right-0 text-2xl '>
                  <CameraIcon />
              </div>
            </div>
            <div className='ml-5'><span>MD Rifatul Islam</span></div>
        </div>
        <div className='text-orange-300 flex justify-center items-center gap-5'>
          <Link to='/' className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                <FriendsIcon/>
          </Link>
          <Link to='/message' className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>                 
                <MessageIcon/>
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <button className='bg-blue-400 py-2 px-5 rounded-md'>LogOut</button>
        </div>
    </div>
  )
}

export default Navbar