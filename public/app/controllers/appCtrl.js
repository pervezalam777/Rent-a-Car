angular.module('mainCtrl', [])

.controller("MainController", function($scope,$location,$http){
	$scope.rentaCar = function(){
		$location.path('/find');
		$location.path('/find');			
	};

	$scope.addCarforRent = function(){
		$location.path("/rentmycar");
	};

	$scope.gotoCarList = function(){
		var pincodeValue = 	$scope.pincode;
		$scope.message = "";

		if(pincodeValue == " " || pincodeValue == null){
			$scope.message = "Pincode is required";
		}
		else if(isNaN(pincodeValue)) {
			$scope.message = "This is not a numbers";
		}
		else if (pincodeValue.length !== 6 ){
			$scope.message = "This is not a valid pincode, pincode should be of 6 digit";
		}
		else {
			$scope.message = "Thanks for entering a valid pincode";
			$location.path('/cars/' + $scope.pincode);
		}
	}
})

.controller("CarsController", function($scope,$location,$http,$routeParams){
	$scope.dataset = [];
	$http.get("../../app/models/cars.json")
	.then(function(response){ 
		$scope.dataset = response.data; 
		$scope.carFilter = $routeParams.param;
	})

	$scope.rentCar= function(){ 
		$scope.carId = event.target.id;
		$location.path('/rentform/' + $scope.carId);
	}
})

.controller("DealerController", function($scope,$location,$http){})

.controller("RentYourCarController", function($scope,$location,$http){})	

.controller("RentCarController", function($scope,$location,$http,$routeParams){
	$scope.carData = ""
	$http.get("../../app/models/" + $routeParams.param + ".json")
	.then(function(response){ 
		$scope.carData = response.data; 
	})

/*Validations for rent it form-validation of mobile number*/
	var currentDate = new Date();
	$scope.dateValidationmsg= "";

	$scope.validateRentForm = function(){
		if($scope.fromDate == undefined){
			$scope.dateValidationmsg = "Please enter a valid date"
		}
		else if($scope.toDate < $scope.fromDate){
			$scope.dateValidationmsg = "To date should be later to from date";
		}
		else if ($scope.fromDate < currentDate){
			$scope.dateValidationmsg = "This is not a valid date"
		}
	}
})
