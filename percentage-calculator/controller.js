angular.module('myApp')
	.controller ('firtCalcul', function ($scope){
		$scope.error = "";
		$scope.calculateFirst = function(){

			if( isNaN($scope.numberOne) === true || isNaN($scope.numberTwo) === true){
	 			$scope.error = "El valor no es un número!!";
	 		}

			$scope.result = (Number($scope.numberOne) / 100) * Number($scope.numberTwo);
			console.log($scope.result)
		}

		$scope.clearError = function(){
			$scope.error = "";
		}

	})
	

	.controller ('secondCalcul', function ($scope){
		$scope.error = "";
		$scope.calculateSecond = function(){

			if( isNaN($scope.numberOne) === true || isNaN($scope.numberTwo) === true){
	 			$scope.error = "El valor no es un número!!";
	 		}

			$scope.result = (Number($scope.numberOne) / Number($scope.numberTwo)) * 100;
			console.log($scope.result)
			
		}

		$scope.clearError = function(){
			$scope.error = "";
		}

	})


	.controller ('thistCalcul', function ($scope){
		$scope.error = "";

		$scope.calculateThist = function(){

			if( isNaN($scope.numberOne) === true || isNaN($scope.numberTwo) === true){
	 			$scope.error = "El valor no es un número!!";
	 		}

			$scope.result = (Number($scope.numberOne) - Number($scope.numberTwo)) / Number($scope.numberOne) * 100;
			console.log($scope.result)
			
		}

		$scope.clearError = function(){
			$scope.error = "";
		}

	})

