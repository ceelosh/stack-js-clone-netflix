require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const consign = require('consign');

const app = express();

consign()
    .include('middlewares/parsers.js')
    .then('routes')
    .then('config/boot.js')
    .into(app);