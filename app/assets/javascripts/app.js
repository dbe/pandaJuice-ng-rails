console.log("In app.js");
console.log(Routes.current_sales_path);

var pjApp = angular.module('pjApp', [
    'ngResource',
    'ui.router',
    'restmod',
    'ng-rails-csrf'
]);

/*
pjApp.config(function(restmodProvider) {
  restmodProvider.rebase('DefaultPacker');
});
*/

pjApp.controller('pjController', ['$scope', '$resource', 'User', 'Item', function($scope, $resource, User, Item) {
  $resource(Routes.current_sales_path()).query({}, function(sales) {
    $scope.current_sale = sales[0];
  });

  var u = User.$build({email : "sagacityuf4@gmail.com", password: "fakepass"});
  u.$save();
  console.log("User was: ", u);

  var i = Item.$find(1);
  console.log("Item was: ", i);

  var newI = Item.$build({name: "wololo item"});
  newI.$save();
}]);
