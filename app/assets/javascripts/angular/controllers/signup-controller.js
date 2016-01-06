(function() {
  'use strict'

  angular.
    module('pjApp').
    controller('signupController', SignupController);

  SignupController.$inject = ['$scope', 'User', '$state', 'alertService', 'sessionService', 'formService'];

  function SignupController($scope, User, $state, alertService, sessionService, formService) {
    $scope.signup = function(user, form) {
      $scope.serverErrors = {};

      User.$create(user).$then(
        function(user) {
          sessionService.setCurrentUser(user);
          alertService.addAlert('success', 'User created!');
          $state.go('home');
        },
        function(r) {
          formService.handleServerErrors(r, $scope, form);
        });
    }
  }
})();
