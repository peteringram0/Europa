(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(Routing);

    Routing.$inject = ['$stateProvider', '$locationProvider'];

    /**
     * Routing function
     * @author Peter Ingram <peter.ingram0@gmail.com>
     */
    function Routing($stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);
        
        $stateProvider.state('wrapper', {
            templateUrl: 'wrapper/wrapper.tpl.html'
        });

        $stateProvider.state('wrapper.page1', {
            url: '/page1',
            controller: 'page1 as page1',
            templateUrl: 'page1/page1.tpl.html'
        });

        $stateProvider.state("otherwise", { 
            url : '/',
            templateUrl: 'wrapper/wrapper.tpl.html'
        });

    }

})();