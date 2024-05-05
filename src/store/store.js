import { configureStore } from "@reduxjs/toolkit";
import storeSlice from './storeSlice'

const store = configureStore({
    reducer:{
        auth: storeSlice
    }
})

export default store