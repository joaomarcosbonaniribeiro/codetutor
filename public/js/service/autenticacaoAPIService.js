/**
 * Created by Gustavo on 03/06/2016.
 */
angular.module("codetutor").factory("autenticacaoAPIService", function ($http) {
    var _autenticar = function (usuario) {
        return $http({
            method: "POST",
            url: "http://localhost:3000/usuario/autenticar",
            data: usuario,
            skipAuthorization: true // Não anexa o token no campo Authorization do header da req HTTP
        }).success(function (dados) {
            sessionStorage.setItem("token", dados.token);
            sessionStorage.setItem("papel", dados.papel);
            sessionStorage.setItem("email", dados.email);
        })
    };

    var _getUsuarioLogado = function () {
        if (sessionStorage.getItem("token")) {
            return {
                email: sessionStorage.getItem("email"),
                papel: sessionStorage.getItem("papel"),
                token: sessionStorage.getItem("token")
            };
        }
        return null;
    };

    return {
        autenticar: _autenticar,
        getUsuarioLogado: _getUsuarioLogado
    };
});