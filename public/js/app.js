/**
 * Created by João Marcos BR on 18/05/2016.
 */
angular.module("codetutor", ["ngMessages", "ngRoute", 'ngAnimate', 'ngFileUpload', 'angular-jwt', 'angular-loading-bar', 'ui.bootstrap']);

angular.module("codetutor").config(["$routeProvider", "$httpProvider", "jwtInterceptorProvider",
    function ($routeProvider, $httpProvider, jwtInterceptorProvider) {
        jwtInterceptorProvider.tokenGetter = function () {
            return sessionStorage.getItem("token");
        };

        $httpProvider.interceptors.push("jwtInterceptor");

        $routeProvider
            .when("/", {
                resolve: {
                    factory: checkRouting
                }
            }).when("/login", {
                templateUrl: "view/login.html",
                controller: "loginController"
            }).when("/home", {
                templateUrl: "view/home.html",
                controller : "homeController",
                resolve: {
                    factory: checkRouting
                }
            }).when("/disciplinas", {
                templateUrl: "view/disciplinas.html",
                controller: "disciplinasController",

                resolve: {
                    factory: checkRouting
                }
            }).when("/disciplina", {
                templateUrl: "view/disciplina.html",
                controller: "disciplinaController",
                resolve: {
                    factory: checkRouting
                }
            }).when("/player", {
                templateUrl: "view/player.html",
                controller: "playerController",
                resolve: {
                    factory: checkRouting
                }
            }).when("/video", {
                templateUrl: "view/video.html",
                controller: "videoController",
                resolve: {
                    factory: checkRouting
                }
            });
    }]);

var checkRouting = function ($location) {
    if (sessionStorage.getItem("token")) {
        return true;
    } else {
        $location.path("/login");
        return false;
    }
};
