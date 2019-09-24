import React from 'react';
import logo from './logo.svg';
import './App.css';
// import 'paho-client';
import 'paho-mqtt';
import './ourmqtt.ts';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="scores">
          <p className="scoreNumber">4</p>
          <p className="scoreNumber">11</p>
        </div>
        ourmqtt.startConnect()
        <p className="setNumber">0:0</p> 
      </header>
    </div>
  );
}

export default App;


