
module.exports = app => {
    const movies = [
        {
            title: 'How to train your dragon',
            duration: 98,
            directed_by: ['Chris Sanders', 'Dean BeBlois']
        },{
           title: 'Life of Pi',
           duration: 127,
           directed_by: [ 'Ang Lee']
        }
    ];
    
    app.get('/movies', (req, res) => {
        res.json(movies);
    });
    
    app.post('/movies', (req, res) => {
        if(!req.body || req.body == null){
            return res.status(400).send({message: "Sorry we don't get the body content for this operation"});
        }
    
        movies.push(req.body);
        res.status(201).send({status: "Success! Movie added to catalog!"});
    });
}
