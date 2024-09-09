// src/components/WeatherInfo.js
import React from "react";
import "./WeatherInfo.css";
const WeatherInfo = ({ weather }) => {
  if (!weather) {
    return (
      <p className="no-weather">Please search for a city to see the weather.</p>
    );
  }

  const { name, main, weather: weatherDetails, wind } = weather;

  return (
    <div className="weather-info">
      <h2>Weather in {name}</h2>
      <p>Temperature: {Math.round(main.temp - 273.15)}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Description: {weatherDetails[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
