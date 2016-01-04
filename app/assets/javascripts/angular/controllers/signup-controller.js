(function() {
  'use strict'

  angular.
    module('pjApp').
    controller('signupController', SignupController);

  SignupController.$inject = ['$scope', 'User', '$state', 'alertService', 'sessionService'];

  function SignupController($scope, User, $state, alertService, sessionService) {
    $scope.signup = function(user, form) {
      console.log("In signup, about to call server");
      $scope.serverErrors = {};

      User.$create(user).$then(
        function(user) {
          sessionService.setCurrentUser(user);
          alertService.addAlert('success', 'User created!');
          $state.go('home');
        },
        function(r) {
          console.log("Handling error response");
          var errorMap = r.$response.data.errors;

          angular.forEach(errorMap, function(errors, attribute) {
            form[attribute].$setTouched();
            form[attribute].$setValidity('server', false);
            $scope.serverErrors[attribute] = errorMessage(attribute, errors); 
          });
        });

      //TODO: factor this out
      function errorMessage(attribute, errors) {
        //Capitalize the first letter of attribute
        var capAttr = attribute.charAt(0).toUpperCase() + attribute.substring(1).toLowerCase();
        return capAttr + " " + errors.join(',');
      }
    }
  }
})();
