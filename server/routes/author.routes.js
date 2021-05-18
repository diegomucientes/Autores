const AuthorController = require('../controllers/author.controller')

module.exports = function(app){
    app.post('/api/author/add',AuthorController.createAuthor)
    app.get('/api/authors/',AuthorController.getAll)
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.put('/api/author/:id/edit', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}