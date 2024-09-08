import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slice/LoginSlice";
import ActivesingleSlice from "./slice/ActivesingleSlice";
 
 

const store =configureStore({
    reducer:{
        login:LoginSlice,
        active:ActivesingleSlice,
    }
})

export default store