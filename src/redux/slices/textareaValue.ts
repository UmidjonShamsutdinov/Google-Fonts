import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    inpValue : ""
}

const textareaSlice = createSlice({
    name: "inpValue",
    initialState,
    reducers:{
        TEXTVALUE : (state:any, action)=>{
            state.inpValue = action.payload
        }
    }
})



export const {TEXTVALUE} = textareaSlice.actions
export const textareaReducer = textareaSlice.reducer