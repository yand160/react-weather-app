import React from "react";
import WeatherForecast from "./WeatherForecast";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <span className="day">{day()}</span>
      <div className="icon">
        <img src={props.data.condition[0].icon_url} width="75px" alt="icon" />
      </div>
      <span className="high">
        <strong>{Math.round(props.data.temperature.maximum)}°</strong>|
      </span>
      <span className="low">
        {" "}
        {Math.round(props.data.temperature.minimum)}°
      </span>
    </div>
  );
}
