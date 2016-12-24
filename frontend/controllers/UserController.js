UserController.$inject = ['$scope', '$location', '$http'];

function UserController($scope, $location, $http) {
  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  };
  
  $http.get("user.json").then(function(response) {
    $scope.users = response.data;
    console.log($scope.users);
  }); 
}

export default UserController;