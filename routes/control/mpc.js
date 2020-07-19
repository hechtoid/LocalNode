const express = require("express");
const router = express.Router();
const shell = require('shelljs')

router.get('/', (req, res) => { 
    const { stdout, stderr, code } = shell.exec(`mpc`, { silent: true })
    res.send(stdout)
})
router.get('/:cmd?', (req, res) => {
    const { stdout, stderr, code } = shell.exec(`mpc ${req.params.cmd}`, { silent: true })
    res.send(stdout)
})

module.exports = router;
