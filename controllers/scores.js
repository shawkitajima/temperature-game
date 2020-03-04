const Score = require('../models/score');

module.exports = {
    getScores,
    addScore,
    setScore,
}

function getScores(req, res) {
    Score.findById(process.env.MODEL_ID, function(err, scores) {
        res.send(scores.scores);
    })
}

function addScore(req, res) {
    Score.create({scores: [req.body.score]}, function(err, score) {
        res.send(score);
    });
}

function setScore(req, res) {
    Score.findById(process.env.MODEL_ID, function(err, scores) {
        let scoresArr = scores.scores;
        scoresArr.push(req.body);
        scoresArr.sort((a, b) => (b.score - a.score))
        if (scoresArr.length >= 20) {
            scoresArr = scoresArr.slice(0, 20);
        }
        Score.findByIdAndUpdate(process.env.MODEL_ID, {scores: scoresArr}, {new: true}, function(err, score) {
            res.send(score.scores);
        })
    })
}