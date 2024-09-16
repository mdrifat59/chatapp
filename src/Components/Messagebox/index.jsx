import React, { useEffect, useRef, useState } from 'react'
import { EmojiIcon } from '../../svg/Emoji'
import { ImageIcon } from '../../svg/Image' 
import { useSelector } from 'react-redux'
import { getDatabase, onValue, push, ref, set } from 'firebase/database'
import { formatDistance } from 'date-fns'
import EmojiPicker from 'emoji-picker-react'
import { getStorage, ref as Ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const MessageBox = () => {
    let db = getDatabase()
    const storage = getStorage();
    let singlefriend = useSelector((single) => single.active.active)
    let usered = useSelector((state) => state.login.loggedIn)
    let [message, setMessage] = useState('')
    let [allmessage, setAllmessage] = useState([])
    let [emojishow, setEmojishow] = useState(false)
    let choosefile = useRef(null)

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
        setEmojishow(false)
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

    let handleEmojiselect = ({ emoji }) => {
        setMessage(message + emoji)
    }

    let handleimage = (e) => {
        let imgfile = e.target.files[0]
        const storageRef = Ref(storage, `${usered.displayName} = sendImageMessage/ ${imgfile}`);
        const uploadTask = uploadBytesResumable(storageRef, imgfile);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');

            },
            (error) => {
                console.log(error);

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => { 
                    set(push(ref(db, 'singlemessage')), {
                        whosendname: usered.displayName,
                        whosendid: usered.uid,
                        whoreceivename: singlefriend.name,
                        whoreceiveid: singlefriend.id,
                        message: message,
                        image: downloadURL,
                        date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getHours()}:${new Date().getMinutes()}`
                    })
                });
            }
        );
    }
    //  press key
    let handleSendkey =(e)=>{
        if(e.key == "Enter"){
            handleSendMessage()
        }
        
    }
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
                            <div key={item.id}>
                                {
                                    item.whosendid == usered.uid ? (
                                        item.image ?
                                            <div className='w-[60%] ml-auto overflow-hidden'>
                                                <div className=' font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 '>
                                                    <img src={item.image} className='w-full h-full object-cover rounded-md ' alt="" />
                                                </div>
                                            </div>
                                            :
                                            <>
                                                <div className='w-[60%] ml-auto flex flex-col items-end'>
                                                    <p className='bg-blue-500 font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 text-white'>
                                                        {item.message}
                                                    </p>
                                                    <span className='mt-2 text-sm'>{formatDistance(item.date, new Date(), { addSuffix: true })}</span>
                                                </div>
                                            </>
                                    ) : (
                                        item.image ?
                                            <div className='w-[60%] mr-auto overflow-hidden'>
                                                <div className=' font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 '>
                                                    <img src={item.image} className='w-full h-full object-cover rounded-md' alt="" />
                                                </div>
                                            </div>
                                            :
                                            <>
                                                <div className='w-[60%] mr-auto flex flex-col items-start'>
                                                    <p className='bg-stone-500 font-robotoRegular inline-block rounded-md mt-2 py-2 px-4 text-white'>
                                                        {item.message}
                                                    </p>
                                                    <span className='mt-2 text-sm'>{formatDistance(item.date, new Date(), { addSuffix: true })}</span>
                                                </div>
                                            </>
                                    )}
                            </div>
                        ))
                        :

                        " "
                }
 
              
            </div>
            <div className='bg-[#F5F5F5] mx-5 py-3 shadow-lg rounded-md flex items-center justify-center'>
                <div className='w-[450px] bg-[#FFFFFF]  flex justify-center rounded-md gap-2'>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='relative'>
                            <div onClick={() => setEmojishow((prev) => !prev)} className='cursor-pointer'>
                                <EmojiIcon />
                            </div>
                            {
                                emojishow &&
                                <div className='absolute bottom-8 -left-10'>
                                    <EmojiPicker onEmojiClick={handleEmojiselect} />
                                </div>
                            }
                        </div>
                        <div onClick={() => choosefile.current.click()} className='cursor-pointer'>
                            <ImageIcon />
                            <input ref={choosefile} type="file" hidden onChange={handleimage} />
                        </div>
                    </div>
                    <input className='py-2 px-2 outline-none w-[60%]' type="text" placeholder='type anything' onKeyUp={handleSendkey} onFocus={() => setEmojishow(false)} onChange={(e) => setMessage(e.target.value)} value={message} />
                    <button className=' font-robotoRegular px-7 bg-[#4A81D3] rounded-md text-white' onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default MessageBox