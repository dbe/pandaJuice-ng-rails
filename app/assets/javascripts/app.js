var pjApp = angular.module('pjApp', [
    'ngResource',
    'ui.router',
    'restmod',
    'ng-rails-csrf'
]);


pjApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "assets/home.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "assets/login.html",
      controller: 'loginController'
    })
    .state('signup', {
      url: "/signup",
      templateUrl: "assets/signup.html"
    });
});

pjApp.controller('pjController', ['$scope', '$resource', 'User', 'Item', 'Sale', function($scope, $resource, User, Item, Sale) {

  //TODO: I can take out the logging and the error handler. Just for debugging now
  Sale.current().$then(function(sale) {
    $scope.current_sale = sale;
  },
  function(reason) {
    console.log("Failed to fetch sale. Reason: ", reason);
  });
}]);
