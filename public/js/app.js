
var materialToDo = angular.module('materialToDo', ['ngMaterial','ui.router']);

materialToDo.constant("basePath", "http://35.196.59.232:7000");

materialToDo.config(function($stateProvider,$urlRouterProvider,$locationProvider,$mdThemingProvider){

    $mdThemingProvider
        .theme('docs-dark', 'default')
        .primaryPalette('yellow');
        

    $stateProvider
      .state('signUp',{
            url: "/signUp",
            templateUrl:'partials/signUp.html',
            controller:'signUpController'
    }).state('signIn',{
            url: "/signIn",
            templateUrl:'partials/signIn.html',
            controller:'signInController'
    }).state('home',{
            url: "/home",
            templateUrl:'partials/home.html',
            controller:'homeController',
            cache: false
    }).state('about',{
            url: "/about",
            templateUrl:'partials/about.html',
            controller:'aboutController',
            cache: false
        });

    if(window.localStorage['toDoUser']){
        $urlRouterProvider.otherwise('/home');
    }else{
        $urlRouterProvider.otherwise('/signIn');
    }

    $locationProvider.html5Mode({
        enabled : true,
        requireBase : false
    });


});
