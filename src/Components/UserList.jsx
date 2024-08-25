import React from 'react'
import { AddFriendIcon } from '../svg/AddFriend'

const UserList = () => {
  return (
    <div className='p-4'>
        <h1 className='font-robotoRegular text-2xl m-5'>All Users</h1>
        <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-x-2'>
                <div className='w-12 h-12 rounded-full bg-blue-300 overflow-hidden'></div>
                <div className='font-robotoBold'>MD Rifatul Islam</div>
            </div>
            <div>
              <button><AddFriendIcon/></button>
            </div>
        </div>
        <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-x-2'>
                <div className='w-12 h-12 rounded-full bg-blue-300'></div>
                <div className='font-robotoBold'>MD Rifatul Islam</div>
            </div>
            <div>
              <button><AddFriendIcon/></button>
            </div>
        </div>
        <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-x-2'>
                <div className='w-12 h-12 rounded-full bg-blue-300'></div>
                <div className='font-robotoBold'>MD Rifatul Islam</div>
            </div>
            <div>
              <button><AddFriendIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default UserList