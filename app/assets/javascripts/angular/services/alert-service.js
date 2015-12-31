(function() {
  'use strict'

  angular.
    module('pjApp').
    factory('alertService', alertService);

  alertService.$inject = ['$rootScope'];

  function alertService($rootScope) {
    $rootScope.alerts = [];

    function addAlert(type, message) {
      $rootScope.alerts.push({
        type : type,
        message : message,
        close : function() {
          closeAlert(this);
        }
      });
    }

    function closeAlert(alert) {
      var i = $rootScope.alerts.indexOf(alert);
      $rootScope.alerts.splice(i, 1);
    }

    return {
      addAlert : addAlert,
      closeAlert : closeAlert
    };
  }
})();
