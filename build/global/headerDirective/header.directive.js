(function() {
    'use strict';

    angular
        .module('app.directive')
        .directive('header', header);
    
    function header() {
		
        var directive = {
            link: link,
            templateUrl: 'global/headerDirective/header.tpl.html',
            restrict: 'EA'
        };

        return directive;

        function link(scope, element, attrs) {

            /* jshint validthis: true */
            var vm = scope; 

            

        }

    }

})();