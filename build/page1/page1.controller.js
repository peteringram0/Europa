(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('page1', page1);

	page1.$injector = ['$firebase', 'config', 'parallaxHelper']

    function page1($firebase, config, parallaxHelper) {
		
		/* jshint validthis: true */
		var vm = this;

		vm.background = parallaxHelper.createAnimator(-0.3);

		/**
		 * Seed the database with test data
		 * @author Peter Ingram <peter.ingram0@gmail.com>
		 * @return {[type]} [description]
		 */
		vm.dbseed = function() {
			var ref = new Firebase(config.firebaseURL+'/posts');
			var sync = $firebase(ref);

			var postData = {
				title: 'Post title',
				conent: 'Post content',
				date: Firebase.ServerValue.TIMESTAMP
			}

			sync.$push(postData);
		}


    }

})();