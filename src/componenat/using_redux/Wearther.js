import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { weartherData } from "./redux/action/action";

export const Wearther = () => {

  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const API = "3a5dcf5df4310e0d081a307ba9132943";

  useEffect(() => {
    serviceData(value);
  }, []);

  const serviceData = async (value) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${API}`
    );
   dispatch(weartherData(res.data.main));
  };

  const handaleSubmit = () => {
   serviceData(value);
  };
 
  return (
    <div className="background_img">
      <div className="container">
        <div className="heading">Weather Finder</div>
        <div  className="search-form">
        <input
          type="text"
          name="value"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={handaleSubmit}> find</button>
        </div>
        <div className="helper-text">Type City Name and Hit Enter</div>
        <div className="info">
          <div className="sub-heading">
            Weather Forecast <div>on</div>
          </div>
          <small className="date"></small>
          <div className="location"></div>
          <div className="forecast-info">
            <div className="forecast-icon">
            </div>
            <div className="forecast-value">
              <div className="degrees">
                <span className="degrees-count"></span>C
              </div>
              <span className="weather-condition"></span>
            </div>
          </div>
          <div className="additional-info">
            <ul className="list">
              <li>
                <b>Feels Like</b>
              </li>
              <li>
                <b>Min Temp</b>
              </li>
              <li>
                <b>Max Temp</b>
              </li>
              <li>
                <b>Pressure</b>
              </li>
              <li>
                <b>Humidity</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
