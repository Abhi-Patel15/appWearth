import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { getCityName } from "./redux/slice/citySlices";
import { getDataAsync } from "./redux/slice/weartherSlice";

export const Test = () => {
  const [cityName, setCityName] = useState("surat");
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.weather?.data)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCityName(cityName));
  };

  useEffect(() => {
    dispatch(getDataAsync(cityName));
  }, [cityName, dispatch]);

  return (
    <>
    <div className="background_img">
    <div className="container">
      <form onSubmit={handleSubmit} className="search-form m-5">
        <input
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <button type="submit">search</button>
      </form>
      <div className="helper-text">Type City Name and Hit Enter</div>
      <div className="info">
        <div className="sub-heading">
          Weather Forecast <div>on</div>
        </div>
        <small className="date">
        { moment().format("MMM DD YYYY") } 
        </small>
        <div className="location">
            {data.name}
        </div>
        <div className="forecast-info">
          <div className="forecast-icon">
          <div className="forecast-icon">
                  <img
                    src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                    alt=""
                  />
              </div>
          </div>
          <div className="forecast-value">
            <div className="degrees">
              <span className="degrees-count">{Math.floor(data.main.temp_max-273.15)}</span>C
            </div>
            <span className="weather-condition">
            {data.weather[0].main }
            </span>
          </div>
        </div>
        <div className="additional-info">
          <ul className="list">
            <li>
              <b>Feels Like:{Math.floor(data.main?.feels_like-273)}</b>
            </li>
            <li>
       
              <b>Min Temp:{Math.floor(data.main.temp_min-273)}</b>  
            </li>
            <li>
              <b>Max Temp:{Math.floor(data.main.temp_max-273)}</b>
            </li>
            <li>
              <b>Pressure:{data.main.pressure}</b>
            </li>
            <li>
              <b>Humidity: {data.main.humidity}</b>
            </li>
          </ul>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};
