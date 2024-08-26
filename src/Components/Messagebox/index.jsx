import React from 'react'
import { EmojiIcon } from '../../svg/Emoji'
import { ImageIcon } from '../../svg/Image'

const MessageBox = () => {
  return (
    <div className='w-full bg-white'>
        <div className=' bg-[#232323] py-2 rounded-md mx-5 mt-3 '> 
            <div className='ml-5 flex items-center gap-5'>
                <div className='w-11 h-11 bg-orange-300 rounded-full'></div>
                <div className='text-white'>
                    <span className='font-robotoRegular'>MD Rifat</span>
                </div>
            </div>
        </div>
        <div className='h-[300px] bg-[#FFFFFF]  mx-5'>
            addadfa
        </div>
        <div className='bg-[#F5F5F5] mx-5 py-3 shadow-lg rounded-md flex items-center justify-center'> 
        <div className='w-[450px] bg-[#FFFFFF]  flex justify-center rounded-md gap-2'>
            <div className='flex justify-center items-center gap-2'>
                <EmojiIcon/>
                <ImageIcon/>
            </div>
                <input className='py-2 px-2 outline-none w-[60%]' type="text" placeholder='type anything' />
                <button className=' font-robotoRegular px-7 bg-[#4A81D3] rounded-md text-white'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default MessageBox