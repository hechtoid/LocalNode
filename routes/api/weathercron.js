const axios = require("axios");
const sqlite3 = require('sqlite3').verbose();

const nth = function (d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

function weathercron() {   let db = new sqlite3.Database('./db/weather.db', (err) => {
        if (err) {
            console.error(err.message);
        }
    });
    let spots = []
    let sql = `SELECT * FROM spots`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach(el => {
            axios.get(`https://api.forecast.io/forecast/cf20d2bc8131e875da42c2f5f85d7282/${el.geocoords}?exclude=[,currently,hourly,minutely,flags,])`)
            .then(data => {
                let week = {}
                data.data.daily.data.forEach(el => {
                    let timestamp = new Date(0)
                    timestamp.setUTCSeconds(el.apparentTemperatureHighTime)
                    timestring = `${timestamp.toLocaleTimeString()} on the ${timestamp.getDate()}${nth(timestamp.getDate())}`
                    week[timestring] = el.apparentTemperatureHigh
                })
                spots.push(`UPDATE spots SET weeklies = ${JSON.stringify(week)} WHERE name LIKE ${el.name}`);
                console.log(spots)
            })
        });
    })
    // spots.forEach(el =>{
    //     console.log(el)
    //     let stmt = db.prepare(el)
    //     stmt.run()
    //     stmt.finalize()
    // })



    db.close();

    
}

module.exports = weathercron