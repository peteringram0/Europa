(function() {
    'use strict';

    angular
        .module('app.directive')
        .directive('leftBar', leftBar);
    
    /**
     * The left bar is used as a blog default. This is responsable for the left bar of the page
     * This contains the users gravatar image and menu bar.
     * 
     * @author Peter Ingram <peter.ingram0@gmail.com>
     */
    function leftBar() {
		
        var directive = {
            scope: {
                menu: '='
            },
            link: link,
            templateUrl: 'global/leftBarDirective/leftbar.tpl.html',
            restrict: 'EA'
        };

        return directive;

        /**
         * Link function
         */
        function link(scope, element, attrs) {

            /* jshint validthis: true */
            var vm = scope; 

            /**
             * Binds the menu
             */
            vm.menu = scope.menu;

        }

    }

})();