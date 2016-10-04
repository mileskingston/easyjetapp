app.controller('MainCtrl', function($scope, $routeParams, flightsService) {
    $scope.flight = '',
    $routeParams.id = '';

    flightsService.async().then(function(d) {
        $scope.flights = d;
    });

    $scope.selectFlight = function(flight) {
        $scope.flight = flight,
        $routeParams.id = flight;
    };
});