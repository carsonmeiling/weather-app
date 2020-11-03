import React, { useState, Component } from 'react';
import axios from 'axios';
import Conditions from '../conditions/Conditions';
import classes from './Forecast.module.css';


const Forecast = () => {

  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('imperial');
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  const uriEncodedCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    setError(false);
    setResponseObj({});
    setLoading(true);
  
  let uriEncodedCity = encodeURIComponent(city);

    fetch(`https://rapidapi.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_API_KEY
	}
})
.then(response => response.json())
.then(response => {
  setResponseObj(response)
  console.log(response)
    if (response.cod !== 200) {
      throw new Error()
    }
  })
.catch(err => {
	console.error(err);
});
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          className = {classes.textInput}
          onChange={(e) => setCity(e.target.value)}
        />
        <label className = {classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"

            onChange={(e) => setUnit(e.target.value)}
          />
            Fahrenheit
        </label>
        <label className = {classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
            Celcius
        </label>
        <button 
          className = {classes.Button}
          type="submit">Get Forecast</button>
    </form>
      <Conditions
        responseObj={responseObj}
        error = {error}
        loading = {loading}
      />
    </div>
  )
  
}
export default Forecast;
