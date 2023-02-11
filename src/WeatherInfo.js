import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <img
              alt={props.data.description}
              src={props.data.iconUrl}
              id="icon"
            />
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li>
                {" "}
                <span id="description">{props.data.description}</span>
              </li>
              <li>
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{props.data.wind}</span>km/hr
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
