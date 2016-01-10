angular.module('mainCtrl', [])


.controller("MainController", function($scope,$location){
	$scope.rentaCar = function(){
			console.log("Rent a car is called");
			$location.path('/find');


			
		};

		$scope.addCarforRent = function(){
			console.log("Add car for rent is called");
		};
		$scope.gotoCarList = function(){
			var pincodeValue = 	$scope.pincode;
			console.log(pincodeValue);
			$scope.message = "";



			if(pincodeValue == " " || pincodeValue == null){
				$scope.message = "Pincode is required";

			}
			else if(isNaN(pincodeValue)) {
				$scope.message = "This is not a numbers";

			}
			else if (pincodeValue.length !== 6 )
			{
				$scope.message = "This is not a valid pincode, pincode should be of 6 digit";
			}
			else {
				$scope.message = "Thanks for entering a valid pincode"
				$location.path('/cars')
			}

		}


})



