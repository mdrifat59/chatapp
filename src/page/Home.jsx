import React from 'react'  
import UserList from '../Components/UserList'
import FriendRequest from '../Components/FriendRequst/Index'
import Friends from '../Components/Friends'

const Home = () => {
  return (
    <>
      <div className='grid grid-cols-[2fr,5fr]'>
        <div className='w-full h-full bg-white shadow-lg'>
          <UserList/>
        </div>
        <div className='w-full grid grid-cols-[4fr,3fr] gap-x-2'>
           <div className='w-full shadow-lg '>
            <FriendRequest/>
           </div>
           <div className='w-full shadow-lg'>
              <Friends/>
           </div>
        </div>
      </div>
    </>
  )
}

export default Home