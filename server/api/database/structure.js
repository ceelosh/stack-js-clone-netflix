class Structure{

    init(connection){
        this.connection = connection;
        this.createTables();
    }

    createTables(){
        this.tableCategory();
    }

    tableCategory(){
        let q = 'CREATE TABLE IF NOT EXISTS CATEGORY (ID INT NOT NULL AUTO_INCREMENT, NAME VARCHAR(100) NOT NULL, PRIMARY KEY (ID))';
        this.connection.query(q, error => {
            if(error){
                console.log(error);
            }
        })
    }
    
}

module.exports = new Structure;