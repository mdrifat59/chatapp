import React from 'react'
import { useLocation } from 'react-router-dom'

const Friends = () => {
    let location = useLocation()
  return (
    <div className='p-5 '>
        <h1 className='font-robotoRegular text-2xl m-y-5'> Friends </h1>
        <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-x-2'>
                <div className='w-12 h-12 rounded-full bg-blue-300'></div>
                <div className='font-robotoRegular text-base'>MD Rifatul</div>
            </div>
            {location.pathname == "/" &&
            <div className='flex justify-center gap-2 text-white'>
              <button className='py-1 px-4 bg-[#4A81D3] rounded-md'>Message</button>              
            </div>
            }
        </div>
 
        
     </div>
  )
}

export default Friends