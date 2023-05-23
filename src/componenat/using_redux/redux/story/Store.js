

import {  createStore } from "redux";
import rootReducers from "../reduces/rootReducers";



const store =createStore (
     rootReducers,
)

 export default store;