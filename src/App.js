import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from './components/forecast/Forecast'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>
          React Weather App
        </h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page by Carson Meiling
      </footer>
    </div>
  );
}

export default App;
