const express = require("express");
const router = express.Router();

const shell = require('shelljs')

router.get('/tv/on', (req, res) => {
    shell.exec('hdmiON')
    res.sendStatus(204)
   })
router.get('/tv/off', (req, res) => {
    shell.exec('hdmiOFF')
    res.sendStatus(204)
   })

router.get('/fog/me', (req, res) => {
    res.sendStatus(204)
    shell.exec('fogme')
})

router.get('/rehome', (req, res) => {
    shell.exec('tmuxhome')
    res.sendStatus(204)
})

router.get('/mpcstop/', (req, res) => {
    shell.exec('mpc stop')
    res.sendStatus(204)
   })
   

module.exports = router;