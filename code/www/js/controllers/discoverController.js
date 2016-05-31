

angular.module('songhop')
/*
Controller for the discover page
*/
.controller('DiscoverCtrl', function($scope, $ionicActionSheet, $ionicPopup,  $ionicLoading) {

	$scope.songs = [
		{
			"name":"Allan Naranjo Orange",
			"occupation":"Albañil",
			"image_small":"img/avatar.png",
			"image_large":"img/Nice-Profile.jpg"
		},
		{
			"name":"Tatiana Moreira Beita",
			"occupation":"Electricista",
			"image_small":"https://i.scdn.co/image/1a4ba26961c4606c316e10d5d3d20b736e3e7d27",
			"image_large":"img/ta.jpg"
		},
		{
			"name":"Ramón Aguirre",
			"occupation":"Informático",
			"image_small":"https://i.scdn.co/image/398df9a33a6019c0e95e3be05fbaf19be0e91138",
			"image_large":"img/hombre.jpg"
		}
	];
	$scope.sorting = [{score: 9, name : 'Score more then 9'}, 
                    {score: 8, name : 'Score more then 8'}, 
                    {score: 7, name : 'Score more then 7'}, 
                    {score: 6, name : 'Score more then 6'}, 
                    {score: 5, name : 'Score more then 5'}, 
                    {score: 4, name : 'Score more then 4'}, 
                    {score: 3, name : 'Score more then 3'}, 
                    {score: 2, name : 'Score more then 2'}, 
                    {score: 1, name : 'Score more then 1'},                     
                    {score: 0, name : 'Show me every movie'}]; 

	$scope.currentSong = angular.copy($scope.songs[0]);

   $scope.toggleLeft = function () {
    	$ionicSideMenuDelegate.toggleLeft();
  	};
  
	$scope.sendFeedback = function (bool) {

	    // set the current song to one of our three songs
	    var randomSong = Math.round(Math.random() * ($scope.songs.length - 1));

	    // update current song in scope
	    $scope.currentSong = angular.copy($scope.songs[randomSong]);

	}

	$scope.showLoading = function() {
		$ionicLoading.show({
			content: "Please wait...",
    		duration: 3000,
		});

	};


	$scope.showActionsheet = function() {
    
	    $ionicActionSheet.show({
	      titleText: 'ActionSheet Example',
	      buttons: [
	        { text: '<i class="icon ion-share ></i> Share'},
	        { text: '<i class="icon ion-arrow-move"></i> Move' },
	      ],
	      destructiveText: 'Delete',
	      cancelText: 'Cancel',
	      cancel: function() {
	        console.log('CANCELLED');
	      },
	      buttonClicked: function(index) {
	      	switch (index){
			case 0 :
				$scope.showLoading();
				return true;
			case 1 :
				$scope.hideLoading();
				return true;
		}
         },
	      destructiveButtonClicked: function() {
	        console.log('DESTRUCT');
	        return true;
	      }

	    });
  };
  // When button is clicked, the popup will be shown...
   $scope.showAlertSkip = function() {
      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '<input type = "text" ng-model = "data.model">',
         title: 'Skip: Carlos',
         subTitle: 'Do you really want to skip this person? Why?',
         scope: $scope,
			
         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Save</b>',
               type: 'button-positive',
                  onTap: function(e) {
						
                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }
                  }
            }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };


    
})
