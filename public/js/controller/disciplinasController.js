/**
 * Created by João Marcos BR on 28/06/2016.
 */

angular.module("codetutor").controller("disciplinasController", function ($scope, $location, videoAPIService) {
    carregarDisciplinas = function(){
        videoAPIService.buscarVideosRecentes().success(function(data){
            $scope.videos = data;
        }).error(function(err){
            alert(err.msg);
        });
    };



    carregarDisciplinas();
});