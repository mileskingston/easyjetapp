describe('MainCtrl', function() {
    beforeEach(module('easyJet'));

    var scope, controller;

    beforeEach(inject(function($rootScope, _$controller_, _$httpBackend_) {
        // Controller Setup
        scope = $rootScope.$new();
        controller = _$controller_('MainCtrl', { $scope: scope });
        $httpBackend = _$httpBackend_;
    }));

    describe('http request', function() {
        it('get flight data if repsonse 200', inject(function() {
            $httpBackend
                .when('GET', 'http://ejtestbed.herokuapp.com/flights')
                .respond(200, {data: 'flights'});

            $httpBackend.flush();
            expect(scope.flights).toEqual({data: 'flights'});
        }));
    });
});