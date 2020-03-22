const categoryController = require('../controllers/Category/index');

module.exports = app => {
    app.get('/category', categoryController.selectAll);
    app.post('/category', categoryController.create);
}