/**
 * Created by Gustavo Y. Maruyama on 30/06/2016.
 */
var express = require("express");
var router = express.Router();
var model = require("../models");
var Assunto = model.Assunto;

router.get("/disciplina/:disciplinaId", function(req, res){
    var disciplinaId = req.params.disciplinaId;
    Assunto.buscarAssuntosPorIdDisciplina(disciplinaId, function(data){
        return res.status(200).json(data);
    }, function(err){
        return res.status(500).json(err);
    });
});

module.exports = router;