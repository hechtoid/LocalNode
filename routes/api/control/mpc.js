const express = require("express");
const router = express.Router();
const shell = require('shelljs')

router.get('/', (req, res) => { 
    const { stdout, stderr, code } = shell.exec(`mpc`, { silent: true })
    res.send(stdout)
})

// router.get('/:cmd?', (req, res) => {
//   const { stdout, stderr, code } = shell.exec(`mpc ${req.params.cmd}`, { silent: true })
//    res.send(stdout)
//})
// /gaping security hole

router.get('/volume', (req, res) => {
    const { stdout, stderr, code } = shell.exec('mpc volume', { silent: true })
    res.send(`${stdout.match(/volume:\ (.*?)%/)[1]}`)
})
router.get('/volumeup', (req, res) => {
    const { stdout, stderr, code } = shell.exec('mpc volume +1', { silent: true })
    res.send(`${stdout.match(/volume:\ (.*?)%/)[1]}`)
})
router.get('/volumedown', (req, res) => {
    const { stdout, stderr, code } = shell.exec('mpc volume -1', { silent: true })
    res.send(`${stdout.match(/volume:\ (.*?)%/)[1]}`)
})

module.exports = router;
