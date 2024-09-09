// src/components/UserSpecificFeatures.js
import React from "react";
import "./UserSpecificFeatures.css";

const UserSpecificFeatures = ({ weather, userType }) => {
  if (!weather) return null;

  const renderFeature = () => {
    if (userType === "Event Planner") {
      return (
        <div className="user-feature">
          <img
            src="/icons/event.png"
            alt="Event Planner"
            className="user-icon"
          />
          <h3>Event Planner</h3>
          <p>Check the 5-day forecast to plan your events.</p>
        </div>
      );
    } else if (userType === "Farmer") {
      return (
        <div className="user-feature">
          <img src="/icons/farmer.png" alt="Farmer" className="user-icon" />
          <h3>Farmer</h3>
          <p>Keep an eye on weather alerts like frost warnings.</p>
        </div>
      );
    } else if (userType === "Traveler") {
      return (
        <div className="user-feature">
          <img src="/icons/traveler.png" alt="Traveler" className="user-icon" />
          <h3>Traveler</h3>
          <p>Compare weather between your current location and destination.</p>
        </div>
      );
    }
  };

  return <div className="user-features">{renderFeature()}</div>;
};

export default UserSpecificFeatures;
