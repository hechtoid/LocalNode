const express = require("express");
const app = express();
const port = 80


const path = require('path');
const serveIndex = require('serve-index-sort-date');
const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);

const weather = require("./routes/api/weather")

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.get("/", function (req, res) {
  const ipInfo = req.ipInfo;
  console.log(`ROOT ${req.ip} [${ipInfo.city}] accessed ROOT at ${new Date().toUTCString()} ROOT`);
  // res.sendStatus(304);
})

app.use("/api/weather", weather);

app.use(express.static(path.join(__dirname, 'static/weather/build')));
app.get('/weather', function (req, res) {
  res.sendFile(path.join(__dirname, 'static/weather/build', 'index.html'));
});

app.use('/media', serveIndex(path.join(__dirname, 'media'), {'view' : 'details'}));
app.use('/media', express.static(path.join(__dirname, 'media')));


