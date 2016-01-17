angular.module('mainCtrl', [])

.controller("MainController", function($scope,$location,$http){
	$scope.rentaCar = function(){
			$location.path('/find');
			console.log("Rent a car is called");
			$location.path('/find');			
		};

		$scope.addCarforRent = function(){
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
			else if (pincodeValue.length !== 6 )
			{
				$scope.message = "This is not a valid pincode, pincode should be of 6 digit";
			}
			else {
				$scope.message = "Thanks for entering a valid pincode";
				$location.path('/cars');
		    }
		}
})

.controller("CarsController", function($scope,$rootScope,$location,$http, rentACarFactory){
$scope.dataset = [];
$http.get("../../app/models/cars.json")
       .then(function(response){ 
       	$scope.dataset = response.data; 
        console.log($scope.dataset)
       })

$scope.rentCar= function(){ 
	$scope.carId = event.target.id;
	console.log(rentACarFactory.getData($scope.carId));
	$location.path('/rentform');
   }
 
})

.factory("rentACarFactory", function(){
	var sharedData = ""
		return {
			getData: function(sharedData){
				return sharedData;
			}
		}

})

.controller("DealerController", function($scope,$location,$http){
})


.controller("RentYourCarController", function($scope,$location,$http){
})


.controller("RentCarController", function($scope,$rootScope,$routeParams,$location,$http, rentACarFactory){
alert($routeParams.param);
console.log(rentACarFactory.getData());
})
