/**
 * Created by João Marcos BR on 28/06/2016.
 */

angular.module("codetutor").controller("disciplinasController", function ($scope, $location, disciplinaAPIService) {
    var carregarDisciplinas = function(){
       disciplinaAPIService.buscarDisciplinas().success(function(data){
            $scope.disciplinas = data;
       }).error(function(err){

       });
    };

    $scope.acessarDisciplina = function(disciplina){
        $scope.disciplina = disciplina.name;
        $scope.assunto = disciplina.assunto;
        $location.path("/disciplina/"+disciplina.id);
    };

    carregarDisciplinas();
});