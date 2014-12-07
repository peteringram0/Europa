(function() {
    'use strict';

    angular
        .module('app.directive')
        .directive('dynamic', dynamic);
    
    dynamic.$inject = ['$compile', 'parallaxHelper'];

    function dynamic($compile, parallaxHelper) {
    
        var directive = {
            restrict: 'A',
            replace: true,
            link: link
        };

        return directive;

        function link(scope, ele, attrs) {

            scope.$watch(attrs.dynamic, function(html) {
                ele.html(html);
                $compile(ele.contents())(scope);
            });
            
        }

    }

})();