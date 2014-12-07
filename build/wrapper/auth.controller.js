(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('authController', authController);

	authController.$inject = ['$scope', '$modalInstance', 'fireBaseFactory'];

    function authController($scope, $modalInstance, fireBaseFactory) {

		$scope.auth = function(){
			fireBaseFactory.login($scope.credentials);
		};

    }

})();