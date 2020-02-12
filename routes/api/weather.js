const express = require("express");
const router = express.Router();
const axios = require("axios");
const sqlite3 = require('sqlite3').verbose();

router.get("/spots", (req, res) => {
    let db = new sqlite3.Database('./db/weather.db', (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('SELECT spots FROM the weather database.');
    });
    let sql = `SELECT * FROM spots`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows)
    });
    db.close();
})

router.post("/spots", (req, res) => {
    let db = new sqlite3.Database('./db/weather.db', (err) => {
        if (err) {
            console.error(err.message);
        }
    });
    let name = req.query.name
    let geocoords = req.query.geocoords
    let stmt = db.prepare("INSERT INTO spots VALUES (?,?)");
    stmt.run(name, geocoords)
    stmt.finalize()
    db.close();
    res.json(name)
    console.log(`INSERT ${name} INTO the weather database.`);

})

router.get("/geo/:latlong?", (req, res) => {
    const getGeoWeather = () => {
        let url = `https://api.forecast.io/forecast/cf20d2bc8131e875da42c2f5f85d7282/${req.params.latlong}?exclude=[,minutely,flags,])`;
        return axios.get(url).then(response => response.data);
    };
    getGeoWeather().then(data => {
        res.json({ data })
    })
})

module.exports = router;