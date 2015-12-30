(function() {
  'use strict'

  angular.
    module('pjApp').
    controller('signupController', SignupController);

  SignupController.$inject = ['$scope', 'User'];

  function SignupController($scope, User) {
    $scope.signup = function(user, form) {
      console.log("In signup, about to call server");

      User.$create(user).$then(
        function(user) {
          console.log("User created: ", user);
        },
        function(r) {
          console.log("Handling error response");
          var errorMap = r.$response.data.errors;

          angular.forEach(errorMap, function(errors, attribute) {
            form[attribute].$setTouched();

            for(var i in errors) {
              form[attribute].$setValidity('server', false);
            }
          });
        });
    }
  }
})();
