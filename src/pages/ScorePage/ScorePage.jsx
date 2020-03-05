import React from 'react';
import { useState, useEffect} from 'react';
import scoreService from '../../utils/scoreService';
import styles from './ScorePage.module.css';

const ScorePage = () => {
    const [scores, setScores] = useState([]);
    useEffect(() => {
        scoreService.getScores().then(res => setScores(res))
    }, [])

    return (
        <div>
            <h1>Current High Scores</h1>
            <div className={styles.scores}>
                <div className="flexHori">
                    <h2 style={{textDecoration: "underline"}}>Name</h2>
                    <h2 style={{textDecoration: "underline"}}>Score</h2>
                </div>
                {scores.map((scores, idx) => 
                    <div key={idx} className="flexHori">
                        <h2>{scores.name}</h2>
                        <h2>{scores.score}</h2>
                    </div>
                )}
            </div>

        </div>
    )
}


export default ScorePage;