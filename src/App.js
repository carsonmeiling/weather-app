import React from 'react';
import Logo from './components/logo/Logo'
import './App.css';
import Forecast from './components/forecast/Forecast'


function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <Logo />
        <h1>
          Weather App
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
