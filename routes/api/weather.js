const express = require("express");
const router = express.Router();
const axios = require("axios");

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