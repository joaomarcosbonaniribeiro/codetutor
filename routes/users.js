var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var usuario = {
    nome: "joao",
    tel: "9956",
    cel:"566757"
  };

  res.json(usuario).status(200);
});

router.get('/olamundo', function(req, res, next) {
  res.send('Olá mundo!');
});

module.exports = router;
