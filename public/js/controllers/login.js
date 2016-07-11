module.exports = function(vol) {
    vol.controller('LoginController', ['$scope', 'LoginService', '$location', '$http', function($scope, LoginService, $location, $http) {
        $scope.username = "",
        $scope.userpassword = "",

        $scope.login = function() {
            console.log("clicked login");
            $http({
                  url: '/login',
                  method: 'post',
                  data: {
                      username: $scope.username,
                      password: $scope.userpassword,
                  },
              }).then(function () {
                  $location.path('');
              }).catch(function () {
                  console.error('INTRUDER');
                  $location.path('/shit')
              });
        };

    }]);
};

// usera
// passworda
