(function() {
	'use strict';

	angular
		.module('app.directive')
		.directive('postDirective', postDirective);
	
	function postDirective() {
		
		var directive = {
			scope: {
				publish: '&'
			},
			link: link,
			templateUrl: 'global/post/post.tpl.html',
			restrict: 'EA'
		};

		return directive;

		/**
		 * Link function
		 */
		function link(scope, element, attrs) {

			/* jshint validthis: true */
			var vm = scope;

			vm.submitPost = function() {
				scope.publish()(scope.post);
			};


		}

	}

})();