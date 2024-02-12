import { configureStore } from "@reduxjs/toolkit"
import { fontReducer } from "../slices/fontSlice/fontSlice"
import { containerReducer } from "../slices/containerSlise/containerSlice"
import { fontsizeReducer } from "../slices/fontsizeSlice/fontsizeSlice"
import { textareaReducer } from "../slices/textareaValue"






const store = configureStore({
    reducer:{
        font_Data : fontReducer,
        container_Data : containerReducer,
        fontsize_Data : fontsizeReducer,
        textarea_Data : textareaReducer
    }
})

export {store}