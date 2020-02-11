import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Weather from './components/weather.js'

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Route path="/weather" component={Weather} />
      </HashRouter>
    </div>
  );
}

export default App;
