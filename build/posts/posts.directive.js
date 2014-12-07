(function() {
    'use strict';

    angular
        .module('app.directive')
        .directive('dynamic', dynamic);
    
    dynamic.$inject = ['$compile', 'parallaxHelper'];

    /**
     * All content provided by firebase will run through this directive.
     * The directives mission is to ensure all conent is compiled back into the DOM allowing users to bind
     * angualr events within the HTML stored within Firebase. This is currently used for parallax
     * @author Peter Ingram <peter.ingram0@gmail.com>
     */
    function dynamic($compile, parallaxHelper) {
    
        var directive = {
            restrict: 'A',
            replace: true,
            link: link
        };

        return directive;

        /**
         * Linking function
         */
        function link(scope, ele, attrs) {

            scope.$watch(attrs.dynamic, function(html) {
                ele.html(html);
                $compile(ele.contents())(scope);
            });
            
        }

    }

})();