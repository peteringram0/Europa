(function() {
    'use strict';

    angular
        .module('app.directive')
        .directive('leftBar', leftBar);
    
    function leftBar() {
		
        var directive = {
            link: link,
            templateUrl: 'global/leftBarDirective/leftbar.tpl.html',
            restrict: 'EA'
        };

        return directive;

        function link(scope, element, attrs) {

            /* jshint validthis: true */
            var vm = scope; 

            
        }

    }

})();