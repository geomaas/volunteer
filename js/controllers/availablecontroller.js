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
