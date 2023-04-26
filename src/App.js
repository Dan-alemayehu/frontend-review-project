import logo from './logo.svg';
import React from 'react';
import Heading from './components/Heading';
import Restaurant from './components/Restaurant';
import Mood from './components/Mood';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <Heading />
      </header>
      </div>
      
      <div className="Restaurant-div">
        <Restaurant />
      </div>

      <div className="Mood-div">
        <Mood />
      </div>
      </>
  );
}

export default App;
