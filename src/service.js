import axios from "axios";
import { weartherData } from "./redux/action/action";
import { useDispatch } from "react-redux";

const API="3a5dcf5df4310e0d081a307ba9132943";

export const serviceFile = (location) =>async (dispatch) =>{
   console.log(location,"locationn");
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API}`)
        dispatch(weartherData(response))
    }catch (e) {
        console.log(e);
    }
}