(function() {
  'use strict'

  angular.
    module('pjApp').
    factory('utilService', utilService);

  utilService.$inject = ['$q'];

  function utilService($q) {

    //Calls a url endpoint that lies outside of normal rest methods.
    //As of now only does a get request
    //Meant for extension of RestMod models
    function nonRest(urlSuffix) {

      return function() {
        //This function gets called in the context of the resource it will be fetching. Thus new this() works.
        var instance = new this();

        return instance.$send({
          url: this.$url() + urlSuffix,
          method: 'GET'
        }).$then(function(o) {

          //TODO: TAKE ME OUT OREO
          console.log("Raw response object from utilService: ", o);

          var data = o.$response.data;

          //TODO: TAKE ME OUT OREO
          console.log("Data object extracted in utilService: ", data);

          if(data === null || data.id === undefined) {
            return $q.reject("None found.");
          } else {
            this.$decode(data);
          }
        });
      }

    }

    return {
      restMod : {
        nonRest : nonRest
      }
    }
  }

})();
