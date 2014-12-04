(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('page1', page1);

	page1.$injector = ['$firebase']

    function page1($firebase) {
		
		var vm = this;

		vm.dbseed = function() {
			var ref = new Firebase("https://europa-app.firebaseio.com/posts");
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