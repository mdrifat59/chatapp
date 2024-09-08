import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';

const Friends = () => {
  let location = useLocation()
  const db = getDatabase();
  let usered = useSelector((state) => state.login.loggedIn)
  let navigate = useNavigate()
  let [friendarr, setFriendarr] = useState([])

  useEffect(() => {
    const starCountRef = ref(db, 'friends/');
    onValue(starCountRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (usered.uid == item.val().senderid || usered.uid == item.val().receiverid) {
          arr.push({ ...item.val(), id: item.key })
        }
      })
      setFriendarr(arr)
    })
  }, [db, usered.uid])  
  return (
    <div className='p-5 '>
      <h1 className='font-robotoRegular text-2xl m-y-5'> Friends </h1>
      {friendarr.length == 0 ?
        <div className='flex justify-center items-center h-40'>
          <h3 className='text-2xl'>No Friends</h3>
        </div>
        :
        friendarr.map((item) => (

          <div className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-x-2'>
              <div className='w-12 h-12 rounded-full bg-blue-300'>
                {
                  usered.uid == item.receiverid ?
                    <img className='w-full h-full overflow-hidden rounded-full' src={item.senderphoto} alt="" />
                    :
                    <img className='w-full h-full overflow-hidden rounded-full' src={item.receiverphoto} alt="" />
                }
              </div>
              <div className='font-robotoRegular text-base'>
                <h3>
                  {
                    usered.uid == item.senderid ? item.receivername : item.sendername
                  }
                </h3>
              </div>
            </div>


            {
              location.pathname == "/" &&
              <div className='flex justify-center gap-2 text-white'>
                <button className='py-1 px-4 bg-[#4A81D3] rounded-md' onClick={()=>{navigate("/message")}}>Message</button>
              </div>
            }
          </div>
        ))
      }


    </div>
  )
}

export default Friends