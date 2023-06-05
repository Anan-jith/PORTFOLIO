import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './redux'



const store=configureStore({
    reducer:{
        ports:cartreducer,
    }
})
export default store