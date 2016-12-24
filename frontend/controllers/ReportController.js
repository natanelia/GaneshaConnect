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
}

export default ReportController;
