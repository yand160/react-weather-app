import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_SKY_DAY",
    "01n": "CLEAR_SKY_NIGHT",
    "02d": "FEW_CLOUDS_DAY",
    "02n": "FEW_CLOUDS_NIGHT",
    "03d": "SCATTERED_CLOUDS_DAY",
    "03n": "SCATTERED_CLOUDS_NIGHT",
    "04d": "BROKEN_CLOUDS_DAY",
    "04n": "BROKEN_CLOUDS_NIGHT",
    "05d": "SHOWER_RAIN_DAY",
    "05n": "SHOWER_RAIN_NIGHT",
    "06d": "RAIN_DAY",
    "06n": "RAIN_NIGHT",
    "07d": "THUNDERSTORM_DAY",
    "07n": "THUNDERSTORM_NIGHT",
    "08d": "SNOW_DAY",
    "08n": "SNOW_NIGHT",
    "09d": "MIST_DAY",
    "09n": "MIST_NIGHT",
  };

  return (
    <WeatherIcon
      icon={codeMapping[props.code]}
      color="#1e1e1e"
      size={props.size}
      animate={true}
    />
  );
}
