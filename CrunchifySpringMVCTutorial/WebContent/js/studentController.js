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
	
	//factory. common code is written.
	GuestController.$inject = ['$http', '$window', '$timeout'];
	function guestFormFactory($http, $window, $timeout) {
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
					guestData.date = null;
					guestData.number = null;
					guestData.size = null;
					alert('Reservation succesfull \nRedirecting to Guest Reservation Page');
					console.log(response);
					$window.location.href = "#/guest";
				});
			
		};
		return gCtrl;
	}
	
	//gets the guest details from the users and makes a post call to the backend
	GuestController.$inject = ['$http', '$window', '$timeout'];
	function GuestController($http, $window, $timeout) {
		var gCtrl = this;
		gCtrl.title = 'Guest Registration';
		gCtrl.submitted = false;
		
		function pad(number, length){
		    var str = "" + number;
		    while (str.length < length) {
		        str = '0'+str;
		    }
		    return str;
		}
		
		gCtrl.sendForm = function(guestData) {
			
			gCtrl.submitted = true;
			$http({
						method : 'POST',
						url : 'http://localhost:8090/CrunchifySpringMVCTutorial/reserve',
						data : guestData,
						contentType : "application/json"
				}).success(function(response) {
				guestData.name = null;
				guestData.date = null;
				guestData.number = null;
				guestData.size = null;
				$timeout(function(){
					alert('Reservation succesfull');
				},2000);
				console.log(response);
			});
		};
	}
	
	//Edits the user reservation and saves the details in the server
	EditReservationController.$inject = ['$http', 'guestFormFactry', '$timeout'];
	function EditReservationController($http, guestFormFactry, $timeout) {
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
				
				//converts UTC date to user localtime.
				var localDate = new Date(response.date);
				erCtrl.editGuest.date = localDate;
				erCtrl.editGuest.number = 12345;
				
				erCtrl.sendEditForm = function() {
					erGuestCtrl.sendForm(erCtrl.editGuest);
				};
			}).
		error(function(response){
				alert("Invalid Ticket Number");
				$timeout(function(){
					alert("Enter valid Ticket Number");
				},1000);
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