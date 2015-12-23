console.log("In app.js");

var pjApp = angular.module('pjApp', [
    'ngResource'
]);

pjApp.controller('pjController', ['$scope', '$resource', function($scope, $resource) {
  $scope.oreo = "I'm Oreo";

  $resource('/api/v1/sales/current').get({}, function(a, b) {
  });
}]);
