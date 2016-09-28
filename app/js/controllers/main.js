app.controller('MainCtrl', function($scope, $http, $routeParams) {
    $scope.flight = '',
    $routeParams.id = '';

    $http.get('http://ejtestbed.herokuapp.com/flights')
        .then(function successCallback(response) {
            $scope.flights = response.data;
        }, function errorCallback(response) {
            console.log('error');
    });

    $scope.selectFlight = function(flight) {
        $scope.flight = flight,
        $routeParams.id = flight
    };
});