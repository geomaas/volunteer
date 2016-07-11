(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(vol) {
    vol.controller('AvailableController', ['$scope', 'AvailableService', '$location', '$http', function($scope, AvailableService, $location, $http) {
        $scope.events = AvailableService.getEvents(),

        $scope.signUp = function() {
            console.log("clicked sign up");
            $location.path('/signup');
            // $http({
            //     url: '/favs',
            //     method: 'post',
            //     data: {
            //       recipeId: recipe.id,
            //       isFav: vote,
            //     }
            // }).then(function () {
            //     $location.reload('/rating');
            // }).catch(function () {
            //     console.error('nooooo');
            //     $location.path('/shit')
            // });
        };

    }]);
};

},{}],2:[function(require,module,exports){
module.exports = function(vol) {
    vol.controller('LoginController', ['$scope', '$location', '$http', function($scope, $location, $http) {
        $scope.username = "",
        $scope.userpassword = "",

        $scope.login = function() {
            console.log("clicked login");
                  $location.path('/');

            // $http({
            //       url: '/login',
            //       method: 'post',
            //       data: {
            //           username: $scope.username,
            //           password: $scope.userpassword,
            //       },
            //   }).then(function () {
            //       $location.path('');
            //   }).catch(function () {
            //       console.error('INTRUDER');
            //       $location.path('/shit')
            //   });
        };

    }]);
};

},{}],3:[function(require,module,exports){
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

},{"./controllers/availablecontroller":1,"./controllers/logincontroller":2,"./services/availableservice":4}],4:[function(require,module,exports){
module.exports = function (vol) {
    vol.factory('AvailableService', ['$http', function ($http) {
        let datesToVol = [];

        return {
            getEvents: function () {
                $http({
                    url: '/api/events.json',
                    method: 'get'
                }).then(function (results) {
                  console.table(results.data);
                    angular.copy(results.data, datesToVol)
                });

                return datesToVol;
            },
        };
    }]);
};

},{}]},{},[3])