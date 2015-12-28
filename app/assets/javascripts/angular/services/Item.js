angular.module('pjApp').factory('Item', function(restmod) {
  return restmod.model('/api/v1/items');
});
