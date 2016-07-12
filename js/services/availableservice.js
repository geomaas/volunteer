let part = angular.module('VolServices');

    part.factory('AvailableService', ['$http', function ($http) {
        let datesToVol = [];
        let users = [];

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
