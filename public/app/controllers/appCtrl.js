angular.module('mainCtrl', [])

.controller("MainController", function($scope,$location){
	$scope.rentaCar = function(){
			$location.path('/find');
			console.log("Rent a car is called");
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
			else if (pincodeValue.length !== 6 )
			{
				$scope.message = "This is not a valid pincode, pincode should be of 6 digit";
			}
			else {
				$scope.message = "Thanks for entering a valid pincode";
				$location.path('/cars/' + $scope.pincode);
		    }
		}
})

.controller("CarsController", function($scope,$location,$routeParams){
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

.controller("DealerController", function($scope,$location){
})


.controller("RentYourCarController", function($scope,$location){
})	


.controller("RentCarController", function($scope,$location,$routeParams){
$scope.carData = ""
$http.get("../../app/models/" + $routeParams.param + ".json")
       .then(function(response){ 
       	$scope.carData = response.data; 
        console.log($scope.carData);
       })


})
