// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";

const Header = ({ onSearch, onUserTypeChange }) => {
  const [city, setCity] = useState("");
  const [userType, setUserType] = useState("Event Planner"); // Default user type

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    onUserTypeChange(e.target.value);
  };

  return (
    <header className="header">
      <div className="container">
        <h1>Weather Dashboard</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {/* Dropdown for user type selection */}
        <div className="user-type">
          <label htmlFor="userType">Choose user type: </label>
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="Event Planner">Event Planner</option>
            <option value="Farmer">Farmer</option>
            <option value="Traveler">Traveler</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
