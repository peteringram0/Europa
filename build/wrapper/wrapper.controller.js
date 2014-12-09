(function() {
	'use strict';

	angular
		.module('app.controllers')
		.controller('wrapper', wrapper);

	wrapper.$inject = ['fireBaseFactory', '$modal', '$state', 'SweetAlert'];

	function wrapper(fireBaseFactory, $modal, $state, SweetAlert) {
		
		/* jshint validthis: true */
		var vm = this;

		/**
		 * Bind the Menu to the wrapper controller
		 */
		vm.menu = fireBaseFactory.getMenu();

		status();

		vm.authModal = function() {
			var modalInstance = $modal.open({
				templateUrl: 'wrapper/auth/auth.tpl.html',
				controller: 'authController',
			});
			//status();
		};

		vm.logout = function() {
			 fireBaseFactory.logout();
			 SweetAlert.swal("Logged Out", "You have now been logged out", "success");
			 status();
			 $state.go('otherwise');
		};

		function status() {
			vm.status = fireBaseFactory.checkStatus();
		}

	}

})();