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
		gCtrl.title = 'Guest Registration';
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
				console.log(response);
			});
		}
	}
	
	function imageSliderController() {
		var imageSlider = this;
		imageSlider.slides = [
		                      {image: 'images/img00.jpg', description: 'Image 00'},
		                      {image: 'images/img01.jpg', description: 'Image 01'},
		                      {image: 'images/img02.jpg', description: 'Image 02'},
		                      {image: 'images/img03.jpg', description: 'Image 03'},
		                      {image: 'images/img04.jpg', description: 'Image 04'}];
		
		imageSlider.currentIndex=0;
		imageSlider.setCurrentSlideIndex = function(index) {
			imageSlider.currentIndex=index;
		}; 
		
		imageSlider.isCurrentSlideIndex = function(index) {
			return (imageSlider.currentIndex === index);
		};
		
		imageSlider.next = function() {
			imageSlider.currentIndex < imageSlider.slides.length-1 ? imageSlider.currentIndex++ : imageSlider.currentIndex=0;
		}

		imageSlider.prev = function() {
			imageSlider.currentIndex > 0  ? imageSlider.currentIndex-- : imageSlider.currentIndex=imageSlider.slides.length-1;
		}
		
		/*var timer;
		var sliderFunc = function() {
				timer = $timeout(function(){
				imageSlider.next();
				timer = $timeout(sliderFunc, 5000);
			},5000); 
		};
		sliderFunc();*/
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