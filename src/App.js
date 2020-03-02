import React from 'react';
import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <h1>Welcome to the Temperatue Game!</h1>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Click Me!</button>
    </div>
  );
}

export default App;
