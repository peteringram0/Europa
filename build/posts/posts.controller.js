(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('posts', posts);

	posts.$inject = ['$scope', '$firebase', 'config', 'parallaxHelper', '$http'];

    function posts($scope, $firebase, config, parallaxHelper, $http) {
		
		/* jshint validthis: true */
		var vm = this;

		vm.background = parallaxHelper.createAnimator(-0.3);


		var ref = new Firebase(config.firebaseURL+'/posts');
		var sync = $firebase(ref);
		var syncObject = sync.$asObject();
		syncObject.$bindTo($scope, "data");


    }

})();