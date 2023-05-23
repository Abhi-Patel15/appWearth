import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "surat",
};

export const citySlice = createSlice({
  name: "city",
  initialState,

  reducers: {
    getCityName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { getCityName } = citySlice.actions;
export const cityName = (state) => state.city.value;

export default citySlice.reducer;