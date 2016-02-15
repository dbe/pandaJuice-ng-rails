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
        var url = this.$url() + urlSuffix;

        instance.$action(function() {
          var request = { method: 'GET', url: url};

          //This is a paste of the core part of the $fetch function in restmod. 
          //As of now there is no good way I can find to override the url for the fetch, so I have to do this
          this.$dispatch('before-fetch', [request]);
          this.$send(request, function(_response) {
            this.$unwrap(_response.data);
            this.$dispatch('after-fetch', [_response]);
          }, function(_response) {
            this.$dispatch('after-fetch-error', [_response]);
          });
        });

        return instance;
      }
    }

    return {
      restMod : {
        nonRest : nonRest
      }
    }
  }
})();
