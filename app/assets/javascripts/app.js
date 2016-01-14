var pjApp = angular.module('pjApp', [
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'restmod',
    'ngMessages'
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
      templateUrl: "assets/signup.html",
      controller: 'signupController'
    });
});

pjApp.controller('pjController', ['$scope', '$resource', 'User', 'Item', 'Sale', 'sessionService', function($scope, $resource, User, Item, Sale, sessionService) {

  //TODO: I can take out the logging and the error handler. Just for debugging now
  Sale.current().$then(function(sale) {
    console.log("Current sale is: ", sale);
    $scope.current_sale = sale;
  },
  function(reason) {
    console.log("Failed to fetch sale. Reason: ", reason);
  });

  //TODO: I can take out the logging and the error handler. Just for debugging now
  User.current().$then(function(user) {
    console.log("Current user is: ", user);
    sessionService.setCurrentUser(user);
  },
  function(reason) {
    console.log("Failed to fetch user. Reason: ", reason);
  });
}]);
