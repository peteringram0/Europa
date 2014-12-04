(function() {
    'use strict';

    angular
        .module('app', [
            'app.routes',
            'app.factory',
			'app.controllers',
            'app.constant',
            'app.directive',
            'ngLodash',
            'ui.router',
            'partials',
            'ngStorage',
            'firebase',
            'ui.bootstrap',
            'duScroll',
            'duParallax'
        ]);

    angular.module('app.constant', []);
    angular.module('app.routes', ['ui.router']);
    angular.module('app.factory', ['ngResource']);
    angular.module('app.controllers', []);
    angular.module('app.directive', []);

})();