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
	angular.module('Student').factory('guestFormFactry',guestFormFactory);
	angular.module('Student').controller('GuestCtrl', GuestController);
	angular.module('Student').controller('OwnerCtrl', OwnerController);
	angular.module('Student').controller('imageSliderCtrl', imageSliderController);
	angular.module('Student').controller('EditReservationCtrl', EditReservationController);
	angular.module('Student').controller('RegisterCtrl', RegisterController);
	angular.module('Student').controller('ProfileCtrl', ProfileController);	
	
	angular.module('Student').directive('ngConfirmClick', [ function() {
		return {
			link : function(scope, element, attr) {
				var msg = attr.ngConfirmClick || "Are you sure?";
				var clickAction = attr.confirmedClick;
				element.bind('click', function(event) {
					if (window.confirm(msg)) {
						scope.$eval(clickAction)
					}
				});
			}
		};
	}]);
	
	GuestController.$inject = ['$http', '$window'];
	function guestFormFactory($http, $window) {
		var gCtrl = {};
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
					alert('Reservation succesfull \n Redirecting to Guest Reservation');
					
					$timeout(function(){
						$window.location.href = "#/guest";
					},3000);
					
					console.log(response);
				});
			
		};
		return gCtrl;
	}
	
	GuestController.$inject = ['$http', '$window'];
	function GuestController($http, $window) {
		var gCtrl = this;
		gCtrl.title = 'Guest Registration';
		gCtrl.submitted = false;
		gCtrl.sendForm = function(guestData) {
			
			gCtrl.submitted = true;
			$http({
						method : 'POST',
						url : 'http://localhost:8090/CrunchifySpringMVCTutorial/reserve',
						data : guestData,
						contentType : "application/json"
				}).success(function(response) {
				guestData.name = null;
				guestData.date = response.date;
				guestData.number = null;
				guestData.size = null;
				alert('Reservation succesfull');
				console.log(response);
			});
		};
	}
	
	EditReservationController.$inject = ['$http', 'guestFormFactry'];
	function EditReservationController($http, guestFormFactry) {
		var erCtrl = this;
		var erGuestCtrl = guestFormFactry;
		erCtrl.showForm = true;
		erCtrl.isSubmitted = false;
		
		erCtrl.submitTicketNumber = function submit(tktNumber){
			erCtrl.isSubmitted = true;
			$http({
			method: 'GET',
			url : 'http://localhost:8090/CrunchifySpringMVCTutorial/editReservation/' + tktNumber
		}).
		success(function(response) {
				erCtrl.showForm = false;
				erCtrl.editGuest = {};
				erCtrl.editGuest.name = response.name;
				
				/*erCtrl.sendEditForm = function() {
					erGuestCtrl.sendForm(erCtrl.editGuest);
				};*/
			}).
		error(function(response){
				alert("Invalid Ticket Number");
				alert("Enter valid Ticket Number");
				erCtrl.ticketnumber = null;
			});
		}
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
		                      {image: 'images/img_1.jpg', description: 'Image 00'},
		                      {image: 'images/img_2.jpg', description: 'Image 01'},
		                      {image: 'images/img_3.jpg', description: 'Image 02'},
		                      {image: 'images/img_4.jpg', description: 'Image 03'},
		                      {image: 'images/img_5.jpg', description: 'Image 04'}];
		
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