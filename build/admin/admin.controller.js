(function() {
	'use strict';

	angular
		.module('app.controllers')
		.controller('admin', admin);

	admin.$inject = ['fireBaseFactory', 'SweetAlert'];

	function admin(fireBaseFactory, SweetAlert) {
		
		/* jshint validthis: true */
		var vm = this;

		/**
		 * Seed the database with test data in the firebase_seed.json file
		 */
		vm.dbseed = function() {
			var seedDB = fireBaseFactory.dbSeed();
			if(seedDB === true) {
				SweetAlert.swal("Database Seed", "completed", "success");
			}
		};

		/**
		 * Publish the new post
		 */
		vm.publishPost = function(post) {
			fireBaseFactory.publishPost(post);
		};

	}

})();