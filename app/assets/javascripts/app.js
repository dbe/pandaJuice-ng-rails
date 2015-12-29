console.log("In app.js");
console.log(Routes.current_sales_path);

var pjApp = angular.module('pjApp', [
    'ngResource',
    'ui.router',
    'restmod'
]);

pjApp.controller('pjController', ['$scope', '$resource', 'User', 'Item', function($scope, $resource, User, Item) {
  $resource(Routes.current_sales_path()).query({}, function(sales) {
    $scope.current_sale = sales[0];
  });

  var u = User.$build();
  u.$save();
  console.log("User was: ", u);

  var i = Item.$find(1);
  console.log("Item was: ", i);
}]);
