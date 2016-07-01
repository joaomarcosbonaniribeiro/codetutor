/**
 * Created by João Marcos BR on 18/05/2016.
 */
angular.module("codetutor").controller("disciplinaController", function($scope, $location,$routeParams){
    $scope.nomeDisciplina = "Algoritmos";

    carregarDisciplinas = function(){
        disciplinaAPIService.buscarAssuntosPorId().success(function(data){
            $scope.assuntos = data;
        }).error(function(err){
            alert(err.msg);
        });
    };

    $scope.idDisciplina = $routeParams.idDisciplina;
    alert($scope.idDisciplina);



    carregarDisciplinas();
});

