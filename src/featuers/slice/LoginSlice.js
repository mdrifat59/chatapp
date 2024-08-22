import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        loggedIn: JSON.parse(localStorage.getItem("login")) || null,
    },
    reducers:{
        loggedInUser:(state, action)=>{
                state.loggedIn = action.payload
        },
        logOutUser:(state)=>{
            state.loggedIn = null
        }
    }
})

export const{loggedInUser, logOutUser} = loginSlice.actions;

export default loginSlice.reducer;