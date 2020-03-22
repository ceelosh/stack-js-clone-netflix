require('dotenv').config();
const express = require('express');
const consign = require('consign');
//DATABASE
const databaseConnection = require('./database/connection');
const DbStructure = require('./database/structure');

databaseConnection.connect( error => {
    if(error){
        throw error;
    }else{        
        DbStructure.init(databaseConnection);
        console.log("Success!");
        //callback
        const app = express();

        consign()
            .include('middlewares/parsers.js')
            .then('routes')
            .then('config/boot.js')
            .into(app);
    }    
});