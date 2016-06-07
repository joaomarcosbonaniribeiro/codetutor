/**
 * Created by Gustavo on 03/06/2016.
 */
var express = require('express');
var jwt = require('jsonwebtoken');
var models = require('../models');
var path = require("path");
var dir = path.resolve(__dirname, "..");
var key = require(path.resolve(dir, 'key.json'));

module.exports = function(req, res, next){
    var authorization = req.headers.authorization;
    var err = {data: false, msg: "Acesso não Autorizado"};

    if (!authorization) {
        return res.status(401).json(err);
    }
    var aut = authorization.split(" ");
    if (aut.length != 2) {
        return res.status(401).json(err);
    }
    if (aut[0] !== "Bearer") {
        return res.status(401).json(err);
    }

    var token = aut[1].replace(/"/g, "");
    jwt.verify(token, key.secret, function (err, decoded) {
        if (err) {
            err = {data: false, msg: "Acesso não Autorizado - "+err.message};
            return res.status(401).json(err)
        } else {
            req.headers.authorization = decoded;
            return next();
        }
    });
};