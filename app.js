const express = require("express");
const app = express();
const port = 80
const shell = require('shelljs')
const bodyParser = require('body-parser');
const path = require('path');
const serveIndex = require('serve-index-sort-date');
const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);

const weather = require("./routes/api/weather")

app.listen(port, () => console.log(`${new Date().toUTCString()} Server is running on port ${port}`));

app.get("/", function (req, res) {
  const ipInfo = req.ipInfo;
  console.log(`${new Date().toUTCString()} ROOT ${req.ip} [${ipInfo.city}] accessed ROOT`);
  // res.sendStatus(304);
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('/react/', (req, res) => {
 res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
})

app.use("/react/api/weather", weather);

// for when running local react dev server
app.use("/api/weather", weather);

app.get('/mpcstop/', (req, res) => {
 shell.exec('./cgi/mpcstop')
})

app.use('/media', serveIndex(path.join(__dirname, 'media'), {'view' : 'details'}));
app.use('/media', express.static(path.join(__dirname, 'media')));


