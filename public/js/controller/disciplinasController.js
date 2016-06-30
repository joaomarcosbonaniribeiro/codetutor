/**
 * Created by João Marcos BR on 28/06/2016.
 */

angular.module("codetutor").controller("disciplinasController", function ($scope, $location, disciplinasAPIService) {
    var carregarDisciplinas = function(){
       disciplinasAPIService.buscarDisciplinas().success(function(data){
            $scope.disciplinas = data;
       }).error(function(err){

       });
    };



    carregarDisciplinas();
});