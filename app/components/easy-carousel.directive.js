app.directive('easyCarousel', function($timeout) {
    return {
        scope: {
          options: '=ltsCarousel'
        },
        restrict: 'A',
        controller: function($scope, $element) {
            var defaults = {
                items: 4
            }
            var options = angular.extend(defaults, $scope.options || {});
            
            $scope.build = function() {
                return $q(function(resolve) {
                    $scope.slides = $element.children();
                    console.log($scope.slides.length);
                });
            };
            $timeout(function() {
                $scope.build();
            });
            return $scope;

            $scope.build();
        }
    };
});