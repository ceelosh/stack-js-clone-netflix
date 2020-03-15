
const mysql = require("mysql");
const dbConfig = require('../config/db.config.js');
const dbConnection = mysql.createConnection(dbConfig);
const DbStructure = require('./structure');
module.exports = app => {
    dbConnection.connect( error => {
        if(error){
            throw error;
        }else{        
            DbStructure.init(dbConnection);
            console.log("Success!");
            app();
        }    
    });
}