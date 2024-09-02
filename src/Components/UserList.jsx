import React, { useEffect, useState } from 'react'
import { AddFriendIcon } from '../svg/AddFriend'
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux'; 
import { getDownloadURL, getStorage, ref as Ref } from 'firebase/storage';
import avaterImg from "../assets/defaultimg/profile.png"

const UserList = () => {
  const db = getDatabase(); 
  let usered = useSelector((state)=>state.login.loggedIn)
  const storage = getStorage();
  let [users, setUsers]= useState([])

  useEffect(() => {
  const userListRef = ref(db, 'users/' );
    onValue(userListRef, (snapshot) => {
      let user = []
      snapshot.forEach((userList)=>{
          if(usered.uid != userList.key){
            getDownloadURL(Ref(storage, userList.key)).then((downloadURL) => {
               user.push({
                ...userList.val(),
                id: userList.key,
                photoURL: downloadURL
               })

            }).catch((error)=>{
              user.push({
                ...userList.val(),
                id: userList.key,
                photoURL: null
               }) 

            }).then(()=>{
                setUsers([...user])
            })
          }
      }) 
    })
  }, [db, usered.uid, storage]) 
  
  return (
    <div className='p-4'>
      <h1 className='font-robotoRegular text-2xl m-y-5'>All Users</h1>
     {
      users.map((item)=>(
        <div className='flex items-center justify-between mt-5'>
        <div className='flex items-center gap-x-2'>
          <div className='w-12 h-12 rounded-full bg-blue-300 overflow-hidden'>
            <img src={item.photoURL || avaterImg} alt="" className='w-full h-full rounded-full overflow-hidden' />
          </div>
          <div className='font-robotoBold'>{item.username}</div>
        </div>
        <div>
          <button><AddFriendIcon /></button>
        </div>
      </div>
      ))
     }

      
    </div>
  )
}

export default UserList