"use strict"; 
(function (){
		
		var abc = angular.module('Student',['ngRoute']);

		angular.module('Student').config(['$routeProvider', ModuleConfig]);		
		
		function ModuleConfig($routeProvider) {
			$routeProvider				
				.when('/guest', {
					templateUrl : 'html/guest.html',
					title: 'Guest Registration',
					controller : 'GuestCtrl',
					controllerAs : 'gCtrl'					
				})
				.when('/owner', {
					templateUrl : 'html/owner.html',
					controller : 'OwnerCtrl',
					controllerAs : 'oCtrl'
				})
				.when('/register', {
					templateUrl : 'html/register.html',
					controller : 'RegisterCtrl',
					controllerAs : 'rCtrl'
				})
				.when('/profile', {
					templateUrl : 'html/profile.html',
					controller : 'ProfileCtrl',
					controllerAs : 'pCtrl'
				});
		}	
	})(); 