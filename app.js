const http = require('http');
const express = require('express');

const surveyRoutes = require('./routes/surveyRoutes.js');
const {httpPort} = require("./config/config.js");

const app = express();
const httpServer = http.createServer(app);

app.use(express.json());

app.use((err, req, res , next) => {
    res.status(400).json("Invalid Json format");
}
);

app.use('/api/survey', surveyRoutes);

httpServer.listen(httpPort);