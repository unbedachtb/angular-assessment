angular.module('assessment')
    .controller('mainCtrl', function($scope, mainService) {
      $scope.showData = function() {
        $scope.data = mainService.getData()
        .then(function(results) {
          $scope.data=results;
        });
      };
      $scope.showData();
      $scope.showDetails = function($scope, $stateParams, productService) {
        if($stateParams.id === 'results.id') {
          $scope.data = results.desc;
        }
      };
      });
