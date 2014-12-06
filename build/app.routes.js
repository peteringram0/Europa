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

        $stateProvider.state('wrapper.posts', {
            url: '/posts',
            controller: 'posts as posts',
            templateUrl: 'posts/posts.tpl.html'
        });

        $stateProvider.state('wrapper.home', {
            url: '/home',
          //  controller: 'page1 as page1',
           // templateUrl: 'page1/page1.tpl.html'
            template: 'Home'
        });

        $stateProvider.state('wrapper.admin', {
            url: '/e-admin',
            controller: 'admin as admin',
            templateUrl: 'admin/admin.tpl.html'
        });

        $stateProvider.state("otherwise", { 
            url : '/',
            templateUrl: 'wrapper/wrapper.tpl.html'
        });

    }

})();