angular.module('pjApp').factory('User', function(restmod) {
  return restmod.model('/api/v1/users');
});
