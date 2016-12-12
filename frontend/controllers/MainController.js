MainController.$inject = ['$scope', '$location', '$http'];

function MainController($scope, $location, $http) {
  //$scope.name = 'world';
  $scope.names = ['a', 'b', 'c'];

  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  };

  $http.get("report.json").then(function(response) {
    $scope.reports = response.data;
    console.log($scope.reports);
  });

  $http.get("user.json").then(function(response) {
    $scope.users = response.data;
    console.log($scope.users);
  });  
}

export default MainController;
