require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
const routes = require('../routes/index.js');

app.use(cors());
//is like body-parser, make a test in this file of config/server
app.use(express.json());

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log(`SERVIDOR RODANDO EM http://localhost:${process.env.PORT}`);
})