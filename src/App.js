import React from 'react';
import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import tempService from './utils/tempService'

function App() {
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('nothing yet')

  useEffect(() => {
    tempService.getTemps().then(res => setMessage(res.message))
  }, [score])

  return (
    <div className="App">
      <h1>Welcome to the Temperatue Game!</h1>
      <h1>{score}</h1>
      <h2>{message}</h2>
      <button onClick={() => setScore(score + 1)}>Click Me!</button>
    </div>
  );
}

export default App;
