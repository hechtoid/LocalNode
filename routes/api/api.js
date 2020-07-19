const express = require("express");
const router = express.Router();

const weather = require("./weather")
const weathercron = require("./weathercron")
// const transit = require("transit")
const woa = require("./woa")

router.use('/weather', weather)

router.use('/woa', woa)
router.get('/req', (req, res) => {
	res.send('a req')
	console.log(req.rawHeaders)
})
module.exports = router;
