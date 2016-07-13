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
