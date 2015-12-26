console.log("In app.js");
console.log(Routes.current_sales_path);


var pjApp = angular.module('pjApp', [
    'ngResource',
    'ui.router'
]);

pjApp.controller('pjController', ['$scope', '$resource', function($scope, $resource) {
  $resource(Routes.current_sales_path()).query({}, function(sales) {
    $scope.current_sale = sales[0];
  });
}]);
