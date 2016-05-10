/**
 * Created by João Marcos BR on 10/05/2016.
 */
var express = require("express");
var router = express.Router();

var disciplinas = [];
/**
 * método que cadastra disciplina
 */
router.post("/", function(req, res){
    var disciplina = {
        nome: req.body.nome,
        cod: req.body.cod
    };
    disciplinas.push(disciplina);

    return res.status(200).json({mensagem: "Disciplina cadastrada com sucesso!"});
});

router.get("/", function(req, res){
    return res.status(200).json(disciplinas);
});

module.exports = router;