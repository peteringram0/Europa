(function() {
    'use strict';

    angular
        .module('app', [
            'app.routes',
            'app.factory',
			'app.controllers',
            'app.constant',
            'app.directive',
            'app.config',
            'ngLodash',
            'ui.router',
            'partials',
            'ngStorage',
            'firebase',
            'ui.bootstrap',
            'duScroll',
            'duParallax',
            'ui.gravatar'
        ]);

    angular.module('app.config', ['ui.gravatar']);
    angular.module('app.constant', []);
    angular.module('app.routes', ['ui.router']);
    angular.module('app.factory', ['ngResource']);
    angular.module('app.controllers', []);
    angular.module('app.directive', []);

})();