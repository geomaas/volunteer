let vol = angular.module('volApp', ['ngRoute']);
//
// // Controllers
require('./controllers/logincontroller')(vol);
require('./controllers/availablecontroller')(vol);



// // Services
require('./services/availableservice')(vol);



vol.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/login',
        })
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'templates/login.html',
        })
        .when('/available', {
            controller: 'AvailableController',
            templateUrl: 'templates/available.html',
        })
        .when('/signup', {
            // controller: 'AvailableController',
            templateUrl: 'templates/signup.html',
        })
        .otherwise({
            templateUrl: 'templates/shit.html',
        });
}]);
