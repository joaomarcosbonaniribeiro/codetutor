/**
 * Created by João Marcos BR on 10/05/2016.
 */
var express = require("express");
var router = express.Router();
var model = require("../models");
var Disciplina = model.Disciplina;

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
    Disciplina.buscarDisciplinas(function(data){
        return res.status(200).json(data);
    }, function(err){
        return res.status(500).json(err);
    });
});

router.get("/:id", function(req, res){
    var id = req.params.id;
    Disciplina.buscarPorId(id,function(data){
        return res.status(200).json(data);
    }, function(err){
        return res.status(500).json(err);
    });
});

module.exports = router;