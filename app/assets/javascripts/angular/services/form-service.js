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

        $scope.serverErrors[attribute] = formatErrorMessages(attribute, errors); 
      });
    }

    //TODO: Potentially factor this out to a directive since its format/view type code.
    function formatErrorMessages(attribute, errors) {
      var errorMessages = [];

      angular.forEach(errors, function(error) {
        var message = s.humanize(attribute) + " " + error;
        errorMessages.push(message);
      });

      return errorMessages;
    }

    return {
      handleServerErrors : handleServerErrors
    }
  }

})();
