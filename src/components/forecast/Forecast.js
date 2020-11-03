import React, { useState, Component } from 'react';
import axios from 'axios';
import Conditions from '../conditions/Conditions';
import classes from './Forecast.module.css';


const Forecast = () => {

  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('imperial');

  const uriEncodedCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();

    fetch(`https://rapidapi.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "0a157b1b2emsh1de672134471601p14a7e7jsn8ee1f917a58b"
	}
})
.then(response =>
  response.json())
.then(response => {
  setResponseObj(response)
  console.log(response)
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
      />
    </div>
  )
  
}
export default Forecast;
