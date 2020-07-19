const express = require("express");
const router = express.Router();
const shell = require('shelljs')

const mpc = require('./mpc')

router.get('/tv/on', (req, res) => {
    shell.exec('hdmiON >/dev/null 2>&1')
    res.sendStatus(204)
   })
router.get('/tv/off', (req, res) => {
    shell.exec('hdmiOFF >/dev/null 2>&1')
    res.sendStatus(204)
   })

router.get('/fog/me', (req, res) => {
    res.sendStatus(204)
    shell.exec('fogme >/dev/null 2>&1')
})

router.get('/rehome', (req, res) => {
    shell.exec('tmuxhome')
    res.sendStatus(204)
})


router.use('/mpc', mpc)
    

module.exports = router;