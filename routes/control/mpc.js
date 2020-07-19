const express = require("express");
const router = express.Router();
const shell = require('shelljs')

router.get('/:cmd?', (req, res) => {
    const { stdout, stderr, code } = shell.exec(`mpc ${req.params.cmd}`, { silent: true })
    res.send(stdout)
})

module.exports = router;