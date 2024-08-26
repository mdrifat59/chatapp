import React from 'react'
import Friends from '../Components/Friends'
import MessageBox from '../Components/Messagebox'

const Message = () => {
  return (
    <div className='grid grid-cols-[2fr,5fr]'>
    <div className='w-full h-full bg-white shadow-lg'>
      <Friends/>
    </div>
    <div className='w-full'>
      <MessageBox/>
    </div>
  </div>
  )
}

export default Message