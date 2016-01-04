(function() {
  'use strict'

  angular.
    module('pjApp').
    factory('sessionService', sessionService);

  sessionService.$inject = ['$rootScope'];

  function sessionService($rootScope) {

    $rootScope.currentUser = undefined;

    function login(user) {
      console.log("Logging in user: ", user);
    }

    function logout() {
      console.log("Logging out");
      $rootScope.currentUser = undefined;
    }

    function setCurrentUser(user) {
      console.log("Setting user as current user: ", user);
      $rootScope.currentUser = user;
    }

    return {
      login : login,
      logout : logout,
      setCurrentUser : setCurrentUser
    }
  }
})();
