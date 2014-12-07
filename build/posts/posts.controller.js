(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('posts', posts);

	posts.$inject = ['parallaxHelper', 'fireBaseFactory', '$compile'];

    function posts(parallaxHelper, fireBaseFactory, $compile) {
		
		/* jshint validthis: true */
		var vm = this;

		/**
		 * In posts if people say posts.background this will get applied
		 */
		vm.background = parallaxHelper.createAnimator(-0.3);

		/**
		 * Load in the posts
		 */
		vm.posts = fireBaseFactory.getPosts();

    }

})();