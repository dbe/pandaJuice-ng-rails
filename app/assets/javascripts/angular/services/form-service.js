(function() {
  'use strict'

  angular.
    module('pjApp').
    factory('formService', formService);


  formService.$inject = [];

  function formService() {

    //Note: Seems to only work with responses from restmod atm due to response formatting
    function handleServerErrors(r, $scope, form) {
      var errorMap = r.$response.data.errors;

      angular.forEach(errorMap, function(errors, attribute) {
        handleServerError(errors, attribute, form, $scope);
      });
    }

    //Able to be used to set errors on individual attribute if the form doesn't match up properly with normal restmod error cases (used in login form)
    function handleServerError(errors, attribute, form, $scope) {
      form[attribute].$setTouched();
      form[attribute].$setValidity('server', false);

      $scope.serverErrors[attribute] = formatErrorMessages(attribute, errors); 
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
      handleServerErrors : handleServerErrors,
      handleServerError : handleServerError
    }
  }

})();
