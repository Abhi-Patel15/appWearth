import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
 
};
const REACT_APP_API_KEY="3a5dcf5df4310e0d081a307ba9132943";
export const getDataAsync = (cityName) => async (dispatch) => {
    console.log('cityName', cityName)

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${REACT_APP_API_KEY}`
    );
    dispatch(getDataSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,

  reducers: {
    getDataSuccess: (state, action) => {
        console.log('state', state)
      state.data = action.payload;
  
    },
  },
});

export const {  getDataSuccess, } = weatherSlice.actions;
export const selectCount = (state) => state.weather;

export default weatherSlice.reducer;
