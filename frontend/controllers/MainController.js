MainController.$inject = ['$scope', '$location', '$http', '$stateParams'];

function MainController($scope, $location, $http, $stateParams) {
  //$scope.name = 'world';
  $scope.names = ['a', 'b', 'c'];

  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  };

  $http.get("report.json").then(function(response) {
    $scope.reports = response.data;
    console.log($scope.reports);
  });
}

export default MainController;
