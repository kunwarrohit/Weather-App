// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import UserSpecificFeatures from "./components/UserSpecificFeatures";
import "./App.css";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [userType, setUserType] = useState("Event Planner");

  const fetchWeather = async (city) => {
    const apiKey = "5d4163cdeb6a1935e3007e4a78d0a004";
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };

  return (
    <div className="App">
      <Header onSearch={fetchWeather} onUserTypeChange={handleUserTypeChange} />
      <WeatherInfo weather={weather} />
      <UserSpecificFeatures weather={weather} userType={userType} />
    </div>
  );
};

export default App;
