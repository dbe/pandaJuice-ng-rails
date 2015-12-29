angular.module('pjApp').factory('Sale', ['restmod', '$q', function(restmod, $q) {
  return restmod.model('/api/v1/sales').mix({
    $extend: {
      Model: {
        current: function() {
          var instance = new this();
          return instance.$send({
            url: this.$url() + "/current",
            method: 'GET'
          }).$then(function(o) {
            var data = o.$response.data;

            if(data === null || data.id === undefined) {
              return $q.reject("No sales were found.");
            } else {
              this.$decode(data);
            }
          });
        }
      }
    }
  });
}]);
