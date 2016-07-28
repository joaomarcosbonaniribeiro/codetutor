/**
 * Created by João Marcos BR on 10/05/2016.
 */
var express = require("express");
var fs = require("fs");
var router = express.Router();
var model = require("../models");
var Video = model.Video;
var multiparty = require('connect-multiparty');
var multipartMiddleware = multiparty({uploadDir: '../public/videos'});

/**
 * método de insercao de videos
 */
router.post("/", multipartMiddleware, function (req, res) {
    var usuario = req.headers.authorization;

    if (usuario.papel !== "PROFESSOR") {
        return res.status(401).json({data: false, msg: "Acesso não Autorizado"});
    }

    var dadosDoVideo = req.body.dados;
    var video = req.files.video[0];
    var thumbnail = req.files.video[1];

    var videoObj = Video.build({
        titulo: dadosDoVideo.titulo,
        caminho: video.path.replace("..\\public",""),
        nomeArquivo: video.originalFilename,
        tipo: video.type,
        dataPostagem: new Date(),
        caminhoThumbnail: thumbnail.path.replace("..\\public",""),
        UsuarioId: usuario.id
    });

    videoObj.salvar(
        function (data) {
            return res.status(200).json(data);
        },
        function (err) {
            fs.unlinkSync(video.path.replace("..\\public",""));
            fs.unlinkSync(thumbnail.path.replace("..\\public",""));
            return res.status(500).json(err);
        });
});

router.get("/", function (req, res) {
    Video.buscarVideosRecentes(function(data){
        return res.status(200).json(data);
    }, function(err){
        return res.status(500).json(err);
    });
});
router.get("/", function (req, res) {
    Video.buscarVideo(function(data){
        return res.status(200).json(data);
    }, function(err){
        return res.status(500).json(err);
    });
});

module.exports = router;