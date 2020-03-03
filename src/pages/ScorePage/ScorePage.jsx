import React from 'react';
import { useState, useEffect} from 'react';
import scoreService from '../../utils/scoreService';

const ScorePage = () => {
    const [scores, setScores] = useState([]);
    useEffect(() => {
        scoreService.getScores().then(res => setScores(res))
    })

    return (
        <div>
            <h1>Current High Scores</h1>
            {scores.map((scores) => 
                <div className="flexHori">
                    <h2>{scores.name}</h2>
                    <h2>{scores.score}</h2>
                </div>
            )}

        </div>
    )
}


export default ScorePage;