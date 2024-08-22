import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Index'

const RootLayout = () => {
  return (
    <div className='w-full h-screen relative'>
    <div className='h-[250px] w-full bg-[#4A81D3]'>
      <div className='w-3/4 h-[500px] bg-white rounded-md shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
       <Navbar/>
       <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default RootLayout