import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
import { useSelector } from 'react-redux';

const FriendRequest = () => {
  const db = getDatabase();
  let [friendreq, setFriendreq] = useState([])
  let usered = useSelector((state) => state.login.loggedIn)

  useEffect(() => {
    const friendRef = ref(db, 'friendrequest/');
    onValue(friendRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (usered.uid == item.val().receiverid) {
          arr.push({ ...item.val(), id: item.key })
        }
      })
      setFriendreq(arr)
    })
  }, [db, usered.uid])

  let handleReject = (itemid) => {
    remove(ref(db, 'friendrequest/' + itemid));
  }

  let handleAccept = (item) => {
    set(push(ref(db, 'friends/')), {
      ...item
    }).then(() => {
      remove(ref(db, "friendrequest/" + item.id))
    })

  }

  return (
    <div className='p-5'>
      <h1 className='font-robotoRegular text-2xl m-y-5'> Friend Requests</h1>
      {
        friendreq.length == 0 ? 
          <div className='flex justify-center items-center h-40'>
          <h3 className='text-2xl'>No Friend Requst</h3>
        </div>
          :
          friendreq.map((item) => (
            <div key={item.id} className='flex items-center justify-between mt-5'>
              <div className='flex items-center gap-x-2'>
                <div className='w-12 h-12 rounded-full bg-blue-300 overflow-hidden'>
                  <img src={item.senderphoto} className='w-full h-full rounded-full overflow-hidden' alt="" />
                </div>
                <div className='font-robotoRegular text-base'>{item.sendername}</div>
              </div>
              <div className='flex justify-center gap-2 text-white'>
                <button className='py-1 px-4 bg-[#4A81D3] rounded-md' onClick={() => handleAccept(item)}>Accept</button>
                <button className='py-1 px-4 bg-[#D34A4A] rounded-md' onClick={() => handleReject(item.id)}>Reject</button>
              </div>
            </div>

          ))
      }

    </div>
  )
}

export default FriendRequest