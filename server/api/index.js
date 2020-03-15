require('dotenv').config();
const express = require('express');
const consign = require('consign');
const databaseConnection = require('./database/connection');
databaseConnection(() => {
    const app = express();

    consign()
        .include('middlewares/parsers.js')
        .then('routes')
        .then('config/boot.js')
        .into(app);
});