let part = angular.module('VolControllers');

part.controller('AvailableController', ['$scope', 'AvailableService', '$location', '$http', function($scope, AvailableService, $location, $http) {
    $scope.events = AvailableService.getEvents();
    $scope.users = AvailableService.getUser($scope.currentPage, $scope.pageSize);
    $scope.currentPage = 0;
    $scope.pageSize = 3;
    $scope.prev = function() {
        $scope.currentPage = $scope.currentPage - 1;
        $scope.users = AvailableService.getUser($scope.currentPage, $scope.pageSize);
    };

    $scope.next = function() {
        $scope.currentPage = $scope.currentPage + 1;
        $scope.users = AvailableService.getUser($scope.currentPage, $scope.pageSize);
    };

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
