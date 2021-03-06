const express = require("express");
const app = express();
const port = 80
const bodyParser = require('body-parser');
const path = require('path');
const serveIndex = require('serve-index-sort-date');
const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);

const api = require("./routes/api/api")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => 
  console.log(`${new Date().toUTCString()} Server is running on port ${port}`)
);
app.get("/*", (req, res, next) => {
  console.log(`${new Date().toUTCString()} ${req.ipInfo.city}, ${req.ipInfo.region}, ${req.ipInfo.country} ${req.ip} ${req.rawHeaders[3]} => ${req.originalUrl}`);
  next()
})
app.get('/', (req, res) => {
//	Let Them Hang
//	res.sendStatus(304)
})

app.use("/api", api);
app.use("/react/api", api); // for when running local react dev server


app.use(express.static(path.join(__dirname, 'static')));
 app.get('/localcontrol', (req, res) => {
 res.sendFile(path.resolve(__dirname, 'static', 'localcontrol', 'index.html'));
})

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('/react/*', (req, res) => {
 res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
})

app.use(express.static(path.join(__dirname, 'bora/build')));
app.get('/bora/demo/*', (req, res) => {
 res.sendFile(path.resolve(__dirname, 'bora', 'build', 'index.html'));
})




app.use('/media', serveIndex(path.join(__dirname, 'media'), {'view' : 'details'}))
app.use('/media', express.static(path.join(__dirname, 'media')));

app.use( (req, res, next) => {
//	Fake 404: Hang Time
})
