"use client";

import React, { useEffect, useState } from 'react';

export default function Meteo() {
    const [weather, setWeather] = useState(null);
    const options = { method: "GET", headers: { accept: "application/json" } };

    useEffect(() => {
        fetch("https://api.tomorrow.io/v4/weather/realtime?location=mestre%20venice&apikey=vaW9YSGpj0vCyVlpGtzNAowQh458gjzi", options)
            .then(response => response.json())
            .then(data => setWeather(data));
    }, []);

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Weather in {weather.name}</h1>
            <p>Temperature: {weather.temperature}°C</p>
        </div>
    );
};