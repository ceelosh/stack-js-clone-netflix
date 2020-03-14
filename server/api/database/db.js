
const mysql = require("mysql");
const dbConfig = require('../config/db.config.js');


const dbConnection = mysql.createConnection(dbConfig);
dbConnection.connect( error => {
    if(error){
        throw error;
    }

    console.log("Success!")
});

module.exports = dbConnection;