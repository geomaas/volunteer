let vol = angular.module('VolApp', ['ngRoute', 'VolControllers', 'VolServices', 'VolDirectives']);
angular.module('VolControllers', []);
angular.module('VolServices', []);
angular.module('VolDirectives', []);


// // Controllers
require('./controllers/logincontroller');
require('./controllers/availablecontroller');

// // Services
require('./services/availableservice');

// //Directives
require('./directives/availabledirective');
require('./directives/userdirective');



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
        .when('/create', {
            // controller: 'AvailableController',
            templateUrl: 'templates/newevent.html',
        })
        .when('/your-events', {
            // controller: 'AvailableController',
            templateUrl: 'templates/userevents.html',
        })
        .otherwise({
            templateUrl: 'templates/shit.html',
        });
}]);
