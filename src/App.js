import React from 'react';
import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import tempService from './utils/tempService';
import TempCard from './components/TempCard/TempCard';

function App() {
  const [score, setScore] = useState(0)
  // we have to initialize temps because the TempCard props relies on 
  const [temps, setTemps] = useState({
    set1: {},
    set2: {},
  })

  useEffect(() => {
    tempService.getTemps().then(res => setTemps(res))
  }, [score])

  return (
    <div className="App">
      <h1>Welcome to the Temperatue Game!</h1>
      <h2>Which place is currently hotter?</h2>
      <h1>{score}</h1>
      <div className="flexHori">
        <div className="tempChoice">
          <TempCard choice={temps.set1}/>
          <button onClick={() => {
            if (temps.set1.outcome) {
              setScore(score + 1);
            }
            else {
              setScore(0);
            }
          }}>Me!</button>
        </div>
        <div className="tempChoice">
          <TempCard choice={temps.set2}/>
          <button onClick={() => {
            if (temps.set2.outcome) {
              setScore(score + 1);
            }
            else {
              setScore(0);
            }
          }}>Me!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
