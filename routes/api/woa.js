const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:term?", (req, res) => {
    console.log(`WOA DUDE...${req.params.term}`)
    let queryTerm = () => {
        let url = `http://google.com/complete/search?q=${req.params.term}&client=firefox`
        return axios.get(url).then(response => response.data);
    };
    queryTerm().then(data => {
        res.json({data})
    }).catch();
})

module.exports = router;