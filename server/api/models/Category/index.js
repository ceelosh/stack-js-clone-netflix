const dbConn = require('../../database/connection');

class CategoryModel{

    create(category, result){
        console.log(category);
        const q = "INSERT INTO `CATEGORY`(`NAME`) VALUES (?)";
        dbConn.query(q, category, (err, res) => {
            if(err){
                console.log(err);
                result(err, null);
            }
            console.log(res);
            result(null, { id: res.insertId, ...category})
        });
    }

    listAll(result){
        const q = "SELECT ID, NAME FROM CATEGORY";
        dbConn.query(q, (err, res, fields) => {
            if(err){
                result(err, null);
            }
            result(null, res);     
        });
    }
}

module.exports = new CategoryModel;