var pjApp = angular.module('pjApp');

pjApp.controller('loginController', ['$scope', 'User', function($scope, User) {
  $scope.signup = function(user) {
    console.log("In signup. User: ", user);
  }
}]);
