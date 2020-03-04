const BASE_URL = '/api/scores';

module.exports = {
    getScores,
    setScore,
}

function getScores() {
    return fetch(BASE_URL).then(res => res.json());
}

function setScore(score) {
    return fetch(BASE_URL + '/set', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(score)
    })
    .then(res => res.json());
}