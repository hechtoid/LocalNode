const express = require("express");
const router = express.Router();
const shell = require('shelljs')

router.get('/', (req, res) => { 
    let { stdout:PCMout } = shell.exec(`amixer -c 2 -M get PCM`, { silent: true })
    let { stdout:bassOut } = shell.exec(`amixer -c 2 -M get Bass`, { silent: true })
    let { stdout:trebleOut } = shell.exec(`amixer -c 2 -M get Treble`, { silent: true })
    res.send({ PCM: PCMout, Bass: bassOut, Treble: trebleOut })
})
router.get('/trebleup', (req, res) => {
	let { stdout:trebleIn } = shell.exec(`amixer -c 2 -M get Treble`, { silent: true })
	let trebleVal = parseInt(trebleIn.match(/Mono:\ (.*?)\ /)[1])
	let { stdout:trebleOut } = shell.exec(`amixer -c 2 -M set Treble ${trebleVal+1}`, { silent: true })
	let treblePercent = parseInt(trebleOut.match(/\[(.*?)\]/)[1])
	res.send(`${treblePercent}%`)
})
router.get('/trebledown', (req, res) => {
	let { stdout:trebleIn } = shell.exec(`amixer -c 2 -M get Treble`, { silent: true })
	let trebleVal = parseInt(trebleIn.match(/Mono:\ (.*?)\ /)[1])
	let { stdout:trebleOut } = shell.exec(`amixer -c 2 -M set Treble ${trebleVal-1}`, { silent: true })
	let treblePercent = parseInt(trebleOut.match(/\[(.*?)\]/)[1])
	res.send(`${treblePercent}%`)
})
router.get('/bassup', (req, res) => {
	let { stdout:bassIn } = shell.exec(`amixer -c 2 -M get Bass`, { silent: true })
	let bassVal = parseInt(bassIn.match(/Mono:\ (.*?)\ /)[1])
	let { stdout:bassOut } = shell.exec(`amixer -c 2 -M set Bass ${bassVal+1}`, { silent: true })
	let bassPercent = parseInt(bassOut.match(/\[(.*?)\]/)[1])
	res.send(`${bassPercent}%`)
})
router.get('/bassdown', (req, res) => {
	let { stdout:bassIn } = shell.exec(`amixer -c 2 -M get Bass`, { silent: true })
	let bassVal = parseInt(bassIn.match(/Mono:\ (.*?)\ /)[1])
	let { stdout:bassOut } = shell.exec(`amixer -c 2 -M set Bass ${bassVal-1}`, { silent: true })
	let bassPercent = parseInt(bassOut.match(/\[(.*?)\]/)[1])
	res.send(`${bassPercent}%`)
})

module.exports = router;
