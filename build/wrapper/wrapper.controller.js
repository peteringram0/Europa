(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('wrapper', wrapper);

	wrapper.$inject = ['fireBaseFactory', '$modal', '$state'];

    function wrapper(fireBaseFactory, $modal, $state) {
		
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
			 $state.go('otherwise');
		};

    }

})();