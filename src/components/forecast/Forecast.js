import React, { useState, Component } from 'react';
import axios from 'axios';


const Forecast = () => {

  
  componentDidMount() {
    const options = {
      method: 'GET',
      url: 'https://rapidapi.p.rapidapi.com/weather',
      params: {
        q: 'London,uk',
        lat: '0',
        lon: '0',
        callback: 'test',
        id: '2172797',
        lang: 'null',
        units: '"metric" or "imperial"',
        mode: 'xml, html'
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '0a157b1b2emsh1de672134471601p14a7e7jsn8ee1f917a58b',
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return(

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
