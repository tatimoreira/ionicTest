angular.module('songhop')
/*
Controller for the favorites page
*/
.controller('FavoritesCtrl', function($scope, $cordovaCamera) {

	$scope.sampleData = [{'key':'one'},
                       {'key':'two'},
                       {'key':'three'},
                       {'key':'four'},
                       {'key':'five'}];
  

	$scope.takePhoto = function () {
		var options = {
			quality: 75,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 300,
			targetHeight: 300,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false
		};

		$cordovaCamera.getPicture(options).then(function (imageData) {
			$scope.imgURI = "data:image/jpeg;base64," + imageData;
		}, function (err) {
                        // An error occured. Show a message to the user
                    });
	}

	$scope.choosePhoto = function () {
		var options = {
			quality: 75,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 300,
			targetHeight: 300,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false
		};

		$cordovaCamera.getPicture(options).then(function (imageData) {
			$scope.imgURI = "data:image/jpeg;base64," + imageData;
		}, function (err) {
                        // An error occured. Show a message to the user
                    });
	}

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

