(function() {
	'use strict';

	angular
		.module('app.controllers')
		.controller('wrapper', wrapper);

	wrapper.$inject = ['fireBaseFactory', '$state', 'SweetAlert'];

	function wrapper(fireBaseFactory, $state, SweetAlert) {
		
		/* jshint validthis: true */
		var vm = this;

		/**
		 * Bind the Config to the wrapper controller
		 */
		vm.config = fireBaseFactory.getConfig();

		status();

		vm.authModal = function() {
			/*
			var modalInstance = $modal.open({
				templateUrl: 'wrapper/auth/auth.tpl.html',
				controller: 'authController',
			});
			*/
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