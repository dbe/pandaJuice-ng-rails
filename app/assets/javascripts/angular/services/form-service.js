(function() {
  'use strict'

  angular.
    module('pjApp').
    factory('formService', formService);


  formService.$inject = [];

  function formService() {

    function handleServerErrors(r, $scope, form) {
      var errorMap = r.$response.data.errors;

      angular.forEach(errorMap, function(errors, attribute) {
        form[attribute].$setTouched();
        form[attribute].$setValidity('server', false);
        $scope.serverErrors[attribute] = formatErrorMessage(attribute, errors); 
      });
    }

    //TODO: Potentially factor this out to a directive since its format/view type code.
    function formatErrorMessage(attribute, errors) {
      //Capitalize the first letter of attribute
      var capAttr = attribute.charAt(0).toUpperCase() + attribute.substring(1).toLowerCase();
      return capAttr + " " + errors.join(',');
    }

    return {
      handleServerErrors : handleServerErrors
    }
  }

})();
