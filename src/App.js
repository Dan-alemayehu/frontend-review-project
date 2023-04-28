import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Heading from './components/Heading';
import Restaurant from './components/Restaurant';
import Mood from './components/Mood';
import Anime from './components/Anime';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <>
      <header className="App-header">
        <Heading />
      </header>
      <App_div className="App">
        <div className="Restaurant-div">
          <Restaurant />
        </div>

        <div className="Mood-div">
          <Mood />
        </div>

        <div className="Anime-div">
          <Anime />
        </div>
      </App_div>
    </>
  );
}

export default App;

const App_div = styled.div`
display: flex;
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
    flex-shrink: 0;
`
