const express = require("express");
const app = express();
const port = 80
const shell = require('shelljs')
const cron = require('node-cron');
const bodyParser = require('body-parser');
const path = require('path');
const serveIndex = require('serve-index-sort-date');
const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);

const weather = require("./routes/api/weather")
const weathercron = require("./routes/api/weathercron")
//const transit = require("./routes/api/transit")

const control = require("./routes/control/control")

const woa = require("./routes/api/woa")

app.listen(port, () => console.log(`${new Date().toUTCString()} Server is running on port ${port}`));

app.get("/", function (req, res) {
  const ipInfo = req.ipInfo;
  console.log(`${new Date().toUTCString()} ROOT ${req.ip} [${ipInfo.city}] accessed ROOT`);
  // res.sendStatus(304);
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// for when running local react dev server
app.use("/api/weather", weather);
app.use("/react/api/weather", weather);

app.use("/control", control);

app.use("/api/woa", woa);

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('/react/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
})

app.get('/mpcstop/', (req, res) => {
 shell.exec('./cgi/mpcstop')
 res.sendStatus(204)
})

app.use(express.static(path.join(__dirname, 'static')));
 app.get('/localcontrol', (req, res) => {
 res.sendFile(path.resolve(__dirname, 'static', 'localcontrol', 'index.html'));
})



app.get('/weathercron/', (req, res) => {
  weathercron()
})

app.use('/media', function (req, res, next){
  const ipInfo = req.ipInfo;
  console.log(`${new Date().toUTCString()} MEDIA ${req.ip} [${ipInfo.city}] accessed ${req.originalUrl}`);
  next()
})
app.use('/media', serveIndex(path.join(__dirname, 'media'), {'view' : 'details'}))
app.use('/media', express.static(path.join(__dirname, 'media')));


