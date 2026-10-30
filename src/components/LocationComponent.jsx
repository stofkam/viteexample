import React, { useState } from "react";

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (err) => {
        setError(err.message);
      },
    );
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={handleGetLocation}>Где я?</button>
      {location && (
        <p>
          Lat: {location.latitude}, Lng: {location.longitude}
        </p>
      )}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default LocationComponent;
