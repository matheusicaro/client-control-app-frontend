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
    res.end(JSON.stringify(obj, null, 2));

  });

});

module.exports = router;
