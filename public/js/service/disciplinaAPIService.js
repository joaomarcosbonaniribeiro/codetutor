/**
 * Created by João Marcos BR on 28/06/2016.
 */

angular.module("codetutor").factory("disciplinaAPIService", function ($http, $location, Upload) {
    var _postDisciplina = function (dados) {
        return $http({
            url: 'http://localhost:3000/sec/disciplina/',
            data: dados,
            skipAuthorization: false,
            method: "POST"
        });
    };

    var _buscarDisciplinas = function(){
        return $http({
            url :"http://localhost:3000/sec/disciplina/",
            method: "GET",
            skipAuthorization: false
        });
    };

    var _buscarDisciplinaPorId = function(id){
        return $http({
            url :"http://localhost:3000/sec/disciplina/"+id,
            method: "GET",
            skipAuthorization: false
        });
    };

    return {
        postDisciplina: _postDisciplina,
        buscarDisciplinas: _buscarDisciplinas,
        buscarDisciplinaPorId: _buscarDisciplinaPorId
    };
});