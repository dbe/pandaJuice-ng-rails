(function() {
  'use strict'

  angular.
  module('pjApp').
  controller('applicationController', applicationController);

  applicationController.$inject = ['$scope', 'sessionService'];

  function applicationController($scope, sessionService) {
    $scope.logout = sessionService.logout;
  }

})();
