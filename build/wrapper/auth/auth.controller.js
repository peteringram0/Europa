(function() {
	'use strict';

	angular
		.module('app.controllers')
		.controller('authController', authController);

	authController.$inject = ['$scope', '$modalInstance', 'fireBaseFactory', 'SweetAlert', '$state'];

	function authController($scope, $modalInstance, fireBaseFactory, SweetAlert, $state) {

		/**
		 * Authentication from the Modal
		 * @type {[type]}
		 */
		$scope.auth = function(){
			fireBaseFactory.login($scope.credentials)
			.then(function(authData) {
				$modalInstance.dismiss('cancel');
				$state.go('wrapper.admin');
			})
			.catch(function(error) {
				SweetAlert.swal("Authentication failed", "Please try again", "error");
				delete($scope.credentials);
			});
		};

	}

})();