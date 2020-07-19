const express = require("express");
const app = express();
const port = 80
const bodyParser = require('body-parser');
const path = require('path');
const serveIndex = require('serve-index-sort-date');
const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);

const api = require("./routes/api/api")
const control = require("./routes/control/control")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => 
  console.log(`${new Date().toUTCString()} Server is running on port ${port}`)
);
app.get("/*", function (req, res, next) {
  console.log(`${new Date().toUTCString()} ${req.ip} [${req.ipInfo.city}] accessed ${req.originalUrl}`);
  // res.sendStatus(304);
  next()
})

app.use("/api", api);
app.use("/react/api", api); // for when running local react dev server
app.use("/control", control);

app.use(express.static(path.join(__dirname, 'static')));
 app.get('/localcontrol', (req, res) => {
 res.sendFile(path.resolve(__dirname, 'static', 'localcontrol', 'index.html'));
})

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('/react/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
})

app.use('/media', serveIndex(path.join(__dirname, 'media'), {'view' : 'details'}))
app.use('/media', express.static(path.join(__dirname, 'media')));