var app = angular.module('easyJet', [
	'ngRoute'
]);

/* Configure  Routes */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // homepage
    .when("/", {templateUrl: "app/templates/home.html"})
    // listing page
    .when("/flight/:id", {templateUrl: "app/templates/flight.html"})
    // else 404
    .otherwise("/");
}]);