(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MyCtrlr);

MyCtrlr.$inject = ['$scope'];
function MyCtrlr($scope) {
  $scope.msg = "...";
  $scope.dishes = "";

  $scope.Check = function () {
    $scope.msg = "...";
    if ($scope.dishes == "") 
    {
      $scope.msg = "Please enter data first";
    }
    else {
      $scope.msg = "Enjoy!";
      //console.log($scope.dishes.split(",").length);
      if ($scope.dishes.split(",").length > 3) $scope.msg = "Too much!";
    }
    // Enjoy! Too much! Please enter data first
  };
}

})();
