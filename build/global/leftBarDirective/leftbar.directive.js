(function() {
	'use strict';

	angular
		.module('app.directive')
		.directive('leftBar', leftBar);
	
	leftBar.$inject = ['config'];

	/**
	 * The left bar is used as a blog default. This is responsable for the left bar of the page
	 * This contains the users gravatar image and menu bar.
	 * 
	 * @author Peter Ingram <peter.ingram0@gmail.com>
	 */
	function leftBar(config) {
		
		var directive = {
			scope: {
				menu: '=',
				categories: '=',
				login: '&',
				logout: '&',
				authStatus: '='
			},
			link: link,
			templateUrl: 'global/leftBarDirective/leftbar.tpl.html',
			restrict: 'EA'
		};

		return directive;

		/**
		 * Link function
		 */
		function link(scope, element, attrs) {
			scope.email = config.email;


			scope.loginFun = function(){
				scope.login();
			};

			scope.logoutFun = function(){
				scope.logout();
			};

		}

	}

})();