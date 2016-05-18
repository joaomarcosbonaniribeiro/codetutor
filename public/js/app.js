/**
 * Created by João Marcos BR on 18/05/2016.
 */
angular.module("codetutor", ["ngMessages", "ngRoute", 'ngAnimate', 'angular-jwt', 'angular-loading-bar']);

angular.module("codetutor").config(["$routeProvider", function($routeProvider){
    $routeProvider
      .when("/home", {
        templateUrl: "view/home.html"
    }).when("/disciplina", {
        templateUrl:"view/disciplina.html"
    });
}]);
