/**
 * Created by João Marcos BR on 18/05/2016.
 */
angular.module("codetutor").controller("disciplinaController", function ($scope, $location, $routeParams, assuntoAPIService, disciplinaAPIService) {
    $scope.nomeDisciplina = "Algoritmos";
    carregarDisciplina = function () {
        var idDisciplina = $routeParams.idDisciplina;
        disciplinaAPIService.buscarDisciplinaPorId(idDisciplina).success(function(data){
            $scope.disciplina = data;
            carregarAssuntos();
        }).error(function(){
            alert(err.msg);
        });
    };

    carregarAssuntos = function () {
        var idDisciplina = $routeParams.idDisciplina;
        assuntoAPIService.buscarAssuntosPorIdDisciplina(idDisciplina).success(function (data) {
            $scope.assuntos = data;
        }).error(function (err) {
            alert(err.msg);
        });
    };

    carregarDisciplina();
});

