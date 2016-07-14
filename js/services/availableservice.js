let part = angular.module('VolServices');

part.factory('AvailableService', ['$http', function($http) {
    let datesToVol = [];
    let users = [];

    return {
        getEvents: function() {
            $http({
                url: 'http://localhost:7000/constructors/events',
                method: 'get'
            }).then(function(results) {
                console.table(results.data);
                angular.copy(results.data, datesToVol)
            });

            return datesToVol;
        },
        getUser: function() {
            $http({
                url: 'http://localhost:7000/constructors/users',
                method: 'get'
            }).then(function(results) {
                console.table("worked",results.data);
                angular.copy(results.data, users)
            }).then(function(currentPage, pageSize) {
                let start = (currentPage) * pageSize;
                // get a subset of array
                return users.slice(start, start + pageSize);
            })
            return users;
        },
    };
}]);
