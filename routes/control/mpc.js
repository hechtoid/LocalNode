const express = require("express");
const router = express.Router();
const shell = require('shelljs')

router.get('/single', (req, res) => {
    res.send(shell.exec('mpc single'))
})
router.get('/status', (req, res) => {
    // res.send(shell.exec('mpc'))
    const { stdout, stderr, code } = shell.exec('mpc', { silent: true })
    res.send(stdout)
})
router.get('/', (req, res) => {
    res.send(shell.exec('mpc'))
})
router.get('/play', (req, res) => {
    res.send(shell.exec('mpc play'))
})
router.get('/stop', (req, res) => {
    res.send(shell.exec('mpc stop'))
})

router.get('/mpcstop/', (req, res) => {
    shell.exec('mpc stop >/dev/null 2>&1')
    res.sendStatus(204)
})

module.exports = router;