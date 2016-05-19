/**
 * Created by João Marcos BR on 18/05/2016.
 */
angular.module("codetutor").controller("headerController", function($scope, $location){
    $scope.navegarPara = function(destino){
        $location.path("/"+destino);
    }
});
