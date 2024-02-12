import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    fonts: []
}



const fontSlice = createSlice({
    name: "font",
    initialState,
    reducers:{
        ADDFONT : (state:any, action)=>{
            state.fonts = action.payload
        }
    }
})


export const {ADDFONT} = fontSlice.actions
export const fontReducer = fontSlice.reducer