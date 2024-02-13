import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchValue : ""
}

const searchValueSlice = createSlice({
    name: "searchValue",
    initialState,
    reducers:{
        SEARCHVALUE : (state:any, action)=>{
            state.searchValue = action.payload
        }
    }
})



export const {SEARCHVALUE} = searchValueSlice.actions
export const searchValueReducer = searchValueSlice.reducer