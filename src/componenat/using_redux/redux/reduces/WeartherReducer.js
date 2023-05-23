import { CITY_DATA, WEARTHER_DATA } from "../action/actionType";

const WeartherReducer = ( state=[],action) => {
    switch (action.type) {
        case WEARTHER_DATA:
         return [...state, action.payload.data]
    
        default:
            return   state;
    }
}

export default WeartherReducer