(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('admin', admin);

	admin.$inject = ['$scope', '$firebase', 'config', '$http'];

    function admin($scope,$firebase,config,$http) {
		
		/* jshint validthis: true */
		var vm = this;

		/**
		 * Seed the database with test data in the firebase_seed.json file
		 * @author Peter Ingram <peter.ingram0@gmail.com>
		 * @return {[type]} [description]
		 */
		vm.dbseed = function() {
			var ref = new Firebase(config.firebaseURL);
			var sync = $firebase(ref);
			$http.get('/firebase_seed.json').success (function(data){
				sync.$set(data);
			});
		};

    }

})();