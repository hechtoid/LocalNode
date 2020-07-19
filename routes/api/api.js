const express = require("express");
const router = express.Router();

const weather = require("./weather")
const weathercron = require("./weathercron")
// const transit = require("transit")
const woa = require("./woa")

router.use('/weather', weather)

router.use('/woa', woa)

module.exports = router;