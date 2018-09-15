// * CONSULT http://restify.com/docs/client-guide/

var express = require('express');
var restify = require('restify-clients');   // npm install restify-clients --save
var assert = require('assert');

var router = express.Router();

var client_SERVER_RESTful = restify.createJsonClient({
  url: 'http://localhost:4000'   // inserir endereço do servidor 
});

// ROTA PARA BUSCAR NO SERVIDOR EXTERNO
router.get('/', function(req, res, next) {

  // mudar a rota onde vai buscar no servidor, seguido do metodo.
  client_SERVER_RESTful.get('/users', function(err, request, response, obj) {
    
    assert.ifError(err);
    res.json(obj);

  });
});
  
router.get('/:id', function(req, res, next) {

  client_SERVER_RESTful.get(`/users/${req.params.id}`, function(err, request, response, obj) {
    
    assert.ifError(err);
    res.json(obj);
  });

});
router.put('/:id', function(req, res, next) {

  client_SERVER_RESTful.put(`/users/${req.params.id}`, req.body, function(err, request, response, obj) {
    
    assert.ifError(err);
    res.json(obj);
  });

});

router.delete('/:id', function(req, res, next) {

  client_SERVER_RESTful.del(`/users/${req.params.id}`, function(err, request, response, obj) {
    
    assert.ifError(err);
    res.json(obj);
  });

});

router.post('/', function(req, res, next) {

  client_SERVER_RESTful.post(`/users/`, req.body, function(err, request, response, obj) {
    
    assert.ifError(err);
    res.json(obj);
  });
  
});

module.exports = router;
