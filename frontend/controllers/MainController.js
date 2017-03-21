MainController.$inject = ['$scope', '$location', '$http', '$stateParams', '$cookies'];

function MainController($scope, $location, $http, $stateParams, $cookies) {
  //$scope.name = 'world';
  console.log('gctoken'+$cookies.get('gctoken'));
  $scope.names = ['a', 'b', 'c'];

  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  };

  $http.get("report.json").then(function(response) {
    $scope.reports = response.data.reports;
    console.log($scope.reports);
  });
  
  $scope.getStatusClass = function (status) {
	  if (status.toLowerCase() === 'approved - processed') {
		  return "processed";
	  } else if (status.toLowerCase() === 'approved - new') {
		  return "new";
	  } else if (status.toLowerCase() === 'no status') {
		  return "nostat";
	  } else if (status.toLowerCase() === 'rejected') {
		  return "rejected";
	  } else if (status.toLowerCase() === 'done') {
		  return "done";
	  }
  }
}

export default MainController;
