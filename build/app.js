(function() {
    'use strict';

    angular
        .module('app', [
            'app.routes',
            'app.factory',
			'app.controllers',
            'app.constant',
            'ngLodash',
            'ui.router',
            'partials',
            'ngStorage'
        ]);

    angular.module('app.constant', []);
    angular.module('app.routes', ['ui.router']);
    angular.module('app.factory', ['ngResource']);
    angular.module('app.controllers', []);

})();