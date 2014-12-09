(function() {
	'use strict';

	angular
		.module('app.config')
		.config(config);

		config.$injector = ['gravatarServiceProvider'];

		/**
		 * Application configuration
		 * 
		 * @author Peter Ingram <peter.ingram0@gmail.com>
		 */
		function config(gravatarServiceProvider) {
			
			/**
			 * Default options for gravatar image
			 *
			 * @author Peter Ingram <peter.ingram0@gmail.com>
			 */
			gravatarServiceProvider.defaults = {
				size     : 200,
				"default": 'mm'  // Mystery man as default for missing avatars
			};

		}

})();

