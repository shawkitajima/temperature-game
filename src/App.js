import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import GamePage from './pages/GamePage/GamePage';
import ScorePage from './pages/ScorePage/ScorePage';

const App = () => {
  return (
    <div className="container">
      <nav className='flexHori'>
        <Link to='/'>Game</Link>
        <Link to='/scores'>High Scores</Link>
      </nav>
      <Route exact path='/' component={GamePage}/>
      <Route exact path='/scores' component={ScorePage}/>
    </div>
  )
}

export default App;
