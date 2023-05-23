import { configureStore } from "@reduxjs/toolkit";
import  registerReducer  from "../slice/slice";

const store = configureStore({
    reducer:{
        registerReducer
    }
})
export default store;