(function() {
  'use strict'

  angular.
    module('pjApp').
    controller('loginController', LoginController);

  LoginController.$inject = ['$scope', 'sessionService', 'alertService', '$state'];

  function LoginController($scope, sessionService, alertService, $state) {

    $scope.login = function(user) {
      var promise = sessionService.login(user);

      promise.then(
        function success(response) {
          console.log("Successfully logged in. Printed from login controller");
          alertService.addAlert('success', 'Successfully logged in');
          $state.go('home');
        },
        function error(response) {
          console.log("Error logging in. Printed from login controller");
        });
    }
  }

})();
