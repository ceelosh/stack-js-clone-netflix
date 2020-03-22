const CategoryModel = require('../../models/Category');
exports.create = (req, res) => {
    //validation
    const category = req.body;
    CategoryModel.create(category, (err, data) => {
        if(err){
            res.status(500).send(err.message || "Erro ao conectar com o banco de dados.");
        }else{
            res.status(200).send(data);
        }
    });
}

exports.selectAll = (req, res) => {

    CategoryModel.listAll((err, data) => {
        if(err){
            res.status(500).send(err.message || "Erro ao conectar com o banco de dados.")
        }else{
            if(data.length == 0){
                res.status(200).send({message: "Não possui categoria cadastrada!",data: data});
            }else if(data.length > 0){
                res.status(200).send({message: `${data.length} categoria(s) encontradas`,data: data});
            }       
        }
    });
}