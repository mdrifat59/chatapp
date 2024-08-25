import React from 'react'

const FriendRequest = () => {
  return (
     <div className='p-5 '>
        <h1 className='font-robotoRegular text-2xl m-5'> Friend Requests</h1>
        <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-x-2'>
                <div className='w-12 h-12 rounded-full bg-blue-300'></div>
                <div className='font-robotoRegular text-base'>MD Rifatul Islam</div>
            </div>
            <div className='flex justify-center gap-2 text-white'>
              <button className='py-1 px-4 bg-[#4A81D3] rounded-md'>Accept</button>
              <button className='py-1 px-4 bg-[#D34A4A] rounded-md'>Reject</button>               
            </div>
        </div>
       
        <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-x-2'>
                <div className='w-12 h-12 rounded-full bg-blue-300'></div>
                <div className='font-robotoRegular text-base'>MD Rifatul Islam</div>
            </div>
            <div className='flex justify-center gap-2 text-white'>
              <button className='py-1 px-4 bg-[#4A81D3] rounded-md'>Accept</button>
              <button className='py-1 px-4 bg-[#D34A4A] rounded-md'>Reject</button>               
            </div>
        </div>
        <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-x-2'>
                <div className='w-12 h-12 rounded-full bg-blue-300'></div>
                <div className='font-robotoRegular text-base'>MD Rifatul Islam</div>
            </div>
            <div className='flex justify-center gap-2 text-white'>
              <button className='py-1 px-4 bg-[#4A81D3] rounded-md'>Accept</button>
              <button className='py-1 px-4 bg-[#D34A4A] rounded-md'>Reject</button>               
            </div>
        </div>
     </div>
  )
}

export default FriendRequest