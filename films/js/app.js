angular.module("myApp", ['ngRoute'])
	.config( function($routeProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/presentation.html',
					controller: 'comingController'
				})
				.when('/upcoming', {
					templateUrl: 'views/upcoming.html',
					controller: 'comingController'
				})
				.when('/popular', {
					templateUrl: 'views/popular.html',
					controller: 'popularController'
				})
				.when('/nowplaying', {
					templateUrl: 'views/nowplaying.html',
					controller: 'nowplayingController'
				})
				.when('/top_rated', {
					templateUrl: 'views/top_rated.html',
					controller: 'topRatedController'
				})
				.otherwise({redirectTo: '/'});

	})


// configure our routes
// angular.module('routingApp').config(function($routeProvider) {
// 	$routeProvider
// 		// route for the home page
// 		.when('/', {
// 			templateUrl : 'templates/home.html',
// 			controller  : 'HomeController'
// 		})
// 		// route for the about page
// 		.when('/about', {
// 			templateUrl : 'templates/about.html',
// 			controller  : 'AboutController'
// 		})
// 		// route for the contact page
// 		.when('/contact', {
// 			templateUrl : 'templates/contact.html',
// 			controller  : 'ContactController'
// 		})
// 		.when('/details/:page', {
// 			templateUrl : 'templates/details.html',
// 			controller : 'DetailsController'
// 		})
// 		.otherwise({redirectTo: '/'}); ;
// });

