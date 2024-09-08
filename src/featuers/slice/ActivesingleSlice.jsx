import { createSlice } from "@reduxjs/toolkit";

export const ActivesingleSlice = createSlice ({
    name:'single',
    initialState:{
        active: JSON.parse(localStorage.getItem("active")) || null,
    },
    reducers:{
        activeSingle: (state, action)=>{
            state.active = action.payload;
        }
    }
})

export const {activeSingle} = ActivesingleSlice.actions;

export default ActivesingleSlice.reducer;