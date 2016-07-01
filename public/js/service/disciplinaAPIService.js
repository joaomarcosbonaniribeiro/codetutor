/**
 * Created by João Marcos BR on 28/06/2016.
 */

angular.module("codetutor").factory("disciplinaAPIService", function ($http, $location, Upload) {
    var _postDisciplinas = function (dados) {
        return $http({
            url: 'http://localhost:3000/sec/disciplina/',
            data: dados,
            skipAuthorization: false,
            method: "POST"
        });
    };

    var _buscarAssuntosPorId = function(){
        return $http({
            url :"http://localhost:3000/sec/disciplina/",
            method: "GET",
            skipAuthorization: false
        });
    };

    return {
        postVideo: _postDisciplinas,
        buscarDisciplinas: _buscarDisciplinas,
        buscarDisciplinasPorId: _buscarDisciplinasPorId
    };
});