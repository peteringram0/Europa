(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('posts', posts);

	posts.$inject = ['$scope', 'parallaxHelper', 'fireBaseFactory'];

    function posts($scope, parallaxHelper, fireBaseFactory) {
		
		/* jshint validthis: true */
		var vm = this;

		vm.background = parallaxHelper.createAnimator(-0.3);

		vm.posts = fireBaseFactory.getPosts();

    }

})();