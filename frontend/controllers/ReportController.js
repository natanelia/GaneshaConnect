ReportController.$inject = ['$scope', '$stateParams', '$http'];

function ReportController($scope, $stateParams, $http) {
  //$scope.name = 'world';

  $http.get("report.json").then(function(response) {
    $scope.reports = response.data;
    console.log($scope.reports);
    for (var report in $scope.reports) {
		console.log($stateParams.id);
		if ($scope.reports[report].id == $stateParams.id) {
			$scope.activereport = $scope.reports[report];
			if ($scope.activereport.status.toLowerCase() == "no status") {
				$scope.showButton = true;
			} else {
				$scope.showButton = false;
			}
			console.log(report);
		}
	}
  });

  $http.get("user.json").then(function(response) {
    $scope.users = response.data;
    console.log($scope.users);
	for (var user in $scope.users) {
		console.log($stateParams.id);
		if ($scope.users[user].id == $scope.activereport.pelapor) {
			$scope.activeuser = $scope.users[user];
			console.log(user);
		}
	}
  });
  
  $scope.showReject = function() {
	  $scope.isReject = true;
  }
  
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

export default ReportController;
