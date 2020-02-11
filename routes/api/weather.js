const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/tele", (req, res) => {
    const getTeleWeather = () => {
        let url = 'https://api.forecast.io/forecast/cf20d2bc8131e875da42c2f5f85d7282/37.7998,-122.4063?exclude=[,minutely,flags,]`)';
        return axios.get(url).then(response => response.data);
    };
    getTeleWeather().then(data => {
        res.json({data})
    })
})

router.get("/tam", (req, res) => {
    const getTamWeather = () => {
        let url = 'https://api.forecast.io/forecast/cf20d2bc8131e875da42c2f5f85d7282/37.9203,-122.5857?exclude=[,minutely,flags,]`)';
        return axios.get(url).then(response => response.data);
    };
    getTamWeather().then(data => {
        res.json({data})
    })
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