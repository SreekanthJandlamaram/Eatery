"use strict"; 
(function (){
		
		var abc = angular.module('Student',['ngRoute']);

		angular.module('Student').config(['$routeProvider', ModuleConfig]);		
		
		function ModuleConfig($routeProvider) {
			$routeProvider
				.when('/guest', {
					templateUrl : 'html/guest.html',
					controller : 'GuestCtrl',
					controllerAs : 'gCtrl'					
				})
				.when('/owner', {
					templateUrl : 'html/owner.html',
					controller : 'OwnerCtrl',
					controllerAs : 'oCtrl'
				})
				.when('/editReservation', {
					templateUrl : 'html/editReservation.html',
					controller : 'EditReservationCtrl',
					controllerAs : 'erCtrl'
				})
				.when('/profile', {
					templateUrl : 'html/profile.html',
					controller : 'ProfileCtrl',
					controllerAs : 'pCtrl'
				}).otherwise({
					redirectTo : '/guest'
				});
		}	
	})(); 