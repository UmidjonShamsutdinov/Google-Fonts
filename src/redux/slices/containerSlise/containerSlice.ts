import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    sideValue: false 
}



const containerSlice = createSlice({
    name: "sideValue",
    initialState,
    reducers:{
        OPENVALUE : (state:any, action)=>{
            state.sideValue = action.payload
        }
    }
})


export const {OPENVALUE} = containerSlice.actions
export const containerReducer = containerSlice.reducer