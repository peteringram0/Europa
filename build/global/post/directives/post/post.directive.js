(function() {
	'use strict';

	angular
		.module('app.directive')
		.directive('postDirective', postDirective);
	
	function postDirective() {
		
		var directive = {
			scope: {
				publish: '&',
				config: '='
			},
			link: link,
			templateUrl: 'global/post/directives/post/post.tpl.html',
			restrict: 'EA'
		};

		return directive;

		/**
		 * Link function
		 */
		function link(scope, element, attrs) {

			/* jshint validthis: true */
			var vm = scope;

			vm.submitPost = function(valid) {
				if(valid){
					scope.publish()(scope.post);
				}
			};

			vm.config = scope.config;


		}

	}

})();