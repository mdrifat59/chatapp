import React, { useEffect, useState } from 'react'
import { EmojiIcon } from '../../svg/Emoji'
import { ImageIcon } from '../../svg/Image'
import msgimg from '../../assets/trail.jpg'
import msgimg2 from '../../assets/trail2.jpg'
import { useSelector } from 'react-redux'
import { getDatabase, onValue, push, ref, set } from 'firebase/database'
import { formatDistance } from 'date-fns'

const MessageBox = () => {
    let db = getDatabase()
    let singlefriend = useSelector((single) => single.active.active)
    let [message, setMessage] = useState('')
    let [allmessage, setAllmessage] = useState([])
    let usered = useSelector((state) => state.login.loggedIn)

    let handleSendMessage = () => {
        if (singlefriend?.status == "single") {
            set(push(ref(db, 'singlemessage')), {
                whosendname: usered.displayName,
                whosendid: usered.uid,
                whoreceivename: singlefriend.name,
                whoreceiveid: singlefriend.id,
                message: message,
                date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getHours()}:${new Date().getMinutes()}`
            })
        }
        setMessage('')
    }

    //  get message
    useEffect(() => {
        onValue(ref(db, "singlemessage/"), (snapshot) => {
            let messagearr = []
            snapshot.forEach((item) => {
                if (usered.uid == item.val().whosendid && item.val().whoreceiveid == singlefriend.id || usered.uid == item.val().whoreceiveid && item.val().whosendid == singlefriend.id) {
                    messagearr.push(item.val())
                }
            })
            setAllmessage(messagearr)
        })
    }, [singlefriend.id])

    return (
        <div className='w-full bg-white'>
            <div className=' bg-[#232323] py-2 rounded-md mx-5 mt-3 '>
                <div className='ml-5 flex items-center gap-5'>
                    <div className='w-11 h-11 bg-orange-300 rounded-full'>
                        <img src={singlefriend.profile} className='w-full h-full rounded-full overflow-hidden' alt="" />
                    </div>
                    <div className='text-white'>
                        <span className='font-robotoRegular'>{singlefriend.name || "choose your friend"}</span>
                    </div>
                </div>
            </div>
            <div className='h-[300px] bg-[#FFFFFF]  mx-5 overflow-x-auto'>
                {
                    singlefriend?.status == "single" ?
                        allmessage.map((item, i) => (
                            <div key={item.i}>
                                {
                                    item.whosendid == usered.uid ? (
                                        <div className='w-[60%] ml-auto flex flex-col items-end'>
                                            <p className='bg-blue-500 font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 text-white'>
                                                {item.message}
                                            </p>
                                            <span className='mt-2 text-sm'>{formatDistance(item.date, new Date(), { addSuffix: true })}</span>
                                        </div>
                                    ) : (
                                        <div className='w-[60%] mr-auto flex flex-col items-start'>
                                            <p className='bg-stone-500 font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 text-white'>
                                                {item.message}
                                            </p>
                                            <span className='mt-2 text-sm'>{formatDistance(item.date, new Date(), { addSuffix: true })}</span>
                                        </div>
                                    )}
                            </div>
                        ))
                        :

                        " "
                }


                {/* sender site img */}
                {/* <div className='w-[60%] ml-auto overflow-hidden'>
            <div className='bg-blue-500 font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 '>
                <img src={msgimg2}  className='w-full h-full object-cover rounded-md ' alt="" />
            </div>
           </div> */}
                {/* receicer site img */}
                {/* <div className='w-[60%] mr-auto overflow-hidden'>
            <div className='bg-stone-300 font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 '>
                <img src={msgimg}  className='w-full h-full object-cover rounded-md' alt="" />
            </div>
           </div> */}

            </div>
            <div className='bg-[#F5F5F5] mx-5 py-3 shadow-lg rounded-md flex items-center justify-center'>
                <div className='w-[450px] bg-[#FFFFFF]  flex justify-center rounded-md gap-2'>
                    <div className='flex justify-center items-center gap-2'>
                        <EmojiIcon />
                        <ImageIcon />
                    </div>
                    <input className='py-2 px-2 outline-none w-[60%]' type="text" placeholder='type anything' onChange={(e) => setMessage(e.target.value)} value={message} />
                    <button className=' font-robotoRegular px-7 bg-[#4A81D3] rounded-md text-white' onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default MessageBox