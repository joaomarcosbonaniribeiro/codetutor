/**
 * Created by João Marcos BR on 28/06/2016.
 */

angular.module("codetutor").factory("disciplinasAPIService", function ($http, $location, Upload) {
    var _postDisciplinas = function (disciplinas, dados) {
        return Upload.upload({
            url: 'http://localhost:3000/sec/disciplinas/',
            data: {disciplinas:disciplinas, dados: dados},
            skipAuthorization: false,
            method: "POST"
        });
    };

    var _buscarDisciplinas = function(){
        return $http({
            url :"http://localhost:3000/sec/disciplinas/",
            method: "GET",
            skipAuthorization: false
        });
    };

    return {
        postVideo: _postDisciplinas,
        buscarDisciplinas: _buscarDisciplinas()
    };
});