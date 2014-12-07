(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('authController', authController);

	authController.$inject = ['$scope', '$modalInstance', 'fireBaseFactory', 'SweetAlert'];

    function authController($scope, $modalInstance, fireBaseFactory, SweetAlert) {

		$scope.auth = function(){
			fireBaseFactory.login($scope.credentials)
            .then(function(authData) {
                SweetAlert.swal({title: "Logged In"}, function(){
                    $modalInstance.dismiss('cancel');
                });
            })
            .catch(function(error) {
                SweetAlert.swal("Authentication failed", "Please try again", "error");
                delete($scope.credentials);
            });
		};

    }

})();