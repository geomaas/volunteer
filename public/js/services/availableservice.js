module.exports = function (vol) {
    vol.factory('AvailableService', ['$http', function ($http) {
        let datesToVol = [];

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
        };
    }]);
};
