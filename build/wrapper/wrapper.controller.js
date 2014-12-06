(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('wrapper', wrapper);

	wrapper.$inject = ['fireBaseFactory'];

    function wrapper(fireBaseFactory) {
		
		/* jshint validthis: true */
		var vm = this;

		/**
		 * Bind the Menu to the wrapper controller
		 */
		vm.menu = fireBaseFactory.getMenu();

    }

})();