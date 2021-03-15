const express = require("express");
const router = express.Router();
const shell = require('shelljs')
// const exec = require('await-exec')
const { exec } = require("child_process");

const mpc = require('./mpc')
const alsa = require('./alsa')

const chexec = (command) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

router.get('/tv/on', (req, res) => {
    chexec('hdmiON >/dev/null 2>&1')
    res.sendStatus(204)
   })
router.get('/tv/off', (req, res) => {
    chexec('hdmiOFF', {silent: true})
    res.sendStatus(204)
   })

router.get('/fog/me', (req, res) => {
    res.sendStatus(204)
    chexec('fogme >/dev/null 2>&1')
})

router.get('/rehome', (req, res) => {
    chexec('tmuxhome')
    res.sendStatus(204)
})

router.get('/waves', (req, res) => {
    res.sendStatus(204)
    chexec("waver")
})


router.use('/mpc', mpc)
router.use('/alsa', alsa)

module.exports = router;
