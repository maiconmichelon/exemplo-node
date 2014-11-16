module.exports = function(app) {
  var autenticador = require('./../middleware/autenticador')
      , contatos = app.controllers.contatos;

  app.get('/contatos', autenticador, contatos.index);
  app.get('/contato/:id', autenticador, contatos.show);
  app.post('/contato', autenticador, contatos.create);
  app.get('/contato/:id/editar', autenticador, contatos.edit);
  app.put('/contato/:id', autenticador, contatos.update);
  app.delete('/contato/:id', autenticador, contatos.destroy);
}
