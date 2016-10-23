angular.module("myApp")
	.controller("comingController", function($scope, $rootScope, filmsService) {
		$rootScope.activetab = 'upcoming';


		
			filmsService.getUpComing()
				.then( function(response) {
					$rootScope.coming = response.data.results;

				})
			
	})

	  .controller("popularController", function($scope, $rootScope, filmsService) {
	 	$rootScope.activetab = 'popular';

	  		filmsService.getPopular()
	  			.then( function(response) {
	 				$rootScope.popular = response.data.results;
	 			})

	  })

	  .controller("nowplayingController", function($scope, $rootScope, filmsService) {
	  	$rootScope.activetab = 'nowplaying';

	 			filmsService.getNowPlaying()
	  				.then( function(response){
	  					$rootScope.now = response.data.results;
	  				})

	  })

	  .controller("topRatedController", function($scope, $rootScope, filmsService) {
	  		 $rootScope.activetab = 'top_rated';

	  				filmsService.getTopRated()
	  					.then( function(response){
	  						$rootScope.rated = response.data.results;
	  					})
	  })