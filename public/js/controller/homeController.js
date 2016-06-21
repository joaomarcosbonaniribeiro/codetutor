/**
 * Created by Gustavo on 21/06/2016.
 */
angular.module("codetutor").controller("homeController", function ($scope, $location, videoAPIService) {
    carregarVideosRecentes = function(){
        videoAPIService.buscarVideosRecentes().success(function(data){
            $scope.videos = data;
        }).error(function(err){
            alert(err.msg);
        });
    };

    $scope.assistirVideo = function(video){
        $location.path("/player");
    };

    carregarVideosRecentes();
});

