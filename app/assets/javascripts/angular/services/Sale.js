(function() {
  'use strict'

  angular.
    module('pjApp').
    factory('Sale', Sale);

  Sale.$inject = ['restmod', 'utilService'];

  function Sale(restmod, utilService) {

    return restmod.model('/api/v1/sales').mix({
      $extend: {
        Model: {
          current: utilService.restMod.nonRest('/current')
        }
      }
    });

  }
})();
