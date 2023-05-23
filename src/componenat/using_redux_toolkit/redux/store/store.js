import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from '../slice/weartherSlice'
import cityReducer from '../slice/citySlices'
 const stores = configureStore({
     reducer: {
       weather: weatherReducer,
       city:cityReducer
     }
   })

   
 export default stores;