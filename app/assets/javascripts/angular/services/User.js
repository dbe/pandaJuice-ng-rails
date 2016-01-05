(function() {
  'use strict'

  angular.
    module('pjApp').
    factory('User', User);

  User.$inject = ['restmod', 'utilService'];

  function User(restmod, utilService) {
    return restmod.model('/api/v1/users').mix({
      $extend: {
        Model: {
          current: utilService.restMod.nonRest('/current')
        }
      }
    });
  }

})();
