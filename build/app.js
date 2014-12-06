(function() {
    'use strict';

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
            'ngSanitize', // Needed for textAngular
            'textAngular'
        ]);

    angular.module('app.filters', []);
    angular.module('app.config', ['ui.gravatar', 'textAngular']);
    angular.module('app.constant', []);
    angular.module('app.routes', ['ui.router']);
    angular.module('app.factory', ['ngResource']);
    angular.module('app.controllers', []);
    angular.module('app.directive', []);

})();