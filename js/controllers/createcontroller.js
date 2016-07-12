let part = angular.module('VolControllers');

    part.controller('CreateController', ['$scope', '$location', '$http', function($scope, $location, $http) {

        $scope.create = function() {
            console.log("clicked create");
            $location.path('/available');
            // $http({
            //     url: '/',
            //     method: 'post',
            //     data: {
            //       send up new event to event data with user including delete button
            //     }
            // })
        };

    }]);
