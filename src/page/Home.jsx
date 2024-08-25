import React from 'react'  
import UserList from '../Components/UserList'

const Home = () => {
  return (
    <>
      <div className='grid grid-cols-[2fr,4fr]'>
        <div className='w-full h-full bg-white shadow-lg'>
          <UserList/>
        </div>
        <div className='w-full h-full bg-gray-400'>adfkdfjaldfk</div>
      </div>
    </>
  )
}

export default Home