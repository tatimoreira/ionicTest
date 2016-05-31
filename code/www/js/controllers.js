angular.module('songhop')


.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})
/*
Controller for the authorization page
*/
.controller('AuthorizationCtrl', function($scope, $state) {
	$scope.authorization = {
	    username: '',
	    password : ''   
	};  
   
  $scope.signIn = function(form) {
    if(form.$valid) {
      $state.go('tab.discover');
    }
  };  


})



/*
Controller for our tab bar
*/
.controller('TabsCtrl', function($scope) {
   $scope.toggleLeftSideMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
   };


})


