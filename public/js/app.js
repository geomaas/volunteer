(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let part = angular.module('VolControllers');

part.controller('AvailableController', ['$scope', 'AvailableService', '$location', '$http', function($scope, AvailableService, $location, $http) {
    $scope.events = AvailableService.getEvents(),
        $scope.users = AvailableService.getUser(),
        $scope.currentPage = 1,
        $scope.pageSize = 3;
    $scope.eventsNumberOfPages = function() {
        return Math.ceil($scope.events.length / $scope.pageSize)
    };
    $scope.userNumberOfPages = function() {
        return Math.ceil($scope.users.length / $scope.pageSize)
    };
    part.filter('startFrom', function() {
    return function(input, start) {
      // if(input) {
        start = +start; //parse to int
        return input.slice(start);
      // }
    }
});


    $scope.signUp = function() {
        console.log("clicked sign up");

        $location.path('/your-events');
        // $http({
        //     url: '/favs',
        //     method: 'post',
        //     data: {
        //      add event to user object to be referenced later check equality
        //     }
        // })
    };

}]);

},{}],2:[function(require,module,exports){
let part = angular.module('VolControllers');

    part.controller('LoginController', ['$scope', '$location', '$http', function($scope, $location, $http) {
        $scope.username = "",
        $scope.userpassword = "",

        $scope.login = function() {
            console.log("clicked login");
                  // $location.path('/available');

            $http({
                  url: '/constructors/users',
                  method: 'post',
                  data: {
                    
                      username: $scope.username,
                      password: $scope.userpassword,
                  },
              }).then(function () {
                  // $location.path('');

              }).catch(function () {
                  console.error('INTRUDER');
                  // $location.path('/shit')
              });
        };

    }]);

},{}],3:[function(require,module,exports){
let part = angular.module('VolDirectives');

// The name matters; this is the HTML element name in this case.
part.directive('volevent', function () {
    return {
        restrict: 'E',  // this directive is an HTML element
        templateUrl: 'templates/directives/volevent.html',  // template to use
        scope: {
            // http://stackoverflow.com/questions/26409460/angularjs-pass-argument-to-directive
            //
            // if you care about user input: = is two-way binding
            // else @ simply reads the value (one-way binding)
            //
            // info="x" is a thing that should henceforth be called 'book'
            volevent: '=info',
        },
        // Good idea: don't leave random names scattered throughout your HTML elements
        replace: true,
    };
});

},{}],4:[function(require,module,exports){
let part = angular.module('VolDirectives');

// The name matters; this is the HTML element name in this case.
part.directive('userdir', function () {
    return {
        restrict: 'E',  // this directive is an HTML element
        templateUrl: 'templates/directives/user.html',  // template to use
        scope: {
            // http://stackoverflow.com/questions/26409460/angularjs-pass-argument-to-directive
            //
            // if you care about user input: = is two-way binding
            // else @ simply reads the value (one-way binding)
            //
            // info="x" is a thing that should henceforth be called 'book'
            userdir: '=info',
        },
        // Good idea: don't leave random names scattered throughout your HTML elements
        replace: true,
    };
});

},{}],5:[function(require,module,exports){
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
        .when('/users', {
            // controller: 'AvailableController',
            templateUrl: 'templates/users.html',
        })
        .otherwise({
            templateUrl: 'templates/shit.html',
        });
}]);

},{"./controllers/availablecontroller":1,"./controllers/logincontroller":2,"./directives/availabledirective":3,"./directives/userdirective":4,"./services/availableservice":6}],6:[function(require,module,exports){
let part = angular.module('VolServices');

    part.factory('AvailableService', ['$http', function ($http) {
        let datesToVol = [];
        let users = [];

        return {
            getEvents: function () {
                $http({
                    url: 'http://localhost:7000/constructors/events',
                    method: 'get'
                }).then(function (results) {
                  console.table(results.data);
                    angular.copy(results.data, datesToVol)
                });

                return datesToVol;
            },
            getUser: function() {
              $http({
                url: '/api/users.json',
                method: 'get'
              }).then(function(results){
                console.table(results.data);
                angular.copy(results.data, users)
              });
              return users;
            },
        };
    }]);

},{}]},{},[5])