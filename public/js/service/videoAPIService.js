/**
 * Created by Gustavo on 02/06/2016.
 */
angular.module("codetutor").factory("videoAPIService", function ($http, $location, Upload) {
    var _postVideo = function (video, dados) {
        return Upload.upload({
            url: 'http://localhost:3000/sec/video/',
            data: {video:video, dados: dados},
            skipAuthorization: false,
            method: "POST"
        });
    };

    var _buscarVideosRecentes = function(){
        return $http({
            url :"http://localhost:3000/sec/video/",
            method: "GET",
            skipAuthorization: false
        });
    };

    return {
        postVideo: _postVideo,
        buscarVideosRecentes: _buscarVideosRecentes
    };
});