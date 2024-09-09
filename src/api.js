import axios from "axios";

const fetchWeather = async (location) => {
  const apiKey = "5d4163cdeb6a1935e3007e4a78d0a004";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};
