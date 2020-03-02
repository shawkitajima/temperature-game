const request = require('request');
const zipcodes = require('zipcodes');

module.exports = {
    getTemps
}

function getTemps(req, res) {
    let set1 = zipcodes.random();
    let set2 = zipcodes.random();
    // ensure we don't compare the same cities
    while (set1.city === set2.city) {
        set2 = zipcodes.random();
    }

    request(`https://api.darksky.net/forecast/${process.env.DARK_KEY}/${set1.latitude},${set1.longitude}`, function(err, forecast) {
        let parsed = JSON.parse(forecast.body);
        set1.temperature = parsed.currently.temperature
        request(`https://api.darksky.net/forecast/${process.env.DARK_KEY}/${set2.latitude},${set2.longitude}`, function(err, forecast) {
            let parsed = JSON.parse(forecast.body);
            set2.temperature = parsed.currently.temperature
            if (set1.temperature >= set2.temperature) {
                set1.outcome = 1;
                set2.outcome = 0
            }
            else {
                set1.outcome = 0;
                set2.outcome = 1;
            }
            res.send({
                set1,
                set2
            });
        });
    });
}