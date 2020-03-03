const BASE_URL = '/api/scores';

module.exports = {
    getScores,
}

function getScores() {
    return fetch(BASE_URL).then(res => res.json());
}