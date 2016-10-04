app.service('flightsService', function($http) {
	var api = {
		async: function() {
			var promise = $http.get('http://ejtestbed.herokuapp.com/flights')
        	.then(function successCallback(response) {
            	return response.data;
        	}, function errorCallback(response) {
            	console.log('error');
    		});
    		return promise;
		}
	};
	return api;
});