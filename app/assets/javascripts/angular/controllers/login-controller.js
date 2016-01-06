(function() {
  'use strict'

  angular.
    module('pjApp').
    controller('loginController', LoginController);

  LoginController.$inject = ['$scope', 'sessionService', 'alertService', 'formService', '$state'];

  function LoginController($scope, sessionService, alertService, formService, $state) {

    $scope.login = function(user, form) {
      $scope.serverErrors = {};

      var promise = sessionService.login(user);

      promise.then(
        function success(response) {
          alertService.addAlert('success', 'Successfully logged in');
          $state.go('home');
        },
        function error(response) {
          //TODO: Check error response to make sure its unauthorized.
          //Potentially need to factor this out to be more general, but it requires me to see more form data returns first.
          formService.handleServerError(["is invalid."], "password", form, $scope);
        });
    }
  }
})();
