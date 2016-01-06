(function() {
  'use strict'

  angular.
    module('pjApp').
    factory('sessionService', sessionService);

  sessionService.$inject = ['$rootScope', '$http', 'alertService'];

  function sessionService($rootScope, $http, alertService) {

    $rootScope.currentUser = undefined;

    function login(user) {
      var promise = $http.post('api/v1/users/sign_in', user)
  
      promise.then(
        function success(response) {
          setCurrentUser(user);
        },
        function error(response) {
          console.log("Failed to login: ", response);
        });

      return promise;
    }

    function logout() {

      $http.delete('/api/v1/users/sign_out').then(
        function success(response) {
          console.log("Successfully logged out: ", response);
          setCurrentUser(undefined);
          alertService.addAlert('success', 'Successfully logged out');
        },
        function error(response) {
          console.log("Failed to logout: ", response);
        });
    }

    function setCurrentUser(user) {
      $rootScope.currentUser = user;
    }

    return {
      login : login,
      logout : logout,
      setCurrentUser : setCurrentUser
    }
  }
})();
