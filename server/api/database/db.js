
const mysql = require("mysql");
const dbConfig = require('../config/db.config.js');
const dbConnection = mysql.createConnection(dbConfig);

//module.exports = dbConnection;
module.exports = app => {
    dbConnection.connect( error => {
        if(error){
            throw error;
        }
    
        console.log("Success!");
        app();
    });
}