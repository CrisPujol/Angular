angular.module('myApp')
	.factory('filmsService', function($http) {

			function getUpComing() {
				return $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=a8b109381c0aebb55ccfc909422d348f&language=en-US");
			}

			function getPopular() {
				return $http.get("https://api.themoviedb.org/3/movie/popular?api_key=a8b109381c0aebb55ccfc909422d348f&language=en-US");
			}

			function getNowPlaying() {
				return $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=a8b109381c0aebb55ccfc909422d348f&language=en-US");
			}

			function getTopRated() {
				return $http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=a8b109381c0aebb55ccfc909422d348f&language=en-US");
			}

			return {
				getUpComing: getUpComing,
				getPopular: getPopular,
				getNowPlaying: getNowPlaying,
				getTopRated: getTopRated
			}
	})
