import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const {latitude, longitude} = position.coords;
                    try {
                        const APIKEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
                        const response = await axios.get(
                            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`
                        );
                        // With axios, the data is in response.data
                        setWeather(response.data);
                    } catch(error) {
                        console.error('Weather API Error:', error); // Add this for debugging
                        setError('Error fetching weather');
                    } finally {
                        setLoading(false);
                    }
                },
                (error) => {
                    setError('Location access denied');
                    setLoading(false);
                }
            );
        }
    }, []);

    if (loading) return <div className="text-blue-100">Loading...</div>;
    if (error) return <div className="text-blue-100">{error}</div>;
    if (!weather) return null;

    return (
        <div className="flex items-center text-blue-100">
            <img 
                src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
                className="w-8 h-8"
            />
            <div className="ml-2 flex flex-col">
                <span className="text-sm">{weather.name}</span>
                <span>{Math.round(weather.main.temp)}°C</span>
            </div>
        </div>
    );
}

export default Weather;