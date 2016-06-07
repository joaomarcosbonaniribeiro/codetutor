/**
 * Created by Gustavo on 03/06/2016.
 */
angular.module("codetutor").controller("loginController", function ($scope, $location, autenticacaoAPIService) {
    $scope.login = function (usuario) {
        autenticacaoAPIService.autenticar(usuario).success(function(dados){
            $location.path("/home");
        }).error(function(err){
            $scope.errLogin = err.msg;
        })
    }
});

