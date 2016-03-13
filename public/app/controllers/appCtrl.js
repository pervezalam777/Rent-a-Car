angular.module('mainCtrl', ["carSerivces"])

.controller("MainController", ["$scope","$location", function($scope,$location){
	var vm = this;

	vm.rentaCar = function(){
		$location.path('/find');
	};

	vm.addCarforRent = function(){
		$location.path("/rentmycar");
	};

	vm.gotoCarList = function(){
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
	var currentYear = currentDate.getFullYear(); 

	$scope.validatePurchaseDate = function(){
		if( $scope.purchaseDate > currentDate){
			alert("Purchase date can't be from future");
			$scope.purchaseDate = currentDate;
		}
		else if($scope.purchaseDate.getFullYear()){
			var purchaseYear = $scope.purchaseDate.getFullYear();
			var gapYear = currentYear - purchaseYear;
			if(gapYear > 10){
				alert("No one will buy a car older than 10")
				$scope.purchaseDate = currentDate;
			}
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
		
		if($scope.fromDate == undefined){
			$scope.fromDateValidationmsg = "This is not a valid date";
			console.log($scope.fromDate)
		}
		else if($scope.toDate == undefined){
			$scope.toDateValidationmsg = "This is not a valid date";
			console.log($scope.fromDate)
		}
		else if($scope.toDate < $scope.fromDate){
			$scope.toDateValidationmsg = "To date should be later to from date";
		}
		
		else if ($scope.fromDate < currentDate){
			$scope.fromDateValidationmsg = "This is not a valid date"
			console.log(currentDate);
			console.log($scope.fromDate);
		}
		else if($scope.fromDate != undefined && $scope.toDate != undefined){
			$scope.days = ($scope.toDate - $scope.fromDate)/(24*60*60*1000);
			$scope.rentBtnEnable = true;
		}
	}

	$scope.showConfirmationMsg = function(){
		var ele = angular.element(document.querySelector(".user-form"))[0]
		if(ele.className.indexOf("ng-invalid") == -1){
			$(ele).find(":input:not([type='submit'])").attr("disabled", "disabled");
			$scope.confirmationMsg = "We are submitting your request to the dealer. You will soon receive email communication for the same"
			$scope.rentBtnEnable = false;
			$scope.okBtnEnable = true;
		}
	}
		$scope.gotoFindPage = function(){
		$location.path('/find');
	}
}])
