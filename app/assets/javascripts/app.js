console.log("In app.js");

var pjApp = angular.module('pjApp', [
    'ngResource'
]);

pjApp.controller('pjController', ['$scope', function($scope) {
  $scope.oreo = "I'm Oreo";
}]);
