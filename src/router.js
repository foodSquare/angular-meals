var app = angular.module('foodSquareApp', [
    'ngRoute', 
    'ngMaterial'
]).
config(['$routeProvider', '$locationProvider', 
    function ($routeProvider, $locationProvider) {
        /*$locationProvider.html5Mode(true);*/
        $routeProvider.
        //Restaurants
        when('/', {
            templateUrl: 'views/main/main.html',
            controller: 'mainController'
        }).
        //Challenge
        when('/challenge', {
            templateUrl: 'views/challenge/challenge.html',
            controller: 'challengeController'
        }).
        //Friends
        when('/friends', {
            templateUrl: 'views/friends/friends.html',
            controller: 'friendsController'
        }).
        //Settings
        when('/settings', {
            templateUrl: 'views/settings/settings.html',
            controller: 'settingsController'
        }).
        //Questions for the user
        when('/quiz', {
            templateUrl: 'views/quiz/quiz.html',
            controller: 'quizController'
        }).
        //Take photo
        when('/photo', {
            templateUrl: 'views/photo/photo.html',
            controller: 'photoController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);