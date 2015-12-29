(function() {
  'use strict'

  angular.
    module('pjApp').
    controller('loginController', LoginController);

  LoginController.$inject = ['$scope', 'User'];

  function LoginController($scope, User) {
    $scope.login = function(form) {
      console.log("In login. Form: ", form);
    }
  }
})();
