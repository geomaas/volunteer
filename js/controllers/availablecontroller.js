let part = angular.module('VolControllers');

part.controller('AvailableController', ['$scope', 'AvailableService', '$location', '$http', function($scope, AvailableService, $location, $http) {
    $scope.events = AvailableService.getEvents(),
        $scope.users = AvailableService.getUser(),
        $scope.currentPage = 0,
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
      return [];
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
