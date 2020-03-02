const BASE_URL = '/api/temps';

module.exports = {
    getTemps,
}

function getTemps() {
    return fetch(BASE_URL).then(res => res.json())
}