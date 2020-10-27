import React, { useState, Component } from 'react';
import axios from 'axios';


const Forecast = () => {

  let [responseObj, setResponseObj] = useState({});

  function getForecast() {
    fetch("https://rapidapi.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
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
  })
.catch(err => {
	console.error(err);
});
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <div>
          {JSON.stringify(responseObj)}
      </div>
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  )
  
}
export default Forecast;
