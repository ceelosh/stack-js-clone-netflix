require('dotenv').config();
const express = require('express');
const consign = require('consign');
const database = require('./database/db');
database(() => {
    const app = express();

    consign()
        .include('middlewares/parsers.js')
        .then('routes')
        .then('config/boot.js')
        .into(app);
});