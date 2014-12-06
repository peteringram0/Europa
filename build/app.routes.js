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
            controller: 'wrapper as wrapper',
            templateUrl: 'wrapper/wrapper.tpl.html'
        });

        $stateProvider.state('wrapper.posts', {
            url: '/posts',
            controller: 'posts as posts',
            templateUrl: 'posts/posts.tpl.html'
        });

        $stateProvider.state('wrapper.admin', {
            url: '/e-admin',
            controller: 'admin as admin',
            templateUrl: 'admin/admin.tpl.html'
        });

        $stateProvider.state("otherwise", { 
            url : '/',
            controller: 'wrapper as wrapper',
            templateUrl: 'wrapper/wrapper.tpl.html'
        });

    }

})();