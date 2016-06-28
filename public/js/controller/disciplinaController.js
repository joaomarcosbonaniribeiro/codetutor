/**
 * Created by João Marcos BR on 18/05/2016.
 */
angular.module("codetutor").controller("disciplinaController", function($scope, $location){
    $scope.nomeDisciplina = "Algoritmos";

    carregarDisciplinas = function(){
        videoAPIService.buscarVideosRecentes().success(function(data){
            $scope.videos = data;
        }).error(function(err){
            alert(err.msg);
        });
    };



    carregarDisciplinas();
});

