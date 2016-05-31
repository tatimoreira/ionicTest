angular.module('songhop')
/*
Controller for the discover page
*/
.controller('NavCtrl', function($scope,  $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})