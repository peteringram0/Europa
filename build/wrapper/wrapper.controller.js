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

		vm.authModal = function() {
			var modalInstance = $modal.open({
		    	templateUrl: 'wrapper/auth.tpl.html',
		      	controller: 'authController',
		    });
		};

		vm.logout = function() {
			 fireBaseFactory.logout();
			 SweetAlert.swal("Logged Out", "You have now been logged out", "success");
			 $state.go('otherwise');
		};

    }

})();