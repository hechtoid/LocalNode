const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:term?", (req, res) => {
    let term = req.params.term ? req.params.term : ' '
    console.log(`WOA DUDE...${term}`)
    let queryTerm = () => {
        let url = `http://google.com/complete/search?q=${term}&client=firefox`
        return axios.get(url).then(response => response.data);
    };
    queryTerm().then(data => {
        res.json({data})
    }).catch();
})

module.exports = router;