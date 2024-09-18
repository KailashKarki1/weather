// src/App.js  

import React, { useState, useEffect } from 'react';  
import Weather from './Weather';  
import './App.css';  

const App = () => {  
  const [weatherData, setWeatherData] = useState(null);  
  const API_KEY = '60235f39ae0946b38a9140953241809'; // Your actual API key  
  const LOCATION = 'Toronto'; // Location for weather data  

  useEffect(() => {  
    const fetchWeatherData = async () => {  
      try {  
        const response = await fetch(  
          `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${LOCATION}&days=4&aqi=no&alerts=no`  
        );  
        if (!response.ok) {  
          throw new Error('Network response was not ok');  
        }  
        const data = await response.json();  
        setWeatherData(data);  
      } catch (error) {  
        console.error('Error fetching the weather data:', error);  
      }  
    };  

    fetchWeatherData();  
  }, [API_KEY, LOCATION]);  

  return (  
    <div>  
      {weatherData ? <Weather weatherData={weatherData} /> : <h1>Loading...</h1>}  
    </div>  
  );  
};  

export default App;