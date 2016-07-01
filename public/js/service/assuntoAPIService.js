/**
 * Created by João Marcos BR on 28/06/2016.
 */

angular.module("codetutor").factory("assuntoAPIService", function ($http, $location, Upload) {

    var _buscarAssuntosPorIdDisciplina = function(idDisciplina){
        return $http({
            url :"http://localhost:3000/sec/assunto/disciplina/"+idDisciplina,
            method: "GET",
            skipAuthorization: false
        });
    };

    return {
        buscarAssuntosPorIdDisciplina: _buscarAssuntosPorIdDisciplina
    };
});