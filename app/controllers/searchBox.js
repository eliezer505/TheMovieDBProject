(function() {

	var imdb = angular.module("imdb")
	imdb.controller("searchBox", searchBox);

	function searchBox($scope, $http) {
	$scope.actor = null;
	$scope.movie = null;
		$scope.appName = "The Movie DB";
		$scope.searchName = '';
		$scope.searchMovie = ''
		var url='http://api.themoviedb.org/3/';
		var key='f24727bdb915ca05f7718876104b211d'
				$scope.getMovies = function (){
			//message.print($scope.searchName);
			if ($scope.searchMovie != '') {
					var promise = $http.get(url+'search/movie?api_key='+key+'&query=' + $scope.searchMovie);
				promise.then(successCallback, errorCallback);
			}
			else
			{

					$scope.movies=[{name:"no results!"}];


			}
			function successCallback(response) {
				$scope.movies = response.data.results
				console.log("success", response.data.results)
			}

			function errorCallback(response) {
				console.log("error", response.data.results)
			}

		};
		$scope.getActors = function() {
			//message.print($scope.searchName);
			if ($scope.searchName != '') {
				var promise = $http.get(url+'search/person?api_key='+key+'&query=' + $scope.searchName);
				promise.then(successCallback, errorCallback);
			}
			else
			{

					$scope.results=[{name:"no results!"}];


			}
			function successCallback(response) {
				$scope.results = response.data.results
				console.log("success", response.data.results)
			}

			function errorCallback(response) {
				console.log("error", response.data.results)
			}

		};

	}


})();

