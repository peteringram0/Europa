(function() {
	'use strict';

	angular
		.module('app.constant')
		.constant('config', constant());

		/**
		 * Constant's config 
		 * @author Peter Ingram <peter.ingram0@gmail.com>
		 */
		function constant() {
			return {
				firebaseURL: 'https://europa-app.firebaseio.com/',
				email: 'peter.ingram0@gmail.com'
			};
		}

})();