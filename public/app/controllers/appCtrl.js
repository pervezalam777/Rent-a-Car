angular.module('mainCtrl', ["carSerivces"])

.controller("MainController", ["$scope","$location", function($scope,$location){
	$scope.rentaCar = function(){
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
}])

.controller("CarsController",["$scope","$location","$routeParams", "carService", function($scope,$location,$routeParams,carService){
	$scope.dataset = [];
	$scope.showNoMatchMsg = false;
	carService.fetchCarList()
	.then(function(response){ 
		$scope.dataset = response.data; 
		$scope.carFilter = $routeParams.param;
		checkPincode();
	})

	var checkPincode = function(){
		var matchFound = false;
		for(var i =0; i<$scope.dataset.length; i++){
			if($routeParams.param == $scope.dataset[i].pincode){
				matchFound = true;
				break;
			}
		}
		if ( matchFound == false){
			$scope.showNoMatchMsg = true; 
		}
	}

	$scope.gotoPincodePage = function(){
		$location.path('/find');
	}

	$scope.rentCar= function(){ 
		$scope.carId = event.target.id;
		$location.path('/rentform/' + $scope.carId);
	}
}])

.controller("DealerController", ["$scope", "$location", function($scope,$location){}])

.controller("RentYourCarController", ["$scope", "$location", function($scope,$location){
	var currentDate = new Date();

	$scope.validatePurchaseDate = function(){
		if($scope.purchaseDate == undefined){
		return
		}
		else if( $scope.purchaseDate > currentDate){
			alert("Purchase date can't be from future");
		}
	}

	





}])	

.controller("RentCarController", ["$scope","$location", "$routeParams", "carService", function($scope,$location,$routeParams,carService){
	$scope.carData = ""
	carService.fetchCarDetails($routeParams.param)
	.then(function(response){ 
		$scope.carData = response.data; 
	})

/*Validations for rent it form-validation of mobile number*/
	var currentDate = new Date();
	$scope.dateValidationmsg= "";
	$scope.days = 0;
	$scope.rentBtnEnable = false;
	$scope.okBtnEnable = false;

	/*Function to check if the dates are validate*/
	$scope.validateDates = function(){
		if($scope.fromDate == undefined || $scope.toDate == undefined){
			return;
		}
		else if($scope.toDate < $scope.fromDate){
			$scope.dateValidationmsg = "To date should be later to from date";
		}
		else if ($scope.fromDate < currentDate){
			$scope.dateValidationmsg = "This is not a valid date"
			console.log(currentDate);
			console.log($scope.fromDate);
		}
		else{
			$scope.days = ($scope.toDate - $scope.fromDate)/(24*60*60*1000);
			$scope.rentBtnEnable = true;
		}
	}

	$scope.showConfirmationMsg = function(){
		$scope.confirmationMsg = "We are submitting your request to the dealer. You will soon receive email communication for the same"
		$scope.rentBtnEnable = false;
		$scope.okBtnEnable = true;
	}
	$scope.gotoFindPage = function(){
		$location.path('/find');
	}
}])
