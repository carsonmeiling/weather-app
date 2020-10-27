import React, { useState, Component } from 'react';
import axios from 'axios';


const Forecast = () => {

  let [responseObj, setResponseObj] = useState({});

  function getForecast() {
    fetch("https://rapidapi.p.rapidapi.com/weather?q=London", {
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
      <div>
          {JSON.stringify(responseObj)}
      </div>
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  )
  
}
export default Forecast;
