// src/Weather.js  

import React from 'react';  
import './Weather.css';  

const Weather = ({ weatherData }) => {  
  return (  
    <div className="weather-container">  
      <h1>Weather in {weatherData.location.name}</h1>  
      <div className="current-weather">  
        <h2>{weatherData.current.temp_c}°C</h2>  
        <p>{weatherData.current.condition.text}</p>  
        <img   
          src={`http:${weatherData.current.condition.icon}`}   
          alt={weatherData.current.condition.text}   
        />  
        <div className="current-details">  
          <p>Max Temp: {weatherData.forecast.forecastday[0].day.maxtemp_c}°C</p>  
          <p>Min Temp: {weatherData.forecast.forecastday[0].day.mintemp_c}°C</p>  
          <p>Humidity: {weatherData.current.humidity}%</p>  
          <p>Wind Speed: {weatherData.current.wind_kph} kph</p>  
        </div>  
      </div>  
      <h2>4-Day Forecast</h2>  
      <div className="forecast-container">  
        {weatherData.forecast.forecastday.map((day, index) => (  
          <div key={index} className="forecast-day">  
            <h3>{new Date(day.date).toLocaleDateString(undefined, { weekday: 'long' })}</h3>  
            <img   
              src={`http:${day.day.condition.icon}`}   
              alt={day.day.condition.text}   
            />  
            <p>Temp: {day.day.avgtemp_c}°C</p>  
            <p>Condition: {day.day.condition.text}</p>  
            <p>Max Temp: {day.day.maxtemp_c}°C</p>  
            <p>Min Temp: {day.day.mintemp_c}°C</p>  
            <p>Humidity: {day.day.avghumidity}%</p>  
            <p>Wind Speed: {day.day.maxwind_kph} kph</p>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Weather;