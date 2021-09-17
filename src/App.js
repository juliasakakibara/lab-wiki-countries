
import React from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CountriesList countries={countries} />
      
    </div>
  );
}

export default App;
