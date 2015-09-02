"use strict";

(function() {

	/*var app = angular.module('Eatery',[]);	
	app.run(['$rootScope', '$route', function($rootScope, $route) {
	    $rootScope.$on('$routeChangeSuccess', function() {
	        document.title = $route.current.title;
	    });
	}]);*/
	
	/*angular.module('Eatery').controller('TitleCtrl', TitleController);
	TitleController.$inject = ['$rootScope', '$route'];
	function TitleController($rootScope, $route) {
		
	}*/
	
	angular.module('Student').run(function(){
		console.log("Welcome to my Page");
	});
	angular.module('Student').controller('GuestCtrl', GuestController);
	angular.module('Student').controller('OwnerCtrl', OwnerController);
	angular.module('Student').controller('imageSliderCtrl', imageSliderController);
	angular.module('Student').controller('RegisterCtrl', RegisterController);
	angular.module('Student').controller('ProfileCtrl', ProfileController);	
	
	GuestController.$inject = ['$http'];
	function GuestController($http) {
		var gCtrl = this;
		gCtrl.submitted = false;
		gCtrl.sendForm = function(guestData) {
			
			gCtrl.submitted = true;
			$http({
				method : 'POST', 
				url : 'http://localhost:8090/CrunchifySpringMVCTutorial/reserve', 
				data : guestData, 
				contentType: "application/json" }).
				success(function(response) {
					guestData.name = null;
					guestData.time = null;
					guestData.date = null;
					guestData.number = null;
					guestData.size = null;
					console.log(response);
				});
		};
	}

	OwnerController.$inject = ['$http'];
	function OwnerController($http) {
		var oCtrl = this;
		oCtrl.getSubmit = function submit(ownerData) {
			console.log(ownerData.id);
			
			var val = {}; 
			val.idd = ownerData.id;
			console.log(val);
			$http({
				method: 'GET',
				url : 'http://localhost:8090/CrunchifySpringMVCTutorial/reser',
				params: val 
			}).
			success(function(response) {
				alert(1);
				console.log(response);
			});
		}
	}
	
	imageSliderController.$inject = ['ngAnimate'];
	function imageSliderController(ngAnimate) {
		var imageSlider = this;
		imageSlider.slides = [
		                      
		                      ];
	}
	
	ProfileController.$inject = [ '$routeParams' ];
	function RegisterController($routeParams) {
		var rCtrl = this;
		rCtrl.params = $routeParams;
		rCtrl.name = rCtrl.params.firstName;
	}

	ProfileController.$inject = [ '$routeParams' ];
	function ProfileController($routeParams) {
		var pCtrl = this;
		pCtrl.params = $routeParams;
		console.log('Profile Controller');
	}

})();

//method : 'GET',
// url : 'http://localhost:8090/CrunchifySpringMVCTutorial/student'