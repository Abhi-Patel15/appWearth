import { CITY_DATA, WEARTHER_DATA } from "./actionType";

export const weartherData = async (data) =>{
    console.log(data,":data")
    
            return {
            type :WEARTHER_DATA,
            payload:data
        }
    } 
    
    export const cityData =  (data) =>{
        return{
            type:CITY_DATA,
            payload:{data}
        }
    }