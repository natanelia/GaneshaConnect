ReportController.$inject = ['$scope', '$location', '$http'];

function ReportController($scope, $location, $http) {
  //$scope.name = 'world';

  $http.get("report.json").then(function(response) {
    $scope.reports = response.data;
    console.log($scope.reports);
  });

  $http.get("user.json").then(function(response) {
    $scope.users = response.data;
    console.log($scope.users);
  }); 

  $scope.detail = function(rep) {
    $scope.reportdetail = new Object();
    $scope.reportdetail = angular.copy($scope.reports[rep-1]);
    console.log($scope.reportdetail);
    console.log("done");
  }

}

export default ReportController;
