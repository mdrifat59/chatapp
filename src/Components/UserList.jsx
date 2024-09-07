import React, { useEffect, useState } from 'react'
import { AddFriendIcon } from '../svg/AddFriend'
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref as Ref } from 'firebase/storage';
import avaterImg from "../assets/defaultimg/profile.png"

const UserList = () => {
  const db = getDatabase();
  let usered = useSelector((state) => state.login.loggedIn)
  const storage = getStorage();
  let [users, setUsers] = useState([])
  let [friendrequestlist, setFriendrequestlist] = useState([]) 
  let [cencelReq, setCencelReq] = useState([]) 

  useEffect(() => {
    const userListRef = ref(db, 'users/');
    onValue(userListRef, (snapshot) => {
      let user = []
      snapshot.forEach((userList) => {
        if (usered.uid != userList.key) {
          getDownloadURL(Ref(storage, userList.key)).then((downloadURL) => {
            user.push({
              ...userList.val(),
              id: userList.key,
              photoURL: downloadURL
            })

          }).catch((error) => {
            user.push({
              ...userList.val(),
              id: userList.key,
              photoURL: null
            })

          }).then(() => {
            setUsers([...user])
          })
        }
      })
    })
  }, [db, usered.uid, storage]);

  let handleRequst = (data) => {
    set(push(ref(db, "friendrequest/")), {
      sendername: usered.displayName,
      senderid: usered.uid,
      senderphoto: usered.photoURL ?? "/src/assets/profile.png",
      receivername: data.username,
      receiverid: data.id,
      receiverphoto: data.photoURL ?? "/src/assets/profile.png",
    })
  }

  // show friendRequst
  useEffect(() => {
    const friendRequestRef = ref(db, 'friendrequest/');
    onValue(friendRequestRef, (snapshot) => {
      let reqarr = []
      let cencelarr = []
      snapshot.forEach((item) => {
        reqarr.push(item.val().senderid + item.val().receiverid)
        cencelarr.push({...item.val(), id:item.key})
      })
      setFriendrequestlist(reqarr)
      setCencelReq(cencelarr)
    });
  }, [db])

  let handleCencel =(itemid)=>{
     let reqtocencel = cencelReq.find((req)=> req.receiverid == itemid)
     remove(ref(db, 'friendrequest/'+ reqtocencel.id))  
  }

  return (
    <div className='p-4'>
      <h1 className='font-robotoRegular text-2xl m-y-5'>All Users</h1>

      {
        users.map((item) => (
          <div key={item.id} className='flex items-center justify-between mt-5'>
            <div className='flex items-center gap-x-2'>
              <div className='w-12 h-12 rounded-full bg-blue-300 overflow-hidden'>
                <img src={item.photoURL || avaterImg} alt="" className='w-full h-full rounded-full overflow-hidden' />
              </div>
              <div className='font-robotoBold'>{item.username}</div>
            </div>
            {
              friendrequestlist.includes(usered.uid + item.id)  ?
                <button className='bg-red-400 py-1 px-3 rounded-md' onClick={()=>handleCencel(item.id)}  >Cencel</button>
                :
                 friendrequestlist.includes(item.id + usered.uid) ?
                 <button className='bg-gray-300 py-1 px-3 rounded-md'>Pending</button>
                 :
                <div onClick={() => handleRequst(item)}>
                  <button><AddFriendIcon /></button>
                </div>
            }
          </div>
        ))
      }


    </div>
  )
}

export default UserList