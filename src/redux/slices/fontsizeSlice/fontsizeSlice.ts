import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    fontSize: 40 
}



const fontsizeSlice = createSlice({
    name: "fontSize",
    initialState,
    reducers:{
        FONTSIZE : (state:any, action)=>{
            state.fontSize = +action.payload
        }
    }
})


export const {FONTSIZE} = fontsizeSlice.actions
export const fontsizeReducer = fontsizeSlice.reducer