module.exports = function(vol) {
    vol.controller('AvailableController', ['$scope', 'AvailableService', '$location', '$http', function($scope, AvailableService, $location, $http) {
        $scope.events = AvailableService.getEvents(),

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
};
