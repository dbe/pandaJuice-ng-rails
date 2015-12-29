var pjApp = angular.module('pjApp', [
    'ngResource',
    'ui.router',
    'restmod',
    'ng-rails-csrf'
]);

pjApp.controller('pjController', ['$scope', '$resource', 'User', 'Item', 'Sale', function($scope, $resource, User, Item, Sale) {

  //TODO: I can take out the logging and the error handler. Just for debugging now
  Sale.current().$then(function(sale) {
    $scope.current_sale = sale;
  },
  function(reason) {
    console.log("Failed to fetch sale. Reason: ", reason);
  });
}]);
