import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slice/LoginSlice";
 
 

const store =configureStore({
    reducer:{
        login:LoginSlice
    }
})

export default store