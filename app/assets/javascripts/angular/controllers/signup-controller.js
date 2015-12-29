(function() {
  'use strict'

  angular.
    module('pjApp').
    controller('signupController', SignupController);

  SignupController.$inject = ['$scope', 'User'];

  function SignupController($scope, User) {
    $scope.signup = function(form) {
      console.log("Form: ", form);
      window.oreo = form;
    }
    /*
    $scope.signup = function(user) {
      User.$create(user).$then(
        function(user) {
          console.log("User created: ", user);
        },
        function(reason) {
          console.log("Signup failed: ", reason);
          console.log("User on failure was: ", user);
          window.oreo = user;
        });
    }
    */
  }
})();
