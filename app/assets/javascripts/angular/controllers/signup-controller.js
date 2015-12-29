var app = angular.module('pjApp');

app.controller('signupController', ['$scope', 'User', function($scope, User) {
  $scope.signup = function(user) {
    User.$create(user).$then(
      function(user) {
        console.log("User created: ", user);
      },
      function(reason) {
        console.log("Signup failed: ", reason);
      });
  }
}]);
