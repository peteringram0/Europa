(function() {
    'use strict';

    /**
     * Lets define everything
     */
    angular
        .module('app', [
            'app.routes',
            'app.factory',
			'app.controllers',
            'app.constant',
            'app.directive',
            'app.filters',
            'app.config',
            'ngLodash',
            'ui.router',
            'partials',
            'ngStorage',
            'firebase',
            'ui.bootstrap',
            'duScroll',
            'duParallax',
            'ui.gravatar',
            'ngSanitize',
            'textAngular',
            'oitozero.ngSweetAlert',
            'sticky'
        ]);

    /**
     * Envoke all our function
     */
    angular.module('app.filters', []);
    angular.module('app.config', ['ui.gravatar', 'textAngular']);
    angular.module('app.constant', []);
    angular.module('app.routes', ['ui.router']);
    angular.module('app.factory', ['ngResource']);
    angular.module('app.controllers', ['oitozero.ngSweetAlert']);
    angular.module('app.directive', []);

})();