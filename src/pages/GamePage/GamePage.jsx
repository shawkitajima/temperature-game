import React from 'react';
import {useState, useEffect} from 'react';
import '../App/App.css'
import tempService from '../../utils/tempService';
import scoreService from '../../utils/scoreService';
import TempCard from '../../components/TempCard/TempCard';

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const [next, setNext] = useState(false);
  const [over, setOver] = useState(false);
  // we have to initialize temps because the TempCard props relies on 
  const [temps, setTemps] = useState({
    set1: {},
    set2: {},
  })

  useEffect(() => {
    tempService.getTemps().then(res => setTemps(res))
  }, [next])

  const handleGameOver = score => {
      console.log('score', score);
      scoreService.getScores().then(res => {
          let current = res;
          console.log(current);
          let last = current.pop();
          if (!last || score > last.score || current.length <= 18) {
              let name = prompt('You got a high score! Please enter your name!')
              let obj = {
                  score,
                  name
              };
              scoreService.setScore(obj).then(res => console.log(res));
          }
      });
  }

  return (
    <div className="App">
      <h1>Welcome to the Temperatue Game!</h1>
      <h2>Which place is currently hotter?</h2>
      { over && <h1>Game Over!</h1>}
      <h1>Your score: {score}</h1>
      <div className="flexHori">
        <div className="tempChoice">
          <TempCard choice={temps.set1}/>
          {show && <h2>{temps.set1.temperature}°F</h2>}
          <button disabled={show} onClick={() => {
            if (temps.set1.outcome) {
                setScore(score + 1);
                setShow(true);
            }
            else {
                handleGameOver(score);
                setScore(0);
                setShow(true);
                setOver(true);
            }
          }}>Me!</button>
        </div>
        <div className="tempChoice">
          <TempCard choice={temps.set2}/>
          {show && <h2>{temps.set2.temperature}°F</h2>}
          <button disabled={show} onClick={() => {
            if (temps.set2.outcome) {
                setScore(score + 1);
                setShow(true);
            }
            else {
                handleGameOver(score);
                setScore(0);
                setShow(true);
                setOver(true);
            }
          }}>Me!</button>
        </div>
      </div>
      { show && 
        <button onClick={() => {
            setShow(false);
            setNext(!next);
            setOver(false);
        }}>
            Play
        </button>}
    </div>
  );
}

export default GamePage;
