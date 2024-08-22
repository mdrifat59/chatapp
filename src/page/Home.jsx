import React from 'react'
import LoggedInUserRoute from '../PrivateRoute/LoggedInUser'
import Navbar from '../Components/Navbar/Index'

const Home = () => {
  return (
    <>
      <div className='w-full h-screen relative'>
        <div className='h-[250px] w-full bg-[#4A81D3]'>
          <div className='w-3/5 bg-[#232323] rounded-md shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> <Navbar/></div>
        </div>
      </div>
    </>
  )
}

export default Home