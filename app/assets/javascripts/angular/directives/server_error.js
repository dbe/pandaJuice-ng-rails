(function() {
  'use strict'

  angular.
    module('pjApp').
    directive('serverError', serverError);
    
  function serverError() {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, element, attrs, ctrl) {
        element.on('change keydown', function() {
          scope.$apply(function() {
            ctrl.$setValidity('server', true);
          });
        });
      }
    }
  }

})();
