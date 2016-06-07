/**
 * Created by Gustavo on 03/06/2016.
 */
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var models = require('../models');
var Usuario = models.Usuario;
var path = require("path");
var dir = path.resolve(__dirname, "..");
var key = require(path.resolve(dir, 'key.json'));

router.post('/', function (req, res) {
    var usuario = Usuario.build({
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome
    });

    usuario.salvar(function (data) {
        return res.status(201).json(data);
    }, function (err) {
        return res.status(406).json(err);
    });

    var soma = 1+1;
});

router.post('/autenticar', function (req, res) {
    if (!req.body.email || !req.body.senha) {
        return res.status(400).json({msg: "E-mail ou Senha não informado."})
    }

    var email = req.body.email;
    var senha = req.body.senha;

    Usuario.buscarPorEmailESenha(email, senha, function (data) {
        if (!data) {
            return res.status(404).json({msg: "Usuário não encontrado."})
        } else {
            var objRes = {
                papel: data.papel,
                email: data.email,
                token: jwt.sign(data.dataValues, key.secret)
            };
            return res.status(200).json(objRes);
        }
    }, function (err) {
        return res.status(500).json(err);
    });
});

module.exports = router;