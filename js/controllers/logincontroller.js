let part = angular.module('VolControllers');

    part.controller('LoginController', ['$scope', '$location', '$http', function($scope, $location, $http) {
        $scope.username = "",
        $scope.userpassword = "",

        $scope.login = function() {
            console.log("clicked login");
                  $location.path('/available');

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
