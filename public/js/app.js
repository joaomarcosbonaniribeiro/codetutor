/**
 * Created by João Marcos BR on 18/05/2016.
 */
angular.module("codetutor", ["ngMessages", "ngRoute", 'ngAnimate', 'angular-jwt', 'angular-loading-bar']);

angular.module("codetutor").config(["$routeProvider", function($routeProvider){
    $routeProvider
      .when("/home", {
        templateUrl: "view/home.html"
    }).when("/disciplinas", {
        templateUrl:"view/disciplinas.html"
    }).when("/disciplina", {
        templateUrl:"view/disciplina.html",
        controller:"disciplinaController"
    }).when("/player", {
        templateUrl:"view/player.html",
        controller: "playerController"
    });

}]);
