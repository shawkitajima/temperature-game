const Score = require('../models/score');

module.exports = {
    getScores,
    addScore,
}

function getScores(req, res) {
    Score.findById(process.env.MODEL_ID, function(err, scores) {
        console.log(scores.scores);
        res.send(scores.scores);
    })
}

function addScore(req, res) {
    Score.create({scores: [req.body.score]}, function(err, score) {
        res.send(score);
    });
}